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
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
brand: {
accent: '#3b82f6', // Linear Blue
success: '#10b981', // Savings Green
},
neutral: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a',
}
},
animation: {
'marquee': 'marquee 60s linear infinite',
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        function handleSpotlight(e) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
            e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
        }
    
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
      

<header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-neutral-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-neutral-900 rounded flex items-center justify-center text-white">
<iconify-icon icon="lucide:layers" width="14"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-neutral-900">Stackbooster</span>
</a>
<nav className="hidden md:flex gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-neutral-900 transition-colors" href="#results">Results</a>
<a className="hover:text-neutral-900 transition-colors" href="#pricing">Pricing</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-neutral-600 hover:text-neutral-900" href="#">Sign In</a>
<a className="bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium px-4 py-2 rounded-full transition-all flex items-center gap-2" href="#calculator">
                    Calculate Savings
                    <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
</div>
</header>

<div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>
<main className="relative z-10 pt-24 md:pt-32">

<section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 md:mb-32">
<div className="lg:col-span-7 space-y-8 animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-white shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-neutral-600 tracking-tight">$600,000+ saved for customers this year</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-neutral-950 leading-[1.05]">
                    How much money is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">leaking</span> from your AWS bill?
                </h1>
<p className="text-lg text-neutral-500 max-w-xl font-normal leading-relaxed">
                    In minutes, identify exactly where you are overspending on EKS and EC2. Autoscale efficiently without sacrificing performance.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="flex items-center justify-center gap-2 px-8 py-3.5 bg-neutral-950 text-white rounded-lg font-medium hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-950/20 group" href="#calculator">
                        Calculate my savings
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:calculator" width="16"></iconify-icon>
</a>
<a className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white border border-neutral-200 text-neutral-700 rounded-lg font-medium hover:bg-neutral-50 transition-all" href="#">
                        Book expert call
                        <iconify-icon icon="lucide:calendar" width="16"></iconify-icon>
</a>
</div>
<div className="flex items-center gap-4 text-xs text-neutral-400 font-medium">
<div className="flex items-center gap-1"><iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon> SOC2 Compliant</div>
<div className="flex items-center gap-1"><iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon> Non-intrusive Audit</div>
<div className="flex items-center gap-1"><iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon> AWS Partner</div>
</div>
</div>

<div className="lg:col-span-5 relative h-[500px] flex items-center justify-center lg:justify-end">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-full blur-3xl opacity-50"></div>
<div className="relative w-full max-w-sm">

<div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-xl mb-4 transform translate-x-4">
<div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center border border-red-100 shrink-0">
<iconify-icon icon="lucide:alert-circle" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold text-neutral-900">EKS Cluster Over-provisioned</div>
<div className="text-xs text-neutral-500">Waste detected: <span className="text-red-600 font-mono font-medium">$1,240/mo</span></div>
</div>
</div>

<div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-xl mb-4 z-20 relative bg-white" style={{animationDelay: '1.5s'}}>
<div className="w-10 h-10 rounded-lg bg-yellow-50 text-yellow-600 flex items-center justify-center border border-yellow-100 shrink-0">
<iconify-icon icon="lucide:hard-drive" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold text-neutral-900">Unattached EBS Volumes</div>
<div className="text-xs text-neutral-500">Idle resources: <span className="text-yellow-600 font-mono font-medium">24 volumes</span></div>
</div>
</div>

<div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-xl transform -translate-x-6 z-30 relative" style={{animationDelay: '2.5s'}}>
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shrink-0">
<iconify-icon icon="lucide:trending-down" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-xs font-semibold text-neutral-900">Optimization Applied</div>
<div className="text-xs text-neutral-500">Projected savings: <span className="text-emerald-600 font-mono font-medium">-28%</span></div>
</div>
<div className="h-6 px-2 bg-emerald-100 text-emerald-700 rounded text-[10px] font-bold flex items-center">DONE</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 mb-24 relative z-20" id="calculator">
<div className="bg-white rounded-2xl shadow-2xl border border-neutral-100 p-8 md:p-12 overflow-hidden relative">
<div className="absolute top-0 left-0 w-full h-1 bg-neutral-100">
<div className="h-full bg-blue-600 w-1/3"></div>
</div>
<div className="text-center mb-10">
<span className="text-blue-600 font-semibold text-xs tracking-wider uppercase mb-2 block">60-Second Audit</span>
<h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">Estimate your wasted cloud spend</h2>
</div>
<div className="space-y-8">

<div className="space-y-4">
<label className="block text-sm font-medium text-neutral-700">What is your monthly AWS spend range?</label>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<button className="px-4 py-3 rounded-lg border border-neutral-200 text-sm font-medium hover:border-blue-500 hover:bg-blue-50 text-neutral-600 hover:text-blue-700 transition-all focus:ring-2 ring-blue-500 ring-offset-1">&lt; $10k</button>
<button className="px-4 py-3 rounded-lg border border-blue-500 bg-blue-50 text-blue-700 text-sm font-medium ring-1 ring-blue-500">$10k - $50k</button>
<button className="px-4 py-3 rounded-lg border border-neutral-200 text-sm font-medium hover:border-blue-500 hover:bg-blue-50 text-neutral-600 hover:text-blue-700 transition-all">$50k - $200k</button>
<button className="px-4 py-3 rounded-lg border border-neutral-200 text-sm font-medium hover:border-blue-500 hover:bg-blue-50 text-neutral-600 hover:text-blue-700 transition-all">$200k+</button>
</div>
</div>

<div className="space-y-4">
<div className="flex justify-between">
<label className="block text-sm font-medium text-neutral-700">Percentage of On-Demand Instances?</label>
<span className="text-sm font-mono text-blue-600">80%</span>
</div>
<input className="w-full" max="100" min="0" type="range" value="80"/>
<div className="flex justify-between text-xs text-neutral-400">
<span>Mostly Spot</span>
<span>Mostly On-Demand</span>
</div>
</div>
<div className="pt-6 text-center">
<button className="w-full md:w-auto px-10 py-4 bg-neutral-900 text-white rounded-lg font-medium hover:bg-neutral-800 transition-all shadow-lg text-sm flex items-center justify-center gap-2 mx-auto">
                            Show my potential savings
                            <iconify-icon icon="lucide:arrow-right"></iconify-icon>
</button>
<p className="text-xs text-neutral-400 mt-4">No credit card required. Instant estimation.</p>
</div>
</div>
</div>

<div className="mt-8 mx-auto max-w-2xl bg-neutral-50 rounded-xl border border-neutral-200 border-dashed p-6 flex flex-col md:flex-row items-center gap-6 opacity-60 hover:opacity-100 transition-opacity">
<div className="flex-1 text-center md:text-left">
<div className="text-sm font-medium text-neutral-500 mb-1">Potential Monthly Savings</div>
<div className="text-4xl font-semibold text-neutral-900 tracking-tighter">~$4,200<span className="text-lg text-neutral-400 font-normal">/mo</span></div>
</div>
<div className="flex-1 text-sm text-neutral-600">
<ul className="space-y-2">
<li className="flex items-center gap-2"><iconify-icon className="text-blue-600" icon="lucide:check-circle-2"></iconify-icon> 3 Cost Leaks Detected</li>
<li className="flex items-center gap-2"><iconify-icon className="text-amber-500" icon="lucide:zap"></iconify-icon> Spot Instance Opportunity</li>
</ul>
</div>
<button className="text-sm font-semibold text-blue-600 hover:text-blue-800 underline underline-offset-4">
                    Unlock Report
                </button>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold text-neutral-900 tracking-tight mb-4">Why your cloud bill keeps growing</h2>
<p className="text-neutral-500 max-w-md">Common infrastructure mistakes that bleed budget silently.</p>
</div>
<a className="text-sm font-medium text-neutral-900 border-b border-neutral-300 hover:border-neutral-900 pb-0.5 transition-colors" href="#">Check if this applies to me</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-1 border border-neutral-200 rounded-2xl p-8 bg-neutral-50/50 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-red-400"></div>
<div className="mb-6 flex items-center justify-between">
<span className="text-xs font-bold text-red-600 uppercase tracking-wider bg-red-50 px-2 py-1 rounded">The Manual Way</span>
<iconify-icon className="text-red-400 text-xl" icon="lucide:x-circle"></iconify-icon>
</div>
<ul className="space-y-4">
<li className="flex gap-3 text-sm text-neutral-600">
<iconify-icon className="text-red-400 mt-0.5 shrink-0" icon="lucide:x"></iconify-icon>
                                Overprovisioned "just in case" resources
                            </li>
<li className="flex gap-3 text-sm text-neutral-600">
<iconify-icon className="text-red-400 mt-0.5 shrink-0" icon="lucide:x"></iconify-icon>
                                Idle staging environments running 24/7
                            </li>
<li className="flex gap-3 text-sm text-neutral-600">
<iconify-icon className="text-red-400 mt-0.5 shrink-0" icon="lucide:x"></iconify-icon>
                                Zero Spot instance strategy due to fear
                            </li>
</ul>
<div className="mt-8 pt-6 border-t border-neutral-200">
<div className="text-xs text-neutral-400 uppercase tracking-wide">Result</div>
<div className="text-2xl font-semibold text-neutral-900 mt-1">Unpredictable Bills</div>
</div>
</div>

<div className="lg:col-span-2 border border-blue-100 bg-blue-50/30 rounded-2xl p-8 relative overflow-hidden spotlight-card" onmousemove="handleSpotlight(event)">
<div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
<div className="flex flex-col md:flex-row gap-8 h-full">
<div className="flex-1">
<div className="mb-6 flex items-center justify-between">
<span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-100 px-2 py-1 rounded">With Stackbooster</span>
<iconify-icon className="text-blue-500 text-xl" icon="lucide:check-circle-2"></iconify-icon>
</div>
<ul className="space-y-4">
<li className="flex gap-3 text-sm text-neutral-700">
<iconify-icon className="text-blue-500 mt-0.5 shrink-0" icon="lucide:check"></iconify-icon>
<strong>Auto-scaling</strong> that actually respects metrics
                                    </li>
<li className="flex gap-3 text-sm text-neutral-700">
<iconify-icon className="text-blue-500 mt-0.5 shrink-0" icon="lucide:check"></iconify-icon>
<strong>Spot Instances</strong> handled safely with fallback
                                    </li>
<li className="flex gap-3 text-sm text-neutral-700">
<iconify-icon className="text-blue-500 mt-0.5 shrink-0" icon="lucide:check"></iconify-icon>
<strong>Continuous optimization</strong> without engineering toil
                                    </li>
</ul>
<div className="mt-8 pt-6 border-t border-blue-200/50">
<button className="flex items-center gap-2 text-sm font-semibold text-blue-700 hover:gap-3 transition-all">
                                        See this on my infrastructure <iconify-icon icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>

<div className="w-full md:w-1/2 bg-white rounded-xl shadow-sm border border-blue-100 p-4 flex flex-col justify-center">
<div className="text-xs text-neutral-400 mb-4 text-center">Cost Trend</div>
<div className="flex items-end justify-between h-32 gap-2 px-2">
<div className="w-full bg-neutral-200 rounded-t h-[80%] relative group cursor-help">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">Old</div>
</div>
<div className="w-full bg-neutral-200 rounded-t h-[85%]"></div>
<div className="w-full bg-neutral-200 rounded-t h-[90%]"></div>

<div className="w-full bg-blue-500 rounded-t h-[60%] relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-blue-600 text-[10px] font-bold whitespace-nowrap animate-bounce">-28%</div>
</div>
<div className="w-full bg-blue-500 rounded-t h-[55%]"></div>
<div className="w-full bg-blue-500 rounded-t h-[58%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-neutral-100 bg-neutral-50/50">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold text-neutral-900 tracking-tight mb-12">What you get in the first 14 days</h2>
<div className="relative">

<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 md:-translate-x-1/2"></div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-12 group">
<div className="md:w-5/12 text-left md:text-right pl-12 md:pl-0 md:pr-12">
<h3 className="text-lg font-semibold text-neutral-900">Day 1-3: Non-intrusive Audit</h3>
<p className="text-sm text-neutral-500 mt-2">We connect via read-only IAM role. We map your cluster usage and identify "zombie" resources.</p>
</div>
<div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-white border-2 border-neutral-900 md:-translate-x-1/2 flex items-center justify-center z-10 font-bold text-xs">1</div>
<div className="md:w-5/12 pl-12 md:pl-12 text-left">
<div className="text-xs font-mono text-blue-600 bg-blue-50 inline-block px-2 py-1 rounded">Zero Downtime</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-12 group">
<div className="md:w-5/12 text-left md:text-right pl-12 md:pl-0 md:pr-12 order-1 md:order-1">
<div className="text-xs font-mono text-emerald-600 bg-emerald-50 inline-block px-2 py-1 rounded">Quick Wins</div>
</div>
<div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-white border-2 border-neutral-900 md:-translate-x-1/2 flex items-center justify-center z-10 font-bold text-xs">2</div>
<div className="md:w-5/12 pl-12 md:pl-12 text-left order-2 md:order-2">
<h3 className="text-lg font-semibold text-neutral-900">Day 4-7: Automation Setup</h3>
<p className="text-sm text-neutral-500 mt-2">Implementation of Spot strategies and rightsizing policies. All changes approved by you.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between group">
<div className="md:w-5/12 text-left md:text-right pl-12 md:pl-0 md:pr-12">
<h3 className="text-lg font-semibold text-neutral-900">Day 14: Measurable Savings</h3>
<p className="text-sm text-neutral-500 mt-2">Review your new AWS forecast. Typically reducing bills by 15-30% within the first cycle.</p>
</div>
<div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-neutral-900 border-2 border-neutral-900 md:-translate-x-1/2 flex items-center justify-center z-10 font-bold text-xs text-white">3</div>
<div className="md:w-5/12 pl-12 md:pl-12 text-left">
<button className="text-xs font-semibold underline decoration-neutral-300 underline-offset-4 hover:text-blue-600">See sample report</button>
</div>
</div>
</div>
<div className="mt-16">
<a className="inline-block px-8 py-3 bg-neutral-900 text-white rounded-full font-medium text-sm hover:scale-105 transition-transform" href="#calculator">Get my 14-day plan</a>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div className="max-w-xl">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-6">Built by engineers,<br/>for engineers.</h2>
<p className="text-neutral-400 leading-relaxed">We don't sell "magic". We sell infrastructure automation that works with your existing EKS/K8s setup.</p>
</div>
<div className="flex gap-4 mt-8 md:mt-0">
<button className="px-6 py-2.5 rounded-lg border border-neutral-700 text-sm font-medium hover:bg-neutral-800 transition-colors">See Examples</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel-dark p-8 rounded-2xl flex flex-col justify-between hover:bg-neutral-800/50 transition-colors">
<div>
<div className="flex items-center gap-2 mb-6 text-neutral-400 text-sm font-mono">
<iconify-icon icon="lucide:server"></iconify-icon> Fintech SaaS
                            </div>
<div className="text-4xl font-bold text-white mb-2 tracking-tight">$12k/mo</div>
<div className="text-sm text-neutral-400 mb-6">Saved on EC2 Spot Instances</div>
</div>
<p className="text-sm text-neutral-500 italic">"The spot instance automation is flawless. We haven't had a single interruption."</p>
</div>

<div className="glass-panel-dark p-8 rounded-2xl flex flex-col justify-between hover:bg-neutral-800/50 transition-colors">
<div>
<div className="flex items-center gap-2 mb-6 text-neutral-400 text-sm font-mono">
<iconify-icon icon="lucide:shopping-cart"></iconify-icon> E-commerce
                            </div>
<div className="text-4xl font-bold text-white mb-2 tracking-tight">28%</div>
<div className="text-sm text-neutral-400 mb-6">Total AWS Bill Reduction</div>
</div>
<p className="text-sm text-neutral-500 italic">"Setup took 45 minutes. The ROI was visible in the first billing cycle."</p>
</div>

<div className="glass-panel-dark p-8 rounded-2xl border-blue-500/30 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-20">
<iconify-icon icon="lucide:lock" width="64"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-4">Security First</h3>
<ul className="space-y-3 text-sm text-neutral-400">
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="lucide:check"></iconify-icon> Read-only IAM audit</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="lucide:check"></iconify-icon> No data exfiltration</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="lucide:check"></iconify-icon> Instant Rollback</li>
</ul>
<a className="mt-8 inline-block text-xs font-mono text-blue-400 hover:text-blue-300" href="#">View Security Docs -&gt;</a>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-5xl mx-auto px-6 text-center" id="pricing">
<h2 className="text-3xl font-semibold text-neutral-900 mb-8 tracking-tight">We only win if you save.</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div className="bg-neutral-50 p-10 rounded-3xl border border-neutral-200 text-left">
<h3 className="text-xl font-medium text-neutral-900 mb-2">Savings Share</h3>
<div className="text-4xl font-bold text-neutral-900 mb-4 tracking-tighter">20% <span className="text-lg font-normal text-neutral-400">of savings</span></div>
<p className="text-sm text-neutral-500 mb-8">We take a small cut of the money we put back in your pocket. No savings? You pay $0.</p>
<button className="w-full py-3 rounded-xl border border-neutral-300 font-medium text-sm hover:border-neutral-900 hover:bg-white transition-all">Get estimate</button>
</div>
<div className="text-left pl-4">
<ul className="space-y-6">
<li className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0"><iconify-icon icon="lucide:ban"></iconify-icon></div>
<div>
<h4 className="font-medium text-neutral-900 text-sm">No Upfront Cost</h4>
<p className="text-xs text-neutral-500">Start the audit and implementation for free.</p>
</div>
</li>
<li className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0"><iconify-icon icon="lucide:unlock"></iconify-icon></div>
<div>
<h4 className="font-medium text-neutral-900 text-sm">No Lock-in</h4>
<p className="text-xs text-neutral-500">Cancel anytime. Keep the infrastructure changes.</p>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 mb-24">
<h2 className="text-2xl font-semibold mb-8">Technical FAQ</h2>
<div className="space-y-4">
<details className="group bg-white border border-neutral-200 rounded-xl overflow-hidden">
<summary className="flex justify-between items-center p-5 cursor-pointer list-none font-medium text-neutral-800 text-sm hover:bg-neutral-50">
<span>We already have FinOps practices. Why this?</span>
<span className="transition group-open:rotate-180"><iconify-icon icon="lucide:chevron-down"></iconify-icon></span>
</summary>
<div className="px-5 pb-5 text-sm text-neutral-500 leading-relaxed">
                        FinOps gives you dashboards. Stackbooster gives you action. We automate the minute-by-minute scaling decisions that humans (or basic scripts) miss.
                    </div>
</details>
<details className="group bg-white border border-neutral-200 rounded-xl overflow-hidden">
<summary className="flex justify-between items-center p-5 cursor-pointer list-none font-medium text-neutral-800 text-sm hover:bg-neutral-50">
<span>Is this safe for production workloads?</span>
<span className="transition group-open:rotate-180"><iconify-icon icon="lucide:chevron-down"></iconify-icon></span>
</summary>
<div className="px-5 pb-5 text-sm text-neutral-500 leading-relaxed">
                        Yes. We use graceful draining for pods and verify health checks before terminating any instance. We have processed millions of instance hours with 99.99% uptime.
                    </div>
</details>
<details className="group bg-white border border-neutral-200 rounded-xl overflow-hidden">
<summary className="flex justify-between items-center p-5 cursor-pointer list-none font-medium text-neutral-800 text-sm hover:bg-neutral-50">
<span>How much DevOps time is required?</span>
<span className="transition group-open:rotate-180"><iconify-icon icon="lucide:chevron-down"></iconify-icon></span>
</summary>
<div className="px-5 pb-5 text-sm text-neutral-500 leading-relaxed">
                        Less than 1 hour. We provide a Terraform module or Helm chart for the initial permission setup. After that, it's hands-off.
                    </div>
</details>
</div>
<div className="mt-8 text-center">
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 flex items-center justify-center gap-2" href="#">
                    Still skeptical? Ask an engineer directly
                    <iconify-icon icon="lucide:message-circle"></iconify-icon>
</a>
</div>
</section>

<section className="px-6 pb-20">
<div className="max-w-5xl mx-auto bg-neutral-950 rounded-[32px] text-center p-12 md:p-20 relative overflow-hidden group">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full group-hover:bg-blue-600/30 transition-all duration-700"></div>
<div className="relative z-10 space-y-8">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Stop wasting cloud budget today.</h2>
<p className="text-neutral-400 text-lg max-w-xl mx-auto">Join the engineering teams saving an average of 28% on their AWS monthly bill.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<div className="flex flex-col items-center">
<a className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-blue-900/50" href="#calculator">
                                Calculate Savings
                            </a>
<span className="text-[10px] text-neutral-500 mt-2 uppercase tracking-wide">Take 60 seconds</span>
</div>
<span className="text-neutral-600 font-medium text-sm">or</span>
<div className="flex flex-col items-center">
<a className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-full font-medium transition-all backdrop-blur-sm" href="#">
                                Book Expert Call
                            </a>
<span className="text-[10px] text-neutral-500 mt-2 uppercase tracking-wide">No sales pitch</span>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-200 bg-neutral-50">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-neutral-900 rounded flex items-center justify-center text-white text-[10px]">
<iconify-icon icon="lucide:layers"></iconify-icon>
</div>
<span className="text-sm font-semibold text-neutral-900">Stackbooster</span>
</div>
<div className="text-xs text-neutral-500">
                    © 2024 Stackbooster Inc. San Francisco, CA.
                </div>
<div className="flex gap-6">
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#"><iconify-icon icon="lucide:twitter"></iconify-icon></a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#"><iconify-icon icon="lucide:github"></iconify-icon></a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#"><iconify-icon icon="lucide:linkedin"></iconify-icon></a>
</div>
</div>
</footer>
</main>


    </>
  );
}
