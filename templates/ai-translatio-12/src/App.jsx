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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        lucide.createIcons({
            attrs: {
                "stroke-width": 1.5
            }
        });

        // 3D Tilt Effect for Hero Visual
        const heroSection = document.querySelector('main');
        const heroVisual = document.getElementById('hero-visual');

        if(heroSection && heroVisual) {
            heroSection.addEventListener('mousemove', (e) => {
                const { clientX, clientY } = e;
                const { left, top, width, height } = heroVisual.getBoundingClientRect();
                
                // Calculate center of image
                const centerX = left + width / 2;
                const centerY = top + height / 2;
                
                // Calculate distance from center (clamped for subtle effect)
                const x = Math.min(Math.max((clientX - centerX) / 30, -10), 10);
                const y = Math.min(Math.max((clientY - centerY) / 30, -10), 10);
                
                // Apply rotation
                heroVisual.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`;
            });

            // Reset on mouse leave
            heroSection.addEventListener('mouseleave', () => {
                heroVisual.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            });
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bmaMERjX2VZDtPrh4Zwx"></div>
</div>

<div className="blob blob-1 bg-blue-600 w-96 h-96 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
<div className="blob blob-2 bg-indigo-600 w-[40rem] h-[40rem] rounded-full bottom-0 right-0 translate-x-1/3 translate-y-1/3"></div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow duration-500">
<span className="text-white font-bold text-xs">T</span>
</div>
<span className="text-white font-medium tracking-tight text-lg group-hover:text-blue-100 transition-colors">TeamsTranslate</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors hover:scale-105 transform duration-200" href="#features">Funktionen</a>
<a className="hover:text-white transition-colors hover:scale-105 transform duration-200" href="#security">Sicherheit</a>
<a className="hover:text-white transition-colors hover:scale-105 transform duration-200" href="#integration">Integration</a>
<a className="hover:text-white transition-colors hover:scale-105 transform duration-200" href="#pricing">Preise</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Login</a>
<button className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-4 py-2 rounded-full text-xs font-semibold transition-all hover:scale-105 active:scale-95">
                    Demo
                </button>
</div>
</div>
</nav>

<main className="flex flex-col text-center max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative perspective-[2000px] items-center">
<div className="fade-in-up inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium mb-8 hover:bg-blue-500/20 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
            Neu: Copilot 4.0 Integration
        </div>
<h1 className="fade-in-up delay-100 text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter mb-8 max-w-5xl leading-[1.1]">
            Sprachbarrieren in Teams <br/>
<span className="bg-gradient-to-b from-white via-white to-slate-500 bg-clip-text text-transparent">einfach auflösen.</span>
</h1>
<p className="fade-in-up delay-200 text-lg md:text-xl text-slate-400 max-w-2xl mb-10 font-light leading-relaxed">
            Nutzen Sie die Kraft von Microsoft Copilot, um Chats in Echtzeit von jeder Sprache in Ihre Unternehmenssprache zu übersetzen.
        </p>
<div className="fade-in-up delay-300 flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">

<button className="shiny-cta">
<span>
                    Zu Teams hinzufügen
                    <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
<button className="w-full md:w-auto text-slate-300 hover:text-white h-12 px-6 rounded-full font-medium text-sm transition-all flex items-center justify-center gap-2 group">
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
<svg className="lucide lucide-play w-3 h-3 fill-current ml-0.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
<span>Video ansehen</span>
</button>
</div>

<div className="fade-in-up delay-300 mt-24 w-full relative group tilt-card select-none" id="hero-visual" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)'}}>

<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000 animate-pulse"></div>
<div className="relative glass rounded-xl border border-white/10 overflow-hidden aspect-[16/9] md:aspect-[21/9] flex bg-slate-950/80 shadow-2xl backdrop-blur-xl">

<div className="w-16 border-r border-white/5 flex flex-col items-center py-6 gap-6 bg-slate-900/50 hidden md:flex z-10">
<div className="w-8 h-8 rounded bg-indigo-500/20 text-indigo-400 flex items-center justify-center cursor-pointer hover:bg-indigo-500/30 transition-colors"><svg className="lucide lucide-bell w-4 h-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg></div>
<div className="w-8 h-8 rounded bg-slate-800/50 text-slate-500 flex items-center justify-center cursor-pointer hover:text-white transition-colors"><svg className="lucide lucide-message-square w-4 h-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg></div>
<div className="w-8 h-8 rounded bg-slate-800/50 text-slate-500 flex items-center justify-center cursor-pointer hover:text-white transition-colors"><svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg></div>
</div>

<div className="w-64 border-r border-white/5 bg-slate-950/30 hidden lg:block z-10">
<div className="p-4 border-b border-white/5 flex items-center justify-between">
<span className="text-sm font-medium text-white">Chat</span>
<svg className="lucide lucide-filter w-3 h-3 text-slate-500 hover:text-white cursor-pointer" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
</div>
<div className="p-2 space-y-1">
<div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-transparent border-l-2 border-blue-500 cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-pink-500/20 text-pink-300 flex items-center justify-center text-xs font-medium ring-2 ring-slate-950">JS</div>
<div>
<div className="text-xs font-medium text-white">Yuki Tanaka</div>
<div className="text-[10px] text-blue-300 flex items-center gap-1">
<span className="w-1 h-1 rounded-full bg-blue-400 animate-pulse"></span>
                                        Schreibt...
                                    </div>
</div>
</div>
</div>
<div className="p-3 rounded-lg hover:bg-white/5 opacity-60 cursor-pointer transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-xs font-medium">MP</div>
<div>
<div className="text-xs font-medium text-white">Marco Polo</div>
<div className="text-[10px] text-slate-500">Grazie mille!</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col relative z-0">

<div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-slate-950/20">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-pink-500/20 text-pink-300 flex items-center justify-center text-sm font-medium">YT</div>
<span className="text-sm font-medium text-white">Yuki Tanaka (Global Sales)</span>
</div>
<div className="flex gap-4 text-slate-500">
<div className="p-1.5 hover:bg-white/10 rounded transition-colors cursor-pointer"><svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg></div>
<div className="p-1.5 hover:bg-white/10 rounded transition-colors cursor-pointer"><svg className="lucide lucide-video w-4 h-4" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg></div>
</div>
</div>

<div className="flex-1 p-6 flex flex-col gap-6 justify-end pb-24 overflow-hidden">

<div className="flex flex-col items-start gap-1 max-w-[80%] transform transition-all duration-500 translate-y-0 opacity-100">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs text-slate-400">Yuki Tanaka</span>
<span className="text-[10px] text-slate-600">14:02</span>
</div>
<div className="glass px-4 py-3 rounded-2xl rounded-tl-sm text-sm text-slate-300 hover:text-white transition-colors">
                                弊社の新しい提案について、ご意見をお聞かせください。
                            </div>
</div>

<div className="flex flex-col items-start gap-1 max-w-[80%] group/msg">
<div className="flex items-center gap-2 ml-1">
<div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center animate-spin-slow" style={{animationDuration: '3s'}}>
<svg className="lucide lucide-sparkles w-2 h-2 text-white" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="text-[10px] font-medium text-blue-300 tracking-wide uppercase">Copilot Übersetzung</span>
</div>
<div className="relative bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border border-blue-500/30 px-4 py-3 rounded-2xl rounded-tl-sm text-sm text-white shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)] group-hover/msg:shadow-[0_0_40px_-5px_rgba(59,130,246,0.4)] transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent skew-x-12 translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                                Könnten Sie uns bitte Ihr Feedback zu unserem neuen Vorschlag geben?
                            </div>
</div>

<div className="absolute bottom-6 left-6 right-6 h-12 bg-slate-900/90 backdrop-blur border border-white/10 rounded-lg flex items-center px-4 justify-between group-hover:border-blue-500/30 transition-colors">
<span className="text-sm text-slate-500 flex items-center gap-2">
<span className="w-0.5 h-4 bg-blue-500 animate-pulse"></span>
                                Antworten...
                            </span>
<div className="p-1.5 bg-blue-600 rounded text-white cursor-pointer hover:bg-blue-500 transition-colors">
<svg className="lucide lucide-send w-3 h-3" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-20 w-full pt-10 border-t border-white/5">
<p className="text-center text-sm text-slate-500 mb-8">Vertraut von innovativen Teams weltweit</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
<span className="text-lg font-bold tracking-tighter text-white cursor-default hover:scale-110 transition-transform">ACME CORP</span>
<span className="text-lg font-bold tracking-tighter text-white cursor-default hover:scale-110 transition-transform">GLOBALFLOW</span>
<span className="text-lg font-bold tracking-tighter text-white cursor-default hover:scale-110 transition-transform">NEXUS AG</span>
<span className="text-lg font-bold tracking-tighter text-white cursor-default hover:scale-110 transition-transform">STRATOS</span>
<span className="text-lg font-bold tracking-tighter text-white cursor-default hover:scale-110 transition-transform">VELOCITY</span>
</div>
</div>
</main>

<section className="py-24 px-6 max-w-7xl mx-auto" id="features">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Verstehen ohne Grenzen.</h2>
<p className="text-slate-400 max-w-2xl text-lg">Unsere Engine nutzt modernste KI-Modelle, um Nuancen und Kontext in Millisekunden zu interpretieren.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 row-span-2 glass rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
<div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] group-hover:bg-blue-600/20 transition-all duration-700"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300 group-hover:border-blue-500/30">
<svg className="lucide lucide-languages text-blue-400" data-lucide="languages" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-white mb-3">50+ Sprachen in Echtzeit</h3>
<p className="text-slate-400 leading-relaxed max-w-md">Egal ob Japanisch, Französisch oder Arabisch – TeamsTranslate erkennt die Ausgangssprache automatisch.</p>
</div>
<div className="mt-12 grid grid-cols-2 gap-4">
<div className="bg-slate-900/50 border border-white/5 rounded-xl p-4 group-hover:border-emerald-500/20 transition-colors">
<div className="text-xs text-slate-500 mb-1">Latenz</div>
<div className="text-xl font-mono text-emerald-400 flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                                &lt; 200ms
                            </div>
</div>
<div className="bg-slate-900/50 border border-white/5 rounded-xl p-4 group-hover:border-blue-500/20 transition-colors">
<div className="text-xs text-slate-500 mb-1">Genauigkeit</div>
<div className="text-xl font-mono text-blue-400">99.2%</div>
</div>
</div>
</div>
</div>

<div className="glass rounded-3xl p-8 relative overflow-hidden group md:row-span-2 hover:scale-[1.01] transition-transform duration-300">
<div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-indigo-900/20 to-transparent group-hover:from-indigo-900/30 transition-all"></div>
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:rotate-12 transition-transform duration-300">
<svg className="lucide lucide-bot text-indigo-400" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Powered by Copilot</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-8">Native LLM-Infrastruktur für maximales Kontextverständnis.</p>
<div className="space-y-3 relative z-10">
<div className="p-3 rounded bg-slate-950/50 border border-white/5 text-xs font-mono text-slate-300 shadow-lg">
<div className="flex gap-2 items-center text-blue-400 mb-1">
<svg className="lucide lucide-terminal w-3 h-3" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg>
<span>processing...</span>
</div>
<div className="opacity-70">&gt; Analysiere Kontext...</div>
<div className="opacity-80">&gt; Erkenne Fachjargon...</div>
<div className="text-green-400">&gt; Übersetzung fertig.</div>
</div>
</div>
</div>

<div className="glass rounded-3xl p-8 relative overflow-hidden group md:col-span-3 flex flex-col md:flex-row items-center gap-8 hover:scale-[1.01] transition-transform duration-300">
<div className="flex-1">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:bg-emerald-500/10 transition-colors">
<svg className="lucide lucide-shield-check text-emerald-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-white mb-3">Enterprise Grade Security</h3>
<p className="text-slate-400 leading-relaxed">Ihre Daten verlassen niemals den Microsoft 365 Tenant. Compliance mit DSGVO und ISO 27001.</p>
</div>
<div className="flex items-center gap-6 pr-8">
<div className="flex flex-col items-center gap-3 group/icon">
<div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center group-hover/icon:scale-110 transition-transform">
<svg className="lucide lucide-lock w-5 h-5 text-white" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<span className="text-[10px] text-slate-500 uppercase tracking-wider">E2E</span>
</div>

<div className="h-px w-20 bg-slate-800 relative overflow-hidden">
<div className="absolute inset-0 bg-emerald-500 w-1/2 -translate-x-full animate-[shimmer_2s_infinite]"></div>
</div>
<div className="flex flex-col items-center gap-3 group/icon">
<div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center group-hover/icon:scale-110 transition-transform">
<svg className="lucide lucide-server w-5 h-5 text-white" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</div>
<span className="text-[10px] text-slate-500 uppercase tracking-wider">On-Prem</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 relative" id="pricing">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Transparente Preise.</h2>
<p className="text-slate-400">Skalierbar für Teams jeder Größe.</p>
<div className="mt-8 flex items-center justify-center gap-4">
<span className="text-sm text-slate-300">Monatlich</span>
<div className="w-12 h-6 bg-slate-800 rounded-full p-1 relative cursor-pointer border border-white/10 transition-colors hover:border-blue-500/50">
<div className="w-4 h-4 bg-blue-500 rounded-full shadow-md translate-x-6 transition-transform"></div>
</div>
<span className="text-sm text-white font-medium">Jährlich <span className="text-blue-400 text-xs ml-1 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">-15%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="glass p-8 rounded-2xl border border-white/5 flex flex-col hover:border-white/10 transition-all duration-300 hover:-translate-y-2">
<h3 className="text-lg font-medium text-white mb-2">Team Starter</h3>
<div className="text-4xl font-semibold text-white mb-6">€9<span className="text-sm text-slate-500 font-normal">/Nutzer</span></div>
<p className="text-slate-400 text-sm mb-8">Für kleine Teams.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<svg className="lucide lucide-check w-4 h-4 text-slate-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                        Bis zu 5 Sprachen
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<svg className="lucide lucide-check w-4 h-4 text-slate-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                        Standard Support
                    </li>
</ul>
<button className="w-full py-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-medium">Starten</button>
</div>

<div className="p-8 rounded-2xl bg-slate-900 border border-blue-500/50 flex flex-col relative shadow-[0_0_50px_-10px_rgba(37,99,235,0.2)] hover:shadow-[0_0_70px_-10px_rgba(37,99,235,0.3)] transition-all duration-300 hover:-translate-y-4 scale-105 z-10">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide shadow-lg shadow-blue-500/40">EMPFOHLEN</div>
<h3 className="text-lg font-medium text-white mb-2">Business</h3>
<div className="text-4xl font-semibold text-white mb-6">€19<span className="text-sm text-slate-500 font-normal">/Nutzer</span></div>
<p className="text-blue-200 text-sm mb-8">Volle Automatisierung.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<div className="p-0.5 rounded-full bg-blue-500/20"><svg className="lucide lucide-check w-3 h-3 text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
                        Unbegrenzte Sprachen
                    </li>
<li className="flex items-center gap-3 text-sm text-white">
<div className="p-0.5 rounded-full bg-blue-500/20"><svg className="lucide lucide-check w-3 h-3 text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
                        Fachterminologie-Glossar
                    </li>
</ul>

<button className="shiny-cta w-full flex justify-center">
<span>Kostenlos testen</span>
</button>
</div>

<div className="glass p-8 rounded-2xl border border-white/5 flex flex-col hover:border-white/10 transition-all duration-300 hover:-translate-y-2">
<h3 className="text-lg font-medium text-white mb-2">Enterprise</h3>
<div className="text-4xl font-semibold text-white mb-6">Individuell</div>
<p className="text-slate-400 text-sm mb-8">Für globale Organisationen.</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<svg className="lucide lucide-check w-4 h-4 text-slate-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                        SLA Garantien
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<svg className="lucide lucide-check w-4 h-4 text-slate-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                        Audit Logs &amp; API
                    </li>
</ul>
<button className="w-full py-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-medium">Kontakt aufnehmen</button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded shadow-lg shadow-blue-500/20"></div>
<span className="text-white font-medium tracking-tight">TeamsTranslate</span>
</div>
<p className="text-slate-500 text-sm leading-relaxed">
                        Die intelligenteste Art, in Microsoft Teams global zu kommunizieren.
                    </p>
</div>

<div>
<h4 className="text-white font-medium mb-4 text-sm">Produkt</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-400 transition-colors" href="#">Funktionen</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Integrationen</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Rechtliches</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-400 transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Datenschutz</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-white font-medium mb-4 text-sm">Social</h4>
<div className="flex gap-4">
<svg className="lucide lucide-twitter w-4 h-4 text-slate-500 hover:text-white cursor-pointer transition-colors hover:scale-110" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
<svg className="lucide lucide-linkedin w-4 h-4 text-slate-500 hover:text-white cursor-pointer transition-colors hover:scale-110" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
<svg className="lucide lucide-github w-4 h-4 text-slate-500 hover:text-white cursor-pointer transition-colors hover:scale-110" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</div>
</div>
</div>
<div className="flex justify-between items-center pt-8 border-t border-white/5">
<p className="text-slate-600 text-xs">© 2024 TeamsTranslate GmbH. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
