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
'void': '#030303',
'signal': '#CCFF00',
'zinc': {
850: '#1f1f22',
900: '#18181b',
950: '#09090b',
}
},
fontFamily: {
'display': ['"Space Grotesk"', 'sans-serif'],
'mono': ['"JetBrains Mono"', 'monospace'],
},
backgroundImage: {
'noise': "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')",
'grid-fade': 'linear-gradient(to bottom, transparent, #030303)',
},
animation: {
'spin-slow': 'spin 30s linear infinite',
'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        // --- LOADER LOGIC ---
        const loader = document.getElementById('loader');
        const loaderText = document.getElementById('loader-text');
        
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.floor(Math.random() * 10) + 1;
            if(progress > 100) progress = 100;
            loaderText.innerText = progress < 100 ? `0${progress}` : '100';
            
            if(progress === 100) {
                clearInterval(interval);
                setTimeout(() => {
                    loader.style.transform = 'translateY(-100%)';
                    document.body.classList.remove('loading');
                }, 500);
            }
        }, 30);

        // --- CURSOR LOGIC ---
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorRing = document.querySelector('.cursor-ring');

        if (window.matchMedia("(pointer: fine)").matches) {
            let mouseX = 0, mouseY = 0;
            let ringX = 0, ringY = 0;

            window.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
            });

            const animateRing = () => {
                ringX += (mouseX - ringX) * 0.15;
                ringY += (mouseY - ringY) * 0.15;
                cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
                requestAnimationFrame(animateRing);
            }
            animateRing();

            // Interactive Elements
            document.querySelectorAll('a, button, .spotlight-card').forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursorRing.style.width = '50px';
                    cursorRing.style.height = '50px';
                    cursorRing.style.backgroundColor = 'rgba(204, 255, 0, 0.1)';
                    cursorRing.style.borderColor = 'transparent';
                });
                el.addEventListener('mouseleave', () => {
                    cursorRing.style.width = '20px';
                    cursorRing.style.height = '20px';
                    cursorRing.style.backgroundColor = 'transparent';
                    cursorRing.style.borderColor = 'rgba(204, 255, 0, 0.5)';
                });
            });
        }

        // --- SPOTLIGHT EFFECT ---
        const cards = document.querySelectorAll('.spotlight-card');
        window.addEventListener('mousemove', e => {
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            });
        });

        // --- GSAP ANIMATIONS ---
        gsap.registerPlugin(ScrollTrigger);

        // Scroll reveal for sections
        gsap.utils.toArray('section').forEach(section => {
            gsap.from(section.querySelectorAll('h2, h3, p'), {
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            });
        });

        // Hero Title Glitch Effect on Hover
        const heroTitle = document.querySelector('.hero-title');
        heroTitle.addEventListener('mouseover', () => {
            gsap.to(heroTitle, {
                duration: 0.1,
                skewX: 10,
                color: "#CCFF00",
                onComplete: () => {
                    gsap.to(heroTitle, {
                        duration: 0.1,
                        skewX: 0,
                        color: "transparent" // Returns to background-clip
                    })
                }
            })
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
      

<div className="noise"></div>
<div className="scanlines"></div>
<div className="vignette"></div>

<div className="cursor-dot hidden md:block"></div>
<div className="cursor-ring hidden md:block"></div>

<div className="loader" id="loader">
<div className="flex flex-col items-center gap-4">
<div className="font-mono text-signal text-xs tracking-[0.5em] uppercase">System Boot</div>
<div className="w-48 h-[1px] bg-zinc-800 relative overflow-hidden">
<div className="absolute inset-0 bg-signal w-full origin-left animate-[grow_1.5s_ease-in-out]"></div>
</div>
<div className="font-display font-bold text-6xl text-white tracking-tighter" id="loader-text">000</div>
</div>
</div>

<nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-gradient-to-b from-[#030303] to-transparent">
<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-10 h-10 border border-zinc-800 bg-zinc-900/50 flex items-center justify-center clip-corner group-hover:border-signal/50 transition-colors">
<iconify-icon className="text-signal text-lg animate-spin-slow" icon="lucide:aperture"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-display font-bold text-white tracking-tight leading-none group-hover:text-signal transition-colors">COHORT</span>
<span className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase">Ver. 4.0.2 // Active</span>
</div>
</div>
<div className="hidden md:flex items-center gap-1 bg-zinc-900/40 backdrop-blur-md p-1 border border-white/5 rounded-none clip-corner">
<a className="px-6 py-2 text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-white/5 transition-all" href="#manifesto">Protocol</a>
<a className="px-6 py-2 text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-white/5 transition-all" href="#work">Operations</a>
<a className="px-6 py-2 text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-white/5 transition-all" href="#arsenal">Arsenal</a>
</div>
<a className="hidden md:flex items-center gap-3 px-6 py-2.5 bg-signal text-black font-mono text-[11px] font-bold tracking-widest uppercase hover:bg-white transition-colors clip-corner btn-glitch" href="#contact">
<span className="relative z-10">Deploy Capital</span>
<iconify-icon className="relative z-10" icon="lucide:arrow-up-right"></iconify-icon>
</a>
</nav>
<main>

<section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Signal" className="w-full h-full object-cover opacity-50 mix-blend-luminosity scale-105 animate-[pulse_10s_ease-in-out_infinite]" src="https://i.ibb.co/WWhbDQRw/ezgif-frame-001-2.png"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/50 to-[#030303]/30"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_100%)]"></div>
</div>

<div className="grid-floor opacity-40"></div>

<div className="atom">
<div className="ring w-[600px] h-[600px] opacity-20"></div>
<div className="ring w-[400px] h-[400px] border-dashed opacity-30 animate-spin-slow" style={{animationDuration: '40s'}}></div>
<div className="orbit w-[500px] h-[500px] opacity-30" style={{animationDuration: '15s', transform: 'rotateX(70deg)'}}></div>
<div className="orbit w-[500px] h-[500px] opacity-30" style={{animationDuration: '25s', transform: 'rotateY(70deg)'}}></div>
</div>

<div className="relative z-20 flex flex-col items-center text-center px-4 pt-10">

<div className="mb-6 opacity-0 animate-[fadeInUp_0.5s_ease-out_1.2s_forwards]">
<div className="inline-flex items-center gap-3 px-4 py-1.5 border border-zinc-800 bg-black/40 backdrop-blur-sm clip-corner">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-signal"></span>
</span>
<span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest">
                            Systems Nominal // Ready to kill
                        </span>
</div>
</div>

<h1 className="font-display font-bold leading-[0.8] tracking-tighter mb-8 mix-blend-screen relative perspective-1000">
<div className="overflow-hidden">
<span className="block text-[13vw] md:text-[11vw] hero-title animate-[slideUp_1s_cubic-bezier(0.16,1,0.3,1)_0.5s_both]">
                            NARRATIVE
                        </span>
</div>
<div className="overflow-hidden flex items-center justify-center gap-2 md:gap-6">
<span className="block text-[13vw] md:text-[11vw] text-stroke-white opacity-40 animate-[slideUp_1s_cubic-bezier(0.16,1,0.3,1)_0.6s_both]">
                            WARFARE
                        </span>
</div>
</h1>

<div className="max-w-xl mx-auto space-y-8 opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
<div className="flex items-center gap-4 justify-center">
<div className="h-px w-12 bg-zinc-700"></div>
<p className="font-mono text-xs md:text-sm text-zinc-400 text-center uppercase tracking-widest leading-relaxed">
                            We don't buy ads. We weaponize culture.<br/>
<span className="text-white">Liquidity flows where attention goes.</span>
</p>
<div className="h-px w-12 bg-zinc-700"></div>
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-6">
<a className="group relative w-64 h-14 bg-signal text-black clip-corner flex items-center justify-center overflow-hidden btn-glitch" href="#work">
<span className="relative z-10 font-mono text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-3">
                                Initiate Protocol
                                <iconify-icon icon="lucide:chevron-right"></iconify-icon>
</span>
</a>
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center text-[10px] text-zinc-500 font-mono">01</div>
<div className="w-8 h-8 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center text-[10px] text-zinc-500 font-mono">02</div>
<div className="w-8 h-8 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center text-[10px] text-zinc-500 font-mono">+</div>
</div>
<span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                                Limited Intake: <span className="text-signal">Open</span>
</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-8 hidden lg:block font-mono text-[10px] text-zinc-600 uppercase tracking-widest space-y-1">
<div>Coords: 34.0522° N, 118.2437° W</div>
<div>Sector: DeFi // L1 // Infra</div>
</div>
<div className="absolute bottom-8 right-8 hidden lg:block">
<div className="w-32 h-32 border border-zinc-800 rounded-full flex items-center justify-center animate-spin-slow">
<div className="w-24 h-24 border border-zinc-800 border-dashed rounded-full"></div>
</div>
</div>
</section>

<div className="py-6 bg-signal border-y border-black relative z-30 -skew-y-1 origin-left overflow-hidden">
<div className="marquee-wrapper">
<div className="marquee-track">
<span className="font-display text-4xl font-bold uppercase tracking-tight text-black mx-8">/// $12.8B TVL CAPTURED /// ZERO AD SPEND /// ASYMMETRIC UPSIDE /// PSY-OPS GRADE MARKETING /// $12.8B TVL CAPTURED /// ZERO AD SPEND /// ASYMMETRIC UPSIDE /// PSY-OPS GRADE MARKETING</span>
<span className="font-display text-4xl font-bold uppercase tracking-tight text-black mx-8">/// $12.8B TVL CAPTURED /// ZERO AD SPEND /// ASYMMETRIC UPSIDE /// PSY-OPS GRADE MARKETING /// $12.8B TVL CAPTURED /// ZERO AD SPEND /// ASYMMETRIC UPSIDE /// PSY-OPS GRADE MARKETING</span>
</div>
</div>
</div>

<section className="py-32 relative border-b border-zinc-900" id="manifesto">
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">

<div className="md:col-span-4">
<div className="sticky top-32">
<span className="text-signal font-mono text-xs tracking-widest uppercase mb-4 block">/// The Anomaly</span>
<h2 className="font-display text-5xl text-white font-medium leading-[0.9] mb-8">
                                UNLIKE<br/>
<span className="text-zinc-600">THE REST.</span>
</h2>
<p className="font-mono text-xs text-zinc-500 leading-relaxed uppercase tracking-wide">
                                Data encryption: Standard<br/>
                                Read Clearance: Public
                            </p>
</div>
</div>

<div className="md:col-span-8">
<div className="glass-panel p-8 md:p-12 clip-corner-tl relative group">

<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-signal to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="space-y-10">
<div>
<h3 className="font-mono text-sm text-zinc-400 uppercase tracking-widest mb-4 border-l-2 border-signal pl-4">Identification</h3>
<p className="font-display text-2xl md:text-3xl text-white leading-tight">
                                        Cohort is a different kind of agency. You've probably received plenty of messages from agencies offering help. 
                                        <span className="text-zinc-500">Most of them fail for a simple reason: they're unfocused.</span>
</p>
</div>
<div>
<h3 className="font-mono text-sm text-zinc-400 uppercase tracking-widest mb-4 border-l-2 border-zinc-700 pl-4 group-hover:border-signal transition-colors">Modus Operandi</h3>
<p className="font-display text-2xl md:text-3xl text-white leading-tight">
                                        We don't work like that. Cohort works with a <span className="text-signal underline decoration-1 underline-offset-4">very small number of teams</span> and treats them as partners.
                                    </p>
</div>
<div>
<h3 className="font-mono text-sm text-zinc-400 uppercase tracking-widest mb-4 border-l-2 border-zinc-700 pl-4 group-hover:border-signal transition-colors">The Promise</h3>
<p className="font-display text-2xl md:text-3xl text-white leading-tight">
                                        When we take something on, we treat the outcome as <span className="bg-white/10 px-1 text-white">our responsibility</span>. If we work together, your progress becomes something we care about personally.
                                    </p>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
<span>Signed: Cohort Command</span>
<iconify-icon className="text-2xl text-zinc-700" icon="lucide:fingerprint"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-[#050505] overflow-hidden" id="work">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
<div>
<span className="text-signal font-mono text-xs tracking-widest uppercase mb-2 block">/// Confirmed Kills</span>
<h2 className="font-display text-6xl md:text-8xl text-white font-medium leading-[0.85] tracking-tight">
                            CASE<br/><span className="text-stroke-white opacity-30">FILES</span>
</h2>
</div>
<div className="mt-8 md:mt-0">
<a className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 hover:text-signal transition-colors uppercase tracking-widest group" href="#">
                            View All Operations
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="spotlight-card group border border-zinc-800 hover:border-zinc-600 transition-colors duration-500 overflow-hidden">
<div className="aspect-[16/10] overflow-hidden relative">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&amp;w=2832&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 mix-blend-luminosity transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
<div className="absolute top-6 left-6 px-3 py-1 bg-black/50 backdrop-blur border border-white/10 font-mono text-[9px] text-signal uppercase tracking-widest">
                                Status: Market Leader
                             </div>
</div>
<div className="p-8 relative">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="font-display text-3xl text-white mb-1">ECLIPSE</h3>
<div className="font-mono text-xs text-zinc-500 uppercase tracking-widest">L2 Scaling Solution</div>
</div>
<div className="text-right">
<div className="font-display text-2xl text-signal">148x</div>
<div className="font-mono text-[9px] text-zinc-600 uppercase">Oversubscription</div>
</div>
</div>
<p className="font-mono text-xs text-zinc-400 leading-relaxed mb-6 border-l border-zinc-800 pl-4">
                                Injected a pure greed virus into the ecosystem. Logic filters bypassed. FOMO weaponized to create mathematical inevitability.
                            </p>
<div className="flex items-center gap-4 pt-6 border-t border-white/5">
<span className="text-[10px] font-mono text-zinc-600 uppercase">Spend: $0.00</span>
<span className="text-[10px] font-mono text-zinc-600 uppercase">Social Vol: +4000%</span>
</div>
</div>
</div>

<div className="spotlight-card group border border-zinc-800 hover:border-zinc-600 transition-colors duration-500 overflow-hidden mt-0 md:mt-24">
<div className="aspect-[16/10] overflow-hidden relative">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=2874&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 mix-blend-luminosity transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
<div className="absolute top-6 left-6 px-3 py-1 bg-black/50 backdrop-blur border border-white/10 font-mono text-[9px] text-signal uppercase tracking-widest">
                                Status: Unicorn
                             </div>
</div>
<div className="p-8 relative">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="font-display text-3xl text-white mb-1">VELOCITY</h3>
<div className="font-mono text-xs text-zinc-500 uppercase tracking-widest">DeFi Infrastructure</div>
</div>
<div className="text-right">
<div className="font-display text-2xl text-signal">$1.2B</div>
<div className="font-mono text-[9px] text-zinc-600 uppercase">FDV Generated</div>
</div>
</div>
<p className="font-mono text-xs text-zinc-400 leading-relaxed mb-6 border-l border-zinc-800 pl-4">
                                Full stack memetic deployment. Engineered an echo chamber so dense it warped reality for 500+ KOLs simultaneously.
                            </p>
<div className="flex items-center gap-4 pt-6 border-t border-white/5">
<span className="text-[10px] font-mono text-zinc-600 uppercase">Retention: 94%</span>
<span className="text-[10px] font-mono text-zinc-600 uppercase">Organic Growth</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-void border-t border-zinc-900" id="arsenal">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
<div className="lg:col-span-1">
<h2 className="font-display text-5xl text-white font-medium leading-[0.9] mb-8 sticky top-32">
                            THE<br/>
<span className="text-zinc-700">ARSENAL.</span>
</h2>
</div>
<div className="lg:col-span-2 space-y-4">

<div className="group relative bg-[#080808] border border-zinc-800 p-8 hover:bg-zinc-900/30 transition-all duration-300">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-signal transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
<div className="flex flex-col md:flex-row md:items-center gap-6">
<div className="w-16 h-16 bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-zinc-500 group-hover:text-signal transition-colors" icon="lucide:biohazard"></iconify-icon>
</div>
<div>
<h3 className="font-display text-2xl text-white mb-2">Memetic Injection</h3>
<p className="font-mono text-xs text-zinc-500 leading-relaxed max-w-md">
                                        Self-replicating cognitive viruses designed to bypass critical thinking and infect the host network immediately.
                                    </p>
</div>
</div>
</div>

<div className="group relative bg-[#080808] border border-zinc-800 p-8 hover:bg-zinc-900/30 transition-all duration-300">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-signal transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top delay-75"></div>
<div className="flex flex-col md:flex-row md:items-center gap-6">
<div className="w-16 h-16 bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-zinc-500 group-hover:text-signal transition-colors" icon="lucide:network"></iconify-icon>
</div>
<div>
<h3 className="font-display text-2xl text-white mb-2">Hive Mind Sync</h3>
<p className="font-mono text-xs text-zinc-500 leading-relaxed max-w-md">
                                        Simultaneous narrative injection into 500+ tier-one nodes. We force consensus through orchestrated echo chambers.
                                    </p>
</div>
</div>
</div>

<div className="group relative bg-[#080808] border border-zinc-800 p-8 hover:bg-zinc-900/30 transition-all duration-300">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-signal transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top delay-100"></div>
<div className="flex flex-col md:flex-row md:items-center gap-6">
<div className="w-16 h-16 bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-zinc-500 group-hover:text-signal transition-colors" icon="lucide:magnet"></iconify-icon>
</div>
<div>
<h3 className="font-display text-2xl text-white mb-2">Incentive Traps</h3>
<p className="font-mono text-xs text-zinc-500 leading-relaxed max-w-md">
                                        Retention is not a choice; it's a mathematical certainty. We design protocol-level hooks that make exit impossible.
                                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#030303] border-t border-zinc-900" id="contact">

<div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
<div className="relative z-10 max-w-4xl px-6 text-center">
<div className="font-mono text-[10px] text-signal uppercase tracking-[0.3em] mb-12 animate-pulse">
                     /// Cohort 04: Applications Open
                 </div>
<h2 className="font-display text-[10vw] md:text-[8vw] font-bold text-white leading-[0.8] tracking-tighter mb-12 select-none group cursor-default">
                     BECOME THE<br/>
<span className="text-transparent text-stroke-signal group-hover:text-signal transition-colors duration-500">SIGNAL</span>
</h2>
<div className="flex flex-col items-center gap-8">
<p className="font-mono text-zinc-500 text-sm max-w-md leading-relaxed">
                         Noise is the enemy. Clarity is violence.<br/>
                         Secure your timeline before the fork.
                     </p>
<a className="group relative w-full md:w-96 h-20 bg-signal flex items-center justify-center clip-corner overflow-hidden btn-glitch" href="#">
<span className="relative z-10 font-mono text-sm font-bold text-black uppercase tracking-[0.2em] flex items-center gap-4">
                             Initiate Uplink
                             <iconify-icon className="text-xl" icon="lucide:zap"></iconify-icon>
</span>
</a>
</div>
</div>

<div className="absolute bottom-12 w-full px-12 border-t border-zinc-900/50 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-zinc-600 uppercase tracking-widest gap-4">
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">X_Com</a>
<a className="hover:text-white transition-colors" href="#">Telegram</a>
<a className="hover:text-white transition-colors" href="#">Etherscan</a>
</div>
<div>
                     Latency: 12ms // Server: TYO-03
                 </div>
</div>
</section>
</main>


<style>
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
        @keyframes grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
    </style>

    </>
  );
}
