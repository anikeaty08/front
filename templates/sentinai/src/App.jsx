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
      

<nav className="fixed top-0 w-full z-50 bg-[#0B0B0F]/90 backdrop-blur-xl border-b border-[#161821]">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#4F7CFF]" height="24" icon="solar:hexagon-linear" width="24"></iconify-icon>
<span className="font-medium tracking-tight text-xl text-[#FFFFFF]">Sentinai</span>
</div>
<button className="bg-gradient-to-r from-[#4F7CFF] to-[#7A6BFF] text-[#FFFFFF] px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                Start Verifying
            </button>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 flex flex-col min-h-screen pt-32 pb-24 relative items-center justify-center">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">

<div className="relative w-full max-w-sm mx-auto lg:ml-auto">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#4F7CFF] to-[#7A6BFF] opacity-10 blur-[80px] rounded-full pointer-events-none"></div>

<div className="relative bg-[#0B0B0F] border border-[#161821] rounded-[2.5rem] p-6 shadow-2xl flex flex-col h-[600px] overflow-hidden">

<div className="flex justify-between items-center mb-12">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#FFFFFF]" height="20" icon="solar:hexagon-linear" width="20"></iconify-icon>
<span className="text-xs font-medium tracking-widest text-[#FFFFFF] uppercase">Media Core</span>
</div>
<iconify-icon className="text-[rgba(255,255,255,0.35)]" height="16" icon="solar:wi-fi-linear" width="16"></iconify-icon>
</div>

<div className="flex-1 flex flex-col items-center justify-center relative w-full">

<div className="relative w-32 h-32 flex items-center justify-center mb-8">
<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#4F7CFF] to-[#7A6BFF] opacity-30 blur-xl animate-pulse"></div>
<div className="relative z-10 w-24 h-24 rounded-full bg-[#111218] border border-[rgba(255,255,255,0.1)] flex items-center justify-center shadow-[0_0_40px_rgba(79,124,255,0.2)]">
<iconify-icon className="text-[#FFFFFF]" height="40" icon="solar:videocamera-record-linear" width="40"></iconify-icon>
</div>
</div>

<div className="text-center w-full space-y-2">
<div className="text-xs font-medium text-[rgba(255,255,255,0.6)] uppercase tracking-widest">Media Assessment</div>
<div className="text-5xl font-medium tracking-tight text-[#FFFFFF]">Deepfake</div>
<div className="flex items-center justify-center gap-2 mt-4 text-[#4F7CFF]">
<iconify-icon height="16" icon="solar:shield-check-linear" width="16"></iconify-icon>
<span className="text-sm font-medium">99.8% Confidence</span>
</div>
</div>
</div>

<div className="mt-auto pt-8 border-t border-[rgba(255,255,255,0.05)]">
<div className="flex items-end justify-between h-16 gap-1 opacity-50">
<div className="w-full bg-[#161821] rounded-t-sm h-[30%]"></div>
<div className="w-full bg-[#161821] rounded-t-sm h-[45%]"></div>
<div className="w-full bg-[#161821] rounded-t-sm h-[20%]"></div>
<div className="w-full bg-[#161821] rounded-t-sm h-[60%]"></div>
<div className="w-full bg-[#161821] rounded-t-sm h-[85%]"></div>
<div className="w-full bg-gradient-to-t from-[#4F7CFF] to-[#7A6BFF] rounded-t-sm h-[95%] shadow-[0_0_10px_rgba(79,124,255,0.5)]"></div>
<div className="w-full bg-[#161821] rounded-t-sm h-[40%]"></div>
<div className="w-full bg-[#161821] rounded-t-sm h-[30%]"></div>
</div>
<div className="flex justify-between mt-3 text-xs text-[rgba(255,255,255,0.35)] font-medium">
<span>Frame Analysis</span>
<span>Complete</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col items-start text-left">
<div className="flex items-center gap-8 mb-8">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#4F7CFF]" height="24" icon="solar:medal-ribbon-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-[rgba(255,255,255,0.6)] tracking-wide">Premium Standard</span>
</div>
<div className="hidden sm:flex items-center gap-1 text-[rgba(255,255,255,0.6)]">
<iconify-icon className="text-[#FFFFFF]" height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-[#FFFFFF]" height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-[#FFFFFF]" height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-[#FFFFFF]" height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-[#FFFFFF]" height="16" icon="solar:star-bold" width="16"></iconify-icon>
<span className="text-xs font-medium ml-2 tracking-widest uppercase">Enterprise Trusted</span>
</div>
</div>
<h1 className="text-6xl lg:text-8xl font-medium tracking-tight text-[#FFFFFF] leading-[1.05] mb-6">
                    Reality is<br/>unclear.
                </h1>
<p className="text-lg lg:text-xl text-[rgba(255,255,255,0.6)] mb-10 max-w-lg leading-relaxed font-medium">
                    So we made it obvious. Sentinai is the authoritative intelligence layer that instantly detects AI-generated images, deepfake videos, and scans social media feeds to restore absolute trust to digital content.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#4F7CFF] to-[#7A6BFF] text-[#FFFFFF] font-medium text-lg hover:opacity-90 transition-opacity">
                        Verify Media
                    </button>
<button className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-[rgba(255,255,255,0.1)] text-[#FFFFFF] font-medium text-lg hover:bg-[#111218] transition-colors">
                        View Live Scan
                    </button>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#111218] border border-[rgba(255,255,255,0.05)] rounded-full px-6 py-3 flex items-center gap-3 backdrop-blur-md w-[80%] sm:w-auto justify-center">
<div className="w-2 h-2 rounded-full bg-[#4F7CFF] animate-pulse"></div>
<span className="text-sm font-medium text-[rgba(255,255,255,0.6)] tracking-wide">
<span className="text-[#FFFFFF]">14,204,912</span> media assets and posts verified globally today
            </span>
</div>
</section>

<section className="py-40 border-t border-[rgba(255,255,255,0.02)] relative overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-[#FFFFFF]">
                The line between real and synthetic has disappeared. <span className="text-[rgba(255,255,255,0.35)]">Most viral media today has never been captured by a human lens.</span>
</h2>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-[rgba(79,124,255,0.2)] to-transparent"></div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-[#FFFFFF] mb-4">The Verification Infrastructure</h2>
<p className="text-lg text-[rgba(255,255,255,0.6)] max-w-2xl font-medium">Without validation, authenticity is assumed but rarely guaranteed. Sentinai provides the definitive answer for all media types.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-[#111218] rounded-[2rem] p-10 border border-[#161821] hover:border-[rgba(255,255,255,0.1)] transition-colors flex flex-col items-start group">
<div className="w-14 h-14 rounded-2xl bg-[#161821] flex items-center justify-center mb-8 group-hover:bg-[rgba(79,124,255,0.1)] transition-colors">
<iconify-icon className="text-[#FFFFFF]" height="24" icon="solar:camera-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#FFFFFF] mb-3">Multimodal Detection</h3>
<p className="text-lg text-[rgba(255,255,255,0.6)] leading-relaxed font-medium">Our models identify the invisible synthetic artifacts in AI images, videos, and deepfakes across all frontier generation models.</p>
</div>

<div className="bg-[#111218] rounded-[2rem] p-10 border border-[#161821] hover:border-[rgba(255,255,255,0.1)] transition-colors flex flex-col items-start group">
<div className="w-14 h-14 rounded-2xl bg-[#161821] flex items-center justify-center mb-8 group-hover:bg-[rgba(79,124,255,0.1)] transition-colors">
<iconify-icon className="text-[#FFFFFF]" height="24" icon="solar:radar-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#FFFFFF] mb-3">Social Media Scanning</h3>
<p className="text-lg text-[rgba(255,255,255,0.6)] leading-relaxed font-medium">Continuously monitor and automatically flag manipulated media and synthetic bot activity across social networks in real-time.</p>
</div>

<div className="bg-[#111218] rounded-[2rem] p-10 border border-[#161821] hover:border-[rgba(255,255,255,0.1)] transition-colors flex flex-col items-start group">
<div className="w-14 h-14 rounded-2xl bg-[#161821] flex items-center justify-center mb-8 group-hover:bg-[rgba(79,124,255,0.1)] transition-colors">
<iconify-icon className="text-[#FFFFFF]" height="24" icon="solar:layers-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#FFFFFF] mb-3">Enterprise Scale</h3>
<p className="text-lg text-[rgba(255,255,255,0.6)] leading-relaxed font-medium">Built for high-volume platforms. Validate millions of video frames and images per minute with our zero-latency API infrastructure.</p>
</div>
</div>
</section>

<section className="py-40 relative flex flex-col items-center justify-center border-y border-[rgba(255,255,255,0.02)]">
<div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F] via-[#111218] to-[#0B0B0F] opacity-50"></div>
<div className="relative z-10 text-center px-6">
<div className="text-[8rem] lg:text-[14rem] font-medium tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[rgba(255,255,255,0.1)]">
                99.8<span className="text-6xl lg:text-9xl">%</span>
</div>
<p className="text-2xl lg:text-3xl text-[rgba(255,255,255,0.6)] font-medium tracking-tight mt-8">
                Proven accuracy in detecting synthetic visual artifacts.
            </p>
</div>
</section>

<section className="py-32 max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-[#FFFFFF] mb-4">Precision in every frame.</h2>
<p className="text-lg text-[rgba(255,255,255,0.6)] font-medium">A single unified interface to scan live feeds and isolated media.</p>
</div>
<div className="bg-[#111218] border border-[#161821] rounded-[2rem] p-2 overflow-hidden relative shadow-2xl">

<div className="bg-[#0B0B0F] rounded-[1.8rem] border border-[rgba(255,255,255,0.05)] h-auto lg:h-[550px] flex flex-col lg:flex-row relative overflow-hidden">

<div className="flex-1 p-8 border-b lg:border-b-0 lg:border-r border-[rgba(255,255,255,0.05)] bg-[#0B0B0F] flex flex-col">
<div className="flex items-center gap-3 mb-8">
<iconify-icon className="text-[rgba(255,255,255,0.4)]" height="20" icon="solar:magnifer-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-[rgba(255,255,255,0.4)]">Live Social Stream Intercept...</span>
</div>

<div className="bg-[#111218] border border-[#161821] rounded-2xl p-5 flex-1 relative overflow-hidden flex flex-col justify-between">

<div className="flex items-center gap-3 mb-4 z-10">
<div className="w-10 h-10 rounded-full bg-[#161821] flex items-center justify-center">
<iconify-icon className="text-[rgba(255,255,255,0.6)]" height="20" icon="solar:user-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-[#FFFFFF]">Global News Network</div>
<div className="text-xs text-[rgba(255,255,255,0.4)]">@globalnews_live · 12m</div>
</div>
</div>

<div className="w-full bg-[#161821] rounded-xl flex-1 relative overflow-hidden flex items-center justify-center group">

<div className="absolute inset-0 bg-gradient-to-br from-[#111218] to-[#1A1C26] opacity-80"></div>
<iconify-icon className="text-[rgba(255,255,255,0.1)] relative z-0" height="48" icon="solar:gallery-linear" width="48"></iconify-icon>

<div className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b from-transparent via-[rgba(79,124,255,0.15)] to-[#4F7CFF] opacity-80 border-b border-[#4F7CFF] animate-scan shadow-[0_10px_30px_rgba(79,124,255,0.4)]"></div>

<div className="absolute top-1/4 left-1/4 w-1/4 h-1/4 border border-[#4F7CFF] bg-[rgba(79,124,255,0.1)] rounded opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute bottom-1/3 right-1/4 w-1/5 h-1/5 border border-[#4F7CFF] bg-[rgba(79,124,255,0.1)] rounded opacity-0 group-hover:opacity-100 transition-opacity delay-100"></div>
</div>

<div className="flex items-center gap-6 mt-4 z-10 text-[rgba(255,255,255,0.4)]">
<iconify-icon height="20" icon="solar:heart-linear" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:chat-round-linear" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:forward-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="w-full lg:w-96 bg-[#111218] p-8 flex flex-col justify-center relative">
<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-8 rounded-full bg-[rgba(79,124,255,0.1)] flex items-center justify-center">
<iconify-icon className="text-[#4F7CFF]" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-[rgba(255,255,255,0.6)] uppercase tracking-widest">Scan Complete</span>
</div>
<div className="text-sm font-medium text-[rgba(255,255,255,0.35)] mb-2 uppercase tracking-widest">Media Authenticity</div>
<div className="text-5xl font-medium tracking-tight text-[#FFFFFF] mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#7A6BFF]">AI Generated</div>
<div className="space-y-6">
<div>
<div className="flex justify-between text-sm font-medium mb-2">
<span className="text-[#FFFFFF]">Visual Artifacts Detected</span>
<span className="text-[rgba(255,255,255,0.6)]">98%</span>
</div>
<div className="w-full h-1.5 bg-[#161821] rounded-full overflow-hidden">
<div className="h-full bg-[#4F7CFF] w-[98%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm font-medium mb-2">
<span className="text-[#FFFFFF]">Temporal Inconsistency</span>
<span className="text-[rgba(255,255,255,0.6)]">87%</span>
</div>
<div className="w-full h-1.5 bg-[#161821] rounded-full overflow-hidden">
<div className="h-full bg-[#7A6BFF] w-[87%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm font-medium mb-2">
<span className="text-[#FFFFFF]">Authentic Lens Probability</span>
<span className="text-[rgba(255,255,255,0.6)]">2%</span>
</div>
<div className="w-full h-1.5 bg-[#161821] rounded-full overflow-hidden">
<div className="h-full bg-[rgba(255,255,255,0.2)] w-[2%]"></div>
</div>
</div>
</div>
<div className="mt-10 pt-6 border-t border-[rgba(255,255,255,0.05)]">
<div className="text-xs font-medium text-[rgba(255,255,255,0.35)] leading-relaxed">
                            Sentinai has flagged unnatural lighting geometry, localized blending anomalies, and diffusion noise patterns consistent with Midjourney v6.
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative flex flex-col items-center justify-center overflow-hidden border-t border-[rgba(255,255,255,0.02)]">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4F7CFF]/5 to-transparent pointer-events-none"></div>
<div className="text-center mb-16 relative z-10 px-6">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-[#FFFFFF]">Total visibility.</h2>
<p className="text-lg text-[rgba(255,255,255,0.6)] font-medium mt-4 max-w-xl mx-auto">Explore isolated anomalies across your entire media library.</p>
</div>
<div className="relative w-full max-w-[95vw] lg:max-w-[85vw] xl:max-w-7xl mx-auto h-[600px]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-[#4F7CFF]/20 to-[#7A6BFF]/20 blur-[120px] rounded-full pointer-events-none"></div>

<div className="relative w-full h-full bg-[#0B0B0F]/90 backdrop-blur-2xl border border-[rgba(255,255,255,0.08)] rounded-t-[2.5rem] shadow-[0_-20px_80px_rgba(0,0,0,0.4)] overflow-hidden flex animate-float">

<div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(11,11,15,0.9)] pointer-events-none z-20"></div>

<div className="w-64 border-r border-[#161821] p-6 hidden lg:flex flex-col relative z-10">
<div className="w-8 h-8 rounded-lg bg-[#111218] border border-[#161821] mb-10 flex items-center justify-center">
<iconify-icon className="text-[#FFFFFF]" height="16" icon="solar:widget-5-linear" width="16"></iconify-icon>
</div>
<div className="space-y-4">
<div className="h-4 w-24 bg-[#161821] rounded-full"></div>
<div className="h-4 w-32 bg-[#161821] rounded-full"></div>
<div className="h-4 w-20 bg-[#161821] rounded-full"></div>
<div className="h-4 w-28 bg-[#161821] rounded-full"></div>
</div>
</div>

<div className="flex-1 p-8 lg:p-12 relative z-10 flex flex-col">
<div className="flex justify-between items-center mb-10">
<div className="space-y-2">
<div className="h-5 w-40 bg-[rgba(255,255,255,0.8)] rounded-full"></div>
<div className="h-3 w-64 bg-[#161821] rounded-full"></div>
</div>
<div className="w-10 h-10 rounded-full border border-[#161821] bg-[#111218] flex items-center justify-center">
<iconify-icon className="text-[rgba(255,255,255,0.6)]" height="18" icon="solar:bell-linear" width="18"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-3 gap-6 flex-1">
<div className="col-span-2 bg-[#111218]/50 border border-[#161821] rounded-2xl p-6 flex flex-col">
<div className="flex items-center gap-3 mb-6">
<div className="w-2 h-2 rounded-full bg-[#4F7CFF]"></div>
<div className="h-3 w-24 bg-[rgba(255,255,255,0.4)] rounded-full"></div>
</div>
<div className="flex-1 bg-[#161821]/30 rounded-xl relative overflow-hidden">

<div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#4F7CFF]/10 to-transparent"></div>
<svg className="absolute bottom-0 w-full h-full opacity-30" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 L0 80 Q 25 60 50 70 T 100 40 L100 100 Z" fill="none" stroke="#4F7CFF" strokeWidth="0.5"></path>
</svg>
</div>
</div>
<div className="space-y-6">
<div className="h-[45%] bg-[#111218]/50 border border-[#161821] rounded-2xl p-6 flex flex-col justify-between">
<div className="h-3 w-20 bg-[rgba(255,255,255,0.4)] rounded-full"></div>
<div className="h-8 w-16 bg-[rgba(255,255,255,0.8)] rounded-full"></div>
</div>
<div className="h-[45%] bg-[#111218]/50 border border-[#161821] rounded-2xl p-6 flex flex-col justify-between">
<div className="h-3 w-24 bg-[rgba(255,255,255,0.4)] rounded-full"></div>
<div className="space-y-2 w-full">
<div className="h-1.5 w-full bg-[#161821] rounded-full overflow-hidden">
<div className="w-[70%] h-full bg-[#7A6BFF]"></div>
</div>
<div className="h-1.5 w-full bg-[#161821] rounded-full overflow-hidden">
<div className="w-[40%] h-full bg-[rgba(255,255,255,0.3)]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative flex justify-center items-center overflow-hidden">
<div className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-[#4F7CFF]/15 to-transparent blur-[150px] rounded-full pointer-events-none"></div>
<div className="relative z-10 w-full max-w-xl bg-[#111218] rounded-[3rem] border border-[rgba(255,255,255,0.05)] p-12 lg:p-16 flex flex-col items-center text-center shadow-[0_0_80px_rgba(79,124,255,0.05)] transform hover:scale-[1.02] transition-transform duration-700">

<div className="absolute inset-0 border border-[rgba(255,255,255,0.02)] rounded-[3rem] pointer-events-none"></div>
<div className="absolute inset-4 border border-[rgba(255,255,255,0.01)] rounded-[2.5rem] pointer-events-none"></div>
<div className="mb-8 relative flex items-center justify-center">
<div className="absolute w-24 h-24 border border-[rgba(79,124,255,0.3)] rounded-full animate-ping opacity-20"></div>
<div className="w-16 h-16 rounded-full bg-[rgba(79,124,255,0.1)] flex items-center justify-center border border-[rgba(79,124,255,0.2)]">
<iconify-icon className="text-[#4F7CFF]" height="32" icon="solar:shield-check-bold" width="32"></iconify-icon>
</div>
</div>
<div className="text-xs font-medium text-[rgba(255,255,255,0.4)] tracking-widest uppercase mb-4">Origin Signature Validated</div>
<div className="text-6xl lg:text-7xl font-medium tracking-tight text-[#FFFFFF] mb-2 leading-none">Authentic</div>
<p className="text-[rgba(255,255,255,0.5)] font-medium text-lg mt-4 mb-10">Captured by physical lens</p>
<div className="w-full space-y-4">
<div className="flex items-center justify-between px-5 py-3 bg-[#161821]/50 rounded-xl border border-[rgba(255,255,255,0.03)]">
<span className="text-sm font-medium text-[rgba(255,255,255,0.6)]">EXIF Metadata Match</span>
<span className="text-sm font-medium text-[#FFFFFF]">Verified</span>
</div>
<div className="flex items-center justify-between px-5 py-3 bg-[#161821]/50 rounded-xl border border-[rgba(255,255,255,0.03)]">
<span className="text-sm font-medium text-[rgba(255,255,255,0.6)]">Sensor Noise Pattern</span>
<span className="text-sm font-medium text-[#FFFFFF]">Consistent</span>
</div>
</div>
</div>
</section>

<section className="py-32 max-w-7xl mx-auto px-6 space-y-32">

<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="max-w-md">
<h3 className="text-3xl lg:text-4xl font-medium tracking-tight text-[#FFFFFF] mb-4">Pixel-level provenance.</h3>
<p className="text-lg text-[rgba(255,255,255,0.6)] font-medium">Detect microscopic manipulation invisible to the human eye.</p>
</div>
<div className="relative bg-[#111218] rounded-[2rem] border border-[#161821] p-2 h-[400px] flex items-center justify-center overflow-hidden shadow-xl group">
<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgba(79,124,255,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="w-full h-full bg-[#0B0B0F] rounded-[1.5rem] border border-[rgba(255,255,255,0.05)] relative overflow-hidden flex flex-col p-6">
<div className="flex justify-between items-center mb-6 z-10">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#161821]"></div>
<div className="w-3 h-3 rounded-full bg-[#161821]"></div>
<div className="w-3 h-3 rounded-full bg-[#161821]"></div>
</div>
<div className="text-xs text-[rgba(255,255,255,0.4)] font-medium tracking-widest uppercase">Grid Scan</div>
</div>

<div className="flex-1 relative rounded-xl border border-[rgba(255,255,255,0.03)] overflow-hidden bg-[#161821]/30">

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="absolute top-[40%] left-[30%] w-10 h-10 bg-[#4F7CFF]/20 border border-[#4F7CFF] rounded-sm animate-pulse-soft"></div>
<div className="absolute top-[45%] left-[35%] w-5 h-5 bg-[#4F7CFF]/40 border border-[#4F7CFF] rounded-sm"></div>

<div className="absolute top-[45%] left-[35%] w-32 h-px bg-[#4F7CFF] transform origin-left rotate-[-30deg]"></div>
<div className="absolute top-[25%] left-[60%] bg-[#111218] border border-[rgba(255,255,255,0.1)] px-3 py-1.5 rounded-md text-xs font-medium text-[#FFFFFF] shadow-lg">Inpainting Detected</div>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="order-2 lg:order-1 relative bg-[#111218] rounded-[2rem] border border-[#161821] p-2 h-[400px] flex items-center justify-center overflow-hidden shadow-xl group">
<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgba(122,107,255,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="w-full h-full bg-[#0B0B0F] rounded-[1.5rem] border border-[rgba(255,255,255,0.05)] relative overflow-hidden flex flex-col justify-center p-8">
<div className="space-y-6">

<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-[#161821] flex items-center justify-center shrink-0">
<iconify-icon className="text-[rgba(255,255,255,0.6)]" height="20" icon="solar:cpu-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between text-sm font-medium mb-2">
<span className="text-[#FFFFFF]">Midjourney v6</span>
<span className="text-[rgba(255,255,255,0.6)]">96%</span>
</div>
<div className="w-full h-1.5 bg-[#161821] rounded-full overflow-hidden">
<div className="h-full bg-[#7A6BFF] w-[96%]"></div>
</div>
</div>
</div>
<div className="flex items-center gap-4 opacity-50">
<div className="w-10 h-10 rounded-xl bg-[#161821] flex items-center justify-center shrink-0">
<iconify-icon className="text-[rgba(255,255,255,0.4)]" height="20" icon="solar:cpu-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between text-sm font-medium mb-2">
<span className="text-[rgba(255,255,255,0.6)]">DALL-E 3</span>
<span className="text-[rgba(255,255,255,0.4)]">14%</span>
</div>
<div className="w-full h-1.5 bg-[#161821] rounded-full overflow-hidden">
<div className="h-full bg-[rgba(255,255,255,0.2)] w-[14%]"></div>
</div>
</div>
</div>
<div className="flex items-center gap-4 opacity-30">
<div className="w-10 h-10 rounded-xl bg-[#161821] flex items-center justify-center shrink-0">
<iconify-icon className="text-[rgba(255,255,255,0.4)]" height="20" icon="solar:cpu-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between text-sm font-medium mb-2">
<span className="text-[rgba(255,255,255,0.6)]">Stable Diffusion XL</span>
<span className="text-[rgba(255,255,255,0.4)]">8%</span>
</div>
<div className="w-full h-1.5 bg-[#161821] rounded-full overflow-hidden">
<div className="h-full bg-[rgba(255,255,255,0.2)] w-[8%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 max-w-md ml-auto lg:ml-0">
<h3 className="text-3xl lg:text-4xl font-medium tracking-tight text-[#FFFFFF] mb-4">Origin trace analysis.</h3>
<p className="text-lg text-[rgba(255,255,255,0.6)] font-medium">Trace synthesis signatures back to their exact generative model.</p>
</div>
</div>
</section>

<section className="py-32 relative border-y border-[rgba(255,255,255,0.02)] bg-[#0B0B0F]">
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<h2 className="text-3xl font-medium tracking-tight text-[#FFFFFF] mb-2">Instant Validation Flow</h2>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-1/2 left-[15%] w-[70%] h-px bg-gradient-to-r from-transparent via-[rgba(79,124,255,0.3)] to-transparent -translate-y-1/2 z-0"></div>

<div className="relative bg-[#111218] border border-[#161821] rounded-2xl p-6 h-64 flex flex-col justify-between z-10 shadow-lg">
<div className="w-8 h-8 rounded-full bg-[#161821] flex items-center justify-center text-xs font-medium text-[#FFFFFF] mb-4">1</div>
<div className="flex-1 border-2 border-dashed border-[#161821] rounded-xl flex items-center justify-center mb-4 bg-[#0B0B0F]/50">
<iconify-icon className="text-[rgba(255,255,255,0.3)]" height="24" icon="solar:upload-linear" width="24"></iconify-icon>
</div>
<div className="text-sm font-medium text-[#FFFFFF]">Input via API or Dashboard</div>
</div>

<div className="relative bg-[#111218] border border-[rgba(79,124,255,0.2)] rounded-2xl p-6 h-64 flex flex-col justify-between z-10 shadow-[0_0_30px_rgba(79,124,255,0.05)]">
<div className="w-8 h-8 rounded-full bg-[rgba(79,124,255,0.1)] flex items-center justify-center text-xs font-medium text-[#4F7CFF] mb-4">2</div>
<div className="flex-1 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden bg-[#0B0B0F]">
<div className="absolute top-0 left-0 w-full h-[10%] bg-[#4F7CFF] opacity-50 border-b border-[#4F7CFF] shadow-[0_5px_15px_rgba(79,124,255,0.4)] animate-scan"></div>
<iconify-icon className="text-[#4F7CFF]/50" height="24" icon="solar:scanner-linear" width="24"></iconify-icon>
</div>
<div className="text-sm font-medium text-[#FFFFFF]">Deep Artifact Scan</div>
</div>

<div className="relative bg-[#111218] border border-[#161821] rounded-2xl p-6 h-64 flex flex-col justify-between z-10 shadow-lg">
<div className="w-8 h-8 rounded-full bg-[#161821] flex items-center justify-center text-xs font-medium text-[#FFFFFF] mb-4">3</div>
<div className="flex-1 rounded-xl flex flex-col justify-center space-y-3 mb-4 bg-[#0B0B0F]/50 px-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#4F7CFF]" height="16" icon="solar:check-circle-bold" width="16"></iconify-icon>
<div className="h-2 w-16 bg-[rgba(255,255,255,0.8)] rounded-full"></div>
</div>
<div className="h-1.5 w-full bg-[#161821] rounded-full overflow-hidden">
<div className="w-[90%] h-full bg-[#4F7CFF]"></div>
</div>
</div>
<div className="text-sm font-medium text-[#FFFFFF]">Actionable Result</div>
</div>
</div>
</div>
</section>

<section className="py-40 relative flex justify-center items-center min-h-[700px] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4F7CFF]/5 to-transparent"></div>
<div className="relative w-full max-w-4xl h-[400px]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-80 bg-[#111218] border border-[rgba(255,255,255,0.08)] rounded-[2rem] p-8 shadow-2xl backdrop-blur-xl animate-float">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-[#FFFFFF]" height="24" icon="solar:shield-warning-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-[#FFFFFF]">Synthesis Probability</span>
</div>
<div className="text-5xl font-medium tracking-tight text-[#FFFFFF] mb-4">High</div>
<div className="text-xs font-medium text-[rgba(255,255,255,0.4)] uppercase tracking-widest">Action Required</div>
</div>

<div className="absolute z-10 left-[5%] lg:left-[15%] top-[10%] w-64 bg-[#0B0B0F]/90 border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 shadow-xl backdrop-blur-xl animate-float-delayed transform -rotate-3">
<div className="flex items-center justify-between mb-4">
<div className="w-8 h-8 rounded-full bg-[#161821] flex items-center justify-center">
<iconify-icon className="text-[#FFFFFF]" height="14" icon="solar:eye-linear" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-[rgba(255,255,255,0.4)]">Lens Analysis</span>
</div>
<div className="h-2 w-full bg-[#161821] rounded-full overflow-hidden mb-2">
<div className="w-[15%] h-full bg-[#7A6BFF]"></div>
</div>
<div className="text-xs font-medium text-[rgba(255,255,255,0.6)]">15% Human Original</div>
</div>

<div className="absolute z-30 right-[5%] lg:right-[15%] bottom-[10%] w-72 bg-[#161821]/80 border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 shadow-2xl backdrop-blur-md animate-float transform rotate-2">
<div className="text-xs font-medium text-[rgba(255,255,255,0.4)] uppercase tracking-widest mb-4">Network Activity</div>
<div className="flex items-center gap-4 mb-3">
<div className="w-2 h-2 rounded-full bg-[#4F7CFF] animate-pulse"></div>
<span className="text-sm font-medium text-[#FFFFFF]">Bot cluster identified</span>
</div>
<div className="flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-[#161821]"></div>
<span className="text-sm font-medium text-[rgba(255,255,255,0.4)]">Scanning local nodes</span>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-[rgba(255,255,255,0.02)]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="p-8 rounded-2xl border border-transparent hover:border-[#161821] hover:bg-[#111218] transition-all">
<iconify-icon className="text-[#4F7CFF] mb-6" height="24" icon="solar:smartphone-linear" width="24"></iconify-icon>
<h4 className="text-lg font-medium text-[#FFFFFF] mb-2">Social Platforms</h4>
<p className="text-[rgba(255,255,255,0.6)] text-sm font-medium">Filter synthetic spam and automated deepfake campaigns before they go viral.</p>
</div>
<div className="p-8 rounded-2xl border border-transparent hover:border-[#161821] hover:bg-[#111218] transition-all">
<iconify-icon className="text-[#4F7CFF] mb-6" height="24" icon="solar:tv-linear" width="24"></iconify-icon>
<h4 className="text-lg font-medium text-[#FFFFFF] mb-2">News Media</h4>
<p className="text-[rgba(255,255,255,0.6)] text-sm font-medium">Verify the authenticity of sourced images and crowdsourced videos instantly.</p>
</div>
<div className="p-8 rounded-2xl border border-transparent hover:border-[#161821] hover:bg-[#111218] transition-all">
<iconify-icon className="text-[#4F7CFF] mb-6" height="24" icon="solar:shield-warning-linear" width="24"></iconify-icon>
<h4 className="text-lg font-medium text-[#FFFFFF] mb-2">Trust &amp; Safety</h4>
<p className="text-[rgba(255,255,255,0.6)] text-sm font-medium">Automate the moderation of manipulated media to protect platform integrity.</p>
</div>
<div className="p-8 rounded-2xl border border-transparent hover:border-[#161821] hover:bg-[#111218] transition-all">
<iconify-icon className="text-[#4F7CFF] mb-6" height="24" icon="solar:buildings-linear" width="24"></iconify-icon>
<h4 className="text-lg font-medium text-[#FFFFFF] mb-2">Brand Protection</h4>
<p className="text-[rgba(255,255,255,0.6)] text-sm font-medium">Detect and act on synthetic defamatory content targeting your corporate brand.</p>
</div>
</div>
</div>
</section>

<section className="py-32 max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[rgba(255,255,255,0.1)] bg-[#111218] mb-10 shadow-lg">
<iconify-icon className="text-[#4F7CFF]" height="20" icon="solar:shield-check-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-[#FFFFFF] tracking-wide">Media Verified by Sentinai</span>
</div>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-[#FFFFFF] mb-6">The new internet standard.</h2>
<p className="text-xl text-[rgba(255,255,255,0.6)] font-medium max-w-2xl mx-auto">
            Embed the Sentinai trust layer directly into your platform. Scan uploads in real-time and provide undeniable proof of authenticity to your users.
        </p>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 border-t border-[rgba(255,255,255,0.02)]">
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-[#111218] p-10 rounded-[2rem] border border-[#161821]">
<div className="flex gap-1 mb-8">
<iconify-icon className="text-[#FFFFFF]" height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-[#FFFFFF]" height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-[#FFFFFF]" height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-[#FFFFFF]" height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-[#FFFFFF]" height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-xl text-[#FFFFFF] font-medium tracking-tight leading-relaxed mb-8">
                    "Sentinai gives us absolute certainty. We process thousands of breaking news photos daily, and their image scanning API was the only way to catch sophisticated deepfakes before publication."
                </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#161821] flex items-center justify-center text-sm font-medium text-[rgba(255,255,255,0.6)]">ED</div>
<div>
<div className="text-sm font-medium text-[#FFFFFF]">Editorial Director</div>
<div className="text-xs font-medium text-[rgba(255,255,255,0.35)]">Major Media Network</div>
</div>
</div>
</div>
<div className="bg-[#111218] p-10 rounded-[2rem] border border-[#161821]">
<div className="flex gap-1 mb-8">
<iconify-icon className="text-[#FFFFFF]" height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-[#FFFFFF]" height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-[#FFFFFF]" height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-[#FFFFFF]" height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-[#FFFFFF]" height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-xl text-[#FFFFFF] font-medium tracking-tight leading-relaxed mb-8">
                    "The video frame analysis is unmatched. Before Sentinai, our trust &amp; safety team relied on manual review. Now, we automatically intercept and flag manipulated videos across millions of posts."
                </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#161821] flex items-center justify-center text-sm font-medium text-[rgba(255,255,255,0.6)]">VP</div>
<div>
<div className="text-sm font-medium text-[#FFFFFF]">VP of Trust &amp; Safety</div>
<div className="text-xs font-medium text-[rgba(255,255,255,0.35)]">Global Social Network</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 text-center relative overflow-hidden">
<div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#4F7CFF] to-transparent opacity-30"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-gradient-to-t from-[#4F7CFF] to-transparent opacity-5 blur-[100px] pointer-events-none"></div>
<div className="relative z-10 px-6">
<h2 className="text-5xl lg:text-7xl font-medium tracking-tight text-[#FFFFFF] mb-10">Know what's real.</h2>
<button className="px-10 py-5 rounded-full bg-gradient-to-r from-[#4F7CFF] to-[#7A6BFF] text-[#FFFFFF] font-medium text-lg hover:opacity-90 transition-all shadow-[0_0_40px_rgba(79,124,255,0.3)]">
                Start Scanning Today
            </button>
</div>
</section>

<footer className="py-10 border-t border-[rgba(255,255,255,0.05)] text-center">
<div className="text-sm font-medium text-[rgba(255,255,255,0.35)]">
            © 2024 Sentinai Intelligence. All rights reserved.
        </div>
</footer>

    </>
  );
}
