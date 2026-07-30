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



        // Initialize Lucide icons
        lucide.createIcons();

        // Card dismissal functionality
        document.querySelectorAll('[data-dismiss]').forEach(btn => {
            btn.addEventListener('click', e => {
                e.preventDefault();
                e.stopPropagation();
                const id = btn.getAttribute('data-dismiss');
                const card = document.getElementById(id);
                if (card) {
                    card.style.transform = 'scale(0.9) translateY(20px)';
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.display = 'none';
                        // Animate remaining cards
                        const remainingCards = document.querySelectorAll('article:not([style*="display: none"])');
                        remainingCards.forEach((remainingCard, index) => {
                            remainingCard.style.animation = `cardSlideIn 0.6s ease-out ${index * 0.1}s forwards`;
                        });
                    }, 300);
                }
            });
        });

        // Enhanced hover effects
        document.querySelectorAll('article').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.filter = 'brightness(1.1)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.filter = 'brightness(1)';
            });
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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" id="aura-image" style={{backgroundImage: `url("/assets/26ab393e-b31b-4b0c-b898-a9f433e30e2a_3840w.jpg")`}}></div>

<header className="relative z-20 lg:px-8 pt-6 pr-4 pb-6 pl-4">
<nav className="flex items-center justify-between max-w-7xl mx-auto">
<div className="flex items-center space-x-3">
<h1 className="text-xl font-semibold tracking-tight font-geist">Studio</h1>
</div>
<div className="hidden md:flex items-center space-x-6">
<button className="text-sm font-medium hover:text-white/80 transition-colors font-geist">Portfolio</button>
<button className="text-sm font-medium hover:text-white/80 transition-colors font-geist">About</button>
<button className="text-sm font-medium hover:text-white/80 transition-colors font-geist">Contact</button>
</div>
<button className="md:hidden">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</nav>
</header>

<main className="relative z-10 lg:px-8 pt-8 pr-4 pb-8 pl-4">
<div className="max-w-7xl mx-auto">

<div className="mb-16 text-center card-animate" style={{animationDelay: `0.1s`}}>
<h2 className="text-3xl md:text-5xl tracking-tight mb-4 font-space-grotesk" style={{}}>Creative Concepts</h2>
<p className="text-lg text-white/70 max-w-2xl mx-auto font-geist">Exploring the intersection of design, technology, and human experience through immersive digital narratives.</p>
</div>

<div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

<article className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl card-animate" id="card-1" style={{animationDelay: `0.2s`, filter: `brightness(1)`}}>
<img alt="Mountain landscape" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="/assets/a0c744d5-9d12-42c9-a431-77b086938f4b_1600w.jpg" style={{}} />
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80"></div>
<button className="absolute top-4 right-4 z-20 w-8 h-8 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-black/40 hover:rotate-90 transition-all duration-300" data-dismiss="card-1">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="absolute top-4 left-4 z-20 flex items-center space-x-2">
<div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
<svg className="lucide lucide-mountain w-4 h-4" data-lucide="mountain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>
</div>
<span className="text-xs font-medium bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 font-geist">Adventure</span>
</div>
<div className="relative z-10 flex flex-col justify-between h-full p-6 min-h-[400px]">
<div className="flex justify-between items-start text-sm font-medium mb-auto pt-16">
<div className="space-y-1">
<span className="block text-white/70 font-geist">Project Type</span>
<span className="block font-semibold font-geist">Visual Identity</span>
</div>
<div className="space-y-1 text-right">
<span className="block text-white/70 font-geist">Duration</span>
<span className="block font-semibold font-geist">3 Months</span>
</div>
</div>
<div className="mt-auto">
<h3 className="text-3xl md:text-4xl leading-tight tracking-tight mb-4 font-space-grotesk" style={{}}>Summit Ascent</h3>
<p className="text-sm text-white/80 mb-6 max-w-sm font-geist">A comprehensive branding project exploring the relationship between human ambition and natural landscapes.</p>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border-2 border-white/20 object-cover" src="/assets/1ddf69f0-d3d2-4775-bbe6-cfea18262abb_320w.jpg" style={{}} />
<img alt="" className="w-6 h-6 rounded-full border-2 border-white/20 object-cover" src="/assets/36e9fafd-c1ed-46b5-a6e7-b976cfd26e1c_320w.jpg" />
</div>
<span className="text-xs text-white/70 font-geist">Team Alpha</span>
</div>
<button className="flex items-center space-x-2 text-sm hover:text-white/80 transition-colors">
<span className="font-geist">View Project</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/95 border border-white/10 shadow-2xl backdrop-blur-card transition-all duration-500 hover:scale-[1.02] hover:border-white/20 card-animate" id="card-2" style={{animationDelay: `0.3s`, filter: `brightness(1)`}}>
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>
<button className="absolute top-4 right-4 z-20 w-8 h-8 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 hover:bg-white/10 hover:rotate-90 transition-all duration-300" data-dismiss="card-2">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="relative z-10 flex flex-col h-full min-h-[400px] bg-[url(/assets/4c9721c5-7db7-4e0b-8736-965c721a2e6a_1600w.jpg)] bg-cover pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-brain w-5 h-5" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
</div>
<div>
<h4 className="font-semibold text-sm font-geist">MemoryVault</h4>
<p className="text-xs text-white/60 font-geist">AI Platform</p>
</div>
</div>
<span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full border border-green-500/30 font-geist">Active</span>
</div>
<h3 className="md:text-4xl leading-tight text-3xl tracking-tight font-space-grotesk mb-4" style={{}}>Digital Consciousness</h3>
<p className="flex-grow text-base text-white/70 font-geist mb-8">An innovative platform that captures and preserves human memories through advanced AI processing, creating digital narratives that transcend time.</p>
<div className="space-y-4 mb-8">
<div className="flex items-center justify-between text-sm">
<span className="text-white/60 font-geist">Progress</span>
<span className="font-medium font-geist">78%</span>
</div>
<div className="w-full bg-white/10 rounded-full h-2">
<div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{width: `78%`}}></div>
</div>
</div>
<div className="flex items-center justify-between mt-auto">
<div className="flex space-x-2">
<span className="px-3 py-1 rounded-full border border-white/20 text-xs bg-white/5 hover:bg-white/10 transition-colors cursor-pointer font-geist">Neural AI</span>
<span className="px-3 py-1 rounded-full border border-white/20 text-xs bg-white/5 hover:bg-white/10 transition-colors cursor-pointer font-geist">Memory</span>
</div>
<div className="flex items-center space-x-2 text-xs text-white/60">
<svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-geist">Updated 2h ago</span>
</div>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl card-animate" id="card-3" style={{animationDelay: `0.4s`, filter: `brightness(1)`}}>
<img alt="Urban landscape" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="/assets/8669d7ab-d501-42b5-81b1-7e30d202e9d6_1600w.jpg" />
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/85"></div>
<button className="absolute top-4 left-4 z-20 w-8 h-8 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-black/40 hover:rotate-90 transition-all duration-300" data-dismiss="card-3">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="absolute top-4 right-4 z-20 flex gap-2">
<span className="px-3 py-1 rounded-full border border-white/20 text-xs bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-colors cursor-pointer font-geist">Urban</span>
<span className="px-3 py-1 rounded-full border border-white/20 text-xs bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-colors cursor-pointer font-geist">Discovery</span>
</div>
<div className="relative z-10 flex flex-col justify-end h-full p-6 min-h-[400px]">
<div className="mb-6">
<div className="flex items-center space-x-2 mb-3">
<svg className="lucide lucide-map-pin w-4 h-4 text-orange-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-sm text-white/70 font-geist">New York, NY</span>
</div>
<h3 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight mb-4">
<span className="font-space-grotesk" style={{}}>Lost</span>
<span className="mx-3 text-white/40 font-space-grotesk" style={{}}>|</span>
<span className="font-space-grotesk" style={{}}>Found</span>
</h3>
<p className="text-sm text-white/80 max-w-sm mb-6 font-geist">Navigation through urban complexity isn't about finding your way—it's about discovering new possibilities in familiar spaces.</p>
</div>
<div className="border-t border-white/20 pt-4">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-camera w-4 h-4 text-white/60" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
<span className="text-xs text-white/60 font-geist">247 shots</span>
</div>
<div className="flex items-center space-x-2">
<svg className="lucide lucide-heart w-4 h-4 text-red-400" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
<span className="text-xs text-white/60 font-geist">1.2k</span>
</div>
</div>
<button className="flex items-center space-x-2 text-sm hover:text-white/80 transition-colors group">
<span className="font-geist">Explore</span>
<svg className="lucide lucide-external-link w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
</div>
</div>
</article>
</div>
</div>
</main>


    </>
  );
}
