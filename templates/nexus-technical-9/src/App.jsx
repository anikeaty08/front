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
      

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#08090c]/80 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-violet-500/25">
<span className="iconify w-5 h-5 text-white" data-icon="lucide:hexagon" data-width="20"></span>
</div>
<span className="text-lg font-semibold text-white tracking-tight">Nexus</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Products</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">How It Works</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">For Recruiters</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">About</a>
</div>

<div className="flex items-center gap-3">
<button className="hidden sm:flex text-sm font-medium text-zinc-300 hover:text-white transition-colors px-4 py-2">
                        Sign In
                    </button>
<button className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 rounded-full px-5 py-2.5 shadow-lg shadow-violet-500/25 transition-all hover:shadow-violet-500/40 hover:-translate-y-0.5">
                        Start Search
                        <span className="iconify w-4 h-4" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>

<button className="md:hidden text-zinc-400 hover:text-white">
<span className="iconify w-6 h-6" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<svg className="absolute w-full h-full opacity-30" preserveaspectratio="xMidYMid slice" viewbox="0 0 1200 800">
<defs>
<radialgradient cx="50%" cy="50%" id="nodeGlow" r="50%">
<stop offset="0%" style={{stopColor: '#8b5cf6', stopOpacity: '0.8'}}></stop>
<stop offset="100%" style={{stopColor: '#8b5cf6', stopOpacity: '0'}}></stop>
</radialgradient>
</defs>

<g className="graph-line animate-dash" fill="none" opacity="0.3" stroke="url(#lineGrad)" strokeWidth="1">
<line x1="200" x2="450" y1="150" y2="280"></line>
<line x1="450" x2="700" y1="280" y2="200"></line>
<line x1="700" x2="950" y1="200" y2="350"></line>
<line x1="450" x2="600" y1="280" y2="450"></line>
<line x1="600" x2="850" y1="450" y2="500"></line>
<line x1="300" x2="450" y1="400" y2="280"></line>
<line x1="150" x2="300" y1="300" y2="400"></line>
<line x1="950" x2="1050" y1="350" y2="250"></line>
<line x1="850" x2="1000" y1="500" y2="550"></line>
</g>

<circle className="animate-pulse-glow" cx="200" cy="150" fill="#8b5cf6" r="6"></circle>
<circle className="animate-pulse-glow" cx="450" cy="280" fill="#d946ef" r="8" style={{animationDelay: '0.5s'}}></circle>
<circle className="animate-pulse-glow" cx="700" cy="200" fill="#8b5cf6" r="5" style={{animationDelay: '1s'}}></circle>
<circle className="animate-pulse-glow" cx="950" cy="350" fill="#c084fc" r="7" style={{animationDelay: '1.5s'}}></circle>
<circle className="animate-pulse-glow" cx="600" cy="450" fill="#a855f7" r="6" style={{animationDelay: '0.3s'}}></circle>
<circle className="animate-pulse-glow" cx="850" cy="500" fill="#d946ef" r="5" style={{animationDelay: '0.8s'}}></circle>
<circle className="animate-pulse-glow" cx="300" cy="400" fill="#8b5cf6" r="4" style={{animationDelay: '1.2s'}}></circle>
<circle className="animate-pulse-glow" cx="150" cy="300" fill="#c084fc" r="5"></circle>
<circle className="animate-pulse-glow" cx="1050" cy="250" fill="#a855f7" r="4" style={{animationDelay: '0.7s'}}></circle>
<circle className="animate-pulse-glow" cx="1000" cy="550" fill="#8b5cf6" r="6" style={{animationDelay: '1.1s'}}></circle>
</svg>

<div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-600/15 rounded-full blur-[120px]"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-4xl mx-auto text-center">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium tracking-wide mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"></span>
                    INTELLIGENCE PLATFORM FOR TECHNICAL RECRUITING
                </div>

<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight font-serif mb-8 leading-[1.1]">
                    The Intelligent Graph for
                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 italic">Hard-to-Fill Technical Roles</span>
</h1>

<p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
                    We connect company DNA, market events, and technical footprints to reveal the elite talent hidden in plain sight.
                </p>

<div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
<button className="group inline-flex items-center justify-center gap-2 text-base font-medium text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 rounded-full px-8 py-4 shadow-xl shadow-violet-500/25 transition-all hover:shadow-violet-500/40 hover:-translate-y-0.5">
                        Start Your Search
                        <span className="iconify w-5 h-5 transition-transform group-hover:translate-x-0.5" data-icon="lucide:arrow-right" data-width="20"></span>
</button>
<button className="inline-flex items-center justify-center gap-2 text-base font-medium text-zinc-300 hover:text-white border border-zinc-700 hover:border-zinc-600 bg-zinc-900/50 rounded-full px-8 py-4 transition-all hover:bg-zinc-800/50">
<span className="iconify w-5 h-5" data-icon="lucide:play-circle" data-width="20"></span>
                        Watch Demo
                    </button>
</div>

<p className="text-xs text-zinc-600 uppercase tracking-widest mb-6">Trusted by leading recruiting teams</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-50 grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-500">
<div className="text-zinc-400 text-sm font-medium">Premier Talent</div>
<div className="text-zinc-400 text-sm font-medium">Quantix Search</div>
<div className="text-zinc-400 text-sm font-medium">TechHire Partners</div>
<div className="text-zinc-400 text-sm font-medium">Velocity Recruiting</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 lg:py-32 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-xl">
<h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight font-serif mb-6">
                        From Silos to
                        <span className="italic text-violet-400">Signals</span>
</h2>
<p className="text-lg text-zinc-400 font-light leading-relaxed mb-8">
                        The professional world is moving faster than ever. Opportunities are hidden in the complex, disconnected relationships between companies, markets, and the people who drive them.
                    </p>
<p className="text-lg text-zinc-400 font-light leading-relaxed mb-10">
                        We are building the graph to see the full picture, unlock this potential, and understand what's next.
                    </p>

<div className="grid grid-cols-3 gap-6">
<div className="text-center">
<div className="text-3xl font-semibold text-white mb-1">2M+</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider">Technical Profiles</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-white mb-1">50K+</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider">Companies Mapped</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-white mb-1">3 Days</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider">Avg. Shortlist</div>
</div>
</div>
</div>

<div className="relative">
<div className="aspect-square max-w-lg mx-auto relative">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-2xl shadow-violet-500/30 animate-float">
<span className="iconify w-12 h-12 text-white" data-icon="lucide:brain" data-width="48"></span>
</div>
</div>

<div className="absolute top-8 left-1/4 animate-float" style={{animationDelay: '0.5s'}}>
<div className="w-16 h-16 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-xl">
<span className="iconify w-8 h-8 text-violet-400" data-icon="lucide:git-branch" data-width="32"></span>
</div>
<div className="text-[10px] text-zinc-500 text-center mt-2">Code Commits</div>
</div>
<div className="absolute top-16 right-8 animate-float" style={{animationDelay: '1s'}}>
<div className="w-16 h-16 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-xl">
<span className="iconify w-8 h-8 text-fuchsia-400" data-icon="lucide:file-text" data-width="32"></span>
</div>
<div className="text-[10px] text-zinc-500 text-center mt-2">Research Papers</div>
</div>
<div className="absolute bottom-16 left-8 animate-float" style={{animationDelay: '1.5s'}}>
<div className="w-16 h-16 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-xl">
<span className="iconify w-8 h-8 text-purple-400" data-icon="lucide:building-2" data-width="32"></span>
</div>
<div className="text-[10px] text-zinc-500 text-center mt-2">Company Events</div>
</div>
<div className="absolute bottom-8 right-1/4 animate-float" style={{animationDelay: '2s'}}>
<div className="w-16 h-16 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-xl">
<span className="iconify w-8 h-8 text-pink-400" data-icon="lucide:trending-up" data-width="32"></span>
</div>
<div className="text-[10px] text-zinc-500 text-center mt-2">Market Signals</div>
</div>

<svg className="absolute inset-0 w-full h-full" viewbox="0 0 400 400">
<defs>
<lineargradient id="connGrad" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#8b5cf6', stopOpacity: '0.5'}}></stop>
<stop offset="100%" style={{stopColor: '#d946ef', stopOpacity: '0.2'}}></stop>
</lineargradient>
</defs>
<line stroke="url(#connGrad)" stroke-dasharray="4 4" strokeWidth="1" x1="100" x2="180" y1="80" y2="180"></line>
<line stroke="url(#connGrad)" stroke-dasharray="4 4" strokeWidth="1" x1="300" x2="220" y1="100" y2="180"></line>
<line stroke="url(#connGrad)" stroke-dasharray="4 4" strokeWidth="1" x1="80" x2="180" y1="300" y2="220"></line>
<line stroke="url(#connGrad)" stroke-dasharray="4 4" strokeWidth="1" x1="280" x2="220" y1="320" y2="220"></line>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 lg:py-32 border-t border-white/5 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent">
<div className="max-w-7xl mx-auto px-6 lg:px-8">

<div className="max-w-3xl mx-auto text-center mb-20">
<h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight font-serif mb-6">
                    Why the Top 1% of Talent is
                    <span className="italic text-violet-400">Invisible</span> to Legacy Tools
                </h2>
<p className="text-lg text-zinc-400 font-light">
                    The standard recruiting stack wasn't built for the nuance of hard tech.
                </p>
</div>

<div className="grid lg:grid-cols-2 gap-8">

<div className="relative rounded-3xl bg-zinc-900/30 border border-red-500/20 p-8 lg:p-10 overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-[80px] pointer-events-none"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium mb-6">
<span className="iconify w-3.5 h-3.5" data-icon="lucide:x-circle" data-width="14"></span>
                            THE OLD WAY
                        </div>
<h3 className="text-2xl font-medium text-white mb-8 tracking-tight">Blindspots</h3>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
<span className="text-sm font-semibold text-red-400">1</span>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1">Sparse, Static Data</h4>
<p className="text-sm text-zinc-500 leading-relaxed">Reliance on self-reported profiles that are often outdated. You are limited to what a candidate chooses to tell you.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
<span className="text-sm font-semibold text-red-400">2</span>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1">Blind to Context</h4>
<p className="text-sm text-zinc-500 leading-relaxed">You see a job title and dates, but you have no idea if they were maintaining legacy code or building the flagship product.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
<span className="text-sm font-semibold text-red-400">3</span>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1">Keyword Guessing</h4>
<p className="text-sm text-zinc-500 leading-relaxed">Searching for "GenAI" leads to noise. You miss the experts who use the right tools but don't list the buzzwords.</p>
</div>
</div>
</div>
</div>
</div>

<div className="relative rounded-3xl bg-zinc-900/30 border border-violet-500/30 p-8 lg:p-10 overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-[80px] pointer-events-none"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-medium mb-6">
<span className="iconify w-3.5 h-3.5" data-icon="lucide:sparkles" data-width="14"></span>
                            THE NEXUS WAY
                        </div>
<h3 className="text-2xl font-medium text-white mb-8 tracking-tight">Intelligence</h3>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30 flex items-center justify-center shrink-0">
<span className="text-sm font-semibold text-violet-400">1</span>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1">Deep Evidence Mining</h4>
<p className="text-sm text-zinc-400 leading-relaxed">We ingest public footprints—code commits, research papers, and blogs—to verify demonstrated expertise, proving a candidate can walk the walk.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30 flex items-center justify-center shrink-0">
<span className="text-sm font-semibold text-violet-400">2</span>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1">Inferred Experience Signals</h4>
<p className="text-sm text-zinc-400 leading-relaxed">We overlay a candidate's tenure with company milestones. We know they have "0-to-1" experience because they were there when the company grew 10x.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30 flex items-center justify-center shrink-0">
<span className="text-sm font-semibold text-violet-400">3</span>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1">Semantic Search</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Our AI understands technical concepts. Ask for "LLM optimization" and we find engineers who know PyTorch and Transformers, even if they never wrote "LLM".</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 lg:py-32 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8">

<div className="max-w-3xl mx-auto text-center mb-20">
<h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight font-serif mb-6">
                    How the
                    <span className="italic text-violet-400">Intelligence Graph</span> Works
                </h2>
<p className="text-lg text-zinc-400 font-light">
                    From job description to vetted candidates in 3 days.
                </p>
</div>

<div className="grid md:grid-cols-3 gap-8 lg:gap-12">

<div className="relative group">
<div className="absolute -inset-px bg-gradient-to-b from-violet-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative bg-zinc-900/50 border border-white/5 rounded-3xl p-8 h-full group-hover:border-violet-500/30 transition-colors">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center mb-6 shadow-lg shadow-violet-500/25">
<span className="text-lg font-semibold text-white">1</span>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Upload Your JD</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                            Share your job description and specialized requirements. Takes just 2 minutes.
                        </p>
<div className="flex items-center gap-2 text-xs text-violet-400">
<span className="iconify w-4 h-4" data-icon="lucide:upload" data-width="16"></span>
                            PDF, DOC, or paste text
                        </div>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-px bg-gradient-to-b from-fuchsia-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative bg-zinc-900/50 border border-white/5 rounded-3xl p-8 h-full group-hover:border-fuchsia-500/30 transition-colors">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center mb-6 shadow-lg shadow-fuchsia-500/25">
<span className="text-lg font-semibold text-white">2</span>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Graph Analysis</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                            Our AI traverses millions of connections to find candidates with verified, demonstrated expertise.
                        </p>
<div className="flex items-center gap-2 text-xs text-fuchsia-400">
<span className="iconify w-4 h-4" data-icon="lucide:cpu" data-width="16"></span>
                            2M+ profiles analyzed
                        </div>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-px bg-gradient-to-b from-purple-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative bg-zinc-900/50 border border-white/5 rounded-3xl p-8 h-full group-hover:border-purple-500/30 transition-colors">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/25">
<span className="text-lg font-semibold text-white">3</span>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Receive Shortlist</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                            Get a vetted shortlist of candidates with rich context and evidence of their expertise.
                        </p>
<div className="flex items-center gap-2 text-xs text-purple-400">
<span className="iconify w-4 h-4" data-icon="lucide:mail" data-width="16"></span>
                            Delivered in 3 days
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 lg:py-32 border-t border-white/5 bg-gradient-to-b from-transparent via-fuchsia-950/10 to-transparent">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight font-serif mb-6">
                    Built for
                    <span className="italic text-fuchsia-400">Every</span> Talent Team
                </h2>
<p className="text-lg text-zinc-400 font-light">
                    Whether you're an in-house team, an agency, or a VC talent partner—stop looking for 'Purple Squirrels' in the dark.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:border-violet-500/30 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-5 group-hover:bg-violet-500/20 transition-colors">
<span className="iconify w-6 h-6 text-violet-400" data-icon="lucide:building" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">In-House Teams</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Fill critical engineering roles faster without expanding your sourcing team. Get qualified candidates, not more noise.
                    </p>
</div>

<div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:border-fuchsia-500/30 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center mb-5 group-hover:bg-fuchsia-500/20 transition-colors">
<span className="iconify w-6 h-6 text-fuchsia-400" data-icon="lucide:users" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Recruiting Agencies</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Differentiate your placements with deep candidate intelligence. Double your submission-to-interview ratio.
                    </p>
</div>

<div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:border-purple-500/30 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5 group-hover:bg-purple-500/20 transition-colors">
<span className="iconify w-6 h-6 text-purple-400" data-icon="lucide:rocket" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">VC Talent Partners</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Help portfolio companies hire senior technical talent faster. Add tangible value beyond capital.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative py-24 lg:py-32 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight font-serif mb-6">
                    Trusted by
                    <span className="italic text-violet-400">Leading Recruiters</span>
</h2>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="relative bg-zinc-900/50 border border-white/10 rounded-3xl p-8 overflow-hidden group hover:border-violet-500/30 transition-colors">
<div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-full blur-[60px] pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center gap-1 mb-6">
<span className="iconify w-5 h-5 text-violet-400" data-icon="lucide:star" data-width="20"></span>
<span className="iconify w-5 h-5 text-violet-400" data-icon="lucide:star" data-width="20"></span>
<span className="iconify w-5 h-5 text-violet-400" data-icon="lucide:star" data-width="20"></span>
<span className="iconify w-5 h-5 text-violet-400" data-icon="lucide:star" data-width="20"></span>
<span className="iconify w-5 h-5 text-violet-400" data-icon="lucide:star" data-width="20"></span>
</div>
<blockquote className="text-lg text-zinc-300 font-light leading-relaxed mb-8">
                            "Quality over quantity. With Nexus, my <span className="text-white font-medium">submission-to-interview ratio has doubled</span>."
                        </blockquote>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center text-white font-semibold">
                                SS
                            </div>
<div>
<div className="text-sm font-medium text-white">Siddhi Shah</div>
<div className="text-xs text-zinc-500">Founder, Premier Talent</div>
</div>
</div>
</div>
</div>

<div className="relative bg-zinc-900/50 border border-white/10 rounded-3xl p-8 overflow-hidden group hover:border-fuchsia-500/30 transition-colors">
<div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/5 rounded-full blur-[60px] pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center gap-1 mb-6">
<span className="iconify w-5 h-5 text-fuchsia-400" data-icon="lucide:star" data-width="20"></span>
<span className="iconify w-5 h-5 text-fuchsia-400" data-icon="lucide:star" data-width="20"></span>
<span className="iconify w-5 h-5 text-fuchsia-400" data-icon="lucide:star" data-width="20"></span>
<span className="iconify w-5 h-5 text-fuchsia-400" data-icon="lucide:star" data-width="20"></span>
<span className="iconify w-5 h-5 text-fuchsia-400" data-icon="lucide:star" data-width="20"></span>
</div>
<blockquote className="text-lg text-zinc-300 font-light leading-relaxed mb-8">
                            "First impressions are very good, the <span className="text-white font-medium">overall quality is much better than anything I've previously seen</span>!"
                        </blockquote>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center text-white font-semibold">
                                GE
                            </div>
<div>
<div className="text-sm font-medium text-white">Greg Evans</div>
<div className="text-xs text-zinc-500">Founder, Quantix Search</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 lg:py-32 border-t border-white/5 overflow-hidden">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-violet-600/20 rounded-full blur-[120px]"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
<h2 className="text-4xl md:text-6xl font-normal text-white tracking-tight font-serif mb-6">
                Get Hard-to-Fill Candidates
                <span className="block italic bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400">Delivered to Your Inbox</span>
</h2>
<p className="text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto mb-10">
                Stop wasting cycles on sparse profiles and blind keyword searches. Simply upload your job description and specialized requirements. We'll leverage our intelligence graph to unearth hidden talent and send you a vetted shortlist.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
<button className="group inline-flex items-center justify-center gap-2 text-base font-semibold text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 rounded-full px-10 py-4 shadow-xl shadow-violet-500/25 transition-all hover:shadow-violet-500/40 hover:-translate-y-0.5">
                    Start Your Search Request
                    <span className="iconify w-5 h-5 transition-transform group-hover:translate-x-0.5" data-icon="lucide:arrow-right" data-width="20"></span>
</button>
</div>
<p className="text-sm text-zinc-500">
<span className="inline-flex items-center gap-2">
<span className="iconify w-4 h-4 text-violet-400" data-icon="lucide:clock" data-width="16"></span>
                    Upload JD in 2 minutes. Review vetted candidates in 3 days.
                </span>
</p>
</div>
</section>

<footer className="border-t border-white/5 py-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">

<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center">
<span className="iconify w-4 h-4 text-white" data-icon="lucide:hexagon" data-width="16"></span>
</div>
<span className="text-base font-semibold text-white">Nexus</span>
</div>

<div className="flex items-center gap-8 text-sm text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>

<div className="text-sm text-zinc-600">
                    © 2025 Nexus. All rights reserved.
                </div>
</div>
</div>
</footer>

    </>
  );
}
