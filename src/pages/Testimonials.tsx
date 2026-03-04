import React from 'react';
import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { getVisibleTestimonials, testimonialsData } from '../data/testimonials';

export const TestimonialsPage = () => {
  const visibleTestimonials = getVisibleTestimonials(testimonialsData);

  return (
    <PageTransition>
      <div className="pb-20">
        <section className="section-padding bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h1 className="font-display text-5xl md:text-6xl font-bold text-slate-900 mb-5">
                Client <span className="text-brand-blue">Testimonials</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                A complete list of recommendations and feedback from clients and leadership professionals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {visibleTestimonials.map((t, i) => (
                <motion.article
                  key={`${t.author}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="bg-white border border-slate-100 rounded-[28px] p-8 shadow-sm hover:shadow-xl hover:border-brand-blue/20 transition-all"
                >
                  <p className="text-slate-700 leading-relaxed italic mb-7">"{t.quote}"</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={t.image}
                      alt={t.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-brand-red"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="font-bold text-slate-900">{t.author}</div>
                      <div className="text-sm text-slate-500">{t.role}</div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
            {visibleTestimonials.length === 0 && (
              <div className="text-center py-12 text-slate-500">No testimonials are visible right now.</div>
            )}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

