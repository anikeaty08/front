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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons
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
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#CC9A18]/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

<header className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#CC9A18]/10 text-[#CC9A18] text-sm font-medium mb-8 ring-1 ring-[#CC9A18]/20 backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="crown" strokeWidth="1.5"></i>
                EMERGE Us Humanity International Conference
            </div>
<h1 className="font-['Georgia',_serif] text-4xl md:text-5xl lg:text-7xl text-white tracking-tight leading-tight mb-6">
                B.L.A.C.K. I AM <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CC9A18] to-yellow-600">International Awards</span>
</h1>
<h2 className="font-['Georgia',_serif] text-xl md:text-2xl text-zinc-300 tracking-tight mb-8">
                Content Overview &amp; Complete Honors System
            </h2>
<p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-3xl mx-auto">
                This document presents the full honors and awards structure connected to the B. L. A. C. K. I AM International Awards. These honors recognize leaders, educators, humanitarian champions, artists, diplomats, innovators, and community builders whose work uplifts humanity and advances Africa and its global descendants.
            </p>
</header>

<section className="max-w-5xl mx-auto mb-24 md:mb-32 relative group">
<div className="absolute -inset-1 bg-gradient-to-b from-[#CC9A18]/20 to-transparent rounded-[2rem] blur-xl opacity-50 group-hover:opacity-75 transition duration-700"></div>
<div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
<img alt="B.L.A.C.K. I AM Awards System" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-700" src="https://i.ibb.co/3ykfXGBg/black-iam-full-awards-system.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none"></div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

<section className="lg:col-span-2 bg-white/[0.02] border border-white/5 hover:border-[#CC9A18]/30 transition-colors duration-500 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#CC9A18]/5 blur-[80px] rounded-full pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
<div className="flex flex-col md:flex-row md:items-start gap-8 relative z-10">
<div className="md:w-1/3">
<div className="w-12 h-12 rounded-2xl bg-[#CC9A18]/10 flex items-center justify-center text-[#CC9A18] mb-6 border border-[#CC9A18]/20">
<i className="w-6 h-6" data-lucide="trophy" strokeWidth="1.5"></i>
</div>
<h3 className="font-['Georgia',_serif] text-3xl md:text-4xl text-white tracking-tight mb-4">1. Executive Awards</h3>
<p className="text-[#CC9A18] font-medium text-lg tracking-tight mb-2">Top Honors</p>
<p className="text-base text-zinc-400">These are the highest-level recognitions in the system.</p>
</div>
<div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-4 md:pt-0 md:border-l md:border-white/5 md:pl-8">
<ul className="space-y-4">
<li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#CC9A18] flex-shrink-0 shadow-[0_0_8px_#CC9A18]"></span><span className="text-base text-zinc-200">Global Leadership Excellence Award</span></li>
<li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#CC9A18] flex-shrink-0 shadow-[0_0_8px_#CC9A18]"></span><span className="text-base text-zinc-200">Visionary Impact Award</span></li>
<li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#CC9A18] flex-shrink-0 shadow-[0_0_8px_#CC9A18]"></span><span className="text-base text-zinc-200">Humanitarian Leadership Award</span></li>
<li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#CC9A18] flex-shrink-0 shadow-[0_0_8px_#CC9A18]"></span><span className="text-base text-zinc-200">Educational Transformation Award</span></li>
<li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#CC9A18] flex-shrink-0 shadow-[0_0_8px_#CC9A18]"></span><span className="text-base text-zinc-200">Community Empowerment Award</span></li>
</ul>
<ul className="space-y-4">
<li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#CC9A18] flex-shrink-0 shadow-[0_0_8px_#CC9A18]"></span><span className="text-base text-zinc-200">Cultural Excellence Award</span></li>
<li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#CC9A18] flex-shrink-0 shadow-[0_0_8px_#CC9A18]"></span><span className="text-base text-zinc-200">Global Unity Award</span></li>
<li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#CC9A18] flex-shrink-0 shadow-[0_0_8px_#CC9A18]"></span><span className="text-base text-zinc-200">Conscious Leadership Award</span></li>
<li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#CC9A18] flex-shrink-0 shadow-[0_0_8px_#CC9A18]"></span><span className="text-base text-zinc-200">Legacy Builder Award</span></li>
<li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#CC9A18] flex-shrink-0 shadow-[0_0_8px_#CC9A18]"></span><span className="text-base text-zinc-200">Inspirational Leadership Award</span></li>
</ul>
</div>
</div>
</section>

<section className="bg-white/[0.02] border border-white/5 hover:border-[#CC9A18]/20 transition-colors duration-500 rounded-3xl p-8 flex flex-col h-full">
<div className="mb-8 border-b border-white/5 pb-8">
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white mb-5 border border-white/10">
<i className="w-5 h-5" data-lucide="globe" strokeWidth="1.5"></i>
</div>
<h3 className="font-['Georgia',_serif] text-2xl text-white tracking-tight mb-3">2. B.L.A.C.K. I AM International Award Titles</h3>
<p className="text-sm text-[#CC9A18] font-medium tracking-wide uppercase mb-2">20 Honors</p>
<p className="text-base text-zinc-400">Awards for global leaders and changemakers.</p>
</div>
<div className="overflow-y-auto pr-2 custom-scrollbar flex-grow" style={{maxHeight: '400px'}}>
<ul className="space-y-3">
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Transformational Impact Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Diplomatic Leadership Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Humanitarian Service Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Global Change Agent Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Kingdom Leadership Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Rising Visionary Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Excellence in Service Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Leadership Legacy Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Cultural Ambassador Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Champion of Humanity Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Youth Empowerment Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Innovation Leadership Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Global Influence Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Advocacy Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Leadership Integrity Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Economic Empowerment Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Creative Excellence Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Global Mentor Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Social Impact Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Lifetime Leadership Award</span></li>
</ul>
</div>
</section>

<section className="bg-white/[0.02] border border-white/5 hover:border-[#CC9A18]/20 transition-colors duration-500 rounded-3xl p-8 flex flex-col h-full">
<div className="mb-8 border-b border-white/5 pb-8">
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white mb-5 border border-white/10">
<i className="w-5 h-5" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<h3 className="font-['Georgia',_serif] text-2xl text-white tracking-tight mb-3">3. B.L.A.C.K. House Award Titles</h3>
<p className="text-sm text-[#CC9A18] font-medium tracking-wide uppercase mb-2">20 Honors</p>
<p className="text-base text-zinc-400">Examples include:</p>
</div>
<div className="overflow-y-auto pr-2 custom-scrollbar flex-grow" style={{maxHeight: '400px'}}>
<ul className="space-y-3">
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Global Overseer Leadership Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Ambassador of Humanity Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Diplomatic Leadership Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Global Unity Ambassador Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Leadership Stewardship Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Kingdom Ambassador Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">International Goodwill Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Global Influence Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Cultural Bridge Builder Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Diplomatic Service Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Global Partnership Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Leadership Advancement Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Kingdom Service Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Humanitarian Ambassador Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Global Peace Ambassador Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Leadership Excellence Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">International Visionary Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Ambassador of Cultural Unity Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Leadership Honor Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Global Impact Award</span></li>
</ul>
</div>
</section>

<section className="bg-white/[0.02] border border-white/5 hover:border-[#CC9A18]/20 transition-colors duration-500 rounded-3xl p-8 flex flex-col h-full">
<div className="mb-8 border-b border-white/5 pb-8">
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white mb-5 border border-white/10">
<i className="w-5 h-5" data-lucide="gem" strokeWidth="1.5"></i>
</div>
<h3 className="font-['Georgia',_serif] text-2xl text-white tracking-tight mb-3">4. Rare Jewel Award Titles</h3>
<p className="text-sm text-[#CC9A18] font-medium tracking-wide uppercase mb-2">20 Honors</p>
<p className="text-base text-zinc-400">These focus on humanitarian compassion and service. Examples:</p>
</div>
<div className="overflow-y-auto pr-2 custom-scrollbar flex-grow" style={{maxHeight: '400px'}}>
<ul className="space-y-3">
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Humanitarian Excellence Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Compassion in Action Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Transformational Impact Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Servant Leadership Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Heart of Humanity Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Global Kindness Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Community Restoration Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Life Changing Service Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Legacy of Compassion Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Global Hope Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Bridge of Humanity Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Empowerment Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Light of Humanity Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Champion of Compassion Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Community Builder Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Pathway of Hope Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Courageous Service Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Humanity First Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Life Restoration Award</span></li>
<li className="flex items-start gap-3 py-1"><span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0"></span><span className="text-base text-zinc-300">Extraordinary Impact Award</span></li>
</ul>
</div>
</section>

<section className="lg:col-span-2 bg-white/[0.02] border border-white/5 hover:border-[#CC9A18]/30 transition-colors duration-500 rounded-3xl p-8 md:p-12 mt-4 md:mt-8">
<div className="flex flex-col md:flex-row gap-12">
<div className="md:w-1/2">
<div className="w-12 h-12 rounded-2xl bg-[#CC9A18]/10 flex items-center justify-center text-[#CC9A18] mb-6 border border-[#CC9A18]/20">
<i className="w-6 h-6" data-lucide="shield" strokeWidth="1.5"></i>
</div>
<h3 className="font-['Georgia',_serif] text-3xl text-white tracking-tight mb-4">5. Order of the Golden Lion &amp; Lioness of Africa</h3>
<p className="text-base text-zinc-400 mb-8">Ceremonial honorary titles such as:</p>
<ul className="space-y-4">
<li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#CC9A18] flex-shrink-0 shadow-[0_0_8px_#CC9A18]"></span><span className="text-base text-zinc-200">King / Queen of the Golden Lion / Lioness of Africa</span></li>
<li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#CC9A18] flex-shrink-0 shadow-[0_0_8px_#CC9A18]"></span><span className="text-base text-zinc-200">Grand King / Grand Queen</span></li>
<li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#CC9A18] flex-shrink-0 shadow-[0_0_8px_#CC9A18]"></span><span className="text-base text-zinc-200">Knight King / Lady Queen</span></li>
<li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#CC9A18] flex-shrink-0 shadow-[0_0_8px_#CC9A18]"></span><span className="text-base text-zinc-200">Commander King / Commander Queen</span></li>
<li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#CC9A18] flex-shrink-0 shadow-[0_0_8px_#CC9A18]"></span><span className="text-base text-zinc-200">Guardian King / Guardian Queen</span></li>
<li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#CC9A18] flex-shrink-0 shadow-[0_0_8px_#CC9A18]"></span><span className="text-base text-zinc-200">Royal King / Royal Queen of African Heritage</span></li>
<li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#CC9A18] flex-shrink-0 shadow-[0_0_8px_#CC9A18]"></span><span className="text-base text-zinc-200">Champion King / Champion Queen</span></li>
<li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#CC9A18] flex-shrink-0 shadow-[0_0_8px_#CC9A18]"></span><span className="text-base text-zinc-200">Lion King / Lioness Queen of Humanitarian Courage</span></li>
<li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#CC9A18] flex-shrink-0 shadow-[0_0_8px_#CC9A18]"></span><span className="text-base text-zinc-200">Lion King / Lioness Queen of Cultural Renaissance</span></li>
<li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#CC9A18] flex-shrink-0 shadow-[0_0_8px_#CC9A18]"></span><span className="text-base text-zinc-200">Lion King / Lioness Queen of Global Impact</span></li>
</ul>
</div>
<div className="md:w-1/2 flex flex-col justify-center">
<div className="bg-black/40 border border-[#CC9A18]/20 rounded-2xl p-6 md:p-8 backdrop-blur-md relative overflow-hidden">
<div className="absolute -top-10 -right-10 w-32 h-32 bg-[#CC9A18]/10 blur-3xl rounded-full"></div>
<h4 className="font-['Georgia',_serif] text-xl text-white tracking-tight mb-6 flex items-center gap-2">
<i className="w-4 h-4 text-[#CC9A18]" data-lucide="mic" strokeWidth="1.5"></i>
                                Ceremonial Recognition Format
                            </h4>
<p className="text-sm text-zinc-400 mb-6 uppercase tracking-wider font-medium">Announcement Examples</p>
<div className="space-y-4">
<div className="pl-4 border-l-2 border-[#CC9A18]/50 py-1">
<p className="text-base md:text-lg text-zinc-200 font-['Georgia',_serif] italic leading-relaxed">
                                        "King Kwame Mensah, Lion of Global Impact."
                                    </p>
</div>
<div className="pl-4 border-l-2 border-[#CC9A18]/50 py-1">
<p className="text-base md:text-lg text-zinc-200 font-['Georgia',_serif] italic leading-relaxed">
                                        "Queen Ama Boateng, Lioness of Cultural Renaissance."
                                    </p>
</div>
<div className="pl-4 border-l-2 border-[#CC9A18]/50 py-1">
<p className="text-base md:text-lg text-zinc-200 font-['Georgia',_serif] italic leading-relaxed">
                                        "Queen Dr. Angela L. Harris, Guardian of the Golden Lioness Legacy."
                                    </p>
</div>
<div className="pl-4 border-l-2 border-[#CC9A18]/50 py-1">
<p className="text-base md:text-lg text-zinc-200 font-['Georgia',_serif] italic leading-relaxed">
                                        "King Prof. Dr. Waheed A. MUSAH, Lion of Humanitarian Courage."
                                    </p>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<section className="mt-32 mb-16 text-center relative">
<div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
<div className="w-full max-w-lg h-px bg-gradient-to-r from-transparent via-[#CC9A18]/30 to-transparent"></div>
</div>
<h2 className="font-['Georgia',_serif] text-3xl md:text-4xl text-white tracking-tight mb-6 mt-12 inline-block bg-zinc-950 px-8">
                Submit Nominations
            </h2>
<p className="text-base md:text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">
                Discover more about the EMERGE Us Humanity International Conference and participate in recognizing global excellence.
            </p>
<a className="inline-flex items-center justify-center gap-2 bg-[#CC9A18] hover:bg-white text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(204,154,24,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]" href="https://emergeusconference.com/" rel="noopener noreferrer" target="_blank">
                Visit emergeusconference.com
                <i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</section>
</main>

<style>
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.02);
            border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(204, 154, 24, 0.5);
        }
    </style>


    </>
  );
}
