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
        


              document.addEventListener("DOMContentLoaded", () => {
                const container = document.getElementById('dashboard-grid');
                const counters = document.querySelectorAll('[data-counter-target]');
                const LOOP_DURATION = 6000; // Matches CSS animation duration
                let counterInterval;

                const runCounterAnimation = () => {
                  counters.forEach(counter => {
                    const target = +counter.getAttribute('data-counter-target');
                    const prefix = counter.getAttribute('data-counter-prefix') || '';
                    const suffix = counter.getAttribute('data-counter-suffix') || '';

                    let count = 0;
                    const duration = 1500; // Counter duration
                    const increment = target / (duration / 20);

                    counter.innerText = prefix + '0' + suffix;

                    const timer = setInterval(() => {
                      count += increment;
                      if (count >= target) {
                        count = target;
                        clearInterval(timer);
                      }
                      counter.innerText = prefix + Math.ceil(count) + suffix;
                    }, 20);
                  });
                };

                const observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      container.classList.add('in-view');

                      // Run initially
                      runCounterAnimation();

                      // Start Loop
                      if (!counterInterval) {
                        counterInterval = setInterval(() => {
                          if (container.classList.contains('in-view')) {
                             runCounterAnimation();
                          }
                        }, LOOP_DURATION);
                      }
                    } else {
                       container.classList.remove('in-view');
                       // We can optionally clear interval here if we want to stop background processing
                    }
                  });
                }, { threshold: 0.2 });

                observer.observe(container);
              });
            


              (function() {
                const testimonials = [
                  {
                    quote: "Just wrapped another client project! Snagged the lifetime deal too. Massive shoutout to the creators—this app is incredible!",
                    name: "Denial Gorg",
                    role: "Software Engineer, Startech foundation",
                    img: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1000&auto=format&fit=crop"
                  },
                  {
                    quote: "The integration was seamless. We reduced our deployment time by 40% in the first week. The support team is also top-notch.",
                    name: "Sarah Chen",
                    role: "Product Manager, FinTech Global",
                    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
                  },
                  {
                    quote: "I've used many financial dashboards, but Finex stands out for its speed and design. It's built for serious professionals.",
                    name: "Alex Rivera",
                    role: "CTO, NextGen Systems",
                    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                  }
                ];

                let currentIndex = 0;
                const imgEl = document.getElementById('testimonial-img');
                const quoteEl = document.getElementById('testimonial-quote');
                const nameEl = document.getElementById('testimonial-name');
                const roleEl = document.getElementById('testimonial-role');

                function update(index) {
                  const t = testimonials[index];
                  if(imgEl && quoteEl && nameEl && roleEl) {
                      imgEl.style.opacity = '0';
                      quoteEl.style.opacity = '0';

                      setTimeout(() => {
                          imgEl.src = t.img;
                          quoteEl.innerText = '"' + t.quote + '"';
                          nameEl.innerText = t.name;
                          roleEl.innerText = t.role;

                          imgEl.style.opacity = '1';
                          quoteEl.style.opacity = '1';
                      }, 300);
                  }
                }

                window.nextTestimonial = function() {
                  currentIndex = (currentIndex + 1) % testimonials.length;
                  update(currentIndex);
                };

                window.prevTestimonial = function() {
                  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
                  update(currentIndex);
                };
              })();
            


            (function() {
              const testimonials = [
                {
                  quote: "Just wrapped another client project! Snagged the lifetime deal too. Massive shoutout to the creators—this app is incredible!",
                  name: "Denial Gorg",
                  role: "Software Engineer, Startech foundation",
                  img: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1000&auto=format&fit=crop"
                },
                {
                  quote: "The integration was seamless. We reduced our deployment time by 40% in the first week. The support team is also top-notch.",
                  name: "Sarah Chen",
                  role: "Product Manager, FinTech Global",
                  img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
                },
                {
                  quote: "I've used many financial dashboards, but Finex stands out for its speed and design. It's built for serious professionals.",
                  name: "Alex Rivera",
                  role: "CTO, NextGen Systems",
                  img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                }
              ];

              let currentIndex = 0;
              const imgEl = document.getElementById('testimonial-img');
              const quoteEl = document.getElementById('testimonial-quote');
              const nameEl = document.getElementById('testimonial-name');
              const roleEl = document.getElementById('testimonial-role');

              function update(index) {
                const t = testimonials[index];
                if(imgEl && quoteEl && nameEl && roleEl) {
                    imgEl.style.opacity = '0';
                    quoteEl.style.opacity = '0';

                    setTimeout(() => {
                        imgEl.src = t.img;
                        quoteEl.innerText = '"' + t.quote + '"';
                        nameEl.innerText = t.name;
                        roleEl.innerText = t.role;

                        imgEl.style.opacity = '1';
                        quoteEl.style.opacity = '1';
                    }, 300);
                }
              }

              window.nextTestimonial = function() {
                currentIndex = (currentIndex + 1) % testimonials.length;
                update(currentIndex);
              };

              window.prevTestimonial = function() {
                currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
                update(currentIndex);
              };
            })();
          


      lucide.createIcons();
    


      document.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.animationPlayState = 'running';
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        document.querySelectorAll('.scroll-item').forEach(el => observer.observe(el));
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
      

<div className="aura-background-component -z-10 w-full top-0 absolute h-[800px] saturate-150 brightness-125" data-alpha-mask="50" style={{maskImage: 'linear-gradient(transparent, black 0%, black 50%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full" style={{}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="HzcaAbRLaALMhHJp8gLY"></div>

</div>
</div>


<nav className="flex z-50 fixed w-full pt-6 pr-4 pl-4 top-0 right-0 left-0 items-center justify-center" style={{}}>
<div className="flex scroll-item scroll-fade-up bg-black/90 w-full max-w-5xl border-white/10 border rounded-full pt-1 pr-2 pb-1 pl-1 relative shadow-2xl backdrop-blur-md items-center justify-between" style={{animationPlayState: 'running'}}>

<a className="inline-flex items-center justify-center bg-center w-[130px] h-[50px] bg-[url(https://cdn.midjourney.com/405c2b1c-c585-45e3-be19-65cdcd2d9e46/0_0.png?w=800&amp;q=80)] bg-cover rounded-full" href="/home"></a>

<div className="hidden md:flex gap-8 -translate-x-1/2 absolute left-1/2 gap-x-4 gap-y-4 items-center">
<a className="text-[14px] hover:text-gray-300 transition-colors font-medium text-white tracking-wide font-sans" href="/platform">Product</a>
<a className="text-[14px] hover:text-gray-300 transition-colors font-medium text-white tracking-wide font-sans" href="/solutions">
            Solutions
          </a>
<a className="text-[14px] hover:text-gray-300 transition-colors font-medium text-white tracking-wide font-sans" href="/pricing">
            Pricing
          </a>
<a className="text-[14px] hover:text-gray-300 transition-colors font-medium text-white tracking-wide font-sans" href="/contact">Contact</a>
</div>

<div className="flex gap-x-4 gap-y-4 items-center" onclick="window.location.href='/getstarted';window.location.href='/getstarted'" role="button">
<button className="md:hidden p-2 text-white">
<svg className="lucide lucide-menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
<a className="hidden md:flex group transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-400 hover:shadow-[0_0_35px_rgba(59,130,246,0.6),inset_0_0_20px_rgba(59,130,246,0.4)] hover:scale-[1.02] items-center justify-center bg-black/60 border-blue-500 border rounded-full pt-2.5 pr-6 pb-2.5 pl-6 shadow-[0_0_20px_rgba(59,130,246,0.5),inset_0_0_10px_rgba(59,130,246,0.2)]" href="/getstarted">
<span className="uppercase text-[13px] transition-colors group-hover:text-white font-semibold text-white/90 tracking-tight font-sans z-10 relative" onclick="window.location.href='/getstarted';window.location.href='/getstarted'" role="button">GET STARTED</span>
</a>
</div>
</div>
</nav>

<main className="flex flex-col z-10 pt-40 pr-6 pl-6 relative items-center justify-center">

<div className="inline-flex hover:bg-white/10 transition-colors cursor-pointer group scroll-item scroll-fade-up bg-white/5 border-white/10 border rounded-full mb-8 pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-sm items-center" style={{animationPlayState: 'running'}}>
<span className="bg-blue-500/20 text-blue-400 rounded px-1.5 py-0.5 text-[10px] font-medium tracking-wide font-sans" style={{}}>
          NEW
        </span>
<span className="text-xs text-gray-300 font-medium group-hover:text-white transition-colors pr-1 font-sans" style={{}}>
          Version 3.0 is live
        </span>
<svg aria-hidden="true" className="lucide lucide-arrow-right w-3 h-3 text-gray-500 group-hover:text-white transition-colors" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>

<h1 className="text-center text-5xl md:text-7xl leading-[1.1] max-w-4xl mx-auto font-oswald font-light tracking-tight scroll-item scroll-blur-in delay-100" style={{animationPlayState: 'running'}}>
        Master Finance.
        <span className="font-light text-blue-500 tracking-tight font-oswald">
          Simply.
        </span>
</h1>

<p className="text-center text-xl text-gray-400 mt-8 max-w-2xl mx-auto leading-relaxed font-light font-sans scroll-item scroll-fade-up delay-200" style={{animationPlayState: 'running'}}>
        Your all-in-one ecosystem for tracking investments, managing expenses,
        and optimizing cash flow effortlessly.
      </p>

<div className="flex flex-col sm:flex-row gap-4 scroll-item scroll-fade-up delay-300 mt-10 gap-x-4 gap-y-4 items-center" style={{animationPlayState: 'running'}}>
<button className="group inline-flex overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] focus:outline-none sm:w-auto text-sm font-medium text-white w-full h-[54px] rounded-full pt-4 pr-8 pb-4 pl-8 relative items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2))', '--border-radius-before': '9999px'}}>
<style>
            @keyframes beam-spin { to { transform: rotate(360deg); } }
            @keyframes lines-slide {
                0% { background-position: 0 0; }
                100% { background-position: 24px 0; }
            }
          </style>

<div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#3b82f6_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[1px] rounded-full bg-[#050505]"></div>
</div>

<div className="overflow-hidden bg-[#0A0A0A] rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">

<div className="bg-gradient-to-b from-blue-900/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>

<div className="opacity-[0.07] mix-blend-plus-lighter absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'repeating-linear-gradient(90deg, #fff, #fff 1px, transparent 1px, transparent 8px)', backgroundSize: '24px 100%', animation: 'lines-slide 1.5s linear infinite', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))'}}></div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-blue-500/20 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-blue-500/40"></div>
</div>

<span className="transition-colors group-hover:text-white uppercase font-semibold text-white/90 tracking-tight z-10 relative font-sans" style={{}}>
            Start free
          </span>
<svg className="lucide lucide-arrow-right relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
<style id="border-gradient-shared-style">
  [style*="--border-gradient"]::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: var(--border-radius-before, inherit);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    background: var(--border-gradient);
    pointer-events: none;
  }</style>
</button>
<button className="sm:w-auto hover:bg-blue-500/10 hover:border-blue-400 hover:shadow-[0_0_35px_rgba(59,130,246,0.6),inset_0_0_20px_rgba(59,130,246,0.4)] hover:scale-[1.02] transition-all duration-300 flex group text-base font-medium text-white bg-black/60 w-full border-blue-500 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-[0_0_20px_rgba(59,130,246,0.5),inset_0_0_10px_rgba(59,130,246,0.2)] gap-x-2 gap-y-2 items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-play-circle w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
          Watch Demo
        </button>
</div>

<div className="flex scroll-item scroll-blur-in delay-500 w-full h-[800px] max-w-[1440px] mt-20 mr-auto ml-auto relative items-center justify-center" style={{animationPlayState: 'running'}}>







<div className="flex overflow-hidden z-30 bg-[#0A0A0C] w-full h-[700px] max-w-6xl border-white/10 border ring-white/5 ring-1 rounded-2xl mr-6 ml-6 relative shadow-2xl font-sans text-gray-400 select-none" style={{}}>

<aside className="w-64 border-r border-white/5 bg-[#0A0A0C] flex flex-col hidden md:flex">

<div className="h-16 flex items-center px-6 gap-3 mb-2">
<span className="text-lg font-bold text-white tracking-tight font-oswald">Finex</span>
</div>

<nav className="flex-1 px-3 space-y-1 overflow-y-auto">
<div className="px-3 py-2 text-[10px] font-medium text-gray-600 uppercase tracking-widest">Platform</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-white/5 rounded-md transition-all group border border-white/5" href="#">
<svg className="lucide lucide-layout-grid" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-all group" href="#">
<svg className="lucide lucide-wallet" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1">
</path>
<path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
</svg>
                    Transactions
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-all group" href="#">
<svg className="lucide lucide-credit-card" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
                    Cards
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-all group" href="#">
<svg className="lucide lucide-arrow-left-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3 4 7l4 4"></path>
<path d="M4 7h16"></path>
<path d="m16 21 4-4-4-4"></path>
<path d="M20 17H4"></path>
</svg>
                    Transfers
                </a>
<div className="px-3 py-2 mt-4 text-[10px] font-medium text-gray-600 uppercase tracking-widest">Growth</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-all group" href="#">
<svg className="lucide lucide-bar-chart-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="18" y1="20" y2="10"></line>
<line x1="12" x2="12" y1="20" y2="4"></line>
<line x1="6" x2="6" y1="20" y2="14"></line>
</svg>
                    Analytics
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-all group" href="#">
<svg className="lucide lucide-pie-chart" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
<path d="M22 12A10 10 0 0 0 12 2v10z"></path>
</svg>
                    Reports
                </a>
</nav>

<div className="p-4 border-t border-white/5">
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors group">
<img alt="User" className="w-8 h-8 rounded-full border border-white/10" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&amp;h=64&amp;q=80&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate group-hover:text-indigo-400 transition-colors">
                            Alex Morgan</p>
<p className="text-xs text-gray-500 truncate">Pro Plan</p>
</div>
<svg className="lucide lucide-settings text-gray-500 group-hover:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z">
</path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col bg-[#050505] relative overflow-hidden">

<header className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-[#0A0A0C]/80 backdrop-blur-xl z-20 sticky top-0">
<div className="">
<h1 className="text-sm font-medium text-gray-400">Overview</h1>
<div className="flex items-center gap-2">
<span className="text-white font-semibold tracking-tight">Dashboard</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center px-3 py-1.5 bg-white/5 border border-white/10 rounded-full gap-2 hover:bg-white/10 transition-colors cursor-pointer">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse">
</div>
<span className="text-xs font-medium text-gray-300">Live Updates</span>
</div>
<div className="h-6 w-px bg-white/10"></div>
<button className="relative p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5">
<div className="absolute top-2 right-2 w-1.5 h-1.5 bg-indigo-500 rounded-full border border-[#0A0A0C]"></div>
<svg className="lucide lucide-bell" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
</button>
<button className="flex items-center gap-2 px-3 py-1.5 bg-white text-black text-xs font-semibold rounded-md hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<svg className="lucide lucide-plus" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                    New Transfer
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto scrollbar-hide md:pt-0 pt-6 pr-6 pb-6 pl-6 space-y-6">

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

</div>


<div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4">

<div className="p-5 rounded-xl bg-[#0A0A0C] border border-white/10 shadow-lg relative group overflow-hidden hover:border-white/20 transition-all">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<svg className="lucide lucide-wallet text-white" fill="none" height="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg">
<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1">
</path>
<path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
</svg>
</div>
<p className="text-[11px] font-medium text-gray-500 uppercase tracking-wider mb-1">Total Balance</p>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2 font-oswald">$124,500.20</h3>
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[11px] font-medium border border-emerald-500/20 flex items-center gap-1">
<svg className="lucide lucide-trending-up" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg> 12.5%
                        </span>
<span className="text-[11px] text-gray-600">vs last month</span>
</div>
</div>

<div className="p-5 rounded-xl bg-[#0A0A0C] border border-white/10 shadow-lg relative group overflow-hidden hover:border-white/20 transition-all">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<svg className="lucide lucide-credit-card text-indigo-500" fill="none" height="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
</div>
<p className="text-[11px] font-medium text-gray-500 uppercase tracking-wider mb-1">Monthly Spend</p>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2 font-oswald">$8,240.50</h3>
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded bg-white/5 text-gray-300 text-[11px] font-medium border border-white/10 flex items-center gap-1">
                             +2.1%
                        </span>
<span className="text-[11px] text-gray-600">vs last month</span>
</div>
</div>

<div className="overflow-hidden group cursor-pointer text-white bg-gradient-to-br from-indigo-600 to-indigo-700 border-blue-500/30 border rounded-xl pt-5 pr-5 pb-5 pl-5 relative shadow-lg">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors">
</div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<div className="">
<p className="text-[10px] font-medium text-indigo-200 uppercase tracking-wider mb-1">
                                        Active Card</p>
<h3 className="text-xl font-medium tracking-tight">Visa Infinite</h3>
</div>
<svg className="lucide lucide-wifi text-indigo-200 opacity-80" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h.01"></path>
<path d="M2 8.82a15 15 0 0 1 20 0"></path>
<path d="M5 12.859a10 10 0 0 1 14 0"></path>
<path d="M8.5 16.429a5 5 0 0 1 7 0"></path>
</svg>
</div>
<div className="flex items-end justify-between mt-2">
<span className="font-mono text-sm tracking-widest opacity-80">•••• 4242</span>
<span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded border border-white/10 backdrop-blur-md">Active</span>
</div>
</div>
</div>
</div><div className="grid grid-cols-1 md:grid-cols-12 gap-6 gap-x-6 gap-y-6 items-start">


<div className="md:col-span-8 flex flex-col h-[360px] bg-[#101018] border border-white/10 rounded-2xl relative overflow-hidden shadow-2xl">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-500/5 via-transparent to-blue-500/5 pointer-events-none">
</div>
<div className="p-6 flex justify-between items-start relative z-10">
<div>
<h2 className="text-xl font-semibold text-white tracking-tight font-sans">User Growth</h2>
<p className="text-[13px] text-gray-400 mt-1 font-medium font-sans">Last 6 months</p>
</div>
<div className="flex items-center gap-2 mt-1 bg-white/5 px-3 py-1 rounded-full border border-white/5">
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse">
</div>
<span className="text-[11px] font-medium text-gray-300 font-sans">+24% vs last month</span>
</div>
</div>


<div className="flex-1 min-h-0 px-8 pb-4 relative flex items-end justify-between gap-6">

<div className="absolute inset-x-8 inset-y-8 flex flex-col justify-between pointer-events-none">
<div className="w-full h-px border-t border-dashed border-white/5"></div>
<div className="w-full h-px border-t border-dashed border-white/5"></div>
<div className="w-full h-px border-t border-dashed border-white/5"></div>
<div className="w-full h-px border-t border-dashed border-white/5"></div>
</div>

<div className="flex-1 bg-white/5 rounded-t-lg h-[40%] relative group hover:bg-white/10 transition-colors cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1A1A24] border border-white/10 rounded px-2 py-1 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity font-sans">
                        12K</div>
</div>
<div className="flex-1 bg-white/5 rounded-t-lg h-[55%] relative group hover:bg-white/10 transition-colors cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1A1A24] border border-white/10 rounded px-2 py-1 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity font-sans">
                        18K</div>
</div>
<div className="flex-1 bg-white/5 rounded-t-lg h-[45%] relative group hover:bg-white/10 transition-colors cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1A1A24] border border-white/10 rounded px-2 py-1 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity font-sans">
                        15K</div>
</div>
<div className="flex-1 bg-indigo-500 rounded-t-lg h-[80%] relative group shadow-[0_0_20px_rgba(99,102,241,0.3)] cursor-pointer">
<div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/20 to-transparent">
</div>
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#1A1A24] border border-white/10 rounded-lg px-3 py-1.5 text-xs font-bold text-white shadow-xl font-sans">
                        32K
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-[#1A1A24] border-r border-b border-white/10">
</div>
</div>
</div>
<div className="flex-1 bg-white/5 rounded-t-lg h-[65%] relative group hover:bg-white/10 transition-colors cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1A1A24] border border-white/10 rounded px-2 py-1 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity font-sans">
                        22K</div>
</div>
<div className="flex-1 bg-white/5 rounded-t-lg h-[75%] relative group hover:bg-white/10 transition-colors cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1A1A24] border border-white/10 rounded px-2 py-1 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity font-sans">
                        28K</div>
</div>
</div>

<div className="px-8 pb-6 flex justify-between text-xs text-gray-500 font-sans font-medium">
<span className="">Jan</span><span>Feb</span><span>Mar</span><span className="text-white">Apr</span><span>May</span><span className="">Jun</span>
</div>
</div>


<div className="md:col-span-4 flex flex-col h-[360px] bg-[#101018] border border-white/10 rounded-2xl p-6 relative">
<div className="flex justify-between items-start mb-6">
<div className="">
<h2 className="text-lg font-semibold text-white tracking-tight font-sans">Top Sources</h2>
<p className="text-[13px] text-gray-400 mt-1 font-medium font-sans">Last 14 days</p>
</div>
<button className="text-gray-500 hover:text-white transition-colors">
<svg className="lucide lucide-more-horizontal" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="flex gap-2 mb-6 gap-x-2 gap-y-2 items-baseline">
<span className="text-3xl font-light text-white tracking-tight font-oswald">$6,295.29</span>
<span className="text-xs text-green-400 font-medium font-sans flex items-center gap-1">
<svg className="lucide lucide-trending-up" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
          12%
        </span>
</div><div className="overflow-y-auto pr-2 space-y-6">

<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white shadow-lg shrink-0">
<svg className="lucide lucide-globe" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="2" x2="22" y1="12" y2="12"></line>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
</path>
</svg>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between mb-1.5">
<span className="text-sm font-medium text-white truncate font-sans">Direct Traffic</span>
<span className="text-sm text-gray-400 font-sans">$2,400</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-orange-500 w-[70%]"></div>
</div>
</div>
</div>

<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shrink-0">
<svg className="lucide lucide-twitter" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z">
</path>
</svg>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between mb-1.5">
<span className="text-sm font-medium text-white truncate font-sans">Social Media</span>
<span className="text-sm text-gray-400 font-sans">$1,850</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[55%]"></div>
</div>
</div>
</div>

<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-lg shrink-0">
<svg className="lucide lucide-mail" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between mb-1.5">
<span className="text-sm font-medium text-white truncate font-sans">Newsletter</span>
<span className="text-sm text-gray-400 font-sans">$940</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 w-[30%]"></div>
</div>
</div>
</div>
</div>

<div className="space-y-6 overflow-y-auto pr-2 flex-1 min-h-0">

</div>
</div>
</div>


<div className="bg-[#0A0A0C] border-white/10 border rounded-xl pt-3 pr-3 pb-3 pl-3 shadow-lg">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-white shadow-lg">
<svg className="lucide lucide-send ml-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m22 2-7 20-4-9-9-4Z"></path>
<path className="" d="M22 2 11 13"></path>
</svg>
</div>
<div className="">
<h4 className="text-sm font-medium text-white">Quick Transfer</h4>
<p className="text-xs text-gray-500">Send money instantly to recent contacts</p>
</div>
</div>
<div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto md:overflow-visible pb-2 md:pb-0">
<div className="flex -space-x-3 shrink-0">
<img alt="Contact" className="w-9 h-9 rounded-full border-2 border-[#0A0A0C] cursor-pointer hover:z-10 hover:scale-110 transition-transform" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&amp;h=64&amp;q=80&amp;fit=crop"/>
<img alt="Contact" className="w-9 h-9 rounded-full border-2 border-[#0A0A0C] cursor-pointer hover:z-10 hover:scale-110 transition-transform" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=64&amp;h=64&amp;q=80&amp;fit=crop"/>
<img alt="Contact" className="w-9 h-9 rounded-full border-2 border-[#0A0A0C] cursor-pointer hover:z-10 hover:scale-110 transition-transform" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&amp;h=64&amp;q=80&amp;fit=crop"/>
<div className="w-9 h-9 rounded-full border-2 border-[#0A0A0C] bg-white/10 flex items-center justify-center text-[10px] text-white font-medium cursor-pointer hover:bg-white/20 transition-colors z-0">
                                    +4
                                </div>
</div>
<div className="h-8 w-px bg-white/10 mx-2 shrink-0"></div>
<div className="relative shrink-0">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
<input className="w-24 md:w-32 bg-[#111] border border-white/10 rounded-lg py-1.5 pl-6 pr-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" type="text" value="0.00"/>
</div>
<button className="px-4 py-1.5 bg-white text-black text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors shrink-0">Send</button>
</div>
</div>
</div>
</div>
</main>
</div>

</div>

<section className="z-10 w-full max-w-7xl mt-32 mr-auto mb-24 ml-auto pr-0 pl-0 relative space-y-20" style={{}}>

<div className="max-w-7xl mr-auto mb-24 ml-auto pr-6 pl-6">
<p className="text-center text-xs font-medium text-neutral-500 uppercase tracking-widest mb-8">
    Powering world-class editorial teams
  </p>
<div className="relative flex overflow-x-hidden group">
<div className="animate-marquee whitespace-nowrap flex gap-16 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-semibold tracking-tight">ACME Corp</span>
<span className="text-xl font-bold tracking-tighter italic">
              Veridian
            </span>
<span className="text-xl font-black tracking-tight">KYBER</span>
<span className="text-xl font-medium tracking-wide">Lumina.ai</span>
<span className="text-xl font-bold font-serif">Vogue</span>
<span className="text-xl font-semibold tracking-tight">Stripe</span>
<span className="text-xl font-bold tracking-tighter italic">
              Linear
            </span>
<span className="text-xl font-black tracking-tight">Raycast</span>

<span className="text-xl font-semibold tracking-tight">ACME Corp</span>
<span className="text-xl font-bold tracking-tighter italic">
              Veridian
            </span>
<span className="text-xl font-black tracking-tight">KYBER</span>
<span className="text-xl font-medium tracking-wide">Lumina.ai</span>
</div>
<style>
      .animate-marquee {
        animation: marquee 25s linear infinite;
      }

      @keyframes marquee {
        0% {
          transform: translateX(0);
        }

        100% {
          transform: translateX(-50%);
        }
      }
    </style>
</div>
</div><div className="flex flex-col bg-[#0A0A0C] border-[#ffffff]/10 border rounded-3xl mt-24 mb-24 pt-8 pr-8 pb-16 pl-8 gap-x-16 gap-y-16">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 w-full">
<div className="flex flex-col gap-6 max-w-3xl">
<div className="flex gap-3 scroll-item scroll-fade-up gap-x-3 gap-y-3 items-center" style={{animationPlayState: 'running'}}>
<span className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-500/10 text-[11px] font-mono font-medium text-blue-400 border border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.2)] font-sans" style={{}}>
                  01
                </span>
<span className="text-sm font-medium tracking-widest uppercase text-gray-500 font-sans" style={{}}>
                  Intelligence
                </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] font-oswald font-light tracking-tight scroll-item scroll-fade-up delay-100" style={{animationPlayState: 'running'}}>
                Predictive Analytics
                <span className="text-gray-600 font-oswald font-light tracking-tight" style={{}}>
                  for Modern Growth
                </span>
</h2>
<p className="leading-relaxed text-lg font-light text-gray-400 max-w-xl scroll-item scroll-fade-up delay-200" style={{animationPlayState: 'running'}}>
                Leverage AI-driven insights to forecast trends, optimize
                spending, and maximize returns across all your financial
                channels with precision.
              </p>
</div>
<button className="group flex items-center gap-2 pl-6 pr-5 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-all duration-200 font-sans whitespace-nowrap scroll-item scroll-fade-up delay-300" style={{animationPlayState: 'running'}}>
<span className="font-sans" style={{}}>Explore Features</span>
<svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[400px] gap-6 gap-x-6 gap-y-6" id="dashboard-grid">
<style>
              /* Looping Animations Definitions */
              @keyframes draw-path-loop {
                0% { stroke-dashoffset: 1000; opacity: 0; }
                5% { opacity: 1; }
                40% { stroke-dashoffset: 0; }
                90% { stroke-dashoffset: 0; opacity: 1; }
                100% { stroke-dashoffset: 0; opacity: 0; }
              }
              @keyframes width-grow-loop {
                0% { width: 0; opacity: 1; }
                40% { width: var(--target-width); }
                90% { width: var(--target-width); opacity: 1; }
                100% { width: var(--target-width); opacity: 0; }
              }
              @keyframes fade-in-up-loop {
                0% { opacity: 0; transform: translateY(10px); }
                20% { opacity: 1; transform: translateY(0); }
                90% { opacity: 1; transform: translateY(0); }
                100% { opacity: 0; transform: translateY(0); }
              }
              @keyframes scale-in-loop {
                0% { transform: scale(0.8); opacity: 0; }
                20% { transform: scale(1); opacity: 1; }
                90% { transform: scale(1); opacity: 1; }
                100% { transform: scale(1); opacity: 0; }
              }
              @keyframes spin-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              @keyframes spin-slow-reverse {
                from { transform: rotate(0deg); }
                to { transform: rotate(-360deg); }
              }

              /* Animation Classes */
              .animate-draw {
                stroke-dasharray: 1000;
                stroke-dashoffset: 1000;
                animation: draw-path-loop 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                animation-play-state: paused;
              }
              .animate-width {
                width: 0;
                animation: width-grow-loop 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                animation-play-state: paused;
              }
              .animate-fade-up {
                opacity: 0;
                animation: fade-in-up-loop 6s ease-out infinite;
                animation-play-state: paused;
              }
              .animate-scale {
                opacity: 0;
                animation: scale-in-loop 6s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
                animation-play-state: paused;
              }

              /* Utility to start animations */
              .in-view .animate-draw,
              .in-view .animate-width,
              .in-view .animate-fade-up,
              .in-view .animate-scale {
                animation-play-state: running;
              }
            </style>

<div className="relative h-[400px] rounded-[2rem] bg-[#0A0A0C] border border-white/10 p-8 overflow-hidden flex flex-col justify-between group hover:border-white/[0.15] transition-colors scroll-item scroll-fade-up delay-100" style={{animationPlayState: 'running'}}>

<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C]"></div>
<div className="pointer-events-none absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="relative z-10">
<h3 className="text-4xl font-light text-white tracking-tight font-oswald">
                  ROI Prediction
                </h3>
<p className="mt-2 text-lg font-light leading-relaxed text-gray-400">
                  Predict recurring bills and upcoming expenses accurately.
                </p>
</div>

<div className="relative z-10 h-32 w-full">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 50">
<path d="M0 45 L100 45" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4 4" strokeWidth="1"></path>
<path d="M0 25 L100 25" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4 4" strokeWidth="1"></path>
<defs>
<lineargradient id="gradient-area" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: '0.2'}}></stop>
<stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
<path className="animate-fade-up" d="M0 40 C 20 40, 30 35, 50 20 C 70 5, 80 10, 100 0 V 50 H 0 Z" fill="url(#gradient-area)" style={{animationDelay: '0.1s'}}></path>
<path className="animate-draw" d="M0 40 C 20 40, 30 35, 50 20 C 70 5, 80 10, 100 0" fill="none" stroke="#3b82f6" strokeWidth="2"></path>
<foreignobject className="animate-scale" height="25" style={{animationDelay: '0.8s'}} width="40" x="60" y="-10">
<div className="px-2 py-1 rounded bg-blue-500 text-white text-[10px] text-center shadow-[0_0_10px_rgba(59,130,246,0.5)] transform scale-75 origin-center font-sans font-semibold" xmlns="http://www.w3.org/1999/xhtml">
<span data-counter-prefix="+" data-counter-target="24">+24</span>
                      %
                    </div>
</foreignobject>
</svg>
</div>
</div>

<div className="relative rounded-[2rem] bg-[#0A0A0C] border border-white/10 p-8 overflow-hidden flex flex-col h-[400px] md:h-[400px] lg:h-[824px] lg:row-span-2 group hover:border-white/[0.15] transition-colors scroll-item scroll-fade-up delay-200" style={{animationPlayState: 'running'}}>

<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C]"></div>
<div className="pointer-events-none absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle, black 40%, transparent 100%)', WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 100%)'}}></div>

<div className="relative z-10">
<h3 className="text-4xl font-light text-white tracking-tight font-oswald">
                  Cashflow
                </h3>
<p className="mt-2 text-lg font-light leading-relaxed text-gray-400 max-w-[26rem]">
                  Income vs outcome trend across the last 6 months, helping you
                  spot spikes and risk early.
                </p>
</div>

<div className="relative z-10 flex-1 flex items-center justify-center pt-6">
<svg className="w-[320px] h-[320px] md:w-[360px] md:h-[360px] lg:w-[380px] lg:h-[380px] overflow-visible" preserveaspectratio="xMidYMid meet" viewbox="0 0 300 300">
<defs>
<filter height="200%" id="glow-purple" width="200%" x="-50%" y="-50%">
<fegaussianblur result="coloredBlur" stddeviation="3"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
<filter height="200%" id="glow-cyan" width="200%" x="-50%" y="-50%">
<fegaussianblur result="coloredBlur" stddeviation="3"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
<lineargradient id="grad-purple" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#d946ef"></stop>
<stop offset="100%" stop-color="#a855f7"></stop>
</lineargradient>
<lineargradient id="grad-cyan" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#22d3ee"></stop>
<stop offset="100%" stop-color="#06b6d4"></stop>
</lineargradient>
</defs>
<g fill="none" stroke="#ffffff" stroke-dasharray="3 3" stroke-opacity="0.10" strokeWidth="1">
<circle className="animate-scale" cx="150" cy="150" r="22" style={{animationDelay: '0.1s'}}></circle>
<circle className="animate-scale" cx="150" cy="150" r="44" style={{animationDelay: '0.2s'}}></circle>
<circle className="animate-scale" cx="150" cy="150" r="66" style={{animationDelay: '0.3s'}}></circle>
<circle className="animate-scale" cx="150" cy="150" r="88" style={{animationDelay: '0.4s'}}></circle>
<circle className="animate-scale" cx="150" cy="150" r="110" style={{animationDelay: '0.5s'}}></circle>
</g>
<g className="animate-fade-up" stroke="#ffffff" stroke-opacity="0.15" strokeWidth="1" style={{animationDelay: '0.3s'}}>
<line x1="150" x2="150" y1="150" y2="40"></line>
<line x1="150" x2="245" y1="150" y2="95"></line>
<line x1="150" x2="245" y1="150" y2="205"></line>
<line x1="150" x2="150" y1="150" y2="260"></line>
<line x1="150" x2="55" y1="150" y2="205"></line>
<line x1="150" x2="55" y1="150" y2="95"></line>
</g>
<g className="fill-white font-sans text-[11px] font-medium animate-fade-up" dominant-baseline="middle" style={{animationDelay: '0.4s'}} text-anchor="middle">
<text x="150" y="25">Jan</text>
<text x="268" y="85">Feb</text>
<text x="268" y="215">Mar</text>
<text x="150" y="278">Apr</text>
<text x="32" y="215">May</text>
<text x="32" y="85">Jun</text>
</g>
<path className="animate-draw" d="M150 62 L197 122 L188 172 L150 249 L102 177 L74 106 Z" fill="none" filter="url(#glow-purple)" stroke="url(#grad-purple)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{animationDelay: '0.3s'}}></path>
<path className="animate-draw" d="M150 95 L240 102 L230 196 L150 254 L80 190 L107 125 Z" fill="none" filter="url(#glow-cyan)" stroke="url(#grad-cyan)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{animationDelay: '0.6s'}}></path>
</svg>
</div>
</div>

<div className="relative h-[400px] rounded-[2rem] bg-[#0A0A0C] border border-white/10 p-8 overflow-hidden flex flex-col group hover:border-white/[0.15] transition-colors scroll-item scroll-fade-up delay-300" style={{animationPlayState: 'running'}}>

<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C]"></div>
<div className="pointer-events-none absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle, black 40%, transparent 100%)', WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 100%)'}}></div>
<div className="relative z-10">
<h3 className="text-4xl font-light text-white tracking-tight font-oswald">
                  Engagement Forecasting
                </h3>
<p className="mt-2 text-lg font-light leading-relaxed text-gray-400">
                  Predict engagement rates for upcoming campaigns.
                </p>
</div>
<div className="relative z-10 flex-1 flex items-center justify-center">

<div className="absolute w-32 h-32 rounded-3xl bg-white/[0.03] border border-white/[0.05] animate-[spin-slow_20s_linear_infinite]" style={{animationDuration: '25s'}}></div>
<div className="absolute w-24 h-24 rounded-2xl bg-white/[0.05] border border-white/[0.05] animate-[spin-slow-reverse_15s_linear_infinite]" style={{animationDuration: '15s'}}></div>

<div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-[0_12px_30px_-10px_rgba(59,130,246,0.4)] animate-scale relative z-10">
<span className="text-4xl text-white font-oswald font-light tracking-tight flex items-baseline">
<span data-counter-suffix="k" data-counter-target="45">45k</span>
</span>
</div>
</div>
</div>

<div className="relative h-[400px] rounded-[2rem] bg-[#0A0A0C] border border-white/10 p-8 overflow-hidden flex flex-col justify-end group hover:border-white/[0.15] transition-colors scroll-item scroll-fade-up delay-500" style={{animationPlayState: 'running'}}>

<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C]"></div>
<div className="pointer-events-none absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle, black 40%, transparent 100%)', WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 100%)'}}></div>
<div className="absolute inset-0 flex items-center justify-center -translate-y-10 z-10">
<div className="relative animate-fade-up">
<span className="text-[8rem] text-white/10 select-none font-oswald font-light tracking-tight flex">
<span data-counter-suffix="%" data-counter-target="20">20%</span>
</span>
<div className="absolute top-1/2 left-0 h-[4px] bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_0_18px_rgba(59,130,246,0.6)] animate-width" style={{'--target-width': '100%'}}></div>
</div>
</div>
<div className="relative z-10">
<h3 className="text-4xl font-light text-white tracking-tight font-oswald">
                  Conversion Probability
                </h3>
<p className="mt-2 text-lg font-light leading-relaxed text-gray-400">
                  Estimate the likelihood of conversions based on data.
                </p>
</div>
</div>

<div className="relative h-[400px] rounded-[2rem] bg-[#0A0A0C] border border-white/10 p-8 overflow-hidden flex flex-col justify-end group hover:border-white/[0.15] transition-colors">

<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C]"></div>
<div className="pointer-events-none absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle, black 40%, transparent 100%)', WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 100%)'}}></div>
<div className="relative z-10 mb-10 flex flex-col gap-6">
<div className="flex items-center justify-between">
<h4 className="text-xl font-semibold text-white tracking-tight font-sans">
                    Top Assets
                  </h4>
<button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 pl-4 pr-3 py-1.5 text-xs font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-white font-sans">
                    All Projects
                    <svg className="opacity-70" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
</div>
<div className="flex flex-col gap-5">
<div className="flex items-center gap-4">
<span className="w-[110px] shrink-0 text-sm text-gray-300 font-medium truncate font-sans">
                      AAPL
                    </span>
<div className="h-3 flex-1 rounded-full bg-white/5 overflow-hidden">
<div className="h-full rounded-full bg-[#d946ef] animate-width" style={{'--target-width': '80%', animationDelay: '0.1s'}}></div>
</div>
<span className="w-12 shrink-0 text-right text-sm text-white font-medium font-sans animate-fade-up" style={{animationDelay: '0.1s'}}>
                      $800
                    </span>
</div>
<div className="flex items-center gap-4">
<span className="w-[110px] shrink-0 text-sm text-gray-300 font-medium truncate font-sans">
                      TSLA
                    </span>
<div className="h-3 flex-1 rounded-full bg-white/5 overflow-hidden">
<div className="h-full rounded-full bg-[#22d3ee] animate-width" style={{'--target-width': '90%', animationDelay: '0.2s'}}></div>
</div>
<span className="w-12 shrink-0 text-right text-sm text-white font-medium font-sans animate-fade-up" style={{animationDelay: '0.2s'}}>
                      $85K
                    </span>
</div>
<div className="flex items-center gap-4">
<span className="w-[110px] shrink-0 text-sm text-gray-300 font-medium truncate font-sans">
                      BTC
                    </span>
<div className="h-3 flex-1 rounded-full bg-white/5 overflow-hidden">
<div className="h-full rounded-full bg-[#f87171] animate-width" style={{'--target-width': '85%', animationDelay: '0.3s'}}></div>
</div>
<span className="w-12 shrink-0 text-right text-sm text-white font-medium font-sans animate-fade-up" style={{animationDelay: '0.3s'}}>
                      $42K
                    </span>
</div>
<div className="flex items-center gap-4">
<span className="w-[110px] shrink-0 text-sm text-gray-300 font-medium truncate font-sans">
                      NVDA
                    </span>
<div className="h-3 flex-1 rounded-full bg-white/5 overflow-hidden">
<div className="h-full rounded-full bg-[#6366f1] animate-width" style={{'--target-width': '60%', animationDelay: '0.4s'}}></div>
</div>
<span className="w-12 shrink-0 text-right text-sm text-white font-medium font-sans animate-fade-up" style={{animationDelay: '0.4s'}}>
                      120
                    </span>
</div>
</div>
</div>
<div className="relative z-10">
<h3 className="text-4xl font-light text-white tracking-tight font-oswald">
                  Channel Performance
                </h3>
<p className="mt-2 text-lg font-light leading-relaxed text-gray-400">
                  Analyze and predict channel-specific effectiveness.
                </p>
</div>
</div>

</div>
</div>
<div className="flex flex-col bg-[#0A0A0C] border-[#ffffff]/10 border rounded-3xl mt-24 mb-24 pt-8 pr-8 pb-16 pl-8 gap-x-16 gap-y-16">

<div className="flex flex-col overflow-hidden lg:flex-row lg:gap-24 lg:pt-0 lg:pb-0 mt-12 mb-0 pt-10 pr-10 pb-10 pl-10 relative gap-x-16 gap-y-16 items-center justify-between">


<div className="z-10 shrink-0 lg:mx-0 w-full max-w-[340px] mr-auto ml-auto relative">

<div className="border-[8px] overflow-hidden h-[700px] max-w-[400px] border-[#1a1a1a] ring-white/10 ring-1 rounded-[3rem] mr-auto ml-auto relative shadow-2xl bg-[#050505]">

<div className="absolute top-0 w-full h-12 px-6 flex justify-between items-center z-20 pt-2">
<span className="text-[13px] font-semibold text-white tracking-wide font-sans">
                    9:41
                  </span>
<div className="flex gap-1.5 items-center">
<svg className="text-white" fill="currentColor" height="12" viewbox="0 0 16 12" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M14.6 2.4C14.2 2 13.5 2 13.1 2.4L8 7.5 2.9 2.4C2.5 2 1.8 2 1.4 2.4C1 2.8 1 3.5 1.4 3.9L7.3 9.8C7.7 10.2 8.3 10.2 8.7 9.8L14.6 3.9C15 3.5 15 2.8 14.6 2.4Z"></path>
<path d="M12.4 0.2C12 0.6 12 1.3 12.4 1.7L8 6.1 3.6 1.7C4 1.3 4 0.6 3.6 0.2C3.2 -0.2 2.5 -0.2 2.1 0.2L7.3 5.4C7.7 5.8 8.3 5.8 8.7 5.4L13.9 0.2C13.5 -0.2 12.8 -0.2 12.4 0.2Z"></path>
<path d="M8 8.2C8.4 8.2 8.7 8.5 8.7 8.9C8.7 9.3 8.4 9.6 8 9.6C7.6 9.6 7.3 9.3 7.3 8.9C7.3 8.5 7.6 8.2 8 8.2Z"></path>
</svg>
<svg className="text-white" fill="currentColor" height="12" viewbox="0 0 18 12" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H3C1.3 2 0 3.3 0 5V7C0 8.7 1.3 10 3 10H15C16.7 10 18 8.7 18 7V5C18 3.3 16.7 2 15 2ZM3 3H15C16.1 3 17 3.9 17 5V7C17 8.1 16.1 9 15 9H3C1.9 9 1 8.1 1 7V5C1 3.9 1.9 3 3 3Z"></path>
<path d="M11.5 4H6.5C5.7 4 5 4.7 5 5.5V6.5C5 7.3 5.7 8 6.5 8H11.5C12.3 8 13 7.3 13 6.5V5.5C13 4.7 12.3 4 11.5 4Z"></path>
</svg>
</div>
</div>

<div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20 pointer-events-none"></div>

<div className="flex flex-col bg-[#050505] w-full h-full pt-14 relative overflow-hidden font-sans">

<div className="px-6 pb-4 flex justify-between items-center shrink-0 z-10">
<div className="">
<h1 className="text-2xl font-normal text-white tracking-tight font-oswald">
                        Portfolio
                      </h1>
<p className="text-xs text-gray-400 mt-0.5">
                        Welcome back, Alex
                      </p>
</div>
<button className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-white ring-1 ring-white/10 scroll-item scroll-fade-up delay-300" style={{animationPlayState: 'running'}}>
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
</svg>
</button>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-4 pb-24 no-scrollbar z-0">

<div className="border-white/[0.08] overflow-hidden bg-[#121215] border rounded-3xl p-6 relative group">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>
<div className="flex justify-between items-start mb-6 relative z-10">
<div className="">
<p className="text-xs text-gray-400 font-medium mb-1">
                            Total Balance
                          </p>
<h2 className="text-3xl font-light text-white tracking-tight font-oswald">
                            $24,592.00
                          </h2>
</div>
<div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20">
<svg className="text-green-400" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="m18 15-6-6-6 6"></path>
</svg>
<span className="text-[10px] font-semibold text-green-400">
                            +12.5%
                          </span>
</div>
</div>

<div className="flex gap-3 h-32 relative z-10 items-end justify-between px-1">

<div className="w-1/6 h-[40%] bg-white/5 rounded-t-md hover:bg-indigo-500/50 transition-colors"></div>
<div className="w-1/6 h-[60%] bg-white/5 rounded-t-md hover:bg-indigo-500/50 transition-colors"></div>
<div className="w-1/6 h-[50%] bg-white/5 rounded-t-md hover:bg-indigo-500/50 transition-colors"></div>
<div className="w-1/6 h-[75%] bg-white/5 rounded-t-md hover:bg-indigo-500/50 transition-colors"></div>
<div className="w-1/6 h-[100%] bg-indigo-500 rounded-t-md shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
<div className="w-1/6 h-[65%] bg-white/5 rounded-t-md hover:bg-indigo-500/50 transition-colors"></div>
</div>
</div>

<div className="grid grid-cols-4 gap-2">
<button className="flex flex-col items-center gap-2 p-3 bg-[#121215] rounded-2xl border border-white/5 hover:bg-[#1A1A1E] transition-colors">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
<span className="text-[10px] font-medium text-gray-400">
                          Send
                        </span>
</button>
<button className="flex flex-col items-center gap-2 p-3 bg-[#121215] rounded-2xl border border-white/5 hover:bg-[#1A1A1E] transition-colors">
<div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 19-7-7 7-7"></path>
</svg>
</div>
<span className="text-[10px] font-medium text-gray-400">
                          Receive
                        </span>
</button>
<button className="flex flex-col items-center gap-2 p-3 bg-[#121215] rounded-2xl border border-white/5 hover:bg-[#1A1A1E] transition-colors">
<div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
</div>
<span className="text-[10px] font-medium text-gray-400">
                          Buy
                        </span>
</button>
<button className="flex flex-col items-center gap-2 p-3 bg-[#121215] rounded-2xl border border-white/5 hover:bg-[#1A1A1E] transition-colors">
<div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="12" x2="12" y1="8" y2="16"></line>
<line x1="8" x2="16" y1="12" y2="12"></line>
</svg>
</div>
<span className="text-[10px] font-medium text-gray-400">
                          Top up
                        </span>
</button>
</div>

<div className="bg-[#121215] rounded-3xl p-5 border border-white/[0.08] relative">
<div className="flex justify-between items-center mb-5">
<h2 className="text-base font-semibold text-white tracking-tight">
                          Your Assets
                        </h2>
<button className="text-xs font-medium text-blue-400 hover:text-blue-300">
                          View all
                        </button>
</div>
<div className="space-y-4">

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-[#1E1E22] flex items-center justify-center ring-1 ring-white/10 group-hover:ring-orange-500/50 transition-all">
<div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-[8px] text-white font-semibold">
                                ₿
                              </div>
</div>
<div>
<h3 className="text-sm font-medium text-white">
                                Bitcoin
                              </h3>
<p className="text-[10px] text-gray-500">BTC</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-white">
                              $43,290.50
                            </p>
<p className="text-[10px] text-green-400">+2.5%</p>
</div>
</div>

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-[#1E1E22] flex items-center justify-center ring-1 ring-white/10 group-hover:ring-blue-500/50 transition-all">
<div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-[8px] text-white font-semibold">
                                Ξ
                              </div>
</div>
<div>
<h3 className="text-sm font-medium text-white">
                                Ethereum
                              </h3>
<p className="text-[10px] text-gray-500">ETH</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-white">
                              $2,850.10
                            </p>
<p className="text-[10px] text-red-400">-0.8%</p>
</div>
</div>

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-[#1E1E22] flex items-center justify-center ring-1 ring-white/10 group-hover:ring-purple-500/50 transition-all">
<div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center text-[8px] text-white font-semibold">
                                S
                              </div>
</div>
<div>
<h3 className="text-sm font-medium text-white">
                                Solana
                              </h3>
<p className="text-[10px] text-gray-500">SOL</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-white">
                              $108.40
                            </p>
<p className="text-[10px] text-green-400">+5.2%</p>
</div>
</div>
</div>
</div>
</div>

<div className="w-full z-20 pt-0 px-6 pb-6 absolute bottom-0">
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/95 to-transparent pointer-events-none"></div>
<div className="relative flex justify-between items-end">
<button className="flex flex-col items-center gap-1.5 -mb-2 text-white">
<div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-white/10 ring-4 ring-[#050505] transform -translate-y-2">
<svg fill="none" height="20" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
<polyline points="9 22 9 12 15 12 15 22"></polyline>
</svg>
</div>
<span className="text-[10px] font-semibold tracking-wide">
                          Home
                        </span>
</button>
<button className="flex flex-col items-center gap-1.5 pb-1 text-gray-500 hover:text-white transition-colors">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
<path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
</svg>
<span className="text-[10px] font-medium">Wallet</span>
</button>
<button className="flex flex-col items-center gap-1.5 pb-1 text-gray-500 hover:text-white transition-colors">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<line x1="12" x2="12" y1="20" y2="10"></line>
<line x1="18" x2="18" y1="20" y2="4"></line>
<line x1="6" x2="6" y1="20" y2="16"></line>
</svg>
<span className="text-[10px] font-medium">Activity</span>
</button>
<button className="flex flex-col items-center gap-1.5 pb-1 text-gray-500 hover:text-white transition-colors">
<svg className="" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.35a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
<span className="text-[10px] font-medium">Settings</span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-end w-full gap-x-8 gap-y-8 justify-between">
<div className="flex flex-col gap-6 max-w-3xl">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center scroll-item scroll-fade-up" style={{animationPlayState: 'running'}}>
<span className="flex items-center justify-center text-[11px] font-medium text-blue-400 font-mono bg-blue-500/10 w-7 h-7 border-blue-500/20 border rounded-lg shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                    02
                  </span>
<span className="uppercase text-sm font-medium text-gray-500 tracking-widest font-sans" style={{}}>
                    Mobile App
                  </span>
</div>
<h2 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl text-white font-oswald font-light tracking-tight scroll-item scroll-fade-up delay-100" style={{animationPlayState: 'running'}}>
                  Built for speed.
                  <span className="text-gray-600 font-oswald font-light tracking-tight" style={{}}>
                    Designed for trust.
                  </span>
</h2>
<p className="leading-relaxed text-lg font-light text-gray-400 text-left mt-2 scroll-item scroll-fade-up delay-200" style={{animationPlayState: 'running'}}>
                  Manage your wealth on the go. Real-time syncing, instant
                  transfers, and institutional-grade security in your pocket.
                </p>
</div>
<button className="group flex items-center gap-2 pl-6 pr-5 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-all duration-200 font-sans whitespace-nowrap">
<span className="font-sans" style={{}}>Explore Features</span>
<svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 border-0 gap-x-4 gap-y-4">

<div className="md:p-12 transition-colors group overflow-hidden z-0 bg-[#0A0A0C] border-[#ffffff]/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative scroll-item scroll-fade-up" style={{animationPlayState: 'running'}}>

<div className="pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C] absolute top-0 right-0 bottom-0 left-0"></div>

<div className="z-0 opacity-20 rounded-3xl absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
<div className="flex gap-6 items-start relative z-20">
<div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-white/20 transition-colors">
<svg className="text-gray-300 group-hover:text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
</div>
<div className="">
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">
                    Instant Sync
                  </h3>
<p className="text-[15px] leading-relaxed font-light text-gray-400">
                    Link your accounts in seconds for a unified view of your net
                    worth.
                  </p>
</div>
</div>
</div>

<div className="md:p-12 transition-colors group overflow-hidden z-0 bg-[#0A0A0C] border-[#ffffff]/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative scroll-item scroll-fade-up delay-100" style={{animationPlayState: 'running'}}>

<div className="pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C] absolute inset-0 z-0"></div>

<div className="absolute inset-0 opacity-20 z-0" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle, black 40%, transparent 100%)', WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 100%)'}}></div>

<div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
<div className="flex gap-6 items-start relative z-20">
<div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-white/20 transition-colors">
<svg className="text-gray-300 group-hover:text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<line x1="2" x2="22" y1="12" y2="12"></line>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
</svg>
</div>
<div className="">
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">
                    Global Markets
                  </h3>
<p className="text-[15px] text-gray-400 leading-relaxed font-light font-sans">
                    Access real-time data from 50+ global exchanges and track
                    your international assets.
                  </p>
</div>
</div>
</div>

<div className="md:p-12 transition-colors group overflow-hidden z-0 bg-[#0A0A0C] border-[#ffffff]/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative scroll-item scroll-fade-up delay-200" style={{animationPlayState: 'running'}}>

<div className="pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C] absolute inset-0 z-0"></div>

<div className="z-0 opacity-20 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
<div className="flex gap-6 items-start relative z-20">
<div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-white/20 transition-colors">
<svg className="text-gray-300 group-hover:text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
</svg>
</div>
<div className="">
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">
                    Smart Budgeting
                  </h3>
<p className="text-[15px] text-gray-400 leading-relaxed font-light font-sans">
                    Set custom spending limits and get notified when you're
                    close to your budget.
                  </p>
</div>
</div>
</div>

<div className="md:p-12 transition-colors group overflow-hidden z-0 bg-[#0A0A0C] border-[#ffffff]/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative scroll-item scroll-fade-up delay-300" style={{animationPlayState: 'running'}}>

<div className="pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C] absolute inset-0 z-0"></div>

<div className="absolute inset-0 opacity-20 z-0" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle, black 40%, transparent 100%)', WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 100%)'}}></div>

<div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
<div className="flex gap-6 items-start relative z-20">
<div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-white/20 transition-colors">
<svg className="text-gray-300 group-hover:text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div className="">
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">
                    Bank-Grade Security
                  </h3>
<p className="text-[15px] text-gray-400 leading-relaxed font-light font-sans">
                    We use 256-bit encryption and never store your banking
                    credentials.
                  </p>
</div>
</div>
</div>
</div>
</div>
<div className="flex flex-col bg-[#0A0A0C] border-[#ffffff]/10 border rounded-3xl mt-24 mb-24 pt-8 pr-8 pb-16 pl-8 gap-x-16 gap-y-16">

<div className="flex flex-col md:flex-row md:items-end gap-8 w-full gap-x-8 gap-y-8 justify-between">
<div className="flex flex-col gap-6 max-w-3xl">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center scroll-item scroll-fade-up" style={{animationPlayState: 'running'}}>
<span className="flex items-center justify-center text-[11px] font-medium text-blue-400 font-mono bg-blue-500/10 w-7 h-7 border-blue-500/20 border rounded-lg shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                  03
                </span>
<span className="uppercase text-sm font-medium text-gray-500 tracking-widest font-sans">
                  Community
                </span>
</div>
<h2 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl text-white font-oswald font-light tracking-tight scroll-item scroll-fade-up delay-100" style={{animationPlayState: 'running'}}>
                Loved by builders.
                <span className="text-gray-600 font-oswald font-light tracking-tight">
                  Trusted by teams.
                </span>
</h2>
<p className="text-lg text-gray-400 font-light max-w-xl leading-relaxed font-sans scroll-item scroll-fade-up delay-200" style={{animationPlayState: 'running'}}>
                Join thousands of developers and financial experts who are
                building the future of finance with our platform.
              </p>
</div>
<button className="group flex items-center gap-2 pl-6 pr-5 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-all duration-200 font-sans whitespace-nowrap">
<span className="font-sans">Read Stories</span>
<svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>

<div className="overflow-hidden flex flex-col md:p-16 lg:flex-row lg:gap-20 lg:pt-4 lg:pb-4 lg:pl-4 lg:pr-8 bg-[#0A0A0C] w-full max-w-6xl border-white/10 border rounded-3xl mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 relative shadow-2xl gap-x-12 gap-y-12 items-center scroll-item scroll-blur-in delay-300" style={{animationPlayState: 'running'}}>

<div className="pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C] absolute top-0 right-0 bottom-0 left-0 z-0"></div>
<div className="z-0 opacity-20 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="lg:w-[55%] flex min-h-[420px] md:min-h-[520px] w-full relative items-center justify-center z-10">
<div className="z-10 md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] group cursor-pointer overflow-hidden bg-white/5 w-80 h-80 border-0 rounded-[2.5rem] pt-1 pr-1 pb-1 pl-1 relative shadow-2xl">
<img alt="User Profile" className="transform transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover rounded-[2.2rem]" id="testimonial-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/59c85ed7-9ae4-40eb-88bf-fa793ae1de22_1600w.webp"/>
</div>
</div>

<div className="lg:w-1/2 flex flex-col z-10 w-full relative">
<div className="mb-6 text-indigo-500">
<svg fill="currentColor" height="50" viewbox="0 0 24 24" width="50">
<path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z"></path>
</svg>
</div>
<blockquote className="leading-tight transition-opacity duration-300 md:text-5xl text-2xl font-light text-white font-oswald mb-8" id="testimonial-quote">
                "Seeing revenue trends, churn, and growth this clearly has made
                decision-making so much easier. I finally feel in control. "
              </blockquote>
<div className="flex flex-row items-center justify-between gap-4 border-t border-white/10 pt-8">
<div className="">
<h4 className="leading-none text-xl font-semibold text-white" id="testimonial-name">
                    Michelle Lim
                  </h4>
<p className="text-sm md:text-base text-gray-500 mt-2 font-light" id="testimonial-role">
                    Software Engineer, Startech foundation
                  </p>
</div>
<div className="flex items-center gap-3">
<button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-indigo-600 transition-all duration-300" onclick="window.prevTestimonial()">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-indigo-600 transition-all duration-300" onclick="window.nextTestimonial()">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>
</div>
</div>

</div>

</div>
<div className="flex flex-col bg-[#0A0A0C] border-[#ffffff]/10 border rounded-3xl mt-24 mb-24 pt-8 pr-8 pb-16 pl-8 gap-x-16 gap-y-16">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 w-full">
<div className="flex flex-col gap-6 max-w-3xl">
<div className="flex gap-3 items-center scroll-item scroll-fade-up" style={{animationPlayState: 'running'}}>
<span className="flex items-center justify-center text-[11px] font-medium text-blue-400 font-mono bg-blue-500/10 w-7 h-7 border-blue-500/20 border rounded-lg shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                  04
                </span>
<span className="uppercase text-sm font-medium text-gray-500 tracking-widest font-sans">
                  PRICING
                </span>
</div>
<h2 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl text-white font-oswald font-light tracking-tight scroll-item scroll-fade-up delay-100" style={{animationPlayState: 'running'}}>
                Simple pricing for
                <span className="text-gray-600 font-oswald font-light tracking-tight">
                  everyone.
                </span>
</h2>
<p className="text-lg text-gray-400 font-light max-w-xl leading-relaxed font-sans scroll-item scroll-fade-up delay-200" style={{animationPlayState: 'running'}}>
                Leverage AI-driven insights to forecast trends, optimize
                spending, and maximize returns across all your financial
                channels with precision.
              </p>
</div>
<div className="z-10 flex flex-col items-center md:items-end relative">
<div className="flex bg-[#111111] border-white/10 border rounded-full p-1.5 backdrop-blur-sm items-center">
<button className="transition-transform hover:scale-[1.02] text-sm font-semibold text-black bg-[#ffffff] rounded-full px-8 py-2.5 shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                  Monthly
                </button>
<button className="px-8 py-2.5 rounded-full text-gray-400 hover:text-white font-medium text-sm transition-colors font-sans">
                  Yearly
                </button>
</div>
</div>
</div>

<section className="flex flex-col overflow-hidden pt-0 pr-0 pb-0 pl-0 relative gap-x-12 gap-y-12 items-center justify-center">

<div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0 gap-x-12 gap-y-12 scroll-item scroll-blur-in delay-300" style={{visibility: 'hidden', animationPlayState: 'running'}}>
<div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" style={{}}></div>
<div className="w-px bg-gradient-to-b from-transparent via-purple-500/10 to-transparent opacity-50 absolute top-0 bottom-0 left-1/4 gap-x-12 gap-y-12"></div>
<div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/10 to-transparent opacity-50" style={{}}></div>
<div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-purple-900/10 to-transparent opacity-30"></div>
</div>


<div className="overflow-hidden z-10 group bg-[#0A0A0C] w-full max-w-6xl border-white/10 border rounded-[3rem] relative shadow-2xl gap-x-12 gap-y-12">

<div className="pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0A0A0C] to-[#0A0A0C] absolute top-0 right-0 bottom-0 left-0 gap-x-12 gap-y-12"></div>

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle, black 40%, transparent 100%)'}}></div>
<div className="grid grid-cols-1 md:grid-cols-2 md:p-16 min-h-[450px] pt-10 pr-10 pb-10 pl-10 relative gap-x-12 gap-y-12">

<div className="flex flex-col gap-8 h-full gap-x-12 gap-y-12 items-start justify-between">

<div className="flex items-center gap-4">
<svg className="text-sky-400" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
<path d="M9 12H4s.55-3.03 2-4c1.62-1.1 4-1 4-1s.25 2.25 0 4z"></path>
<path d="M15 13v5s3.03-.55 4-2c1.1-1.62 1-4 1-4s-2.25-.25-4 0z"></path>
</svg>
<span className="text-3xl font-light text-white tracking-tight font-oswald">
                      Pro Plan
                    </span>
</div>

<div className="mt-auto gap-x-12 gap-y-12">
<div className="flex items-baseline gap-3 mb-2">
<span className="text-9xl font-light text-white tracking-tight font-oswald">
                        $19
                      </span>
<span className="text-3xl font-light text-white tracking-tight font-oswald opacity-90">
                        / mo
                      </span>
</div>
<p className="text-gray-400 text-lg font-light font-sans" style={{}}>
                      Best for startups and growing teams
                    </p>
</div>
</div>

<div className="flex flex-col justify-between h-full gap-10">

<ul className="space-y-6 pt-2">
<li className="flex items-center gap-4 text-white text-xl font-light font-sans" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></span>
                      Unlimited Account Sync
                    </li>
<li className="flex items-center gap-4 text-white text-xl font-light font-sans" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></span>
                      AI-Powered Forecasting
                    </li>
<li className="flex items-center gap-4 text-white text-xl font-light font-sans" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></span>
                      Advanced Export (CSV/PDF)
                    </li>
<li className="flex items-center gap-4 text-white text-xl font-light font-sans" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></span>
                      Priority Support
                    </li>
</ul>

<div className="flex justify-start md:justify-end mt-auto pt-4">
<button className="sm:w-auto hover:bg-blue-500/10 hover:border-blue-400 hover:shadow-[0_0_35px_rgba(59,130,246,0.6),inset_0_0_20px_rgba(59,130,246,0.4)] hover:scale-[1.02] transition-all duration-300 flex group text-base font-medium text-white bg-black/60 w-full border-blue-500 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-[0_0_20px_rgba(59,130,246,0.5),inset_0_0_10px_rgba(59,130,246,0.2)] gap-x-2 gap-y-2 items-center justify-center">
                      Start For Free
                    </button>
</div>
</div>
</div>
</div>
</section>
</div>
</section>



</main>

<footer className="border-t border-white/10 bg-[#050505] relative z-10 pt-20 pb-10">
<div className="w-full max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
<div className="max-w-sm scroll-item scroll-fade-up" style={{animationPlayState: 'running'}}>
<a className="inline-flex items-center justify-center bg-center w-[130px] h-[50px] bg-[url(https://cdn.midjourney.com/405c2b1c-c585-45e3-be19-65cdcd2d9e46/0_0.png?w=800&amp;q=80)] bg-cover rounded-full" href="#"></a>
<p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans" style={{}}>
              Finex is the next-gen financial platform designed for modern
              businesses. We help you track, analyze, and optimize your growth.
            </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-twitter" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-github" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full font-sans">
<div className="scroll-item scroll-fade-up delay-100" style={{animationPlayState: 'running'}}>
<h4 className="text-white font-medium mb-4 font-sans" style={{}}>
                Product
              </h4>
<ul className="space-y-3 text-sm text-gray-400">
<li>
<a className="hover:text-blue-400 transition-colors font-sans" href="#" style={{}}>
                    Features
                  </a>
</li>
<li>
<a className="hover:text-blue-400 transition-colors font-sans" href="#" style={{}}>
                    Integrations
                  </a>
</li>
<li>
<a className="hover:text-blue-400 transition-colors font-sans" href="#" style={{}}>
                    Pricing
                  </a>
</li>
<li>
<a className="hover:text-blue-400 transition-colors font-sans" href="#" style={{}}>
                    Changelog
                  </a>
</li>
</ul>
</div>
<div className="scroll-item scroll-fade-up delay-200" style={{animationPlayState: 'running'}}>
<h4 className="text-white font-medium mb-4 font-sans" style={{}}>
                Resources
              </h4>
<ul className="space-y-3 text-sm text-gray-400">
<li>
<a className="hover:text-blue-400 transition-colors font-sans" href="#" style={{}}>
                    Documentation
                  </a>
</li>
<li>
<a className="hover:text-blue-400 transition-colors font-sans" href="#" style={{}}>
                    API Reference
                  </a>
</li>
<li>
<a className="hover:text-blue-400 transition-colors font-sans" href="#" style={{}}>
                    Community
                  </a>
</li>
<li>
<a className="hover:text-blue-400 transition-colors font-sans" href="#" style={{}}>
                    Help Center
                  </a>
</li>
</ul>
</div>
<div className="scroll-item scroll-fade-up delay-300" style={{animationPlayState: 'running'}}>
<h4 className="text-white font-medium mb-4 font-sans" style={{}}>
                Company
              </h4>
<ul className="space-y-3 text-sm text-gray-400">
<li>
<a className="hover:text-blue-400 transition-colors font-sans" href="#" style={{}}>
                    About
                  </a>
</li>
<li className="">
<a className="hover:text-blue-400 transition-colors font-sans" href="#" style={{}}>
                    Blog
                  </a>
</li>
<li className="">
<a className="hover:text-blue-400 transition-colors font-sans" href="#" style={{}}>
                    Careers
                  </a>
</li>
<li>
<a className="hover:text-blue-400 transition-colors font-sans" href="#" style={{}}>
                    Legal
                  </a>
</li>
</ul>
</div>
<div className="scroll-item scroll-fade-up delay-500" style={{animationPlayState: 'running'}}>
<h4 className="text-white font-medium mb-4 font-sans" style={{}}>
                Legal
              </h4>
<ul className="space-y-3 text-sm text-gray-400">
<li>
<a className="hover:text-blue-400 transition-colors font-sans" href="#" style={{}}>
                    Privacy Policy
                  </a>
</li>
<li>
<a className="hover:text-blue-400 transition-colors font-sans" href="#" style={{}}>
                    Terms of Service
                  </a>
</li>
<li>
<a className="hover:text-blue-400 transition-colors font-sans" href="#" style={{}}>
                    Cookie Policy
                  </a>
</li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-500 font-sans" style={{}}>
            © 2024 Finex Inc. All rights reserved.
          </p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs text-gray-400 font-sans" style={{}}>
              All systems normal
            </span>
</div>
</div>
</div>
</footer>



    </>
  );
}
