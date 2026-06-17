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
brand: {
base: '#030303',
surface: '#0A0A0A',
accent: '#EF4444', // Red-500
accentDim: '#7F1D1D', // Red-900
accentGlow: 'rgba(239, 68, 68, 0.5)',
}
},
backgroundImage: {
'radial-glow': 'radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.1) 0%, rgba(5, 5, 5, 0) 70%)',
'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
},
animation: {
'scale-reveal': 'scaleReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'pulse-red': 'pulseRed 3s infinite',
'float': 'float 8s ease-in-out infinite',
},
keyframes: {
scaleReveal: {
'0%': { opacity: '0', transform: 'scale(0.98) translateY(10px)' },
'100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
},
pulseRed: {
'0%, 100%': { opacity: '1' },
'50%': { opacity: '0.5' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



      // Graph Initialization
      document.addEventListener('DOMContentLoaded', function() {
          const ctx = document.getElementById('b2bGraph');
          if(ctx) {
              new Chart(ctx, {
                  type: 'doughnut',
                  data: {
                      labels: ['Logistics', 'Repair', 'Refurbish'],
                      datasets: [{
                          data: [55, 35, 10],
                          backgroundColor: ['#EF4444', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.1)'],
                          borderWidth: 0,
                          hoverOffset: 0
                      }]
                  },
                  options: {
                      responsive: true,
                      maintainAspectRatio: false,
                      cutout: '75%',
                      plugins: { legend: { display: false }, tooltip: { enabled: false } },
                      animation: { duration: 1500, easing: 'easeOutQuart' }
                  }
              });
          }
      });

      // Canvas Background Animation
      const canvas = document.getElementById('bg-canvas');
      const ctx = canvas.getContext('2d');
      let width, height;
      let particles = [];

      function resize() {
          width = canvas.width = window.innerWidth;
          height = canvas.height = window.innerHeight;
      }
      window.addEventListener('resize', resize);
      resize();

      class Particle {
          constructor() {
              this.reset();
              this.y = Math.random() * height; // Start anywhere vertically
          }
          reset() {
              this.x = Math.random() * width;
              this.y = height + Math.random() * 100;
              this.speed = 0.5 + Math.random() * 1.5;
              this.size = 1 + Math.random() * 2;
              this.opacity = 0.1 + Math.random() * 0.4;
          }
          update() {
              this.y -= this.speed;
              if (this.y < -10) this.reset();
          }
          draw() {
              ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
              ctx.beginPath();
              ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
              ctx.fill();
          }
      }

      // Create Grid Lines
      function drawGrid() {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
        ctx.lineWidth = 1;
        const gridSize = 60;
        
        // Vertical lines
        for(let x = 0; x <= width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
        }

        // Horizontal lines (moving slightly)
        const offset = (Date.now() / 50) % gridSize;
        for(let y = offset; y <= height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }
      }

      // Initialize Particles
      for (let i = 0; i < 40; i++) {
          particles.push(new Particle());
      }

      // Red Data Packets (Fast moving lines)
      let packets = [];
      function addPacket() {
          if(Math.random() > 0.95) {
              packets.push({
                  x: Math.floor(Math.random() * (width / 60)) * 60, // Snap to grid
                  y: height,
                  speed: 3 + Math.random() * 2,
                  length: 20 + Math.random() * 40
              });
          }
      }

      function animate() {
          ctx.clearRect(0, 0, width, height);
          
          drawGrid();

          // Particles
          particles.forEach(p => {
              p.update();
              p.draw();
          });

          // Data Packets
          addPacket();
          ctx.strokeStyle = '#EF4444';
          ctx.lineWidth = 2;
          for(let i = packets.length - 1; i >= 0; i--) {
              let p = packets[i];
              p.y -= p.speed;
              
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p.x, p.y + p.length);
              
              // Fade out gradient effect
              const gradient = ctx.createLinearGradient(p.x, p.y, p.x, p.y + p.length);
              gradient.addColorStop(0, 'rgba(239, 68, 68, 0)');
              gradient.addColorStop(0.5, 'rgba(239, 68, 68, 0.8)');
              gradient.addColorStop(1, 'rgba(239, 68, 68, 0)');
              ctx.strokeStyle = gradient;
              
              ctx.stroke();

              if(p.y < -100) packets.splice(i, 1);
          }

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
      

<canvas id="bg-canvas"></canvas>
<div className="fixed inset-0 bg-radial-glow pointer-events-none -z-10"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-scale-reveal">
<div className="flex gap-1 shadow-black/50 border-white/10 border rounded-full pt-1 pr-2 pb-1 pl-4 shadow-2xl backdrop-blur-md items-center bg-black/40">
<div className="flex items-center gap-2 mr-6">
<span className="text-sm font-semibold text-white tracking-tight">
            Partner
          </span>
</div>
<div className="hidden md:flex gap-6 mr-6 items-center">
<a className="transition-colors hover:text-white text-xs font-medium text-white/60" href="#">
            Über uns
          </a>
<a className="transition-colors hover:text-white text-xs font-medium text-white/60" href="#">
            Karriere
          </a>
<a className="transition-colors hover:text-white text-xs font-medium text-white/60" href="#">
            B2B Anfrage
          </a>
</div>
<button className="transition-colors hover:bg-red-500 text-xs font-semibold text-black bg-white rounded-full pt-1.5 pr-4 pb-1.5 pl-4">
          Kontakt
        </button>
</div>
</nav>

<main className="h-screen-safe flex flex-col lg:flex-row overflow-hidden lg:px-12 animate-scale-reveal w-full relative items-center justify-center pt-24 pb-12">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 z-10 w-full max-w-7xl relative items-center px-6">

<div className="flex flex-col lg:items-start lg:text-left text-center items-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/20 bg-brand-accent/5 mb-8">
<div className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse"></div>
<span className="text-[10px] uppercase tracking-widest text-brand-accent font-semibold">Service Partner Network</span>
</div>

<h1 className="text-5xl sm:text-6xl lg:text-[72px] leading-[1.05] font-semibold text-white tracking-tight mb-6">
            SRsolutions
            <br/>
<span className="text-white/30 font-medium">simply</span>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-accent via-red-400 to-red-200">
              service
            </span>
</h1>

<p className="leading-relaxed text-lg font-light text-white/60 max-w-xl mb-10">
            Ihr verlässlicher Servicepartner für Reparaturen in den Bereichen
            Medizintechnik, Hausgeräte und Unterhaltungselektronik.
          </p>

<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="shiny-cta-red group px-8 py-3.5 flex items-center justify-center gap-2 cursor-pointer">
<span className="z-10 text-sm font-medium">Reparaturanfrage</span>
<span className="iconify z-10" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="transition-colors flex gap-2 group hover:bg-white/5 text-sm font-medium text-white/80 border-white/10 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 items-center justify-center cursor-pointer">
<span className="iconify" data-icon="lucide:play-circle" data-width="18"></span>
<span>Kontakt</span>
</button>
</div>
</div>

<div className="flex w-full relative perspective-1000 items-center justify-center lg:h-[700px]">

<div className="relative w-full max-w-[550px] animate-float z-20">

<div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">

<div className="flex h-12 border-b border-white/5 px-5 items-center justify-between bg-white/[0.02]">
<div className="flex gap-2 items-center">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-brand-accent/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
</div>
<span className="ml-2 text-xs font-mono text-white/50 tracking-wide uppercase">Partner_Hub_v2.0</span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] font-medium text-green-500">System Online</span>
</div>
</div>
</div>

<div className="p-6 space-y-6">

<div>
<div className="flex items-center justify-between mb-3">
<h3 className="text-xs font-semibold text-white/70 uppercase tracking-wider">Our Impact &amp; Reach</h3>
<span className="iconify text-white/30" data-icon="lucide:bar-chart-2" data-width="14"></span>
</div>
<div className="grid grid-cols-3 gap-3">

<div className="dashboard-card p-3 rounded-lg cursor-pointer group">
<div className="text-[10px] text-white/40 mb-1">Repairs</div>
<div className="text-lg font-bold text-white group-hover:text-brand-accent transition-colors">500k+</div>
<div className="text-[9px] text-green-400 flex items-center gap-0.5 mt-1">
<span className="iconify" data-icon="lucide:trending-up" data-width="10"></span>
                        +12% YoY
                      </div>
</div>

<div className="dashboard-card p-3 rounded-lg cursor-pointer group">
<div className="text-[10px] text-white/40 mb-1">Satisfaction</div>
<div className="text-lg font-bold text-white group-hover:text-brand-accent transition-colors">99.9%</div>
<div className="text-[9px] text-green-400 flex items-center gap-0.5 mt-1">
<span className="iconify" data-icon="lucide:star" data-width="10"></span>
                        Top Tier
                      </div>
</div>

<div className="dashboard-card p-3 rounded-lg cursor-pointer group">
<div className="text-[10px] text-white/40 mb-1">Partners</div>
<div className="text-lg font-bold text-white group-hover:text-brand-accent transition-colors">150+</div>
<div className="text-[9px] text-white/30 mt-1">Global</div>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-3">
<h3 className="text-xs font-semibold text-white/70 uppercase tracking-wider">Explore Our Expertise</h3>
<span className="iconify text-white/30" data-icon="lucide:layers" data-width="14"></span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

<div className="dashboard-card p-3 rounded-lg cursor-pointer service-card group relative overflow-hidden">
<div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="iconify text-white/40" data-icon="lucide:arrow-up-right" data-width="12"></span>
</div>
<span className="iconify service-icon text-white/60 mb-2 transition-transform duration-300" data-icon="lucide:activity" data-width="20"></span>
<div className="text-xs font-semibold text-white mb-1">Medizin</div>
<div className="text-[10px] text-white/40 leading-tight">High-precision medical equipment.</div>
</div>

<div className="dashboard-card p-3 rounded-lg cursor-pointer service-card group relative overflow-hidden">
<div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="iconify text-white/40" data-icon="lucide:arrow-up-right" data-width="12"></span>
</div>
<span className="iconify service-icon text-white/60 mb-2 transition-transform duration-300" data-icon="lucide:plug-2" data-width="20"></span>
<div className="text-xs font-semibold text-white mb-1">Hausgeräte</div>
<div className="text-[10px] text-white/40 leading-tight">Reliable home appliance repair.</div>
</div>

<div className="dashboard-card p-3 rounded-lg cursor-pointer service-card group relative overflow-hidden">
<div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="iconify text-white/40" data-icon="lucide:arrow-up-right" data-width="12"></span>
</div>
<span className="iconify service-icon text-white/60 mb-2 transition-transform duration-300" data-icon="lucide:tv" data-width="20"></span>
<div className="text-xs font-semibold text-white mb-1">Elektronik</div>
<div className="text-[10px] text-white/40 leading-tight">Consumer electronics experts.</div>
</div>
</div>
</div>

<div className="pt-4 border-t border-white/5">
<div className="flex flex-col sm:flex-row gap-6">

<div className="flex items-center gap-4 flex-1">
<div className="relative w-16 h-16 shrink-0">
<canvas height="64" id="b2bGraph" width="64"></canvas>
<div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
<span className="text-xs font-bold text-white">99%</span>
</div>
</div>
<div className="flex flex-col justify-center gap-1.5 w-full">
<div className="flex items-center justify-between text-[10px]">
<span className="text-white/80">Logistics</span>
<span className="font-mono text-brand-accent">55%</span>
</div>
<div className="w-full bg-white/10 rounded-full h-1">
<div className="bg-brand-accent h-1 rounded-full w-[55%]"></div>
</div>
<div className="flex items-center justify-between text-[10px] mt-1">
<span className="text-white/60">Repair Center</span>
<span className="font-mono text-white/40">35%</span>
</div>
<div className="w-full bg-white/10 rounded-full h-1">
<div className="bg-white/30 h-1 rounded-full w-[35%]"></div>
</div>
</div>
</div>

<div className="flex flex-col gap-2 justify-center min-w-[140px]">
<div className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors cursor-pointer">
<div className="flex items-center gap-2">
<input checked="" className="custom-checkbox" type="checkbox"/>
<span className="text-[10px] font-medium text-white/80">API Integration</span>
</div>
</div>
<div className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors cursor-pointer">
<div className="flex items-center gap-2">
<input checked="" className="custom-checkbox" type="checkbox"/>
<span className="text-[10px] font-medium text-white/80">Express Mode</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] to-transparent pointer-events-none"></div>
</div>

<div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-accent/20 blur-[100px] -z-10 rounded-full mix-blend-screen pointer-events-none"></div>
<div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/10 blur-[100px] -z-10 rounded-full mix-blend-screen pointer-events-none"></div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-pulse">
<span className="text-[9px] uppercase tracking-widest text-white/60">Scroll to explore</span>
<div className="w-px h-6 bg-gradient-to-b from-white/50 to-transparent"></div>
</div>
</main>



    </>
  );
}
