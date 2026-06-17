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
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
},
colors: {
luth: {
bg: '#050505',
surface: '#0F0F0F',
border: 'rgba(255,255,255,0.08)',
accent: '#C23B3B',
dim: '#888888',
text: '#E6E6E6'
}
},
letterSpacing: {
tightest: '-0.06em',
tighter: '-0.03em',
widest: '0.15em',
},
backgroundImage: {
'signal-gradient': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(194, 59, 59, 0.15), transparent)',
'vignette': 'radial-gradient(circle at center, transparent 0%, #050505 120%)'
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
'breathe': 'breathe 8s ease-in-out infinite',
'scan': 'scan 4s linear infinite',
'aurora': 'aurora 10s ease infinite',
'grain': 'grain 8s steps(10) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
breathe: {
'0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
'50%': { opacity: '0.6', transform: 'scale(1.05)' },
},
scan: {
'0%': { transform: 'translateY(-100%)' },
'100%': { transform: 'translateY(100%)' },
},
aurora: {
'0%, 100%': { backgroundPosition: '0% 50%' },
'50%': { backgroundPosition: '100% 50%' },
},
grain: {
'0%, 100%': { transform: 'translate(0, 0)' },
'10%': { transform: 'translate(-5%, -10%)' },
'20%': { transform: 'translate(-15%, 5%)' },
'30%': { transform: 'translate(7%, -25%)' },
'40%': { transform: 'translate(-5%, 25%)' },
'50%': { transform: 'translate(-15%, 10%)' },
'60%': { transform: 'translate(15%, 0%)' },
'70%': { transform: 'translate(0%, 15%)' },
'80%': { transform: 'translate(3%, 35%)' },
'90%': { transform: 'translate(-10%, 10%)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            document.documentElement.style.setProperty('--mouse-x', `${x}px`);
            document.documentElement.style.setProperty('--mouse-y', `${y}px`);
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
      

<div className="noise-overlay"></div>



<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4 pointer-events-none">
<div className="glass-nav rounded-full px-1 py-1 flex items-center gap-6 shadow-2xl transition-all duration-500 hover:scale-[1.01] hover:bg-[#0a0a0a] pointer-events-auto group">
<div className="pl-5 pr-2 relative overflow-hidden">
<span className="font-bold tracking-widest text-sm text-white relative z-10">LUTH</span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
</div>
<div className="h-3 w-[1px] bg-white/10"></div>
<div className="hidden md:flex items-center gap-6 px-2">
<a className="text-xs font-medium text-luth-dim hover:text-white transition-colors tracking-wide relative group/link" href="#episodes">
                    EPISODES
                    <span className="absolute -bottom-4 left-0 w-full h-px bg-luth-accent scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300"></span>
</a>
<a className="text-xs font-medium text-luth-dim hover:text-white transition-colors tracking-wide relative group/link" href="#newsletter">
                    THE MEMO
                    <span className="absolute -bottom-4 left-0 w-full h-px bg-luth-accent scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300"></span>
</a>
<a className="text-xs font-medium text-luth-dim hover:text-white transition-colors tracking-wide relative group/link" href="#about">
                    ABOUT
                    <span className="absolute -bottom-4 left-0 w-full h-px bg-luth-accent scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300"></span>
</a>
</div>
<div className="hidden md:block h-3 w-[1px] bg-white/10"></div>
<a className="px-5 py-2 rounded-full border border-white/10 text-xs font-semibold text-white tracking-wide hover:border-luth-accent hover:text-luth-accent hover:bg-luth-accent/5 transition-all duration-300" href="#newsletter">
                SUBSCRIBE
            </a>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center z-10 pt-20 px-6 overflow-hidden">

<div className="absolute inset-0 pointer-events-none z-0">

<div className="absolute inset-0 bg-grid opacity-30 transform perspective-1000 rotate-x-12 scale-110"></div>

<div className="spotlight absolute inset-0 opacity-80 mix-blend-screen transition-opacity duration-300"></div>

<div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-[radial-gradient(circle_at_50%_50%,rgba(194,59,59,0.08),transparent_50%)] animate-pulse-slow"></div>
</div>

<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-luth-accent/5 rounded-full blur-[80px] animate-float delay-100"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] animate-float delay-700"></div>
</div>

<div className="relative z-20 max-w-7xl mx-auto text-center">

<div className="reveal-up inline-flex items-center gap-3 mb-10 pl-3 pr-4 py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-colors hover:border-luth-accent/30 cursor-default group">
<div className="flex items-end gap-[2px] h-4">
<div className="bar"></div>
<div className="bar"></div>
<div className="bar"></div>
<div className="bar"></div>
</div>
<div className="flex flex-col items-start text-left leading-none">
<span className="text-[9px] font-bold tracking-[0.2em] text-luth-accent uppercase">On Air</span>
<span className="text-[9px] font-medium tracking-wide text-white/60 group-hover:text-white transition-colors">EPISODE 142 • SIGNAL FOUND</span>
</div>
</div>

<div className="relative mb-8">
<h1 className="reveal-up delay-100 text-[clamp(4rem,9vw,9rem)] font-bold leading-[0.85] tracking-tightest text-white mix-blend-difference select-none">
                    BEYOND THE<br/>
<span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20 pb-4">
                        NOISE FLOOR
                        
<span aria-hidden="true" className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-t from-transparent to-luth-accent/10 blur-sm animate-pulse-slow pointer-events-none">NOISE FLOOR</span>
</span>
</h1>
</div>

<p className="reveal-up delay-200 text-luth-dim text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-light mix-blend-plus-lighter">
                Deconstructing the architecture of modern thought. <br className="hidden md:block"/>
                A weekly dossier on business, philosophy, and the unseen forces.
            </p>

<div className="reveal-up delay-300 flex flex-col md:flex-row items-center justify-center gap-6">

<button className="group relative flex items-center gap-4 pl-2 pr-8 py-2 bg-[#E6E6E6] text-[#050505] rounded-full transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(230,230,230,0.15)] overflow-hidden">
<div className="relative w-10 h-10 rounded-full bg-[#050505] text-white flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-luth-accent/0 group-hover:bg-luth-accent transition-colors duration-300"></div>
<iconify-icon className="relative z-10 translate-x-0.5" icon="solar:play-bold" width="18"></iconify-icon>
</div>
<span className="text-xs font-bold tracking-widest uppercase">Start Listening</span>

<div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-[shimmer_0.75s_infinite]"></div>
</button>

<button className="group flex items-center gap-3 px-6 py-3.5 rounded-full border border-white/10 hover:bg-white/5 transition-all duration-300 hover:border-white/30 text-white">
<span className="text-xs font-medium tracking-widest uppercase">Explore Archive</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>

<div className="reveal-up delay-500 mt-16 flex items-center justify-center gap-8 opacity-40 hover:opacity-100 transition-opacity duration-500">
<div className="h-px w-12 bg-gradient-to-r from-transparent to-white/50"></div>
<div className="flex gap-6">
<iconify-icon className="text-white hover:text-luth-accent transition-colors hover:scale-110 duration-200 cursor-pointer" icon="solar:music-library-linear" width="20"></iconify-icon>
<iconify-icon className="text-white hover:text-luth-accent transition-colors hover:scale-110 duration-200 cursor-pointer" icon="solar:podcast-linear" width="20"></iconify-icon>
<iconify-icon className="text-white hover:text-luth-accent transition-colors hover:scale-110 duration-200 cursor-pointer" icon="solar:monitor-play-linear" width="20"></iconify-icon>
</div>
<div className="h-px w-12 bg-gradient-to-l from-transparent to-white/50"></div>
</div>
</div>
</section>

<section className="py-24 relative z-10 border-t border-white/5 bg-luth-bg">
<div className="max-w-screen-xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-[11px] font-bold tracking-[0.2em] text-luth-dim uppercase block mb-4">Archive Access</span>
<h2 className="text-2xl font-light text-white tracking-tight">Conversations with architects of the future.</h2>
</div>
<div className="flex flex-col items-center space-y-2">

<div className="group relative cursor-pointer w-full text-center py-4 border-b border-white/5 hover:border-luth-accent/30 transition-colors">
<h3 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-white/40 group-hover:text-white transition-colors tracking-tighter duration-300">
                        ELON MUSK
                    </h3>
<span className="text-[10px] font-bold tracking-widest text-luth-accent opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 block mt-1">CEO, TESLA &amp; SPACEX</span>
</div>
<div className="group relative cursor-pointer w-full text-center py-4 border-b border-white/5 hover:border-luth-accent/30 transition-colors">
<h3 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-white/40 group-hover:text-white transition-colors tracking-tighter duration-300">
                        NAVAL RAVIKANT
                    </h3>
<span className="text-[10px] font-bold tracking-widest text-luth-accent opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 block mt-1">ANGELLIST</span>
</div>
<div className="group relative cursor-pointer w-full text-center py-4 border-b border-white/5 hover:border-luth-accent/30 transition-colors">
<h3 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-white/40 group-hover:text-white transition-colors tracking-tighter duration-300">
                        RICK RUBIN
                    </h3>
<span className="text-[10px] font-bold tracking-widest text-luth-accent opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 block mt-1">PRODUCER</span>
</div>
<div className="group relative cursor-pointer w-full text-center py-4 border-b border-white/5 hover:border-luth-accent/30 transition-colors">
<h3 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-white/40 group-hover:text-white transition-colors tracking-tighter duration-300">
                        ESTHER PEREL
                    </h3>
<span className="text-[10px] font-bold tracking-widest text-luth-accent opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 block mt-1">PSYCHOTHERAPIST</span>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10 bg-luth-bg">
<div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-12 gap-12">

<div className="md:col-span-4 sticky top-32 h-fit">
<span className="text-[11px] font-bold tracking-[0.2em] text-luth-accent uppercase block mb-6">Methodology</span>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter leading-[0.95] mb-6">
                    NOT JUST AUDIO.<br/><span className="text-luth-dim">INTELLIGENCE.</span>
</h2>
<p className="text-sm text-luth-dim leading-relaxed max-w-xs">
                    We ignore the algorithmic incentives of the attention economy. We prioritize density, rigor, and silence.
                </p>
</div>

<div className="md:col-span-8 grid md:grid-cols-3 gap-1">

<div className="group bg-luth-surface border border-white/5 p-8 min-h-[400px] flex flex-col justify-between hover:border-luth-accent/40 transition-all duration-500 hover:-translate-y-1">
<div>
<iconify-icon className="text-luth-dim group-hover:text-white transition-colors" icon="solar:layers-minimalistic-linear" width="32"></iconify-icon>
<div className="mt-8 h-px w-full bg-white/5 group-hover:bg-luth-accent/50 transition-colors"></div>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">First Principles</h3>
<p className="text-sm text-luth-dim leading-relaxed">We strip away narrative fluff to find the axioms that govern reality.</p>
</div>
</div>

<div className="group bg-luth-surface border border-white/5 p-8 min-h-[400px] flex flex-col justify-between hover:border-luth-accent/40 transition-all duration-500 hover:-translate-y-1">
<div>
<iconify-icon className="text-luth-dim group-hover:text-white transition-colors" icon="solar:infinity-linear" width="32"></iconify-icon>
<div className="mt-8 h-px w-full bg-white/5 group-hover:bg-luth-accent/50 transition-colors"></div>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Deep Time</h3>
<p className="text-sm text-luth-dim leading-relaxed">No soundbites. 3+ hour conversations that allow ideas to actually breathe.</p>
</div>
</div>

<div className="group bg-luth-surface border border-white/5 p-8 min-h-[400px] flex flex-col justify-between hover:border-luth-accent/40 transition-all duration-500 hover:-translate-y-1">
<div>
<iconify-icon className="text-luth-dim group-hover:text-white transition-colors" icon="solar:soundwave-linear" width="32"></iconify-icon>
<div className="mt-8 h-px w-full bg-white/5 group-hover:bg-luth-accent/50 transition-colors"></div>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Sonic Fidelity</h3>
<p className="text-sm text-luth-dim leading-relaxed">Mastered for immersion. A soundscape designed for focus, not background noise.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#000000] border-t border-b border-white/5" id="episodes">
<div className="px-6 mb-12 flex justify-between items-end max-w-screen-xl mx-auto">
<div>
<span className="text-[11px] font-bold tracking-[0.2em] text-luth-accent uppercase block mb-2">Transmissions</span>
<h2 className="text-3xl font-semibold text-white tracking-tight">Recent Broadcasts</h2>
</div>
<div className="hidden md:flex gap-6 text-xs font-semibold tracking-widest text-luth-dim">
<span className="text-white cursor-pointer border-b border-luth-accent pb-1">ALL</span>
<span className="hover:text-white cursor-pointer transition-colors">BUSINESS</span>
<span className="hover:text-white cursor-pointer transition-colors">PHILOSOPHY</span>
<span className="hover:text-white cursor-pointer transition-colors">TECH</span>
</div>
</div>

<div className="flex overflow-x-auto gap-6 px-6 pb-12 snap-x snap-mandatory no-scrollbar w-full">

<div className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[4/5] md:aspect-[16/9] relative group cursor-pointer overflow-hidden border border-white/10 rounded-sm">
<div className="absolute inset-0 bg-[#111] group-hover:scale-105 transition-transform duration-700">
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute top-0 right-0 p-6">
<span className="text-[10px] font-bold tracking-widest text-white border border-white/20 px-3 py-1 bg-black/50 backdrop-blur-sm">EP. 142</span>
</div>
</div>
<div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
<span className="text-luth-accent text-xs font-bold tracking-widest uppercase mb-4">Nick Bostrom</span>
<h3 className="text-3xl md:text-4xl font-semibold text-white leading-[0.95] tracking-tight mb-4 group-hover:text-luth-text transition-colors">The Simulation Hypothesis &amp; The Future of AI</h3>
<div className="flex items-center gap-4 text-xs text-luth-dim font-mono mt-4">
<span className="flex items-center gap-2"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 2hr 14m</span>
<span>•</span>
<span>NOV 14, 2023</span>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
<div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center bg-luth-accent text-white shadow-[0_0_40px_rgba(194,59,59,0.4)]">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[4/5] md:aspect-[16/9] relative group cursor-pointer overflow-hidden border border-white/10 rounded-sm">
<div className="absolute inset-0 bg-[#0e0e0e] group-hover:scale-105 transition-transform duration-700">
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute top-0 right-0 p-6">
<span className="text-[10px] font-bold tracking-widest text-white border border-white/20 px-3 py-1 bg-black/50 backdrop-blur-sm">EP. 141</span>
</div>
</div>
<div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
<span className="text-luth-accent text-xs font-bold tracking-widest uppercase mb-4">Jocko Willink</span>
<h3 className="text-3xl md:text-4xl font-semibold text-white leading-[0.95] tracking-tight mb-4 group-hover:text-luth-text transition-colors">War, Peace, and The Human Condition</h3>
<div className="flex items-center gap-4 text-xs text-luth-dim font-mono mt-4">
<span className="flex items-center gap-2"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 3hr 05m</span>
<span>•</span>
<span>NOV 07, 2023</span>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
<div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center bg-luth-accent text-white shadow-[0_0_40px_rgba(194,59,59,0.4)]">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[4/5] md:aspect-[16/9] relative group cursor-pointer overflow-hidden border border-white/10 rounded-sm">
<div className="absolute inset-0 bg-[#0A0A0A] group-hover:scale-105 transition-transform duration-700">
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="absolute top-0 right-0 p-6">
<span className="text-[10px] font-bold tracking-widest text-white border border-white/20 px-3 py-1 bg-black/50 backdrop-blur-sm">EP. 140</span>
</div>
</div>
<div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
<span className="text-luth-accent text-xs font-bold tracking-widest uppercase mb-4">Rick Rubin</span>
<h3 className="text-3xl md:text-4xl font-semibold text-white leading-[0.95] tracking-tight mb-4 group-hover:text-luth-text transition-colors">Minimalism as a path to Clarity</h3>
<div className="flex items-center gap-4 text-xs text-luth-dim font-mono mt-4">
<span className="flex items-center gap-2"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 1hr 55m</span>
<span>•</span>
<span>OCT 31, 2023</span>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
<div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center bg-luth-accent text-white shadow-[0_0_40px_rgba(194,59,59,0.4)]">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-luth-bg overflow-hidden" id="newsletter">
<div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none"></div>
<div className="max-w-screen-xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

<div>
<span className="text-[11px] font-bold tracking-[0.2em] text-luth-accent uppercase block mb-6">Inbox Signal</span>
<h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tighter leading-[0.9] mb-8">
                    JOIN THE<br/>INNER CIRCLE
                </h2>
<p className="text-luth-dim text-lg mb-12 max-w-md font-light">
                    A weekly breakdown of mental models, book recommendations, and unreleased audio clips. Read by 45,000+ leaders.
                </p>
<form className="relative group">
<input className="w-full bg-transparent border-b border-white/20 py-4 text-2xl font-light text-white placeholder-white/20 focus:outline-none focus:border-luth-accent focus:shadow-[0_20px_40px_-10px_rgba(194,59,59,0.1)] transition-all font-sans tracking-wide" placeholder="EMAIL ADDRESS" type="email"/>
<button className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:text-luth-accent transition-colors" type="submit">
<iconify-icon icon="solar:arrow-right-linear" width="32"></iconify-icon>
</button>
</form>
</div>

<div className="relative h-[400px] flex items-center justify-center perspective-1000 hidden lg:flex">
<div className="w-64 h-80 bg-[#111] border border-white/10 relative transform rotate-y-12 rotate-z-6 animate-float shadow-2xl flex flex-col p-8">
<div className="text-[10px] text-luth-dim mb-4 font-mono tracking-widest">CLASSIFIED // MEMO 042</div>
<div className="h-px w-full bg-white/10 mb-4"></div>
<div className="space-y-3 opacity-30">
<div className="h-2 w-full bg-white rounded-sm"></div>
<div className="h-2 w-5/6 bg-white rounded-sm"></div>
<div className="h-2 w-4/6 bg-white rounded-sm"></div>
<div className="h-2 w-full bg-white rounded-sm"></div>
</div>
<div className="mt-auto">
<div className="text-luth-accent font-serif text-4xl">Luth.</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-[#030303]">
<div className="max-w-screen-xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
<div className="text-center md:text-left">
<div className="text-3xl md:text-5xl font-light text-white mb-2 tracking-tighter">4.2M</div>
<div className="text-[10px] font-bold tracking-widest text-luth-dim uppercase">Monthly Downloads</div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl md:text-5xl font-light text-white mb-2 tracking-tighter">68%</div>
<div className="text-[10px] font-bold tracking-widest text-luth-dim uppercase">Retention Rate</div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl md:text-5xl font-light text-white mb-2 tracking-tighter">142</div>
<div className="text-[10px] font-bold tracking-widest text-luth-dim uppercase">Episodes Archived</div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl md:text-5xl font-light text-white mb-2 tracking-tighter">NO. 1</div>
<div className="text-[10px] font-bold tracking-widest text-luth-dim uppercase">Category Rank</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6">
<div className="mb-12 border-l-2 border-luth-accent pl-4">
<span className="text-[11px] font-bold tracking-[0.2em] text-luth-dim uppercase block mb-1">Data</span>
<h2 className="text-2xl font-semibold text-white tracking-tight">FREQUENT QUERIES</h2>
</div>
<div className="space-y-8">
<div className="group">
<h4 className="text-lg font-medium text-white mb-2 group-hover:text-luth-accent transition-colors">How can I sponsor the podcast?</h4>
<p className="text-sm text-luth-dim font-mono leading-relaxed border-l border-white/10 pl-4 py-1">
                    &gt; We only partner with brands that align with our first principles. If you have a product that solves a hard problem, request a media kit via the contact channel.
                </p>
</div>
<div className="group">
<h4 className="text-lg font-medium text-white mb-2 group-hover:text-luth-accent transition-colors">Do you accept guest applications?</h4>
<p className="text-sm text-luth-dim font-mono leading-relaxed border-l border-white/10 pl-4 py-1">
                    &gt; We do not accept unsolicited pitches. Our research team curates guests based on merit and current global relevance.
                </p>
</div>
<div className="group">
<h4 className="text-lg font-medium text-white mb-2 group-hover:text-luth-accent transition-colors">Is there a premium ad-free feed?</h4>
<p className="text-sm text-luth-dim font-mono leading-relaxed border-l border-white/10 pl-4 py-1">
                    &gt; Yes. 'Luth+' is available on Apple Podcasts. It removes all external sponsorship reads.
                </p>
</div>
</div>
</section>

<footer className="bg-[#020202] border-t border-white/5 pt-20 pb-40">
<div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-4 gap-12">
<div className="col-span-1">
<h4 className="font-bold tracking-widest text-2xl text-white mb-4">LUTH.</h4>
<p className="text-xs text-luth-dim uppercase tracking-widest">Signal in the noise.</p>
</div>
<div className="col-span-1 flex flex-col gap-4">
<span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">Listen</span>
<a className="text-sm text-luth-dim hover:text-white transition-colors hover:pl-2 duration-300 border-l border-transparent hover:border-luth-accent" href="#">Spotify</a>
<a className="text-sm text-luth-dim hover:text-white transition-colors hover:pl-2 duration-300 border-l border-transparent hover:border-luth-accent" href="#">Apple Podcasts</a>
<a className="text-sm text-luth-dim hover:text-white transition-colors hover:pl-2 duration-300 border-l border-transparent hover:border-luth-accent" href="#">YouTube</a>
</div>
<div className="col-span-1 flex flex-col gap-4">
<span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">Legal</span>
<a className="text-sm text-luth-dim hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-luth-dim hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="text-sm text-luth-dim hover:text-white transition-colors" href="#">Sponsorships</a>
</div>
<div className="col-span-1 flex flex-col gap-4">
<span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">Social</span>
<a className="text-sm text-luth-dim hover:text-white transition-colors" href="#">Twitter / X</a>
<a className="text-sm text-luth-dim hover:text-white transition-colors" href="#">Instagram</a>
<a className="text-sm text-luth-dim hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
<div className="max-w-screen-xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex justify-between items-center">
<p className="text-[10px] text-luth-dim font-mono">© 2026 LUTH MEDIA INC. ESTABLISHED IN PARIS.</p>
</div>
</footer>

<div className="fixed bottom-0 left-0 right-0 z-50 glass-player py-4 px-6 md:px-12">
<div className="max-w-screen-xl mx-auto flex items-center justify-between gap-6">

<div className="flex items-center gap-4 min-w-0">
<div className="w-10 h-10 bg-[#111] rounded-sm flex-shrink-0 border border-white/10 hidden md:block group cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-luth-accent/20 hidden group-hover:block"></div>
<div className="absolute bottom-1 right-1 flex gap-0.5">
<div className="w-0.5 h-2 bg-luth-accent bar"></div>
<div className="w-0.5 h-3 bg-luth-accent bar"></div>
<div className="w-0.5 h-1 bg-luth-accent bar"></div>
</div>
</div>
<div className="flex flex-col overflow-hidden">
<span className="text-[10px] font-bold text-luth-accent tracking-widest uppercase truncate">Now Playing</span>
<span className="text-sm text-white font-medium truncate">The Simulation Hypothesis - Ep. 142</span>
</div>
</div>

<div className="flex flex-col items-center flex-1 max-w-lg mx-4">
<div className="flex items-center gap-6 mb-2">
<iconify-icon className="text-luth-dim hover:text-white cursor-pointer transition-colors" icon="solar:skip-previous-bold" width="20"></iconify-icon>
<div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]">
<iconify-icon icon="solar:play-bold" width="20"></iconify-icon>
</div>
<iconify-icon className="text-luth-dim hover:text-white cursor-pointer transition-colors" icon="solar:skip-next-bold" width="20"></iconify-icon>
</div>

<div className="w-full h-[2px] bg-white/10 rounded-full relative group cursor-pointer">
<div className="absolute left-0 top-0 bottom-0 w-1/3 bg-luth-accent rounded-full"></div>
<div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
</div>

<div className="hidden md:flex items-center gap-4">
<span className="text-xs font-mono text-luth-dim">12:04 / 2:14:00</span>
<iconify-icon className="text-luth-dim" icon="solar:volume-small-linear" width="20"></iconify-icon>
</div>
</div>
</div>

    </>
  );
}
