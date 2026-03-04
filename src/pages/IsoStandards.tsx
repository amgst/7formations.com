import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';

type IsoTrainingTab = {
  title: string;
  courseObjectives: string[];
  prerequisites?: string[];
  whoShouldAttend: string[];
  sessionTopics: string[];
  inHouse: string;
};

const ismsImplementation: IsoTrainingTab = {
  title: 'ISMS Implementation Training',
  courseObjectives: [
    'Designed as a starting point for information security engineers and information assurance consultants to gain appreciation of ISO 27001 ISMS standard',
    'Reviews ISMS requirements and provides understanding of the required "shalls"',
    'Identifies key activities needed to successfully plan implementation',
    'Helps identify and prioritize activities aligned with company business objectives',
  ],
  prerequisites: [
    "Some understanding of quality management systems and their place within the organization's operating structure",
    "Some knowledge of information security policy and regulatory requirements of candidate's particular industry",
  ],
  whoShouldAttend: [
    'Technical managers',
    'Quality and information assurance engineers',
    'General managers',
    'Business unit managers',
    'Information security professionals',
    'Information officers',
  ],
  sessionTopics: [
    'Introduction and background to ISO 27001:2005',
    'Concept and philosophy of Information Security Management Systems',
    'Review of ISO 27001:2005 requirements',
    "Potential benefits of using ISO 27001:2005 in client's environment",
    'How to plan a successful ISMS implementation',
  ],
  inHouse:
    'This course can be delivered onsite at your preferred office location. We can plan tailored training as per your company requirements and objectives, including ISMS mapping for your environment.',
};

const qmsInternalAudit: IsoTrainingTab = {
  title: 'QMS Internal Audit Training',
  courseObjectives: [
    'Practical 2-day hands-on course for effective internal auditing techniques',
    'Helps participants prepare for internal audits within their own organizations',
    'Improves evaluation and communication skills',
    'Refines audit reporting capability and corrective action execution',
  ],
  whoShouldAttend: [
    'Quality cell/control team members and professionals',
    'Senior managers seeking more value from internal audit systems',
    'Management representatives',
    'Line managers',
    'Internal audit candidates',
  ],
  sessionTopics: [
    'Conducting an effective internal audit',
    'Developing effective auditing techniques',
    'Identifying key activities for a successful audit',
    'Improving communication for audit findings',
    'Reporting findings and evaluations',
    'Developing corrective and preventive action programs',
    'Auditing continual improvement programs',
  ],
  inHouse:
    'This course can be delivered onsite at your preferred office location. We can plan a tailored training according to your specific requirements and objectives.',
};

const ismsInternalAudit: IsoTrainingTab = {
  title: 'ISMS Internal Audit Training',
  courseObjectives: [
    'Practical 2-day hands-on training to develop effective ISMS internal auditing techniques',
    'Helps participants prepare for internal audits within their own organizations',
    'Uses workshops, simulated audits, tutorials and case studies',
    'Improves evaluation, communication and reporting qualifications',
    'Strengthens ability to implement corrective action programs',
  ],
  whoShouldAttend: [
    'Information assurance team members and professionals',
    'Senior managers seeking more value from information security systems',
    'Physical and logical security team members',
    'Line managers',
    'ISMS internal audit candidates',
  ],
  sessionTopics: [
    'Conducting an effective internal audit',
    'Developing effective auditing techniques',
    'Identifying key activities for a successful audit',
    'Improving communication for audit findings',
    'Reporting findings and evaluations',
    'Developing corrective and preventive action programs',
    'Improving ISMS continuously',
  ],
  inHouse:
    'This course can be delivered onsite at your preferred office location. We can plan tailored training as per your company specific requirements and objectives.',
};

const tabs: IsoTrainingTab[] = [ismsImplementation, qmsInternalAudit, ismsInternalAudit];

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

export const IsoStandardsPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const current = tabs[activeTab];

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
              ISO Standards
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
              Management System Implementation and Internal Audit Trainings
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto bg-white rounded-[28px] shadow-[0_28px_64px_-36px_rgba(15,23,42,0.45)] overflow-hidden">
            <article className="p-6 md:p-8">
              <p className="text-slate-700 leading-relaxed mb-4">
                An Information Security Management System (ISMS) offers a comprehensive framework to build information security processes that support key business information assurance objectives. For details about ISO 27001 standards, please visit{' '}
                <a href="https://www.iso.org" target="_blank" rel="noreferrer" className="text-brand-blue hover:underline">
                  www.iso.org
                </a>
                .
              </p>
              <p className="text-slate-700 leading-relaxed">
                7Formations can help you learn, document, implement or audit an ISMS across industries, from manufacturing to professional service organizations, with our public and in-house offerings.
              </p>
            </article>

            <article className="p-6 md:p-8">
              <div className="bg-slate-50 border border-slate-200 rounded-[28px] p-4 md:p-5">
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {tabs.map((tab, index) => (
                    <button
                      key={tab.title}
                      onClick={() => setActiveTab(index)}
                      className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                        activeTab === index
                          ? 'bg-brand-blue text-white'
                          : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      {tab.title}
                    </button>
                  ))}
                </div>

                <div className="mt-4 bg-white border border-slate-100 rounded-2xl p-6 md:p-8">
                  <h2 className="font-display text-3xl font-bold text-slate-900 mb-5">{current.title}</h2>

                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">Course Objectives</h3>
                  <BulletList items={current.courseObjectives} />

                  {current.prerequisites && (
                    <div className="mt-7">
                      <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">Prerequisites</h3>
                      <BulletList items={current.prerequisites} />
                    </div>
                  )}

                  <div className="mt-7">
                    <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">Who Should Attend?</h3>
                    <BulletList items={current.whoShouldAttend} />
                  </div>

                  <div className="mt-7">
                    <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">Key Session Topics</h3>
                    <BulletList items={current.sessionTopics} />
                  </div>

                  <div className="mt-7">
                    <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">In-house Training</h3>
                    <p className="text-slate-700 leading-relaxed">{current.inHouse}</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section-padding pt-0 bg-white">
          <div className="max-w-6xl mx-auto bg-brand-blue text-white rounded-[28px] shadow-[0_28px_64px_-36px_rgba(15,23,42,0.45)] p-7 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <h3 className="font-display text-3xl font-bold mb-2">Request Course Information</h3>
              <p className="text-white/85">Get a tailored in-house or public ISO training plan for your team.</p>
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

