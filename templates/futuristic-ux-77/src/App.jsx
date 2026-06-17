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
neon: '#00FF66',
dark: '#050505',
panel: '#0A0A0A',
},
fontFamily: {
mono: ['"Space Mono"', 'monospace'],
sans: ['"Inter"', 'sans-serif'],
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'glitch': 'glitch 1s linear infinite',
},
keyframes: {
glitch: {
'2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
'4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
'62%': { transform: 'translate(0,0) skew(5deg)' },
}
}
}
}
}



        // Icons
        lucide.createIcons();

        // Matrix Rain Implementation
        const canvas = document.getElementById('matrix-rain');
        const ctx = canvas.getContext('2d');

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const columns = Math.floor(width / 20);
        const drops = [];
        // Katakana + Latin characters
        const chars = '01アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
        
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100; 
        }

        function drawRain() {
            // Fade effect
            ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = '#00FF66';
            ctx.font = '14px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * 20, drops[i] * 20);

                // Reset drop to top randomly
                if (drops[i] * 20 > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        setInterval(drawRain, 50);

        // Resize handler
        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
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
      

<canvas className="fixed top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none" id="matrix-rain"></canvas>

<div className="scanlines"></div>

<div className="relative z-10 max-w-[1600px] mx-auto p-4 md:p-8 lg:p-12 min-h-screen grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

<aside className="lg:col-span-3 flex flex-col gap-8 h-fit lg:sticky lg:top-12">

<div className="relative group">
<div className="absolute -inset-0.5 bg-neon/20 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
<div className="relative bg-panel border border-white/10 p-6 rounded-lg backdrop-blur-sm overflow-hidden">
<div className="absolute top-0 right-0 p-3 opacity-50">
<i className="w-4 h-4 text-neon" data-lucide="cpu"></i>
</div>

<div className="flex justify-center mb-6 relative">
<div className="w-32 h-32 rounded-full border-2 border-neon/30 p-1 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-1 bg-neon/50 animate-[scan_2s_linear_infinite] shadow-[0_0_10px_#00FF66]"></div>
<img alt="Profile" className="w-full h-full object-cover rounded-full hologram-img" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="text-center font-mono">
<h1 className="text-xl tracking-tight font-semibold text-white">NEO_DESIGNER</h1>
<p className="text-xs text-neon mt-1 tracking-widest uppercase">Lvl 99 UX Architect</p>
</div>
<div className="mt-6 space-y-3 border-t border-white/10 pt-4">
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-500">STATUS</span>
<span className="text-neon animate-pulse">ONLINE</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-500">LOCATION</span>
<span className="text-neutral-300">ZION_MAINFRAME</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-500">AVAILABILITY</span>
<span className="text-neutral-300">OPEN FOR CONTRACTS</span>
</div>
</div>

<div className="mt-6 flex justify-center gap-4">
<a className="text-neutral-500 hover:text-neon transition-colors" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a className="text-neutral-500 hover:text-neon transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-neutral-500 hover:text-neon transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="text-neutral-500 hover:text-neon transition-colors" href="#"><i className="w-4 h-4" data-lucide="mail"></i></a>
</div>
</div>
</div>

<nav className="hidden lg:flex flex-col gap-2 font-mono text-xs">
<a className="flex items-center gap-3 p-3 rounded border border-transparent hover:border-neon/30 hover:bg-neon/5 hover:text-neon transition-all group" href="#about">
<span className="text-neon/50 group-hover:text-neon">01</span> // ABOUT_ME
                </a>
<a className="flex items-center gap-3 p-3 rounded border border-transparent hover:border-neon/30 hover:bg-neon/5 hover:text-neon transition-all group" href="#cases">
<span className="text-neon/50 group-hover:text-neon">02</span> // CASE_STUDIES
                </a>
<a className="flex items-center gap-3 p-3 rounded border border-transparent hover:border-neon/30 hover:bg-neon/5 hover:text-neon transition-all group" href="#skills">
<span className="text-neon/50 group-hover:text-neon">03</span> // SKILL_MATRIX
                </a>
</nav>
</aside>

<main className="lg:col-span-6 flex flex-col gap-16">

<section className="flex flex-col justify-center min-h-[50vh] pt-8 lg:pt-0">
<div className="mb-4 flex items-center gap-2">
<span className="h-px w-8 bg-neon"></span>
<span className="font-mono text-xs text-neon tracking-widest">INITIALIZING SEQUENCE...</span>
</div>
<h2 className="text-3xl md:text-5xl font-mono tracking-tight font-semibold text-white leading-[1.1] mb-6">
                    Wake up, User.<br/>
<span className="text-neutral-500">I design systems that</span> <span className="text-neon underline decoration-neon/30 underline-offset-4 decoration-1">break the simulation.</span>
</h2>
<p className="text-neutral-400 text-base md:text-lg max-w-lg leading-relaxed mb-8">
                    Crafting immersive digital experiences with laser-focused usability and aesthetic precision. Specialized in complex SaaS dashboards, fintech interfaces, and futuristic UI interactions.
                </p>
<div className="flex flex-wrap gap-4">
<button className="group relative px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider overflow-hidden">
<span className="absolute inset-0 border border-neon"></span>
<span className="absolute inset-0 bg-neon translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
<span className="relative text-neon group-hover:text-black transition-colors duration-300 flex items-center gap-2">
                            VIEW_PROJECTS <i className="w-3 h-3" data-lucide="arrow-right"></i>
</span>
</button>
<button className="px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
<i className="w-3 h-3" data-lucide="download"></i> DOWNLOAD_CV
                    </button>
</div>
</section>

<section id="cases">
<div className="flex items-end justify-between mb-8 border-b border-white/10 pb-2">
<h3 className="font-mono text-lg text-white font-semibold flex items-center gap-2">
<i className="w-4 h-4 text-neon" data-lucide="folder-open"></i> SELECTED_FILES
                    </h3>
<span className="font-mono text-xs text-neutral-600">DIR: /WORK/PUBLIC</span>
</div>
<div className="grid grid-cols-1 gap-8">

<article className="group relative bg-panel/50 border border-white/10 rounded-lg overflow-hidden hover:border-neon/40 transition-colors duration-500">
<div className="aspect-video w-full overflow-hidden bg-black relative">

<div className="absolute inset-0 bg-neon/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
<img alt="Dashboard UI" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-4 left-4 z-20 flex gap-2">
<span className="bg-black/80 backdrop-blur border border-white/10 text-[10px] font-mono px-2 py-1 rounded text-neon">FINTECH</span>
<span className="bg-black/80 backdrop-blur border border-white/10 text-[10px] font-mono px-2 py-1 rounded text-neutral-300">2024</span>
</div>
</div>
<div className="p-6">
<h4 className="text-xl font-semibold text-white mb-2 group-hover:text-neon transition-colors font-mono">Quantum Analytics Dashboard</h4>
<p className="text-neutral-400 text-sm leading-relaxed mb-4">A high-frequency trading platform redesign focusing on data density and micro-interactions for rapid decision making.</p>
<a className="inline-flex items-center text-xs font-mono text-neon hover:text-white transition-colors uppercase tracking-wider" href="#">
                                Access_File <i className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" data-lucide="chevron-right"></i>
</a>
</div>
</article>

<article className="group relative bg-panel/50 border border-white/10 rounded-lg overflow-hidden hover:border-neon/40 transition-colors duration-500">
<div className="aspect-video w-full overflow-hidden bg-black relative">
<div className="absolute inset-0 bg-neon/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
<img alt="Mobile App" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 z-20 flex gap-2">
<span className="bg-black/80 backdrop-blur border border-white/10 text-[10px] font-mono px-2 py-1 rounded text-neon">MOBILE_OS</span>
<span className="bg-black/80 backdrop-blur border border-white/10 text-[10px] font-mono px-2 py-1 rounded text-neutral-300">2023</span>
</div>
</div>
<div className="p-6">
<h4 className="text-xl font-semibold text-white mb-2 group-hover:text-neon transition-colors font-mono">Neural Link Interface</h4>
<p className="text-neutral-400 text-sm leading-relaxed mb-4">Conceptual operating system for AR glasses, utilizing voice commands and eye-tracking navigation patterns.</p>
<a className="inline-flex items-center text-xs font-mono text-neon hover:text-white transition-colors uppercase tracking-wider" href="#">
                                Access_File <i className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" data-lucide="chevron-right"></i>
</a>
</div>
</article>
</div>
</section>

<section id="about">
<div className="flex items-end justify-between mb-8 border-b border-white/10 pb-2">
<h3 className="font-mono text-lg text-white font-semibold flex items-center gap-2">
<i className="w-4 h-4 text-neon" data-lucide="history"></i> DATA_LOGS
                    </h3>
</div>
<div className="relative pl-8 border-l border-white/10 space-y-8">

<div className="relative group">
<div className="absolute -left-[37px] top-1.5 w-4 h-4 bg-dark border border-neon rounded-full flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse"></div>
</div>
<span className="text-xs font-mono text-neon mb-1 block">2023 - PRESENT</span>
<h4 className="text-white font-semibold mb-1">Senior Product Designer // CyberCorp</h4>
<p className="text-neutral-500 text-xs">Leading the design system architecture for enterprise-grade security tools.</p>
</div>

<div className="relative group">
<div className="absolute -left-[37px] top-1.5 w-4 h-4 bg-dark border border-neutral-600 group-hover:border-neon rounded-full transition-colors"></div>
<span className="text-xs font-mono text-neutral-500 mb-1 block">2021 - 2023</span>
<h4 className="text-neutral-300 font-semibold mb-1">UI Developer // MetaStruct</h4>
<p className="text-neutral-500 text-xs">Bridged the gap between design and code using React and WebGL.</p>
</div>

<div className="relative group">
<div className="absolute -left-[37px] top-1.5 w-4 h-4 bg-dark border border-neutral-600 group-hover:border-neon rounded-full transition-colors"></div>
<span className="text-xs font-mono text-neutral-500 mb-1 block">2019 - 2021</span>
<h4 className="text-neutral-300 font-semibold mb-1">Freelance Operative</h4>
<p className="text-neutral-500 text-xs">executed design contracts for various startups in the crypto sector.</p>
</div>
</div>
</section>
</main>

<aside className="lg:col-span-3 flex flex-col gap-10">

<div className="bg-panel border border-white/5 p-6 rounded-lg backdrop-blur-sm" id="skills">
<h3 className="font-mono text-xs text-neutral-500 mb-6 flex items-center gap-2">
<i className="w-3 h-3" data-lucide="terminal"></i> MODULES_LOADED
                </h3>
<div className="space-y-5">

<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-neutral-300">Figma</span>
<span className="text-neon font-mono">98%</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-neon w-[98%] shadow-[0_0_8px_#00FF66]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-neutral-300">Prototyping</span>
<span className="text-neon font-mono">92%</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-neon w-[92%] shadow-[0_0_8px_#00FF66]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-neutral-300">Frontend (HTML/CSS)</span>
<span className="text-neon font-mono">85%</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-neon w-[85%] shadow-[0_0_8px_#00FF66]"></div>
</div>
</div>
</div>
<div className="mt-6 flex flex-wrap gap-2">
<span className="px-2 py-1 border border-white/10 rounded text-[10px] text-neutral-400 hover:text-neon hover:border-neon/30 transition-colors cursor-default">React</span>
<span className="px-2 py-1 border border-white/10 rounded text-[10px] text-neutral-400 hover:text-neon hover:border-neon/30 transition-colors cursor-default">Tailwind</span>
<span className="px-2 py-1 border border-white/10 rounded text-[10px] text-neutral-400 hover:text-neon hover:border-neon/30 transition-colors cursor-default">WebGL</span>
<span className="px-2 py-1 border border-white/10 rounded text-[10px] text-neutral-400 hover:text-neon hover:border-neon/30 transition-colors cursor-default">Blender</span>
</div>
</div>

<div className="bg-panel border border-white/5 p-6 rounded-lg backdrop-blur-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-neon/5 rounded-full blur-2xl -mr-8 -mt-8"></div>
<h3 className="font-mono text-xs text-neutral-500 mb-6 flex items-center gap-2">
<i className="w-3 h-3" data-lucide="send"></i> TRANSMIT_MESSAGE
                </h3>
<form className="space-y-4">
<div className="group">
<label className="block text-[10px] font-mono text-neutral-500 mb-1 group-focus-within:text-neon transition-colors">IDENTITY</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-white focus:outline-none focus:border-neon transition-colors placeholder-neutral-700" placeholder="Enter name..." type="text"/>
</div>
<div className="group">
<label className="block text-[10px] font-mono text-neutral-500 mb-1 group-focus-within:text-neon transition-colors">FREQUENCY (EMAIL)</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-white focus:outline-none focus:border-neon transition-colors placeholder-neutral-700" placeholder="Enter email..." type="email"/>
</div>
<div className="group">
<label className="block text-[10px] font-mono text-neutral-500 mb-1 group-focus-within:text-neon transition-colors">PAYLOAD</label>
<textarea className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-white focus:outline-none focus:border-neon transition-colors placeholder-neutral-700 resize-none" placeholder="Message content..." rows="3"></textarea>
</div>
<button className="w-full mt-2 py-3 border border-neon/30 text-neon font-mono text-xs uppercase hover:bg-neon hover:text-black transition-all duration-300 flex justify-center items-center gap-2 group" type="button">
<span className="group-hover:animate-pulse">SEND_TRANSMISSION</span>
</button>
</form>
</div>

<div className="text-[10px] text-neutral-600 font-mono text-center lg:text-left">
<p>SYSTEM_VER: 2.0.4</p>
<p>© 2024 DESIGN_MATRIX. ALL RIGHTS RESERVED.</p>
</div>
</aside>
</div>


    </>
  );
}
