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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Outfit', 'sans-serif'],
},
colors: {
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
500: '#8A2BE2', // Vibrant Purple
600: '#7B1FA2',
900: '#4A148C',
},
purple: {
glow: '#8A2BE2',
accent: '#8A2BE2',
}
},
animation: {
'blob': 'blob 7s infinite',
'scrolling': 'scrolling 40s linear infinite',
'scrolling-reverse': 'scrolling-reverse 40s linear infinite',
},
keyframes: {
blob: {
'0%': {
transform: 'translate(0px, 0px) scale(1)'
},
'33%': {
transform: 'translate(30px, -50px) scale(1.1)'
},
'66%': {
transform: 'translate(-20px, 20px) scale(0.9)'
},
'100%': {
transform: 'translate(0px, 0px) scale(1)'
},
},
scrolling: {
'0%': {
transform: 'translateX(0)'
},
'100%': {
transform: 'translateX(-50%)'
},
},
'scrolling-reverse': {
'0%': {
transform: 'translateX(-50%)'
},
'100%': {
transform: 'translateX(0)'
},
}
}
}
}
}

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
      


<header className="fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group hover:opacity-90 transition-opacity" href="#">

<svg className="w-8 h-8" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="logoGradient" x1="10" x2="90" y1="10" y2="90">
<stop offset="0%" style={{stopColor: '#8A2BE2', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#4A148C', stopOpacity: '1'}}></stop>
</lineargradient>
<lineargradient gradientunits="userSpaceOnUse" id="logoInner" x1="40" x2="60" y1="30" y2="50">
<stop offset="0%" style={{stopColor: '#D8B4FE', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#8A2BE2', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
<path d="M25 15 H65 A25 25 0 0 1 65 65 H45 V85 H25 V15 Z" fill="url(#logoGradient)"></path>
<path d="M45 30 V50 H65 A10 10 0 0 0 65 30 H45 Z" fill="#ffffff" opacity="0.2"></path>
<circle cx="58" cy="40" fill="url(#logoInner)" r="7" stroke="white" strokeWidth="2"></circle>
</svg>
<span className="text-xl font-semibold tracking-tighter text-white">
            Pinea
          </span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-[#E0E0E0] hover:text-[#8A2BE2] transition-colors" href="#pricing">
            Pricing
          </a>
<a className="text-sm font-medium text-[#E0E0E0] hover:text-[#8A2BE2] transition-colors" href="#image-gen">
            Image
          </a>
<a className="text-sm font-medium text-[#E0E0E0] hover:text-[#8A2BE2] transition-colors" href="#video-gen">
            Video
          </a>
<a className="text-sm font-medium text-[#E0E0E0] hover:text-[#8A2BE2] transition-colors" href="#blog">
            Blog
          </a>
</nav>
<div className="flex items-center gap-4">

<a className="hover:text-white transition-colors hidden sm:block text-sm font-medium text-[#E0E0E0]" href="login-html">
            Log in
          </a>
<a className="text-sm font-medium bg-[#8A2BE2] text-white px-4 py-2 rounded-full hover:bg-[#7B1FA2] transition-all shadow-sm shadow-[#8A2BE2]/20" href="signup-html">
            Sign up
          </a>
</div>
</div>
</header>
<main className="pt-24 overflow-hidden">

<section className="md:py-32 flex flex-col text-center pt-20 pr-6 pb-20 pl-6 relative items-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full -z-10 opacity-30 pointer-events-none">
<div className="absolute top-20 left-0 w-72 h-72 bg-[#8A2BE2] rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob"></div>
<div className="absolute top-20 right-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-900 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
</div>
<div className="max-w-4xl mx-auto space-y-8">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white leading-[1.1]">
            AI video and image
            <br className="hidden md:block"/>
            creation.
          </h1>
<p className="text-xl md:text-2xl text-[#E0E0E0] font-light max-w-2xl mx-auto leading-relaxed">
            you bring creativity, we bring reality.
            <br className="hidden md:block"/>
            Generative media for the next generation of storytellers.
          </p>
<div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="h-12 px-8 flex items-center justify-center rounded-full bg-[#8A2BE2] text-white font-medium hover:bg-[#7B1FA2] transition-all shadow-lg shadow-[#8A2BE2]/30" href="#">
              Start Creating
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</a>
<a className="h-12 px-8 flex items-center justify-center rounded-full bg-transparent text-[#E0E0E0] border border-white/20 font-medium hover:bg-white/10 hover:text-white transition-all" href="#how-it-works">
              View Gallery
            </a>
</div>
</div>

<div className="mt-20 w-full max-w-5xl mx-auto perspective-1000">
</div>
</section>

<section className="bg-black pt-24 pb-24 relative" id="image-gen">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-x-16 gap-y-16">

<div className="relative h-full min-h-[500px]">
<div className="absolute inset-0 overflow-hidden flex flex-col bg-black w-full border-white/10 border rounded-3xl shadow-2xl shadow-[#8A2BE2]/10 gap-x-6 gap-y-8 justify-center items-center">

<div className="absolute inset-0 bg-[#8A2BE2] opacity-10 blur-3xl rounded-full scale-150 animate-pulse"></div>
<div className="z-10 bg-gradient-to-b from-black via-transparent to-black absolute top-0 left-0 right-0 h-full pointer-events-none opacity-40"></div>


<div className="flex gap-6 animate-scrolling w-[200%] opacity-40">
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-[#8A2BE2]/20 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-[#8A2BE2]/20 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
</div>

<div className="flex gap-6 animate-scrolling-reverse w-[200%] opacity-60">
<div className="flex-none w-64 h-40 rounded-xl bg-[#8A2BE2]/20 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-[#8A2BE2]/20 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
</div>

<div className="flex gap-6 animate-scrolling w-[200%] opacity-80">
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-[#8A2BE2]/30 border border-white/20 backdrop-blur-md shadow-[0_0_30px_rgba(138,43,226,0.3)]"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-[#8A2BE2]/30 border border-white/20 backdrop-blur-md"></div>
</div>

<div className="flex gap-6 animate-scrolling-reverse w-[200%] opacity-60">
<div className="flex-none w-64 h-40 rounded-xl bg-[#8A2BE2]/20 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-[#8A2BE2]/20 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
</div>

<div className="flex gap-6 animate-scrolling w-[200%] opacity-40">
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-[#8A2BE2]/20 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-[#8A2BE2]/20 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
</div>
</div>
</div>

<div className="space-y-8">
<h3 className="text-4xl font-semibold tracking-tight text-white">
                Image Creation Models
              </h3>
<p className="text-lg text-[#E0E0E0] font-light leading-relaxed">
                Access the world's most capable diffusion models through a
                single, unified API. Create variations, upscale, and edit with
                pixel-perfect precision.
              </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">

<div className="group flex flex-col p-4 rounded-xl border border-transparent hover:border-[#8A2BE2] hover:bg-white/5 transition-all cursor-default">
<div className="flex items-center gap-3 mb-2">
<div className="h-8 w-8 rounded-md bg-[#8A2BE2]/20 text-[#8A2BE2] flex items-center justify-center">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16">
<path d="M12 2v20"></path>
<path d="m17 5-5-3-5 3"></path>
<path className="" d="m17 19-5 3-5-3"></path>
</svg>
</div>
<h4 className="text-sm font-semibold text-white">
                      Nano Banana
                    </h4>
</div>
<p className="text-xs text-[#E0E0E0]">
                    Ultra-fast lightweight generation.
                  </p>
</div>

<div className="group flex flex-col p-4 rounded-xl border border-transparent hover:border-[#8A2BE2] hover:bg-white/5 transition-all cursor-default">
<div className="flex items-center gap-3 mb-2">
<div className="h-8 w-8 rounded-md bg-[#8A2BE2]/20 text-[#8A2BE2] flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16">
<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
</svg>
</div>
<h4 className="text-sm font-semibold text-white">
                      Nano Banana Pro
                    </h4>
</div>
<p className="text-xs text-[#E0E0E0]">
                    Enhanced detail, compact speed.
                  </p>
</div>

<div className="group flex flex-col p-4 rounded-xl border border-transparent hover:border-[#8A2BE2] hover:bg-white/5 transition-all cursor-default">
<div className="flex items-center gap-3 mb-2">
<div className="h-8 w-8 rounded-md bg-[#8A2BE2]/20 text-[#8A2BE2] flex items-center justify-center">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16">
<path d="M17.5 19c0-1.7-1.3-3-3-3h-11"></path>
<path d="M17.5 19a3 3 0 1 0 0-6 3.1 3.1 0 0 0-.6.1"></path>
<path d="M17 13.1a3 3 0 1 0-3.9-3.9"></path>
<path d="M13.1 9.2a3 3 0 1 0-4.2 4.2"></path>
<path d="M8.9 13.4A3 3 0 0 0 3.5 16"></path>
</svg>
</div>
<h4 className="text-sm font-semibold text-white">
                      Seedream 4.0
                    </h4>
</div>
<p className="text-xs text-[#E0E0E0]">
                    Rapid conceptual art generation.
                  </p>
</div>

<div className="group flex flex-col p-4 rounded-xl border border-transparent hover:border-[#8A2BE2] hover:bg-white/5 transition-all cursor-default">
<div className="flex items-center gap-3 mb-2">
<div className="h-8 w-8 rounded-md bg-[#8A2BE2]/20 text-[#8A2BE2] flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
</div>
<h4 className="text-sm font-semibold text-white">
                      Seedream 4.5
                    </h4>
</div>
<p className="text-xs text-[#E0E0E0]">
                    High-fidelity artistic realism.
                  </p>
</div>

<div className="group flex flex-col p-4 rounded-xl border border-transparent hover:border-[#8A2BE2] hover:bg-white/5 transition-all cursor-default">
<div className="flex items-center gap-3 mb-2">
<div className="h-8 w-8 rounded-md bg-[#8A2BE2]/20 text-[#8A2BE2] flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
<line x1="12" x2="12" y1="22.08" y2="12"></line>
</svg>
</div>
<h4 className="text-sm font-semibold text-white">
                      GPT-Image-1
                    </h4>
</div>
<p className="text-xs text-[#E0E0E0]">
                    Accurate prompt adherence.
                  </p>
</div>

<div className="group flex flex-col p-4 rounded-xl border border-transparent hover:border-[#8A2BE2] hover:bg-white/5 transition-all cursor-default">
<div className="flex items-center gap-3 mb-2">
<div className="h-8 w-8 rounded-md bg-[#8A2BE2]/20 text-[#8A2BE2] flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16">
<path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
<path d="M12 12 2.1 12a10.01 10.01 0 0 0 1.5 5l8.4-5z"></path>
<path d="m21.9 12-5-8.4a10 10 0 0 0-5-1.5v9.9l10 0z"></path>
</svg>
</div>
<h4 className="text-sm font-semibold text-white">
                      GPT-Image-1.5
                    </h4>
</div>
<p className="text-xs text-[#E0E0E0]">
                    Complex semantic visual understanding.
                  </p>
</div>

<div className="group flex flex-col p-4 rounded-xl border border-transparent hover:border-[#8A2BE2] hover:bg-white/5 transition-all cursor-default">
<div className="flex items-center gap-3 mb-2">
<div className="h-8 w-8 rounded-md bg-[#8A2BE2]/20 text-[#8A2BE2] flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<h4 className="text-sm font-semibold text-white">Kling O1</h4>
</div>
<p className="text-xs text-[#E0E0E0]">
                    Creative surrealist interpretations.
                  </p>
</div>

<div className="group flex flex-col p-4 rounded-xl border border-transparent hover:border-[#8A2BE2] hover:bg-white/5 transition-all cursor-default">
<div className="flex items-center gap-3 mb-2">
<div className="h-8 w-8 rounded-md bg-[#8A2BE2]/20 text-[#8A2BE2] flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16">
<path d="M2 12h10"></path>
<path d="M9 4v16"></path>
<path d="m3 9 3 3-3 3"></path>
<path d="M14 8V6c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-2"></path>
<path d="M20 12h-6"></path>
</svg>
</div>
<h4 className="text-sm font-semibold text-white">Flux.2</h4>
</div>
<p className="text-xs text-[#E0E0E0]">
                    Balanced speed and aesthetics.
                  </p>
</div>

<div className="group flex flex-col p-4 rounded-xl border border-transparent hover:border-[#8A2BE2] hover:bg-white/5 transition-all cursor-default">
<div className="flex items-center gap-3 mb-2">
<div className="h-8 w-8 rounded-md bg-[#8A2BE2]/20 text-[#8A2BE2] flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<line x1="12" x2="12" y1="8" y2="16"></line>
<line x1="8" x2="16" y1="12" y2="12"></line>
</svg>
</div>
<h4 className="text-sm font-semibold text-white">Flux.2 Pro</h4>
</div>
<p className="text-xs text-[#E0E0E0]">
                    Professional grade photorealism.
                  </p>
</div>

<div className="group flex flex-col p-4 rounded-xl border border-transparent hover:border-[#8A2BE2] hover:bg-white/5 transition-all cursor-default">
<div className="flex items-center gap-3 mb-2">
<div className="h-8 w-8 rounded-md bg-[#8A2BE2]/20 text-[#8A2BE2] flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16">
<circle cx="12" cy="12" r="5"></circle>
<path d="M12 1v2"></path>
<path d="M12 21v2"></path>
<path d="M4.22 4.22l1.42 1.42"></path>
<path d="M18.36 18.36l1.42 1.42"></path>
<path d="M1 12h2"></path>
<path d="M21 12h2"></path>
<path d="M4.22 19.78l1.42-1.42"></path>
<path d="M18.36 5.64l1.42-1.42"></path>
</svg>
</div>
<h4 className="text-sm font-semibold text-white">Wan 2.5</h4>
</div>
<p className="text-xs text-[#E0E0E0]">
                    Vibrant color compositions.
                  </p>
</div>

<div className="group flex flex-col p-4 rounded-xl border border-transparent hover:border-[#8A2BE2] hover:bg-white/5 transition-all cursor-default">
<div className="flex items-center gap-3 mb-2">
<div className="h-8 w-8 rounded-md bg-[#8A2BE2]/20 text-[#8A2BE2] flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
</svg>
</div>
<h4 className="text-sm font-semibold text-white">Wan 2.6</h4>
</div>
<p className="text-xs text-[#E0E0E0]">
                    Cinematic lighting mastery.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black border-white/10 border-t pt-24 pb-24" id="video-gen">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 items-stretch">

<div className="space-y-8 flex flex-col justify-center">
<div>
<h3 className="text-4xl font-semibold tracking-tight text-white">
                  Video Creation Models
                </h3>
<p className="text-lg text-[#E0E0E0] font-light leading-relaxed mt-4">
                  Bring stories to life with advanced motion synthesis. Generate
                  coherent, high-fps video clips from text or image prompts.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-3">

<div className="group flex flex-col p-4 rounded-xl border border-white/5 bg-[#0a0a0a] hover:border-[#8A2BE2] hover:bg-white/5 transition-all cursor-default shadow-sm hover:shadow-md hover:shadow-[#8A2BE2]/10">
<div className="flex items-center gap-3 mb-2">
<div className="h-8 w-8 rounded-md bg-[#8A2BE2]/20 text-[#8A2BE2] flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16">
<polygon points="23 7 16 12 23 17 23 7"></polygon>
<rect height="14" rx="2" ry="2" width="15" x="1" y="5"></rect>
</svg>
</div>
<h4 className="text-sm font-semibold text-white">
                      Google Veo 3.1
                    </h4>
</div>
<p className="text-xs text-[#E0E0E0]">
                    Long-form cinematic storytelling.
                  </p>
</div>

<div className="group flex flex-col p-4 rounded-xl border border-white/5 bg-[#0a0a0a] hover:border-[#8A2BE2] hover:bg-white/5 transition-all cursor-default shadow-sm hover:shadow-md hover:shadow-[#8A2BE2]/10">
<div className="flex items-center gap-3 mb-2">
<div className="h-8 w-8 rounded-md bg-[#8A2BE2]/20 text-[#8A2BE2] flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16">
<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
</svg>
</div>
<h4 className="text-sm font-semibold text-white">
                      Google Veo 3.1 Fast
                    </h4>
</div>
<p className="text-xs text-[#E0E0E0]">Rapid video prototyping.</p>
</div>

<div className="group flex flex-col p-4 rounded-xl border border-white/5 bg-[#0a0a0a] hover:border-[#8A2BE2] hover:bg-white/5 transition-all cursor-default shadow-sm hover:shadow-md hover:shadow-[#8A2BE2]/10">
<div className="flex items-center gap-3 mb-2">
<div className="h-8 w-8 rounded-md bg-[#8A2BE2]/20 text-[#8A2BE2] flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<circle cx="9" cy="9" r="2"></circle>
<path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
</svg>
</div>
<h4 className="text-sm font-semibold text-white">
                      Google Veo 3
                    </h4>
</div>
<p className="text-xs text-[#E0E0E0]">
                    Stable high-res generation.
                  </p>
</div>

<div className="group flex flex-col p-4 rounded-xl border border-white/5 bg-[#0a0a0a] hover:border-[#8A2BE2] hover:bg-white/5 transition-all cursor-default shadow-sm hover:shadow-md hover:shadow-[#8A2BE2]/10">
<div className="flex items-center gap-3 mb-2">
<div className="h-8 w-8 rounded-md bg-[#8A2BE2]/20 text-[#8A2BE2] flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16">
<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
</svg>
</div>
<h4 className="text-sm font-semibold text-white">
                      Kling 2.V-Turbo
                    </h4>
</div>
<p className="text-xs text-[#E0E0E0]">
                    High-speed motion synthesis.
                  </p>
</div>

<div className="group flex flex-col p-4 rounded-xl border border-white/5 bg-[#0a0a0a] hover:border-[#8A2BE2] hover:bg-white/5 transition-all cursor-default shadow-sm hover:shadow-md hover:shadow-[#8A2BE2]/10">
<div className="flex items-center gap-3 mb-2">
<div className="h-8 w-8 rounded-md bg-[#8A2BE2]/20 text-[#8A2BE2] flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16">
<path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
<path d="M10 2c1 .5 2 2 2 5"></path>
</svg>
</div>
<h4 className="text-sm font-semibold text-white">
                      Kling V2.6 Pro
                    </h4>
</div>
<p className="text-xs text-[#E0E0E0]">
                    Commercial broadcast quality.
                  </p>
</div>

<div className="group flex flex-col p-4 rounded-xl border border-white/5 bg-[#0a0a0a] hover:border-[#8A2BE2] hover:bg-white/5 transition-all cursor-default shadow-sm hover:shadow-md hover:shadow-[#8A2BE2]/10">
<div className="flex items-center gap-3 mb-2">
<div className="h-8 w-8 rounded-md bg-[#8A2BE2]/20 text-[#8A2BE2] flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16">
<circle cx="12" cy="12" r="10"></circle>
<polygon points="10 8 16 12 10 16 10 8"></polygon>
</svg>
</div>
<h4 className="text-sm font-semibold text-white">
                      Kling Video V1
                    </h4>
</div>
<p className="text-xs text-[#E0E0E0]">
                    Classic stable video loops.
                  </p>
</div>

<div className="group flex flex-col p-4 rounded-xl border border-white/5 bg-[#0a0a0a] hover:border-[#8A2BE2] hover:bg-white/5 transition-all cursor-default shadow-sm hover:shadow-md hover:shadow-[#8A2BE2]/10">
<div className="flex items-center gap-3 mb-2">
<div className="h-8 w-8 rounded-md bg-[#8A2BE2]/20 text-[#8A2BE2] flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16">
<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
</svg>
</div>
<h4 className="text-sm font-semibold text-white">
                      Kling 2.5 Turbo
                    </h4>
</div>
<p className="text-xs text-[#E0E0E0]">Fast social media clips.</p>
</div>

<div className="group flex flex-col p-4 rounded-xl border border-white/5 bg-[#0a0a0a] hover:border-[#8A2BE2] hover:bg-white/5 transition-all cursor-default shadow-sm hover:shadow-md hover:shadow-[#8A2BE2]/10">
<div className="flex items-center gap-3 mb-2">
<div className="h-8 w-8 rounded-md bg-[#8A2BE2]/20 text-[#8A2BE2] flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16">
<path d="M12 12c-2-3-5.5-3-7.5-3s-2.5.5-2.5 1.5c0 1.5 2 3.5 5 4.5 3 1 7.5 1 7.5-3Z"></path>
<path d="M12 12c2-3 5.5-3 7.5-3s2.5.5 2.5 1.5c0 1.5-2 3.5-5 4.5-3 1-7.5 1-7.5-3Z"></path>
<path d="M12 12c0 3 0 7.5-3 7.5s-1.5-.5-1.5-2.5c0-2 2-5 4.5-5Z"></path>
<path d="M12 12c0 3 0 7.5 3 7.5s1.5-.5 1.5-2.5c0-2-2-5-4.5-5Z"></path>
</svg>
</div>
<h4 className="text-sm font-semibold text-white">
                      Kling Video O1
                    </h4>
</div>
<p className="text-xs text-[#E0E0E0]">Fluid artistic motion.</p>
</div>

<div className="group flex flex-col p-4 rounded-xl border border-white/5 bg-[#0a0a0a] hover:border-[#8A2BE2] hover:bg-white/5 transition-all cursor-default shadow-sm hover:shadow-md hover:shadow-[#8A2BE2]/10">
<div className="flex items-center gap-3 mb-2">
<div className="h-8 w-8 rounded-md bg-[#8A2BE2]/20 text-[#8A2BE2] flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16">
<rect height="20" rx="2.18" ry="2.18" width="20" x="2" y="2"></rect>
<line x1="7" x2="7" y1="2" y2="22"></line>
<line x1="17" x2="17" y1="2" y2="22"></line>
<line x1="2" x2="22" y1="12" y2="12"></line>
<line x1="2" x2="7" y1="7" y2="7"></line>
<line x1="2" x2="7" y1="17" y2="17"></line>
<line x1="17" x2="22" y1="17" y2="17"></line>
<line x1="17" x2="22" y1="7" y2="7"></line>
</svg>
</div>
<h4 className="text-sm font-semibold text-white">
                      Wan 2.2 Fast
                    </h4>
</div>
<p className="text-xs text-[#E0E0E0]">
                    Quick draft visualization.
                  </p>
</div>

<div className="group flex flex-col p-4 rounded-xl border border-white/5 bg-[#0a0a0a] hover:border-[#8A2BE2] hover:bg-white/5 transition-all cursor-default shadow-sm hover:shadow-md hover:shadow-[#8A2BE2]/10">
<div className="flex items-center gap-3 mb-2">
<div className="h-8 w-8 rounded-md bg-[#8A2BE2]/20 text-[#8A2BE2] flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="4"></circle>
<line x1="4.93" x2="9.17" y1="4.93" y2="9.17"></line>
<line x1="14.83" x2="19.07" y1="14.83" y2="19.07"></line>
<line x1="14.83" x2="19.07" y1="9.17" y2="4.93"></line>
<line x1="14.83" x2="18.36" y1="9.17" y2="5.64"></line>
<line x1="4.93" x2="9.17" y1="19.07" y2="14.83"></line>
</svg>
</div>
<h4 className="text-sm font-semibold text-white">Wan 2.5</h4>
</div>
<p className="text-xs text-[#E0E0E0]">
                    Dynamic scene transitions.
                  </p>
</div>

<div className="group flex flex-col p-4 rounded-xl border border-white/5 bg-[#0a0a0a] hover:border-[#8A2BE2] hover:bg-white/5 transition-all cursor-default shadow-sm hover:shadow-md hover:shadow-[#8A2BE2]/10 col-span-1 md:col-span-2">
<div className="flex items-center gap-3 mb-2">
<div className="h-8 w-8 rounded-md bg-[#8A2BE2]/20 text-[#8A2BE2] flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16">
<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
</svg>
</div>
<h4 className="text-sm font-semibold text-white">
                      Wan 2.5 Turbo
                    </h4>
</div>
<p className="text-xs text-[#E0E0E0]">High-speed dynamic flow.</p>
</div>
</div>
</div>

<div className="relative h-full">
<div className="absolute inset-0 overflow-hidden flex flex-col bg-black w-full border-white/10 border rounded-3xl shadow-2xl shadow-[#8A2BE2]/10 gap-x-6 gap-y-8 justify-center items-center">

<div className="absolute inset-0 bg-[#8A2BE2] opacity-10 blur-3xl rounded-full scale-150 animate-pulse"></div>
<div className="z-10 bg-gradient-to-b from-black via-transparent to-black absolute top-0 left-0 right-0 h-full pointer-events-none opacity-40"></div>


<div className="flex gap-6 animate-scrolling w-[200%] opacity-40">
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-[#8A2BE2]/20 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-[#8A2BE2]/20 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
</div>

<div className="flex gap-6 animate-scrolling-reverse w-[200%] opacity-60">
<div className="flex-none w-64 h-40 rounded-xl bg-[#8A2BE2]/20 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-[#8A2BE2]/20 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
</div>

<div className="flex gap-6 animate-scrolling w-[200%] opacity-80">
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-[#8A2BE2]/30 border border-white/20 backdrop-blur-md shadow-[0_0_30px_rgba(138,43,226,0.3)]"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-[#8A2BE2]/30 border border-white/20 backdrop-blur-md"></div>
</div>

<div className="flex gap-6 animate-scrolling-reverse w-[200%] opacity-60">
<div className="flex-none w-64 h-40 rounded-xl bg-[#8A2BE2]/20 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-[#8A2BE2]/20 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
</div>

<div className="flex gap-6 animate-scrolling w-[200%] opacity-40">
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-[#8A2BE2]/20 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-[#8A2BE2]/20 border border-white/10 backdrop-blur-sm"></div>
<div className="flex-none w-64 h-40 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black pt-24 pb-24" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h3 className="text-4xl font-semibold tracking-tight text-white mb-4">
              Simple Pricing
            </h3>
<p className="text-[#E0E0E0] font-light">
              Choose the plan that fits your creative needs.
            </p>

<div className="mt-8 flex items-center justify-center gap-3">
<span className="text-sm font-medium text-white">Monthly</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox block appearance-none cursor-pointer transition-all duration-300 bg-white w-5 h-5 border-white/20 border-2 rounded-full absolute left-0" id="billing-toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-white/20 cursor-pointer" htmlFor="billing-toggle"></label>
</div>
<span className="text-sm font-medium text-[#E0E0E0]">
                Yearly
                <span className="text-[#8A2BE2] text-xs ml-1 font-semibold">
                  -20%
                </span>
</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl border border-white/10 bg-[#0a0a0a] hover:border-[#8A2BE2]/50 transition-colors flex flex-col">
<h4 className="text-lg font-medium text-white">Basic</h4>
<div className="my-4 flex items-baseline">
<span className="text-4xl font-semibold tracking-tight text-white">
                  $19
                </span>
<span className="text-[#E0E0E0] ml-1">/mo</span>
</div>
<p className="text-sm text-[#E0E0E0] mb-8 h-10">
                Essential tools for hobbyists and explorers.
              </p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-[#E0E0E0]">
<svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                  500 Image credits
                </li>
<li className="flex items-center gap-3 text-sm text-[#E0E0E0]">
<svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                  Standard speed
                </li>
<li className="flex items-center gap-3 text-sm text-[#E0E0E0]">
<svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                  Commercial license
                </li>
</ul>
<a className="block w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-white text-center text-sm font-medium rounded-xl border border-white/10 transition-colors" href="#">
                Start Free Trial
              </a>
</div>

<div className="relative p-8 rounded-3xl border-2 border-[#8A2BE2] bg-[#0a0a0a] shadow-xl shadow-[#8A2BE2]/10 flex flex-col">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8A2BE2] text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                Most Popular
              </div>
<h4 className="text-lg font-medium text-white">Pro</h4>
<div className="my-4 flex items-baseline">
<span className="text-4xl font-semibold tracking-tight text-white">
                  $49
                </span>
<span className="text-[#E0E0E0] ml-1">/mo</span>
</div>
<p className="text-sm text-[#E0E0E0] mb-8 h-10">
                For creators who need power and flexibility.
              </p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<svg className="w-5 h-5 text-[#8A2BE2] shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                  Unlimited Image credits
                </li>
<li className="flex items-center gap-3 text-sm text-white">
<svg className="w-5 h-5 text-[#8A2BE2] shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                  60 Video minutes
                </li>
<li className="flex items-center gap-3 text-sm text-white">
<svg className="w-5 h-5 text-[#8A2BE2] shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                  Priority processing
                </li>
</ul>
<a className="block w-full py-3 px-4 bg-[#8A2BE2] hover:bg-[#7B1FA2] text-white text-center text-sm font-medium rounded-xl transition-colors shadow-md shadow-[#8A2BE2]/30" href="#">
                Get Pro
              </a>
</div>

<div className="p-8 rounded-3xl border border-white/10 bg-[#0a0a0a] hover:border-[#8A2BE2]/50 transition-colors flex flex-col">
<h4 className="text-lg font-medium text-white">Studio</h4>
<div className="my-4 flex items-baseline">
<span className="text-4xl font-semibold tracking-tight text-white">
                  $99
                </span>
<span className="text-[#E0E0E0] ml-1">/mo</span>
</div>
<p className="text-sm text-[#E0E0E0] mb-8 h-10">
                Advanced features for professional teams.
              </p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-[#E0E0E0]">
<svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                  200 Video minutes
                </li>
<li className="flex items-center gap-3 text-sm text-[#E0E0E0]">
<svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                  Custom Model Training
                </li>
<li className="flex items-center gap-3 text-sm text-[#E0E0E0]">
<svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                  API Access
                </li>
</ul>
<a className="block w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-white text-center text-sm font-medium rounded-xl border border-white/10 transition-colors" href="#">
                Contact Sales
              </a>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-white/10 py-16">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 group hover:opacity-90 transition-opacity mb-4" href="#">

<svg className="w-8 h-8" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="logoGradientFooter" x1="10" x2="90" y1="10" y2="90">
<stop offset="0%" style={{stopColor: '#8A2BE2', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#4A148C', stopOpacity: '1'}}></stop>
</lineargradient>
<lineargradient gradientunits="userSpaceOnUse" id="logoInnerFooter" x1="40" x2="60" y1="30" y2="50">
<stop offset="0%" style={{stopColor: '#D8B4FE', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#8A2BE2', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
<path d="M25 15 H65 A25 25 0 0 1 65 65 H45 V85 H25 V15 Z" fill="url(#logoGradientFooter)"></path>
<path d="M45 30 V50 H65 A10 10 0 0 0 65 30 H45 Z" fill="#ffffff" opacity="0.2"></path>
<circle cx="58" cy="40" fill="url(#logoInnerFooter)" r="7" stroke="white" strokeWidth="2"></circle>
</svg>
<span className="text-lg font-semibold tracking-tighter text-white">
              Pinea
            </span>
</a>
<p className="text-xs text-[#E0E0E0]">© 2026 Pinea Inc.</p>
<div className="flex gap-4 mt-6">
<a className="text-[#E0E0E0] hover:text-white transition-colors" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="text-[#E0E0E0] hover:text-white transition-colors" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-[#E0E0E0] hover:text-white transition-colors" href="#">
                Documentation
              </a>
</li>
<li>
<a className="text-sm text-[#E0E0E0] hover:text-white transition-colors" href="#">
                Tutorials
              </a>
</li>
<li>
<a className="text-sm text-[#E0E0E0] hover:text-white transition-colors" href="#">
                Blog
              </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Company</h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-[#E0E0E0] hover:text-white transition-colors" href="#">
                About
              </a>
</li>
<li>
<a className="text-sm text-[#E0E0E0] hover:text-white transition-colors" href="#">
                Careers
              </a>
</li>
<li>
<a className="text-sm text-[#E0E0E0] hover:text-white transition-colors" href="#">
                Contact
              </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-[#E0E0E0] hover:text-white transition-colors" href="#">
                Privacy
              </a>
</li>
<li>
<a className="text-sm text-[#E0E0E0] hover:text-white transition-colors" href="#">
                Terms
              </a>
</li>
</ul>
</div>
</div>
</footer>

    </>
  );
}
