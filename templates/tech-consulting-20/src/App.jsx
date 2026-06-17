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
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="relative w-8 h-8">
<svg className="w-full h-full text-blue-500" fill="none" viewbox="0 0 24 24">
<path d="M12 2L2 22H22L12 2Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M12 8L7 18H17L12 8Z" fill="currentColor" fillOpacity="0.2"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-white text-lg font-medium tracking-tight leading-none">LA</span>
<span className="text-white text-lg font-medium tracking-tight leading-none">MINDS</span>
</div>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-slate-400 hover:text-white transition-colors" href="#">Home</a>
<a className="text-sm font-normal text-slate-400 hover:text-white transition-colors" href="#">Services</a>
<a className="text-sm font-medium text-white" href="#">Portfolio</a>
<a className="text-sm font-normal text-slate-400 hover:text-white transition-colors" href="#">About</a>
</div>

<a className="hidden md:flex items-center gap-2 bg-white text-[#050B14] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-200 transition-all" href="#">
                Get Started
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<main className="pt-32 pb-20">

<div className="max-w-4xl mx-auto text-center px-6 mb-20">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium tracking-wide uppercase mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                Success Stories
            </span>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                Engineered for <br/>
<span className="text-gradient">Maximum Impact</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                Explore how we transform complex business challenges into scalable, high-performance software solutions.
            </p>
</div>

<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<article className="group relative bg-[#090E17] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 flex flex-col overflow-hidden">

<div className="relative h-64 w-full overflow-hidden border-b border-white/5">
<img alt="Youfit Gyms" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out opacity-60 group-hover:opacity-100" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#090E17] via-transparent to-transparent"></div>

<div className="absolute top-4 left-4 flex gap-2">
<span className="backdrop-blur-md bg-black/50 border border-white/10 px-3 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider text-slate-300">React Native</span>
<span className="backdrop-blur-md bg-black/50 border border-white/10 px-3 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider text-slate-300">Node.js</span>
</div>
</div>

<div className="p-8 flex flex-col flex-grow relative z-10">
<div className="flex items-start justify-between mb-4">
<div>
<h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-blue-400 transition-colors">YouFit Fitness</h3>
<p className="text-xs text-slate-500 font-mono mt-1">FITNESS &amp; WELLNESS</p>
</div>
<div className="text-right">
<div className="text-2xl font-semibold text-white tracking-tight">+240%</div>
<div className="text-[10px] text-slate-500 uppercase tracking-wide">User Growth</div>
</div>
</div>
<p className="text-sm text-slate-400 leading-relaxed mb-8 border-l-2 border-white/10 pl-4">
                            A comprehensive digital ecosystem managing class bookings, membership portals, and location services across 100+ locations nationwide.
                        </p>

<div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:dumbbell-large-linear"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 -ml-2 border border-[#090E17]">
<iconify-icon icon="solar:smartphone-linear"></iconify-icon>
</div>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors group/btn" href="#">
                                View Case Study
                                <iconify-icon className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</article>

<article className="group relative bg-[#090E17] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 flex flex-col overflow-hidden">
<div className="relative h-64 w-full overflow-hidden border-b border-white/5">
<img alt="Pregistry" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out opacity-60 group-hover:opacity-100" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#090E17] via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 flex gap-2">
<span className="backdrop-blur-md bg-black/50 border border-white/10 px-3 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider text-slate-300">Python</span>
<span className="backdrop-blur-md bg-black/50 border border-white/10 px-3 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider text-slate-300">AWS</span>
</div>
</div>
<div className="p-8 flex flex-col flex-grow relative z-10">
<div className="flex items-start justify-between mb-4">
<div>
<h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-blue-400 transition-colors">Pregistry</h3>
<p className="text-xs text-slate-500 font-mono mt-1">HEALTHCARE &amp; RESEARCH</p>
</div>
<div className="text-right">
<div className="text-2xl font-semibold text-white tracking-tight">HIPAA</div>
<div className="text-[10px] text-slate-500 uppercase tracking-wide">Compliant</div>
</div>
</div>
<p className="text-sm text-slate-400 leading-relaxed mb-8 border-l-2 border-white/10 pl-4">
                            Secure global data registry platform supporting critical COVID-19 pregnancy research with advanced data encryption and real-time reporting.
                        </p>
<div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 -ml-2 border border-[#090E17]">
<iconify-icon icon="solar:database-linear"></iconify-icon>
</div>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors group/btn" href="#">
                                View Case Study
                                <iconify-icon className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</article>

<article className="group relative bg-[#090E17] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 flex flex-col overflow-hidden">
<div className="relative h-64 w-full overflow-hidden border-b border-white/5">
<img alt="Zone Petroleum" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out opacity-60 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#090E17] via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 flex gap-2">
<span className="backdrop-blur-md bg-black/50 border border-white/10 px-3 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider text-slate-300">Vue.js</span>
<span className="backdrop-blur-md bg-black/50 border border-white/10 px-3 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider text-slate-300">Laravel</span>
</div>
</div>
<div className="p-8 flex flex-col flex-grow relative z-10">
<div className="flex items-start justify-between mb-4">
<div>
<h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-blue-400 transition-colors">Zone Petroleum</h3>
<p className="text-xs text-slate-500 font-mono mt-1">LOGISTICS &amp; ENERGY</p>
</div>
<div className="text-right">
<div className="text-2xl font-semibold text-white tracking-tight">-40%</div>
<div className="text-[10px] text-slate-500 uppercase tracking-wide">Op. Costs</div>
</div>
</div>
<p className="text-sm text-slate-400 leading-relaxed mb-8 border-l-2 border-white/10 pl-4">
                            Automated logistics dashboard featuring real-time fuel tracking, dynamic quoting engines, and fleet management integration.
                        </p>
<div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:routing-2-linear"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 -ml-2 border border-[#090E17]">
<iconify-icon icon="solar:chart-square-linear"></iconify-icon>
</div>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors group/btn" href="#">
                                View Case Study
                                <iconify-icon className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</article>

<article className="group relative bg-[#090E17] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 flex flex-col overflow-hidden">
<div className="relative h-64 w-full overflow-hidden border-b border-white/5">
<img alt="EnergyFlow" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out opacity-60 group-hover:opacity-100" src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#090E17] via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 flex gap-2">
<span className="backdrop-blur-md bg-black/50 border border-white/10 px-3 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider text-slate-300">IoT</span>
<span className="backdrop-blur-md bg-black/50 border border-white/10 px-3 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider text-slate-300">Golang</span>
</div>
</div>
<div className="p-8 flex flex-col flex-grow relative z-10">
<div className="flex items-start justify-between mb-4">
<div>
<h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-blue-400 transition-colors">EnergyFlow</h3>
<p className="text-xs text-slate-500 font-mono mt-1">CLEANTECH IOT</p>
</div>
<div className="text-right">
<div className="text-2xl font-semibold text-white tracking-tight">10k+</div>
<div className="text-[10px] text-slate-500 uppercase tracking-wide">Devices</div>
</div>
</div>
<p className="text-sm text-slate-400 leading-relaxed mb-8 border-l-2 border-white/10 pl-4">
                            High-throughput IoT infrastructure monitoring renewable energy grids, optimizing distribution via machine learning algorithms.
                        </p>
<div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:bolt-linear"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 -ml-2 border border-[#090E17]">
<iconify-icon icon="solar:server-square-linear"></iconify-icon>
</div>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors group/btn" href="#">
                                View Case Study
                                <iconify-icon className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</article>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-32">
<div className="bg-[#090E17] rounded-3xl border border-white/5 p-8 md:p-12 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
<div className="absolute top-0 right-0 w-2/3 h-full bg-blue-900/10 blur-3xl rounded-full pointer-events-none"></div>
<div className="flex-1 relative z-10">
<div className="flex items-center gap-2 mb-6">
<div className="p-1.5 rounded bg-blue-500/10 border border-blue-500/20">
<iconify-icon className="text-blue-400" icon="solar:star-linear"></iconify-icon>
</div>
<span className="text-blue-400 text-xs font-mono tracking-wider uppercase">Featured Transformation</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                        Modernizing Legacy Banking Systems
                    </h2>
<p className="text-lg text-slate-400 leading-relaxed mb-8">
                        We re-architected a Fortune 500 bank's customer portal using a microservice approach, resulting in enhanced security standards and drastically reduced load times.
                    </p>
<div className="grid grid-cols-3 gap-6 border-t border-white/5 pt-8 mb-8">
<div>
<div className="text-2xl font-mono text-white mb-1">3.2s</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Faster Loads</div>
</div>
<div>
<div className="text-2xl font-mono text-white mb-1">120%</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Mobile Traffic</div>
</div>
<div>
<div className="text-2xl font-mono text-white mb-1">99.9%</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Uptime</div>
</div>
</div>
<a className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg text-sm font-medium transition-all shadow-lg shadow-blue-900/20" href="#">
                        Read Full Case Study
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="flex-1 w-full lg:w-auto relative">
<div className="bg-[#02050A] border border-white/10 rounded-xl p-1 shadow-2xl rotate-1">
<div className="bg-[#0C111D] rounded-lg overflow-hidden relative">
<div className="h-6 bg-[#161b26] border-b border-white/5 flex items-center px-4 gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="p-6 relative">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent"></div>
<div className="w-full h-40 bg-gradient-to-r from-blue-900/30 to-slate-800/30 rounded border border-white/5 mb-4 relative overflow-hidden">

<svg className="absolute bottom-0 left-0 w-full h-24 text-blue-500 opacity-50" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 C 20 0 50 0 100 100 Z" fill="url(#grad)"></path>
<defs>
<lineargradient id="grad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: 'rgb(59, 130, 246)', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: 'rgb(59, 130, 246)', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="space-y-3">
<div className="flex gap-3">
<div className="w-1/3 h-2 bg-slate-800 rounded"></div>
<div className="w-1/3 h-2 bg-slate-800 rounded"></div>
</div>
<div className="w-full h-2 bg-slate-800/50 rounded"></div>
<div className="w-3/4 h-2 bg-slate-800/50 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-32 text-center px-6">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-3">Have a vision?</h2>
<h2 className="text-4xl md:text-5xl font-medium text-gradient tracking-tight mb-8">We have the engineering.</h2>
<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Partner with a team that speaks your language. From concept to code, we deliver enterprise-grade solutions.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="px-8 py-3.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition-all flex items-center gap-2 shadow-lg shadow-blue-900/20" href="#">
                    Schedule Technical Consultation
                    <iconify-icon icon="solar:calendar-linear"></iconify-icon>
</a>
<a className="px-8 py-3.5 bg-transparent border border-white/10 text-white rounded-lg font-medium hover:bg-white/5 transition-all" href="#">
                    View Services
                </a>
</div>
</div>
</main>

<footer className="border-t border-white/5 bg-[#02050a] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-12">
<div className="lg:col-span-1">
<div className="flex items-center gap-2 mb-6">
<svg className="w-6 h-6 text-blue-500" fill="none" viewbox="0 0 24 24">
<path d="M12 2L2 22H22L12 2Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M12 8L7 18H17L12 8Z" fill="currentColor" fillOpacity="0.2"></path>
</svg>
<span className="text-white font-medium tracking-tight">LA MINDS</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                    Delivering cutting-edge software solutions. We bridge the gap between complex requirements and intuitive digital experiences.
                </p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="ri:twitter-x-line"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="ri:linkedin-fill"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="ri:instagram-line"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="ri:github-fill"></iconify-icon></a>
</div>
</div>
<div className="lg:col-span-1"></div>
<div className="lg:col-span-1">
<h4 className="text-white font-medium mb-4">Expertise</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-400 transition-colors" href="#">Cloud Architecture</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Enterprise DevOps</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Mobile Engineering</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Data Analytics</a></li>
</ul>
</div>
<div className="lg:col-span-1">
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-400 transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Methodology</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
<p>Copyright © 2016 - 2025 LaMinds. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">SLA</a>
</div>
</div>
</footer>

    </>
  );
}
