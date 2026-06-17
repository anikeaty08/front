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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-semibold tracking-tighter text-lg flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-black text-xs font-bold">L</div>
                LinkUnlocker
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#how-it-works">How It Works</a>
<a className="hover:text-white transition-colors" href="#testimonials">Testimonials</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition-colors" href="#">Sign up free</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] glow-blob -z-10 blur-3xl pointer-events-none opacity-60"></div>
<div className="max-w-7xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card mb-8 animate-fade-in-up">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-slate-700 border border-[#0A0A0A]"></div>
<div className="w-6 h-6 rounded-full bg-slate-600 border border-[#0A0A0A]"></div>
<div className="w-6 h-6 rounded-full bg-slate-500 border border-[#0A0A0A]"></div>
</div>
<span className="text-xs font-medium text-slate-300"><span className="text-emerald-400">134k+</span> followers gained</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
                Turn your audience <br/>
<span className="gradient-text">into followers</span>
</h1>
<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Gate your content behind social actions. Grow your YouTube, Twitter, and Discord audience faster than ever with intelligent unlock pages.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="h-12 px-8 rounded-full gradient-bg text-black font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto flex items-center justify-center gap-2">
                    Sign up for free now
                    <iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-full glass-card text-white font-medium hover:bg-white/5 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
<iconify-icon icon="lucide:play-circle" width="18"></iconify-icon>
                    How it works
                </button>
</div>

<div className="relative max-w-4xl mx-auto perspective-1000 group">
<div className="glass-card rounded-xl p-1 border-t border-white/10 shadow-2xl shadow-emerald-900/20 transform transition-transform duration-700 hover:scale-[1.01]">
<div className="bg-[#0f0f0f] rounded-lg overflow-hidden relative min-h-[400px] flex flex-col items-center pt-12">

<div className="absolute top-0 w-full h-12 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20"></div>
</div>

<div className="w-full max-w-md bg-[#161616] border border-white/5 rounded-2xl p-6 mt-8 shadow-lg relative z-10">
<div className="w-16 h-16 bg-slate-800 rounded-xl mb-4 mx-auto flex items-center justify-center text-3xl">🎁</div>
<h3 className="text-white text-center font-medium mb-1">Exclusive Asset Pack</h3>
<p className="text-slate-500 text-center text-sm mb-6">Complete actions to unlock download</p>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-black/40 rounded-lg border border-white/5 hover:border-red-500/50 transition-colors cursor-pointer group/item">
<div className="flex items-center gap-3">
<iconify-icon className="text-red-500" icon="lucide:youtube" width="20"></iconify-icon>
<span className="text-sm text-slate-300">Subscribe to Channel</span>
</div>
<div className="w-5 h-5 rounded border border-slate-600 group-hover/item:border-red-500 transition-colors"></div>
</div>
<div className="flex items-center justify-between p-3 bg-black/40 rounded-lg border border-white/5 hover:border-blue-400/50 transition-colors cursor-pointer group/item">
<div className="flex items-center gap-3">
<iconify-icon className="text-blue-400" icon="lucide:twitter" width="20"></iconify-icon>
<span className="text-sm text-slate-300">Follow on Twitter</span>
</div>
<div className="w-5 h-5 rounded border border-slate-600 group-hover/item:border-blue-400 transition-colors"></div>
</div>
</div>
<div className="mt-6">
<button className="w-full py-3 rounded-lg bg-emerald-500/20 text-emerald-400 text-sm font-medium border border-emerald-500/30 flex items-center justify-center gap-2 cursor-not-allowed opacity-80">
<iconify-icon icon="lucide:lock" width="16"></iconify-icon>
                                    Unlock Link
                                </button>
</div>
</div>

<div className="absolute top-1/2 left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
<div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-[#050505]" id="testimonials">
<div className="text-center mb-12">
<h2 className="text-sm font-semibold text-emerald-400 tracking-wider uppercase mb-2">Social Proof</h2>
<h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Trusted by Thousands of Creators</h3>
</div>
<div className="marquee-container relative">
<div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
<div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
<div className="marquee-content gap-6 px-6">


<div className="w-[300px] glass-card p-6 rounded-xl flex-shrink-0">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-slate-700"></div>
<div>
<div className="text-white font-medium text-sm">Alex G.</div>
<div className="text-slate-500 text-xs">YouTuber</div>
</div>
</div>
<p className="text-slate-400 text-sm mb-4">"Doubled my subscriber growth in just two weeks using LinkUnlocker."</p>
<div className="text-emerald-400 text-xs font-mono bg-emerald-900/20 px-2 py-1 rounded inline-block">+50,000 actions</div>
</div>

<div className="w-[300px] glass-card p-6 rounded-xl flex-shrink-0">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-slate-700"></div>
<div>
<div className="text-white font-medium text-sm">Sarah Designs</div>
<div className="text-slate-500 text-xs">Digital Artist</div>
</div>
</div>
<p className="text-slate-400 text-sm mb-4">"The best way to distribute freebies while growing my Twitter."</p>
<div className="text-cyan-400 text-xs font-mono bg-cyan-900/20 px-2 py-1 rounded inline-block">+12,400 actions</div>
</div>

<div className="w-[300px] glass-card p-6 rounded-xl flex-shrink-0">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-slate-700"></div>
<div>
<div className="text-white font-medium text-sm">TechMaster</div>
<div className="text-slate-500 text-xs">Tech Reviewer</div>
</div>
</div>
<p className="text-slate-400 text-sm mb-4">"Simple setup, incredible results. The analytics are top notch."</p>
<div className="text-emerald-400 text-xs font-mono bg-emerald-900/20 px-2 py-1 rounded inline-block">+85,000 actions</div>
</div>

<div className="w-[300px] glass-card p-6 rounded-xl flex-shrink-0">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-slate-700"></div>
<div>
<div className="text-white font-medium text-sm">StreamQueen</div>
<div className="text-slate-500 text-xs">Streamer</div>
</div>
</div>
<p className="text-slate-400 text-sm mb-4">"My Discord community exploded after using this for giveaways."</p>
<div className="text-purple-400 text-xs font-mono bg-purple-900/20 px-2 py-1 rounded inline-block">+22,000 actions</div>
</div>

<div className="w-[300px] glass-card p-6 rounded-xl flex-shrink-0">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-slate-700"></div>
<div>
<div className="text-white font-medium text-sm">Alex G.</div>
<div className="text-slate-500 text-xs">YouTuber</div>
</div>
</div>
<p className="text-slate-400 text-sm mb-4">"Doubled my subscriber growth in just two weeks using LinkUnlocker."</p>
<div className="text-emerald-400 text-xs font-mono bg-emerald-900/20 px-2 py-1 rounded inline-block">+50,000 actions</div>
</div>
<div className="w-[300px] glass-card p-6 rounded-xl flex-shrink-0">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-slate-700"></div>
<div>
<div className="text-white font-medium text-sm">Sarah Designs</div>
<div className="text-slate-500 text-xs">Digital Artist</div>
</div>
</div>
<p className="text-slate-400 text-sm mb-4">"The best way to distribute freebies while growing my Twitter."</p>
<div className="text-cyan-400 text-xs font-mono bg-cyan-900/20 px-2 py-1 rounded inline-block">+12,400 actions</div>
</div>
<div className="w-[300px] glass-card p-6 rounded-xl flex-shrink-0">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-slate-700"></div>
<div>
<div className="text-white font-medium text-sm">TechMaster</div>
<div className="text-slate-500 text-xs">Tech Reviewer</div>
</div>
</div>
<p className="text-slate-400 text-sm mb-4">"Simple setup, incredible results. The analytics are top notch."</p>
<div className="text-emerald-400 text-xs font-mono bg-emerald-900/20 px-2 py-1 rounded inline-block">+85,000 actions</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="how-it-works">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Growth in 3 Simple Steps</h2>
<p className="text-slate-400">No coding required. Start in minutes.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent -z-10"></div>

<div className="group">
<div className="w-24 h-24 mx-auto glass-card rounded-2xl flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-300">
<div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-lg group-hover:bg-emerald-500/20 transition-all"></div>
<iconify-icon className="text-emerald-400" icon="lucide:link" width="32"></iconify-icon>
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-sm font-bold text-white">1</div>
</div>
<div className="text-center px-4">
<h3 className="text-lg font-medium text-white mb-2">Create Your Link</h3>
<p className="text-sm text-slate-400 leading-relaxed">Lock any URL behind a customized landing page. Choose actions like 'Subscribe', 'Follow', or 'Join Discord'.</p>
</div>
</div>

<div className="group">
<div className="w-24 h-24 mx-auto glass-card rounded-2xl flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-300">
<div className="absolute inset-0 bg-cyan-500/10 rounded-2xl blur-lg group-hover:bg-cyan-500/20 transition-all"></div>
<iconify-icon className="text-cyan-400" icon="lucide:share-2" width="32"></iconify-icon>
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-sm font-bold text-white">2</div>
</div>
<div className="text-center px-4">
<h3 className="text-lg font-medium text-white mb-2">Share with Audience</h3>
<p className="text-sm text-slate-400 leading-relaxed">Post your shortened link in your video descriptions, tweets, or bio. Let your content do the work.</p>
</div>
</div>

<div className="group">
<div className="w-24 h-24 mx-auto glass-card rounded-2xl flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-300">
<div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-lg group-hover:bg-emerald-500/20 transition-all"></div>
<iconify-icon className="text-emerald-400" icon="lucide:trending-up" width="32"></iconify-icon>
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-sm font-bold text-white">3</div>
</div>
<div className="text-center px-4">
<h3 className="text-lg font-medium text-white mb-2">Track Growth</h3>
<p className="text-sm text-slate-400 leading-relaxed">Watch your followers count rise in real-time via our dashboard. Optimize for maximum conversion.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="features">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Everything you need to grow</h2>
<p className="text-slate-400 max-w-2xl">Powerful features packed into a beautiful interface designed for creators.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">

<div className="glass-card rounded-2xl p-8 md:col-span-2 lg:col-span-2 row-span-2 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400">
<iconify-icon icon="lucide:zap" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Multi-Platform Actions</h3>
<p className="text-sm text-slate-400 mb-8 max-w-sm">Support for YouTube, Twitter (X), Discord, Twitch, TikTok, Instagram, and more. Require multiple actions for a single unlock.</p>
<div className="grid grid-cols-2 gap-3">
<div className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/5">
<iconify-icon className="text-red-500" icon="lucide:youtube"></iconify-icon>
<span className="text-xs text-white">Subscribe</span>
</div>
<div className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/5">
<iconify-icon className="text-blue-400" icon="lucide:twitter"></iconify-icon>
<span className="text-xs text-white">Follow</span>
</div>
<div className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/5">
<iconify-icon className="text-indigo-400" icon="lucide:message-circle"></iconify-icon>
<span className="text-xs text-white">Join Server</span>
</div>
<div className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/5">
<iconify-icon className="text-pink-500" icon="lucide:heart"></iconify-icon>
<span className="text-xs text-white">Like Post</span>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-6 md:col-span-1 lg:col-span-2 relative overflow-hidden group">
<div className="flex items-start justify-between mb-4">
<div>
<h3 className="text-lg font-medium text-white">Real-time Analytics</h3>
<p className="text-xs text-slate-400 mt-1">Track clicks, conversions, and CTR.</p>
</div>
<div className="text-emerald-400">
<iconify-icon icon="lucide:bar-chart-2" width="20"></iconify-icon>
</div>
</div>

<div className="flex items-end gap-1 h-24 mt-4 opacity-80">
<div className="w-full bg-emerald-500/20 rounded-t-sm h-[40%] group-hover:h-[50%] transition-all duration-500"></div>
<div className="w-full bg-emerald-500/30 rounded-t-sm h-[60%] group-hover:h-[70%] transition-all duration-500 delay-75"></div>
<div className="w-full bg-emerald-500/40 rounded-t-sm h-[30%] group-hover:h-[45%] transition-all duration-500 delay-100"></div>
<div className="w-full bg-emerald-500/50 rounded-t-sm h-[80%] group-hover:h-[90%] transition-all duration-500 delay-150"></div>
<div className="w-full bg-emerald-500/60 rounded-t-sm h-[65%] group-hover:h-[75%] transition-all duration-500 delay-200"></div>
</div>
</div>

<div className="glass-card rounded-2xl p-6 md:col-span-1 lg:col-span-1 relative">
<div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4 text-cyan-400">
<iconify-icon icon="lucide:palette" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Branded Pages</h3>
<p className="text-xs text-slate-400">Custom backgrounds, logos, and dark/light modes to match your brand identity perfectly.</p>
</div>

<div className="glass-card rounded-2xl p-6 md:col-span-1 lg:col-span-1 relative">
<div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center mb-4 text-amber-400">
<iconify-icon icon="lucide:coins" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Monetization</h3>
<p className="text-xs text-slate-400">Integrate with Linkvertise or LootLabs to earn revenue from every click while you grow.</p>
</div>

<div className="glass-card rounded-2xl p-6 md:col-span-2 lg:col-span-2 flex items-center gap-6">
<div className="flex-1">
<h3 className="text-lg font-medium text-white mb-2">Anti-Bot Protection</h3>
<p className="text-sm text-slate-400">Smart verification systems ensure that your growth comes from real humans, not bots. Protect your community integrity.</p>
</div>
<div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 shrink-0">
<iconify-icon className="text-emerald-400" icon="lucide:shield-check" width="32"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-[#080808]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
<div className="md:w-1/2">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Why creators choose LinkUnlocker</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
<iconify-icon icon="lucide:check" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Lightning Fast</h4>
<p className="text-sm text-slate-400">Pages load instantly. Create a link in under 2 minutes.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
<iconify-icon icon="lucide:check" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Organic Growth</h4>
<p className="text-sm text-slate-400">Convert passive viewers into active community members.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
<iconify-icon icon="lucide:check" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Data Privacy</h4>
<p className="text-sm text-slate-400">We respect your data and your audience's privacy. GDPR compliant.</p>
</div>
</div>
</div>
</div>
<div className="md:w-1/2 relative">

<div className="w-full aspect-square max-w-sm mx-auto relative">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
<div className="relative glass-card w-full h-full rounded-2xl border border-white/10 flex items-center justify-center p-8">
<div className="text-center">
<div className="text-5xl font-bold text-white mb-2">3x</div>
<p className="text-slate-400">Faster Audience Growth</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-emerald-950/20 to-[#0A0A0A]"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6">Realize your vision</h2>
<p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
                Start creating engaging unlock pages like never before. Turn your content into growth opportunities today.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-full gradient-bg text-black font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto">
                    Get started for free
                </button>
</div>
<p className="mt-6 text-xs text-slate-500">No credit card required · Cancel anytime</p>
</div>
</section>

<footer className="border-t border-white/5 bg-[#050505] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-white font-semibold tracking-tighter text-lg flex items-center gap-2 mb-4" href="#">
<div className="w-5 h-5 rounded bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-black text-[10px] font-bold">L</div>
                        LinkUnlocker
                    </a>
<p className="text-xs text-slate-500 leading-relaxed">
                        The ultimate tool for creators to monetize content and grow their social presence organically.
                    </p>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Social Unlock Tool</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Community</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Help Center</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Impressum</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-600">© 2023 LinkUnlocker. All rights reserved.</p>
<div className="flex items-center gap-4 text-slate-500">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:github" width="18"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:youtube" width="18"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:disc" width="18"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
