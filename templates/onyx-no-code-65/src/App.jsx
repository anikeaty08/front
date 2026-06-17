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
background: "#030303",
surface: "#0A0A0A",
primary: "#EDEDED",
secondary: "#A1A1AA",
border: "rgba(255, 255, 255, 0.08)",
onyx: {
pink: "#FF2E93",
orange: "#FF8F2C",
yellow: "#FFD600",
purple: "#B65BFF",
blue: "#4D7EFF"
}
},
fontFamily: {
display: ["Syne", "sans-serif"],
body: ["Space Grotesk", "sans-serif"],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'grid-pattern': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgba(255,255,255,0.03)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
},
animation: {
'marquee': 'marquee 40s linear infinite',
'spotlight': 'spotlight 2s ease .75s 1 forwards',
'shimmer': 'shimmer 2s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
spotlight: {
'0%': { opacity: 0, transform: 'translate(-50%, -100%) scale(0.5)' },
'100%': { opacity: 1, transform: 'translate(-50%, 0) scale(1)' }
},
shimmer: {
'0%': { backgroundPosition: '0 0' },
'100%': { backgroundPosition: '-200% 0' }
}
}
}
}
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
      
<div className="grain-bg"></div>

<div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
<nav className="glass-card flex items-center gap-6 px-2 py-2 rounded-full bg-[#111]/80 backdrop-blur-xl border border-white/10 shadow-2xl">

<a className="flex items-center gap-2 pl-4 pr-2" href="#">
<div className="w-4 h-4 rounded-full bg-gradient-to-br from-onyx-pink to-onyx-orange"></div>
<span className="font-display font-semibold text-lg tracking-tight text-white">ONYX</span>
</a>
<div className="hidden md:flex items-center">
<a className="px-4 py-2 text-xs font-medium text-secondary hover:text-white transition-colors" href="#approach">Stack</a>
<a className="px-4 py-2 text-xs font-medium text-secondary hover:text-white transition-colors" href="#solutions">Work</a>
<a className="px-4 py-2 text-xs font-medium text-secondary hover:text-white transition-colors" href="#process">Process</a>
</div>
<div className="flex items-center gap-2">
<a className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold tracking-wide hover:bg-zinc-200 transition-colors flex items-center gap-2" href="#contact">
                    Start Building
                    <iconify-icon icon="solar:bolt-linear" width="14"></iconify-icon>
</a>
</div>
</nav>
</div>

<header className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">

<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none opacity-20"></div>

<div className="absolute top-[20%] left-[10%] w-72 h-72 bg-onyx-pink/20 rounded-full blur-[100px] animate-pulse"></div>
<div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-onyx-blue/10 rounded-full blur-[100px]" style={{animationDelay: '1s'}}></div>
<div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
<div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-[10px] font-semibold text-secondary uppercase tracking-widest">Accepting new projects</span>
</div>
<h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter text-white mb-8 drop-shadow-2xl">
                We build fast. <br/>
<span className="gradient-accent relative inline-block">
                    Without the code.
                    
<svg className="absolute w-full h-3 -bottom-1 left-0 text-onyx-pink opacity-80" fill="none" viewbox="0 0 200 9" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99999C2.00025 6.99999 71.4996 2.00004 100.25 2.00003C129 2.00002 198.25 6.5 198.25 6.5" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path></svg>
</span>
</h1>
<p className="font-body text-lg md:text-xl text-secondary max-w-2xl mx-auto leading-relaxed mb-12 font-light">
                We aren't developers. We are tech-savvy operators who use modern tools to automate your busywork and launch your ideas in days, not months.
            </p>
<div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto items-center">
<a className="group relative px-8 py-4 bg-white text-black rounded-xl font-display font-semibold text-sm tracking-wide overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]" href="#contact">
<span className="relative z-10 flex items-center gap-2">
                        AUTOMATE IT
                        <iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</span>
</a>
<a className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 font-display font-medium text-sm tracking-wide text-white transition-all flex items-center gap-2 group backdrop-blur-md" href="#solutions">
<span>SEE OUR TOOLS</span>
<iconify-icon className="group-hover:translate-y-1 transition-transform" icon="solar:sort-from-top-to-bottom-linear"></iconify-icon>
</a>
</div>

<div className="mt-24 pt-8 border-t border-white/5 w-full max-w-3xl">
<p className="text-xs font-medium text-zinc-600 uppercase tracking-widest mb-6">Powered by the best tools</p>
<div className="flex justify-center md:justify-between items-center gap-8 md:gap-12 flex-wrap opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
<div className="flex items-center gap-2 group">
<iconify-icon className="text-white text-2xl group-hover:text-onyx-pink transition-colors" icon="solar:database-bold-duotone"></iconify-icon>
<span className="font-display font-semibold text-lg tracking-tight">Airtable</span>
</div>
<div className="flex items-center gap-2 group">
<iconify-icon className="text-white text-2xl group-hover:text-onyx-orange transition-colors" icon="solar:bolt-bold-duotone"></iconify-icon>
<span className="font-display font-semibold text-lg tracking-tight">Zapier</span>
</div>
<div className="flex items-center gap-2 group">
<iconify-icon className="text-white text-2xl group-hover:text-onyx-blue transition-colors" icon="solar:globe-bold-duotone"></iconify-icon>
<span className="font-display font-semibold text-lg tracking-tight">Webflow</span>
</div>
<div className="flex items-center gap-2 group">
<iconify-icon className="text-white text-2xl group-hover:text-onyx-purple transition-colors" icon="solar:infinity-bold-duotone"></iconify-icon>
<span className="font-display font-semibold text-lg tracking-tight">Make</span>
</div>
</div>
</div>
</div>
</header>

<div className="w-full bg-surface border-y border-white/5 py-6 overflow-hidden relative z-20">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
<div className="flex animate-marquee whitespace-nowrap">
<div className="flex gap-16 items-center px-8 opacity-60">
<span className="font-display font-semibold text-4xl text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5">NO-CODE</span>
<iconify-icon className="text-onyx-pink text-2xl" icon="solar:star-fall-linear"></iconify-icon>
<span className="font-display font-semibold text-4xl text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5">AUTOMATION</span>
<iconify-icon className="text-onyx-orange text-2xl" icon="solar:star-fall-linear"></iconify-icon>
<span className="font-display font-semibold text-4xl text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5">CLEAN DATA</span>
<iconify-icon className="text-onyx-purple text-2xl" icon="solar:star-fall-linear"></iconify-icon>
<span className="font-display font-semibold text-4xl text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5">SCALABILITY</span>
<iconify-icon className="text-onyx-blue text-2xl" icon="solar:star-fall-linear"></iconify-icon>
</div>

<div className="flex gap-16 items-center px-8 opacity-60">
<span className="font-display font-semibold text-4xl text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5">NO-CODE</span>
<iconify-icon className="text-onyx-pink text-2xl" icon="solar:star-fall-linear"></iconify-icon>
<span className="font-display font-semibold text-4xl text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5">AUTOMATION</span>
<iconify-icon className="text-onyx-orange text-2xl" icon="solar:star-fall-linear"></iconify-icon>
<span className="font-display font-semibold text-4xl text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5">CLEAN DATA</span>
<iconify-icon className="text-onyx-purple text-2xl" icon="solar:star-fall-linear"></iconify-icon>
<span className="font-display font-semibold text-4xl text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5">SCALABILITY</span>
<iconify-icon className="text-onyx-blue text-2xl" icon="solar:star-fall-linear"></iconify-icon>
</div>
</div>
</div>

<section className="py-32 px-6 relative" id="approach">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row gap-12 items-start justify-between mb-20">
<div className="max-w-2xl">
<h2 className="font-display font-semibold text-4xl md:text-6xl mb-6 tracking-tighter leading-tight">
                        Complex code <br/> <span className="text-zinc-500">is the bottleneck.</span>
</h2>
</div>
<div className="max-w-sm">
<p className="text-secondary text-lg leading-relaxed">
                        You don't need expensive engineers to format cells or connect your leads to your CRM. We use smart tools to do it faster.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bento-card rounded-3xl p-10 min-h-[400px] flex flex-col justify-between group">
<div>
<div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 text-zinc-400 group-hover:text-red-400 group-hover:border-red-400/30 transition-all">
<iconify-icon icon="solar:code-file-linear" width="24"></iconify-icon>
</div>
<h3 className="font-display text-2xl font-semibold mb-4">The Developer Trap</h3>
<p className="text-secondary">Waiting weeks for simple updates. Paying $150/hr for maintenance. Bloated codebases that break when you touch them.</p>
</div>

<div className="relative h-32 mt-8 overflow-hidden rounded-xl border border-white/5 bg-black/20 font-mono text-[10px] p-4 text-red-400/50 flex flex-col gap-1 leading-tight select-none">
<span className="opacity-30">Error: undefined is not a function</span>
<span className="opacity-50">at /src/main.js:42:12</span>
<span className="opacity-20">at Module._compile (node:internal/modules)</span>
<span className="opacity-40">SyntaxError: Unexpected token</span>
<div className="absolute bottom-4 right-4 text-red-500/80 animate-pulse">
<iconify-icon icon="solar:danger-triangle-linear" width="40"></iconify-icon>
</div>
</div>
</div>

<div className="bento-card rounded-3xl p-10 min-h-[400px] flex flex-col justify-between group border-onyx-pink/20">
<div className="absolute inset-0 bg-gradient-to-tr from-onyx-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-onyx-pink/10 border border-onyx-pink/20 rounded-full flex items-center justify-center mb-6 text-onyx-pink shadow-[0_0_15px_rgba(255,46,147,0.3)]">
<iconify-icon icon="solar:magic-stick-bold" width="24"></iconify-icon>
</div>
<h3 className="font-display text-2xl font-semibold mb-4 text-white">Visual Velocity</h3>
<p className="text-zinc-300">We build systems that talk to each other. New leads pop into your CRM instantly. No servers to manage. Just results.</p>
</div>

<div className="relative h-32 mt-8 overflow-hidden rounded-xl border border-white/10 bg-black/40 flex items-center justify-center gap-2 px-6">

<div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900 border border-white/10">
<iconify-icon className="text-blue-400" icon="solar:file-text-linear"></iconify-icon>
<span className="text-[10px] font-medium text-zinc-400">Form</span>
</div>

<iconify-icon className="text-zinc-600" icon="solar:arrow-right-linear"></iconify-icon>

<div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900 border border-white/10 shadow-[0_0_15px_rgba(255,46,147,0.2)]">
<iconify-icon className="text-onyx-pink" icon="solar:bolt-linear"></iconify-icon>
<span className="text-[10px] font-medium text-white">Logic</span>
</div>

<iconify-icon className="text-zinc-600" icon="solar:arrow-right-linear"></iconify-icon>

<div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900 border border-white/10">
<iconify-icon className="text-green-400" icon="solar:database-linear"></iconify-icon>
<span className="text-[10px] font-medium text-zinc-400">Save</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-surface relative" id="solutions">
<div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="mb-16">
<span className="text-onyx-blue font-mono text-sm tracking-wider uppercase mb-2 block">// The Toolkit</span>
<h3 className="font-display text-5xl font-semibold tracking-tighter text-white">What we do</h3>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 md:grid-rows-2 gap-5 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 bento-card rounded-3xl p-8 flex flex-col group">
<div className="mb-auto">
<div className="w-10 h-10 rounded-lg bg-onyx-pink/10 text-onyx-pink flex items-center justify-center mb-6">
<iconify-icon icon="solar:graph-new-up-linear" width="20"></iconify-icon>
</div>
<h4 className="font-display text-2xl font-semibold mb-2">Automated Growth</h4>
<p className="text-secondary text-sm leading-relaxed max-w-sm">We don't just set up tools. We configure them to find people who actually want your product and nurture them automatically.</p>
</div>
<div className="mt-8 relative h-48 w-full bg-[#050505] rounded-xl border border-white/5 overflow-hidden flex items-end justify-center px-8 pb-0 pt-8 gap-4">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-onyx-pink/10 via-transparent to-transparent"></div>

<div className="w-1/4 bg-zinc-800 rounded-t-sm h-[40%] group-hover:h-[45%] transition-all duration-500"></div>
<div className="w-1/4 bg-zinc-700 rounded-t-sm h-[60%] group-hover:h-[65%] transition-all duration-500 delay-75"></div>
<div className="w-1/4 bg-gradient-to-t from-onyx-pink to-onyx-orange rounded-t-sm h-[80%] group-hover:h-[90%] transition-all duration-500 delay-150 shadow-[0_0_20px_rgba(255,46,147,0.3)] relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                +240%
                             </div>
</div>
</div>
</div>

<div className="md:col-span-2 bento-card rounded-3xl p-8 flex flex-row items-center justify-between group overflow-hidden">
<div className="relative z-10 max-w-[55%]">
<div className="w-10 h-10 rounded-lg bg-onyx-blue/10 text-onyx-blue flex items-center justify-center mb-4">
<iconify-icon icon="solar:monitor-smartphone-linear" width="20"></iconify-icon>
</div>
<h4 className="font-display text-xl font-semibold mb-2">Visual Development</h4>
<p className="text-secondary text-xs">Stunning sites built in Webflow and Framer. Easy for you to edit. Impossible to break.</p>
</div>

<div className="absolute right-0 top-0 bottom-0 w-2/5 bg-[#080808] border-l border-white/5 p-4 flex flex-col gap-3 justify-center opacity-70 group-hover:opacity-100 transition-opacity">
<div className="h-6 w-full rounded border border-white/10 bg-zinc-900 flex items-center px-2 gap-2">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<div className="w-12 h-1 bg-zinc-700 rounded"></div>
</div>
<div className="h-6 w-full ml-4 rounded border border-onyx-blue/30 bg-onyx-blue/10 flex items-center px-2 gap-2">
<div className="w-2 h-2 rounded-full bg-onyx-blue"></div>
<div className="w-16 h-1 bg-onyx-blue/40 rounded"></div>
</div>
<div className="h-6 w-full ml-8 rounded border border-white/10 bg-zinc-900 flex items-center px-2 gap-2">
<div className="w-2 h-2 rounded-full bg-green-400"></div>
<div className="w-10 h-1 bg-zinc-700 rounded"></div>
</div>
</div>
</div>

<div className="md:col-span-1 bento-card rounded-3xl p-6 group hover:border-onyx-yellow/40">
<div className="w-10 h-10 rounded-lg bg-onyx-yellow/10 text-onyx-yellow flex items-center justify-center mb-4">
<iconify-icon icon="solar:bolt-circle-linear" width="20"></iconify-icon>
</div>
<h4 className="font-display text-lg font-semibold mb-2">Workflows</h4>
<p className="text-secondary text-xs">If it's repetitive, we zap it. More time for strategy.</p>
</div>

<div className="md:col-span-1 bento-card rounded-3xl p-6 group hover:border-onyx-purple/40">
<div className="w-10 h-10 rounded-lg bg-onyx-purple/10 text-onyx-purple flex items-center justify-center mb-4">
<iconify-icon icon="solar:pie-chart-2-linear" width="20"></iconify-icon>
</div>
<h4 className="font-display text-lg font-semibold mb-2">Dashboards</h4>
<p className="text-secondary text-xs">Crystal clear data without opening a single spreadsheet.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-background" id="process">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<span className="text-xs font-bold text-zinc-500 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">Process</span>
<h2 className="font-display text-4xl font-semibold mt-4">How we partner</h2>
</div>
<div className="relative">

<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
<div className="space-y-12">

<div className="relative flex flex-col md:flex-row items-center gap-8 group">
<div className="md:w-1/2 text-right hidden md:block pr-12">
<h3 className="font-display text-2xl font-semibold text-white group-hover:text-onyx-pink transition-colors">We audit</h3>
<p className="text-secondary text-sm mt-2">We look at your manual processes, find the leaks, and see where tools can replace effort.</p>
</div>
<div className="relative z-10 w-12 h-12 bg-[#0A0A0A] border border-white/10 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:border-onyx-pink group-hover:scale-110 transition-all shadow-xl">
                            1
                        </div>
<div className="md:w-1/2 pl-12 md:hidden">
<h3 className="font-display text-xl font-semibold text-white">We audit</h3>
<p className="text-secondary text-sm mt-2">We look at your manual processes, find the leaks, and see where tools can replace effort.</p>
</div>
<div className="md:w-1/2 pl-12 hidden md:block">
<div className="h-px w-20 bg-white/10"></div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8 group">
<div className="md:w-1/2 text-right hidden md:block pr-12">
<div className="h-px w-20 bg-white/10 ml-auto"></div>
</div>
<div className="relative z-10 w-12 h-12 bg-[#0A0A0A] border border-white/10 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:border-onyx-orange group-hover:scale-110 transition-all shadow-xl">
                            2
                        </div>
<div className="md:w-1/2 pl-12">
<h3 className="font-display text-2xl font-semibold text-white group-hover:text-onyx-orange transition-colors">We assemble</h3>
<p className="text-secondary text-sm mt-2">We connect the best no-code tools. Airtable databases, Zapier logic, and Webflow front-ends.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8 group">
<div className="md:w-1/2 text-right hidden md:block pr-12">
<h3 className="font-display text-2xl font-semibold text-white group-hover:text-onyx-blue transition-colors">You scale</h3>
<p className="text-secondary text-sm mt-2">We hand over the keys. The systems run themselves, and you get back to business.</p>
</div>
<div className="relative z-10 w-12 h-12 bg-[#0A0A0A] border border-white/10 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:border-onyx-blue group-hover:scale-110 transition-all shadow-xl">
                            3
                        </div>
<div className="md:w-1/2 pl-12 md:hidden">
<h3 className="font-display text-xl font-semibold text-white">You scale</h3>
<p className="text-secondary text-sm mt-2">We hand over the keys. The systems run themselves, and you get back to business.</p>
</div>
<div className="md:w-1/2 pl-12 hidden md:block">
<div className="h-px w-20 bg-white/10"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="contact">

<div className="absolute inset-0 bg-background">
<div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-onyx-pink/10 to-transparent"></div>
<div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-onyx-pink/20 blur-[120px] rounded-full"></div>
</div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="font-display text-5xl md:text-7xl font-semibold mb-6 leading-none tracking-tight">
                Stop working <br/>
<span className="text-white text-glow">manually.</span>
</h2>
<p className="text-xl mb-10 text-secondary font-light max-w-xl mx-auto">
                No complex contracts. No long dev cycles. Just a conversation about how we can automate your operations.
            </p>
<form className="max-w-sm mx-auto flex flex-col gap-4">
<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-onyx-pink to-onyx-orange rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
<button className="relative w-full bg-white text-black py-4 rounded-xl font-display font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2" type="button">
<span>Book a Discovery Call</span>
<iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
</button>
</div>
<p className="text-xs text-zinc-500">We usually build your prototype in 48 hours.</p>
</form>
</div>
</section>

<footer className="bg-black border-t border-white/10 pt-20 pb-10 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="space-y-4">
<a className="flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-onyx-pink to-onyx-orange"></div>
<span className="font-display font-semibold text-2xl tracking-tight text-white">ONYX</span>
</a>
<p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
                    Tech-savvy partners for modern businesses.
                </p>
<div className="flex gap-4 mt-4">
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white text-zinc-400 transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white text-zinc-400 transition-colors" href="#">
<iconify-icon icon="solar:brand-linkedin-linear"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-2 gap-16">
<div className="flex flex-col gap-4">
<span className="font-bold text-white text-xs uppercase tracking-widest">Links</span>
<a className="text-zinc-500 hover:text-white text-sm transition-colors" href="#">Work</a>
<a className="text-zinc-500 hover:text-white text-sm transition-colors" href="#">About</a>
<a className="text-zinc-500 hover:text-white text-sm transition-colors" href="#">Contact</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-bold text-white text-xs uppercase tracking-widest">Boring Stuff</span>
<a className="text-zinc-500 hover:text-white text-sm transition-colors" href="#">Privacy</a>
<a className="text-zinc-500 hover:text-white text-sm transition-colors" href="#">Terms</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex justify-between items-center text-xs text-zinc-600">
<p>© 2023 Onyx.</p>
<p>Made with no-code ⚡ by Onyx.</p>
</div>
</footer>

    </>
  );
}
