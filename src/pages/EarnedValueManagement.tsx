import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';

const evmComponents = [
  'EVM Central Repository (section of Measurement Assets Library and/or Process Asset Library)',
  'Root Cause Analyses in aspects of cost and schedule performance',
  'Team Charters to facilitate efficient communication and interpretation',
  'Support services to implement EVM systems in compliance with federal agencies and other state institutions',
];

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 text-slate-700">
        <span className="mt-2 w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const EarnedValueManagementPage = () => {
  return (
    <PageTransition>
      <div className="pb-20">
        <section className="section-padding bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 rounded-bl-[180px] -z-10" />
          <div className="max-w-6xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest mb-6 border border-brand-blue/20">
              Training
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Earned Value Management (Cost and Schedule)
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
              EVM can be used for contracts compliance and project insight indicators. It is a powerful tool to control both cost and schedule variance at program and project levels.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto bg-white rounded-[28px] shadow-[0_28px_64px_-36px_rgba(15,23,42,0.45)] overflow-hidden">
            <article className="p-6 md:p-8">
              <p className="text-slate-700 leading-relaxed mb-4">
                EVM is not properly practiced in IT project portfolios. There are many reasons, with the most prominent being agility aspects of software development, services and IT support projects.
              </p>
              <p className="text-slate-700 leading-relaxed">
                7Formations believes EVM can be practiced and programmed in today&apos;s portals and content management systems such as MS SharePoint, Drupal and Joomla.
              </p>
            </article>

            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Implementation Components
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                We help clients set up the following components:
              </p>
              <BulletList items={evmComponents} />
              <p className="text-slate-700 leading-relaxed mt-6">
                For more details see Project Management Institute website:{' '}
                <a href="http://www.pmi.org" target="_blank" rel="noreferrer" className="text-brand-blue hover:underline">
                  http://www.pmi.org
                </a>
              </p>
            </article>

            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">EVM and CMMI</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                CMMI Institute&apos;s Capability Maturity Model Integration (CMMI) is well recognized in software development industry worldwide. 7Formations has certified consultants in CMMI and PMI areas to deliver services in these domains.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                There are best practices in the CMMI model related to measurement and analysis through which EVM tools can be utilized.
              </p>
              <p className="text-slate-700 leading-relaxed">
                For details related to individual practices, see EVM at PMI and CMMI model documentation at CMMI Institute.
              </p>
            </article>

            <article className="p-6 md:p-8">
              <p className="text-slate-700 leading-relaxed">
                For EVM and CMMI related services please contact 7Formations.
              </p>
            </article>
          </div>
        </section>

        <section className="section-padding pt-0 bg-white">
          <div className="max-w-6xl mx-auto bg-brand-blue text-white rounded-[28px] shadow-[0_28px_64px_-36px_rgba(15,23,42,0.45)] p-7 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <h3 className="font-display text-3xl font-bold mb-2">Need EVM Setup Support?</h3>
              <p className="text-white/85">Plan a cost and schedule control implementation for your projects.</p>
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

