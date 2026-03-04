import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';

const inHouseTrainingAreas = [
  'ISO standards (ISO 9001, ISO 27001, AS9100, ISO 13485, ISO 14001) and CMMI (Dev and SVC constellations) as a single system of process improvement',
  'Lean and CMMI implementation as a single system of process improvement',
  'Agile and/or CMMI implementation',
];

const courseObjectives = [
  'Understand the general scope and intent of the CMMI product suite',
  'Understand the general tenets of process improvement',
  'Understand the general structure and purpose of the CMMI',
  'Understand the general concepts of the SCAMPI appraisal process',
  'Recognize the value of CMMI from a business perspective',
  'Identify key practices needed to plan successful implementation aligned to business objectives',
];

const whoShouldAttend = [
  'Those wishing to learn more about how CMMI can augment process improvement efforts',
  'Technical practitioners who may be required to operate under or help implement a CMMI program',
  'Process analysts who may be required to design or monitor a CMMI program',
  'Managers determining a path for process improvement in their departments or organization',
  'Quality and information assurance engineers',
  'Business unit managers responsible for process improvement and efficiency',
  'Software developers writing and maintaining code',
  'Software engineers',
  'Information officers',
];

const courseDeliveryPoints = [
  'Highly interactive learner-centric approach based on adult learning principles',
  'Real-life examples based on audience interests and industries',
  'Exercises, interactive group work and discussions for each topic',
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

export const CmmiModelsPage = () => {
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
              CMMI Models
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
              In-house and public training designed to help organizations adopt CMMI and process improvement practices with practical implementation guidance.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto bg-white rounded-[28px] shadow-[0_28px_64px_-36px_rgba(15,23,42,0.45)] overflow-hidden">
            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">In-house Training</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                This course can be delivered onsite at your preferred office location. Request an in-house quote at{' '}
                <a href="mailto:info@7formations.com" className="text-brand-blue hover:underline">
                  info@7formations.com
                </a>
                . We can plan tailored training based on your company&apos;s specific requirements and objectives. Number of days depends upon requirements and is discussed during engagement.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                We can offer in-house training tailored for organizational requirements, including:
              </p>
              <BulletList items={inHouseTrainingAreas} />
            </article>

            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">CMMI Training</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                CMMI Institute&apos;s Capability Maturity Model Integration (CMMI) for Development (CMMI-DEV) and Services (CMMI-SVC) provides best practices for improving an organization&apos;s ability to manage development, acquisition, and delivery of products and services.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Both are 3-day courses focused on Development and Services constellations. Trainers explain model content, structure, and process improvement concepts for the entire organization, and how to use CMMI as a guide to improving processes to meet business objectives.
              </p>
              <p className="text-slate-700 leading-relaxed">
                As per CMMI Institute defined tracks for acquiring professional certificates, this course is a prerequisite for being a lead appraiser, team leader, or team member on a SCAMPI appraisal. The course is delivered using licensed CMMI Institute materials and by a licensed instructor. Our certified instructors bring deep real-world implementation experience. 7Formations offers all CMMI Institute services under an authorized CMMI Institute partnership of Assess-IT.com. We offer this training frequently and can arrange private classes at your site.
              </p>
            </article>

            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">Course Objectives</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                This three-day course is designed as a starting point for process improvement engineers, software developers, and anyone interested in learning more about CMMI models.
              </p>
              <BulletList items={courseObjectives} />
            </article>

            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">Prerequisites</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                There are no prerequisites to attend this course.
              </p>
              <p className="text-slate-700 leading-relaxed">
                To receive a certificate of completion, full class attendance is required. Active participation in discussion sessions and class exercises is expected.
              </p>
            </article>

            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">Who Should Attend?</h2>
              <BulletList items={whoShouldAttend} />
            </article>

            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">Course Delivery</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                This is a highly interactive course based on learner-centric adult learning principles. This style allows students to delve more deeply into material, with the instructor facilitating learning rather than presenting slide after slide.
              </p>
              <BulletList items={courseDeliveryPoints} />
            </article>
          </div>
        </section>

        <section className="section-padding pt-0 bg-white">
          <div className="max-w-6xl mx-auto bg-brand-blue text-white rounded-[28px] shadow-[0_28px_64px_-36px_rgba(15,23,42,0.45)] p-7 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <h3 className="font-display text-3xl font-bold mb-2">Plan a CMMI Training Track</h3>
              <p className="text-white/85">Set up a private class or discuss your in-house training objectives.</p>
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

