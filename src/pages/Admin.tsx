import React, { useEffect, useMemo, useState } from 'react';
import {
  BarChart3, Users, MessageSquare, Settings, LogOut, Trash2, CheckCircle2
} from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { testimonialsData } from '../data/testimonials';

export const AdminPage = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState('messages');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    void fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await fetch('/api/messages');
      const data = await res.json();
      setMessages(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const stats = useMemo(
    () => [
      { label: 'Total Messages', value: messages.length, icon: <MessageSquare size={20} />, color: 'bg-brand-red' },
      { label: 'Active Services', value: '8', icon: <Settings size={20} />, color: 'bg-brand-blue' },
      { label: 'Testimonials', value: testimonialsData.length, icon: <Users size={20} />, color: 'bg-emerald-500' },
    ],
    [messages.length]
  );

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-50 flex">
        <aside className="w-64 bg-slate-900 text-white p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-12">
            <img
              src="https://www.7formations.com/wp-content/uploads/2019/09/7Formation-Logo.png"
              alt="7Formations Logo"
              className="h-8 w-auto brightness-0 invert"
              referrerPolicy="no-referrer"
            />
            <span className="font-display font-bold text-xl tracking-tight">Admin</span>
          </div>

          <nav className="flex-1 space-y-2">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'dashboard' ? 'bg-brand-blue text-white' : 'text-slate-400 hover:bg-slate-800'}`}
            >
              <BarChart3 size={20} /> Dashboard
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'messages' ? 'bg-brand-blue text-white' : 'text-slate-400 hover:bg-slate-800'}`}
            >
              <MessageSquare size={20} /> Messages
            </button>
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'testimonials' ? 'bg-brand-blue text-white' : 'text-slate-400 hover:bg-slate-800'}`}
            >
              <Users size={20} /> Testimonials
            </button>
          </nav>

          <button className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white transition-colors mt-auto">
            <LogOut size={20} /> Logout
          </button>
        </aside>

        <main className="flex-1 p-8 md:p-12 overflow-y-auto">
          <header className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
              <p className="text-slate-500">Manage your website content and inquiries.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="font-bold text-slate-900">Admin User</div>
                <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Super Admin</div>
              </div>
              <img src="https://picsum.photos/seed/admin/100/100" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" alt="Admin" />
            </div>
          </header>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 ${stat.color} text-white rounded-xl flex items-center justify-center`}>
                    {stat.icon}
                  </div>
                  <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg">+12%</span>
                </div>
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[32px] shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-8 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">
                {activeTab === 'messages' ? 'Recent Inquiries' : activeTab === 'testimonials' ? 'Testimonials' : 'Overview'}
              </h2>
            </div>

            <div className="p-8">
              {isLoading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-blue"></div>
                </div>
              ) : activeTab === 'messages' ? (
                <div className="space-y-6">
                  {messages.length === 0 ? (
                    <div className="text-center py-12 text-slate-400">No messages yet.</div>
                  ) : (
                    messages.map((msg) => (
                      <div key={msg.id} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-blue/20 transition-all group">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="font-bold text-slate-900">{msg.name}</div>
                            <div className="text-sm text-slate-500">{msg.email}</div>
                          </div>
                          <div className="text-xs text-slate-400">{new Date(msg.created_at).toLocaleDateString()}</div>
                        </div>
                        <div className="font-semibold text-brand-blue mb-2">{msg.subject}</div>
                        <p className="text-slate-600 text-sm leading-relaxed">{msg.message}</p>
                        <div className="mt-4 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="text-xs font-bold text-brand-blue flex items-center gap-1 hover:underline">
                            <CheckCircle2 size={14} /> Mark as Read
                          </button>
                          <button className="text-xs font-bold text-red-500 flex items-center gap-1 hover:underline">
                            <Trash2 size={14} /> Delete
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              ) : activeTab === 'testimonials' ? (
                <div className="space-y-4">
                  {testimonialsData.map((item, index) => (
                    <div key={`${item.author}-${index}`} className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="flex items-start gap-4">
                        <img
                          src={item.image}
                          alt={item.author}
                          className="w-12 h-12 rounded-full object-cover shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <div className="font-bold text-slate-900">{item.author}</div>
                          <div className="text-sm text-slate-500 mb-2">{item.role}</div>
                          <p className="text-slate-700 text-sm leading-relaxed">{item.quote}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-slate-400">
                  Feature coming soon.
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </PageTransition>
  );
};
