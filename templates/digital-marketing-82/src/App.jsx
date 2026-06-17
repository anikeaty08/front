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
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
mack: {
green: '#75c634', // Brand Green from logo
grey: '#7d838a',  // Brand Grey from logo
dark: '#050505',
}
},
animation: {
'blob': 'blob 7s infinite',
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
'spin-slow': 'spin 12s linear infinite',
'scrolling': 'scrolling 40s linear infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
scrolling: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
}
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Simple update for range slider visualization
        const slider = document.querySelector('input[type="range"]');
        const output = document.getElementById('budgetValue');
        slider.addEventListener('input', function() {
            output.innerText = Number(this.value).toLocaleString();
        });
    
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
      

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-mack-green/10 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob"></div>
<div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-slate-600/10 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob animation-delay-2000"></div>
<div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-mack-green/5 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-4000"></div>
</div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-mack-dark/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">

<div className="h-8 w-11 rounded flex overflow-hidden relative shadow-lg shadow-mack-green/10 transition-transform group-hover:scale-105">
<div className="w-1/2 h-full bg-[#7d838a]"></div>
<div className="w-1/2 h-full bg-[#75c634]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-white font-bold text-xl leading-none pt-0.5" style={{fontFamily: 'sans-serif'}}>M</span>
</div>
</div>
<div className="flex flex-col md:flex-row md:items-baseline gap-0 md:gap-0.5">
<span className="text-[#75c634] font-bold text-lg tracking-tight uppercase leading-none">Mack</span>
<span className="text-white font-medium text-lg tracking-tight uppercase leading-none">Media</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors duration-200" href="#services">Services</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors duration-200" href="#work">Work</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors duration-200" href="#agency">Agency</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors duration-200" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-white py-2.5 px-5 rounded-full transition-all duration-300" href="#">
                    Client Portal
                </a>
<a className="inline-flex items-center justify-center text-xs font-semibold bg-[#75c634] hover:bg-[#65b02a] text-black py-2.5 px-5 rounded-full shadow-[0_0_20px_rgba(117,198,52,0.3)] transition-all duration-300 hover:scale-105" href="#">
                    Start Project
                </a>
</div>
</div>
</nav>

<section className="relative z-10 pt-36 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-mack-green/20 bg-mack-green/5 text-mack-green text-xs font-semibold tracking-wide uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mack-green opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-mack-green"></span>
</span>
                    Accepting new clients for Q4
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.05]">
                    Growth driven <br/>
<span className="text-gradient-brand">by intelligence.</span>
</h1>
<p className="text-lg text-slate-400 max-w-lg leading-relaxed font-light">
                    We fuse data-driven strategy with world-class creative to scale ambitious brands. Stop competing and start dominating your market.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-semibold text-black transition-all duration-300 hover:bg-slate-200 hover:scale-105 focus:outline-none">
<span className="mr-2">Get Proposal</span>
<i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</button>
<button className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 font-semibold text-white transition-all hover:bg-white/10 focus:outline-none group">
<i className="w-4 h-4 mr-2 text-mack-green group-hover:text-white transition-colors" data-lucide="play-circle"></i>
                        View Showreel
                    </button>
</div>
<div className="pt-8 flex items-center gap-4 text-sm text-slate-500">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full border-2 border-[#050505] bg-slate-700 flex items-center justify-center text-[10px] text-white">JP</div>
<div className="w-8 h-8 rounded-full border-2 border-[#050505] bg-slate-600 flex items-center justify-center text-[10px] text-white">AS</div>
<div className="w-8 h-8 rounded-full border-2 border-[#050505] bg-slate-500 flex items-center justify-center text-[10px] text-white">MR</div>
</div>
<p>Trusted by <span className="text-white font-medium">500+</span> innovative companies</p>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center perspective-1000">

<div className="relative w-full max-w-md animate-float z-20">
<div className="glass-card rounded-2xl p-6 relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-mack-green/10 rounded-full filter blur-[40px]"></div>

<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-white font-medium">Traffic Overview</h3>
<p className="text-xs text-slate-400">Last 30 Days</p>
</div>
<i className="text-mack-green w-5 h-5" data-lucide="trending-up"></i>
</div>

<div className="flex items-end gap-2 h-32 mb-6">
<div className="flex-1 bg-white/5 rounded-t-sm h-[40%] hover:bg-mack-green/30 transition-colors duration-500"></div>
<div className="flex-1 bg-white/5 rounded-t-sm h-[60%] hover:bg-mack-green/30 transition-colors duration-500"></div>
<div className="flex-1 bg-white/5 rounded-t-sm h-[30%] hover:bg-mack-green/30 transition-colors duration-500"></div>
<div className="flex-1 bg-white/5 rounded-t-sm h-[70%] hover:bg-mack-green/30 transition-colors duration-500"></div>
<div className="flex-1 bg-white/5 rounded-t-sm h-[50%] hover:bg-mack-green/30 transition-colors duration-500"></div>
<div className="flex-1 bg-gradient-to-t from-mack-green to-lime-500 rounded-t-sm h-[85%] shadow-[0_0_15px_rgba(117,198,52,0.4)] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    +124%
                                </div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-white/5 rounded-xl p-3 border border-white/5 hover:border-mack-green/30 transition-colors">
<p className="text-xs text-slate-400 mb-1">New Leads</p>
<div className="flex items-center gap-2">
<span className="text-xl font-medium text-white">2,543</span>
<span className="text-[10px] text-mack-green flex items-center bg-mack-green/10 px-1.5 py-0.5 rounded font-medium">
                                        +12% <i className="w-3 h-3 ml-0.5" data-lucide="arrow-up-right"></i>
</span>
</div>
</div>
<div className="bg-white/5 rounded-xl p-3 border border-white/5 hover:border-mack-green/30 transition-colors">
<p className="text-xs text-slate-400 mb-1">Conversion</p>
<div className="flex items-center gap-2">
<span className="text-xl font-medium text-white">4.8%</span>
<span className="text-[10px] text-mack-green flex items-center bg-mack-green/10 px-1.5 py-0.5 rounded font-medium">
                                        +2.1% <i className="w-3 h-3 ml-0.5" data-lucide="arrow-up-right"></i>
</span>
</div>
</div>
</div>
</div>

<div className="absolute -right-8 top-12 glass-card rounded-xl p-4 animate-float-delayed z-30 max-w-[180px]">
<div className="flex items-start gap-3">
<div className="bg-mack-green/20 text-mack-green p-2 rounded-lg">
<i className="w-5 h-5" data-lucide="check-circle-2"></i>
</div>
<div>
<p className="text-xs text-white font-semibold">SEO Optimized</p>
<p className="text-[10px] text-slate-400 mt-1">Ranking #1 for target keywords</p>
</div>
</div>
</div>

<div className="absolute -left-4 bottom-[-20px] glass-card rounded-xl p-4 animate-float z-30 max-w-[200px] shadow-2xl">
<div className="flex items-center gap-3">
<div className="bg-blue-500/20 text-blue-400 p-2 rounded-lg">
<i className="w-5 h-5" data-lucide="bar-chart-3"></i>
</div>
<div>
<p className="text-xs text-white font-semibold">Ad Performance</p>
<div className="w-24 h-1.5 bg-slate-700 rounded-full mt-2 overflow-hidden">
<div className="h-full bg-mack-green w-[80%] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute z-0 w-[500px] h-[500px] border border-white/5 rounded-full animate-spin-slow"></div>
<div className="absolute z-0 w-[350px] h-[350px] border border-dashed border-white/10 rounded-full animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.02] py-10 overflow-hidden relative">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-mack-dark to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-mack-dark to-transparent z-10"></div>
<div className="flex w-[200%] animate-scrolling">

<div className="flex items-center justify-around w-1/2 px-10 gap-16">
<span className="text-lg font-bold tracking-tighter text-slate-600 uppercase hover:text-white transition-colors cursor-default">Google</span>
<span className="text-lg font-bold tracking-tighter text-slate-600 uppercase hover:text-white transition-colors cursor-default">Meta</span>
<span className="text-lg font-bold tracking-tighter text-slate-600 uppercase hover:text-white transition-colors cursor-default">HubSpot</span>
<span className="text-lg font-bold tracking-tighter text-slate-600 uppercase hover:text-white transition-colors cursor-default">Salesforce</span>
<span className="text-lg font-bold tracking-tighter text-slate-600 uppercase hover:text-white transition-colors cursor-default">Shopify</span>
<span className="text-lg font-bold tracking-tighter text-slate-600 uppercase hover:text-white transition-colors cursor-default">WordPress</span>
<span className="text-lg font-bold tracking-tighter text-slate-600 uppercase hover:text-white transition-colors cursor-default">Semrush</span>
</div>

<div className="flex items-center justify-around w-1/2 px-10 gap-16">
<span className="text-lg font-bold tracking-tighter text-slate-600 uppercase hover:text-white transition-colors cursor-default">Google</span>
<span className="text-lg font-bold tracking-tighter text-slate-600 uppercase hover:text-white transition-colors cursor-default">Meta</span>
<span className="text-lg font-bold tracking-tighter text-slate-600 uppercase hover:text-white transition-colors cursor-default">HubSpot</span>
<span className="text-lg font-bold tracking-tighter text-slate-600 uppercase hover:text-white transition-colors cursor-default">Salesforce</span>
<span className="text-lg font-bold tracking-tighter text-slate-600 uppercase hover:text-white transition-colors cursor-default">Shopify</span>
<span className="text-lg font-bold tracking-tighter text-slate-600 uppercase hover:text-white transition-colors cursor-default">WordPress</span>
<span className="text-lg font-bold tracking-tighter text-slate-600 uppercase hover:text-white transition-colors cursor-default">Semrush</span>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">Mastery across <br/>every channel.</h2>
<p className="text-slate-400 max-w-md font-light">Our integrated approach ensures your brand is consistent, visible, and performing at its peak.</p>
</div>
<div className="flex items-center gap-2 group cursor-pointer">
<span className="text-sm text-slate-400 group-hover:text-white transition-colors">View All Services</span>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-mack-green/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-mack-green/10 flex items-center justify-center text-mack-green mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="search"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Search Engine Optimization</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">Dominate search results with technical audits, content strategy, and authoritative link building.</p>
<a className="inline-flex items-center text-xs font-semibold text-white opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" href="#">
                        Learn more <i className="w-3 h-3 ml-1" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="target"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Paid Advertising (PPC)</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">Maximize ROI with precision-targeted campaigns across Google, Meta, LinkedIn and more.</p>
<a className="inline-flex items-center text-xs font-semibold text-white opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" href="#">
                        Learn more <i className="w-3 h-3 ml-1" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="monitor"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Web Design &amp; Dev</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">Build a high-performance digital headquarters that converts visitors into loyal customers.</p>
<a className="inline-flex items-center text-xs font-semibold text-white opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" href="#">
                        Learn more <i className="w-3 h-3 ml-1" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="video"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Video Production</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">Compelling visual storytelling including drone footage, commercials, and social snippets.</p>
<a className="inline-flex items-center text-xs font-semibold text-white opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" href="#">
                        Learn more <i className="w-3 h-3 ml-1" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="message-square"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Social Media</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">Engage your audience with curated content, community management, and growth tactics.</p>
<a className="inline-flex items-center text-xs font-semibold text-white opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" href="#">
                        Learn more <i className="w-3 h-3 ml-1" data-lucide="arrow-right"></i>
</a>
</div>

<div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#75c634] to-[#4a9117] flex flex-col justify-center items-start text-white overflow-hidden shadow-lg shadow-mack-green/10">
<div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<h3 className="text-xl font-semibold mb-2 relative z-10">Not sure where to start?</h3>
<p className="text-green-50 text-sm mb-6 relative z-10 font-medium">Get a free digital audit of your current presence.</p>
<button className="relative z-10 px-4 py-2 bg-white text-mack-green text-xs font-bold rounded-lg hover:bg-green-50 transition-colors">
                        Book Audit
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808] border-y border-white/5 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-mack-green/5 filter blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Estimate your impact</h2>
<p className="text-slate-400 font-light">Configure your ideal monthly investment and see what's possible.</p>
</div>
<div className="glass-card rounded-3xl p-8 md:p-12">

<div className="mb-12">
<div className="flex justify-between items-end mb-6">
<label className="text-sm font-medium text-slate-300">Monthly Marketing Budget</label>
<span className="text-3xl font-medium text-white tracking-tight">$<span id="budgetValue">5,000</span><span className="text-lg text-slate-500 font-normal">/mo</span></span>
</div>
<input className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer" max="50000" min="1000" step="500" type="range" value="5000"/>
<div className="flex justify-between mt-2 text-xs text-slate-500 font-medium">
<span>$1k</span>
<span>$50k+</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
<div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5 hover:border-mack-green/20 transition-colors">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-orange-500/20 text-orange-400">
<i className="w-5 h-5" data-lucide="rocket"></i>
</div>
<div>
<h4 className="text-sm font-medium text-white">Aggressive Growth</h4>
<p className="text-[10px] text-slate-400">Prioritize speed &amp; volume</p>
</div>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-300 left-0" id="toggle1" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-700 cursor-pointer" htmlFor="toggle1"></label>
</input></div>
</div>
<div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5 hover:border-mack-green/20 transition-colors">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="text-sm font-medium text-white">Brand Safety</h4>
<p className="text-[10px] text-slate-400">Focus on reputation</p>
</div>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-300 left-0" id="toggle2" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-mack-green cursor-pointer" htmlFor="toggle2"></label>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
<div className="text-center">
<p className="text-xs text-slate-400 mb-1">Est. Reach</p>
<p className="text-xl md:text-2xl font-semibold text-white">45k+</p>
</div>
<div className="text-center border-l border-white/10">
<p className="text-xs text-slate-400 mb-1">Est. Leads</p>
<p className="text-xl md:text-2xl font-semibold text-white">120-150</p>
</div>
<div className="text-center border-l border-white/10">
<p className="text-xs text-slate-400 mb-1">Timeline</p>
<p className="text-xl md:text-2xl font-semibold text-white">3 Mo</p>
</div>
</div>
</div>
<div className="mt-12 text-center">
<button className="inline-flex items-center justify-center text-sm font-semibold bg-white text-black py-3 px-8 rounded-full shadow-lg shadow-white/10 transition-transform hover:scale-105">
                    Start Your Project
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020202] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-6 opacity-90 hover:opacity-100 transition-opacity" href="#">

<div className="h-6 w-8 rounded flex overflow-hidden relative">
<div className="w-1/2 h-full bg-[#7d838a]"></div>
<div className="w-1/2 h-full bg-[#75c634]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-white font-bold text-sm leading-none pt-0.5" style={{fontFamily: 'sans-serif'}}>M</span>
</div>
</div>
<span className="text-white font-semibold tracking-tight text-lg">MackMedia</span>
</a>
<p className="text-xs text-slate-500 mb-6 font-light">
                        Designed in Connecticut.<br/>
                        Scaling brands globally.
                    </p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
<div>
<h4 className="text-white font-semibold text-sm mb-4">Services</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-mack-green transition-colors" href="#">SEO Optimization</a></li>
<li><a className="hover:text-mack-green transition-colors" href="#">PPC Management</a></li>
<li><a className="hover:text-mack-green transition-colors" href="#">Web Design</a></li>
<li><a className="hover:text-mack-green transition-colors" href="#">Social Media</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold text-sm mb-4">Company</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-mack-green transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-mack-green transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-mack-green transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-mack-green transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-mack-green transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-mack-green transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8">
<p className="text-[10px] text-slate-600">© 2024 Mack Media Group. All rights reserved.</p>
<div className="flex items-center gap-2 mt-4 md:mt-0">
<div className="w-2 h-2 rounded-full bg-mack-green animate-pulse"></div>
<p className="text-[10px] text-slate-400">All systems operational</p>
</div>
</div>
</div>
</footer>


    </>
  );
}
