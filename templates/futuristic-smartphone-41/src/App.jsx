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
      

<nav className="fixed top-0 w-full z-50 px-6 py-4">
<div className="glass-panel rounded-full max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
<a className="text-xl font-bold tracking-tighter uppercase z-10 flex items-center gap-2" href="#">
<span className="w-3 h-3 bg-lime-400 rounded-full animate-pulse"></span>
                SanTech
            </a>
<div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#models">Models</a>
<a className="hover:text-white transition-colors" href="#features">OS</a>
<a className="hover:text-white transition-colors" href="#vision">Vision</a>
</div>
<button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-lime-400 transition-colors duration-300 flex items-center gap-2 group">
                Pre-order
                <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</button>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-12 overflow-hidden mesh-gradient">

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-400/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="container mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-lime-400 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
</span>
                SERIES X DROPPING SOON
            </div>
<h1 className="text-7xl md:text-9xl font-semibold tracking-tighter leading-none mb-6">
                BEYOND <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">REALITY</span>
</h1>
<p className="text-neutral-400 text-lg md:text-xl max-w-xl mx-auto mb-12 font-light">
                The smartphone reimagined for the creators, the dreamers, and the night owls. Experience pure fluidity.
            </p>
<div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-20">
<button className="bg-lime-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-lime-300 hover:scale-105 transition-all duration-300 neon-glow">
                    Shop Collection
                </button>
<button className="px-8 py-4 rounded-full text-lg font-medium border border-white/20 hover:bg-white/5 hover:border-white/40 transition-all flex items-center gap-2">
<span className="iconify" data-icon="lucide:play" data-strokeWidth="1.5" data-width="20"></span>
                    Watch Keynote
                </button>
</div>

<div className="relative w-64 h-[500px] md:w-80 md:h-[600px] mx-auto border-[8px] border-neutral-900 rounded-[3rem] shadow-2xl bg-neutral-900 overflow-hidden transform hover:-translate-y-4 transition-transform duration-500">

<div className="w-full h-full bg-black relative overflow-hidden group">

<div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20 flex items-center justify-center gap-2">
<div className="w-1.5 h-1.5 bg-neutral-800 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-blue-900/50 rounded-full"></div>
</div>

<div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-lime-900 opacity-80 group-hover:scale-110 transition-transform duration-700"></div>

<div className="absolute top-20 left-0 w-full text-center z-10">
<div className="text-6xl font-medium tracking-tighter text-white/90">12:42</div>
<div className="text-sm font-medium text-white/60 mt-2">Wednesday, Oct 24</div>
</div>

<div className="absolute bottom-8 left-8 p-3 rounded-full bg-white/10 backdrop-blur-md">
<span className="iconify text-white" data-icon="lucide:flashlight" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="absolute bottom-8 right-8 p-3 rounded-full bg-white/10 backdrop-blur-md">
<span className="iconify text-white" data-icon="lucide:camera" data-strokeWidth="1.5" data-width="20"></span>
</div>
</div>

<div className="absolute top-24 -left-[10px] w-[2px] h-10 bg-neutral-700 rounded-l-lg"></div>
<div className="absolute top-40 -left-[10px] w-[2px] h-16 bg-neutral-700 rounded-l-lg"></div>
<div className="absolute top-32 -right-[10px] w-[2px] h-20 bg-neutral-700 rounded-r-lg"></div>
</div>
</div>
</section>

<div className="bg-lime-400 text-black py-4 overflow-hidden border-y border-black relative z-20 rotate-1 scale-105">
<div className="whitespace-nowrap scrolling-text flex gap-8 font-mono text-xl md:text-2xl font-bold uppercase tracking-tight">
<span>/// SNAPDRAGON 8 GEN 3</span>
<span>/// 200MP AI CAMERA</span>
<span>/// 144HZ LTPO OLED</span>
<span>/// TITANIUM FRAME</span>
<span>/// SATELLITE CONNECTIVITY</span>
<span>/// SNAPDRAGON 8 GEN 3</span>
<span>/// 200MP AI CAMERA</span>
<span>/// 144HZ LTPO OLED</span>
<span>/// TITANIUM FRAME</span>
<span>/// SATELLITE CONNECTIVITY</span>
<span>/// SNAPDRAGON 8 GEN 3</span>
<span>/// 200MP AI CAMERA</span>
<span>/// 144HZ LTPO OLED</span>
<span>/// TITANIUM FRAME</span>
<span>/// SATELLITE CONNECTIVITY</span>
</div>
</div>

<section className="py-24 px-6 bg-black" id="models">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-4">CHOOSE YOUR <br/> WEAPON</h2>
<p className="text-neutral-500 max-w-sm">Precision engineered hardware meets software soul. Select the device that fits your universe.</p>
</div>
<div className="flex gap-2">
<button className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center hover:bg-neutral-900 transition-colors">
<span className="iconify" data-icon="lucide:arrow-left" data-strokeWidth="1.5" data-width="20"></span>
</button>
<button className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center hover:bg-neutral-900 transition-colors">
<span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="20"></span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-neutral-900 rounded-3xl p-6 border border-neutral-800 hover:border-purple-500 transition-all duration-500 hover:-translate-y-2">
<div className="absolute top-6 right-6 bg-purple-500/10 text-purple-400 text-xs font-mono px-3 py-1 rounded-full border border-purple-500/20">
                        FLAGSHIP
                    </div>
<div className="h-64 w-full bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

<div className="w-24 h-48 bg-black rounded-2xl border-2 border-neutral-700 shadow-2xl group-hover:scale-110 transition-transform duration-500 relative z-10">
<div className="absolute inset-2 bg-purple-900/40 rounded-xl"></div>
</div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-2xl font-semibold tracking-tight">SanTech Ultra</h3>
<span className="text-xl font-mono text-white/80">$999</span>
</div>
<p className="text-neutral-500 text-sm mb-6">For those who demand everything.</p>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-purple-400" data-icon="lucide:cpu" data-strokeWidth="1.5" data-width="16"></span>
<span>Neural Engine X3</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-purple-400" data-icon="lucide:aperture" data-strokeWidth="1.5" data-width="16"></span>
<span>200MP Main Sensor</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-purple-400" data-icon="lucide:battery-charging" data-strokeWidth="1.5" data-width="16"></span>
<span>2-Day Battery</span>
</div>
</div>
<button className="w-full py-3 bg-white text-black rounded-xl font-semibold hover:bg-purple-400 transition-colors">
                        Pre-order
                    </button>
</div>

<div className="group relative bg-neutral-900 rounded-3xl p-6 border border-neutral-800 hover:border-lime-400 transition-all duration-500 hover:-translate-y-2">
<div className="absolute top-6 right-6 bg-lime-400/10 text-lime-400 text-xs font-mono px-3 py-1 rounded-full border border-lime-400/20">
                        BEST SELLER
                    </div>
<div className="h-64 w-full bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="w-24 h-44 bg-black rounded-2xl border-2 border-neutral-700 shadow-2xl group-hover:scale-110 transition-transform duration-500 relative z-10">
<div className="absolute inset-2 bg-lime-900/40 rounded-xl"></div>
</div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-2xl font-semibold tracking-tight">SanTech Flow</h3>
<span className="text-xl font-mono text-white/80">$699</span>
</div>
<p className="text-neutral-500 text-sm mb-6">Perfect balance of power and size.</p>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-lime-400" data-icon="lucide:cpu" data-strokeWidth="1.5" data-width="16"></span>
<span>Neural Engine X2</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-lime-400" data-icon="lucide:smartphone" data-strokeWidth="1.5" data-width="16"></span>
<span>6.1" OLED 120Hz</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-lime-400" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="16"></span>
<span>Fast Charging 65W</span>
</div>
</div>
<button className="w-full py-3 bg-lime-400 text-black rounded-xl font-semibold hover:bg-lime-300 transition-colors">
                        Buy Now
                    </button>
</div>

<div className="group relative bg-neutral-900 rounded-3xl p-6 border border-neutral-800 hover:border-blue-400 transition-all duration-500 hover:-translate-y-2">
<div className="absolute top-6 right-6 bg-blue-400/10 text-blue-400 text-xs font-mono px-3 py-1 rounded-full border border-blue-400/20">
                        COMPACT
                    </div>
<div className="h-64 w-full bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="w-20 h-40 bg-black rounded-2xl border-2 border-neutral-700 shadow-2xl group-hover:scale-110 transition-transform duration-500 relative z-10">
<div className="absolute inset-2 bg-blue-900/40 rounded-xl"></div>
</div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-2xl font-semibold tracking-tight">SanTech Mini</h3>
<span className="text-xl font-mono text-white/80">$499</span>
</div>
<p className="text-neutral-500 text-sm mb-6">Pocket sized superpower.</p>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-blue-400" data-icon="lucide:cpu" data-strokeWidth="1.5" data-width="16"></span>
<span>Neural Engine X2</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-blue-400" data-icon="lucide:feather" data-strokeWidth="1.5" data-width="16"></span>
<span>140g Lightweight</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<span className="iconify text-blue-400" data-icon="lucide:palette" data-strokeWidth="1.5" data-width="16"></span>
<span>5 Pop Colors</span>
</div>
</div>
<button className="w-full py-3 bg-white text-black rounded-xl font-semibold hover:bg-blue-400 transition-colors">
                        Customize
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-950" id="features">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-12 text-center">ENGINEERED DIFFERENTLY</h2>
<div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 bg-neutral-900 rounded-3xl p-8 border border-neutral-800 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent"></div>
<span className="iconify text-purple-400 mb-6" data-icon="lucide:camera" data-strokeWidth="1.5" data-width="48"></span>
<h3 className="text-3xl font-semibold mb-4 relative z-10">Night Sight Vision</h3>
<p className="text-neutral-400 max-w-sm relative z-10">
                        Capture the unseen. Our AI-driven sensor illuminates the darkest environments without losing detail or introducing noise.
                    </p>
<div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] group-hover:bg-purple-500/30 transition-colors duration-500"></div>
</div>

<div className="md:col-span-2 bg-neutral-900 rounded-3xl p-8 border border-neutral-800 flex items-center justify-between relative overflow-hidden group">
<div className="relative z-10">
<h3 className="text-2xl font-semibold mb-2">Titanium Build</h3>
<p className="text-neutral-400 text-sm">Aerospace-grade durability.</p>
</div>
<span className="iconify text-neutral-600 group-hover:text-white transition-colors" data-icon="lucide:shield-check" data-strokeWidth="1" data-width="64"></span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent to-neutral-800/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>

<div className="bg-neutral-900 rounded-3xl p-8 border border-neutral-800 flex flex-col justify-between group hover:border-lime-400/50 transition-colors">
<span className="iconify text-lime-400" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="32"></span>
<div>
<h3 className="text-xl font-semibold">0 to 100%</h3>
<p className="text-neutral-500 text-sm mt-1">In 19 minutes.</p>
</div>
</div>

<div className="bg-neutral-900 rounded-3xl p-8 border border-neutral-800 flex flex-col justify-between group hover:border-blue-400/50 transition-colors">
<span className="iconify text-blue-400" data-icon="lucide:fingerprint" data-strokeWidth="1.5" data-width="32"></span>
<div>
<h3 className="text-xl font-semibold">Sonic ID</h3>
<p className="text-neutral-500 text-sm mt-1">Under-display security.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-900 bg-black relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-lime-400/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8">JOIN THE CULT</h2>
<p className="text-neutral-400 mb-10 text-lg">Be the first to know about drops, limited editions, and software betas.</p>
<form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
<input className="flex-1 bg-neutral-900 border border-neutral-800 rounded-full px-6 py-4 focus:outline-none focus:border-lime-400 transition-colors text-white placeholder-neutral-600" placeholder="enter your email..." type="email"/>
<button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-lime-400 transition-colors">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="py-12 px-6 border-t border-neutral-900 text-sm text-neutral-500 bg-black">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<a className="text-white text-lg font-bold tracking-tighter mb-6 block uppercase" href="#">SanTech</a>
<p>Designed in Tokyo.</p>
<p>Assembled in future.</p>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-white font-medium mb-2">Products</h4>
<a className="hover:text-lime-400 transition-colors" href="#">Ultra</a>
<a className="hover:text-lime-400 transition-colors" href="#">Flow</a>
<a className="hover:text-lime-400 transition-colors" href="#">Mini</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-white font-medium mb-2">Company</h4>
<a className="hover:text-lime-400 transition-colors" href="#">Manifesto</a>
<a className="hover:text-lime-400 transition-colors" href="#">Careers</a>
<a className="hover:text-lime-400 transition-colors" href="#">Sustainability</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-white font-medium mb-2">Support</h4>
<a className="hover:text-lime-400 transition-colors" href="#">Help Center</a>
<a className="hover:text-lime-400 transition-colors" href="#">Warranty</a>
<a className="hover:text-lime-400 transition-colors" href="#">Trade-in</a>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-neutral-900">
<p>© 2024 SanTech Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#"><span className="iconify" data-icon="lucide:instagram" data-strokeWidth="1.5" data-width="20"></span></a>
<a className="hover:text-white" href="#"><span className="iconify" data-icon="lucide:twitter" data-strokeWidth="1.5" data-width="20"></span></a>
<a className="hover:text-white" href="#"><span className="iconify" data-icon="lucide:youtube" data-strokeWidth="1.5" data-width="20"></span></a>
</div>
</div>
</footer>

    </>
  );
}
