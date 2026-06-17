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



document.addEventListener("DOMContentLoaded", () => {
// Observer
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if(entry.isIntersecting) {
entry.target.classList.add('animate');
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1 });
document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
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
      

<div className="noise-overlay"></div>

<div className="fixed inset-0 pointer-events-none z-0 technical-grid"></div>

<div className="fixed inset-0 pointer-events-none z-0 max-w-[1400px] mx-auto border-x border-dashed border-neutral-200/60">
<div className="absolute left-1/3 h-full w-px border-l border-dashed border-neutral-200/60"></div>
<div className="absolute left-2/3 h-full w-px border-l border-dashed border-neutral-200/60"></div>
</div>

<div className="fixed z-40 top-0 left-0 w-full backdrop-blur-md bg-white/80 border-b border-neutral-200/60">
<nav className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-5 h-5 bg-neutral-900 flex items-center justify-center rounded-sm">
<span className="text-white font-bold text-[10px] font-sans" style={{}}>N</span>
</div>
<span className="text-xs font-semibold tracking-tight uppercase text-neutral-900 font-sans" style={{}}>Ngazi Digital Lab</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors font-sans" href="#services" style={{}}>Services</a>
<a className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors font-sans" href="#work" style={{}}>Work</a>
<a className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors font-sans" href="#process" style={{}}>Process</a>
</div>
<button className="px-5 py-2 bg-neutral-900 text-white text-[11px] font-medium rounded-full hover:bg-neutral-800 transition-colors tracking-wide font-sans" style={{}}>
                Start Project
            </button>
</nav>
</div>
<main className="relative z-10">

<section className="md:py-32 max-w-[1400px] border-neutral-200/60 border-b mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 mb-8 animate-on-scroll">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] font-medium text-neutral-600 uppercase tracking-wide font-sans" style={{}}>Accepting New Ventures</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl text-neutral-900 leading-[0.95] mb-10 animate-on-scroll tracking-wide font-manrope font-medium" style={{animationDelay: '100ms'}}>
                    Scaling Business<br/>
<span className="text-neutral-400 tracking-wide font-manrope font-medium" style={{}}>Through Design.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-500 font-light max-w-2xl leading-relaxed mb-12 animate-on-scroll font-sans" style={{animationDelay: '200ms'}}>
                    Ngazi Digital Lab utilizes modern technology to create unique, custom, user-centered designs for digital products. We offer branding, design, and web &amp; mobile development services to help businesses scale online.
                </p>
<div className="flex gap-6 animate-on-scroll gap-x-6 gap-y-6 items-center" style={{animationDelay: '300ms'}}>
<button className="shiny-btn uppercase flex gap-2 text-xs font-semibold tracking-widest rounded-lg pt-3.5 pr-8 pb-3.5 pl-8 gap-x-2 gap-y-2 items-center">Get Started -&gt;</button>
<a className="text-xs font-medium text-neutral-500 hover:text-neutral-900 underline underline-offset-4 font-sans" href="#" style={{}}>Read Case Studies</a>
</div>
</div>
</section>

<div className="py-12 border-b border-neutral-200/60 bg-neutral-50/50 overflow-hidden">
<div className="marquee-wrapper max-w-[1400px] mx-auto">
<div className="marquee-content items-center opacity-40 grayscale">
<iconify-icon icon="simple-icons:react" width="28"></iconify-icon>
<iconify-icon icon="simple-icons:figma" width="28"></iconify-icon>
<iconify-icon icon="simple-icons:framer" width="28"></iconify-icon>
<iconify-icon icon="simple-icons:webflow" width="28"></iconify-icon>
<iconify-icon icon="simple-icons:flutter" width="28"></iconify-icon>
<iconify-icon icon="simple-icons:stripe" width="36"></iconify-icon>
<iconify-icon icon="simple-icons:vercel" width="28"></iconify-icon>

<iconify-icon icon="simple-icons:react" width="28"></iconify-icon>
<iconify-icon icon="simple-icons:figma" width="28"></iconify-icon>
<iconify-icon icon="simple-icons:framer" width="28"></iconify-icon>
<iconify-icon icon="simple-icons:webflow" width="28"></iconify-icon>
<iconify-icon icon="simple-icons:flutter" width="28"></iconify-icon>
<iconify-icon icon="simple-icons:stripe" width="36"></iconify-icon>
<iconify-icon icon="simple-icons:vercel" width="28"></iconify-icon>
</div>
</div>
</div>

<section className="relative overflow-hidden border-b border-neutral-200/60 bg-neutral-50/30" id="services">
<div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row min-h-[800px]">

<div className="lg:w-1/2 lg:py-32 flex flex-col bg-gradient-to-r from-white via-white to-transparent w-full z-10 pt-20 pr-6 pb-20 pl-6 relative justify-center">
<div className="text-[10px] font-mono uppercase text-neutral-400 mb-6 tracking-widest font-sans" style={{}}>01 — Expertise</div>
<h2 className="text-4xl md:text-5xl text-neutral-900 mb-8 leading-tight tracking-wide font-manrope font-medium" style={{}}>
                        Modern Tech Stack<br/>
<span className="text-neutral-400 tracking-wide font-manrope font-medium" style={{}}>Custom Solutions</span>
</h2>
<div className="space-y-10 max-w-md">
<div className="flex gap-5 group">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center shadow-sm group-hover:border-neutral-400 transition-colors">
<iconify-icon className="text-neutral-700" icon="lucide:monitor-smartphone" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-neutral-900 mb-1 font-sans" style={{}}>Web &amp; Mobile Development</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light font-sans" style={{}}>Custom digital products built for scale using React, Flutter, and Next.js.</p>
</div>
</div>
<div className="flex gap-5 group">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center shadow-sm group-hover:border-neutral-400 transition-colors">
<iconify-icon className="text-neutral-700" icon="lucide:pen-tool" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-neutral-900 mb-1 font-sans" style={{}}>Branding &amp; Identity</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light font-sans" style={{}}>Forging unique visual systems that resonate with your core audience and retain users.</p>
</div>
</div>
<div className="flex gap-5 group">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center shadow-sm group-hover:border-neutral-400 transition-colors">
<iconify-icon className="text-neutral-700" icon="lucide:layers" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-neutral-900 mb-1 font-sans" style={{}}>User-Centered Design</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light font-sans" style={{}}>UI/UX frameworks designed to convert visitors into loyal customers.</p>
</div>
</div>
</div>
</div>

<div className="absolute lg:relative right-0 top-0 bottom-0 w-full lg:w-1/2 h-[600px] lg:h-auto overflow-hidden opacity-30 lg:opacity-100 pointer-events-none lg:pointer-events-auto">
<div className="wall-container w-full h-full absolute top-[-10%] right-[-20%]">
<div className="wall-grid flex gap-6">

<div className="wall-column-up flex flex-col gap-6">
<div className="wall-card w-64 h-48 rounded-xl p-6 flex flex-col justify-between">
<iconify-icon className="text-neutral-800" icon="lucide:smartphone" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs font-mono text-neutral-500 font-sans" style={{}}>Mobile Apps</span>
</div>
<div className="wall-card w-64 h-48 rounded-xl p-6 flex flex-col justify-between">
<iconify-icon className="text-neutral-800" icon="lucide:globe" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs font-mono text-neutral-500 font-sans" style={{}}>Web Platforms</span>
</div>
<div className="wall-card w-64 h-48 rounded-xl p-6 flex flex-col justify-between">
<iconify-icon className="text-neutral-800" icon="lucide:palette" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs font-mono text-neutral-500 font-sans" style={{}}>Design Systems</span>
</div>

<div className="wall-card w-64 h-48 rounded-xl p-6 flex flex-col justify-between">
<iconify-icon className="text-neutral-800" icon="lucide:smartphone" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs font-mono text-neutral-500 font-sans" style={{}}>Mobile Apps</span>
</div>
<div className="wall-card w-64 h-48 rounded-xl p-6 flex flex-col justify-between">
<iconify-icon className="text-neutral-800" icon="lucide:globe" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs font-mono text-neutral-500 font-sans" style={{}}>Web Platforms</span>
</div>
</div>

<div className="wall-column-down flex flex-col gap-6 pt-20">
<div className="wall-card w-64 h-48 rounded-xl p-6 flex flex-col justify-between">
<iconify-icon className="text-neutral-800" icon="lucide:zap" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs font-mono text-neutral-500 font-sans" style={{}}>Performance</span>
</div>
<div className="wall-card w-64 h-48 rounded-xl p-6 flex flex-col justify-between">
<iconify-icon className="text-neutral-800" icon="lucide:layout" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs font-mono text-neutral-500 font-sans" style={{}}>Interfaces</span>
</div>
<div className="wall-card w-64 h-48 rounded-xl p-6 flex flex-col justify-between">
<iconify-icon className="text-neutral-800" icon="lucide:code" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs font-mono text-neutral-500 font-sans" style={{}}>Development</span>
</div>

<div className="wall-card w-64 h-48 rounded-xl p-6 flex flex-col justify-between">
<iconify-icon className="text-neutral-800" icon="lucide:zap" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs font-mono text-neutral-500 font-sans" style={{}}>Performance</span>
</div>
<div className="wall-card w-64 h-48 rounded-xl p-6 flex flex-col justify-between">
<iconify-icon className="text-neutral-800" icon="lucide:layout" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs font-mono text-neutral-500 font-sans" style={{}}>Interfaces</span>
</div>
</div>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white z-20"></div>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 py-24 md:py-32 border-b border-neutral-200/60" id="work">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<div className="text-[10px] font-mono uppercase text-neutral-400 mb-4 tracking-widest font-sans" style={{}}>02 — Selected Works</div>
<h2 className="text-4xl text-neutral-900 tracking-wide font-manrope font-medium" style={{}}>Featured Projects</h2>
</div>
<a className="hidden md:flex text-xs font-medium text-neutral-500 items-center gap-2 hover:text-neutral-900 transition-colors font-sans" href="#" style={{}}>
                    View Archive <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="clockwise-glow p-[1px]">
<div className="clockwise-glow-inner p-8 flex flex-col justify-between h-[500px]">
<div className="mb-8 relative rounded-lg overflow-hidden h-full bg-neutral-100 group">
<div className="absolute inset-0 bg-neutral-200"></div>

<div className="absolute top-10 left-10 right-10 bottom-0 bg-white rounded-t-xl shadow-lg transform translate-y-4 group-hover:translate-y-2 transition-transform duration-500 p-6">
<div className="flex gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-neutral-200"></div>
<div className="w-2 h-2 rounded-full bg-neutral-200"></div>
</div>
<div className="h-2 w-1/3 bg-neutral-100 rounded mb-4"></div>
<div className="grid grid-cols-2 gap-4">
<div className="h-20 bg-neutral-50 rounded"></div>
<div className="h-20 bg-neutral-50 rounded"></div>
</div>
</div>
</div>
<div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-medium text-neutral-900 tracking-tight font-sans" style={{}}>Fintech Dashboard</h3>
<span className="px-2 py-1 bg-neutral-100 text-[10px] font-medium text-neutral-500 rounded uppercase tracking-wider font-sans" style={{}}>Web App</span>
</div>
<p className="text-sm text-neutral-500 font-light max-w-sm font-sans" style={{}}>A comprehensive data visualization platform for high-frequency trading analytics.</p>
</div>
</div>
</div>

<div className="border border-neutral-200 rounded-xl p-8 flex flex-col justify-between h-[500px] hover:border-neutral-300 transition-colors">
<div className="mb-8 relative rounded-lg overflow-hidden h-full bg-neutral-100 group">
<div className="absolute inset-0 bg-neutral-200"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-80 bg-neutral-900 rounded-[2rem] shadow-2xl p-2 group-hover:scale-105 transition-transform duration-500">
<div className="bg-neutral-800 w-full h-full rounded-[1.5rem] overflow-hidden relative">
<div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-neutral-900 rounded-b-lg"></div>
<div className="p-6 mt-8 space-y-3">
<div className="w-8 h-8 rounded-full bg-white/10"></div>
<div className="w-20 h-2 rounded bg-white/10"></div>
<div className="w-full h-32 rounded bg-white/5 mt-4"></div>
</div>
</div>
</div>
</div>
<div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-medium text-neutral-900 tracking-tight font-sans" style={{}}>E-Commerce Mobile App</h3>
<span className="px-2 py-1 bg-neutral-100 text-[10px] font-medium text-neutral-500 rounded uppercase tracking-wider font-sans" style={{}}>Mobile Dev</span>
</div>
<p className="text-sm text-neutral-500 font-light max-w-sm font-sans" style={{}}>Custom Flutter application increasing user retention by 40% through intuitive UX.</p>
</div>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 py-24 md:py-32 border-b border-neutral-200/60" id="process">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
<div>
<div className="text-[10px] font-mono uppercase text-neutral-400 mb-4 tracking-widest font-sans" style={{}}>03 — Methodology</div>
<h2 className="text-3xl text-neutral-900 mb-6 tracking-wide font-manrope font-medium" style={{}}>Built to Scale</h2>
<p className="text-sm text-neutral-500 leading-relaxed max-w-xs font-light font-sans" style={{}}>
                        Our process is rooted in data-driven decision making and rapid iteration, ensuring your digital product evolves with your business.
                    </p>
<ul className="mt-8 space-y-4">
<li className="flex items-center gap-3 text-sm text-neutral-700 font-sans" style={{}}>
<iconify-icon className="text-neutral-400" icon="lucide:check-circle"></iconify-icon> Agile Development
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-700 font-sans" style={{}}>
<iconify-icon className="text-neutral-400" icon="lucide:check-circle"></iconify-icon> Component-Driven Design
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-700 font-sans" style={{}}>
<iconify-icon className="text-neutral-400" icon="lucide:check-circle"></iconify-icon> Scalable Architecture
                        </li>
</ul>
</div>
<div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200 border border-neutral-200">
<div className="bg-white p-8 hover:bg-neutral-50 transition-colors">
<div className="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center mb-4 text-neutral-600 font-mono text-xs font-sans" style={{}}>01</div>
<h3 className="text-base font-medium text-neutral-900 mb-2 font-sans" style={{}}>Discovery &amp; Strategy</h3>
<p className="text-xs text-neutral-500 leading-relaxed font-sans" style={{}}>Understanding business goals and user needs to architect a solid digital foundation.</p>
</div>
<div className="bg-white p-8 hover:bg-neutral-50 transition-colors">
<div className="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center mb-4 text-neutral-600 font-mono text-xs font-sans" style={{}}>02</div>
<h3 className="text-base font-medium text-neutral-900 mb-2 font-sans" style={{}}>Design &amp; Prototype</h3>
<p className="text-xs text-neutral-500 leading-relaxed font-sans" style={{}}>High-fidelity visuals and interactive prototypes to validate concepts before code.</p>
</div>
<div className="bg-white p-8 hover:bg-neutral-50 transition-colors">
<div className="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center mb-4 text-neutral-600 font-mono text-xs font-sans" style={{}}>03</div>
<h3 className="text-base font-medium text-neutral-900 mb-2 font-sans" style={{}}>Development</h3>
<p className="text-xs text-neutral-500 leading-relaxed font-sans" style={{}}>Clean, semantic code using modern frameworks like React, Next.js, and Tailwind.</p>
</div>
<div className="bg-white p-8 hover:bg-neutral-50 transition-colors">
<div className="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center mb-4 text-neutral-600 font-mono text-xs font-sans" style={{}}>04</div>
<h3 className="text-base font-medium text-neutral-900 mb-2 font-sans" style={{}}>Launch &amp; Scale</h3>
<p className="text-xs text-neutral-500 leading-relaxed font-sans" style={{}}>Deployment to edge networks, performance monitoring, and continuous iteration.</p>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50/50 py-24 md:py-32 border-b border-neutral-200/60">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<div className="text-[10px] font-mono uppercase text-neutral-400 mb-4 tracking-widest font-sans" style={{}}>04 — Engagement</div>
<h2 className="text-4xl text-neutral-900 tracking-wide font-manrope font-medium" style={{}}>Partnership Models</h2>
</div>
<div className="flex items-center gap-3 mt-6 md:mt-0 bg-white p-1 rounded-full border border-neutral-200">
<button className="px-4 py-1.5 rounded-full bg-neutral-900 text-white text-[10px] font-medium tracking-wide shadow-sm font-sans" style={{}}>Monthly</button>
<button className="px-4 py-1.5 rounded-full text-neutral-500 text-[10px] font-medium tracking-wide hover:text-neutral-900 font-sans" style={{}}>Quarterly</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-xl border border-neutral-200 flex flex-col justify-between hover:shadow-lg hover:shadow-neutral-200/50 transition-all duration-300">
<div>
<div className="mb-4">
<h3 className="text-lg font-semibold text-neutral-900 font-sans" style={{}}>Design Sprint</h3>
<p className="text-xs text-neutral-500 mt-1 font-sans" style={{}}>Quick turnaround for specific tasks.</p>
</div>
<div className="my-8">
<span className="text-3xl text-neutral-900 tracking-wide font-manrope font-medium" style={{}}>$3,500</span>
<span className="text-xs text-neutral-400 font-medium font-sans" style={{}}>/project</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-xs text-neutral-600 font-sans" style={{}}>
<iconify-icon className="text-neutral-900 mt-0.5" icon="lucide:check" width="12"></iconify-icon> Branding Refresh
                                </li>
<li className="flex items-start gap-3 text-xs text-neutral-600 font-sans" style={{}}>
<iconify-icon className="text-neutral-900 mt-0.5" icon="lucide:check" width="12"></iconify-icon> Landing Page Design
                                </li>
<li className="flex items-start gap-3 text-xs text-neutral-600 font-sans" style={{}}>
<iconify-icon className="text-neutral-900 mt-0.5" icon="lucide:check" width="12"></iconify-icon> 1 Week Delivery
                                </li>
</ul>
</div>
<button className="w-full py-3 border border-neutral-200 text-xs font-medium text-neutral-600 rounded-lg hover:border-neutral-900 hover:text-neutral-900 transition-colors font-sans" style={{}}>Inquire</button>
</div>

<div className="bg-neutral-900 p-8 rounded-xl border border-neutral-900 flex flex-col justify-between relative overflow-hidden text-white transform md:-translate-y-4 shadow-xl">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon icon="lucide:zap" width="64"></iconify-icon>
</div>
<div>
<div className="mb-4">
<h3 className="text-lg font-semibold text-white font-sans" style={{}}>Growth Partner</h3>
<p className="text-xs text-neutral-400 mt-1 font-sans" style={{}}>Dedicated team for scaling businesses.</p>
</div>
<div className="my-8">
<span className="text-3xl text-white tracking-wide font-manrope font-medium" style={{}}>$6,500</span>
<span className="text-xs text-neutral-400 font-medium font-sans" style={{}}>/month</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-xs text-neutral-300 font-sans" style={{}}>
<iconify-icon className="text-white mt-0.5" icon="lucide:check" width="12"></iconify-icon> Unlimited Design Requests
                                </li>
<li className="flex items-start gap-3 text-xs text-neutral-300 font-sans" style={{}}>
<iconify-icon className="text-white mt-0.5" icon="lucide:check" width="12"></iconify-icon> Web &amp; Mobile Development
                                </li>
<li className="flex items-start gap-3 text-xs text-neutral-300 font-sans" style={{}}>
<iconify-icon className="text-white mt-0.5" icon="lucide:check" width="12"></iconify-icon> Priority Support
                                </li>
</ul>
</div>
<button className="hover:bg-neutral-100 transition-colors text-xs font-semibold text-neutral-900 bg-white w-full rounded-lg pt-3 pb-3 font-sans" style={{}}>Start Subscription</button>
</div>

<div className="bg-white p-8 rounded-xl border border-neutral-200 flex flex-col justify-between hover:shadow-lg hover:shadow-neutral-200/50 transition-all duration-300">
<div>
<div className="mb-4">
<h3 className="text-lg font-semibold text-neutral-900 font-sans" style={{}}>Custom Product</h3>
<p className="text-xs text-neutral-500 mt-1 font-sans" style={{}}>Full-cycle product development.</p>
</div>
<div className="my-8">
<span className="text-3xl text-neutral-900 tracking-wide font-manrope font-medium" style={{}}>Custom</span>
<span className="text-xs text-neutral-400 font-medium font-sans" style={{}}>/quote</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-xs text-neutral-600 font-sans" style={{}}>
<iconify-icon className="text-neutral-900 mt-0.5" icon="lucide:check" width="12"></iconify-icon> End-to-End Development
                                </li>
<li className="flex items-start gap-3 text-xs text-neutral-600 font-sans" style={{}}>
<iconify-icon className="text-neutral-900 mt-0.5" icon="lucide:check" width="12"></iconify-icon> Complex Integrations
                                </li>
<li className="flex items-start gap-3 text-xs text-neutral-600 font-sans" style={{}}>
<iconify-icon className="text-neutral-900 mt-0.5" icon="lucide:check" width="12"></iconify-icon> QA &amp; Testing
                                </li>
</ul>
</div>
<button className="w-full py-3 border border-neutral-200 text-xs font-medium text-neutral-600 rounded-lg hover:border-neutral-900 hover:text-neutral-900 transition-colors font-sans" style={{}}>Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="max-w-[1400px] mr-auto ml-auto pt-32 pr-6 pb-32 pl-6">
<div className="bg-neutral-900 rounded-2xl p-12 md:p-24 text-center relative overflow-hidden isolate">

<div className="bg-neutral-500 opacity-20 z-0 absolute top-0 right-0 bottom-0 left-0">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-neutral-500 to-neutral-700 rounded-full blur-[100px]"></div>
</div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="md:text-7xl text-5xl text-white tracking-wide mb-8 font-manrope font-medium" style={{}}>
                        Ready to scale?
                    </h2>
<p className="text-neutral-400 font-light text-lg mb-10 font-sans" style={{}}>
                        Join forward-thinking companies transforming their digital presence with Ngazi Digital Lab.
                    </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-4 bg-white text-neutral-900 text-xs font-semibold rounded-lg hover:bg-neutral-100 transition-colors tracking-widest uppercase font-sans" style={{}}>
                            Get Started
                        </button>
<button className="px-8 py-4 border border-neutral-700 text-white text-xs font-semibold rounded-lg hover:bg-neutral-800 transition-colors tracking-widest uppercase font-sans" style={{}}>
                            Book a Call
                        </button>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-200 py-20">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-4 h-4 bg-neutral-900 rounded-sm"></div>
<span className="text-sm font-bold tracking-tight uppercase font-sans" style={{}}>Ngazi Digital Lab</span>
</div>
<p className="text-xs text-neutral-500 max-w-xs leading-relaxed font-sans" style={{}}>
                            Creating unique, custom, user-centered designs for digital products to help businesses scale online.
                        </p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-[10px] font-mono uppercase text-neutral-400 mb-4 tracking-widest font-sans" style={{}}>Sitemap</h4>
<ul className="space-y-2 text-xs font-medium text-neutral-600">
<li><a className="hover:text-neutral-900 font-sans" href="#" style={{}}>Work</a></li>
<li><a className="hover:text-neutral-900 font-sans" href="#" style={{}}>Services</a></li>
<li><a className="hover:text-neutral-900 font-sans" href="#" style={{}}>Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-[10px] font-mono uppercase text-neutral-400 mb-4 tracking-widest font-sans" style={{}}>Socials</h4>
<ul className="space-y-2 text-xs font-medium text-neutral-600">
<li><a className="hover:text-neutral-900 font-sans" href="#" style={{}}>Twitter</a></li>
<li><a className="hover:text-neutral-900 font-sans" href="#" style={{}}>LinkedIn</a></li>
<li><a className="hover:text-neutral-900 font-sans" href="#" style={{}}>Instagram</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-400 uppercase tracking-wide">
<p className="font-sans" style={{}}>© 2024 Ngazi Digital Lab. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-neutral-600 font-sans" href="#" style={{}}>Privacy Policy</a>
<a className="hover:text-neutral-600 font-sans" href="#" style={{}}>Terms of Service</a>
</div>
</div>
</div>
</footer>
</main>

    </>
  );
}
