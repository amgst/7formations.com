import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';

const engineeringAreas = [
  'Software/hardware',
  'Design & development',
  'Systems engineering',
  'Production and servicing',
  'Machining & tooling',
  'Hi-Reliability assemblies in defense programs',
  'Customer support and project management',
];

const serviceHighlights = [
  'AS standards implementation',
  'AS management systems maintenance',
  'AS standards training',
  'Energy and environment support',
  'Health and safety support',
  'Information security management support',
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

export const AerospaceQualityAS9100Page = () => {
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
              Aerospace Quality Mgmt. Systems (AS 9100)
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
              At 7Formations, we specialize in Aviation, Space and Defense industries worldwide. We work with clients such as Siemens, The Boeing Company, United Technologies and Airbus supply chains.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto bg-white rounded-[28px] shadow-[0_28px_64px_-36px_rgba(15,23,42,0.45)] overflow-hidden">
            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Engineering Areas
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Our team has extensive knowledge and experience in the following engineering areas:
              </p>
              <BulletList items={engineeringAreas} />
            </article>

            <article className="p-6 md:p-8">
              <p className="text-slate-700 leading-relaxed">
                Our technical experts are actively involved in American Aerospace Quality Group (AAQG), authors of the AS 9100 series of standards.
              </p>
            </article>

            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Services
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                In addition to AS standards implementation, maintenance and training, we provide a range of services that help you run more efficiently, safely and securely.
              </p>
              <BulletList items={serviceHighlights} />
            </article>

          </div>
        </section>
        <section className="section-padding pt-0 bg-white">
          <div className="max-w-6xl mx-auto bg-brand-blue text-white rounded-[28px] shadow-[0_28px_64px_-36px_rgba(15,23,42,0.45)] p-7 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <h3 className="font-display text-3xl font-bold mb-2">Contact Us for Further Details</h3>
              <p className="text-white/85">
                Let&apos;s plan your AS 9100 implementation and improvement roadmap.
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

