import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';

const implementationSteps = [
  'Define customer value clearly',
  'Map the full value stream',
  'Eliminate non-value-added waste',
  'Create smooth process flow',
  'Establish pull-based execution',
  'Standardize and sustain improvements',
  'Pursue continuous improvement',
];

export const LeanSixSigmaPage = () => {
  return (
    <PageTransition>
      <div className="pb-20">
        <section className="section-padding bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 rounded-bl-[180px] -z-10" />
          <div className="max-w-6xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest mb-6 border border-brand-blue/20">
              Consulting & Training
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Lean Six Sigma
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
              The basic idea of lean is to increase customer value through continuous improvement with less resources while eliminating waste of time, effort and other non-value-added activities. Lean is all about smooth process flow.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto bg-white rounded-[28px] shadow-[0_28px_64px_-36px_rgba(15,23,42,0.45)] overflow-hidden">
            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                7 Key Steps to Implement Lean Principles
              </h2>
              <img
                src="/images/Lean Six Sigma1.jpg"
                alt="7 key steps to implement Lean principles"
                className="w-full max-w-4xl rounded-2xl border border-slate-200 mb-6"
              />
              <ul className="space-y-3">
                {implementationSteps.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-2 w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="p-6 md:p-8">
              <p className="text-slate-700 leading-relaxed mb-4">
                The current global recession in worldwide economies is creating acute pressure and everyone is focusing on reducing expenses and improving profitability. In these circumstances, organizations that respond well recover quickly from economic crisis.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Lean helps companies in restructuring and cost-cutting. It decreases cycle time, increases efficiency gains and enhances value-added services to the customer.
              </p>
              <blockquote className="border-l-4 border-brand-blue pl-4 text-slate-700 italic">
                The value-adding activities are simply only those things the customer is willing to pay for; everything else is waste and should be eliminated, simplified, reduced, or integrated. (Rizzardo, 2003)
              </blockquote>
              <img
                src="/images/Lean Six Sigma2.jpg"
                alt="Lean value-adding activities visual"
                className="w-full max-w-4xl rounded-2xl border border-slate-200 mt-6"
              />
            </article>

            <article className="p-6 md:p-8">
              <p className="text-slate-700 leading-relaxed mb-4">
                Lean can be applied in any process or business. It is not only a cost reduction program but an entirely different conception for organizational improvement.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The basic concept behind lean is to improve systematically a messy home or workplace where it is troublesome and fatiguing to find things. It improves the overall system by recognizing all interfaces.
              </p>
              <img
                src="/images/Lean Six Sigma3.png"
                alt="Lean systems interfaces visual"
                className="w-full max-w-4xl rounded-2xl border border-slate-200 mt-6"
              />
            </article>

            <article className="p-6 md:p-8">
              <p className="text-slate-700 leading-relaxed mb-4">
                Our unique engagement model based on customer satisfaction and savings plans helps clients define roadmaps and priorities.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="mt-2 w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
                  <span>Lean Healthcare</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="mt-2 w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
                  <span>Lean Manufacturing</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="mt-2 w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
                  <span>Lean Quality Systems</span>
                </li>
              </ul>
            </article>

            <article className="p-6 md:p-8">
              <p className="text-slate-700 leading-relaxed mb-4">
                7Formations has working experience with leading healthcare solution providers in the Greater Boston Area. We perform gap analyses to help implement the proven MIT Lean Advancement Initiative Enterprise Transformation Roadmap.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Usually, organizations achieve 10-20% overall improvement in healthcare businesses with successful Lean implementation.
              </p>
            </article>

          </div>
        </section>
        <section className="section-padding pt-0 bg-white">
          <div className="max-w-6xl mx-auto bg-brand-blue text-white rounded-[28px] shadow-[0_28px_64px_-36px_rgba(15,23,42,0.45)] p-7 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <h3 className="font-display text-3xl font-bold mb-2">Start Your Lean Journey</h3>
              <p className="text-white/85">
                Get a practical roadmap for waste reduction and measurable efficiency gains.
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

