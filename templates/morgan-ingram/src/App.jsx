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
<a aria-label="AMP Social Home" className="flex items-center gap-3 pr-4 group shrink-0" href="/">
<div className="flex shadow-lg shadow-purple-500/10 overflow-hidden group-hover:bg-purple-500/20 group-hover:border-purple-500/30 transition-all duration-300 bg-purple-500/10 w-9 h-9 border-purple-500/20 border rounded-xl relative items-center justify-center">
<iconify-icon aria-hidden="true" className="text-purple-500 transition-transform duration-300 group-hover:scale-110" height="20" icon="solar:bolt-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight text-sm">AMP Social</span>
</a>
<div className="flex shrink-0 border-white/10 border-l ml-2 pl-4 items-center">
<a className="text-sm hover:bg-purple-500 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap font-medium text-white bg-purple-600 border border-purple-500 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-[0_0_20px_rgba(139,92,246,0.2)]" href="#booking">
                    Book a Call
                    <iconify-icon aria-hidden="true" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>
</header>
<main className="">

<section className="overflow-hidden min-h-[90vh] pt-44 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen z-0"></div>
<div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"></div>

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40 mix-blend-screen">
<div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] animate-float-blob"></div>
<div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-[100px] animate-float-blob" style={{animationDelay: '-10s'}}></div>
</div>
<div className="z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<h1 className="md:text-7xl lg:text-8xl leading-[1.05] text-5xl font-semibold text-white tracking-tight mb-8">
                    Build Pipeline With<br/> <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">Modern Outbound.</span>
</h1>
<p className="leading-relaxed text-lg font-light text-zinc-400 max-w-2xl mr-auto mb-10 ml-auto">
                    Morgan J. Ingram helps B2B sales teams generate more conversations through modern outbound and social selling strategies.
                </p>
<div className="flex flex-col mb-16 items-center justify-center">
<div className="flex w-full max-w-lg mb-6 pr-4 pl-4 items-center justify-center">
<a className="group relative inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-purple-600 px-8 text-base font-medium text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:shadow-[0_0_60px_rgba(139,92,246,0.5)] border border-purple-400/50" href="#booking">
                            Book a Strategy Call
                            <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="w-full max-w-5xl mx-auto relative z-10 group" style={{minHeight: '500px', padding: '2rem 0'}}>
<div className="absolute inset-x-8 inset-y-8 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition duration-700"></div>
<div className="relative w-full h-[500px] bg-black border border-white/10 rounded-3xl shadow-2xl flex flex-col items-center justify-center overflow-hidden spotlight-card sc-card">
<div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
<div className="w-20 h-20 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-purple-500/30">
<iconify-icon icon="solar:play-bold" width="32"></iconify-icon>
</div>
<span className="text-white/60 font-mono text-xs tracking-widest uppercase mb-2">Video Placeholder</span>
<h3 className="text-white text-xl md:text-2xl font-medium tracking-tight">Watch Morgan Break Down Modern Outbound</h3>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-white/5 bg-[#020202] relative z-20">
<div className="max-w-6xl mx-auto px-6 text-center">
<p className="text-zinc-500 font-mono text-xs uppercase tracking-wide mb-8">Sales teams building pipeline with AMP Social</p>
<div className="w-full h-32 border border-white/10 border-dashed rounded-2xl bg-white/5 flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
<iconify-icon className="text-zinc-600 mb-2" icon="solar:gallery-wide-linear" width="24"></iconify-icon>
<span className="text-zinc-500 font-mono text-sm uppercase tracking-widest">Image Placeholder (Logos)</span>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-[#050505] relative z-20" id="pain-points">
<div className="max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 text-red-500 mb-8 border border-red-500/20">
<iconify-icon icon="solar:shield-warning-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-16 leading-tight">
                    Why Most Outbound<br className="hidden md:block"/> Doesn’t Generate Pipeline
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
<div className="sc-card rounded-2xl p-8 spotlight-card">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 mb-5">
<iconify-icon icon="solar:copy-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3">Outreach feels copy-pasted</h3>
<p className="text-zinc-400 leading-relaxed">Prospects ignore messages that sound automated. Generic templates get deleted instantly.</p>
</div>
<div className="sc-card rounded-2xl p-8 spotlight-card">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 mb-5">
<iconify-icon icon="solar:graph-down-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3">SDRs send volume but not value</h3>
<p className="text-zinc-400 leading-relaxed">Activity metrics are high, but real conversations are low. Spamming isn't a strategy.</p>
</div>
<div className="sc-card rounded-2xl p-8 spotlight-card">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 mb-5">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3">LinkedIn is underused</h3>
<p className="text-zinc-400 leading-relaxed">Teams don’t leverage social selling effectively, missing out on where buyers actually engage.</p>
</div>
<div className="sc-card rounded-2xl p-8 spotlight-card">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 mb-5">
<iconify-icon icon="solar:book-bookmark-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3">Playbooks are outdated</h3>
<p className="text-zinc-400 leading-relaxed">Old outbound tactics no longer work with modern buyers who demand relevance.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#020202] border-y border-white/5" id="why-morgan">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-24">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                        Why Teams Work With <br/><span className="text-purple-500">Morgan J. Ingram</span>
</h2>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#020202] group-hover:border-purple-500 transition-colors">
<iconify-icon icon="solar:server-square-update-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="pt-1">
<h3 className="text-2xl md:text-3xl text-white font-semibold mb-4 tracking-tight">Modern outbound systems</h3>
<p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                            Built for how buyers respond today. Moving away from spam to targeted, relevant outreach that breaks through the noise.
                        </p>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#020202] group-hover:border-purple-500 transition-colors">
<iconify-icon icon="solar:chat-round-like-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="pt-1">
<h3 className="text-2xl md:text-3xl text-white font-semibold mb-4 tracking-tight">Social selling expertise</h3>
<p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                            LinkedIn used as a real pipeline channel. Learn how to build presence, engage authentically, and convert connections into conversations.
                        </p>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#020202] group-hover:border-purple-500 transition-colors">
<iconify-icon icon="solar:target-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="pt-1">
<h3 className="text-2xl md:text-3xl text-white font-semibold mb-4 tracking-tight">Execution-first approach</h3>
<p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                            Focused on real conversations, not theory. Actionable frameworks your team can deploy immediately to see results.
                        </p>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-12 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#020202] group-hover:border-purple-500 transition-colors">
<iconify-icon icon="solar:user-speak-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="pt-1">
<h3 className="text-2xl md:text-3xl text-white font-semibold mb-4 tracking-tight">SDR development</h3>
<p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                            Helping reps improve how they engage prospects. Elevating their skills from automated senders to strategic communicators.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-y border-white/5 relative">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/10 text-purple-500 mb-8 border border-purple-500/20">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-8">Outbound teams improving performance with AMP Social</h2>
<div className="w-full aspect-[21/9] border border-white/10 border-dashed rounded-[2rem] bg-zinc-900/50 flex flex-col items-center justify-center mb-8 shadow-2xl relative overflow-hidden group">
<div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-zinc-600 mb-4" icon="solar:gallery-linear" width="48"></iconify-icon>
<span className="text-zinc-500 font-mono text-sm uppercase tracking-widest relative z-10">Image Placeholder (Team / Proof)</span>
</div>
<p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                    Teams work with Morgan to improve outbound conversations and generate more qualified pipeline.
                </p>
</div>
</section>

<section className="py-24 bg-[#020202] relative" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="md:text-5xl text-3xl font-semibold text-white tracking-tight mb-4">
                        How AMP Social Builds Pipeline
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="sc-card rounded-[2rem] p-10 spotlight-card text-center flex flex-col items-center">
<div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white font-mono text-xl mb-6 shadow-inner relative">
                            01
                            <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
<iconify-icon icon="solar:magnifer-linear" width="12"></iconify-icon>
</div>
</div>
<h3 className="text-2xl text-white font-semibold mb-4">Audit outbound strategy</h3>
<p className="text-zinc-400 text-base leading-relaxed">We review your current sequences, messaging, and daily execution to find the gaps in your pipeline generation.</p>
</div>
<div className="sc-card rounded-[2rem] p-10 spotlight-card text-center flex flex-col items-center">
<div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white font-mono text-xl mb-6 shadow-inner relative">
                            02
                            <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
<iconify-icon icon="solar:pen-new-square-linear" width="12"></iconify-icon>
</div>
</div>
<h3 className="text-2xl text-white font-semibold mb-4">Implement modern playbooks</h3>
<p className="text-zinc-400 text-base leading-relaxed">Deploy frameworks that cut through the noise. Multi-channel sequences built for modern buyer behavior.</p>
</div>
<div className="sc-card rounded-[2rem] p-10 spotlight-card text-center flex flex-col items-center">
<div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white font-mono text-xl mb-6 shadow-inner relative">
                            03
                            <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
<iconify-icon icon="solar:rocket-linear" width="12"></iconify-icon>
</div>
</div>
<h3 className="text-2xl text-white font-semibold mb-4">Improve SDR execution</h3>
<p className="text-zinc-400 text-base leading-relaxed">Live coaching, tactical feedback, and continuous development to ensure your team executes at the highest level.</p>
</div>
</div>
<div className="mt-16 flex justify-center">
<a className="group relative inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-purple-600 px-8 text-base font-medium text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(139,92,246,0.3)] border border-purple-400/50" href="#booking">
                        Improve My Outbound
                        <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">What's Included</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(240px,auto)]">
<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between overflow-hidden">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon icon="solar:map-arrow-up-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Outbound Strategy Training</h3>
<p className="text-zinc-400 text-base leading-relaxed max-w-md">Comprehensive sessions designed to overhaul your approach to prospecting. Stop guessing and start executing with precision.</p>
</div>
</div>
<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold tracking-tight mb-3">LinkedIn Social Selling</h3>
<p className="text-zinc-400 text-base leading-relaxed">Turn your LinkedIn presence into a consistent pipeline generation engine.</p>
</div>
<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon icon="solar:user-speak-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold tracking-tight mb-3">SDR Coaching</h3>
<p className="text-zinc-400 text-base leading-relaxed">Direct, tactical feedback to help reps navigate objections and start more conversations.</p>
</div>
<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold tracking-tight mb-3">Outbound Playbooks</h3>
<p className="text-zinc-400 text-base leading-relaxed">Tested templates, scripts, and multi-channel workflows ready to deploy.</p>
</div>
<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-center bg-gradient-to-br from-zinc-900 to-black">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-pink-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon icon="solar:monitor-camera-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold tracking-tight mb-3">Sales Team Workshops</h3>
<p className="text-zinc-400 text-base leading-relaxed">Interactive sessions to align the entire team on modern execution.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#020202] border-t border-white/5 relative" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-[2.5rem] border border-white/10 border-dashed bg-zinc-900/50 flex flex-col items-center justify-center overflow-hidden relative group sc-card">
<div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-zinc-600 mb-4" icon="solar:user-circle-linear" width="64"></iconify-icon>
<span className="text-zinc-500 font-mono text-sm uppercase tracking-widest relative z-10">Image Placeholder (Morgan J. Ingram)</span>
</div>
<div className="flex flex-col justify-center">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-8">Hi, I’m Morgan J. Ingram.</h2>
<div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
<p>I work with B2B sales teams that want to generate more pipeline through better outbound.</p>
<p>Through AMP Social, I help teams improve how they approach outreach, use LinkedIn, and start real conversations with prospects.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5 relative">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight">Frequently Asked Questions</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 sc-card">
<h3 className="text-white font-medium text-lg mb-3">Who is this for?</h3>
<p className="text-zinc-400 leading-relaxed">B2B sales teams and SDR teams looking to modernize their approach and increase connection rates.</p>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 sc-card">
<h3 className="text-white font-medium text-lg mb-3">Is this training or consulting?</h3>
<p className="text-zinc-400 leading-relaxed">Both. We provide strategic consulting on your playbooks and tactical training for your reps.</p>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 sc-card">
<h3 className="text-white font-medium text-lg mb-3">Does this work for experienced teams?</h3>
<p className="text-zinc-400 leading-relaxed">Yes, highly focused on improving execution and adapting to the current, more difficult buying environment.</p>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 sc-card">
<h3 className="text-white font-medium text-lg mb-3">What makes this different?</h3>
<p className="text-zinc-400 leading-relaxed">A core focus on modern outbound combined with actionable social selling techniques that actually generate pipeline.</p>
</div>
<div className="md:col-span-2 p-8 rounded-2xl bg-zinc-900/40 border border-white/5 sc-card text-center">
<h3 className="text-white font-medium text-lg mb-3">How do we start?</h3>
<p className="text-zinc-400 leading-relaxed mb-6">Book a call to discuss your current challenges and see if AMP Social is a fit.</p>
<a className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors" href="#booking">
                            Book a Call <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-black" id="booking">
<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#080808] relative z-10 shadow-2xl sc-card">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 p-8 md:p-12 lg:p-16 items-start">

<div className="flex flex-col justify-center h-full pt-4 lg:pt-12">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
                            Generate More Pipeline With Outbound
                        </h2>
<p className="text-zinc-400 text-lg mb-10 leading-relaxed max-w-md">
                            Book a call to explore how AMP Social can help your team generate more sales conversations and build modern playbooks.
                        </p>
<div>
<a className="group relative inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-purple-600 px-8 text-base font-medium text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(139,92,246,0.3)] border border-purple-400/50" href="#">
                                Book My Call
                                <iconify-icon className="transition-transform duration-300 group-hover:scale-110" icon="solar:calendar-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="relative w-full h-full min-h-[500px] lg:min-h-[600px] bg-[#0c0c0c] border border-white/10 border-dashed rounded-2xl overflow-hidden flex flex-col items-center justify-center mt-8 lg:mt-0 opacity-80 hover:opacity-100 transition-opacity">
<iconify-icon className="text-purple-500/50 mb-4" icon="solar:calendar-bold-duotone" width="64"></iconify-icon>
<span className="text-zinc-400 font-mono text-sm uppercase tracking-widest">Calendly Placeholder</span>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-white/5 pt-20 pb-10 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
<div className="pr-8">
<a aria-label="AMP Social Home" className="flex items-center gap-3 text-white font-semibold tracking-tight text-lg mb-6 group" href="/">
<div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg shadow-purple-500/5 relative overflow-hidden group-hover:bg-purple-500/10 group-hover:border-purple-500/20 transition-all duration-300">
<iconify-icon className="text-white group-hover:text-purple-500 transition-colors duration-300" icon="solar:bolt-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
                        AMP Social
                    </a>
<p className="text-zinc-500 mb-6 leading-relaxed max-w-sm">
                        Helping B2B sales teams generate more conversations through modern outbound and social selling strategies.
                    </p>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-zinc-600 text-xs">
                    © 2024 AMP Social. All rights reserved.
                </div>
</div>
</div>
</footer>


    </>
  );
}
