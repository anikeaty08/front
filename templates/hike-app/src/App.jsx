import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



/*
Sequence animation on scroll when visible. Requires Animation Keyframe. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll
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



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


      // Re-initialize lucide icons for new elements
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    


      (function () {
        const slides = Array.from(document.querySelectorAll('[data-testimonial-slide]'));
        if (!slides.length) return;

        const total = slides.length;
        const totalEl = document.getElementById('t-total');
        const currentEl = document.getElementById('t-current');
        const prevBtn = document.getElementById('t-prev');
        const nextBtn = document.getElementById('t-next');

        let index = 0;
        let timer;

        totalEl.textContent = String(total).padStart(2, '0');

        function show(i) {
          slides.forEach((s, idx) => s.classList.toggle('hidden', idx !== i));
          currentEl.textContent = String(i + 1).padStart(2, '0');
          index = i;
        }

        function next() {
          show((index + 1) % total);
        }

        function prev() {
          show((index - 1 + total) % total);
        }

        function startAuto() {
          stopAuto();
          timer = setInterval(next, 8000);
        }

        function stopAuto() {
          if (timer) clearInterval(timer);
        }

        prevBtn?.addEventListener('click', () => { prev(); startAuto(); });
        nextBtn?.addEventListener('click', () => { next(); startAuto(); });

        document.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowRight') { next(); startAuto(); }
          if (e.key === 'ArrowLeft') { prev(); startAuto(); }
        });

        const section = prevBtn?.closest('section');
        section?.addEventListener('mouseenter', stopAuto);
        section?.addEventListener('mouseleave', startAuto);

        show(0);
        startAuto();

        // render icons for newly added nodes
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
          window.lucide.createIcons();
        }
      })();
    


      // Mobile menu toggle
      const mobileMenuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');

      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });

      // Initialize lucide icons
      lucide.createIcons();

      // Subtle parallax for phones cluster
      const container = document.getElementById('phones');
      const cards = container.querySelectorAll('.absolute > .sm\\:w-72');

      function parallax(e) {
        const rect = container.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        cards.forEach((card, idx) => {
          const depth = (idx + 1) * 3;
          card.style.transform = `translate3d(${x * depth * 6}px, ${y * depth * 6}px, 0)`;
        });
      }

      container.addEventListener('mousemove', parallax);
      container.addEventListener('mouseleave', () => {
        cards.forEach(card => (card.style.transform = 'translate3d(0,0,0)'));
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" style="mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent); -webkit-mask-image:
linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);">
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="yaha7Bz5f3cRBAa5js9K"></div>

</div>
<div className="" id="wrapper">

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
          inset: 0 0 auto 0;
          height: 20%;
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
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 1) 12.5%,
              rgba(0, 0, 0, 1) 25%,
              rgba(0, 0, 0, 0) 37.5%);
        }

        .gradient-blur>div:nth-of-type(1) {
          z-index: 2;
          backdrop-filter: blur(1px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 12.5%,
              rgba(0, 0, 0, 1) 25%,
              rgba(0, 0, 0, 1) 37.5%,
              rgba(0, 0, 0, 0) 50%);
        }

        .gradient-blur>div:nth-of-type(2) {
          z-index: 3;
          backdrop-filter: blur(2px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 25%,
              rgba(0, 0, 0, 1) 37.5%,
              rgba(0, 0, 0, 1) 50%,
              rgba(0, 0, 0, 0) 62.5%);
        }

        .gradient-blur>div:nth-of-type(3) {
          z-index: 4;
          backdrop-filter: blur(4px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 37.5%,
              rgba(0, 0, 0, 1) 50%,
              rgba(0, 0, 0, 1) 62.5%,
              rgba(0, 0, 0, 0) 75%);
        }

        .gradient-blur>div:nth-of-type(4) {
          z-index: 5;
          backdrop-filter: blur(8px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 50%,
              rgba(0, 0, 0, 1) 62.5%,
              rgba(0, 0, 0, 1) 75%,
              rgba(0, 0, 0, 0) 87.5%);
        }

        .gradient-blur>div:nth-of-type(5) {
          z-index: 6;
          backdrop-filter: blur(16px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 62.5%,
              rgba(0, 0, 0, 1) 75%,
              rgba(0, 0, 0, 1) 87.5%,
              rgba(0, 0, 0, 0) 100%);
        }

        .gradient-blur>div:nth-of-type(6) {
          z-index: 7;
          backdrop-filter: blur(32px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 75%,
              rgba(0, 0, 0, 1) 87.5%,
              rgba(0, 0, 0, 1) 100%);
        }

        .gradient-blur::after {
          content: "";
          z-index: 8;
          backdrop-filter: blur(64px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 87.5%,
              rgba(0, 0, 0, 1) 100%);
        }
      </style>
</div>

<nav className="fixed top-0 left-0 right-0 z-50">
<div className="mx-auto max-w-7xl px-6">
<div className="flex h-16 items-center justify-between">

<a className="inline-flex items-center justify-center bg-center w-[108px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/134927c1-2bc2-4349-a3d2-5b39d7c37ce5_1600w.png)] bg-cover rounded-full" href="#"></a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-white/90 hover:text-white transition" href="#">
              Trails
            </a>
<a className="text-sm text-white/60 hover:text-white transition" href="#">
              Features
            </a>
<a className="text-sm text-white/60 hover:text-white transition" href="#">
              Community
            </a>
<a className="text-sm text-white/60 hover:text-white transition" href="#">
              Pricing
            </a>
</div>
<div className="hidden md:flex items-center gap-3">
<button className="text-sm text-white/80 hover:text-white transition px-4 py-2">
              Sign in
            </button>
<button className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-4 py-2 text-sm font-medium text-neutral-950 hover:brightness-95 transition">
              Get started
              <svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>

<button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80" id="mobile-menu-btn">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
</div>

<div className="hidden md:hidden border-t border-white/5 bg-neutral-950" id="mobile-menu">
<div className="px-6 py-4 space-y-3">
<a className="block py-2 text-sm text-white/90 hover:text-white transition" href="#">
            Trails
          </a>
<a className="block py-2 text-sm text-white/60 hover:text-white transition" href="#">
            Features
          </a>
<a className="block py-2 text-sm text-white/60 hover:text-white transition" href="#">
            Community
          </a>
<a className="block py-2 text-sm text-white/60 hover:text-white transition" href="#">
            Pricing
          </a>
<div className="pt-3 border-t border-white/5 space-y-2">
<button className="w-full text-sm text-white/80 hover:text-white transition px-4 py-2 rounded-lg border border-white/10 bg-white/5">
              Sign in
            </button>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-lime-300 px-4 py-2 text-sm font-medium text-neutral-950">
              Get started
              <svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</div>
</nav>
<section className="overflow-hidden pt-16 relative">

<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-lime-300/20 blur-3xl"></div>
<div className="absolute top-1/3 -right-24 h-72 w-72 rounded-full bg-yellow-200/10 blur-3xl"></div>
<div className="absolute bottom-0 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-lime-400/10 blur-3xl"></div>
</div>
<div className="lg:pt-28 lg:pb-32 max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-24 pl-6 relative">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-2 gap-x-16 gap-y-16 items-center">

<div className="max-w-2xl">
<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-300 [animation:fadeSlideIn_0.7s_ease-out_0.1s_both] animate-on-scroll">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-lime-300"></span>
              Trail conditions: Open
            </div>
<h1 className="sm:text-6xl leading-[1.05] text-5xl font-medium tracking-tight font-bricolage [animation:fadeSlideIn_0.7s_ease-out_0.2s_both] animate-on-scroll">
              Yosemite Trails
              <span className="font-medium text-neutral-300 tracking-tight font-bricolage">
                for Hikers
              </span>
</h1>
<p className="text-neutral-400 max-w-xl mt-5 [animation:fadeSlideIn_0.7s_ease-out_0.3s_both] animate-on-scroll">
              Discover iconic routes, plan your hike, and track progress in real
              time. Explore curated Yosemite trails with offline maps,
              elevation, and group stats.
            </p>

<div className="mt-7 flex flex-wrap gap-3 [animation:fadeSlideIn_0.7s_ease-out_0.4s_both] animate-on-scroll">
<div className="rounded-2xl bg-white/[0.04] px-4 py-2 text-sm text-neutral-200 border border-white/10">
<span className="text-neutral-400">Level:</span>
                Moderate
              </div>
<div className="rounded-2xl bg-white/[0.04] px-4 py-2 text-sm text-neutral-200 border border-white/10">
<span className="text-neutral-400">Duration:</span>
                6.5 h
              </div>
<div className="rounded-2xl bg-white/[0.04] px-4 py-2 text-sm text-neutral-200 border border-white/10">
<span className="text-neutral-400">Distance:</span>
                14.2 km
              </div>
<div className="rounded-2xl bg-white/[0.04] px-4 py-2 text-sm text-neutral-200 border border-white/10">
<span className="text-neutral-400">Group:</span>
                8 people
              </div>
</div>

<div className="mt-8 flex flex-wrap items-center gap-3 [animation:fadeSlideIn_0.7s_ease-out_0.5s_both] animate-on-scroll">
<a className="group inline-flex items-center gap-2 rounded-full bg-lime-300 px-5 py-3 text-neutral-950 font-medium hover:brightness-95 active:translate-y-[1px] transition" href="#">
                Get started
                <svg className="h-4 w-4 transition -translate-x-0.5 group-hover:translate-x-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/[0.08] active:translate-y-[1px] transition" href="#">
<svg className="h-4 w-4 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path>
<path d="M15 5.764v15"></path>
<path d="M9 3.236v15"></path>
</svg>
                Explore trails
              </a>
</div>

<div className="mt-7 flex items-center gap-4 [animation:fadeSlideIn_0.7s_ease-out_0.6s_both] animate-on-scroll">
<div className="flex -space-x-2">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-neutral-950 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cb364025-2387-4977-a5e2-b5466b778b1d_320w.webp"/>
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-neutral-950 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/71ad0e95-131b-49d0-b467-355dc7813bbb_320w.webp"/>
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-neutral-950 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/60f2ed7a-4b74-4fdb-8c2c-66ab7dca6cde_320w.webp"/>
<div className="h-8 w-8 rounded-full bg-white/10 ring-2 ring-neutral-950 flex items-center justify-center text-[11px] text-neutral-300 border border-white/10">
                  +12
                </div>
</div>
<p className="text-sm text-neutral-400">
                Trusted by 2,400+ hikers worldwide
              </p>
</div>
</div>

<div className="relative mx-auto w-full max-w-xl lg:ml-auto">

<div className="sm:h-[600px] [animation:fadeSlideIn_0.7s_ease-out_0.5s_both] animate-on-scroll h-[560px] relative" id="phones">

<div className="sm:left-0 sm:top-6 absolute top-10 left-2 rotate-[-8deg]">
<div className="sm:w-72 shadow-black/40 overflow-hidden bg-neutral-900 w-64 h-[620px] ring-white/10 ring-1 rounded-[2.2rem] relative shadow-2xl" style={{transform: 'translate3d(0px, 0px, 0px)'}}>

<div className="absolute top-3 left-1/2 -translate-x-1/2 h-6 w-28 rounded-full bg-black/70"></div>
<div className="p-5 flex items-center justify-between">
<button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/80 border border-white/10">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/80 border border-white/10">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
</svg>
</button>
</div>
<div className="pr-5 pl-5">
<h3 className="text-2xl font-bricolage font-medium tracking-tight">
                      Yosemite Trails
                    </h3>
<p className="text-sm text-white/60 mt-1">Discover 24 trails</p>
</div>
<div className="mt-4 pr-5 pl-5">
<div className="overflow-hidden rounded-3xl relative">
<img alt="" className="w-full h-72 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c934d23e-214b-4c92-9df8-881eb8f280c2_800w.webp"/>
<div className="bg-gradient-to-t from-black/60 via-black/10 to-black/0 pt-4 pb-4 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-3 right-3">
<div className="rounded-full bg-lime-300/20 backdrop-blur px-2.5 py-1 text-xs font-medium text-lime-300 border border-lime-300/30">
                          Moderate
                        </div>
</div>
<div className="absolute bottom-3 left-3 right-3">
<div className="flex items-end justify-between">
<div className="">
<p className="font-medium text-white/90">Vernal Fall</p>
<p className="text-xs text-white/70">
                              Yosemite Valley • CA
                            </p>
</div>
<button className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-lime-300 text-neutral-950 shadow">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<div className="mt-3 grid grid-cols-2 gap-2">
<div className="rounded-2xl bg-white/15 backdrop-blur px-3 py-2 text-white/90">
<p className="text-[11px] text-white/70">Elevation</p>
<p className="text-sm">+400m</p>
</div>
<div className="rounded-2xl bg-white/15 backdrop-blur px-3 py-2 text-white/90">
<p className="text-[11px] text-white/70">Duration</p>
<p className="text-sm">6.5 h</p>
</div>
<div className="rounded-2xl bg-white/15 backdrop-blur px-3 py-2 text-white/90">
<p className="text-[11px] text-white/70">Distance</p>
<p className="text-sm">14.2 km</p>
</div>
<div className="rounded-2xl bg-white/15 backdrop-blur px-3 py-2 text-white/90">
<p className="text-[11px] text-white/70">Hikers</p>
<p className="text-sm">8</p>
</div>
</div>
</div>
</div>
</div>
<div className="px-5 mt-4">
<div className="flex items-center gap-2 text-xs text-white/60">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
<span>Next hike: Tomorrow 8:00 AM</span>
</div>
</div>
<div className="absolute bottom-4 left-0 right-0 flex justify-center">
<div className="h-1 w-16 rounded-full bg-white/10"></div>
</div>
</div>
</div>

<div className="-translate-x-1/2 sm:left-1/2 sm:-translate-x-1/2 absolute top-0 left-1/2">
<div className="sm:w-72 shadow-black/50 overflow-hidden bg-neutral-900 w-64 h-[620px] ring-white/10 ring-1 rounded-[2.2rem] relative shadow-2xl" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
<div className="absolute top-3 left-1/2 -translate-x-1/2 h-6 w-28 rounded-full bg-black/70"></div>
<div className="px-5 pt-4 flex items-center justify-between">
<button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10">
<svg className="h-4 w-4 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<div className="flex -space-x-2">
<img alt="" className="h-7 w-7 rounded-full ring-2 ring-neutral-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2a8d2822-6b15-416c-b2a1-331d656c363c_320w.webp"/>
<img alt="" className="h-7 w-7 rounded-full ring-2 ring-neutral-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/204d39d4-2b62-4998-80bc-4e908c217f17_320w.jpg"/>
<img alt="" className="h-7 w-7 rounded-full ring-2 ring-neutral-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7895a3d2-423d-4e12-8ee1-63b70b944bfc_320w.webp"/>
<div className="h-7 w-7 rounded-full bg-white/10 ring-2 ring-neutral-900 flex items-center justify-center text-[10px] text-neutral-300 border border-white/10">
                        +5
                      </div>
</div>
</div>
<div className="mt-3 pr-5 pl-5">
<h3 className="text-2xl font-bricolage font-medium tracking-tight">
                      Vernal Fall
                    </h3>
<p className="text-sm text-white/60 mt-0.5">
                      Starting in 2h 15m
                    </p>
</div>
<div className="relative mx-4 mt-3 h-[240px] rounded-2xl bg-gradient-to-b from-neutral-900 to-black ring-1 ring-white/10 overflow-hidden">

<svg className="absolute inset-0 h-full w-full text-neutral-700/40" viewbox="0 0 400 300">
<defs>
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.6"></path>
</pattern>
</defs>
<rect className="" fill="url(#grid)" height="100%" width="100%"></rect>

<path className="" d="M30,250 C80,180 120,220 160,180 C200,140 260,160 300,120 C330,95 360,110 370,90" fill="none" stroke="#d9ff3f" strokeLinecap="round" strokeWidth="4"></path>

<circle className="" cx="30" cy="250" fill="#d9ff3f" r="8"></circle>

<circle className="" cx="370" cy="90" fill="#fef08a" r="8"></circle>
</svg>
<div className="absolute top-3 left-3 right-3 flex items-center justify-between">
<div className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/80 border border-white/10 backdrop-blur">
<svg className="h-3 w-3 inline mr-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
                        Start: El Capitan
                      </div>
<div className="rounded-full bg-lime-300/20 backdrop-blur px-2.5 py-1 text-xs font-medium text-lime-300 border border-lime-300/30">
                        14.2 km
                      </div>
</div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
<div className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/80 border border-white/10 backdrop-blur">
                        Offline maps ready
                      </div>
<div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 border border-white/10 backdrop-blur">
<svg className="h-3 w-3 text-lime-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span className="text-xs text-white/70">GPS</span>
</div>
</div>
</div>
<div className="mt-4 px-4">
<div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
<div className="flex items-center justify-between mb-3">
<div className="text-xs text-white/60">Trail stats</div>
<div className="text-xs text-lime-300">Moderate</div>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="">
<div className="text-xl font-bricolage font-medium tracking-tight">
                            +400m
                          </div>
<div className="text-[11px] text-white/60">Elevation</div>
</div>
<div>
<div className="text-xl font-bricolage font-medium tracking-tight">
                            6.5h
                          </div>
<div className="text-[11px] text-white/60">Duration</div>
</div>
<div>
<div className="text-xl font-bricolage font-medium tracking-tight">
                            3.2
                          </div>
<div className="text-[11px] text-white/60">
                            Difficulty
                          </div>
</div>
</div>
</div>
</div>
<div className="mt-3 px-4">
<button className="w-full rounded-xl bg-lime-300 px-4 py-3 text-neutral-950 font-medium text-sm flex items-center justify-center gap-2">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
</svg>
                      Start hike
                    </button>
</div>
</div>
</div>

<div className="sm:right-0 sm:top-10 absolute top-14 right-1 rotate-[8deg]">
<div className="sm:w-72 shadow-black/40 overflow-hidden bg-neutral-900 w-64 h-[620px] ring-white/10 ring-1 rounded-[2.2rem] relative shadow-2xl" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
<div className="absolute top-3 left-1/2 -translate-x-1/2 h-6 w-28 rounded-full bg-black/70"></div>
<div className="h-56 relative">
<img alt="" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cc58d81e-28c7-4497-8773-59291a867e64_800w.webp"/>
<div className="bg-gradient-to-b from-black/30 via-transparent to-black/40 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute left-3 top-3 flex gap-2">
<div className="flex items-center gap-1.5 rounded-full bg-red-500/90 px-2.5 py-1 border border-red-400/50 backdrop-blur">
<span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse"></span>
<span className="text-xs font-medium text-white">Live</span>
</div>
</div>
<div className="absolute right-3 top-3 flex items-center gap-2 rounded-full bg-white/15 px-2.5 py-1 border border-white/10 backdrop-blur">
<svg className="h-3.5 w-3.5 text-lime-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span className="text-xs">87%</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<div className="flex items-center gap-2 text-white/90">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span className="text-sm">Vernal Fall Trail</span>
</div>
</div>
</div>

<div className="relative px-4">
<div className="relative -mt-8 rounded-3xl bg-white/8 border border-white/10 backdrop-blur p-4">
<div className="mx-auto h-1.5 w-14 rounded-full bg-gradient-to-r from-lime-300 to-yellow-200"></div>
<div className="mt-2 flex items-end justify-between">
<div className="text-5xl font-bricolage font-medium tracking-tight">
                          4.2
                        </div>
<div className="text-sm text-white/70">km/h</div>
</div>
<div className="mt-1 text-xs text-white/50">Current pace</div>
<div className="mt-3 grid grid-cols-2 gap-3 text-sm">
<div className="rounded-xl bg-white/5 border border-white/10 px-3 py-2">
<p className="text-white/60 text-[11px]">Time</p>
<p className="text-white/90">2:47</p>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 px-3 py-2">
<p className="text-white/60 text-[11px]">Distance</p>
<p className="text-white/90">8.3 km</p>
</div>
</div>
</div>
</div>
<div className="mt-4 px-4">
<div className="rounded-2xl bg-white/[0.04] border border-white/10 p-3">
<div className="flex items-center gap-3">
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<span className="text-xs text-white/60">Progress</span>
<span className="text-xs text-lime-300">58%</span>
</div>
<div className="h-1.5 rounded-full bg-white/10">
<div className="h-1.5 w-[58%] rounded-full bg-gradient-to-r from-lime-300 to-yellow-200"></div>
</div>
</div>
</div>
<div className="mt-3 flex items-center justify-between text-xs">
<div className="flex items-center gap-1.5 text-white/70">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m3 16 4 4 4-4"></path>
<path d="M7 20V4"></path>
<path d="m21 8-4-4-4 4"></path>
<path d="M17 4v16"></path>
</svg>
<span className="">Elevation: +232m</span>
</div>
<div className="text-white/90">5.9 km left</div>
</div>
</div>
</div>
<div className="mt-3 px-4">
<div className="flex gap-2">
<button className="flex-1 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 transition">
                        Pause
                      </button>
<button className="flex-1 rounded-xl bg-red-500/10 border border-red-500/30 px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/20 transition">
                        End hike
                      </button>
</div>
</div>
<div className="absolute bottom-4 left-0 right-0 flex justify-center">
<div className="h-1 w-16 rounded-full bg-white/10"></div>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</section>
<section className="overflow-hidden border-white/5 border-t relative">

<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-lime-300/10 blur-3xl"></div>
<div className="absolute top-1/2 -right-24 h-72 w-72 rounded-full bg-yellow-200/10 blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6 py-20 sm:py-28 relative">
<div className="grid lg:grid-cols-12 gap-14 items-start">

<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-300 [animation:fadeSlideIn_0.7s_ease-out_0.1s_both] animate-on-scroll">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-lime-300"></span>
              Since 2014
            </div>
<h2 className="sm:text-6xl leading-[1.08] text-4xl font-medium tracking-tight font-bricolage mt-4 [animation:fadeSlideIn_0.7s_ease-out_0.2s_both] animate-on-scroll">
              Years of across all seasons.
              <span className="ring-lime-300/30 ring-1 bg-lime-300/15 rounded-md pt-1 pr-2 pb-1 pl-2">
                Peak.
              </span>
</h2>
<p className="mt-5 text-neutral-400 max-w-2xl [animation:fadeSlideIn_0.7s_ease-out_0.3s_both] animate-on-scroll">
              Built with hikers in mind, our maps, elevation profiles, and live
              stats help you plan confidently—summer peaks to winter routes.
              Trusted by teams, clubs, and weekend explorers alike.
            </p>

<div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 [animation:fadeSlideIn_0.7s_ease-out_0.4s_both] animate-on-scroll">
<div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
<div className="flex items-center gap-2 text-white/80">
<span className="text-sm">Verified routes</span>
</div>
<div className="mt-2 text-2xl font-medium tracking-tight font-bricolage">
                  50+
                </div>
</div>
<div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
<div className="flex items-center gap-2 text-white/80">
<span className="text-sm">Peaks covered</span>
</div>
<div className="mt-2 text-2xl font-medium tracking-tight font-bricolage">
                  37
                </div>
</div>
<div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
<div className="flex items-center gap-2 text-white/80">
<span className="text-sm">Avg. route time</span>
</div>
<div className="mt-2 text-2xl font-medium tracking-tight font-bricolage">
                  5.8h
                </div>
</div>
<div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
<div className="flex items-center gap-2 text-white/80">
<span className="text-sm">Community rating</span>
</div>
<div className="mt-2 text-2xl font-medium tracking-tight font-bricolage">
                  4.9
                </div>
</div>
</div>
</div>

<div className="lg:col-span-5 w-full">
<div className="relative mx-auto max-w-md">

<div className="rounded-3xl overflow-hidden ring-1 ring-white/10 [animation:fadeSlideIn_0.7s_ease-out_0.3s_both] animate-on-scroll">
<img alt="Granite peaks under crisp blue sky" className="sm:h-96 w-full h-80 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f69c336e-359a-4244-880f-973698f89c21_1600w.webp"/>
</div>

<div className="-left-6 sm:-left-10 sm:bottom-12 [animation:fadeSlideIn_0.7s_ease-out_0.4s_both] animate-on-scroll absolute bottom-10">
<div className="bg-neutral-900/95 max-w-[260px] border-white/10 border rounded-2xl pt-4 pr-5 pb-4 pl-5 shadow-2xl backdrop-blur">
<div className="text-3xl font-medium tracking-tight font-bricolage">
                    50+
                  </div>
<p className="text-sm text-neutral-300 mt-1">
                    Verified Yosemite routes curated by local editors
                  </p>
</div>
</div>

<div className="hidden sm:block -right-10 -bottom-10 sm:w-48 overflow-hidden [animation:fadeSlideIn_0.7s_ease-out_0.5s_both] animate-on-scroll w-40 ring-white/10 ring-1 rounded-2xl absolute">
<img alt="Sunlit ridge line with alpine trees" className="w-full h-40 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/90db86a4-a950-4181-89ea-2655ab41913e_800w.webp"/>
</div>

<p className="mt-6 text-sm text-neutral-400 max-w-md sm:mt-10 [animation:fadeSlideIn_0.7s_ease-out_0.5s_both] animate-on-scroll">
                Over a decade helping hikers navigate Yosemite: accurate GPX,
                seasonal advisories, and offline support for low-signal valleys.
              </p>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden border-white/5 border-t relative">

<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-lime-300/10 blur-3xl"></div>
<div className="absolute top-1/2 -right-24 h-72 w-72 rounded-full bg-yellow-200/10 blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6 py-20 sm:py-28 relative">

<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-x-6 gap-y-6">
<div className="">
<div className="inline-flex text-xs text-neutral-300 bg-white/5 border-white/10 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center [animation:fadeSlideIn_0.7s_ease-out_0.1s_both] animate-on-scroll">
              Our Trails
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-lime-300"></span>
</div>
<h2 className="mt-4 font-bricolage font-medium tracking-tight text-4xl sm:text-6xl leading-[1.08] [animation:fadeSlideIn_0.7s_ease-out_0.2s_both] animate-on-scroll">
              Strong trails, thriving hikers.
              <span className="text-neutral-300">Plan, learn, and go.</span>
</h2>
<p className="mt-5 text-neutral-400 max-w-2xl [animation:fadeSlideIn_0.7s_ease-out_0.3s_both] animate-on-scroll">
              From pre-hike prep to on‑trail support, our certified guides and
              tools keep every journey safe, informed, and memorable.
            </p>
</div>
<div className="shrink-0 [animation:fadeSlideIn_0.7s_ease-out_0.4s_both] animate-on-scroll">
<a className="inline-flex items-center gap-2 hover:brightness-95 transition text-sm font-medium text-neutral-950 bg-lime-300 rounded-full pt-2 pr-4 pb-2 pl-4" href="#">
              All Trails
              <svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>

<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

<article className="group rounded-3xl bg-white/[0.04] border border-white/10 p-3 sm:p-4 hover:bg-white/[0.06] transition [animation:fadeSlideIn_0.7s_ease-out_0.2s_both] animate-on-scroll">
<div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
<img alt="Guide reviewing a route with a hiker" className="sm:h-56 w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c049d895-ebcc-4385-9561-00bc61050d99_800w.webp"/>
</div>
<div className="pt-4 px-1 pb-1">
<h3 className="text-[22px] font-medium tracking-tight">
                Trail Prep Coaching
              </h3>
<p className="text-neutral-400 mt-2">
                One‑on‑one planning for gear, weather, nutrition, and route
                pacing—built for your skill level and goals.
              </p>
<div className="mt-4 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-xs text-white/70">
<span className="h-1.5 w-1.5 rounded-full bg-lime-300"></span>
                  28 certified guides
                </div>
<a className="inline-flex items-center gap-2 text-sm text-white/90" href="#">
                  Read more
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-lime-300 text-neutral-950">
<svg className="lucide lucide-arrow-up-right h-3.5 w-3.5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</a>
</div>
</div>
</article>

<article className="group rounded-3xl bg-white/[0.04] border border-white/10 p-3 sm:p-4 hover:bg-white/[0.06] transition [animation:fadeSlideIn_0.7s_ease-out_0.3s_both] animate-on-scroll">
<div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
<img alt="Family hiking together through a pine forest" className="sm:h-56 w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/782ff660-820f-4153-aa85-b3d60237bd11_800w.webp"/>
</div>
<div className="pt-4 px-1 pb-1">
<h3 className="text-[22px] font-medium tracking-tight">
                Group &amp; Family Hikes
              </h3>
<p className="text-neutral-400 mt-2">
                Guided routes tailored for mixed experience levels with
                check‑ins, rest points, and kid‑friendly options.
              </p>
<div className="mt-4 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-xs text-white/70">
                  Max 12 hikers/guide
                </div>
<a className="inline-flex items-center gap-2 text-sm text-white/90" href="#">
                  Read more
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-lime-300 text-neutral-950">
<svg className="lucide lucide-arrow-up-right h-3.5 w-3.5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</a>
</div>
</div>
</article>

<article className="group rounded-3xl bg-white/[0.04] border border-white/10 p-3 sm:p-4 hover:bg-white/[0.06] transition [animation:fadeSlideIn_0.7s_ease-out_0.4s_both] animate-on-scroll">
<div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
<img alt="Guide assisting a hiker on trail" className="sm:h-56 w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/99ccacc8-c39e-4676-badf-74fe58d10b75_800w.webp"/>
</div>
<div className="pt-4 px-1 pb-1">
<h3 className="text-[22px] font-medium tracking-tight">
                On‑Trail Safety &amp; First Aid
              </h3>
<p className="text-neutral-400 mt-2">
                Real‑time support with satellite check‑ins, first‑aid kits, and
                protocols— of mind on every step.
              </p>
<div className="mt-4 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-xs text-white/70">
                  4.9 community rating
                </div>
<a className="inline-flex items-center gap-2 text-sm text-white/90" href="#">
                  Read more
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-lime-300 text-neutral-950">
<svg className="lucide lucide-arrow-up-right h-3.5 w-3.5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</a>
</div>
</div>
</article>
</div>
</div>
</section>
<section className="overflow-hidden border-white/5 border-t relative">

<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-lime-300/10 blur-3xl"></div>
<div className="absolute top-1/2 -right-24 h-72 w-72 rounded-full bg-yellow-200/10 blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6 py-20 sm:py-28 relative">

<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-x-6 gap-y-6">
<div className="">
<div className="inline-flex text-xs text-neutral-300 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 items-center gap-2 [animation:fadeSlideIn_0.7s_ease-out_0.1s_both] animate-on-scroll">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-lime-300"></span>
              Testimonials
            </div>
<h2 className="sm:text-6xl leading-[1.08] text-4xl font-medium tracking-tight font-bricolage mt-4 [animation:fadeSlideIn_0.7s_ease-out_0.2s_both] animate-on-scroll">
              What hikers are saying
            </h2>
<p className="mt-5 text-neutral-400 max-w-2xl [animation:fadeSlideIn_0.7s_ease-out_0.3s_both] animate-on-scroll">
              Stories from teams and solo hikers who trusted our guides, routes,
              and safety protocols on every kind of terrain.
            </p>
</div>
<div className="shrink-0 flex items-center gap-6 [animation:fadeSlideIn_0.7s_ease-out_0.4s_both] animate-on-scroll">
<div className="text-sm text-white/80">
<span className="text-xl font-bricolage font-medium tracking-tight" id="t-current">01</span>
<span className="text-white/40">/</span>
<span className="text-white/60" id="t-total">03</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 transition" id="t-prev">
<svg className="lucide lucide-arrow-left h-4 w-4" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 transition" id="t-next">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="mt-12 space-y-12" id="testimonial-slides">

<article className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center" data-testimonial-slide="">
<div className="lg:col-span-5 [animation:fadeSlideIn_0.7s_ease-out_0.2s_both] animate-on-scroll">
<div className="rounded-3xl overflow-hidden ring-1 ring-white/10 bg-neutral-900">
<img alt="Portrait of Sarah Ahmed" className="w-full h-full object-cover aspect-[4/5]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2c958486-bfef-4917-862a-7e3de9f9e62c_1600w.webp"/>
</div>
</div>
<div className="lg:col-span-7 [animation:fadeSlideIn_0.7s_ease-out_0.3s_both] animate-on-scroll">
<div className="flex items-start gap-6">
<div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10 text-white/80">
<svg className="lucide lucide-quote h-5 w-5" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<div className="">
<p className="text-xs text-white/60">Project Manager</p>
<h3 className="mt-1 text-2xl sm:text-3xl font-bricolage font-medium tracking-tight">
                    Sarah Ahmed
                  </h3>
<p className="mt-4 text-neutral-300 text-lg leading-relaxed">
                    “PeakPath delivered outstanding results with great
                    professionalism and timely execution. Their guides’
                    dedication and safety‑first approach made our company
                    offsite a complete success from start to finish.”
                  </p>
<div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-white/70">
<span className="h-1.5 w-1.5 rounded-full bg-lime-300"></span>
                    Route: Vernal Fall • Group of 10
                  </div>
</div>
</div>
</div>
</article>

<article className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center hidden" data-testimonial-slide="">
<div className="lg:col-span-5">
<div className="rounded-3xl overflow-hidden ring-1 ring-white/10 bg-neutral-900">
<img alt="Portrait of Marco Lee" className="w-full h-full object-cover aspect-[4/5]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/782ff660-820f-4153-aa85-b3d60237bd11_1600w.webp"/>
</div>
</div>
<div className="lg:col-span-7">
<div className="flex items-start gap-6">
<div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10 text-white/80">
<svg className="lucide lucide-quote h-5 w-5" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<div>
<p className="text-xs text-white/60">Operations Lead</p>
<h3 className="mt-1 text-2xl sm:text-3xl font-bricolage font-medium tracking-tight">
                    Marco Lee
                  </h3>
<p className="mt-4 text-neutral-300 text-lg leading-relaxed">
                    “The route planning and check‑ins were spot on. We kept to
                    schedule without rushing beginners, and the offline maps
                    saved us twice in low‑signal valleys. Flawless coordination
                    end to end.”
                  </p>
<div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-white/70">
<span className="h-1.5 w-1.5 rounded-full bg-lime-300"></span>
                    Elevation gain: +620m • Distance: 12.8 km
                  </div>
</div>
</div>
</div>
</article>

<article className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center hidden" data-testimonial-slide="">
<div className="lg:col-span-5">
<div className="rounded-3xl overflow-hidden ring-1 ring-white/10 bg-neutral-900">
<img alt="Portrait of Aisha Patel" className="w-full h-full object-cover aspect-[4/5]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c2c54da9-4434-41f6-a5e4-7988893b20a7_1600w.webp"/>
</div>
</div>
<div className="lg:col-span-7">
<div className="flex items-start gap-6">
<div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10 text-white/80">
<svg className="lucide lucide-quote h-5 w-5" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<div>
<p className="text-xs text-white/60">
                    Mountain Safety Coordinator
                  </p>
<h3 className="mt-1 text-2xl sm:text-3xl font-bricolage font-medium tracking-tight">
                    Aisha Patel
                  </h3>
<p className="mt-4 text-neutral-300 text-lg leading-relaxed">
                    “Clear protocols, well‑stocked kits, and calm leadership
                    throughout a tricky weather window. I’d trust this team with
                    any alpine objective.”
                  </p>
<div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-white/70">
<span className="h-1.5 w-1.5 rounded-full bg-lime-300"></span>
                    Rating: 4.9/5 • Group size: 7
                  </div>
</div>
</div>
</div>
</article>
</div>
</div>
</section>
<section className="overflow-hidden border-white/5 border-t relative">

<div className="pointer-events-none absolute inset-0">
<div className="absolute top-1/4 -left-24 h-72 w-72 rounded-full bg-lime-300/10 blur-3xl"></div>
<div className="absolute bottom-1/4 -right-24 h-72 w-72 rounded-full bg-yellow-200/10 blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6 py-20 sm:py-28 relative">

<div className="text-center max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-300 [animation:fadeSlideIn_0.7s_ease-out_0.1s_both] animate-on-scroll">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-lime-300"></span>
            Pricing
          </div>
<h2 className="mt-4 text-4xl sm:text-6xl font-medium tracking-tight font-bricolage leading-[1.08] [animation:fadeSlideIn_0.7s_ease-out_0.2s_both] animate-on-scroll">
            Choose your trail plan
          </h2>
<p className="mt-5 text-neutral-400 [animation:fadeSlideIn_0.7s_ease-out_0.3s_both] animate-on-scroll">
            From solo day hikes to guided expeditions—pick the plan that matches
            your adventure style.
          </p>
</div>

<div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="rounded-3xl bg-white/[0.04] border border-white/10 p-6 sm:p-8 flex flex-col [animation:fadeSlideIn_0.7s_ease-out_0.2s_both] animate-on-scroll">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight font-bricolage">
                Trailblazer
              </h3>
<div className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-xs text-white/70">
                Free
              </div>
</div>
<div className="mt-6">
<div className="flex items-baseline gap-1">
<span className="text-5xl font-medium tracking-tight font-bricolage">
                  $0
                </span>
<span className="text-neutral-400">/month</span>
</div>
</div>
<p className="mt-4 text-sm text-neutral-400">
              Perfect for casual hikers exploring basic routes with offline maps
              and community support.
            </p>
<ul className="mt-8 space-y-3 flex-1">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="h-5 w-5 text-lime-300 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span>Access to 15 verified trails</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="h-5 w-5 text-lime-300 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span>Offline map downloads</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="h-5 w-5 text-lime-300 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span>Basic elevation profiles</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="h-5 w-5 text-lime-300 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span>Community forum access</span>
</li>
</ul>
<button className="mt-8 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition">
              Start free
            </button>
</div>

<div className="rounded-3xl bg-white/[0.06] border-2 border-lime-300/30 p-6 sm:p-8 flex flex-col relative [animation:fadeSlideIn_0.7s_ease-out_0.3s_both] animate-on-scroll">
<div className="absolute -top-3 left-1/2 -translate-x-1/2">
<div className="inline-flex items-center gap-1.5 rounded-full bg-lime-300 px-3 py-1 text-xs font-medium text-neutral-950">
                Most popular
              </div>
</div>
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight font-bricolage">
                Peak Explorer
              </h3>
<div className="inline-flex items-center gap-1.5 rounded-full bg-lime-300/20 border border-lime-300/30 px-2.5 py-1 text-xs text-lime-300">
                Pro
              </div>
</div>
<div className="mt-6">
<div className="flex items-baseline gap-1">
<span className="text-5xl font-medium tracking-tight font-bricolage">
                  $19
                </span>
<span className="text-neutral-400">/month</span>
</div>
</div>
<p className="mt-4 text-sm text-neutral-400">
              For serious hikers who need advanced routes, real-time stats, and
              priority guide support.
            </p>
<ul className="mt-8 space-y-3 flex-1">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="h-5 w-5 text-lime-300 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span>All 50+ verified trails</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="h-5 w-5 text-lime-300 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span>Real-time GPS tracking</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="h-5 w-5 text-lime-300 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span>Advanced elevation &amp; weather data</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="h-5 w-5 text-lime-300 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span>Priority guide messaging</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="h-5 w-5 text-lime-300 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span>Export &amp; share custom routes</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="h-5 w-5 text-lime-300 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span>Group hike coordination tools</span>
</li>
</ul>
<button className="mt-8 w-full rounded-xl bg-lime-300 px-4 py-3 text-sm font-medium text-neutral-950 hover:brightness-95 transition flex items-center justify-center gap-2">
              Get started
              <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>

<div className="rounded-3xl bg-white/[0.04] border border-white/10 p-6 sm:p-8 flex flex-col [animation:fadeSlideIn_0.7s_ease-out_0.4s_both] animate-on-scroll">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight font-bricolage">
                Summit Team
              </h3>
<div className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-xs text-white/70">
                Enterprise
              </div>
</div>
<div className="mt-6">
<div className="flex items-baseline gap-1">
<span className="text-5xl font-medium tracking-tight font-bricolage">
                  $49
                </span>
<span className="text-neutral-400">/month</span>
</div>
</div>
<p className="mt-4 text-sm text-neutral-400">
              For organizations, clubs, and teams needing dedicated guides and
              custom expeditions.
            </p>
<ul className="mt-8 space-y-3 flex-1">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="h-5 w-5 text-lime-300 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span>Everything in Peak Explorer</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="h-5 w-5 text-lime-300 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span>Up to 20 team members</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="h-5 w-5 text-lime-300 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span>Dedicated certified guide</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="h-5 w-5 text-lime-300 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span>Custom route planning</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="h-5 w-5 text-lime-300 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span>On-trail safety coordination</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<svg className="h-5 w-5 text-lime-300 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span>Priority scheduling &amp; support</span>
</li>
</ul>
<button className="mt-8 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition">
              Contact sales
            </button>
</div>
</div>

<div className="mt-12 text-center [animation:fadeSlideIn_0.7s_ease-out_0.5s_both] animate-on-scroll">
<p className="text-sm text-neutral-400">
            All plans include access to our community, trail conditions updates,
            and basic safety resources.
            <a className="text-lime-300 hover:text-lime-200 transition" href="#">
              View full comparison →
            </a>
</p>
</div>
</div>
</section>
<footer className="overflow-hidden border-t border-white/5 relative">
<div className="pointer-events-none absolute inset-0">
<div className="absolute bottom-0 left-1/4 h-64 w-96 rounded-full bg-lime-300/5 blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 relative">

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">

<div className="col-span-2">
<a className="inline-flex items-center justify-center bg-center w-[108px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/134927c1-2bc2-4349-a3d2-5b39d7c37ce5_1600w.png)] bg-cover rounded-full" href="#"></a>
<p className="mt-4 text-sm text-neutral-400 max-w-xs">
              Trusted trail guides, real-time tracking, and offline maps for
              hikers exploring Yosemite's peaks and valleys.
            </p>
<div className="mt-6 flex items-center gap-3">
<a className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition" href="#">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition" href="#">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition" href="#">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>

<div>
<h4 className="text-sm font-medium text-white">Product</h4>
<ul className="mt-4 space-y-3">
<li>
<a className="text-sm text-neutral-400 hover:text-white transition" href="#">
                  Features
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition" href="#">
                  Trails
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition" href="#">
                  Guides
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition" href="#">
                  Pricing
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition" href="#">
                  Updates
                </a>
</li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-white">Company</h4>
<ul className="mt-4 space-y-3">
<li>
<a className="text-sm text-neutral-400 hover:text-white transition" href="#">
                  About
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition" href="#">
                  Blog
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition" href="#">
                  Careers
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition" href="#">
                  Press
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition" href="#">
                  Partners
                </a>
</li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-white">Resources</h4>
<ul className="mt-4 space-y-3">
<li>
<a className="text-sm text-neutral-400 hover:text-white transition" href="#">
                  Community
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition" href="#">
                  Help Center
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition" href="#">
                  Safety Tips
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition" href="#">
                  Trail Reports
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition" href="#">
                  Contact
                </a>
</li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-white">Legal</h4>
<ul className="mt-4 space-y-3">
<li>
<a className="text-sm text-neutral-400 hover:text-white transition" href="#">
                  Privacy
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition" href="#">
                  Terms
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition" href="#">
                  Cookies
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition" href="#">
                  Licenses
                </a>
</li>
<li>
<a className="text-sm text-neutral-400 hover:text-white transition" href="#">
                  Disclaimer
                </a>
</li>
</ul>
</div>
</div>

<div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-sm text-neutral-500">
            © 2024 PeakPath. All rights reserved.
          </p>
<div className="flex items-center gap-6 text-sm">
<a className="text-neutral-400 hover:text-white transition" href="#">
              Terms
            </a>
<a className="text-neutral-400 hover:text-white transition" href="#">
              Privacy
            </a>
<a className="text-neutral-400 hover:text-white transition" href="#">
              Cookies
            </a>
</div>
</div>
</div>
</footer>




    </>
  );
}
