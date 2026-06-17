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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
850: '#1f1f22',
950: '#09090b',
}
}
}
}
}


document.write(new Date().getFullYear())


        const themeToggleBtn = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;
        
        // Check local storage or system preference on load
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }

        // Toggle action
        themeToggleBtn.addEventListener('click', () => {
            if (htmlElement.classList.contains('dark')) {
                htmlElement.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                htmlElement.classList.add('dark');
                localStorage.theme = 'dark';
            }
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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg tracking-tight font-semibold flex items-center gap-2 hover:opacity-80 transition-opacity" href="#">
<span className="bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 w-8 h-8 flex items-center justify-center rounded-md text-sm font-bold tracking-tighter">MR</span>
<span className="hidden sm:inline-block">Manu R.</span>
</a>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-500 dark:text-zinc-400">
<a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#skills">Skills</a>
<a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#projects">Projects</a>
<a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#experience">Experience</a>
<a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#contact">Contact</a>
</div>

<button aria-label="Toggle Dark Mode" className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 transition-colors" id="theme-toggle">
<span className="iconify block dark:hidden" data-height="18" data-icon="lucide:moon" data-strokeWidth="1.5" data-width="18"></span>
<span className="iconify hidden dark:block" data-height="18" data-icon="lucide:sun" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
</div>
</nav>
<main className="max-w-5xl mx-auto px-6 pt-32 pb-20">

<section className="fade-in mb-24 md:mb-32" id="about">
<div className="flex flex-col-reverse md:flex-row gap-12 items-start md:items-center">
<div className="flex-1 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-xs font-medium text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                        Open to Opportunities
                    </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-zinc-900 dark:text-white leading-tight">
                        Driving organic growth through data-driven strategy.
                    </h1>
<p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl">
                        Results-driven Digital Marketing Analyst with 7 years of combined experience in SEO and digital marketing. Proven ability to drive organic growth, improve keyword rankings, and lead cross-functional teams in B2B SaaS and freelance environments.
                    </p>
<div className="flex flex-wrap gap-4 pt-2 text-sm text-zinc-500 dark:text-zinc-400">
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:map-pin" data-strokeWidth="1.5"></span>
                            Bangalore, Karnataka
                        </div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:mail" data-strokeWidth="1.5"></span>
<a className="hover:underline hover:text-zinc-900 dark:hover:text-white transition-colors" href="mailto:manu.nayyar.r@gmail.com">manu.nayyar.r@gmail.com</a>
</div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:phone" data-strokeWidth="1.5"></span>
                            8072100323
                        </div>
</div>
<div className="flex gap-4 pt-4">
<a className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors" href="#contact">
                            Get in touch
                        </a>
<a aria-label="LinkedIn" className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors" href="https://linkedin.com" target="_blank">
<span className="iconify text-zinc-600 dark:text-zinc-400" data-icon="lucide:linkedin" data-width="18"></span>
</a>
</div>
</div>

<div className="w-full md:w-1/3 flex justify-center md:justify-end">
<div className="relative w-40 h-40 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center overflow-hidden">
<span className="iconify text-zinc-300 dark:text-zinc-700 w-20 h-20 md:w-32 md:h-32" data-icon="lucide:bar-chart-2" data-strokeWidth="1"></span>
<div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent dark:from-black/10"></div>
</div>
</div>
</div>
</section>

<section className="fade-in delay-100 mb-24 grid grid-cols-2 md:grid-cols-4 gap-4 border-y border-zinc-100 dark:border-zinc-900 py-8">
<div className="space-y-1">
<p className="text-3xl font-semibold tracking-tight">70%</p>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Increase in Organic Traffic</p>
</div>
<div className="space-y-1">
<p className="text-3xl font-semibold tracking-tight">25%</p>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Reduction in Ad Spend</p>
</div>
<div className="space-y-1">
<p className="text-3xl font-semibold tracking-tight">30+</p>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Clients Managed</p>
</div>
<div className="space-y-1">
<p className="text-3xl font-semibold tracking-tight">7yrs</p>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Combined Experience</p>
</div>
</section>

<section className="fade-in delay-100 mb-24 scroll-mt-24" id="skills">
<div className="mb-8">
<h2 className="text-2xl font-semibold tracking-tight mb-2">Technical Expertise</h2>
<p className="text-zinc-500 dark:text-zinc-400">Tools and methodologies utilized to drive marketing success.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="flex items-center gap-3 p-3 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-default group">
<span className="iconify text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" data-icon="lucide:search" data-width="20"></span>
<span className="text-sm font-medium">SEO Strategy</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-default group">
<span className="iconify text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" data-icon="lucide:bar-chart" data-width="20"></span>
<span className="text-sm font-medium">Google Analytics</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-default group">
<span className="iconify text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" data-icon="lucide:key" data-width="20"></span>
<span className="text-sm font-medium">Keyword Research</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-default group">
<span className="iconify text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" data-icon="lucide:pen-tool" data-width="20"></span>
<span className="text-sm font-medium">Content Marketing</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-default group">
<span className="iconify text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" data-icon="lucide:database" data-width="20"></span>
<span className="text-sm font-medium">SEMrush / Ahrefs</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-default group">
<span className="iconify text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" data-icon="lucide:globe" data-width="20"></span>
<span className="text-sm font-medium">On/Off-page SEO</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-default group">
<span className="iconify text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" data-icon="lucide:briefcase" data-width="20"></span>
<span className="text-sm font-medium">B2B SaaS Marketing</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-default group">
<span className="iconify text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" data-icon="lucide:users" data-width="20"></span>
<span className="text-sm font-medium">Team Leadership</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-default group">
<span className="iconify text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" data-icon="lucide:layout" data-width="20"></span>
<span className="text-sm font-medium">WordPress</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-default group">
<span className="iconify text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" data-icon="lucide:trending-up" data-width="20"></span>
<span className="text-sm font-medium">Conversion Opt.</span>
</div>

<div className="flex items-center gap-3 p-3 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-default group">
<span className="iconify text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" data-icon="lucide:globe-2" data-width="20"></span>
<span className="text-sm font-medium">16+ WP Sites Built &amp; Managed</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-default group">
<span className="iconify text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" data-icon="lucide:workflow" data-width="20"></span>
<span className="text-sm font-medium">Automation (n8n / Make)</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-default group">
<span className="iconify text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" data-icon="lucide:sparkles" data-width="20"></span>
<span className="text-sm font-medium">AI &amp; LLM Workflows</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-default group">
<span className="iconify text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" data-icon="lucide:radar" data-width="20"></span>
<span className="text-sm font-medium">AEO (Answer Engine Opt.)</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-default group">
<span className="iconify text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" data-icon="lucide:map" data-width="20"></span>
<span className="text-sm font-medium">GEO / Local SEO</span>
</div>
</div>
</section>

<section className="fade-in delay-200 mb-24 scroll-mt-24" id="projects">
<div className="mb-8 flex items-end justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight mb-2">Selected Real‑world Projects</h2>
<p className="text-zinc-500 dark:text-zinc-400">A snapshot of the WordPress builds, automation and SEO work I actively manage.</p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">

<article className="p-6 rounded-lg border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">B2B SaaS Marketing Site</h3>
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-200/70 dark:border-emerald-800/70 px-2 py-0.5 text-[0.7rem] font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50/60 dark:bg-emerald-900/20">
<span className="iconify" data-icon="lucide:globe-2" data-strokeWidth="1.5" data-width="14"></span>
                            WordPress
                        </span>
</div>
<p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">
                        Designed, built and now manage a conversion‑focused WordPress site for a B2B SaaS product, including landing pages, blogs and resource center.
                    </p>
<ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
<li className="flex gap-2">
<span className="iconify mt-[2px] text-indigo-500" data-icon="lucide:check" data-width="14"></span>
<span>End‑to‑end setup (hosting, theme, performance, security) with ongoing maintenance.</span>
</li>
<li className="flex gap-2">
<span className="iconify mt-[2px] text-indigo-500" data-icon="lucide:trending-up" data-width="14"></span>
<span>70%+ organic traffic growth via technical SEO, topic clusters and AEO‑optimized content.</span>
</li>
</ul>
</article>

<article className="p-6 rounded-lg border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Lead Capture &amp; Reporting Automation</h3>
<span className="inline-flex items-center gap-1 rounded-full border border-sky-200/70 dark:border-sky-800/70 px-2 py-0.5 text-[0.7rem] font-medium text-sky-700 dark:text-sky-300 bg-sky-50/60 dark:bg-sky-900/20">
<span className="iconify" data-icon="lucide:workflow" data-strokeWidth="1.5" data-width="14"></span>
                            n8n / Make
                        </span>
</div>
<p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">
                        Built an automation pipeline that connects WordPress forms, CRM and reporting dashboards to cut manual work and response time.
                    </p>
<ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
<li className="flex gap-2">
<span className="iconify mt-[2px] text-indigo-500" data-icon="lucide:check" data-width="14"></span>
<span>Used n8n / Make to route new leads into CRM, notify sales and append UTM &amp; geo data.</span>
</li>
<li className="flex gap-2">
<span className="iconify mt-[2px] text-indigo-500" data-icon="lucide:clock-3" data-width="14"></span>
<span>Reduced manual reporting time by more than 60% with automated weekly summaries.</span>
</li>
</ul>
</article>

<article className="p-6 rounded-lg border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">AI‑Assisted Content &amp; AEO</h3>
<span className="inline-flex items-center gap-1 rounded-full border border-violet-200/70 dark:border-violet-800/70 px-2 py-0.5 text-[0.7rem] font-medium text-violet-700 dark:text-violet-300 bg-violet-50/60 dark:bg-violet-900/20">
<span className="iconify" data-icon="lucide:sparkles" data-strokeWidth="1.5" data-width="14"></span>
                            AI / LLM
                        </span>
</div>
<p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">
                        Implemented AI‑driven content workflows focused on Answer Engine Optimization and rich‑result eligibility across multiple blogs.
                    </p>
<ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
<li className="flex gap-2">
<span className="iconify mt-[2px] text-indigo-500" data-icon="lucide:check" data-width="14"></span>
<span>Structured content to align with LLM answer patterns (FAQ, how‑to, entity‑based outlines).</span>
</li>
<li className="flex gap-2">
<span className="iconify mt-[2px] text-indigo-500" data-icon="lucide:target" data-width="14"></span>
<span>Improved featured snippet and “People also ask” visibility for targeted GEO markets.</span>
</li>
</ul>
</article>

<article className="p-6 rounded-lg border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Local Business Visibility Boost</h3>
<span className="inline-flex items-center gap-1 rounded-full border border-amber-200/70 dark:border-amber-800/70 px-2 py-0.5 text-[0.7rem] font-medium text-amber-700 dark:text-amber-300 bg-amber-50/60 dark:bg-amber-900/20">
<span className="iconify" data-icon="lucide:map-pin" data-strokeWidth="1.5" data-width="14"></span>
                            GEO / Local
                        </span>
</div>
<p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">
                        Managed WordPress and local SEO for service businesses targeting specific cities and regions.
                    </p>
<ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
<li className="flex gap-2">
<span className="iconify mt-[2px] text-indigo-500" data-icon="lucide:check" data-width="14"></span>
<span>Optimized Google Business Profiles, local landing pages and NAP consistency.</span>
</li>
<li className="flex gap-2">
<span className="iconify mt-[2px] text-indigo-500" data-icon="lucide:trending-up" data-width="14"></span>
<span>Increased local search impressions and calls from “near me” queries across multiple locations.</span>
</li>
</ul>
</article>
</div>
</section>

<section className="fade-in delay-200 mb-24 scroll-mt-24" id="experience">
<div className="mb-8 flex items-end justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight mb-2">Professional Experience</h2>
<p className="text-zinc-500 dark:text-zinc-400">A timeline of my career in digital marketing.</p>
</div>
</div>
<div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-200 before:to-transparent dark:before:via-zinc-800">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

<div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
<span className="iconify text-zinc-600 dark:text-zinc-300" data-icon="lucide:building-2" data-strokeWidth="1.5" data-width="18"></span>
</div>

<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-lg border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 bg-white dark:bg-zinc-900/30 transition-all shadow-sm">
<div className="flex flex-col mb-4">
<span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">March 2023 – Present</span>
<h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Digital Marketing Analyst</h3>
<span className="text-sm text-zinc-500 dark:text-zinc-400">Smart Food Safe, Bangalore</span>
</div>
<ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300 list-none">
<li className="flex gap-2 items-start">
<span className="iconify mt-1 text-indigo-500 shrink-0" data-icon="lucide:check-circle-2" data-width="14"></span>
<span>Spearheaded SEO strategy, achieving a <strong className="font-medium text-zinc-900 dark:text-white">70% increase in organic traffic</strong> within 10 months.</span>
</li>
<li className="flex gap-2 items-start">
<span className="iconify mt-1 text-indigo-500 shrink-0" data-icon="lucide:check-circle-2" data-width="14"></span>
<span>Managed and mentored a cross-functional team of 7 (writers, designers, analysts) to streamline workflows.</span>
</li>
<li className="flex gap-2 items-start">
<span className="iconify mt-1 text-indigo-500 shrink-0" data-icon="lucide:check-circle-2" data-width="14"></span>
<span>Reduced paid ad spend by 25% through landing page optimization and better organic lead capture.</span>
</li>
<li className="flex gap-2 items-start">
<span className="iconify mt-1 text-indigo-500 shrink-0" data-icon="lucide:check-circle-2" data-width="14"></span>
<span>Conducted B2B SaaS competitor analysis to refine product positioning.</span>
</li>
</ul>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">

<div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
<span className="iconify text-zinc-600 dark:text-zinc-300" data-icon="lucide:laptop" data-strokeWidth="1.5" data-width="18"></span>
</div>

<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-lg border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 bg-white dark:bg-zinc-900/30 transition-all shadow-sm">
<div className="flex flex-col mb-4">
<span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">2018 – 2023</span>
<h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Freelance SEO Consultant</h3>
<span className="text-sm text-zinc-500 dark:text-zinc-400">Remote</span>
</div>
<ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300 list-none">
<li className="flex gap-2 items-start">
<span className="iconify mt-1 text-zinc-400 shrink-0" data-icon="lucide:arrow-right" data-width="14"></span>
<span>Delivered on-page and off-page SEO strategies for 30+ clients (e-commerce, tech, service-based).</span>
</li>
<li className="flex gap-2 items-start">
<span className="iconify mt-1 text-zinc-400 shrink-0" data-icon="lucide:arrow-right" data-width="14"></span>
<span>Achieved first-page Google rankings for multiple high-competition keywords.</span>
</li>
<li className="flex gap-2 items-start">
<span className="iconify mt-1 text-zinc-400 shrink-0" data-icon="lucide:arrow-right" data-width="14"></span>
<span>Developed content strategies increasing average session duration by 35%.</span>
</li>
<li className="flex gap-2 items-start">
<span className="iconify mt-1 text-zinc-400 shrink-0" data-icon="lucide:arrow-right" data-width="14"></span>
<span>Built and optimized WordPress websites focusing on Core Web Vitals and SEO.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="fade-in delay-300 mb-24" id="education">
<h2 className="text-2xl font-semibold tracking-tight mb-8">Education</h2>
<div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center shrink-0">
<span className="iconify text-zinc-600 dark:text-zinc-400" data-icon="lucide:graduation-cap" data-strokeWidth="1.5" data-width="24"></span>
</div>
<div>
<h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Bachelor of Computer Applications (BCA)</h3>
<p className="text-sm text-zinc-500">Manipal University, Jaipur</p>
</div>
</div>
<div className="text-sm font-medium px-3 py-1 bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded self-start md:self-center">
                    Graduation: 2025
                </div>
</div>
</section>

<section className="fade-in delay-300 scroll-mt-24" id="contact">
<div className="grid md:grid-cols-2 gap-12">
<div>
<h2 className="text-2xl font-semibold tracking-tight mb-4">Let's collaborate</h2>
<p className="text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
<div className="space-y-4">
<a className="flex items-center gap-4 p-4 rounded-lg border border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors" href="mailto:manu.nayyar.r@gmail.com">
<span className="iconify text-zinc-400" data-icon="lucide:mail" data-width="20"></span>
<div>
<p className="text-xs font-medium text-zinc-500">Email me at</p>
<p className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">manu.nayyar.r@gmail.com</p>
</div>
</a>
<a className="flex items-center gap-4 p-4 rounded-lg border border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors" href="tel:+918072100323">
<span className="iconify text-zinc-400" data-icon="lucide:phone" data-width="20"></span>
<div>
<p className="text-xs font-medium text-zinc-500">Call me at</p>
<p className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">+91 8072100323</p>
</div>
</a>
</div>
<div className="flex gap-4 mt-8">
<a aria-label="X / Twitter" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20"></span>
</a>
<a aria-label="LinkedIn" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="20"></span>
</a>
<a aria-label="Instagram" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="20"></span>
</a>
</div>
</div>

<div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Thank you for reaching out!');">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide" htmlFor="first-name">First Name</label>
<input className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition-shadow" id="first-name" placeholder="Jane" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide" htmlFor="last-name">Last Name</label>
<input className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition-shadow" id="last-name" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide" htmlFor="email">Email</label>
<input className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition-shadow" id="email" placeholder="jane@example.com" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide" htmlFor="message">Message</label>
<textarea className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition-shadow resize-none" id="message" placeholder="Tell me about your project..." required="" rows="4"></textarea>
</div>
<button className="w-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium text-sm py-2.5 rounded-md hover:opacity-90 transition-opacity" type="submit">
                            Send Message
                        </button>
</form>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950">
<div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-zinc-500">
                ©  Manu R. All rights reserved.
            </p>
<p className="text-xs text-zinc-400">
                Designed &amp; Built with precision.
            </p>
</div>
</footer>



    </>
  );
}
