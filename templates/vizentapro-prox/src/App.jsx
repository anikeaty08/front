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
obsidian: '#050505',
glass: 'rgba(255, 255, 255, 0.03)',
glassBorder: 'rgba(255, 255, 255, 0.08)',
brand: {
purple: '#7c3aed',
cyan: '#06b6d4',
gold: '#fbbf24'
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-slow': 'spin 12s linear infinite',
'orbit': 'orbit 8s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
orbit: {
'0%': { transform: 'rotateX(70deg) rotateY(0deg) rotateZ(0deg)' },
'100%': { transform: 'rotateX(70deg) rotateY(360deg) rotateZ(0deg)' },
}
}
}
}
}



            const prompts = [
                { title: "Ultra Cinematic Luxury", type: "Cinematic", icon: "film", desc: "Ultra-realistic cinematic lighting, dramatic shadows, shallow depth of field, 8K clarity, luxury color grading.", color: "text-brand-gold" },
                { title: "Dark Royal Elite", type: "Fashion", icon: "crown", desc: "Obsidian blacks, gold highlights, moody lighting, high contrast, royal tones, premium fashion campaign style.", color: "text-purple-400" },
                { title: "Neon Cyberpunk God", type: "Sci-Fi", icon: "zap", desc: "Cyberpunk neon glow, electric blue and magenta lighting, rain reflections, futuristic atmosphere, holographic highlights.", color: "text-brand-cyan" },
                { title: "High-End Fashion Editorial", type: "Editorial", icon: "camera", desc: "Studio-grade lighting, clean background, sharp focus, premium skin retouching, Vogue-level composition.", color: "text-pink-300" },
                { title: "Hyper-Realistic HDR Master", type: "Photography", icon: "eye", desc: "Perfect dynamic range, ultra-sharp clarity, natural textures, professional photography quality, realistic lighting.", color: "text-emerald-300" },
                { title: "Soft Portrait Perfection", type: "Portrait", icon: "user", desc: "Natural portrait retouch, soft lighting, flawless yet realistic skin texture, subtle glow, studio finish.", color: "text-rose-300" }
            ];

            prompts.forEach((p) => {
                document.write(`
                    <div class="tilt-card group relative p-6 glass-panel rounded-xl hover:bg-white/5 transition-all duration-500 transform-gpu preserve-3d cursor-default">
                        <div class="absolute inset-0 bg-gradient-to-br from-transparent to-${p.color.split('-')[1]}/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                        <div class="relative z-10 flex flex-col h-full justify-between transform transition-transform group-hover:translate-z-10">
                            <div class="mb-4">
                                <div class="flex justify-between items-start mb-3">
                                    <div class="p-2 rounded bg-white/5 border border-white/10 ${p.color}">
                                        <i data-lucide="${p.icon}" class="w-5 h-5"></i>
                                    </div>
                                    <span class="text-[10px] uppercase tracking-wider text-slate-500 border border-white/5 px-2 py-1 rounded-full">${p.type}</span>
                                </div>
                                <h3 class="text-lg font-medium text-white mb-2 leading-tight">${p.title}</h3>
                                <p class="text-xs text-slate-400 leading-relaxed">${p.desc}</p>
                            </div>
                            <div class="flex gap-2 mt-4 pt-4 border-t border-white/5 opacity-60 group-hover:opacity-100 transition-opacity">
                                <button class="flex-1 bg-white/10 hover:bg-white/20 text-white text-[10px] font-medium py-2 rounded flex items-center justify-center gap-1.5 transition-colors">
                                    <i data-lucide="copy" class="w-3 h-3"></i> Copy
                                </button>
                                <button class="flex-1 bg-brand-purple/20 hover:bg-brand-purple/30 text-brand-purple text-[10px] font-medium py-2 rounded flex items-center justify-center gap-1.5 transition-colors border border-brand-purple/20">
                                    <i data-lucide="wand-2" class="w-3 h-3"></i> Generate
                                </button>
                            </div>
                        </div>
                    </div>
                `);
            });
          


      lucide.createIcons();

      document.addEventListener('mousemove', (e) => {
          const cards = document.querySelectorAll('.tilt-card');
          const hero = document.querySelector('.tilt-element');

          const mouseX = e.clientX;
          const mouseY = e.clientY;
          const windowWidth = window.innerWidth;
          const windowHeight = window.innerHeight;

          // Parallax for Main Logo
          if(hero) {
              const x = (windowWidth / 2 - mouseX) / 40;
              const y = (windowHeight / 2 - mouseY) / 40;
              hero.style.transform = `rotateX(${y}deg) rotateY(${-x}deg)`;
          }

          // Card Tilt
          cards.forEach(card => {
              const rect = card.getBoundingClientRect();
              const cardX = rect.left + rect.width / 2;
              const cardY = rect.top + rect.height / 2;
              const dist = Math.hypot(mouseX - cardX, mouseY - cardY);
              
              if (dist < 600) {
                  const angleX = (cardY - mouseY) / 20;
                  const angleY = (mouseX - cardX) / 20;
                  card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
              } else {
                  card.style.transform = `perspective(1000px) rotateX(0) rotateY(0)`;
              }
          });
      });

      // Comparison Slider
      const container = document.getElementById('comparison-container');
      const beforeImage = document.getElementById('before-image');
      const handle = document.getElementById('slider-handle');

      if(container && beforeImage && handle) {
          const slide = (x) => {
              const rect = container.getBoundingClientRect();
              let position = ((x - rect.left) / rect.width) * 100;
              position = Math.max(0, Math.min(100, position));
              beforeImage.style.width = `${position}%`;
              handle.style.left = `${position}%`;
          }
          container.addEventListener('mousemove', (e) => slide(e.clientX));
          container.addEventListener('touchmove', (e) => slide(e.touches[0].clientX));
      }

      // Scroll Observer
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('opacity-100', 'translate-y-0');
                  entry.target.classList.remove('opacity-0', 'translate-y-10');
              }
          });
      }, { threshold: 0.1 });

      document.querySelectorAll('section').forEach(sec => {
          sec.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
          observer.observe(sec);
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
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
<div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" style={{animationDelay: '2s'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-obsidian/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">

<svg className="w-8 h-8 drop-shadow-lg" viewbox="0 0 100 100">
<defs>
<lineargradient id="navGold" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#fef3c7"></stop>
<stop offset="100%" stop-color="#d97706"></stop>
</lineargradient>
<lineargradient id="navPurple" x1="100%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#d8b4fe"></stop>
<stop offset="100%" stop-color="#7c3aed"></stop>
</lineargradient>
</defs>
<path d="M50 85 L20 20 L40 20 L50 70 Z" fill="url(#navGold)"></path>
<path d="M50 85 L80 20 L60 20 L50 70 Z" fill="url(#navPurple)"></path>
</svg>
<span className="text-sm tracking-widest font-semibold text-white">
            VIZENTA AI
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-slate-400">
<a className="hover:text-white transition-colors" href="#studio">STUDIO</a>
<a className="hover:text-white transition-colors" href="#prompts">PROMPT ENGINE</a>
<a className="hover:text-white transition-colors" href="#gallery">GALLERY</a>
<a className="hover:text-white transition-colors" href="#dashboard">DASHBOARD</a>
</div>
<div className="flex items-center gap-4">
<span className="text-[10px] text-slate-500 hidden sm:block text-right leading-tight">
            Owned by
            <br/>
<span className="text-brand-gold/80">Mehekh Hassan</span>
</span>
<button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded text-xs font-medium transition-all border border-white/5 backdrop-blur-sm">
            Sign In
          </button>
</div>
</div>
</nav>

<header className="relative min-h-screen flex flex-col items-center justify-center pt-20 perspective-[1000px] overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/10 blur-[100px] rounded-full pointer-events-none"></div>

<div className="relative z-10 flex flex-col items-center justify-center tilt-element">

<div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto mb-2 perspective-[1000px] group">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/20 blur-[50px] rounded-full animate-pulse-slow"></div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

<div className="w-[120%] h-[120%] rounded-full border border-cyan-400/40 shadow-[0_0_20px_rgba(6,182,212,0.3)] preserve-3d absolute animate-[spin_10s_linear_infinite]" style={{transform: 'rotateX(75deg) rotateY(15deg)'}}>

<div className="absolute top-0 left-1/2 w-20 h-1 bg-cyan-200 blur-[4px] -translate-x-1/2"></div>
</div>

<div className="w-[100%] h-[100%] rounded-full border-t-[3px] border-l-[1px] border-transparent border-t-brand-gold border-l-brand-gold/50 shadow-[0_0_25px_rgba(251,191,36,0.3)] preserve-3d absolute" style={{animation: 'orbit 8s linear infinite reverse'}}>
</div>
</div>

<svg className="w-full h-full relative z-20 drop-shadow-2xl" viewbox="0 0 200 200">
<defs>
<lineargradient id="vLeftGrad" x1="0%" x2="100%" y1="100%" y2="0%">
<stop offset="0%" stop-color="#b45309"></stop> 
<stop offset="40%" stop-color="#f59e0b"></stop> 
<stop offset="60%" stop-color="#fcd34d"></stop> 
<stop offset="100%" stop-color="#fffbeb"></stop> 
</lineargradient>
<lineargradient id="vRightGrad" x1="100%" x2="0%" y1="100%" y2="0%">
<stop offset="0%" stop-color="#581c87"></stop> 
<stop offset="40%" stop-color="#7c3aed"></stop> 
<stop offset="60%" stop-color="#a855f7"></stop> 
<stop offset="100%" stop-color="#e9d5ff"></stop> 
</lineargradient>
<filter height="140%" id="glow" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="5"></fegaussianblur>
<fecomposite in="SourceGraphic" in2="blur" operator="over"></fecomposite>
</filter>
</defs>

<path className="drop-shadow-lg" d="M100 180 L35 30 L85 30 L100 140 Z" fill="url(#vLeftGrad)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></path>

<path className="mix-blend-overlay" d="M45 35 L75 35 L90 130 L100 180" fill="transparent" stroke="white" stroke-opacity="0.2" strokeWidth="2"></path>

<path className="drop-shadow-lg" d="M100 180 L165 30 L115 30 L100 140 Z" fill="url(#vRightGrad)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"></path>

<path d="M165 30 L100 180" fill="transparent" filter="url(#glow)" stroke="#d8b4fe" stroke-opacity="0.8" strokeWidth="2"></path>

<circle className="mix-blend-overlay blur-xl animate-pulse" cx="20" cy="20" fill="white" r="15" transform="translate(145, 10)"></circle>
</svg>

<div className="absolute top-[20%] right-[10%] w-24 h-1 bg-cyan-400 blur-[2px] rotate-[-45deg] z-30 mix-blend-screen opacity-80"></div>
<div className="absolute top-[20%] right-[10%] w-1 h-24 bg-white blur-[2px] rotate-[-45deg] z-30 mix-blend-screen opacity-80"></div>
<div className="absolute top-[50%] left-0 w-8 h-8 bg-brand-gold blur-xl z-10 opacity-40"></div>
</div>

<div className="relative z-30 text-center -mt-8 md:-mt-12">
<h1 className="text-6xl md:text-9xl font-black tracking-tighter scale-y-90 chrome-text">
                VIZENTA
            </h1>
<div className="text-2xl md:text-4xl font-bold tracking-[0.5em] gold-text -mt-2 md:-mt-4 uppercase flex items-center justify-center gap-4">
<span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-brand-gold"></span>
                AI
                <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-brand-gold"></span>
</div>
</div>

<div className="relative z-0 text-center opacity-30 pointer-events-none transform scale-y-[-1] origin-top -mt-2 reflection-gradient blur-[2px]">
<h1 className="text-6xl md:text-9xl font-black tracking-tighter scale-y-90 text-slate-500">
                VIZENTA
            </h1>
<div className="text-2xl md:text-4xl font-bold tracking-[0.5em] text-yellow-700 -mt-2 md:-mt-4 uppercase flex items-center justify-center gap-4">
<span className="h-[1px] w-12 bg-yellow-900"></span>
                AI
                <span className="h-[1px] w-12 bg-yellow-900"></span>
</div>
</div>

<div className="relative z-40 mt-12 flex flex-col md:flex-row items-center justify-center gap-4 animate-float">
<button className="group relative px-8 py-3 bg-white text-black rounded-sm text-xs font-bold tracking-widest uppercase overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
<div className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-white to-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="relative flex items-center gap-2">
                    Initialize System
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</span>
</button>
<button className="px-8 py-3 rounded-sm text-xs font-bold tracking-widest uppercase text-white border border-white/20 hover:bg-white/5 transition-colors flex items-center gap-2 backdrop-blur-sm">
<i className="w-4 h-4 text-brand-gold" data-lucide="play-circle"></i>
                Watch Trailer
            </button>
</div>
</div>
</header>

<section className="py-24 relative z-10 bg-gradient-to-b from-obsidian to-black" id="studio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-medium tracking-tight text-white mb-2">
              Editing Studio
            </h2>
<p className="text-sm text-slate-400">
              Drag to compare. AI enhancement in real-time.
            </p>
</div>
<div className="flex gap-2">
<button className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition">
<i className="w-4 h-4" data-lucide="undo-2"></i>
</button>
<button className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition">
<i className="w-4 h-4" data-lucide="download"></i>
</button>
</div>
</div>
<div className="glass-panel rounded-2xl p-1 overflow-hidden relative group">
<div className="absolute top-6 left-6 z-30 flex flex-col gap-3">
<div className="w-10 h-10 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-brand-cyan hover:scale-110 transition cursor-pointer">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<div className="w-10 h-10 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-brand-purple hover:scale-110 transition cursor-pointer">
<i className="w-5 h-5" data-lucide="crown"></i>
</div>
<div className="w-10 h-10 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:scale-110 transition cursor-pointer">
<i className="w-5 h-5" data-lucide="aperture"></i>
</div>
</div>
<div className="relative w-full h-[500px] md:h-[600px] bg-black select-none" id="comparison-container">
<div className="absolute inset-0 w-full h-full">
<img alt="After Edit" className="w-full h-full object-cover opacity-60 mix-blend-luminosity filter contrast-125 brightness-75" src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/40 to-brand-cyan/20 mix-blend-overlay"></div>
</div>
<div className="absolute inset-0 w-1/2 h-full overflow-hidden border-r border-white/50" id="before-image">
<img alt="Before Edit" className="absolute top-0 left-0 w-[100vw] max-w-[calc(100vw-3rem)] md:max-w-[calc(80rem)] h-full object-cover filter grayscale sepia-[.2]" src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-black/50 text-white text-[10px] px-2 py-1 rounded backdrop-blur">
                ORIGINAL
              </div>
</div>
<div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white cursor-ew-resize z-20 flex items-center justify-center" id="slider-handle">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.5)]">
<i className="w-4 h-4 text-black" data-lucide="chevrons-left-right"></i>
</div>
</div>
<div className="absolute top-4 right-4 bg-brand-cyan/20 border border-brand-cyan/50 text-brand-cyan text-[10px] px-2 py-1 rounded backdrop-blur">
              VIZENTA PROCESSED
            </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-black to-obsidian" id="prompts">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-brand-gold text-xs font-semibold tracking-widest uppercase mb-2 block">
            Curated by Mehekh Hassan
          </span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
            God-Level Prompts
          </h2>
<p className="text-slate-400 text-sm max-w-md mx-auto">
            Copy-ready cinematic intelligence. Hover to activate preview.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-[2000px]">

</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-obsidian" id="dashboard">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
<div className="max-w-xl">
<span className="text-brand-cyan text-xs font-semibold tracking-widest uppercase">VIZENTA ADMIN CONTROL</span>
<h2 className="text-4xl font-medium tracking-tight text-white mt-2 mb-4">System Mainframe</h2>
<p className="text-slate-400 text-sm">Billion-dollar SaaS control center. Manage users, revenue, prompts, and SEO rankings in real-time.</p>
</div>
<button className="bg-white text-black px-8 py-3 rounded text-sm font-semibold hover:scale-105 transition-transform">Unlock Premium Access</button>
</div>
<div className="glass-panel rounded-2xl border border-white/10 p-6 md:p-8 relative shadow-2xl overflow-hidden">
<div className="flex justify-between items-center mb-8 border-b border-white/5 pb-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 border border-white/20 overflow-hidden relative">
<div className="absolute inset-0 bg-brand-gold/20 animate-pulse"></div>
</div>
<div>
<div className="text-white text-sm font-medium">Mehekh Hassan</div>
<div className="text-brand-gold text-[10px] uppercase tracking-wider">Diamond Tier</div>
</div>
</div>
<div className="flex gap-4">
<div className="text-right hidden sm:block">
<div className="text-slate-400 text-[10px] uppercase">Credits</div>
<div className="text-white text-lg font-mono">∞</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
<div className="bg-white/5 rounded-lg p-4 border border-white/5 hover:border-brand-cyan/30 transition-colors group relative overflow-hidden">
<div className="flex justify-between items-start relative z-10">
<div className="text-slate-400 text-[10px] uppercase mb-1 tracking-wider">Total Users</div>
<i className="w-4 h-4 text-brand-cyan opacity-50" data-lucide="users"></i>
</div>
<div className="text-2xl text-white font-light relative z-10">842,391</div>
<div className="w-full bg-slate-800 h-1 mt-3 rounded-full overflow-hidden relative z-10">
<div className="w-[85%] bg-brand-cyan h-full animate-pulse"></div>
</div>
</div>
<div className="bg-white/5 rounded-lg p-4 border border-white/5 hover:border-brand-purple/30 transition-colors group relative overflow-hidden">
<div className="flex justify-between items-start relative z-10">
<div className="text-slate-400 text-[10px] uppercase mb-1 tracking-wider">Active Sessions</div>
<i className="w-4 h-4 text-brand-purple opacity-50" data-lucide="activity"></i>
</div>
<div className="text-2xl text-white font-light relative z-10">12,405</div>
<div className="w-full bg-slate-800 h-1 mt-3 rounded-full overflow-hidden relative z-10">
<div className="w-[60%] bg-brand-purple h-full animate-pulse"></div>
</div>
</div>
<div className="bg-white/5 rounded-lg p-4 border border-white/5 hover:border-brand-gold/30 transition-colors group relative overflow-hidden">
<div className="flex justify-between items-start relative z-10">
<div className="text-slate-400 text-[10px] uppercase mb-1 tracking-wider">Revenue (MRR)</div>
<i className="w-4 h-4 text-brand-gold opacity-50" data-lucide="dollar-sign"></i>
</div>
<div className="text-2xl text-white font-light relative z-10">$1.2M</div>
<div className="w-full bg-slate-800 h-1 mt-3 rounded-full overflow-hidden relative z-10">
<div className="w-[92%] bg-brand-gold h-full animate-pulse"></div>
</div>
</div>
<div className="bg-white/5 rounded-lg p-4 border border-white/5 hover:border-pink-500/30 transition-colors group relative overflow-hidden">
<div className="flex justify-between items-start relative z-10">
<div className="text-slate-400 text-[10px] uppercase mb-1 tracking-wider">Premium Subs</div>
<i className="w-4 h-4 text-pink-500 opacity-50" data-lucide="crown"></i>
</div>
<div className="text-2xl text-white font-light relative z-10">14.2K</div>
<div className="w-full bg-slate-800 h-1 mt-3 rounded-full overflow-hidden relative z-10">
<div className="w-[45%] bg-pink-500 h-full animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black pt-20 pb-12 relative z-10">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="mb-12">
<div className="w-12 h-12 mx-auto mb-6 rounded-full bg-gradient-to-br from-brand-gold to-orange-600 flex items-center justify-center text-black font-bold text-xl">
              V
          </div>
<h2 className="text-2xl md:text-3xl font-medium text-white mb-2">
            "I am using the future."
          </h2>
<p className="text-slate-500 text-sm">
            Powered by AI. Designed for the Elite.
          </p>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-600 uppercase tracking-widest border-t border-white/5 pt-8">
<div>© 2024 VIZENTA AI</div>
<div className="my-4 md:my-0">
            Owned &amp; Curated by
            <span className="text-slate-400">Mehekh Hassan</span>
</div>
<div className="flex gap-6">
<a className="hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-white transition" href="#">Terms</a>
<a className="hover:text-white transition" href="#">Twitter</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
