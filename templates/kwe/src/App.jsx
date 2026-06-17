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
        


        document.addEventListener("DOMContentLoaded", function () {
          const toggle = document.getElementById("mobile-menu-toggle");
          const menu = document.getElementById("mobile-menu");
          const openIcon = toggle.querySelector('[data-menu-icon="open"]');
          const closeIcon = toggle.querySelector('[data-menu-icon="close"]');

          toggle.addEventListener("click", function () {
            const isOpen = !menu.classList.contains("hidden");
            menu.classList.toggle("hidden", isOpen);
            openIcon.classList.toggle("hidden", !isOpen);
            closeIcon.classList.toggle("hidden", isOpen);
          });
        });
      


                  (function (card) {
                        if (!card || !window.Chart) return;
                        const el = card.querySelector('canvas[data-canvas="rev"]');
                        if (!el) return;
                        const ctx = el.getContext('2d');
                        const color = 'rgba(255,115,80,1)';
                        const g = ctx.createLinearGradient(0, 0, 0, 140);
                        g.addColorStop(0, 'rgba(255,115,80,0.35)');
                        g.addColorStop(1, 'rgba(255,115,80,0)');
                        new Chart(ctx, {
                          type: 'line',
                          data: {
                            labels: Array.from({ length: 24 }, (_, i) => i + 1),
                            datasets: [{
                              data: [5,8,7,10,12,15,18,22,24,26,29,32,35,39,42,45,48,51,55,60,64,68,72,78],
                              borderColor: color,
                              backgroundColor: g,
                              tension: 0.35,
                              borderWidth: 2,
                              pointRadius: 0,
                              fill: true
                            }]
                          },
                          options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: { legend: { display: false }, tooltip: { enabled: true, intersect: false, mode: 'index' } },
                            scales: { x: { display: false }, y: { display: false } }
                          }
                        });
                      })(document.currentScript.closest('[data-card="revenue"]'));
                


                  (function (card) {
                        if (!card || !window.Chart) return;
                        const el = card.querySelector('canvas[data-canvas="growth"]');
                        if (!el) return;
                        const ctx = el.getContext('2d');
                        new Chart(ctx, {
                          type: 'bar',
                          data: {
                            labels: ['Week 1','Week 2','Week 3','Week 4','Week 5','Week 6','Week 7'],
                            datasets: [{
                              data: [6,12,18,26,34,42,48],
                              backgroundColor: 'rgba(244,63,94,1)',
                              borderRadius: 6,
                              maxBarThickness: 18
                            }]
                          },
                          options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: { legend: { display: false }, tooltip: { enabled: true } },
                            scales: { x: { display: false }, y: { display: false } }
                          }
                        });
                      })(document.currentScript.closest('[data-card="growth"]'));
                


        (function(){
          var el = document.getElementById('kwe-year');
          if (el) el.textContent = new Date().getFullYear();
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
      


<div className="aura-background-component top-0 w-full h-screen -z-10 fixed opacity-40" data-alpha-mask="0" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 0%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 0%, transparent)'}}>
<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="100" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 100%, transparent)'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ZPruWnhzwuk5Tf6nc1q0"></div>

</div>
</div>
<div className="bg-center w-full h-screen bg-cover absolute top-0 blur-sm opacity-90" data-alpha-mask="80" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1523287562758-66c7fc58967a?q=80&amp', maskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
<div className="absolute inset-0 opacity-[0.13] bg-cover bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/784379d9-f80b-45ca-bbb6-231400d62f15_3840w.png)]" style={{}}></div>
</div>

<header className="sticky top-0 inset-x-0 z-[9999] backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/5 w-full">
<div className="flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8">

<a className="inline-flex items-center justify-center bg-center w-[160px] h-[44px] border-0 rounded" href="#">
<img alt="Company Logo" className="w-auto h-[32px] object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/87b4aefe-176d-40c9-94c0-6bf13c1d3683_800w.png" style={{transition: 'outline 0.1s ease-in-out'}}/>
</a>

<nav className="hidden lg:flex gap-x-8 items-center">
<a className="text-sm text-neutral-300 hover:text-white transition" href="#">
            About
          </a>
<a className="text-sm text-neutral-300 hover:text-white transition" href="#">
            Credit Repair
          </a>
<a className="text-sm text-neutral-300 hover:text-white transition" href="#">
            Business Funding
          </a>
<a className="text-sm text-neutral-300 hover:text-white transition" href="#">
            AI Solutions
          </a>
<a className="text-sm text-neutral-300 hover:text-white transition" href="#">
            Pricing
          </a>
<a className="text-sm text-neutral-300 hover:text-white transition" href="#">
            FAQ
          </a>
</nav>

<div className="flex items-center gap-3">

<button className="inline-flex transition overflow-hidden group text-sm font-medium rounded-full pt-2 pr-4 pb-2 pl-4 relative gap-x-2 items-center" onmouseout="this.style.borderColor='rgba(255, 255, 255, 0.2)'; this.querySelector('.text-gradient').style.backgroundPosition='0% center'; this.querySelector('.arrow-icon').style.filter='drop-shadow(0 0 0px rgba(255,255,255,0))'; this.querySelector('.arrow-icon').style.transform='translateX(0)';" onmouseover="this.style.borderColor='rgba(255, 255, 255, 0.4)'; this.querySelector('.text-gradient').style.backgroundPosition='200% center'; this.querySelector('.arrow-icon').style.filter='drop-shadow(0 0 8px rgba(255,255,255,0.8))'; this.querySelector('.arrow-icon').style.transform='translateX(2px)';" style={{background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.2)'}}>
<svg className="lucide lucide-arrow-right arrow-icon relative z-10" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{filter: 'drop-shadow(rgba(255, 255, 255, 0) 0px 0px 0px)', transform: 'translateX(0px)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
<span className="text-gradient relative z-10" style={{background: 'linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(252, 165, 165, 0.9) 50%, rgb(255, 255, 255) 100%) 0% center / 200% 100% text', WebkitTextFillColor: 'transparent'}}>
              Book free strategy call
            </span>
</button>

<button aria-controls="mobile-menu" aria-expanded="false" aria-label="Toggle menu" className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/5 transition" id="mobile-menu-toggle">

<svg className="lucide lucide-menu block" data-menu-icon="open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>

<svg className="lucide lucide-x hidden" data-menu-icon="close" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>
</div>

<div className="lg:hidden hidden absolute top-16 left-0 right-0 bg-neutral-950/95 backdrop-blur-xl border-b border-white/10 shadow-2xl animate-slideDown" id="mobile-menu">
<nav className="flex flex-col px-4 py-6 space-y-4">
<a className="text-base text-neutral-300 hover:text-white transition py-2 px-3 rounded-lg hover:bg-white/5" href="#">
            About
          </a>
<a className="text-base text-neutral-300 hover:text-white transition py-2 px-3 rounded-lg hover:bg-white/5" href="#">
            Credit Repair
          </a>
<a className="text-base text-neutral-300 hover:text-white transition py-2 px-3 rounded-lg hover:bg-white/5" href="#">
            Business Funding
          </a>
<a className="text-base text-neutral-300 hover:text-white transition py-2 px-3 rounded-lg hover:bg-white/5" href="#">
            AI Solutions
          </a>
<a className="text-base text-neutral-300 hover:text-white transition py-2 px-3 rounded-lg hover:bg-white/5" href="#">
            Pricing
          </a>
<a className="text-base text-neutral-300 hover:text-white transition py-2 px-3 rounded-lg hover:bg-white/5" href="#">
            FAQ
          </a>
</nav>
</div>
<style>
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      </style>

</header>

<section className="pb-12 relative scale-100">
<div className="sm:px-6 lg:px-8 sm:pt-24 in-view max-w-3xl mr-auto ml-auto pt-16 pr-4 pl-4" data-scroll-animate-children="">
<div className="flex sm:gap-3 bg-white/5 w-max rounded-full mr-auto ml-auto pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center justify-center in-view" data-scroll-animate="fade-up" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}}>
<img alt="KWE Logo" className="h-6 w-auto object-contain mr-2 hidden sm:inline-block" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/87b4aefe-176d-40c9-94c0-6bf13c1d3683_800w.png" style={{transition: 'outline 0.1s ease-in-out'}}/>
<span className="inline-flex -space-x-2 pr-2">
<img alt="Client 1" className="w-6 h-6 object-cover rounded-full ring-2 ring-neutral-900" src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&amp;w=200&amp;auto=format&amp;fit=crop" style={{}}/>
<img alt="Client 2" className="h-6 w-6 rounded-full ring-2 object-cover ring-neutral-900" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
<img alt="Client 3" className="w-6 h-6 object-cover ring-neutral-900 ring-2 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&amp;w=200&amp;auto=format&amp;fit=crop" style={{}}/>
<img alt="Client 4" className="w-6 h-6 object-cover rounded-full ring-neutral-900/95 ring-2" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=200&amp;auto=format&amp;fit=crop" style={{}}/>
</span>
<svg aria-hidden="true" className="iconify text-[18px] iconify--solar text-emerald-400" data-icon="solar:shield-check-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M3.378 5.082C3 5.62 3 7.22 3 10.417v1.574c0 5.638 4.239 8.375 6.899 9.536c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473C16.761 20.365 21 17.63 21 11.991v-1.574c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2s-1.595.268-3.162.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082M15.06 10.5a.75.75 0 0 0-1.12-.999l-3.011 3.374l-.87-.974a.75.75 0 0 0-1.118 1l1.428 1.6a.75.75 0 0 0 1.119 0z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
<span className="text-sm text-neutral-300">
            Trusted by 10,000+ entrepreneurs &amp; small business owners
          </span>
</div>
<h1 className="sm:text-6xl md:text-7xl in-view text-4xl font-semibold tracking-tight text-center mt-2 mb-2" data-scroll-animate="blur-up" style={{opacity: '1', transform: 'translateY(0px)', maskImage: 'linear-gradient(120deg, transparent, black 35%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(120deg, transparent, black 35%, black 80%, transparent)'}}>
          Turn your credit into capital with AI‑powered business growth
        </h1>
<p className="sm:text-lg text-base text-neutral-300 text-center mt-5 in-view" data-scroll-animate="fade-up" style={{maskImage: 'linear-gradient(90deg, transparent, black 0%, black 100%, transparent)', opacity: '1', transform: 'translateY(0px)'}}>
          KWE Kimble Wealth Enterprises helps you repair your credit, secure
          high‑limit business funding, and automate your operations with AI so
          you can scale faster—with less stress and more control.
        </p>
<div className="flex flex-col sm:flex-row gap-3 mt-8 gap-x-3 gap-y-3 items-center justify-center in-view" data-scroll-animate="fade-up" style={{opacity: '1', transform: 'translateY(0px)'}}>

<button className="inline-flex transition overflow-hidden group text-sm font-medium text-white rounded-full pt-3 pr-5 pb-3 pl-5 relative gap-x-2 gap-y-1 items-center" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.5)';" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 12px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.6), 0 0 0 2px rgba(244,63,94,0.3)';" style={{background: 'linear-gradient(135deg, rgb(26, 26, 26) 0%, rgb(10, 10, 10) 100%)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 8px 32px, rgba(255, 255, 255, 0.1) 0px 1px 0px inset, rgba(0, 0, 0, 0.5) 0px -1px 0px inset', transform: 'translateY(0px)'}}>
<div className="loader" style={{position: 'absolute', top: '0', left: '0', height: '100%', width: '100%', zIndex: '1', backgroundColor: 'transparent', mask: 'repeating-linear-gradient(90deg, transparent 0, transparent 6px, black 7px, black 8px)', WebkitMask: 'repeating-linear-gradient(90deg, transparent 0, transparent 6px, black 7px, black 8px)'}}>
<div style={{content: '\'\'', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundImage: 'radial-gradient(circle at 50% 50%, #f43f5e 0%, transparent 50%), radial-gradient(circle at 45% 45%, #ef4444 0%, transparent 45%), radial-gradient(circle at 55% 55%, #fb7185 0%, transparent 45%), radial-gradient(circle at 45% 55%, #f87171 0%, transparent 45%), radial-gradient(circle at 55% 45%, #dc2626 0%, transparent 45%)', mask: 'radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, black 25%)', WebkitMask: 'radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, black 25%)', animation: 'transform-animation 2s infinite alternate, opacity-animation 4s infinite', animationTimingFunction: 'cubic-bezier(0.6, 0.8, 0.5, 1)', filter: 'drop-shadow(0 0 8px rgba(244, 63, 94, 0.6))'}}></div>
</div>
<span className="" style={{position: 'relative', zIndex: '2', fontFamily: '\'Inter\', sans-serif', fontSize: '1em', fontWeight: '600', userSelect: 'none', color: '#fff', display: 'flex', gap: '0.5rem'}}>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.1s'}}>
                A
              </span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.205s'}}>
                p
              </span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.31s'}}>
                p
              </span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.415s'}}>
                l
              </span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.521s'}}>
                y
              </span>
<span style={{display: 'inline-block', width: '0.3rem'}}></span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.626s'}}>
                f
              </span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.731s'}}>
                o
              </span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.837s'}}>
                r
              </span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.942s'}}>
                $
              </span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '1.047s'}}>
                5
              </span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '1.15s'}}>
                0
              </span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '1.25s'}}>
                k
              </span>
</span>
<style>
              @keyframes transform-animation {
                0% { transform: translate(-55%); }
                100% { transform: translate(55%); }
              }
              @keyframes opacity-animation {
                0%, 100% { opacity: 0; }
                15% { opacity: 1; }
                65% { opacity: 0; }
              }
              @keyframes loader-letter-anim {
                0% { opacity: 0; }
                5% {
                  opacity: 1;
                  text-shadow: 0 0 8px #f43f5e, 0 0 12px #f43f5e;
                  transform: scale(1.1) translateY(-2px);
                }
                20% { opacity: 0.2; }
                100% { opacity: 0; }
              }
            </style>
</button>

<button className="inline-flex transition overflow-hidden group text-sm text-white/90 rounded-full pt-3 pr-10 pb-3 pl-10 relative gap-x-2 gap-y-2 items-center" onmousemove="const rect = this.getBoundingClientRect(); const x = event.clientX - rect.left; const y = event.clientY - rect.top; const centerX = rect.width / 2; const centerY = rect.height / 2; const rotateX = ((y - centerY) / centerY) * -15; const rotateY = ((x - centerX) / centerX) * 15; this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(25px)`; this.style.setProperty('--x', ((x / rect.width) * 100) + '%'); this.style.setProperty('--y', ((y / rect.height) * 100) + '%');" onmouseout="this.style.transform='perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(15px)'; this.style.boxShadow='0 8px 32px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.1) inset'; this.querySelector('.inner-layer-1').style.opacity='0.6'; this.querySelector('.inner-layer-2').style.opacity='0.4'; this.querySelector('.light-sweep').style.transform='translate(-150%, 150%) rotate(45deg)'; this.querySelector('.depth-shadow').style.opacity='0.5';" onmouseover="this.style.transform='perspective(1000px) rotateX(-10deg) rotateY(8deg) translateZ(25px)'; this.style.boxShadow='0 20px 60px rgba(0,0,0,0.4), inset 0 3px 6px rgba(255,255,255,0.5), inset 0 -3px 6px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.2) inset, 0 0 60px rgba(244,63,94,0.4)'; this.querySelector('.inner-layer-1').style.opacity='1'; this.querySelector('.inner-layer-2').style.opacity='0.8'; this.querySelector('.light-sweep').style.transform='translate(150%, -150%) rotate(45deg)'; this.querySelector('.depth-shadow').style.opacity='1';" style={{'--x': '29.496289644354317%', '--y': '59.32749000613724%', background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%)', border: '1px solid rgba(255, 255, 255, 0.3)', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 8px 32px, rgba(255, 255, 255, 0.4) 0px 2px 4px inset, rgba(0, 0, 0, 0.2) 0px -2px 4px inset, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset', backdropFilter: 'blur(20px)', transformStyle: 'preserve-3d', transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(15px)'}}>
<div className="absolute inset-0 rounded-full" style={{background: 'linear-gradient(135deg rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.05) 100%)', pointerEvents: 'none', zIndex: '1'}}></div>
<div className="inner-layer-1 absolute inset-0 rounded-full" style={{background: 'radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 40%, transparent 70%)', opacity: '0.6', pointerEvents: 'none', zIndex: '2'}}></div>
<div className="inner-layer-2 absolute inset-0 rounded-full" style={{background: 'radial-gradient(ellipse at var(--x) var(--y), rgba(244, 63, 94, 0.4) 0%, rgba(251, 113, 133, 0.2) 30%, transparent 60%)', opacity: '0.4', pointerEvents: 'none', filter: 'blur(8px)', zIndex: '3'}}></div>
<div className="light-sweep absolute inset-0 rounded-full" style={{background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)', transform: 'translate(-150%, 150%) rotate(45deg)', pointerEvents: 'none', filter: 'blur(6px)', width: '200%', height: '200%', top: '-50%', left: '-50%', zIndex: '4'}}></div>
<div className="absolute inset-0 rounded-full" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.3) 100%)', pointerEvents: 'none', zIndex: '5'}}></div>
<div className="absolute top-1/4 left-1/4 right-1/4 h-px rounded-full" style={{background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)', pointerEvents: 'none', filter: 'blur(1px)', zIndex: '6'}}></div>
<div className="depth-shadow absolute inset-0 rounded-full" style={{boxShadow: 'rgba(0, 0, 0, 0.3) 0px -4px 8px inset, rgba(255, 255, 255, 0.3) 0px 4px 8px inset', opacity: '0.5', pointerEvents: 'none', zIndex: '7'}}></div>
<span aria-hidden="true" className="iconify text-[18px] relative z-10" data-icon="solar:video-play-bold" style={{textShadow: '0 1px 3px rgba(0,0,0,0.4), 0 0 8px rgba(255,255,255,0.3)', filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.5))'}}></span>
<span className="z-10 relative" style={{textShadow: '0 1px 3px rgba(0, 0, 0, 0.4), 0 0 8px rgba(255,255,255,0.2)'}}>
              Watch client success walkthrough
            </span>
<div className="absolute -inset-2 rounded-full" style={{background: 'radial-gradient(circle, rgba(244, 63, 94, 0.4) 0%, rgba(251, 113, 133, 0.2) 40%, transparent 70%)', opacity: '0', filter: 'blur(20px)', pointerEvents: 'none', zIndex: '-1'}}></div>
</button>
</div>
</div>

<div className="sm:px-6 lg:px-8 sm:mt-16 max-w-6xl mt-12 mr-auto ml-auto pr-4 pl-4">
<div className="rounded-2xl shadow-2xl backdrop-blur bg-neutral-900/60 in-view" data-scroll-animate="blur-up" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(251, 113, 133, 0), rgba(255, 133, 133, 0.6), rgba(225, 29, 72, 0))', '--border-radius-before': '16px'}}>

<div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-fuchsia-500 to-rose-500 ring-1 ring-white/15">
<svg className="lucide lucide-sparkles w-[18px] h-[18px]" data-lucide="sparkles" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v4"></path>
<path d="M10 5h4"></path>
<path d="m5 3-2 4"></path>
<path d="m3 3 4 2"></path>
<path d="m19 3-2 4"></path>
<path d="m17 3 4 2"></path>
<path d="M12 17v4"></path>
<path d="M10 19h4"></path>
<path d="m5 21-2-4"></path>
<path d="m3 21 4-2"></path>
<path d="m19 21-2-4"></path>
<path d="m17 21 4-2"></path>
</svg>
</span>
<span className="font-medium">KWE Wealth Console</span>
<span className="ml-2 hidden sm:inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ring-1 bg-emerald-400/10 text-emerald-300 ring-emerald-400/30">
<svg className="lucide lucide-radical lucide-activity w-[14px] h-[14px]" data-lucide="radical" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(110, 231, 183)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21"></path>
</svg>
                Live overview
              </span>
</div>
<div className="hidden md:flex items-center gap-3">
<div className="relative">
<svg className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px]" data-lucide="search" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(163, 163, 163)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
<input className="w-64 rounded-lg pl-9 pr-3 py-2 text-sm placeholder:text-neutral-400 border focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/5 border-white/10" placeholder="Search clients, funding, automations"/>
</div>
<button aria-label="Notifications" className="p-2 rounded-lg transition hover:bg-white/5">
<svg className="lucide lucide-bell" data-lucide="bell" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(212, 212, 212)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
<path d="M10.3 a1.94 1.94 0 0 0 3.4 0"></path>
</svg>
</button>
<img alt="KWE Advisor" className="h-8 w-8 rounded-full object-cover ring-2 ring-white/10" src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&amp;w=200&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:p-6 pt-4 pr-4 pb-4 pl-4 gap-x-4 gap-y-4">

<aside className="lg:col-span-1 relative" style={{'--main-color': '#f43f5e', '--main-color-opacity': 'rgba(244, 63, 94, 0.11)', '--total-radio': '4'}}>
<style>
                .radio-nav-container {
                  display: flex;
                  flex-direction: column;
                  position: relative;
                  padding-left: 0.5rem;
                }

                .radio-nav-container input {
                  cursor: pointer;
                  appearance: none;
                  position: absolute;
                  opacity: 0;
                  pointer-events: none;
                }

                .radio-nav-container .glider-container {
                  position: absolute;
                  left: 0;
                  top: 0;
                  bottom: 0;
                  background: linear-gradient(0deg,
                      rgba(0, 0, 0, 0) 0%,
                      rgba(27, 27, 27, 1) 50%,
                      rgba(0, 0, 0, 0) 100%);
                  width: 1px;
                  pointer-events: none;
                }

                .radio-nav-container .glider-container .glider {
                  position: relative;
                  height: calc(100% / var(--total-radio));
                  width: 100%;
                  background: linear-gradient(0deg,
                      rgba(0, 0, 0, 0) 0%,
                      var(--main-color) 50%,
                      rgba(0, 0, 0, 0) 100%);
                  transition: transform 0.5s cubic-bezier(0.37, 1.95, 0.66, 0.56);
                }

                .radio-nav-container .glider-container .glider::before {
                  content: "";
                  position: absolute;
                  height: 60%;
                  width: 300%;
                  top: 50%;
                  transform: translateY(-50%);
                  background: var(--main-color);
                  filter: blur(10px);
                }

                .radio-nav-container .glider-container .glider::after {
                  content: "";
                  position: absolute;
                  left: 0;
                  height: 100%;
                  width: 150px;
                  background: linear-gradient(90deg,
                      var(--main-color-opacity) 0%,
                      rgba(0, 0, 0, 0) 100%);
                }

                .radio-nav-container label {
                  cursor: pointer;
                  padding: 0.75rem;
                  position: relative;
                  color: rgb(163, 163, 163);
                  transition: all 0.3s ease-in-out;
                  border-radius: 0.75rem;
                  border: 1px solid transparent;
                  display: flex;
                  align-items: center;
                  gap: 0.5rem;
                }

                .radio-nav-container input:checked+label {
                  color: var(--main-color);
                  background: rgba(255, 255, 255, 0.05);
                  border-color: rgba(255, 255, 255, 0.1);
                }

                .radio-nav-container input:nth-of-type(1):checked~.glider-container .glider {
                  transform: translateY(0);
                }

                .radio-nav-container input:nth-of-type(2):checked~.glider-container .glider {
                  transform: translateY(100%);
                }

                .radio-nav-container input:nth-of-type(3):checked~.glider-container .glider {
                  transform: translateY(200%);
                }

                .radio-nav-container input:nth-of-type(4):checked~.glider-container .glider {
                  transform: translateY(300%);
                }
              </style>
<div className="radio-nav-container">
<input checked="" id="nav-home" name="nav-menu" type="radio"/>
<label className="text-sm" htmlFor="nav-home">
<svg className="w-[18px] h-[18px]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
<path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
</svg>
                  Overview
                </label>
<input id="nav-dashboard" name="nav-menu" type="radio"/>
<label className="text-sm" htmlFor="nav-dashboard">
<svg className="w-[18px] h-[18px]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
<rect height="12" rx="1" width="4" x="15" y="5"></rect>
<rect height="9" rx="1" width="4" x="7" y="8"></rect>
</svg>
                  Credit Dashboard
                </label>
<input id="nav-calendar" name="nav-menu" type="radio"/>
<label className="text-sm" htmlFor="nav-calendar">
<svg className="w-[18px] h-[18px]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
<path d="M8 14h.01"></path>
<path d="M12 14h.01"></path>
<path d="M16 14h.01"></path>
<path d="M8 18h.01"></path>
<path d="M12 18h.01"></path>
<path d="M16 18h.01"></path>
</svg>
                  Funding Timeline
                </label>
<input id="nav-projects" name="nav-menu" type="radio"/>
<label className="text-sm" htmlFor="nav-projects">
<svg className="w-[18px] h-[18px]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></path>
<path d="M8 10h8"></path>
<path d="M8 18h8"></path>
<path d="M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6"></path>
<path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path>
</svg>
                  AI Workflows
                </label>
<div className="glider-container">
<div className="glider"></div>
</div>
</div>
</aside>

<div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="sm:p-5 bg-white/5 border-white/10 border rounded-xl pt-4 pr-4 pb-4 pl-4" data-card="revenue">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-activity w-[20px] h-[20px]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(52, 211, 153)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
</svg>
<h3 className="text-sm font-medium">Total Funding Approved</h3>
</div>
<span className="text-xs ring-1 px-2 py-0.5 rounded-full text-emerald-300 bg-emerald-400/10 ring-emerald-400/30">
                    ↑ 80%
                  </span>
</div>
<div className="flex gap-2 mt-3 gap-x-2 gap-y-2 items-baseline">
<span className="text-2xl sm:text-3xl font-semibold tracking-tight">
                    $657,744
                  </span>
<span className="text-xs text-neutral-400">last 90 days</span>
</div>
<div className="mt-4">
<div className="h-28 rounded-lg border p-2 bg-neutral-900/70 border-white/10 relative overflow-hidden" style={{background: 'linear-gradient(135deg, rgba(244,63,94,0.08) 0%, rgba(251,113,133,0.05) 100%)'}}>
<div className="h-full">
<canvas aria-label="Funding chart" className="" data-canvas="rev" height="104" style={{display: 'block', boxSizing: 'border-box', height: '94px', width: '320px'}} width="355"></canvas>
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{mixBlendMode: 'screen', opacity: '0.45'}}>
<div className="warp-loader">
<div className="ring"></div>
<div className="ring"></div>
<div className="ring"></div>
<div className="ring"></div>
<div className="core-glow"></div>
</div>
</div>
<style>
                      .warp-loader {
                        position: relative;
                        width: 160px;
                        height: 160px;
                      }

                      .ring {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        transform: translate(-50%, -50%);
                        background: radial-gradient(circle,
                            rgba(244, 63, 94, 0.15) 30%,
                            transparent 70%);
                        animation: pulse 2.2s ease-out infinite;
                        opacity: 0;
                        box-shadow:
                          0 0 12px rgba(244, 63, 94, 0.4),
                          0 0 24px rgba(244, 63, 94, 0.2);
                        border: 2px solid rgba(244, 63, 94, 0.2);
                      }

                      .ring:nth-child(1) {
                        animation-delay: 0s;
                      }

                      .ring:nth-child(2) {
                        animation-delay: 0.4s;
                      }

                      .ring:nth-child(3) {
                        animation-delay: 0.8s;
                      }

                      .ring:nth-child(4) {
                        animation-delay: 1.2s;
                      }

                      @keyframes pulse {
                        0% {
                          transform: translate(-50%, -50%) scale(0.3);
                          opacity: 1;
                        }

                        70% {
                          transform: translate(-50%, -50%) scale(1.1);
                          opacity: 0.15;
                        }

                        100% {
                          transform: translate(-50%, -50%) scale(1.4);
                          opacity: 0;
                        }
                      }

                      .core-glow {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        width: 24px;
                        height: 24px;
                        transform: translate(-50%, -50%);
                        border-radius: 50%;
                        background: radial-gradient(circle at center, #f43f5e, #dc2626);
                        box-shadow:
                          0 0 25px #f43f5e,
                          0 0 60px rgba(244, 63, 94, 0.5),
                          0 0 100px rgba(244, 63, 94, 0.2);
                        animation: corePulse 1.6s ease-in-out infinite;
                      }

                      @keyframes corePulse {

                        0%,
                        100% {
                          transform: translate(-50%, -50%) scale(1);
                        }

                        50% {
                          transform: translate(-50%, -50%) scale(1.2);
                        }
                      }
                    </style>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3 text-sm">
<div className="rounded-lg border p-3 bg-white/5 border-white/10">
<div className="text-xs text-neutral-400">Average limit</div>
<div className="font-medium mt-1">$42,100</div>
</div>
<div className="rounded-lg border p-3 bg-white/5 border-white/10">
<div className="text-xs text-neutral-400">Approvals</div>
<div className="font-medium mt-1">96 clients</div>
</div>
<div className="rounded-lg border p-3 bg-white/5 border-white/10">
<div className="text-xs text-neutral-400">
                      AI‑ready businesses
                    </div>
<div className="font-medium mt-1">74%</div>
</div>
</div>

</div>

<div className="rounded-xl border p-4 sm:p-5 border-white/10 bg-white/5" data-card="growth">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-chart-no-axes-column lucide-trending-up w-[20px] h-[20px]" data-lucide="chart-no-axes-column" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(56, 189, 248)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="18" y1="20" y2="10"></line>
<line x1="12" x2="12" y1="20" y2="4"></line>
<line x1="6" x2="6" y1="20" y2="14"></line>
</svg>
<h3 className="text-sm font-medium">
                      Average Credit Score Lift
                    </h3>
</div>
<span className="text-xs ring-1 px-2 py-0.5 rounded-full text-sky-300 bg-sky-400/10 ring-sky-400/30">
                    ↑ 78 pts
                  </span>
</div>
<div className="mt-3 grid grid-cols-2 gap-3">
<div className="rounded-lg border p-3 bg-white/5 border-white/10">
<div className="text-xs text-neutral-400">90‑day progress</div>
<div className="font-medium mt-1">612 → 690</div>
</div>
<div className="rounded-lg border p-3 bg-white/5 border-white/10">
<div className="text-xs text-neutral-400">
                      Clients in program
                    </div>
<div className="font-medium mt-1">8,214</div>
</div>
</div>
<div className="mt-4">
<div className="h-28 rounded-lg border p-2 bg-neutral-900/70 border-white/10">
<div className="h-full">
<canvas className="" data-canvas="growth" height="104" style={{display: 'block', boxSizing: 'border-box', height: '94px', width: '320px'}} width="355"></canvas>
</div>
</div>
</div>
<div className="mt-4 flex items-center gap-2 text-sm text-neutral-300">
<svg className="lucide lucide-badge lucide-target w-[18px] h-[18px]" data-lucide="badge" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(52, 211, 153)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
</svg>
                  Projected 6‑month score:
                  <span className="font-medium text-white">712+</span>
</div>

</div>

<div className="md:col-span-2 rounded-xl border p-4 sm:p-5 border-white/10 bg-white/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-alarm-clock-check lucide-clock w-[20px] h-[20px]" data-lucide="alarm-clock-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(167, 139, 250)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="13" r="8"></circle>
<path d="M5 3 2 6"></path>
<path d="m22 6-3-3"></path>
<path d="M6.38 18.7 4 21"></path>
<path d="M17.64 18.67 20 21"></path>
<path d="m9 13 2 2 4-4"></path>
</svg>
<h3 className="text-sm font-medium">Today’s Wealth Moves</h3>
</div>
<button className="text-xs rounded-lg border px-2.5 py-1 transition border-white/10 bg-white/5 hover:bg-white/10">
                    View full schedule
                  </button>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="rounded-lg border p-3 bg-neutral-900/70 border-white/10">
<div className="text-xs text-neutral-400">9:00 AM</div>
<div className="mt-1 font-medium">Credit strategy call</div>
<div className="mt-1 text-xs flex items-center gap-1 text-neutral-400">
<svg className="lucide lucide-users" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-44v2"></path>
<circle cx="12" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M6 17.13A4 4 0 0 0 3 19v2"></path>
</svg>
                      6 clients
                    </div>
</div>
<div className="rounded-lg border p-3 bg-neutral-900/70 border-white/10">
<div className="text-xs text-neutral-400">11:30 AM</div>
<div className="mt-1 font-medium">
                      Funding applications batch
                    </div>
<div className="mt-1 text-xs flex items-center gap-1 text-neutral-400">
<svg className="lucide lucide-flask-conical" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2v8"></path>
<path d="M8.5 2h3"></path>
<path d="M5 22h14"></path>
<path d="M19 10H5"></path>
<path d="M6 20l-1-4l6-6l6 6l-1 4"></path>
</svg>
                      24 lenders targeted
                    </div>
</div>
<div className="rounded-lg border p-3 bg-neutral-900/70 border-white/10">
<div className="text-xs text-neutral-400">2:15 PM</div>
<div className="mt-1 font-medium">AI workflow optimization</div>
<div className="mt-1 text-xs flex items-center gap-1 text-neutral-400">
<svg className="lucide lucide-file-text" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H6a2 2 0 0 0-2 2v16l4-4h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></path>
<path d="M8 7h8"></path>
<path d="M8 11h8"></path>
</svg>
                      3 automations launched
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<div className="pointer-events-none w-full h-px bg-white/10"></div>

<section className="sm:py-24 pt-16 pb-16 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12" data-scroll-animate-children="">
<span className="text-sm font-medium text-rose-400 text-center">
            Features
          </span>
<h2 className="sm:text-4xl md:text-5xl text-3xl font-semibold tracking-tight text-center mt-2">
            One platform for credit, capital &amp;growth
          </h2>
<p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-neutral-300">
            Whether you’re rebuilding personal credit, stacking business
            funding, or automating operations with AI, KWE gives you one clear
            path and one expert team.
          </p>
</div>
<div className="grid gap-6 md:grid-cols-3">

<div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-400/30">
<svg aria-hidden="true" className="iconify text-lg iconify--solar" data-icon="solar:shield-check-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M3.378 5.082C3 5.62 3 7.22 3 10.417v1.574c0 5.638 4.239 8.375 6.899 9.536c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473C16.761 20.365 21 17.63 21 11.991v-1.574c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2s-1.595.268-3.162.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082M15.06 10.5a.75.75 0 0 0-1.12-.999l-3.011 3.374l-.87-.974a.75.75 0 0 0-1.118 1l1.428 1.6a.75.75 0 0 0 1.119 0z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</span>
<div className="">
<h3 className="text-base font-semibold">Credit Repair System</h3>
<p className="text-xs text-neutral-400 mt-0.5">
                    Disputes, deletions &amp; score strategy
                  </p>
</div>
</div>
<span className="text-[11px] px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/30">
                Avg +78 pts
              </span>
</div>
<ul className="space-y-2 text-sm text-neutral-300 flex-1">
<li className="flex gap-2">
<span className="mt-[3px] text-emerald-400">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 4.5 4.5L19 7"></path>
</svg>
</span>
                3‑bureau credit audit with custom game plan.
              </li>
<li className="flex gap-2">
<span className="mt-[3px] text-emerald-400">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 4.5 4.5L19 7"></path>
</svg>
</span>
                Smart dispute engine to challenge negative items.
              </li>
<li className="flex gap-2">
<span className="mt-[3px] text-emerald-400">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 4.5 4.5L19 7"></path>
</svg>
</span>
                Utilization &amp; mix optimization to hit funding‑ready scores.
              </li>
</ul>
<button className="mt-5 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs sm:text-sm text-neutral-100 hover:bg-white/10 transition">
              Start credit blueprint
              <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>

<div className="relative rounded-2xl border border-rose-500/40 bg-gradient-to-b from-rose-500/10 via-transparent to-transparent p-6 flex flex-col">
<div className="absolute inset-x-0 -top-px mx-6 h-px bg-gradient-to-r from-transparent via-rose-400/70 to-transparent opacity-80"></div>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500/15 text-rose-300 ring-1 ring-rose-400/40">
<svg aria-hidden="true" className="iconify text-lg iconify--solar" data-icon="solar:card-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<defs>
<mask id="IconifyId19a8dcd6d1d1e3e860">
<g fill="none">
<path d="M14 4h-4C6.229 4 4.343 4 3.172 5.172c-.844.843-1.08 2.057-1.146 4.078h19.948c-.066-2.021-.302-3.235-1.146-4.078C19.657 4 17.771 4 14 4m-4 16h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12q0-.662-.002-1.25H2.002Q1.999 11.338 2 12c0 3.771 0 5.657 1.172 6.828S6.229 20 10 20" fill="#fff"></path>
<path clip-rule="evenodd" d="M5.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m6.5 0a.75.75 0 0 1 .75-.75H14a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75" fill="#000" fill-rule="evenodd"></path>
</g>
</mask>
</defs>
<path d="M0 0h24v24H0z" fill="currentColor" mask="url(#IconifyId19a8dcd6d1d1e3e860)"></path>
</svg>
</span>
<div className="">
<h3 className="text-base font-semibold">
                    Business Funding Engine
                  </h3>
<p className="text-xs text-neutral-300 mt-0.5">
                    High‑limit cards, LOCs &amp; lines
                  </p>
</div>
</div>
<span className="text-[11px] px-2 py-1 rounded-full bg-rose-500/10 text-rose-200 ring-1 ring-rose-400/40">
                Up to $250k+
              </span>
</div>
<ul className="space-y-2 text-sm text-neutral-300 flex-1">
<li className="flex gap-2">
<span className="mt-[3px] text-rose-300">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 4.5 4.5L19 7"></path>
</svg>
</span>
                Entity &amp; compliance checks to qualify for top‑tier lenders.
              </li>
<li className="flex gap-2">
<span className="mt-[3px] text-rose-300">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 4.5 4.5L19 7"></path>
</svg>
</span>
                Sequenced funding strategy to stack approvals without overlaps.
              </li>
<li className="flex gap-2">
<span className="mt-[3px] text-rose-300">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 4.5 4.5L19 7"></path>
</svg>
</span>
                1:1 underwriting support &amp; pre‑qualification checks.
              </li>
</ul>
<button className="mt-5 inline-flex items-center justify-center rounded-full bg-rose-500 px-4 py-2 text-xs sm:text-sm font-medium text-white shadow-lg shadow-rose-500/30 hover:bg-rose-400 transition">
              Apply for business funding
              <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>

<div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
<div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/10 text-sky-300 ring-1 ring-sky-400/40">
<svg aria-hidden="true" className="iconify text-lg iconify--solar" data-icon="solar:cpu-bolt-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g clip-rule="evenodd" fill="currentColor" fill-rule="evenodd">
<path d="M9.632 9.022c-.303.04-.398.106-.45.16c-.054.052-.12.147-.16.45c-.044.322-.045.76-.045 1.438v1.86c0 .678.001 1.116.045 1.438c.04.303.106.398.16.45c.052.054.147.12.45.16c.322.044.76.045 1.438.045h1.86c.678 0 1.116-.001 1.438-.045c.303-.04.398-.106.45-.16c.054-.052.12-.147.16-.45c.044-.322.045-.76.045-1.438v-1.86c0-.678-.001-1.116-.045-1.438c-.04-.303-.106-.398-.16-.45c-.052-.054-.147-.12-.45-.16c-.322-.044-.76-.045-1.438-.045h-1.86c-.678 0-1.116.001-1.438.045m3.334 1.523a.698.698 0 0 0-1.135-.81l-1.329 1.86a.698.698 0 0 0 .568 1.103h.505l-.541.757a.698.698 0 0 0 1.135.811l1.329-1.86a.698.698 0 0 0-.568-1.104h-.505z"></path>
<path d="M12.698 2.698a.698.698 0 0 0-1.396 0v2.79q-.764 0-1.395.017V2.698a.698.698 0 0 0-1.395 0v2.79q0 .056.008.108c-.936.115-1.585.353-2.078.846s-.731 1.142-.846 2.078a1 1 0 0 0-.108-.008h-2.79a.698.698 0 0 0 0 1.395h2.807q-.016.63-.016 1.395H2.698a.698.698 0 0 0 0 1.396h2.79q0 .764.017 1.395H2.698a.698.698 0 0 0 0 1.395h2.79a1 1 0 0 0 .108-.008c.115.936.353 1.585.846 2.078s1.142.731 2.078.846a1 1 0 0 0-.008.108v2.79a.698.698 0 0 0 1.395 0v-2.807q.63.016 1.395.016v2.791a.698.698 0 0 0 1.396 0v-2.79q.764 0 1.395-.017v2.807a.698.698 0 0 0 1.395 0v-2.79a1 1 0 0 0-.008-.108c.936-.115 1.585-.353 2.078-.846s.731-1.142.846-2.078q.053.009.108.008h2.79a.698.698 0 0 0 0-1.395h-2.807q.016-.63.016-1.395h2.791a.698.698 0 0 0 0-1.396h-2.79q0-.764-.017-1.395h2.807a.698.698 0 0 0 0-1.395h-2.79a1 1 0 0 0-.108.008c-.115-.936-.353-1.585-.846-2.078s-1.142-.731-2.078-.846a1 1 0 0 0 .008-.108v-2.79a.698.698 0 0 0-1.395 0v2.807a56 56 0 0 0-1.395-.016zm-3.252 4.94c.426-.057.96-.057 1.578-.057h1.952c.619 0 1.151 0 1.578.058c.458.061.896.2 1.252.555c.355.356.494.794.555 1.252c.058.426.058.96.058 1.578v1.952c0 .619 0 1.151-.058 1.578c-.061.458-.2.896-.555 1.252c-.356.355-.794.494-1.252.555c-.427.058-.96.058-1.578.058h-1.952c-.619 0-1.152 0-1.578-.058c-.458-.061-.896-.2-1.252-.555c-.355-.356-.494-.794-.555-1.252c-.058-.427-.058-.96-.058-1.578v-1.952c0-.619 0-1.152.058-1.578c.061-.458.2-.896.555-1.252c.356-.355.794-.494 1.252-.555"></path>
</g>
</svg>
</span>
<div>
<h3 className="text-base font-semibold">
                      AI Business Automations
                    </h3>
<p className="text-xs text-neutral-400 mt-0.5">
                      Systems that work while you sleep
                    </p>
</div>
</div>
<span className="text-[11px] px-2 py-1 rounded-full bg-sky-500/10 text-sky-200 ring-1 ring-sky-400/40">
                  Done‑for‑you setups
                </span>
</div>
<ul className="space-y-2 text-sm text-neutral-300 flex-1">
<li className="flex gap-2">
<span className="mt-[3px] text-sky-300">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 4.5 4.5L19 7"></path>
</svg>
</span>
                  Lead gen funnels, DM responders &amp; intake forms powered by
                  AI.
                </li>
<li className="flex gap-2">
<span className="mt-[3px] text-sky-300">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 4.5 4.5L19 7"></path>
</svg>
</span>
                  Automated onboarding, payment reminders &amp; client updates.
                </li>
<li className="flex gap-2">
<span className="mt-[3px] text-sky-300">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 4.5 4.5L19 7"></path>
</svg>
</span>
                  Dashboard to track replies, bookings &amp; revenue in one
                  place.
                </li>
</ul>
<button className="mt-5 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs sm:text-sm text-neutral-100 hover:bg-white/10 transition">
                Build my AI systems
                <svg className="w-4 h-4 ml-1." fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</section>
<section className="sm:py-20 pt-12 pb-16 border-t border-white/5 bg-gradient-to-b from-neutral-950/0 via-neutral-950 to-neutral-950">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid gap-10 lg:grid-cols-[1.3fr_minmax(0,1fr)] items-center">
<div className="">
<p className="text-xs sm:text-sm font-medium uppercase tracking-[0.18em] text-rose-400">
              Ready to turn credit into capital?
            </p>
<h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Get a custom credit, funding &amp; AI game plan in one call.
            </h2>
<p className="mt-4 text-sm sm:text-base text-neutral-300 max-w-xl">
              On this 30‑minute strategy call, we’ll map out your credit goals,
              funding targets, and where AI can remove the most stress from your
              business — then give you a clear action plan, even if you don’t
              move forward with KWE.
            </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center">
<a className="inline-flex items-center justify-center rounded-full bg-rose-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-rose-500/30 hover:bg-rose-400 transition" href="#">
                Book your free strategy call
                <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<button className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs sm:text-sm text-neutral-100 hover:bg-white/10 transition">
                View client results deck
                <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="m5 12 7-7 7 7"></path>
</svg>
</button>
</div>
<div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-neutral-400">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 4.5 4.5L19 7"></path>
</svg>
</span>
                No hard pull to talk with the team
              </div>
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 4.5 4.5L19 7"></path>
</svg>
</span>
                Personalized roadmap, not a generic pitch
              </div>
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 4.5 4.5L19 7"></path>
</svg>
</span>
                10,000+ entrepreneurs advised
              </div>
</div>
</div>
<div className="lg:ml-6">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 shadow-2xl shadow-black/60">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<img alt="Client success" className="h-10 w-10 rounded-full object-cover ring-2 ring-emerald-400/40" src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium text-white">
                      "KWE helped us unlock $180k in funding and automate half
                      our operations in 90 days."
                    </p>
<p className="mt-1 text-xs text-neutral-400">
                      T. Jackson • Agency Owner
                    </p>
</div>
</div>
</div>
<div className="mt-5 grid grid-cols-2 gap-3 text-xs sm:text-sm">
<div className="rounded-lg border border-white/10 bg-neutral-900/70 p-3">
<p className="text-neutral-400">Average client funding</p>
<p className="mt-1 text-base font-semibold text-white tracking-tight">
                    $80,000+
                  </p>
</div>
<div className="rounded-lg border border-white/10 bg-neutral-900/70 p-3">
<p className="text-neutral-400">Typical timeline</p>
<p className="mt-1 text-base font-semibold text-white tracking-tight">
                    45‑90 days
                  </p>
</div>
</div>
<p className="mt-4 text-[11px] leading-relaxed text-neutral-500">
                Results vary and are not guaranteed. Funding amounts, timelines,
                and outcomes depend on your personal credit profile, business
                history, documentation, and lender guidelines at the time of
                application.
              </p>
</div>
</div>
</div>
</div>
</section>
<footer className="border-t border-white/5 py-8 bg-neutral-950/95">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-xs sm:text-sm text-neutral-400 text-center md:text-left">
<p className="text-neutral-300">
            ©
            <span id="kwe-year">2025</span>
            KWE Kimble Wealth Enterprises. All rights reserved.
          </p>
<p className="mt-1">
            Credit repair, business funding &amp; AI systems for entrepreneurs
            ready to scale responsibly.
          </p>
</div>
<div className="flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400">
<a className="hover:text-neutral-200 transition" href="#">Terms</a>
<a className="hover:text-neutral-200 transition" href="#">Privacy</a>
<a className="hover:text-neutral-200 transition" href="#">
            Earnings Disclaimer
          </a>
</div>
</div>

</footer>
<section className="bg-neutral-950 py-16 border-t border-white/5">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid gap-10 lg:grid-cols-2 items-start">
<div>
<p className="text-xs sm:text-sm font-medium uppercase tracking-[0.18em] text-rose-400">
              Final details before you get started
            </p>
<h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
              What happens after you book your strategy call
            </h2>
<p className="mt-4 text-sm sm:text-base text-neutral-300 max-w-xl">
              Your call isn’t a high-pressure sales pitch. It’s a working
              session where we look at your credit, funding goals, and current
              systems so you know exactly what needs to happen next—with or
              without KWE.
            </p>
<div className="mt-6 grid gap-4 text-xs sm:text-sm text-neutral-300">
<div className="flex items-start gap-3">
<span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 4.5 4.5L19 7"></path>
</svg>
</span>
<div>
<p className="font-medium text-neutral-100">
                    Step 1 — Credit &amp; funding review
                  </p>
<p className="mt-1 text-neutral-400">
                    We look at your current credit profile, existing limits, and
                    funding targets so we’re clear on what’s realistic right
                    now.
                  </p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 4.5 4.5L19 7"></path>
</svg>
</span>
<div>
<p className="font-medium text-neutral-100">
                    Step 2 — Custom game plan
                  </p>
<p className="mt-1 text-neutral-400">
                    You get a clear roadmap for cleaning up credit, sequencing
                    funding, and layering in AI automations over the next 30‑90
                    days.
                  </p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 4.5 4.5L19 7"></path>
</svg>
</span>
<div>
<p className="font-medium text-neutral-100">
                    Step 3 — Decide if we’re a fit
                  </p>
<p className="mt-1 text-neutral-400">
                    If it makes sense, we’ll walk through how our program works.
                    If not, you still leave with a strategy you can execute on
                    your own.
                  </p>
</div>
</div>
</div>
</div>
<div className="lg:pl-8">
<div className="rounded-2xl border border-white/10 bg-neutral-900/80 p-5 sm:p-6 shadow-xl shadow-black/60">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-white">
                Quick answers
              </h3>
<dl className="mt-4 space-y-4 text-xs sm:text-sm text-neutral-300">
<div>
<dt className="font-medium text-neutral-100">
                    How long is the call?
                  </dt>
<dd className="mt-1 text-neutral-400">
                    Most strategy calls run 25‑30 minutes. If we need more time
                    to map things out, we’ll stay on a few extra minutes.
                  </dd>
</div>
<div>
<dt className="font-medium text-neutral-100">
                    Do I need perfect credit?
                  </dt>
<dd className="mt-1 text-neutral-400">
                    No. Many clients start with challenged credit. The point of
                    the call is to understand where you are and what needs to
                    improve to unlock funding.
                  </dd>
</div>
<div>
<dt className="font-medium text-neutral-100">
                    Is there any obligation?
                  </dt>
<dd className="mt-1 text-neutral-400">
                    No. If we don’t think we can help, we’ll tell you. If you’re
                    a fit, we’ll outline options and you decide what feels
                    right.
                  </dd>
</div>
</dl>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-rose-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-rose-500/30 hover:bg-rose-400 transition" href="#">
                Lock in your free strategy call
                <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<p className="mt-3 text-[11px] leading-relaxed text-neutral-500 text-center">
                No hard credit pull for the call. By booking, you agree to be
                contacted by KWE via phone, email, and SMS about your strategy
                session.
              </p>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
