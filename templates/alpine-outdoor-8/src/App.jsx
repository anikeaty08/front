import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', () => {
          const blinds = document.querySelectorAll('.js-hero-blind');
          const immersiveBg = document.querySelector('.js-immersive-bg');

          // Ticker variables for smooth animation requestAnimationFrame
          let lastKnownScrollPosition = 0;
          let ticking = false;

          function doParallax(scrollPos) {
              // Hero Parallax - Heavy, cinematic stagger with clamped limits
              if (scrollPos < 1200) {
                  blinds.forEach((blind, index) => {
                      const distanceFromCenter = Math.abs(2 - index);
                      const baseSpeed = 0.028;
                      const stagger = distanceFromCenter * 0.02;

                      // Clamp the movement to avoid exposing background edges
                      const yMoveRaw = scrollPos * (baseSpeed + stagger);
                      const yMoveClamped = Math.max(-180, Math.min(yMoveRaw, 180));

                      blind.style.transform = `translate3d(0, ${yMoveClamped}px, 0)`;;
                  });
              }

              // Immersive Break Parallax + Zoom with clamped limits
              if (immersiveBg) {
                  const rect = immersiveBg.parentElement.getBoundingClientRect();
                  // Check if section is in viewport
                  if (rect.top < window.innerHeight && rect.bottom > 0) {
                      const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);

                      // Translate up slightly and clamp to prevent empty space
                      const yMoveRaw = (scrollPercent - 0.5) * -120;
                      const yMoveClamped = Math.max(-100, Math.min(yMoveRaw, 100));

                      // Ensure it stays safely within the scale limit
                      const scale = 1.05 + (scrollPercent * 0.05);
                      const finalScale = Math.min(scale, 1.12);

                      immersiveBg.style.transform = `translateY(${yMoveClamped}px) scale(${finalScale})`;
                  }
              }
          }

          window.addEventListener('scroll', () => {
              lastKnownScrollPosition = window.scrollY;
              if (!ticking) {
                  window.requestAnimationFrame(() => {
                      doParallax(lastKnownScrollPosition);
                      ticking = false;
                  });
                  ticking = true;
              }
          }, { passive: true });

          // Trigger initial state
          doParallax(window.scrollY);
      });
    


      (function () { const style = document.createElement("style"); style.textContent = ".animate-on-scroll { animation-play-state: paused !important; } .animate-on-scroll.animate { animation-play-state: running !important; }"; document.head.appendChild(style); const once = true; if (!window.__inViewIO) { window.__inViewIO = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("animate"); if (once) window.__inViewIO.unobserve(entry.target); } }); }, { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }); } window.initInViewAnimations = function (selector = ".animate-on-scroll") { document.querySelectorAll(selector).forEach((el) => { window.__inViewIO.observe(el); }); }; document.addEventListener("DOMContentLoaded", () => initInViewAnimations()); })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.035] mix-blend-multiply" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>

<header className="border-b border-[#2d322f]/10 bg-[#ebedea]/90 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

<div className="flex-1 flex justify-start items-center">
<a className="font-display text-3xl font-semibold tracking-tighter uppercase flex items-center gap-2 text-[#2d322f]" href="#">
            AEX
          </a>
</div>

<nav className="hidden md:flex justify-center gap-10 flex-1">
<a className="relative group text-xs font-semibold text-[#2d322f]/70 hover:text-[#3F556B] transition-colors duration-300 uppercase tracking-[0.15em] py-2 whitespace-nowrap" href="#">
            Outerwear
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#3F556B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
</a>
<a className="relative group text-xs font-semibold text-[#2d322f]/70 hover:text-[#3F556B] transition-colors duration-300 uppercase tracking-[0.15em] py-2 whitespace-nowrap" href="#">
            Equipment
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#3F556B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
</a>
<a className="relative group text-xs font-semibold text-[#2d322f]/70 hover:text-[#3F556B] transition-colors duration-300 uppercase tracking-[0.15em] py-2 whitespace-nowrap" href="#">
            Base Layers
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#3F556B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
</a>
<a className="relative group text-xs font-semibold text-[#2d322f]/70 hover:text-[#3F556B] transition-colors duration-300 uppercase tracking-[0.15em] py-2 whitespace-nowrap" href="#">
            Innovations
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#3F556B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
</a>
</nav>

<div className="flex-1 flex justify-end items-center gap-6">
<button aria-label="Search" className="text-[#2d322f] hover:text-[#3F556B] transition-colors duration-300">
<iconify-icon height="24" icon="solar:magnifer-linear" width="24"></iconify-icon>
</button>
<button className="bg-[#2d322f] px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-[#3F556B] transition-colors duration-300 flex items-center gap-2 text-white">
            Pack
            <span className="text-white/50">[0]</span>
</button>
</div>
</div>
</header>
<main className="">

<section className="relative w-full py-20 lg:py-28 overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none">
<img alt="" className="w-full h-full object-cover grayscale opacity-100 scale-[1.06]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4024eb96-6b8f-4f13-99f1-f1889425c4e5_3840w.jpg?w=800&amp;q=80"/>

<div className="absolute inset-0 bg-[#ebedea]/55"></div>

<div className="absolute inset-0 bg-gradient-to-r from-[#ebedea]/70 via-transparent to-[#ebedea]/50"></div>
</div>

<div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="flex flex-col lg:flex-row gap-12 lg:gap-16 gap-x-12 gap-y-12 items-center">

<div className="w-full lg:w-[45%] flex flex-col items-end order-2 lg:order-1 text-right relative py-16">
<h1 className="relative flex flex-col items-end w-full">

<span className="font-display uppercase font-semibold tracking-tighter leading-[0.85] text-[#2d322f] text-[5.25rem] md:text-[7.25rem] lg:text-[9.5rem] [animation:animationIn_1.2s_ease-out_0.2s_both]">
                  CONQUER
                </span>

<span className="font-display uppercase font-semibold tracking-tighter leading-[0.85] text-[#2d322f] text-[5.75rem] md:text-[7.75rem] lg:text-[10.5rem] [animation:animationIn_1.2s_ease-out_0.4s_both]">
                  UNKNOWN
                </span>

<span className="pointer-events-none absolute -right-2 top-1/2 -translate-y-[55%] border border-[#2d322f]/45 bg-[#3F556B] px-2 py-1 text-[25px] md:text-xs font-semibold uppercase tracking-[0.35em] [animation:animationIn_0.8s_ease-out_0.8s_both] text-white">
                  THE
                </span>
</h1>
<p className="font-accent italic text-lg md:text-xl text-[#3F556B] mt-10 mb-4 pr-2 [animation:animationIn_0.8s_ease-out_1s_both]">
                Where the wild goes quiet.
              </p>
<button className="bg-[#2d322f] px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-[#3F556B] transition-colors duration-300 mt-12 mr-2 [animation:animationIn_0.8s_ease-out_1.2s_both] text-white">
                Enter The Terrain
              </button>
</div>

<div className="w-full lg:w-[115%] lg:translate-x-[3%] h-[500px] lg:h-[750px] flex items-center gap-1 lg:gap-1.5 overflow-visible relative group order-1 lg:order-2">

<div className="w-[18%] h-[80%] -translate-y-4 relative overflow-hidden bg-[#1e2420] shadow-lg z-10 rounded-[1px]">
<div className="absolute inset-x-0 -top-[30%] h-[160%] scale-[1.15] bg-no-repeat bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3bbe5cf4-acf8-430e-9b9b-2d44d8b90f0c_3840w.webp')] js-hero-blind will-change-transform" style={{backgroundSize: '500% 100%', backgroundPosition: '0% 50%'}}></div>
</div>

<div className="w-[22%] h-[95%] translate-y-1 relative overflow-hidden bg-[#1e2420] shadow-xl z-20 rounded-[1px]">
<div className="absolute inset-x-0 -top-[30%] h-[160%] scale-[1.15] bg-no-repeat bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3bbe5cf4-acf8-430e-9b9b-2d44d8b90f0c_3840w.webp')] js-hero-blind will-change-transform" style={{backgroundSize: '500% 100%', backgroundPosition: '25% 50%'}}></div>
</div>

<div className="w-[28%] h-[110%] -translate-y-2 relative overflow-hidden bg-[#1e2420] shadow-2xl z-30 rounded-[1px]">
<div className="absolute inset-x-0 -top-[30%] h-[160%] scale-[1.15] bg-no-repeat bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3bbe5cf4-acf8-430e-9b9b-2d44d8b90f0c_3840w.webp')] js-hero-blind will-change-transform" style={{backgroundSize: '500% 100%', backgroundPosition: '50% 50%'}}></div>
</div>

<div className="w-[22%] h-[95%] translate-y-1 relative overflow-hidden bg-[#1e2420] shadow-xl z-20 rounded-[1px]">
<div className="absolute inset-x-0 -top-[30%] h-[160%] scale-[1.15] bg-no-repeat bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3bbe5cf4-acf8-430e-9b9b-2d44d8b90f0c_3840w.webp')] js-hero-blind will-change-transform" style={{backgroundSize: '500% 100%', backgroundPosition: '75% 50%'}}></div>
</div>

<div className="w-[18%] h-[80%] -translate-y-4 relative overflow-hidden bg-[#1e2420] shadow-lg z-10 rounded-[1px]">
<div className="absolute inset-x-0 -top-[30%] h-[160%] scale-[1.15] bg-no-repeat bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3bbe5cf4-acf8-430e-9b9b-2d44d8b90f0c_3840w.webp')] js-hero-blind will-change-transform" style={{backgroundSize: '500% 100%', backgroundPosition: '100% 50%'}}></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full bg-[#1e2420] overflow-hidden">

<div className="absolute inset-0 pointer-events-none opacity-[0.06]" style="background-image:
              linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px);
              background-size: 64px 64px;"></div>

<div className="absolute inset-x-0 top-0 h-px bg-white/10"></div>
<div className="absolute inset-x-0 bottom-0 h-px bg-white/10"></div>
<div className="relative max-w-[1100px] mx-auto px-6 py-24 lg:py-32 text-center">

<div className="flex items-center justify-center gap-3 mb-8 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<span className="h-px w-10 bg-[#3F556B]/70"></span>
<span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/55">
              AEX DOCTRINE
            </span>
<span className="h-px w-10 bg-[#3F556B]/70"></span>
</div>
<h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter uppercase leading-[0.9] animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] text-white">
            Built for the
            <span className="text-[#3F556B]">edge</span>
<br/>
            of terrain
          </h2>
<p className="mt-8 font-sans text-lg md:text-xl max-w-[40ch] mx-auto leading-relaxed animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] text-white/60">
            AEX develops field systems for controlled survival in unstable
            environments.
          </p>

<div className="mt-10 flex justify-center">
<span className="h-px w-20 bg-[#3F556B]/60"></span>
</div>
</div>
</section>

<section className="w-full">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-auto lg:h-[70vh]">

<div className="relative group overflow-hidden h-96 lg:h-full cursor-pointer bg-[#2d322f] animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<img alt="Alpine" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b2bd4dcc-aeba-42b1-a228-8e7aea6025f4_3840w.webp?w=800&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#1e2420]/80 to-transparent pointer-events-none"></div>

<div className="absolute bottom-0 left-0 p-8 z-20 pointer-events-none">
<span className="font-display text-xs uppercase tracking-[0.2em] mb-2 block drop-shadow-md text-white/70">
                Sector 01
              </span>
<h3 className="font-display text-4xl lg:text-5xl font-semibold uppercase tracking-tighter drop-shadow-lg text-white">
                Alpine
              </h3>
</div>

<div className="absolute inset-y-0 right-0 w-[60%] bg-[#414f3f]/80 backdrop-blur-md translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-10 flex flex-col justify-end p-8 border-l border-white/10">
<div className="w-0 group-hover:w-full h-px mb-6 transition-all duration-700 delay-300 ease-out bg-white/40"></div>
<p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400 leading-relaxed font-medium text-white">
                High altitude protection and vertical mobility engineered for
                structural integrity in sub-zero ascents.
              </p>
</div>
</div>

<div className="relative group overflow-hidden h-96 lg:h-full cursor-pointer bg-[#2d322f] animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
<img alt="Trail" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1e2420]/80 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 p-8 z-20 pointer-events-none">
<span className="font-display text-xs uppercase tracking-[0.2em] mb-2 block drop-shadow-md text-white/70">
                Sector 02
              </span>
<h3 className="font-display text-4xl lg:text-5xl font-semibold uppercase tracking-tighter drop-shadow-lg text-white">
                Trail
              </h3>
</div>
<div className="absolute inset-y-0 right-0 w-[60%] bg-[#414f3f]/80 backdrop-blur-md translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-10 flex flex-col justify-end p-8 border-l border-white/10">
<div className="w-0 group-hover:w-full h-px mb-6 transition-all duration-700 delay-300 ease-out bg-white/40"></div>
<p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400 leading-relaxed font-medium text-white">
                Rapid movement configurations optimized for variable ground
                elements and sudden microclimate shifts.
              </p>
</div>
</div>

<div className="relative group overflow-hidden h-96 lg:h-full cursor-pointer bg-[#2d322f] animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]">
<img alt="Snow" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1507534192483-69914c0692d7?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1e2420]/80 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 p-8 z-20 pointer-events-none">
<span className="font-display text-xs uppercase tracking-[0.2em] mb-2 block drop-shadow-md text-white/70">
                Sector 03
              </span>
<h3 className="font-display text-4xl lg:text-5xl font-semibold uppercase tracking-tighter drop-shadow-lg text-white">
                Snow
              </h3>
</div>
<div className="absolute inset-y-0 right-0 w-[60%] bg-[#414f3f]/80 backdrop-blur-md translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-10 flex flex-col justify-end p-8 border-l border-white/10">
<div className="w-0 group-hover:w-full h-px mb-6 transition-all duration-700 delay-300 ease-out bg-white/40"></div>
<p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400 leading-relaxed font-medium text-white">
                Extreme thermal isolation layering, providing deep powder
                resistance and critical core temperature maintenance.
              </p>
</div>
</div>

<div className="relative group overflow-hidden h-96 lg:h-full cursor-pointer bg-[#2d322f] animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]">
<img alt="Expedition" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/55bcfcb3-26eb-42a7-bc3a-e52dab7df5c1_3840w.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1e2420]/80 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-0 p-8 z-20 pointer-events-none">
<span className="font-display text-xs uppercase tracking-[0.2em] mb-2 block drop-shadow-md text-white/70">
                Sector 04
              </span>
<h3 className="font-display text-4xl lg:text-5xl font-semibold uppercase tracking-tighter drop-shadow-lg text-white">
                Remote
              </h3>
</div>
<div className="absolute inset-y-0 right-0 w-[60%] bg-[#414f3f]/80 backdrop-blur-md translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-10 flex flex-col justify-end p-8 border-l border-white/10">
<div className="w-0 group-hover:w-full h-px mb-6 transition-all duration-700 delay-300 ease-out bg-white/40"></div>
<p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400 leading-relaxed font-medium text-white">
                Long-range isolation systems engineered for autonomous survival
                beyond mapped terrain.
              </p>
</div>
</div>
</div>
</section>

<section className="bg-[#1e2420] border-y relative z-20 border-white/5">
<div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x text-center divide-white/5">
<div className="py-24 px-6 flex flex-col items-center justify-center animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<span className="font-display text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter mb-4 drop-shadow-lg text-white">
                28K
                <span className="text-3xl text-[#3F556B] ml-1">MM</span>
</span>
<span className="text-xs uppercase tracking-[0.2em] font-semibold text-white/50">
                Waterproofing Grade
              </span>
</div>
<div className="py-24 px-6 flex flex-col items-center justify-center animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
<span className="font-display text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter mb-4 drop-shadow-lg text-white">
                -25
                <span className="text-3xl text-[#3F556B] ml-1">°C</span>
</span>
<span className="text-xs uppercase tracking-[0.2em] font-semibold text-white/50">
                Thermal Tolerance
              </span>
</div>
<div className="py-24 px-6 flex flex-col items-center justify-center animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both]">
<span className="font-display text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter mb-4 drop-shadow-lg text-white">
                320
                <span className="text-3xl text-[#3F556B] ml-1">G</span>
</span>
<span className="text-xs uppercase tracking-[0.2em] font-semibold text-white/50">
                Base Carry Weight
              </span>
</div>
<div className="py-24 px-6 flex flex-col items-center justify-center animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]">
<span className="font-display text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter mb-4 drop-shadow-lg text-white">
                85
                <span className="text-3xl text-[#3F556B] ml-1">%</span>
</span>
<span className="text-xs uppercase tracking-[0.2em] font-semibold text-white/50">
                Recycled Composite
              </span>
</div>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32 bg-[#ebedea]">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
<div className="max-w-2xl">
<h2 className="font-display text-5xl md:text-6xl font-semibold tracking-tighter uppercase text-[#2d322f] mb-4">
              Hardware
              <span className="text-[#3F556B]">Inventory</span>
</h2>
<p className="text-base text-[#2d322f]/70">
              Controlled equipment configurations engineered for maximum
              efficiency, structural weather resistance, and tactical
              deployment.
            </p>
</div>
<a className="inline-flex items-center gap-2 px-6 py-3 border border-[#2d322f]/20 bg-[#ebedea] text-xs font-semibold uppercase tracking-widest text-[#2d322f] hover:bg-[#3F556B] hover:border-[#3F556B] transition-colors shrink-0 hover:text-white" href="#">
            Access Armory
            <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="flex flex-col bg-[#ebedea] border border-[#2d322f]/10 transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(63,85,107,0.08)] animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
<div className="relative aspect-[4/5] overflow-hidden flex items-center justify-center p-8 bg-white">
<span className="absolute top-4 left-4 bg-[#3F556B] text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1 z-10 shadow-sm text-white">
                Prototype Drop
              </span>
<button className="absolute top-4 right-4 text-[#2d322f]/30 hover:text-[#3F556B] z-10 transition-colors">
<iconify-icon height="24" icon="solar:heart-linear" width="24"></iconify-icon>
</button>
<img alt="Trail Running Shoe" className="w-full object-contain drop-shadow-xl transition-transform duration-500 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3734ddcc-c1d3-4dc2-929f-b785a4cb24b1_800w.webp"/>
</div>
<div className="p-6 flex flex-col flex-grow bg-[#ebedea]">
<div className="flex justify-between items-start mb-6">
<h3 className="font-display text-2xl font-semibold tracking-tighter uppercase text-[#2d322f] pr-4">
<span className="border-b-2 border-[#3F556B] pb-1 inline-block">
                    Terra-Grip Element
                  </span>
</h3>
<span className="font-display text-xl font-semibold text-[#2d322f] shrink-0">
                  $180
                </span>
</div>
<div className="grid grid-cols-3 gap-2 border-y border-[#2d322f]/10 py-3 mt-auto mb-6">
<div className="flex flex-col items-center justify-center">
<iconify-icon className="text-[#3F556B] mb-1" height="16" icon="solar:snowflake-linear" width="16"></iconify-icon>
<span className="font-display text-xs uppercase tracking-widest text-[#2d322f]/60">
                    All-Temp
                  </span>
</div>
<div className="flex flex-col items-center justify-center border-x border-[#2d322f]/10 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]">
<iconify-icon className="text-[#3F556B] mb-1" height="16" icon="solar:waterdrops-linear" width="16"></iconify-icon>
<span className="font-display text-xs uppercase tracking-widest text-[#2d322f]/60">
                    Resistant
                  </span>
</div>
<div className="flex flex-col items-center justify-center animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both]">
<iconify-icon className="text-[#3F556B] mb-1" height="16" icon="solar:scale-linear" width="16"></iconify-icon>
<span className="font-display text-xs uppercase tracking-widest text-[#2d322f]/60">
                    245g
                  </span>
</div>
</div>
<button className="w-full bg-transparent border border-[#2d322f] py-3 text-xs font-semibold uppercase tracking-widest text-[#2d322f] hover:bg-[#3F556B] hover:border-[#3F556B] transition-all flex items-center justify-center gap-2 hover:text-white">
                Initialize
                <iconify-icon height="16" icon="solar:add-circle-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="flex flex-col bg-[#ebedea] border border-[#2d322f]/10 transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(63,85,107,0.08)]">
<div className="relative aspect-[4/5] overflow-hidden flex items-center justify-center p-8 bg-white">
<span className="absolute top-4 left-4 bg-[#3F556B] text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1 z-10 shadow-sm text-white">
                Tactical Series
              </span>
<button className="absolute top-4 right-4 text-[#2d322f]/30 hover:text-[#3F556B] z-10 transition-colors">
<iconify-icon height="24" icon="solar:heart-linear" width="24"></iconify-icon>
</button>
<img alt="Hardshell Jacket" className="w-full object-contain drop-shadow-xl transition-transform duration-500 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d1829ff-2aa2-4535-9e73-12ce151d3ad1_800w.webp"/>
</div>
<div className="p-6 flex flex-col flex-grow bg-[#ebedea]">
<div className="flex justify-between items-start mb-6">
<h3 className="font-display text-2xl font-semibold tracking-tighter uppercase text-[#2d322f] pr-4">
<span className="border-b-2 border-[#3F556B] pb-1 inline-block">
                    Zero-Point Matrix
                  </span>
</h3>
<span className="font-display text-xl font-semibold text-[#2d322f] shrink-0">
                  $520
                </span>
</div>
<div className="grid grid-cols-3 gap-2 border-y border-[#2d322f]/10 py-3 mt-auto mb-6">
<div className="flex flex-col items-center justify-center">
<iconify-icon className="text-[#3F556B] mb-1" height="16" icon="solar:snowflake-linear" width="16"></iconify-icon>
<span className="font-display text-xs uppercase tracking-widest text-[#2d322f]/60">
                    -25°C
                  </span>
</div>
<div className="flex flex-col items-center justify-center border-x border-[#2d322f]/10">
<iconify-icon className="text-[#3F556B] mb-1" height="16" icon="solar:cloud-water-linear" width="16"></iconify-icon>
<span className="font-display text-xs uppercase tracking-widest text-[#2d322f]/60">
                    28K MM
                  </span>
</div>
<div className="flex flex-col items-center justify-center">
<iconify-icon className="text-[#3F556B] mb-1" height="16" icon="solar:scale-linear" width="16"></iconify-icon>
<span className="font-display text-xs uppercase tracking-widest text-[#2d322f]/60">
                    380g
                  </span>
</div>
</div>
<button className="w-full bg-transparent border border-[#2d322f] py-3 text-xs font-semibold uppercase tracking-widest text-[#2d322f] hover:bg-[#3F556B] hover:border-[#3F556B] transition-all flex items-center justify-center gap-2 hover:text-white">
                Initialize
                <iconify-icon height="16" icon="solar:add-circle-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="flex flex-col bg-[#ebedea] border border-[#2d322f]/10 transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(63,85,107,0.08)]">
<div className="relative aspect-[4/5] overflow-hidden flex items-center justify-center p-8 bg-white">
<span className="absolute top-4 left-4 bg-[#3F556B] text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1 z-10 shadow-sm text-white">
                Most Deployed
              </span>
<button className="absolute top-4 right-4 text-[#2d322f]/30 hover:text-[#3F556B] z-10 transition-colors">
<iconify-icon height="24" icon="solar:heart-linear" width="24"></iconify-icon>
</button>
<img alt="Climbing Harness" className="w-full object-contain drop-shadow-xl transition-transform duration-500 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/90248f41-e000-45bc-8d5c-36811411ca3f_800w.webp"/>
</div>
<div className="p-6 flex flex-col flex-grow bg-[#ebedea]">
<div className="flex justify-between items-start mb-6">
<h3 className="font-display text-2xl font-semibold tracking-tighter uppercase text-[#2d322f] pr-4">
<span className="border-b-2 border-[#3F556B] pb-1 inline-block">
                    Carbon Core Rig
                  </span>
</h3>
<span className="font-display text-xl font-semibold text-[#2d322f] shrink-0">
                  $145
                </span>
</div>
<div className="grid grid-cols-3 gap-2 border-y border-[#2d322f]/10 py-3 mt-auto mb-6">
<div className="flex flex-col items-center justify-center">
<iconify-icon className="text-[#3F556B] mb-1" height="16" icon="solar:settings-linear" width="16"></iconify-icon>
<span className="font-display text-xs uppercase tracking-widest text-[#2d322f]/60">
                    Modular
                  </span>
</div>
<div className="flex flex-col items-center justify-center border-x border-[#2d322f]/10">
<iconify-icon className="text-[#3F556B] mb-1" height="16" icon="solar:shield-check-linear" width="16"></iconify-icon>
<span className="font-display text-xs uppercase tracking-widest text-[#2d322f]/60">
                    UIAA Cert
                  </span>
</div>
<div className="flex flex-col items-center justify-center">
<iconify-icon className="text-[#3F556B] mb-1" height="16" icon="solar:scale-linear" width="16"></iconify-icon>
<span className="font-display text-xs uppercase tracking-widest text-[#2d322f]/60">
                    210g
                  </span>
</div>
</div>
<button className="w-full bg-transparent border border-[#2d322f] py-3 text-xs font-semibold uppercase tracking-widest text-[#2d322f] hover:bg-[#3F556B] hover:border-[#3F556B] transition-all flex items-center justify-center gap-2 hover:text-white">
                Initialize
                <iconify-icon height="16" icon="solar:add-circle-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#1e2420]">

<div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#3F556B]/60 to-transparent z-10 pointer-events-none"></div>
<img alt="High altitude mountain" className="absolute inset-x-0 -top-[30%] w-full h-[160%] object-cover object-[center_30%] js-immersive-bg transition-transform duration-300 ease-out z-0 scale-[1.15] will-change-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4024eb96-6b8f-4f13-99f1-f1889425c4e5_3840w.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-[#1e2420]/30 z-0 mix-blend-multiply pointer-events-none"></div>
<h2 className="relative z-20 flex flex-col items-center text-center px-6 mt-12">
<span className="font-display text-6xl md:text-8xl lg:text-[9rem] font-semibold uppercase tracking-tighter leading-[0.8] drop-shadow-2xl text-white">
            Tested Above
          </span>
<span className="font-accent italic text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mt-6 drop-shadow-xl">
<span className="text-white/80">6,000</span>
<span className="text-white">meters</span>
</span>
</h2>
</section>

<section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32 border-b border-[#2d322f]/10">
<div className="mb-20 text-center">

<div className="flex items-center justify-center gap-3 mb-8">
<span className="h-px w-10 bg-[#3F556B]/70"></span>
<span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2d322f]/60">
              FIELD TESTED
            </span>
<span className="h-px w-10 bg-[#3F556B]/70"></span>
</div>
<h2 className="font-display text-5xl md:text-6xl font-semibold tracking-tighter uppercase text-[#2d322f] leading-[0.95]">
            Tested By Those
            <br/>
            Who Climb
            <span className="text-[#3F556B]">before</span>
<br/>
</h2>
<p className="mt-8 font-sans text-lg md:text-xl text-[#2d322f]/60 max-w-[40ch] mx-auto leading-relaxed">
            Elite operatives validating AEX systems in live alpine conditions.
          </p>
<div className="mt-10 flex justify-center">
<span className="h-px w-20 bg-[#3F556B]/40"></span>
</div>
</div>

<div className="grid md:grid-cols-3 gap-8 lg:gap-12 h-auto md:h-[600px]">

<div className="group cursor-pointer flex flex-col h-full animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">
<div className="aspect-[3/4] md:h-[65%] w-full overflow-hidden bg-[#2d322f] mb-6">
<img alt="Operative Elias Vance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/302bcbcf-41a5-410b-8225-950ce8c63925_3840w.webp?w=800&amp;q=80"/>
</div>
<div className="">
<h3 className="font-display text-3xl uppercase tracking-tighter text-[#2d322f] mb-1">
                Elias Vance
              </h3>
<p className="text-[10px] uppercase font-semibold text-[#3F556B] tracking-[0.2em] mb-3">
                FREERIDE / DEEP POWDER / CONTROL
              </p>
<p className="font-accent italic text-[#2d322f]/70 text-lg mb-4">
                "Silence and survival are the same thing at elevation."
              </p>
</div>
</div>

<div className="group cursor-pointer flex flex-col h-full animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]">
<div className="mb-6 order-1">
<h3 className="font-display text-3xl uppercase tracking-tighter text-[#2d322f] mb-1">
                Sarah Thorne
              </h3>
<p className="text-[10px] uppercase font-semibold text-[#3F556B] tracking-[0.2em] mb-3">
                ALL CONDITIONS / HIGH CONSEQUENCE / DISCIPLINE
              </p>
<p className="font-accent italic text-[#2d322f]/70 text-lg mb-4">
                "Trust the engineering. Ignore the elements."
              </p>
</div>
<div className="aspect-[3/4] md:h-[65%] w-full overflow-hidden bg-[#2d322f] order-2">
<img alt="Operative Sarah Thorne" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/706d8c8b-1cf5-4e45-b025-b86541e10c75_3840w.webp?w=800&amp;q=80"/>
</div>
</div>

<div className="group cursor-pointer flex flex-col h-full animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both]">
<div className="aspect-[3/4] md:h-[65%] w-full overflow-hidden bg-[#2d322f] mb-6">
<img alt="Operative Marcus Lin" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ba725926-bb3d-4966-9d7d-577b7470b473_3840w.webp?w=800&amp;q=80"/>
</div>
<div className="">
<h3 className="font-display text-3xl uppercase tracking-tighter text-[#2d322f] mb-1">
                Marcus Lin
              </h3>
<p className="text-[10px] uppercase font-semibold text-[#3F556B] tracking-[0.2em] mb-3">
                BACKCOUNTRY / SUB-ZERO / LIGHTWEIGHT
              </p>
<p className="font-accent italic text-[#2d322f]/70 text-lg mb-4">
                "Every gram removed is a degree of freedom gained."
              </p>
</div>
</div>
</div>
<div className="mt-20 flex justify-center w-full">
<a className="bg-transparent border border-[#2d322f] px-10 py-4 text-xs font-semibold uppercase tracking-widest text-[#2d322f] hover:bg-[#3F556B] hover:border-[#3F556B] transition-all duration-300 hover:text-white" href="#">
            View All Operatives
          </a>
</div>
</section>


<section className="bg-[#f4f6f3] text-[#2d322f] py-28 px-6">
<div className="max-w-3xl mx-auto text-center">

<div className="w-16 h-px bg-[#3F556B]/40 mx-auto mb-10"></div>

<p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#2d322f]/60 mb-6">
            Field Deployment
          </p>

<h2 className="text-4xl md:text-5xl font-display leading-tight mb-8 uppercase tracking-tight">
            Built for movement beyond
            <br className="hidden md:block"/>
            maintained ground.
          </h2>

<p className="text-lg text-[#2d322f]/70 leading-relaxed mb-12 max-w-[55ch] mx-auto">
            AEX designs modular outdoor systems engineered for field athletes
            operating in variable terrain. Every element exists to reduce
            friction, manage load, and extend endurance.
          </p>

<div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#3F556B] mb-12">
            Footwear / Shell Systems / Load Architecture / Thermal Layers
          </div>

<div className="flex flex-col md:flex-row items-center justify-center gap-6">

<a className="bg-[#2d322f] px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-[#3F556B] transition-colors duration-300 text-white" href="#inventory">
              Enter the Armory
            </a>

<a className="text-xs font-semibold uppercase tracking-widest text-[#2d322f]/70 hover:text-[#3F556B] transition-colors" href="#inventory">
              View Inventory →
            </a>
</div>
</div>
</section>
</main>

<footer className="bg-[#1e2420] pt-24 pb-12 border-t-4 border-[#3F556B] text-white">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">

<div className="lg:col-span-2">
<h3 className="font-display text-2xl font-semibold tracking-tighter uppercase mb-4 flex items-center gap-3 text-white">
<iconify-icon className="text-[#3F556B]" height="24" icon="solar:radar-linear" width="24"></iconify-icon>
              Join Command
            </h3>
<p className="text-sm mb-6 max-w-sm leading-relaxed text-white/60">
              Secure frequency for field reports, prototype access, and
              technical system updates.
            </p>
<form className="flex max-w-md">
<input className="w-full bg-[#2d322f] border px-4 py-3 text-xs placeholder:text-white/30 focus:outline-none focus:border-[#3F556B] transition-colors uppercase tracking-[0.15em] border-white/10 text-white" placeholder="ENTER COMM LINK" type="email"/>
<button className="bg-[#3F556B] px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:text-[#1e2420] transition-colors shrink-0 border border-[#3F556B] text-white hover:bg-white hover:border-white" type="submit">
                Transmit
              </button>
</form>
</div>

<div>
<h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3F556B] mb-6">
              Systems
            </h4>
<ul className="space-y-4">
<li>
<a className="text-sm transition-colors text-white/60 hover:text-white" href="#">
                  Outerwear Matrices
                </a>
</li>
<li>
<a className="text-sm transition-colors text-white/60 hover:text-white" href="#">
                  Thermal Layers
                </a>
</li>
<li>
<a className="text-sm transition-colors text-white/60 hover:text-white" href="#">
                  Tactical Packs
                </a>
</li>
<li>
<a className="text-sm transition-colors text-white/60 hover:text-white" href="#">
                  All-Terrain Treads
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3F556B] mb-6">
              Logistics
            </h4>
<ul className="space-y-4">
<li>
<a className="text-sm transition-colors text-white/60 hover:text-white" href="#">
                  Maintenance Bay
                </a>
</li>
<li>
<a className="text-sm transition-colors text-white/60 hover:text-white" href="#">
                  Warranty Protocol
                </a>
</li>
<li>
<a className="text-sm transition-colors text-white/60 hover:text-white" href="#">
                  Extraction / Returns
                </a>
</li>
<li>
<a className="text-sm transition-colors text-white/60 hover:text-white" href="#">
                  Comm Channel
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3F556B] mb-6">
              Identity
            </h4>
<ul className="space-y-4">
<li>
<a className="text-sm transition-colors text-white/60 hover:text-white" href="#">
                  Mission Statement
                </a>
</li>
<li>
<a className="text-sm transition-colors text-white/60 hover:text-white" href="#">
                  Eco-Directive
                </a>
</li>
<li>
<a className="text-sm transition-colors text-white/60 hover:text-white" href="#">
                  Operative Roster
                </a>
</li>
<li>
<a className="text-sm transition-colors text-white/60 hover:text-white" href="#">
                  Recruitment
                </a>
</li>
</ul>
</div>
</div>

<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-6 border-white/10">
<div className="flex items-center gap-4">
<span className="font-display text-3xl font-semibold tracking-tighter uppercase text-white">
              AEX
            </span>
<p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
              © 2024 Alpine Engineered Extremes.
            </p>
</div>
<div className="flex gap-6">
<a className="transition-colors text-white/40 hover:text-white" href="#">
<iconify-icon height="20" icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="transition-colors text-white/40 hover:text-white" href="#">
<iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon>
</a>
<a className="transition-colors text-white/40 hover:text-white" href="#">
<iconify-icon height="20" icon="solar:play-circle-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>





    </>
  );
}
