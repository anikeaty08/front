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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="NMlvqnkICwYYJ6lYb064"></div>

</div></div>

<main className="min-h-screen overflow-hidden flex flex-col lg:max-w-[1400px] lg:min-h-[900px] lg:rounded-[2.5rem] lg:border lg:border-white/10 lg:shadow-2xl lg:shadow-black bg-black/20 w-full relative backdrop-blur-xl">

<div className="absolute inset-0 w-full h-full pointer-events-none z-0 flex justify-between px-6 md:px-12 opacity-50 md:opacity-100">
<div className="w-px h-full bg-white/5"></div>
<div className="w-px h-full bg-white/5 hidden sm:block"></div>
<div className="w-px h-full bg-white/5 hidden md:block"></div>
<div className="w-px h-full bg-white/5 hidden lg:block"></div>
<div className="w-px h-full bg-white/5 hidden xl:block"></div>
<div className="w-px h-full bg-white/5"></div>
</div>

<nav className="z-50 flex md:px-12 md:py-8 pt-6 pr-6 pb-6 pl-6 relative items-center justify-between">

<div className="flex gap-2 gap-x-2 gap-y-2 items-center cursor-pointer" onclick="window.location.href='/home'" role="button">
<div className="flex text-white bg-gradient-to-br from-emerald-500 to-teal-600 w-8 h-8 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.4)] items-center justify-center">
<iconify-icon className="text-white" height="20" icon="solar:graph-up-bold-duotone" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold text-white tracking-tight">Ranklynk</span>
</div>

<div className="hidden shadow-black/20 md:flex bg-gradient-to-br from-white/10 to-white/0 rounded-full pt-1 pr-1 pb-1 pl-1 shadow-lg backdrop-blur-md gap-x-1 gap-y-1 items-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}}>
<a className="transition-all text-sm font-medium text-white bg-white/10 rounded-full pt-1.5 pr-4 pb-1.5 pl-4 shadow-sm" href="/#engine" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}}>Engine</a>
<a className="px-4 py-1.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">For Founders</a>
<a className="px-4 py-1.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">For Agencies</a>
<a className="hover:text-white transition-colors text-sm font-medium text-zinc-400 pt-1.5 pr-4 pb-1.5 pl-4" href="/#pricing">Pricing</a>
<a className="px-4 py-1.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="/insights">Insights</a>
</div>

<button className="hidden sm:flex hover:from-emerald-500 hover:to-emerald-600 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all flex text-sm font-medium text-white bg-gradient-to-b from-emerald-600 to-emerald-700 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-[0px_0px_0px_1px_rgba(5,150,105,1),inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-sm gap-x-2 gap-y-x-2 items-center" onclick="window.location.href='https://app.ranklynk.io/signup'" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', '--border-radius-before': '9999px'}}>
<span className="text-sm font-medium text-white tracking-tight">Start Ranking</span>
<svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4 text-emerald-100" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>

<button className="md:hidden text-zinc-400 hover:text-white">
<svg aria-hidden="true" className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</nav>

<div className="flex-1 z-20 flex flex-col md:flex-row h-full relative">

<div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/90 via-[#09090b]/60 to-transparent md:hidden z-10 pointer-events-none">
</div>

<div className="w-full md:w-[50%] lg:w-[45%] px-6 md:px-12 pt-8 md:pt-24 z-30 pointer-events-none flex flex-col justify-start md:justify-between pb-12 h-full">
<div className="pointer-events-auto max-w-xl mx-auto md:mx-0">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium tracking-wide mb-6 shadow-[0_0_10px_rgba(16,185,129,0.15)]">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
        AUTONOMOUS SEO 1.0
      </div>

<h1 className="leading-[0.95] sm:text-6xl lg:text-8xl md:leading-[0.9] md:mb-8 md:text-6xl text-6xl font-normal text-white tracking-tight font-serif-custom mb-8 drop-shadow-2xl">
        SEO that
        <span className="bg-clip-text italic text-transparent bg-gradient-to-r from-emerald-400 to-teal-500 pr-2">runs itself</span>
</h1>

<p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-zinc-400 mb-8 md:mb-12 max-w-md font-light">
        An autonomous engine that plans, creates, and optimizes ranking content. Scale organic traffic without scaling effort.
      </p>

<div className="flex flex-col sm:flex-row gap-4 mb-16 md:mb-20 w-full flex-none">

<button className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center w-full sm:w-auto flex-none" onclick="window.location.href='https://app.ranklynk.io/signup'">
<span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#10b981_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
<span className="absolute inset-0 rounded-full bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0"></span>
<span className="flex items-center justify-center gap-2 transition-colors duration-300 text-white text-sm font-medium bg-gradient-to-b from-zinc-800 to-zinc-950 w-full h-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] group-hover:bg-gradient-to-b group-hover:from-zinc-900 group-hover:to-black">
<span className="relative z-10">Start free trial</span>
<svg aria-hidden="true" className="lucide lucide-chevron-right w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</span>
</button>

<button <button="" className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center w-full sm:w-auto flex-none" onclick="window.location.href='https://cal.com/chris.lyle/ranklynk-demo'">
<span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#a1a1aa_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
<span className="absolute inset-0 rounded-full bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0"></span>
<span className="flex items-center justify-center gap-2 transition-colors duration-300 text-zinc-300 group-hover:text-white text-sm font-medium bg-black w-full h-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
<iconify-icon className="relative z-10" icon="solar:play-circle-linear" width="20"></iconify-icon>
<span className="relative z-10">See how it works</span>
</span>
</button>
</div>

<div className="border-white/10 border-t mt-auto pt-8" style={{maskImage: 'linear-gradient(90deg, transparent, black 5%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 5%, black 70%, transparent)'}}>
<p className="uppercase md:text-left text-xs font-semibold text-zinc-500 tracking-widest text-center mb-6 ml-4">
          Driving organic growth for</p>
<div className="flex flex-wrap md:justify-start gap-8 md:gap-10 hover:grayscale-0 hover:opacity-100 transition-all duration-500 opacity-50 ml-4 grayscale invert brightness-200 gap-x-8 gap-y-8 items-center justify-center">

<iconify-icon className="opacity-80" icon="simple-icons:shopify" width="32"></iconify-icon>
<iconify-icon className="opacity-80" height="32" icon="simple-icons:webflow" style={{color: 'rgb(0, 0, 0)'}} width="32"></iconify-icon>
<iconify-icon className="opacity-80" height="32" icon="simple-icons:wix" style={{color: 'rgb(0, 0, 0)'}} width="32"></iconify-icon>
<iconify-icon className="opacity-80" icon="simple-icons:wordpress" width="32"></iconify-icon>
<iconify-icon className="opacity-80" height="32" icon="simple-icons:framer" style={{color: 'rgb(0, 0, 0)'}} width="32"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 pointer-events-none w-full h-full overflow-hidden z-0 opacity-40 md:opacity-100">
<svg className="w-full h-full" preserveaspectratio="xMidYMid slice" viewbox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="roadGradient" x1="0%" x2="100%" y1="100%" y2="0%">
<stop offset="0%" style={{stopColor: '#10b981', stopOpacity: '0.3'}}></stop>
<stop offset="50%" style={{stopColor: '#0ea5e9', stopOpacity: '0.2'}}></stop>
<stop offset="100%" style={{stopColor: '#000000', stopOpacity: '0.0'}}></stop>
</lineargradient>
</defs>

<path d="M 0 900 C 300 800, 600 600, 1200 100" fill="none" id="pathMain"></path>

<g className="hidden lg:block">

<rect fill="none" height="400" opacity="0.3" rx="60" stroke="#3f3f46" strokeWidth="0.5" transform="rotate(-15 640 800)" width="120" x="580" y="600"></rect>
<rect className="animate-beam" fill="none" height="400" opacity="0.5" rx="60" stroke="#10b981" strokeLinecap="round" strokeWidth="1" transform="rotate(-15 640 800)" width="120" x="580" y="600"></rect>

<rect fill="none" height="450" opacity="0.3" rx="70" stroke="#3f3f46" strokeWidth="0.5" transform="rotate(-25 950 525)" width="140" x="880" y="300"></rect>
<rect className="animate-beam" fill="none" height="450" opacity="0.5" rx="70" stroke="#34d399" strokeLinecap="round" strokeWidth="1" style={{animationDelay: '-3s'}} transform="rotate(-25 950 525)" width="140" x="880" y="300"></rect>

<rect fill="none" height="300" opacity="0.3" rx="50" stroke="#3f3f46" strokeWidth="0.5" transform="rotate(-35 1100 200)" width="100" x="1050" y="50"></rect>
<rect className="animate-beam" fill="none" height="300" opacity="0.5" rx="50" stroke="#0ea5e9" strokeLinecap="round" strokeWidth="1" style={{animationDelay: '-6s'}} transform="rotate(-35 1100 200)" width="100" x="1050" y="50"></rect>
</g>

<path d="M 0 900 C 300 800, 600 600, 1200 100" fill="none" filter="blur(20px)" opacity="0.6" stroke="url(#roadGradient)" strokeLinecap="butt" strokeWidth="60"></path>
<path d="M 0 900 C 300 800, 600 600, 1200 100" fill="none" opacity="0.4" stroke="#10b981" strokeWidth="2"></path>

<circle cx="0" cy="0" fill="#fff" opacity="0.9" r="6">
<animatemotion calcmode="linear" dur="6s" keypoints="0;1" keytimes="0;1" repeatcount="indefinite" rotate="auto">
<mpath href="#pathMain"></mpath>
</animatemotion>
</circle>
</svg>


<div className="hidden md:block absolute md:right-8 md:bottom-[20rem] lg:right-[10%] lg:top-[20%] lg:bottom-auto animate-float z-40 transform origin-bottom-right">
<div className="bg-zinc-900/90 backdrop-blur-md p-5 w-52 rounded-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col gap-3 relative z-10">
<div className="flex items-center justify-between border-b border-white/5 pb-3">
<div className="flex items-center gap-2.5">
<span className="w-5 h-5 rounded flex items-center justify-center bg-zinc-800 text-[10px] font-bold text-zinc-400">03</span>
<span className="text-xs font-semibold text-zinc-200 uppercase tracking-wide">Rankings</span>
</div>
<iconify-icon className="text-zinc-500" icon="solar:ranking-bold-duotone" width="16"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:round-arrow-up-bold" width="16"></iconify-icon>
<span className="text-xs text-zinc-300 font-medium">Top 3 Position</span>
</div>
<div className="flex items-center justify-between mt-1">
<span className="text-[10px] text-zinc-500 font-mono uppercase">Keyword</span>
<span className="text-xs text-white font-medium">"best ai seo"</span>
</div>
</div>
</div>

<div className="hidden md:block absolute md:right-8 md:bottom-[12rem] lg:right-[25%] lg:bottom-[40%] animate-float delay-200 z-40 transform origin-bottom-right">
<div className="bg-zinc-900/90 backdrop-blur-md p-5 w-60 rounded-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col gap-3 relative z-10">
<div className="flex items-center justify-between border-b border-white/5 pb-3">
<div className="flex items-center gap-2.5">
<span className="w-5 h-5 rounded flex items-center justify-center bg-zinc-800 text-[10px] font-bold text-zinc-400">02</span>
<span className="text-xs font-semibold text-zinc-200 uppercase tracking-wide">Generation</span>
</div>
<iconify-icon className="text-zinc-500" icon="solar:pen-new-square-bold-duotone" width="16"></iconify-icon>
</div>
<div className="bg-black/40 p-2.5 rounded border border-white/5">
<div className="flex gap-1.5 mb-2">
<div className="h-1.5 w-12 rounded-full bg-zinc-700"></div>
<div className="h-1.5 w-8 rounded-full bg-zinc-700"></div>
</div>
<p className="font-mono text-[10px] text-zinc-400 leading-relaxed">
<span className="text-emerald-400">writing...</span><br/>
            Optimizing for "programmatic seo" with semantic relevance &gt; 85%.
          </p>
</div>
</div>
</div>

<div className="hidden md:block absolute md:right-8 md:bottom-12 lg:left-[52%] lg:bottom-[12%] lg:right-auto animate-float delay-500 z-40 transform origin-bottom-left">
<div className="bg-zinc-900/90 backdrop-blur-md p-5 w-56 rounded-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col gap-3 relative z-10">
<div className="flex items-center justify-between border-b border-white/5 pb-3">
<div className="flex items-center gap-2.5">
<span className="w-5 h-5 rounded flex items-center justify-center bg-zinc-800 text-[10px] font-bold text-zinc-400">01</span>
<span className="text-xs font-semibold text-zinc-200 uppercase tracking-wide">Discovery</span>
</div>
<iconify-icon className="text-zinc-500" icon="solar:magnifer-bold-duotone" width="16"></iconify-icon>
</div>
<div className="space-y-2">
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded bg-blue-900/30 text-blue-400 flex items-center justify-center text-[10px] border border-blue-500/20">
                KD
              </div>
<span className="text-[10px] font-medium text-zinc-400">Easy Win Found</span>
</div>
<span className="text-[9px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded-full font-medium">Vol: 12k</span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded bg-purple-900/30 text-purple-400 flex items-center justify-center text-[10px] border border-purple-500/20">
                GAP
              </div>
<span className="text-[10px] font-medium text-zinc-400">Content Gap</span>
</div>
<span className="text-[9px] text-zinc-500">Auto-Queued</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="flex flex-col z-20 w-full border-white/5 border-t relative">
<section className="md:px-12 lg:py-32 bg-black/50 w-full max-w-[1400px] z-10 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative" id="engine">

<div className="max-w-3xl mx-auto text-center mb-20">
<h2 className="text-3xl font-normal text-white tracking-tight font-serif-custom mb-6 md:text-6xl">
          Autonomous
          <span className="bg-clip-text italic text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">content generation</span>
</h2>
<p className="md:text-xl leading-relaxed text-lg font-light text-zinc-400">
  Ranklynk identifies ranking opportunities, generates authoritative content, and continuously refines performance using
  real search data.
</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="group relative rounded-3xl bg-zinc-900/30 border border-white/10 overflow-hidden hover:border-white/20 transition-colors duration-500 flex flex-col">
<div className="p-8 md:p-10 relative z-10 flex-1 flex flex-col">
<h3 className="text-2xl font-medium text-white mb-3 flex items-center gap-3 tracking-tight">
<iconify-icon className="text-emerald-500" icon="solar:magnifer-zoom-in-bold-duotone" width="28"></iconify-icon>
              Intelligent Research
            </h3>
<p className="text-zinc-400 font-light mb-12 text-base leading-relaxed">
                Discovers keyword and topical opportunities automatically. Analyzes search intent and competition to identify content gaps.
            </p>

<div className="mt-auto relative h-[320px] w-full flex flex-col items-center justify-center border border-white/5 rounded-2xl bg-black/20 overflow-hidden">

<div className="absolute inset-0 z-0 opacity-30" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '30px 30px'}}>
</div>

<div className="flex md:gap-4 text-[10px] md:text-xs text-zinc-300 font-mono z-20 mb-10 relative gap-x-2 gap-y-2 items-center justify-center" style={{maskImage: 'linear-gradient(90deg, transparent, black 5%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 5%, black 90%, transparent)'}}>

<div className="flex flex-col gap-3">
<div className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center gap-2 shadow-lg backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Keywords
                  </div>
<div className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center gap-2 shadow-lg backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse delay-75"></span>
                    Intent
                  </div>
</div>

<svg className="w-8 h-12 text-zinc-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 32 48">
<path className="opacity-50" d="M0 12 C 16 12, 16 24, 32 24" stroke-dasharray="3 3">
</path>
<path className="opacity-50" d="M0 36 C 16 36, 16 24, 32 24" stroke-dasharray="3 3">
</path>
</svg>

<div className="px-3 py-2 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-600 shadow-xl text-white font-semibold z-10 flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:magic-stick-3-bold-duotone"></iconify-icon>
                  Brief Gen
                </div>

<svg className="w-8 h-12 text-zinc-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 32 48">
<path className="opacity-50" d="M0 24 C 16 24, 16 12, 32 12" stroke-dasharray="3 3">
</path>
<path className="opacity-50" d="M0 24 C 16 24, 16 36, 32 36" stroke-dasharray="3 3">
</path>
</svg>

<div className="flex flex-col gap-3">
<div className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-500 shadow-lg backdrop-blur-sm">
                    Drafting</div>
<div className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-500 shadow-lg backdrop-blur-sm">
                    Internal Linking</div>
</div>
</div>

<div className="absolute bottom-8 w-full px-10 flex justify-center gap-4 z-10">
<span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px] shadow-[0_0_15px_rgba(16,185,129,0.2)] backdrop-blur-sm transform -rotate-2 hover:scale-105 transition-transform cursor-default select-none">Low Difficulty</span>
<span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-[10px] shadow-[0_0_15px_rgba(59,130,246,0.2)] backdrop-blur-sm transform rotate-3 hover:scale-105 transition-transform cursor-default select-none">High Intent</span>
</div>
</div>
</div>
</div>

<div className="group relative rounded-3xl bg-zinc-900/30 border border-white/10 overflow-hidden hover:border-white/20 transition-colors duration-500 flex flex-col">
<div className="p-8 md:p-10 relative z-10 h-full flex flex-col">
<h3 className="text-2xl font-medium text-white mb-3 flex items-center gap-3 tracking-tight">
<iconify-icon className="text-blue-500" icon="solar:refresh-circle-bold-duotone" width="28"></iconify-icon>
              Continuous Optimization
            </h3>
<p className="text-zinc-400 font-light mb-12 text-base leading-relaxed">
                Monitors impressions and CTR. Updates content automatically to improve authority without manual refresh cycles.
            </p>

<div className="mt-auto w-full bg-[#0c0c0e] rounded-xl border border-white/10 p-5 shadow-2xl relative overflow-hidden group-hover:shadow-blue-500/10 transition-shadow duration-500">

<div className="flex items-center justify-between mb-5 border-b border-white/5 pb-3">
<div className="flex items-center gap-2">
<span className="text-xs font-semibold text-white tracking-wide">Auto-Optimizer</span>
<span className="px-1.5 py-0.5 rounded-md bg-zinc-800 text-[9px] font-medium text-zinc-400 border border-white/5">Active</span>
</div>
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
</div>
</div>

<div className="space-y-3 font-mono text-[10px] sm:text-xs relative z-10">

<div className="flex items-center gap-2">
<span className="w-10 text-zinc-500 text-right font-medium">If</span>
<div className="flex-1 h-7 bg-zinc-900 border border-white/10 rounded flex items-center px-2 text-sky-300 group-hover:border-white/20 transition-colors">
                    ranking_position</div>
<div className="w-8 h-7 bg-zinc-900 border border-white/10 rounded flex items-center justify-center text-zinc-400">
                    drops</div>
<div className="flex text-white bg-zinc-900 w-20 h-7 border-white/10 border rounded pr-2 pl-2 items-center text-[10px]">
                    top 10</div>
</div>

<div className="flex items-center gap-2">
<span className="w-10 text-zinc-500 text-right font-medium">Then</span>
<div className="flex-1 h-7 bg-zinc-900 border border-white/10 rounded flex items-center px-2 text-emerald-400 group-hover:border-white/20 transition-colors">
                    update_content</div>
<div className="w-8 h-7 bg-zinc-900 border border-white/10 rounded flex items-center justify-center text-zinc-400">
                    +</div>
<div className="w-20 h-7 bg-zinc-900 border border-white/10 rounded flex items-center px-2 text-white">
                    add_links</div>
</div>

<div className="pl-4 border-l border-zinc-800 mt-2 pt-2 relative">
<span className="absolute -left-[17px] top-5 w-4 h-px bg-zinc-800"></span>
<div className="flex items-center gap-2 mb-2">
<span className="text-zinc-600 text-[9px] uppercase tracking-wider font-semibold">Result</span>
</div>
<div className="flex items-center gap-2 mb-1">
<span className="w-10 text-zinc-500 text-right font-medium">Log</span>
<div className="flex-1 h-7 bg-zinc-900 border border-white/10 rounded flex items-center px-2 text-zinc-400">
                      Refreshed article "SaaS SEO Guide"</div>
</div>
</div>
</div>

<div className="absolute -right-5 -bottom-10 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-blue-500/20 transition-all duration-700">
</div>
</div>
</div>
</div>
</div>
</section>
<div className="z-20 flex flex-col w-full border-white/5 border-t relative">
<section className="z-10 md:px-12 lg:py-32 w-full max-w-[1400px] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1 max-w-xl">
<h2 className="md:text-6xl text-3xl font-normal text-white tracking-tight font-serif-custom mb-6">
              Full SEO
              <span className="bg-clip-text italic text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">lifecycle engine</span>
</h2>
<p className="text-lg text-zinc-400 font-light leading-relaxed mb-8">
  From discovery to publishing, Ranklynk handles the entire workflow. It integrates with your data sources and CMS to
  scale content without growing your headcount.
</p>
<p className="text-base text-zinc-500 font-light leading-relaxed mb-10">
              Ideal for agencies and content-heavy businesses. Manage dozens of client sites or build massive topical authority on autopilot.
            </p>
<div className="flex flex-wrap gap-4">
<a className="inline-flex items-center gap-2 text-sm font-medium text-white border-b border-emerald-500 pb-0.5 hover:text-emerald-400 transition-colors" href="#">
                View Agency Solutions
                <svg aria-hidden="true" data-icon="solar:arrow-right-linear" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</a>
</div>
</div>

<div className="order-1 lg:order-2 w-full relative">

<div className="lg:mr-0 w-full max-w-lg mr-auto ml-auto relative">

<div className="flex justify-between text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-6 px-4">
<span className="">Data Sources</span>
<span className="mr-12">Autonomous Engine</span>
</div>

<div className="flex mb-12 pr-2 pl-2 relative items-center justify-between">

<div className="flex gap-3 md:gap-4 gap-x-3 gap-y-3">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg hover:border-white/20 hover:scale-105 transition-all duration-300 group text-white/50 hover:text-white">
<iconify-icon icon="simple-icons:googleanalytics" width="20"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg hover:border-white/20 hover:scale-105 transition-all duration-300 group text-white/50 hover:text-white">
<iconify-icon className="" icon="simple-icons:googlesearchconsole" width="20"></iconify-icon>
</div>
<div className="flex hover:border-white/20 hover:scale-105 transition-all duration-300 group hover:text-white text-white/50 bg-zinc-900 w-12 h-12 border-white/10 border rounded-xl shadow-lg items-center justify-center">
<iconify-icon icon="simple-icons:google" width="20"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-lg hover:border-white/20 hover:scale-105 transition-all duration-300 group text-white/50 hover:text-white">
<iconify-icon icon="simple-icons:semrush" width="20"></iconify-icon>
</div>
</div>

<div className="flex gap-3 md:gap-4 border-dashed border-white/5 border-l pl-8 gap-x-3 gap-y-3">
<div className="flex hover:border-white/20 hover:scale-105 transition-all duration-300 group hover:text-white text-white/50 bg-zinc-900 w-12 h-12 border-white/10 border rounded-xl shadow-lg items-center justify-center">
<iconify-icon icon="simple-icons:wordpress" width="20"></iconify-icon>
</div>
<div className="flex hover:border-white/20 hover:scale-105 transition-all duration-300 group hover:text-white text-white/50 bg-zinc-900 w-12 h-12 border-white/10 border rounded-xl shadow-lg items-center justify-center">
<iconify-icon icon="simple-icons:webflow" width="20"></iconify-icon>
</div>
<div className="flex hover:border-white/20 hover:scale-105 transition-all duration-300 group hover:text-white text-white/50 bg-zinc-900 w-12 h-12 border-white/10 border rounded-xl shadow-lg items-center justify-center">
<iconify-icon icon="simple-icons:shopify" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="absolute top-10 left-0 w-full h-[180px] pointer-events-none z-0 hidden sm:block">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 512 180">
<defs>
<lineargradient id="line-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#10b981" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#10b981" stop-opacity="1"></stop>
<stop offset="100%" stop-color="#10b981" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path d="M 32 24 C 32 80, 256 40, 256 120" fill="none" stroke="white" stroke-opacity="0.05" strokeWidth="1.5"></path>
<path d="M 92 24 C 92 80, 256 40, 256 120" fill="none" stroke="white" stroke-opacity="0.05" strokeWidth="1.5"></path>
<path d="M 152 24 C 152 80, 256 40, 256 120" fill="none" stroke="white" stroke-opacity="0.05" strokeWidth="1.5"></path>
<path d="M 212 24 C 212 80, 256 40, 256 120" fill="none" stroke="white" stroke-opacity="0.05" strokeWidth="1.5"></path>
<path d="M 360 24 C 360 80, 256 40, 256 120" fill="none" stroke="white" stroke-opacity="0.05" strokeWidth="1.5"></path>
<path d="M 420 24 C 420 80, 256 40, 256 120" fill="none" stroke="white" stroke-opacity="0.05" strokeWidth="1.5"></path>

<path className="animate-beam" d="M 32 24 C 32 80, 256 40, 256 120" fill="none" stroke="url(#line-gradient)" strokeWidth="1.5"></path>
<path className="animate-beam" d="M 152 24 C 152 80, 256 40, 256 120" fill="none" stroke="url(#line-gradient)" strokeWidth="1.5" style={{animationDelay: '-2s'}}></path>
<path className="animate-beam" d="M 360 24 C 360 80, 256 40, 256 120" fill="none" stroke="url(#line-gradient)" strokeWidth="1.5" style={{animationDelay: '-1.5s'}}></path>

<circle className="animate-pulse" cx="256" cy="120" fill="#10b981" r="3">
<animate attributename="r" dur="2s" repeatcount="indefinite" values="3;5;3"></animate>
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="1;0.5;1"></animate>
</circle>

<line opacity="0.5" stroke="#10b981" stroke-dasharray="4 4" strokeWidth="1.5" x1="256" x2="256" y1="120" y2="160"></line>
</svg>
</div>

<div className="z-10 flex flex-col gap-6 mt-16 relative gap-x-6 gap-y-6 items-center">

<div className="w-full bg-zinc-900/80 backdrop-blur-md border border-white/5 rounded-2xl p-5 shadow-2xl relative group">
<div className="absolute -left-px top-8 h-8 w-[3px] bg-emerald-500 rounded-r-full"></div>
<div className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 shrink-0">
<iconify-icon icon="solar:cpu-bolt-bold-duotone" width="18"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<h4 className="text-sm font-medium text-white font-mono">Generating Article...</h4>
<span className="text-[10px] text-zinc-500 font-mono">3.2s</span>
</div>
<p className="text-zinc-400 text-xs font-mono leading-relaxed truncate opacity-70">
                        {"intent":"informational", "keywords":["autonomous seo"], "tone":"authoritative"}
                      </p>
</div>
</div>
</div>

<div className="relative flex flex-col items-center">
<div className="h-6 w-px bg-gradient-to-b from-white/10 to-transparent border-r border-dashed border-zinc-700">
</div>
<div className="my-2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black border border-zinc-800 shadow-xl z-20">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[10px] font-medium text-zinc-400 font-mono">PUBLISHING</span>
</div>
<div className="h-6 w-px bg-gradient-to-b from-transparent to-white/10 border-r border-dashed border-zinc-700">
</div>
</div>

<div className="w-full bg-[#0c0c0e] border border-white/10 rounded-2xl p-5 shadow-2xl relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none">
</div>
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-neutral-50" icon="solar:global-bold-duotone" width="20"></iconify-icon>
<span className="text-sm font-medium text-zinc-200">Live on Site</span>
<div className="ml-auto flex gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
<span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
</div>
</div>

<div className="rounded-lg bg-zinc-900/50 border border-white/5 p-3 flex items-center justify-between gap-4">
<div className="flex items-center gap-3 min-w-0">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
<div className="flex flex-col min-w-0">
<span className="text-xs font-medium text-white truncate">Why AI SEO Matters</span>
<span className="text-[10px] text-zinc-500 font-mono truncate">/blog/ai-seo-guide • status: indexed</span>
</div>
</div>
<div className="flex items-center gap-2 shrink-0">
<span className="px-1.5 py-0.5 rounded bg-zinc-800 border border-white/5 text-[10px] text-zinc-400 font-mono">Draft</span>
<div className="w-6 h-6 rounded bg-emerald-900/30 flex items-center justify-center border border-emerald-500/20">
<iconify-icon className="text-emerald-400 text-[12px]" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<div className="flex flex-col bg-black/50 w-full z-20 border-white/5 border-t relative">

<div className="absolute inset-0 w-full h-full pointer-events-none z-0 flex justify-between px-6 md:px-12 opacity-50 md:opacity-100">
<div className="w-px h-full bg-white/5"></div>
<div className="w-px h-full bg-white/5 hidden sm:block"></div>
<div className="w-px h-full bg-white/5 hidden md:block"></div>
<div className="w-px h-full bg-white/5 hidden lg:block"></div>
<div className="w-px h-full bg-white/5 hidden xl:block"></div>
<div className="w-px h-full bg-white/5"></div>
</div>
<div className="md:px-12 lg:py-32 w-full max-w-[1400px] z-10 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative" id="pricing">

<div className="flex flex-col items-center text-center mb-16 gap-4">
<h2 className="text-4xl md:text-6xl font-normal font-serif-custom text-white tracking-tight max-w-3xl leading-[0.95]">
              Pricing that scales
            </h2>
<p className="text-lg text-zinc-400 font-light">
                Start for free, then scale as you grow. Cancel anytime.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">

<div className="group relative rounded-2xl bg-zinc-900/40 border border-white/10 p-8 flex flex-col hover:border-white/20 transition-all duration-300">
<h3 className="text-lg font-medium text-white mb-2">Starter</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold text-white">$15</span>
<span className="text-zinc-500">/mo</span>
</div>
<p className="text-sm text-zinc-400 mb-6 min-h-[40px]">Perfect for testing and small sites.</p>
<button className="w-full py-2.5 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-colors mb-8" onclick="window.location.href='https://app.ranklynk.io/signup'">
                    Start 7-Day Trial
                </button>
<ul className="space-y-3 text-sm text-zinc-300">
<li className="flex gap-2 gap-x-2 gap-y-2 items-center"><iconify-icon className="text-zinc-600" icon="solar:check-circle-bold"></iconify-icon> 100 Credits / mo</li>
<li className="flex gap-2 gap-x-2 gap-y-2 items-center"><iconify-icon className="text-zinc-600" icon="solar:check-circle-bold"></iconify-icon> ~ 12 AI Articles / mo</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-zinc-600" icon="solar:check-circle-bold"></iconify-icon> Keyword Analysis</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-zinc-600" icon="solar:check-circle-bold"></iconify-icon> Basic Optimization</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-zinc-600" icon="solar:check-circle-bold"></iconify-icon>
                      Pay-As-You-Go - Top-up credits</li>
</ul>
</div>

<div className="group flex flex-col hover:border-emerald-500/50 transition-all duration-300 bg-zinc-900/80 border-emerald-500/30 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-[0_0_40px_-10px_rgba(16,185,129,0.1)]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</div>
<h3 className="text-lg font-medium text-white mb-2">Standard</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold text-white">$39</span>
<span className="text-zinc-500">/mo</span>
</div>
<p className="text-sm text-zinc-400 mb-6 min-h-[40px]">For consistent publishing &amp; growing sites.</p>
<button className="w-full py-2.5 rounded-full bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-colors mb-8 shadow-lg shadow-emerald-900/20" onclick="window.location.href='https://app.ranklynk.io/signup'">
                    Get Standard
                </button>
<ul className="space-y-3 text-sm text-zinc-300">
<li className="flex gap-2 gap-x-2 gap-y-2 items-center"><iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon> 350 Credits / mo</li>
<li className="flex gap-2 gap-x-2 gap-y-2 items-center"><iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon> ~ 43 AI Articles / mo</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon> Auto-Optimization Loop</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon> Advanced GSC &amp; GA4 Sync</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon> Pay-As-You-Go - Discount</li>
</ul>
</div>

<div className="group relative rounded-2xl bg-zinc-900/40 border border-white/10 p-8 flex flex-col hover:border-white/20 transition-all duration-300">
<h3 className="text-lg font-medium text-white mb-2">Professional</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold text-white">$99</span>
<span className="text-zinc-500">/mo</span>
</div>
<p className="text-sm text-zinc-400 mb-6 min-h-[40px]">For high-volume publishers &amp; agencies.</p>
<button className="w-full py-2.5 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-colors mb-8" onclick="window.location.href='https://app.ranklynk.io/signup'">
                    Get Professional
                </button>
<ul className="text-sm text-zinc-300 space-y-3">
<li className="flex gap-2 gap-x-2 gap-y-2 items-center"><iconify-icon className="text-zinc-600" icon="solar:check-circle-bold"></iconify-icon> 1000 Credits / mo</li>
<li className="flex gap-2 gap-x-2 gap-y-2 items-center"><iconify-icon className="text-zinc-600" icon="solar:check-circle-bold"></iconify-icon> ~ 123 AI Articles / mo</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-zinc-600" icon="solar:check-circle-bold"></iconify-icon> Weekly Optimization Cycles</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-zinc-600" icon="solar:check-circle-bold"></iconify-icon> Priority Processing</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-zinc-600" icon="solar:check-circle-bold"></iconify-icon>
                      Pay-As-You-Go - Steep Discount</li>
</ul>
</div>
</div>
</div>
</div>
<div className="z-20 flex flex-col w-full border-white/5 border-t relative">

<section className="z-10 md:px-12 w-full max-w-[1400px] border-white/5 border-b mr-auto ml-auto pt-32 pr-6 pb-24 pl-6 relative">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">
<h2 className="text-5xl md:text-7xl lg:text-8xl font-serif-custom font-normal text-white tracking-tight mb-8 drop-shadow-2xl">
              Turn SEO into a
              <span className="bg-clip-text animate-gradient-x italic text-transparent bg-gradient-to-r from-emerald-300 via-teal-400 to-emerald-300 pr-2">system.</span>
</h2>
<p className="text-lg md:text-xl text-zinc-400 font-light mb-12 max-w-2xl">
              Join agencies and founders who stopped babysitting their content and started automating their growth with Ranklynk.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-semibold text-black transition-all hover:bg-zinc-200 hover:scale-105" onclick="window.location.href='https://app.ranklynk.io/signup'">
<span className="mr-2">Start for free</span>
<svg aria-hidden="true" data-icon="solar:arrow-right-linear" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
<button className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-zinc-900 px-8 font-semibold text-white transition-all hover:bg-zinc-800 hover:border-white/20" onclick="window.location.href='https://cal.com/chris.lyle/ranklynk-demo'">
                    Book a Demo
                </button>
</div>
</div>
</section>

<footer className="md:px-12 bg-black/50 w-full max-w-[1400px] z-10 mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 relative">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">

<div className="col-span-2 lg:col-span-2 pr-8">
<div className="flex items-center gap-2 mb-6">
<div className="flex text-white bg-gradient-to-br from-emerald-500 to-teal-600 w-8 h-8 rounded-lg items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)]">
<iconify-icon icon="solar:graph-up-bold-duotone" width="20"></iconify-icon>
</div>
<span className="text-xl font-semibold text-white tracking-tight">RankLynk</span>
</div>
<p className="leading-relaxed text-sm text-zinc-500 mb-6">
                The autonomous SEO content engine. Plan, create, optimize, and improve search-driven content at scale without linear headcount growth.
              </p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:x" width="18"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:linkedin" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="">
<h4 className="text-sm font-semibold text-white mb-4">Platform</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li className=""><a className="hover:text-emerald-400 transition-colors" href="/#engine">Engine</a></li>
<li className=""><a className="hover:text-emerald-400 transition-colors" href="/#engine">Research</a></li>
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">Optimization</a></li>
</ul>
</div>

<div className="">
<h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">Documentation</a></li>
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">Insights</a></li>
</ul>
</div>

<div className="">
<h4 className="text-sm font-semibold text-white mb-4">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">About</a></li>
<li className=""><a className="hover:text-emerald-400 transition-colors" href="/#pricing">Pricing</a></li>
<li className=""><a className="hover:text-emerald-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div className="">
<h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li className=""><a className="hover:text-emerald-400 transition-colors" href="/privacy">Privacy</a></li>
<li className=""><a className="hover:text-emerald-400 transition-colors" href="/cookies">Cookies</a></li>
<li className=""><a className="hover:text-emerald-400 transition-colors" href="/terms">Terms</a></li>
<li className=""><a className="hover:text-emerald-400 transition-colors" href="/subscription">Subscription</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-zinc-600">
<p>© 2026 RankLynk All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<span className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              System Operational
              </span>
</div>
</div>
</footer>
</div>
</div>
</div>
</main>


    </>
  );
}
