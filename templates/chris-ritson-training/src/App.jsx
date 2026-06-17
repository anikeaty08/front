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



                          (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
                        Cal("init", "15min", {origin:"https://app.cal.com"});
                          Cal.ns["15min"]("inline", {
                            elementOrSelector:"#my-cal-inline-15min",
                            config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true", "theme":"dark"},
                            calLink: "guillaume-tonet-mejox0/15min",
                          });
                          Cal.ns["15min"]("ui", {"theme":"dark", "cssVarsPerTheme":{"light":{"cal-brand":"#881717"},"dark":{"cal-brand":"#06B6D4","cal-text":"#ffffff","cal-text-muted":"#a1a1aa","cal-bg":"#0c0c0c"}},"hideEventTypeDetails":false,"layout":"month_view"});
                        


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
<a aria-label="Home" className="flex items-center gap-3 pr-4 group shrink-0" href="/">
<div className="flex shadow-lg shadow-cyan-500/10 overflow-hidden group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30 transition-all duration-300 bg-cyan-500/10 w-9 h-9 border-cyan-500/20 border rounded-xl relative items-center justify-center">
<iconify-icon aria-hidden="true" className="text-cyan-500 transition-transform duration-300 group-hover:scale-110" height="20" icon="solar:phone-calling-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight text-sm uppercase tracking-wider">Chris Ritson</span>
</a>
<div className="flex shrink-0 border-white/10 border-l ml-2 pl-4 items-center">
<a className="text-sm hover:bg-cyan-400 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap font-semibold text-black bg-cyan-500 rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#demo">
                    Book a call
                    <iconify-icon aria-hidden="true" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>
</header>
<main className="">

<section className="overflow-hidden min-h-[90vh] pt-44 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen z-0"></div>
<div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"></div>
<div className="call-pulse-bg"></div>
<div className="z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-300 text-xs uppercase font-medium tracking-wide mb-8 hover:border-cyan-500/40 transition-colors cursor-default shadow-[0_0_20px_rgba(6,182,212,0.1)] backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-signal"></span>
                    Cold Calling Execution
                </div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.05] text-5xl font-semibold text-white tracking-tight mb-8 max-w-5xl mx-auto">
                    Your Cold Calls Aren’t Failing<br/> Because People Don’t Answer
                </h1>
<p className="leading-relaxed text-lg font-light text-zinc-400 max-w-2xl mr-auto mb-10 ml-auto">
                    They fail because of what happens after they do. Chris Ritson shows reps how to handle <span className="text-white font-medium">real conversations</span> that actually lead somewhere.
                </p>
<div className="flex flex-col mb-16 items-center justify-center">
<div className="flex w-full max-w-lg pr-4 pl-4 items-center justify-center">
<a className="group relative inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-cyan-500 px-8 text-base font-semibold text-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(6,182,212,0.2)] hover:shadow-[0_0_60px_rgba(6,182,212,0.4)]" href="#demo">
<span className="cursor-pointer mix-blend-overlay border-black/10 border rounded-full absolute top-0 right-0 bottom-0 left-0" role="button"></span>
                            Fix My Cold Calls
                            <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left relative z-10 bg-black/40 p-6 md:p-8 rounded-3xl border border-white/5 backdrop-blur-md">

<div className="aspect-video bg-[#0a0a0a] border border-white/10 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group shadow-2xl">
<div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors duration-500"></div>
<iconify-icon className="text-cyan-500 mb-4 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-transform group-hover:scale-110 duration-300" icon="solar:play-circle-bold-duotone" width="64"></iconify-icon>
<span className="text-zinc-500 font-mono text-sm tracking-widest uppercase">[ VIDEO PLACEHOLDER ]</span>
<div className="absolute bottom-4 left-4 right-4 flex justify-center">
<div className="bg-black/80 px-4 py-2 rounded-lg border border-white/10 text-xs font-medium text-white backdrop-blur-sm tracking-wide">
                                Watch: Why Cold Calls Break Down
                            </div>
</div>
</div>

<div className="space-y-6">
<div className="text-xl text-white font-medium leading-snug">
                            If you’re making calls but not getting results, it’s not a volume issue.
                        </div>
<div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-md text-cyan-400 font-semibold tracking-wide text-sm">
                            It’s a conversation issue.
                        </div>
<p className="text-zinc-400 text-sm uppercase tracking-widest font-mono pt-2">Most reps:</p>
<ul className="space-y-4 text-zinc-300 text-base">
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 mt-0.5 shrink-0" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span><strong className="text-white font-medium">sound scripted</strong> the moment someone answers</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 mt-0.5 shrink-0" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span><strong className="text-white font-medium">lose control</strong> of the call within seconds</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 mt-0.5 shrink-0" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>try to <strong className="text-white font-medium">pitch instead of engage</strong></span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-400 mt-0.5 shrink-0" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span><strong className="text-white font-medium">panic</strong> when the conversation goes off script</span>
</li>
</ul>
<div className="pt-6 border-t border-white/10 mt-6">
<p className="text-zinc-400 text-sm leading-relaxed">
                                In this video, Chris breaks down why most cold calls fail early, how to stay in control without sounding robotic, and what actually creates a real conversation.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-[#020202] relative z-20 flex flex-col items-center justify-center">
<p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-6 text-center px-4">Reps improving outbound conversations</p>
<div className="w-full max-w-5xl h-24 mx-auto bg-zinc-900/30 border border-white/5 rounded-2xl flex items-center justify-center px-6 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-transparent to-[#020202] z-10 pointer-events-none"></div>
<span className="text-zinc-600 font-mono text-sm tracking-widest z-0">[ IMAGE PLACEHOLDER - LOGO ROW ]</span>
</div>
</section>

<section className="py-32 bg-[#050505] relative z-20" id="problem">
<div className="max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 text-red-500 mb-8 border border-red-500/20">
<iconify-icon icon="solar:danger-triangle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="md:text-5xl text-4xl font-semibold text-white tracking-tight mb-16">
                    Why Most Cold Calls Go Nowhere
                </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
<div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-red-500/20 transition-colors shadow-lg shadow-black/50">
<div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-6">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold mb-3 tracking-tight">Calls feel scripted</h3>
<p className="text-zinc-400 leading-relaxed">Prospects disengage immediately when they hear the "sales voice".</p>
</div>
<div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-red-500/20 transition-colors shadow-lg shadow-black/50">
<div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-6">
<iconify-icon icon="solar:routing-2-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold mb-3 tracking-tight">Reps rush into pitching</h3>
<p className="text-zinc-400 leading-relaxed">Instead of building a conversation, they throw features at a wall.</p>
</div>
<div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-red-500/20 transition-colors shadow-lg shadow-black/50">
<div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-6">
<iconify-icon icon="solar:ghost-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold mb-3 tracking-tight">Fear takes over</h3>
<p className="text-zinc-400 leading-relaxed">Reps lose confidence and freeze when things go off track.</p>
</div>
<div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-red-500/20 transition-colors shadow-lg shadow-black/50">
<div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-6">
<iconify-icon icon="solar:steering-wheel-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold mb-3 tracking-tight">No control of the call</h3>
<p className="text-zinc-400 leading-relaxed">Conversations drift without direction, wasting time for both sides.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black border-y border-white/5" id="framework">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-24">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                        How Chris Improves <span className="text-cyan-500">Cold Calling</span>
</h2>
<p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Moving away from scripts and volume, towards real-time execution and conversation control.
                    </p>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#000] group-hover:border-cyan-500 transition-colors">
<iconify-icon icon="solar:refresh-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 pt-1">
<span className="text-cyan-400 font-mono text-xs uppercase tracking-wide mb-3 block">Phase 01</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Cold Calling Isn’t About Scripts</h3>
<p className="text-zinc-400 text-base leading-relaxed">
                                It’s about control. Better scripts won’t fix bad execution. More dials won’t fix poor conversions.
                            </p>
</div>
<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
<iconify-icon icon="solar:stopwatch-play-linear" width="18"></iconify-icon>
</div>
<h4 className="text-white text-sm font-medium">Real-time Response</h4>
</div>
<p className="text-zinc-500 text-xs leading-relaxed">What matters is how you respond in the moment, not what you planned to say.</p>
</div>
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
<iconify-icon icon="solar:route-linear" width="18"></iconify-icon>
</div>
<h4 className="text-white text-sm font-medium">Guide the Conversation</h4>
</div>
<p className="text-zinc-500 text-xs leading-relaxed">Taking the lead professionally to uncover truth, rather than just pitching features.</p>
</div>
<div className="sm:col-span-2 bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
<iconify-icon icon="solar:eye-linear" width="18"></iconify-icon>
</div>
<h4 className="text-white text-sm font-medium">Stay Present</h4>
</div>
<p className="text-zinc-500 text-xs leading-relaxed max-w-lg">Stop waiting for your turn to speak. Listen to the prospect's tone, pace, and objections to navigate the call effectively.</p>
</div>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#000] group-hover:border-blue-500 transition-colors">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 pt-1">
<span className="text-blue-400 font-mono text-xs uppercase tracking-wide mb-3 block">Phase 02</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Conversation Control</h3>
<p className="text-zinc-400 text-base leading-relaxed">
                                Top performers don’t follow rigid scripts. They master the mechanics of human interaction.
                            </p>
</div>
<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:ruler-angular-linear" width="18"></iconify-icon>
</div>
<h4 className="text-white text-sm font-medium">Stay Flexible</h4>
</div>
<p className="text-zinc-500 text-xs leading-relaxed">Adapt instantly to objections and detours without losing the main objective.</p>
</div>
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:radar-linear" width="18"></iconify-icon>
</div>
<h4 className="text-white text-sm font-medium">Read the Moment</h4>
</div>
<p className="text-zinc-500 text-xs leading-relaxed">Understand the underlying psychology of the prospect's responses.</p>
</div>
<div className="sm:col-span-2 bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
<iconify-icon icon="solar:round-transfer-horizontal-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-1">The Result</h4>
<p className="text-zinc-400 text-sm">That’s what turns <strong className="text-white">Calls → into conversations.</strong></p>
</div>
</div>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-12 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#000] group-hover:border-purple-500 transition-colors">
<iconify-icon icon="solar:clipboard-list-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 pt-1">
<span className="text-purple-400 font-mono text-xs uppercase tracking-wide mb-3 block">Phase 03</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">The Training Process</h3>
<p className="text-zinc-400 text-base leading-relaxed mb-6">
                                We strip away bad habits and rebuild your approach around execution.
                            </p>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-full transition-colors border border-white/10" href="#demo">
                                Improve My Calls <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="lg:col-span-7 flex flex-col gap-4">
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors flex items-start gap-4">
<div className="w-8 h-8 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-400 font-mono text-sm shrink-0">1</div>
<div>
<h4 className="text-white font-medium mb-1">Break down current call behavior</h4>
<p className="text-zinc-500 text-sm leading-relaxed">Identify exactly where you lose control and why prospects disengage in your current approach.</p>
</div>
</div>
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-white/10 transition-colors flex items-start gap-4">
<div className="w-8 h-8 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-400 font-mono text-sm shrink-0">2</div>
<div>
<h4 className="text-white font-medium mb-1">Remove scripted patterns</h4>
<p className="text-zinc-500 text-sm leading-relaxed">Erase the "sales voice" and generic pitches that trigger immediate resistance.</p>
</div>
</div>
<div className="bg-zinc-900/40 border border-purple-500/20 rounded-2xl p-5 hover:bg-zinc-900/80 hover:border-purple-500/40 transition-colors flex items-start gap-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent pointer-events-none"></div>
<div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-mono text-sm shrink-0 z-10">3</div>
<div className="z-10">
<h4 className="text-white font-medium mb-1">Train real-time conversation control</h4>
<p className="text-zinc-400 text-sm leading-relaxed">Practice handling objections dynamically, steering the call, and establishing peer-to-peer positioning.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-y border-white/5 relative" id="training">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl font-semibold text-white tracking-tight">What's Included</h2>
<p className="text-zinc-500 mt-2">Everything you need to execute better.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(240px,auto)]">
<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between group overflow-hidden">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:phone-calling-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Cold Calling Training &amp; Execution</h3>
<p className="text-zinc-400 text-base leading-relaxed max-w-md">Comprehensive training focused purely on execution. No fluff theory. Learn how to open, navigate, and close real outbound calls.</p>
</div>
</div>
<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col group overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:structure-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Conversation Control Frameworks</h3>
<p className="text-zinc-400 text-base leading-relaxed">Mental models and tactical frameworks to keep you grounded when the prospect tries to derail the conversation.</p>
</div>
<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:user-speak-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-2">Outbound Coaching</h3>
<p className="text-zinc-400 text-base leading-relaxed">Direct, raw feedback on your actual calls to fix bad habits quickly.</p>
</div>
</div>
<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col md:flex-row items-center justify-between overflow-hidden gap-6">
<div className="relative z-10 max-w-sm">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Prospecting Workshops</h3>
<p className="text-zinc-400 text-base leading-relaxed">Interactive sessions where we break down live calls, roleplay scenarios, and build confidence through repetition.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#020202] relative">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<div className="text-cyan-500 font-mono text-xs uppercase tracking-wide mb-2">Real Call Execution</div>
<h2 className="md:text-5xl text-3xl font-semibold text-white tracking-tight mb-4">
                        Sales professionals follow Chris Ritson’s approach.
                    </h2>
<p className="text-zinc-400 text-base max-w-xl mx-auto">
                        To improve how they handle live outbound conversations.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-6 gap-y-6">
<div className="group relative p-4 rounded-[2rem] bg-[#0A0A0A] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
<div className="aspect-[4/3] w-full bg-zinc-900 rounded-xl mb-6 flex items-center justify-center border border-white/5 relative overflow-hidden">
<iconify-icon className="text-zinc-700" icon="solar:gallery-linear" width="32"></iconify-icon>
<span className="absolute bottom-4 text-zinc-500 font-mono text-[10px] tracking-widest">[ IMAGE PLACEHOLDER ]</span>
</div>
<div className="px-4 pb-4">
<h3 className="text-white font-semibold text-lg mb-1">Reps improving real call execution</h3>
<p className="text-zinc-500 text-sm">Outbound SDRs mastering conversation control.</p>
</div>
</div>
<div className="group relative p-4 rounded-[2rem] bg-[#0A0A0A] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
<div className="aspect-[4/3] w-full bg-zinc-900 rounded-xl mb-6 flex items-center justify-center border border-white/5 relative overflow-hidden">
<iconify-icon className="text-zinc-700" icon="solar:gallery-linear" width="32"></iconify-icon>
<span className="absolute bottom-4 text-zinc-500 font-mono text-[10px] tracking-widest">[ IMAGE PLACEHOLDER ]</span>
</div>
<div className="px-4 pb-4">
<h3 className="text-white font-semibold text-lg mb-1">Founders booking meetings</h3>
<p className="text-zinc-500 text-sm">Executing calls without sounding like a typical vendor.</p>
</div>
</div>
<div className="group relative p-4 rounded-[2rem] bg-[#0A0A0A] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
<div className="aspect-[4/3] w-full bg-zinc-900 rounded-xl mb-6 flex items-center justify-center border border-white/5 relative overflow-hidden">
<iconify-icon className="text-zinc-700" icon="solar:gallery-linear" width="32"></iconify-icon>
<span className="absolute bottom-4 text-zinc-500 font-mono text-[10px] tracking-widest">[ IMAGE PLACEHOLDER ]</span>
</div>
<div className="px-4 pb-4">
<h3 className="text-white font-semibold text-lg mb-1">Sales teams scaling outbound</h3>
<p className="text-zinc-500 text-sm">Standardizing a framework built on real conversations.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5 relative" id="about">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="aspect-square bg-zinc-900 rounded-3xl border border-white/10 relative overflow-hidden flex items-center justify-center shadow-2xl">
<iconify-icon className="text-zinc-700" icon="solar:user-bold-duotone" width="64"></iconify-icon>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<span className="absolute bottom-6 text-zinc-500 font-mono text-xs tracking-widest uppercase z-10">[ IMAGE PLACEHOLDER - CHRIS ]</span>
</div>
<div className="space-y-6">
<h2 className="text-4xl font-semibold text-white tracking-tight">Hi, I’m Chris Ritson.</h2>
<div className="space-y-4 text-lg text-zinc-400 leading-relaxed">
<p>
                                I work with sales reps who are making calls but not getting the outcomes they want.
                            </p>
<p>
                                The issue isn’t effort — it’s how conversations are handled.
                            </p>
<p className="text-white font-medium border-l-2 border-cyan-500 pl-4 py-1">
                                My focus is helping reps improve what actually happens during the call.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5 relative z-20">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<div className="p-6 rounded-2xl bg-black border border-white/5">
<h3 className="text-white font-semibold text-lg mb-2">Who is this for?</h3>
<p className="text-zinc-400">Outbound reps and teams making cold calls.</p>
</div>
<div className="p-6 rounded-2xl bg-black border border-white/5">
<h3 className="text-white font-semibold text-lg mb-2">Is this cold calling training?</h3>
<p className="text-zinc-400">Yes, focused entirely on real conversations, not outdated scripts.</p>
</div>
<div className="p-6 rounded-2xl bg-black border border-white/5">
<h3 className="text-white font-semibold text-lg mb-2">Does this work for experienced reps?</h3>
<p className="text-zinc-400">Yes, especially those struggling with call quality or feeling stuck in a rut.</p>
</div>
<div className="p-6 rounded-2xl bg-black border border-white/5">
<h3 className="text-white font-semibold text-lg mb-2">What makes this different?</h3>
<p className="text-zinc-400">Focus on real-time execution, psychology, and control, not rigid scripts.</p>
</div>
<div className="p-6 rounded-2xl bg-black border border-white/5">
<h3 className="text-white font-semibold text-lg mb-2">How do we start?</h3>
<p className="text-zinc-400">Book a call using the calendar below.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-black" id="demo">
<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#080808] relative z-10 shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 p-8 md:p-12 lg:p-16 items-start">

<div className="flex flex-col justify-center h-full pt-4 lg:pt-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-300 text-xs uppercase font-medium tracking-wide mb-6 w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-signal"></span>
                            Take Action
                        </div>
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
                            Turn More Calls<br/> Into Conversations.
                        </h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-md">
                            Book a call to improve how your team handles cold calling. Let's discuss where your conversations are breaking down.
                        </p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white">
<iconify-icon aria-hidden="true" icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">Review your current call structure</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white">
<iconify-icon aria-hidden="true" icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">Identify conversation control gaps</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white">
<iconify-icon aria-hidden="true" icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">Outline a practical execution plan</span>
</div>
</div>
</div>

<div className="relative w-full h-full min-h-[500px] lg:min-h-[600px] bg-[#0c0c0c] border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5 flex flex-col group">

<div className="absolute top-2 right-2 bg-black/80 px-2 py-1 rounded text-[10px] text-zinc-500 font-mono z-50 pointer-events-none opacity-50 group-hover:opacity-10">[ CALENDLY PLACEHOLDER ]</div>
<div className="cal-inline-container" id="my-cal-inline-15min" style={{width: '100%', height: '100%', overflow: 'scroll'}}>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style></div>

</div>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-white/5 pt-20 pb-10 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between gap-8 mb-16">
<div className="max-w-sm">
<a aria-label="Home" className="flex items-center gap-3 text-white font-semibold tracking-tight text-lg mb-6 group uppercase tracking-wider" href="/">
<div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg shadow-cyan-500/5 relative overflow-hidden group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all duration-300">
<iconify-icon className="text-white group-hover:text-cyan-500 transition-colors duration-300" icon="solar:phone-calling-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
                        Chris Ritson
                    </a>
<p className="text-zinc-500 mb-6 leading-relaxed">
                        Turn more calls into conversations. Direct, raw, and execution-first outbound training.
                    </p>
</div>
<div className="flex gap-16">
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Menu</h4>
<a className="text-zinc-500 hover:text-cyan-400 transition-colors" href="#problem">The Problem</a>
<a className="text-zinc-500 hover:text-cyan-400 transition-colors" href="#framework">Framework</a>
<a className="text-zinc-500 hover:text-cyan-400 transition-colors" href="#training">Training</a>
<a className="text-zinc-500 hover:text-cyan-400 transition-colors" href="#about">About</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Socials</h4>
<a className="text-zinc-500 hover:text-cyan-400 transition-colors" href="https://www.linkedin.com/in/chris-ritson" target="_blank">LinkedIn</a>
<a className="text-zinc-500 hover:text-cyan-400 transition-colors" href="https://www.youtube.com/@TheChrisRitson" target="_blank">YouTube</a>
<a className="text-zinc-500 hover:text-cyan-400 transition-colors" href="https://chrisritson.xyz/" target="_blank">Website</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-zinc-600 text-xs">
                    © 2024 Chris Ritson. All rights reserved.
                </div>
</div>
</div>
</footer>


    </>
  );
}
