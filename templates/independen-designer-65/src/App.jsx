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



// Theme Logic - Default to Dark
(function() {
// Check if explicitly set to light, otherwise default to dark
if (localStorage.getItem('theme') === 'light') {
document.documentElement.classList.remove('dark');
} else {
document.documentElement.classList.add('dark');
}
})();



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


    // Theme Toggle Logic
    const themeBtn = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('icon-sun');
    const moonIcon = document.getElementById('icon-moon');
    const html = document.documentElement;

    function updateIcons() {
      // Logic: If dark class is present, we are in dark mode. 
      // Show Sun icon (to switch to light). Hide Moon.
      if (html.classList.contains('dark')) {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
      } else {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
      }
    }

    themeBtn.addEventListener('click', () => {
      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
      updateIcons();
    });

    // Initial Icon State check
    updateIcons();
  
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
      

<div className="aura-background-component top-0 w-full h-screen absolute z-10 opacity-60" data-alpha-mask="71" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 71%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 71%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div></div>

<div className="max-w-[1440px] mx-auto relative dark:bg-[#050505] transition-colors duration-300 shadow-2xl bg-black shadow-white/5">

<nav className="dark:border-white/10 dark:bg-[#050505]/80 sticky z-50 bg-black/80 opacity-80 w-full h-20 border-gray-800 border-b top-0 backdrop-blur-md">
<div className="grid grid-cols-12 gap-6 h-full max-w-[1200px] mr-auto ml-auto pr-6 pl-6 gap-x-6 gap-y-6 items-center">

<div className="col-span-4 flex items-center">
<a className="dark:text-white font-semibold tracking-tight text-lg flex items-center gap-2 text-gray-100" href="#">
<span className="w-5 h-5 bg-gradient-to-br rounded-sm from-blue-600 to-purple-400"></span>
            IriFlux Studio
          </a>
</div>

<div className="col-span-5 hidden md:flex gap-8 dark:text-gray-400 text-sm font-medium text-gray-500 gap-x-8 gap-y-8 items-center">
<a className="dark:hover:text-white transition-colors hover:text-gray-100" href="/page1-home">home</a>
<a className="dark:hover:text-white transition-colors hover:text-gray-100" href="/page2-work">Work</a>
<a className="dark:hover:text-white transition-colors hover:text-gray-100" href="/page3-playground">Playground</a>
<a className="dark:hover:text-white transition-colors hover:text-gray-100" href="/page4-store">Store</a>
<a <="" div="" href="/page5-start-project"></a></div>

<div className="col-span-8 md:col-span-3 flex justify-end items-center gap-3">

<button aria-label="Toggle Dark Mode" className="p-2 rounded-full dark:hover:bg-white/10 dark:text-gray-300 transition-colors hover:bg-gray-900 text-gray-400" id="theme-toggle">
<span className="" id="icon-sun">

<svg aria-hidden="true" className="" data-icon="lucide:sun" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>
</span>
<span className="hidden" id="icon-moon">

<svg aria-hidden="true" data-icon="lucide:moon" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</span>
</button>
<a className="dark:text-gray-400 dark:hover:text-white hidden lg:block transition-colors hover:text-gray-100 text-xs font-medium text-gray-500" href="/page6-client-dashboard">Client Login</a>
<a className="dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors whitespace-nowrap hover:bg-gray-300 text-xs font-medium text-black tracking-wide bg-gray-100 rounded-lg pt-2 pr-4 pb-2 pl-4" href="/page5-start-project">
            Start a Project
          </a>
</div>
</div>
</nav>

<section className="min-h-[820px] flex overflow-hidden lg:py-0 w-full h-auto pt-24 pb-24 relative items-center">

<div className="z-0 pointer-events-none absolute top-0 right-0 bottom-0 left-0" style={{}}>
<img alt="Abstract 3D hero background" className="dark:opacity-40 opacity-90 w-full h-full object-cover" loading="eager" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30264618-635a-4db7-a8d7-ec28d180853b_3840w.webp"/>
<div className="absolute inset-0 dark:bg-[#050505]/50 bg-black/90"></div>
<div className="absolute inset-0 bg-gradient-to-r to-transparent dark:from-[#050505] dark:via-[#050505]/40 dark:to-transparent from-black via-black/40">
</div>
</div>
<div className="max-w-[1200px] mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10 h-full items-center">

<div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
<h1 className="md:text-6xl lg:text-[64px] leading-[1.05] dark:text-white text-5xl font-bold tracking-tighter mb-6 text-gray-100">
        Design + Code that ships measurable outcomes.
      </h1>
<p className="text-lg md:text-[18px] leading-[1.55] font-normal dark:text-gray-400 max-w-xl mb-8 text-gray-400">
        IriFlux Works is an independent design + creative technology practice building interactive product
        experiences—from concept to production.
      </p>
<ul className="flex flex-col gap-2 mb-10">
<li className="flex items-center gap-3 text-sm dark:text-gray-300 text-gray-300">
<svg aria-hidden="true" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
          Design systems &amp; UI engineering
        </li>
<li className="flex items-center gap-3 text-sm dark:text-gray-300 text-gray-300">
<svg aria-hidden="true" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
          WebGL, motion, and interaction
        </li>
<li className="flex items-center gap-3 text-sm dark:text-gray-300 text-gray-300">
<svg aria-hidden="true" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
          AI-augmented workflows (human-led craft)
        </li>
</ul>
<div className="flex flex-wrap items-center gap-4 mb-12">
<button className="dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors hover:bg-gray-300 text-sm font-medium text-black bg-gray-100 rounded-xl pt-3 pr-6 pb-3 pl-6 cursor-pointer" onclick="window.location.href='/page2-work'" role="button">
              View Work
            </button>
<button className="dark:text-white dark:border-white/20 dark:hover:bg-white/5 transition-colors hover:bg-gray-950 text-sm font-medium text-gray-100 border-gray-800 border rounded-xl pt-3 pr-6 pb-3 pl-6 cursor-pointer" onclick="window.location.href='/page5-start-project'" role="button">
              Start a Project
            </button>
</div>
<div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 dark:text-gray-500 font-medium">
<span className="">Based in Bordeaux</span>
<span className="dark:text-gray-700 text-gray-700">•</span>
<span className="">Available for 2–6 week engagements</span>
<span className="dark:text-gray-700 text-gray-700">•</span>
<span className="dark:text-blue-400 text-blue-400">Typical response in 24 hours</span>
</div>
</div>

<div className="col-span-12 lg:col-span-5 hidden lg:flex h-full items-center justify-center">

<div className="w-full h-auto aspect-[3/4] rounded-[28px] relative overflow-hidden shadow-2xl dark:shadow-none border dark:border-white/10 shadow-gray-800/50 border-gray-800">
<img alt="Abstract accent object" className="transform hover:scale-105 transition-transform duration-700 w-full h-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f1eb4310-9ee9-496d-b245-ba94d47ad9ee_1600w.webp"/>
</div>
</div>
</div>
</section>

<section className="py-12 border-y dark:border-white/5 dark:bg-[#050505] border-gray-900 bg-black">
<div className="max-w-[1200px] mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-8">
<h3 className="text-xl md:text-2xl font-semibold tracking-tight dark:text-white max-w-sm text-center md:text-left text-gray-100">
            Shipped work across fintech, SaaS, and commerce.
          </h3>
<div className="flex flex-wrap justify-center gap-3">
<span className="px-4 py-2 rounded-full border dark:border-white/10 dark:bg-white/5 text-sm dark:text-gray-300 border-gray-800 bg-gray-950 text-gray-400">Fintech</span>
<span className="px-4 py-2 rounded-full border dark:border-white/10 dark:bg-white/5 text-sm dark:text-gray-300 border-gray-800 bg-gray-950 text-gray-400">SaaS</span>
<span className="px-4 py-2 rounded-full border dark:border-white/10 dark:bg-white/5 text-sm dark:text-gray-300 border-gray-800 bg-gray-950 text-gray-400">E-commerce</span>
<span className="px-4 py-2 rounded-full border dark:border-white/10 dark:bg-white/5 text-sm dark:text-gray-300 border-gray-800 bg-gray-950 text-gray-400">Design Systems</span>
<span className="px-4 py-2 rounded-full border dark:border-white/10 dark:bg-white/5 text-sm dark:text-gray-300 border-gray-800 bg-gray-950 text-gray-400">Motion</span>
<span className="px-4 py-2 rounded-full border dark:border-white/10 dark:bg-white/5 text-sm dark:text-gray-300 border-gray-800 bg-gray-950 text-gray-400">WebGL</span>
</div>
</div>
</div>
</section>

<section className="py-24 dark:bg-[#050505] bg-black">
<div className="max-w-[1200px] mx-auto px-6">
<div className="grid grid-cols-12 gap-6 mb-16 items-end">
<div className="col-span-12 lg:col-span-8">
<h2 className="text-4xl lg:text-[40px] leading-[1.15] font-semibold tracking-tight dark:text-white text-gray-100">
              From messy problems to measurable wins.
            </h2>
</div>
<div className="col-span-12 lg:col-span-4">
<p className="text-lg text-gray-500 dark:text-gray-400">
              I design the system, build the interaction, and ship the outcome—without handoff chaos.
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="col-span-1 md:col-span-4 group">
<div className="dark:bg-white/5 border dark:border-white/10 p-6 rounded-[20px] h-full transition-colors dark:hover:border-white/20 bg-gray-950 border-gray-800 hover:border-gray-700">

<div className="w-full aspect-square rounded-xl mb-6 overflow-hidden dark:bg-white/5 bg-gray-800">
<img alt="Product Design Abstract" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d80e2d67-ad8d-4d05-be41-22ae513a41a6_800w.webp"/>
</div>
<h3 className="text-xl font-semibold dark:text-white tracking-tight mb-3 text-gray-100">Product Design</h3>
<p className="text-gray-500 dark:text-gray-400 mb-6 text-sm leading-relaxed">Flows, UI systems, and prototypes that speed up decisions and reduce risk.</p>
<ul className="space-y-2 border-t dark:border-white/5 pt-4 border-gray-800">
<li className="text-sm dark:text-gray-400 flex items-center gap-2 text-gray-400"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> User flows</li>
<li className="text-sm dark:text-gray-400 flex items-center gap-2 text-gray-400"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> UI kit</li>
<li className="text-sm dark:text-gray-400 flex items-center gap-2 text-gray-400"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Build-ready specs</li>
</ul>
</div>
</div>

<div className="col-span-1 md:col-span-4 group">
<div className="dark:bg-white/5 border dark:border-white/10 p-6 rounded-[20px] h-full transition-colors dark:hover:border-white/20 bg-gray-950 border-gray-800 hover:border-gray-700">

<div className="w-full aspect-square rounded-xl mb-6 overflow-hidden dark:bg-white/5 bg-gray-800">
<img alt="Creative Tech Abstract" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a8f7509f-b9c0-4056-af11-e4562f84620f_800w.webp"/>
</div>
<h3 className="text-xl font-semibold dark:text-white tracking-tight mb-3 text-gray-100">Creative Technology</h3>
<p className="text-gray-500 dark:text-gray-400 mb-6 text-sm leading-relaxed">Web-native interaction: motion, 3D, and micro-delight that stays performant.</p>
<ul className="space-y-2 border-t dark:border-white/5 pt-4 border-gray-800">
<li className="text-sm dark:text-gray-400 flex items-center gap-2 text-gray-400"><span className="w-1 h-1 bg-purple-500 rounded-full"></span> Interactive demos</li>
<li className="text-sm dark:text-gray-400 flex items-center gap-2 text-gray-400"><span className="w-1 h-1 bg-purple-500 rounded-full"></span> Production components</li>
<li className="text-sm dark:text-gray-400 flex items-center gap-2 text-gray-400"><span className="w-1 h-1 bg-purple-500 rounded-full"></span> Performance tuning</li>
</ul>
</div>
</div>

<div className="col-span-1 md:col-span-4 group">
<div className="dark:bg-white/5 border dark:border-white/10 p-6 rounded-[20px] h-full transition-colors dark:hover:border-white/20 bg-gray-950 border-gray-800 hover:border-gray-700">

<div className="w-full aspect-square rounded-xl mb-6 overflow-hidden dark:bg-white/5 bg-gray-800">
<img alt="Outcomes Abstract" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/959e3879-9b81-4fcb-ac26-af72d823bb14_800w.webp"/>
</div>
<h3 className="text-xl font-semibold dark:text-white tracking-tight mb-3 text-gray-100">Outcomes</h3>
<p className="text-gray-500 dark:text-gray-400 mb-6 text-sm leading-relaxed">Design tied to metrics—activation, conversion, retention, time-to-value.</p>
<ul className="space-y-2 border-t dark:border-white/5 pt-4 border-gray-800">
<li className="text-sm dark:text-gray-400 flex items-center gap-2 text-gray-400"><span className="w-1 h-1 bg-pink-500 rounded-full"></span> Experiment plan</li>
<li className="text-sm dark:text-gray-400 flex items-center gap-2 text-gray-400"><span className="w-1 h-1 bg-pink-500 rounded-full"></span> A/B variants</li>
<li className="text-sm dark:text-gray-400 flex items-center gap-2 text-gray-400"><span className="w-1 h-1 bg-pink-500 rounded-full"></span> Results snapshot</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t dark:border-white/5 dark:bg-[#050505] border-gray-900 bg-gray-950/50" id="work">
<div className="max-w-[1200px] mx-auto px-6">
<div className="grid grid-cols-12 gap-6 mb-12 items-end">
<div className="col-span-12 lg:col-span-8">
<h2 className="text-4xl font-semibold tracking-tight dark:text-white mb-2 text-gray-100">
              Case studies with receipts.
            </h2>
<p className="text-xl text-gray-500 dark:text-gray-400">Not just visuals—process, trade-offs, and outcomes.</p>
</div>
<div className="col-span-12 lg:col-span-4 flex justify-start lg:justify-end">
<a className="text-sm font-medium dark:text-white hover:opacity-70 flex items-center gap-1 text-gray-100" href="#">
                View all work
                <svg aria-hidden="true" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">

<div className="col-span-1 md:col-span-4 flex flex-col group cursor-pointer">

<div className="w-full aspect-[4/3] rounded-[20px] overflow-hidden border dark:border-white/10 mb-5 relative border-gray-800">
<img alt="Fintech Case" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4e046b09-d276-462f-ab32-a6ea1ec179c2_800w.webp"/>
</div>
<div className="flex flex-wrap gap-2 mb-3">
<span className="px-2 py-1 rounded-md dark:bg-white/10 border dark:border-white/10 text-xs font-medium dark:text-blue-300 bg-black border-gray-800 text-blue-300">+28% sign-up completion</span>
<span className="px-2 py-1 rounded-md dark:bg-white/10 border dark:border-white/10 text-xs font-medium dark:text-blue-300 bg-black border-gray-800 text-blue-300">−17% time-to-first-action</span>
</div>
<h3 className="text-xl font-semibold dark:text-white mb-2 group-hover:text-blue-500 transition-colors text-gray-100">Fintech Rebrand + Activation</h3>
<p className="text-sm dark:text-gray-400 mb-4 line-clamp-2 text-gray-400">Rebuilt the brand system and onboarding flow to reduce drop-off and increase first value.</p>
<div className="flex gap-2 text-xs dark:text-gray-500 text-gray-600">
<span>Fintech</span>•<span>Design System</span>•<span>Motion</span>
</div>
</div>

<div className="col-span-1 md:col-span-4 flex flex-col group cursor-pointer">

<div className="w-full aspect-[4/3] rounded-[20px] overflow-hidden border dark:border-white/10 mb-5 relative border-gray-800">
<img alt="SaaS Case" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2877e4ca-8b06-45d8-91af-ad8fe6f56b2e_800w.webp"/>
</div>
<div className="flex flex-wrap gap-2 mb-3">
<span className="px-2 py-1 rounded-md dark:bg-white/10 border dark:border-white/10 text-xs font-medium dark:text-blue-300 bg-black border-gray-800 text-blue-300">+22% activation</span>
<span className="px-2 py-1 rounded-md dark:bg-white/10 border dark:border-white/10 text-xs font-medium dark:text-blue-300 bg-black border-gray-800 text-blue-300">+14% week-1 retention</span>
</div>
<h3 className="text-xl font-semibold dark:text-white mb-2 group-hover:text-blue-500 transition-colors text-gray-100">SaaS Onboarding to “Aha”</h3>
<p className="text-sm dark:text-gray-400 mb-4 line-clamp-2 text-gray-400">Guided setup and progressive disclosure to move users from account creation to activation.</p>
<div className="flex gap-2 text-xs dark:text-gray-500 text-gray-600">
<span>SaaS</span>•<span>UX</span>•<span>Experimentation</span>
</div>
</div>

<div className="col-span-1 md:col-span-4 flex flex-col group cursor-pointer">

<div className="w-full aspect-[4/3] rounded-[20px] overflow-hidden border dark:border-white/10 mb-5 relative border-gray-800">
<img alt="Commerce Case" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6626b55a-e813-48c0-bc51-d3bce881db64_800w.webp"/>
</div>
<div className="flex flex-wrap gap-2 mb-3">
<span className="px-2 py-1 rounded-md dark:bg-white/10 border dark:border-white/10 text-xs font-medium dark:text-blue-300 bg-black border-gray-800 text-blue-300">−19% checkout abandonment</span>
<span className="px-2 py-1 rounded-md dark:bg-white/10 border dark:border-white/10 text-xs font-medium dark:text-blue-300 bg-black border-gray-800 text-blue-300">+11% revenue per visitor</span>
</div>
<h3 className="text-xl font-semibold dark:text-white mb-2 group-hover:text-blue-500 transition-colors text-gray-100">Commerce Checkout Simplification</h3>
<p className="text-sm dark:text-gray-400 mb-4 line-clamp-2 text-gray-400">Reduced friction at payment step and improved mobile-first performance on core checkout components.</p>
<div className="flex gap-2 text-xs dark:text-gray-500 text-gray-600">
<span>E-commerce</span>•<span>CRO</span>•<span>UI Engineering</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 dark:bg-[#050505] bg-black">
<div className="max-w-[1200px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="col-span-1 lg:col-span-5 flex flex-col justify-center">
<h2 className="text-4xl font-semibold tracking-tight dark:text-white mb-4 text-gray-100">
              Trusted by teams that ship.
            </h2>
<p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
              Clear process, strong craft, measurable outcomes.
            </p>
</div>

<div className="col-span-1 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="dark:bg-white/5 p-6 rounded-[20px] flex flex-col gap-4 bg-gray-950">
<div className="flex items-center gap-3">

<img alt="Maya Chen" className="w-12 h-12 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/73ef424c-0372-4ff0-8523-597978d5013d_320w.webp"/>
<div className="">
<div className="text-sm font-semibold dark:text-white text-gray-100">Maya Chen</div>
<div className="text-xs text-gray-500">Head of Product, LatticePay</div>
</div>
</div>
<p className="text-sm dark:text-gray-300 text-gray-400">“IriFlux turned a messy onboarding into a crisp system our engineers loved. We shipped in 3 weeks and saw sign-up completion jump immediately.”</p>
<div className="pt-2 border-t dark:border-white/10 text-xs font-medium dark:text-blue-400 border-gray-800 text-blue-400">Outcome: +28% sign-up completion in 30 days</div>
</div>

<div className="dark:bg-white/5 p-6 rounded-[20px] flex flex-col gap-4 bg-gray-950">
<div className="flex items-center gap-3">

<img alt="Daniel Reyes" className="w-12 h-12 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bef2a5e4-cb46-4040-9d48-5cd9cb60b5e0_320w.webp"/>
<div>
<div className="text-sm font-semibold dark:text-white text-gray-100">Daniel Reyes</div>
<div className="text-xs text-gray-500">Design Director, Northline Studio</div>
</div>
</div>
<p className="text-sm dark:text-gray-300 text-gray-400">“The motion and interaction work felt premium without hurting performance. The new components became our internal standard.”</p>
<div className="pt-2 border-t dark:border-white/10 text-xs font-medium dark:text-blue-400 border-gray-800 text-blue-400">Outcome: −19% checkout abandonment after launch</div>
</div>

<div className="dark:bg-white/5 p-6 rounded-[20px] flex flex-col gap-4 bg-gray-950">
<div className="flex items-center gap-3">

<img alt="Aisha Patel" className="w-12 h-12 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1de342c5-7d27-4e0a-adb3-373a54968859_320w.webp"/>
<div className="">
<div className="text-sm font-semibold dark:text-white text-gray-100">Aisha Patel</div>
<div className="text-xs text-gray-500">Growth Lead, CloudHaven SaaS</div>
</div>
</div>
<p className="text-sm dark:text-gray-300 text-gray-400">“Strong taste, even stronger reasoning. Every design decision was tied to a metric and a build plan.”</p>
<div className="pt-2 border-t dark:border-white/10 text-xs font-medium dark:text-blue-400 border-gray-800 text-blue-400">Outcome: +22% activation, +14% week-1 retention</div>
</div>

<div className="dark:bg-white/5 p-6 rounded-[20px] flex flex-col gap-4 bg-gray-950">
<div className="flex items-center gap-3">

<img alt="Ethan Brooks" className="w-12 h-12 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bbad79a6-b226-4f04-92c1-270175d89b6d_320w.webp"/>
<div className="">
<div className="text-sm font-semibold dark:text-white text-gray-100">Ethan Brooks</div>
<div className="text-xs text-gray-500">VP Product, Meridian Commerce</div>
</div>
</div>
<p className="text-sm dark:text-gray-300 text-gray-400">“The case study process was as impressive as the final UI—research, prototypes, and results all documented clearly.”</p>
<div className="pt-2 border-t dark:border-white/10 text-xs font-medium dark:text-blue-400 border-gray-800 text-blue-400">Outcome: +11% revenue per visitor in 6 weeks</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t dark:border-white/5 border-gray-900" id="playground">
<div className="max-w-[1200px] mx-auto px-6">
<div className="grid grid-cols-12 gap-6 mb-12 items-end">
<div className="col-span-12 lg:col-span-8">
<h2 className="text-4xl font-semibold tracking-tight dark:text-white mb-2 text-gray-100">The Playground</h2>
<p className="text-lg text-gray-500 dark:text-gray-400">Shaders, motion studies, and interactive experiments—where new ideas become reusable components.</p>
</div>
<div className="col-span-12 lg:col-span-4 flex justify-start lg:justify-end">
<a className="dark:text-white hover:opacity-70 flex items-center gap-1 text-sm font-medium text-gray-100" href="#">
               Explore Playground
               <svg aria-hidden="true" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-6">

<div className="aspect-square rounded-[20px] overflow-hidden dark:bg-white/5 border dark:border-white/10 group cursor-pointer bg-gray-900 border-gray-800">
<img alt="Playground 1" className="group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/359c92a2-37a3-4a60-b849-b9057c3769ba_800w.webp"/>
</div>

<div className="aspect-square rounded-[20px] overflow-hidden dark:bg-white/5 border dark:border-white/10 group cursor-pointer bg-gray-900 border-gray-800">
<img alt="Playground 2" className="group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f2b5b594-e6b7-4f5f-b060-756b52d2aaa1_800w.webp"/>
</div>

<div className="aspect-square rounded-[20px] overflow-hidden dark:bg-white/5 border dark:border-white/10 group cursor-pointer bg-gray-900 border-gray-800">
<img alt="Playground 3" className="group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/38dadc40-e189-489f-84a6-f6e090ca5115_800w.webp"/>
</div>

<div className="aspect-square rounded-[20px] overflow-hidden dark:bg-white/5 border dark:border-white/10 group cursor-pointer bg-gray-900 border-gray-800">
<img alt="Playground 4" className="group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cddf437-b75e-4a35-9d53-05b39eb9c70b_800w.webp"/>
</div>

<div className="aspect-square rounded-[20px] overflow-hidden dark:bg-white/5 border dark:border-white/10 group cursor-pointer bg-gray-900 border-gray-800">
<img alt="Playground 5" className="group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7e98cf79-3483-423c-a067-06b12914e8ed_800w.webp"/>
</div>

<div className="aspect-square rounded-[20px] overflow-hidden dark:bg-white/5 border dark:border-white/10 group cursor-pointer bg-gray-900 border-gray-800">
<img alt="Playground 6" className="group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9d09ca01-6e95-4a0d-9574-723562075bb8_800w.webp"/>
</div>
</div>
</div>
</section>

<section className="py-24 dark:bg-[#050505] bg-gray-950/50" id="store">
<div className="max-w-[1200px] mx-auto px-6">
<div className="grid grid-cols-12 gap-6 mb-12 items-end">
<div className="col-span-12 lg:col-span-8">
<h2 className="text-4xl font-semibold tracking-tight dark:text-white mb-2 text-gray-100">Digital assets that ship.</h2>
<p className="text-lg text-gray-500 dark:text-gray-400">Reusable kits and templates built from real production work.</p>
</div>
<div className="col-span-12 lg:col-span-4 flex justify-start lg:justify-end">
<button className="text-sm font-medium dark:text-white hover:opacity-70 flex items-center gap-1 text-gray-100">Browse Store <svg aria-hidden="true" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="flex flex-col group">
<div className="aspect-[4/3] rounded-[20px] overflow-hidden border dark:border-white/10 mb-4 dark:bg-white/5 border-gray-800 bg-black">

<img alt="Flux UI Kit" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/05319516-877a-47f4-8d31-7ccbb5ce974a_800w.webp"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold dark:text-white text-gray-100">Flux UI Kit (Figma)</h3>
<span className="text-sm font-medium dark:text-white dark:bg-white/10 px-2 py-1 rounded-md text-gray-100 bg-gray-900">USD $49</span>
</div>
<ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1 mb-4">
<li>• 120+ components</li>
<li>• Token-ready styles</li>
<li>• Motion notes included</li>
</ul>
<button className="w-full py-2 rounded-lg border dark:border-white/10 text-sm font-medium dark:hover:bg-white/5 transition-colors border-gray-800 hover:bg-gray-950">View Details</button>
</div>

<div className="flex flex-col group">
<div className="aspect-[4/3] rounded-[20px] overflow-hidden border dark:border-white/10 mb-4 dark:bg-white/5 border-gray-800 bg-black">

<img alt="Outcome Template" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa4d9d25-d67f-462b-b106-bbe277025dc1_800w.webp"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold dark:text-white text-gray-100">Outcome Case Study Template</h3>
<span className="text-sm font-medium dark:text-white dark:bg-white/10 px-2 py-1 rounded-md text-gray-100 bg-gray-900">USD $19</span>
</div>
<ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1 mb-4">
<li className="">• Story + metrics structure</li>
<li className="">• Results table</li>
<li>• Stakeholder-ready</li>
</ul>
<button className="w-full py-2 rounded-lg border dark:border-white/10 text-sm font-medium dark:hover:bg-white/5 transition-colors border-gray-800 hover:bg-gray-950">View Details</button>
</div>

<div className="flex flex-col group">
<div className="aspect-[4/3] rounded-[20px] overflow-hidden border dark:border-white/10 mb-4 dark:bg-white/5 border-gray-800 bg-black">

<img alt="Materials Pack" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/05ac238c-d315-4c54-bc43-e9e279e32ab4_800w.webp"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold dark:text-white text-gray-100">Iridescent Materials Pack</h3>
<span className="text-sm font-medium dark:text-white dark:bg-white/10 px-2 py-1 rounded-md text-gray-100 bg-gray-900">USD $29</span>
</div>
<ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1 mb-4">
<li className="">• Glass + chrome set</li>
<li className="">• Hero lighting tips</li>
<li className="">• 4K render-friendly</li>
</ul>
<button className="w-full py-2 rounded-lg border dark:border-white/10 text-sm font-medium dark:hover:bg-white/5 transition-colors border-gray-800 hover:bg-gray-950">View Details</button>
</div>
</div>
</div>
</section>

<section className="py-24 dark:bg-[#050505] border-t dark:border-white/5 bg-black border-gray-900">
<div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="col-span-1 lg:col-span-5">
<h2 className="text-4xl font-semibold tracking-tight dark:text-white mb-4 text-gray-100">A workflow built to ship.</h2>
<p className="text-lg text-gray-500 dark:text-gray-400 mb-8">Designed to reduce uncertainty, speed up decisions, and keep delivery measurable.</p>

<div className="rounded-[20px] overflow-hidden border dark:border-white/10 aspect-[3/2] hidden lg:block border-gray-800">
<img alt="Process Abstract" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4986e46-1db0-4762-bbcc-b4a263dfebb7_1600w.webp"/>
</div>
</div>
<div className="col-span-1 lg:col-span-7 flex flex-col gap-4">

<div className="p-6 rounded-[20px] border dark:border-white/10 dark:bg-white/5 border-gray-800 bg-gray-950">
<div className="flex justify-between mb-2">
<h3 className="font-semibold dark:text-white text-gray-100">Step 1 — Discover</h3>
<span className="text-sm text-gray-500 font-medium">3–5 days</span>
</div>
<p className="text-sm dark:text-gray-400 text-gray-400">Goals, constraints, success metrics, technical realities</p>
</div>

<div className="p-6 rounded-[20px] border dark:border-white/10 dark:bg-white/5 border-gray-800 bg-gray-950">
<div className="flex justify-between mb-2">
<h3 className="font-semibold dark:text-white text-gray-100">Step 2 — Design</h3>
<span className="text-sm text-gray-500 font-medium">1–2 weeks</span>
</div>
<p className="text-sm dark:text-gray-400 text-gray-400">Flows, UI system, prototypes, iteration loops</p>
</div>

<div className="p-6 rounded-[20px] border dark:border-white/10 dark:bg-white/5 border-gray-800 bg-gray-950">
<div className="flex justify-between mb-2">
<h3 className="font-semibold dark:text-white text-gray-100">Step 3 — Build</h3>
<span className="text-sm text-gray-500 font-medium">1–2 weeks</span>
</div>
<p className="text-sm dark:text-gray-400 text-gray-400">Components, motion rules, performance checks</p>
</div>

<div className="p-6 rounded-[20px] border dark:border-white/10 dark:bg-white/5 border-gray-800 bg-gray-950">
<div className="flex justify-between mb-2">
<h3 className="font-semibold dark:text-white text-gray-100">Step 4 — Ship + Measure</h3>
<span className="text-sm text-gray-500 font-medium">2–4 weeks post-launch</span>
</div>
<p className="text-sm dark:text-gray-400 text-gray-400">Tracking plan, experiments, iteration roadmap</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="start">
<div className="max-w-[1200px] mx-auto dark:bg-gray-900 rounded-[28px] overflow-hidden relative shadow-2xl bg-gray-100 text-black">

<div className="absolute inset-0 bg-gradient-to-br z-0 from-gray-200 to-gray-50"></div>
<div className="relative z-10 p-8 md:p-12 lg:p-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="col-span-1 md:col-span-8">
<h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-black">Ready to ship something measurable?</h2>
<p className="text-lg max-w-xl mb-10 leading-relaxed text-gray-700">Tell me what you’re building, the metric you want to move, and your timeline. I’ll respond with a clear plan and next steps.</p>
<div className="flex flex-wrap gap-4 mb-8">
<button className="transition-colors hover:bg-gray-900 text-base font-semibold text-gray-100 bg-black rounded-xl pt-4 pr-8 pb-4 pl-8 cursor-pointer" onclick="window.location.href='/page5-start-project'" role="button">Start a Project</button>
<button className="transition-colors hover:bg-black/10 text-base font-medium text-black border-black/20 border rounded-xl pt-4 pr-8 pb-4 pl-8">View Work</button>
</div>
<div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-gray-600">
<span>Next availability: Jan 6, 2026</span>
<span>•</span>
<span>Typical engagement: 2–6 weeks</span>
<span>•</span>
<span>Budget-friendly sprints available</span>
</div>
</div>

<div className="col-span-1 md:col-span-4 hidden md:flex justify-end">
<div className="w-full aspect-[3/4] rounded-2xl overflow-hidden relative border border-black/10">
<img alt="CTA Mood" className="opacity-80 mix-blend-overlay w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/38405778-ac06-433a-a4e4-738ea68cecfe_800w.webp"/>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t dark:border-white/5 dark:bg-[#050505] border-gray-900 bg-black">
<div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
<div className="col-span-2 md:col-span-1">
<a className="font-semibold dark:text-white tracking-tight text-lg mb-4 block text-gray-100" href="#">IriFlux Studio</a>
</div>
<div className="flex flex-col gap-3 text-sm text-gray-500 dark:text-gray-400">
<h4 className="font-medium dark:text-white mb-1 text-gray-100">Pages</h4>
<a className="dark:hover:text-white hover:text-gray-100" href="#work">Work</a>
<a className="dark:hover:text-white hover:text-gray-100" href="#playground">Playground</a>
<a className="dark:hover:text-white hover:text-gray-100" href="#store">Store</a>
</div>
<div className="flex flex-col gap-3 text-sm text-gray-500 dark:text-gray-400">
<h4 className="font-medium dark:text-white mb-1 text-gray-100">Socials</h4>
<a className="dark:hover:text-white hover:text-gray-100" href="#">Twitter / X</a>
<a className="dark:hover:text-white hover:text-gray-100" href="#">LinkedIn</a>
<a className="dark:hover:text-white hover:text-gray-100" href="#">GitHub</a>
</div>
<div className="flex flex-col gap-3 text-sm text-gray-500 dark:text-gray-400">
<h4 className="font-medium dark:text-white mb-1 text-gray-100">Legal</h4>
<a className="dark:hover:text-white hover:text-gray-100" href="#">Privacy Policy</a>
<a className="dark:hover:text-white hover:text-gray-100" href="#">Terms of Service</a>
</div>
</div>
<div className="max-w-[1200px] mx-auto px-6 border-t dark:border-white/5 pt-8 flex justify-between text-xs border-gray-900 text-gray-600">
<span>© 2026 IriFlux Studio. All rights reserved.</span>
<span>Based in Bordeaux, France.</span>
</div>
</footer>
</div>


    </>
  );
}
