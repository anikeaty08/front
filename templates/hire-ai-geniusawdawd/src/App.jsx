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
sans: ['Inter', 'system-ui', 'sans-serif'],
},
colors: {
primary: {
50: '#eff6ff',
100: '#dbeafe',
500: '#3b82f6',
600: '#2563eb',
700: '#1d4ed8',
900: '#1e3a8a',
},
slate: {
850: '#1e293b', // Custom dark slate
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
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
      

<nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="brain-circuit"></i>
</div>
<span className="text-slate-900 font-semibold tracking-tight text-lg">Hire AI Genius</span>
</div>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-500">
<a className="hover:text-primary-600 transition-colors" href="#problem">Problem</a>
<a className="hover:text-primary-600 transition-colors" href="#solution">Solution</a>
<a className="hover:text-primary-600 transition-colors" href="#talent">Talent</a>
<a className="hover:text-primary-600 transition-colors" href="#results">Results</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-primary-600" href="#">Login</a>
<a className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-all shadow-sm hover:shadow-md" href="#book">
                        Book Consultation
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-6">
<span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                        The AI talent shortage is 3.2:1. Your competitors are moving faster.
                    </div>
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tighter text-slate-900 mb-6 leading-[1.1]">
                        Hire Pre-Vetted AI Engineers in <span className="text-primary-600">2 Weeks</span>, Not 118 Days
                    </h1>
<p className="text-lg lg:text-xl text-slate-500 mb-8 leading-relaxed font-normal">
                        Stop burning runway on wrong hires. Get fractional AI specialists who deploy fast, deliver outcomes, and scale with your roadmap—no 30% agency markup, no 6-month commitments, no hiring regret.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-8">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-white bg-primary-600 hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/20" href="#book">
                            Book Free AI Hiring Consultation <i className="ml-2 w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<p className="text-sm text-slate-400 mb-8">
                        See how we've helped AI teams avoid <a className="text-primary-600 underline hover:text-primary-700" href="#results">$300K hiring mistakes</a>
</p>
<div className="flex flex-wrap gap-y-4 gap-x-8 py-6 border-t border-slate-100">
<div className="flex items-center gap-2 text-sm font-medium text-slate-700">
<i className="w-4 h-4 text-amber-500" data-lucide="zap"></i> 2-week deployment
                        </div>
<div className="flex items-center gap-2 text-sm font-medium text-slate-700">
<i className="w-4 h-4 text-emerald-500" data-lucide="coins"></i> 40% cost savings
                        </div>
<div className="flex items-center gap-2 text-sm font-medium text-slate-700">
<i className="w-4 h-4 text-blue-500" data-lucide="check-circle-2"></i> 90% retention
                        </div>
<div className="flex items-center gap-2 text-sm font-medium text-slate-700">
<i className="w-4 h-4 text-purple-500" data-lucide="rocket"></i> 50+ AI teams deployed
                        </div>
</div>
</div>
<div className="relative lg:block hidden">
<div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl blur-2xl opacity-40"></div>
<div className="relative bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 overflow-hidden">

<div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
<i className="w-5 h-5 text-slate-400" data-lucide="user"></i>
</div>
<div>
<div className="h-4 w-32 bg-slate-100 rounded mb-2"></div>
<div className="h-3 w-20 bg-slate-50 rounded"></div>
</div>
</div>
<div className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full font-medium">Verified Expert</div>
</div>
<div className="space-y-4">
<div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-primary-600" data-lucide="code-2"></i>
<span className="text-xs font-semibold text-slate-700">RAG Architecture Implementation</span>
</div>
<div className="space-y-2">
<div className="h-2 w-full bg-slate-200 rounded"></div>
<div className="h-2 w-5/6 bg-slate-200 rounded"></div>
</div>
</div>
<div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-purple-600" data-lucide="cpu"></i>
<span className="text-xs font-semibold text-slate-700">LLM Fine-tuning &amp; Optimization</span>
</div>
<div className="space-y-2">
<div className="h-2 w-full bg-slate-200 rounded"></div>
<div className="h-2 w-4/6 bg-slate-200 rounded"></div>
</div>
</div>
</div>
<div className="mt-6 flex gap-3">
<div className="flex-1 py-2 bg-primary-600 text-white text-xs font-medium rounded text-center">Schedule Interview</div>
<div className="flex-1 py-2 bg-white border border-slate-200 text-slate-600 text-xs font-medium rounded text-center">View Code Samples</div>
</div>
</div>
</div>
</div>
<div className="mt-20 border-t border-slate-100 pt-10">
<p className="text-sm text-center text-slate-400 font-medium mb-8">Trusted by seed-stage founders to Fortune 500 innovation labs</p>
<div className="flex justify-center items-center gap-12 lg:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<svg className="h-8" fill="currentColor" viewbox="0 0 100 30"><path d="M10,15 L20,5 L30,15 L20,25 Z M40,5 H90 V25 H40 Z" fill="currentColor"></path></svg>
<svg className="h-8" fill="currentColor" viewbox="0 0 100 30"><circle cx="15" cy="15" r="10"></circle><rect height="10" width="60" x="35" y="10"></rect></svg>
<svg className="h-8" fill="currentColor" viewbox="0 0 100 30"><rect height="20" width="20" x="5" y="5"></rect><path d="M35,15 H95" stroke="currentColor" strokeWidth="5"></path></svg>
<svg className="h-7" fill="currentColor" viewbox="0 0 100 30"><path d="M10,25 L20,5 L30,25 M40,15 H90" stroke="currentColor" strokeWidth="4"></path></svg>
<svg className="h-8" fill="currentColor" viewbox="0 0 100 30"><circle cx="15" cy="15" r="8"></circle><circle cx="35" cy="15" r="8"></circle><circle cx="55" cy="15" r="8"></circle></svg>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="problem">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Why AI Hiring Keeps Failing <span className="text-slate-400 font-normal">(And It's Getting Worse)</span></h2>
<p className="text-lg text-slate-500 leading-relaxed">
                    The 2025 AI talent market is fundamentally broken. Demand doubled in Q1 alone. But the real problem isn't just scarcity—it's how the system forces you into bad choices.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 text-red-600">
<i className="w-6 h-6" data-lucide="building-2"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Full-Time Hiring</h3>
<p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-4">The Default Trap</p>
<div className="space-y-3 mb-6">
<p className="text-sm text-slate-600 border-l-2 border-red-100 pl-3">118-day average time-to-hire</p>
<p className="text-sm text-slate-600 border-l-2 border-red-100 pl-3">$200K-$400K annual commitment</p>
<p className="text-sm text-slate-600 border-l-2 border-red-100 pl-3">50% offers die in notice periods</p>
</div>
<div className="pt-6 border-t border-slate-100">
<p className="text-sm text-slate-500 italic">"One wrong hire = 6 months lost, $300K burned, roadmap permanently delayed."</p>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6 text-orange-600">
<i className="w-6 h-6" data-lucide="briefcase"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Staffing Agencies</h3>
<p className="text-xs font-semibold text-orange-600 uppercase tracking-wider mb-4">The Markup Machine</p>
<div className="space-y-3 mb-6">
<p className="text-sm text-slate-600 border-l-2 border-orange-100 pl-3">20-40% placement fees</p>
<p className="text-sm text-slate-600 border-l-2 border-orange-100 pl-3">Generic recruiters, no tech fit</p>
<p className="text-sm text-slate-600 border-l-2 border-orange-100 pl-3">Recycled candidates</p>
</div>
<div className="pt-6 border-t border-slate-100">
<p className="text-sm text-slate-500 italic">"Overpaid juniors pretending to be AI experts. Agencies monetize scarcity, not quality."</p>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 text-slate-600">
<i className="w-6 h-6" data-lucide="globe"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Freelance Platforms</h3>
<p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">The Marketplace Chaos</p>
<div className="space-y-3 mb-6">
<p className="text-sm text-slate-600 border-l-2 border-slate-200 pl-3">Self-reported, unverified skills</p>
<p className="text-sm text-slate-600 border-l-2 border-slate-200 pl-3">Task execution, no ownership</p>
<p className="text-sm text-slate-600 border-l-2 border-slate-200 pl-3">Management overhead</p>
</div>
<div className="pt-6 border-t border-slate-100">
<p className="text-sm text-slate-500 italic">"You become the vetting layer. 90% of applicants lack production ML experience."</p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-base text-slate-600 font-medium mb-2">The market is screaming for a better model. We built it.</p>
<i className="w-5 h-5 text-slate-300 mx-auto mt-4 animate-bounce" data-lucide="arrow-down"></i>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-200" id="solution">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Fractional AI Talent That Actually Works</h2>
<p className="text-lg text-slate-500 max-w-2xl">We're not a staffing agency. We're the talent access infrastructure for AI companies who can't afford to hire wrong.</p>
</div>
<div className="grid lg:grid-cols-3 gap-12">
<div className="space-y-6">
<div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600">
<i className="w-5 h-5" data-lucide="filter"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900">Pre-Vetted by AI Practitioners</h3>
<p className="text-slate-500 leading-relaxed">
                        87% of AI applications are bot-submitted. Our screeners are senior ML engineers, not HR generalists. We verify production experience through code reviews. Only <span className="text-slate-900 font-medium">3% acceptance rate</span>.
                    </p>
</div>
<div className="space-y-6">
<div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900">Fractional Doesn't Mean Freelance</h3>
<p className="text-slate-500 leading-relaxed">
                        Freelancers execute tasks; our talent owns outcomes. They work 10-40 hours/week embedded in your Slack, standups, and sprint planning. <span className="text-slate-900 font-medium">90% retention rate</span> because they are treated like team members.
                    </p>
</div>
<div className="space-y-6">
<div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600">
<i className="w-5 h-5" data-lucide="zap-fast"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900">Deploy in Weeks, Scale Without Drama</h3>
<p className="text-slate-500 leading-relaxed">
                        118 days vs 14 days. Scale hours up or down based on roadmap milestones. Exit cleanly when scope completes. Expert judgment during the high-risk MVP phase.
                    </p>
</div>
</div>

<div className="mt-20 bg-slate-900 rounded-2xl p-8 lg:p-12 text-white overflow-hidden relative">
<div className="absolute top-0 right-0 p-32 bg-primary-600 rounded-full blur-[100px] opacity-20"></div>
<div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
<div>
<h3 className="text-2xl font-semibold mb-6">2025 Market Reality vs. Us</h3>
<ul className="space-y-4 text-slate-300">
<li className="flex items-center gap-3"><span className="text-red-400">🔥</span> 1.3M job openings vs 650K candidates</li>
<li className="flex items-center gap-3"><span className="text-red-400">⏱️</span> 118 days avg time-to-hire</li>
<li className="flex items-center gap-3"><span className="text-red-400">❌</span> 68% of AI offers rejected</li>
</ul>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="bg-white/10 backdrop-blur border border-white/10 p-6 rounded-xl">
<div className="text-3xl font-semibold text-primary-400 mb-1">14 Days</div>
<div className="text-sm text-slate-300">Avg Deployment</div>
</div>
<div className="bg-white/10 backdrop-blur border border-white/10 p-6 rounded-xl">
<div className="text-3xl font-semibold text-emerald-400 mb-1">40%</div>
<div className="text-sm text-slate-300">Cost Savings</div>
</div>
<div className="bg-white/10 backdrop-blur border border-white/10 p-6 rounded-xl">
<div className="text-3xl font-semibold text-blue-400 mb-1">3%</div>
<div className="text-sm text-slate-300">Acceptance Rate</div>
</div>
<div className="bg-white/10 backdrop-blur border border-white/10 p-6 rounded-xl">
<div className="text-3xl font-semibold text-purple-400 mb-1">50+</div>
<div className="text-sm text-slate-300">Projects Shipped</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Built For "Bottlenecked Builders" Who Own Delivery Risk</h2>
<p className="text-lg text-slate-500">You're not looking for resumes. You're looking to compress risk. Bad AI talent is worse than no AI talent.</p>
</div>
<div className="grid md:grid-cols-2 gap-6 lg:gap-8">

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center gap-4 mb-6">
<div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><i className="w-6 h-6" data-lucide="rocket"></i></div>
<h3 className="text-xl font-semibold text-slate-900">AI-First Startup Founders</h3>
</div>
<p className="text-slate-500 mb-6 text-sm leading-relaxed">
                        If this next hire is wrong, you lose 6 months and burn $300K. Investors expect velocity. You need expert judgment now, without permanent commitment.
                    </p>
<div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Perfect For</div>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-700"><i className="w-4 h-4 text-blue-500" data-lucide="check"></i> MVP development with LLM features</li>
<li className="flex items-center gap-2 text-sm text-slate-700"><i className="w-4 h-4 text-blue-500" data-lucide="check"></i> Validating technical approach</li>
</ul>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center gap-4 mb-6">
<div className="p-3 bg-purple-50 text-purple-600 rounded-lg"><i className="w-6 h-6" data-lucide="layers"></i></div>
<h3 className="text-xl font-semibold text-slate-900">SaaS Founders Retrofitting AI</h3>
</div>
<p className="text-slate-500 mb-6 text-sm leading-relaxed">
                        You don't want to become an "AI company" internally. You need AI capability integrated into your product without rewriting your org or vendor lock-in.
                    </p>
<div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Perfect For</div>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-700"><i className="w-4 h-4 text-purple-500" data-lucide="check"></i> AI-powered recommendations</li>
<li className="flex items-center gap-2 text-sm text-slate-700"><i className="w-4 h-4 text-purple-500" data-lucide="check"></i> Internal AI tooling</li>
</ul>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center gap-4 mb-6">
<div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg"><i className="w-6 h-6" data-lucide="cpu"></i></div>
<h3 className="text-xl font-semibold text-slate-900">Technical CTOs</h3>
</div>
<p className="text-slate-500 mb-6 text-sm leading-relaxed">
                        Stretched thin across infrastructure and hiring. Hiring full-time creates management overhead. You want someone senior who doesn't need hand-holding.
                    </p>
<div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Perfect For</div>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-700"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> Feature dev without direct reports</li>
<li className="flex items-center gap-2 text-sm text-slate-700"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> Technical decision support</li>
</ul>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center gap-4 mb-6">
<div className="p-3 bg-orange-50 text-orange-600 rounded-lg"><i className="w-6 h-6" data-lucide="building"></i></div>
<h3 className="text-xl font-semibold text-slate-900">Enterprise Innovation Teams</h3>
</div>
<p className="text-slate-500 mb-6 text-sm leading-relaxed">
                        Budget exists, but hiring freezes and procurement block headcount. Fractional contracts bypass HR bureaucracy to get pilot wins fast.
                    </p>
<div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Perfect For</div>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-700"><i className="w-4 h-4 text-orange-500" data-lucide="check"></i> Proof-of-concepts for buy-in</li>
<li className="flex items-center gap-2 text-sm text-slate-700"><i className="w-4 h-4 text-orange-500" data-lucide="check"></i> Validating use cases</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-200" id="talent">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">The AI Specialists We Place</h2>
<p className="text-lg text-slate-500">Senior practitioners with production battle scars. Not bootcamp grads with AI hype resumes.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 bg-white border border-slate-200 rounded-lg hover:border-primary-200 transition-colors">
<h3 className="text-lg font-semibold text-slate-900 mb-2">LLM Engineers</h3>
<p className="text-sm text-slate-500 mb-4 h-20">Can explain RAG architecture tradeoffs. Optimized inference costs. Built LLM features users depend on.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded border border-slate-100">RAG</span>
<span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded border border-slate-100">Fine-tuning</span>
<span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded border border-slate-100">Vector DBs</span>
</div>
</div>

<div className="p-6 bg-white border border-slate-200 rounded-lg hover:border-primary-200 transition-colors">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Applied ML Engineers</h3>
<p className="text-sm text-slate-500 mb-4 h-20">Shipped models to production. Handle data drift and training-serving skew. Know when NOT to use ML.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded border border-slate-100">End-to-End</span>
<span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded border border-slate-100">RecSys</span>
<span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded border border-slate-100">Predictive</span>
</div>
</div>

<div className="p-6 bg-white border border-slate-200 rounded-lg hover:border-primary-200 transition-colors">
<h3 className="text-lg font-semibold text-slate-900 mb-2">MLOps Specialists</h3>
<p className="text-sm text-slate-500 mb-4 h-20">Build CI/CD for ML. Handle model versioning disasters. Infrastructure as code for ML workloads.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded border border-slate-100">Kubeflow</span>
<span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded border border-slate-100">MLflow</span>
<span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded border border-slate-100">Pipelines</span>
</div>
</div>

<div className="p-6 bg-white border border-slate-200 rounded-lg hover:border-primary-200 transition-colors">
<h3 className="text-lg font-semibold text-slate-900 mb-2">AI Research Engineers</h3>
<p className="text-sm text-slate-500 mb-4 h-20">Read and implement papers. Optimize algorithms for latency/memory. Bridge research to production.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded border border-slate-100">PyTorch</span>
<span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded border border-slate-100">Architecture</span>
<span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded border border-slate-100">Optimization</span>
</div>
</div>

<div className="p-6 bg-white border border-slate-200 rounded-lg hover:border-primary-200 transition-colors">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Data Scientists</h3>
<p className="text-sm text-slate-500 mb-4 h-20">Production-focused. Version datasets. Causal inference. Detect spurious correlations.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded border border-slate-100">Stats</span>
<span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded border border-slate-100">A/B Testing</span>
<span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded border border-slate-100">Analytics</span>
</div>
</div>

<div className="p-6 bg-white border border-slate-200 rounded-lg hover:border-primary-200 transition-colors">
<h3 className="text-lg font-semibold text-slate-900 mb-2">AI Product Engineers</h3>
<p className="text-sm text-slate-500 mb-4 h-20">Scope AI features without over-promising. Understand UX for probabilistic systems.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded border border-slate-100">Scoping</span>
<span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded border border-slate-100">Tradeoffs</span>
<span className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded border border-slate-100">UX</span>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700" href="#book">
                    See who's available in your domain <i className="ml-2 w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">From "I Need Help" to "They're Shipping Code" in 14 Days</h2>
<p className="text-lg text-slate-500">No 118-day hiring cycle. No agency games. Just speed + quality.</p>
</div>
<div className="relative">
<div className="absolute left-1/2 h-full w-0.5 bg-slate-200 -translate-x-1/2 hidden md:block"></div>
<div className="space-y-12">

<div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
<div className="md:w-5/12 order-2 md:order-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<h3 className="text-lg font-semibold text-slate-900 mb-2">1. Discovery Call (Day 1)</h3>
<p className="text-sm text-slate-500">30 min with an AI practitioner. Discuss roadmap, stack, and constraints. Get a transparent cost estimate same day.</p>
</div>
<div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary-600 border-4 border-white flex items-center justify-center text-white text-xs font-bold z-10 hidden md:flex">1</div>
<div className="md:w-5/12 order-1 md:order-2 text-center md:text-left">

</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
<div className="md:w-5/12 order-2 md:order-1 text-center md:text-right"></div>
<div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary-600 border-4 border-white flex items-center justify-center text-white text-xs font-bold z-10 hidden md:flex">2</div>
<div className="md:w-5/12 order-1 md:order-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<h3 className="text-lg font-semibold text-slate-900 mb-2">2. Talent Matching (Days 2-3)</h3>
<p className="text-sm text-slate-500">Matched with 2-3 pre-vetted specialists. View real work samples (GitHub), not portfolio fluff. Choose best technical fit.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
<div className="md:w-5/12 order-2 md:order-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<h3 className="text-lg font-semibold text-slate-900 mb-2">3. Engagement Setup (Days 4-8)</h3>
<p className="text-sm text-slate-500">Simple 3-page contract. Fast onboarding. Tool access, codebase walkthrough. No agency bureaucracy.</p>
</div>
<div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary-600 border-4 border-white flex items-center justify-center text-white text-xs font-bold z-10 hidden md:flex">3</div>
<div className="md:w-5/12 order-1 md:order-2"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
<div className="md:w-5/12 order-2 md:order-1"></div>
<div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary-600 border-4 border-white flex items-center justify-center text-white text-xs font-bold z-10 hidden md:flex">4</div>
<div className="md:w-5/12 order-1 md:order-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<h3 className="text-lg font-semibold text-slate-900 mb-2">4. Deployment (Day 9+)</h3>
<p className="text-sm text-slate-500">Engineer embedded in Slack/Standups. Ramps fast. Scale hours up/down. Clean exit when project ships.</p>
</div>
</div>
</div>
</div>

<div className="mt-20 overflow-x-auto">
<table className="w-full text-sm text-left text-slate-600">
<thead className="text-xs text-slate-500 uppercase bg-slate-100">
<tr>
<th className="px-6 py-4 rounded-tl-lg" scope="col">Milestone</th>
<th className="px-6 py-4 bg-primary-50 text-primary-700 font-bold border-b-2 border-primary-200" scope="col">Hire AI Genius</th>
<th className="px-6 py-4" scope="col">Staffing Agency</th>
<th className="px-6 py-4 rounded-tr-lg" scope="col">Full-Time Hiring</th>
</tr>
</thead>
<tbody className="bg-white border-b border-slate-200">
<tr className="border-b border-slate-100">
<td className="px-6 py-4 font-medium text-slate-900">First Productive Work</td>
<td className="px-6 py-4 bg-primary-50/30 font-semibold text-primary-700">Day 14</td>
<td className="px-6 py-4">Week 10-12</td>
<td className="px-6 py-4">Month 6+</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-slate-900">Time Saved</td>
<td className="px-6 py-4 bg-primary-50/30 font-semibold text-primary-700">Massive</td>
<td className="px-6 py-4">8-10 Weeks</td>
<td className="px-6 py-4">4-5 Months</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-200" id="results">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4 text-center">AI Teams Who Avoided $300K Mistakes</h2>
<div className="grid lg:grid-cols-3 gap-8 mt-16">

<div className="group cursor-pointer">
<div className="h-48 bg-slate-100 rounded-t-xl overflow-hidden relative">

<div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-90"></div>
<div className="absolute bottom-4 left-4 text-white font-semibold text-lg">Series A Startup</div>
</div>
<div className="bg-white p-6 border border-t-0 border-slate-200 rounded-b-xl shadow-sm hover:shadow-md transition-all">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Saved $180K &amp; Secured Funding</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-3">Needed LLM feature in 12 weeks for funding. Deployed senior engineer in 2 weeks. Shipped MVP in 8 weeks. $3M follow-on secured.</p>
<span className="text-primary-600 text-sm font-medium group-hover:underline">Read case study →</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="h-48 bg-slate-100 rounded-t-xl overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 opacity-90"></div>
<div className="absolute bottom-4 left-4 text-white font-semibold text-lg">Mid-Market SaaS</div>
</div>
<div className="bg-white p-6 border border-t-0 border-slate-200 rounded-b-xl shadow-sm hover:shadow-md transition-all">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Launched AI Feature in 10 Weeks</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-3">Wanted AI recommendations but no ML team. Avoided "becoming AI company." 15% engagement increase. Internal team now maintains.</p>
<span className="text-primary-600 text-sm font-medium group-hover:underline">Read case study →</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="h-48 bg-slate-100 rounded-t-xl overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 opacity-90"></div>
<div className="absolute bottom-4 left-4 text-white font-semibold text-lg">Fortune 500 Lab</div>
</div>
<div className="bg-white p-6 border border-t-0 border-slate-200 rounded-b-xl shadow-sm hover:shadow-md transition-all">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Bypassed 9-Month Hiring Freeze</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-3">Pilot needed in 6 weeks. Used fractional as "consulting" to bypass HR. Secured $2M budget. 70% reduction in manual processing.</p>
<span className="text-primary-600 text-sm font-medium group-hover:underline">Read case study →</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4 text-center">Hire AI Genius vs. The Broken Alternatives</h2>
<div className="mt-12 overflow-x-auto">
<table className="w-full text-sm text-left text-slate-300">
<thead>
<tr className="border-b border-slate-700">
<th className="py-4 px-6 font-medium text-slate-400">Factor</th>
<th className="py-4 px-6 text-white font-bold bg-primary-600/20 border-t-2 border-primary-500">Hire AI Genius</th>
<th className="py-4 px-6 font-medium text-slate-400">Staffing Agencies</th>
<th className="py-4 px-6 font-medium text-slate-400">Freelance Platforms</th>
<th className="py-4 px-6 font-medium text-slate-400">Full-Time Hiring</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-800">
<tr>
<td className="py-4 px-6 font-medium text-white">Time to Start</td>
<td className="py-4 px-6 text-primary-300 bg-primary-600/10 font-medium">14 days</td>
<td className="py-4 px-6">6-8 weeks</td>
<td className="py-4 px-6">1-4 weeks (chaos)</td>
<td className="py-4 px-6">118 days</td>
</tr>
<tr>
<td className="py-4 px-6 font-medium text-white">Cost Structure</td>
<td className="py-4 px-6 text-primary-300 bg-primary-600/10 font-medium">Transparent hourly</td>
<td className="py-4 px-6">+30-40% markup</td>
<td className="py-4 px-6">Variable</td>
<td className="py-4 px-6">$200K-$400K/yr</td>
</tr>
<tr>
<td className="py-4 px-6 font-medium text-white">Vetting</td>
<td className="py-4 px-6 text-primary-300 bg-primary-600/10 font-medium">3% acceptance</td>
<td className="py-4 px-6">Generic screens</td>
<td className="py-4 px-6">Self-reported</td>
<td className="py-4 px-6">Your risk</td>
</tr>
<tr>
<td className="py-4 px-6 font-medium text-white">Risk</td>
<td className="py-4 px-6 text-primary-300 bg-primary-600/10 font-medium">Low (2-week trial)</td>
<td className="py-4 px-6">Medium</td>
<td className="py-4 px-6">High (Bots)</td>
<td className="py-4 px-6">High ($300K)</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-16 text-center">What "Bottlenecked Builders" Say</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
<p className="text-slate-600 mb-6 leading-relaxed">"We needed an LLM engineer yesterday. Hire AI Genius had someone integrated into our Slack within 10 days. Just a senior engineer who'd built RAG systems 5 times before."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full"></div>
<div>
<div className="text-sm font-semibold text-slate-900">Sarah Chen</div>
<div className="text-xs text-slate-500">CTO, Legal Tech Startup</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
<p className="text-slate-600 mb-6 leading-relaxed">"Hiring full-time would've taken 5 months. We got a fractional ML engineer for 20 hours a week, shipped our feature in 8 weeks, and saved $180K. Just makes sense."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full"></div>
<div>
<div className="text-sm font-semibold text-slate-900">Marcus Rodriguez</div>
<div className="text-xs text-slate-500">VP Eng, E-commerce SaaS</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
<p className="text-slate-600 mb-6 leading-relaxed">"The technical screening was legit. Every candidate actually knew their stuff. We hired two engineers in three weeks. Both are still with us 8 months later."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full"></div>
<div>
<div className="text-sm font-semibold text-slate-900">Jennifer Wu</div>
<div className="text-xs text-slate-500">Founder, CV Startup</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-200">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-8 text-center">Questions Every Smart Buyer Asks</h2>
<div className="space-y-4">
<details className="group bg-slate-50 rounded-xl">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900">
<span>Fractional vs Freelance—What's the difference?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-slate-500 px-6 pb-6 pt-0 leading-relaxed">
                        Freelancers are task executors; our talent are outcome owners. They are embedded into your team, own the architecture, and have a 90% retention rate.
                    </div>
</details>
<details className="group bg-slate-50 rounded-xl">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900">
<span>What if the engineer doesn't work out?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-slate-500 px-6 pb-6 pt-0 leading-relaxed">
                        We offer a 2-week trial period. If the fit isn't right, we replace them or pause the engagement. No questions asked. No penalties.
                    </div>
</details>
<details className="group bg-slate-50 rounded-xl">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900">
<span>Can we scale from fractional to full-time?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-slate-500 px-6 pb-6 pt-0 leading-relaxed">
                        Absolutely. 40% of our placements convert to full-time. We don't charge conversion penalties for making a smart hire.
                    </div>
</details>
<details className="group bg-slate-50 rounded-xl">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900">
<span>What's your pricing model?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-slate-500 px-6 pb-6 pt-0 leading-relaxed">
                        Transparent hourly rates. Most seniors are $120-$180/hr. No placement fees, no hidden markups. Pause or cancel anytime with 2-week notice.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="book">
<div className="absolute inset-0 bg-slate-900 clip-path-slant z-0"></div>
<div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter mb-6">Every Week You Wait, Your Competitor Ships</h2>
<p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                118 days to hire full-time vs 2 weeks with us. The right AI hire compounds. The wrong one kills.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-primary-600 bg-white hover:bg-slate-50 transition-all shadow-lg" href="#">
                    Book Free 30-Minute Consultation <i className="ml-2 w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="text-slate-300 hover:text-white underline decoration-slate-500 underline-offset-4" href="#">Download "The $300K Mistake" Guide</a>
</div>
<p className="mt-8 text-sm text-slate-400">Join 50+ AI teams who stopped burning runway.</p>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-primary-600 rounded flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="brain-circuit"></i>
</div>
<span className="text-slate-900 font-semibold tracking-tight">Hire AI Genius</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">Not a staffing agency. The talent access infrastructure for AI companies.</p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">For Companies</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-primary-600" href="#">LLM Engineers</a></li>
<li><a className="hover:text-primary-600" href="#">Applied ML</a></li>
<li><a className="hover:text-primary-600" href="#">MLOps</a></li>
<li><a className="hover:text-primary-600" href="#">Data Scientists</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">For Talent</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-primary-600" href="#">Join Network</a></li>
<li><a className="hover:text-primary-600" href="#">Benefits</a></li>
<li><a className="hover:text-primary-600" href="#">Login</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Resources</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-primary-600" href="#">Blog</a></li>
<li><a className="hover:text-primary-600" href="#">Case Studies</a></li>
<li><a className="hover:text-primary-600" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Contact</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-primary-600" href="#">hello@hireai.genius</a></li>
<li><a className="hover:text-primary-600" href="#">Schedule Call</a></li>
<li className="flex gap-4 mt-2">
<i className="w-4 h-4 cursor-pointer hover:text-primary-600" data-lucide="linkedin"></i>
<i className="w-4 h-4 cursor-pointer hover:text-primary-600" data-lucide="twitter"></i>
<i className="w-4 h-4 cursor-pointer hover:text-primary-600" data-lucide="github"></i>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2025 Hire AI Genius, Inc.</p>
<div className="flex gap-6">
<a className="hover:text-slate-600" href="#">Privacy</a>
<a className="hover:text-slate-600" href="#">Terms</a>
<a className="hover:text-slate-600" href="#">SOC 2</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
