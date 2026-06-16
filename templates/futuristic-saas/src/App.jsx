import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
display:['Space Grotesk', 'sans-serif'],
sans: ['Inter', 'sans-serif'],
},
colors: {
space: {
900: '#02040A',
800: '#060913',
700: '#0B1120',
}
},
animation: {
'spin-slow': 'spin 15s linear infinite',
'spin-reverse': 'spin-reverse 20s linear infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
},
keyframes: {
'spin-reverse': {
to: { transform: 'rotate(-360deg)' }
},
'float': {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  (function () {

  function initUnicorn() {
    if (window.UnicornStudio && window.UnicornStudio.init) {
      if (!window.UnicornStudio.isInitialized) {
        window.UnicornStudio.init();
        window.UnicornStudio.isInitialized = true;
      }
    }
  }

  if (window.UnicornStudio && window.UnicornStudio.init) {
    initUnicorn();
    return;
  }

  if (!window.UnicornStudio) {
    window.UnicornStudio = { isInitialized:false };
  }

  if (!document.querySelector("script[data-unicorn-loader]")) {

    var s = document.createElement("script");
    s.src =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.0-1/dist/unicornStudio.umd.js";

    s.setAttribute("data-unicorn-loader","true");

    s.onload = function () {
      initUnicorn();
    };

    (document.head || document.body).appendChild(s);
  }

})();



      document.addEventListener('DOMContentLoaded', () => {
        const accessSection = document.getElementById('access');
        if (!accessSection) return;

        const priceCounters = accessSection.querySelectorAll('.price-count');
        const btnMonthly = document.getElementById('btn-monthly');
        const btnYearly = document.getElementById('btn-yearly');
        const slider = document.getElementById('billing-slider');
        const billingLabels = accessSection.querySelectorAll('.billing-cycle-label');
        const desktopArch = accessSection.querySelector('.desktop-architecture');
        
        let hasAnimated = false;
        let isYearly = false;

        // Easing interpolation
        const animateCounters = () => {
          priceCounters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'), 10);
            const startValue = parseInt(counter.textContent) || 0;
            const duration = 1200;
            const startTimestamp = performance.now();

            const step = (timestamp) => {
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              // easeOutExpo function
              const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              
              counter.textContent = Math.floor(startValue + (target - startValue) * easeOut);

              if (progress < 1) {
                window.requestAnimationFrame(step);
              } else {
                counter.textContent = target;
              }
            };

            window.requestAnimationFrame(step);
          });
        };

        // Scroll Observer
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
              hasAnimated = true;
              setTimeout(() => {
                accessSection.classList.add('is-visible');
                setTimeout(animateCounters, 600);
              }, 100);
              observer.unobserve(accessSection);
            }
          });
        }, { threshold: 0.2 });

        observer.observe(accessSection);

        // Billing Mode Switcher
        function setBilling(yearly) {
          if (isYearly === yearly) return;
          isYearly = yearly;

          if (yearly) {
            slider.style.transform = 'translateX(100px)';
            slider.style.width = '140px';
            btnYearly.classList.remove('text-gray-500', 'hover:text-gray-300');
            btnYearly.classList.add('text-white');
            btnMonthly.classList.remove('text-white');
            btnMonthly.classList.add('text-gray-500', 'hover:text-gray-300');
          } else {
            slider.style.transform = 'translateX(0)';
            slider.style.width = '100px';
            btnMonthly.classList.remove('text-gray-500', 'hover:text-gray-300');
            btnMonthly.classList.add('text-white');
            btnYearly.classList.remove('text-white');
            btnYearly.classList.add('text-gray-500', 'hover:text-gray-300');
          }

          if (desktopArch) {
            desktopArch.classList.remove('mode-switch-active');
            void desktopArch.offsetWidth; // Reflow reset
            desktopArch.classList.add('mode-switch-active');
          }

          priceCounters.forEach(counter => {
            const target = parseInt(yearly ? counter.getAttribute('data-yearly') : counter.getAttribute('data-monthly'), 10);
            counter.setAttribute('data-target', target);
          });
          
          animateCounters();

          billingLabels.forEach(label => {
            label.textContent = yearly ? '/mo billed yearly' : '/mo';
          });
        }

        if (btnMonthly && btnYearly) {
          btnMonthly.addEventListener('click', () => setBilling(false));
          btnYearly.addEventListener('click', () => setBilling(true));
        }
      });
    


        document.addEventListener('DOMContentLoaded', () => {
            
            // 1. Header Scroll Effect
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });

            // 2. Intersection Observer for Reveals
            const revealElements = document.querySelectorAll('.reveal');
            
            const revealOptions = {
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            };

            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: stop observing once revealed
                        // observer.unobserve(entry.target);
                    }
                });
            }, revealOptions);

            revealElements.forEach(el => revealObserver.observe(el));

            // 3. Hero Parallax Effect
            const heroParallax = document.getElementById('hero-parallax');
            if (heroParallax && window.innerWidth > 768) {
                document.addEventListener('mousemove', (e) => {
                    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
                    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
                    heroParallax.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
                });
            }

            // 4. Smooth Scrolling for Nav Links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });

        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute saturate-0" data-alpha-mask="0" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 0%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 0%, transparent)'}}><div className="unicorn-bg absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
<div className="absolute inset-0 w-full h-full opacity-60 mix-blend-screen">
<div className="absolute inset-0 w-full h-full" data-us-dpi="1.5" data-us-fps="60" data-us-lazyload="true" data-us-production="true" data-us-project="yvg2jXyIdpjPbto0iE0W">
</div>
</div>
</div>
</div>

<header className="fixed z-50 flex transition-all duration-500 mt-6 pr-4 pl-4 top-0 right-0 left-0 justify-center">
<nav className="glass-panel overflow-visible w-full max-w-6xl border-white/5 border rounded-[2rem] pt-2 pr-2 pb-2 pl-2 relative" id="navbar">

<input className="peer sr-only" id="mobile-menu-toggle" type="checkbox"/>

<div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem]">
</div>

<div className="flex z-10 px-2 relative items-center justify-between">
<div className="flex items-center gap-3 cursor-pointer">
<span className="text-xl font-bold text-white tracking-wide font-display px-2">AURY</span>
</div>

<ul className="hidden md:flex gap-8 text-sm font-medium text-gray-300 gap-x-8 gap-y-8 items-center">
<li className="">
<a className="nav-link" href="/system">System</a>
</li>
<li className="">
<a className="nav-link" href="/engine">Engine</a>
</li>
<li className="">
<a className="nav-link" href="/topology">Topology</a>
</li>
<li className="">
<a className="nav-link" href="/access">Access</a>
</li>
<li className="">
<a className="nav-link" href="/pricing">Pricing</a>
</li>
</ul>

<div className="hidden sm:block md:block">
<button className="btn-glow hover:bg-white/12 hover:border-white/40 transition-all duration-300 hover:shadow-[0_0_18px_rgba(255,255,255,0.18)] active:scale-[0.98] text-sm font-medium text-white bg-white/10 border-white/20 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5 cursor-pointer" onclick="window.location.href='/'" role="button">
              Initialize
            </button>
</div>

<label className="sm:hidden inline-flex items-center justify-center text-white cursor-pointer relative z-20" htmlFor="mobile-menu-toggle">
<div className="relative w-6 h-6">

<span className="absolute left-0 top-[5px] w-6 h-[2px] bg-white rounded-full transition-all duration-300 peer-checked:top-1/2 peer-checked:-translate-y-1/2 peer-checked:rotate-45"></span>
<span className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-[2px] bg-white rounded-full transition-all duration-300 peer-checked:opacity-0"></span>
<span className="absolute left-0 bottom-[5px] w-6 h-[2px] bg-white rounded-full transition-all duration-300 peer-checked:bottom-1/2 peer-checked:translate-y-1/2 peer-checked:-rotate-45"></span>
</div>
</label>
</div>

<div className="sm:hidden grid transition-all duration-500 ease-out grid-rows-[0fr] peer-checked:grid-rows-[1fr]">
<div className="overflow-hidden">
<div className="pt-5 mt-4 border-t border-white/10 flex flex-col gap-3">
<a className="text-gray-300 hover:text-white transition-colors rounded-xl px-3 py-3 bg-white/[0.02] border border-white/[0.04]" href="/system">
                System
              </a>
<a className="text-gray-300 hover:text-white transition-colors rounded-xl px-3 py-3 bg-white/[0.02] border border-white/[0.04]" href="/engine">
                Engine
              </a>
<a className="text-gray-300 hover:text-white transition-colors rounded-xl px-3 py-3 bg-white/[0.02] border border-white/[0.04]" href="/topology">
                Topology
              </a>
<a className="text-gray-300 hover:text-white transition-colors rounded-xl px-3 py-3 bg-white/[0.02] border border-white/[0.04]" href="/access">
                Access
              </a>
<a className="text-gray-300 hover:text-white transition-colors rounded-xl px-3 py-3 bg-white/[0.02] border border-white/[0.04]" href="/pricing">
                Pricing
              </a>
<button className="mt-2 w-full bg-white/10 border border-white/20 hover:bg-white/12 hover:border-white/40 text-white text-sm font-medium px-5 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_18px_rgba(255,255,255,0.18)] active:scale-[0.98]">
                Initialize
              </button>
</div>
</div>
</div>
</nav>
</header>

<section className="min-h-screen flex overflow-hidden pt-20 relative items-center justify-center">

<div className="ambient-glow bg-white/5 w-[600px] h-[600px] top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 rounded-full">
</div>
<div className="ambient-glow bg-white/5 w-[500px] h-[500px] top-1/3 right-1/4 translate-x-1/2 rounded-full"></div>

<div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-60" id="hero-parallax">
<div className="hero-vortex w-[800px] h-[800px] relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full blur-[60px] opacity-20">
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_40px_20px_rgba(255,255,255,0.2)] animate-pulse">
</div>

<svg className="absolute inset-0 w-full h-full animate-spin-slow" style={{animationDuration: '40s'}}>
<circle className="shadow-[0_0_10px_#ffffff]" cx="400" cy="100" fill="#ffffff" r="3"></circle>
<circle className="shadow-[0_0_10px_#dddddd]" cx="700" cy="500" fill="#dddddd" r="2"></circle>
<circle className="opacity-50" cx="150" cy="600" fill="#aaaaaa" r="4"></circle>
</svg>
</div>
</div>

<div className="z-10 container text-center max-w-5xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="reveal active">
<div className="inline-flex uppercase text-xs font-semibold text-gray-300 tracking-widest bg-white/5 border-white/10 border rounded-full mb-8 pt-2 pr-4 pb-2 pl-4 backdrop-blur-sm gap-x-2 gap-y-2 items-center">
      Aury Core OS Beta 2.0</div>
</div>
<h1 className="reveal reveal-scale font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-6 drop-shadow-2xl active">
    The Architecture of <br/>
<span className="text-gradient-clean">Dimensional Data.</span>
</h1>
<p className="reveal text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed active">
    Synthesize fragments into hyper-fluid interface realities. We abandoned the grid to build a living digital
    ecosystem.
  </p>
<div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 active">
<button className="w-full sm:w-auto px-8 py-4 bg-white text-space-900 font-semibold rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:scale-105 transform duration-300">
                    Engage Protocol
                </button>
<button className="w-full sm:w-auto px-8 py-4 glass-panel text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-white/40">
                    View Documentation
                </button>
</div>

<div className="reveal mt-20 pt-10 border-t border-white/10 active">
<div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 text-gray-500">
<span className="uppercase tracking-[0.28em] text-[11px] text-gray-500/80 whitespace-nowrap">
      Integrated With
    </span>
<div className="hidden lg:block w-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 transition-all duration-500">

<img alt="Nasa" className="w-16 h-16 opacity-30 group-hover:opacity-60 transition-opacity duration-300" src="https://api.iconify.design/simple-icons/nasa.svg?color=white"/>
</div>
<div className="group flex items-center justify-center h-16 transition-colors duration-300">
<img alt="SpaceX" className="w-16 h-16 opacity-30 group-hover:opacity-60 transition-opacity duration-300" src="https://api.iconify.design/simple-icons/spacex.svg?color=white"/>
</div>
<div className="group flex items-center justify-center h-16 transition-colors duration-300">
<img alt="Uber" className="w-16 h-16 opacity-30 group-hover:opacity-60 transition-opacity duration-300" src="https://api.iconify.design/simple-icons/uber.svg?color=white"/>
</div>
<div className="group flex items-center justify-center h-16 transition-colors duration-300">
<img alt="Visa" className="w-16 h-16 opacity-30 group-hover:opacity-60 transition-opacity duration-300" src="https://api.iconify.design/simple-icons/visa.svg?color=white"/>
</div>
<div className="group flex items-center justify-center h-16 transition-colors duration-300">
<img alt="Grab" className="w-16 h-16 opacity-30 group-hover:opacity-60 transition-opacity duration-300" src="https://api.iconify.design/simple-icons/grab.svg?color=white"/>
</div>
<div className="group flex items-center justify-center h-16 transition-colors duration-300">
<img alt="Bose" className="w-16 h-16 opacity-30 group-hover:opacity-60 transition-opacity duration-300" src="https://api.iconify.design/simple-icons/bose.svg?color=white"/>
</div>
<div className="group flex items-center justify-center h-16 transition-colors duration-300">
<img alt="Discover" className="w-16 h-16 opacity-30 group-hover:opacity-60 transition-opacity duration-300" src="https://api.iconify.design/simple-icons/discover.svg?color=white"/>
</div>
<div className="group flex items-center justify-center h-16 transition-colors duration-300">
<img alt="DJI" className="w-16 h-16 opacity-30 group-hover:opacity-60 transition-opacity duration-300" src="https://api.iconify.design/simple-icons/dji.svg?color=white"/>
</div>
<div className="group flex items-center justify-center h-16 transition-colors duration-300">
<img alt="Nikon" className="w-16 h-16 opacity-30 group-hover:opacity-60 transition-opacity duration-300" src="https://api.iconify.design/simple-icons/nikon.svg?color=white"/>
</div>
<div className="group flex items-center justify-center h-16 transition-colors duration-300">
<img alt="Craftsman" className="w-16 h-16 opacity-30 group-hover:opacity-60 transition-opacity duration-300" src="https://api.iconify.design/simple-icons/craftsman.svg?color=white"/>
</div>
<div className="group flex items-center justify-center h-16 transition-colors duration-300">
<img alt="Sony" className="w-16 h-16 opacity-30 group-hover:opacity-60 transition-opacity duration-300" src="https://api.iconify.design/simple-icons/sony.svg?color=white"/>
</div>
</div>
</div>
</div>

<div className="z-10 bg-gradient-to-t from-space-900 to-transparent h-40 absolute right-0 bottom-0 left-0"></div>
</section>

<section className="py-32 relative overflow-hidden bg-grid" id="system">
<div className="container mx-auto px-6 max-w-7xl relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="reveal reveal-left">
<h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        Beyond <span className="text-white/40 italic">Flat Screens.</span>
</h2>
<p className="leading-relaxed text-lg text-gray-400 mb-8">Traditional interfaces confine data into rigid boxes. AURY breaks the plane, utilizing atmospheric depth, layered logic, and luminescent pathways to create an environment, not just a dashboard.</p>
<div className="space-y-6">
<div className="glass-panel p-6 rounded-2xl flex gap-4 items-start group hover:border-white/40 transition-colors">
<div className="mt-1 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"></path></svg>
</div>
<div className="">
<h4 className="font-display font-bold text-white mb-2">Spatial Logic</h4>
<p className="text-sm text-gray-400">Information structures itself based on user proximity and intent.</p>
</div>
</div>
<div className="glass-panel p-6 rounded-2xl flex gap-4 items-start group hover:border-white/40 transition-colors">
<div className="mt-1 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 20 20"><path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"></path></svg>
</div>
<div className="">
<h4 className="font-display font-bold text-white mb-2">Neural Caching</h4>
<p className="text-sm text-gray-400">Predictive pre-loading creates a zero-latency illusion across states.</p>
</div>
</div>
</div>
</div>

<div className="reveal reveal-right h-[600px] relative">

<div className="absolute right-0 top-10 w-72 h-80 glass-panel rounded-3xl border-t border-l border-white/20 p-6 transform rotate-3 animate-float backdrop-blur-xl z-20">
<div className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-500 to-gray-300 mb-6"></div>
<div className="space-y-3">
<div className="h-4 w-3/4 bg-white/10 rounded-full"></div>
<div className="h-4 w-1/2 bg-white/10 rounded-full"></div>
<div className="h-4 w-5/6 bg-white/10 rounded-full"></div>
</div>
<div className="mt-8 flex gap-2">
<div className="w-1/2 h-20 bg-white/5 rounded-xl"></div>
<div className="w-1/2 h-20 bg-white/5 rounded-xl border border-white/30"></div>
</div>
</div>
<div className="absolute right-32 top-32 w-80 h-96 glass-panel rounded-3xl border border-white/10 p-6 transform -rotate-6 animate-float-delayed backdrop-blur-md z-10 bg-space-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

<div className="w-full h-32 flex items-end gap-2 mb-6">
<div className="w-1/6 h-[40%] bg-white/20 rounded-t-sm"></div>
<div className="w-1/6 h-[70%] bg-white/20 rounded-t-sm"></div>
<div className="w-1/6 h-[50%] bg-white/20 rounded-t-sm"></div>
<div className="w-1/6 h-[90%] bg-white/60 rounded-t-sm shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
<div className="w-1/6 h-[60%] bg-white/20 rounded-t-sm"></div>
<div className="w-1/6 h-[80%] bg-white/20 rounded-t-sm"></div>
</div>
<div className="h-3 w-full bg-white/5 rounded-full mb-4"></div>
<div className="h-3 w-4/5 bg-white/5 rounded-full"></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 blur-[80px] rounded-full z-0"></div>
</div>
</div>
</div>
</section>

<section className="pt-32 pb-32 relative" id="topology">
<style>
    #topology .constellation-desktop {
      isolation: isolate;
    }

    #topology .constellation-node {
      position: absolute;
      z-index: 4;
      transition:
        transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
        border-color 0.45s ease,
        box-shadow 0.45s ease,
        background 0.45s ease,
        opacity 0.45s ease;
    }

    #topology .constellation-node:hover {
      transform: translateY(-8px) scale(1.02);
      border-color: rgba(255, 255, 255, 0.14);
      box-shadow:
        0 20px 50px rgba(0, 0, 0, 0.35),
        0 0 35px rgba(255, 255, 255, 0.04);
    }

    #topology .constellation-node .node-dot {
      transition:
        transform 0.45s ease,
        box-shadow 0.45s ease,
        background-color 0.45s ease;
    }

    #topology .constellation-node:hover .node-dot {
      transform: scale(1.16);
      box-shadow:
        0 0 14px rgba(255,255,255,0.95),
        0 0 26px rgba(255,255,255,0.28);
      background-color: rgba(255,255,255,1);
    }

    #topology .center-core {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 240px;
      height: 240px;
      transform: translate(-50%, -50%);
      z-index: 2;
      pointer-events: none;
    }

    #topology .core-glow-1,
    #topology .core-glow-2,
    #topology .core-glow-3 {
      position: absolute;
      border-radius: 9999px;
      inset: 50%;
      transform: translate(-50%, -50%);
    }

    #topology .core-glow-1 {
      width: 90px;
      height: 90px;
      background: radial-gradient(circle, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 35%, rgba(255,255,255,0) 70%);
      filter: blur(10px);
    }

    #topology .core-glow-2 {
      width: 180px;
      height: 180px;
      background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 40%, rgba(255,255,255,0) 70%);
      filter: blur(24px);
    }

    #topology .core-glow-3 {
      width: 280px;
      height: 280px;
      background: radial-gradient(circle, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 70%);
      filter: blur(45px);
      opacity: 0.8;
    }

    #topology .core-ring {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 72px;
      height: 72px;
      transform: translate(-50%, -50%);
      border-radius: 9999px;
      border: 1px solid rgba(255,255,255,0.14);
      box-shadow:
        inset 0 0 20px rgba(255,255,255,0.03),
        0 0 24px rgba(255,255,255,0.05);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
    }

    #topology .core-ring::before {
      content: "";
      position: absolute;
      inset: 10px;
      border-radius: 9999px;
      border: 1px dashed rgba(255,255,255,0.18);
      animation: topologyCoreRotate 18s linear infinite;
    }

    #topology .core-dot {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 10px;
      height: 10px;
      transform: translate(-50%, -50%);
      border-radius: 9999px;
      background: rgba(255,255,255,0.92);
      box-shadow:
        0 0 14px rgba(255,255,255,0.95),
        0 0 28px rgba(255,255,255,0.18);
    }

    #topology .core-orbit {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 132px;
      height: 132px;
      transform: translate(-50%, -50%);
      border-radius: 9999px;
      border: 1px dashed rgba(255,255,255,0.07);
      animation: topologyCoreRotateReverse 22s linear infinite;
      opacity: 0.65;
    }

    #topology .core-pulse-line {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 120px;
      height: 1px;
      transform-origin: left center;
      background: linear-gradient(90deg, rgba(255,255,255,0.22), rgba(255,255,255,0));
      opacity: 0.18;
    }

    #topology .core-pulse-line.line-1 {
      transform: translate(-50%, -50%) rotate(18deg);
    }

    #topology .core-pulse-line.line-2 {
      transform: translate(-50%, -50%) rotate(138deg);
    }

    #topology .core-pulse-line.line-3 {
      transform: translate(-50%, -50%) rotate(258deg);
    }

    #topology .base-network {
      z-index: 1;
    }

    #topology .base-network path {
      opacity: 0.42;
    }

    #topology .signal-network {
      z-index: 3;
      overflow: visible;
    }

    #topology .signal-line,
    #topology .signal-glow {
      opacity: 0;
      transition: opacity 0.35s ease;
      pointer-events: none;
    }

    #topology .signal-line {
      stroke-dasharray: 10 14;
      stroke-dashoffset: 0;
      filter: drop-shadow(0 0 6px rgba(255,255,255,0.2));
    }

    #topology .signal-glow {
      filter: blur(2px);
    }

    #topology .node-1-card:hover ~ .signal-network .signal-line.node-1,
    #topology .node-1-card:hover ~ .signal-network .signal-glow.node-1,
    #topology .node-2-card:hover ~ .signal-network .signal-line.node-2,
    #topology .node-2-card:hover ~ .signal-network .signal-glow.node-2,
    #topology .node-3-card:hover ~ .signal-network .signal-line.node-3,
    #topology .node-3-card:hover ~ .signal-network .signal-glow.node-3,
    #topology .node-4-card:hover ~ .signal-network .signal-line.node-4,
    #topology .node-4-card:hover ~ .signal-network .signal-glow.node-4,
    #topology .node-5-card:hover ~ .signal-network .signal-line.node-5,
    #topology .node-5-card:hover ~ .signal-network .signal-glow.node-5,
    #topology .node-6-card:hover ~ .signal-network .signal-line.node-6,
    #topology .node-6-card:hover ~ .signal-network .signal-glow.node-6 {
      opacity: 1;
    }

    #topology .node-1-card:hover ~ .signal-network .signal-line.node-1,
    #topology .node-2-card:hover ~ .signal-network .signal-line.node-2,
    #topology .node-3-card:hover ~ .signal-network .signal-line.node-3,
    #topology .node-4-card:hover ~ .signal-network .signal-line.node-4,
    #topology .node-5-card:hover ~ .signal-network .signal-line.node-5,
    #topology .node-6-card:hover ~ .signal-network .signal-line.node-6 {
      animation: topologyFlow 2.4s linear infinite;
    }

    #topology .node-1-card:hover ~ .signal-network .signal-glow.node-1,
    #topology .node-2-card:hover ~ .signal-network .signal-glow.node-2,
    #topology .node-3-card:hover ~ .signal-network .signal-glow.node-3,
    #topology .node-4-card:hover ~ .signal-network .signal-glow.node-4,
    #topology .node-5-card:hover ~ .signal-network .signal-glow.node-5,
    #topology .node-6-card:hover ~ .signal-network .signal-glow.node-6 {
      animation: topologyGlow 1.8s ease-in-out infinite;
    }

    @keyframes topologyFlow {
      from {
        stroke-dashoffset: 0;
      }
      to {
        stroke-dashoffset: -96;
      }
    }

    @keyframes topologyGlow {
      0%, 100% {
        opacity: 0.18;
      }
      50% {
        opacity: 0.62;
      }
    }

    @keyframes topologyCoreRotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes topologyCoreRotateReverse {
      from {
        transform: translate(-50%, -50%) rotate(360deg);
      }
      to {
        transform: translate(-50%, -50%) rotate(0deg);
      }
    }
  </style>
<div className="text-center mb-20 relative z-20 reveal">
<h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
      Topological
      <span className="text-gradient-clean">Map.</span>
</h2>
<p className="text-gray-400 max-w-xl mx-auto">
      Nodes interact organically. Hover to inspect system states.
    </p>
</div>
<div className="container mx-auto px-6 max-w-6xl">

<div className="constellation-desktop relative w-full min-h-[600px] hidden md:block reveal reveal-scale">

<div className="center-core">
<div className="core-glow-3"></div>
<div className="core-glow-2"></div>
<div className="core-glow-1"></div>
<div className="core-orbit"></div>
<div className="core-ring"></div>
<div className="core-dot"></div>
<div className="core-pulse-line line-1"></div>
<div className="core-pulse-line line-2"></div>
<div className="core-pulse-line line-3"></div>
</div>

<div className="constellation-node node-1-card absolute top-[10%] left-[15%] w-64 glass-panel p-5 rounded-xl cursor-default">
<div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mb-3">
<div className="node-dot w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#ffffff]"></div>
</div>
<h3 className="font-display font-semibold text-white mb-1">Core Routing</h3>
<p className="text-xs text-gray-400">Intelligent packet distribution.</p>
</div>

<div className="constellation-node node-2-card absolute top-[20%] right-[10%] w-64 glass-panel p-5 rounded-xl cursor-default">
<div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mb-3">
<div className="node-dot w-2 h-2 bg-gray-300 rounded-full shadow-[0_0_10px_#ffffff]"></div>
</div>
<h3 className="font-display font-semibold text-white mb-1">Quantum Sync</h3>
<p className="text-xs text-gray-400">Real-time state replication.</p>
</div>

<div className="constellation-node node-3-card absolute top-[45%] left-[5%] w-64 glass-panel p-5 rounded-xl cursor-default">
<div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mb-3">
<div className="node-dot w-2 h-2 bg-gray-400 rounded-full shadow-[0_0_10px_#ffffff]"></div>
</div>
<h3 className="font-display font-semibold text-white mb-1">Void Cache</h3>
<p className="text-xs text-gray-400">Deep memory preservation.</p>
</div>

<div className="constellation-node node-4-card absolute top-[55%] right-[5%] w-64 glass-panel p-5 rounded-xl cursor-default">
<div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mb-3">
<div className="node-dot w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#ffffff]"></div>
</div>
<h3 className="font-display font-semibold text-white mb-1">Omni-Bridge</h3>
<p className="text-xs text-gray-400">API connection singularity.</p>
</div>

<div className="constellation-node node-5-card absolute bottom-[10%] left-[25%] w-64 glass-panel p-5 rounded-xl cursor-default">
<div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mb-3">
<div className="node-dot w-2 h-2 bg-gray-300 rounded-full shadow-[0_0_10px_#ffffff]"></div>
</div>
<h3 className="font-display font-semibold text-white mb-1">Neuro-Link</h3>
<p className="text-xs text-gray-400">User behavior adaptation.</p>
</div>

<div className="constellation-node node-6-card absolute bottom-[5%] right-[25%] w-64 glass-panel p-5 rounded-xl cursor-default">
<div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mb-3">
<div className="node-dot w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff]"></div>
</div>
<h3 className="font-display font-semibold text-white mb-1">Pulse Analytics</h3>
<p className="text-xs text-gray-400">Event telemetry mapping.</p>
</div>

<svg className="base-network absolute inset-0 w-full h-full pointer-events-none" preserveaspectratio="none" viewbox="0 0 1000 600">
<path d="M 250 120 Q 305 205 250 300" fill="none" stroke="rgba(255,255,255,0.16)" stroke-dasharray="4 6" strokeLinecap="round" strokeWidth="1.2"></path>
<path d="M 800 180 Q 730 290 800 380" fill="none" stroke="rgba(255,255,255,0.14)" stroke-dasharray="4 6" strokeLinecap="round" strokeWidth="1.2"></path>
<path d="M 150 300 Q 270 380 350 500" fill="none" stroke="rgba(255,255,255,0.12)" stroke-dasharray="4 6" strokeLinecap="round" strokeWidth="1.2"></path>
<path d="M 900 380 Q 820 470 700 550" fill="none" stroke="rgba(255,255,255,0.10)" stroke-dasharray="4 6" strokeLinecap="round" strokeWidth="1.2"></path>
</svg>

<svg className="signal-network absolute inset-0 w-full h-full pointer-events-none" preserveaspectratio="none" viewbox="0 0 1000 600">

<path className="signal-glow node-1" d="M 250 120 Q 355 180 500 300" fill="none" stroke="rgba(255,255,255,0.14)" strokeLinecap="round" strokeWidth="5"></path>
<path className="signal-line node-1" d="M 250 120 Q 355 180 500 300" fill="none" stroke="rgba(255,255,255,0.92)" strokeLinecap="round" strokeWidth="1.6"></path>

<path className="signal-glow node-2" d="M 800 180 Q 655 205 500 300" fill="none" stroke="rgba(255,255,255,0.14)" strokeLinecap="round" strokeWidth="5"></path>
<path className="signal-line node-2" d="M 800 180 Q 655 205 500 300" fill="none" stroke="rgba(255,255,255,0.92)" strokeLinecap="round" strokeWidth="1.6"></path>

<path className="signal-glow node-3" d="M 150 300 Q 315 260 500 300" fill="none" stroke="rgba(255,255,255,0.14)" strokeLinecap="round" strokeWidth="5"></path>
<path className="signal-line node-3" d="M 150 300 Q 315 260 500 300" fill="none" stroke="rgba(255,255,255,0.92)" strokeLinecap="round" strokeWidth="1.6"></path>

<path className="signal-glow node-4" d="M 900 380 Q 705 335 500 300" fill="none" stroke="rgba(255,255,255,0.14)" strokeLinecap="round" strokeWidth="5"></path>
<path className="signal-line node-4" d="M 900 380 Q 705 335 500 300" fill="none" stroke="rgba(255,255,255,0.92)" strokeLinecap="round" strokeWidth="1.6"></path>

<path className="signal-glow node-5" d="M 350 500 Q 405 375 500 300" fill="none" stroke="rgba(255,255,255,0.14)" strokeLinecap="round" strokeWidth="5"></path>
<path className="signal-line node-5" d="M 350 500 Q 405 375 500 300" fill="none" stroke="rgba(255,255,255,0.92)" strokeLinecap="round" strokeWidth="1.6"></path>

<path className="signal-glow node-6" d="M 700 550 Q 610 405 500 300" fill="none" stroke="rgba(255,255,255,0.14)" strokeLinecap="round" strokeWidth="5"></path>
<path className="signal-line node-6" d="M 700 550 Q 610 405 500 300" fill="none" stroke="rgba(255,255,255,0.92)" strokeLinecap="round" strokeWidth="1.6"></path>
</svg>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden">
<div className="glass-panel p-6 rounded-2xl">
<h3 className="font-bold text-white mb-2">Core Routing</h3>
<p className="text-sm text-gray-400">Intelligent packet distribution.</p>
</div>
<div className="glass-panel p-6 rounded-2xl">
<h3 className="font-bold text-gray-200 mb-2">Quantum Sync</h3>
<p className="text-sm text-gray-400">Real-time state replication.</p>
</div>
<div className="glass-panel p-6 rounded-2xl">
<h3 className="font-bold text-gray-300 mb-2">Void Cache</h3>
<p className="text-sm text-gray-400">Deep memory preservation.</p>
</div>
<div className="glass-panel p-6 rounded-2xl">
<h3 className="font-bold text-white mb-2">Omni-Bridge</h3>
<p className="text-sm text-gray-400">API connection singularity.</p>
</div>
<div className="glass-panel p-6 rounded-2xl">
<h3 className="font-bold text-gray-200 mb-2">Neuro-Link</h3>
<p className="text-sm text-gray-400">User behavior adaptation.</p>
</div>
<div className="glass-panel p-6 rounded-2xl">
<h3 className="font-bold text-white mb-2">Pulse Analytics</h3>
<p className="text-sm text-gray-400">Event telemetry mapping.</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#030509] pt-32 pb-32 relative" id="engine">
<style>
    #engine .engine-glow {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 800px;
      height: 800px;
      transform: translate(-50%, -50%);
      border-radius: 9999px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 30%, transparent 70%);
      filter: blur(20px);
      pointer-events: none;
    }

    #engine .engine-showcase {
      perspective: 1800px;
    }

    #engine .engine-stack {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
    }

    #engine .engine-panel {
      position: absolute;
      width: 24rem;
      height: 24rem;
      left: 50%;
      top: 50%;
      border-radius: 1.5rem;
      overflow: hidden;
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      will-change: transform, opacity, box-shadow, border-color;
      transition:
        transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
        opacity 0.45s ease,
        box-shadow 0.45s ease,
        border-color 0.45s ease,
        filter 0.45s ease;
    }

    #engine .panel-bottom {
      background: rgba(8, 8, 8, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.02);
      box-shadow: 0 40px 80px rgba(0, 0, 0, 0.8);
      opacity: 0.35;
      transform: translate(-50%, -50%) translateX(35px) translateY(45px) translateZ(-20px) rotateX(60deg) rotateZ(-28deg);
      z-index: 1;
    }

    #engine .panel-middle {
      background: rgba(18, 18, 18, 0.55);
      border: 1px solid rgba(255, 255, 255, 0.04);
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
      opacity: 0.75;
      transform: translate(-50%, -50%) translateX(-25px) translateY(5px) translateZ(40px) rotateX(60deg) rotateZ(-28deg);
      z-index: 2;
    }

    #engine .panel-top {
      background: linear-gradient(135deg, rgba(35, 35, 35, 0.7), rgba(15, 15, 15, 0.8));
      border: 1px solid rgba(255, 255, 255, 0.12);
      box-shadow:
        inset 0 1px 1px rgba(255, 255, 255, 0.08),
        0 20px 50px rgba(0, 0, 0, 0.7),
        0 0 40px rgba(255, 255, 255, 0.03);
      animation: topCardFloat 7s ease-in-out infinite;
      z-index: 3;
    }

    @keyframes topCardFloat {

      0%,
      100% {
        transform: translate(-50%, -50%) translateX(25px) translateY(-35px) translateZ(100px) rotateX(60deg) rotateZ(-28deg);
      }

      50% {
        transform: translate(-50%, -50%) translateX(22px) translateY(-40px) translateZ(108px) rotateX(60.5deg) rotateZ(-27.5deg);
      }
    }

    @keyframes pulseGlow {

      0%,
      100% {
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.02);
        border-color: rgba(255, 255, 255, 0.05);
      }

      50% {
        box-shadow: 0 0 40px rgba(255, 255, 255, 0.08), inset 0 0 10px rgba(255, 255, 255, 0.03);
        border-color: rgba(255, 255, 255, 0.12);
      }
    }

    #engine .engine-panel::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, transparent 30%, transparent 70%, rgba(255, 255, 255, 0.02) 100%);
      pointer-events: none;
    }

    #engine .engine-panel::after {
      content: "";
      position: absolute;
      inset: 1px;
      border-radius: inherit;
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.02);
      pointer-events: none;
    }

    /* Stack opens up on hover */
    #engine .engine-showcase:hover .panel-bottom,
    #engine .panel-bottom:hover {
      transform: translate(-50%, -50%) translateX(70px) translateY(88px) translateZ(-34px) rotateX(60deg) rotateZ(-28deg);
      opacity: 0.48;
      border-color: rgba(255, 255, 255, 0.05);
      box-shadow: 0 52px 100px rgba(0, 0, 0, 0.82);
    }

    #engine .engine-showcase:hover .panel-middle,
    #engine .panel-middle:hover {
      transform: translate(-50%, -50%) translateX(-42px) translateY(16px) translateZ(68px) rotateX(60deg) rotateZ(-28deg);
      opacity: 0.86;
      border-color: rgba(255, 255, 255, 0.07);
      box-shadow: 0 40px 80px rgba(0, 0, 0, 0.68);
    }

    #engine .engine-showcase:hover .panel-top,
    #engine .panel-top:hover {
      animation-play-state: paused;
      transform: translate(-50%, -50%) translateX(36px) translateY(-64px) translateZ(136px) rotateX(60deg) rotateZ(-28deg);
      box-shadow:
        inset 0 1px 1px rgba(255, 255, 255, 0.08),
        0 28px 70px rgba(0, 0, 0, 0.74),
        0 0 48px rgba(255, 255, 255, 0.04);
    }

    /* Focused card lifts a bit more */
    #engine .panel-bottom:hover {
      transform: translate(-50%, -50%) translateX(76px) translateY(98px) translateZ(-24px) rotateX(60deg) rotateZ(-28deg) scale(1.01);
    }

    #engine .panel-middle:hover {
      transform: translate(-50%, -50%) translateX(-48px) translateY(10px) translateZ(82px) rotateX(60deg) rotateZ(-28deg) scale(1.015);
    }

    #engine .panel-top:hover {
      transform: translate(-50%, -50%) translateX(38px) translateY(-78px) translateZ(152px) rotateX(60deg) rotateZ(-28deg) scale(1.02);
    }

    @media (max-width: 1024px) {
      #engine .engine-panel {
        width: 20rem;
        height: 20rem;
      }

      #engine .panel-bottom {
        transform: translate(-50%, -50%) translateX(25px) translateY(35px) translateZ(-15px) rotateX(60deg) rotateZ(-28deg);
      }

      #engine .panel-middle {
        transform: translate(-50%, -50%) translateX(-15px) translateY(5px) translateZ(25px) rotateX(60deg) rotateZ(-28deg);
      }

      @keyframes topCardFloat {

        0%,
        100% {
          transform: translate(-50%, -50%) translateX(15px) translateY(-25px) translateZ(70px) rotateX(60deg) rotateZ(-28deg);
        }

        50% {
          transform: translate(-50%, -50%) translateX(12px) translateY(-30px) translateZ(75px) rotateX(60.5deg) rotateZ(-27.5deg);
        }
      }

      #engine .engine-showcase:hover .panel-bottom,
      #engine .panel-bottom:hover {
        transform: translate(-50%, -50%) translateX(46px) translateY(66px) translateZ(-22px) rotateX(60deg) rotateZ(-28deg);
      }

      #engine .engine-showcase:hover .panel-middle,
      #engine .panel-middle:hover {
        transform: translate(-50%, -50%) translateX(-26px) translateY(12px) translateZ(46px) rotateX(60deg) rotateZ(-28deg);
      }

      #engine .engine-showcase:hover .panel-top,
      #engine .panel-top:hover {
        transform: translate(-50%, -50%) translateX(24px) translateY(-48px) translateZ(96px) rotateX(60deg) rotateZ(-28deg);
      }
    }

    @media (max-width: 767px) {
      #engine .engine-showcase {
        height: 24rem;
      }

      #engine .engine-panel {
        width: 16rem;
        height: 16rem;
      }

      #engine .panel-bottom {
        transform: translate(-50%, -50%) translateX(15px) translateY(25px) translateZ(-10px) rotateX(60deg) rotateZ(-28deg);
      }

      #engine .panel-middle {
        transform: translate(-50%, -50%) translateX(-10px) translateY(0px) translateZ(15px) rotateX(60deg) rotateZ(-28deg);
      }

      @keyframes topCardFloat {

        0%,
        100% {
          transform: translate(-50%, -50%) translateX(10px) translateY(-15px) translateZ(40px) rotateX(60deg) rotateZ(-28deg);
        }

        50% {
          transform: translate(-50%, -50%) translateX(8px) translateY(-18px) translateZ(45px) rotateX(60.5deg) rotateZ(-27.5deg);
        }
      }

      #engine .engine-showcase:hover .panel-bottom,
      #engine .panel-bottom:hover {
        transform: translate(-50%, -50%) translateX(30px) translateY(48px) translateZ(-16px) rotateX(60deg) rotateZ(-28deg);
      }

      #engine .engine-showcase:hover .panel-middle,
      #engine .panel-middle:hover {
        transform: translate(-50%, -50%) translateX(-18px) translateY(8px) translateZ(30px) rotateX(60deg) rotateZ(-28deg);
      }

      #engine .engine-showcase:hover .panel-top,
      #engine .panel-top:hover {
        transform: translate(-50%, -50%) translateX(18px) translateY(-32px) translateZ(58px) rotateX(60deg) rotateZ(-28deg);
      }
    }
  </style>
<div className="engine-glow"></div>
<div className="container flex flex-col lg:flex-row max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative gap-x-20 gap-y-20 items-center">

<div className="lg:w-1/3 space-y-8 reveal reveal-left">
<h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
        The Engine <br/>
<span className="text-white">Revealed.</span>
</h2>
<p className="text-gray-400 text-lg">
        Observe data streams as they process through our multi-layered glass
        matrix. Unprecedented visibility.
      </p>
<div className="space-y-4 pt-4 border-t border-white/10">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white font-mono text-sm">
            01
          </div>
<span className="text-sm font-normal">Ingestion Layer</span>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white font-mono text-sm">
            02
          </div>
<span className="text-sm font-normal">Processing Matrix</span>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/40 flex items-center justify-center text-white font-mono text-sm shadow-[0_0_10px_rgba(255,255,255,0.18)]">
            03
          </div>
<span className="text-sm font-normal text-white">Synthesis Output</span>
</div>
</div>
</div>

<div className="lg:w-2/3 w-full h-[30rem] mt-10 lg:mt-0 relative engine-showcase flex items-center justify-center reveal reveal-right">
<div className="engine-stack">

<div className="engine-panel panel-bottom p-6 flex flex-col justify-between">
<div className="w-1/3 h-1 bg-white/10 rounded-full"></div>
<div className="grid grid-cols-2 gap-4 mt-auto">
<div className="aspect-[2/1] bg-white/[0.02] rounded-xl border border-white/[0.02]"></div>
<div className="aspect-[2/1] bg-white/[0.02] rounded-xl border border-white/[0.02]"></div>
</div>
</div>

<div className="engine-panel panel-middle p-8 flex flex-col justify-center gap-6">
<div className="flex justify-between items-end border-b border-white/[0.04] pb-4">
<div className="w-10 h-10 rounded bg-white/[0.03] border border-white/[0.02]"></div>
<div className="w-1/2 h-1 bg-white/[0.05] rounded-full"></div>
</div>
<div className="space-y-4">
<div className="h-1.5 w-full bg-white/[0.04] rounded-full"></div>
<div className="h-1.5 w-5/6 bg-white/[0.04] rounded-full"></div>
<div className="h-1.5 w-4/6 bg-white/[0.04] rounded-full"></div>
</div>
</div>

<div className="engine-panel panel-top p-8 flex flex-col items-center justify-center relative">
<div className="w-32 h-32 rounded-full border border-white/10 mb-8 flex items-center justify-center relative" style={{animation: 'pulseGlow 4s ease-in-out infinite'}}>
<div className="absolute inset-3 border border-white/5 rounded-full"></div>
<div className="w-14 h-14 bg-white/[0.03] rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.9)]"></div>
</div>
</div>
<div className="text-[10px] font-mono text-gray-400 tracking-[0.2em] uppercase">
            Synthesis_Active
          </div>
<div className="absolute bottom-8 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent">
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-32 pb-32 relative">
<style>
        /* AURY Pipeline Progressive Animations */
        .seq-fade-up {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.active .seq-fade-up {
            opacity: 1;
            transform: translateY(0);
        }

        .seq-dot {
            background-color: #1f2937; /* Base state */
            box-shadow: 0 0 0 rgba(255,255,255,0);
            transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.active .seq-dot {
            background-color: #d1d5db; /* Active glow state */
            box-shadow: 0 0 10px rgba(255,255,255,0.3);
        }

        .seq-code {
            opacity: 0;
            transform: translateY(6px);
        }
        .reveal.active .seq-code {
            animation: seqCodeReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .seq-prog {
            width: 0%;
            position: relative;
        }
        .reveal.active .seq-prog {
            animation: seqFill var(--duration, 1.2s) cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .seq-ui {
            opacity: 0;
            transform: scale(0.95);
        }
        .reveal.active .seq-ui {
            animation: seqUiPop 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .seq-node {
            opacity: 0;
            transform: scale(0);
        }
        .reveal.active .seq-node {
            animation: seqNodePop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes seqCodeReveal {
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes seqFill {
            to { width: var(--target-width, 100%); }
        }
        @keyframes seqUiPop {
            to { opacity: 1; transform: scale(1); }
        }
        @keyframes seqNodePop {
            0% { opacity: 0; transform: scale(0); }
            60% { transform: scale(1.3); box-shadow: 0 0 15px rgba(255,255,255,0.5); opacity: 1; }
            100% { opacity: 1; transform: scale(1); box-shadow: 0 0 8px rgba(255,255,255,0.5); }
        }
    </style>

<div className="text-center mb-24 relative z-20 px-4 reveal">
<h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white">Sequence of <span className="text-white/40">Events.</span></h2>
<p className="text-lg font-light text-gray-400 max-w-2xl mx-auto">Follow the exact lifecycle of data as it enters the aury dimension. Fully transparent, instantly observable, and radically efficient.</p>
</div>
<div className="container max-w-5xl z-10 mr-auto ml-auto pr-4 pl-4 relative">

<div className="absolute left-[31px] md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:-translate-x-1/2 hidden sm:block"></div>

<div className="relative flex flex-col md:flex-row justify-between items-start md:items-center mb-24 group reveal">

<div className="absolute left-[15px] md:left-1/2 top-2 md:top-1/2 w-8 h-8 rounded-full border border-white/10 bg-[#02040A] flex items-center justify-center md:-translate-x-1/2 md:-translate-y-1/2 z-10 group-hover:border-white/30 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)] hidden sm:flex">
<div className="w-2 h-2 rounded-full seq-dot"></div>
</div>

<div className="w-full md:w-[45%] pl-[60px] md:pl-0 md:pr-16 md:text-right flex flex-col sm:items-start md:items-end seq-fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-[11px] font-mono text-gray-300 mb-5">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
<span className="">Daemon Online <span className="text-white/30 ml-1">&lt; 1ms</span></span>
</div>
<h3 className="text-2xl font-display font-medium tracking-tight text-white/90 mb-3">Initialize</h3>
<p className="text-sm text-gray-400 leading-relaxed max-w-sm md:ml-auto">Connect the protocol to your local environment. Zero config required. The daemon binds to your native ports automatically.</p>
</div>

<div className="w-full md:w-[45%] pl-[60px] md:pl-16 mt-8 md:mt-0 seq-fade-up">
<div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 shadow-xl w-full max-w-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-white/20 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
<div className="flex gap-1.5 mb-4 border-b border-white/5 pb-4">
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
</div>
<div className="font-mono text-[13px] text-gray-300 seq-code" style={{animationDelay: '500ms'}}>
<span className="text-white/40">~</span> <span className="text-gray-300">aury</span> init --core
                    </div>
<div className="font-mono text-[11px] text-gray-500 mt-3 space-y-1">
<div className="seq-code" style={{animationDelay: '700ms'}}>&gt; binding to port 3000...</div>
<div className="text-gray-400 seq-code" style={{animationDelay: '900ms'}}>&gt; daemon connected.</div>
</div>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row-reverse justify-between items-start md:items-center mb-24 group reveal">

<div className="absolute left-[15px] md:left-1/2 top-2 md:top-1/2 w-8 h-8 rounded-full border border-white/10 bg-[#02040A] flex items-center justify-center md:-translate-x-1/2 md:-translate-y-1/2 z-10 group-hover:border-white/30 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)] hidden sm:flex">
<div className="w-2 h-2 rounded-full seq-dot"></div>
</div>

<div className="w-full md:w-[45%] pl-[60px] md:pl-16 md:text-left flex flex-col items-start seq-fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-[11px] font-mono text-gray-300 mb-5">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
<span>14,204 Nodes Indexed</span>
</div>
<h3 className="text-2xl font-display font-medium tracking-tight text-white/90 mb-3">Index</h3>
<p className="text-sm text-gray-400 leading-relaxed max-w-sm">The engine scans and indices your entire dimensional architecture. Complex nested relations are mapped in real-time space.</p>
</div>

<div className="w-full md:w-[45%] pl-[60px] md:pl-0 md:pr-16 mt-8 md:mt-0 flex md:justify-end seq-fade-up">
<div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 shadow-xl w-full max-w-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-white/20 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
<div className="flex items-center gap-4 mb-5">
<div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center">
<svg className="text-gray-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<div>
<div className="text-sm text-white/90 font-medium tracking-tight">Dimensional Scan</div>
<div className="text-xs text-gray-500 font-mono mt-0.5">Mapping Relations</div>
</div>
</div>
<div className="space-y-2">
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gray-300 rounded-full animate-pulse seq-prog" style={{-TargetWidth: '85%', -Duration: '1.5s', animationDelay: '700ms'}}></div>
</div>
<div className="flex justify-between text-[10px] font-mono text-gray-500">
<span className="seq-code" style={{animationDelay: '600ms'}}>Processing...</span>
<span className="text-gray-300 seq-code" style={{animationDelay: '1800ms'}}>85%</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row justify-between items-start md:items-center mb-24 group reveal">

<div className="absolute left-[15px] md:left-1/2 top-2 md:top-1/2 w-8 h-8 rounded-full border border-white/10 bg-[#02040A] flex items-center justify-center md:-translate-x-1/2 md:-translate-y-1/2 z-10 group-hover:border-white/30 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)] hidden sm:flex">
<div className="w-2 h-2 rounded-full seq-dot"></div>
</div>

<div className="w-full md:w-[45%] pl-[60px] md:pl-0 md:pr-16 md:text-right flex flex-col sm:items-start md:items-end seq-fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-[11px] font-mono text-gray-300 mb-5">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
<span>Projection Active</span>
</div>
<h3 className="text-2xl font-display font-medium tracking-tight text-white/90 mb-3">Project</h3>
<p className="text-sm text-gray-400 leading-relaxed max-w-sm md:ml-auto">Outputs are projected into the interface fabric instantly. State changes stream smoothly without client-side re-renders.</p>
</div>

<div className="w-full md:w-[45%] pl-[60px] md:pl-16 mt-8 md:mt-0 seq-fade-up">
<div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 shadow-xl w-full max-w-sm flex flex-col gap-3 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-white/20 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
<div className="flex gap-3 items-center">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center seq-ui" style={{animationDelay: '700ms'}}>
<svg className="text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="9" x2="9" y1="21" y2="9"></line></svg>
</div>
<div className="flex-1 space-y-2.5">
<div className="h-2 w-3/4 bg-white/10 rounded-full seq-ui" style={{animationDelay: '850ms'}}></div>
<div className="h-2 w-1/2 bg-white/5 rounded-full seq-ui" style={{animationDelay: '1000ms'}}></div>
</div>
</div>
<div className="h-20 w-full rounded-xl bg-gradient-to-tr from-white/[0.02] to-white/5 border border-white/5 mt-1 seq-ui" style={{animationDelay: '1150ms'}}></div>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row-reverse justify-between items-start md:items-center mb-24 group reveal">

<div className="absolute left-[15px] md:left-1/2 top-2 md:top-1/2 w-8 h-8 rounded-full border border-white/10 bg-[#02040A] flex items-center justify-center md:-translate-x-1/2 md:-translate-y-1/2 z-10 group-hover:border-white/30 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)] hidden sm:flex">
<div className="w-2 h-2 rounded-full seq-dot"></div>
</div>

<div className="w-full md:w-[45%] pl-[60px] md:pl-16 md:text-left flex flex-col items-start seq-fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-[11px] font-mono text-gray-300 mb-5">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" ry="2" width="16" x="4" y="4"></rect><rect height="6" width="6" x="9" y="9"></rect><line x1="9" x2="9" y1="1" y2="4"></line><line x1="15" x2="15" y1="1" y2="4"></line><line x1="9" x2="9" y1="20" y2="23"></line><line x1="15" x2="15" y1="20" y2="23"></line><line x1="20" x2="23" y1="9" y2="9"></line><line x1="20" x2="23" y1="14" y2="14"></line><line x1="1" x2="4" y1="9" y2="9"></line><line x1="1" x2="4" y1="14" y2="14"></line></svg>
<span>Artifact Generated <span className="text-white/30 ml-1">12kb</span></span>
</div>
<h3 className="text-2xl font-display font-medium tracking-tight text-white/90 mb-3">Compile</h3>
<p className="text-sm text-gray-400 leading-relaxed max-w-sm">Assets and logic branches are fused into a singular, high-performance binary. Dead code is vaporized automatically.</p>
</div>

<div className="w-full md:w-[45%] pl-[60px] md:pl-0 md:pr-16 mt-8 md:mt-0 flex md:justify-end seq-fade-up">
<div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 shadow-xl w-full max-w-sm flex items-center gap-5 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-white/20 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
<div className="w-14 h-14 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center relative overflow-hidden shrink-0 seq-ui" style={{animationDelay: '800ms'}}>
<div className="absolute inset-0 bg-white/5 animate-pulse"></div>
<svg className="text-gray-300 relative z-10" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<div className="flex-1 w-full">
<div className="flex justify-between items-center mb-1.5 w-full">
<span className="text-sm text-white/90 font-medium tracking-tight seq-code" style={{animationDelay: '950ms'}}>core_engine.bin</span>
<span className="text-[11px] text-gray-300 font-mono seq-code" style={{animationDelay: '1100ms'}}>12kb</span>
</div>
<div className="text-[10px] text-gray-500 font-mono tracking-tight seq-code" style={{animationDelay: '1250ms'}}>Optimizing bundles...</div>
</div>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row justify-between items-start md:items-center group reveal">

<div className="absolute left-[15px] md:left-1/2 top-2 md:top-1/2 w-8 h-8 rounded-full border border-white/10 bg-[#02040A] flex items-center justify-center md:-translate-x-1/2 md:-translate-y-1/2 z-10 group-hover:border-white/30 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)] hidden sm:flex">
<div className="w-2 h-2 rounded-full seq-dot"></div>
</div>

<div className="w-full md:w-[45%] pl-[60px] md:pl-0 md:pr-16 md:text-right flex flex-col sm:items-start md:items-end seq-fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-[11px] font-mono text-gray-300 mb-5">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
<span>Edge Nodes Active</span>
</div>
<h3 className="text-2xl font-display font-medium tracking-tight text-white/90 mb-3">Deploy</h3>
<p className="text-sm text-gray-400 leading-relaxed max-w-sm md:ml-auto">Instantaneous propagation across the global edge network. Your ecosystem goes live and scales dynamically on demand.</p>
</div>

<div className="w-full md:w-[45%] pl-[60px] md:pl-16 mt-8 md:mt-0 seq-fade-up">
<div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 shadow-xl w-full max-w-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-white/20 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
<div className="flex items-center justify-between mb-5">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-gray-300 shadow-[0_0_8px_rgba(255,255,255,0.5)]"></div>
<span className="text-[11px] text-gray-400 font-mono uppercase tracking-widest">Global Network</span>
</div>
<span className="text-[11px] text-gray-300 font-mono seq-code" style={{animationDelay: '1400ms'}}>100% propagated</span>
</div>
<div className="relative h-24 w-full rounded-xl bg-[#0a0d14]/50 border border-white/5 overflow-hidden flex items-center justify-center">
<div className="absolute left-[20%] top-[40%] w-1.5 h-1.5 bg-gray-300 rounded-full seq-node" style={{animationDelay: '950ms'}}></div>
<div className="absolute left-[50%] top-[30%] w-1.5 h-1.5 bg-gray-300 rounded-full seq-node animate-pulse" style={{animationDelay: '1100ms'}}></div>
<div className="absolute left-[75%] top-[60%] w-1.5 h-1.5 bg-gray-300 rounded-full seq-node" style={{animationDelay: '1250ms'}}></div>
<svg className="absolute inset-0 w-full h-full seq-ui" preserveaspectratio="none" style={{animationDelay: '800ms'}} viewbox="0 0 100 100">
<path d="M 20 40 L 50 30 L 75 60 Z" fill="none" stroke="rgba(255,255,255,0.2)" stroke-dasharray="3 3" strokeWidth="1"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 relative overflow-hidden bg-space-900 border-y border-white/5">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
<div className="container mx-auto px-6 z-10 relative">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
<div className="reveal">
<div className="stat-text" data-val="99.9">99.9</div>
<p className="text-gray-400 font-mono text-sm tracking-widest uppercase mt-2">Uptime %</p>
</div>
<div className="reveal">
<div className="stat-text" data-val="1.2">1.2</div>
<p className="text-gray-400 font-mono text-sm tracking-widest uppercase mt-2">Latency ms</p>
</div>
<div className="reveal">
<div className="stat-text" data-val="500">500</div>
<p className="text-gray-400 font-mono text-sm tracking-widest uppercase mt-2">Nodes Active</p>
</div>
<div className="reveal">
<div className="stat-text" data-val="Zero">Zero</div>
<p className="text-gray-400 font-mono text-sm tracking-widest uppercase mt-2">Data Loss</p>
</div>
</div>
</div>
</section>

<section className="pt-32 pb-32 relative overflow-hidden bg-[#02040A]">
<style>
        @keyframes radar-sweep {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes ring-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-radar {
            animation: radar-sweep 6s linear infinite;
        }
        .animate-ring {
            animation: ring-spin 4s linear infinite;
        }
    </style>
<div className="container max-w-7xl mx-auto px-6 relative z-10">

<h2 className="font-display text-4xl md:text-5xl font-semibold mb-20 text-center tracking-tight text-white drop-shadow-sm reveal active">
            Recognized by <span className="italic text-white/40">Architects.</span>
</h2>

<div className="flex flex-col md:flex-row w-full h-[900px] md:h-[650px] gap-3 md:gap-5 group/accordion perspective-[1200px]">

<div className="group/card relative flex-1 rounded-[2rem] overflow-hidden bg-[#060913] border border-white/10 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:flex-[4] cursor-pointer shadow-2xl group-hover/accordion:opacity-50 hover:!opacity-100 group-hover/accordion:blur-sm hover:!blur-none hover:border-white/30 isolate transform hover:-translate-y-1">

<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-[800ms] z-20"></div>

<img alt="Abstract Data" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale mix-blend-overlay transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-110 group-hover/card:opacity-50 group-hover/card:grayscale-0 group-hover/card:mix-blend-normal" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/45ff1e8a-8498-4388-93a2-759e5b706f7c_3840w.jpg"/>

<div className="absolute top-1/2 left-1/2 w-[150%] aspect-square bg-[conic-gradient(from_0deg,transparent_0_280deg,rgba(52,211,153,0.25)_360deg)] opacity-0 group-hover/card:opacity-100 animate-radar pointer-events-none blur-2xl z-0 transition-opacity duration-700"></div>

<div className="absolute inset-0 bg-gradient-to-t from-[#02040A] via-[#02040A]/80 to-transparent z-10"></div>

<div className="absolute inset-0 flex items-center justify-center z-20 transition-all duration-500 opacity-100 group-hover/card:opacity-0 group-hover/card:scale-95 pointer-events-none">
<div className="md:-rotate-90 origin-center transition-transform duration-500">
<span className="font-mono text-sm tracking-[0.3em] text-white/40 uppercase whitespace-nowrap">01 // Elena Rostova</span>
</div>
</div>

<div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-30 opacity-0 group-hover/card:opacity-100 min-w-[300px] md:min-w-[450px] pointer-events-none group-hover/card:pointer-events-auto">

<div className="flex justify-between items-start mb-auto pt-2 transform translate-y-8 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-[800ms] delay-100 ease-[cubic-bezier(0.16,1,0.3,1)]">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse"></div>
<span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">Active Link</span>
</div>
</div>

<div className="transform translate-y-8 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-[800ms] delay-[200ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
<svg className="w-8 h-8 text-white/20 mb-6 drop-shadow-md" fill="currentColor" viewbox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path></svg>
<p className="font-display text-2xl md:text-3xl text-white/90 font-light leading-snug tracking-tight mb-8">
                            "AURY didn't just upgrade our interface; it completely rewired how our users perceive spatial data. It feels like absolute magic."
                        </p>
</div>

<div className="flex items-center gap-5 transform translate-y-8 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-[800ms] delay-[300ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
<div className="relative w-14 h-14 flex items-center justify-center shrink-0">

<svg className="absolute inset-0 w-full h-full animate-ring text-emerald-400/40" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="48" stroke="currentColor" stroke-dasharray="25 10 5 10" strokeWidth="1.5"></circle>
</svg>
<img alt="Elena Rostova" className="w-11 h-11 rounded-full object-cover shadow-[0_0_20px_rgba(0,0,0,0.8)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/90ec73f0-6fd3-4d0c-922c-fcc592c983df_320w.webp"/>
</div>
<div className="">
<h4 className="font-semibold text-white tracking-tight text-lg">Elena Rostova</h4>
<p className="text-xs text-emerald-400 font-mono mt-1 tracking-widest uppercase">Lead Designer, Nexus</p>
</div>
</div>
</div>
</div>

<div className="group/card relative flex-1 rounded-[2rem] overflow-hidden bg-[#060913] border border-white/10 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:flex-[4] cursor-pointer shadow-2xl group-hover/accordion:opacity-50 hover:!opacity-100 group-hover/accordion:blur-sm hover:!blur-none hover:border-white/30 isolate transform hover:-translate-y-1">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-[800ms] z-20"></div>
<img alt="Abstract Data" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale mix-blend-overlay transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-110 group-hover/card:opacity-50 group-hover/card:grayscale-0 group-hover/card:mix-blend-normal" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e9f3d74a-d6f9-491e-9378-6b2517dd9fca_3840w.jpg"/>
<div className="absolute top-1/2 left-1/2 w-[150%] aspect-square bg-[conic-gradient(from_0deg,transparent_0_280deg,rgba(52,211,153,0.25)_360deg)] opacity-0 group-hover/card:opacity-100 animate-radar pointer-events-none blur-2xl z-0 transition-opacity duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#02040A] via-[#02040A]/80 to-transparent z-10"></div>
<div className="absolute inset-0 flex items-center justify-center z-20 transition-all duration-500 opacity-100 group-hover/card:opacity-0 group-hover/card:scale-95 pointer-events-none">
<div className="md:-rotate-90 origin-center transition-transform duration-500">
<span className="font-mono text-sm tracking-[0.3em] text-white/40 uppercase whitespace-nowrap">02 // James Donovan</span>
</div>
</div>
<div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-30 opacity-0 group-hover/card:opacity-100 min-w-[300px] md:min-w-[450px] pointer-events-none group-hover/card:pointer-events-auto">
<div className="flex justify-between items-start mb-auto pt-2 transform translate-y-8 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-[800ms] delay-100 ease-[cubic-bezier(0.16,1,0.3,1)]">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse"></div>
<span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">Active Link</span>
</div>
</div>
<div className="transform translate-y-8 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-[800ms] delay-[200ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
<svg className="w-8 h-8 text-white/20 mb-6 drop-shadow-md" fill="currentColor" viewbox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path></svg>
<p className="font-display text-2xl md:text-3xl text-white/90 font-light leading-snug tracking-tight mb-8">
                            "Implementing the orbital structures took our dashboard from a boring grid to a cinematic experience. Engagement is up 300%."
                        </p>
</div>
<div className="flex items-center gap-5 transform translate-y-8 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-[800ms] delay-[300ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
<div className="relative w-14 h-14 flex items-center justify-center shrink-0">
<svg className="absolute inset-0 w-full h-full animate-ring text-emerald-400/40" style={{animationDirection: 'reverse'}} viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="48" stroke="currentColor" stroke-dasharray="15 5 30 10" strokeWidth="1.5"></circle>
</svg>
<img alt="James Donovan" className="w-11 h-11 rounded-full object-cover shadow-[0_0_20px_rgba(0,0,0,0.8)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/25df7579-09f7-4c8c-bb39-18a974a980d0_320w.webp"/>
</div>
<div>
<h4 className="font-semibold text-white tracking-tight text-lg">James Donovan</h4>
<p className="text-xs text-emerald-400 font-mono mt-1 tracking-widest uppercase">CTO, VoidTech</p>
</div>
</div>
</div>
</div>

<div className="group/card relative flex-1 rounded-[2rem] overflow-hidden bg-[#060913] border border-white/10 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:flex-[4] cursor-pointer shadow-2xl group-hover/accordion:opacity-50 hover:!opacity-100 group-hover/accordion:blur-sm hover:!blur-none hover:border-white/30 isolate transform hover:-translate-y-1">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-[800ms] z-20"></div>
<img alt="Abstract Data" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale mix-blend-overlay transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-110 group-hover/card:opacity-50 group-hover/card:grayscale-0 group-hover/card:mix-blend-normal" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9d983b6b-8b1c-4f5c-97b3-727751f32999_3840w.jpg"/>
<div className="absolute top-1/2 left-1/2 w-[150%] aspect-square bg-[conic-gradient(from_0deg,transparent_0_280deg,rgba(52,211,153,0.25)_360deg)] opacity-0 group-hover/card:opacity-100 animate-radar pointer-events-none blur-2xl z-0 transition-opacity duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#02040A] via-[#02040A]/80 to-transparent z-10"></div>
<div className="absolute inset-0 flex items-center justify-center z-20 transition-all duration-500 opacity-100 group-hover/card:opacity-0 group-hover/card:scale-95 pointer-events-none">
<div className="md:-rotate-90 origin-center transition-transform duration-500">
<span className="font-mono text-sm tracking-[0.3em] text-white/40 uppercase whitespace-nowrap">03 // Mia Kenshi</span>
</div>
</div>
<div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-30 opacity-0 group-hover/card:opacity-100 min-w-[300px] md:min-w-[450px] pointer-events-none group-hover/card:pointer-events-auto">
<div className="flex justify-between items-start mb-auto pt-2 transform translate-y-8 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-[800ms] delay-100 ease-[cubic-bezier(0.16,1,0.3,1)]">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse"></div>
<span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">Active Link</span>
</div>
</div>
<div className="transform translate-y-8 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-[800ms] delay-[200ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
<svg className="w-8 h-8 text-white/20 mb-6 drop-shadow-md" fill="currentColor" viewbox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path></svg>
<p className="font-display text-2xl md:text-3xl text-white/90 font-light leading-snug tracking-tight mb-8">
                            "The way nodes connect and react to user state feels incredibly alive. It is a genuine paradigm shift in front-end architecture."
                        </p>
</div>
<div className="flex items-center gap-5 transform translate-y-8 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-[800ms] delay-[300ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
<div className="relative w-14 h-14 flex items-center justify-center shrink-0">
<svg className="absolute inset-0 w-full h-full animate-ring text-emerald-400/40" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="48" stroke="currentColor" stroke-dasharray="10 20 40 10" strokeWidth="1.5"></circle>
</svg>
<img alt="Mia Kenshi" className="w-11 h-11 rounded-full object-cover shadow-[0_0_20px_rgba(0,0,0,0.8)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d58e13a-35ac-4c87-af00-53519df6a64b_320w.webp"/>
</div>
<div>
<h4 className="font-semibold text-white tracking-tight text-lg">Mia Kenshi</h4>
<p className="text-xs text-emerald-400 font-mono mt-1 tracking-widest uppercase">Frontend Architect</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#02040A] pt-32 pb-40 relative" id="access">
<style>
    #access.is-visible .core-node {
      opacity: 1;
      transform: scale(1);
      transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
    }

    #access:not(.is-visible) .core-node {
      opacity: 0;
      transform: scale(0.8);
    }

    #access.is-visible .connection-lines {
      opacity: 1;
      transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
    }

    #access:not(.is-visible) .connection-lines {
      opacity: 0;
    }

    #access.is-visible .module-card {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    #access:not(.is-visible) .module-card {
      opacity: 0;
      transform: translateY(40px);
    }

    #access.is-visible .module-card.card-1 { transition-delay: 0.6s; }
    #access.is-visible .module-card.card-2 { transition-delay: 0.8s; }
    #access.is-visible .module-card.card-3 { transition-delay: 1s; }

    #access .module-line {
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
    }

    #access.is-visible .module-line {
      animation: drawLine 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
    }

    @keyframes drawLine {
      to { stroke-dashoffset: 0; }
    }

    .module-card:hover .top-node-point {
      background-color: #fff;
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
      border-color: #fff;
      transform: scale(1.2);
    }

    .core-glow {
      transition: all 0.5s ease;
    }

    .module-card:hover ~ .desktop-architecture .core-container .core-glow {
      opacity: 0.8;
      filter: blur(50px);
      transform: scale(1.1);
    }

    /* Billing Toggle Pulse Animations */
    @keyframes modeSwitchCore {
      0% { transform: scale(1); box-shadow: 0 0 40px rgba(255,255,255,1); }
      20% { transform: scale(1.15); box-shadow: 0 0 80px rgba(255,255,255,1), inset 0 0 20px #fff; background: #fff; }
      100% { transform: scale(1); box-shadow: 0 0 40px rgba(255,255,255,1); }
    }

    @keyframes modeSwitchLine {
      0% { stroke: rgba(255,255,255,0.15); filter: drop-shadow(0 0 0px #fff); stroke-width: 1.5; }
      20% { stroke: rgba(255,255,255,1); filter: drop-shadow(0 0 12px #fff); stroke-width: 2.5; }
      100% { stroke: rgba(255,255,255,0.15); filter: drop-shadow(0 0 0px #fff); stroke-width: 1.5; }
    }

    @keyframes centerLinePulse {
      0% { stroke: rgba(255,255,255,0.28); filter: drop-shadow(0 0 0px #fff); stroke-width: 2; }
      20% { stroke: rgba(255,255,255,1); filter: drop-shadow(0 0 12px #fff); stroke-width: 3.5; }
      100% { stroke: rgba(255,255,255,0.28); filter: drop-shadow(0 0 0px #fff); stroke-width: 2; }
    }

    .mode-switch-active .core-node { animation: modeSwitchCore 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
    .mode-switch-active .module-line:not(.center-line) { animation: modeSwitchLine 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
    .mode-switch-active .center-line { animation: centerLinePulse 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  </style>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)] pointer-events-none"></div>
<div className="container mx-auto px-6 max-w-6xl relative z-10">

<div className="text-center relative z-20 mb-8">
<div className="inline-flex uppercase text-[10px] font-semibold text-gray-400 tracking-widest bg-white/5 border border-white/10 rounded-full mb-6 pt-1.5 pr-4 pb-1.5 pl-4 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)]">
        System Access Tiers
      </div>
<h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-white">
        Choose Your Network <span className="text-white/40">Layer.</span>
</h2>
<p className="text-gray-400 max-w-xl mx-auto font-light">
        Select the infrastructure layer matching your scale. Seamless upgrades, instant network propagation.
      </p>
</div>

<div className="flex justify-center relative z-20 mb-10">
<div className="relative flex items-center p-1.5 bg-[#060913]/60 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.03)]">

<div className="absolute left-1.5 top-1.5 bottom-1.5 w-[100px] bg-white/10 border border-white/20 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" id="billing-slider"></div>

<button className="relative z-10 w-[100px] h-9 flex items-center justify-center text-sm font-medium text-white transition-colors duration-300" id="btn-monthly">
          Monthly
        </button>
<button className="relative z-10 w-[140px] h-9 flex items-center justify-center text-sm font-medium text-gray-500 hover:text-gray-300 transition-colors duration-300" id="btn-yearly">
          Yearly
          <span className="ml-2 text-[9px] font-mono tracking-widest text-white/60 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded-full">SAVE 20%</span>
</button>
</div>
</div>
<div className="relative w-full mx-auto mt-12 md:mt-24">

<div className="desktop-architecture absolute inset-0 pointer-events-none z-0 hidden md:block">

<div className="core-container absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 z-10">
<div className="absolute inset-0 bg-white/20 rounded-full blur-[40px] core-glow"></div>
<div className="absolute inset-2 border border-white/20 rounded-full animate-[spin_10s_linear_infinite]" style={{borderStyle: 'dashed'}}></div>
<div className="absolute inset-6 border border-white/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" style={{borderStyle: 'dotted'}}></div>
<div className="absolute inset-[38px] bg-white rounded-full shadow-[0_0_40px_rgba(255,255,255,1)] core-node"></div>
<div className="absolute inset-0 animate-spin-slow">
<div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_8px_#fff]"></div>
</div>
</div>


<svg className="absolute top-[3.25rem] left-0 w-full h-[14rem] z-0 connection-lines" preserveaspectratio="none" viewbox="0 0 1200 260">

<path className="module-line" d="M 600 0 C 600 92, 200 92, 200 220" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"></path>
<circle fill="#fff" filter="drop-shadow(0 0 4px #fff)" r="2.5">
<animatemotion dur="2.5s" path="M 600 0 C 600 92, 200 92, 200 220" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" dur="2.5s" repeatcount="indefinite" values="0;1;0"></animate>
</circle>

<path className="module-line center-line" d="M 600 0 C 600 100, 600 100, 600 220" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="2"></path>
<circle fill="#fff" filter="drop-shadow(0 0 5px #fff)" r="3">
<animatemotion dur="2s" path="M 600 0 C 600 100, 600 100, 600 220" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0;1;0"></animate>
</circle>

<path className="module-line" d="M 600 0 C 600 92, 1000 92, 1000 220" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"></path>
<circle fill="#fff" filter="drop-shadow(0 0 4px #fff)" r="2.5">
<animatemotion dur="3s" path="M 600 0 C 600 92, 1000 92, 1000 220" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" dur="3s" repeatcount="indefinite" values="0;1;0"></animate>
</circle>

<circle cx="200" cy="220" fill="#02040A" r="8" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5"></circle>
<circle cx="600" cy="220" fill="#02040A" r="8" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5"></circle>
<circle cx="1000" cy="220" fill="#02040A" r="8" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5"></circle>
</svg>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 pt-4 md:pt-[16rem] items-start">

<div className="relative group module-card card-1 h-full cursor-pointer hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 will-change-transform">
<div className="absolute inset-0 bg-white/5 rounded-[2rem] blur-xl transition-all duration-500 group-hover:bg-white/10 group-hover:blur-2xl"></div>
<div className="relative h-full glass-panel bg-[#060913]/60 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10 transition-colors duration-500 group-hover:border-white/30 flex flex-col z-10">
<div className="hidden md:block absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#060913] border border-white/30 rounded-full transition-all duration-300 top-node-point"></div>
<h3 className="font-display text-xl font-semibold text-white mb-2 tracking-tight">Node</h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-xl text-gray-500">$</span>
<span className="text-4xl text-white font-light tracking-tight price-count" data-monthly="49" data-target="49" data-yearly="39">0</span>
<span className="text-sm text-gray-500 ml-1 billing-cycle-label">/mo</span>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
<svg className="text-white/30 group-hover:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                100k API Calls
              </li>
<li className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
<svg className="text-white/30 group-hover:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Standard Cache
              </li>
<li className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
<svg className="text-white/30 group-hover:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Basic Routing
              </li>
</ul>
<button className="w-full py-3.5 rounded-full border border-white/10 text-sm font-medium text-white hover:bg-white/10 hover:border-white/30 transition-all">
              Initialize Node
            </button>
</div>
</div>

<div className="relative group module-card card-2 h-full cursor-pointer hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 will-change-transform md:-translate-y-6 z-20">
<div className="absolute inset-[-40px] rounded-full bg-[conic-gradient(from_0deg,transparent_0_280deg,rgba(255,255,255,0.15)_360deg)] animate-spin-slow opacity-40 blur-[30px] z-0 pointer-events-none group-hover:opacity-70 transition-opacity duration-500"></div>
<div className="absolute inset-0 bg-white/10 rounded-[2rem] blur-xl transition-all duration-500 group-hover:bg-white/20 group-hover:blur-2xl"></div>
<div className="transition-colors duration-500 group-hover:border-white/50 flex flex-col bg-[#060913]/90 h-full z-10 border-white/20 border rounded-[2rem] pt-10 pr-10 pb-10 pl-10 relative shadow-[0_0_50px_rgba(255,255,255,0.05)] backdrop-blur-2xl">
<div className="hidden md:block absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white/20 border border-white/80 rounded-full transition-all duration-300 top-node-point shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-b-lg shadow-[0_5px_15px_rgba(255,255,255,0.2)]">
              Optimal Layer
            </div>
<h3 className="font-display text-2xl font-semibold text-white mb-2 tracking-tight mt-2">Cluster</h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-2xl text-gray-400">$</span>
<span className="text-5xl text-white font-semibold tracking-tight price-count" data-monthly="149" data-target="149" data-yearly="119">0</span>
<span className="text-base text-gray-500 ml-1 billing-cycle-label">/mo</span>
</div>
<ul className="space-y-5 mb-10 flex-1">
<li className="flex items-center gap-4 text-sm text-gray-200">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:bg-white group-hover:text-black group-hover:border-white transition-all">
<svg fill="none" height="12" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                1M API Calls
              </li>
<li className="flex items-center gap-4 text-sm text-gray-200">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:bg-white group-hover:text-black group-hover:border-white transition-all">
<svg fill="none" height="12" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                Deep Memory Cache
              </li>
<li className="flex items-center gap-4 text-sm text-gray-200">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:bg-white group-hover:text-black group-hover:border-white transition-all">
<svg fill="none" height="12" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                Neural Prediction Engine
              </li>
</ul>
<button className="w-full py-4 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
              Deploy Cluster
            </button>
</div>
</div>

<div className="relative group module-card card-3 h-full cursor-pointer hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 will-change-transform">
<div className="absolute inset-0 bg-white/5 rounded-[2rem] blur-xl transition-all duration-500 group-hover:bg-white/10 group-hover:blur-2xl"></div>
<div className="relative h-full glass-panel bg-[#060913]/60 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10 transition-colors duration-500 group-hover:border-white/30 flex flex-col z-10">
<div className="hidden md:block absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#060913] border border-white/30 rounded-full transition-all duration-300 top-node-point"></div>
<h3 className="font-display text-xl font-semibold text-white mb-2 tracking-tight">Nebula</h3>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl text-white font-light tracking-tight">Custom</span>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
<svg className="text-white/30 group-hover:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Unlimited Routing
              </li>
<li className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
<svg className="text-white/30 group-hover:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Custom Topology
              </li>
<li className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
<svg className="text-white/30 group-hover:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Dedicated Architect
              </li>
</ul>
<button className="w-full py-3.5 rounded-full border border-white/10 text-sm font-medium text-white hover:bg-white/10 hover:border-white/30 transition-all">
              Contact Core Team
            </button>
</div>
</div>
</div>
</div>

</div>
</section>

<section className="flex overflow-hidden min-h-[80vh] pt-40 pb-40 relative items-center justify-center" style={{maskImage: 'linear-gradient(180deg, transparent, black 20%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 20%, black 100%, transparent)'}}>
<div className="ambient-glow bg-white/5 w-[800px] h-[800px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"></div>

<div className="portal-ring w-[300px] h-[300px]" style={{borderColor: 'rgba(255,255,255,0.15)'}}></div>
<div className="portal-ring w-[500px] h-[500px]" style={{animationDelay: '-1s', borderColor: 'rgba(255,255,255,0.08)'}}>
</div>
<div className="portal-ring w-[700px] h-[700px]" style={{animationDelay: '-2s', borderColor: 'rgba(255,255,255,0.04)'}}>
</div>
<div className="portal-ring w-[900px] h-[900px]" style={{animationDelay: '-3s', borderColor: 'rgba(255,255,255,0.02)'}}>
</div>

<div className="relative z-10 text-center max-w-3xl px-6 reveal">
<h2 className="font-display text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">
            Enter the
            <br/>
<span className="text-gradient-clean">Atmosphere.</span>
</h2>
<p className="text-xl text-gray-400 mb-10 font-light">
            Stop building flat interfaces. Start constructing realities.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<button className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full w-full sm:w-auto">
<div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-400 transition-transform duration-300 group-hover:scale-105"></div>
<span className="relative z-10 text-white font-bold tracking-wide flex items-center justify-center gap-2">
          Initialize Sequence

          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</span>
</button>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#010205] to-transparent z-10"></div>
</section>

<footer className="bg-[#010205] pt-20 pb-10 border-t border-white/5 relative z-20">
<div className="container mx-auto px-6 max-w-6xl">
<div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
<div className="md:w-1/3">
<div className="flex items-center gap-2 mb-4">
<span className="text-lg font-bold tracking-wide font-display">AURY</span>
</div>
<p className="text-sm text-gray-500 max-w-xs">Dimensional interface architecture for the next generation of the web. Built beyond the grid.</p>
</div>
<div className="grid grid-cols-2 gap-10 w-full md:w-auto text-sm">
<div>
<h4 className="font-display text-white mb-4 font-semibold">Topology</h4>
<ul className="space-y-2 text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">Core Nodes</a></li>
<li><a className="hover:text-white transition-colors" href="#">Neural Cache</a></li>
<li><a className="hover:text-white transition-colors" href="#">Event Streams</a></li>
</ul>
</div>
<div>
<h4 className="font-display text-white mb-4 font-semibold">System</h4>
<ul className="space-y-2 text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-white transition-colors" href="#">Status: <span className="text-white">Nominal</span></a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-gray-600">
<p className="">© 2026 Aury Systems. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Transmission Log</a>
<a className="hover:text-white transition-colors" href="#">Privacy Matrix</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
