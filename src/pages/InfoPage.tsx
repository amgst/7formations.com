import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';

type InfoPageProps = {
  title: string;
  description: string;
  bullets?: string[];
};

export const InfoPage = ({ title, description, bullets = [] }: InfoPageProps) => {
  return (
    <PageTransition>
      <div className="pb-20">
        <section className="section-padding bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-slate-900 mb-6">{title}</h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">{description}</p>

            {bullets.length > 0 && (
              <ul className="space-y-3 mb-10">
                {bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-2 w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <Link
              to="/contact"
              className="inline-flex items-center bg-brand-red text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-red/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

