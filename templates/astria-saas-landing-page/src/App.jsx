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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        (function () {
          const root = document.currentScript.closest('[data-module="feature-video"]');
          const video = root.querySelector('video');
          const playBtn = root.querySelector('[data-play]');
          function initIcons() { try { window.lucide && window.lucide.createIcons(); } catch(e){} }
          if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initIcons); else initIcons();

          playBtn.addEventListener('click', () => {
            playBtn.classList.add('hidden');
            video.setAttribute('controls', '');
            const playPromise = video.play();
            if (playPromise && typeof playPromise.catch === 'function') {
              playPromise.catch(() => { /* autoplay blocked; leave controls visible */ });
            }
          });
        })();
      


      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
      });
    


  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stat-counter");
    if (!counters.length) return;

    const animateCounter = (el) => {
      const target = parseInt(el.getAttribute("data-counter"), 10);
      const duration = 1500; // ms
      let start = null;

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const value = Math.floor(progress * target);
        el.textContent = value.toString();
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target); // run once per counter
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    counters.forEach((counter) => observer.observe(counter));
  });



  document.addEventListener("DOMContentLoaded", () => {
    const logoFlips = document.querySelectorAll(".logo-flip");
    if (!logoFlips.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("logo-flip-active");
            obs.unobserve(entry.target); // start once per logo
          }
        });
      },
      { threshold: 0.35 }
    );

    logoFlips.forEach((el) => observer.observe(el));
  });



  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".changelog-card");
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const index = [...cards].indexOf(el);
            // small stagger
            setTimeout(() => {
              el.classList.add("visible");
            }, index * 120);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.25 }
    );

    cards.forEach((card) => observer.observe(card));
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
      
<div id="wrapper">

<div className="gradient-blur">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
<style>
    .gradient-blur {
      position: fixed;
      z-index: 5;
      inset: auto 0 0 0;
      height: 65%;
      pointer-events: none;
    }

    .gradient-blur>div,
    .gradient-blur::before,
    .gradient-blur::after {
      position: absolute;
      inset: 0;
    }

    .gradient-blur::before {
      content: "";
      z-index: 1;
      backdrop-filter: blur(0.5px);
      mask: linear-gradient(to bottom,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 12.5%,
          rgba(0, 0, 0, 1) 25%,
          rgba(0, 0, 0, 0) 37.5%);
    }

    .gradient-blur>div:nth-of-type(1) {
      z-index: 2;
      backdrop-filter: blur(1px);
      mask: linear-gradient(to bottom,
          rgba(0, 0, 0, 0) 12.5%,
          rgba(0, 0, 0, 1) 25%,
          rgba(0, 0, 0, 1) 37.5%,
          rgba(0, 0, 0, 0) 50%);
    }

    .gradient-blur>div:nth-of-type(2) {
      z-index: 3;
      backdrop-filter: blur(2px);
      mask: linear-gradient(to bottom,
          rgba(0, 0, 0, 0) 25%,
          rgba(0, 0, 0, 1) 37.5%,
          rgba(0, 0, 0, 1) 50%,
          rgba(0, 0, 0, 0) 62.5%);
    }

    .gradient-blur>div:nth-of-type(3) {
      z-index: 4;
      backdrop-filter: blur(4px);
      mask: linear-gradient(to bottom,
          rgba(0, 0, 0, 0) 37.5%,
          rgba(0, 0, 0, 1) 50%,
          rgba(0, 0, 0, 1) 62.5%,
          rgba(0, 0, 0, 0) 75%);
    }

    .gradient-blur>div:nth-of-type(4) {
      z-index: 5;
      backdrop-filter: blur(8px);
      mask: linear-gradient(to bottom,
          rgba(0, 0, 0, 0) 50%,
          rgba(0, 0, 0, 1) 62.5%,
          rgba(0, 0, 0, 1) 75%,
          rgba(0, 0, 0, 0) 87.5%);
    }

    .gradient-blur>div:nth-of-type(5) {
      z-index: 6;
      backdrop-filter: blur(16px);
      mask: linear-gradient(to bottom,
          rgba(0, 0, 0, 0) 62.5%,
          rgba(0, 0, 0, 1) 75%,
          rgba(0, 0, 0, 1) 87.5%,
          rgba(0, 0, 0, 0) 100%);
    }

    .gradient-blur>div:nth-of-type(6) {
      z-index: 7;
      backdrop-filter: blur(32px);
      mask: linear-gradient(to bottom,
          rgba(0, 0, 0, 0) 75%,
          rgba(0, 0, 0, 1) 87.5%,
          rgba(0, 0, 0, 1) 100%);
    }

    .gradient-blur::after {
      content: "";
      z-index: 8;
      backdrop-filter: blur(64px);
      mask: linear-gradient(to bottom,
          rgba(0, 0, 0, 0) 87.5%,
          rgba(0, 0, 0, 1) 100%);
    }
  /* ---------- Trusted logos ---------- */
  
  /* Hover tilt wrapper */
  .logo-tilt {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  perspective: 900px;
  transform-style: preserve-3d;
  transition: transform 350ms ease, box-shadow 350ms ease;
  }
  
  .logo-tilt:hover {
  transform: rotateX(8deg) rotateY(-8deg) translateY(-2px);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.6);
  }
  
  /* 3D flip core */
  .logo-flip {
  position: relative;
  width: 140px;
  height: 40px;
  transform-style: preserve-3d;
  transform-origin: center;
  }
  
  /* Faces */
  .logo-flip::before,
  .logo-flip::after {
  content: attr(data-front);
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.35rem;
  backface-visibility: hidden;
  }
  
  /* Back face uses data-back */
  .logo-flip::after {
  content: attr(data-back);
  transform: rotateX(180deg);
  opacity: 0.85;
  }
  
  /* Flip animation (added with JS via .logo-flip-active) */
  @keyframes flipLogo {
  0% { transform: rotateX(0deg); }
  45% { transform: rotateX(180deg); }
  50% { transform: rotateX(180deg); }
  95% { transform: rotateX(360deg); }
  100% { transform: rotateX(360deg); }
  }
  
  .logo-flip-active {
  animation: flipLogo 4s linear infinite;
  }
  
  /* Staggered delays for each logo */
  .logo-delay-200 { animation-delay: 0.2s; }
  .logo-delay-400 { animation-delay: 0.4s; }
  .logo-delay-600 { animation-delay: 0.6s; }
  
  /* ---------- Testimonials scrolling columns ---------- */
  @keyframes testimonialsUp {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
  }
  
  @keyframes testimonialsDown {
  0% { transform: translateY(-50%); }
  100% { transform: translateY(0); }
  }
  
  .animate-testimonials-up {
  animation: testimonialsUp 30s linear infinite;
  }
  
  .animate-testimonials-down {
  animation: testimonialsDown 30s linear infinite;
  }
  /* ===== Trusted logos: vertical slot / cube-like spin ===== */

.logo-slot {
  position: relative;
  width: 160px;
  height: 40px;
  overflow: hidden;
  perspective: 900px;
  transform-style: preserve-3d;
}

/* Track that moves up/down */
.logo-track {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  transform-style: preserve-3d;
  animation: logoSlot 4s ease-in-out infinite;
}

/* Each logo face */
.logo-track span {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  color: #fff;
  font-weight: 600;
  font-size: 1.3rem;
  letter-spacing: 0.04em;
  text-transform: none;
  transform: translateZ(0);
}

/* 3D-ish vertical spin with blur mid-way */
@keyframes logoSlot {
  0% {
    transform: translate3d(0, 0, 0);
    filter: blur(0);
    opacity: 1;
  }
  20% {
    transform: translate3d(0, -50%, 40px);
    filter: blur(3px);
    opacity: 0.8;
  }
  25% {
    transform: translate3d(0, -100%, 0);
    filter: blur(0);
    opacity: 1;
  }
  45% {
    transform: translate3d(0, -100%, 0);
    filter: blur(0);
  }
  65% {
    transform: translate3d(0, -50%, 40px);
    filter: blur(3px);
    opacity: 0.8;
  }
  75% {
    transform: translate3d(0, 0, 0);
    filter: blur(0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 0, 0);
    filter: blur(0);
  }
}

/* Small staggering so logos don’t flip all at once */
.logo-delay-0   { animation-delay: 0s; }
.logo-delay-200 { animation-delay: 0.2s; }
.logo-delay-400 { animation-delay: 0.4s; }
.logo-delay-600 { animation-delay: 0.6s; }

/* === We ship cards: scroll-in + glow === */
.changelog-card {
  opacity: 0;
  transform: translateY(18px);
  transition:
    opacity 0.7s ease-out,
    transform 0.7s ease-out,
    box-shadow 0.4s ease-out,
    border-color 0.4s ease-out,
    background-color 0.4s ease-out;
  box-shadow: 0 0 0 rgba(0,0,0,0);
}

.changelog-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.changelog-card:hover {
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.9),
              0 0 30px rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.25);
}

/* === CTA: particle streaks === */
.cta-shell {
  position: relative;
}

.cta-particles {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 10% 20%, rgba(255,255,255,0.16) 0, transparent 45%),
    radial-gradient(circle at 80% 0%, rgba(255,255,255,0.12) 0, transparent 50%),
    linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.18) 40%, transparent 60%);
  opacity: 0.12;
  transform: translate3d(0,0,0);
  mix-blend-mode: screen;
  pointer-events: none;
  animation: ctaDrift 14s linear infinite;
}

@keyframes ctaDrift {
  0% {
    transform: translate3d(-4%, -4%, 0);
  }
  50% {
    transform: translate3d(4%, 4%, 0);
  }
  100% {
    transform: translate3d(-4%, -4%, 0);
  }
}

/* === Footer logo: 3D hover === */
.footer-logo {
  width: 8rem;
  height: 8rem;
  border-radius: 0.875rem;
  border: 1px solid rgba(255,255,255,0.12);
  overflow: hidden;
  perspective: 900px;
  transform-style: preserve-3d;
}

.footer-logo-inner {
  width: 100%;
  height: 100%;
  transform-origin: center;
  transition:
    transform 0.4s ease-out,
    box-shadow 0.4s ease-out,
    filter 0.4s ease-out;
}

.footer-logo:hover .footer-logo-inner {
  transform: rotateX(10deg) rotateY(-10deg) scale(1.03) translateY(-2px);
  box-shadow: 0 26px 70px rgba(0,0,0,0.9);
  filter: saturate(1.2);
}
  
/* ===== Subtle animated grid band behind sections ===== */

.grid-divider-band {
position: relative;
overflow: hidden;
}

.grid-divider-band::before {
content: "";
position: absolute;
inset: 0;
pointer-events: none;
opacity: 0.28;
mix-blend-mode: screen;
background-image:
repeating-linear-gradient(
to right,
rgba(255, 255, 255, 0.04) 0,
rgba(255, 255, 255, 0.04) 1px,
transparent 1px,
transparent 64px
),
repeating-linear-gradient(
to bottom,
rgba(255, 255, 255, 0.04) 0,
rgba(255, 255, 255, 0.04) 1px,
transparent 1px,
transparent 64px
);
transform: translate3d(0,0,0);
animation: gridDrift 24s linear infinite;
}

@keyframes gridDrift {
0% { transform: translate3d(-32px, 0, 0); }
50% { transform: translate3d(32px, 16px, 0); }
100% { transform: translate3d(-32px, 0, 0); }
}
.footer-watermark {
z-index: 10;
}
  
  </style>
</div>

<header className="sticky z-30 border-white/10 border-b top-0">
<div className="flex pt-5 pr-5 pb-5 pl-5 relative backdrop-blur-md items-center justify-between">

<div className="flex items-center gap-3">
<a className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/59ee738f-e8f2-448b-8db3-ee56f4748818_1600w.png)] bg-cover rounded" href="#" style={{}}></a>
</div>

<nav className="hidden md:flex items-center gap-2">
<a className="px-3 py-1.5 rounded-full text-sm font-medium text-white/70 hover:text-white bg-white/5 hover:bg-white/10 transition" href="#">Pricing</a>
<a className="px-3 py-1.5 rounded-full text-sm font-medium text-white/70 hover:text-white bg-white/5 hover:bg-white/10 transition" href="#">Changelog</a>
<a className="px-3 py-1.5 rounded-full text-sm font-medium text-white/70 hover:text-white bg-white/5 hover:bg-white/10 transition" href="#">Customers</a>
<a className="px-3 py-1.5 rounded-full text-sm font-medium text-white/70 hover:text-white bg-white/5 hover:bg-white/10 transition" href="#">Contact</a>
</nav>

<div className="flex items-center gap-3">
<button className="inline-flex gap-2 hover:bg-white/90 transition text-sm font-semibold text-black tracking-tight bg-white rounded-full pt-2 pr-4 pb-2 pl-4 gap-x-2 gap-y-2 items-center">Get Astria</button>
</div>
</div>
</header>

<section ;"="" className="relative">
<div className="-z-10 overflow-hidden mb-0 absolute top-0 right-0 bottom-0 left-0">
<svg className="absolute inset-0 opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="32" id="grid" patternunits="userSpaceOnUse" width="32">
<path d="M32 0H0V32" fill="none" stroke="white" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect className="" fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4" style={{maskImage: 'linear-gradient(180deg, transparent, black 70%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 70%, black 100%, transparent)'}}>

<div className="flex justify-center">
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/70 ring-1 ring-white/10">
<span className="inline-flex items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300 px-1.5 py-0.5">
<svg className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
            NEW: Orbit — Multi‑Agent Runtime
            <a className="underline decoration-dotted decoration-white/30 underline-offset-2 text-white/80 hover:text-white" href="#">See what’s new</a>
</span>
</div>

<div className="overflow-hidden bg-neutral-950 ring-white/10 ring-1 rounded-3xl mt-8">
<div className="isolate sm:px-10 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20 pt-16 pr-6 pb-14 pl-6 relative"><div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0" data-container-bg="true"><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="PFOu1U4uozSRWA5TSUcD"></div>
</div>

<div className="pointer-events-none absolute inset-0 -z-10">
<img alt="" className="h-full w-full object-cover opacity-[0.15] mix-blend-screen" src="default" style={{}}/>
<svg className="absolute inset-0 opacity-30" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="18" id="dots" patternunits="userSpaceOnUse" width="18">
<circle cx="1.5" cy="1.5" fill="#93c5fd" r="1.5"></circle>
</pattern>
</defs>
<rect fill="url(#dots)" height="100%" width="100%"></rect>
</svg>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60"></div>
</div>

<div className="mx-auto max-w-3xl text-center">
<h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight">
                Turn agent teams into your unfair advantage
              </h1>
<p className="sm:text-lg text-base text-white/70 mt-5">Astria automates the busywork across product, growth, and support. Ship faster, reduce toil, and keep humans in the loop only when it matters.</p>

<div className="flex mt-8 gap-x-3 gap-y-3 items-center justify-center">
<button className="btn-53">
<div className="original">Start Free</div>
<div className="letters">
<span className="">S</span>
<span className="">T</span>
<span className="">A</span>
<span className="">R</span>
<span className="">T</span>
<span className="">F</span>
<span className="">R</span>
<span className="">E</span>
<span className="">E</span>
</div>
</button>
<a className="inline-flex items-center gap-2 sm:text-base hover:text-white hover:bg-white/10 transition text-sm font-medium text-white/80 bg-white/5 rounded-full ring-white/10 ring-1 pt-4 pr-5 pb-4 pl-5 backdrop-blur-md" href="#">
<svg className="lucide lucide-play h-5 w-5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                  See it in action
                </a>
</div>
<div className="mt-5 text-xs text-white/50">
                No credit card • 14‑day trial • Cancel anytime
              </div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 text-center mt-12 gap-x-6 gap-y-6">
<div className="flex flex-col items-center">
<div className="flex items-center gap-2 text-white/80">
<svg className="lucide lucide-check-circle h-4 w-4 text-emerald-300" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-sm font-medium">Teams onboarded</span>
</div>
<div className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight">12,482</div>
</div>
<div className="flex flex-col items-center">
<div className="flex items-center gap-2 text-white/80">
<svg className="lucide lucide-workflow h-4 w-4 text-cyan-300" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
<span className="text-sm font-medium">Tasks automated</span>
</div>
<div className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight">8.6M</div>
</div>
<div className="flex flex-col items-center">
<div className="flex items-center gap-2 text-white/80">
<svg className="lucide lucide-clock lucide-gauge w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="clock" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(165, 180, 252)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm font-medium">Avg. time saved</span>
</div>
<div className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight">37%</div>
</div>
<div className="flex flex-col items-center">
<div className="flex items-center gap-2 text-white/80">
<svg className="lucide lucide-shield-check h-4 w-4 text-fuchsia-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm font-medium">Uptime</span>
</div>
<div className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight">99.985%</div>
</div>
</div>
</div>
</div>

</div></section><div className="premium-divider-horizontal"></div>
<section className="pt-20 pb-20 relative">
<div className="absolute inset-0 -z-10 overflow-hidden">
<svg className="absolute inset-0 opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="32" id="grid" patternunits="userSpaceOnUse" width="32">
<path d="M32 0H0V32" fill="none" stroke="white" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">


<div className="relative mt-8 overflow-hidden rounded-3xl ring-1 ring-white/10 bg-neutral-950" data-module="feature-video">

<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/50">
</div>



</div>
<div className="relative">



<div className="absolute top-0 bottom-0 left-0 w-[1px] bg-[url('/grid-line.svg')] opacity-20" style={{}}></div>

<div className="absolute top-0 bottom-0 right-0 w-[1px] bg-[url('/grid-line.svg')] opacity-20" style={{}}></div>
</div>

<section className="mt-16">
<div className="sm:px-6 lg:px-8 max-w-6xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
<div className="grid gap-8 lg:grid-cols-2 relative">

<article className="flex flex-col overflow-hidden bg-black/60 border-white/10 border pt-10 pr-8 pb-8 pl-8 relative justify-between">
<div className="">

<div className="inline-flex items-center gap-2 text-sm text-white/60 mb-4">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 border border-white/10">
<span className="h-2.5 w-2.5 border border-white/50"></span>
</span>
<span className="">Adaptive Flow Engine</span>
</div>

<h3 className="sm:text-3xl text-2xl font-semibold text-white tracking-tight mb-3">Deploy Intelligent Apps Faster Than Ever.</h3>

<p className="sm:text-base text-sm text-white/60 max-w-md">Deliver intelligent, context-aware experiences that evolve with user behavior. Our adaptive pipeline architecture responds in real time, automatically optimizing workflows based on changing demands and usage patterns.</p>
</div>

<div className="mt-10 relative h-64 flex items-center justify-center">
<svg className="absolute inset-0 w-full h-full" viewbox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">

<defs>
<pattern height="20" id="grid-left" patternunits="userSpaceOnUse" width="20">
<path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect className="" fill="url(#grid-left)" height="300" opacity="0.3" width="400"></rect>

<circle cx="200" cy="150" fill="rgba(217,70,239,0.2)" r="25" stroke="rgb(217,70,239)" strokeWidth="2">
<animate attributename="r" dur="2s" repeatcount="indefinite" values="25;28;25"></animate>
</circle>
<circle className="" cx="200" cy="150" fill="rgb(217,70,239)" opacity="0.8" r="12"></circle>

<line opacity="0.6" stroke="url(#pulse-gradient-1)" strokeWidth="2" x1="200" x2="100" y1="150" y2="80"></line>
<line opacity="0.6" stroke="url(#pulse-gradient-1)" strokeWidth="2" style={{animationDelay: '0.5s'}} x1="200" x2="300" y1="150" y2="80"></line>
<line opacity="0.6" stroke="url(#pulse-gradient-1)" strokeWidth="2" style={{animationDelay: '1s'}} x1="200" x2="100" y1="150" y2="220"></line>
<line opacity="0.6" stroke="url(#pulse-gradient-1)" strokeWidth="2" style={{animationDelay: '1.5s'}} x1="200" x2="300" y1="150" y2="220"></line>

<circle cx="100" cy="80" fill="rgba(139,92,246,0.2)" r="15" stroke="rgb(139,92,246)" strokeWidth="1.5">
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.4;1;0.4"></animate>
</circle>
<circle className="" cx="300" cy="80" fill="rgba(56,189,248,0.2)" r="15" stroke="rgb(56,189,248)" strokeWidth="1.5">
<animate attributename="opacity" begin="0.5s" dur="2s" repeatcount="indefinite" values="0.4;1;0.4"></animate>
</circle>
<circle className="" cx="100" cy="220" fill="rgba(52,211,153(52,211,153)" r="15" strokeWidth="1.5">
<animate attributename="opacity" begin="1s" dur="2s" repeatcount="indefinite" values="0.4;1;0.4"></animate>
</circle>
<circle className="" cx="300" cy="220" fill="rgba(251,146,60,0.2)" r="15" stroke="rgb(251,146,60)" strokeWidth="1.5">
<animate attributename="opacity" begin="1.5s" dur="2s" repeatcount="indefinite" values="0.4;1;0.4"></animate>
</circle>

<circle cx="150" cy="100" fill="rgb(217,70,239)" opacity="0.6" r="2">
</circle>
<circle cx="250" cy="180" fill="rgb(139,92,246)" opacity="0.6" r="2">
</circle>
</svg>
</div>
</article>

<article className="flex flex-col lg:-ml-px overflow-hidden bg-black/60 border-white/10 border pt-10 pr-8 pb-8 pl-8 relative justify-between">
<div className="">

<div className="inline-flex items-center gap-2 text-sm text-white/60 mb-4">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 border border-white/10">
<span className="h-2 w-3 border-t border-r border-white/50 -rotate-12 translate-y-[1px]"></span>
</span>
<span className="">Vector Compute Layer</span>
</div>

<h3 className="sm:text-3xl text-2xl font-semibold text-white tracking-tight mb-3">Precision Built For Massive Scale.</h3>

<p className="sm:text-base text-sm text-white/60 max-w-md">Run high-performance applications with real-time vector matching engineered for accuracy, reliability, and speed.</p>
</div>

<div className="mt-10 relative h-64 flex items-center justify-center">
<svg className="absolute inset-0 w-full h-full" viewbox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="12" id="grid-right-vector" patternunits="userSpaceOnUse" width="12">
<circle cx="1" cy="1" fill="rgba(56,189,248,0.15)" r="0.8"></circle>
</pattern>
</defs>
<rect className="" fill="url(#grid-right-vector)" height="300" opacity="0.5" width="400"></rect>

<circle cx="200" cy="150" fill="rgba(217,70,239,0.2)" r="35" stroke="rgb(217,70,239)" strokeWidth="2">
<animate attributename="r" dur="2.5s" repeatcount="indefinite" values="35;38;35"></animate>
</circle>
<circle cx="200" cy="150" fill="rgb(217,70,239)" opacity="0.9" r="18">
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.9;1;0.9"></animate>
</circle>

<line opacity="0.7" stroke="url(#vector-gradient-1)" strokeWidth="2.5" x1="200" x2="280" y1="150" y2="150">
<animate attributename="x2" dur="2s" repeatcount="indefinite" values="280;290;280"></animate>
</line>
<line opacity="0.7" stroke="url(#vector-gradient-1)" strokeWidth="2.5" x1="200" x2="120" y1="150" y2="150">
<animate attributename="x2" begin="0.3s" dur="2s" repeatcount="indefinite" values="120;110;120"></animate>
</line>
<line opacity="0.7" stroke="url(#vector-gradient-2)" strokeWidth="2.5" x1="200" x2="200" y1="150" y2="230">
<animate attributename="y2" begin="0.6s" dur="2s" repeatcount="indefinite" values="230;240;230"></animate>
</line>
<line opacity="0.7" stroke="url(#vector-gradient-2)" strokeWidth="2.5" x1="200" x2="200" y1="150" y2="70">
<animate attributename="y2" begin="0.9s" dur="2s" repeatcount="indefinite" values="70;60;70"></animate>
</line>

<line opacity="0.6" stroke="rgb(139,92,246)" strokeWidth="2" x1="200" x2="260" y1="150" y2="90">
<animate attributename="opacity" dur="2.5s" repeatcount="indefinite" values="0.6;0.9;0.6"></animate>
</line>
<line className="" opacity="0.6" stroke="rgb(56,189,248)" strokeWidth="2" x1="200" x2="140" y1="150" y2="210">
<animate attributename="opacity" begin="0.5s" dur="2.5s" repeatcount="indefinite" values="0.6;0.9;0.6"></animate>
</line>
<line opacity="0.6" stroke="rgb(217,70,239)" strokeWidth="2" x1="200" x2="260" y1="150" y2="210">
<animate attributename="opacity" begin="1s" dur="2.5s" repeatcount="indefinite" values="0.6;0.9;0.6"></animate>
</line>
<line opacity="0.6" stroke="rgb(56,189,248)" strokeWidth="2" x1="200" x2="140" y1="150" y2="90">
<animate attributename="opacity" begin="1.5s" dur="2.5s" repeatcount="indefinite" values="0.6;0.9;0.6"></animate>
</line>

<circle cx="280" cy="150" fill="rgba(139,92,246,0.3)" r="8" stroke="rgb(139,92,246)" strokeWidth="1.5">
<animate attributename="r" dur="2s" repeatcount="indefinite" values="8;10;8"></animate>
</circle>
<circle cx="120" cy="150" fill="rgba(56,189,248,0.3)" r="8" stroke="rgb(56,189,248)" strokeWidth="1.5">
<animate attributename="r" begin="0.3s" dur="2s" repeatcount="indefinite" values="8;10;8"></animate>
</circle>
<circle cx="200" cy="230" fill="rgba(217,70,239,0.3)" r="8" stroke="rgb(217,70,239)" strokeWidth="1.5">
<animate attributename="r" begin="0.6s" dur="2s" repeatcount="indefinite" values="8;10;8"></animate>
</circle>
<circle cx="200" cy="70" fill="rgba(56,189,248,0.3)" r="8" stroke="rgb(56,189,248)" strokeWidth="1.5">
<animate attributename="r" begin="0.9s" dur="2s" repeatcount="indefinite" values="8;10;8"></animate>
</circle>

<circle cx="240" cy="120" fill="rgb(139,92,246)" opacity="0.8" r="3">
<animate attributename="cx" dur="3s" repeatcount="indefinite" values="240;200;240"></animate>
<animate attributename="cy" dur="3s" repeatcount="indefinite" values="120;150;120"></animate>
</circle>
<circle cx="160" cy="180" fill="rgb(56,189,248)" opacity="0.8" r="3">
<animate attributename="cx" begin="0.5s" dur="3s" repeatcount="indefinite" values="160;200;160"></animate>
<animate attributename="cy" begin="0.5s" dur="3s" repeatcount="indefinite" values="180;150;180"></animate>
</circle>
<circle cx="220" cy="190" fill="rgb(217,70,239)" opacity="0.8" r="3">
<animate attributename="cx" begin="1s" dur="3s" repeatcount="indefinite" values="220;200;220"></animate>
<animate attributename="cy" begin="1s" dur="3s" repeatcount="indefinite" values="190;150;190"></animate>
</circle>
<circle cx="180" cy="110" fill="rgb(56,189,248)" opacity="0.8" r="3">
<animate attributename="cx" begin="1.5s" dur="3s" repeatcount="indefinite" values="180;200;180"></animate>
<animate attributename="cy" begin="1.5s" dur="3s" repeatcount="indefinite" values="110;150;110"></animate>
</circle>

<circle cx="200" cy="150" fill="none" r="50" stroke="rgba(217,70,239,0.3)" strokeWidth="1">
<animate attributename="r" dur="3s" repeatcount="indefinite" values="50;65;50"></animate>
<animate attributename="opacity" dur="3s" repeatcount="indefinite" values="0.3;0;0.3"></animate>
</circle>
<circle className="" cx="200" cy="150" fill="none" r="70" stroke="rgba(56,189,248,0.3)" strokeWidth="1">
<animate attributename="r" begin="0.5s" dur="3s" repeatcount="indefinite" values="70;85;70"></animate>
<animate attributename="opacity" begin="0.5s" dur="3s" repeatcount="indefinite" values="0.3;0;0.3"></animate>
</circle>
</svg>
</div>
</article>

<div className="hidden lg:block absolute inset-y-4 left-1/2 w-px bg-white/5"></div>
</div>
</div>
</section>

</div>
</section>

<section className="mt-24">
<div className="sm:px-6 lg:px-8 max-w-6xl mr-auto ml-auto pr-4 pl-4">
<div className="border border-white/10 bg-black">

<div className="grid grid-cols-3 divide-x divide-white/10">
<div className=""></div>
<div className="flex items-center justify-center py-10 px-6">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white text-center">
            Move faster. Think bigger.
          </h2>
</div>
<div className=""></div>
</div>

<div className="border-t border-white/10">
<div className="grid lg:grid-cols-2 lg:divide-x lg:divide-white/10">

<div className="px-8 py-12 flex items-center">
<div className="">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-4">
                Track how your agents use tokens, in real time.
              </h3>
<p className="sm:text-base text-sm text-white/60 max-w-md">Gain full visibility into prompt, completion, and tool calls for every Astria agent. See token usage, latency, and outcomes at a glance while everything runs live in production.</p>
</div>
</div>

<div className="px-8 py-12 flex items-center justify-center">

<div className="group w-full max-w-md aspect-[4/3] rounded-md border border-white/10 bg-gradient-to-b from-neutral-950 to-black relative overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)] opacity-40">
</div>

<div className="bg-gradient-to-tr from-fuchsia-500/25 via-violet-500/25 to-sky-400/25 h-44 border-white/10 border rounded-3xl absolute top-16 right-20 left-4 shadow-[0_30px_80px_rgba(0,0,0,0.75)] -rotate-12 transform-gpu transition-transform duration-500 ease-out group-hover:-rotate-[16deg] group-hover:-translate-y-1"></div>

<div className="bg-gradient-to-tr from-fuchsia-500/35 via-violet-500/35 to-sky-400/35 h-44 border-white/10 border rounded-3xl absolute top-16 right-14 left-6 shadow-[0_32px_85px_rgba(0,0,0,0.85)] -rotate-10 transform-gpu transition-transform duration-500 ease-out group-hover:-rotate-[13deg] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"></div>

<div className="flex flex-col bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-sky-400 h-44 border-white/20 border rounded-3xl pr-6 pl-6 absolute top-12 right-8 left-10 shadow-[0_36px_95px_rgba(0,0,0,0.95)] -rotate-8 justify-center transform-gpu transition-transform duration-500 ease-out group-hover:-rotate-[5deg] group-hover:-translate-y-2 group-hover:translate-x-1">
<div className="text-xs text-white/70 mb-1">
                o3 model · live stream
              </div>
<div className="text-2xl font-semibold text-white mb-1">
                53 tokens used
              </div>
<div className="text-[11px] text-white/60">
                Updated every call as Astria routes traffic.
              </div>
</div>

<div className="-translate-x-1/2 bg-fuchsia-500/40 opacity-80 w-44 h-8 rounded-full absolute bottom-16 left-1/2 blur-xl transform-gpu transition-transform duration-500 ease-out group-hover:scale-110 group-hover:translate-y-1"></div>
</div>
</div>
</div>

<div className="border-t border-white/10">
<div className="grid lg:grid-cols-2 lg:divide-x lg:divide-white/10">

<div className="px-8 py-12 flex items-center">
<div className="">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-4">
                Launch agents in a sandboxed playground.
              </h3>
<p className="sm:text-base text-sm text-white/60 max-w-md">Prototype new workflows, test prompts, and fine-tune behavior in a safe environment. Ship with confidence by promoting the exact same Astria flows from sandbox to production.</p>
</div>
</div>

<div className="px-8 py-12 flex items-center justify-center">
<div className="w-full max-w-md aspect-[4/3] rounded-md border border-white/10 bg-gradient-to-b from-neutral-950 to-black relative overflow-hidden" style={{transformStyle: 'preserve-3d'}}>

<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_top,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 translate-y-6" style={{transform: 'perspective(1200px) rotateX(65deg) translateY(40px)', transformOrigin: 'center bottom'}}>
</div>

<div className="bg-black/85 w-[78%] border-white/15 border rounded-2xl px-6 py-5 absolute top-32 left-1/2 shadow-[0_30px_80px_rgba(0,0,0,0.95)]" style={{transform: 'translateX(-50%) translateY(-40%)'}}>
<div className="text-[11px] text-emerald-400 font-mono mb-2">
                  // Mirage sandbox example
                </div>
<div className="overflow-hidden h-[120px] relative">
<pre className="code-scroll text-[11px] leading-relaxed text-white/80 font-mono whitespace-pre absolute w-full">                const agent = mirage.agent({
                  name: "researcher",
                  tools: [browser, docs],
                });
                
                const result = await agent.run({
                  prompt: "Summarize today's updates",
                });
                  </pre>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div></section>

<section className="mt-24">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="border border-white/10 bg-black">

<div className="grid grid-cols-3 divide-x divide-white/10">
<div className=""></div>
<div className="flex items-center justify-center py-10 px-6">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white text-center">
            Turn decisions into actions.
          </h2>
</div>
<div className=""></div>
</div>

<div className="grid md:grid-cols-2 border-t border-white/10">

<article className="px-10 py-14 border-b border-white/10 md:border-b md:border-r flex flex-col gap-4">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/25">

<svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24">
<polyline points="13 2 3 14 11 14 11 22 21 10 13 10"></polyline>
</svg>
</div>
<div className="">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-2">
              Scale agents at lightning speed.
            </h3>
<p className="sm:text-base text-sm text-white/60 max-w-md">Spin up Astria agents in minutes with reusable tools and flows, then roll them out across teams without touching your core stack.</p>
</div>
</article>

<article className="px-10 py-14 border-b border-white/10 md:border-b flex flex-col gap-4">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/25">

<svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24">
<rect height="18" rx="2" ry="2" width="16" x="4" y="3"></rect>
<line x1="8" x2="16" y1="8" y2="8"></line>
<line x1="8" x2="16" y1="12" y2="12"></line>
<line x1="8" x2="13" y1="16" y2="16"></line>
</svg>
</div>
<div className="">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-2">
              Log every token, prompt, and response.
            </h3>
<p className="sm:text-base text-sm text-white/60 max-w-md">Capture structured logs from Astria agents to debug behaviors, monitor costs, and understand exactly how each decision was made.</p>
</div>
</article>

<article className="px-10 py-14 border-b border-white/10 md:border-b-0 md:border-r flex flex-col gap-4">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/25">

<svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24">
<rect height="7" width="7" x="3" y="3"></rect>
<rect height="7" width="7" x="14" y="3"></rect>
<rect height="7" width="7" x="3" y="14"></rect>
<rect height="7" width="7" x="14" y="14"></rect>
</svg>
</div>
<div className="">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-2">
              Plug into your stack in minutes.
            </h3>
<p className="sm:text-base text-sm text-white/60 max-w-md">Use simple APIs and webhooks to connect Astria to your existing apps, queues, and data pipelines with minimal engineering overhead.</p>
</div>
</article>

<article className="flex flex-col gap-4 pt-14 pr-10 pb-14 pl-10 gap-x-4 gap-y-4">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/25">

<svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24">
<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6A8.38 8.38 0 0 1 12.5 3h.5a8.49 8.49 0 0 1 8 8.5Z"></path>
<line x1="8" x2="16" y1="11" y2="11"></line>
<line x1="8" x2="13" y1="14" y2="14"></line>
</svg>
</div>
<div className="">
<h3 className="sm:text-2xl text-xl font-semibold text-white tracking-tight mb-2">
              Let agents talk to users safely.
            </h3>
<p className="sm:text-base text-sm text-white/60 max-w-md">Add guardrails, reviews, and policies around every Astria interaction so agents can respond in real time while staying on-brand and on-policy.</p>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="mt-32" id="roi-section">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="border border-white/10 bg-black">

<div className="grid md:grid-cols-2 border-b border-white/10">

<div className="px-10 py-16 flex flex-col justify-center">
<h3 className="text-6xl sm:text-7xl font-semibold tracking-tight text-white flex items-baseline gap-1">
<span className="stat-counter" data-counter="142">0</span>
<span>%</span>
</h3>
<p className="sm:text-base leading-relaxed text-sm text-white/70 max-w-xs mt-3">increase in workflow efficiency after deploying Astria AI agents.</p>
<div className="mt-10">
<span className="text-2xl font-semibold tracking-widest text-white">
              NOVA TECH
            </span>
</div>
</div>

<div className="px-10 py-12 flex items-center justify-center">
<div className="relative w-full max-w-lg rounded-xl overflow-hidden aspect-video border border-white/10 bg-black">
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="">

<source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4"/>
</video>

<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2">

<div className="px-10 py-16 flex flex-col justify-center">
<h3 className="text-6xl sm:text-7xl font-semibold tracking-tight text-white flex items-baseline gap-1">
<span className="stat-counter" data-counter="118">0</span>
<span className="">%</span>
</h3>
<p className="sm:text-base leading-relaxed text-sm text-white/70 max-w-xs mt-3">reduction in operational overhead after integrating autonomous Astria workflows.</p>
<div className="mt-10">
<span className="text-2xl font-semibold tracking-widest text-white">
              ASTRO LABS
            </span>
</div>
</div>

<div className="px-10 py-12 flex items-center justify-center">
<div className="relative w-full max-w-lg rounded-xl overflow-hidden aspect-video border border-white/10 bg-black">
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="">

<source src="https://cdn.midjourney.com/video/6bdb372e-b3bb-4355-b723-b3bd545c1707/0.mp4" type="video/mp4"/>
</video>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-32">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="border border-white/10 bg-black">

<div className="py-10 border-b border-white/10">
<h2 className="text-center text-base sm:text-lg font-medium text-white/80">
          Trusted by teams at
        </h2>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">

<div className="flex items-center justify-center py-12">
<div className="logo-slot">
<div className="logo-track logo-delay-0">
<span>Ephicient®</span>
<span>BEEM</span>
</div>
</div>
</div>

<div className="flex items-center justify-center py-12">
<div className="logo-slot">
<div className="logo-track logo-delay-200">
<span>Pipelinx.co</span>
<span>2020INC</span>
</div>
</div>
</div>

<div className="flex items-center justify-center py-12">
<div className="logo-slot">
<div className="logo-track logo-delay-400">
<span>OE</span>
<span>Workport</span>
</div>
</div>
</div>

<div className="flex items-center justify-center py-12">
<div className="logo-slot">
<div className="logo-track logo-delay-600">
<span>invarion</span>
<span>Ephicient®</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-32">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-black border-white/10 border pt-16 pb-16">

<div className="text-center max-w-2xl mx-auto">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
          What people say
        </h2>
<p className="sm:text-base text-sm text-white/60 mt-4">Teams use Astria to launch agents faster, ship with more confidence, and spend less time babysitting prompts.</p>
</div>

<div className="grid overflow-hidden md:grid-cols-2 md:gap-10 mt-12 pt-12 pr-10 pl-10 gap-x-6 gap-y-6" style={{maskImage: 'linear-gradient(180deg, transparent, black 45%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 45%, black 80%, transparent)'}}>

<div className="relative h-[420px] overflow-hidden">
<div className="space-y-4 animate-testimonials-up">

<article className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.8)]">
<p className="text-sm text-white/80">“Astria handles the orchestration so our agents feel like one cohesive product instead of a bunch of scripts. It freed up at least a day a week for our team.”</p>
<div className="mt-4 flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/70">
                  RA
                </div>
<div className="">
<p className="text-sm font-medium text-white">Rania Alvarez</p>
<p className="text-xs text-white/50">Head of Product, Nova Tech</p>
</div>
</div>
</article>

<article className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.8)]">
<p className="text-sm text-white/80">“We wired Astria into our stack in a weekend. Every support ticket now gets a first pass from an agent, with full logs when a human needs to jump in.”</p>
<div className="mt-4 flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/70">
                  MK
                </div>
<div>
<p className="text-sm font-medium text-white">Michael Kim</p>
<p className="text-xs text-white/50">CX Lead, Astro Labs</p>
</div>
</div>
</article>

<article className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.8)]">
<p className="text-sm text-white/80">
                “The observability is the killer feature. We see which tools agents used,
                how many tokens they spent, and why a path was chosen.”
              </p>
<div className="mt-4 flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/70">
                  JL
                </div>
<div>
<p className="text-sm font-medium text-white">Jamie Liu</p>
<p className="text-xs text-white/50">Engineering Manager, Orbit Systems</p>
</div>
</div>
</article>

<article className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.8)]">
<p className="text-sm text-white/80">
                “Mirage handles the orchestration so our agents feel like one cohesive product
                instead of a bunch of scripts. It freed up at least a day a week for our team.”
              </p>
<div className="mt-4 flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/70">
                  RA
                </div>
<div>
<p className="text-sm font-medium text-white">Rania Alvarez</p>
<p className="text-xs text-white/50">Head of Product, Nova Tech</p>
</div>
</div>
</article>
</div>
</div>

<div className="relative h-[420px] overflow-hidden">
<div className="space-y-4 animate-testimonials-down">

<article className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.8)]">
<p className="text-sm text-white/80">“We prototype new agents in the Astria sandbox and promote them straight to production. No more copy-pasting prompts between tools.”</p>
<div className="mt-4 flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/70">
                  ES
                </div>
<div className="">
<p className="text-sm font-medium text-white">Elena Santos</p>
<p className="text-xs text-white/50">Founder, Lumen Studio</p>
</div>
</div>
</article>

<article className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.8)]">
<p className="text-sm text-white/80">“Our ops team finally trusts the AI layer. Astria gives us guardrails, approvals, and a clear audit trail for every decision.”</p>
<div className="mt-4 flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/70">
                  HC
                </div>
<div className="">
<p className="text-sm font-medium text-white">Hugo Chen</p>
<p className="text-xs text-white/50">VP Operations, Beacon</p>
</div>
</div>
</article>

<article className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.8)]">
<p className="text-sm text-white/80">“Astria made a small team feel much bigger. Agents handle the repetitive work so we can stay focused on product.”</p>
<div className="mt-4 flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/70">
                  LD
                </div>
<div>
<p className="text-sm font-medium text-white">Lena Dorsey</p>
<p className="text-xs text-white/50">CTO, Northwind</p>
</div>
</div>
</article>

<article className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.8)]">
<p className="text-sm text-white/80">
                “We prototype new agents in the Mirage sandbox and promote them straight
                to production. No more copy-pasting prompts between tools.”
              </p>
<div className="mt-4 flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/70">
                  ES
                </div>
<div>
<p className="text-sm font-medium text-white">Elena Santos</p>
<p className="text-xs text-white/50">Founder, Lumen Studio</p>
</div>
</div>
</article>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-32">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="border border-white/10 bg-black grid-divider-band">

<div className="grid grid-cols-3 border-b border-white/10">
<div className=""></div>
<div className="flex pt-12 pr-4 pb-12 pl-4 items-center justify-center">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
            We ship, a lot.
          </h2>
</div>
<div className="flex pt-12 pr-4 pb-12 pl-4 items-center justify-center">
<a className="inline-flex items-center bg-white text-black text-sm font-semibold rounded-full px-6 py-2 shadow hover:bg-white/90 transition" href="#">
            View all updates
          </a>
</div>
</div>

<div className="grid md:grid-cols-3 pt-16 pr-8 pb-16 pl-8 gap-x-8 gap-y-8">

<article className="changelog-card border border-white/10 bg-black rounded-xl overflow-hidden hover:bg-white/[0.03] transition">
<div className="p-6 pb-0">
<img className="rounded-lg border border-white/10" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=600"/>
</div>
<div className="p-6">
<p className="text-xs text-white/40 mb-3">MAY 6, 2025</p>
<h3 className="text-lg font-semibold text-white mb-2">
              Multi-Flow Agents — Now in Beta
            </h3>
<p className="text-white/60 text-sm">
              Build agents that coordinate multiple steps at once, with fully automated routing.
            </p>
</div>
</article>

<article className="changelog-card border border-white/10 bg-black rounded-xl overflow-hidden hover:bg-white/[0.03] transition">
<div className="p-6 pb-0">
<img className="rounded-lg border border-white/10 object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/286d3fce-adff-4983-993c-1096523889dc_800w.jpg"/>
</div>
<div className="p-6">
<p className="text-xs text-white/40 mb-3">APR 29, 2025</p>
<h3 className="text-lg font-semibold text-white mb-2">
              High-Speed Execution Mode
            </h3>
<p className="text-white/60 text-sm">
              Dramatically reduce inference delays for real-time interactions and fast workflows.
            </p>
</div>
</article>

<article className="changelog-card border border-white/10 bg-black rounded-xl overflow-hidden hover:bg-white/[0.03] transition">
<div className="p-6 pb-0">
<img className="object-cover bg-center border-white/10 border rounded-lg w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6ee18476-e920-4c46-b39d-239b9b00604b_800w.webp" style={{}}/>
</div>
<div className="p-6">
<p className="text-xs text-white/40 mb-3">APR 1, 2025</p>
<h3 className="text-lg font-semibold text-white mb-2">
              Code Runner — Execute Python in-flow
            </h3>
<p className="text-white/60 text-sm">
              Run Python snippets inside your agent workflows without extra infrastructure.
            </p>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="mt-32">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="overflow-hidden cta-shell grid-divider-band bg-black bg-cover bg-center border-white/10 border pt-28 pb-28 relative bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cee36f3-48bc-4eca-9282-2f402b9cde5d_1600w.webp)]" style={{}}>

<div className="cta-particles pointer-events-none"></div>

<div className="relative text-center">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white max-w-3xl mx-auto">
          Start building intelligent workflows  
          <span className="block">in minutes.</span>
</h2>
<a className="mt-8 inline-flex items-center bg-white text-black text-lg font-semibold rounded-full px-8 py-3 shadow hover:bg-white/90 transition" href="#">
          Get Started
        </a>
</div>
</div>
</div>
</section>
<footer className="bg-black border-white/10 border-t mt-32">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="border-x border-white/10">
<div className="grid md:grid-cols-3 divide-x divide-white/10">

<div className="min-h-[230px]">
<div className="bg-center w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/12c1c130-5c0b-4615-9155-5e3f1df37789_800w.webp)] bg-cover"></div>
</div>

<div className="flex items-center justify-center py-10">
<nav className="space-y-3 text-sm text-white/80">
<a className="block hover:text-white transition" href="#">Pricing</a>
<a className="block hover:text-white transition" href="#">Changelog</a>
<a className="block hover:text-white transition" href="#">Customers</a>
<a className="block hover:text-white transition" href="#">Contact</a>
</nav>
</div>

<div className="flex flex-col md:items-start pt-10 pr-6 pb-10 pl-6 gap-x-4 gap-y-4 items-center justify-center">
<p className="text-sm font-medium text-white">hi@astria.com</p>
<div className="flex items-center gap-4 text-xl text-white/80">

<svg fill="none" height="24" viewbox="0 0 25 24" width="25" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_5602_16557)">
<path d="M19.8878 19.0417H16.9245V14.4C16.9245 13.2933 16.9045 11.8683 15.3828 11.8683C13.8395 11.8683 13.6028 13.075 13.6028 14.3183V19.0417H10.6395V9.49666H13.4845V10.8017H13.5245C14.1045 9.81166 15.1845 9.21833 16.3312 9.26C19.3345 9.26 19.8895 11.235 19.8895 13.8067L19.8878 19.04V19.0417ZM7.29618 8.19166C6.84097 8.18948 6.405 8.00779 6.08296 7.68606C5.76092 7.36433 5.5788 6.92854 5.57618 6.47333C5.57618 5.53 6.35284 4.75333 7.29618 4.75333C8.23951 4.75333 9.01451 5.53 9.01618 6.47333C9.01618 7.41666 8.23951 8.19166 7.29618 8.19166ZM8.77784 19.0417H5.81118V9.49666H8.77784V19.0417ZM21.3628 1.99999H4.32118C3.93476 1.99775 3.56307 2.14809 3.28688 2.41835C3.01069 2.68862 2.85232 3.05695 2.84618 3.44333V20.5567C2.85232 20.943 3.01069 21.3114 3.28688 21.5816C3.56307 21.8519 3.93476 22.0022 4.32118 22H21.3645C21.7518 22.0031 22.1247 21.8533 22.4022 21.583C22.6796 21.3128 22.8392 20.9439 22.8462 20.5567V3.44166C22.8392 3.05471 22.6795 2.68621 22.4019 2.41648C22.1244 2.14674 21.7515 1.99764 21.3645 2.00166L21.3628 1.99999Z" fill="currentColor"></path>
</g>
<defs>
</defs>
</svg>

<svg fill="none" height="24" viewbox="0 0 25 24" width="25" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0324 10.0936L21.3178 1.625H19.5914L13.2655 8.9782L8.21307 1.625H2.38567L10.026 12.7443L2.38567 21.625H4.11216L10.7924 13.8598L16.1282 21.625H21.9556L14.032 10.0936H14.0324ZM11.6678 12.8423L10.8936 11.7351L4.73424 2.92468H7.38603L12.3567 10.0349L13.1309 11.1422L19.5922 20.3844H16.9404L11.6678 12.8427V12.8423Z" fill="currentColor"></path>
</svg>

<svg fill="none" height="24" viewbox="0 0 25 24" width="25" xmlns="http://www.w3.org/2000/svg">
<path d="M19.7247 22H5.04467C3.57467 22 2.38467 20.81 2.38467 19.34V4.66C2.38467 3.19 3.57467 2 5.04467 2H19.7147C21.1947 2 22.3847 3.19 22.3847 4.66V19.33C22.3847 20.81 21.1947 22 19.7247 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M16.3847 12C16.3847 14.21 14.5947 16 12.3847 16C10.1747 16 8.38467 14.21 8.38467 12C8.38467 9.79 10.1747 8 12.3847 8C14.5947 8 16.3847 9.79 16.3847 12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M19.3847 5.5C19.3847 5.78 19.1647 6 18.8847 6C18.6047 6 18.3847 5.78 18.3847 5.5C18.3847 5.22 18.6047 5 18.8847 5C19.1647 5 19.3847 5.22 19.3847 5.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
</svg>
</div>
<p className="text-xs text-white/40 mt-2">© 2025 Mirage</p>
</div>
</div>
</div>
</div>

<div className="flex overflow-hidden sm:h-40 mt-20 mr-0 ml-0 relative items-end justify-center" style={{maskImage: 'linear-gradient(180deg, transparent, black 45%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 45%, black 100%, transparent)'}}>

<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/95 to-transparent"></div>
<p className="text-[clamp(4rem,18vw,10rem)] leading-none font-semibold text-white/10 tracking-[0.35em] text-center pt-6 pr-6 pb-6 pl-6 relative">ASTRIA</p>
</div>
</footer>
<div className="premium-divider-horizontal"></div><div className="premium-divider-horizontal"></div>


<div className="premium-divider-vertical left"></div><div className="premium-divider-vertical right"></div>




    </>
  );
}
