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



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


                    (function() {
                      const container = document.getElementById('card-grid-container');
                      const cards = container.querySelectorAll('.card-item');
                      let activeCard = null;

                      cards.forEach((card, index) => {
                        card.addEventListener('click', function(e) {
                          e.stopPropagation();

                          if (activeCard === card) {
                            // Reset if clicking the same card
                            resetCards();
                            return;
                          }

                          // Reset all cards first
                          cards.forEach((c) => {
                            c.style.filter = 'blur(8px)';
                            c.style.opacity = '0.4';
                            c.style.transform = '';
                            c.style.position = 'relative';
                            c.style.zIndex = '1';
                            c.style.transition = 'all 0.7s ease-out';
                          });

                          // Center and focus the clicked card
                          card.style.filter = 'blur(0px)';
                          card.style.opacity = '1';
                          card.style.transform = 'translate(0, 0) rotate(0deg) scale(1.15)';
                          card.style.position = 'relative';
                          card.style.zIndex = '10';
                          card.style.transition = 'all 0.7s ease-out';

                          activeCard = card;
                        });
                      });

                      // Click outside to reset
                      document.addEventListener('click', function(e) {
                        if (activeCard && !container.contains(e.target)) {
                          resetCards();
                        }
                      });

                      function resetCards() {
                        cards.forEach((c) => {
                          c.style.filter = '';
                          c.style.opacity = '';
                          c.style.transform = '';
                          c.style.position = '';
                          c.style.zIndex = '';
                        });
                        activeCard = null;
                      }
                    })();
                  


      document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.animationPlayState = 'running';
              observer.unobserve(entry.target);
            }
          });
        }, observerOptions);

        document.querySelectorAll('.scroll-item').forEach(item => {
          item.style.animationPlayState = 'paused';
          observer.observe(item);
        });
        
        // Text rotator for hero
        const words = ["Business", "Success", "Connection", "Engagement", "Fans"];
        let i = 0;
        const textElement = document.getElementById("rotating-hero-text");
        
        setInterval(() => {
          textElement.style.opacity = 0;
          setTimeout(() => {
            i = (i + 1) % words.length;
            textElement.textContent = words[i];
            textElement.style.opacity = 1;
          }, 500); 
        }, 3000);
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
      

<svg className="hidden">
<defs>
<symbol id="miptag-logo" viewbox="0 0 60 60">
<circle cx="30" cy="30" fill="none" opacity="0.8" r="28" stroke="currentColor" strokeWidth="1.5"></circle>
<ellipse cx="30" cy="30" fill="none" rx="26" ry="10" stroke="currentColor" strokeWidth="1.5" transform="rotate(45 30 30)"></ellipse>
<ellipse cx="30" cy="30" fill="none" rx="26" ry="10" stroke="currentColor" strokeWidth="1.5" transform="rotate(-45 30 30)"></ellipse>
<ellipse cx="30" cy="30" fill="none" rx="26" ry="8" stroke="currentColor" strokeWidth="1.5" transform="rotate(90 30 30)"></ellipse>
<path d="M22 24 L22 36 L30 42 L38 36 L38 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
<path d="M22 24 L30 32 L38 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</symbol>
</defs>
</svg>

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="HzcaAbRLaALMhHJp8gLY"></div>

</div>
</div>

<nav className="flex z-50 w-full pt-4 md:pt-6 px-4 fixed top-0 left-0 right-0 items-center justify-center">
<div className="flex bg-black/80 backdrop-blur-md w-full max-w-5xl border-white/10 border rounded-full py-2 pl-4 md:pl-6 pr-2 md:pr-2 relative shadow-2xl items-center justify-between scroll-item scroll-fade-up" style={{animationPlayState: 'running'}}>
<a className="inline-flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded-lg bg-black border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.5)] flex items-center justify-center text-purple-400">
<svg className="w-5 h-5" fill="none" viewbox="0 0 60 60">
<use href="#miptag-logo"></use>
</svg>
</div>
<span className="font-oswald text-xl font-semibold tracking-tight text-white">
            MipTags
          </span>
</a>
<div className="hidden md:flex gap-8 -translate-x-1/2 absolute left-1/2 gap-x-8 gap-y-8 items-center">
<a className="text-[14px] font-medium text-white hover:text-purple-400 transition-colors font-sans tracking-wide" href="#">
            Home
          </a>
<a className="text-[14px] hover:text-purple-400 transition-colors font-medium text-white tracking-wide font-sans" href="/pricing">
            Pricing
          </a>
<a className="text-[14px] hover:text-purple-400 transition-colors font-medium text-white tracking-wide font-sans" href="/contact-us">
            Contact Us
          </a>
<a className="text-[14px] hover:text-purple-400 transition-colors font-medium text-white tracking-wide font-sans" href="https://miptag.me/">
            Search MipTag
          </a>
<a className="text-[14px] hover:text-purple-400 transition-colors font-medium text-white tracking-wide font-sans" href="/register">
            Dashboard
          </a>
</div>
<div className="flex items-center gap-4">
<button className="md:hidden text-white p-2">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<a className="hidden md:block hover:bg-gray-200 transition-colors text-sm font-semibold text-black tracking-tight font-sans bg-white rounded-full pt-2.5 pr-6 pb-2.5 pl-6" href="https://miptags.com/creator">
            Create MipTag
          </a>
</div>
</div>
</nav>

<main className="flex flex-col md:pt-40 overflow-x-hidden z-10 pt-28 relative items-center justify-center">

<div className="md:px-6 flex flex-col w-full pr-4 pl-4 items-center">

<h1 className="sm:text-5xl md:text-8xl leading-[1.05] md:leading-[1.0] uppercase scroll-item scroll-blur-in delay-100 text-4xl font-semibold tracking-tight font-oswald text-center max-w-5xl mr-auto ml-auto" style={{animationPlayState: 'running'}}>
          MipTags is the
          <br/>
<span className="purple-glow-text font-oswald font-semibold tracking-tight">
            Gateway to
            <span className="inline-block transition-opacity duration-1000" id="rotating-hero-text">
              Business
            </span>
</span>
</h1>

<p className="text-center text-base md:text-xl text-gray-400 mt-6 md:mt-8 max-w-2xl mx-auto leading-relaxed font-light font-sans scroll-item scroll-fade-up delay-200 px-2" style={{animationPlayState: 'running'}}>
          Stop using machine-readable squares. Start using human-centric
          identifiers.
          <span className="text-white font-medium block sm:inline">
            Readable. Scannable. Speakable. Typable.
          </span>
</p>

<div className="flex flex-col sm:flex-row items-center gap-4 mt-8 md:mt-10 w-full sm:w-auto scroll-item scroll-fade-up delay-300 px-2" style={{animationPlayState: 'running'}}>
<button className="group inline-flex overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)] focus:outline-none sm:w-auto text-sm font-medium text-white w-full h-[54px] rounded-full pr-8 pl-8 relative gap-x-2 gap-y-2 items-center justify-center cursor-pointer" onclick="window.location.href='https://www.youtube.com/watch?v=gB7iRXcUy_8'" role="button" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2))', '--border-radius-before': '9999px'}}>
<style>
              @keyframes beam-spin { to { transform: rotate(360deg); } }
            </style>
<div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#a855f7_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="cursor-pointer bg-[#050505] rounded-full absolute top-[1px] right-[1px] bottom-[1px] left-[1px]" onclick="window.location.href='https://miptags.com/creator'" role="button"></div>
</div>
<span className="transition-colors group-hover:text-purple-300 uppercase font-semibold text-white/90 tracking-tight z-10 relative font-sans">
              Create MipTag
            </span>
<iconify-icon className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="sm:w-auto hover:bg-white/5 hover:border-white/30 transition-all duration-300 flex group text-base font-medium text-white bg-transparent w-full border-white/10 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 gap-x-2 gap-y-2 items-center justify-center cursor-pointer" onclick="window.location.href='https://youtu.be/BaYK3ogG4vs?si=_XCnntqeVCoRsKR_'" role="button">
<iconify-icon className="text-gray-400 group-hover:text-white transition-colors" icon="solar:play-circle-linear" width="20"></iconify-icon>
            See it in Action
          </button>
</div>

<div className="flex w-full h-auto min-h-[600px] md:h-[750px] max-w-5xl mt-20 md:mt-56 mx-auto relative items-center justify-center scroll-item scroll-blur-in delay-500 pb-12 md:pb-0" style={{animationPlayState: 'paused'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/10 blur-[60px] md:blur-[100px] rounded-full pointer-events-none"></div>

<div className="absolute left-0 lg:left-8 top-20 z-20 hidden md:flex items-center gap-3 p-3 pr-5 bg-[#111] border border-white/10 rounded-xl shadow-2xl animate-[bounce_6s_infinite]">
<div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-500/20 text-blue-400">
<iconify-icon icon="solar:scanner-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="">
<span className="block text-xs text-gray-500 font-sans uppercase tracking-wider">
                Scanned
              </span>
<span className="text-sm font-semibold text-white font-sans">
                RL52
              </span>
</div>
</div>
<div className="absolute left-4 lg:-left-4 bottom-64 z-10 hidden md:flex items-center gap-3 p-3 pr-5 bg-[#111] border border-white/10 rounded-xl shadow-2xl animate-[pulse_5s_infinite]">
<div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center border border-green-500/20 text-green-400">
<iconify-icon icon="solar:microphone-linear" width="20"></iconify-icon>
</div>
<div>
<span className="block text-xs text-gray-500 font-sans uppercase tracking-wider">
                Spoken
              </span>
<span className="text-sm font-semibold text-white font-sans">
                "Open MipTag RL52"
              </span>
</div>
</div>
<div className="absolute right-0 lg:right-12 top-32 z-20 hidden md:flex items-center gap-3 p-3 pr-5 bg-[#111] border border-white/10 rounded-xl shadow-2xl animate-[bounce_7s_infinite]">
<div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center border border-purple-500/20 text-purple-400">
<iconify-icon icon="solar:keyboard-linear" width="20"></iconify-icon>
</div>
<div>
<span className="block text-xs text-gray-500 font-sans uppercase tracking-wider">
                Typed
              </span>
<span className="text-sm font-semibold text-white font-sans">
                RL52
              </span>
</div>
</div>
<div className="absolute right-8 lg:right-0 bottom-40 z-10 hidden md:flex items-center gap-3 p-3 pr-5 bg-[#111] border border-white/10 rounded-xl shadow-2xl animate-[pulse_6s_infinite]">
<div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:chart-2-linear" width="20"></iconify-icon>
</div>
<div className="">
<span className="block text-xs text-gray-500 font-sans uppercase tracking-wider">
                Conversion
              </span>
<span className="text-sm font-semibold text-purple-400 font-sans">
                + 245% vs QR
              </span>
</div>
</div>

<div className="border-[6px] md:border-[8px] border-[#222] overflow-hidden flex flex-col h-[700px] md:min-h-[800px] bg-[#050505] w-full max-w-[340px] md:max-w-[380px] ring-white/10 ring-1 rounded-[2.5rem] md:rounded-[3rem] mx-auto relative shadow-2xl z-10">

<div className="md:h-12 flex md:px-8 z-20 bg-[#050505] w-full h-10 pr-6 pb-2 pl-6 items-end justify-between">
<span className="text-[12px] md:text-[13px] font-semibold text-white tracking-widest font-sans">
                9:41
              </span>
<div className="flex gap-1.5 items-center text-white">
<iconify-icon icon="solar:signal-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:battery-full-linear" width="18"></iconify-icon>
</div>
</div>

<div className="px-5 md:px-6 pt-3 md:pt-4 pb-4 flex items-center justify-between z-10 bg-[#050505]">
<div className="flex items-center gap-2">
<div className="w-7 h-7 md:w-8 md:h-8 bg-black border border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] rounded-lg flex items-center justify-center font-oswald font-semibold text-purple-400">
<svg className="w-5 h-5" fill="none" viewbox="0 0 60 60">
<use href="#miptag-logo"></use>
</svg>
</div>
<span className="font-oswald text-lg font-semibold text-white">
                  MipTags
                </span>
</div>
<iconify-icon className="text-white" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar px-4 md:px-5 pb-[90px] md:pb-[100px] relative">

<div className="relative w-full aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden mb-4 group shadow-2xl ring-1 ring-white/10">
<img alt="Ray Lewis" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="opacity-95 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/63fd1440-37f1-4e93-9e22-b2a28b9cd047_800w.jpg)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<div className="md:p-6 flex flex-col pt-5 pr-5 pb-8 pl-5 absolute right-0 bottom-0 left-0 items-center">
<h2 className="text-white font-oswald text-3xl md:text-4xl font-semibold uppercase mb-4 tracking-tight drop-shadow-xl text-center leading-none">
                    Connect With A Legend
                  </h2>
<div className="w-full bg-black border border-white/20 rounded-2xl p-3 flex items-center gap-4 shadow-2xl relative z-10">
<div className="relative w-16 h-16 shrink-0 flex flex-col items-center justify-center border border-white/20 bg-white/5 rounded-lg">
<div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-white"></div>
<div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-white"></div>
<div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-white"></div>
<div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-white"></div>
<svg className="w-8 h-8 text-white mb-0.5" fill="none" viewbox="0 0 60 60">
<use href="#miptag-logo"></use>
</svg>
<span className="text-[5px] text-white uppercase tracking-widest font-semibold mt-0.5 leading-none">
                        MIPTAG.ME
                      </span>
</div>
<div className="flex-1 flex justify-center pr-2">
<span className="text-6xl font-oswald font-semibold text-white tracking-tight uppercase leading-none">
                        RL52
                      </span>
</div>
</div>
<p className="text-xs font-semibold text-amber-200 tracking-wide font-sans text-center opacity-100 mt-4">
                    Scan, Text, Speak MipTag RL52
                  </p>
</div>
</div>

<div className="flex gap-3 mb-4">
<div className="flex-1 bg-[#151515] border border-white/5 rounded-2xl p-3 md:p-4">
<iconify-icon className="text-gray-400 mb-2" icon="solar:eye-linear" width="20"></iconify-icon>
<div className="text-xl md:text-2xl font-oswald text-white">
                    2.4M
                  </div>
<div className="text-[10px] text-gray-500 uppercase">Views</div>
</div>
<div className="flex-1 bg-[#151515] border border-white/5 rounded-2xl p-3 md:p-4">
<iconify-icon className="text-purple-400 mb-2 drop-shadow-[0_0_5px_rgba(168,85,247,0.5)]" icon="solar:bag-3-linear" width="20"></iconify-icon>
<div className="text-xl md:text-2xl font-oswald text-white">
                    $85k
                  </div>
<div className="text-[10px] text-gray-500 uppercase">Sales</div>
</div>
</div>

<div className="bg-[#151515] border border-white/5 rounded-2xl p-4">
<h3 className="text-sm font-semibold text-white mb-4 font-sans">
                  Recent Interactions
                </h3>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center border border-red-500/20">
<iconify-icon icon="solar:basketball-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="truncate text-sm font-medium text-white">
                        RL52 (Ray Lewis)
                      </div>
<div className="text-[10px] truncate text-gray-500">Scanned at M&amp;T Bank Stadium</div>
</div>
<span className="text-xs text-gray-600 shrink-0">2m</span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-purple-600/20 text-purple-400 flex items-center justify-center border border-purple-500/20">
<iconify-icon icon="solar:t-shirt-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="truncate text-sm font-medium text-white">RL52</div>
<div className="text-[10px] text-gray-500 truncate">
                        Spoken Command
                      </div>
</div>
<span className="text-xs text-gray-600 shrink-0">1h</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full z-30 px-4 pb-4">
<div className="h-[65px] md:h-[70px] bg-[#1A1A1A]/90 backdrop-blur-xl border border-white/10 rounded-[2rem] flex items-center justify-around px-2 shadow-2xl">
<div className="flex flex-col items-center gap-1 text-purple-400 drop-shadow-[0_0_5px_rgba(168,85,247,0.6)]">
<iconify-icon icon="solar:home-smile-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition-colors">
<iconify-icon icon="solar:compass-linear" width="24"></iconify-icon>
</div>
<div className="relative -top-5 md:-top-6">
<div className="md:w-14 md:h-14 flex cursor-pointer text-purple-400 bg-black w-12 h-12 border-purple-500 border rounded-full shadow-[0_0_15px_rgba(168,85,247,0.6)] items-center justify-center" onclick="window.location.href='https://miptag.me/search?keywords=RL52'" role="button">
<iconify-icon className="" height="24" icon="solar:scanner-linear" style={{color: 'rgb(192, 132, 252)'}} width="24"></iconify-icon>
</div>
</div>
<div className="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition-colors">
<iconify-icon icon="solar:wallet-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition-colors">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-gradient-to-t from-background to-transparent z-0 pointer-events-none"></div>
</div>
</div>

<section className="sm:pb-28 sm:pt-36 max-w-7xl mr-auto ml-auto pt-36 pr-6 pb-28 pl-6">
<div className="relative">
<div className="px-0 py-0 sm:px-0 sm:py-0 lg:px-0">

<div className="mx-auto max-w-3xl text-center" style={{animation: 'fadeSlideIn 1s ease-out 0.1s both'}}>
<h1 className="sm:text-6xl lg:text-7xl leading-[1.06] text-4xl font-semibold tracking-tighter font-sans">Connect Your World with a <span className="block bg-clip-text font-semibold text-transparent tracking-tighter font-sans bg-gradient-to-r from-white to-neutral-400" style={{color: 'rgba(0, 0, 0, 0)', position: 'static'}}>Single Word.</span></h1>
</div>

<div className="mx-auto mt-10 max-w-5xl px-2"></div>

<div className="sm:mt-12 max-w-5xl mt-12 mr-auto ml-auto relative" style={{animation: 'fadeSlideIn 1s ease-out 0.3s both'}}>

<div className="-top-5 sm:-top-7 sm:left-[16%] z-50 absolute left-[12%]">
<div className="relative">
<span className="inline-flex items-center gap-2 border-gradient before:rounded-full text-sm font-medium text-white bg-blue-600 rounded-full pt-1.5 pr-3.5 pb-1.5 pl-3.5 shadow-md">
                    designer
                    <svg className="lucide lucide-arrow-up-right lucide-at-sign w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="arrow-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M7 7h10v10"></path>
<path className="" d="M7 17 17 7"></path>
</svg>
</span>
<span className="absolute -bottom-1 left-6 h-2 w-2 rotate-45 bg-blue-600"></span>
</div>
</div>

<div className="-top-4 sm:-top-6 sm:right-[14%] z-50 absolute right-[10%]">
<div className="relative">
<span className="inline-flex items-center gap-2 border-gradient before:rounded-full text-sm font-medium text-white bg-orange-500 rounded-full pt-1.5 pr-3.5 pb-1.5 pl-3.5 shadow-md">
                    artist
                    <svg className="lucide lucide-arrow-up-right lucide-at-sign w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="arrow-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M7 7h10v10"></path>
<path className="" d="M7 17 17 7"></path>
</svg>
</span>
<span className="absolute -bottom-1 left-6 h-2 w-2 rotate-45 bg-orange-500"></span>
</div>
</div>

<div className="flex justify-center">
<div className="grid grid-cols-6 sm:gap-4 gap-x-3 gap-y-3" id="card-grid-container">

<div className="card-item col-span-2 sm:col-span-1 self-end transform -rotate-8 translate-y-3 sm:translate-y-5 transition-all duration-700 ease-out cursor-pointer hover:scale-105" data-card-index="0">
<div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-lg border-gradient before:rounded-2xl transition-shadow duration-500 hover:shadow-2xl">
<img alt="Artwork card" className="w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ae3673a1-a03b-4ae3-9c7c-b9278d62a699_800w.png"/>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-1 self-end transform -rotate-2 translate-y-5 sm:translate-y-7 transition-all duration-700 ease-out cursor-pointer hover:scale-105" data-card-index="1">
<div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-lg border-gradient before:rounded-2xl transition-shadow duration-500 hover:shadow-2xl">
<img alt="3D render card" className="w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8bcccd00-d213-4cc7-9554-707b25d54ca9_800w.png"/>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-1 self-end transform rotate-3 translate-y-2 transition-all duration-700 ease-out cursor-pointer hover:scale-105" data-card-index="2">
<div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-lg border-gradient before:rounded-2xl transition-shadow duration-500 hover:shadow-2xl">
<img alt="Minimal shapes card" className="w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/03270e72-5d02-4148-aa45-6ae3cdea647c_800w.png"/>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-1 self-end transform rotate-0 -translate-y-1 transition-all duration-700 ease-out cursor-pointer hover:scale-105" data-card-index="3">
<div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-lg border-gradient before:rounded-2xl transition-shadow duration-500 hover:shadow-2xl">
<img alt="Abstract red card" className="w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e4ca23a9-3ab2-453d-9d7d-b03064eae281_800w.png"/>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-1 self-end transform -rotate-2 translate-y-3 transition-all duration-700 ease-out cursor-pointer hover:scale-105" data-card-index="4">
<div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-lg border-gradient before:rounded-2xl transition-shadow duration-500 hover:shadow-2xl">
<img alt="Mountains card" className="w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8f843cca-dc4d-42ae-b52e-1c6a6dcbc57d_800w.png"/>
</div>
</div>

<div className="card-item col-span-2 sm:col-span-1 self-end transform rotate-6 translate-y-6 transition-all duration-700 ease-out cursor-pointer hover:scale-105" data-card-index="5">
<div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-lg border-gradient before:rounded-2xl transition-shadow duration-500 hover:shadow-2xl">
<img alt="Green minimal card" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/18f51a70-5b22-43a4-bd5b-8d1bd81b3483_800w.png"/>
</div>
</div>

</div>
</div>
</div>

<p className="text-base text-neutral-300 font-sans text-center max-w-xl mt-8 mr-auto ml-auto" style={{animation: 'fadeSlideIn 1s ease-out 0.5s both'}}>The safer, human-readable bridge from offline to online. Scan it, speak it, or type it. Securely.</p>

<div className="mt-8 flex items-center justify-center gap-4" style={{animation: 'fadeSlideIn 1s ease-out 0.7s both'}}>
<button className="group inline-flex lg:h-11 leading-none -tracking-[0.02em] outline outline-1 outline-white/10 hover:outline-white/20 transition-all duration-500 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-blue-400/50 text-base font-semibold text-white h-10 max-w-[300px] rounded-full pr-6 pl-6 relative items-center justify-center border-gradient before:rounded-full" rel="noopener noreferrer" target="_blank">

<span aria-hidden="true" className="absolute -inset-px h-full w-full overflow-hidden rounded-full">

<span className="absolute inset-0 rounded-full" style={{background: 'linear-gradient(140deg, rgba(15,15,17,1) 0%, rgba(30,30,33,1) 35%, rgba(45,45,50,1) 70%, rgba(20,20,22,1) 100%)'}}></span>

<span className="absolute -top-[52px] right-1 size-20 bg-blue-400 opacity-15 mix-blend-lighten blur-[35px] rounded-full"></span>
<span className="absolute top-0 right-1 h-[28px] w-20 bg-blue-300 opacity-20 mix-blend-lighten blur-[25px] rounded-full"></span>
<span className="absolute -bottom-[42px] -left-[19px] size-20 bg-purple-400 opacity-10 mix-blend-lighten blur-[40px] rounded-full"></span>

<span className="absolute inset-0 overflow-hidden rounded-full">
<span className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/15 opacity-0 skew-x-12 blur-sm transition-all duration-700 group-hover:opacity-30 group-hover:translate-x-[220%] rounded-full"></span>
</span>

<span className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-full"></span>
</span>

<span aria-hidden="true" className="z-20 blur-[1px] w-full h-full rounded-full absolute top-0 left-0">
<span className="-top-px -left-px z-20 w-full h-full rounded-full absolute" onclick="window.location.href='/register'" role="button" style={{boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.12)'}}></span>
</span>

<span className="relative z-10 flex items-center gap-1.5 text-[14px] leading-none font-normal -tracking-[0.04em] lg:text-base text-white/95 rounded-full font-sans">
                  Get started today
                </span>

<span className="pointer-events-none absolute inset-0 ring-0 ring-blue-400/0 transition-[ring,opacity] duration-500 group-hover:ring-4 group-hover:opacity-25 rounded-full"></span>
</button>
<a className="inline-flex items-center gap-2 rounded-full bg-neutral-800/60 px-5 py-3 text-sm font-medium text-neutral-100 ring-1 ring-white/10 hover:bg-neutral-800 border-gradient before:rounded-full font-sans" href="#">
                View Examples
                <svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M15 3h6v6"></path>
<path className="" d="M10 14 21 3"></path>
<path className="" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
</svg>
</a>
</div>
</div>
</div>

</section>
<section className="z-10 w-full max-w-7xl mt-12 md:mt-32 mx-auto px-4 md:px-0 relative space-y-12 md:space-y-20">

<div className="flex flex-col bg-[#0A0A0C] border-[#ffffff]/10 border rounded-2xl md:rounded-3xl mt-12 md:mt-24 pt-8 md:pt-8 px-6 md:px-8 pb-12 md:pb-16 gap-y-12 md:gap-y-16">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 w-full">
<div className="flex flex-col gap-4 md:gap-6 max-w-3xl">
<div className="flex gap-3 items-center scroll-item scroll-fade-up" style={{animationPlayState: 'paused'}}>
<span className="flex items-center justify-center w-7 h-7 rounded-lg bg-black text-[11px] font-mono font-medium text-purple-400 border border-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.4)] font-sans">
                  01
                </span>
<span className="text-sm font-medium tracking-widest uppercase text-gray-500 font-sans">
                  The Problem
                </span>
</div>
<h2 className="text-3xl md:text-5xl lg:text-6xl text-white leading-[1.0] font-oswald font-semibold tracking-tight scroll-item scroll-fade-up delay-100" style={{animationPlayState: 'paused'}}>
                The QR Code is
                <span className="text-gray-600 font-oswald font-semibold tracking-tight decoration-line-through decoration-purple-600 decoration-4">
                  Dead.
                </span>
</h2>
<p className="leading-relaxed text-base md:text-lg font-light text-gray-400 max-w-xl scroll-item scroll-fade-up delay-200" style={{animationPlayState: 'paused'}}>
                Machine-readable squares break the flow of engagement. MipTags
                are designed for humans, optimizing the journey from the arena
                to the online store.
              </p>
</div>
<button className="group flex items-center justify-center md:justify-start w-full md:w-auto gap-2 px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-all duration-200 font-sans whitespace-nowrap scroll-item scroll-fade-up delay-300" style={{animationPlayState: 'paused'}}>
<span className="font-sans" onclick="window.location.href='/register'" role="button">Get Started</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[400px] gap-6" id="dashboard-grid">

<div className="relative h-[400px] rounded-[1.5rem] md:rounded-[2rem] bg-[#0A0A0C] border border-white/10 p-6 md:p-8 overflow-hidden flex flex-col justify-between group hover:border-purple-500/30 transition-colors scroll-item scroll-fade-up delay-100" style={{animationPlayState: 'paused'}}>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C]"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 border border-blue-500/20">
<iconify-icon icon="solar:eye-linear" width="24"></iconify-icon>
</div>
<h3 className="text-3xl md:text-4xl font-light text-white tracking-tight font-oswald uppercase">
                  Readable
                </h3>
<p className="mt-2 text-base md:text-lg font-light leading-relaxed text-gray-400">
                  Don't hide your brand behind a square. Use words humans
                  understand.
                </p>
</div>
<div className="relative z-10 h-32 w-full flex items-center justify-center gap-3 md:gap-4">
<div className="w-16 h-16 md:w-20 md:h-20 bg-white opacity-20 blur-md rounded-lg flex items-center justify-center"></div>
<iconify-icon className="text-white/30" icon="solar:arrow-right-linear" width="24"></iconify-icon>
<div className="flex items-center gap-2 bg-black border border-purple-500/50 p-2 rounded-lg shadow-[0_0_20px_rgba(168,85,247,0.4)] transform scale-110">
<div className="relative w-8 h-8 flex flex-col items-center justify-center p-0.5 border border-white/20 rounded-sm">
<div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-white"></div>
<div className="absolute top-0 right-0 w-1 h-1 border-t border-r border-white"></div>
<div className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-white"></div>
<div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-white"></div>
<svg className="w-5 h-5 text-purple-400" fill="none" viewbox="0 0 60 60">
<use href="#miptag-logo"></use>
</svg>
<span className="text-[3px] text-white uppercase mt-[1px]">
                      MIPTAG
                    </span>
</div>
<span className="font-oswald text-xl font-semibold text-white uppercase tracking-tight">
                    NIKE
                  </span>
</div>
</div>
</div>

<div className="relative rounded-[1.5rem] md:rounded-[2rem] bg-[#0A0A0C] border border-white/10 p-6 md:p-8 overflow-hidden flex flex-col h-[400px] md:h-[400px] lg:h-[824px] lg:row-span-2 group hover:border-purple-500/30 transition-colors scroll-item scroll-fade-up delay-200" style={{animationPlayState: 'paused'}}>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C]"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 border border-purple-500/20">
<iconify-icon icon="solar:scanner-linear" width="24"></iconify-icon>
</div>
<h3 className="text-3xl md:text-4xl font-light text-white tracking-tight font-oswald uppercase">
                  Scannable
                </h3>
<p className="mt-2 text-base md:text-lg font-light leading-relaxed text-gray-400 max-w-[26rem]">
                  Works just like a QR code, but better. Point your camera at
                  any MipTag to instantly engage with the content.
                </p>
</div>
<div className="relative z-10 flex-1 flex items-center justify-center pt-6">
<div className="w-full max-w-[300px] h-[500px] border-2 border-white/10 rounded-3xl relative overflow-hidden bg-black/50">
<div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-purple-500 shadow-[0_0_10px_#a855f7]"></div>
<div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-purple-500 shadow-[0_0_10px_#a855f7]"></div>
<div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-purple-500 shadow-[0_0_10px_#a855f7]"></div>
<div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-purple-500 shadow-[0_0_10px_#a855f7]"></div>
<div className="absolute top-0 left-0 w-full h-1 bg-purple-500 shadow-[0_0_20px_#a855f7] animate-[translateY_3s_ease-in-out_infinite]" style={{animation: 'scan-line 3s linear infinite'}}></div>
<style>
                    @keyframes scan-line { 0% { top: 10%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 90%; opacity: 0; } }
                  </style>
<div className="absolute inset-0 flex items-center justify-center">
<div className="flex flex-col items-center gap-2 opacity-80">
<div className="relative w-12 h-12 flex items-center justify-center border border-white/50 p-1">
<div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white"></div>
<div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-white"></div>
<div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-white"></div>
<div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white"></div>
<svg className="w-8 h-8 text-white" fill="none" viewbox="0 0 60 60">
<use href="#miptag-logo"></use>
</svg>
</div>
<span className="text-4xl font-oswald font-semibold text-white tracking-widest uppercase">
                        GAMEDAY
                      </span>
</div>
</div>
</div>
</div>
</div>

<div className="relative h-[400px] rounded-[1.5rem] md:rounded-[2rem] bg-[#0A0A0C] border border-white/10 p-6 md:p-8 overflow-hidden flex flex-col group hover:border-purple-500/30 transition-colors scroll-item scroll-fade-up delay-300" style={{animationPlayState: 'paused'}}>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C]"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-green-500/10 text-green-400 flex items-center justify-center mb-4 border border-green-500/20">
<iconify-icon icon="solar:microphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-3xl md:text-4xl font-light text-white tracking-tight font-oswald uppercase">
                  Speakable
                </h3>
<p className="mt-2 text-base md:text-lg font-light leading-relaxed text-gray-400">
                  "Hey MipTag, open Lakers Store." Voice activation for the
                  hands-free era.
                </p>
</div>
<div className="relative z-10 flex-1 flex items-center justify-center gap-1">
<div className="w-2 bg-green-500 rounded-full animate-[pulse_1s_ease-in-out_infinite] h-8"></div>
<div className="w-2 bg-green-500 rounded-full animate-[pulse_1.2s_ease-in-out_infinite] h-16"></div>
<div className="w-2 bg-green-500 rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-12"></div>
<div className="w-2 bg-green-500 rounded-full animate-[pulse_1.5s_ease-in-out_infinite] h-24"></div>
<div className="w-2 bg-green-500 rounded-full animate-[pulse_1.1s_ease-in-out_infinite] h-14"></div>
<div className="w-2 bg-green-500 rounded-full animate-[pulse_0.9s_ease-in-out_infinite] h-6"></div>
</div>
</div>

<div className="relative h-[400px] rounded-[1.5rem] md:rounded-[2rem] bg-[#0A0A0C] border border-white/10 p-6 md:p-8 overflow-hidden flex flex-col justify-end group hover:border-purple-500/30 transition-colors scroll-item scroll-fade-up delay-500" style={{animationPlayState: 'paused'}}>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C]"></div>
<div className="absolute inset-0 flex items-center justify-center -translate-y-12 z-10">
<div className="flex items-center gap-2">
<div className="w-12 h-12 border border-white/20 rounded-md bg-white/5 flex flex-col items-center justify-center relative">
<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50"></div>
<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/50"></div>
<div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/50"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50"></div>
<svg className="w-8 h-8 text-white/50" fill="none" viewbox="0 0 60 60">
<use href="#miptag-logo"></use>
</svg>
</div>
<div className="flex gap-1">
<div className="text-4xl font-oswald font-semibold text-white tracking-tighter">
                      RL
                    </div>
<div className="text-4xl font-oswald font-semibold text-white tracking-tighter relative">
                      5
                    </div>
<div className="w-0.5 h-8 bg-purple-500 animate-pulse ml-0.5 mt-1 shadow-[0_0_10px_#a855f7]"></div>
</div>
</div>
</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 border border-purple-500/20">
<iconify-icon icon="solar:keyboard-linear" width="24"></iconify-icon>
</div>
<h3 className="text-3xl md:text-4xl font-light text-white tracking-tight font-oswald uppercase">
                  Typable
                </h3>
<p className="mt-2 text-base md:text-lg font-light leading-relaxed text-gray-400">
                  Easy to remember. Easy to type. No camera required.
                </p>
</div>
</div>

<div className="relative h-[400px] rounded-[1.5rem] md:rounded-[2rem] bg-[#0A0A0C] border border-white/10 p-6 md:p-8 overflow-hidden flex flex-col justify-end group hover:border-purple-500/30 transition-colors">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C]"></div>
<div className="relative z-10 mb-10 flex flex-col gap-6">
<div className="flex items-center justify-between">
<h4 className="text-lg md:text-xl font-semibold text-white tracking-tight font-sans">
                    Top Campaigns
                  </h4>
</div>
<div className="flex flex-col gap-5">
<div className="flex items-center gap-4">
<span className="w-[100px] md:w-[110px] shrink-0 text-sm text-gray-300 font-medium truncate font-sans uppercase">
                      SUPERBOWL
                    </span>
<div className="h-3 flex-1 rounded-full bg-white/5 overflow-hidden">
<div className="h-full rounded-full bg-purple-500 w-[90%] shadow-[0_0_10px_#a855f7]"></div>
</div>
<span className="w-10 md:w-12 shrink-0 text-right text-sm text-white font-medium font-sans">
                      98%
                    </span>
</div>
<div className="flex items-center gap-4">
<span className="w-[100px] md:w-[110px] shrink-0 text-sm text-gray-300 font-medium truncate font-sans uppercase">
                      NIKE AIR
                    </span>
<div className="h-3 flex-1 rounded-full bg-white/5 overflow-hidden">
<div className="h-full rounded-full bg-blue-500 w-[75%]"></div>
</div>
<span className="w-10 md:w-12 shrink-0 text-right text-sm text-white font-medium font-sans">
                      75%
                    </span>
</div>
</div>
</div>
<div className="relative z-10">
<h3 className="text-3xl md:text-4xl font-light text-white tracking-tight font-oswald uppercase">
                  Fan Data
                </h3>
<p className="mt-2 text-base md:text-lg font-light leading-relaxed text-gray-400">
                  Secure Data From offline to online
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-5xl mx-auto px-4 mt-24 md:mt-40 relative z-10 scroll-item scroll-fade-up" style={{animationPlayState: 'paused'}}>
<div className="flex flex-col items-center text-center mb-10">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-900/20 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-widest mb-5 font-sans shadow-[0_0_15px_rgba(239,68,68,0.2)]">
<iconify-icon icon="solar:shield-warning-bold" width="16"></iconify-icon>
            FBI Warning
          </div>
<h2 className="text-3xl md:text-5xl font-oswald font-semibold text-white tracking-tight mb-4">
            The Hidden Dangers of QR Codes
          </h2>
<p className="text-base md:text-lg text-gray-400 max-w-2xl font-sans font-light leading-relaxed">
            Cybercriminals are tampering with QR codes to steal data. Watch the
            report to see why MipTags are the safer, human-readable choice.
          </p>
</div>
<div className="relative w-full rounded-2xl md:rounded-3xl p-1 bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 shadow-2xl group hover:border-purple-500/30 transition-all duration-500">

<div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-purple-600/10 to-blue-600/10 blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
<div className="relative z-10 rounded-xl md:rounded-2xl overflow-hidden bg-black shadow-inner">
<div className="" style={{padding: '56.25% 0 0 0', position: 'relative'}}>
<iframe allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" className="" data-ready="true" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" src="https://player.vimeo.com/video/1103015787?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}} title="FBI QR Code Warning Good Morning America"></iframe>
</div>
</div>
</div>

</section>
<section className="w-full max-w-[95rem] mx-auto my-24 md:my-40 bg-black/40 backdrop-blur-sm border border-white/10 rounded-[2.5rem] py-20 px-4 md:px-8 relative overflow-hidden">

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold text-white text-center mb-6 tracking-tight font-oswald">
            Mobile Information Post Tags = Direct Secure Connections
          </h2>
<p className="text-lg md:text-xl text-gray-400 text-center mb-16 font-sans font-light">
            MipTags are 1-15 characters long human readable codes.
          </p>

<div className="w-full relative mb-24 md:mb-28">

<div className="absolute inset-0 bg-blue-600/10 blur-3xl -z-10 rounded-full opacity-50"></div>
<div className="flex flex-col md:flex-row w-full bg-[#020410] border border-blue-900/40 rounded-[2.5rem] relative shadow-2xl overflow-visible">



</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl">

<div className="flex flex-col items-center text-center gap-4 group">
<div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 text-xl group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
<iconify-icon icon="solar:check-read-linear" strokeWidth="2.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight font-oswald">
                MipTags Direct Search
              </h3>
<p className="text-gray-400 leading-relaxed text-sm md:text-base font-sans font-light px-4">
                Uses our proprietary patent pending Direct Search Technology™
                connecting your message directly to the audience.
              </p>
</div>

<div className="flex flex-col items-center text-center gap-4 group">
<div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 text-xl group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
<iconify-icon icon="solar:check-read-linear" strokeWidth="2.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight font-oswald">
                Users’ Identities Secured
              </h3>
<p className="text-gray-400 leading-relaxed text-sm md:text-base font-sans font-light px-4">
                MipTags Digital Defense™ secures everyone’s identity. We use
                malware tools to scan MipTags, providing a level of security not
                seen today.
              </p>
</div>

<div className="flex flex-col items-center text-center gap-4 group">
<div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 text-xl group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
<iconify-icon icon="solar:check-read-linear" strokeWidth="2.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight font-oswald">
                Direct Connections Secured
              </h3>
<p className="text-gray-400 leading-relaxed text-sm md:text-base font-sans font-light px-4">
                Equals a Win-Win for brands and consumers. Brands receive direct
                connections and analytics. Users privacy is safe until they
                decide to share it.
              </p>
</div>
</div>
</div>
</section>

<section className="w-full py-12 my-24 md:my-40 relative z-10">
<div className="max-w-7xl mx-auto px-4 relative">

<div className="absolute top-0 right-0 md:top-0 md:-right-4 lg:right-0 transform translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 z-20">
<div className="relative w-28 h-28 md:w-32 md:h-32 bg-white rounded-full border-4 border-red-600 flex items-center justify-center shadow-[0_0_25px_rgba(220,38,38,0.5)] rotate-12">
<div className="absolute w-[110%] h-1.5 bg-red-600 rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"></div>
<iconify-icon className="text-black text-6xl opacity-80" icon="solar:qr-code-bold"></iconify-icon>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-30 pointer-events-none">
<span className="bg-red-600 text-white text-[10px] md:text-xs font-semibold px-1 py-0.5 shadow-sm transform -rotate-12 block w-fit mx-auto">
                  MALWARE
                </span>
</div>
</div>
</div>

<div className="text-center mb-16 relative z-10">
<h2 className="text-4xl md:text-6xl font-oswald font-semibold text-white mb-4 tracking-tight">
              How To Use MipTags?
            </h2>
<p className="text-lg text-gray-400 font-sans max-w-2xl mx-auto">
              Market to humans like a human. Readable MipTags for anything
              offline
            </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:border-purple-500/30 transition-all group hover:bg-white/5">
<iconify-icon className="text-white text-4xl mb-4 group-hover:text-purple-400 transition-colors" icon="solar:minimize-square-3-linear"></iconify-icon>
<h3 className="text-xl font-semibold text-white mb-2 font-oswald">
                  Short like ABC123
                </h3>
<p className="text-sm text-gray-400 leading-relaxed font-sans">
                  For fast moving offline connections. 360 Media, TV, Radio,
                  automobile wraps.
                </p>
</div>

<div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:border-purple-500/30 transition-all group hover:bg-white/5">
<iconify-icon className="text-white text-4xl mb-4 group-hover:text-purple-400 transition-colors" icon="solar:brain-linear"></iconify-icon>
<h3 className="text-xl font-semibold text-white mb-2 font-oswald">
                  Memorable Branding
                </h3>
<p className="leading-relaxed text-sm text-gray-400 font-sans">Longer MipTags for marketing Alignment. Example: JustMipTagIt, GotMilk</p>
</div>

<div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:border-purple-500/30 transition-all group hover:bg-white/5">
<span className="text-3xl font-semibold font-mono text-white mb-4 group-hover:text-purple-400 transition-colors tracking-widest block h-9">
                  7799
                </span>
<h3 className="text-xl font-semibold text-white mb-2 font-oswald">
                  Use Easy Numbers
                </h3>
<p className="text-sm text-gray-400 leading-relaxed font-sans">
                  Think 800 Numbers Evolved MipTag 800Contacts or RL52
                </p>
</div>

<div className="bg-[#0A0A0C] border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:border-purple-500/30 transition-all group hover:bg-white/5">
<iconify-icon className="text-white text-4xl mb-4 group-hover:text-purple-400 transition-colors" icon="solar:shield-star-linear"></iconify-icon>
<h3 className="text-xl font-semibold text-white mb-2 font-oswald">
                  MipTags Digital Defense
                </h3>
<p className="text-sm text-gray-400 leading-relaxed font-sans">
                  No Squatters, No Clones We verify authenticity &amp; your link
                  security
                </p>
</div>
</div>

<div className="flex flex-col items-center justify-center relative">

<div className="relative w-full h-[450px] flex items-center justify-center scale-90 md:scale-100">

<div className="absolute left-4 md:left-10 top-16 w-44 h-80 bg-[#111] border border-gray-700 rounded-3xl transform -rotate-[15deg] z-0 opacity-50 blur-[1px] shadow-2xl"></div>

<div className="absolute right-4 md:right-10 top-16 w-44 h-80 bg-[#111] border border-gray-700 rounded-3xl transform rotate-[15deg] z-0 opacity-50 blur-[1px] shadow-2xl"></div>

<div className="relative w-52 h-[340px] bg-black border-[6px] border-[#222] rounded-[2rem] shadow-[0_0_50px_rgba(168,85,247,0.3)] z-10 overflow-hidden flex flex-col ring-1 ring-white/10">
<div className="absolute top-0 inset-x-0 h-6 bg-black z-20 flex justify-center">
<div className="w-20 h-5 bg-[#222] rounded-b-xl"></div>
</div>

<div className="flex-1 bg-gradient-to-br from-[#1e1b4b] via-black to-[#312e81] p-4 flex flex-col items-center pt-8 space-y-4 relative">

<div className="absolute top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-purple-600/20 blur-2xl rounded-full"></div>
<div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center border border-purple-500 shadow-lg z-10">
<svg className="w-8 h-8 text-purple-400" fill="none" viewbox="0 0 60 60">
<use href="#miptag-logo"></use>
</svg>
</div>
<div className="text-center z-10">
<div className="text-white font-oswald text-xl tracking-tight">
                        MIPTAG.ME
                      </div>
<div className="text-[10px] text-gray-400 font-sans mt-1">
                        Secure. Direct. Human.
                      </div>
</div>

<div className="w-full bg-white/5 rounded-lg border border-white/10 p-2 flex items-center gap-2 mt-4">
<div className="w-8 h-8 rounded bg-white/10"></div>
<div className="h-2 w-20 bg-white/10 rounded"></div>
</div>
<div className="w-full h-12 bg-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-900/50">
<div className="h-2 w-24 bg-white/30 rounded"></div>
</div>

<div className="flex justify-between w-full mt-auto pt-4 px-2">
<div className="w-6 h-6 bg-white/10 rounded-full"></div>
<div className="w-6 h-6 bg-white/10 rounded-full"></div>
<div className="w-6 h-6 bg-white/10 rounded-full"></div>
<div className="w-6 h-6 bg-white/10 rounded-full"></div>
</div>
</div>
</div>
</div>
<button className="inline-flex overflow-hidden transition-all duration-300 hover:bg-[#3730a3] hover:shadow-[0_0_20px_rgba(49,46,129,0.5)] font-medium text-white font-sans bg-[#312e81] h-12 border-[#4338ca] border rounded-lg mt-8 pr-8 pl-8 relative items-center justify-center" onclick="window.location.href='/how-it-works'" role="button">
<span className="" onclick="window.location.href='/how-it-works'" role="button">Learn How to Use</span>
</button>
</div>
</div>
</div>
</section>

<section className="py-12 my-24 md:my-40 relative z-10" id="pricing">
<div className="px-4 md:px-6 max-w-[95rem] mx-auto">

<div className="text-center mb-16 max-w-4xl mx-auto scroll-item scroll-fade-up" style={{animationPlayState: 'paused'}}>
<h2 className="text-5xl md:text-6xl font-semibold text-white mb-6 font-oswald tracking-tight">
              Pricing
            </h2>
<p className="text-lg md:text-xl text-gray-400 font-sans font-light leading-relaxed">
              Get your free MipTag or upgrade to custom MipTags, shorter
              memorable tags, powerful analytics, and expert support.
              <span className="block mt-2 text-white">
                MipTags are 1-15 characters long human readable codes.
              </span>
</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 items-stretch scroll-item scroll-fade-up delay-100" style={{animationPlayState: 'paused'}}>

<div className="flex flex-col p-6 rounded-3xl border border-white/10 bg-[#0A0A0C] hover:border-purple-500/30 transition-all duration-300 group">
<div className="mb-6">
<h3 className="text-xl font-semibold text-white font-oswald tracking-wide">
                  Free Random 10+
                </h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white font-oswald tracking-tight">
                    $0.00
                  </span>
<span className="text-sm text-gray-400 font-sans">/ year</span>
</div>
</div>
<button className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white hover:text-black text-white font-medium transition-all mb-8 font-sans text-sm tracking-wide border border-white/5">
                Get started for free
              </button>
<ul className="space-y-4 flex-1">
<li className="flex items-start gap-3 text-sm text-gray-300 font-sans">
<iconify-icon className="text-purple-400 shrink-0 mt-0.5" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
<span>Randomly generated MipTags</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300 font-sans">
<iconify-icon className="text-purple-400 shrink-0 mt-0.5" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
<span>Access basic analytics</span>
</li>
</ul>
</div>

<div className="flex flex-col p-6 rounded-3xl border border-white/10 bg-[#0A0A0C] hover:border-purple-500/30 transition-all duration-300 group">
<div className="mb-6">
<h3 className="text-xl font-semibold text-white font-oswald tracking-wide">
                  MipTag
                </h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white font-oswald tracking-tight">
                    $9.99
                  </span>
<span className="text-sm text-gray-400 font-sans">/ year</span>
</div>
</div>
<button className="hover:bg-white hover:text-black transition-all text-sm font-medium text-white tracking-wide font-sans bg-white/10 w-full border-white/5 border rounded-xl mb-8 pt-3 pr-4 pb-3 pl-4 cursor-pointer" onclick="window.location.href='/register'" role="button">
                Sign up now
              </button>
<ul className="space-y-4 flex-1">
<li className="flex items-start gap-3 text-sm text-gray-300 font-sans">
<iconify-icon className="text-purple-400 shrink-0 mt-0.5" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
<span className="">Customized MipTags (8+ Characters for Free)</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300 font-sans">
<iconify-icon className="text-purple-400 shrink-0 mt-0.5" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
<span>Access basic analytics</span>
</li>
</ul>
</div>

<div className="relative flex flex-col p-6 rounded-3xl border border-purple-500/50 bg-gradient-to-b from-[#1a0b2e] to-black shadow-[0_0_30px_rgba(168,85,247,0.15)] transform md:-translate-y-4 z-10">
<div className="absolute top-4 right-4">
<span className="px-2 py-1 bg-purple-500/20 border border-purple-500/50 text-purple-300 text-[10px] uppercase font-semibold rounded tracking-wider font-sans">
                  Popular
                </span>
</div>
<div className="mb-6">
<h3 className="text-xl font-semibold text-white font-oswald tracking-wide">
                  MipTag Premium
                </h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white font-oswald tracking-tight">
                    $34.99
                  </span>
<span className="text-sm text-gray-400 font-sans">/ year</span>
</div>
</div>
<button className="w-full py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium transition-all mb-8 font-sans text-sm tracking-wide shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                Sign up now
              </button>
<ul className="space-y-4 flex-1">
<li className="flex items-start gap-3 text-sm text-white font-sans">
<iconify-icon className="text-purple-400 shrink-0 mt-0.5" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
<span className="">Customized MipTags (6+ Characters for Free)</span>
</li>
<li className="flex items-start gap-3 text-sm text-white font-sans">
<iconify-icon className="text-purple-400 shrink-0 mt-0.5" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
<span>Access advanced analytics</span>
</li>
</ul>
</div>

<div className="flex flex-col p-6 rounded-3xl border border-white/10 bg-[#0A0A0C] hover:border-purple-500/30 transition-all duration-300 group">
<div className="mb-6">
<h3 className="text-xl font-semibold text-white font-oswald tracking-wide">
                  MipTag Corporate
                </h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white font-oswald tracking-tight">
                    $59.99
                  </span>
<span className="text-sm text-gray-400 font-sans">/ year</span>
</div>
</div>
<button className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white hover:text-black text-white font-medium transition-all mb-8 font-sans text-sm tracking-wide border border-white/5">
                Sign up now
              </button>
<ul className="space-y-4 flex-1">
<li className="flex items-start gap-3 text-sm text-gray-300 font-sans">
<iconify-icon className="text-purple-400 shrink-0 mt-0.5" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
<span>Customized MipTags (4+ Characters for Free)</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300 font-sans">
<iconify-icon className="text-purple-400 shrink-0 mt-0.5" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
<span>Everything from MipTag Premium</span>
</li>
</ul>
</div>

<div className="flex flex-col p-6 rounded-3xl border border-white/10 bg-[#0A0A0C] hover:border-purple-500/30 transition-all duration-300 group">
<div className="mb-6">
<h3 className="text-xl font-semibold text-white font-oswald tracking-wide">
                  MipTag Enterprise
                </h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white font-oswald tracking-tight">
                    $89.99
                  </span>
<span className="text-sm text-gray-400 font-sans">/ year</span>
</div>
</div>
<button className="hover:bg-white hover:text-black transition-all text-sm font-medium text-white tracking-wide font-sans bg-white/10 w-full border-white/5 border rounded-xl mb-8 pt-3 pr-4 pb-3 pl-4" onclick="window.location.href='/register'" role="button">
                Sign up now
              </button>
<ul className="space-y-4 flex-1">
<li className="flex items-start gap-3 text-sm text-gray-300 font-sans">
<iconify-icon className="text-purple-400 shrink-0 mt-0.5" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
<span>Customized MipTags (4+ Characters for Free)</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300 font-sans">
<iconify-icon className="text-purple-400 shrink-0 mt-0.5" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
<span>Everything from MipTag Corporate</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto mb-24 md:mb-40 px-4 relative z-10">
<div className="md:p-16 lg:px-20 lg:py-24 overflow-hidden flex flex-col lg:flex-row lg:gap-20 bg-gradient-to-br from-[#2e1065] via-[#1e1b4b] to-[#172554] w-full border-white/10 border rounded-[2.5rem] pt-8 pr-8 pb-8 pl-8 relative gap-x-12 gap-y-12 items-center">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>

<div className="relative w-full lg:w-1/2 flex justify-center order-1">
<div className="relative w-[300px] md:w-[320px] h-[640px] bg-black border-[8px] border-black ring-1 ring-white/10 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col">

<div className="absolute top-0 w-full h-8 bg-black z-30 rounded-t-[2.5rem]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-30"></div>

<div className="w-full h-full relative bg-black">

<img alt="App Preview" className="opacity-80 w-full h-full object-cover bg-center absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/63fd1440-37f1-4e93-9e22-b2a28b9cd047_800w.jpg"/>

<div className="absolute top-12 left-0 w-full flex justify-between px-6 items-center z-20">
<iconify-icon className="text-white drop-shadow-md" icon="lucide:volume-x" width="20"></iconify-icon>
<span className="text-white text-sm font-semibold tracking-wide drop-shadow-md font-sans">
                    Unmute
                  </span>
<iconify-icon className="text-white drop-shadow-md" icon="lucide:maximize" width="20"></iconify-icon>
</div>

<div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-48 h-24 border-2 border-[#4ade80] rounded-lg shadow-[0_0_20px_rgba(74,222,128,0.4)] flex items-center justify-center z-20 bg-black/10 backdrop-blur-[1px]">

<div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-white"></div>
<div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-white"></div>
<div className="absolute -bottom-1-left-1 w-3 h-3 border-b-2 border-l-2 border-white"></div>
<div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-white"></div>
<div className="flex flex-col items-center gap-1 animate-pulse">
<span className="text-[#4ade80] font-oswald text-xl font-bold tracking-widest uppercase drop-shadow-[0_0_10px_rgba(74,222,128,0.8)]">
                      RL52
                    </span>
<span className="text-white text-[8px] uppercase tracking-widest bg-black/50 px-1.5 py-0.5 rounded backdrop-blur-sm border border-[#4ade80]/30">
                      Detected
                    </span>
</div>
</div>

<div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black via-black/90 to-transparent z-20 flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center">
<svg className="w-6 h-6 text-white" fill="none" viewbox="0 0 60 60"><use href="#miptag-logo"></use></svg>
</div>
<div className="flex flex-col">
<span className="text-white font-oswald text-sm tracking-wide">Ray Lewis Official</span>
<span className="text-purple-400 text-xs font-sans">@raylewis52</span>
</div>
</div>
<button className="hover:bg-purple-500 transition-colors uppercase flex text-xs font-bold text-white tracking-widest bg-purple-600 w-full h-11 border-purple-400/50 border rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.4)] items-center justify-center" onclick="window.location.href='https://miptag.me/search?keywords=rl52'" role="button">
                    View Exclusive Content
                  </button>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-2 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-6 font-sans">
<span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
              Available Now
            </div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-oswald font-semibold text-white mb-6 tracking-tight leading-none">
              The Power of MipTags
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                In Your Pocket
              </span>
</h2>
<p className="text-lg text-gray-300 font-sans font-light leading-relaxed mb-10 max-w-xl">
              Download the official MipTags app to create tags instantly, track your analytics in real-time, and discover exclusive content from your favorite brands and creators.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="flex hover:bg-gray-200 transition-all duration-300 hover:-translate-y-1 text-black bg-white rounded-xl pt-3 pr-6 pb-3 pl-6 shadow-[0_0_20px_rgba(255,255,255,0.2)] gap-x-3 gap-y-3 items-center" onclick="window.location.href='https://apps.apple.com/us/app/miptag/id6749550039'" role="button">
<iconify-icon className="" icon="logos:apple" width="24"></iconify-icon>
<div className="flex flex-col items-start leading-none">
<span className="text-[10px] uppercase font-semibold tracking-wider opacity-70" onclick="window.location.href='https://apps.apple.com/us/app/miptag/id6749550039'" role="button">Download on the</span>
<span className="text-base font-bold font-sans" onclick="window.location.href='https://apps.apple.com/us/app/miptag/id6749550039'" role="button">App Store</span>
</div>
</button>
<button className="flex hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/40 text-white bg-[#000000] border-white/20 border rounded-xl pt-3 pr-6 pb-3 pl-6 gap-x-3 gap-y-3 items-center" onclick="window.location.href='https://play.google.com/store/apps/details?id=com.miptagappv2'" role="button">
<iconify-icon className="" height="26" icon="logos:google-play-icon" width="24"></iconify-icon>
<div className="flex flex-col items-start leading-none">
<span className="text-[10px] uppercase font-semibold tracking-wider opacity-70" onclick="window.location.href='https://play.google.com/store/apps/details?id=com.miptagappv2'" role="button">Get it on</span>
<span className="text-base font-bold font-sans" onclick="window.location.href='https://play.google.com/store/apps/details?id=com.miptagappv2'" role="button">Google Play</span>
</div>
</button>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-black pt-16 pb-8 px-4 md:px-8 relative z-10">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="flex flex-col gap-6">
<a className="inline-flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded-lg bg-black border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.5)] flex items-center justify-center text-purple-400">
<svg className="w-5 h-5" fill="none" viewbox="0 0 60 60">
<use href="#miptag-logo"></use>
</svg>
</div>
<span className="font-oswald text-xl font-semibold tracking-tight text-white">
                MipTags
              </span>
</a>
<p className="text-gray-500 text-sm leading-relaxed font-sans font-light max-w-xs">
              The human-centric alternative to QR codes. Secure, readable, and designed for the way people actually connect.
            </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all" href="#">
<iconify-icon icon="ri:twitter-x-line" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all" href="#">
<iconify-icon icon="ri:instagram-line" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all" href="#">
<iconify-icon icon="ri:linkedin-fill" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="">
<h4 className="text-white font-semibold font-oswald tracking-wide mb-6">Product</h4>
<ul className="space-y-4">
<li className=""><a className="hover:text-purple-400 transition-colors text-sm text-gray-500 font-sans" href="/#">Features</a></li>
<li className=""><a className="hover:text-purple-400 transition-colors text-sm text-gray-500 font-sans" href="/pricing">Pricing</a></li>
</ul>
</div>

<div className="">
<h4 className="text-white font-semibold font-oswald tracking-wide mb-6">Company</h4>
<ul className="space-y-4">
<li className=""><a className="hover:text-purple-400 transition-colors text-sm text-gray-500 font-sans" href="/how-it-works">About Us</a></li>
<li className=""><a className="hover:text-purple-400 transition-colors text-sm text-gray-500 font-sans" href="#">Careers</a></li>
</ul>
</div>

<div className="">
<h4 className="text-white font-semibold font-oswald tracking-wide mb-6">Legal</h4>
<ul className="space-y-4">
<li className=""><a className="text-sm text-gray-500 hover:text-purple-400 transition-colors font-sans" href="#">Privacy Policy</a></li>
<li className=""><a className="text-sm text-gray-500 hover:text-purple-400 transition-colors font-sans" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-600 font-sans">© 2026 Unit 52 Labs: All rights reserved. </p>
<div className="flex items-center gap-2">
<span className="text-xs text-gray-500 font-mono" onclick="window.location.href='https://digitizehq.com/'" role="button">Design by Digitize HQ</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
