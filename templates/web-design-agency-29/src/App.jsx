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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
primary: '#0F172A',
accent: '#3B82F6',
accentHover: '#2563EB',
success: '#22C55E',
bgLight: '#F8FAFC',
borderSubtle: '#E2E8F0',
},
letterSpacing: {
tight: '-0.025em',
tighter: '-0.04em',
},
boxShadow: {
'card': '0 2px 8px -1px rgba(0, 0, 0, 0.05)',
'card-hover': '0 12px 24px -6px rgba(15, 23, 42, 0.06)',
}
}
}
}

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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-borderSubtle bg-white/90">
<div className="max-w-[1140px] mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-bold tracking-tight text-primary flex items-center gap-2" href="#">
                ZONE7
            </a>
<div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-primary transition-colors" href="#services">Services</a>
<a className="hover:text-primary transition-colors" href="#process">Process</a>
<a className="hover:text-primary transition-colors" href="#work">Work</a>
<a className="hover:text-primary transition-colors" href="#faq">FAQ</a>
</div>
<a className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-accent hover:bg-accentHover rounded-lg transition-all" href="#contact">
                Book Strategy Call
            </a>
</div>
</nav>

<header className="lg:pt-40 lg:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6">
<div className="max-w-[1140px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-xl">
<h1 className="lg:text-6xl text-primary leading-[1.1] text-5xl font-bold tracking-tight mb-6">
                    Web Design &amp; <br/>Development That <span className="text-accent">Drives Growth</span>
</h1>
<p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                    Your website isn't just a digital business card—it's your most powerful business asset. We build high-performance platforms designed to convert visitors into customers.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="px-8 py-4 bg-accent hover:bg-accentHover text-white rounded-lg font-semibold text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20" href="#contact">
                        Book Your Free Strategy Call
                    </a>
</div>
<div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
<svg aria-hidden="true" className="iconify text-success iconify--lucide" data-icon="lucide:check-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span className="">Trusted by 50+ scaling SaaS &amp; E-commerce brands</span>
</div>
</div>

<div className="relative hidden lg:block">
<div className="absolute -inset-4 bg-gradient-to-tr from-blue-50 to-slate-50 rounded-full blur-3xl opacity-60"></div>
<div className="relative bg-white rounded-xl shadow-2xl border border-borderSubtle p-2">
<div className="bg-slate-50 rounded-lg border border-borderSubtle overflow-hidden">

<div className="px-4 py-3 border-b border-borderSubtle bg-white flex items-center gap-4">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
</div>
<div className="h-2 w-32 bg-slate-100 rounded-full"></div>
</div>

<div className="p-8 space-y-8">
<div className="flex justify-between items-end">
<div className="space-y-2">
<div className="h-2 w-16 bg-slate-200 rounded"></div>
<div className="h-8 w-32 bg-primary rounded"></div>
</div>
<div className="h-8 w-24 bg-green-100 rounded text-success flex items-center justify-center text-xs font-bold">+128% Growth</div>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="h-24 bg-white border border-borderSubtle rounded-lg shadow-sm"></div>
<div className="h-24 bg-white border border-borderSubtle rounded-lg shadow-sm"></div>
<div className="h-24 bg-white border border-borderSubtle rounded-lg shadow-sm"></div>
</div>
<div className="h-40 bg-slate-100 rounded-lg border border-borderSubtle border-dashed flex items-center justify-center text-slate-400 text-sm">
                                Performance Metrics
                            </div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 bg-white border-y border-borderSubtle">
<div className="max-w-[1140px] mx-auto">
<div className="max-w-3xl mb-16">
<h2 className="text-4xl lg:text-5xl font-bold text-primary tracking-tight mb-6">Built for Outcomes, Not Just Awards.</h2>
<p className="text-lg text-slate-600 leading-relaxed">
                    Most agencies focus on making things look pretty. We focus on engineering a system that scales your business, reduces friction, and operates with lightning speed.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="space-y-4">
<div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-accent">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:crosshair" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M22 12h-4M6 12H2m10-6V2m0 20v-4"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-primary">Strategy-Led</h3>
<p className="text-slate-600 text-sm leading-relaxed">Every pixel serves a business purpose. We map user journeys before writing a single line of code.</p>
</div>
<div className="space-y-4">
<div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-accent">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="text-xl font-semibold text-primary">UX-Focused</h3>
<p className="text-slate-600 text-sm leading-relaxed">Intuitive interfaces that guide visitors effortlessly from landing to conversion.</p>
</div>
<div className="space-y-4">
<div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-accent">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-primary">Scalable Build</h3>
<p className="text-slate-600 text-sm leading-relaxed">Clean, modular code structures that grow with your company without needing a rebuild.</p>
</div>
<div className="space-y-4">
<div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-accent">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-primary">Performance Optimized</h3>
<p className="text-slate-600 text-sm leading-relaxed">Core Web Vitals compliant. We aim for &lt;1s load times to maximize SEO and retention.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-bgLight" id="services">
<div className="max-w-[1140px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-4xl lg:text-5xl font-bold text-primary tracking-tight mb-4">Our Expertise</h2>
<p className="text-lg text-slate-600">Comprehensive digital solutions tailored to your unique requirements.</p>
</div>
<a className="text-accent font-semibold flex items-center gap-2 hover:opacity-80 transition-opacity" href="#contact">
                    See full capabilities <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-xl border border-borderSubtle hover:shadow-card-hover hover:border-accent/30 transition-all duration-300">
<svg aria-hidden="true" className="iconify text-primary mb-6 iconify--lucide" data-icon="lucide:code-2" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-xl font-semibold text-primary mb-3">Custom Website Development</h3>
<p className="text-sm text-slate-600 mb-6 leading-relaxed min-h-[40px]">Bespoke React or Next.js applications built for complex functionality.</p>
<div className="pt-6 border-t border-borderSubtle">
<p className="text-xs font-semibold text-accent uppercase tracking-wide">Result: Unique Market Positioning</p>
</div>
</div>

<div className="group bg-white p-8 rounded-xl border border-borderSubtle hover:shadow-card-hover hover:border-accent/30 transition-all duration-300">
<svg aria-hidden="true" className="iconify text-primary mb-6 iconify--lucide" data-icon="lucide:layout-template" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></g></svg>
<h3 className="text-xl font-semibold text-primary mb-3">Website UI/UX Design</h3>
<p className="text-sm text-slate-600 mb-6 leading-relaxed min-h-[40px]">Visually stunning, brand-aligned interfaces that establish immediate trust.</p>
<div className="pt-6 border-t border-borderSubtle">
<p className="text-xs font-semibold text-accent uppercase tracking-wide">Result: Increased Brand Value</p>
</div>
</div>

<div className="group bg-white p-8 rounded-xl border border-borderSubtle hover:shadow-card-hover hover:border-accent/30 transition-all duration-300">
<svg aria-hidden="true" className="iconify text-primary mb-6 iconify--lucide" data-icon="lucide:mouse-pointer-click" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.1L12 6M5.1 8l-2.9-.8M6 12l-1.9 2M7.2 2.2L8 5.1m1.037 4.59a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-xl font-semibold text-primary mb-3">Conversion-Focused UX</h3>
<p className="text-sm text-slate-600 mb-6 leading-relaxed min-h-[40px]">Data-driven layout optimization to turn more visitors into qualified leads.</p>
<div className="pt-6 border-t border-borderSubtle">
<p className="text-xs font-semibold text-accent uppercase tracking-wide">Result: Higher ROI on Ad Spend</p>
</div>
</div>

<div className="group bg-white p-8 rounded-xl border border-borderSubtle hover:shadow-card-hover hover:border-accent/30 transition-all duration-300">
<svg aria-hidden="true" className="iconify text-primary mb-6 iconify--lucide" data-icon="lucide:shopping-bag" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
<h3 className="text-xl font-semibold text-primary mb-3">E-commerce Development</h3>
<p className="text-sm text-slate-600 mb-6 leading-relaxed min-h-[40px]">Secure, high-converting stores on Shopify, WooCommerce, or custom stacks.</p>
<div className="pt-6 border-t border-borderSubtle">
<p className="text-xs font-semibold text-accent uppercase tracking-wide">Result: Frictionless Checkout</p>
</div>
</div>

<div className="group bg-white p-8 rounded-xl border border-borderSubtle hover:shadow-card-hover hover:border-accent/30 transition-all duration-300">
<svg aria-hidden="true" className="iconify text-primary mb-6 iconify--lucide" data-icon="lucide:pen-tool" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13l-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18M2.3 2.3l7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></g></svg>
<h3 className="text-xl font-semibold text-primary mb-3">WordPress &amp; Divi</h3>
<p className="text-sm text-slate-600 mb-6 leading-relaxed min-h-[40px]">Expert implementation of easy-to-manage CMS solutions for marketing teams.</p>
<div className="pt-6 border-t border-borderSubtle">
<p className="text-xs font-semibold text-accent uppercase tracking-wide">Result: Easy Content Management</p>
</div>
</div>

<div className="group bg-white p-8 rounded-xl border border-borderSubtle hover:shadow-card-hover hover:border-accent/30 transition-all duration-300">
<svg aria-hidden="true" className="iconify text-primary mb-6 iconify--lucide" data-icon="lucide:gauge" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m12 14l4-4M3.34 19a10 10 0 1 1 17.32 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-xl font-semibold text-primary mb-3">Performance &amp; SEO</h3>
<p className="text-sm text-slate-600 mb-6 leading-relaxed min-h-[40px]">Technical optimization to ensure Google loves your code as much as users do.</p>
<div className="pt-6 border-t border-borderSubtle">
<p className="text-xs font-semibold text-accent uppercase tracking-wide">Result: Better Organic Rankings</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-borderSubtle bg-white pt-24 pr-6 pb-24 pl-6" id="process">
<div className="max-w-[1140px] mr-auto ml-auto">
<h2 className="text-4xl lg:text-5xl font-bold text-primary tracking-tight mb-16 text-center">How We Build Success</h2>
<div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

<div className="lg:col-span-8 space-y-12 relative">
<div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-slate-100 z-0"></div>

<div className="relative z-10 flex gap-8">
<div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0 border-4 border-white shadow-sm">01</div>
<div className="">
<h3 className="text-2xl font-bold text-primary mb-3">Discovery &amp; Strategy</h3>
<p className="text-slate-600 leading-relaxed mb-3">We deep dive into your business model, competitors, and audience. We define KPIs and scope.</p>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-50 border border-borderSubtle text-xs font-semibold text-slate-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:file-text" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg> Deliverable: Project Roadmap
                            </div>
</div>
</div>

<div className="relative z-10 flex gap-8">
<div className="w-10 h-10 rounded-full bg-white text-slate-400 flex items-center justify-center font-bold text-sm shrink-0 border-2 border-slate-200">02</div>
<div className="">
<h3 className="text-2xl font-bold text-primary mb-3">Planning &amp; Architecture</h3>
<p className="text-slate-600 leading-relaxed mb-3">Creating wireframes and sitemaps to ensure the user flow is logical and intuitive.</p>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-50 border border-borderSubtle text-xs font-semibold text-slate-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layout" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18M9 21V9"></path></g></svg> Deliverable: Wireframes
                            </div>
</div>
</div>

<div className="relative z-10 flex gap-8">
<div className="w-10 h-10 rounded-full bg-white text-slate-400 flex items-center justify-center font-bold text-sm shrink-0 border-2 border-slate-200">03</div>
<div className="">
<h3 className="text-2xl font-bold text-primary mb-3">Design &amp; UI</h3>
<p className="text-slate-600 leading-relaxed mb-3">High-fidelity designs that bring your brand to life before we write code.</p>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-50 border border-borderSubtle text-xs font-semibold text-slate-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:image" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></g></svg> Deliverable: Design Mockups
                            </div>
</div>
</div>

<div className="relative z-10 flex gap-8">
<div className="w-10 h-10 rounded-full bg-white text-slate-400 flex items-center justify-center font-bold text-sm shrink-0 border-2 border-slate-200">04</div>
<div>
<h3 className="text-2xl font-bold text-primary mb-3">Development &amp; Testing</h3>
<p className="text-slate-600 leading-relaxed mb-3">Coding the site using modern frameworks. Rigorous testing for bugs and responsiveness.</p>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-50 border border-borderSubtle text-xs font-semibold text-slate-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:code" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m16 18l6-6l-6-6M8 6l-6 6l6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Deliverable: Staging Link
                            </div>
</div>
</div>

<div className="relative z-10 flex gap-8">
<div className="w-10 h-10 rounded-full bg-white text-slate-400 flex items-center justify-center font-bold text-sm shrink-0 border-2 border-slate-200">05</div>
<div className="">
<h3 className="text-2xl font-bold text-primary mb-3">Launch &amp; Support</h3>
<p className="text-slate-600 leading-relaxed mb-3">Migration to live server, final SEO checks, and training. We don't ghost you after launch.</p>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-50 border border-borderSubtle text-xs font-semibold text-slate-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:rocket" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></g></svg> Deliverable: Live Site
                            </div>
</div>
</div>
</div>

<div className="lg:col-span-4">
<div className="sticky top-32 p-8 bg-slate-50 rounded-xl border border-borderSubtle">
<h4 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-accent iconify--lucide" data-icon="lucide:clock" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path className="" d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                            Typical Timelines
                        </h4>
<div className="space-y-6">
<div className="">
<div className="flex justify-between text-sm mb-2">
<span className="font-medium text-slate-700">Standard Website</span>
<span className="font-semibold text-primary">4–6 Weeks</span>
</div>
<div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
<div className="bg-green-400 w-[50%] h-full border-green-400"></div>
</div>
</div>
<div className="">
<div className="flex justify-between text-sm mb-2">
<span className="font-medium text-slate-700">E-commerce / App</span>
<span className="font-semibold text-primary">6–10 Weeks</span>
</div>
<div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
<div className="bg-green-400 w-[80%] h-full"></div>
</div>
</div>
<div className="">
<div className="flex justify-between text-sm mb-2">
<span className="font-medium text-slate-700">Enterprise</span>
<span className="font-semibold text-primary">Custom</span>
</div>
<div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-primary w-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-bgLight">
<div className="max-w-[1140px] mx-auto text-center">
<h2 className="text-3xl font-bold text-primary tracking-tight mb-12">Who We Work With</h2>
<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
<div className="p-6 bg-white rounded-xl border border-borderSubtle flex flex-col items-center hover:border-accent transition-colors">
<svg aria-hidden="true" className="iconify text-slate-400 mb-3 iconify--lucide" data-icon="lucide:server" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><path d="M6 6h.01M6 18h.01"></path></g></svg>
<h3 className="font-semibold text-sm text-primary">SaaS &amp; Tech</h3>
</div>
<div className="p-6 bg-white rounded-xl border border-borderSubtle flex flex-col items-center hover:border-accent transition-colors">
<svg aria-hidden="true" className="iconify text-slate-400 mb-3 iconify--lucide" data-icon="lucide:shopping-cart" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></g></svg>
<h3 className="font-semibold text-sm text-primary">E-commerce</h3>
</div>
<div className="p-6 bg-white rounded-xl border border-borderSubtle flex flex-col items-center hover:border-accent transition-colors">
<svg aria-hidden="true" className="iconify text-slate-400 mb-3 iconify--lucide" data-icon="lucide:rocket" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></g></svg>
<h3 className="font-semibold text-sm text-primary">Startups</h3>
</div>
<div className="p-6 bg-white rounded-xl border border-borderSubtle flex flex-col items-center hover:border-accent transition-colors">
<svg aria-hidden="true" className="iconify text-slate-400 mb-3 iconify--lucide" data-icon="lucide:briefcase" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg>
<h3 className="font-semibold text-sm text-primary">Agencies</h3>
</div>
<div className="p-6 bg-white rounded-xl border border-borderSubtle flex flex-col items-center hover:border-accent transition-colors">
<svg aria-hidden="true" className="iconify text-slate-400 mb-3 iconify--lucide" data-icon="lucide:user-check" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 11l2 2l4-4m-6 12v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
<h3 className="font-semibold text-sm text-primary">Professional Services</h3>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-primary text-white">
<div className="max-w-[1140px] mr-auto ml-auto">
<h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-16 text-center">Why Design Matters</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center backdrop-blur-sm">
<div className="text-accent text-5xl font-bold text-green-300 tracking-tight mb-4">75%</div>
<p className="text-slate-300 text-sm leading-relaxed">of users judge a company's credibility based solely on their website design.</p>
</div>

<div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center backdrop-blur-sm">
<div className="text-accent text-5xl font-bold text-green-300 tracking-tight mb-4">53%</div>
<p className="text-slate-300 text-sm leading-relaxed">of mobile site visitors leave a page that takes longer than 3 seconds to load.</p>
</div>

<div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center backdrop-blur-sm">
<div className="text-accent text-5xl font-bold text-green-300 tracking-tight mb-4">400%</div>
<p className="text-slate-300 text-sm leading-relaxed">potential conversion rate increase through superior user experience (UX) design.</p>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-xl font-medium text-white max-w-2xl mx-auto">
                    "A cheap website costs you more in lost opportunities than a premium one costs to build."
                </p>
</div>
</div>
</section>

<section className="bg-white pt-24 pr-6 pb-24 pl-6">
<div className="max-w-[1140px] mx-auto">
<h2 className="text-3xl font-bold text-primary tracking-tight mb-12 text-center">Client Results</h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="p-10 bg-bgLight rounded-xl border border-borderSubtle">
<span className="text-4xl text-accent font-serif mb-4 block">"</span>
<p className="text-lg text-slate-700 font-medium mb-8">Zone7 didn't just build a website; they built a sales engine. Our qualified leads have doubled since the launch.</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs text-slate-500">JD</div>
<div>
<div className="font-bold text-primary text-sm">James Doe</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">CEO, TechStart Inc.</div>
</div>
</div>
</div>
<div className="p-10 bg-bgLight rounded-xl border border-borderSubtle">
<span className="text-4xl text-accent font-serif mb-4 block">"</span>
<p className="text-lg text-slate-700 font-medium mb-8">The most organized development process I've ever experienced. On time, on budget, and incredible performance.</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs text-slate-500">AS</div>
<div>
<div className="font-bold text-primary text-sm">Sarah Jenkins</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Director, Creative Agency</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-bgLight border-y border-borderSubtle">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-6">Ready to Build a Website That Performs?</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-2xl mx-auto mb-12">
<div className="flex gap-3 items-center justify-center md:justify-start">
<div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-accent shrink-0">1</div>
<p className="text-sm text-slate-700 font-medium">Book a free 30-min call</p>
</div>
<div className="flex gap-3 items-center justify-center md:justify-start">
<div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-accent shrink-0">2</div>
<p className="text-sm text-slate-700 font-medium">Get a custom strategy plan</p>
</div>
<div className="flex gap-3 items-center justify-center md:justify-start">
<div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-accent shrink-0">3</div>
<p className="text-sm text-slate-700 font-medium">We build &amp; launch</p>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="sm:w-auto hover:bg-accentHover transition-all shadow-blue-500/20 font-semibold text-slate-900 bg-green-400 w-full rounded-lg px-8 py-4 shadow-lg" href="#contact">
                    Book Your Free Strategy Call
                </a>
<a className="w-full sm:w-auto px-8 py-4 bg-white border border-borderSubtle hover:bg-slate-50 text-slate-700 font-semibold rounded-lg transition-all" href="#contact">
                    Request a Custom Quote
                </a>
</div>
</div>
</section>

<section className="bg-white pt-24 pr-6 pb-24 pl-6" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-bold text-primary tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group bg-slate-50 border border-borderSubtle rounded-lg overflow-hidden transition-all duration-300 open:bg-white open:shadow-sm">
<summary className="flex justify-between items-center cursor-pointer p-6">
<span className="font-semibold text-primary">What is included in your web development package?</span>
<span className="text-slate-400 group-open:rotate-180 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-transparent group-open:border-borderSubtle pt-4">
                        Everything needed to launch. This includes discovery, UI/UX design, development, responsiveness testing, SEO fundamentals, and post-launch training.
                    </div>
</details>

<details className="group bg-slate-50 border border-borderSubtle rounded-lg overflow-hidden transition-all duration-300 open:bg-white open:shadow-sm">
<summary className="flex justify-between items-center cursor-pointer p-6">
<span className="font-semibold text-primary">How long does a typical project take?</span>
<span className="text-slate-400 group-open:rotate-180 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-transparent group-open:border-borderSubtle pt-4">
                        Standard brochure sites take 4–6 weeks. Complex e-commerce or custom web applications typically range from 6–10 weeks depending on feature requirements.
                    </div>
</details>

<details className="group bg-slate-50 border border-borderSubtle rounded-lg overflow-hidden transition-all duration-300 open:bg-white open:shadow-sm">
<summary className="flex justify-between items-center cursor-pointer p-6">
<span className="font-semibold text-primary">Do you work with WordPress and Divi?</span>
<span className="text-slate-400 group-open:rotate-180 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-transparent group-open:border-borderSubtle pt-4">
                        Yes. While we build custom React apps, we are experts in WordPress and Divi for clients who need full autonomy over their content management.
                    </div>
</details>

<details className="group bg-slate-50 border border-borderSubtle rounded-lg overflow-hidden transition-all duration-300 open:bg-white open:shadow-sm">
<summary className="flex justify-between items-center cursor-pointer p-6">
<span className="font-semibold text-primary">Do I own the website after launch?</span>
<span className="text-slate-400 group-open:rotate-180 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-transparent group-open:border-borderSubtle pt-4">
                        100%. Once final payment is settled, you own the code, design assets, and content. No vendor lock-in.
                    </div>
</details>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-borderSubtle bg-white text-sm">
<div className="max-w-[1140px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-primary font-bold text-lg">ZONE7</span>
<span className="text-slate-400">© 2023 Zone7 Agency</span>
</div>
<div className="flex gap-8">
<a className="text-slate-500 hover:text-primary transition-colors font-medium" href="#">Privacy</a>
<a className="text-slate-500 hover:text-primary transition-colors font-medium" href="#">Terms</a>
</div></div></footer><div className="host-lopnbnfpjmgpbppclhclehhgafnifija" style={{position: 'relative', zIndex: '2147483647'}}></div><div className="host-lopnbnfpjmgpbppclhclehhgafnifija" style={{position: 'relative', zIndex: '2147483647'}}></div><div className="host-lopnbnfpjmgpbppclhclehhgafnifija" style={{position: 'relative', zIndex: '2147483647'}}></div><div className="host-lopnbnfpjmgpbppclhclehhgafnifija" style={{position: 'relative', zIndex: '2147483647'}}></div><div className="host-lopnbnfpjmgpbppclhclehhgafnifija" style={{position: 'relative', zIndex: '2147483647'}}></div><div className="host-lopnbnfpjmgpbppclhclehhgafnifija" style={{position: 'relative', zIndex: '2147483647'}}></div>
    </>
  );
}
