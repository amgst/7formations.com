import React from 'react';
import { PageTransition } from '../components/PageTransition';

const LegalLayout = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <PageTransition>
    <div className="pb-20">
      <section className="section-padding bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-slate-900 mb-6">{title}</h1>
          <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-sm border border-slate-100 text-slate-700 leading-relaxed space-y-4">
            {children}
          </div>
        </div>
      </section>
    </div>
  </PageTransition>
);

export const TermsPage = () => (
  <LegalLayout title="Terms">
    <p>
      By using this website, you agree to use it lawfully and in a way that does not harm
      the service, users, or business operations.
    </p>
    <p>
      Content is provided for general information. For service-specific commitments, please
      contact us directly and review your signed agreement.
    </p>
  </LegalLayout>
);

export const PrivacyPage = () => (
  <LegalLayout title="Privacy">
    <p>
      We collect contact information you submit through forms (such as name, email, and message)
      to respond to inquiries and provide requested services.
    </p>
    <p>
      We do not sell personal information. Data is processed for communication, service delivery,
      and operational purposes.
    </p>
  </LegalLayout>
);

export const CookiesPage = () => (
  <LegalLayout title="Cookies">
    <p>
      This site may use essential and analytics cookies to support core functionality and improve
      user experience.
    </p>
    <p>
      You can manage cookie preferences through your browser settings.
    </p>
  </LegalLayout>
);

