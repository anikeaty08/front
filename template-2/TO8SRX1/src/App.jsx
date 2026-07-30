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



  // Initialize Lucide icons
  lucide.createIcons();

  // Mobile menu toggle
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  const mobileNav = document.getElementById('mobileNav');
  
  menuBtn?.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
    const icon = menuBtn.querySelector('[data-lucide]');
    if (mobileNav.classList.contains('hidden')) {
      icon.setAttribute('data-lucide', 'menu');
    } else {
      icon.setAttribute('data-lucide', 'x');
    }
    lucide.createIcons();
  });

  // Trigger animations on load
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.querySelectorAll('[class*="animate-"]').forEach(el => {
        el.style.opacity = '1';
      });
    }, 100);
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
      

<div className="max-w-7xl mx-auto p-3 sm:p-6 lg:p-8">

<div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-2xl ring-1 ring-stone-200/50 overflow-hidden animate-fade-in-up" style={{opacity: `1`}}>

<header className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-stone-200/60 animate-fade-in-up animation-delay-100" style={{opacity: `1`}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-circle-dot lucide-brain w-[16px] h-[16px]" data-lucide="circle-dot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="1"></circle></svg>
</div>
<a className="text-sm font-bold tracking-tight text-stone-800 uppercase" href="#">Aura</a>
</div>
<button className="md:hidden text-stone-700 hover:text-stone-900 transition-colors p-2 rounded-lg hover:bg-stone-100" id="menuBtn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium" id="nav">
<a className="text-stone-600 hover:text-stone-900 transition-colors flex items-center gap-2" href="#">
<svg className="lucide lucide-home w-4 h-4" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
          Home
        </a>
<a className="text-stone-600 hover:text-stone-900 transition-colors flex items-center gap-2" href="#">
<svg className="lucide lucide-info w-4 h-4" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
          About
        </a>
<a className="flex items-center gap-2 font-semibold text-orange-600" href="#">Prompting<svg className="lucide lucide-settings w-4 h-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg></a>
<a className="text-stone-600 hover:text-stone-900 transition-colors flex items-center gap-2" href="#">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
          Contact
        </a>
</nav>
</header>

<div className="hidden md:hidden bg-stone-50 border-b border-stone-200" id="mobileNav">
<nav className="px-4 py-3 space-y-2">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-stone-600 hover:text-stone-900 hover:bg-white rounded-lg transition-all" href="#">
<svg className="lucide lucide-home w-4 h-4" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
          Home
        </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-stone-600 hover:text-stone-900 hover:bg-white rounded-lg transition-all" href="#">
<svg className="lucide lucide-info w-4 h-4" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
          About
        </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-orange-600 font-semibold bg-orange-50 rounded-lg" href="#">
<svg className="lucide lucide-settings w-4 h-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          Services
        </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-stone-600 hover:text-stone-900 hover:bg-white rounded-lg transition-all" href="#">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
          Contact
        </a>
</nav>
</div>

<section className="px-4 sm:px-6 lg:px-10 pt-8 pb-12 lg:pb-16">

<nav className="uppercase animate-fade-in-up animation-delay-200 text-xs text-stone-500 tracking-wider font-[Space_Mono] mb-6 space-x-2" style={{opacity: `1`}}>
<span className="hover:text-orange-600 transition-colors cursor-pointer">Home</span>
<svg className="lucide lucide-chevron-right w-3 h-3 inline" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<span className="hover:text-orange-600 transition-colors cursor-pointer">PROMPTING</span>
<svg className="lucide lucide-chevron-right inline w-[12px] h-[12px]" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `12px`, height: `12px`, color: `rgb(120, 113, 108)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<span className="text-orange-600">Prompt Engineering</span>
</nav>

<div className="mb-12 lg:mb-16">
<div className="flex gap-4 animate-fade-in-up animation-delay-300 mb-6 items-start" style={{opacity: `1`}}>
<div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-brain w-6 h-6 text-white" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
</div>
<div className="">
<h1 className="sm:text-4xl lg:text-5xl xl:text-6xl leading-none text-3xl font-semibold tracking-tighter mb-4">
              Prompt
              <span className="text-orange-600">Engineering</span>
</h1>
<div className="flex items-center gap-3 text-sm text-stone-600 font-[Space_Mono]">
<div className="flex items-center gap-2">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span>Est. 2022</span>
</div>
<span>•</span>
<div className="flex items-center gap-2">
<svg className="lucide lucide-award w-4 h-4" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<span className="">AI Partner Certified</span>
</div>
</div>
</div>
</div>

<div className="max-w-4xl animate-fade-in-up animation-delay-400" style={{opacity: `1`}}>
<p className="text-base sm:text-lg leading-relaxed font-[Space_Mono] mb-6 text-stone-700">
            From conversational AI to complex reasoning systems, we craft precision-engineered prompts that unlock the full potential of large language models across diverse applications and industries.
          </p>
<div className="flex flex-wrap gap-3">
<div className="flex gap-2 text-sm font-medium text-orange-700 bg-orange-50 rounded-full pt-1 pr-3 pb-1 pl-3 items-center">
<svg className="lucide lucide-check-circle w-4 h-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
              GPT-4 Optimized
            </div>
<div className="flex gap-2 text-sm font-medium text-blue-700 bg-blue-50 rounded-full pt-1 pr-3 pb-1 pl-3 items-center">
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
              Claude Compatible
            </div>
<div className="flex gap-2 text-sm font-medium text-green-700 bg-green-50 rounded-full pt-1 pr-3 pb-1 pl-3 items-center">
<svg className="lucide lucide-globe w-4 h-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
              Multi-Model Support
            </div>
</div>
</div>
</div>

<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">

<div className="group space-y-4 p-6 rounded-xl border border-stone-200 hover:border-orange-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-500" style={{opacity: `1`}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-message-square w-[20px] h-[20px]" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</div>
<h3 className="text-base font-bold tracking-tight">Conversational AI Design</h3>
</div>
<p className="text-sm leading-relaxed font-[Space_Mono] text-stone-600">
            We develop sophisticated dialogue systems with context awareness, personality consistency, and multi-turn conversation capabilities for chatbots and virtual assistants.
          </p>
<div className="flex items-center gap-2 text-xs text-orange-600 font-medium">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<span>Learn More</span>
</div>
</div>

<div className="group space-y-4 p-6 rounded-xl border border-stone-200 hover:border-orange-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-600" style={{opacity: `1`}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-zap w-5 h-5 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-base font-bold tracking-tight">Chain-of-Thought Reasoning</h3>
</div>
<p className="text-sm leading-relaxed font-[Space_Mono] text-stone-600">
            Our teams engineer complex reasoning chains that guide AI models through step-by-step problem solving, logical deduction, and analytical thinking processes.
          </p>
<div className="flex items-center gap-2 text-xs text-blue-600 font-medium">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<span className="">Learn More</span>
</div>
</div>

<div className="group space-y-4 p-6 rounded-xl border border-stone-200 hover:border-orange-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-700 sm:col-span-2 lg:col-span-1" style={{opacity: `1`}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-shield-check w-5 h-5 text-white" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-base font-bold tracking-tight">Safety & Alignment Testing</h3>
</div>
<p className="text-sm leading-relaxed font-[Space_Mono] text-stone-600">
            We implement rigorous testing protocols to ensure prompts generate safe, unbiased, and aligned outputs while maintaining effectiveness and user satisfaction.
          </p>
<div className="flex items-center gap-2 text-xs text-green-600 font-medium">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<span>Learn More</span>
</div>
</div>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
<div className="flex items-center gap-3 p-4 bg-stone-50 rounded-lg border border-stone-200 animate-fade-in-left animation-delay-500" style={{opacity: `1`}}>
<svg className="lucide lucide-code w-5 h-5 text-orange-600" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
<span className="text-sm font-medium">Template Creation</span>
</div>
<div className="flex items-center gap-3 p-4 bg-stone-50 rounded-lg border border-stone-200 animate-fade-in-left animation-delay-600" style={{opacity: `1`}}>
<svg className="lucide lucide-bar-chart w-5 h-5 text-blue-600" data-lucide="bar-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="20" y2="10"></line><line x1="18" x2="18" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="16"></line></svg>
<span className="text-sm font-medium">Performance Analysis</span>
</div>
<div className="flex items-center gap-3 p-4 bg-stone-50 rounded-lg border border-stone-200 animate-fade-in-left animation-delay-700" style={{opacity: `1`}}>
<svg className="lucide lucide-file-text w-5 h-5 text-green-600" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="text-sm font-medium">Best Practices</span>
</div>
<div className="flex items-center gap-3 p-4 bg-stone-50 rounded-lg border border-stone-200 animate-fade-in-left animation-delay-700" style={{opacity: `1`}}>
<svg className="lucide lucide-users w-5 h-5 text-purple-600" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-sm font-medium">Training</span>
</div>
</div>
</section>

<section className="bg-gradient-to-br from-orange-600 to-orange-700 text-orange-50 animate-fade-in-up animation-delay-600" style={{opacity: `1`}}>
<div className="grid lg:grid-cols-2">

<div className="p-6 sm:p-8 lg:p-12 space-y-8">
<div className="space-y-4">
<div className="flex items-center gap-3 mb-6">
<svg className="lucide lucide-target w-8 h-8 text-orange-200" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<h2 className="sm:text-3xl text-2xl font-medium tracking-tight">Our Methodology</h2>
</div>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 bg-orange-200/20 rounded-lg flex items-center justify-center">
<span className="text-sm font-bold">01</span>
</div>
<div className="">
<h4 className="font-bold mb-2">Iterative Prompt Refinement</h4>
<p className="text-sm text-orange-100 font-[Space_Mono]">Continuous testing and optimization for maximum effectiveness</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 bg-orange-200/20 rounded-lg flex items-center justify-center">
<span className="text-sm font-bold">02</span>
</div>
<div className="">
<h4 className="font-bold mb-2">Context-Aware Architecture</h4>
<p className="text-sm text-orange-100 font-[Space_Mono]">Every prompt considers task complexity and model capabilities</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 bg-orange-200/20 rounded-lg flex items-center justify-center">
<span className="text-sm font-bold">03</span>
</div>
<div>
<h4 className="font-bold mb-2">Scalable Prompt Systems</h4>
<p className="text-sm text-orange-100 font-[Space_Mono]">Designed for enterprise deployment and maintenance</p>
</div>
</div>
</div>
</div>
<div className="border-t border-orange-400/30 pt-6">
<p className="sm:text-2xl leading-tight text-xl font-medium mb-4">
              All prompts are optimized for accuracy, consistency, and ethical AI practices
            </p>
<p className="text-sm font-[Space_Mono] text-orange-100">
              Engineered for Intelligence. Built for Impact.
            </p>
</div>
</div>

<div className="relative overflow-hidden lg:min-h-[600px]">
<img alt="AI and machine learning visualization" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?w=2160&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 to-transparent"></div>

<div className="absolute bottom-6 left-6 right-6">
<div className="grid grid-cols-3 gap-4 text-center">
<div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
<div className="text-2xl font-black">1000+</div>
<div className="text-xs font-[Space_Mono] text-orange-100">Prompts Engineered</div>
</div>
<div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
<div className="text-2xl font-black">50+</div>
<div className="text-xs font-[Space_Mono] text-orange-100">AI Models Supported</div>
</div>
<div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
<div className="text-2xl font-black">95%</div>
<div className="text-xs font-[Space_Mono] text-orange-100">Accuracy Rate</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-orange-400/30 px-6 sm:px-8 lg:px-12 py-6">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-sm font-[Space_Mono]">
<svg className="lucide lucide-brain w-4 h-4" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
<span>Aura AI Solutions</span>
</div>
<div className="hidden sm:block w-px h-4 bg-orange-400/30"></div>
<div className="flex items-center gap-2 text-sm font-[Space_Mono]">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span>2024</span>
</div>
</div>
<div className="flex items-center gap-4 text-sm">
<a className="flex items-center gap-2 hover:text-orange-200 transition-colors" href="#">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>Contact Us</span>
</a>
<a className="flex items-center gap-2 hover:text-orange-200 transition-colors" href="#">
<svg className="lucide lucide-external-link w-4 h-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
<span>Portfolio</span>
</a>
</div>
</div>
</div>
</section>
</div>
</div>


    </>
  );
}
