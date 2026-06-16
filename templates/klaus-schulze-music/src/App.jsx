import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
script: ['"Mr Dafoe"', 'cursive'],
},
extend: {
colors: {
background: '#020202',
surface: '#0A0A0A',
surfaceHighlight: '#121212',
border: '#1F1F1F',
primary: '#EDEDED',
secondary: '#888888',
accent: '#DC2626',
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)",
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="md:hidden fixed top-0 w-full z-50 glass-panel border-b border-border flex items-center justify-between px-6 py-4">
<span className="font-script text-2xl text-accent">Klaus Schulze</span>
<button className="text-secondary hover:text-primary transition-colors flex items-center">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</header>

<aside className="hidden md:flex flex-col w-64 h-full border-r border-border bg-surface/50 backdrop-blur-xl fixed left-0 top-0 z-40">
<div className="p-8 pb-4">
<h1 className="font-script text-4xl text-accent transform -rotate-2 origin-left tracking-wide">Klaus Schulze</h1>
<p className="text-[10px] text-secondary mt-2 tracking-[0.2em] uppercase font-medium ml-1">Official Archives</p>
</div>
<nav className="flex-1 overflow-y-auto px-4 py-4 space-y-0.5">
<a className="flex items-center gap-3 px-4 py-2.5 text-sm text-primary bg-white/5 rounded-md border border-white/5 transition-all group shadow-sm" href="#">
<iconify-icon className="text-secondary group-hover:text-primary transition-colors" icon="solar:home-smile-linear" width="18"></iconify-icon>
<span className="font-medium">Home</span>
</a>
<div className="pt-5 pb-2 px-4 text-[10px] font-semibold text-secondary/50 uppercase tracking-widest">Explore</div>
<a className="flex items-center gap-3 px-4 py-2 text-sm text-secondary hover:text-primary hover:bg-white/5 rounded-md transition-all group" href="#">
<iconify-icon className="text-secondary/70 group-hover:text-primary transition-colors" icon="solar:user-circle-linear" width="18"></iconify-icon>
<span>Biography</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-sm text-secondary hover:text-primary hover:bg-white/5 rounded-md transition-all group" href="#">
<iconify-icon className="text-secondary/70 group-hover:text-primary transition-colors" icon="solar:vinyl-record-linear" width="18"></iconify-icon>
<span>Discography</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-sm text-secondary hover:text-primary hover:bg-white/5 rounded-md transition-all group" href="#">
<iconify-icon className="text-secondary/70 group-hover:text-primary transition-colors" icon="solar:ticket-sale-linear" width="18"></iconify-icon>
<span>Concerts</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-sm text-secondary hover:text-primary hover:bg-white/5 rounded-md transition-all group" href="#">
<iconify-icon className="text-secondary/70 group-hover:text-primary transition-colors" icon="solar:camera-linear" width="18"></iconify-icon>
<span>Photos</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-sm text-secondary hover:text-primary hover:bg-white/5 rounded-md transition-all group" href="#">
<iconify-icon className="text-secondary/70 group-hover:text-primary transition-colors" icon="solar:microphone-2-linear" width="18"></iconify-icon>
<span>Interviews</span>
</a>
<div className="pt-5 pb-2 px-4 text-[10px] font-semibold text-secondary/50 uppercase tracking-widest">Community</div>
<a className="flex items-center gap-3 px-4 py-2 text-sm text-secondary hover:text-primary hover:bg-white/5 rounded-md transition-all group" href="#">
<iconify-icon className="text-secondary/70 group-hover:text-primary transition-colors" icon="solar:chat-line-linear" width="18"></iconify-icon>
<span>Opinions</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-sm text-secondary hover:text-primary hover:bg-white/5 rounded-md transition-all group" href="#">
<iconify-icon className="text-secondary/70 group-hover:text-primary transition-colors" icon="solar:tag-linear" width="18"></iconify-icon>
<span>Offers</span>
</a>
</nav>
<div className="p-4 border-t border-border space-y-2">
<button className="flex w-full items-center gap-3 px-4 py-2 text-sm text-secondary hover:text-primary hover:bg-white/5 rounded-md transition-all">
<iconify-icon icon="solar:magnifer-linear" width="18"></iconify-icon>
<span>Search</span>
</button>
<button className="flex w-full items-center gap-3 px-4 py-2 text-sm text-secondary hover:text-primary hover:bg-white/5 rounded-md transition-all">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
<span>Contact</span>
</button>
</div>
</aside>

<main className="flex-1 md:ml-64 h-full overflow-y-auto bg-background relative scroll-smooth">

<section className="relative w-full h-[600px] flex flex-col items-center justify-center overflow-hidden border-b border-border/50">

<div className="absolute inset-0 bg-background z-0"></div>
<div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.07] z-0"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] animate-pulse-slow pointer-events-none"></div>
<div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10"></div>

<div className="relative z-20 text-center px-6 max-w-4xl mx-auto space-y-8">

<div className="flex items-center justify-center gap-3 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
<div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-secondary"></div>
<span className="text-xs font-mono text-secondary tracking-[0.3em] uppercase">1947 — 2022</span>
<div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-secondary"></div>
</div>

<div className="relative">
<h1 className="font-script text-7xl md:text-9xl text-white drop-shadow-2xl opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards] scale-95 transform transition-transform duration-1000 hover:scale-100 cursor-default">
                        Klaus Schulze
                    </h1>

<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-accent/80 rounded-full blur-[2px] opacity-0 animate-[widthGrow_1s_ease-out_0.8s_forwards]"></div>
</div>

<p className="text-lg md:text-xl text-secondary font-light tracking-wide max-w-2xl mx-auto leading-relaxed opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
                    The architect of the <span className="text-primary font-medium">Berlin School</span>. 
                    Explore the sonic universe of an electronic music pioneer.
                </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 opacity-0 animate-[fadeIn_1s_ease-out_0.9s_forwards]">
<button className="group h-11 px-8 rounded-full bg-primary text-background font-medium text-sm hover:bg-white transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
<span>Enter Archives</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="group h-11 px-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-primary font-medium text-sm hover:bg-white/10 transition-all hover:border-white/20 flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
<span>Stream Essentials</span>
</button>
</div>
</div>
</section>
<div className="max-w-6xl mx-auto px-6 md:px-12 py-16 space-y-20">

<div className="group relative overflow-hidden rounded-xl bg-surfaceHighlight/50 border border-border p-5 transition-all hover:border-white/10">
<div className="flex flex-col sm:flex-row items-start gap-5">
<div className="p-3 bg-blue-500/10 rounded-full text-blue-400 shrink-0">
<iconify-icon height="24" icon="solar:globe-linear" width="24"></iconify-icon>
</div>
<div className="space-y-1.5">
<h3 className="text-sm font-semibold text-white tracking-wide">Willkommen</h3>
<p className="text-sm text-secondary leading-relaxed max-w-2xl">
                            Notice for our German visitors: Einige Seiten sind auch auf Deutsch verfügbar. Bitte achte auf das Zeichen <span className="inline-flex items-center justify-center w-5 h-4 ml-1 align-middle opacity-80">🇩🇪</span>
</p>
</div>
</div>
</div>

<section className="space-y-10">
<div className="flex items-center justify-between border-b border-border pb-4">
<h3 className="text-xl font-medium tracking-tight text-white flex items-center gap-2">
<iconify-icon className="text-accent" icon="solar:star-fall-linear"></iconify-icon>
                        Featured Milestone
                    </h3>
<a className="text-xs font-medium text-secondary hover:text-white transition-colors flex items-center gap-1 uppercase tracking-wider" href="#">
                        View Discography <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="group relative grid md:grid-cols-12 gap-8 md:gap-12 bg-surfaceHighlight/30 border border-border rounded-2xl p-8 hover:border-white/10 transition-all duration-500">

<div className="md:col-span-5 relative z-10 order-1 md:order-1">
<div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-2xl border border-white/5 bg-black">
<img alt="Moondawn Album Cover Art" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1614726365723-49cfae9d038d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/5 pointer-events-none"></div>
</div>
</div>

<div className="md:col-span-7 relative z-10 flex flex-col justify-center order-2 md:order-2 space-y-6">
<div>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest mb-4 border border-accent/20">
                                50th Anniversary
                            </span>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">Moondawn</h2>
<p className="text-base md:text-lg text-secondary leading-relaxed">
                                Originally released in 1976, <em>Moondawn</em> stands as a monumental pillar in the Berlin School. Featuring the iconic "Floating" and "Mindphaser", it marked the beginning of Schulze's "analogue golden era" with the Big Moog synthesizer taking center stage.
                            </p>
</div>
<div className="flex flex-wrap gap-3 pt-2">
<button className="inline-flex h-10 items-center justify-center rounded-md bg-white px-6 text-xs font-semibold uppercase tracking-wide text-black transition-colors hover:bg-gray-200">
                                Read Retrospective
                            </button>
<button className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-transparent px-6 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white/5">
                                Listen
                            </button>
</div>
<div className="pt-6 border-t border-white/5 grid grid-cols-2 gap-6">
<div>
<div className="text-[10px] text-secondary/60 uppercase tracking-widest mb-1 font-semibold">Released</div>
<div className="text-sm font-medium text-primary">April 16, 1976</div>
</div>
<div>
<div className="text-[10px] text-secondary/60 uppercase tracking-widest mb-1 font-semibold">Label</div>
<div className="text-sm font-medium text-primary">Brain / Metronome</div>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-10 pb-12">
<div className="flex items-center justify-between border-b border-border pb-4">
<h3 className="text-xl font-medium tracking-tight text-white flex items-center gap-2">
<iconify-icon className="text-secondary" icon="solar:bell-linear"></iconify-icon>
                        Recent Updates
                    </h3>
</div>
<div className="grid md:grid-cols-3 gap-6">

<a className="group block p-6 rounded-xl bg-surface border border-border hover:border-accent/40 hover:bg-surfaceHighlight transition-all duration-300" href="#">
<div className="flex items-center justify-between mb-4">
<div className="p-2 rounded-md bg-white/5 text-secondary group-hover:text-primary transition-colors">
<iconify-icon icon="solar:vinyl-linear" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-bold text-secondary/60 tracking-wider uppercase">Oct 12, 2025</span>
</div>
<h4 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">Deus Arrakis Re-issue</h4>
<p className="text-sm text-secondary leading-relaxed line-clamp-3">
                            The final studio album by Klaus Schulze is receiving a special vinyl collector's edition featuring unreleased sketches.
                        </p>
</a>

<a className="group block p-6 rounded-xl bg-surface border border-border hover:border-accent/40 hover:bg-surfaceHighlight transition-all duration-300" href="#">
<div className="flex items-center justify-between mb-4">
<div className="p-2 rounded-md bg-white/5 text-secondary group-hover:text-primary transition-colors">
<iconify-icon icon="solar:microphone-3-linear" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-bold text-secondary/60 tracking-wider uppercase">Sep 05, 2025</span>
</div>
<h4 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">Archived Interviews</h4>
<p className="text-sm text-secondary leading-relaxed line-clamp-3">
                            We have digitized a rare radio interview from 1982 recorded in Cologne. Now available in the Interviews section.
                        </p>
</a>

<a className="group block p-6 rounded-xl bg-surface border border-border hover:border-accent/40 hover:bg-surfaceHighlight transition-all duration-300" href="#">
<div className="flex items-center justify-between mb-4">
<div className="p-2 rounded-md bg-white/5 text-secondary group-hover:text-primary transition-colors">
<iconify-icon icon="solar:gallery-wide-linear" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-bold text-secondary/60 tracking-wider uppercase">Aug 22, 2025</span>
</div>
<h4 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">Exhibition in Berlin</h4>
<p className="text-sm text-secondary leading-relaxed line-clamp-3">
                            A retrospective photo exhibition of the "X" era tours will be hosted at the Electronic Arts Museum next month.
                        </p>
</a>
</div>
</section>

<footer className="border-t border-border pt-8 pb-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-secondary/60">
<div className="flex flex-col gap-1 md:items-start items-center">
<span className="font-medium text-secondary">© 2026 Klaus Schulze</span>
<span>The Official Website. All rights reserved.</span>
</div>
<div className="flex gap-8 font-medium">
<a className="hover:text-primary transition-colors" href="#">Imprint</a>
<a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-primary transition-colors" href="#">Contact</a>
</div>
</footer>
</div>
</main>

<style>
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes widthGrow {
            from { width: 0; opacity: 0; }
            to { width: 8rem; opacity: 0.8; }
        }
    </style>

    </>
  );
}
