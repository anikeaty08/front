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



        const cards = document.querySelectorAll('.spotlight-card');
        cards.forEach(card => {
            card.onmousemove = e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            };
        });

        const scene = document.getElementById('interactive-scene');
        const cube = document.querySelector('.ai-cube');

        if (scene && cube) {
            scene.addEventListener('mousemove', (e) => {
                const rect = scene.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; 
                const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
                const rotY = x * 60;
                const rotX = -y * 60;
                cube.style.animation = 'none';
                cube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
            });

            scene.addEventListener('mouseleave', () => {
                cube.style.animation = 'spinCube 20s infinite linear';
            });
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
      

<header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
<nav aria-label="Main menu" className="border-white/[0.08] flex shadow-black/80 bg-[#0A0A0A]/90 w-full max-w-4xl border rounded-full p-1.5 pl-3 shadow-2xl backdrop-blur-md items-center justify-between">
<a aria-label="Back to home" className="flex items-center gap-3 pr-4 group shrink-0" href="/">
<div className="flex shadow-lg shadow-green-500/10 overflow-hidden group-hover:bg-green-500/20 group-hover:border-green-500/30 transition-all duration-300 bg-green-500/10 w-9 h-9 border-green-500/20 border rounded-xl relative items-center justify-center">
<iconify-icon aria-hidden="true" className="text-green-500 transition-transform duration-300 group-hover:scale-110" height="20" icon="solar:headphones-round-sound-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight text-sm">30MPC</span>
</a>
<div className="flex shrink-0 border-white/10 border-l ml-2 pl-4 items-center">
<a className="text-sm hover:bg-green-400 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap font-medium text-black bg-green-500 rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#booking">
                    Book a Strategy Call
                    <iconify-icon aria-hidden="true" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>
</header>
<main>

<section className="overflow-hidden min-h-[90vh] pt-44 pb-20 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-green-600/10 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen z-0"></div>
<div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"></div>
<div className="z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 text-green-300 text-xs uppercase font-medium tracking-wide mb-8 hover:border-green-500/40 transition-colors cursor-default shadow-[0_0_20px_rgba(34,197,94,0.1)] backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-signal"></span>
                    Sales Execution Frameworks
                </div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.05] text-5xl font-semibold text-white tracking-tight mb-8">
                    Sell Better in the<br/> <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">Moments That Matter.</span>
</h1>
<p className="leading-relaxed text-lg font-light text-zinc-400 max-w-2xl mr-auto mb-10 ml-auto">
                    Nick Cegelski helps sales professionals improve real sales conversations with practical frameworks used by top-performing reps.
                </p>
<div className="flex flex-col mb-12 items-center justify-center">
<div className="flex w-full max-w-lg pr-4 pl-4 items-center justify-center">
<a className="group relative inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-green-500 px-8 text-base font-medium text-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(34,197,94,0.15)] hover:shadow-[0_0_60px_rgba(34,197,94,0.25)] ring-1 ring-black/5 hover:bg-green-400" href="#booking">
                            Book a Strategy Call
                            <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="max-w-4xl mx-auto mb-16 relative rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-sm aspect-video flex flex-col items-center justify-center overflow-hidden shadow-2xl group cursor-pointer hover:border-green-500/30 transition-all">
<div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-green-500 mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" icon="solar:play-circle-bold" width="64"></iconify-icon>
<span className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-2">Video Placeholder</span>
<span className="text-white font-medium text-lg">Watch Nick Break Down Modern Sales Execution</span>
</div>

<div aria-hidden="true" className="cube-scene hidden md:flex flex-row items-center justify-between w-full z-10 max-w-5xl mx-auto relative opacity-80" id="interactive-scene" style={{minHeight: '400px', padding: '2rem 0'}}>
<style>
                        @keyframes pulseLine {
                            0% { left: -10%; opacity: 0; }
                            10% { opacity: 1; }
                            90% { opacity: 1; }
                            100% { left: 100%; opacity: 0; }
                        }
                        @keyframes floatGentle {
                            0%, 100% { transform: translateY(0); }
                            50% { transform: translateY(-4px); }
                        }
                        @keyframes pulseGlow {
                            0%, 100% { box-shadow: 0 0 30px rgba(34, 197, 94, 0.05); border-color: rgba(34, 197, 94, 0.2); }
                            50% { box-shadow: 0 0 50px rgba(34, 197, 94, 0.2); border-color: rgba(34, 197, 94, 0.4); }
                        }
                    </style>

<div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0 pointer-events-none"></div>
<div className="absolute top-1/2 left-0 h-[2px] w-1/3 bg-gradient-to-r from-transparent via-green-500 to-transparent -translate-y-1/2 z-0 pointer-events-none" style={{animation: 'pulseLine 3s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}></div>

<div className="w-[280px] flex flex-col gap-3 z-10">
<div className="text-xs font-mono text-zinc-500 uppercase tracking-wide pl-1 mb-2">The Struggle</div>
<div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 shadow-lg relative group transition-all hover:border-white/10" style={{animation: 'floatGentle 6s ease-in-out infinite'}}>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 z-10 shrink-0">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex flex-col z-10 min-w-0">
<span className="text-sm font-normal text-zinc-200 truncate">Lost Deals</span>
<span className="text-xs text-zinc-500 truncate mt-0.5">Hesitation in key moments</span>
</div>
</div>
<div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 shadow-lg relative group transition-all hover:border-white/10" style={{animation: 'floatGentle 6s ease-in-out 1.5s infinite'}}>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 z-10 shrink-0">
<iconify-icon icon="solar:ghost-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex flex-col z-10 min-w-0">
<span className="text-sm font-normal text-zinc-200 truncate">Ignored Outreach</span>
<span className="text-xs text-zinc-500 truncate mt-0.5">Generic messaging fails</span>
</div>
</div>
</div>

<div className="flex-1 flex flex-col items-center justify-center relative min-w-[320px] z-10 px-4">
<div className="text-xs font-mono text-green-500 uppercase tracking-wide mb-6 bg-green-500/10 px-4 py-1.5 rounded-full border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                            30MPC Playbook
                        </div>
<div className="relative bg-black/90 backdrop-blur-xl border border-green-500/30 rounded-3xl p-6 w-full max-w-[340px] z-10" style={{animation: 'pulseGlow 4s ease-in-out infinite'}}>
<div className="absolute -inset-4 bg-gradient-to-b from-green-500/20 to-transparent opacity-30 blur-2xl pointer-events-none rounded-[3rem] z-[-1]"></div>
<div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-black shadow-[0_0_20px_rgba(34,197,94,0.4)] shrink-0">
<iconify-icon icon="solar:book-bookmark-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="min-w-0">
<div className="text-xl font-medium text-white tracking-tight truncate">Sales Frameworks</div>
<div className="text-xs text-green-400 font-mono flex items-center gap-1.5 mt-1.5">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span> Operator-driven
                                    </div>
</div>
</div>
<div className="space-y-2.5">
<div className="flex items-center gap-3 p-2.5 rounded-xl bg-zinc-900/40 border border-white/5 transition-colors hover:bg-zinc-900 hover:border-white/10">
<div className="w-6 h-6 rounded-md bg-zinc-800 flex items-center justify-center text-xs font-mono text-zinc-400 border border-white/5 shrink-0">01</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-normal text-zinc-200 truncate">Analyze</div>
<div className="text-xs text-zinc-500 font-mono mt-0.5 truncate">Identify lost moments</div>
</div>
<iconify-icon className="text-green-500 shrink-0" icon="solar:magnifer-linear" width="14"></iconify-icon>
</div>
<div className="flex items-center gap-3 p-2.5 rounded-xl bg-zinc-900/40 border border-white/5 transition-colors hover:bg-zinc-900 hover:border-white/10">
<div className="w-6 h-6 rounded-md bg-zinc-800 flex items-center justify-center text-xs font-mono text-zinc-400 border border-white/5 shrink-0">02</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-normal text-zinc-200 truncate">Implement</div>
<div className="text-xs text-zinc-500 font-mono mt-0.5 truncate">Practical strategies</div>
</div>
<iconify-icon className="text-green-500 shrink-0" icon="solar:settings-linear" width="14"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="w-[280px] flex flex-col gap-3 z-10">
<div className="text-xs font-mono text-zinc-500 uppercase tracking-wide text-right pr-1 mb-2">The Outcome</div>
<div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 shadow-lg relative group transition-all hover:border-white/10" style={{animation: 'floatGentle 6s ease-in-out 0.5s infinite'}}>
<div className="absolute inset-0 bg-gradient-to-l from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="flex flex-col text-right flex-1 min-w-0 z-10">
<span className="text-sm font-normal text-zinc-200 truncate">Sales Execution</span>
<span className="text-xs text-zinc-500 truncate mt-0.5">Control the conversation</span>
</div>
<div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-green-400 z-10 shrink-0">
<iconify-icon icon="solar:target-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 shadow-lg relative group transition-all hover:border-white/10" style={{animation: 'floatGentle 6s ease-in-out 2s infinite'}}>
<div className="absolute inset-0 bg-gradient-to-l from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="flex flex-col text-right flex-1 min-w-0 z-10">
<span className="text-sm font-normal text-zinc-200 truncate">Closed Won</span>
<span className="text-xs text-zinc-500 truncate mt-0.5">Predictable performance</span>
</div>
<div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-green-400 z-10 shrink-0">
<iconify-icon icon="solar:wad-of-money-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-t border-white/5 bg-[#020202] relative z-20">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs text-zinc-500 font-mono uppercase tracking-widest mb-8">Sales professionals learning modern selling from 30 Minutes to President’s Club</p>
<div className="h-24 w-full max-w-4xl mx-auto rounded-xl border border-white/10 bg-zinc-900/30 flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[scroll_2s_linear] pointer-events-none"></div>
<iconify-icon className="text-zinc-600 mr-3" icon="solar:gallery-linear" width="24"></iconify-icon>
<span className="text-zinc-500 font-mono text-sm uppercase tracking-wider">Image Placeholder (Logos)</span>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-[#050505] relative z-20" id="pain-points">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-zinc-800/50 text-zinc-400 mb-8 border border-white/10">
<iconify-icon icon="solar:danger-triangle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
                        Why Many Sales Reps Struggle to Close Deals
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-black border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-white mb-6 border border-white/10">
<iconify-icon icon="solar:graph-down-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Sales conversations feel unpredictable</h3>
<p className="text-zinc-400 leading-relaxed text-sm">Reps often struggle to handle objections and unexpected moments.</p>
</div>
<div className="bg-black border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-white mb-6 border border-white/10">
<iconify-icon icon="solar:ghost-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Outbound messages get ignored</h3>
<p className="text-zinc-400 leading-relaxed text-sm">Prospects receive too many generic outreach messages.</p>
</div>
<div className="bg-black border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-white mb-6 border border-white/10">
<iconify-icon icon="solar:book-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Sales training feels theoretical</h3>
<p className="text-zinc-400 leading-relaxed text-sm">Many programs teach concepts without practical execution.</p>
</div>
<div className="bg-black border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-white mb-6 border border-white/10">
<iconify-icon icon="solar:shield-cross-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Confidence breaks during key moments</h3>
<p className="text-zinc-400 leading-relaxed text-sm">When deals matter most, reps hesitate or lose control of the conversation.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black border-t border-white/5 relative" id="why-nick">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                        Why Sales Professionals<br/>Learn From Nick Cegelski
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between group overflow-hidden">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:layers-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Practical sales frameworks</h3>
<p className="text-zinc-400 text-base leading-relaxed max-w-md">Strategies designed for real sales conversations.</p>
</div>
<div className="mt-8 flex flex-wrap gap-2 opacity-80">
<span className="px-2 py-1 bg-black/50 rounded border border-white/5 text-xs text-zinc-400">Actionable</span>
<span className="px-2 py-1 bg-black/50 rounded border border-white/5 text-xs text-zinc-400">Tested</span>
<span className="px-2 py-1 bg-black/50 rounded border border-white/5 text-xs text-zinc-400">Ready to deploy</span>
</div>
</div>

<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col group overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:user-hands-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Operator-driven insights</h3>
<p className="text-zinc-400 text-base leading-relaxed mb-4">Lessons from real selling situations.</p>
<div className="mt-auto w-full bg-zinc-900 rounded-full h-2 overflow-hidden">
<div className="bg-gradient-to-r from-zinc-700 to-green-500 h-full w-[100%] rounded-full"></div>
</div>
<div className="text-right text-xs text-white mt-2 font-mono">100% Real-world experience</div>
</div>

<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:rocket-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-2">Modern outbound strategies</h3>
<p className="text-zinc-400 text-base leading-relaxed">Helping reps improve outreach and discovery.</p>
</div>
</div>

<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col md:flex-row items-center justify-between overflow-hidden gap-6">
<div className="relative z-10 max-w-sm">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:chat-round-line-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Clear communication techniques</h3>
<p className="text-zinc-400 text-base leading-relaxed">Helping salespeople guide stronger buyer conversations.</p>
</div>
<div className="flex items-center gap-2 opacity-80 mt-6 md:mt-0">
<div className="px-3 py-2 bg-zinc-900 border border-white/10 rounded text-xs text-zinc-400">Objection</div>
<iconify-icon aria-hidden="true" className="text-zinc-600" icon="solar:arrow-right-linear" width="16"></iconify-icon>
<div className="px-3 py-2 bg-green-900/20 border border-green-500/30 rounded text-xs text-green-400">Framework</div>
<iconify-icon aria-hidden="true" className="text-zinc-600" icon="solar:arrow-right-linear" width="16"></iconify-icon>
<div className="px-3 py-2 bg-zinc-900 border border-white/10 rounded text-xs text-white">Control</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-[#050505] relative z-20">
<div className="max-w-5xl mx-auto px-6 text-center">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-12 max-w-3xl mx-auto leading-relaxed">
                    Sales professionals follow Nick Cegelski’s insights to strengthen outbound strategies and improve sales execution.
                </h2>
<div className="aspect-[21/9] w-full rounded-3xl border border-white/10 bg-zinc-900/30 flex flex-col items-center justify-center relative overflow-hidden group shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-0"></div>
<iconify-icon className="text-zinc-700 mb-4 z-10" icon="solar:users-group-two-rounded-bold" width="48"></iconify-icon>
<span className="text-zinc-500 font-mono text-sm uppercase tracking-wider z-10">Image Placeholder</span>
<span className="text-zinc-600 text-xs mt-2 z-10">Sales professionals improving performance with 30MPC frameworks</span>
</div>
</div>
</section>

<section className="py-32 bg-black border-t border-white/5" id="process">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-24">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
                        How Sales Teams<br/>Improve With 30MPC
                    </h2>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#000] group-hover:border-green-500 transition-colors">
<span className="font-mono text-sm text-green-500">01</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 pt-1">
<span className="text-green-500 font-mono text-xs uppercase tracking-wide mb-3 block">Step 1</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Analyze Sales Conversations</h3>
<p className="text-zinc-400 text-base leading-relaxed">
                                Identify moments where deals are lost.
                            </p>
</div>
<div className="lg:col-span-7">
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<iconify-icon className="text-zinc-500 mb-6" icon="solar:microphone-3-linear" width="32"></iconify-icon>
<p className="text-zinc-400 text-sm leading-relaxed">We break down real calls to find the exact points where hesitation or lack of framework causes the prospect to disengage.</p>
</div>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#000] group-hover:border-green-500 transition-colors">
<span className="font-mono text-sm text-green-500">02</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 pt-1">
<span className="text-green-500 font-mono text-xs uppercase tracking-wide mb-3 block">Step 2</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Implement Practical Sales Frameworks</h3>
<p className="text-zinc-400 text-base leading-relaxed">
                                Equip reps with strategies for real conversations.
                            </p>
</div>
<div className="lg:col-span-7">
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<iconify-icon className="text-zinc-500 mb-6" icon="solar:ruler-pen-linear" width="32"></iconify-icon>
<p className="text-zinc-400 text-sm leading-relaxed">Move past theory. We introduce structured playbooks that apply directly to your next discovery call, cold call, or negotiation.</p>
</div>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-12 border-l border-transparent last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#000] group-hover:border-green-500 transition-colors">
<span className="font-mono text-sm text-green-500">03</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 pt-1">
<span className="text-green-500 font-mono text-xs uppercase tracking-wide mb-3 block">Step 3</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Improve Sales Execution</h3>
<p className="text-zinc-400 text-base leading-relaxed">
                                Help teams perform better during key sales moments.
                            </p>
</div>
<div className="lg:col-span-7">
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<iconify-icon className="text-zinc-500 mb-6" icon="solar:cup-star-linear" width="32"></iconify-icon>
<p className="text-zinc-400 text-sm leading-relaxed">Turn frameworks into habit. Drive higher conversion rates by maintaining control when the pressure is on.</p>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black hover:bg-zinc-200 transition-colors" href="#booking">
                        Improve My Sales Performance
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5 relative">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">What's Included</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 justify-center">
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 flex items-center gap-4 hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<span className="text-white font-medium text-sm">Sales Execution Frameworks</span>
</div>
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 flex items-center gap-4 hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
<iconify-icon icon="solar:routing-2-linear" width="20"></iconify-icon>
</div>
<span className="text-white font-medium text-sm">Outbound Strategy Training</span>
</div>
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 flex items-center gap-4 hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
<iconify-icon icon="solar:headphones-round-sound-linear" width="20"></iconify-icon>
</div>
<span className="text-white font-medium text-sm">Sales Conversation Coaching</span>
</div>
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 flex items-center gap-4 hover:border-white/20 transition-colors md:col-start-1 md:col-span-1 sm:col-span-2">
<div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
<iconify-icon icon="solar:book-linear" width="20"></iconify-icon>
</div>
<span className="text-white font-medium text-sm">Sales Playbooks</span>
</div>
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 flex items-center gap-4 hover:border-white/20 transition-colors md:col-span-2 sm:col-span-2">
<div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<span className="text-white font-medium text-sm">Team Sales Workshops</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5 relative">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-12 bg-[#09090b] border border-white/5 rounded-[2rem] p-8 md:p-12 shadow-2xl">
<div className="w-full md:w-1/2 aspect-square rounded-2xl border border-white/10 bg-zinc-900/50 flex flex-col items-center justify-center relative overflow-hidden">
<iconify-icon className="text-zinc-700 mb-4" icon="solar:user-circle-linear" width="64"></iconify-icon>
<span className="text-zinc-500 font-mono text-sm uppercase tracking-wider z-10">Image Placeholder</span>
</div>
<div className="w-full md:w-1/2 flex flex-col justify-center">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Hi, I'm Nick Cegelski.</h2>
<div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
<p>
                                Through 30 Minutes to President’s Club, I share practical frameworks that help sales professionals perform better in real sales situations.
                            </p>
<p>
                                My focus is helping reps improve how they approach conversations, outreach, and deal execution.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] border-t border-white/5 relative" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">

<details className="group rounded-2xl bg-black border border-white/10 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white font-medium focus:outline-none">
<h3 className="text-lg">Who is this designed for?</h3>
<span className="shrink-0 rounded-full bg-zinc-900 p-1.5 text-zinc-400 sm:p-3 group-open:-rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="mt-4 leading-relaxed text-zinc-400 text-sm">
                            Sales professionals and teams looking to improve real sales conversations.
                        </p>
</details>

<details className="group rounded-2xl bg-black border border-white/10 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white font-medium focus:outline-none">
<h3 className="text-lg">Is this sales training or coaching?</h3>
<span className="shrink-0 rounded-full bg-zinc-900 p-1.5 text-zinc-400 sm:p-3 group-open:-rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="mt-4 leading-relaxed text-zinc-400 text-sm">
                            Both — combining frameworks with practical guidance.
                        </p>
</details>

<details className="group rounded-2xl bg-black border border-white/10 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white font-medium focus:outline-none">
<h3 className="text-lg">Does this help experienced reps?</h3>
<span className="shrink-0 rounded-full bg-zinc-900 p-1.5 text-zinc-400 sm:p-3 group-open:-rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="mt-4 leading-relaxed text-zinc-400 text-sm">
                            Yes. The focus is improving execution in real sales situations.
                        </p>
</details>

<details className="group rounded-2xl bg-black border border-white/10 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white font-medium focus:outline-none">
<h3 className="text-lg">What makes this approach different?</h3>
<span className="shrink-0 rounded-full bg-zinc-900 p-1.5 text-zinc-400 sm:p-3 group-open:-rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="mt-4 leading-relaxed text-zinc-400 text-sm">
                            It focuses on practical frameworks used by top-performing reps.
                        </p>
</details>

<details className="group rounded-2xl bg-black border border-white/10 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white font-medium focus:outline-none">
<h3 className="text-lg">How do we get started?</h3>
<span className="shrink-0 rounded-full bg-zinc-900 p-1.5 text-zinc-400 sm:p-3 group-open:-rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="mt-4 leading-relaxed text-zinc-400 text-sm">
                            Book a strategy call using the calendar below.
                        </p>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="booking">
<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-600/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#080808] relative z-10 shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 p-8 md:p-12 lg:p-16 items-start">

<div className="flex flex-col justify-center h-full pt-4 lg:pt-12">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
                            Strengthen Your Sales Execution
                        </h2>
<p className="text-zinc-400 text-lg mb-10 leading-relaxed max-w-md">
                            Book a conversation to explore how the 30MPC frameworks can help improve your sales conversations and performance.
                        </p>
<div>
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-4 text-sm font-semibold text-black hover:bg-green-400 transition-colors ring-1 ring-white/10 shadow-[0_0_30px_rgba(34,197,94,0.15)]" href="#booking">
                                Book My Call
                                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="relative w-full h-full min-h-[500px] lg:min-h-[600px] bg-[#0c0c0c] border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5 flex flex-col items-center justify-center mt-12 lg:mt-0 group cursor-pointer hover:border-white/20 transition-colors">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-zinc-600 mb-4 opacity-80 group-hover:opacity-100 transition-opacity" icon="solar:calendar-date-linear" width="48"></iconify-icon>
<span className="text-zinc-500 font-mono text-sm uppercase tracking-widest">Calendly Placeholder</span>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-white/5 pt-20 pb-10 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
<div className="col-span-2 pr-8">
<a aria-label="Back to home" className="flex items-center gap-3 text-white font-semibold tracking-tight text-lg mb-6 group" href="/">
<div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg shadow-green-500/5 relative overflow-hidden group-hover:bg-green-500/10 group-hover:border-green-500/20 transition-all duration-300">
<iconify-icon className="text-white group-hover:text-green-500 transition-colors duration-300" icon="solar:headphones-round-sound-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
                        30MPC
                    </a>
<p className="text-zinc-500 mb-6 leading-relaxed max-w-xs">
                        Practical frameworks that help sales professionals perform better in real sales situations.
                    </p>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Frameworks</h4>
<a className="text-zinc-500 hover:text-green-400 transition-colors" href="#">Sales Execution</a>
<a className="text-zinc-500 hover:text-green-400 transition-colors" href="#">Outbound Strategy</a>
<a className="text-zinc-500 hover:text-green-400 transition-colors" href="#">Discovery Calls</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Resources</h4>
<a className="text-zinc-500 hover:text-green-400 transition-colors" href="#">Playbooks</a>
<a className="text-zinc-500 hover:text-green-400 transition-colors" href="#">Podcast</a>
<a className="text-zinc-500 hover:text-green-400 transition-colors" href="#">Workshops</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Company</h4>
<a className="text-zinc-500 hover:text-green-400 transition-colors" href="#">About</a>
<a className="text-zinc-500 hover:text-green-400 transition-colors" href="#">Contact</a>
<a className="text-zinc-500 hover:text-green-400 transition-colors" href="#">Privacy</a>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-zinc-600 text-xs">
                    © 2024 30 Minutes to President’s Club. All rights reserved.
                </div>
</div>
</div>
</footer>


    </>
  );
}
