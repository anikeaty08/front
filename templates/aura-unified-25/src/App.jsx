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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
background: '#050505',
surface: '#0A0A0B',
surfaceHighlight: '#121214',
accent: {
DEFAULT: '#FFFFFF',
dim: '#888888'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Instrument Serif', 'serif'],
mono: ['JetBrains Mono', 'monospace'],
},
letterSpacing: {
tightest: '-.075em',
tighter: '-.05em',
}
}
}
}



        lucide.createIcons();
        
        // Simple cursor spotlight effect for cards
        document.querySelectorAll('.card-shine').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-background to-background blur-[100px] opacity-50"></div>
<div className="bg-grid absolute inset-0 opacity-60"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
<div className="w-5 h-5 text-white relative">
<div className="absolute inset-0 bg-white blur-sm opacity-50"></div>
<svg className="w-5 h-5 relative z-10" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"></path></svg>
</div>
<span className="text-sm font-medium tracking-tight text-white">Aura</span>
</div>
<div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Product</a>
<a className="hover:text-white transition-colors" href="#">Method</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Changelog</a>
</div>
<div className="flex items-center gap-3">
<a className="text-[13px] font-medium text-neutral-400 hover:text-white transition-colors px-2" href="#">Log in</a>
<button className="group relative px-4 py-1.5 rounded-full bg-white text-black text-[13px] font-medium hover:bg-neutral-200 transition-all overflow-hidden">
<span className="relative z-10">Get Access</span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[beam_1s_infinite]"></div>
</button>
</div>
</div>
</nav>

<main className="relative z-10 flex flex-col items-center pt-32 pb-20 px-4 text-center max-w-[90rem] mx-auto">

<div className="animate-fade-up delay-100 mb-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_15px_-3px_rgba(255,255,255,0.1)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[11px] font-medium text-neutral-300 tracking-wide uppercase">v2.0 Available Now</span>
</div>
</div>

<h1 className="animate-fade-up delay-200 text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-[0.95] mb-8">
            Orchestrate your <br/>
<span className="font-serif italic text-neutral-400 opacity-80 font-light pr-2">digital</span> chaos.
        </h1>
<p className="animate-fade-up delay-300 text-base md:text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed mb-10 font-light">
            A unified operating system for your work. Connect apps, automate flows, and regain your focus state with keyboard-first precision.
        </p>

<div className="animate-fade-up delay-500 relative w-full max-w-3xl mx-auto perspective-[2000px] group mb-24">

<div className="relative bg-[#0F0F11] rounded-xl border border-white/10 shadow-2xl overflow-hidden transform transition-all duration-700 group-hover:rotate-x-2 group-hover:-translate-y-2">

<div className="p-4 border-b border-white/5 flex items-center gap-3">
<svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<span className="text-sm text-neutral-500 font-mono">Find or create...</span>
<div className="ml-auto flex gap-2">
<kbd className="hidden sm:inline-flex items-center h-5 px-1.5 rounded border border-white/10 bg-white/5 font-mono text-[10px] text-neutral-500">⌘ K</kbd>
</div>
</div>

<div className="p-2 space-y-1">
<div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 border border-white/5">
<div className="w-5 h-5 rounded bg-indigo-500/20 text-indigo-400 flex items-center justify-center"><svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></div>
<div className="flex flex-col text-left">
<span className="text-xs font-medium text-white">Create Linear Issue</span>
<span className="text-[10px] text-neutral-500">Project: Aura V2</span>
</div>
<span className="ml-auto text-[10px] text-neutral-600 font-mono">↵</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group/item">
<div className="w-5 h-5 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center"><svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div>
<div className="flex flex-col text-left">
<span className="text-xs font-medium text-neutral-300 group-hover/item:text-white">Mark all notifications read</span>
<span className="text-[10px] text-neutral-600">Slack, GitHub, Email</span>
</div>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group/item">
<div className="w-5 h-5 rounded bg-orange-500/20 text-orange-400 flex items-center justify-center"><svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
<div className="flex flex-col text-left">
<span className="text-xs font-medium text-neutral-300 group-hover/item:text-white">Set status to "Deep Work"</span>
<span className="text-[10px] text-neutral-600">Until 4:00 PM</span>
</div>
</div>
</div>

<div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-indigo-500/20 blur-[80px]"></div>
</div>

<div className="absolute -right-12 top-10 w-24 h-24 rounded-xl border border-white/5 bg-[#0F0F11]/80 backdrop-blur-md p-3 animate-float" style={{animationDelay: '1s'}}>
<div className="w-full h-full flex flex-col justify-between opacity-60">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-500"></div>
<div className="space-y-1">
<div className="w-full h-1 bg-white/20 rounded-full"></div>
<div className="w-2/3 h-1 bg-white/20 rounded-full"></div>
</div>
</div>
</div>
<div className="absolute -left-8 bottom-10 w-32 h-16 rounded-xl border border-white/5 bg-[#0F0F11]/80 backdrop-blur-md p-3 animate-float flex items-center gap-3" style={{animationDelay: '2s'}}>
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] font-mono text-neutral-400">Syncing...</span>
</div>
</div>

<div className="w-full max-w-6xl mx-auto overflow-hidden mask-linear-fade relative opacity-40 hover:opacity-80 transition-opacity duration-500">
<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
<div className="flex gap-12 animate-marquee w-max">

<span className="text-lg font-semibold text-neutral-600 flex items-center gap-2"><svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z"></path></svg> GitHub</span>
<span className="text-lg font-semibold text-neutral-600 flex items-center gap-2"><svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.527 2.527 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"></path></svg> Slack</span>
<span className="text-lg font-semibold text-neutral-600 flex items-center gap-2"><svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path d="M12 0l12 12-12 12L0 12z"></path></svg> Notion</span>
<span className="text-lg font-semibold text-neutral-600 flex items-center gap-2"><svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle></svg> Linear</span>
<span className="text-lg font-semibold text-neutral-600 flex items-center gap-2"><svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"></path></svg> Gmail</span>
<span className="text-lg font-semibold text-neutral-600 flex items-center gap-2"><svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"></path></svg> Vercel</span>
<span className="text-lg font-semibold text-neutral-600 flex items-center gap-2"><svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z"></path></svg> GitHub</span>
<span className="text-lg font-semibold text-neutral-600 flex items-center gap-2"><svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.527 2.527 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"></path></svg> Slack</span>
<span className="text-lg font-semibold text-neutral-600 flex items-center gap-2"><svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path d="M12 0l12 12-12 12L0 12z"></path></svg> Notion</span>
</div>
</div>
</main>

<section className="py-20 px-6 max-w-7xl mx-auto relative">

<div className="mb-16 flex flex-col md:flex-row items-start justify-between gap-8">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Built for the <span className="font-serif italic opacity-80">flow</span> state.</h2>
<p className="text-neutral-400 text-sm md:text-base">Designed to remove friction. Every pixel serves a purpose in your workflow.</p>
</div>
<div className="hidden md:block text-right">
<div className="text-xs font-mono text-neutral-500 mb-1">SYSTEM STATUS</div>
<div className="flex items-center justify-end gap-2 text-emerald-500 text-xs font-medium">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    All Systems Operational
                </div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[minmax(300px,auto)]">

<div className="md:col-span-3 lg:col-span-4 glass rounded-3xl p-8 relative overflow-hidden group card-shine flex flex-col justify-between">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="M6 8h.01"></path><path d="M10 8h.01"></path><path d="M14 8h.01"></path><path d="M18 8h.01"></path><path d="M6 12h.01"></path><path d="M10 12h.01"></path><path d="M14 12h.01"></path><path d="M18 12h.01"></path><path d="M7 16h10"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Keyboard First</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Navigate at the speed of thought. No mouse needed.</p>
</div>

<div className="absolute right-4 bottom-4 flex gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
<kbd className="h-8 w-8 flex items-center justify-center rounded bg-neutral-800 border border-white/10 text-neutral-400 text-xs font-mono">C</kbd>
<kbd className="h-8 w-8 flex items-center justify-center rounded bg-neutral-800 border border-white/10 text-neutral-400 text-xs font-mono">↵</kbd>
</div>
</div>

<div className="md:col-span-3 lg:col-span-8 glass rounded-3xl p-0 relative overflow-hidden group card-shine">
<div className="absolute inset-0 bg-grid opacity-20"></div>
<div className="absolute inset-0 flex items-center justify-center z-0">

<div className="relative w-full h-full opacity-50 group-hover:opacity-100 transition-opacity duration-700">
<svg className="w-full h-full absolute inset-0" style={{maskImage: 'linear-gradient(to right, transparent, black, transparent)'}}>
<path className="text-neutral-700" d="M100,150 C200,150 250,100 350,100" fill="none" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1"></path>
<path className="text-neutral-700" d="M100,150 C200,150 250,200 350,200" fill="none" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1"></path>
<circle className="text-neutral-500 fill-current" cx="100" cy="150" r="4"></circle>
<circle className="text-neutral-500 fill-current" cx="350" cy="100" r="4"></circle>
<circle className="text-neutral-500 fill-current" cx="350" cy="200" r="4"></circle>

<circle className="text-white fill-white" cx="0" cy="0" r="3">
<animatemotion dur="3s" path="M100,150 C200,150 250,100 350,100" repeatcount="indefinite"></animatemotion>
</circle>
</svg>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background to-transparent z-10">
<h3 className="text-xl font-medium text-white mb-2">Visual Automation</h3>
<p className="text-sm text-neutral-400 max-w-md">Drag and drop to connect your tools. Trigger Slack messages from GitHub commits or Linear updates from Emails.</p>
</div>
</div>

<div className="md:col-span-6 lg:col-span-6 glass rounded-3xl p-8 relative overflow-hidden group card-shine flex flex-col justify-between h-[320px]">
<div className="relative z-20">
<div className="flex items-center justify-between mb-6">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle></svg>
</div>

<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-neutral-800 appearance-none cursor-pointer transition-all duration-300" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-neutral-800 cursor-pointer border border-neutral-700" htmlFor="toggle"></label>
</div>
</div>
<h3 className="text-xl font-medium text-white mb-2">Deep Focus Mode</h3>
<p className="text-sm text-neutral-400">Silence the noise. Smart filtering blocks non-urgent notifications while you're in the zone.</p>
</div>

<div className="absolute right-0 bottom-0 w-48 h-48 bg-gradient-to-tl from-indigo-500/10 to-transparent rounded-tl-full"></div>
</div>

<div className="md:col-span-6 lg:col-span-6 glass rounded-3xl relative overflow-hidden group card-shine h-[320px]">
<div className="absolute top-0 left-0 w-full h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
<span className="ml-2 text-[10px] font-mono text-neutral-500">config.ts</span>
</div>
<div className="p-8 mt-8 font-mono text-xs leading-relaxed text-neutral-400">
<p><span className="text-purple-400">export</span> <span className="text-blue-400">const</span> config = {</p>
<p className="pl-4">theme: <span className="text-green-400">'dark'</span>,</p>
<p className="pl-4">integrations: [<span className="text-green-400">'slack'</span>, <span className="text-green-400">'github'</span>],</p>
<p className="pl-4">automation: <span className="text-blue-400">true</span>,</p>
<p className="pl-4">notifications: {</p>
<p className="pl-8">priority: <span className="text-green-400">'high'</span></p>
<p className="pl-4">}</p>
<p>}</p>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/90 to-transparent">
<h3 className="text-lg font-medium text-white">Developer API</h3>
<p className="text-sm text-neutral-500">Extend Aura with TypeScript.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden border-t border-white/5">
<div className="absolute inset-0 bg-gradient-to-b from-background via-indigo-950/5 to-background"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-8">
                Global Sync <span className="text-neutral-500">in milliseconds</span>
</h2>

<div className="w-full max-w-4xl h-64 relative mt-10 opacity-70">

<div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]">
<div className="absolute inset-0 rounded-full border border-white animate-[pulse-ring_2s_infinite]"></div>
</div>
<div className="absolute top-1/3 left-1/2 w-1.5 h-1.5 bg-neutral-500 rounded-full"></div>
<div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]">
<div className="absolute inset-0 rounded-full border border-white animate-[pulse-ring_2s_infinite] delay-500"></div>
</div>
<div className="absolute top-1/4 right-1/3 w-1.5 h-1.5 bg-neutral-500 rounded-full"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none">
<path className="opacity-50" d="M250,128 Q500,50 750,150" fill="none" stroke="url(#gradient-line)" stroke-dasharray="4 4" strokeWidth="1"></path>
<defs>
<lineargradient id="gradient-line" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="transparent"></stop>
<stop offset="50%" stop-color="white"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-12 text-center">
<div>
<div className="text-3xl font-serif italic text-white mb-1">0.2s</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Latency</div>
</div>
<div>
<div className="text-3xl font-serif italic text-white mb-1">100%</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Uptime</div>
</div>
<div>
<div className="text-3xl font-serif italic text-white mb-1">AES</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Encryption</div>
</div>
<div>
<div className="text-3xl font-serif italic text-white mb-1">Local</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Storage First</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surfaceHighlight/20 border-t border-b border-white/5">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-sm font-mono text-neutral-500 mb-12 uppercase tracking-widest">Community Feedback</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 rounded-2xl bg-background border border-white/5 hover:border-white/10 transition-colors">
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"It feels like an extension of my brain. The keyboard shortcuts are intuitive and I've saved hours every week."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800"></div>
<div className="text-xs text-neutral-500">
<span className="text-white font-medium block">Alex M.</span>
                            CTO @ Vercel
                        </div>
</div>
</div>
<div className="p-8 rounded-2xl bg-background border border-white/5 hover:border-white/10 transition-colors">
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"The unified inbox is a game changer. I no longer check 5 different apps to start my day."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800"></div>
<div className="text-xs text-neutral-500">
<span className="text-white font-medium block">Sarah J.</span>
                            Designer @ Linear
                        </div>
</div>
</div>
<div className="p-8 rounded-2xl bg-background border border-white/5 hover:border-white/10 transition-colors">
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"Beautifully designed software. The dark mode is perfect and the animations are butter smooth."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800"></div>
<div className="text-xs text-neutral-500">
<span className="text-white font-medium block">David K.</span>
                            Founder @ Stripe
                        </div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative pt-32 pb-12 bg-background overflow-hidden">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center mb-24">
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-8">
                    Ready to <span className="font-serif italic opacity-80">focus?</span>
</h2>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="group relative h-12 px-8 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-all overflow-hidden">
<span className="relative z-10">Start for free</span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[beam_0.5s_infinite]"></div>
</button>
<button className="h-12 px-8 rounded-full border border-white/10 text-neutral-400 font-medium text-sm hover:text-white hover:bg-white/5 transition-all">
                        Contact Sales
                    </button>
</div>
</div>
<div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between gap-8">
<div className="flex items-center gap-2">
<div className="w-5 h-5 text-neutral-600">
<svg fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"></path></svg>
</div>
<span className="text-xs text-neutral-600">© 2024 Aura Inc.</span>
</div>
<div className="flex gap-8 text-xs text-neutral-500 font-medium">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
<a className="hover:text-white transition-colors" href="#">Discord</a>
<a className="hover:text-white transition-colors" href="#">Legal</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
