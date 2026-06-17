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
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      let t1 = setTimeout(() => { document.getElementById('scene1').classList.remove('active'); document.getElementById('scene2').classList.add('active'); }, 2500);
      let t2 = setTimeout(() => { document.getElementById('scene2').classList.remove('active'); document.getElementById('scene3').classList.add('active'); document.getElementById('scene3').style.opacity = '1'; }, 5500);
      let t3 = setTimeout(() => { const btn = document.querySelector('.enter-btn'); if (btn && !document.getElementById('intro').classList.contains('done')) { btn.style.animation = 'fadeIn 0.5s forwards, pulse 2s infinite'; } }, 7500);
      let t4 = setTimeout(enterSite, 12000);
      function enterSite() { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); const intro = document.getElementById('intro'); const site = document.getElementById('site'); intro.classList.add('blur-flash'); setTimeout(() => { intro.classList.add('done'); site.classList.remove('opacity-0'); document.body.style.overflow = 'auto'; }, 400); setTimeout(() => intro.style.display = 'none', 1000); }
      document.body.style.overflow = 'hidden';
    
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
      

<div className="fixed inset-0 z-[100] bg-black" id="intro">
<button className="z-[1000] mono uppercase transition-colors text-xs tracking-widest border pt-2 pr-4 pb-2 pl-4 absolute top-6 right-6 hover:text-white text-white/50 bg-black/50 border-white/20" onclick="enterSite()">
        [ PASSER L'INTRO ]
      </button>

<div className="scene scene-1 vignette" id="scene1">
<div className="absolute inset-0 bg-[#020202] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-10 pointer-events-none" style={{background: 'radial-gradient(ellipse at center, transparent 0%, #000 80%)', opacity: '0.8'}}></div>
<div className="car-front-container relative w-full max-w-[800px] px-10 z-0">
<svg className="w-full drop-shadow-2xl" viewbox="0 0 600 300">
<path d="M 150 180 Q 200 120 300 110 Q 400 120 450 180 L 520 220 C 540 240, 530 260, 500 260 L 100 260 C 70 260, 60 240, 80 220 Z" fill="#040404" stroke="#111" strokeWidth="1"></path>
<path d="M 180 170 Q 300 130 420 170 L 400 180 Q 300 150 200 180 Z" fill="#000"></path>
<g className="headlights">
<rect fill="#fff" filter="drop-shadow(0 0 15px #e0f2fe)" height="12" rx="6" width="60" x="120" y="210"></rect>
<polygon fill="url(#frontBeam)" opacity="0.3" points="130,216 50,400 250,400"></polygon>
<rect fill="#fff" filter="drop-shadow(0 0 15px #e0f2fe)" height="12" rx="6" width="60" x="420" y="210"></rect>
<polygon fill="url(#frontBeam)" opacity="0.3" points="470,216 350,400 550,400"></polygon>
</g>
<ellipse cx="300" cy="270" fill="rgba(255,255,255,0.02)" filter="blur(5px)" rx="200" ry="10"></ellipse>
<ellipse className="headlights" cx="150" cy="270" fill="rgba(255,255,255,0.2)" filter="blur(10px)" rx="50" ry="5"></ellipse>
<ellipse className="headlights" cx="450" cy="270" fill="rgba(255,255,255,0.2)" filter="blur(10px)" rx="50" ry="5"></ellipse>
<defs>
<lineargradient id="frontBeam" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="rgba(224, 242, 254, 0.8)"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="absolute top-6 left-6 mono text-xs z-20 text-white/40">
<div>● REC</div>
<div className="mt-1">PARIS UNDERGROUND</div>
<div className="mt-1">URBAN LUXURY</div>
</div>
<div className="absolute bottom-6 left-6 mono text-xs z-20 text-white/40">
            SCENE 01 / 03
          </div>
<div className="camera-flashes"></div>
<div className="absolute top-1/4 right-1/4 opacity-10 blur-[1px] transform rotate-12 scale-150 pointer-events-none">
<span className="display text-6xl text-white">SNÖRES</span>
</div>
<div className="absolute bottom-1/3 left-1/4 opacity-10 blur-[2px] transform -rotate-6 scale-110 pointer-events-none">
<span className="mono text-4xl text-white">NEW DROP</span>
</div>
</div>
</div>

<div className="scene scene-2 bg-[#050508] overflow-hidden" id="scene2">
<div className="absolute inset-0">
<div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-[#020204] to-transparent z-0"></div>
<div className="road-lines-container absolute bottom-0 left-0 w-full h-[40%] perspective-[600px] z-0">
<div className="road-lines absolute top-0 left-[-50%] w-[200%] h-full transform rotateX(60deg) origin-top border-t shadow-[inset_0_50px_50px_rgba(0,0,0,0.8)] border-white/5"></div>
</div>
<div className="fog opacity-30"></div>
<div className="rain opacity-50"></div>
<div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[1000px] h-[400px] z-10 flex items-center justify-center">
<div className="car-side-container relative w-[800px]">
<svg className="w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.9)]" viewbox="0 0 800 300">
<polygon fill="url(#sideBeam)" opacity="0.4" points="650,210 1200,280 1200,180"></polygon>
<path d="M 120 220 L 100 170 Q 120 120 250 110 Q 350 100 500 130 L 680 170 Q 720 180 700 220 C 690 240, 680 240, 650 240 L 150 240 C 130 240, 110 240, 120 220 Z" fill="#08080a" stroke="#1a1a24" strokeWidth="2"></path>
<path d="M 280 115 Q 380 110 480 135 L 450 160 L 250 160 Z" fill="#000" stroke="#111"></path>
<g transform="translate(220, 240)">
<circle cx="0" cy="0" fill="#050505" r="45" stroke="#111" strokeWidth="5"></circle>
<g className="wheel">
<circle cx="0" cy="0" fill="none" r="30" stroke="#333" stroke-dasharray="20 10" strokeWidth="4"></circle>
<circle cx="0" cy="0" fill="#222" r="10"></circle>
</g>
</g>
<g transform="translate(580, 240)">
<circle cx="0" cy="0" fill="#050505" r="45" stroke="#111" strokeWidth="5"></circle>
<g className="wheel">
<circle cx="0" cy="0" fill="none" r="30" stroke="#333" stroke-dasharray="20 10" strokeWidth="4"></circle>
<circle cx="0" cy="0" fill="#222" r="10"></circle>
</g>
</g>
<ellipse cx="680" cy="200" fill="#fff" filter="drop-shadow(0 0 10px #fff)" rx="15" ry="5"></ellipse>
<ellipse className="brake-light" cx="100" cy="180" fill="#f00" rx="8" ry="15"></ellipse>
<g className="trunk-hatch">
<path d="M 250 110 Q 150 115 100 170 L 120 180 Q 170 130 250 120 Z" fill="#08080a" stroke="#1a1a24"></path>
</g>
<g className="trunk-glow" transform="translate(140, 140) scale(0.3)">
<defs>
<radialgradient id="trunkLight">
<stop offset="0%" stop-color="#fff">
<stop offset="100%" stop-color="transparent"></stop>
</stop>
</radialgradient>
</defs>
<circle cx="140" cy="180" fill="url(#trunkLight)" opacity="0.6" r="250"></circle>
<g style={{animation: 'floatUp1 4s ease-out forwards', animationDelay: '4.5s', opacity: '0'}}>
<path d="M70 60 L110 30 L140 50 L170 30 L210 60 L240 90 L220 130 L195 115 L195 290 L85 290 L85 115 L60 130 L40 90 Z" fill="#111" stroke="#444" strokeWidth="4"></path>
<text fill="#fff" fontFamily="Bebas Neue" fontSize="40" letter-spacing="2" text-anchor="middle" x="140" y="180">
                      SNÖRES
                    </text>
</g>
<g style={{animation: 'floatUp2 4s ease-out forwards', animationDelay: '4.7s', opacity: '0', transformOrigin: '140px 180px'}}>
<path d="M100 20 L140 0 L180 20 L200 60 L240 90 L220 130 L195 115 L195 290 L85 290 L85 115 L60 130 L40 90 L80 60 Z" fill="#222" stroke="#555" strokeWidth="4"></path>
</g>
<g style={{animation: 'floatUp3 4s ease-out forwards', animationDelay: '4.9s', opacity: '0', transformOrigin: '140px 180px'}}>
<rect fill="#0a0a0a" height="100" rx="5" stroke="#fff" strokeWidth="2" width="80" x="100" y="140"></rect>
<text fill="#fff" fontFamily="JetBrains Mono" fontSize="16" text-anchor="middle" x="140" y="195">
                      TAG
                    </text>
</g>
</g>
<defs>
<lineargradient id="sideBeam" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="rgba(224, 242, 254, 0.6)"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>
<div className="absolute bottom-20 left-6 mono text-xs text-white/40">
<div>PARKING SOUTERRAIN</div>
<div className="mt-1">NIVEAU -03</div>
</div>
<div className="absolute bottom-6 left-6 mono text-xs text-white/40">
            SCENE 02 / 03
          </div>
</div>
</div>

<div className="scene scene-3" id="scene3" style={{animationDelay: '9s', animationDuration: '1.5s'}}>
<div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-black">
<div className="flex opacity-0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center" style={{animation: 'fadeIn 2s 10s forwards'}}>
<div className="tee-container scale-[1.5] opacity-20 blur-sm mix-blend-screen pointer-events-none">
<svg className="tee-3d filter drop-shadow-2xl" fill="none" viewbox="0 0 280 320" width="600">
<defs>
<lineargradient id="teeGrad" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#111"></stop>
<stop offset="50%" stop-color="#222"></stop>
<stop offset="100%" stop-color="#050505"></stop>
</lineargradient>
<lineargradient id="teeShine" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="rgba(255,255,255,0.4)"></stop>
<stop offset="30%" stop-color="rgba(255,255,255,0)"></stop>
<stop offset="70%" stop-color="rgba(255,255,255,0)"></stop>
<stop offset="100%" stop-color="rgba(255,255,255,0.2)"></stop>
</lineargradient>
</defs>
<path d="M70 60 L110 30 L140 50 L170 30 L210 60 L240 90 L220 130 L195 115 L195 290 L85 290 L85 115 L60 130 L40 90 Z" fill="url(#teeGrad)" stroke="#444"></path>
<path d="M70 60 L110 30 L140 50 L170 30 L210 60 L240 90 L220 130 L195 115 L195 290 L85 290 L85 115 L60 130 L40 90 Z" fill="url(#teeShine)"></path>
<text fill="#fff" fontFamily="Bebas Neue" fontSize="32" letter-spacing="2" text-anchor="middle" x="140" y="180">
                  SNÖRES
                </text>
</svg>
</div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_50%)] pointer-events-none"></div>
</div>
<div className="text-center space-y-3 md:space-y-5 z-10 relative">
<div className="reveal-text">
<span className="display text-3xl md:text-5xl tracking-tight uppercase text-white/70" style={{animationDelay: '6s', opacity: '0', animationFillMode: 'forwards'}}>
                NEW DROP
              </span>
</div>
<div className="reveal-text md:pt-4 pt-2">
<span className="display text-6xl md:text-9xl tracking-tight text-white drop-shadow-[0_0_50px_rgba(255,255,255,0.8)]" style={{animationDelay: '6.2s', opacity: '0', animationFillMode: 'forwards'}}>
                SNÖRES
              </span>
</div>
<div className="reveal-text md:pt-4 pt-2">
<span className="mono text-xs md:text-sm tracking-[0.4em] uppercase text-white/50" style={{animationDelay: '6.4s', opacity: '0', animationFillMode: 'forwards'}}>
                LIMITED PIECES
              </span>
</div>
</div>
<button className="enter-btn md:mt-16 mono z-10 hover:border-white hover:bg-white hover:text-black text-xs text-white tracking-[0.4em] opacity-0 border-white/30 border mt-12 pt-4 pr-10 pb-4 pl-10 relative" onclick="enterSite()">
            [ SHOP NOW ]
          </button>
</div>
</div>
</div>
<style>
      @keyframes fadeIn { to { opacity: 1; } }
      .reveal-text span { animation-name: revealUpFade !important; }
      @keyframes revealUpFade {
        0% { transform: translateY(100%); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
      }
    </style>

<main className="transition-opacity duration-1000" id="site">

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b bg-black/60 border-white/5">
<div className="max-w-[1600px] mx-auto px-5 md:px-10 py-4 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="display text-2xl tracking-tight" href="#">SNÖRES</a>
<div className="hidden md:flex items-center gap-6 text-xs mono text-white/60">
<a className="transition hover:text-white" href="#">BOUTIQUE</a>
<a className="transition hover:text-white" href="#">DROPS</a>
<a className="transition hover:text-white" href="#">PROMOS</a>
<a className="transition hover:text-white" href="#">LOOKBOOK</a>
</div>
</div>
<div className="flex items-center gap-5 text-white/80">
<iconify-icon className="cursor-pointer hover:text-white" icon="solar:magnifer-linear" width="20"></iconify-icon>
<iconify-icon className="cursor-pointer hover:text-white" icon="solar:user-linear" width="20"></iconify-icon>
<div className="relative cursor-pointer hover:text-white">
<iconify-icon className="" icon="solar:bag-linear" width="20"></iconify-icon>
<span className="absolute -top-1 -right-2 text-[9px] mono w-4 h-4 rounded-full flex items-center justify-center bg-white text-black">
                2
              </span>
</div>
</div>
</div>
</nav>

<section className="relative h-screen flex items-end overflow-hidden pt-20">
<div className="absolute inset-0 z-0">
<img alt="Streetwear Collection" className="w-full h-full object-cover brightness-50" src="https://images.unsplash.com/photo-1512353087810-254cb9859f6f?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80"></div>
</div>
<div className="md:px-10 md:pb-32 flex flex-col text-center w-full max-w-[1600px] z-10 mx-auto px-5 pb-20 relative items-center justify-center h-full">
<span className="mono text-xs md:text-sm tracking-[0.4em] text-white/70 mb-4 uppercase">
            Nouvelle Collection
          </span>
<h2 className="display text-6xl md:text-9xl tracking-tight text-white mb-8">
            SNÖRES
          </h2>
<div className="flex flex-wrap justify-center gap-4">
<button className="mono transition hover:bg-neutral-200 text-xs font-bold text-black tracking-[0.4em] bg-white pt-5 pr-8 pb-5 pl-8 rounded-sm uppercase">
              Acheter Maintenant
            </button>
<button className="mono transition hover:bg-white hover:text-black text-xs font-bold text-white tracking-[0.4em] bg-black/50 backdrop-blur-md border border-white/30 pt-5 pr-8 pb-5 pl-8 rounded-sm uppercase">
              Découvrir
            </button>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 mono text-[10px] tracking-widest text-white/40 z-10">
<span>SCROLLER POUR EXPLORER</span>
<iconify-icon className="animate-bounce" icon="solar:arrow-down-linear"></iconify-icon>
</div>
</section>

<section className="border-y py-5 overflow-hidden border-white/10 bg-black">
<div className="marquee whitespace-nowrap">
<div className="flex items-center gap-12 pr-12 display text-3xl tracking-tight">
<span className="font-medium text-cyan-400">
              LIVRAISON GRATUITE DÈS 100€
            </span>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<span className="font-medium">2 T-SHIRTS ACHETÉS = -20% DE RABAIS</span>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<span className="font-medium text-red-400">
              DROP EXCLUSIF — QUANTITÉS LIMITÉES
            </span>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<span className="font-medium">OFFRE LIMITÉE</span>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<span className="font-medium text-cyan-400">
              LIVRAISON GRATUITE DÈS 100€
            </span>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<span className="font-medium">2 T-SHIRTS ACHETÉS = -20% DE RABAIS</span>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<span className="font-medium text-red-400">
              DROP EXCLUSIF — QUANTITÉS LIMITÉES
            </span>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<span className="font-medium">OFFRE LIMITÉE</span>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
</div>
</section>

<section className="py-24 md:py-40 px-5 md:px-10 max-w-[1600px] mx-auto">
<div className="flex items-end justify-between mb-16">
<div>
<div className="mono text-xs mb-3 tracking-[0.2em] text-white/50">
              / 01 — MEILLEURES VENTES
            </div>
<h2 className="display text-6xl md:text-8xl tracking-tight text-shadow-glow">
              MEILLEURES VENTES
            </h2>
</div>
<a className="hidden md:flex items-center gap-2 mono text-xs tracking-[0.2em] border-b pb-1 transition border-white/30 hover:text-white/60 hover:border-white/60" href="#">
            VOIR TOUT
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">

<div className="product-card group cursor-pointer">
<div className="relative aspect-[4/5] bg-gradient-to-br overflow-hidden mb-4 group-hover:border-white/20 transition-colors border from-neutral-900 to-black border-white/5">
<div className="absolute top-4 left-4 mono text-[10px] px-3 py-1.5 z-10 font-bold tracking-widest bg-white text-black">
                BESTSELLER
              </div>
<div className="absolute top-4 right-4 flex gap-1 z-10">
<span className="w-2 h-2 rounded-full bg-white"></span>
<span className="w-2 h-2 rounded-full bg-neutral-500"></span>
<span className="w-2 h-2 rounded-full border bg-neutral-800 border-white/20"></span>
</div>
<div className="product-img w-full h-full">
<img alt="Core Tee" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&amp;q=80"/>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 flex gap-2 from-black via-black/80">
<button className="flex-1 mono text-xs py-3 font-bold tracking-widest transition bg-white text-black hover:bg-blue-200">
                  ACHETER MAINTENANT
                </button>
</div>
</div>
<div className="flex flex-col mt-4">
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium tracking-tight">
                    SNÖRES Core Tee
                  </h3>
<p className="mono text-[10px] mt-1 uppercase tracking-widest flex items-center gap-1 text-indigo-400">
<span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></span>
                    Plus que 12 en stock
                  </p>
</div>
<p className="mono text-xl font-semibold">€65</p>
</div>
<div className="mt-4 flex items-center gap-2 mono text-[10px] text-white/50">
<span className="mr-1">TAILLES:</span>
<button className="border border-white/20 hover:border-white hover:text-white hover:bg-white/10 px-2.5 py-1.5 transition rounded-sm">
                  S
                </button>
<button className="border border-white/20 hover:border-white hover:text-white hover:bg-white/10 px-2.5 py-1.5 transition rounded-sm bg-white/10 text-white border-white/40">
                  M
                </button>
<button className="border border-white/20 hover:border-white hover:text-white hover:bg-white/10 px-2.5 py-1.5 transition rounded-sm">
                  L
                </button>
<button className="border border-white/20 hover:border-white hover:text-white hover:bg-white/10 px-2.5 py-1.5 transition rounded-sm">
                  XL
                </button>
</div>
</div>
</div>

<div className="product-card group cursor-pointer">
<div className="relative aspect-[4/5] bg-gradient-to-br overflow-hidden mb-4 group-hover:border-white/20 transition-colors border from-cyan-800 to-cyan-950 border-white/5">
<div className="absolute top-4 right-4 flex gap-1 z-10">
<span className="w-2 h-2 rounded-full bg-[#e8e2d5]"></span>
<span className="w-2 h-2 rounded-full bg-cyan-700"></span>
</div>
<div className="product-img w-full h-full">
<img alt="Hoodie" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&amp;q=80"/>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 flex gap-2 from-black via-black/80">
<button className="flex-1 mono text-xs py-3 font-bold tracking-widest transition bg-white text-black hover:bg-blue-200">
                  ACHETER MAINTENANT
                </button>
</div>
</div>
<div className="flex flex-col mt-4">
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium tracking-tight">
                    SNÖRES Heavyweight Hoodie
                  </h3>
<p className="mono text-[10px] mt-1 uppercase tracking-widest text-white/50">
                    Vintage Cream
                  </p>
</div>
<p className="mono text-xl font-semibold">€145</p>
</div>
<div className="mt-4 flex items-center gap-2 mono text-[10px] text-white/50">
<span className="mr-1">TAILLES:</span>
<button className="border border-white/20 hover:border-white hover:text-white hover:bg-white/10 px-2.5 py-1.5 transition rounded-sm">
                  M
                </button>
<button className="border border-white/20 hover:border-white hover:text-white hover:bg-white/10 px-2.5 py-1.5 transition rounded-sm">
                  L
                </button>
<button className="border border-white/20 hover:border-white hover:text-white hover:bg-white/10 px-2.5 py-1.5 transition rounded-sm">
                  XL
                </button>
<button className="border border-white/20 hover:border-white hover:text-white hover:bg-white/10 px-2.5 py-1.5 transition rounded-sm">
                  XXL
                </button>
</div>
</div>
</div>

<div className="product-card group cursor-pointer">
<div className="relative aspect-[4/5] bg-gradient-to-br overflow-hidden mb-4 group-hover:border-white/20 transition-colors border from-neutral-800 to-neutral-950 border-white/5">
<div className="absolute top-4 left-4 mono text-[10px] px-3 py-1.5 z-10 font-bold tracking-widest bg-indigo-600 text-white">
                LOW STOCK
              </div>
<div className="absolute top-4 right-4 flex gap-1 z-10">
<span className="w-2 h-2 rounded-full border bg-neutral-900 border-white/20"></span>
<span className="w-2 h-2 rounded-full bg-cyan-600"></span>
</div>
<div className="product-img w-full h-full">
<img alt="Cargo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&amp;q=80"/>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 flex gap-2 from-black via-black/80">
<button className="flex-1 mono text-xs py-3 font-bold tracking-widest transition bg-white text-black hover:bg-blue-200">
                  ACHETER MAINTENANT
                </button>
</div>
</div>
<div className="flex flex-col mt-4">
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium tracking-tight">
                    SNÖRES Cargo Pants
                  </h3>
<p className="mono text-[10px] mt-1 uppercase tracking-widest flex items-center gap-1 text-indigo-400">
<span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></span>
                    Plus que 4 en stock
                  </p>
</div>
<p className="mono text-xl font-semibold">€120</p>
</div>
<div className="mt-4 flex items-center gap-2 mono text-[10px] text-white/50">
<span className="mr-1">TAILLES:</span>
<button className="border border-white/20 hover:border-white hover:text-white hover:bg-white/10 px-2.5 py-1.5 transition rounded-sm">
                  28
                </button>
<button className="border border-white/20 hover:border-white hover:text-white hover:bg-white/10 px-2.5 py-1.5 transition rounded-sm bg-white/10 text-white border-white/40">
                  30
                </button>
<button className="border border-white/20 hover:border-white hover:text-white hover:bg-white/10 px-2.5 py-1.5 transition rounded-sm">
                  32
                </button>
<button className="border border-white/20 hover:border-white hover:text-white hover:bg-white/10 px-2.5 py-1.5 transition rounded-sm">
                  34
                </button>
</div>
</div>
</div>

<div className="product-card group cursor-pointer">
<div className="relative aspect-[4/5] bg-gradient-to-br overflow-hidden mb-4 group-hover:border-white/20 transition-colors border from-neutral-800 to-black border-white/5">
<div className="absolute top-4 right-4 flex gap-1 z-10">
<span className="w-2 h-2 rounded-full border bg-black border-white/20"></span>
</div>
<div className="product-img w-full h-full">
<img alt="Hat" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1622445272461-c6580cab8755?w=800&amp;q=80"/>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 flex gap-2 from-black via-black/80">
<button className="flex-1 mono text-xs py-3 font-bold tracking-widest transition bg-white text-black hover:bg-blue-200">
                  ACHETER MAINTENANT
                </button>
</div>
</div>
<div className="flex flex-col mt-4">
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium tracking-tight">
                    SNÖRES Bucket Hat
                  </h3>
<p className="mono text-[10px] mt-1 uppercase tracking-widest text-white/50">
                    Noir
                  </p>
</div>
<p className="mono text-xl font-semibold">€55</p>
</div>
<div className="mt-4 flex items-center gap-2 mono text-[10px] text-white/50">
<span className="mr-1">TAILLES:</span>
<button className="border border-white/20 hover:border-white hover:text-white hover:bg-white/10 px-2.5 py-1.5 transition rounded-sm bg-white/10 text-white border-white/40">
                  TU (Taille Unique)
                </button>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 md:py-32 overflow-hidden border-y border-white/10">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-black to-neutral-950"></div>
<div className="absolute inset-0 fog"></div>
<div className="relative max-w-[1600px] mx-auto px-5 md:px-10">
<div className="flex items-center gap-3 mb-6">
<span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
<span className="mono text-xs text-indigo-400">
              DROP EN DIRECT — SE TERMINE DANS 47:23:08
            </span>
</div>
<h2 className="display text-6xl md:text-9xl tracking-tight mb-12 glitch" data-text="DROP.EXCLUSIF">
            DROP.EXCLUSIF
          </h2>
<div className="grid md:grid-cols-3 gap-6">
<div className="product-card group cursor-pointer md:col-span-2">
<div className="relative aspect-[16/10] border overflow-hidden group bg-neutral-900 border-white/5">
<div className="absolute top-4 left-4 mono text-xs px-3 py-1.5 z-10 font-bold bg-white text-black">
                  / 001 — CHROME EDITION
                </div>
<div className="product-img w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-800 to-black">
<h3 className="display chrome-logo text-7xl md:text-9xl tracking-tight transition-transform duration-500 group-hover:scale-105">
                    SNÖRES
                  </h3>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t to-transparent flex flex-col md:flex-row justify-between md:items-end from-black gap-4 z-20">
<div>
<p className="text-xl font-medium">Chrome Logo Tee</p>
<p className="mono text-xs mt-1 uppercase tracking-widest flex items-center gap-1 text-indigo-400">
<span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></span>
                      PLUS QUE 22
                    </p>
<div className="mt-4 flex items-center gap-2 mono text-[10px] text-white/50">
<span className="mr-1">TAILLES:</span>
<button className="border border-white/20 hover:border-white hover:text-white px-2.5 py-1.5 transition rounded-sm bg-black/40 backdrop-blur-md">
                        S
                      </button>
<button className="border border-white/20 hover:border-white hover:text-white px-2.5 py-1.5 transition rounded-sm bg-black/40 backdrop-blur-md">
                        M
                      </button>
<button className="border border-white/20 hover:border-white hover:text-white px-2.5 py-1.5 transition rounded-sm bg-black/40 backdrop-blur-md">
                        L
                      </button>
</div>
</div>
<div className="text-left md:text-right flex flex-row md:flex-col items-center md:items-end justify-between md:justify-end gap-4">
<p className="mono text-xl font-bold">€95</p>
<button className="px-6 py-2.5 mono text-xs font-bold transition bg-white text-black hover:bg-neutral-200 rounded-sm">
                      ACHETER MAINTENANT
                    </button>
</div>
</div>
</div>
</div>
<div className="product-card group cursor-pointer">
<div className="relative aspect-[4/5] md:aspect-auto md:h-full border overflow-hidden group bg-indigo-950/20 border-white/5">
<div className="absolute top-4 left-4 mono text-xs px-3 py-1.5 z-10 font-bold bg-indigo-600 text-white">
                  / 002 — BLOOD MOON
                </div>
<div className="product-img w-full h-full">
<img alt="Blood Moon" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&amp;q=80"/>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t to-transparent from-black z-20">
<div className="flex justify-between items-start mb-4 flex-col gap-2">
<div className="flex justify-between w-full items-start">
<div>
<p className="text-xl font-medium">Blood Moon Tee</p>
<p className="mono text-xs mt-1 uppercase text-white/50">
                          100 Pièces dans le monde
                        </p>
</div>
<p className="mono text-xl font-bold">€110</p>
</div>
<div className="flex items-center gap-2 mono text-[10px] text-white/50 w-full mt-2">
<button className="border border-white/20 hover:border-white hover:text-white flex-1 py-1.5 transition rounded-sm bg-black/40 backdrop-blur-md">
                        M
                      </button>
<button className="border border-white/20 hover:border-white hover:text-white flex-1 py-1.5 transition rounded-sm bg-white/10 text-white border-white/40 backdrop-blur-md">
                        L
                      </button>
<button className="border border-white/20 hover:border-white hover:text-white flex-1 py-1.5 transition rounded-sm bg-black/40 backdrop-blur-md">
                        XL
                      </button>
</div>
</div>
<button className="w-full py-3 mono text-xs font-bold transition bg-white text-black hover:bg-neutral-200 rounded-sm">
                    ACHETER MAINTENANT
                  </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-5 md:px-10 max-w-[1600px] mx-auto">
<div className="grid md:grid-cols-2 gap-6 items-center">
<div>
<div className="mono text-xs mb-3 text-white/50">
              / 03 — FILM VISUEL
            </div>
<h2 className="display text-5xl md:text-7xl tracking-tight mb-6">
              PARIS
              <br/>
              AFTER DARK.
            </h2>
<p className="text-sm leading-relaxed max-w-md text-white/60">
              Tourné en 35mm dans les rues du 18ème arrondissement. SNÖRES n'est
              pas qu'une marque. C'est une fréquence. Née dans l'underground,
              portée dans le monde entier.
            </p>
<button className="mt-8 px-8 py-4 border mono text-xs tracking-[0.3em] transition border-white/30 hover:bg-white hover:text-black">
              VOIR LE LOOKBOOK
            </button>
</div>
<div className="relative aspect-[4/5] bg-gradient-to-br overflow-hidden from-neutral-900 to-black">
<img alt="Lookbook" className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=800&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="cursor-pointer text-white/80 hover:text-white" icon="solar:play-circle-linear" width="80"></iconify-icon>
</div>
<div className="absolute bottom-4 left-4 mono text-xs text-white/60">
              FILM_001.MOV — 02:34
            </div>
</div>
</div>
</section>

<section className="border-t py-8 px-5 md:px-10 backdrop-blur-sm border-white/10 bg-neutral-950/50">
<div className="max-w-[1600px] mx-auto flex flex-wrap justify-center md:justify-between items-center gap-6 mono text-[10px] md:text-xs text-center tracking-[0.2em] text-white/60">
<div className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:shield-check-bold" width="20"></iconify-icon>
            PAIEMENT SÉCURISÉ
          </div>
<div className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:global-bold" width="20"></iconify-icon>
            LIVRAISON MONDIALE SUIVIE
          </div>
<div className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:refresh-circle-bold" width="20"></iconify-icon>
            RETOURS FACILES
          </div>
<div className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:star-fall-bold" width="20"></iconify-icon>
            DROPS LIMITÉS
          </div>
</div>
</section>
<section className="border-t py-20 px-5 md:px-10 border-white/10">
<div className="max-w-3xl mx-auto text-center">
<h2 className="display text-4xl md:text-6xl tracking-tight mb-4">
            REJOINS LE CULTE.
          </h2>
<p className="text-sm mb-8 text-white/50">
            Accès anticipé aux drops. Pas de spam. Pas de bruit.
          </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 bg-transparent border px-5 py-4 text-sm placeholder:text-white/30 focus:border-white outline-none border-white/20" placeholder="your@email.com" type="email"/>
<button className="px-8 py-4 mono text-xs tracking-[0.3em] bg-white text-black hover:bg-white/80">
              S'INSCRIRE
            </button>
</form>
</div>
</section>

<footer className="border-t py-12 px-5 md:px-10 border-white/10">
<div className="max-w-[1600px] mx-auto">
<div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
<h3 className="display text-6xl md:text-9xl tracking-tight">SNÖRES.</h3>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8 mono text-xs">
<div>
<p className="mb-3 text-white/40">BOUTIQUE</p>
<ul className="space-y-2">
<li>
<a className="hover:text-white/60" href="#">
                      Tous les produits
                    </a>
</li>
<li>
<a className="hover:text-white/60" href="#">Nouveautés</a>
</li>
<li>
<a className="hover:text-white/60" href="#">Promotions</a>
</li>
</ul>
</div>
<div>
<p className="mb-3 text-white/40">INFO</p>
<ul className="space-y-2">
<li><a className="hover:text-white/60" href="#">Livraison</a></li>
<li><a className="hover:text-white/60" href="#">Retours</a></li>
<li><a className="hover:text-white/60" href="#">Contact</a></li>
</ul>
</div>
<div>
<p className="mb-3 text-white/40">SOCIAL</p>
<ul className="space-y-2">
<li><a className="hover:text-white/60" href="#">Instagram</a></li>
<li><a className="hover:text-white/60" href="#">TikTok</a></li>
<li><a className="hover:text-white/60" href="#">YouTube</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-6 border-t mono text-xs border-white/10 text-white/40">
<p>© 2024 SNÖRES — PARIS</p>
<div className="flex flex-wrap items-center gap-4 opacity-70">
<iconify-icon icon="logos:visa" width="36"></iconify-icon>
<iconify-icon icon="logos:mastercard" width="28"></iconify-icon>
<iconify-icon icon="logos:paypal" width="24"></iconify-icon>
<iconify-icon icon="logos:apple-pay" width="36"></iconify-icon>
<iconify-icon icon="logos:google-pay" width="36"></iconify-icon>
<div className="flex items-center gap-1 px-2 py-1 rounded-sm bg-white">
<iconify-icon className="text-[#5A31F4]" icon="fontisto:shopping-bag" width="12"></iconify-icon>
<span className="text-[#5A31F4] font-bold text-[10px] font-sans tracking-tight">
                  Shop Pay
                </span>
</div>
</div>
<p>DES RUES. AU MONDE ENTIER.</p>
</div>
</div>
</footer>

<div className="md:hidden fixed bottom-0 left-0 right-0 z-40 mobile-cart backdrop-blur-xl border-t p-4 bg-black/95 border-white/10">
<button className="w-full mono text-xs tracking-[0.3em] py-4 flex items-center justify-center gap-3 font-bold bg-white text-black">
<iconify-icon icon="solar:bag-linear" width="16"></iconify-icon>
          ACHETER MAINTENANT — €65
        </button>
</div>
</main>


    </>
  );
}
