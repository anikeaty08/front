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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
navy: '#0A2540',
charcoal: '#2D3748',
blue: '#0066FF',
cyan: '#00D4FF',
bg: '#F5F7FA',
}
}
}
}
}



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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-100 bg-white/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center gap-2 rtl:space-x-reverse" href="#">
<span className="self-center text-xl font-semibold tracking-tight text-brand-navy">Hire AI Genius</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<button className="text-white bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-3 text-center transition-transform hover:scale-105 shadow-lg shadow-blue-500/20" type="button">
                    Book Consultation
                </button>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li>
<a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-brand-blue md:p-0 transition-colors" href="#">Product</a>
</li>
<li>
<a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-brand-blue md:p-0 transition-colors" href="#">Talent</a>
</li>
<li>
<a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-brand-blue md:p-0 transition-colors" href="#">Resources</a>
</li>
<li>
<a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-brand-blue md:p-0 transition-colors" href="#">Pricing</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="flex flex-col items-start text-left animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-brand-blue text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
</span>
                        New: 2025 AI Talent Report Available
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-brand-charcoal leading-[1.1] mb-6">
                        Compress Your AI Hiring Risk with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">Fractional Talent Arbitrage</span>
</h1>
<p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-xl">
                        In a 3.2:1 demand-supply gap, deploy 99th percentile LLM engineers in 14 days. Scale without the $300K bad-hire burn—or runway-killing commitments.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300" href="#">
                            Execute Your AI Strategy
                            <i className="ml-2 w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-brand-charcoal bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all duration-300 group" href="#">
<i className="mr-2 w-4 h-4 text-brand-blue group-hover:scale-110 transition-transform" data-lucide="download"></i>
                            Download Cost Breakdown
                        </a>
</div>
<div className="mt-10 flex items-center gap-4 text-sm text-gray-500">
<div className="flex -space-x-3">
<img alt="Engineer" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Engineer" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Engineer" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<p>Trusted by <span className="font-semibold text-brand-charcoal">120+ AI-first teams</span></p>
</div>
</div>

<div className="relative lg:h-full flex items-center justify-center">
<div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-full">

<div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-[2rem] transform rotate-3"></div>
<img alt="AI Engineer at work" className="relative rounded-[2rem] shadow-2xl object-cover h-full w-full z-10 border border-white/50" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute -bottom-6 -left-6 z-20 bg-white p-5 rounded-xl shadow-xl border border-gray-100 animate-bounce-slow">
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="p-2 bg-green-100 rounded-lg text-green-600">
<i className="w-5 h-5" data-lucide="rocket"></i>
</div>
<div>
<p className="text-xs text-gray-500 font-medium">Avg Deployment</p>
<p className="text-lg font-bold text-brand-charcoal">14 Days</p>
</div>
</div>
<div className="w-full h-px bg-gray-100"></div>
<div className="flex items-center gap-3">
<div className="p-2 bg-blue-100 rounded-lg text-brand-blue">
<i className="w-5 h-5" data-lucide="trending-up"></i>
</div>
<div>
<p className="text-xs text-gray-500 font-medium">Cost Savings</p>
<p className="text-lg font-bold text-brand-charcoal">40% vs Full-time</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-brand-bg border-y border-gray-100">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-semibold tracking-wider text-gray-400 uppercase mb-8">Trusted by AI-First Companies</p>
<div className="flex flex-wrap justify-center gap-12 lg:gap-20 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 font-bold text-xl text-brand-navy"><i className="fill-current" data-lucide="hexagon"></i> Cortex</div>
<div className="flex items-center gap-2 font-bold text-xl text-brand-navy"><i className="fill-current" data-lucide="triangle"></i> NeuralFlow</div>
<div className="flex items-center gap-2 font-bold text-xl text-brand-navy"><i className="fill-current" data-lucide="circle"></i> OrbitAI</div>
<div className="flex items-center gap-2 font-bold text-xl text-brand-navy"><i className="fill-current" data-lucide="square-stack"></i> StackML</div>
<div className="flex items-center gap-2 font-bold text-xl text-brand-navy"><i className="fill-current" data-lucide="aperture"></i> Visionary</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-brand-charcoal mb-6">Why B2B AI Hiring is Broken in 2025<br/>(And How Fractional Fixes It)</h2>
<p className="text-xl text-gray-500 leading-relaxed">$400K bootcamps flood the pool, but for Bottlenecked Builders, choices are runway-killers or black-box agencies.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="clock"></i>
</div>
<h3 className="text-2xl font-semibold text-brand-charcoal mb-4">Adverse Selection Trap</h3>
<div className="space-y-4 text-lg text-gray-600">
<p><span className="font-medium text-brand-navy">Promise:</span> "We need a senior AI engineer fast."</p>
<p><span className="font-medium text-brand-navy">Reality:</span> 118 days to hire. 4 months zero velocity. 68% rejection rate.</p>
<p className="pt-4 border-t border-dashed border-gray-200 text-sm text-gray-500">
<span className="text-red-500 font-semibold">True Cost:</span> $20K overhead before first line of code.
                        </p>
</div>
</div>

<div className="group p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="target"></i>
</div>
<h3 className="text-2xl font-semibold text-brand-charcoal mb-4">Gig Marketplace Chaos</h3>
<div className="space-y-4 text-lg text-gray-600">
<p><span className="font-medium text-brand-navy">Promise:</span> "Thousands of AI engineers on Upwork."</p>
<p><span className="font-medium text-brand-navy">Reality:</span> Self-reported skills. Zero accountability. Codebase sprawl.</p>
<p className="pt-4 border-t border-dashed border-gray-200 text-sm text-gray-500">
<span className="text-orange-500 font-semibold">True Cost:</span> Tribal knowledge locked in contractor's head.
                        </p>
</div>
</div>

<div className="group p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-500 mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="banknote"></i>
</div>
<h3 className="text-2xl font-semibold text-brand-charcoal mb-4">Staffing Agency Markup</h3>
<div className="space-y-4 text-lg text-gray-600">
<p><span className="font-medium text-brand-navy">Promise:</span> "We'll find you top AI talent."</p>
<p><span className="font-medium text-brand-navy">Reality:</span> 30% fees. Recruiters who don't know RAG from API.</p>
<p className="pt-4 border-t border-dashed border-gray-200 text-sm text-gray-500">
<span className="text-purple-500 font-semibold">True Cost:</span> Paying premiums for middlemen, not fit.
                        </p>
</div>
</div>
</div>
<p className="text-center text-xl font-medium text-brand-blue mt-16">The market is screaming for a better model. We built it.</p>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">

<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="relative order-2 lg:order-1">
<div className="bg-white rounded-2xl shadow-2xl shadow-blue-900/10 border border-gray-200 p-2 transform rotate-1 hover:rotate-0 transition-transform duration-500">
<div className="bg-slate-50 rounded-xl overflow-hidden p-6">

<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-2">
<div className="h-3 w-3 rounded-full bg-red-400"></div>
<div className="h-3 w-3 rounded-full bg-yellow-400"></div>
<div className="h-3 w-3 rounded-full bg-green-400"></div>
</div>
<div className="h-2 w-20 bg-gray-200 rounded"></div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-100">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan"></div>
<div>
<div className="h-2 w-24 bg-gray-800 rounded mb-1"></div>
<div className="h-2 w-16 bg-gray-300 rounded"></div>
</div>
</div>
<div className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded font-semibold">Match 99%</div>
</div>
<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-3">
<div className="h-2 w-full bg-gray-200 rounded"></div>
<div className="h-2 w-5/6 bg-gray-200 rounded"></div>
<div className="h-2 w-4/6 bg-gray-200 rounded"></div>
<div className="flex gap-2 mt-4">
<div className="h-6 w-16 bg-blue-50 rounded text-xs flex items-center justify-center text-blue-600">Python</div>
<div className="h-6 w-16 bg-blue-50 rounded text-xs flex items-center justify-center text-blue-600">PyTorch</div>
<div className="h-6 w-16 bg-blue-50 rounded text-xs flex items-center justify-center text-blue-600">RAG</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<span className="text-xs font-bold tracking-widest text-brand-blue uppercase mb-2 block">The Hire AI Genius Difference</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-brand-charcoal mb-6">Fractional AI Talent That Actually Works</h2>
<p className="text-xl text-gray-500 mb-10 leading-relaxed">
                        We're not a staffing agency—we're talent access infrastructure. Pre-vetted by practitioners, deployed in weeks, scaled by outcomes.
                    </p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center text-white mt-1">
<i className="w-3.5 h-3.5 stroke-[3]" data-lucide="check"></i>
</div>
<div>
<h3 className="text-xl font-semibold text-brand-charcoal mb-2">Pre-vetted by AI Practitioners</h3>
<p className="text-lg text-gray-500">Deep technical screening by ML engineers with production experience. Only 3% acceptance rate. Math/stats foundations verified.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center text-white mt-1">
<i className="w-3.5 h-3.5 stroke-[3]" data-lucide="check"></i>
</div>
<div>
<h3 className="text-xl font-semibold text-brand-charcoal mb-2">Fractional ≠ Freelance</h3>
<p className="text-lg text-gray-500">Not gig workers. Embedded outcome owners with 90% retention. 2-week average deployment. Scale hours up/down.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center text-white mt-1">
<i className="w-3.5 h-3.5 stroke-[3]" data-lucide="check"></i>
</div>
<div>
<h3 className="text-xl font-semibold text-brand-charcoal mb-2">14 Days to Deploy, 40% Savings</h3>
<p className="text-lg text-gray-500">No hiring overhead. No agency fees. Transparent pricing. Access 99th percentile talent at modular velocity.</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="text-brand-blue font-semibold hover:text-brand-cyan transition-colors inline-flex items-center group" href="#vetting">
                            See How We Vet Talent 
                            <i className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-brand-charcoal mb-6">From Brief to Deployed in 14 Days</h2>
<p className="text-xl text-gray-500 leading-relaxed">No lengthy interviews. No recruiter spam. Just expert AI talent matched to your stack and shipped fast.</p>
</div>
<div className="relative grid md:grid-cols-3 gap-8">

<div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-gray-200 via-brand-blue to-gray-200 z-0"></div>

<div className="relative z-10 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center group hover:-translate-y-2 transition-transform duration-300">
<div className="w-16 h-16 mx-auto bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mb-6 font-bold text-xl border-4 border-white shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="message-square"></i>
</div>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-charcoal text-white text-xs font-bold px-2 py-1 rounded-full">01</div>
<h3 className="text-xl font-semibold text-brand-charcoal mb-4">30-Min Discovery Call</h3>
<p className="text-gray-500">Share your AI roadmap and stack with AI architects—not sales reps. We ask about model choices and production requirements.</p>
</div>

<div className="relative z-10 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center group hover:-translate-y-2 transition-transform duration-300">
<div className="w-16 h-16 mx-auto bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mb-6 font-bold text-xl border-4 border-white shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="target"></i>
</div>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-charcoal text-white text-xs font-bold px-2 py-1 rounded-full">02</div>
<h3 className="text-xl font-semibold text-brand-charcoal mb-4">48-Hour Talent Matching</h3>
<p className="text-gray-500">Receive 2-3 pre-vetted profiles with GitHub portfolios and technical briefs. Candidates screened for systems thinking.</p>
</div>

<div className="relative z-10 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center group hover:-translate-y-2 transition-transform duration-300">
<div className="w-16 h-16 mx-auto bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mb-6 font-bold text-xl border-4 border-white shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="rocket"></i>
</div>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-charcoal text-white text-xs font-bold px-2 py-1 rounded-full">03</div>
<h3 className="text-xl font-semibold text-brand-charcoal mb-4">Deploy in 2 Weeks</h3>
<p className="text-gray-500">Onboard directly to Slack. Scale hours from 10 to 40/week based on milestones. Cancel with 2-week notice.</p>
</div>
</div>
<div className="text-center mt-16">
<button className="px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                    Book Your Discovery Call (It's Free) →
                </button>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-brand-bg">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-brand-charcoal mb-6">Built for "Bottlenecked Builders"</h2>
<p className="text-xl text-gray-500 max-w-2xl mx-auto">You're not looking for resumes. You're looking to compress risk. Here's who we're built for:</p>
</div>
<div className="grid md:grid-cols-3 gap-6 mb-6">

<div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-brand-blue hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-bold text-brand-blue uppercase tracking-wider">Archetype 01</span>
<span className="text-2xl">🚀</span>
</div>
<h3 className="text-xl font-semibold text-brand-charcoal mb-3">Seed Founders</h3>
<p className="italic text-gray-500 mb-4">"If this hire is wrong, I lose the market window. I need 99th percentile output without the commitment."</p>
<div className="p-3 bg-green-50 rounded-lg border border-green-100 text-sm text-green-800">
                        ✓ Client secured $3M follow-on by shipping RAG pipeline in 8 weeks
                    </div>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-brand-blue hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-bold text-brand-blue uppercase tracking-wider">Archetype 02</span>
<span className="text-2xl">🔧</span>
</div>
<h3 className="text-xl font-semibold text-brand-charcoal mb-3">SaaS Founders</h3>
<p className="italic text-gray-500 mb-4">"We have revenue, but I don't want to become an AI company—I just need AI to not fall behind."</p>
<div className="p-3 bg-green-50 rounded-lg border border-green-100 text-sm text-green-800">
                        ✓ Mid-market SaaS avoided $240K &amp; kept control with 20hr/week engineer
                    </div>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-brand-blue hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-bold text-brand-blue uppercase tracking-wider">Archetype 03</span>
<span className="text-2xl">🧠</span>
</div>
<h3 className="text-xl font-semibold text-brand-charcoal mb-3">Technical CTOs</h3>
<p className="italic text-gray-500 mb-4">"I don't want to mentor juniors. I need someone who reduces my load and understands tradeoffs."</p>
<div className="p-3 bg-green-50 rounded-lg border border-green-100 text-sm text-green-800">
                        ✓ Deployed real-time retraining pipeline in 12 weeks, zero overhead
                    </div>
</div>
</div>

<div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border-l-4 border-brand-blue hover:shadow-md transition-shadow">
<div className="md:flex items-start gap-8">
<div className="flex-shrink-0 text-4xl mb-4 md:mb-0">🏢</div>
<div className="flex-1">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
<h3 className="text-xl font-semibold text-brand-charcoal">Enterprise Innovation Teams: Bypass HR Hell</h3>
<span className="text-xs font-bold text-brand-blue uppercase tracking-wider mt-2 md:mt-0">Archetype 04</span>
</div>
<p className="italic text-gray-500 mb-6 max-w-3xl">"We have budget but can't hire fast. Procurement takes 6 months. Fractional bypasses the freeze."</p>
<div className="flex flex-wrap gap-4 text-sm text-gray-600">
<span className="px-3 py-1 bg-gray-100 rounded-full">GenAI Pilots</span>
<span className="px-3 py-1 bg-gray-100 rounded-full">Innovation Labs</span>
<span className="px-3 py-1 bg-gray-100 rounded-full">Consultative Engagements</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="roles">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-brand-charcoal mb-6">The AI Specialists We Place</h2>
<p className="text-xl text-gray-500">Senior practitioners with production battle scars—not bootcamp graduates cosplaying as ML engineers.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">

<div className="border border-gray-200 rounded-xl p-8 hover:border-brand-blue hover:shadow-lg transition-all group">
<div className="text-3xl mb-4 group-hover:scale-110 transition-transform origin-left">🤖</div>
<h3 className="text-xl font-semibold text-brand-charcoal mb-3">Fractional LLM Engineers</h3>
<p className="text-gray-500 mb-4 h-24 text-base">Experts in RAG architecture, vector databases, and prompt optimization. Engineers who understand cost vs. performance.</p>
<ul className="text-sm text-gray-400 space-y-2 mb-6">
<li>• Semantic Search Systems</li>
<li>• Agentic Workflows</li>
<li>• Model Fine-Tuning</li>
</ul>
<a className="text-brand-blue text-sm font-medium hover:underline" href="#">View Talent Pool →</a>
</div>

<div className="border border-gray-200 rounded-xl p-8 hover:border-brand-blue hover:shadow-lg transition-all group">
<div className="text-3xl mb-4 group-hover:scale-110 transition-transform origin-left">📊</div>
<h3 className="text-xl font-semibold text-brand-charcoal mb-3">Applied ML Engineers</h3>
<p className="text-gray-500 mb-4 h-24 text-base">Bridge Jupyter notebooks to production. Experience with recommendation systems, fraud detection, and real-time inference.</p>
<ul className="text-sm text-gray-400 space-y-2 mb-6">
<li>• Recommendation Engines</li>
<li>• Predictive Analytics</li>
<li>• A/B Testing Frameworks</li>
</ul>
<a className="text-brand-blue text-sm font-medium hover:underline" href="#">View Talent Pool →</a>
</div>

<div className="border border-gray-200 rounded-xl p-8 hover:border-brand-blue hover:shadow-lg transition-all group">
<div className="text-3xl mb-4 group-hover:scale-110 transition-transform origin-left">⚙️</div>
<h3 className="text-xl font-semibold text-brand-charcoal mb-3">MLOps Specialists</h3>
<p className="text-gray-500 mb-4 h-24 text-base">Build infrastructure for models to live. CI/CD for ML, monitoring, retraining pipelines, and deployment automation.</p>
<ul className="text-sm text-gray-400 space-y-2 mb-6">
<li>• Model Deployment Pipelines</li>
<li>• Real-Time Retraining</li>
<li>• K8s/Docker for ML</li>
</ul>
<a className="text-brand-blue text-sm font-medium hover:underline" href="#">View Talent Pool →</a>
</div>

<div className="border border-gray-200 rounded-xl p-8 hover:border-brand-blue hover:shadow-lg transition-all group">
<div className="text-3xl mb-4 group-hover:scale-110 transition-transform origin-left">🔬</div>
<h3 className="text-xl font-semibold text-brand-charcoal mb-3">AI Research Engineers</h3>
<p className="text-gray-500 mb-4 h-24 text-base">Turn novel papers into competitive advantages. Custom architectures, zero-shot learning, and state-of-the-art production.</p>
<ul className="text-sm text-gray-400 space-y-2 mb-6">
<li>• Custom Model Architectures</li>
<li>• Research Paper Implementation</li>
<li>• Multimodal AI Systems</li>
</ul>
<a className="text-brand-blue text-sm font-medium hover:underline" href="#">View Talent Pool →</a>
</div>

<div className="border border-gray-200 rounded-xl p-8 hover:border-brand-blue hover:shadow-lg transition-all group">
<div className="text-3xl mb-4 group-hover:scale-110 transition-transform origin-left">🎨</div>
<h3 className="text-xl font-semibold text-brand-charcoal mb-3">AI Product Engineers</h3>
<p className="text-gray-500 mb-4 h-24 text-base">Understand the UX behind "how AI should feel." Design prompt interfaces and feedback loops that don't suck.</p>
<ul className="text-sm text-gray-400 space-y-2 mb-6">
<li>• AI UX Design</li>
<li>• Prompt Interface Design</li>
<li>• Human-in-Loop Systems</li>
</ul>
<a className="text-brand-blue text-sm font-medium hover:underline" href="#">View Talent Pool →</a>
</div>

<div className="border border-gray-200 rounded-xl p-8 hover:border-brand-blue hover:shadow-lg transition-all group">
<div className="text-3xl mb-4 group-hover:scale-110 transition-transform origin-left">🗄️</div>
<h3 className="text-xl font-semibold text-brand-charcoal mb-3">Data Infrastructure Leads</h3>
<p className="text-gray-500 mb-4 h-24 text-base">Build the data foundations AI needs. ETL pipelines, semantic layers, and real-time streaming for model inputs.</p>
<ul className="text-sm text-gray-400 space-y-2 mb-6">
<li>• ETL/ELT Pipelines</li>
<li>• Data Warehousing</li>
<li>• Streaming Data Systems</li>
</ul>
<a className="text-brand-blue text-sm font-medium hover:underline" href="#">View Talent Pool →</a>
</div>
</div>
</div>

<div className="bg-brand-navy py-16" id="vetting">
<div className="max-w-4xl mx-auto px-6 text-center text-white">
<h3 className="text-2xl font-semibold mb-8">Why Our Vetting Works (The 3% Standard)</h3>
<p className="text-gray-300 mb-8 max-w-2xl mx-auto">We filter for what agencies can't evaluate. Our engineers are tested on math/stats foundations, systems thinking, and research literacy.</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
<div className="flex flex-col items-center gap-2">
<i className="w-8 h-8 text-brand-cyan" data-lucide="sigma"></i>
<span className="text-sm font-medium">Math Foundations</span>
</div>
<div className="flex flex-col items-center gap-2">
<i className="w-8 h-8 text-brand-cyan" data-lucide="network"></i>
<span className="text-sm font-medium">Systems Thinking</span>
</div>
<div className="flex flex-col items-center gap-2">
<i className="w-8 h-8 text-brand-cyan" data-lucide="book-open"></i>
<span className="text-sm font-medium">Research Literacy</span>
</div>
<div className="flex flex-col items-center gap-2">
<i className="w-8 h-8 text-brand-cyan" data-lucide="terminal"></i>
<span className="text-sm font-medium">Production ML</span>
</div>
</div>
<button className="text-brand-cyan font-semibold hover:text-white transition-colors flex items-center justify-center gap-2 mx-auto">
                    See Detailed Vetting Process <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-gray-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-brand-charcoal mb-6">How We Stack Up Against the Broken Alternatives</h2>
</div>
<div className="overflow-x-auto no-scrollbar rounded-xl shadow-xl bg-white border border-gray-200">
<table className="w-full min-w-[800px] text-left border-collapse">
<thead>
<tr>
<th className="p-6 border-b border-gray-100 bg-white w-1/4">Feature</th>
<th className="p-6 border-b border-gray-100 bg-white text-gray-500 font-medium w-1/4">Full-Time Hire</th>
<th className="p-6 border-b border-gray-100 bg-white text-gray-500 font-medium w-1/4">Staffing Agency</th>
<th className="p-6 border-b border-blue-100 bg-blue-50/50 text-brand-blue font-bold text-lg w-1/4">Hire AI Genius</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr>
<td className="p-6 font-semibold text-brand-charcoal">Time to Deploy</td>
<td className="p-6 text-gray-600">118 days avg</td>
<td className="p-6 text-gray-600">60-90 days</td>
<td className="p-6 bg-blue-50/30 text-brand-charcoal font-bold">14 days</td>
</tr>
<tr>
<td className="p-6 font-semibold text-brand-charcoal">Total Cost (Annual)</td>
<td className="p-6 text-gray-600">$200K - $400K</td>
<td className="p-6 text-gray-600">$150K + 30% fee</td>
<td className="p-6 bg-blue-50/30 text-brand-charcoal font-bold text-green-600">$80K - $160K</td>
</tr>
<tr>
<td className="p-6 font-semibold text-brand-charcoal">Vetting Quality</td>
<td className="p-6 text-gray-600">Hit-or-miss</td>
<td className="p-6 text-gray-600">Recruiter-screened</td>
<td className="p-6 bg-blue-50/30 text-brand-charcoal font-bold">3% acceptance (Practitioner)</td>
</tr>
<tr>
<td className="p-6 font-semibold text-brand-charcoal">Flexibility</td>
<td className="p-6 text-gray-600">Zero (Permanent)</td>
<td className="p-6 text-gray-600">Low (Contract lock)</td>
<td className="p-6 bg-blue-50/30 text-brand-charcoal font-bold">High (Weekly scale)</td>
</tr>
<tr>
<td className="p-6 font-semibold text-brand-charcoal">Offer Rejection Rate</td>
<td className="p-6 text-gray-600 text-red-500">68%</td>
<td className="p-6 text-gray-600 text-red-500">50%</td>
<td className="p-6 bg-blue-50/30 text-brand-charcoal font-bold text-green-600">3%</td>
</tr>
<tr>
<td className="p-6 font-semibold text-brand-charcoal">Exit Risk</td>
<td className="p-6 text-gray-600">Severance, Knowledge loss</td>
<td className="p-6 text-gray-600">Contract penalties</td>
<td className="p-6 bg-blue-50/30 text-brand-charcoal font-bold">Smooth handoff</td>
</tr>
</tbody>
</table>
</div>
<div className="text-center mt-12">
<a className="inline-flex items-center text-brand-blue font-semibold hover:underline" href="#">
<i className="w-5 h-5 mr-2" data-lucide="file-text"></i>
                    Download Full Cost Breakdown (PDF)
                </a>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-center text-brand-charcoal mb-20">AI Teams Who Avoided $300K Mistakes</h2>
<div className="grid md:grid-cols-2 gap-12">

<div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-10 relative overflow-hidden group hover:shadow-xl transition-all">
<div className="absolute top-0 left-0 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-br-xl">SERIES A STARTUP</div>
<h3 className="text-2xl font-bold text-brand-charcoal mt-4 mb-6">Saved $180K &amp; Shipped MVP in 8 Weeks</h3>
<div className="space-y-6">
<div>
<h4 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-2">The Challenge</h4>
<p className="text-gray-600 leading-relaxed">Seed-stage AI startup needed senior LLM expertise to build RAG architecture before Series A demo day. Couldn't justify $250K full-time hire on 18-month runway.</p>
</div>
<div>
<h4 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-2">The Solution</h4>
<p className="text-gray-600 leading-relaxed">Fractional Senior LLM Engineer. 25+ hrs/week scaled to 40. 2 weeks to deploy.</p>
</div>
<div className="bg-green-50 p-6 rounded-xl border border-green-100">
<h4 className="text-sm font-bold text-green-800 uppercase tracking-wide mb-3">Results</h4>
<ul className="space-y-2 text-green-900 font-medium">
<li className="flex gap-2"><i className="w-5 h-5" data-lucide="check-circle"></i> Shipped production RAG pipeline in 8 weeks</li>
<li className="flex gap-2"><i className="w-5 h-5" data-lucide="check-circle"></i> Secured $3M Series A follow-on funding</li>
<li className="flex gap-2"><i className="w-5 h-5" data-lucide="check-circle"></i> $180K savings vs. full-time hire</li>
</ul>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-10 relative overflow-hidden group hover:shadow-xl transition-all">
<div className="absolute top-0 left-0 bg-purple-600 text-white text-xs font-bold px-4 py-2 rounded-br-xl">MID-MARKET SAAS</div>
<h3 className="text-2xl font-bold text-brand-charcoal mt-4 mb-6">Avoided $240K Overhead, Retained Control</h3>
<div className="space-y-6">
<div>
<h4 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-2">The Challenge</h4>
<p className="text-gray-600 leading-relaxed">$5M ARR SaaS company wanted AI-powered recommendation engine but feared "AI team creep." Agencies quoted $300K+ for black-box solutions.</p>
</div>
<div>
<h4 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-2">The Solution</h4>
<p className="text-gray-600 leading-relaxed">Fractional Applied ML Engineer. 20 hrs/week for 6 months. Internal team upskilled.</p>
</div>
<div className="bg-green-50 p-6 rounded-xl border border-green-100">
<h4 className="text-sm font-bold text-green-800 uppercase tracking-wide mb-3">Results</h4>
<ul className="space-y-2 text-green-900 font-medium">
<li className="flex gap-2"><i className="w-5 h-5" data-lucide="check-circle"></i> 15% uplift in user engagement</li>
<li className="flex gap-2"><i className="w-5 h-5" data-lucide="check-circle"></i> Internal team upskilled (not dependent)</li>
<li className="flex gap-2"><i className="w-5 h-5" data-lucide="check-circle"></i> $240K saved vs. agency + full-time hire</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-bg">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-center text-brand-charcoal mb-16">Questions Every Smart Buyer Asks</h2>
<div className="space-y-4">
<details className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 open:ring-2 open:ring-brand-blue/10">
<summary className="flex justify-between items-center p-6 cursor-pointer font-semibold text-lg text-brand-charcoal select-none">
                        How does fractional reduce risk?
                        <span className="transform group-open:rotate-45 transition-transform duration-300 text-brand-blue">
<i className="w-6 h-6" data-lucide="plus"></i>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-transparent group-open:border-gray-100 group-open:pt-4">
                        By providing pre-vetted AI practitioners on a flexible basis, you avoid the high-stakes "marriage" of full-time hires. Test the fit, validate the architecture, and scale commitment only after seeing real output. No 6-month onboarding gambles.
                    </div>
</details>
<details className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 open:ring-2 open:ring-brand-blue/10">
<summary className="flex justify-between items-center p-6 cursor-pointer font-semibold text-lg text-brand-charcoal select-none">
                        What is "Talent Arbitrage"?
                        <span className="transform group-open:rotate-45 transition-transform duration-300 text-brand-blue">
<i className="w-6 h-6" data-lucide="plus"></i>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-transparent group-open:border-gray-100 group-open:pt-4">
                        Access seniors at modular speeds. Big Tech locks up 70% of top AI talent with $300K+ offers. We work with proven engineers who choose fractional work for autonomy. You get 99th percentile output without 100th percentile overhead.
                    </div>
</details>
<details className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 open:ring-2 open:ring-brand-blue/10">
<summary className="flex justify-between items-center p-6 cursor-pointer font-semibold text-lg text-brand-charcoal select-none">
                        Can we hire full-time later?
                        <span className="transform group-open:rotate-45 transition-transform duration-300 text-brand-blue">
<i className="w-6 h-6" data-lucide="plus"></i>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-transparent group-open:border-gray-100 group-open:pt-4">
                        Yes, if mutual fit exists. Many clients start fractional to validate skill + culture, then extend full-time offers. We don't block conversions (no agency placement fees). Talent decides based on their career goals.
                    </div>
</details>
<details className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 open:ring-2 open:ring-brand-blue/10">
<summary className="flex justify-between items-center p-6 cursor-pointer font-semibold text-lg text-brand-charcoal select-none">
                        How do you vet production-readiness?
                        <span className="transform group-open:rotate-45 transition-transform duration-300 text-brand-blue">
<i className="w-6 h-6" data-lucide="plus"></i>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-transparent group-open:border-gray-100 group-open:pt-4">
                        Our screening evaluates: (1) Math/stats foundations via technical problems, (2) Systems thinking through architecture discussions, (3) Production experience via GitHub portfolios + deployed case studies. Only 3% pass.
                    </div>
</details>
<details className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 open:ring-2 open:ring-brand-blue/10">
<summary className="flex justify-between items-center p-6 cursor-pointer font-semibold text-lg text-brand-charcoal select-none">
                        What if scope changes mid-engagement?
                        <span className="transform group-open:rotate-45 transition-transform duration-300 text-brand-blue">
<i className="w-6 h-6" data-lucide="plus"></i>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-transparent group-open:border-gray-100 group-open:pt-4">
                        Scale hours up/down weekly. Swap specialists if focus shifts (e.g., LLM → MLOps). No penalties. 2-week notice to adjust or exit. Fractional exists to absorb uncertainty, not create lock-in.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-gradient-to-br from-[#0A2540] to-blue-900 text-white text-center">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">Every Week You Wait, Your Competitor Ships</h2>
<p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                Amid a 67% YoY AI demand surge, you have two choices: Burn months on full-time chaos or access pre-vetted talent in 2 weeks. The right AI hire compounds velocity.
            </p>
<button className="bg-white text-brand-blue hover:bg-gray-50 font-bold text-xl px-12 py-6 rounded-full shadow-2xl hover:scale-105 transition-transform mb-12">
                Book Free 30-Minute Consultation →
            </button>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 text-blue-200/80 text-base">
<span>What Happens Next:</span>
<span className="hidden md:inline">|</span>
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded-full border border-blue-400/50 flex items-center justify-center text-xs">1</span>
                    30-min chat with AI architect
                </div>
<span className="hidden md:inline">→</span>
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded-full border border-blue-400/50 flex items-center justify-center text-xs">2</span>
                    Matched profiles in 48h
                </div>
<span className="hidden md:inline">→</span>
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded-full border border-blue-400/50 flex items-center justify-center text-xs">3</span>
                    Deploy in 2 weeks
                </div>
</div>
</div>
</section>

<footer className="bg-brand-navy text-gray-400 pt-20 pb-10 border-t border-gray-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<span className="text-white text-xl font-bold block mb-6">Hire AI Genius</span>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Product</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">How It Works</a></li>
<li><a className="hover:text-white transition-colors" href="#">Vetting Process</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Comparison Tool</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Talent</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">LLM Engineers</a></li>
<li><a className="hover:text-white transition-colors" href="#">MLOps Specialists</a></li>
<li><a className="hover:text-white transition-colors" href="#">Applied ML</a></li>
<li><a className="hover:text-white transition-colors" href="#">Data Scientists</a></li>
<li><a className="hover:text-white transition-colors text-brand-cyan" href="#">View All Roles →</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Resources</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-white transition-colors" href="#">2025 Hiring Guide</a></li>
<li><a className="hover:text-white transition-colors" href="#">Fractional vs Full-Time</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Contact</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">hello@hireai.genius</a></li>
<li><a className="hover:text-white transition-colors" href="#">Schedule a Call</a></li>
<li className="flex gap-4 pt-2">
<a className="hover:text-brand-cyan" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="hover:text-brand-cyan" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="hover:text-brand-cyan" href="#"><i className="w-5 h-5" data-lucide="github"></i></a>
</li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
<div className="flex flex-wrap justify-center gap-6">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
<a className="hover:text-white" href="#">SOC 2 Compliance</a>
</div>
<div className="text-center md:text-right">
<p>© 2026 Hire AI Genius, Inc. Not a staffing agency.</p>
</div>
</div>
</div>
</footer>


    </>
  );
}
