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



            (function() {
                const toggleBtn = document.getElementById('mobile-menu-toggle');
                const mobileMenu = document.getElementById('mobile-menu');
                const menuIcon = toggleBtn.querySelector('.menu-icon');
                const closeIcon = toggleBtn.querySelector('.close-icon');
                
                if (toggleBtn && mobileMenu && menuIcon && closeIcon) {
                    toggleBtn.addEventListener('click', function() {
                        const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
                        
                        if (isExpanded) {
                            mobileMenu.style.maxHeight = '0';
                            setTimeout(() => {
                                mobileMenu.classList.add('hidden');
                            }, 300);
                            toggleBtn.setAttribute('aria-expanded', 'false');
                            menuIcon.classList.remove('hidden');
                            closeIcon.classList.add('hidden');
                        } else {
                            mobileMenu.classList.remove('hidden');
                            setTimeout(() => {
                                mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
                            }, 10);
                            toggleBtn.setAttribute('aria-expanded', 'true');
                            menuIcon.classList.add('hidden');
                            closeIcon.classList.remove('hidden');
                        }
                    });
                }
            })();
        


        function switchTab(index) {
          const buttons = document.querySelectorAll('.tab-button');
          const line = document.getElementById('gradient-line');
          
          // Update button styles
          buttons.forEach((btn, i) => {
            const iconSpan = btn.querySelector('span:first-child');
            if (i === index) {
              btn.classList.remove('bg-white/5', 'text-white/80');
              btn.classList.add('bg-white/10', 'text-white/90');
              iconSpan.classList.remove('bg-white/5', 'ring-white/15');
              iconSpan.classList.add('bg-gradient-to-br', 'from-indigo-500', 'to-violet-500', 'ring-white/20');
            } else {
              btn.classList.remove('bg-white/10', 'text-white/90');
              btn.classList.add('bg-white/5', 'text-white/80');
              iconSpan.classList.remove('bg-gradient-to-br', 'from-indigo-500', 'to-violet-500', 'ring-white/20');
              iconSpan.classList.add('bg-white/5', 'ring-white/15');
            }
          });
          
          // Calculate position and width for gradient line
          const activeButton = buttons[index];
          const container = activeButton.parentElement;
          const containerRect = container.getBoundingClientRect();
          const buttonRect = activeButton.getBoundingClientRect();
          
          const left = buttonRect.left - containerRect.left + 12;
          const width = buttonRect.width - 24;
          
          line.style.left = left + 'px';
          line.style.width = width + 'px';
        }
        
        // Initialize on load
        if (typeof window !== 'undefined') {
          window.addEventListener('load', () => {
            switchTab(0);
          });
        }
      


      (function () {
            // Scope to THIS section reliably (works in Aura, Framer, plain HTML)
            const root = document.currentScript.closest('section');
            if (!root) return;
      
            const track = root.querySelector('.testimonial-track');
            if (!track) return;
      
            const slides = Array.from(track.children);
            const prevBtn = root.querySelector('.testimonial-prev');
            const nextBtn = root.querySelector('.testimonial-next');
            const dots = Array.from(root.querySelectorAll('.testimonial-dot'));
      
            let index = 0;
            let slideWidth = 0;
      
            function measure() {
              // Width is the visible viewport (the overflow-hidden parent)
              const viewport = track.parentElement;
              slideWidth = viewport.clientWidth;
      
              // Force each slide to match the viewport width (safeguard)
              slides.forEach(s => (s.style.width = slideWidth + 'px'));
      
              update(true);
            }
      
            function update(noAnim = false) {
              if (noAnim) {
                track.style.transition = 'none';
              } else {
                // keep your Tailwind transition but ensure inline style exists for safety
                track.style.transition = 'transform 500ms cubic-bezier(0.22,1,0.36,1)';
              }
      
              track.style.transform = `translateX(${-index * slideWidth}px)`;
      
              if (noAnim) {
                // force reflow then restore transition
                // eslint-disable-next-line no-unused-expressions
                track.offsetHeight;
                track.style.transition = '';
              }
      
              // dots
              dots.forEach((d, i) => {
                d.classList.toggle('bg-white/40', i === index);
                d.classList.toggle('bg-white/20', i !== index);
              });
      
              // buttons
              if (prevBtn) {
                prevBtn.classList.toggle('opacity-50', index === 0);
                prevBtn.classList.toggle('pointer-events-none', index === 0);
              }
              if (nextBtn) {
                const atEnd = index === slides.length - 1;
                nextBtn.classList.toggle('opacity-50', atEnd);
                nextBtn.classList.toggle('pointer-events-none', atEnd);
              }
            }
      
            function goTo(i) {
              index = Math.max(0, Math.min(slides.length - 1, i));
              update();
            }
      
            // events
            prevBtn && prevBtn.addEventListener('click', () => goTo(index - 1));
            nextBtn && nextBtn.addEventListener('click', () => goTo(index + 1));
            dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));
      
            // resize (use ResizeObserver for accuracy inside builders)
            const ro = new ResizeObserver(measure);
            ro.observe(track.parentElement);
            window.addEventListener('orientationchange', measure, { passive: true });
      
            // keyboard (section is focusable via tabindex="0")
            root.addEventListener('keydown', (e) => {
              if (e.key === 'ArrowRight') goTo(index + 1);
              if (e.key === 'ArrowLeft') goTo(index - 1);
            });
      
            // init
            measure();
      
            // Lucide refresh (optional)
            if (window.lucide && typeof window.lucide.createIcons === 'function') {
              window.lucide.createIcons();
            }
          })();
    


      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) window.lucide.createIcons();
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
      <div className="absolute top-0 w-full h-screen -z-10 opacity-50 bg-cover bg-center" data-alpha-mask="10" id="aura-image" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/aae20958-00a9-4b64-a0f2-0714460558de_3840w.webp")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 10%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 10%, transparent)'}}></div>


<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 via-transparent to-transparent"></div>
<div className="absolute -top-32 right-[-10%] h-[42rem] w-[42rem] rounded-full blur-3xl opacity-30" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(99,102,241,0.35) 0%, rgba(99,102,241,0.08) 45%, rgba(10,11,16,0) 70%)'}}></div>
<div className="absolute -bottom-48 left-[-10%] h-[38rem] w-[38rem] rounded-full blur-3xl opacity-30" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(56,189,248,0.30) 0%, rgba(56,189,248,0.06) 45%, rgba(10,11,16,0) 70%)'}}></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50">
<nav className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-5 pr-4 pb-5 pl-4">
<div className="flex [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)] bg-white/5 border-white/10 border rounded-2xl px-4 py-3 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-3">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[120px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/555a1c96-de26-4341-934a-9227b9337b64_1600w.png)] bg-cover rounded-xl" href="#"></a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Docs</a>
<a className="hover:text-white transition-colors" href="#">Changelog</a>
</div>
<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-white/90 hover:bg-white/10 transition">
<svg className="lucide lucide-github h-4 w-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</button>
<button aria-expanded="false" aria-label="Menu" className="md:hidden inline-flex hover:bg-white/10 transition text-white/90 bg-white/5 border-white/10 border rounded-xl pt-2 pr-3 pb-2 pl-3 items-center justify-center" id="mobile-menu-toggle">
<svg className="h-5 w-5 menu-icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
<svg className="h-5 w-5 close-icon hidden" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>
</div>
<div className="md:hidden hidden overflow-hidden transition-all duration-300 ease-out" id="mobile-menu" style={{maxHeight: '0'}}>
<div className="mt-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4">
<div className="flex flex-col gap-3">
<a className="text-sm text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5" href="#">Features</a>
<a className="text-sm text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5" href="#">Pricing</a>
<a className="text-sm text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5" href="#">Docs</a>
<a className="text-sm text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5" href="#">Changelog</a>
<div className="h-px bg-white/10 my-2"></div>
<button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-white/90 hover:bg-white/10 transition w-full justify-center">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                        GitHub
                    </button>
</div>
</div>
</div>

</nav>
</header>

<main className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative pt-20">
<section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 md:py-14 pt-10 pb-10 relative gap-x-10 gap-y-10 items-center">

<div className="relative">

<div className="mb-5 flex items-center gap-3">
<div className="flex -space-x-2">
<img alt="User 1" className="w-8 h-8 object-cover ring-zinc-50/20 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/17d18233-806b-40ae-aeda-9251f822ee0a_320w.webp"/>
<img alt="User 2" className="w-8 h-8 object-cover ring-zinc-50/20 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2f70140f-4f5d-4ce1-bec2-b36510d07e52_320w.webp"/>
<img alt="User 3" className="w-8 h-8 object-cover rounded-full ring-zinc-50/20 ring-2" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3e3e1091-f8e8-4022-a02a-fa37a35c59a5_320w.jpg"/>
</div>
<p className="text-sm text-slate-300">3.7M builders worldwide</p>
</div>
<h1 className="sm:text-5xl lg:text-6xl xl:text-7xl text-4xl font-semibold text-white tracking-tight" style={{maskImage: 'linear-gradient(100deg, transparent, black 50%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(100deg, transparent, black 50%, black 100%, transparent)'}}>
            Your AI partner for every workflow
          </h1>
<p className="mt-4 max-w-xl text-base sm:text-lg text-slate-300">
            Orbyt streamlines operations, customer engagement, and content
            creation—adapting to your team's unique processes in real-time.
          </p>

<div className="flex flex-col sm:flex-row mt-7 gap-x-3 gap-y-3">
<a aria-label="Start Free" className="group inline-flex items-center gap-3 transition-colors duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 sm:w-auto text-white/90 bg-black w-full max-w-fit rounded-3xl pt-1 pr-1 pb-1 pl-1 relative" href="#" style={{boxShadow: 'inset 0 1px 0 rgba(56, 189, 248, 0.4)'}}>

<span aria-hidden="true" className="pointer-events-none absolute -inset-1 rounded-full opacity-0 blur-xl transition duration-500 group-hover:opacity-100" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(56,189,248,.55), rgba(56,189,248,0) 70%)'}}></span>

<span className="isolate inline-flex items-center gap-3 bg-gradient-to-br from-blue-500/0 via-blue-500/10 to-blue-500/0 rounded-3xl pt-3 pr-6 pb-3 pl-6 relative">

<span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[999px] opacity-70 [box-shadow:inset_0_1px_0_rgba(255,255,255,.08),inset_0_-6px_20px_rgba(0,0,0,.5)]"></span>

<span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[999px]">

<style>
          @keyframes sparkle {
            0%, 100% { opacity: 0; transform: scale(0); }
            50% { opacity: 1; transform: scale(1); }
          }
          .sparkle {
            position: absolute;
            width: 3px;
            height: 3px;
            background: white;
            border-radius: 50%;
            opacity: 0;
            animation: sparkle 3s ease-in-out infinite;
          }
          .group:hover .sparkle {
            animation: sparkle 2s ease-in-out infinite;
          }
        </style>
<span className="sparkle left-4 top-2" style={{animationDelay: '0s'}}></span>
<span className="sparkle left-10 top-6" style={{animationDelay: '0.3s'}}></span>
<span className="sparkle left-20 top-3" style={{animationDelay: '0.6s'}}></span>
<span className="sparkle left-28 top-7" style={{animationDelay: '0.9s'}}></span>
<span className="sparkle right-8 top-4" style={{animationDelay: '1.2s'}}></span>
<span className="sparkle right-16 top-8" style={{animationDelay: '1.5s'}}></span>
</span>

<span className="relative z-10 font-medium tracking-[-0.01em]">Start Free</span>
<svg aria-hidden="true" className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="currentColor" viewbox="0 0 20 20">
<path d="M11.293 3.293a1 1 0 011.414 0l5.0 5.0a1 1 0 010 1.414l-5.0 5.0a1 1 0 01-1.414-1.414L14.586 11H2a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z"></path>
</svg>
</span>
</a>
<a className="inline-flex items-center justify-center gap-2 hover:bg-white/10 transition sm:w-auto text-sm font-medium text-white/90 bg-white/5 w-full max-w-fit rounded-full pt-3 pr-8 pb-3 pl-8 top-0 right-8 left-8 backdrop-blur-md [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]" href="#">
              
              Book a demo
            
                
                
            
                
                
            </a>
</div>

<div className="flex flex-wrap text-sm text-slate-300 mt-8 gap-x-6 gap-y-6 items-center">
<div className="flex items-center gap-2">
<svg className="h-5 w-5 text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="">ISO-27001 ready</span>
</div>
<div className="flex items-center gap-2">
<svg className="h-5 w-5 text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
<span className="">Setup in 60 seconds</span>
</div>
<div className="flex items-center gap-2">
<svg className="h-5 w-5 text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="">Privacy-first</span>
</div>
</div>
</div>

<div className="relative">

<div className="absolute -right-8 top-32 hidden lg:block z-50" style={{animation: 'float 4s ease-in-out infinite', animationDelay: '0.5s'}}>
<div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md shadow-lg shadow-indigo-500/20">
<svg className="h-6 w-6 text-indigo-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
</path>
<polyline points="3.29 7 12 12 20.71 7"></polyline>
<line x1="12" x2="12" y1="22" y2="12"></line>
</svg>
</div>
</div>
<div className="absolute -left-16 bottom-20 hidden lg:block" style={{animation: 'float 3.5s ease-in-out infinite', animationDelay: '1s'}}>
</div>
<style>
            @keyframes float {
              0%, 100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-20px);
              }
            }
          </style>

<div className="w-full max-w-xl mr-auto ml-auto relative" style={{animation: 'floatCard 6s ease-in-out infinite'}}>
<style className="">
              @keyframes floatCard {
                0%, 100% {
                  transform: translateY(0px);
                }
                50% {
                  transform: translateY(-15px);
                }
              }
            </style>

<div className="sm:px-6 shadow-black/40 [--fx-filter:blur(20px)_liquid-glass(5,10)_saturate(1.05)_noise(0.5,1,0)_contrast(2)] bg-white/5 rounded-3xl pt-4 pr-4 pb-5 pl-4 relative shadow backdrop-blur-md">

<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-white/90">
<svg className="h-4 w-4 text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect className="" height="16" rx="2" width="16" x="4" y="4"></rect><path d="M9 9h.01"></path><path d="M15 9h.01"></path><path d="M9 15h6"></path></svg>
<span className="">Devgent AI 4.0</span>
<svg className="lucide lucide-chevron-down h-3.5 w-3.5 opacity-80" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<button className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-white/80 hover:bg-white/10 transition">
<svg className="lucide lucide-clock h-4 w-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
    History
  </button>
</div>

<div className="mt-4">
<div className="rounded-2xl relative [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="shadow-indigo-500/30 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)_contrast(0.6)] rounded-2xl pt-[1px] pr-[1px] pb-[1px] pl-[1px] shadow-sm">
<div className="bg-gradient-to-br from-white/0 via-white/10 to-white/0 rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-2xl" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px'}}>
<div className="flex gap-3 gap-x-3 gap-y-3 items-start">
<div className="mt-0.5">
<svg className="w-5 h-5 text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white">
                            Collaborate with Orbyt in real-time
                          </p>
<p className="mt-1 text-xs text-white/80">
                            Share your goals and context to unlock powerful
                            automation. Start with pre-built workflows or
                            customize your own.
                          </p>
</div>
<button className="rounded-lg p-1 hover:bg-white/10 transition">
<svg className="lucide lucide-x h-4 w-4 text-white/80" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-4 rounded-2xl border border-white/10 bg-[#0d0f16]/70">
<div className="px-4 pt-4">
<div className="flex items-start gap-2">
<div className="h-8 w-8 shrink-0 overflow-hidden rounded-full ring-1 ring-white/15">
<img alt="User" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/17d18233-806b-40ae-aeda-9251f822ee0a_320w.webp"/>
</div>
<div className="flex-1">
<div aria-label="Message Orbyt" className="min-h-[56px] placeholder-white/40 outline-none focus:ring-indigo-400/40 text-sm text-white/90 bg-white/5 w-full rounded-xl ring-white/10 ring-1 pt-3 pr-3.5 pb-3 pl-3.5" contenteditable="true" role="textbox" spellcheck="false">
                        Draft a product update summarizing this week's new
                        features and fixes…
                      </div>
</div>
</div>
</div>
<div className="mt-3 flex items-center justify-between px-4 pb-4">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-white/80 hover:bg-white/10 transition">
<svg className="w-4 h-4 text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                      Attach
                    </button>
<button className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-white/80 hover:bg-white/10 transition">
<svg className="h-4 w-4 text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
                      Image
                    </button>
</div>
<div className="flex items-center gap-2">
<span className="text-[11px] text-white/60 hidden sm:inline">
                      Press Enter to send
                    </span>
<button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-3.5 py-2 text-xs font-medium text-white shadow-lg shadow-indigo-500/30">
<svg className="h-4 w-4 text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                      Send
                    </button>
</div>
</div>
</div>

<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
<div className="flex items-center gap-2">
<svg className="w-4 h-4 text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
<p className="text-xs text-white/80">
                      Workflow templates • 240+ ready to use
                    </p>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="16" r="1"></circle><rect height="12" rx="2" width="18" x="3" y="10"></rect><path d="M7 10V7a5 5 0 0 1 10 0v3"></path></svg>
<p className="text-xs text-white/80">
                      SSO &amp; role permissions
                    </p>
</div>
</div>
</div>
</div>

<div className="-right-3 -top-6 hidden md:block absolute">
<div className="shadow-black/30 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)] bg-white/5 border-white/10 border rounded-2xl pt-2 pr-3 pb-2 pl-3 shadow-lg backdrop-blur-md">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
<p className="text-xs text-white/80">
                    Up to 15x faster execution
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pb-14">
<div className="max-w-7xl mr-auto ml-auto pt-40 pb-0">
<div className="shadow-black/30 bg-white/5 border-white/10 border rounded-3xl pt-12 pr-4 pb-12 pl-4 shadow-2xl backdrop-blur-sm">
<div className="flex gap-4 gap-x-4 gap-y-4 items-stretch">
<div className="hidden md:flex rounded-xl pt-6 pr-6 pb-6 pl-6 items-center justify-center">
<p className="sm:text-xl leading-snug text-lg font-medium text-white/90 tracking-tight">Trusted by 4500+ <br/>
companies worldwide</p>
</div>
<div className="flex-1 overflow-hidden shadow-black/30 bg-[#0d0f16]/70 border-white/10 border rounded-2xl pt-8 pr-4 pb-8 pl-4 shadow-lg" style={{maskImage: 'linear-gradient(90deg, transparent, black 20%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 20%, black 70%, transparent)'}}>
<style>
    @keyframes scrollLogos {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    .logo-scroll-container {
      display: flex;
      animation: scrollLogos 20s linear infinite;
      will-change: transform;
    }
    .logo-scroll-container:hover {
      animation-play-state: paused;
    }
  </style>
<div className="logo-scroll-container">
<div className="flex gap-4 shrink-0">
<div className="rounded-2xl border border-white/10 bg-[#0d0f16]/70 p-5 shadow-lg shadow-black/30 w-64">
<div className="flex items-center gap-3">
<div className="rounded-xl border border-white/10 bg-white/5 p-2">
<svg className="h-5 w-5 text-white/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" x2="12" y1="22" y2="12"></line></svg>
</div>
<span className="text-base font-semibold tracking-tight text-white">TechCube</span>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-[#0d0f16]/70 p-5 shadow-lg shadow-black/30 w-64">
<div className="flex items-center gap-3">
<div className="rounded-xl border border-white/10 bg-white/5 p-2">
<svg className="h-5 w-5 text-white/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
</div>
<span className="text-base font-semibold tracking-tight text-white">GlobalNet</span>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-[#0d0f16]/70 p-5 shadow-lg shadow-black/30 w-64">
<div className="flex items-center gap-3">
<div className="rounded-xl border border-white/10 bg-white/5 p-2">
<svg className="h-5 w-5 text-white/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<span className="text-base font-semibold tracking-tight text-white">PayFlow</span>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-[#0d0f16]/70 p-5 shadow-lg shadow-black/30 w-64">
<div className="flex items-center gap-3">
<div className="rounded-xl border border-white/10 bg-white/5 p-2">
<svg className="h-5 w-5 text-white/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<span className="text-base font-semibold tracking-tight text-white">BoltCloud</span>
</div>
</div>
</div>
<div className="flex gap-4 shrink-0">
<div className="rounded-2xl border border-white/10 bg-[#0d0f16]/70 p-5 shadow-lg shadow-black/30 w-64">
<div className="flex items-center gap-3">
<div className="rounded-xl border border-white/10 bg-white/5 p-2">
<svg className="h-5 w-5 text-white/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" x2="12" y1="22" y2="12"></line></svg>
</div>
<span className="text-base font-semibold tracking-tight text-white">TechCube</span>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-[#0d0f16]/70 p-5 shadow-lg shadow-black/30 w-64">
<div className="flex items-center gap-3">
<div className="rounded-xl border border-white/10 bg-white/5 p-2">
<svg className="h-5 w-5 text-white/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
</div>
<span className="text-base font-semibold tracking-tight text-white">GlobalNet</span>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-[#0d0f16]/70 p-5 shadow-lg shadow-black/30 w-64">
<div className="flex items-center gap-3">
<div className="rounded-xl border border-white/10 bg-white/5 p-2">
<svg className="h-5 w-5 text-white/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<span className="text-base font-semibold tracking-tight text-white">PayFlow</span>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-[#0d0f16]/70 p-5 shadow-lg shadow-black/30 w-64">
<div className="flex items-center gap-3">
<div className="rounded-xl border border-white/10 bg-white/5 p-2">
<svg className="h-5 w-5 text-white/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<span className="text-base font-semibold tracking-tight text-white">BoltCloud</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="shadow-black/30 bg-white/5 border-white/10 border rounded-3xl pt-0 pr-8 pb-0 pl-8 shadow-2xl backdrop-blur-sm">
<div className="max-w-7xl rounded-3xl mr-auto ml-auto pt-12 pb-12">

<div className="sm:mb-10 text-center mb-8">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-white/80 mx-auto">
<svg className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="">Features</span>
</div>
<h2 className="sm:text-5xl lg:text-6xl text-4xl font-semibold text-white tracking-tight mt-3">What makes our AI chat truly unique?</h2>
</div>

<div className="flex justify-center">
<div className="relative">
<div className="inline-flex flex-wrap items-center gap-2 rounded-[24px] border border-white/10 bg-white/5 px-2.5 py-2">

<button className="tab-button relative inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 transition" onclick="switchTab(0)">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 ring-1 ring-white/20">
<svg className="lucide lucide-calendar h-3.5 w-3.5 text-white" data-lucide="calendar" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</span>
<span>Meeting Assistant</span>
</button>

<button className="tab-button relative inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition" onclick="switchTab(1)">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/15">
<svg className="lucide lucide-git-branch h-3.5 w-3.5 text-white/80" data-lucide="git-branch" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
</span>
<span className="">Scheduler &amp; Lead Router</span>
</button>

<button className="tab-button relative inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition" onclick="switchTab(2)">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/15">
<svg className="lucide lucide-brain h-3.5 w-3.5 text-white/80" data"="" height="16" none"="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox=" fill=" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path className="" d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
</span>
<span className="">Conversation Insights</span>
</button>

<button className="tab-button relative inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition" onclick="switchTab(3)">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/15">
<svg className="lucide lucide-trending-up h-3.5 w-3.5 text-white/80" data-lucide="trending-up" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</span>
<span className="">Revenue Performance</span>
</button>
</div>

<div className="pointer-events-none absolute -bottom-2 h-0.5 rounded-full transition-all duration-300 ease-out" id="gradient-line" style={{background: 'linear-gradient(90deg, rgba(99, 102, 241, 0) 0%, rgba(99, 102, 241, 0.8) 25%, rgba(217, 70, 239, 0.8) 75%, rgba(217, 70, 239, 0) 100%)', left: '23px', width: '158.32px'}}></div>
<div className="pointer-events-none absolute left-0 right-0 -bottom-2 h-px" style={{background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(148,163,184,.15) 20%, rgba(148,163,184,.15) 80%, rgba(255,255,255,0) 100%)'}}></div>
</div>

</div>

<div className="sm:mt-10 sm:p-10 border-white/10 border rounded-[28px] mt-8 pt-6 pr-6 pb-6 pl-6 backdrop-blur-sm">
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-x-8 gap-y-8 items-start">

<div className="">
<h3 className="sm:text-5xl leading-snug text-4xl font-semibold text-white tracking-tight">Smarter, faster scheduling <span className="xl:bg-clip-text xl:text-transparent bg-gradient-to-br from-gray-500/100 to-gray-500/50">made effortless</span></h3>
<p className="sm:text-lg text-base text-slate-300 mt-4">Our assistant doesn’t just replyit coordinates.
Whether you’re chatting on a call, in-app, or through your calendar, it automatically finds the best times, manages reschedules, and keeps everything synced without lifting a finger.</p>

<div className="mt-6 flex flex-col gap-4">
<div className="inline-flex sm:w-[540px] text-sm text-slate-200 w-full max-w-full border-white/10 border rounded-2xl pt-3 pr-4 pb-3 pl-4 shadow-sm gap-x-3 gap-y-3 items-center" style={{boxShadow: 'inset 0 -12px 24px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255,255,255,0.04)'}}>
<span className="inline-flex items-center justify-center shrink-0 w-10 h-10 ring-white/10 ring-1 rounded-xl">
<svg className="lucide lucide-globe h-4.5 w-4.5 text-white/90" data-lucide="globe" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</span>
<span className="font-medium tracking-[-0.01em]">Instant meeting setup — automatically detects context and books at the right time.</span>
</div>
<div className="inline-flex sm:w-[540px] text-sm text-slate-200 w-full max-w-full border-white/10 border rounded-2xl pt-3 pr-4 pb-3 pl-4 shadow-sm gap-x-3 gap-y-3 items-center" style={{boxShadow: 'inset 0 -12px 24px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255,255,255,0.04)'}}>
<span className="inline-flex items-center justify-center shrink-0 w-10 h-10 ring-white/10 ring-1 rounded-xl">
<svg className="lucide lucide-smile" data-icon-replaced="true" data-icon-set="lucide" data-lucide="smile" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</span>
<span className="font-medium tracking-[-0.01em]">Smart suggestions — adapts to your preferences and past conversations.</span>
</div>
</div>
</div>

<div className="relative">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0f16]/70 shadow-lg aspect-[4/3]">

<div className="opacity-30 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'linear-gradient(0deg, rgba(255,255,255,0.06) 1px, rgba(0,0,0,0) 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, rgba(0,0,0,0) 1px)', backgroundSize: '24px 24px, 24px 24px'}}></div>

<div className="absolute top-10 right-10 bottom-16 left-10">
<div className="absolute inset-x-6 top-2 h-[82%] rounded-[28px] border border-white/10 bg-white/[0.03]"></div>
<div className="bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/10 to-white/0 h-[84%] border-white/10 border rounded-[28px] absolute top-5 right-4 left-4"></div>
<div className="shadow-black/30 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)] bg-gradient-to-br from-white/10 via-white/0 to-white/10 h-[86%] border-white/15 border rounded-[28px] absolute top-8 right-2 left-2 backdrop-blur-md" style={{boxShadow: '0 10px 30px rgba(0,0,0,0.35) inset'}}>

<div className="bg-white/10 h-4 rounded-lg absolute top-8 right-6 left-6"></div>
<div className="bg-white/10 h-4 rounded-lg absolute top-8 right-6 left-6"></div><div className="bg-white/10 h-4 rounded-lg absolute top-8 right-6 left-6"></div>
<div className="h-3.5 bg-white/10 rounded-lg my-16 absolute top-0 right-24 bottom-12 left-6"></div>
<div className="bg-white/10 h-12 rounded-xl absolute top-28 right-32 left-6"></div>
</div>
</div>

<div className="flex z-0 absolute right-16 bottom-6 left-16 gap-x-3 gap-y-3 items-center justify-center">
<img alt="Avatar 1" className="transition-all duration-300 hover:w-16 hover:h-16 hover:ring-white/25 hover:z-10 w-8 h-8 object-cover rounded-full ring-white/20 ring-1" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/66cda8d4-dd4e-44ee-8ef9-cba94340ba05_3840w.webp"/><img alt="Avatar 1" className="transition-all duration-300 hover:w-16 hover:h-16 hover:ring-white/25 hover:z-10 w-8 h-8 object-cover ring-white/20 ring-1 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2024b6bd-7dee-4c3c-8e15-adfeaab5e3ee_3840w.webp"/><img alt="Avatar 1" className="transition-all duration-300 hover:w-16 hover:h-16 hover:ring-white/25 hover:z-10 w-8 h-8 object-cover ring-white/20 ring-1 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8fb04a14-10bb-42af-8464-ab91b4a2ab2f_320w.webp"/>
<img alt="Avatar 2" className="transition-all duration-300 z-10 w-16 h-16 object-cover ring-white/25 ring-1 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/077ae66a-62bc-4bf7-afa2-ff734313b35c_3840w.webp"/>
<img alt="Avatar 3" className="transition-all duration-300 hover:w-16 hover:h-16 hover:ring-white/25 hover:z-10 w-8 h-8 object-cover ring-white/20 ring-1 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/39e15168-9f77-4837-9a4b-89c74b8bc38b_3840w.webp"/><img alt="Avatar 3" className="transition-all duration-300 hover:w-16 hover:h-16 hover:ring-white/25 hover:z-10 w-8 h-8 object-cover ring-white/20 ring-1 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8af5e860-0834-42ee-9c28-7a688c9c1907_3840w.webp"/><img alt="Avatar 3" className="transition-all duration-300 hover:w-16 hover:h-16 hover:ring-white/25 hover:z-10 w-8 h-8 object-cover rounded-full ring-white/20 ring-1" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4eb1be61-53d3-409e-9285-97c3c2f64161_320w.webp"/>
</div>


<div className="pointer-events-none absolute -inset-1 rounded-2xl opacity-60 blur-xl" style={{background: 'radial-gradient(60% 60% at 70% 20%, rgba(99,102,241,.22), rgba(217,70,239,0) 70%)'}}></div>
</div>
</div>
</div>
</div>
</div>
</section><section className="pb-0 relative" style={{minHeight: '2400px'}}>
<div className="shadow-black/30 bg-white/5 border-white/10 border rounded-3xl mt-12 mb-20 pt-12 pr-8 pb-12 pl-8 shadow-2xl backdrop-blur-sm">

<div className="text-center mb-8 sm:mb-10 top-4 z-50">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-white/80 mx-auto backdrop-blur-md">
<svg className="h-3.5 w-3.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle className="" cx="7" cy="7" r="3"></circle></svg>
<span>How it works</span>
</div>
<h2 className="sm:text-5xl lg:text-6xl text-4xl font-semibold text-white tracking-tight mt-3">How our AI assistant helps you in just 3 simple steps</h2>
</div>

<div className="relative" style={{minHeight: '2400px'}}>

<div className="sticky mb-8 top-32">
<div className="shadow-black/30 sm:pd2e32]/95 border-white/10 border rounded-3xl pt-4 pr-4 pb-4 pl-4 shadow-2xl backdrop-blur-sm">
<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 gap-8 items-center">
<div className="lg:col-span-2 flex items-center justify-center">
<span className="text-[180px] leading-none font-semibold tracking-tight text-white/5 select-none">1</span>
</div>
<div className="lg:col-span-5">
<h3 className="sm:text-3xl text-2xl font-semibold text-white tracking-tight">Start the conversation</h3>
<p className="sm:text-lg text-base text-slate-300 mt-4">Simply type your question, request, or idea — no complicated syntax or commands needed.
Whether it’s “Draft a follow-up email,” “Summarize my meeting notes,” or “Plan this week’s tasks,” the assistant understands your intent instantly.</p>
<div className="mt-6 flex flex-col gap-4">
<div className="inline-flex text-sm text-slate-200 w-full max-w-full border-white/10 border rounded-2xl px-4 py-3 shadow-sm gap-3 items-center" style={{boxShadow: 'inset 0 -12px 24px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255,255,255,0.04)'}}>
<span className="inline-flex items-center justify-center shrink-0 w-10 h-10 ring-white/10 ring-1 rounded-xl">
<svg className="h-4.5 w-4.5 text-white/90" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</span>
<span className="font-medium tracking-[-0.01em]">Type naturally — it understands plain language like a real teammate.</span>
</div>
<div className="inline-flex text-sm text-slate-200 w-full max-w-full border-white/10 border rounded-2xl px-4 py-3 shadow-sm gap-3 items-center" style={{boxShadow: 'inset 0 -12px 24px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255,255,255,0.04)'}}>
<span className="inline-flex items-center justify-center shrink-0 w-10 h-10 ring-white/10 ring-1 rounded-xl">
<svg className="h-4.5 w-4.5 text-white/90" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"></path><path d="M2 6h4"></path><path d="M2 10h4"></path><path d="M2 14h4"></path><path d="M2 18h4"></path><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path></svg>
</span>
<span className="font-medium tracking-[-0.01em]">Smart prompts — get quick suggestions to refine your request.</span>
</div>
</div>
</div>
<div className="lg:col-span-5 relative">
<style>
                @keyframes floatBadge {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-8px); }
                }
                @keyframes slideInFromTop {
                  from { transform: translateY(-20px); opacity: 0; }
                  to { transform: translateY(0); opacity: 1; }
                }
                @keyframes slideInFromBottom {
                  from { transform: translateY(20px); opacity: 0; }
                  to { transform: translateY(0); opacity: 1; }
                }
                @keyframes pulse {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0.7; }
                }
              </style>
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-lg aspect-[4/3]">
<div 10"="" absolute="" className="opacity-20 absolute inset-0" inset-0="" pointer-events-none="" ring-1="" ring-white="" rounded-2xl="" style="background-image: linear-gradient(0deg, rgba(255,255,255,0.06) 1px, rgba(0,0,0,0) 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, rgba(0,0,0,0) 1px); background-size: 48&lt;/div&gt;
                &lt;div class="></div>
<div className="absolute left-8 right-8 top-10" style={{animation: 'slideInFromTop 0.6s ease-out 0.2s both'}}>
<div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md px-5 py-4 shadow-black/30 shadow-lg">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full ring-1 ring-white/15 flex items-center justify-center" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(139,92,246,.35), rgba(99,102,241,.35))', animation: 'pulse 2s ease-in-out infinite'}}>
<span className="text-xs font-medium text-white/90">D</span>
</div>
<span className="text-sm sm:text-base font-medium tracking-[-0.01em] text-slate-200">Devgent</span>
</div>
</div>
</div>
<div className="absolute left-8 right-8 bottom-8" style={{animation: 'slideInFromBottom 0.6s ease-out 0.4s both'}}>
<div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md px-5 py-4 shadow-lg shadow-black/40" style={{animation: 'floatBadge 3s ease-in-out infinite'}}>
<div className="flex items-start justify-between gap-4">
<p className="text-slate-200 text-base sm:text-lg leading-snug">
                        How do I open a Devgenth Landing page design?
                      </p>
<div className="flex items-center gap-2 shrink-0">
<button className="h-flex items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-all hover:bg-white/10 hover:scale-110">
<svg className="text-white/80 h-4.5 w-4.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-all hover:bg-white/10 hover:scale-110">
<svg className="text-white/80 h-4.5 w-4.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</div>
</div>
</div>
</div>
<div className="pointer-events-none absolute -inset-1 rounded-2xl opacity-60 blur-xl" style={{background: 'radial-gradient(60% 60% at 70% 20%, rgba(99,102,241,.18), rgba(217,70,239,0) 70%)'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="sticky mb-8 top-36">
<div className="shadow-black/30 sm:p-10 bg-[#2d2e32]/95 border-white/10 border rounded-3xl pt-4 pr-4 pb-4 pl-4 shadow-2xl backdrop-blur-sm">
<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 gap-8 items-center">
<div className="lg:col-span-2 flex items-center justify-center">
<span className="text-[180px] leading-none font-semibold tracking-tight text-white/5 select-none">2</span>
</div>
<div className="lg:col-span-5">
<h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">AI processes instantly</h3>
<p className="text-base sm:text-lg text-slate-300 mt-4">
                Our AI analyzes your request, understands context, and generates intelligent responses in seconds—pulling from knowledge bases and workflows.
              </p>
<div className="mt-6 flex flex-col gap-4">
<div className="inline-flex text-sm text-slate-200 w-full max-w-full border-white/10 border rounded-2xl px-4 py-3 shadow-sm gap-3 items-center" style={{boxShadow: 'inset 0 -12px 24px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255,255,255,0.04)'}}>
<span className="inline-flex items-center justify-center shrink-0 w-10 h-10 rounded-xl ring-white/10 ring-1">
<svg className="h-4.5 w-4.5 text-white/90" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</span>
<span className="font-medium tracking-[-0.01em]">Context-aware responses every time.</span>
</div>
<div className="inline-flex text-sm text-slate-200 w-full max-w-full border-white/10 border rounded-2xl px-4 py-3 shadow-sm gap-3 items-center" style={{boxShadow: 'inset 0 -12px 24px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255,255,255,0.04)'}}>
<span className="inline-flex items-center justify-center shrink-0 w-10 h-10 ring-white/10 ring-1 rounded-xl">
<svg className="h-4.5 w-4.5 text-white/90" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
</span>
<span className="font-medium tracking-[-0.01em]">Real-time learning from your workflows.</span>
</div>
</div>
</div>
<div className="lg:col-span-5 relative">
<style>
                @keyframes spin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
                @keyframes progressGrow {
                  from { width: 0%; }
                  to { width: 65%; }
                }
                @keyframes scaleIn {
                  from { transform: scale(0.8); opacity: 0; }
                  to { transform: scale(1); opacity: 1; }
                }
              </style>
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-lg aspect-[4/3]">
<div className="opacity-20 absolute inset-0" style={{backgroundImage: 'linear-gradient(0deg, rgba(255,255,255,0.06) 1px, rgba(0,0,0,0) 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, rgba(0,0,0,0) 1px)', backgroundSize: '48px 48px'}}></div>
<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
<div className="absolute inset-8 flex items-center justify-center">
<div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-md px-8 py-12 shadow-black/30 shadow-lg w-full" style={{animation: 'scaleIn 0.5s ease-out'}}>
<div className="flex flex-col items-center gap-6">
<div className="relative">
<div className="h-16 w-16 rounded-full ring-2 ring-white/20 flex items-center justify-center animate-pulse" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(139,92,246,.5), rgba(99,102,241,.5))'}}>
<svg className="text-white" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{animation: 'spin 2s linear infinite'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v4"></path><path d="m16.2 7.8 2.9-2.9"></path><path d="M18 12h4"></path><path d="m16.2 16.2 2.9 2.9"></path><path d="M12 18v4"></path><path d="m4.9 19.1 2.9-2.9"></path><path d="M2 12h4"></path><path d="m4.9 4.9 2.9 2.9"></path></svg>
</div>
</div>
<div className="text-center">
<p className="text-white/90 text-lg font-medium">Processing...</p>
<p className="text-slate-300 text-sm mt-2">Analyzing your request</p>
</div>
<div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
<div className="bg-gradient-to-r from-indigo-500 to-violet-500 h-full rounded-full" style={{width: '65%', animation: 'progressGrow 2s ease-out'}}></div>
</div>
</div>
</div>
</div>
<div className="pointer-events-none absolute -inset-1 rounded-2xl opacity-60 blur-xl" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(139,92,246,.22), rgba(217,70,239,0) 70%)'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="sticky top-40">
<div className="shadow-black/30 sm:p-10 bg-[#2d2e32]/95 border-white/10 border rounded-3xl p-4 shadow-2xl backdrop-blur-sm">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
<div className="lg:col-span-2 flex items-center justify-center order-1 lg:order-1">
<span className="text-[120px] sm:text-[180px] leading-none font-semibold tracking-tight text-white/5 select-none">3</span>
</div>
<div className="lg:col-span-5 order-2 lg:order-2">
<h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white tracking-tight">Get results &amp; take action</h3>
<p className="text-sm sm:text-base lg:text-lg text-slate-300 mt-3 sm:mt-4">
                Receive polished outputs, actionable insights, or automated tasks—ready to use, share, or refine. One-click integrations make execution seamless.
              </p>
<div className="mt-4 sm:mt-6 flex flex-col gap-3 sm:gap-4">
<div className="inline-flex text-xs sm:text-sm text-slate-200 w-full border-white/10 border rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 shadow-sm gap-2 sm:gap-3 items-center" style={{boxShadow: 'inset 0 -12px 24px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255,255,255,0.04)'}}>
<span className="inline-flex items-center justify-center shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-xl ring-white/10 ring-1">
<svg className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-white/90" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</span>
<span className="font-medium tracking-[-0.01em]">Production instantly.</span>
</div>
<div className="inline-flex text-xs sm:text-sm text-slate-200 w-full border-white/10 border rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 shadow-sm gap-2 sm:gap-3 items-center" style={{boxShadow: 'inset 0 -12px 24px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255,255,255,0.04)'}}>
<span className="inline-flex items-center justify-center shrink-0 w-8 h-8 sm:w-10 sm:h-10 ring-white/10 ring-1 rounded-xl">
<svg className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-white/90" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
</span>
<span className="font-medium tracking-[-0.01em]">Export to any tool or platform.</span>
</div>
</div>
</div>
<div className="lg:col-span-5 relative order-3 lg:order-3">
<style>
                @keyframes slideUp {
                  from { transform: 0; }
                  to { transform: translateY(0); opacity: 1; }
                }
                @keyframes shimmer {
                  0% { opacity: 0.6; }
                  50% { opacity: 1; }
                  100% { opacity: 0.6; }
                }
                @keyframes fadeIn {
                  from { opacity: 0; }
                  to { opacity: 1; }
                }
              </style>
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-lg aspect-[4/3]">
<div className="opacity-20 absolute inset-0" style={{backgroundImage: 'linear-gradient(0deg, rgba(255,255,255,0.06) 1px, rgba(0,0,0,0) 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, rgba(0,0,0,0) 1px)', backgroundSize: '48px 48px'}}></div>
<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
<div className="absolute inset-4 sm:inset-8">
<div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-md p-3 sm:p-6 shadow-black/30 shadow-lg h-full flex flex-col" style={{animation: 'slideUp 0.6s ease-out'}}>
<div className="flex items-center justify-between mb-3 sm:mb-4" style={{animation: 'fadeIn 0.5s ease-out 0.2s both'}}>
<span className="text-white/90 font-medium text-xs sm:text-sm">AI Response</span>
<div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30" style={{animation: 'fadeIn 0.5s ease-out 0.4s both'}}>
<div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400" style={{animation: 'pulse 2s ease-in-out infinite'}}></div>
<span className="text-[10px] sm:text-xs text-green-300">Complete</span>
</div>
</div>
<div className="flex-1 bg-black/20 rounded-xl p-2.5 sm:p-4 mb-3 sm:mb-4 overflow-hidden" style={{animation: 'fadeIn 0.5s ease-out 0.3s both'}}>
<div className="space-y-1.5 sm:space-y-2">
<div className="h-2 sm:h-3 bg-white/20 rounded w-full" style={{animation: 'shimmer 2s ease-in-out infinite'}}></div>
<div className="h-2 sm:h-3 bg-white/20 rounded w-5/6" style={{animation: 'shimmer 2s ease-in-out infinite 0.2s'}}></div>
<div className="h-2 sm:h-3 bg-white/20 rounded w-4/6" style={{animation: 'shimmer 2s ease-in-out infinite 0.4s'}}></div>
<div className="h-2 sm:h-3 bg-white/20 rounded w-full" style={{animation: 'shimmer 2s ease-in-out infinite 0.6s'}}></div>
<div className="h-2 sm:h-3 bg-white/20 rounded w-3/4" style={{animation: 'shimmer 2s ease-in-out infinite 0.8s'}}></div>
</div>
</div>
<div className="flex gap-1.5 sm:gap-2" style={{animation: 'slideUp 0.5s ease-out 0.5s both'}}>
<button className="flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-xs sm:text-sm font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30">
<svg className="h-3 w-3 sm:h-4 sm:w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
                        Copy
                      </button>
<button className="flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white/10 text-white text-xs sm:text-sm font-medium border border-white/10 transition-all hover:bg-white/15 hover:scale-105">
<svg className="h-3 w-3 sm:h-4 sm:w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg>
                        Share
                      </button>
</div>
</div>
</div>
<div className="pointer-events-none absolute -inset-1 rounded-2xl opacity-60 blur-xl" style={{background: 'radial-gradient(60% 60% at 30% 80%, rgba(34,197,94,.18), rgba(16,185,129,0) 70%)'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative">
<div className="shadow-black/30 bg-white/5 border-white/10 border rounded-3xl mt-12 mb-20 pt-12 pr-8 pl-8 shadow-2xl backdrop-blur-sm">

<div className="text-center mb-8 sm:mb-10 top-4 z-50">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-white/80 mx-auto backdrop-blur-md">
<svg className="lucide lucide-heart h-3.5 w-3.5" data-lucide="heart" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="">Testimonials</span>
</div>
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight mt-3">
      Some words from happy users
    </h2>
</div>

<section className="relative" data-carousel="testimonials" tabindex="0">

<button aria-label="Previous testimonial" className="testimonial-prev sm:left-4 -translate-y-1/2 inline-flex hover:bg-white/15 transition text-white/80 bg-white/10 w-10 h-10 z-10 rounded-full ring-white/15 ring-1 absolute top-1/2 left-2 backdrop-blur-md items-center justify-center opacity-50 pointer-events-none" type="button">
<svg className="lucide lucide-chevron-left h-4.5 w-4.5" data-lucide="chevron-left" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button aria-label="Next testimonial" className="testimonial-next sm:right-4 -translate-y-1/2 z-10 inline-flex hover:bg-white/15 transition text-white/80 bg-white/10 w-10 h-10 ring-white/15 ring-1 rounded-full absolute top-1/2 right-2 backdrop-blur-md items-center justify-center" type="button">
<svg className="lucide lucide-chevron-right h-4.5 w-4.5" data-lucide="chevron-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>

<div className="overflow-hidden rounded-[28px] border border-white/10">

<div className="testimonial-track flex will-change-transform transition-transform duration-500 ease-out" style={{transform: 'translateX(0px)'}}>

<div className="shrink-0 w-full" style={{width: '1148px'}}>
<div className="shadow-black/30 sm:p-10 bg-[#2d2e32]/95 border-white/10 border rounded-3xl pt-4 pr-4 pb-6 pl-4 shadow-2xl backdrop-blur-sm" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)'}}>
<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 gap-8 items-center">

<div className="lg:col-span-5">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] aspect-[4/4]">
<img alt="Customer portrait" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1aa36c7b-aaa4-4bd1-8571-9b5d1d19a45b_1600w.jpg"/>
<button className="absolute left-3 bottom-3 inline-flex items-center gap-2 rounded-xl bg-white/10 text-white text-xs font-medium px-3 py-1.5 ring-1 ring-white/15">
<svg className="lucide lucide-play h-3.5 w-3.5" data-lucide="play" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                    Play video
                  </button>
</div>
</div>

<div className="lg:col-span-7">
<blockquote className="text-left">
<p className="text-white text-xl sm:text-2xl leading-snug">
                    "Unlock your team's full potential with our innovative features that simplify complex processes, enhance visibility, and drive meaningful results."
                  </p>
<div className="h-px bg-white/10 mt-6 mb-4"></div>
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-10 h-10 rounded-xl ring-1 ring-white/15 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/99667665-1a71-4064-bf58-4743bb9e0ebc_320w.webp"/>
<div className="">
<div className="text-white font-medium tracking-[-0.01em]">David Thompson</div>
<div className="text-slate-300 text-sm">Marketing Director • Craftgram</div>
</div>
</div>
</blockquote>
</div>
</div>
</div>
</div>

<div className="shrink-0 w-full" style={{width: '1148px'}}>
<div className="shadow-black/30 sm:p-10 bg-[#2d2e32]/95 border-white/10 border rounded-3xl pt-4 pr-4 pb-6 pl-4 shadow-2xl backdrop-blur-sm">
<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 gap-8 items-center">
<div className="lg:col-span-5">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] aspect-[4/4]">
<img alt="Customer portrait" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c778c36d-7438-4020-8598-1d5e0d9bd4af_1600w.webp"/>
<button className="absolute left-3 bottom-3 inline-flex items-center gap-2 rounded-xl bg-white/10 text-white text-xs font-medium px-3 py-1.5 ring-1 ring-white/15">
<svg className="lucide lucide-play h-3.5 w-3.5" data-lucide="play" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                    Play video
                  </button>
</div>
</div>
<div className="lg:col-span-7">
<blockquote className="text-left">
<p className="text-white text-xl sm:text-2xl leading-snug">
                    "The onboarding was effortless. Scheduling and routing just work, saving our team hours every week while keeping customers delighted."
                  </p>
<div className="h-px bg-white/10 mt-6 mb-4"></div>
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-10 h-10 rounded-xl ring-1 ring-white/15 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/986db8ed-1c5d-42fb-8c1d-4b3716d2e317_320w.jpg"/>
<div className="">
<div className="text-white font-medium tracking-[-0.01em]">Sara Patel</div>
<div className="text-slate-300 text-sm">Head of Operations • Glimmer</div>
</div>
</div>
</blockquote>
</div>
</div>
</div>
</div>

<div className="shrink-0 w-full" style={{width: '1148px'}}>
<div className="shadow-black/30 sm:p-10 bg-[#2d2e32]/95 border-white/10 border rounded-3xl pt-4 pr-4 pb-6 pl-4 shadow-2xl backdrop-blur-sm">
<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 gap-8 items-center">
<div className="lg:col-span-5">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] aspect-[4/4]">
<img alt="Customer portrait" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f90222d7-494a-4783-8fa7-dbd93d91f6b3_1600w.webp"/>
<button className="absolute left-3 bottom-3 inline-flex items-center gap-2 rounded-xl bg-white/10 text-white text-xs font-medium px-3 py-1.5 ring-1 ring-white/15">
<svg className="lucide lucide-play h-3.5 w-3.5" data-lucide="play" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="round" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                    Play video
                  </button>
</div>
</div>
<div className="lg:col-span-7">
<blockquote className="text-left">
<p className="text-white text-xl sm:text-2xl leading-snug">
                    "We shipped faster than ever. The assistive prompts and AI-generated drafts helped our product team move from idea to launch in days."
                  </p>
<div className="h-px bg-white/10 mt-6 mb-4"></div>
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-10 h-10 rounded-xl ring-1 ring-white/15 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9e66151d-ff65-4ff7-8bb0-084c3f363d3f_320w.webp"/>
<div>
<div className="text-white font-medium tracking-[-0.01em]">Jonas Weber</div>
<div className="text-slate-300 text-sm">Product Lead • Hexo Systems</div>
</div>
</div>
</blockquote>
</div>
</div>
</div>
</div>

<div className="shrink-0 w-full" style={{width: '1148px'}}>
<div className="shadow-black/30 sm:p-10 bg-[#2d2e32]/95 border-white/10 border rounded-3xl pt-4 pr-4 pb-6 pl-4 shadow-2xl backdrop-blur-sm">
<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 gap-8 items-center">
<div className="lg:col-span-5">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] aspect-[4/4]">
<img alt="Customer portrait" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8fb53f66-d811-4a7a-bd45-85aa9ed6b163_1600w.webp"/>
<button className="absolute left-3 bottom-3 inline-flex items-center gap-2 rounded-xl bg-white/10 text-white text-xs font-medium px-3 py-1.5 ring-1 ring-white/15">
<svg className="lucide lucide-play h-3.5 w-3.5" data-lucide="play" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                    Play video
                  </button>
</div>
</div>
<div className="lg:col-span-7">
<blockquote className="text-left">
<p className="text-white text-xl sm:text-2xl leading-snug">
                    "Our support metrics improved across the board. Response quality went up while handle time went down—truly a force multiplier."
                  </p>
<div className="h-px bg-white/10 mt-6 mb-4"></div>
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-10 h-10 rounded-xl ring-1 ring-white/15 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b1ff7db9-55f7-4ead-8fe2-f5b11ff644e0_320w.jpg"/>
<div>
<div className="text-white font-medium tracking-[-0.01em]">Lina Chen</div>
<div className="text-slate-300 text-sm">Founder • Orbital</div>
</div>
</div>
</blockquote>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex pt-8 pb-8 gap-x-2 gap-y-2 items-center justify-center">
<button className="testimonial-dot h-1.5 w-6 rounded-full transition-all duration-300 bg-white/40"></button>
<button className="testimonial-dot h-1.5 w-6 rounded-full transition-all duration-300 bg-white/20"></button>
<button className="testimonial-dot h-1.5 w-6 rounded-full bg-white/20 transition-all duration-300"></button>
<button className="testimonial-dot h-1.5 w-6 rounded-full bg-white/20 transition-all duration-300"></button>
</div>

</section>
</div></section>
</main>

<footer className="pb-10">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">

<div className="overflow-hidden sm:p-10 sm:mb-10 bg-white/5 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0bcb241d-7f62-4899-8da0-434927914200_1600w.webp)] bg-cover bg-center rounded-3xl mb-10 px-6 py-6 relative backdrop-blur-sm" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '24px'}}>
<div className="pointer-events-none absolute inset-0 opacity-70" style={{background: 'radial-gradient(120% 80% at 10% 10%, rgba(99,102,241,0.25) 0%, rgba(99,102,241,0.08) 35%, rgba(217,70,239,0.12) 60%, rgba(10,11,16,0) 85%)'}}></div>
<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-10 relative">
<div className="">
<h3 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Unleash your ideas.Work 10x faster.
          </h3>
</div>
<div className="flex flex-col items-start md:items-end gap-4">
<p className="text-sm sm:text-base text-white/80 max-w-md md:text-right">
            Start your free trial today and see why teams trust our AI to work smarter, faster, and better.
          </p>
<a className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/30" href="#">
            Get Started for Free
            <svg className="lucide lucide-arrow-right h-4.5 w-4.5" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>

<div className="sm:p-10 bg-white/5 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-sm">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="md:col-span-2">
<h4 className="text-white text-xl sm:text-2xl font-semibold tracking-tight">Join Our Newsletter</h4>
<div className="mt-4 relative">
<label className="sr-only" htmlFor="footer-email">Email</label>
<input className="w-full rounded-xl bg-white/5 ring-1 ring-white/10 px-4 pr-12 py-3 text-sm text-white/90 placeholder-white/40 outline-none focus:ring-2 focus:ring-indigo-400/40" id="footer-email" placeholder="Enter your email" type="email"/>
<button aria-label="Subscribe" className="absolute right-1 top-1 bottom-1 inline-flex items-center justify-center rounded-lg px-3 bg-white/10 ring-1 ring-white/15 text-white/90 hover:bg-white/15 transition">
<svg className="lucide lucide-arrow-right h-4.5 w-4.5" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<p className="text-xs text-white/60 mt-3">
            We’ll send weekly product updates and tips. No spam.
          </p>
</div>

<div className="">
<h5 className="text-white text-lg font-semibold tracking-tight mb-3">Pages</h5>
<ul className="space-y-2 text-sm text-white/80">
<li><a className="hover:text-white/90" href="#">Home</a></li>
<li><a className="hover:text-white/90" href="#">About us</a></li>
<li><a className="hover:text-white/90" href="#">Blog</a></li>
<li><a className="hover:text-white/90" href="#">Features</a></li>
</ul>
</div>

<div className="">
<h5 className="text-white text-lg font-semibold tracking-tight mb-3">Resources</h5>
<ul className="space-y-2 text-sm text-white/80">
<li className=""><a className="group inline-flex items-center gap-1 hover:text-white/90" href="#">Integrations <svg className="lucide lucide-arrow-right lucide-arrow-up-right h-3.5 w-3.5 opacity-70 group-hover:opacity-100" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a></li>
<li><a className="group inline-flex items-center gap-1 hover:text-white/90" href="#">Changelog <svg className="lucide lucide-arrow-up-right h-3.5 w-3.5 opacity-70 group-hover:opacity-100" data-lucide="arrow-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></li>
<li><a className="group inline-flex items-center gap-1 hover:text-white/90" href="#">Careers <svg className="lucide lucide-arrow-up-right h-3.5 w-3.5 opacity-70 group-hover:opacity-100" data-lucide="arrow-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></li>
<li><a className="group inline-flex items-center gap-1 hover:text-white/90" href="#">Contact us <svg className="lucide lucide-arrow-up-right h-3.5 w-3.5 opacity-70 group-hover:opacity-100" data-lucide="arrow-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></li>
</ul>
</div>
</div>

<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-wrap items-center gap-3 text-sm">
<a aria-label="Facebook" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 transition" href="#">
<svg className="lucide lucide-facebook h-4 w-4" data-lucide="facebook" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            Facebook
          </a>
<a aria-label="Instagram" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 transition" href="#">
<svg className="lucide lucide-instagram h-4 w-4" data-lucide="instagram" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            Instagram
          </a>
<a aria-label="Twitter" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 transition" href="#">
<svg className="lucide lucide-twitter h-4 w-4" data-lucide="twitter" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            Twitter
          </a>
<a aria-label="LinkedIn" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 transition" href="#">
<svg className="lucide lucide-linkedin h-4 w-4" data-lucide="linkedin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            LinkedIn
          </a>
</div>
<div className="flex items-center justify-start md:justify-end gap-4 text-xs text-white/60">
<a className="hover:text-white/80" href="#">Privacy</a>
<a className="hover:text-white/80" href="#">Terms</a>
<a className="hover:text-white/80" href="#">Status</a>
</div>
</div>
<div className="h-px bg-white/10 my-6"></div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
<p>© 2025 Orbyt Labs. All rights reserved.</p>
<p className="text-white/50">ISO‑27001 ready • SOC 2 in progress • Data residency options</p>
</div>
</div>
</div>
</footer>




    </>
  );
}
