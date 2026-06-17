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
colors: {
primary: '#FF6A00',
secondary: '#FF8A33',
bg: '#000000',
'bg-dark': '#050505',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
display: ['Orbitron', 'sans-serif'],
},
animation: {
'shine': 'shine 5s linear infinite',
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-slow': 'spin 4s linear infinite',
},
keyframes: {
shine: {
'to': { 'background-position': '200% center' }
},
float: {
'0%, 100%': { transform: 'translateY(0) rotateX(12deg)' },
'50%': { transform: 'translateY(-15px) rotateX(12deg)' }
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



        // Custom Cursor Physics - OPTIMIZED
        const cursor = document.getElementById('cursor');
        
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Hover Effects
        const interactives = document.querySelectorAll('.interactive');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
        });

        // Loop for smoothing with Hardware Acceleration
        function animateCursor() {
            // Increased ease factor for slightly faster/smoother follow
            const ease = 0.2; 
            
            cursorX += (mouseX - cursorX) * ease;
            cursorY += (mouseY - cursorY) * ease;

            // Use translate3d for GPU acceleration (smoother than top/left)
            // Centering logic (-50%) is handled in the transform string
            cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
            
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // RGB Showcase Logic
        function setMode(mode) {
            const pad = document.getElementById('preview-pad');
            const reflection = document.getElementById('preview-reflection');
            const btns = document.querySelectorAll('.rgb-btn');

            // Reset Classes
            pad.className = 'absolute inset-0 bg-[#050505] rounded-3xl border-2 transition-all duration-700';
            
            // Set new class
            if(mode === 'static') {
                pad.classList.add('pad-static');
                reflection.className = "absolute -bottom-20 left-10 right-10 h-10 blur-2xl rounded-[100%] transition-all duration-700 bg-primary/20";
            } else if(mode === 'breathing') {
                pad.classList.add('pad-breathing');
                reflection.className = "absolute -bottom-20 left-10 right-10 h-10 blur-2xl rounded-[100%] transition-all duration-700 bg-primary/20 animate-pulse";
            } else if(mode === 'wave') {
                pad.classList.add('pad-wave', 'pad-wave-shadow');
                reflection.className = "absolute -bottom-20 left-10 right-10 h-10 blur-2xl rounded-[100%] transition-all duration-700 bg-primary/20";
            } else if(mode === 'off') {
                pad.classList.add('pad-off');
                reflection.className = "absolute -bottom-20 left-10 right-10 h-10 blur-2xl rounded-[100%] transition-all duration-700 bg-transparent";
            }

            // Update UI Buttons
            btns.forEach(btn => {
                const dot = btn.querySelector('.dot');
                if(btn.dataset.mode === mode) {
                    btn.classList.remove('bg-transparent', 'border-white/5', 'text-[#666]');
                    btn.classList.add('bg-primary/10', 'border-primary', 'text-white');
                    dot.classList.remove('opacity-0');
                } else {
                    btn.classList.add('bg-transparent', 'border-white/5', 'text-[#666]');
                    btn.classList.remove('bg-primary/10', 'border-primary', 'text-white');
                    dot.classList.add('opacity-0');
                }
            });
        }
        
        // Keyframe animation for fade ins
        const styleSheet = document.createElement("style");
        styleSheet.innerText = `
            @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes fadeInZoom {
                from { opacity: 0; transform: scale(0.9) rotateX(20deg); }
                to { opacity: 1; transform: scale(1) rotateX(0deg); } /* rotate handled by inner div */
            }
        `;
        document.head.appendChild(styleSheet);
    
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
      

<div className="noise"></div>

<div className="w-3 h-3 rounded-full border border-white flex items-center justify-center" id="cursor"></div>

<nav className="fixed top-0 w-full z-40 px-6 py-6 mix-blend-difference">
<div className="flex justify-between items-center max-w-7xl mx-auto">
<a className="font-display font-semibold text-xl tracking-widest uppercase flex items-center gap-2 text-white hover:text-primary transition-colors interactive" href="#">
<div className="w-1.5 h-6 bg-primary"></div>
                Series-X
            </a>
<button className="hidden md:block px-6 py-2 border border-white/20 text-xs font-mono tracking-widest text-white hover:bg-white hover:text-black transition-all interactive uppercase">
                Pre-Order Now
            </button>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20">

<div className="absolute inset-0 bg-black -z-10">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] bg-gradient-radial from-primary/10 via-black/90 to-black"></div>
</div>
<div className="z-10 text-center mb-12 space-y-6 max-w-4xl relative">
<div className="opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
<span className="inline-block py-1 px-3 border border-white/10 rounded-full bg-white/5 text-xs font-mono text-[#A0A0A0] mb-4 tracking-widest backdrop-blur-sm">
                    SERIES-X PRO HARDWARE
                </span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display text-white leading-none uppercase tracking-tighter">
                    Precision <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white bg-[200%_auto] animate-shine">
                        You Can Feel
                    </span>
</h1>
</div>
<p className="text-[#A0A0A0] text-lg md:text-xl max-w-2xl mx-auto font-light opacity-0 animate-[fadeIn_1s_ease-out_0.4s_forwards]">
                Control every pixel. Track every move. The ultimate surface for high-DPI performance.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
<button className="interactive group relative px-8 py-4 bg-black border border-primary text-white font-semibold font-display uppercase tracking-wider overflow-hidden rounded-sm transition-all hover:text-black">
<span className="relative z-10 flex items-center gap-2">
                        Upgrade Your Setup <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
<div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
</button>
<div className="flex gap-4 text-xs font-mono text-[#666]">
<span className="flex items-center gap-1"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> WATERPROOF</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:pulse-2-linear"></iconify-icon> MICRO-TEXTURE</span>
</div>
</div>
</div>

<div className="z-10 w-full flex justify-center perspective-1000 mb-20 opacity-0 animate-[fadeInZoom_1.2s_ease-out_0.3s_forwards]">
<div className="relative w-full max-w-2xl aspect-[16/10] animate-float preserve-3d">

<div className="absolute inset-0 bg-[#050505] rounded-3xl border-2 border-primary shadow-[0_0_60px_rgba(255,106,0,0.5)] transition-all duration-700">

<div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] rounded-3xl mix-blend-overlay"></div>

<div className="absolute bottom-6 right-6 opacity-80 text-primary">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>

<div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/5 to-transparent opacity-30"></div>
</div>

<div className="absolute -bottom-20 left-10 right-10 h-10 blur-2xl rounded-[100%] bg-primary/20"></div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/50 animate-pulse">
<div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-primary to-transparent"></div>
</div>
</section>

<section className="py-32 px-6 relative bg-black">
<div className="max-w-7xl mx-auto">
<div className="mb-20">
<h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Engineered for <span className="text-primary">Dominance</span></h2>
<div className="h-1 w-24 bg-primary"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-panel p-8 rounded-xl group hover:border-primary/50 transition-all duration-500 relative overflow-hidden interactive">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-white">
<iconify-icon icon="solar:maximize-square-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:maximize-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold font-display text-white mb-2">Micro-Woven Surface</h3>
<p className="text-[#A0A0A0] leading-relaxed text-sm">Engineered for both speed and control playstyles. Optimize mouse sensor tracking accuracy.</p>
</div>
<div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
</div>

<div className="glass-panel p-8 rounded-xl group hover:border-primary/50 transition-all duration-500 relative overflow-hidden interactive">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-white">
<iconify-icon icon="solar:water-drops-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:water-drops-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold font-display text-white mb-2">Hydrophobic Coating</h3>
<p className="text-[#A0A0A0] leading-relaxed text-sm">Liquid resistant surface protection. Spills slide right off without soaking in.</p>
</div>
<div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
</div>

<div className="glass-panel p-8 rounded-xl group hover:border-primary/50 transition-all duration-500 relative overflow-hidden interactive">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-white">
<iconify-icon icon="solar:layers-minimalistic-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold font-display text-white mb-2">Non-Slip Rubber Base</h3>
<p className="text-[#A0A0A0] leading-relaxed text-sm">Heavy-duty textured rubber base ensures the pad stays anchored during intense gameplay.</p>
</div>
<div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
</div>

<div className="glass-panel p-8 rounded-xl group hover:border-primary/50 transition-all duration-500 relative overflow-hidden interactive">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-white">
<iconify-icon icon="solar:bolt-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold font-display text-white mb-2">Edge-to-Edge RGB</h3>
<p className="text-[#A0A0A0] leading-relaxed text-sm">Dual-zone lighting customization with uniform brightness diffusion. No dark spots.</p>
</div>
<div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden bg-bg-dark">

<div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,20,0.5)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">

<div className="w-full lg:w-1/3 space-y-8">
<div>
<h2 className="text-4xl font-bold font-display mb-4">Lighting Modes</h2>
<p className="text-[#A0A0A0] mb-8">Customize your atmosphere. From aggressive tournament ready brightness to subtle ambient immersion.</p>
<div className="space-y-3" id="rgb-controls">

<button className="rgb-btn w-full text-left p-4 rounded-lg border transition-all duration-300 flex items-center justify-between group interactive bg-primary/10 border-primary text-white" data-mode="static" onclick="setMode('static')">
<span className="font-mono uppercase tracking-wider text-sm">Static Glow</span>
<div className="dot w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#FF6A00]"></div>
</button>
<button className="rgb-btn w-full text-left p-4 rounded-lg border transition-all duration-300 flex items-center justify-between group interactive bg-transparent border-white/5 text-[#666] hover:border-white/20 hover:text-white" data-mode="breathing" onclick="setMode('breathing')">
<span className="font-mono uppercase tracking-wider text-sm">Breathing</span>
<div className="dot w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#FF6A00] opacity-0"></div>
</button>
<button className="rgb-btn w-full text-left p-4 rounded-lg border transition-all duration-300 flex items-center justify-between group interactive bg-transparent border-white/5 text-[#666] hover:border-white/20 hover:text-white" data-mode="wave" onclick="setMode('wave')">
<span className="font-mono uppercase tracking-wider text-sm">Neon Wave</span>
<div className="dot w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#FF6A00] opacity-0"></div>
</button>
<button className="rgb-btn w-full text-left p-4 rounded-lg border transition-all duration-300 flex items-center justify-between group interactive bg-transparent border-white/5 text-[#666] hover:border-white/20 hover:text-white" data-mode="off" onclick="setMode('off')">
<span className="font-mono uppercase tracking-wider text-sm">Stealth Mode</span>
<div className="dot w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#FF6A00] opacity-0"></div>
</button>
</div>
</div>
</div>

<div className="w-full lg:w-2/3 flex items-center justify-center py-12">
<div className="relative w-full max-w-2xl aspect-[16/10] perspective-1000 group">
<div className="w-full h-full transform preserve-3d rotate-x-12 animate-float">

<div className="absolute inset-0 bg-[#050505] rounded-3xl border-2 transition-all duration-700 pad-static" id="preview-pad">
<div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] rounded-3xl mix-blend-overlay"></div>
<div className="absolute bottom-6 right-6 opacity-80 text-primary">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/5 to-transparent opacity-30"></div>
</div>

<div className="absolute -bottom-20 left-10 right-10 h-10 blur-2xl rounded-[100%] transition-all duration-700 bg-primary/20" id="preview-reflection"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-black text-center overflow-hidden">
<div className="max-w-4xl mx-auto space-y-12">
<h2 className="text-3xl md:text-5xl font-bold font-display">Tracking <span className="text-primary">Performance</span></h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="p-6 rounded-xl border border-white/5 bg-white/5 opacity-50 relative group">
<h3 className="text-xs font-mono text-gray-500 mb-8 uppercase tracking-widest">Standard Surface</h3>
<div className="relative h-32 flex items-center justify-center overflow-hidden">
<svg className="w-full h-full" viewbox="0 0 400 100">
<path d="M0,50 L50,45 L100,55 L150,48 L200,52 L250,49 L300,51 L350,47 L400,50" fill="none" stroke="#666" stroke-dasharray="4 4" strokeWidth="2"></path>
<circle fill="#666" r="4">
<animatemotion dur="4s" path="M0,50 L50,45 L100,55 L150,48 L200,52 L250,49 L300,51 L350,47 L400,50" repeatcount="indefinite"></animatemotion>
</circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center text-xs text-red-500 font-mono tracking-widest mt-16">
                            JITTER DETECTED
                        </div>
</div>
</div>

<div className="p-6 rounded-xl border border-primary/30 bg-primary/5 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-shine"></div>
<h3 className="text-xs font-mono text-primary mb-8 uppercase tracking-widest">Micro-Woven Surface</h3>
<div className="relative h-32 flex items-center justify-center overflow-hidden">
<svg className="w-full h-full" viewbox="0 0 400 100">
<path d="M0,50 L400,50" fill="none" stroke="#FF6A00" strokeWidth="2"></path>
<circle fill="#FF6A00" r="6" style={{filter: 'drop-shadow(0 0 10px #FF6A00)'}}>
<animate attributename="cx" dur="4s" from="0" repeatcount="indefinite" to="400"></animate>
<animate attributename="cy" dur="4s" from="50" repeatcount="indefinite" to="50"></animate>
</circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center text-xs text-primary font-mono tracking-widest mt-16 text-shadow-glow">
                            PERFECT TRACKING
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 bg-black">
<div className="max-w-5xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
<h2 className="text-3xl font-bold font-display uppercase">Technical <br/>Specifications</h2>
<div className="text-primary font-mono text-sm tracking-widest mt-4 md:mt-0">MODEL: RGB-X1 // REV.02</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">

<div className="bg-black p-6 group hover:bg-[#050505] transition-colors">
<div className="text-[#666] text-xs font-mono uppercase mb-2 group-hover:text-primary transition-colors">Dimensions</div>
<div className="text-white font-medium">900mm x 400mm</div>
</div>

<div className="bg-black p-6 group hover:bg-[#050505] transition-colors">
<div className="text-[#666] text-xs font-mono uppercase mb-2 group-hover:text-primary transition-colors">Thickness</div>
<div className="text-white font-medium">4.0mm</div>
</div>

<div className="bg-black p-6 group hover:bg-[#050505] transition-colors">
<div className="text-[#666] text-xs font-mono uppercase mb-2 group-hover:text-primary transition-colors">Surface</div>
<div className="text-white font-medium">Micro-Textured Cloth</div>
</div>

<div className="bg-black p-6 group hover:bg-[#050505] transition-colors">
<div className="text-[#666] text-xs font-mono uppercase mb-2 group-hover:text-primary transition-colors">Base</div>
<div className="text-white font-medium">Anti-Slip Rubber</div>
</div>

<div className="bg-black p-6 group hover:bg-[#050505] transition-colors">
<div className="text-[#666] text-xs font-mono uppercase mb-2 group-hover:text-primary transition-colors">Connection</div>
<div className="text-white font-medium">USB-C Detachable</div>
</div>

<div className="bg-black p-6 group hover:bg-[#050505] transition-colors">
<div className="text-[#666] text-xs font-mono uppercase mb-2 group-hover:text-primary transition-colors">Cable</div>
<div className="text-white font-medium">1.8m Braided</div>
</div>

<div className="bg-black p-6 group hover:bg-[#050505] transition-colors">
<div className="text-[#666] text-xs font-mono uppercase mb-2 group-hover:text-primary transition-colors">Voltage</div>
<div className="text-white font-medium">5V / 150mA</div>
</div>

<div className="bg-black p-6 group hover:bg-[#050505] transition-colors">
<div className="text-[#666] text-xs font-mono uppercase mb-2 group-hover:text-primary transition-colors">Zones</div>
<div className="text-white font-medium">2 Lighting Zones</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808]">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-12">

<div className="flex flex-col items-center text-center space-y-4 group interactive opacity-80 hover:opacity-100 transition-opacity relative">
<div className="w-20 h-20 rounded-full bg-[#111] border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(255,106,0,0.2)] transition-all duration-300">
<iconify-icon className="text-white group-hover:text-primary transition-colors" icon="solar:cable-circle-linear" width="32"></iconify-icon>
</div>
<h4 className="text-xl font-bold font-display uppercase">Plug</h4>
<p className="text-sm text-[#666] font-mono">Connect via USB-C</p>
<div className="hidden md:block absolute w-24 h-[1px] bg-white/10 translate-x-[160px] translate-y-[-80px]"></div>
</div>

<div className="flex flex-col items-center text-center space-y-4 group interactive opacity-80 hover:opacity-100 transition-opacity relative">
<div className="w-20 h-20 rounded-full bg-[#111] border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(255,106,0,0.2)] transition-all duration-300">
<iconify-icon className="text-white group-hover:text-primary transition-colors" icon="solar:move-to-folder-linear" width="32"></iconify-icon>
</div>
<h4 className="text-xl font-bold font-display uppercase">Place</h4>
<p className="text-sm text-[#666] font-mono">Position on desk</p>
<div className="hidden md:block absolute w-24 h-[1px] bg-white/10 translate-x-[160px] translate-y-[-80px]"></div>
</div>

<div className="flex flex-col items-center text-center space-y-4 group interactive opacity-80 hover:opacity-100 transition-opacity">
<div className="w-20 h-20 rounded-full bg-[#111] border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(255,106,0,0.2)] transition-all duration-300">
<iconify-icon className="text-white group-hover:text-primary transition-colors" icon="solar:mouse-minimalistic-linear" width="32"></iconify-icon>
</div>
<h4 className="text-xl font-bold font-display uppercase">Play</h4>
<p className="text-sm text-[#666] font-mono">Dominate instantly</p>
</div>
</div>
</div>
</section>

<section className="py-40 px-6 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-primary/5"></div>
<div className="relative z-10">
<h2 className="text-5xl md:text-8xl font-black font-display uppercase mb-8">
                Your desk <br/>deserves <span className="text-primary">precision</span>.
            </h2>
<button className="interactive px-12 py-5 bg-primary text-black font-bold text-xl font-display uppercase tracking-widest hover:bg-white transition-colors shadow-[0_0_50px_rgba(255,106,0,0.4)] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)]">
                Get Yours Now
            </button>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-black px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-primary" icon="solar:bolt-linear" width="20"></iconify-icon>
<span className="font-bold font-display tracking-widest uppercase">Series-X</span>
</div>
<div className="flex gap-8 text-sm text-[#666]">
<a className="hover:text-primary transition-colors interactive" href="#">Support</a>
<a className="hover:text-primary transition-colors interactive" href="#">Warranty</a>
<a className="hover:text-primary transition-colors interactive" href="#">Drivers</a>
<a className="hover:text-primary transition-colors interactive" href="#">Contact</a>
</div>
<div className="text-xs text-[#444] font-mono">
                © 2024 SERIES-X HARDWARE.
            </div>
</div>
</footer>



    </>
  );
}
