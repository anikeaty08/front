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
      
<div className="w-full max-w-5xl">

<div className="relative w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 group" style={{aspectRatio: '820 / 312', backgroundColor: '#0B1E3D'}}>

<div className="absolute inset-0">

<div className="absolute inset-0 bg-[#0B1E3D]"></div>

<div className="absolute -top-[50%] -left-[20%] w-[80%] h-[150%] rounded-full opacity-60 mix-blend-screen blur-3xl" style={{background: 'radial-gradient(circle, #6A4C93 0%, transparent 70%)'}}></div>
<div className="absolute -bottom-[50%] -right-[20%] w-[80%] h-[150%] rounded-full opacity-40 mix-blend-screen blur-3xl" style={{background: 'radial-gradient(circle, #4c1d95 0%, transparent 70%)'}}></div>

<div className="absolute inset-0" style="background-image: 
            radial-gradient(1px 1px at 15% 15%, #FFFFFF 100%, transparent),
            radial-gradient(1.5px 1.5px at 25% 75%, #C0C0C0 100%, transparent),
            radial-gradient(2px 2px at 60% 20%, #FFD700 100%, transparent),
            radial-gradient(1px 1px at 80% 80%, #FFFFFF 100%, transparent),
            radial-gradient(1.5px 1.5px at 10% 90%, #C0C0C0 100%, transparent),
            radial-gradient(1px 1px at 90% 10%, #FFFFFF 100%, transparent);
            background-size: 50% 50%;">
</div>
</div>

<div className="absolute inset-0 z-10 pointer-events-none">

<div className="absolute left-4 top-4 sm:left-12 sm:top-8 animate-float-balloon origin-bottom">
<svg className="drop-shadow-2xl" fill="none" height="180" viewbox="0 0 140 180" width="140" xmlns="http://www.w3.org/2000/svg">
<defs>

<radialgradient cx="0" cy="0" gradienttransform="translate(35 35) rotate(45) scale(50)" gradientunits="userSpaceOnUse" id="grad-gold" r="1">
<stop offset="0%" stop-color="#FFF5C2"></stop>
<stop offset="30%" stop-color="#FFD700"></stop>
<stop offset="100%" stop-color="#B8860B"></stop>
</radialgradient>

<radialgradient cx="0" cy="0" gradienttransform="translate(90 40) rotate(45) scale(55)" gradientunits="userSpaceOnUse" id="grad-violet" r="1">
<stop offset="0%" stop-color="#D8B4FE"></stop>
<stop offset="30%" stop-color="#6A4C93"></stop>
<stop offset="100%" stop-color="#3B2160"></stop>
</radialgradient>

<radialgradient cx="0" cy="0" gradienttransform="translate(60 60) rotate(45) scale(45)" gradientunits="userSpaceOnUse" id="grad-silver" r="1">
<stop offset="0%" stop-color="#FFFFFF"></stop>
<stop offset="30%" stop-color="#E2E8F0"></stop>
<stop offset="100%" stop-color="#64748B"></stop>
</radialgradient>
</defs>

<path d="M70 110 Q 70 140 60 170" fill="none" stroke="#FFFFFF" stroke-opacity="0.4" strokeWidth="1.5"></path>
<path d="M40 95 Q 50 140 60 170" fill="none" stroke="#FFFFFF" stroke-opacity="0.4" strokeWidth="1.5"></path>
<path d="M100 95 Q 80 140 60 170" fill="none" stroke="#FFFFFF" stroke-opacity="0.4" strokeWidth="1.5"></path>

<g transform="translate(60, 60)">
<path d="M0 0 C-20 0 -22 30 -2 45 L0 48 L2 45 C22 30 20 0 0 0Z" fill="url(#grad-silver)"></path>

<ellipse cx="-8" cy="10" fill="white" fillOpacity="0.4" filter="blur(1px)" rx="4" ry="8" transform="rotate(-30)"></ellipse>
</g>

<g transform="translate(35, 35) rotate(-10)">
<path d="M0 0 C-25 0 -28 35 -3 55 L0 58 L3 55 C28 35 25 0 0 0Z" fill="url(#grad-gold)"></path>

<ellipse cx="-10" cy="12" fill="white" fillOpacity="0.5" filter="blur(1px)" rx="5" ry="10" transform="rotate(-30)"></ellipse>
</g>

<g transform="translate(90, 40) rotate(10)">
<path d="M0 0 C-26 0 -29 36 -3 56 L0 59 L3 56 C29 36 26 0 0 0Z" fill="url(#grad-violet)"></path>

<ellipse cx="-10" cy="12" fill="white" fillOpacity="0.4" filter="blur(1px)" rx="6" ry="12" transform="rotate(-30)"></ellipse>
</g>

<circle className="animate-pulse" cx="20" cy="20" fill="#FFD700" r="1.5"></circle>
<circle className="animate-ping" cx="120" cy="30" fill="#FFFFFF" r="1"></circle>
</svg>
</div>

<div className="absolute right-6 bottom-8 sm:right-16 sm:bottom-12">
<div className="relative transform rotate-6 hover:rotate-0 transition-transform duration-700 drop-shadow-2xl">

<svg fill="none" height="100" viewbox="0 0 200 200" width="100" xmlns="http://www.w3.org/2000/svg">

<ellipse cx="100" cy="170" fill="black" fillOpacity="0.3" filter="blur(5px)" rx="70" ry="10"></ellipse>

<path d="M50 110 L50 150 C50 170 150 170 150 150 L150 110" fill="#6A4C93" stroke="#583B80" strokeWidth="2"></path>

<ellipse cx="100" cy="110" fill="#583B80" rx="50" ry="20"></ellipse>

<path d="M50 110 C50 90 150 90 150 110 C150 118 142 112 138 125 C134 138 124 118 115 130 C106 142 94 118 85 130 C76 142 66 118 62 125 C58 132 50 118 50 110 Z" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1"></path>

<rect fill="url(#candle-gradient)" height="50" rx="2" width="10" x="95" y="60"></rect>

<path className="animate-pulse" d="M100 20 Q 115 45 100 55 Q 85 45 100 20" fill="#FFD700" filter="drop-shadow(0 0 8px #FFD700)">
<animate attributename="d" dur="1.5s" repeatcount="indefinite" values="M100 20 Q 115 45 100 55 Q 85 45 100 20; M100 15 Q 118 45 100 55 Q 82 45 100 15; M100 20 Q 115 45 100 55 Q 85 45 100 20"></animate>
</path>

<defs>
<lineargradient gradientunits="userSpaceOnUse" id="candle-gradient" x1="100" x2="100" y1="60" y2="110">
<stop stop-color="#FFFFFF"></stop>
<stop offset="1" stop-color="#94a3b8"></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center z-0 overflow-visible">
<div className="relative w-full h-full">

<div className="absolute left-[50%] top-[55%] -translate-x-1/2 -translate-y-1/2 rotate-[-15deg] w-40 h-40 flex items-center justify-center">

<div className="absolute top-24 left-1/2 -translate-x-1/2 w-2 h-32 origin-top transform rotate-12 opacity-80">

<div className="absolute top-0 left-0 w-1 h-20 bg-gradient-to-b from-[#FFD700] to-transparent rotate-12"></div>
<div className="absolute top-2 -left-4 w-1 h-24 bg-gradient-to-b from-[#6A4C93] to-transparent -rotate-6"></div>
<div className="absolute top-0 left-4 w-1 h-16 bg-gradient-to-b from-[#C0C0C0] to-transparent rotate-3"></div>

<span className="absolute top-10 left-6 w-1.5 h-1.5 bg-[#FFD700] rounded-sm rotate-45 animate-pulse"></span>
<span className="absolute top-16 -left-8 w-1 h-2 bg-[#C0C0C0] rotate-12"></span>
<span className="absolute top-20 left-0 w-2 h-2 bg-[#6A4C93] rounded-full"></span>
<span className="absolute top-8 -left-2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_5px_white]"></span>
</div>

<div className="relative z-10 filter drop-shadow-[0_0_15px_rgba(255,215,0,0.2)]">

<div className="absolute bottom-0 left-[-12px] w-6 h-10 bg-[#6A4C93] rounded-bl-full transform -skew-x-12 border-l border-white/20"></div>
<div className="absolute bottom-0 right-[-12px] w-6 h-10 bg-[#6A4C93] rounded-br-full transform skew-x-12 border-r border-white/20"></div>

<div className="w-16 h-24 bg-gradient-to-r from-[#C0C0C0] via-white to-[#C0C0C0] rounded-[50%_50%_10%_10%] relative overflow-hidden shadow-inner">

<div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
</div>

<div className="absolute top-6 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#0B1E3D] rounded-full border-2 border-[#C0C0C0] shadow-md overflow-hidden">
<div className="absolute top-1 right-2 w-2 h-2 bg-white rounded-full opacity-80"></div>
</div>

<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 bg-gradient-to-t from-transparent via-[#FFD700] to-white rounded-b-full blur-[2px] opacity-90 animate-pulse"></div>
</div>
</div>
</div>
</div>

<div className="flex z-30 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">

<div className="w-full max-w-2xl px-6 text-center flex flex-col items-center justify-center" style={{maxHeight: '160px'}}>

<h1 className="relative text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] leading-tight" style={{fontFamily: '\'Outfit\', sans-serif'}}>
<span className="bg-clip-text text-transparent font-newsreader bg-gradient-to-r from-white via-[#FFD700] to-white">
              ¡Feliz Cumpleaños Rocketers!
            </span>
</h1>

<div className="mt-3 inline-flex items-center gap-2 bg-[#0B1E3D]/60 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10 shadow-lg">
<iconify-icon className="text-[#FFD700]" height="16" icon="solar:star-shine-linear" width="16"></iconify-icon>
<p className="sm:text-base text-sm font-medium text-[#C0C0C0] tracking-wide" style={{fontFamily: '\'Outfit\', sans-serif'}}>
              Celebrando otro año de aventuras estelares
            </p>
<iconify-icon className="text-[#FFD700]" height="16" icon="solar:star-shine-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="absolute top-4 right-6 animate-pulse opacity-70">
<iconify-icon className="text-white" height="24" icon="solar:stars-linear" width="24"></iconify-icon>
</div>
<div className="absolute bottom-6 left-8 animate-pulse opacity-50 delay-700">
<iconify-icon className="text-[#C0C0C0]" height="20" icon="solar:planet-2-linear" width="20"></iconify-icon>
</div>
</div>
</div>

    </>
  );
}
