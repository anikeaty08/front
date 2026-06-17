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
colors: {
brand: {
50: '#ecfdf5',
100: '#d1fae5',
300: '#6ee7b7', // Mint
400: '#34d399',
500: '#10b981',
800: '#065f46',
900: '#064e3b',
950: '#022c22', // Dark Green
}
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
      

<nav className="fixed top-0 w-full z-50 glass-card border-b border-gray-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-brand-950 flex items-center justify-center text-brand-300">
<iconify-icon icon="solar:planet-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-brand-950">Planyx</span>
</a>
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium tracking-tight text-white transition-colors bg-brand-950 rounded-full hover:bg-brand-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-900" href="#get-started">
                Get Early Access
            </a>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-950">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none opacity-30">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
<div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
</div>
<div className="relative max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-brand-900/50 border border-brand-800 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-brand-400"></span>
<span className="text-xs font-medium text-brand-100 tracking-wide uppercase">Built by a student, for students</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                Homework planning <br/>
<span className="text-brand-300">shouldn’t be this hard.</span>
</h1>
<p className="text-lg sm:text-xl text-brand-100/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                I’m Malik, a student and the creator of Planyx. I built the tool I wish I had to stop the overwhelm and actually manage my time.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-brand-300 hover:text-white transition-colors" href="#my-story">
                    Read my story
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="py-24 bg-white" id="my-story">
<div className="max-w-3xl mx-auto px-6">
<div className="flex items-center gap-3 mb-8 text-brand-950">
<iconify-icon icon="solar:user-speak-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h2 className="text-sm font-semibold uppercase tracking-widest">The Problem</h2>
</div>
<div className="prose prose-lg prose-headings:font-medium prose-headings:tracking-tight text-gray-600">
<h3 className="text-3xl text-gray-900 mb-8">It started when I missed a major history project deadline because I took a screenshot and forgot about it.</h3>
<p className="mb-6">
                    I noticed a pattern. It wasn't just me. I saw students struggling everywhere. We get assignments from a dozen different places: photos of the whiteboard, screenshots of online portals, random emails, verbal instructions, and text messages from classmates.
                </p>
<p className="mb-6">
                    Manually aggregating all that into a planner takes so much friction. It causes stress, massive procrastination, missed deadlines, and that constant sinking feeling of being overwhelmed.
                </p>
<div className="p-6 bg-brand-50 rounded-2xl border border-brand-100 my-8">
<p className="text-brand-900 font-medium m-0">
                        "The problem isn’t that we're lazy. It's that the 'planning' part takes more effort than the actual homework."
                    </p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gray-50 border-y border-gray-200">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-gray-900">
                That’s why I decided to build a better way.
            </h2>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="flex items-center gap-3 mb-6 text-brand-500">
<iconify-icon icon="solar:stars-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h2 className="text-sm font-semibold uppercase tracking-widest text-brand-800">Meet Planyx</h2>
</div>
<h3 className="text-4xl font-medium tracking-tight text-gray-900 mb-6">
                        Turn chaos into a clear path forward.
                    </h3>
<p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Planyx is the solution I created to fix my own academic life. It instantly turns photos, screenshots, or messy text notes into organized, actionable tasks.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-gray-700">
<iconify-icon className="text-brand-500 shrink-0 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Auto-detects due dates, subjects, and assignment names.</span>
</li>
<li className="flex items-start gap-3 text-gray-700">
<iconify-icon className="text-brand-500 shrink-0 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Smart reminders that actually understand your schedule.</span>
</li>
<li className="flex items-start gap-3 text-gray-700">
<iconify-icon className="text-brand-500 shrink-0 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Non-intrusive parent sync to keep them in the loop without the nagging.</span>
</li>
</ul>
</div>

<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-tr from-brand-100 to-gray-100 rounded-[2.5rem] transform rotate-2"></div>
<div className="relative bg-brand-950 rounded-3xl p-8 shadow-2xl rotate-0 border border-gray-800">
<div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
<div className="text-white font-medium">Task Detected</div>
<div className="text-xs text-brand-300 bg-brand-900/50 px-2 py-1 rounded">AI Processing</div>
</div>
<div className="space-y-4">

<div className="bg-white/5 p-4 rounded-xl border border-white/10 flex gap-4 items-center">
<div className="h-10 w-10 rounded-lg bg-brand-500/20 flex items-center justify-center text-brand-300 shrink-0">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="h-2 w-24 bg-white/20 rounded mb-2"></div>
<div className="h-2 w-32 bg-white/10 rounded"></div>
</div>
<iconify-icon className="text-brand-300 animate-pulse" icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</div>

<div className="bg-brand-500 p-4 rounded-xl border border-brand-400 shadow-lg mt-6">
<div className="flex justify-between items-start mb-2">
<span className="text-white font-medium text-sm">History Essay</span>
<span className="text-brand-950 text-xs bg-brand-300 px-2 py-0.5 rounded font-medium">Tomorrow</span>
</div>
<p className="text-brand-50 text-xs opacity-90">Chapter 4-5 summary &amp; opinion.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-4">Everything you need to stay afloat</h2>
<p className="text-gray-600">I designed these features specifically to counter the habits that make student life stressful.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 group">
<div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Snap &amp; Schedule</h3>
<p className="text-gray-600 text-sm leading-relaxed">Take a photo of the whiteboard or upload a screenshot. Planyx parses it into a real to-do list instantly.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 group">
<div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bell-bing-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Reminders</h3>
<p className="text-gray-600 text-sm leading-relaxed">Notifications that know when you usually work, so they don't get ignored like regular alarms.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 group">
<div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Visual Planner</h3>
<p className="text-gray-600 text-sm leading-relaxed">See your workload density. Know exactly which days are going to be heavy before they happen.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 group">
<div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:list-check-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Task Breakdown</h3>
<p className="text-gray-600 text-sm leading-relaxed">Big project? Planyx helps you break it into small, manageable chunks so you can start easily.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 group">
<div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:restart-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Deadline Recovery</h3>
<p className="text-gray-600 text-sm leading-relaxed">Missed a date? No shame. We help you reshuffle your schedule to get back on track without panic.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 group">
<div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Optional Parent Sync</h3>
<p className="text-gray-600 text-sm leading-relaxed">Keep parents updated on major due dates so they support you, not micromanage you.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-950 relative overflow-hidden" id="get-started">

<div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-300 rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
<div className="relative max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-6">
                Try Planyx and <br/><span className="text-brand-300">Take Control of Your Schoolwork.</span>
</h2>
<p className="text-brand-100/70 text-lg mb-10 max-w-xl mx-auto">
                Stop letting assignments slip through the cracks. Join me and hundreds of other students using Planyx.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="px-8 py-4 bg-brand-300 text-brand-950 text-base font-semibold rounded-full hover:bg-brand-200 transition-all shadow-[0_0_20px_rgba(110,231,183,0.3)] hover:shadow-[0_0_30px_rgba(110,231,183,0.5)]">
                    Get Started with Planyx
                </button>
</div>
<p className="mt-8 text-xs text-brand-100/30 uppercase tracking-widest">Free for students • No credit card required</p>
</div>
</section>
<footer className="bg-brand-950 border-t border-brand-900 py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-white">
<iconify-icon icon="solar:planet-linear" width="20"></iconify-icon>
<span className="font-semibold tracking-tight">Planyx</span>
</div>
<div className="text-brand-100/40 text-sm">
                © 2023 Planyx. Built by Malik.
            </div>
<div className="flex gap-4">
<a className="text-brand-100/60 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
<a className="text-brand-100/60 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
