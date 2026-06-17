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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md transition-all duration-300" style={{}}>
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between" style={{}}>
<a className="flex items-center gap-2.5 group" href="#">
<div className="w-8 h-8 bg-gradient-to-br from-orange-600 to-amber-700 rounded-[6px] flex items-center justify-center shrink-0 shadow-lg shadow-orange-900/20">
<svg aria-hidden="true" className="iconify text-white text-lg iconify--solar" data-icon="solar:planet-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 12a8 8 0 1 1-16 0a8 8 0 0 1 16 0" fill="currentColor" opacity=".5"></path><path d="M17.712 5.453c1.047-.193 2.006-.259 2.797-.152c.77.103 1.536.393 1.956 1.064c.446.714.312 1.542-.012 2.258c-.33.728-.918 1.499-1.672 2.268c-1.516 1.547-3.836 3.226-6.597 4.697c-2.763 1.472-5.495 2.484-7.694 2.92c-1.095.217-2.098.299-2.923.201c-.8-.095-1.6-.383-2.032-1.075c-.47-.752-.296-1.63.07-2.379c.375-.768 1.032-1.586 1.872-2.403L4 12.416c0 .219.083.71.168 1.146c.045.23.09.444.123.596c-.652.666-1.098 1.263-1.339 1.756c-.277.567-.208.825-.145.925c.072.116.305.305.937.38c.609.073 1.44.018 2.455-.183c2.02-.4 4.613-1.351 7.28-2.772s4.85-3.015 6.23-4.423c.694-.707 1.15-1.334 1.377-1.836c.233-.515.167-.75.107-.844c-.07-.112-.289-.294-.883-.374c-.542-.072-1.272-.041-2.163.112L16.87 5.656c.338-.101.658-.17.842-.203" fill="currentColor"></path></svg>
</div>
<div className="flex flex-col justify-center leading-none">
<span className="text-[15px] font-bold tracking-tight text-white">ilmu.ai</span>
<span className="text-[10px] font-semibold tracking-[0.2em] text-[#A0A0A0] uppercase">Nusantara</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#">Produk</a>
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#">Solusi</a>
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#">Pembangun</a>
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#">Harga</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#">Log Masuk</a>
<a className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]" href="#">
                    Dapatkan Akses
                </a>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-glow pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">

<div className="animate-fade-up" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 mb-8">
<svg className="lucide lucide-sparkles w-3.5 h-3.5 text-orange-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-xs font-semibold text-orange-300 tracking-wide uppercase">AI untuk Asia Tenggara</span>
</div>
</div>

<h1 className="animate-fade-up md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-medium text-white tracking-tight mb-6" style={{animationDelay: '0.2s'}}>
        Kecerdasan buatan,<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">jiwa Nusantara.</span>
</h1>

<p className="animate-fade-up md:text-xl leading-relaxed text-lg font-light text-gray-400 max-w-2xl mb-10" style={{animationDelay: '0.3s'}}>Temui ejen AI pertama yang dibina dengan kefahaman mendalam tentang bahasa, budaya, dan nuansa perniagaan Asia Tenggara.</p>

<div className="animate-fade-up flex flex-col sm:flex-row items-center gap-4" style={{animationDelay: '0.4s'}}>
<button className="h-12 px-8 rounded-full bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors flex items-center gap-2 group shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)]">
                        Mula membina
                        <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="h-12 px-8 rounded-full border border-white/10 text-gray-300 font-medium text-sm hover:bg-white/5 hover:border-white/20 transition-all flex items-center gap-2">
<svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                        Tonton demo
                    </button>
</div>
</div>
</div>

<div className="animate-fade-up max-w-6xl mt-20 mr-auto ml-auto pr-6 pl-6" style={{animationDelay: '0.6s'}}>
<div className="relative rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden aspect-[16/9] md:aspect-[21/9] shadow-2xl shadow-orange-900/10">

<div className="border-b border-white/5 bg-white/5 p-4 flex items-center gap-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
</div>
<div className="h-2 w-32 bg-white/5 rounded-full"></div>
</div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="grid grid-cols-3 gap-8 md:gap-24 z-10 relative gap-x-8 gap-y-8 items-center">
<style>
    @property --gradient-angle {
      syntax: "<angle>";
      initial-value: 0deg;
      inherits: false;
    }
    @keyframes spin-border {
      to { --gradient-angle: 360deg; }
    }
    .shiny-card-container {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 1rem;
      border: 1.5px solid transparent;
      background: linear-gradient(#0A0A0A, #0A0A0A) padding-box,
                  conic-gradient(from var(--gradient-angle), transparent 25%, var(--shine-color) 50%, transparent 75%) border-box;
      animation: spin-border 4s linear infinite;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
    }
    .shiny-card-container::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 1rem;
      background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03), transparent 70%);
      pointer-events: none;
    }
    .shiny-card-container.primary {
      border-width: 2px;
      background: linear-gradient(#0A0A0A, #0A0A0A) padding-box,
                  conic-gradient(from var(--gradient-angle), transparent 0%, var(--shine-color) 20%, transparent 40%, transparent 60%, var(--shine-secondary) 80%, transparent 100%) border-box;
      box-shadow: 0 0 40px -10px var(--shine-color-dim);
    }
  </style>

<div className="flex flex-col items-center gap-4 group">
<div className="shiny-card-container w-20 h-20" style={{'--shine-color': 'rgba(255,255,255,0.4)'}}>
<svg aria-hidden="true" className="iconify text-3xl text-gray-400 group-hover:text-white transition-colors iconify--solar relative z-10" data-icon="solar:chat-round-line-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
</div>
<span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Bahasa (Input)</span>
</div>

<div className="flex flex-col gap-4 relative gap-x-4 gap-y-4 items-center">
<div className="shiny-card-container primary w-24 h-24 z-20" style={{'--shine-color': '#f97316', '--shine-secondary': '#fbbf24', '--shine-color-dim': 'rgba(249,115,22,0.3)'}}>

<div className="relative z-10 flex items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent blur-md"></div>

<svg aria-hidden="true" className="iconify text-orange-500 animate-pulse iconify--solar text-4xl w-[36px] h-[36px] z-20 relative drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]" data-icon="solar:cpu-bolt-bold-duotone" data-icon-replaced="true" data-icon-set="solar" data-solar="command-bold-duotone" height="36" role="img" strokeWidth="2" style={{color: 'rgb(249, 115, 22)', width: '36px', height: '36px'}} viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M16 16h3a3 3 0 1 1-3 3.001zM5 16l3 .001v3a3 3 0 1 1-3-3" fill="#f97316"></path><path clip-rule="evenodd" d="M19 8h-3V5a3 3 0 1 1 3 3M8 8V5a3 3 0 1 0-3 3z" fill="#f97316" fill-rule="evenodd"></path><path d="M16 8H8v8h8z" fill="#f97316" opacity=".5"></path></svg>
</div>

<div className="absolute top-1/2 -left-32 w-32 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-orange-500/50 hidden md:block"></div>
<div className="-right-32 hidden md:block bg-gradient-to-l from-transparent via-white/10 to-orange-500/50 w-32 h-[1px] absolute top-1/2"></div>
</div>
<span className="text-[10px] text-orange-400 uppercase tracking-wider font-medium">Neural Culture Engine</span>
</div>

<div className="flex flex-col items-center gap-4 group">
<div className="shiny-card-container w-20 h-20" style={{'--shine-color': 'rgba(16, 185, 129, 0.5)'}}>
<svg aria-hidden="true" className="iconify text-3xl text-gray-400 group-hover:text-white transition-colors iconify--solar relative z-10" data-icon="solar:check-circle-line-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeWidth="1.5">
<circle className="" cx="12" cy="12" opacity=".5" r="10"></circle>
<path d="m8.5 12.5l2 2l5-5" strokeLinecap="round" strokeLinejoin="round"></path>
</g>
</svg>
</div>
<span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Localized Action</span>
</div>
</div>

<div className="absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px'}}>

<svg className="absolute inset-0 w-full h-full pointer-events-none" preserveaspectratio="none" viewbox="0 0 1200 600">
<defs>
</defs>


<path d="M 0 100 C 300 100, 400 300, 600 300" fill="none" opacity="0.3" stroke="url(#stream-gradient-input)" strokeWidth="1"></path>
<path d="M 0 100 C 300 100, 400 300, 600 300" fill="none" opacity="0.6" stroke="#f97316" stroke-dasharray="4 800" stroke-dashoffset="804" strokeLinecap="round" strokeWidth="1.5">
<animate attributename="stroke-dashoffset" dur="3.5s" repeatcount="indefinite" values="804;0"></animate>
<animate attributename="opacity" dur="3.5s" repeatcount="indefinite" values="0;0.8;0"></animate>
</path>

<path d="M 0 300 C 200 300, 400 300, 600 300" fill="none" opacity="0.5" stroke="url(#stream-gradient-input)" strokeWidth="1.5"></path>
<path d="M 0 300 C 200 300, 400 300, 600 300" fill="none" stroke="#fb923c" stroke-dasharray="10 600" stroke-dashoffset="610" strokeLinecap="round" strokeWidth="2">
<animate attributename="stroke-dashoffset" dur="2s" repeatcount="indefinite" values="610;0"></animate>
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0;1;0"></animate>
</path>

<path d="M 0 500 C 300 500, 400 300, 600 300" fill="none" opacity="0.3" stroke="url(#stream-gradient-input)" strokeWidth="1"></path>
<path d="M 0 500 C 300 500, 400 300, 600 300" fill="none" opacity="0.6" stroke="#f97316" stroke-dasharray="4 800" stroke-dashoffset="804" strokeLinecap="round" strokeWidth="1.5">
<animate attributename="stroke-dashoffset" begin="1s" dur="4s" repeatcount="indefinite" values="804;0"></animate>
<animate attributename="opacity" begin="1s" dur="4s" repeatcount="indefinite" values="0;0.8;0"></animate>
</path>

<path d="M 600 300 C 800 300, 900 300, 1200 300" fill="none" opacity="0.4" stroke="url(#stream-gradient-output)" strokeWidth="1.5"></path>
<path d="M 600 300 C 800 300, 900 300, 1200 300" fill="none" stroke="#34d399" stroke-dasharray="10 600" stroke-dashoffset="610" strokeLinecap="round" strokeWidth="2">
<animate attributename="stroke-dashoffset" dur="2.5s" repeatcount="indefinite" values="610;-610"></animate>
<animate attributename="opacity" dur="2.5s" repeatcount="indefinite" values="0;1;0"></animate>
</path>

<g transform="translate(600, 300)">

<circle fill="none" r="90" stroke="rgba(255, 255, 255, 0.05)" stroke-dasharray="8 8" strokeWidth="1">
</circle>

<circle fill="none" r="65" stroke="rgba(249, 115, 22, 0.15)" stroke-dasharray="20 40" strokeWidth="1.5">
</circle>

<circle fill="none" r="45" stroke="rgba(249, 115, 22, 0.3)" strokeWidth="1">
<animate attributename="r" dur="4s" repeatcount="indefinite" values="40;50;40"></animate>
<animate attributename="opacity" dur="4s" repeatcount="indefinite" values="0.2;0.5;0.2"></animate>
</circle>
</g>


<circle fill="#fb923c" filter="url(#glow-particles-intense)" r="3">
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0;1;0"></animate>
</circle>

<circle fill="#34d399" filter="url(#glow-particles-intense)" r="3">
<animate attributename="opacity" begin="0.5s" dur="2.5s" repeatcount="indefinite" values="0;1;0"></animate>
</circle>
</svg>

<div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]/80 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/20 via-transparent to-[#0A0A0A]/20 pointer-events-none"></div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 pt-12 pb-12">
<style className="">
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
        }
        .animate-marquee {
            animation: marquee 40s linear infinite;
        }
        .group:hover .animate-marquee {
            animation-play-state: paused;
        }
    </style>
<div className="group text-center max-w-7xl mr-auto ml-auto pr-6 pl-6">
<p className="text-[10px] uppercase font-medium text-gray-500 tracking-widest mb-8">Dipercayai oleh pasukan berwawasan di SEA</p>
<div className="relative flex overflow-hidden w-full" style={{maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'}}>

<div className="flex shrink-0 items-center gap-16 md:gap-24 animate-marquee pr-16 md:pr-24 will-change-transform">

<div className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer">
<svg aria-hidden="true" data-icon="simple-icons:microsoft" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 0v11.408h11.408V0zm12.594 0v11.408H24V0zM0 12.594V24h11.408V12.594zm12.594 0V24H24V12.594z" fill="currentColor"></path></svg>
<span className="text-xl font-semibold tracking-tighter">Microsoft</span>
</div>

<div className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer">
<svg aria-hidden="true" data-icon="simple-icons:google" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133c-1.147 1.147-2.933 2.4-6.053 2.4c-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0C5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36c2.16-2.16 2.84-5.213 2.84-7.667c0-.76-.053-1.467-.173-2.053z" fill="currentColor"></path></svg>
<span className="text-xl font-semibold tracking-tighter">Google</span>
</div>

<div className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer">
<svg aria-hidden="true" className="" data-icon="simple-icons:amazonaws" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.763 10.036q.002.446.088.71c.064.176.144.368.256.576c.04.063.056.127.056.183q.002.12-.152.24l-.503.335a.4.4 0 0 1-.208.072q-.12-.002-.239-.112a2.5 2.5 0 0 1-.287-.375a6 6 0 0 1-.248-.471q-.934 1.101-2.347 1.101c-.67 0-1.205-.191-1.596-.574q-.588-.575-.59-1.533c0-.678.239-1.23.726-1.644c.487-.415 1.133-.623 1.955-.623c.272 0 .551.024.846.064c.296.04.6.104.918.176v-.583q-.001-.909-.375-1.277c-.255-.248-.686-.367-1.3-.367c-.28 0-.568.031-.863.103q-.443.106-.862.272a2 2 0 0 1-.28.104a.5.5 0 0 1-.127.023q-.168.002-.168-.247v-.391c0-.128.016-.224.056-.28a.6.6 0 0 1 .224-.167a4.6 4.6 0 0 1 1.005-.36a4.8 4.8 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647q.66.645.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144a1.8 1.8 0 0 0 .758-.51a1.3 1.3 0 0 0 .272-.512c.047-.191.08-.423.08-.694v-.335a7 7 0 0 0-.735-.136a6 6 0 0 0-.75-.048c-.535 0-.926.104-1.19.32c-.263.215-.39.518-.39.917c0 .375.095.655.295.846c.191.2.47.296.838.296m6.41.862c-.144 0-.24-.024-.304-.08c-.064-.048-.12-.16-.168-.311L7.586 5.55a1.4 1.4 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783q.227-.001.31.08c.065.048.113.16.16.312l1.342 5.284l1.245-5.284q.058-.24.151-.312a.55.55 0 0 1 .32-.08h.638c.152 0 .256.025.32.08c.063.048.12.16.151.312l1.261 5.348l1.381-5.348q.074-.24.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2c0 .04-.009.08-.017.128a1 1 0 0 1-.056.2l-1.923 6.17q-.072.24-.168.311a.5.5 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08c-.063-.056-.119-.16-.15-.32l-1.238-5.148l-1.23 5.14c-.04.16-.087.264-.15.32c-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143c-.399-.096-.71-.2-.918-.32c-.128-.071-.215-.151-.247-.223a.6.6 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247q.072 0 .144.024c.048.016.12.048.2.08q.408.181.878.279c.319.064.63.096.95.096c.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758a.78.78 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.9 1.9 0 0 1-.4-1.158q0-.502.216-.886c.144-.255.335-.479.575-.654c.24-.184.51-.32.83-.415c.32-.096.655-.136 1.006-.136c.175 0 .359.008.535.032c.183.024.35.056.518.088q.24.058.455.127q.216.072.336.144a.7.7 0 0 1 .24.2a.43.43 0 0 1 .071.263v.375q-.002.254-.184.256a.8.8 0 0 1-.303-.096a3.65 3.65 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223s-.375.383-.375.71c0 .224.08.416.24.567c.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767s.367.702.367 1.117c0 .343-.072.655-.207.926a2.2 2.2 0 0 1-.583.703c-.248.2-.543.343-.886.447c-.36.111-.734.167-1.142.167m1.509 3.88c-2.626 1.94-6.442 2.969-9.722 2.969c-4.598 0-8.74-1.7-11.87-4.526c-.247-.223-.024-.527.272-.351c3.384 1.963 7.559 3.153 11.877 3.153c2.914 0 6.114-.607 9.06-1.852c.439-.2.814.287.383.607m1.094-1.246c-.336-.43-2.22-.207-3.074-.103c-.255.032-.295-.192-.063-.36c1.5-1.053 3.967-.75 4.254-.399c.287.36-.08 2.826-1.485 4.007c-.215.184-.423.088-.327-.151c.32-.79 1.03-2.57.695-2.994" fill="currentColor"></path></svg>
<span className="text-xl font-semibold tracking-tighter">AWS</span>
</div>

<div className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer">
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--simple-icons" data-icon="simple-icons:grab" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M23.129 10.863a2.93 2.93 0 0 0-2.079-.872c-.57 0-1.141.212-1.455.421c-.651.434-1.186.904-2.149 2.148v.894c.817-1.064 1.59-1.903 2.177-2.364c.386-.31.933-.501 1.427-.501c1.275 0 2.352 1.077 2.352 2.352v.538c0 .63-.247 1.223-.698 1.668a2.34 2.34 0 0 1-1.654.685c-1.048 0-1.97-.719-2.22-1.701l-.422.51c.307 1.03 1.417 1.789 2.642 1.789a2.93 2.93 0 0 0 2.079-.872c.562-.562.871-1.3.871-2.079v-.538c0-.778-.31-1.517-.871-2.078m-12.8-.274c.406 0 .757.087 1.074.266a5 5 0 0 1 .411-.449c-.335-.256-.903-.415-1.485-.415c-.83 0-1.584.3-2.122.843c-.534.54-.83 1.287-.83 2.107v3.489h.598v-3.49c0-1.385.968-2.352 2.354-2.352m5.678 5.84V12.94c0-1.072-.84-1.913-1.913-1.913c-.5 0-.976.203-1.343.57a1.9 1.9 0 0 0-.57 1.343v.538c0 1.037.877 1.913 1.913 1.913c.285 0 .671-.07.908-.264v-.631c-.232.187-.57.298-.908.298a1.3 1.3 0 0 1-1.315-1.316v-.538a1.3 1.3 0 0 1 1.315-1.314a1.3 1.3 0 0 1 1.316 1.314v3.489zM0 12.596v.193c0 1.036.393 2.003 1.107 2.722a3.76 3.76 0 0 0 2.689 1.112c.82 0 1.548-.186 2.162-.551c.506-.302.73-.607.75-.635V12.22H3.65v.597h2.46v2.434l-.002.002c-.288.288-.972.77-2.312.77a3.17 3.17 0 0 1-2.279-.938a3.25 3.25 0 0 1-.92-2.297v-.193c0-.83.375-1.656 1.026-2.269a3.56 3.56 0 0 1 2.442-.967c.847 0 1.438.129 1.913.416v-.67c-.494-.21-1.085-.305-1.913-.305C1.862 8.8 0 10.538 0 12.595m10.329-.968q.341 0 .571.112c.075-.186.151-.339.262-.525c-.162-.116-.549-.186-.833-.186c-1.09 0-1.913.823-1.913 1.913v3.489h.598v-3.49c0-.774.54-1.314 1.315-1.314m-4.351-.702v-.707c-.541-.29-1.131-.419-1.913-.419c-.799 0-1.555.293-2.132.824c-.577.532-.895 1.233-.895 1.972v.193c0 1.542 1.237 2.796 2.758 2.796c1.237 0 1.745-.405 1.874-.533v-1.794H3.65v.598h1.46v.899l-.005.001c-.187.075-.578.231-1.31.231a2.13 2.13 0 0 1-1.528-.636a2.2 2.2 0 0 1-.632-1.562v-.193c0-1.192 1.113-2.198 2.43-2.198c.91 0 1.45.147 1.913.528m14.105 1.126c.27-.27.623-.424.967-.424a1.3 1.3 0 0 1 1.315 1.314v.538c0 .738-.578 1.316-1.315 1.316c-.357 0-.702-.196-.972-.55a2.15 2.15 0 0 1-.418-1.12l-.484.591c.095.452.33.885.665 1.19c.344.313.774.486 1.209.486a1.915 1.915 0 0 0 1.913-1.913v-.538c0-.499-.202-.977-.57-1.343a1.9 1.9 0 0 0-1.343-.57c-.316 0-.818.114-1.417.652l-.002.002c-.16.16-.536.536-.765.804c-.384.42-.943 1.054-1.42 1.688v.933c.529-.68.833-1.06 1.33-1.634c.445-.519.996-1.15 1.307-1.422m-8.939 1.428c0 .779.31 1.517.872 2.08a2.93 2.93 0 0 0 2.078.87c.33 0 .669-.07.908-.188v-.597a2.5 2.5 0 0 1-.908.188c-1.274 0-2.352-1.077-2.352-2.353v-.538c0-1.275 1.078-2.352 2.352-2.352a2.34 2.34 0 0 1 2.353 2.353v3.488h.598v-3.604a2.98 2.98 0 0 0-.915-2.006a2.92 2.92 0 0 0-2.036-.83c-.778 0-1.516.31-2.078.873a2.93 2.93 0 0 0-.872 2.078zm6.918-2.313a5 5 0 0 1 .596-.631V7.378h-.596zm1.037-.876V7.378h.597V9.88a3.6 3.6 0 0 0-.597.41" fill="currentColor"></path></svg>
<span className="text-xl font-semibold tracking-tighter">Grab</span>
</div>

<div className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer">
<svg aria-hidden="true" data-icon="simple-icons:intel" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.42 7.345v9.18h1.651v-9.18zM0 7.475v1.737h1.737V7.474zm9.78.352v6.053q0 .77.13 1.292q.131.511.44.828c.203.21.475.359.803.451q.502.138 1.255.136h.216v-1.533c-.24 0-.445-.012-.593-.037a.67.67 0 0 1-.39-.173a.7.7 0 0 1-.173-.377a4 4 0 0 1-.037-.606v-2.182h1.193v-1.416h-1.193V7.827zm-3.505 2.312c-.396 0-.76.08-1.082.241q-.49.242-.822.668l-.087.117v-.902H2.658v6.256h1.639v-3.214q.025-.881.433-1.299c.29-.297.642-.445 1.044-.445c.476 0 .841.149 1.082.433c.235.284.359.686.359 1.2v3.324h1.663V12.97c.006-.89-.229-1.595-.686-2.09s-1.1-.742-1.917-.742zm10.065.006a3.25 3.25 0 0 0-2.306.946c-.29.29-.525.637-.692 1.033a3.15 3.15 0 0 0-.254 1.273q0 .679.241 1.274c.161.395.39.742.674 1.032s.637.526 1.045.693c.408.173.86.26 1.342.26c1.397 0 2.262-.637 2.782-1.23l-1.187-.904c-.248.297-.841.699-1.583.699c-.464 0-.847-.105-1.138-.321a1.6 1.6 0 0 1-.593-.872l-.019-.056h4.915v-.587q-.001-.676-.235-1.267a3.4 3.4 0 0 0-.661-1.033a3 3 0 0 0-1.02-.692a3.35 3.35 0 0 0-1.311-.248m-16.297.118v6.256h1.651v-6.256zm16.278 1.286c1.132 0 1.664.797 1.664 1.255l-3.32.006c0-.458.525-1.255 1.656-1.261m7.073 3.814a.606.606 0 0 0-.606.606a.606.606 0 0 0 .606.606a.606.606 0 0 0 .606-.606a.606.606 0 0 0-.606-.606m-.008.105h.002a.5.5 0 0 1 .5.501a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .498-.5zm-.233.155v.699h.13v-.285h.093l.173.285h.136l-.18-.297a.2.2 0 0 0 .118-.056c.03-.03.05-.074.05-.136q0-.1-.063-.154c-.037-.038-.105-.056-.185-.056zm.13.099h.154q.028.001.056.012a.06.06 0 0 1 .037.031c.013.013.012.031.012.056a.1.1 0 0 1-.012.055a.2.2 0 0 1-.037.031q-.028.011-.056.013h-.154Z" fill="currentColor"></path></svg>
<span className="text-xl font-semibold tracking-tighter">Intel</span>
</div>

<div className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer">
<svg aria-hidden="true" data-icon="simple-icons:nvidia" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8.948 8.798v-1.43a7 7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851a3.7 3.7 0 0 1-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6 6 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964a6.5 6.5 0 0 1-1.095-.097v1.325c.3.035.61.062.91.062c3.957 0 6.82-2.023 9.593-4.408c.459.371 2.34 1.263 2.73 1.652c-2.633 2.208-8.772 3.984-12.253 3.984c-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936" fill="currentColor"></path></svg>
<span className="text-xl font-semibold tracking-tighter">Nvidia</span>
</div>

<div className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer">
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--simple-icons" data-icon="simple-icons:shopee" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.941 17.963c.23-1.879-.98-3.077-4.175-4.097c-1.548-.528-2.277-1.22-2.26-2.171c.065-1.056 1.048-1.825 2.352-1.85a5.3 5.3 0 0 1 2.883.89c.116.072.197.06.263-.04c.09-.144.315-.493.39-.62c.051-.08.061-.186-.068-.28c-.185-.137-.704-.415-.983-.532a6.5 6.5 0 0 0-2.511-.514c-1.91.008-3.413 1.215-3.54 2.826q-.122 1.746 1.73 2.827c.263.152 1.68.716 2.244.892c1.774.552 2.695 1.542 2.478 2.697c-.197 1.047-1.299 1.724-2.818 1.744c-1.203-.046-2.287-.537-3.127-1.19l-.141-.11c-.104-.08-.218-.075-.287.03c-.05.077-.376.547-.458.67c-.077.108-.035.168.045.234c.35.293.817.613 1.134.775a6.7 6.7 0 0 0 2.829.727a4.9 4.9 0 0 0 2.075-.354c1.095-.465 1.803-1.394 1.945-2.554M12 1.401c-2.068 0-3.754 1.95-3.833 4.39h7.665C15.751 3.35 14.066 1.4 12 1.4m7.851 22.598l-.08.001l-15.784-.002c-1.074-.04-1.863-.91-1.971-1.991l-.01-.195l-.707-15.526a.46.46 0 0 1 .45-.494h4.975C6.845 2.568 9.16 0 12 0s5.153 2.569 5.275 5.79h4.968a.46.46 0 0 1 .458.483l-.773 15.588l-.007.131c-.094 1.094-.979 1.977-2.07 2.006" fill="currentColor"></path></svg>
<span className="text-xl font-semibold tracking-tighter">Shopee</span>
</div>
</div>

<div aria-hidden="true" className="flex shrink-0 items-center gap-16 md:gap-24 animate-marquee pr-16 md:pr-24 will-change-transform">

<div className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer">
<svg aria-hidden="true" data-icon="simple-icons:microsoft" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 0v11.408h11.408V0zm12.594 0v11.408H24V0zM0 12.594V24h11.408V12.594zm12.594 0V24H24V12.594z" fill="currentColor"></path></svg>
<span className="text-xl font-semibold tracking-tighter">Microsoft</span>
</div>

<div className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer">
<svg aria-hidden="true" data-icon="simple-icons:google" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133c-1.147 1.147-2.933 2.4-6.053 2.4c-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0C5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36c2.16-2.16 2.84-5.213 2.84-7.667c0-.76-.053-1.467-.173-2.053z" fill="currentColor"></path></svg>
<span className="text-xl font-semibold tracking-tighter">Google</span>
</div>

<div className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer">
<svg aria-hidden="true" data-icon="simple-icons:amazonaws" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.763 10.036q.002.446.088.71c.064.176.144.368.256.576c.04.063.056.127.056.183q.002.12-.152.24l-.503.335a.4.4 0 0 1-.208.072q-.12-.002-.239-.112a2.5 2.5 0 0 1-.287-.375a6 6 0 0 1-.248-.471q-.934 1.101-2.347 1.101c-.67 0-1.205-.191-1.596-.574q-.588-.575-.59-1.533c0-.678.239-1.23.726-1.644c.487-.415 1.133-.623 1.955-.623c.272 0 .551.024.846.064c.296.04.6.104.918.176v-.583q-.001-.909-.375-1.277c-.255-.248-.686-.367-1.3-.367c-.28 0-.568.031-.863.103q-.443.106-.862.272a2 2 0 0 1-.28.104a.5.5 0 0 1-.127.023q-.168.002-.168-.247v-.391c0-.128.016-.224.056-.28a.6.6 0 0 1 .224-.167a4.6 4.6 0 0 1 1.005-.36a4.8 4.8 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647q.66.645.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144a1.8 1.8 0 0 0 .758-.51a1.3 1.3 0 0 0 .272-.512c.047-.191.08-.423.08-.694v-.335a7 7 0 0 0-.735-.136a6 6 0 0 0-.75-.048c-.535 0-.926.104-1.19.32c-.263.215-.39.518-.39.917c0 .375.095.655.295.846c.191.2.47.296.838.296m6.41.862c-.144 0-.24-.024-.304-.08c-.064-.048-.12-.16-.168-.311L7.586 5.55a1.4 1.4 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783q.227-.001.31.08c.065.048.113.16.16.312l1.342 5.284l1.245-5.284q.058-.24.151-.312a.55.55 0 0 1 .32-.08h.638c.152 0 .256.025.32.08c.063.048.12.16.151.312l1.261 5.348l1.381-5.348q.074-.24.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2c0 .04-.009.08-.017.128a1 1 0 0 1-.056.2l-1.923 6.17q-.072.24-.168.311a.5.5 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08c-.063-.056-.119-.16-.15-.32l-1.238-5.148l-1.23 5.14c-.04.16-.087.264-.15.32c-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143c-.399-.096-.71-.2-.918-.32c-.128-.071-.215-.151-.247-.223a.6.6 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247q.072 0 .144.024c.048.016.12.048.2.08q.408.181.878.279c.319.064.63.096.95.096c.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758a.78.78 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.9 1.9 0 0 1-.4-1.158q0-.502.216-.886c.144-.255.335-.479.575-.654c.24-.184.51-.32.83-.415c.32-.096.655-.136 1.006-.136c.175 0 .359.008.535.032c.183.024.35.056.518.088q.24.058.455.127q.216.072.336.144a.7.7 0 0 1 .24.2a.43.43 0 0 1 .071.263v.375q-.002.254-.184.256a.8.8 0 0 1-.303-.096a3.65 3.65 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223s-.375.383-.375.71c0 .224.08.416.24.567c.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767s.367.702.367 1.117c0 .343-.072.655-.207.926a2.2 2.2 0 0 1-.583.703c-.248.2-.543.343-.886.447c-.36.111-.734.167-1.142.167m1.509 3.88c-2.626 1.94-6.442 2.969-9.722 2.969c-4.598 0-8.74-1.7-11.87-4.526c-.247-.223-.024-.527.272-.351c3.384 1.963 7.559 3.153 11.877 3.153c2.914 0 6.114-.607 9.06-1.852c.439-.2.814.287.383.607m1.094-1.246c-.336-.43-2.22-.207-3.074-.103c-.255.032-.295-.192-.063-.36c1.5-1.053 3.967-.75 4.254-.399c.287.36-.08 2.826-1.485 4.007c-.215.184-.423.088-.327-.151c.32-.79 1.03-2.57.695-2.994" fill="currentColor"></path></svg>
<span className="text-xl font-semibold tracking-tighter">AWS</span>
</div>

<div className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer">
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--simple-icons" data-icon="simple-icons:grab" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M23.129 10.863a2.93 2.93 0 0 0-2.079-.872c-.57 0-1.141.212-1.455.421c-.651.434-1.186.904-2.149 2.148v.894c.817-1.064 1.59-1.903 2.177-2.364c.386-.31.933-.501 1.427-.501c1.275 0 2.352 1.077 2.352 2.352v.538c0 .63-.247 1.223-.698 1.668a2.34 2.34 0 0 1-1.654.685c-1.048 0-1.97-.719-2.22-1.701l-.422.51c.307 1.03 1.417 1.789 2.642 1.789a2.93 2.93 0 0 0 2.079-.872c.562-.562.871-1.3.871-2.079v-.538c0-.778-.31-1.517-.871-2.078m-12.8-.274c.406 0 .757.087 1.074.266a5 5 0 0 1 .411-.449c-.335-.256-.903-.415-1.485-.415c-.83 0-1.584.3-2.122.843c-.534.54-.83 1.287-.83 2.107v3.489h.598v-3.49c0-1.385.968-2.352 2.354-2.352m5.678 5.84V12.94c0-1.072-.84-1.913-1.913-1.913c-.5 0-.976.203-1.343.57a1.9 1.9 0 0 0-.57 1.343v.538c0 1.037.877 1.913 1.913 1.913c.285 0 .671-.07.908-.264v-.631c-.232.187-.57.298-.908.298a1.3 1.3 0 0 1-1.315-1.316v-.538a1.3 1.3 0 0 1 1.315-1.314a1.3 1.3 0 0 1 1.316 1.314v3.489zM0 12.596v.193c0 1.036.393 2.003 1.107 2.722a3.76 3.76 0 0 0 2.689 1.112c.82 0 1.548-.186 2.162-.551c.506-.302.73-.607.75-.635V12.22H3.65v.597h2.46v2.434l-.002.002c-.288.288-.972.77-2.312.77a3.17 3.17 0 0 1-2.279-.938a3.25 3.25 0 0 1-.92-2.297v-.193c0-.83.375-1.656 1.026-2.269a3.56 3.56 0 0 1 2.442-.967c.847 0 1.438.129 1.913.416v-.67c-.494-.21-1.085-.305-1.913-.305C1.862 8.8 0 10.538 0 12.595m10.329-.968q.341 0 .571.112c.075-.186.151-.339.262-.525c-.162-.116-.549-.186-.833-.186c-1.09 0-1.913.823-1.913 1.913v3.489h.598v-3.49c0-.774.54-1.314 1.315-1.314m-4.351-.702v-.707c-.541-.29-1.131-.419-1.913-.419c-.799 0-1.555.293-2.132.824c-.577.532-.895 1.233-.895 1.972v.193c0 1.542 1.237 2.796 2.758 2.796c1.237 0 1.745-.405 1.874-.533v-1.794H3.65v.598h1.46v.899l-.005.001c-.187.075-.578.231-1.31.231a2.13 2.13 0 0 1-1.528-.636a2.2 2.2 0 0 1-.632-1.562v-.193c0-1.192 1.113-2.198 2.43-2.198c.91 0 1.45.147 1.913.528m14.105 1.126c.27-.27.623-.424.967-.424a1.3 1.3 0 0 1 1.315 1.314v.538c0 .738-.578 1.316-1.315 1.316c-.357 0-.702-.196-.972-.55a2.15 2.15 0 0 1-.418-1.12l-.484.591c.095.452.33.885.665 1.19c.344.313.774.486 1.209.486a1.915 1.915 0 0 0 1.913-1.913v-.538c0-.499-.202-.977-.57-1.343a1.9 1.9 0 0 0-1.343-.57c-.316 0-.818.114-1.417.652l-.002.002c-.16.16-.536.536-.765.804c-.384.42-.943 1.054-1.42 1.688v.933c.529-.68.833-1.06 1.33-1.634c.445-.519.996-1.15 1.307-1.422m-8.939 1.428c0 .779.31 1.517.872 2.08a2.93 2.93 0 0 0 2.078.87c.33 0 .669-.07.908-.188v-.597a2.5 2.5 0 0 1-.908.188c-1.274 0-2.352-1.077-2.352-2.353v-.538c0-1.275 1.078-2.352 2.352-2.352a2.34 2.34 0 0 1 2.353 2.353v3.488h.598v-3.604a2.98 2.98 0 0 0-.915-2.006a2.92 2.92 0 0 0-2.036-.83c-.778 0-1.516.31-2.078.873a2.93 2.93 0 0 0-.872 2.078zm6.918-2.313a5 5 0 0 1 .596-.631V7.378h-.596zm1.037-.876V7.378h.597V9.88a3.6 3.6 0 0 0-.597.41" fill="currentColor"></path></svg>
<span className="text-xl font-semibold tracking-tighter">Grab</span>
</div>

<div className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer">
<svg aria-hidden="true" data-icon="simple-icons:intel" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.42 7.345v9.18h1.651v-9.18zM0 7.475v1.737h1.737V7.474zm9.78.352v6.053q0 .77.13 1.292q.131.511.44.828c.203.21.475.359.803.451q.502.138 1.255.136h.216v-1.533c-.24 0-.445-.012-.593-.037a.67.67 0 0 1-.39-.173a.7.7 0 0 1-.173-.377a4 4 0 0 1-.037-.606v-2.182h1.193v-1.416h-1.193V7.827zm-3.505 2.312c-.396 0-.76.08-1.082.241q-.49.242-.822.668l-.087.117v-.902H2.658v6.256h1.639v-3.214q.025-.881.433-1.299c.29-.297.642-.445 1.044-.445c.476 0 .841.149 1.082.433c.235.284.359.686.359 1.2v3.324h1.663V12.97c.006-.89-.229-1.595-.686-2.09s-1.1-.742-1.917-.742zm10.065.006a3.25 3.25 0 0 0-2.306.946c-.29.29-.525.637-.692 1.033a3.15 3.15 0 0 0-.254 1.273q0 .679.241 1.274c.161.395.39.742.674 1.032s.637.526 1.045.693c.408.173.86.26 1.342.26c1.397 0 2.262-.637 2.782-1.23l-1.187-.904c-.248.297-.841.699-1.583.699c-.464 0-.847-.105-1.138-.321a1.6 1.6 0 0 1-.593-.872l-.019-.056h4.915v-.587q-.001-.676-.235-1.267a3.4 3.4 0 0 0-.661-1.033a3 3 0 0 0-1.02-.692a3.35 3.35 0 0 0-1.311-.248m-16.297.118v6.256h1.651v-6.256zm16.278 1.286c1.132 0 1.664.797 1.664 1.255l-3.32.006c0-.458.525-1.255 1.656-1.261m7.073 3.814a.606.606 0 0 0-.606.606a.606.606 0 0 0 .606.606a.606.606 0 0 0 .606-.606a.606.606 0 0 0-.606-.606m-.008.105h.002a.5.5 0 0 1 .5.501a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .498-.5zm-.233.155v.699h.13v-.285h.093l.173.285h.136l-.18-.297a.2.2 0 0 0 .118-.056c.03-.03.05-.074.05-.136q0-.1-.063-.154c-.037-.038-.105-.056-.185-.056zm.13.099h.154q.028.001.056.012a.06.06 0 0 1 .037.031c.013.013.012.031.012.056a.1.1 0 0 1-.012.055a.2.2 0 0 1-.037.031q-.028.011-.056.013h-.154Z" fill="currentColor"></path></svg>
<span className="text-xl font-semibold tracking-tighter">Intel</span>
</div>

<div className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer">
<svg aria-hidden="true" data-icon="simple-icons:nvidia" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8.948 8.798v-1.43a7 7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851a3.7 3.7 0 0 1-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6 6 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964a6.5 6.5 0 0 1-1.095-.097v1.325c.3.035.61.062.91.062c3.957 0 6.82-2.023 9.593-4.408c.459.371 2.34 1.263 2.73 1.652c-2.633 2.208-8.772 3.984-12.253 3.984c-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936" fill="currentColor"></path></svg>
<span className="text-xl font-semibold tracking-tighter">Nvidia</span>
</div>

<div className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer">
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--simple-icons" data-icon="simple-icons:shopee" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.941 17.963c.23-1.879-.98-3.077-4.175-4.097c-1.548-.528-2.277-1.22-2.26-2.171c.065-1.056 1.048-1.825 2.352-1.85a5.3 5.3 0 0 1 2.883.89c.116.072.197.06.263-.04c.09-.144.315-.493.39-.62c.051-.08.061-.186-.068-.28c-.185-.137-.704-.415-.983-.532a6.5 6.5 0 0 0-2.511-.514c-1.91.008-3.413 1.215-3.54 2.826q-.122 1.746 1.73 2.827c.263.152 1.68.716 2.244.892c1.774.552 2.695 1.542 2.478 2.697c-.197 1.047-1.299 1.724-2.818 1.744c-1.203-.046-2.287-.537-3.127-1.19l-.141-.11c-.104-.08-.218-.075-.287.03c-.05.077-.376.547-.458.67c-.077.108-.035.168.045.234c.35.293.817.613 1.134.775a6.7 6.7 0 0 0 2.829.727a4.9 4.9 0 0 0 2.075-.354c1.095-.465 1.803-1.394 1.945-2.554M12 1.401c-2.068 0-3.754 1.95-3.833 4.39h7.665C15.751 3.35 14.066 1.4 12 1.4m7.851 22.598l-.08.001l-15.784-.002c-1.074-.04-1.863-.91-1.971-1.991l-.01-.195l-.707-15.526a.46.46 0 0 1 .45-.494h4.975C6.845 2.568 9.16 0 12 0s5.153 2.569 5.275 5.79h4.968a.46.46 0 0 1 .458.483l-.773 15.588l-.007.131c-.094 1.094-.979 1.977-2.07 2.006" fill="currentColor"></path></svg>
<span className="text-xl font-semibold tracking-tighter">Shopee</span>
</div>
</div>
</div>
</div>
</section>

<section className="pt-32 pb-32 relative" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<h2 className="md:text-5xl text-3xl font-medium text-white tracking-tight mb-6">Dibina untuk rantau ini. Sedia untuk dunia.</h2>
<p className="text-lg font-light text-gray-400 max-w-2xl">Ilmu.ai bukan sekadar penterjemah. Ia memahami ‘Manglish’, peralihan kod, dan beza halus antara ‘can’ dan ‘can lah’.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full group-hover:bg-orange-500/20 transition-all duration-700"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<svg aria-hidden="true" className="iconify text-xl text-white iconify--solar" data-icon="solar:graph-up-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" fill="currentColor" opacity=".5"></path><path d="M14.5 10.75a.75.75 0 0 1 0-1.5H17a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-.69l-2.013 2.013a1.75 1.75 0 0 1-2.474 0l-1.586-1.586a.25.25 0 0 0-.354 0L7.53 14.53a.75.75 0 0 1-1.06-1.06l2.293-2.293a1.75 1.75 0 0 1 2.474 0l1.586 1.586a.25.25 0 0 0 .354 0l2.012-2.013z" fill="currentColor"></path></svg>
</div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Prestasi Tinggi</h3>
<div className="flex gap-12 mt-6">
<div className="">
<span className="block text-4xl font-bold text-white tracking-tight">100+</span>
<span className="uppercase block text-xs text-gray-500 tracking-wider mt-1">Dialek</span>
</div>
<div className="">
<span className="block text-4xl font-bold text-white tracking-tight">99.9%</span>
<span className="uppercase block text-xs text-gray-500 tracking-wider mt-1">Ketepatan</span>
</div>
<div className="">
<span className="block text-4xl font-bold text-white tracking-tight">2x</span>
<span className="uppercase block text-xs text-gray-500 tracking-wider mt-1">Kelajuan</span>
</div>
</div>
</div>
<div className="flex gap-3 mt-8">
<div className="h-1.5 w-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"></div>
<div className="h-1.5 w-8 bg-white/20 rounded-full"></div>
<div className="h-1.5 w-16 bg-white/10 rounded-full"></div>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors md:row-span-2">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-orange-950/20 to-transparent"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<svg aria-hidden="true" className="iconify text-xl text-white iconify--solar" data-icon="solar:shield-keyhole-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991z" fill="currentColor" opacity=".5"></path><path d="M13.5 15a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1.401A2.999 2.999 0 0 1 12 8a3 3 0 0 1 1.5 5.599z" fill="currentColor"></path></svg>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">Kedaulatan Data</h3>
<p className="text-sm font-light text-gray-400 mb-8">Data anda kekal dalam rantau ini. Mematuhi peraturan PDPA tempatan di Malaysia, Indonesia, dan Singapura.</p>
<div className="mt-auto space-y-3">
<div className="p-3 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-300">
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-check-circle w-3 h-3 text-green-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="font-medium">Patuh Bank Negara</span>
</div>
<div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
<div className="bg-green-400 h-full w-full"></div>
</div>
</div>
<div className="p-3 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-300">
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-check-circle w-3 h-3 text-green-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="font-medium">Diluluskan OJK</span>
</div>
<div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
<div className="bg-green-400 h-full w-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<svg aria-hidden="true" className="iconify text-xl text-white iconify--solar" data-icon="solar:chat-square-check-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m13.629 20.472l-.542.916c-.483.816-1.69.816-2.174 0l-.542-.916c-.42-.71-.63-1.066-.968-1.262c-.338-.197-.763-.204-1.613-.219c-1.256-.021-2.043-.098-2.703-.372a5 5 0 0 1-2.706-2.706C2 14.995 2 13.83 2 11.5v-1c0-3.273 0-4.91.737-6.112a5 5 0 0 1 1.65-1.651C5.59 2 7.228 2 10.5 2h3c3.273 0 4.91 0 6.113.737a5 5 0 0 1 1.65 1.65C22 5.59 22 7.228 22 10.5v1c0 2.33 0 3.495-.38 4.413a5 5 0 0 1-2.707 2.706c-.66.274-1.447.35-2.703.372c-.85.015-1.275.022-1.613.219c-.338.196-.548.551-.968 1.262" fill="currentColor" opacity=".5"></path><path d="M15.53 9.53a.75.75 0 0 0-1.06-1.06l-3.48 3.48l-1.47-1.411a.75.75 0 1 0-1.04 1.082l2 1.92a.75.75 0 0 0 1.05-.01z" fill="currentColor"></path></svg>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">Master "Bahasa"</h3>
<p className="text-sm font-light text-gray-400">Pengesanan pertukaran kod masa nyata antara bahasa Inggeris, Melayu, Cina dan dialek Tamil.</p>
</div>
</div>

<div className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<svg aria-hidden="true" className="iconify text-xl text-white iconify--solar" data-icon="solar:banknote-2-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8.506 10.714c0-.92.755-1.666 1.686-1.666c.932 0 1.687.746 1.687 1.666s-.755 1.667-1.687 1.667a1.677 1.677 0 0 1-1.686-1.667" fill="currentColor"></path><path clip-rule="evenodd" d="M2 10.714c0-2.693 0-4.04.847-4.877S5.057 5 7.783 5h4.82c2.725 0 4.088 0 4.935.837s.847 2.184.847 4.877c0 2.694 0 4.041-.847 4.878s-2.21.837-4.936.837H7.783c-2.726 0-4.09 0-4.936-.837S2 13.408 2 10.714m5.06 0c0-1.71 1.402-3.095 3.132-3.095s3.133 1.386 3.133 3.095s-1.402 3.096-3.133 3.096c-1.73 0-3.132-1.386-3.132-3.096M4.168 12.62a.72.72 0 0 0 .723.715c.4 0 .723-.32.723-.715V8.81a.72.72 0 0 0-.723-.714a.72.72 0 0 0-.723.715zm11.326.715c-.4 0-.723-.32-.723-.715V8.81c0-.394.323-.714.723-.714s.722.32.722.715v3.81a.72.72 0 0 1-.722.714" fill="currentColor" fill-rule="evenodd"></path><path className="" d="M4.065 16.225q.02.225.048.434c.117.857.366 1.579.946 2.152q.124.123.257.226c.566.514 1.266.742 2.09.851c.836.111 1.898.111 3.216.111h4.925c1.318 0 2.38 0 3.217-.111c.867-.115 1.598-.362 2.178-.935s.83-1.295.946-2.152c.112-.826.112-1.876.112-3.178v-.105c0-1.302 0-2.352-.112-3.178c-.117-.857-.366-1.579-.946-2.152a3 3 0 0 0-.257-.226c-.566-.514-1.266-.742-2.09-.851a9 9 0 0 0-.41-.045c.2.834.2 1.984.2 3.648c0 2.694 0 4.04-.847 4.878c-.846.836-2.21.836-4.936.836H7.783c-1.702 0-2.872 0-3.718-.203" fill="currentColor" opacity=".5"></path></svg>
</div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Kos Operasi</h3>
<p className="text-sm font-light text-gray-400">Automasikan semakan manual dan khidmat pelanggan dalam bahasa tempatan.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-[#080808]" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
<h2 className="md:text-5xl text-3xl font-medium text-white tracking-tight max-w-lg">Dibelakang infrastruktur, <span className="text-gradient-orange">ada perbualan.</span></h2>
<p className="text-xs text-gray-500 font-mono uppercase tracking-widest">Enjin Budaya Neural</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 group relative gap-x-8 gap-y-8">
<style>
                    @keyframes flow-beam {
                        0% { transform: translateX(-100%); opacity: 0; }
                        20% { opacity: 1; }
                        80% { opacity: 1; }
                        100% { transform: translateX(200%); opacity: 0; }
                    }
                    .animate-flow-beam {
                        animation: flow-beam 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                    }
                    .glass-panel {
                        background: rgba(255, 255, 255, 0.02);
                        backdrop-filter: blur(8px);
                        border: 1px solid rgba(255, 255, 255, 0.08);
                    }
                    .glass-panel:hover {
                        background: rgba(255, 255, 255, 0.04);
                        border-color: rgba(255, 255, 255, 0.15);
                    }
                </style>

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-white/5 z-0 overflow-hidden rounded-full">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400 to-transparent w-1/2 h-full blur-[3px] animate-flow-beam shadow-[0_0_15px_rgba(251,146,60,0.6)]"></div>

<div className="absolute top-1/2 left-[12.5%] -translate-y-1/2 w-1 h-1 bg-gray-800 rounded-full z-10"></div>
<div className="absolute top-1/2 left-[37.5%] -translate-y-1/2 w-1 h-1 bg-gray-800 rounded-full z-10"></div>
<div className="absolute top-1/2 left-[62.5%] -translate-y-1/2 w-1 h-1 bg-gray-800 rounded-full z-10"></div>
<div className="absolute top-1/2 left-[87.5%] -translate-y-1/2 w-1 h-1 bg-gray-800 rounded-full z-10"></div>
</div>

<div className="relative z-10 group/card">
<div className="w-24 h-24 glass-panel rounded-2xl flex flex-col items-center justify-center mb-6 shadow-xl shadow-black transition-all duration-300 relative overflow-hidden group-hover/card:scale-105 group-hover/card:shadow-orange-500/10 group-hover/card:border-orange-500/20">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
<span className="text-[10px] font-mono text-gray-600 absolute top-2 right-3">01</span>
<svg className="lucide lucide-file-input w-8 h-8 text-gray-300 group-hover/card:text-white transition-colors mb-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"></path><path d="M14 2v6h6"></path><path d="m2 15 4 4-4 4"></path><path d="M2 19h10"></path></svg>
<span className="text-[9px] uppercase tracking-widest text-gray-500 font-semibold mt-1 group-hover/card:text-gray-300 transition-colors">Ingest</span>
</div>
<div className="pr-2">
<h4 className="text-lg font-medium text-white mb-2 flex items-center gap-2 group-hover/card:text-orange-200 transition-colors">
                            Input Context
                        </h4>
<p className="leading-relaxed text-sm text-gray-400 mb-4 text-xs">Memproses bahasa bukan sahaja secara sintaksis, tetapi juga secara budaya.</p>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-medium bg-white/5 text-gray-400 border border-white/5 group-hover/card:border-white/10 transition-colors">
<svg className="lucide lucide-mic" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
                                Audio
                            </span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-medium bg-white/5 text-gray-400 border border-white/5 group-hover/card:border-white/10 transition-colors">
<svg className="lucide lucide-text" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M17 6.1H3"></path><path d="M21 12.1H3"></path><path d="M15.1 18H3"></path></svg>
                                Text
                            </span>
</div>
</div>
</div>

<div className="z-10 group/card relative">
<div className="w-24 h-24 bg-[#0A0A0A] border border-orange-500/40 rounded-2xl flex flex-col items-center justify-center mb-6 shadow-[0_0_30px_-10px_rgba(249,115,22,0.3)] transition-all duration-300 relative overflow-hidden group-hover/card:scale-105 group-hover/card:border-orange-500/60">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent"></div>
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-50">
</div>
<span className="text-[10px] font-mono text-orange-500/50 absolute top-2 right-3">02</span>
<div className="relative">
<span className="absolute -top-1 -right-1 flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<svg className="lucide lucide-align-center-vertical mb-1" data-icon-replaced="true" data-icon-set="lucide" data-lucide="align-center-vertical" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(249, 115, 22)'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"></path><path d="M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"></path><path d="M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"></path><path d="M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"></path></svg>
</div>
<span className="text-[9px] uppercase tracking-widest text-orange-400 font-semibold mt-1">Process</span>
</div>
<div className="pr-2">
<h4 className="text-lg font-medium text-white mb-2 flex items-center gap-2 group-hover/card:text-orange-400 transition-colors">
      Bahasa &amp; Adat
    </h4>
<p className="leading-relaxed text-sm text-gray-400 mb-4">Analisis sentimen dan niat adat tempatan dan bahasa slang serantau.</p>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20">
<svg className="lucide lucide-sparkles" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"></path></svg>
                                Nuance
                            </span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20">
<svg className="lucide lucide-languages" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>
                                Slang
                            </span>
</div>
</div>
</div>

<div className="relative z-10 group/card">
<div className="w-24 h-24 glass-panel rounded-2xl flex flex-col items-center justify-center mb-6 shadow-xl shadow-black transition-all duration-300 relative overflow-hidden group-hover/card:scale-105 group-hover/card:border-green-500/30 group-hover/card:shadow-green-900/10">
<div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
<span className="text-[10px] font-mono text-gray-600 absolute top-2 right-3">03</span>
<svg className="lucide lucide-shield-check w-8 h-8 text-gray-300 group-hover/card:text-green-400 transition-colors mb-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-[9px] uppercase tracking-widest text-gray-500 font-semibold mt-1 group-hover/card:text-green-200/50 transition-colors">Verify</span>
</div>
<div className="pr-2">
<h4 className="flex items-center gap-2 group-hover/card:text-green-100 transition-colors text-lg font-medium text-white mb-2">Semak Hukum</h4>
<p className="leading-relaxed text-sm text-gray-400 mb-4">Pengesahan pematuhan automatik mengikut peraturan tempatan.</p>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-medium bg-white/5 text-gray-400 border border-white/5 group-hover/card:text-green-400 group-hover/card:border-green-500/20 transition-colors">
<svg className="lucide lucide-scale" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>
                                Shariah
                            </span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-medium bg-white/5 text-gray-400 border border-white/5 group-hover/card:text-green-400 group-hover/card:border-green-500/20 transition-colors">
<svg className="lucide lucide-lock" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                PDPA
                            </span>
</div>
</div>
</div>

<div className="group/card z-10 relative">
<div className="w-24 h-24 glass-panel rounded-2xl flex flex-col items-center justify-center mb-6 shadow-xl shadow-black transition-all duration-300 relative overflow-hidden group-hover/card:scale-105 group-hover/card:border-blue-500/30 group-hover/card:shadow-blue-900/10">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
<span className="text-[10px] font-mono text-gray-600 absolute top-2 right-3">04</span>
<svg className="lucide lucide-message-circle-heart w-8 h-8 text-gray-300 group-hover/card:text-blue-400 transition-colors mb-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path><path d="M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7"></path></svg>
<span className="text-[9px] uppercase tracking-widest text-gray-500 font-semibold mt-1 group-hover/card:text-blue-200/50 transition-colors">Output</span>
</div>
<div className="pr-2">
<h4 className="flex items-center gap-2 group-hover/card:text-blue-100 transition-colors text-lg font-medium text-white mb-2">Output Lokal</h4>
<p className="leading-relaxed text-sm text-gray-400 mb-4">Memberikan respons yang natif dan asli kepada pengguna.</p>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-medium bg-white/5 text-gray-400 border border-white/5 group-hover/card:text-blue-400 group-hover/card:border-blue-500/20 transition-colors">
<svg className="lucide lucide-thumbs-up" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
                                Authentic
                            </span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-medium bg-white/5 text-gray-400 border border-white/5 group-hover/card:text-blue-400 group-hover/card:border-blue-500/20 transition-colors">
<svg className="lucide lucide-zap" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                                Instant
                            </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 text-center">
<h2 className="md:text-5xl text-3xl font-medium text-white tracking-tight mb-6">Diminati oleh lokal</h2>
<p className="text-lg font-light text-gray-400 max-w-2xl mr-auto ml-auto">Menerajui generasi unicorn baharu Asia Tenggara.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card rounded-3xl p-8 flex flex-col h-full hover:border-white/10 transition-all duration-300">
<div className="mb-8">
<svg aria-hidden="true" className="iconify text-3xl mb-6 text-white iconify--simple-icons" data-icon="simple-icons:grab" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M23.129 10.863a2.93 2.93 0 0 0-2.079-.872c-.57 0-1.141.212-1.455.421c-.651.434-1.186.904-2.149 2.148v.894c.817-1.064 1.59-1.903 2.177-2.364c.386-.31.933-.501 1.427-.501c1.275 0 2.352 1.077 2.352 2.352v.538c0 .63-.247 1.223-.698 1.668a2.34 2.34 0 0 1-1.654.685c-1.048 0-1.97-.719-2.22-1.701l-.422.51c.307 1.03 1.417 1.789 2.642 1.789a2.93 2.93 0 0 0 2.079-.872c.562-.562.871-1.3.871-2.079v-.538c0-.778-.31-1.517-.871-2.078m-12.8-.274c.406 0 .757.087 1.074.266a5 5 0 0 1 .411-.449c-.335-.256-.903-.415-1.485-.415c-.83 0-1.584.3-2.122.843c-.534.54-.83 1.287-.83 2.107v3.489h.598v-3.49c0-1.385.968-2.352 2.354-2.352m5.678 5.84V12.94c0-1.072-.84-1.913-1.913-1.913c-.5 0-.976.203-1.343.57a1.9 1.9 0 0 0-.57 1.343v.538c0 1.037.877 1.913 1.913 1.913c.285 0 .671-.07.908-.264v-.631c-.232.187-.57.298-.908.298a1.3 1.3 0 0 1-1.315-1.316v-.538a1.3 1.3 0 0 1 1.315-1.314a1.3 1.3 0 0 1 1.316 1.314v3.489zM0 12.596v.193c0 1.036.393 2.003 1.107 2.722a3.76 3.76 0 0 0 2.689 1.112c.82 0 1.548-.186 2.162-.551c.506-.302.73-.607.75-.635V12.22H3.65v.597h2.46v2.434l-.002.002c-.288.288-.972.77-2.312.77a3.17 3.17 0 0 1-2.279-.938a3.25 3.25 0 0 1-.92-2.297v-.193c0-.83.375-1.656 1.026-2.269a3.56 3.56 0 0 1 2.442-.967c.847 0 1.438.129 1.913.416v-.67c-.494-.21-1.085-.305-1.913-.305C1.862 8.8 0 10.538 0 12.595m10.329-.968q.341 0 .571.112c.075-.186.151-.339.262-.525c-.162-.116-.549-.186-.833-.186c-1.09 0-1.913.823-1.913 1.913v3.489h.598v-3.49c0-.774.54-1.314 1.315-1.314m-4.351-.702v-.707c-.541-.29-1.131-.419-1.913-.419c-.799 0-1.555.293-2.132.824c-.577.532-.895 1.233-.895 1.972v.193c0 1.542 1.237 2.796 2.758 2.796c1.237 0 1.745-.405 1.874-.533v-1.794H3.65v.598h1.46v.899l-.005.001c-.187.075-.578.231-1.31.231a2.13 2.13 0 0 1-1.528-.636a2.2 2.2 0 0 1-.632-1.562v-.193c0-1.192 1.113-2.198 2.43-2.198c.91 0 1.45.147 1.913.528m14.105 1.126c.27-.27.623-.424.967-.424a1.3 1.3 0 0 1 1.315 1.314v.538c0 .738-.578 1.316-1.315 1.316c-.357 0-.702-.196-.972-.55a2.15 2.15 0 0 1-.418-1.12l-.484.591c.095.452.33.885.665 1.19c.344.313.774.486 1.209.486a1.915 1.915 0 0 0 1.913-1.913v-.538c0-.499-.202-.977-.57-1.343a1.9 1.9 0 0 0-1.343-.57c-.316 0-.818.114-1.417.652l-.002.002c-.16.16-.536.536-.765.804c-.384.42-.943 1.054-1.42 1.688v.933c.529-.68.833-1.06 1.33-1.634c.445-.519.996-1.15 1.307-1.422m-8.939 1.428c0 .779.31 1.517.872 2.08a2.93 2.93 0 0 0 2.078.87c.33 0 .669-.07.908-.188v-.597a2.5 2.5 0 0 1-.908.188c-1.274 0-2.352-1.077-2.352-2.353v-.538c0-1.275 1.078-2.352 2.352-2.352a2.34 2.34 0 0 1 2.353 2.353v3.488h.598v-3.604a2.98 2.98 0 0 0-.915-2.006a2.92 2.92 0 0 0-2.036-.83c-.778 0-1.516.31-2.078.873a2.93 2.93 0 0 0-.872 2.078zm6.918-2.313a5 5 0 0 1 .596-.631V7.378h-.596zm1.037-.876V7.378h.597V9.88a3.6 3.6 0 0 0-.597.41" fill="currentColor"></path></svg>
<p className="leading-relaxed text-sm italic text-gray-300">“Nuansa dalam dialek tempatan tiada tandingan. Ilmu menangkap niat disebalik bahasa slang.”</p>
</div>
<div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<p className="text-xs font-semibold text-white">Sarah Tan</p>
<p className="text-[10px] text-gray-500">Product Lead at Grab</p>
</div>
</div>
</div>

<div className="glass-card-highlight rounded-3xl p-8 flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
<div className="mb-8 relative z-10">
<div className="flex justify-between items-start mb-4">
<svg aria-hidden="true" className="iconify text-3xl text-white iconify--simple-icons" data-icon="simple-icons:airasia" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.54 14.49c-1.278 0-2.264-.998-2.264-2.276c0-1.252.98-2.27 2.264-2.27c1.232 0 2.238 1.018 2.238 2.27c0 1.278-1.005 2.277-2.239 2.277zm3.074-7.854l-.214.998c-.59-1.18-2.348-1.297-3.295-1.297c-2.952 0-5.527 2.841-5.527 6.746c0 3.14 1.875 5.111 4.23 5.111c1.316 0 2.432-.304 3.353-1.4l-.24 1.102h3.711l1.692-11.26c-1.238-.001-2.482.01-3.71 0M12 0c6.63 0 12 5.37 12 12s-5.37 12-12 12S0 18.63 0 12S5.37 0 12 0" fill="currentColor"></path></svg>
<span className="px-2 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[10px] font-semibold text-orange-400 uppercase tracking-wide">Case Study</span>
</div>
<h3 className="text-xl font-medium text-orange-100 mb-2">Sokongan Pantas 40%</h3>
<p className="leading-relaxed text-sm text-gray-400">“Kami telah mengurangkan masa respons sokongan pelanggan sebanyak 40% sambil mengekalkan skor CSAT 5-bintang di 6 negara.”</p>
</div>
<div className="mt-auto pt-6 border-t border-white/10 flex items-center gap-3 relative z-10">
<div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
</div>
<div className="">
<p className="text-xs font-semibold text-white">Azizul Rahman</p>
<p className="text-[10px] text-gray-500">VP of Engineering</p>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-8 flex flex-col h-full hover:border-white/10 transition-all duration-300">
<div className="mb-8">
<span className="iconify text-3xl mb-6 text-white" data-icon="logos:tokopedia"></span>
<p className="leading-relaxed text-sm italic text-gray-300">"Enjin polisi Ilmu.ai membolehkan kami mengautomasikan pemeriksaan pematuhan di seluruh Indonesia tanpa terlepas walau satu pun kemas kini regulatori."</p>
</div>
<div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden flex items-center justify-center text-xs text-white">
                            TR
                        </div>
<div>
<p className="text-xs font-semibold text-white">Tariq Rizki</p>
<p className="text-[10px] text-gray-500">Head of Compliance</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#030303] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-20">
<div className="col-span-2 md:col-span-2">
<a className="flex items-center gap-2.5 mb-6" href="#">
<div className="w-6 h-6 bg-orange-600 rounded-[4px] flex items-center justify-center shrink-0">
<svg aria-hidden="true" className="iconify text-white text-xs iconify--solar" data-icon="solar:planet-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 12a8 8 0 1 1-16 0a8 8 0 0 1 16 0" fill="currentColor" opacity=".5"></path><path d="M17.712 5.453c1.047-.193 2.006-.259 2.797-.152c.77.103 1.536.393 1.956 1.064c.446.714.312 1.542-.012 2.258c-.33.728-.918 1.499-1.672 2.268c-1.516 1.547-3.836 3.226-6.597 4.697c-2.763 1.472-5.495 2.484-7.694 2.92c-1.095.217-2.098.299-2.923.201c-.8-.095-1.6-.383-2.032-1.075c-.47-.752-.296-1.63.07-2.379c.375-.768 1.032-1.586 1.872-2.403L4 12.416c0 .219.083.71.168 1.146c.045.23.09.444.123.596c-.652.666-1.098 1.263-1.339 1.756c-.277.567-.208.825-.145.925c.072.116.305.305.937.38c.609.073 1.44.018 2.455-.183c2.02-.4 4.613-1.351 7.28-2.772s4.85-3.015 6.23-4.423c.694-.707 1.15-1.334 1.377-1.836c.233-.515.167-.75.107-.844c-.07-.112-.289-.294-.883-.374c-.542-.072-1.272-.041-2.163.112L16.87 5.656c.338-.101.658-.17.842-.203" fill="currentColor"></path></svg>
</div>
<div className="flex flex-col justify-center leading-none">
<span className="text-sm font-bold tracking-tight text-white">ilmu.ai</span>
<span className="text-[9px] font-semibold tracking-[0.2em] text-[#A0A0A0] uppercase">Nusantara</span>
</div>
</a>
<p className="leading-relaxed text-xs text-gray-500 max-w-xs mb-4">Ejen AI pertama yang dibina untuk Asia Tenggara.<br/> Memproses bahasa secara budaya, bukan sekadar secara sintaksis.</p>
<a className="text-xs font-medium text-white hover:text-orange-400 transition-colors" href="mailto:hello@ilmu.ai">hello@ilmu.ai</a>
</div>
<div className="">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Produk</h4>
<ul className="space-y-3">
<li><a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Policy Engine</a></li>
<li><a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Onboard</a></li>
<li><a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Decide</a></li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Industri</h4>
<ul className="space-y-3">
<li><a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Fintech</a></li>
<li className=""><a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Banking</a></li>
<li><a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Government</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Syarikat</h4>
<ul className="space-y-3">
<li><a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Tentang Kami</a></li>
<li><a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Kerjaya</a></li>
<li><a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Security</h4>
<div className="flex items-center gap-3 border border-white/10 rounded-lg p-3 bg-white/5">
<svg className="lucide lucide-shield-check w-5 h-5 text-green-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<div className="">
<p className="text-[10px] font-semibold text-white">SOC2 Type II</p>
<p className="text-[9px] text-gray-500">Certified</p>
</div>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-gray-600">© 2025 Ilmu AI Technologies. All rights reserved.</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] text-gray-500">System Operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
