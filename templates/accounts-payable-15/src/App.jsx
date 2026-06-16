import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
serif: ['Instrument Serif', 'Georgia', 'serif'],
display: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
mono: ['Geist Mono', 'Space Mono', 'monospace'],
},
colors: {
canvas: '#ffffff',
surface: '#fafafa',
ink: {
950: '#020617', // Darker Navy
900: '#0F1E3D', // Navy
800: '#1e293b',
500: '#64748b',
400: '#94a3b8',
300: '#cbd5e1',
200: '#e2e8f0',
100: '#f1f5f9',
teal: '#2D8A95',
accent: '#3b82f6',
lime: '#bbf786', // Added from reference
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
animation: {
'fade-in': 'fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'fade-up': 'fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'reveal': 'reveal 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
'float-slow': 'float 8s ease-in-out 1s infinite',
'spin-slow': 'spin 12s linear infinite',
'spin-medium': 'spin 8s linear infinite',
'spin-reverse-slow': 'spin-reverse 15s linear infinite',
'data-stream': 'dataStream 2s linear infinite',
'cable-flow': 'cableFlow 3s linear infinite',
'node-pulse': 'nodePulse 3s ease-in-out infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
reveal: {
'0%': { opacity: '0', filter: 'blur(10px)', transform: 'translateY(10px)' },
'100%': { opacity: '1', filter: 'blur(0)', transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
'spin-reverse': {
'0%': { transform: 'rotate(360deg)' },
'100%': { transform: 'rotate(0deg)' },
},
dataStream: {
'0%': { transform: 'translateX(-100%)' },
'100%': { transform: 'translateX(100%)' },
},
cableFlow: {
'0%': { backgroundPosition: '-100% 0' },
'100%': { backgroundPosition: '200% 0' },
},
nodePulse: {
'0%, 100%': { boxShadow: '0 0 0 0px rgba(45, 138, 149, 0)', borderColor: '#e2e8f0' },
'50%': { boxShadow: '0 0 20px 2px rgba(45, 138, 149, 0.3)', borderColor: '#2D8A95' },
},
// Custom keyframes for specific delayed pulsing with colors
nodePulse1: {
'0%, 100%': { transform: 'scale(1)', borderColor: '#e2e8f0', backgroundColor: '#ffffff' },
'15%': { transform: 'scale(1.1)', borderColor: '#3b82f6', backgroundColor: '#eff6ff' }, // Blue
'30%': { transform: 'scale(1)', borderColor: '#e2e8f0', backgroundColor: '#ffffff' },
},
nodePulse2: {
'0%, 30%': { transform: 'scale(1)', borderColor: '#e2e8f0', backgroundColor: '#ffffff' },
'45%': { transform: 'scale(1.1)', borderColor: '#38bdf8', backgroundColor: '#f0f9ff' }, // Light Blue
'60%': { transform: 'scale(1)', borderColor: '#e2e8f0', backgroundColor: '#ffffff' },
},
nodePulse3: {
'0%, 60%': { transform: 'scale(1)', borderColor: '#e2e8f0', backgroundColor: '#ffffff' },
'75%': { transform: 'scale(1.1)', borderColor: '#f59e0b', backgroundColor: '#fffbeb' }, // Yellow
'90%': { transform: 'scale(1)', borderColor: '#e2e8f0', backgroundColor: '#ffffff' },
}
}
}
}
}



      // Lucide Icons
      lucide.createIcons();

      // Scroll Reveal Logic
      document.addEventListener('DOMContentLoaded', () => {
          const observerOptions = {
              threshold: 0.1,
              rootMargin: '0px 0px -50px 0px'
          };

          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('animate-reveal');
                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          const animatedElements = document.querySelectorAll('.group-animate');
          animatedElements.forEach((el, index) => {
              observer.observe(el);
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed z-50 flex px-4 top-4 right-0 left-0 justify-center w-full">
<nav className="glass-pill rounded-2xl px-6 py-4 flex items-center justify-between w-full max-w-[96%] animate-fade-in opacity-0" style={{animationDelay: '0.1s'}}>

<a className="flex items-center group" href="#">
<span className="flex items-center gap-1 text-2xl font-bold text-ink-900 tracking-tight">
            invoqe
            <span className="text-ink-teal">.</span>
</span>
</a>

<a className="bg-ink-900 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-black transition-transform hover:scale-[1.02] active:scale-95 flex items-center gap-2 group shadow-lg shadow-ink-900/20" href="#get-started-form">
          Get Started
          <iconify-icon className="text-lg transition-transform group-hover:translate-x-0.5" icon="solar:arrow-right-bold-duotone"></iconify-icon>
</a>
</nav>
</div>

<section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-ink-900 border-b border-ink-900 pt-32">

<div className="absolute inset-0 bg-grid-hero-dark pointer-events-none opacity-20"></div>

<div className="absolute top-0 left-0 right-0 h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ink-teal/10 via-transparent to-transparent pointer-events-none blur-3xl"></div>

<div className="z-20 flex flex-col animate-fade-up text-center max-w-6xl px-6 relative items-center mb-12 boxed-container p-8 md:p-16">
<div className="extended-border-top animate-extend-h" style={{transformOrigin: 'center'}}></div>
<div className="extended-border-bottom animate-extend-h" style={{transformOrigin: 'center', animationDelay: '0.3s'}}></div>
<div className="extended-border-left animate-extend-v" style={{transformOrigin: 'center', animationDelay: '0.15s'}}></div>
<div className="extended-border-right animate-extend-v" style={{transformOrigin: 'center', animationDelay: '0.45s'}}></div>
<div className="corner-accent corner-tl" style={{top: '-1px', left: '-1px'}}></div>
<div className="corner-accent corner-tr" style={{top: '-1px', right: '-1px'}}></div>
<div className="corner-accent corner-bl" style={{bottom: '-1px', left: '-1px'}}></div>
<div className="corner-accent corner-br" style={{bottom: '-1px', right: '-1px'}}></div>
<div className="beam-runner" style={{top: '0'}}></div>

<div className="inline-flex items-center gap-2 rounded-full border border-ink-700/50 px-3 py-1 bg-ink-800/50 backdrop-blur-sm mb-8 shadow-sm hover:bg-ink-800/70 transition-colors">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-700"></span>
</span>
<span className="text-[10px] uppercase font-semibold tracking-widest text-ink-300">
            System v 2.0 Live
          </span>
</div>

<h1 className="leading-[0.95] sm:text-6xl lg:text-7xl text-5xl font-medium text-white tracking-tighter font-poppins mb-8 drop-shadow-2xl">
          Accounts Payable,
          <br className="hidden sm:block"/>
<span className="animate-text-fill bg-gradient-to-r from-[#60A5FA] to-[#93C5FD]" style={{animationDelay: '0.6s'}}>
            Fully
          </span>
          Under
          <span className="inline-flex items-center justify-center gap-2 sm:gap-4 sm:px-6 sm:py-2 sm:rounded-2xl align-baseline sm:translate-y-2 bg-ink-800/60 border-ink-700/50 border rounded-xl ml-2 pt-0 pr-4 pb-0 pl-4 shadow-inner backdrop-blur-md translate-y-1" style={{}}>
<span className="animate-text-fill bg-gradient-to-r from-[#FBBF24] to-[#F59E0B]" style={{animationDelay: '1.0s'}}>
              Control.
            </span>
</span>
</h1>
<p className="text-2xl sm:text-3xl lg:text-4xl font-light text-ink-400 tracking-tight max-w-3xl mx-auto mb-12">
          — Across Every Location.
        </p>

<a className="bg-[#93C5FD] text-ink-950 text-lg font-semibold px-8 py-3.5 rounded-lg hover:bg-[#60A5FA] transition-all hover:scale-[1.02] active:scale-95 flex items-center gap-2 shadow-lg shadow-[#93C5FD]/20 mb-20 cursor-pointer inline-flex" href="#get-started-form">
          Get Started
          <iconify-icon className="text-xl" icon="lucide:arrow-up-right"></iconify-icon>
</a>
</div>
</section>
<section className="bg-white border-b border-ink-100 pt-24 pb-24 px-6 relative overflow-hidden">
<div className="max-w-[1200px] mx-auto">
<div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-32">
<div className="lg:w-1/2 flex min-h-[400px] group-animate opacity-0 w-full relative bg-surface rounded-2xl border border-ink-100 overflow-hidden items-center justify-center">
<style>
              @keyframes shard-2d-assemble {
                0% { opacity: 0; transform: translate(var(--tx), var(--ty)); }
                15% { opacity: 1; transform: translate(var(--tx), var(--ty)); }
                40% { opacity: 1; transform: translate(var(--tx), var(--ty)); }
                60% { opacity: 1; transform: translate(var(--fx), var(--fy)); }
                90% { opacity: 1; transform: translate(var(--fx), var(--fy)); }
                100% { opacity: 0; transform: translate(var(--fx), var(--fy)); }
              }
            </style>

<div className="absolute inset-0 bg-grid-blue"></div>
<div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent pointer-events-none"></div>

<div className="relative flex items-center justify-center w-full h-full">

<div className="relative w-0 h-0">


<div className="absolute w-10 h-10 bg-ink-900 border border-white/10 shadow-sm" style={{-Tx: '-120px', -Ty: '-160px', -Fx: '-40px', -Fy: '-40px', animation: 'shard-2d-assemble 6s cubic-bezier(0.4, 0, 0.2, 1) infinite', animationDelay: '0.1s'}}></div>
<div className="absolute w-10 h-10 bg-ink-teal border border-white/10 shadow-sm" style={{-Tx: '40px', -Ty: '-200px', -Fx: '0px', -Fy: '-40px', animation: 'shard-2d-assemble 6s cubic-bezier(0.4, 0, 0.2, 1) infinite', animationDelay: '0.15s'}}></div>
<div className="absolute w-10 h-10 bg-blue-500 border border-white/10 shadow-sm" style={{-Tx: '160px', -Ty: '-80px', -Fx: '40px', -Fy: '-40px', animation: 'shard-2d-assemble 6s cubic-bezier(0.4, 0, 0.2, 1) infinite', animationDelay: '0.2s'}}></div>

<div className="absolute w-10 h-10 bg-ink-600 border border-white/10 shadow-sm" style={{-Tx: '-200px', -Ty: '0px', -Fx: '-40px', -Fy: '0px', animation: 'shard-2d-assemble 6s cubic-bezier(0.4, 0, 0.2, 1) infinite', animationDelay: '0.25s'}}></div>
<div className="absolute w-10 h-10 bg-ink-800 border border-white/10 shadow-sm" style={{-Tx: '0px', -Ty: '-120px', -Fx: '0px', -Fy: '0px', animation: 'shard-2d-assemble 6s cubic-bezier(0.4, 0, 0.2, 1) infinite', animationDelay: '0.3s'}}></div>
<div className="absolute w-10 h-10 bg-teal-600 border border-white/10 shadow-sm" style={{-Tx: '120px', -Ty: '80px', -Fx: '40px', -Fy: '0px', animation: 'shard-2d-assemble 6s cubic-bezier(0.4, 0, 0.2, 1) infinite', animationDelay: '0.35s'}}></div>

<div className="absolute w-10 h-10 bg-blue-600 border border-white/10 shadow-sm" style={{-Tx: '-80px', -Ty: '160px', -Fx: '-40px', -Fy: '40px', animation: 'shard-2d-assemble 6s cubic-bezier(0.4, 0, 0.2, 1) infinite', animationDelay: '0.4s'}}></div>
<div className="absolute w-10 h-10 bg-ink-teal/80 border border-white/10 shadow-sm" style={{-Tx: '40px', -Ty: '200px', -Fx: '0px', -Fy: '40px', animation: 'shard-2d-assemble 6s cubic-bezier(0.4, 0, 0.2, 1) infinite', animationDelay: '0.45s'}}></div>
<div className="absolute w-10 h-10 bg-ink-900 border border-white/10 shadow-sm" style={{-Tx: '160px', -Ty: '120px', -Fx: '40px', -Fy: '40px', animation: 'shard-2d-assemble 6s cubic-bezier(0.4, 0, 0.2, 1) infinite', animationDelay: '0.5s'}}></div>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 space-y-8 group-animate opacity-0">
<div className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-3 py-1.5 bg-surface text-[11px] uppercase tracking-wide font-semibold text-ink-500">
              Multi-Location Intelligence
            </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-ink-900 leading-[1.05]">
              Simplify
              <span className="text-ink-teal">complex operations.</span>
</h2>
<p className="text-lg text-ink-500 leading-relaxed font-normal">
              Our software is specifically designed to simplify complex
              operation systems. For facilities that manage multiple operations
              or accounts, Invoqe clarifies exactly what's happening across all
              locations in the easiest way possible.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-white border-ink-100 border-b pt-10 pr-6 pb-10 pl-6">
<div className="max-w-[1200px] mx-auto">
<div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">

<div className="w-full lg:w-1/2 space-y-8 group-animate opacity-0">
<div className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-3 py-1.5 bg-surface text-[11px] uppercase tracking-wide font-semibold text-ink-500">
              Zero-touch invoice processing
            </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-ink-900 leading-[1.05]">
              Capture and process invoices with
              <span className="text-ink-teal">zero manual effort.</span>
</h2>
<p className="text-lg text-ink-500 leading-relaxed font-normal">
              Automate data capture and categorization — no manual entry, no
              errors. Our engine sees what you see, only faster.
            </p>
</div>

<div className="w-full lg:w-1/2 relative bg-surface rounded-2xl border border-ink-100 overflow-hidden h-[600px] flex items-center justify-center group-animate opacity-0" style={{}}>

<div className="absolute inset-0 bg-grid-blue"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50 pointer-events-none"></div>

<div className="relative w-[340px] h-[460px] bg-white rounded-lg shadow-[0_20px_50px_-12px_rgba(15,30,61,0.1)] border border-ink-100 p-8 z-10 overflow-hidden">

<div className="absolute left-[-20px] right-[-20px] h-0.5 bg-gradient-to-r from-transparent via-ink-teal to-transparent shadow-[0_0_15px_rgba(45,138,149,0.4)] z-30 animate-scanner"></div>

<div className="flex justify-between items-start mb-8 relative z-10">
<div className="space-y-1">

<div className="relative rounded px-1.5 -ml-1.5 py-0.5 border border-transparent animate-highlight-1">
<h3 className="font-bold text-lg text-ink-900 tracking-tight leading-none">
                      Nexus Systems
                    </h3>
</div>
<div className="text-[10px] text-ink-400 leading-tight pl-1.5">
                    4400 Innovation Dr San Jose, CA 95134
                  </div>
</div>
<div className="w-10 h-10 bg-ink-900 text-white rounded flex items-center justify-center shadow-sm">
<span className="font-serif italic font-bold text-xl">N</span>
</div>
</div>

<div className="grid grid-cols-2 gap-6 mb-8 relative z-10">
<div className="space-y-3">
<div>
<p className="text-[9px] uppercase tracking-wider text-ink-400 font-semibold mb-0.5">
                      Bill To
                    </p>
<p className="text-xs font-semibold text-ink-900">Invoqe HQ</p>
<p className="text-[10px] text-ink-400">Austin Facility</p>
</div>
</div>
<div className="space-y-2 pt-1">
<div className="flex justify-between items-center">
<span className="text-[9px] text-ink-400 font-medium">
                      Invoice #
                    </span>
<span className="text-[10px] font-mono font-medium text-ink-900">
                      INV-2024-001
                    </span>
</div>

<div className="relative rounded px-1.5 -mx-1.5 py-0.5 border border-transparent animate-highlight-2 flex justify-between items-center">
<span className="text-[9px] text-ink-400 font-medium">
                      Due Date
                    </span>
<span className="text-[10px] font-mono font-medium text-ink-900">
                      Oct 24, 2024
                    </span>
</div>
</div>
</div>

<div className="w-full mb-8 relative z-10">
<div className="flex border-b border-ink-100 pb-2 mb-3">
<span className="text-[9px] font-semibold text-ink-400 w-2/3 uppercase tracking-wider">
                    Description
                  </span>
<span className="text-[9px] font-semibold text-ink-400 w-1/3 text-right uppercase tracking-wider">
                    Amount
                  </span>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center text-[10px] text-ink-600">
<span className="font-medium">Server Maintenance Q4</span>
<span className="font-mono text-ink-900">$4,500.00</span>
</div>
<div className="flex justify-between items-center text-[10px] text-ink-600">
<span className="font-medium">Cloud Storage Tier 3</span>
<span className="font-mono text-ink-900">$2,800.00</span>
</div>
<div className="flex justify-between items-center text-[10px] text-ink-600">
<span className="font-medium">Ent. Software Licenses (50)</span>
<span className="font-mono text-ink-900">$5,025.00</span>
</div>
</div>
</div>

<div className="mt-auto pt-6 absolute bottom-8 left-8 right-8 border-t border-ink-100 z-10">
<div className="flex justify-between items-end">
<span className="text-xs font-semibold text-ink-900">
                    Total Due
                  </span>

<div className="relative rounded px-1.5 -mr-1.5 py-0.5 border border-transparent animate-highlight-3">
<span className="text-lg font-bold text-ink-900 font-mono tracking-tight">
                      $12,325.00
                    </span>
</div>
</div>
</div>
</div>

<div className="absolute top-[18%] right-[10%] bg-white pl-2 pr-3 py-2 rounded-lg shadow-lg border border-ink-100 flex items-center gap-2 animate-pop-1 opacity-0 z-40 transform translate-x-4">
<div className="w-5 h-5 rounded-full bg-teal-50 text-ink-teal flex items-center justify-center border border-teal-100">
<iconify-icon icon="solar:shop-bold-duotone" width="10"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[9px] text-ink-400 uppercase tracking-wider font-semibold leading-none mb-0.5">
                  Vendor
                </span>
<span className="text-xs font-bold text-ink-900 leading-none">
                  Nexus Systems
                </span>
</div>
</div>

<div className="absolute top-[35%] left-[8%] bg-white pl-2 pr-3 py-2 rounded-lg shadow-lg border border-ink-100 flex items-center gap-2 animate-pop-2 opacity-0 z-40 transform -translate-x-4">
<div className="w-5 h-5 rounded-full bg-teal-50 text-ink-teal flex items-center justify-center border border-teal-100">
<iconify-icon icon="solar:calendar-bold-duotone" width="10"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[9px] text-ink-400 uppercase tracking-wider font-semibold leading-none mb-0.5">
                  Due Date
                </span>
<span className="text-xs font-bold text-ink-900 leading-none">
                  Oct 24, 2024
                </span>
</div>
</div>

<div className="absolute bottom-[15%] right-[5%] bg-white pl-2 pr-4 py-2.5 rounded-lg shadow-xl shadow-teal-900/5 border border-ink-100 flex items-center gap-2 animate-pop-3 opacity-0 z-40">
<div className="w-6 h-6 rounded-full bg-ink-900 text-white flex items-center justify-center border border-ink-800">
<iconify-icon icon="solar:bill-list-bold-duotone" width="12"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[9px] text-ink-400 uppercase tracking-wider font-semibold leading-none mb-0.5">
                  Total Amount
                </span>
<span className="text-sm font-bold text-ink-900 leading-none">
                  $12,325.00
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-ink-100 border-b pt-10 pr-6 pb-10 pl-6">
<div className="max-w-[1200px] mx-auto">
<div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">

<div className="w-full lg:w-1/2 relative bg-surface rounded-2xl border border-ink-100 overflow-hidden h-[600px] flex items-center justify-center group-animate opacity-0 order-first">

<div className="absolute inset-0 bg-grid-blue"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.8)_100%)] pointer-events-none"></div>

<div className="relative w-full h-full max-w-lg mx-auto flex items-center justify-center">

<svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{overflow: 'visible'}}>
<defs>
<lineargradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#cbd5e1" stop-opacity="0.5"></stop>
<stop offset="100%" stop-color="#94a3b8" stop-opacity="0.8"></stop>
</lineargradient>
</defs>

<path d="M160 300 C 230 300, 230 200, 310 200" fill="none" id="pathTop" stroke="#cbd5e1" stroke-dasharray="4 4" strokeWidth="2"></path>

<path d="M160 300 C 230 300, 230 400, 310 400" fill="none" id="pathBottom" stroke="#cbd5e1" stroke-dasharray="4 4" strokeWidth="2"></path>

<circle fill="#2D8A95" r="4">
<animatemotion calcmode="linear" dur="4s" keypoints="0;1" keytimes="0;1" repeatcount="indefinite">
<mpath href="#pathTop"></mpath>
</animatemotion>
<animate attributename="opacity" dur="4s" repeatcount="indefinite" values="0;1;0"></animate>
</circle>

<circle fill="#2D8A95" r="4">
<animatemotion begin="1s" calcmode="linear" dur="5s" keypoints="0;1" keytimes="0;1" repeatcount="indefinite">
<mpath href="#pathBottom"></mpath>
</animatemotion>
<animate attributename="opacity" begin="1s" dur="5s" repeatcount="indefinite" values="0;1;0"></animate>
</circle>
</svg>

<div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-44 bg-white rounded-xl shadow-lg border border-ink-100 p-4 transition-transform hover:scale-105 duration-300">
<div className="flex items-center justify-between mb-3">
<span className="px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-[9px] font-bold uppercase tracking-wider border border-green-100">
                    Approved
                  </span>
</div>
<h4 className="text-sm font-semibold text-ink-900 mb-0.5">
                  FP&amp;A Approval
                </h4>
<p className="text-[10px] text-ink-400 font-medium uppercase tracking-wide mb-3">
                  Department
                </p>
<div className="flex items-center gap-2 mt-auto pt-2 border-t border-ink-50">
<div className="w-6 h-6 rounded-full bg-ink-100 flex items-center justify-center text-ink-600 text-[10px] font-bold">
                    EH
                  </div>
<span className="text-[11px] font-medium text-ink-600">
                    Esther Howard
                  </span>
</div>

<div className="absolute top-1/2 -right-1 w-2 h-2 bg-white border border-ink-200 rounded-full translate-x-1/2 z-30"></div>
</div>

<div className="absolute right-6 top-[28%] -translate-y-1/2 z-20 w-44 bg-white rounded-xl shadow-lg border border-ink-100 p-4 transition-transform hover:scale-105 duration-300">
<div className="flex items-center justify-between mb-3">
<span className="px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-[9px] font-bold uppercase tracking-wider border border-green-100">
                    Approved
                  </span>
</div>
<h4 className="text-sm font-semibold text-ink-900 mb-0.5">
                  Security Review
                </h4>
<p className="text-[10px] text-ink-400 font-medium uppercase tracking-wide mb-3">
                  Compliance
                </p>
<div className="flex items-center gap-2 mt-auto pt-2 border-t border-ink-50">
<div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 text-[10px] font-bold">
                    SP
                  </div>
<span className="text-[11px] font-medium text-ink-600">
                    Sarah Parker
                  </span>
</div>

<div className="absolute top-1/2 -left-1 w-2 h-2 bg-white border border-ink-200 rounded-full -translate-x-1/2 z-30"></div>
</div>

<div className="absolute right-6 top-[72%] -translate-y-1/2 z-20 w-44 bg-white rounded-xl shadow-lg border border-ink-100 p-4 transition-transform hover:scale-105 duration-300">
<div className="flex items-center justify-between mb-3">
<span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 text-[9px] font-bold uppercase tracking-wider border border-amber-100" style={{}}>
                    In Progress
                  </span>
</div>
<h4 className="text-sm font-semibold text-ink-900 mb-0.5">
                  IT Review
                </h4>
<p className="text-[10px] text-ink-400 font-medium uppercase tracking-wide mb-3">
                  Technical
                </p>
<div className="flex items-center gap-2 mt-auto pt-2 border-t border-ink-50">
<div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 text-[10px] font-bold">
                    MD
                  </div>
<span className="text-[11px] font-medium text-ink-600">
                    Mark Davis
                  </span>
</div>

<div className="absolute top-1/2 -left-1 w-2 h-2 bg-white border border-ink-200 rounded-full -translate-x-1/2 z-30"></div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 space-y-8 group-animate opacity-0" style={{}}>
<div className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-3 py-1.5 bg-surface text-[11px] uppercase tracking-wide font-semibold text-ink-500">
              Automated Workflow Control
            </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-ink-900 leading-[1.05]">
              Approval workflows that
              <span className="text-ink-teal">never miss a beat.</span>
</h2>
<p className="text-lg text-ink-500 leading-relaxed font-normal">
              Always involve the right people at the right moment. Accelerate
              approval times while enhancing control and security across every
              facility.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-white border-ink-100 border-b pt-10 pr-6 pb-10 pl-6">
<div className="max-w-[1200px] mx-auto">
<div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">

<div className="w-full lg:w-1/2 space-y-8 group-animate opacity-0">
<div className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-3 py-1.5 bg-surface text-[11px] uppercase tracking-wide font-semibold text-ink-500">
              Seamless ERP Integration
            </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-ink-900 leading-[1.05]">
              Keep data synced across your
              <span className="text-ink-teal">Fintech stack.</span>
</h2>
<p className="text-lg text-ink-500 leading-relaxed font-normal">
              Invoqe integrates with your existing systems of record to
              consolidate and enhance your most critical financial data.
              Real-time, bi-directional, and error-free.
            </p>
<div className="pt-2"></div>
</div>

<div className="w-full lg:w-1/2 relative bg-surface rounded-2xl border border-ink-100 overflow-hidden h-[600px] flex items-center justify-center group-animate opacity-0" style={{}}>

<div className="absolute inset-0 bg-grid-blue"></div>
<div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent pointer-events-none"></div>

<div className="w-full h-full max-w-[500px] relative">

<div className="absolute top-[4%] left-4 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-ink-100 p-3 flex items-center gap-3 w-[240px] h-[76px] animate-float z-10 transition-transform hover:scale-105" style={{animationDuration: '6.5s', animationDelay: '0s'}}>
<div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center shrink-0 border border-ink-100">
<iconify-icon icon="logos:xero" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-ink-900 tracking-tight leading-none mb-1">
                    Xero
                  </span>
<span className="text-[10px] font-medium text-ink-400 leading-none">
                    Accounting API
                  </span>
</div>
<div className="ml-auto flex items-center justify-center w-5 h-5 rounded-full bg-green-50 border border-green-100">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
</div>
</div>

<div className="absolute top-[23%] right-4 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-ink-100 p-3 flex items-center gap-3 w-[240px] h-[76px] animate-float z-20 transition-transform hover:scale-105" style={{animationDuration: '7.2s', animationDelay: '1.2s'}}>
<div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center shrink-0 border border-ink-100">
<iconify-icon icon="logos:sage" width="28"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-ink-900 tracking-tight leading-none mb-1">
                    Sage
                  </span>
<span className="text-[10px] font-medium text-ink-400 leading-none">
                    Financial Suite
                  </span>
</div>
<div className="ml-auto flex items-center justify-center w-5 h-5 rounded-full bg-green-50 border border-green-100">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
</div>
</div>

<div className="absolute top-[42%] left-4 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-ink-100 p-3 flex items-center gap-3 w-[240px] h-[76px] animate-float z-30 transition-transform hover:scale-105" style={{animationDuration: '6.8s', animationDelay: '2.4s'}}>
<div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center shrink-0 border border-ink-100">
<iconify-icon icon="logos:microsoft-dynamics-365-icon" width="22"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-ink-900 tracking-tight leading-none mb-1">
                    Dynamics 365
                  </span>
<span className="text-[10px] font-medium text-ink-400 leading-none">
                    Enterprise ERP
                  </span>
</div>
<div className="ml-auto flex items-center justify-center w-5 h-5 rounded-full bg-green-50 border border-green-100">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
</div>
</div>

<div className="absolute top-[61%] right-4 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-ink-100 p-3 flex items-center gap-3 w-[240px] h-[76px] animate-float z-20 transition-transform hover:scale-105" style={{animationDuration: '7.5s', animationDelay: '0.8s'}}>
<div className="flex shrink-0 w-10 h-10 border-ink-100 border rounded-lg items-center justify-center">
<img alt="QuickBooks Logo" className="w-6 h-6 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-ink-900 tracking-tight leading-none mb-1">
                    QuickBooks
                  </span>
<span className="text-[10px] font-medium text-ink-400 leading-none">
                    Online &amp; Desktop
                  </span>
</div>
<div className="ml-auto flex items-center justify-center w-5 h-5 rounded-full bg-green-50 border border-green-100">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
</div>
</div>

<div className="absolute top-[80%] left-4 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-ink-100 p-3 flex items-center gap-3 w-[240px] h-[76px] animate-float z-10 transition-transform hover:scale-105" style={{animationDuration: '8.0s', animationDelay: '1.8s'}}>
<div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center shrink-0 border border-ink-100">
<iconify-icon icon="logos:netsuite" width="26"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-ink-900 tracking-tight leading-none mb-1">
                    NetSuite
                  </span>
<span className="text-[10px] font-medium text-ink-400 leading-none">
                    Oracle Cloud
                  </span>
</div>
<div className="ml-auto flex items-center justify-center w-5 h-5 rounded-full bg-green-50 border border-green-100">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 bg-ink-900 border-y border-ink-800 relative overflow-hidden">
<div className="absolute inset-0 bg-grid-hero-dark pointer-events-none opacity-20"></div>
<div className="max-w-[1200px] mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
<div className="space-y-2 group-animate opacity-0">
<div className="text-5xl md:text-6xl font-semibold text-white tracking-tighter">
              80%
            </div>
<div className="text-ink-300 text-lg font-medium">
              faster invoice processing
            </div>
</div>
<div className="space-y-2 group-animate opacity-0" style={{animationDelay: '0.1s'}}>
<div className="text-5xl md:text-6xl font-semibold text-white tracking-tighter">
              99%
            </div>
<div className="text-ink-300 text-lg font-medium">data accuracy</div>
</div>
<div className="space-y-2 group-animate opacity-0" style={{animationDelay: '0.2s'}}>
<div className="text-5xl md:text-6xl font-semibold text-white tracking-tighter">
              50%
            </div>
<div className="text-ink-300 text-lg font-medium">faster adoption</div>
</div>
</div>
</div>
</section>



<section className="border-dashed border-ink-300/30 border-t pt-10 pr-6 pb-10 pl-6">
<div className="max-w-3xl mr-auto ml-auto space-y-24 relative">

<div className="absolute inset-0 -left-[100vw] -right-[100vw] -top-40 -bottom-40 bg-grid-blue pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] opacity-80"></div>

<div className="relative z-10 flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 group group-animate opacity-0">
<h3 className="text-3xl md:text-4xl tracking-tight font-medium text-ink-900">
            Multi-facility context.
          </h3>
<p className="text-ink-500 md:text-right max-w-xs transition-opacity duration-500 opacity-50 group-hover:opacity-100">
            See spend across 1 or 100 locations without changing tabs.
          </p>
</div>

<div className="relative z-10 flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 group group-animate opacity-0">
<h3 className="text-3xl md:text-4xl tracking-tight font-medium text-ink-900">
            Zero-training adoption.
          </h3>
<p className="text-ink-500 md:text-right max-w-xs transition-opacity duration-500 opacity-50 group-hover:opacity-100">
            No onboarding calls needed. It works how you think it works.
          </p>
</div>

<div className="relative z-10 flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 group group-animate opacity-0">
<h3 className="text-3xl md:text-4xl tracking-tight font-medium text-ink-900">
            Audit-ready always.
          </h3>
<p className="text-ink-500 md:text-right max-w-xs transition-opacity duration-500 opacity-50 group-hover:opacity-100">
            Every action is logged. Compliance is passive, not active.
          </p>
</div>
</div>
</section>


<section className="py-32 px-6 bg-white border-t border-ink-100" id="get-started-form">
<div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8 group-animate opacity-0">
<h2 className="text-5xl md:text-6xl font-medium text-ink-900 tracking-tighter leading-[1.05]">
            Leadership starts with clarity.
            <br/>
<span className="text-ink-teal">Clarity starts with Invoqe.</span>
</h2>
<p className="text-lg text-ink-500 max-w-md">
            Join the waiting list for Q4 access. Simplify your accounts payable
            across every location today.
          </p>
</div>
<div className="bg-surface p-8 rounded-2xl shadow-xl shadow-ink-900/5 border border-ink-100 group-animate opacity-0" style={{animationDelay: '0.2s'}}>
<form action="https://formspree.io/f/maqoprkq" className="space-y-5" method="POST">
<div className="space-y-1.5">
<label className="text-xs font-bold text-ink-900 uppercase tracking-wide">
                Name
              </label>
<input className="w-full bg-white border border-ink-200 rounded-lg px-4 py-3 text-ink-900 text-sm focus:outline-none focus:border-ink-teal focus:ring-1 focus:ring-ink-teal transition-all placeholder:text-ink-300" name="name" placeholder="Full Name" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold text-ink-900 uppercase tracking-wide">
                Email
              </label>
<input className="w-full bg-white border border-ink-200 rounded-lg px-4 py-3 text-ink-900 text-sm focus:outline-none focus:border-ink-teal focus:ring-1 focus:ring-ink-teal transition-all placeholder:text-ink-300" name="email" placeholder="work@email.com" required="" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-bold text-ink-900 uppercase tracking-wide">
                  Phone Number
                </label>
<input className="w-full bg-white border border-ink-200 rounded-lg px-4 py-3 text-ink-900 text-sm focus:outline-none focus:border-ink-teal focus:ring-1 focus:ring-ink-teal transition-all placeholder:text-ink-300" name="phone" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold text-ink-900 uppercase tracking-wide">
                  Company Name
                </label>
<input className="w-full bg-white border border-ink-200 rounded-lg px-4 py-3 text-ink-900 text-sm focus:outline-none focus:border-ink-teal focus:ring-1 focus:ring-ink-teal transition-all placeholder:text-ink-300" name="company" placeholder="Acme Inc." type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold text-ink-900 uppercase tracking-wide">
                Message
              </label>
<textarea className="w-full bg-white border border-ink-200 rounded-lg px-4 py-3 text-ink-900 text-sm focus:outline-none focus:border-ink-teal focus:ring-1 focus:ring-ink-teal transition-all placeholder:text-ink-300" name="message" placeholder="Tell us about your needs..." rows="3"></textarea>
</div>
<button className="w-full bg-ink-900 text-white font-medium text-sm px-6 py-4 rounded-lg hover:bg-black transition-transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-ink-900/10 flex items-center justify-center gap-2 mt-2" type="submit">
              Get Started
              <iconify-icon className="text-lg" icon="solar:arrow-right-bold-duotone"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="border-ink-300/20 border-t pt-12 pr-6 pb-12 pl-6">
<div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-xs font-medium text-ink-500">© 2024 Invoqe Inc.</p>
<div className="flex gap-8">
<a className="text-xs font-medium text-ink-500 hover:text-ink-900 transition-colors" href="#">
            Legal
          </a>
<a className="text-xs font-medium text-ink-500 hover:text-ink-900 transition-colors" href="#">
            Privacy
          </a>
<a className="text-xs font-medium text-ink-500 hover:text-ink-900 transition-colors" href="#">
            Contact
          </a>
</div>
</div>
</footer>


    </>
  );
}
