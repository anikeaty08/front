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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[50vh] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none z-0"></div>

<nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-sm font-medium tracking-tight text-white flex items-center gap-2" href="#">
<div className="w-4 h-4 rounded-sm bg-gradient-to-br from-zinc-300 to-zinc-600 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
</div>
                AI Film Accelerator
            </a>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-light text-zinc-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm font-light text-zinc-400 hover:text-white transition-colors" href="#curriculum">Curriculum</a>
<a className="text-sm font-light text-zinc-400 hover:text-white transition-colors" href="#vault">Vault</a>
</div>
<a className="text-sm font-medium text-black bg-white px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#community">
                    Join Waitlist
                </a>
</div>
</div>
</nav>

<section className="pt-40 md:pt-56 pb-20 md:pb-32 relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-screen">
<div className="max-w-5xl mx-auto w-full relative flex flex-col items-center">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/5 backdrop-blur-md mb-8">
<div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
<span className="text-xs font-normal text-zinc-300 tracking-wide">The Creator Platform</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 mb-6 leading-[1.1] max-w-4xl">
                Turn real stories into cinematic AI videos.
            </h1>
<p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mb-10">
                AI Film Accelerator teaches creators how to turn real-world stories into engaging cinematic videos using modern AI tools, storytelling frameworks, and simple workflows.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-24">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black hover:bg-zinc-200 px-6 py-3 rounded-full font-medium text-sm transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]" href="#community">
                    Join the Waitlist
                </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-900/50 hover:bg-zinc-800 border border-white/5 text-white px-6 py-3 rounded-full font-medium text-sm transition-all backdrop-blur-sm" href="#curriculum">
                    View Pipeline
                    <iconify-icon className="text-base" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>

<div className="w-full max-w-4xl relative mx-auto">
<div className="absolute inset-0 bg-white/5 blur-[80px] -z-10 rounded-full"></div>
<div className="relative w-full aspect-[16/10] bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">

<div className="h-10 border-b border-white/5 flex items-center px-4 bg-white/[0.01]">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
</div>
<div className="mx-auto text-xs font-light text-zinc-500 tracking-wide">
                            final_render_v3.mp4
                        </div>
<div className="w-10"></div> 
</div>

<div className="flex-1 relative bg-black flex items-center justify-center">
<button className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:scale-105 transition-all shadow-xl backdrop-blur-md">
<iconify-icon className="text-2xl translate-x-0.5" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 relative z-10 bg-black" id="about">
<div className="max-w-4xl mx-auto text-center">
<p className="text-xs font-medium text-zinc-500 tracking-widest uppercase mb-8">
                Mission Statement
            </p>
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white leading-tight mb-12">
                AI Film Accelerator is a creator platform strictly focused on <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600">cinematic AI storytelling.</span>
</h2>
<div className="grid md:grid-cols-2 gap-8 text-sm md:text-base text-zinc-400 font-light leading-relaxed text-left">
<p>
                    We break down the exact process used to turn real-world stories into engaging content. From in-depth story research and high-retention scriptwriting to precise visual generation, animation, and final editing.
                </p>
<p>
                    Our goal is to help creators build massive, automated storytelling channels across platforms using the latest AI capabilities, removing the friction between an idea and a cinematic final cut.
                </p>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 bg-[#050505] relative z-10" id="curriculum">
<div className="max-w-6xl mx-auto">
<div className="mb-20 text-center max-w-2xl mx-auto">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">The Pipeline.</h2>
<p className="text-base text-zinc-400 font-light">Master the end-to-end workflow of creating high-retention, documentary-style short form content.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="bg-zinc-900/40 border border-white/5 p-8 rounded-3xl hover:bg-zinc-900/60 transition-colors flex flex-col justify-between h-full min-h-[280px]">
<div className="flex items-center justify-between mb-8">
<span className="text-xs font-medium text-zinc-500 bg-white/5 px-2.5 py-1 rounded-full">01</span>
<iconify-icon className="text-2xl text-zinc-500" icon="solar:map-point-search-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Find viral stories</h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed">Research and identify fascinating historical and real-world stories that inherently capture attention and keep viewers hooked.</p>
</div>
</div>

<div className="bg-zinc-900/40 border border-white/5 p-8 rounded-3xl hover:bg-zinc-900/60 transition-colors flex flex-col justify-between h-full min-h-[280px]">
<div className="flex items-center justify-between mb-8">
<span className="text-xs font-medium text-zinc-500 bg-white/5 px-2.5 py-1 rounded-full">02</span>
<iconify-icon className="text-2xl text-zinc-500" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Cinematic scripts</h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed">Structure complex stories into engaging short-form narratives engineered for extremely high viewer retention.</p>
</div>
</div>

<div className="bg-zinc-900/40 border border-white/5 p-8 rounded-3xl hover:bg-zinc-900/60 transition-colors flex flex-col justify-between h-full min-h-[280px]">
<div className="flex items-center justify-between mb-8">
<span className="text-xs font-medium text-zinc-500 bg-white/5 px-2.5 py-1 rounded-full">03</span>
<iconify-icon className="text-2xl text-zinc-500" icon="solar:gallery-wide-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Generate visuals</h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed">Prompt and curate high-quality cinematic imagery tailored perfectly to your narrative style and historical accuracy.</p>
</div>
</div>

<div className="bg-zinc-900/40 border border-white/5 p-8 rounded-3xl hover:bg-zinc-900/60 transition-colors flex flex-col justify-between h-full min-h-[280px]">
<div className="flex items-center justify-between mb-8">
<span className="text-xs font-medium text-zinc-500 bg-white/5 px-2.5 py-1 rounded-full">04</span>
<iconify-icon className="text-2xl text-zinc-500" icon="solar:play-stream-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">AI animation</h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed">Breathe life into static AI-generated images, turning them into dynamic, moving video scenes with realistic physics.</p>
</div>
</div>

<div className="bg-zinc-900/40 border border-white/5 p-8 rounded-3xl hover:bg-zinc-900/60 transition-colors flex flex-col justify-between h-full min-h-[280px]">
<div className="flex items-center justify-between mb-8">
<span className="text-xs font-medium text-zinc-500 bg-white/5 px-2.5 py-1 rounded-full">05</span>
<iconify-icon className="text-2xl text-zinc-500" icon="solar:scissors-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Advanced editing</h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed">Master sound design, pacing, and visual effects to create a seamless, professional final export.</p>
</div>
</div>

<div className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl hover:bg-white/[0.05] transition-colors flex flex-col justify-between h-full min-h-[280px] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent"></div>
<div className="flex items-center justify-between mb-8 relative z-10">
<span className="text-xs font-medium text-black bg-white px-2.5 py-1 rounded-full">06</span>
<iconify-icon className="text-2xl text-white" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Build channels</h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed">Use these storytelling frameworks to build faceless content brands, amass audiences across platforms, and successfully monetize.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 relative z-10 bg-black" id="vault">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<p className="text-xs font-medium text-zinc-500 tracking-widest uppercase mb-4">
                    The Story Vault
                </p>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
                    Real stories, reimagined.
                </h2>
<p className="text-base font-light text-zinc-400 leading-relaxed max-w-xl">
                    Our content framework focuses on historical mysteries, unbelievable true events, and fascinating real-world discoveries.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[250px] md:auto-rows-[320px]">
<div className="bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-all rounded-3xl p-8 flex flex-col justify-end relative group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-3xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
<div className="relative z-10">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-2">The man who prevented nuclear war</h3>
<div className="flex items-center gap-2 text-xs font-light text-zinc-400 mt-4 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                            Explore Story <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<div className="bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-all rounded-3xl p-8 flex flex-col justify-end relative group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-3xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
<div className="relative z-10">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-2">The Dyatlov Pass mystery</h3>
<div className="flex items-center gap-2 text-xs font-light text-zinc-400 mt-4 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                            Explore Story <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<div className="bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-all rounded-3xl p-8 flex flex-col justify-end relative group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-3xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
<div className="relative z-10">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-2">The dancing plague of 1518</h3>
<div className="flex items-center gap-2 text-xs font-light text-zinc-400 mt-4 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                            Explore Story <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<div className="bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-all rounded-3xl p-8 flex flex-col justify-end relative group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-3xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
<div className="relative z-10">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-2">The man who survived two atomic bombs</h3>
<div className="flex items-center gap-2 text-xs font-light text-zinc-400 mt-4 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                            Explore Story <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative border-t border-white/5 bg-[#050505] flex items-center justify-center" id="community">
<div className="max-w-4xl mx-auto w-full relative z-10">
<div className="bg-zinc-900/40 border border-white/10 rounded-3xl p-10 md:p-20 text-center relative overflow-hidden backdrop-blur-xl">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-white/[0.04] blur-[80px] rounded-full pointer-events-none"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-300 animate-pulse"></span>
<span className="text-xs font-light text-zinc-300">Opening Soon</span>
</div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
                    Creator community.
                </h2>
<p className="text-base text-zinc-400 font-light leading-relaxed mb-12 max-w-xl mx-auto">
                    Join our private community of creators to access step-by-step tutorials, prompt libraries, advanced workflows, and strategic monetization discussions.
                </p>

<form className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto relative">
<input className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:bg-black transition-all font-light" placeholder="Enter your email address" required="" type="email"/>
<button className="sm:w-auto w-full whitespace-nowrap bg-white text-black px-6 py-3.5 rounded-xl text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]" type="submit">
                        Join Waitlist
                    </button>
</form>
<div className="flex items-center justify-center gap-6 mt-16 pt-16 border-t border-white/5">
<a className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-sm font-light" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Instagram
                    </a>
<a className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-sm font-light" href="#">
<iconify-icon className="text-lg" icon="solar:video-frame-play-linear" style={{strokeWidth: '1.5'}}></iconify-icon> TikTok
                    </a>
<a className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-sm font-light" href="#">
<iconify-icon className="text-lg" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> YouTube
                    </a>
</div>
</div>
</div>
</section>

<footer className="py-10 px-6 border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-sm bg-gradient-to-br from-zinc-300 to-zinc-600 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
</div>
<span className="text-xs text-zinc-600 font-light">© 2024 AI Film Accelerator.</span>
</div>
<div className="flex items-center gap-6">
<a className="text-zinc-600 hover:text-white transition-colors text-xs font-light" href="#">Terms</a>
<a className="text-zinc-600 hover:text-white transition-colors text-xs font-light" href="#">Privacy</a>
<a className="text-zinc-600 hover:text-white transition-colors text-xs font-light" href="#">Contact</a>
</div>
</div>
</footer>

    </>
  );
}
