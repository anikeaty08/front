import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Render Lucide icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
      });

      // Live local time (24h)
      const timeEl = document.getElementById('localTime');
      function updateClock() {
        const d = new Date();
        const hh = String(d.getHours()).padStart(2, '0');
        const mm = String(d.getMinutes()).padStart(2, '0');
        const ss = String(d.getSeconds()).padStart(2, '0');
        timeEl.textContent = `${hh}:${mm}:${ss}`;
      }
      updateClock();
      setInterval(updateClock, 1000);

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/3dgradient-AcpgG6LxFkpnJSoowRHPfcbO" width="100%"></iframe></div>

<div className="fixed inset-0 -z-10">

<div className="absolute inset-0 opacity-[0.35] bg-[radial-gradient(#101010_1px,transparent_1px)] [background-size:16px_16px]"></div>

<div className="absolute inset-0 opacity-[0.22] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:120px_1px,1px_120px]"></div>

<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
</div>

<header className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
<span className="text-xs sm:text-sm tracking-tight text-neutral-300">LOCAL/ <span className="tabular-nums" id="localTime">08:55:23</span></span>
</div>
<div className="hidden sm:flex items-center gap-2 text-neutral-400">
<svg className="lucide lucide-grip-horizontal w-4 h-4" data-lucide="grip-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="9" r="1"></circle><circle cx="19" cy="9" r="1"></circle><circle cx="5" cy="9" r="1"></circle><circle cx="12" cy="15" r="1"></circle><circle cx="19" cy="15" r="1"></circle><circle cx="5" cy="15" r="1"></circle></svg>
</div>
<a className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-white bg-white/5 hover:bg-white/10 ring-1 ring-white/10" href="#contact">
<span>Contact Now</span>
<svg className="lucide lucide-send w-4 h-4 transition-transform group-hover:translate-x-0.5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</a>
</div>
</header>

<section className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="relative mt-10 sm:mt-16">
<h1 className="leading-none tracking-tight text-white select-none">
<span className="block text-[22vw] md:text-[16vw] xl:text-[12vw] 2xl:text-[10vw] font-extrabold" id="aura-eme99d4vq" style={{overflow: 'hidden'}}>
<span style={{display: 'inline-block', animation: 'letterSlideIn 0.8s ease-out forwards', animationDelay: '0s', transform: 'translateY(-100%)', opacity: '0', clipPath: 'inset(0 0 100% 0)'}}>K</span><span style={{display: 'inline-block', animation: 'letterSlideIn 0.8s ease-out forwards', animationDelay: '0.1s', transform: 'translateY(-100%)', opacity: '0', clipPath: 'inset(0 0 100% 0)'}}>Y</span><span style={{display: 'inline-block', animation: 'letterSlideIn 0.8s ease-out forwards', animationDelay: '0.2s', transform: 'translateY(-100%)', opacity: '0', clipPath: 'inset(0 0 100% 0)'}}>R</span><span style={{display: 'inline-block', animation: 'letterSlideIn 0.8s ease-out forwards', animationDelay: '0.3s', transform: 'translateY(-100%)', opacity: '0', clipPath: 'inset(0 0 100% 0)'}}>O</span>
<style>
    @keyframes letterSlideIn {
      0% {
        transform: translateY(-100%);
        opacity: 0;
        clip-path: inset(0 0 100% 0);
      }
      50% {
        opacity: 0.5;
        clip-path: inset(0 0 50% 0);
      }
      100% {
        transform: translateY(0);
        opacity: 1;
        clip-path: inset(0 0 0% 0);
      }
    }
  </style>
</span>
</h1>

<div className="mt-6 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
<div className="border-t border-white/10 pt-5">
<div className="flex items-start gap-3">
<svg className="lucide lucide-map-pin w-5 h-5 text-emerald-400 mt-0.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div>
<p className="text-sm font-medium tracking-tight text-white/90">Based in Seattle, Washington</p>
<p className="text-xs text-neutral-400 mt-1">Pacific Northwest • UTC−08:00</p>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-5">
<div className="flex items-start gap-3">
<svg className="lucide lucide-globe-2 w-5 h-5 text-cyan-400 mt-0.5" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
<div>
<p className="text-sm font-medium tracking-tight text-white/90">Available Across Time Zones</p>
<p className="text-xs text-neutral-400 mt-1">Remote-friendly • Worldwide</p>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-5">
<div className="flex items-start gap-3">
<svg className="lucide lucide-cpu w-5 h-5 text-indigo-400 mt-0.5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<div>
<p className="text-sm font-medium tracking-tight text-white/90">Creative Technologist</p>
<p className="text-xs text-neutral-400 mt-1">Front‑end engineer + prototyper</p>
</div>
</div>
</div>
</div>

<div className="mt-10 sm:mt-14">
<div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5">
<div className="absolute inset-0 bg-gradient-to-tr from-red-500/30 via-transparent to-transparent mix-blend-screen pointer-events-none"></div>
<img alt="Portrait with bold red lighting" className="w-full h-[52vh] sm:h-[60vh] object-cover" loading="eager" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c00ff13b-bcc2-4ddd-a8bc-13bd3da53a81_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 mt-14 sm:mt-20">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-white">Recent Work</h2>
<a className="text-sm text-neutral-300 hover:text-white inline-flex items-center gap-2" href="#">
<span>View all</span>
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">

<article className="group rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<div className="relative aspect-[16/10]">
<img alt="3D abstract render" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c4e25fdd-1ad7-4b5d-8138-c0b5dbe0c9e2_800w.jpg"/>
</div>
<div className="p-4">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<svg className="lucide lucide-box w-4 h-4" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
<span>3D System</span>
</div>
<h3 className="mt-2 text-base font-semibold tracking-tight text-white">Nebula Interface</h3>
<p className="mt-1 text-sm text-neutral-400">Interactive motion study for modular components.</p>
</div>
</article>

<article className="group rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<div className="relative aspect-[16/10]">
<img alt="Mountain landscape" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e0a39d5f-b50a-4023-af86-d6cd0cd2c5c6_800w.jpg"/>
</div>
<div className="p-4">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<svg className="lucide lucide-mountain w-4 h-4" data-lucide="mountain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>
<span>Exploration</span>
</div>
<h3 className="mt-2 text-base font-semibold tracking-tight text-white">Summit Dashboard</h3>
<p className="mt-1 text-sm text-neutral-400">Data viz prototypes for outdoor telemetry.</p>
</div>
</article>

<article className="group rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<div className="relative aspect-[16/10]">
<img alt="Minimal ocean scene" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/166b473a-a637-42d7-92a0-a1c7325e07cc_800w.jpg"/>
</div>
<div className="p-4">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span>Minimal</span>
</div>
<h3 className="mt-2 text-base font-semibold tracking-tight text-white">Tide Kit</h3>
<p className="mt-1 text-sm text-neutral-400">A clean component set for rapid prototyping.</p>
</div>
</article>
</div>
</section><section className="max-w-7xl mx-auto px-4 sm:px-6 mt-14 sm:mt-20" id="about">
<div className="rounded-2xl ring-1 ring-white/10 overflow-hidden bg-white/5">
<div className="flex items-end justify-between p-6 border-b border-white/10">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">About</h2>
<p className="hidden sm:block text-xs text-neutral-400">Story, experience, recognitions</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12">

<div className="p-6 md:col-span-3 border-b md:border-b-0 md:border-r border-white/10">
<p className="text-sm text-neutral-400">Creative Technologist</p>
<p className="mt-1 text-lg font-medium tracking-tight text-white">Kyro Studio</p>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-400">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<span>Seattle, Washington • Remote‑friendly</span>
</div>
</div>

<div className="relative md:col-span-6 md:row-span-2 border-b md:border-b-0 md:border-r border-white/10">
<div className="relative aspect-[16/10] md:aspect-[9/10] lg:aspect-[16/10]">
<img alt="Portrait side profile with dramatic lighting" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/102e9e77-7a32-4330-92f4-d2149285c86b_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent pointer-events-none"></div>

<div className="hidden md:block absolute inset-0 pointer-events-none">
<div className="absolute top-5 right-5 rounded-xl bg-black/45 ring-1 ring-white/10 backdrop-blur-sm p-4">
<div className="text-2xl lg:text-3xl font-semibold tracking-tight text-white">100+</div>
<p className="text-[11px] text-neutral-300 mt-0.5">Completed Projects</p>
</div>
<div className="absolute bottom-5 left-5 rounded-xl bg-black/45 ring-1 ring-white/10 backdrop-blur-sm p-4">
<div className="text-2xl lg:text-3xl font-semibold tracking-tight text-white">10+</div>
<p className="text-[11px] text-neutral-300 mt-0.5">Years of Experience</p>
</div>
<div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-xl bg-black/45 ring-1 ring-white/10 backdrop-blur-sm p-4">
<div className="text-2xl lg:text-3xl font-semibold tracking-tight text-white">3</div>
<p className="text-[11px] text-neutral-300 mt-0.5">Languages Spoken</p>
</div>
</div>
</div>
</div>

<div className="p-6 md:col-span-3 border-b md:border-b-0">
<div className="text-3xl font-semibold tracking-tight text-white">5</div>
<p className="text-xs text-neutral-400 mt-1">Industry Awards</p>
</div>

<div className="p-6 md:col-span-3 border-t md:border-t border-white/10 md:border-r">
<p className="text-sm text-neutral-300 leading-relaxed">
          I design and build considered interfaces and rapid prototypes that bridge engineering and visual craft. From early concepts to production, I help teams move faster with clarity and intention.
        </p>
<div className="mt-4 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-white bg-white/10 hover:bg-white/20 rounded-full px-3 py-1.5 ring-1 ring-white/10">
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
<span>Request CV</span>
</div>
</div>

<div className="p-6 md:col-span-3 border-t border-white/10">
<div className="text-3xl font-semibold tracking-tight text-white">30+</div>
<p className="text-xs text-neutral-400 mt-1">Clients Served</p>
</div>
</div>

<div className="md:hidden border-t border-white/10 grid grid-cols-3">
<div className="p-4 text-center border-r border-white/10">
<div className="text-xl font-semibold tracking-tight text-white">100+</div>
<p className="text-[11px] text-neutral-400 mt-0.5">Projects</p>
</div>
<div className="p-4 text-center border-r border-white/10">
<div className="text-xl font-semibold tracking-tight text-white">10+</div>
<p className="text-[11px] text-neutral-400 mt-0.5">Years</p>
</div>
<div className="p-4 text-center">
<div className="text-xl font-semibold tracking-tight text-white">3</div>
<p className="text-[11px] text-neutral-400 mt-0.5">Languages</p>
</div>
</div>
</div>
</section><section className="max-w-7xl mx-auto px-4 sm:px-6 mt-14 sm:mt-20" id="services">
<div className="ring-1 ring-white/10 overflow-hidden bg-white/5 rounded-2xl">
<div className="flex items-end justify-between p-6 border-b border-white/10">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Services</h2>
<div className="hidden sm:flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium tracking-tight text-white bg-white/10 hover:bg-white/20 ring-1 ring-white/10" href="#">
<svg className="lucide lucide-download w-3.5 h-3.5" data-lucide="download" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"></svg>
<span>Services Deck</span>
</a>
</div>
</div>

<div className="p-6 sm:p-8 border-b border-white/10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
<div className="md:col-span-1">
<div className="text-3xl sm:text-4xl font-medium tracking-tight text-white/70 tabular-nums">1</div>
</div>
<div className="md:col-span-8">
<ul className="space-y-2">
<li className="flex items-start gap-2 text-sm text-neutral-300">
<svg className="lucide lucide-check w-3.5 h-3.5 mt-0.5 text-emerald-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
<span>Logo Design</span>
</li>
<li className="flex items-start gap-2 text-sm text-neutral-300">
<svg className="lucide lucide-check w-3.5 h-3.5 mt-0.5 text-emerald-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
<span>Typography &amp; Color Systems</span>
</li>
<li className="flex items-start gap-2 text-sm text-neutral-300">
<svg className="lucide lucide-check w-3.5 h-3.5 mt-0.5 text-emerald-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
<span>Brand Guidelines &amp; Visual Systems</span>
</li>
</ul>
<div className="mt-4 flex items-center gap-3">
<div className="aspect-[4/3] w-24 sm:w-28 rounded-md overflow-hidden ring-1 ring-white/10">
<img alt="Brand stationery set with bold colors" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b870108f-3551-40b3-bb97-ae4fc783d1df_320w.jpg"/>
</div>
<div className="aspect-[4/3] w-24 sm:w-28 rounded-md overflow-hidden ring-1 ring-white/10">
<img alt="Business cards and patterns" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4d5175fe-2aa3-4ef3-8a6f-44a752f57930_320w.jpg"/>
</div>
<div className="aspect-[4/3] w-24 sm:w-28 rounded-md overflow-hidden ring-1 ring-white/10">
<img alt="Stationery mockups on yellow background" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d210766-5c9f-4df0-873c-edb4557202b7_320w.jpg"/>
</div>
<div className="aspect-[4/3] w-24 sm:w-28 rounded-md overflow-hidden ring-1 ring-white/10">
<img alt="Colorful brand collateral" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/781b233e-9c54-40fc-8c11-186d4ce76914_320w.jpg"/>
</div>
</div>
</div>
<div className="md:col-span-3 md:text-right">
<h3 className="text-lg sm:text-xl tracking-tight font-semibold text-white">Brand Identity</h3>
<p className="text-xs text-neutral-400 mt-1">Logos, visual systems, guidelines</p>
</div>
</div>
</div>

<div className="p-6 sm:p-8 border-b border-white/10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
<div className="md:col-span-1">
<div className="text-3xl sm:text-4xl font-medium tracking-tight text-white/70 tabular-nums">2</div>
</div>
<div className="md:col-span-8">
<ul className="space-y-2">
<li className="flex items-start gap-2 text-sm text-neutral-300">
<svg className="lucide lucide-check w-3.5 h-3.5 mt-0.5 text-emerald-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
<span>Brand Positioning</span>
</li>
<li className="flex items-start gap-2 text-sm text-neutral-300">
<svg className="lucide lucide-check w-3.5 h-3.5 mt-0.5 text-emerald-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
<span>Messaging &amp; Tone of Voice</span>
</li>
<li className="flex items-start gap-2 text-sm text-neutral-300">
<svg className="lucide lucide-check w-3.5 h-3.5 mt-0.5 text-emerald-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
<span>Design Consultation &amp; Audit</span>
</li>
</ul>
<div className="mt-4 flex items-center gap-3">
<div className="aspect-[16/10] w-28 sm:w-32 rounded-md overflow-hidden ring-1 ring-white/10">
<img alt="Workshop desk" className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7c7c0abe-b3bf-4f26-92a0-126405775d17_320w.jpg"/>
</div>
<div className="aspect-[16/10] w-28 sm:w-32 rounded-md overflow-hidden ring-1 ring-white/10">
<img alt="Strategy notes and artifacts" className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c79362c-952e-4a16-b043-e48fb1f55728_320w.jpg"/>
</div>
</div>
</div>
<div className="md:col-span-3 md:text-right">
<h3 className="text-lg sm:text-xl tracking-tight font-semibold text-white">Creative Strategy</h3>
<p className="text-xs text-neutral-400 mt-1">Positioning, messaging, audits</p>
</div>
</div>
</div>

<div className="p-6 sm:p-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
<div className="md:col-span-1">
<div className="text-3xl sm:text-4xl font-medium tracking-tight text-white/70 tabular-nums">3</div>
</div>
<div className="md:col-span-8">
<ul className="space-y-2">
<li className="flex items-start gap-2 text-sm text-neutral-300">
<svg className="lucide lucide-check w-3.5 h-3.5 mt-0.5 text-emerald-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
<span>Responsive Web Design</span>
</li>
<li className="flex items-start gap-2 text-sm text-neutral-300">
<svg className="lucide lucide-check w-3.5 h-3.5 mt-0.5 text-emerald-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
<span>Design Systems &amp; UI Kits</span>
</li>
<li className="flex items-start gap-2 text-sm text-neutral-300">
<svg className="lucide lucide-check w-3.5 h-3.5 mt-0.5 text-emerald-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
<span>High‑fidelity Prototypes</span>
</li>
<li className="flex items-start gap-2 text-sm text-neutral-300">
<svg className="lucide lucide-check w-3.5 h-3.5 mt-0.5 text-emerald-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
<span>SEO &amp; Performance Pass</span>
</li>
</ul>
<div className="mt-4 flex items-center gap-3">
<div className="aspect-[16/10] w-32 sm:w-40 rounded-md overflow-hidden ring-1 ring-white/10">
<img alt="Designing interface on laptop" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/237ae1f5-edc0-48a4-bb60-1eb41e314e05_320w.jpg"/>
</div>
<div className="aspect-[16/10] w-32 sm:w-40 rounded-md overflow-hidden ring-1 ring-white/10">
<img alt="Team collaborating over wireframes" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79fd2860-1afb-406f-b9d8-56f13319c7c7_320w.jpg"/>
</div>
</div>
</div>
<div className="md:col-span-3 md:text-right">
<h3 className="text-lg sm:text-xl tracking-tight font-semibold text-white">Web Design</h3>
<p className="text-xs text-neutral-400 mt-1">Interfaces, systems, prototypes</p>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 sm:p-8 border-t border-white/10">
<p className="text-sm text-neutral-300">Need something tailored? Get a scoped proposal in 24 hours.</p>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-white bg-emerald-500/90 hover:bg-emerald-500" href="#contact">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"></svg>
<span>Book Intro Call</span>
</a>
<a className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-white bg-white/10 hover:bg-white/20 ring-1 ring-white/10" href="#">
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"></svg>
<span>Request Estimate</span>
</a>
</div>
</div>
</div>
</section>

<footer className="max-w-7xl mx-auto px-4 sm:px-6 mt-16 sm:mt-24 mb-10" id="contact">
<div className="rounded-2xl p-6 sm:p-8 ring-1 ring-white/10 bg-white/5">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div>
<p className="text-sm text-neutral-400">Open for new collaborations</p>
<h3 className="mt-1 text-xl sm:text-2xl tracking-tight font-semibold text-white">Let’s build something considered.</h3>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-white bg-white/10 hover:bg-white/20" href="mailto:hello@kyro.studio">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span>hello@kyro.studio</span>
</a>
<a className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-white bg-emerald-500/90 hover:bg-emerald-500" href="#">
<svg className="lucide lucide-message-square w-4 h-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span>Message</span>
</a>
</div>
</div>
</div>
<p className="mt-6 text-xs text-neutral-500">© <span id="year">2025</span> Kyro Studio</p>
</footer>



    </>
  );
}
