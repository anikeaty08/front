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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



      document.addEventListener("DOMContentLoaded", () => {
        // Intersection Observer for Scroll Animations
        const observerOptions = {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target); // Unobserve after triggering to prevent re-triggering
            }
          });
        }, observerOptions);

        document.querySelectorAll('.animate-scroll').forEach(el => {
          observer.observe(el);
        });

        // Trigger immediate on-load animations
        setTimeout(() => {
          document.querySelectorAll('.nav-anim, .bg-anim').forEach(el => {
            el.classList.add('is-visible');
          });
        }, 50);

        // Continuous Ambient Float Animation using Web Animations API
        const floatElements = document.querySelectorAll('.float-anim');
        floatElements.forEach(el => {
          el.animate([
            { transform: 'translateY(0px)' },
            { transform: 'translateY(-10px)' },
            { transform: 'translateY(0px)' }
          ], {
            duration: 5000,
            iterations: Infinity,
            easing: 'ease-in-out'
          });
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bmaMERjX2VZDtPrh4Zwx"></div>
</div>

<nav className="fixed top-0 z-50 w-full backdrop-blur-xl bg-white/70 border-b border-zinc-200/50 nav-anim -translate-y-full opacity-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] [&amp;.is-visible]:translate-y-0 [&amp;.is-visible]:opacity-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-semibold tracking-tighter text-lg flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
<div className="w-6 h-6 bg-zinc-900 rounded-sm flex items-center justify-center">
<span className="text-white text-xs font-semibold tracking-tighter">
              DXB
            </span>
</div>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">
            Architecture
          </a>
<a className="hover:text-zinc-900 transition-colors" href="#">
            Topography
          </a>
<a className="hover:text-zinc-900 transition-colors" href="#">
            Experiences
          </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
            Sign in
          </a>
<button className="bg-zinc-900 text-white px-4 py-2 rounded-md text-xs font-medium hover:bg-zinc-800 hover:scale-105 active:scale-95 transition-all shadow-sm">
            Plan Journey
          </button>
</div>
</div>
</nav>

<section className="relative pt-40 pb-20 overflow-hidden">
<div className="absolute inset-0 -z-20 overflow-hidden">
<img alt="Dubai Skyline Background" className="w-full h-full object-cover opacity-[0.25] bg-anim scale-[1.1] transition-transform duration-[20000ms] ease-out [&amp;.is-visible]:scale-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/60 via-[#FAFAFA]/80 to-[#FAFAFA]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200/60 shadow-sm text-xs font-medium text-zinc-600 mb-8 backdrop-blur-sm animate-scroll opacity-0 translate-y-6 transition-all duration-[1000ms] delay-[100ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] [&amp;.is-visible]:opacity-100 [&amp;.is-visible]:translate-y-0">
<iconify-icon className="animate-[spin_4s_linear_infinite]" icon="solar:compass-linear" strokeWidth="1.5"></iconify-icon>
<span>Discover the new standard</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-900 mb-6 leading-[1.1] max-w-4xl animate-scroll opacity-0 translate-y-6 transition-all duration-[1000ms] delay-[200ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] [&amp;.is-visible]:opacity-100 [&amp;.is-visible]:translate-y-0">
          Where arid sands meet
          <br className="hidden md:block"/>
          unprecedented altitudes.
        </h1>
<p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 font-normal leading-relaxed animate-scroll opacity-0 translate-y-6 transition-all duration-[1000ms] delay-[300ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] [&amp;.is-visible]:opacity-100 [&amp;.is-visible]:translate-y-0">
          Explore a landscape defined by boundless ambition. From the tranquil
          topography of the Arabian dunes to cutting-edge architectural marvels
          piercing the stratosphere.
        </p>
<div className="flex items-center gap-4 animate-scroll opacity-0 translate-y-6 transition-all duration-[1000ms] delay-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] [&amp;.is-visible]:opacity-100 [&amp;.is-visible]:translate-y-0">
<button className="bg-zinc-900 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-zinc-800 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-95 transition-all shadow-sm flex items-center gap-2 group">
            Explore Landscapes
            <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="bg-white text-zinc-900 border border-zinc-200/80 px-5 py-2.5 rounded-md text-sm font-medium hover:bg-zinc-50 hover:border-zinc-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-95 transition-all shadow-sm">
            View Gallery
          </button>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-amber-100/30 via-zinc-100/50 to-blue-50/30 rounded-[100%] blur-[80px] -z-10 pointer-events-none animate-pulse duration-[4000ms]"></div>
</section>

<div className="max-w-7xl mx-auto px-6 pb-32 animate-scroll opacity-0 translate-y-12 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] [&amp;.is-visible]:opacity-100 [&amp;.is-visible]:translate-y-0">
<div className="w-full aspect-[4/3] md:aspect-[21/9] bg-white rounded-2xl overflow-hidden relative border border-zinc-200/60 shadow-sm flex items-end justify-center group cursor-pointer hover:shadow-xl transition-shadow duration-700">

<img alt="Arabian Dunes" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent z-20 transition-opacity duration-700 group-hover:opacity-80"></div>

<div className="absolute bottom-6 left-6 z-30 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-transform duration-500 group-hover:scale-110 group-active:scale-95">
<iconify-icon className="text-sm ml-0.5" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium text-white tracking-tight transition-transform duration-500 group-hover:translate-x-1">
            Aerial perspective
          </span>
</div>
</div>
</div>

<section className="border-t border-zinc-200/50 bg-white">
<div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
<div className="mb-16 md:flex justify-between items-end animate-scroll opacity-0 translate-y-6 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] [&amp;.is-visible]:opacity-100 [&amp;.is-visible]:translate-y-0">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
              Curated dimensions.
            </h2>
<p className="text-base text-zinc-500">
              Experience the multifaceted nature of a metropolis built on the
              foundation of tomorrow, offering stark contrasts and seamless
              integrations.
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-zinc-50/50 border border-zinc-200/60 hover:bg-white hover:border-zinc-300 hover:shadow-lg hover:-translate-y-2 transition-all duration-500 animate-scroll opacity-0 translate-y-8 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[100ms] will-change-[transform,opacity] [&amp;.is-visible]:opacity-100 [&amp;.is-visible]:translate-y-0 cursor-default">
<div className="w-12 h-12 rounded-xl bg-white border border-zinc-200/80 shadow-sm flex items-center justify-center mb-6 text-zinc-700 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-500 group-hover:scale-110">
<iconify-icon className="text-xl" icon="solar:buildings-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-3 group-hover:text-zinc-800 transition-colors">
              Vertical Horizons
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              Witness engineering feats that redefine urban living, pushing the
              structural boundaries of skyline architecture.
            </p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-50/50 border border-zinc-200/60 hover:bg-white hover:border-zinc-300 hover:shadow-lg hover:-translate-y-2 transition-all duration-500 animate-scroll opacity-0 translate-y-8 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[200ms] will-change-[transform,opacity] [&amp;.is-visible]:opacity-100 [&amp;.is-visible]:translate-y-0 cursor-default">
<div className="w-12 h-12 rounded-xl bg-white border border-zinc-200/80 shadow-sm flex items-center justify-center mb-6 text-zinc-700 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-500 group-hover:scale-110">
<iconify-icon className="text-xl" icon="solar:sun-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-3 group-hover:text-zinc-800 transition-colors">
              Desert Tranquility
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              Escape the kinetic energy of the city into the serene, timeless
              expanses of the surrounding golden Arabian dunes.
            </p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-50/50 border border-zinc-200/60 hover:bg-white hover:border-zinc-300 hover:shadow-lg hover:-translate-y-2 transition-all duration-500 animate-scroll opacity-0 translate-y-8 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[300ms] will-change-[transform,opacity] [&amp;.is-visible]:opacity-100 [&amp;.is-visible]:translate-y-0 cursor-default">
<div className="w-12 h-12 rounded-xl bg-white border border-zinc-200/80 shadow-sm flex items-center justify-center mb-6 text-zinc-700 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-500 group-hover:scale-110">
<iconify-icon className="text-xl" icon="solar:pallete-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-3 group-hover:text-zinc-800 transition-colors">
              Cultural Synthesis
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              A global nexus where deep-rooted traditional heritage seamlessly
              integrates with an avant-garde contemporary lifestyle.
            </p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
<div className="bg-[#0A0A0A] rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-16 overflow-hidden relative shadow-2xl animate-scroll opacity-0 transition-opacity duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity] [&amp;.is-visible]:opacity-100">
<img alt="Dubai Architecture" className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none mix-blend-luminosity scale-105" src="https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-[#0A0A0A]/60 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent pointer-events-none"></div>

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-800/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none animate-pulse duration-[5000ms]"></div>
<div className="max-w-md relative z-10 w-full animate-scroll opacity-0 -translate-x-8 transition-all duration-[1000ms] delay-[200ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] [&amp;.is-visible]:opacity-100 [&amp;.is-visible]:translate-x-0">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-zinc-800/50 border border-zinc-700/50 text-[10px] uppercase tracking-widest font-semibold text-zinc-400 mb-6 hover:bg-zinc-800 transition-colors cursor-default">
            Personalize
          </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
            Architect your itinerary.
          </h2>
<p className="text-sm text-zinc-400 mb-10 leading-relaxed">
            Tailor your experience parameters. Balance high-octane commercial
            districts with exclusive leisure retreats.
          </p>

<div className="mb-8 p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm hover:border-zinc-700 transition-colors duration-300">
<div className="flex items-center justify-between mb-4">
<label className="text-sm font-medium text-zinc-300">
                Primary Focus
              </label>
<span className="text-xs text-zinc-500">Business / Leisure</span>
</div>
<div className="flex items-center gap-4 bg-zinc-950/50 p-1.5 rounded-lg border border-zinc-800/80">
<button className="flex-1 py-1.5 text-xs font-medium text-white bg-zinc-800 rounded-md shadow-sm hover:bg-zinc-700 transition-colors active:scale-95">
                Business
              </button>
<button className="flex-1 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 rounded-md transition-colors active:scale-95">
                Leisure
              </button>
</div>
</div>

<div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm hover:border-zinc-700 transition-colors duration-300 group">
<div className="flex justify-between text-sm font-medium mb-4">
<span className="text-zinc-300">Duration</span>
<span className="text-white group-hover:scale-105 transition-transform">5 Days</span>
</div>
<div className="relative w-full h-1.5 bg-zinc-800 rounded-full mb-2">

<div className="absolute top-0 left-0 h-full bg-white rounded-full w-[45%] transition-all duration-300"></div>

<div className="absolute top-1/2 left-[45%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md border-2 border-zinc-900 cursor-grab hover:scale-125 hover:shadow-lg active:scale-110 active:cursor-grabbing transition-transform"></div>
</div>
<div className="flex justify-between text-[10px] text-zinc-500 font-medium">
<span>1 Day</span>
<span>14 Days</span>
</div>
</div>
</div>

<div className="w-full lg:w-[400px] z-10 animate-scroll opacity-0 translate-y-12 transition-all duration-[1000ms] delay-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] [&amp;.is-visible]:opacity-100 [&amp;.is-visible]:translate-y-0">

<div className="float-anim w-full aspect-[4/5] bg-gradient-to-br from-zinc-800/80 to-zinc-900/90 rounded-2xl border border-zinc-700/50 relative p-8 backdrop-blur-md shadow-2xl flex flex-col justify-between group hover:border-zinc-600 transition-colors duration-500">

<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:bg-zinc-700 transition-colors duration-500">
<iconify-icon className="text-xl text-zinc-300 group-hover:scale-110 group-hover:text-white transition-all duration-500" icon="solar:ticket-sale-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 bg-zinc-800 border border-zinc-700 rounded-full text-zinc-300 group-hover:border-zinc-600 transition-colors">
                Executive Tier
              </span>
</div>

<div className="space-y-6">
<div>
<div className="text-xs font-medium text-zinc-500 mb-1">
                  Estimated Allocation
                </div>
<div className="text-4xl font-semibold tracking-tighter text-white flex items-baseline gap-1">
                  $4,250
                  <span className="text-sm font-medium text-zinc-500 tracking-normal">
                    /person
                  </span>
</div>
</div>

<div className="space-y-3 pt-4 border-t border-zinc-800">
<label className="flex items-center gap-3 cursor-pointer group/check">
<div className="w-4 h-4 rounded border border-zinc-600 bg-zinc-800 flex items-center justify-center group-hover/check:border-zinc-400 group-active/check:scale-95 transition-all">
<div className="w-2 h-2 rounded-sm bg-white scale-100 transition-transform"></div>
</div>
<span className="text-sm text-zinc-300 group-hover/check:text-white transition-colors">
                    Premium Accommodation
                  </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group/check">
<div className="w-4 h-4 rounded border border-zinc-600 bg-zinc-800 flex items-center justify-center group-hover/check:border-zinc-400 group-active/check:scale-95 transition-all">
<div className="w-2 h-2 rounded-sm bg-white scale-0 group-hover/check:scale-50 transition-transform"></div>
</div>
<span className="text-sm text-zinc-400 group-hover/check:text-zinc-300 transition-colors">
                    Helicopter Transit
                  </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group/check">
<div className="w-4 h-4 rounded border border-zinc-600 bg-zinc-800 flex items-center justify-center group-hover/check:border-zinc-400 group-active/check:scale-95 transition-all">
<div className="w-2 h-2 rounded-sm bg-white scale-100 transition-transform"></div>
</div>
<span className="text-sm text-zinc-300 group-hover/check:text-white transition-colors">
                    Dune Conservation Tour
                  </span>
</label>
</div>
</div>

<div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/5 to-transparent rounded-tl-full pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>
</div>
</div>
</div>
</section>

<footer className="border-t border-zinc-200/50 bg-white pt-16 pb-8 animate-scroll opacity-0 transition-opacity duration-[1500ms] ease-out [&amp;.is-visible]:opacity-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
<div className="font-semibold tracking-tighter text-xl flex items-center gap-2 text-zinc-900 hover:opacity-80 transition-opacity cursor-pointer">
<div className="w-6 h-6 bg-zinc-900 rounded-sm flex items-center justify-center">
<span className="text-white text-xs font-semibold tracking-tighter">
                DXB
              </span>
</div>
            Horizons
          </div>
<div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 hover:-translate-y-0.5 transition-all" href="#">
              Destinations
            </a>
<a className="hover:text-zinc-900 hover:-translate-y-0.5 transition-all" href="#">
              Architecture
            </a>
<a className="hover:text-zinc-900 hover:-translate-y-0.5 transition-all" href="#">
              Culture
            </a>
<a className="hover:text-zinc-900 hover:-translate-y-0.5 transition-all" href="#">
              Investment
            </a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 border-t border-zinc-100 text-xs text-zinc-400 font-medium">
<div>© 2024 DXB Landscape Initiatives. All rights reserved.</div>
<div className="flex gap-6">
<a className="hover:text-zinc-600 transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-zinc-600 transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>



    </>
  );
}
