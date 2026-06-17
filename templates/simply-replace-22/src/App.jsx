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
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
document.querySelectorAll(".spotlight-grid").forEach((grid) => {
grid.addEventListener("mousemove", (e) => {
const rect = grid.getBoundingClientRect();
grid.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
grid.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
});
});
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
document.querySelectorAll("[data-scramble]").forEach((el) => {
el.setAttribute("data-original", el.innerText);
el.addEventListener("mouseenter", () => {
let iter = 0;
const original = el.getAttribute("data-original");
const interval = setInterval(() => {
el.innerText = original.split("").map((l, i) => {
if (i < iter) return original[i];
return chars[Math.floor(Math.random() * chars.length)];
}).join("");
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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div></div>

<div className="fixed inset-0 -z-30 w-full h-full overflow-hidden pointer-events-none">
<video autoplay="" className="w-full h-full object-cover opacity-15 mix-blend-screen" loop="" muted="" playsinline="" style={{filter: 'hue-rotate(260deg) contrast(1.3) saturate(1.5)'}}>
<source src="https://cdn.coverr.co/videos/coverr-digital-lines-moving-background-4770/1080p.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] -z-20 pointer-events-none">
<div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[150px]"></div>
<div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-[120px]"></div>
<div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
</div>

<div className="fixed inset-0 pointer-events-none z-0 technical-grid opacity-40"></div>

<div className="fixed inset-0 pointer-events-none z-0 max-w-[1400px] mx-auto border-x border-violet-500/[0.04]">
<div className="absolute left-1/4 h-full w-px bg-violet-500/[0.03]"></div>
<div className="absolute left-2/4 h-full w-px bg-violet-500/[0.03]"></div>
<div className="absolute left-3/4 h-full w-px bg-violet-500/[0.03]"></div>
</div>

<div className="fixed z-50 flex w-full top-6 px-6 justify-center">
<nav className="flex w-full max-w-[1400px] mx-auto items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
<iconify-icon className="text-white text-lg" icon="ph:vault-fill"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-white">
                    VOID402
                </span>
</div>
<div className="hidden md:flex items-center gap-1 backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-full p-1.5 pr-2 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
<a className="px-5 py-2 rounded-full bg-white text-black text-[11px] font-semibold tracking-wide hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all" href="#">
                    Dashboard
                </a>
<a className="px-5 py-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/5 text-[11px] font-medium transition-all tracking-wide" href="#">
                    Technology
                </a>
<a className="px-5 py-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/5 text-[11px] font-medium transition-all tracking-wide" href="#">
                    Use Cases
                </a>
<a className="px-5 py-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/5 text-[11px] font-medium transition-all tracking-wide" href="#">
                    Roadmap
                </a>
</div>
<button className="flex items-center gap-3 px-5 py-2.5 bg-violet-600 hover:bg-violet-500 rounded-full text-[11px] font-semibold text-white uppercase tracking-wider transition-all magnetic-btn" style={{transform: 'translate(0px, 0px)'}}>
<span>Launch App</span>
<iconify-icon icon="ph:arrow-right" width="14"></iconify-icon>
</button>
</nav>
</div>
<main className="z-10 relative">

<section className="max-w-[1400px] mx-auto px-6 pb-40 pt-20 border-b border-white/5">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-3 px-4 py-2 mb-10 border border-violet-500/20 rounded-full bg-violet-900/20 backdrop-blur-sm animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] animate">
<div className="flex items-center gap-2 px-1">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
</span>
<span className="text-[10px] font-mono text-violet-300 uppercase tracking-widest" data-original="FHENIX NETWORK" data-scramble="">
                                Fhenix Network
                            </span>
</div>
<div className="h-3 w-px bg-white/10"></div>
<span className="text-[10px] text-neutral-400 font-mono">Latency: 14ms</span>
</div>
<h1 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tighter text-white leading-[0.95] mb-8 animate">
                        The Confidential
                        <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-b from-violet-300 via-violet-400 to-purple-600">
                            Payment Layer
                        </span>
<br className=""/>
<span className="text-neutral-500 text-4xl md:text-5xl lg:text-6xl">for the Agentic Economy</span>
</h1>
<p className="text-lg text-neutral-400 max-w-xl leading-relaxed font-light mb-12 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] animate">
                        Our FHE-powered infrastructure enables institutions, developers, and AI agents to transact on-chain with complete privacy, unlocking the future of secure, autonomous commerce.
                    </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both] animate">
<button className="shiny-cta">
<span className="flex items-center gap-2">
                                Launch App
                                <iconify-icon icon="ph:arrow-right"></iconify-icon>
</span>
</button>
<div className="flex items-center gap-3 text-neutral-500">
<div className="w-px h-8 bg-white/10"></div>
<div className="text-xs font-mono">
<div className="text-neutral-600">void402.app/dashboard</div>
<div className="text-violet-400">Live Preview</div>
</div>
</div>
</div>
</div>

<div className="relative animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] animate">
<div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-indigo-600/20 rounded-3xl blur-2xl"></div>
<div className="relative glass-card rounded-2xl p-6 border-violet-500/20">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>
<div className="flex items-center gap-2">
<span className="px-2 py-1 bg-violet-500/20 border border-violet-500/30 rounded text-[9px] font-mono text-violet-300">Encrypted</span>
<span className="text-[10px] font-mono text-neutral-500">Latency: 14ms</span>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-violet-500/20 rounded-lg flex items-center justify-center">
<iconify-icon className="text-violet-400 text-xl" icon="ph:shield-check-fill"></iconify-icon>
</div>
<div>
<div className="text-sm text-white font-medium">Confidential Transactions</div>
<div className="text-[10px] text-neutral-500 font-mono">FHE-Powered Encryption</div>
</div>
</div>
<div className="text-right">
<div className="text-xs text-violet-400 font-mono">256-bit</div>
<div className="text-[10px] text-neutral-600">AES</div>
</div>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="p-3 bg-black/40 rounded-lg border border-white/5 text-center">
<div className="text-lg text-white font-mono font-semibold">99.9%</div>
<div className="text-[9px] text-neutral-500 uppercase">Uptime</div>
</div>
<div className="p-3 bg-black/40 rounded-lg border border-white/5 text-center">
<div className="text-lg text-white font-mono font-semibold">&lt;2s</div>
<div className="text-[9px] text-neutral-500 uppercase">Latency</div>
</div>
<div className="p-3 bg-black/40 rounded-lg border border-violet-500/20 text-center">
<div className="text-lg text-violet-400 font-mono font-semibold">x402</div>
<div className="text-[9px] text-neutral-500 uppercase">Enabled</div>
</div>
</div>
<div className="p-4 bg-gradient-to-r from-violet-900/30 to-purple-900/30 rounded-xl border border-violet-500/20">
<div className="flex items-center justify-between mb-3">
<span className="text-xs text-neutral-400">Protocol Features</span>
<span className="text-[9px] text-violet-400 font-mono">ACTIVE</span>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="flex items-center gap-2 text-[11px] text-neutral-300">
<iconify-icon className="text-violet-500" icon="ph:check-circle-fill"></iconify-icon>
                                        Zero-Knowledge Proofs
                                    </div>
<div className="flex items-center gap-2 text-[11px] text-neutral-300">
<iconify-icon className="text-violet-500" icon="ph:check-circle-fill"></iconify-icon>
                                        End-to-End Encryption
                                    </div>
<div className="flex items-center gap-2 text-[11px] text-neutral-300">
<iconify-icon className="text-violet-500" icon="ph:check-circle-fill"></iconify-icon>
                                        Smart Payment Routing
                                    </div>
<div className="flex items-center gap-2 text-[11px] text-neutral-300">
<iconify-icon className="text-violet-500" icon="ph:check-circle-fill"></iconify-icon>
                                        Agent Compatible
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="bg-black border-white/5 border-b pt-8 pb-8">
<div className="max-w-[1400px] mx-auto px-6">
<div className="text-center mb-6">
<span className="text-[10px] uppercase text-neutral-600 tracking-widest font-mono">Powered By Leading Technologies</span>
</div>
<div className="overflow-hidden marquee-wrapper">
<div className="marquee-content opacity-50 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-700 items-center py-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-white" icon="simple-icons:coinbase" width="24"></iconify-icon>
<span className="text-xs font-medium text-neutral-400">Base</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-violet-400" icon="ph:shield-checkered-fill" width="24"></iconify-icon>
<span className="text-xs font-medium text-neutral-400">Fhenix</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-400" icon="ph:currency-circle-dollar-fill" width="24"></iconify-icon>
<span className="text-xs font-medium text-neutral-400">x402</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-300" icon="simple-icons:solidity" width="24"></iconify-icon>
<span className="text-xs font-medium text-neutral-400">Solidity</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="simple-icons:typescript" width="24"></iconify-icon>
<span className="text-xs font-medium text-neutral-400">TypeScript</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="simple-icons:react" width="24"></iconify-icon>
<span className="text-xs font-medium text-neutral-400">React</span>
</div>

<div className="flex items-center gap-2">
<iconify-icon className="text-white" icon="simple-icons:coinbase" width="24"></iconify-icon>
<span className="text-xs font-medium text-neutral-400">Base</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-violet-400" icon="ph:shield-checkered-fill" width="24"></iconify-icon>
<span className="text-xs font-medium text-neutral-400">Fhenix</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-400" icon="ph:currency-circle-dollar-fill" width="24"></iconify-icon>
<span className="text-xs font-medium text-neutral-400">x402</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-300" icon="simple-icons:solidity" width="24"></iconify-icon>
<span className="text-xs font-medium text-neutral-400">Solidity</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="simple-icons:typescript" width="24"></iconify-icon>
<span className="text-xs font-medium text-neutral-400">TypeScript</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="simple-icons:react" width="24"></iconify-icon>
<span className="text-xs font-medium text-neutral-400">React</span>
</div>
</div>
</div>
</div>
</div>

<section className="bg-black border-white/5 border-b pt-32 pb-32 relative">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
<div>
<div className="text-[10px] font-mono text-violet-500 uppercase mb-4 tracking-widest">
                            01 — About Void402
                        </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8 leading-[1.05]">
                            The Internet Was Built for Information.
                            
                            <span className="text-neutral-600">We're Building the Protocol for Private Value.</span>
</h2>
<div className="space-y-6 text-neutral-400 leading-relaxed">
<p>
                                The digital economy runs on public infrastructure, yet value exchange remains fragmented, centralized, and alarmingly transparent.
                            </p>
<p>
                                Public blockchains promised a revolution in peer-to-peer finance, but their inherent transparency created a critical barrier to mainstream adoption. For institutions, enterprises, and any entity that values financial privacy, broadcasting every transaction to the world is not just a risk—it's a non-starter.
                            </p>
<p>
<span className="text-white font-medium">Void402 was created to solve this fundamental problem.</span> By integrating cutting-edge Fully Homomorphic Encryption (FHE) with the internet-native x402 payment standard, we have created the world's first confidential payment layer for the on-chain economy.
                            </p>
</div>
</div>
<div className="relative">
<div className="glass-card rounded-2xl p-8 border-violet-500/10">
<div className="flex items-center gap-3 mb-8">
<div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
<iconify-icon className="text-white text-2xl" icon="ph:eye-closed-fill"></iconify-icon>
</div>
<div>
<h3 className="text-lg text-white font-medium">Our Vision</h3>
<div className="text-[10px] font-mono text-violet-400 uppercase">Core Mission</div>
</div>
</div>
<p className="text-neutral-300 leading-relaxed mb-8">
                                A world where financial privacy is a fundamental right, not a privilege. Where individuals, institutions, and AI agents can transact freely without sacrificing confidentiality or compliance.
                            </p>
<div className="flex items-center gap-4">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-violet-600 border-2 border-black flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="ph:user-fill"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-purple-600 border-2 border-black flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="ph:buildings-fill"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-indigo-600 border-2 border-black flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="ph:robot-fill"></iconify-icon>
</div>
</div>
<span className="text-xs text-neutral-500">+2 Stakeholder Types</span>
</div>
<button className="mt-8 flex items-center gap-2 text-xs font-mono text-violet-400 hover:text-violet-300 transition-colors uppercase tracking-widest">
                                Learn More
                                <iconify-icon icon="ph:arrow-right"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 bg-black py-32 relative overflow-hidden">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[150px] pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 border border-red-500/30 rounded-full bg-red-900/20">
<iconify-icon className="text-red-400" icon="ph:warning-fill"></iconify-icon>
<span className="text-[10px] font-mono text-red-400 uppercase tracking-widest">Critical Issue</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-[1.05]">
                            The Blockchain
                            
                            <span className="text-red-500">Confidentiality Crisis</span>
</h2>
<p className="text-neutral-400 leading-relaxed mb-8">
                            Public blockchains expose everything by default. This transparency is a critical dealbreaker for institutional banking.
                        </p>

<div className="space-y-4">
<div className="p-4 border border-red-500/20 rounded-xl bg-red-900/10 group hover:border-red-500/40 transition-colors">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-red-400 text-xl" icon="ph:chart-line-up"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Competitive Risk</h4>
<p className="text-sm text-neutral-500">Exposing financial strategies and trading patterns to competitors</p>
</div>
</div>
</div>
<div className="p-4 border border-orange-500/20 rounded-xl bg-orange-900/10 group hover:border-orange-500/40 transition-colors">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-orange-400 text-xl" icon="ph:eye"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Privacy Breach</h4>
<p className="text-sm text-neutral-500">Client data transparency visible to competitors and public</p>
</div>
</div>
</div>
<div className="p-4 border border-yellow-500/20 rounded-xl bg-yellow-900/10 group hover:border-yellow-500/40 transition-colors">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-yellow-400 text-xl" icon="ph:buildings"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Institutional Adoption</h4>
<p className="text-sm text-neutral-500">Blocked by transparency requirements of public blockchains</p>
</div>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="glass-card rounded-2xl p-6 border-red-500/10">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-white font-medium">Risk Dashboard</h3>
<p className="text-[10px] text-neutral-500 font-mono">Real-time exposure analysis</p>
</div>
<span className="px-2 py-1 bg-red-500/20 border border-red-500/30 rounded text-[9px] font-mono text-red-400">Critical</span>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-neutral-400">Tx Visibility</span>
<span className="text-red-400 font-mono">100%</span>
</div>
<div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-full bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-neutral-400">Data Exposure</span>
<span className="text-red-400 font-mono">87%</span>
</div>
<div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-[87%] bg-gradient-to-r from-red-600 to-orange-500 rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-neutral-400">Pattern Leakage</span>
<span className="text-orange-400 font-mono">94%</span>
</div>
<div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-[94%] bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-neutral-400">Competitive Risk</span>
<span className="text-orange-400 font-mono">85%</span>
</div>
<div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-[85%] bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-neutral-400">Privacy Breach</span>
<span className="text-red-400 font-mono">92%</span>
</div>
<div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-[92%] bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-neutral-400">Institutional Adoption</span>
<span className="text-yellow-400 font-mono">78%</span>
</div>
<div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-[78%] bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="mt-6 p-6 border border-white/10 rounded-xl bg-white/[0.02]">
<div className="text-[10px] font-mono text-violet-400 uppercase mb-3">Real-World Case Study</div>
<h4 className="text-white font-medium mb-2">BlackRock × JP Morgan TCN</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                                BlackRock used JP Morgan Chase's Tokenized Collateral Network (TCN) to tokenize shares in a money market fund. This transaction used a <span className="text-white">private blockchain</span>—demonstrating the critical need for confidentiality in institutional finance.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-black border-b border-white/5 overflow-hidden">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-900/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row min-h-[900px]">

<div className="w-full md:w-[45%] px-6 py-20 md:py-32 flex flex-col justify-center relative z-20 bg-gradient-to-r from-black via-black to-transparent">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-violet-500/20 rounded-full bg-violet-900/20 self-start">
<iconify-icon className="text-violet-400" icon="ph:lightbulb-filament-fill"></iconify-icon>
<span className="text-[10px] font-mono text-violet-300 uppercase tracking-widest">
                            The Solution
                        </span>
</div>
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-white mb-4 leading-[0.9]">
                        Privacy-First
                        
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-violet-300 via-violet-400 to-purple-600">
                            Technology Stack
                        </span>
</h2>
<p className="text-neutral-500 mb-8">Three revolutionary technologies combined to create the future of confidential finance.</p>
<div className="space-y-6 max-w-md">

<div className="group p-5 border border-white/10 rounded-xl bg-white/[0.02] hover:border-violet-500/30 hover:bg-violet-900/10 transition-all cursor-pointer">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon className="text-blue-400 text-2xl" icon="ph:currency-circle-dollar-fill"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">x402 Standard</h4>
<p className="text-xs text-neutral-500 mb-3">Internet-Native Payments</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded text-[9px] text-blue-400">Agent-to-agent</span>
<span className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded text-[9px] text-blue-400">Micropayments</span>
<span className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded text-[9px] text-blue-400">P2P</span>
</div>
</div>
</div>
</div>

<div className="group p-5 border border-white/10 rounded-xl bg-white/[0.02] hover:border-violet-500/30 hover:bg-violet-900/10 transition-all cursor-pointer">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon className="text-violet-400 text-2xl" icon="ph:shield-checkered-fill"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">FHE Technology</h4>
<p className="text-xs text-neutral-500 mb-3">Compute on Encrypted Data</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-0.5 bg-violet-500/10 border border-violet-500/20 rounded text-[9px] text-violet-400">Private Balances</span>
<span className="px-2 py-0.5 bg-violet-500/10 border border-violet-500/20 rounded text-[9px] text-violet-400">Anonymous</span>
</div>
</div>
</div>
</div>

<div className="group p-5 border border-white/10 rounded-xl bg-white/[0.02] hover:border-violet-500/30 hover:bg-violet-900/10 transition-all cursor-pointer">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon className="text-emerald-400 text-2xl" icon="ph:credit-card-fill"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Neobank Features</h4>
<p className="text-xs text-neutral-500 mb-3">Privacy-First Banking</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded text-[9px] text-emerald-400">Virtual Cards</span>
<span className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded text-[9px] text-emerald-400">4-8% APY</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute right-[-10%] md:right-[-5%] top-[-10%] bottom-[-10%] w-[120%] md:w-[60%] wall-container overflow-hidden pointer-events-none md:pointer-events-auto">
<div className="wall-grid h-full w-full flex gap-6 px-10">

<div className="wall-column wall-column-up flex flex-col gap-6 w-full">
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-blue-400" icon="simple-icons:coinbase" width="28"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_10px_#8b5cf6]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">Base</div>
<div className="text-[9px] font-mono text-neutral-500">Blockchain Layer</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-violet-400" icon="ph:shield-checkered-fill" width="28"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_10px_#8b5cf6]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">Fhenix</div>
<div className="text-[9px] font-mono text-neutral-500">FHE Privacy</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-blue-400" icon="ph:currency-circle-dollar-fill" width="28"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_10px_#8b5cf6]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">x402</div>
<div className="text-[9px] font-mono text-neutral-500">Payment Standard</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-neutral-300" icon="simple-icons:solidity" width="28"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_10px_#8b5cf6]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">Solidity</div>
<div className="text-[9px] font-mono text-neutral-500">Smart Contracts</div>
</div>
</div>

<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-blue-400" icon="simple-icons:coinbase" width="28"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_10px_#8b5cf6]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">Base</div>
<div className="text-[9px] font-mono text-neutral-500">Blockchain Layer</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-violet-400" icon="ph:shield-checkered-fill" width="28"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_10px_#8b5cf6]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">Fhenix</div>
<div className="text-[9px] font-mono text-neutral-500">FHE Privacy</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-blue-400" icon="ph:currency-circle-dollar-fill" width="28"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_10px_#8b5cf6]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">x402</div>
<div className="text-[9px] font-mono text-neutral-500">Payment Standard</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-neutral-300" icon="simple-icons:solidity" width="28"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_10px_#8b5cf6]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">Solidity</div>
<div className="text-[9px] font-mono text-neutral-500">Smart Contracts</div>
</div>
</div>
</div>

<div className="wall-column wall-column-down flex flex-col gap-6 w-full pt-12">
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-blue-500" icon="simple-icons:typescript" width="28"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_10px_#8b5cf6]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">TypeScript</div>
<div className="text-[9px] font-mono text-neutral-500">Backend</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-cyan-400" icon="simple-icons:react" width="28"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_10px_#8b5cf6]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">React + Vite</div>
<div className="text-[9px] font-mono text-neutral-500">Frontend</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-emerald-400" icon="ph:lock-key-fill" width="28"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_10px_#8b5cf6]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">FHERC20</div>
<div className="text-[9px] font-mono text-neutral-500">Token Standard</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-orange-400" icon="ph:robot-fill" width="28"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_10px_#8b5cf6]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">AI Agents</div>
<div className="text-[9px] font-mono text-neutral-500">Autonomous</div>
</div>
</div>

<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-blue-500" icon="simple-icons:typescript" width="28"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_10px_#8b5cf6]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">TypeScript</div>
<div className="text-[9px] font-mono text-neutral-500">Backend</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-cyan-400" icon="simple-icons:react" width="28"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_10px_#8b5cf6]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">React + Vite</div>
<div className="text-[9px] font-mono text-neutral-500">Frontend</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-emerald-400" icon="ph:lock-key-fill" width="28"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_10px_#8b5cf6]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">FHERC20</div>
<div className="text-[9px] font-mono text-neutral-500">Token Standard</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-orange-400" icon="ph:robot-fill" width="28"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_10px_#8b5cf6]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">AI Agents</div>
<div className="text-[9px] font-mono text-neutral-500">Autonomous</div>
</div>
</div>
</div>

<div className="wall-column wall-column-up flex flex-col gap-6 w-full pt-24 hidden lg:flex">
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-green-400" icon="ph:coins-fill" width="28"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_10px_#8b5cf6]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">USDC</div>
<div className="text-[9px] font-mono text-neutral-500">Stablecoin</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-pink-400" icon="ph:credit-card-fill" width="28"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_10px_#8b5cf6]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">Virtual Cards</div>
<div className="text-[9px] font-mono text-neutral-500">Neobank</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-amber-400" icon="ph:chart-pie-fill" width="28"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_10px_#8b5cf6]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">Yield Vaults</div>
<div className="text-[9px] font-mono text-neutral-500">4-8% APY</div>
</div>
</div>

<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-green-400" icon="ph:coins-fill" width="28"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_10px_#8b5cf6]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">USDC</div>
<div className="text-[9px] font-mono text-neutral-500">Stablecoin</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-pink-400" icon="ph:credit-card-fill" width="28"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_10px_#8b5cf6]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">Virtual Cards</div>
<div className="text-[9px] font-mono text-neutral-500">Neobank</div>
</div>
</div>
<div className="wall-card rounded-xl p-6 aspect-[4/3] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-amber-400" icon="ph:chart-pie-fill" width="28"></iconify-icon>
<div className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_10px_#8b5cf6]"></div>
</div>
<div>
<div className="text-sm font-mono text-white/80">Yield Vaults</div>
<div className="text-[9px] font-mono text-neutral-500">4-8% APY</div>
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
<div className="text-center mb-20">
<div className="text-[10px] font-mono text-violet-500 uppercase mb-4 tracking-widest">
                        Feature Suite
                    </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
                        Your Privacy Dashboard
                    </h2>
<p className="text-neutral-500 max-w-xl mx-auto">
                        A complete suite of privacy-first financial tools, all accessible from a single intuitive dashboard.
                    </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 spotlight-grid">
<div className="spotlight-card group p-8 border border-white/10 rounded-2xl bg-white/[0.02] hover:border-violet-500/30 transition-all relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-14 h-14 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-violet-400 text-2xl" icon="ph:lock-fill"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-2">Encrypted Balances</h3>
<p className="text-sm text-neutral-500 mb-6">View and manage your balances with FHE encryption. Only you can see your true holdings.</p>
<div className="flex items-center gap-3">
<span className="px-2 py-1 bg-violet-500/10 border border-violet-500/20 rounded text-[9px] text-violet-400 font-mono">256-bit</span>
<span className="text-[10px] text-neutral-600">Encryption</span>
</div>
</div>
<div className="spotlight-card group p-8 border border-white/10 rounded-2xl bg-white/[0.02] hover:border-violet-500/30 transition-all relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-14 h-14 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-purple-400 text-2xl" icon="ph:paper-plane-tilt-fill"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-2">Confidential Payments</h3>
<p className="text-sm text-neutral-500 mb-6">Send and receive payments with complete privacy. Transaction amounts remain hidden.</p>
<div className="flex items-center gap-3">
<span className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-[9px] text-purple-400 font-mono">FHE</span>
<span className="text-[10px] text-neutral-600">Protected</span>
</div>
</div>
<div className="spotlight-card group p-8 border border-white/10 rounded-2xl bg-white/[0.02] hover:border-violet-500/30 transition-all relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-14 h-14 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-indigo-400 text-2xl" icon="ph:credit-card-fill"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-2">Virtual Cards</h3>
<p className="text-sm text-neutral-500 mb-6">Anonymous virtual cards for online purchases. No personal data exposed.</p>
<div className="flex items-center gap-3">
<span className="px-2 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded text-[9px] text-indigo-400 font-mono">Instant</span>
<span className="text-[10px] text-neutral-600">Issuance</span>
</div>
</div>
<div className="spotlight-card group p-8 border border-white/10 rounded-2xl bg-white/[0.02] hover:border-violet-500/30 transition-all relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-14 h-14 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-emerald-400 text-2xl" icon="ph:chart-line-up-fill"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-2">Yield Vaults</h3>
<p className="text-sm text-neutral-500 mb-6">Earn competitive yields on your holdings with privacy-preserving DeFi protocols.</p>
<div className="flex items-center gap-3">
<span className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-[9px] text-emerald-400 font-mono">4-8%</span>
<span className="text-[10px] text-neutral-600">APY</span>
</div>
</div>
<div className="spotlight-card group p-8 border border-white/10 rounded-2xl bg-white/[0.02] hover:border-violet-500/30 transition-all relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-14 h-14 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-blue-400 text-2xl" icon="ph:plugs-connected-fill"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-2">x402 Protocol</h3>
<p className="text-sm text-neutral-500 mb-6">Native integration with the x402 payment standard for internet-native transactions.</p>
<div className="flex items-center gap-3">
<span className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-[9px] text-blue-400 font-mono">HTTP</span>
<span className="text-[10px] text-neutral-600">402 Native</span>
</div>
</div>
<div className="spotlight-card group p-8 border border-white/10 rounded-2xl bg-white/[0.02] hover:border-violet-500/30 transition-all relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-14 h-14 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-pink-400 text-2xl" icon="ph:sliders-horizontal-fill"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-2">Privacy Controls</h3>
<p className="text-sm text-neutral-500 mb-6">Granular controls over what information is shared and with whom.</p>
<div className="flex items-center gap-3">
<span className="px-2 py-1 bg-pink-500/10 border border-pink-500/20 rounded text-[9px] text-pink-400 font-mono">Custom</span>
<span className="text-[10px] text-neutral-600">Rules</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
<div className="text-center p-6 border border-white/5 rounded-xl">
<div className="text-3xl font-mono text-white font-semibold mb-2">100%</div>
<div className="text-xs text-neutral-500 uppercase">Privacy Guarantee</div>
</div>
<div className="text-center p-6 border border-white/5 rounded-xl">
<div className="text-3xl font-mono text-white font-semibold mb-2">24/7</div>
<div className="text-xs text-neutral-500 uppercase">Always Available</div>
</div>
<div className="text-center p-6 border border-white/5 rounded-xl">
<div className="text-3xl font-mono text-white font-semibold mb-2">0</div>
<div className="text-xs text-neutral-500 uppercase">Data Leaks</div>
</div>
<div className="text-center p-6 border border-white/5 rounded-xl">
<div className="text-3xl font-mono text-white font-semibold mb-2">∞</div>
<div className="text-xs text-neutral-500 uppercase">Scalability</div>
</div>
</div>
<div className="text-center mt-12">
<button className="shiny-cta">
<span>Open Dashboard</span>
</button>
</div>
</div>
</section>

<section className="border-b border-white/5 bg-black py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf612_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf612_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<div className="text-[10px] font-mono text-violet-500 uppercase mb-4 tracking-widest">
                        Use Cases
                    </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
                        Built for Everyone
                    </h2>
<p className="text-neutral-500">Privacy at Every Scale</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative border border-white/10 rounded-2xl overflow-hidden bg-gradient-to-b from-violet-900/10 to-transparent hover:border-violet-500/30 transition-all">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-600 to-purple-600"></div>
<div className="p-8">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center">
<iconify-icon className="text-violet-400 text-2xl" icon="ph:buildings-fill"></iconify-icon>
</div>
<div>
<div className="text-[10px] font-mono text-violet-400 uppercase">Enterprise</div>
<h3 className="text-white font-medium">Institutional DeFi</h3>
</div>
</div>
<p className="text-sm text-neutral-400 mb-6">Private trading, confidential settlements, and encrypted treasury management for enterprises.</p>
<div className="space-y-3">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-violet-500" icon="ph:check-circle-fill"></iconify-icon>
                                    Private OTC Trading
                                </div>
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-violet-500" icon="ph:check-circle-fill"></iconify-icon>
                                    Encrypted Settlements
                                </div>
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-violet-500" icon="ph:check-circle-fill"></iconify-icon>
                                    Confidential Treasury
                                </div>
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-violet-500" icon="ph:check-circle-fill"></iconify-icon>
                                    Compliance Ready
                                </div>
</div>
<button className="mt-8 flex items-center gap-2 text-xs font-mono text-violet-400 hover:text-violet-300 transition-colors uppercase tracking-widest group-hover:gap-3">
                                Learn more
                                <iconify-icon icon="ph:arrow-right"></iconify-icon>
</button>
</div>
</div>

<div className="group relative border border-white/10 rounded-2xl overflow-hidden bg-gradient-to-b from-emerald-900/10 to-transparent hover:border-emerald-500/30 transition-all">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-teal-600"></div>
<div className="p-8">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
<iconify-icon className="text-emerald-400 text-2xl" icon="ph:user-fill"></iconify-icon>
</div>
<div>
<div className="text-[10px] font-mono text-emerald-400 uppercase">Consumer</div>
<h3 className="text-white font-medium">Consumer Privacy</h3>
</div>
</div>
<p className="text-sm text-neutral-400 mb-6">Shop online, pay bills, and manage finances without exposing your data to anyone.</p>
<div className="space-y-3">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-emerald-500" icon="ph:check-circle-fill"></iconify-icon>
                                    Anonymous Payments
                                </div>
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-emerald-500" icon="ph:check-circle-fill"></iconify-icon>
                                    Hidden Balances
                                </div>
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-emerald-500" icon="ph:check-circle-fill"></iconify-icon>
                                    Zero Data Leaks
                                </div>
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-emerald-500" icon="ph:check-circle-fill"></iconify-icon>
                                    Private History
                                </div>
</div>
<button className="mt-8 flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors uppercase tracking-widest group-hover:gap-3">
                                Learn more
                                <iconify-icon icon="ph:arrow-right"></iconify-icon>
</button>
</div>
</div>

<div className="group relative border border-white/10 rounded-2xl overflow-hidden bg-gradient-to-b from-pink-900/10 to-transparent hover:border-pink-500/30 transition-all">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-600 to-rose-600"></div>
<div className="p-8">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center">
<iconify-icon className="text-pink-400 text-2xl" icon="ph:paint-brush-fill"></iconify-icon>
</div>
<div>
<div className="text-[10px] font-mono text-pink-400 uppercase">Creator</div>
<h3 className="text-white font-medium">Creator Economy</h3>
</div>
</div>
<p className="text-sm text-neutral-400 mb-6">Private payment rails for content creators and digital goods monetization.</p>
<div className="space-y-3">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-pink-500" icon="ph:check-circle-fill"></iconify-icon>
                                    Private Earnings
                                </div>
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-pink-500" icon="ph:check-circle-fill"></iconify-icon>
                                    Anonymous Tips
                                </div>
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-pink-500" icon="ph:check-circle-fill"></iconify-icon>
                                    Encrypted Subscriptions
                                </div>
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-pink-500" icon="ph:check-circle-fill"></iconify-icon>
                                    Hidden Revenue
                                </div>
</div>
<button className="mt-8 flex items-center gap-2 text-xs font-mono text-pink-400 hover:text-pink-300 transition-colors uppercase tracking-widest group-hover:gap-3">
                                Learn more
                                <iconify-icon icon="ph:arrow-right"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 bg-black py-32 relative">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
<div>
<div className="text-[10px] font-mono text-violet-500 uppercase mb-4 tracking-widest">
                            Architecture
                        </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-[1.05]">
                            Layered Design
                        </h2>
<p className="text-neutral-400 leading-relaxed mb-12">
                            A modular architecture that abstracts complexity while maintaining security.
                        </p>

<div className="space-y-4">
<div className="group p-4 border border-white/10 rounded-xl bg-white/[0.02] hover:border-violet-500/30 transition-all">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 font-mono text-sm font-semibold">1</div>
<div className="flex-1">
<h4 className="text-white font-medium">Agent Layer</h4>
<p className="text-xs text-neutral-500">Initiates tasks &amp; determines constraints</p>
</div>
<span className="px-2 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded text-[9px] text-emerald-400 font-mono">Active</span>
</div>
</div>
<div className="group p-4 border border-white/10 rounded-xl bg-white/[0.02] hover:border-violet-500/30 transition-all">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 font-mono text-sm font-semibold">2</div>
<div className="flex-1">
<h4 className="text-white font-medium">Coordination Layer</h4>
<p className="text-xs text-neutral-500">Service discovery &amp; context management</p>
</div>
<span className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-[9px] text-blue-400 font-mono">Synced</span>
</div>
</div>
<div className="group p-4 border border-white/10 rounded-xl bg-white/[0.02] hover:border-violet-500/30 transition-all">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-mono text-sm font-semibold">3</div>
<div className="flex-1">
<h4 className="text-white font-medium">Facilitation Layer</h4>
<p className="text-xs text-neutral-500">Routing, verification &amp; execution</p>
</div>
<span className="px-2 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded text-[9px] text-yellow-400 font-mono">Processing</span>
</div>
</div>
<div className="group p-4 border border-white/10 rounded-xl bg-white/[0.02] hover:border-violet-500/30 transition-all">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-mono text-sm font-semibold">4</div>
<div className="flex-1">
<h4 className="text-white font-medium">Currency Layer</h4>
<p className="text-xs text-neutral-500">Stablecoin transfers (USDC)</p>
</div>
<span className="px-2 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded text-[9px] text-emerald-400 font-mono">Liquid</span>
</div>
</div>
<div className="group p-4 border border-white/10 rounded-xl bg-white/[0.02] hover:border-violet-500/30 transition-all">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 font-mono text-sm font-semibold">5</div>
<div className="flex-1">
<h4 className="text-white font-medium">Blockchain Layer</h4>
<p className="text-xs text-neutral-500">Cryptographic settlement on Base</p>
</div>
<span className="px-2 py-1 bg-violet-500/20 border border-violet-500/30 rounded text-[9px] text-violet-400 font-mono">Confirmed</span>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-violet-600/10 via-purple-600/10 to-indigo-600/10 rounded-3xl blur-2xl"></div>
<div className="relative glass-card rounded-2xl p-6 border-violet-500/20">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<div className="text-[10px] font-mono text-neutral-500">void402://protocol/architecture/live</div>
</div>
<span className="px-2 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded text-[9px] font-mono text-emerald-400">LIVE</span>
</div>

<div className="grid grid-cols-4 gap-3 mb-6">
<div className="p-3 bg-black/40 rounded-lg border border-white/5 text-center">
<div className="text-xl text-white font-mono font-semibold">256</div>
<div className="text-[8px] text-neutral-500 uppercase">-bit FHE</div>
</div>
<div className="p-3 bg-black/40 rounded-lg border border-white/5 text-center">
<div className="text-xl text-white font-mono font-semibold">&lt;2s</div>
<div className="text-[8px] text-neutral-500 uppercase">Speed</div>
</div>
<div className="p-3 bg-black/40 rounded-lg border border-white/5 text-center">
<div className="text-xl text-white font-mono font-semibold">100%</div>
<div className="text-[8px] text-neutral-500 uppercase">Privacy</div>
</div>
<div className="p-3 bg-black/40 rounded-lg border border-white/5 text-center">
<div className="text-xl text-white font-mono font-semibold">∞</div>
<div className="text-[8px] text-neutral-500 uppercase">Scale</div>
</div>
</div>

<div className="p-4 bg-black/40 rounded-xl border border-white/5 mb-6">
<div className="flex items-center justify-between mb-4">
<span className="text-xs text-neutral-400">System Health</span>
<span className="text-[10px] text-emerald-400 font-mono">Optimal</span>
</div>
<div className="grid grid-cols-3 gap-4">
<div>
<div className="flex justify-between text-[10px] mb-1">
<span className="text-neutral-500">CPU</span>
<span className="text-neutral-400">23%</span>
</div>
<div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-[23%] bg-emerald-500 rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] mb-1">
<span className="text-neutral-500">Memory</span>
<span className="text-neutral-400">45%</span>
</div>
<div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-[45%] bg-blue-500 rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] mb-1">
<span className="text-neutral-500">Network</span>
<span className="text-neutral-400">78%</span>
</div>
<div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-[78%] bg-violet-500 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="p-4 bg-gradient-to-r from-violet-900/20 to-purple-900/20 rounded-xl border border-violet-500/20">
<div className="flex items-center justify-between mb-4">
<div>
<h4 className="text-white font-medium">Agent Layer</h4>
<div className="text-[10px] text-neutral-500 font-mono">LAYER 1/5</div>
</div>
<button className="text-[10px] font-mono text-violet-400 hover:text-violet-300 flex items-center gap-1">
                                        View Docs
                                        <iconify-icon icon="ph:arrow-right"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="text-center">
<div className="text-sm text-white font-mono">2.4K/s</div>
<div className="text-[9px] text-neutral-500 uppercase">requests</div>
</div>
<div className="text-center">
<div className="text-sm text-white font-mono">12ms</div>
<div className="text-[9px] text-neutral-500 uppercase">latency</div>
</div>
<div className="text-center">
<div className="text-sm text-white font-mono">99.99%</div>
<div className="text-[9px] text-neutral-500 uppercase">uptime</div>
</div>
</div>
</div>

<div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
<div className="flex items-center gap-4">
<span className="text-[10px] text-neutral-600 font-mono">Base Mainnet</span>
<span className="text-[10px] text-neutral-600 font-mono">256-bit FHE</span>
</div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-[10px] text-neutral-400 font-mono">Connected</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 bg-black py-32 overflow-hidden">
<div className="max-w-[1400px] mx-auto px-6">
<div className="text-center mb-20">
<div className="text-[10px] font-mono text-violet-500 uppercase mb-4 tracking-widest">
                        Roadmap
                    </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
                        Building the Future
                    </h2>
<p className="text-neutral-500">of Private Finance</p>
</div>

<div className="relative mt-20">

<div className="absolute top-[27px] left-0 w-full h-px bg-white/10 z-0"></div>
<div className="absolute top-[27px] left-0 w-1/4 h-px bg-gradient-to-r from-violet-500 to-purple-500 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">

<div className="group">
<div className="w-14 h-14 bg-black border-2 border-violet-500 rounded-full flex items-center justify-center mb-8 relative pulse-glow">
<span className="text-sm font-mono text-violet-400">Q1</span>
<div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
<iconify-icon className="text-black text-[10px]" icon="ph:check-bold"></iconify-icon>
</div>
</div>
<div className="text-[10px] font-mono text-violet-400 uppercase mb-2">2026</div>
<h4 className="text-lg text-white font-medium mb-3">Protocol Launch</h4>
<p className="text-sm text-neutral-500 leading-relaxed mb-4">
                                Launch of the Void402 protocol on Base mainnet with FHE-powered smart contracts and developer SDKs.
                            </p>
<div className="flex items-center gap-2">
<div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-[65%] bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"></div>
</div>
<span className="text-[10px] font-mono text-violet-400">65%</span>
</div>
</div>

<div className="group">
<div className="w-14 h-14 bg-black border border-white/20 rounded-full flex items-center justify-center mb-8 group-hover:border-violet-500/50 transition-colors">
<span className="text-sm font-mono text-neutral-500">Q2</span>
</div>
<div className="text-[10px] font-mono text-neutral-600 uppercase mb-2">2026</div>
<h4 className="text-lg text-white font-medium mb-3">Consumer App</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                                Mobile-first consumer application with virtual cards, instant transfers, and yield generation.
                            </p>
</div>

<div className="group">
<div className="w-14 h-14 bg-black border border-white/20 rounded-full flex items-center justify-center mb-8 group-hover:border-violet-500/50 transition-colors">
<span className="text-sm font-mono text-neutral-500">Q3</span>
</div>
<div className="text-[10px] font-mono text-neutral-600 uppercase mb-2">2026</div>
<h4 className="text-lg text-white font-medium mb-3">Governance</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                                Decentralized governance launch with token distribution and community-driven protocol decisions.
                            </p>
</div>

<div className="group">
<div className="w-14 h-14 bg-black border border-white/20 rounded-full flex items-center justify-center mb-8 group-hover:border-violet-500/50 transition-colors relative">
<span className="text-sm font-mono text-neutral-500">Q4</span>
<div className="absolute w-2 h-2 bg-violet-500 rounded-full top-0 right-0 animate-pulse"></div>
</div>
<div className="text-[10px] font-mono text-neutral-600 uppercase mb-2">2026</div>
<h4 className="text-lg text-white font-medium mb-3">Agentic Economy</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                                Full AI agent integration enabling autonomous, privacy-preserving machine-to-machine transactions.
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
<div className="text-[10px] font-mono text-violet-500 uppercase mb-4 tracking-widest">
                            FAQ
                        </div>
<h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight mb-6">
                            Frequently Asked
                            
                            Questions
                        </h2>
<p className="text-sm text-neutral-500 max-w-xs leading-relaxed mb-8">
                            Everything you need to know about Void402 and privacy-first payments.
                        </p>
<button className="text-xs font-mono text-violet-400 hover:text-violet-300 flex items-center gap-2 uppercase tracking-widest">
<iconify-icon icon="ph:discord-logo" width="18"></iconify-icon>
                            Join our Discord
                        </button>
</div>
<div className="lg:col-span-8 border-t border-white/10">
<div className="group border-b border-white/10">
<details className="group" open="">
<summary className="flex justify-between items-center py-6 cursor-pointer list-none outline-none">
<span className="text-white font-medium tracking-tight flex items-center gap-3">
<iconify-icon className="text-violet-400" icon="ph:shield-checkered"></iconify-icon>
                                        What is Fully Homomorphic Encryption (FHE)?
                                    </span>
<span className="text-violet-500 font-mono text-xs group-open:rotate-45 transition-transform duration-300">+</span>
</summary>
<div className="pb-6 text-neutral-400 text-sm leading-relaxed max-w-2xl overflow-hidden pl-9">
<p>FHE is a form of encryption that allows computations to be performed on encrypted data without decrypting it first. This means your transaction amounts, balances, and financial data remain private even while being processed on the blockchain. Void402 uses FHE to enable truly confidential transactions.</p>
</div>
</details>
</div>
<div className="group border-b border-white/10">
<details className="group">
<summary className="flex justify-between items-center py-6 cursor-pointer list-none outline-none">
<span className="text-white font-medium tracking-tight flex items-center gap-3">
<iconify-icon className="text-blue-400" icon="ph:currency-circle-dollar"></iconify-icon>
                                        What is the x402 protocol?
                                    </span>
<span className="text-violet-500 font-mono text-xs group-open:rotate-45 transition-transform duration-300">+</span>
</summary>
<div className="pb-6 text-neutral-400 text-sm leading-relaxed max-w-2xl overflow-hidden pl-9">
<p>x402 is an open, neutral payment standard that activates HTTP 402 (Payment Required). It enables any website, app, or API to request payment instantly, enabling micropayments, agent-to-agent transactions, and usage-based billing natively on the internet.</p>
</div>
</details>
</div>
<div className="group border-b border-white/10">
<details className="group">
<summary className="flex justify-between items-center py-6 cursor-pointer list-none outline-none">
<span className="text-white font-medium tracking-tight flex items-center gap-3">
<iconify-icon className="text-emerald-400" icon="ph:lock"></iconify-icon>
                                        How does Void402 protect my privacy?
                                    </span>
<span className="text-violet-500 font-mono text-xs group-open:rotate-45 transition-transform duration-300">+</span>
</summary>
<div className="pb-6 text-neutral-400 text-sm leading-relaxed max-w-2xl overflow-hidden pl-9">
<p>Void402 uses FHE to encrypt your transaction amounts and balances at the protocol level. Unlike traditional blockchain transactions where everything is public, your financial data remains completely private while still being verifiable on-chain.</p>
</div>
</details>
</div>
<div className="group border-b border-white/10">
<details className="group">
<summary className="flex justify-between items-center py-6 cursor-pointer list-none outline-none">
<span className="text-white font-medium tracking-tight flex items-center gap-3">
<iconify-icon className="text-pink-400" icon="ph:credit-card"></iconify-icon>
                                        What are Anonymous Virtual Cards?
                                    </span>
<span className="text-violet-500 font-mono text-xs group-open:rotate-45 transition-transform duration-300">+</span>
</summary>
<div className="pb-6 text-neutral-400 text-sm leading-relaxed max-w-2xl overflow-hidden pl-9">
<p>Anonymous Virtual Cards are disposable payment cards that can be generated instantly for online purchases. They don't expose your real identity or financial information, providing complete privacy for e-commerce transactions.</p>
</div>
</details>
</div>
<div className="group border-b border-white/10">
<details className="group">
<summary className="flex justify-between items-center py-6 cursor-pointer list-none outline-none">
<span className="text-white font-medium tracking-tight flex items-center gap-3">
<iconify-icon className="text-orange-400" icon="ph:robot"></iconify-icon>
                                        Can AI agents use Void402?
                                    </span>
<span className="text-violet-500 font-mono text-xs group-open:rotate-45 transition-transform duration-300">+</span>
</summary>
<div className="pb-6 text-neutral-400 text-sm leading-relaxed max-w-2xl overflow-hidden pl-9">
<p>Yes! Void402 is specifically designed for the agentic economy. AI agents can autonomously conduct transactions using our x402-compatible APIs, enabling machine-to-machine payments with full privacy and security.</p>
</div>
</details>
</div>
<div className="group border-b border-white/10">
<details className="group">
<summary className="flex justify-between items-center py-6 cursor-pointer list-none outline-none">
<span className="text-white font-medium tracking-tight flex items-center gap-3">
<iconify-icon className="text-cyan-400" icon="ph:cube"></iconify-icon>
                                        Which blockchains does Void402 support?
                                    </span>
<span className="text-violet-500 font-mono text-xs group-open:rotate-45 transition-transform duration-300">+</span>
</summary>
<div className="pb-6 text-neutral-400 text-sm leading-relaxed max-w-2xl overflow-hidden pl-9">
<p>Void402 is initially launching on Base (Coinbase L2) with Fhenix FHE integration. Our modular architecture allows for expansion to additional EVM-compatible chains in future releases.</p>
</div>
</details>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black border-b border-white/5 relative">
<div className="max-w-[1400px] mx-auto px-6">
<div className="relative z-10 w-full bg-black border border-violet-500/20 rounded-3xl overflow-hidden min-h-[500px] flex flex-col items-center justify-center group isolate">

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[100px] mix-blend-screen"></div>
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen" loop="" muted="" playsinline="" style={{filter: 'hue-rotate(260deg) contrast(1.2) saturate(1.2)'}}>
<source src="https://cdn.coverr.co/videos/coverr-digital-lines-moving-background-4770/1080p.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,black_100%)]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
</div>

<div className="relative z-10 flex flex-col items-center text-center p-8 md:p-12 max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-4 py-2 mb-10 border border-violet-500/20 rounded-full bg-violet-900/20 backdrop-blur-xl">
<iconify-icon className="text-violet-400" icon="ph:wallet-fill"></iconify-icon>
<span className="text-[10px] font-mono text-violet-300 uppercase tracking-widest">
                                Connect &amp; Experience
                            </span>
</div>
<h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-8 leading-[0.9]">
                            Ready to Transform Your
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-violet-300 via-violet-400 to-purple-600">
                                Financial Privacy?
                            </span>
</h2>
<p className="text-neutral-400 text-lg font-light leading-relaxed max-w-lg mb-12">
                            Connect your wallet and experience the future of confidential finance.
                        </p>
<div className="flex flex-col sm:flex-row items-center gap-6">
<button className="shiny-cta">
<span className="flex items-center gap-2">
<iconify-icon icon="ph:rocket-launch"></iconify-icon>
                                    Launch App
                                </span>
</button>
<a className="group text-xs font-mono text-neutral-500 hover:text-white uppercase tracking-widest transition-colors flex items-center gap-2" href="#">
<iconify-icon icon="ph:twitter-logo" width="16"></iconify-icon>
                                Follow on Twitter
                                <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="ph:arrow-right"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black pt-32 pb-12 border-t border-white/10">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-24">
<div className="text-[12vw] md:text-[10vw] leading-[0.8] font-bold tracking-tighter text-white opacity-90 select-none hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-t hover:from-violet-900 hover:to-violet-300 transition-all duration-700 cursor-default">
                        VOID402.
                    </div>
<div className="flex flex-col gap-4 text-right mb-4 mt-8 md:mt-0">
<a className="text-lg text-neutral-400 hover:text-white transition-colors flex items-center gap-2 justify-end" href="#">
                            Launch App
                            <iconify-icon icon="ph:arrow-right"></iconify-icon>
</a>
<div className="text-sm text-neutral-600">
                            The Confidential Payment Layer
                        </div>
</div>
</div></div></footer></main>
    </>
  );
}
