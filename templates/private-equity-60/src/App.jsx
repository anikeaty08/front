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
display: ['Manrope', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
colors: {
slate: {
850: '#151e2e',
}
},
animation: {
'scroll': 'scroll 40s linear infinite',
'blob': 'blob 7s infinite',
},
keyframes: {
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
},
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
}
}
}
}
}



        // Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Mobile Menu
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
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
      

<header className="fixed top-0 inset-x-0 z-50 glass-nav shadow-sm transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-9 h-9 bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg flex items-center justify-center text-white shadow-lg shadow-slate-900/20 group-hover:scale-105 transition-transform duration-300 border border-slate-700">
<span className="iconify" data-icon="lucide:feather" data-strokeWidth="1.5" data-width="18"></span>
</div>
<span className="font-display font-semibold text-lg tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">ATHENA’S ANGEL</span>
</a>

<nav className="hidden lg:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/50">
<a className="px-5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm rounded-full transition-all" href="#home">Home</a>
<a className="px-5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm rounded-full transition-all" href="#focus">Focus</a>
<a className="px-5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm rounded-full transition-all" href="#events">Events</a>
<a className="px-5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm rounded-full transition-all" href="#angels">Community</a>
</nav>

<div className="hidden lg:flex items-center gap-4">
<a className="text-xs font-semibold text-slate-600 hover:text-indigo-600 transition-colors" href="#share-pitch">Log In</a>
<a className="px-5 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-indigo-600 hover:-translate-y-0.5 transition-all shadow-lg shadow-slate-900/20 flex items-center gap-2" href="#share-pitch">
                    Share Pitch
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<button className="lg:hidden p-2 text-slate-900 bg-slate-100 rounded-md hover:bg-slate-200" id="mobile-menu-btn">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="20"></span>
</button>
</div>

<div className="hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl lg:hidden flex-col p-6 space-y-4" id="mobile-menu">
<a className="block text-sm font-medium text-slate-900 py-2 border-b border-slate-50" href="#home">Home</a>
<a className="block text-sm font-medium text-slate-900 py-2 border-b border-slate-50" href="#focus">Focus</a>
<a className="block text-sm font-medium text-slate-900 py-2 border-b border-slate-50" href="#events">Events</a>
<a className="block text-sm font-medium text-slate-900 py-2 border-b border-slate-50" href="#angels">Community</a>
<a className="block w-full text-center px-5 py-3 bg-indigo-600 text-white text-sm font-medium rounded-lg mt-4 shadow-lg shadow-indigo-200" href="#share-pitch">Share Pitch</a>
</div>
</header>
<main className="flex-grow pt-20">

<section className="relative pt-20 pb-32 overflow-hidden" id="home">

<div className="absolute inset-0 bg-slate-50 -z-30"></div>
<div className="absolute inset-0 bg-grid-pattern opacity-40 -z-20"></div>

<div className="absolute top-0 right-0 -z-10 opacity-60">
<div className="absolute top-0 right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
<div className="absolute top-0 right-60 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 right-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
</div>
<div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-to-r from-emerald-100/40 to-teal-100/40 rounded-full blur-3xl -z-10 -translate-x-1/2"></div>
<div className="max-w-6xl mx-auto px-6 text-center relative z-10">
<div className="reveal active flex flex-col items-center">
<a className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-indigo-100 text-xs font-semibold uppercase tracking-wide text-indigo-600 mb-8 hover:border-indigo-200 hover:shadow-md hover:shadow-indigo-500/10 transition-all cursor-pointer group shadow-sm" href="#angels">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                        Accepting New Members
                    </a>
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-slate-900 tracking-tighter mb-8 leading-[1] max-w-5xl drop-shadow-sm">
                        Smart Capital for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600">B2B Software.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-normal mb-10 max-w-2xl mx-auto leading-relaxed">
                        Athena’s Angel connects visionary founders with a powerful network of executives across EMEA. Investing from Seed to Series B.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-indigo-600 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-900/20 hover:shadow-indigo-500/25" href="#angels">
                            Join Community
                        </a>
<a className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2 group shadow-sm" href="#share-pitch">
                            Share Your Pitch
                            <span className="iconify opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-slate-400" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 pt-4 reveal delay-200">
<div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-shadow">
<div className="text-3xl font-display font-semibold text-slate-900 tracking-tight mb-1">£50M+</div>
<div className="text-[10px] uppercase tracking-widest text-indigo-500 font-semibold">Deployed</div>
</div>
<div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-shadow">
<div className="text-3xl font-display font-semibold text-slate-900 tracking-tight mb-1">100+</div>
<div className="text-[10px] uppercase tracking-widest text-purple-500 font-semibold">Portfolio</div>
</div>
<div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-shadow">
<div className="text-3xl font-display font-semibold text-slate-900 tracking-tight mb-1">50+</div>
<div className="text-[10px] uppercase tracking-widest text-emerald-500 font-semibold">Exits</div>
</div>
<div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-shadow">
<div className="text-3xl font-display font-semibold text-slate-900 tracking-tight mb-1">10+</div>
<div className="text-[10px] uppercase tracking-widest text-blue-500 font-semibold">Countries</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white border-y border-slate-100 overflow-hidden relative">
<div className="max-w-7xl mx-auto px-6 mb-8 text-center">
<p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Co-investing with world class funds</p>
</div>
<div className="relative flex overflow-x-hidden group">
<div className="animate-scroll whitespace-nowrap flex gap-20 items-center">
<span className="text-xl font-display font-bold text-slate-300 hover:text-indigo-900 transition-all cursor-default">SEQUOIA</span>
<span className="text-xl font-display font-bold text-slate-300 hover:text-indigo-900 transition-all cursor-default">ACCEL</span>
<span className="text-xl font-display font-bold text-slate-300 hover:text-indigo-900 transition-all cursor-default">INDEX VENTURES</span>
<span className="text-xl font-display font-bold text-slate-300 hover:text-indigo-900 transition-all cursor-default">ANDREESSEN HOROWITZ</span>
<span className="text-xl font-display font-bold text-slate-300 hover:text-indigo-900 transition-all cursor-default">LIGHTSPEED</span>
<span className="text-xl font-display font-bold text-slate-300 hover:text-indigo-900 transition-all cursor-default">BENCHMARK</span>
<span className="text-xl font-display font-bold text-slate-300 hover:text-indigo-900 transition-all cursor-default">GREYLOCK</span>
<span className="text-xl font-display font-bold text-slate-300 hover:text-indigo-900 transition-all cursor-default">KLEINER PERKINS</span>

<span className="text-xl font-display font-bold text-slate-300 hover:text-indigo-900 transition-all cursor-default">SEQUOIA</span>
<span className="text-xl font-display font-bold text-slate-300 hover:text-indigo-900 transition-all cursor-default">ACCEL</span>
<span className="text-xl font-display font-bold text-slate-300 hover:text-indigo-900 transition-all cursor-default">INDEX VENTURES</span>
<span className="text-xl font-display font-bold text-slate-300 hover:text-indigo-900 transition-all cursor-default">ANDREESSEN HOROWITZ</span>
</div>
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="focus">

<div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-center reveal">
<div>
<div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-[10px] font-bold uppercase tracking-wider rounded-md mb-6 border border-indigo-200">Investment Thesis</div>
<h2 className="font-display text-4xl md:text-5xl font-semibold text-slate-900 tracking-tighter mb-6 leading-tight">
                            Backing European <br/> Innovation.
                        </h2>
<p className="text-slate-500 text-lg mb-8 leading-relaxed">
                            We focus on high-growth potential B2B software companies across EMEA, specifically the UK, Benelux, DACH, and Nordics. 
                        </p>
<div className="space-y-4">

<div className="group flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-indigo-100 transition-all">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:layers" data-width="20"></span>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Vertical SaaS</h4>
<p className="text-xs text-slate-500 mt-0.5">Deep industry specific workflows.</p>
</div>
</div>
<div className="group flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-purple-100 transition-all">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:cpu" data-width="20"></span>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">DevOps &amp; Infra</h4>
<p className="text-xs text-slate-500 mt-0.5">Next-gen development tools.</p>
</div>
</div>
<div className="group flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-teal-100 transition-all">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:wallet" data-width="20"></span>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Fintech Infrastructure</h4>
<p className="text-xs text-slate-500 mt-0.5">B2B payments and compliance.</p>
</div>
</div>
</div>
</div>

<div className="relative bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-50/50 via-transparent to-transparent rounded-3xl -z-10"></div>
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2 bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-100">
<div className="flex justify-between items-center mb-4">
<span className="text-xs font-semibold text-indigo-500 uppercase tracking-wider">Primary Region</span>
<span className="iconify text-slate-300" data-icon="lucide:globe" data-width="20"></span>
</div>
<div className="font-display text-3xl font-semibold text-slate-900">EMEA</div>
<div className="flex flex-wrap gap-2 mt-4">
<span className="bg-indigo-50 border border-indigo-100 text-indigo-700 px-2.5 py-1 rounded text-xs font-semibold">UK</span>
<span className="bg-white border border-slate-100 text-slate-600 px-2.5 py-1 rounded text-xs font-medium">DE</span>
<span className="bg-white border border-slate-100 text-slate-600 px-2.5 py-1 rounded text-xs font-medium">NL</span>
<span className="bg-white border border-slate-100 text-slate-600 px-2.5 py-1 rounded text-xs font-medium">SE</span>
</div>
</div>
<div className="bg-slate-900 p-6 rounded-2xl shadow-lg shadow-slate-900/10 text-white">
<div className="text-xs font-semibold text-slate-400 uppercase mb-2">Stage</div>
<div className="font-display text-xl font-semibold">Seed - Series B</div>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<div className="text-xs font-semibold text-slate-400 uppercase mb-2">Check Size</div>
<div className="font-display text-xl font-semibold text-slate-900">£100k - £2M</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="events">

<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-slate-900"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex justify-between items-end mb-16 border-b border-slate-800 pb-8">
<div>
<h2 className="font-display text-3xl font-semibold tracking-tight mb-2">Community Events</h2>
<p className="text-slate-400">Exclusive gatherings for our network.</p>
</div>
<a className="text-sm font-medium hover:text-indigo-400 text-slate-400 flex items-center gap-1 transition-colors" href="#">
                        View All <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative bg-slate-850 rounded-2xl p-1 overflow-hidden hover:-translate-y-1 transition-transform duration-300 reveal shadow-xl shadow-black/20">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative h-full bg-slate-900 rounded-xl p-6 border border-slate-800 group-hover:border-slate-700 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="text-[10px] font-bold px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded uppercase tracking-wide">Oct 24</div>
<span className="iconify text-slate-600 group-hover:text-white transition-colors" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
<h3 className="font-display text-xl font-semibold mb-2">London SaaS Dinner</h3>
<p className="text-sm text-slate-400 mb-6 line-clamp-2">Intimate dinner with 10 founders raising Series A in Q4.</p>
<div className="flex items-center gap-2 text-xs text-slate-500 mt-auto pt-4 border-t border-slate-800">
<span className="iconify" data-icon="lucide:map-pin" data-width="14"></span>
<span>Shoreditch House, London</span>
</div>
</div>
</div>

<div className="group relative bg-slate-850 rounded-2xl p-1 overflow-hidden hover:-translate-y-1 transition-transform duration-300 reveal delay-100 shadow-xl shadow-black/20">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative h-full bg-slate-900 rounded-xl p-6 border border-slate-800 group-hover:border-slate-700 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="text-[10px] font-bold px-2 py-1 bg-purple-500/10 text-purple-400 rounded uppercase tracking-wide">Nov 02</div>
<span className="iconify text-slate-600 group-hover:text-white transition-colors" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
<h3 className="font-display text-xl font-semibold mb-2">Angel Syndicate Call</h3>
<p className="text-sm text-slate-400 mb-6 line-clamp-2">Reviewing 3 deep-tech opportunities in the Nordics.</p>
<div className="flex items-center gap-2 text-xs text-slate-500 mt-auto pt-4 border-t border-slate-800">
<span className="iconify" data-icon="lucide:video" data-width="14"></span>
<span>Zoom Live Stream</span>
</div>
</div>
</div>

<div className="group relative bg-slate-850 rounded-2xl p-1 overflow-hidden hover:-translate-y-1 transition-transform duration-300 reveal delay-200 shadow-xl shadow-black/20">
<div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative h-full bg-slate-900 rounded-xl p-6 border border-slate-800 group-hover:border-slate-700 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="text-[10px] font-bold px-2 py-1 bg-slate-800 text-slate-400 rounded uppercase tracking-wide">Waitlist</div>
<span className="iconify text-slate-600 group-hover:text-white transition-colors" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
<h3 className="font-display text-xl font-semibold mb-2">Annual Retreat</h3>
<p className="text-sm text-slate-400 mb-6 line-clamp-2">Two days of networking and strategy in Amsterdam.</p>
<div className="flex items-center gap-2 text-xs text-slate-500 mt-auto pt-4 border-t border-slate-800">
<span className="iconify" data-icon="lucide:calendar" data-width="14"></span>
<span>December 12-14</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="share-pitch">
<div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-indigo-50/50"></div>
<div className="max-w-xl mx-auto px-6 relative z-10">
<div className="text-center mb-10 reveal">
<h2 className="font-display text-3xl font-semibold text-slate-900 tracking-tight mb-2">Submit Your Pitch</h2>
<p className="text-slate-500">Fast track your application to our investment committee.</p>
</div>
<div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl shadow-indigo-900/5 border border-white p-8 reveal">
<form className="space-y-5" onsubmit="event.preventDefault();">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-semibold uppercase text-slate-500 tracking-wide">First Name</label>
<input className="custom-input w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold uppercase text-slate-500 tracking-wide">Last Name</label>
<input className="custom-input w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold uppercase text-slate-500 tracking-wide">Company Email</label>
<div className="relative">
<span className="iconify absolute left-3 top-3 text-slate-400" data-icon="lucide:mail" data-width="16"></span>
<input className="custom-input w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white" placeholder="jane@company.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold uppercase text-slate-500 tracking-wide">Pitch Deck Link</label>
<div className="relative">
<span className="iconify absolute left-3 top-3 text-slate-400" data-icon="lucide:link" data-width="16"></span>
<input className="custom-input w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white" placeholder="DocSend / Google Drive" type="url"/>
</div>
</div>

<div className="flex items-center justify-between py-2 bg-slate-50/50 p-3 rounded-lg border border-slate-100">
<div className="flex items-center gap-2">
<span className="iconify text-indigo-500" data-icon="lucide:zap" data-width="16"></span>
<span className="text-sm font-medium text-slate-700">Raising actively?</span>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-slate-300 transition-all duration-300" id="toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-300 cursor-pointer transition-colors duration-300" htmlFor="toggle"></label>
</input></div>
</div>
<button className="w-full py-3.5 bg-slate-900 text-white font-semibold rounded-lg hover:bg-indigo-600 transform hover:-translate-y-0.5 transition-all duration-200 shadow-xl shadow-slate-900/10 flex justify-center items-center gap-2">
                            Send Application
                            <span className="iconify" data-icon="lucide:send" data-width="14"></span>
</button>
</form>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:feather" data-width="16"></span>
</div>
<span className="font-display font-semibold text-slate-900 tracking-tight text-lg">ATHENA’S ANGEL</span>
</a>
<p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                        Global private equity &amp; angel community investing in the next generation of B2B software giants.
                    </p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-xs uppercase tracking-wider">Platform</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Investors</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Startups</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Partners</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Events</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-xs uppercase tracking-wider">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Risks</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2023 Athena’s Angel Ltd. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-indigo-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="hover:text-indigo-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="16"></span></a>
<a className="hover:text-indigo-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="16"></span></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
