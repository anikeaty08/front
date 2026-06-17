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



        (function() {
          const menuButton = document.getElementById('mobile-menu-button');
          const mobileMenu = document.getElementById('mobile-menu');
          const hamburgerIcon = document.getElementById('hamburger-icon');
          const closeIcon = document.getElementById('close-icon');

          if (menuButton && mobileMenu && hamburgerIcon && closeIcon) {
            menuButton.addEventListener('click', function() {
              const isMenuOpen = !mobileMenu.classList.contains('hidden');

              if (isMenuOpen) {
                mobileMenu.classList.add('hidden');
                hamburgerIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
              } else {
                mobileMenu.classList.remove('hidden');
                hamburgerIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
              }
            });

            document.addEventListener('click', function(event) {
              if (!menuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
                hamburgerIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
              }
            });

            window.addEventListener('resize', function() {
              if (window.innerWidth >= 768) {
                mobileMenu.classList.add('hidden');
                hamburgerIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
              }
            });
          }
        })();
      


              document.addEventListener('DOMContentLoaded', () => {
                const animateElements = document.querySelectorAll('[data-animate]');
                const observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      entry.target.classList.remove('opacity-0', 'translate-y-8', 'blur-md');
                    }
                  });
                }, { threshold: 0.1 });
                animateElements.forEach(el => observer.observe(el));
              });
            


  try { if (window.lucide && lucide.createIcons) lucide.createIcons(); } catch(e) {}
  if (window.initInViewAnimations) window.initInViewAnimations();



      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && lucide.createIcons) {
          lucide.createIcons();
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
      

<div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
<header className="relative">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex pt-8 pb-8 items-center justify-between [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">

<a className="text-2xl font-semibold tracking-tight" href="/">
<img alt="Aura Logo" className="w-16 h-8 object-cover rounded-lg" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e3a958d0-eb5a-4389-b7a1-70fd7c03f839_1600w.png" style={{transition: 'outline 0.1s ease-in-out'}}/>
</a>

<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600">
<a className="hover:text-neutral-900 transition-colors" href="/features">
              Features
            </a>
<a className="hover:text-neutral-900 transition-colors" href="/templates">
              Templates
            </a>
<a className="hover:text-neutral-900 transition-colors" href="/pricing">
              Pricing
            </a>
<a className="hover:text-neutral-900 transition-colors" href="/docs">
              Docs
            </a>
<a className="inline-flex items-center gap-2 hover:bg-neutral-800 transition-colors font-medium text-white bg-neutral-900 rounded-full pt-2 pr-4 pb-2 pl-4" href="/login">
              Get Started
              <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</nav>

<button aria-label="Toggle menu" className="md:hidden inline-flex hover:bg-neutral-100 transition-colors bg-neutral-50 w-10 h-10 rounded-full items-center justify-center" id="mobile-menu-button">
<svg className="text-neutral-900" fill="none" height="20" id="hamburger-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18"></path>
<path d="M3 6h18"></path>
<path d="M3 18h18"></path>
</svg>
<svg className="text-neutral-900 hidden" fill="none" height="20" id="close-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="M6 6l12 12"></path>
</svg>
</button>
</div>

<div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-neutral-200 shadow-lg z-50 hidden" id="mobile-menu">
<nav className="pt-6 pr-6 pb-6 pl-6 space-y-4">
<a className="block hover:text-neutral-900 transition-colors text-base text-neutral-600 pt-2 pb-2" href="/features">
              Features
            </a>
<a className="block hover:text-neutral-900 transition-colors text-base text-neutral-600 pt-2 pb-2" href="/templates">
              Templates
            </a>
<a className="block hover:text-neutral-900 transition-colors text-base text-neutral-600 pt-2 pb-2" href="/pricing">
              Pricing
            </a>
<a className="block hover:text-neutral-900 transition-colors text-base text-neutral-600 pt-2 pb-2" href="/docs">
              Docs
            </a>
<div className="pt-4 border-t border-neutral-200">
<a className="inline-flex items-center gap-2 hover:bg-neutral-800 transition-colors justify-center font-medium text-white bg-neutral-900 w-full rounded-full pt-3 pr-4 pb-3 pl-4" href="/login">
                Get Started
                <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</nav>
</div>
</div>

</header>
<main className="">
<section className="sm:px-8 max-w-7xl mr-auto ml-auto pr-6 pb-16 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

<div className="max-w-xl">

<div className="flex gap-3 mb-6 items-center transition-all duration-700 ease-out [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll" data-animate="">
<div className="flex -space-x-2">
<div className="bg-purple-400 w-7 h-7 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/39fb732d-573c-4916-896a-c5d3abfdc75c_320w.webp)] bg-cover ring-white ring-2 rounded-full"></div>
<div className="bg-blue-400 w-7 h-7 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/35a201c1-8c2a-4f49-9b88-a0f3185c0fc2_320w.webp)] bg-cover ring-white ring-2 rounded-full"></div>
<div className="ring-2 ring-white bg-orange-400 w-7 h-7 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/60f2ed7a-4b74-4fdb-8c2c-66ab7dca6cde_320w.webp)] bg-cover rounded-full"></div>
</div>
<p className="text-sm text-neutral-600">
<span className="font-medium text-neutral-900">10,000+</span>
                sites built with Aura
              </p>
</div>

<h1 className="sm:text-5xl lg:text-[64px] leading-[1.05] transition-all duration-700 ease-out delay-150 text-4xl font-medium tracking-tighter mb-6 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll" data-animate="">
              Build stunning sites with AI
            </h1>
<p className="sm:text-lg leading-relaxed transition-all duration-700 ease-out delay-300 text-base text-neutral-600 mb-8 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll" data-animate="">
              Transform screenshots into code, edit with Tailwind visually, and
              access premium templates. Create professional websites in minutes
              with AI-powered tools.
            </p>

<div className="flex items-center gap-5 mb-12 transition-all duration-700 ease-out delay-[450ms] [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll" data-animate="">
<a className="group inline-flex items-center hover:bg-neutral-800 transition-colors font-medium text-white bg-neutral-900 rounded-full pt-3 pr-3 pb-3 pl-6 shadow-lg" href="#">
<span className="">Start Building</span>
<span className="ml-3 inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 group-hover:bg-white/15">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>
<a className="inline-flex items-center gap-2 text-neutral-900 font-medium hover:opacity-80" href="#">
                Watch Demo
                <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
</svg>
</a>
</div>

<div className="transition-all duration-700 ease-out delay-[600ms] [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll" data-animate="">
<p className="text-sm text-neutral-500 mb-4">
                Trusted by innovative teams
              </p>
<div className="flex gap-6 sm:gap-10 items-center opacity-40">
<svg className="w-[80px] h-[24px]" data-icon-replaced="true" fill="currentColor" strokeWidth="2" style={{width: '80px', height: '24px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 100 30">
<text className="" fontFamily="Arial" fontSize="18" font-weight="bold" x="0" y="20">
                    STRIPE
                  </text>
</svg>
<svg className="h-6" fill="currentColor" viewbox="0 0 100 30">
<text className="" fontFamily="Arial" fontSize="18" font-weight="bold" x="0" y="20">
                    VERCEL
                  </text>
</svg>
<svg className="h-6" fill="currentColor" viewbox="0 0 100 30">
<text className="" fontFamily="Arial" fontSize="18" font-weight="bold" x="0" y="20">
                    LINEAR
                  </text>
</svg>
</div>
</div>

</div>

<div className="relative">
<div className="overflow-hidden [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll bg-neutral-950 ring-black/10 ring-1 rounded-[28px] relative shadow-2xl animate">
<div className="sm:h-[760px] overflow-hidden h-[600px] relative">

<div className="absolute inset-0 bg-neutral-950"></div>

<div className="absolute top-4 left-4 right-4 flex gap-2 z-20 items-center">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80"></div>
</div>
<div className="flex-1 flex gap-2 justify-center">
<div className="px-3 py-1.5 rounded-lg bg-white/5 backdrop-blur-md ring-1 ring-white/10 text-xs text-white/60">
                      Image to HTML
                    </div>
<div className="px-3 py-1.5 rounded-lg bg-purple-500/20 backdrop-blur-md ring-1 ring-purple-400/30 text-xs text-purple-300 font-medium">
                      Visual Tailwind
                    </div>
</div>
</div>

<div className="bg-cover absolute top-0 right-0 bottom-0 left-0 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/33365526-40d5-4e2d-8e93-20327162dcbf_1600w.webp)]" style={{maskImage: 'linear-gradient(transparent, black 15%, black 85%, transparent)'}}>
<style className="">
                    @keyframes marquee-vertical {
                      from { transform: translateY(0); }
                      to { transform: translateY(-50%); }
                    }
                    .animate-marquee-vertical {
                      animation: marquee-vertical 40s linear infinite;
                    }
                  </style>
<div className="animate-marquee-vertical">

<div className="sm:h-[760px] flex flex-col w-full h-[600px] pr-8 pl-8 relative gap-x-8 gap-y-8 justify-center">

<div className="max-w-[320px]">
<div className="border-gradient rounded-2xl pt-6 pr-6 pb-6 pl-6 bg-white/5 backdrop-blur-md before:rounded-2xl">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M9 3v18"></path>
</svg>
</div>
<div className="">
<p className="text-white text-base font-medium">
            Screenshot to Code
          </p>
<p className="text-white/60 text-sm">
            AI-powered conversion
          </p>
</div>
</div>
<p className="text-white/80 text-sm leading-relaxed">
        Drop any image and watch Aura generate pixel-perfect
        HTML &amp; Tailwind instantly.
      </p>
</div>
</div>

<div className="max-w-[320px] ml-auto">
<div className="border-gradient rounded-2xl pt-6 pr-6 pb-6 pl-6 bg-white/5 backdrop-blur-md before:rounded-2xl">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h9"></path>
<path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
</svg>
</div>
<div className="">
<p className="text-white text-base font-medium">
            Visual Tailwind
          </p>
<p className="text-white/60 text-sm">
            Point &amp; click editing
          </p>
</div>
</div>
<p className="text-white/80 text-sm leading-relaxed">
        Edit spacing, colors, and typography visually. No
        code required.
      </p>
</div>
</div>

<div className="max-w-[320px]">
<div className="border-gradient rounded-2xl pt-6 pr-6 pb-6 pl-6 bg-white/5 backdrop-blur-md before:rounded-2xl">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a7 7 0 1 0 10 10"></path>
</svg>
</div>
<div className="">
<p className="text-white text-base font-medium">
            Premium Templates
          </p>
<p className="text-white/60 text-sm">
            500+ ready-made designs
          </p>
</div>
</div>
<p className="text-white/80 text-sm leading-relaxed">
        Start with professionally designed templates and
        customize them instantly.
      </p>
</div>
</div>

<div className="max-w-[320px] ml-auto">
<div className="border-gradient rounded-2xl pt-6 pr-6 pb-6 pl-6 bg-white/5 backdrop-blur-md before:rounded-2xl">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
</div>
<div className="">
<p className="text-white text-base font-medium">
            Midjourney Remix
          </p>
<p className="text-white/60 text-sm">
            AI image conversion
          </p>
</div>
</div>
<p className="text-white/80 text-sm leading-relaxed">
        Transform AI-generated images into fully functional
        website components.
      </p>
</div>
</div>
</div>

<div className="relative w-full sm:h-[760px] h-[600px]">

<div className="absolute left-4 sm:left-6 top-20 sm:top-32 max-w-[280px]">
<div className="ring-1 ring-white/10 rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-md">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-xl flex items-center justify-center">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M9 3v18"></path>
</svg>
</div>
<div>
<p className="text-white text-sm font-medium">
                                Screenshot to Code
                              </p>
<p className="text-white/60 text-xs">
                                AI-powered conversion
                              </p>
</div>
</div>
<p className="text-white/80 text-sm leading-relaxed">
                            Drop any image and watch Aura generate pixel-perfect
                            HTML &amp; Tailwind instantly.
                          </p>
</div>
</div>

<div className="absolute right-4 sm:right-6 top-40 sm:top-56 max-w-[260px]">
<div className="ring-1 ring-white/10 rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-md">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-xl flex items-center justify-center">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h9"></path>
<path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
</svg>
</div>
<div>
<p className="text-white text-sm font-medium">
                                Visual Tailwind
                              </p>
<p className="text-white/60 text-xs">
                                Point &amp; click editing
                              </p>
</div>
</div>
<p className="text-white/80 text-sm leading-relaxed">
                            Edit spacing, colors, and typography visually. No
                            code required.
                          </p>
</div>
</div>

<div className="absolute left-6 sm:left-10 bottom-32 sm:bottom-40">
<div className="flex gap-3 bg-white/5 ring-white/10 ring-1 rounded-full pt-2 pr-2 pb-2 pl-4 backdrop-blur-md items-center">
<span className="text-sm text-white/90">
                            500+ Premium Templates
                          </span>
<div className="h-8 w-8 rounded-full flex items-center justify-center">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M4 20h16"></path>
<rect height="12" rx="1" width="8" x="8" y="8"></rect>
</svg>
</div>
</div>
</div>

<div className="absolute right-4 sm:right-6 bottom-6 sm:bottom-20 w-[240px] sm:w-[280px]">
<div className="ring-white/10 ring-1 rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-md">
<p className="font-medium text-white mb-2 tracking-tight">
                            Midjourney Remix
                          </p>
<p className="text-sm text-white/80 leading-snug mb-3">
                            Transform AI-generated images into fully functional
                            website components.
                          </p>
<div className="flex -space-x-2">
<img alt="User" className="h-8 w-8 rounded-lg ring-2 ring-neutral-950 object-cover" src="https://i.pravatar.cc/150?img=5"/>
<img alt="User" className="h-8 w-8 rounded-lg ring-2 ring-neutral-950 object-cover" src="https://i.pravatar.cc/150?img=6"/>
<img alt="User" className="h-8 w-8 rounded-lg ring-2 ring-neutral-950 object-cover" src="https://i.pravatar.cc/150?img=7"/>
<img alt="User" className="h-8 w-8 rounded-lg ring-2 ring-neutral-950 object-cover" src="https://i.pravatar.cc/150?img=8"/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:p-8 sm:py-8 bg-white max-w-7xl border-black/5 border rounded-3xl mt-32 mr-auto mb-20 ml-auto pt-12 pr-6 pb-12 pl-6 relative">
<div className="max-w-3xl mx-auto text-center mb-12">
<h2 className="sm:text-5xl lg:text-6xl leading-[1.05] text-4xl font-medium text-neutral-900 tracking-tighter [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
            Everything you need to build faster
          </h2>
<p className="sm:text-lg text-base text-neutral-600 mt-4 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
            Powerful AI tools that transform how you create websites. No design
            or coding skills required.
          </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 gap-x-6 gap-y-6">

<article className="overflow-hidden [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll bg-purple-50 ring-purple-100 ring-1 rounded-3xl flex flex-col">
<div className="pt-6 pr-6 pl-6 flex-1">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-purple-500">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M9 3v18"></path>
<path d="m16 15-3-3 3-3"></path>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-900 mb-2">
        Image to HTML
      </h3>
<p className="text-sm text-neutral-600 mb-6">
        Upload any screenshot or design. Our AI converts it to clean,
        production-ready code in seconds.
      </p>
</div>
<div className="bg-purple-500/20 h-52 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ef584baf-f406-4fcd-a700-134ad6ae6a5e_800w.webp)] bg-cover rounded-t-3xl"></div>
</article>

<article className="rounded-3xl ring-1 ring-blue-100 overflow-hidden bg-blue-50 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll flex flex-col">
<div className="pt-6 pr-6 pl-6 flex-1">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-blue-500">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h9"></path>
<path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-900 mb-2">
        Visual Tailwind Editor
      </h3>
<p className="text-sm text-neutral-600 mb-6">
        Point, click, and customize. Edit Tailwind classes visually
        without touching code.
      </p>
</div>
<div className="bg-blue-500/20 h-52 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/028217e0-4334-4171-8729-959caa2426cb_800w.webp)] bg-cover rounded-t-3xl"></div>
</article>

<article className="rounded-3xl ring-1 ring-orange-100 overflow-hidden bg-orange-50 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll flex flex-col">
<div className="pt-6 pr-6 pl-6 flex-1">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-orange-500">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-900 mb-2">
        Premium Templates
      </h3>
<p className="text-sm text-neutral-600 mb-6">
        Start with 500+ professionally designed templates. Customize
        them to match your brand instantly.
      </p>
</div>
<div className="bg-orange-500/20 h-52 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dfa9776b-475d-4470-9c26-68e42de7819a_800w.webp)] bg-cover rounded-t-3xl"></div>
</article>
</div>
</section>

<section className="lg:px-8 sm:px-8 overflow-hidden bg-neutral-950 pt-20 pr-6 pb-20 pl-6 relative">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-purple-500/10 blur-3xl"></div>
<div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-blue-500/10 blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto relative">
<div className="text-center mb-14">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-5 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
        The details make it feel alive
      </h2>
<p className="leading-relaxed [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll text-lg text-white/70 max-w-2xl mr-auto ml-auto">
        Crisp UI, smooth motion, and typographic finesse—purpose‑built for dark surfaces.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="relative bg-neutral-900 ring-1 ring-white/10 rounded-[28px] p-6 overflow-hidden [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative">
<div className="flex items-center justify-between mb-4 text-white/70">
<span className="text-sm">Components</span>
<span className="inline-flex gap-1">
<span className="w-2 h-2 rounded-full bg-white/20"></span>
<span className="w-2 h-2 rounded-full bg-white/20"></span>
<span className="w-2 h-2 rounded-full bg-white/20"></span>
</span>
</div>
<div className="rounded-2xl bg-black/30 ring-1 ring-white/10 p-3">
<div className="flex items-center gap-2 px-2 py-2 rounded-lg bg-black/30 ring-1 ring-white/10 mb-3">
<i className="w-4 h-4 text-white/60" data-lucidesearch"=""></i>
<span className="text-sm text-white/50">Search components…</span>
</div>
<div className="grid grid-cols-3 gap-2">
<button className="aspect-square rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center hover:bg-white/10 transition">
<svg className="lucide lucide-box w-5 h-5 text-white" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</button>
<button className="aspect-square rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center hover:bg-white/10 transition ring-2 ring-blue-500/50">
<svg className="lucide lucide-calendar w-5 h-5 text-white" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</button>
<button className="aspect-square rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center hover:bg-white/10 transition">
<svg className="lucide lucide-camera w-5 h-5 text-white" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</button>
<button className="aspect-square rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center hover:bg-white/10 transition">
<svg className="lucide lucide-shopping-cart w-5 h-5 text-white" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
</button>
<button className="aspect-square rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center hover:bg-white/10 transition">
<svg className="lucide lucide-bar-chart-3 w-5 h-5 text-white" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</button>
<button className="aspect-square rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center hover:bg-white/10 transition">
<svg className="lucide lucide-message-circle w-5 h-5 text-white" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</button>
<button className="aspect-square rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center hover:bg-white/10 transition">
<svg className="lucide lucide-settings w-5 h-5 text-white" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
<button className="aspect-square rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center hover:bg-white/10 transition">
<svg className="lucide lucide-clock w-5 h-5 text-white" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle className="" cx="12" cy="12" r="10"></circle></svg>
</button>
<button className="aspect-square rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center hover:bg-white/10 transition">
<svg className="lucide lucide-layout w-5 h-5 text-white" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</button>
</div>
</div>
</div>
</div>

<div className="relative bg-neutral-900 ring-1 ring-white/10 rounded-[28px] p-6 overflow-hidden [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div className="absolute top-0 right-0 bottom-0 left-0 inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_60%)]">
<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '24px 24px, 24px 24px', backgroundPosition: '0 0, 0 0'}}></div>
<div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs text-white/70">
<span className="w-2 h-2 rounded-full bg-blue-500/60"></span>
<span>Bezier Grid</span>
</div>
<div className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs text-white/70">
<span>fps</span>
<span className="text-white/90 font-medium">60</span>
</div>
<div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-md bg-white/5 ring-1 ring-white/10 px-2.5 py-1.5 text-xs text-white/60">
<span>X: 0→200</span>
<span className="text-white/30">/</span>
<span>Y: 0→80</span>
</div>
<div className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-md bg-white/5 ring-1 ring-white/10 px-2.5 py-1.5 text-xs text-white/60">
<span>Ease In‑Out</span>
</div>
</div>
<div className="relative flex flex-col items-center justify-center h-full">
<img alt="3D cards" className="ring-1 ring-white/10 w-48 h-32 object-cover rounded-2xl mb-6 shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1845387d-41f0-4731-9487-f88e2fc2ee12_800w.webp"/>
<div className="w-full max-w-sm rounded-2xl bg-black/30 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between text-white/70 mb-3">
<button className="inline-flex items-center gap-1 text-xs text-white/60">
<svg className="lucide lucide-chevron-left w-3.5 h-3.5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
<span>Back</span>
</button>
<span className="text-sm text-white/80">Motion</span>
<svg className="lucide lucide-x w-4 h-4 text-white/60" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<div className="flex items-center gap-2 mb-4">
<button className="px-3 py-1.5 text-xs rounded-full bg-white/10 ring-1 ring-white/10 text-white">Ease</button>
<button className="px-3 py-1.5 text-xs rounded-full bg-transparent ring-1 ring-white/10 text-white/60">Spring</button>
</div>
<svg className="w-full h-20 text-white/20" viewbox="0 0 200 80">
<rect className="fill-transparent" height="80" rx="10" width="200" x="0" y="0"></rect>
<path className="stroke-blue-400" d="M10,70 C60,10 140,10 190,70" fill="none" strokeWidth="3"></path>
</svg>
</div>
</div>
</div>

<div className="relative bg-neutral-900 ring-1 ring-white/10 rounded-[28px] p-6 overflow-hidden [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">
<div className="absolute top-0 right-0 bottom-0 left-0 pointer-events-none overflow-hidden bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.12),transparent_60%)]">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '24px 24px, 24px 24px', backgroundPosition: '0 0, 0 0'}}></div>

<div className="absolute inset-0 opacity-20" style={{background: 'conic-gradient(from 140deg at 90% 10%, rgba(168,85,247,0.18), transparent 35%), conic-gradient(from -40deg at 10% 90%, rgba(59,130,246,0.18), transparent 35%)'}}></div>

<div className="absolute -top-4 -left-4 w-[240px] h-[240px] rounded-full bg-purple-500/20 blur-3xl opacity-60"></div>
<div className="absolute -bottom-4 -right-4 w-[220px] h-[220px] rounded-full bg-blue-500/20 blur-3xl opacity-60"></div>

<div className="absolute left-0 right-0 top-12 h-px" style={{background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)'}}></div>
<div className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2" style={{background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.12), transparent)'}}></div>

<div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.04), transparent 70%), linear-gradient(to bottom, rgba(0,0,0,0.35), transparent 25%, transparent 75%, rgba(0,0,0,0.35))'}}></div>

<div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/5 ring-1 ring-white/10 px-2.5 py-1 text-[10px] text-white/70">
<svg className="lucide lucide-wand- w-3.5 h-3.5" data-lucide="wand-" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M15 4V2"></path><path d="M15 16v-2"></path><path d="M8 9h2"></path><path d="M20 9h2"></path><path d="M17.8 11.8 19 13"></path><path d="M15 9h.01"></path><path d="M17.8 6.2 19 5"></path><path d="m3 21 9-9"></path><path d="M12.2 6.2 11 5"></path></svg>
<span>Ligatures</span>
<span className="w-1.5 h-1.5 rounded-full bg-purple-500/60"></span>
</div>
<div className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white/5 ring-1 ring-white/10 px-2.5 py-1 text-[10px] text-white/70">
<svg className="lucide lucide-type w-3.5 h-3.5" data-lucide="type" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16"></path><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"></path><path d="M9 20h6"></path></svg>
<span>Optical</span>
<span className="px-1.5 py-0.5 rounded bg-white/10 text-white/80 text-[9px]">Auto</span>
</div>
</div>
<div className="relative">
<div className="flex items-center justify-between mb-4 text-white/80">
<svg className="lucide lucide-x w-4 h-4 text-white/50" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<div className="rounded-2xl bg-black/30 ring-1 ring-white/10 p-4 mb-4">
<div className="h-28 rounded-xl bg-neutral-800 ring-1 ring-white/10 flex items-center justify-center text-3xl text-white tracking-[0.3em]">
              A U R A
            </div>
<div className="mt-3 flex items-center gap-2 px-3 py-2 rounded-lg bg-black/30 ring-1 ring-white/10">
<svg className="lucide lucide-search w-4 h-4 text-white/60" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="text-sm text-white/50">Search fonts…</span>
</div>
</div>
<div className="rounded-2xl bg-black/30 ring-1 ring-white/10 p-4">
<p className="text-sm text-white/70 mb-3">Stylistic Sets</p>
<div className="space-y-2">
<div className="flex items-center justify-between text-sm">
<span className="text-white/70">Set One</span>
<div className="flex items-center gap-2">
<span className="px-2 py-1 rounded-md text-white/60 ring-1 ring-white/10">Off</span>
<span className="px-2 py-1 rounded-md bg-white/10 text-white ring-1 ring-white/10">On</span>
</div>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-white/70">Set Two</span>
<div className="items-center gap-2">
<span className="px-2 py-1 rounded-md bg-white/10 text-white ring-1 ring-white/10">On</span>
<span className="px-2 py-1 rounded-md text-white/60 ring-1 ring-white/10">Off</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-6">
<p className="text-sm text-white/70 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll"><span className="text-white font-medium">Component Library.</span> 480+ ready pieces with dark‑first states.</p>
<p className="text-sm text-white/70 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll"><span className="text-white font-medium">Motion Designer.</span> 60 fps interactions with natural easing.</p>
<p className="[animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll text-sm text-white/70"><span className="text-white font-medium">Type Engine.</span> Advanced features, alternates, and sets.</p>
</div>

</div>
</section><section className="lg:px-8 lg:py-24 sm:px-8 mt-20 mb-20 pt-20 pr-6 pb-20 pl-6">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-6 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
            Choose Your Plan
          </h2>
<p className="text-neutral-600 text-lg leading-relaxed max-w-2xl mx-auto [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
            Start building for free. Upgrade when you need more power and
            flexibility.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">

<div className="relative bg-white rounded-[32px] p-8 ring-1 ring-neutral-200 hover:ring-neutral-300 hover:shadow-lg transition-all [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<h3 className="text-xl font-medium text-neutral-900 mb-2">Free</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-neutral-900">$0</span>
<span className="text-neutral-500 text-sm">/month</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-700">
<svg className="text-green-600 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                3 projects
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-700">
<svg className="text-green-600 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Image to HTML (5/month)
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-700">
<svg className="text-green-600 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Basic templates
              </li>
</ul>
<a className="inline-flex items-center justify-center hover:bg-neutral-100 transition-colors font-medium text-neutral-900 bg-neutral-50 w-full rounded-full pt-3 pr-6 pb-3 pl-6 ring-1 ring-neutral-200" href="#">
              Get Started
            </a>
</div>

<div className="relative rounded-[32px] p-8 shadow-2xl scale-105 bg-neutral-900 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div className="absolute -top-4 left-1/2 -translate-x-1/2">
<div className="text-xs font-medium text-neutral-900 bg-white border-black/10 border rounded-full pt-1.5 pr-4 pb-1.5 pl-4">
                Most Popular
              </div>
</div>
<h3 className="text-xl font-medium text-white mb-2">Pro</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-white">$29</span>
<span className="text-white/60 text-sm">/month</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-white">
<svg className="text-purple-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Unlimited projects
              </li>
<li className="flex items-center gap-3 text-sm text-white">
<svg className="text-purple-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Unlimited AI conversions
              </li>
<li className="flex items-center gap-3 text-sm text-white">
<svg className="text-purple-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                All premium templates
              </li>
<li className="flex items-center gap-3 text-sm text-white">
<svg className="text-purple-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Visual Tailwind editor
              </li>
<li className="flex items-center gap-3 text-sm text-white">
<svg className="text-purple-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Priority support
              </li>
</ul>
<a className="inline-flex items-center justify-center hover:bg-white/90 transition-colors font-medium text-neutral-900 bg-white w-full rounded-full pt-3 pr-6 pb-3 pl-6" href="#">
              Upgrade to Pro
            </a>
</div>

<div className="relative bg-white rounded-[32px] p-8 ring-1 ring-neutral-200 hover:ring-neutral-300 hover:shadow-lg transition-all [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">
<h3 className="text-xl font-medium text-neutral-900 mb-2">Team</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-neutral-900">$99</span>
<span className="text-neutral-500 text-sm">/month</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-700">
<svg className="text-green-600 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Everything in Pro
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-700">
<svg className="text-green-600 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                5 team members
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-700">
<svg className="text-green-600 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Collaboration tools
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-700">
<svg className="text-green-600 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Advanced analytics
              </li>
</ul>
<a className="inline-flex items-center justify-center hover:bg-neutral-800 transition-colors font-medium text-white bg-neutral-900 w-full rounded-full pt-3 pr-6 pb-3 pl-6" href="#">
              Contact Sales
            </a>
</div>
</div>
</section><section className="lg:px-8 sm:px-8 overflow-hidden bg-neutral-950 mt-20 pt-24 pr-6 pb-24 pl-6 relative">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-purple-500/10 blur-3xl"></div>
<div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-blue-500/10 blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 gap-x-10 gap-y-10 items-center">

<div className="[animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.05] mb-10">
          Create and launch without limits
        </h2>
<div className="max-w-xl">
<h3 className="text-white text-xl font-semibold tracking-tight mb-3">
            Build without boundaries
          </h3>
<p className="text-white/70 sm:text-lg text-base leading-relaxed mb-8">
            Begin crafting directly in Nova. Our Design Studio empowers you to experiment
            freely, then deploy instantly without juggling multiple platforms.
          </p>
<div className="border-t border-white/10">
<div className="flex items-center justify-between py-4 border-b border-white/10">
<span className="text-white/80 text-lg">Deploy to Production</span>
<span className="text-white/40 text-sm">24+ templates</span>
</div>
<div className="flex items-center justify-between py-4 border-b border-white/10">
<span className="text-white/80 text-lg">Extend beyond web</span>
<span className="text-white/40 text-sm">15 connections</span>
</div>
<div className="flex items-center justify-between py-4">
<span className="text-white/80 text-lg">Unlimited and free</span>
<span className="text-white/40 text-sm">No payment needed</span>
</div>
</div>
</div>
</div>

<div className="relative [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div className="bg-neutral-900 ring-1 ring-white/10 rounded-[28px] overflow-hidden shadow-2xl">

<div className="flex pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-red-500/80"></span>
<span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
<span className="w-3 h-3 rounded-full bg-green-500/80"></span>
</div>
<div className="flex text-white/70 pr-4 gap-x-3 gap-y-3 items-center">
<svg className="lucide lucide-layout-grid w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
<svg className="lucide lucide-plus w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-columns-3 w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="columns-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
<svg className="lucide lucide-type w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="type" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16"></path><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"></path><path d="M9 20h6"></path></svg>
<svg className="lucide lucide-paintbrush w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="paintbrush" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m14.622 17.897-10.68-2.913"></path><path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"></path><path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"></path></svg>
<svg className="lucide lucide-images w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="images" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"></path><path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"></path><circle cx="13" cy="7" fill="currentColor" r="1"></circle><rect height="14" rx="2" width="14" x="8" y="2"></rect></svg>
</div>
</div>
<div className="h-[600px] sm:h-[760px] grid grid-cols-[260px_1fr]">

<aside className="bg-black/30 ring-1 ring-white/10 text-white/70 p-4">
<div className="flex items-center gap-2 text-xs mb-3">
<span className="px-2 py-1 rounded-md bg-white/10 text-white/80">Layouts</span>
<span className="px-2 py-1 rounded-md">Elements</span>
<span className="px-2 py-1 rounded-md">Media</span>
</div>
<div className="px-3 py-2 rounded-lg bg-black/30 ring-1 ring-white/10 text-xs text-white/50 mb-4">
                Find elements…
              </div>
<p className="text-xs uppercase tracking-wider text-white/50 mb-2">Creative</p>
<ul className="space-y-2 mb-5">
<li className="flex items-center justify-between px-2 py-2 rounded-lg bg-white/5 ring-1 ring-white/10">
<span className="text-sm text-white/80">Sections</span>
<span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white/70">18</span>
</li>
<li className="px-2 py-2 rounded-lg hover:bg-white/5 transition">Resources</li>
<li className="px-2 py-2 rounded-lg hover:bg-white/5 transition">Graphics</li>
<li className="px-2 py-2 rounded-lg hover:bg-white/5 transition">Brand Kit</li>
</ul>
<p className="text-xs uppercase tracking-wider text-white/50 mb-2">Views</p>
<ul className="space-y-2">
<li className="px-2 py-2 rounded-lg hover:bg-white/5 transition">Landing</li>
<li className="px-2 py-2 rounded-lg hover:bg-white/5 transition">Features</li>
<li className="px-2 py-2 rounded-lg hover:bg-white/5 transition">Contact</li>
</ul>
</aside>

<div className="relative bg-neutral-950">
<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '24px 24px, 24px 24px', backgroundPosition: '0 0, 0 0', opacity: '0.4'}}></div>
<div className="relative h-full overflow-auto p-6 sm:p-10">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 gap-x-6 gap-y-6">

<div className="col-span-1 sm:col-span-2 overflow-hidden bg-black/30 ring-white/10 ring-1 rounded-2xl">
<div className="flex items-center justify-between px-4 py-3">
<span className="text-xs text-white/70">Section 3</span>
<span className="text-[9px] px-2 py-0.5 rounded bg-white/10 text-white/70">Active</span>
</div>
<div className="pr-4 pb-4 pl-4">
<div className="rounded-xl ring-1 ring-white/10 overflow-hidden">
<div className="h-40 sm:h-48 bg-gradient-to-br from-purple-600/30 to-blue-600/30 flex items-center justify-center">
<img alt="Preview 2" className="h-40 sm:h-48 w-full object-cover" src="https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-4 py-3">
<p className="text-white text-sm font-medium">Modern gradient layout</p>
<p className="text-white/60 text-xs">Modified 5m ago</p>
</div>
</div>
</div>
</div>

<div className="col-span-1 sm:col-span-2 grid grid-cols-3 gap-4">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3">
<p className="text-white text-xl font-semibold tracking-tight">36</p>
<p className="text-white/60 text-xs">Blocks</p>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3">
<p className="text-white text-xl font-semibold tracking-tight">5x</p>
<p className="text-white/60 text-xs">Speed boost</p>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3">
<p className="text-white text-xl font-semibold tracking-tight">∞</p>
<p className="text-white/60 text-xs">Possibilities</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white mt-10">
<div className="relative overflow-hidden mt-40 mb-20">
<div className="relative z-10 lg:px-8 sm:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="max-w-4xl mx-auto text-center">
<h2 className="sm:text-6xl leading-[1.05] text-5xl font-medium text-neutral-900 tracking-tight mb-6 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
                Ready to build something amazing?
              </h2>
<p className="sm:text-lg text-base text-neutral-600 mb-8 leading-relaxed max-w-2xl mx-auto [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
                Join thousands of creators using Aura to build beautiful
                websites faster than ever. Start for free, no credit card
                required.
              </p>
<div className="flex items-center justify-center gap-4 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">
<a className="inline-flex items-center gap-2 hover:bg-neutral-800 transition-colors text-base font-medium text-white bg-neutral-900 rounded-full pt-4 pr-6 pb-4 pl-6 shadow-lg" href="#">
                  Start Building Free
                  <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center h-12 px-6 rounded-full text-base font-medium text-neutral-900 bg-white ring-1 ring-black/10 hover:bg-neutral-50 transition" href="#">
                  View Examples
                </a>
</div>
</div>
</div>

<footer className="sm:px-8 pt-16 pb-12">
<div className="relative overflow-hidden bg-white border border-black/5 rounded-3xl">
<div className="relative z-10 sm:p-8 md:p-12 pt-8 pr-4 pb-8 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 pb-12">
<div className="lg:col-span-4 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="mb-6 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="text-2xl font-semibold tracking-tight">
<a className="text-2xl font-semibold tracking-tight" href="/">
<img alt="Aura Logo" className="w-16 h-8 object-cover rounded-lg" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e3a958d0-eb5a-4389-b7a1-70fd7c03f839_1600w.png" style={{transition: 'outline 0.1s ease-in-out'}}/>
</a>
</div>
</div>
<p className="text-xl text-black/70 max-w-3xl mb-10 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
                      The AI-powered site builder that transforms how you
                      create. From screenshot to production in seconds.
                    </p>
<div className="sm:p-8 md:p-12 bg-neutral-900 border-black/5 border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-xl [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 text-purple-400 ring-1 ring-purple-500/20 px-3 py-2 text-sm">
<span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse"></span>
                            Join the community
                          </div>
<h4 className="text-2xl font-semibold text-white tracking-tight">
                            Stay updated
                          </h4>
<p className="text-base text-white/70">
                            Get the latest features, templates, and tips
                            delivered to your inbox.
                          </p>
<form className="flex gap-3 pt-2">
<input className="flex-1 h-12 px-4 rounded-xl border border-white/20 bg-black/20 text-sm placeholder-white/40 text-white outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40 backdrop-blur" placeholder="your.email@example.com" required="" type="email"/>
<button className="inline-flex items-center gap-2 h-12 px-5 rounded-xl ring-1 ring-white/20 text-sm text-white bg-black/20 hover:bg-white hover:text-black transition">
                              Subscribe
                            </button>
</form>
</div>
<div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
<div className="">
<h5 className="text-white/80 text-xs uppercase tracking-wider font-medium mb-4">
                              Product
                            </h5>
<ul className="space-y-3 text-base text-white/70">
<li>
<a className="hover:text-white transition" href="#features">
                                  Features
                                </a>
</li>
<li>
<a className="hover:text-white transition" href="#templates">
                                  Templates
                                </a>
</li>
<li>
<a className="hover:text-white transition" href="#pricing">
                                  Pricing
                                </a>
</li>
<li>
<a className="hover:text-white transition" href="#changelog">
                                  Changelog
                                </a>
</li>
</ul>
</div>
<div>
<h5 className="text-white/80 text-xs uppercase tracking-wider font-medium mb-4">
                              Resources
                            </h5>
<ul className="space-y-3 text-base text-white/70">
<li>
<a className="hover:text-white transition" href="#docs">
                                  Documentation
                                </a>
</li>
<li>
<a className="hover:text-white transition" href="#guides">
                                  Guides
                                </a>
</li>
<li>
<a className="hover:text-white transition" href="#api">
                                  API
                                </a>
</li>
<li>
<a className="hover:text-white transition" href="#support">
                                  Support
                                </a>
</li>
</ul>
</div>
<div>
<h5 className="text-white/80 text-xs uppercase tracking-wider font-medium mb-4">
                              Company
                            </h5>
<ul className="space-y-3 text-base text-white/70">
<li>
<a className="hover:text-white transition" href="#about">
                                  About
                                </a>
</li>
<li>
<a className="hover:text-white transition" href="#blog">
                                  Blog
                                </a>
</li>
<li>
<a className="hover:text-white transition" href="#careers">
                                  Careers
                                </a>
</li>
<li>
<a className="hover:text-white transition" href="#contact">
                                  Contact
                                </a>
</li>
</ul>
</div>
</div>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div className="flex items-center gap-4 text-base text-black/60">
<span>© 2025 Aura</span>
<span className="hidden sm:inline text-black/20">|</span>
<a className="hover:text-black transition" href="#privacy">
                          Privacy
                        </a>
<span className="text-black/20">/</span>
<a className="hover:text-black transition" href="#terms">
                          Terms
                        </a>
</div>
<div className="flex items-center gap-3">
<a aria-label="Twitter/X" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 text-black/70 hover:text-black hover:bg-black/10 transition" href="https://twitter.com" rel="noreferrer" target="_blank">
<svg fill="currentColor" height="20" viewbox="0 0 16 16" width="20">
<path d="M12.6 1.7h2.1l-4.6 5.2 5.4 7.4h-4.2L8.9 9.8l-3.9 4.5H2.9l4.9-5.6L2.6 1.7h4.3l3 4.1 2.7-3.1z"></path>
</svg>
</a>
<a aria-label="GitHub" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 text-black/70 hover:text-black hover:bg-black/10 transition" href="https://github.com" rel="noreferrer" target="_blank">
<svg fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
</svg>
</a>
<a aria-label="Discord" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 text-black/70 hover:text-black hover:bg-black/10 transition" href="https://discord.com" rel="noreferrer" target="_blank">
<svg fill="currentColor" height="20" viewbox="0 0 24 24" width="20">
<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</footer>
</div>
</section>
</main>


    </>
  );
}
