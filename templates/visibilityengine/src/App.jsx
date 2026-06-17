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
sans: ['Geist', 'sans-serif'],
display: ['Montserrat', 'sans-serif'],
mono: ['Space Mono', 'monospace'],
},
colors: {
brand: {
lime: '#c1ff72',
dark: '#0f110c',
},
neutral: {
850: '#1f1f1f',
}
},
animation: {
'marquee': 'marquee 40s linear infinite',
'clip-in': 'clipIn 1.0s cubic-bezier(0.25, 1, 0.5, 1) both',
'fade-up': 'fadeUp 0.8s ease-out forwards',
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-slow': 'spin 12s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
clipIn: {
'0%': { opacity: '0', clipPath: 'inset(0 0 100% 0)' },
'100%': { opacity: '1', clipPath: 'inset(0 0 0 0)' },
},
fadeUp: {
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
      

<div className="fixed grid-lines w-full h-[100vh] top-0 left-0 pointer-events-none z-0"></div>

<header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-stone-200/50">
<div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between">

<a className="block group text-2xl font-semibold tracking-tighter text-stone-900" href="#">
                Visibility<span className="text-stone-400">Engine</span>
</a>

<nav className="hidden lg:flex gap-x-10 items-center">
<a className="hover:text-stone-900 transition-colors text-sm font-medium text-stone-500" href="#platform">Platform</a>
<a className="hover:text-stone-900 transition-colors text-sm font-medium text-stone-500" href="#features">Features</a>
<a className="hover:text-stone-900 transition-colors text-sm font-medium text-stone-500" href="#customers">Customers</a>
<a className="hover:text-stone-900 transition-colors text-sm font-medium text-stone-500" href="#">Enterprise</a>
</nav>

<div className="flex gap-x-4 items-center">
<a className="hidden sm:block text-sm font-medium text-stone-600 hover:text-stone-900" href="#">Login</a>
<button className="bg-stone-900 text-[#c1ff72] hover:bg-stone-800 transition-all font-medium px-4 py-2 lg:px-5 lg:py-2.5 rounded-lg text-xs lg:text-sm flex items-center gap-2 group">
                    Analyze URL
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</header>
<div className="relative z-10 flex flex-col min-h-screen pt-16 lg:pt-20">
<main className="flex-1 w-full">

<section className="lg:px-12 lg:pt-20 lg:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 min-h-[75vh] max-w-[1600px] mx-auto px-6 py-12 items-center">
<div className="animate-clip-in lg:col-span-7 space-y-8" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium bg-white border-stone-200 text-stone-600 shadow-sm">
<span className="w-2 h-2 rounded-full bg-[#c1ff72] animate-pulse"></span>
                        New: GPT-4o Citation Tracking
                    </div>
<h1 className="leading-[0.95] lg:text-7xl xl:text-8xl text-5xl font-medium text-stone-900 tracking-tighter">
                        Rank in Search. <br/>
<span className="text-stone-400">Exist in AI.</span>
</h1>
<p className="leading-relaxed lg:text-xl text-lg font-normal text-stone-500 font-display max-w-2xl">
                        The world's first AEO (Answer Engine Optimization) platform. We help brands dominate Google SGE, ChatGPT, and Perplexity results.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4 max-w-lg">
<div className="relative flex-grow">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400">
<iconify-icon icon="lucide:globe" width="20"></iconify-icon>
</div>
<input className="w-full h-14 pl-12 pr-4 rounded-full border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#c1ff72] transition-shadow text-stone-800 placeholder:text-stone-400" placeholder="Enter your domain..." type="text"/>
</div>
<button className="bg-stone-900 text-[#c1ff72] px-8 h-14 rounded-full font-semibold hover:bg-stone-800 transition-colors whitespace-nowrap flex items-center justify-center gap-2">
                            Run Scan
                            <iconify-icon icon="lucide:sparkles" width="18"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-4 text-xs text-stone-400 pt-2">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-stone-200 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-stone-300 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-stone-400 border-2 border-white"></div>
</div>
<p>Trusted by 1,400+ marketing teams</p>
</div>
</div>

<div className="lg:col-span-5 flex flex-col justify-center relative h-full min-h-[400px]">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-[#c1ff72]/30 to-purple-200/30 opacity-50 blur-[80px] rounded-full pointer-events-none"></div>
<div className="relative space-y-4 animate-fade-up" style={{animationDelay: '0.3s'}}>

<div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-xl max-w-sm ml-auto mr-auto lg:mr-0 w-full bg-white/80" style={{animationDelay: '0s'}}>
<div className="w-10 h-10 rounded-full flex items-center justify-center border shrink-0 bg-blue-50 text-blue-600 border-blue-100">
<iconify-icon icon="lucide:search" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<p className="text-xs font-semibold text-stone-900">Google SGE Snapshot</p>
<span className="text-[10px] text-stone-400">Live</span>
</div>
<div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[85%]"></div>
</div>
<p className="text-[10px] text-stone-500 mt-1">Rank #1 in Generative Box</p>
</div>
<span className="text-[10px] px-2 py-0.5 rounded border font-medium bg-blue-50 text-blue-700 border-blue-100">Dominant</span>
</div>

<div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-xl max-w-sm ml-auto mr-auto lg:-ml-8 w-full bg-white/80" style={{animationDelay: '1.5s'}}>
<div className="w-10 h-10 rounded-full flex items-center justify-center border shrink-0 bg-[#c1ff72] text-stone-900 border-[#aae65f]">
<iconify-icon icon="lucide:bot" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<p className="text-xs font-semibold text-stone-900">Perplexity Citation</p>
<span className="text-[10px] text-stone-400">12m ago</span>
</div>
<p className="text-xs text-stone-500 truncate">Source link appearing in answer</p>
</div>
<span className="bg-stone-900 text-[#c1ff72] text-[10px] px-2 py-0.5 rounded font-medium">+24% CTR</span>
</div>

<div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-xl max-w-sm ml-auto mr-auto lg:mr-4 w-full bg-white/80" style={{animationDelay: '2.5s'}}>
<div className="w-10 h-10 rounded-full flex items-center justify-center border shrink-0 bg-stone-100 text-stone-600 border-stone-200">
<iconify-icon icon="lucide:braces" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<p className="text-xs font-semibold text-stone-900">Knowledge Graph</p>
<span className="text-[10px] text-stone-400">JSON-LD</span>
</div>
<div className="flex gap-1 mt-1">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
<span className="text-[10px] text-stone-500">Entities Connected</span>
</div>
</div>
<span className="text-[10px] px-2 py-0.5 rounded border font-medium bg-white text-stone-600 border-stone-200">Valid</span>
</div>
</div>
</div>
</section>

<div className="bg-white w-full z-20 rounded-t-[40px] pt-12 pb-12 relative shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">

<section className="max-w-[1600px] mx-auto w-full mb-16 lg:mb-24 px-6 lg:px-12">
<p className="text-left text-xs font-bold text-stone-400 uppercase tracking-widest mb-8">Powering search strategy for</p>
<div className="overflow-hidden w-full relative">
<div className="z-10 bg-gradient-to-r to-transparent w-12 lg:w-40 h-full absolute top-0 left-0 from-white"></div>
<div className="bg-gradient-to-l to-transparent w-12 lg:w-40 h-full z-10 absolute top-0 right-0 from-white"></div>
<div className="flex w-max animate-marquee hover:pause-animation">

<div className="flex items-center gap-16 lg:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-xl font-bold font-sans tracking-tight"><iconify-icon icon="lucide:triangle"></iconify-icon> Vercel</div>
<div className="flex items-center gap-2 text-xl font-bold font-sans tracking-tight"><iconify-icon icon="lucide:box"></iconify-icon> Dropbox</div>
<div className="flex items-center gap-2 text-xl font-bold font-sans tracking-tight"><iconify-icon icon="lucide:figma"></iconify-icon> Figma</div>
<div className="flex items-center gap-2 text-xl font-bold font-sans tracking-tight"><iconify-icon icon="lucide:slack"></iconify-icon> Slack</div>
<div className="flex items-center gap-2 text-xl font-bold font-sans tracking-tight"><iconify-icon icon="lucide:framer"></iconify-icon> Framer</div>
<div className="flex items-center gap-2 text-xl font-bold font-sans tracking-tight"><iconify-icon icon="lucide:zap"></iconify-icon> Raycast</div>
</div>

<div className="flex items-center gap-16 lg:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 ml-16 lg:ml-24">
<div className="flex items-center gap-2 text-xl font-bold font-sans tracking-tight"><iconify-icon icon="lucide:triangle"></iconify-icon> Vercel</div>
<div className="flex items-center gap-2 text-xl font-bold font-sans tracking-tight"><iconify-icon icon="lucide:box"></iconify-icon> Dropbox</div>
<div className="flex items-center gap-2 text-xl font-bold font-sans tracking-tight"><iconify-icon icon="lucide:figma"></iconify-icon> Figma</div>
<div className="flex items-center gap-2 text-xl font-bold font-sans tracking-tight"><iconify-icon icon="lucide:slack"></iconify-icon> Slack</div>
<div className="flex items-center gap-2 text-xl font-bold font-sans tracking-tight"><iconify-icon icon="lucide:framer"></iconify-icon> Framer</div>
<div className="flex items-center gap-2 text-xl font-bold font-sans tracking-tight"><iconify-icon icon="lucide:zap"></iconify-icon> Raycast</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto px-6 lg:px-12 animate-fade-up w-full mb-12 lg:mb-24" style={{animationDelay: '0.4s'}}>
<div className="text-center mb-12">
<h2 className="lg:text-5xl text-3xl font-medium text-stone-900 tracking-tight font-display">
                            SEO is evolving. <span className="text-stone-400">Are you?</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
<div className="p-8 bg-neutral-50 border border-stone-200 rounded-2xl hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 bg-red-50 text-red-500 border border-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:trending-down" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">Zero-Click Search</h3>
<p className="text-stone-500 text-sm leading-relaxed">60% of searches now end without a click. Optimize for the answer, not just the link.</p>
</div>
<div className="p-8 bg-neutral-50 border border-stone-200 rounded-2xl hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 bg-amber-50 text-amber-500 border border-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:eye-off" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">Invisible Traffic</h3>
<p className="text-stone-500 text-sm leading-relaxed">LLMs are stealing your attribution. We track brand mentions inside AI conversations.</p>
</div>
<div className="p-8 bg-neutral-50 border border-stone-200 rounded-2xl hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 bg-blue-50 text-blue-500 border border-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:network" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">Semantic Authority</h3>
<p className="text-stone-500 text-sm leading-relaxed">Keywords are dead. Entities are king. Build a knowledge graph Google understands.</p>
</div>
</div>
</section>

<section className="lg:px-12 lg:mb-24 max-w-[1600px] mx-auto px-6 mb-12" id="features">
<h2 className="text-3xl lg:text-5xl font-medium text-stone-900 tracking-tight font-display mb-10 lg:mb-12">The Full-Stack AEO Platform</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">

<div className="row-span-1 lg:row-span-2 group overflow-hidden lg:p-10 flex flex-col min-h-[500px] lg:min-h-full transition-transform hover:scale-[1.01] duration-300 bg-stone-900 border-stone-800 border rounded-[32px] p-6 relative justify-between">
<div className="z-20 mt-auto relative">
<div className="flex text-white bg-white/10 w-12 h-12 border-white/10 border rounded-2xl mb-6 backdrop-blur-md items-center justify-center">
<iconify-icon icon="lucide:cpu" width="24"></iconify-icon>
</div>
<h3 className="lg:text-3xl text-2xl font-bold text-white font-display mb-3">Generative Engine Optimization</h3>
<p className="text-stone-400 mb-6 text-sm lg:text-base leading-relaxed max-w-sm">
                                    Reverse-engineer the algorithms behind SGE and ChatGPT. Optimize content structure for machine readability.
                                </p>
<a className="inline-flex items-center text-[#c1ff72] font-medium text-sm hover:underline underline-offset-4 group/link" href="#">
                                    Explore GEO Tools 
                                    <iconify-icon className="ml-2 group-hover/link:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
<div className="flex-1 flex w-full mt-8 mb-8 relative items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-b from-[#c1ff72]/5 to-transparent rounded-2xl pointer-events-none"></div>

<div className="bg-stone-800/80 backdrop-blur w-full max-w-[280px] rounded-xl border border-stone-700 p-4 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 bg-[#c1ff72] rounded-lg flex items-center justify-center text-stone-900">
<iconify-icon icon="lucide:sparkles" width="16"></iconify-icon>
</div>
<div className="h-2 w-20 bg-stone-600 rounded"></div>
</div>
<div className="space-y-2">
<div className="h-2 w-full bg-stone-700 rounded"></div>
<div className="h-2 w-5/6 bg-stone-700 rounded"></div>
<div className="h-2 w-4/6 bg-stone-700 rounded"></div>
</div>
<div className="mt-4 pt-3 border-t border-stone-700">
<div className="flex justify-between items-center text-[10px] text-stone-400 font-mono">
<span>Citation Confidence</span>
<span className="text-[#c1ff72]">98.4%</span>
</div>
<div className="w-full h-1 bg-stone-700 rounded-full mt-1">
<div className="w-[98%] h-full bg-[#c1ff72] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 group overflow-hidden lg:p-10 min-h-[400px] flex flex-col md:flex-row transition-transform hover:scale-[1.01] duration-300 bg-[#c1ff72] border-[#b0f060] border rounded-[32px] p-6 relative items-center justify-between">
<div className="relative z-20 flex flex-col h-full justify-between w-full md:w-1/2 mb-8 md:mb-0">
<div>
<div className="w-12 h-12 rounded-2xl bg-white/40 backdrop-blur-sm flex items-center justify-center mb-6 text-stone-900">
<iconify-icon icon="lucide:share-2" width="24"></iconify-icon>
</div>
<h3 className="lg:text-3xl text-2xl font-bold text-stone-900 font-display mb-3">Knowledge Graph Sync</h3>
<p className="text-stone-800 text-sm lg:text-base mb-6 leading-relaxed max-w-xs">
                                        Inject your brand's facts directly into LLM training data via structured data and entity establishment.
                                    </p>
</div>
<a className="inline-flex items-center text-stone-900 font-bold text-sm hover:underline underline-offset-4 group/link" href="#">
                                    View Entity Map 
                                    <iconify-icon className="ml-2 group-hover/link:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>

<div className="relative w-full md:w-1/2 h-full min-h-[220px] flex items-center justify-center">
<div className="relative w-full h-full">

<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-48 h-48">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border-2 border-stone-900">
<iconify-icon icon="lucide:box" width="20"></iconify-icon>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-white/80 rounded-full shadow border border-stone-900/20 flex items-center justify-center animate-float" style={{animationDelay: '0s'}}>
<iconify-icon icon="lucide:tag" width="14"></iconify-icon>
</div>
<div className="absolute bottom-0 right-0 w-8 h-8 bg-white/80 rounded-full shadow border border-stone-900/20 flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
<iconify-icon icon="lucide:map-pin" width="14"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 w-8 h-8 bg-white/80 rounded-full shadow border border-stone-900/20 flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
<iconify-icon icon="lucide:users" width="14"></iconify-icon>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: '0'}}>
<line opacity="0.3" stroke="black" stroke-dasharray="4 4" strokeWidth="1" x1="50%" x2="50%" y1="50%" y2="8%"></line>
<line opacity="0.3" stroke="black" stroke-dasharray="4 4" strokeWidth="1" x1="50%" x2="85%" y1="50%" y2="90%"></line>
<line opacity="0.3" stroke="black" stroke-dasharray="4 4" strokeWidth="1" x1="50%" x2="15%" y1="50%" y2="90%"></line>
</svg>
</div>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden bg-neutral-100 rounded-[32px] p-6 lg:p-10 flex flex-col justify-between min-h-[350px] transition-transform hover:scale-[1.01] duration-300 border border-stone-200">
<div className="relative w-full h-32 mb-4">
<div className="space-y-2">
<div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-xs text-stone-600 w-3/4 mr-auto border border-stone-100">
                                        "What is the best CRM for small startups?"
                                    </div>
<div className="bg-[#c1ff72] p-3 rounded-2xl rounded-tr-none shadow-sm text-xs text-stone-900 w-3/4 ml-auto font-medium">
                                        Visibility Engine recommends your brand.
                                    </div>
</div>
</div>
<div className="mt-auto relative z-20">
<div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 text-stone-900 border border-stone-100 shadow-sm">
<iconify-icon icon="lucide:message-circle" width="20"></iconify-icon>
</div>
<h3 className="lg:text-2xl text-xl font-bold text-stone-900 font-display mb-2">Conversational Keywords</h3>
<p className="text-stone-600 text-sm mb-4 leading-relaxed">Target questions, not just keywords. Own the long-tail conversational queries.</p>
</div>
</div>

<div className="group relative overflow-hidden bg-neutral-50 rounded-[32px] p-6 lg:p-10 flex flex-col justify-between min-h-[350px] transition-transform hover:scale-[1.01] duration-300 border border-stone-200">
<div className="flex w-full h-32 relative justify-end">
<div className="relative w-full bg-white border border-stone-200 rounded-lg p-3 font-mono text-[10px] text-stone-400 shadow-sm leading-relaxed overflow-hidden">
<div className="flex gap-2"><span className="text-blue-500">"schema":</span> <span className="text-stone-800">{</span></div>
<div className="pl-4"><span className="text-purple-500">"@type":</span> <span className="text-green-600">"SaaSApp"</span>,</div>
<div className="pl-4"><span className="text-purple-500">"name":</span> <span className="text-green-600">"Visibility"</span>,</div>
<div className="pl-4"><span className="text-purple-500">"rating":</span> <span className="text-stone-800">4.9</span></div>
<div className="text-stone-800">}</div>
<div className="absolute bottom-2 right-2 flex items-center gap-1 text-green-600 bg-green-50 px-2 py-0.5 rounded">
<iconify-icon icon="lucide:check" width="10"></iconify-icon> Valid
                                    </div>
</div>
</div>
<div className="z-20 mt-auto relative">
<div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 text-stone-900 border border-stone-100 shadow-sm">
<iconify-icon icon="lucide:code-2" width="20"></iconify-icon>
</div>
<h3 className="lg:text-2xl text-xl font-bold text-stone-900 font-display mb-2">Schema Automation</h3>
<p className="text-stone-600 text-sm mb-4 leading-relaxed">Automated JSON-LD injection for rich snippets and entity recognition.</p>
</div>
</div>
</div>
</section>

<section className="py-12 lg:py-16 max-w-[1600px] mx-auto px-6 lg:px-12">
<div className="text-center max-w-4xl mx-auto space-y-10">
<h2 className="text-3xl lg:text-6xl font-medium text-stone-900 tracking-tight font-display leading-tight">
                            The new standard for <br/> digital visibility.
                        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
<div className="space-y-3">
<div className="mx-auto w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-stone-900 mb-2">
<iconify-icon icon="lucide:zap" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-stone-900">Real-Time</h3>
<p className="text-stone-600 text-sm leading-relaxed">SERP and SGE changes monitored every hour, not every week.</p>
</div>
<div className="space-y-3">
<div className="mx-auto w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-stone-900 mb-2">
<iconify-icon icon="lucide:bar-chart-2" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-stone-900">Multi-Model</h3>
<p className="text-stone-600 text-sm leading-relaxed">Track presence across GPT-4, Claude 3, Gemini, and Perplexity.</p>
</div>
<div className="space-y-3">
<div className="mx-auto w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-stone-900 mb-2">
<iconify-icon icon="lucide:lock" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-stone-900">Brand Safety</h3>
<p className="text-stone-600 text-sm leading-relaxed">Detect and correct AI hallucinations about your product pricing or features.</p>
</div>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto px-6 lg:px-12 mt-16 lg:mt-20 mb-12 lg:mb-20" id="customers">
<div className="overflow-hidden min-h-[500px] lg:h-[600px] rounded-[32px] relative shadow-2xl border shadow-stone-900/10 bg-stone-900 border-stone-800">

<div className="opacity-10 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
<div className="flex flex-col lg:flex-row h-full">
<div className="flex-1 lg:p-16 flex flex-col z-10 pt-8 pr-8 pb-8 pl-8 relative justify-center">
<div className="flex items-center gap-2 mb-6">
<div className="w-2 h-2 bg-[#c1ff72] rounded-full animate-pulse"></div>
<span className="text-[#c1ff72] font-mono text-xs uppercase tracking-wider">Live Results</span>
</div>
<h2 className="lg:text-5xl xl:text-6xl leading-tight text-3xl font-medium text-white tracking-tight font-display mb-6">
                                    Results that <br/>Compound.
                                </h2>
<p className="text-base lg:text-lg text-stone-400 font-sans max-w-md mb-8 lg:mb-10 leading-relaxed">
                                    See how Fintech Co. increased qualified signups by optimizing for answer engines.
                                </p>
<button className="group flex items-center gap-3 bg-[#c1ff72] hover:bg-[#b0f060] transition-all text-sm font-semibold rounded-full px-8 py-4 w-fit shadow-lg shadow-[#c1ff72]/20 text-stone-900">
<span>Read Case Study</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>

<div className="flex lg:w-[50%] lg:pt-24 lg:pr-16 lg:pl-0 lg:items-center lg:pb-34 pt-8 pr-4 pb-16 pl-4 relative items-end">
<div className="lg:rounded-xl lg:translate-y-12 text-xs text-stone-400 font-mono bg-stone-950/90 w-full border-stone-800 border rounded-t-xl pt-8 pr-8 pb-16 pl-8 shadow-2xl backdrop-blur-md">
<div className="flex items-center justify-between border-b pb-4 mb-6 border-stone-800">
<span className="text-stone-300">performance_report.json</span>
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 bg-red-500/50 rounded-full"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="p-4 rounded border bg-stone-900 border-stone-800">
<span className="block text-stone-500 mb-2">LLM Citations</span>
<span className="text-2xl font-bold text-white block mb-1">+312%</span>
<span className="text-[#c1ff72] text-[10px]">ChatGPT &amp; Claude</span>
</div>
<div className="p-4 rounded border bg-stone-900 border-stone-800">
<span className="block text-stone-500 mb-2">Cost Per Lead</span>
<span className="text-2xl font-bold text-white block mb-1">-40%</span>
<span className="text-[#c1ff72] text-[10px]">Organic Lift</span>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded bg-stone-900/50 border border-stone-800">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#c1ff72] text-sm" icon="lucide:check-circle"></iconify-icon>
<span className="text-stone-300">Entity verification complete</span>
</div>
<span className="text-stone-600 text-[10px]">10:04 AM</span>
</div>
<div className="flex items-center justify-between p-3 rounded bg-stone-900/50 border border-stone-800">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#c1ff72] text-sm" icon="lucide:check-circle"></iconify-icon>
<span className="text-stone-300">Competitor content gap identified</span>
</div>
<span className="text-stone-600 text-[10px]">09:42 AM</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto px-6 lg:px-12 my-12 lg:my-20">
<div className="lg:p-20 overflow-hidden text-center bg-[#c1ff72] rounded-[32px] py-16 px-6 relative">
<div className="relative z-10 max-w-3xl mx-auto space-y-8">
<h2 className="text-3xl lg:text-6xl leading-tight font-medium text-stone-900 tracking-tight font-display">
                                Ready to optimize your <br/> AI visibility?
                            </h2>
<p className="text-stone-800/80 text-lg max-w-xl mx-auto">Start tracking your presence in search and generative engines today.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
<button className="font-medium px-8 py-4 rounded-full transition-transform hover:scale-105 shadow-xl bg-stone-900 text-white hover:bg-stone-800 w-full sm:w-auto text-center justify-center flex items-center gap-2">
                                    Start Free Trial
                                    <iconify-icon icon="lucide:chevron-right"></iconify-icon>
</button>
<button className="font-medium px-8 py-4 rounded-full transition-transform hover:scale-105 border border-stone-900/20 bg-white/50 text-stone-900 hover:bg-white w-full sm:w-auto text-center justify-center flex">
                                    View Pricing
                                </button>
</div>
</div>

<div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50">
<svg className="absolute top-0 left-0 w-full h-full" preserveaspectratio="none">
<circle cx="10%" cy="10%" fill="white" fillOpacity="0.3" filter="blur(40px)" r="20%"></circle>
<circle cx="90%" cy="90%" fill="white" fillOpacity="0.3" filter="blur(60px)" r="25%"></circle>
</svg>
</div>
</div>
</section>

<footer className="max-w-[1600px] mx-auto px-6 lg:px-12 pb-8">
<div className="border rounded-3xl p-8 lg:p-12 shadow-sm bg-neutral-50 border-stone-200">
<div className="flex flex-col lg:flex-row gap-10 lg:gap-16 justify-between">
<div className="lg:w-1/3 space-y-5">
<div className="flex gap-2 items-center">
<span className="text-2xl font-bold tracking-tighter text-stone-900">Visibility<span className="text-stone-400">Engine</span></span>
</div>
<p className="text-sm text-stone-500 font-sans max-w-sm leading-relaxed">
                                    The operating system for the future of search. Built for marketing teams in the AI era.
                                </p>
</div>
<div className="flex flex-wrap gap-10 lg:gap-20 text-sm">
<div className="space-y-4">
<h3 className="text-xs uppercase font-semibold tracking-wider text-stone-400">Platform</h3>
<ul className="space-y-3 text-stone-600">
<li><a className="hover:text-stone-900 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Enterprise</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div className="space-y-4">
<h3 className="text-xs uppercase font-semibold tracking-wider text-stone-400">Resources</h3>
<ul className="space-y-3 text-stone-600">
<li><a className="hover:text-stone-900 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">AEO Guide</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">API Docs</a></li>
</ul>
</div>
<div className="space-y-4">
<h3 className="text-xs uppercase font-semibold tracking-wider text-stone-400">Legal</h3>
<ul className="space-y-3 text-stone-600">
<li><a className="hover:text-stone-900 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs border-stone-200 text-stone-400">
<p>© 2024 Visibility Engine Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-stone-900" href="#"><iconify-icon icon="simple-icons:twitter"></iconify-icon></a>
<a className="hover:text-stone-900" href="#"><iconify-icon icon="simple-icons:linkedin"></iconify-icon></a>
<a className="hover:text-stone-900" href="#"><iconify-icon icon="simple-icons:github"></iconify-icon></a>
</div>
</div>
</div>
</footer>
</div>
</main>
</div>

    </>
  );
}
