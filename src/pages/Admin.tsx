import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import {
  BarChart3, Users, MessageSquare, Settings, LogOut, Plus, Trash2, CheckCircle2, Pencil
} from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import {
  addProduct,
  deleteProduct,
  getProducts,
  Product,
  ProductInput,
  updateProduct,
} from '../services/productService';
import { getProductImageUrl, PRODUCT_IMAGE_PLACEHOLDER } from '../utils/productImage';

const emptyProductForm: ProductInput = {
  name: '',
  description: '',
  price: 0,
  image: '',
  category: '',
};

export const AdminPage = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [activeTab, setActiveTab] = useState('messages');
  const [isLoading, setIsLoading] = useState(true);
  const [isSavingProduct, setIsSavingProduct] = useState(false);
  const [editingProductId, setEditingProductId] = useState<number | null>(null);
  const [productForm, setProductForm] = useState<ProductInput>(emptyProductForm);

  useEffect(() => {
    void Promise.all([fetchMessages(), fetchProducts()]).finally(() => setIsLoading(false));
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await fetch('/api/messages');
      const data = await res.json();
      setMessages(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      console.error(err);
    }
  };

  const resetProductForm = () => {
    setEditingProductId(null);
    setProductForm(emptyProductForm);
  };

  const handleProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSavingProduct(true);
    try {
      const payload: ProductInput = {
        ...productForm,
        image: productForm.image ?? '',
      };
      if (editingProductId !== null) {
        await updateProduct(editingProductId, payload);
      } else {
        await addProduct(payload);
      }
      await fetchProducts();
      resetProductForm();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSavingProduct(false);
    }
  };

  const startEditProduct = (product: Product) => {
    setEditingProductId(product.id);
    setProductForm({
      name: product.name ?? '',
      description: product.description ?? '',
      price: Number(product.price) || 0,
      image: product.image ?? '',
      category: product.category ?? '',
    });
    setActiveTab('products');
  };

  const handleDeleteProduct = async (id: number) => {
    try {
      await deleteProduct(id);
      await fetchProducts();
      if (editingProductId === id) resetProductForm();
    } catch (err) {
      console.error(err);
    }
  };

  const stats = useMemo(
    () => [
      { label: 'Total Messages', value: messages.length, icon: <MessageSquare size={20} />, color: 'bg-brand-red' },
      { label: 'Products', value: products.length, icon: <Settings size={20} />, color: 'bg-brand-blue' },
      { label: 'Testimonials', value: '7', icon: <Users size={20} />, color: 'bg-emerald-500' },
    ],
    [messages.length, products.length]
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
            onClick={() => setActiveTab('products')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'products' ? 'bg-brand-blue text-white' : 'text-slate-400 hover:bg-slate-800'}`}
          >
            <Settings size={20} /> Products
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
              {activeTab === 'messages' ? 'Recent Inquiries' : activeTab === 'products' ? 'Manage Products' : 'Overview'}
            </h2>
            {activeTab === 'products' && (
              <button
                onClick={() => {
                  resetProductForm();
                }}
                className="bg-brand-blue text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-brand-blue/90 transition-all"
              >
                <Plus size={18} /> New Product
              </button>
            )}
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
            ) : activeTab === 'products' ? (
              <div className="grid lg:grid-cols-2 gap-8">
                <form onSubmit={handleProductSubmit} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-4">
                  <h3 className="font-bold text-slate-900 text-lg">
                    {editingProductId !== null ? 'Edit Product' : 'Add Product'}
                  </h3>
                  <div>
                    <label className="text-sm font-bold text-slate-700">Name</label>
                    <input
                      required
                      type="text"
                      value={productForm.name}
                      onChange={(e) => setProductForm((prev) => ({ ...prev, name: e.target.value }))}
                      className="mt-1 w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-slate-700">Description</label>
                    <textarea
                      required
                      rows={4}
                      value={productForm.description}
                      onChange={(e) => setProductForm((prev) => ({ ...prev, description: e.target.value }))}
                      className="mt-1 w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-bold text-slate-700">Price</label>
                      <input
                        required
                        type="number"
                        min="0"
                        step="0.01"
                        value={productForm.price}
                        onChange={(e) => setProductForm((prev) => ({ ...prev, price: Number(e.target.value) || 0 }))}
                        className="mt-1 w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-bold text-slate-700">Category</label>
                      <input
                        type="text"
                        value={productForm.category}
                        onChange={(e) => setProductForm((prev) => ({ ...prev, category: e.target.value }))}
                        className="mt-1 w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-bold text-slate-700">Image (URL or Filename)</label>
                    <input
                      type="text"
                      value={productForm.image}
                      onChange={(e) => setProductForm((prev) => ({ ...prev, image: e.target.value }))}
                      placeholder="https://... or /images/foo.jpg or foo.jpg"
                      className="mt-1 w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSavingProduct}
                      className="bg-brand-blue text-white px-5 py-3 rounded-xl text-sm font-bold hover:bg-brand-blue/90 transition-all disabled:opacity-60"
                    >
                      {isSavingProduct ? 'Saving...' : editingProductId !== null ? 'Update Product' : 'Add Product'}
                    </button>
                    {editingProductId !== null && (
                      <button
                        type="button"
                        onClick={resetProductForm}
                        className="px-5 py-3 rounded-xl text-sm font-bold border border-slate-200 text-slate-700 hover:bg-slate-100 transition-all"
                      >
                        Cancel Edit
                      </button>
                    )}
                  </div>
                </form>

                <div className="space-y-4">
                  {products.length === 0 ? (
                    <div className="text-center py-12 text-slate-400 border border-slate-100 rounded-2xl bg-slate-50">
                      No products yet.
                    </div>
                  ) : (
                    products.map((product) => (
                      <div key={product.id} className="p-4 rounded-2xl border border-slate-100 bg-white hover:border-brand-blue/20 transition-all">
                        <div className="flex gap-4">
                          <img
                            src={getProductImageUrl(product.image) || PRODUCT_IMAGE_PLACEHOLDER}
                            alt={product.name}
                            className="w-24 h-24 rounded-xl object-cover border border-slate-200"
                            onError={(e) => {
                              if (e.currentTarget.src !== PRODUCT_IMAGE_PLACEHOLDER) {
                                e.currentTarget.src = PRODUCT_IMAGE_PLACEHOLDER;
                              }
                            }}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <div className="font-bold text-slate-900">{product.name}</div>
                                <div className="text-sm text-slate-500">{product.category || 'Uncategorized'}</div>
                              </div>
                              <div className="font-bold text-brand-blue">${Number(product.price || 0).toFixed(2)}</div>
                            </div>
                            <p className="text-sm text-slate-600 mt-2 line-clamp-3">{product.description}</p>
                            <div className="mt-3 flex items-center gap-4">
                              <button
                                onClick={() => startEditProduct(product)}
                                className="text-xs font-bold text-brand-blue flex items-center gap-1 hover:underline"
                              >
                                <Pencil size={14} /> Edit
                              </button>
                              <button
                                onClick={() => void handleDeleteProduct(product.id)}
                                className="text-xs font-bold text-red-500 flex items-center gap-1 hover:underline"
                              >
                                <Trash2 size={14} /> Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
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
