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



document.addEventListener("DOMContentLoaded", () => {
// Intersection Observer
const observer = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
observer.unobserve(entry.target);
}
});
},
{ threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
);
document
.querySelectorAll(".animate-on-scroll")
.forEach((el) => observer.observe(el));
// Spotlight Logic
document.querySelectorAll(".spotlight-grid").forEach((grid) => {
grid.addEventListener("mousemove", (e) => {
const rect = grid.getBoundingClientRect();
grid.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
grid.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
});
});
// Scramble Text
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
document.querySelectorAll("[data-scramble]").forEach((el) => {
el.setAttribute("data-original", el.innerText);
el.addEventListener("mouseenter", () => {
let iter = 0;
const original = el.getAttribute("data-original");
const interval = setInterval(() => {
el.innerText = original
.split("")
.map((l, i) => {
if (i < iter) return original[i];
return chars[Math.floor(Math.random() * chars.length)];
})
.join("");
if (iter >= original.length) clearInterval(interval);
iter += 1 / 3;
}, 30);
el.dataset.interval = interval;
});
el.addEventListener("mouseleave", () => {
clearInterval(el.dataset.interval);
el.innerText = el.getAttribute("data-original");
});
});
// Magnetic Buttons
document.querySelectorAll(".magnetic-btn").forEach((btn) => {
btn.addEventListener("mousemove", (e) => {
const rect = btn.getBoundingClientRect();
const x = e.clientX - rect.left - rect.width / 2;
const y = e.clientY - rect.top - rect.height / 2;
btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
});
btn.addEventListener("mouseleave", () => {
btn.style.transform = "translate(0px, 0px)";
});
});
});



          !(function () {
            if (!window.UnicornStudio) {
              window.UnicornStudio = { isInitialized: !1 };
              var i = document.createElement("script");
              (i.src =
                "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js"),
                (i.onload = function () {
                  window.UnicornStudio.isInitialized ||
                    (UnicornStudio.init(),
                    (window.UnicornStudio.isInitialized = !0));
                }),
                (document.head || document.body).appendChild(i);
            }
          })();
        
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
      

<div className="fixed inset-0 -z-30 w-full h-full overflow-hidden pointer-events-none">
<video autoplay="" className="w-full h-full object-cover opacity-20 mix-blend-screen" loop="" muted="" playsinline="" style={{filter: 'hue-rotate(150deg) contrast(1.2)'}}>
<source src="https://cdn.coverr.co/videos/coverr-digital-lines-moving-background-4770/1080p.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
</div>

<div className="aura-background-component top-0 w-full mix-blend-screen -z-20 absolute h-[1200px]" data-alpha-mask="60" style="
        mask-image: linear-gradient(
          to bottom,
          transparent,
          black 0%,
          black 80%,
          transparent
        );
      ">
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div>
</div>

<div className="fixed inset-0 pointer-events-none z-0 technical-grid opacity-30"></div>

<div className="fixed inset-0 pointer-events-none z-0 max-w-[1400px] mx-auto border-x border-white/[0.04]">
<div className="absolute left-1/4 h-full w-px bg-white/[0.02]"></div>
<div className="absolute left-2/4 h-full w-px bg-white/[0.02]"></div>
<div className="absolute left-3/4 h-full w-px bg-white/[0.02]"></div>
</div>

<div className="fixed z-50 flex w-full top-6 px-6 justify-center">
<nav className="flex w-full max-w-[1400px] mx-auto items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-4 h-4 bg-white flex items-center justify-center"></div>
<span className="text-xs font-semibold tracking-tight text-white uppercase">
            Designflo
          </span>
</div>
<div className="hidden md:flex items-center gap-1 backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-full p-1.5 pr-2 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
<a className="px-5 py-2 rounded-full bg-white text-black text-[11px] font-semibold tracking-wide hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all" href="#">
            Overview
          </a>
<a className="px-5 py-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/5 text-[11px] font-medium transition-all tracking-wide" href="#">
            Ventures
          </a>
<a className="px-5 py-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/5 text-[11px] font-medium transition-all tracking-wide" href="#">
            Method
          </a>
<a className="px-5 py-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/5 text-[11px] font-medium transition-all tracking-wide" href="#">
            Contact
          </a>
</div>
<button className="flex items-center gap-2 text-[11px] font-medium text-white uppercase tracking-wider hover:opacity-70 transition-opacity">
          Menu
          <span className="text-neutral-500">+</span>
</button>
</nav>
</div>
<main className="z-10 relative">

<section className="max-w-[1400px] mx-auto px-6 pb-40 pt-20 border-b border-white/5">
<div className="max-w-5xl">
<div className="inline-flex items-center gap-3 px-3 py-1.5 mb-10 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
<div className="flex items-center gap-2 px-1">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest" data-scramble="true">
                System Online
              </span>
</div>
<div className="h-3 w-px bg-white/10"></div>
<span className="text-[10px] text-neutral-400 font-mono">v4.0.2</span>
</div>
<h1 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] text-6xl md:text-8xl lg:text-[7rem] font-medium tracking-tighter text-white leading-[0.9] mb-12">
            Architecting the
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-600">
              next web.
            </span>
</h1>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-12 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]">
<p className="text-lg text-neutral-400 max-w-xl leading-relaxed font-light">
              We build world-class digital infrastructure for B2B agencies,
              fintech, and elite coaches. Specializing in Webflow, Framer, and
              Lovable implementations.
            </p>
<div className="flex items-center gap-6">
<button className="group relative px-8 py-4 bg-white text-black text-xs font-bold tracking-widest uppercase overflow-hidden hover:bg-neutral-200 transition-all duration-300 magnetic-btn">
<span className="relative z-10 flex items-center gap-2">
                  Initiate Protocol
                  <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="ph:arrow-right"></iconify-icon>
</span>
<div className="absolute inset-0 bg-neutral-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mix-blend-difference"></div>
</button>
<div className="h-px w-12 bg-white/20"></div>
<span className="text-[10px] font-mono text-neutral-500">
                SCROLL TO EXPLORE
              </span>
</div>
</div>
</div>
</section>

<div className="border-b border-white/5 bg-black">
<div className="max-w-[1400px] mx-auto overflow-hidden marquee-wrapper">
<div className="marquee-content opacity-40 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-700 items-center">
<iconify-icon icon="simple-icons:openai" width="24"></iconify-icon>
<iconify-icon icon="simple-icons:stripe" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:vercel" width="24"></iconify-icon>
<iconify-icon icon="simple-icons:linear" width="24"></iconify-icon>
<iconify-icon icon="simple-icons:revolut" width="24"></iconify-icon>
<iconify-icon icon="simple-icons:openai" width="24"></iconify-icon>
<iconify-icon icon="simple-icons:stripe" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:vercel" width="24"></iconify-icon>
<iconify-icon icon="simple-icons:linear" width="24"></iconify-icon>
<iconify-icon icon="simple-icons:revolut" width="24"></iconify-icon>
<iconify-icon icon="simple-icons:openai" width="24"></iconify-icon>
<iconify-icon icon="simple-icons:stripe" width="40"></iconify-icon>
<iconify-icon icon="simple-icons:vercel" width="24"></iconify-icon>
<iconify-icon icon="simple-icons:linear" width="24"></iconify-icon>
<iconify-icon icon="simple-icons:revolut" width="24"></iconify-icon>
</div>
</div>
</div>

<section className="border-b border-white/5 bg-black relative">
<div className="max-w-[1400px] mx-auto">

<div className="grid grid-cols-1 md:grid-cols-4 border-b border-white/5">
<div className="p-6 md:p-10 border-r border-white/5 flex flex-col justify-between h-full">
<div className="text-[10px] font-mono text-neutral-500 uppercase mb-2">
                01 — Selected Works
              </div>
<h2 className="text-2xl text-white font-medium tracking-tight">
                Case Index
              </h2>
</div>
<div className="md:col-span-3 p-6 md:p-10 flex items-center">
<p className="text-sm text-neutral-500 max-w-lg">
                Deploying capital and creativity into digital products that
                shift markets.
              </p>
</div>
</div>

<div className="group relative border-b border-white/5 overflow-hidden">
<div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/40 transition-colors duration-700"></div>
<div className="grid grid-cols-1 md:grid-cols-2 h-[600px]">

<div className="relative h-full border-r border-white/5 overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788427-b9f4dbfcc338?q=80&amp;w=2574&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

<div className="absolute bottom-12 left-12 right-12 group-hover:translate-y-[-10px] group-hover:translate-x-[5px] transition-transform duration-700">
<div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
<div className="flex justify-between items-center mb-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-[10px] font-mono text-neutral-500">
                        Main_v2.tsx
                      </div>
</div>
<div className="space-y-2">
<div className="h-1.5 bg-white/10 rounded w-3/4"></div>
<div className="h-1.5 bg-white/10 rounded w-1/2"></div>
</div>
</div>
</div>
</div>

<div className="p-12 flex flex-col justify-between relative bg-black">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-white" icon="ph:arrow-up-right-light" width="32"></iconify-icon>
</div>
<div>
<div className="flex gap-2 mb-6">
<span className="px-2 py-1 border border-white/10 text-[10px] font-mono text-neutral-400 uppercase">
                      Fintech
                    </span>
<span className="px-2 py-1 border border-white/10 text-[10px] font-mono text-neutral-400 uppercase">
                      2024
                    </span>
</div>
<h3 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-4">
                    Novus
                    <br/>
                    Protocol
                  </h3>
<p className="text-neutral-500 max-w-xs leading-relaxed">
                    Redefining institutional trading interfaces with WebGL data
                    visualization and sub-millisecond latency.
                  </p>
</div>
<div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 mt-12">
<div>
<div className="text-[10px] text-neutral-600 uppercase mb-1">
                      Impact
                    </div>
<div className="text-xl text-white font-mono">+400%</div>
<div className="text-xs text-neutral-500">Volume processed</div>
</div>
<div>
<div className="text-[10px] text-neutral-600 uppercase mb-1">
                      Stack
                    </div>
<div className="text-sm text-white font-mono">
                      React, Rust, Wasm
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-black border-b border-white/5 overflow-hidden">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row min-h-[900px]">

<div className="w-full md:w-[40%] px-6 py-20 md:py-32 flex flex-col justify-center relative z-20 bg-gradient-to-r from-black via-black to-transparent">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-white/10 rounded-full bg-white/5 self-start">
<div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse"></div>
<span className="text-[10px] font-mono text-indigo-300 uppercase tracking-widest">
                  Infrastructure
                </span>
</div>
<h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-8 leading-[0.9]">
              The
              <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-200 to-neutral-500">
                Substrate.
              </span>
</h2>
<div className="space-y-8 max-w-sm">
<p className="text-neutral-400 text-lg font-light leading-relaxed">
                  We don't just build websites; we engineer high-velocity digital ecosystems. A curated stack of best-in-class technologies ensures scalability from day one.
                </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-10 h-10 rounded border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all">
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors" icon="ph:cube-transparent"></iconify-icon>
</div>
<div>
<div className="text-white text-sm font-medium">Modular Architecture</div>
<div className="text-[10px] text-neutral-500 font-mono uppercase">React / Next.js / Astro</div>
</div>
</div>
<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-10 h-10 rounded border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all">
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors" icon="ph:database"></iconify-icon>
</div>
<div>
<div className="text-white text-sm font-medium">Data Liquidity</div>
<div className="text-[10px] text-neutral-500 font-mono uppercase">Supabase / Postgres / Redis</div>
</div>
</div>
<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-10 h-10 rounded border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all">
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors" icon="ph:rocket-launch"></iconify-icon>
</div>
<div>
<div className="text-white text-sm font-medium">Global Edge</div>
<div className="text-[10px] text-neutral-500 font-mono uppercase">Vercel / Cloudflare</div>
</div>
</div>
</div>
<div className="pt-8">
<button className="shiny-cta" style={{'--gradient-shine': '#818cf8'}}>
<span>Explore Full Stack</span>
</button>
</div>
</div>
</div>

<div className="absolute right-[-10%] md:right-[-5%] top-[-10%] bottom-[-10%] w-[120%] md:w-[70%] wall-container overflow-hidden pointer-events-none md:pointer-events-auto">
<div className="wall-grid h-full w-full flex gap-6 px-10">

<div className="wall-column wall-column-up flex flex-col gap-6 w-full">

<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-white" icon="simple-icons:nextdotjs" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">Next.js</div>
<div className="text-[9px] font-mono text-neutral-500">v14.0.0 (App Rtr)</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#61DAFB]" icon="simple-icons:react" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">React</div>
<div className="text-[9px] font-mono text-neutral-500">Library</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#635BFF]" icon="simple-icons:stripe" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">Stripe</div>
<div className="text-[9px] font-mono text-neutral-500">Payments</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#3ECF8E]" icon="simple-icons:supabase" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">Supabase</div>
<div className="text-[9px] font-mono text-neutral-500">Database</div>
</div>
</div>

<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-white" icon="simple-icons:nextdotjs" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">Next.js</div>
<div className="text-[9px] font-mono text-neutral-500">v14.0.0</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#61DAFB]" icon="simple-icons:react" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">React</div>
<div className="text-[9px] font-mono text-neutral-500">Library</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#635BFF]" icon="simple-icons:stripe" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">Stripe</div>
<div className="text-[9px] font-mono text-neutral-500">Payments</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#3ECF8E]" icon="simple-icons:supabase" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">Supabase</div>
<div className="text-[9px] font-mono text-neutral-500">Database</div>
</div>
</div>
</div>

<div className="wall-column wall-column-down flex flex-col gap-6 w-full pt-12">
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-white" icon="simple-icons:vercel" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">Vercel</div>
<div className="text-[9px] font-mono text-neutral-500">Deployment</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#5E6AD2]" icon="simple-icons:linear" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">Linear</div>
<div className="text-[9px] font-mono text-neutral-500">Management</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#06B6D4]" icon="simple-icons:tailwindcss" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">Tailwind</div>
<div className="text-[9px] font-mono text-neutral-500">Styling</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-white" icon="simple-icons:openai" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">OpenAI</div>
<div className="text-[9px] font-mono text-neutral-500">Intelligence</div>
</div>
</div>

<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-white" icon="simple-icons:vercel" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">Vercel</div>
<div className="text-[9px] font-mono text-neutral-500">Deployment</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#5E6AD2]" icon="simple-icons:linear" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">Linear</div>
<div className="text-[9px] font-mono text-neutral-500">Management</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#06B6D4]" icon="simple-icons:tailwindcss" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">Tailwind</div>
<div className="text-[9px] font-mono text-neutral-500">Styling</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-white" icon="simple-icons:openai" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">OpenAI</div>
<div className="text-[9px] font-mono text-neutral-500">Intelligence</div>
</div>
</div>
</div>

<div className="wall-column wall-column-up flex flex-col gap-6 w-full pt-24 hidden lg:flex">
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-white" icon="simple-icons:github" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">GitHub</div>
<div className="text-[9px] font-mono text-neutral-500">VCS</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#F24E1E]" icon="simple-icons:figma" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">Figma</div>
<div className="text-[9px] font-mono text-neutral-500">Design</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-white" icon="simple-icons:notion" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">Notion</div>
<div className="text-[9px] font-mono text-neutral-500">Wiki</div>
</div>
</div>

<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-white" icon="simple-icons:github" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">GitHub</div>
<div className="text-[9px] font-mono text-neutral-500">VCS</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#F24E1E]" icon="simple-icons:figma" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">Figma</div>
<div className="text-[9px] font-mono text-neutral-500">Design</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-white" icon="simple-icons:notion" width="32"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">Notion</div>
<div className="text-[9px] font-mono text-neutral-500">Wiki</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10 pointer-events-none opacity-50"></div>
</div>
</div>
</section>

<section className="border-b border-white/5 bg-black py-32 relative">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex items-end justify-between mb-24">
<div>
<div className="text-[10px] font-mono text-neutral-500 uppercase mb-4">
                03 — Capabilities
              </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white max-w-2xl leading-[1.05]">
                Full-stack design engineering for
                <br/>
<span className="text-neutral-600">mission critical</span>
                applications.
              </h2>
</div>
<div className="hidden md:block text-right">
<div className="text-[10px] font-mono text-neutral-500 uppercase mb-1">
                Architecture
              </div>
<div className="text-white font-mono text-sm">v3.0.1</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden spotlight-grid">
<div className="group bg-black p-10 hover:bg-neutral-900/40 transition-colors relative spotlight-card">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="mb-8 text-neutral-700 group-hover:text-emerald-400 transition-colors">
<iconify-icon icon="ph:bezier-curve-light" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-6">Brand Systems</h3>
<ul className="space-y-4">
<li className="flex justify-between text-sm text-neutral-500 group-hover:text-white transition-colors border-b border-white/5 pb-2">
<span>Visual Identity</span>
<span className="font-mono text-[10px]">01</span>
</li>
<li className="flex justify-between text-sm text-neutral-500 group-hover:text-white transition-colors border-b border-white/5 pb-2">
<span>Design Systems</span>
<span className="font-mono text-[10px]">02</span>
</li>
<li className="flex justify-between text-sm text-neutral-500 group-hover:text-white transition-colors border-b border-white/5 pb-2">
<span>Motion Language</span>
<span className="font-mono text-[10px]">03</span>
</li>
</ul>
</div>
<div className="group bg-black p-10 hover:bg-neutral-900/40 transition-colors relative">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="mb-8 text-neutral-700 group-hover:text-purple-400 transition-colors">
<iconify-icon icon="ph:brackets-curly-light" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-6">
                No-Code Architecture
              </h3>
<ul className="space-y-4">
<li className="flex justify-between text-sm text-neutral-500 group-hover:text-white transition-colors border-b border-white/5 pb-2">
<span>Webflow Dev</span>
<span className="font-mono text-[10px]">04</span>
</li>
<li className="flex justify-between text-sm text-neutral-500 group-hover:text-white transition-colors border-b border-white/5 pb-2">
<span>Framer Sites</span>
<span className="font-mono text-[10px]">05</span>
</li>
<li className="flex justify-between text-sm text-neutral-500 group-hover:text-white transition-colors border-b border-white/5 pb-2">
<span>Lovable AI</span>
<span className="font-mono text-[10px]">06</span>
</li>
</ul>
</div>
<div className="group bg-black p-10 hover:bg-neutral-900/40 transition-colors relative">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="mb-8 text-neutral-700 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="ph:strategy-light" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-6">
                Conversion Systems
              </h3>
<ul className="space-y-4">
<li className="flex justify-between text-sm text-neutral-500 group-hover:text-white transition-colors border-b border-white/5 pb-2">
<span>Landers</span>
<span className="font-mono text-[10px]">07</span>
</li>
<li className="flex justify-between text-sm text-neutral-500 group-hover:text-white transition-colors border-b border-white/5 pb-2">
<span>B2B Funnels</span>
<span className="font-mono text-[10px]">08</span>
</li>
<li className="flex justify-between text-sm text-neutral-500 group-hover:text-white transition-colors border-b border-white/5 pb-2">
<span>Automation</span>
<span className="font-mono text-[10px]">09</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 bg-black py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-6 relative z-10">
<div className="flex items-end justify-between mb-20">
<div>
<div className="text-[10px] font-mono text-emerald-500 uppercase mb-4 tracking-widest flex items-center gap-2">
<span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></span>
                Live Feed
              </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
                Client Intel
              </h2>
</div>
<div className="hidden md:flex gap-2">
<div className="px-3 py-1 border border-white/10 rounded-full text-[10px] text-neutral-500 font-mono uppercase">
                Fintech
              </div>
<div className="px-3 py-1 border border-white/10 rounded-full text-[10px] text-neutral-500 font-mono uppercase">
                B2B
              </div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="group relative bg-neutral-900/10 border border-white/10 aspect-[3/4] overflow-hidden glitch-hover">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity grayscale"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute top-4 left-4 flex gap-2">
<div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
<span className="text-[9px] font-mono text-white/70">REC</span>
</div>
<div className="absolute bottom-0 left-0 p-6">
<div className="text-[10px] font-mono text-emerald-400 mb-2 glitch-target">
                  CAM_01
                </div>
<p className="text-sm text-white leading-tight">
                  "$5M ARR Scaling"
                </p>
</div>
<div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-colors pointer-events-none"></div>
</div>
<div className="group relative bg-neutral-900/10 border border-white/10 aspect-[3/4] overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2426&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity grayscale"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute top-4 left-4 flex gap-2">
<div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
<span className="text-[9px] font-mono text-white/70">REC</span>
</div>
<div className="absolute bottom-0 left-0 p-6">
<div className="text-[10px] font-mono text-emerald-400 mb-2">
                  CAM_02
                </div>
<p className="text-sm text-white leading-tight">
                  "60% Cost Reduction"
                </p>
</div>
<div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-colors pointer-events-none"></div>
</div>
<div className="group relative bg-neutral-900/10 border border-white/10 aspect-[3/4] overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity grayscale"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute top-4 left-4 flex gap-2">
<div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
<span className="text-[9px] font-mono text-white/70">REC</span>
</div>
<div className="absolute bottom-0 left-0 p-6">
<div className="text-[10px] font-mono text-emerald-400 mb-2">
                  CAM_03
                </div>
<p className="text-sm text-white leading-tight">
                  "Bleeding Edge UI"
                </p>
</div>
<div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-colors pointer-events-none"></div>
</div>
<div className="group relative bg-neutral-900/10 border border-white/10 aspect-[3/4] overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity grayscale"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute top-4 left-4 flex gap-2">
<div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
<span className="text-[9px] font-mono text-white/70">REC</span>
</div>
<div className="absolute bottom-0 left-0 p-6">
<div className="text-[10px] font-mono text-emerald-400 mb-2">
                  CAM_04
                </div>
<p className="text-sm text-white leading-tight">
                  "Lead Flow Automated"
                </p>
</div>
<div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-colors pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 bg-black py-20 relative">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 spotlight-grid">
<div className="spotlight-card p-8 border border-white/5 bg-neutral-900/10 backdrop-blur hover:bg-neutral-900/20 transition-colors relative">
<iconify-icon className="text-neutral-700 text-3xl mb-4" icon="ph:quotes-fill"></iconify-icon>
<p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                "We needed a Framer site that didn't look like a template.
                Designflo delivered a masterpiece that converts at 12%."
              </p>
<div className="flex items-center gap-3 relative z-10">
<div className="w-8 h-8 bg-neutral-800 rounded-full overflow-hidden">
<img className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-white text-xs font-medium">Alex Hormozi</div>
<div className="text-[10px] text-neutral-500 font-mono">
                    Acquisition.com
                  </div>
</div>
</div>
</div>
<div className="spotlight-card p-8 border border-white/5 bg-neutral-900/10 backdrop-blur hover:bg-neutral-900/20 transition-colors relative">
<iconify-icon className="text-neutral-700 text-3xl mb-4" icon="ph:quotes-fill"></iconify-icon>
<p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                "The rebranding positioned us as the market leader in B2B SaaS.
                Our valuation doubled in 6 months."
              </p>
<div className="flex items-center gap-3 relative z-10">
<div className="w-8 h-8 bg-neutral-800 rounded-full overflow-hidden">
<img className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-white text-xs font-medium">Sarah Chen</div>
<div className="text-[10px] text-neutral-500 font-mono">
                    Founders Fund
                  </div>
</div>
</div>
</div>
<div className="spotlight-card p-8 border border-white/5 bg-neutral-900/10 backdrop-blur hover:bg-neutral-900/20 transition-colors relative">
<iconify-icon className="text-neutral-700 text-3xl mb-4" icon="ph:quotes-fill"></iconify-icon>
<p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                "Incredible speed. They used Lovable to prototype and Webflow to
                scale. The perfect modern agency."
              </p>
<div className="flex items-center gap-3 relative z-10">
<div className="w-8 h-8 bg-neutral-800 rounded-full overflow-hidden">
<img className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-white text-xs font-medium">David Park</div>
<div className="text-[10px] text-neutral-500 font-mono">
                    Y Combinator
                  </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 bg-black py-32 overflow-hidden">
<div className="max-w-[1400px] mx-auto px-6">
<div className="text-[10px] font-mono text-neutral-500 uppercase mb-12">
            04 — Pipeline
          </div>

<div className="relative mt-20">

<div className="absolute top-[27px] left-0 w-full h-px bg-white/10 z-0"></div>
<div className="absolute top-[27px] left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent z-0 animate-[shimmer_2s_infinite]"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">

<div className="group hover:-translate-y-2 transition-transform duration-300 cursor-default">
<div className="w-14 h-14 bg-black border border-white/20 rounded-full flex items-center justify-center mb-8 group-hover:border-white transition-colors relative">
<span className="text-sm font-mono text-white">01</span>
<div className="absolute inset-0 rounded-full border border-white/50 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"></div>
</div>
<h4 className="text-lg text-white font-medium mb-3">Discovery</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                  Deep dive into market mechanics, user psychology, and
                  competitive whitespace.
                </p>
</div>

<div className="group">
<div className="w-14 h-14 bg-black border border-white/20 rounded-full flex items-center justify-center mb-8 group-hover:border-white transition-colors relative">
<span className="text-sm font-mono text-white">02</span>
</div>
<h4 className="text-lg text-white font-medium mb-3">Prototype</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                  Low-fidelity structural engineering followed by high-fidelity
                  motion studies.
                </p>
</div>

<div className="group">
<div className="w-14 h-14 bg-black border border-white/20 rounded-full flex items-center justify-center mb-8 group-hover:border-white transition-colors relative">
<span className="text-sm font-mono text-white">03</span>
</div>
<h4 className="text-lg text-white font-medium mb-3">Develop</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                  Component-driven development using scalable frameworks and
                  strict type safety.
                </p>
</div>

<div className="group">
<div className="w-14 h-14 bg-black border border-white/20 rounded-full flex items-center justify-center mb-8 group-hover:border-white transition-colors relative">
<span className="text-sm font-mono text-white">04</span>
<div className="absolute w-2 h-2 bg-green-500 rounded-full top-0 right-0 animate-pulse"></div>
</div>
<h4 className="text-lg text-white font-medium mb-3">Deploy</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                  Global edge distribution, performance monitoring, and
                  iterative optimization.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 bg-black py-32 relative">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-4">
<div className="text-[10px] font-mono text-neutral-500 uppercase mb-4">
                05 — Protocols
              </div>
<h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight mb-6">
                Operational
                <br/>
                Queries
              </h2>
<p className="text-sm text-neutral-500 max-w-xs leading-relaxed">
                Standard configurations and compatibility checks for new
                partners.
              </p>
</div>
<div className="lg:col-span-8 border-t border-white/10">
<div className="group border-b border-white/10">
<details className="group">
<summary className="flex justify-between items-center py-6 cursor-pointer list-none outline-none">
<span className="text-white font-medium tracking-tight">
                      What is the typical deployment velocity?
                    </span>
<span className="text-neutral-500 font-mono text-xs group-open:rotate-45 transition-transform duration-300">
                      +
                    </span>
</summary>
<div className="pb-6 text-neutral-400 text-sm leading-relaxed max-w-2xl overflow-hidden">
<p>
                      Most infrastructure projects are executed in 4-8 week
                      sprints. We prioritize velocity without compromising
                      architectural integrity, utilizing our proprietary
                      component libraries to accelerate the initial build phase.
                    </p>
</div>
</details>
</div>
<div className="group border-b border-white/10">
<details className="group">
<summary className="flex justify-between items-center py-6 cursor-pointer list-none outline-none">
<span className="text-white font-medium tracking-tight">
                      Do you integrate with internal engineering teams?
                    </span>
<span className="text-neutral-500 font-mono text-xs group-open:rotate-45 transition-transform duration-300">
                      +
                    </span>
</summary>
<div className="pb-6 text-neutral-400 text-sm leading-relaxed max-w-2xl overflow-hidden">
<p>
                      Yes. We often function as a specialized frontend unit,
                      interfacing directly with your backend team via Linear and
                      Slack Connect. We adhere to strict Git workflows and
                      TypeScript standards.
                    </p>
</div>
</details>
</div>
<div className="group border-b border-white/10">
<details className="group">
<summary className="flex justify-between items-center py-6 cursor-pointer list-none outline-none">
<span className="text-white font-medium tracking-tight">
                      Is post-launch support included?
                    </span>
<span className="text-neutral-500 font-mono text-xs group-open:rotate-45 transition-transform duration-300">
                      +
                    </span>
</summary>
<div className="pb-6 text-neutral-400 text-sm leading-relaxed max-w-2xl overflow-hidden">
<p>
                      We offer "Retainer Protocols" for ongoing optimization,
                      A/B testing, and feature expansion after the initial build
                      is live. This ensures your digital infrastructure evolves
                      with your market.
                    </p>
</div>
</details>
</div>
<div className="group border-b border-white/10">
<details className="group">
<summary className="flex justify-between items-center py-6 cursor-pointer list-none outline-none">
<span className="text-white font-medium tracking-tight">
                      What is the preferred tech stack?
                    </span>
<span className="text-neutral-500 font-mono text-xs group-open:rotate-45 transition-transform duration-300">
                      +
                    </span>
</summary>
<div className="pb-6 text-neutral-400 text-sm leading-relaxed max-w-2xl overflow-hidden">
<p>
                      Our core competency lies in Next.js, Webflow, and Framer.
                      For web applications, we utilize React/TypeScript and
                      Supabase. We select the stack based on scalability
                      requirements and team capabilities.
                    </p>
</div>
</details>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 bg-black border-b border-white/5 relative">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/5 pb-10">
<div>
<div className="text-[10px] font-mono text-neutral-500 uppercase mb-4">
                06 — Partnership
              </div>
<h2 className="text-4xl font-medium tracking-tight text-white">
                Engagement Models
              </h2>
</div>
<p className="text-neutral-500 text-sm max-w-sm text-right">
              Flexible structures for high-velocity teams.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group border border-white/10 p-10 bg-neutral-900/10 hover:bg-neutral-900/30 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4">
<iconify-icon className="text-white opacity-20 group-hover:opacity-100 transition-opacity" icon="ph:infinite-light" width="32"></iconify-icon>
</div>
<div className="mb-12">
<h3 className="text-2xl font-medium text-white mb-2">
                  Dedicated Team
                </h3>
<p className="text-sm text-neutral-500">
                  Continuous integration with your product org.
                </p>
</div>
<div className="grid grid-cols-2 gap-y-4 mb-12">
<div className="text-sm text-neutral-300 flex items-center gap-2">
<div className="w-1 h-1 bg-white rounded-full"></div>
                  2 Senior Designers
                </div>
<div className="text-sm text-neutral-300 flex items-center gap-2">
<div className="w-1 h-1 bg-white rounded-full"></div>
                  Frontend Engineer
                </div>
<div className="text-sm text-neutral-300 flex items-center gap-2">
<div className="w-1 h-1 bg-white rounded-full"></div>
                  Slack Connect
                </div>
<div className="text-sm text-neutral-300 flex items-center gap-2">
<div className="w-1 h-1 bg-white rounded-full"></div>
                  Linear Integration
                </div>
</div>
<button className="w-full py-4 border border-white/10 text-xs font-mono uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors">
                Request Access
              </button>
</div>

<div className="group border border-white/10 p-10 bg-neutral-900/10 hover:bg-neutral-900/30 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4">
<iconify-icon className="text-white opacity-20 group-hover:opacity-100 transition-opacity" icon="ph:target-light" width="32"></iconify-icon>
</div>
<div className="mb-12">
<h3 className="text-2xl font-medium text-white mb-2">
                  Strategic Sprint
                </h3>
<p className="text-sm text-neutral-500">
                  Fixed-scope execution for critical launches.
                </p>
</div>
<div className="grid grid-cols-2 gap-y-4 mb-12">
<div className="text-sm text-neutral-300 flex items-center gap-2">
<div className="w-1 h-1 bg-white rounded-full"></div>
                  Lovable MVP Build
                </div>
<div className="text-sm text-neutral-300 flex items-center gap-2">
<div className="w-1 h-1 bg-white rounded-full"></div>
                  Brand Overhaul
                </div>
<div className="text-sm text-neutral-300 flex items-center gap-2">
<div className="w-1 h-1 bg-white rounded-full"></div>
                  Webflow/Framer Site
                </div>
<div className="text-sm text-neutral-300 flex items-center gap-2">
<div className="w-1 h-1 bg-white rounded-full"></div>
                  Ad Creatives
                </div>
</div>
<button className="w-full py-4 border border-white/10 text-xs font-mono uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors">
                Initiate Sprint
              </button>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black border-b border-white/5 relative">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20">
<div>
<div className="text-[10px] font-mono text-neutral-500 uppercase mb-4">
                07 — Investment
              </div>
<h2 className="text-4xl font-medium tracking-tight text-white">
                Transparent Protocols
              </h2>
</div>
<div className="flex items-center gap-3 mt-6 md:mt-0">
<span className="text-xs font-medium text-white">Monthly</span>
<div className="toggle-switch active" onclick="this.classList.toggle('active')"></div>
<span className="text-xs font-medium text-neutral-500">Quarterly <span className="text-emerald-500 text-[10px] ml-1">-20%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors flex flex-col justify-between group">
<div>
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-lg font-medium text-white">Audit</h3>
<p className="text-xs text-neutral-500 mt-1">Single Sprint</p>
</div>
<iconify-icon className="text-neutral-600 text-xl" icon="ph:lightning-light"></iconify-icon>
</div>
<div className="mb-8">
<span className="text-4xl font-medium tracking-tighter text-white">$4,500</span>
<span className="text-xs text-neutral-500 font-mono">/one-off</span>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3 text-sm text-neutral-400">
<iconify-icon className="text-white" icon="ph:check"></iconify-icon>
<span>UX/UI Heuristic Analysis</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-400">
<iconify-icon className="text-white" icon="ph:check"></iconify-icon>
<span>Performance Report</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-400">
<iconify-icon className="text-white" icon="ph:check"></iconify-icon>
<span>Conversion Strategy</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-400">
<iconify-icon className="text-white" icon="ph:check"></iconify-icon>
<span>Figma Delivery</span>
</div>
</div>
</div>
<button className="w-full py-3 border border-white/10 text-[11px] font-mono uppercase tracking-widest text-neutral-400 hover:text-white hover:border-white transition-colors">
                    Start Audit
                </button>
</div>

<div className="p-8 border border-emerald-500/30 pricing-highlight flex flex-col justify-between relative group">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-900/50 border border-emerald-500/30 rounded-full backdrop-blur-md">
<span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">Recommended</span>
</div>
<div>
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-lg font-medium text-white">Product Partner</h3>
<p className="text-xs text-neutral-500 mt-1">Recurring Ops</p>
</div>
<iconify-icon className="text-emerald-500 text-xl" icon="ph:star-four-fill"></iconify-icon>
</div>
<div className="mb-8">
<span className="text-4xl font-medium tracking-tighter text-white">$8,500</span>
<span className="text-xs text-neutral-500 font-mono">/mo</span>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-emerald-500" icon="ph:check-circle-fill"></iconify-icon>
<span>Unlimited Design Requests</span>
</div>
<div className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-emerald-500" icon="ph:check-circle-fill"></iconify-icon>
<span>Frontend Dev (React/Webflow)</span>
</div>
<div className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-emerald-500" icon="ph:check-circle-fill"></iconify-icon>
<span>Slack Connect Channel</span>
</div>
<div className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-emerald-500" icon="ph:check-circle-fill"></iconify-icon>
<span>48h Turnaround Time</span>
</div>
<div className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-emerald-500" icon="ph:check-circle-fill"></iconify-icon>
<span>Pause Anytime</span>
</div>
</div>
</div>
<button className="w-full py-3 bg-white text-black text-[11px] font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors">
                    Subscribe Now
                </button>
</div>

<div className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors flex flex-col justify-between group">
<div>
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-lg font-medium text-white">Scale</h3>
<p className="text-xs text-neutral-500 mt-1">Enterprise</p>
</div>
<iconify-icon className="text-neutral-600 text-xl" icon="ph:buildings-light"></iconify-icon>
</div>
<div className="mb-8">
<span className="text-4xl font-medium tracking-tighter text-white">Custom</span>
<span className="text-xs text-neutral-500 font-mono">/quote</span>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3 text-sm text-neutral-400">
<iconify-icon className="text-white" icon="ph:check"></iconify-icon>
<span>Full Design System</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-400">
<iconify-icon className="text-white" icon="ph:check"></iconify-icon>
<span>Dedicated Squad (3+)</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-400">
<iconify-icon className="text-white" icon="ph:check"></iconify-icon>
<span>Priority Support</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-400">
<iconify-icon className="text-white" icon="ph:check"></iconify-icon>
<span>Legal &amp; SLA Contracts</span>
</div>
</div>
</div>
<button className="w-full py-3 border border-white/10 text-[11px] font-mono uppercase tracking-widest text-neutral-400 hover:text-white hover:border-white transition-colors">
                    Contact Sales
                </button>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black border-b border-white/5 relative">
<div className="max-w-[1400px] mx-auto px-6">
<div className="relative z-10 w-full bg-black border border-white/10 rounded-3xl overflow-hidden min-h-[600px] flex flex-col items-center justify-center group isolate">

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[80px] mix-blend-screen animate-pulse duration-[8s]"></div>
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen" loop="" muted="" playsinline="" style={{filter: 'hue-rotate(240deg) contrast(1.2) saturate(1.2)'}}>
<source src="https://cdn.coverr.co/videos/coverr-digital-lines-moving-background-4770/1080p.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,black_100%)]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
</div>

<div className="relative z-10 flex flex-col items-center text-center p-8 md:p-12 max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-4 py-2 mb-10 border border-purple-500/20 rounded-full bg-purple-900/10 backdrop-blur-xl shadow-[0_0_20px_rgba(168,85,247,0.1)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
<span className="text-[10px] font-mono text-purple-200 uppercase tracking-widest">
                  Capacity: 2 Slots Remaining
                </span>
</div>
<h2 className="text-6xl md:text-8xl font-medium tracking-tighter text-white mb-8 leading-[0.9]">
                Ready to
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-200 to-purple-400">
                  initiate?
                </span>
</h2>
<p className="text-neutral-400 text-lg font-light leading-relaxed max-w-lg mb-12">
                Secure your production window for Q3. We are currently accepting
                applications for high-growth ventures seeking architectural
                overhaul.
              </p>
<div className="flex flex-col md:flex-row items-center gap-8">

<button className="shiny-cta" style={{'--gradient-shine': '#a855f7'}}>
<span>Initialize Project</span>
</button>
<div className="flex items-center gap-6">
<a className="group text-xs font-mono text-neutral-500 hover:text-white uppercase tracking-widest transition-colors flex items-center gap-2" href="#">
                    Pricing Models
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="ph:arrow-right"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black pt-32 pb-12 border-t border-white/10">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-24">
<div className="text-[15vw] leading-[0.8] font-bold tracking-tighter text-white opacity-90 select-none hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-t hover:from-neutral-800 hover:to-white transition-all duration-700 cursor-default">
              DESIGNFLO
            </div>
<div className="flex flex-col gap-4 text-right mb-4">
<a className="text-lg text-neutral-400 hover:text-white transition-colors" href="#">
                Start a Project -&gt;
              </a>
<div className="text-sm text-neutral-600">
                New York • London • Tokyo
              </div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
<div>
<h4 className="text-[10px] font-mono uppercase text-neutral-500 mb-4">
                Sitemap
              </h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li><a className="hover:text-white" href="#">Index</a></li>
<li><a className="hover:text-white" href="#">Capabilities</a></li>
<li><a className="hover:text-white" href="#">Intel</a></li>
</ul>
</div>
<div>
<h4 className="text-[10px] font-mono uppercase text-neutral-500 mb-4">
                Socials
              </h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li><a className="hover:text-white" href="#">Twitter / X</a></li>
<li><a className="hover:text-white" href="#">LinkedIn</a></li>
<li><a className="hover:text-white" href="#">Instagram</a></li>
</ul>
</div>
<div className="md:col-span-2 text-right">
<p className="text-[10px] font-mono uppercase text-neutral-600">
                System Status:
                <span className="text-emerald-500">Normal</span>
</p>
<p className="text-[10px] font-mono uppercase text-neutral-600 mt-1">
                © 2024 Designflo Inc.
              </p>
</div>
</div>
</div>
</footer>
</main>

    </>
  );
}
