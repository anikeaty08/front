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
      
// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



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
      

<div className="fixed bottom-0 left-0 right-0 p-4 z-50 md:hidden bg-gradient-to-t from-black via-black to-transparent">
<button className="w-full bg-white text-black font-semibold rounded-full py-4 text-sm tracking-tight hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Get my card
        </button>
</div>

<nav className="fixed top-0 w-full z-40 glass-panel border-b-0 border-x-0 border-t-0">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-sm font-semibold tracking-tighter text-white">PROMO.TRAVEL</div>
<div className="hidden md:flex items-center gap-6 text-sm text-zinc-400 font-medium">
<a className="hover:text-white transition-colors" href="#benefits">Benefits</a>
<a className="hover:text-white transition-colors" href="#tiers">Tiers</a>
<button className="bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20 transition-colors tracking-tight">Sign In</button>
</div>
</div>
</nav>
<main className="pt-24 md:pt-32">

<section className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center relative mb-32">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 aspect-square bg-zinc-800/30 rounded-full blur-[100px] pointer-events-none -z-10"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-medium text-zinc-300 mb-8 tracking-tight">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Pre-launch Phase Active
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 mb-6 max-w-3xl leading-[1.1]">
                Get your travel access card
            </h1>
<p className="text-lg md:text-xl text-zinc-400 font-medium max-w-xl mb-12 tracking-tight">
                Unlock rewards, hidden offers, and early access before everyone else. Limited spots available.
            </p>
<button className="hidden md:block bg-white text-black font-semibold rounded-full px-8 py-4 text-sm tracking-tight hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] mb-20 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                Get my card
            </button>

<div className="perspective-container w-full max-w-[320px] md:max-w-[400px] mt-8 md:mt-0 relative">

<div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-10 bg-black shadow-[0_0_50px_rgba(255,255,255,0.15)] rounded-full blur-xl"></div>
<div className="card-3d relative w-full aspect-[1.586/1] rounded-[1.5rem] p-6 flex flex-col justify-between overflow-hidden shadow-2xl" style={{background: 'linear-gradient(135deg, #18181b 0%, #09090b 100%)'}}>

<div className="absolute inset-0 border border-white/20 rounded-[1.5rem] pointer-events-none z-20"></div>

<div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(255,255,255,0.05)] pointer-events-none z-10"></div>

<div className="absolute inset-0 gloss-overlay pointer-events-none z-30"></div>
<div className="flex justify-between items-start relative z-40">
<span className="font-semibold tracking-tighter text-lg text-white">PROMO.TRAVEL</span>
<iconify-icon className="text-2xl text-zinc-400 rotate-90" icon="solar:sim-card-linear"></iconify-icon>
</div>
<div className="relative z-40 flex flex-col items-start gap-4">
<div className="w-10 h-8 rounded bg-gradient-to-r from-amber-200/20 to-amber-500/20 flex items-center justify-center border border-amber-500/30">
<div className="w-full h-[1px] bg-amber-500/50"></div>
</div>
<div className="w-full flex justify-between items-end">
<div>
<div className="text-[0.65rem] text-zinc-500 uppercase tracking-widest mb-1">Holder</div>
<div className="text-sm font-medium tracking-tight text-white/90">HIDDEN</div>
</div>
<div className="text-right">
<div className="text-[0.65rem] text-zinc-500 uppercase tracking-widest mb-1">Tier</div>
<div className="text-sm font-medium tracking-tight text-white/90">FOUNDER</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-24 flex items-center gap-4 text-sm font-medium text-zinc-500 tracking-tight">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-900 flex items-center justify-center"><iconify-icon className="text-zinc-400" icon="solar:user-rounded-linear"></iconify-icon></div>
<div className="w-8 h-8 rounded-full bg-zinc-700 border border-zinc-900 flex items-center justify-center"><iconify-icon className="text-zinc-300" icon="solar:user-linear"></iconify-icon></div>
<div className="w-8 h-8 rounded-full bg-zinc-600 border border-zinc-900 flex items-center justify-center"><iconify-icon className="text-zinc-200" icon="solar:user-check-linear"></iconify-icon></div>
</div>
<p>Over <span className="text-white">12,492</span> cards minted</p>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 mb-32" id="benefits">

<div>
<h2 className="text-2xl font-semibold tracking-tight text-white mb-8">Exclusive Access</h2>
<div className="flex flex-col gap-4">

<div className="glass-panel p-6 rounded-2xl flex gap-5 items-start group hover:bg-white/[0.05] transition-colors cursor-default">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/10 flex items-center justify-center shrink-0 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-white" icon="solar:globe-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-white mb-1 tracking-tight">Hidden Inventory</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Gain entry to unlisted flight and hotel rates invisible to the public market.</p>
</div>
</div>
<div className="glass-panel p-6 rounded-2xl flex gap-5 items-start group hover:bg-white/[0.05] transition-colors cursor-default">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/10 flex items-center justify-center shrink-0 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-white" icon="solar:crown-star-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-white mb-1 tracking-tight">Priority Drops</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Be the first to claim high-value travel credits and experiential packages.</p>
</div>
</div>
<div className="glass-panel p-6 rounded-2xl flex gap-5 items-start group hover:bg-white/[0.05] transition-colors cursor-default">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/10 flex items-center justify-center shrink-0 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-white" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-white mb-1 tracking-tight">Yield Rewards</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Earn tier-based cashback and multipliers on specific seasonal bookings.</p>
</div>
</div>
</div>
</div>

<div>
<h2 className="text-2xl font-semibold tracking-tight text-white mb-8">The Protocol</h2>
<div className="glass-panel p-8 rounded-3xl relative">

<div className="absolute left-[2.4rem] top-12 bottom-12 w-[1px] bg-gradient-to-b from-white/20 via-white/10 to-transparent"></div>
<div className="flex flex-col gap-10 relative">

<div className="flex gap-6 items-start">
<div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shrink-0 z-10 text-sm font-semibold">1</div>
<div>
<h3 className="text-base font-medium text-white mb-1 tracking-tight flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:card-send-linear"></iconify-icon> Activate Card
                                </h3>
<p className="text-sm text-zinc-400">Claim your digital asset to secure your place in the ecosystem.</p>
</div>
</div>

<div className="flex gap-6 items-start">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 text-white flex items-center justify-center shrink-0 z-10 text-sm font-semibold">2</div>
<div>
<h3 className="text-base font-medium text-white mb-1 tracking-tight flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:users-group-two-rounded-linear"></iconify-icon> Invite Network
                                </h3>
<p className="text-sm text-zinc-400">Distribute your unique cryptographic link to elevate your tier status.</p>
</div>
</div>

<div className="flex gap-6 items-start">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 text-white flex items-center justify-center shrink-0 z-10 text-sm font-semibold">3</div>
<div>
<h3 className="text-base font-medium text-white mb-1 tracking-tight flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:lock-keyhole-unlocked-linear"></iconify-icon> Unlock Vault
                                </h3>
<p className="text-sm text-zinc-400">Gain access to progressively higher-value travel assets and perks.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-32 overflow-hidden" id="tiers">
<div className="max-w-5xl mx-auto px-6 mb-8 flex justify-between items-end">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white mb-2">Hierarchy</h2>
<p className="text-sm text-zinc-400">Ascend tiers by expanding the network.</p>
</div>
</div>

<div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory px-6 pb-12 gap-6 w-full max-w-[100vw]">
<div className="w-6 shrink-0"></div> 

<div className="snap-center shrink-0 w-[260px] flex flex-col gap-4">
<div className="w-full aspect-[1.586/1] rounded-2xl p-5 flex flex-col justify-between border border-zinc-800 bg-zinc-900 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="font-semibold tracking-tighter text-sm text-zinc-500">PROMO.TRAVEL</span>
<div>
<div className="text-[0.6rem] text-zinc-600 uppercase tracking-widest mb-1">Tier</div>
<div className="text-sm font-medium tracking-tight text-zinc-300">ACCESS</div>
</div>
</div>
<div className="text-center text-xs text-zinc-500 font-medium tracking-tight">Base Entry Level</div>
</div>

<div className="snap-center shrink-0 w-[260px] flex flex-col gap-4">
<div className="w-full aspect-[1.586/1] rounded-2xl p-5 flex flex-col justify-between border border-zinc-600 bg-gradient-to-br from-zinc-700 to-zinc-900 relative overflow-hidden shadow-[0_10px_30px_rgba(255,255,255,0.02)] group">
<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="font-semibold tracking-tighter text-sm text-zinc-300">PROMO.TRAVEL</span>
<div>
<div className="text-[0.6rem] text-zinc-400 uppercase tracking-widest mb-1">Tier</div>
<div className="text-sm font-medium tracking-tight text-white">ACTIVE</div>
</div>
</div>
<div className="text-center text-xs text-zinc-400 font-medium tracking-tight">3 Invites Required</div>
</div>

<div className="snap-center shrink-0 w-[260px] flex flex-col gap-4">
<div className="w-full aspect-[1.586/1] rounded-2xl p-5 flex flex-col justify-between border border-amber-900/50 bg-gradient-to-br from-amber-950 via-zinc-900 to-black relative overflow-hidden shadow-[0_10px_30px_rgba(251,191,36,0.05)] group">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="font-semibold tracking-tighter text-sm text-amber-500/80">PROMO.TRAVEL</span>
<div>
<div className="text-[0.6rem] text-amber-700 uppercase tracking-widest mb-1">Tier</div>
<div className="text-sm font-medium tracking-tight text-amber-400">INSIDER</div>
</div>
</div>
<div className="text-center text-xs text-amber-600 font-medium tracking-tight">10 Invites Required</div>
</div>

<div className="snap-center shrink-0 w-[260px] flex flex-col gap-4">
<div className="w-full aspect-[1.586/1] rounded-2xl p-5 flex flex-col justify-between border border-rose-900/50 bg-gradient-to-br from-rose-950 via-zinc-900 to-black relative overflow-hidden shadow-[0_10px_30px_rgba(244,63,94,0.05)] group">
<div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="font-semibold tracking-tighter text-sm text-rose-400/80">PROMO.TRAVEL</span>
<div>
<div className="text-[0.6rem] text-rose-800 uppercase tracking-widest mb-1">Tier</div>
<div className="text-sm font-medium tracking-tight text-rose-300">FOUNDER</div>
</div>
</div>
<div className="text-center text-xs text-rose-700 font-medium tracking-tight">25 Invites Required</div>
</div>

<div className="snap-center shrink-0 w-[260px] flex flex-col gap-4">
<div className="w-full aspect-[1.586/1] rounded-2xl p-5 flex flex-col justify-between border border-white/20 bg-black relative overflow-hidden shadow-[0_10px_40px_rgba(255,255,255,0.1)] group">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'repeating-linear-gradient(45deg, #222 25%, transparent 25%, transparent 75%, #222 75%, #222), repeating-linear-gradient(45deg, #222 25%, #111 25%, #111 75%, #222 75%, #222)', backgroundPosition: '0 0, 2px 2px', backgroundSize: '4px 4px'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
<span className="font-semibold tracking-tighter text-sm text-white relative z-10">PROMO.TRAVEL</span>
<div className="relative z-10">
<div className="text-[0.6rem] text-zinc-500 uppercase tracking-widest mb-1">Tier</div>
<div className="text-sm font-medium tracking-tight text-white flex items-center gap-2">BLACK <iconify-icon icon="solar:star-fall-linear"></iconify-icon></div>
</div>
</div>
<div className="text-center text-xs text-white font-medium tracking-tight">Top 1% Global</div>
</div>
<div className="w-6 shrink-0"></div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mb-32">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white mb-2 flex items-center gap-3">
                        The Vault <iconify-icon className="text-zinc-500" icon="solar:safe-2-linear"></iconify-icon>
</h2>
<p className="text-sm text-zinc-400">Assets secured. Unlock via progression.</p>
</div>

<div className="glass-panel px-4 py-2 rounded-lg flex items-center gap-3">
<span className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Next Drop</span>
<div className="flex gap-2 text-sm font-mono text-white">
<span>48<span className="text-zinc-500 text-xs">H</span></span>:
                        <span>12<span className="text-zinc-500 text-xs">M</span></span>:
                        <span>09<span className="text-zinc-500 text-xs">S</span></span>
</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-5 gap-4">

<div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center text-center aspect-square relative overflow-hidden group">
<div className="absolute inset-0 bg-zinc-900/50 z-0"></div>
<iconify-icon className="text-2xl text-zinc-600 mb-3 relative z-10" icon="solar:lock-password-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-400 tracking-tight relative z-10">$100 Travel Credit</span>
</div>

<div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center text-center aspect-square relative overflow-hidden group border-amber-900/30">
<div className="absolute inset-0 bg-zinc-900/50 z-0"></div>
<iconify-icon className="text-2xl text-amber-700/50 mb-3 relative z-10" icon="solar:lock-password-linear"></iconify-icon>
<span className="text-xs font-medium text-amber-600/70 tracking-tight relative z-10">Hidden Deal Access</span>
</div>

<div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center text-center aspect-square relative overflow-hidden group">
<div className="absolute inset-0 bg-zinc-900/50 z-0"></div>
<iconify-icon className="text-2xl text-zinc-600 mb-3 relative z-10" icon="solar:lock-password-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-400 tracking-tight relative z-10">Promo Drop Alert</span>
</div>

<div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center text-center aspect-square relative overflow-hidden group border-rose-900/30">
<div className="absolute inset-0 bg-zinc-900/50 z-0"></div>
<iconify-icon className="text-2xl text-rose-800/50 mb-3 relative z-10" icon="solar:lock-password-linear"></iconify-icon>
<span className="text-xs font-medium text-rose-700/70 tracking-tight relative z-10">Founder Perk</span>
</div>

<div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center text-center aspect-square relative overflow-hidden group border-white/10 col-span-2 md:col-span-1">
<div className="absolute inset-0 bg-black/80 z-0"></div>
<iconify-icon className="text-2xl text-zinc-500 mb-3 relative z-10" icon="solar:lock-password-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-300 tracking-tight relative z-10">Black Card VIP Unlock</span>
</div>
</div>
</section>

<div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-24"></div>

<section className="max-w-5xl mx-auto px-6 mb-32">
<div className="text-center mb-16">
<span className="text-xs text-zinc-500 uppercase tracking-widest font-medium mb-2 block">System Preview</span>
<h2 className="text-3xl font-semibold tracking-tighter text-white">Post-Activation Interface</h2>
</div>
<div className="grid md:grid-cols-3 gap-8 items-start">

<div className="glass-panel rounded-[2rem] p-6 border-t border-white/10 relative overflow-hidden bg-black/50 shadow-2xl">
<div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-emerald-500/10 to-transparent pointer-events-none"></div>
<div className="text-center mb-6 relative z-10">
<div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-3 border border-emerald-500/20">
<iconify-icon className="text-xl" icon="solar:check-read-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight">Card Activated</h3>
<p className="text-xs text-zinc-400 mt-1">Welcome to the network.</p>
</div>

<div className="w-full aspect-[1.586/1] rounded-xl p-4 flex flex-col justify-between border border-zinc-600 bg-gradient-to-br from-zinc-700 to-zinc-900 mb-6 shadow-lg">
<span className="font-semibold tracking-tighter text-xs text-zinc-300">PROMO.TRAVEL</span>
<div className="flex justify-between items-end">
<div><div className="text-[0.5rem] text-zinc-400 uppercase tracking-widest">Holder</div><div className="text-xs font-medium text-white">J. DOE</div></div>
<div className="text-right"><div className="text-[0.5rem] text-zinc-400 uppercase tracking-widest">Tier</div><div className="text-xs font-medium text-white">ACTIVE</div></div>
</div>
</div>

<div className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-800">
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-400">Progress to Insider</span>
<span className="text-white font-medium">1 / 3 Invites</span>
</div>
<div className="w-full h-1.5 bg-zinc-800 rounded-full mb-4 overflow-hidden">
<div className="w-1/3 h-full bg-amber-500 rounded-full"></div>
</div>
<div className="text-[0.65rem] text-zinc-500 uppercase tracking-widest mb-2">Your Invite Link</div>
<div className="flex gap-2">
<div className="flex-1 bg-black border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-400 truncate flex items-center">
                                prmo.tvl/ref/x7y9
                            </div>
<button className="bg-white text-black px-3 py-2 rounded-lg text-xs font-medium hover:bg-zinc-200 transition-colors">Copy</button>
</div>
<div className="flex gap-2 mt-2">
<button className="flex-1 py-2 rounded-lg border border-zinc-800 flex items-center justify-center gap-2 text-xs text-zinc-300 hover:bg-zinc-800 transition-colors"><iconify-icon icon="solar:letter-linear"></iconify-icon> Email</button>
<button className="flex-1 py-2 rounded-lg border border-zinc-800 flex items-center justify-center gap-2 text-xs text-zinc-300 hover:bg-zinc-800 transition-colors"><iconify-icon icon="solar:chat-line-linear"></iconify-icon> SMS</button>
</div>
</div>
</div>

<div className="glass-panel rounded-[2rem] p-6 border-t border-white/10 bg-black/50 shadow-2xl flex flex-col h-full">
<div className="text-center mb-6">
<h3 className="text-lg font-medium text-white tracking-tight mb-1">Tier Upgrade</h3>
<p className="text-xs text-zinc-400">Unlock the Insider status.</p>
</div>
<div className="flex-1 flex flex-col gap-4">
<div className="flex items-center justify-between p-3 rounded-xl border border-zinc-800 bg-zinc-900/30">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-500" icon="solar:shield-keyhole-linear"></iconify-icon>
<span className="text-sm text-zinc-300">Base Access</span>
</div>
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between p-3 rounded-xl border border-amber-900/30 bg-amber-950/20">
<div className="flex items-center gap-3">
<iconify-icon className="text-amber-500" icon="solar:ticket-linear"></iconify-icon>
<span className="text-sm text-amber-500/90 font-medium">Hidden Deal Drops</span>
</div>
<iconify-icon className="text-amber-700" icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between p-3 rounded-xl border border-amber-900/30 bg-amber-950/20">
<div className="flex items-center gap-3">
<iconify-icon className="text-amber-500" icon="solar:wad-of-money-linear"></iconify-icon>
<span className="text-sm text-amber-500/90 font-medium">2x Reward Yield</span>
</div>
<iconify-icon className="text-amber-700" icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
</div>
<div className="mt-6 pt-6 border-t border-zinc-800">
<button className="w-full py-3 rounded-xl bg-zinc-800 text-sm font-medium text-zinc-300 flex items-center justify-center gap-2 hover:bg-zinc-700 transition-colors">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> Invite 2 more to unlock
                        </button>
</div>
</div>

<div className="glass-panel rounded-[2rem] p-6 border-t border-white/10 bg-black/50 shadow-2xl relative h-[400px] overflow-hidden flex flex-col justify-end">

<div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
<span className="text-xs font-medium text-white tracking-tight">Wallet</span>
<iconify-icon className="text-lg text-zinc-400" icon="solar:add-circle-linear"></iconify-icon>
</div>

<div className="relative w-full h-[200px] perspective-container z-20">

<div className="absolute bottom-0 left-0 w-full aspect-[1.586/1] rounded-2xl border border-zinc-800 bg-zinc-900 transform translate-y-8 scale-90 blur-[1px]"></div>

<div className="absolute bottom-0 left-0 w-full aspect-[1.586/1] rounded-2xl border border-amber-900/30 bg-gradient-to-br from-amber-950 to-black transform translate-y-4 scale-95 shadow-xl"></div>

<div className="absolute bottom-0 left-0 w-full aspect-[1.586/1] rounded-t-2xl p-4 flex flex-col justify-between border-t border-x border-white/20 bg-gradient-to-br from-zinc-800 to-black shadow-2xl transform origin-bottom hover:-translate-y-2 transition-transform cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none rounded-t-2xl"></div>
<div className="flex justify-between items-center relative z-10">
<span className="font-semibold tracking-tighter text-xs text-white">PROMO.TRAVEL</span>
<span className="w-8 h-5 bg-white/10 rounded backdrop-blur-sm border border-white/10 flex items-center justify-center"><iconify-icon className="text-[10px] text-white" icon="solar:nfc-linear"></iconify-icon></span>
</div>
<div className="relative z-10 mb-2">
<div className="text-sm font-medium text-white tracking-tight">ACTIVE STATUS</div>
<div className="text-[0.6rem] text-zinc-400">Ready to use</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent z-30"></div>
</div>
</div>
</section>
</main>
<footer className="border-t border-zinc-900 py-12 text-center md:pb-12 pb-32">
<div className="text-xs font-semibold tracking-tighter text-zinc-600 mb-4">PROMO.TRAVEL</div>
<p className="text-[0.65rem] text-zinc-500 tracking-tight uppercase">Protocol concept © 2024. Not a bank.</p>
</footer>

    </>
  );
}
