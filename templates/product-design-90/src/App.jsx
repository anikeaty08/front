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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-lg font-semibold tracking-tighter text-zinc-900">WYLO</div>
<div className="flex gap-6 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Work</a>
<a className="hover:text-zinc-900 transition-colors" href="#">About</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Contact</a>
</div>
</div>
</nav>
<main className="pt-32 pb-24">

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
                        Transforming Wylo into a Modular, Multilingual Community Platform
                    </h1>
<p className="text-lg text-zinc-500 font-normal leading-relaxed">
                        Re-architecting a rigid forum tool into a scalable ecosystem used by creators, enterprises, and regional communities.
                    </p>
<div className="flex flex-wrap gap-3">
<span className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-700">
<i className="w-3 h-3 mr-2" data-lucide="trending-up" strokeWidth="1.5"></i> +15% Revenue Uplift
                        </span>
<span className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-700">
<i className="w-3 h-3 mr-2" data-lucide="users" strokeWidth="1.5"></i> 42% Drop-off Reduction
                        </span>
<span className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-700">
<i className="w-3 h-3 mr-2" data-lucide="globe" strokeWidth="1.5"></i> 280+ Non-English Communities
                        </span>
<span className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-700">
<i className="w-3 h-3 mr-2" data-lucide="layers" strokeWidth="1.5"></i> 120+ Modular Customers
                        </span>
</div>
<div className="pt-4 border-t border-zinc-100">
<p className="text-xs font-medium text-zinc-400 uppercase tracking-wide">
                            Lead Product Designer • Sole Designer • 2021–2025
                        </p>
</div>
</div>

<div className="relative h-[500px] w-full bg-zinc-50 rounded-2xl border border-zinc-200 overflow-hidden flex items-center justify-center">

<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl mix-blend-multiply"></div>
<div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-100/50 rounded-full blur-3xl mix-blend-multiply"></div>

<div className="relative z-10 w-full max-w-sm bg-white rounded-xl shadow-xl border border-zinc-200 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">

<div className="h-12 border-b border-zinc-100 flex items-center justify-between px-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-amber-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>

<div className="flex items-center gap-2 px-2 py-1 bg-zinc-50 rounded border border-zinc-200">
<span className="text-[10px] font-medium text-zinc-600">English</span>
<i className="w-3 h-3 text-zinc-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>

<div className="p-4 grid grid-cols-2 gap-4">

<div className="space-y-3 col-span-2 sm:col-span-1">
<div className="h-8 w-full bg-zinc-50 rounded border border-zinc-100 flex items-center px-2 gap-2">
<div className="w-4 h-4 bg-zinc-200 rounded-sm"></div>
<div className="w-16 h-2 bg-zinc-200 rounded-full"></div>
</div>
<div className="h-8 w-full bg-blue-50/50 border border-blue-100 rounded flex items-center px-2 gap-2">
<div className="w-4 h-4 bg-blue-400 rounded-sm"></div>
<div className="w-20 h-2 bg-blue-200 rounded-full"></div>
</div>
<div className="h-8 w-full bg-zinc-50 rounded border border-zinc-100 flex items-center px-2 gap-2">
<div className="w-4 h-4 bg-zinc-200 rounded-sm"></div>
<div className="w-12 h-2 bg-zinc-200 rounded-full"></div>
</div>
</div>

<div className="col-span-2 sm:col-span-1 space-y-2">
<div className="h-24 w-full bg-zinc-50 border border-zinc-100 rounded p-2">
<div className="flex justify-between items-center mb-2">
<div className="w-8 h-2 bg-zinc-200 rounded-full"></div>
<div className="w-4 h-4 bg-green-100 rounded-full"></div>
</div>
<div className="space-y-1">
<div className="w-full h-1.5 bg-zinc-100 rounded-full"></div>
<div className="w-2/3 h-1.5 bg-zinc-100 rounded-full"></div>
</div>
</div>
<div className="h-24 w-full bg-zinc-50 border border-zinc-100 rounded p-2 opacity-50"></div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-20 border-t border-zinc-100"></div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-10">Project Summary</h2>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-8 space-y-6">
<p className="text-base text-zinc-600 leading-relaxed">
                        Wylo began as a basic forum tool but struggled to scale due to its rigid architecture and English-only interface. The challenge was to transform it into a flexible platform capable of supporting diverse community types—from cricket fan clubs in India to enterprise learning hubs.
                    </p>
<p className="text-base text-zinc-600 leading-relaxed">
                        I led a strategic redesign to modularize the entire system, enabling customers to pick-and-choose features (Forums, Events, Courses) while introducing deep multilingual support. The result unlocked new regional markets and streamlined the product for enterprise adoption.
                    </p>
</div>

<div className="lg:col-span-4">
<div className="bg-zinc-50 rounded-xl p-6 border border-zinc-200/60">
<div className="space-y-4">
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-1">Role</h4>
<p className="text-sm text-zinc-600">Lead Product Designer</p>
</div>
<hr className="border-zinc-200"/>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-1">Team</h4>
<p className="text-sm text-zinc-600">PM, 6 Engineers, CEO</p>
</div>
<hr className="border-zinc-200"/>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-1">Platforms</h4>
<p className="text-sm text-zinc-600">Web, iOS, Android</p>
</div>
<hr className="border-zinc-200"/>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-1">Key Areas</h4>
<div className="flex flex-wrap gap-2 mt-2">
<span className="text-xs bg-white border border-zinc-200 px-2 py-1 rounded text-zinc-500">UX Strategy</span>
<span className="text-xs bg-white border border-zinc-200 px-2 py-1 rounded text-zinc-500">IA</span>
<span className="text-xs bg-white border border-zinc-200 px-2 py-1 rounded text-zinc-500">Design System</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-20 border-t border-zinc-100"></div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 bg-white border border-zinc-200 rounded-xl hover:shadow-sm transition-shadow">
<div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 text-red-600" data-lucide="alert-circle" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm font-semibold text-zinc-900 mb-2 uppercase tracking-wide">Situation</h3>
<p className="text-sm text-zinc-600 leading-relaxed">
                        Platform was rigid and forum-first. It couldn't scale to meet the diverse needs of different customer segments.
                    </p>
</div>

<div className="p-6 bg-white border border-zinc-200 rounded-xl hover:shadow-sm transition-shadow">
<div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 text-amber-600" data-lucide="target" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm font-semibold text-zinc-900 mb-2 uppercase tracking-wide">Task</h3>
<p className="text-sm text-zinc-600 leading-relaxed">
                        Rebuild Wylo into a modular, multilingual platform capable of serving multiple community types simultaneously.
                    </p>
</div>

<div className="p-6 bg-white border border-zinc-200 rounded-xl hover:shadow-sm transition-shadow">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 text-blue-600" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm font-semibold text-zinc-900 mb-2 uppercase tracking-wide">Action</h3>
<p className="text-sm text-zinc-600 leading-relaxed">
                        Architected a modular system, redesigned onboarding flows, pricing tiers, and multilingual mobile patterns.
                    </p>
</div>

<div className="p-6 bg-white border border-zinc-200 rounded-xl hover:shadow-sm transition-shadow">
<div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 text-green-600" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm font-semibold text-zinc-900 mb-2 uppercase tracking-wide">Result</h3>
<p className="text-sm text-zinc-600 leading-relaxed">
                        Revenue increased, onboarding friction decreased, and unlocked new regional and enterprise markets.
                    </p>
</div>
</div>
<div className="mt-20 border-t border-zinc-100"></div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-10">Why Wylo Needed a Platform Redesign</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h3 className="text-base font-semibold text-zinc-900 mb-6 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-red-500"></span> Problems
                    </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-red-500 shrink-0 mt-0.5" data-lucide="x-circle" strokeWidth="1.5"></i>
<span className="text-sm text-zinc-600">Rigid forum-centric architecture limited use cases.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-red-500 shrink-0 mt-0.5" data-lucide="x-circle" strokeWidth="1.5"></i>
<span className="text-sm text-zinc-600">Different users needed completely different feature sets (noise).</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-red-500 shrink-0 mt-0.5" data-lucide="x-circle" strokeWidth="1.5"></i>
<span className="text-sm text-zinc-600">English-only platform severely limited TAM in India.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-red-500 shrink-0 mt-0.5" data-lucide="x-circle" strokeWidth="1.5"></i>
<span className="text-sm text-zinc-600">Overwhelming onboarding causing high drop-offs.</span>
</li>
</ul>
</div>

<div>
<h3 className="text-base font-semibold text-zinc-900 mb-6 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span> Opportunities
                    </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-green-500 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-sm text-zinc-600">Serve niche markets (cricket fandom, celebrity, education).</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-green-500 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-sm text-zinc-600">Expand into India’s vast regional-language ecosystems.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-green-500 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-sm text-zinc-600">Enable value-based pricing through modularity.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-green-500 shrink-0 mt-0.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-sm text-zinc-600">Reduce engineering cost for client customization.</span>
</li>
</ul>
</div>
</div>

<div className="mt-16 bg-zinc-50 border border-zinc-200 rounded-xl p-8 flex flex-col md:flex-row items-center justify-center gap-8 text-center">
<div className="p-4 bg-white border border-zinc-200 rounded-lg shadow-sm w-48">
<span className="block font-semibold text-zinc-900">Rigid Forum Tool</span>
<span className="text-xs text-zinc-400">One size fits all</span>
</div>
<i className="w-6 h-6 text-zinc-300 hidden md:block" data-lucide="arrow-right" strokeWidth="1.5"></i>
<i className="w-6 h-6 text-zinc-300 md:hidden" data-lucide="arrow-down" strokeWidth="1.5"></i>
<div className="p-4 bg-white border-2 border-dashed border-indigo-200 rounded-lg w-48 bg-indigo-50/30">
<span className="block font-semibold text-indigo-900">Modular Platform</span>
<span className="text-xs text-indigo-600/70">Flexible &amp; Scalable</span>
</div>
</div>
<div className="mt-20 border-t border-zinc-100"></div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-10">Research Insights</h2>
<div className="flex flex-col md:flex-row gap-6 overflow-x-auto hide-scrollbar pb-4">

<div className="min-w-[300px] flex-1 bg-zinc-50 border border-zinc-200 p-6 rounded-xl">
<div className="mb-4">
<i className="w-6 h-6 text-zinc-700" data-lucide="map" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm font-semibold text-zinc-900 mb-2">Competitor Mapping</h3>
<p className="text-xs text-zinc-500 leading-relaxed mb-4">
                        Most competitors were "Forum-first" monoliths. The market lacked a "Lego-like" community builder.
                    </p>

<div className="bg-white border border-zinc-200 p-3 rounded text-[10px] text-zinc-400">
<div className="flex justify-between border-b border-zinc-100 pb-2 mb-2">
<span>Others</span>
<span className="text-zinc-900 font-medium">Rigid</span>
</div>
<div className="flex justify-between">
<span>Wylo</span>
<span className="text-indigo-600 font-medium">Flexible</span>
</div>
</div>
</div>

<div className="min-w-[300px] flex-1 bg-zinc-50 border border-zinc-200 p-6 rounded-xl">
<div className="mb-4">
<i className="w-6 h-6 text-zinc-700" data-lucide="layout" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm font-semibold text-zinc-900 mb-2">User Patterns</h3>
<ul className="text-xs text-zinc-500 space-y-2 list-disc list-inside">
<li>Most communities only use 2-3 specific modules.</li>
<li>Unused features create noise and increase churn.</li>
<li>Strong demand for granular feature visibility.</li>
</ul>
</div>

<div className="min-w-[300px] flex-1 bg-zinc-50 border border-zinc-200 p-6 rounded-xl">
<div className="mb-4">
<i className="w-6 h-6 text-zinc-700" data-lucide="globe-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm font-semibold text-zinc-900 mb-2">Market Insight (India)</h3>
<p className="text-xs text-zinc-500 leading-relaxed mb-3">
                        Linguistic diversity creates isolated micro-communities with huge engagement potential.
                    </p>
<div className="flex gap-2">
<span className="px-2 py-1 bg-white border border-zinc-200 rounded text-[10px]">🏏 Cricket</span>
<span className="px-2 py-1 bg-white border border-zinc-200 rounded text-[10px]">🎬 Celebs</span>
<span className="px-2 py-1 bg-white border border-zinc-200 rounded text-[10px]">📚 Study</span>
</div>
</div>
</div>
<div className="mt-20 border-t border-zinc-100"></div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="mb-12">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Designing Wylo as a Modular Ecosystem</h2>
<p className="text-zinc-500 mt-2">Moving from a monolith to a layered system.</p>
</div>

<div className="w-full bg-zinc-900 rounded-2xl p-8 lg:p-12 mb-16 shadow-2xl overflow-hidden relative">

<div className="relative z-10 max-w-3xl mx-auto space-y-4">

<div className="h-16 w-full bg-zinc-800 rounded-lg border border-zinc-700 flex items-center justify-center relative">
<span className="text-zinc-400 text-sm font-mono uppercase tracking-wider">Control Layer (Permissions, Roles)</span>
<div className="absolute -left-4 top-1/2 w-2 h-2 bg-zinc-600 rounded-full"></div>
<div className="absolute -right-4 top-1/2 w-2 h-2 bg-zinc-600 rounded-full"></div>
</div>

<div className="h-16 w-[95%] mx-auto bg-zinc-800 rounded-lg border border-zinc-700 flex items-center justify-center opacity-90">
<span className="text-zinc-400 text-sm font-mono uppercase tracking-wider">Surface Layer (Themes, Localization)</span>
</div>

<div className="h-24 w-[90%] mx-auto bg-indigo-900/30 rounded-lg border border-indigo-500/50 flex items-center justify-around px-8 backdrop-blur-sm">
<div className="flex flex-col items-center gap-2">
<i className="w-5 h-5 text-indigo-400" data-lucide="message-square" strokeWidth="1.5"></i>
<span className="text-[10px] text-indigo-200 uppercase">Forum</span>
</div>
<div className="flex flex-col items-center gap-2">
<i className="w-5 h-5 text-indigo-400" data-lucide="calendar" strokeWidth="1.5"></i>
<span className="text-[10px] text-indigo-200 uppercase">Events</span>
</div>
<div className="flex flex-col items-center gap-2">
<i className="w-5 h-5 text-indigo-400" data-lucide="shopping-bag" strokeWidth="1.5"></i>
<span className="text-[10px] text-indigo-200 uppercase">Store</span>
</div>
<div className="flex flex-col items-center gap-2">
<i className="w-5 h-5 text-indigo-400" data-lucide="plus" strokeWidth="1.5"></i>
<span className="text-[10px] text-indigo-200 uppercase">More</span>
</div>
</div>

<div className="h-16 w-[85%] mx-auto bg-zinc-800 rounded-lg border border-zinc-700 flex items-center justify-center opacity-80">
<span className="text-zinc-400 text-sm font-mono uppercase tracking-wider">Global Layer (Auth, Notification)</span>
</div>
</div>

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#3f3f46 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: '0.1'}}></div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

<div className="group p-5 border border-zinc-200 rounded-xl hover:border-zinc-300 transition-colors">
<i className="w-5 h-5 text-zinc-800 mb-3" data-lucide="message-circle" strokeWidth="1.5"></i>
<h4 className="font-medium text-zinc-900 text-sm">Forums</h4>
<p className="text-xs text-zinc-500 mt-1">Nested discussions with rich media support.</p>
</div>
<div className="group p-5 border border-zinc-200 rounded-xl hover:border-zinc-300 transition-colors">
<i className="w-5 h-5 text-zinc-800 mb-3" data-lucide="calendar" strokeWidth="1.5"></i>
<h4 className="font-medium text-zinc-900 text-sm">Events</h4>
<p className="text-xs text-zinc-500 mt-1">Ticketing, RSVP and calendar sync.</p>
</div>
<div className="group p-5 border border-zinc-200 rounded-xl hover:border-zinc-300 transition-colors">
<i className="w-5 h-5 text-zinc-800 mb-3" data-lucide="shopping-cart" strokeWidth="1.5"></i>
<h4 className="font-medium text-zinc-900 text-sm">Store</h4>
<p className="text-xs text-zinc-500 mt-1">Digital goods and merch sales.</p>
</div>
<div className="group p-5 border border-zinc-200 rounded-xl hover:border-zinc-300 transition-colors">
<i className="w-5 h-5 text-zinc-800 mb-3" data-lucide="book-open" strokeWidth="1.5"></i>
<h4 className="font-medium text-zinc-900 text-sm">Courses</h4>
<p className="text-xs text-zinc-500 mt-1">LMS capabilities for creators.</p>
</div>
<div className="group p-5 border border-zinc-200 rounded-xl hover:border-zinc-300 transition-colors">
<i className="w-5 h-5 text-zinc-800 mb-3" data-lucide="messages-square" strokeWidth="1.5"></i>
<h4 className="font-medium text-zinc-900 text-sm">Chats</h4>
<p className="text-xs text-zinc-500 mt-1">Real-time DMs and group chats.</p>
</div>
<div className="group p-5 border border-zinc-200 rounded-xl hover:border-zinc-300 transition-colors">
<i className="w-5 h-5 text-zinc-800 mb-3" data-lucide="bar-chart" strokeWidth="1.5"></i>
<h4 className="font-medium text-zinc-900 text-sm">Analytics</h4>
<p className="text-xs text-zinc-500 mt-1">Granular engagement metrics.</p>
</div>
<div className="group p-5 border border-zinc-200 rounded-xl hover:border-zinc-300 transition-colors">
<i className="w-5 h-5 text-zinc-800 mb-3" data-lucide="shield" strokeWidth="1.5"></i>
<h4 className="font-medium text-zinc-900 text-sm">Moderation</h4>
<p className="text-xs text-zinc-500 mt-1">Auto-mod and manual tools.</p>
</div>
<div className="group p-5 border border-zinc-200 rounded-xl hover:border-zinc-300 transition-colors">
<i className="w-5 h-5 text-zinc-800 mb-3" data-lucide="users" strokeWidth="1.5"></i>
<h4 className="font-medium text-zinc-900 text-sm">Memberships</h4>
<p className="text-xs text-zinc-500 mt-1">Tiered access control gating.</p>
</div>
</div>
<div className="mt-20 border-t border-zinc-100"></div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-4">Why Multilingual Support Was Critical</h3>
<p className="text-base text-zinc-600 leading-relaxed mb-8">
                        India is not a monolith; it's a continent of nations. To scale, Wylo had to speak the user's language—literally. We built a robust localization engine supporting RTL layouts and regional fonts.
                    </p>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 bg-zinc-50 rounded-lg border border-zinc-100">
<span className="text-sm font-medium text-zinc-700">Non-English Communities</span>
<span className="text-lg font-semibold text-zinc-900">280+</span>
</div>
<div className="flex items-center justify-between p-4 bg-zinc-50 rounded-lg border border-zinc-100">
<span className="text-sm font-medium text-zinc-700">New Clients Acquired</span>
<span className="text-lg font-semibold text-zinc-900">55+</span>
</div>
</div>
</div>

<div className="relative bg-zinc-50 rounded-2xl border border-zinc-200 p-8 h-80 flex flex-col justify-center items-center gap-6">

<div className="w-64 bg-white rounded-lg shadow-sm border border-zinc-200 p-4 transform -rotate-2">
<div className="flex justify-between items-center mb-2">
<div className="w-8 h-8 rounded-full bg-amber-100"></div>
<span className="text-xs font-bold text-zinc-900">தமிழ் கிரிக்கெட்</span>
</div>
<div className="w-full h-2 bg-zinc-100 rounded mb-1"></div>
<div className="w-2/3 h-2 bg-zinc-100 rounded"></div>
</div>

<div className="w-64 bg-white rounded-lg shadow-sm border border-zinc-200 p-4 transform rotate-3 translate-x-4">
<div className="flex justify-between items-center mb-2">
<div className="w-8 h-8 rounded-full bg-red-100"></div>
<span className="text-xs font-bold text-zinc-900">ಸಿನಿಮಾ ಅಡ್ಡ</span>
</div>
<div className="w-full h-2 bg-zinc-100 rounded mb-1"></div>
<div className="w-2/3 h-2 bg-zinc-100 rounded"></div>
</div>
</div>
</div>
<div className="mt-20 border-t border-zinc-100"></div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-10">Granular Access Control</h2>
<div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">

<div className="overflow-x-auto">
<table className="w-full text-sm text-left">
<thead className="bg-zinc-50 text-zinc-500 font-medium border-b border-zinc-200">
<tr>
<th className="px-6 py-4">Role / Tier</th>
<th className="px-6 py-4 text-center">Public Forum</th>
<th className="px-6 py-4 text-center">Premium Chat</th>
<th className="px-6 py-4 text-center">Exclusive Content</th>
<th className="px-6 py-4 text-center">Moderation</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">
<tr>
<td className="px-6 py-4 font-medium text-zinc-900">Free User</td>
<td className="px-6 py-4 text-center"><i className="w-4 h-4 text-green-500 mx-auto" data-lucide="check" strokeWidth="2"></i></td>
<td className="px-6 py-4 text-center"><i className="w-4 h-4 text-zinc-300 mx-auto" data-lucide="minus" strokeWidth="2"></i></td>
<td className="px-6 py-4 text-center"><i className="w-4 h-4 text-zinc-400 mx-auto" data-lucide="lock" strokeWidth="1.5"></i></td>
<td className="px-6 py-4 text-center"><i className="w-4 h-4 text-zinc-300 mx-auto" data-lucide="minus" strokeWidth="2"></i></td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-zinc-900">VIP Member</td>
<td className="px-6 py-4 text-center"><i className="w-4 h-4 text-green-500 mx-auto" data-lucide="check" strokeWidth="2"></i></td>
<td className="px-6 py-4 text-center"><i className="w-4 h-4 text-green-500 mx-auto" data-lucide="check" strokeWidth="2"></i></td>
<td className="px-6 py-4 text-center"><i className="w-4 h-4 text-green-500 mx-auto" data-lucide="check" strokeWidth="2"></i></td>
<td className="px-6 py-4 text-center"><i className="w-4 h-4 text-zinc-300 mx-auto" data-lucide="minus" strokeWidth="2"></i></td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-zinc-900">Moderator</td>
<td className="px-6 py-4 text-center"><i className="w-4 h-4 text-green-500 mx-auto" data-lucide="check" strokeWidth="2"></i></td>
<td className="px-6 py-4 text-center"><i className="w-4 h-4 text-green-500 mx-auto" data-lucide="check" strokeWidth="2"></i></td>
<td className="px-6 py-4 text-center"><i className="w-4 h-4 text-green-500 mx-auto" data-lucide="check" strokeWidth="2"></i></td>
<td className="px-6 py-4 text-center"><i className="w-4 h-4 text-green-500 mx-auto" data-lucide="check" strokeWidth="2"></i></td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="mt-20 border-t border-zinc-100"></div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-10">Onboarding Redesign: Reducing Friction</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="border border-red-100 bg-red-50/30 rounded-xl p-6 opacity-70">
<div className="flex items-center gap-2 mb-4">
<span className="px-2 py-0.5 bg-red-100 text-red-600 text-[10px] font-bold uppercase rounded">Before</span>
<h4 className="text-sm font-semibold text-zinc-900">Complex Setup</h4>
</div>
<div className="space-y-3">
<div className="h-8 bg-white border border-red-100 rounded w-full"></div>
<div className="h-8 bg-white border border-red-100 rounded w-full"></div>
<div className="h-8 bg-white border border-red-100 rounded w-full"></div>
<div className="h-8 bg-white border border-red-100 rounded w-full"></div>
<p className="text-xs text-red-500 mt-2">Too many decisions upfront caused 60% drop-off.</p>
</div>
</div>

<div className="border border-green-200 bg-green-50/30 rounded-xl p-6">
<div className="flex items-center gap-2 mb-4">
<span className="px-2 py-0.5 bg-green-100 text-green-600 text-[10px] font-bold uppercase rounded">After</span>
<h4 className="text-sm font-semibold text-zinc-900">Guided Modules</h4>
</div>
<div className="flex gap-3 mb-4">
<div className="flex-1 p-3 bg-white border border-green-200 rounded text-center shadow-sm">
<i className="w-4 h-4 mx-auto mb-1 text-zinc-800" data-lucide="users" strokeWidth="1.5"></i>
<span className="text-[10px] font-medium">Community</span>
</div>
<div className="flex-1 p-3 bg-white border border-zinc-200 rounded text-center opacity-50">
<i className="w-4 h-4 mx-auto mb-1 text-zinc-500" data-lucide="shopping-bag" strokeWidth="1.5"></i>
<span className="text-[10px] font-medium">Store</span>
</div>
</div>
<p className="text-xs text-green-600 mt-2">Progressive disclosure led to 15% conversion increase.</p>
</div>
</div>
<div className="mt-20 border-t border-zinc-100"></div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-10">Design System &amp; Tokenization</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="p-4 border border-zinc-200 rounded-xl bg-zinc-50">
<span className="text-xs font-mono text-zinc-500 block mb-2">colors</span>
<div className="flex gap-1">
<div className="w-6 h-6 rounded-full bg-zinc-900"></div>
<div className="w-6 h-6 rounded-full bg-indigo-500"></div>
<div className="w-6 h-6 rounded-full bg-green-500"></div>
<div className="w-6 h-6 rounded-full bg-red-500"></div>
</div>
</div>

<div className="p-4 border border-zinc-200 rounded-xl bg-zinc-50">
<span className="text-xs font-mono text-zinc-500 block mb-2">typography</span>
<div className="text-xl font-semibold text-zinc-900">Aa</div>
<div className="text-xs text-zinc-400">Inter</div>
</div>

<div className="p-4 border border-zinc-200 rounded-xl bg-zinc-50 col-span-2">
<span className="text-xs font-mono text-zinc-500 block mb-2">components</span>
<div className="flex items-center gap-2">
<button className="px-3 py-1 bg-zinc-900 text-white text-xs rounded shadow-sm">Button</button>
<input checked="" className="accent-indigo-500 w-4 h-4 rounded border-zinc-300" type="checkbox"/>
<div className="w-8 h-4 bg-indigo-500 rounded-full relative"><div className="absolute right-0.5 top-0.5 bg-white w-3 h-3 rounded-full"></div></div>
</div>
</div>
</div>
</section>

<section className="w-full bg-zinc-900 text-white py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

<div className="space-y-4">
<h3 className="text-sm font-mono text-zinc-400 uppercase tracking-widest">Business</h3>
<p className="text-5xl font-semibold tracking-tighter text-white">+15%</p>
<p className="text-zinc-400 text-sm">Revenue increase through modular up-selling and enterprise tier adoption.</p>
</div>

<div className="space-y-4">
<h3 className="text-sm font-mono text-zinc-400 uppercase tracking-widest">Product</h3>
<p className="text-5xl font-semibold tracking-tighter text-white">2x</p>
<p className="text-zinc-400 text-sm">Faster shipping cycles using the new design system primitives.</p>
</div>

<div className="space-y-4">
<h3 className="text-sm font-mono text-zinc-400 uppercase tracking-widest">Market</h3>
<p className="text-5xl font-semibold tracking-tighter text-white">USP</p>
<p className="text-zinc-400 text-sm">Modularity became Wylo's core differentiator against rigid forum competitors.</p>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-32 text-center">
<p className="text-xl md:text-2xl font-medium text-zinc-800 leading-relaxed mb-8">
                I transformed Wylo from a rigid community tool into a modular, multilingual platform used across industries and regions.
            </p>
<p className="text-base text-zinc-500">
                As the sole designer, I drove UX, product thinking, platform architecture, visual design, and business outcomes — delivering a system that scales with every kind of community.
            </p>
</section>
<footer className="border-t border-zinc-100 py-12 text-center">
<div className="text-sm text-zinc-400">© 2025 Lead Product Designer Portfolio</div>
</footer>
</main>


    </>
  );
}
