import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Manrope', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
brand: {
400: '#e4e4e7',
500: '#ffffff',
600: '#d4d4d8',
glow: 'rgba(255, 255, 255, 0.3)'
}
},
backgroundImage: {
'glass-gradient': 'linear-gradient(to bottom right, rgba(255,255,255,0.08), rgba(255,255,255,0.01))',
'metal-gradient': 'linear-gradient(to bottom, #ffffff, #e4e4e7)',
},
animation: {
'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'scanline': 'scanline 8s linear infinite',
},
keyframes: {
fadeUp: {
'from': { opacity: 0, transform: 'translateY(20px)', filter: 'blur(4px)' },
'to': { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' }
},
scanline: {
'0%': { transform: 'translateY(-100%)' },
'100%': { transform: 'translateY(100%)' }
}
}
}
}
}



      const canvas = document.getElementById('audioVisualizer');
      const ctx = canvas.getContext('2d');

      let width = canvas.width = window.innerWidth;
      let height = canvas.height = window.innerHeight;

      const bars = 60;
      const barWidth = width / bars;
      let barHeights = new Array(bars).fill(0);

      function drawVisualizer() {
          ctx.clearRect(0, 0, width, height);

          // Silver/White Gradient
          const gradient = ctx.createLinearGradient(0, height, 0, height/2);
          gradient.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0.0)');

          ctx.fillStyle = gradient;

          for (let i = 0; i < bars; i++) {
              // Randomize heights smoothly
              let targetHeight = Math.random() * (height * 0.3);
              barHeights[i] += (targetHeight - barHeights[i]) * 0.05; // Smooth interpolation

              // Draw bar from bottom
              ctx.fillRect(i * barWidth, height - barHeights[i], barWidth - 1, barHeights[i]);
          }
      }

      // Resize handler
      window.addEventListener('resize', () => {
          width = canvas.width = window.innerWidth;
          height = canvas.height = window.innerHeight;
      });

      // Animation Loop
      setInterval(drawVisualizer, 50);
    


      const toggleBtn = document.getElementById('themeToggle');
      toggleBtn.addEventListener('click', () => {
          document.documentElement.classList.toggle('dark');
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center mix-blend-overlay" data-alpha-mask="68" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e46fd2a2-fb14-44fe-9acf-d224234fc914_3840w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 68%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 68%, transparent)'}}></div>


<canvas className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20" height="926" id="audioVisualizer" width="1395"></canvas>

<div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white opacity-[0.03] blur-[150px] rounded-full pointer-events-none -z-10"></div>
<div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-zinc-800 opacity-[0.05] blur-[120px] rounded-full pointer-events-none -z-10"></div>

<div className="fixed inset-0 pointer-events-none z-0 grid-lines"></div>

<div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 animate-fade-up">
<nav className="flex glass-panel w-full h-12 max-w-5xl rounded-full pr-2 pl-6 items-center justify-between">

<a className="flex items-center gap-3 group hover:opacity-80 transition-opacity" href="#">
<div className="flex h-5 w-5 items-center justify-center rounded-sm bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.2)]">
<iconify-icon icon="lucide:hexagon" strokeWidth="3" width="12"></iconify-icon>
</div>
<span className="text-xs font-bold tracking-widest text-white font-mono">
            BEYOND_DXB
          </span>
</a>

<div className="hidden md:flex items-center gap-8 text-[11px] font-medium text-neutral-500 uppercase tracking-widest">
<a className="hover:text-white transition-colors duration-300" href="#">
            Inventory
          </a>
<a className="hover:text-white transition-colors duration-300" href="#">
            Case Studies
          </a>
<a className="hover:text-white transition-colors duration-300" href="#">
            Technical
          </a>
</div>

<div className="flex items-center gap-3">
<button aria-label="Toggle Theme" className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-500 hover:text-black dark:hover:text-white transition-colors bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20" id="themeToggle">
<iconify-icon className="dark:hidden text-amber-500" icon="lucide:sun" width="16"></iconify-icon>
<iconify-icon className="hidden dark:block" icon="lucide:moon" width="16"></iconify-icon>
</button>
<a className="group relative flex items-center gap-2 px-4 py-1.5 rounded-full bg-white hover:bg-zinc-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="#quote">
<span className="text-[10px] font-bold text-black tracking-wide flex items-center gap-1 uppercase">
              Get Estimate
              <iconify-icon icon="lucide:arrow-up-right" width="10"></iconify-icon>
</span>
</a>
</div>
</nav>
</div>

<section className="flex flex-col min-h-[85vh] max-w-7xl z-10 mr-auto ml-auto pt-40 pr-6 pb-20 pl-6 relative items-center justify-center">

<div className="animate-fade-up delay-100 mb-8">
<div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
</span>
<span className="text-[10px] font-mono font-medium text-neutral-400 tracking-wider uppercase">
            High-Fidelity Event Production
          </span>
</div>
</div>

<h1 className="animate-fade-up delay-200 md:text-8xl leading-[0.9] text-5xl font-medium text-white tracking-tighter text-center max-w-5xl mx-auto mb-8">
        Precision in
        <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">
          every frequency.
        </span>
</h1>

<p className="animate-fade-up delay-300 leading-relaxed md:text-lg text-base font-light text-neutral-500 text-center max-w-2xl mx-auto tracking-wide">
        Dubai’s technical partner for complex AV requirements.
        <br className="hidden md:block"/>
        Seamless integration of sound, light, and visual architecture.
      </p>

<div className="animate-fade-up delay-300 mt-12 flex flex-col sm:flex-row items-center gap-4">
<button className="group h-12 px-8 rounded-full bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center gap-2">
          Configure Event
          <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:chevron-right"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-neutral-300 text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-all flex items-center gap-2">
<iconify-icon icon="lucide:play" width="10"></iconify-icon>
          Showreel 2024
        </button>
</div>

<div className="animate-fade-up delay-300 mt-24 w-full overflow-hidden border-y border-white/5 bg-black/40 backdrop-blur-sm py-5">
<div className="flex items-center gap-16 animate-[marquee_40s_linear_infinite] whitespace-nowrap opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
<span className="text-xs font-mono text-neutral-400 flex items-center gap-2">
<iconify-icon className="text-white" icon="lucide:server"></iconify-icon>
            L-ACOUSTICS SYSTEM PARTNER
          </span>
<span className="text-xs font-mono text-neutral-400 flex items-center gap-2">
<iconify-icon className="text-white" icon="lucide:monitor"></iconify-icon>
            BARCO E2 PROCESSING
          </span>
<span className="text-xs font-mono text-neutral-400 flex items-center gap-2">
<iconify-icon className="text-white" icon="lucide:cpu"></iconify-icon>
            GRANDMA3 CONTROL
          </span>
<span className="text-xs font-mono text-neutral-400 flex items-center gap-2">
<iconify-icon className="text-white" icon="lucide:mic"></iconify-icon>
            SHURE AXIENT DIGITAL
          </span>
<span className="text-xs font-mono text-neutral-400 flex items-center gap-2">
<iconify-icon className="text-white" icon="lucide:video"></iconify-icon>
            BLACKMAGIC DESIGN 12K
          </span>
<span className="text-xs font-mono text-neutral-400 flex items-center gap-2">
<iconify-icon className="text-white" icon="lucide:box"></iconify-icon>
            DISGUISE SERVERS
          </span>
</div>
</div>
</section>

<section className="z-20 bg-[#020202] w-full border-white/5 border-t py-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="order-2 lg:order-1">
<h2 className="md:text-5xl leading-tight text-3xl font-medium text-white tracking-tighter mb-8">
              Technical rigor.
              <span className="text-neutral-500">Zero compromise.</span>
</h2>
<div className="space-y-4">

<div className="group p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
<div className="flex gap-4 items-start">
<div className="mt-1 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
<iconify-icon icon="lucide:zap" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-white tracking-tight">
                      Rapid Response Logistics
                    </h4>
<p className="text-xs text-neutral-500 mt-2 leading-relaxed max-w-sm">
                      Automated quoting system provides estimates in under 60
                      seconds. Fleet deployed from DIP within 2 hours.
                    </p>
</div>
</div>
</div>

<div className="group p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
<div className="flex gap-4 items-start">
<div className="mt-1 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
<iconify-icon icon="lucide:shield-check" width="16"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-semibold text-white tracking-tight">
                      Redundant Systems
                    </h4>
<p className="text-xs text-neutral-500 mt-2 leading-relaxed max-w-sm">
                      Every critical signal path is duplicated. Primary and
                      backup servers run in parallel for 99.99% uptime.
                    </p>
</div>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<div className="glass-panel overflow-hidden aspect-square md:aspect-[4/3] rounded-2xl relative">

<div className="absolute top-6 left-6 z-30 inline-flex items-center gap-2 px-3 py-1 rounded border border-white/20 bg-black/50 backdrop-blur-md">
<span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
<span className="text-[9px] font-bold tracking-widest text-white uppercase font-mono">
                  System_Active
                </span>
</div>

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="flex z-10 absolute inset-0 items-center justify-center p-12">

<div className="relative w-24 h-24 rounded-full border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur shadow-[0_0_30px_rgba(255,255,255,0.05)] z-20">
<iconify-icon className="text-white" icon="lucide:cpu" width="32"></iconify-icon>

<div className="absolute inset-0 rounded-full border border-dashed border-white/10 animate-[spin_10s_linear_infinite]"></div>
</div>

<div className="absolute top-1/4 left-1/4 w-12 h-12 rounded border border-white/10 bg-black flex items-center justify-center z-10">
<iconify-icon className="text-neutral-400" icon="lucide:speaker" width="16"></iconify-icon>
</div>
<div className="absolute bottom-1/4 right-1/4 w-12 h-12 rounded border border-white/10 bg-black flex items-center justify-center z-10">
<iconify-icon className="text-neutral-400" icon="lucide:aperture" width="16"></iconify-icon>
</div>

<svg className="absolute inset-0 pointer-events-none opacity-40 w-full h-full">
<line stroke="white" strokeWidth="1" x1="50%" x2="28%" y1="50%" y2="28%"></line>
<line stroke="white" strokeWidth="1" x1="50%" x2="72%" y1="50%" y2="72%"></line>
<circle cx="50%" cy="50%" fill="none" r="80" stroke="white" stroke-dasharray="4 4" stroke-opacity="0.1"></circle>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#020202] border-t border-white/5 py-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">
              Available Hardware
            </h2>
<p className="text-sm text-neutral-500 font-mono">
              Live inventory status updated 14:00 GST
            </p>
</div>
<div className="flex gap-2">
<button className="px-5 py-2 rounded border border-white/10 bg-white/5 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Full Manifest
            </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<aside className="hidden md:block space-y-8 p-6 rounded-xl border border-white/5 bg-[#050505]">
<div>
<h3 className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-4">
                Department
              </h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 rounded-sm border border-neutral-700 bg-black group-hover:border-white transition-colors">
<input checked="" className="peer appearance-none absolute inset-0 w-full h-full cursor-pointer" type="checkbox"/>
<div className="w-2 h-2 bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-xs text-neutral-400 group-hover:text-white transition-colors font-medium">
                    Audio
                  </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 rounded-sm border border-neutral-700 bg-black group-hover:border-white transition-colors">
<input className="peer appearance-none absolute inset-0 w-full h-full cursor-pointer" type="checkbox"/>
<div className="w-2 h-2 bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-xs text-neutral-400 group-hover:text-white transition-colors font-medium">
                    Lighting
                  </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 rounded-sm border border-neutral-700 bg-black group-hover:border-white transition-colors">
<input className="peer appearance-none absolute inset-0 w-full h-full cursor-pointer" type="checkbox"/>
<div className="w-2 h-2 bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-xs text-neutral-400 group-hover:text-white transition-colors font-medium">
                    Video / LED
                  </span>
</label>
</div>
</div>
</aside>

<div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-[#050505] rounded-xl border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-500">
<div className="absolute top-3 left-3 z-10 px-2 py-1 rounded-sm bg-black/80 backdrop-blur border border-white/10 text-[9px] font-mono text-white uppercase tracking-wider">
<span className="w-1 h-1 bg-white inline-block mr-1 align-middle"></span>
                In Stock
              </div>
<div className="aspect-[4/3] bg-[#0a0a0a] relative overflow-hidden flex items-center justify-center">

<div className="w-24 h-12 bg-neutral-800 rounded border border-neutral-700 shadow-2xl group-hover:scale-105 transition-transform duration-500"></div>
<div className="bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-sm font-semibold text-white group-hover:text-neutral-300 transition-colors">
                      L-Acoustics K2
                    </h3>
<p className="text-[10px] text-neutral-500 font-mono mt-1 uppercase tracking-wide">
                      Line Source Array
                    </p>
</div>
<button className="h-6 w-6 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
<iconify-icon icon="lucide:plus" width="12"></iconify-icon>
</button>
</div>
<div className="w-full h-px bg-white/5 my-3"></div>
<div className="flex items-center justify-between text-[10px] text-neutral-400 font-mono">
<span>QTY: 48</span>
<span>REF: LA-K2</span>
</div>
</div>
</div>

<div className="group relative bg-[#050505] rounded-xl border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-500">
<div className="absolute top-3 left-3 z-10 px-2 py-1 rounded-sm bg-black/80 backdrop-blur border border-white/10 text-[9px] font-mono text-neutral-300 uppercase tracking-wider">
                Low Stock
              </div>
<div className="aspect-[4/3] bg-[#0a0a0a] relative overflow-hidden flex items-center justify-center">
<div className="w-20 h-20 bg-neutral-800 rounded-sm border border-neutral-700 shadow-2xl group-hover:scale-105 transition-transform duration-500 grid grid-cols-4 gap-0.5 p-1">
<div className="bg-neutral-600 rounded-[1px]"></div>
<div className="bg-neutral-600 rounded-[1px]"></div>
<div className="bg-neutral-600 rounded-[1px]"></div>
<div className="bg-neutral-600 rounded-[1px]"></div>
<div className="bg-neutral-600 rounded-[1px]"></div>
<div className="bg-neutral-600 rounded-[1px]"></div>
<div className="bg-neutral-600 rounded-[1px]"></div>
<div className="bg-neutral-600 rounded-[1px]"></div>
<div className="bg-neutral-600 rounded-[1px]"></div>
<div className="bg-neutral-600 rounded-[1px]"></div>
<div className="bg-neutral-600 rounded-[1px]"></div>
<div className="bg-neutral-600 rounded-[1px]"></div>
<div className="bg-neutral-600 rounded-[1px]"></div>
<div className="bg-neutral-600 rounded-[1px]"></div>
<div className="bg-neutral-600 rounded-[1px]"></div>
<div className="bg-neutral-600 rounded-[1px]"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-sm font-semibold text-white group-hover:text-neutral-300 transition-colors">
                      Absen P2.5 LED
                    </h3>
<p className="text-[10px] text-neutral-500 font-mono mt-1 uppercase tracking-wide">
                      Indoor Panels
                    </p>
</div>
<button className="h-6 w-6 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
<iconify-icon icon="lucide:plus" width="12"></iconify-icon>
</button>
</div>
<div className="w-full h-px bg-white/5 my-3"></div>
<div className="flex items-center justify-between text-[10px] text-neutral-400 font-mono">
<span>QTY: 200m²</span>
<span>REF: AB-P25</span>
</div>
</div>
</div>

<div className="group relative bg-[#050505] rounded-xl border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-500">
<div className="absolute top-3 left-3 z-10 px-2 py-1 rounded-sm bg-black/80 backdrop-blur border border-white/10 text-[9px] font-mono text-white uppercase tracking-wider">
<span className="w-1 h-1 bg-white inline-block mr-1 align-middle"></span>
                In Stock
              </div>
<div className="aspect-[4/3] bg-[#0a0a0a] relative overflow-hidden flex items-center justify-center">
<div className="w-16 h-24 bg-neutral-800 rounded-t-full rounded-b-lg border border-neutral-700 shadow-2xl group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
<div className="w-8 h-8 rounded-full bg-white/10 border border-white/20"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<div className="">
<h3 className="text-sm font-semibold text-white group-hover:text-neutral-300 transition-colors">
                      Robe MegaPointe
                    </h3>
<p className="text-[10px] text-neutral-500 font-mono mt-1 uppercase tracking-wide">
                      Hybrid Fixture
                    </p>
</div>
<button className="h-6 w-6 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
<iconify-icon icon="lucide:plus" width="12"></iconify-icon>
</button>
</div>
<div className="w-full h-px bg-white/5 my-3"></div>
<div className="flex items-center justify-between text-[10px] text-neutral-400 font-mono">
<span>QTY: 64</span>
<span>REF: RO-MP</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-[#020202] py-24" id="quote">
<div className="mx-auto max-w-6xl px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

<div className="lg:col-span-5 space-y-8">
<h2 className="text-4xl font-medium text-white tracking-tighter">
              Initiate project
              <br/>
<span className="text-neutral-500">sequence.</span>
</h2>
<p className="text-neutral-400 leading-relaxed text-sm">
              Connect with our technical directors.
              <br/>
              Response time averages 4 minutes.
            </p>
<div className="space-y-4 pt-4">
<div className="flex items-center gap-4 p-4 rounded border border-white/5 bg-white/[0.02]">
<iconify-icon className="text-white" icon="lucide:mail" width="20"></iconify-icon>
<div>
<h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    production@beyond-dxb.com
                  </h4>
<p className="text-[10px] text-neutral-500 font-mono mt-0.5">
                    24/7 Monitoring
                  </p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="rounded-2xl border border-white/10 bg-[#050505] p-8 shadow-2xl relative overflow-hidden">

<div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none"></div>
<form className="relative z-10 space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                      Date
                    </label>
<input className="w-full h-10 rounded bg-[#0a0a0a] border border-white/10 px-3 text-white text-xs focus:border-white focus:outline-none transition-colors" type="date"/>
</div>
<div className="space-y-2">
<label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                      Pax
                    </label>
<select className="w-full h-10 rounded bg-[#0a0a0a] border border-white/10 px-3 text-white text-xs focus:border-white focus:outline-none transition-colors appearance-none">
<option>Select Tier</option>
<option>Private (0-100)</option>
<option>Corporate (100-1000)</option>
<option>Festival (5000+)</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                    Scope
                  </label>
<div className="grid grid-cols-3 gap-3">
<label className="flex items-center justify-center h-10 rounded border border-white/10 bg-[#0a0a0a] text-xs text-neutral-400 hover:border-white/50 cursor-pointer has-[:checked]:bg-white has-[:checked]:text-black transition-all font-medium">
<input className="hidden" type="checkbox"/>
                      Audio
                    </label>
<label className="flex items-center justify-center h-10 rounded border border-white/10 bg-[#0a0a0a] text-xs text-neutral-400 hover:border-white/50 cursor-pointer has-[:checked]:bg-white has-[:checked]:text-black transition-all font-medium">
<input className="hidden" type="checkbox"/>
                      Visual
                    </label>
<label className="flex items-center justify-center h-10 rounded border border-white/10 bg-[#0a0a0a] text-xs text-neutral-400 hover:border-white/50 cursor-pointer has-[:checked]:bg-white has-[:checked]:text-black transition-all font-medium">
<input className="hidden" type="checkbox"/>
                      Stage
                    </label>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                    Coordinates
                  </label>
<input className="w-full h-10 rounded bg-[#0a0a0a] border border-white/10 px-3 text-white text-xs placeholder:text-neutral-700 focus:border-white focus:outline-none transition-colors" placeholder="Contact Information" type="email"/>
</div>
<button className="w-full h-12 rounded bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 mt-2" type="button">
                  Transmit Request
                  <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#020202] border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
<div className="flex items-center gap-3">
<div className="flex h-6 w-6 items-center justify-center rounded-sm bg-white text-black">
<iconify-icon icon="lucide:hexagon" width="12"></iconify-icon>
</div>
<span className="text-xs font-bold tracking-widest text-white font-mono">
              BEYOND_DXB
            </span>
</div>
<div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Manifest</a>
<a className="hover:text-white transition-colors" href="#">Safety</a>
<a className="hover:text-white transition-colors" href="#">Legal</a>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-neutral-700 font-mono uppercase">
<p>DXB // AV // PROD // 2024</p>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]"></span>
<span className="text-neutral-500">System Normal</span>
</div>
</div>
</div>
</footer>




    </>
  );
}
