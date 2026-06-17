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
ashii: {
base: '#0a0e27',
surface: '#16213e',
surface2: '#2d2d44',
cyan: '#00e5ff',
magenta: '#ff006e',
purple: '#8e44ad',
gold: '#ffd700'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Poppins', 'sans-serif'],
mono: ['Roboto Mono', 'monospace'],
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #00e5ff 0deg, #ff006e 180deg, #8e44ad 360deg)',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-slow': 'spin 8s linear infinite',
'border-flow': 'borderFlow 3s ease infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
borderFlow: {
'0%, 100%': { backgroundPosition: '0% 50%' },
'50%': { backgroundPosition: '100% 50%' },
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const container = document.getElementById('compare-slider');
            const resizer = container.querySelector('.resizer');
            const imgContainer = container.querySelector('.comparison-image-container');
            
            let active = false;

            // Initial Position
            imgContainer.style.width = '50%';
            resizer.style.left = '50%';

            // Mouse Events
            container.addEventListener('mousedown', () => active = true);
            document.addEventListener('mouseup', () => active = false);
            container.addEventListener('mousemove', (e) => {
                if (!active) return;
                let x = e.pageX - container.getBoundingClientRect().left;
                slide(x);
            });

            // Touch Events
            container.addEventListener('touchstart', () => active = true);
            document.addEventListener('touchend', () => active = false);
            container.addEventListener('touchmove', (e) => {
                if (!active) return;
                let x = e.touches[0].pageX - container.getBoundingClientRect().left;
                slide(x);
            });

            function slide(x) {
                let transform = Math.max(0, (Math.min(x, container.offsetWidth)));
                imgContainer.style.width = transform + "px";
                resizer.style.left = transform + "px";
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
      

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-1/3 h-1/3 rounded-full bg-ashii-purple opacity-20 blur-[120px] animate-pulse-slow"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-1/3 h-1/3 rounded-full bg-ashii-cyan opacity-10 blur-[120px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
<div className="absolute top-[20%] right-[20%] w-64 h-64 rounded-full bg-ashii-magenta opacity-10 blur-[80px] animate-float"></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '50px 50px', maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 glass h-[70px] transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">

<div className="flex items-center gap-2 group cursor-pointer">
<div className="relative w-8 h-8 flex items-center justify-center bg-gradient-to-br from-ashii-cyan to-ashii-magenta rounded-lg shadow-lg shadow-ashii-cyan/20 group-hover:shadow-ashii-cyan/40 transition-all">
<iconify-icon className="text-white" icon="lucide:layers" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="group-hover:text-ashii-cyan transition-colors text-xl font-bold text-white tracking-tight font-display">Ashii Contructions</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group" href="#features">
                    Features
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-ashii-cyan to-ashii-magenta transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group" href="#how-it-works">
                    How it Works
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-ashii-cyan to-ashii-magenta transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group" href="#demo">
                    Demo
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-ashii-cyan to-ashii-magenta transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group" href="#pricing">
                    Pricing
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-ashii-cyan to-ashii-magenta transition-all duration-300 group-hover:w-full"></span>
</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full border border-ashii-cyan/50 text-ashii-cyan text-sm font-semibold hover:bg-ashii-cyan/10 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-300 group" href="#demo">
                    Try Free
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>

<button className="md:hidden text-white">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="space-y-8 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ashii-surface2/50 border border-ashii-cyan/30 text-xs font-mono text-ashii-cyan mb-2 backdrop-blur-sm animate-fade-in-up">
<span className="w-2 h-2 rounded-full bg-ashii-cyan animate-pulse"></span>
                        AI ARCHITECTURE V2.0 LIVE
                    </div>
<h1 className="font-display font-bold text-5xl lg:text-7xl leading-[1.1] tracking-tight text-white">
                        Transform Spaces with <br/>
<span className="text-gradient">AI Power</span>
</h1>
<p className="text-lg text-gray-400 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        Visualize different tile designs instantly before you buy. Upload a photo and let our neural engine remodel your room in seconds with photorealistic precision.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-ashii-base font-bold text-base hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.3)]" href="#demo">
                            Start Free Demo
                            <iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<button className="w-full sm:w-auto px-8 py-4 rounded-full border border-gray-600 text-white font-semibold text-base hover:border-ashii-magenta hover:text-ashii-magenta hover:bg-ashii-magenta/5 transition-all duration-300 flex items-center justify-center gap-2">
<iconify-icon icon="lucide:play-circle" strokeWidth="1.5" width="18"></iconify-icon>
                            Watch Showreel
                        </button>
</div>

<div className="pt-8 border-t border-gray-800/50 mt-8 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start opacity-70">
<span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Trusted by designers at</span>
<div className="flex gap-6 grayscale opacity-60 hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="lucide:hexagon" width="24"></iconify-icon>
<iconify-icon className="text-white" icon="lucide:triangle" width="24"></iconify-icon>
<iconify-icon className="text-white" icon="lucide:circle" width="24"></iconify-icon>
<iconify-icon className="text-white" icon="lucide:square" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="relative lg:h-[600px] w-full flex items-center justify-center perspective-1000">

<div className="absolute -left-4 top-20 z-20 glass-card p-4 rounded-xl animate-float" style={{animationDelay: '1s'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-ashii-cyan to-ashii-surface flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:wand-2" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-400">Generation Time</p>
<p className="text-sm font-bold text-white">0.8 Seconds</p>
</div>
</div>
</div>
<div className="absolute -right-4 bottom-32 z-20 glass-card p-4 rounded-xl animate-float" style={{animationDelay: '2.5s'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-ashii-magenta to-ashii-surface flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:palette" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-400">Material Match</p>
<p className="text-sm font-bold text-white">99.8% Accuracy</p>
</div>
</div>
</div>

<div className="gradient-border-wrapper w-full max-w-lg aspect-[4/5] lg:aspect-square relative shadow-2xl shadow-ashii-purple/20 transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700">
<div className="gradient-border-content overflow-hidden relative group">

<img alt="Before" className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-700" src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-ashii-cyan/20 to-transparent h-[10%] w-full animate-[scan_3s_linear_infinite]"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="flex justify-between items-end">
<div>
<p className="text-ashii-cyan text-xs font-mono mb-1">PROCESSED</p>
<h3 className="text-xl font-bold text-white">Modern Marble Bath</h3>
</div>
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-md">
<iconify-icon className="text-white" icon="lucide:arrow-right"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-ashii-base" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4 tracking-tight">Powerful <span className="text-gradient">AI-Driven Features</span></h2>
<p className="text-gray-400 max-w-2xl mx-auto">Engineered for interior designers and homeowners who demand perfection.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative hover:-translate-y-2 transition-transform duration-300">
<div className="absolute -inset-0.5 bg-gradient-to-r from-ashii-cyan to-ashii-purple rounded-xl opacity-20 group-hover:opacity-100 blur transition duration-300"></div>
<div className="relative bg-ashii-surface p-8 rounded-xl h-full border border-white/5">
<div className="w-12 h-12 rounded-lg bg-ashii-cyan/10 flex items-center justify-center mb-6 text-ashii-cyan group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Real-Time Generation</h3>
<p className="text-gray-400 text-sm leading-relaxed">Visualize changes instantly. Our optimized GPU clusters render photorealistic tiles in under a second.</p>
</div>
</div>

<div className="group relative hover:-translate-y-2 transition-transform duration-300">
<div className="absolute -inset-0.5 bg-gradient-to-r from-ashii-magenta to-ashii-purple rounded-xl opacity-20 group-hover:opacity-100 blur transition duration-300"></div>
<div className="relative bg-ashii-surface p-8 rounded-xl h-full border border-white/5">
<div className="w-12 h-12 rounded-lg bg-ashii-magenta/10 flex items-center justify-center mb-6 text-ashii-magenta group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:layers" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Multi-Material Library</h3>
<p className="text-gray-400 text-sm leading-relaxed">Access thousands of textures: Ceramic, Porcelain, Marble, Slate, and Glass from top global manufacturers.</p>
</div>
</div>

<div className="group relative hover:-translate-y-2 transition-transform duration-300">
<div className="absolute -inset-0.5 bg-gradient-to-r from-ashii-gold to-ashii-purple rounded-xl opacity-20 group-hover:opacity-100 blur transition duration-300"></div>
<div className="relative bg-ashii-surface p-8 rounded-xl h-full border border-white/5">
<div className="w-12 h-12 rounded-lg bg-ashii-gold/10 flex items-center justify-center mb-6 text-ashii-gold group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:layout-template" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Smart Layouts</h3>
<p className="text-gray-400 text-sm leading-relaxed">Switch between Herringbone, Grid, Subway, and French patterns with a single click. AI adjusts perspective automatically.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-ashii-surface/30" id="demo">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-ashii-cyan/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-12">
<span className="text-ashii-cyan font-mono text-xs tracking-widest uppercase mb-2 block">Interactive Demo</span>
<h2 className="font-display font-bold text-3xl md:text-4xl text-white">Experience the <span className="text-gradient">AI Studio</span></h2>
</div>

<div className="bg-[#0f1419] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden flex flex-col lg:flex-row h-auto lg:h-[800px]">

<div className="w-full lg:w-80 bg-[#16213e] border-b lg:border-b-0 lg:border-r border-gray-800 flex flex-col z-20">
<div className="p-6 border-b border-gray-800">
<h3 className="font-display font-semibold text-white flex items-center gap-2">
<iconify-icon className="text-ashii-cyan" icon="lucide:settings-2"></iconify-icon>
                            Configurator
                        </h3>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">

<div className="space-y-3">
<label className="text-xs font-mono text-gray-400 uppercase">Material</label>
<div className="grid grid-cols-2 gap-2">
<button className="px-3 py-2 bg-ashii-cyan/20 border border-ashii-cyan text-ashii-cyan rounded-lg text-xs font-medium transition-all">Marble</button>
<button className="px-3 py-2 bg-ashii-surface2 border border-transparent text-gray-400 hover:text-white rounded-lg text-xs font-medium transition-all">Ceramic</button>
<button className="px-3 py-2 bg-ashii-surface2 border border-transparent text-gray-400 hover:text-white rounded-lg text-xs font-medium transition-all">Wood</button>
<button className="px-3 py-2 bg-ashii-surface2 border border-transparent text-gray-400 hover:text-white rounded-lg text-xs font-medium transition-all">Slate</button>
</div>
</div>

<div className="space-y-3">
<label className="text-xs font-mono text-gray-400 uppercase">Tone</label>
<div className="flex flex-wrap gap-3">
<div className="w-8 h-8 rounded-full bg-white border-2 border-ashii-cyan cursor-pointer shadow-[0_0_10px_rgba(0,229,255,0.5)]"></div>
<div className="w-8 h-8 rounded-full bg-gray-400 border border-gray-600 cursor-pointer hover:border-white transition-colors"></div>
<div className="w-8 h-8 rounded-full bg-slate-800 border border-gray-600 cursor-pointer hover:border-white transition-colors"></div>
<div className="w-8 h-8 rounded-full bg-[#d4c5b0] border border-gray-600 cursor-pointer hover:border-white transition-colors"></div>
<div className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-gray-600 cursor-pointer hover:border-white transition-colors"></div>
</div>
</div>

<div className="space-y-6">
<div className="space-y-2">
<div className="flex justify-between text-xs text-gray-400">
<span>Grout Width</span>
<span>2mm</span>
</div>
<input max="100" min="0" type="range" value="20"/>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs text-gray-400">
<span>Reflection</span>
<span>Glossy</span>
</div>
<input max="100" min="0" type="range" value="75"/>
</div>
</div>

<div className="space-y-3">
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm text-gray-300">AI Lighting Correction</span>
<div className="relative">
<input checked="" className="sr-only custom-checkbox" type="checkbox"/>
<div className="w-10 h-6 bg-gray-700 rounded-full shadow-inner transition-colors"></div>
<div className="absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform transform translate-x-4"></div>
</div>
</label>
</div>
</div>
<div className="p-6 border-t border-gray-800 bg-[#0a0e27]">
<button className="w-full py-3 bg-gradient-to-r from-ashii-cyan to-ashii-magenta rounded-lg text-white font-bold text-sm shadow-lg shadow-ashii-magenta/20 hover:shadow-ashii-magenta/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
<iconify-icon icon="lucide:wand-2" width="16"></iconify-icon>
                            GENERATE VARIATION
                        </button>
</div>
</div>

<div className="flex-1 relative bg-black flex flex-col">

<div className="h-14 border-b border-gray-800 flex items-center justify-between px-6 bg-[#0a0e27]/80 backdrop-blur z-20">
<div className="flex items-center gap-4">
<button className="text-gray-400 hover:text-white transition-colors">
<iconify-icon icon="lucide:undo-2" width="18"></iconify-icon>
</button>
<button className="text-gray-400 hover:text-white transition-colors">
<iconify-icon icon="lucide:redo-2" width="18"></iconify-icon>
</button>
<div className="h-4 w-px bg-gray-700"></div>
<span className="text-xs text-gray-500 font-mono">Project_Bath_04.jpg</span>
</div>
<div className="flex items-center gap-3">
<button className="px-3 py-1 rounded border border-gray-700 text-xs text-gray-300 hover:bg-white/5 transition">Compare</button>
<button className="px-3 py-1 rounded border border-gray-700 text-xs text-gray-300 hover:bg-white/5 transition">Export</button>
</div>
</div>

<div className="flex-1 relative overflow-hidden group select-none" id="compare-slider">

<div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&amp'}}>
<div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur px-2 py-1 rounded text-xs font-mono text-ashii-cyan border border-ashii-cyan/30">AI GENERATED</div>
</div>

<div className="comparison-image-container w-1/2 bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&amp', width: '50%'}}>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-2 py-1 rounded text-xs font-mono text-gray-300 border border-white/10">ORIGINAL</div>
</div>

<div className="resizer left-1/2" style={{left: '50%'}}>
<iconify-icon className="text-white" icon="lucide:grip-vertical" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-ashii-base" id="how-it-works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-20">
<h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">Design in <span className="text-gradient">3 Simple Steps</span></h2>
</div>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-ashii-cyan via-ashii-magenta to-ashii-purple opacity-30 -translate-y-1/2 z-0"></div>
<div className="grid md:grid-cols-3 gap-12 relative z-10">

<div className="text-center">
<div className="w-20 h-20 mx-auto bg-[#0a0e27] rounded-full border-2 border-ashii-cyan flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,229,255,0.3)] relative group cursor-default transition-transform hover:scale-110">
<span className="font-display font-bold text-2xl text-white">1</span>
<div className="absolute inset-0 rounded-full border border-ashii-cyan animate-ping opacity-20"></div>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Upload Photo</h3>
<p className="text-gray-400 text-sm px-4">Take a picture of your room or upload an existing plan. We support JPG, PNG, and HEIC.</p>
</div>

<div className="text-center">
<div className="w-20 h-20 mx-auto bg-[#0a0e27] rounded-full border-2 border-ashii-magenta flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,0,110,0.3)] relative group cursor-default transition-transform hover:scale-110">
<span className="font-display font-bold text-2xl text-white">2</span>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Select Style</h3>
<p className="text-gray-400 text-sm px-4">Choose from our curated library of 500+ premium tiles or describe your vision to the AI.</p>
</div>

<div className="text-center">
<div className="w-20 h-20 mx-auto bg-[#0a0e27] rounded-full border-2 border-ashii-purple flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(142,68,173,0.3)] relative group cursor-default transition-transform hover:scale-110">
<span className="font-display font-bold text-2xl text-white">3</span>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Visualize</h3>
<p className="text-gray-400 text-sm px-4">Get high-resolution renders in seconds. Compare variations, save favorites, and export PDF specs.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-ashii-surface2/20" id="projects">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="">
<h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-2">Client <span className="text-gradient">Transformations</span></h2>
<p className="text-gray-400">See what our users are creating.</p>
</div>
<div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto custom-scrollbar">
<button className="px-4 py-2 rounded-full bg-ashii-cyan text-ashii-base font-semibold text-sm whitespace-nowrap">All Spaces</button>
<button className="px-4 py-2 rounded-full border border-gray-700 text-gray-300 hover:text-white hover:border-ashii-cyan transition text-sm whitespace-nowrap">Kitchen</button>
<button className="px-4 py-2 rounded-full border border-gray-700 text-gray-300 hover:text-white hover:border-ashii-cyan transition text-sm whitespace-nowrap">Bathroom</button>
<button className="px-4 py-2 rounded-full border border-gray-700 text-gray-300 hover:text-white hover:border-ashii-cyan transition text-sm whitespace-nowrap">Living Room</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative rounded-xl overflow-hidden aspect-[4/5] cursor-pointer">
<img alt="Bathroom Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-ashii-cyan text-xs font-mono mb-1 block">BATHROOM</span>
<h4 className="text-white font-bold text-lg">Onyx Luxury Suite</h4>
<div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-sm text-gray-300 underline decoration-ashii-cyan underline-offset-4">View Details</span>
</div>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden aspect-[4/5] cursor-pointer">
<img alt="Kitchen Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-ashii-magenta text-xs font-mono mb-1 block">KITCHEN</span>
<h4 className="text-white font-bold text-lg">Nordic Minimalist</h4>
<div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-sm text-gray-300 underline decoration-ashii-magenta underline-offset-4">View Details</span>
</div>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden aspect-[4/5] cursor-pointer">
<img alt="Living Room Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-ashii-gold text-xs font-mono mb-1 block">LIVING</span>
<h4 className="text-white font-bold text-lg">Industrial Loft</h4>
<div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-sm text-gray-300 underline decoration-ashii-gold underline-offset-4">View Details</span>
</div>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden aspect-[4/5] cursor-pointer">
<img alt="Exterior Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-ashii-purple text-xs font-mono mb-1 block">EXTERIOR</span>
<h4 className="text-white font-bold text-lg">Terrace Stone</h4>
<div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-sm text-gray-300 underline decoration-ashii-purple underline-offset-4">View Details</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-ashii-base relative" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16">
<h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">Flexible <span className="text-gradient">Plans</span></h2>
<div className="flex items-center justify-center gap-4 mt-6">
<span className="text-gray-400 text-sm">Monthly</span>
<button className="w-12 h-6 bg-gray-700 rounded-full relative p-1 transition-colors hover:bg-gray-600">
<div className="w-4 h-4 bg-ashii-cyan rounded-full ml-auto"></div>
</button>
<span className="text-white text-sm font-semibold">Annual <span className="text-ashii-cyan text-xs ml-1">-16%</span></span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8 items-center">

<div className="glass p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors">
<h3 className="font-display font-semibold text-xl text-white mb-2">Starter</h3>
<p className="text-gray-400 text-sm mb-6">Perfect for single home projects.</p>
<div className="flex items-end mb-6">
<span className="text-4xl font-bold text-white">Free</span>
</div>
<a className="block w-full py-3 rounded-lg border border-gray-600 text-white font-medium text-center hover:bg-white/5 transition-colors mb-8" href="#">Get Started</a>
<ul className="space-y-4 text-sm text-gray-300">
<li className="flex items-center gap-3"><iconify-icon className="text-gray-500" icon="lucide:check"></iconify-icon> 5 AI Generations</li>
<li className="flex items-center gap-3"><iconify-icon className="text-gray-500" icon="lucide:check"></iconify-icon> Standard resolution</li>
<li className="flex items-center gap-3"><iconify-icon className="text-gray-500" icon="lucide:check"></iconify-icon> Watermarked export</li>
</ul>
</div>

<div className="relative transform scale-105 z-10">
<div className="absolute -inset-0.5 bg-gradient-to-br from-ashii-cyan to-ashii-magenta rounded-2xl blur opacity-30"></div>
<div className="relative bg-[#16213e] p-8 rounded-2xl border border-ashii-cyan/30 shadow-2xl">
<div className="absolute top-0 right-0 bg-gradient-to-r from-ashii-cyan to-ashii-magenta text-black text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">Most Popular</div>
<h3 className="font-display font-semibold text-xl text-white mb-2">Pro Designer</h3>
<p className="text-gray-400 text-sm mb-6">For interior designers &amp; architects.</p>
<div className="flex items-end mb-6">
<span className="text-4xl font-bold text-white">$29</span>
<span className="text-gray-400 text-sm mb-1 ml-1">/mo</span>
</div>
<a className="block w-full py-3 rounded-lg bg-gradient-to-r from-ashii-cyan to-ashii-magenta text-white font-bold text-center hover:shadow-lg hover:shadow-ashii-cyan/25 transition-all mb-8" href="#">Upgrade Now</a>
<ul className="space-y-4 text-sm text-gray-300">
<li className="flex items-center gap-3"><iconify-icon className="text-ashii-cyan" icon="lucide:check"></iconify-icon> Unlimited Generations</li>
<li className="flex items-center gap-3"><iconify-icon className="text-ashii-cyan" icon="lucide:check"></iconify-icon> 4K Ultra-HD Export</li>
<li className="flex items-center gap-3"><iconify-icon className="text-ashii-cyan" icon="lucide:check"></iconify-icon> No Watermark</li>
</ul>
</div>
</div>

<div className="glass p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors">
<h3 className="font-display font-semibold text-xl text-white mb-2">Enterprise</h3>
<p className="text-gray-400 text-sm mb-6">API access for tile retailers.</p>
<div className="flex items-end mb-6">
<span className="text-4xl font-bold text-white">Custom</span>
</div>
<a className="block w-full py-3 rounded-lg border border-gray-600 text-white font-medium text-center hover:bg-white/5 transition-colors mb-8" href="#">Contact Sales</a>
<ul className="space-y-4 text-sm text-gray-300">
<li className="flex items-center gap-3"><iconify-icon className="text-ashii-purple" icon="lucide:check"></iconify-icon> Full API Access</li>
<li className="flex items-center gap-3"><iconify-icon className="text-ashii-purple" icon="lucide:check"></iconify-icon> White-label Viewer</li>
<li className="flex items-center gap-3"><iconify-icon className="text-ashii-purple" icon="lucide:check"></iconify-icon> Dedicated Support</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080b1e]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="font-display font-bold text-3xl md:text-4xl text-white text-center mb-16">Loved by <span className="text-gradient">Designers</span></h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-ashii-surface p-8 rounded-2xl border border-gray-800 relative hover:-translate-y-2 transition-transform duration-300">
<div className="text-ashii-cyan absolute top-6 right-8 text-4xl font-serif opacity-30">"</div>
<p className="text-gray-300 text-sm leading-relaxed mb-6 italic">"Ashii has completely revolutionized my client presentations. Being able to show 5 different tile options in a realistic setting in minutes is a game changer."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
<img alt="User" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h5 className="text-white font-semibold text-sm">Sarah Jenkins</h5>
<p className="text-xs text-gray-500">Interior Architect, NYC</p>
</div>
</div>
</div>

<div className="bg-ashii-surface p-8 rounded-2xl border border-gray-800 relative hover:-translate-y-2 transition-transform duration-300">
<div className="text-ashii-magenta absolute top-6 right-8 text-4xl font-serif opacity-30">"</div>
<p className="text-gray-300 text-sm leading-relaxed mb-6 italic">"The texture quality is insane. Clients can actually see the difference between polished marble and matte ceramic. Worth every penny for the Pro plan."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
<img alt="User" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h5 className="text-white font-semibold text-sm">Marcus Chen</h5>
<p className="text-xs text-gray-500">Renovation Contractor</p>
</div>
</div>
</div>

<div className="bg-ashii-surface p-8 rounded-2xl border border-gray-800 relative hover:-translate-y-2 transition-transform duration-300">
<div className="text-ashii-gold absolute top-6 right-8 text-4xl font-serif opacity-30">"</div>
<p className="text-gray-300 text-sm leading-relaxed mb-6 italic">"I remodeled my bathroom myself and used Ashii to decide on the tiles. Saved me from making a $2,000 mistake. The lighting adjustment is super helpful."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
<img alt="User" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h5 className="text-white font-semibold text-sm">Elena Rodriguez</h5>
<p className="text-xs text-gray-500">Homeowner</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-ashii-cyan/20 to-ashii-magenta/20 blur-3xl opacity-30"></div>
<div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
<h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6 tracking-tight">Ready to Transform Your Space?</h2>
<p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">Join 15,000+ designers and homeowners using Ashii Construction AI today.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="px-8 py-4 rounded-full bg-white text-ashii-base font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.4)]" href="#demo">Get Started Free</a>
<a className="px-8 py-4 rounded-full border border-gray-600 text-white font-semibold text-lg hover:border-white transition-colors" href="#">Schedule Demo</a>
</div>
</div>
</section>

<footer className="bg-[#050714] border-t border-gray-800/50 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-ashii-cyan text-2xl" icon="lucide:layers"></iconify-icon>
<span className="text-xl font-bold text-white font-display">Ashii Constructions</span>
</div>
<p className="text-gray-400 text-sm mb-6 max-w-xs">The world's most advanced AI platform for interior material visualization and remodeling.</p>
<div className="flex gap-4">
<a className="text-gray-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
<a className="text-gray-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:github" width="20"></iconify-icon></a>
</div>
</div>
<div className="">
<h4 className="font-semibold text-white mb-4">Product</h4>
<ul className="space-y-2 text-sm text-gray-400">
<li className=""><a className="hover:text-ashii-cyan transition-colors" href="#">Features</a></li>
<li className=""><a className="hover:text-ashii-cyan transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-ashii-cyan transition-colors" href="#">API</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-gray-400">
<li><a className="hover:text-ashii-cyan transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-ashii-cyan transition-colors" href="#">Community</a></li>
<li><a className="hover:text-ashii-cyan transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div className="">
<h4 className="font-semibold text-white mb-4">Newsletter</h4>
<div className="space-y-3">
<input className="w-full bg-ashii-surface border border-gray-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-ashii-cyan transition-colors" placeholder="Enter your email" type="email"/>
<button className="w-full bg-ashii-surface2 hover:bg-ashii-surface text-white text-sm font-medium py-2 rounded-lg transition-colors border border-gray-700">Subscribe</button>
</div>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-gray-600 text-sm">© 2024 Ashii Construction AI. All rights reserved.</p>
<div className="flex gap-6 text-sm text-gray-600">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
