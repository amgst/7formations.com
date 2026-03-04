import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';

const foundationComponents = [
  'Stakeholders Commitment',
  'Strategic Objectives',
  'Information Infrastructure',
  'Organizational Processes',
  'Knowledge Management',
  'Enterprise Services or products',
  'Continuous Improvement',
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

export const LeanSixSigmaTrainingPage = () => {
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
              Lean Six Sigma Training Services
            </h1>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto bg-white rounded-[28px] shadow-[0_28px_64px_-36px_rgba(15,23,42,0.45)] overflow-hidden">
            <article className="p-6 md:p-8">
              <p className="text-slate-700 leading-relaxed mb-4">
                7Formations LLC is known for its unique engagement model by defining the current state and future state enterprise architecture to make the change long lasting and effective. The transformation from current to future state is The Challenge, and of course, is our key skill.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Enterprises both medium and large evolve over time, but the transformation efforts aimed at their evolution too often fail to achieve their intended results. We adopt a holistic approach to formation of enterprise and its leaders in understanding their as-is organization structure, forming and evaluating alternative concepts, and selecting a to-be architecture concept.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                There are frameworks and result oriented approaches exist to develop detailed enterprise architectures but we adopt bottom up or upstream in the enterprise system design lifecycle to the concept phase. Our practical approach goes beyond process-centric or IT-centric perspectives; we have expertise in both approaches.
              </p>
              <p className="text-slate-700 leading-relaxed">
                These are critically important when the transformation might specifically be related to process re-engineering or an IT transformation upgrade. Visionary leaders need to be able to see the whole picture to effectively envision the path for enterprise change.
              </p>
            </article>

            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                7 Fundamental Components
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                In discovery of this formation we explore the enterprise through 7 fundamental components, and their interrelationships. This is a critical need to broaden leadership communications to reach a strategic enterprise future state:
              </p>
              <BulletList items={foundationComponents} />
              <p className="text-slate-700 leading-relaxed mt-6">
                We need active role of leadership in creating a bright transformation vision.
              </p>
            </article>

            <article className="p-6 md:p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Industry Collaboration
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                7Formations consultants as lean change agents are actively involved in lean continuous improvement activities (latest developments, tools and techniques, shared industry experiences) with leading institutes, namely:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="mt-2 w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
                  <span>
                    LAI (Lean Advancement Initiative) at MIT (
                    <a href="https://lean.mit.edu" target="_blank" rel="noreferrer" className="text-brand-blue hover:underline">
                      lean.mit.edu
                    </a>
                    )
                  </span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="mt-2 w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
                  <span>
                    Lean Enterprise Institute (
                    <a href="https://lean.org" target="_blank" rel="noreferrer" className="text-brand-blue hover:underline">
                      lean.org
                    </a>
                    )
                  </span>
                </li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-6">
                Some MIT fellows are working full time with 7formations.
              </p>
            </article>
          </div>
        </section>

        <section className="section-padding pt-0 bg-white">
          <div className="max-w-6xl mx-auto bg-brand-blue text-white rounded-[28px] shadow-[0_28px_64px_-36px_rgba(15,23,42,0.45)] p-7 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <h3 className="font-display text-3xl font-bold mb-2">Plan Lean Six Sigma Training</h3>
              <p className="text-white/85">Share your goals and we will prepare a tailored engagement plan.</p>
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

