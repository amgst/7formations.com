import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';

const specializations = [
  {
    title: 'Collaboration',
    content:
      'Solutions to enable communication and innovation throughout an organization to allow employees to act on business insights.',
  },
  {
    title: 'Content Management',
    content:
      'Solutions to enable your organization to capture, manage, store and publish documents and unstructured content in your business.',
  },
  {
    title: 'Business Process Automation',
    content:
      'Solutions to automate existing manual business processes to make them more efficient and effective.',
  },
  {
    title: 'Workflow',
    content:
      'Solutions to take care of your business processes, so that your employees can focus on their internal roles.',
  },
  {
    title: 'Dashboard',
    content: 'Customized metrics and automated objectives measurements of all KPIs.',
  },
];

type SectionBlockProps = {
  title: string;
  intro?: string;
  bullets?: string[];
  children?: React.ReactNode;
};

const SectionBlock = ({ title, intro, bullets = [], children }: SectionBlockProps) => (
  <article className="p-6 md:p-8">
    <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
    {intro && <p className="text-slate-700 leading-relaxed mb-5">{intro}</p>}
    {children}
    {bullets.length > 0 && (
      <ul className="space-y-3">
        {bullets.map((item) => (
          <li key={item} className="flex items-start gap-3 text-slate-700">
            <span className="mt-2 w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )}
  </article>
);

export const EnterpriseContentManagementPage = () => {
  const [activeTab, setActiveTab] = useState(0);

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
              Enterprise Content Management
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
              We help organization through technology to establish processes for collection, manage, and publish digital content. We help organization to collaborate by automating processes and workflows to optimize and improve processes that support compliance requirements.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto bg-white rounded-[28px] shadow-[0_28px_64px_-36px_rgba(15,23,42,0.45)] overflow-hidden">
            <div className="p-6 md:p-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              We specialize in
            </h2>

            <div className="bg-slate-50 border border-slate-200 rounded-[28px] p-4 md:p-5 mb-12">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {specializations.map((tab, index) => (
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
              <div className="mt-4 bg-white border border-slate-100 rounded-2xl p-6 text-slate-700 leading-relaxed">
                {specializations[activeTab].content}
              </div>
            </div>

            <div className="space-y-8">
              <SectionBlock
                title="Integrate External LOB data with SharePoint 2010"
                bullets={[
                  'Integrate SharePoint with BMC Remedy',
                  'SQL Server Integration with SharePoint',
                  'Integrate SharePoint with Microsoft Dynamics CRM',
                  'Integrate SharePoint with Microsoft Exchange',
                  'Integrate SharePoint with Yammer',
                ]}
              />

              <SectionBlock
                title="Manage Projects on SharePoint"
                intro="A Simple Solution for Project Management on SharePoint - Right Out-of-the-Box. SharePoint is an amazing platform for collaboration and information sharing, but it is also the perfect solution for project management."
                bullets={[
                  'Manage the project management processes (Goals, Tasks, Issues, Risks, Change requests, etc.)',
                  'Manage the project management reports (Open work, overdue issues, late work, etc.)',
                  'Connect your team to each other and the project information',
                ]}
              >
                <p className="text-slate-700 leading-relaxed mb-5">
                  Three simple steps to set up SharePoint for project management out-of-the-box.
                </p>
              </SectionBlock>

              <SectionBlock
                title="SharePoint PMO (Right Out-of-the-Box!)"
                intro="PMO project management in SharePoint solution provides a unified view of all project work, strong project visibility and the operational activities associated with them so as to enhance decision making of projects including:"
                bullets={[
                  'Organizing and controlling projects to achieve a specific goal',
                  'Keeping project information up to date (not just for yourself)',
                  'Making information about projects easier to find (Search)',
                  'Having a clear understanding of where you are in a project',
                  'Sharing project information across your organization',
                  'Capture risks and issues from all projects',
                  'All project risks are managed from a central location',
                ]}
              />

              <SectionBlock
                title="Management Dashboard"
                bullets={[
                  'Provide interactive summary of a management report',
                  'Consolidates, aggregates, and arranges measurements in a visual representation',
                  'Displayed on a single screen so information can be monitored at a glance',
                  'Project Tracking',
                  'Comparing planned vs actual',
                  'Metrics (% vs actual time/cost/duration)',
                ]}
              />

              <SectionBlock title="Project Reporting">
                <p className="text-slate-700 leading-relaxed mb-2">
                  Establish Key Performance Indicators (KPI).
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Metrics (what constitutes on schedule vs late?).
                </p>
              </SectionBlock>
            </div>
            </div>
          </div>
        </section>
        <section className="section-padding pt-0 bg-white">
          <div className="max-w-6xl mx-auto bg-brand-blue text-white rounded-[28px] shadow-[0_28px_64px_-36px_rgba(15,23,42,0.45)] p-7 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <h3 className="font-display text-3xl font-bold mb-2">Need details for your environment?</h3>
              <p className="text-white/85">
                Contact us at{' '}
                <a href="mailto:info@7formations.com?Subject=Hello%20again" className="underline underline-offset-4">
                  info@7formations.com
                </a>
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-brand-red text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-red/90 transition-colors"
            >
              Talk to Consultant
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

