import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, Award, BarChart3, Globe, Zap, ArrowRight, Database, Layers, Activity,
  ChevronRight, ChevronLeft
} from 'lucide-react';
import { Layout } from './components/Layout';
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';
import { AdminPage } from './pages/Admin';
import { TestimonialsPage } from './pages/Testimonials';
import { BlogPage } from './pages/Blog';
import { InfoPage } from './pages/InfoPage';
import { EnterpriseContentManagementPage } from './pages/EnterpriseContentManagement';
import { InformationSecurityManagementSystemsPage } from './pages/InformationSecurityManagementSystems';
import { LeanSixSigmaPage } from './pages/LeanSixSigma';
import { QualityManagementIso9000Page } from './pages/QualityManagementIso9000';
import { IntegratedManagementSystemPage } from './pages/IntegratedManagementSystem';
import { AerospaceQualityAS9100Page } from './pages/AerospaceQualityAS9100';
import { CmmiModelsPage } from './pages/CmmiModels';
import { IsoStandardsPage } from './pages/IsoStandards';
import { LeanSixSigmaTrainingPage } from './pages/LeanSixSigmaTraining';
import { IntegratedManagementSystemTrainingPage } from './pages/IntegratedManagementSystemTraining';
import { EarnedValueManagementPage } from './pages/EarnedValueManagement';
import { CookiesPage, PrivacyPage, TermsPage } from './pages/Legal';
import { PageTransition } from './components/PageTransition';
import { featuredTestimonials } from './data/testimonials';

// --- Home Page Components ---

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const trustedLogos = [
    "MIT", "Comstar", "NetServices", "NASA", "Boeing", "Lockheed Martin", "Raytheon"
  ];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-brand-blue/5 rounded-bl-[200px] hidden lg:block" />
      <div className="absolute top-1/4 left-10 -z-10 w-96 h-96 bg-brand-blue/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 -z-10 w-64 h-64 bg-brand-red/5 blur-[100px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest mb-8 border border-brand-blue/20">
              <Zap size={14} className="fill-brand-blue" />
              Excellence in Performance
            </div>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-[0.95] mb-8 tracking-tight">
              Quality
							 <br />
              <span className="text-brand-blue relative">
                 Management   
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-blue/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                </svg>
              </span> <br />
              Systems.
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed font-medium">
              We help organizations to establish and maintain 
corporate Quality Management Office (QMO) integrated for multiple ISO standards (AS9100, 9001, 27001, 20000.14000) and process improvement CMMI models. It helps better project management, sustain compliance requirements and maintain information security.
            </p>
            
            <div className="flex flex-wrap gap-5 mb-12">
              <Link 
                to="/contact" 
                className="relative bg-brand-red text-white px-10 py-5 rounded-2xl font-bold hover:bg-brand-red/90 transition-all flex items-center gap-3 shadow-[0_20px_40px_-12px_rgba(204,0,0,0.3)] group overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"
                />
                <span className="relative z-10">Schedule a Consultation</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/about" 
                className="bg-white text-slate-900 border-2 border-slate-100 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 hover:border-slate-200 transition-all"
              >
                About Us
              </Link>
            </div>

            {/* Trusted By Section */}
            <div className="pt-8 border-t border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Trusted by industry leaders</p>
              <div className="flex flex-wrap gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                {trustedLogos.slice(0, 4).map(logo => (
                  <span key={logo} className="text-xl font-display font-black tracking-tighter">{logo}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] aspect-[4/5] lg:aspect-auto lg:h-[600px] bg-slate-900 group">
              <video 
                ref={videoRef}
                autoPlay 
                muted 
                loop 
                playsInline
                preload="auto"
                className="w-full h-full object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-80"
                poster="https://picsum.photos/seed/7formations-military/1000/1200"
              >
                <source src="https://www.7formations.com/wp-content/uploads/2019/09/miltary.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Custom Controls Overlay */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 backdrop-blur-[2px] transition-all"
                  >
                    <div className="flex items-center gap-6">
                      <button 
                        onClick={togglePlay}
                        className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-blue shadow-2xl hover:scale-110 transition-transform"
                      >
                        {isPlaying ? <div className="flex gap-1"><div className="w-1.5 h-6 bg-brand-blue rounded-full" /><div className="w-1.5 h-6 bg-brand-blue rounded-full" /></div> : <Zap size={28} className="fill-brand-blue ml-1" />}
                      </button>
                      <button 
                        onClick={toggleMute}
                        className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
                      >
                        {isMuted ? <Activity size={20} className="opacity-50" /> : <Activity size={20} />}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Overlay Content */}
              <div className="absolute bottom-6 right-6 pointer-events-none">
                <div className="bg-slate-900/75 backdrop-blur-md border border-white/25 p-4 rounded-2xl text-white max-w-[300px] shadow-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-90">Integrated Management Excellence</span>
                  </div>
                  <div className="text-base font-bold leading-tight">ISO, CMMI, and Process Improvement</div>
                  <div className="text-xs text-white/90 mt-1.5 leading-relaxed">
                    Helping aviation, defense, and technology teams achieve measurable compliance and performance gains.
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500 font-medium">
              Courtesy of Ultimate Military Channel
            </p>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 z-20 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50 hidden xl:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center shadow-lg shadow-brand-blue/20">
                  <Award size={28} />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">ISO</div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Certified Partner</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Dots */}
            <div className="absolute -z-10 top-1/2 -right-12 w-24 h-48 grid grid-cols-3 gap-4 opacity-20">
              {[...Array(15)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-brand-blue" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const consultingServices = [
    { 
      title: "Quality Management (ISO 9001)", 
      description: "Comprehensive implementation and auditing for the world's most recognized quality standard.", 
      icon: <ShieldCheck className="text-brand-blue" />,
      href: "/consulting-services/quality-management-iso-9000-family"
    },
    { 
      title: "Aerospace Quality (AS 9100)", 
      description: "Specialized quality management systems for the aviation, space, and defense industries.", 
      icon: <Globe className="text-brand-blue" />,
      href: "/aerospace-quality-mgmt-systems-as-9100"
    },
    { 
      title: "Info Security (ISO 27001)", 
      description: "Protecting your organization's sensitive information through robust security management.", 
      icon: <ShieldCheck className="text-brand-blue" />,
      href: "/consulting-services/information-security-management-systems"
    },
    { 
      title: "Integrated Management System", 
      description: "Combining multiple standards (ISO 27001, 9001, 20000) into one efficient framework.", 
      icon: <Layers className="text-brand-blue" />,
      href: "/consulting-services/integrated-management-system"
    },
    { 
      title: "Medical Device Quality (ISO 13485)", 
      description: "Ensuring compliance and safety for medical device manufacturing and services.", 
      icon: <Activity className="text-brand-blue" />,
      href: "/consulting-services"
    },
    { 
      title: "CMMI For Services & Development", 
      description: "Process improvement and appraisal services for service and development organizations.", 
      icon: <BarChart3 className="text-brand-blue" />,
      href: "/cmmi-models"
    },
    { 
      title: "Enterprise Content Management", 
      description: "Streamlining information flow and document management across the enterprise.", 
      icon: <Database className="text-brand-blue" />,
      href: "/consulting-services/enterprise-content-management"
    },
    { 
      title: "Lean Six Sigma", 
      description: "Methodologies to eliminate waste and reduce variation in your business processes.", 
      icon: <Zap className="text-brand-blue" />,
      href: "/consulting-services/lean-six-sigma"
    },
  ];

  return (
    <section id="consulting" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">Consulting Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Proven frameworks for sustainable growth and operational excellence.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {consultingServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-8 rounded-[32px] border border-slate-100 hover:border-brand-blue/20 hover:shadow-2xl hover:shadow-brand-blue/10 transition-all group"
            >
              <Link to={service.href} className="block">
                <div className="w-14 h-14 bg-brand-blue/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                  {React.cloneElement(service.icon as React.ReactElement, {
                    className: "group-hover:text-white transition-colors duration-300"
                  })}
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.description}</p>
                <span className="inline-flex items-center text-brand-blue font-bold text-sm group/link">
                  Learn more
                  <ChevronRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrainingServices = () => {
  const trainingItems = [
    { label: "CMMI Models", href: "/cmmi-models" },
    { label: "ISO Standards", href: "/iso-standards" },
    { label: "Lean Six Sigma", href: "/lean-six-sigma" },
    { label: "Integrated Management System", href: "/integrated-management-system" },
    { label: "Earned Value Management (EVM)", href: "/earned-value-management-evm" },
  ];

  return (
    <section id="training" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Training Services
              <br />
              <span className="text-brand-blue">Management Systems</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
              There is often a high degree of compatibility between the management system standards, although they cover different areas. Many organizations choose to build their management system into one integrated system, covering areas such as quality, health and safety, and the environment. By integrating several standards into one management system, you can eliminate duplication of work.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-slate-50 border border-slate-100 rounded-[28px] p-6 md:p-8">
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-5">Programs</h3>
              <ul className="space-y-3">
                {trainingItems.map((item) => (
                  <li key={item.label} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-2 w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
                    <Link to={item.href} className="font-medium hover:text-brand-blue transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredTestimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % featuredTestimonials.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length);
  };

  const active = featuredTestimonials[activeIndex];

  return (
    <section id="testimonials" className="section-padding bg-brand-blue text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08),transparent_40%)]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Who Recommends Us</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Real client feedback from leadership teams across consulting, engineering, and technology.
          </p>
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 mt-5 text-sm font-bold text-white hover:text-brand-red transition-colors"
          >
            View all testimonials <ChevronRight size={16} />
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${active.author}-${activeIndex}`}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 md:p-10 rounded-[32px] shadow-2xl shadow-black/20"
            >
              <p className="text-lg md:text-xl leading-relaxed italic mb-8">"{active.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={active.image} alt={active.author} className="w-14 h-14 rounded-full object-cover border-2 border-brand-red" referrerPolicy="no-referrer" />
                <div>
                  <div className="font-bold">{active.author}</div>
                  <div className="text-sm text-white/80">{active.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-6">
            <button
              onClick={goPrev}
              className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {featuredTestimonials.map((item, index) => (
                <button
                  key={`${item.author}-${index}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${index === activeIndex ? "w-8 bg-brand-red" : "w-2.5 bg-white/40 hover:bg-white/70"}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={goNext}
              className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => (
  <PageTransition>
    <Hero />
    <Services />
    <TrainingServices />
    <Testimonials />
  </PageTransition>
);

// --- Main App ---

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname}>
        <Routes location={location}>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route
            path="/consulting-services"
            element={
              <Layout>
                <InfoPage
                  title="Consulting Services"
                  description="We help organizations establish and improve integrated management systems for quality, security, aerospace, and operational excellence."
                  bullets={[
                    'Enterprise Content Management',
                    'Information Security Management Systems',
                    'Lean Six Sigma',
                    'Quality Management (ISO 9001)',
                    'Integrated Management System (ISO 27001, 9001, 20000)',
                    'Aerospace Quality Mgmt. Systems (AS 9100)',
                  ]}
                />
              </Layout>
            }
          />
          <Route
            path="/consulting-services/enterprise-content-management"
            element={<Layout><EnterpriseContentManagementPage /></Layout>}
          />
          <Route
            path="/consulting-services/information-security-management-systems"
            element={<Layout><InformationSecurityManagementSystemsPage /></Layout>}
          />
          <Route
            path="/consulting-services/lean-six-sigma"
            element={<Layout><LeanSixSigmaPage /></Layout>}
          />
          <Route
            path="/consulting-services/quality-management-iso-9000-family"
            element={<Layout><QualityManagementIso9000Page /></Layout>}
          />
          <Route
            path="/consulting-services/integrated-management-system"
            element={<Layout><IntegratedManagementSystemPage /></Layout>}
          />
          <Route
            path="/aerospace-quality-mgmt-systems-as-9100"
            element={<Layout><AerospaceQualityAS9100Page /></Layout>}
          />
          <Route
            path="/training"
            element={
              <Layout>
                <InfoPage
                  title="Training"
                  description="Practical training services focused on management system implementation, process maturity, and performance improvement."
                  bullets={[
                    'CMMI Models',
                    'ISO Standards',
                    'Lean Six Sigma',
                    'Integrated Management System',
                    'Earned Value Management (EVM)',
                  ]}
                />
              </Layout>
            }
          />
          <Route path="/cmmi-models" element={<Layout><CmmiModelsPage /></Layout>} />
          <Route path="/iso-standards" element={<Layout><IsoStandardsPage /></Layout>} />
          <Route path="/lean-six-sigma" element={<Layout><LeanSixSigmaTrainingPage /></Layout>} />
          <Route path="/integrated-management-system" element={<Layout><IntegratedManagementSystemTrainingPage /></Layout>} />
          <Route path="/earned-value-management-evm" element={<Layout><EarnedValueManagementPage /></Layout>} />
          <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
          <Route path="/about" element={<Layout><AboutPage /></Layout>} />
          <Route path="/about-us" element={<Layout><AboutPage /></Layout>} />
          <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
          <Route path="/testimonials" element={<Layout><TestimonialsPage /></Layout>} />
          <Route path="/terms" element={<Layout><TermsPage /></Layout>} />
          <Route path="/privacy" element={<Layout><PrivacyPage /></Layout>} />
          <Route path="/cookies" element={<Layout><CookiesPage /></Layout>} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}

