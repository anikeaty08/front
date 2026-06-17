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
      

<section className="relative w-full min-h-[90vh] flex items-center bg-[#05070D] overflow-hidden pt-24 pb-[72px]">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,rgba(127,219,255,0.12)_0%,transparent_70%)] blur-[80px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,rgba(184,255,44,0.08)_0%,transparent_70%)] blur-[80px]"></div>
</div>
<div className="container max-w-[1200px] mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 flex flex-col justify-center">

<div className="font-mono text-xs tracking-[0.18em] text-white/65 mb-6 uppercase">
              AFK.LV
            </div>

<div className="flex flex-wrap gap-2 mb-8 overflow-x-auto no-scrollbar">
<div className="h-[32px] px-4 rounded-full bg-[#7FDBFF] border border-[#7FDBFF] text-[#05070D] text-[13px] font-medium flex items-center whitespace-nowrap">
                PC
              </div>
<div className="h-[32px] px-4 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] text-white text-[13px] font-medium flex items-center whitespace-nowrap">
                PS5
              </div>
<div className="h-[32px] px-4 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] text-white text-[13px] font-medium flex items-center whitespace-nowrap">
                Komandas
              </div>
<div className="h-[32px] px-4 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] text-white text-[13px] font-medium flex items-center whitespace-nowrap">
                Turnīri
              </div>
</div>

<h1 className="font-['Space_Grotesk'] text-[40px] lg:text-[64px] font-bold leading-[1.05] text-white tracking-tight mb-8 relative">
<span className="relative inline-block">
                Augstākās raudzes
                <span className="absolute -bottom-2 left-0 w-[56px] h-[3px] bg-[#7FDBFF]/70"></span>
</span>
<br className="hidden lg:block"/>
              geiminga centrs Rīgā.
            </h1>

<p className="font-['Inter'] text-[16px] lg:text-[18px] text-white/72 leading-relaxed max-w-[520px] mb-10">
              Profesionāls aprīkojums, privātas telpas un turnīru atmosfēra.
              Rezervē savu vietu jau šodien.
            </p>

<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
<button className="h-[48px] px-8 rounded-[14px] bg-[#7FDBFF] text-[#050811] font-semibold text-[15px] shadow-[0_4px_12px_rgba(127,219,255,0.15)] hover:opacity-90 transition-opacity flex items-center justify-center">
                Rezervēt laiku
              </button>
<a className="h-[48px] inline-flex items-center gap-2 text-[15px] font-medium text-white/80 hover:text-white transition-colors" href="#">
                Skatīt cenas
                <svg className="lucide lucide-arrow-right opacity-80" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="flex flex-wrap items-center gap-5 pt-6">
<div className="flex items-center gap-2">
<svg className="text-white/70" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="12" rx="2" width="18" x="3" y="4"></rect>
<path d="M12 16v4"></path>
<path d="M8 20h8"></path>
</svg>
<span className="font-mono text-xs text-white/70">240Hz</span>
</div>
<div className="flex items-center gap-2">
<svg className="text-white/70" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12h10"></path>
<path d="M9 4v16"></path>
<path d="M3 9l3 3-3 3"></path>
<path d="M12 9l3 3-3 3"></path>
</svg>
<span className="font-mono text-xs text-white/70">
                  &lt;5ms ping
                </span>
</div>
<div className="flex items-center gap-2">
<svg className="text-white/70" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
<path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
<path d="M4 22h16"></path>
<path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
<path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
<path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
</svg>
<span className="font-mono text-xs text-white/70">
                  Turnīru režīms
                </span>
</div>
</div>
</div>

<div className="lg:col-span-5 w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
<div className="w-full max-w-[420px] rounded-[20px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] backdrop-blur-sm p-6">

<div className="flex items-center gap-3 mb-6 pb-4 border-b border-[rgba(255,255,255,0.05)]">
<div className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-[#7FDBFF]">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
<span className="text-[15px] font-semibold text-white">
                  Šodienas statuss
                </span>
</div>

<div className="space-y-4 mb-6">
<div className="flex justify-between items-center">
<span className="font-sans text-[13px] text-white/60">
                    Pieejamība
                  </span>
<span className="font-mono text-[14px] font-medium text-[#B8FF2C]">
                    28/40 PC
                  </span>
</div>
<div className="flex justify-between items-center">
<span className="font-sans text-[13px] text-white/60">Tīkls</span>
<span className="font-mono text-[14px] font-medium text-white">
                    Fiber 1Gbps
                  </span>
</div>
<div className="flex justify-between items-center">
<span className="font-sans text-[13px] text-white/60">
                    Ping (CS2)
                  </span>
<span className="font-mono text-[14px] font-medium text-white">
                    4ms
                  </span>
</div>
</div>

<div className="pt-4 border-t border-[rgba(255,255,255,0.05)] flex flex-wrap items-center justify-between gap-3">
<div className="flex gap-2">
<button className="px-2.5 py-1 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.05)] text-[11px] text-white/70 hover:text-white transition-colors">
                    PC
                  </button>
<button className="px-2.5 py-1 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.05)] text-[11px] text-white/70 hover:text-white transition-colors">
                    PS5
                  </button>
<button className="px-2.5 py-1 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.05)] text-[11px] text-white/70 hover:text-white transition-colors">
                    Bootcamp
                  </button>
</div>
<button className="text-[12px] font-bold text-[#7FDBFF] hover:text-white uppercase tracking-wide transition-colors whitespace-nowrap">
                  Atvērt rezervāciju
                </button>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="section relative border-t border-[var(--stroke-0)] py-[96px]">

<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
<svg className="w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="blueprint-grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#blueprint-grid)" height="100%" width="100%"></rect>
<path d="M0 120 H 120 Q 160 120 160 160 V 400" fill="none" stroke="white" strokeWidth="1" vector-effect="non-scaling-stroke"></path>
<path d="M 900 0 V 80 Q 900 120 940 120 H 1200" fill="none" stroke="white" strokeWidth="1" vector-effect="non-scaling-stroke"></path>
<circle cx="160" cy="400" fill="white" r="2"></circle>
<circle cx="940" cy="120" fill="white" r="2"></circle>
</svg>
</div>
<div className="container relative z-10">
<div className="max-w-2xl mb-12 lg:mb-16">
<span className="mono text-xs uppercase tracking-wider text-[var(--text-2)] mb-3 block">
            Zonas
          </span>
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-4">
            Mūsu gaming zonas
          </h2>
<p className="text-lg text-[var(--text-1)] leading-relaxed">
            Trīs līmeņu pieredze: no atvērtās arēnas adrenalīna līdz privātām
            bootcamp telpām un turnīru skatuvei.
          </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-7 flex flex-col gap-6">

<div className="relative rounded-[20px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-6 lg:p-8 flex flex-col justify-between min-h-[460px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] overflow-hidden">
<div className="flex justify-between items-start mb-8">
<h3 className="text-white text-[28px] leading-tight tracking-tight" style={{fontFamily: '\'Space Grotesk\', sans-serif', fontWeight: '600'}}>
                  Main Arena
                </h3>
<div className="px-3 py-1 rounded-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] text-[11px] font-medium text-white tracking-wide">
                  30 vietas
                </div>
</div>
<div className="mt-auto">

<div className="space-y-3 mb-8">
<div className="flex items-center gap-3 text-[13px] font-mono">
<svg className="text-[var(--text-2)]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="16" x="4" y="4"></rect>
<rect height="6" rx="1" width="6" x="9" y="9"></rect>
<path d="M15 2v2"></path>
<path d="M15 20v2"></path>
<path d="M2 15h2"></path>
<path d="M2 9h2"></path>
<path d="M20 15h2"></path>
<path d="M20 9h2"></path>
<path d="M9 2v2"></path>
<path d="M9 20v2"></path>
</svg>
<span className="text-[var(--text-2)] w-24">GPU</span>
<span className="text-white">RTX 4070 Ti</span>
</div>
<div className="flex items-center gap-3 text-[13px] font-mono">
<svg className="text-[var(--text-2)]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
<span className="text-[var(--text-2)] w-24">Monitors</span>
<span className="text-white">Zowie 240Hz</span>
</div>
<div className="flex items-center gap-3 text-[13px] font-mono">
<svg className="text-[var(--text-2)]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="7" width="14" x="5" y="2"></rect>
<path d="M12 2v20"></path>
</svg>
<span className="text-[var(--text-2)] w-24">Perifērija</span>
<span className="text-white">Logitech G Pro</span>
</div>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[var(--accent-cyan)] transition-colors" href="#">
                  Ieskatīties
                  <span className="text-[var(--accent-cyan)]">→</span>
</a>
</div>
</div>

<div className="relative rounded-[20px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-6 lg:p-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] overflow-hidden">
<div className="flex justify-between items-start mb-6">
<h3 className="text-xl font-semibold text-white tracking-tight">
                  Bootcamp Rooms
                </h3>
<button className="px-3 py-1.5 rounded-full bg-[var(--accent-cyan)] text-[#050811] text-[11px] font-bold uppercase tracking-wide hover:opacity-90 transition-opacity">
                  Rezervēt grupai
                </button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
<div className="flex items-center gap-2 text-sm text-[var(--text-1)]">
<span className="w-1 h-1 rounded-full bg-[var(--accent-cyan)]"></span>
                  5 PC setup / istaba
                </div>
<div className="flex items-center gap-2 text-sm text-[var(--text-1)]">
<span className="w-1 h-1 rounded-full bg-[var(--accent-cyan)]"></span>
                  Taktiskā tāfele
                </div>
<div className="flex items-center gap-2 text-sm text-[var(--text-1)]">
<span className="w-1 h-1 rounded-full bg-[var(--accent-cyan)]"></span>
                  Privāts klimats
                </div>
<div className="flex items-center gap-2 text-sm text-[var(--text-1)]">
<span className="w-1 h-1 rounded-full bg-[var(--accent-cyan)]"></span>
                  Lounge zona
                </div>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-6">

<div className="relative rounded-[20px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-6 lg:p-8 flex flex-col justify-between h-full min-h-[280px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] overflow-hidden">
<div className="flex justify-between items-start mb-6">
<h3 className="text-xl font-semibold text-white tracking-tight">
                  Console Lounge
                </h3>
<div className="px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-[11px] font-medium text-[var(--text-1)]">
                  4 zonas
                </div>
</div>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-sm text-[var(--text-1)]">
<span className="w-1 h-1 rounded-full bg-[var(--text-2)]"></span>
                  PlayStation 5 Disc Edition
                </li>
<li className="flex items-center gap-2 text-sm text-[var(--text-1)]">
<span className="w-1 h-1 rounded-full bg-[var(--text-2)]"></span>
                  65" Sony Bravia 4K TV
                </li>
</ul>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[var(--accent-cyan)] transition-colors mt-auto" href="#">
                Ieskatīties
                <span className="text-[var(--accent-cyan)]">→</span>
</a>
</div>

<div className="relative rounded-[20px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-6 lg:p-8 flex flex-col justify-between h-full min-h-[280px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] overflow-hidden">
<div className="flex justify-between items-start mb-6">
<h3 className="text-xl font-semibold text-white tracking-tight">
                  Tournament Stage
                </h3>
<div className="px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-[11px] font-medium text-[var(--text-1)]">
                  Events
                </div>
</div>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-sm text-[var(--text-1)]">
<span className="w-1 h-1 rounded-full bg-[var(--text-2)]"></span>
                  Straumēšanas aprīkojums
                </li>
<li className="flex items-center gap-2 text-sm text-[var(--text-1)]">
<span className="w-1 h-1 rounded-full bg-[var(--text-2)]"></span>
                  Lielais ekrāns
                </li>
</ul>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[var(--accent-cyan)] transition-colors mt-auto" href="#">
                Rīkot turnīru
                <span className="text-[var(--accent-cyan)]">→</span>
</a>
</div>
</div>
</div>
</div>
</section>
<section className="section border-t border-[var(--stroke-0)]">
<div className="container">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

<div className="lg:col-span-4">
<div className="sticky top-24">
<span className="mono text-xs uppercase tracking-wider text-[var(--text-2)] mb-3 block">
                PROOF
              </span>
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-4">
                Jauda bez kompromisiem
              </h2>
<p className="text-lg text-[var(--text-1)] leading-relaxed">
                Profesionāla līmeņa optimizācija katrā stacijā maksimālai
                precizitātei.
              </p>
</div>
</div>

<div className="lg:col-span-8 flex flex-col gap-6">

<div className="card p-8 flex flex-col items-center justify-center relative overflow-hidden text-center bg-[var(--surface-0)] border-[var(--stroke-0)] rounded-[20px]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none"></div>
<div className="font-['JetBrains_Mono'] text-[48px] lg:text-[72px] font-medium leading-none tracking-tight text-[var(--accent-lime)] mb-4 relative z-10">
                500+ FPS
              </div>
<div className="font-['Inter'] text-white font-medium text-lg mb-3 tracking-tight relative z-10">
                Counter-Strike 2 Average
              </div>
<p className="text-[var(--text-2)] text-sm max-w-sm mx-auto relative z-10 opacity-55 mb-8">
                Mērīts 1080p Low Settings ar RTX 4070 Ti un i9 procesoru.
              </p>

<div className="flex flex-wrap justify-center gap-3 relative z-10">
<div className="px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] text-white text-xs font-mono">
                  4ms
                </div>
<div className="px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] text-white text-xs font-mono">
                  240Hz
                </div>
<div className="px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] text-white text-xs font-mono">
                  Fiber 1Gbps
                </div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="card p-5 flex flex-col justify-center bg-[var(--surface-0)] border-[var(--stroke-0)] rounded-[18px]">
<span className="font-mono text-lg text-white mb-1">
                  RTX 4070 Ti
                </span>
<span className="text-xs text-[var(--text-2)]">GPU Jauda</span>
</div>
<div className="card p-5 flex flex-col justify-center bg-[var(--surface-0)] border-[var(--stroke-0)] rounded-[18px]">
<span className="font-mono text-lg text-white mb-1">
                  240Hz DyAc⁺
                </span>
<span className="text-xs text-[var(--text-2)]">
                  Monitoru standarts
                </span>
</div>
<div className="card p-5 flex flex-col justify-center bg-[var(--surface-0)] border-[var(--stroke-0)] rounded-[18px]">
<span className="font-mono text-lg text-white mb-1">
                  &lt;5ms Ping
                </span>
<span className="text-xs text-[var(--text-2)]">Tīkla aizture</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="card bg-[var(--surface-0)] border-[var(--stroke-0)] rounded-[18px]">
<div className="p-5 border-b border-[var(--stroke-0)]">
<h3 className="text-sm font-semibold text-white tracking-tight uppercase">
                    PC Arēna
                  </h3>
</div>
<div className="p-5 space-y-3">
<div className="flex justify-between items-center text-sm">
<span className="text-[var(--text-2)] opacity-60 font-['Inter']">
                      Procesors
                    </span>
<span className="font-['JetBrains_Mono'] text-white text-right">
                      i7-13700K
                    </span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-[var(--text-2)] opacity-60 font-['Inter']">
                      Videokarte
                    </span>
<span className="font-['JetBrains_Mono'] text-white text-right">
                      RTX 4070 Ti
                    </span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-[var(--text-2)] opacity-60 font-['Inter']">
                      RAM
                    </span>
<span className="font-['JetBrains_Mono'] text-white text-right">
                      32GB DDR5
                    </span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-[var(--text-2)] opacity-60 font-['Inter']">
                      Displejs
                    </span>
<span className="font-['JetBrains_Mono'] text-white text-right">
                      Zowie 240Hz
                    </span>
</div>
</div>
</div>

<div className="card bg-[var(--surface-0)] border-[var(--stroke-0)] rounded-[18px]">
<div className="p-5 border-b border-[var(--stroke-0)]">
<h3 className="text-sm font-semibold text-white tracking-tight uppercase">
                    Console Lounge
                  </h3>
</div>
<div className="p-5 space-y-3">
<div className="flex justify-between items-center text-sm">
<span className="text-[var(--text-2)] opacity-60 font-['Inter']">
                      Konsole
                    </span>
<span className="font-['JetBrains_Mono'] text-white text-right">
                      PS5 Disc
                    </span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-[var(--text-2)] opacity-60 font-['Inter']">
                      TV
                    </span>
<span className="font-['JetBrains_Mono'] text-white text-right">
                      Sony 65" 4K
                    </span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-[var(--text-2)] opacity-60 font-['Inter']">
                      Tīkls
                    </span>
<span className="font-['JetBrains_Mono'] text-white text-right">
                      Fiber 1Gbps
                    </span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-[var(--text-2)] opacity-60 font-['Inter']">
                      Kontrolieri
                    </span>
<span className="font-['JetBrains_Mono'] text-white text-right">
                      DualSense
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="section border-t border-[var(--stroke-0)]">
<div className="container">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
<div className="lg:col-span-4 sticky top-24">
<span className="mono text-xs uppercase tracking-wider text-[var(--text-2)] mb-3 block">
              LAIKS
            </span>
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-4">
              Tavs laiks AFK
            </h2>
<p className="text-lg text-[var(--text-1)] leading-relaxed">
              Elastīgi laika plāni bez liekām saistībām.
            </p>
</div>
<div className="lg:col-span-8 flex flex-col gap-4">

<div className="group relative bg-[var(--surface-0)] rounded-[20px] flex flex-col sm:flex-row sm:items-center justify-between p-6 gap-4 min-h-[84px] transition-colors hover:bg-[#0E1525]">
<div className="flex flex-col justify-center min-w-[200px]">
<span className="font-['Space_Grotesk'] text-[20px] font-medium text-white leading-tight mb-1">
                  1 Stunda
                </span>
<span className="font-['Inter'] text-[13px] text-[var(--text-1)] opacity-60">
                  Ātrai spēlei vai iesildīšanās mačam.
                </span>
</div>
<div className="hidden sm:block flex-1 mx-6 h-px bg-gradient-to-r from-[var(--stroke-0)] via-[rgba(255,255,255,0.1)] to-[var(--stroke-0)]"></div>
<div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
<span className="font-['JetBrains_Mono'] text-[22px] text-white tracking-tight">
                  4.00€
                </span>
<a className="h-8 px-4 rounded-lg border border-[var(--accent-cyan)] text-[var(--accent-cyan)] text-xs font-medium hover:bg-[var(--accent-cyan)] hover:text-[#050811] transition-all flex items-center gap-1.5 whitespace-nowrap" href="#">
                  Izvēlēties
                  <svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div className="group relative bg-[var(--surface-0)] rounded-[20px] flex flex-col sm:flex-row sm:items-center justify-between p-6 gap-4 min-h-[84px] border border-[rgba(143,214,255,0.2)] shadow-[0_0_24px_-12px_rgba(143,214,255,0.1)]">
<div className="flex flex-col justify-center min-w-[200px]">
<div className="flex items-center gap-3 mb-1">
<span className="font-['Space_Grotesk'] text-[20px] font-medium text-white leading-tight">
                    3 Stundas
                  </span>
<span className="px-2 py-0.5 rounded-full bg-[var(--accent-cyan)] text-[#050811] text-[10px] font-bold uppercase tracking-wide">
                    Populārākais
                  </span>
</div>
<span className="font-['Inter'] text-[13px] text-[var(--text-1)] opacity-60">
                  Optimāls laiks vakara sesijai.
                </span>
</div>
<div className="hidden sm:block flex-1 mx-6 h-px bg-gradient-to-r from-[var(--accent-cyan)]/20 via-[var(--accent-cyan)]/50 to-[var(--accent-cyan)]/20"></div>
<div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
<span className="font-['JetBrains_Mono'] text-[22px] text-white tracking-tight">
                  10.00€
                </span>
<a className="h-8 px-4 rounded-lg bg-[var(--accent-cyan)] text-[#050811] text-xs font-bold hover:opacity-90 transition-all flex items-center gap-1.5 whitespace-nowrap" href="#">
                  Izvēlēties
                  <svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div className="group relative bg-[var(--surface-0)] rounded-[20px] flex flex-col sm:flex-row sm:items-center justify-between p-6 gap-4 min-h-[84px] transition-colors hover:bg-[#0E1525]">
<div className="flex flex-col justify-center min-w-[200px]">
<span className="font-['Space_Grotesk'] text-[20px] font-medium text-white leading-tight mb-1">
                  Nakts
                </span>
<span className="font-['Inter'] text-[13px] text-[var(--text-1)] opacity-60">
                  Neierobežots laiks no 22:00 līdz 08:00.
                </span>
</div>
<div className="hidden sm:block flex-1 mx-6 h-px bg-gradient-to-r from-[var(--stroke-0)] via-[rgba(255,255,255,0.1)] to-[var(--stroke-0)]"></div>
<div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
<span className="font-['JetBrains_Mono'] text-[22px] text-white tracking-tight">
                  15.00€
                </span>
<a className="h-8 px-4 rounded-lg border border-[var(--accent-cyan)] text-[var(--accent-cyan)] text-xs font-medium hover:bg-[var(--accent-cyan)] hover:text-[#050811] transition-all flex items-center gap-1.5 whitespace-nowrap" href="#">
                  Izvēlēties
                  <svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div className="flex flex-wrap items-center gap-4 sm:gap-8 pt-2 pl-2">
<div className="flex items-center gap-2.5">
<div className="w-5 h-5 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center border border-[var(--stroke-0)]">
<svg className="text-[var(--text-2)]" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-xs text-[var(--text-2)] font-medium">
                  Nav slēptu izmaksu
                </span>
</div>
<div className="flex items-center gap-2.5">
<div className="w-5 h-5 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center border border-[var(--stroke-0)]">
<svg className="text-[var(--text-2)]" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-xs text-[var(--text-2)] font-medium">
                  Nav obligātas reģistrācijas
                </span>
</div>
<div className="flex items-center gap-2.5">
<div className="w-5 h-5 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center border border-[var(--stroke-0)]">
<svg className="text-[var(--text-2)]" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-xs text-[var(--text-2)] font-medium">
                  Apmaksa uz vietas
                </span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="section border-t border-[var(--stroke-0)]">
<div className="container">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

<div className="lg:col-span-4 flex flex-col justify-center">
<div className="mb-10">
<span className="mono text-xs uppercase tracking-wider text-[var(--text-2)] mb-3 block">
                Rezervācija
              </span>
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-4">
                Rezervē savu laiku
              </h2>
<p className="text-lg text-[var(--text-1)] leading-relaxed">
                Izvēlies zonu, datumu un laiku. Bez slēptām izmaksām un liekas
                reģistrācijas.
              </p>
</div>
<div className="space-y-6">

<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.03)] border border-[var(--stroke-0)] flex items-center justify-center shrink-0 text-[var(--accent-cyan)]">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
<path d="m22 10-7.5 7.5L13 16"></path>
</svg>
</div>
<div>
<h4 className="text-white font-medium mb-0.5">
                    Ātra apstiprināšana
                  </h4>
<p className="text-sm text-[var(--text-2)]">
                    Rezervācija tiek apstiprināta nekavējoties SMS.
                  </p>
</div>
</div>

<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.03)] border border-[var(--stroke-0)] flex items-center justify-center shrink-0 text-white">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
<path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
</svg>
</div>
<div>
<h4 className="text-white font-medium mb-0.5">
                    Nav priekšapmaksas
                  </h4>
<p className="text-sm text-[var(--text-2)]">
                    Maksā uz vietas ar karti vai skaidrā naudā.
                  </p>
</div>
</div>

<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.03)] border border-[var(--stroke-0)] flex items-center justify-center shrink-0 text-white">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<div>
<h4 className="text-white font-medium mb-0.5">
                    Grupām un pasākumiem
                  </h4>
<p className="text-sm text-[var(--text-2)]">
                    Iespēja rezervēt 5+5 Bootcamp vai visu klubu.
                  </p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-8">
<div className="flex flex-col h-full bg-[var(--surface-0)] border border-[var(--stroke-0)] rounded-[20px] overflow-hidden">
<div className="p-6 lg:p-8 space-y-6 flex-1">

<div>
<label className="block text-xs font-medium uppercase tracking-wider text-[var(--text-2)] mb-3 mono">
                    Izvēlies Zonu
                  </label>
<div className="grid grid-cols-3 gap-1 p-1 bg-[rgba(255,255,255,0.03)] border border-[var(--stroke-0)] rounded-xl">
<button className="h-10 rounded-lg bg-[var(--accent-cyan)] text-[#050811] text-sm font-semibold shadow-sm transition-all">
                      PC Arena
                    </button>
<button className="h-10 rounded-lg text-[var(--text-1)] text-sm font-medium hover:text-white transition-colors">
                      Console Lounge
                    </button>
<button className="h-10 rounded-lg text-[var(--text-1)] text-sm font-medium hover:text-white transition-colors">
                      Bootcamp
                    </button>
</div>
</div>

<div>
<label className="block text-xs font-medium uppercase tracking-wider text-[var(--text-2)] mb-3 mono">
                    Datums
                  </label>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
<button className="h-[72px] rounded-xl bg-[rgba(255,255,255,0.03)] border border-[var(--accent-cyan)] text-white flex flex-col items-center justify-center relative shadow-[0_0_15px_rgba(143,214,255,0.05)]">
<span className="text-[10px] uppercase font-bold text-[var(--accent-cyan)] tracking-wide mb-1">
                        Šodien
                      </span>
<span className="font-mono text-lg font-medium">24. Okt</span>
</button>
<button className="h-[72px] rounded-xl bg-[rgba(255,255,255,0.01)] border border-[var(--stroke-0)] text-[var(--text-2)] hover:border-[rgba(255,255,255,0.1)] hover:text-white transition-colors flex flex-col items-center justify-center">
<span className="text-[10px] uppercase font-bold tracking-wide mb-1">
                        Rīt
                      </span>
<span className="font-mono text-lg font-medium">25. Okt</span>
</button>
<button className="h-[72px] rounded-xl bg-[rgba(255,255,255,0.01)] border border-[var(--stroke-0)] text-[var(--text-2)] hover:border-[rgba(255,255,255,0.1)] hover:text-white transition-colors flex flex-col items-center justify-center">
<span className="text-[10px] uppercase font-bold tracking-wide mb-1">
                        Sest
                      </span>
<span className="font-mono text-lg font-medium">26. Okt</span>
</button>
<button className="h-[72px] rounded-xl bg-[rgba(255,255,255,0.01)] border border-[var(--stroke-0)] text-[var(--text-2)] hover:border-[rgba(255,255,255,0.1)] hover:text-white transition-colors flex flex-col items-center justify-center">
<span className="text-[10px] uppercase font-bold tracking-wide mb-1">
                        Svēt
                      </span>
<span className="font-mono text-lg font-medium">27. Okt</span>
</button>
</div>
</div>

<div>
<label className="block text-xs font-medium uppercase tracking-wider text-[var(--text-2)] mb-3 mono">
                    Laiks
                  </label>
<div className="grid grid-cols-3 sm:grid-cols-6 gap-2">

<button className="h-10 rounded-lg border border-[var(--stroke-0)] bg-white/5 text-white/20 text-xs mono flex items-center justify-center cursor-not-allowed" disabled="">
                      12:00
                    </button>
<button className="h-10 rounded-lg border border-[var(--stroke-0)] bg-white/5 text-white/20 text-xs mono flex items-center justify-center cursor-not-allowed" disabled="">
                      13:00
                    </button>
<button className="h-10 rounded-lg border border-[var(--stroke-0)] bg-white/5 text-white/20 text-xs mono flex items-center justify-center cursor-not-allowed" disabled="">
                      14:00
                    </button>
<button className="h-10 rounded-lg border border-[var(--stroke-0)] bg-[rgba(255,255,255,0.03)] text-[var(--text-1)] hover:bg-[rgba(255,255,255,0.06)] hover:text-white text-xs mono flex items-center justify-center transition-colors">
                      15:00
                    </button>
<button className="h-10 rounded-lg border border-[var(--stroke-0)] bg-[rgba(255,255,255,0.03)] text-[var(--text-1)] hover:bg-[rgba(255,255,255,0.06)] hover:text-white text-xs mono flex items-center justify-center transition-colors">
                      16:00
                    </button>
<button className="h-10 rounded-lg border border-[var(--accent-cyan)] bg-[rgba(143,214,255,0.08)] text-[var(--accent-cyan)] text-xs mono font-bold shadow-[0_0_10px_rgba(143,214,255,0.15)] flex items-center justify-center">
                      17:00
                    </button>

<button className="h-10 rounded-lg border border-[var(--stroke-0)] bg-[rgba(255,255,255,0.03)] text-[var(--text-1)] hover:bg-[rgba(255,255,255,0.06)] hover:text-white text-xs mono flex items-center justify-center transition-colors">
                      18:00
                    </button>
<button className="h-10 rounded-lg border border-[var(--stroke-0)] bg-[rgba(255,255,255,0.03)] text-[var(--text-1)] hover:bg-[rgba(255,255,255,0.06)] hover:text-white text-xs mono flex items-center justify-center transition-colors">
                      19:00
                    </button>
<button className="h-10 rounded-lg border border-[var(--stroke-0)] bg-[rgba(255,255,255,0.03)] text-[var(--text-1)] hover:bg-[rgba(255,255,255,0.06)] hover:text-white text-xs mono flex items-center justify-center transition-colors">
                      20:00
                    </button>
<button className="h-10 rounded-lg border border-[var(--stroke-0)] bg-[rgba(255,255,255,0.03)] text-[var(--text-1)] hover:bg-[rgba(255,255,255,0.06)] hover:text-white text-xs mono flex items-center justify-center transition-colors">
                      21:00
                    </button>
<button className="h-10 rounded-lg border border-[var(--stroke-0)] bg-[rgba(255,255,255,0.03)] text-[var(--text-1)] hover:bg-[rgba(255,255,255,0.06)] hover:text-white text-xs mono flex items-center justify-center transition-colors">
                      22:00
                    </button>
<button className="h-10 rounded-lg border border-[var(--stroke-0)] bg-[rgba(255,255,255,0.03)] text-[var(--text-1)] hover:bg-[rgba(255,255,255,0.06)] hover:text-white text-xs mono flex items-center justify-center transition-colors">
                      23:00
                    </button>

<button className="h-10 rounded-lg border border-[var(--stroke-0)] bg-[rgba(255,255,255,0.03)] text-[var(--text-1)] hover:bg-[rgba(255,255,255,0.06)] hover:text-white text-xs mono flex items-center justify-center transition-colors">
                      00:00
                    </button>
<button className="h-10 rounded-lg border border-[var(--stroke-0)] bg-[rgba(255,255,255,0.03)] text-[var(--text-1)] hover:bg-[rgba(255,255,255,0.06)] hover:text-white text-xs mono flex items-center justify-center transition-colors">
                      01:00
                    </button>
<button className="h-10 rounded-lg border border-[var(--stroke-0)] bg-[rgba(255,255,255,0.03)] text-[var(--text-1)] hover:bg-[rgba(255,255,255,0.06)] hover:text-white text-xs mono flex items-center justify-center transition-colors">
                      02:00
                    </button>
<button className="h-10 rounded-lg border border-[var(--stroke-0)] bg-[rgba(255,255,255,0.03)] text-[var(--text-1)] hover:bg-[rgba(255,255,255,0.06)] hover:text-white text-xs mono flex items-center justify-center transition-colors">
                      03:00
                    </button>
<button className="h-10 rounded-lg border border-[var(--stroke-0)] bg-[rgba(255,255,255,0.03)] text-[var(--text-1)] hover:bg-[rgba(255,255,255,0.06)] hover:text-white text-xs mono flex items-center justify-center transition-colors">
                      04:00
                    </button>
<button className="h-10 rounded-lg border border-[var(--stroke-0)] bg-[rgba(255,255,255,0.03)] text-[var(--text-1)] hover:bg-[rgba(255,255,255,0.06)] hover:text-white text-xs mono flex items-center justify-center transition-colors">
                      05:00
                    </button>
</div>
</div>
</div>

<div className="border-t border-[var(--stroke-0)] bg-[#03050a] p-6 lg:p-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">

<div className="flex flex-wrap items-center gap-6 lg:gap-8 w-full md:w-auto text-center md:text-left justify-center md:justify-start">
<div className="space-y-0.5">
<span className="text-[10px] uppercase tracking-wide text-[var(--text-2)] font-mono block">
                        Izvēlēts
                      </span>
<span className="text-sm font-medium text-white">
                        PC Arena
                      </span>
</div>
<div className="w-px h-8 bg-[var(--stroke-0)] hidden md:block"></div>
<div className="space-y-0.5">
<span className="text-[10px] uppercase tracking-wide text-[var(--text-2)] font-mono block">
                        Laiks
                      </span>
<span className="text-sm font-medium text-white mono">
                        24. Okt, 17:00
                      </span>
</div>
<div className="w-px h-8 bg-[var(--stroke-0)] hidden md:block"></div>
<div className="space-y-0.5">
<span className="text-[10px] uppercase tracking-wide text-[var(--text-2)] font-mono block">
                        Kopā
                      </span>
<span className="text-sm font-medium text-white">
                        3 Stundas
                      </span>
</div>
</div>

<div className="flex flex-col items-end gap-3 w-full md:w-auto">
<div className="flex items-center gap-4 w-full md:w-auto">
<span className="font-['JetBrains_Mono'] text-[22px] text-white tracking-tight">
                        10.00€
                      </span>
<button className="btn btn--primary h-12 px-6 rounded-xl text-sm font-bold flex-1 md:flex-none">
                        Apstiprināt rezervāciju
                      </button>
</div>
<a className="text-[11px] text-[var(--text-1)] hover:text-white transition-colors flex items-center gap-1" href="#">
                      Jautājumi? Sazināties
                      <svg className="text-[var(--accent-cyan)]" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="section border-t border-[var(--stroke-0)]">
<div className="container">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

<div className="lg:col-span-3 sticky top-24">
<div className="mb-8">
<span className="mono text-xs uppercase tracking-wider text-[var(--text-2)] mb-3 block">
                FAQ
              </span>
<h2 className="text-3xl font-semibold text-white tracking-tight leading-tight">
                Biežākie jautājumi
              </h2>
<p className="mt-4 text-sm text-[var(--text-1)] leading-relaxed">
                Atbildes uz populārākajiem jautājumiem par rezervāciju un klubu.
              </p>
</div>
<div className="flex flex-col gap-2">
<button className="h-10 px-4 rounded-full bg-[var(--accent-cyan)] text-[#050811] text-[13px] font-semibold text-left flex items-center justify-between shadow-[0_0_15px_rgba(143,214,255,0.2)]">
                Rezervācijas
              </button>
<button className="h-10 px-4 rounded-full bg-transparent border border-[var(--stroke-0)] text-[var(--text-1)] text-[13px] font-medium hover:text-white hover:border-[rgba(255,255,255,0.1)] text-left transition-colors">
                Noteikumi
              </button>
<button className="h-10 px-4 rounded-full bg-transparent border border-[var(--stroke-0)] text-[var(--text-1)] text-[13px] font-medium hover:text-white hover:border-[rgba(255,255,255,0.1)] text-left transition-colors">
                Turnīri
              </button>
<button className="h-10 px-4 rounded-full bg-transparent border border-[var(--stroke-0)] text-[var(--text-1)] text-[13px] font-medium hover:text-white hover:border-[rgba(255,255,255,0.1)] text-left transition-colors">
                Ēdieni/Dzērieni
              </button>
<button className="h-10 px-4 rounded-full bg-transparent border border-[var(--stroke-0)] text-[var(--text-1)] text-[13px] font-medium hover:text-white hover:border-[rgba(255,255,255,0.1)] text-left transition-colors">
                Grupas
              </button>
</div>
</div>

<div className="lg:col-span-9">
<div className="flex flex-col bg-[var(--surface-0)] border border-[var(--stroke-0)] rounded-[20px] overflow-hidden">

<div className="border-b border-[var(--stroke-0)] bg-[rgba(255,255,255,0.01)]">
<button className="w-full flex items-center gap-4 p-6 text-left">
<div className="w-8 h-8 rounded-full bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] flex items-center justify-center shrink-0 border border-[var(--accent-cyan)]/20">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
<path d="M3 3v5h5"></path>
<path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
<path d="M16 16h5v5"></path>
</svg>
</div>
<span className="text-[16px] font-semibold text-white flex-1 font-['Inter']">
                    Vai es varu mainīt rezervācijas laiku?
                  </span>
<svg className="text-[var(--text-2)] rotate-180 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="px-6 pb-6 pt-0">
<div className="bg-[#050811] border border-[var(--stroke-0)] rounded-[14px] p-5 text-[var(--text-1)] text-[15px] leading-relaxed shadow-inner">
                    Jā, protams. Ja plāni mainās, sazinies ar mums vismaz 2
                    stundas pirms rezervācijas sākuma, un mēs pārcelsim laiku
                    bez papildu maksas. Naudas atmaksa tiek veikta, ja atcelšana
                    notiek vismaz 24h iepriekš.
                  </div>
</div>
</div>

<div className="border-b border-[var(--stroke-0)]">
<button className="w-full flex items-center gap-4 p-6 text-left hover:bg-white/[0.02] transition-colors group">
<div className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.05)] border border-[var(--stroke-0)] text-[var(--text-2)] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
<path d="M7 2v20"></path>
<path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
</svg>
</div>
<span className="text-[16px] font-medium text-[rgba(255,255,255,0.7)] group-hover:text-white flex-1 font-['Inter'] transition-colors">
                    Vai drīkst ienest savus ēdienus un dzērienus?
                  </span>
<svg className="text-[var(--text-2)] group-hover:text-white transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
</div>

<div className="border-b border-[var(--stroke-0)]">
<button className="w-full flex items-center gap-4 p-6 text-left hover:bg-white/[0.02] transition-colors group">
<div className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.05)] border border-[var(--stroke-0)] text-[var(--text-2)] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
</svg>
</div>
<span className="text-[16px] font-medium text-[rgba(255,255,255,0.7)] group-hover:text-white flex-1 font-['Inter'] transition-colors">
                    No cik gadiem var apmeklēt klubu?
                  </span>
<svg className="text-[var(--text-2)] group-hover:text-white transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
</div>

<div className="border-b border-[var(--stroke-0)]">
<button className="w-full flex items-center gap-4 p-6 text-left hover:bg-white/[0.02] transition-colors group">
<div className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.05)] border border-[var(--stroke-0)] text-[var(--text-2)] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<span className="text-[16px] font-medium text-[rgba(255,255,255,0.7)] group-hover:text-white flex-1 font-['Inter'] transition-colors">
                    Kā rezervēt Bootcamp telpu komandai?
                  </span>
<svg className="text-[var(--text-2)] group-hover:text-white transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
</div>

<div>
<button className="w-full flex items-center gap-4 p-6 text-left hover:bg-white/[0.02] transition-colors group">
<div className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.05)] border border-[var(--stroke-0)] text-[var(--text-2)] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
<path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
<path d="M4 22h16"></path>
<path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
<path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
<path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
</svg>
</div>
<span className="text-[16px] font-medium text-[rgba(255,255,255,0.7)] group-hover:text-white flex-1 font-['Inter'] transition-colors">
                    Kā pieteikties turnīriem?
                  </span>
<svg className="text-[var(--text-2)] group-hover:text-white transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="section border-t border-[var(--stroke-0)]">
<div className="container">
<div className="max-w-2xl mb-12">
<span className="mono text-xs uppercase tracking-wider text-[var(--text-2)] mb-3 block">
            Lokācija
          </span>
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-4">
            Apmeklē mūs
          </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
<div className="lg:col-span-5 card p-8 flex flex-col justify-between h-full">
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.03)] border border-[var(--stroke-0)] flex items-center justify-center shrink-0 text-white">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
</div>
<div>
<h4 className="text-white font-medium mb-1">Centrs</h4>
<p className="text-[var(--text-1)] text-sm leading-relaxed">
                    Brīvības iela 155, Barona Kvartāls
                    <br/>
                    Rīga, LV-1012
                  </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.03)] border border-[var(--stroke-0)] flex items-center justify-center shrink-0 text-white">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<div>
<h4 className="text-white font-medium mb-1">Darba laiks</h4>
<div className="space-y-1 text-sm text-[var(--text-1)]">
<div className="flex justify-between gap-8">
<span className="text-[var(--text-2)]">
                        Pirmdiena - Ceturtdiena
                      </span>
<span className="mono">12:00 - 22:00</span>
</div>
<div className="flex justify-between gap-8">
<span className="text-[var(--text-2)]">
                        Piektdiena - Sestdiena
                      </span>
<span className="mono">12:00 - 02:00</span>
</div>
<div className="flex justify-between gap-8">
<span className="text-[var(--text-2)]">Svētdiena</span>
<span className="mono">12:00 - 22:00</span>
</div>
</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.03)] border border-[var(--stroke-0)] flex items-center justify-center shrink-0 text-white">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
</div>
<div>
<h4 className="text-white font-medium mb-1">Saziņa</h4>
<p className="text-[var(--text-1)] text-sm mb-1">
                    +371 20 000 000
                  </p>
<p className="text-[var(--text-1)] text-sm">info@afk.lv</p>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-[var(--stroke-0)]">
<a className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-cyan)] transition-opacity hover:opacity-80" href="#">
                Kā nokļūt
                <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
<div className="lg:col-span-7 card h-[400px] lg:h-auto min-h-[300px] relative overflow-hidden bg-[#070C16] flex items-center justify-center">
<svg className="absolute inset-0 w-full h-full text-[var(--stroke-0)] pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="city-grid-map" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"></path>
</pattern>
</defs>
<rect fill="url(#city-grid-map)" height="100%" width="100%"></rect>
</svg>
<svg className="absolute inset-0 w-full h-full pointer-events-none" preserveaspectratio="xMidYMid slice" viewbox="0 0 600 360" xmlns="http://www.w3.org/2000/svg">
<path d="M 120 280 L 120 180 L 300 180 L 480 180" fill="none" stroke="rgba(255,255,255,0.15)" stroke-dasharray="4 6" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<circle cx="120" cy="280" fill="#FFFFFF" opacity="0.4" r="4"></circle>

<circle cx="300" cy="180" fill="#FFFFFF" opacity="0.6" r="4"></circle>

<circle cx="480" cy="180" fill="var(--accent-cyan)" r="6"></circle>
<circle cx="480" cy="180" fill="var(--accent-cyan)" opacity="0.2" r="14"></circle>
</svg>
<div className="absolute inset-0 w-full h-full pointer-events-none">
<div className="absolute top-[280px] left-[120px] -translate-x-1/2 mt-4">
<span className="px-2 py-1 rounded bg-[var(--surface-0)] border border-[var(--stroke-0)] text-[12px] font-['JetBrains_Mono'] text-[var(--text-2)] shadow-xl backdrop-blur-md">
                  Parking
                </span>
</div>
<div className="absolute top-[180px] left-[300px] -translate-x-1/2 -mt-10">
<span className="px-2 py-1 rounded bg-[var(--surface-0)] border border-[var(--stroke-0)] text-[12px] font-['JetBrains_Mono'] text-white shadow-xl backdrop-blur-md">
                  Ieeja
                </span>
</div>
<div className="absolute top-[180px] left-[480px] -translate-x-1/2 -mt-10">
<span className="px-2 py-1 rounded bg-[var(--surface-0)] border border-[var(--accent-cyan)] text-[12px] font-['JetBrains_Mono'] text-[var(--accent-cyan)] shadow-[0_0_15px_rgba(143,214,255,0.2)] backdrop-blur-md font-bold">
                  AFK.LV
                </span>
</div>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-4 mt-8">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(255,255,255,0.03)] border border-[var(--stroke-0)] text-xs font-medium text-[var(--text-1)]">
<svg className="text-[var(--text-2)]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<path d="M9 17V7h6v10"></path>
</svg>
            Stāvvieta tuvumā
          </div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(255,255,255,0.03)] border border-[var(--stroke-0)] text-xs font-medium text-[var(--text-1)]">
<svg className="text-[var(--text-2)]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
</svg>
            Skaties norādes uz vietas
          </div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(255,255,255,0.03)] border border-[var(--stroke-0)] text-xs font-medium text-[var(--text-1)]">
<svg className="text-[var(--text-2)]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
            Rīgas centrs
          </div>
</div>
</div>
</section>
<footer className="border-t border-[var(--stroke-0)] bg-[var(--bg-0)] pt-[72px] pb-[48px]">
<div className="container max-w-[1200px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

<div className="flex flex-col gap-6">
<div>
<div className="font-bold text-xl tracking-tight text-white select-none mb-2">
                AFK.LV
              </div>
<p className="text-[var(--text-1)] text-sm leading-relaxed">
                High-performance play space in Riga.
              </p>
</div>

<div className="flex gap-3">

<a aria-label="Discord" className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.03)] border border-[var(--stroke-0)] flex items-center justify-center text-[var(--text-1)] hover:text-white hover:bg-[rgba(255,255,255,0.08)] transition-all" href="#">
<svg className="lucide lucide-gamepad-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<line x1="6" x2="10" y1="12" y2="12"></line>
<line x1="8" x2="8" y1="10" y2="14"></line>
<line x1="15" x2="15.01" y1="13" y2="13"></line>
<line x1="18" x2="18.01" y1="11" y2="11"></line>
<rect height="12" rx="2" width="20" x="2" y="6"></rect>
</svg>
</a>

<a aria-label="TikTok" className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.03)] border border-[var(--stroke-0)] flex items-center justify-center text-[var(--text-1)] hover:text-white hover:bg-[rgba(255,255,255,0.08)] transition-all" href="#">
<svg className="lucide lucide-music" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18V5l12-2v13"></path>
<circle cx="6" cy="18" r="3"></circle>
<circle cx="18" cy="16" r="3"></circle>
</svg>
</a>

<a aria-label="Instagram" className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.03)] border border-[var(--stroke-0)] flex items-center justify-center text-[var(--text-1)] hover:text-white hover:bg-[rgba(255,255,255,0.08)] transition-all" href="#">
<svg className="lucide lucide-instagram" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
</div>
</div>

<div className="flex flex-col gap-4">
<h4 className="font-mono text-xs uppercase text-[var(--text-2)] tracking-wider">
              Izvēlne
            </h4>
<div className="flex flex-col gap-2">
<a className="text-sm text-[var(--text-1)] hover:text-white transition-colors" href="#">
                Zonas
              </a>
<a className="text-sm text-[var(--text-1)] hover:text-white transition-colors" href="#">
                Laiks
              </a>
<a className="text-sm text-[var(--text-1)] hover:text-white transition-colors" href="#">
                Rezervācija
              </a>
<a className="text-sm text-[var(--text-1)] hover:text-white transition-colors" href="#">
                Specifikācijas
              </a>
</div>
</div>

<div className="flex flex-col gap-4">
<h4 className="font-mono text-xs uppercase text-[var(--text-2)] tracking-wider">
              Kontakti
            </h4>
<div className="flex flex-col gap-2">
<p className="text-sm text-[var(--text-1)]">
                Brīvības iela 155, Rīga
              </p>
<a className="text-sm text-[var(--text-1)] hover:text-white transition-colors" href="tel:+37120000000">
                +371 20 000 000
              </a>
<a className="text-sm text-[var(--text-1)] hover:text-white transition-colors" href="mailto:info@afk.lv">
                info@afk.lv
              </a>
</div>
</div>
</div>

<div className="border-t border-[var(--stroke-0)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--text-2)]">
<div className="mono">© 2024 AFK Gaming Lounge.</div>
<div className="flex gap-6">
<a className="hover:text-[var(--text-1)] transition-colors" href="#">
              Privātuma politika
            </a>
<a className="hover:text-[var(--text-1)] transition-colors" href="#">
              Lietošanas noteikumi
            </a>
</div>
</div>
</div>
</footer>

    </>
  );
}
