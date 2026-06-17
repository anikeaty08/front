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
            // Intersection Observer with a tight margin to detect middle of viewport
            const options = {
              root: null,
              rootMargin: '-45% 0px -45% 0px',
              threshold: 0
            };

            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  const index = entry.target.getAttribute('data-index');
                  updateActiveState(index);
                }
              });
            }, options);

            // Observe all testimonial items
            const items = document.querySelectorAll('.testimonial-item');
            items.forEach(item => observer.observe(item));

            // Click to scroll functionality for avatars
            const avatars = document.querySelectorAll('.avatar-indicator');
            avatars.forEach(avatar => {
              avatar.addEventListener('click', () => {
                const targetIndex = avatar.getAttribute('data-target');
                const targetItem = document.querySelector(`.testimonial-item[data-index="${targetIndex}"]`);
                if (targetItem) {
                  targetItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  updateActiveState(targetIndex);
                }
              });
            });

            function updateActiveState(index) {
              // Toggle active class on text items
              items.forEach(item => {
                if (item.getAttribute('data-index') === index) {
                  item.classList.add('active');
                } else {
                  item.classList.remove('active');
                }
              });

              // Toggle active class on avatars
              avatars.forEach(avatar => {
                if (avatar.getAttribute('data-target') === index) {
                  avatar.classList.add('active');
                } else {
                  avatar.classList.remove('active');
                }
              });
            }

            // Initialize first item as active
            setTimeout(() => updateActiveState('0'), 100);
          })();
        


      lucide.createIcons();
    


      document.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

        document.querySelectorAll('.aura-reveal').forEach((el) => {
          const parent = el.parentElement;
          if (parent) {
            const siblings = Array.from(parent.children).filter(c => c.classList.contains('aura-reveal'));
            const index = siblings.indexOf(el);
            if (index > 0) el.style.animationDelay = `${index * 100}ms`;
          }
          observer.observe(el);
        });

        document.querySelectorAll('.flashlight-card').forEach(card => {
          card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
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
      

<div className="aura-background-component fixed top-0 w-full -z-10 h-[800px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bKN5upvoulAmWvInmHza"></div>

</div></div>

<div className="fixed inset-0 bg-stripes pointer-events-none z-0"></div>


<nav className="fixed flex z-50 px-4 top-6 right-0 left-0 justify-center">
<div className="flex shadow-black/50 bg-[#000000] w-full max-w-4xl border-white/10 border rounded-full pt-2 pr-2 pb-2 pl-6 shadow-2xl backdrop-blur-xl items-center justify-between">
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://cdn.midjourney.com/a3840b63-36c4-4a6b-80dd-5c41d0f4a259/0_0.png?w=800&amp;q=80)] bg-cover rounded" href="#"></a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Benefits</a>
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Plans</a>
<a className="hover:text-white transition-colors" href="#">FAQ</a>
</div>
<a className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors" href="#">
          Get Started
        </a>
</div>
</nav>
<main className="relative z-10">

<div className="container border-x flex flex-col text-center max-w-7xl border-white/10 mr-auto ml-auto pt-32 pr-6 pb-24 pl-6 items-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 mb-8 uppercase tracking-wider aura-reveal">
<svg className="lucide lucide-zap" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
          Version 2.0 Now Live
        </div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500 mb-6 max-w-5xl mx-auto leading-[1.1] aura-reveal" style={{animationDelay: '100ms'}}>
          Unleash Maximum
          <br/>
          Internet Speed
        </h1>

<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal aura-reveal" style={{animationDelay: '200ms'}}>
          Optimize your connection with advanced routing, reduced latency, and
          packet loss prevention for gaming and streaming.
        </p>

<a className="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(34,197,94,0.35)] rounded-full relative shadow-[0_8px_40px_rgba(34,197,94,0.25)] aura-reveal" href="#" style={{'--spread': '90deg', '--shimmer-color': 'rgba(255, 255, 255, 0.6)', '--radius': '9999px', '--speed': '4s', '--cut': '1px', '--bg': 'rgba(255, 255, 255, 0.05)', animationDelay: '300ms'}}>
<div className="absolute inset-0">
<div className="absolute inset-[-200%] w-[400%] h-[400%] [animation:rotate-gradient_var(--speed)_linear_infinite]">
<div className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]"></div>
</div>
</div>
<div className="absolute rounded-full [background:var(--bg)] [inset:var(--cut)] backdrop-blur"></div>
<div className="z-10 flex gap-3 sm:w-auto overflow-hidden text-base font-medium text-white w-full pt-3 pr-4 pb-3 pl-4 relative items-center" style={{borderRadius: '9999px'}}>
<div className="" style={{position: 'absolute', content: '\' \'', display: 'block', width: '200%', height: '200%', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), transparent)', animation: 'borderBeamRotation 4s infinite linear', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}></div>
<div className="" style={{position: 'absolute', inset: '1px', background: 'rgba(10, 11, 20, 0.8)', borderRadius: '9999px', backdropFilter: 'blur(8px)'}}></div>
<span className="whitespace-nowrap relative z-10 font-sans">
              Boost Connection
            </span>
<span className="inline-flex items-center justify-center z-10 bg-white/10 w-7 h-7 rounded-full ml-1 relative group-hover:bg-white/20 transition-colors">
<svg className="lucide lucide-arrow-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
<style>
              @keyframes borderBeamRotation {
                0% {
                  transform: translate(-50%, -50%) rotate(0deg);
                }

                100% {
                  transform: translate(-50%, -50%) rotate(360deg);
                }
              }
            </style>
</div>
</a>
</div>
<div className="container border-x border-b max-w-7xl border-white/10 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-12 border border-white/10 bg-black/40 backdrop-blur-sm rounded-none overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-white/10">
<div className="lg:col-span-7 flex flex-col flashlight-card aura-reveal">
<div className="p-8 md:p-12 border-b border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent relative group">
<div className="flex flex-col md:flex-row items-center gap-12 h-full">
<div className="relative w-full max-w-xs shrink-0">
<div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl relative z-20 group-hover:-translate-y-2 transition-transform duration-500 ease-out">
<div className="flex items-center justify-center w-12 h-12 bg-white rounded-xl mb-4 shadow-lg shadow-white/10">
<svg className="lucide lucide-shield-check w-6 h-6 text-black" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div className="text-sm font-medium text-white mb-0.5">
                      Optimized
                    </div>
<div className="text-xs text-zinc-500 mb-6 font-mono">
                      Ping: 14ms
                    </div>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-600 via-white to-red-600 shadow-inner"></div>
<div className="text-xs text-zinc-400">Frankfurt, DE</div>
<svg className="lucide lucide-chevron-right w-3 h-3 text-zinc-600 ml-auto" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</div>
</div>
<div className="absolute -inset-4 bg-white/5 blur-2xl rounded-full z-10 opacity-50"></div>
</div>
<div className="text-left">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-3">
                    Low Latency
                  </h3>
<p className="text-base text-zinc-400 leading-relaxed mb-6">
                    Experience gaming and streaming without interruptions. Our
                    smart routing finds the shortest path to game servers.
                  </p>
<a className="inline-flex items-center text-sm font-medium text-white hover:text-zinc-300 transition-colors group" href="#">
                    See our plans
                    <svg className="lucide lucide-arrow-right w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10 flex-grow">
<div className="p-8 md:p-10 bg-gradient-to-br from-transparent to-white/[0.02] relative overflow-hidden group">
<h3 className="text-xl font-semibold tracking-tight text-white mb-2 relative z-10">
                  Packet Loss Fix
                </h3>
<p className="text-sm text-zinc-400 relative z-10">
                  Stabilize your connection instantly.
                </p>
</div>
<div className="p-8 md:p-10 flex flex-col justify-center bg-black">
<div className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-1">
                  -40%
                </div>
<div className="text-sm text-zinc-400">Average Ping Reduction</div>
</div>
</div>
</div>
<div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between bg-zinc-900/20 flashlight-card aura-reveal" style={{animationDelay: '100ms'}}>
<div className="">
<h3 className="text-3xl font-semibold tracking-tight text-white mb-4">
                Competitive Edge In Every Game
              </h3>
<p className="text-base text-zinc-400 leading-relaxed mb-10">
                Don't let your ISP's bad routing cost you the match. Finex
                ensures your packets take the most direct route.
              </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<svg className="lucide lucide-zap w-5 h-5 text-white shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
<span className="text-sm text-zinc-300">
                    Reduce Latency &amp; Jitter
                  </span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-shield w-5 h-5 text-white shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
<span className="text-sm text-zinc-300">
                    DDoS Protection Included
                  </span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-route w-5 h-5 text-white shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="19" r="3"></circle>
<path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
<circle cx="18" cy="5" r="3"></circle>
</svg>
<span className="text-sm text-zinc-300">
                    Smart Traffic Routing
                  </span>
</li>
</ul>
</div>
<button className="bg-white text-black px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-zinc-200 transition-colors w-fit">
              Get Started
            </button>
</div>
</div>
</div>

<section className="container max-w-7xl mx-auto px-6 border-x border-b border-white/10 py-24">

<div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-12">
<div className="flex-1 aura-reveal">
<div className="inline-flex items-center justify-center px-3 py-1 mb-6 border border-purple-500/30 bg-purple-500/10 text-purple-200 text-xs font-medium tracking-wide uppercase">
              Intelligent Protection
            </div>
<h2 className="text-6xl md:text-7xl lg:text-8xl font-oswald uppercase tracking-tight leading-[0.9] text-white">
              Speed Without
              <br/>
              Compromise
            </h2>
</div>
<div className="flex flex-col justify-end items-start lg:items-end lg:text-right max-w-md gap-12 aura-reveal" style={{animationDelay: '100ms'}}>
<p className="text-zinc-400 text-lg leading-relaxed text-left lg:text-left">
              Your connection, supercharged by our global node network.
            </p>
<div className="w-full flex justify-end">
<span className="text-sm text-zinc-500 font-mono">001 — 003</span>
</div>
</div>
</div>

<div className="relative w-full aspect-[16/10] md:aspect-[21/9] bg-[#0A0A0A] border border-white/10 mb-10 overflow-hidden group shadow-2xl shadow-purple-900/20 aura-reveal">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-800/20 blur-[120px] rounded-full pointer-events-none"></div>

<div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent z-10"></div>

<div className="absolute inset-10 md:inset-16 flex border border-white/5 bg-[#050505] shadow-2xl z-20">

<div className="w-16 border-r border-white/5 flex flex-col items-center py-6 gap-6 bg-black/20 backdrop-blur-md">
<div className="w-8 h-8 bg-zinc-800 flex items-center justify-center">
<svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
<polyline points="9 22 9 12 15 12 15 22"></polyline>
</svg>
</div>
<div className="w-8 h-8 bg-purple-600/20 flex items-center justify-center border-l-2 border-purple-500">
<svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
<path d="M2 12h20"></path>
</svg>
</div>
<div className="w-8 h-8 flex items-center justify-center opacity-50">
<svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<rect height="14" rx="2" ry="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
</div>
</div>

<div className="flex-1 p-8 relative overflow-hidden">

<div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
<span className="text-sm font-mono text-zinc-300 tracking-wider">
                    OPTIMIZATION_ACTIVE
                  </span>
</div>
<div className="flex gap-3">
<div className="px-3 py-1 border border-white/10 text-[10px] text-zinc-400 uppercase tracking-widest hover:bg-white/5 transition-colors cursor-pointer">
                    Protocol: Wireguard
                  </div>
<div className="px-3 py-1 border border-white/10 text-[10px] text-zinc-400 uppercase tracking-widest hover:bg-white/5 transition-colors cursor-pointer">
                    IP: 192.168.X.X
                  </div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 aura-reveal">

<div className="border border-white/10 bg-white/[0.02] p-4 group/card hover:bg-white/[0.04] transition-colors">
<div className="flex items-start justify-between mb-4">
<div className="p-2 bg-purple-500/10 border border-purple-500/20">
<svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
<path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
<path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
</svg>
</div>
<span className="text-xs text-zinc-500 font-mono">
                      Reduced from 45ms
                    </span>
</div>
<div className="text-lg text-white font-medium">12ms</div>
<div className="text-xs text-zinc-500 mt-1">
                    Military grade standard
                  </div>
</div>

<div className="border border-white/10 bg-white/[0.02] p-4 group/card hover:bg-white/[0.04] transition-colors">
<div className="flex items-start justify-between mb-4">
<div className="p-2 bg-blue-500/10 border border-blue-500/20">
<svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
<path d="M8.5 8.5v.01"></path>
<path d="M16 15.5v.01"></path>
<path d="M12 12v.01"></path>
<path d="M11 17v.01"></path>
<path d="M7 14v.01"></path>
</svg>
</div>
<span className="text-xs text-zinc-500 font-mono">
                      No Packet Loss
                    </span>
</div>
<div className="text-lg text-white font-medium">100%</div>
<div className="text-xs text-zinc-500 mt-1">Latency: 14ms</div>
</div>

<div className="col-span-2 mt-4">
<div className="text-xs text-zinc-500 font-mono mb-3 uppercase tracking-wider">
                    Recent Activity
                  </div>
<div className="space-y-1">
<div className="flex items-center justify-between p-3 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03]">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-green-500"></div>
<span className="text-sm text-zinc-300">
                          Route Re-optimized
                        </span>
</div>
<span className="text-xs text-zinc-600 font-mono">
                        00:00:05
                      </span>
</div>
<div className="flex items-center justify-between p-3 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03]">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-blue-500"></div>
<span className="text-sm text-zinc-400">
                          Jitter Spike Mitigated
                        </span>
</div>
<span className="text-xs text-zinc-600 font-mono">
                        00:01:12
                      </span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-transparent to-transparent z-30 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-transparent to-transparent z-30 pointer-events-none"></div>

<div className="absolute right-[5%] top-[20%] w-24 h-24 border border-white/5 bg-white/[0.02] backdrop-blur-sm z-10 rotate-45 opacity-20"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 border-t border-white/10">
<div className="group pt-6 pr-4 cursor-pointer">
<h3 className="text-sm font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
              Smart Pathing
            </h3>
<p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
              We find the fastest physical path to the game server.
            </p>
</div>
<div className="relative pt-6 pr-4 px-0 md:px-4 cursor-pointer">
<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_15px_rgba(255,255,255,0.7)]"></div>
<h3 className="text-sm font-semibold text-white mb-2">FPS Boost</h3>
<p className="text-xs text-zinc-400 leading-relaxed">
              Free up system resources and optimize network drivers.
            </p>
</div>
<div className="group pt-6 pr-4 px-0 md:px-4 cursor-pointer">
<h3 className="text-sm font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
              Packet Loss Fix
            </h3>
<p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
              Redundant data transmission ensures 0% packet loss.
            </p>
</div>
<div className="group pt-6 px-0 md:px-4 cursor-pointer">
<h3 className="text-sm font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
              Game Support
            </h3>
<p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
              Custom profiles for over 1000+ competitive titles.
            </p>
</div>
</div>
</section>

<section className="container border-x max-w-7xl border-white/10 border-b mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<style>
          .testimonial-item {
            transition: all 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
            opacity: 0.15;
            filter: blur(4px);
            transform: scale(0.96) translateX(-10px);
          }
          .testimonial-item.active {
            opacity: 1;
            filter: blur(0);
            transform: scale(1) translateX(0);
          }
          .avatar-indicator {
            transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
            opacity: 0.3;
            filter: grayscale(100%);
            transform: scale(1);
            border-color: rgba(255, 255, 255, 0.05);
            box-shadow: none;
          }
          .avatar-indicator.active {
            opacity: 1;
            filter: grayscale(0%);
            transform: scale(1.4);
            border-color: rgba(255, 255, 255, 0.8);
            box-shadow: 0 0 40px -5px rgba(168, 85, 247, 0.4);
            z-index: 20;
          }
          .avatar-indicator::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 9999px;
            box-shadow: inset 0 0 10px rgba(0,0,0,0.5);
          }
        </style>

<div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12 relative z-10">
<div className="flex-1">
<h2 className="text-6xl md:text-7xl lg:text-8xl font-oswald uppercase tracking-tight leading-[0.9] text-white">
              What They Said
            </h2>
</div>
<div className="flex flex-col justify-end items-start lg:items-end lg:text-right max-w-md gap-12">
<p className="text-zinc-400 text-lg leading-relaxed text-left lg:text-left">
              Voices of our satisfied clients from around the globe.
            </p>
<div className="w-full flex justify-end">
<span className="text-sm text-zinc-500 font-mono">
                SCROLL TO READ
              </span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative min-h-[800px]">

<div className="lg:col-span-9 flex flex-col gap-40 lg:pb-40 py-12">

<div className="testimonial-item group relative aura-reveal" data-index="0">
<div className="md:pl-12 relative">

<div className="absolute -left-2 -top-6 md:-left-12 md:-top-8 opacity-20">
<svg className="text-white transform rotate-180" fill="currentColor" height="64" viewbox="0 0 24 24" width="64">
<path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
</svg>
</div>
<blockquote className="text-3xl md:text-5xl text-white font-light leading-[1.1] tracking-tight mb-8">
                  My ping dropped from 80ms to 35ms instantly. I can finally
                  compete at a high level without lag spikes.
                </blockquote>
<div className="flex items-center gap-4">

<div className="lg:hidden w-10 h-10 rounded-full overflow-hidden border border-white/20">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
</div>
<div className="flex flex-col">
<span className="text-sm text-white font-medium">
                      Alex Chen
                    </span>
<span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
                      Semi-Pro Valorant Player
                    </span>
</div>
</div>
</div>
</div>

<div className="testimonial-item group relative" data-index="1">
<div className="md:pl-12 relative">
<div className="absolute -left-2 -top-6 md:-left-12 md:-top-8 opacity-20">
<svg className="text-white transform rotate-180" fill="currentColor" height="64" viewbox="0 0 24 24" width="64">
<path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
</svg>
</div>
<blockquote className="text-3xl md:text-5xl text-white font-light leading-[1.1] tracking-tight mb-8">
                  Incredible reliability and encryption standards. Highly
                  recommended for enterprise usage!
                </blockquote>
<div className="flex items-center gap-4">
<div className="lg:hidden w-10 h-10 rounded-full overflow-hidden border border-white/20">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&amp;h=150&amp;fit=crop&amp;crop=faces"/>
</div>
<div className="flex flex-col">
<span className="text-sm text-white font-medium">
                      Sarah Jenkins
                    </span>
<span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
                      Director at Style Vision
                    </span>
</div>
</div>
</div>
</div>

<div className="testimonial-item group relative" data-index="2">
<div className="md:pl-12 relative">
<div className="absolute -left-2 -top-6 md:-left-12 md:-top-8 opacity-20">
<svg className="text-white transform rotate-180" fill="currentColor" height="64" viewbox="0 0 24 24" width="64">
<path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
</svg>
</div>
<blockquote className="text-3xl md:text-5xl text-white font-light leading-[1.1] tracking-tight mb-8">
                  Transformed our connectivity across borders into a seamless
                  experience. Superb!
                </blockquote>
<div className="flex items-center gap-4">
<div className="lg:hidden w-10 h-10 rounded-full overflow-hidden border border-white/20">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
</div>
<div className="flex flex-col">
<span className="text-sm text-white font-medium">
                      Marcus Thorne
                    </span>
<span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
                      Freelance Journalist
                    </span>
</div>
</div>
</div>
</div>
</div>

<div className="hidden lg:flex lg:col-span-3 sticky top-[40vh] flex-col items-end gap-8 pr-4 h-fit">
<div className="relative w-16 h-16 rounded-full border border-white/10 overflow-hidden cursor-pointer avatar-indicator" data-target="0">
<img className="w-full h-full object-cover transition-all" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
</div>
<div className="relative w-16 h-16 rounded-full border border-white/10 overflow-hidden cursor-pointer avatar-indicator" data-target="1">
<img className="w-full h-full object-cover transition-all" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&amp;h=150&amp;fit=crop&amp;crop=faces"/>
</div>
<div className="relative w-16 h-16 rounded-full border border-white/10 overflow-hidden cursor-pointer avatar-indicator" data-target="2">
<img className="w-full h-full object-cover transition-all" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
</div>
</div>
</div>

</section>

<section className="w-full bg-black text-white relative border-b border-white/10">

<div className="container border-x max-w-7xl border-white/10 mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col lg:flex-row lg:items-end justify-between py-24 gap-12">

<div className="flex-1 aura-reveal">
<h1 className="text-6xl md:text-7xl lg:text-8xl font-oswald uppercase tracking-tight leading-[0.9]">
                Simple Pricing Plans
              </h1>
</div>

<div className="flex flex-col justify-end items-start lg:items-end lg:text-right max-w-md gap-12 aura-reveal" style={{animationDelay: '100ms'}}>
<p className="text-zinc-400 text-lg leading-relaxed text-left lg:text-left">
                No hourly rates. No surprise charges. No scope creep penalties.
                Just transparent pricing for transformational work.
              </p>
<div className="w-full flex justify-end">
<span className="text-sm text-zinc-500 font-mono">003 — 003</span>
</div>
</div>
</div>
</div>

<div className="container max-w-7xl mx-auto border-x border-t border-white/10">
<div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">

<div className="flex flex-col p-8 md:p-12 h-full flashlight-card aura-reveal">
<div className="mb-16">
<h2 className="text-3xl font-normal mb-6">Monthly Pass</h2>
<p className="text-zinc-400 leading-relaxed max-w-lg">
                  Full access to our global node network for a month. Perfect
                  for testing the waters.
                </p>
</div>
<div className="border-t border-white/10 pt-12 mt-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="">
<span className="block text-zinc-500 text-sm mb-6">
                      Include
                    </span>
<ul className="space-y-4 text-sm text-zinc-300">
<li className="flex items-start gap-3">
<span className="text-zinc-600">—</span>
                        Website strategy and UX design
                      </li>
<li className="flex items-start gap-3">
<span className="text-zinc-600">—</span>
                        Custom web design
                      </li>
<li className="flex items-start gap-3">
<span className="text-zinc-600">—</span>
                        Responsive development
                      </li>
</ul>
<div className="mt-24">
<div className="text-4xl lg:text-5xl font-normal tracking-tight">
                        $9.99
                      </div>
</div>
</div>

<div className="flex flex-col h-full">
<div className="mb-10">
<span className="block text-zinc-500 text-sm mb-2">
                        Timeline
                      </span>
<div className="text-white">12-18 weeks</div>
</div>
<div className="mb-12">
<span className="block text-zinc-500 text-sm mb-2">Team</span>
<div className="text-white leading-relaxed text-sm">
                        Strategist, 2 Designers, 2 Developers, Project Manager
                      </div>
</div>
<div className="mt-auto pt-6">
<button className="w-full py-4 px-6 bg-zinc-900 border border-white/10 text-white text-sm hover:bg-zinc-800 transition-colors">
                        Start Your Project
                      </button>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col p-8 md:p-12 h-full">
<div className="mb-16">
<h2 className="text-3xl font-normal mb-6">Annual Pro</h2>
<p className="text-zinc-400 leading-relaxed max-w-lg">
                  Maximum savings for the dedicated gamer. Includes priority
                  routing and beta features.
                </p>
</div>
<div className="border-t border-white/10 pt-12 mt-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="">
<span className="block text-zinc-500 text-sm mb-6">
                      Include
                    </span>
<ul className="space-y-4 text-sm text-zinc-300">
<li className="flex items-start gap-3">
<span className="text-zinc-600">—</span>
                        Priority Node Access
                      </li>
<li className="flex items-start gap-3">
<span className="text-zinc-600">—</span>
                        Early Access Features
                      </li>
<li className="flex items-start gap-3">
<span className="text-zinc-600">—</span>
                        Multi-Device Support
                      </li>
</ul>
<div className="mt-24">
<div className="text-4xl lg:text-5xl font-normal tracking-tight">
                        $89.99
                      </div>
</div>
</div>

<div className="flex flex-col h-full">
<div className="mb-10">
<span className="block text-zinc-500 text-sm mb-2">
                        Timeline
                      </span>
<div className="text-white">16-24 weeks</div>
</div>
<div className="mb-12">
<span className="block text-zinc-500 text-sm mb-2">Team</span>
<div className="text-white leading-relaxed text-sm">
                        Product Strategist, UX Researcher, 2 Designers, 2-3
                        Developers
                      </div>
</div>
<div className="mt-auto pt-6">
<button className="w-full py-4 px-6 bg-zinc-900 border border-white/10 text-white text-sm hover:bg-zinc-800 transition-colors">
                        Start Your Project
                      </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="bg-black text-white border-t border-white/10 font-sans relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-white/5 blur-[80px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto border-x border-white/10 relative z-10">

<div className="grid grid-cols-1 md:grid-cols-4 border-b border-white/10">

<a className="group flex items-center justify-between p-6 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.03] transition-colors" href="#">
<div className="flex items-center gap-4">
<svg className="text-white" fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
</svg>
<span className="text-sm font-medium text-white">YouTube</span>
</div>
<svg className="text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>

<a className="group flex items-center justify-between p-6 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.03] transition-colors" href="#">
<div className="flex items-center gap-4">
<svg className="text-white" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
</svg>
<span className="text-sm font-medium text-white">Twitter</span>
</div>
<svg className="text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>

<a className="group flex items-center justify-between p-6 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.03] transition-colors" href="#">
<div className="flex items-center gap-4">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
<span className="text-sm font-medium text-white">Instagram</span>
</div>
<svg className="text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>

<a className="group flex items-center justify-between p-6 border-b md:border-b-0 hover:bg-white/[0.03] transition-colors" href="#">
<div className="flex items-center gap-4">
<svg className="text-white" fill="currentColor" height="18" stroke="none" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
<span className="text-sm font-medium text-white">Facebook</span>
</div>
<svg className="text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 min-h-[300px]">

<div className="p-8 md:p-12 border-r border-white/10 border-b md:border-b-0">
<h4 className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-8">
              Product
            </h4>
<ul className="space-y-4">
<li className="">
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Technology
                </a>
</li>
<li className="">
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Integrations
                </a>
</li>
<li className="">
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Releases
                </a>
</li>
</ul>
</div>

<div className="p-8 md:p-12 border-r border-white/10 border-b md:border-b-0">
<h4 className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-8">
              Resources
            </h4>
<ul className="space-y-4">
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Docs
                </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  API Reference
                </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Tutorials
                </a>
</li>
</ul>
</div>

<div className="p-8 md:p-12 border-r border-white/10 border-b md:border-b-0">
<h4 className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-8">
              Company
            </h4>
<ul className="space-y-4">
<li className="">
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Team
                </a>
</li>
<li className="">
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Culture
                </a>
</li>
<li className="">
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Jobs
                </a>
</li>
</ul>
</div>

<div className="p-8 md:p-12">
<h4 className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-8">
              Legal
            </h4>
<ul className="space-y-4">
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Imprint
                </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Data Policy
                </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors block" href="#">
                  Cookie Policy
                </a>
</li>
</ul>
</div>
</div>

<div className="px-8 md:px-12 pb-24 pt-20 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
<div className="max-w-md">
<div className="flex items-center gap-3 mb-6">

<span className="text-3xl font-semibold tracking-tighter text-white">
                FINEX.
              </span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xs font-medium">
              Optimizing the internet for the next generation of competitive
              gaming.
            </p>
</div>
<div className="w-full lg:w-auto flex flex-col md:flex-row gap-0">
<div className="relative w-full md:w-80 group">
<input className="bg-white text-black text-xs font-mono font-medium placeholder:text-black/50 px-5 py-4 w-full h-full outline-none uppercase transition-colors rounded-none" placeholder="GAMER@EMAIL.COM" type="email"/>
</div>
<button className="bg-zinc-900 text-white text-[11px] tracking-wide font-semibold px-8 py-4 border border-zinc-800 hover:bg-zinc-800 transition-colors uppercase whitespace-nowrap">
              Subscribe
            </button>
</div>
</div>
</div>
</footer>



    </>
  );
}
