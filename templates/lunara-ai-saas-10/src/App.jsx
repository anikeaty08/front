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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="X0ErZR3QhPzMHfKgBbJJ"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<div className="flex w-5 h-5 rounded-full items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}}>
<div className="bg-center w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9d4f265f-18c3-4272-9c44-82c296992573_3840w.jpg?w=800&amp;q=80)] bg-cover rounded-none"></div>
</div>
<span className="text-sm font-medium tracking-widest uppercase">Lunara</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#technology">Technology</a>
<a className="hover:text-white transition-colors" href="#engine">Cognitive Engine</a>
<a className="hover:text-white transition-colors" href="#how-it-works">Platform</a>
</div>
<a className="hover:bg-white hover:text-black transition-all text-xs font-medium border-white/20 border rounded-full pt-2 pr-4 pb-2 pl-4" href="#">Become an Investor</a>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">

<div className="z-0 absolute top-0 right-0 bottom-0 left-0">
<div className="-translate-x-1/2 -translate-y-1/2 orbit-ring w-[800px] h-[800px] border-white/5 border rounded-full absolute top-1/2 left-1/2"></div>
<div className="-translate-x-1/2 -translate-y-1/2 orbit-ring w-[600px] h-[600px] border-white/5 border rounded-full absolute top-1/2 left-1/2" style={{animationDirection: 'reverse', animationDuration: '45s'}}></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-white/5 to-transparent blur-3xl opacity-20 pointer-events-none"></div>
</div>
<div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
<span className="text-xs text-neutral-300 tracking-wide">Introducing Creative Predictive Intelligence (CPI)</span>
</div>
<h1 className="md:text-7xl leading-[1.1] text-gradient text-5xl font-medium tracking-tight mb-6 pt-4 pb-4 grayscale" style={{}}>Predict how humans will perceive your media.</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-neutral-400 max-w-2xl mr-auto mb-10 ml-auto">Lunara is building the world’s first AI system that can predict how humans will perceive media before anyone views it.
</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors">
                    Request Early Access
                </button>
<button className="w-full sm:w-auto px-8 py-3 border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
<svg className="" data-icon-set="lucide" data-lucide="play-circle" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                    View Demo
                </button>
</div>
</div>

</section>

<section className="bg-neutral-950/50 border-white/10 border-t pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel hover:border-white/20 transition-colors group border-gray-300/40 rounded-xl pt-8 pr-8 pb-8 pl-8">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
<svg className="text-white" data-icon-set="lucide" data-lucide="bar-chart-2" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6m7 6V3m7 18V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium mb-3">Perceptual Clarity</h3>
<p className="leading-relaxed text-sm text-neutral-400">Measure how clearly diverse audiences will interpret any piece of media. Lunara models linguistic complexity, visual density, pacing, and cognitive load to predict comprehension risks before release.</p>
</div>

<div className="glass-panel hover:border-white/20 transition-colors group border-gray-300/40 rounded-xl pt-8 pr-8 pb-8 pl-8">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
<svg className="text-white" data-icon-set="lucide" data-lucide="users" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="text-lg font-medium mb-3">Demographic Perception Modeling</h3>
<p className="leading-relaxed text-sm text-neutral-400">See how different population groups perceive tone, emotion, trust, and informational clarity. Lunara transforms psychometric research into computational forecasts of audience-specific interpretation.</p>
</div>

<div className="glass-panel hover:border-white/20 transition-colors group border-gray-300/40 rounded-xl pt-8 pr-8 pb-8 pl-8">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
<svg className="text-white" data-icon-set="lucide" data-lucide="cpu" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
</div>
<h3 className="text-lg font-medium mb-3">Cognitive Media Analysis Engine</h3>
<p className="leading-relaxed text-sm text-neutral-400">Analyze pacing, scene transitions, sound dynamics, emotional signals, and cognitive-event boundaries. Understand precisely which moments enhance clarity—or cause confusion—across varied viewers.</p>
</div>
</div>
</div>
</section>

<section className="bg-black pt-32 pb-32 relative" id="technology">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 items-center">

<div className="">
<h2 className="text-3xl font-medium tracking-tight mb-6">The Architecture of Perception</h2>
<p className="leading-relaxed text-neutral-400 mb-8">Lunara is engineered as an end-to-end Perception Intelligence infrastructure. Instead of only tracking clicks or views, it builds a multimodal model of how humans mentally process short-form media, educational clips, civic messages, public-health videos, training content, and entertainment, across diverse demographic groups. A large corpus of public and labeled media is transformed into perception-aligned embeddings and psychometric scores that approximate human interpretation.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1 text-neutral-500 font-mono text-xs">01</div>
<div className="">
<h4 className="text-sm font-medium text-white mb-1">Multimodal Ingestion</h4>
<p className="text-xs text-neutral-500">Video, audio, and text are segmented and encoded with state-of-the-art vision, audio, and language models, creating a shared representation of every frame, word, and sound.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 text-neutral-500 font-mono text-xs">02</div>
<div className="">
<h4 className="text-sm font-medium text-white mb-1">Temporal Feature Fusion</h4>
<p className="text-xs text-neutral-500">Lunara analyzes pacing, saliency shifts, scene changes, and emotional dynamics over time to construct a timeline of predicted cognitive events—attention peaks, overload, and potential confusion points.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 text-neutral-500 font-mono text-xs">03</div>
<div className="">
<h4 className="text-sm font-medium text-white mb-1">Behavioral Forecast Model</h4>
<p className="text-xs text-neutral-500">These fused signals feed a demographic-aware model that forecasts clarity, attention, emotional activation, trust, and comprehension risk for different audience profiles—before the media is ever shown.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="glass-panel rounded-xl p-8 border border-white/10 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-50">
</div>

<div className="font-mono text-xs text-neutral-500 space-y-3">
<div className="flex justify-between border-b border-white/5 pb-2">
<span className="" style={{}}>INPUT_SOURCE</span>
<span className="text-white">VIDEO_MP4</span>
</div>
<div className="flex justify-between border-b border-white/5 pb-2">
<span className="">AUDIO_VEC</span>
<span className="text-white">[0.89, 0.42, 0.11]</span>
</div>
<div className="flex justify-between border-b border-white/5 pb-2">
<span>FRAME_RATE</span>
<span className="text-white">HIGH_VARIANCE</span>
</div>
<div className="flex justify-between border-b border-white/5 pb-2">
<span className="">SEMANTIC_TAG</span>
<span className="text-white">"INSTRUCTIONAL"</span>
</div>
<div className="pt-4">
<span className="text-white block mb-2">PREDICTED_OUTPUT:</span>
<div className="w-full bg-neutral-900 h-2 rounded-full overflow-hidden">
<div className="bg-white h-full w-[84%]"></div>
</div>
<div className="flex justify-between mt-1">
<span className="">Perceptual Clarity Score</span>
<span className="text-white">84/100</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-neutral-950 border-white/5 border-t pt-24 pb-24 relative" id="engine">
<div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
<div className="max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col md:flex-row mb-16 gap-x-6 gap-y-6 items-end justify-between">
<div className="max-w-xl">
<div className="flex items-center gap-2 mb-4 text-xs font-mono text-neutral-500 uppercase tracking-widest">
<svg className="" data-icon-set="lucide" data-lucide="brain-circuit" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></g></svg>
<span>Core Architecture</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Cognitive Perception Engine™</h2>
<p className="text-neutral-400 leading-relaxed">
                        A simulated neural framework that deconstructs media into psychometric components. We measure the invisible threads between content and cognition.
                    </p>
</div>
<div className="flex items-center gap-3">
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] uppercase tracking-wider text-neutral-400 font-mono">v2.4 Stable</span>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] uppercase tracking-wider text-green-400/80 font-mono">Live Processing</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 gap-x-6 gap-y-6 items-stretch">

<div className="md:col-span-3 space-y-4 flex flex-col justify-center">
<div className="glass-panel border-l-white/20 hover:border-l-white transition-all group border-cyan-300 rounded-lg border-l-2 pt-5 pr-5 pb-5 pl-5">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-white">Visual Attention</span>
<svg className="text-neutral-500 group-hover:text-white transition-colors" data-icon-set="lucide" data-lucide="eye" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></g></svg>
</div>
<p className="text-[11px] text-neutral-500 leading-normal">
                            Saliency mapping to predict focal points and gaze duration per frame.
                        </p>
</div>
<div className="glass-panel border-l-white/20 hover:border-l-white transition-all group border-red-500 rounded-lg border-l-2 pt-5 pr-5 pb-5 pl-5">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-white">Aural Arousal</span>
<svg className="text-neutral-500 group-hover:text-white transition-colors" data-icon-set="lucide" data-lucide="waves" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-[11px] text-neutral-500 leading-normal">
                            Decibel dynamic range analysis to forecast physiological excitement.
                        </p>
</div>
<div className="glass-panel border-l-white/20 hover:border-l-white transition-all group border-yellow-200 rounded-lg border-l-2 pt-5 pr-5 pb-5 pl-5">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-white">Semantic Load</span>
<svg className="text-neutral-500 group-hover:text-white transition-colors" data-icon-set="lucide" data-lucide="message-square" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-[11px] leading-normal text-neutral-500 border-yellow-200">
                            Information density scoring to prevent cognitive overload.
                        </p>
</div>
</div>

<div className="md:col-span-6 flex md:py-0 pt-12 pb-12 relative items-center justify-center">

<div className="aspect-square flex w-full max-w-[400px] relative items-center justify-center">

<div className="orbit-ring border-slate-50/75 border rounded-full absolute top-0 right-0 bottom-0 left-0"></div>
<div className="border-dashed orbit-ring border-green-500/70 border rounded-full absolute top-[15%] right-[15%] bottom-[15%] left-[15%]" style={{animationDirection: 'reverse', animationDuration: '30s'}}></div>

<div className="flex z-10 bg-neutral-900 w-32 h-32 border-white/20 border rounded-full relative shadow-[0_0_50px_rgba(255,255,255,0.05)] items-center justify-center">
<div className="text-center">
<div className="text-2xl font-bold text-white tracking-tighter" style={{}}>87.2%</div>
<div className="text-[9px] text-neutral-500 uppercase tracking-widest mt-1">Accuracy</div>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-[120%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="absolute w-px h-[120%] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
<div className="absolute w-[80%] h-px bg-white/5 rotate-45"></div>
<div className="absolute w-[80%] h-px bg-white/5 -rotate-45"></div>
</div>

<div className="animate-pulse bg-white opacity-50 w-2 h-2 rounded-full absolute top-1/4 left-1/4"></div>
<div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-30"></div>
</div>
</div>

<div className="md:col-span-3 space-y-4 flex flex-col justify-center text-right">
<div className="glass-panel border-r-white/20 hover:border-r-white transition-all group border-indigo-300 rounded-lg border-r-2 pt-5 pr-5 pb-5 pl-5 grayscale-0">
<div className="flex justify-end items-center gap-3 mb-2">
<span className="text-xs font-medium text-white">Dopamine Triggers</span>
<svg className="text-neutral-500 group-hover:text-white transition-colors" data-icon-set="lucide" data-lucide="zap" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-[11px] leading-normal text-neutral-500">
                            Identify moments creating positive reward loop reinforcement.
                        </p>
</div>
<div className="glass-panel border-r-white/20 hover:border-r-white transition-all group border-orange-300 rounded-lg border-r-2 pt-5 pr-5 pb-5 pl-5">
<div className="flex justify-end items-center gap-3 mb-2">
<span className="text-xs font-medium text-white">Trust Vectors</span>
<svg className="text-neutral-500 group-hover:text-white transition-colors" data-icon-set="lucide" data-lucide="shield" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-[11px] text-neutral-500 leading-normal">
                            Quantify perceived authenticity and authority signals.
                        </p>
</div>
<div className="glass-panel border-r-white/20 hover:border-r-white transition-all group border-teal-300 rounded-lg border-r-2 pt-5 pr-5 pb-5 pl-5">
<div className="flex justify-end items-center gap-3 mb-2">
<span className="text-xs font-medium text-white">Recall Probability</span>
<svg className="text-neutral-500 group-hover:text-white transition-colors" data-icon-set="lucide" data-lucide="bookmark" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-[11px] text-neutral-500 leading-normal">
                            Estimate 24-hour brand recall rates based on impact.
                        </p>
</div>
</div>
</div>

<div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[10px] text-neutral-500 font-mono">
<div>Model: LUNARA_PERCEPTION_V4</div>
<div className="flex gap-4 mt-2 md:mt-0">
<span className="">Latency: 42ms</span>
<span className="">Context Window: 128k</span>
<span>Multimodal: True</span>
</div>
</div>
</div>
</section>

<section className="border-y bg-neutral-950 border-white/5 pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4">LunarAds — Applied Perception Intelligence for Advertising</h2>
<p className="text-neutral-400">Before scaling Lunara into a full perception-modeling foundation model, we deployed its core architecture inside LunarAds, a small-scale system designed specifically for short-form advertising.

LunarAds is where we learned that perception can be modeled.
Lunara is where we scale that insight to every form of media.</p>
</div>

<div className="glass-panel rounded-xl border border-white/10 overflow-hidden shadow-2xl lunar-glow">

<div className="h-12 border-b border-white/10 flex items-center px-4 gap-4 bg-black/40">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
</div>
<div className="h-6 w-px bg-white/10 mx-2"></div>
<span className="text-xs text-neutral-400 font-mono" style={{}}>analysis_9924.json</span>
<div className="flex-grow"></div>
<button className="text-xs font-medium text-black bg-white rounded pt-1 pr-3 pb-1 pl-3 cursor-pointer" onclick="window.location.href='https://www.lunarads.io'" role="button">Check It Out</button>
</div>
<div className="grid grid-cols-12 min-h-[600px] bg-black">

<div className="col-span-12 md:col-span-2 hidden md:block border-white/10 border-r pt-4 pr-4 pb-4 pl-4 space-y-6">
<div className="space-y-2">
<p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">Metrics</p>
<div className="flex items-center gap-3 text-sm text-white bg-white/5 p-2 rounded">
<svg className="text-neutral-400" data-icon-set="lucide" data-lucide="activity" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Summary
                            </div>
<div className="flex items-center gap-3 text-sm text-neutral-400 hover:text-white p-2 rounded transition-colors">
<svg className="text-neutral-400" data-icon-set="lucide" data-lucide="users" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg> Demographics
                            </div>
<div className="flex items-center gap-3 text-sm text-neutral-400 hover:text-white p-2 rounded transition-colors">
<svg className="text-neutral-400" data-icon-set="lucide" data-lucide="map" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Perception
                            </div>
</div>
</div>

<div className="col-span-12 md:col-span-7 pt-8 pr-8 pb-8 pl-8">
<div className="flex mb-8 items-end justify-between">
<div className="">
<h3 className="text-lg font-medium text-white">Campaign_Launch_V3.mp4</h3>
<p className="text-xs text-neutral-500 mt-1">Uploaded 2h ago • Duration: 00:30</p>
</div>
<div className="text-right">
<div className="text-4xl font-medium text-white tracking-tight">53</div>
<div className="uppercase text-xs text-neutral-400 tracking-widest mt-1">Predicted Conversions</div>
</div>
</div>

<div className="w-full h-48 bg-neutral-900 rounded-lg border border-white/5 relative mb-6 overflow-hidden flex items-center justify-center">
<div className="flex gap-px opacity-30 pr-1 pl-1 absolute top-0 right-0 bottom-0 left-0 gap-x-px gap-y-px items-end">

<div className="bg-red-500/75 w-full h-1/3"></div>
<div className="bg-lime-400/75 w-full h-2/3"></div>
<div className="bg-lime-400/75 w-full h-full"></div>
<div className="bg-yellow-300/80 w-full h-1/2"></div>
<div className="bg-lime-400/75 w-full h-3/4"></div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="glass-panel p-4 rounded-lg">
<p className="text-xs text-neutral-500 mb-2 uppercase">Emotional Valence</p>
<div className="h-24 w-full flex items-end gap-1">
<div className="flex-1 bg-neutral-800 h-[40%] rounded-sm"></div>
<div className="flex-1 bg-neutral-800 h-[60%] rounded-sm"></div>
<div className="flex-1 bg-white h-[90%] rounded-sm shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
<div className="flex-1 bg-neutral-700 h-[70%] rounded-sm"></div>
<div className="flex-1 bg-neutral-800 h-[50%] rounded-sm"></div>
</div>
</div>
<div className="glass-panel p-4 rounded-lg">
<p className="text-xs text-neutral-500 mb-2 uppercase">Retention Forecast</p>
<div className="relative h-24 w-full">
<svg className="stroke-white fill-none stroke-[0.5] overflow-visible w-[284px] h-[96px]" data-icon-replaced="true" strokeWidth="2" style={{width: '284px', height: '96px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 100 40">
<path className="" d="M0 10 Q 20 5, 40 20 T 100 5"></path>
<path className="stroke-neutral-700 stroke-[0.5] dashed" d="M0 35 Q 30 35, 50 15 T 100 10"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-3 border-l border-white/10 p-6 bg-neutral-950/50">
<p className="uppercase text-xs font-medium text-neutral-500 tracking-wider mb-4">Optimization</p>
<div className="space-y-4">
<div className="flex gap-3 gap-x-3 gap-y-3 items-start">
<svg className="text-white mt-0.5 shrink-0" data-icon-set="lucide" data-lucide="check-circle" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<div className="">
<p className="text-xs font-medium text-white">Strong Opening Hook</p>
<p className="text-[10px] text-neutral-500 mt-1">First 3s retention predicted &gt; 85%.</p>
</div>
</div>
<div className="flex gap-3 items-start">
<svg className="text-neutral-400 mt-0.5 shrink-0" data-icon-set="lucide" data-lucide="alert-circle" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4m0 4h.01"></path></g></svg>
<div className="">
<p className="text-xs font-medium text-neutral-300">Pacing issue at 0:12</p>
<p className="text-[10px] text-neutral-500 mt-1">Drop in visual energy detected.</p>
</div>
</div>
<div className="flex gap-3 items-start">
<svg className="text-white mt-0.5 shrink-0" data-icon-set="lucide" data-lucide="zap" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div className="">
<p className="text-xs font-medium text-white">Audio Sync High</p>
<p className="text-[10px] text-neutral-500 mt-1">Beat alignment maximizes impact.</p>
</div>
</div>
</div>
<div className="border-white/10 border-t mt-8 pt-6">
<p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">Predicted Reach</p>
<div className="text-2xl font-medium text-white">4.2M <span className="text-xs text-neutral-500 font-normal">est. views</span></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-950 pt-24 pb-24" id="how-it-works">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight mb-16 text-center">From File to Forecast</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 shadow-lg shadow-white/5">
<svg className="text-white" data-icon-set="lucide" data-lucide="upload-cloud" height="32" style={{}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 13v8m-8-6.101A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17l4-4l4 4"></path></g></svg>
</div>
<h3 className="text-sm font-semibold uppercase tracking-wide mb-2">1. Upload Media</h3>
<p className="text-sm text-neutral-400 max-w-[200px]">MP4, social links, lectures, training clips, or civic messages.
Lunara ingests any audiovisual format for perceptual analysis.</p>
</div>

<div className="z-10 flex flex-col text-center relative items-center">
<div className="w-24 h-24 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 shadow-lg shadow-white/5">
<svg className="text-white" data-icon-set="lucide" data-lucide="sparkles" height="32" style={{}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<h3 className="text-sm font-semibold uppercase tracking-wide mb-2">2. AI Analysis</h3>
<p className="text-sm text-neutral-400 max-w-[200px]">The system evaluates hundreds of cognitive and perceptual signals—
including pacing, visual saliency, linguistic complexity, emotional tone,
audio dynamics, and cognitive-load spikes.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 shadow-lg shadow-white/5">
<svg className="text-white" data-icon-set="lucide" data-lucide="trending-up" height="32" style={{}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
</div>
<h3 className="text-sm font-semibold uppercase tracking-wide mb-2">3. Receive Predictions</h3>
<p className="text-sm text-neutral-400 max-w-[200px]">Get clarity scores, attention-drop predictions, emotional activation curves,
and demographic-specific comprehension insights—all before the content is shown.</p>
</div>
</div>
</div>
</section>

<section className="bg-neutral-950/50 pt-24 pb-24" id="use-cases">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight mb-12">Designed for Impact</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="hover:bg-white/5 transition-all cursor-default border-white/10 border rounded-lg pt-6 pr-6 pb-6 pl-6">
<h4 className="font-medium text-white mb-2">Public Health &amp; Agencies</h4>
<p className="text-sm text-neutral-400">Evaluate clarity, comprehension, and attention risks in safety messages, instructions, and public-health communications before they are released.</p>
</div>
<div className="p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-all cursor-default">
<h4 className="font-medium text-white mb-2">Creators &amp; Communicators</h4>
<p className="text-sm text-neutral-400">Improve narrative flow, emotional tone, pacing, and clarity to ensure your message is interpreted as intended across diverse audiences.</p>
</div>
<div className="hover:bg-white/5 transition-all cursor-default border-white/10 border rounded-lg pt-6 pr-6 pb-6 pl-6">
<h4 className="font-medium text-white mb-2">Education</h4>
<p className="text-sm text-neutral-400">Forecast where learners may experience cognitive overload, confusion, or drop-off. Support more accessible and equitable learning materials.</p>
</div>
<div className="hover:bg-white/5 transition-all cursor-default border-white/10 border rounded-lg pt-6 pr-6 pb-6 pl-6">
<h4 className="font-medium text-white mb-2">Civic Information &amp; Advocacy</h4>
<p className="text-sm text-neutral-400">Assess message clarity, emotional interpretation, and potential misperception to improve voter comprehension, transparency, and public trust.
</p>
</div>
</div>
</div>
</section>

<section className="bg-stone-950 border-white/5 border-t pt-24 pb-24">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="">
<h2 className="text-3xl font-medium tracking-tight mb-6">Why Lunara?</h2>
<p className="leading-relaxed text-lg font-light text-neutral-400">We are not building another media tool—we are building the world’s first computational model of human perception. While others generate or optimize content, Lunara understands how content is actually perceived across age, literacy, cultural, and cognitive differences.

Lunara is groundbreaking because it transforms decades of cognitive science into a predictive, scalable AI system—something the field has never had access to before.</p>
</div>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1"><svg className="w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="database" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg></div>
<div className="">
<h4 className="font-medium text-white">Foundational Perception Dataset</h4>
<p className="text-sm text-neutral-400 mt-1">Trained on tens of thousands of labeled media assets paired with psychometric constructs, cognitive-event signals, and multimodal saliency features.
This dataset—and the mapping between perceptual science and multimodal AI—
is scientifically unique and practically impossible to recreate.

It forms the backbone of a new scientific category: Perception Intelligence.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1"><svg className="w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="brain" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg></div>
<div className="">
<h4 className="font-medium text-white">A New Class of Infrastructure</h4>
<p className="text-sm text-neutral-400 mt-1">Lunara is built as a scalable research and inference system that models temporal attention, emotional activation, cognitive-load shifts, clarity versus confusion, and demographic perception differences. This foundation enables Lunara to serve as core infrastructure for education, public health, civic communication, accessibility, and human-factors media analysis. What began as a small applied system (LunarAds) is now a 15-month roadmap toward a fully autonomous perception-modeling platform—capable of scoring, explaining, and predicting human interpretation at scale.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1"><svg className="text-white" data-icon-set="lucide" data-lucide="layers" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg></div>
<div className="">
<h4 className="font-medium text-white">The Breakthrough</h4>
<p className="text-sm text-neutral-400 mt-1">For the first time, communicators can understand:
“How will people perceive this?”
before content is deployed, tested, or seen.

This is why Lunara is not an AI product.
It is new scientific infrastructure for the future of human-aligned media.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-950 border-white/10 border-t border-b pt-20 pb-20">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">Lunara is the future of creative decision-making.</h2>
<p className="text-neutral-400 mb-8">Lunara is engineered as a scalable perception-intelligence system that models how humans actually interpret media—tracking attention shifts, emotional activation, cognitive load, clarity, and demographic variance in real time. This positions Lunara to become foundational infrastructure across education, public health, civic communication, accessibility, and safety—markets that collectively exceed $160B in annual spend. What began as a small applied system (LunarAds) has evolved into a 15-month roadmap toward the first autonomous perception-modeling platform, capable of scoring, explaining, and predicting human interpretation at enterprise and societal scale. Early investors have an opportunity to back the company defining a completely new category of AI.</p>
<a className="inline-block hover:bg-neutral-200 transition-colors text-sm font-medium text-black bg-white rounded-lg pt-3 pr-8 pb-3 pl-8" href="#">Become An Investor </a>
</div>
</section>

<footer className="overflow-hidden text-xs text-neutral-500 bg-black pt-12 pb-12 relative">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
<div className="flex items-center gap-2">
<div className="bg-center w-5 h-5 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/031b51b2-2a2d-419a-b841-e50239caeaa3_3840w.png?w=800&amp;q=80)] bg-cover rounded-full"></div>
<span className="font-medium text-white tracking-widest uppercase">Lunara</span>
</div>
<div className="flex gap-6">
</div>
<div>
                © 2024 Lunara Technologies Corp.
            </div>
</div>
</footer>

    </>
  );
}
