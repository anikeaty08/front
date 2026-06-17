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



        // Spotlight Effect Logic
        document.addEventListener('mousemove', (e) => {
            const cards = document.getElementsByClassName('glass-card');
            for(const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            }
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030304]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="/">
<div className="w-6 h-6 bg-white/5 rounded flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300">
<iconify-icon icon="lucide:box" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium tracking-tight text-zinc-300 group-hover:text-white transition-colors">opalwave_</span>
</a>
<div className="hidden md:flex gap-8 text-[11px] font-mono font-medium text-zinc-500 uppercase tracking-widest">
<a className="text-white" href="#">Studio</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Work</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Research</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Manifesto</a>
</div>
<button className="text-[11px] font-medium bg-zinc-100 text-black px-3 py-1.5 rounded hover:bg-white transition-colors flex items-center gap-2">
                Contact
                <iconify-icon icon="lucide:arrow-up-right" width="12"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-24 px-6 border-b border-white/5 overflow-hidden">
<div className="absolute inset-0 bg-grid-gradient pointer-events-none"></div>
<div className="max-w-5xl mx-auto relative z-10">
<div className="inline-flex items-center gap-2 px-2 py-1 border border-sky-500/20 bg-sky-500/5 rounded text-[10px] font-mono text-sky-400 mb-8 reveal-load">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sky-500"></span>
</span>
                SYSTEM_V2.0 ONLINE
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-8 reveal-load delay-100 leading-[0.95]">
                Architects of the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-zinc-200 via-zinc-400 to-zinc-700">intangible interface.</span>
</h1>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start reveal-load delay-200">
<div className="md:col-span-8">
<p className="text-lg text-zinc-400 font-light leading-relaxed max-w-2xl">
                        We are a research-led design studio building systematic engines for growth. Combining rigorous engineering standards with fluid interaction design to create software that feels inevitable.
                    </p>
</div>
<div className="md:col-span-4 border-l border-white/10 pl-6 space-y-3">
<div className="flex justify-between items-center text-[10px] tracking-wider uppercase">
<span className="text-zinc-600 font-mono">Location</span>
<span className="text-zinc-300">San Francisco, CA</span>
</div>
<div className="flex justify-between items-center text-[10px] tracking-wider uppercase">
<span className="text-zinc-600 font-mono">Focus</span>
<span className="text-zinc-300">Product Infrastructure</span>
</div>
<div className="flex justify-between items-center text-[10px] tracking-wider uppercase">
<span className="text-zinc-600 font-mono">Availability</span>
<span className="text-emerald-400 flex items-center gap-1.5">
<span className="w-1 h-1 bg-emerald-400 rounded-full"></span> Open
                        </span>
</div>
</div>
</div>
</div>
</header>

<div className="border-b border-white/5 bg-white/[0.01] backdrop-blur-sm">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
<div className="p-6 text-center group hover:bg-white/[0.02] transition-colors">
<div className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Shipped</div>
<div className="text-2xl font-medium text-white tracking-tight group-hover:text-sky-200 transition-colors">54<span className="text-zinc-600 text-lg">.0</span></div>
</div>
<div className="p-6 text-center group hover:bg-white/[0.02] transition-colors">
<div className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Combined ARR</div>
<div className="text-2xl font-medium text-white tracking-tight group-hover:text-sky-200 transition-colors">$1.2<span className="text-zinc-600 text-lg">B</span></div>
</div>
<div className="p-6 text-center group hover:bg-white/[0.02] transition-colors">
<div className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Codebase</div>
<div className="text-2xl font-medium text-white tracking-tight group-hover:text-sky-200 transition-colors">850<span className="text-zinc-600 text-lg">k+</span></div>
</div>
<div className="p-6 text-center group hover:bg-white/[0.02] transition-colors">
<div className="text-[10px] font-mono text-zinc-600 uppercase mb-2">Specialists</div>
<div className="text-2xl font-medium text-white tracking-tight group-hover:text-sky-200 transition-colors">
        14<span className="text-zinc-600 text-lg"> ppl</span></div>
</div>
</div>
</div>

<section className="pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div className="">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-sky-500" icon="lucide:cpu"></iconify-icon>
<h2 className="text-[10px] font-mono text-sky-500 uppercase tracking-widest">Methodology</h2>
</div>
<h3 className="text-3xl font-medium text-white tracking-tight">The Operating System.</h3>
</div>
<p className="text-xs text-zinc-500 font-mono max-w-xs text-right mt-4 md:mt-0">
                // PROTOCOL_EXECUTION
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(240px,auto)]">

<div className="md:col-span-2 glass-card rounded-xl p-8 flex flex-col justify-between group" style={{'--mouse-x': '-21px', '--mouse-y': '-424.75px'}}>
<div className="absolute top-8 right-8 text-zinc-800 group-hover:text-zinc-600 transition-colors">
<iconify-icon icon="lucide:code-2" width="24"></iconify-icon>
</div>
<div className="">
<div className="w-8 h-8 bg-white/5 rounded border border-white/10 flex items-center justify-center text-zinc-300 mb-6 font-mono text-xs">
                        01</div>
<h4 className="text-xl text-white font-medium mb-3">Design Engineering</h4>
<p className="text-sm text-zinc-400 font-light max-w-md leading-relaxed">
                        We don't hand off static files. Our designers write React components and our engineers
                        understand typography. This tight feedback loop eliminates translation errors.
                    </p>
</div>
<div className="mt-8 bg-[#0A0A0A] rounded border border-white/5 p-4 font-mono text-[10px] text-zinc-500 overflow-hidden relative">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent">
</div>
<div className="flex gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-zinc-700"></span>
<span className="w-2 h-2 rounded-full bg-zinc-700"></span>
</div>
<span className="text-purple-400">export const</span> <span className="text-yellow-100">Card</span> = ({
                    <span className="text-sky-300">children</span> }) =&gt; (
                          <span className="text-zinc-500">&lt;</span><span className="text-red-300">div</span>
<span className="text-sky-300">className</span>=<span className="text-green-300">"backdrop-blur-md..."</span><span className="text-zinc-500">&gt;</span>
                            {children}
                          <span className="text-zinc-500">&lt;/</span><span className="text-red-300">div</span><span className="text-zinc-500">&gt;</span>
                        );
                </div>
</div>

<div className="md:row-span-2 glass-card rounded-xl p-8 flex flex-col relative group" style={{'--mouse-x': '-885px', '--mouse-y': '-424.75px'}}>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>
<div className="mb-auto">
<div className="w-8 h-8 bg-white/5 rounded border border-white/10 flex items-center justify-center text-zinc-300 mb-6 font-mono text-xs">
                        02</div>
<h4 className="text-xl text-white font-medium mb-2">Radical Transparency</h4>
</div>
<div className="space-y-4 my-8">
<div className="flex items-center gap-3 text-xs text-zinc-400 group/item">
<div className="w-4 h-4 rounded-full border border-zinc-700 flex items-center justify-center group-hover/item:border-emerald-500 group-hover/item:text-emerald-500 transition-colors">
<iconify-icon icon="lucide:check" width="10"></iconify-icon>
</div>
                        Shared Slack Channels
                    </div>
<div className="flex items-center gap-3 text-xs text-zinc-400 group/item">
<div className="w-4 h-4 rounded-full border border-zinc-700 flex items-center justify-center group-hover/item:border-emerald-500 group-hover/item:text-emerald-500 transition-colors">
<iconify-icon icon="lucide:check" width="10"></iconify-icon>
</div>
                        Weekly Loom Updates
                    </div>
<div className="flex items-center gap-3 text-xs text-zinc-400 group/item">
<div className="w-4 h-4 rounded-full border border-zinc-700 flex items-center justify-center group-hover/item:border-emerald-500 group-hover/item:text-emerald-500 transition-colors">
<iconify-icon icon="lucide:check" width="10"></iconify-icon>
</div>
                        Open Github Repos
                    </div>
<div className="flex items-center gap-3 text-xs text-zinc-400 group/item">
<div className="w-4 h-4 rounded-full border border-zinc-700 flex items-center justify-center group-hover/item:border-emerald-500 group-hover/item:text-emerald-500 transition-colors">
<iconify-icon icon="lucide:check" width="10"></iconify-icon>
</div>
                        Direct Access to Founders
                    </div>
</div>
<div className="mt-auto pt-6 border-t border-white/5">
<p className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
                        Status: Connected
                    </p>
</div>
</div>

<div className="glass-card rounded-xl p-8 group" style={{'--mouse-x': '-21px', '--mouse-y': '-768px'}}>
<div className="w-8 h-8 bg-white/5 rounded border border-white/10 flex items-center justify-center text-zinc-300 mb-6 font-mono text-xs">
                    03</div>
<h4 className="text-xl text-white font-medium mb-3">Global Async</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                    Work happens 24/7 across 6 timezones. When San Francisco sleeps, London builds.
                </p>
</div>

<div className="glass-card rounded-xl p-8 group overflow-hidden" style={{'--mouse-x': '-453px', '--mouse-y': '-768px'}}>
<div className="absolute -right-6 -bottom-6 text-white/5 rotate-12 group-hover:scale-110 group-hover:text-white/10 transition-all duration-500">
<iconify-icon icon="lucide:zap" width="120"></iconify-icon>
</div>
<div className="w-8 h-8 bg-white/5 rounded border border-white/10 flex items-center justify-center text-zinc-300 mb-6 font-mono text-xs relative z-10">
                    04</div>
<h4 className="text-xl text-white font-medium mb-3 relative z-10">Velocity</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed relative z-10">
                    We ship week one. Strategy is useless without execution. We deploy early and often.
                </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-y border-white/5">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-sm font-medium text-white mb-16 flex items-center gap-2">
<iconify-icon className="text-zinc-600" icon="lucide:history"></iconify-icon>
                Studio History
            </h2>
<div className="relative border-l border-white/10 ml-2.5 space-y-16 pb-6">

<div className="relative pl-10 group">
<div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-[#050505] border border-white/20 group-hover:border-sky-500 group-hover:bg-sky-500 transition-all duration-300 shadow-[0_0_0_4px_#050505]"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-3">
<span className="font-mono text-xs text-sky-500">2024</span>
<h4 className="text-base text-white font-medium">The Platform Era</h4>
</div>
<p className="text-sm text-zinc-400 max-w-lg leading-relaxed font-light">
                        Shifted focus exclusively to complex SaaS and infrastructure products. Launched internal UI kit "OpalSystem" to public beta.
                    </p>
</div>

<div className="relative pl-10 group">
<div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-[#050505] border border-white/20 group-hover:border-zinc-400 transition-all duration-300 shadow-[0_0_0_4px_#050505]"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-3">
<span className="font-mono text-xs text-zinc-600">2022</span>
<h4 className="text-base text-white font-medium">Global Expansion</h4>
</div>
<p className="text-sm text-zinc-400 max-w-lg leading-relaxed font-light">
                        Hired first engineers in London and Tokyo. Reached $2M ARR with a lean team of 6. Established 24/7 dev cycle.
                    </p>
</div>

<div className="relative pl-10 group">
<div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-[#050505] border border-white/20 group-hover:border-zinc-400 transition-all duration-300 shadow-[0_0_0_4px_#050505]"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-3">
<span className="font-mono text-xs text-zinc-600">2020</span>
<h4 className="text-base text-white font-medium">Founded</h4>
</div>
<p className="text-sm text-zinc-400 max-w-lg leading-relaxed font-light">
                        Started in a small apartment in Hayes Valley. Purpose: Build software that respects the user's cognitive load.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-5xl mx-auto">
<div className="flex justify-between items-end mb-12">
<h2 className="text-2xl font-medium text-white tracking-tight">Leadership</h2>
<a className="text-xs text-zinc-500 hover:text-white transition-colors flex items-center gap-1 group" href="#">
                Full roster <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>
<div className="flex flex-col border-t border-white/5">

<div className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-white/5 hover:bg-white/[0.02] transition-colors cursor-default px-4 -mx-4 rounded-lg">
<div className="flex items-center gap-5">
<div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/5">
<img alt="Alex" className="object-cover w-full h-full opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<div className="text-sm text-white font-medium mb-0.5">Alex Thorne</div>
<div className="text-xs text-zinc-500 font-mono">Design Director</div>
</div>
</div>
<div className="mt-4 sm:mt-0 flex items-center gap-8 text-[10px] font-mono text-zinc-600 uppercase tracking-wide">
<span className="hidden sm:block">12 Yrs Exp</span>
<span className="group-hover:text-sky-400 transition-colors">San Francisco</span>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="14"></iconify-icon></a>
</div>
</div>

<div className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-white/5 hover:bg-white/[0.02] transition-colors cursor-default px-4 -mx-4 rounded-lg">
<div className="flex items-center gap-5">
<div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/5">
<img alt="Sarah" className="object-cover w-full h-full opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div>
<div className="text-sm text-white font-medium mb-0.5">Sarah Chen</div>
<div className="text-xs text-zinc-500 font-mono">Head of Technology</div>
</div>
</div>
<div className="mt-4 sm:mt-0 flex items-center gap-8 text-[10px] font-mono text-zinc-600 uppercase tracking-wide">
<span className="hidden sm:block">9 Yrs Exp</span>
<span className="group-hover:text-sky-400 transition-colors">London</span>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="14"></iconify-icon></a>
</div>
</div>

<div className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-white/5 hover:bg-white/[0.02] transition-colors cursor-default px-4 -mx-4 rounded-lg">
<div className="flex items-center gap-5">
<div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/5">
<img alt="David" className="object-cover w-full h-full opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div>
<div className="text-sm text-white font-medium mb-0.5">David Park</div>
<div className="text-xs text-zinc-500 font-mono">Product Strategy</div>
</div>
</div>
<div className="mt-4 sm:mt-0 flex items-center gap-8 text-[10px] font-mono text-zinc-600 uppercase tracking-wide">
<span className="hidden sm:block">8 Yrs Exp</span>
<span className="group-hover:text-sky-400 transition-colors">New York</span>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="14"></iconify-icon></a>
</div>
</div>
</div>
</section>

<section className="py-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

<div className="p-6 border border-white/5 rounded-lg bg-zinc-900/20 backdrop-blur-sm">
<div className="flex items-center gap-2 mb-4 text-white font-medium text-sm">
<iconify-icon className="text-zinc-600" icon="lucide:map-pin" width="14"></iconify-icon>
                        San Francisco
                    </div>
<p className="text-xs text-zinc-500 leading-relaxed font-mono">
                        548 Market St
                        CA 94104
                        United States
                    </p>
</div>

<div className="p-6 border border-white/5 rounded-lg bg-zinc-900/20 backdrop-blur-sm">
<div className="flex items-center gap-2 mb-4 text-white font-medium text-sm">
<iconify-icon className="text-zinc-600" icon="lucide:map-pin" width="14"></iconify-icon>
                        London
                    </div>
<p className="text-xs text-zinc-500 leading-relaxed font-mono">
                        145 City Road
                        London EC1V 1JB
                        United Kingdom
                    </p>
</div>

<div className="col-span-1 md:col-span-2 flex items-center justify-between p-6 border border-white/5 rounded-lg bg-gradient-to-r from-zinc-900/40 to-zinc-900/10 group cursor-pointer hover:border-white/15 transition-all">
<div>
<div className="text-sm text-white font-medium mb-1">Start a conversation</div>
<div className="text-xs text-zinc-500">Ready to build something invisible?</div>
</div>
<div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-24 pb-12 bg-[#030304] border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-sm bg-gradient-to-br from-white/10 to-white/5 border border-white/10"></div>
<span className="text-xs text-zinc-500 font-mono tracking-tight">OPALWAVE INC.</span>
</div>
<div className="flex flex-wrap gap-8 text-[11px] text-zinc-600 font-mono uppercase tracking-wider">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
<div className="text-xs text-zinc-700">
                © 2025 All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
