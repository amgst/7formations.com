import React from 'react';
import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';

type Consultant = {
  name: string;
  title: string;
  bio: string[];
  certifications?: string[];
};

const consultants: Consultant[] = [
  {
    name: 'Masroor Sajid',
    title: 'Principal Consultant',
    bio: [
      'Masroor Sajid is a results-oriented systems analyst and process consultant with extensive experience in driving Project & Process Excellence (PMO, QMO) functions. His results-oriented and system analyst approach helped him serve a number of market sectors including defense contractors, clinical research, manufacturing, food & beverages, IT and telecommunication equipment manufacturing, and services industries.',
      "Being a certified CMMI Instructor, Project Manager (PMP) and qualified management consultant he is a big advocate of integration. There is often a high degree of compatibility in the management system standards, although they cover multiple and different areas. This approach saves time, effort and investment of his large number of small business clients while increasing effectiveness of their business management systems.",
      "Masroor completed his fellowship at MIT where he led a post graduate research on the subject of social and political implications of technology considering business enterprises and societies. He is an active participant of KEE's of Lean Advancement Initiative at MIT.",
      'Masroor is a passionate volunteer serving as Country Director Operations, Liberia as well as Director Program Water for Life with Humanity First USA. He earned a Gold Pin US Presidential Volunteer Service Award.',
    ],
    certifications: [
      'Certified Instructor - CMMI',
      'Certified, Project Management Professional (PMP) - Project Management Institute (PMI)',
      'Qualified, Risk Management Professional (RMP) - Project Management Institute (PMI)',
      'Trained & Qualified, CISSP, CISA, FedRAMP, SOC2,3, GDPR, ISO27701',
      'Lead Auditor Aerospace Industry Experienced Auditor (AIEA) (AS9100)',
      'Lead Auditor, Information Security Management System (ISO 27001)',
      'Lead Auditor, Information Technology Service Management System (ISO 20000-1)',
      'Lead Auditor, Quality Management Systems (ISO 9001)',
      'Certificates in Process Improvement courses at SEI - Carnegie Mellon University',
      'Member of IEEE, AACP and Physics societies',
      'Member of KEE, Lean Advancement Initiative at MIT',
      'MIT fellow 2011-13',
      'MS Physics, MS Computer Science',
    ],
  },
  {
    name: 'Emily Murphy',
    title: 'Principal Consultant',
    bio: [
      'Emily Murphy is an experienced process improvement consultant, with a diverse background in software engineering, project management, and quality management.',
      'She has worked with industry leading companies across a variety of market sectors, including Nestle, Accenture and Honeywell.',
      'Emily has assisted organizations in achieving their performance improvement goals through the use of multiple models and standards (CMMI and the ISO family of standards).',
      "With degrees in both industrial engineering and operations research, Emily is able to quickly understand an organization's processes, both their strengths and weaknesses, and develop and implement an improvement roadmap on which to base their process improvement program.",
    ],
    certifications: [
      'Project Management Professional, PMI',
      'MS in Operations Research',
      'BS in Industrial Engineering',
      'Intro to CMMI (both Development and Services models)',
      'Intermediate Concepts of CMMI',
      'SCAMPI Appraisal Team Training',
      'High Maturity with Statistics, Software Engineering Institute',
    ],
  },
  {
    name: 'Scott Sutton',
    title: 'Principal Consultant',
    bio: [
      'Scott Sutton offers more than 30 years of experience as a quality professional, principal lead auditor, management consultant, engineer and trainer, helping Fortune 100, 500 and small manufacturing companies and healthcare facilities improve their bottom line, embrace change and improve product and service quality.',
      'Scott provides value-added quality management systems lead auditing and consulting utilizing extensive hands-on experience in ISO 9001:2015, AS9100D:2016, AS9120B:2016, ISO 13485, TS16949, quality engineering and lean best practices.',
      'Scott has performed over 400 ISO certification and surveillance audits within the last few years and achieved over 15 years of ISO 9001 certification status as an ISO Representative with accredited Registrars.',
      "Scott's expertise in lean thinking has transformed more than 20 companies in healthcare, aerospace, government, and general manufacturing sectors. He has conducted more than 50 Kaizen events and training programs that have generated $25 million in accumulated team-based cost avoidance and bottom-line savings. Scott is based in Maine and facilitates New England area engagements.",
    ],
    certifications: [
      'Trainer ISO 9001:2015',
      'DNV Healthcare, Life Safety & Generalist Surveyor: (NFPA 101-2002 Health Care Facilities, FEMA I-100)',
      'TS 16949/QS9000 Training on AIAG Automotive Industry Action Group, facilitated at PJR',
      'COEC, Supplier Excellence Alliance (SEA) Certified Operational Excellence Consultant, 2007',
      'International Registered Certified Lead Auditor (IRCA)',
      'Certified Quality Auditor (CQA) with ASQ since 1993',
      'B.S., Industrial Technology, University of Southern Maine, Cum Laude',
      'A.S., Electrical Engineering Technology, University of Maine at Orono',
    ],
  },
  {
    name: 'Paul Dreyer',
    title: 'Consultant',
    bio: [
      'Paul Dreyer is an experienced management system auditor, implementation and best practice consultant. Paul is well versed in ISO9001, ISO14001, ISO27001 and AS9100.',
      'He has implemented, maintained and improved multiple AS9100 management systems for large aerospace suppliers.',
      'Leveraging this experience, Paul has maintained and consulted best practice for implementation in ISO14001 and ISO27001 systems.',
      'Paul is experienced in software systems (both internally developed and 3rd party) that govern many aspects of compliance including risk assessments, KPIs and metrics, supplier quality management, document management, ERP, nonconformance, corrective action and internal audit management.',
    ],
  },
  {
    name: 'Rick Jones',
    title: 'Principal Consultant',
    bio: [
      'Rick Jones is an experienced information security consultant and has a 40 year career at British Telecom. Most of the last 15 years have been spent helping organizations achieve certification to ISO27001. Rick does this by keeping things simple and using all his experience to explain the mysteries of ISO27001.',
      'He has worked across a number of business sectors to implement information security management systems for many companies including British Telecom, Pepsico, Thomson-Reuters, Credit Suisse, UK Post Office, Comsat, Shorelight and others in the UK, USA, Europe, Brazil and Asia Pacific.',
    ],
    certifications: [
      'MCIIS - full member of the Chartered Institute of Information Security (CIISec)',
      'Lead Assessor ISO 27001',
      'UK Government SC level Security Clearance',
    ],
  },
];

export const AboutPage = () => {
  return (
    <PageTransition>
      <div className="pb-20">
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h1 className="font-display text-5xl md:text-6xl font-bold text-slate-900 mb-4">
                About <span className="text-brand-blue">Us</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-3xl">
                Our consulting team combines practical industry experience with international standards expertise across quality, security, aerospace and performance improvement.
              </p>
            </div>
          </div>
        </section>

        {consultants.map((consultant, index) => {
          const isAlt = index % 2 === 1;
          return (
            <section key={consultant.name} className={`section-padding ${isAlt ? 'bg-slate-50' : 'bg-white'}`}>
              <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-8 lg:gap-12">
                <motion.aside
                  initial={{ opacity: 0, x: isAlt ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-1"
                >
                  <div className="bg-white border border-slate-100 rounded-[24px] p-6 sticky top-28">
                    <div className="font-display text-2xl font-bold text-slate-900">{consultant.name}</div>
                    <div className="text-brand-blue font-semibold mt-1">{consultant.title}</div>
                  </div>
                </motion.aside>

                <motion.div
                  initial={{ opacity: 0, x: isAlt ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-3 bg-white border border-slate-100 rounded-[24px] p-6 md:p-8"
                >
                  <div className="space-y-4">
                    {consultant.bio.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-slate-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {consultant.certifications && consultant.certifications.length > 0 && (
                    <div className="mt-8">
                      <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">
                        Certifications, Training and Education
                      </h3>
                      <ul className="space-y-2">
                        {consultant.certifications.map((item, cIndex) => (
                          <li key={cIndex} className="flex items-start gap-3 text-slate-700">
                            <span className="mt-2 w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {consultant.name === 'Rick Jones' && (
                    <p className="mt-5 text-sm">
                      <a
                        href="https://www.ciisec.org"
                        target="_blank"
                        rel="noreferrer"
                        className="text-brand-blue hover:underline"
                      >
                        https://www.ciisec.org
                      </a>
                    </p>
                  )}
                </motion.div>
              </div>
            </section>
          );
        })}
      </div>
    </PageTransition>
  );
};

