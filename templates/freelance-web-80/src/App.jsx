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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-white flex items-center justify-center text-zinc-950 font-semibold tracking-tighter text-sm group-hover:bg-zinc-200 transition-colors">
                    AS
                </div>
<span className="text-sm font-medium text-zinc-100 tracking-tight">Atlas Studio</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#work">Selected Work</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#process">Process</a>
</div>

<a className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-medium text-white transition-all duration-300 group" href="#contact">
                Start Project
                <span className="iconify ml-2 group-hover:translate-x-0.5 transition-transform" data-height="14" data-icon="lucide:arrow-right" data-width="14"></span>
</a>

<button className="md:hidden text-zinc-400 hover:text-white">
<span className="iconify" data-height="20" data-icon="lucide:menu" data-width="20"></span>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="absolute inset-0 bg-grid -z-10 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/10 rounded-full blur-[120px] -z-10"></div>
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">Available for new projects</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 mb-6 leading-[1.1]">
                Crafting digital experiences<br className="hidden md:block"/> that scale.
            </h1>
<p className="text-lg text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed font-light">
                I help startups and visionary companies build high-performance websites. Focused on minimalist design, speed, and conversion.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-6 py-3 rounded-md bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="#contact">
                    Book a Call
                    <span className="iconify" data-height="16" data-icon="lucide:calendar" data-width="16"></span>
</a>
<a className="w-full sm:w-auto px-6 py-3 rounded-md border border-white/10 bg-zinc-900/50 text-white text-sm font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2" href="#work">
                    View Portfolio
                </a>
</div>
</div>
</section>

<div className="w-full border-y border-white/5 bg-zinc-900/20 py-8 overflow-hidden">
<div className="max-w-6xl mx-auto px-6 flex justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="iconify" data-height="24" data-icon="lucide:framer" data-width="24"></span>
<span className="iconify" data-height="24" data-icon="lucide:figma" data-width="24"></span>
<span className="iconify" data-height="24" data-icon="lucide:layers" data-width="24"></span>
<span className="iconify" data-height="24" data-icon="lucide:code-2" data-width="24"></span>
<span className="iconify" data-height="24" data-icon="lucide:zap" data-width="24"></span>
<span className="iconify" data-height="24" data-icon="lucide:globe" data-width="24"></span>
</div>
</div>

<section className="py-24 px-6 relative" id="services">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="text-2xl font-medium text-white tracking-tight mb-4">Expertise</h2>
<div className="h-px w-12 bg-zinc-700"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-white/10 transition-all duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-lg bg-zinc-800/50 flex items-center justify-center border border-white/5 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-zinc-100" data-height="24" data-icon="lucide:layout-template" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Web Design</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Visual storytelling through clean interfaces. I design layouts that align with your brand identity and user goals.
                    </p>
</div>

<div className="group p-8 rounded-xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-white/10 transition-all duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-lg bg-zinc-800/50 flex items-center justify-center border border-white/5 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-zinc-100" data-height="24" data-icon="lucide:code" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Development</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Responsive, semantic, and maintainable code. Building robust front-ends using modern frameworks.
                    </p>
</div>

<div className="group p-8 rounded-xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-white/10 transition-all duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-lg bg-zinc-800/50 flex items-center justify-center border border-white/5 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-zinc-100" data-height="24" data-icon="lucide:rocket" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Performance</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Optimization for speed and SEO. Ensuring your site loads instantly and ranks well on search engines.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-900/20 border-y border-white/5" id="work">
<div className="max-w-6xl mx-auto">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-2">Selected Work</h2>
<p className="text-sm text-zinc-500">Recent projects shipped to production.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">
                    View all projects
                    <span className="iconify" data-height="14" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="aspect-video w-full bg-zinc-800 rounded-lg border border-white/5 overflow-hidden relative mb-4">
<div className="absolute inset-0 bg-zinc-900 flex items-center justify-center group-hover:bg-zinc-800 transition-colors duration-500">

<div className="w-3/4 h-3/4 bg-zinc-950 rounded border border-white/10 shadow-2xl flex flex-col p-4 opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500">
<div className="flex gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="w-full h-32 bg-gradient-to-b from-indigo-500/10 to-transparent rounded mb-3"></div>
<div className="space-y-2">
<div className="w-1/2 h-2 bg-zinc-800 rounded"></div>
<div className="w-3/4 h-2 bg-zinc-800 rounded"></div>
</div>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-zinc-100">Fintech Dashboard</h3>
<p className="text-xs text-zinc-500 mt-1">SaaS, React, Tailwind</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="iconify text-zinc-300" data-height="16" data-icon="lucide:arrow-up-right" data-width="16"></span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-video w-full bg-zinc-800 rounded-lg border border-white/5 overflow-hidden relative mb-4">
<div className="absolute inset-0 bg-zinc-900 flex items-center justify-center group-hover:bg-zinc-800 transition-colors duration-500">

<div className="w-3/4 h-3/4 bg-zinc-950 rounded border border-white/10 shadow-2xl flex flex-col p-4 opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500">
<div className="flex justify-between mb-6">
<div className="w-8 h-2 bg-zinc-800 rounded"></div>
<div className="flex gap-2">
<div className="w-4 h-2 bg-zinc-800 rounded"></div>
<div className="w-4 h-2 bg-zinc-800 rounded"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 h-full">
<div className="bg-gradient-to-br from-emerald-500/10 to-transparent rounded h-full"></div>
<div className="space-y-2">
<div className="w-full h-2 bg-zinc-800 rounded"></div>
<div className="w-2/3 h-2 bg-zinc-800 rounded"></div>
<div className="w-full h-20 bg-zinc-800/50 rounded mt-2"></div>
</div>
</div>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-zinc-100">E-commerce Platform</h3>
<p className="text-xs text-zinc-500 mt-1">Shopify, Liquid, UI Design</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="iconify text-zinc-300" data-height="16" data-icon="lucide:arrow-up-right" data-width="16"></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-4xl mx-auto">
<h2 className="text-2xl font-medium text-white tracking-tight mb-12 text-center">Engagement Models</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="p-8 rounded-2xl border border-white/5 bg-zinc-900/20 backdrop-blur-sm flex flex-col">
<div className="mb-6">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 text-zinc-100">
<span className="iconify" data-height="20" data-icon="lucide:clock" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white">Hourly / Retainer</h3>
<p className="text-sm text-zinc-400 mt-2">Perfect for ongoing maintenance, small updates, or consulting.</p>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-xs text-zinc-300">
<span className="iconify text-zinc-500" data-icon="lucide:check" data-width="14"></span> Flexible hours
                        </li>
<li className="flex items-center gap-3 text-xs text-zinc-300">
<span className="iconify text-zinc-500" data-icon="lucide:check" data-width="14"></span> Monthly reporting
                        </li>
<li className="flex items-center gap-3 text-xs text-zinc-300">
<span className="iconify text-zinc-500" data-icon="lucide:check" data-width="14"></span> Direct communication
                        </li>
</ul>
<a className="w-full py-2.5 rounded-lg border border-white/10 hover:bg-white/5 text-xs font-medium text-white text-center transition-colors" href="#contact">
                        Inquire Rate
                    </a>
</div>

<div className="relative p-8 rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-sm flex flex-col shine overflow-hidden">
<div className="absolute top-0 right-0 p-4">
<span className="px-2 py-1 rounded text-[10px] font-semibold bg-white text-zinc-950 uppercase tracking-wide">Popular</span>
</div>
<div className="mb-6">
<div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mb-4 text-zinc-950">
<span className="iconify" data-height="20" data-icon="lucide:briefcase" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white">Project Basis</h3>
<p className="text-sm text-zinc-400 mt-2">End-to-end development for landing pages, web apps, or ecommerce.</p>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-xs text-zinc-300">
<span className="iconify text-white" data-icon="lucide:check" data-width="14"></span> Fixed scope &amp; timeline
                        </li>
<li className="flex items-center gap-3 text-xs text-zinc-300">
<span className="iconify text-white" data-icon="lucide:check" data-width="14"></span> Full design implementation
                        </li>
<li className="flex items-center gap-3 text-xs text-zinc-300">
<span className="iconify text-white" data-icon="lucide:check" data-width="14"></span> 30 days post-launch support
                        </li>
</ul>
<a className="w-full py-2.5 rounded-lg bg-white hover:bg-zinc-200 text-xs font-medium text-zinc-950 text-center transition-colors" href="#contact">
                        Get a Quote
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-2xl mx-auto">
<h2 className="text-xl font-medium text-white tracking-tight mb-8">Common Questions</h2>
<div className="space-y-2">

<details className="group border border-white/5 bg-zinc-900/20 rounded-lg">
<summary className="flex justify-between items-center cursor-pointer p-4 list-none text-sm font-medium text-zinc-200">
<span>What is your typical turnaround time?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<div className="text-xs text-zinc-400 p-4 pt-0 leading-relaxed">
                    For a standard 5-page landing site, it typically takes 2-3 weeks. Larger projects depend on complexity and are scoped accordingly.
                </div>
</details>

<details className="group border border-white/5 bg-zinc-900/20 rounded-lg">
<summary className="flex justify-between items-center cursor-pointer p-4 list-none text-sm font-medium text-zinc-200">
<span>Do you provide hosting?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<div className="text-xs text-zinc-400 p-4 pt-0 leading-relaxed">
                    I don't host websites directly, but I will help you set up your hosting account (e.g., Vercel, Netlify) and configure the domain so you have full ownership.
                </div>
</details>

<details className="group border border-white/5 bg-zinc-900/20 rounded-lg">
<summary className="flex justify-between items-center cursor-pointer p-4 list-none text-sm font-medium text-zinc-200">
<span>What if I need changes later?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<div className="text-xs text-zinc-400 p-4 pt-0 leading-relaxed">
                    I offer hourly retainers for post-launch updates, or we can scope a new phase of work if significant changes are required.
                </div>
</details>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 bg-zinc-950" id="contact">
<div className="max-w-xl mx-auto text-center">
<div className="w-12 h-12 rounded-full bg-gradient-to-tr from-white to-zinc-500 mx-auto mb-6 flex items-center justify-center">
<span className="iconify text-zinc-950" data-height="20" data-icon="lucide:mail" data-width="20"></span>
</div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Ready to build?</h2>
<p className="text-sm text-zinc-400 mb-8">
                Tell me about your project, timeline, and budget. <br/>I usually respond within 24 hours.
            </p>
<form className="space-y-4 text-left">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5 uppercase tracking-wide" htmlFor="email">Email</label>
<input className="w-full bg-zinc-900 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/30 placeholder:text-zinc-600 transition-all" id="email" placeholder="hello@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5 uppercase tracking-wide" htmlFor="message">Project Details</label>
<textarea className="w-full bg-zinc-900 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/30 placeholder:text-zinc-600 transition-all" id="message" placeholder="I need a website for..." rows="4"></textarea>
</div>
<button className="w-full py-3 rounded-md bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" type="button">
                    Send Message
                    <span className="iconify" data-height="14" data-icon="lucide:send" data-width="14"></span>
</button>
</form>
</div>
</section>

<footer className="border-t border-white/5 bg-zinc-950 py-12 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-zinc-800 flex items-center justify-center text-zinc-400 text-[10px] font-bold">
                    AS
                </div>
<span className="text-xs text-zinc-500">© 2024 Atlas Studio. All rights reserved.</span>
</div>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-height="16" data-icon="lucide:twitter" data-width="16"></span>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-height="16" data-icon="lucide:github" data-width="16"></span>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-height="16" data-icon="lucide:linkedin" data-width="16"></span>
</a>
</div>
</div>
</footer>

    </>
  );
}
