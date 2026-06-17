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



        // Optional: Close other details when one opens
        const details = document.querySelectorAll("details");
        details.forEach((targetDetail) => {
            targetDetail.addEventListener("click", () => {
                details.forEach((detail) => {
                    if (detail !== targetDetail) {
                        detail.removeAttribute("open");
                    }
                });
            });
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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 flex items-center justify-center text-white">
<iconify-icon className="text-xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-white font-geist">Vyrlo</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#workflow">How it Works</a>
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<button className="text-xs font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all rounded-full px-4 py-1.5">
                    Get Started
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-20 overflow-hidden">

<div className="absolute inset-0 z-0 bg-grid"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-[120px] opacity-40 rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] mb-8 backdrop-blur-sm animate-fade-in-up">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
</span>
<span className="text-[11px] font-medium tracking-wide text-gray-300 uppercase">New: Sora AI Integration</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 text-balance leading-[1.1]">
                The complete toolkit for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">faceless creators.</span>
</h1>
<p className="text-lg text-gray-400 max-w-xl mb-10 text-balance leading-relaxed">
                Generate scripts, create AI videos, remove watermarks, and analyze competitors. Nine powerful tools in one unified workspace.
            </p>

<div className="flex flex-col sm:flex-row items-center gap-6">

<div className="inline-block group relative">
<button className="group inline-flex min-w-[160px] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-gradient text-sm font-medium text-white/90 hover:text-white tracking-tight bg-white/5 backdrop-blur-xl rounded-full py-3.5 px-6 relative items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(139,92,246,0.3)]">
<span className="font-semibold">Start Creating</span>
<iconify-icon className="text-lg transition-transform group-hover:translate-x-0.5" icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
<span aria-hidden="true" className="transition-all duration-300 group-hover:opacity-80 opacity-20 w-[70%] h-[1px] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(139, 92, 246, .55), rgba(139, 92, 246, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>

<div className="inline-block group relative">
<button className="group inline-flex min-w-[140px] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-gradient text-sm font-medium text-gray-400 hover:text-white tracking-tight bg-white/[0.02] backdrop-blur-xl rounded-full py-3.5 px-6 relative items-center justify-center gap-2 hover:bg-white/5">
<iconify-icon className="text-lg" icon="solar:play-circle-linear" strokeWidth="2"></iconify-icon>
<span className="relative">Watch demo</span>
</button>
</div>
</div>

<div className="mt-20 w-full max-w-5xl relative group">
<div className="absolute -inset-1 bg-gradient-to-b from-blue-500/20 to-transparent opacity-20 blur-xl rounded-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
<div className="relative rounded-xl border border-white/10 bg-[#0A0B10] shadow-2xl overflow-hidden aspect-[16/10] flex flex-col">

<div className="h-10 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
</div>
</div>

<div className="flex-1 flex overflow-hidden">

<div className="w-60 border-r border-white/5 p-4 flex flex-col gap-2 bg-[#05060A] hidden sm:flex">
<div className="h-8 w-24 bg-white/5 rounded-md mb-6"></div>
<div className="h-8 w-full bg-blue-500/10 border border-blue-500/20 rounded-md"></div>
<div className="h-8 w-full bg-transparent rounded-md"></div>
<div className="h-8 w-full bg-transparent rounded-md"></div>
</div>

<div className="flex-1 p-8 bg-[#020306]">
<div className="grid grid-cols-3 gap-4 mb-8">
<div className="h-24 bg-white/5 rounded-lg border border-white/5"></div>
<div className="h-24 bg-white/5 rounded-lg border border-white/5"></div>
<div className="h-24 bg-white/5 rounded-lg border border-white/5"></div>
</div>
<div className="w-full h-64 bg-white/[0.02] rounded-xl border border-white/5 flex items-center justify-center">
<div className="text-center space-y-2">
<iconify-icon className="text-3xl text-white/20" icon="solar:clapperboard-edit-linear"></iconify-icon>
<div className="text-sm text-gray-600">Video Generation in Progress...</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#020306] to-transparent"></div>
</div>
</div>

</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#020306]" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Everything you need to go viral.</h2>
<p className="text-gray-400">Stop juggling subscriptions. Access the entire faceless content pipeline in one refined interface.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="md:col-span-2 md:row-span-2 group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 overflow-hidden transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:bg-white/[0.04] hover:shadow-blue-500/5">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="mb-8">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
<iconify-icon className="text-xl" icon="solar:videocamera-record-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Sora AI Generator</h3>
<p className="text-sm text-gray-400 max-w-sm">Create cinematic, high-retention shorts from a single text prompt. The model understands physics and lighting.</p>
</div>

<div className="w-full aspect-[16/9] bg-[#0A0B10] rounded-xl border border-white/10 relative overflow-hidden group-hover:border-blue-500/30 transition-colors">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>

<div className="absolute top-4 left-4 right-4 h-8 bg-white/5 rounded-lg border border-white/5 flex items-center px-3 gap-2">
<div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
<div className="h-1.5 w-32 bg-white/10 rounded-full"></div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
<div className="h-full bg-blue-500 w-0 group-hover:w-2/3 transition-all duration-[2000ms] ease-out"></div>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
<iconify-icon className="text-xl" icon="solar:play-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 hover:scale-[1.02] hover:bg-white/[0.04] hover:shadow-2xl overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-500/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 border border-purple-500/20">
<iconify-icon className="text-xl" icon="solar:microphone-3-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Neural Voice</h3>
<p className="text-sm text-gray-400 mb-6">Unlimited ultra-realistic AI voiceovers in 29 languages.</p>

<div className="h-12 flex items-center gap-1 justify-center opacity-50 group-hover:opacity-100 transition-opacity">
<div className="w-1 bg-purple-500 h-[20%] rounded-full audio-bar"></div>
<div className="w-1 bg-purple-500 h-[40%] rounded-full audio-bar"></div>
<div className="w-1 bg-purple-500 h-[80%] rounded-full audio-bar"></div>
<div className="w-1 bg-purple-500 h-[50%] rounded-full audio-bar"></div>
<div className="w-1 bg-purple-500 h-[30%] rounded-full audio-bar"></div>
<div className="w-1 bg-purple-500 h-[60%] rounded-full audio-bar"></div>
<div className="w-1 bg-purple-500 h-[90%] rounded-full audio-bar"></div>
<div className="w-1 bg-purple-500 h-[40%] rounded-full audio-bar"></div>
<div className="w-1 bg-purple-500 h-[20%] rounded-full audio-bar"></div>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 hover:scale-[1.02] hover:bg-white/[0.04] hover:shadow-2xl overflow-hidden">
<div className="absolute -right-10 -bottom-10 w-32 h-32 bg-pink-500/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 mb-4 border border-pink-500/20">
<iconify-icon className="text-xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Trend Spy</h3>
<p className="text-sm text-gray-400 mb-4">Real-time retention analysis of viral clips.</p>

<div className="h-16 w-full relative flex items-end gap-1">
<div className="w-full bg-pink-500/10 h-[30%] rounded-t-sm group-hover:h-[45%] transition-all duration-500"></div>
<div className="w-full bg-pink-500/10 h-[50%] rounded-t-sm group-hover:h-[75%] transition-all duration-500 delay-75"></div>
<div className="w-full bg-pink-500/10 h-[40%] rounded-t-sm group-hover:h-[60%] transition-all duration-500 delay-100"></div>
<div className="w-full bg-pink-500/20 h-[70%] rounded-t-sm group-hover:h-[90%] transition-all duration-500 delay-150 relative">
<div className="absolute -top-1 right-0 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100"></div>
</div>
</div>
</div>

<div className="md:col-span-3 group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 hover:bg-white/[0.04] flex flex-col md:flex-row items-center gap-8 overflow-hidden">
<div className="flex-1 relative z-10">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 border border-blue-500/20">
<iconify-icon className="text-xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Auto-Cleanup &amp; Remix</h3>
<p className="text-sm text-gray-400 max-w-lg">Remove watermarks, silence, and baked-in captions automatically. Get clean footage ready for remixing in seconds.</p>
</div>

<div className="flex gap-4 opacity-50 group-hover:opacity-90 transition-opacity">
<div className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-xs font-mono text-gray-300 group-hover:-translate-y-2 transition-transform duration-500">
<span className="text-purple-400">del</span> watermark.png
                        </div>
<div className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-xs font-mono text-gray-300 group-hover:-translate-y-1 transition-transform duration-500 delay-75">
<span className="text-pink-400">cut</span> silence.wav
                        </div>
<div className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-xs font-mono text-gray-300 group-hover:translate-y-0 transition-transform duration-500 delay-150">
<span className="text-purple-400">gen</span> captions.srt
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#020306] border-t border-white/5 relative overflow-hidden" id="workflow">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-[#020306] to-[#020306]"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<span className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-2 block">Workflow</span>
<h2 className="text-3xl font-semibold text-white tracking-tight">From idea to viral in 3 steps.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-white/5 via-white/20 to-white/5 border-t border-dashed border-white/10"></div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-[#0A0B10] border border-white/10 flex items-center justify-center mb-6 z-10 group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)] transition-all duration-300">
<iconify-icon className="text-3xl text-white/50 group-hover:text-white transition-colors" icon="solar:document-add-linear"></iconify-icon>
<div className="absolute -right-2 -top-2 w-6 h-6 rounded-full bg-white/10 border border-[#0A0B10] flex items-center justify-center text-xs font-bold text-white">1</div>
</div>
<h3 className="text-lg font-medium text-white mb-2">Input Topic</h3>
<p className="text-sm text-gray-400">Paste a link or type a topic. Our AI scrapes relevant data and trending hooks.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-[#0A0B10] border border-white/10 flex items-center justify-center mb-6 z-10 group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)] transition-all duration-300 delay-100">
<iconify-icon className="text-3xl text-white/50 group-hover:text-white transition-colors" icon="solar:magic-stick-3-linear"></iconify-icon>
<div className="absolute -right-2 -top-2 w-6 h-6 rounded-full bg-white/10 border border-[#0A0B10] flex items-center justify-center text-xs font-bold text-white">2</div>
</div>
<h3 className="text-lg font-medium text-white mb-2">AI Generation</h3>
<p className="text-sm text-gray-400">Vyrlo generates the script, voiceover, and matches it with Sora-generated visuals.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-[#0A0B10] border border-white/10 flex items-center justify-center mb-6 z-10 group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)] transition-all duration-300 delay-200">
<iconify-icon className="text-3xl text-white/50 group-hover:text-white transition-colors" icon="solar:upload-track-linear"></iconify-icon>
<div className="absolute -right-2 -top-2 w-6 h-6 rounded-full bg-white/10 border border-[#0A0B10] flex items-center justify-center text-xs font-bold text-white">3</div>
</div>
<h3 className="text-lg font-medium text-white mb-2">Publish &amp; Scale</h3>
<p className="text-sm text-gray-400">Export in 4K. Use our auto-scheduler to post at peak times.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative" id="pricing">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">Simple pricing.</h2>
<p className="text-gray-400">Start for free. Scale when you go viral.</p>
</div>

<div className="inline-flex rounded-full p-1 border border-white/10 bg-white/5">
<button className="px-5 py-2 rounded-full text-xs font-medium bg-white/10 text-white shadow-sm">Monthly</button>
<button className="px-5 py-2 rounded-full text-xs font-medium text-gray-400 hover:text-white transition-colors">Yearly (-20%)</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col hover:border-white/10 transition-colors">
<div className="mb-6">
<span className="text-sm font-medium text-gray-400 block mb-2">Starter</span>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white tracking-tight">$0</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon>
                            3 one-time credits
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon>
                            Basic video tools
                        </li>
</ul>
<a className="w-full py-3 rounded-full border border-white/10 text-sm font-medium text-white hover:bg-white/5 transition-colors text-center" href="#">Get Started</a>
</div>

<div className="p-8 rounded-3xl border border-blue-500/30 bg-blue-500/[0.03] flex flex-col relative hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.15)] transition-all">
<div className="absolute -top-3 left-8 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Popular</div>
<div className="mb-6">
<span className="text-sm font-medium text-blue-300 block mb-2">Creator</span>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white tracking-tight">$19</span>
<span className="text-sm text-gray-500">/mo</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-blue-500" icon="solar:check-circle-bold"></iconify-icon>
                            700 credits/month
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-blue-500" icon="solar:check-circle-bold"></iconify-icon>
                            Sora AI Video Access
                        </li>
</ul>
<button className="w-full py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors shadow-lg shadow-blue-900/20">Upgrade Now</button>
</div>

<div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col hover:border-white/10 transition-colors">
<div className="mb-6">
<span className="text-sm font-medium text-gray-400 block mb-2">Agency</span>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white tracking-tight">$49</span>
<span className="text-sm text-gray-500">/mo</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon>
                            2500 credits/month
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon>
                            Priority processing
                        </li>
</ul>
<a className="w-full py-3 rounded-full border border-white/10 text-sm font-medium text-white hover:bg-white/5 transition-colors text-center" href="#">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="sm:py-24 pt-16 pb-16 border-t border-white/5 overflow-hidden">
<div className="mb-12 text-center">
<p className="text-xs uppercase text-blue-400 tracking-widest mb-2 font-geist font-medium">
            Community
            </p>
<h2 className="text-3xl sm:text-4xl font-geist tracking-tighter font-semibold text-white">
            Creator Highlights
            </h2>
</div>
<div className="relative flex items-center justify-center py-12 sm:py-20" style={{minHeight: '450px'}}>
<div className="container max-w-full" style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>

<div className="glass" style={{position: 'relative', width: '340px', height: '340px', borderRadius: '1rem', margin: '0px -50px', transform: 'rotate(-10deg)', zIndex: '10'}}>
<div className="absolute inset-4 rounded-xl bg-[#0A0B10]/90 text-white shadow-2xl border border-white/10 overflow-hidden backdrop-blur-sm">
<div className="p-6">
<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-white/5 border border-white/10 mb-4 text-blue-400">
<iconify-icon icon="solar:quote-up-linear"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-gray-300 mb-4 font-geist">
                    Vyrlo completely automated my cash cow channels. I went from spending 10 hours a week to just 30 minutes.
                    </p>
<div className="pt-3 border-t border-white/5 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-xs text-white font-bold">AR</div>
<div>
<div className="text-xs font-medium text-white font-geist">
                            Alex Rivera
                        </div>
<div className="text-xs text-gray-500 font-geist">
                            YouTuber (250k Subs)
                        </div>
</div>
</div>
<div className="flex items-center gap-1">
<iconify-icon className="text-amber-400 text-xs" icon="solar:star-bold"></iconify-icon>
<span className="text-xs font-medium font-geist text-gray-400">5.0</span>
</div>
</div>
</div>
</div>
</div>

<div className="glass" style={{position: 'relative', width: '340px', height: '340px', borderRadius: '1rem', margin: '0px -50px', transform: 'rotate(6deg)', zIndex: '10'}}>
<div className="absolute inset-4 rounded-xl bg-[#0A0B10]/90 text-white shadow-xl border border-white/10 overflow-hidden backdrop-blur-sm">
<div className="p-6">
<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-white/5 border border-white/10 mb-4 text-blue-400">
<iconify-icon icon="solar:quote-up-linear"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-gray-300 mb-4 font-geist">
                    The Sora integration is a game changer. The video quality is indistinguishable from stock footage but tailored to my script.
                    </p>
<div className="pt-3 border-t border-white/5 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-xs text-white font-bold">MW</div>
<div>
<div className="text-xs font-medium text-white font-geist">
                            Marcus Webb
                        </div>
<div className="text-xs text-gray-500 font-geist">
                            TikTok Agency Owner
                        </div>
</div>
</div>
<div className="flex items-center gap-1">
<iconify-icon className="text-amber-400 text-xs" icon="solar:star-bold"></iconify-icon>
<span className="text-xs font-medium font-geist text-gray-400">5.0</span>
</div>
</div>
</div>
</div>
</div>

<div className="glass" style={{position: 'relative', width: '340px', height: '340px', borderRadius: '1rem', margin: '0px -50px', transform: 'rotate(-2deg)', zIndex: '20'}}>
<div className="absolute inset-4 rounded-xl bg-[#0E1016] text-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden">
<div className="p-6">
<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-white/5 border border-white/10 mb-4 text-blue-400">
<iconify-icon icon="solar:quote-up-linear"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-gray-300 mb-4 font-geist">
                    I've tried all the faceless tools. Vyrlo is the only one that feels like a professional workspace rather than a cheap gimmick.
                    </p>
<div className="pt-3 border-t border-white/5 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-xs text-white font-bold">NP</div>
<div>
<div className="text-xs font-medium text-white font-geist">
                            Nina Patel
                        </div>
<div className="text-xs text-gray-500 font-geist">
                            Content Strategist
                        </div>
</div>
</div>
<div className="flex items-center gap-1">
<iconify-icon className="text-amber-400 text-xs" icon="solar:star-bold"></iconify-icon>
<span className="text-xs font-medium font-geist text-gray-400">5.0</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#020306]" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-8">Questions?</h2>
<div className="space-y-2">
<details className="group rounded-2xl bg-white/[0.02] border border-white/5 open:bg-white/[0.04] transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-gray-300 text-sm hover:text-white">
<span>How do credits work?</span>
<span className="transition-transform group-open:rotate-180">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed">
                        Credits are the currency used for AI generation. 1 video = 3 credits. Watermark removal = 1 credit. Unused credits roll over for 30 days.
                    </div>
</details>
<details className="group rounded-2xl bg-white/[0.02] border border-white/5 open:bg-white/[0.04] transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-gray-300 text-sm hover:text-white">
<span>Can I cancel anytime?</span>
<span className="transition-transform group-open:rotate-180">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed">
                        Yes, you can cancel your subscription at any time from the dashboard. You will retain access until the end of your billing cycle.
                    </div>
</details>
<details className="group rounded-2xl bg-white/[0.02] border border-white/5 open:bg-white/[0.04] transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-gray-300 text-sm hover:text-white">
<span>Is the content copyright free?</span>
<span className="transition-transform group-open:rotate-180">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed">
                        Yes, all content generated via our AI tools comes with a commercial license for use on platforms like YouTube, TikTok, and Instagram.
                    </div>
</details>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-[#020306]">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 flex items-center justify-center text-gray-500">
<iconify-icon icon="solar:bolt-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-500">Vyrlo Inc.</span>
</div>
<div className="flex gap-6">
<a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>


    </>
  );
}
