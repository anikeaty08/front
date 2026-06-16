import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Initialize Lucide icons
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide && lucide.createIcons) lucide.createIcons();
      const yearEl = document.getElementById('year');
      if (yearEl) yearEl.textContent = new Date().getFullYear();
    });

    // Mobile menu toggle
    (function () {
      const btn = document.getElementById('mobile-menu-toggle');
      const menu = document.getElementById('mobile-menu');
      if (!btn || !menu) return;
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        menu.classList.toggle('hidden');
      });
    })();

    // Parallax background
    (function () {
      const nodes = Array.from(document.querySelectorAll('[data-parallax]'));
      const onScroll = () => {
        const y = window.scrollY;
        nodes.forEach(n => {
          const strength = parseFloat(n.getAttribute('data-parallax')) || 0.1;
          n.style.transform = `translateY(${y * strength * 0.2}px)`;
        });
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    })();

    // Simple reveal on scroll
    (function () {
      const toReveal = document.querySelectorAll('[data-animate]');
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.remove('translate-y-6', 'opacity-80');
            e.target.style.willChange = 'auto';
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.15 });
      toReveal.forEach(el => obs.observe(el));
    })();

    // Star/Follow toggle demo
    (function () {
      document.addEventListener('click', (e) => {
        const btn = e.target.closest('.project-star');
        if (!btn) return;
        const pressed = btn.getAttribute('aria-pressed') === 'true';
        btn.setAttribute('aria-pressed', String(!pressed));
        btn.classList.toggle('ring-yellow-300');
        btn.classList.toggle('bg-yellow-50');
      });
    })();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
<div className="absolute -top-24 -left-24 w-[42rem] h-[42rem] rounded-full blur-3xl" data-parallax="0.15" style={{background: 'radial-gradient(60% 60%, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.06), transparent)', transform: 'translateY(76.35px)'}}>
</div>
<div className="absolute top-1/3 -right-32 w-[38rem] h-[38rem] rounded-full blur-3xl" data-parallax="0.10" style={{background: 'radial-gradient(60% 60%, rgba(168, 85, 247, 0.1), rgba(168, 85, 247, 0.06), transparent)', transform: 'translateY(50.9px)'}}>
</div>
<div className="absolute bottom-[-10rem] left-1/4 w-[48rem] h-[48rem] rounded-full blur-3xl" data-parallax="0.22" style={{background: 'radial-gradient(60% 60%, rgba(99, 102, 241, 0.1), rgba(99, 102, 241, 0.06), transparent)', transform: 'translateY(111.98px)'}}>
</div>
</div>

<nav className="fixed z-50 top-4 left-0 right-0">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex bg-white/80 h-14 ring-0 rounded-full pr-4 pl-4 shadow-sm backdrop-blur items-center justify-between" data-element-locator="html &gt; body:nth-of-type(1) &gt; nav:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1)" style={{transitionDelay: '260ms'}}>

<div className="flex items-center gap-3">
<span className="text-xl font-semibold tracking-tight">Web3Grants</span>
</div>

<div className="hidden md:flex space-x-8 items-center" data-element-locator="html &gt; body:nth-of-type(1) &gt; nav:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2)">
<a className="hover:text-gray-900 focusunderline underline-offset-4 transition-colors text-sm font-medium text-gray-700" href="/">Home</a>
<a className="hover:text-gray-900 hover:underline underline-offset-4 transition-colors text-sm font-medium text-gray-700" href="/#following">Following</a>
<a className="hover:text-gray-900 hover:underline underline-offset-4 transition-colors text-sm font-medium text-gray-700" href="/#reading">Reading</a>
<a className="hover:text-gray-900 hover:underline underline-offset-4 transition-colors text-sm font-medium text-gray-700" href="/grants">Grants</a>
<a className="hover:text-gray-900 hover:underline underline-offset-4 transition-colors text-sm font-medium text-gray-700" href="/interviews">Interviews</a>
</div>

<div className="hidden md:flex items-center space-x-3">
<button className="cursor-pointer inline-flex whitespace-nowrap transition-all duration-200 active:scale-[0.98] hover:bg-neutral-800 hover:shadow md:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)] text-sm font-medium text-white bg-neutral-900 rounded-xl pt-2.5 pr-5 pb-2.5 pl-5 shadow-sm gap-x-2 gap-y-2 items-center justify-center" onclick="window.location.href='/list-your-program'" role="button">List Your Program<svg className="lucide lucide-blocks w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="blocks" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"></path><rect height="8" rx="1" width="8" x="14" y="2"></rect></svg></button>
</div>

<button aria-controls="mobile-menu" aria-expanded="false" className="md:hidden inline-flex items-center justify-center p-2 rounded-lg ring-1 ring-black/10 text-gray-700 hover:bg-gray-50" id="mobile-menu-toggle">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<div className="md:hidden hidden mt-2" id="mobile-menu">
<div className="bg-white/90 backdrop-blur ring-1 ring-black/10 rounded-2xl shadow-sm p-2">
<a className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" href="/">Home</a>
<a className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" href="/#following">Following</a>
<a className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" href="/#reading">Reading</a>
<a className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" href="/grants">Grants</a>
<a className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" href="/interviews">Interviews</a>
<div className="mt-3 pt-3 border-t border-gray-200">
<button className="w-full cursor-pointer inline-flex whitespace-nowrap transition-all duration-200 active:scale-[0.98] hover:bg-neutral-800 hover:shadow text-sm font-medium text-white bg-neutral-900 rounded-xl pt-2.5 pr-5 pb-2.5 pl-5 shadow-sm gap-x-2 gap-y-2 items-center justify-center" onclick="window.location.href='/list-your-program'" role="button">
              List Your Program
              <svg className="lucide lucide-blocks w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="blocks" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"></path><rect height="8" rx="1" width="8" x="14" y="2"></rect></svg>
</button>
</div>
</div>
</div>
</div>
</nav>

<section className="min-h-screen flex overflow-hidden pt-36 pb-24 relative items-center" style={{transitionDelay: '260ms'}}>
<div className="sm:px-6 lg:px-8 text-center w-full max-w-6xl mr-auto ml-auto pr-4 pl-4">
<div className="inline-flex transition-all duration-700 ease-out will-change-transform will-change-filter ring-black/5 ring-1 text-xs font-medium text-gray-700 bg-white rounded-full pt-1 pr-3 pb-1 pl-3 shadow-sm gap-x-2 gap-y-2 items-center" data-animate="" style={{transitionDelay: '80ms', willChange: 'auto'}}>GRANTS INTELLIGENCE</div>
<h1 className="mt-5 text-5xl sm:text-6xl font-semibold tracking-tight leading-tight transition-all duration-700 ease-out will-change-transform will-change-filter" data-animate="" style={{transitionDelay: '140ms', willChange: 'auto'}}>
        Funding the future of
        <span className="bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(135deg,#1f2937 0%,#111827 100%)'}}>open innovation</span>
</h1>
<p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 ease-out will-change-transform will-change-filter" data-animate="" style={{transitionDelay: '200ms', willChange: 'auto'}}>
        Discover, compare, and track Web3 grant programs. Transparent data, verified sources, and tools to manage your
        grant pipeline.
      </p>
<div className="flex flex-col sm:flex-row gap-3 transition-all duration-700 ease-out will-change-transform will-change-filter mt-7 gap-x-3 gap-y-3 items-center justify-center" data-animate="" style={{transitionDelay: '260ms', willChange: 'auto'}}>
<a className="inline-flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all duration-200 hover:shadow-lg text-white bg-neutral-950 ring-black/10 ring-1 rounded-full pt-3 pr-6 pb-3 pl-6 relative" href="#grants">
          Explore Grants
          <svg className="lucide lucide-search w-4.5 h-4.5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-gray-800 ring-1 ring-black/5 shadow-sm hover:bg-gray-50 transition" href="#contact">
          Submit Program
          <svg className="lucide lucide-plus w-4.5 h-4.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</a>
</div>

<div className="mt-10 grid grid-cols-3 gap-6 max-w-md mx-auto">
<div className="transition-all duration-700 ease-out will-change-transform will-change-filter" data-animate="" style={{transitionDelay: '320ms', willChange: 'auto'}}>
<div className="text-3xl font-semibold">120+</div>
<div className="text-sm text-gray-500 mt-1">Active Programs</div>
</div>
<div className="transition-all duration-700 ease-out will-change-transform will-change-filter" data-animate="" style={{transitionDelay: '380ms', willChange: 'auto'}}>
<div className="text-3xl font-semibold">$250M+</div>
<div className="text-sm text-gray-500 mt-1">Funding Tracked</div>
</div>
<div className="transition-all duration-700 ease-out will-change-transform will-change-filter" data-animate="" style={{transitionDelay: '440ms', willChange: 'auto'}}>
<div className="text-3xl font-semibold">54</div>
<div className="text-sm text-gray-500 mt-1">Ecosystems</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-gray-900 pt-24 pb-24" id="grants">
<div className="max-w-7xl mr-auto mb-10 ml-auto pr-6 pl-6" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(2) &gt; div:nth-of-type(1)">
<div className="text-center max-w-3xl mr-auto ml-auto">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-700 uppercase tracking-wide transition-all duration-700 ease-out will-change-transform will-change-filter" data-animate="" style={{willChange: 'auto'}}>
          GRANTS
        </span>
<h2 className="sm:text-5xl transition-all duration-700 ease-out will-change-transform will-change-filter text-4xl font-semibold tracking-tight" data-animate="" style={{transitionDelay: '80ms', willChange: 'auto'}}>Featured
          <span className="bg-clip-text text-transparent" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; h2:nth-of-type(1) &gt; span:nth-of-type(1)" style={{backgroundImage: 'linear-gradient(135deg,#6366f1 0%,#a855f7 100%)'}}>Grants</span>
</h2>
<p className="transition-all duration-700 ease-out will-change-transform will-change-filter text-lg text-gray-600 mt-3" data-animate="" style={{transitionDelay: '140ms', willChange: 'auto'}}>List of featured grants</p>
</div>
</div>
<div className="overflow-hidden bg-white ring-black/5 ring-1 rounded-3xl mx-10">

<div className="hidden grid-cols-12 gap-4 md:grid md:gap-y-0 text-xs font-medium text-gray-500 border-slate-950 pt-3 pr-5 pb-3 pl-5 gap-x-4 gap-y-4">
<div className="col-span-5 items-center">Organization</div>
<div className="col-span-2">Max Grant</div>
<div className="col-span-2">Avg Grant</div>
<div className="col-span-1">Verified</div>
<div className="col-span-2 text-right">Actions</div>
</div>

<div className="divide-y divide-gray-100 max-h-96 md:max-h-[28rem] overflow-y-auto overscroll-contain">

<div className="grid md:grid-cols-12 gap-4 transition-all duration-700 ease-out will-change-transform will-change-filter hover:bg-gray-50 pt-5 pr-5 pb-5 pl-5 gap-x-4 gap-y-4 items-center" data-animate="" style={{transitionDelay: '80ms', willChange: 'auto'}}>
<div className="md:col-span-5 col-span-12">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-gray-50 ring-1 ring-black/5 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight">OP</span>
</div>
<div className="">
<div className="text-sm font-medium text-gray-900">Optimism Grants Council</div>
<div className="text-xs text-gray-500">Layer 2 Ecosystem • Rounds • Builders</div>
</div>
</div>
</div>
<div className="md:col-span-2 col-span-6">
<div className="text-sm font-medium text-gray-900">$250,000</div>
<div className="text-xs text-gray-500">Max Grant Size</div>
</div>
<div className="md:col-span-2 col-span-6">
<div className="text-sm font-medium text-gray-900">$65,000</div>
<div className="text-xs text-gray-500">Avg Award</div>
</div>
<div className="md:col-span-1 col-span-6">
<div className="inline-flex items-center gap-1 text-green-600">
<svg className="lucide lucide-check-circle-2 w-4 h-4" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs font-medium">Yes</span>
</div>
</div>
<div className="md:col-span-2 col-span-12 md:text-right">
<div className="flex md:justify-end gap-2 flex-wrap gap-x-2 gap-y-2">
<a className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white ring-1 ring-black/5 text-gray-800 hover:bg-gray-100" href="#">
<svg className="lucide lucide-external-link w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="external-link" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(31, 41, 55)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
<span className="text-sm">Details</span>
</a>
</div>
</div>
</div>
<div className="grid md:grid-cols-12 gap-4 px-5 py-5 items-center transition-all duration-700 ease-out will-change-transform will-change-filter hover:bg-gray-50" data-animate="" style={{transitionDelay: '140ms', willChange: 'auto'}}>
<div className="md:col-span-5 col-span-12">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-gray-50 ring-1 ring-black/5 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight">SN</span>
</div>
<div className="">
<div className="text-sm font-medium text-gray-900">StarkNet Foundation Grants</div>
<div className="text-xs text-gray-500">ZK L2 • Infra • Tooling</div>
</div>
</div>
</div>
<div className="md:col-span-2 col-span-6">
<div className="text-sm font-medium text-gray-900">$150,000</div>
<div className="text-xs text-gray-500">Max Grant Size</div>
</div>
<div className="md:col-span-2 col-span-6">
<div className="text-sm font-medium text-gray-900">$45,000</div>
<div className="text-xs text-gray-500">Avg Award</div>
</div>
<div className="md:col-span-1 col-span-6">
<div className="inline-flex items-center gap-1 text-green-600">
<svg className="lucide lucide-check-circle-2 w-4 h-4" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs font-medium">Yes</span>
</div>
</div>
<div className="md:col-span-2 col-span-12 md:text-right">
<div className="flex md:justify-end gap-2 flex-wrap">
<a className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white ring-1 ring-black/5 text-gray-800 hover:bg-gray-100" href="#">
<svg className="lucide lucide-external-link w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="external-link" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(31, 41, 55)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
<span className="text-sm">Details</span>
</a>
</div>
</div>
</div>
<div className="grid md:grid-cols-12 gap-4 transition-all duration-700 ease-out will-change-transform will-change-filter hover:bg-gray-50 pt-5 pr-5 pb-5 pl-5 gap-x-4 gap-y-4 items-center" data-animate="" style={{transitionDelay: '200ms', willChange: 'auto'}}>
<div className="md:col-span-5 col-span-12">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-gray-50 ring-1 ring-black/5 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight">SF</span>
</div>
<div className="">
<div className="text-sm font-medium text-gray-900">Solana Foundation Grants</div>
<div className="text-xs text-gray-500">DeFi • Payments • Tooling</div>
</div>
</div>
</div>
<div className="md:col-span-2 col-span-6">
<div className="text-sm font-medium text-gray-900">$250,000</div>
<div className="text-xs text-gray-500">Max Grant Size</div>
</div>
<div className="md:col-span-2 col-span-6">
<div className="text-sm font-medium text-gray-900">$70,000</div>
<div className="text-xs text-gray-500">Avg Award</div>
</div>
<div className="md:col-span-1 col-span-6">
<div className="inline-flex items-center gap-1 text-green-600">
<svg className="lucide lucide-check-circle-2 w-4 h-4" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs font-medium">Yes</span>
</div>
</div>
<div className="md:col-span-2 col-span-12 md:text-right">
<div className="flex md:justify-end gap-2 flex-wrap">
<a className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white ring-1 ring-black/5 text-gray-800 hover:bg-gray-100" href="#">
<svg className="lucide lucide-external-link w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="external-link" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(31, 41, 55)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
<span className="text-sm">Details</span>
</a>
</div>
</div>
</div>
<div className="grid md:grid-cols-12 gap-4 px-5 py-5 items-center transition-all duration-700 ease-out will-change-transform will-change-filter hover:bg-gray-50" data-animate="" style={{transitionDelay: '260ms', willChange: 'auto'}}>
<div className="md:col-span-5 col-span-12">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-gray-50 ring-1 ring-black/5 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight">FD</span>
</div>
<div className="">
<div className="text-sm font-medium text-gray-900">Filecoin Foundation Grants</div>
<div className="text-xs text-gray-500">Storage • Retrieval • Data Infra</div>
</div>
</div>
</div>
<div className="md:col-span-2 col-span-6">
<div className="text-sm font-medium text-gray-900">$100,000</div>
<div className="text-xs text-gray-500">Max Grant Size</div>
</div>
<div className="md:col-span-2 col-span-6">
<div className="text-sm font-medium text-gray-900">$30,000</div>
<div className="text-xs text-gray-500">Avg Award</div>
</div>
<div className="md:col-span-1 col-span-6">
<div className="inline-flex items-center gap-1 text-red-600">
<svg className="lucide lucide-x-circle w-4 h-4" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-xs font-medium">Pending</span>
</div>
</div>
<div className="md:col-span-2 col-span-12 md:text-right">
<div className="flex md:justify-end gap-2 flex-wrap">
<a className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white ring-1 ring-black/5 text-gray-800 hover:bg-gray-100" href="#">
<svg className="lucide lucide-external-link w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="external-link" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(31, 41, 55)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
<span className="text-sm">Details</span>
</a>
</div>
</div>
</div>
<div className="grid md:grid-cols-12 gap-4 px-5 py-5 items-center transition-all duration-700 ease-out will-change-transform will-change-filter hover:bg-gray-50" data-animate="" style={{transitionDelay: '320ms', willChange: 'auto'}}>
<div className="md:col-span-5 col-span-12">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-gray-50 ring-1 ring-black/5 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight">AV</span>
</div>
<div className="">
<div className="text-sm font-medium text-gray-900">Avalanche Multiverse</div>
<div className="text-xs text-gray-500">Subnet • DeFi • Gaming</div>
</div>
</div>
</div>
<div className="md:col-span-2 col-span-6">
<div className="text-sm font-medium text-gray-900">$50,000</div>
<div className="text-xs text-gray-500">Max Grant Size</div>
</div>
<div className="md:col-span-2 col-span-6">
<div className="text-sm font-medium text-gray-900">$18,000</div>
<div className="text-xs text-gray-500">Avg Award</div>
</div>
<div className="md:col-span-1 col-span-6">
<div className="inline-flex items-center gap-1 text-green-600">
<svg className="lucide lucide-check-circle-2 w-4 h-4" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs font-medium">Yes</span>
</div>
</div>
<div className="md:col-span-2 col-span-12 md:text-right">
<div className="flex md:justify-end gap-2 flex-wrap">
<a className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white ring-1 ring-black/5 text-gray-800 hover:bg-gray-100" href="#">
<svg className="lucide lucide-external-link w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="external-link" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(31, 41, 55)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
<span className="text-sm">Details</span>
</a>
</div>
</div>
</div>
<div className="grid md:grid-cols-12 gap-4 transition-all duration-700 ease-out will-change-transform will-change-filter hover:bg-gray-50 pt-5 pr-5 pb-5 pl-5 gap-x-4 gap-y-4 items-center" data-animate="" style={{transitionDelay: '380ms', willChange: 'auto'}}>
<div className="md:col-span-5 col-span-12">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-gray-50 ring-1 ring-black/5 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight">AR</span>
</div>
<div className="">
<div className="text-sm font-medium text-gray-900">Arbitrum Foundation Grants</div>
<div className="text-xs text-gray-500">L2 Ecosystem • Tooling • Growth</div>
</div>
</div>
</div>
<div className="md:col-span-2 col-span-6">
<div className="text-sm font-medium text-gray-900">$200,000</div>
<div className="text-xs text-gray-500">Max Grant Size</div>
</div>
<div className="md:col-span-2 col-span-6">
<div className="text-sm font-medium text-gray-900">$55,000</div>
<div className="text-xs text-gray-500">Avg Award</div>
</div>
<div className="md:col-span-1 col-span-6">
<div className="inline-flex items-center gap-1 text-green-600">
<svg className="lucide lucide-check-circle-2 w-4 h-4" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs font-medium">Yes</span>
</div>
</div>
<div className="md:col-span-2 col-span-12 md:text-right">
<div className="flex md:justify-end gap-2 flex-wrap">
<a className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white ring-1 ring-black/5 text-gray-800 hover:bg-gray-100" href="#">
<svg className="lucide lucide-external-link w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="external-link" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(31, 41, 55)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
<span className="text-sm">Details</span>
</a>
</div>
</div>
</div>

</div>
</div>

<div style={{position: 'absolute', width: '0', height: '0', overflow: 'hidden'}}>
<svg style={{position: 'absolute'}}>
<defs></defs>
</svg>
</div>
</section>
<section className="xl:bg-gray-50 bg-gray-50 pt-24 pb-24" id="following">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-3xl mr-auto ml-auto">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-700 uppercase tracking-wide transition-all duration-700 ease-out will-change-transform will-change-filter" data-animate="" style={{willChange: 'auto'}}>
          Following
        </span>
<h2 className="sm:text-5xl transition-all duration-700 ease-out will-change-transform will-change-filter text-4xl font-semibold tracking-tight" data-animate="" style={{transitionDelay: '80ms', willChange: 'auto'}}>Who We Are
          <span className="bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(135deg,#6366f1 0%,#a855f7 100%)'}}>Following</span>
</h2>
<p className="mt-3 text-lg text-gray-600 transition-all duration-700 ease-out will-change-transform will-change-filter" data-animate="" style={{transitionDelay: '140ms', willChange: 'auto'}}>
          Key leaders and innovators.
        </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 gap-x-6 gap-y-6">

<article className="group hover:shadow-md transition-all duration-300 bg-white border-gray-200 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-indigo-50 ring-1 ring-black/5 flex items-center justify-center">
<span className="text-xs font-semibold text-indigo-700">SB</span>
</div>
<div className="">
<h3 className="font-semibold text-gray-900">Samantha Bohbot</h3>
<p className="text-sm text-gray-500">Digital Currency Group • Director</p>
</div>
</div>
<p className="md:text-center md:tracking-tighter text-sm text-gray-600 mt-4">Lorem ipsum dolor sit amet
            consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.</p>
<div className="flex mt-4 items-center justify-center">
<div className="flex items-center gap-2">
<button className="inline-flex gap-1.5 hover:bg-gray-100 text-gray-800 bg-white ring-black/5 ring-1 rounded-xl pt-2 pr-3 pb-2 pl-3 gap-x-1.5 gap-y-1.5 items-center">
<a className="text-muted-foreground hover:text-primary transition-colors" data-testid="leader-linkedin-rec1ub6I4vgS7RGu3" href="https://twitter.com/samantha_bohbot" rel="noopener noreferrer" target="_blank"><svg className="h-4 w-4" fill="currentColor" height="1em" role="img" stroke="currentColor" strokeWidth="0" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a>
</button>
<button aria-pressed="false" className="project-star inline-flex gap-1.5 hover:bg-gray-100 text-gray-800 bg-white ring-black/5 ring-1 rounded-xl pt-2 pr-3 pb-2 pl-3 gap-x-1.5 gap-y-1.5 items-center">
<a className="text-muted-foreground hover:text-primary transition-colors" data-testid="leader-twitter-rec1ub6I4vgS7RGu3" href="https://www.linkedin.com/in/samantha-bohbot-7622b933/" rel="noopener noreferrer" target="_blank"><svg className="h-4 w-4" fill="currentColor" height="1em" role="img" stroke="currentColor" strokeWidth="0" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg></a>
</button>
</div>
</div>
</article>
<article className="group hover:shadow-md transition-all duration-300 bg-white border-gray-200 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative shadow-sm">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<div className="w-10 h-10 rounded-xl bg-purple-50 ring-1 ring-black/5 flex items-center justify-center">
<span className="text-xs font-semibold text-purple-700">RA</span>
</div>
<div className="">
<h3 className="font-semibold text-gray-900">Ryan Sean Adams</h3>
<p className="text-sm text-gray-500">StarkNet • Tooling</p>
</div>
</div>
<p className="md:text-center md:tracking-tighter text-sm text-gray-600 mt-4">Lorem ipsum dolor sit amet
            consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.</p>
<div className="flex mt-4 items-center justify-center">
<div className="flex items-center gap-2">
<button className="inline-flex gap-1.5 hover:bg-gray-100 text-gray-800 bg-white ring-black/5 ring-1 rounded-xl pt-2 pr-3 pb-2 pl-3 gap-x-1.5 gap-y-1.5 items-center">
<a className="text-muted-foreground hover:text-primary transition-colors" data-testid="leader-linkedin-rec1ub6I4vgS7RGu3" href="https://twitter.com/samantha_bohbot" rel="noopener noreferrer" target="_blank"><svg className="h-4 w-4" fill="currentColor" height="1em" role="img" stroke="currentColor" strokeWidth="0" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a>
</button>
<button aria-pressed="false" className="project-star inline-flex gap-1.5 hover:bg-gray-100 text-gray-800 bg-white ring-black/5 ring-1 rounded-xl pt-2 pr-3 pb-2 pl-3 gap-x-1.5 gap-y-1.5 items-center">
<a className="text-muted-foreground hover:text-primary transition-colors" data-testid="leader-twitter-rec1ub6I4vgS7RGu4" href="https://twitter.com/RyanSAdams" rel="noopener noreferrer" target="_blank">
<svg className="h-4 w-4" fill="currentColor" height="1em" role="img" stroke="currentColor" strokeWidth="0" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
</svg>
</a>
</button>
</div>
</div>
</article>
<article className="group hover:shadow-md transition-all duration-300 bg-white border-gray-200 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-pink-50 ring-1 ring-black/5 flex items-center justify-center">
<span className="text-xs font-semibold text-pink-700">HS</span>
</div>
<div>
<h3 className="font-semibold text-gray-900">Hasu</h3>
<p className="text-sm text-gray-500">Paradigm • Strategy</p>
</div>
</div>
<p className="md:text-center md:tracking-tighter text-sm text-gray-600 mt-4">Research-driven views on crypto
            markets, protocol incentives, and long-term ecosystem design.</p>
<div className="flex mt-4 items-center justify-center">
<div className="flex items-center gap-2">
<button className="inline-flex gap-1.5 hover:bg-gray-100 text-gray-800 bg-white ring-black/5 ring-1 rounded-xl pt-2 pr-3 pb-2 pl-3 items-center">
<a aria-label="Hasu on X" className="text-muted-foreground hover:text-primary transition-colors" href="https://x.com/hasufl" rel="noopener noreferrer" target="_blank">
<svg className="h-4 w-4" fill="currentColor" height="1em" role="img" stroke="currentColor" strokeWidth="0" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
</svg>
</a>
</button>
<button aria-pressed="false" className="project-star inline-flex gap-1.5 hover:bg-gray-100 text-gray-800 bg-white ring-black/5 ring-1 rounded-xl pt-2 pr-3 pb-2 pl-3 items-center">
<a aria-label="Hasu website" className="text-muted-foreground hover:text-primary transition-colors" href="https://hasu.blog" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-link w-4 h-4" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
</a>
</button>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="pt-24 pb-24 bg-white" id="reading">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-700 uppercase tracking-wide">Reading</span>
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mt-2">What We’re
          <span className="bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(135deg,#111827 0%,#4b5563 100%)'}}>Reading</span>
</h2>
<p className="mt-3 text-lg text-gray-600">Curated briefs and deep dives across ecosystems, governance, and grants.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
<article className="group bg-white border border-gray-200 rounded-3xl p-6 hover:shadow-md transition">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-indigo-700 bg-indigo-50 rounded-full px-2 py-1">Ecosystems</span>
<span className="text-xs text-gray-500">8 min read</span>
</div>
<h3 className="mt-4 font-semibold text-gray-900 group-hover:text-gray-800">How L2s Structure Grants in 2025</h3>
<p className="mt-2 text-sm text-gray-600">From optimism to Arbitrum — themes, review processes, and transparent reporting.</p>
<a className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:underline" href="#">
            Read analysis
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</article>
<article className="group bg-white border border-gray-200 rounded-3xl p-6 hover:shadow-md transition">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-purple-700 bg-purple-50 rounded-full px-2 py-1">Governance</span>
<span className="text-xs text-gray-500">5 min read</span>
</div>
<h3 className="mt-4 font-semibold text-gray-900 group-hover:text-gray-800">Measuring Impact: Grant KPIs That Matter</h3>
<p className="mt-2 text-sm text-gray-600">Frameworks to evaluate grants — beyond vanity metrics and short-term activity.</p>
<a className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:underline" href="#">
            Read framework
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</article>
<article className="group bg-white border border-gray-200 rounded-3xl p-6 hover:shadow-md transition">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-emerald-700 bg-emerald-50 rounded-full px-2 py-1">Funding</span>
<span className="text-xs text-gray-500">7 min read</span>
</div>
<h3 className="mt-4 font-semibold text-gray-900 group-hover:text-gray-800">Open Source Funding Loops</h3>
<p className="mt-2 text-sm text-gray-600">Retro funding, quadratic matching, and milestone-based disbursements compared.</p>
<a className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:underline" href="#">
            Explore insights
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</article>
</div>
</div>
</section>

<section className="py-10">
<div className="max-w-7xl mx-auto px-6">
<div className="overflow-hidden bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-700 ring-black/10 ring-1 rounded-3xl relative" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(5) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1)">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 20% 20%, #6366f1 0, transparent 40%), radial-gradient(circle at 80% 30%, #a855f7 0, transparent 45%)'}}></div>
<div className="sm:p-10 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between pt-8 pr-8 pb-8 pl-8 relative gap-x-6 gap-y-6" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(5) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2)">
<div className="">
<h3 className="text-white text-2xl font-semibold tracking-tight">List your grant program</h3>
<p className="text-gray-200 mt-1">Reach thousands of builders actively looking for funding.</p>
</div>
<div className="flex gap-3">
<a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-neutral-900 font-medium hover:bg-gray-100 transition" href="/list-your-program">
              Get listed
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-800 text-white font-medium hover:bg-neutral-700 transition" href="#contact">
              Talk to us
              <svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24 bg-gray-50" id="contact">
<div className="max-w-5xl mx-auto px-6">
<div className="max-w-2xl">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-700 uppercase tracking-wide">Contact</span>
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mt-2">Submit Your
          <span className="bg-clip-text text-transparent" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(6) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; h2:nth-of-type(1) &gt; span:nth-of-type(1)" style={{backgroundImage: 'linear-gradient(135deg,#6366f1 0%,#a855f7 100%)'}}>Program</span>
</h2>
<p className="text-lg text-gray-600 mt-3">Share details about your grant program. We’ll review and get back within 48 hours.</p>
</div>
<div className="mt-8 grid lg:grid-cols-3 gap-8">
<div className="lg:col-span-2">
<form className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm" onsubmit="event.preventDefault(); document.getElementById('contact-success').classList.remove('hidden'); this.reset();">
<div className="grid sm:grid-cols-2 gap-4">
<div className="">
<label className="block text-sm font-medium text-gray-700" htmlFor="name">Your Name</label>
<input className="mt-1 block w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900" id="name" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
<input className="mt-1 block w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900" id="email" name="email" placeholder="jane@org.com" required="" type="email"/>
</div>
<div className="sm:col-span-2">
<label className="block text-sm font-medium text-gray-700" htmlFor="org">Organization</label>
<input className="mt-1 block w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900" id="org" name="org" placeholder="Your Foundation / DAO" type="text"/>
</div>
<div className="sm:col-span-2">
<label className="block text-sm font-medium text-gray-700" htmlFor="message">Program Details</label>
<textarea className="mt-1 block w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900" id="message" name="message" placeholder="Focus areas, eligibility, timelines, links..." required="" rows="5"></textarea>
</div>
</div>
<div className="mt-4 flex items-center gap-3">
<button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition" type="submit">
                Submit Program
                <svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
<a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-neutral-900 ring-1 ring-black/10 hover:bg-gray-50 transition" href="mailto:hello@web3grants.xyz">
                Email us
                <svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
</div>
<p className="hidden mt-4 text-sm text-emerald-700 bg-emerald-50 ring-1 ring-emerald-200 rounded-xl px-3 py-2" id="contact-success">
              Thanks! Your program has been submitted. We’ll be in touch shortly.
            </p>
</form>
</div>
<aside className="space-y-4">
<div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
<h3 className="font-semibold text-gray-900">What to include</h3>
<ul className="mt-3 space-y-2 text-sm text-gray-600 list-disc pl-5">
<li>Focus areas and eligibility</li>
<li>Budget and disbursement model</li>
<li>Review process and timelines</li>
<li>Program links and docs</li>
</ul>
</div>
<div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
<h3 className="font-semibold text-gray-900">Response time</h3>
<p className="mt-2 text-sm text-gray-600">We typically reply within 48 hours on weekdays.</p>
</div>
</aside>
</div>
</div>
</section>

<footer className="border-t border-gray-200 py-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div className="">
<div className="text-lg font-semibold">Web3Grants</div>
<p className="text-sm text-gray-600 mt-1">Transparent data for builders and program teams.</p>
</div>
<div className="flex items-center gap-3">
<a className="text-sm text-gray-700 hover:text-gray-900" href="#grants">Grants</a>
<a className="text-sm text-gray-700 hover:text-gray-900" href="#following">Following</a>
<a className="text-sm text-gray-700 hover:text-gray-900" href="#reading">Reading</a>
<a className="text-sm text-gray-700 hover:text-gray-900" href="#contact">Contact</a>
</div>
</div>
<div className="mt-6 text-xs text-gray-500">© <span id="year">2025</span> Web3Grants. All rights reserved.</div>
</div>
</footer>



    </>
  );
}
