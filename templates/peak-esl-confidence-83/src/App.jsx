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
50: '#fef8ec',
100: '#fbeccd',
200: '#f6d99a',
300: '#f0c062',
400: '#e5a12f',
500: '#e5a12f',
600: '#c27e1b',
700: '#9b5e16',
900: '#56320e',
},
accent: {
50: '#edeff3',
100: '#dce0e6',
200: '#bdc2cf',
300: '#9aa0b3',
400: '#6f7491',
500: '#4d506c',
600: '#3d4056',
800: '#262836',
900: '#1a1b24',
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: unobserve after revealing so it doesn't animate out and back in
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elementsToReveal = document.querySelectorAll('.reveal');
            elementsToReveal.forEach(el => observer.observe(el));
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
      

<nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto reveal active relative z-50">
<div className="flex items-center gap-3 cursor-pointer">
<img alt="Peak ESL Logo" className="h-10 w-auto object-contain" src="https://i.imgur.com/wTt6uJI.png"/>
</div>
<button className="hidden md:flex items-center gap-2 bg-white border border-slate-200 hover:border-brand-300 text-accent-600 hover:text-brand-600 px-5 py-2 rounded-full transition-all duration-300 font-medium text-sm shadow-sm hover:shadow-md group">
<span>Start Free Intro</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>

<button className="md:hidden text-accent-600">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</nav>

<section className="relative pt-8 pb-16 md:pt-20 md:pb-24 px-6 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none z-0">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-brand-200 rounded-full blur-[80px] md:blur-[120px] mix-blend-multiply animate-flow-shadow"></div>
</div>

<div className="blob bg-brand-100 w-64 md:w-96 h-64 md:h-96 rounded-full top-0 left-[-50px] md:left-[-100px] opacity-40"></div>
<div className="blob bg-accent-200 w-64 md:w-96 h-64 md:h-96 rounded-full bottom-0 right-[-50px] md:right-[-100px] opacity-30"></div>
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">

<div className="relative max-w-xl mx-auto md:mx-0 text-center md:text-left">
<div className="reveal active inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-brand-100 backdrop-blur-sm text-brand-700 text-xs font-medium mb-6 shadow-sm">
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
                    New confidence-first approach
                </div>
<h1 className="reveal active delay-100 text-4xl md:text-6xl font-semibold text-accent-900 tracking-tight leading-[1.1] mb-6">
                    Stop Feeling Invisible in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent-400">English Conversations</span>
</h1>
<p className="reveal active delay-200 text-base md:text-lg text-accent-500 leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
                    Speak English with confidence, clarity, and ease — even if you’ve tried apps, courses, or classes before and still feel stuck.
                </p>
<div className="reveal active delay-300 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
<button className="bg-brand-500 hover:bg-brand-600 text-white text-base font-medium px-8 py-4 rounded-full shadow-lg shadow-brand-200 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 w-full sm:w-auto">
                        Start Your Free Confidence Intro
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm text-accent-600 hover:bg-white font-medium transition-colors w-full sm:w-auto">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                        Watch How It Works
                    </button>
</div>
<p className="reveal active delay-400 mt-4 text-xs text-accent-300 flex items-center justify-center md:justify-start gap-1">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
                    No credit card required for intro
                </p>
</div>

<div className="relative h-[350px] md:h-[500px] w-full reveal active delay-200 mt-8 md:mt-0 flex justify-center">

<div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-3xl shadow-2xl shadow-brand-100/50 border border-white/50 p-2 flex flex-col animate-float">
<div className="w-full h-full rounded-2xl overflow-hidden bg-slate-50 relative">

<img alt="App Interface" className="w-full h-full object-cover object-top" src="https://i.imgur.com/xTOaOvM.gif"/>

<div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl"></div>
</div>
</div>

<div className="absolute left-2 md:-left-8 bottom-4 md:bottom-20 bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-slate-100 animate-float-delayed z-20 max-w-[200px] md:max-w-none">
<div className="flex items-center gap-3">
<div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
<iconify-icon icon="solar:cup-star-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs md:text-sm font-semibold text-accent-900">Confidence Unlocked</div>
<div className="text-[10px] md:text-xs text-accent-400">Keep going!</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full bg-white border-y border-slate-100 py-6 overflow-hidden relative mb-12">

<div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 z-10 bg-gradient-to-r from-stone-50 to-transparent"></div>
<div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 z-10 bg-gradient-to-l from-stone-50 to-transparent"></div>
<div className="flex animate-scroll w-max hover:pause">

<div className="flex gap-8 md:gap-12 items-center px-6">
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="Pakistan (Urdu)">
<iconify-icon icon="circle-flags:pk" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">Pakistan</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="India (Hindi, Punjabi)">
<iconify-icon icon="circle-flags:in" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">India</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="Indonesia (Bahasa Indonesia)">
<iconify-icon icon="circle-flags:id" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">Indonesia</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="Japan (Japanese)">
<iconify-icon icon="circle-flags:jp" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">Japan</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="South Korea (Korean)">
<iconify-icon icon="circle-flags:kr" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">South Korea</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="Poland (Polish)">
<iconify-icon icon="circle-flags:pl" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">Poland</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="Brazil (Portuguese)">
<iconify-icon icon="circle-flags:br" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">Brazil</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="Romania (Romanian)">
<iconify-icon icon="circle-flags:ro" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">Romania</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="Thailand (Thai)">
<iconify-icon icon="circle-flags:th" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">Thailand</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="Turkey (Turkish)">
<iconify-icon icon="circle-flags:tr" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">Turkey</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="United States of America (English)">
<iconify-icon icon="circle-flags:us" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">USA</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="South Africa (Afrikaans)">
<iconify-icon icon="circle-flags:za" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">South Africa</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="Egypt (Arabic)">
<iconify-icon icon="circle-flags:eg" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">Egypt</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="Bangladesh (Bengali)">
<iconify-icon icon="circle-flags:bd" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">Bangladesh</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="China (Chinese / Mandarin)">
<iconify-icon icon="circle-flags:cn" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">China</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="Germany (German)">
<iconify-icon icon="circle-flags:de" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">Germany</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="Spain (Spanish)">
<iconify-icon icon="circle-flags:es" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">Spain</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="Mexico (Spanish)">
<iconify-icon icon="circle-flags:mx" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">Mexico</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="Philippines (Filipino)">
<iconify-icon icon="circle-flags:ph" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">Philippines</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="France (French)">
<iconify-icon icon="circle-flags:fr" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">France</span>
</div>
</div>

<div className="flex gap-8 md:gap-12 items-center px-6">
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="Pakistan (Urdu)">
<iconify-icon icon="circle-flags:pk" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">Pakistan</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="India (Hindi, Punjabi)">
<iconify-icon icon="circle-flags:in" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">India</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="Indonesia (Bahasa Indonesia)">
<iconify-icon icon="circle-flags:id" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">Indonesia</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="Japan (Japanese)">
<iconify-icon icon="circle-flags:jp" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">Japan</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="South Korea (Korean)">
<iconify-icon icon="circle-flags:kr" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">South Korea</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="Poland (Polish)">
<iconify-icon icon="circle-flags:pl" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">Poland</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="Brazil (Portuguese)">
<iconify-icon icon="circle-flags:br" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">Brazil</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="Romania (Romanian)">
<iconify-icon icon="circle-flags:ro" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">Romania</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="Thailand (Thai)">
<iconify-icon icon="circle-flags:th" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">Thailand</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="Turkey (Turkish)">
<iconify-icon icon="circle-flags:tr" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">Turkey</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="United States of America (English)">
<iconify-icon icon="circle-flags:us" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">USA</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="South Africa (Afrikaans)">
<iconify-icon icon="circle-flags:za" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">South Africa</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="Egypt (Arabic)">
<iconify-icon icon="circle-flags:eg" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">Egypt</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="Bangladesh (Bengali)">
<iconify-icon icon="circle-flags:bd" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">Bangladesh</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="China (Chinese / Mandarin)">
<iconify-icon icon="circle-flags:cn" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">China</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="Germany (German)">
<iconify-icon icon="circle-flags:de" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">Germany</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="Spain (Spanish)">
<iconify-icon icon="circle-flags:es" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">Spain</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="Mexico (Spanish)">
<iconify-icon icon="circle-flags:mx" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">Mexico</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="Philippines (Filipino)">
<iconify-icon icon="circle-flags:ph" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">Philippines</span>
</div>
<div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-default" title="France (French)">
<iconify-icon icon="circle-flags:fr" width="28"></iconify-icon>
<span className="text-sm font-medium hidden md:inline">France</span>
</div>
</div>
</div>
</div>

<section className="py-12 px-6 max-w-5xl mx-auto">
<div className="reveal text-center mb-8">
<h2 className="text-2xl md:text-3xl font-semibold text-accent-900 tracking-tight">Experience the Peak ESL Difference</h2>
</div>
<div className="reveal delay-100 relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-brand-900/5 border border-slate-200 bg-slate-100">

<div className="relative pt-[56.25%] w-full">
<iframe allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" className="absolute top-0 left-0 w-full h-full" frameborder="0" src="https://player.vimeo.com/video/1156730473?h=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="Peak ESL Introduction Video">
</iframe>
</div>
</div>
</section>

<section className="py-12 md:py-20 px-6 max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-8 md:gap-16">

<div className="reveal bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-red-200"></div>
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:cloud-storm-linear" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold text-accent-900 tracking-tight">Does This Sound Like You?</h2>
</div>
<ul className="space-y-4">
<li className="flex gap-3 text-accent-500 items-start">
<iconify-icon className="text-red-400 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>You understand English, but <strong className="font-semibold text-accent-800">freeze</strong> when it’s time to speak.</span>
</li>
<li className="flex gap-3 text-accent-500 items-start">
<iconify-icon className="text-red-400 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>You worry about being judged or misunderstood.</span>
</li>
<li className="flex gap-3 text-accent-500 items-start">
<iconify-icon className="text-red-400 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>You avoid meetings, calls, or conversations.</span>
</li>
<li className="flex gap-3 text-accent-500 items-start">
<iconify-icon className="text-red-400 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>You feel your English is holding back your career.</span>
</li>
</ul>
<div className="mt-8 pt-8 border-t border-slate-100 text-center">
<p className="text-accent-300 italic font-medium">You’re not broken — you just haven’t had the right support.</p>
</div>
</div>

<div className="reveal delay-200 bg-brand-50/50 rounded-3xl p-8 md:p-12 shadow-sm border border-brand-100 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-brand-400"></div>
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-white text-brand-600 flex items-center justify-center shadow-sm shrink-0">
<iconify-icon icon="solar:sun-2-linear" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold text-accent-900 tracking-tight">Now Imagine This Instead…</h2>
</div>
<ul className="space-y-4">
<li className="flex gap-3 text-accent-800 items-start">
<iconify-icon className="text-brand-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Speaking clearly without overthinking every word.</span>
</li>
<li className="flex gap-3 text-accent-800 items-start">
<iconify-icon className="text-brand-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Feeling confident in high-stakes meetings.</span>
</li>
<li className="flex gap-3 text-accent-800 items-start">
<iconify-icon className="text-brand-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Being understood the first time, every time.</span>
</li>
<li className="flex gap-3 text-accent-800 items-start">
<iconify-icon className="text-brand-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Finally <strong className="font-semibold">enjoying</strong> English instead of fearing it.</span>
</li>
</ul>
<div className="absolute -bottom-10 -right-10 text-brand-200 opacity-50">
<iconify-icon icon="solar:emoji-funny-circle-linear" width="200"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="reveal text-center mb-12 md:mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-accent-900 tracking-tight mb-4">A Simpler, More Human Way to Learn</h2>
<p className="text-accent-400 text-lg">Forget boring textbooks. We focus on interaction, support, and real-life usage.</p>
</div>
<div className="grid md:grid-cols-3 gap-12 md:gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>

<div className="reveal delay-100 flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-white border border-slate-100 shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<div className="w-12 h-12 rounded-full bg-accent-50 text-accent-500 flex items-center justify-center">
<iconify-icon icon="solar:chat-round-line-linear" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-semibold text-accent-900 mb-3">1. Live, Supportive Coaching</h3>
<p className="text-accent-400 leading-relaxed px-4">Real conversations with real people — not just recorded lessons or grammar drills.</p>
</div>

<div className="reveal delay-200 flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-white border border-slate-100 shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<div className="w-12 h-12 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center">
<iconify-icon icon="solar:briefcase-linear" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-semibold text-accent-900 mb-3">2. Practical, Real-World English</h3>
<p className="text-accent-400 leading-relaxed px-4">Learn what you actually need for your work, your travel, and your life.</p>
</div>

<div className="reveal delay-300 flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-white border border-slate-100 shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<div className="w-12 h-12 rounded-full bg-brand-400 text-white flex items-center justify-center shadow-md shadow-brand-200">
<iconify-icon icon="solar:rocket-2-linear" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-semibold text-accent-900 mb-3">3. Confidence-First Progress</h3>
<p className="text-accent-400 leading-relaxed px-4">We focus on how you feel speaking — removing the fear of making mistakes.</p>
</div>
</div>
<div className="mt-16 text-center reveal delay-400">
<button className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-medium px-8 py-4 rounded-full transition-all shadow-xl shadow-accent-200 w-full sm:w-auto justify-center">
                    Start Free — No Pressure
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-16 md:py-20 px-6 max-w-7xl mx-auto">
<div className="mb-12 reveal">
<h2 className="text-3xl font-semibold text-accent-900 tracking-tight text-center">Why Students Love Peak ESL</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="reveal delay-100 bg-white p-6 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
<div className="w-12 h-12 rounded-full bg-accent-50 text-accent-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:microphone-2-linear" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-accent-900 mb-2">Live Pronunciation &amp; Speaking Feedback</h4>
<p className="text-sm text-accent-400">Get immediate feedback as you speak, so you know exactly what to adjust in real time — not after the moment has passed. This removes guesswork and helps you build confidence faster.</p>
</div>

<div className="reveal delay-200 bg-white p-6 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
<div className="w-12 h-12 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-accent-900 mb-2">Practice Real-World English</h4>
<p className="text-sm text-accent-400">Speak in natural, practical conversations designed around real situations — meetings, calls, travel, and daily life — so English feels fluent and usable, not scripted or robotic.</p>
</div>

<div className="reveal delay-300 bg-white p-6 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
<div className="w-12 h-12 rounded-full bg-red-50 text-red-400 flex items-center justify-center mb-4">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-accent-900 mb-2">Guided Human Coaching</h4>
<p className="text-sm text-accent-400">Receive support from experienced coaches who understand the challenges of speaking English. You’ll always know what to work on next, without feeling embarrassed or judged.</p>
</div>

<div className="reveal delay-400 bg-white p-6 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
<div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-4">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-accent-900 mb-2">Visible Progress &amp; Confidence Tracking</h4>
<p className="text-sm text-accent-400">Track your speaking progress and confidence over time, so you can clearly see improvement week by week and stay motivated as your skills grow.</p>
</div>
</div>
<div className="mt-12 text-center reveal delay-400">
<p className="text-lg font-medium text-accent-500">Designed to build confidence first — accuracy follows naturally.</p>
</div>
</section>

<section className="py-16 md:py-20 bg-brand-50 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-brand-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="reveal text-3xl font-semibold text-accent-900 tracking-tight text-center mb-12 md:mb-16">Real People. Real Confidence.</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="reveal delay-100 bg-white p-8 rounded-3xl shadow-sm">
<div className="flex items-center gap-1 text-brand-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-accent-600 mb-6 text-lg leading-relaxed">"Before Peak ESL, I avoided speaking in meetings. Now I actually enjoy conversations and feel like myself again."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-accent-400">ML</div>
<div>
<div className="text-sm font-semibold text-accent-900">Maria L.</div>
<div className="text-xs text-accent-300">Brazil • Software Engineer</div>
</div>
</div>
</div>

<div className="reveal delay-200 bg-white p-8 rounded-3xl shadow-sm transform md:-translate-y-4">
<div className="flex items-center gap-1 text-brand-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-accent-600 mb-6 text-lg leading-relaxed">"I tried so many apps. Nothing worked until this. The coaches make you feel so safe to make mistakes."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-accent-400">TK</div>
<div>
<div className="text-sm font-semibold text-accent-900">Takeshi K.</div>
<div className="text-xs text-accent-300">Japan • Project Manager</div>
</div>
</div>
</div>

<div className="reveal delay-300 bg-white p-8 rounded-3xl shadow-sm">
<div className="flex items-center gap-1 text-brand-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-accent-600 mb-6 text-lg leading-relaxed">"My hesitation is gone. I just got a promotion because I finally spoke up about my ideas."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-accent-400">EA</div>
<div>
<div className="text-sm font-semibold text-accent-900">Elena A.</div>
<div className="text-xs text-accent-300">Spain • Designer</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 px-6 max-w-7xl mx-auto">
<div className="reveal bg-accent-500 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center gap-12 shadow-2xl shadow-accent-200">

<div className="absolute top-0 right-0 w-96 h-96 bg-brand-400 rounded-full mix-blend-overlay opacity-20 blur-3xl"></div>
<div className="flex-1 relative z-10 text-center md:text-left">
<div className="inline-block px-3 py-1 rounded-full bg-accent-600 border border-accent-400 text-brand-200 text-xs font-medium mb-4">
                    Motivation Built-In
                </div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Learning That Feels Encouraging — Not Stressful</h2>
<p className="text-accent-200 text-lg mb-8">We celebrate progress, not perfection. Every step forward builds momentum and confidence.</p>
<div className="flex flex-wrap gap-4 justify-center md:justify-start">
<div className="flex items-center gap-2 bg-accent-600/50 px-4 py-2 rounded-full border border-accent-400">
<iconify-icon className="text-brand-400" icon="solar:fire-linear" width="20"></iconify-icon>
<span className="text-white text-sm font-medium">Daily Streaks</span>
</div>
<div className="flex items-center gap-2 bg-accent-600/50 px-4 py-2 rounded-full border border-accent-400">
<iconify-icon className="text-brand-300" icon="solar:cup-star-linear" width="20"></iconify-icon>
<span className="text-white text-sm font-medium">Confidence Milestones</span>
</div>
</div>
</div>

<div className="flex-1 w-full max-w-md flex justify-center relative z-10">
<img alt="Motivation Character" className="w-full h-auto max-w-sm object-contain drop-shadow-2xl animate-float" src="https://i.imgur.com/W03OZ8T.png"/>
</div>
</div>
</section>

<section className="py-20 md:py-24 px-6 text-center">
<div className="max-w-3xl mx-auto">
<h2 className="reveal text-4xl md:text-5xl font-semibold text-accent-900 tracking-tight mb-6">Your Confidence Is Closer Than You Think</h2>
<p className="reveal delay-100 text-lg md:text-xl text-accent-500 mb-10">You don’t need perfect English — you need the confidence to use it.</p>
<button className="reveal delay-200 bg-brand-500 hover:bg-brand-600 text-white text-lg font-medium px-10 py-5 rounded-full shadow-xl shadow-brand-200 transition-all transform hover:-translate-y-1 inline-flex items-center gap-3 w-full sm:w-auto justify-center">
                Start Your Free Confidence Intro Today
                <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<p className="reveal delay-300 mt-6 text-accent-300 font-medium">No pressure. No judgment. Just real support.</p>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
<div className="flex items-center gap-2 justify-center md:justify-start">
<img alt="Peak ESL Logo" className="h-8 w-auto object-contain" src="https://i.imgur.com/wTt6uJI.png"/>
<span className="text-accent-900 font-bold tracking-tight">PEAK ESL</span>
</div>
<p className="text-accent-300 text-sm">© Peak ESL. Helping learners speak English with confidence.</p>
</div>
</footer>



    </>
  );
}
