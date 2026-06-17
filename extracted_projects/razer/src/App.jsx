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
colors: {
razer: {
DEFAULT: '#44d62c',
dim: '#2b8a1c',
glow: 'rgba(68, 214, 44, 0.5)'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
display: ['Space Grotesk', 'sans-serif'],
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


      // Init Icons
      lucide.createIcons();

      // Scroll Reveal Animation
      const revealElements = document.querySelectorAll('.reveal');
      const revealOnScroll = () => {
          const windowHeight = window.innerHeight;
          const elementVisible = 100;

          revealElements.forEach((reveal) => {
              const elementTop = reveal.getBoundingClientRect().top;
              if (elementTop < windowHeight - elementVisible) {
                  reveal.classList.add('active');
              }
          });
      };
      window.addEventListener('scroll', revealOnScroll);
      // Trigger once on load
      revealOnScroll();

      // Carousel Logic
      const carousel = document.getElementById('carousel');
      const scrollLeftBtn = document.getElementById('scroll-left');
      const scrollRightBtn = document.getElementById('scroll-right');

      if (carousel && scrollLeftBtn && scrollRightBtn) {
          scrollLeftBtn.addEventListener('click', () => {
              carousel.scrollBy({ left: -340, behavior: 'smooth' });
          });
          scrollRightBtn.addEventListener('click', () => {
              carousel.scrollBy({ left: 340, behavior: 'smooth' });
          });
      }

      // Mobile Menu Toggle
      const btn = document.getElementById('mobile-menu-btn');
      const menu = document.getElementById('mobile-menu');
      if(btn && menu) {
          btn.addEventListener('click', () => {
              menu.classList.toggle('hidden');
          });
      }

      // Navbar blur effect optimization
      window.addEventListener('scroll', () => {
          const nav = document.getElementById('navbar');
          if (window.scrollY > 20) {
              nav.classList.add('shadow-lg');
              nav.classList.add('bg-black/90');
              nav.classList.remove('bg-black/80');
          } else {
              nav.classList.remove('shadow-lg');
              nav.classList.remove('bg-black/90');
              nav.classList.add('bg-black/80');
          }
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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 fixed" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="EET25BiXxR2StNXZvAzF"></div>

</div></div>

<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-md transition-all duration-300" id="navbar">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="relative flex h-8 w-8 items-center justify-center rounded border border-white/10 bg-white/5 transition-colors group-hover:border-razer/50 group-hover:bg-razer/10">
<svg className="h-5 w-5 text-white transition-colors group-hover:text-razer" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
</div>
<span className="font-mono text-lg font-bold tracking-tighter text-white group-hover:text-razer transition-colors">
              RAZER
            </span>
</a>

<nav className="hidden md:flex items-center gap-1">
<a className="group relative px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white rounded-md font-mono tracking-tight overflow-hidden" href="#">
<span className="relative z-10">Store</span>
<span className="absolute inset-0 bg-white/5 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
<span className="absolute bottom-0 left-0 h-[2px] w-full bg-razer scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
</a>
<a className="group relative px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white rounded-md font-mono tracking-tight overflow-hidden" href="#">
<span className="relative z-10">PC</span>
<span className="absolute bottom-0 left-0 h-[2px] w-full bg-razer scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
</a>
<a className="group relative px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white rounded-md font-mono tracking-tight overflow-hidden" href="#">
<span className="relative z-10">Console</span>
<span className="absolute inset-0 bg-white/5 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
<span className="absolute bottom-0 left-0 h-[2px] w-full bg-razer scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
</a>
<a className="group relative px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white rounded-md font-mono tracking-tight overflow-hidden" href="#">
<span className="relative z-10">Mobile</span>
<span className="absolute inset-0 bg-white/5 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
<span className="absolute bottom-0 left-0 h-[2px] w-full bg-razer scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
</a>
<a className="group relative px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white rounded-md font-mono tracking-tight overflow-hidden" href="#">
<span className="relative z-10">Lifestyle</span>
<span className="absolute inset-0 bg-white/5 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
<span className="absolute bottom-0 left-0 h-[2px] w-full bg-razer scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
</a>
</nav>

<div className="flex items-center gap-3">
<button className="rounded-full p-2 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white">
<svg className="lucide lucide-search h-5 w-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="rounded-full p-2 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white relative">
<svg className="lucide lucide-shopping-cart h-5 w-5" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
<span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-razer shadow-[0_0_8px_#44d62c]"></span>
</button>
<button className="md:hidden rounded-full p-2 text-zinc-400 hover:text-white" id="mobile-menu-btn">
<svg className="lucide lucide-menu h-6 w-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>

<div className="md:hidden hidden border-t border-neutral-800 bg-black" id="mobile-menu">
<div className="space-y-1 px-4 py-4">
<a className="block px-3 py-2 text-base font-medium text-white hover:bg-neutral-900 rounded-md font-mono" href="#">
            Store
          </a>
<a className="block px-3 py-2 text-base font-medium text-zinc-400 hover:text-white hover:bg-neutral-900 rounded-md font-mono" href="#">
            PC
          </a>
<a className="block px-3 py-2 text-base font-medium text-zinc-400 hover:text-white hover:bg-neutral-900 rounded-md font-mono" href="#">
            Console
          </a>
<a className="block px-3 py-2 text-base font-medium text-zinc-400 hover:text-white hover:bg-neutral-900 rounded-md font-mono" href="#">
            Support
          </a>
</div>
</div>
</header>
<main className="relative z-0 pt-16">

<section className="relative overflow-hidden py-24 sm:py-32 lg:pb-40">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-razer/10 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
<div className="reveal active flex flex-col items-center">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-razer/30 bg-razer/10 px-3 py-1 text-xs font-medium text-razer font-mono tracking-tight">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-razer opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-razer"></span>
</span>
              New Generation Available
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white font-display uppercase mb-6 drop-shadow-[0_0_30px_rgba(68,214,44,0.15)]">
              Gaming Laptops
            </h1>
<p className="mx-auto max-w-2xl text-lg text-zinc-400 font-mono tracking-tight leading-relaxed mb-10">
              Peak performance meets ultra-portable design. Power your play,
              work, and creativity with machines tuned for high FPS and all-day
              efficiency.
            </p>
<div className="flex flex-wrap items-center justify-center gap-4">
<a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded bg-razer px-8 font-mono font-medium tracking-tight text-black transition-all hover:bg-razer-dim hover:scale-105 focus:outline-none focus:ring-2 focus:ring-razer focus:ring-offset-2 focus:ring-offset-black" href="#products">
<span className="mr-2">Shop Now</span>
<svg className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="group inline-flex h-12 items-center justify-center rounded border border-white/20 px-8 font-mono font-medium tracking-tight text-white transition-all hover:border-white hover:bg-white/5" href="#">
<svg className="lucide lucide-play-circle mr-2 h-4 w-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                Watch Keynote
              </a>
</div>
</div>

<div className="reveal delay-100 flex flex-wrap gap-3 sm:gap-6 active mt-16 gap-x-3 gap-y-3 justify-center">
<div className="group flex items-center gap-3 rounded-lg border border-white/5 bg-white/5 px-4 py-2 transition-all hover:border-razer/30 hover:bg-razer/5">
<svg className="lucide lucide-cpu h-5 w-5 text-razer" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="text-sm font-medium text-zinc-300 font-mono">
                RTX 50 Series
              </span>
</div>
<div className="group flex items-center gap-3 rounded-lg border border-white/5 bg-white/5 px-4 py-2 transition-all hover:border-razer/30 hover:bg-razer/5">
<svg className="lucide lucide-zap h-5 w-5 text-razer" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-sm font-medium text-zinc-300 font-mono">
                Ryzen AI 9
              </span>
</div>
<div className="group flex items-center gap-3 rounded-lg border border-white/5 bg-white/5 px-4 py-2 transition-all hover:border-razer/30 hover:bg-razer/5">
<svg className="lucide lucide-monitor h-5 w-5 text-razer" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
<span className="text-sm font-medium text-zinc-300 font-mono">
                240Hz OLED
              </span>
</div>
</div>

<div className="mt-16 sm:mt-24 relative reveal delay-200 active">
<div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl">
<img alt="Razer Laptops" className="w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8246183-6cc4-4d79-9ee5-b7c14bc80f44_1600w.jpg"/>
<div className="bg-gradient-to-t from-black via-transparent to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-20 blur-sm pointer-events-none"></div>
</div>
</div>
</section>

<section className="py-20 sm:py-32 bg-neutral-950/50" id="products">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mb-16 text-center reveal">
<h2 className="text-3xl md:text-5xl font-bold font-display uppercase tracking-tight mb-4">
              The Blade Family
            </h2>
<p className="text-zinc-400 font-mono">
              Choose your weapon. Perfectly crafted aluminum unibody designs.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative rounded-2xl border border-white/10 bg-neutral-900 overflow-hidden reveal transition-all duration-500 hover:border-razer/50 hover:shadow-[0_0_30px_-5px_rgba(68,214,44,0.15)]">
<div className="aspect-[4/3] w-full overflow-hidden bg-black relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-neutral-900 z-10"></div>
<img alt="Blade 14" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fd8cc52f-a7ea-4697-bc05-8c4ae56c02ca_800w.jpg"/>

<div className="absolute top-4 right-4 z-20">
<span className="bg-razer text-black text-xs font-bold px-2 py-1 rounded font-mono uppercase tracking-tight">
                    Compact
                  </span>
</div>
</div>
<div className="p-8 relative z-20 -mt-12">
<h3 className="text-2xl font-bold font-display uppercase text-white group-hover:text-razer transition-colors">
                  Blade 14
                </h3>
<p className="mt-2 text-sm text-zinc-400 font-mono tracking-tight">
                  The ultimate 14-inch gaming machine.
                </p>

<div className="mt-6 space-y-3 opacity-80 group-hover:opacity-100 transition-opacity">
<div className="flex items-center gap-3 text-xs text-zinc-300 font-mono">
<svg className="lucide lucide-cpu w-4 h-4 text-razer" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span>AMD Ryzen™ 9 7940HS</span>
</div>
<div className="flex items-center gap-3 text-xs text-zinc-300 font-mono">
<svg className="lucide lucide-aperture w-4 h-4 text-razer" data-lucide="aperture" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
<span className="">NVIDIA® GeForce RTX™ 4070</span>
</div>
</div>
<div className="mt-8 flex items-center gap-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
<button className="flex-1 rounded bg-white py-2 text-sm font-bold text-black hover:bg-zinc-200 font-mono uppercase tracking-tight">
                    Buy Now
                  </button>
<button className="flex-1 rounded border border-white/20 py-2 text-sm font-bold text-white hover:border-razer hover:text-razer font-mono uppercase tracking-tight transition-colors">
                    Learn More
                  </button>
</div>
</div>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-neutral-900 overflow-hidden reveal delay-100 transition-all duration-500 hover:border-razer/50 hover:shadow-[0_0_30px_-5px_rgba(68,214,44,0.15)]">
<div className="aspect-[4/3] w-full overflow-hidden bg-black relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-neutral-900 z-10"></div>
<img alt="Blade 16" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/75f2331b-fe97-40f1-8665-7805f7a2d74c_800w.jpg"/>
<div className="absolute top-4 right-4 z-20">
<span className="bg-razer text-black text-xs font-bold px-2 py-1 rounded font-mono uppercase tracking-tight">
                    Performance
                  </span>
</div>
</div>
<div className="p-8 relative z-20 -mt-12">
<h3 className="text-2xl font-bold font-display uppercase text-white group-hover:text-razer transition-colors">
                  Blade 16
                </h3>
<p className="mt-2 text-sm text-zinc-400 font-mono tracking-tight">
                  Desktop power, laptop form factor.
                </p>
<div className="mt-6 space-y-3 opacity-80 group-hover:opacity-100 transition-opacity">
<div className="flex items-center gap-3 text-xs text-zinc-300 font-mono">
<svg className="lucide lucide-cpu w-4 h-4 text-razer" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span>Intel® Core™ i9-13950HX</span>
</div>
<div className="flex items-center gap-3 text-xs text-zinc-300 font-mono">
<svg className="lucide lucide-aperture w-4 h-4 text-razer" data-lucide="aperture" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
<span>NVIDIA® GeForce RTX™ 4090</span>
</div>
</div>
<div className="mt-8 flex items-center gap-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
<button className="flex-1 rounded bg-white py-2 text-sm font-bold text-black hover:bg-zinc-200 font-mono uppercase tracking-tight">
                    Buy Now
                  </button>
<button className="flex-1 rounded border border-white/20 py-2 text-sm font-bold text-white hover:border-razer hover:text-razer font-mono uppercase tracking-tight transition-colors">
                    Learn More
                  </button>
</div>
</div>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-neutral-900 overflow-hidden reveal delay-200 transition-all duration-500 hover:border-razer/50 hover:shadow-[0_0_30px_-5px_rgba(68,214,44,0.15)]">
<div className="aspect-[4/3] w-full overflow-hidden bg-black relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-neutral-900 z-10"></div>
<img alt="Blade 18" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6dcd5c4a-a18a-4365-9041-291f3fbb73e1_800w.jpg"/>
<div className="absolute top-4 right-4 z-20">
<span className="bg-razer text-black text-xs font-bold px-2 py-1 rounded font-mono uppercase tracking-tight">
                    Desktop Replacement
                  </span>
</div>
</div>
<div className="p-8 relative z-20 -mt-12">
<h3 className="text-2xl font-bold font-display uppercase text-white group-hover:text-razer transition-colors">
                  Blade 18
                </h3>
<p className="mt-2 text-sm text-zinc-400 font-mono tracking-tight">
                  The ultimate desktop replacement.
                </p>
<div className="mt-6 space-y-3 opacity-80 group-hover:opacity-100 transition-opacity">
<div className="flex items-center gap-3 text-xs text-zinc-300 font-mono">
<svg className="lucide lucide-cpu w-4 h-4 text-razer" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span>Intel® Core™ i9-13980HX</span>
</div>
<div className="flex items-center gap-3 text-xs text-zinc-300 font-mono">
<svg className="lucide lucide-aperture w-4 h-4 text-razer" data-lucide="aperture" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
<span>NVIDIA® GeForce RTX™ 4090</span>
</div>
</div>
<div className="mt-8 flex items-center gap-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
<button className="flex-1 rounded bg-white py-2 text-sm font-bold text-black hover:bg-zinc-200 font-mono uppercase tracking-tight">
                    Buy Now
                  </button>
<button className="flex-1 rounded border border-white/20 py-2 text-sm font-bold text-white hover:border-razer hover:text-razer font-mono uppercase tracking-tight transition-colors">
                    Learn More
                  </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative overflow-hidden">

<div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-razer/5 blur-[100px] pointer-events-none"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-bold font-display uppercase tracking-tight">
              The Razer Advantage
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 reveal">
<img alt="CNC Aluminum" className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1592659762303-90081d34b277?w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<svg className="lucide lucide-layers h-8 w-8 text-razer mb-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<h3 className="text-xl font-bold font-mono uppercase text-white">
                  Anodized Aluminum Unibody
                </h3>
<p className="mt-2 text-sm text-zinc-400 font-mono max-w-md">
                  CNC-milled from a single block of aluminum for optimal
                  strength-to-weight ratio and a premium matte finish.
                </p>
</div>
</div>

<div className="row-span-2 group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 reveal delay-100">
<img alt="Cooling" className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aaccc7c2-5ffc-4028-9a09-3207d25c6310_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<svg className="lucide lucide-fan h-8 w-8 text-razer mb-4 animate-spin-slow" data-lucide="fan" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{animationDuration: '4s'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"></path><path d="M12 12v.01"></path></svg>
<h3 className="text-xl font-bold font-mono uppercase text-white">
                  Vapor Chamber Cooling
                </h3>
<p className="mt-2 text-sm text-zinc-400 font-mono">
                  Maximum heat dissipation in the thinnest possible chassis
                  footprint.
                </p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 reveal delay-200">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-black"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">

<div className="w-full h-full" style={{backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
</div>
<div className="absolute bottom-0 left-0 p-8">
<svg className="lucide lucide-scan-line h-8 w-8 text-razer mb-4" data-lucide="scan-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path></svg>
<h3 className="text-xl font-bold font-mono uppercase text-white">
                  World's Fastest Displays
                </h3>
<p className="mt-2 text-sm text-zinc-400 font-mono">
                  Up to 240Hz OLED or 360Hz Mini-LED options.
                </p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 reveal delay-300">
<img alt="Chip" className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34539b54-ca5a-4ab5-9a6e-0388332c5712_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<svg className="lucide lucide-cpu h-8 w-8 text-razer mb-4" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<h3 className="text-xl font-bold font-mono uppercase text-white">
                  Silicon Supremacy
                </h3>
<p className="mt-2 text-sm text-zinc-400 font-mono">
                  Powered by top-tier Intel &amp; AMD silicon.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center bg-black">
<video autoplay="" className="absolute inset-0 h-full w-full object-cover opacity-60" loop="" muted="" playsinline="">
<source src="https://assets2.razerzone.com/images/pnx.assets/12ea9df6441d247876900fec849f859d/laptop-category-nvidia-video-looping.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
<div className="relative z-10 text-center max-w-4xl px-6 reveal">
<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-razer/20 backdrop-blur-sm border border-razer/40">
<svg className="lucide lucide-gpu h-8 w-8 text-razer" data-lucide="gpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 21V3"></path><path d="M2 5h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2.26"></path><path d="M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3"></path><circle cx="16" cy="11" r="2"></circle><circle cx="8" cy="11" r="2"></circle></svg>
</div>
<h2 className="text-4xl md:text-6xl font-bold font-display uppercase tracking-tight mb-6">
            NVIDIA® GeForce RTX™ 50 Series
          </h2>
<p className="text-lg md:text-xl text-zinc-300 font-mono max-w-2xl mx-auto leading-relaxed">
            Experience AI-accelerated performance with DLSS 3.5. Fully powered.
            Thin chassis. No compromises.
          </p>
<div className="mt-10">
<a className="inline-flex items-center gap-2 text-razer font-mono font-bold tracking-tight uppercase hover:text-white transition-colors" href="#">
              Explore Graphics
              <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="sm:p-8 bg-neutral-900/60 max-w-7xl border-white/10 border rounded-3xl mt-32 mr-auto mb-20 ml-auto pt-6 pr-6 pb-6 pl-6 relative backdrop-blur">

<div className="text-center mb-6">
<h2 className="text-3xl md:text-5xl font-semibold font-display uppercase tracking-tight">
            WHY CHOOSE RAZER
          </h2>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start relative z-10">

<div className="flex flex-col min-h-full justify-between">
<div className="">
<div className="">
<span className="text-sm font-bold font-mono text-[#44d62c] uppercase tracking-wider">
                  Razer Advantage
                </span>
<h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-white font-display uppercase tracking-tighter mt-4 drop-shadow-[0_0_15px_rgba(68,214,44,0.15)]">
                  Engineered forDomination.
                </h2>

<div className="mt-12 relative">
<div className="hidden sm:flex flex-col gap-8 relative text-neutral-300 bg-transparent px-2">

<div className="absolute left-4 top-2 bottom-4 w-px bg-gradient-to-b from-[#44d62c] via-[#44d62c]/50 to-transparent opacity-40"></div>

<div className="relative group pl-8">
<div className="absolute left-[13px] top-1.5 w-1.5 h-1.5 rounded-full bg-[#44d62c] shadow-[0_0_8px_#44d62c] z-10"></div>
<div className="flex-1">
<span className="text-sm font-bold font-mono text-white group-hover:text-[#44d62c] transition-colors uppercase tracking-wide">
                          Performance First
                        </span>
<p className="text-sm text-zinc-400 font-sans mt-2 leading-relaxed max-w-sm">
                          Industry-leading thermal design and silicon
                          optimization for maximum FPS without throttling.
                        </p>
</div>
</div>

<div className="relative group pl-8">
<div className="absolute left-[13px] top-1.5 w-1.5 h-1.5 rounded-full bg-[#44d62c] shadow-[0_0_8px_#44d62c] z-10"></div>
<div className="flex-1">
<span className="text-sm font-bold font-mono text-white group-hover:text-[#44d62c] transition-colors uppercase tracking-wide">
                          Chroma™ RGB
                        </span>
<p className="text-sm text-zinc-400 font-sans mt-2 leading-relaxed max-w-sm">
                          The world's largest lighting ecosystem, syncing
                          seamlessly across devices and 300+ games.
                        </p>
</div>
</div>

<div className="relative group pl-8">
<div className="absolute left-[13px] top-1.5 w-1.5 h-1.5 rounded-full bg-[#44d62c] shadow-[0_0_8px_#44d62c] z-10"></div>
<div className="flex-1">
<span className="text-sm font-bold font-mono text-white group-hover:text-[#44d62c] transition-colors uppercase tracking-wide">
                          Unibody Design
                        </span>
<p className="text-sm text-zinc-400 font-sans mt-2 leading-relaxed max-w-sm">
                          CNC-milled aircraft-grade aluminum chassis balancing
                          extreme durability with an ultra-thin profile.
                        </p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="w-full mt-12">
<div className="">
<p className="text-lg font-bold font-display uppercase text-white tracking-tight">
                  Join the Cult
                </p>
<p className="text-sm text-zinc-400 font-mono mt-2 max-w-sm mb-6">
                  Experience the ecosystem that powers esports champions
                  worldwide.
                </p>
<a className="inline-flex items-center justify-center gap-2 h-12 px-8 text-sm font-bold text-black bg-[#44d62c] hover:bg-[#3bb826] rounded uppercase font-mono tracking-tight transition-all hover:shadow-[0_0_20px_rgba(68,214,44,0.4)] hover:scale-105" href="#products">
                  Discover Ecosystem
                  <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 relative">

<article ;"="" className="relative overflow-hidden aspect-[4/3] bg-center bg-cover border-white/10 border rounded-2xl group hover:border-[#44d62c]/50 transition-colors duration-300">
<div className="absolute inset-0 bg-neutral-900/40 group-hover:bg-neutral-900/20 transition-colors duration-500"></div>
<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0542d422-c471-4a89-bda9-ee83028a39fd_800w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center justify-center w-8 h-8 text-[#44d62c] bg-neutral-900/80 border border-white/10 rounded-lg backdrop-blur group-hover:border-[#44d62c]/50 transition-colors">
<svg className="lucide lucide-crosshair" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="22" x2="18" y1="12" y2="12"></line>
<line x1="6" x2="2" y1="12" y2="12"></line>
<line x1="12" x2="12" y1="6" y2="2"></line>
<line x1="12" x2="12" y1="22" y2="18"></line>
</svg>
</span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<p className="uppercase group-hover:text-[#44d62c] transition-colors text-base font-bold text-white tracking-tight font-mono">
                  Precision
                </p>
</div>
</article>

<article ;"="" className="relative overflow-hidden aspect-[4/3] bg-center bg-cover border-white/10 border rounded-2xl group hover:border-[#44d62c]/50 transition-colors duration-300">
<div className="absolute inset-0 bg-neutral-900/40 group-hover:bg-neutral-900/20 transition-colors duration-500"></div>
<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2646ce1c-4460-49b7-9656-e5d9f18de4f7_800w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center justify-center w-8 h-8 text-[#44d62c] bg-neutral-900/80 border border-white/10 rounded-lg backdrop-blur group-hover:border-[#44d62c]/50 transition-colors">
<svg className="lucide lucide-zap" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-white text-base font-bold font-mono uppercase tracking-tight group-hover:text-[#44d62c] transition-colors">
                  Power
                </p>
</div>
</article>

<article ;"="" className="relative overflow-hidden aspect-[4/5] bg-center bg-cover border-white/10 border rounded-2xl group hover:border-[#44d62c]/50 transition-colors duration-300">
<div className="absolute inset-0 bg-neutral-900/40 group-hover:bg-neutral-900/20 transition-colors duration-500"></div>
<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4d78ceda-d84d-446b-847b-0b346d974d41_800w.webp)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center justify-center w-8 h-8 text-[#44d62c] bg-neutral-900/80 border border-white/10 rounded-lg backdrop-blur group-hover:border-[#44d62c]/50 transition-colors">
<svg className="lucide lucide-monitor" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
</span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-white text-base font-bold font-mono uppercase tracking-tight group-hover:text-[#44d62c] transition-colors">
                  Display
                </p>
</div>
</article>

<article className="relative overflow-hidden aspect-[4/5] bg-center bg-cover border-white/10 border rounded-2xl group hover:border-[#44d62c]/50 transition-colors duration-300 bg-neutral-900">
<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e1a28c5f-96f4-409a-9ac1-155df1cd5707_800w.webp)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center justify-center w-8 h-8 text-[#44d62c] bg-neutral-900/80 border border-white/10 rounded-lg backdrop-blur group-hover:border-[#44d62c]/50 transition-colors">
<svg className="lucide lucide-layers" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
<path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
<path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
</svg>
</span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-white text-base font-bold font-mono uppercase tracking-tight group-hover:text-[#44d62c] transition-colors">
                  Ecosystem
                </p>
</div>
</article>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-neutral-900">
<div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
<div className="col-span-2 lg:col-span-2">
<a className="inline-block mb-6" href="#">
<span className="font-mono text-2xl font-bold text-razer tracking-tight">
                RAZER
              </span>
</a>
<p className="text-sm text-zinc-400 font-mono max-w-xs mb-6">
              The world's leading lifestyle brand for gamers. #ForGamersByGamers
            </p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-razer transition-colors" href="#">
<svg className="lucide lucide-twitter h-5 w-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-zinc-500 hover:text-razer transition-colors" href="#">
<svg className="lucide lucide-facebook h-5 w-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="text-zinc-500 hover:text-razer transition-colors" href="#">
<svg className="lucide lucide-instagram h-5 w-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-zinc-500 hover:text-razer transition-colors" href="#">
<svg className="lucide lucide-youtube h-5 w-5" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
</div>
</div>
<div>
<h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-4">
              Shop
            </h3>
<ul className="space-y-3">
<li>
<a className="text-sm text-zinc-500 hover:text-razer font-mono transition-colors" href="#">
                  Laptops
                </a>
</li>
<li>
<a className="text-sm text-zinc-500 hover:text-razer font-mono transition-colors" href="#">
                  Components
                </a>
</li>
<li>
<a className="text-sm text-zinc-500 hover:text-razer font-mono transition-colors" href="#">
                  Accessories
                </a>
</li>
<li>
<a className="text-sm text-zinc-500 hover:text-razer font-mono transition-colors" href="#">
                  Apparel
                </a>
</li>
</ul>
</div>
<div>
<h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-4">
              Support
            </h3>
<ul className="space-y-3">
<li>
<a className="text-sm text-zinc-500 hover:text-razer font-mono transition-colors" href="#">
                  Get Help
                </a>
</li>
<li>
<a className="text-sm text-zinc-500 hover:text-razer font-mono transition-colors" href="#">
                  Registration
                </a>
</li>
<li>
<a className="text-sm text-zinc-500 hover:text-razer font-mono transition-colors" href="#">
                  Drivers
                </a>
</li>
<li>
<a className="text-sm text-zinc-500 hover:text-razer font-mono transition-colors" href="#">
                  Store Locator
                </a>
</li>
</ul>
</div>
<div>
<h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-4">
              Company
            </h3>
<ul className="space-y-3">
<li>
<a className="text-sm text-zinc-500 hover:text-razer font-mono transition-colors" href="#">
                  About
                </a>
</li>
<li>
<a className="text-sm text-zinc-500 hover:text-razer font-mono transition-colors" href="#">
                  Careers
                </a>
</li>
<li>
<a className="text-sm text-zinc-500 hover:text-razer font-mono transition-colors" href="#">
                  Press
                </a>
</li>
<li>
<a className="text-sm text-zinc-500 hover:text-razer font-mono transition-colors" href="#">
                  zVentures
                </a>
</li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-zinc-600 font-mono">
            © 2025 Razer Inc. All rights reserved.
          </div>
<div className="flex gap-6 text-xs text-zinc-500 font-mono">
<a className="hover:text-white transition-colors" href="#">
              Legal Terms
            </a>
<a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-white transition-colors" href="#">
              Cookie Policy
            </a>
</div>
</div>
</div>
</footer>




    </>
  );
}
