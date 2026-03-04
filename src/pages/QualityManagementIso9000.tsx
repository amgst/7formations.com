import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';

const qmsBenefits = [
  'Well defined organizational framework',
  'Accurate procedures and methods',
  'Quality product',
  'Proper management',
  'Satisfaction of the customer',
  'Data management',
  'Transparency',
  'Continuous improvement',
  'Increased production',
  'Fewer defects',
  'Increased reward',
  'Sustainability',
];

const industries = [
  'Health care (medical devices manufacturing and hospital services)',
  'Fresh food processing',
  'IT contracting services',
  'Software development (small to mid-size corporations)',
  'Solid state chips manufacturing',
  'Textile and fiber industry',
  'Medical R & D',
  'Clinical research and trials industries',
  'Government contracting agencies',
];

const leanExamples = [
  'Avoiding over documentation of QMS',
  'Continuous improvement',
  'Agile principles implementation',
  'Avoid duplication of documents in Quality Manual',
  'Value stream mapping concept in documentation',
  'Change management system',
  'Avoid waste of time in lengthy approval process of documentation',
  'Reduce waste of money in overkilling of process',
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

export const QualityManagementIso9000Page = () => {
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
              Quality Management (ISO 9000 Family)
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
              Quality Management System (QMS) is a process that defines the purpose of quality by implementing the framework and activities necessary to improve all important areas of an organization. It causes continuous improvement and efficiency within an organization.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto bg-white rounded-[28px] shadow-[0_28px_64px_-36px_rgba(15,23,42,0.45)] overflow-hidden">
            <article className="p-6 md:p-8">
              <p className="text-slate-700 leading-relaxed mb-4">
                The basic idea of Quality Management System (QMS) is to define a correct procedure in a project that will give quality services and customer satisfaction, and eliminate all errors within the project, and not after its delivery to the consumer or customer.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The world&apos;s demand for products is growing increasingly. Along with rising demand, competition between companies is growing as well. The basis of this competition is now quality, which can only be addressed by implementing QMS in organizations.
              </p>
            </article>

            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Benefits of Implementing Quality Management System (QMS)
              </h2>
              <BulletList items={qmsBenefits} />
            </article>

            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                ISO 9000 Series of QMS Standards
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                These standards are published by ISO, the International Organization for Standardization. ISO 9000 is the series of Quality Management System standards designed to enable organizations to ensure customer quality requirements, increase customer satisfaction, and enhance continuous organizational improvement.
              </p>
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">ISO 9001</h3>
              <p className="text-slate-700 leading-relaxed">
                ISO 9001 is an international quality management standard. It is one of the most popular quality management standards in the world. It is globally accepted and can be applied to all types of organizations. An organization should implement ISO 9001 for customer satisfaction by meeting customer requirements.
              </p>
            </article>

            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                ISO 9001 Basic Process Model
              </h2>
              <img
                src="/images/Diagram1.jpg"
                alt="ISO 9001 Basic Process Model"
                className="w-full max-w-4xl rounded-2xl border border-slate-200 mb-6"
              />
              <p className="text-slate-700 leading-relaxed mb-4">
                7Formations has vast experience of quality systems implementation in the following industries:
              </p>
              <BulletList items={industries} />
            </article>

            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Lean Quality Systems
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Lean quality system means applying lean principles to your quality management system. This system increases organizational profit through ISO training, QMS implementation and quality audits.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                7Formations helps clients adopt quality systems with lean principles. Examples include:
              </p>
              <BulletList items={leanExamples} />
            </article>

            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                One Integrated System - Our Unique Quality Approach
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                There is often a high degree of compatibility between management system standards, although they cover different areas. Many organizations choose to build one integrated system covering quality, health and safety, and environmental areas. By integrating several standards into one management system, duplication of work can be eliminated.
              </p>

              <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">One Audit Approach</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                An integrated management system allows documentation to stay simple by avoiding a complete new set of documentation for each individual standard.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                7Formations recommends best-fit implementation options. Whether clients choose an integrated system approach or parallel management systems for each area, all critical business areas can still be evaluated in a single combined audit.
              </p>

              <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">
                Added Value of Process Implementation Effort
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Conducting internal audits of management systems simultaneously saves time, effort and cost while increasing management system effectiveness. 7Formations offers combined internal audits designed for cost-effective audits. Some certifying bodies also offer similar registration audits.
              </p>
            </article>

          </div>
        </section>
        <section className="section-padding pt-0 bg-white">
          <div className="max-w-6xl mx-auto bg-brand-blue text-white rounded-[28px] shadow-[0_28px_64px_-36px_rgba(15,23,42,0.45)] p-7 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <h3 className="font-display text-3xl font-bold mb-2">Build a Practical QMS Roadmap</h3>
              <p className="text-white/85">
                Get implementation support for ISO 9001 and integrated system audits.
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

