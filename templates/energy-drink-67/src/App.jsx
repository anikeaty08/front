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



      lucide.createIcons();
    
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
      

<div className="fixed inset-0 pointer-events-none z-0 opacity-10" style={{backgroundImage: 'url(\'https://www.transparenttextures.com/patterns/black-felt.png\')'}}></div>

<nav className="fixed top-0 w-full z-50 border-b transition-all duration-300 backdrop-blur-sm bg-black/90 border-red-600">
<div className="flex h-20 max-w-7xl mx-auto px-6 items-center justify-between">
<a className="flex items-center gap-1 group z-20" href="#">
<div className="electric-text text-4xl font-semibold italic text-white tracking-tighter font-display" style={{textShadow: '2px 2px 0px #b91c1c'}}>
            BIRELL
            <span className="text-red-500">TURBO</span>
</div>
</a>
<div className="hidden md:flex items-center gap-2">
<a className="nav-skew px-6 py-2 text-xl font-semibold font-display uppercase transition-all duration-200 text-white hover:bg-red-600 hover:text-black tracking-tight" href="#features">
            Features
          </a>
<a className="nav-skew px-6 py-2 text-xl font-semibold font-display uppercase transition-all duration-200 text-white hover:bg-red-600 hover:text-black tracking-tight" href="#ingredients">
            Ingredients
          </a>
<a className="nav-skew px-6 py-2 text-xl font-semibold font-display uppercase transition-all duration-200 text-white hover:bg-red-600 hover:text-black tracking-tight" href="#community">
            Community
          </a>
</div>
<div className="flex items-center gap-4 z-20">
<a className="hidden sm:flex text-lg font-display font-semibold uppercase transition-colors text-neutral-400 hover:text-white tracking-tight" href="#">
            Log in
          </a>
<a className="clip-button px-6 py-3 text-lg font-semibold font-display uppercase transition-all transform active:scale-95 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none bg-red-600 text-white hover:bg-white hover:text-black tracking-tight" href="#">
            Get Turbo
          </a>
</div>
</div>
</nav>

<main className="lg:pt-48 lg:pb-40 overflow-hidden pt-32 pb-24 relative">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">

<svg className="absolute top-20 left-[10%] w-64 h-96 lightning-bolt opacity-50 text-red-500" fill="currentColor" viewbox="0 0 100 200">
<path d="M40 0 L0 80 L30 80 L10 160 L60 60 L30 60 L50 0 Z"></path>
</svg>

<svg className="absolute top-40 right-[15%] w-48 h-80 lightning-bolt-delayed opacity-50 text-yellow-500" fill="currentColor" viewbox="0 0 100 200">
<path d="M50 0 L20 70 L40 70 L10 150 L70 50 L40 50 L60 0 Z"></path>
</svg>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[100px] rounded-full bg-red-600/20"></div>
</div>
<div className="z-10 flex flex-col text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center">

<div className="inline-flex items-center gap-2 px-4 py-1 text-sm font-bold uppercase tracking-widest mb-10 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] border-2 bg-yellow-400 text-black border-black">
<svg className="lucide lucide-zap" fill="black" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
          New Formula Unlocked
        </div>

<div className="mb-10 relative group">
<div className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-100 animate-pulse bg-red-600"></div>
<img alt="Birell Turbo Logo" className="relative z-10 h-48 md:h-64 lg:h-80 object-contain drop-shadow-[0_20px_50px_rgba(220,38,38,0.5)] transform hover:scale-110 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b4a4adb-85bb-4d0d-aacc-18e68ded66ec_1600w.png"/>
</div>
<h1 className="text-7xl md:text-9xl font-semibold tracking-tighter mb-6 max-w-5xl mx-auto leading-[0.8] italic uppercase text-white" style={{textShadow: '4px 4px 0px #000, -2px -2px 0 #b91c1c'}}>
          Unleash
          <br/>
<span className="bg-clip-text text-slate-50 bg-gradient-to-b from-yellow-300 to-red-600">
            Maximum Chaos
          </span>
</h1>
<p className="md:text-2xl uppercase text-xl font-normal text-neutral-300 tracking-wide font-display max-w-2xl mr-auto mb-12 ml-auto">
          Precision-engineered for focus, endurance, and speed.
          <br/>
<span className="px-1 text-white bg-red-600">Zero sugar</span>
          . Absolute power.
        </p>
<div className="-translate-x-1/2 overflow-hidden border-y-4 z-20 -translate-y-4 -multi text-xl font-bold text-black bg-yellow-400 opacity-90 w-screen border-black pt-2 pb-2 absolute bottom-10 left-1/2 shadow-lg -translate-y-16 rotate-2 scale-95">
<div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] uppercase tracking-widest font-display">
            // ENERGY // FOCUS // POWER // NO CRASH // 120MG CAFFEINE // ZERO
            SUGAR // ENERGY // FOCUS // POWER // NO CRASH // 120MG CAFFEINE //
            ZERO SUGAR
          </div>
</div>
<div className="flex flex-col sm:flex-row gap-6 sm:w-auto w-full translate-y-8 scale-75 gap-x-6 gap-y-6 items-center">
<button className="clip-button sm:w-auto hover:bg-red-500 uppercase transition-all flex gap-2 group hover:translate-y-1 hover:shadow-none text-2xl font-semibold text-white tracking-wider font-display bg-red-600 w-full border-white border-2 pt-5 pr-10 pb-5 pl-10 shadow-[6px_6px_0px_0px_#000000] translate-y-16 scale-100 gap-x-2 gap-y-2 items-center justify-center">
            Grab a 12-Pack
            <svg className="lucide lucide-arrow-right w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<button className="clip-button sm:w-auto uppercase transition-all flex hover:border-white hover:bg-white hover:text-black cursor-pointer text-2xl font-semibold text-white tracking-wider font-display bg-transparent w-full border-neutral-600 border-2 pt-5 pr-10 pb-5 pl-10 translate-y-16 gap-x-2 gap-y-2 items-center justify-center" onclick="window.location.href='https://streamable.com/cr7in2'" role="button">
<svg className="lucide lucide-play-circle w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
            Watch Ad
          </button>
</div>
</div>
<div className="torn-edge-bottom"></div>
</main>

<section className="py-24 relative bg-neutral-900" id="features">

<div className="opacity-10 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row border-red-600 border-b-4 mb-16 pb-4 items-end justify-between">
<div className="">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter uppercase italic text-white">
              Engineered for
              <span className="text-red-600">Elites</span>
</h2>
<p className="text-xl font-display uppercase tracking-wide mt-2 text-neutral-400 font-medium">
              Proprietary blend. Maximum Output.
            </p>
</div>
<div className="animate-pulse hidden md:block text-red-600">
<svg className="lucide lucide-zap" fill="currentColor" height="48" stroke="none" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="clip-angle p-1 bg-gradient-to-br to-transparent group col-span-1 md:col-span-2 hover:-translate-y-2 transition-transform duration-300 bg-neutral-950 from-red-600">
<div className="clip-angle h-full p-8 relative overflow-hidden bg-black">
<div className="absolute right-0 top-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
<svg className="text-red-500" fill="none" height="100" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="100">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</div>
<h3 className="text-4xl font-semibold mb-2 italic text-white tracking-tight">
                Instant Reaction
              </h3>
<div className="w-12 h-2 mb-4 bg-red-600"></div>
<p className="text-lg font-sans text-neutral-400 font-normal">
                Turbo formula activates within 15 minutes. Sharpen reflexes.
                Kill lag. Dominate.
              </p>

<div className="mt-8 h-32 w-full border-2 relative overflow-hidden border-neutral-800 bg-neutral-900/50">
<svg className="absolute bottom-0 left-0 w-full h-full text-red-600" preserveaspectratio="none">
<polyline fill="none" points="0,120 20,110 40,115 60,60 80,40 100,45 120,20 140,25 160,10 300,5" stroke="currentColor" strokeWidth="3" vector-effect="non-scaling-stroke">
<animate attributename="stroke-dashoffset" dur="2s" from="1000" repeatcount="indefinite" to="0"></animate>
</polyline>
<path className="" d="M0,120 L20,110 L40,115 L60,60 L80,40 L100,45 L120,20 L140,25 L160,10 L300,5 V130 H0 Z" fill="url(#gradRed)" opacity="0.3"></path>
<defs>
<lineargradient id="gradRed" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#dc2626', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#dc2626', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>
</div>

<div className="clip-angle p-1 bg-gradient-to-br from-yellow-500 to-transparent group hover:-translate-y-2 transition-transform duration-300 bg-neutral-950">
<div className="clip-angle h-full p-8 bg-black">
<div className="absolute right-0 top-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
<svg className="text-yellow-500" fill="none" height="60" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="60" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="22" x2="18" y1="12" y2="12"></line>
<line x1="6" x2="2" y1="12" y2="12"></line>
<line x1="12" x2="12" y1="6" y2="2"></line>
<line x1="12" x2="12" y1="22" y2="18"></line>
</svg>
</div>
<h3 className="text-4xl font-semibold mb-2 italic text-white tracking-tight">
                Laser Focus
              </h3>
<div className="w-12 h-2 bg-yellow-500 mb-4"></div>
<p className="text-lg font-sans text-neutral-400 font-normal">
                Zero jitters. Pure clarity. Lock in for hours of intense
                gameplay.
              </p>
</div>
</div>

<div className="clip-angle p-1 bg-gradient-to-br to-transparent group hover:-translate-y-2 transition-transform duration-300 bg-neutral-950 from-white">
<div className="clip-angle bg-black h-full pt-8 pr-8 pb-8 pl-8">
<div className="absolute right-0 top-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
<svg className="text-white" fill="none" height="60" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="60" xmlns="http://www.w3.org/2000/svg">
<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
<path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
</svg>
</div>
<h3 className="text-4xl font-semibold mb-2 italic text-white tracking-tight">
                Hydration
              </h3>
<div className="w-12 h-2 mb-4 bg-white"></div>
<p className="text-lg text-neutral-400 font-normal">
                Electrolyte infused. Keep your body primed under pressure.
              </p>
</div>
</div>

<div className="clip-angle p-1 bg-gradient-to-br to-transparent group col-span-1 md:col-span-2 hover:-translate-y-2 transition-transform duration-300 bg-neutral-950 from-neutral-600">
<div className="clip-angle h-full p-8 flex flex-col md:flex-row items-center gap-8 bg-black">
<div className="flex-1">
<h3 className="text-4xl font-semibold mb-2 italic text-white tracking-tight">
                  Zero Sugar. 100% Taste.
                </h3>
<div className="w-12 h-2 mb-4 bg-neutral-600"></div>
<p className="text-lg font-sans text-neutral-400 font-normal">
                  We cracked the code. Crisp, refreshing Birell taste without
                  the crash.
                </p>
</div>
<div className="flex gap-4">
<div className="border-2 p-4 text-center transform -rotate-2 bg-neutral-900 border-neutral-800">
<div className="text-4xl font-semibold font-display text-white tracking-tight">
                    0g
                  </div>
<div className="text-xs text-red-500 font-bold uppercase">
                    Sugar
                  </div>
</div>
<div className="border-2 p-4 text-center transform rotate-2 bg-neutral-900 border-neutral-800">
<div className="text-4xl font-semibold font-display text-white tracking-tight">
                    120
                    <span className="text-xl">mg</span>
</div>
<div className="text-xs text-yellow-500 font-bold uppercase">
                    Caffeine
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-black" id="ingredients">
<div className="torn-edge-top z-30"></div>

<div className="absolute inset-0 z-0">
<svg className="w-[1072px] h-[700px]" data-icon-replaced="true" height="100%" strokeWidth="2" style={{width: '1072px', height: '700px', color: 'rgb(229, 229, 229)'}} width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<filter id="glow">
<fegaussianblur result="coloredBlur" stddeviation="2.5"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>
<path d="M-100,100 Q400,50 800,300 T1600,200" fill="none" filter="url(#glow)" opacity="0.3" stroke="#dc2626" strokeWidth="2">
<animate attributename="d" dur="5s" repeatcount="indefinite" values="M-100,100 Q400,50 800,300 T1600,200; M-100,150 Q400,100 800,350 T1600,250; M-100,100 Q400,50 800,300 T1600,200"></animate>
</path>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row gap-x-16 gap-y-16 items-center">

<div className="lg:w-1/2 w-full relative">
<div className="aspect-square max-w-md mr-auto ml-auto relative">

<div className="border-dashed animate-[spin_10s_linear_infinite] border-red-600 border-4 rounded-full absolute top-0 right-0 bottom-0 left-0"></div>
<div className="border-dotted animate-[spin_8s_linear_infinite_reverse] bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/250ab250-cde0-43da-a716-ae5a90a2e790_800w.png)] bg-contain border-yellow-500 border-2 rounded-full absolute top-4 right-4 bottom-4 left-4"></div>
</div>
</div>

<div className="w-full lg:w-1/2">
<h2 className="md:text-7xl uppercase text-5xl font-semibold italic text-white tracking-tighter mb-8">
              What's Inside
              <span className="bg-clip-text electric-text bg-center text-transparent tracking-tighter text-left bg-gradient-to-r from-red-500 to-yellow-500" style={{maskImage: 'linear-gradient(200deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(200deg, transparent, black 0%, black 100%, transparent)'}}>Matters</span>
</h2>
<div className="space-y-4">

<div className="group flex transition-colors transform hover:skew-x-2 hover:bg-neutral-800 bg-neutral-900 border-red-600 border-l-4 pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<div className="flex items-center gap-4">
<div className="text-red-500">
<svg className="lucide lucide-battery-charging" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="m11 7-3 5h4l-3 5"></path>
<path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"></path>
<path d="M22 14v-4"></path>
<path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"></path>
</svg>
</div>
<div className="">
<div className="uppercase text-2xl font-semibold text-white tracking-tight font-display">
                      Taurine
                    </div>
<div className="text-sm font-sans uppercase tracking-wider text-neutral-400 font-medium">
                      Metabolic Support
                    </div>
</div>
</div>
<div className="text-right">
<div className="text-3xl font-semibold font-display text-white tracking-tight">
                    1000mg
                  </div>
</div>
</div>

<div className="group flex transition-colors transform hover:skew-x-2 hover:bg-neutral-800 bg-neutral-900 border-yellow-500 border-l-4 pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<div className="flex items-center gap-4">
<div className="text-yellow-500">
<svg className="lucide lucide-brain-circuit" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
<path d="M9 13a4.5 4.5 0 0 0 3-4"></path>
<path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
<path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
<path d="M6 18a4 4 0 0 1-1.967-.516"></path>
<path d="M12 13h4"></path>
<path d="M12 18h6a2 2 0 0 1 2 2v1"></path>
<path d="M12 8h8"></path>
<path d="M16 8V5a2 2 0 0 1 2-2"></path>
<circle cx="16" cy="13" r=".5"></circle>
<circle cx="18" cy="3" r=".5"></circle>
<circle cx="20" cy="21" r=".5"></circle>
<circle cx="20" cy="8" r=".5"></circle>
</svg>
</div>
<div className="">
<div className="text-2xl font-semibold font-display uppercase text-white tracking-tight">
                      B-Vitamin Complex
                    </div>
<div className="text-sm font-sans uppercase tracking-wider text-neutral-400 font-medium">
                      Mental Energy
                    </div>
</div>
</div>
<div className="text-right">
<div className="text-3xl font-semibold font-display text-white tracking-tight">
                    200% DV
                  </div>
</div>
</div>

<div className="group flex items-center justify-between p-6 border-l-4 transition-colors transform hover:skew-x-2 bg-neutral-900 border-white hover:bg-neutral-800">
<div className="flex items-center gap-4">
<div className="text-white">
<svg className="lucide lucide-snowflake" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="m10 20-1.25-2.5L6 18"></path>
<path d="M10 4 8.75 6.5 6 6"></path>
<path d="m14 20 1.25-2.5L18 18"></path>
<path d="m14 4 1.25 2.5L18 6"></path>
<path d="m17 21-3-6h-4"></path>
<path d="m17 3-3 6 1.5 3"></path>
<path d="M2 12h6.5L10 9"></path>
<path d="m20 10-1.5 2 1.5 2"></path>
<path d="M22 12h-6.5L14 15"></path>
<path d="m4 10 1.5 2L4 14"></path>
<path d="m7 21 3-6-1.5-3"></path>
<path d="m7 3 3 6h4"></path>
</svg>
</div>
<div className="">
<div className="text-2xl font-semibold font-display uppercase text-white tracking-tight">
                      Ginseng
                    </div>
<div className="text-sm font-sans uppercase tracking-wider text-neutral-400 font-medium">
                      Stamina Boost
                    </div>
</div>
</div>
<div className="text-right">
<div className="text-3xl font-semibold font-display text-white tracking-tight">
                    50mg
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="torn-edge-bottom"></div>
</section>

<section className="bg-neutral-950 border-neutral-800 border-t pt-32 pb-32 relative">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-x-8 gap-y-8">

<div className="group relative border border-red-600 bg-neutral-900 overflow-hidden hover:shadow-[0_0_40px_rgba(220,38,38,0.3)] transition-all duration-500">
<div className="h-[450px] relative flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-black">

<div className="group-hover:opacity-100 transition-opacity duration-300 opacity-0 absolute top-0 right-0 bottom-0 left-0">
<div className="absolute top-10 left-10 w-20 h-40 bg-red-600 blur-[50px] opacity-40 animate-pulse"></div>
</div>
<img alt="Birell Turbo Can" className="transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 ease-out z-10 w-48 object-cover relative drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] scale-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/61caf3ad-aa74-4eaf-aeb5-6dcc26685e92_1600w.jpg"/>
</div>

<div className="bg-white relative z-20 pt-16 pb-10 px-8 text-center" style={{clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)', marginTop: '-4rem'}}>
<h3 className="text-3xl font-semibold uppercase font-display tracking-tight text-neutral-950 mb-3">
                The Original Taste
              </h3>
<p className="text-neutral-600 font-medium mb-8 text-lg leading-relaxed">
                Explosive energy blend with an irresistible taste. Pure power in
                every sip.
              </p>
<a className="inline-flex items-center text-red-600 font-bold uppercase tracking-wider hover:text-red-700 transition-colors group/link" href="#">
                Order Now
                <svg className="ml-2 w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div className="group relative border border-red-600 bg-neutral-900 overflow-hidden hover:shadow-[0_0_40px_rgba(220,38,38,0.3)] transition-all duration-500">
<div className="overflow-hidden bg-center h-[450px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3b873efc-f44d-4092-b83d-7d829257fb39_1600w.jpg)] bg-cover relative">
<div className="absolute top-10 right-10 z-20 animate-pulse">
<div className="bg-red-600 text-white font-bold px-3 py-1 text-xs uppercase tracking-widest -rotate-2">
                  Live
                </div>
</div>
</div>
<div className="bg-white relative z-20 pt-16 pb-10 px-8 text-center" style={{clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)', marginTop: '-4rem'}}>
<h3 className="text-3xl font-semibold uppercase font-display tracking-tight text-neutral-950 mb-3">
                Stadium Challenge
              </h3>
<p className="text-neutral-600 font-medium mb-8 text-lg leading-relaxed">
                Show your skills and share the video to win instant prizes and
                fame.
              </p>
<a className="inline-flex items-center text-red-600 font-bold uppercase tracking-wider hover:text-red-700 transition-colors group/link" href="#">
                Join The Challenge
                <svg className="ml-2 w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div className="group relative border border-red-600 bg-neutral-900 overflow-hidden hover:shadow-[0_0_40px_rgba(220,38,38,0.3)] transition-all duration-500">
<div className="h-[450px] relative overflow-hidden bg-neutral-800 flex items-center justify-center">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
<img alt="Merch" className="object-top group-hover:grayscale-0 transition-all duration-500 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8550153-6309-4664-aad1-c2fe398ffc51_800w.png"/>
</div>
<div className="bg-white relative z-20 pt-16 pb-10 px-8 text-center" style={{clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)', marginTop: '-4rem'}}>
<h3 className="text-3xl font-semibold uppercase font-display tracking-tight text-neutral-950 mb-3">
                Official Champions Kit
              </h3>
<p className="text-neutral-600 font-medium mb-8 text-lg leading-relaxed">
                Modern sporty material, comfortable performance. Wear the power.
              </p>
<a className="inline-flex items-center text-red-600 font-bold uppercase tracking-wider hover:text-red-700 transition-colors group/link" href="#">
                Kit Details
                <svg className="ml-2 w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-red-900">

<div className="clip-angle transform z-0 bg-neutral-900 opacity-90 absolute top-0 right-0 bottom-0 left-0 rotate-3 scale-110"></div>
<div className="absolute top-0 right-0 w-1/2 h-full skew-x-12 z-0 bg-black/50"></div>
<div className="z-10 text-center max-w-5xl mr-auto ml-auto pr-6 pl-6 relative">
<h2 className="text-6xl md:text-8xl font-semibold tracking-tighter mb-8 uppercase italic text-white" style={{textShadow: '4px 4px 0 #000'}}>
          Ready to Feel the
          <span className="text-red-500 electric-text">Turbo</span>
          ?
        </h2>
<p className="text-2xl mb-12 max-w-2xl mx-auto font-display uppercase tracking-wide text-neutral-300">
          Join thousands of gamers, athletes, and creators.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<button className="clip-button px-10 py-5 text-2xl font-semibold font-display uppercase tracking-wider transition-all transform hover:-translate-y-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full sm:w-auto bg-white text-black hover:bg-yellow-400">
            Buy Now - $24.99
          </button>
<button className="clip-button px-10 py-5 bg-transparent border-4 font-semibold font-display text-2xl uppercase tracking-wider transition-all w-full sm:w-auto border-black text-white hover:bg-black">
            Find a Store
          </button>
</div>
</div>
</section>

<footer className="pt-20 pb-10 border-t-8 relative bg-black border-red-600">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2 md:col-span-1">
<span className="text-4xl font-bold tracking-tighter block mb-6 italic font-display text-white">
              BIRELL
              <span className="text-red-500 ml-1">TURBO</span>
</span>
<p className="text-neutral-500 text-sm leading-relaxed uppercase tracking-wide font-bold">
              The ultimate performance drink.
              <br/>
              Refuse second place.
            </p>
</div>
<div className="">
<h4 className="text-xl font-bold font-display uppercase mb-4 tracking-wider text-red-500 text-white">
              Product
            </h4>
<ul className="space-y-3 text-sm font-bold uppercase tracking-wide text-neutral-400">
<li>
<a className="hover:underline decoration-red-500 underline-offset-4 transition-all hover:text-white" href="#">
                  Classic Turbo
                </a>
</li>
<li>
<a className="hover:underline decoration-red-500 underline-offset-4 transition-all hover:text-white" href="#">
                  Zero Sugar
                </a>
</li>
<li>
<a className="hover:underline decoration-red-500 underline-offset-4 transition-all hover:text-white" href="#">
                  Variety Pack
                </a>
</li>
<li>
<a className="hover:underline decoration-red-500 underline-offset-4 transition-all hover:text-white" href="#">
                  Merch
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-xl font-bold font-display uppercase mb-4 tracking-wider text-yellow-500 text-white">
              Company
            </h4>
<ul className="space-y-3 text-sm font-bold uppercase tracking-wide text-neutral-400">
<li className="">
<a className="hover:underline decoration-yellow-500 underline-offset-4 transition-all hover:text-white" href="#">
                  About Us
                </a>
</li>
<li>
<a className="hover:underline decoration-yellow-500 underline-offset-4 transition-all hover:text-white" href="#">
                  Sponsorships
                </a>
</li>
<li>
<a className="hover:underline decoration-yellow-500 underline-offset-4 transition-all hover:text-white" href="#">
                  Careers
                </a>
</li>
<li>
<a className="hover:underline decoration-yellow-500 underline-offset-4 transition-all hover:text-white" href="#">
                  Contact
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-xl font-bold font-display uppercase mb-4 tracking-wider text-white">
              Legal
            </h4>
<ul className="space-y-3 text-sm font-bold uppercase tracking-wide text-neutral-400">
<li>
<a className="hover:underline underline-offset-4 transition-all hover:text-white decoration-white" href="#">
                  Privacy
                </a>
</li>
<li>
<a className="hover:underline underline-offset-4 transition-all hover:text-white decoration-white" href="#">
                  Terms
                </a>
</li>
<li>
<a className="hover:underline underline-offset-4 transition-all hover:text-white decoration-white" href="#">
                  Cookies
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-neutral-800">
<div className="text-xs font-mono uppercase text-neutral-600">
            © 2023 Birell Turbo. All rights reserved.
          </div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-red-500 transition-colors transform hover:scale-110" href="#">
<svg className="lucide lucide-twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="text-neutral-500 hover:text-red-500 transition-colors transform hover:scale-110" href="#">
<svg className="lucide lucide-instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="text-neutral-500 hover:text-red-500 transition-colors transform hover:scale-110" href="#">
<svg className="lucide lucide-facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
