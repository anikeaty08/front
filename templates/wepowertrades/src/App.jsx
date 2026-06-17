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
      
<meta charset="utf-8" className=""/>
<meta className="" content="width=device-width, initial-scale=1.0" name="viewport"/>
<title className="">WePowerTrades | The Home Service Growth Engine</title>


<style>
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
    }

    .glass-card {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.05);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    }

    .glass-card:hover {
      border-color: rgba(255, 255, 255, 0.1);
      box-shadow: 0 0 30px rgba(6, 182, 212, 0.05);
    }

    .hero-glow-border {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.005) 100%);
      box-shadow: inset 0 0 100px -20px rgba(6, 182, 212, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.08);
      position: relative;
    }

    .hero-glow-border::before {
      content: '';
      position: absolute;
      inset: -1px;
      z-index: -1;
      border-radius: inherit;
      background: linear-gradient(to bottom, rgba(6, 182, 212, 0.3), transparent 40%);
      opacity: 0.3;
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: xor;
      -webkit-mask-composite: xor;
    }

    /* Refined background utility */
    .bg-deep-radial {
      background-color: #01161e;
      background-image:
        radial-gradient(circle at 50% -20%, rgba(6, 182, 212, 0.15) 0%, rgba(1, 22, 30, 0) 60%),
        linear-gradient(to bottom, #01161e 0%, #000d12 100%);
    }

    .text-glow {
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
    }

    .text-shadow-glow {
      text-shadow: 0 0 20px rgba(34, 211, 238, 0.5);
    }
  </style>
<style>
    @keyframes blob {
      0% {
        transform: translate(0px, 0px) scale(1);
      }

      33% {
        transform: translate(60px, -90px) scale(1.2);
      }

      66% {
        transform: translate(-50px, 50px) scale(0.85);
      }

      100% {
        transform: translate(0px, 0px) scale(1);
      }
    }

    .animate-blob {
      animation: blob 9s infinite;
    }

    .animation-delay-2000 {
      animation-delay: 2s;
    }

    .animation-delay-4000 {
      animation-delay: 4s;
    }

    @keyframes flowLine {
      0% {
        transform: translateY(-100%);
      }

      100% {
        transform: translateY(100%);
      }
    }

    .animate-flow {
      animation: flowLine 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
  </style>

<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-jakarta" rel="stylesheet"/>
<style id="all-fonts-style-font-jakarta">
    .font-jakarta {
      font-family: 'Plus Jakarta Sans', sans-serif !important;
    }
  </style>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-geist" rel="stylesheet"/>
<style id="all-fonts-style-font-geist">
    .font-geist {
      font-family: 'Geist', sans-serif !important;
    }
  </style>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-roboto" rel="stylesheet"/>
<style id="all-fonts-style-font-roboto">
    .font-roboto {
      font-family: 'Roboto', sans-serif !important;
    }
  </style>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-montserrat" rel="stylesheet"/>
<style id="all-fonts-style-font-montserrat">
    .font-montserrat {
      font-family: 'Montserrat', sans-serif !important;
    }
  </style>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-poppins" rel="stylesheet"/>
<style id="all-fonts-style-font-poppins">
    .font-poppins {
      font-family: 'Poppins', sans-serif !important;
    }
  </style>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&amp;display=swap" id="all-fonts-link-font-playfair" rel="stylesheet"/>
<style id="all-fonts-style-font-playfair">
    .font-playfair {
      font-family: 'Playfair Display', serif !important;
    }
  </style>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;500;600;700&amp;display=swap" id="all-fonts-link-font-instrument-serif" rel="stylesheet"/>
<style id="all-fonts-style-font-instrument-serif">
    .font-instrument-serif {
      font-family: 'Instrument Serif', serif !important;
    }
  </style>
<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&amp;display=swap" id="all-fonts-link-font-merriweather" rel="stylesheet"/>
<style id="all-fonts-style-font-merriweather">
    .font-merriweather {
      font-family: 'Merriweather', serif !important;
    }
  </style>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-bricolage" rel="stylesheet"/>
<style id="all-fonts-style-font-bricolage">
    .font-bricolage {
      font-family: 'Bricolage Grotesque', sans-serif !important;
    }
  </style>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-manrope" rel="stylesheet"/>
<style id="all-fonts-style-font-manrope">
    .font-manrope {
      font-family: 'Manrope', sans-serif !important;
    }
  </style>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-space-grotesk" rel="stylesheet"/>
<style id="all-fonts-style-font-space-grotesk">
    .font-space-grotesk {
      font-family: 'Space Grotesk', sans-serif !important;
    }
  </style>
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-work-sans" rel="stylesheet"/>
<style id="all-fonts-style-font-work-sans">
    .font-work-sans {
      font-family: 'Work Sans', sans-serif !important;
    }
  </style>
<link href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&amp;display=swap" id="all-fonts-link-font-pt-serif" rel="stylesheet"/>
<style id="all-fonts-style-font-pt-serif">
    .font-pt-serif {
      font-family: 'PT Serif', serif !important;
    }
  </style>
<link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-geist-mono" rel="stylesheet"/>
<style id="all-fonts-style-font-geist-mono">
    .font-geist-mono {
      font-family: 'Geist Mono', monospace !important;
    }
  </style>
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&amp;display=swap" id="all-fonts-link-font-space-mono" rel="stylesheet"/>
<style id="all-fonts-style-font-space-mono">
    .font-space-mono {
      font-family: 'Space Mono', monospace !important;
    }
  </style>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-quicksand" rel="stylesheet"/>
<style id="all-fonts-style-font-quicksand">
    .font-quicksand {
      font-family: 'Quicksand', sans-serif !important;
    }
  </style>
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-nunito" rel="stylesheet"/>
<style id="all-fonts-style-font-nunito">
    .font-nunito {
      font-family: 'Nunito', sans-serif !important;
    }
  </style>
<div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-96 h-96 md:w-[500px] md:h-[500px] bg-cyan-500/30 rounded-full blur-[100px] animate-blob mix-blend-screen">
</div>
<div className="absolute top-[20%] right-[-10%] w-96 h-96 md:w-[500px] md:h-[500px] bg-blue-600/30 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen">
</div>
<div className="absolute bottom-[-10%] left-[20%] w-96 h-96 md:w-[600px] md:h-[600px] bg-teal-500/30 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen">
</div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#01161e]/80 backdrop-blur-xl">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between relative">
<a className="flex items-center gap-3 group" href="#">
<div className="relative w-8 h-8 flex items-center justify-center bg-gradient-to-tr from-cyan-900 to-cyan-700 rounded-lg border border-white/10 shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300">
<iconify-icon className="text-white" icon="lucide:zap" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-white transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
            WePowerTrades
          </span>
</a>

<div className="hidden md:flex text-base font-semibold text-neutral-400 gap-x-8 gap-y-8 items-center">
<a className="hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" href="#problems">The Trap</a>
<a className="hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" href="#how-it-works">How it Works</a>
<a className="hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" href="#engine">The Trade Growth Engine</a>
<a className="hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" href="#tradie-hub">The Hub</a>
<a className="hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="group relative inline-flex h-8 items-center justify-center overflow-hidden rounded-md bg-white px-4 font-medium text-neutral-950 transition-all hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#01161e]" href="#book">
<span className="text-xs font-semibold">Get Started</span>
<div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-400 to-cyan-300 opacity-0 transition-opacity duration-500 group-hover:opacity-10">
</div>
</a>

<button className="md:hidden flex items-center justify-center w-8 h-8 rounded-md text-white hover:bg-white/10 transition-colors" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-full left-0 w-full bg-[#01161e]/95 backdrop-blur-xl border-b border-white/10 p-6 flex-col gap-4 md:hidden shadow-2xl z-50" id="mobile-menu">
<div className="flex flex-col space-y-4">
<a className="text-base font-semibold text-neutral-400 hover:text-white transition-colors" href="#problems" onclick="document.getElementById('mobile-menu').classList.add('hidden')">The Trap</a>
<a className="text-base font-semibold text-neutral-400 hover:text-white transition-colors" href="#how-it-works" onclick="document.getElementById('mobile-menu').classList.add('hidden')">How it Works</a>
<a className="text-base font-semibold text-neutral-400 hover:text-white transition-colors" href="#engine" onclick="document.getElementById('mobile-menu').classList.add('hidden')">The Trade Growth Engine</a>
<a className="text-base font-semibold text-neutral-400 hover:text-white transition-colors" href="#tradie-hub" onclick="document.getElementById('mobile-menu').classList.add('hidden')">The Hub</a>
<a className="text-base font-semibold text-neutral-400 hover:text-white transition-colors" href="#pricing" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Pricing</a>
</div>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-24 relative">

<div className="z-0 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[600px] bg-cyan-500/10 blur-[120px] rounded-[100%] pointer-events-none mix-blend-screen z-0">
</div>
<div className="sm:px-6 lg:px-8 flex flex-col max-w-7xl z-10 mr-auto ml-auto pr-4 pl-4 relative items-center">

<div className="hero-glow-border md:p-16 flex flex-col overflow-hidden text-center w-full max-w-5xl rounded-[3rem] pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm items-center">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-20 pointer-events-none" style={{}}></div>
<div className="inline-flex gap-2 text-[10px] uppercase font-semibold text-cyan-300 tracking-widest bg-cyan-950/30 border border-cyan-500/20 rounded-full mb-8 pt-1.5 pr-3 pb-1.5 pl-3 shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)] items-center backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
          Systemising UK Trades
        </div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.05] text-glow z-10 text-5xl font-semibold text-white tracking-tight mb-8 relative drop-shadow-xl">More Booked Jobs  <br/> <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-500">Less Stress</span></h1>
<p className="md:text-xl leading-relaxed z-10 text-lg font-light text-neutral-400 max-w-2xl mr-auto mb-10 ml-auto relative">We help UK trades business owners <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">increase conversions by 30%</span> and cut their <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">admin by 30% in 60 days</span>, or they <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">don’t pay</span>.</p>
<div className="flex flex-col sm:flex-row gap-4 z-10 w-full relative gap-x-4 gap-y-4 items-center justify-center">
<a className="group flex sm:w-auto items-center justify-center gap-2 overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_50px_-10px_rgba(34,211,238,0.8)] hover:ring-cyan-400/50 active:scale-95 text-base font-bold text-[#01161e] bg-gradient-to-b from-white via-white to-neutral-200 w-full rounded-xl ring-white/50 ring-1 pt-4 pr-9 pb-4 pl-9 relative shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)]" href="#book">
<div className="absolute inset-0 -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/80 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-[150%] z-0">
</div>
<span className="relative z-10 flex items-center gap-2">
        Let’s Talk
        <iconify-icon className="-mr-1 transition-transform duration-300 group-hover:translate-x-1" icon="lucide:arrow-right" width="18"></iconify-icon>
</span>
</a>
<a className="sm:w-auto hover:bg-white/10 transition-all flex items-center justify-center text-sm font-semibold text-white bg-white/5 w-full border-white/10 border rounded-lg pt-3.5 pr-8 pb-3.5 pl-8 backdrop-blur-sm" href="#engine">View The Trade Growth Engine </a>
</div>
</div>

<div className="flex flex-wrap gap-3 max-w-5xl mt-20 mr-auto ml-auto pr-4 pl-4 gap-x-3 gap-y-3 justify-center relative z-10">
<div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white hover:bg-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-default group backdrop-blur-md">
<iconify-icon className="text-neutral-500 group-hover:text-cyan-400 transition-colors" icon="lucide:wrench" strokeWidth="1.5" width="14"></iconify-icon>
<span>Plumbers</span>
</div>
<div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white hover:bg-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-default group backdrop-blur-md">
<iconify-icon className="text-neutral-500 group-hover:text-cyan-400 transition-colors" icon="lucide:zap" strokeWidth="1.5" width="14"></iconify-icon>
<span className="">Electricians</span>
</div>
<div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white hover:bg-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-default group backdrop-blur-md">
<iconify-icon className="text-neutral-500 group-hover:text-cyan-400 transition-colors" icon="lucide:thermometer-sun" strokeWidth="1.5" width="14"></iconify-icon>
<span className="">HVAC</span>
</div>
<div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white hover:bg-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-default group backdrop-blur-md">
<iconify-icon className="text-neutral-500 group-hover:text-cyan-400 transition-colors" icon="lucide:hammer" strokeWidth="1.5" width="14"></iconify-icon>
<span className="">Builders</span>
</div>
<div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white hover:bg-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-default group backdrop-blur-md">
<iconify-icon className="text-neutral-500 group-hover:text-cyan-400 transition-colors" icon="lucide:home" strokeWidth="1.5" width="14"></iconify-icon>
<span className="">Roofers</span>
</div>
<div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white hover:bg-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-default group backdrop-blur-md">
<iconify-icon className="text-neutral-500 group-hover:text-cyan-400 transition-colors" icon="lucide:leaf" strokeWidth="1.5" width="14"></iconify-icon>
<span className="">Landscapers</span>
</div>
<div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white hover:bg-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-default group backdrop-blur-md">
<iconify-icon className="text-neutral-500 group-hover:text-cyan-400 transition-colors" icon="lucide:ruler" strokeWidth="1.5" width="14"></iconify-icon>
<span className="">Carpenters</span>
</div>
<div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white hover:bg-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-default group backdrop-blur-md">
<iconify-icon className="text-neutral-500 group-hover:text-cyan-400 transition-colors" icon="lucide:brush" strokeWidth="1.5" width="14"></iconify-icon>
<span>Painters</span>
</div>
<div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white hover:bg-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-default group backdrop-blur-md">
<iconify-icon className="text-neutral-500 group-hover:text-cyan-400 transition-colors" icon="lucide:sparkles" strokeWidth="1.5" width="14"></iconify-icon>
<span className="">Cleaners</span>
</div>
<div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white hover:bg-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-default group backdrop-blur-md">
<iconify-icon className="text-neutral-500 group-hover:text-cyan-400 transition-colors" icon="lucide:layers" strokeWidth="1.5" width="14"></iconify-icon>
<span className="">Flooring</span>
</div>
<div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white hover:bg-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-default group backdrop-blur-md">
<iconify-icon className="text-neutral-500 group-hover:text-cyan-400 transition-colors" icon="lucide:sun" strokeWidth="1.5" width="14"></iconify-icon>
<span>Solar</span>
</div>
<div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white hover:bg-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-default group backdrop-blur-md">
<iconify-icon className="text-neutral-500 group-hover:text-cyan-400 transition-colors" icon="lucide:maximize" strokeWidth="1.5" width="14"></iconify-icon>
<span className="">Glaziers</span>
</div>
</div>
</div>
</section>

<section className="bg-[#000d12] border-white/5 border-t pt-24 pb-24 relative" id="problems">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-16 md:text-center max-w-2xl mx-auto">
<h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight mb-4">
          The
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-red-600">
              "Tradie Trap"
            </span>
</h2>
<p className="text-lg text-white">Thinking you need more customers… when what’s really breaking you is the
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-red-600">lack of systems</span>.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-x-6 gap-y-6">

<div className="glass-card group hover:-translate-y-1 hover:bg-red-500/[0.03] hover:border-red-500/30 hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.15)] transition-all duration-300 rounded-2xl p-6 relative">
<div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none">
</div>
<div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-6 group-hover:scale-110 group-hover:bg-red-500/20 group-hover:shadow-[0_0_15px_-3px_rgba(239,68,68,0.3)] transition-all duration-300 relative z-10">
<iconify-icon icon="lucide:phone-missed" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3 relative z-10 group-hover:text-red-100 transition-colors">
            Missed Call = Lost Cash
          </h3>
<p className="leading-relaxed group-hover:text-neutral-300 transition-colors text-sm text-neutral-400 z-10 relative">
            You're on the tools. Phone rings. You miss it. They call the next guy on Google. You just lost £1000+.</p>
</div>

<div className="glass-card group hover:-translate-y-1 hover:bg-orange-500/[0.03] hover:border-orange-500/30 hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.15)] transition-all duration-300 rounded-2xl p-6 relative">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none">
</div>
<div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 group-hover:bg-orange-500/20 group-hover:shadow-[0_0_15px_-3px_rgba(249,115,22,0.3)] transition-all duration-300 relative z-10">
<iconify-icon className="" icon="lucide:file-clock" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3 relative z-10 group-hover:text-orange-100 transition-colors">
            The "9PM Shift" Trap
          </h3>
<p className="leading-relaxed group-hover:text-neutral-300 transition-colors z-10 text-sm text-neutral-400 relative">
            You put down the tools, but the work isn't done. Quoting and invoicing at night isn't "hustle" it's a second
            unpaid shift that steals your family time.</p>
</div>

<div className="glass-card group hover:-translate-y-1 hover:bg-yellow-500/[0.03] hover:border-yellow-500/30 hover:shadow-[0_0_30px_-5px_rgba(234,179,8,0.15)] transition-all duration-300 rounded-2xl p-6 relative">
<div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none">
</div>
<div className="w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 mb-6 group-hover:scale-110 group-hover:bg-yellow-500/20 group-hover:shadow-[0_0_15px_-3px_rgba(234,179,8,0.3)] transition-all duration-300 relative z-10">
<iconify-icon className="" icon="lucide:message-square" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="z-10 group-hover:text-yellow-100 transition-colors text-lg font-semibold text-white mb-3 relative">
            Leads Scattered Everywhere</h3>
<p className="text-sm leading-relaxed text-neutral-400 group-hover:text-neutral-300 transition-colors relative z-10">
            You spend half your day scrolling old messages trying to remember who said what. Jobs slip through the
            cracks before you even price them.
          </p>
</div>

<div className="glass-card group hover:-translate-y-1 hover:bg-rose-500/[0.03] hover:border-rose-500/30 hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.15)] transition-all duration-300 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none">
</div>
<div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-6 group-hover:scale-110 group-hover:bg-rose-500/20 group-hover:shadow-[0_0_15px_-3px_rgba(244,63,94,0.3)] transition-all duration-300 relative z-10">
<iconify-icon className="" icon="lucide:heart-crack" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3 relative z-10 group-hover:text-rose-100 transition-colors">
            Missed Family Moments
          </h3>
<p className="leading-relaxed group-hover:text-neutral-300 transition-colors z-10 text-sm text-neutral-400 relative">
            You get home late again, bedtime missed, dinner cold. The business was meant to give you freedom but right
            now it's taking more from your life than it's giving. </p>
</div>

<div className="glass-card group hover:-translate-y-1 hover:bg-purple-500/[0.03] hover:border-purple-500/30 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)] transition-all duration-300 rounded-2xl p-6 relative">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none">
</div>
<div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:shadow-[0_0_15px_-3px_rgba(168,85,247,0.3)] transition-all duration-300 relative z-10">
<iconify-icon icon="lucide:brain-circuit" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3 relative z-10 group-hover:text-purple-100 transition-colors">
            Mental Burnout
          </h3>
<p className="leading-relaxed group-hover:text-neutral-300 transition-colors text-sm text-neutral-400 z-10 relative">
            You carry the business in your head 24/7. The constant mental load of schedules, cash flow, and customer
            demands eventually steals your peace of mind.</p>
</div>

<div className="glass-card group hover:-translate-y-1 hover:bg-blue-500/[0.03] hover:border-blue-500/30 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)] transition-all duration-300 rounded-2xl p-6 relative">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none">
</div>
<div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)] transition-all duration-300 relative z-10">
<iconify-icon className="" icon="lucide:hourglass" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3 relative z-10 group-hover:text-blue-100 transition-colors">
            Slow Responses
          </h3>
<p className="leading-relaxed group-hover:text-neutral-300 transition-colors text-sm text-neutral-400 z-10 relative">
            Potential customers sit in your inbox for hours. By the time you call back, they've already booked with the
            competition.</p>
</div>

<div className="glass-card group hover:-translate-y-1 hover:bg-emerald-500/[0.03] hover:border-emerald-500/30 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.15)] transition-all duration-300 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none">
</div>
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 group-hover:shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)] transition-all duration-300 relative z-10">
<iconify-icon className="" icon="lucide:banknote" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3 relative z-10 group-hover:text-emerald-100 transition-colors">
            Chasing Invoices
          </h3>
<p className="text-sm leading-relaxed text-neutral-400 group-hover:text-neutral-300 transition-colors relative z-10">
            You act as a bank for customers. Chasing late payments takes up your evenings and kills your cash flow.
          </p>
</div>

<div className="glass-card group hover:-translate-y-1 hover:bg-cyan-500/[0.03] hover:border-cyan-500/30 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)] transition-all duration-300 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none">
</div>
<div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)] transition-all duration-300 relative z-10">
<iconify-icon className="" icon="lucide:shield-alert" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-3 relative z-10 group-hover:text-cyan-100 transition-colors">
            No Review Defense
          </h3>
<p className="leading-relaxed group-hover:text-neutral-300 transition-colors z-10 text-sm text-neutral-400 relative">
            You have no regular system for 5 star Google reviews and no damage control systems for when a negative
            review inevitably hits.</p>
</div>
</div>
</div>
</section><div className="bg-[#000d12] w-full flex justify-center pb-16 relative z-20 -mt-12">
<a className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500 px-12 py-4 text-lg font-bold text-[#000d12] shadow-[0_0_35px_-5px_rgba(234,179,8,0.6)] ring-1 ring-yellow-300/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-10px_rgba(234,179,8,0.8)] hover:ring-yellow-200 active:scale-95" href="#book">

<div className="absolute inset-0 -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/80 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-[150%]"></div>

<span className="flex items-center gap-2 z-10 relative">
      Book Call
      <iconify-icon className="-mr-1 transition-transform duration-300 group-hover:translate-x-1" icon="lucide:arrow-right" strokeWidth="2.5" width="20"></iconify-icon>
</span>
</a>
</div>

<section className="overflow-hidden bg-[#000d12] border-white/5 border-t pt-24 pb-24 relative" id="how-it-works">

<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] -translate-y-1/2">
</div>
<div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] translate-y-1/2">
</div>
</div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="text-center max-w-3xl mr-auto mb-16 ml-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 text-[10px] font-semibold uppercase tracking-widest mb-6 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          The Process
        </div>
<h2 className="md:text-5xl text-3xl font-semibold text-white tracking-tight mb-6">How it works</h2>
<p className="leading-relaxed text-lg font-light text-neutral-400">We’ve made it easy for you to see exactly how
          we work.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative p-8 rounded-3xl bg-[#01161e] border border-white/5 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.15)] flex flex-col items-center text-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>

<div className="absolute top-6 left-6 text-2xl font-bold text-cyan-500/50 font-geist-mono">1.</div>

<div className="w-16 h-16 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 mt-2 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(6,182,212,0.05)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] group-hover:bg-cyan-500/10">
<iconify-icon className="" icon="lucide:monitor-play" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="uppercase text-lg font-semibold text-white tracking-wide mb-4">Read below </h3>
<p className="leading-relaxed text-sm text-neutral-400">Look at The Trade Growth Engine breakdown below</p>
</div>

<div className="group hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.15)] flex flex-col text-center bg-[#01161e] border-white/5 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative items-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>

<div className="absolute top-6 left-6 text-2xl font-bold text-cyan-500/50 font-geist-mono">2.</div>

<div className="flex group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] group-hover:bg-cyan-500/10 text-cyan-400 bg-cyan-500/5 w-16 h-16 border-cyan-500/20 border rounded-2xl mt-2 mb-6 shadow-[0_0_20px_rgba(6,182,212,0.05)] items-center justify-center">
<iconify-icon className="" icon="lucide:mouse-pointer-2" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="uppercase text-lg font-semibold text-white tracking-wider mb-4">Book A Call</h3>
<p className="leading-relaxed text-sm text-neutral-400">Like the system? Book a strategy call and we’ll
            break down what’s holding your business back.</p>
</div>

<div className="group hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.15)] flex flex-col text-center bg-[#01161e] border-white/5 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative items-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>

<div className="absolute top-6 left-6 text-2xl font-bold text-cyan-500/50 font-geist-mono">3.</div>

<div className="w-16 h-16 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 mt-2 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(6,182,212,0.05)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] group-hover:bg-cyan-500/10">
<iconify-icon className="" icon="lucide:layers" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-4 tracking-tight uppercase">Launch &amp; Scale</h3>
<p className="leading-relaxed text-sm text-neutral-400">If it’s a good fit, we install The Trade Growth Engine and have you live within 14 days.</p>
</div>
</div>
</div>
</section>
<section className="overflow-hidden bg-[#01161e] pt-24 pb-24 relative" id="engine">

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-900/5 rounded-full blur-[120px] pointer-events-none">
</div>

<div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] border border-cyan-500/30 rounded-full">
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-[45%] -translate-y-[55%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] border border-blue-500/30 rounded-full mix-blend-screen">
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-[55%] -translate-y-[45%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] border border-emerald-500/30 rounded-full mix-blend-screen">
</div>
</div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="text-center max-w-3xl mr-auto mb-20 ml-auto">
<span className="uppercase block text-xs font-bold text-cyan-400 tracking-widest mb-3" style={{}}>introducing to you...</span>
<h2 className="bg-clip-text md:text-5xl text-4xl font-semibold text-transparent tracking-normal bg-gradient-to-r from-cyan-400 to-blue-500 h-24 mb-6 drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]">Our Trade Growth Engine</h2>
<p className="leading-relaxed text-lg font-light text-neutral-400" style={{}}>4 powerful systems running in sync to increase revenue, save time, and remove the stress.</p>
</div>

<div className="relative w-full mx-auto">

<div className="absolute inset-0 hidden lg:block pointer-events-none z-0">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">

<defs>
<filter height="140%" id="glow-line" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="1"></fegaussianblur>
<fecomposite in="SourceGraphic" in2="blur" operator="over"></fecomposite>
</filter>
<lineargradient id="grad-line-left" x1="50%" x2="16%" y1="50%" y2="25%">
<stop offset="0%" stop-color="#06b6d4" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#06b6d4" stop-opacity="0.5"></stop>
<stop offset="100%" stop-color="#06b6d4" stop-opacity="0.1"></stop>
</lineargradient>
</defs>

<path className="animate-pulse" d="M 50 50 C 50 25, 33 25, 30 25 L 16 25" fill="none" stroke="#06b6d4" stroke-opacity="0.4" strokeWidth="0.3" style={{animationDuration: '3s'}}></path>
<path d="M 50 50 C 50 25, 33 25, 30 25 L 16 25" fill="none" stroke="#22d3ee" stroke-dasharray="1 1" stroke-opacity="0.8" strokeWidth="0.1"></path>

<path className="animate-pulse" d="M 50 50 C 50 25, 66 25, 70 25 L 84 25" fill="none" stroke="#14b8a6" stroke-opacity="0.4" strokeWidth="0.3" style={{animationDuration: '3s', animationDelay: '0.5s'}}></path>
<path d="M 50 50 C 50 25, 66 25, 70 25 L 84 25" fill="none" stroke="#2dd4bf" stroke-dasharray="1 1" stroke-opacity="0.8" strokeWidth="0.1"></path>

<path className="animate-pulse" d="M 50 50 C 50 75, 33 75, 30 75 L 16 75" fill="none" stroke="#a855f7" stroke-opacity="0.4" strokeWidth="0.3" style={{animationDuration: '3s', animationDelay: '1s'}}></path>
<path d="M 50 50 C 50 75, 33 75, 30 75 L 16 75" fill="none" stroke="#c084fc" stroke-dasharray="1 1" stroke-opacity="0.8" strokeWidth="0.1"></path>

<path className="animate-pulse" d="M 50 50 C 50 75, 66 75, 70 75 L 84 75" fill="none" stroke="#3b82f6" stroke-opacity="0.4" strokeWidth="0.3" style={{animationDuration: '3s', animationDelay: '1.5s'}}></path>
<path d="M 50 50 C 50 75, 66 75, 70 75 L 84 75" fill="none" stroke="#60a5fa" stroke-dasharray="1 1" stroke-opacity="0.8" strokeWidth="0.1"></path>
</svg>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 z-10 relative gap-x-6 gap-y-6">

<div className="lg:col-start-1 lg:row-start-1 flex flex-col justify-center">
<div className="glass-card bg-[#01161e] p-8 rounded-3xl relative overflow-hidden group border-t border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_60px_-5px_rgba(34,211,238,0.4)] backdrop-brightness-100 hover:backdrop-brightness-110">

<div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-[#01161e] border-2 border-cyan-400 rounded-full z-20 shadow-[0_0_15px_rgba(34,211,238,0.6)]">
</div>
<div className="absolute inset-0 bg-gradient-to-b from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-300 mb-6 border border-cyan-400/20 shadow-[0_0_25px_rgba(34,211,238,0.3)] group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" icon="lucide:zap" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight group-hover:text-cyan-200 transition-colors">
                  1. Conversion</h3>
<p className="text-sm text-white mb-6 leading-relaxed group-hover:text-white transition-colors">Turn traffic
                  into paying jobs. We capture every lead instantly—even missed calls—so you never lose a customer to
                  the competition again.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-white group-hover:text-cyan-50 transition-colors">
<iconify-icon className="text-cyan-400 shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" icon="lucide:check" width="14"></iconify-icon>
<span className="">Instant Speed-to-Lead Follow Up</span>
</li>
<li className="flex items-start gap-3 text-sm text-white group-hover:text-cyan-50 transition-colors">
<iconify-icon className="text-cyan-400 shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" icon="lucide:check" width="14"></iconify-icon>
<span className="">Missed-Call Automation</span>
</li>
<li className="flex items-start gap-3 text-sm text-white group-hover:text-cyan-50 transition-colors">
<iconify-icon className="text-cyan-400 shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" icon="lucide:check" width="14"></iconify-icon>
<span className="">AI Lead Qualifying Bot</span>
</li>
<li className="flex items-start gap-3 text-sm text-white group-hover:text-cyan-50 transition-colors">
<iconify-icon className="text-cyan-400 shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" icon="lucide:check" width="14"></iconify-icon>
<span className="">Interactive Instant Quote Web Forms</span>
</li>
</ul>
</div>
</div>
</div>

<div className="hidden lg:flex lg:col-start-2 lg:row-start-1 lg:row-span-2 z-20 relative items-center justify-center">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-[300px] h-[300px] border border-cyan-500/20 rounded-full absolute animate-[ping_3s_linear_infinite] shadow-[0_0_30px_rgba(6,182,212,0.1)]">
</div>
<div className="w-[240px] h-[240px] border border-cyan-500/30 rounded-full absolute shadow-[0_0_20px_rgba(6,182,212,0.1)]">
</div>
</div>

<div className="relative w-56 h-56 bg-gradient-to-br from-cyan-900/90 to-[#01161e] backdrop-blur-2xl border border-cyan-400/40 rounded-[2.5rem] flex flex-col items-center justify-center text-center p-6 shadow-[0_0_100px_-20px_rgba(34,211,238,0.5)] group overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent opacity-60"></div>
<div className="-inset-[100%] group-hover:opacity-70 transition-opacity duration-500 opacity-30 absolute blur-2xl flex items-center justify-center">
<svg className="w-[350px] h-[350px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="zap" height="350" strokeWidth="2" style={{width: '350px', height: '350px', color: 'rgb(34, 211, 238)'}} viewbox="0 0 24 24" width="350" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="z-10 flex bg-cyan-500/20 w-16 h-16 border-cyan-400/40 border rounded-2xl mb-4 relative shadow-[0_0_40px_rgba(34,211,238,0.5)] items-center justify-center overflow-hidden backdrop-brightness-125">
<svg className="animate-pulse transition-all duration-500 pt-3 pr-3 pb-3 pl-3 drop-shadow-[0_0_20px_rgba(34,211,238,1)] w-[62px] h-[62px]" data-icon-replaced="true" data-icon-set="mingcute" data-mingcute="chart-line-line" fill="currentColor" height="62" stroke="none" strokeWidth="2" style={{color: 'rgb(165, 243, 252)', width: '62px', height: '62px'}} viewbox="0 0 24 24" width="62" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none">
<path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z">
</path>
<path className="" d="M4 4a1 1 0 0 1 .993.883L5 5v13h15a1 1 0 0 1 .117 1.993L20 20H4a1 1 0 0 1-.993-.883L3 19V5a1 1 0 0 1 1-1m16.194 2.818c.9 0 1.35 1.088.714 1.724l-5.57 5.57a1.1 1.1 0 0 1-1.555 0l-2.758-2.758l-3.535 3.535a1 1 0 0 1-1.415-1.414l4.172-4.172a1.1 1.1 0 0 1 1.556 0l2.758 2.758l3.242-3.243h-.414a1 1 0 1 1 0-2z" fill="#22d3ee"></path>
</g>
</svg>
</div>
<h3 className="z-10 leading-none text-shadow-glow text-2xl font-semibold text-white tracking-tight mb-1 relative">The Trade Growth <span className="text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" style={{}}>Engine</span></h3>

<div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-cyan-400 rounded-tl shadow-[0_0_10px_rgba(34,211,238,0.8)]">
</div>
<div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-cyan-400 rounded-tr shadow-[0_0_10px_rgba(34,211,238,0.8)]">
</div>
<div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-cyan-400 rounded-bl shadow-[0_0_10px_rgba(34,211,238,0.8)]">
</div>
<div className="w-2 h-2 border-cyan-300 rounded-br border-r border-b absolute right-4 bottom-4 shadow-[0_0_20px_rgba(34,211,238,1)] drop-shadow-[0_0_8px_rgba(34,211,238,1)]">
</div>
</div>
</div>

<div className="lg:col-start-3 lg:row-start-1 flex flex-col justify-center">
<div className="glass-card bg-[#01161e] p-8 rounded-3xl relative overflow-hidden group border-t border-amber-500/30 hover:border-amber-400/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_60px_-5px_rgba(251,191,36,0.4)] backdrop-brightness-100 hover:backdrop-brightness-110">

<div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-[#01161e] border-2 border-amber-400 rounded-full z-20 shadow-[0_0_15px_rgba(251,191,36,0.6)]">
</div>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-amber-500/10 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="z-10 flex flex-col h-full relative">
<div className="flex text-amber-300 bg-amber-500/20 w-12 h-12 border-amber-400/20 border rounded-xl mb-6 shadow-[0_0_25px_rgba(251,191,36,0.3)] items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
<svg className="absolute inset-0 w-full h-full text-amber-500/30" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path className="" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke-opacity="0.2"></path>
<path className="animate-[spin_8s_linear_infinite] origin-center" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" stroke-dasharray="2 4"></path>
</svg>
<iconify-icon className="relative z-10 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]" icon="lucide:cogs" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight group-hover:text-amber-200 transition-colors">
                  2. Operations</h3>
<p className="leading-relaxed text-sm text-white mb-6 group-hover:text-white transition-colors">Run your
                  business on autopilot. Automate scheduling, reminders, and follow-ups to reclaim 10+ hours of your
                  week.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-white group-hover:text-amber-50 transition-colors">
<iconify-icon className="text-amber-400 shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(251,191,36,0.5)]" icon="lucide:check" width="14"></iconify-icon>
<span className="">Automatic Job Scheduling</span>
</li>
<li className="flex items-start gap-3 text-sm text-white group-hover:text-amber-50 transition-colors">
<iconify-icon className="text-amber-400 shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(251,191,36,0.5)]" icon="lucide:check" width="14"></iconify-icon>
<span className="">Customer Confirmations &amp; Reminders</span>
</li>
<li className="flex items-start gap-3 text-sm text-white group-hover:text-amber-50 transition-colors">
<iconify-icon className="text-amber-400 shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(251,191,36,0.5)]" icon="lucide:check" width="14"></iconify-icon>
<span className="">Internal Team Notifications</span>
</li>
<li className="flex items-start gap-3 text-sm text-white group-hover:text-amber-50 transition-colors">
<iconify-icon className="text-amber-400 shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(251,191,36,0.5)]" icon="lucide:check" width="14"></iconify-icon>
<span className="">Automated Payments &amp; Invoicing</span>
</li>
</ul>
</div>
</div>
</div>

<div className="lg:col-start-1 lg:row-start-2 flex flex-col justify-center">
<div className="glass-card bg-[#01161e] p-8 rounded-3xl relative overflow-hidden group border-t border-rose-500/30 hover:border-rose-400/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_60px_-5px_rgba(244,63,94,0.4)] backdrop-brightness-100 hover:backdrop-brightness-110">

<div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-[#01161e] border-2 border-rose-400 rounded-full z-20 shadow-[0_0_15px_rgba(244,63,94,0.6)]">
</div>
<div className="absolute inset-0 bg-gradient-to-b from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>
<div className="z-10 flex flex-col h-full relative">
<div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-300 mb-6 border border-rose-400/20 shadow-[0_0_25px_rgba(244,63,94,0.3)] group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]" icon="lucide:star" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight group-hover:text-rose-200 transition-colors">
                  3. Retention</h3>
<p className="leading-relaxed text-sm text-white mb-6 group-hover:text-white transition-colors">Turn
                  one-time customers into lifetime value. We automate the entire post-job journey to drive 5-star
                  reviews, referrals, and repeat business on autopilot.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-white group-hover:text-rose-50 transition-colors">
<iconify-icon className="text-rose-400 shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(244,63,94,0.5)]" icon="lucide:check" width="14"></iconify-icon>
<span className="">Reactivation Campaigns</span>
</li>
<li className="flex items-start gap-3 text-sm text-white group-hover:text-rose-50 transition-colors">
<iconify-icon className="text-rose-400 shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(244,63,94,0.5)]" icon="lucide:check" width="14"></iconify-icon>
<span className="">Negative Review Damage Control </span>
</li>
<li className="flex items-start gap-3 text-sm text-white group-hover:text-rose-50 transition-colors">
<iconify-icon className="text-rose-400 shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(244,63,94,0.5)]" icon="lucide:check" width="14"></iconify-icon>
<span className="">Referral Automation</span>
</li>
<li className="flex items-start gap-3 text-sm text-white group-hover:text-rose-50 transition-colors">
<iconify-icon className="text-rose-400 shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(244,63,94,0.5)]" icon="lucide:check" width="14"></iconify-icon>
<span className="">Google Review Automation</span>
</li>
</ul>
</div>
</div>
</div>

<div className="lg:col-start-3 lg:row-start-2 flex flex-col justify-center">
<div className="glass-card bg-[#01161e] p-8 rounded-3xl relative overflow-hidden group border-t border-violet-500/30 hover:border-violet-400/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_60px_-5px_rgba(139,92,246,0.4)] backdrop-brightness-100 hover:backdrop-brightness-110">

<div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-[#01161e] border-2 border-violet-400 rounded-full z-20 shadow-[0_0_15px_rgba(139,92,246,0.6)]">
</div>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-violet-500/10 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center text-violet-300 mb-6 border border-violet-400/20 shadow-[0_0_25px_rgba(139,92,246,0.3)] group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]" icon="lucide:brain-circuit" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight group-hover:text-violet-200 transition-colors">
                  4. Intelligence</h3>
<p className="text-sm text-white mb-6 leading-relaxed group-hover:text-white transition-colors">Make
                  decisions based on data, not guesses. See exactly which marketing channels are making you money in
                  real-time.</p>
<ul className="space-y-4">
<li className="flex group-hover:text-violet-50 transition-colors text-sm text-white gap-x-3 gap-y-3 items-start">
<iconify-icon className="text-violet-400 shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(139,92,246,0.5)]" icon="lucide:check" width="14"></iconify-icon>
<span className="" style={{}}>The Tradie Hub CRM</span>
</li>
<li className="flex items-start gap-3 text-sm text-white group-hover:text-violet-50 transition-colors">
<iconify-icon className="text-violet-400 shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(139,92,246,0.5)]" icon="lucide:check" width="14"></iconify-icon>
<span className="">Pipeline Management</span>
</li>
<li className="flex items-start gap-3 text-sm text-white group-hover:text-violet-50 transition-colors">
<iconify-icon className="text-violet-400 shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(139,92,246,0.5)]" icon="lucide:check" width="14"></iconify-icon>
<span className="">Conversation Management</span>
</li>
<li className="flex items-start gap-3 text-sm text-white group-hover:text-violet-50 transition-colors">
<iconify-icon className="text-violet-400 shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(139,92,246,0.5)]" icon="lucide:check" width="14"></iconify-icon>
<span className="">LIVE KPI Dashboard</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
<div className="flex w-full mt-16 justify-center">
<a className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500 px-12 py-4 text-lg font-bold text-[#000d12] shadow-[0_0_35px_-5px_rgba(234,179,8,0.6)] ring-1 ring-yellow-300/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-10px_rgba(234,179,8,0.8)] hover:ring-yellow-200 active:scale-95" href="#book">
<div className="absolute inset-0 -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/80 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-[150%]">
</div>
<span className="z-10 flex items-center gap-2 relative">
            Book Call
            <iconify-icon className="-mr-1 transition-transform duration-300 group-hover:translate-x-1" icon="lucide:arrow-right" strokeWidth="2.5" width="20"></iconify-icon>
</span>
</a>
</div>
</div>
</section>

<section className="border-y bg-[#01161e] border-white/5 pt-20 pb-20">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5 text-center gap-x-8 gap-y-8">
<div className="">
<div className="bg-clip-text text-3xl font-semibold text-transparent tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 mb-1 drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]">
            14 Days</div>
<div className="text-xs font-normal uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Implementation
          </div>
</div>
<div className="">
<div className="bg-clip-text text-3xl font-semibold text-transparent tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 mb-1 drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]">
            +30%</div>
<div className="uppercase bg-clip-text text-xs font-normal text-transparent tracking-wider bg-gradient-to-r from-cyan-400 to-blue-500">
            Conversions </div>
</div>
<div className="">
<div className="bg-clip-text text-3xl font-semibold text-transparent tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 mb-1 drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]">
            24/7</div>
<div className="text-xs font-normal uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Lead Response
          </div>
</div>
<div className="">
<div className="bg-clip-text text-3xl font-semibold text-transparent tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 mb-1 drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]">
            10-15 Hours</div>
<div className="uppercase bg-clip-text text-xs font-normal text-transparent tracking-wider bg-gradient-to-r from-cyan-400 to-blue-500">
            admin saved per week</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden md:pt-32 md:pb-32 bg-[#01161e] pt-20 pb-20 relative" id="tradie-hub">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2">
</div>
<div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/2">
</div>
<div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2">
</div>
<div className="max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">

<div className="md:mb-32 text-center max-w-3xl mr-auto mb-20 ml-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 text-[10px] font-semibold uppercase tracking-widest mb-6 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          Central Command
        </div>
<h2 className="md:text-6xl leading-[1.1] text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tight mb-8 drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]">
          The Tradie Hub</h2>
<p className="leading-relaxed text-xl text-neutral-400 pr-1 pl-1">No more jumping between apps. One dashboard for
          your leads, jobs, customers, KPIs, and messages.</p>
<div className="flex flex-col sm:flex-row gap-4 z-20 w-full mt-8 absolute top-full left-0 gap-x-4 gap-y-4 justify-center">
<a className="group inline-flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-10px_rgba(234,179,8,0.8)] hover:ring-yellow-200 active:scale-95 self-center -translate-y-[40%] text-base font-semibold text-[#000d12] bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500 w-auto ring-yellow-300/50 ring-1 rounded-full mt-1 mb-1 pt-3.5 pr-8 pb-3.5 pl-8 relative shadow-[0_0_35px_-5px_rgba(234,179,8,0.6)]" href="#book">
<div className="absolute inset-0 -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/80 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-[150%]"></div>
<span className="z-10 flex items-center gap-2 relative">
        Book Call
        <iconify-icon className="-mr-1 transition-transform duration-300 group-hover:translate-x-1" icon="lucide:arrow-right" strokeWidth="2.5" width="20"></iconify-icon>
</span>
</a>
<a className="hidden group flex items-center justify-center gap-2 transition-all hover:bg-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)] text-base font-bold text-white bg-white/5 border-white/10 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 backdrop-blur-sm" href="#demo"></a>
</div>
</div>
<div className="flex flex-col md:gap-40 gap-x-24 gap-y-24">

<div className="grid lg:grid-cols-12 gap-12 lg:gap-16 gap-x-12 gap-y-12 items-center">

<div className="lg:col-span-5 order-2 lg:order-1">
<div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
<iconify-icon icon="lucide:layout-dashboard" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 text-[10px] font-semibold uppercase tracking-widest mb-4">
              Overview
            </div>
<h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
              The Tradie Hub
            </h3>
<p className="leading-relaxed text-lg text-neutral-400 mb-8">Your business, all in one place. The Tradie Hub
              brings your leads, jobs, customers, and numbers into one secure dashboard — no more juggling different
              apps. Just a clear view of your growth.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-neutral-300">
<iconify-icon className="text-cyan-400" icon="lucide:check-circle" width="18"></iconify-icon>
<span className="">Everything in one simple dashboard</span>
</li>
<li className="flex items-center gap-3 text-neutral-300">
<iconify-icon className="text-cyan-400" icon="lucide:check-circle" width="18"></iconify-icon>
<span className="">Real-time performance &amp; revenue tracking</span>
</li>
<li className="flex items-center gap-3 text-neutral-300">
<iconify-icon className="text-cyan-400" icon="lucide:check-circle" width="18"></iconify-icon>
<span className="">Full training included — easy to use</span>
</li>
</ul>
</div>

<div className="lg:col-span-7 group order-1 lg:order-2 flex min-h-[400px] relative perspective-midrange items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-cyan-500/30 transition-all duration-700">
</div>
<div className="absolute bottom-0 right-10 w-60 h-60 bg-blue-600/20 rounded-full blur-[60px] pointer-events-none mix-blend-screen">
</div>

<div className="relative w-full max-w-[500px] aspect-[4/3] transform transition-transform duration-700 hover:scale-[1.02] hover:rotate-y-2 preserve-3d">

<div className="absolute top-0 left-0 w-48 h-32 bg-[#0B1221]/90 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl z-10 transform -translate-z-12 translate-y-4 -rotate-6 transition-transform duration-500 group-hover:-translate-y-2 group-hover:-rotate-3 flex flex-col p-4 overflow-hidden">
<div className="flex items-center gap-2 mb-3">
<div className="w-2 h-2 rounded-full bg-cyan-500"></div>
<div className="h-1.5 w-16 bg-slate-700 rounded-full"></div>
</div>
<div className="flex items-end gap-1.5 h-full pt-2">
<div className="w-full bg-gradient-to-t from-cyan-500/20 to-cyan-500/0 rounded-t h-[40%]"></div>
<div className="w-full bg-gradient-to-t from-cyan-500/40 to-cyan-500/0 rounded-t h-[70%]"></div>
<div className="w-full bg-gradient-to-t from-cyan-500/60 to-cyan-500/0 rounded-t h-[50%]"></div>
<div className="w-full bg-gradient-to-t from-cyan-500/80 to-cyan-500/0 rounded-t h-[85%]"></div>
<div className="w-full bg-gradient-to-t from-cyan-400 to-cyan-500/0 rounded-t h-[60%] border-t-2 border-cyan-400">
</div>
</div>
</div>

<div className="absolute top-8 -right-4 w-40 h-40 bg-[#0B1221]/90 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl z-10 transform -translate-z-8 translate-x-4 rotate-12 transition-transform duration-500 group-hover:rotate-6 flex flex-col p-4 justify-between">
<div className="space-y-2">
<div className="h-1.5 w-12 bg-slate-700 rounded-full"></div>
<div className="h-1.5 w-20 bg-slate-800 rounded-full"></div>
</div>
<div className="flex items-center justify-center py-2">
<div className="relative w-16 h-16">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">
<path className="text-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
<path className="text-blue-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="75, 100" strokeWidth="4"></path>
</svg>
</div>
</div>
<div className="flex gap-2">
<div className="h-1.5 w-full bg-blue-500/20 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-blue-500 rounded-full"></div>
</div>
</div>
</div>

<div className="flex z-20 transform transition-all duration-500 group-hover:-translate-y-2 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="relative">

<div className="w-[280px] md:w-[340px] h-[190px] md:h-[220px] bg-[#020617] border-[6px] border-[#1e293b] rounded-t-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col items-center justify-center group-hover:shadow-[0_0_50px_-10px_rgba(6,182,212,0.3)] transition-shadow duration-500">

<div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#020617] to-[#020617] opacity-80 absolute top-0 right-0 bottom-0 left-0 -rotate-y-5">
</div>

<div className="opacity-20 absolute top-0 right-0 bottom-0 left-0 scale-100 -skew-y-30 -rotate-y-10" style={{backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
</div>

<div className="relative z-10 flex flex-col items-center gap-3 transform group-hover:scale-105 transition-transform duration-500">
<div className="relative">
<div className="absolute -inset-4 flex items-center justify-center animate-pulse text-cyan-500 opacity-40 blur-xl">
</div>
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-950 to-slate-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
<iconify-icon icon="lucide:zap" width="28"></iconify-icon>
</div>
</div>
<div className="text-center">
<div className="leading-none text-lg font-bold text-white tracking-tighter">THE TRADIE</div>
<div className="leading-none text-base font-bold text-cyan-400 tracking-widest">HUB</div>
</div>
</div>

<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 via-transparent to-transparent pointer-events-none">
</div>
</div>

<div className="w-[320px] md:w-[380px] h-4 bg-[#1e293b] rounded-b-xl relative -left-[20px] shadow-2xl flex justify-center items-start">
<div className="w-32 h-1 bg-[#334155] rounded-b-lg opacity-50"></div>

<div className="absolute top-full left-0 right-0 h-10 bg-gradient-to-b from-cyan-500/10 to-transparent blur-md">
</div>
</div>
</div>
</div>

<div className="absolute bottom-4 right-12 w-24 h-24 z-30 transform translate-z-10 translate-y-2 animate-[bounce_4s_infinite]">
<div className="relative w-full h-full perspective-[500px]">
<div className="w-full h-full rounded-full bg-slate-900/90 border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] flex items-center justify-center transform rotateX(40deg)">
<iconify-icon className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" icon="lucide:pie-chart" width="40"></iconify-icon>
</div>
</div>
</div>

<div className="absolute -bottom-8 left-0 w-48 h-12 bg-[#0B1221] border border-cyan-900/50 rounded-lg shadow-xl z-30 transform translate-z-20 -rotate-3 flex items-center gap-3 px-3">
<div className="w-8 h-8 rounded bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
<iconify-icon className="" icon="lucide:lock" width="16"></iconify-icon>
</div>
<div className="flex-1 space-y-1.5">
<div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-cyan-500 rounded-full animate-[pulse_2s_infinite]"></div>
</div>
<div className="h-1.5 w-1/2 bg-slate-800 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-12 gap-12 lg:gap-16 gap-x-12 gap-y-12 items-center">


<div className="lg:col-span-8 relative group perspective-midrange lg:order-1 mt-8 md:mt-0">

<div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-[2rem] blur-[60px] opacity-20 group-hover:opacity-30 transition duration-1000">
</div>

<div className="overflow-hidden md:h-[250px] flex flex-col transform transition-transform duration-500 md:group-hover:rotate-y-[-2deg] md:group-hover:rotate-x-2 md:group-hover:scale-[1.02] bg-[#0f172a] h-[200px] border-slate-800 border rounded-2xl relative shadow-2xl">
<div className="w-[200%] h-[400%] origin-top-left scale-50 flex flex-col bg-[#0f172a]">

<div className="flex shrink-0 bg-slate-900/80 h-14 border-slate-800 border-b pr-6 pl-6 backdrop-blur scale-95 items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center text-white text-[10px]">
<iconify-icon icon="lucide:zap" width="14"></iconify-icon>
</div>
<span className="text-sm font-medium text-white tracking-tight">The Tradie Hub</span>
</div>

<div className="flex gap-3">
<div className="w-16 h-1.5 bg-slate-800 rounded-full"></div>
<div className="w-16 h-1.5 bg-slate-800 rounded-full"></div>
</div>
</div>
<div className="flex flex-1 overflow-hidden">

<div className="flex flex-col bg-slate-900 w-16 border-slate-800 border-r pt-6 pb-6 gap-x-6 gap-y-6 items-center">
<div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-500 flex items-center justify-center shadow-lg shadow-blue-900/20 border border-blue-500/20">
<iconify-icon icon="lucide:kanban-square" width="18"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-lg text-slate-600 hover:text-slate-400 flex items-center justify-center transition-colors">
<iconify-icon icon="lucide:users" width="18"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-lg text-slate-600 hover:text-slate-400 flex items-center justify-center transition-colors">
<iconify-icon className="" icon="lucide:settings" width="18"></iconify-icon>
</div>
</div>

<div className="flex-1 bg-[#020617] relative overflow-hidden p-0 flex flex-col">

<div className="absolute inset-0 z-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none">
</div>

<div className="h-14 border-b border-slate-800 bg-[#0f172a] flex items-center justify-between px-6 shrink-0 z-10">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-700 bg-slate-800/50 text-xs font-normal text-white hover:border-slate-600 transition-colors cursor-pointer group">
<span className="text-neutral-200 group-hover:text-white">Main Pipeline</span>
<iconify-icon className="text-slate-500 group-hover:text-slate-400" icon="lucide:chevron-down" width="12"></iconify-icon>
</div>
<div className="hidden sm:flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 text-[10px] font-medium border border-blue-500/20">8 Opportunities</span>
<span className="text-[10px] text-slate-500">•</span>
<span className="text-[10px] text-slate-400 font-mono">£24,150 Pipeline Value</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
<iconify-icon icon="lucide:search" width="14"></iconify-icon>
</button>
<button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-medium rounded-md transition-all shadow-lg shadow-blue-900/20">
<iconify-icon icon="lucide:plus" width="12"></iconify-icon>
<span className="">Add Deal</span>
</button>
</div>
</div>

<div className="flex-1 p-6 overflow-x-auto relative z-10">
<div className="flex h-full gap-4 min-w-[800px]">

<div className="flex-1 min-w-[200px] flex flex-col gap-3 h-full">

<div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm group hover:border-blue-500/30 transition-colors">
<div className="flex flex-col gap-0.5">
<span className="text-xs font-medium text-slate-200 group-hover:text-white transition-colors">New Lead</span>
<span className="text-[10px] text-slate-500">2 Deals <span className="text-slate-600 mx-1">•</span>
                              £2,850</span>
</div>
<div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
</div>

<div className="hover:bg-slate-800 hover:border-blue-500/30 cursor-pointer transition-all group bg-slate-800/40 border-slate-700/50 border rounded-lg pt-3 pr-3 pb-3 pl-3 shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-normal text-white group-hover:text-blue-200 transition-colors">James Wilson</span>
<span className="text-[10px] text-blue-400 font-mono bg-blue-500/10 border-blue-500/10 border rounded pt-0.5 pr-1.5 pb-0.5 pl-1.5">£2,400</span>
</div>
<div className="flex gap-1.5 flex-wrap mb-3">
<span className="text-[10px] text-slate-400 bg-slate-700/50 px-1.5 py-0.5 rounded border border-slate-700">Full Rewire</span>
<span className="text-[10px] text-red-300 bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/10">Urgent</span>
</div>
<div className="flex items-center gap-3 pt-2 border-t border-slate-700/50 text-slate-500">
<iconify-icon className="hover:text-white transition-colors" icon="lucide:user" width="10"></iconify-icon>
<span className="text-[10px] ml-auto">Just now</span>
</div>
</div>

<div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-3 shadow-sm hover:bg-slate-800 hover:border-blue-500/30 cursor-pointer transition-all group">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-normal text-white group-hover:text-blue-200 transition-colors">Sarah Connor</span>
<span className="text-[10px] text-blue-400 font-mono bg-blue-500/10 border-blue-500/10 border rounded pt-0.5 pr-1.5 pb-0.5 pl-1.5">£450</span>
</div>
<div className="flex gap-1.5 flex-wrap mb-3">
<span className="text-[10px] text-slate-400 bg-slate-700/50 px-1.5 py-0.5 rounded border border-slate-700">Emergency Repair</span>
</div>
<div className="flex items-center gap-3 pt-2 border-t border-slate-700/50 text-slate-500">
<iconify-icon className="text-red-400" icon="lucide:phone-missed" width="10"></iconify-icon>
<span className="text-[10px] ml-auto">1h ago</span>
</div>
</div>
</div>

<div className="flex-1 min-w-[200px] flex flex-col gap-3 h-full">

<div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm group hover:border-amber-500/30 transition-colors">
<div className="flex flex-col gap-0.5">
<span className="text-xs font-medium text-slate-200 group-hover:text-white transition-colors">Appointment Booked</span>
<span className="text-[10px] text-slate-500">2 Deals <span className="text-slate-600 mx-1">•</span>
                              £2,050</span>
</div>
<div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></div>
</div>

<div className="hover:bg-slate-800 hover:border-amber-500/30 cursor-pointer transition-all group bg-slate-800/40 border-slate-700/50 border rounded-lg pt-3 pr-3 pb-3 pl-3 shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-normal text-white group-hover:text-amber-200 transition-colors">Mike Thomson</span>
<span className="text-[10px] text-amber-400 font-mono bg-amber-500/10 border-amber-500/10 border rounded pt-0.5 pr-1.5 pb-0.5 pl-1.5">£850</span>
</div>
<div className="flex gap-1.5 flex-wrap mb-3">
<span className="text-[10px] text-slate-400 bg-slate-700/50 px-1.5 py-0.5 rounded border border-slate-700">Annual Service</span>
</div>
<div className="flex items-center gap-3 pt-2 border-t border-slate-700/50 text-slate-500">
<iconify-icon className="text-amber-400" icon="lucide:calendar-clock" width="10"></iconify-icon>
<span className="text-[10px] ml-auto">Tue 2:00 PM</span>
</div>
</div>

<div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-3 shadow-sm hover:bg-slate-800 hover:border-amber-500/30 cursor-pointer transition-all group">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-normal text-white group-hover:text-amber-200 transition-colors">David Miller</span>
<span className="text-[10px] text-amber-400 font-mono bg-amber-500/10 border-amber-500/10 border rounded pt-0.5 pr-1.5 pb-0.5 pl-1.5">£1,200</span>
</div>
<div className="flex gap-1.5 flex-wrap mb-3">
<span className="text-[10px] text-slate-400 bg-slate-700/50 px-1.5 py-0.5 rounded border border-slate-700">Fuse Box Upgrade</span>
</div>
<div className="flex items-center gap-3 pt-2 border-t border-slate-700/50 text-slate-500">
<iconify-icon className="hover:text-white transition-colors" icon="lucide:calendar" width="10"></iconify-icon>
<span className="text-[10px] ml-auto">Wed 9:30 AM</span>
</div>
</div>
</div>

<div className="flex-1 min-w-[200px] flex flex-col gap-3 h-full">

<div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm group hover:border-indigo-500/30 transition-colors">
<div className="flex flex-col gap-0.5">
<span className="text-xs font-medium text-slate-200 group-hover:text-white transition-colors">Job Completed</span>
<span className="text-[10px] text-slate-500">2 Deals <span className="text-slate-600 mx-1">•</span>
                              £3,380</span>
</div>
<div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
</div>

<div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-3 shadow-sm hover:bg-slate-800 hover:border-indigo-500/30 cursor-pointer transition-all group">
<div className="flex mb-2 items-start justify-between">
<span className="text-xs font-normal text-white group-hover:text-indigo-200 transition-colors">Tom Harris</span>
<span className="text-[10px] text-indigo-400 font-mono bg-indigo-500/10 border-indigo-500/10 border rounded pt-0.5 pr-1.5 pb-0.5 pl-1.5">£3,200</span>
</div>
<div className="flex gap-1.5 flex-wrap mb-3">
<span className="text-[10px] text-slate-400 bg-slate-700/50 px-1.5 py-0.5 rounded border border-slate-700">Kitchen First Fix</span>
</div>
<div className="flex gap-3 text-slate-500 border-slate-700/50 border-t pt-2 gap-x-3 gap-y-3 items-center">
<iconify-icon className="text-indigo-400" icon="lucide:check-circle-2" width="10"></iconify-icon>
<span className="text-[10px] text-indigo-300 ml-auto">Pending Invoice</span>
</div>
</div>

<div className="hover:bg-slate-800 hover:border-indigo-500/30 cursor-pointer transition-all group bg-slate-800/40 border-slate-700/50 border rounded-lg pt-3 pr-3 pb-3 pl-3 shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-normal text-white group-hover:text-indigo-200 transition-colors">Emma Clark</span>
<span className="text-[10px] text-indigo-400 font-mono bg-indigo-500/10 border-indigo-500/10 border rounded pt-0.5 pr-1.5 pb-0.5 pl-1.5">£180</span>
</div>
<div className="flex gap-1.5 flex-wrap mb-3">
<span className="text-[10px] text-slate-400 bg-slate-700/50 px-1.5 py-0.5 rounded border border-slate-700">Socket Repair</span>
</div>
<div className="flex items-center gap-3 pt-2 border-t border-slate-700/50 text-slate-500">
<iconify-icon className="text-indigo-400" icon="lucide:check-circle-2" width="10"></iconify-icon>
<span className="text-[10px] text-indigo-300 ml-auto">Pending Invoice</span>
</div>
</div>
</div>

<div className="flex-1 min-w-[200px] flex flex-col gap-3 h-full">

<div className="flex group hover:border-emerald-500/30 transition-colors bg-slate-800/40 border-slate-700/50 border rounded-lg pt-2.5 pr-2.5 pb-2.5 pl-2.5 backdrop-blur-sm items-center justify-between">
<div className="flex flex-col gap-0.5">
<span className="text-xs font-medium text-slate-200 group-hover:text-white transition-colors">Invoice Paid</span>
<span className="text-[10px] text-slate-500">2 Deals <span className="text-slate-600 mx-1">•</span>
                              £15,870</span>
</div>
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]">
</div>
</div>

<div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-3 shadow-sm hover:bg-slate-800 hover:border-emerald-500/30 cursor-pointer transition-all group opacity-80 hover:opacity-100">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-normal text-white group-hover:text-emerald-200 transition-colors">Sophie Turner</span>
<span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 border-emerald-500/10 border rounded pt-0.5 pr-1.5 pb-0.5 pl-1.5">£15,720</span>
</div>
<div className="flex gap-1.5 flex-wrap mb-3">
<span className="text-[10px] text-slate-400 bg-slate-700/50 px-1.5 py-0.5 rounded border border-slate-700">Solar Install - 12 Panels</span>
</div>
<div className="flex gap-3 text-slate-500 border-slate-700/50 border-t pt-2 gap-x-3 gap-y-3 items-center">
<iconify-icon className="text-emerald-400" icon="lucide:badge-check" width="10"></iconify-icon>
<span className="text-[10px] text-emerald-400 ml-auto">Paid Today</span>
</div>
</div>

<div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-3 shadow-sm hover:bg-slate-800 hover:border-emerald-500/30 cursor-pointer transition-all group opacity-80 hover:opacity-100">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-normal text-white group-hover:text-emerald-200 transition-colors">Chris Evans</span>
<span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 border-emerald-500/10 border rounded pt-0.5 pr-1.5 pb-0.5 pl-1.5">£150</span>
</div>
<div className="flex gap-1.5 flex-wrap mb-3">
<span className="text-[10px] text-slate-400 bg-slate-700/50 px-1.5 py-0.5 rounded border border-slate-700">PAT Testing</span>
</div>
<div className="flex items-center gap-3 pt-2 border-t border-slate-700/50 text-slate-500">
<iconify-icon className="text-emerald-400" icon="lucide:badge-check" width="10"></iconify-icon>
<span className="text-[10px] text-emerald-400 ml-auto">Paid Yest</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-lg border border-white/10 rounded-xl p-3 flex items-start gap-3 shadow-2xl z-20">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/20">
<iconify-icon className="text-white" icon="lucide:bar-chart-3" width="16"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<h4 className="text-xs font-medium text-white">Pipeline Velocity</h4>
<span className="text-[9px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">+14% vs Last Week</span>
</div>
<p className="text-[10px] text-slate-400 leading-relaxed">
                          Your deal flow is accelerating. "New Lead" to "Appointment" conversion rate is up by 8%. Check
                          the <span className="text-white hover:underline cursor-pointer">Intelligence</span> tab for more
                          details.
                        </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-4 lg:order-2 w-full order-first">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
<iconify-icon className="" icon="lucide:kanban-square" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="md:text-4xl text-3xl font-semibold text-white tracking-tight mb-4">
              Pipeline Management
            </h3>
<p className="leading-relaxed text-base md:text-lg text-neutral-400 mb-8 w-full max-w-full break-words whitespace-normal min-w-0 font-light">Stop guessing your next job. Track every lead on a clear drag-and-drop board from ‘New’ to ‘Paid’.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-neutral-300">
<iconify-icon className="text-purple-400" icon="lucide:check-circle" width="18"></iconify-icon>
<span className="">See every job in one view</span>
</li>
<li className="flex items-center gap-3 text-neutral-300">
<iconify-icon className="text-purple-400" icon="lucide:check-circle" width="18"></iconify-icon>
<span className="">100% automated pipeline </span>
</li>
<li className="flex items-center gap-3 text-neutral-300">
<iconify-icon className="text-purple-400" icon="lucide:check-circle" width="18"></iconify-icon>
<span className="">Live revenue pipeline tracking</span>
</li>
</ul>
</div>
</div>

<div className="grid lg:grid-cols-2 lg:gap-16 gap-x-12 gap-y-12 items-center">

<div className="">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
<iconify-icon icon="lucide:inbox" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="md:text-4xl text-3xl font-semibold text-white tracking-tight mb-4">One Inbox</h3>
<p className="leading-relaxed text-lg text-neutral-400 mb-8">All your messages — Facebook, Instagram, SMS,
              Email, Google — in one inbox. Reply on the go, faster than anyone else.</p>
<ul className="space-y-4">
<li className="flex gap-3 text-neutral-300 gap-x-3 gap-y-3 items-center">
<iconify-icon className="text-blue-400" icon="lucide:check-circle" width="18"></iconify-icon>
<span className="">Never miss a message again</span>
</li>
<li className="flex items-center gap-3 text-neutral-300">
<iconify-icon className="text-blue-400" icon="lucide:check-circle" width="18"></iconify-icon>
<span className="">Mobile app for iOS and Android</span>
</li>
<li className="flex text-neutral-300 gap-x-3 gap-y-3 items-center">
<iconify-icon className="text-blue-400" icon="lucide:check-circle" width="18"></iconify-icon>
<span className="">Automated Booking </span>
</li>
</ul>
</div>

<div className="relative group mt-8 md:mt-0">
<div className="absolute -inset-1 bg-gradient-to-l from-blue-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000">
</div>
<div className="relative bg-[#0B1221] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex h-[400px] md:h-[500px]">

<div className="w-1/4 md:w-1/3 border-r border-white/5 bg-[#01161e]/50 flex flex-col">
<div className="p-4 border-b border-white/5 hidden md:block">
<div className="text-sm font-semibold text-white">Inbox</div>
<div className="text-[10px] text-neutral-500">All Messages</div>
</div>

<div className="p-3 border-b border-white/5 md:hidden flex justify-center">
<iconify-icon className="text-white" icon="lucide:inbox" width="16"></iconify-icon>
</div>
<div className="flex-1 overflow-y-auto">

<div className="p-2 md:p-3 border-l-2 border-cyan-400 bg-white/5 cursor-pointer">
<div className="flex flex-col md:flex-row md:items-center gap-1 mb-1 gap-x-1 gap-y-1 justify-between">
<span className="truncate text-xs font-semibold text-white">Mike</span>
<span className="text-[8px] md:text-[10px] text-neutral-500">10:42</span>
</div>
<div className="hidden md:block text-[10px] text-neutral-400 truncate">Can you come this Tuesday?</div>
<div className="mt-1 flex items-center gap-1 justify-center md:justify-start">
<iconify-icon className="text-blue-500" icon="lucide:facebook" width="12"></iconify-icon>
</div>
</div>

<div className="p-2 md:p-3 border-l-2 border-transparent hover:bg-white/[0.02] cursor-pointer transition-colors">
<div className="flex flex-col md:flex-row md:items-center gap-1 mb-1 gap-x-1 gap-y-1 justify-between">
<span className="truncate text-xs font-medium text-neutral-300">John</span>
<span className="text-[8px] md:text-[10px] text-neutral-600">Yest</span>
</div>
<div className="hidden md:block text-[10px] text-neutral-500 truncate">Quote received, thanks!</div>
<div className="mt-1 flex items-center gap-1 justify-center md:justify-start">
<iconify-icon className="text-emerald-500" icon="lucide:smartphone" width="12"></iconify-icon>
</div>
</div>

<div className="p-2 md:p-3 border-l-2 border-transparent hover:bg-white/[0.02] cursor-pointer transition-colors">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-1 gap-1">
<span className="text-xs font-medium text-neutral-300 truncate">David</span>
<span className="text-[8px] md:text-[10px] text-neutral-600">Mon</span>
</div>
<div className="hidden md:block text-[10px] text-neutral-500 truncate">Is the boiler covered?</div>
<div className="mt-1 flex items-center gap-1 justify-center md:justify-start">
<iconify-icon className="text-amber-500" icon="lucide:mail" width="12"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col bg-[#0B1221]/80 backdrop-blur relative">

<div className="p-3 md:p-4 border-b border-white/5 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-xs shrink-0">
                      SJ</div>
<div className="overflow-hidden">
<div className="truncate text-sm font-semibold text-white">Mike Ross</div>
<div className="text-[10px] text-cyan-400 truncate">Lead • Boiler Service</div>
</div>
</div>
<button className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded transition-colors whitespace-nowrap">
<span className="hidden md:inline">Create Job</span>
<iconify-icon className="md:hidden" icon="lucide:plus" width="14"></iconify-icon>
</button>
</div>

<div className="flex-1 p-3 md:p-4 space-y-4 overflow-y-auto">
<div className="flex justify-start">
<div className="bg-white/10 rounded-2xl rounded-tl-none px-4 py-2 max-w-[85%] md:max-w-[80%]">
<p className="text-xs text-neutral-300">Hi, I need a boiler service for my property in Cardiff. Do you
                        have availability?</p>
</div>
</div>
<div className="flex justify-end">
<div className="md:max-w-[80%] shadow-blue-900/20 bg-blue-600 max-w-[85%] rounded-2xl pt-2 pr-4 pb-2 pl-4 shadow-lg">
<p className="text-xs text-white">Hi Mike! Yes, we have slots available this Tuesday or Thursday
                        afternoon.</p>
</div>
</div>
<div className="flex justify-start">
<div className="bg-white/10 rounded-2xl rounded-tl-none px-4 py-2 max-w-[85%] md:max-w-[80%]">
<p className="text-xs text-neutral-300">Tuesday works best for me. Around 2pm?</p>
</div>
</div>

<div className="flex justify-end">
<div className="flex gap-1 bg-blue-600/50 rounded-full px-3 py-2 items-center">
<div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
<div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
<div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
</div>
</div>
</div>

<div className="p-3 md:p-4 border-t border-white/5 bg-[#01161e]/50">
<div className="flex gap-2">
<input className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500/50 transition-colors" placeholder="Type..." type="text"/>
<button className="bg-blue-600 hover:bg-blue-500 text-white rounded-lg px-3 py-2 transition-colors">
<iconify-icon icon="lucide:send" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-12 gap-12 lg:gap-16 gap-x-12 gap-y-12 items-center">

<div className="lg:col-span-4 lg:order-2">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
<iconify-icon icon="lucide:bar-chart-3" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
              Birdseye Performance View
            </h3>
<p className="leading-relaxed text-lg text-neutral-400 mb-8">See exactly how your business is performing. One
              dashboard tracks every pound earned in real time.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-neutral-300">
<iconify-icon className="text-emerald-400" icon="lucide:check-circle" width="18"></iconify-icon>
<span className="">Revenue Closed</span>
</li>
<li className="flex items-center gap-3 text-neutral-300">
<iconify-icon className="text-emerald-400" icon="lucide:check-circle" width="18"></iconify-icon>
<span className="">Jobs Booked / Quote Conversion</span>
</li>
<li className="flex items-center gap-3 text-neutral-300">
<iconify-icon className="text-emerald-400" icon="lucide:check-circle" width="18"></iconify-icon>
<span className="">Conversion Rates And More</span>
</li>
</ul>
</div>

<div className="lg:col-span-8 relative group perspective-midrange lg:order-1 mt-8 md:mt-0">

<div className="absolute inset-0 z-20 transform transition-transform duration-500 group-hover:scale-[1.01] group-hover:rotate-1">

<div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-[2rem] blur-[60px] opacity-20 group-hover:opacity-30 transition duration-1000 pointer-events-none">
</div>

<div className="h-full w-full bg-[#0f172a] rounded-2xl border border-slate-800 shadow-2xl flex flex-col overflow-hidden relative">

<div className="flex md:px-6 shrink-0 z-10 bg-[#0f172a]/80 h-14 border-slate-800 border-b pr-4 pl-4 backdrop-blur items-center justify-between">
<style className="">
                    [data-element-id="aura-emixbbw4w1sjl28h"]+div {
                      transform: scale(0.5);
                      transform-origin: top left;
                      width: 200%;
                      height: 200%;
                      overflow: hidden !important;
                    }
                  </style>
<div className="flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="lucide:layout-grid" width="18"></iconify-icon>
<span className="text-sm font-semibold text-white tracking-tight">Performance Overview</span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-700 bg-slate-800/50 text-xs font-medium text-slate-300 hover:border-slate-600 transition-colors cursor-pointer">
<span className="">All Pipelines</span>
<iconify-icon icon="lucide:chevron-down" width="12"></iconify-icon>
</div>
<button className="w-7 h-7 flex items-center justify-center rounded-md border border-slate-700 bg-slate-800/50 text-slate-400 hover:text-white transition-colors">
<iconify-icon className="" icon="lucide:sliders-horizontal" width="12"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 overflow-y-auto custom-scrollbar pt-4 pr-4 pb-4 pl-4 gap-x-4 gap-y-4">

<div className="lg:col-span-2 bg-slate-900/50 border border-slate-800 rounded-xl p-4 flex flex-col min-h-[180px]">
<div className="flex justify-between items-start mb-2">
<h4 className="text-xs font-medium text-slate-400">Opportunity Status</h4>
</div>
<div className="flex-1 flex items-center justify-center gap-6">
<div className="relative w-24 h-24 flex-shrink-0">

<div className="w-full h-full rounded-full" style={{background: 'conic-gradient(#3b82f6 0% 55%, #22c55e 55% 85%, #ef4444 85% 100%)', maskImage: 'radial-gradient(transparent 60%, black 61%)', WebkitMaskImage: 'radial-gradient(transparent 60%, black 61%)'}}>
</div>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-xl font-bold text-white tracking-tight">142</span>
</div>
</div>
<div className="flex flex-col gap-2 justify-center">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="text-[10px] text-slate-300">Open (78)</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-[10px] text-slate-300">Won (42)</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<span className="text-[10px] text-slate-300">Lost (22)</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 bg-slate-900/50 border border-slate-800 rounded-xl p-4 flex flex-col min-h-[180px]">
<div className="flex justify-between items-start mb-4">
<h4 className="text-xs font-medium text-slate-400">Deal Volume</h4>
<span className="text-[10px] text-emerald-400 font-medium bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">+14%</span>
</div>
<div className="flex-1 flex items-end justify-between gap-2 px-1">

<div className="w-full bg-slate-800 hover:bg-blue-600/50 transition-colors rounded-t-sm h-[40%] relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-[9px] text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          12</div>
</div>
<div className="w-full bg-slate-800 hover:bg-blue-600/50 transition-colors rounded-t-sm h-[65%] relative group">
</div>
<div className="w-full bg-slate-800 hover:bg-blue-600/50 transition-colors rounded-t-sm h-[35%] relative group">
</div>
<div className="w-full bg-slate-800 hover:bg-blue-600/50 transition-colors rounded-t-sm h-[85%] relative group">
</div>
<div className="w-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.3)] rounded-t-sm h-[70%] relative group">
</div>
</div>
<div className="flex justify-between mt-2 text-[9px] text-slate-500 font-mono">
<span>M</span><span className="">T</span><span className="">W</span><span className="">T</span><span className="">F</span>
</div>
</div>

<div className="lg:col-span-2 bg-slate-900/50 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center min-h-[180px]">
<div className="text-center mb-2">
<div className="text-2xl font-bold text-white tracking-tight">£84,250</div>
<div className="flex items-center justify-center gap-1 mt-1">
<iconify-icon className="text-emerald-400" icon="lucide:arrow-up-right" width="12"></iconify-icon>
<span className="text-[10px] font-medium text-emerald-400">12.5% vs last 30d</span>
</div>
</div>
<div className="relative w-20 h-20 mt-2">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-slate-800" cx="40" cy="40" fill="transparent" r="32" stroke="currentColor" strokeWidth="6"></circle>
<circle className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" cx="40" cy="40" fill="transparent" r="32" stroke="currentColor" stroke-dasharray="201" stroke-dashoffset="50" strokeWidth="6"></circle>
</svg>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center scale-[0.7]">
<span className="text-sm font-semibold text-white">75%</span>
</div>
</div>
<div className="text-[10px] text-slate-500 mt-2">Conversion Rate</div>
</div>

<div className="lg:col-span-3 bg-slate-900/50 border border-slate-800 rounded-xl p-4 flex flex-col">
<div className="flex justify-between items-center mb-4">
<h4 className="text-xs font-medium text-slate-400">Sales Funnel</h4>
<button className="text-slate-500 hover:text-white"><iconify-icon icon="lucide:filter" width="12"></iconify-icon></button>
</div>
<div className="space-y-3">
<div className="group relative">
<div className="flex justify-between text-[10px] text-slate-400 mb-1 z-10 relative">
<span>New Leads</span>
<span className="font-mono text-white">1,240</span>
</div>
<div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-600 w-full rounded-full"></div>
</div>
</div>
<div className="group relative">
<div className="flex justify-between text-[10px] text-slate-400 mb-1 z-10 relative">
<span>Appointments</span>
<span className="font-mono text-white">845</span>
</div>
<div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-cyan-500 w-[68%] rounded-full"></div>
</div>
</div>
<div className="group relative">
<div className="flex justify-between text-[10px] text-slate-400 mb-1 z-10 relative">
<span>Quotes Sent</span>
<span className="font-mono text-white">520</span>
</div>
<div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 w-[42%] rounded-full"></div>
</div>
</div>
<div className="group relative">
<div className="flex justify-between text-[10px] text-slate-400 mb-1 z-10 relative">
<span>Jobs Won</span>
<span className="font-mono text-white">395</span>
</div>
<div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[32%] rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]">
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 bg-slate-900/50 border border-slate-800 rounded-xl p-4 flex flex-col">
<div className="flex justify-between items-center mb-4">
<h4 className="text-xs font-medium text-slate-400">Stage Distribution</h4>
<button className="text-slate-500 hover:text-white"><iconify-icon className="" icon="lucide:arrow-right" width="12"></iconify-icon></button>
</div>
<div className="flex flex-col gap-2.5">
<div className="flex items-center gap-3">
<div className="w-16 text-right text-[10px] text-slate-400">New</div>
<div className="flex-1 h-5 bg-slate-800 rounded-sm relative group overflow-hidden">
<div className="absolute inset-y-0 left-0 bg-blue-500 w-[25%] group-hover:w-[28%] transition-all">
</div>
<div className="absolute inset-y-0 right-2 flex items-center text-[9px] text-white">12</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-16 text-right text-[10px] text-slate-400">Contacted</div>
<div className="flex-1 h-5 bg-slate-800 rounded-sm relative group overflow-hidden">
<div className="absolute inset-y-0 left-0 bg-cyan-500 w-[45%] group-hover:w-[48%] transition-all">
</div>
<div className="absolute inset-y-0 right-2 flex items-center text-[9px] text-white">24</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-16 text-right text-[10px] text-slate-400">Quoted</div>
<div className="flex-1 h-5 bg-slate-800 rounded-sm relative group overflow-hidden">
<div className="absolute inset-y-0 left-0 bg-purple-500 w-[35%] group-hover:w-[38%] transition-all">
</div>
<div className="absolute inset-y-0 right-2 flex items-center text-[9px] text-white">18</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-16 text-right text-[10px] text-slate-400">Invoiced</div>
<div className="flex-1 h-5 bg-slate-800 rounded-sm relative group overflow-hidden">
<div className="absolute inset-y-0 left-0 bg-emerald-500 w-[65%] group-hover:w-[68%] transition-all shadow-[0_0_8px_rgba(16,185,129,0.3)]">
</div>
<div className="absolute inset-y-0 right-2 flex items-center text-[9px] text-white">32</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="relative bg-[#0f172a] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden h-[400px] flex transform transition-transform duration-500 group-hover:scale-[1.01] group-hover:rotate-1">

<div className="w-64 border-r border-slate-800 bg-[#0B1221] hidden md:flex flex-col">
<div className="p-5 border-b border-slate-800">
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Team Roles</div>
<div className="relative">
<input className="w-full bg-slate-800/50 border border-slate-700 rounded-md px-3 py-1.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50" placeholder="Search..." type="text"/>
<iconify-icon className="absolute right-2.5 top-2 text-slate-500" icon="lucide:search" width="12"></iconify-icon>
</div>
</div>
<div className="flex-1 overflow-y-auto p-2 space-y-1">
<div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                        FE</div>
<div>
<div className="text-xs font-medium text-white">Field Engineer</div>
<div className="text-[10px] text-emerald-400">Sub-contractor</div>
</div>
</div>
</div>
<div className="p-3 rounded-lg hover:bg-slate-800/50 cursor-pointer transition-colors border border-transparent">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-slate-800 text-slate-400 flex items-center justify-center font-bold text-xs">
                        OM</div>
<div>
<div className="text-xs font-medium text-slate-300">Office Manager</div>
<div className="text-[10px] text-slate-500">Admin</div>
</div>
</div>
</div>
<div className="p-3 rounded-lg hover:bg-slate-800/50 cursor-pointer transition-colors border border-transparent">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-slate-800 text-slate-400 flex items-center justify-center font-bold text-xs">
                        AP</div>
<div>
<div className="text-xs font-medium text-slate-300">Apprentice</div>
<div className="text-[10px] text-slate-500">Restricted</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col bg-[#0f172a] relative">

<div className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-[#0f172a]/95 backdrop-blur z-10">
<div>
<h4 className="text-sm font-semibold text-white">Role: Field Engineer</h4>
<p className="text-[10px] text-slate-400">Standard permissions for external contractors</p>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] text-slate-500">Changes saved</span>
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
</div>
</div>

<div className="p-6 space-y-1 overflow-y-auto">

<div className="flex flex-col gap-4 p-5 rounded-xl bg-slate-900/40 border border-slate-800 w-full backdrop-blur-sm relative overflow-hidden group">

<div className="flex items-center justify-between z-10 relative">
<div className="flex items-center gap-2">
<div className="p-1.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
<iconify-icon icon="lucide:bar-chart-3" width="14"></iconify-icon>
</div>
<h3 className="text-xs font-semibold text-slate-200">Performance Overview</h3>
</div>
<div className="flex items-center gap-2 px-2 py-1 rounded bg-slate-800/50 border border-slate-700/50 text-[10px] text-slate-400 hover:text-white transition-colors cursor-pointer">
<span>This Month</span>
<iconify-icon icon="lucide:chevron-down" width="10"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-3 gap-3 z-10 relative">

<div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 flex flex-col items-center gap-2 hover:border-cyan-500/30 transition-colors">
<div className="relative w-16 h-16 flex items-center justify-center">

<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">
<path className="text-slate-700/30" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path className="text-cyan-500 drop-shadow-[0_0_3px_rgba(6,182,212,0.5)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="65, 100" strokeLinecap="round" strokeWidth="3"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="text-xs font-bold text-white">65%</span>
</div>
</div>
<span className="text-[10px] font-medium text-slate-400">Conversion</span>
</div>

<div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 flex flex-col justify-between hover:border-emerald-500/30 transition-colors">
<div className="flex justify-between items-start">
<span className="text-[10px] font-medium text-slate-400">Won Revenue</span>
<iconify-icon className="text-emerald-500" icon="lucide:pound-sterling" width="12"></iconify-icon>
</div>
<div>
<div className="text-lg font-bold text-white tracking-tight">£12,450</div>
<div className="flex items-center gap-1 mt-1">
<span className="text-[9px] font-semibold text-emerald-400 bg-emerald-500/10 px-1 rounded flex items-center gap-0.5">
<iconify-icon icon="lucide:trending-up" width="8"></iconify-icon> 12%
                    </span>
<span className="text-[9px] text-slate-500">vs last mo</span>
</div>
</div>
</div>

<div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 flex flex-col justify-between hover:border-blue-500/30 transition-colors">
<div className="flex justify-between items-start">
<span className="text-[10px] font-medium text-slate-400">Active Pipeline</span>
<iconify-icon className="text-blue-500" icon="lucide:activity" width="12"></iconify-icon>
</div>
<div>
<div className="text-lg font-bold text-white tracking-tight">28</div>
<div className="text-[9px] text-slate-500 mt-1">Value: <span className="text-slate-300">£48.2k</span>
</div>
</div>
</div>
</div>

<div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 z-10 relative hover:border-slate-600 transition-colors">
<div className="flex justify-between items-center mb-3">
<span className="text-[10px] font-medium text-slate-400">Sales Funnel</span>
<iconify-icon className="text-slate-500" icon="lucide:filter" width="10"></iconify-icon>
</div>
<div className="space-y-2">

<div className="flex items-center gap-2">
<div className="w-16 text-[9px] text-slate-400 text-right">Leads</div>
<div className="flex-1 h-1.5 bg-slate-700/30 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[100%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.3)]">
</div>
</div>
<div className="w-6 text-[9px] text-white text-right">45</div>
</div>

<div className="flex items-center gap-2">
<div className="w-16 text-[9px] text-slate-400 text-right">Booked</div>
<div className="flex-1 h-1.5 bg-slate-700/30 rounded-full overflow-hidden">
<div className="h-full bg-cyan-500 w-[75%] rounded-full shadow-[0_0_10px_rgba(6,182,212,0.3)]">
</div>
</div>
<div className="w-6 text-[9px] text-white text-right">32</div>
</div>

<div className="flex items-center gap-2">
<div className="w-16 text-[9px] text-slate-400 text-right">Quoted</div>
<div className="flex-1 h-1.5 bg-slate-700/30 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 w-[50%] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.3)]">
</div>
</div>
<div className="w-6 text-[9px] text-white text-right">21</div>
</div>

<div className="flex items-center gap-2">
<div className="w-16 text-[9px] text-slate-400 text-right">Won</div>
<div className="flex-1 h-1.5 bg-slate-700/30 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[30%] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.3)]">
</div>
</div>
<div className="w-6 text-[9px] text-white text-right">12</div>
</div>
</div>
</div>

<div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none">
</div>
<div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none">
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30 border border-slate-800">
<div className="flex items-center gap-3">
<div className="p-1.5 rounded bg-blue-500/10 text-blue-400">
<iconify-icon icon="lucide:map-pin" width="14"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-slate-200">Navigate to Site</div>
<div className="text-[10px] text-slate-500">Access customer address and maps</div>
</div>
</div>
<div className="w-9 h-5 bg-emerald-500 rounded-full relative cursor-pointer shadow-lg shadow-emerald-500/20">
<div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-lg bg-red-500/5 border border-red-500/10">
<div className="flex items-center gap-3">
<div className="p-1.5 rounded bg-red-500/10 text-red-400">
<iconify-icon icon="lucide:pound-sterling" width="14"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-white">View Job Pricing</div>
<div className="text-[10px] text-red-300/70">Hidden for sub-contractors</div>
</div>
</div>
<div className="w-9 h-5 bg-slate-700 rounded-full relative cursor-pointer">
<div className="absolute left-0.5 top-0.5 w-4 h-4 bg-slate-400 rounded-full shadow-sm"></div>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30 border border-slate-800">
<div className="flex items-center gap-3">
<div className="p-1.5 rounded bg-slate-700/50 text-slate-400">
<iconify-icon icon="lucide:users" width="14"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-slate-400">Access Full Client Database</div>
<div className="text-[10px] text-slate-600">Restricted to admins only</div>
</div>
</div>
<div className="w-9 h-5 bg-slate-700 rounded-full relative cursor-pointer">
<div className="absolute left-0.5 top-0.5 w-4 h-4 bg-slate-400 rounded-full shadow-sm"></div>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30 border border-slate-800">
<div className="flex items-center gap-3">
<div className="p-1.5 rounded bg-blue-500/10 text-blue-400">
<iconify-icon icon="lucide:camera" width="14"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-slate-200">Upload Site Photos</div>
<div className="text-[10px] text-slate-500">Can add attachments to job cards</div>
</div>
</div>
<div className="w-9 h-5 bg-emerald-500 rounded-full relative cursor-pointer shadow-lg shadow-emerald-500/20">
<div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
</div>
</div>
</div>

<div className="absolute bottom-4 right-4 bg-slate-900 border border-emerald-500/20 rounded-lg shadow-2xl p-3 flex items-center gap-3 animate-pulse">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<div className="text-[10px] text-emerald-400 font-medium">Permissions updated successfully</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="md:pb-32 md:pt-10 bg-[#01161e] border-white/5 border-t pt-10 pb-24 relative" id="pricing">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none">
</div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[100px] rounded-full pointer-events-none">
</div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="text-center max-w-3xl mr-auto mb-20 ml-auto">
<h2 className="md:text-5xl text-3xl font-semibold text-white tracking-tight mb-6">
<span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">You Only Pay When It Works</span>
</h2>
<p className="leading-relaxed text-lg font-light text-neutral-400">No hidden setup fees, cancel anytime.</p>
</div>

<div className="flex justify-center w-full max-w-3xl mx-auto">

<div className="flex flex-col md:p-12 overflow-hidden group text-center bg-[#0B1221]/80 w-full border-yellow-500/30 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-[0_0_40px_-5px_rgba(234,179,8,0.15)] backdrop-blur-xl items-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-yellow-500/20 blur-[80px] rounded-full pointer-events-none">
</div>
<div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
</div>

<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-900/50 to-amber-900/50 border border-yellow-500/40 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(234,179,8,0.2)] relative z-10">
<iconify-icon className="text-yellow-400" icon="lucide:message-square-dashed" width="32"></iconify-icon>
</div>

<div className="mb-6 relative z-10">
<div className="flex items-baseline justify-center gap-2 mb-2">
<span className="text-lg text-neutral-400">Prices start from</span>
<span className="md:text-6xl text-5xl font-semibold text-white tracking-tight drop-shadow-[0_0_15px_rgba(234,179,8,0.6)]">£249</span>
<span className="text-lg text-neutral-500">/mo</span>
</div>
</div>

<div className="max-w-xl mx-auto mb-10 space-y-4 relative z-10">
<p className="leading-relaxed text-xl font-bold text-neutral-300">No two businesses are the same, so we give
              exact pricing once we know what needs sorting.</p>
<p className="leading-relaxed text-lg font-semibold text-neutral-400">We build around your business. Book a
              strategy call and we’ll pinpoint what needs fixing.</p>
</div>

<div className="relative z-10 w-full sm:w-auto">
<a className="flex items-center justify-center gap-2 sm:w-auto hover:bg-yellow-50 transition-all hover:scale-[1.02] group/btn hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] text-sm font-semibold text-[#01161e] bg-white w-full rounded-xl pt-4 pr-8 pb-4 pl-8 shadow-[0_0_20px_rgba(234,179,8,0.3)]" href="#book">
              Book Strategy Call
              <iconify-icon className="group-hover/btn:translate-y-0.5 transition-transform" icon="lucide:arrow-down" width="16"></iconify-icon>
</a>
<p className="mt-4 text-[10px] text-neutral-500 uppercase tracking-widest">
              Free 30-Minute Audit
            </p>
</div>
</div>
</div>

<div className="mt-16 text-center border-t border-white/5 pt-8 max-w-2xl mx-auto">
<div className="flex items-center justify-center gap-2 mb-3">
<iconify-icon className="text-emerald-400" icon="lucide:shield-check" width="20"></iconify-icon>
<span className="text-sm font-semibold text-white">30-Day Money Back Guarantee</span>
</div>
<p className="text-sm text-neutral-500">If you are not satisfied with the service in your first month, we'll refund
          your subscription in full. No questions asked.</p>
</div>
</div>
</section>

<section className="max-h-full relative" id="book">
<div className="z-10 text-center max-w-sm mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 relative">
<h2 className="md:text-3xl text-2xl font-medium text-white tracking-tight mb-2">
        Ready to scale?
      </h2>
<p className="text-sm font-light text-neutral-400 mb-3 pr-1 pl-1">Book a 30 minute Strategy Call. We'll review your current system together and see exactly where you're losing money.</p>
<div className="glass-card overflow-y-auto text-left bg-white border-white/10 rounded-xl border-t relative shadow-xl" style={{height: '420px !important'}}>
<iframe className="" id="PMNNO037J2lEx1R5QZHs_1765207144769" scrolling="yes" src="https://api.leadconnectorhq.com/widget/booking/PMNNO037J2lEx1R5QZHs" style={{width: '100%', border: 'none', overflow: 'auto', height: '751px'}}></iframe>

</div>
</div>
</section>

<footer className="bg-[#01161e] border-white/5 border-t pt-12 pb-12">
<div className="flex flex-col md:flex-row max-w-6xl mr-auto ml-auto pr-6 pl-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 flex items-center justify-center bg-cyan-900/30 rounded border border-cyan-500/20 text-cyan-500">
<iconify-icon icon="lucide:zap" width="14"></iconify-icon>
</div>
<span className="text-sm font-semibold text-neutral-300">
            WePowerTrades
          </span>
</div>
<div className="text-[10px] text-neutral-600">© 2025 WePowerTrades. Built for UK Trade Businesses.</div>
<div className="flex items-center gap-6 text-neutral-500">
<a className="text-xs font-medium hover:text-cyan-400 transition-colors" href="mailto:team@wepowertrades.com">
          team@wepowertrades.com
        </a>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">
</a>
<a className="hover:text-white transition-colors" href="#">
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
