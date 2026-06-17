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
heading: ['Space Grotesk', 'sans-serif'],
mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
},
colors: {
neon: '#8A2BE2',      // Neon Violet
azure: '#3A86FF',     // Electric Azure
obsidian: '#05050A',  // Background
slate: '#101018',     // Surface
success: '#00D37F',   // Diagnostic Green
muted: '#6B7280',
light: '#F2F2F5',
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #101018 1px, transparent 1px), linear-gradient(to bottom, #101018 1px, transparent 1px)",
},
animation: {
'scan': 'scan 4s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
scan: {
'0%, 100%': { top: '0%', opacity: '0.8' },
'50%': { top: '100%', opacity: '0.8' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        lucide.createIcons();
    
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
<div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-neon opacity-[0.08] blur-[120px] rounded-full"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 glass">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<img alt="GlowAudit" className="h-8 w-auto opacity-90 group-hover:opacity-100 transition-opacity" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="hidden flex items-center gap-2">
<div className="w-8 h-8 bg-neon/20 rounded border border-neon/50 flex items-center justify-center">
<i className="w-5 h-5 text-neon" data-lucide="scan-face"></i>
</div>
<span className="font-heading font-medium text-lg tracking-tight text-white">GlowAudit</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
<a className="hover:text-white transition-colors" href="#features">Diagnostic</a>
<a className="hover:text-white transition-colors" href="#how-it-works">Protocol</a>
<a className="hover:text-white transition-colors" href="#pricing">Access</a>
</div>

<div className="flex items-center gap-4">
<a className="text-sm font-medium text-muted hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="bg-white text-black px-4 py-2 rounded text-xs font-semibold tracking-tight hover:bg-gray-200 transition-all flex items-center gap-2" href="#">
<span>Start Scan</span>
<i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="flex-1 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-azure/10 border border-azure/20 text-azure text-xs font-mono mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-azure opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-azure"></span>
</span>
                        SYSTEM ONLINE v2.4
                    </div>
<h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-6 text-white">
                        Data-driven <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-azure text-glow">aesthetic audit.</span>
</h1>
<p className="text-muted text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10 font-light">
                        Not another cute beauty filter. GlowAudit uses computer vision to brutally analyze your outfits and grooming, providing actionable, data-backed reconstruction plans.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<a className="w-full sm:w-auto bg-neon text-white h-12 px-8 rounded-lg flex items-center justify-center gap-2 font-medium tracking-tight transition-all btn-glow hover:-translate-y-0.5" href="#">
<i className="w-4 h-4" data-lucide="upload-cloud"></i>
                            Upload Photo
                        </a>
<a className="w-full sm:w-auto bg-slate border border-white/10 h-12 px-8 rounded-lg flex items-center justify-center gap-2 font-medium text-muted hover:text-white hover:border-white/20 transition-all" href="#demo">
                            View Sample Report
                        </a>
</div>
<div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-muted text-xs font-mono">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-success" data-lucide="check-circle-2"></i>
<span>98.4% ACCURACY</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-muted" data-lucide="shield-check"></i>
<span>AES-256 ENCRYPTED</span>
</div>
</div>
</div>

<div className="flex-1 w-full max-w-md lg:max-w-full relative group">

<div className="absolute -inset-0.5 bg-gradient-to-b from-neon to-azure rounded-xl opacity-20 blur group-hover:opacity-40 transition duration-1000 animate-pulse-slow"></div>
<div className="relative bg-black/90 border border-white/10 rounded-xl overflow-hidden shadow-2xl">

<div className="h-10 border-b border-white/5 bg-black/40 flex items-center px-4 justify-between relative z-20 backdrop-blur-md">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse"></div>
<div className="text-[10px] font-mono text-neon/80">LIVE_FEED // SCANNING</div>
</div>
</div>

<div className="relative h-[450px] bg-black w-full overflow-hidden group-hover:shadow-[inset_0_0_100px_rgba(138,43,226,0.1)] transition-all duration-500">

<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-70 holo-filter scale-105" loop="" muted="" playsinline="">
<source src="https://assets.mixkit.co/videos/preview/mixkit-artificial-intelligence-scanning-a-human-face-42934-large.mp4" type="video/mp4"/>

<img className="w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</video>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxIiBmaWxsPSJyZ2JhKDEzOCwgNDMsIDIyNiwgMC4yKSIvPjwvc3ZnPg==')] opacity-20 animate-float"></div>

<div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon to-transparent shadow-[0_0_20px_rgba(138,43,226,0.8)] z-20 animate-scan"></div>

<div className="absolute inset-0 z-10 opacity-60 pointer-events-none">
<div className="absolute top-[30%] left-[45%] w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]"></div>
<div className="absolute top-[35%] left-[52%] w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]"></div>
<div className="absolute top-[45%] left-[40%] w-1 h-1 bg-azure rounded-full"></div>
<div className="absolute top-[48%] left-[60%] w-1 h-1 bg-neon rounded-full"></div>
<div className="absolute bottom-[40%] right-[35%] w-1.5 h-1.5 border border-white/50 rounded-full"></div>
</div>

<div className="absolute inset-0 p-6 flex flex-col justify-between z-30">

<div className="flex justify-between items-start">
<div className="flex flex-col gap-1">
<div className="bg-black/60 backdrop-blur border border-neon/30 text-neon text-[10px] font-mono px-2 py-1 rounded flex items-center gap-2">
<i className="w-3 h-3" data-lucide="scan"></i> BIOMETRIC LOCK
                                        </div>
<div className="bg-black/60 backdrop-blur border border-white/10 text-white/70 text-[10px] font-mono px-2 py-1 rounded w-fit">
                                            MESH: 34,092 POLYS
                                        </div>
</div>
<div className="bg-black/60 backdrop-blur border border-azure/30 text-azure text-[10px] font-mono px-2 py-1 rounded animate-pulse">
                                        REC ●
                                    </div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 border border-white/10 rounded-[30px] flex flex-col justify-between p-2">
<div className="flex justify-between w-full">
<div className="w-2 h-2 border-t border-l border-neon"></div>
<div className="w-2 h-2 border-t border-r border-neon"></div>
</div>
<div className="flex justify-between w-full">
<div className="w-2 h-2 border-b border-l border-neon"></div>
<div className="w-2 h-2 border-b border-r border-neon"></div>
</div>
</div>

<div className="glass rounded p-3 border border-white/10 bg-black/40">
<div className="flex justify-between items-end mb-2">
<div className="flex flex-col">
<span className="text-[10px] text-muted font-medium uppercase tracking-wider">Processing Topology</span>
<span className="text-xs text-white font-mono">Constructing 3D Wireframe...</span>
</div>
<span className="text-xs text-neon font-mono">89%</span>
</div>
<div className="h-0.5 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-neon to-azure w-[89%] rounded-full shadow-[0_0_10px_#8A2BE2]"></div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(138,43,226,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(138,43,226,0.05)_1px,transparent_1px)] bg-[size:20px_20px] z-10 mix-blend-overlay pointer-events-none"></div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 relative" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="font-heading text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">Diagnostic Protocol</h2>
<p className="text-muted max-w-xl">Three-step computational analysis to optimize your visual presentation.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-slate border border-white/5 rounded-xl p-8 hover:border-neon/30 transition-colors duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-24 h-24 text-neon" data-lucide="scan-line"></i>
</div>
<div className="w-12 h-12 bg-neon/10 rounded-lg flex items-center justify-center mb-6 text-neon border border-neon/20">
<i className="w-6 h-6" data-lucide="camera"></i>
</div>
<h3 className="text-xl font-heading font-medium text-white mb-3">1. Input</h3>
<p className="text-muted text-sm leading-relaxed">
                        Upload a full-body image. Our system normalizes lighting and creates a 3D mesh of your outfit and physique features.
                    </p>
</div>

<div className="group bg-slate border border-white/5 rounded-xl p-8 hover:border-azure/30 transition-colors duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-24 h-24 text-azure" data-lucide="cpu"></i>
</div>
<div className="w-12 h-12 bg-azure/10 rounded-lg flex items-center justify-center mb-6 text-azure border border-azure/20">
<i className="w-6 h-6" data-lucide="activity"></i>
</div>
<h3 className="text-xl font-heading font-medium text-white mb-3">2. Audit</h3>
<p className="text-muted text-sm leading-relaxed">
                        AI compares your look against 14M+ data points of current fashion trends, color theory, and aesthetic proportions.
                    </p>
</div>

<div className="group bg-slate border border-white/5 rounded-xl p-8 hover:border-success/30 transition-colors duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-24 h-24 text-success" data-lucide="file-check"></i>
</div>
<div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-6 text-success border border-success/20">
<i className="w-6 h-6" data-lucide="arrow-up-circle"></i>
</div>
<h3 className="text-xl font-heading font-medium text-white mb-3">3. Optimize</h3>
<p className="text-muted text-sm leading-relaxed">
                        Receive a blunt, scored report with direct links to items that fix your gaps. No fluff, just correction.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black/30 border-y border-white/5" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1 space-y-8">
<h2 className="font-heading text-3xl md:text-4xl font-medium text-white tracking-tight">
                        Precision Metrics.<br/>
<span className="text-muted">Zero sugarcoating.</span>
</h2>

<div className="space-y-6">
<div className="flex gap-4 items-start">
<div className="mt-1">
<div className="w-5 h-5 rounded-full bg-neon/20 flex items-center justify-center">
<div className="w-2 h-2 bg-neon rounded-full"></div>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-1">Color Theory Analysis</h4>
<p className="text-muted text-sm">We detect clashing palettes and suggest tones that actually match your skin undertone.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1">
<div className="w-5 h-5 rounded-full bg-azure/20 flex items-center justify-center">
<div className="w-2 h-2 bg-azure rounded-full"></div>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-1">Fit &amp; Silhouette Scoring</h4>
<p className="text-muted text-sm">Baggy jeans killing your height? We'll tell you exactly where to tailor your garments.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1">
<div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
<div className="w-2 h-2 bg-success rounded-full"></div>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-1">Grooming Recommendations</h4>
<p className="text-muted text-sm">Haircut shape, facial hair density, and skincare suggestions based on face geometry.</p>
</div>
</div>
</div>
</div>

<div className="flex-1 w-full">
<div className="bg-slate border border-white/10 rounded-2xl p-6 relative">
<div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
<img className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<div className="text-white font-medium text-sm">Subject #0821</div>
<div className="text-[10px] text-muted font-mono">ID: GA-882-X</div>
</div>
</div>
<div className="text-right">
<div className="text-[10px] text-muted font-mono uppercase">Total Score</div>
<div className="text-2xl font-heading text-neon">6.8<span className="text-sm text-muted">/10</span></div>
</div>
</div>

<div className="space-y-4 mb-6">
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-white">Color Coordination</span>
<span className="text-neon font-mono">82/100</span>
</div>
<div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-neon w-[82%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-white">Fit / Tailoring</span>
<span className="text-red-400 font-mono">45/100</span>
</div>
<div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-red-400 w-[45%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-white">Modernity</span>
<span className="text-azure font-mono">70/100</span>
</div>
<div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-azure w-[70%]"></div>
</div>
</div>
</div>

<div className="bg-black/40 rounded border border-white/5 p-4">
<div className="flex items-center gap-2 mb-2 text-xs text-muted uppercase font-bold tracking-wider">
<i className="w-3 h-3 text-red-400" data-lucide="alert-circle"></i>
                                Critical Fix
                            </div>
<p className="text-sm text-white leading-snug">
                                Pants break is too low for this shoe type. Hem trousers by 1.5 inches to avoid "stacking". Consider a tapered cut to balance the oversized hoodie.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="pricing">
<div className="absolute inset-0 bg-neon/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<h2 className="font-heading text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">Ready for the truth?</h2>
<p className="text-muted mb-10 max-w-lg mx-auto">Join 10,000+ users who upgraded their aesthetic. Upload your first photo for a preliminary scan.</p>
<button className="group relative inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-lg font-semibold tracking-tight transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-black">
<span className="flex items-center gap-2">
                    Audit My Look
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</span>
<div className="absolute -inset-3 rounded-xl bg-gradient-to-r from-neon to-azure opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500"></div>
</button>
<p className="mt-6 text-xs text-muted">
                No credit card required for initial scan. <br className="sm:hidden"/>Results generated in &lt;30 seconds.
            </p>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-neon/20 rounded border border-neon/50 flex items-center justify-center">
<span className="text-xs font-bold text-neon">G</span>
</div>
<span className="font-heading font-medium text-white">GlowAudit</span>
</div>
<div className="flex gap-8 text-sm text-muted">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</div>
<div className="text-xs text-muted font-mono">
                © 2024 GLOWAUDIT AI INC.
            </div>
</div>
</footer>



    </>
  );
}
