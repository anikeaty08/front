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
        theme: { extend: {} },
        plugins: [
          function ({ addUtilities }) {
            const rotateXUtilities = {};
            const rotateYUtilities = {};
            const rotateZUtilities = {};
            const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];

            rotateValues.forEach((value) => {
              rotateXUtilities[`.rotate-x-${value}`] = {
                "--tw-rotate-x": `${value}deg`,
                transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\s+/g, " ").trim(),
              };
              if (value !== 0) {
                rotateXUtilities[`.-rotate-x-${value}`] = {
                  "--tw-rotate-x": `-${value}deg`,
                  transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\s+/g, " ").trim(),
                };
              }
            });

            rotateValues.forEach((value) => {
              rotateYUtilities[`.rotate-y-${value}`] = {
                "--tw-rotate-y": `${value}deg`,
                transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\s+/g, " ").trim(),
              };
              if (value !== 0) {
                rotateYUtilities[`.-rotate-y-${value}`] = {
                  "--tw-rotate-y": `-${value}deg`,
                  transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\s+/g, " ").trim(),
                };
              }
            });

            rotateValues.forEach((value) => {
              rotateZUtilities[`.rotate-z-${value}`] = {
                "--tw-rotate-z": `${value}deg`,
                transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\s+/g, " ").trim(),
              };
              if (value !== 0) {
                rotateZUtilities[`.-rotate-z-${value}`] = {
                  "--tw-rotate-z": `-${value}deg`,
                  transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\s+/g, " ").trim(),
                };
              }
            });

            const perspectiveUtilities = {
              ".perspective-none": { perspective: "none" },
              ".perspective-dramatic": { perspective: "100px" },
              ".perspective-near": { perspective: "300px" },
              ".perspective-normal": { perspective: "500px" },
              ".perspective-midrange": { perspective: "800px" },
              ".perspective-distant": { perspective: "1200px" },
            };

            const transformStyleUtilities = {
              ".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
              ".transform-style-flat": { "transform-style": "flat" },
            };

            addUtilities({
              ...rotateXUtilities,
              ...rotateYUtilities,
              ...rotateZUtilities,
              ...perspectiveUtilities,
              ...transformStyleUtilities,
            });
          },
        ],
      };
  


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
      
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Blue Horizon AI - Insurance Brokers</title>


<style>
    body {
      font-family: "Inter", sans-serif;
    }

    html {
      scroll-behavior: smooth;
    }

    .glass-box {
      background: linear-gradient(135deg,
          rgba(10, 15, 38, 0.95),
          rgba(10, 15, 38, 1));
      box-shadow: 0 20px 40px -10px rgba(10, 15, 38, 0.3),
        0 0 0 1px rgba(255, 255, 255, 0.1) inset;
    }

    .book-spine {
      background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), transparent);
    }
  </style>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-work-sans" rel="stylesheet"/>
<style id="all-fonts-style-font-work-sans">
    .font-work-sans {
      font-family: "Work Sans", sans-serif !important;
    }
  </style>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-manrope" rel="stylesheet"/>
<style id="all-fonts-style-font-manrope">
    .font-manrope {
      font-family: "Manrope", sans-serif !important;
    }
  </style>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&amp;display=swap" id="all-fonts-link-font-playfair" rel="stylesheet"/>
<style id="all-fonts-style-font-playfair">
    .font-playfair {
      font-family: "Playfair Display", serif !important;
    }
  </style>

<nav className="md:px-12 flex w-full pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<div className="flex gap-2 items-center">
<a className="flex items-center gap-3 hover:opacity-90 transition-opacity" href="#">
<img alt="Blue Horizon AI" className="w-auto h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb1a9b14-cefc-4fa2-aac8-c6e4df9c2b1e_320w.png"/>
</a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
</div>

<a className="hover:opacity-90 transition-opacity flex items-center gap-2 text-sm font-medium text-white font-manrope bg-[#0a0f26] rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#tally-form">
      Get the Playbook
      <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</nav>
<main className="flex-grow md:px-12 md:pt-24 w-full max-w-[1400px] mr-auto ml-auto pt-12 pr-6 pb-20 pl-6">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="flex flex-col gap-x-8 gap-y-8">
<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold text-[#0a0f26] tracking-tight font-work-sans">
          Are you ready to learn the
          <span className="underline decoration-2 underline-offset-4 decoration-[#0a0f26]/30 font-work-sans">potential of AI</span>
          for your brokerage?
        </h1>
<p className="md:text-2xl leading-relaxed text-lg font-normal text-gray-600 font-manrope max-w-xl">
          Claim your spot in 30 seconds and we’ll send you the
          <span className="font-medium text-[#0a0f26] font-manrope">FREE AI Solutions Playbook</span> that:
        </p>
<ul className="space-y-4">
<li className="flex gap-3 items-start">
<div className="mt-1 text-[#0a0f26]">
<svg className="lucide lucide-check-circle w-6 h-6" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<span className="text-base text-gray-700 font-manrope">Shows you what's possible with modern AI</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 text-[#0a0f26]">
<svg className="lucide lucide-search w-6 h-6" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<span className="text-lg text-gray-700 font-manrope">Helps you find hidden revenue opportunities</span>
</li>
<li className="flex gap-3 items-start">
<div className="mt-1 text-[#0a0f26]">
<svg className="lucide lucide-map w-6 h-6" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</div>
<span className="text-lg text-gray-700 font-manrope">Provides you with a clear implementation roadmap</span>
</li>
</ul>

<div className="block lg:hidden mt-4">
<a className="w-full bg-[#0a0f26] text-white text-lg font-medium px-8 py-4 rounded-xl hover:bg-[#0a0f26]/90 transition-all shadow-lg shadow-[#0a0f26]/20 flex items-center justify-center gap-2 font-manrope" href="#tally-form">
            Get the playbook now
          </a>
<p className="text-sm text-gray-500 mt-3 text-center font-manrope">
            Takes 30 seconds • Completely Free
          </p>
</div>
</div>

<div className="relative w-full h-full min-h-[400px] flex items-center justify-center lg:justify-end">
<div className="absolute right-0 top-10 w-64 h-64 bg-[#E5E2D6] rounded-full blur-3xl opacity-60"></div>
<div className="relative group cursor-pointer perspective-[1000px]">
<div className="">

<div className="">

<div className="w-full mb-6">
<img alt="The AI Solutions Playbook for Insurance Brokerages" className="bg-white/5 w-full h-[430px] object-contain border-white/10 border rounded-xl" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/481f958f-376f-4712-925d-165efc60f2ea_800w.png?w=800&amp;q=80"/>
</div>
</div>
<div className="book-spine absolute top-0 left-0 w-4 h-full rounded-l-2xl opacity-50"></div>
</div>
<div className="absolute -bottom-10 left-10 right-10 h-8 bg-[#0a0f26] blur-2xl opacity-20 transform scale-y-50 group-hover:scale-x-110 transition-transform duration-500">
</div>
</div>
</div>
</div>

<div className="hidden lg:flex justify-center mt-24 mb-12">
<a className="hover:opacity-90 transition-all shadow-[#0a0f26]/20 text-lg font-semibold text-white font-manrope bg-[#0a0f26] rounded-xl pt-4 pr-10 pb-4 pl-10 shadow-lg" href="#tally-form">
    Get the Playbook
  </a>
</div>

<section className="md:mt-28 mt-20" id="tally-form">
<div className="max-w-[900px] mx-auto">
<div className="mb-8">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0a0f26] font-work-sans">
            Get the Playbook
          </h2>
<p className="mt-3 text-lg text-gray-600 font-manrope">
            Fill this out and we’ll send it to you.
          </p>
</div>
<div className="bg-white/60 border border-[#0a0f26]/10 rounded-2xl overflow-hidden">
<iframe className="" loading="lazy" src="https://tally.so/embed/Y50eO0?alignLeft=1&amp;hideTitle=1&amp;transparentBackground=1" style={{width: '100%', height: '900px', border: '0'}} title="Help us understand where you're at"></iframe>
</div>
<p className="text-sm text-gray-500 mt-4 font-manrope">
          If the form looks cut off, increase the iframe height (e.g., 1100px).
        </p>
</div>
</section>

<div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
<div className="bg-[#E6E4DC] rounded-2xl p-8 flex flex-col justify-between h-full hover:shadow-lg transition-shadow duration-300">
<div className="flex flex-col gap-6">
<div className="w-10 h-10 bg-[#0a0f26]/10 rounded-full flex items-center justify-center text-[#0a0f26]">
<svg className="lucide lucide-alert-circle w-5 h-5" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
</div>
<div className="">
<h4 className="text-sm font-semibold tracking-wide uppercase text-gray-500 mb-2 font-manrope">The Problem</h4>
<p className="text-xl text-[#0a0f26] leading-relaxed font-medium font-manrope">
              Brokers spend anywhere from
              <span className="text-red-500/80 font-manrope">60-80% of their time on admin</span>
              work when they could be using AI to save 12+ hours every week.
            </p>
</div>
</div>
</div>
<div className="bg-[#E6E4DC] rounded-2xl p-8 flex flex-col justify-between h-full hover:shadow-lg transition-shadow duration-300">
<div className="flex flex-col gap-6">
<div className="w-10 h-10 bg-[#0a0f26]/10 rounded-full flex items-center justify-center text-[#0a0f26]">
<svg className="lucide lucide-sparkles w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="">
<h4 className="text-sm font-semibold tracking-wide uppercase text-gray-500 mb-2 font-manrope">Our Solution</h4>
<p className="text-xl text-[#0a0f26] leading-relaxed font-medium font-manrope">
              In 2025, we helped insurance brokerages uncover and implement
              <span className="text-green-600 font-manrope">hundreds of thousands of dollars</span>
              in money-making opportunities.
            </p>
</div>
</div>
</div>
<div className="bg-[#0a0f26] rounded-2xl p-8 flex flex-col justify-between h-full hover:shadow-xl hover:shadow-[#0a0f26]/20 transition-all duration-300 group">
<div className="flex flex-col gap-6">
<div className="flex items-center justify-between">
<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white backdrop-blur-sm">
<svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<span className="text-white/50 text-xs font-medium font-manrope">Limited Spots</span>
</div>
<div className="">
<h4 className="text-sm font-semibold tracking-wide uppercase text-white/50 mb-2 font-manrope">Next Step</h4>
<h3 className="text-2xl font-semibold text-white mb-4 tracking-tight font-work-sans">Get the playbook now</h3>

<a className="w-full bg-[#F3F1E7] text-[#0a0f26] text-center py-3 rounded-lg font-semibold hover:bg-white transition-colors mb-3 font-manrope block" href="#tally-form">
              Start Learning
            </a>
<div className="flex items-center gap-2 text-white/60 text-sm font-manrope">
<svg className="lucide lucide-clock w-3.5 h-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
              Takes 30 seconds
            </div>
</div>
</div>
</div>
</div>
</main>
<footer className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-12 border-t border-[#0a0f26]/10">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">

<div className="flex items-center gap-3">
<img alt="Blue Horizon AI" className="opacity-70 w-auto h-20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb1a9b14-cefc-4fa2-aac8-c6e4df9c2b1e_320w.png"/>
</div>

<p className="text-sm text-gray-500 font-manrope">
      © 2026 Blue Horizon AI. All rights reserved.
    </p>
</div>
</footer>


    </>
  );
}
