import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#fffbeb',
100: '#fef3c7',
200: '#fde68a',
300: '#fcd34d',
400: '#fbbf24',
500: '#f59e0b',
600: '#d97706',
700: '#b45309',
800: '#92400e',
900: '#78350f',
}
},
animation: {
'text-shimmer': 'text-shimmer 2.5s ease-out infinite alternate',
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
'text-shimmer': {
'0%': { backgroundPosition: '0% 50%' },
'100%': { backgroundPosition: '100% 50%' },
},
'float': {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



(function () {
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.15, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Header Scroll Animation
    window.addEventListener('scroll', () => {
      const container = document.getElementById('header-container');
      const navLinks = document.getElementById('nav-wrapper');
      const signin = document.getElementById('signin-wrapper');
      const btn = document.getElementById('header-btn');
      
      if (window.scrollY > 60) {
        container.classList.add('bg-[#050505]/80', 'border-white/[0.15]', 'shadow-2xl', 'shadow-black/50');
        container.classList.remove('bg-white/[0.03]', 'border-white/10', 'py-2.5');
        container.classList.add('py-1.5', 'pr-1.5');
        
        if (navLinks) {
          navLinks.classList.add('max-w-0', 'opacity-0', 'px-0');
          navLinks.classList.remove('max-w-[500px]', 'opacity-100', 'px-6');
        }
        if (signin) {
          signin.classList.add('max-w-0', 'opacity-0');
          signin.classList.remove('max-w-[100px]', 'opacity-100');
        }
      } else {
        container.classList.remove('bg-[#050505]/80', 'border-white/[0.15]', 'shadow-2xl', 'shadow-black/50', 'py-1.5', 'pr-1.5');
        container.classList.add('bg-white/[0.03]', 'border-white/10', 'py-2.5');
        
        if (navLinks) {
          navLinks.classList.remove('max-w-0', 'opacity-0', 'px-0');
          navLinks.classList.add('max-w-[500px]', 'opacity-100', 'px-6');
        }
        if (signin) {
          signin.classList.remove('max-w-0', 'opacity-0');
          signin.classList.add('max-w-[100px]', 'opacity-100');
        }
      }
    });

    // Scoped Logic for Live Render Tracking Card
    (function() {
      const us = document.getElementById('us-progress');
      const bd = document.getElementById('bd-progress');
      const usPct = document.getElementById('us-pct');
      const bdPct = document.getElementById('bd-pct');
      const targets = { us: 82, bd: 45 };
      let animated = false;

      const animateBars = () => {
        if (animated) return;
        animated = true;
        const dur = 1500;
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / dur);
          const ease = (x) => 1 - Math.pow(1 - x, 3);
          const e = ease(t);
          const usVal = Math.round(targets.us * e);
          const bdVal = Math.round(targets.bd * e);
          if (us && bd) {
            us.style.width = usVal + '%';
            bd.style.width = bdVal + '%';
            usPct.textContent = usVal + '%';
            bdPct.textContent = bdVal + '%';
          }
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      };

      const card = document.getElementById('card-realtime');
      if (card) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((e) => { if (e.isIntersecting) animateBars(); });
        }, { threshold: 0.5 });
        io.observe(card);
      }
    })();

    // Scoped Logic for CDN Sync Card
    (function() {
      const list = document.getElementById('client-list');
      if (!list) return;
      const items = [...list.children];
      items.forEach((li) => list.appendChild(li.cloneNode(true)));
      
      let y = 0;
      const speed = 0.25;
      const step = () => {
        y += speed;
        const setH = items.reduce((h, el) => h + el.offsetHeight, 0);
        if (y >= setH) y = 0;
        list.style.transform = `translateY(-${y}px)`;
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    })();

    // Scoped Logic for Seamless Ecosystem Shimmer
    (function() {
      const shimmer = document.querySelector('.shimmer-effect');
      if (!shimmer) return;
      let x = -96;
      function move() {
        x += 1.5;
        if (x > shimmer.parentElement.clientWidth + 96) x = -96;
        shimmer.style.transform = `translateX(${x}px)`;
        requestAnimationFrame(move);
      }
      requestAnimationFrame(move);
    })();

    // Pricing Toggle Logic
    (function() {
      const toggle = document.getElementById('pricing-toggle');
      if (!toggle) return;
      let isAnnual = false;
      toggle.addEventListener('click', () => {
        isAnnual = !isAnnual;
        const span = toggle.querySelector('span');
        if (isAnnual) {
          span.classList.remove('translate-x-1');
          span.classList.add('translate-x-6');
          toggle.classList.remove('bg-white/10');
          toggle.classList.add('bg-brand-500');
        } else {
          span.classList.remove('translate-x-6');
          span.classList.add('translate-x-1');
          toggle.classList.remove('bg-brand-500');
          toggle.classList.add('bg-white/10');
        }
      });
    })();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-ambient w-[600px] h-[600px] bg-brand-900/20 top-[-200px] left-[-200px]"></div>
<div className="bg-ambient w-[800px] h-[800px] bg-neutral-900/40 top-[20%] right-[-300px]"></div>
<header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[calc(100%-3rem)] sm:max-w-max transition-all duration-500">
<div className="flex items-center justify-between rounded-full bg-white/[0.03] border border-white/10 px-4 py-2.5 sm:px-6 backdrop-blur-xl shadow-none transition-all duration-500 overflow-hidden" id="header-container">
<div className="flex items-center gap-2 cursor-pointer group hover:opacity-80 transition-opacity whitespace-nowrap">
<iconify-icon className="text-brand-400 text-xl group-hover:rotate-12 transition-transform duration-300" icon="solar:star-fall-linear"></iconify-icon>
<span className="text-sm font-medium tracking-tight text-white">LUMINARA</span>
</div>
<div className="hidden md:flex items-center overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] max-w-[500px] opacity-100 px-6" id="nav-wrapper">
<nav className="flex items-center gap-8 text-xs font-medium text-neutral-400 whitespace-nowrap">
<a className="hover:text-white transition-colors hover:-translate-y-0.5 duration-300" href="#products">Products</a>
<a className="hover:text-white transition-colors hover:-translate-y-0.5 duration-300" href="#studio">Studio</a>
<a className="hover:text-white transition-colors hover:-translate-y-0.5 duration-300" href="#showcase">Showcase</a>
<a className="hover:text-white transition-colors hover:-translate-y-0.5 duration-300" href="#pricing">Pricing</a>
</nav>
</div>
<div className="flex items-center pl-2 sm:pl-0">
<div className="hidden sm:block overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] max-w-[100px] opacity-100" id="signin-wrapper">
<a className="text-xs font-medium text-neutral-300 hover:text-white transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap pr-4" href="#">Sign in</a>
</div>
<button className="relative inline-flex items-center justify-center rounded-full bg-white text-black px-4 py-1.5 text-xs font-medium transition-all duration-300 hover:bg-neutral-200 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] whitespace-nowrap" id="header-btn">
          Get Access
        </button>
</div>
</div>
</header>
<main className="pt-32 pb-24">

<section className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-24 text-center flex flex-col items-center" id="home">
<div className="animate-on-scroll [animation:fadeIn_1s_ease-out_0s_both] mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-300 backdrop-blur-md cursor-pointer hover:bg-brand-500/20 transition-colors duration-300">
<iconify-icon className="text-brand-400" icon="solar:magic-stick-3-linear"></iconify-icon>
        Introducing Luminara Engine v2.0
      </div>
<h1 className="animate-on-scroll [animation:animationIn_1s_ease-out_0.1s_both] max-w-4xl text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.1]">
        Design that <br className="hidden sm:block"/>
<span className="text-gradient-gold animate-text-shimmer">defies gravity.</span>
</h1>
<p className="animate-on-scroll [animation:animationIn_1s_ease-out_0.2s_both] mt-6 max-w-2xl text-sm md:text-base text-neutral-400 leading-relaxed font-light">
        A bespoke suite of digital assets and immersive environments crafted for visionaries. Elevate your brand with cinematic motion and pixel-perfect clarity.
      </p>
<div className="animate-on-scroll [animation:animationIn_1s_ease-out_0.3s_both] mt-10 flex flex-col sm:flex-row items-center gap-4">
<button className="btn-premium w-full sm:w-auto">
<div className="points_wrapper">
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
</div>
<span className="btn-premium-inner text-xs font-medium tracking-normal">
            Start Crafting
            <iconify-icon className="text-brand-400 text-sm transition-transform duration-300 btn-icon" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
<button className="group relative inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-medium text-neutral-300 transition-all duration-300 hover:text-white hover:bg-white/5 active:scale-95">
<span className="relative z-10 flex items-center gap-2">
<iconify-icon className="text-base group-hover:text-brand-400 transition-colors duration-300" icon="solar:play-circle-linear"></iconify-icon>
            View Showreel
          </span>
</button>
</div>

<div className="animate-on-scroll [animation:animationIn_1.2s_ease-out_0.5s_both] mt-20 w-full max-w-6xl relative perspective-1000">
<div className="absolute inset-0 bg-brand-500/10 blur-[100px] rounded-full scale-75 transform -translate-y-10"></div>
<div className="glass-panel rounded-2xl overflow-hidden relative z-10 transform-gpu hover:scale-[1.01] transition-transform duration-700 ease-out shadow-2xl shadow-black/80 ring-1 ring-white/5">
<div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3 bg-black/40">
<div className="flex items-center gap-3">
<div className="flex gap-1.5">
<div className="h-2 w-2 rounded-full bg-white/20"></div>
<div className="h-2 w-2 rounded-full bg-white/20"></div>
<div className="h-2 w-2 rounded-full bg-white/20"></div>
</div>
<div className="hidden sm:flex items-center gap-2 rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-neutral-400 border border-white/5">
<iconify-icon icon="solar:layers-linear"></iconify-icon>
                Project: Obsidian
              </div>
</div>
<div className="flex items-center gap-3 text-neutral-400 text-sm">
<iconify-icon className="hover:text-white cursor-pointer transition-colors hover:scale-110 active:scale-95" icon="solar:undo-left-linear"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer transition-colors hover:scale-110 active:scale-95" icon="solar:redo-right-linear"></iconify-icon>
<div className="w-px h-4 bg-white/10 mx-1"></div>
<button className="rounded-md bg-white/10 px-3 py-1 text-xs font-medium text-white hover:bg-white/20 transition-all active:scale-95">Export</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px] bg-gradient-to-br from-[#0a0a0a] to-[#050505]">
<div className="hidden lg:block lg:col-span-3 border-r border-white/[0.06] p-4">
<div className="space-y-6">
<div>
<div className="text-xs font-medium tracking-tight text-neutral-500 mb-3 uppercase">Hierarchy</div>
<ul className="space-y-1.5 text-xs text-neutral-400">
<li className="flex items-center gap-2 rounded-md bg-brand-500/10 text-brand-200 px-2 py-1.5 border border-brand-500/20 cursor-pointer hover:bg-brand-500/20 transition-colors">
<iconify-icon icon="solar:monitor-camera-linear"></iconify-icon>
                      Main Scene
                    </li>
<li className="flex items-center gap-2 rounded-md px-2 py-1.5 hover:bg-white/5 cursor-pointer transition-colors ml-4">
<iconify-icon icon="solar:box-linear"></iconify-icon>
                      Abstract_Mesh_01
                    </li>
<li className="flex items-center gap-2 rounded-md px-2 py-1.5 hover:bg-white/5 cursor-pointer transition-colors ml-4">
<iconify-icon icon="solar:sun-linear"></iconify-icon>
                      Ambient_Light
                    </li>
<li className="flex items-center gap-2 rounded-md px-2 py-1.5 hover:bg-white/5 cursor-pointer transition-colors ml-4">
<iconify-icon icon="solar:camera-linear"></iconify-icon>
                      Perspective_Cam
                    </li>
</ul>
</div>
<div>
<div className="text-xs font-medium tracking-tight text-neutral-500 mb-3 uppercase">Materials</div>
<div className="grid grid-cols-4 gap-2">
<div className="aspect-square rounded-full bg-gradient-to-tr from-neutral-800 to-neutral-400 border border-white/10 hover:scale-110 transition-transform cursor-pointer shadow-lg shadow-black/50"></div>
<div className="aspect-square rounded-full bg-gradient-to-tr from-brand-900 to-brand-400 border border-brand-500/30 ring-1 ring-brand-500/50 hover:scale-110 transition-transform cursor-pointer shadow-lg shadow-brand-500/20"></div>
<div className="aspect-square rounded-full bg-gradient-to-tr from-slate-900 to-blue-900 border border-white/10 hover:scale-110 transition-transform cursor-pointer shadow-lg shadow-black/50"></div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-6 relative flex items-center justify-center p-8 overflow-hidden group">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsLCAyNTUsIDAuMDUpIi8+PC9zdmc+')] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
<div className="relative w-64 h-64 animate-float">
<div className="absolute inset-0 bg-gradient-to-tr from-brand-600/40 to-transparent rounded-full blur-2xl"></div>
<div className="absolute inset-4 rounded-3xl border border-white/20 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl flex items-center justify-center shadow-2xl transform rotate-12 group-hover:rotate-0 transition-transform duration-1000 ease-out">
<div className="w-32 h-32 rounded-full border border-brand-400/30 bg-gradient-to-tr from-brand-900/50 to-brand-400/20 backdrop-blur-md shadow-[inset_0_0_20px_rgba(251,191,36,0.2)] flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-transform duration-1000 ease-out delay-75">
<iconify-icon className="text-4xl text-brand-300 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]" icon="solar:star-fall-linear"></iconify-icon>
</div>
</div>
</div>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full bg-white/5 border border-white/10 p-1 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="p-2 text-neutral-400 hover:text-white rounded-full hover:bg-white/10 transition-all active:scale-90"><iconify-icon icon="solar:move-linear"></iconify-icon></button>
<button className="p-2 text-neutral-400 hover:text-white rounded-full hover:bg-white/10 transition-all active:scale-90"><iconify-icon icon="solar:maximize-linear"></iconify-icon></button>
<div className="w-px h-4 bg-white/10 mx-1"></div>
<span className="px-2 text-xs text-neutral-400">100%</span>
</div>
</div>
<div className="hidden lg:block lg:col-span-3 border-l border-white/[0.06] p-4 bg-black/20">
<div className="flex items-center justify-between mb-4 pb-2 border-b border-white/[0.06]">
<span className="text-xs font-medium tracking-tight text-neutral-500 uppercase">Properties</span>
<iconify-icon className="text-neutral-400" icon="solar:tuning-square-2-linear"></iconify-icon>
</div>
<div className="space-y-4 text-xs text-neutral-300">
<div className="space-y-1.5">
<div className="flex justify-between">
<span className="text-neutral-500">Transform</span>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="flex items-center gap-2 bg-white/5 border border-white/5 rounded px-2 py-1.5 cursor-text hover:bg-white/10 transition-colors">
<span className="text-neutral-500">X</span> <span>0.00</span>
</div>
<div className="flex items-center gap-2 bg-white/5 border border-white/5 rounded px-2 py-1.5 cursor-text hover:bg-white/10 transition-colors">
<span className="text-neutral-500">Y</span> <span>12.50</span>
</div>
</div>
</div>
<div className="space-y-1.5 mt-4">
<div className="flex justify-between">
<span className="text-neutral-500">Material</span>
<span className="text-xs bg-white/10 rounded px-1.5 py-0.5 cursor-pointer hover:bg-white/20 transition-colors">Glass_Gold</span>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between bg-white/5 border border-white/5 rounded px-2 py-1.5 hover:bg-white/10 transition-colors cursor-pointer">
<span className="flex items-center gap-2"><iconify-icon icon="solar:droplet-linear"></iconify-icon> Roughness</span>
<span className="text-neutral-500">0.15</span>
</div>
<div className="flex items-center justify-between bg-white/5 border border-white/5 rounded px-2 py-1.5 hover:bg-white/10 transition-colors cursor-pointer">
<span className="flex items-center gap-2"><iconify-icon icon="solar:sun-linear"></iconify-icon> Emission</span>
<div className="w-16 h-1 rounded bg-brand-500 relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow hover:scale-125 transition-transform"></div>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
<span className="text-neutral-400">Post-processing</span>
<div className="w-7 h-4 bg-brand-500 rounded-full relative cursor-pointer hover:bg-brand-400 transition-colors">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 pt-24 pb-16 border-t border-white/[0.02] bg-gradient-to-b from-transparent to-neutral-900/20" id="products">
<div className="mx-auto max-w-7xl px-6">
<div className="flex justify-center mb-6 animate-on-scroll [animation:fadeIn_1s_ease-out_0s_both]">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md">
<iconify-icon className="text-brand-400 text-sm" icon="solar:bolt-circle-linear"></iconify-icon>
<span className="text-xs font-medium text-brand-200/90">Engine Capabilities</span>
</div>
</div>
<h2 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both] text-center text-3xl md:text-5xl font-medium tracking-tight text-white">
          Architected to Accelerate
          <span className="block mt-1 text-neutral-400 font-light">Your Visual Output</span>
</h2>
<p className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] mx-auto mt-5 max-w-2xl text-center text-sm md:text-base text-white/70 font-light leading-relaxed">
          Tools to render, automate, and scale your 3D pipeline—built to elevate performance and help teams ship faster.
        </p>
<div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 p-6 hover:bg-white/[0.04] transition-colors duration-500" id="card-realtime">
<div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl group-hover:bg-brand-500/20 transition-colors duration-700"></div>
<div className="relative z-10 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] p-4 border border-white/10 backdrop-blur-md">
<div className="flex items-center gap-2 text-white/80 text-xs font-medium mb-3">
<iconify-icon className="text-brand-400 text-sm" icon="solar:chart-square-linear"></iconify-icon>
<span>Realtime Render Metrics</span>
</div>
<div className="space-y-3">
<div className="rounded-xl bg-white/[0.04] p-3 border border-white/5">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded border border-white/20 bg-neutral-800 flex items-center justify-center">
<iconify-icon className="text-white/70 text-xs" icon="solar:video-frame-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-xs font-medium text-white/90">Cinematic Sequence 01</p>
<p className="text-xs text-white/60">4K / 60fps</p>
</div>
<div className="mt-2 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full rounded-full bg-gradient-to-r from-brand-600 to-brand-400" id="us-progress" style={{width: '0%'}}></div>
</div>
</div>
<span className="text-xs text-brand-300 font-medium w-8 text-right" id="us-pct">0%</span>
</div>
</div>
<div className="rounded-xl bg-white/[0.04] p-3 border border-white/5">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded border border-white/20 bg-neutral-800 flex items-center justify-center">
<iconify-icon className="text-white/70 text-xs" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-xs font-medium text-white/90">Product Packaging</p>
<p className="text-xs text-white/60">Path Traced</p>
</div>
<div className="mt-2 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full rounded-full bg-gradient-to-r from-neutral-500 to-neutral-300" id="bd-progress" style={{width: '0%'}}></div>
</div>
</div>
<span className="text-xs text-neutral-300 font-medium w-8 text-right" id="bd-pct">0%</span>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-3 py-1.5 text-xs text-brand-200 border border-brand-500/20 hover:bg-brand-500/20 transition-all duration-300 hover:scale-105 active:scale-95">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
                  AI Denoise
                </button>
<div className="flex items-center gap-2 text-xs text-white/50">
<iconify-icon className="text-brand-400 text-[10px] animate-pulse" icon="solar:record-circle-linear"></iconify-icon>
                  Live Compute
                </div>
</div>
</div>
<h3 className="mt-6 text-lg md:text-xl font-medium tracking-tight text-white">Cloud-Accelerated Tracing</h3>
<p className="mt-2 text-sm text-neutral-400 font-light leading-relaxed">
              Monitor frame times, noise levels, and output generation as they happen. Make confident decisions with instant insight into your computing load.
            </p>
</div>

<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 p-6 hover:bg-white/[0.04] transition-colors duration-500" id="card-borders">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-neutral-500/10 blur-3xl group-hover:bg-neutral-500/20 transition-colors duration-700"></div>
<div className="relative z-10 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] p-4 border border-white/10 backdrop-blur-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-white/80 text-xs font-medium">
<iconify-icon className="text-neutral-300 text-sm" icon="solar:global-linear"></iconify-icon>
<span>Asset CDN Sync</span>
</div>
<div className="flex items-center gap-2 text-xs text-white/50">
<span>Live</span>
<iconify-icon className="animate-spin-slow" icon="solar:refresh-linear"></iconify-icon>
</div>
</div>
<div className="overflow-hidden h-36 rounded-xl border border-white/5 mt-3 bg-black/20 relative">
<div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-black/50 to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none"></div>
<ul className="relative" id="client-list">
<li className="flex px-3 py-2 items-center justify-between border-b border-white/5">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded bg-neutral-800 flex items-center justify-center border border-white/10">
<iconify-icon className="text-white/60 text-xs" icon="solar:gallery-wide-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-white/90">Env_HDRI_Studio</p>
<p className="text-xs text-white/50">US-East • 142MB</p>
</div>
</div>
<iconify-icon className="text-brand-400" icon="solar:check-circle-linear"></iconify-icon>
</li>
<li className="flex px-3 py-2 items-center justify-between border-b border-white/5">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded bg-neutral-800 flex items-center justify-center border border-white/10">
<iconify-icon className="text-white/60 text-xs" icon="solar:layers-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-white/90">Mat_Carbon_Fiber</p>
<p className="text-xs text-white/50">EU-West • 45MB</p>
</div>
</div>
<iconify-icon className="text-brand-400" icon="solar:check-circle-linear"></iconify-icon>
</li>
<li className="flex px-3 py-2 items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded bg-neutral-800 flex items-center justify-center border border-white/10">
<iconify-icon className="text-white/60 text-xs" icon="solar:3d-rotate-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-white/90">Rig_Humanoid_v2</p>
<p className="text-xs text-white/50">AP-South • 88MB</p>
</div>
</div>
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon>
</li>
</ul>
</div>
<div className="mt-4 flex items-center gap-2 text-xs text-white/60">
<iconify-icon icon="solar:cloud-download-linear"></iconify-icon>
                Ultra-low latency distribution globally.
              </div>
</div>
<h3 className="mt-6 text-lg md:text-xl font-medium tracking-tight text-white">Deploy Globally</h3>
<p className="mt-2 text-sm text-neutral-400 font-light leading-relaxed">
              Serve massive 3D assets to clients across regions instantly with our optimized delivery network.
            </p>
</div>

<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both] group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 p-6 hover:bg-white/[0.04] transition-colors duration-500" id="card-collab">
<div className="absolute inset-0 bg-gradient-to-br from-brand-700/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-brand-700/10 blur-3xl group-hover:bg-brand-700/20 transition-colors duration-700"></div>
<div className="relative z-10 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] p-4 border border-white/10 backdrop-blur-md">
<div className="flex items-center gap-2 text-white/80 text-xs font-medium">
<iconify-icon className="text-brand-300 text-sm" icon="solar:usb-square-linear"></iconify-icon>
<span>Connects with your stack</span>
</div>
<div className="mt-3 grid grid-cols-4 gap-3">
<div className="flex flex-col items-center gap-2 rounded-xl bg-white/[0.04] p-3 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
<iconify-icon className="text-lg text-white/80" icon="solar:box-linear"></iconify-icon>
<span className="text-xs text-white/70">Blender</span>
</div>
<div className="flex flex-col items-center gap-2 rounded-xl bg-white/[0.04] p-3 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
<iconify-icon className="text-lg text-white/80" icon="solar:gamepad-linear"></iconify-icon>
<span className="text-xs text-white/70">Unreal</span>
</div>
<div className="flex flex-col items-center gap-2 rounded-xl bg-white/[0.04] p-3 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
<iconify-icon className="text-lg text-white/80" icon="solar:monitor-camera-linear"></iconify-icon>
<span className="text-xs text-white/70">Cinema4D</span>
</div>
<div className="flex flex-col items-center gap-2 rounded-xl bg-white/[0.04] p-3 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
<iconify-icon className="text-lg text-white/80" icon="solar:figma-linear"></iconify-icon>
<span className="text-xs text-white/70">Figma</span>
</div>
</div>
<div className="mt-3 overflow-hidden rounded-xl bg-white/[0.04] border border-white/5">
<div className="relative grid grid-cols-6 gap-2 p-3" id="collab-shimmer">
<div className="h-1.5 rounded-full bg-white/10 col-span-2"></div>
<div className="h-1.5 rounded-full bg-white/10 col-span-3"></div>
<div className="h-1.5 rounded-full bg-white/10 col-span-1"></div>
<div className="h-1.5 rounded-full bg-white/10 col-span-4"></div>
<div className="h-1.5 rounded-full bg-white/10 col-span-2"></div>
<div className="absolute inset-y-0 -left-1 w-24 bg-gradient-to-r from-transparent via-white/15 to-transparent shimmer-effect"></div>
</div>
<div className="flex items-center gap-2 border-t border-white/5 px-3 py-2 bg-black/20">
<iconify-icon className="text-white/50" icon="solar:server-square-linear"></iconify-icon>
<span className="text-xs text-white/60">Bi-directional material sync</span>
</div>
</div>
</div>
<h3 className="mt-6 text-lg md:text-xl font-medium tracking-tight text-white">Seamless Ecosystem</h3>
<p className="mt-2 text-sm text-neutral-400 font-light leading-relaxed">
              Keep your workflow unbroken. Our plugins bridge Luminara directly into your favorite modeling and design applications.
            </p>
</div>

<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 p-6 hover:bg-white/[0.04] transition-colors duration-500" id="card-automation">
<div className="absolute inset-0 bg-gradient-to-br from-brand-300/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-brand-300/10 blur-3xl group-hover:bg-brand-300/20 transition-colors duration-700"></div>
<div className="relative z-10 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] p-4 border border-white/10 backdrop-blur-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-white/80 text-xs font-medium">
<iconify-icon className="text-brand-300 text-sm" icon="solar:route-linear"></iconify-icon>
<span>Node Pipelines</span>
</div>
<button className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-xs text-white/80 border border-white/10 hover:bg-white/10 transition-all active:scale-95">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon> Node
                </button>
</div>
<div className="mt-3 space-y-2">
<div className="flex items-center justify-between rounded-xl bg-white/[0.04] p-3 border border-white/5 hover:border-white/10 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded border border-white/20 bg-neutral-800 flex items-center justify-center">
<iconify-icon className="text-white/70 text-xs" icon="solar:magic-stick-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-white/90">Auto-UV Unwrap</p>
<p className="text-xs text-white/50">Geometry Modifier</p>
</div>
</div>
<div className="flex items-center gap-1 text-xs text-white/60">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> On import
                  </div>
</div>
<div className="flex items-center justify-between rounded-xl bg-white/[0.04] p-3 border border-white/5 hover:border-white/10 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded border border-white/20 bg-neutral-800 flex items-center justify-center">
<iconify-icon className="text-white/70 text-xs" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-white/90">LOD Generation</p>
<p className="text-xs text-white/50">Optimization</p>
</div>
</div>
<div className="flex items-center gap-1 text-xs text-white/60">
<iconify-icon icon="solar:settings-linear"></iconify-icon> Configured
                  </div>
</div>
</div>
</div>
<h3 className="mt-6 text-lg md:text-xl font-medium tracking-tight text-white">Automate Processing</h3>
<p className="mt-2 text-sm text-neutral-400 font-light leading-relaxed">
              Set rules for texture compression, LOD generation, and UV unwrapping to scale your library effortlessly.
            </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 border-t border-white/[0.02]" id="studio">
<div className="mx-auto max-w-7xl px-6 relative">
<div className="grid gap-12 lg:grid-cols-2 items-center">

<div className="animate-on-scroll [animation:animationIn_1s_ease-out_0s_both] relative p-1 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent">
<article className="group relative overflow-hidden bg-black/70 border border-white/10 rounded-[1.8rem] shadow-2xl backdrop-blur-xl">
<div className="p-6 sm:p-10">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
<h3 className="text-2xl font-medium tracking-tight text-white">Smart Scene Structuring</h3>
<span className="inline-flex items-center gap-2 text-xs text-white/80 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-sm shadow-sm">
<iconify-icon className="text-brand-400 text-sm" icon="solar:magic-stick-3-linear"></iconify-icon>
                    AI Powered
                  </span>
</div>
<div className="relative h-64 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/5 mb-8 backdrop-blur-sm overflow-hidden">

<div className="absolute right-4 top-4 w-[75%] h-[70%] rounded-xl bg-[#0a0a0a] border border-white/10 shadow-lg flex flex-col hover:scale-[1.02] transition-transform duration-500">
<div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-white/[0.02]">
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-neutral-600"></div>
<div className="w-2 h-2 rounded-full bg-neutral-600"></div>
<div className="w-2 h-2 rounded-full bg-neutral-600"></div>
</div>
<span className="text-xs text-neutral-500">Outliner - Active</span>
</div>
<div className="p-3 flex-1 space-y-2 relative">
<div className="flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 rounded-lg px-2 py-1.5 cursor-pointer">
<iconify-icon className="text-brand-400" icon="solar:folder-with-files-linear"></iconify-icon>
<div className="h-1.5 w-20 bg-brand-400/40 rounded"></div>
<iconify-icon className="text-brand-400 ml-auto" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 ml-4 cursor-pointer">
<iconify-icon className="text-neutral-400" icon="solar:box-linear"></iconify-icon>
<div className="h-1.5 w-16 bg-white/20 rounded"></div>
</div>
<div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 ml-4 cursor-pointer">
<iconify-icon className="text-neutral-400" icon="solar:sun-linear"></iconify-icon>
<div className="h-1.5 w-24 bg-white/20 rounded"></div>
</div>
</div>
</div>

<div className="absolute left-4 bottom-6 w-[55%] h-[55%] rounded-xl bg-black/90 backdrop-blur-md border border-white/10 shadow-lg flex flex-col hover:-translate-y-1 transition-transform duration-500">
<div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
<span className="text-xs tracking-widest text-neutral-500 uppercase">Auto-Groups</span>
</div>
<div className="p-2 space-y-2">
<div className="flex items-center gap-2 text-xs bg-white/5 border border-white/10 rounded px-2 py-1.5 cursor-pointer hover:bg-white/10 transition-colors">
<div className="w-2 h-2 bg-brand-400 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.5)]"></div>
<span className="text-white/80">Hero Assets (5)</span>
</div>
<div className="flex items-center gap-2 text-xs bg-white/5 border border-white/10 rounded px-2 py-1.5 cursor-pointer hover:bg-white/10 transition-colors">
<div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
<span className="text-white/80">Environment (34)</span>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
<div className="group cursor-pointer">
<h4 className="text-sm font-medium text-white tracking-tight group-hover:text-brand-300 transition-colors">Semantic Ordering</h4>
<p className="mt-2 text-xs text-neutral-400 leading-relaxed">AI automatically groups disjointed meshes into logical assemblies based on topology and names.</p>
</div>
<div className="group cursor-pointer">
<h4 className="text-sm font-medium tracking-tight text-white group-hover:text-brand-300 transition-colors">Resource Cleanup</h4>
<p className="mt-2 text-xs text-neutral-400 leading-relaxed">Identifies and purges orphaned materials and hidden objects to keep scenes ultra-light.</p>
</div>
</div>
</div>
</article>
</div>

<div className="animate-on-scroll [animation:animationIn_1s_ease-out_0.2s_both]">
<h3 className="text-3xl sm:text-4xl font-medium text-white tracking-tight leading-[1.1]">
              Chaos tamed by <br/> <span className="text-neutral-500 italic font-light">machine intelligence.</span>
</h3>
<div className="mt-8 border-t border-white/10 pt-6">
<h4 className="text-sm font-medium text-white mb-4">Core Structural Features</h4>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mt-0.5">
<iconify-icon className="text-brand-400 text-sm" icon="solar:hub-linear"></iconify-icon>
</div>
<div>
<h5 className="text-sm font-medium text-white">Topology Recognition</h5>
<p className="text-xs text-neutral-400 mt-1 leading-relaxed font-light">Machine learning analyzes surface flows and automatically parents related geometry without manual intervention.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mt-0.5">
<iconify-icon className="text-brand-400 text-sm" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<div>
<h5 className="text-sm font-medium text-white">Material Instancing</h5>
<p className="text-xs text-neutral-400 mt-1 leading-relaxed font-light">Scans your scene for duplicate shaders and automatically merges them into master materials with parameters.</p>
</div>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-6 mt-8 grid gap-6 grid-cols-2">
<div className="group cursor-pointer">
<div className="flex items-baseline gap-2 text-3xl font-medium tracking-tight text-white group-hover:text-brand-400 transition-colors">65%</div>
<p className="text-xs text-neutral-500 font-light mt-1">Faster scene load times</p>
</div>
<div className="group cursor-pointer">
<div className="flex items-baseline gap-2 text-3xl font-medium tracking-tight text-white group-hover:text-brand-400 transition-colors">1.2M</div>
<p className="text-xs text-neutral-500 font-light mt-1">Nodes organized daily</p>
</div>
</div>
<div className="mt-8">
<button className="group relative inline-flex items-center justify-center rounded-full px-5 py-2.5 text-xs font-medium text-black bg-white transition-all duration-300 hover:bg-neutral-200 hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                Learn about Studio
                <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 overflow-hidden border-y border-white/[0.02]" id="showcase">
<div className="absolute inset-0 bg-[#020202]"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#171717,transparent_50%)] opacity-50 pointer-events-none"></div>
<div className="mx-auto max-w-7xl px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2 space-y-8 animate-on-scroll [animation:animationIn_1s_ease-out_0s_both]">
<div className="inline-flex items-center gap-2 text-[10px] font-medium tracking-widest text-brand-400 uppercase">
<iconify-icon className="animate-pulse text-xs" icon="solar:record-circle-linear"></iconify-icon>
            Live Rendering Engine
          </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            See it in <span className="text-neutral-500 italic font-light">motion.</span>
</h2>
<p className="text-neutral-400 text-sm leading-relaxed font-light">
            Adjust lighting, tweak materials, and watch your assets respond in real-time. Luminara blurs the line between design and final production.
          </p>
<div className="flex flex-col gap-5 border-l border-white/10 pl-6 pt-2">
<div className="group cursor-pointer">
<h4 className="text-sm font-medium text-white mb-1 group-hover:text-brand-300 transition-colors">Volumetric Lighting</h4>
<p className="text-xs text-neutral-500 font-light">True-to-life light scattering and ambient occlusion computed instantly.</p>
</div>
<div className="group cursor-pointer">
<h4 className="text-sm font-medium text-neutral-400 mb-1 group-hover:text-white transition-colors">Physically Based Materials</h4>
<p className="text-xs text-neutral-500 font-light">Glass, metal, and synthetic surfaces that react accurately to environments.</p>
</div>
</div>
</div>
<div className="w-full md:w-1/2 relative animate-on-scroll [animation:animationIn_1s_ease-out_0.2s_both]">
<div className="glass-panel rounded-2xl p-2 relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
<div className="rounded-xl overflow-hidden relative group cursor-pointer">
<div className="aspect-[4/3] bg-neutral-900 relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.1),transparent_70%)] group-hover:scale-110 transition-transform duration-1000"></div>
<div className="w-48 h-48 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md transform rotate-45 group-hover:rotate-90 transition-transform duration-[2000ms] ease-in-out shadow-[0_0_40px_rgba(251,191,36,0.05)] relative flex items-center justify-center">
<div className="w-24 h-24 rounded-full border border-brand-500/20 bg-brand-500/5 blur-sm"></div>
</div>
<button className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 active:scale-95 shadow-lg shadow-black/50">
<iconify-icon className="ml-1 text-sm" icon="solar:play-bold"></iconify-icon>
</button>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="flex gap-2">
<div className="h-1.5 w-8 rounded-full bg-brand-500"></div>
<div className="h-1.5 w-2 rounded-full bg-white/20"></div>
<div className="h-1.5 w-2 rounded-full bg-white/20"></div>
</div>
<div className="text-[10px] font-medium text-white bg-white/10 px-2 py-1 rounded backdrop-blur border border-white/10">HQ Render</div>
</div>
</div>
</div>
<div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-600/20 rounded-full blur-3xl z-0"></div>
<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl z-0 pointer-events-none"></div>
</div>
</div>
</section>

<section className="relative z-10 py-32 border-b border-white/[0.02]" id="pricing">
<div className="mx-auto max-w-7xl px-6">
<div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both]">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Transparent Pricing</h2>
<p className="text-sm text-neutral-400 font-light">Start small. Scale infinitely. Access the complete Luminara Engine tailored to your creative output.</p>

<div className="mt-8 flex items-center justify-center gap-4 text-xs font-medium">
<span className="text-white">Monthly</span>
<button className="relative inline-flex h-5 w-10 items-center rounded-full bg-white/10 transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500" id="pricing-toggle">
<span className="translate-x-1 inline-block h-3 w-3 transform rounded-full bg-white transition-transform duration-300"></span>
</button>
<span className="text-neutral-500">Annually <span className="text-brand-400 ml-1 bg-brand-500/10 px-1.5 py-0.5 rounded border border-brand-500/20">Save 20%</span></span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">

<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both] rounded-3xl border border-white/5 bg-[#0a0a0a] p-8 hover:bg-white/[0.02] transition-colors flex flex-col h-full">
<h3 className="text-lg font-medium text-white">Creator</h3>
<p className="mt-2 text-xs text-neutral-400 font-light h-8">For individuals exploring the engine.</p>
<div className="mt-6 flex items-baseline gap-1">
<span className="text-4xl font-medium tracking-tight text-white">$0</span>
<span className="text-xs text-neutral-500">/mo</span>
</div>
<button className="mt-8 w-full rounded-full py-2.5 px-4 text-xs font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 active:scale-95">
              Start for free
            </button>
<div className="mt-8 pt-8 border-t border-white/5 flex-1">
<ul className="space-y-4 text-xs text-neutral-300 font-light">
<li className="flex items-start gap-3"><iconify-icon className="text-neutral-500 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon> <span>1 Project Workspace</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-neutral-500 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon> <span>Standard Material Library</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-neutral-500 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon> <span>720p Cloud Rendering</span></li>
<li className="flex items-start gap-3 text-neutral-600"><iconify-icon className="text-neutral-600 text-sm shrink-0" icon="solar:close-circle-linear"></iconify-icon> <span>No AI Scene Management</span></li>
</ul>
</div>
</div>

<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] relative rounded-3xl border border-brand-500/30 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a] p-8 shadow-2xl shadow-brand-500/10 flex flex-col h-full transform md:-translate-y-4">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-500 text-black text-[10px] font-medium tracking-wide uppercase rounded-full">
              Most Popular
            </div>
<h3 className="text-lg font-medium text-white">Professional</h3>
<p className="mt-2 text-xs text-neutral-400 font-light h-8">For dedicated creators and freelancers.</p>
<div className="mt-6 flex items-baseline gap-1">
<span className="text-4xl font-medium tracking-tight text-white">$49</span>
<span className="text-xs text-neutral-500">/mo</span>
</div>
<button className="mt-8 w-full rounded-full py-2.5 px-4 text-xs font-medium text-black bg-brand-400 hover:bg-brand-300 transition-all duration-300 active:scale-95 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
              Get Professional
            </button>
<div className="mt-8 pt-8 border-t border-white/5 flex-1">
<ul className="space-y-4 text-xs text-neutral-300 font-light">
<li className="flex items-start gap-3"><iconify-icon className="text-brand-400 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon> <span>Unlimited Projects</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-brand-400 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon> <span>Complete Asset &amp; Material Library</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-brand-400 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon> <span>4K Cloud Rendering (100h)</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-brand-400 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon> <span>AI Scene Management</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-brand-400 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon> <span>Software Integrations</span></li>
</ul>
</div>
</div>

<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] rounded-3xl border border-white/5 bg-[#0a0a0a] p-8 hover:bg-white/[0.02] transition-colors flex flex-col h-full">
<h3 className="text-lg font-medium text-white">Studio</h3>
<p className="mt-2 text-xs text-neutral-400 font-light h-8">For teams requiring unlimited power.</p>
<div className="mt-6 flex items-baseline gap-1">
<span className="text-4xl font-medium tracking-tight text-white">$199</span>
<span className="text-xs text-neutral-500">/mo</span>
</div>
<button className="mt-8 w-full rounded-full py-2.5 px-4 text-xs font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 active:scale-95">
              Contact Sales
            </button>
<div className="mt-8 pt-8 border-t border-white/5 flex-1">
<ul className="space-y-4 text-xs text-neutral-300 font-light">
<li className="flex items-start gap-3"><iconify-icon className="text-neutral-500 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon> <span>Everything in Professional</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-neutral-500 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon> <span>Unlimited 8K Cloud Rendering</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-neutral-500 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon> <span>Custom CDN Distribution</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-neutral-500 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon> <span>Priority Support &amp; SLA</span></li>
</ul>
</div>
</div>
</div>

<div className="mt-32 max-w-3xl mx-auto animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both]">
<h3 className="text-2xl font-medium text-white text-center mb-10 tracking-tight">Frequently Asked Questions</h3>
<div className="space-y-4">
<details className="group border-b border-white/5 pb-4 cursor-pointer" open="">
<summary className="flex items-center justify-between text-sm font-medium text-white hover:text-brand-300 transition-colors">
                What happens when I exceed my cloud rendering hours?
                <iconify-icon className="faq-icon text-lg text-neutral-500 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<p className="mt-4 text-xs text-neutral-400 font-light leading-relaxed pr-8">
                Your rendering tasks will be queued on our standard priority tier. You can optionally purchase additional high-priority compute packs from your dashboard without upgrading your base plan.
              </p>
</details>
<details className="group border-b border-white/5 pb-4 cursor-pointer">
<summary className="flex items-center justify-between text-sm font-medium text-white hover:text-brand-300 transition-colors">
                Can I cancel my subscription anytime?
                <iconify-icon className="faq-icon text-lg text-neutral-500 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<p className="mt-4 text-xs text-neutral-400 font-light leading-relaxed pr-8">
                Yes, absolutely. Luminara operates on a true month-to-month basis unless you opt for the annual plan. Upon cancellation, you retain access until the end of your billing cycle.
              </p>
</details>
<details className="group border-b border-white/5 pb-4 cursor-pointer">
<summary className="flex items-center justify-between text-sm font-medium text-white hover:text-brand-300 transition-colors">
                Are the assets cleared for commercial use?
                <iconify-icon className="faq-icon text-lg text-neutral-500 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<p className="mt-4 text-xs text-neutral-400 font-light leading-relaxed pr-8">
                Yes. All materials, HDRI maps, and 3D models available in the Professional and Studio tiers come with a perpetual, royalty-free commercial license for all your client projects.
              </p>
</details>
<details className="group border-b border-white/5 pb-4 cursor-pointer">
<summary className="flex items-center justify-between text-sm font-medium text-white hover:text-brand-300 transition-colors">
                How does the AI Scene Management actually work?
                <iconify-icon className="faq-icon text-lg text-neutral-500 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<p className="mt-4 text-xs text-neutral-400 font-light leading-relaxed pr-8">
                It uses a localized machine learning model to parse node networks, object hierarchies, and material assignments. It groups related meshes, instances identical geometries, and builds an optimized outliner automatically.
              </p>
</details>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 overflow-hidden">
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.15),transparent_60%)] z-0 pointer-events-none"></div>
<div className="mx-auto max-w-4xl px-6 relative z-10 text-center flex flex-col items-center">
<iconify-icon className="text-3xl text-brand-400 mb-6 animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both]" icon="solar:crown-star-linear"></iconify-icon>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
          Ready to transcend <br/> the ordinary?
        </h2>
<p className="text-neutral-400 text-sm max-w-xl mb-10 font-light animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
          Join the exclusive cohort of designers and engineers building the next generation of premium digital experiences.
        </p>
<div className="flex flex-col sm:flex-row gap-4 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]">
<button className="btn-premium px-8">
<span className="btn-premium-inner text-xs font-medium tracking-normal">
              Get Unlimited Access
            </span>
</button>
<button className="rounded-full px-8 py-3 text-xs font-medium text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 active:scale-95">
            Contact Sales
          </button>
</div>
</div>
</section>
</main>

<footer className="relative z-10 pt-16 pb-8 mx-auto max-w-7xl px-6">
<div className="sm:p-10 bg-white/5 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-sm">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="md:col-span-2">
<h4 className="text-white text-xl sm:text-2xl font-medium tracking-tight">Join Our Newsletter</h4>
<div className="mt-4 relative">
<label className="sr-only" htmlFor="footer-email">Email</label>
<input className="w-full rounded-xl bg-white/5 ring-1 ring-white/10 px-4 pr-12 py-3 text-sm text-white/90 placeholder-white/40 outline-none focus:ring-2 focus:ring-brand-400/40 transition-shadow" id="footer-email" placeholder="Enter your email" type="email"/>
<button aria-label="Subscribe" className="absolute right-1 top-1 bottom-1 inline-flex items-center justify-center rounded-lg px-3 bg-white/10 ring-1 ring-white/15 text-white/90 hover:bg-white/15 transition-colors active:scale-95">
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<p className="text-xs text-white/60 mt-3 font-light">
            We’ll send weekly product updates and tips. No spam.
          </p>
</div>

<div>
<h5 className="text-white text-lg font-medium tracking-tight mb-3">Pages</h5>
<ul className="space-y-2 text-sm text-white/80 font-light">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#">About us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
</ul>
</div>

<div>
<h5 className="text-white text-lg font-medium tracking-tight mb-3">Resources</h5>
<ul className="space-y-2 text-sm text-white/80 font-light">
<li>
<a className="group inline-flex items-center gap-1 hover:text-white transition-colors" href="#">
                Integrations 
                <iconify-icon className="opacity-70 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</li>
<li>
<a className="group inline-flex items-center gap-1 hover:text-white transition-colors" href="#">
                Changelog 
                <iconify-icon className="opacity-70 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</li>
<li>
<a className="group inline-flex items-center gap-1 hover:text-white transition-colors" href="#">
                Careers 
                <iconify-icon className="opacity-70 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</li>
<li>
<a className="group inline-flex items-center gap-1 hover:text-white transition-colors" href="#">
                Contact us 
                <iconify-icon className="opacity-70 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</li>
</ul>
</div>
</div>

<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-wrap items-center gap-3 text-sm">
<a aria-label="Facebook" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors font-light" href="#">
<svg className="h-4 w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
            Facebook
          </a>
<a aria-label="Instagram" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors font-light" href="#">
<svg className="h-4 w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
            Instagram
          </a>
<a aria-label="Twitter" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors font-light" href="#">
<svg className="h-4 w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
            Twitter
          </a>
<a aria-label="LinkedIn" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors font-light" href="#">
<svg className="h-4 w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
            LinkedIn
          </a>
</div>
<div className="flex items-center justify-start md:justify-end gap-4 text-xs text-white/60 font-light">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Status</a>
</div>
</div>
<div className="h-px bg-white/10 my-6"></div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60 font-light">
<p>© 2024 Luminara Inc. All rights reserved.</p>
<p className="text-white/50">ISO‑27001 ready • SOC 2 in progress • Data residency options</p>
</div>
</div>
</footer>


    </>
  );
}
