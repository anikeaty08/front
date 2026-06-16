import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', () => {
          const slider = document.getElementById('renderSlider');
          const countDisplay = document.getElementById('renderCount');
          const tradCostDisplay = document.getElementById('tradCost');
          const auraCostDisplay = document.getElementById('auraCost');
          const hoursSavedDisplay = document.getElementById('hoursSaved');
          const savingsAmountDisplay = document.getElementById('savingsAmount');

          const TRAD_COST = 1200;
          const AURA_COST = 600;
          const HOURS_SAVED = 12;

          function updateCalculator() {
              if(!slider) return;
              const val = parseInt(slider.value);
              const tradTotal = val * TRAD_COST;
              const auraTotal = val * AURA_COST;

              if(countDisplay) countDisplay.textContent = val;
              if(tradCostDisplay) tradCostDisplay.textContent = '$' + tradTotal.toLocaleString();
              if(auraCostDisplay) auraCostDisplay.textContent = '$' + auraTotal.toLocaleString();
              if(savingsAmountDisplay) savingsAmountDisplay.textContent = '$' + (tradTotal - auraTotal).toLocaleString();
              if(hoursSavedDisplay) hoursSavedDisplay.textContent = (val * HOURS_SAVED) + '+ Hours';
          }

          if(slider) {
              slider.addEventListener('input', updateCalculator);
              updateCalculator();
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
<div className="w-full max-w-7xl flex items-center justify-between pointer-events-auto">
<a className="w-10 h-10 rounded-full liquid-glass liquid-border flex items-center justify-center text-white" href="#">
<span className="font-heading text-xl leading-none pt-1">A</span>
</a>
<div className="hidden md:flex items-center gap-8 liquid-glass liquid-border rounded-full px-8 py-3">
<a className="text-xs font-normal font-body text-white/70 hover:text-white transition-colors" href="#impact">Process</a>
<a className="text-xs font-normal font-body text-white/70 hover:text-white transition-colors" href="#founder">Studio</a>
<a className="text-xs font-normal font-body text-white/70 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-xs font-normal font-body text-white/70 hover:text-white transition-colors" href="#calculator">Pricing</a>
</div>
<a className="hidden md:inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-xs font-normal font-body hover:bg-neutral-200 transition-colors" href="#contact">
          Get Started
          <iconify-icon icon="solar:arrow-up-right-linear" width="16"></iconify-icon>
</a>
<button className="md:hidden w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>
</div>
</nav>

<section className="relative h-[1000px] flex flex-col items-center justify-center overflow-hidden bg-black">

<div className="absolute top-[10%] left-0 w-full h-[80%] z-0 pointer-events-none">
<video autoplay="" className="w-full h-full object-cover opacity-80 mix-blend-screen" loop="" muted="" playsinline="">
<source src="https://assets.mixkit.co/videos/preview/mixkit-spinning-geometric-shapes-in-abstract-background-30045-large.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-x-0 top-0 h-48 video-fade-top z-10"></div>
<div className="absolute inset-x-0 bottom-0 h-48 video-fade-bottom z-10"></div>
<div className="absolute inset-0 bg-black/20 z-10"></div>
</div>
<div className="relative z-20 w-full max-w-5xl mx-auto px-6 flex flex-col items-center mt-32">
<div className="liquid-glass-strong liquid-border rounded-[2.5rem] p-8 md:p-16 w-full flex flex-col items-center text-center shadow-2xl">
<div className="animate-fade-up mb-8">
<div className="liquid-glass liquid-border rounded-full px-4 py-1.5 inline-flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
<span className="text-xs font-medium text-white font-body uppercase tracking-wider">New</span>
<span className="text-xs font-light text-white/60 font-body">Introducing AI-powered visualization.</span>
</div>
</div>

<div className="animate-fade-up">
<h1 className="font-heading text-[3.5rem] md:text-7xl lg:text-[6.5rem] text-white flex flex-wrap justify-center gap-x-4 md:gap-x-6 gap-y-1 mb-8">
              The Architecture Your Brand Deserves
            </h1>
</div>
<div className="animate-fade-up delay-100">
<p className="font-body font-light text-white/60 text-sm md:text-base max-w-xl mx-auto mb-12">
              Stunning realism. Blazing delivery. Built by AI, refined by global
              experts. This is architectural visualization, wildly reimagined.
            </p>
</div>
<div className="animate-fade-up delay-200">
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="liquid-glass-strong liquid-border px-8 py-3.5 rounded-full text-xs font-normal text-white flex items-center gap-2 hover:bg-white/5 transition-colors" href="#contact">
                Get Started
                <iconify-icon icon="solar:arrow-up-right-linear"></iconify-icon>
</a>
<a className="px-8 py-3.5 rounded-full text-xs font-normal text-white/80 flex items-center gap-2 hover:text-white transition-colors" href="#work">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                Watch the Film
              </a>
</div>
</div>
</div>
</div>

<div className="absolute bottom-12 left-0 right-0 z-20 flex flex-col items-center animate-fade-up delay-300">
<div className="liquid-glass liquid-border rounded-full px-4 py-1.5 text-xs font-light text-white/60 font-body mb-6">
          Trusted by the teams behind
        </div>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center px-6">
<span className="font-heading text-2xl md:text-3xl text-white/80">Stripe</span>
<span className="font-heading text-2xl md:text-3xl text-white/80">Vercel</span>
<span className="font-heading text-2xl md:text-3xl text-white/80">Linear</span>
<span className="font-heading text-2xl md:text-3xl text-white/80">Notion</span>
<span className="font-heading text-2xl md:text-3xl text-white/80">Figma</span>
</div>
</div>
</section>

<section className="py-16 relative bg-black border-t border-white/5 px-6 md:px-16 lg:px-24">
<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
<div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-[16px] border border-[rgba(255,255,255,0.08)] group relative overflow-hidden rounded-2xl p-6 text-center animate-fade-up delay-100">
<div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-white/0 via-white/5 to-white/0 transition-transform duration-1000 group-hover:translate-x-[100%] pointer-events-none"></div>
<span className="block text-4xl font-heading text-white mb-2 relative z-10">40%</span>
<span className="text-white/60 relative z-10 text-xs font-body uppercase tracking-widest">Client Savings</span>
</div>
<div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-[16px] border border-[rgba(255,255,255,0.08)] group relative overflow-hidden rounded-2xl p-6 text-center animate-fade-up delay-200">
<div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-white/0 via-white/5 to-white/0 transition-transform duration-1000 group-hover:translate-x-[100%] pointer-events-none"></div>
<span className="block text-4xl font-heading text-white mb-2 relative z-10">10x</span>
<span className="text-white/60 relative z-10 text-xs font-body uppercase tracking-widest">Faster Delivery</span>
</div>
<div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-[16px] border border-[rgba(255,255,255,0.08)] group relative overflow-hidden rounded-2xl p-6 text-center animate-fade-up delay-300">
<div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-white/0 via-white/5 to-white/0 transition-transform duration-1000 group-hover:translate-x-[100%] pointer-events-none"></div>
<span className="block text-4xl font-heading text-white mb-2 relative z-10">99%</span>
<span className="text-white/60 relative z-10 text-xs font-body uppercase tracking-widest">Client Satisfaction</span>
</div>
<div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-[16px] border border-[rgba(255,255,255,0.08)] group relative overflow-hidden rounded-2xl p-6 text-center animate-fade-up" style={{animationDelay: '400ms'}}>
<div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-white/0 via-white/5 to-white/0 transition-transform duration-1000 group-hover:translate-x-[100%] pointer-events-none"></div>
<span className="block text-4xl font-heading text-white mb-2 relative z-10">24/7</span>
<span className="text-white/60 relative z-10 text-xs font-body uppercase tracking-widest">AI Availability</span>
</div>
</div>
</section>

<section className="py-32 relative bg-black border-t border-white/5 px-6 md:px-16 lg:px-24" id="impact">
<div className="max-w-7xl mx-auto">
<div className="liquid-glass liquid-border rounded-full px-3.5 py-1 text-xs font-normal text-white font-body inline-block mb-6">
          The Paradigm Shift
        </div>
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div className="max-w-3xl">
<h2 className="font-heading text-5xl md:text-6xl text-white mb-6">
              The Industry Standard Is Broken.
            </h2>
<p className="font-body font-light text-white/60 text-sm md:text-base leading-relaxed">
              Most architectural firms bleed capital on low-quality renders or
              agonizingly slow boutique agencies. We engineered a better
              way—bringing you the highest tier of cinematic visual fidelity
              while reversing the entire cost structure.
            </p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="liquid-glass liquid-border rounded-3xl p-8 md:p-12 relative overflow-hidden group opacity-50 grayscale hover:opacity-70 transition-opacity">
<div className="absolute top-0 right-0 w-64 h-64 bg-red-900/20 blur-[80px] rounded-full"></div>
<h3 className="font-heading text-xl md:text-2xl text-white/40 mb-8 line-through decoration-red-500/50">
              Traditional Agencies
            </h3>
<ul className="space-y-8 font-body">
<li>
<span className="block text-xs uppercase tracking-widest text-white/30 mb-2">Quality</span>
<span className="text-sm font-light text-white/50">Inconsistent, often lacking hyper-realistic texturing and lighting.</span>
</li>
<li>
<span className="block text-xs uppercase tracking-widest text-white/30 mb-2">Pricing</span>
<span className="text-sm font-light text-white/50">Opaque pricing models with heavy luxury markups per revision.</span>
</li>
</ul>
</div>
<div className="liquid-glass-strong liquid-border-orange rounded-3xl p-10 md:p-14 relative overflow-hidden group scale-100 md:scale-105 shadow-[0_0_40px_rgba(249,115,22,0.15)] z-10 border border-orange-500/20">
<div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500/20 blur-[80px] rounded-full group-hover:bg-orange-500/30 transition-colors duration-700"></div>
<h3 className="font-heading text-3xl md:text-4xl text-orange-400 mb-8 drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">
              The AURA Advantage
            </h3>
<ul className="space-y-8 font-body">
<li>
<span className="block text-xs uppercase tracking-widest text-orange-400/80 mb-2">Quality</span>
<span className="text-sm font-light text-white/90">Cinematic, hyper-realistic output matching top-tier global standards.</span>
</li>
<li>
<span className="block text-xs uppercase tracking-widest text-orange-400/80 mb-2">Pricing</span>
<span className="text-sm font-normal text-white">Transparent, saving you 30-50% compared to equivalent quality providers.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-black border-t border-white/5 px-6 md:px-16 lg:px-24" id="process">
<div className="max-w-7xl mx-auto">
<div className="liquid-glass liquid-border rounded-full px-3.5 py-1 text-xs font-normal text-orange-400 font-body inline-block mb-6">
          Our Process
        </div>
<h2 className="font-heading text-5xl md:text-6xl text-white mb-16">
          How We Work.
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
<div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 -translate-y-1/2 z-0"></div>
<div className="liquid-glass liquid-border p-8 rounded-3xl relative z-10 group hover:-translate-y-2 transition-transform duration-500">
<div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6 font-heading text-xl">1</div>
<h3 className="font-body text-xl text-white mb-4">Discovery &amp; Ingestion</h3>
<p className="font-body font-light text-white/50 text-sm">Upload your BIM, CAD, or sketches. We align on visual direction and moodboarding.</p>
</div>
<div className="liquid-glass liquid-border p-8 rounded-3xl relative z-10 group hover:-translate-y-2 transition-transform duration-500">
<div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6 font-heading text-xl">2</div>
<h3 className="font-body text-xl text-white mb-4">AI-Assisted Drafting</h3>
<p className="font-body font-light text-white/50 text-sm">Our proprietary models generate base lighting, texturing, and compositional options in hours.</p>
</div>
<div className="liquid-glass liquid-border p-8 rounded-3xl relative z-10 group hover:-translate-y-2 transition-transform duration-500 border-b border-orange-500/30">
<div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 mb-6 font-heading text-xl">3</div>
<h3 className="font-body text-xl text-white mb-4">Expert Refinement</h3>
<p className="font-body font-light text-white/50 text-sm">Senior artists step in to meticulously polish, color-grade, and finalize your cinematic assets.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black border-t border-white/5 px-6 md:px-16 lg:px-24" id="calculator">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<div className="liquid-glass liquid-border rounded-full px-3.5 py-1 text-xs font-normal text-orange-400 font-body inline-block mb-6">
            ROI Calculator
          </div>
<h2 className="font-heading text-5xl md:text-6xl text-white mb-4">Calculate Your Savings.</h2>
<p className="font-body font-light text-white/60 text-sm max-w-xl mx-auto">See the direct impact on your margins without compromising on cinematic fidelity.</p>
</div>
<div className="max-w-4xl mx-auto liquid-glass-strong liquid-border rounded-[2.5rem] p-8 md:p-16">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center font-body">
<div className="flex flex-col">
<div className="flex justify-between items-end mb-8">
<label className="text-sm font-light text-white/80" htmlFor="renderSlider">Monthly Output</label>
<span className="font-heading text-5xl text-orange-400" id="renderCount">5</span>
</div>
<div className="relative py-4 mb-2">
<input className="relative z-10" id="renderSlider" max="20" min="1" type="range" value="5"/>
</div>
<div className="flex justify-between text-xs font-light text-white/40 mb-12">
<span>1 Asset</span>
<span>20+ Assets</span>
</div>
<div className="liquid-glass liquid-border p-6 rounded-3xl">
<p className="text-xs uppercase tracking-widest text-white/40 mb-2">Time Recovered</p>
<p className="font-heading text-4xl text-white mb-2" id="hoursSaved">60+ Hours</p>
<p className="text-xs font-light text-white/50">Saved from endless revisions and slow boutique delivery times.</p>
</div>
</div>
<div className="flex flex-col gap-6 relative">
<div className="p-6 rounded-3xl border border-white/5 bg-white/[0.01] opacity-60">
<p className="text-xs uppercase tracking-widest text-white/30 mb-4">Traditional Agency</p>
<p className="font-heading text-3xl text-white/40 line-through" id="tradCost">$6,000</p>
</div>
<div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black border border-white/10 flex items-center justify-center z-10 text-[10px] text-white/50 font-normal">VS</div>
<div className="liquid-glass liquid-border-orange p-6 rounded-3xl relative overflow-hidden shadow-[0_0_30px_rgba(249,115,22,0.1)]">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-50"></div>
<div className="relative z-10">
<p className="text-xs uppercase tracking-widest text-white/80 mb-4 flex items-center gap-2">
                    AURA Studio
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
</p>
<p className="font-heading text-5xl text-orange-400" id="auraCost">$3,000</p>
</div>
<div className="relative z-10 mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
<span className="text-xs font-light text-white/60">Capital Saved</span>
<span className="text-xs font-normal text-black bg-orange-400 px-3 py-1 rounded-full" id="savingsAmount">$3,000</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-black border-t border-white/5 px-6 md:px-16 lg:px-24" id="founder">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
<div className="liquid-glass liquid-border rounded-full px-3.5 py-1 text-xs font-normal text-white font-body inline-block mb-6 w-max">
              Our DNA
            </div>
<h2 className="font-heading text-5xl md:text-6xl text-white mb-8">
              Built By Architects,<br/>For Architects.
            </h2>
<div className="space-y-6 font-body font-light text-white/60 text-sm leading-relaxed">
<p>
                "After spending a decade at top-tier firms, I saw a persistent
                problem: studios were either settling for mediocre renderings or
                paying exorbitant fees that ate entirely into project margins.
                There was no middle ground."
              </p>
<p>
                We built AURA to solve this exact bottleneck. By stripping away
                agency overhead and utilizing AI-enhanced rendering pipelines,
                we deliver the exact same hyper-realistic assets you'd expect
                from a boutique visualization house—at unprecedented speeds.
              </p>
</div>
</div>
<div className="lg:col-span-5 lg:col-start-8 relative order-1 lg:order-2">
<div className="liquid-glass liquid-border p-2 rounded-[2.5rem]">
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative">
<img alt="Founder" className="w-full h-full object-cover filter grayscale opacity-70" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<p className="text-sm font-normal text-white font-body mb-1">Alex Mercer</p>
<p className="text-xs font-light text-white/50 font-body">Founder &amp; Creative Director</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-black py-32 border-t border-white/5" id="work">
<div className="px-6 md:px-16 lg:px-24 mb-16 max-w-7xl mx-auto">
<div className="liquid-glass liquid-border rounded-full px-3.5 py-1 text-xs font-normal text-orange-400 font-body inline-block mb-6">
          Selected Works
        </div>
<h2 className="font-heading text-5xl md:text-6xl text-white mb-4">The Visual Standard.</h2>
<p className="font-body font-light text-white/60 text-sm max-w-xl">
          Every pixel intentional. Scroll to explore a selection of our recent
          architectural visualizations.
        </p>
</div>
<div className="px-6 md:px-16 lg:px-24 max-w-5xl mx-auto flex flex-col gap-16 font-body">
<div className="work-item w-full h-[60vh] md:h-[80vh] liquid-glass liquid-border rounded-[2.5rem] p-2 group">
<div className="w-full h-full rounded-[2rem] overflow-hidden relative">
<img alt="Work" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute bottom-6 left-6 liquid-glass liquid-border px-4 py-2 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
<span className="text-xs font-normal text-white">01 / Desert Pavilion</span>
</div>
</div>
</div>
<div className="work-item w-full h-[60vh] md:h-[80vh] liquid-glass liquid-border rounded-[2.5rem] p-2 group">
<div className="w-full h-full rounded-[2rem] overflow-hidden relative">
<img alt="Work" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute bottom-6 left-6 liquid-glass liquid-border px-4 py-2 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
<span className="text-xs font-normal text-white">02 / Concrete Villa</span>
</div>
</div>
</div>
<div className="work-item w-full h-[60vh] md:h-[80vh] liquid-glass liquid-border rounded-[2.5rem] p-2 group">
<div className="w-full h-full rounded-[2rem] overflow-hidden relative">
<img alt="Work" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute bottom-6 left-6 liquid-glass liquid-border px-4 py-2 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
<span className="text-xs font-normal text-white">03 / Nordic Retreat</span>
</div>
</div>
</div>
<div className="work-item w-full h-[60vh] md:h-[80vh] liquid-glass liquid-border rounded-[2.5rem] p-2 group">
<div className="w-full h-full rounded-[2rem] overflow-hidden relative">
<img alt="Work" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute bottom-6 left-6 liquid-glass liquid-border px-4 py-2 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
<span className="text-xs font-normal text-white">04 / Urban Monolith</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-40 overflow-hidden bg-black border-t border-white/5" id="contact">

<div className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-screen grayscale">
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="">
<source src="https://assets.mixkit.co/videos/preview/mixkit-spinning-geometric-shapes-in-abstract-background-30045-large.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-x-0 top-0 h-48 video-fade-top z-10"></div>
<div className="absolute inset-x-0 bottom-0 h-48 video-fade-bottom z-10"></div>
</div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
<div className="liquid-glass liquid-border rounded-full px-3.5 py-1 text-xs font-normal text-white font-body inline-block mb-8">
          The Next Step
        </div>
<h2 className="font-heading text-6xl md:text-7xl lg:text-8xl text-white mb-8">
          Ready To Elevate<br/>Your Pitches?
        </h2>
<p className="font-body font-light text-white/60 text-sm md:text-base mb-12 max-w-lg mx-auto">
          Book a free strategy call. See what AI-powered architectural
          visualization can do for your margins.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="liquid-glass-strong liquid-border px-8 py-3.5 rounded-full text-xs font-normal text-white flex items-center gap-2 hover:bg-white/5 transition-colors font-body" href="#">
            Book a Call
            <iconify-icon icon="solar:arrow-up-right-linear"></iconify-icon>
</a>
<a className="bg-white text-black px-8 py-3.5 rounded-full text-xs font-normal flex items-center gap-2 hover:bg-neutral-200 transition-colors font-body" href="#calculator">
            View Pricing
          </a>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/10 pt-8 pb-12 px-6 md:px-16 lg:px-24">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-body">
<div className="font-heading text-2xl text-white">AURA</div>
<div className="text-xs font-light text-white/40">
          © 2026 Studio. All rights reserved.
        </div>
<div className="flex items-center gap-6 text-xs font-light text-white/40">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</footer>



    </>
  );
}
