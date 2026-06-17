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
      

<section className="zones w-full max-w-[420px] mx-auto bg-[#050811] border-x border-white/5 relative overflow-hidden pb-8" id="zones">
<style>
        .zones-rail{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;gap:1rem;padding-bottom:2rem;scrollbar-width:none;-ms-overflow-style:none}.zones-rail::-webkit-scrollbar{display:none}.zone-card{scroll-snap-align:center;flex:0 0 85%;background:linear-gradient(180deg,#0B111D 0%,#070C16 100%);border:1px solid rgba(255,255,255,0.08);border-radius:20px;position:relative;transition:transform .3s ease,box-shadow .3s ease}.zone-card:hover{transform:translateY(-2px);box-shadow:0 10px 30px -5px rgba(0,0,0,0.5)}.seg-item{position:relative;background:transparent;border:none;color:#9ca3af;font-weight:500;transition:color .2s;cursor:pointer}.seg-item:hover{color:#fff}.seg-item.active{color:#fff}.seg-item.active::after{content:'';position:absolute;bottom:-1px;left:0;width:100%;height:1px;background:rgba(204,255,0,0.4)}.dna-chip{font-size:9px;padding:2px 6px;border-radius:4px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.05);color:#9ca3af;white-space:nowrap}.spec-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px}.spec-item{display:flex;align-items:center;gap:6px;font-size:10px;color:#d1d5db;background:rgba(255,255,255,0.02);padding:4px 6px;border-radius:6px}.drag-hint{animation:fadeOut 3s forwards 2s}@keyframes fadeOut{to{opacity:0;visibility:hidden}}
      </style>
<header className="zones-hdr px-6 pt-12 pb-8">
<div className="flex flex-col gap-4">
<span className="text-[10px] tracking-[0.2em] text-[#CCFF00] font-medium uppercase opacity-80">
            Environments
          </span>
<h2 className="text-3xl font-medium text-white tracking-tighter leading-none">
            Izvēlies savu
            <br/>
<span className="text-gray-500">kaujas lauku.</span>
</h2>
<p className="text-sm text-gray-400 font-light leading-relaxed max-w-[280px]">
            Četras unikālas zonas. Četri atšķirīgi noskaņojumi.
          </p>
</div>
</header>
<div className="zones-controls px-6 mb-8">
<div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
<button className="px-4 py-2 rounded-full border border-[#CCFF00]/20 bg-[#CCFF00]/5 text-[#CCFF00] text-[10px] font-medium tracking-wide uppercase hover:bg-[#CCFF00]/10 transition-colors whitespace-nowrap">
            Visas
          </button>
<button className="px-4 py-2 rounded-full border border-white/5 text-gray-400 text-[10px] font-medium tracking-wide uppercase hover:text-white hover:border-white/10 transition-colors whitespace-nowrap">
            PC
          </button>
<button className="px-4 py-2 rounded-full border border-white/5 text-gray-400 text-[10px] font-medium tracking-wide uppercase hover:text-white hover:border-white/10 transition-colors whitespace-nowrap">
            Console
          </button>
<button className="px-4 py-2 rounded-full border border-white/5 text-gray-400 text-[10px] font-medium tracking-wide uppercase hover:text-white hover:border-white/10 transition-colors whitespace-nowrap">
            Private
          </button>
</div>
</div>
<div className="relative">
<div className="zones-rail px-4">
<article className="zone-card flex flex-col p-6 shrink-0 group min-w-[85%] snap-center bg-[#0B111D]/50 border border-white/5 rounded-3xl hover:border-[#CCFF00]/30 transition-all duration-500">
<div className="flex justify-between items-start mb-6">
<div className="p-3 rounded-2xl bg-white/5 text-[#CCFF00]">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<rect height="14" rx="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
</div>
<span className="text-[10px] font-medium text-gray-500 uppercase tracking-widest mt-1">
                24 Seats
              </span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">
              Standard Zone
            </h3>
<p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
              Atvērta plānojuma arēna. Augsta enerģija. Ideāla vieta ikdienas
              treniņiem un socializācijai.
            </p>
<div className="mt-auto flex gap-3 text-[10px] text-gray-500 font-mono">
<span>RTX 4070 Ti</span>
<span className="text-[#CCFF00]">•</span>
<span>240Hz</span>
</div>
</article>
<article className="zone-card flex flex-col p-6 shrink-0 group min-w-[85%] snap-center bg-[#0B111D]/50 border border-white/5 rounded-3xl hover:border-[#CCFF00]/30 transition-all duration-500">
<div className="flex justify-between items-start mb-6">
<div className="p-3 rounded-2xl bg-white/5 text-[#CCFF00]">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<span className="text-[10px] font-medium text-gray-500 uppercase tracking-widest mt-1">
                2 Seats
              </span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">
              Duo Zone
            </h3>
<p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
              Privāta saliņa diviem. Sānu pie sānu. Fokusēts klusums un
              sinhronizēta spēle.
            </p>
<div className="mt-auto flex gap-3 text-[10px] text-gray-500 font-mono">
<span>i9 Extreme</span>
<span className="text-[#CCFF00]">•</span>
<span>280Hz</span>
</div>
</article>
<article className="zone-card flex flex-col p-6 shrink-0 group min-w-[85%] snap-center bg-[#0B111D]/50 border border-white/5 rounded-3xl hover:border-[#CCFF00]/30 transition-all duration-500">
<div className="flex justify-between items-start mb-6">
<div className="p-3 rounded-2xl bg-white/5 text-[#CCFF00]">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M14.5 9h2.5a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2.5"></path>
<path d="M8 9V7a4 4 0 0 1 8 0v2"></path>
<path d="M8 13h8"></path>
</svg>
</div>
<span className="text-[10px] font-medium text-gray-500 uppercase tracking-widest mt-1">
                Private Room
              </span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">
              Bootcamp
            </h3>
<p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
              Pilnīga izolācija. Skaņu necaurlaidīga telpa komandas stratēģijai
              un analīzei.
            </p>
<div className="mt-auto flex gap-3 text-[10px] text-gray-500 font-mono">
<span>5x PC Setup</span>
<span className="text-[#CCFF00]">•</span>
<span>Tactical Board</span>
</div>
</article>
<article className="zone-card flex flex-col p-6 shrink-0 group min-w-[85%] snap-center bg-[#0B111D]/50 border border-white/5 rounded-3xl hover:border-[#CCFF00]/30 transition-all duration-500">
<div className="flex justify-between items-start mb-6">
<div className="p-3 rounded-2xl bg-white/5 text-[#CCFF00]">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<rect height="12" rx="2" width="20" x="2" y="6"></rect>
<path d="M12 12h.01"></path>
</svg>
</div>
<span className="text-[10px] font-medium text-gray-500 uppercase tracking-widest mt-1">
                Lounge
              </span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">
              PS5 Lounge
            </h3>
<p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
              4K OLED ekrāni un dziļi dīvāni. Atbrīvota atmosfēra draugu
              kompānijai.
            </p>
<div className="mt-auto flex gap-3 text-[10px] text-gray-500 font-mono">
<span>Sony OLED</span>
<span className="text-[#CCFF00]">•</span>
<span>4 Controllers</span>
</div>
</article>
</div>
</div>
</section>
<section className="hardware w-full max-w-[420px] mx-auto bg-[#050811] border-x border-white/5 relative overflow-hidden pb-8" id="hardware">
<style>
        .hw-glow{animation:hw-breathe 10s infinite ease-in-out}.hw-tile:hover{border-color:rgba(204,255,0,0.3);transform:translateY(-2px);box-shadow:0 10px 30px -10px rgba(0,0,0,0.5)}@keyframes hw-breathe{0%,100%{box-shadow:0 0 0 0 rgba(204,255,0,0);border-color:rgba(255,255,255,0.05)}50%{box-shadow:0 0 15px -5px rgba(204,255,0,0.15);border-color:rgba(204,255,0,0.2)}}
      </style>
<header className="hardware-hdr px-6 py-12">
<div className="flex items-center gap-3 mb-4">
<span className="w-px h-8 bg-[#CCFF00]"></span>
<span className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">
            Specifikācijas
          </span>
</div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-3">
          Instrumenti, nevis rotaļlietas.
        </h2>
<p className="text-sm text-gray-400 font-light leading-relaxed max-w-[320px]">
          Mēs nepaļaujamies uz RGB. Mēs paļaujamies uz kadriem sekundē un tīkla
          stabilitāti.
        </p>
</header>
<div className="hardware-grid grid grid-cols-2 gap-3 px-4 mb-8">
<article className="col-span-2 bg-[#0B111D] border border-white/5 rounded-3xl p-6 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#CCFF00]/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="text-[9px] uppercase tracking-widest text-gray-500 font-medium mb-4">
              Graphics
            </div>
<div>
<h3 className="text-3xl font-medium text-white tracking-tighter mb-1">
                RTX 4070 Ti
              </h3>
<p className="text-xs text-gray-400 font-mono">
                NVIDIA • 12GB GDDR6X
              </p>
</div>
</div>
</article>
<article className="bg-[#0B111D] border border-white/5 rounded-3xl p-5 flex flex-col justify-between h-32">
<div className="text-[9px] uppercase tracking-widest text-gray-500 font-medium">
            Processing
          </div>
<div>
<h3 className="text-lg font-medium text-white tracking-tight">
              i7-13700K
            </h3>
<p className="text-[10px] text-gray-500 mt-1">5.4 GHz Turbo</p>
</div>
</article>
<article className="bg-[#0B111D] border border-white/5 rounded-3xl p-5 flex flex-col justify-between h-32">
<div className="text-[9px] uppercase tracking-widest text-gray-500 font-medium">
            Vision
          </div>
<div>
<h3 className="text-lg font-medium text-white tracking-tight">
              240 Hz
            </h3>
<p className="text-[10px] text-gray-500 mt-1">1440p IPS Panel</p>
</div>
</article>
<article className="col-span-2 bg-[#0B111D] border border-white/5 rounded-3xl p-5 flex items-center justify-between">
<div>
<div className="text-[9px] uppercase tracking-widest text-gray-500 font-medium mb-1">
              Connectivity
            </div>
<div className="text-sm text-white font-medium">
              1Gbps Dedicated Fiber
            </div>
</div>
<div className="w-2 h-2 rounded-full bg-[#CCFF00] shadow-[0_0_8px_#CCFF00]"></div>
</article>
</div>
</section>
<section className="packages bg-[#050811] w-full max-w-[420px] mx-auto border-x border-white/5 relative overflow-hidden flex flex-col" id="packages">
<style>
        .fade-out-delay{animation:fadeOut 2s cubic-bezier(0.4, 0, 0.2, 1) 2s forwards}
      </style>
<div className="packages-inner flex flex-col h-full py-8 px-4 justify-center">
<header className="packages-head mb-8 px-6">
<span className="text-[10px] tracking-[0.2em] text-[#CCFF00] font-medium uppercase opacity-80 block mb-4">
            Sessions
          </span>
<h2 className="text-3xl font-medium text-white tracking-tighter mb-2">
            Tavs laiks.
          </h2>
<p className="text-sm text-gray-400 font-light max-w-[280px]">
            Izvēlies sesijas garumu. Viss aprīkojums iekļauts cenā.
          </p>
</header>
<div aria-label="Horizontal package scroll" className="packages-rail -mx-4 px-4 hide-scrollbar reveal is-visible">
<article className="pkg-card bg-[#0B111D] border border-white/5 rounded-3xl p-6 relative flex flex-col snap-center min-w-[280px] hover:bg-white/5 transition-colors">
<div className="mb-8">
<div className="text-4xl font-medium text-white tracking-tighter mb-1">
                1h
              </div>
<div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                Quick Match
              </div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="text-xs text-gray-300 font-light flex items-center gap-2">
<span className="w-1 h-1 rounded-full bg-gray-600"></span>
                PC Standard Zone
              </li>
<li className="text-xs text-gray-300 font-light flex items-center gap-2">
<span className="w-1 h-1 rounded-full bg-gray-600"></span>
                Guest Access
              </li>
</ul>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
<span className="text-lg font-medium text-white">3.00 €</span>
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14">
<path d="M5 12h14m-7-7 7 7-7 7"></path>
</svg>
</button>
</div>
</article>
<article className="pkg-card bg-[#111620] border border-[#CCFF00]/20 rounded-3xl p-6 relative flex flex-col snap-center min-w-[280px] shadow-[0_0_30px_-10px_rgba(204,255,0,0.1)]">
<div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-[#CCFF00] shadow-[0_0_8px_#CCFF00]"></div>
<div className="mb-8">
<div className="text-4xl font-medium text-white tracking-tighter mb-1">
                3h
              </div>
<div className="text-xs text-[#CCFF00] font-medium uppercase tracking-wide">
                Popular
              </div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="text-xs text-gray-200 font-light flex items-center gap-2">
<span className="w-1 h-1 rounded-full bg-[#CCFF00]"></span>
                Full Library
              </li>
<li className="text-xs text-gray-200 font-light flex items-center gap-2">
<span className="w-1 h-1 rounded-full bg-[#CCFF00]"></span>
                Drink Included
              </li>
</ul>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
<span className="text-lg font-medium text-white">7.50 €</span>
<button className="px-4 py-2 rounded-full bg-[#CCFF00] text-black text-xs font-bold hover:bg-[#b3e600] transition-colors">
                Rezervēt
              </button>
</div>
</article>
<article className="pkg-card bg-[#0B111D] border border-white/5 rounded-3xl p-6 relative flex flex-col snap-center min-w-[280px] hover:bg-white/5 transition-colors">
<div className="mb-8">
<div className="text-4xl font-medium text-white tracking-tighter mb-1">
                5h
              </div>
<div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                Marathon
              </div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="text-xs text-gray-300 font-light flex items-center gap-2">
<span className="w-1 h-1 rounded-full bg-gray-600"></span>
                Bootcamp Access
              </li>
<li className="text-xs text-gray-300 font-light flex items-center gap-2">
<span className="w-1 h-1 rounded-full bg-gray-600"></span>
                Private AC
              </li>
</ul>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
<span className="text-lg font-medium text-white">11.50 €</span>
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14">
<path d="M5 12h14m-7-7 7 7-7 7"></path>
</svg>
</button>
</div>
</article>
</div>
</div>
</section>
<section className="amenities bg-[#050811] w-full max-w-[420px] mx-auto border-x border-white/5 relative overflow-hidden pb-8" id="amenities">
<style>
        .cluster-card{transition:all .3s cubic-bezier(0.4,0,0.2,1)}.cluster-card:hover{border-color:rgba(204,255,0,0.3);box-shadow:0 10px 30px -10px rgba(0,0,0,0.5)}.eco-spotlight{animation:ecoPulse 4s infinite ease-in-out}@keyframes ecoPulse{0%,100%{opacity:0.5}50%{opacity:1}}
      </style>
<div className="amenities-inner w-full px-4 py-8">
<header className="amenities-head mb-8 px-6">
<div className="flex flex-col gap-2">
<span className="text-[10px] tracking-[0.2em] text-[#CCFF00] font-medium uppercase opacity-80">
              Hospitality
            </span>
<h2 className="text-2xl font-medium text-white tracking-tight">
              Vairāk kā dators.
            </h2>
</div>
</header>
<div className="amenities-clusters grid grid-cols-2 gap-3 reveal is-visible">
<div className="col-span-2 bg-[#0B111D] border border-white/5 rounded-3xl p-6 relative overflow-hidden">
<div className="flex items-start justify-between mb-8">
<div className="p-3 bg-white/5 rounded-2xl text-gray-200">
<span className="iconify" data-icon="lucide:armchair" data-width="20"></span>
</div>
<div className="text-right">
<div className="text-2xl font-medium text-white tracking-tight">
                  Komforts
                </div>
<div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">
                  SecretLab • Climate Control
                </div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="text-xs text-gray-400 font-light leading-relaxed">
                Ergonomika, kas ļauj fokusēties stundām ilgi bez noguruma.
              </div>
<div className="text-xs text-gray-400 font-light leading-relaxed text-right">
                21°C konstanta temperatūra un svaiga gaisa plūsma.
              </div>
</div>
</div>
<div className="bg-[#0B111D] border border-white/5 rounded-3xl p-6 flex flex-col justify-between h-32">
<span className="iconify text-gray-500" data-icon="lucide:coffee" data-width="20"></span>
<div>
<div className="text-sm font-medium text-white">Lounge Bar</div>
<div className="text-[10px] text-gray-500 mt-1">
                24/7 Snacks &amp; Drinks
              </div>
</div>
</div>
<div className="bg-[#0B111D] border border-white/5 rounded-3xl p-6 flex flex-col justify-between h-32">
<span className="iconify text-gray-500" data-icon="lucide:lock" data-width="20"></span>
<div>
<div className="text-sm font-medium text-white">Secure Lockers</div>
<div className="text-[10px] text-gray-500 mt-1">
                Personal belongings
              </div>
</div>
</div>
</div>
</div>
</section>
<section className="booking w-full max-w-[420px] mx-auto bg-[#050811] border-x border-white/5 relative overflow-hidden pb-0" id="booking">
<style>
        .zone-radio:checked + div { border-color: rgba(204,255,0,0.5); background-color: rgba(204,255,0,0.03); }
        .zone-radio:checked + div .radio-indicator { background-color: #CCFF00; border-color: #CCFF00; box-shadow: 0 0 10px rgba(204,255,0,0.3); }
        .zone-radio:checked + div .radio-indicator::after { content:''; display:block; width:4px; height:4px; background:black; border-radius:50%; }
        .booking-sticky { box-shadow: 0 -10px 40px -10px rgba(0,0,0,0.8); }
      </style>
<header className="booking-hdr px-6 pt-12 pb-6 text-center">
<h2 className="text-2xl font-medium text-white tracking-tight mb-2">
          Rezervācija
        </h2>
<p className="text-sm text-gray-500 font-light">
          Nav reģistrācijas. Nav priekšapmaksas.
        </p>
</header>
<div className="booking-shell px-4 pb-32">
<div className="booking-panel px-6 mb-24">
<div className="bg-[#0B111D] border border-white/5 rounded-3xl p-2 space-y-1">
<label className="group flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-colors hover:bg-white/5 has-[:checked]:bg-[#CCFF00]/10 has-[:checked]:border-[#CCFF00]/20 border border-transparent">
<input checked="" className="hidden" name="zone" type="radio"/>
<div className="flex items-center gap-4">
<span className="iconify text-gray-500 group-hover:text-white transition-colors" data-icon="lucide:monitor" data-width="18"></span>
<div>
<div className="text-sm font-medium text-white">PC Zone</div>
<div className="text-[10px] text-gray-500 group-hover:text-gray-400">
                    Standard, Duo, Team
                  </div>
</div>
</div>
<div className="w-4 h-4 rounded-full border border-white/20 group-has-[:checked]:border-[#CCFF00] group-has-[:checked]:bg-[#CCFF00]"></div>
</label>
<label className="group flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-colors hover:bg-white/5 has-[:checked]:bg-[#CCFF00]/10 has-[:checked]:border-[#CCFF00]/20 border border-transparent">
<input className="hidden" name="zone" type="radio"/>
<div className="flex items-center gap-4">
<span className="iconify text-gray-500 group-hover:text-white transition-colors" data-icon="lucide:gamepad-2" data-width="18"></span>
<div>
<div className="text-sm font-medium text-white">Console</div>
<div className="text-[10px] text-gray-500 group-hover:text-gray-400">
                    PS5 Lounge Area
                  </div>
</div>
</div>
<div className="w-4 h-4 rounded-full border border-white/20 group-has-[:checked]:border-[#CCFF00] group-has-[:checked]:bg-[#CCFF00]"></div>
</label>
</div>
</div>
</div>
<div className="booking-sticky fixed bottom-0 left-0 w-full bg-[#050811]/90 backdrop-blur-xl border-t border-white/5 p-6 z-50">
<div className="max-w-[420px] mx-auto flex items-center justify-between">
<div className="flex flex-col">
<span className="text-[10px] text-gray-500 uppercase tracking-widest">
              Selected
            </span>
<span className="text-sm font-medium text-white">PC Zone</span>
</div>
<button className="bg-white text-black text-xs font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors">
            Turpināt
          </button>
</div>
</div>
</section>
<section className="location w-full max-w-[420px] mx-auto bg-[#050811] relative overflow-hidden pb-32 pt-12 px-6" id="location">
<div className="border-t border-white/5 pt-12">
<h2 className="text-3xl font-medium text-white tracking-tighter mb-8">
          Rīga, Centrs.
          <br/>
<span className="text-gray-600">Atvērts 24/7.</span>
</h2>
<div className="relative h-48 w-full bg-[#0B111D] rounded-3xl border border-white/5 overflow-hidden mb-8 group">
<svg className="absolute inset-0 w-full h-full opacity-30 group-hover:opacity-40 transition-opacity" viewbox="0 0 400 200">
<path d="M50 0 L50 200 M150 0 L150 200 M250 0 L250 200 M350 0 L350 200" stroke="#374151" strokeWidth="1"></path>
<path d="M0 50 L400 50 M0 150 L400 150" stroke="#374151" strokeWidth="1"></path>
<circle cx="200" cy="100" fill="none" opacity="0.5" r="40" stroke="#CCFF00" strokeWidth="1"></circle>
<circle cx="200" cy="100" fill="#CCFF00" r="4"></circle>
</svg>
<div className="absolute bottom-4 left-4 bg-[#050811]/80 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10">
<div className="text-[10px] text-white font-mono">Brīvības 152</div>
</div>
</div>
<div className="flex gap-4">
<a className="flex-1 py-4 rounded-2xl bg-white text-black text-xs font-semibold text-center hover:bg-gray-200 transition-colors" href="#">
            Karte
          </a>
<a className="flex-1 py-4 rounded-2xl border border-white/10 text-white text-xs font-semibold text-center hover:bg-white/5 transition-colors" href="#">
            Zvanīt
          </a>
</div>
</div>
</section>

    </>
  );
}
