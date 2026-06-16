import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#050B14] pt-20 pb-10 overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent opacity-40 pointer-events-none"></div>
      
      <div className="max-w-[1080px] mx-auto px-6 relative z-10">
        {/* Floating Gradient Box CTA */}
        <div 
          className="bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-purple-500/10 rounded-3xl mb-16 p-8 md:p-12 relative overflow-hidden border border-white/5 shadow-2xl shadow-indigo-500/5"
        >
          {/* Ambient Glow within CTA */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-indigo-500/20 blur-[80px] pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight flex items-center gap-4">
              Let's talk payments
              <iconify-icon icon="solar:wallet-money-bold-duotone" width="48" height="48" className="text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.4)]"></iconify-icon>
            </h2>
            <Link 
              to="#" 
              className="inline-flex text-[14px] font-medium transition-all hover:brightness-110 hover:shadow-[0_0_30px_rgba(251,191,36,0.3),_inset_0_1px_1px_rgba(255,255,255,0.4)] text-slate-900 bg-gradient-to-bl from-amber-200 via-amber-400 to-amber-500 h-12 rounded-full px-8 items-center shrink-0 hover:-translate-y-0.5"
            >
              Contact Sales
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16"></div>

        {/* Footer Content */}
        <div className="flex flex-col gap-12">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 text-sm">
            {/* Logo + short description */}
            <div className="lg:col-span-4 lg:pr-8">
              <Link to="/" className="flex items-center gap-2 text-white font-normal text-2xl tracking-tight mb-6">
                <iconify-icon icon="solar:layers-bold" width="32" height="32" className="text-indigo-500"></iconify-icon>
                <span>NexusPay</span>
              </Link>
              <p className="text-sm text-slate-400 font-light leading-relaxed max-w-sm mb-8">
                NexusPay is your global infrastructure command center. Automate payments, keep
                billing in sync, and help your team scale faster with less
                friction.
              </p>
            </div>

            {/* Product Column */}
            <div className="lg:col-span-2">
              <h4 className="text-sm text-indigo-300 font-medium mb-6 tracking-wide">
                Product
              </h4>
              <ul className="space-y-3.5">
                {['Overview', 'Payments', 'Checkout', 'Billing', 'Terminal'].map(link => (
                  <li key={link}>
                    <Link to="#" className="text-slate-400 hover:text-white transition-colors font-light">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div className="lg:col-span-2">
              <h4 className="text-sm text-indigo-300 font-medium mb-6 tracking-wide">
                Resources
              </h4>
              <ul className="space-y-3.5">
                {['Documentation', 'API Reference', 'Workflow Library', 'System Status', 'Guides'].map(link => (
                  <li key={link}>
                    <Link to="#" className="text-slate-400 hover:text-white transition-colors font-light">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company / Contact Column */}
            <div className="lg:col-span-4">
              <h4 className="text-sm text-indigo-300 font-medium mb-6 tracking-wide">
                Company
              </h4>
              <ul className="flex gap-6 mb-8">
                <li>
                  <Link to="#" className="text-slate-400 hover:text-white transition-colors font-light">
                    About Nexus
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-slate-400 hover:text-white transition-colors font-light">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-slate-400 hover:text-white transition-colors font-light">
                    Partners
                  </Link>
                </li>
              </ul>

              <div className="text-slate-400 font-light tracking-tight text-xs space-y-1.5 mb-8 bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
                <p className="text-slate-200 font-medium">NexusPay Global Headquarters</p>
                <p>San Francisco, CA / Remote-first</p>
                <p>Built for product, design & ops teams.</p>
                <a href="mailto:hello@nexuspay.com" className="text-indigo-400 hover:text-indigo-300 transition-colors inline-block mt-1">hello@nexuspay.com</a>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a href="#" aria-label="X (Twitter)" className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-300 hover:bg-indigo-500/20 hover:text-white transition-all hover:scale-105">
                  <iconify-icon icon="simple-icons:x" width="14" height="14"></iconify-icon>
                </a>
                <a href="#" aria-label="GitHub" className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-300 hover:bg-indigo-500/20 hover:text-white transition-all hover:scale-105">
                  <iconify-icon icon="simple-icons:github" width="18" height="18"></iconify-icon>
                </a>
                <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-300 hover:bg-indigo-500/20 hover:text-white transition-all hover:scale-105">
                  <iconify-icon icon="simple-icons:linkedin" width="16" height="16"></iconify-icon>
                </a>
                <a href="#" aria-label="Dribbble" className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-300 hover:bg-indigo-500/20 hover:text-white transition-all hover:scale-105">
                  <iconify-icon icon="simple-icons:dribbble" width="18" height="18"></iconify-icon>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs">
            <p className="text-slate-500 font-light">
              &copy; {new Date().getFullYear()} NexusPay, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <Link to="#" className="text-slate-500 hover:text-slate-300 transition-colors font-light">
                Privacy Policy
              </Link>
              <span className="text-slate-700 hidden sm:inline">/</span>
              <Link to="#" className="text-slate-500 hover:text-slate-300 transition-colors font-light">
                Terms & Conditions
              </Link>
              <span className="text-slate-700 hidden sm:inline">/</span>
              <Link to="#" className="text-slate-500 hover:text-slate-300 transition-colors font-light">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;