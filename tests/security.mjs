import { spawn } from 'node:child_process';
import { once } from 'node:events';
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';

const temp = await mkdtemp(path.join(tmpdir(), '7formations-security-'));
const password = 'test-only-password-123456';
const child = spawn(process.execPath, ['--import', 'tsx', 'server.ts'], {
  env: { ...process.env, NODE_ENV: 'production', PORT: '0', ADMIN_PASSWORD: password, APP_URL: 'http://localhost', DATABASE_PATH: path.join(temp, 'test.db') },
  stdio: ['ignore', 'pipe', 'pipe'],
});
let output = '';
child.stderr.on('data', chunk => { output += chunk; });
try {
  const port = await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`Server startup timeout: ${output}`)), 15000);
    child.stdout.on('data', chunk => {
      const match = chunk.toString().match(/localhost:(\d+)/);
      if (match) { clearTimeout(timer); resolve(match[1]); }
    });
    child.once('exit', code => { clearTimeout(timer); reject(new Error(`Server exited ${code}: ${output}`)); });
  });
  const request = (route, options) => fetch(`http://127.0.0.1:${port}${route}`, options);
  const auth = { Authorization: `Basic ${Buffer.from(`admin:${password}`).toString('base64')}`, 'Content-Type': 'application/json' };
  for (const [route, method] of [['/api/messages', 'GET'], ['/admin', 'GET'], ['/api/products', 'POST'], ['/api/products/1', 'PUT'], ['/api/products/1', 'DELETE'], ['/api/services', 'POST']]) {
    assert.equal((await request(route, { method })).status, 401, `${method} ${route} must require authentication`);
  }
  assert.equal((await request('/api/messages', { headers: auth })).status, 200);
  assert.equal((await request('/api/products', { method: 'POST', headers: { ...auth, Origin: 'https://evil.example' }, body: '{}' })).status, 403);
  assert.equal((await request('/api/products', { method: 'POST', headers: auth, body: '{}' })).status, 400);
  const created = await request('/api/products', { method: 'POST', headers: auth, body: JSON.stringify({ name: 'Test', description: 'Test product', price: 1 }) });
  assert.equal(created.status, 200);
  const { id } = await created.json();
  assert.equal((await request(`/api/products/${id}`, { method: 'DELETE', headers: auth })).status, 200);
  assert.equal((await request(`/api/products/${id}`, { method: 'DELETE', headers: auth })).status, 404);
  const json = { 'Content-Type': 'application/json' };
  assert.equal((await request('/api/contact', { method: 'POST', headers: json, body: '{' })).status, 400);
  assert.equal((await request('/api/contact', { method: 'POST', headers: json, body: '{}' })).status, 400);
  assert.equal((await request('/api/contact', { method: 'POST', headers: json, body: JSON.stringify({ name: 'Test', email: 'invalid', subject: 'Hello', message: 'Test' }) })).status, 400);
  assert.equal((await request('/api/contact', { method: 'POST', headers: json, body: JSON.stringify({ name: 'Test', email: 'test@example.com', subject: 'Hello', message: 'Test' }) })).status, 200);
  await request('/api/contact', { method: 'POST', headers: json, body: '{}' });
  assert.equal((await request('/api/contact', { method: 'POST', headers: json, body: '{}' })).status, 429);
  const page = await request('/');
  assert.equal(page.headers.get('x-frame-options'), 'DENY');
  assert.ok(page.headers.get('content-security-policy'));
  assert.equal(page.headers.get('x-powered-by'), null);
  assert.equal((await request('/api/missing')).status, 404);
  const invalid = await request('/api/products', { method: 'POST', headers: auth, body: JSON.stringify({ name: 'Test', description: 'x'.repeat(17000) }) });
  assert.equal(invalid.status, 413);
  console.log('Security integration checks passed. Test data isolated from the website database.');
} finally {
  const exited = once(child, 'exit');
  child.kill();
  await exited;
  await rm(temp, { recursive: true, force: true });
}
