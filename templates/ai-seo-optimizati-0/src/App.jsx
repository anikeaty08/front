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



        lucide.createIcons();

        function switchStep(index) {
            const buttons = document.querySelectorAll('[id^="btn-step-"]');
            buttons.forEach(btn => {
                btn.classList.remove('bg-white', 'border-gray-200', 'shadow-sm', 'hover:border-gray-300');
                btn.classList.add('bg-gray-50', 'hover:bg-white', 'border-transparent', 'hover:shadow-sm');
                
                const desc = btn.querySelector('[id^="desc-step-"]');
                desc.classList.remove('grid-rows-[1fr]', 'opacity-100');
                desc.classList.add('grid-rows-[0fr]', 'opacity-0');
            });

            const activeBtn = document.getElementById(`btn-step-${index}`);
            activeBtn.classList.remove('bg-gray-50', 'hover:bg-white', 'border-transparent', 'hover:shadow-sm');
            activeBtn.classList.add('bg-white', 'border-gray-200', 'shadow-sm');
            
            const activeDesc = document.getElementById(`desc-step-${index}`);
            activeDesc.classList.remove('grid-rows-[0fr]', 'opacity-0');
            activeDesc.classList.add('grid-rows-[1fr]', 'opacity-100');

            const images = document.querySelectorAll('[id^="img-step-"]');
            images.forEach(img => {
                img.classList.remove('opacity-100', 'scale-100', 'translate-y-0');
                img.classList.add('opacity-0', 'scale-95', 'translate-y-4');
            });

            const activeImg = document.getElementById(`img-step-${index}`);
            activeImg.classList.remove('opacity-0', 'scale-95', 'translate-y-4');
            activeImg.classList.add('opacity-100', 'scale-100', 'translate-y-0');
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
      

<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-8 pointer-events-none text-gray-900 mix-blend-darken">
<a className="pointer-events-auto flex items-center gap-2 font-medium text-xl tracking-tight text-black" href="/">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24"><path d="M12 2v20"></path><path d="m17 5-5-3-5 3"></path><path d="m17 19-5 3-5-3"></path></svg>
<span className="font-semibold tracking-tight">STSGen</span>
</a>
<div className="pointer-events-auto flex items-center gap-6 text-black">
<a className="hover:opacity-70 transition-opacity" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="hover:opacity-70 transition-opacity" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
</a>
</div>
</nav>
<div className="relative w-full overflow-hidden bg-white pt-32 pb-10 lg:pt-40">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-gray-50 to-transparent rounded-[100%] blur-3xl -z-10 opacity-60"></div>
<div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 1440 800">
<defs>
<lineargradient id="graphFill" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#22c55e" stop-opacity="0.08"></stop>
<stop offset="100%" stop-color="#22c55e" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,800 L0,650 C150,640 250,680 400,600 C550,520 650,580 800,450 C950,320 1100,350 1250,200 L1440,100 V800 Z" fill="url(#graphFill)"></path>
<path className="graph-path" d="M0,650 C150,640 250,680 400,600 C550,520 650,580 800,450 C950,320 1100,350 1250,200 L1440,100" fill="none" stroke="#22c55e" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
</div>

<div className="absolute left-[80%] top-[35%] md:top-[40%] z-20 hidden md:block">
<div className="relative -ml-32 -mt-24 w-64 rounded-xl bg-gray-100 p-4 shadow-2xl ring-1 ring-white/10">
<div className="flex items-center justify-between mb-3 border-b border-white/10 pb-3">
<div className="flex items-center gap-1.5">

<div className="flex -space-x-2">
<div className="h-6 w-6 rounded-full bg-gray-800 ring-2 ring-black flex items-center justify-center text-white">
<svg className="text-green-400" fill="currentColor" height="12" viewbox="0 0 24 24" width="12"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
</div>
<div className="h-6 w-6 rounded-full bg-gray-800 ring-2 ring-black flex items-center justify-center text-white">
<svg className="text-blue-400" fill="none" height="12" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="12"><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="h-6 w-6 rounded-full bg-gray-800 ring-2 ring-black flex items-center justify-center text-white">
<svg className="text-orange-400" fill="none" height="12" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="12"><path d="M12 2l3 7h7l-5 5 2 8-7-5-7 5 2-8-5-5h7z"></path></svg>
</div>
</div>
<span className="text-xs font-medium text-gray-400 ml-2">Combined</span>
</div>
<span className="flex h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_6px_#22c55e]"></span>
</div>
<div className="flex items-end gap-2">
<span className="text-2xl font-semibold text-black tracking-tight">14,293</span>
<span className="mb-1 text-xs font-medium text-green-400 flex items-center">
<svg className="mr-0.5" fill="none" height="12" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="12"><path d="M18 15l-6-6-6 6"></path></svg>
                        24%
                    </span>
</div>
<p className="mt-1 text-[10px] text-gray-500 font-medium uppercase tracking-wider">Recommendations / Mo</p>
</div>
</div>

<div className="flex flex-col text-center max-w-4xl mx-auto px-6 items-start relative z-10">
<div className="inline-flex gap-2 text-xs font-medium text-gray-600 bg-white border-gray-200 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 shadow-sm gap-x-2 gap-y-2 items-center backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                GEO like never before
            </div>
<h1 className="text-5xl font-medium tracking-tight text-gray-900 mb-6 text-balance text-left md:text-6xl lg:text-7xl">
                Influence AI Recommendations.
            </h1>
<p className="text-balance leading-relaxed md:text-lg text-xl text-gray-500 font-normal text-left max-w-2xl mb-10">
<span className="text-black font-medium">Rank #1 in LLM responses.</span> We generate strategic text sequences to optimize your position in ChatGPT, Claude, and Gemini.
            </p>
<form className="flex w-full max-w-sm flex-col gap-2 sm:flex-row mb-20">
<input className="flex-1 rounded-full border border-gray-200 bg-white/80 backdrop-blur px-5 py-3 text-sm outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-100 shadow-sm transition-all placeholder:text-gray-400" placeholder="work@company.com" required="" type="email"/>
<button className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap" type="submit">
                    Start Ranking
                </button>
</form>
</div>

<div className="relative z-10 max-w-full h-fit w-full pt-10 pb-20 overflow-hidden select-none pointer-events-none">
<div className="w-full flex justify-center px-4">
<p className="font-mono text-5xl md:text-7xl lg:text-8xl tracking-tighter text-center font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-50/0 opacity-100 break-all lg:whitespace-nowrap leading-[0.9]">
                    "RETEDLY phys_ _top++ guarantee result &gt;&gt;&gt;"
                </p>
</div>
</div>
</div>

<section className="mx-auto max-w-6xl px-6 py-24 relative z-20 bg-white">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4">Everything you need to rank</h2>
<p className="text-lg text-gray-500 max-w-2xl">Tools to generate, monitor, and optimize your AI presence.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-all">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
<div className="relative z-10 p-8">
<div className="h-10 w-10 rounded-lg bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-4">
<svg className="text-gray-900" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<h3 className="text-lg font-medium text-gray-900">GCG Powered Generator</h3>
<p className="text-gray-500 mt-2 max-w-md text-sm leading-relaxed">
                        Algorithms find the optimal token sequence automatically. No manual prompting required.
                    </p>
</div>

<div className="relative h-48 mt-4 mx-8 rounded-t-xl bg-white border border-gray-200 border-b-0 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.05)] overflow-hidden">
<div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-100 bg-gray-50/50">
<div className="w-2.5 h-2.5 rounded-full bg-red-400/20 border border-red-500/30"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-400/20 border border-yellow-500/30"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-400/20 border border-green-500/30"></div>
</div>
<div className="p-4 space-y-2">
<div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-500">
<span className="text-xs font-mono text-gray-400">1</span>
<div className="h-2 w-12 bg-purple-100 rounded"></div>
<div className="h-2 w-24 bg-gray-100 rounded group-hover:bg-purple-50 transition-colors"></div>
</div>
<div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-500 delay-75">
<span className="text-xs font-mono text-gray-400">2</span>
<div className="h-2 w-full max-w-[200px] bg-gray-100 rounded"></div>
</div>
<div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-500 delay-100">
<span className="text-xs font-mono text-gray-400">3</span>
<div className="h-2 w-8 bg-blue-100 rounded"></div>
<div className="h-2 w-32 bg-green-100 rounded animate-pulse"></div>
<div className="h-2 w-12 bg-gray-100 rounded"></div>
</div>
<div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-500 delay-150">
<span className="text-xs font-mono text-gray-400">4</span>
<div className="h-2 w-full max-w-[180px] bg-gray-100 rounded"></div>
</div>
</div>
<div className="absolute bottom-4 right-4 bg-black text-white text-[10px] font-medium px-2 py-1 rounded shadow-lg flex items-center gap-1 group-hover:scale-105 transition-transform">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> Optimized
                    </div>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-all">
<div className="p-8 pb-0">
<div className="h-10 w-10 rounded-lg bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-4">
<svg className="text-gray-900" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<h3 className="text-lg font-medium text-gray-900">Traffic Attribution</h3>
<p className="text-gray-500 mt-2 text-sm leading-relaxed">
                        See exactly which AI models are recommending you.
                    </p>
</div>
<div className="flex-1 min-h-[140px] relative mt-6 flex items-end justify-center gap-3 px-8 pb-8">
<div className="w-full bg-white border border-gray-200 rounded-lg p-3 shadow-sm flex items-end justify-between h-24">
<div className="w-1/5 bg-gray-200 rounded-t-sm h-[40%] group-hover:h-[50%] transition-all duration-500"></div>
<div className="w-1/5 bg-gray-300 rounded-t-sm h-[60%] group-hover:h-[70%] transition-all duration-500 delay-75"></div>
<div className="w-1/5 bg-gray-900 rounded-t-sm h-[80%] group-hover:h-[95%] transition-all duration-500 delay-100"></div>
<div className="w-1/5 bg-gray-200 rounded-t-sm h-[30%] group-hover:h-[40%] transition-all duration-500 delay-150"></div>
</div>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-all">
<div className="p-8 pb-0">
<div className="h-10 w-10 rounded-lg bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-4">
<svg className="text-gray-900" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h3 className="text-lg font-medium text-gray-900">Query Monitoring</h3>
<p className="text-gray-500 mt-2 text-sm leading-relaxed">
                        Real-time alerts on your ranking position.
                    </p>
</div>
<div className="flex-1 min-h-[140px] relative mt-6 flex flex-col items-center justify-center gap-2 px-8 pb-8">
<div className="w-full max-w-[200px] h-2 bg-gray-200 rounded-full overflow-hidden">
<div className="h-full bg-green-500 rounded-full w-[20%] group-hover:w-[80%] transition-all duration-[250ms] ease-linear group-hover:duration-[600ms] group-hover:spring-bounce"></div>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-gray-500 mt-1">
<div className="w-2 h-2 rounded-full bg-green-500"></div> Live Tracking
                    </div>
</div>
</div>

<div className="lg:col-span-2 group relative flex flex-col md:flex-row justify-between overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-all">
<div className="relative z-10 p-8 flex flex-col justify-between">
<div>
<div className="h-10 w-10 rounded-lg bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-4">
<svg className="text-gray-900" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-medium text-gray-900">Shuffle-Resistant</h3>
<p className="text-gray-500 mt-2 max-w-sm text-sm leading-relaxed">
                            Your rank sticks regardless of how the AI shuffles product lists.
                        </p>
</div>
</div>
<div className="relative w-full md:w-1/2 min-h-[200px] bg-white border-l border-gray-200 flex items-center justify-center p-8">
<div className="relative w-32 h-32">
<div className="absolute inset-0 border border-dashed border-gray-200 rounded-xl transform rotate-6"></div>
<div className="absolute top-0 left-0 w-12 h-12 bg-gray-100 border border-gray-200 rounded-lg shadow-sm flex items-center justify-center font-mono text-xs text-gray-400 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500">A</div>
<div className="absolute bottom-0 right-0 w-12 h-12 bg-gray-900 border border-gray-900 rounded-lg shadow-lg flex items-center justify-center font-mono text-xs text-white z-10 group-hover:-translate-x-4 group-hover:-translate-y-4 transition-transform duration-500">STS</div>
<div className="absolute top-0 right-0 w-12 h-12 bg-gray-100 border border-gray-200 rounded-lg shadow-sm flex items-center justify-center font-mono text-xs text-gray-400">B</div>
<div className="absolute bottom-0 left-0 w-12 h-12 bg-gray-100 border border-gray-200 rounded-lg shadow-sm flex items-center justify-center font-mono text-xs text-gray-400">C</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100">
<div className="mx-auto w-full max-w-5xl">
<div className="px-5 sm:px-20">
<div className="flex flex-col gap-16">
<div className="flex flex-col gap-3 items-center text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 leading-tight">
                            How You Rank with STS
                        </h2>
<p className="text-lg text-gray-500 max-w-2xl">
                            Simple, transparent optimization. No black-hat tricks.
                        </p>
</div>
<div className="flex flex-col-reverse gap-6 md:grid md:grid-cols-12">

<div className="col-span-5 flex flex-col gap-4">
<button className="group bg-white border-gray-200 hover:border-gray-300 shadow-sm focus:ring-2 focus:ring-gray-100 flex cursor-pointer flex-col rounded-xl border text-left transition-all outline-none select-none active-step" id="btn-step-0" onclick="switchStep(0)">
<p className="px-6 pt-6 pb-2 text-lg font-medium text-gray-900 ease-out-expo transition-all duration-500">1. Analyze Content</p>
<div className="grid grid-rows-[1fr] opacity-100 ease-out-expo transition-all duration-500" id="desc-step-0">
<div className="overflow-hidden">
<p className="text-gray-500 ease-out-cubic mt-2 px-6 pb-6 text-sm leading-relaxed transition-all duration-500">
                                            We scan your product URL to understand how LLMs currently perceive your brand.
                                        </p>
</div>
</div>
</button>
<button className="group bg-gray-50 hover:bg-white hover:border-gray-300 border-transparent hover:shadow-sm focus:ring-2 focus:ring-gray-100 flex cursor-pointer flex-col rounded-xl border text-left transition-all outline-none select-none" id="btn-step-1" onclick="switchStep(1)">
<p className="p-6 text-lg font-medium text-gray-900 ease-out-expo transition-all duration-500">2. Generate Sequence</p>
<div className="grid grid-rows-[0fr] opacity-0 ease-out-expo transition-all duration-500" id="desc-step-1">
<div className="overflow-hidden">
<p className="translate-y-4 text-gray-500 ease-out-cubic mt-2 px-6 pb-6 text-sm leading-relaxed transition-all duration-500">
                                            Our engine computes the perfect invisible text to maximize your probability score.
                                        </p>
</div>
</div>
</button>
<button className="group bg-gray-50 hover:bg-white hover:border-gray-300 border-transparent hover:shadow-sm focus:ring-2 focus:ring-gray-100 flex cursor-pointer flex-col rounded-xl border text-left transition-all outline-none select-none" id="btn-step-2" onclick="switchStep(2)">
<p className="p-6 text-lg font-medium text-gray-900 ease-out-expo transition-all duration-500">3. Inject &amp; Dominate</p>
<div className="grid grid-rows-[0fr] opacity-0 ease-out-expo transition-all duration-500" id="desc-step-2">
<div className="overflow-hidden">
<p className="translate-y-4 text-gray-500 ease-out-cubic mt-2 px-6 pb-6 text-sm leading-relaxed transition-all duration-500">
                                            Add the STS string to your site. Watch your brand become the #1 recommendation.
                                        </p>
</div>
</div>
</button>
</div>

<div className="bg-gray-50 border border-gray-100 relative col-span-7 h-[320px] md:h-auto overflow-hidden rounded-xl select-none flex items-center justify-center">
<div className="absolute inset-0 flex items-center justify-center transition-all duration-500 opacity-100 scale-100 p-8" id="img-step-0">
<div className="w-full max-w-sm bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
<div className="bg-gray-50 border-b border-gray-100 px-4 py-2 flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
</div>
<div className="p-6 flex flex-col gap-4">
<div className="h-4 w-1/3 bg-gray-100 rounded"></div>
<div className="flex gap-2">
<div className="flex-1 h-10 border border-gray-200 rounded px-3 flex items-center text-xs text-gray-400 font-mono">https://your-product.com</div>
<div className="w-16 h-10 bg-black rounded flex items-center justify-center">
<svg className="text-white w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14m-7-7 7 7-7 7"></path></svg>
</div>
</div>
<div className="space-y-2 mt-2">
<div className="h-2 w-full bg-gray-50 rounded"></div>
<div className="h-2 w-5/6 bg-gray-50 rounded"></div>
<div className="h-2 w-4/6 bg-gray-50 rounded"></div>
</div>
</div>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center transition-all duration-500 opacity-0 scale-95 translate-y-4 p-8" id="img-step-1">
<div className="w-full max-w-sm bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-800 font-mono text-xs">
<div className="bg-gray-800/50 px-4 py-2 flex justify-between items-center border-b border-gray-700">
<span className="text-gray-400">generator.py</span>
<div className="flex gap-1.5"><div className="w-2 h-2 rounded-full bg-gray-600"></div></div>
</div>
<div className="p-6 text-green-400 space-y-1">
<div className="flex"><span className="text-gray-500 w-6">1</span><span>&gt; init_gcg_search()</span></div>
<div className="flex"><span className="text-gray-500 w-6">2</span><span>&gt; calculating_gradients...</span></div>
<div className="flex"><span className="text-gray-500 w-6">3</span><span className="text-blue-400">Loss: 0.412 ↓</span></div>
<div className="flex"><span className="text-gray-500 w-6">4</span><span className="text-blue-400">Loss: 0.089 ↓</span></div>
<div className="flex"><span className="text-gray-500 w-6">5</span><span className="text-white bg-green-500/20 px-1 rounded">SEQUENCE FOUND</span></div>
</div>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center transition-all duration-500 opacity-0 scale-95 translate-y-4 p-8" id="img-step-2">
<div className="w-full max-w-sm bg-white rounded-lg shadow-lg border border-gray-200 p-6">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded bg-green-100 flex items-center justify-center text-green-600">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M12 2v20"></path><path d="m17 5-5-3-5 3"></path><path d="m17 19-5 3-5-3"></path></svg>
</div>
<div>
<div className="text-sm font-medium">Rank #1 Achieved</div>
<div className="text-xs text-gray-500">ChatGPT Response</div>
</div>
</div>
<div className="space-y-3">
<div className="flex gap-2 items-center">
<div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
<div className="bg-gray-900 h-full w-[92%]"></div>
</div>
<span className="text-xs font-bold text-gray-900">92%</span>
</div>
<div className="flex gap-2 items-center opacity-50">
<div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
<div className="bg-gray-400 h-full w-[45%]"></div>
</div>
<span className="text-xs text-gray-500">45%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="md:py-32 text-white bg-black pt-20 pb-20">
<div className="mx-auto w-full max-w-5xl">
<div className="px-5 sm:px-20">
<div className="flex flex-col gap-16">
<div className="flex flex-col gap-3 items-center text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white leading-tight">
                            The Math Behind Influence
                        </h2>
<p className="text-lg text-gray-400 max-w-2xl">
                            Enterprise-grade optimization, rooted in statistical probability.
                        </p>
</div>
<div className="grid gap-6 md:grid-cols-2">
<div className="bg-[#111] border border-white/10 overflow-hidden rounded-2xl group hover:border-gray-700 transition-colors">
<div className="h-[180px] bg-[#161616] relative flex items-center justify-center overflow-hidden border-b border-white/5">
<div className="flex items-center gap-3 opacity-80">
<div className="w-12 h-12 rounded bg-white/5 border border-white/10"></div>
<div className="w-12 h-12 rounded bg-white/5 border border-white/10"></div>
<div className="w-12 h-12 rounded bg-white/5 border border-white/10"></div>
<div className="w-12 h-12 rounded bg-green-500 border border-green-400 flex items-center justify-center shadow-[0_0_30px_-5px_rgba(34,197,94,0.4)]">
<svg className="text-black w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="w-12 h-12 rounded bg-white/5 border border-white/10"></div>
</div>
</div>
<div className="flex flex-col gap-2 p-6">
<p className="text-lg font-medium text-white">1. Gradient Descent Search</p>
<p className="text-sm text-gray-400 leading-relaxed">
                                    Optimization over millions of steps to find the perfect token combination.
                                </p>
</div>
</div>
<div className="bg-[#111] border border-white/10 overflow-hidden rounded-2xl group hover:border-gray-700 transition-colors">
<div className="h-[180px] bg-[#161616] relative flex items-center justify-center border-b border-white/5 overflow-hidden">
<div className="absolute inset-0 dot-pattern opacity-20 mask-image:radial-gradient(circle,black,transparent)"></div>
<div className="grid grid-cols-8 gap-4 opacity-60">
<div className="w-1 h-1 bg-gray-600 rounded-full"></div><div className="w-1 h-1 bg-gray-600 rounded-full"></div><div className="w-1 h-1 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div><div className="w-1 h-1 bg-gray-600 rounded-full"></div>
<div className="w-1 h-1 bg-gray-600 rounded-full"></div><div className="w-1 h-1 bg-gray-600 rounded-full"></div><div className="w-1 h-1 bg-gray-600 rounded-full"></div><div className="w-1 h-1 bg-gray-600 rounded-full"></div>
<div className="w-1 h-1 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div><div className="w-1 h-1 bg-gray-600 rounded-full"></div><div className="w-1 h-1 bg-gray-600 rounded-full"></div><div className="w-1 h-1 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
</div>
</div>
<div className="flex flex-col gap-2 p-6">
<p className="text-lg font-medium text-white">2. Universal Compatibility</p>
<p className="text-sm text-gray-400 leading-relaxed">
                                    Sequences are tested against GPT-4o, Claude 3.5, and Gemini for broad coverage.
                                </p>
</div>
</div>
<div className="bg-[#111] border border-white/10 overflow-hidden rounded-2xl group hover:border-gray-700 transition-colors">
<div className="h-[180px] bg-[#161616] relative flex items-center justify-center border-b border-white/5">
<div className="flex items-end gap-4 h-20">
<div className="w-10 h-full bg-green-500 rounded border border-green-400 shadow-[0_0_20px_rgba(34,197,94,0.3)]"></div>
<div className="w-10 h-full bg-transparent border border-dashed border-white/20 rounded flex items-center justify-center">
<div className="w-full h-full bg-white/5"></div>
</div>
</div>
</div>
<div className="flex flex-col gap-2 p-6">
<p className="text-lg font-medium text-white">3. Semantic Anchoring</p>
<p className="text-sm text-gray-400 leading-relaxed">
                                    Locks your product as the statistically probable answer in the model's memory.
                                </p>
</div>
</div>
<div className="bg-[#111] border border-white/10 overflow-hidden rounded-2xl group hover:border-gray-700 transition-colors">
<div className="h-[180px] bg-[#161616] relative flex items-center justify-center border-b border-white/5">
<div className="relative w-40 h-20">
<svg className="absolute inset-0 w-full h-full text-white/10" strokeWidth="2">
<path d="M20 80 C 20 40, 70 40, 70 20" fill="none" stroke="currentColor"></path>
<path d="M120 80 C 120 40, 70 40, 70 20" fill="none" stroke="currentColor"></path>
<path d="M70 80 L 70 20" fill="none" stroke="currentColor"></path>
</svg>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-green-500 rounded-lg border border-green-400 shadow-[0_0_20px_rgba(34,197,94,0.4)]"></div>
<div className="absolute bottom-0 left-0 w-10 h-10 bg-white/5 rounded-lg border border-white/10"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-white/5 rounded-lg border border-white/10"></div>
<div className="absolute bottom-0 right-0 w-10 h-10 bg-white/5 rounded-lg border border-white/10"></div>
</div>
</div>
<div className="flex flex-col gap-2 p-6">
<p className="text-lg font-medium text-white">4. Context Optimization</p>
<p className="text-sm text-gray-400 leading-relaxed">
                                    We minimize token usage while maximizing semantic weight for any input size.
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:py-32 text-white bg-zinc-900 pt-20 pb-20">
<div className="mx-auto w-full max-w-5xl">
<div className="px-5 sm:px-20">
<div className="flex flex-col gap-16">
<div className="flex flex-col gap-3">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white leading-tight">
                            Safety &amp; Integrity First
                        </h2>
<p className="text-lg text-gray-400 max-w-2xl">
                            Rank higher without compromising ethics. We ensure fair play through rigorous verification.
                        </p>
</div>
<div className="flex flex-col gap-3">
<div className="bg-white/5 overflow-hidden rounded-2xl hover:bg-white/10 transition-colors">
<div className="flex flex-col gap-2 p-6">
<p className="text-lg font-medium text-white">Congruency Checks</p>
<p className="text-sm text-gray-400 leading-relaxed">
                                    We match the prompt with your actual product. If the optimization would result in false recommendations, the generation is rejected.
                                </p>
</div>
</div>
<div className="bg-white/5 overflow-hidden rounded-2xl hover:bg-white/10 transition-colors">
<div className="flex flex-col gap-2 p-6">
<p className="text-lg font-medium text-white">Security by Default</p>
<div className="text-sm text-gray-400 grid gap-3 md:grid-cols-2 mt-2">
<div className="flex items-center gap-2">
<svg className="text-green-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Verified domain ownership</span>
</div>
<div className="flex items-center gap-2">
<svg className="text-green-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Anti-malicious intent scanning</span>
</div>
</div>
</div>
</div>
<div className="bg-white/5 overflow-hidden rounded-2xl hover:bg-white/10 transition-colors">
<div className="flex flex-col gap-2 p-6">
<div className="flex items-center gap-2">
<p className="text-lg font-medium text-white">Legal Compliance</p>
<div className="bg-white/10 text-gray-300 text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded-full">
                                        Updated
                                    </div>
</div>
<p className="text-sm text-gray-400 max-w-xl leading-relaxed">
                                    Fully compliant with current search manipulation regulations and AI safety guidelines.
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-black text-white pb-20 md:pb-32 pt-20 border-t border-white/10">
<div className="mx-auto w-full max-w-5xl">
<div className="px-5 sm:px-20">
<div className="flex flex-col gap-16">
<div className="flex flex-col gap-3">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white leading-tight">
                            Open Source to the Core
                        </h2>
<p className="text-lg text-gray-400 max-w-2xl">
                            STSGen isn't a black box. We're radically transparent. Every algorithm is available for audit on GitHub.
                        </p>
<div className="pt-4">
<a className="inline-flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors text-sm" href="#">
                                Explore on GitHub <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative flex flex-col items-center justify-center py-40 text-center overflow-hidden bg-white">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50 to-white pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/30 blur-[100px] rounded-full -z-10"></div>
<div className="mx-auto w-full max-w-5xl relative z-10">
<div className="px-5 sm:px-20">
<div className="relative mx-auto flex max-w-2xl flex-col items-center gap-8">
<div className="space-y-4">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 leading-tight text-balance">
                            Ready to rank #1?
                        </h2>
<p className="text-lg text-gray-500 text-balance">
                            Stop guessing. Start engineering your visibility with math.
                        </p>
</div>
<div className="w-full">
<form className="flex flex-col gap-3 sm:inline-flex w-full justify-center">
<div className="flex flex-col sm:flex-row gap-2 rounded-full bg-white p-2 ring-1 ring-gray-200 shadow-lg sm:inline-flex w-full max-w-md mx-auto">
<input className="text-gray-900 placeholder:text-gray-400 flex min-w-0 flex-1 items-center rounded-full px-5 py-3 outline-none bg-transparent" placeholder="Your work email" type="email"/>
<button className="inline-flex cursor-pointer items-center justify-center rounded-full whitespace-nowrap bg-black text-white hover:bg-gray-800 transition-all h-12 px-6 font-medium text-sm" type="submit">
                                    Join Waitlist
                                </button>
</div>
</form>
</div>
</div>
</div>
</div>
</div>

<footer className="bg-white border-t border-gray-100 py-12">
<div className="mx-auto w-full max-w-5xl">
<div className="px-5 sm:px-20">
<div className="flex items-center justify-between">
<a className="flex items-center gap-2 text-gray-900 hover:opacity-80 transition-opacity" href="/">
<div className="h-6 w-6 bg-black rounded-md flex items-center justify-center text-white">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12"><path d="M12 2v20"></path><path d="m17 5-5-3-5 3"></path><path d="m17 19-5 3-5-3"></path></svg>
</div>
</a>
<div className="flex items-center gap-6">
<a className="text-gray-500 hover:text-black transition-colors" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
</a>
<a className="text-gray-500 hover:text-black transition-colors" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
