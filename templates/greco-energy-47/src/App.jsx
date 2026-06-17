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
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
brand: {
50: '#ecfdf5',
500: '#10b981',
600: '#059669',
900: '#064e3b',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        const canvas = document.getElementById('energyCanvas');
        const ctx = canvas.getContext('2d');
        
        let width, height;
        let particles = [];
        const particleCount = 100;
        
        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        // Green Variations
        const colors = [
            'rgb(16, 185, 129)', // Emerald 500
            'rgb(52, 211, 153)', // Emerald 400
            'rgb(6, 78, 59)',    // Emerald 900
            'rgb(110, 231, 183)', // Emerald 300
            'rgb(255, 255, 255)'  // White (spark)
        ];

        class Particle {
            constructor(reset = false) {
                this.reset(reset);
            }

            reset(initial = false) {
                // Direction: Bottom-Left to Top-Right
                this.x = Math.random() * width; 
                this.y = Math.random() * height;
                
                // If initializing, spread everywhere. If resetting, start from bottom/left edge area
                if (!initial) {
                    if (Math.random() > 0.5) {
                        this.x = -10;
                        this.y = Math.random() * height;
                    } else {
                        this.x = Math.random() * width;
                        this.y = height + 10;
                    }
                }

                this.size = Math.random() * 2 + 0.5;
                this.speed = Math.random() * 3 + 1.5;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                
                // Angle between -45 and -30 degrees (up and right)
                this.angle = -Math.PI / 4 + (Math.random() * 0.2 - 0.1); 
            }

            update() {
                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;

                // Reset if out of bounds
                if (this.x > width + 20 || this.y < -20) {
                    this.reset();
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle(true));
        }

        function animate() {
            // Trail effect: instead of clearing completely, draw a transparent black rectangle
            // This creates a "tail" for moving particles
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, width, height);

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            requestAnimationFrame(animate);
        }

        animate();
    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-gradient-to-tr from-zinc-800 to-zinc-700 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
<span className="iconify text-white" data-icon="lucide:zap" data-width="18" strokeWidth="1.5"></span>
</div>
<span className="text-white font-medium tracking-tighter text-lg">GRECO<span className="text-zinc-500">ENERGY</span></span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors" href="#infrastructure">Infrastructure</a>
<a className="hover:text-white transition-colors" href="#impact">Impact</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="#">Partner</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden min-h-[85vh] flex flex-col justify-center">

<canvas className="absolute inset-0 w-full h-full z-0 opacity-70 fade-mask" id="energyCanvas"></canvas>

<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black z-0 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 z-0 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-xs font-medium text-brand-500 mb-8 hover:bg-white/5 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                    Expanding Network: 12 New Locations Added
                </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-2xl">
                    Powering the transition <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">to a hybrid future.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-xl leading-relaxed drop-shadow-md">
                    Greco Energy integrates geothermal baseloads, natural gas conversion, and solar arrays to build North America's most reliable electric vehicle charging infrastructure.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<button className="h-12 px-6 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2">
                        Find a Station
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="h-12 px-6 rounded-full border border-white/10 bg-black/20 backdrop-blur-sm hover:bg-white/10 transition-colors text-white font-medium">
                        View Coverage Map
                    </button>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-zinc-950/50 backdrop-blur-sm relative z-20">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">2.4GW</div>
<div className="text-sm text-zinc-500">Stored Capacity</div>
</div>
<div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">850+</div>
<div className="text-sm text-zinc-500">Charging Hubs</div>
</div>
<div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">99.9%</div>
<div className="text-sm text-zinc-500">Uptime Reliability</div>
</div>
<div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">3 Countries</div>
<div className="text-sm text-zinc-500">North America Wide</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Diversified Energy Generation</h2>
<p className="text-zinc-400 max-w-2xl">We don't rely on a single source. Our proprietary grid management system balances three core energy pillars to ensure consistent output regardless of weather or demand.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-all hover:bg-zinc-900/50">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<span className="iconify text-emerald-500" data-icon="lucide:activity" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Geothermal Core</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Leveraging the Earth's constant thermal energy to provide baseload power for our station batteries, ensuring 24/7 availability.</p>
<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-all hover:bg-zinc-900/50">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<span className="iconify text-orange-500" data-icon="lucide:flame" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Gas-to-Electric</h3>
<p className="text-sm text-zinc-400 leading-relaxed">High-efficiency turbines convert natural gas to electricity on-site, bridging the gap between fossil fuels and a fully electric grid.</p>
<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-all hover:bg-zinc-900/50">
<div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<span className="iconify text-yellow-500" data-icon="lucide:sun" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Solar Arrays</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Canopies over charging stations capture peak daylight energy, storing it directly into local mega-packs for evening redistribution.</p>
<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500/0 via-yellow-500/50 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1">
<div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-blue-600 rounded-2xl blur opacity-20"></div>
<div className="relative rounded-xl border border-white/10 bg-zinc-900 p-6 shadow-2xl">

<div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-sm font-medium text-white">Grid Status: Active</span>
</div>
<span className="text-xs text-zinc-500 font-mono">ID: N-AMER-044</span>
</div>

<div className="space-y-6">

<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-300 flex items-center gap-2"><span className="iconify" data-icon="lucide:sun" data-width="14"></span> Solar Input</span>
<span className="text-emerald-400 font-mono">842 kW</span>
</div>
<div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-yellow-500/80 w-[75%] rounded-full"></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-300 flex items-center gap-2"><span className="iconify" data-icon="lucide:thermometer" data-width="14"></span> Geothermal Input</span>
<span className="text-emerald-400 font-mono">1.2 MW</span>
</div>
<div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-600/80 w-[95%] rounded-full"></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-300 flex items-center gap-2"><span className="iconify" data-icon="lucide:battery-charging" data-width="14"></span> EV Output Load</span>
<span className="text-blue-400 font-mono">920 kW</span>
</div>
<div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-500/80 w-[45%] rounded-full"></div>
</div>
</div>
</div>

<div className="mt-8 grid grid-cols-2 gap-4">
<div className="bg-black/40 rounded-lg p-3 border border-white/5">
<span className="text-xs text-zinc-500 block mb-1">Storage</span>
<span className="text-lg font-mono text-white">88%</span>
</div>
<div className="bg-black/40 rounded-lg p-3 border border-white/5">
<span className="text-xs text-zinc-500 block mb-1">Efficiency</span>
<span className="text-lg font-mono text-white">96.4%</span>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">Smart Redistribution</h2>
<p className="text-zinc-400 mb-8 leading-relaxed">
                        Energy isn't just generated; it's managed. Our proprietary software intelligently routes power from the most efficient source available at any given second.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
<span className="iconify text-white" data-icon="lucide:check" data-width="12"></span>
</div>
<div>
<strong className="text-white font-medium block text-sm">Peak Shaving</strong>
<span className="text-sm text-zinc-500">Automatically switches to stored battery power during high-cost grid hours.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
<span className="iconify text-white" data-icon="lucide:check" data-width="12"></span>
</div>
<div>
<strong className="text-white font-medium block text-sm">Multi-Source Mixing</strong>
<span className="text-sm text-zinc-500">Blends natural gas generation with solar to maintain voltage stability.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
<span className="iconify text-white" data-icon="lucide:check" data-width="12"></span>
</div>
<div>
<strong className="text-white font-medium block text-sm">Grid Feedback</strong>
<span className="text-sm text-zinc-500">Excess energy is sold back to the municipal grid, lowering costs for EV owners.</span>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20">
<div className="max-w-7xl mx-auto px-6 text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">The Greco Charging Standard</h2>
<p className="text-zinc-400 max-w-2xl mx-auto">Universal compatibility. Ultra-fast speeds. Powered by nature.</p>
</div>
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="bg-zinc-900 border border-white/5 rounded-2xl p-8 flex flex-col justify-between h-full">
<div>
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-4">
<span className="iconify text-white" data-icon="lucide:map-pin" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Find a Station</h3>
<p className="text-sm text-zinc-400 mb-6">Locate our Super-Hubs across highways and metro areas.</p>
</div>
<form className="space-y-3">
<div className="relative">
<input className="w-full bg-black border border-zinc-800 rounded-lg h-10 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-zinc-600 transition-colors" placeholder="Enter zip or city" type="text"/>
<span className="iconify text-zinc-500 absolute left-3 top-2.5" data-icon="lucide:search" data-width="16"></span>
</div>
<button className="w-full h-10 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors">Search Map</button>
</form>
</div>

<div className="bg-zinc-900 border border-white/5 rounded-2xl p-8 h-full">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-medium text-white">Charging Est.</h3>
<span className="text-xs bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded border border-emerald-500/20">Live</span>
</div>
<div className="space-y-6">
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-zinc-400">Charge Level</span>
<span className="text-white font-mono">80%</span>
</div>
<input max="100" min="0" type="range" value="80"/>
</div>
<div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
<div>
<span className="text-xs text-zinc-500 block mb-1">Time to full</span>
<span className="text-lg font-medium text-white">12 <span className="text-sm font-normal text-zinc-500">min</span></span>
</div>
<div>
<span className="text-xs text-zinc-500 block mb-1">Cost (Hybrid)</span>
<span className="text-lg font-medium text-white">$4.20</span>
</div>
</div>
<p className="text-xs text-zinc-600 mt-4">
                            *Estimates based on current natural gas &amp; solar mix pricing.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6">Energize your fleet.</h2>
<p className="text-zinc-400 text-lg mb-10">Join the network of businesses and municipalities switching to Greco Energy's hybrid infrastructure solutions.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors">
                    Contact Sales
                </button>
<button className="w-full sm:w-auto h-12 px-8 rounded-full border border-zinc-800 text-white font-medium hover:bg-zinc-900 transition-colors">
                    Invest in Greco
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-16">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<span className="iconify text-white" data-icon="lucide:zap" data-width="20"></span>
<span className="text-white font-medium tracking-tighter">GRECO</span>
</a>
<p className="text-sm text-zinc-500 mb-6">
                    Redefining energy storage and distribution for the electric age.
                </p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="20"></span></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Solutions</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Geothermal Plants</a></li>
<li><a className="hover:text-white transition-colors" href="#">Solar Storage</a></li>
<li><a className="hover:text-white transition-colors" href="#">EV Charging</a></li>
<li><a className="hover:text-white transition-colors" href="#">Grid Balancing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Investors</a></li>
<li><a className="hover:text-white transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center md:text-left">
<p className="text-xs text-zinc-600">© 2024 Greco Energy Inc. All rights reserved.</p>
</div>
</footer>



    </>
  );
}
