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



(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        (function() {
          const testimonials = [
            {
              quote: "\"I produced an entire audiobook series in three languages using just a 30-minute sample of my voice. The emotional depth BotExerpts captures is indistinguishable from my real recording sessions.\"",
              author: "Marcus Thorne",
              role: "Sci-Fi Author",
              image: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?w=1600&q=80"
            },
            {
              quote: "\"As a content creator, I can't always be on mic. BotExerpts lets me script my YouTube shorts and generate the VO in seconds. It sounds exactly like me, even the intonation.\"",
              author: "Sarah Jenkins",
              role: "Tech YouTuber",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1600&q=80"
            },
            {
              quote: "\"The latency for the speech-to-speech engine is incredible. We use it for real-time character dubbing in our indie game, saving us thousands in studio time.\"",
              author: "David Chen",
              role: "Game Developer",
              image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1600&q=80"
            }
          ];
          
          let currentIndex = 0;
          
          window.nextTestimonial = function() {
            currentIndex = (currentIndex + 1) % testimonials.length;
            updateTestimonial();
          };
          
          window.prevTestimonial = function() {
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            updateTestimonial();
          };
          
          function updateTestimonial() {
            const data = testimonials[currentIndex];
            const quoteEl = document.getElementById('t-quote');
            const authorEl = document.getElementById('t-author');
            const roleEl = document.getElementById('t-role');
            const imageEl = document.getElementById('t-image');
            
            // Fade out
            [quoteEl, authorEl, roleEl, imageEl].forEach(el => el.style.opacity = '0');
            
            setTimeout(() => {
              // Update content
              quoteEl.innerText = data.quote;
              authorEl.innerText = data.author;
              // Reset role with flag element
              roleEl.innerHTML = `${data.role} <span class="inline-block w-4 h-3 rounded-[1px] bg-gradient-to-r from-blue-600 via-white to-red-600 shadow-sm opacity-80"></span>`;
              imageEl.src = data.image;
              
              // Fade in
              [quoteEl, authorEl, roleEl, imageEl].forEach(el => el.style.opacity = '1');
            }, 300);
          }
        })();
      
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

<div className="fixed z-0 pointer-events-none top-0 right-0 bottom-0 left-0 overflow-hidden">

<div className="stars absolute inset-0"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-900/10 blur-[120px] rounded-full animate-blob delay-blob-1"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-950/20 blur-[100px] rounded-full animate-blob delay-blob-2"></div>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] opacity-20"></div>
</div>

<nav className="relative z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto border-b border-white/5 animate-entry delay-75">

<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<div className="relative flex items-center justify-center w-8 h-8">
<svg className="lucide lucide-mic text-white w-8 h-8 absolute" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
<svg className="lucide lucide-mic-2 absolute w-[32px] h-[32px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '32px', height: '32px', color: 'rgb(249, 115, 22)', opacity: '0.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
</div>
<span className="text-xl text-white font-sans tracking-tight" style={{}}>AI.BotExerpts</span>
</div>

<div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-1 py-1 backdrop-blur-md">
<a className="px-4 py-1.5 bg-neutral-800/80 rounded-full text-xs text-white flex items-center gap-2 border border-white/5 shadow-inner font-sans" href="#" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
          Studio
        </a>
<a className="px-4 py-1.5 text-xs text-neutral-400 hover:text-white transition-colors font-sans" href="#" style={{}}>
          Voice Library
        </a>
<button className="px-4 py-1.5 text-xs text-neutral-400 hover:text-white transition-colors flex items-center gap-1 font-sans" style={{}}>
          Use Cases
          <svg className="lucide lucide-chevron-down w-3 h-3" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<a className="px-4 py-1.5 text-xs text-neutral-400 hover:text-white transition-colors font-sans" href="#" style={{}}>
          API
        </a>
</div>

<a className="hidden md:block hover:brightness-110 transition-all text-sm text-white bg-gradient-to-b from-orange-400 to-orange-600 border-white/20 rounded-full border-t pt-2 pr-5 pb-2 pl-5 shadow-[0_0_15px_-3px_rgba(249,115,22,0.4)] font-sans" href="#" style={{}}>
        Clone Voice
      </a>
</nav>

<main className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pt-24 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-20 pl-6 relative items-center">
<div className="absolute top-0 right-0 bottom-0 left-0" data-container-bg="true">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="AhqzKk9mZE0EnlENMQDi"></div>
</div>

<div className="lg:col-span-7 flex flex-col relative items-start z-10">

<div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-xs text-neutral-300 animate-entry delay-100">
<svg className="lucide lucide-bot w-3 h-3 text-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
<span className="font-sans" style={{}}>Generative Voice AI</span>
</div>

<h1 className="text-5xl lg:text-[76px] leading-[1.05] text-white mb-6 font-bricolage font-light tracking-tight animate-entry delay-150" style={{}}>
          CLONE YOUR
          <span className="inline-flex align-middle mx-1"></span>
          VOICE. SCALE
          <br/>
          YOUR AUDIO
          <br/>
          PRESENCE.
        </h1>

<p className="text-lg text-neutral-400 max-w-xl mb-10 leading-relaxed font-sans animate-entry delay-200" style={{}}>
          Create ultra-realistic text-to-speech with your own voice. Capture emotion, dialect, and nuance in seconds with our advanced audio engine.
        </p>

<div className="flex flex-wrap gap-4 mb-20 gap-x-4 gap-y-4 items-center animate-entry delay-300">
<button className="group relative flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-t from-yellow-200 via-orange-400 to-orange-500 px-8 py-3 text-lg font-medium text-[#2c1306] shadow-[0_0_40px_-5px_rgba(249,115,22,0.6)] ring-1 ring-inset ring-white/40 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-5px_rgba(249,115,22,0.8)] font-sans">
<span className="font-sans" style={{}}>Start Cloning</span>
</button>
<button className="px-8 py-3 rounded-full bg-white text-black text-lg hover:bg-neutral-200 transition-colors font-sans" style={{}}>
            Listen to Samples
          </button>
</div>
</div>

<div className="lg:col-span-5 flex lg:justify-end lg:mt-0 mt-0 relative justify-center z-10 animate-entry delay-500">

<div className="relative w-[360px] bg-neutral-900 rounded-[32px] p-[2px] electric-card overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-yellow-300 via-orange-500 to-transparent opacity-80 z-0"></div>

<div className="relative z-10 bg-[#0A0A0A] rounded-[30px] h-full p-8 flex flex-col items-start overflow-hidden">

<div className="absolute top-0 right-0 w-full h-40 bg-gradient-to-b from-orange-500/10 to-transparent"></div>

<div className="flex justify-between w-full items-start mb-6 relative">
<span className="text-[10px] uppercase text-neutral-400 border border-white/10 px-2 py-1 rounded bg-white/5 flex items-center gap-1.5 font-sans" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                Processing Audio
              </span>
</div>
<h3 className="text-xl text-white mb-2 font-sans" style={{}}>
              Voice Fidelity
            </h3>
<p className="text-xs text-neutral-400 mb-6 leading-relaxed font-sans" style={{}}>
              Analyzing vocal patterns and pitch match.
            </p>

<div className="w-full mb-8">
<div className="flex items-baseline gap-2 mb-2">
<span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-orange-400 font-bricolage font-light tracking-tight" style={{}}>
                  99.8%
                </span>
<span className="text-xs text-orange-500 flex items-center bg-orange-500/10 px-1.5 py-0.5 rounded font-sans" style={{}}>
<svg className="lucide lucide-check mr-0.5" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Match Accuracy
                </span>
</div>

<div className="w-full h-16 relative mt-4 flex items-center justify-between gap-0.5 px-1">

<div className="w-1.5 bg-orange-500/50 rounded-full h-3 wave-bar" style={{animationDelay: '0.1s'}}></div>
<div className="w-1.5 bg-orange-500/60 rounded-full h-5 wave-bar" style={{animationDelay: '0.2s'}}></div>
<div className="w-1.5 bg-orange-500/70 rounded-full h-8 wave-bar" style={{animationDelay: '0.3s'}}></div>
<div className="w-1.5 bg-orange-500/80 rounded-full h-4 wave-bar" style={{animationDelay: '0.1s'}}></div>
<div className="w-1.5 bg-orange-500/90 rounded-full h-7 wave-bar" style={{animationDelay: '0.4s'}}></div>
<div className="w-1.5 bg-orange-500 rounded-full h-12 wave-bar" style={{animationDelay: '0.2s'}}></div>
<div className="w-1.5 bg-orange-500 rounded-full h-8 wave-bar" style={{animationDelay: '0.5s'}}></div>
<div className="w-1.5 bg-orange-500 rounded-full h-14 wave-bar" style={{animationDelay: '0.3s'}}></div>
<div className="w-1.5 bg-orange-500 rounded-full h-10 wave-bar" style={{animationDelay: '0.1s'}}></div>
<div className="w-1.5 bg-orange-500 rounded-full h-6 wave-bar" style={{animationDelay: '0.6s'}}></div>
<div className="w-1.5 bg-orange-500/90 rounded-full h-12 wave-bar" style={{animationDelay: '0.2s'}}></div>
<div className="w-1.5 bg-orange-500/80 rounded-full h-8 wave-bar" style={{animationDelay: '0.4s'}}></div>
<div className="w-1.5 bg-orange-500/70 rounded-full h-4 wave-bar" style={{animationDelay: '0.3s'}}></div>
<div className="w-1.5 bg-orange-500/60 rounded-full h-9 wave-bar" style={{animationDelay: '0.1s'}}></div>
<div className="w-1.5 bg-orange-500/50 rounded-full h-3 wave-bar" style={{animationDelay: '0.5s'}}></div>
<div className="w-1.5 bg-orange-500/40 rounded-full h-5 wave-bar" style={{animationDelay: '0.2s'}}></div>
<div className="w-1.5 bg-orange-500/30 rounded-full h-2 wave-bar" style={{animationDelay: '0.4s'}}></div>
</div>
</div>

<button className="hover:brightness-110 transition-all text-sm text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 w-full border-white/20 rounded-full border-t mb-8 pt-3 pb-3 shadow-[0_4px_15px_rgba(249,115,22,0.4)] font-sans" style={{}}>
              Generate Speech
            </button>

<div className="space-y-4 w-full mb-8">
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-3 text-neutral-300">
<svg className="lucide lucide-mic w-4 h-4 text-orange-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
<path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
<line x1="12" x2="12" y1="19" y2="22"></line>
</svg>
<span className="font-sans" style={{}}>Sample Rate</span>
</div>
<span className="text-white font-sans" style={{}}>48kHz</span>
</div>
</div>

<div className="relative w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent mb-6 flex items-center justify-center">
<span className="bg-[#0A0A0A] px-2 text-[10px] text-neutral-400 uppercase font-sans" style={{}}>
                AI Model V2.0
              </span>
</div>

<div className="flex gap-4 w-full">
<div className="flex items-center gap-1.5 text-[10px] text-neutral-400 font-sans" style={{}}>
<svg className="lucide lucide-languages w-3.5 h-3.5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m5 8 6 6"></path>
<path d="m4 14 6-6 2-3"></path>
<path d="M2 5h12"></path>
<path d="M7 2h1"></path>
<path d="m22 22-5-10-5 10"></path>
<path d="M14 18h6"></path>
</svg>
                Multilingual Support
              </div>
</div>
</div>
</div>
</div>
</main>

<section className="-mt-4 animate-entry delay-700 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll lg:-mt-8 max-w-7xl mr-auto ml-auto pt-0 pr-0 pb-24 pl-0 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[300px] bg-orange-600/20 blur-[100px] rounded-full z-0 animate-blob"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

<div className="overflow-hidden md:col-span-2 lg:col-span-3 lg:bg-black/80 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] bg-neutral-900/80 rounded-2xl ring-white/10 ring-1 relative shadow-[0_0_40px_-10px_rgba(249,115,22,0.15)] backdrop-blur-sm">

<div className="-top-10 -right-10 bg-orange-500/10 w-56 h-56 rounded-full absolute blur-3xl"></div>

<div className="flex sm:px-6 bg-white/5 border-white/5 border-b pt-3 pr-4 pb-3 pl-4 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-3 text-sm text-neutral-400">
<a className="inline-flex items-center gap-2 text-white hover:text-orange-400 transition-colors font-sans" href="#" style={{}}>
<svg className="lucide lucide-mic-2 text-orange-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98l9.06-9.06"></path>
<path d="M12 8a2.82 2.82 0 1 0 3.98 3.98l9.06-9.06"></path>
<line x1="12" x2="16" y1="8" y2="12"></line>
</svg>
                AI.BotExerpts Studio
              </a>
<span className="opacity-40 font-sans" style={{}}>/</span>
<span className="text-white font-sans" style={{}}>New Project</span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 text-orange-400 ring-1 ring-orange-500/20 px-2 py-0.5 text-[11px] font-sans" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                Ready
              </span>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-2 bg-black/40 ring-1 ring-white/10 rounded-lg pl-2.5 pr-2.5 h-8">
<svg className="lucide lucide-search text-neutral-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
<input className="bg-transparent text-sm text-zinc-300 placeholder-zinc-600 focus:outline-none w-48" placeholder="Search voices..." type="text"/>
</div>
<button className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-white/5 text-white text-xs ring-1 ring-white/10 px-3 py-1.5 hover:bg-white/10 transition font-sans" style={{}}>
<svg className="lucide lucide-download" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
                Export Audio
              </button>
</div>
</div>

<div className="grid grid-cols-12">

<aside className="hidden md:flex md:col-span-3 lg:col-span-2 flex-col min-h-[520px] bg-white/5 border-white/5 border-r">
<div className="px-4 py-4">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-900/20 text-sm hover:brightness-110 transition-all px-3 py-2 border border-white/10 font-sans" style={{}}>
<svg className="lucide lucide-plus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
                  New Clone
                </button>
</div>
<nav className="px-3 pb-4 space-y-6 overflow-y-auto">

<div className="">
<div className="px-2 mb-2 text-[10px] uppercase text-neutral-500 font-sans" style={{}}>
                    Library
                  </div>
<ul className="space-y-1">
<li className="">
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-white bg-white/5 ring-1 ring-white/10 shadow-inner font-sans" href="#" style={{}}>
<svg className="lucide lucide-mic-2 text-orange-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98l9.06-9.06"></path>
<path d="M12 8a2.82 2.82 0 1 0 3.98 3.98l9.06-9.06"></path>
<line x1="12" x2="16" y1="8" y2="12"></line>
</svg>
                        My Voices
                      </a>
</li>
<li className="">
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-sans" href="#" style={{}}>
<svg className="lucide lucide-library" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M7 7h10"></path>
<path d="M7 12h10"></path>
<path d="M7 17h10"></path>
</svg>
                        Stock Voices
                      </a>
</li>
<li className="">
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-sans" href="#" style={{}}>
<svg className="lucide lucide-history" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
<path d="M3 3v5h5"></path>
<path d="M12 7v5l4 2"></path>
</svg>
                        History
                      </a>
</li>
</ul>
</div>

<div className="">
<div className="px-2 mb-2 text-[10px] uppercase text-neutral-500 font-sans" style={{}}>
                    Developer
                  </div>
<ul className="space-y-1">
<li className="">
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-sans" href="#" style={{}}>
<svg className="lucide lucide-key" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="7.5" cy="15.5" r="5.5"></circle>
<path d="m21 2-9.6 9.6"></path>
<path d="m15.5 7.5 3 3L22 7l-3-3"></path>
</svg>
                        API Keys
                      </a>
</li>
</ul>
</div>
</nav>
</aside>

<main className="col-span-12 md:col-span-6 lg:col-span-7 min-h-[520px] bg-black/20 flex flex-col">

<div className="px-4 sm:px-6 py-3 border-b border-white/5 overflow-x-auto">
<div className="flex items-center gap-6 min-w-max">
<button className="text-sm text-white border-b-2 border-orange-500 pb-3 -mb-3.5 font-sans" style={{}}>
                    Text to Speech
                  </button>
<button className="text-sm text-neutral-500 hover:text-white transition pb-3 -mb-3.5 border-b-2 border-transparent hover:border-white/10 font-sans" style={{}}>
                    Speech to Speech
                  </button>
<button className="text-sm text-neutral-500 hover:text-white transition pb-3 -mb-3.5 border-b-2 border-transparent hover:border-white/10 font-sans" style={{}}>
                    Dubbing
                  </button>
</div>
</div>

<div className="flex-1 p-6 flex flex-col">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<img alt="Voice Avatar" className="w-8 h-8 rounded-full border border-white/10" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&amp;h=64&amp;q=80&amp;fit=crop"/>
<span className="text-white text-sm font-medium">Sarah (Narrative)</span>
<svg className="lucide lucide-chevron-down text-neutral-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<div className="flex items-center gap-2">
<button className="text-xs text-neutral-400 hover:text-white px-2 py-1 rounded hover:bg-white/5 border border-transparent hover:border-white/10 transition">Clear</button>
<button className="text-xs text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2 py-1 rounded transition">Generate</button>
</div>
</div>
<textarea className="w-full flex-1 bg-transparent text-lg text-neutral-300 placeholder-neutral-600 focus:outline-none resize-none font-sans leading-relaxed" placeholder="Type or paste text here to generate audio..."></textarea>

<div className="mt-auto bg-[#18181b] rounded-xl p-3 border border-white/5 flex items-center gap-4">
<button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-neutral-200 transition">
<svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</button>
<div className="flex-1 h-12 flex items-center gap-1 opacity-60">

<div className="w-1 bg-orange-500 h-4 rounded-full"></div>
<div className="w-1 bg-orange-500 h-6 rounded-full"></div>
<div className="w-1 bg-orange-500 h-8 rounded-full"></div>
<div className="w-1 bg-orange-500 h-5 rounded-full"></div>
<div className="w-1 bg-orange-500 h-3 rounded-full"></div>
<div className="w-1 bg-orange-500 h-7 rounded-full"></div>
<div className="w-1 bg-orange-500 h-10 rounded-full"></div>
<div className="w-1 bg-white h-8 rounded-full"></div>
<div className="w-1 bg-neutral-600 h-6 rounded-full"></div>
<div className="w-1 bg-neutral-600 h-4 rounded-full"></div>
<div className="w-1 bg-neutral-600 h-7 rounded-full"></div>
<div className="w-1 bg-neutral-600 h-3 rounded-full"></div>
<div className="w-1 bg-neutral-600 h-5 rounded-full"></div>
<div className="w-1 bg-neutral-600 h-2 rounded-full"></div>
<div className="w-1 bg-neutral-600 h-4 rounded-full"></div>
<div className="w-1 bg-neutral-600 h-6 rounded-full"></div>
<div className="w-1 bg-neutral-600 h-3 rounded-full"></div>
</div>
<span className="text-xs text-neutral-400 font-mono">00:04 / 00:12</span>
<button className="text-neutral-400 hover:text-white">
<svg className="lucide lucide-download" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
</button>
</div>
</div>
</main>

<aside className="hidden md:block md:col-span-3 lg:col-span-3 bg-white/5 border-l border-white/5 min-h-[520px]">
<div className="px-4 sm:px-5 py-4 space-y-4">

<div className="rounded-xl ring-1 ring-white/10 bg-black/20 p-4">
<div className="text-xs text-neutral-500 mb-3 uppercase font-sans" style={{}}>
                    Voice Settings
                  </div>

<div className="mb-4">
<div className="flex justify-between text-xs text-neutral-300 mb-2">
<span>Stability</span>
<span>75%</span>
</div>
<div className="h-1 bg-white/10 rounded-full overflow-hidden relative">
<div className="absolute left-0 top-0 bottom-0 w-3/4 bg-orange-500"></div>
</div>
</div>

<div className="mb-4">
<div className="flex justify-between text-xs text-neutral-300 mb-2">
<span>Similarity Boost</span>
<span>90%</span>
</div>
<div className="h-1 bg-white/10 rounded-full overflow-hidden relative">
<div className="absolute left-0 top-0 bottom-0 w-[90%] bg-orange-500"></div>
</div>
</div>

<div className="mb-2">
<div className="flex justify-between text-xs text-neutral-300 mb-2">
<span>Style Exaggeration</span>
<span>10%</span>
</div>
<div className="h-1 bg-white/10 rounded-full overflow-hidden relative">
<div className="absolute left-0 top-0 bottom-0 w-[10%] bg-orange-500"></div>
</div>
</div>
</div>

<div className="rounded-xl ring-1 ring-white/10 bg-black/20 p-4">
<div className="text-xs text-neutral-500 mb-2 uppercase font-sans" style={{}}>
                    Model Information
                  </div>
<div className="flex items-center gap-3 mb-3">
<div className="bg-orange-500/10 text-orange-500 p-2 rounded-lg">
<svg className="lucide lucide-sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
</div>
<div>
<div className="text-sm text-white">BotExerpts Turbo V2</div>
<div className="text-[10px] text-neutral-500">Low latency model</div>
</div>
</div>
<p className="text-xs text-neutral-400 leading-relaxed font-sans" style={{}}>
                    Optimized for English, Spanish, French, and German narration with high emotional range.
                  </p>
</div>

<div className="rounded-xl ring-1 ring-white/10 bg-black/20 p-4">
<div className="text-xs text-neutral-500 mb-3 uppercase font-sans" style={{}}>
                    Output Format
                  </div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-300 font-sans" style={{}}>
                        Format
                      </span>
<span className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-neutral-400">MP3 320kbps</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-300 font-sans" style={{}}>
                        Sample Rate
                      </span>
<span className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-neutral-400">44.1kHz</span>
</div>
</div>
</div>
</div>
</aside>
</div>
</div>
</div>
</section>

<section className="animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-tr from-gray-500/0 via-gray-500/10 to-gray-500/0 from-white/0 via-white/10 to-white/0 max-w-7xl rounded-3xl mt-24 mr-10 mb-24 ml-10 pt-10 pr-10 pb-10 pl-10 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '24px'}}>

<div className="flex mb-0 items-center justify-between">
<div className="flex flex-col text-left">
<div className="flex items-center gap-4 mb-3">
<span className="text-8xl text-white/5 font-bricolage font-light tracking-tight" style={{}}>
              01.
            </span>
<div className="space-y-2">
<h2 className="md:text-5xl text-4xl text-white font-bricolage font-light tracking-tight" style={{}}>
                Hyper-realistic Cloning
              </h2>
<p className="leading-relaxed text-lg text-neutral-400 max-w-2xl font-sans" style={{}}>
                Our AI analyzes seconds of audio to build a comprehensive voice model capable of speaking any language with native-level fluency.
              </p>
</div>
</div>
</div>
<div className="hidden md:block">
<button className="px-6 py-3 bg-orange-600 text-white rounded-lg shadow-lg hover:bg-orange-500 transition-colors whitespace-nowrap font-sans" style={{}}>
            Start Creating
          </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 mt-12 mb-12 gap-x-8 gap-y-8">

<div className="md:p-10 flex flex-col overflow-hidden group/card hover:border-white/20 transition-colors duration-500 bg-[#0A0A0A] border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative justify-between">

<div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none transition-opacity duration-500 opacity-50 group-hover/card:opacity-100"></div>

<div className="grid grid-cols-3 gap-4 mb-12 relative z-10">

<div className="flex flex-col items-center text-center gap-4 group cursor-pointer">
<div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-all duration-300">
<svg className="lucide lucide-mic" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
<path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
<line x1="12" x2="12" y1="19" y2="22"></line>
</svg>
</div>
<span className="text-xs text-neutral-500 leading-tight group-hover:text-neutral-300 transition-colors font-sans" style={{}}>
                Instant Clone
              </span>
</div>

<div className="flex flex-col items-center text-center gap-4 group cursor-pointer">
<div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-all duration-300">
<svg className="lucide lucide-smile-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11v1a10 10 0 1 1-9-10"></path>
<path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
<line x1="9" x2="9.01" y1="9" y2="9"></line>
<line x1="15" x2="15.01" y1="9" y2="9"></line>
<path d="M16 5h6"></path>
<path d="M19 2v6"></path>
</svg>
</div>
<span className="text-xs text-neutral-500 leading-tight group-hover:text-neutral-300 transition-colors font-sans" style={{}}>
                Emotion Control
              </span>
</div>

<div className="flex flex-col items-center text-center gap-4 group cursor-pointer">
<div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-all duration-300">
<svg className="lucide lucide-globe" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
<path d="M2 12h20"></path>
</svg>
</div>
<span className="text-xs text-neutral-500 leading-tight group-hover:text-neutral-300 transition-colors font-sans" style={{}}>
                Multilingual
              </span>
</div>
</div>

<div className="mb-10 relative z-10">
<div className="grid grid-cols-4 text-sm font-medium text-white mb-4 px-2">
<div className="col-span-2 font-sans" style={{}}>Language Model</div>
<div className="text-right text-neutral-400 font-sans" style={{}}>
                Latency
              </div>
<div className="text-right text-neutral-400 font-sans" style={{}}>
                Status
              </div>
</div>

<div className="grid grid-cols-4 text-sm text-neutral-400 py-4 border-t border-white/5 px-2 hover:bg-white/[0.02] transition-colors rounded-lg">
<div className="col-span-2 text-neutral-300 flex items-center gap-2 font-sans" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>
                BotExerpts Mono V1
              </div>
<div className="text-right font-sans" style={{}}>~350ms</div>
<div className="text-right text-neutral-500 font-sans" style={{}}>
                Legacy
              </div>
</div>

<div className="grid grid-cols-4 text-sm text-neutral-400 py-4 border-t border-white/5 px-2 relative overflow-hidden rounded-lg group">
<div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="col-span-2 text-white flex items-center gap-2 relative z-10 font-sans" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                BotExerpts Turbo V2
              </div>
<div className="text-right text-white relative z-10 font-sans" style={{}}>
                ~90ms
              </div>
<div className="text-right text-orange-400 relative z-10 font-sans" style={{}}>
                Active
              </div>
</div>
</div>

<div className="bg-neutral-900/40 border border-white/10 rounded-xl p-2 pl-4 flex justify-between items-center relative z-10 backdrop-blur-sm group hover:border-orange-500/30 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded flex items-center justify-center bg-[#FF0000]/20 text-[#FF0000]">
<svg fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
<path d="m10 15 5-3-5-3z" fill="white"></path>
</svg>
</div>
<span className="text-neutral-300 text-sm font-sans" style={{}}>
                Export to YouTube Shorts
              </span>
</div>
<div className="px-3 py-1.5 rounded-lg bg-white/5 group-hover:bg-orange-500 group-hover:text-white border border-white/5 flex items-center justify-center text-neutral-400 transition-colors text-xs font-sans" style={{}}>
              Connect
            </div>
</div>
</div>

<div className="overflow-hidden min-h-[450px] flex items-center justify-center bg-[#0A0A0A] border-white/10 border rounded-3xl relative group/orbit">

<div className="opacity-80 absolute top-0 right-0 bottom-0 left-0 bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.15)_0%,_rgba(0,0,0,0)_70%)] animate-blob"></div>

<div className="flex md:scale-100 transition-transform duration-500 w-full h-full relative scale-[0.65] items-center justify-center" style={{}}>

<div className="absolute flex items-center justify-center pointer-events-none opacity-20">
<div className="w-[180px] h-[180px] rounded-full border border-orange-500/30"></div>
</div>
<div className="absolute flex items-center justify-center pointer-events-none opacity-20">
<div className="w-[340px] h-[340px] rounded-full border border-orange-500/20"></div>
</div>
<div className="absolute flex items-center justify-center pointer-events-none opacity-10">
<div className="w-[500px] h-[500px] rounded-full border border-orange-500/10"></div>
</div>

<div className="relative w-24 h-24 rounded-full bg-[#120a05] border border-orange-500/50 flex items-center justify-center shadow-[0_0_50px_-5px_rgba(249,115,22,0.5)] z-20">
<div className="animate-ping opacity-20 border-orange-500 border rounded-full absolute top-0 right-0 bottom-0 left-0"></div>
<svg className="lucide lucide-mic text-orange-500" fill="none" height="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
<path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
<line x1="12" x2="12" y1="19" y2="22"></line>
</svg>
</div>

<div className="absolute inset-0 flex items-center justify-center animate-[spin_60s_linear_infinite]">


<div className="absolute top-1/2 left-1/2 z-10" style={{transform: 'translate(-50%, -50%) rotate(0deg) translateY(-170px) rotate(0deg)'}}>
<div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all hover:scale-110 shadow-lg cursor-pointer animate-[spin_60s_linear_infinite_reverse]">
<svg className="lucide lucide-headphones" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
</svg>
</div>
</div>

<div className="absolute top-1/2 left-1/2 z-10" style={{transform: 'translate(-50%, -50%) rotate(60deg) translateY(-170px) rotate(-60deg)'}}>
<div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all hover:scale-110 shadow-lg cursor-pointer animate-[spin_60s_linear_infinite_reverse]">
<svg className="lucide lucide-book-open" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
</svg>
</div>
</div>

<div className="absolute top-1/2 left-1/2 z-10" style={{transform: 'translate(-50%, -50%) rotate(120deg) translateY(-170px) rotate(-120deg)'}}>
<div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all hover:scale-110 shadow-lg cursor-pointer animate-[spin_60s_linear_infinite_reverse]">
<svg className="lucide lucide-instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</div>
</div>

<div className="absolute top-1/2 left-1/2 z-10" style={{transform: 'translate(-50%, -50%) rotate(180deg) translateY(-170px) rotate(-180deg)'}}>
<div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all hover:scale-110 shadow-lg cursor-pointer animate-[spin_60s_linear_infinite_reverse]">
<svg className="text-white w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.46a6.33 6.33 0 0 0 10.86 3.1 5.6 5.6 0 0 0 1.06-2.7V10.4a8.36 8.36 0 0 0 4.69 1.48V8.35a4.86 4.86 0 0 1-2.02-1.66z"></path>
</svg>
</div>
</div>

<div className="absolute top-1/2 left-1/2 z-10" style={{transform: 'translate(-50%, -50%) rotate(240deg) translateY(-170px) rotate(-240deg)'}}>
<div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all hover:scale-110 shadow-lg cursor-pointer animate-[spin_60s_linear_infinite_reverse]">
<svg className="lucide lucide-youtube" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
<path d="m10 15 5-3-5-3z"></path>
</svg>
</div>
</div>

<div className="absolute top-1/2 left-1/2 z-10" style={{transform: 'translate(-50%, -50%) rotate(300deg) translateY(-170px) rotate(-300deg)'}}>
<div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all hover:scale-110 shadow-lg cursor-pointer animate-[spin_60s_linear_infinite_reverse]">
<svg className="lucide lucide-gamepad-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="6" x2="10" y1="12" y2="12"></line>
<line x1="8" x2="8" y1="10" y2="14"></line>
<line x1="15" x2="15.01" y1="13" y2="13"></line>
<line x1="18" x2="18.01" y1="11" y2="11"></line>
<rect height="12" rx="2" width="20" x="2" y="6"></rect>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-12">

<div className="flex flex-col items-start group">
<div className="w-8 h-px bg-neutral-700 mb-6 group-hover:bg-orange-500 transition-colors duration-300"></div>
<svg className="lucide lucide-fingerprint text-neutral-400 mb-5 group-hover:text-orange-500 transition-colors duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 6"></path>
<path d="M5 15.1a7 7 0 0 0 10.9-3.2"></path>
<path d="M6 19a9 9 0 0 1 0-7.2"></path>
<path d="M12 10a2 2 0 0 1 1.7 1.2"></path>
</svg>
<h3 className="text-xl text-white mb-3 font-sans" style={{}}>
            Unique Fingerprint
          </h3>
<p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors font-sans" style={{}}>
            Our security protocols ensure your voice model is encrypted and usable only by you, protected by biometric verification.
          </p>
</div>

<div className="flex flex-col items-start group">
<div className="w-8 h-px bg-neutral-700 mb-6 group-hover:bg-orange-500 transition-colors duration-300"></div>
<svg className="lucide lucide-volume-2 text-neutral-400 mb-5 group-hover:text-orange-500 transition-colors duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
<path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
<path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
</svg>
<h3 className="text-xl text-white mb-3 font-sans" style={{}}>
            High Fidelity Audio
          </h3>
<p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors font-sans" style={{}}>
            Generate studio-quality 48kHz WAV files suitable for broadcasting, podcasts, audiobooks, and professional video production.
          </p>
</div>

<div className="flex flex-col group items-start">
<div className="w-8 h-px bg-neutral-700 mb-6 group-hover:bg-orange-500 transition-colors duration-300"></div>
<svg className="lucide lucide-layers text-neutral-400 mb-5 group-hover:text-orange-500 transition-colors duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
<polyline points="2 17 12 22 22 17"></polyline>
<polyline points="2 12 12 17 22 12"></polyline>
</svg>
<h3 className="text-xl text-white mb-3 font-sans" style={{}}>
            Project Management
          </h3>
<p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors font-sans" style={{}}>
            Organize generations into projects, edit audio with our built-in timeline, and collaborate with your production team.
          </p>
</div>
</div>
</section>

<section className="animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-tr from-gray-500/0 via-gray-500/10 to-gray-500/0 from-white/0 via-white/10 to-white/0 max-w-7xl rounded-3xl mt-24 mr-10 mb-24 ml-10 pt-10 pr-10 pb-10 pl-10 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '24px'}}>

<div className="flex flex-col mb-16">
<div className="flex mb-0 items-center justify-between">
<div className="flex flex-col text-left">
<div className="flex gap-4 mb-3 gap-x-4 gap-y-4 items-center">
<span className="text-8xl text-white/5 font-bricolage font-light tracking-tight" style={{}}>
                02.
              </span>
<div className="space-y-2">
<h2 className="md:text-5xl text-4xl text-white font-bricolage font-light tracking-tight" style={{}}>
                  Heard by Millions
                </h2>
<p className="leading-relaxed text-lg text-neutral-400 max-w-2xl font-sans" style={{}}>
                  Creators, authors, and studios use AI.BotExerpts to scale their audio production without stepping into a recording booth.
                </p>
</div>
</div>
</div>
<div className="hidden md:block">
<button className="px-6 py-3 bg-orange-600 text-white rounded-lg shadow-lg hover:bg-orange-500 transition-colors whitespace-nowrap font-sans" style={{}}>
              Clone Your Voice
            </button>
</div>
</div>
</div>

<div className="flex gap-4 md:gap-8 relative gap-x-4 gap-y-4 items-center justify-between">
<button className="hidden md:flex w-12 h-12 rounded-xl border border-white/10 bg-[#0F0F0F] text-neutral-400 items-center justify-center hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 z-30 group shrink-0 shadow-lg cursor-pointer" onclick="window.prevTestimonial()">
<svg className="lucide lucide-arrow-left group-hover:-translate-x-0.5 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m12 19-7-7 7-7"></path>
<path d="M19 12H5"></path>
</svg>
</button>
<div className="relative w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-8 group/carousel">
<div className="lg:col-span-6 lg:col-start-1 relative z-20">
<div className="overflow-hidden group/card hover:border-white/20 transition-colors duration-300 md:p-12 bg-[#0A0A0A]/50 w-full lg:w-[620px] border-white/10 border rounded-[24px] pt-8 pr-8 pb-8 pl-8 relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl">
<div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[80px] rounded-full pointer-events-none"></div>
<div className="mb-8 text-orange-500 relative z-10">
<svg fill="currentColor" height="40" stroke="none" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
</svg>
</div>
<blockquote className="text-xl md:text-2xl leading-relaxed text-neutral-200 mb-10 relative z-10 font-bricolage font-light tracking-tight transition-opacity duration-300" id="t-quote" style={{}}>
                "I produced an entire audiobook series in three languages using just a 30-minute sample of my voice. The emotional depth BotExerpts captures is indistinguishable from my real recording sessions."
              </blockquote>
<div className="flex items-center gap-4 relative z-10">
<div className="flex flex-col">
<span className="text-white text-lg font-sans transition-opacity duration-300" id="t-author" style={{}}>
                    Marcus Thorne
                  </span>
<span className="text-neutral-500 text-xs uppercase flex items-center gap-2 mt-1 font-sans transition-opacity duration-300" id="t-role" style={{}}>
                    Sci-Fi Author
                    <span className="inline-block w-4 h-3 rounded-[1px] bg-gradient-to-r from-blue-600 via-white to-red-600 shadow-sm opacity-80" title="France"></span>
</span>
</div>
</div>
</div>
</div>
<div className="lg:col-span-6 lg:col-start-7 relative h-[400px] md:h-[600px] rounded-[32px] overflow-hidden border border-white/5 ring-1 ring-white/5 shadow-2xl transition-transform duration-500 group-hover/carousel:scale-[1.01]">
<div className="bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Member" className="w-full h-full object-cover transition-opacity duration-300" id="t-image" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-6 right-6 z-20 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs text-white flex items-center gap-2 font-sans" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Verified Voice
            </div>
</div>
</div>
<button className="hidden md:flex w-12 h-12 rounded-xl border border-white/10 bg-[#0F0F0F] text-neutral-400 items-center justify-center hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 z-30 group shrink-0 shadow-lg cursor-pointer" onclick="window.nextTestimonial()">
<svg className="lucide lucide-arrow-right group-hover:translate-x-0.5 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>

</section>

<footer className="bg-center animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-tr from-gray-500/0 via-gray-500/10 to-gray-500/0 from-white/0 via-white/10 to-white/0 bg-[url(https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1600&amp;q=80)] max-w-7xl bg-cover rounded-3xl mt-24 mr-10 mb-12 ml-10 pt-24 pr-6 pb-6 pl-6 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '24px'}}>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
<div className="z-10 text-center max-w-4xl mr-auto mb-24 ml-auto pr-6 pl-6 relative">
<h2 className="text-2xl md:text-3xl text-white mb-3 font-bricolage font-light tracking-tight" style={{}}>
          Join our newsletter
        </h2>
<p className="text-neutral-400 max-w-lg mx-auto mb-8 text-base leading-relaxed font-sans" style={{}}>
          Get the latest updates on AI voice technology, new features, and community showcases.
        </p>
<div className="relative max-w-xs mx-auto">
<form className="flex items-center rounded-lg bg-[#050505] border border-white/10 focus-within:border-white/20 transition-all">
<input className="w-full bg-transparent border-none text-sm text-white pl-4 pr-1 py-3 focus:outline-none placeholder:text-neutral-600 font-sans h-10 rounded-l-lg" placeholder="Enter your email" type="email"/>
<button className="bg-white hover:bg-neutral-200 text-black px-4 py-2 rounded-r-lg text-sm transition-colors h-10 shadow-lg flex items-center gap-2 flex-shrink-0 font-sans" style={{}}>
              Subscribe
            </button>
</form>
</div>
</div>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16"></div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-12 max-w-7xl mx-auto px-6">
<div className="lg:col-span-2 col-span-full">
<div className="flex flex-col items-start gap-4">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<div className="relative flex items-center justify-center w-8 h-8">
<svg className="lucide lucide-mic text-white w-8 h-8 absolute" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
<svg className="lucide lucide-mic-2 absolute w-[32px] h-[32px]" data-lucide="asterisk" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '32px', height: '32px', color: 'rgb(249, 115, 22)', opacity: '0.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
</div>
<span className="text-xl text-white font-sans tracking-tight" style={{}}>
                AI.BotExerpts
              </span>
</div>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-twitter w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="logos" data-logos="twitter" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '18px', height: '18px'}} viewbox="0 0 256 209" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M256 25.45a105 105 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.2 105.2 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.3 52.3 0 0 1-23.79-6.57q-.004.33-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.6 52.6 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435q0-3.417-.152-6.795A106.8 106.8 0 0 0 256 25.45" fill="#ffffff"></path>
</svg>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-x-square w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="logos" data-logos="instagram-icon" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '18px', height: '18px'}} viewbox="0 0 256 256" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M128 23.064c34.177 0 38.225.13 51.722.745c12.48.57 19.258 2.655 23.769 4.408c5.974 2.322 10.238 5.096 14.717 9.575s7.253 8.743 9.575 14.717c1.753 4.511 3.838 11.289 4.408 23.768c.615 13.498.745 17.546.745 51.723s-.13 38.226-.745 51.723c-.57 12.48-2.655 19.257-4.408 23.768c-2.322 5.974-5.096 10.239-9.575 14.718s-8.743 7.253-14.717 9.574c-4.511 1.753-11.289 3.839-23.769 4.408c-13.498.13-17.546.745-51.722.745s-38.226-.13-51.723-.745c-12.48-.57-19.257-2.655-23.768-4.408c-5.974-2.322-10.239-5.096-14.718-9.575s-7.253-8.743-9.575-14.717c-1.753-4.511-3.838-11.289-4.408-23.769c-.615-13.498-.745-17.546-.745-51.722s.13-38.225.745-51.722c.57-12.48 2.655-19.258 4.408-23.769c2.322-5.974 5.096-10.238 9.575-14.717s8.743-7.253 14.717-9.575c4.511-1.753 11.289-3.838 23.769-4.408c13.496-.615 17.544-.745 51.722-.745Zm0-21.065c-34.748 0-39.102.148-52.753.77c-13.623.621-22.923 2.78-31.066 5.945c-8.416 3.27-15.55 7.646-22.684 14.78c-7.135 7.135-11.51 14.269-14.78 22.684c-3.165 8.143-5.324 17.443-5.945 31.066c-.622 13.65-.77 18.005-.77 52.753s.148 39.103.77 52.753c.621 13.623 2.78 22.923 5.945 31.066c3.27 8.416 7.645 15.55 14.78 22.684c7.135 7.135 14.268 11.51 22.684 14.78c8.143 3.165 17.443 5.324 31.066 5.945c13.65.622 18.005.77 52.753.77s39.103-.148 52.753-.77c13.623-.621 22.923-2.78 31.066-5.945c8.416-3.27 15.55-7.646 22.684-14.78c7.135-7.135 11.51-14.269 14.78-22.684c3.165-8.143 5.324-17.443 5.945-31.066c.622-13.65.77-18.005.77-52.753s-.148-39.103-.77-52.753c-.621-13.623-2.78-22.923-5.945-31.066c-3.27-8.416-7.646-15.55-14.78-22.684c-7.135-7.135-14.269-11.51-22.684-14.78c-8.143-3.165-17.443-5.324-31.066-5.945c-13.651-.622-18.005-.77-52.753-.77Z" fill="#ffffff"></path>
</svg>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-linkedin" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>
</div>

<div className="lg:col-span-2 md:col-span-2">
<h3 className="text-white font-medium mb-6 font-sans">Product</h3>
<ul className="space-y-4 text-sm text-neutral-400 font-sans">
<li><a className="hover:text-orange-400 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#">AI.BotExerpts Studio</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#">API Docs</a></li>
</ul>
</div>

<div className="lg:col-span-2 md:col-span-2">
<h3 className="text-white font-medium mb-6 font-sans">Resources</h3>
<ul className="space-y-4 text-sm text-neutral-400 font-sans">
<li><a className="hover:text-orange-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#">Community</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#">Help Center</a></li>
</ul>
</div>

<div className="lg:col-span-2 md:col-span-2">
<h3 className="text-white font-medium mb-6 font-sans">Company</h3>
<ul className="space-y-4 text-sm text-neutral-400 font-sans">
<li><a className="hover:text-orange-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#">Legal</a></li>
</ul>
</div>
</div>

<div className="mt-24 border-t border-white/5 pt-8 pb-8 flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto px-6">
<p className="text-neutral-500 text-xs font-sans">© 2024 AI.BotExerpts Inc. All rights reserved.</p>
<div className="flex gap-6 text-xs text-neutral-500 font-sans">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Cookies</a>
</div>
</div>
</footer>

    </>
  );
}
