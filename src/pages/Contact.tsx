import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Consulting Inquiry',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: 'Consulting Inquiry', message: '' });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <PageTransition>
      <div className="pb-20">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-slate-900 mb-6">Let's <span className="text-brand-blue">Connect</span></h1>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                Ready to take your organization to the next level? Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-brand-blue/5 text-brand-blue rounded-2xl flex items-center justify-center">
                    <Phone size={28} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Call Us</div>
                    <div className="text-base font-bold text-slate-900">Greater Boston Area: (617) 657-9377</div>
                    <div className="text-base font-bold text-slate-900">Washington DC Metro: (571) 327-6440</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-brand-blue/5 text-brand-blue rounded-2xl flex items-center justify-center">
                    <Mail size={28} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Email Us</div>
                    <div className="text-xl font-bold text-slate-900">info@7formations.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-brand-blue/5 text-brand-blue rounded-2xl flex items-center justify-center">
                    <Linkedin size={28} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">LinkedIn</div>
                    <a href="https://www.linkedin.com/in/masajid/" className="text-xl font-bold text-slate-900 hover:text-brand-blue transition-colors">Masroor Sajid</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 md:p-12 rounded-[48px] shadow-2xl shadow-brand-blue/10 border border-slate-100">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h2>
                  <p className="text-slate-600 mb-8">Thank you for reaching out. We'll be in touch shortly.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-brand-blue font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all" 
                      placeholder="john@example.com" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Subject</label>
                    <select 
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all bg-white"
                    >
                      <option>Consulting Inquiry</option>
                      <option>Training Inquiry</option>
                      <option>CMMI Appraisal</option>
                      <option>ISO Certification</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Message</label>
                    <textarea 
                      required
                      rows={5} 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all" 
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-brand-red text-white py-5 rounded-2xl font-bold hover:bg-brand-red/90 transition-all shadow-xl shadow-brand-red/20 flex items-center justify-center gap-2"
                  >
                    <Send size={20} /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      </div>
    </PageTransition>
  );
};

