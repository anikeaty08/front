import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-medium tracking-tight" href="#">MAZU</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-neutral-500 hover:text-neutral-900 transition-colors" href="#collection">The Protocol</a>
<a className="text-sm font-normal text-neutral-500 hover:text-neutral-900 transition-colors" href="#benefits">Why Sachets</a>
<a className="text-sm font-normal text-neutral-500 hover:text-neutral-900 transition-colors" href="#science">Science</a>
<a className="text-sm font-normal text-neutral-500 hover:text-neutral-900 transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block bg-neutral-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors">
                    Shop All
                </button>
<button className="md:hidden text-neutral-900">
<i data-lucide="menu" height="24" width="24"></i>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none opacity-40">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
<div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-50 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
</div>
<div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-neutral-900 mb-8 leading-[1.1]">
                Live in Balance.
            </h1>
<p className="text-lg md:text-xl text-neutral-500 max-w-2xl mb-12 leading-relaxed font-normal">
                Optimization without compromise. Precision-dosed soluble sachets designed to support your natural rhythm from morning focus to evening recovery.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto bg-neutral-900 text-white text-base font-medium px-8 py-3.5 rounded-full hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 group">
                    Shop The Protocol
                    <i className="group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right" height="18" width="18"></i>
</button>
<button className="w-full sm:w-auto bg-white border border-neutral-200 text-neutral-900 text-base font-medium px-8 py-3.5 rounded-full hover:bg-neutral-50 transition-colors">
                    Explore the Science
                </button>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-neutral-100" id="benefits">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-neutral-900">Why Sachets?</h2>
<p className="text-neutral-500 mt-4 max-w-xl text-lg">Beyond convenience. A delivery system engineered for efficacy.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group p-6 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 transition-colors">
<div className="w-12 h-12 bg-white rounded-xl border border-neutral-200 flex items-center justify-center mb-6 text-neutral-900">
<i data-lucide="scale" height="24" width="24"></i>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">Precision Dosing</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Exact milligrams of active ingredients in every pouch. No scoops, no guesswork, just consistent results.</p>
</div>

<div className="group p-6 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 transition-colors">
<div className="w-12 h-12 bg-white rounded-xl border border-neutral-200 flex items-center justify-center mb-6 text-neutral-900">
<i data-lucide="droplets" height="24" width="24"></i>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">High Bioavailability</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Water-soluble formulation ensures rapid absorption, bypassing digestion lag for immediate effect.</p>
</div>

<div className="group p-6 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 transition-colors">
<div className="w-12 h-12 bg-white rounded-xl border border-neutral-200 flex items-center justify-center mb-6 text-neutral-900">
<i data-lucide="briefcase" height="24" width="24"></i>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">Portability</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Designed for the modern nomad. TSA-friendly, gym-ready, and desk-approved. Optimization anywhere.</p>
</div>

<div className="group p-6 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 transition-colors">
<div className="w-12 h-12 bg-white rounded-xl border border-neutral-200 flex items-center justify-center mb-6 text-neutral-900">
<i data-lucide="leaf" height="24" width="24"></i>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">Sustainability</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Less plastic waste than tub containers. Our minimalist packaging is designed with the planet in mind.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-100 bg-neutral-50/50" id="collection">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight text-neutral-900 mb-4">The Collection</h2>
<p className="text-neutral-500 max-w-md font-normal leading-relaxed">
                        Four distinct blends. One complete system.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group flex flex-col h-full bg-white rounded-2xl p-8 border border-neutral-200 hover:ring-2 hover:ring-blue-100 hover:border-blue-200 transition-all shadow-sm">
<div className="mb-6 flex justify-between items-start">
<div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
<i data-lucide="brain-circuit" height="20" width="20"></i>
</div>
<span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full uppercase tracking-wider">Morning</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-1">Mazu Focus</h3>
<p className="text-sm text-neutral-500 mb-6">Cognitive Enhancement</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-2 text-sm text-neutral-600">
<i className="text-blue-500 mt-0.5" data-lucide="check" height="14" width="14"></i> Eliminate brain fog
                        </li>
<li className="flex items-start gap-2 text-sm text-neutral-600">
<i className="text-blue-500 mt-0.5" data-lucide="check" height="14" width="14"></i> Deep work stamina
                        </li>
<li className="flex items-start gap-2 text-sm text-neutral-600">
<i className="text-blue-500 mt-0.5" data-lucide="check" height="14" width="14"></i> Lions Mane + Tyrosine
                        </li>
</ul>
<div className="mt-auto">
<button className="w-full py-2.5 rounded-lg border border-neutral-200 text-sm font-medium text-neutral-900 hover:bg-neutral-50 transition-colors">View Details</button>
</div>
</div>

<div className="group flex flex-col h-full bg-white rounded-2xl p-8 border border-neutral-200 hover:ring-2 hover:ring-amber-100 hover:border-amber-200 transition-all shadow-sm">
<div className="mb-6 flex justify-between items-start">
<div className="p-3 bg-amber-50 text-amber-600 rounded-full">
<i data-lucide="zap" height="20" width="20"></i>
</div>
<span className="text-[10px] font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-full uppercase tracking-wider">Midday</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-1">Mazu Energy</h3>
<p className="text-sm text-neutral-500 mb-6">Clean Performance</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-2 text-sm text-neutral-600">
<i className="text-amber-500 mt-0.5" data-lucide="check" height="14" width="14"></i> Zero-crash lift
                        </li>
<li className="flex items-start gap-2 text-sm text-neutral-600">
<i className="text-amber-500 mt-0.5" data-lucide="check" height="14" width="14"></i> Sustained flow state
                        </li>
<li className="flex items-start gap-2 text-sm text-neutral-600">
<i className="text-amber-500 mt-0.5" data-lucide="check" height="14" width="14"></i> Cordyceps + B12
                        </li>
</ul>
<div className="mt-auto">
<button className="w-full py-2.5 rounded-lg border border-neutral-200 text-sm font-medium text-neutral-900 hover:bg-neutral-50 transition-colors">View Details</button>
</div>
</div>

<div className="group flex flex-col h-full bg-white rounded-2xl p-8 border border-neutral-200 hover:ring-2 hover:ring-emerald-100 hover:border-emerald-200 transition-all shadow-sm">
<div className="mb-6 flex justify-between items-start">
<div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
<i data-lucide="waves" height="20" width="20"></i>
</div>
<span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full uppercase tracking-wider">Afternoon</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-1">Mazu Calm</h3>
<p className="text-sm text-neutral-500 mb-6">Stress Reset</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-2 text-sm text-neutral-600">
<i className="text-emerald-500 mt-0.5" data-lucide="check" height="14" width="14"></i> Reduce cortisol
                        </li>
<li className="flex items-start gap-2 text-sm text-neutral-600">
<i className="text-emerald-500 mt-0.5" data-lucide="check" height="14" width="14"></i> Clear mental clutter
                        </li>
<li className="flex items-start gap-2 text-sm text-neutral-600">
<i className="text-emerald-500 mt-0.5" data-lucide="check" height="14" width="14"></i> Ashwagandha + L-Theanine
                        </li>
</ul>
<div className="mt-auto">
<button className="w-full py-2.5 rounded-lg border border-neutral-200 text-sm font-medium text-neutral-900 hover:bg-neutral-50 transition-colors">View Details</button>
</div>
</div>

<div className="group flex flex-col h-full bg-white rounded-2xl p-8 border border-neutral-200 hover:ring-2 hover:ring-violet-100 hover:border-violet-200 transition-all shadow-sm">
<div className="mb-6 flex justify-between items-start">
<div className="p-3 bg-violet-50 text-violet-600 rounded-lg rotate-45">
<div className="-rotate-45">
<i data-lucide="moon" height="20" width="20"></i>
</div>
</div>
<span className="text-[10px] font-semibold text-violet-600 bg-violet-50 px-2 py-1 rounded-full uppercase tracking-wider">Evening</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-1">Mazu Recover</h3>
<p className="text-sm text-neutral-500 mb-6">Deep Restoration</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-2 text-sm text-neutral-600">
<i className="text-violet-500 mt-0.5" data-lucide="check" height="14" width="14"></i> Muscle repair
                        </li>
<li className="flex items-start gap-2 text-sm text-neutral-600">
<i className="text-violet-500 mt-0.5" data-lucide="check" height="14" width="14"></i> Prepare for sleep
                        </li>
<li className="flex items-start gap-2 text-sm text-neutral-600">
<i className="text-violet-500 mt-0.5" data-lucide="check" height="14" width="14"></i> Magnesium + Tart Cherry
                        </li>
</ul>
<div className="mt-auto">
<button className="w-full py-2.5 rounded-lg border border-neutral-200 text-sm font-medium text-neutral-900 hover:bg-neutral-50 transition-colors">View Details</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-neutral-100" id="science">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">

<div>
<h2 className="text-2xl font-medium tracking-tight text-neutral-900 mb-8">From Lab to Pouch</h2>
<div className="space-y-10">
<div className="flex gap-6">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 font-semibold text-sm">1</div>
<div>
<h4 className="text-base font-medium text-neutral-900">Research Foundation</h4>
<p className="text-sm text-neutral-500 mt-2 leading-relaxed">Formulations based on double-blind clinical studies, not trends. We select ingredients with proven efficacy profiles.</p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 font-semibold text-sm">2</div>
<div>
<h4 className="text-base font-medium text-neutral-900">Synergistic Blending</h4>
<p className="text-sm text-neutral-500 mt-2 leading-relaxed">Ingredients are paired to amplify effects (e.g., L-Theanine + Caffeine) while neutralizing potential side effects like jitters.</p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 font-semibold text-sm">3</div>
<div>
<h4 className="text-base font-medium text-neutral-900">Purity Testing</h4>
<p className="text-sm text-neutral-500 mt-2 leading-relaxed">Every batch is third-party tested for heavy metals and contaminants. What’s on the label is in the pouch.</p>
</div>
</div>
</div>
</div>

<div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100">
<h3 className="text-xl font-medium text-neutral-900 mb-6 flex items-center gap-2">
<i className="text-neutral-400" data-lucide="clock" height="20" width="20"></i>
                    Smart Timing Guide
                </h3>
<div className="relative border-l border-neutral-200 ml-3 space-y-8 pl-8 py-2">

<div className="relative">
<div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-blue-100 border-2 border-blue-500"></div>
<div className="flex justify-between items-baseline mb-1">
<span className="text-sm font-semibold text-neutral-900">Wake - 10:00 AM</span>
<span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded">Focus</span>
</div>
<p className="text-sm text-neutral-500">Take 30 mins after waking. Do not consume with coffee to avoid over-stimulation.</p>
</div>

<div className="relative">
<div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-amber-100 border-2 border-amber-500"></div>
<div className="flex justify-between items-baseline mb-1">
<span className="text-sm font-semibold text-neutral-900">11:00 AM - 2:00 PM</span>
<span className="text-xs text-amber-600 font-medium bg-amber-50 px-2 py-0.5 rounded">Energy</span>
</div>
<p className="text-sm text-neutral-500">Best taken before lunch or pre-workout. Prevents the afternoon slump.</p>
</div>

<div className="relative">
<div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-emerald-100 border-2 border-emerald-500"></div>
<div className="flex justify-between items-baseline mb-1">
<span className="text-sm font-semibold text-neutral-900">3:00 PM - 6:00 PM</span>
<span className="text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded">Calm</span>
</div>
<p className="text-sm text-neutral-500">Transition from work mode. Helps lower cortisol spikes from the day.</p>
</div>

<div className="relative">
<div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-violet-100 border-2 border-violet-500"></div>
<div className="flex justify-between items-baseline mb-1">
<span className="text-sm font-semibold text-neutral-900">8:00 PM - Sleep</span>
<span className="text-xs text-violet-600 font-medium bg-violet-50 px-2 py-0.5 rounded">Recover</span>
</div>
<p className="text-sm text-neutral-500">Take 60 mins before bed. Supports physical repair during REM cycles.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-100">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-medium tracking-tight text-neutral-900 mb-10 text-center">Stacking Recommendations</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 border border-neutral-200 rounded-xl bg-white hover:shadow-md transition-shadow">
<div className="flex items-center gap-2 mb-4">
<span className="w-3 h-3 rounded-full bg-blue-500"></span>
<span className="text-neutral-300">+</span>
<span className="w-3 h-3 rounded-full bg-amber-500"></span>
<h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 ml-auto">The Power Couple</h4>
</div>
<p className="text-sm text-neutral-500">Focus + Energy. For days demanding 12+ hours of peak output. Space them 4 hours apart for sustained intensity.</p>
</div>

<div className="p-6 border border-neutral-200 rounded-xl bg-white hover:shadow-md transition-shadow">
<div className="flex items-center gap-2 mb-4">
<span className="w-3 h-3 rounded-full bg-emerald-500"></span>
<span className="text-neutral-300">+</span>
<span className="w-3 h-3 rounded-full bg-violet-500"></span>
<h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 ml-auto">Deep Rest</h4>
</div>
<p className="text-sm text-neutral-500">Calm + Recover. The ultimate disconnect. Combine after a heavy physical training session to maximize repair.</p>
</div>

<div className="p-6 border border-neutral-200 rounded-xl bg-white hover:shadow-md transition-shadow">
<div className="flex items-center gap-2 mb-4">
<span className="w-3 h-3 rounded-full bg-blue-500"></span>
<span className="text-neutral-300">+</span>
<span className="w-3 h-3 rounded-full bg-emerald-500"></span>
<h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 ml-auto">Flow State</h4>
</div>
<p className="text-sm text-neutral-500">Focus + Calm. The "Zen Master" stack. High mental acuity with zero anxiety. Perfect for creative work or public speaking.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4">What to Expect</h2>
<p className="text-neutral-400">Real balance takes time. Here is the physiology of consistency.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-neutral-800 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-neutral-800 border-4 border-neutral-900 rounded-full flex items-center justify-center mb-6 font-semibold text-white">1</div>
<h4 className="text-lg font-medium text-white mb-2">Week 1: Acclimation</h4>
<p className="text-sm text-neutral-400 leading-relaxed max-w-xs">Immediate noticeable effects in energy levels. Your body begins to recognize the consistent nutrient supply.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-neutral-800 border-4 border-neutral-900 rounded-full flex items-center justify-center mb-6 font-semibold text-white">2</div>
<h4 className="text-lg font-medium text-white mb-2">Weeks 2-4: Optimization</h4>
<p className="text-sm text-neutral-400 leading-relaxed max-w-xs">Sleep cycles regulate. Mental fog dissipates. Focus becomes a default state rather than an effort.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white text-neutral-900 border-4 border-neutral-900 rounded-full flex items-center justify-center mb-6 font-semibold">3</div>
<h4 className="text-lg font-medium text-white mb-2">Month 2+: Transformation</h4>
<p className="text-sm text-neutral-400 leading-relaxed max-w-xs">New baselines set. Resilience to stress increases significantly. You are now living in balance.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-neutral-100">
<div className="max-w-5xl mx-auto px-6 text-center">
<div className="mb-10">
<div className="flex justify-center gap-1 mb-4">
<i className="fill-neutral-900 text-neutral-900" data-lucide="star" height="18" width="18"></i>
<i className="fill-neutral-900 text-neutral-900" data-lucide="star" height="18" width="18"></i>
<i className="fill-neutral-900 text-neutral-900" data-lucide="star" height="18" width="18"></i>
<i className="fill-neutral-900 text-neutral-900" data-lucide="star" height="18" width="18"></i>
<i className="fill-neutral-900 text-neutral-900" data-lucide="star" height="18" width="18"></i>
</div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 leading-snug">
                    "I used to juggle five different supplement tubs. MAZU simplified my entire routine into four pouches. My deep sleep scores have improved by 35% in two months."
                </h3>
</div>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-10 bg-neutral-200 rounded-full overflow-hidden">
<img alt="User" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<div className="text-left">
<div className="text-sm font-semibold text-neutral-900">James E.</div>
<div className="text-xs text-neutral-500">Architect &amp; Ultra-runner</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-medium tracking-tight text-neutral-900 mb-10 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">

<div className="bg-white border border-neutral-200 rounded-lg p-6">
<h4 className="font-medium text-neutral-900 mb-2">Can I take all four sachets in one day?</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Yes, the protocol is designed for daily use. However, we recommend starting with just Focus and Recover for the first 3 days to assess tolerance.</p>
</div>

<div className="bg-white border border-neutral-200 rounded-lg p-6">
<h4 className="font-medium text-neutral-900 mb-2">Are there any side effects?</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Mazu blends are formulated to minimize side effects. The 'Energy' blend contains L-Theanine to prevent jitters. If you are pregnant or nursing, consult a physician.</p>
</div>

<div className="bg-white border border-neutral-200 rounded-lg p-6">
<h4 className="font-medium text-neutral-900 mb-2">How much water should I use?</h4>
<p className="text-sm text-neutral-500 leading-relaxed">We recommend mixing each sachet with 300-400ml of cold water. Adjust to taste.</p>
</div>
</div>
<div className="mt-10 text-center">
<a className="text-sm font-medium text-neutral-900 border-b border-neutral-900 pb-0.5 hover:text-neutral-600 hover:border-neutral-600 transition-colors" href="#">View all FAQs</a>
</div>
</div>
</section>

<footer className="bg-white py-12 border-t border-neutral-100">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-start gap-2">
<span className="text-lg font-medium tracking-tight">MAZU</span>
<span className="text-xs text-neutral-400 uppercase tracking-widest">A Mazu Labs Company</span>
</div>
<div className="flex gap-8 text-sm text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Terms</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Contact</a>
</div>
<div className="text-sm text-neutral-500">
                © 2024 Mazu Wellness.
            </div>
</div>
</footer>


    </>
  );
}
