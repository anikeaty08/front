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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif'],
},
colors: {
primary: '#0E7A57',
primaryHover: '#0b6145',
brand: {
gray: '#F8FAFC',
border: '#E2E8F0',
textMain: '#0F172A',
textMuted: '#64748B'
}
},
boxShadow: {
'subtle': '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
'card': '0 10px 40px -10px rgba(15, 23, 42, 0.08)',
'float': '0 20px 40px -10px rgba(15, 23, 42, 0.15)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            // Intersection Observer for scroll animations
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.fade-up, .fade-in').forEach(el => observer.observe(el));

            // Faux scan line animation style addition for QR
            const style = document.createElement('style');
            style.innerHTML = `
                @keyframes scan {
                    0% { transform: translateY(-100%); opacity: 0; }
                    20% { opacity: 1; }
                    80% { opacity: 1; }
                    100% { transform: translateY(300%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        });
    
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
      

<nav className="fixed top-0 left-0 w-full z-50 glass-header border-b border-brand-border transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-brand-textMain">GetPreCare</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-textMuted">
<a className="hover:text-brand-textMain transition-colors" href="#platform">Platform</a>
<a className="hover:text-brand-textMain transition-colors" href="#how-it-works">How It Works</a>
<a className="hover:text-brand-textMain transition-colors" href="#wallet">Wallet</a>
<a className="hover:text-brand-textMain transition-colors" href="#products">Products</a>
<a className="hover:text-brand-textMain transition-colors" href="#company">Company</a>
<a className="hover:text-brand-textMain transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex px-5 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primaryHover rounded-full transition-colors shadow-sm items-center gap-2" href="#">
                    View Platform
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<button className="md:hidden text-brand-textMain">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brand-gray border-b border-brand-border">
<div className="absolute inset-0 bg-grid-pattern opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col items-start fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-brand-border text-xs font-semibold text-brand-textMuted mb-6 shadow-sm">
<span className="w-2 h-2 rounded-full bg-primary relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-40"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
                    Infrastructure for Care
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-brand-textMain mb-6">
                    Your Personal Assistant Between Visits
                </h1>
<p className="text-lg text-brand-textMuted leading-relaxed max-w-xl mb-10">
                    A coordination layer that helps users prepare, share, and manage information across interactions securely.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="px-8 py-3.5 text-sm font-semibold text-white bg-brand-textMain hover:bg-slate-800 rounded-full transition-colors shadow-md text-center" href="#">
                        Explore Platform
                    </a>
</div>
</div>

<div className="relative h-[500px] w-full hidden lg:block fade-up" style={{transitionDelay: '200ms'}}>

<svg className="absolute top-1/2 left-1/4 w-1/2 h-24 -translate-y-1/2 z-0 text-brand-border" fill="none" preserveaspectratio="none" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="2" viewbox="0 0 100 100">
<path d="M0,50 C30,50 70,0 100,0"></path>
</svg>

<div className="absolute right-0 top-10 w-[380px] h-[420px] bg-white rounded-2xl shadow-float border border-brand-border overflow-hidden z-10 anim-float-2">

<div className="h-14 border-b border-brand-border bg-brand-gray flex items-center px-4 justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center text-primary">
<iconify-icon icon="solar:folder-with-files-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight">Secure Vault</span>
</div>
<div className="w-8 h-8 rounded-full bg-slate-200 border border-white"></div>
</div>

<div className="p-5 flex flex-col gap-4">
<div className="flex gap-4">
<div className="w-1/3 h-20 rounded-xl bg-brand-gray border border-brand-border p-3 flex flex-col justify-between">
<iconify-icon className="text-brand-textMuted" icon="solar:document-text-linear" strokeWidth="1.5" width="16"></iconify-icon>
<div>
<div className="text-xs font-semibold">Records</div>
<div className="text-[10px] text-brand-textMuted">12 Items</div>
</div>
</div>
<div className="w-1/3 h-20 rounded-xl bg-brand-gray border border-brand-border p-3 flex flex-col justify-between">
<iconify-icon className="text-brand-textMuted" icon="solar:gallery-linear" strokeWidth="1.5" width="16"></iconify-icon>
<div>
<div className="text-xs font-semibold">Imaging</div>
<div className="text-[10px] text-brand-textMuted">4 Items</div>
</div>
</div>
<div className="w-1/3 h-20 rounded-xl bg-primary/5 border border-primary/20 p-3 flex flex-col justify-between">
<iconify-icon className="text-primary" icon="solar:user-id-linear" strokeWidth="1.5" width="16"></iconify-icon>
<div>
<div className="text-xs font-semibold text-primary">Identity</div>
<div className="text-[10px] text-primary/70">Verified</div>
</div>
</div>
</div>
<div className="text-xs font-semibold text-brand-textMuted uppercase tracking-widest mt-2">Recent Activity</div>

<div className="flex items-center gap-3 p-3 rounded-lg border border-brand-border bg-white">
<div className="w-8 h-8 rounded bg-brand-gray flex items-center justify-center text-brand-textMuted">
<iconify-icon icon="solar:file-check-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-xs font-semibold">Intake Form Completed</div>
<div className="text-[10px] text-brand-textMuted">Today, 9:41 AM</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border border-brand-border bg-white">
<div className="w-8 h-8 rounded bg-brand-gray flex items-center justify-center text-brand-textMuted">
<iconify-icon icon="solar:upload-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-xs font-semibold">Lab Results Uploaded</div>
<div className="text-[10px] text-brand-textMuted">Yesterday, 2:15 PM</div>
</div>
</div>
</div>
</div>

<div className="absolute left-0 top-32 w-[260px] bg-white rounded-3xl shadow-card border border-brand-border overflow-hidden z-20 anim-float-1">

<div className="bg-primary text-white p-5 flex flex-col gap-4">
<div className="flex justify-between items-start">
<div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<iconify-icon className="opacity-70" icon="solar:info-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<div className="text-[10px] font-semibold tracking-widest uppercase text-white/70 mb-1">GetPreCare</div>
<div className="text-lg font-semibold tracking-tight">Vault Access</div>
</div>
</div>

<div className="p-5 flex flex-col items-center">

<div className="w-32 h-32 rounded-xl bg-white border-2 border-brand-gray p-2 mb-4 relative flex items-center justify-center">

<div className="grid grid-cols-5 grid-rows-5 gap-1 w-full h-full opacity-80">
<div className="col-span-2 row-span-2 bg-brand-textMain rounded-sm"></div>
<div className="col-start-4 col-span-2 row-span-2 bg-brand-textMain rounded-sm"></div>
<div className="col-start-1 col-span-2 row-start-4 row-span-2 bg-brand-textMain rounded-sm"></div>
<div className="col-start-3 row-start-3 w-full h-full bg-brand-textMain rounded-sm"></div>
<div className="col-start-5 row-start-4 w-full h-full bg-brand-textMain rounded-sm"></div>
<div className="col-start-4 row-start-5 w-full h-full bg-brand-textMain rounded-sm"></div>
<div className="col-start-2 row-start-3 w-full h-full bg-brand-textMain rounded-sm"></div>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent h-1/3 w-full translate-y-full opacity-0 animate-[scan_3s_ease-in-out_infinite]"></div>
</div>
<div className="text-xs font-mono text-brand-textMuted tracking-widest bg-brand-gray px-3 py-1 rounded">VLT-8492-AX</div>

<div className="w-full mt-6 flex justify-between items-center pt-4 border-t border-brand-border">
<span className="text-xs font-semibold text-brand-textMain">Auto-Updates</span>
<div className="w-10 h-5 bg-primary rounded-full relative shadow-inner flex items-center px-0.5">
<div className="w-4 h-4 bg-white rounded-full translate-x-5 shadow-sm"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="platform">
<div className="max-w-4xl mx-auto px-6 text-center fade-up">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-textMain mb-6">
                Infrastructure for information continuity
            </h2>
<p className="text-lg md:text-xl text-brand-textMuted leading-relaxed">
                GetPreCare is the underlying infrastructure that powers secure vault access, QR-based sharing, and digital wallet cards. Users can instantly create a personal data vault, generate a secure access card, and share critical information when and where it's needed most.
            </p>
</div>
</section>

<section className="py-24 bg-brand-gray border-y border-brand-border">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-brand-border shadow-subtle hover:shadow-card transition-shadow duration-300 fade-up">
<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
<iconify-icon icon="solar:calendar-date-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-brand-textMain mb-3">Before</h3>
<p className="text-sm text-brand-textMuted leading-relaxed">
                        Prepare information and set up secure access protocols before any interactions occur. Establish a baseline of readiness.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-brand-border shadow-subtle hover:shadow-card transition-shadow duration-300 fade-up" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
<iconify-icon icon="solar:transfer-horizontal-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-brand-textMain mb-3">Between</h3>
<p className="text-sm text-brand-textMuted leading-relaxed">
                        Seamlessly share updates, upload required documents, and manage permissions on the fly via temporary access links.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-brand-border shadow-subtle hover:shadow-card transition-shadow duration-300 fade-up" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
<iconify-icon icon="solar:lock-keyhole-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-brand-textMain mb-3">After</h3>
<p className="text-sm text-brand-textMuted leading-relaxed">
                        Maintain continuity and total control. Revoke access instantly and keep a persistent record of all data exchanges.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="how-it-works">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="mb-16 fade-up">
<h2 className="text-3xl font-semibold tracking-tight text-brand-textMain">How it works</h2>
<p className="text-brand-textMuted mt-2">A streamlined process from creation to secure sharing.</p>
</div>
<div className="relative fade-up">

<div className="hidden md:block absolute top-10 left-10 right-10 h-px bg-brand-border"></div>
<div className="grid md:grid-cols-4 gap-10 relative z-10">

<div className="flex flex-col items-start group">
<div className="w-20 h-20 rounded-2xl bg-white border border-brand-border shadow-sm flex items-center justify-center mb-6 group-hover:border-primary group-hover:text-primary transition-colors duration-300">
<iconify-icon className="text-brand-textMuted group-hover:text-primary transition-colors" icon="solar:folder-with-files-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="text-xs font-mono font-semibold tracking-widest text-primary mb-2">STEP 01</div>
<h4 className="text-lg font-semibold tracking-tight text-brand-textMain mb-2">Create vault</h4>
<p className="text-sm text-brand-textMuted leading-relaxed">Initialize a secure data container bound to the user's identity.</p>
</div>

<div className="flex flex-col items-start group">
<div className="w-20 h-20 rounded-2xl bg-white border border-brand-border shadow-sm flex items-center justify-center mb-6 group-hover:border-primary group-hover:text-primary transition-colors duration-300 relative">
<div className="absolute -left-10 top-1/2 w-10 h-px bg-brand-border hidden md:block"></div>
<iconify-icon className="text-brand-textMuted group-hover:text-primary transition-colors" icon="solar:wallet-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="text-xs font-mono font-semibold tracking-widest text-primary mb-2">STEP 02</div>
<h4 className="text-lg font-semibold tracking-tight text-brand-textMain mb-2">Generate access card</h4>
<p className="text-sm text-brand-textMuted leading-relaxed">Provision a digital wallet pass that acts as the key to the vault.</p>
</div>

<div className="flex flex-col items-start group">
<div className="w-20 h-20 rounded-2xl bg-white border border-brand-border shadow-sm flex items-center justify-center mb-6 group-hover:border-primary group-hover:text-primary transition-colors duration-300 relative">
<div className="absolute -left-10 top-1/2 w-10 h-px bg-brand-border hidden md:block"></div>
<iconify-icon className="text-brand-textMuted group-hover:text-primary transition-colors" icon="solar:qr-code-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="text-xs font-mono font-semibold tracking-widest text-primary mb-2">STEP 03</div>
<h4 className="text-lg font-semibold tracking-tight text-brand-textMain mb-2">Share via QR or link</h4>
<p className="text-sm text-brand-textMuted leading-relaxed">Provide instant access to authorized parties via physical scan or digital link.</p>
</div>

<div className="flex flex-col items-start group">
<div className="w-20 h-20 rounded-2xl bg-white border border-brand-border shadow-sm flex items-center justify-center mb-6 group-hover:border-primary group-hover:text-primary transition-colors duration-300 relative">
<div className="absolute -left-10 top-1/2 w-10 h-px bg-brand-border hidden md:block"></div>
<iconify-icon className="text-brand-textMuted group-hover:text-primary transition-colors" icon="solar:shield-up-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="text-xs font-mono font-semibold tracking-widest text-primary mb-2">STEP 04</div>
<h4 className="text-lg font-semibold tracking-tight text-brand-textMain mb-2">Control uploads</h4>
<p className="text-sm text-brand-textMuted leading-relaxed">Monitor interactions, dictate permissions, and manage what goes in.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-brand-gray border-y border-brand-border overflow-hidden" id="wallet">
<div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
<div className="fade-up">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-primary" icon="solar:wallet-money-linear" width="24"></iconify-icon>
<span className="text-sm font-semibold tracking-widest uppercase text-brand-textMuted">Native Integration</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-textMain mb-6">
                    Wallet + QR Access
                </h2>
<p className="text-lg text-brand-textMuted leading-relaxed mb-8">
                    GetPreCare fully supports Apple Wallet and Google Wallet access cards. Users can securely carry their vault access directly on their device's native wallet and share it instantly by presenting a QR code or sending a short link. No app download required.
                </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm font-semibold text-brand-textMain">
<iconify-icon className="text-primary" icon="solar:check-circle-linear" width="20"></iconify-icon>
                        Native OS Wallet Support
                    </li>
<li className="flex items-center gap-3 text-sm font-semibold text-brand-textMain">
<iconify-icon className="text-primary" icon="solar:check-circle-linear" width="20"></iconify-icon>
                        Offline QR Generation
                    </li>
<li className="flex items-center gap-3 text-sm font-semibold text-brand-textMain">
<iconify-icon className="text-primary" icon="solar:check-circle-linear" width="20"></iconify-icon>
                        Dynamic Content Updates
                    </li>
</ul>
</div>

<div className="relative flex justify-center fade-up" style={{transitionDelay: '200ms'}}>
<div className="w-[300px] h-[600px] bg-brand-textMain rounded-[40px] border-[8px] border-slate-800 shadow-2xl relative overflow-hidden flex flex-col items-center pt-16">

<div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-full"></div>

<div className="w-[90%] flex-1 bg-[#1A1A1A] rounded-t-3xl p-4 flex flex-col gap-4">
<div className="flex justify-between items-center px-1 mb-2">
<span className="text-white font-semibold text-xl tracking-tight">Wallet</span>
<div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white">+</div>
</div>

<div className="w-full h-16 bg-blue-600 rounded-xl -mb-12 shadow-sm border border-white/10 opacity-50 transform scale-90"></div>
<div className="w-full h-16 bg-red-500 rounded-xl -mb-12 shadow-sm border border-white/10 opacity-70 transform scale-95"></div>

<div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden relative z-10 border border-white/10 mt-2 hover:-translate-y-4 transition-transform duration-500 cursor-pointer">
<div className="bg-primary text-white p-4 flex flex-col gap-3">
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
</div>
<span className="text-xs font-semibold uppercase tracking-wider">GetPreCare</span>
</div>
<iconify-icon className="opacity-80" icon="solar:menu-dots-circle-linear" width="18"></iconify-icon>
</div>
<div className="text-xl font-semibold tracking-tight">Vault Access</div>
</div>
<div className="p-4 bg-white flex flex-col items-center pt-8 pb-10">
<div className="w-40 h-40 border border-brand-border rounded-xl p-2 relative flex items-center justify-center">
<iconify-icon className="text-brand-textMain" icon="solar:qr-code-linear" width="120"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="products">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="mb-12 fade-up">
<h2 className="text-3xl font-semibold tracking-tight text-brand-textMain">Powered Products</h2>
<p className="text-brand-textMuted mt-2">Built on the GetPreCare infrastructure.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 fade-up">

<div className="bg-white border border-brand-border rounded-3xl p-8 md:p-10 shadow-subtle hover:shadow-card transition-shadow duration-300 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
<div className="flex justify-between items-start mb-16">
<div className="w-16 h-16 rounded-2xl bg-brand-gray border border-brand-border flex items-center justify-center">
<iconify-icon className="text-primary" icon="solar:database-linear" width="32"></iconify-icon>
</div>
<span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-semibold uppercase tracking-widest rounded-full">Live</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-brand-textMain mb-3">YesOnUs Vault</h3>
<p className="text-sm text-brand-textMuted leading-relaxed max-w-sm mb-6">
                        Secure vault access designed specifically for patient empowerment and data portability, completely powered by GetPreCare core infrastructure.
                    </p>
<div className="flex items-center gap-2 text-sm font-semibold text-brand-textMain group-hover:text-primary transition-colors cursor-pointer">
                        View Product <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>

<div className="bg-brand-gray border border-brand-border border-dashed rounded-3xl p-8 md:p-10 flex flex-col justify-center items-center text-center">
<div className="w-16 h-16 rounded-full bg-white border border-brand-border flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-brand-textMuted" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-brand-textMain mb-2">Ecosystem Expansion</h3>
<p className="text-sm text-brand-textMuted leading-relaxed max-w-xs">
                        Additional products and specialized workflows will be built on the same robust platform in the future.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-gray border-t border-brand-border">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="mb-16 text-center fade-up">
<h2 className="text-3xl font-semibold tracking-tight text-brand-textMain">Platform Principles</h2>
</div>
<div className="grid md:grid-cols-2 gap-px bg-brand-border rounded-3xl overflow-hidden border border-brand-border shadow-subtle fade-up">
<div className="bg-white p-10 hover:bg-slate-50 transition-colors">
<iconify-icon className="text-primary mb-4" icon="solar:user-hands-linear" width="28"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight text-brand-textMain mb-2">User-controlled access</h3>
<p className="text-sm text-brand-textMuted">Data owners retain granular control over who views their information, with the ability to revoke access at any time.</p>
</div>
<div className="bg-white p-10 hover:bg-slate-50 transition-colors">
<iconify-icon className="text-primary mb-4" icon="solar:link-circle-linear" width="28"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight text-brand-textMain mb-2">Link-based sharing</h3>
<p className="text-sm text-brand-textMuted">Eliminate friction. Providers and third parties can access necessary documents via secure links without complex integrations.</p>
</div>
<div className="bg-white p-10 hover:bg-slate-50 transition-colors">
<iconify-icon className="text-primary mb-4" icon="solar:user-cross-linear" width="28"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight text-brand-textMain mb-2">No forced accounts</h3>
<p className="text-sm text-brand-textMuted">Receivers of shared data do not need to create accounts to view files. The barrier to interaction remains zero.</p>
</div>
<div className="bg-white p-10 hover:bg-slate-50 transition-colors">
<iconify-icon className="text-primary mb-4" icon="solar:safe-square-linear" width="28"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight text-brand-textMain mb-2">Secure vault ownership</h3>
<p className="text-sm text-brand-textMuted">Infrastructure is designed around the principle of isolated, encrypted vaults that belong definitively to the user.</p>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-brand-border pt-20 pb-10" id="company">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid md:grid-cols-2 gap-12 mb-16 fade-up">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-brand-textMain">GetPreCare</span>
</div>
<p className="text-sm text-brand-textMuted max-w-xs leading-relaxed mb-6">
                        Developed and operated by Continuum Health Systems LLC. Building the infrastructure layer for personal data coordination.
                    </p>
<div className="flex flex-col gap-2 text-sm text-brand-textMain font-medium">
<span className="flex items-center gap-2">
<iconify-icon className="text-brand-textMuted" icon="solar:map-point-linear"></iconify-icon>
                            Sheridan, Wyoming, United States
                        </span>
<a className="flex items-center gap-2 hover:text-primary transition-colors w-fit" href="mailto:support@getprecare.com">
<iconify-icon className="text-brand-textMuted" icon="solar:letter-linear"></iconify-icon>
                            support@getprecare.com
                        </a>
</div>
</div>
<div className="grid grid-cols-2 gap-8 md:justify-items-end">
<div className="flex flex-col gap-4 text-sm">
<h4 className="font-semibold text-brand-textMain tracking-tight">Platform</h4>
<a className="text-brand-textMuted hover:text-primary transition-colors" href="#how-it-works">How it Works</a>
<a className="text-brand-textMuted hover:text-primary transition-colors" href="#wallet">Wallet Integration</a>
<a className="text-brand-textMuted hover:text-primary transition-colors" href="#products">Powered Products</a>
</div>
<div className="flex flex-col gap-4 text-sm">
<h4 className="font-semibold text-brand-textMain tracking-tight">Legal</h4>
<a className="text-brand-textMuted hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a className="text-brand-textMuted hover:text-primary transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-textMuted fade-up">
<p>© 2026 Continuum Health Systems LLC. All rights reserved.</p>
<div className="flex items-center gap-2 border border-brand-border bg-brand-gray rounded-full px-3 py-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(14,122,87,0.5)]"></div>
<span className="font-mono uppercase tracking-widest">System Operational</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
