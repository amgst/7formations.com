import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChevronDown, Linkedin, Mail
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isConsultingDropdownOpen, setIsConsultingDropdownOpen] = useState(false);
  const [isTrainingDropdownOpen, setIsTrainingDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact', href: '/contact' },
  ];

  const consultingLinks = [
    { name: 'Enterprise Content Management', href: '/consulting-services/enterprise-content-management' },
    { name: 'Information Security Management Systems', href: '/consulting-services/information-security-management-systems' },
    { name: 'Lean Six Sigma', href: '/consulting-services/lean-six-sigma' },
    { name: 'Quality Management (ISO 9001)', href: '/consulting-services/quality-management-iso-9000-family' },
    { name: 'Integrated Management System (ISO 27001, 9001, 20000)', href: '/consulting-services/integrated-management-system' },
    { name: 'Aerospace Quality Mgmt. Systems (AS 9100)', href: '/aerospace-quality-mgmt-systems-as-9100' },
  ];

  const trainingLinks = [
    { name: 'CMMI Models', href: '/cmmi-models' },
    { name: 'ISO Standards', href: '/iso-standards' },
    { name: 'Lean Six Sigma', href: '/lean-six-sigma' },
    { name: 'Integrated Management System', href: '/integrated-management-system' },
    { name: 'Earned Value Management (EVM)', href: '/earned-value-management-evm' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4",
      isScrolled || location.pathname !== '/' ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="https://www.7formations.com/wp-content/uploads/2019/09/7Formation-Logo.png" 
            alt="7Formations Logo" 
            className="h-10 md:h-12 w-auto"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Consulting Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsConsultingDropdownOpen(true)}
            onMouseLeave={() => setIsConsultingDropdownOpen(false)}
          >
            <div className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
              <Link to="/consulting-services">Consulting Services</Link> <ChevronDown size={14} />
            </div>
            <AnimatePresence>
              {isConsultingDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-[440px] bg-white border border-slate-100 rounded-2xl shadow-xl p-3 mt-2"
                >
                  <div className="grid grid-cols-2 gap-2">
                  {consultingLinks.map((s) => (
                    <Link 
                      key={s.name} 
                      to={s.href}
                      className="block px-4 py-2 text-sm text-slate-600 hover:bg-brand-blue/10 hover:text-brand-blue rounded-xl transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Training Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsTrainingDropdownOpen(true)}
            onMouseLeave={() => setIsTrainingDropdownOpen(false)}
          >
            <div className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
              <Link to="/training">Training</Link> <ChevronDown size={14} />
            </div>
            <AnimatePresence>
              {isTrainingDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-[380px] bg-white border border-slate-100 rounded-2xl shadow-xl p-3 mt-2"
                >
                  <div className="grid grid-cols-1 gap-2">
                    {trainingLinks.map((s) => (
                      <Link
                        key={s.name}
                        to={s.href}
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-brand-blue/10 hover:text-brand-blue rounded-xl transition-colors"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            to="/contact" 
            className="bg-brand-red text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-red/90 transition-all shadow-lg shadow-brand-red/20"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 p-6 shadow-xl md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-600 hover:text-brand-blue"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-100">
              <Link to="/consulting-services" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-slate-700">Consulting Services</Link>
              <div className="mt-2 flex flex-col gap-2">
                {consultingLinks.map((s) => (
                  <Link key={s.name} to={s.href} onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-slate-600 hover:text-brand-blue">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="pt-2 border-t border-slate-100">
              <Link to="/training" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-slate-700">Training</Link>
              <div className="mt-2 flex flex-col gap-2">
                {trainingLinks.map((s) => (
                  <Link key={s.name} to={s.href} onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-slate-600 hover:text-brand-blue">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link 
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-brand-red text-white px-5 py-3 rounded-xl text-center font-semibold"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 lg:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <img 
              src="https://www.7formations.com/wp-content/uploads/2019/09/7Formation-Logo.png" 
              alt="7Formations Logo" 
              className="h-10 w-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            Catalyst for change and performance improvement. Specializing in Aviation, Space, and Defense industry contractors.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/masajid/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-brand-blue hover:border-brand-blue transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-brand-blue hover:border-brand-blue transition-all">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">Consulting</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><Link to="/consulting-services/enterprise-content-management" className="hover:text-brand-blue transition-colors">Enterprise Content Management</Link></li>
            <li><Link to="/consulting-services/information-security-management-systems" className="hover:text-brand-blue transition-colors">Information Security Mgmt Systems</Link></li>
            <li><Link to="/consulting-services/lean-six-sigma" className="hover:text-brand-blue transition-colors">Lean Six Sigma</Link></li>
            <li><Link to="/consulting-services/quality-management-iso-9000-family" className="hover:text-brand-blue transition-colors">Quality Management (ISO 9001)</Link></li>
            <li><Link to="/aerospace-quality-mgmt-systems-as-9100" className="hover:text-brand-blue transition-colors">Aerospace Quality Mgmt (AS 9100)</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">Training</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><Link to="/cmmi-models" className="hover:text-brand-blue transition-colors">CMMI Models</Link></li>
            <li><Link to="/iso-standards" className="hover:text-brand-blue transition-colors">ISO Standards</Link></li>
            <li><Link to="/lean-six-sigma" className="hover:text-brand-blue transition-colors">Lean Six Sigma</Link></li>
            <li><Link to="/integrated-management-system" className="hover:text-brand-blue transition-colors">Integrated Management System</Link></li>
            <li><Link to="/earned-value-management-evm" className="hover:text-brand-blue transition-colors">Earned Value Management (EVM)</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><Link to="/about-us" className="hover:text-brand-blue transition-colors">About Us</Link></li>
            <li><Link to="/testimonials" className="hover:text-brand-blue transition-colors">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:text-brand-blue transition-colors">Contact Us</Link></li>
            <li><Link to="/admin" className="hover:text-brand-blue transition-colors">Admin Dashboard</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-slate-200 flex flex-col md:row items-center justify-between gap-4 text-xs text-slate-400 font-medium uppercase tracking-widest">
        <div>© 2024 7Formations Consulting Services</div>
        <div className="flex gap-8">
          <Link to="/terms" className="hover:text-brand-blue">Terms</Link>
          <Link to="/privacy" className="hover:text-brand-blue">Privacy</Link>
          <Link to="/cookies" className="hover:text-brand-blue">Cookies</Link>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-blue/10 selection:text-brand-blue">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
