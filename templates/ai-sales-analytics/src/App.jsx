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



/*
Sequence animation on scroll when visible. Requires Animation Keyframe. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll
*/
(function () {
// Inject CSS for paused/running states
const style = document.createElement("style");
style.textContent = `
/* Default: paused */
.animate-on-scroll { animation-play-state: paused !important; }
/* Activated by JS */
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
window.__inViewIO.observe(el); // observing twice is a no-op
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        !(function() {
            if (!window.UnicornStudio) {
                window.UnicornStudio = { isInitialized: false };
                var i = document.createElement("script");
                i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.0-1/dist/unicornStudio.umd.js";
                i.onload = function() {
                    if (document.readyState === "loading") {
                        document.addEventListener("DOMContentLoaded", function() {
                            UnicornStudio.init();
                            window.UnicornStudio.isInitialized = true;
                        });
                    } else {
                        UnicornStudio.init();
                        window.UnicornStudio.isInitialized = true;
                    }
                };
                (document.head || document.body).appendChild(i);
            } else if (!window.UnicornStudio.isInitialized && window.UnicornStudio.init) {
                UnicornStudio.init();
                window.UnicornStudio.isInitialized = true;
            }
        })();
      


            (function() {
                const aside = document.currentScript.parentElement;

                const navItems = aside.querySelectorAll('.nav-item');
                const parentBtn = aside.querySelector('.nav-group-parent');
                const submenu = aside.querySelector('#forecasts-submenu');
                const subNavItems = aside.querySelectorAll('.subnav-item');
                const chevron = parentBtn.querySelector('.chevron');

                const upgradeCard = aside.querySelector('#upgrade-card');
                const closeUpgrade = aside.querySelector('#close-upgrade');
                const upgradeBtn = aside.querySelector('#upgrade-btn');

                function clearActive() {
                    navItems.forEach(el => {
                        el.classList.remove('bg-[#F4F5F7]', 'text-gray-900', 'font-medium');
                        el.classList.add('text-gray-500', 'font-normal');
                        const ind = el.querySelector('.nav-indicator');
                        if(ind) {
                            ind.classList.remove('opacity-100', 'scale-y-100');
                            ind.classList.add('opacity-0', 'scale-y-0');
                        }
                    });

                    parentBtn.classList.remove('bg-[#F4F5F7]', 'text-gray-900', 'font-medium');
                    parentBtn.classList.add('text-gray-500', 'font-normal');
                    const pInd = parentBtn.querySelector('.nav-indicator');
                    if(pInd) {
                        pInd.classList.remove('opacity-100', 'scale-y-100');
                        pInd.classList.add('opacity-0', 'scale-y-0');
                    }

                    subNavItems.forEach(el => {
                        el.classList.remove('text-gray-900', 'font-medium');
                        el.classList.add('text-gray-500', 'font-normal');
                    });
                }

                navItems.forEach(item => {
                    item.addEventListener('click', (e) => {
                        e.preventDefault();
                        clearActive();
                        item.classList.remove('text-gray-500', 'font-normal');
                        item.classList.add('bg-[#F4F5F7]', 'text-gray-900', 'font-medium');
                        const ind = item.querySelector('.nav-indicator');
                        if(ind) {
                            ind.classList.remove('opacity-0', 'scale-y-0');
                            ind.classList.add('opacity-100', 'scale-y-100');
                        }
                    });
                });

                subNavItems.forEach(item => {
                    item.addEventListener('click', (e) => {
                        e.preventDefault();
                        clearActive();
                        item.classList.remove('text-gray-500', 'font-normal');
                        item.classList.add('text-gray-900', 'font-medium');

                        parentBtn.classList.remove('text-gray-500', 'font-normal');
                        parentBtn.classList.add('bg-[#F4F5F7]', 'text-gray-900', 'font-medium');
                        const pInd = parentBtn.querySelector('.nav-indicator');
                        if(pInd) {
                            pInd.classList.remove('opacity-0', 'scale-y-0');
                            pInd.classList.add('opacity-100', 'scale-y-100');
                        }
                    });
                });

                parentBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const isOpen = !submenu.classList.contains('max-h-0');
                    if(isOpen) {
                        submenu.classList.add('max-h-0', 'opacity-0');
                        submenu.classList.remove('max-h-[200px]', 'opacity-100');
                        chevron.style.transform = 'rotate(0deg)';
                    } else {
                        submenu.classList.remove('max-h-0', 'opacity-0');
                        submenu.classList.add('max-h-[200px]', 'opacity-100');
                        chevron.style.transform = 'rotate(180deg)';
                    }
                });

                if (closeUpgrade && upgradeCard) {
                    closeUpgrade.addEventListener('click', () => {
                        upgradeCard.style.opacity = '0';
                        upgradeCard.style.transform = 'scale(0.95)';
                        setTimeout(() => {
                            upgradeCard.style.display = 'none';
                        }, 300);
                    });
                }

                if (upgradeBtn) {
                    upgradeBtn.addEventListener('click', () => {
                        upgradeBtn.innerHTML = '<svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Processing...';
                        setTimeout(() => {
                            upgradeBtn.innerHTML = 'Upgrade now';
                        }, 2000);
                    });
                }
            })();
          


          (function() {
              const btnMonthly = document.getElementById('btn-monthly');
              const btnAnnually = document.getElementById('btn-annually');
              const slider = document.getElementById('toggle-slider');
              const priceStandard = document.getElementById('price-standard');
              const pricePro = document.getElementById('price-pro');
              const billingStandard = document.getElementById('billing-text-standard');
              const billingPro = document.getElementById('billing-text-pro');

              if (btnMonthly && btnAnnually) {
                  btnMonthly.addEventListener('click', () => {
                      slider.style.transform = 'translateX(0)';
                      btnMonthly.classList.remove('text-slate-500');
                      btnMonthly.classList.add('text-slate-900');
                      btnAnnually.classList.remove('text-slate-900');
                      btnAnnually.classList.add('text-slate-500');

                      priceStandard.style.opacity = '0';
                      pricePro.style.opacity = '0';
                      billingStandard.style.opacity = '0';
                      billingPro.style.opacity = '0';

                      setTimeout(() => {
                          priceStandard.textContent = '$10';
                          pricePro.textContent = '$30';
                          billingStandard.textContent = 'Billed monthly';
                          billingPro.textContent = 'Billed monthly';

                          priceStandard.style.opacity = '1';
                          pricePro.style.opacity = '1';
                          billingStandard.style.opacity = '1';
                          billingPro.style.opacity = '1';
                      }, 150);
                  });

                  btnAnnually.addEventListener('click', () => {
                      slider.style.transform = 'translateX(100%)';
                      btnAnnually.classList.remove('text-slate-500');
                      btnAnnually.classList.add('text-slate-900');
                      btnMonthly.classList.remove('text-slate-900');
                      btnMonthly.classList.add('text-slate-500');

                      priceStandard.style.opacity = '0';
                      pricePro.style.opacity = '0';
                      billingStandard.style.opacity = '0';
                      billingPro.style.opacity = '0';

                      setTimeout(() => {
                          priceStandard.textContent = '$8';
                          pricePro.textContent = '$24';
                          billingStandard.textContent = 'Billed $96 annually';
                          billingPro.textContent = 'Billed $288 annually';

                          priceStandard.style.opacity = '1';
                          pricePro.style.opacity = '1';
                          billingStandard.style.opacity = '1';
                          billingPro.style.opacity = '1';
                      }, 150);
                  });
              }
          })();
        


        (function initDraggableTestimonials() {
            const container = document.getElementById('testimonial-container');
            if (!container) return;

            // DOM has them in order: Bottom, Middle, Top.
            // cards[0] is bottom, cards[1] is middle, cards[2] is top
            let cards = Array.from(container.querySelectorAll('.testimonial-card'));
            const clip = document.getElementById('paper-clip');

            let isDragging = false;
            let startY = 0;
            let startX = 0;
            let currentY = 0;
            let currentX = 0;
            const threshold = 140;

            const POSITIONS = [
                { zIndex: 10, transform: 'translate3d(-12px, 8px, 0) rotate(-4deg)', shadow: '0 10px 20px rgba(0,0,0,0.03)', origin: 'bottom center' },
                { zIndex: 20, transform: 'translate3d(12px, 16px, 0) rotate(3deg)', shadow: '0 15px 30px rgba(0,0,0,0.04)', origin: 'bottom center' },
                { zIndex: 30, transform: 'translate3d(0, 0, 0) rotate(0deg)', shadow: '0 40px 80px -15px rgba(0,0,0,0.12), 0 10px 20px -5px rgba(0,0,0,0.04), inset 0 0 0 1px rgba(255,255,255,1)', origin: 'top center' }
            ];

            function applyPositions(animate = true) {
                cards.forEach((card, index) => {
                    const pos = POSITIONS[index];
                    card.style.zIndex = pos.zIndex;
                    card.style.transformOrigin = pos.origin;

                    if (animate) {
                        card.style.transition = 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1.1), box-shadow 0.6s ease, opacity 0.4s ease';
                    } else {
                        card.style.transition = 'none';
                    }

                    card.style.transform = pos.transform;
                    card.style.boxShadow = pos.shadow;

                    const hint = card.querySelector('.drag-hint');
                    if (hint) {
                        hint.style.transition = animate ? 'opacity 0.4s ease' : 'none';
                        hint.style.opacity = index === 2 ? '0.6' : '0';
                    }

                    if (index === 2) {
                        card.classList.add('cursor-grab', 'touch-none', 'select-none');
                    } else {
                        card.classList.remove('cursor-grab', 'touch-none', 'select-none', 'active:cursor-grabbing');
                    }
                });
            }

            const startDrag = (e) => {
                const topCard = cards[2];
                if (!e.target.closest('.testimonial-card') || e.target.closest('.testimonial-card') !== topCard) return;

                isDragging = true;
                topCard.classList.add('active:cursor-grabbing');
                startY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
                startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;

                topCard.style.transition = 'none';
                if(clip) clip.style.transition = 'none';
            };

            const drag = (e) => {
                if (!isDragging) return;

                currentY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
                currentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;

                let deltaY = currentY - startY;
                let deltaX = currentX - startX;

                // Resistance if pushing up
                if (deltaY < 0) deltaY = deltaY * 0.15;

                const pull = deltaY > 0 ? Math.pow(deltaY, 0.85) * 2.2 : deltaY;
                const rotateX = Math.min(Math.max(pull * 0.08, 0), 25);
                const rotateZ = deltaX * 0.03;

                const topCard = cards[2];
                topCard.style.transform = `translate3d(0, ${pull}px, 0) rotateX(${rotateX}deg) rotateZ(${rotateZ}deg)`;

                const shadowY = 40 + pull * 0.2;
                const shadowBlur = 80 + pull * 0.1;
                const shadowSpread = -15 - pull * 0.02;
                topCard.style.boxShadow = `0 ${shadowY}px ${shadowBlur}px ${shadowSpread}px rgba(0,0,0,0.12), 0 10px 20px -5px rgba(0,0,0,0.04), inset 0 0 0 1px rgba(255,255,255,1)`;

                if (clip && deltaY > 0) {
                    const clipPull = Math.min(pull * 0.08, 6);
                    const clipRotate = Math.min(rotateX * 0.4, 8);
                    clip.style.transform = `translate(-50%, ${clipPull}px) rotateX(${clipRotate}deg)`;
                }
            };

            const endDrag = (e) => {
                if (!isDragging) return;
                isDragging = false;

                const topCard = cards[2];
                topCard.classList.remove('active:cursor-grabbing');

                const deltaY = currentY - startY;
                const pull = deltaY > 0 ? Math.pow(deltaY, 0.85) * 2.2 : 0;

                if (pull > threshold) {
                    // Tear away animation
                    topCard.style.transition = 'transform 0.5s cubic-bezier(0.5, 0, 1, 1), opacity 0.4s linear 0.1s, box-shadow 0.5s ease';
                    const tearSpin = (currentX - startX) > 0 ? 15 : -15;
                    topCard.style.transform = `translate3d(0, ${window.innerHeight}px, 0) rotateZ(${tearSpin}deg) rotateX(45deg)`;
                    topCard.style.opacity = '0';

                    if(clip) {
                        clip.style.transition = 'transform 0.4s cubic-bezier(0.3, 2.5, 0.4, 1)';
                        clip.style.transform = 'translate(-50%, 0) rotateX(0)';
                    }

                    setTimeout(() => {
                        // Move top card to back of array
                        const tornCard = cards.pop();
                        cards.unshift(tornCard);

                        tornCard.style.transition = 'none';
                        tornCard.style.opacity = '0';

                        // Slide remaining cards up
                        applyPositions(true);

                        setTimeout(() => {
                            tornCard.style.transition = 'opacity 0.5s ease';
                            tornCard.style.opacity = '1';
                        }, 50);

                    }, 400);

                } else {
                    // Snap back
                    applyPositions(true);
                    if(clip) {
                        clip.style.transition = 'transform 0.5s cubic-bezier(0.3, 1.5, 0.4, 1)';
                        clip.style.transform = 'translate(-50%, 0) rotateX(0)';
                    }
                }
            };

            container.addEventListener('mousedown', startDrag);
            window.addEventListener('mousemove', drag);
            window.addEventListener('mouseup', endDrag);

            container.addEventListener('touchstart', startDrag, {passive: true});
            window.addEventListener('touchmove', (e) => {
                if(isDragging) {
                    e.preventDefault();
                    drag(e);
                }
            }, {passive: false});
            window.addEventListener('touchend', endDrag);
            window.addEventListener('touchcancel', endDrag);

            applyPositions(false);
        })();
      


      lucide.createIcons();
    
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
      
<div className="aura-background-component z-0 pointer-events-none overflow-hidden [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] fixed w-full h-[100vh] max-h-[900px] top-0 left-0">
<div className="absolute w-full h-full left-0 top-0 z-0" data-us-project="SrJYfPcDUR4StI3maLL6"></div>
</div>
<div className="absolute inset-0 z-0 pointer-events-none flex justify-center overflow-hidden">
<div className="w-full h-full max-w-[1360px] relative">
<div className="absolute top-0 bottom-0 left-4 md:left-10 w-px bg-slate-200/70"></div>
<div className="absolute top-0 bottom-0 right-4 md:right-10 w-px bg-slate-200/70"></div>
<div className="absolute top-0 bottom-0 left-1/2 -translate-x-px w-px bg-slate-200/40 hidden lg:block" style={{display: 'none'}}></div>
<div className="-left-20 -right-20 h-px bg-slate-200/70 absolute top-[88px]"></div>
<div className="md:left-10 -translate-x-1/2 -translate-y-1/2 flex w-6 h-6 absolute top-[88px] left-4 items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
<div className="w-3.5 h-3.5 border-slate-300 border rounded-full absolute"></div>
</div>
<div className="md:right-10 -translate-y-1/2 flex w-6 h-6 absolute top-[88px] right-4 translate-x-1/2 items-center justify-center">
<div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
<div className="w-3.5 h-3.5 border-slate-300 border rounded-full absolute"></div>
</div>
</div>
</div>
<nav className="flex [animation:animationIn_0.8s_ease-out_0.1s_both] w-full max-w-7xl z-50 mr-auto ml-auto pt-5 pr-6 pb-5 pl-6 relative items-center justify-between">
<div className="flex items-center gap-2.5 cursor-pointer">
<span className="text-xl font-medium tracking-tight text-slate-900">
          Revio
        </span>
</div>
<div className="hidden md:flex items-center gap-8 text-base font-normal text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#">Products</a>
<a className="hover:text-slate-900 transition-colors" href="#">Solutions</a>
<a className="hover:text-slate-900 transition-colors" href="#">Pricing</a>
<a className="hover:text-slate-900 transition-colors" href="#">Customers</a>
<a className="hover:text-slate-900 transition-colors" href="#">
          Contact Us
        </a>
</div>
<button className="hidden md:flex items-center gap-1.5 bg-[#1C2024] text-white px-5 py-2.5 rounded-xl text-base font-normal hover:bg-slate-800 transition-colors shadow-sm">
        Request Demo
        <iconify-icon className="text-lg text-slate-300" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</button>
<button className="md:hidden text-slate-600">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</button>
</nav>
<section className="sm:px-6 lg:px-8 flex flex-col text-center w-full max-w-7xl z-10 mr-auto ml-auto pt-20 pr-4 pb-32 pl-4 relative items-center">


<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-50/40 rounded-full blur-[100px] pointer-events-none z-0"></div>
<div className="inline-flex [animation:animationIn_0.8s_ease-out_0.2s_both] bg-emerald-50 z-10 border-emerald-100/50 border rounded-full mb-8 pt-1.5 pr-4 pb-1.5 pl-4 relative items-center">
<span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
<span className="text-xs font-medium text-emerald-700">
          Revio AI v3.0 is now live
        </span>
</div>
<h1 className="sm:text-6xl lg:text-7xl leading-[1.1] [animation:animationIn_0.8s_ease-out_0.3s_both] text-5xl font-semibold text-[#1c1917] tracking-tight max-w-4xl z-10 relative">
        Forecast the future,
        <br className="hidden sm:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500">
          accelerate your revenue.
        </span>
</h1>
<p className="sm:text-xl leading-relaxed [animation:animationIn_0.8s_ease-out_0.4s_both] text-lg text-gray-500 max-w-2xl z-10 mt-6 relative">
        Connect your CRM to Revio's predictive engine to identify pipeline
        risks, automate reporting, and bridge the gap between sales activity and
        closed revenue.
      </p>
<div className="flex flex-col sm:flex-row [animation:animationIn_0.8s_ease-out_0.5s_both] z-10 mt-10 relative gap-x-4 gap-y-4 items-center">
<button className="group flex sm:w-auto sm:px-10 sm:py-4 transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] w-full mr-auto ml-auto pt-3.5 pr-8 pb-3.5 pl-8 relative items-center justify-center">
<div className="absolute inset-0 rounded-full shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] pointer-events-none z-0 transition-shadow duration-300 group-hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)]"></div>
<div className="overflow-hidden bg-white/40 rounded-full absolute top-0 right-0 bottom-0 left-0">
<div className="absolute top-1/2 right-[30%] w-24 h-24 bg-blue-400/60 rounded-full blur-xl -translate-y-1/2 translate-x-1/2 transition-transform duration-700 ease-out group-hover:scale-125 group-hover:-translate-y-1/3"></div>
<div className="absolute bottom-[-20%] right-[15%] w-20 h-20 bg-rose-400/60 rounded-full blur-xl translate-x-1/2 transition-transform duration-700 ease-out delay-75 group-hover:scale-125 group-hover:-translate-x-1/4"></div>
<div className="-translate-y-1/2 transition-transform duration-700 ease-out delay-150 group-hover:scale-110 bg-violet-400/60 w-20 h-20 rounded-full absolute top-[10%] right-[5%] blur-xl translate-x-1/2"></div>
<div className="-right-[5%] -translate-y-1/2 transition-transform duration-700 ease-out group-hover:scale-125 group-hover:-translate-x-1/3 bg-orange-300/60 w-24 h-24 rounded-full absolute top-1/2 blur-xl"></div>
</div>
<div className="absolute inset-0 rounded-full bg-white/30 backdrop-blur-md border border-white/80 shadow-[inset_6px_6px_16px_rgba(255,255,255,0.7),inset_-6px_-6px_16px_rgba(0,0,0,0.15),inset_0_1px_2px_rgba(255,255,255,1)] pointer-events-none z-10 transition-colors duration-300 group-hover:bg-white/20"></div>
<div className="absolute inset-0 rounded-full pointer-events-none z-10 flex items-center justify-center overflow-hidden" style={{padding: '2px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude'}}>
<div className="w-[300%] aspect-square shrink-0 animate-spin" style={{animationDuration: '3s'}}>
<div className="w-full h-full bg-[conic-gradient(from_0deg,transparent_40%,rgba(255,255,255,1)_100%)]"></div>
</div>
</div>
<div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/80 via-transparent to-transparent opacity-70 pointer-events-none z-10"></div>
<span className="relative z-20 text-base sm:text-lg font-medium tracking-tight flex gap-1 items-center text-black">
            Start Free Trial
            <svg className="w-5 h-5 ml-0.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m9 18 6-6-6-6"></path>
</svg>
</span>
</button>
<button className="group flex hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] sm:w-auto sm:px-10 sm:py-4 text-slate-600 bg-transparent w-full border-white/40 border rounded-full px-8 py-3.5 relative shadow-sm backdrop-blur-md gap-x-2 gap-y-2 items-center justify-center">
<div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 via-transparent to-transparent opacity-40 pointer-events-none z-10 transition-opacity duration-300 group-hover:opacity-100"></div>
<span className="relative z-20 text-base sm:text-lg font-medium tracking-tight">
            Watch Product Tour
          </span>
<svg className="relative z-20 w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polygon points="10 8 16 12 10 16 10 8"></polygon>
</svg>
</button>
</div>
<div className="w-full pt-24 pb-0 relative">
<style>
          @keyframes breatheGlow {

              0%,
              100% {
                  box-shadow: 0 20px 40px -10px rgba(79, 70, 229, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.6), inset 0 -4px 6px rgba(0, 0, 0, 0.2);
                  transform: scale(1);
              }

              50% {
                  box-shadow: 0 25px 50px -5px rgba(79, 70, 229, 0.8), inset 0 2px 4px rgba(255, 255, 255, 0.8), inset 0 -4px 6px rgba(0, 0, 0, 0.3);
                  transform: scale(1.03);
              }
          }

          @keyframes pulseLine {

              0%,
              100% {
                  opacity: 0.3;
                  stroke-width: 0.8;
              }

              50% {
                  opacity: 1;
                  stroke-width: 1.5;
              }
          }

          @keyframes pulseNode {

              0%,
              100% {
                  transform: scale(1);
                  box-shadow: 0 15px 25px -5px rgba(79, 70, 229, 0.25), inset 0 2px 3px white;
              }

              50% {
                  transform: scale(1.08);
                  box-shadow: 0 20px 30px 0px rgba(79, 70, 229, 0.4), inset 0 2px 3px white;
              }
          }

          @keyframes heightBar1 {

              0%,
              10% {
                  height: 10%;
                  opacity: 0.5;
              }

              30%,
              70% {
                  height: 40%;
                  opacity: 1;
              }

              90%,
              100% {
                  height: 10%;
                  opacity: 0.5;
              }
          }

          @keyframes heightBar2 {

              0%,
              15% {
                  height: 10%;
                  opacity: 0.5;
              }

              35%,
              75% {
                  height: 70%;
                  opacity: 1;
              }

              90%,
              100% {
                  height: 10%;
                  opacity: 0.5;
              }
          }

          @keyframes heightBar3 {

              0%,
              20% {
                  height: 10%;
                  opacity: 0.5;
                  box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.5), 0 2px 5px rgba(251, 146, 60, 0.1);
                  filter: brightness(1);
              }

              40%,
              80% {
                  height: 100%;
                  opacity: 1;
                  box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.8), 0 8px 25px rgba(251, 146, 60, 0.6);
                  filter: brightness(1.05);
                  transform: translateY(-3px);
              }

              90%,
              100% {
                  height: 10%;
                  opacity: 0.5;
                  box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.5), 0 2px 5px rgba(251, 146, 60, 0.1);
                  filter: brightness(1);
                  transform: translateY(0);
              }
          }

          @keyframes heightBar4 {

              0%,
              25% {
                  height: 10%;
                  opacity: 0.5;
              }

              45%,
              85% {
                  height: 85%;
                  opacity: 1;
              }

              90%,
              100% {
                  height: 10%;
                  opacity: 0.5;
              }
          }

          @keyframes heightBar5 {

              0%,
              30% {
                  height: 10%;
                  opacity: 0.5;
              }

              50%,
              90% {
                  height: 50%;
                  opacity: 1;
              }

              90%,
              100% {
                  height: 10%;
                  opacity: 0.5;
              }
          }

          @keyframes floatUpCard {

              0%,
              100% {
                  transform: translateY(0);
              }

              50% {
                  transform: translateY(-6px);
              }
          }

          @keyframes toggleBgAnim {

              0%,
              10%,
              90%,
              100% {
                  background-color: #f1f5f9;
                  border-color: #e2e8f0;
              }

              30%,
              70% {
                  background-color: #0ea5e9;
                  border-color: #0284c7;
              }
          }

          @keyframes toggleCircleAnim {

              0%,
              10%,
              90%,
              100% {
                  transform: translateX(0);
              }

              30%,
              70% {
                  transform: translateX(16px);
              }
          }

          @keyframes fillProgress84 {

              0%,
              15% {
                  width: 0%;
              }

              45%,
              85% {
                  width: 84%;
              }

              95%,
              100% {
                  width: 0%;
              }
          }

          @keyframes moveSlider84 {

              0%,
              15% {
                  left: 0%;
              }

              45%,
              85% {
                  left: 84%;
              }

              95%,
              100% {
                  left: 0%;
              }
          }

          @keyframes fillProgress65 {

              0%,
              15% {
                  width: 0%;
              }

              45%,
              85% {
                  width: 65%;
              }

              95%,
              100% {
                  width: 0%;
              }
          }

          @keyframes moveSlider65 {

              0%,
              15% {
                  left: 0%;
              }

              45%,
              85% {
                  left: 65%;
              }

              95%,
              100% {
                  left: 0%;
              }
          }
        </style>
<div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-fr gap-6 sm:gap-8 z-10 relative gap-x-6 gap-y-6">

<div className="flex flex-col overflow-hidden [animation:animationIn_0.8s_ease-out_0.6s_both] bg-white h-full border-gray-100 border rounded-[2rem] pt-3 pr-3 pb-3 pl-3 relative shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06),inset_0_1px_0_white]">
<div className="h-[22rem] rounded-[1.5rem] bg-gradient-to-br from-[#f3f4fd] to-[#fcfcff] relative overflow-hidden shadow-[inset_0_2px_15px_rgba(0,0,0,0.03)] border border-white/80 flex items-center justify-center pt-8 shrink-0">
<div className="absolute inset-0 w-full h-full pointer-events-none z-10">
<style>
                  @keyframes flowBeam {
                      0% {
                          stroke-dashoffset: 20;
                          opacity: 0;
                      }

                      15% {
                          opacity: 1;
                      }

                      85% {
                          opacity: 1;
                      }

                      100% {
                          stroke-dashoffset: -100;
                          opacity: 0;
                      }
                  }
                </style>
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">

<path d="M 27 83 C 27 60, 50 65, 50 39" fill="none" stroke="#e0e7ff" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<path d="M 50 83 L 50 39" fill="none" stroke="#e0e7ff" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<path d="M 73 83 C 73 60, 50 65, 50 39" fill="none" stroke="#e0e7ff" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>

<path className="opacity-50" d="M 27 83 C 27 60, 50 65, 50 39" fill="none" pathlength="100" stroke="#818cf8" stroke-dasharray="20 100" strokeLinecap="round" strokeWidth="4" style={{animation: 'flowBeam 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite'}} vector-effect="non-scaling-stroke"></path>
<path className="opacity-50" d="M 50 83 L 50 39" fill="none" pathlength="100" stroke="#818cf8" stroke-dasharray="20 100" strokeLinecap="round" strokeWidth="4" style={{animation: 'flowBeam 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.8s'}} vector-effect="non-scaling-stroke"></path>
<path className="opacity-50" d="M 73 83 C 73 60, 50 65, 50 39" fill="none" pathlength="100" stroke="#818cf8" stroke-dasharray="20 100" strokeLinecap="round" strokeWidth="4" style={{animation: 'flowBeam 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite 1.6s'}} vector-effect="non-scaling-stroke"></path>

<path d="M 27 83 C 27 60, 50 65, 50 39" fill="none" pathlength="100" stroke="#4f46e5" stroke-dasharray="20 100" strokeLinecap="round" strokeWidth="2" style={{animation: 'flowBeam 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite'}} vector-effect="non-scaling-stroke"></path>
<path d="M 50 83 L 50 39" fill="none" pathlength="100" stroke="#4f46e5" stroke-dasharray="20 100" strokeLinecap="round" strokeWidth="2" style={{animation: 'flowBeam 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.8s'}} vector-effect="non-scaling-stroke"></path>
<path d="M 73 83 C 73 60, 50 65, 50 39" fill="none" pathlength="100" stroke="#4f46e5" stroke-dasharray="20 100" strokeLinecap="round" strokeWidth="2" style={{animation: 'flowBeam 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite 1.6s'}} vector-effect="non-scaling-stroke"></path>
</svg>
</div>
<div className="flex z-20 bg-gradient-to-b from-[#818cf8] to-[#4f46e5] w-24 h-24 border-indigo-400 border rounded-[1.5rem] absolute top-[25%] shadow-[0_20px_40px_-10px_rgba(79,70,229,0.6),inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-4px_6px_rgba(0,0,0,0.2)] items-center justify-center" style={{animation: 'breatheGlow 4s ease-in-out infinite'}}>
<div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-b from-white/30 to-transparent pointer-events-none"></div>
<svg aria-hidden="true" className="lucide lucide-database w-10 h-10 text-white opacity-95" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<div className="absolute bottom-[10%] left-[20%] z-20 flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-gradient-to-b from-white to-[#eef2ff] shadow-[0_15px_25px_-5px_rgba(79,70,229,0.25),inset_0_2px_3px_white] flex items-center justify-center border border-[#e0e7ff] relative overflow-hidden" style={{animation: 'pulseNode 4s ease-in-out infinite 0s'}}>
<svg aria-hidden="true" className="lucide lucide-mail text-indigo-400 w-5 h-5 relative z-10" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<span className="text-xs font-medium text-indigo-400 mt-2 tracking-tight">
                  Email
                </span>
</div>
<div className="absolute bottom-[10%] left-[50%] -translate-x-1/2 z-20 flex flex-col items-center">
<div className="flex overflow-hidden bg-gradient-to-b from-white to-[#eef2ff] w-12 h-12 border-[#e0e7ff] border rounded-full relative shadow-[0_15px_25px_-5px_rgba(79,70,229,0.25),inset_0_2px_3px_white] items-center justify-center" style={{animation: 'pulseNode 4s ease-in-out infinite 0.4s'}}>
<svg aria-hidden="true" className="lucide lucide-layout text-indigo-400 w-5 h-5 relative z-10" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<span className="text-xs font-medium text-indigo-400 mt-2 tracking-tight">
                  CRM
                </span>
</div>
<div className="absolute bottom-[10%] right-[20%] z-20 flex flex-col items-center">
<div className="flex overflow-hidden bg-gradient-to-b from-white to-[#eef2ff] w-12 h-12 border-[#e0e7ff] border rounded-full relative shadow-[0_15px_25px_-5px_rgba(79,70,229,0.25),inset_0_2px_3px_white] items-center justify-center" style={{animation: 'pulseNode 4s ease-in-out infinite 0.4s'}}>
<svg aria-hidden="true" className="lucide lucide-slack relative z-10" data-icon-replaced="true" data-icon-set="lucide" data-lucide="slack" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(129, 140, 248)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="1.5" width="3" x="13" y="2"></rect><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path><rect height="8" rx="1.5" width="3" x="8" y="14"></rect><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path><rect height="3" rx="1.5" width="8" x="14" y="13"></rect><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path><rect height="3" rx="1.5" width="8" x="2" y="8"></rect><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path></svg>
</div>
<span className="text-xs font-medium text-indigo-400 mt-2 tracking-tight">
                  Slack
                </span>
</div>
</div>
<div className="pt-6 px-3 pb-4 flex-1">
<h3 className="text-2xl font-semibold tracking-tight text-gray-900">
                Pipeline Intelligence
              </h3>
<p className="text-base text-gray-500 mt-2 leading-relaxed">
                Aggregate every CRM interaction and sales meeting into a
                unified, high-resolution data pipeline.
              </p>
</div>
</div>

<div className="flex flex-col overflow-hidden group [animation:animationIn_0.8s_ease-out_0.7s_both] bg-white h-full border-gray-100 border rounded-[2rem] pt-3 pr-3 pb-3 pl-3 relative shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06),inset_0_1px_0_white]">
<div className="h-[22rem] rounded-[1.5rem] bg-gradient-to-br from-[#fffaf7] to-[#fffdfc] relative overflow-hidden shadow-[inset_0_2px_15px_rgba(0,0,0,0.02)] border border-white/80 flex flex-col items-center px-8 mb-4 shrink-0">
<div className="flex flex-col bg-white w-full max-w-[240px] z-30 border-orange-50/50 border rounded-2xl mt-8 pt-4 pr-4 pb-4 pl-4 relative shadow-[0_15px_35px_-10px_rgba(0,0,0,0.08),inset_0_2px_4px_white,inset_0_0_0_1px_rgba(251,146,60,0.1)]" style={{animation: 'floatUpCard 5s ease-in-out infinite'}}>
<div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/80 to-transparent pointer-events-none"></div>
<div className="flex justify-between items-center w-full relative z-10">
<span className="text-xs font-semibold text-gray-500 tracking-wide">
                    Forecast Accuracy
                  </span>
<span className="text-xs font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded-md border border-orange-100/50">
                    98.2%
                  </span>
</div>
<div className="flex flex-col items-center justify-center w-full mt-5 relative z-10 drop-shadow-sm">
<span className="text-[20px] font-bold text-orange-400 tracking-tight leading-none mb-1">
                    Expected
                  </span>
<span className="text-[28px] font-extrabold text-orange-500 tracking-tight leading-none">
                    $4.2M
                  </span>
</div>
</div>
<div className="absolute -bottom-16 w-[340px] h-[340px] rounded-full border-[35px] border-white/40 shadow-[inset_0_0_40px_rgba(251,146,60,0.2),0_0_40px_rgba(217,70,239,0.15)] bg-gradient-to-t from-transparent to-orange-50/10 blur-[1px] z-0 pointer-events-none"></div>
<div className="flex flex-col bg-white w-full h-40 z-10 border-orange-50/50 border rounded-t-[1.5rem] pt-5 pr-5 pb-5 pl-5 relative shadow-[0_15px_35px_-10px_rgba(0,0,0,0.08),inset_0_2px_4px_white,0_0_0_1px_rgba(251,146,60,0.1)_inset] mt-auto">
<div className="flex justify-between items-center mb-4">
<span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                    Velocity Tracking
                  </span>
<div className="w-8 h-4 rounded-full bg-orange-100 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] relative border border-orange-200">
<div className="absolute right-[2px] top-[1px] w-3 h-3 bg-orange-400 rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.2),inset_0_1px_1px_white]"></div>
</div>
</div>
<div className="flex items-end gap-3 h-full pb-2">
<div className="flex-1 bg-gradient-to-t from-orange-100 to-orange-50 rounded-md origin-bottom shadow-[inset_0_1px_1px_white]" style={{animation: 'heightBar1 5s ease-in-out infinite'}}></div>
<div className="flex-1 bg-gradient-to-t from-orange-200 to-orange-100 rounded-md origin-bottom shadow-[inset_0_1px_1px_white]" style={{animation: 'heightBar2 5s ease-in-out infinite'}}></div>
<div className="flex-1 bg-gradient-to-t from-orange-400 to-orange-300 rounded-md relative origin-bottom" style={{animation: 'heightBar3 5s ease-in-out infinite'}}></div>
<div className="flex-1 bg-gradient-to-t from-orange-200 to-orange-100 rounded-md origin-bottom shadow-[inset_0_1px_1px_white]" style={{animation: 'heightBar4 5s ease-in-out infinite'}}></div>
<div className="flex-1 bg-gradient-to-t from-orange-100 to-orange-50 rounded-md origin-bottom shadow-[inset_0_1px_1px_white]" style={{animation: 'heightBar5 5s ease-in-out infinite'}}></div>
</div>
</div>
</div>
<div className="pt-2 px-3 pb-4 flex-1">
<h3 className="text-2xl font-medium tracking-tight text-gray-900">
                Revenue Forecasting
              </h3>
<p className="text-base text-gray-500 mt-2 leading-relaxed">
                Transforms historical data into actionable exit predictions,
                giving you clarity on quotas and sales throughput.
              </p>
</div>
</div>

<div className="flex flex-col overflow-hidden group [animation:animationIn_0.8s_ease-out_0.8s_both] bg-white h-full border-gray-100 border rounded-[2rem] pt-3 pr-3 pb-3 pl-3 relative shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06),inset_0_1px_0_white]">
<div className="h-[22rem] rounded-[1.5rem] bg-gradient-to-br from-[#f0f9ff] to-[#fcfcff] relative overflow-hidden shadow-[inset_0_2px_15px_rgba(0,0,0,0.02)] border border-white/80 flex flex-col items-center justify-center p-5 mb-4 shrink-0">
<div className="absolute w-40 h-40 bg-sky-100/40 rounded-full blur-2xl pointer-events-none z-0"></div>
<div className="w-full space-y-3 relative z-10">
<div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-[0_4px_10px_rgba(0,0,0,0.03),inset_0_1px_0_white] border border-sky-100/50 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-sky-50 text-sky-500 flex items-center justify-center shadow-[inset_0_1px_1px_white,0_1px_2px_rgba(0,0,0,0.05)] border border-sky-100">
<svg aria-hidden="true" className="lucide lucide-activity w-3 h-3" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<span className="text-xs font-medium text-gray-700 tracking-tight">
                      Intent Scoring
                    </span>
</div>
<div className="w-9 h-5 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] relative border border-slate-200 bg-slate-100" style={{animation: 'toggleBgAnim 6s ease-in-out infinite 0s'}}>
<div className="absolute left-[2px] top-[1px] w-4 h-4 bg-white rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.2),inset_0_1px_1px_white]" style={{animation: 'toggleCircleAnim 6s ease-in-out infinite 0s'}}></div>
</div>
</div>
<div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-[0_4px_10px_rgba(0,0,0,0.03),inset_0_1px_0_white] border border-sky-100/50 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-sky-50 text-sky-500 flex items-center justify-center shadow-[inset_0_1px_1px_white,0_1px_2px_rgba(0,0,0,0.05)] border border-sky-100">
<svg aria-hidden="true" className="lucide lucide-alert-triangle w-3 h-3" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
</div>
<span className="text-xs font-medium text-gray-700 tracking-tight">
                      Risk Detection
                    </span>
</div>
<div className="w-9 h-5 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] relative border border-slate-200 bg-slate-100" style={{animation: 'toggleBgAnim 6s ease-in-out infinite 0.5s'}}>
<div className="absolute left-[2px] top-[1px] w-4 h-4 bg-white rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.2),inset_0_1px_1px_white]" style={{animation: 'toggleCircleAnim 6s ease-in-out infinite 0.5s'}}></div>
</div>
</div>
<div className="z-10 bg-white w-full border-emerald-100 border rounded-xl mb-4 pt-4 pr-4 pb-4 pl-4 relative shadow-[0_15px_25px_-5px_rgba(74,222,128,0.25),inset_0_2px_3px_white]">
<div className="flex justify-between items-center mb-3">
<span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                      Win Probability
                    </span>
<span className="text-[10px] font-medium text-emerald-500">
                      84%
                    </span>
</div>
<div className="w-full h-3 bg-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] relative border border-gray-200/50">
<div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-emerald-300 to-emerald-500 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)]" style={{animation: 'fillProgress84 6s cubic-bezier(0.4, 0, 0.2, 1) infinite 1s'}}></div>
<div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full shadow-[0_4px_6px_rgba(0,0,0,0.1),inset_0_2px_4px_white] border border-gray-200 flex items-center justify-center" style={{animation: 'moveSlider84 6s cubic-bezier(0.4, 0, 0.2, 1) infinite 1s'}}>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[inset_0_1px_1px_rgba(0,0,0,0.2)]"></div>
</div>
</div>
</div>
<div className="z-10 bg-white w-full border-emerald-100 border rounded-xl pt-4 pr-4 pb-4 pl-4 relative shadow-[0_15px_25px_-5px_rgba(74,222,128,0.25),inset_0_2px_3px_white]">
<div className="flex justify-between items-center mb-3">
<span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                      Deal Potential
                    </span>
<span className="text-[10px] font-medium text-emerald-500">
                      $240k
                    </span>
</div>
<div className="w-full h-3 bg-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] relative border border-gray-200/50">
<div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-emerald-300 to-emerald-500 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)]" style={{animation: 'fillProgress65 6s cubic-bezier(0.4, 0, 0.2, 1) infinite 1.5s'}}></div>
<div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full shadow-[0_4px_6px_rgba(0,0,0,0.1),inset_0_2px_4px_white] border border-gray-200 flex items-center justify-center" style={{animation: 'moveSlider65 6s cubic-bezier(0.4, 0, 0.2, 1) infinite 1.5s'}}>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[inset_0_1px_1px_rgba(0,0,0,0.2)]"></div>
</div>
</div>
</div>
</div>
</div>
<div className="pt-2 px-3 pb-4 flex-1">
<h3 className="text-2xl font-medium tracking-tight text-gray-900">
                Deal Prioritization
              </h3>
<p className="text-base text-gray-500 mt-2 leading-relaxed">
                Isolate high-intent accounts and detect deal-stalling anomalies
                instantly with custom AI rulesets.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="section-decor z-10 w-full max-w-7xl mt-8 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<span className="decor-dot tl"></span>
<span className="decor-dot tr"></span>
<span className="decor-dot bl"></span>
<span className="decor-dot br"></span>

<div className="flex [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll border-slate-200/80 border-b mb-8 pb-8 items-center justify-between">
<span className="text-sm font-medium tracking-widest text-slate-500 uppercase">
          Platform Overview
        </span>
<a className="text-[#50C878] text-base font-normal flex items-center gap-1.5 hover:text-[#3BA662] transition-colors" href="#">
          Read more
          <svg className="text-[#50C878]" fill="none" height="14" viewbox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="3" cy="7" fill="currentColor" r="1.5"></circle>
<circle cx="7" cy="3" fill="currentColor" r="1.5"></circle>
<circle cx="7" cy="11" fill="currentColor" r="1.5"></circle>
<circle cx="11" cy="7" fill="currentColor" r="1.5"></circle>
</svg>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll mb-16 gap-x-8 gap-y-8 items-start">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 leading-[1.15]">
          You set the revenue
          <br className="hidden lg:block"/>
          targets. Revio predicts the rest.
        </h2>
<p className="text-xl text-slate-600 leading-relaxed md:pt-2 max-w-lg">
          Revio's AI monitors your sales pipeline and forecasts revenue for you,
          24/7. Perfect for leaders and reps alike. No coding, no guesswork.
        </p>
</div>

<div className="overflow-hidden flex flex-col lg:flex-row [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll text-gray-900 font-sans bg-[#F4F5F7] w-full h-[820px] max-h-screen border-gray-200/50 border rounded-[32px] mr-auto ml-auto shadow-2xl">
<aside className="lg:w-[260px] shrink-0 flex flex-col hidden lg:flex overflow-y-auto custom-scrollbar bg-[#FBFBFC] w-full border-gray-200/60 border-r pt-8 pr-4 pb-6 pl-4">
<div className="shrink-0 mb-10 pr-4 pl-4">
<span className="text-xl font-semibold text-gray-900 tracking-tight">
              REVIO
            </span>
</div>
<nav className="flex flex-col gap-1.5 flex-1 shrink-0">
<a className="nav-item flex items-center gap-3 px-4 py-3 rounded-xl text-sm relative transition-all" href="#">
<div className="nav-indicator absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-gray-900 rounded-r-md transition-all duration-300"></div>
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect height="9" rx="1" width="7" x="14" y="12"></rect>
<rect height="5" rx="1" width="7" x="3" y="16"></rect>
</svg>
              Dashboard
            </a>
<a className="nav-item flex items-center gap-3 hover:bg-gray-50 hover:text-gray-900 transition-all text-sm rounded-xl pt-3 pr-4 pb-3 pl-4 relative" href="#">
<div className="nav-indicator absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-gray-900 rounded-r-md transition-all duration-300"></div>
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M8 7v7"></path>
<path d="M12 7v4"></path>
<path d="M16 7v9"></path>
</svg>
              Pipeline
            </a>
<div className="flex flex-col mt-2">
<button className="nav-group-parent flex items-center justify-between px-4 py-3 rounded-xl text-sm font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all w-full text-left relative">
<div className="nav-indicator absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-gray-900 rounded-r-md transition-all duration-300 opacity-0 scale-y-0"></div>
<div className="flex items-center gap-3">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
                  Forecasts
                </div>
<svg className="chevron text-gray-400 transition-transform duration-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="flex flex-col pl-[42px] gap-3 mt-1 relative transition-all duration-300 overflow-hidden max-h-[200px] opacity-100" id="forecasts-submenu">
<div className="absolute left-[22px] top-0 bottom-4 w-px bg-gray-200"></div>
<a className="subnav-item text-sm font-normal text-gray-500 hover:text-gray-900 relative flex items-center gap-2 transition-colors" href="#">
<div className="absolute -left-[20px] top-1/2 w-3 h-px bg-gray-200"></div>
                  Accuracy
                  <span className="bg-gray-900 text-white text-[10px] px-1.5 py-0.5 rounded-full leading-none">
                    98%
                  </span>
</a>
<a className="subnav-item text-sm font-normal text-gray-500 hover:text-gray-900 relative flex items-center gap-2 transition-colors" href="#">
<div className="absolute -left-[20px] top-1/2 w-3 h-px bg-gray-200"></div>
                  Models
                </a>
<a className="subnav-item text-sm font-normal text-gray-500 hover:text-gray-900 relative flex items-center gap-2 transition-colors" href="#">
<div className="absolute -left-[20px] top-1/2 w-3 h-px bg-gray-200"></div>
                  Scenarios
                </a>
</div>
</div>
<a className="nav-item flex items-center gap-3 px-4 py-3 mt-2 rounded-xl text-sm font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all relative" href="#">
<div className="nav-indicator absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-gray-900 rounded-r-md transition-all duration-300 opacity-0 scale-y-0"></div>
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
              Deal Intelligence
            </a>
<a className="nav-item flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all relative" href="#">
<div className="nav-indicator absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-gray-900 rounded-r-md transition-all duration-300 opacity-0 scale-y-0"></div>
<svg className="" fill="none" height="18" stroke="currentColor" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path className="" d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
              Team Analytics
            </a>
<a className="nav-item flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all relative" href="#">
<div className="nav-indicator absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-gray-900 rounded-r-md transition-all duration-300 opacity-0 scale-y-0"></div>
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path>
</svg>
              Integrations
            </a>
</nav>
<div className="mt-4 mb-4 shrink-0">
<div className="w-full h-px bg-gray-200/60 mb-4"></div>
<a className="nav-item flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all relative" href="#">
<div className="nav-indicator absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-gray-900 rounded-r-md transition-all duration-300 opacity-0 scale-y-0"></div>
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
</svg>
              Learning center
            </a>
<a className="nav-item flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all relative" href="#">
<div className="nav-indicator absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-gray-900 rounded-r-md transition-all duration-300 opacity-0 scale-y-0"></div>
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M19 10v4"></path>
<path d="M5 10v4"></path>
<path d="M12 2a10 10 0 0 0-10 10v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H4"></path>
<path d="M20 12h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a10 10 0 0 0-10-10z"></path>
</svg>
              Support
            </a>
</div>
<div className="bg-white border border-gray-200/60 rounded-[20px] p-4 shadow-sm relative shrink-0 transition-all duration-300 origin-bottom" id="upgrade-card">
<button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors" id="close-upgrade">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
<h4 className="text-sm font-medium text-gray-900 mb-1">
              Upgrade to Pro!
            </h4>
<p className="text-[11px] text-gray-500 mb-3 leading-relaxed">
              Full pipeline insights with predictive AI models.
            </p>
<button className="w-full bg-gray-900 text-white rounded-xl py-2 text-xs font-medium hover:bg-gray-800 transition-all" id="upgrade-btn">
              Upgrade now
            </button>
</div>

</aside>
<main className="flex-1 flex flex-col h-full overflow-hidden bg-[#F4F5F7]">
<header className="shrink-0 flex z-10 bg-[#FBFBFC] h-[80px] border-gray-200/50 border-b pr-8 pl-8 items-center justify-between">
<div className="relative w-full max-w-sm hidden sm:block">
<svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
<input className="w-full bg-white border border-gray-200/60 rounded-xl pl-11 pr-4 py-2.5 text-sm font-normal focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder-gray-400 shadow-sm" placeholder="Quick search" type="text"/>
</div>
<div className="flex items-center gap-4 ml-auto">
<button className="w-10 h-10 rounded-full bg-white border border-gray-200/60 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
</svg>
</button>
<button className="w-10 h-10 rounded-full bg-white border border-gray-200/60 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</button>
<div className="hidden sm:flex items-center gap-3 bg-white border border-gray-200/60 rounded-full pr-5 pl-1.5 py-1.5 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
<img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://i.pravatar.cc/150?img=11"/>
<div className="flex flex-col">
<span className="text-[13px] font-medium text-gray-900 leading-tight">
                    Michael Johnson
                  </span>
<span className="text-[11px] text-gray-500 leading-tight">
                    Sales Director
                  </span>
</div>
</div>
<button className="flex items-center gap-2 bg-white border border-gray-200/60 rounded-xl px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors shadow-sm">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M12 8v8"></path>
<path d="M8 12h8"></path>
</svg>
                New Report
              </button>
</div>
</header>
<div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar">
<div className="grid grid-cols-1 xl:grid-cols-12 gap-6 max-w-[1400px] mx-auto h-full">
<div className="xl:col-span-8 flex flex-col gap-6 h-full">
<div className="flex-1 flex flex-col overflow-hidden group bg-white h-full border-gray-100 border rounded-[2rem] p-3 relative shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06),inset_0_1px_0_white] min-h-[260px]">
<style>
                    @keyframes chartDrawLine {
                        0%, 5% { stroke-dashoffset: 200; opacity: 0; }
                        6% { stroke-dashoffset: 200; opacity: 1; }
                        45%, 85% { stroke-dashoffset: 0; opacity: 1; }
                        90%, 100% { stroke-dashoffset: 0; opacity: 0; }
                    }
                    @keyframes popPoint1 { 0%, 5% { transform: scale(0); opacity: 0; } 12%, 85% { transform: scale(1); opacity: 1; } 90%, 100% { transform: scale(0); opacity: 0; } }
                    @keyframes popPoint2 { 0%, 11% { transform: scale(0); opacity: 0; } 18%, 85% { transform: scale(1); opacity: 1; } 90%, 100% { transform: scale(0); opacity: 0; } }
                    @keyframes popPoint3 { 0%, 18% { transform: scale(0); opacity: 0; } 25%, 85% { transform: scale(1); opacity: 1; } 90%, 100% { transform: scale(0); opacity: 0; } }
                    @keyframes popPoint4 { 0%, 25% { transform: scale(0); opacity: 0; } 32%, 85% { transform: scale(1); opacity: 1; } 90%, 100% { transform: scale(0); opacity: 0; } }
                    @keyframes popPoint5 { 0%, 31% { transform: scale(0); opacity: 0; } 38%, 85% { transform: scale(1); opacity: 1; } 90%, 100% { transform: scale(0); opacity: 0; } }
                    @keyframes popPoint6 { 0%, 38% { transform: scale(0); opacity: 0; } 45%, 85% { transform: scale(1); opacity: 1; } 90%, 100% { transform: scale(0); opacity: 0; } }
                    @keyframes popPoint7 { 0%, 45% { transform: scale(0); opacity: 0; } 52%, 85% { transform: scale(1); opacity: 1; } 90%, 100% { transform: scale(0); opacity: 0; } }
                  </style>
<div className="flex-1 min-h-[160px] rounded-[1.5rem] bg-gradient-to-br from-[#f3f4fd] to-[#fcfcff] relative overflow-hidden shadow-[inset_0_2px_15px_rgba(0,0,0,0.02)] border border-white/80 flex flex-col p-5 mb-3 shrink-0">
<div className="flex justify-between items-start z-20 relative">
<div className="">
<h3 className="text-[15px] font-medium text-gray-900">
                          Conversion Intelligence
                        </h3>
<div className="flex items-center gap-4 mt-2">
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-[#FF7B7B]"></div>
<span className="text-[11px] text-gray-500 font-normal">
                              Pipeline Value
                            </span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-[#FFD166]"></div>
<span className="text-[11px] text-gray-500 font-normal">
                              Active Deals
                            </span>
</div>
</div>
<div className="flex items-center gap-5 mt-1">
<span className="text-sm font-semibold text-gray-900">
                            $842,105
                          </span>
<span className="text-sm font-semibold text-gray-900">
                            4,210
                          </span>
</div>
</div>
<button className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-100 bg-white/50 backdrop-blur-sm text-[11px] font-medium text-gray-700 hover:bg-white transition-colors shadow-sm">
                        Monthly
                        <svg className="text-gray-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
</div>
<div className="absolute inset-0 pt-[100px] pb-4 px-5 flex items-end">
<div className="absolute bottom-6 left-5 z-10 max-w-[130px]">
<div className="text-3xl font-semibold text-gray-900 tracking-tight leading-none drop-shadow-sm">
                          +28.4%
                        </div>
<p className="text-[11px] text-gray-500 mt-1.5 leading-snug font-normal">
                          Proprietary velocity tracking.
                        </p>
</div>
<div className="w-full h-full relative ml-[140px] flex items-end justify-between px-2 pb-5">
<svg className="absolute inset-0 w-full h-full pointer-events-none" preserveaspectratio="none" viewbox="0 0 100 100">
<path className="drop-shadow-sm" d="M 0,65 L 16,65 L 25,45 L 33,45 L 50,60 L 66,60 L 75,40 L 83,40 L 100,50" fill="none" stroke="#FF7B7B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeDasharray: '200', animation: 'chartDrawLine 6s ease-in-out infinite'}}></path>
<path className="drop-shadow-sm" d="M 0,75 L 16,75 L 25,55 L 33,55 L 50,50 L 66,70 L 75,55 L 83,55 L 100,65" fill="none" stroke="#FFD166" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeDasharray: '200', animation: 'chartDrawLine 6s ease-in-out infinite'}}></path>
</svg>
<div className="relative h-full w-0 flex flex-col items-center justify-end">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-200 absolute bottom-[25%]" style={{animation: 'popPoint1 6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite'}}></div>
</div>
<div className="relative h-full w-0 flex flex-col items-center justify-end">
<div className="w-px h-[40%] bg-gradient-to-t from-indigo-200/50 to-transparent absolute bottom-0" style={{transformOrigin: 'bottom center', animation: 'popPoint2 6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite'}}></div>
<div className="w-1.5 h-1.5 rounded-full bg-indigo-200 absolute bottom-[45%]" style={{animation: 'popPoint2 6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite'}}></div>
</div>
<div className="relative h-full w-0 flex flex-col items-center justify-end">
<div className="w-px h-[80%] bg-gradient-to-t from-indigo-200/50 to-transparent absolute bottom-0" style={{transformOrigin: 'bottom center', animation: 'popPoint3 6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite'}}></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#FF7B7B] border-2 border-white absolute bottom-[55%] z-20 shadow-sm" style={{animation: 'popPoint3 6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite'}}></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#FFD166] border-2 border-white absolute bottom-[45%] z-20 shadow-sm" style={{animation: 'popPoint3 6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite'}}></div>
<div className="w-1.5 h-1.5 rounded-full bg-indigo-200 absolute bottom-[80%]" style={{animation: 'popPoint3 6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite'}}></div>
</div>
<div className="relative h-full w-0 flex flex-col items-center justify-end">
<div className="w-px h-[90%] bg-gradient-to-t from-indigo-200/50 to-transparent absolute bottom-0" style={{transformOrigin: 'bottom center', animation: 'popPoint4 6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite'}}></div>
<div className="w-1.5 h-1.5 rounded-full bg-indigo-200 absolute bottom-[90%]" style={{animation: 'popPoint4 6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite'}}></div>
<div className="absolute -bottom-7 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-white text-[10px] font-medium shadow-[0_4px_10px_rgba(79,70,229,0.3)] z-10" style={{animation: 'popPoint4 6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite'}}>
                            W4
                          </div>
</div>
<div className="relative h-full w-0 flex flex-col items-center justify-end">
<div className="w-px h-[70%] bg-gradient-to-t from-indigo-200/50 to-transparent absolute bottom-0" style={{transformOrigin: 'bottom center', animation: 'popPoint5 6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite'}}></div>
<div className="w-1.5 h-1.5 rounded-full bg-indigo-200 absolute bottom-[70%]" style={{animation: 'popPoint5 6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite'}}></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#FF7B7B] border-2 border-white absolute bottom-[40%] z-20 shadow-sm" style={{animation: 'popPoint5 6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite'}}></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#FFD166] border-2 border-white absolute bottom-[30%] z-20 shadow-sm" style={{animation: 'popPoint5 6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite'}}></div>
</div>
<div className="relative h-full w-0 flex flex-col items-center justify-end">
<div className="w-px h-[50%] bg-gradient-to-t from-indigo-200/50 to-transparent absolute bottom-0" style={{transformOrigin: 'bottom center', animation: 'popPoint6 6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite'}}></div>
<div className="w-1.5 h-1.5 rounded-full bg-indigo-200 absolute bottom-[50%]" style={{animation: 'popPoint6 6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite'}}></div>
</div>
<div className="relative h-full w-0 flex flex-col items-center justify-end">
<div className="w-px h-[30%] bg-gradient-to-t from-indigo-200/50 to-transparent absolute bottom-0" style={{transformOrigin: 'bottom center', animation: 'popPoint7 6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite'}}></div>
</div>
</div>
</div>
</div>
<div className="pt-1 px-3 pb-2 shrink-0">
<h3 className="text-xl font-medium tracking-tight text-gray-900">
                      Advanced Velocity
                    </h3>
<p className="text-[13px] text-gray-500 mt-1 leading-relaxed truncate">
                      Continuous analysis of pipeline throughput to predict
                      month-end results with 98% accuracy.
                    </p>
</div>
</div>
<div className="flex-1 flex flex-col overflow-hidden group min-h-[260px] bg-white h-full border-gray-100 border rounded-[2rem] pt-3 pr-3 pb-3 pl-3 relative shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06),inset_0_1px_0_white]">
<style>
                    .r-bar-anim {
                        transform-origin: bottom;
                        animation-duration: 6s;
                        animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                        animation-iteration-count: infinite;
                    }
                    .r-bar-0 { animation-name: rBar0; }
                    .r-bar-1 { animation-name: rBar1; }
                    .r-bar-2 { animation-name: rBar2; }
                    .r-bar-oct { animation-name: rBarOct; }
                    .r-tip {
                        animation-name: rTip;
                        animation-duration: 6s;
                        animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
                        animation-iteration-count: infinite;
                    }
                    .r-bar-4 { animation-name: rBar4; }
                    .r-bar-5 { animation-name: rBar5; }
                    .r-bar-6 { animation-name: rBar6; }
                    .r-bar-7 { animation-name: rBar7; }
                    .r-bar-8 { animation-name: rBar8; }
                    .r-bar-9 { animation-name: rBar9; }

                    @keyframes rBar0 { 0%, 0% { transform: scaleY(0); } 8%, 85% { transform: scaleY(1); } 90%, 100% { transform: scaleY(0); } }
                    @keyframes rBar1 { 0%, 3% { transform: scaleY(0); } 11%, 85% { transform: scaleY(1); } 90%, 100% { transform: scaleY(0); } }
                    @keyframes rBar2 { 0%, 6% { transform: scaleY(0); } 14%, 85% { transform: scaleY(1); } 90%, 100% { transform: scaleY(0); } }
                    @keyframes rBarOct {
                        0%, 9% { transform: scaleY(0); }
                        15% { transform: scaleY(1.08); }
                        20%, 85% { transform: scaleY(1); }
                        90%, 100% { transform: scaleY(0); }
                    }
                    @keyframes rTip {
                        0%, 12% { opacity: 0; transform: translateY(8px); }
                        19%, 85% { opacity: 1; transform: translateY(0); }
                        90%, 100% { opacity: 0; transform: translateY(8px); }
                    }
                    @keyframes rBar4 { 0%, 12% { transform: scaleY(0); } 20%, 85% { transform: scaleY(1); } 90%, 100% { transform: scaleY(0); } }
                    @keyframes rBar5 { 0%, 15% { transform: scaleY(0); } 23%, 85% { transform: scaleY(1); } 90%, 100% { transform: scaleY(0); } }
                    @keyframes rBar6 { 0%, 18% { transform: scaleY(0); } 26%, 85% { transform: scaleY(1); } 90%, 100% { transform: scaleY(0); } }
                    @keyframes rBar7 { 0%, 21% { transform: scaleY(0); } 29%, 85% { transform: scaleY(1); } 90%, 100% { transform: scaleY(0); } }
                    @keyframes rBar8 { 0%, 24% { transform: scaleY(0); } 32%, 85% { transform: scaleY(1); } 90%, 100% { transform: scaleY(0); } }
                    @keyframes rBar9 { 0%, 27% { transform: scaleY(0); } 35%, 85% { transform: scaleY(1); } 90%, 100% { transform: scaleY(0); } }
                  </style>
<div className="flex-1 min-h-[160px] rounded-[1.5rem] bg-gradient-to-br from-[#f2fdf7] to-[#fbfffb] relative overflow-hidden shadow-[inset_0_2px_15px_rgba(0,0,0,0.02)] border border-white/80 flex flex-col p-5 mb-3 shrink-0">
<div className="flex justify-between items-start mb-2 relative z-20">
<div className="flex items-center gap-2">
<h3 className="text-[15px] font-medium text-gray-900">
                          Revenue Projection
                        </h3>
</div>
</div>
<div className="mb-3 relative z-20">
<p className="text-[11px] text-gray-500 font-medium">
                        Projected Q4 Exit
                      </p>
<div className="text-[24px] font-semibold text-gray-900 tracking-tight mt-0.5">
                        $142,850
                      </div>
</div>
<div className="flex-1 w-full flex items-end justify-between px-1 relative min-h-[100px] z-10">
<svg className="absolute inset-0 w-full h-full pointer-events-none pb-[20px]" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M 5,80 A 10,25 0 0,1 15,80" fill="none" stroke="#E2E8F0" strokeWidth="0.5"></path>
<path d="M 15,80 A 10,40 0 0,1 25,80" fill="none" stroke="#E2E8F0" strokeWidth="0.5"></path>
<path d="M 25,80 A 10,35 0 0,1 35,80" fill="none" stroke="#E2E8F0" strokeWidth="0.5"></path>
<path d="M 35,80 A 10,65 0 0,1 45,80" fill="none" stroke="#E2E8F0" strokeWidth="0.5"></path>
<path d="M 45,80 A 10,25 0 0,1 55,80" fill="none" stroke="#E2E8F0" strokeWidth="0.5"></path>
<path d="M 55,80 A 10,35 0 0,1 65,80" fill="none" stroke="#E2E8F0" strokeWidth="0.5"></path>
<path d="M 65,80 A 10,20 0 0,1 75,80" fill="none" stroke="#E2E8F0" strokeWidth="0.5"></path>
<path d="M 75,80 A 10,35 0 0,1 85,80" fill="none" stroke="#E2E8F0" strokeWidth="0.5"></path>
<path d="M 85,80 A 10,45 0 0,1 95,80" fill="none" stroke="#E2E8F0" strokeWidth="0.5"></path>
</svg>
<div className="flex flex-col items-center gap-2 w-6 z-10">
<div className="w-full h-6 bg-white border border-gray-100 shadow-sm rounded-full r-bar-anim r-bar-0"></div>
<span className="text-[10px] font-medium text-gray-400">
                          JUL
                        </span>
</div>
<div className="flex flex-col items-center gap-2 w-6 z-10">
<div className="w-full h-[45px] bg-white border border-gray-100 shadow-sm rounded-full r-bar-anim r-bar-1"></div>
<span className="text-[10px] font-medium text-gray-400">
                          AUG
                        </span>
</div>
<div className="flex flex-col items-center gap-2 w-6 z-10">
<div className="w-full h-[35px] bg-white border border-gray-100 shadow-sm rounded-full r-bar-anim r-bar-2"></div>
<span className="text-[10px] font-medium text-gray-400">
                          SEP
                        </span>
</div>
<div className="flex flex-col items-center gap-2 w-[28px] relative z-20">
<div className="absolute -top-7 bg-white border border-gray-100 text-gray-800 px-2 py-0.5 rounded-md text-[9px] font-semibold shadow-md whitespace-nowrap r-tip">
                          $39.2k
                        </div>
<div className="w-full h-[75px] rounded-full overflow-hidden border-2 border-white bg-gradient-to-t from-emerald-300 to-emerald-400 shadow-[0_6px_15px_-3px_rgba(16,185,129,0.4)] relative r-bar-anim r-bar-oct">
<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_25%,rgba(255,255,255,0.2)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.2)_75%,rgba(255,255,255,0.2)_100%)] bg-[length:10px_10px]"></div>
</div>
<span className="text-[10px] font-semibold text-gray-900">
                          OCT
                        </span>
</div>
<div className="flex flex-col items-center gap-2 w-6 z-10">
<div className="w-full h-8 bg-white border border-gray-100 shadow-sm rounded-full r-bar-anim r-bar-4"></div>
<span className="text-[10px] font-medium text-gray-400">
                          NOV
                        </span>
</div>
<div className="flex flex-col items-center gap-2 w-6 z-10">
<div className="w-full h-[40px] bg-white border border-gray-100 shadow-sm rounded-full r-bar-anim r-bar-5"></div>
<span className="text-[10px] font-medium text-gray-400">
                          DEC
                        </span>
</div>
<div className="flex flex-col items-center gap-2 w-6 z-10">
<div className="w-full h-[25px] bg-white border border-gray-100 shadow-sm rounded-full r-bar-anim r-bar-6"></div>
<span className="text-[10px] font-medium text-gray-400">
                          JAN
                        </span>
</div>
<div className="flex flex-col items-center gap-2 w-6 z-10">
<div className="w-full h-[35px] bg-white border border-gray-100 shadow-sm rounded-full r-bar-anim r-bar-7"></div>
<span className="text-[10px] font-medium text-gray-400">
                          FEB
                        </span>
</div>
<div className="flex flex-col items-center gap-2 w-6 z-10">
<div className="w-full h-[55px] bg-white border border-gray-100 shadow-sm rounded-full r-bar-anim r-bar-8"></div>
<span className="text-[10px] font-medium text-gray-400">
                          MAR
                        </span>
</div>
<div className="flex flex-col items-center gap-2 w-6 z-10">
<div className="w-full h-[30px] bg-white border border-gray-100 shadow-sm rounded-full r-bar-anim r-bar-9"></div>
<span className="text-[10px] font-medium text-gray-400">
                          APR
                        </span>
</div>
</div>
</div>
<div className="pt-1 px-3 pb-2 shrink-0">
<h3 className="text-xl font-medium tracking-tight text-gray-900">
                      Growth Forecasting
                    </h3>
<p className="text-[13px] text-gray-500 mt-1 leading-relaxed truncate">
                      Integrated prediction engine modeling future growth
                      trajectories based on current momentum.
                    </p>
</div>
</div>
</div>
<div className="xl:col-span-4 flex flex-col gap-6 h-full">
<div className="bg-white rounded-[24px] p-5 border border-gray-100 shadow-sm shrink-0">
<div className="flex justify-between items-center mb-5">
<div className="">
<h3 className="text-[15px] font-medium text-gray-900">
                        Sales Targets
                      </h3>
<p className="text-[11px] text-gray-400 font-medium">
                        Quick actions
                      </p>
</div>
<button className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-gray-700 bg-white rounded-xl border border-gray-200/80 hover:bg-gray-50 transition-colors shadow-sm">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
                      Update Target
                    </button>
</div>
<div className="flex items-center justify-between gap-4">
<div className="flex-1 flex flex-col border-[#F0F2F1] border-r pr-4 justify-between">
<div className="flex flex-col space-y-1">
<div className="flex items-baseline gap-1.5">
<span className="text-3xl font-medium tracking-tight text-slate-900">
                            8,458
                          </span>
<span className="flex items-center text-[10px] font-medium text-[#50C878]">
                            +1.124
                          </span>
</div>
<p className="text-[11px] font-normal text-slate-400 leading-tight">
                          Your sales increased this month by around 58%
                        </p>
</div>
<div className="flex justify-between items-center mt-3">
<span className="text-lg font-bold tracking-tighter">
                          $142.8k
                          <span className="text-[10px] text-[#50C878]">+14%</span>
</span>
</div>
</div>
<div className="flex flex-col items-center justify-center shrink-0">
<div className="relative w-24 h-24 rounded-full bg-[#F9FBFA] flex items-center justify-center shadow-[inset_0_-10px_25px_rgba(80,200,120,0.05),0_25px_50px_rgba(0,0,0,0.04)] border border-white">
<div className="absolute inset-2 rounded-full" style={{background: 'conic-gradient(#50C878 0% 72%, #F0F2F1 72% 100%)', mask: 'radial-gradient(transparent 58%, black 60%)', WebkitMask: 'radial-gradient(transparent 58%, black 60%)'}}></div>
<div className="w-14 h-14 rounded-full bg-white shadow-[0_15px_35px_rgba(0,0,0,0.07),inset_0_2px_2px_white] border border-[#F0F2F1] flex flex-col items-center justify-center">
<span className="text-[8px] font-bold text-[#A0A0A0] uppercase tracking-widest mb-0.5">
                            Quota
                          </span>
<span className="text-sm font-black text-[#1A1A1A]">
                            72%
                          </span>
</div>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-[24px] p-5 border border-gray-100 shadow-sm flex-1 flex flex-col min-h-0 overflow-hidden">
<div className="flex justify-between items-center mb-4 sticky top-0 bg-white/95 backdrop-blur-sm z-10 pb-1 shrink-0">
<h3 className="text-[15px] font-medium text-gray-900">
                      Recent Activity
                    </h3>
<button className="flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-gray-600 bg-[#F4F5F7] rounded-md border border-gray-200/50">
                      7d
                      <svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
</div>
<div className="flex justify-between items-center text-[10px] font-medium text-gray-400 mb-3 px-1 shrink-0">
<div className="flex items-center gap-1 cursor-pointer hover:text-gray-600">
                      ↑↓ Deal Name
                    </div>
<span>Value</span>
</div>
<div className="flex-1 flex flex-col gap-4 overflow-y-auto custom-scrollbar pr-1">
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="">
<div className="text-xs font-medium text-gray-900">
                            Acme Corp Expansion
                          </div>
<div className="text-[10px] text-gray-400 mt-0.5 font-medium">
                            Closed Won • Today
                          </div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-medium text-gray-900">
                          +$125,000
                        </div>
<div className="text-[10px] text-[#50C878] mt-0.5 font-medium">
                          High Intent
                        </div>
</div>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="">
<div className="text-xs font-medium text-gray-900">
                            Global Tech Renewal
                          </div>
<div className="text-[10px] text-gray-400 mt-0.5 font-medium">
                            At Risk • 2d ago
                          </div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-medium text-gray-900">
                          $45,000
                        </div>
<div className="text-[10px] text-orange-400 mt-0.5 font-medium">
                          Action Needed
                        </div>
</div>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="">
<div className="text-xs font-medium text-gray-900">
                            Nexa Industries
                          </div>
<div className="text-[10px] text-gray-400 mt-0.5 font-medium">
                            Proposal Sent • 3d ago
                          </div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-medium text-gray-900">
                          $85,000
                        </div>
<div className="text-[10px] text-blue-400 mt-0.5 font-medium">
                          On Track
                        </div>
</div>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="">
<div className="text-xs font-medium text-gray-900">
                            Zenith Solutions
                          </div>
<div className="text-[10px] text-gray-400 mt-0.5 font-medium">
                            Closed Lost • 4d ago
                          </div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-medium text-gray-900">
                          -$32,000
                        </div>
<div className="text-[10px] text-rose-400 mt-0.5 font-medium">
                          Lost to competitor
                        </div>
</div>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="">
<div className="text-xs font-medium text-gray-900">
                            Apex Innovations
                          </div>
<div className="text-[10px] text-gray-400 mt-0.5 font-medium">
                            Demo Scheduled • 5d ago
                          </div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-medium text-gray-900">
                          $18,000
                        </div>
<div className="text-[10px] text-purple-400 mt-0.5 font-medium">
                          Moving fast
                        </div>
</div>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="">
<div className="text-xs font-medium text-gray-900">
                            Orbit Systems
                          </div>
<div className="text-[10px] text-gray-400 mt-0.5 font-medium">
                            Discovery Call • 6d ago
                          </div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-medium text-gray-900">
                          $54,000
                        </div>
<div className="text-[10px] text-gray-400 mt-0.5 font-medium">
                          Early stage
                        </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
<style className="">
          .custom-scrollbar::-webkit-scrollbar {
              width: 4px;
              height: 4px;
          }

          .custom-scrollbar::-webkit-scrollbar-track {
              background: transparent;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb {
              background-color: #E5E7EB;
              border-radius: 20px;
          }

          .custom-scrollbar:hover::-webkit-scrollbar-thumb {
              background-color: #D1D5DB;
          }
        </style>
</div>
</section>
<section className="w-full max-w-7xl z-10 mt-8 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">

<div className="flex justify-between items-center mb-8 pb-8 border-b border-slate-200/80 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<span className="text-sm font-medium tracking-widest text-slate-500 uppercase">
          Features overview
        </span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll mb-16 gap-x-8 gap-y-8 items-start">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 leading-[1.15]">
          You set the revenue
          <br className="hidden lg:block"/>
          targets. Revio predicts the rest.
        </h2>
<p className="text-xl text-slate-600 leading-relaxed md:pt-2 max-w-lg">
          Revio's AI monitors your sales pipeline and forecasts revenue for you,
          24/7. Perfect for leaders and reps alike. No coding, no guesswork.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 gap-x-6 gap-y-6">
<style className="">
          @keyframes needle-sweep {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(18deg); }
          }
          @keyframes soft-pulse {
            0%, 100% { opacity: 0.7; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.05); }
          }
          @keyframes soft-pulse-opacity {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 1; }
          }
          @keyframes signal-flow {
            0% { transform: translateX(-100%); opacity: 0; }
            50% { opacity: 0.5; }
            100% { transform: translateX(100%); opacity: 0; }
          }
          @keyframes premium-shimmer {
            0% { transform: translateX(-150%) skewX(-15deg); }
            100% { transform: translateX(200%) skewX(-15deg); }
          }
          @keyframes gentle-float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
          @keyframes radar-breathe {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.03); }
          }
          @keyframes terminal-blink {
            0%, 49% { opacity: 1; }
            50%, 100% { opacity: 0; }
          }
          @keyframes log-scroll {
            0%, 25% { transform: translateY(0); }
            35%, 75% { transform: translateY(-32px); }
            85%, 100% { transform: translateY(0); }
          }
        </style>

<div className="flex flex-col overflow-hidden [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll bg-white h-[480px] border-slate-200 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm">
<div className="flex justify-between text-sm font-medium tracking-widest text-slate-400 uppercase relative z-20">
<span className="">Pipeline Velocity</span>
<span>#1</span>
</div>

<div className="flex-1 flex flex-col z-10 w-full max-w-[260px] mt-6 mr-auto ml-auto relative justify-center">
<div className="relative w-full aspect-[2/1] overflow-visible">
<div className="absolute inset-0 bg-[#50C878]/10 blur-3xl rounded-full translate-y-1/2 animate-[soft-pulse_5s_ease-in-out_infinite]"></div>
<svg className="z-10 overflow-visible relative drop-shadow-md w-[260px] h-[130px]" data-icon-replaced="true" strokeWidth="2" style={{color: 'rgb(30, 41, 59)', width: '260px', height: '130px'}} viewbox="0 0 200 100">
<path className="" d="M 10 95 A 90 90 0 0 1 190 95" fill="none" stroke="#f1f5f9" stroke-dasharray="3 5" strokeWidth="12"></path>
<path className="animate-[soft-pulse-opacity_4s_ease-in-out_infinite]" d="M 10 95 A 90 90 0 0 1 127.8 9.4" fill="none" stroke="#50C878" stroke-dasharray="3 5" strokeWidth="12"></path>
<circle className="" cx="100" cy="95" fill="white" r="18" stroke="#e2e8f0" strokeWidth="6"></circle>
<path className="animate-[needle-sweep_8s_ease-in-out_infinite]" d="M 96 95 L 104 95 L 126 14 L 122 13 Z" fill="#334155" style={{transformOrigin: '100px 95px'}}></path>
</svg>
</div>
<div className="flex items-center gap-6 mt-10">
<div className="flex-1 h-2 bg-slate-100 rounded-full relative">
<div className="absolute left-0 top-0 bottom-0 w-1/2 bg-slate-200 rounded-full"></div>
<div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-8 bg-white border-2 border-slate-200 rounded-md flex flex-col justify-center items-center gap-[3px] shadow-sm cursor-pointer">
<div className="w-[3px] h-[3px] bg-[#50C878] rounded-full shadow-[0_0_8px_rgba(80,200,120,0.8)] animate-[soft-pulse-opacity_2s_ease-in-out_infinite]" style={{animationDelay: '0s'}}></div>
<div className="w-[3px] h-[3px] bg-[#50C878] rounded-full shadow-[0_0_8px_rgba(80,200,120,0.8)] animate-[soft-pulse-opacity_2s_ease-in-out_infinite]" style={{animationDelay: '0.3s'}}></div>
<div className="w-[3px] h-[3px] bg-[#50C878] rounded-full shadow-[0_0_8px_rgba(80,200,120,0.8)] animate-[soft-pulse-opacity_2s_ease-in-out_infinite]" style={{animationDelay: '0.6s'}}></div>
</div>
</div>
<div className="flex flex-col gap-3 min-w-[90px]">
<div className="flex items-center gap-2 cursor-pointer group">
<div className="w-4 h-4 rounded-full border-[3px] border-slate-200 flex items-center justify-center relative bg-white">
<div className="w-1.5 h-1.5 bg-[#50C878] rounded-full shadow-[0_0_8px_rgba(80,200,120,0.8)] animate-[soft-pulse_3s_ease-in-out_infinite]"></div>
</div>
<span className="text-sm font-medium tracking-widest text-slate-900">
                    ENTERPRISE
                  </span>
</div>
<div className="flex items-center gap-2 cursor-pointer group">
<div className="w-4 h-4 rounded-full border-[3px] border-slate-200 flex items-center justify-center bg-white"></div>
<span className="text-sm font-medium tracking-widest text-slate-400 group-hover:text-slate-600 transition-colors">
                    MID-MARKET
                  </span>
</div>
</div>
</div>
</div>

<div className="mt-auto text-center relative z-20 pt-8">
<h3 className="text-lg font-normal text-slate-900 text-left mb-2">
              Spot trends instantly.
            </h3>
<p className="leading-relaxed text-base text-slate-500 text-left px-2">
              Get instant alerts on key pipeline movements or when deals are at
              risk.
            </p>
</div>
</div>

<div className="flex flex-col overflow-hidden [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll bg-white h-[480px] border-slate-200 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm">
<div className="flex justify-between text-sm font-medium tracking-widest text-slate-400 uppercase relative z-20">
<span className="">AI Forecast Engine</span>
<span>#2</span>
</div>

<div className="flex-1 flex items-center justify-center relative w-full mt-2">

<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col gap-[14px] opacity-40 z-0">
<div className="h-[2px] w-full bg-slate-200 relative overflow-hidden">
<div className="absolute inset-y-0 left-0 w-1/2 bg-[#50C878]/50 animate-[signal-flow_3s_linear_infinite]" style={{animationDelay: '0s'}}></div>
</div>
<div className="h-[2px] w-full bg-slate-200 relative overflow-hidden">
<div className="absolute inset-y-0 left-0 w-1/2 bg-[#50C878]/50 animate-[signal-flow_3s_linear_infinite]" style={{animationDelay: '0.8s'}}></div>
</div>
<div className="h-[2px] w-full bg-slate-200 relative overflow-hidden">
<div className="absolute inset-y-0 left-0 w-1/2 bg-[#50C878]/50 animate-[signal-flow_3s_linear_infinite]" style={{animationDelay: '1.6s'}}></div>
</div>
<div className="h-[2px] w-full bg-slate-200 relative overflow-hidden">
<div className="absolute inset-y-0 left-0 w-1/2 bg-[#50C878]/50 animate-[signal-flow_3s_linear_infinite]" style={{animationDelay: '2.4s'}}></div>
</div>
</div>

<div className="relative z-10 w-[140px] h-[140px] bg-gradient-to-br from-white to-slate-50 rounded-[1.5rem] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1),inset_0_2px_0_rgba(255,255,255,1)] border border-slate-200 flex flex-col justify-between p-2.5">

<div className="flex justify-between w-full px-0.5">
<div className="w-2 h-2 rounded-full bg-slate-200 shadow-inner"></div>
<div className="w-2 h-2 rounded-full bg-slate-200 shadow-inner"></div>
</div>

<div className="w-16 h-16 rounded-2xl bg-[#f8fafc] border border-slate-200 mx-auto flex items-center justify-center shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] relative overflow-hidden">
<div className="absolute inset-0 bg-[#50C878]/10 blur-xl animate-[soft-pulse_4s_ease-in-out_infinite]"></div>
<div className="grid grid-cols-3 gap-[3px] relative z-10">

<div className="w-2 h-2 bg-slate-300 rounded-[2px] animate-[soft-pulse-opacity_3s_ease-in-out_infinite]" style={{animationDelay: '0.1s'}}></div>
<div className="w-2 h-2 bg-[#50C878] rounded-[2px] shadow-[0_0_8px_rgba(80,200,120,0.8)] animate-[soft-pulse-opacity_3s_ease-in-out_infinite]" style={{animationDelay: '0.5s'}}></div>
<div className="w-2 h-2 bg-slate-300 rounded-[2px] animate-[soft-pulse-opacity_3s_ease-in-out_infinite]" style={{animationDelay: '0.9s'}}></div>
<div className="w-2 h-2 bg-[#50C878] rounded-[2px] shadow-[0_0_8px_rgba(80,200,120,0.8)] animate-[soft-pulse-opacity_3s_ease-in-out_infinite]" style={{animationDelay: '1.3s'}}></div>
<div className="w-2 h-2 bg-[#3BA662] rounded-[2px] shadow-[0_0_10px_rgba(80,200,120,1)] animate-[soft-pulse_3s_ease-in-out_infinite]"></div>
<div className="w-2 h-2 bg-[#50C878] rounded-[2px] shadow-[0_0_8px_rgba(80,200,120,0.8)] animate-[soft-pulse-opacity_3s_ease-in-out_infinite]" style={{animationDelay: '1.7s'}}></div>
<div className="w-2 h-2 bg-slate-300 rounded-[2px] animate-[soft-pulse-opacity_3s_ease-in-out_infinite]" style={{animationDelay: '2.1s'}}></div>
<div className="w-2 h-2 bg-[#50C878] rounded-[2px] shadow-[0_0_8px_rgba(80,200,120,0.8)] animate-[soft-pulse-opacity_3s_ease-in-out_infinite]" style={{animationDelay: '2.5s'}}></div>
<div className="w-2 h-2 bg-slate-300 rounded-[2px] animate-[soft-pulse-opacity_3s_ease-in-out_infinite]" style={{animationDelay: '2.9s'}}></div>
</div>
</div>

<div className="flex justify-between w-full px-0.5">
<div className="w-2 h-2 rounded-full bg-slate-200 shadow-inner"></div>
<div className="w-2 h-2 rounded-full bg-slate-200 shadow-inner"></div>
</div>
</div>
</div>

<div className="mt-auto text-center relative z-20 pt-8">
<h3 className="text-lg font-normal text-slate-900 text-left mb-2">
              AI-Powered precision
            </h3>
<p className="leading-relaxed text-base text-slate-500 text-left pr-2 pl-2">
              Smart and accurate AI-driven engine makes data-backed predictions
              for optimal sales results.
            </p>
</div>
</div>

<div className="flex flex-col overflow-hidden [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll bg-white h-[480px] border-slate-200 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm">
<style>
            @keyframes seq-dot-1 {
              0%, 95%, 100% { opacity: 0.3; transform: scale(0.8); background-color: #9ca3af; box-shadow: none; }
              3% { opacity: 1; transform: scale(1.3); background-color: #34d399; box-shadow: 0 0 10px rgba(52,211,153,0.8); }
              6%, 90% { opacity: 1; transform: scale(1); background-color: #34d399; box-shadow: 0 0 4px rgba(52,211,153,0.4); }
            }
            @keyframes seq-check-1 {
              0%, 4%, 95%, 100% { opacity: 0; transform: scale(0.5); }
              7% { opacity: 1; transform: scale(1.2); }
              10%, 90% { opacity: 1; transform: scale(1); }
            }
            @keyframes seq-sweep-1 {
              0%, 8%, 95%, 100% { transform: translateX(-100%); opacity: 0; }
              10%0; }
            }

            @keyframes seq-dot-2 {
              0%, 20%, 95%, 100% { opacity: 0.3; transform: scale(0.8); background-color: #9ca3af; box-shadow: none; }
              23% { opacity: 1; transform: scale(1.3); background-color: #34d399; box-shadow: 0 0 10px rgba(52,211,153,0.8); }
              26%, 90% { opacity: 1; transform: scale(1); background-color: #34d399; box-shadow: 0 0 4px rgba(52,211,153,0.4); }
            }
            @keyframes seq-check-2 {
              0%, 24%, 95%, 100% { opacity: 0; transform: scale(0.5); }
              27% { opacity: 1; transform: scale(1.2); }
              30%, 90% { opacity: 1; transform: scale(1); }
            }
            @keyframes seq-sweep-2 {
              0%, 28%, 95%, 100% { transform: translateX(-100%); opacity: 0; }
              30% { opacity: 1; }
              38% { transform: translateX(200%); opacity: 0; }
            }

            @keyframes seq-dot-3 {
              0%, 40%, 95%, 100% { opacity: 0.3; transform: scale(0.8); background-color: #9ca3af; box-shadow: none; }
              43% { opacity: 1; transform: scale(1.3); background-color: #34d399; box-shadow: 0 0 10px rgba(52,211,153,0.8); }
              46%, 90% { opacity: 1; transform: scale(1); background-color: #34d399; box-shadow: 0 0 4px rgba(52,211,153,0.4); }
            }
            @keyframes seq-check-3 {
              0%, 44%, 95%, 100% { opacity: 0; transform: scale(0.5); }
              47% { opacity: 1; transform: scale(1.2); }
              50%, 90% { opacity: 1; transform: scale(1); }
            }
            @keyframes seq-sweep-3 {
              0%, 48%, 95%, 100% { transform: translateX(-100%); opacity: 0; }
              50% { opacity: 1; }
              58% { transform: translateX(200%); opacity: 0; }
            }

            @keyframes seq-card-glow {
              0%, 60%, 80%, 100% { transform: scale(1); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); border-color: rgba(52,211,153,1); }
              65% { transform: scale(1.02); box-shadow: 0 20px 40px -10px rgba(16,185,129,0.5); border-color: rgba(16,185,129,1); }
              75% { transform: scale(1); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); border-color: rgba(52,211,153,1); }
            }
            @keyframes seq-card-sweep {
              0%, 60%, 85%, 100% { transform: translateX(-100%) skewX(-15deg); opacity: 0; }
              62% { opacity: 1; }
              75% { transform: translateX(200%) skewX(-15deg); opacity: 0; }
            }
          </style>
<div className="flex justify-between text-sm font-medium tracking-widest text-slate-400 uppercase relative z-20">
<span className="">Custom Dashboards</span>
<span className="">#3</span>
</div>

<div className="flex-1 flex items-center justify-center relative w-full pt-4">
<div className="overflow-hidden flex flex-col z-0 bg-gradient-to-br from-[#f2fdf7] to-[#fbfffb] w-full h-full border-slate-100 border rounded-2xl pt-4 pr-4 pb-4 pl-4 relative justify-center">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/40 rounded-full blur-2xl pointer-events-none z-0"></div>
<div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-50/50 rounded-full blur-xl pointer-events-none z-0"></div>
<div className="flex flex-col space-y-2 z-10 w-full mb-3 mt-1 px-1">

<div className="w-full bg-white/90 backdrop-blur-sm rounded-xl p-2.5 shadow-[0_4px_10px_-2px_rgba(0,0,0,0.04)] border border-emerald-50 flex justify-between items-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-100/40 to-transparent" style={{animation: 'seq-sweep-1 8s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}></div>
<div className="flex items-center space-x-2 relative z-10">
<div className="w-1.5 h-1.5 rounded-full bg-gray-400" style={{animation: 'seq-dot-1 8s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}></div>
<div className="flex flex-col">
<span className="text-[10px] font-semibold text-gray-700 tracking-wide uppercase">
                        Pipeline_Stage
                      </span>
</div>
</div>
<div className="w-5 h-5 rounded-[4px] bg-gradient-to-b from-emerald-300 to-emerald-500 shadow-sm flex items-center justify-center border border-emerald-400 relative z-10" style={{animation: 'seq-check-1 8s cubic-bezier(0.34, 1.56, 0.64, 1) infinite'}}>
<svg className="text-white" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
</div>

<div className="w-full bg-white/90 backdrop-blur-sm rounded-xl p-2.5 shadow-[0_4px_10px_-2px_rgba(0,0,0,0.04)] border border-emerald-50 flex justify-between items-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-100/40 to-transparent" style={{animation: 'seq-sweep-2 8s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}></div>
<div className="flex items-center space-x-2 relative z-10">
<div className="w-1.5 h-1.5 rounded-full bg-gray-400" style={{animation: 'seq-dot-2 8s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}></div>
<div className="flex flex-col">
<span className="text-[10px] font-semibold text-gray-700 tracking-wide uppercase">
                        Revenue_Track
                      </span>
</div>
</div>
<div className="w-5 h-5 rounded-[4px] bg-gradient-to-b from-emerald-300 to-emerald-500 shadow-sm flex items-center justify-center border border-emerald-400 relative z-10" style={{animation: 'seq-check-2 8s cubic-bezier(0.34, 1.56, 0.64, 1) infinite'}}>
<svg className="text-white" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
</div>

<div className="w-full bg-white/90 backdrop-blur-sm rounded-xl p-2.5 shadow-[0_4px_10px_-2px_rgba(0,0,0,0.04)] border border-emerald-50 flex justify-between items-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-100/40 to-transparent" style={{animation: 'seq-sweep-3 8s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}></div>
<div className="flex items-center space-x-2 relative z-10">
<div className="w-1.5 h-1.5 rounded-full bg-gray-400" style={{animation: 'seq-dot-3 8s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}></div>
<div className="flex flex-col">
<span className="text-[10px] font-semibold text-gray-700 tracking-wide uppercase">
                        Territory_Map
                      </span>
</div>
</div>
<div className="w-5 h-5 rounded-[4px] bg-gradient-to-b from-emerald-300 to-emerald-500 shadow-sm flex items-center justify-center border border-emerald-400 relative z-10" style={{animation: 'seq-check-3 8s cubic-bezier(0.34, 1.56, 0.64, 1) infinite'}}>
<svg className="text-white" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
</div>
</div>

<div className="w-full mt-auto bg-gradient-to-b from-[#34d399] to-[#10b981] rounded-xl p-3 shadow-md relative overflow-hidden flex justify-between items-center z-10 border border-emerald-400 group" style={{animation: 'seq-card-glow 8s ease-in-out infinite'}}>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" style={{animation: 'seq-card-sweep 8s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}></div>
<div className="flex flex-col relative z-10">
<span className="text-[10px] font-medium text-emerald-50 uppercase tracking-wider mb-0.5">
                    Custom Layout
                  </span>
<span className="text-xl font-semibold text-white tracking-tight leading-none drop-shadow-sm">
                    Personalized
                  </span>
</div>
<div className="w-8 h-8 rounded-lg bg-white/20 shadow-inner backdrop-blur-md flex items-center justify-center border border-white/20 relative z-10">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M4 21v-7"></path>
<path d="M4 10V3"></path>
<path d="M12 21v-9"></path>
<path d="M12 8V3"></path>
<path d="M20 21v-5"></path>
<path d="M20 12V3"></path>
<path d="M1 14h6"></path>
<path d="M9 8h6"></path>
<path d="M17 16h6"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="mt-auto text-center relative z-20 pt-8">
<h3 className="text-lg font-normal text-slate-900 text-left mb-2">
              Tailor your experience
            </h3>
<p className="leading-relaxed text-base text-slate-500 text-left px-2">
              Customize your dashboards to fit your unique sales process,
              creating just for you.
            </p>
</div>
</div>

<div className="flex flex-col overflow-hidden [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll bg-white h-[480px] border-slate-200 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm">
<div className="flex justify-between text-sm font-medium tracking-widest text-slate-400 uppercase relative z-20">
<span className="">Lead Attribution</span>
<span className="">#4</span>
</div>

<div className="flex-1 flex items-center justify-center relative w-full pt-4">
<div className="overflow-hidden flex flex-col z-0 bg-gradient-to-br from-[#f0f9ff] to-[#fcfcff] w-full h-full border-slate-100 border rounded-2xl relative justify-center items-center">
<div className="absolute top-4 right-4 z-20">
<button className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/60 backdrop-blur-sm border border-sky-100 text-[10px] font-medium text-gray-700 shadow-sm">
                  Sources
                  <svg className="text-sky-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
</div>
<div className="relative w-[180px] h-[180px] z-10 scale-90 sm:scale-100 mt-2 animate-[gentle-float_6s_ease-in-out_infinite]">
<style>
                  @keyframes radarStrokeDraw {
                    0%, 5% { stroke-dashoffset: 200; opacity: 1; }
                    35%, 85% { stroke-dashoffset: 0; opacity: 1; }
                    90%, 100% { stroke-dashoffset: 0; opacity: 0; }
                  }
                  @keyframes radarFillDraw {
                    0%, 25% { opacity: 0; transform: scale(0.98); }
                    38%, 85% { opacity: 1; transform: scale(1); }
                    90%, 100% { opacity: 0; transform: scale(0.98); }
                  }
                  @keyframes radarPoint1 {
                    0%, 5% { transform: scale(0); opacity: 0; }
                    10%, 85% { transform: scale(1); opacity: 1; }
                    90%, 100% { transform: scale(0); opacity: 0; }
                  }
                  @keyframes radarPoint2 {
                    0%, 12% { transform: scale(0); opacity: 0; }
                    17%, 85% { transform: scale(1); opacity: 1; }
                    90%, 100% { transform: scale(0); opacity: 0; }
                  }
                  @keyframes radarPoint3 {
                    0%, 19% { transform: scale(0); opacity: 0; }
                    24%, 85% { transform: scale(1); opacity: 1; }
                    90%, 100% { transform: scale(0); opacity: 0; }
                  }
                  @keyframes radarPoint4 {
                    0%, 25% { transform: scale(0); opacity: 0; }
                    30%, 85% { transform: scale(1); opacity: 1; }
                    90%, 100% { transform: scale(0); opacity: 0; }
                  }
                  @keyframes radarPoint5 {
                    0%, 32% { transform: scale(0); opacity: 0; }
                    37%, 85% { transform: scale(1); opacity: 1; }
                    90%, 100% { transform: scale(0); opacity: 0; }
                  }

                  .radar-stroke-anim {
                    stroke-dasharray: 200;
                    animation: radarStrokeDraw 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                  }
                  .radar-fill-anim {
                    transform-origin: 50px 50px;
                    animation: radarFillDraw 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                  }
                  .radar-pt-1 { animation: radarPoint1 6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite; }
                  .radar-pt-2 { animation: radarPoint2 6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite; }
                  .radar-pt-3 { animation: radarPoint3 6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite; }
                  .radar-pt-4 { animation: radarPoint4 6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite; }
                  .radar-pt-5 { animation: radarPoint5 6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite; }
                </style>
<svg className="w-full h-full overflow-visible" viewbox="0 0 100 100">
<defs>
<lineargradient id="radarGrad" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#38BDF8" stop-opacity="0.85"></stop>
<stop offset="100%" stop-color="#818CF8" stop-opacity="0.85"></stop>
</lineargradient>
</defs>

<polygon fill="none" points="50,5 93,36 76,86 24,86 7,36" stroke="#E2E8F0" strokeWidth="1.5"></polygon>
<polygon fill="none" points="50,23 80,45 68,75 32,75 20,45" stroke="#E2E8F0" strokeWidth="1.5"></polygon>
<polygon fill="none" points="50,40 65,51 59,65 41,65 35,51" stroke="#E2E8F0" strokeWidth="1.5"></polygon>

<line stroke="#E2E8F0" strokeWidth="1.5" x1="50" x2="50" y1="50" y2="5"></line>
<line stroke="#E2E8F0" strokeWidth="1.5" x1="50" x2="93" y1="50" y2="36"></line>
<line stroke="#E2E8F0" strokeWidth="1.5" x1="50" x2="76" y1="50" y2="86"></line>
<line stroke="#E2E8F0" strokeWidth="1.5" x1="50" x2="24" y1="50" y2="86"></line>
<line stroke="#E2E8F0" strokeWidth="1.5" x1="50" x2="7" y1="50" y2="36"></line>

<polygon className="drop-shadow-md radar-fill-anim" fill="url(#radarGrad)" points="50,20 80,45 55,75 30,86 20,45" stroke="none"></polygon>

<path className="drop-shadow-md radar-stroke-anim" d="M 50,20 L 80,45 L 55,75 L 30,86 L 20,45 Z" fill="none" stroke="#0EA5E9" strokeLinejoin="round" strokeWidth="1.5"></path>

<circle className="radar-pt-1" cx="50" cy="20" fill="white" r="2.5" stroke="#0EA5E9" strokeWidth="1.5" style={{transformOrigin: '50px 20px'}}></circle>
<circle className="radar-pt-2" cx="80" cy="45" fill="white" r="2.5" stroke="#0EA5E9" strokeWidth="1.5" style={{transformOrigin: '80px 45px'}}></circle>
<circle className="radar-pt-3" cx="55" cy="75" fill="white" r="2.5" stroke="#0EA5E9" strokeWidth="1.5" style={{transformOrigin: '55px 75px'}}></circle>
<circle className="radar-pt-4" cx="30" cy="86" fill="white" r="2.5" stroke="#0EA5E9" strokeWidth="1.5" style={{transformOrigin: '30px 86px'}}></circle>
<circle className="radar-pt-5" cx="20" cy="45" fill="white" r="2.5" stroke="#0EA5E9" strokeWidth="1.5" style={{transformOrigin: '20px 45px'}}></circle>
</svg>

<div className="absolute -top-4 left-1/2 -translate-x-1/2 text-center flex flex-col items-center">
<span className="text-[9px] text-gray-400 font-medium uppercase tracking-wide">
                    Organic
                  </span>
<span className="text-[11px] font-semibold text-gray-900 leading-none mt-1">
                    589
                  </span>
</div>
<div className="absolute top-6 -right-6 text-left font-medium uppercase tracking-wide text-gray-400 text-[9px] flex flex-col items-start">
                  Direct
                  <span className="text-[11px] font-semibold text-gray-900 leading-none mt-1">
                    402
                  </span>
</div>
<div className="absolute bottom-6 -right-5 text-left flex flex-col items-start">
<span className="text-[9px] text-gray-400 font-medium uppercase tracking-wide">
                    Referral
                  </span>
<span className="text-[11px] font-semibold text-gray-900 leading-none mt-1">
                    205
                  </span>
</div>
<div className="absolute -bottom-4 right-8 text-right flex flex-col items-start">
<span className="text-[9px] text-gray-400 font-medium uppercase tracking-wide">
                    Paid
                  </span>
<span className="text-[11px] font-semibold text-gray-900 leading-none mt-1">
                    82
                  </span>
</div>
<div className="absolute -bottom-2 -left-4 text-left flex flex-col items-start">
<span className="text-[9px] text-gray-400 font-medium uppercase tracking-wide">
                    Social
                  </span>
<span className="text-[11px] font-semibold text-gray-900 leading-none mt-1">
                    317
                  </span>
</div>
<div className="absolute top-10 -left-8 text-left flex flex-col items-start">
<span className="text-[9px] text-gray-400 font-medium uppercase tracking-wide">
                    Events
                  </span>
<span className="text-[11px] font-semibold text-gray-900 leading-none mt-1">
                    356
                  </span>
</div>
</div>
</div>
</div>

<div className="mt-auto text-center relative z-20 pt-8">
<h3 className="text-lg font-normal text-slate-900 text-left mb-2">
              Channel ROI
            </h3>
<p className="leading-relaxed text-base text-slate-500 text-left px-2">
              Attribution modeling mapped to identify the most effective lead
              acquisition channels.
            </p>
</div>
</div>

<div className="flex flex-col overflow-hidden [animation:animationIn_0.8s_ease-out_0.7s_both] animate-on-scroll bg-white h-[480px] border-slate-200 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm">
<style>
            @keyframes drawSeg1 { 0%, 6% { stroke-dasharray: 0 220; } 14%, 90% { stroke-dasharray: 25 220; } 95%, 100% { stroke-dasharray: 0 220; } }
            @keyframes drawSeg2 { 0%, 12% { stroke-dasharray: 0 220; } 20%, 90% { stroke-dasharray: 35 220; } 95%, 100% { stroke-dasharray: 0 220; } }
            @keyframes drawSeg3 { 0%, 18% { stroke-dasharray: 0 220; } 26%, 90% { stroke-dasharray: 30 220; } 95%, 100% { stroke-dasharray: 0 220; } }
            @keyframes drawSeg4 { 0%, 24% { stroke-dasharray: 0 220; } 36%, 90% { stroke-dasharray: 80 220; } 95%, 100% { stroke-dasharray: 0 220; } }
            @keyframes drawSeg5 { 0%, 34% { stroke-dasharray: 0 220; } 48%, 90% { stroke-dasharray: 50 220; } 95%, 100% { stroke-dasharray: 0 220; } }
            @keyframes fadeInText { 0%, 45% { opacity: 0; transform: scale(0.95); } 52%, 90% { opacity: 1; transform: scale(1); } 95%, 100% { opacity: 0; transform: scale(0.95); } }
            .donut-seg-1 { animation: drawSeg1 8s cubic-bezier(0.25, 1, 0.5, 1) infinite; }
            .donut-seg-2 { animation: drawSeg2 8s cubic-bezier(0.25, 1, 0.5, 1) infinite; }
            .donut-seg-3 { animation: drawSeg3 8s cubic-bezier(0.25, 1, 0.5, 1) infinite; }
            .donut-seg-4 { animation: drawSeg4 8s cubic-bezier(0.25, 1, 0.5, 1) infinite; }
            .donut-seg-5 { animation: drawSeg5 8s cubic-bezier(0.25, 1, 0.5, 1) infinite; }
            .donut-text-container { animation: fadeInText 8s cubic-bezier(0.25, 1, 0.5, 1) infinite; }
          </style>
<div className="flex justify-between text-sm font-medium tracking-widest text-slate-400 uppercase relative z-20">
<span className="">Account Scoring</span>
<span>#5</span>
</div>

<div className="flex-1 flex items-center justify-center relative w-full pt-4">
<div className="overflow-hidden flex flex-col z-0 bg-gradient-to-br from-[#fffaf7] to-[#fffdfc] w-full h-full border-slate-100 border rounded-2xl p-4 relative justify-center items-center">
<div className="w-full flex justify-between items-start mb-6 relative z-20">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-50/50 border border-orange-100/50 flex items-center justify-center shadow-sm">
<svg className="text-orange-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<div className="">
<h3 className="text-[13px] font-semibold text-gray-900 leading-tight">
                      Archetypes
                    </h3>
</div>
</div>
</div>
<div className="flex-1 flex w-full items-center justify-between relative z-10 px-0 sm:px-2 gap-2">
<div className="relative w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] flex-shrink-0">
<svg className="w-full h-full -rotate-90 drop-shadow-sm relative z-10" viewbox="0 0 100 100">
<circle className="donut-seg-1" cx="50" cy="50" fill="none" r="35" stroke="#F1F5F9" stroke-dashoffset="0" strokeWidth="25" style={{strokeDasharray: '0 220'}}></circle>
<circle className="donut-seg-2" cx="50" cy="50" fill="none" r="35" stroke="#FF7B7B" stroke-dashoffset="-25" strokeWidth="25" style={{strokeDasharray: '0 220'}}></circle>
<circle className="donut-seg-3" cx="50" cy="50" fill="none" r="35" stroke="#4ECDC4" stroke-dashoffset="-60" strokeWidth="25" style={{strokeDasharray: '0 220'}}></circle>
<circle className="donut-seg-4" cx="50" cy="50" fill="none" r="35" stroke="#FFD166" stroke-dashoffset="-90" strokeWidth="25" style={{strokeDasharray: '0 220'}}></circle>
<circle className="donut-seg-5" cx="50" cy="50" fill="none" r="35" stroke="#A7F3D0" stroke-dashoffset="-170" strokeWidth="25" style={{strokeDasharray: '0 220'}}></circle>
</svg>
<div className="absolute top-0 right-0 translate-x-1 sm:translate-x-2 -translate-y-2 z-20 donut-text-container opacity-0">
<div className="bg-white border border-gray-100 text-gray-700 px-2 py-0.5 rounded-md text-[9px] font-semibold shadow-sm animate-[gentle-float_4s_ease-in-out_infinite]">
                      12,842
                    </div>
</div>
</div>
<div className="flex flex-col gap-2 relative z-10">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#4ECDC4] shadow-sm animate-[soft-pulse-opacity_2.5s_ease-in-out_infinite]" style={{animationDelay: '0s'}}></div>
<span className="text-[10px] sm:text-[11px] font-medium text-gray-600">
                      Enterprise
                    </span>
</div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#FF7B7B] shadow-sm animate-[soft-pulse-opacity_2.5s_ease-in-out_infinite]" style={{animationDelay: '0.5s'}}></div>
<span className="text-[10px] sm:text-[11px] font-medium text-gray-600">
                      Mid-Market
                    </span>
</div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#A7F3D0] shadow-sm animate-[soft-pulse-opacity_2.5s_ease-in-out_infinite]" style={{animationDelay: '1s'}}></div>
<span className="text-[10px] sm:text-[11px] font-medium text-gray-600">
                      Strategic
                    </span>
</div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#F1F5F9] border border-gray-200 shadow-sm animate-[soft-pulse-opacity_2.5s_ease-in-out_infinite]" style={{animationDelay: '1.5s'}}></div>
<span className="text-[10px] sm:text-[11px] font-medium text-gray-600">
                      Transactional
                    </span>
</div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#FFD166] shadow-sm animate-[soft-pulse-opacity_2.5s_ease-in-out_infinite]" style={{animationDelay: '2s'}}></div>
<span className="text-[10px] sm:text-[11px] font-medium text-gray-600">
                      Global
                    </span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-auto text-center relative z-20 pt-8">
<h3 className="text-lg font-normal text-slate-900 text-left mb-2">
              Predictive Scoring
            </h3>
<p className="leading-relaxed text-base text-slate-500 text-left px-2">
              Prioritize accounts with the highest propensity to close based on
              engagement and behavioral depth.
            </p>
</div>
</div>

<div className="flex flex-col overflow-hidden [animation:animationIn_0.8s_ease-out_0.8s_both] animate-on-scroll bg-white h-[480px] border-slate-200 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm">
<div className="flex justify-between text-sm font-medium tracking-widest text-slate-400 uppercase relative z-20">
<span className="">Sales Compliance</span>
<span>#6</span>
</div>

<div className="flex-1 flex items-center justify-center relative w-full pt-4">
<div className="overflow-hidden flex flex-col z-0 bg-slate-50 w-full h-full border-slate-100 border rounded-2xl p-4 relative justify-center items-center shadow-inner">
<div className="w-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.4),0_2px_4px_rgba(255,255,255,0.8)] border border-gray-950 relative z-10 flex flex-col h-full overflow-hidden">
<div className="flex gap-1.5 mb-5 shrink-0">
<div className="w-2.5 h-2.5 rounded-full bg-gray-600 shadow-[inset_0_1px_1px_rgba(0,0,0,0.5),0_1px_1px_rgba(255,255,255,0.1)] animate-[soft-pulse-opacity_4s_ease-in-out_infinite]" style={{animationDelay: '0s'}}></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-600 shadow-[inset_0_1px_1px_rgba(0,0,0,0.5),0_1px_1px_rgba(255,255,255,0.1)] animate-[soft-pulse-opacity_4s_ease-in-out_infinite]" style={{animationDelay: '2s'}}></div>
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_0_5px_rgba(16,185,129,0.8)] animate-pulse"></div>
</div>
<div className="flex-1 overflow-hidden relative">
<div className="flex flex-col gap-3.5 opacity-90 font-mono text-[11px] text-gray-400 animate-[log-scroll_12s_ease-in-out_infinite]">
<div className="">
                      &gt; [10:24:01]
                      <span className="text-blue-400">AUTH_SUCCESS</span>
<br/>
<span className="pl-4 text-gray-500">node_0x44</span>
</div>
<div className="">
                      &gt; [10:24:02]
                      <span className="text-purple-400">VALIDATE_PAYLOAD</span>
<br/>
<span className="pl-4 text-gray-500">true</span>
</div>
<div className="">
                      &gt; [10:24:05]
                      <span className="text-emerald-400">EXECUTE_TX</span>
<br/>
<span className="pl-4 text-gray-500">ok</span>
</div>
<div className="">
                      &gt; [10:24:06]
                      <span className="text-gray-500 animate-[soft-pulse-opacity_2s_ease-in-out_infinite]">
                        AWAITING_SIG...
                      </span>
<span className="animate-[terminal-blink_1s_step-end_infinite] ml-1">
                        _
                      </span>
</div>
<div className="">
                      &gt; [10:24:08]
                      <span className="text-sky-400">SYNC_COMPLETE</span>
<br/>
<span className="pl-4 text-gray-500">hash_0x8f2</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-auto text-center relative z-20 pt-8">
<h3 className="text-lg font-normal text-slate-900 text-left mb-2">
              Activity Tracking
            </h3>
<p className="leading-relaxed text-base text-slate-500 text-left px-2">
              Secure, immutable record of rep activities, system states, and
              pipeline changes.
            </p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 lg:px-4 [animation:animationIn_0.8s_ease-out_0.9s_both] animate-on-scroll pr-2 pl-2 gap-x-10 gap-y-10">

<div className="">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-2xl text-slate-800" icon="solar:chart-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<h4 className="text-lg font-normal text-slate-900">
              Predictive Analytics
            </h4>
</div>
<p className="text-base text-slate-500 leading-relaxed max-w-sm">
            Revio's AI monitors your CRM data and forecasts sales, 24/7.
          </p>
</div>

<div className="">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-2xl text-slate-800" icon="solar:bell-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<h4 className="text-lg font-normal text-slate-900">
              Real-Time Insights
            </h4>
</div>
<p className="text-base text-slate-500 leading-relaxed max-w-sm">
            Stay informed with real-time analytics and performance tracking.
          </p>
</div>

<div className="">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-2xl text-slate-800" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<h4 className="text-lg font-normal text-slate-900">
              Customizable Forecasts
            </h4>
</div>
<p className="text-base text-slate-500 leading-relaxed max-w-sm">
            You control the parameters and growth targets—Revio does the rest.
          </p>
</div>
</div>
</section>

<section className="section-decor [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll w-full max-w-7xl z-10 mt-8 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
<span className="decor-dot tl"></span>
<span className="decor-dot tr"></span>
<span className="decor-dot bl"></span>
<span className="decor-dot br z-10"></span>
<div className="flex [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll border-slate-200/80 border-b mb-8 pb-8 items-center justify-between">
<span className="text-sm font-medium tracking-widest text-slate-500 uppercase">
          Pricing Plans
        </span>
<a className="text-[#50C878] text-base font-normal flex items-center gap-1.5 hover:text-[#3BA662] transition-colors" href="#">
          View detailed features
          <svg className="text-[#50C878]" fill="none" height="14" viewbox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="3" cy="7" fill="currentColor" r="1.5"></circle>
<circle cx="7" cy="3" fill="currentColor" r="1.5"></circle>
<circle cx="7" cy="11" fill="currentColor" r="1.5"></circle>
<circle cx="11" cy="7" fill="currentColor" r="1.5"></circle>
</svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll mb-16 gap-x-8 gap-y-8 items-start">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 leading-[1.15]">
          Simple, transparent
          <br className="hidden lg:block"/>
          pricing that scales.
        </h2>
<p className="text-xl text-slate-600 leading-relaxed md:pt-2 max-w-lg">
          No hidden fees, no surprise charges. Choose the plan that best fits
          your needs. Unlock the full power of predictive sales analytics for
          your team.
        </p>
</div>
<section className="sm:px-6 lg:px-8 flex flex-col [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll w-full z-10 pt-20 pr-4 pb-32 pl-4 relative items-center">

<div className="flex [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll mb-14 justify-center">
<div className="bg-slate-200/50 p-1 rounded-full inline-flex items-center border border-slate-200/60 shadow-inner relative">
<div className="absolute left-1 top-1 bottom-1 w-[96px] bg-white rounded-full shadow-[0_2px_8px_rgb(0,0,0,0.04)] border border-slate-100 transition-transform duration-300 z-0" id="toggle-slider"></div>
<button className="transition-colors text-sm font-medium w-[96px] z-10 rounded-full pt-2 pb-2 relative" id="btn-monthly">
              Monthly
            </button>
<button className="z-10 hover:text-slate-900 transition-colors text-sm font-medium w-[96px] rounded-full pt-2 pb-2 relative" id="btn-annually">
              Annually
            </button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl items-start mx-auto">

<div className="flex flex-col lg:pr-8 [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll pt-2 pr-8 pb-2 space-y-12">

<div className="flex flex-col">
<div className="w-10 h-10 rounded-xl bg-white border border-gray-200/80 shadow-sm flex items-center justify-center mb-5">
<svg className="w-5 h-5 text-gray-900" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="18" r="3"></circle>
<circle cx="6" cy="6" r="3"></circle>
<path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
<line x1="6" x2="6" y1="9" y2="21"></line>
</svg>
</div>
<h3 className="text-[17px] font-semibold tracking-tight text-gray-900 mb-2">
                Unified Signal Pipeline
              </h3>
<p className="text-[14px] text-gray-500 leading-relaxed">
                Synchronize diverse data sources into a single stream of
                high-resolution operational truth for your entire automation
                stack.
              </p>
</div>

<div className="flex flex-col">
<div className="w-10 h-10 rounded-xl bg-white border border-gray-200/80 shadow-sm flex items-center justify-center mb-5">
<svg className="w-5 h-5 text-gray-900" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="16" x="4" y="4"></rect>
<rect height="6" rx="1" width="6" x="9" y="9"></rect>
<path d="M15 2v2"></path>
<path d="M15 20v2"></path>
<path d="M2 15h2"></path>
<path d="M2 9h2"></path>
<path d="M20 15h2"></path>
<path d="M20 9h2"></path>
<path d="M9 2v2"></path>
<path d="M9 20v2"></path>
</svg>
</div>
<h3 className="text-[17px] font-semibold tracking-tight text-gray-900 mb-2">
                Deterministic Logic Engine
              </h3>
<p className="text-[14px] text-gray-500 leading-relaxed">
                Execute business rules with mathematical precision across
                distributed edge networks, ensuring consistent outcomes every
                time.
              </p>
</div>

<div className="flex flex-col">
<div className="w-10 h-10 rounded-xl bg-white border border-gray-200/80 shadow-sm flex items-center justify-center mb-5">
<svg className="w-5 h-5 text-gray-900" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
</svg>
</div>
<h3 className="text-[17px] font-semibold tracking-tight text-gray-900 mb-2">
                Real-time Observability
              </h3>
<p className="text-[14px] text-gray-500 leading-relaxed">
                Visualize complex execution paths and performance metrics
                through a high-fidelity dashboard designed for infrastructure
                teams.
              </p>
</div>
</div>

<div className="flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gray-900 group hover:ring-gray-800 [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll bg-white border-gray-200/80 border rounded-[24px] ring-gray-900/5 ring-1 pt-8 pr-8 pb-8 pl-8 relative shadow-sm">
<div className="flex justify-between items-center mb-6 h-[26px]">
<h3 className="text-[17px] font-semibold text-gray-900 group-hover:text-white tracking-tight transition-colors duration-300">
                Standard
              </h3>
<span className="text-[11px] font-semibold text-gray-700 bg-gray-100/80 group-hover:bg-gray-800 border border-gray-200/60 group-hover:border-gray-700 px-2.5 py-1 rounded-full uppercase tracking-widest transition-colors duration-300">
                Popular
              </span>
</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-[40px] font-semibold tracking-tighter text-gray-900 group-hover:text-white leading-none transition-all duration-300" id="price-standard">
                $10
              </span>
<span className="text-[14px] font-medium text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                /mo
              </span>
</div>
<div className="text-[13px] text-gray-400 group-hover:text-gray-500 mb-6 transition-all duration-300 h-5" id="billing-text-standard">
              Billed monthly
            </div>
<p className="text-[14px] text-gray-500 group-hover:text-gray-400 mb-8 leading-relaxed transition-colors duration-300">
              Standard compute capacity for developing and testing automated
              workflows.
            </p>
<div className="flex flex-col gap-3 mb-10">
<button className="w-full py-2.5 rounded-xl bg-gray-900 group-hover:bg-white text-white group-hover:text-gray-900 font-medium text-[14px] transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1)] ring-1 ring-inset ring-gray-900/10 group-hover:ring-white/10">
                Get started
              </button>
<button className="w-full py-2.5 rounded-xl bg-white group-hover:bg-gray-800 text-gray-900 group-hover:text-white font-medium text-[14px] border border-gray-200 group-hover:border-gray-700 transition-all duration-300 shadow-sm">
                Contact sales
              </button>
</div>
<div className="pt-8 border-t border-gray-100 group-hover:border-gray-800 transition-colors duration-300">
<h4 className="text-[11px] font-semibold text-gray-900 group-hover:text-gray-300 uppercase tracking-widest mb-6 transition-colors duration-300">
                Included Features
              </h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-gray-900 group-hover:text-white shrink-0 mt-0.5 transition-colors duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-[14px] text-gray-600 group-hover:text-gray-300 font-medium transition-colors duration-300">
                    Standard compute instances
                  </span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-gray-900 group-hover:text-white shrink-0 mt-0.5 transition-colors duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-[14px] text-gray-600 group-hover:text-gray-300 font-medium transition-colors duration-300">
                    Core system observability
                  </span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-gray-900 group-hover:text-white shrink-0 mt-0.5 transition-colors duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-[14px] text-gray-600 group-hover:text-gray-300 font-medium transition-colors duration-300">
                    Up to 10 concurrent nodes
                  </span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-gray-900 group-hover:text-white shrink-0 mt-0.5 transition-colors duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-[14px] text-gray-600 group-hover:text-gray-300 font-medium transition-colors duration-300">
                    20GB telemetry throughput
                  </span>
</li>
</ul>
</div>
</div>

<div className="flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gray-900 group hover:ring-gray-800 [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll bg-white border-gray-200/80 border rounded-[24px] ring-gray-900/5 ring-1 pt-8 pr-8 pb-8 pl-8 relative shadow-sm">
<div className="flex justify-between items-center mb-6 h-[26px]">
<h3 className="text-[17px] font-semibold text-gray-900 group-hover:text-white tracking-tight transition-colors duration-300">
                Professional
              </h3>
</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-[40px] font-semibold tracking-tighter text-gray-900 group-hover:text-white leading-none transition-all duration-300" id="price-pro">
                $30
              </span>
<span className="text-[14px] font-medium text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                /mo
              </span>
</div>
<div className="text-[13px] text-gray-400 group-hover:text-gray-500 mb-6 transition-all duration-300 h-5" id="billing-text-pro">
              Billed monthly
            </div>
<p className="text-[14px] text-gray-500 group-hover:text-gray-400 mb-8 leading-relaxed transition-colors duration-300">
              High-performance isolated environments for mission-critical
              enterprise systems.
            </p>
<div className="flex flex-col gap-3 mb-10">
<button className="w-full py-2.5 rounded-xl bg-gray-900 group-hover:bg-white text-white group-hover:text-gray-900 font-medium text-[14px] transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1)] ring-1 ring-inset ring-gray-900/10 group-hover:ring-white/10">
                Get started
              </button>
<button className="w-full py-2.5 rounded-xl bg-white group-hover:bg-gray-800 text-gray-900 group-hover:text-white font-medium text-[14px] border border-gray-200 group-hover:border-gray-700 transition-all duration-300 shadow-sm">
                Contact sales
              </button>
</div>
<div className="pt-8 border-t border-gray-100 group-hover:border-gray-800 transition-colors duration-300">
<h4 className="text-[11px] font-semibold text-gray-900 group-hover:text-gray-300 uppercase tracking-widest mb-6 transition-colors duration-300">
                Included Features
              </h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-gray-900 group-hover:text-white shrink-0 mt-0.5 transition-colors duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-[14px] text-gray-600 group-hover:text-gray-300 font-medium transition-colors duration-300">
                    200+ hardware connectors
                  </span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-gray-900 group-hover:text-white shrink-0 mt-0.5 transition-colors duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-[14px] text-gray-600 group-hover:text-gray-300 font-medium transition-colors duration-300">
                    Advanced execution logs
                  </span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-gray-900 group-hover:text-white shrink-0 mt-0.5 transition-colors duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-[14px] text-gray-600 group-hover:text-gray-300 font-medium transition-colors duration-300">
                    Up to 30 concurrent nodes
                  </span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-gray-900 group-hover:text-white shrink-0 mt-0.5 transition-colors duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-[14px] text-gray-600 group-hover:text-gray-300 font-medium transition-colors duration-300">
                    40GB telemetry throughput
                  </span>
</li>
</ul>
</div>
</div>
</div>

</section>
</section>

<section className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll z-10 w-full max-w-7xl mt-8 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">

<div className="flex [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll border-slate-200/80 border-b mb-8 pb-8 items-center justify-between">
<span className="uppercase text-sm font-medium text-slate-500 tracking-widest">
          TESTIMONIALS
        </span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll mb-16 gap-x-8 gap-y-8 items-start">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 leading-[1.15]">
          Trusted by the world's
          <br className="hidden lg:block"/>
          most ambitious sales teams.
        </h2>
<p className="text-xl text-slate-600 leading-relaxed md:pt-2 max-w-lg">
          Discover why thousands of sales professionals rely on Revio to
          eliminate pipeline uncertainty and hit their revenue targets with
          absolute confidence every single day.
        </p>
</div>

<div className="flex sm:h-[420px] [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll w-full h-[460px] max-w-xl mt-44 mr-auto ml-auto relative justify-center" id="testimonial-container" style={{perspective: '1200px'}}>

<div className="-top-20 transform -translate-x-1/2 flex flex-col z-[40] pointer-events-none w-full max-w-[520px] absolute left-1/2 items-center" id="paper-clip" style={{transformOrigin: 'bottom center', willChange: 'transform'}}>
<div className="relative w-[70px] h-[22px] bg-gradient-to-b from-[#ffffff] to-[#eef0f3] rounded-t-lg shadow-[0_5px_15px_rgba(0,0,0,0.08),inset_0_1px_0_white,inset_0_-1px_2px_rgba(0,0,0,0.05)] border border-gray-200/80 z-30 flex items-end justify-center pb-1">
<div className="w-[40px] h-[3px] bg-gradient-to-b from-[#d1d5db] to-[#a1a1aa] rounded-full shadow-[inset_0_1px_1px_rgba(0,0,0,0.2),0_1px_0_rgba(255,255,255,0.8)]"></div>
</div>
<div className="relative flex justify-center">
<div className="absolute bottom-0 w-[56px] h-[12px] bg-[#cbd5e1] rounded-full shadow-[inset_0_3px_6px_rgba(0,0,0,0.25),0_1px_0_rgba(255,255,255,1)] z-10 translate-y-1/2"></div>
<div className="relative w-[46px] h-[90px] -mt-1 bg-gradient-to-b from-white/40 via-white/70 to-white/20 backdrop-blur-md shadow-[0_15px_25px_-5px_rgba(0,0,0,0.1),inset_0_0_2px_rgba(255,255,255,0.9)] border-x border-b border-white/40 z-20" style={{borderRadius: '2px 2px 8px 8px'}}>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent w-full h-full opacity-60"></div>
</div>
</div>
</div>

<div className="testimonial-card absolute w-full max-w-[520px] bg-white rounded-[24px] border border-gray-100 p-8 md:p-10 will-change-transform" style={{zIndex: '10', transformOrigin: 'bottom center', boxShadow: '0 10px 20px rgba(0,0,0,0.03)'}}>
<div className="h-12 pointer-events-none"></div>
<div className="mb-12 relative pointer-events-none transition-opacity duration-300">
<div className="text-[52px] text-gray-900 font-serif font-bold leading-none select-none mb-6">
              “
            </div>
<p className="text-[15px] md:text-[16px] text-gray-500 leading-[1.8] font-normal relative z-10 transition-opacity duration-300">
              Finally, a tool that bridges the gap between raw CRM data and
              actual sales execution. The automated rule-sets save us countless
              hours of manual pipeline review every single week.
            </p>
</div>
<div className="flex items-center justify-between pt-6 border-t border-gray-100/80 pointer-events-none">
<div className="flex items-center gap-3 transition-opacity duration-300">
<div className="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-gray-200 to-gray-50 shadow-sm">
<img alt="Elena Rodriguez" className="w-full h-full rounded-full object-cover grayscale-[0.2] transition-opacity duration-300" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&amp;h=150&amp;fit=crop&amp;q=80"/>
</div>
<div className="flex flex-col">
<span className="text-[14px] font-semibold text-gray-900 leading-tight">
                  Elena Rodriguez
                </span>
<span className="text-[12px] text-gray-400 mt-1 font-mono tracking-tight uppercase">
                  Chief Revenue Officer, Nexus
                </span>
</div>
</div>
</div>
<div className="drag-hint absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-medium text-gray-300 uppercase tracking-widest flex flex-col items-center gap-1 opacity-0 pointer-events-none transition-opacity duration-300" style={{transition: 'none'}}>
<svg className="animate-bounce" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
            Drag to tear
          </div>
</div>

<div className="testimonial-card absolute w-full max-w-[520px] bg-white rounded-[24px] border border-gray-100 p-8 md:p-10 will-change-transform" style={{transformOrigin: 'bottom center', willChange: 'transform'}}>
<div className="h-12 pointer-events-none"></div>
<div className="mb-12 relative pointer-events-none transition-opacity duration-300">
<div className="text-[52px] text-gray-900 font-serif font-bold leading-none select-none mb-6">
              “
            </div>
<p className="text-[15px] md:text-[16px] text-gray-500 leading-[1.8] font-normal relative z-10 transition-opacity duration-300">
              Revio's predictive engine is eerily accurate. We caught three
              major pipeline risks last quarter simply because the AI flagged
              anomalies in rep activity. It paid for itself in month one.
            </p>
</div>
<div className="flex items-center justify-between pt-6 border-t border-gray-100/80 pointer-events-none">
<div className="flex items-center gap-3 transition-opacity duration-300">
<div className="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-gray-200 to-gray-50 shadow-sm">
<img alt="Marcus Chen" className="w-full h-full rounded-full object-cover grayscale-[0.2] transition-opacity duration-300" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&amp;h=150&amp;fit=crop&amp;q=80"/>
</div>
<div className="flex flex-col">
<span className="text-[14px] font-semibold text-gray-900 leading-tight">
                  Marcus Chen
                </span>
<span className="text-[12px] text-gray-400 mt-1 font-mono tracking-tight uppercase">
                  Director of RevOps, TechFlow
                </span>
</div>
</div>
</div>
<div className="drag-hint absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-medium text-gray-300 uppercase tracking-widest flex flex-col items-center gap-1 opacity-0 pointer-events-none transition-opacity duration-300" style={{transition: 'none'}}>
<svg className="animate-bounce" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
            Drag to tear
          </div>
</div>

<div className="testimonial-card md:p-10 cursor-grab touch-none select-none will-change-transform bg-white w-full max-w-[520px] border-gray-100 border rounded-[24px] pt-8 pr-8 pb-8 pl-8 absolute" style={{transformStyle: 'preserve-3d', transformOrigin: 'top center'}}>
<div className="h-12 pointer-events-none"></div>
<div className="mb-12 relative pointer-events-none transition-opacity duration-300">
<div className="text-[52px] text-gray-900 font-serif font-bold leading-none select-none mb-6">
              “
            </div>
<p className="text-[15px] md:text-[16px] text-gray-500 leading-[1.8] font-normal relative z-10 transition-opacity duration-300">
              The platform has fundamentally changed how we forecast. Instead of
              guessing, we now have a real-time pulse on our pipeline health.
              It’s given our sales managers the clarity they need to coach reps
              on the deals that actually drive growth.
            </p>
</div>
<div className="flex items-center justify-between pt-6 border-t border-gray-100/80 pointer-events-none">
<div className="flex items-center gap-3 transition-opacity duration-300">
<div className="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-gray-200 to-gray-50 shadow-sm">
<img alt="Sarah Jenkins" className="w-full h-full rounded-full object-cover grayscale-[0.2] transition-opacity duration-300" src="https://i.pravatar.cc/150?img=32"/>
</div>
<div className="flex flex-col">
<span className="text-[14px] font-semibold text-gray-900 leading-tight">
                  Sarah Jenkins
                </span>
<span className="text-[12px] text-gray-400 mt-1 font-mono tracking-tight uppercase">
                  VP of Sales, Velocity
                </span>
</div>
</div>
</div>

<div className="drag-hint absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-medium text-gray-300 uppercase tracking-widest flex flex-col items-center gap-1 opacity-60 pointer-events-none transition-opacity duration-300" style={{transition: 'none'}}>
<svg className="animate-bounce" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
            Drag to tear
          </div>
</div>
</div>

</section>
<section className="section-decor [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll w-full max-w-7xl z-10 mt-8 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">

<div className="absolute -top-32 -bottom-32 left-0 w-px bg-slate-200/80 pointer-events-none"></div>
<div className="absolute -top-32 -bottom-32 right-0 w-px bg-slate-200/80 pointer-events-none"></div>

<span className="decor-dot tl"></span>
<span className="decor-dot tr"></span>
<span className="decor-dot bl"></span>
<span className="decor-dot br"></span>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative z-10">

<div className="flex flex-col">
<span className="uppercase text-sm font-medium text-slate-500 tracking-widest mb-6 block">
            Ready to scale
          </span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 leading-[1.15] mb-6">
            Start predicting your revenue today.
          </h2>
<p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
            Join thousands of ambitious sales teams hitting their revenue
            targets with absolute confidence. Setup takes less than 5 minutes.
          </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors shadow-sm gap-2" href="#">
              Start Free Trial
              <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white text-slate-900 font-medium border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm gap-2" href="#">
              Talk to Sales
            </a>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm text-slate-500">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-4 h-4 text-[#50C878]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="">14-day free trial</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-4 h-4 text-[#50C878]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="">No credit card required</span>
</div>
</div>
</div>

<div className="flex flex-col divide-y divide-slate-200/80 border-y border-slate-200/80">

<details className="group py-6" open="">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-900 text-lg [&amp;::-webkit-details-marker]:hidden marker:content-none">
              How long does it take to implement?
              <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 group-hover:text-slate-600 ml-4 shrink-0">
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed pr-8">
              Most teams are fully onboarded and seeing accurate predictions
              within 48 hours. Our sync engine connects to your CRM instantly
              without engineering support.
            </p>
</details>

<details className="group py-6">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-900 text-lg [&amp;::-webkit-details-marker]:hidden marker:content-none">
              Do I need technical knowledge?
              <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 group-hover:text-slate-600 ml-4 shrink-0">
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed pr-8">
              Not at all. Revio is designed intuitively for sales professionals.
              If you know how to navigate your current CRM, you'll feel right at
              home with our platform.
            </p>
</details>

<details className="group py-6">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-900 text-lg [&amp;::-webkit-details-marker]:hidden marker:content-none">
              What CRMs do you support?
              <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 group-hover:text-slate-600 ml-4 shrink-0">
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed pr-8">
              We currently provide native, two-way sync integrations for
              Salesforce, HubSpot, and Pipedrive. Enterprise plans also include
              custom API access for bespoke setups.
            </p>
</details>

<details className="group py-6">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-900 text-lg [&amp;::-webkit-details-marker]:hidden marker:content-none">
              Is my pipeline data secure?
              <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 group-hover:text-slate-600 ml-4 shrink-0">
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed pr-8">
              Security is our top priority. We maintain SOC2 Type II compliance
              and use bank-level AES-256 encryption for all data both in transit
              and at rest.
            </p>
</details>
</div>
</div>
</section>

<footer className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll mt-auto pt-20 pb-10 relative">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 mb-16">

<div className="col-span-2 flex flex-col items-start pr-4 md:pr-10">
<div className="flex items-center gap-2.5 mb-5">
<span className="text-xl font-medium tracking-tight text-slate-900">
                Revio
              </span>
</div>
<p className="text-sm text-slate-500 leading-relaxed mb-8 max-w-xs">
          Turn your customer data into predictable revenue. The smart AI CRM
          built for modern sales teams to close deals faster.
        </p>
<div className="flex items-center gap-4 text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:twitter-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</a>
<a className="hover:text-slate-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:github-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</a>
<a className="hover:text-slate-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:figma-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</a>
</div>
</div>

<div className="">
<h5 className="text-xs font-semibold text-slate-900 mb-5 uppercase tracking-widest">
          Product
        </h5>
<ul className="flex flex-col gap-3.5 text-sm text-slate-500">
<li className="">
<a className="hover:text-slate-900 transition-colors" href="#">
              Features
            </a>
</li>
<li>
<a className="hover:text-slate-900 transition-colors" href="#">
              Integrations
            </a>
</li>
<li>
<a className="hover:text-slate-900 transition-colors" href="#">
              Pricing
            </a>
</li>
<li>
<a className="hover:text-slate-900 transition-colors" href="#">
              Changelog
            </a>
</li>
</ul>
</div>

<div className="">
<h5 className="text-xs font-semibold text-slate-900 mb-5 uppercase tracking-widest">
          Resources
        </h5>
<ul className="flex flex-col gap-3.5 text-sm text-slate-500">
<li>
<a className="hover:text-slate-900 transition-colors" href="#">
              Blog
            </a>
</li>
<li>
<a className="hover:text-slate-900 transition-colors" href="#">
              Customer Stories
            </a>
</li>
<li>
<a className="hover:text-slate-900 transition-colors" href="#">
              Help Center
            </a>
</li>
<li>
<a className="hover:text-slate-900 transition-colors" href="#">
              Community
            </a>
</li>
</ul>
</div>

<div className="">
<h5 className="text-xs font-semibold text-slate-900 mb-5 uppercase tracking-widest">
          Company
        </h5>
<ul className="flex flex-col gap-3.5 text-sm text-slate-500">
<li className="">
<a className="hover:text-slate-900 transition-colors" href="#">
              About
            </a>
</li>
<li className="">
<a className="hover:text-slate-900 transition-colors" href="#">
              Careers
            </a>
</li>
<li className="">
<a className="hover:text-slate-900 transition-colors" href="#">
              Contact
            </a>
</li>
<li className="">
<a className="hover:text-slate-900 transition-colors" href="#">
              Partners
            </a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row gap-4 border-slate-200/60 border-t pt-8 items-center justify-between">
<p className="text-sm text-slate-500 font-normal">
        © 2024 Revio Inc. All rights reserved.
      </p>
<div className="flex items-center gap-6 text-sm text-slate-500 font-normal">
<a className="hover:text-slate-900 transition-colors" href="#">
          Privacy Policy
        </a>
<a className="hover:text-slate-900 transition-colors" href="#">
          Terms of Service
        </a>
</div>
</div>
</div>
</footer>


    </>
  );
}
