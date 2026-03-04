import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';

export const IntegratedManagementSystemPage = () => {
  return (
    <PageTransition>
      <div className="pb-20">
        <section className="section-padding bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 rounded-bl-[180px] -z-10" />
          <div className="max-w-6xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest mb-6 border border-brand-blue/20">
              Consulting Services
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Integrated Management System (ISO 27001, 9001, 20000)
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
              Integrated Management System and Process Improvement
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto bg-white rounded-[28px] shadow-[0_28px_64px_-36px_rgba(15,23,42,0.45)] overflow-hidden">
            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                One Integrated System - Our Unique Quality Approach
              </h2>
              <p className="text-slate-700 leading-relaxed">
                There is often a high degree of compatibility between the management system standards, although they cover different areas. Many organizations choose to build their management system into one integrated system, covering areas such as quality, health and safety, and the environment. By integrating several standards into one management system, you can eliminate duplication of work.
              </p>
            </article>

            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                One Audit (1 Audit) Approach
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                An integrated management system will allow us to keep our documentation simple by avoiding a complete set of new documentation for each individual standard.
              </p>
              <p className="text-slate-700 leading-relaxed">
                7Formations recommends its clients the best fit option in implementation but whether our clients choose this integrated system approach or build parallel management systems to cover each area, still all of business&apos;s critical areas can be evaluated in a single combined audit.
              </p>
            </article>

            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Added Value of Process Implementation Effort
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Conducting internal audits of management systems simultaneously will not only save company&apos;s time, effort and money but also increase the effectiveness of management system. 7Formations offers you a combined internal audit designed to enable cost-effective audits. Some certifying bodies also offer this kind of registration audits.
              </p>
            </article>

          </div>
        </section>
        <section className="section-padding pt-0 bg-white">
          <div className="max-w-6xl mx-auto bg-brand-blue text-white rounded-[28px] shadow-[0_28px_64px_-36px_rgba(15,23,42,0.45)] p-7 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <h3 className="font-display text-3xl font-bold mb-2">Plan Your Integrated System</h3>
              <p className="text-white/85">
                Combine standards efficiently and reduce duplicated effort.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-brand-red text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-red/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

