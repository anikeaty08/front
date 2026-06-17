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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
700: '#44403c',
800: '#292524',
900: '#1c1917',
950: '#0c0a09',
},
brown: {
50: '#FBF9F6',
100: '#F5F0E6',
200: '#E6DCC0',
300: '#D5C49A',
400: '#C4A868',
500: '#B0924E',
600: '#94783B',
700: '#8C7A63',
800: '#5A4729',
900: '#3D3021',
950: '#2A2012',
}
},
letterSpacing: {
tightest: '-.075em',
tighter: '-.04em',
tight: '-.02em',
wide: '.025em',
widest: '.15em',
},
animation: {
'fade-in': 'fadeIn 1.2s ease-out forwards',
'slide-up': 'slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



      // Menu Toggle Logic
      function toggleMenu() {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('open');

        // Prevent body scrolling when menu is open
        if (menu.classList.contains('open')) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      }

      // Simple Intersection Observer for reveal animations
      const revealElements = document.querySelectorAll('.reveal');

      const revealObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('active');
                  observer.unobserve(entry.target);
              }
          });
      }, {
          root: null,
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px"
      });

      revealElements.forEach(el => revealObserver.observe(el));
    
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
      

<div className="fixed inset-0 z-[100] menu-backdrop bg-black/60 backdrop-blur-sm flex justify-center sm:items-center p-0 sm:p-4 items-start" id="mobile-menu">

<div className="absolute inset-0" onclick="toggleMenu()"></div>

<div className="relative w-full max-w-md bg-white sm:rounded-[32px] p-8 pt-12 pb-10 menu-content shadow-2xl overflow-hidden flex flex-col sm:rounded-b-[32px] rounded-b-[32px]">

<div className="flex items-center justify-between mb-10">
<a className="flex items-center gap-3 text-sm font-medium text-brown-800 tracking-wider uppercase" href="/" onclick="toggleMenu()">
<div className="w-4 h-4 bg-[#C4A868]"></div>
            FARMEN CAPITAL
          </a>
<button className="text-stone-800 hover:text-stone-500 transition-colors p-2 -mr-2" onclick="toggleMenu()">
<iconify-icon icon="lucide:x" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="flex flex-col">
<a className="border-b border-stone-100 py-5 text-xs font-bold tracking-[0.2em] text-[#8C7A63] uppercase hover:text-brown-900 transition-colors flex justify-between items-center group" href="/about" onclick="toggleMenu()">
            About
            <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
<a className="border-b border-stone-100 py-5 text-xs font-bold tracking-[0.2em] text-[#8C7A63] uppercase hover:text-brown-900 transition-colors flex justify-between items-center group" href="/portfolio" onclick="toggleMenu()">
            Portfolio
            <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
<a className="border-b border-stone-100 py-5 text-xs font-bold tracking-[0.2em] text-[#8C7A63] uppercase hover:text-brown-900 transition-colors flex justify-between items-center group" href="/sustainability" onclick="toggleMenu()">
            Sustainability
            <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>

<div className="mt-10">
<a className="flex items-center justify-center w-full py-4 bg-[#8B5E1E] text-white rounded-[2px] font-bold tracking-[0.15em] text-[11px] uppercase hover:bg-[#70461E] transition-colors shadow-sm" href="/contact" onclick="toggleMenu()">
            Contact Us
          </a>
</div>
<div className="w-12 h-1 bg-stone-200 rounded-full mx-auto mt-6 cursor-pointer" onclick="toggleMenu()"></div>
</div>
</div>

<nav className="fixed transition-all duration-500 bg-neutral-50/90 w-full z-50 border-b border-stone-100 top-0 backdrop-blur-xl">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-3 group z-50 text-base font-normal text-yellow-800 tracking-tight relative" href="/home">
<div className="w-3.5 h-3.5 bg-gradient-to-br from-brown-400 to-brown-600 border border-brown-300/30 group-hover:rotate-45 transition-transform duration-500"></div>
          FARMEN CAPITAL
        </a>

<div className="hidden md:flex gap-10 text-[11px] uppercase font-medium text-stone-400 tracking-widest gap-x-10 gap-y-10 items-center">
<a className="hover:text-brown-300 transition-colors duration-300 text-yellow-800" href="/about">
            About
          </a>
<a className="hover:text-brown-300 transition-colors duration-300 text-yellow-800" href="/portfolio">
            Portfolio
          </a>
<a className="hover:text-brown-300 transition-colors duration-300 text-yellow-800" href="/sustainability-2">
            Sustainability
          </a>
<a className="hover:bg-brown-600/20 hover:border-brown-500/50 hover:text-brown-100 transition-all duration-300 text-neutral-50 bg-yellow-800 border-white/10 border rounded-sm pt-2 pr-6 pb-2 pl-6" href="/contact">
            Contact
          </a>
</div>

<button aria-label="Menu" className="md:hidden flex flex-col items-end gap-[5px] group p-2 -mr-2 cursor-pointer z-50" onclick="toggleMenu()">
<div className="w-6 h-[1.5px] bg-stone-800 group-hover:bg-brown-600 transition-colors"></div>
<div className="w-6 h-[1.5px] bg-stone-800 group-hover:bg-brown-600 transition-colors"></div>
</button>
</div>
</nav>

<header className="relative min-h-[100dvh] flex items-center px-6 pt-20 overflow-hidden bg-stone-900">
<div className="absolute inset-0 z-0">
<img alt="Golden grain field" className="w-full h-full object-cover scale-105 animate-[fade-in_3s_ease-out_forwards] opacity-60" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&amp;w=2532&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/40 to-stone-900/90 mix-blend-multiply"></div>
<div className="bg-gradient-to-r from-stone-950/90 via-stone-900/50 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 grid lg:grid-cols-12 gap-12 md:pb-20 w-full max-w-7xl mr-auto ml-auto pb-24 relative gap-x-12 gap-y-12 items-end">
<div className="lg:col-span-8 md:space-y-10 space-y-8">
<div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-sm border border-brown-500/30 bg-stone-900/40 backdrop-blur-md text-[10px] uppercase tracking-widest text-brown-100 animate-fade-in">
<span className="w-1 h-1 rounded-full bg-brown-400 shadow-[0_0_10px_rgba(176,146,78,0.8)]"></span>
            Equity: $100M
          </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.05] md:leading-[0.95] animate-slide-up font-light text-white tracking-tighter" style={{animationDelay: '100ms'}}>
            Capital, harvested
            <br/>
<span className="font-light text-stone-300 pr-2">with</span>
<span className="text-brown-300 font-serif italic">discipline.</span>
</h1>
<p className="text-base md:text-xl text-stone-300 font-light max-w-xl leading-relaxed animate-slide-up tracking-tight" style={{animationDelay: '200ms'}}>
            Farmen Capital is a private investment company focused on
            cultivating long-term value across public equities, real estate and
            selected private companies.
          </p>
<div className="pt-4 md:pt-6 animate-slide-up" style={{animationDelay: '300ms'}}>
<a className="group inline-flex items-center gap-3 text-white/90 hover:text-white border-b border-brown-500/30 pb-1 hover:border-brown-400 transition-all text-sm tracking-wide" href="/about">
              Explore our investment platform
              <iconify-icon className="text-brown-400 group-hover:translate-y-1 transition-transform" icon="lucide:arrow-down" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</header>

<div className="max-w-7xl mx-auto px-6 pt-20 md:pt-32 pb-8 md:pb-12">
<div className="flex items-center gap-3 text-brown-700 hover:text-brown-900 transition-colors group cursor-pointer w-fit">
<h2 className="text-2xl md:text-4xl font-serif text-brown-800 tracking-tight">
          Active Ownership
        </h2>
<iconify-icon className="text-brown-500 group-hover:translate-x-1 transition-transform" icon="lucide:chevron-right" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>

<section className="pb-20 px-6 bg-white" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 reveal gap-0 rounded-sm overflow-hidden border border-stone-100 shadow-sm">
<div className="bg-brown-50 p-8 md:p-12 lg:p-20 flex flex-col justify-center order-2 lg:order-1">
<div className="space-y-6 md:space-y-8">
<h3 className="text-3xl md:text-4xl font-serif text-brown-900 tracking-tight leading-[1.1]">
                A Family Office Built on Patience
              </h3>
<p className="text-base md:text-lg text-stone-600 font-light leading-relaxed">
                Like a harvest, true wealth requires time. We back search funds,
                independent sponsors, and long term holding companies with
                aligned capital and real-world expertise.
              </p>
<div className="pt-4 md:pt-6">
<a className="inline-flex items-center justify-center px-8 py-3 border border-brown-600 text-brown-900 text-sm font-medium hover:bg-brown-600 hover:text-white transition-all duration-300" href="/about">
                  Our Approach
                </a>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 md:gap-y-10 gap-x-4 pt-10 md:pt-16 border-t border-brown-200/60 mt-10 md:mt-12">
<div>
<div className="text-2xl md:text-3xl font-light text-brown-900 tracking-tight mb-2">
                  $90M+
                </div>
<div className="text-[10px] font-semibold uppercase tracking-widest text-brown-700 leading-tight">
                  Assets under
                  <br/>
                  management
                </div>
</div>
<div>
<div className="text-2xl md:text-3xl font-light text-brown-900 tracking-tight mb-2">
                  25+
                </div>
<div className="text-[10px] font-semibold uppercase tracking-widest text-brown-700 leading-tight">
                  Transactions
                  <br/>
                  completed
                </div>
</div>
<div className="col-span-2 sm:col-span-1 mt-2 sm:mt-0">
<div className="text-2xl md:text-3xl font-light text-brown-900 tracking-tight mb-2">
                  18+
                </div>
<div className="text-[10px] font-semibold uppercase tracking-widest text-brown-700 leading-tight">
                  Years of
                  <br/>
                  experience
                </div>
</div>
</div>
</div>
<div className="relative h-[300px] md:h-[400px] lg:h-auto order-1 lg:order-2 group overflow-hidden">
<img alt="Meeting Room" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500 cursor-pointer">
<div className="w-0 h-0 border-t-[6px] md:border-t-[8px] border-t-transparent border-l-[10px] md:border-l-[14px] border-l-white border-b-[6px] md:border-b-[8px] border-b-transparent ml-1"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-20 px-6 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="mb-12">
<h2 className="text-2xl md:text-4xl font-serif text-brown-800 tracking-tight">
            Our Platform
          </h2>
</div>
<div className="grid lg:grid-cols-2 reveal gap-0 rounded-sm overflow-hidden border border-stone-100 shadow-sm">
<div className="relative h-[300px] md:h-[400px] lg:h-auto min-h-[300px] lg:min-h-[500px]">
<img alt="Building" className="absolute inset-0 w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="bg-brown-50 p-8 md:p-12 lg:p-20 flex flex-col justify-center">
<span className="text-[10px] font-bold uppercase tracking-widest text-brown-600 mb-6 block flex items-center gap-2">
<span className="w-8 h-px bg-brown-400"></span>
              About Us
            </span>
<h2 className="text-3xl md:text-4xl font-serif text-brown-900 tracking-tight mb-6 md:mb-8">
              Structure &amp; Strategy
            </h2>
<div className="space-y-6 text-base md:text-lg text-stone-600 font-light leading-relaxed">
<p>
                Farmen Invest is built on discipline, patience and deep
                analysis. With $100M in equity, we invest across markets and
                asset classes to create stable, long-term returns.
              </p>
<p>
                We operate with an institutional mindset, combined with the
                flexibility of a private capital platform.
              </p>
</div>
<div className="mt-8 md:mt-12 pt-8 border-t border-brown-200/60">
<div className="flex items-end gap-4">
<div className="text-4xl md:text-5xl font-light text-brown-900 tracking-tighter">
                  $100M
                </div>
<div className="text-xs font-semibold uppercase tracking-widest text-brown-600 mb-2">
                  Equity
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-brown-950 border-t border-brown-900 py-20 md:py-32 px-6">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:mb-24 max-w-2xl reveal">
<h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-6">
            Our Investment Philosophy
          </h2>
<div className="h-px w-24 bg-brown-400 opacity-60"></div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12 md:gap-y-20">
<div className="group reveal">
<div className="text-4xl md:text-5xl font-light text-brown-800 group-hover:text-brown-400 transition-colors duration-500 mb-4 md:mb-6 tracking-tighter font-serif">
              01
            </div>
<h3 className="text-lg text-brown-50 font-medium mb-3 tracking-tight">
              Long-term ownership
            </h3>
<p className="text-brown-200/70 text-sm leading-relaxed font-light">
              We invest with a multi-year horizon and prioritize value creation
              over short-term market movements.
            </p>
</div>
<div className="group reveal">
<div className="text-4xl md:text-5xl font-light text-brown-800 group-hover:text-brown-400 transition-colors duration-500 mb-4 md:mb-6 tracking-tighter font-serif">
              02
            </div>
<h3 className="text-lg text-brown-50 font-medium mb-3 tracking-tight">
              Risk-adjusted returns
            </h3>
<p className="text-brown-200/70 text-sm leading-relaxed font-light">
              Capital preservation comes before growth. Every investment is
              evaluated with strict risk management.
            </p>
</div>
<div className="group reveal">
<div className="text-4xl md:text-5xl font-light text-brown-800 group-hover:text-brown-400 transition-colors duration-500 mb-4 md:mb-6 tracking-tighter font-serif">
              03
            </div>
<h3 className="text-lg text-brown-50 font-medium mb-3 tracking-tight">
              Strong fundamentals
            </h3>
<p className="text-brown-200/70 text-sm leading-relaxed font-light">
              We invest only in companies and assets with proven cash flow and
              solid balance sheets.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-stone-50 border-stone-200 border-b py-20 md:py-32 px-6">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
<div className="order-2 lg:order-1 reveal bg-white p-6 md:p-10 shadow-sm border border-stone-100">
<div className="w-full space-y-8 md:space-y-10">
<div className="group">
<div className="flex justify-between text-[10px] uppercase tracking-widest text-brown-700 font-semibold mb-3">
<span>Public Equities</span>
<span className="text-brown-500">45%</span>
</div>
<div className="h-px w-full bg-stone-200 relative">
<div className="absolute top-0 left-0 h-px bg-stone-800 w-[45%] transition-all duration-1000 group-hover:h-0.5"></div>
</div>
</div>
<div className="group">
<div className="flex justify-between text-[10px] uppercase tracking-widest text-brown-700 font-semibold mb-3">
<span>Real Estate</span>
<span className="text-brown-500">35%</span>
</div>
<div className="h-px w-full bg-stone-200 relative">
<div className="absolute top-0 left-0 h-px bg-brown-500 w-[35%] transition-all duration-1000 group-hover:h-0.5 group-hover:shadow-[0_0_10px_rgba(176,146,78,0.4)]"></div>
</div>
</div>
<div className="group">
<div className="flex justify-between text-[10px] uppercase tracking-widest text-brown-700 font-semibold mb-3">
<span>Private Companies</span>
<span className="text-brown-500">20%</span>
</div>
<div className="h-px w-full bg-stone-200 relative">
<div className="absolute top-0 left-0 h-px bg-stone-400 w-[20%] transition-all duration-1000 group-hover:h-0.5"></div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 reveal">
<h2 className="text-3xl md:text-5xl text-brown-900 tracking-tight font-serif mb-6">
            Capital Deployment
          </h2>
<p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed">
            Our capital is strategically allocated to balance growth, stability
            and long-term value creation. We constantly monitor market
            conditions to adjust our exposure.
          </p>
</div>
</div>
</section>

<section className="overflow-hidden bg-stone-100 border-neutral-100 border-b py-12">
<div className="max-w-7xl mx-auto px-6 mb-8 reveal">
<div className="flex items-end justify-between">
<div className="">
<span className="text-[10px] font-bold uppercase tracking-widest text-brown-600 mb-2 block">
              Major Positions
            </span>
<h2 className="text-2xl font-serif text-brown-900 tracking-tight">
              Public Holdings
            </h2>
</div>
</div>
</div>

<div className="relative w-full mask-edges reveal">
<div className="flex gap-4 w-max animate-scroll">


<div className="w-[200px] h-[120px] bg-stone-900 border border-stone-800 p-4 flex flex-col justify-between group hover:border-brown-500/50 transition-colors duration-500 relative flex-shrink-0 rounded-sm">
<div className="flex-1 flex items-start justify-between">
<iconify-icon className="text-white opacity-90" icon="simple-icons:nvidia" width="24"></iconify-icon>
<div className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center text-[8px] font-medium text-brown-400">
                1
              </div>
</div>
<div className="mt-2">
<h3 className="text-sm text-white font-medium tracking-tight">
                NVIDIA Corp
              </h3>
<div className="flex items-center gap-1.5 mt-1">
<div className="h-px w-3 bg-brown-500"></div>
<p className="text-stone-400 text-[10px] font-light">
                  14.5% Alloc.
                </p>
</div>
</div>
</div>

<div className="w-[200px] h-[120px] bg-stone-900 border border-stone-800 p-4 flex flex-col justify-between group hover:border-brown-500/50 transition-colors duration-500 relative flex-shrink-0 rounded-sm">
<div className="flex-1 flex items-start justify-between">
<iconify-icon className="text-white opacity-90" icon="mdi:microsoft" width="24"></iconify-icon>
<div className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center text-[8px] font-medium text-brown-400">
                2
              </div>
</div>
<div className="mt-2">
<h3 className="text-sm text-white font-medium tracking-tight">
                Microsoft
              </h3>
<div className="flex items-center gap-1.5 mt-1">
<div className="h-px w-3 bg-brown-500"></div>
<p className="text-stone-400 text-[10px] font-light">
                  12.8% Alloc.
                </p>
</div>
</div>
</div>

<div className="w-[200px] h-[120px] bg-stone-900 border border-stone-800 p-4 flex flex-col justify-between group hover:border-brown-500/50 transition-colors duration-500 relative flex-shrink-0 rounded-sm">
<div className="flex-1 flex items-start justify-between">
<iconify-icon className="text-white opacity-90" icon="mdi:apple" width="24"></iconify-icon>
<div className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center text-[8px] font-medium text-brown-400">
                3
              </div>
</div>
<div className="mt-2">
<h3 className="text-sm text-white font-medium tracking-tight">
                Apple Inc.
              </h3>
<div className="flex items-center gap-1.5 mt-1">
<div className="h-px w-3 bg-brown-500"></div>
<p className="text-stone-400 text-[10px] font-light">
                  10.2% Alloc.
                </p>
</div>
</div>
</div>

<div className="flex flex-col group hover:border-brown-500/50 transition-colors duration-500 flex-shrink-0 bg-stone-900 w-[200px] h-[120px] border-stone-800 border rounded-sm pt-4 pr-4 pb-4 pl-4 relative justify-between">
<div className="flex-1 flex items-start justify-between">
<span className="text-base font-serif italic text-white tracking-tighter">
                novo
              </span>
<div className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center text-[8px] font-medium text-brown-400">
                4
              </div>
</div>
<div className="mt-2">
<h3 className="text-sm text-white font-medium tracking-tight">
                Novo Nordisk
              </h3>
<div className="flex items-center gap-1.5 mt-1">
<div className="h-px w-3 bg-brown-500"></div>
<p className="text-stone-400 text-[10px] font-light">8.5% Alloc.</p>
</div>
</div>
</div>

<div className="w-[200px] h-[120px] bg-stone-900 border border-stone-800 p-4 flex flex-col justify-between group hover:border-brown-500/50 transition-colors duration-500 relative flex-shrink-0 rounded-sm">
<div className="flex-1 flex items-start justify-between">
<iconify-icon className="text-white opacity-90" icon="simple-icons:google" width="22"></iconify-icon>
<div className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center text-[8px] font-medium text-brown-400">
                5
              </div>
</div>
<div className="mt-2">
<h3 className="text-sm text-white font-medium tracking-tight">
                Alphabet Inc.
              </h3>
<div className="flex items-center gap-1.5 mt-1">
<div className="h-px w-3 bg-brown-500"></div>
<p className="text-stone-400 text-[10px] font-light">7.1% Alloc.</p>
</div>
</div>
</div>

<div className="w-[200px] h-[120px] bg-stone-900 border border-stone-800 p-4 flex flex-col justify-between group hover:border-brown-500/50 transition-colors duration-500 relative flex-shrink-0 rounded-sm">
<div className="flex-1 flex items-start justify-between">
<iconify-icon className="text-white opacity-90" icon="simple-icons:amazon" width="24"></iconify-icon>
<div className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center text-[8px] font-medium text-brown-400">
                6
              </div>
</div>
<div className="mt-2">
<h3 className="text-sm font-medium text-white tracking-tight">
                Amazon
              </h3>
<div className="flex items-center gap-1.5 mt-1">
<div className="h-px w-3 bg-brown-500"></div>
<p className="text-stone-400 text-[10px] font-light">6.4% Alloc.</p>
</div>
</div>
</div>

<div className="w-[200px] h-[120px] bg-stone-900 border border-stone-800 p-4 flex flex-col justify-between group hover:border-brown-500/50 transition-colors duration-500 relative flex-shrink-0 rounded-sm">
<div className="flex-1 flex items-start justify-between">
<iconify-icon className="text-white opacity-90" icon="simple-icons:nvidia" width="24"></iconify-icon>
<div className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center text-[8px] font-medium text-brown-400">
                1
              </div>
</div>
<div className="mt-2">
<h3 className="text-sm text-white font-medium tracking-tight">
                NVIDIA Corp
              </h3>
<div className="flex items-center gap-1.5 mt-1">
<div className="h-px w-3 bg-brown-500"></div>
<p className="text-stone-400 text-[10px] font-light">
                  14.5% Alloc.
                </p>
</div>
</div>
</div>
<div className="w-[200px] h-[120px] bg-stone-900 border border-stone-800 p-4 flex flex-col justify-between group hover:border-brown-500/50 transition-colors duration-500 relative flex-shrink-0 rounded-sm">
<div className="flex-1 flex items-start justify-between">
<iconify-icon className="text-white opacity-90" icon="mdi:microsoft" width="24"></iconify-icon>
<div className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center text-[8px] font-medium text-brown-400">
                2
              </div>
</div>
<div className="mt-2">
<h3 className="text-sm text-white font-medium tracking-tight">
                Microsoft
              </h3>
<div className="flex items-center gap-1.5 mt-1">
<div className="h-px w-3 bg-brown-500"></div>
<p className="text-stone-400 text-[10px] font-light">
                  12.8% Alloc.
                </p>
</div>
</div>
</div>
<div className="w-[200px] h-[120px] bg-stone-900 border border-stone-800 p-4 flex flex-col justify-between group hover:border-brown-500/50 transition-colors duration-500 relative flex-shrink-0 rounded-sm">
<div className="flex-1 flex items-start justify-between">
<iconify-icon className="text-white opacity-90" icon="mdi:apple" width="24"></iconify-icon>
<div className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center text-[8px] font-medium text-brown-400">
                3
              </div>
</div>
<div className="mt-2">
<h3 className="text-sm text-white font-medium tracking-tight">
                Apple Inc.
              </h3>
<div className="flex items-center gap-1.5 mt-1">
<div className="h-px w-3 bg-brown-500"></div>
<p className="text-stone-400 text-[10px] font-light">
                  10.2% Alloc.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 bg-white" id="portfolio">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8 reveal">
<div className="max-w-xl">
<h2 className="text-3xl md:text-5xl font-serif text-brown-900 tracking-tight mb-6">
              Investment Portfolio
            </h2>
<p className="text-stone-600 font-light text-lg">
              Our portfolio consists of a concentrated selection of
              high-conviction investments with active ownership.
            </p>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
<div className="bg-brown-50 p-8 md:p-10 h-64 flex flex-col justify-between group hover:bg-brown-100 transition-colors duration-500 cursor-pointer">
<div className="flex justify-between items-start">
<iconify-icon className="text-brown-400 group-hover:text-brown-700 transition-colors duration-500" icon="lucide:home" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-[9px] uppercase tracking-widest text-brown-400 font-bold">
                RE
              </span>
</div>
<div>
<h3 className="text-brown-900 text-lg font-medium tracking-tight mb-2">
                Nordic Residential
              </h3>
<p className="text-sm text-stone-500 font-light">
                Long-term real estate holdings in Oslo and Bergen.
              </p>
</div>
</div>
<div className="bg-brown-50 p-8 md:p-10 h-64 flex flex-col justify-between group hover:bg-brown-100 transition-colors duration-500 cursor-pointer">
<div className="flex justify-between items-start">
<iconify-icon className="text-brown-400 group-hover:text-brown-700 transition-colors duration-500" icon="lucide:factory" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-[9px] uppercase tracking-widest text-brown-400 font-bold">
                PE
              </span>
</div>
<div className="">
<h3 className="text-brown-900 text-lg font-medium tracking-tight mb-2">
                Industrial Equities
              </h3>
<p className="text-sm text-stone-500 font-light">
                Listed industrial companies with solid dividends.
              </p>
</div>
</div>
<div className="bg-brown-50 p-8 md:p-10 h-64 flex flex-col justify-between group hover:bg-brown-100 transition-colors duration-500 cursor-pointer">
<div className="flex justify-between items-start">
<iconify-icon className="text-brown-400 group-hover:text-brown-700 transition-colors duration-500" icon="lucide:wind" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-[9px] uppercase tracking-widest text-brown-400 font-bold">
                INFRA
              </span>
</div>
<div>
<h3 className="text-brown-900 text-lg font-medium tracking-tight mb-2">
                Renewable Infrastructure
              </h3>
<p className="text-sm text-stone-500 font-light">
                Wind and hydro power investments.
              </p>
</div>
</div>
<div className="bg-brown-50 p-8 md:p-10 h-64 flex flex-col justify-between group hover:bg-brown-100 transition-colors duration-500 cursor-pointer">
<div className="flex justify-between items-start">
<iconify-icon className="text-brown-400 group-hover:text-brown-700 transition-colors duration-500" icon="lucide:shopping-bag" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-[9px] uppercase tracking-widest text-brown-400 font-bold">
                EQ
              </span>
</div>
<div>
<h3 className="text-brown-900 text-lg font-medium tracking-tight mb-2">
                Consumer &amp; Retail
              </h3>
<p className="text-sm text-stone-500 font-light">
                Strong brands with loyal customer bases.
              </p>
</div>
</div>
<div className="bg-brown-50 p-8 md:p-10 h-64 flex flex-col justify-between group hover:bg-brown-100 transition-colors duration-500 cursor-pointer">
<div className="flex justify-between items-start">
<iconify-icon className="text-brown-400 group-hover:text-brown-700 transition-colors duration-500" icon="lucide:cpu" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-[9px] uppercase tracking-widest text-brown-400 font-bold">
                TECH
              </span>
</div>
<div>
<h3 className="text-brown-900 text-lg font-medium tracking-tight mb-2">
                Tech Growth
              </h3>
<p className="text-sm text-stone-500 font-light">
                B2B SaaS companies in expansion phase.
              </p>
</div>
</div>
<div className="bg-brown-50 p-8 md:p-10 h-64 flex flex-col justify-between group hover:bg-brown-100 transition-colors duration-500 cursor-pointer">
<div className="flex justify-between items-start">
<iconify-icon className="text-brown-400 group-hover:text-brown-700 transition-colors duration-500" icon="lucide:rocket" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-[9px] uppercase tracking-widest text-brown-400 font-bold">
                VC
              </span>
</div>
<div>
<h3 className="text-brown-900 text-lg font-medium tracking-tight mb-2">
                Private Startups
              </h3>
<p className="text-sm text-stone-500 font-light">
                Seed stage investments in the Nordic region.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="text-white bg-stone-900 px-6 py-20 md:py-32" id="sustainability">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
<div className="reveal">
<span className="text-[10px] font-bold uppercase tracking-widest text-brown-400 mb-6 block">
            ESG &amp; Impact
          </span>
<h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-8">
            Responsible Capital
          </h2>
<div className="space-y-8 text-lg md:text-xl text-stone-400 font-light leading-relaxed">
<p>
              We believe that sustainable business practices are a prerequisite
              for long-term value creation. Our ESG framework is integrated into
              every stage of the investment process.
            </p>
<p className="">
              By focusing on governance, environmental footprint and social
              responsibility, we build companies that endure.
            </p>
</div>
<div className="mt-10">
<a className="inline-flex items-center gap-2 text-white border-b border-brown-500/50 pb-1 hover:border-brown-400 hover:text-brown-300 transition-all" href="#">
              Download Sustainability Report (2023)
              <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="relative h-[300px] md:h-[500px] reveal mt-8 lg:mt-0">
<img alt="Forest" className="absolute inset-0 w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&amp;w=2041&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/20"></div>
</div>
</div>
</section>

<footer className="text-brown-600 bg-white border-stone-100 border-t pt-20 pb-10" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-20">

<div className="lg:col-span-5 flex flex-col gap-6">
<a className="text-brown-900 flex items-center gap-3 text-xl font-bold tracking-tight" href="/">
<div className="w-8 h-8 bg-brown-800 rounded-lg flex items-center justify-center">
<div className="w-3 h-3 bg-white rounded-full"></div>
<div className="w-3 h-3 bg-brown-400 rounded-full -ml-1.5 opacity-80"></div>
</div>
              Farmen Capital
            </a>
<p className="text-brown-600/90 leading-relaxed text-sm font-light max-w-sm">
              Farmen Capital is a private investment company focused on
              cultivating long-term value across public equities, real estate
              and selected private companies into one powerful portfolio.
            </p>
<div className="flex gap-4 mt-2">
<a className="text-brown-400 hover:text-brown-800 transition-colors" href="#">
<iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-brown-400 hover:text-brown-800 transition-colors" href="#">
<iconify-icon icon="lucide:github" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-brown-400 hover:text-brown-800 transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-1 hidden lg:block"></div>

<div className="lg:col-span-2">
<h4 className="text-sm font-bold text-brown-900 mb-6">Investments</h4>
<ul className="space-y-4 text-sm font-medium">
<li className="">
<a className="hover:text-brown-900 transition-colors" href="#">
                  Public Equities
                </a>
</li>
<li className="">
<a className="hover:text-brown-900 transition-colors" href="#">
                  Real Estate
                </a>
</li>
<li className="">
<a className="hover:text-brown-900 transition-colors" href="#">
                  Private Companies
                </a>
</li>
<li className="">
<a className="hover:text-brown-900 transition-colors" href="#">
                  Infrastructure
                </a>
</li>
</ul>
</div>
<div className="lg:col-span-2">
<h4 className="text-sm font-bold text-brown-900 mb-6">Company</h4>
<ul className="space-y-4 text-sm font-medium">
<li className="">
<a className="hover:text-brown-900 transition-colors" href="/about">
                  About
                </a>
</li>
<li className="">
<a className="hover:text-brown-900 transition-colors" href="/portfolio">
                  Portfolio
                </a>
</li>
<li className="">
<a className="hover:text-brown-900 transition-colors" href="/sustainability-2">
                  Sustainability
                </a>
</li>
<li>
<a className="hover:text-brown-900 transition-colors" href="/contact">
                  Contact
                </a>
</li>
</ul>
</div>
<div className="lg:col-span-2">
<h4 className="text-sm font-bold text-brown-900 mb-6">Legal</h4>
<ul className="space-y-4 text-sm font-medium">
<li>
<a className="hover:text-brown-900 transition-colors" href="#">
                  Privacy
                </a>
</li>
<li>
<a className="hover:text-brown-900 transition-colors" href="#">
                  Terms
                </a>
</li>
<li>
<a className="hover:text-brown-900 transition-colors" href="#">
                  Investor Login
                </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-brown-400">
<p className="">© 2026 Farmen Capital AS. All rights reserved.</p>
<div className="flex items-center gap-2">
</div>
</div>
</div>
</footer>


    </>
  );
}
