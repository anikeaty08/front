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
      

<nav className="fixed top-0 w-full z-50 bg-neutral-50/80 backdrop-blur-md border-b border-neutral-200/60">
<div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="text-lg tracking-tighter font-semibold">
                DUTCH<span className="text-orange-600">.</span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#methodology">Methodology</a>
<a className="hover:text-neutral-900 transition-colors" href="#stack">The Stack</a>
<a className="hover:text-neutral-900 transition-colors" href="#details">Details</a>
</div>
<a className="text-xs font-medium bg-neutral-900 text-white px-4 py-2 rounded-full hover:bg-neutral-800 transition-colors" href="#join">
                Apply for January
            </a>
</div>
</nav>

<section className="pt-32 pb-20 px-6">
<div className="max-w-3xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                Cohort starts January 17 • Amsterdam
            </div>
<h1 className="text-5xl md:text-7xl tracking-tight font-medium text-neutral-900 mb-6">
                From zero to <span className="gradient-text">B2 Fluency</span> in 90 days.
            </h1>
<p className="text-lg md:text-xl text-neutral-500 font-normal leading-relaxed max-w-xl mx-auto mb-10">
                An intense, hybrid Dutch learning program. 60 minutes a day. Active AI tutoring and passive immersion. 
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-neutral-900 text-white rounded-lg text-sm font-medium hover:bg-neutral-800 transition-all flex items-center justify-center gap-2" href="#join">
                    Join the Cohort
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<div className="text-sm text-neutral-500 font-medium">
                    Limited spots available
                </div>
</div>
</div>
</section>

<section className="py-12 border-y border-neutral-200 bg-white">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col gap-2">
<span className="iconify text-orange-600 mb-1" data-icon="lucide:clock" data-width="24" strokeWidth="1.5"></span>
<h3 className="text-2xl font-semibold tracking-tight">60 min</h3>
<p className="text-xs text-neutral-500 uppercase tracking-wide font-medium">Daily Practice</p>
</div>
<div className="flex flex-col gap-2">
<span className="iconify text-orange-600 mb-1" data-icon="lucide:calendar-days" data-width="24" strokeWidth="1.5"></span>
<h3 className="text-2xl font-semibold tracking-tight">3 Months</h3>
<p className="text-xs text-neutral-500 uppercase tracking-wide font-medium">Duration</p>
</div>
<div className="flex flex-col gap-2">
<span className="iconify text-orange-600 mb-1" data-icon="lucide:users" data-width="24" strokeWidth="1.5"></span>
<h3 className="text-2xl font-semibold tracking-tight">Weekly</h3>
<p className="text-xs text-neutral-500 uppercase tracking-wide font-medium">Cohort Gathering</p>
</div>
<div className="flex flex-col gap-2">
<span className="iconify text-orange-600 mb-1" data-icon="lucide:target" data-width="24" strokeWidth="1.5"></span>
<h3 className="text-2xl font-semibold tracking-tight">Level B2</h3>
<p className="text-xs text-neutral-500 uppercase tracking-wide font-medium">Target Goal</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="stack">
<div className="max-w-5xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4">The Stack.</h2>
<p className="text-neutral-500 max-w-2xl">
                    We combine active recall with passive immersion. No boring textbooks. We use modern tools to accelerate acquisition. The curriculum evolves based on cohort feedback.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="p-8 rounded-2xl border border-neutral-200 bg-white hover:border-orange-200 transition-colors">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-orange-50 rounded-lg text-orange-600">
<span className="iconify" data-icon="lucide:zap" data-width="20" strokeWidth="1.5"></span>
</div>
<h3 className="font-medium tracking-tight">Active Learning</h3>
</div>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 text-neutral-600 font-bold text-xs">C</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900">Clozemaster</h4>
<p className="text-sm text-neutral-500 mt-1">Fluency Fast Track (Level 1). Context-based vocabulary scaling.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 text-neutral-600 font-bold text-xs">AI</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900">Chickytutor</h4>
<p className="text-sm text-neutral-500 mt-1">Real-time conversation practice with an AI tutor to build speaking confidence.</p>
</div>
</li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-neutral-200 bg-white hover:border-orange-200 transition-colors">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-blue-50 rounded-lg text-blue-600">
<span className="iconify" data-icon="lucide:headphones" data-width="20" strokeWidth="1.5"></span>
</div>
<h3 className="font-medium tracking-tight">Passive Immersion</h3>
</div>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 text-red-600 font-bold text-xs">N</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900">Netflix</h4>
<p className="text-sm text-neutral-500 mt-1">Analysis of shows like <em>Toon</em> and <em>Ares</em>. Cultural context and slang.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 text-green-600 font-bold text-xs">S</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900">Spotify</h4>
<p className="text-sm text-neutral-500 mt-1"><em>Echt Gebeurd</em> Podcast. Listening comprehension of real life stories.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900 text-white" id="details">
<div className="max-w-5xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

<div className="lg:col-span-2">
<h2 className="text-3xl font-medium tracking-tight mb-8">The Schedule</h2>
<div className="space-y-8 border-l border-neutral-800 pl-8 relative">

<div className="relative">
<div className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-2 border-neutral-900 bg-orange-500"></div>
<div className="text-xs font-mono text-orange-400 mb-1">JANUARY 17 • 10:00 AM</div>
<h3 className="text-xl font-medium mb-2">The Kickoff</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                                We meet in person in Amsterdam (Location TBD). We set up tools, establish goals, and meet the cohort.
                            </p>
</div>

<div className="relative">
<div className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-2 border-neutral-900 bg-neutral-700"></div>
<div className="text-xs font-mono text-neutral-500 mb-1">DAILY ROUTINE</div>
<h3 className="text-xl font-medium mb-2">6 Days a Week</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                                You commit to 60 minutes of practice daily. Can be split between active and passive tools. Flexible timing to fit your work life.
                            </p>
</div>

<div className="relative">
<div className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-2 border-neutral-900 bg-neutral-700"></div>
<div className="text-xs font-mono text-neutral-500 mb-1">WEEKLY</div>
<h3 className="text-xl font-medium mb-2">Cohort Saturday</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                                Every week we gather (call or in-person) to practice speaking, review progress, and adjust the roadmap.
                            </p>
</div>
</div>
</div>

<div className="lg:col-span-1">
<div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>
<h3 className="text-lg font-medium text-white mb-2">Membership</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tight">€100</span>
<span className="text-neutral-400">/month</span>
</div>
<ul className="space-y-3 text-sm text-neutral-300 mb-8">
<li className="flex items-center gap-2">
<span className="iconify text-orange-400" data-icon="lucide:check" data-width="16"></span>
                                Access to Clozemaster Pro
                            </li>
<li className="flex items-center gap-2">
<span className="iconify text-orange-400" data-icon="lucide:check" data-width="16"></span>
                                Chickytutor AI Credits
                            </li>
<li className="flex items-center gap-2">
<span className="iconify text-orange-400" data-icon="lucide:check" data-width="16"></span>
                                Weekly Cohort Calls
                            </li>
<li className="flex items-center gap-2">
<span className="iconify text-orange-400" data-icon="lucide:check" data-width="16"></span>
                                Curated Roadmap
                            </li>
<li className="flex items-center gap-2 text-neutral-500">
<span className="iconify" data-icon="lucide:x" data-width="16"></span>
                                Netflix Subscription not included
                            </li>
</ul>
<button className="w-full py-3 bg-white text-neutral-900 rounded-lg font-medium text-sm hover:bg-neutral-200 transition-colors">
                            Secure your spot
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-neutral-200" id="join">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight text-center mb-16">Application Process</h2>
<div className="space-y-4">

<div className="flex gap-6 items-center p-4 rounded-xl hover:bg-neutral-50 transition-colors group">
<div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-sm font-semibold text-neutral-400 group-hover:border-orange-500 group-hover:text-orange-600 transition-colors bg-white">01</div>
<div className="flex-1">
<h4 className="text-base font-medium text-neutral-900">Intro Call</h4>
<p className="text-sm text-neutral-500">A quick chat to ensure your goals align with the program pace.</p>
</div>
<div className="shrink-0">
<span className="iconify text-neutral-300" data-icon="lucide:phone" data-width="20" strokeWidth="1.5"></span>
</div>
</div>

<div className="flex gap-6 items-center p-4 rounded-xl hover:bg-neutral-50 transition-colors group">
<div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-sm font-semibold text-neutral-400 group-hover:border-orange-500 group-hover:text-orange-600 transition-colors bg-white">02</div>
<div className="flex-1">
<h4 className="text-base font-medium text-neutral-900">Payment</h4>
<p className="text-sm text-neutral-500">Secure your spot for the first month (€100).</p>
</div>
<div className="shrink-0">
<span className="iconify text-neutral-300" data-icon="lucide:credit-card" data-width="20" strokeWidth="1.5"></span>
</div>
</div>

<div className="flex gap-6 items-center p-4 rounded-xl hover:bg-neutral-50 transition-colors group">
<div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-sm font-semibold text-neutral-400 group-hover:border-orange-500 group-hover:text-orange-600 transition-colors bg-white">03</div>
<div className="flex-1">
<h4 className="text-base font-medium text-neutral-900">Join the WhatsApp Group</h4>
<p className="text-sm text-neutral-500">Get added to the exclusive community channel.</p>
</div>
<div className="shrink-0">
<span className="iconify text-neutral-300" data-icon="lucide:message-circle" data-width="20" strokeWidth="1.5"></span>
</div>
</div>

<div className="flex gap-6 items-center p-4 rounded-xl hover:bg-neutral-50 transition-colors group">
<div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-sm font-semibold text-neutral-400 group-hover:border-orange-500 group-hover:text-orange-600 transition-colors bg-white">04</div>
<div className="flex-1">
<h4 className="text-base font-medium text-neutral-900">Intro Video</h4>
<p className="text-sm text-neutral-500">Share a 30-second video introducing yourself—in Dutch.</p>
</div>
<div className="shrink-0">
<span className="iconify text-neutral-300" data-icon="lucide:video" data-width="20" strokeWidth="1.5"></span>
</div>
</div>
</div>
<div className="mt-12 text-center">
<button className="px-8 py-3 bg-neutral-900 text-white rounded-lg text-sm font-medium hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-200/50">
                    Book Intro Call
                </button>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-neutral-200 bg-neutral-50">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm font-semibold tracking-tight text-neutral-900">
                DUTCH.
            </div>
<div className="text-xs text-neutral-500">
                © 2024 Dutch Cohort Program. Amsterdam.
            </div>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="18" strokeWidth="1.5"></span>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="18" strokeWidth="1.5"></span>
</a>
</div>
</div>
</footer>

    </>
  );
}
