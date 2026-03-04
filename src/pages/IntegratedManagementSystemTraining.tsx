import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';

const whoShouldAttend = [
  'Executives and senior management',
  'General managers',
  'Business unit managers',
  'Quality professionals',
  'Management representatives',
];

const sessionTopics = [
  'Introduction and background to ISO 9001:2008',
  'Concept and philosophy of Quality Management Systems',
  'Review of ISO 9001:2008 Requirements',
  "Potential benefits of using ISO 9001:2008 in client's particular environment",
  'How to plan a successful implementation of Quality Management System',
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

export const IntegratedManagementSystemTrainingPage = () => {
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
              Integrated Management System Training
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
              A Quality Management System (QMS) offers a comprehensive framework to build processes that help ensure key business objectives are achieved. For ISO 9001 details, please visit{' '}
              <a href="https://www.iso.org" target="_blank" rel="noreferrer" className="text-brand-blue hover:underline">www.iso.org</a>.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto bg-white rounded-[28px] shadow-[0_28px_64px_-36px_rgba(15,23,42,0.45)] overflow-hidden">
            <article className="p-6 md:p-8">
              <p className="text-slate-700 leading-relaxed">
                7Formations can help you learn, document, implement or audit a QMS across any industry, from manufacturing to professional service organizations with our range of public and in-house course offerings.
              </p>
            </article>

            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                One Integrated System - Our Unique Quality Approach
              </h2>
              <p className="text-slate-700 leading-relaxed">
                There is often a high degree of compatibility between management system standards, although they cover different areas. Many organizations choose to build their management system into one integrated system, covering areas such as quality, health and safety, and the environment. By integrating several standards into one management system, you can eliminate duplication of work.
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
                7Formations recommends its clients the best-fit option in implementation, but whether clients choose this integrated approach or build parallel systems, all critical business areas can still be evaluated in a single combined audit.
              </p>
            </article>

            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Added Value of Process Implementation Effort
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Conducting internal audits of management systems simultaneously will save time, effort and money while increasing management system effectiveness. 7Formations offers combined internal audits designed for cost-effective auditing. Some certifying bodies also offer this kind of registration audit.
              </p>
            </article>

            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">Course Objectives</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                This one-day course is designed as a starting point for senior management and process engineers to gain an appreciation of ISO 9001 and understand the benefits of implementing a Quality Management System.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The course reviews requirements and provides understanding of the standard. Additionally, it identifies key activities needed to successfully plan implementation, and how to identify and prioritize activities aligned with company business objectives.
              </p>
            </article>

            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">Prerequisites</h2>
              
                Some understanding of quality management systems and their place within the organization's operating structure

            </article>

            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">Who Should Attend?</h2>
              <BulletList items={whoShouldAttend} />
            </article>

            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">7Formations Training Session Topics</h2>
              <BulletList items={sessionTopics} />
              <p className="mt-6 text-slate-700">
                <strong>Request Course Information </strong>
                <Link to="/contact" className="text-brand-blue hover:underline">here</Link>
              </p>
            </article>

            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">In-house Training</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                This course can be delivered onsite at your preferred office location. Request an in-house quote{' '}
                <Link to="/contact" className="text-brand-blue hover:underline">here</Link>.
              </p>
              <p className="text-slate-700 leading-relaxed">
                We can plan tailored training per your company specific requirements and objectives, and address your particular requirements and QMS mapping in this training.
              </p>
            </article>
          </div>
        </section>

        <section className="section-padding pt-0 bg-white">
          <div className="max-w-6xl mx-auto bg-brand-blue text-white rounded-[28px] shadow-[0_28px_64px_-36px_rgba(15,23,42,0.45)] p-7 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <h3 className="font-display text-3xl font-bold mb-2">Plan Integrated Management Training</h3>
              <p className="text-white/85">Let us tailor a practical one-day session for your team.</p>
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

