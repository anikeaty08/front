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



        document.addEventListener('DOMContentLoaded', () => {
            const flashlight = document.getElementById('flashlight');
            // Select both new marquee cards and old style cards if any
            const cards = document.querySelectorAll('.spotlight-card');

            document.addEventListener('mousemove', (e) => {
                // Global flashlight reveal
                if(flashlight.style.opacity === '0' || flashlight.style.opacity === '') {
                    flashlight.style.opacity = '1';
                }
                
                // Update global flashlight position
                document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
                document.body.style.setProperty('--mouse-y', `${e.clientY}px`);

                // Update individual cards spotlight
                cards.forEach(card => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    // Only update CSS vars if card is somewhat visible/active to save performance
                    card.style.setProperty('--card-mouse-x', `${x}px`);
                    card.style.setProperty('--card-mouse-y', `${y}px`);
                });
            });
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
      

<div id="flashlight"></div>

<nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 bg-black/80 backdrop-blur-md border-b border-white/5">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg shadow-red-900/20">
<iconify-icon className="text-white text-xl" icon="solar:gamepad-bold-duotone"></iconify-icon>
</div>
<span className="font-bold tracking-tight text-lg text-white">Drive X</span>
</div>
<div className="hidden md:flex gap-8 text-sm text-zinc-400 font-medium">
<a className="hover:text-white transition-colors flex items-center gap-1.5" href="#">Store</a>
<a className="hover:text-white transition-colors" href="#">Hardware</a>
<a className="hover:text-white transition-colors" href="#">Community</a>
</div>
<button className="bg-white text-black px-4 py-2 rounded-full text-xs font-semibold hover:bg-zinc-200 transition-colors tracking-wide flex items-center gap-2">
            My Cart (0)
            <iconify-icon className="text-zinc-900" icon="solar:cart-large-minimalistic-bold-duotone"></iconify-icon>
</button>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-24 px-6 overflow-hidden z-10">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-red-600/10 blur-[120px] -z-10 pointer-events-none rounded-full mix-blend-screen"></div>
<div className="max-w-5xl mx-auto text-center relative">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 text-red-400 text-xs font-medium mb-8 animate-in" style={{animationDelay: '0.1s'}}>
<iconify-icon className="text-red-500 text-base" icon="solar:flame-bold-duotone"></iconify-icon>
<span>Summer Drop: Series X is here</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] mb-8 animate-in" style={{animationDelay: '0.2s'}}>
                Dominate <br/>
<span className="text-gradient">The Lobby.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed font-normal animate-in" style={{animationDelay: '0.3s'}}>
                Precision engineered peripherals for the elite. Latency is a choice—choose speed.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-in" style={{animationDelay: '0.4s'}}>
<button className="group relative px-8 py-4 bg-gradient-to-b from-red-600 to-red-700 hover:to-red-600 text-white rounded-full text-sm font-semibold transition-all shadow-[0_10px_30px_-10px_rgba(220,38,38,0.5)] flex items-center gap-2 hover:-translate-y-1">
                    Shop Now
                    <iconify-icon className="text-lg" icon="solar:arrow-right-bold-duotone"></iconify-icon>
</button>
<button className="px-8 py-4 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 rounded-full text-sm font-medium transition-colors flex items-center gap-2">
<iconify-icon className="text-lg text-zinc-500" icon="solar:play-circle-bold-duotone"></iconify-icon>
                    Watch Trailer
                </button>
</div>
</div>
</header>

<div className="w-full border-y border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden py-8 z-10 relative">
<div className="whitespace-nowrap flex animate-marquee-logos hover:[animation-play-state:paused]">

<div className="flex items-center gap-24 px-12">
<iconify-icon className="text-3xl text-zinc-600 hover:text-white transition-colors duration-300" icon="simple-icons:nvidia"></iconify-icon>
<iconify-icon className="text-4xl text-zinc-600 hover:text-white transition-colors duration-300" icon="simple-icons:amd"></iconify-icon>
<iconify-icon className="text-4xl text-zinc-600 hover:text-white transition-colors duration-300" icon="simple-icons:razer"></iconify-icon>
<iconify-icon className="text-4xl text-zinc-600 hover:text-white transition-colors duration-300" icon="simple-icons:logitechg"></iconify-icon>
<iconify-icon className="text-3xl text-zinc-600 hover:text-white transition-colors duration-300" icon="simple-icons:twitch"></iconify-icon>
<iconify-icon className="text-3xl text-zinc-600 hover:text-white transition-colors duration-300" icon="simple-icons:discord"></iconify-icon>
<iconify-icon className="text-3xl text-zinc-600 hover:text-white transition-colors duration-300" icon="simple-icons:steam"></iconify-icon>
<iconify-icon className="text-3xl text-zinc-600 hover:text-white transition-colors duration-300" icon="simple-icons:unrealengine"></iconify-icon>
</div>

<div className="flex items-center gap-24 px-12">
<iconify-icon className="text-3xl text-zinc-600 hover:text-white transition-colors duration-300" icon="simple-icons:nvidia"></iconify-icon>
<iconify-icon className="text-4xl text-zinc-600 hover:text-white transition-colors duration-300" icon="simple-icons:amd"></iconify-icon>
<iconify-icon className="text-4xl text-zinc-600 hover:text-white transition-colors duration-300" icon="simple-icons:razer"></iconify-icon>
<iconify-icon className="text-4xl text-zinc-600 hover:text-white transition-colors duration-300" icon="simple-icons:logitechg"></iconify-icon>
<iconify-icon className="text-3xl text-zinc-600 hover:text-white transition-colors duration-300" icon="simple-icons:twitch"></iconify-icon>
<iconify-icon className="text-3xl text-zinc-600 hover:text-white transition-colors duration-300" icon="simple-icons:discord"></iconify-icon>
<iconify-icon className="text-3xl text-zinc-600 hover:text-white transition-colors duration-300" icon="simple-icons:steam"></iconify-icon>
<iconify-icon className="text-3xl text-zinc-600 hover:text-white transition-colors duration-300" icon="simple-icons:unrealengine"></iconify-icon>
</div>
</div>
</div>

<section className="py-24 relative z-10 overflow-hidden">
<div className="max-w-6xl mx-auto px-6 mb-12 animate-in" style={{animationDelay: '0.1s'}}>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-4 text-white">
                Elite <span className="text-zinc-600">Hardware.</span>
</h2>
<p className="text-zinc-400 max-w-lg">
                Equipment used by top esports professionals worldwide.
            </p>
</div>

<div className="marquee-mask w-full">
<div className="animate-marquee-cards py-8 pl-6">


<div className="spotlight-card w-[340px] h-[420px] rounded-3xl p-6 flex flex-col justify-between shrink-0 border border-white/5">
<div className="relative h-48 w-full bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl flex items-center justify-center border border-white/5 mb-4 group overflow-hidden">
<iconify-icon className="text-6xl text-red-500 group-hover:scale-110 transition-transform duration-500" icon="solar:keyboard-bold-duotone"></iconify-icon>
<div className="absolute top-3 right-3 px-2 py-1 bg-red-600 text-white text-[10px] font-bold uppercase rounded tracking-wider">New</div>
</div>
<div>
<h3 className="text-xl font-bold text-white mb-1">Vulcan Pro TKL</h3>
<p className="text-zinc-500 text-xs mb-4">Optical Mechanical Switch</p>
<div className="flex items-center justify-between mt-4">
<span className="text-lg font-semibold text-white">$149.99</span>
<button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors">
<iconify-icon icon="solar:cart-plus-bold-duotone"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="spotlight-card w-[340px] h-[420px] rounded-3xl p-6 flex flex-col justify-between shrink-0 border border-white/5">
<div className="relative h-48 w-full bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl flex items-center justify-center border border-white/5 mb-4 group overflow-hidden">
<iconify-icon className="text-6xl text-blue-500 group-hover:scale-110 transition-transform duration-500" icon="solar:headphones-round-bold-duotone"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-bold text-white mb-1">Sonic Wave 7.1</h3>
<p className="text-zinc-500 text-xs mb-4">Wireless Spatial Audio</p>
<div className="flex items-center justify-between mt-4">
<span className="text-lg font-semibold text-white">$199.99</span>
<button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors">
<iconify-icon icon="solar:cart-plus-bold-duotone"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="spotlight-card w-[340px] h-[420px] rounded-3xl p-6 flex flex-col justify-between shrink-0 border border-white/5">
<div className="relative h-48 w-full bg-gradient-to-br from-green-500/10 to-transparent rounded-2xl flex items-center justify-center border border-white/5 mb-4 group overflow-hidden">
<iconify-icon className="text-6xl text-green-500 group-hover:scale-110 transition-transform duration-500" icon="solar:mouse-bold-duotone"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-bold text-white mb-1">Viper Ultralight</h3>
<p className="text-zinc-500 text-xs mb-4">58g Esports Mouse</p>
<div className="flex items-center justify-between mt-4">
<span className="text-lg font-semibold text-white">$89.99</span>
<button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors">
<iconify-icon icon="solar:cart-plus-bold-duotone"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="spotlight-card w-[340px] h-[420px] rounded-3xl p-6 flex flex-col justify-between shrink-0 border border-white/5">
<div className="relative h-48 w-full bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl flex items-center justify-center border border-white/5 mb-4 group overflow-hidden">
<iconify-icon className="text-6xl text-purple-500 group-hover:scale-110 transition-transform duration-500" icon="solar:monitor-bold-duotone"></iconify-icon>
<div className="absolute top-3 right-3 px-2 py-1 bg-purple-600 text-white text-[10px] font-bold uppercase rounded tracking-wider">Sale</div>
</div>
<div>
<h3 className="text-xl font-bold text-white mb-1">OLED 240Hz</h3>
<p className="text-zinc-500 text-xs mb-4">27" 1440p Gaming Monitor</p>
<div className="flex items-center justify-between mt-4">
<div className="flex flex-col">
<span className="text-xs text-zinc-500 line-through">$899.00</span>
<span className="text-lg font-semibold text-white">$749.99</span>
</div>
<button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors">
<iconify-icon icon="solar:cart-plus-bold-duotone"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="spotlight-card w-[340px] h-[420px] rounded-3xl p-6 flex flex-col justify-between shrink-0 border border-white/5">
<div className="relative h-48 w-full bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl flex items-center justify-center border border-white/5 mb-4 group overflow-hidden">
<iconify-icon className="text-6xl text-orange-500 group-hover:scale-110 transition-transform duration-500" icon="solar:gamepad-charge-bold-duotone"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-bold text-white mb-1">Drive Controller</h3>
<p className="text-zinc-500 text-xs mb-4">Haptic Feedback Pro</p>
<div className="flex items-center justify-between mt-4">
<span className="text-lg font-semibold text-white">$69.99</span>
<button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors">
<iconify-icon icon="solar:cart-plus-bold-duotone"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="spotlight-card w-[340px] h-[420px] rounded-3xl p-6 flex flex-col justify-between shrink-0 border border-white/5">
<div className="relative h-48 w-full bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl flex items-center justify-center border border-white/5 mb-4 group overflow-hidden">
<iconify-icon className="text-6xl text-red-500 group-hover:scale-110 transition-transform duration-500" icon="solar:keyboard-bold-duotone"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-bold text-white mb-1">Vulcan Pro TKL</h3>
<p className="text-zinc-500 text-xs mb-4">Optical Mechanical Switch</p>
<div className="flex items-center justify-between mt-4">
<span className="text-lg font-semibold text-white">$149.99</span>
<button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors">
<iconify-icon icon="solar:cart-plus-bold-duotone"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="spotlight-card w-[340px] h-[420px] rounded-3xl p-6 flex flex-col justify-between shrink-0 border border-white/5">
<div className="relative h-48 w-full bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl flex items-center justify-center border border-white/5 mb-4 group overflow-hidden">
<iconify-icon className="text-6xl text-blue-500 group-hover:scale-110 transition-transform duration-500" icon="solar:headphones-round-bold-duotone"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-bold text-white mb-1">Sonic Wave 7.1</h3>
<p className="text-zinc-500 text-xs mb-4">Wireless Spatial Audio</p>
<div className="flex items-center justify-between mt-4">
<span className="text-lg font-semibold text-white">$199.99</span>
<button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors">
<iconify-icon icon="solar:cart-plus-bold-duotone"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 border-t border-white/5 bg-zinc-950/50">
<div className="max-w-5xl mx-auto animate-in" style={{animationDelay: '0.2s'}}>
<div className="text-center mb-10">
<h3 className="text-2xl font-semibold mb-2">Drive X Launcher</h3>
<p className="text-zinc-500 text-sm">One app for all your hardware customization.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl p-2 relative overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-20 pointer-events-none"></div>
<div className="relative bg-zinc-950 rounded-2xl overflow-hidden border border-white/5 shadow-2xl">

<div className="h-12 border-b border-white/5 flex items-center px-4 gap-4 bg-zinc-900/50">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30"></div>
</div>
<div className="h-6 w-64 bg-zinc-800/50 rounded-md border border-white/5 flex items-center px-3">
<span className="text-[10px] text-zinc-500">drive-x-launcher.exe</span>
</div>
</div>

<div className="flex h-[500px]">

<div className="w-64 border-r border-white/5 bg-zinc-900/20 p-6 flex flex-col gap-6 hidden md:flex">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-red-600 flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:gamepad-bold-duotone"></iconify-icon>
</div>
<span className="font-semibold text-sm">My Library</span>
</div>
<div className="space-y-1">
<div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 text-white text-sm border border-white/5">
<iconify-icon className="text-red-500" icon="solar:chart-square-bold-duotone"></iconify-icon>
                                    Statistics
                                </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-500 text-sm hover:text-zinc-300 transition-colors">
<iconify-icon icon="solar:tuning-bold-duotone"></iconify-icon>
                                    Profiles
                                </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-500 text-sm hover:text-zinc-300 transition-colors">
<iconify-icon icon="solar:cloud-download-bold-duotone"></iconify-icon>
                                    Drivers
                                </div>
</div>
<div className="mt-auto">
<div className="p-4 rounded-xl bg-gradient-to-br from-zinc-800 to-black border border-white/5">
<div className="text-xs text-zinc-400 mb-2">Connected Device</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-green-500" icon="solar:mouse-bold-duotone"></iconify-icon>
<span className="text-xs font-semibold">Viper Ultralight</span>
</div>
<div className="w-full bg-zinc-800 h-1 mt-3 rounded-full overflow-hidden">
<div className="bg-green-500 h-full w-[85%]"></div>
</div>
<div className="text-[10px] text-zinc-500 mt-1">Battery 85%</div>
</div>
</div>
</div>

<div className="flex-1 p-8 bg-black/50 relative overflow-hidden">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10">
<div className="flex justify-between items-end mb-8">
<div>
<h4 className="text-zinc-400 text-xs font-medium uppercase tracking-wider mb-1">Session Duration</h4>
<div className="text-4xl font-bold text-white tracking-tight flex items-baseline gap-2">
                                            4h 32m 
                                            <span className="text-sm font-medium text-green-500">+12%</span>
</div>
</div>
<div className="flex gap-2">
<button className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg text-xs font-medium transition-colors border border-white/5">Daily</button>
<button className="bg-white text-black px-4 py-2 rounded-lg text-xs font-medium transition-colors">Weekly</button>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="p-5 rounded-xl border border-white/5 bg-zinc-900/60 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
<iconify-icon className="text-red-500" icon="solar:target-bold-duotone"></iconify-icon>
</div>
<span className="text-sm font-medium">Aim Accuracy</span>
</div>
<div className="text-2xl font-bold text-white mb-1">68.4%</div>
<div className="text-xs text-zinc-500">Top 5% of players</div>
</div>
<div className="p-5 rounded-xl border border-white/5 bg-zinc-900/60 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
<iconify-icon className="text-blue-500" icon="solar:keyboard-bold-duotone"></iconify-icon>
</div>
<span className="text-sm font-medium">APM Average</span>
</div>
<div className="text-2xl font-bold text-white mb-1">245</div>
<div className="text-xs text-zinc-500">Actions per minute</div>
</div>
</div>
<div className="mt-4 p-5 rounded-xl border border-white/5 bg-zinc-900/60 backdrop-blur-sm">
<div className="flex justify-between items-center mb-4">
<span className="text-sm font-medium">Performance Graph</span>
<iconify-icon className="text-zinc-500" icon="solar:menu-dots-bold"></iconify-icon>
</div>
<div className="flex items-end gap-2 h-32 w-full px-2">
<div className="w-full bg-red-500/20 h-[40%] rounded-t-sm"></div>
<div className="w-full bg-red-500/30 h-[60%] rounded-t-sm"></div>
<div className="w-full bg-red-500/40 h-[30%] rounded-t-sm"></div>
<div className="w-full bg-red-500/50 h-[80%] rounded-t-sm relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">Peak</div>
</div>
<div className="w-full bg-red-500/40 h-[50%] rounded-t-sm"></div>
<div className="w-full bg-red-500/30 h-[70%] rounded-t-sm"></div>
<div className="w-full bg-red-500/20 h-[45%] rounded-t-sm"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-20 px-6 bg-black border-t border-white/5 relative z-10">
<div className="max-w-4xl mx-auto flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center mb-8 border border-white/5 shadow-lg">
<iconify-icon className="text-white text-2xl" icon="solar:gamepad-bold-duotone"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">
                Ready to upgrade<br/>your setup?
            </h2>
<div className="flex gap-6 mb-12">
<a className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all" href="#">
<iconify-icon icon="simple-icons:twitter"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all" href="#">
<iconify-icon icon="simple-icons:youtube"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all" href="#">
<iconify-icon icon="simple-icons:discord"></iconify-icon>
</a>
</div>
<p className="text-xs text-zinc-600 font-medium">© 2024 Drive X Gaming. All rights reserved.</p>
</div>
</footer>



    </>
  );
}
