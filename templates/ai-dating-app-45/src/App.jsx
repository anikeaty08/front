import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
violet: {
500: '#8b5cf6',
900: '#4c1d95',
},
neutral: {
800: '#262626', // Custom border tone
900: '#171717', // Custom bg tone
950: '#0a0a0a',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
jakarta: ['Plus Jakarta Sans', 'sans-serif'],
},
animation: {
'float': 'float 8s ease-in-out infinite',
'float-slow': 'float 12s ease-in-out infinite reverse',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'enter': 'enter 0.6s linear forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
enter: {
'0%': { opacity: '0', transform: 'translateY(10px) scale(0.98)' },
'100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
}
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
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-violet-900/10 blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-neutral-800/20 blur-[100px]"></div>
<div className="absolute inset-0 bg-grid opacity-20"></div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 py-8 flex flex-col gap-20 animate-on-load">

<nav className="flex justify-between items-center py-4 glass-panel rounded-full px-6 sticky top-4 z-50">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-violet-500 to-neutral-800"></div>
<span className="font-jakarta font-medium tracking-tight text-white text-sm">SPHERE</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Philosophy</a>
<a className="hover:text-white transition-colors" href="#">Method</a>
<a className="hover:text-white transition-colors" href="#">Stories</a>
</div>
<a className="text-xs font-medium bg-neutral-100 text-neutral-900 px-4 py-2 rounded-full hover:bg-white transition-colors" href="#">Request Access</a>
</nav>

<header className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-300 text-xs font-medium">
<iconify-icon icon="solar:stars-minimalistic-linear" strokeWidth="1.5" width="14"></iconify-icon>
<span>Intelligence over algorithms</span>
</div>
<h1 className="font-jakarta font-medium text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]">
                    Stop searching.<br/>
<span className="text-neutral-500">Start being found.</span>
</h1>
<p className="text-neutral-400 text-lg font-light max-w-md leading-relaxed">
                    Sphere is an autonomous AI agent that understands who you are to find meaningful real-world connections. No swiping, just connecting.
                </p>
<div className="flex flex-wrap gap-4">
<button className="bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-lg text-sm font-medium transition-all shadow-lg shadow-violet-900/20 flex items-center gap-2">
                        Create your sphere
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="glass-panel px-6 py-3 rounded-lg text-neutral-300 text-sm font-medium hover:text-white transition-colors flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Watch the vision
                    </button>
</div>
</div>

<div className="flex justify-center items-center relative h-[400px]">
<div className="sphere-container flex items-center justify-center">

<div className="node w-2 h-2 top-10 left-10 animate-pulse-slow"></div>
<div className="node w-1 h-1 top-20 right-14 animate-pulse"></div>
<div className="node w-3 h-3 bottom-12 left-1/2 bg-violet-400 blur-[2px] animate-float-slow"></div>

<svg className="absolute inset-0 w-full h-full opacity-30 animate-[spin_60s_linear_infinite]" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="45" stroke="url(#grad1)" stroke-dasharray="4 4" strokeWidth="0.2"></circle>
<circle cx="50" cy="50" fill="none" r="35" stroke="white" strokeWidth="0.1"></circle>
<defs>
<lineargradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: 'rgb(139,92,246)', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: 'rgb(23,23,23)', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
</svg>
<div className="text-white/80 font-jakarta text-xs tracking-widest uppercase z-10 backdrop-blur-md px-4 py-1 rounded-full border border-white/10">
                        Analyzing
                    </div>
</div>

<div className="absolute top-10 right-10 glass-panel px-3 py-2 rounded-lg flex items-center gap-3 animate-float-slow">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center border border-neutral-700">
<iconify-icon className="text-violet-400" icon="solar:user-heart-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-[10px] text-neutral-500 uppercase tracking-wider">Match Found</div>
<div className="text-xs text-white font-medium">98% Compatibility</div>
</div>
</div>
</div>
</header>

<section className="space-y-6">
<div className="flex flex-col gap-2 mb-4">
<h2 className="font-jakarta font-medium text-2xl text-white tracking-tight">The Modern Paradox</h2>
<p className="text-neutral-400 text-sm">Why connection feels harder in a connected world.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="md:col-span-2 glass-panel p-8 rounded-2xl flex flex-col justify-between group h-64 relative overflow-hidden">
<div className="relative z-10">
<iconify-icon className="text-neutral-500 mb-4" icon="solar:graph-down-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-xl text-white font-medium mb-2 font-jakarta">The Engagement Trap</h3>
<p className="text-neutral-400 text-sm max-w-md font-light">Apps are designed to keep you swiping, not dating. Their revenue model relies on your continued search, creating a conflict of interest between their profit and your happiness.</p>
</div>
<div className="absolute right-0 bottom-0 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl group-hover:bg-violet-500/10 transition-all duration-700"></div>
</div>

<div className="md:col-span-1 glass-panel p-8 rounded-2xl flex flex-col justify-center items-center text-center group relative overflow-hidden h-64">
<div className="relative z-10 space-y-2">
<div className="text-5xl font-jakarta font-medium text-white tracking-tight">4.2s</div>
<p className="text-neutral-500 text-xs uppercase tracking-widest">Avg. attention span</p>
<p className="text-neutral-400 text-xs mt-2 px-4">People are reduced to playing cards in a high-speed game.</p>
</div>
</div>

<div className="md:col-span-1 glass-panel p-8 rounded-2xl flex flex-col justify-between h-64 group">
<iconify-icon className="text-neutral-500" icon="solar:filters-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div>
<h3 className="text-lg text-white font-medium mb-1 font-jakarta">Filter Bubbles</h3>
<p className="text-neutral-400 text-xs font-light">Superficial filters miss the nuance of chemistry.</p>
</div>
</div>

<div className="md:col-span-2 glass-panel p-8 rounded-2xl flex items-center justify-between relative overflow-hidden h-64">
<div className="relative z-10 max-w-sm">
<h3 className="text-xl text-white font-medium mb-2 font-jakarta">The Shallow Pool</h3>
<p className="text-neutral-400 text-sm font-light">When you optimize for mass appeal, you lose individual resonance. Sphere goes deep where others skim the surface.</p>
</div>
<div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1" width="120"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="space-y-6 pt-10">
<div className="flex flex-col gap-2 mb-4">
<h2 className="font-jakarta font-medium text-2xl text-white tracking-tight">The Neural Method</h2>
<p className="text-neutral-400 text-sm">From random chance to calculated serendipity.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="md:col-span-1 glass-panel p-6 rounded-2xl flex flex-col gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white font-jakarta border border-neutral-700">01</div>
<h3 className="text-white font-medium font-jakarta">Deep Calibration</h3>
<p className="text-neutral-400 text-sm font-light">Talk to Sphere like a friend. It learns your values, humor, and non-negotiables through natural conversation.</p>
</div>

<div className="md:col-span-2 glass-panel p-6 rounded-2xl relative overflow-hidden min-h-[300px] flex items-center justify-center bg-neutral-900/50">

<div className="w-full max-w-md glass-panel rounded-xl border-neutral-700 p-4 space-y-3 transform scale-95 opacity-90">
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-violet-600/20 flex items-center justify-center">
<iconify-icon className="text-violet-400" icon="solar:magic-stick-3-linear" width="16"></iconify-icon>
</div>
<div className="flex-1 bg-neutral-800/50 rounded-lg rounded-tl-none p-3 text-sm text-neutral-300 font-light">
                                Based on your love for minimalist architecture and indie folk, I think you'd resonate with Elena. She just visited the Tate Modern. Shall I introduce you?
                            </div>
</div>
<div className="flex gap-3 justify-end">
<div className="bg-violet-600 rounded-lg rounded-tr-none p-3 text-sm text-white font-light">
                                That sounds perfect. What's her vibe?
                            </div>
</div>
</div>
</div>

<div className="md:col-span-2 glass-panel p-8 rounded-2xl flex flex-col justify-center relative overflow-hidden">
<div className="z-10 relative">
<div className="flex items-center gap-2 mb-4 text-violet-400">
<iconify-icon icon="solar:connection-linear" width="20"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-medium">Step 02</span>
</div>
<h3 className="text-2xl text-white font-medium mb-2 font-jakarta">The Introduction</h3>
<p className="text-neutral-400 text-sm font-light max-w-lg">Sphere coordinates the first meeting. No endless chatting. It suggests a venue you both love, sets the time, and lets reality take over.</p>
</div>
</div>

<div className="md:col-span-1 glass-panel p-8 rounded-2xl flex flex-col items-center justify-center text-center">
<div className="w-16 h-16 rounded-full border border-neutral-700 flex items-center justify-center mb-4 relative">
<iconify-icon className="text-white" icon="solar:heart-angle-linear" width="24"></iconify-icon>
<div className="absolute inset-0 border border-violet-500/50 rounded-full animate-ping opacity-20"></div>
</div>
<h3 className="text-white font-medium font-jakarta mb-1">Feedback Loop</h3>
<p className="text-neutral-400 text-xs font-light">Sphere learns from every date.</p>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10">
<div className="glass-panel p-8 rounded-2xl">
<div className="flex gap-1 text-violet-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-neutral-200 text-sm leading-relaxed mb-6 font-light">"It felt weird at first, trusting an AI. But Sphere didn't just match me with a face; it matched me with a mind. My first date was a conversation, not an interview."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700"></div>
<div>
<div className="text-white text-xs font-medium">Marcus Chen</div>
<div className="text-neutral-500 text-[10px]">Architect, NYC</div>
</div>
</div>
</div>
<div className="glass-panel p-8 rounded-2xl">
<div className="flex gap-1 text-violet-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-neutral-200 text-sm leading-relaxed mb-6 font-light">"I deleted Tinder, Hinge, and Bumble. Sphere is the only thing that feels dignified. It respects my time and my emotions."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700"></div>
<div>
<div className="text-white text-xs font-medium">Sarah Jenkins</div>
<div className="text-neutral-500 text-[10px]">Writer, London</div>
</div>
</div>
</div>
</section>

<footer className="py-20 text-center relative overflow-hidden rounded-3xl glass-panel mt-10">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/5 to-violet-900/10 pointer-events-none"></div>
<div className="relative z-10 space-y-6">
<h2 className="font-jakarta font-medium text-4xl md:text-5xl text-white tracking-tight">Stop searching.<br/>Start being found.</h2>
<p className="text-neutral-400 font-light max-w-md mx-auto">Join the private beta. We are onboarding 100 new members every week to maintain quality.</p>
<form className="max-w-sm mx-auto flex gap-2">
<input className="flex-1 bg-neutral-900/50 border border-neutral-800 text-white px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-violet-500 transition-colors placeholder:text-neutral-600" placeholder="email@address.com" type="email"/>
<button className="bg-white text-neutral-900 px-6 py-3 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors" type="button">
                        Join
                    </button>
</form>
<div className="pt-8 flex justify-center gap-6 text-neutral-600">
<iconify-icon className="hover:text-white transition-colors cursor-pointer" icon="solar:logo-twitter-linear" width="20"></iconify-icon>
<iconify-icon className="hover:text-white transition-colors cursor-pointer" icon="solar:logo-instagram-linear" width="20"></iconify-icon>
</div>
<p className="text-[10px] text-neutral-700 mt-4">© 2024 Sphere Inc. All rights reserved.</p>
</div>
</footer>
</div>

    </>
  );
}
