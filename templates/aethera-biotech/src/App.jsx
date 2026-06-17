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
      

<div className="fixed top-0 left-0 w-full h-[2px] z-[60] bg-zinc-900">
<div className="h-full bg-gradient-to-r from-orange-600 via-orange-400 to-white w-1/3 animate-pulse shadow-[0_0_10px_rgba(251,146,60,0.8)]"></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 pt-8 px-6 pointer-events-none transition-all duration-500">
<div className="max-w-7xl mx-auto flex items-center justify-between bg-[#0a0a0a]/80 backdrop-blur-2xl backdrop-saturate-150 border border-white/[0.08] rounded-2xl px-6 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)] pointer-events-auto ring-1 ring-white/[0.02]">
<a className="flex items-center gap-3 group relative z-10" href="#">
<div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.08] overflow-hidden">
<iconify-icon className="text-orange-500 text-xl group-hover:scale-110 transition-transform duration-500" icon="solar:dna-linear"></iconify-icon>
<div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<span className="text-2xl tracking-widest text-white transition-opacity font-instrument-serif font-normal">
            AETHERA
          </span>
</a>
<nav className="hidden md:flex items-center gap-10 text-xs font-semibold uppercase tracking-[0.2em]">
<a className="relative text-white after:absolute after:-bottom-6 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-8 after:bg-orange-500 after:shadow-[0_0_12px_rgba(251,146,60,1)] font-sans" href="#">
            Platform
          </a>
<a className="text-zinc-500 hover:text-white transition-colors duration-300 font-sans" href="#">
            Research
          </a>
<a className="text-zinc-500 hover:text-white transition-colors duration-300 font-sans" href="#">
            Pipeline
          </a>
<a className="text-zinc-500 hover:text-white transition-colors duration-300 font-sans" href="#">
            Compliance
          </a>
</nav>
<div className="flex items-center gap-6">
<div className="hidden lg:flex flex-col items-end justify-center text-[10px] font-mono tracking-widest text-right">
<span className="text-zinc-400 uppercase font-sans">SYS.OP.NORMAL</span>
<span className="text-orange-500/70 flex items-center gap-1.5 font-sans">
<span className="w-1 h-1 rounded-full bg-orange-500 animate-pulse"></span>
              ONLINE
            </span>
</div>
<div className="h-6 w-px bg-white/[0.08] hidden lg:block"></div>
<button aria-label="Toggle Light Mode" className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.1] transition-all shrink-0">
<iconify-icon className="text-xl" icon="solar:sun-linear"></iconify-icon>
</button>
<button className="bg-white text-black px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-widest hover:bg-orange-400 hover:shadow-[0_0_24px_rgba(251,146,60,0.4)] transition-all duration-300 flex items-center gap-2 group relative overflow-hidden">
<span className="relative z-10 flex items-center gap-2 font-sans">
              Initialize
              <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</span>
<div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</button>
</div>
</div>
</header>
<main className="relative">

<section className="relative min-h-[100vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#050505]">

<div className="absolute inset-0 z-0">
<img alt="Lab Background" className="w-full h-full object-cover opacity-[0.15] mix-blend-luminosity filter contrast-125" src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&amp;w=3840&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-noise mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-[#050505]"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/50 to-transparent"></div>

<div className="[mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_20%,transparent_100%)] absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="absolute bottom-12 left-12 z-20 hidden lg:flex flex-col items-center gap-4 text-zinc-500">
<span className="text-[10px] font-mono tracking-[0.3em] -rotate-90 origin-center mb-8 uppercase font-sans">
            Scroll
          </span>
<div className="w-px h-16 bg-white/10 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1/3 bg-orange-500 animate-[bounce_2s_infinite]"></div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 z-10 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative gap-x-16 gap-y-16 items-center">
<div className="lg:col-span-7 relative -translate-y-[12px]">

<div className="inline-flex items-center gap-3 px-1.5 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.08] backdrop-blur-md mb-10 ring-1 ring-white/[0.02]">
<div className="bg-white/[0.05] rounded-full px-3 py-1 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse shadow-[0_0_12px_rgba(251,146,60,0.8)]"></span>
<span className="text-[10px] font-mono font-medium text-white tracking-[0.2em] uppercase font-sans">
                  Genomic R&amp;D
                </span>
</div>
<span className="text-[10px] font-medium text-zinc-500 tracking-wide uppercase pr-3 font-sans">
                Protocol v4.2 Active
              </span>
</div>
<div className="relative">

<div className="absolute -left-6 -top-6 w-4 h-4 border-t border-l border-white/20"></div>
<div className="absolute -right-6 -bottom-6 w-4 h-4 border-b border-r border-white/20"></div>
<h1 className="leading-[0.85] uppercase bg-clip-text text-6xl font-normal text-transparent tracking-tight font-instrument-serif bg-gradient-to-b from-white via-white/90 to-white/40 z-10 relative md:text-7xl lg:text-[100px]">
                Next
                <span className="text-zinc-700 font-instrument-serif font-normal">
                  -
                </span>
                Gen
                <br/>
                Tech
                <span className="inline-block text-orange-400 drop-shadow-[0_0_30px_rgba(251,146,60,0.6)] mix-blend-screen font-instrument-serif font-normal">
                  +
                </span>
                Precision
              </h1>
</div>
<p className="leading-relaxed text-base md:text-lg text-zinc-400 max-w-xl mt-10 font-light border-l border-white/10 pl-6 relative font-sans">
<span className="absolute top-0 left-0 w-px h-1/3 bg-gradient-to-b from-orange-500 to-transparent"></span>
              Engineering the future of medicine through synthetic biology,
              computational genetics, and unprecedented molecular therapeutics.
            </p>
<div className="flex flex-col sm:flex-row gap-10 mt-14 items-start sm:items-center">
<div className="flex items-center gap-6 p-2 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm">
<div className="flex -space-x-3 px-2">
<img alt="Researcher" className="w-10 h-10 rounded-full border border-zinc-800 object-cover relative z-30 filter grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="Researcher" className="w-10 h-10 rounded-full border border-zinc-800 object-cover relative z-20 filter grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="Researcher" className="w-10 h-10 rounded-full border border-zinc-800 object-cover relative z-10 filter grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div className="w-10 h-10 rounded-full border border-zinc-800 bg-[#0a0a0a] flex items-center justify-center relative z-0 text-[10px] font-mono text-zinc-400 font-sans">
                    +124
                  </div>
</div>
<div className="pr-6">
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1 font-sans">
                    Lead Investigators
                  </div>
<div className="text-xs text-white font-medium font-sans">
                    Global Network
                  </div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5 hidden lg:block relative h-[700px] w-full">

<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-white/[0.03] border-dashed animate-[spin_60s_linear_infinite]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-orange-500/[0.05] animate-[spin_40s_linear_infinite_reverse]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

<div className="z-20 border-white/[0.08] transition-all duration-700 hover:-translate-y-2 group bg-[#0a0a0a]/90 w-80 border ring-1 rounded-2xl pt-2 pr-2 pb-2 pl-2 absolute top-12 right-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl">

<div className="flex justify-between items-center px-4 py-3 border-b border-white/[0.05]">
<span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase font-sans">
                    Analysis // 04
                  </span>
<iconify-icon className="text-zinc-600 text-xs" icon="solar:maximize-square-minimalistic-linear"></iconify-icon>
</div>
<div className="relative overflow-hidden rounded-xl m-2 group-hover:ring-1 ring-white/10 transition-all">

<div className="absolute inset-0 scanline opacity-20 z-10 pointer-events-none"></div>
<div className="absolute top-0 left-0 w-full h-[2px] bg-orange-500/50 z-20 animate-[slideDown_3s_ease-in-out_infinite] shadow-[0_0_10px_rgba(251,146,60,1)] shadow-orange-500"></div>
<img alt="Lab Research" className="w-full h-52 object-cover opacity-70 mix-blend-luminosity filter contrast-125 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/567dda4f-f72c-4d3d-b8dc-a365c8cf9060/800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>

<div className="absolute bottom-3 right-3 text-[9px] font-mono text-orange-400 bg-black/60 px-2 py-1 rounded backdrop-blur-md border border-orange-500/20 font-sans">
                    SEQ_MATCH: 99.8%
                  </div>
</div>
<div className="p-4 pt-2 flex justify-between items-end">
<div>
<div className="text-[10px] text-zinc-500 font-mono mb-1.5 uppercase tracking-widest font-sans">
                      Core Process
                    </div>
<h3 className="text-sm font-medium text-white tracking-tight font-sans">
                      Gene Sequencing
                    </h3>
</div>
<button className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center hover:bg-white hover:text-black transition-all text-zinc-400 group-hover:border-orange-500/50 group-hover:text-orange-400">
<iconify-icon className="text-sm" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>

<div className="z-30 border-white/[0.08] transition-all duration-700 hover:-translate-y-2 overflow-hidden bg-[#0a0a0a] w-72 border ring-1 rounded-2xl px-6 py-6 absolute bottom-36 left-0 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

<div className="absolute -left-12 -bottom-12 w-32 h-32 bg-orange-500/20 blur-3xl rounded-full"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<div className="bg-gradient-to-br from-orange-500 to-orange-700 w-10 h-10 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(251,146,60,0.4)]">
<iconify-icon className="text-xl text-white" icon="solar:dna-linear"></iconify-icon>
</div>
<div className="text-[9px] font-mono text-zinc-500 tracking-widest border border-white/10 px-2 py-1 rounded bg-white/[0.02] font-sans">
                      PIPELINE.01
                    </div>
</div>
<h3 className="leading-[1] text-xl text-white tracking-tight mb-4 font-instrument-serif font-normal">
                    Breakthrough
                    <br/>
<span className="text-zinc-500 font-instrument-serif font-normal">
                      Therapeutics
                    </span>
</h3>

<div className="flex items-end gap-1 h-8 mb-6">
<div className="w-full bg-white/5 h-[30%] rounded-sm"></div>
<div className="w-full bg-white/10 h-[50%] rounded-sm"></div>
<div className="w-full bg-white/20 h-[70%] rounded-sm"></div>
<div className="w-full bg-orange-500/50 h-[85%] rounded-sm relative">
<div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
</div>
<div className="w-full bg-orange-500 h-[100%] rounded-sm relative shadow-[0_0_8px_rgba(251,146,60,0.5)]"></div>
</div>
<a className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors group/link uppercase tracking-widest font-sans" href="#">
                    Explore Data
                    <iconify-icon className="group-hover/link:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
<style>
          @keyframes slideDown {
              0% { top: 0; opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { top: 100%; opacity: 0; }
          }
        </style>
</section>

<section className="relative z-20 -mt-8 mx-6">
<div className="max-w-7xl mx-auto bg-[#0a0a0a]/90 backdrop-blur-3xl backdrop-saturate-200 border border-white/[0.08] rounded-2xl p-8 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.6)] ring-1 ring-white/[0.02]">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 divide-y md:divide-y-0 divide-white/[0.05] relative">

<div className="absolute -top-12 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
<div className="flex-1 px-8 flex flex-col items-center md:items-start justify-center relative group">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block"></div>
<div className="text-[10px] font-mono text-zinc-500 mb-2 uppercase tracking-[0.2em] flex items-center gap-2 font-sans">
<span className="w-1 h-1 rounded-full bg-zinc-600"></span>
                ESTABLISHED
              </div>
<div className="text-6xl md:text-7xl tracking-tight text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b from-white to-zinc-500 transition-all duration-500 font-instrument-serif font-normal">
                2012
              </div>
<div className="text-xs font-medium text-zinc-400 font-sans">
                Foundation of excellence
              </div>
</div>
<div className="flex-1 px-8 flex flex-col items-center md:items-start justify-center relative group pt-8 md:pt-0">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block"></div>
<div className="text-[10px] font-mono text-zinc-500 mb-2 uppercase tracking-[0.2em] flex items-center gap-2 font-sans">
<span className="w-1 h-1 rounded-full bg-orange-500 animate-pulse shadow-[0_0_8px_rgba(251,146,60,0.8)]"></span>
                INFRASTRUCTURE
              </div>
<div className="text-6xl md:text-7xl tracking-tight text-white mb-2 flex items-baseline gap-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b from-white to-zinc-500 transition-all duration-500 font-instrument-serif font-normal">
                50
                <span className="text-4xl md:text-5xl text-orange-400 group-hover:text-orange-500 transition-colors font-instrument-serif font-normal">
                  K
                </span>
</div>
<div className="text-xs font-medium text-zinc-400 font-sans">
                Sq. Ft. Advanced Lab Space
              </div>
</div>
<div className="flex-1 px-8 flex flex-col items-center md:items-start justify-center relative group pt-8 md:pt-0">
<div className="text-[10px] font-mono text-zinc-500 mb-2 uppercase tracking-[0.2em] flex items-center gap-2 font-sans">
<span className="w-1 h-1 rounded-full bg-zinc-600"></span>
                ACCREDITATION
              </div>
<div className="text-6xl md:text-7xl tracking-tight text-white mb-2 flex items-baseline gap-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b from-white to-zinc-500 transition-all duration-500 font-instrument-serif font-normal">
                CLIA
                <span className="text-xl text-zinc-600 tracking-normal border border-zinc-700 rounded px-2 py-0.5 relative top-[-10px] font-instrument-serif font-normal">
                  +CAP
                </span>
</div>
<div className="text-xs font-medium text-zinc-400 font-sans">
                Internationally Certified
              </div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] pt-32 pb-24 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"></div>

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/[0.03] to-transparent pointer-events-none rounded-full blur-3xl"></div>
<div className="absolute inset-0 bg-grid-white bg-[size:60px_60px] opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="">
<div className="flex items-center gap-4 mb-6">
<div className="h-[1px] w-12 bg-orange-500"></div>
<span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 font-sans">
                  CAPABILITIES.MATRIX
                </span>
</div>
<h2 className="md:text-[58px] leading-[0.85] text-[34px] font-normal text-white tracking-tight font-instrument-serif">
                Advanced Solutions
                <br/>
<span className="text-zinc-600 font-instrument-serif font-normal">
                  For Life Sciences
                </span>
</h2>
</div>
<button className="bg-[#0a0a0a] border border-white/[0.1] text-white px-6 py-3 rounded-xl text-xs font-mono uppercase tracking-widest hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all flex items-center gap-3 group ring-1 ring-white/[0.02] font-sans">
              Research Scope
              <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[420px]">

<div className="md:col-span-2 group cursor-pointer relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a] hover:border-white/[0.2] transition-colors duration-500 ring-1 ring-white/[0.02]">

<div className="absolute top-6 right-6 text-[9px] font-mono text-zinc-500 tracking-widest z-20 mix-blend-difference font-sans">
                ID: NGS-001.X
              </div>
<img alt="Next-Gen Sequencing" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity filter contrast-125 group-hover:scale-105 group-hover:mix-blend-normal group-hover:opacity-60 transition-all duration-1000" src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent absolute inset-0"></div>
<div className="bg-gradient-to-r from-[#050505] via-transparent to-transparent absolute inset-0 w-2/3"></div>
<div className="absolute inset-x-0 bottom-0 p-8 flex justify-between items-end">
<div className="relative z-10 max-w-lg">
<div className="inline-flex px-2 py-1 rounded bg-white/10 backdrop-blur-md border border-white/10 text-[9px] font-mono tracking-widest text-white mb-5 uppercase flex items-center gap-2 font-sans">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                    High-Throughput
                  </div>
<h3 className="text-[34px] tracking-tight text-white drop-shadow-md mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-white to-zinc-400 transition-all font-instrument-serif font-normal">
                    Next-Gen Sequencing
                  </h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed font-sans">
                    Advanced genomic screening systems ensuring ultra-accurate,
                    rapid turnaround for clinical and research applications with
                    multi-omics integration.
                  </p>
</div>
<div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 text-black shadow-[0_0_20px_rgba(251,146,60,0.4)] relative z-10">
<iconify-icon className="text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group cursor-pointer relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a] p-8 flex flex-col justify-between hover:bg-[#111] hover:border-white/[0.2] transition-all duration-500 ring-1 ring-white/[0.02]">
<div className="absolute inset-0 bg-grid-white bg-[size:20px_20px] opacity-[0.03]"></div>
<div className="flex justify-between items-start relative z-10">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/[0.1] text-zinc-400 flex items-center justify-center group-hover:text-orange-400 group-hover:border-orange-500/30 transition-all shadow-inner">
<iconify-icon className="text-2xl" icon="solar:test-tube-linear"></iconify-icon>
</div>
<div className="flex flex-col items-end gap-1 text-[9px] font-mono text-zinc-600">
<span className="font-sans">PRT-SYN</span>
<span className="text-orange-500/70 font-sans">ISO-9001</span>
</div>
</div>
<div className="relative z-10">
<div className="w-full h-px bg-gradient-to-r from-white/[0.1] to-transparent mb-6"></div>
<h3 className="text-[25px] tracking-tight leading-[0.9] text-white mb-4 font-instrument-serif font-normal">
                  Custom Protein
                  <br/>
<span className="text-zinc-500 font-instrument-serif font-normal">
                    Synthesis
                  </span>
</h3>
<p className="text-xs text-zinc-400 leading-relaxed font-light font-sans">
                  Tailored engineering services meeting strict tolerances for
                  therapeutic and diagnostic pipelines.
                </p>
</div>
</div>

<div className="group cursor-pointer relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a] hover:border-white/[0.2] transition-all duration-500 ring-1 ring-white/[0.02]">
<img alt="Cell Culturing" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-70 transition-all duration-1000" src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-150 group-hover:scale-100">
<div className="w-1 h-1 bg-orange-500 rounded-full"></div>
<div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/20"></div>
<div className="absolute left-0 right-0 top-1/2 h-px bg-white/20"></div>
</div>
<div className="absolute inset-x-0 bottom-0 p-8 flex justify-between items-end z-10">
<div>
<p className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest mb-2 border-l border-orange-500 pl-2 font-sans">
                    High-Viability
                  </p>
<h3 className="text-[25px] tracking-tight text-white mb-1 font-instrument-serif font-normal">
                    Cell Culturing
                  </h3>
</div>
<div className="w-10 h-10 rounded-xl bg-white/[0.05] backdrop-blur-md border border-white/[0.1] flex items-center justify-center text-white transform group-hover:bg-white group-hover:text-black transition-all">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>

<div className="md:col-span-2 group cursor-pointer relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a] flex flex-col md:flex-row items-center hover:border-white/[0.2] transition-colors duration-500 ring-1 ring-white/[0.02]">
<div className="p-8 md:p-10 md:w-1/2 z-10 relative flex flex-col h-full justify-center">
<div className="flex justify-between items-start mb-8">
<div className="inline-flex px-2 py-1 rounded bg-orange-500/10 border border-orange-500/20 text-[9px] font-mono tracking-widest text-orange-400 uppercase flex items-center gap-2 font-sans">
<iconify-icon icon="solar:bolt-linear"></iconify-icon>
                    Automation Lab
                  </div>
<span className="text-[9px] font-mono text-zinc-600 tracking-widest font-sans">
                    [SYS_ROBOTIC]
                  </span>
</div>
<h3 className="text-[25px] md:text-[34px] tracking-tight text-white mb-4 font-instrument-serif font-normal">
                  State-of-the-Art
                  <br/>
                  Robotic Assays
                </h3>
<p className="text-sm text-zinc-400 mb-8 max-w-sm leading-relaxed font-light font-sans">
                  Integrating advanced robotics into liquid handling processes
                  for unparalleled consistency, throughput speed, and safety in
                  high-volume screening operations.
                </p>
<div className="mt-auto inline-flex items-center gap-2 text-xs font-mono text-white tracking-widest uppercase group/btn">
<span className="relative overflow-hidden pb-1 font-sans">
                    Discover Platform
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white group-hover/btn:bg-orange-500 transition-colors"></span>
</span>
<iconify-icon className="group-hover/btn:translate-x-1 transition-transform text-orange-500" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="absolute md:relative inset-0 md:w-1/2 h-full opacity-20 md:opacity-100 mix-blend-luminosity filter contrast-125 md:mix-blend-normal group-hover:opacity-80 transition-opacity duration-700">

<div className="absolute inset-0 bg-grid-white bg-[size:30px_30px] opacity-10 z-10 mix-blend-overlay"></div>
<img alt="Robotics Lab" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="hidden md:block bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent absolute inset-0 z-10"></div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] py-32 border-t border-white/[0.05] relative overflow-hidden">

<div className="absolute inset-0 bg-grid-white bg-[size:64px_64px] opacity-30"></div>

<div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/[0.02] to-[#050505] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
<div className="relative">
<div className="sticky top-32">
<div className="flex items-center gap-4 mb-8">
<div className="w-1.5 h-1.5 bg-orange-500 rotate-45"></div>
<span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 font-sans">
                  CORPORATE.ETHOS
                </span>
</div>
<h2 className="text-[42px] md:text-[58px] tracking-tight leading-[0.85] text-white mb-10 font-instrument-serif font-normal">
                A Legacy of
                <br/>
<span className="text-zinc-600 font-instrument-serif font-normal">
                  Discovery
                </span>
</h2>
<div className="relative rounded-2xl overflow-hidden border border-white/[0.08] group ring-1 ring-white/[0.02]">
<img alt="Microscope Research" className="w-full h-[450px] object-cover mix-blend-luminosity filter contrast-125 group-hover:mix-blend-normal transition-all duration-1000 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent absolute inset-0"></div>

<div className="absolute top-6 right-6 flex flex-col gap-1 items-end pointer-events-none">
<div className="text-[8px] font-mono text-zinc-400 bg-black/50 px-2 py-0.5 rounded border border-white/10 backdrop-blur-sm font-sans">
                    MAG: 4000x
                  </div>
<div className="text-[8px] font-mono text-green-400 bg-black/50 px-2 py-0.5 rounded border border-white/10 backdrop-blur-sm flex items-center gap-1 font-sans">
<span className="w-1 h-1 rounded-full bg-green-400 animate-pulse"></span>
                    FOCUS LOCK
                  </div>
</div>

<div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-[#0a0a0a]/80 border border-white/[0.08] ring-1 ring-white/[0.02] rounded-xl p-5 flex items-center justify-between group-hover:-translate-y-2 transition-transform duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center">
<iconify-icon className="text-xl text-zinc-400" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div>
<div className="text-[9px] font-mono text-zinc-500 tracking-widest uppercase mb-1 font-sans">
                        Bioinformatics
                      </div>
<div className="text-sm text-white font-medium font-sans">
                        Data Analysis &amp; Modeling
                      </div>
</div>
</div>
<iconify-icon className="text-2xl text-orange-500" icon="solar:shield-check-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="flex flex-col justify-center gap-6">

<div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0a0a0a] ring-1 ring-white/[0.02] hover:bg-[#111] transition-all duration-300 group cursor-pointer relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
<div className="absolute -right-8 -bottom-10 text-[150px] leading-none text-white/[0.02] group-hover:text-white/[0.05] transition-colors pointer-events-none select-none font-instrument-serif font-normal">
                01
              </div>
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-400 to-orange-600 shadow-[0_0_10px_rgba(251,146,60,0.8)]"></div>
<div className="flex gap-6 items-start relative z-10">
<div className="bg-[#1a1a1a] p-3.5 rounded-xl border border-white/[0.08] group-hover:border-orange-500/30 transition-colors shadow-inner">
<iconify-icon className="text-2xl text-white group-hover:text-orange-400 transition-colors" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-4xl tracking-tight text-white mb-3 font-instrument-serif font-normal">
                    Our Scientists
                  </h4>
<p className="text-sm text-zinc-400 leading-relaxed font-light max-w-sm font-sans">
                    With over 100 PhD researchers and technicians, we combine
                    deep scientific expertise with computational innovation to
                    deliver exceptional breakthroughs.
                  </p>
</div>
</div>
</div>
<div className="p-8 rounded-2xl border border-white/[0.04] bg-transparent hover:bg-[#0a0a0a] hover:border-white/[0.08] hover:ring-1 ring-white/[0.02] transition-all duration-300 group cursor-pointer relative overflow-hidden">
<div className="absolute -right-8 -bottom-10 text-[150px] leading-none text-white/[0.02] group-hover:text-white/[0.05] transition-colors pointer-events-none select-none font-instrument-serif font-normal">
                02
              </div>
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-400 to-orange-600 scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-500 shadow-[0_0_10px_rgba(251,146,60,0.8)]"></div>
<div className="flex gap-6 items-start relative z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<div className="bg-[#0f0f0f] p-3.5 rounded-xl border border-white/[0.05] group-hover:border-orange-500/30 transition-colors shadow-inner">
<iconify-icon className="text-2xl text-zinc-500 group-hover:text-orange-400 transition-colors" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-4xl tracking-tight text-white mb-3 font-instrument-serif font-normal">
                    Commitment to Ethics
                  </h4>
<p className="text-sm text-zinc-400 leading-relaxed font-light max-w-sm font-sans">
                    Committed to patient success by maintaining the highest
                    ethical standards in all clinical and pre-clinical trials,
                    surpassing regulatory safety protocols.
                  </p>
</div>
</div>
</div>
<div className="p-8 rounded-2xl border border-white/[0.04] bg-transparent hover:bg-[#0a0a0a] hover:border-white/[0.08] hover:ring-1 ring-white/[0.02] transition-all duration-300 group cursor-pointer relative overflow-hidden">
<div className="absolute -right-8 -bottom-10 text-[150px] leading-none text-white/[0.02] group-hover:text-white/[0.05] transition-colors pointer-events-none select-none font-instrument-serif font-normal">
                03
              </div>
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-400 to-orange-600 scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-500 shadow-[0_0_10px_rgba(251,146,60,0.8)]"></div>
<div className="flex gap-6 items-start relative z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
<div className="bg-[#0f0f0f] p-3.5 rounded-xl border border-white/[0.05] group-hover:border-orange-500/30 transition-colors shadow-inner">
<iconify-icon className="text-2xl text-zinc-500 group-hover:text-orange-400 transition-colors" icon="solar:medal-ribbon-linear"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-4xl tracking-tight text-white mb-3 font-instrument-serif font-normal">
                    Certifications &amp; Standards
                  </h4>
<p className="text-sm text-zinc-400 leading-relaxed font-light max-w-sm font-sans">
                    Proudly holding CLIA, CAP, and ISO-9001 certifications, a
                    testament to our rigorous Quality Management System and
                    laboratory excellence.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#000] pt-32 pb-24 relative border-y border-white/[0.05]">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
<div>
<div className="flex items-center gap-4 mb-6">
<div className="h-[1px] w-12 bg-white/20"></div>
<span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 font-sans">
                  INFRASTRUCTURE
                </span>
</div>
<h2 className="text-[42px] md:text-[58px] tracking-tight leading-[0.85] text-white font-instrument-serif font-normal">
                State-Of-The-Art
                <br/>
<span className="text-zinc-600 font-instrument-serif font-normal">
                  Lab In Boston
                </span>
</h2>
</div>
<div className="lg:ml-auto">
<p className="text-sm text-zinc-400 max-w-md leading-relaxed font-light border-l border-white/[0.1] pl-6 relative font-sans">
<span className="absolute top-0 left-0 w-[2px] h-1/2 bg-white/20"></span>
                Spanning an impressive 50,000 square feet, our facility houses
                high-throughput sequencers, a dedicated BSL-3 environment, and
                serves as the epicenter of biological innovation.
              </p>
</div>
</div>
</div>

<div className="relative h-[65vh] w-full mt-8 group">

<div className="absolute inset-8 border border-white/10 z-10 pointer-events-none hidden md:block">
<div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/50 -translate-x-0.5 -translate-y-0.5"></div>
<div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white/50 translate-x-0.5 -translate-y-0.5"></div>
<div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white/50 -translate-x-0.5 translate-y-0.5"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/50 translate-x-0.5 translate-y-0.5"></div>
</div>
<img alt="Lab Facility" className="opacity-60 mix-blend-luminosity filter contrast-125 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/655ec580-4748-4849-8669-b6cf5ef79dd3_3840w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>

<div className="absolute bottom-12 left-6 lg:left-1/2 lg:-translate-x-1/2 bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/[0.08] p-2.5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col sm:flex-row gap-5 items-center ring-1 ring-white/[0.02]">
<div className="w-36 h-28 rounded-xl overflow-hidden shrink-0 border border-white/[0.05] relative group/img">
<img alt="Microscope Slide" className="w-full h-full object-cover filter contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a412fd1c-e6fb-4c26-932d-291eaafd0bf0_320w.webp"/>
<div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
<div className="w-6 h-6 border border-white/30 rounded-full"></div>
<div className="absolute w-1 h-1 bg-white rounded-full"></div>
</div>
</div>
<div className="px-2 py-2 flex flex-col justify-center">
<div className="flex items-center gap-2 mb-2">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
<span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest font-sans">
                  Live Feed // Cam 04
                </span>
</div>
<h3 className="font-medium text-white tracking-tight text-sm mb-1 font-sans">
                CRISPR Gene Editing
              </h3>
<div className="flex items-center gap-3 mt-1">
<div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500 bg-white/[0.03] px-2 py-1 rounded border border-white/[0.05] font-sans">
<iconify-icon className="text-orange-400" icon="solar:dna-linear"></iconify-icon>
                  TGT-ACC
                </div>
<span className="text-xs text-zinc-600 font-mono tracking-widest font-sans">
                  48.2µm
                </span>
</div>
</div>
<div className="px-6 border-l border-white/[0.08] h-16 flex items-center">
<button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-orange-400 hover:shadow-[0_0_20px_rgba(251,146,60,0.4)] transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] py-32 border-b border-white/[0.05] relative overflow-hidden">
<div className="absolute inset-0 bg-noise opacity-50 mix-blend-overlay pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-24">
<div className="inline-flex items-center gap-3 px-2 py-1.5 rounded bg-white/[0.02] border border-white/[0.08] backdrop-blur-md mb-8 ring-1 ring-white/[0.02]">
<span className="text-[10px] font-mono font-medium text-zinc-400 tracking-[0.2em] uppercase px-2 font-sans">
                Applications.Matrix
              </span>
</div>
<h2 className="text-[42px] md:text-[58px] tracking-tight leading-[0.85] text-white font-instrument-serif font-normal">
              Impact Spanning
              <br/>
<span className="text-zinc-600 font-instrument-serif font-normal">
                Multiple Disciplines
              </span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#0a0a0a] border border-white/[0.08] rounded-2xl p-8 flex flex-col relative overflow-hidden group hover:border-white/[0.2] transition-colors duration-500 ring-1 ring-white/[0.02]">

<div className="absolute -right-24 -top-24 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-colors duration-700"></div>
<div className="absolute inset-0 bg-grid-white bg-[size:24px_24px] opacity-10 pointer-events-none"></div>
<div className="relative z-10 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-8">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
<span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest font-sans">
                      Active R&amp;D
                    </span>
</div>
<iconify-icon className="text-3xl text-zinc-700 group-hover:text-orange-400 transition-colors duration-500" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div className="mb-10">
<div className="flex items-baseline gap-2">
<div className="text-[80px] tracking-tight text-white leading-[0.8] drop-shadow-2xl font-instrument-serif font-normal">
                      142
                    </div>
<div className="text-5xl text-orange-500 tracking-tight leading-none font-instrument-serif font-normal">
                      +
                    </div>
</div>
<div className="text-[10px] text-zinc-500 font-mono uppercase tracking-[0.2em] mt-3 font-sans">
                    Specialized Scientists
                  </div>
</div>
<div className="space-y-2 mb-10 flex-1">

<div className="flex items-center justify-between p-3 rounded-xl bg-[#111] border border-white/[0.04] group-hover:border-white/[0.1] transition-colors group/row relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500 opacity-50 group-hover/row:opacity-100 transition-opacity"></div>
<div className="flex items-center gap-4 text-sm text-zinc-300 pl-2">
<iconify-icon className="text-orange-500" icon="solar:heart-pulse-linear"></iconify-icon>
<span className="font-medium font-sans">Oncology</span>
</div>
<div className="flex items-center gap-3 text-[10px] font-mono">
<div className="w-16 h-[2px] bg-white/10 rounded-full overflow-hidden">
<div className="w-[45%] h-full bg-orange-500 rounded-full"></div>
</div>
<span className="text-zinc-400 w-6 text-right font-sans">
                        45%
                      </span>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-xl bg-[#111] border border-white/[0.04] group-hover:border-white/[0.1] transition-colors group/row relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 opacity-50 group-hover/row:opacity-100 transition-opacity"></div>
<div className="flex items-center gap-4 text-sm text-zinc-300 pl-2">
<iconify-icon className="text-blue-500" icon="solar:leaf-linear"></iconify-icon>
<span className="font-medium font-sans">Agri-Bio</span>
</div>
<div className="flex items-center gap-3 text-[10px] font-mono">
<div className="w-16 h-[2px] bg-white/10 rounded-full overflow-hidden">
<div className="w-[35%] h-full bg-blue-500 rounded-full"></div>
</div>
<span className="text-zinc-400 w-6 text-right font-sans">
                        35%
                      </span>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-xl bg-[#111] border border-white/[0.04] group-hover:border-white/[0.1] transition-colors group/row relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 opacity-50 group-hover/row:opacity-100 transition-opacity"></div>
<div className="flex items-center gap-4 text-sm text-zinc-300 pl-2">
<iconify-icon className="text-purple-500" icon="solar:shield-check-linear"></iconify-icon>
<span className="font-medium font-sans">Immunology</span>
</div>
<div className="flex items-center gap-3 text-[10px] font-mono">
<div className="w-16 h-[2px] bg-white/10 rounded-full overflow-hidden">
<div className="w-[20%] h-full bg-purple-500 rounded-full"></div>
</div>
<span className="text-zinc-400 w-6 text-right font-sans">
                        20%
                      </span>
</div>
</div>
</div>
</div>
<button className="w-full py-4 rounded-xl text-xs font-mono uppercase tracking-widest bg-white text-black hover:bg-orange-400 hover:shadow-[0_0_24px_rgba(251,146,60,0.4)] transition-all relative z-10 flex items-center justify-center gap-3 group/btn font-semibold font-sans">
                Access Partnership
                <iconify-icon className="group-hover/btn:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</button>
</div>

<div className="flex flex-col overflow-hidden group hover:border-red-500/40 transition-colors duration-500 bg-[#0a0a0a] border border-white/[0.08] ring-1 ring-white/[0.02] rounded-2xl p-8 relative">

<div className="absolute -right-20 top-1/2 -translate-y-1/2 w-48 h-64 bg-red-500/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex justify-between items-start mb-8">
<div className="w-14 h-14 rounded-2xl bg-[#111] border border-white/[0.08] text-red-500 flex items-center justify-center group-hover:bg-red-500/10 group-hover:border-red-500/30 transition-all shadow-inner">
<iconify-icon className="text-3xl" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<div className="flex items-center gap-2 px-2 py-1 rounded bg-white/[0.02] border border-white/[0.05] text-[9px] font-mono uppercase tracking-widest text-zinc-400 font-sans">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
                    Phase III
                  </div>
</div>
<h4 className="text-white text-2xl tracking-tight mb-2 font-instrument-serif font-normal">
                  Therapeutics &amp; Oncology
                </h4>
<p className="text-[10px] font-mono text-red-500 tracking-widest uppercase mb-5 font-sans">
                  Precision Targeted
                </p>
<p className="text-sm text-zinc-400 leading-relaxed font-light mb-8 font-sans">
                  Serving clinical researchers to develop reliable treatments
                  for critical genomic disorders, utilizing high-tolerance
                  immunotherapies.
                </p>

<div className="grid grid-cols-2 gap-3 mb-8 mt-auto">
<div className="p-4 rounded-xl border border-white/[0.05] bg-[#111]">
<div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5 font-sans">
                      Binding Affinity
                    </div>
<div className="text-xl text-white tracking-tight font-instrument-serif font-normal">
                      Kd &lt; 1pM
                    </div>
</div>
<div className="p-4 rounded-xl border border-white/[0.05] bg-[#111]">
<div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5 font-sans">
                      Toxicity Level
                    </div>
<div className="text-xl text-white tracking-tight font-instrument-serif font-normal">
                      Grade 1
                    </div>
</div>
</div>

<div className="space-y-3 bg-[#111] p-5 rounded-xl border border-white/[0.05]">
<div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-zinc-400">
<span className="font-sans">Clinical Efficacy</span>
<span className="text-white font-sans">99.9%</span>
</div>
<div className="h-[3px] w-full bg-white/10 rounded-full overflow-hidden flex relative">
<div className="h-full bg-gradient-to-r from-red-600 to-red-400 w-[99.9%] rounded-full relative shadow-[0_0_10px_rgba(239,68,68,0.5)]">
<div className="absolute inset-0 bg-white/30 w-1/4 animate-[slideRight_2s_ease-in-out_infinite]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col group hover:border-blue-500/40 transition-colors duration-500 overflow-hidden bg-[#0a0a0a] border border-white/[0.08] ring-1 ring-white/[0.02] rounded-2xl p-8 relative">

<div className="absolute -left-20 bottom-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex justify-between items-start mb-8">
<div className="w-14 h-14 rounded-2xl bg-[#111] border border-white/[0.08] text-blue-500 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all shadow-inner">
<iconify-icon className="text-3xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<div className="flex items-center gap-2 px-2 py-1 rounded bg-white/[0.02] border border-white/[0.05] text-[9px] font-mono uppercase tracking-widest text-zinc-400 font-sans">
<iconify-icon className="text-blue-500 text-sm" icon="solar:shield-check-linear"></iconify-icon>
                    Patent
                  </div>
</div>
<h4 className="text-white text-2xl tracking-tight mb-2 font-instrument-serif font-normal">
                  Agricultural &amp; SynBio
                </h4>
<p className="text-[10px] font-mono text-blue-500 tracking-widest uppercase mb-5 font-sans">
                  Climate Resilience
                </p>
<p className="text-sm text-zinc-400 leading-relaxed font-light mb-8 font-sans">
                  Supporting global food security with engineered
                  drought-resistant traits, alongside discovering sustainable
                  bio-based alternatives.
                </p>

<div className="flex flex-wrap gap-2 mb-8 mt-auto">
<span className="px-2.5 py-1.5 rounded-md bg-[#111] border border-white/[0.05] text-[9px] font-mono tracking-widest uppercase text-zinc-400 flex items-center gap-2 font-sans">
<span className="w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.8)]"></span>
                    Drought-Resist
                  </span>
<span className="px-2.5 py-1.5 rounded-md bg-[#111] border border-white/[0.05] text-[9px] font-mono tracking-widest uppercase text-zinc-400 flex items-center gap-2 font-sans">
<span className="w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.8)]"></span>
                    Pest Immunity
                  </span>
<span className="px-2.5 py-1.5 rounded-md bg-[#111] border border-white/[0.05] text-[9px] font-mono tracking-widest uppercase text-zinc-400 flex items-center gap-2 font-sans">
<span className="w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.8)]"></span>
                    N2 Fixation
                  </span>
</div>

<div className="space-y-4 bg-[#111] p-5 rounded-xl border border-white/[0.05]">
<div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-2">
<span className="font-sans">Yield Multiplier</span>
<span className="text-white font-sans">3.4x Baseline</span>
</div>
<div className="flex gap-1.5 h-8 items-end relative">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
<div className="w-full h-px bg-white border-dashed"></div>
<div className="w-full h-px bg-white border-dashed"></div>
</div>

<div className="w-full bg-white/[0.05] rounded-sm h-[20%] hover:bg-white/[0.1] transition-colors relative group/bar z-10"></div>
<div className="w-full bg-white/[0.08] rounded-sm h-[35%] hover:bg-white/[0.15] transition-colors relative group/bar z-10"></div>
<div className="w-full bg-white/[0.12] rounded-sm h-[50%] hover:bg-white/[0.2] transition-colors relative group/bar z-10"></div>
<div className="w-full bg-blue-500/50 rounded-sm h-[75%] hover:bg-blue-500/70 transition-colors relative group/bar z-10"></div>
<div className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-sm h-[100%] relative group/bar shadow-[0_0_12px_rgba(59,130,246,0.6)] z-10">
<div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[8px] font-mono text-blue-400 opacity-0 group-hover/bar:opacity-100 transition-opacity font-bold uppercase font-sans">
                        Cur
                      </div>
</div>
</div>
</div>
</div>
</div>
<style>
              @keyframes slideRight {
                  0% { left: -25%; opacity: 0; }
                  50% { opacity: 1; }
                  100% { left: 100%; opacity: 0; }
              }
            </style>
</div>
</div>
</section>

<section className="relative bg-[#050505] py-32 overflow-hidden border-b border-white/[0.05]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent pointer-events-none blur-2xl"></div>
<div className="absolute inset-0 bg-grid-white bg-[size:40px_40px] opacity-10 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="relative">

<div className="absolute -left-12 top-0 w-px h-full bg-gradient-to-b from-transparent via-orange-500/20 to-transparent hidden lg:block"></div>
<div className="w-14 h-14 rounded-2xl border border-white/[0.08] bg-white/[0.02] flex items-center justify-center text-white mb-10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] ring-1 ring-white/[0.02] backdrop-blur-md">
<iconify-icon className="text-3xl text-orange-500" icon="solar:bacteria-linear"></iconify-icon>
</div>
<h2 className="text-[42px] md:text-[64px] tracking-tight text-white leading-[0.85] font-instrument-serif font-normal">
              Pushing the
              <br/>
              Boundaries of
              <br/>
<span className="relative inline-block">
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 relative z-10 font-instrument-serif font-normal">
                  Bioscience.
                </span>
<span className="absolute inset-0 text-orange-500 blur-xl opacity-50 select-none font-instrument-serif font-normal">
                  Bioscience.
                </span>
</span>
</h2>
<p className="mt-8 text-zinc-400 text-base max-w-md font-light leading-relaxed font-sans">
              Connect with our lead investigators to discuss assay
              specifications, target sequences, and research timelines for your
              next clinical program.
            </p>
<div className="mt-10 flex items-center gap-4">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-[#111] border border-white/10 flex items-center justify-center">
<iconify-icon className="text-zinc-500 text-xs" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-[#111] border border-white/10 flex items-center justify-center">
<iconify-icon className="text-zinc-500 text-xs" icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
</div>
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-sans">
                End-to-end Encrypted
                <br/>
                Secure Channel
              </span>
</div>
</div>

<div className="relative group">

<div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-[24px] blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
<div className="bg-[#0a0a0a]/90 backdrop-blur-3xl backdrop-saturate-200 border border-white/[0.08] ring-1 ring-white/[0.02] rounded-2xl p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
<div className="flex justify-between items-center mb-10 border-b border-white/[0.05] pb-6">
<h3 className="text-[15px] text-white flex items-center gap-3 font-instrument-serif font-normal">
<iconify-icon className="text-orange-500 text-2xl" icon="solar:letter-linear"></iconify-icon>
                  Request Consultation
                </h3>
<span className="text-[9px] font-mono tracking-widest text-zinc-500 border border-white/[0.05] bg-white/[0.02] px-2 py-1 rounded uppercase font-sans">
                  Form_01
                </span>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 ml-1 font-sans">
                      Investigator Name
                    </label>
<div className="relative group/input">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-600 group-focus-within/input:text-orange-500 transition-colors">
<iconify-icon className="text-lg" icon="solar:user-linear"></iconify-icon>
</div>
<input className="w-full pl-11 pr-4 py-3 bg-[#050505]/50 border border-white/[0.08] rounded-xl outline-none text-sm text-white focus:ring-1 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all placeholder:text-zinc-700 font-light" placeholder="Dr. Jane Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 ml-1 font-sans">
                      Institution Email
                    </label>
<div className="relative group/input">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-600 group-focus-within/input:text-orange-500 transition-colors">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</div>
<input className="w-full pl-11 pr-4 py-3 bg-[#050505]/50 border border-white/[0.08] rounded-xl outline-none text-sm text-white focus:ring-1 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all placeholder:text-zinc-700 font-light" placeholder="jane@institution.edu" type="email"/>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 ml-1 font-sans">
                    Program Details
                  </label>
<div className="relative group/input">
<textarea className="w-full p-4 bg-[#050505]/50 border border-white/[0.08] rounded-xl outline-none text-sm text-white focus:ring-1 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all placeholder:text-zinc-700 resize-none font-light leading-relaxed" placeholder="Specify assay requirements, sample volume, and target genomes..." rows="4"></textarea>
</div>
</div>

<div className="flex items-center gap-4 pt-2 p-3 rounded-xl border border-white/[0.03] bg-white/[0.01]">
<button className="w-10 h-5.5 bg-[#050505] rounded-full relative transition-colors focus:outline-none border border-white/[0.1] group/toggle hover:border-white/[0.2] shrink-0" type="button">
<div className="absolute left-1 top-[3px] w-3.5 h-3.5 bg-zinc-500 rounded-full transition-transform group-hover/toggle:bg-white"></div>
</button>
<span className="text-xs text-zinc-400 font-light font-sans">
                    Require bilateral Non-Disclosure Agreement (NDA) prior to
                    technical review.
                  </span>
</div>
<button className="w-full py-3.5 mt-4 text-xs font-mono uppercase tracking-widest font-semibold text-black bg-white hover:bg-orange-500 rounded-xl transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(251,146,60,0.5)] flex items-center justify-center gap-3 font-sans" type="button">
                  Transmit Protocol
                  <iconify-icon className="text-lg" icon="solar:plain-3-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#000] pt-24 pb-12 overflow-hidden relative border-t border-white/[0.05]">

<div className="absolute inset-0 bg-grid-white bg-[size:40px_40px] opacity-[0.03] pointer-events-none"></div>
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20 pb-16 border-b border-white/[0.05]">
<div className="md:col-span-4 lg:col-span-4 pr-8">
<a className="flex items-center gap-3 group mb-8" href="#">
<div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.02] border border-white/[0.08]">
<iconify-icon className="text-zinc-400 group-hover:text-orange-500 transition-colors duration-300 text-2xl" icon="solar:dna-linear"></iconify-icon>
</div>
<span className="text-3xl tracking-widest text-white transition-opacity font-instrument-serif font-normal">
                AETHERA
              </span>
</a>
<p className="text-sm text-zinc-500 leading-relaxed font-light mb-10 max-w-sm font-sans">
              A paradigm shift in molecular biology. Establishing advanced
              clinical and computational standards since 2012.
            </p>
<div className="flex gap-3">
<a className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.05] hover:border-white/[0.2] transition-all group/soc" href="#">
<svg aria-hidden="true" className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewbox="0 0 24 24">
<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
</svg>
</a>
<a className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.05] hover:border-white/[0.2] transition-all group/soc" href="#">
<svg aria-hidden="true" className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewbox="0 0 24 24">
<path clip-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fill-rule="evenodd"></path>
</svg>
</a>
<a className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.05] hover:border-white/[0.2] transition-all group/soc" href="#">
<svg aria-hidden="true" className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewbox="0 0 24 24">
<path clip-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill-rule="evenodd"></path>
</svg>
</a>
</div>
</div>
<div className="md:col-span-3 lg:col-span-2 lg:col-start-6">
<h4 className="text-[10px] font-mono text-zinc-600 mb-6 uppercase tracking-widest font-sans">
              Platform
            </h4>
<ul className="flex flex-col gap-4 text-sm text-zinc-400 font-light">
<li>
<a className="hover:text-white transition-colors flex items-center gap-2 group font-sans" href="#">
<span className="w-0 group-hover:w-2 h-px bg-orange-500 transition-all"></span>
                  Home
                </a>
</li>
<li>
<a className="hover:text-white transition-colors flex items-center gap-2 group font-sans" href="#">
<span className="w-0 group-hover:w-2 h-px bg-orange-500 transition-all"></span>
                  Research
                </a>
</li>
<li>
<a className="hover:text-white transition-colors flex items-center gap-2 group font-sans" href="#">
<span className="w-0 group-hover:w-2 h-px bg-orange-500 transition-all"></span>
                  Therapeutics
                </a>
</li>
<li>
<a className="hover:text-white transition-colors flex items-center gap-2 group font-sans" href="#">
<span className="w-0 group-hover:w-2 h-px bg-orange-500 transition-all"></span>
                  Sequencing
                </a>
</li>
<li>
<a className="hover:text-white transition-colors flex items-center gap-2 group font-sans" href="#">
<span className="w-0 group-hover:w-2 h-px bg-orange-500 transition-all"></span>
                  Publications
                </a>
</li>
</ul>
</div>
<div className="md:col-span-3 lg:col-span-3 lg:col-start-8">
<h4 className="text-[10px] font-mono text-zinc-600 mb-6 uppercase tracking-widest font-sans">
              Headquarters
            </h4>
<ul className="flex flex-col gap-5 text-sm text-zinc-400 font-light">
<li className="flex gap-3 items-start group">
<iconify-icon className="text-xl text-zinc-600 mt-0.5 shrink-0 group-hover:text-orange-500 transition-colors" icon="solar:map-point-linear"></iconify-icon>
<span className="font-sans">
                  100 Innovation Way
                  <br/>
                  Boston, MA 02110
                  <br/>
<span className="text-[10px] font-mono text-zinc-600 mt-1 block font-sans">
                    USA
                  </span>
</span>
</li>
<li className="group">
<a className="hover:text-white transition-colors flex items-center gap-3 font-sans" href="tel:6175550198">
<iconify-icon className="text-xl text-zinc-600 group-hover:text-orange-500 transition-colors" icon="solar:phone-linear"></iconify-icon>
                  617-555-0198
                </a>
</li>
<li className="group">
<a className="hover:text-white transition-colors flex items-center gap-3 font-sans" href="mailto:partners@aetherabio.com">
<iconify-icon className="text-xl text-zinc-600 group-hover:text-orange-500 transition-colors" icon="solar:letter-linear"></iconify-icon>
                  partners@aetherabio.com
                </a>
</li>
</ul>
</div>
<div className="md:col-span-2 lg:col-span-2 lg:col-start-11 hidden md:block border-l border-white/[0.05] pl-8">
<h4 className="text-[10px] font-mono text-zinc-600 mb-6 uppercase tracking-widest font-sans">
              Network Status
            </h4>
<ul className="flex flex-col gap-4 text-xs text-zinc-400 font-mono tracking-wide">
<li className="flex items-center gap-2 border border-white/[0.05] bg-white/[0.02] px-2 py-1.5 rounded font-sans">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                SYS: ONLINE
              </li>
<li className="flex items-center gap-2 border border-white/[0.05] bg-white/[0.02] px-2 py-1.5 rounded font-sans">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                LAB: ACTIVE
              </li>
<li className="flex items-center gap-2 border border-white/[0.05] bg-white/[0.02] px-2 py-1.5 rounded font-sans">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(251,146,60,0.8)]"></span>
                SEQ: SYNCING
              </li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-zinc-600 uppercase tracking-widest relative z-10">
<p className="font-sans">
            © 2026 Aethera Biosciences. All Rights Reserved.
          </p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors font-sans" href="#">
              Privacy Policy
            </a>
<a className="hover:text-white transition-colors font-sans" href="#">
              Clinical Terms
            </a>
<a className="hover:text-white transition-colors font-sans" href="#">
              Cookie Data
            </a>
</div>
</div>
</div>

<div className="mt-8 overflow-hidden text-center pointer-events-none select-none relative flex justify-center w-full">
<h1 className="text-[28vw] leading-[0.75] text-transparent bg-clip-text bg-gradient-to-b from-white/[0.04] to-transparent flex items-start w-full justify-center tracking-tighter font-instrument-serif font-normal">
          AETHERA
        </h1>
</div>
</footer>

    </>
  );
}
