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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-[#1e2a3a]/8">
<div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between" style={{height: '72px'}}>
<div className="flex items-center gap-10">
<a className="flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-[#81d22e] flex items-center justify-center" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
<iconify-icon className="text-white text-base" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter uppercase text-[#1e2a3a]">Sparks</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-[#1e2a3a]/60 hover:text-[#81d22e] transition-colors font-medium" href="#features">Technology</a>
<a className="text-sm text-[#1e2a3a]/60 hover:text-[#81d22e] transition-colors font-medium" href="#solutions">Solutions</a>
<a className="text-sm text-[#1e2a3a]/60 hover:text-[#81d22e] transition-colors font-medium" href="#hardware">Hardware</a>
<a className="text-sm text-[#1e2a3a]/60 hover:text-[#81d22e] transition-colors font-medium" href="#pricing">Pricing</a>
</div>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:block text-sm font-medium text-[#1e2a3a]/70 hover:text-[#1e2a3a] px-4 py-2 transition-all">
                    Login
                </button>
<button className="text-sm font-semibold bg-[#1e2a3a] text-white px-6 py-2.5 hover:bg-[#2a3d54] transition-all" style={{clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'}}>
                    Request Quote
                </button>
</div>
</div>
</nav>

<section className="relative pt-36 pb-32 overflow-hidden grid-bg bg-white">

<div className="absolute top-20 right-0 w-96 h-96 opacity-10 float-anim" style={{zIndex: '0'}}>
<svg fill="none" viewbox="0 0 200 200">
<polygon fill="none" points="100,10 190,60 190,140 100,190 10,140 10,60" stroke="rgb(129,210,46)" strokeWidth="0.5"></polygon>
<polygon fill="none" points="100,30 170,70 170,130 100,170 30,130 30,70" stroke="rgb(129,210,46)" strokeWidth="0.3"></polygon>
<polygon fill="none" points="100,50 150,80 150,120 100,150 50,120 50,80" stroke="rgb(129,210,46)" strokeWidth="0.2"></polygon>
</svg>
</div>
<div className="absolute top-40 left-10 w-64 h-64 opacity-5" style={{zIndex: '0', animation: 'float 8s ease-in-out infinite reverse'}}>
<svg fill="none" viewbox="0 0 100 100">
<rect fill="none" height="80" stroke="rgb(30,42,58)" strokeWidth="0.5" transform="rotate(45 50 50)" width="80" x="10" y="10"></rect>
<rect fill="none" height="60" stroke="rgb(30,42,58)" strokeWidth="0.3" transform="rotate(45 50 50)" width="60" x="20" y="20"></rect>
</svg>
</div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#81d22e]/8 blur-[150px] rounded-full opacity-40"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2">
<div className="inline-flex items-center gap-2 px-4 py-2 bg-[#81d22e]/10 border border-[#81d22e]/25 text-xs font-semibold text-[#5a9320] mb-8 tracking-widest uppercase" style={{clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'}}>
<iconify-icon className="text-sm" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Now Deploying Nationwide
                    </div>
<h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-[1.05] text-[#1e2a3a]">
                        Advanced Mobile
                        <br/>
<span className="relative inline-block">
                            Surveillance
                            <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#81d22e]"></div>
</span>
<br/>
<span className="text-[#1e2a3a]/35">That Works Anywhere.</span>
</h1>
<p className="text-base md:text-lg text-[#1e2a3a]/55 max-w-lg mb-10 font-light leading-relaxed">
                        Protect construction sites, parking lots, and facilities with solar-powered surveillance trailers—no external power or internet required.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="text-sm font-semibold bg-[#81d22e] text-white px-8 py-4 hover:bg-[#6fb825] transition-all flex items-center gap-2 justify-center shadow-lg shadow-[#81d22e]/20" style={{clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'}}>
                            Free Site Assessment
                            <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="text-sm font-medium border border-[#1e2a3a]/15 text-[#1e2a3a] px-8 py-4 hover:bg-[#1e2a3a]/5 transition-all flex items-center gap-2 justify-center" style={{clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'}}>
<iconify-icon className="text-lg" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Watch Demo
                        </button>
</div>
</div>
<div className="w-full lg:w-1/2 relative">
<div className="relative group cursor-pointer">

<div className="absolute -inset-3 border border-[#81d22e]/20 z-0" style={{clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'}}></div>
<div className="relative overflow-hidden aspect-[4/3] bg-[#1e2a3a]/5 z-10" style={{clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'}}>
<img alt="Surveillance Trailer" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1590479773265-7464e5d48118?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1e2a3a]/90 via-[#1e2a3a]/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 z-20">
<div className="flex items-center gap-3 mb-3">
<div className="w-3 h-3 bg-[#81d22e] rounded-full pulse-glow"></div>
<span className="text-xs font-semibold tracking-widest uppercase text-[#81d22e]">Live Feed Active</span>
</div>
<p className="text-sm text-white/80 font-light">Solar Sentry™ — Site Alpha</p>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
<div className="w-16 h-16 bg-[#81d22e]/90 flex items-center justify-center text-white group-hover:scale-110 transition-transform" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
<iconify-icon className="text-2xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="relative h-24 bg-transparent">
<svg className="absolute bottom-0 w-full" preserveaspectratio="none" style={{height: '80px'}} viewbox="0 0 1440 80">
<polygon fill="#f0f2f5" points="0,80 0,40 120,60 240,20 360,50 480,10 600,45 720,15 840,55 960,5 1080,40 1200,15 1320,50 1440,30 1440,80"></polygon>
<polygon fill="#f8f9fa" opacity="0.5" points="0,80 0,55 120,70 240,40 360,65 480,30 600,60 720,35 840,68 960,25 1080,55 1200,35 1320,62 1440,45 1440,80"></polygon>
</svg>
</div>

<section className="py-20 bg-[#f0f2f5] relative overflow-hidden">
<div className="absolute inset-0 hex-pattern opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center p-6 border border-[#1e2a3a]/8 bg-white card-hover" style={{clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'}}>
<div className="text-4xl font-bold tracking-tighter mb-2 text-[#81d22e]">24/7</div>
<div className="text-xs text-[#1e2a3a]/45 uppercase tracking-widest font-medium">Active Monitoring</div>
</div>
<div className="text-center p-6 border border-[#1e2a3a]/8 bg-white card-hover" style={{clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'}}>
<div className="text-4xl font-bold tracking-tighter mb-2 text-[#81d22e]">100%</div>
<div className="text-xs text-[#1e2a3a]/45 uppercase tracking-widest font-medium">Solar Powered</div>
</div>
<div className="text-center p-6 border border-[#1e2a3a]/8 bg-white card-hover" style={{clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'}}>
<div className="text-4xl font-bold tracking-tighter mb-2 text-[#81d22e]">&lt;1hr</div>
<div className="text-xs text-[#1e2a3a]/45 uppercase tracking-widest font-medium">Rapid Deploy</div>
</div>
<div className="text-center p-6 border border-[#1e2a3a]/8 bg-white card-hover" style={{clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'}}>
<div className="text-4xl font-bold tracking-tighter mb-2 text-[#81d22e]">0</div>
<div className="text-xs text-[#1e2a3a]/45 uppercase tracking-widest font-medium">Infrastructure Needed</div>
</div>
</div>
</div>
</section>

<div className="relative h-20">
<svg className="absolute top-0 w-full" preserveaspectratio="none" style={{height: '80px'}} viewbox="0 0 1440 80">
<polygon fill="#f0f2f5" points="0,0 1440,0 1440,30 720,80 0,30"></polygon>
</svg>
</div>

<section className="py-24 relative grid-bg bg-white" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e2a3a]/5 border border-[#1e2a3a]/10 text-xs font-semibold text-[#1e2a3a]/50 mb-6 tracking-widest uppercase" style={{clipPath: 'polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)'}}>
                    Core Technology
                </div>
<h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-5 text-[#1e2a3a]">Total Autonomy.<br/><span className="text-[#1e2a3a]/30">Unrivaled Intelligence.</span></h2>
<p className="text-base text-[#1e2a3a]/50 max-w-xl mx-auto font-light">Traditional security requires wires. We brought our own power and built a brain to match.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="relative p-8 border border-[#1e2a3a]/8 card-hover bg-white group rounded-sm" style={{clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#81d22e] to-[#6fb825] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-14 h-14 bg-[#81d22e]/10 border border-[#81d22e]/20 flex items-center justify-center mb-6 text-[#81d22e] group-hover:bg-[#81d22e] group-hover:text-white transition-all" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
<iconify-icon className="text-2xl" icon="solar:sun-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-[#1e2a3a]">Perpetual Power</h3>
<p className="text-sm text-[#1e2a3a]/50 leading-relaxed font-light">High-efficiency solar arrays and massive battery banks ensure 24/7 operation through week-long storms.</p>
<div className="mt-6 flex items-center gap-2 text-[#81d22e] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="relative p-8 border border-[#1e2a3a]/8 card-hover bg-white group rounded-sm" style={{clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#81d22e] to-[#6fb825] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-14 h-14 bg-[#81d22e]/10 border border-[#81d22e]/20 flex items-center justify-center mb-6 text-[#81d22e] group-hover:bg-[#81d22e] group-hover:text-white transition-all" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
<iconify-icon className="text-2xl" icon="solar:videocamera-record-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-[#1e2a3a]">AI Edge Analytics</h3>
<p className="text-sm text-[#1e2a3a]/50 leading-relaxed font-light">On-board AI distinguishes between animals, swaying trees, and actual threats like intruders or vehicles.</p>
<div className="mt-6 flex items-center gap-2 text-[#81d22e] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="relative p-8 border border-[#1e2a3a]/8 card-hover bg-white group rounded-sm" style={{clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#81d22e] to-[#6fb825] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-14 h-14 bg-[#81d22e]/10 border border-[#81d22e]/20 flex items-center justify-center mb-6 text-[#81d22e] group-hover:bg-[#81d22e] group-hover:text-white transition-all" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
<iconify-icon className="text-2xl" icon="solar:transmission-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-[#1e2a3a]">Always Connected</h3>
<p className="text-sm text-[#1e2a3a]/50 leading-relaxed font-light">Redundant 4G/5G and Satellite links keep your site connected, no matter how remote the location.</p>
<div className="mt-6 flex items-center gap-2 text-[#81d22e] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
<div className="relative p-8 border border-[#1e2a3a]/8 card-hover bg-white group flex gap-6 items-start" style={{clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'}}>
<div className="w-14 h-14 min-w-[56px] bg-[#81d22e]/10 border border-[#81d22e]/20 flex items-center justify-center text-[#81d22e] group-hover:bg-[#81d22e] group-hover:text-white transition-all" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
<iconify-icon className="text-2xl" icon="solar:siren-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold mb-2 tracking-tight text-[#1e2a3a]">Active Deterrence</h3>
<p className="text-sm text-[#1e2a3a]/50 leading-relaxed font-light">Blue/red strobes, 120dB sirens, and two-way audio let operators intervene in real-time before damage occurs.</p>
</div>
</div>
<div className="relative p-8 border border-[#1e2a3a]/8 card-hover bg-white group flex gap-6 items-start" style={{clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'}}>
<div className="w-14 h-14 min-w-[56px] bg-[#81d22e]/10 border border-[#81d22e]/20 flex items-center justify-center text-[#81d22e] group-hover:bg-[#81d22e] group-hover:text-white transition-all" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
<iconify-icon className="text-2xl" icon="solar:smartphone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold mb-2 tracking-tight text-[#1e2a3a]">Command Center OS</h3>
<p className="text-sm text-[#1e2a3a]/50 leading-relaxed font-light">Monitor every trailer from a single dashboard. Get instant alerts, review footage, and manage deployments from any device.</p>
</div>
</div>
</div>
</div>
</section>

<div className="relative h-24 overflow-hidden">
<svg className="w-full" preserveaspectratio="none" style={{height: '100px'}} viewbox="0 0 1440 100">
<path d="M0,50 L60,20 L120,50 L180,20 L240,50 L300,20 L360,50 L420,20 L480,50 L540,20 L600,50 L660,20 L720,50 L780,20 L840,50 L900,20 L960,50 L1020,20 L1080,50 L1140,20 L1200,50 L1260,20 L1320,50 L1380,20 L1440,50 L1440,100 L0,100 Z" fill="#f0f2f5"></path>
<path d="M0,60 L60,35 L120,60 L180,35 L240,60 L300,35 L360,60 L420,35 L480,60 L540,35 L600,60 L660,35 L720,60 L780,35 L840,60 L900,35 L960,60 L1020,35 L1080,60 L1140,35 L1200,60 L1260,35 L1320,60 L1380,35 L1440,60 L1440,100 L0,100 Z" fill="#ebedf0" opacity="0.7"></path>
</svg>
</div>

<section className="py-24 bg-[#f0f2f5] relative overflow-hidden" id="solutions">
<div className="absolute inset-0 hex-pattern"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="w-full lg:w-1/2 relative">

<div className="relative">
<div className="absolute -top-4 -left-4 w-full h-full border border-[#81d22e]/15" style={{clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'}}></div>
<div className="relative overflow-hidden aspect-[4/3]" style={{clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'}}>
<img alt="Construction Site" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1e2a3a]/90 via-[#1e2a3a]/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 bg-[#81d22e] rounded-full pulse-glow"></div>
<p className="text-[#81d22e] text-xs font-semibold uppercase tracking-widest">Live Deployment</p>
</div>
<h4 className="text-xl font-semibold tracking-tight text-white">North Phoenix Industrial</h4>
</div>
</div>

<div className="absolute -bottom-6 -right-6 bg-white border border-[#1e2a3a]/10 p-5 z-20 shadow-lg" style={{clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'}}>
<div className="text-2xl font-bold tracking-tighter text-[#81d22e]">98.7%</div>
<div className="text-xs text-[#1e2a3a]/40 uppercase tracking-widest">Threat Detection Rate</div>
</div>
</div>
</div>
<div className="w-full lg:w-1/2">
<div className="inline-flex items-center gap-2 px-4 py-2 bg-[#81d22e]/10 border border-[#81d22e]/20 text-xs font-semibold text-[#5a9320] mb-6 tracking-widest uppercase" style={{clipPath: 'polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)'}}>
                        Industries Served
                    </div>
<h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-10 leading-tight text-[#1e2a3a]">Engineered for<br/>the harshest<br/><span className="text-[#1e2a3a]/30">environments.</span></h2>
<div className="space-y-6">
<div className="flex gap-5 p-5 border border-[#1e2a3a]/8 bg-white hover:border-[#81d22e]/30 transition-all cursor-pointer group shadow-sm" style={{clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'}}>
<div className="mt-0.5 text-[#81d22e] text-xl">
<iconify-icon icon="solar:building-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-base tracking-tight mb-1 text-[#1e2a3a] group-hover:text-[#81d22e] transition-colors">Construction &amp; Job Sites</h4>
<p className="text-sm text-[#1e2a3a]/45 font-light">Reduce theft of copper, materials, and machinery with active deterrence.</p>
</div>
</div>
<div className="flex gap-5 p-5 border border-[#1e2a3a]/8 bg-white hover:border-[#81d22e]/30 transition-all cursor-pointer group shadow-sm" style={{clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'}}>
<div className="mt-0.5 text-[#81d22e] text-xl">
<iconify-icon icon="solar:shop-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-base tracking-tight mb-1 text-[#1e2a3a] group-hover:text-[#81d22e] transition-colors">Parking Lots &amp; Retail</h4>
<p className="text-sm text-[#1e2a3a]/45 font-light">Eliminate loitering and vandalism with visible presence and instant alerts.</p>
</div>
</div>
<div className="flex gap-5 p-5 border border-[#1e2a3a]/8 bg-white hover:border-[#81d22e]/30 transition-all cursor-pointer group shadow-sm" style={{clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'}}>
<div className="mt-0.5 text-[#81d22e] text-xl">
<iconify-icon icon="solar:transmission-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-base tracking-tight mb-1 text-[#1e2a3a] group-hover:text-[#81d22e] transition-colors">Critical Infrastructure</h4>
<p className="text-sm text-[#1e2a3a]/45 font-light">Monitor remote substations, oil rigs, and telecom towers without power grids.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="relative h-20">
<svg className="w-full" preserveaspectratio="none" style={{height: '80px'}} viewbox="0 0 1440 80">
<path d="M0,0 L0,0 L240,0 L240,20 L480,20 L480,40 L720,40 L720,20 L960,20 L960,0 L1200,0 L1200,30 L1440,30 L1440,80 L0,80 Z" fill="white"></path>
<line stroke="rgba(129,210,46,0.15)" strokeWidth="1" x1="240" x2="240" y1="0" y2="80"></line>
<line stroke="rgba(129,210,46,0.15)" strokeWidth="1" x1="480" x2="480" y1="20" y2="80"></line>
<line stroke="rgba(129,210,46,0.15)" strokeWidth="1" x1="720" x2="720" y1="20" y2="80"></line>
<line stroke="rgba(129,210,46,0.15)" strokeWidth="1" x1="960" x2="960" y1="0" y2="80"></line>
<line stroke="rgba(129,210,46,0.15)" strokeWidth="1" x1="1200" x2="1200" y1="0" y2="80"></line>
</svg>
</div>

<section className="py-24 relative grid-bg bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e2a3a]/5 border border-[#1e2a3a]/10 text-xs font-semibold text-[#1e2a3a]/50 mb-6 tracking-widest uppercase" style={{clipPath: 'polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)'}}>
                    Process
                </div>
<h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-5 text-[#1e2a3a]">Deployed in 3 steps.</h2>
<p className="text-base text-[#1e2a3a]/50 max-w-xl mx-auto font-light">From consultation to full operational security in under 48 hours.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-[#81d22e]/0 via-[#81d22e]/30 to-[#81d22e]/0"></div>

<div className="relative text-center">
<div className="w-14 h-14 mx-auto bg-[#81d22e] text-white flex items-center justify-center text-xl font-bold mb-8 relative z-10 shadow-lg shadow-[#81d22e]/20" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
                        1
                    </div>
<h3 className="text-lg font-semibold tracking-tight mb-3 text-[#1e2a3a]">Site Assessment</h3>
<p className="text-sm text-[#1e2a3a]/45 font-light leading-relaxed">Our team evaluates your property, identifies vulnerabilities, and designs optimal camera coverage.</p>
</div>

<div className="relative text-center">
<div className="w-14 h-14 mx-auto bg-[#81d22e] text-white flex items-center justify-center text-xl font-bold mb-8 relative z-10 shadow-lg shadow-[#81d22e]/20" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
                        2
                    </div>
<h3 className="text-lg font-semibold tracking-tight mb-3 text-[#1e2a3a]">Rapid Deployment</h3>
<p className="text-sm text-[#1e2a3a]/45 font-light leading-relaxed">We deliver and position your Solar Sentry™ unit. Full setup takes under one hour—no permits needed.</p>
</div>

<div className="relative text-center">
<div className="w-14 h-14 mx-auto bg-[#81d22e] text-white flex items-center justify-center text-xl font-bold mb-8 relative z-10 shadow-lg shadow-[#81d22e]/20" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
                        3
                    </div>
<h3 className="text-lg font-semibold tracking-tight mb-3 text-[#1e2a3a]">24/7 Protection</h3>
<p className="text-sm text-[#1e2a3a]/45 font-light leading-relaxed">Your site is monitored around the clock with AI analytics, live alerts, and professional response coordination.</p>
</div>
</div>
</div>
</section>

<div className="relative h-16">
<svg className="w-full" preserveaspectratio="none" style={{height: '60px'}} viewbox="0 0 1440 60">
<polygon fill="rgba(129,210,46,0.06)" points="0,60 720,0 1440,60"></polygon>
<polygon fill="#1e2a3a" points="0,60 720,15 1440,60"></polygon>
</svg>
</div>

<section className="py-24 bg-[#1e2a3a] relative">
<div className="absolute inset-0 hex-pattern opacity-30"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl mx-auto text-center">
<div className="w-16 h-16 mx-auto bg-[#81d22e]/15 border border-[#81d22e]/25 flex items-center justify-center mb-8" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
<iconify-icon className="text-3xl text-[#81d22e]" icon="solar:chat-square-like-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<blockquote className="text-2xl md:text-3xl font-medium tracking-tight leading-snug mb-8 text-white">
                    "Within the first week, Sparks caught three intrusion attempts and prevented over <span className="text-[#81d22e]">$200K</span> in potential equipment theft."
                </blockquote>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold text-[#81d22e]">MR</div>
<div className="text-left">
<div className="text-sm font-medium text-white">Mike Rodriguez</div>
<div className="text-xs text-white/50">VP Operations, Turner Construction</div>
</div>
</div>
<div className="flex items-center justify-center gap-1 mt-6">
<iconify-icon className="text-[#81d22e] text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#81d22e] text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#81d22e] text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#81d22e] text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#81d22e] text-lg" icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
</section>

<div className="relative h-20">
<svg className="w-full" preserveaspectratio="none" style={{height: '80px'}} viewbox="0 0 1440 80">
<path d="M0,0 L720,50 L1440,0 L1440,10 L720,60 L0,10 Z" fill="rgba(129,210,46,0.08)"></path>
<path d="M0,15 L720,65 L1440,15 L1440,80 L0,80 Z" fill="white"></path>
</svg>
</div>

<section className="py-24 relative overflow-hidden bg-white">
<div className="absolute inset-0 grid-bg"></div>

<div className="absolute right-0 top-0 w-96 h-96 opacity-5">
<svg fill="none" viewbox="0 0 200 200">
<polygon fill="none" points="100,0 200,50 200,150 100,200 0,150 0,50" stroke="rgb(129,210,46)" strokeWidth="1"></polygon>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="relative p-12 md:p-20 border border-[#1e2a3a]/8 overflow-hidden" style={{clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))', background: 'linear-gradient(135deg, rgba(129,210,46,0.06), rgba(129,210,46,0.02), transparent)'}}>
<div className="absolute top-0 right-0 w-80 h-80 bg-[#81d22e]/5 blur-[100px] rounded-full"></div>
<div className="flex flex-col lg:flex-row items-center gap-12">
<div className="flex-1">
<h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight text-[#1e2a3a]">Ready to secure<br/>your perimeter?</h2>
<p className="text-base text-[#1e2a3a]/50 max-w-lg font-light leading-relaxed">Speak with a security specialist today and get a customized deployment plan for your project. No commitment required.</p>
</div>
<div className="flex flex-col gap-4 w-full lg:w-auto">
<button className="text-base font-semibold bg-[#81d22e] text-white px-10 py-4 hover:bg-[#6fb825] transition-all flex items-center gap-3 justify-center whitespace-nowrap shadow-lg shadow-[#81d22e]/20" style={{clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'}}>
<iconify-icon className="text-xl" icon="solar:chat-round-call-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Get a Custom Quote
                        </button>
<button className="text-base font-medium border border-[#1e2a3a]/15 text-[#1e2a3a] px-10 py-4 hover:bg-[#1e2a3a]/5 transition-all flex items-center gap-3 justify-center whitespace-nowrap" style={{clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'}}>
<iconify-icon className="text-xl" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            (800) SPARKS-PWR
                        </button>
</div>
</div>
</div>
</div>
</section>

<div className="relative h-12">
<svg className="w-full" preserveaspectratio="none" style={{height: '48px'}} viewbox="0 0 1440 48">
<rect fill="#1e2a3a" height="48" width="1440" x="0" y="0"></rect>
<rect fill="rgba(129,210,46,0.2)" height="1" width="1440" x="0" y="0"></rect>
<rect fill="rgba(255,255,255,0.05)" height="1" width="1440" x="0" y="23"></rect>

<polygon fill="rgba(129,210,46,0.25)" points="720,8 728,24 720,40 712,24"></polygon>
<polygon fill="rgba(129,210,46,0.12)" points="360,12 366,24 360,36 354,24"></polygon>
<polygon fill="rgba(129,210,46,0.12)" points="1080,12 1086,24 1080,36 1074,24"></polygon>
</svg>
</div>

<footer className="py-16 bg-[#1e2a3a] relative">
<div className="absolute inset-0 hex-pattern opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 bg-[#81d22e] flex items-center justify-center" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
<iconify-icon className="text-white text-base" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter uppercase text-white">Sparks</span>
</a>
<p className="text-sm text-white/45 font-light leading-relaxed mb-6 max-w-xs">
                        Leading the transition to intelligent, autonomous security infrastructure for the modern world.
                    </p>
<div className="flex gap-3">
<a className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#81d22e] hover:border-[#81d22e]/30 transition-all" href="#" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
<iconify-icon className="text-base" icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#81d22e] hover:border-[#81d22e]/30 transition-all" href="#" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
<iconify-icon className="text-base" icon="solar:global-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#81d22e] hover:border-[#81d22e]/30 transition-all" href="#" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
<iconify-icon className="text-base" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
<div>
<h5 className="text-sm font-semibold mb-6 text-white">Product</h5>
<ul className="space-y-3 text-sm text-white/45">
<li><a className="hover:text-[#81d22e] transition-colors" href="#">Solar Sentry™</a></li>
<li><a className="hover:text-[#81d22e] transition-colors" href="#">Command Center OS</a></li>
<li><a className="hover:text-[#81d22e] transition-colors" href="#">AI Analytics</a></li>
<li><a className="hover:text-[#81d22e] transition-colors" href="#">Maintenance Fleet</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold mb-6 text-white">Company</h5>
<ul className="space-y-3 text-sm text-white/45">
<li><a className="hover:text-[#81d22e] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#81d22e] transition-colors" href="#">Success Stories</a></li>
<li><a className="hover:text-[#81d22e] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[#81d22e] transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold mb-6 text-white">Stay Updated</h5>
<p className="text-xs text-white/40 mb-4 font-light">Get security insights and product updates.</p>
<div className="flex flex-col gap-3">
<input className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#81d22e]/50 transition-colors" placeholder="Email address" style={{clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'}} type="email"/>
<button className="bg-[#81d22e] text-white px-4 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-[#6fb825] transition-all" style={{clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'}}>Subscribe</button>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-white/30">© 2024 Sparks Power Security. All rights reserved.</p>
<div className="flex gap-6 text-xs text-white/30">
<a className="hover:text-white/60 transition-colors" href="#">Terms</a>
<a className="hover:text-white/60 transition-colors" href="#">Privacy</a>
<a className="hover:text-white/60 transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
