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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();

        // Parallax Interaction for Key Visual
        const kvBg = document.getElementById('kv-bg');
        window.addEventListener('mousemove', (e) => {
            if (!kvBg) return;
            const x = (e.clientX / window.innerWidth - 0.5) * 40;
            const y = (e.clientY / window.innerHeight - 0.5) * 40;
            kvBg.style.transform = `translate(${x}px, ${y}px)`;
        });

        // Entrance Animation for KV
        setTimeout(() => {
            const kvContent = document.getElementById('kv-content');
            const scrollIndicator = document.getElementById('scroll-indicator');
            if (kvContent) {
                kvContent.classList.remove('opacity-0', 'translate-y-12');
            }
            if (scrollIndicator) {
                scrollIndicator.classList.remove('opacity-0');
            }
        }, 150);

        // Smart Screen Mode Switcher
        function setMode(mode) {
            const btnNormal = document.getElementById('btn-normal');
            const btnBoost = document.getElementById('btn-boost');
            const puffCount = document.getElementById('puff-count');
            const modeDesc = document.getElementById('mode-desc');
            const boostText = document.getElementById('boost-text');
            const screenGlow = document.getElementById('screen-glow');
            const deviceContainer = document.getElementById('device-container');

            if (mode === 'normal') {
                btnNormal.className = "px-8 py-3.5 rounded-full bg-white text-black font-normal text-xl transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]";
                btnBoost.className = "px-8 py-3.5 rounded-full bg-transparent border border-white/20 text-zinc-400 font-normal text-xl transition-all duration-300 hover:text-white hover:bg-white/5";
                
                puffCount.innerText = "57k";
                modeDesc.innerText = "Smooth hit, e-liquid saving.";
                
                boostText.style.opacity = "0";
                screenGlow.className = "absolute inset-0 bg-transparent transition-colors duration-500 blur-xl opacity-30";
                deviceContainer.style.borderColor = "rgb(39 39 42)"; 
                puffCount.style.color = "white";

            } else if (mode === 'boost') {
                btnBoost.className = "px-8 py-3.5 rounded-full bg-fuchsia-500 text-white font-normal text-xl transition-all duration-300 shadow-[0_0_20px_rgba(217,70,239,0.4)] border border-fuchsia-500";
                btnNormal.className = "px-8 py-3.5 rounded-full bg-transparent border border-white/20 text-zinc-400 font-normal text-xl transition-all duration-300 hover:text-white hover:bg-white/5";
                
                puffCount.innerText = "35k";
                modeDesc.innerText = "Richer flavor, bigger clouds.";
                
                boostText.style.opacity = "1";
                screenGlow.className = "absolute inset-0 bg-fuchsia-600 transition-colors duration-500 blur-2xl opacity-40";
                deviceContainer.style.borderColor = "rgb(134 25 143 / 0.5)"; 
                puffCount.style.color = "rgb(232 121 249)"; 
            }
        }
    
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
      

<nav className="fixed top-0 w-full z-50 bg-zinc-950/70 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-8 h-8 text-purple-500" data-lucide="audio-lines" strokeWidth="1.5"></i>
<span className="text-2xl font-medium tracking-tight text-white">KeyFlow</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xl font-normal text-zinc-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#flavors">Flavors</a>
<a className="hover:text-white transition-colors" href="#specs">Specs</a>
</div>
<button className="px-6 py-2.5 rounded-full bg-white text-black text-xl font-normal hover:bg-zinc-200 transition-colors">
                Buy Now
            </button>
</div>
</nav>

<header className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-zinc-950">

<div className="absolute inset-[-5%] w-[110%] h-[110%] bg-cover bg-center transition-transform duration-75 ease-out will-change-transform" id="kv-bg" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp'}}>

<div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-[2px]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-transparent"></div>
</div>

<div className="relative z-10 text-center max-w-5xl mx-auto px-6 opacity-0 translate-y-12 transition-all duration-1000 ease-out" id="kv-content">
<div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-200 text-sm font-normal mb-10 hover:bg-white/10 hover:scale-105 hover:border-white/20 transition-all duration-300 cursor-pointer backdrop-blur-md shadow-2xl">
<i className="w-4 h-4 text-purple-400" data-lucide="sparkles" strokeWidth="1.5"></i>
                Experience the Ultimate Flow
            </div>
<h1 className="text-7xl md:text-[9rem] leading-none font-medium tracking-tight text-white mb-6 drop-shadow-2xl">
                KeyFlow
            </h1>
<p className="text-3xl md:text-5xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 drop-shadow-lg mb-12">
                Key For Fun.
            </p>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-zinc-400 hover:text-white transition-all duration-1000 ease-out cursor-pointer group opacity-0" id="scroll-indicator" onclick="document.getElementById('features').scrollIntoView({behavior: 'smooth'})">
<span className="text-xs font-normal tracking-widest uppercase group-hover:-translate-y-1 transition-transform duration-300">Scroll to explore</span>
<i className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" data-lucide="mouse" strokeWidth="1.5"></i>
</div>
</header>

<section className="py-24 border-t border-white/5 relative z-10 bg-zinc-950" id="features">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl font-medium tracking-tight text-white text-center mb-16">All-in-One Experience</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
<div className="flex flex-col items-center text-center p-4 group cursor-default">
<div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 text-purple-400 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="shapes" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-normal text-zinc-300">Designed to Flow</span>
</div>
<div className="flex flex-col items-center text-center p-4 group cursor-default">
<div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 text-fuchsia-400 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="droplets" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-normal text-zinc-300">Flavor That Flows</span>
</div>
<div className="flex flex-col items-center text-center p-4 group cursor-default">
<div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="wind" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-normal text-zinc-300">Draw That Flows</span>
</div>
<div className="flex flex-col items-center text-center p-4 group cursor-default">
<div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="eye" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-normal text-zinc-300">Visible Tank</span>
</div>
<div className="flex flex-col items-center text-center p-4 group cursor-default">
<div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 text-green-400 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="monitor-smartphone" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-normal text-zinc-300">Colorful Screen</span>
</div>
<div className="flex flex-col items-center text-center p-4 group cursor-default">
<div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 text-yellow-400 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-normal text-zinc-300">Quick Switch Mode</span>
</div>
<div className="flex flex-col items-center text-center p-4 md:col-start-2 md:col-span-2 group cursor-default">
<div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 text-orange-400 group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8" data-lucide="battery-charging" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-normal text-zinc-300">1000mAh Fast Charging</span>
</div>
</div>
</div>
</section>

<section className="relative min-h-[90vh] flex flex-col items-center justify-start pt-32 pb-24 overflow-hidden bg-zinc-950 border-t border-white/5">
<div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none mt-32">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYwNSIvPjwvc3ZnPg==')] opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>

<div className="absolute w-[800px] h-[800px] bg-purple-600/10 blur-[100px] rounded-full"></div>
<div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[80px] rounded-full"></div>

<div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-purple-500/20 flex items-center justify-center bg-zinc-950/50 backdrop-blur-3xl shadow-[0_0_100px_rgba(168,85,247,0.1)]">
<div className="absolute inset-4 md:inset-8 rounded-full border border-purple-500/10 flex items-center justify-center">
<div className="absolute inset-4 md:inset-8 rounded-full border border-purple-500/5"></div>
</div>
<i className="w-32 h-32 md:w-64 md:h-64 text-purple-400 drop-shadow-[0_0_30px_rgba(192,132,252,0.4)]" data-lucide="fingerprint" strokeWidth="1.5"></i>
</div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-8">Designed to Flow</h2>
<p className="text-2xl md:text-3xl text-zinc-400 leading-relaxed max-w-3xl mx-auto font-normal">
                KeyFlow redefines the disposable vape experience by mastering the art of Flow. Crafted with a focus on clean, fluid lines and a naturally contoured shape, KeyFlow feels as smooth in your hand as it does on your lips.
            </p>
</div>
</section>

<section className="py-32 bg-zinc-900/30 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="aspect-square rounded-3xl bg-gradient-to-tr from-purple-900/20 to-fuchsia-900/20 border border-purple-500/20 flex items-center justify-center order-2 md:order-1 relative">
<i className="w-32 h-32 text-fuchsia-400 animate-[spin_10s_linear_infinite]" data-lucide="atom" strokeWidth="1.5"></i>
</div>
<div className="order-1 md:order-2">
<div className="inline-flex items-center gap-2 text-fuchsia-400 mb-4 font-normal text-xl">
<i className="w-5 h-5" data-lucide="cpu" strokeWidth="1.5"></i>
                    Sytek Dual Mesh
                </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Flavor That Flows</h2>
<p className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-normal">
                    The innovative Sytek dual mesh coils work together for decent clouds and satisfying hits. Advanced flavor engineering delivers a flow inhale from the first puff to the last, with rich, consistent flavor and just the right amount of vapor.
                </p>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Draw That Flows</h2>
<p className="text-xl md:text-2xl text-zinc-400 leading-relaxed mb-10 font-normal">
                    Equipped with 2 sizes of air intakes, KeyFlow airflow is consistently smooth, quiet, and perfectly balanced. No harshness, no struggle—just pure, flowing satisfaction.
                </p>
<div className="flex flex-col gap-4">
<div className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors">
<span className="text-xl font-normal text-white">Tight MTL</span>
<div className="w-20 h-2.5 rounded-full bg-blue-500/30 flex justify-start"><div className="w-8 h-full bg-blue-500 rounded-full group-hover:scale-x-110 origin-left transition-transform"></div></div>
</div>
<div className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors">
<span className="text-xl font-normal text-white">Loose MTL</span>
<div className="w-20 h-2.5 rounded-full bg-blue-500/30 flex justify-end"><div className="w-8 h-full bg-blue-500 rounded-full group-hover:scale-x-110 origin-right transition-transform"></div></div>
</div>
</div>
</div>
<div className="aspect-square rounded-3xl bg-zinc-900/50 border border-white/5 flex items-center justify-center relative shadow-[inset_0_0_100px_rgba(59,130,246,0.1)]">
<i className="w-32 h-32 text-blue-500/50" data-lucide="wind" strokeWidth="1.5"></i>
</div>
</div>
</section>

<section className="py-32 bg-zinc-900/30 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Visible E-juice Tank</h2>
<p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-16 leading-relaxed font-normal">
                KeyFlow innovative Sytek combines e-juice visible tank with device perfectly, no leakage at all. KeyFlow-all you can see.
            </p>
<div className="w-full h-72 md:h-96 rounded-3xl bg-gradient-to-b from-cyan-900/20 to-transparent border border-cyan-500/20 flex flex-col items-center justify-center relative overflow-hidden">
<div className="absolute bottom-0 w-full h-1/2 bg-cyan-500/10 backdrop-blur-sm border-t border-cyan-500/30"></div>
<i className="w-16 h-16 text-cyan-400 mb-6 relative z-10" data-lucide="droplet" strokeWidth="1.5"></i>
<span className="text-3xl font-normal text-cyan-200 relative z-10 tracking-tight">100% Visibility</span>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Smart Screen &amp; Quick Switch</h2>
<p className="text-xl md:text-2xl text-zinc-400 leading-relaxed mb-12 font-normal">
                    The colorful screen clearly shows real-time battery level and mode, putting key information at your fingertips. Switch between Normal mode for longevity or Boost mode for intense flavor.
                </p>
<div className="flex gap-4 mb-12">
<button className="px-8 py-3.5 rounded-full bg-white text-black font-normal text-xl transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]" id="btn-normal" onclick="setMode('normal')">
                        Normal Mode
                    </button>
<button className="px-8 py-3.5 rounded-full bg-transparent border border-white/20 text-zinc-400 font-normal text-xl transition-all duration-300 hover:text-white hover:bg-white/5" id="btn-boost" onclick="setMode('boost')">
                        Boost Mode
                    </button>
</div>
<div className="grid grid-cols-2 gap-8">
<div>
<div className="text-sm font-normal text-zinc-500 uppercase tracking-widest mb-2">Max Puffs</div>
<div className="flex items-baseline gap-2">
<span className="text-7xl md:text-8xl font-medium tracking-tight text-white transition-all duration-500" id="puff-count">57k</span>
</div>
<p className="text-xl text-zinc-400 mt-4 transition-all duration-300 font-normal" id="mode-desc">Smooth hit, e-liquid saving.</p>
</div>
</div>
</div>

<div className="flex justify-center">
<div className="w-[300px] h-[580px] bg-zinc-950 rounded-[3rem] border-[10px] border-zinc-800 p-6 flex flex-col relative shadow-2xl transition-all duration-500" id="device-container">
<div className="w-full h-56 bg-black rounded-3xl border border-white/10 mt-12 relative overflow-hidden flex flex-col items-center justify-center transition-all duration-500" id="screen-area">
<div className="absolute inset-0 bg-transparent transition-colors duration-500 blur-xl opacity-30" id="screen-glow"></div>
<div className="absolute top-8 text-fuchsia-500 font-normal tracking-widest text-sm opacity-0 transition-opacity duration-300 shadow-[0_0_10px_rgba(217,70,239,0.5)]" id="boost-text">
                            BOOST
                        </div>
<div className="text-6xl font-medium tracking-tight text-green-400 relative z-10 mt-4 flex items-baseline gap-1">
                            85<span className="text-3xl font-normal">%</span>
</div>
<div className="w-20 h-2 bg-white/10 rounded-full mt-6 overflow-hidden relative z-10">
<div className="w-[85%] h-full bg-green-400 rounded-full"></div>
</div>
</div>
<div className="mt-auto text-center">
<div className="w-16 h-1.5 bg-zinc-800 rounded-full mx-auto mb-3"></div>
<span className="text-sm font-medium tracking-widest text-zinc-600 uppercase">KeyFlow</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-900/30 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-yellow-500/10 text-yellow-500 mb-8">
<i className="w-12 h-12" data-lucide="battery-charging" strokeWidth="1.5"></i>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">1000mAh Quick Charging</h2>
<p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-16 leading-relaxed font-normal">
                KeyFlow obviously improves the strength and endurance in your daily use. KeyFlow perfection is on.
            </p>
<div className="flex flex-col md:flex-row justify-center gap-8">
<div className="p-10 rounded-3xl bg-white/5 border border-white/10 md:w-72">
<div className="text-7xl font-medium tracking-tight text-white mb-4">48<span className="text-2xl font-normal text-zinc-500 ml-1">hrs</span></div>
<div className="text-xl font-normal text-zinc-400">Up to 2 days use</div>
</div>
<div className="p-10 rounded-3xl bg-white/5 border border-white/10 md:w-72 flex flex-col items-center justify-center">
<i className="w-12 h-12 text-yellow-400 mx-auto mb-4" data-lucide="zap" strokeWidth="1.5"></i>
<div className="text-xl font-normal text-white">Quick Charging</div>
<div className="text-base text-zinc-400 mt-1 font-normal">Visible indicator</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950 border-t border-white/5" id="flavors">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Fresh and Natural Flavors</h2>
<p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-16 leading-relaxed font-normal">
                Made with premium ingredients, the KeyFlow perfectly captures the flow spirit of the fresh and natural flavors. Vape a taste to flow feeling and freedom.
            </p>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

<div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-colors flex flex-col items-center justify-center gap-3 group cursor-default">
<div className="w-5 h-5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform duration-300"></div>
<span className="text-xl font-normal text-zinc-300 group-hover:text-white transition-colors">Blueberry Watermelon</span>
<span className="text-sm text-zinc-500 font-normal">蓝莓西瓜</span>
</div>
<div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-colors flex flex-col items-center justify-center gap-3 group cursor-default">
<div className="w-5 h-5 rounded-full bg-cyan-300 group-hover:scale-125 transition-transform duration-300"></div>
<span className="text-xl font-normal text-zinc-300 group-hover:text-white transition-colors">Super Mint</span>
<span className="text-sm text-zinc-500 font-normal">极凉薄荷</span>
</div>
<div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-colors flex flex-col items-center justify-center gap-3 group cursor-default">
<div className="w-5 h-5 rounded-full bg-green-500 group-hover:scale-125 transition-transform duration-300"></div>
<span className="text-xl font-normal text-zinc-300 group-hover:text-white transition-colors">Sour Apple Ice</span>
<span className="text-sm text-zinc-500 font-normal">酸苹果</span>
</div>
<div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-colors flex flex-col items-center justify-center gap-3 group cursor-default">
<div className="w-5 h-5 rounded-full bg-red-500 group-hover:scale-125 transition-transform duration-300"></div>
<span className="text-xl font-normal text-zinc-300 group-hover:text-white transition-colors">Watermelon Ice</span>
<span className="text-sm text-zinc-500 font-normal">西瓜冰</span>
</div>
<div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-colors flex flex-col items-center justify-center gap-3 group cursor-default">
<div className="w-5 h-5 rounded-full bg-orange-300 group-hover:scale-125 transition-transform duration-300"></div>
<span className="text-xl font-normal text-zinc-300 group-hover:text-white transition-colors">Peach Ice</span>
<span className="text-sm text-zinc-500 font-normal">桃子</span>
</div>
<div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-colors flex flex-col items-center justify-center gap-3 group cursor-default">
<div className="w-5 h-5 rounded-full bg-blue-600 group-hover:scale-125 transition-transform duration-300"></div>
<span className="text-xl font-normal text-zinc-300 group-hover:text-white transition-colors">Blue Razz Ice</span>
<span className="text-sm text-zinc-500 font-normal">蓝莓拉兹</span>
</div>
<div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-colors flex flex-col items-center justify-center gap-3 group cursor-default">
<div className="w-5 h-5 rounded-full bg-pink-500 group-hover:scale-125 transition-transform duration-300"></div>
<span className="text-xl font-normal text-zinc-300 group-hover:text-white transition-colors">Strawberry Ice</span>
<span className="text-sm text-zinc-500 font-normal">草莓</span>
</div>
<div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-colors flex flex-col items-center justify-center gap-3 group cursor-default">
<div className="w-5 h-5 rounded-full bg-purple-300 group-hover:scale-125 transition-transform duration-300"></div>
<span className="text-xl font-normal text-zinc-300 group-hover:text-white transition-colors">White Grape Ice</span>
<span className="text-sm text-zinc-500 font-normal">白葡萄冰</span>
</div>
<div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-colors flex flex-col items-center justify-center gap-3 group cursor-default">
<div className="w-5 h-5 rounded-full bg-teal-400 group-hover:scale-125 transition-transform duration-300"></div>
<span className="text-xl font-normal text-zinc-300 group-hover:text-white transition-colors">Miami Mint</span>
<span className="text-sm text-zinc-500 font-normal">迈阿密薄荷</span>
</div>
<div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-colors flex flex-col items-center justify-center gap-3 group cursor-default">
<div className="w-5 h-5 rounded-full bg-yellow-400 group-hover:scale-125 transition-transform duration-300"></div>
<span className="text-xl font-normal text-zinc-300 group-hover:text-white transition-colors">Sour Gummy</span>
<span className="text-sm text-zinc-500 font-normal">酸白色软糖</span>
</div>
<div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-colors flex flex-col items-center justify-center gap-3 group cursor-default">
<div className="w-5 h-5 rounded-full bg-orange-400 group-hover:scale-125 transition-transform duration-300"></div>
<span className="text-xl font-normal text-zinc-300 group-hover:text-white transition-colors">Sour Mango Pineapple</span>
<span className="text-sm text-zinc-500 font-normal">酸芒果菠萝</span>
</div>
<div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-colors flex flex-col items-center justify-center gap-3 group cursor-default">
<div className="w-5 h-5 rounded-full bg-amber-700 group-hover:scale-125 transition-transform duration-300"></div>
<span className="text-xl font-normal text-zinc-300 group-hover:text-white transition-colors">Tobacco</span>
<span className="text-sm text-zinc-500 font-normal">弗吉尼亚烟草</span>
</div>
<div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-colors flex flex-col items-center justify-center gap-3 group cursor-default">
<div className="w-5 h-5 rounded-full bg-yellow-500 group-hover:scale-125 transition-transform duration-300"></div>
<span className="text-xl font-normal text-zinc-300 group-hover:text-white transition-colors">Mexican Mango</span>
<span className="text-sm text-zinc-500 font-normal">芒果</span>
</div>
<div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-colors flex flex-col items-center justify-center gap-3 group cursor-default">
<div className="w-5 h-5 rounded-full bg-rose-500 group-hover:scale-125 transition-transform duration-300"></div>
<span className="text-xl font-normal text-zinc-300 group-hover:text-white transition-colors">Kiwi Dragon Berry</span>
<span className="text-sm text-zinc-500 font-normal">奇异果火龙果莓果</span>
</div>
<div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-colors flex flex-col items-center justify-center gap-3 group cursor-default">
<div className="w-5 h-5 rounded-full bg-red-400 group-hover:scale-125 transition-transform duration-300"></div>
<span className="text-xl font-normal text-zinc-300 group-hover:text-white transition-colors">Lemon Cherry</span>
<span className="text-sm text-zinc-500 font-normal">柠檬樱桃</span>
</div>
</div>
<p className="mt-16 text-zinc-500 text-xl italic font-normal">More flavors to be expected.</p>
</div>
</section>

<section className="py-32 bg-zinc-900/30 border-t border-white/5" id="specs">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-12 text-center">Specifications</h2>
<div className="bg-zinc-950 rounded-3xl border border-white/5 overflow-hidden">
<dl className="divide-y divide-white/5">
<div className="px-8 py-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
<dt className="text-xl font-normal text-zinc-400">Size</dt>
<dd className="text-xl font-normal text-white">98.5 × 50.85 × 27mm</dd>
</div>
<div className="px-8 py-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
<dt className="text-xl font-normal text-zinc-400">Battery</dt>
<dd className="text-xl font-normal text-white">1000mAh</dd>
</div>
<div className="px-8 py-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
<dt className="text-xl font-normal text-zinc-400">Modes</dt>
<dd className="text-xl font-normal text-white">NORMAL / BOOST</dd>
</div>
<div className="px-8 py-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
<dt className="text-xl font-normal text-zinc-400">Coil</dt>
<dd className="text-xl font-normal text-white">1.2Ω dual mesh</dd>
</div>
<div className="px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-white/[0.02] transition-colors">
<dt className="text-xl font-normal text-zinc-400">Screen</dt>
<dd className="text-xl font-normal text-white text-right">Colorful screen shows battery level</dd>
</div>
<div className="px-8 py-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
<dt className="text-xl font-normal text-zinc-400">Airflow</dt>
<dd className="text-xl font-normal text-white">Adjustment</dd>
</div>
<div className="px-8 py-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
<dt className="text-xl font-normal text-zinc-400">Charging</dt>
<dd className="text-xl font-normal text-white">Type-C</dd>
</div>
</dl>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-16">Packaging Presentation</h2>
<div className="flex flex-col md:flex-row items-center justify-center gap-8">
<div className="w-full md:w-1/3 aspect-[3/4] bg-zinc-900/50 rounded-3xl border border-white/10 flex items-center justify-center p-8">
<div className="text-zinc-500 font-normal text-xl">Product Device</div>
</div>
<i className="w-8 h-8 text-zinc-600 hidden md:block" data-lucide="plus" strokeWidth="1.5"></i>
<div className="w-full md:w-1/3 aspect-[3/4] bg-zinc-900/50 rounded-3xl border border-white/10 flex items-center justify-center p-8 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent"></div>
<div className="text-zinc-400 font-normal text-xl relative z-10">Small Box</div>
</div>
<i className="w-8 h-8 text-zinc-600 hidden md:block" data-lucide="plus" strokeWidth="1.5"></i>
<div className="w-full md:w-1/3 aspect-[4/3] md:aspect-[3/4] bg-zinc-900/50 rounded-3xl border border-white/10 flex items-center justify-center p-8 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent"></div>
<div className="text-zinc-400 font-normal text-xl relative z-10">Display Medium Box</div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-zinc-950 text-center text-zinc-500 text-base font-normal">
<p>© 2024 KeyFlow. Experience the Flow.</p>
</footer>



    </>
  );
}
