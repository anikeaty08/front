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
      
    document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('mobile-menu-toggle');
      const mobileMenu = document.getElementById('mobile-menu');
      const hamburgerIcon = document.getElementById('hamburger-icon');
      let isOpen = false;

      toggleButton.addEventListener('click', function() {
        isOpen = !isOpen;
        
        if (isOpen) {
          // Open menu
          mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
          mobileMenu.style.opacity = '1';
          hamburgerIcon.style.transform = 'rotate(90deg)';
        } else {
          // Close menu
          mobileMenu.style.maxHeight = '0';
          mobileMenu.style.opacity = '0';
          hamburgerIcon.style.transform = 'rotate(0deg)';
        }
      });

      // Close menu when clicking outside
      document.addEventListener('click', function(event) {
        if (!toggleButton.contains(event.target) && !mobileMenu.contains(event.target) && isOpen) {
          isOpen = false;
          mobileMenu.style.maxHeight = '0';
          mobileMenu.style.opacity = '0';
          hamburgerIcon.style.transform = 'rotate(0deg)';
        }
      });

      // Close menu on window resize if desktop
      window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && isOpen) {
          isOpen = false;
          mobileMenu.style.maxHeight = '0';
          mobileMenu.style.opacity = '0';
          hamburgerIcon.style.transform = 'rotate(0deg)';
        }
      });
    });
  


      // Lucide icons
      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons();
      });

      // Simple marquee effect
      const container = document.getElementById('ticker');
      const track = document.getElementById('ticker-track');

      // Duplicate content to create a seamless loop
      const clone = track.cloneNode(true);
      container.appendChild(clone);

      let scrollPos = 0;
      function step() {
        scrollPos += 0.5; // speed
        if (scrollPos >= track.scrollWidth) scrollPos = 0;
        container.scrollLeft = scrollPos;
        requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    
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
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/celestialflowabstractdigitalform-ObUlVgj70g2y4bbx5vBKSfxN/" width="100%"></iframe></div></div>

<div className="relative">

<header className="supports-[backdrop-filter]:bg-white/60 border-x bg-white/70 border-zinc-950/80 border-b backdrop-blur">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="grid h-14 grid-cols-12 items-center">

<div className="col-span-8 md:col-span-3 flex gap-3 border-zinc-950/80 md:border-r pr-4 items-center h-full">
<div className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-900">
<svg className="lucide lucide-star h-4 w-4 text-zinc-900" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="uppercase text-sm tracking-wide font-sans">RULZ&CO.</span>
</div>

<nav className="col-span-8 hidden items-center justify-center gap-12 text-xs text-zinc-900 md:flex">
<div className="flex items-baseline gap-1 font-geist">
<span className="tracking-wide font-sans">WORK</span>
</div>
<div className="flex items-baseline gap-1 font-geist">
<span className="uppercase tracking-wide font-sans">Reviews</span>
</div>
<div className="flex items-baseline gap-1 font-geist">
<span className="uppercase tracking-wide font-sans">Awards</span>
</div>
<a className="uppercase tracking-wide underline underline-offset-4 decoration-zinc-400 font-sans" href="#">
          Book Participation
        </a>
</nav>

<div className="col-span-4 md:col-span-1 flex border-zinc-950/80 md:border-l pl-4 items-center justify-end md:justify-center h-full">
<button aria-label="Open menu" className="inline-flex h-8 w-8 items-center justify-center md:flex" id="mobile-menu-toggle">
<svg className="lucide lucide-menu h-6 w-6 text-zinc-900 transition-transform duration-300" data-lucide="menu" fill="none" height="24" id="hamburger-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</div>

<div className="md:hidden overflow-hidden transition-all duration-300 ease-in-out" id="mobile-menu" style={{maxHeight: `0`, opacity: `0`}}>
<div className="border-t border-zinc-950/80 bg-white/90 backdrop-blur">
<nav className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4 py-6">
<div className="flex flex-col gap-6 text-base text-zinc-900">
<a className="uppercase tracking-wide font-sans transition-colors hover:text-zinc-600" href="#">WORK</a>
<a className="uppercase tracking-wide font-sans transition-colors hover:text-zinc-600" href="#">Reviews</a>
<a className="uppercase tracking-wide font-sans transition-colors hover:text-zinc-600" href="#">Awards</a>
<a className="uppercase tracking-wide underline underline-offset-4 decoration-zinc-400 font-sans transition-colors hover:text-zinc-600" href="#">
            Book Participation
          </a>
</div>
</nav>
</div>
</div>

</header>

<section className="relative">
<div className="max-w-7xl sm:px-6 lg:px-8 lg:pt-14 mr-auto ml-auto pt-10 pr-4 pb-10 pl-4">

<div className="relative">

<div className="pointer-events-none absolute right-0 top-2 hidden translate-x-4 select-none gap-1 pr-2 md:flex">
<span className="h-6 w-3 rounded-full bg-zinc-900"></span>
<span className="h-6 w-3 rounded-full bg-zinc-800"></span>
<span className="h-6 w-3 rounded-full bg-zinc-700"></span>
<span className="h-6 w-3 rounded-full bg-zinc-600"></span>
<span className="h-6 w-3 rounded-full bg-zinc-500"></span>
<span className="h-6 w-3 rounded-full bg-zinc-400"></span>
<span className="h-6 w-3 rounded-full bg-zinc-300"></span>
<span className="h-6 w-3 rounded-full bg-zinc-200"></span>
</div>
<div className="grid grid-cols-12 gap-y-2">
<div className="col-span-12 md:col-span-8">
</div>
<div className="col-span-12 md:col-span-4 md:mt-0">
</div>
</div>
<h1 className="text-[clamp(40px,8vw,96px)] leading-[0.95] font-light tracking-tight font-geist" style={{}}>INCREDIBLE</h1>
<div className="flex flex-col sm:grid sm:grid-cols-3 gap-2 sm:gap-2 text-[clamp(32px,6vw,96px)] sm:text-[clamp(40px,8vw,96px)] leading-[0.95] font-light tracking-tight font-geist items-start sm:items-center">
<div className="text-[9px] sm:text-[10px] uppercase text-zinc-600 tracking-[0.2em] text-left sm:text-right mt-2 sm:mt-4 mb-2 sm:mb-4 order-1 sm:order-none font-sans" style={{}}>3D MODELLING COURSE TO IMPROVE YOUR SKILLS</div>
<div className="col-span-1 order-2 sm:order-none font-geist font-light" style={{}}>CHANGES</div>
<div className="text-[9px] sm:text-[10px] uppercase text-zinc-600 tracking-[0.2em] mb-2 sm:mb-4 pr-0 sm:pr-4 pl-0 sm:pl-8 text-left sm:text-left order-3 sm:order-none font-sans" style={{}}>Places for participation are limited — hurry up to book participation</div>
</div>
<h1 className="text-[clamp(40px,8vw,96px)] leading-[0.95] tracking-tight text-right font-geist font-light" style={{}}>BEGIN WITH YOU</h1>

<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="group inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-zinc-900 px-4 py-2 text-sm tracking-tight text-white hover:bg-zinc-800 font-sans" href="#" style={{}}>
                Start Now
                <svg className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm tracking-tight text-zinc-900 hover:bg-zinc-50 font-sans" href="#" style={{}}>
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                Watch Intro
              </a>
</div>
</div>

<div className="mt-8 grid grid-cols-12 gap-3 sm:gap-4">

<article className="col-span-12 md:col-span-7">
<div className="relative overflow-hidden bg-white border-zinc-200 border rounded-3xl shadow-sm">
<img alt="3D render landscape" className="h-[260px] w-full sm:h-[320px] md:h-[380px] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3a12feac-ae63-41dc-a265-adcc248c890a_1600w.jpg" />
<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50"></div>
<div className="pointer-events-none absolute left-0 top-0 flex w-full text-[10px] uppercase z-10 text-white tracking-wider pt-4 pr-4 pb-4 pl-4 justify-start">
<span className="inline-flex items-center gap-2 font-sans" style={{}}>
      Project
      <span className="h-px w-8 bg-white/60 mr-1"></span>
</span>
<span className="font-sans" style={{}}>2025</span>
</div>
</div>
</article>

<article className="col-span-12 md:col-span-3">
<div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
<img alt="Portrait" className="h-[260px] w-full sm:h-[320px] md:h-[380px] object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a5ebdaea-2745-4d9b-a943-c6f292e6aaa3_800w.jpg" /><div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/10 to-black/60"></div>
</div>
</article>

<aside className="col-span-12 md:col-span-2">
<div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div><img alt="Green texture" className="h-[260px] w-full sm:h-[320px] md:h-[380px] object-cover" src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80" />
<div className="absolute bottom-4 left-4">
<p className="text-3xl text-white tracking-tight font-geist font-light" style={{}}>250+</p>
<p className="text-[10px] uppercase tracking-wider text-zinc-200 font-sans" style={{}}>Works of students</p>
</div>
</div>
</aside>
</div>
</div>

<div className="sticky bottom-0 z-20 w-full border-t border-zinc-200/80 bg-white/80 py-2 backdrop-blur supports-[backdrop-filter]:bg-white/60">
<div className="relative max-w-7xl overflow-hidden sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4" id="ticker">
<div className="flex gap-6 whitespace-nowrap text-[11px] uppercase tracking-[0.2em] text-zinc-700 animate-marquee" style={{animation: `marquee 30s linear infinite`}}>
<span className="inline-flex items-center gap-2 font-sans" style={{}}>
<svg className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
      Your best chance
    </span>
<span className="font-sans" style={{}}>Improving your modeling skills</span>
<span className="inline-flex items-center gap-2 font-sans" style={{}}>
<svg className="lucide lucide-play-circle h-3.5 w-3.5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
      Start right now
    </span>
<span className="font-sans" style={{}}>Your best chance</span>
<span className="font-sans" style={{}}>Improving your modeling skills</span>
<span className="inline-flex items-center gap-2 font-sans" style={{}}>
<svg className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
      Your best chance
    </span>
<span className="font-sans" style={{}}>Improving your modeling skills</span>
<span className="inline-flex items-center gap-2 font-sans" style={{}}>
<svg className="lucide lucide-play-circle h-3.5 w-3.5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
      Start right now
    </span>
</div>

</div>
</div>
</section>
</div>

<grammarly-desktop-integration className="" data-grammarly-shadow-root="true"></grammarly-desktop-integration>
    </>
  );
}
