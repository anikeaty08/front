import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="absolute inset-0 z-[-1] bg-grid pointer-events-none"></div>
<header className="sticky top-0 z-50 bg-[#05070f]/70 backdrop-blur-xl border-b border-white/10">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-semibold tracking-tighter text-lg uppercase flex items-center gap-2" href="#">
<div className="w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_10px_rgba(56,189,248,0.8)]"></div>
                NEXCORE
            </a>
<nav className="hidden sm:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors duration-200" href="#services">Services</a>
<a className="hover:text-white transition-colors duration-200" href="#about">About</a>
<a className="hover:text-white transition-colors duration-200" href="#contact">Contact</a>
</nav>
</div>
</header>
<main className="flex-grow">
<section className="relative pt-32 pb-24 md:pt-56 md:pb-40 px-6 text-center max-w-5xl mx-auto overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#38bdf8]/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38bdf8] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#38bdf8]"></span>
</span>
                Taking on new projects
            </div>
<h1 className="relative text-6xl md:text-8xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 mb-8 leading-tight">
                Launch and grow<br className="hidden md:block"/> with ease.
            </h1>
<p className="relative text-lg md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                We handle your digital design, tech, and setup, so you can focus entirely on running your business.
            </p>
<div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#38bdf8] text-[#05070f] text-sm font-semibold px-8 py-4 rounded-full hover:bg-sky-300 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(56,189,248,0.3)] hover:shadow-[0_0_40px_rgba(56,189,248,0.5)]" href="#contact">
                    Start Your Project
                    <iconify-icon height="1.2rem" icon="solar:arrow-right-linear" strokeWidth="1.5" width="1.2rem"></iconify-icon>
</a>
</div>
</section>
<section className="py-32 px-6 max-w-7xl mx-auto" id="services">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">How We Help You</h2>
<p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl">Everything you need to establish a professional, stress-free digital presence.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

<div className="relative bg-[#0b101e]/80 backdrop-blur-md border border-white/10 border-t-white/20 p-8 rounded-3xl hover:-translate-y-2 hover:border-[#38bdf8]/40 hover:shadow-[0_20px_40px_-15px_rgba(56,189,248,0.1)] transition-all duration-300 group flex flex-col overflow-hidden">
<div className="absolute -top-10 -right-10 w-32 h-32 bg-[#38bdf8]/10 rounded-full blur-[30px] group-hover:bg-[#38bdf8]/20 transition-all duration-300"></div>
<div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#38bdf8] mb-8 group-hover:scale-110 group-hover:bg-[#38bdf8]/10 transition-all duration-300 relative z-10">
<iconify-icon height="1.8rem" icon="solar:laptop-minimalistic-linear" strokeWidth="1.5" width="1.8rem"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3 relative z-10">Website Development</h3>
<p className="text-sm text-slate-400 leading-relaxed relative z-10">Custom, easy-to-use websites designed to attract your ideal customers and drive conversions.</p>
</div>

<div className="relative bg-[#0b101e]/80 backdrop-blur-md border border-white/10 border-t-white/20 p-8 rounded-3xl hover:-translate-y-2 hover:border-indigo-400/40 hover:shadow-[0_20px_40px_-15px_rgba(129,140,248,0.1)] transition-all duration-300 group flex flex-col overflow-hidden">
<div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-[30px] group-hover:bg-indigo-500/20 transition-all duration-300"></div>
<div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-8 group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all duration-300 relative z-10">
<iconify-icon height="1.8rem" icon="solar:pallete-2-linear" strokeWidth="1.5" width="1.8rem"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3 relative z-10">Branding &amp; Logos</h3>
<p className="text-sm text-slate-400 leading-relaxed relative z-10">Professional, striking visual identities that build instant trust and make you stand out.</p>
</div>

<div className="relative bg-[#0b101e]/80 backdrop-blur-md border border-white/10 border-t-white/20 p-8 rounded-3xl hover:-translate-y-2 hover:border-[#38bdf8]/40 hover:shadow-[0_20px_40px_-15px_rgba(56,189,248,0.1)] transition-all duration-300 group flex flex-col overflow-hidden">
<div className="absolute -top-10 -right-10 w-32 h-32 bg-[#38bdf8]/10 rounded-full blur-[30px] group-hover:bg-[#38bdf8]/20 transition-all duration-300"></div>
<div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#38bdf8] mb-8 group-hover:scale-110 group-hover:bg-[#38bdf8]/10 transition-all duration-300 relative z-10">
<iconify-icon height="1.8rem" icon="solar:document-text-linear" strokeWidth="1.5" width="1.8rem"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3 relative z-10">Company Setup</h3>
<p className="text-sm text-slate-400 leading-relaxed relative z-10">We guide you through the paperwork and legalities so you can launch without the headache.</p>
</div>

<div className="relative bg-[#0b101e]/80 backdrop-blur-md border border-white/10 border-t-white/20 p-8 rounded-3xl hover:-translate-y-2 hover:border-indigo-400/40 hover:shadow-[0_20px_40px_-15px_rgba(129,140,248,0.1)] transition-all duration-300 group flex flex-col overflow-hidden">
<div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-[30px] group-hover:bg-indigo-500/20 transition-all duration-300"></div>
<div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-8 group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all duration-300 relative z-10">
<iconify-icon height="1.8rem" icon="solar:bolt-linear" strokeWidth="1.5" width="1.8rem"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3 relative z-10">Smart Automation</h3>
<p className="text-sm text-slate-400 leading-relaxed relative z-10">Simple, powerful digital tools that save you hours of time on everyday business tasks.</p>
</div>
</div>
</section>
<section className="py-32 px-6" id="about">
<div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0b101e] to-[#05070f] border border-white/10 p-10 md:p-20 rounded-[2.5rem] relative overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-grid opacity-50 mix-blend-overlay pointer-events-none"></div>
<div className="absolute top-0 right-0 w-64 h-64 bg-[#38bdf8]/10 blur-[80px] rounded-full pointer-events-none"></div>
<div className="relative z-10 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-8">Your Digital Partner</h2>
<p className="text-lg md:text-2xl text-slate-300 leading-relaxed">
                        At Nexcore, we know that starting and scaling a business is hard enough without worrying about the technical details. We partner with entrepreneurs to build reliable, beautiful digital foundations—turning your ideas into a ready-to-launch company.
                    </p>
</div>
</div>
</section>
<section className="pt-32 pb-40 px-6 relative overflow-hidden" id="contact">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#38bdf8]/10 via-indigo-500/10 to-[#38bdf8]/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-6">Let's build<br/> something great.</h2>
<p className="text-lg md:text-xl text-slate-300 mb-10">Reach out for a friendly, no-pressure chat about your goals and how we can help.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-[#05070f] text-sm font-semibold px-8 py-4 rounded-full hover:scale-105 hover:bg-slate-100 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]" href="mailto:nexcoreIT1@gmail.com">
<iconify-icon height="1.2rem" icon="solar:letter-linear" strokeWidth="1.5" width="1.2rem"></iconify-icon>
                        nexcoreIT1@gmail.com
                    </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8] text-sm font-semibold px-8 py-4 rounded-full hover:scale-105 hover:bg-[#38bdf8]/20 transition-all duration-300 backdrop-blur-sm" href="https://wa.me/0605928417">
<iconify-icon height="1.2rem" icon="solar:phone-linear" strokeWidth="1.5" width="1.2rem"></iconify-icon>
                        060 592 8417
                    </a>
</div>
</div>
</section>
</main>
<footer className="py-10 px-6 text-center border-t border-white/10 bg-[#05070f] relative z-10">
<p className="text-sm text-slate-500 font-medium tracking-tight">© 2026 Nexcore. All rights reserved.</p>
</footer>

    </>
  );
}
