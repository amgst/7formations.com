import React from 'react';
import { PageTransition } from '../components/PageTransition';

export const BlogPage = () => {
  return (
    <PageTransition>
      <div className="pb-20">
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Blog
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mb-10">
              Insights on management systems, process improvement, compliance, and performance excellence.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'How to Integrate ISO Standards Without Duplicate Work',
                'CMMI and ISO: Building a Practical Improvement Roadmap',
                'EVM Basics for Growing Delivery Teams',
              ].map((title) => (
                <article key={title} className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                  <h2 className="font-display text-2xl font-bold text-slate-900 mb-3">{title}</h2>
                  <p className="text-slate-600 text-sm">
                    New article coming soon.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

