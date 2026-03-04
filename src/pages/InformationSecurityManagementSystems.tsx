import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';

const offerings = [
  'Information Security Assessment & Audit',
  'Information Security Standards Implementation (ISO 27001)',
  'Risk Planning, Management and Mitigation',
  'Penetration & Vulnerability testing',
  'Information Security Compliance Monitoring',
];

const riskPractices = [
  'Identify, characterize, and assess the threats based on known weaknesses (SWOT analyses)',
  'Risk determination and evaluation of specific types of attacks on specific assets',
  'Mapping and evaluating vulnerability assessment of critical assets to specific threats',
  'Exploit strengths positively to capitalize opportunities',
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

export const InformationSecurityManagementSystemsPage = () => {
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
              Information Security Management Systems
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
              Information security services mainly focus and provide better control on integrity, confidentiality and availability of corporate information. We consider security as everyone&apos;s responsibility, in which everybody is playing its role. We help organizations in better planning and compliance with information security standards like ISO 27001.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mt-4">
              7Formations uses OSSTMM (Open Source Security Testing Methodology Model) and NIST (National Institute of Standards and Technology). Our consultants have rich experience of these standards and their implementations at multiple organizations.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto bg-white rounded-[28px] shadow-[0_28px_64px_-36px_rgba(15,23,42,0.45)] overflow-hidden">
            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Information Security Management System
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                We help establish and maintain security management systems; it may be standards implementation like ISO 27001, FISMA Act compliance and Information Security Forum&apos;s standard of good practices. We also help our potential customers to customize existing models like COBIT or ITIL to address security aspects.
              </p>
              <p className="text-slate-700 leading-relaxed">
                For details of particular standards and models, please visit ISO, FISMA, CERT and Information Security Forum. Our certified auditors and instructors can address clients&apos; specific requirements.
              </p>
            </article>

            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                What We Do
              </h2>
              <BulletList items={offerings} />
              <p className="text-slate-700 leading-relaxed mt-6">
                The effect of uncertainty (whether positive or negative) is commonly known as risk. We manage risk by identification, assessment, and prioritization followed by coordinated and economical application of resources. We help planning to minimize and control the probability of unfortunate events and threats and maximize the realization of opportunities.
              </p>
            </article>

            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Risk Management Practices
              </h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                We follow the good practices and standards of NIST, PMI and ISO in this context. 7Formations has certified consultants in its pool to facilitate valued clients in their environment to best fit the practice.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                7Formations follows standard methods with proven experienced practices to achieve the objective of risk management. These methods consist of the following elements:
              </p>
              <BulletList items={riskPractices} />
              <p className="text-slate-700 leading-relaxed mt-6">
                There is a specific standard, ISO 31000, addressing integrated risk management. There is ISO 27001 for information security management systems and we offer services of Lead Implementer and Lead Auditor to set a complete system in compliance with ISMS.
              </p>
              <p className="text-slate-700 leading-relaxed mt-3">
                Its standard documents can be found at{' '}
                <a
                  href="https://www.iso.org"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-blue hover:underline"
                >
                  www.iso.org
                </a>
                .
              </p>
            </article>

            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Security Compliance Monitoring
              </h2>
              <p className="text-slate-700 leading-relaxed">
                We speak your language and help organizations in compliance monitoring. We help define policies as per business requirements, then our intelligent solutions map ideal working conditions with policy definitions of user profiles.
              </p>
              <p className="text-slate-700 leading-relaxed mt-4">
                For example, medical practitioners are required to follow HIPAA compliant applications while saving, copying and referring patient data. We help you manage these requirements with simple steps and clear configuration options based on compliance needs.
              </p>
            </article>

            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Information Security Assessment
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Keeping abreast of latest vulnerabilities and threats requires considerable time, skill and effort. 7Formations provides security assessment of organizations&apos; current systems and network infrastructure. In this process, security risks and exposures are identified within enterprise information security policies, procedures, practices and processes, systems and applications.
              </p>
              <p className="text-slate-700 leading-relaxed mt-4">
                Our expertise gives customers the benefit of an external security review of their environment, which analyzes and measures their level of security against industry standards and best practices.
              </p>
            </article>

          </div>
        </section>
        <section className="section-padding pt-0 bg-white">
          <div className="max-w-6xl mx-auto bg-brand-blue text-white rounded-[28px] shadow-[0_28px_64px_-36px_rgba(15,23,42,0.45)] p-7 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <h3 className="font-display text-3xl font-bold mb-2">Need a Security Review?</h3>
              <p className="text-white/85">
                Let us evaluate your current controls and define a practical implementation roadmap.
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

