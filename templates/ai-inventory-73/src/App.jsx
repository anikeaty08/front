import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  // Set Year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Scroll Nav
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 40) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  }, { passive: true });

  // Reveal Animations
  const revealEls = document.querySelectorAll('.reveal, .stagger-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  revealEls.forEach(el => observer.observe(el));

  // Tabs Logic
  const tabs = document.querySelectorAll('.cap-tab');
  const panels = document.querySelectorAll('.cap-panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active from all
      tabs.forEach(t => {
        t.classList.remove('is-active', 'border-white/10');
        t.classList.add('text-slate-500', 'border-transparent');
      });
      panels.forEach(p => p.classList.remove('is-active'));
      
      // Add active to clicked
      tab.classList.add('is-active');
      tab.classList.remove('text-slate-500', 'border-transparent');
      const targetId = tab.getAttribute('data-panel');
      document.getElementById(targetId).classList.add('is-active');
    });
  });

  // FAQ Accordion close others
  const detailsElements = document.querySelectorAll("details.faq-details");
  detailsElements.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
      detailsElements.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute("open");
        }
      });
    });
  });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="nav fixed top-0 left-0 right-0 z-50 py-3 transition-all duration-300" id="nav">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between gap-8">
<a className="font-outfit text-lg font-medium tracking-tight text-white flex items-center gap-2" href="#">
<iconify-icon className="text-indigo-400 text-xl" icon="solar:chart-bold-duotone"></iconify-icon>
        Sizo AI
      </a>
<div className="hidden md:flex items-center gap-8" role="navigation">
<a className="text-[0.8125rem] text-slate-400 font-normal hover:text-white relative transition-colors" href="#features">Features</a>
<a className="text-[0.8125rem] text-slate-400 font-normal hover:text-white relative transition-colors" href="#how-it-works">How it Works</a>
<a className="text-[0.8125rem] text-slate-400 font-normal hover:text-white relative transition-colors" href="#pricing">Pricing</a>
<a className="text-[0.8125rem] text-slate-400 font-normal hover:text-white relative transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex text-[0.8125rem] text-slate-300 hover:text-white transition-colors" href="#">Log in</a>
<a className="btn btn-primary px-4 py-2 rounded-full text-[0.8125rem] font-medium tracking-wide" href="#">Analyze Store</a>
</div>
</div>
</div>
</nav>
<main>

<section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center min-h-[90vh]">
<div className="hero__bg-glow"></div>
<div className="relative z-10 text-center max-w-3xl px-6 reveal is-visible flex flex-col items-center w-full">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[0.6875rem] text-indigo-300 mb-6 tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
      Stop Guessing Inventory
    </div>
<h1 className="font-outfit text-4xl md:text-6xl font-light tracking-tight leading-[1.1] mb-6">
      Master Your <span className="text-gradient font-medium">Size Mix</span>
</h1>
<p className="text-slate-400 text-[0.9375rem] md:text-base max-w-xl mx-auto mb-10 font-light">
      The inventory intelligence engine that analyzes your Shopify sales data to tell you <strong>exactly how much to order</strong> of every size (XS–XXL).
    </p>
<div className="hero__actions flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
<a className="btn btn-primary px-7 py-3 rounded-full text-[0.875rem] font-medium w-full sm:w-auto justify-center" href="#">
<span className="btn-shimmer absolute inset-0 rounded-full overflow-hidden pointer-events-none"></span>
        Analyze My Store
        <iconify-icon className="ml-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="btn btn-ghost px-6 py-3 rounded-full text-[0.875rem] w-full sm:w-auto justify-center border-white/10 bg-white/5 hover:bg-white/10" href="#features">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
        See How It Works
      </a>
</div>
</div>

<div className="relative z-10 w-full max-w-4xl px-6 mt-16 reveal is-visible" style={{transitionDelay: '200ms'}}>
<div className="glass-panel p-6 shadow-2xl shadow-indigo-500/10">
<div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
<div className="flex items-center gap-3">
<iconify-icon className="text-indigo-400 text-xl" icon="solar:t-shirt-linear"></iconify-icon>
<div>
<div className="text-[0.8125rem] font-medium text-white">Classic Cotton Tee - Black</div>
<div className="text-[0.6875rem] text-slate-400 font-mono">SKU: TEE-BLK-01</div>
</div>
</div>
<div className="flex items-center gap-4 text-[0.75rem]">
<div className="flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-md border border-emerald-500/20">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> High Confidence
          </div>
</div>
</div>
<div className="flex flex-col md:flex-row gap-8">
<div className="flex-1">
<div className="text-[0.75rem] uppercase tracking-wider text-slate-500 mb-4 font-medium">Optimal Restock Distribution</div>
<div className="size-bar-container">
<div className="size-bar-wrap">
<div className="size-bar" style={{height: '8%'}}><span className="size-val">8%</span></div>
<span className="size-label">XS</span>
</div>
<div className="size-bar-wrap">
<div className="size-bar" style={{height: '22%'}}><span className="size-val">22%</span></div>
<span className="size-label">S</span>
</div>
<div className="size-bar-wrap">
<div className="size-bar" style={{height: '31%'}}><span className="size-val">31%</span></div>
<span className="size-label">M</span>
</div>
<div className="size-bar-wrap">
<div className="size-bar" style={{height: '24%'}}><span className="size-val">24%</span></div>
<span className="size-label">L</span>
</div>
<div className="size-bar-wrap">
<div className="size-bar" style={{height: '12%'}}><span className="size-val">12%</span></div>
<span className="size-label">XL</span>
</div>
<div className="size-bar-wrap">
<div className="size-bar" style={{height: '3%'}}><span className="size-val">3%</span></div>
<span className="size-label">XXL</span>
</div>
</div>
</div>
<div className="w-full md:w-64 flex flex-col gap-4">
<div className="bg-white/5 rounded-lg p-4 border border-white/5">
<div className="text-[0.6875rem] text-slate-400 mb-1">Target Restock Quantity</div>
<div className="font-outfit text-2xl font-light text-white mb-3">5,000 <span className="text-[0.8125rem] text-slate-500 font-sans">units</span></div>
<div className="mock-slider"><div className="mock-slider-fill"></div><div className="mock-slider-thumb"></div></div>
<div className="flex justify-between text-[0.625rem] text-slate-500 mt-2"><span>1k</span><span>10k</span></div>
</div>
<div className="bg-white/5 rounded-lg p-4 border border-white/5 flex items-center justify-between">
<div className="text-[0.75rem] text-slate-300">Filter noise (returns)</div>
<div className="mock-toggle"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center text-[0.75rem] text-slate-500 uppercase tracking-widest mb-6 font-medium">Trusted by leading Shopify apparel brands</div>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 font-outfit text-xl font-medium tracking-tight"><iconify-icon className="text-2xl" icon="solar:shop-linear"></iconify-icon> Shopify Plus</div>
<div className="flex items-center gap-2 font-outfit text-xl font-medium tracking-tight"><iconify-icon className="text-2xl" icon="solar:tag-linear"></iconify-icon> ThreadCo</div>
<div className="flex items-center gap-2 font-outfit text-xl font-medium tracking-tight"><iconify-icon className="text-2xl" icon="solar:bag-3-linear"></iconify-icon> Loom &amp; Stitch</div>
<div className="flex items-center gap-2 font-outfit text-xl font-medium tracking-tight"><iconify-icon className="text-2xl" icon="solar:t-shirt-linear"></iconify-icon> Basics.</div>
<div className="flex items-center gap-2 font-outfit text-xl font-medium tracking-tight"><iconify-icon className="text-2xl" icon="solar:hanger-linear"></iconify-icon> Vercetti</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="features">
<div className="absolute top-1/2 left-[20%] w-[30rem] h-[30rem] bg-indigo-500/5 rounded-full blur-[6rem] -translate-y-1/2 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<div className="section-label text-[0.6875rem] mb-3">The Solution</div>
<h2 className="font-outfit text-3xl md:text-4xl font-light tracking-tight leading-tight mb-4">
        Stop guessing. <span className="text-gradient font-medium">Start scaling with data.</span>
</h2>
<p className="text-slate-400 text-[0.9375rem] max-w-xl mx-auto font-light">
        Manual spreadsheets lead to stockouts on popular sizes and dead inventory on extremes. Sizo AI turns your historical sales into a precise procurement plan.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-[14rem_1fr] gap-8 md:gap-12 reveal items-start">

<div className="flex flex-row md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0" role="tablist">
<div className="cap-tab is-active p-3 rounded-lg cursor-pointer flex items-center gap-3 border border-transparent transition-all shrink-0" data-panel="tab-mix" role="tab">
<div className="cap-tab__icon w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-lg shrink-0 transition-all">
<iconify-icon icon="solar:pie-chart-2-linear"></iconify-icon>
</div>
<span className="text-[0.875rem]">Perfect Restock Mix</span>
</div>
<div className="cap-tab p-3 rounded-lg cursor-pointer flex items-center gap-3 border border-transparent transition-all shrink-0 text-slate-500 hover:text-slate-300 hover:bg-white/5" data-panel="tab-confidence" role="tab">
<div className="cap-tab__icon w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-lg shrink-0 transition-all">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
</div>
<span className="text-[0.875rem]">Confidence Scoring</span>
</div>
<div className="cap-tab p-3 rounded-lg cursor-pointer flex items-center gap-3 border border-transparent transition-all shrink-0 text-slate-500 hover:text-slate-300 hover:bg-white/5" data-panel="tab-simulator" role="tab">
<div className="cap-tab__icon w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-lg shrink-0 transition-all">
<iconify-icon icon="solar:slider-minimalistic-horizontal-linear"></iconify-icon>
</div>
<span className="text-[0.875rem]">Sales Simulator</span>
</div>
</div>

<div className="relative min-h-[20rem]">

<div className="cap-panel is-active" id="tab-mix">
<h3 className="font-outfit text-xl font-medium tracking-tight mb-2">Calculated Size Distribution</h3>
<p className="text-slate-400 text-[0.875rem] max-w-md mb-8 font-light">
            We analyze your store's entire sales history, factoring in out-of-stock periods, to reveal true demand and generate the optimal percentage mix for your next PO.
          </p>
<div className="glass-panel p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-500/10 rounded-full blur-[3rem] pointer-events-none"></div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 relative z-10">
<div className="bg-white/5 border border-white/5 rounded-lg p-4 text-center hover:border-indigo-500/30 transition-colors">
<div className="font-mono text-xl text-indigo-400 mb-1">22%</div>
<div className="text-[0.6875rem] text-slate-500 tracking-widest uppercase">Size S</div>
</div>
<div className="bg-white/5 border border-indigo-500/20 rounded-lg p-4 text-center shadow-[0_0_1rem_rgba(99,102,241,0.1)] relative">
<div className="absolute -top-2 -right-2 bg-indigo-500 text-white text-[0.625rem] px-1.5 py-0.5 rounded uppercase tracking-wider font-mono">Core</div>
<div className="font-mono text-xl text-indigo-400 mb-1">31%</div>
<div className="text-[0.6875rem] text-slate-500 tracking-widest uppercase">Size M</div>
</div>
<div className="bg-white/5 border border-white/5 rounded-lg p-4 text-center hover:border-indigo-500/30 transition-colors">
<div className="font-mono text-xl text-indigo-400 mb-1">24%</div>
<div className="text-[0.6875rem] text-slate-500 tracking-widest uppercase">Size L</div>
</div>
</div>
</div>
</div>

<div className="cap-panel" id="tab-confidence">
<h3 className="font-outfit text-xl font-medium tracking-tight mb-2">Data Reliability Engine</h3>
<p className="text-slate-400 text-[0.875rem] max-w-md mb-8 font-light">
            Not all data is equal. Sizo AI evaluates statistical noise, return rates, and sample sizes to tell you exactly when to trust the recommendation.
          </p>
<div className="glass-panel p-6">
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
<div className="flex items-center gap-3">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<div>
<div className="text-[0.8125rem] text-white font-medium">High Confidence</div>
<div className="text-[0.6875rem] text-slate-400">Over 1,000 unit sales analyzed</div>
</div>
</div>
<div className="font-mono text-[0.8125rem] text-emerald-400">94% Score</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 opacity-70">
<div className="flex items-center gap-3">
<iconify-icon className="text-slate-400 text-xl" icon="solar:graph-up-linear"></iconify-icon>
<div>
<div className="text-[0.8125rem] text-white">Statistical Noise</div>
<div className="text-[0.6875rem] text-slate-400">Anomalous spikes filtered out</div>
</div>
</div>
<div className="font-mono text-[0.8125rem] text-slate-400">2.1%</div>
</div>
</div>
</div>
</div>

<div className="cap-panel" id="tab-simulator">
<h3 className="font-outfit text-xl font-medium tracking-tight mb-2">Scenario Simulator</h3>
<p className="text-slate-400 text-[0.875rem] max-w-md mb-8 font-light">
            Input your budget or unit goal and instantly see how your inventory will perform. Anticipate stockouts before you even cut the PO.
          </p>
<div className="glass-panel p-6">
<div className="mb-6">
<div className="flex justify-between text-[0.75rem] text-slate-400 mb-2">
<span>Proposed Order Quantity</span>
<span className="text-white font-mono">1,500 units</span>
</div>
<div className="mock-slider"><div className="mock-slider-fill" style={{width: '45%'}}></div><div className="mock-slider-thumb" style={{left: '45%'}}></div></div>
</div>
<div className="p-4 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
<div className="text-[0.75rem] text-indigo-300 mb-1 flex items-center gap-1.5"><iconify-icon icon="solar:danger-circle-linear"></iconify-icon> Projection Warning</div>
<div className="text-[0.8125rem] text-white">At current velocity, <strong>Size M</strong> will stock out 24 days before <strong>Size XXL</strong>. Consider increasing M ratio by 3%.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.02] border-y border-white/5 relative" id="how-it-works">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<div className="section-label text-[0.6875rem] mb-3">Pipeline</div>
<h2 className="font-outfit text-3xl md:text-4xl font-light tracking-tight mb-4">
        From connection to <span className="text-gradient font-medium">restock plan</span>
</h2>
</div>
<div className="flex flex-col md:flex-row items-start justify-between relative stagger-up gap-10 md:gap-0">

<div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[0.0625rem] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0">
<div className="absolute top-0 left-0 w-1/4 h-full bg-indigo-400 shadow-[0_0_10px_#818cf8] animation-pulse" style={{animation: 'shimmer-sweep 3s infinite'}}></div>
</div>
<div className="flex-1 text-center relative z-10 px-4 reveal-child w-full">
<div className="text-[0.625rem] font-mono tracking-widest text-indigo-400 uppercase mb-4">Step 01</div>
<div className="w-20 h-20 mx-auto rounded-full bg-[#030509] border border-white/10 flex items-center justify-center mb-5 shadow-[0_0_2rem_rgba(0,0,0,0.5)] relative">
<iconify-icon className="text-3xl text-white" icon="solar:shop-bold-duotone"></iconify-icon>
<div className="absolute -right-2 -bottom-2 bg-emerald-500 w-4 h-4 rounded-full border-2 border-[#030509]"></div>
</div>
<h3 className="font-outfit text-lg font-medium tracking-tight mb-2">Connect Store</h3>
<p className="text-[0.8125rem] text-slate-400 font-light max-w-[14rem] mx-auto">1-click integration with Shopify. Secure, read-only access to historical sales.</p>
</div>
<div className="flex-1 text-center relative z-10 px-4 reveal-child w-full">
<div className="text-[0.625rem] font-mono tracking-widest text-indigo-400 uppercase mb-4">Step 02</div>
<div className="w-20 h-20 mx-auto rounded-full bg-[#030509] border-2 border-indigo-500/50 flex items-center justify-center mb-5 shadow-[0_0_2rem_rgba(99,102,241,0.2)]">
<iconify-icon className="text-3xl text-indigo-400" icon="solar:magic-stick-3-bold-duotone"></iconify-icon>
</div>
<h3 className="font-outfit text-lg font-medium tracking-tight mb-2">AI Analyzes Data</h3>
<p className="text-[0.8125rem] text-slate-400 font-light max-w-[14rem] mx-auto">Algorithm accounts for seasonality, stockouts, and statistical noise automatically.</p>
</div>
<div className="flex-1 text-center relative z-10 px-4 reveal-child w-full">
<div className="text-[0.625rem] font-mono tracking-widest text-indigo-400 uppercase mb-4">Step 03</div>
<div className="w-20 h-20 mx-auto rounded-full bg-[#030509] border border-white/10 flex items-center justify-center mb-5 shadow-[0_0_2rem_rgba(0,0,0,0.5)]">
<iconify-icon className="text-3xl text-white" icon="solar:document-text-bold-duotone"></iconify-icon>
</div>
<h3 className="font-outfit text-lg font-medium tracking-tight mb-2">Get Restock Plan</h3>
<p className="text-[0.8125rem] text-slate-400 font-light max-w-[14rem] mx-auto">Export precise quantities for XS-XXL straight to CSV or PDF for your factory.</p>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-12 text-center reveal">
<div className="section-label text-[0.6875rem] mb-3">Testimonials</div>
<h2 className="font-outfit text-3xl font-light tracking-tight">Brands running on <span className="text-gradient font-medium">Sizo AI</span></h2>
</div>
<div className="relative w-full overflow-hidden flex flex-col gap-6">

<div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#030509] to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#030509] to-transparent z-10 pointer-events-none"></div>
<div className="marquee-track">

<div className="w-[22rem] shrink-0 p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-colors">
<p className="text-[0.875rem] text-slate-300 font-light italic mb-6 leading-relaxed">"Sizo AI reduced our stockouts by 40% on core sizes. We used to just guess 1-2-2-1 ratios. This is a game changer for cash flow."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-outfit text-sm">AS</div>
<div><div className="text-[0.8125rem] font-medium text-white">Alex S.</div><div className="text-[0.6875rem] text-slate-500">Founder, ThreadCo</div></div>
</div>
</div>
<div className="w-[22rem] shrink-0 p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-colors">
<p className="text-[0.875rem] text-slate-300 font-light italic mb-6 leading-relaxed">"No more dead inventory sitting in XXL. The confidence score helped us realize our data was skewed by a massive wholesale order."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-outfit text-sm">MR</div>
<div><div className="text-[0.8125rem] font-medium text-white">Mia R.</div><div className="text-[0.6875rem] text-slate-500">COO, Loom &amp; Stitch</div></div>
</div>
</div>
<div className="w-[22rem] shrink-0 p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-colors">
<p className="text-[0.875rem] text-slate-300 font-light italic mb-6 leading-relaxed">"The sales simulator let us visualize our buy before committing $50k to the factory. Paid for itself on the first PO."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-outfit text-sm">JL</div>
<div><div className="text-[0.8125rem] font-medium text-white">James L.</div><div className="text-[0.6875rem] text-slate-500">Director of Ops, Basics.</div></div>
</div>
</div>

<div className="w-[22rem] shrink-0 p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-colors">
<p className="text-[0.875rem] text-slate-300 font-light italic mb-6 leading-relaxed">"Sizo AI reduced our stockouts by 40% on core sizes. We used to just guess 1-2-2-1 ratios. This is a game changer for cash flow."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-outfit text-sm">AS</div>
<div><div className="text-[0.8125rem] font-medium text-white">Alex S.</div><div className="text-[0.6875rem] text-slate-500">Founder, ThreadCo</div></div>
</div>
</div>
<div className="w-[22rem] shrink-0 p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-colors">
<p className="text-[0.875rem] text-slate-300 font-light italic mb-6 leading-relaxed">"No more dead inventory sitting in XXL. The confidence score helped us realize our data was skewed by a massive wholesale order."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-outfit text-sm">MR</div>
<div><div className="text-[0.8125rem] font-medium text-white">Mia R.</div><div className="text-[0.6875rem] text-slate-500">COO, Loom &amp; Stitch</div></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="pricing">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-indigo-500/5 rounded-full blur-[6rem] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal">
<div className="section-label text-[0.6875rem] mb-3">Pricing</div>
<h2 className="font-outfit text-3xl md:text-4xl font-light tracking-tight mb-4">
        Simple plans for <span className="text-gradient font-medium">growing brands</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-up items-center">

<div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] reveal-child flex flex-col h-full">
<h3 className="text-xl font-medium tracking-tight mb-2">Free</h3>
<p className="text-[0.8125rem] text-slate-400 mb-6">Perfect to test the waters with your store data.</p>
<div className="font-outfit text-4xl font-light mb-8">$0 <span className="text-[0.875rem] text-slate-500 font-sans font-normal tracking-normal">/ mo</span></div>
<div className="flex flex-col gap-3 mb-8 flex-1">
<div className="flex items-start gap-2 text-[0.8125rem] text-slate-300 font-light">
<iconify-icon className="text-slate-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Limited SKU analysis
          </div>
<div className="flex items-start gap-2 text-[0.8125rem] text-slate-300 font-light">
<iconify-icon className="text-slate-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Basic restock suggestions
          </div>
<div className="flex items-start gap-2 text-[0.8125rem] text-slate-300 font-light">
<iconify-icon className="text-slate-500 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> 3 months data history
          </div>
</div>
<a className="btn btn-ghost w-full justify-center py-2.5 rounded-lg text-[0.875rem]" href="#">Get Started</a>
</div>

<div className="p-8 rounded-2xl border border-indigo-500/30 bg-gradient-to-b from-indigo-500/[0.05] to-transparent shadow-[0_0_3rem_rgba(99,102,241,0.1)] reveal-child flex flex-col h-[105%] relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[0.625rem] uppercase tracking-widest px-3 py-1 rounded-full font-medium">Recommended</div>
<h3 className="text-xl font-medium tracking-tight mb-2">Premium</h3>
<p className="text-[0.8125rem] text-indigo-200/60 mb-6">Full optimization for serious apparel brands.</p>
<div className="font-outfit text-4xl font-light mb-8 text-white">$49 <span className="text-[0.875rem] text-slate-500 font-sans font-normal tracking-normal">/ mo</span></div>
<div className="flex flex-col gap-3 mb-8 flex-1">
<div className="flex items-start gap-2 text-[0.8125rem] text-slate-200 font-light">
<iconify-icon className="text-indigo-400 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Full AI restock optimization
          </div>
<div className="flex items-start gap-2 text-[0.8125rem] text-slate-200 font-light">
<iconify-icon className="text-indigo-400 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Confidence scoring &amp; noise filter
          </div>
<div className="flex items-start gap-2 text-[0.8125rem] text-slate-200 font-light">
<iconify-icon className="text-indigo-400 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Interactive Sales Simulator
          </div>
<div className="flex items-start gap-2 text-[0.8125rem] text-slate-200 font-light">
<iconify-icon className="text-indigo-400 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Full historical data analysis
          </div>
<div className="flex items-start gap-2 text-[0.8125rem] text-slate-200 font-light">
<iconify-icon className="text-indigo-400 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon> Export to CSV / PDF
          </div>
</div>
<a className="btn btn-primary w-full justify-center py-2.5 rounded-lg text-[0.875rem]" href="#">Upgrade to Premium</a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-white/[0.01]" id="faq">
<div className="max-w-3xl mx-auto px-6 reveal">
<div className="text-center mb-12">
<h2 className="font-outfit text-3xl font-light tracking-tight">Frequently Asked Questions</h2>
</div>
<div className="flex flex-col gap-4">
<details className="faq-details group border border-white/10 bg-white/5 rounded-xl transition-colors hover:border-white/20">
<summary className="flex items-center justify-between p-5 text-[0.9375rem] font-medium select-none outline-none">
          How does Sizo AI work?
          <iconify-icon className="faq-icon text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="faq-content px-5 pb-5 text-[0.875rem] text-slate-400 font-light leading-relaxed">
          Sizo AI connects to your Shopify store via a secure app. It pulls historical sales data, analyzes velocity by size, accounts for periods where sizes were sold out, and outputs a statistically optimal size ratio for your next production run.
        </div>
</details>
<details className="faq-details group border border-white/10 bg-white/5 rounded-xl transition-colors hover:border-white/20">
<summary className="flex items-center justify-between p-5 text-[0.9375rem] font-medium select-none outline-none">
          What is statistical noise?
          <iconify-icon className="faq-icon text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="faq-content px-5 pb-5 text-[0.875rem] text-slate-400 font-light leading-relaxed">
          Noise refers to irregular data points—like a single wholesale order buying out all your XS stock, or unusual return rates. Sizo AI identifies and filters these anomalies so your restock plan is based on true organic customer demand.
        </div>
</details>
<details className="faq-details group border border-white/10 bg-white/5 rounded-xl transition-colors hover:border-white/20">
<summary className="flex items-center justify-between p-5 text-[0.9375rem] font-medium select-none outline-none">
          Does it work for new stores?
          <iconify-icon className="faq-icon text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="faq-content px-5 pb-5 text-[0.875rem] text-slate-400 font-light leading-relaxed">
          Yes, but accuracy improves with volume. If you have fewer than 100 sales per SKU, Sizo AI will assign a "Low Confidence" score to the recommendation. It still provides a better baseline than guessing.
        </div>
</details>
<details className="faq-details group border border-white/10 bg-white/5 rounded-xl transition-colors hover:border-white/20">
<summary className="flex items-center justify-between p-5 text-[0.9375rem] font-medium select-none outline-none">
          Can I export data for my factory?
          <iconify-icon className="faq-icon text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="faq-content px-5 pb-5 text-[0.875rem] text-slate-400 font-light leading-relaxed">
          Absolutely. Premium users can generate clean PDF or CSV reports detailing exact unit quantities per size, ready to be attached to your factory Purchase Order.
        </div>
</details>
<details className="faq-details group border border-white/10 bg-white/5 rounded-xl transition-colors hover:border-white/20">
<summary className="flex items-center justify-between p-5 text-[0.9375rem] font-medium select-none outline-none">
          Is my Shopify data secure?
          <iconify-icon className="faq-icon text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="faq-content px-5 pb-5 text-[0.875rem] text-slate-400 font-light leading-relaxed">
          Yes. We request read-only access exclusively for sales and inventory data. We do not access customer personal identifiable information (PII) like names, emails, or addresses.
        </div>
</details>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden text-center">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[8rem] pointer-events-none"></div>
<div className="max-w-2xl mx-auto px-6 relative z-10 reveal">
<h2 className="font-outfit text-4xl md:text-5xl font-light tracking-tight mb-6">
      Stop Guessing. <br/><span className="text-gradient font-medium">Start Scaling.</span>
</h2>
<p className="text-slate-400 mb-10 text-[0.9375rem] font-light">Connect your store today and get your perfect size mix in minutes.</p>
<a className="btn btn-primary px-8 py-3.5 rounded-full text-[0.9375rem] font-medium" href="#">
<span className="btn-shimmer absolute inset-0 rounded-full overflow-hidden pointer-events-none"></span>
      Analyze My Store
      <iconify-icon className="ml-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</section>
</main>

<footer className="border-t border-white/10 pt-16 pb-8 bg-[#030509]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="font-outfit text-lg font-medium tracking-tight text-white flex items-center gap-2 mb-4">
<iconify-icon className="text-indigo-400 text-xl" icon="solar:chart-bold-duotone"></iconify-icon>
          Sizo AI
        </div>
<p className="text-[0.8125rem] text-slate-500 font-light max-w-xs">
          The inventory intelligence engine helping apparel brands master their size distribution.
        </p>
</div>
<div>
<h4 className="text-[0.75rem] font-medium uppercase tracking-widest text-slate-300 mb-4">Product</h4>
<ul className="flex flex-col gap-2">
<li><a className="text-[0.8125rem] text-slate-500 hover:text-white transition-colors" href="#features">Features</a></li>
<li><a className="text-[0.8125rem] text-slate-500 hover:text-white transition-colors" href="#pricing">Pricing</a></li>
<li><a className="text-[0.8125rem] text-slate-500 hover:text-white transition-colors" href="#">Shopify App</a></li>
</ul>
</div>
<div>
<h4 className="text-[0.75rem] font-medium uppercase tracking-widest text-slate-300 mb-4">Resources</h4>
<ul className="flex flex-col gap-2">
<li><a className="text-[0.8125rem] text-slate-500 hover:text-white transition-colors" href="#faq">FAQ</a></li>
<li><a className="text-[0.8125rem] text-slate-500 hover:text-white transition-colors" href="#">Help Center</a></li>
<li><a className="text-[0.8125rem] text-slate-500 hover:text-white transition-colors" href="#">Contact Support</a></li>
</ul>
</div>
<div>
<h4 className="text-[0.75rem] font-medium uppercase tracking-widest text-slate-300 mb-4">Legal</h4>
<ul className="flex flex-col gap-2">
<li><a className="text-[0.8125rem] text-slate-500 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-[0.8125rem] text-slate-500 hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-[0.75rem] text-slate-600 font-light">
        © <span id="year"></span> Sizo AI. All rights reserved.
      </div>
<div className="flex items-center gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:global-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
