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
},
colors: {
neutral: {
925: '#0a0a0a',
950: '#050505',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter text-white flex items-center gap-2" href="#">
<div className="h-6 w-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs text-white">L</div>
                LUMINA
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors">
                    Login
                </button>
<a className="bg-white text-neutral-950 px-4 py-2 rounded-full text-xs font-medium hover:bg-neutral-200 transition-colors active:scale-95 transform duration-100" href="mailto:ai716027@gmail.com">
                    Book a call
                </a>
<button className="md:hidden text-neutral-400">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden grid-bg">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
<div className="relative mx-auto max-w-7xl px-6 text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-indigo-300 backdrop-blur-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
                Accepting new projects for Q4
            </div>
<h1 className="mx-auto max-w-4xl text-5xl md:text-7xl font-medium tracking-tight text-white mb-6">
                Visual narratives for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-white">digital pioneers.</span>
</h1>
<p className="mx-auto max-w-2xl text-lg text-neutral-400 font-light mb-10 leading-relaxed">
                We transform raw footage and ideas into high-converting visual assets. 
                Premium video editing and graphic design tailored for modern brands.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="h-10 px-6 rounded-full bg-white text-neutral-950 text-sm font-medium hover:bg-neutral-200 transition-all flex items-center justify-center gap-2" href="mailto:ai716027@gmail.com">
                    Start a project
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="h-10 px-6 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-all flex items-center gap-2" href="#work">
<span className="iconify" data-icon="lucide:play-circle" data-width="16"></span>
                    View showreel
                </a>
</div>
</div>

<div className="mt-20 mx-auto max-w-5xl px-6">
<div className="relative rounded-xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm p-2 shadow-2xl shadow-indigo-500/10">
<div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

<div className="rounded-lg bg-neutral-950 border border-white/5 overflow-hidden">

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-4">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="h-4 w-px bg-white/10"></div>
<div className="flex gap-4 text-xs text-neutral-500">
<span className="text-white">Assembly</span>
<span>Color</span>
<span>Effects</span>
<span>Audio</span>
</div>
</div>

<div className="flex h-64 md:h-96">

<div className="flex-1 bg-neutral-900 flex items-center justify-center relative border-r border-white/5 group overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700"></div>
<button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white z-10 hover:bg-white/20 transition-all">
<span className="iconify ml-1" data-icon="lucide:play" data-width="20"></span>
</button>
<div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-white/60 font-mono">
<span>00:04:23:12</span>
<span>4K RAW</span>
</div>
</div>

<div className="w-64 bg-neutral-925 p-4 hidden md:flex flex-col gap-4">
<div className="space-y-2">
<div className="flex justify-between text-xs text-neutral-400">
<span>Exposure</span>
<span>+0.5</span>
</div>
<div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-[60%] bg-indigo-500"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs text-neutral-400">
<span>Contrast</span>
<span>+1.2</span>
</div>
<div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-[75%] bg-indigo-500"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs text-neutral-400">
<span>Saturation</span>
<span>-0.2</span>
</div>
<div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-[40%] bg-indigo-500"></div>
</div>
</div>

<div className="mt-auto space-y-2">
<div className="h-8 rounded bg-indigo-500/10 border border-indigo-500/20 flex items-center px-2 gap-2">
<span className="iconify text-indigo-400" data-icon="lucide:type" data-width="12"></span>
<span className="text-xs text-indigo-200">Main Title</span>
</div>
<div className="h-8 rounded bg-purple-500/10 border border-purple-500/20 flex items-center px-2 gap-2">
<span className="iconify text-purple-400" data-icon="lucide:video" data-width="12"></span>
<span className="text-xs text-purple-200">B-Roll Sequence</span>
</div>
</div>
</div>
</div>

<div className="h-32 bg-neutral-925 border-t border-white/5 p-2 flex flex-col gap-1 relative overflow-hidden">
<div className="flex h-6 gap-1">
<div className="w-12 bg-neutral-800 rounded-sm flex items-center justify-center text-[10px] text-neutral-500">V1</div>
<div className="w-24 bg-blue-900/40 border border-blue-500/30 rounded-sm"></div>
<div className="w-48 bg-blue-900/40 border border-blue-500/30 rounded-sm"></div>
<div className="w-16 bg-blue-900/40 border border-blue-500/30 rounded-sm"></div>
</div>
<div className="flex h-6 gap-1">
<div className="w-12 bg-neutral-800 rounded-sm flex items-center justify-center text-[10px] text-neutral-500">A1</div>
<div className="w-96 bg-green-900/40 border border-green-500/30 rounded-sm"></div>
</div>

<div className="absolute top-0 bottom-0 left-1/3 w-px bg-red-500 z-10">
<div className="absolute -top-0 -left-1.5 w-3 h-3 bg-red-500 transform rotate-45"></div>
</div>
</div>
</div>
</div>

<div className="mt-16 text-center">
<p className="text-xs font-medium text-neutral-500 mb-6 tracking-wide uppercase">Powered by industry standard tools</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:video" data-width="20"></span>
<span className="font-semibold tracking-tight">Premiere</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
<span className="font-semibold tracking-tight">After Effects</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:figma" data-width="20"></span>
<span className="font-semibold tracking-tight">Figma</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:image" data-width="20"></span>
<span className="font-semibold tracking-tight">Photoshop</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-925" id="services">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-12 md:mb-20">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Crafted for impact</h2>
<p className="text-neutral-400 max-w-xl">We cover every aspect of post-production and visual identity.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/30 p-8 hover:border-white/20 hover:bg-neutral-900/50 transition-all duration-300">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<span className="iconify text-indigo-500" data-icon="lucide:clapperboard" data-width="120"></span>
</div>
<div className="relative z-10">
<div className="h-10 w-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 mb-6">
<span className="iconify text-indigo-400" data-icon="lucide:scissors" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Video Editing</h3>
<p className="text-sm text-neutral-400 max-w-sm mb-6 leading-relaxed">
                            From short-form reels to long-form documentaries. We handle assembly, color grading, sound design, and pacing to keep your audience hooked.
                        </p>
<ul className="grid grid-cols-2 gap-2 text-sm text-neutral-500">
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-indigo-500"></span>YouTube Content</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-indigo-500"></span>Social Ads</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-indigo-500"></span>Corporate</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-indigo-500"></span>Documentary</li>
</ul>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/30 p-8 hover:border-white/20 hover:bg-neutral-900/50 transition-all duration-300">
<div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20 mb-6">
<span className="iconify text-purple-400" data-icon="lucide:pen-tool" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Graphic Design</h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                        Thumbnails that click, branding that sticks. High-fidelity assets for your digital presence.
                    </p>
<div className="mt-8 space-y-3">
<div className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/5 text-xs">
<span>Thumbnails</span>
<span className="iconify text-neutral-500" data-icon="lucide:image" data-width="14"></span>
</div>
<div className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/5 text-xs">
<span>Brand Kits</span>
<span className="iconify text-neutral-500" data-icon="lucide:palette" data-width="14"></span>
</div>
<div className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/5 text-xs">
<span>Social Assets</span>
<span className="iconify text-neutral-500" data-icon="lucide:share-2" data-width="14"></span>
</div>
</div>
</div>

<div className="md:col-span-3 group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/30 p-8 hover:border-white/20 hover:bg-neutral-900/50 transition-all duration-300 flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<div className="h-10 w-10 rounded-lg bg-pink-500/10 flex items-center justify-center border border-pink-500/20 mb-6">
<span className="iconify text-pink-400" data-icon="lucide:zap" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Motion Graphics</h3>
<p className="text-sm text-neutral-400 max-w-xl leading-relaxed">
                            Add polish to your videos with custom animations, lower thirds, and kinetic typography. We breathe life into static assets.
                        </p>
</div>
<div className="w-full md:w-1/3 h-24 rounded-lg bg-neutral-950 border border-white/10 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
<div className="flex gap-1 items-end h-12">
<div className="w-2 bg-pink-500 rounded-t h-4 animate-[bounce_1s_infinite]"></div>
<div className="w-2 bg-pink-500 rounded-t h-8 animate-[bounce_1.2s_infinite]"></div>
<div className="w-2 bg-pink-500 rounded-t h-6 animate-[bounce_0.8s_infinite]"></div>
<div className="w-2 bg-pink-500 rounded-t h-10 animate-[bounce_1.1s_infinite]"></div>
<div className="w-2 bg-pink-500 rounded-t h-5 animate-[bounce_0.9s_infinite]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950" id="work">
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Selected Work</h2>
<p className="text-neutral-400 text-sm">A curation of our recent edits and designs.</p>
</div>
<button className="text-sm text-white flex items-center gap-2 hover:gap-3 transition-all">
                    View full portfolio <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>

<div className="mb-16 rounded-2xl border border-white/10 bg-neutral-900/30 p-2 md:p-3 backdrop-blur-sm shadow-2xl shadow-black/50">
<div className="relative aspect-video rounded-xl overflow-hidden bg-neutral-950 border border-white/5">

<video className="w-full h-full object-cover" controls="" poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80" preload="metadata">

<source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
</div>
<div className="mt-4 px-2 md:px-4 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h3 className="text-lg font-medium tracking-tight text-white flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            Featured Showreel
                        </h3>
<p className="text-sm text-neutral-400 mt-1">High-performance editing &amp; visual effects reference.</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-neutral-300 border border-white/10">4K REC.709</span>
<span className="inline-flex items-center rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-neutral-300 border border-white/10">Stereo</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group cursor-pointer">
<div className="relative aspect-video rounded-xl bg-neutral-900 border border-white/10 overflow-hidden mb-4">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 group-hover:scale-105 transition-transform duration-500"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-30">
<div className="w-24 h-24 rounded-full bg-blue-500 blur-2xl"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
<span className="iconify text-white" data-icon="lucide:play-circle" data-width="48"></span>
</div>
</div>
<h3 className="text-base font-medium text-white">Tech Review Series</h3>
<p className="text-xs text-neutral-500 mt-1">Video Edit • Motion Graphics</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video rounded-xl bg-neutral-900 border border-white/10 overflow-hidden mb-4">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30">
<div className="w-24 h-24 rounded-full bg-purple-500 blur-2xl"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
<span className="iconify text-white" data-icon="lucide:play-circle" data-width="48"></span>
</div>
</div>
<h3 className="text-base font-medium text-white">Lifestyle Vlog 04</h3>
<p className="text-xs text-neutral-500 mt-1">Color Grading • Sound Design</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video rounded-xl bg-neutral-900 border border-white/10 overflow-hidden mb-4">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30">
<div className="w-24 h-24 rounded-full bg-orange-500 blur-2xl"></div>
</div>

<div className="absolute top-4 right-4 bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded shadow">THUMBNAIL</div>
</div>
<h3 className="text-base font-medium text-white">Crypto Dashboard UI</h3>
<p className="text-xs text-neutral-500 mt-1">Graphic Design • Branding</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-925 relative overflow-hidden" id="pricing">
<div className="mx-auto max-w-7xl px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Simple, transparent pricing</h2>
<p className="text-neutral-400">Choose the model that fits your workflow.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-8 flex flex-col hover:border-white/20 transition-colors">
<div className="mb-4">
<span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Per Project</span>
</div>
<div className="mb-6">
<span className="text-3xl font-medium text-white">Custom</span>
<span className="text-neutral-500">/ scope</span>
</div>
<p className="text-sm text-neutral-400 mb-8 flex-1">Perfect for one-off videos, ad campaigns, or specific design assets. We quote based on complexity.</p>
<ul className="space-y-3 mb-8 text-sm text-neutral-300">
<li className="flex items-center gap-3"><span className="iconify text-white" data-icon="lucide:check" data-width="14"></span> Fixed scope &amp; timeline</li>
<li className="flex items-center gap-3"><span className="iconify text-white" data-icon="lucide:check" data-width="14"></span> 2 rounds of revisions</li>
<li className="flex items-center gap-3"><span className="iconify text-white" data-icon="lucide:check" data-width="14"></span> Fast turnaround</li>
</ul>
<a className="block w-full text-center py-3 rounded-lg border border-white/10 text-white text-sm font-medium hover:bg-white hover:text-black transition-colors" href="mailto:ai716027@gmail.com">
                        Get a quote
                    </a>
</div>

<div className="relative rounded-2xl border border-indigo-500/30 bg-neutral-900/60 p-8 flex flex-col shadow-2xl shadow-indigo-500/5">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wide">MOST POPULAR</div>
<div className="mb-4">
<span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">Monthly Retainer</span>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-3xl font-medium text-white">$2,499</span>
<span className="text-neutral-500">/ mo</span>
</div>
<p className="text-sm text-neutral-400 mb-8 flex-1">For creators and brands needing consistent output. Acts as your dedicated post-production team.</p>
<ul className="space-y-3 mb-8 text-sm text-neutral-300">
<li className="flex items-center gap-3"><span className="iconify text-indigo-400" data-icon="lucide:check" data-width="14"></span> Unlimited requests (one at a time)</li>
<li className="flex items-center gap-3"><span className="iconify text-indigo-400" data-icon="lucide:check" data-width="14"></span> Slack channel access</li>
<li className="flex items-center gap-3"><span className="iconify text-indigo-400" data-icon="lucide:check" data-width="14"></span> Source files included</li>
<li className="flex items-center gap-3"><span className="iconify text-indigo-400" data-icon="lucide:check" data-width="14"></span> Priority support</li>
</ul>
<a className="block w-full text-center py-3 rounded-lg bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors shadow-lg shadow-white/5" href="mailto:ai716027@gmail.com">
                        Start subscription
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950">
<div className="mx-auto max-w-3xl px-6">
<h2 className="text-2xl font-medium tracking-tight text-white mb-8">Questions?</h2>
<div className="space-y-4">
<details className="group rounded-lg bg-neutral-900/30 border border-white/5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-neutral-200">
<span className="text-sm font-medium">What software do you use?</span>
<span className="iconify group-open:-rotate-180 transition-transform text-neutral-500" data-icon="lucide:chevron-down" data-width="16"></span>
</summary>
<p className="mt-2 px-4 pb-4 text-sm leading-relaxed text-neutral-400">
                         We primarily use the Adobe Creative Cloud suite (Premiere Pro, After Effects, Photoshop, Illustrator) and Figma for web/UI graphics.
                     </p>
</details>
<details className="group rounded-lg bg-neutral-900/30 border border-white/5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-neutral-200">
<span className="text-sm font-medium">How do I send you files?</span>
<span className="iconify group-open:-rotate-180 transition-transform text-neutral-500" data-icon="lucide:chevron-down" data-width="16"></span>
</summary>
<p className="mt-2 px-4 pb-4 text-sm leading-relaxed text-neutral-400">
                         We use Google Drive or Frame.io for large video files to ensure swift uploads and easy timestamped feedback.
                     </p>
</details>
<details className="group rounded-lg bg-neutral-900/30 border border-white/5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-neutral-200">
<span className="text-sm font-medium">What is the turnaround time?</span>
<span className="iconify group-open:-rotate-180 transition-transform text-neutral-500" data-icon="lucide:chevron-down" data-width="16"></span>
</summary>
<p className="mt-2 px-4 pb-4 text-sm leading-relaxed text-neutral-400">
                         Simple edits are returned within 24-48 hours. Complex projects with motion graphics typically take 3-5 business days.
                     </p>
</details>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-neutral-950 pt-16 pb-8">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-medium tracking-tighter text-white flex items-center gap-2 mb-4" href="#">
<div className="h-6 w-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs text-white">L</div>
                        LUMINA
                    </a>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Design and motion agency <br/>
                        based in the cloud.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4">Sitemap</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#work">Work</a></li>
<li><a className="hover:text-white transition-colors" href="#pricing">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4">Socials</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Twitter / X</a></li>
<li><a className="hover:text-white transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-white transition-colors" href="#">LinkedIn</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4">Contact</h4>
<ul className="space-y-3 text-xs text-neutral-500">
<li>
<a className="hover:text-white transition-colors flex items-center gap-2" href="mailto:ai716027@gmail.com">
<span className="iconify" data-icon="lucide:mail" data-width="14"></span>
                                ai716027@gmail.com
                            </a>
</li>
<li>
<a className="hover:text-white transition-colors flex items-center gap-2" href="tel:+919568787307">
<span className="iconify" data-icon="lucide:phone" data-width="14"></span>
                                +91 9568787307
                            </a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
<div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
<p className="text-[10px] text-neutral-600">© 2024 Lumina Agency. All rights reserved.</p>
<div className="flex gap-4 text-[10px] text-neutral-600">
<a className="hover:text-neutral-400" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400" href="#">Terms of Service</a>
</div>
</div>
<div className="flex items-center gap-4 mt-4 md:mt-0">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-[10px] text-neutral-500">All systems operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
