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
      

<nav className="fixed top-0 w-full z-50 text-white mix-blend-difference">
<div className="max-w-[1400px] mx-auto px-6 py-6 flex justify-between items-center">
<div className="text-sm font-semibold tracking-tight flex items-center gap-2">
<div className="w-4 h-4 bg-white rounded-full"></div>
                TRUPEER.AI
            </div>
<div className="hidden md:flex gap-12 text-xs font-medium tracking-widest uppercase text-neutral-300">
<a className="hover:text-white transition-colors" href="#speakers">Speakers</a>
<a className="hover:text-white transition-colors" href="#agenda">Agenda</a>
<a className="hover:text-white transition-colors" href="#workshops">Workshops</a>
</div>
<a className="text-xs font-medium tracking-widest uppercase hover:text-neutral-300 flex items-center gap-2" href="#tickets">
                Register Now <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
</nav>

<header className="relative h-[90vh] mesh-gradient overflow-hidden flex items-end pb-12 md:pb-24">

<div className="absolute inset-0">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse duration-[8s]"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-[120px]"></div>
</div>
<div className="relative z-10 w-full max-w-[1400px] mx-auto px-6">
<div className="flex items-center gap-3 mb-8">
<span className="px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-[10px] font-medium tracking-widest uppercase text-white">
                    May 22-24 • San Francisco
                </span>
</div>
<h1 className="text-5xl md:text-8xl font-semibold tracking-tighter text-white mb-8 leading-[0.95]">
                The Future of <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-indigo-400">Product Storytelling.</span>
</h1>
<div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8">
<p className="text-neutral-400 max-w-md text-sm leading-relaxed">
                    Join the premier summit for Product Marketers, Founders, and CS leaders. Discover how AI is transforming screen recordings into cinematic product experiences.
                </p>
<div className="flex gap-4 mt-8 md:mt-0">
<button className="bg-white text-black px-6 py-3 rounded-lg text-sm font-semibold hover:bg-neutral-200 transition-colors">
                        Get Tickets
                    </button>
<button className="px-6 py-3 rounded-lg text-sm font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors">
                        View Agenda
                    </button>
</div>
</div>
</div>
</header>

<section className="bg-white py-24 md:py-32">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
<div>
<div className="flex items-center gap-3 mb-8">
<span className="squiggle"></span>
<span className="text-xs font-bold tracking-widest text-neutral-950 uppercase">Why Attend</span>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter leading-[1.1] text-neutral-900 mb-8">
                        Stop sending boring screen recordings. Start creating <span className="text-indigo-600">product cinema.</span>
</h2>
<p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
                        The Trupeer Summit brings together the creators defining the next generation of software demos, documentation, and onboarding.
                    </p>
</div>
<div className="grid grid-cols-2 gap-8 content-end">
<div className="border-l border-neutral-200 pl-6">
<span className="block text-5xl font-semibold tracking-tighter text-neutral-900 mb-2">500+</span>
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Product Leaders</span>
</div>
<div className="border-l border-neutral-200 pl-6">
<span className="block text-5xl font-semibold tracking-tighter text-neutral-900 mb-2">24</span>
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Hands-on Workshops</span>
</div>
<div className="border-l border-neutral-200 pl-6">
<span className="block text-5xl font-semibold tracking-tighter text-neutral-900 mb-2">10x</span>
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Production Speed</span>
</div>
<div className="border-l border-neutral-200 pl-6">
<span className="block text-5xl font-semibold tracking-tighter text-neutral-900 mb-2">3</span>
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Days of Inspiration</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50 py-32" id="workshops">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex items-center gap-3 mb-16">
<span className="squiggle"></span>
<span className="text-xs font-bold tracking-widest text-neutral-950 uppercase">Event Tracks</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-xl border border-neutral-200 hover:border-indigo-200 transition-colors group">
<div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="video"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">AI Video Production</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">
                        Learn how to use Trupeer to turn raw screen captures into polished, zoomed, and narrated assets in minutes, not days.
                    </p>
<a className="text-xs font-bold uppercase tracking-wider text-indigo-600 flex items-center gap-2" href="#">
                        View Sessions <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>

<div className="bg-white p-8 rounded-xl border border-neutral-200 hover:border-indigo-200 transition-colors group">
<div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Onboarding at Scale</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">
                        Strategies for Customer Success teams to automate documentation and creating "wow" moments during user activation.
                    </p>
<a className="text-xs font-bold uppercase tracking-wider text-indigo-600 flex items-center gap-2" href="#">
                        View Sessions <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>

<div className="bg-white p-8 rounded-xl border border-neutral-200 hover:border-indigo-200 transition-colors group">
<div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Product Marketing</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">
                        Mastering the art of the launch. How to build hype with video, GIFs, and beautiful changelogs using AI tools.
                    </p>
<a className="text-xs font-bold uppercase tracking-wider text-indigo-600 flex items-center gap-2" href="#">
                        View Sessions <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="bg-white py-32" id="speakers">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<div className="flex items-center gap-3 mb-6">
<span className="squiggle"></span>
<span className="text-xs font-bold tracking-widest text-neutral-950 uppercase">Speakers</span>
</div>
<h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-neutral-900 max-w-xl">
                        Learn from the best in SaaS.
                    </h2>
</div>
<button className="hidden md:flex items-center gap-2 text-sm font-medium border border-neutral-200 px-4 py-2 rounded-lg hover:bg-neutral-50 transition-colors">
                    See full lineup <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

<div className="group cursor-pointer">
<div className="aspect-[4/5] overflow-hidden mb-4 rounded-lg bg-neutral-100 relative">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-semibold text-neutral-900">Elena Ross</h4>
<p className="text-sm text-indigo-600 font-medium mb-1">Head of Product Marketing</p>
<p className="text-xs text-neutral-400 uppercase tracking-wide">Notion</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/5] overflow-hidden mb-4 rounded-lg bg-neutral-100 relative">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-semibold text-neutral-900">David Park</h4>
<p className="text-sm text-indigo-600 font-medium mb-1">Founder</p>
<p className="text-xs text-neutral-400 uppercase tracking-wide">Trupeer.ai</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/5] overflow-hidden mb-4 rounded-lg bg-neutral-100 relative">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-semibold text-neutral-900">Sarah Jenkins</h4>
<p className="text-sm text-indigo-600 font-medium mb-1">VP of Customer Success</p>
<p className="text-xs text-neutral-400 uppercase tracking-wide">Intercom</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/5] overflow-hidden mb-4 rounded-lg bg-neutral-100 relative">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-semibold text-neutral-900">Marcus Thorne</h4>
<p className="text-sm text-indigo-600 font-medium mb-1">Director of Education</p>
<p className="text-xs text-neutral-400 uppercase tracking-wide">Linear</p>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] text-white py-32 border-t border-neutral-900" id="agenda">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex items-center gap-3 mb-16">
<span className="squiggle squiggle-white"></span>
<span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">Agenda Highlights</span>
</div>
<div className="space-y-4">

<div className="group border border-neutral-800 p-6 md:p-8 rounded-xl hover:bg-neutral-900 transition-colors cursor-pointer flex flex-col md:flex-row gap-6 md:items-center justify-between">
<div className="flex gap-6 items-center">
<div className="text-neutral-500 font-mono text-sm w-16">09:00 AM</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-white group-hover:text-indigo-300 transition-colors">Keynote: The Death of the PDF Manual</h3>
<p className="text-neutral-400 text-sm mt-1">David Park, Founder @ Trupeer</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="text-[10px] font-bold uppercase tracking-widest bg-neutral-800 px-3 py-1 rounded-full text-neutral-400">Main Stage</span>
<i className="text-neutral-600 w-5 h-5" data-lucide="chevron-right"></i>
</div>
</div>

<div className="group border border-neutral-800 p-6 md:p-8 rounded-xl hover:bg-neutral-900 transition-colors cursor-pointer flex flex-col md:flex-row gap-6 md:items-center justify-between">
<div className="flex gap-6 items-center">
<div className="text-neutral-500 font-mono text-sm w-16">10:30 AM</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-white group-hover:text-indigo-300 transition-colors">Workshop: Scripting for AI Voiceovers</h3>
<p className="text-neutral-400 text-sm mt-1">Interactive session on writing natural sounding scripts.</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="text-[10px] font-bold uppercase tracking-widest bg-neutral-800 px-3 py-1 rounded-full text-neutral-400">Workshop A</span>
<i className="text-neutral-600 w-5 h-5" data-lucide="chevron-right"></i>
</div>
</div>

<div className="group border border-neutral-800 p-6 md:p-8 rounded-xl hover:bg-neutral-900 transition-colors cursor-pointer flex flex-col md:flex-row gap-6 md:items-center justify-between">
<div className="flex gap-6 items-center">
<div className="text-neutral-500 font-mono text-sm w-16">01:00 PM</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-white group-hover:text-indigo-300 transition-colors">Panel: Scaling Video Production in Small Teams</h3>
<p className="text-neutral-400 text-sm mt-1">feat. Leaders from Linear, Vercel, and Stripe.</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="text-[10px] font-bold uppercase tracking-widest bg-neutral-800 px-3 py-1 rounded-full text-neutral-400">Main Stage</span>
<i className="text-neutral-600 w-5 h-5" data-lucide="chevron-right"></i>
</div>
</div>

<div className="group border border-neutral-800 p-6 md:p-8 rounded-xl hover:bg-neutral-900 transition-colors cursor-pointer flex flex-col md:flex-row gap-6 md:items-center justify-between">
<div className="flex gap-6 items-center">
<div className="text-neutral-500 font-mono text-sm w-16">03:00 PM</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-white group-hover:text-indigo-300 transition-colors">Live Demo: 0 to Published in 5 Minutes</h3>
<p className="text-neutral-400 text-sm mt-1">Real-time challenge using the Trupeer platform.</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="text-[10px] font-bold uppercase tracking-widest bg-neutral-800 px-3 py-1 rounded-full text-neutral-400">Demo Lab</span>
<i className="text-neutral-600 w-5 h-5" data-lucide="chevron-right"></i>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-32 relative overflow-hidden" id="tickets">
<div className="max-w-[1400px] mx-auto px-6 relative z-10">
<div className="bg-black rounded-2xl p-12 md:p-24 text-center text-white relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900/30 to-purple-900/30"></div>
<div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6">Ready to transform your product videos?</h2>
<p className="text-neutral-400 mb-10 text-lg">
                        Join 500+ product leaders in San Francisco. Early bird pricing ends soon.
                    </p>
<div className="flex flex-col md:flex-row gap-4 justify-center">
<button className="bg-white text-black px-8 py-4 rounded-full text-base font-semibold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
                            Get Tickets - $299 <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="px-8 py-4 rounded-full text-base font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors">
                            Download Prospectus
                        </button>
</div>
<p className="text-xs text-neutral-500 mt-6 uppercase tracking-widest">Team discounts available for groups of 3+</p>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-100 py-16">
<div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-neutral-900">
<div className="w-4 h-4 bg-black rounded-full"></div>
                TRUPEER.AI
            </div>
<div className="text-xs text-neutral-500">
                © 2025 Trupeer, Inc. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-neutral-400 hover:text-black transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-neutral-400 hover:text-black transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="text-neutral-400 hover:text-black transition-colors" href="#"><i className="w-4 h-4" data-lucide="youtube"></i></a>
</div>
</div>
</footer>


    </>
  );
}
