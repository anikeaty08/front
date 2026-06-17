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



(function () {
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
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


    document.addEventListener('DOMContentLoaded', () => {
        // Initialize ParticlesJS
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
                modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
            },
            retina_detect: true
        });

        const sections = document.querySelectorAll('.section');
        const dots = document.querySelectorAll('.progress-dot');
        const magneticElements = document.querySelectorAll('.magnetic');
        let currentIndex = 0;
        let isScrolling = false;
        let touchStartY = 0;
        
        // Initialize
        updateActiveDot(currentIndex);
        
        // Magnetic effect
        magneticElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translate(0px, 0px)';
            });
        });
        
        // Scroll event
        window.addEventListener('wheel', (e) => {
            if (isScrolling) return;
            
            isScrolling = true;
            if (e.deltaY > 0) {
                if (currentIndex < sections.length - 1) {
                    currentIndex++;
                    changeSection(currentIndex);
                }
            } else {
                if (currentIndex > 0) {
                    currentIndex--;
                    changeSection(currentIndex);
                }
            }
            
            setTimeout(() => {
                isScrolling = false;
            }, 1200);
        });
        
        // Touch events
        document.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchend', (e) => {
            if (isScrolling) return;
            
            const touchEndY = e.changedTouches[0].clientY;
            const diff = touchStartY - touchEndY;
            
            isScrolling = true;
            if (diff > 50) {
                if (currentIndex < sections.length - 1) {
                    currentIndex++;
                    changeSection(currentIndex);
                }
            } else if (diff < -50) {
                if (currentIndex > 0) {
                    currentIndex--;
                    changeSection(currentIndex);
                }
            }
            
            setTimeout(() => {
                isScrolling = false;
            }, 1200);
        });
        
        // Click on dots
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.getAttribute('data-index'));
                currentIndex = index;
                changeSection(currentIndex);
            });
        });
        
        function changeSection(index) {
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            sections[index].classList.add('active');
            updateActiveDot(index);
            
            const reveals = sections[index].querySelectorAll('.reveal');
            reveals.forEach((el, i) => {
                setTimeout(() => {
                    el.classList.add('active');
                }, i * 150);
            });
            
            sections.forEach((section, i) => {
                if (i !== index) {
                    const otherReveals = section.querySelectorAll('.reveal');
                    otherReveals.forEach(el => {
                        el.classList.remove('active');
                    });
                }
            });
        }
        
        function updateActiveDot(index) {
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            dots[index].classList.add('active');
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
      
<div className="top-0 w-full h-screen -z-10 bg-cover bg-center absolute" data-alpha-mask="80" id="bg-image" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f45fa9b2-e4e5-4c34-bc3f-83b4bb845b26_3840w.webp")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>
<section className="min-h-[92vh] overflow-hidden text-white relative">

<header className="z-20 relative">
<div className="mx-auto max-w-7xl px-6 lg:px-10">
<div className="flex items-center justify-between h-20">
<a className="flex items-center gap-3" href="#">
<span className="bg-center text-xl font-semibold tracking-tight w-[120px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/afe97397-fe5e-43e3-b857-b1da0066b2df_1600w.png)] bg-cover"></span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
<a className="hover:text-white transition font-sans" href="#">Method</a>
<a className="hover:text-white transition font-sans" href="#">Sessions</a>
<a className="hover:text-white transition font-sans" href="#">Stories</a>
<a className="hover:text-white transition font-sans" href="#">Guild</a>
<a className="hover:text-white transition font-sans" href="#">Plans</a>
</nav>
<div className="hidden md:flex items-center gap-4">
<button className="inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 text-sm text-white/80 border-gradient before:rounded-2xl bg-white/5 hover:text-white transition font-sans" style={{'--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>
<svg className="h-4 w-4" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v12m-6-6h12"></path></g></svg>
              EN
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            
                
                
            </button>
<a className="inline-flex items-center gap-2 rounded-2xl bg-white text-neutral-900 px-4 py-2.5 text-sm font-medium hover:bg-white/90 transition font-sans" href="#">
              Get Started
              <svg className="h-4 w-4" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</a>
</div>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-2xl border-gradient before:rounded-2xl bg-white/5" style={{'--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>
<svg className="h-5 w-5 text-white" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18M3 6h18M3 18h18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
</div>
</div>
</header>

<div className="z-10 relative"><div className="absolute top-0 right-0 bottom-0 left-0" data-container-bg="true" style={{maskImage: 'linear-gradient(180deg, transparent, black 25%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 25%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="aNQ1HJcO2IvNyDCGls8J"></div>

</div></div>
<div className="mx-auto max-w-7xl px-6 lg:px-10">
<div className="grid lg:grid-cols-12 gap-8 items-end pt-10 md:pt-16 lg:pt-20">
<div className="lg:col-span-7 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
<p className="uppercase text-xs tracking-[0.18em] text-white/60 font-sans">A path back to wonder</p>
<h1 className="sm:text-5xl lg:text-7xl leading-[1.05] text-4xl mt-4 font-bricolage font-semibold tracking-tighter" style={{}}>
              Relearn how to wonder, feel, and build.
            </h1>
<p className="sm:text-lg text-base text-white/80 max-w-2xl mt-5 font-sans">
              Nebula guides your creativity with calm, immersive sessions that blend reflection, sound, and visual prompts—so ideas feel natural again.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center rounded-2xl bg-white text-neutral-900 px-5 py-3 text-sm font-medium shadow-sm hover:bg-white/90 transition font-sans" href="#">
                Start your first path
              </a>
<a className="inline-flex items-center justify-center gap-2 border-gradient before:rounded-2xl hover:text-white transition text-sm font-medium text-white/90 bg-white/5 rounded-2xl pt-3 pr-5 pb-3 pl-5" href="#" style={{'--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>Watch video</a>
</div>
<p className="mt-4 text-sm text-white/50 font-sans">No deadlines — No noise — Just space to rediscover your imagination</p>

<div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
<div className="inline-flex items-center gap-2 text-white/90">
<svg className="h-4 w-4" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4m2-2h-4"></path></g></svg>
<span className="font-sans"><span className="font-semibold font-sans">132,847</span> sessions completed</span>
</div>
<div className="hidden sm:inline-flex h-4 w-px bg-white/15"></div>
<div className="inline-flex items-center gap-2 text-white/90">
<svg className="h-4 w-4" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z" fill="currentColor"></path></svg>
<span className="font-sans">Rated <span className="font-semibold font-sans">4.9</span>/5 by creators</span>
</div>
<div className="hidden sm:inline-flex h-4 w-px bg-white/15"></div>
<div className="inline-flex items-center gap-2 text-white/90">
<svg className="h-4 w-4" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><circle cx="12" cy="13" r="8"></circle><path d="M12 9v4h4m-4-8V3m-5.2.8L5 2m14 1.8L20.8 2M2 13h2m18 0h2"></path></g></svg>
<span className="font-sans">Avg session <span className="font-semibold font-sans">14</span> min</span>
</div>
</div>
</div>

<div className="lg:col-span-5 lg:pl-8 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate">
<div className="border-gradient before:rounded-3xl sm:p-5 bg-white/5 max-w-sm rounded-3xl ml-auto pt-4 pr-4 pb-4 pl-4 backdrop-blur-lg" style={{'--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>
<div className="flex items-center justify-between">
<div className="">
<p className="text-xs uppercase tracking-[0.18em] text-white/60 font-sans">Featured this month</p>
<p className="mt-1 text-sm text-white/90 font-sans">Editors' Creative Shortlist</p>
</div>
<div className="flex -space-x-2">
<span className="w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3563160d-f255-4bae-a220-2886dd63d8b3_320w.webp)] bg-cover bg-center ring-white/10 ring-2 rounded-2xl"></span>
<span className="bg-center bg-amber-400/90 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/39e15168-9f77-4837-9a4b-89c74b8bc38b_320w.webp)] bg-cover rounded-2xl ring-white/10 ring-2"></span>
<span className="bg-cyan-400/90 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ca687bcc-f3d6-4ed6-9efe-e0fd4cbe69a9_320w.webp)] bg-cover bg-center ring-white/10 ring-2 rounded-2xl"></span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-12 sm:mt-16 max-w-md [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll animate">
<div className="border-gradient before:rounded-3xl bg-white/5 rounded-3xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-xl">
<p className="text-sm text-white/85 font-sans">
              "I've tried countless tools, but Nebula is the first that slows me down just enough to make room for real ideas. Each session feels like a gentle conversation with my better self."
            </p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Portrait of Kai Rivera" className="h-9 w-9 rounded-2xl object-cover ring-1 ring-white/20" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/66cda8d4-dd4e-44ee-8ef9-cba94340ba05_320w.webp"/>
<div>
<p className="text-sm font-medium font-sans">Kai Rivera</p>
<p className="text-xs text-white/60 font-sans">Product Designer</p>
</div>
</div>
<div className="flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-white/70"></span>
<span className="h-1.5 w-1.5 rounded-full bg-white/30"></span>
<span className="h-1.5 w-1.5 rounded-full bg-white/30"></span>
</div>
</div>
</div>
</div>

<div className="mt-10 sm:mt-14 pb-10">
<div className="flex items-center gap-2 text-xs text-white/60">
<svg className="h-4 w-4" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 3l7.07 16.97l2.51-7.39l7.39-2.51zM13 13l6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<span className="font-sans">Scroll to explore</span>
</div>
</div>
</div>
</div>

</section>

<section className="relative w-full mx-auto max-w-7xl px-6 lg:px-10 mt-24 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="bg-zinc-950/60 w-full border-gradient before:rounded-3xl rounded-3xl pt-6 pr-6 pb-6 pl-6 sm:p-8" style={{'--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>
<div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 sm:gap-10">
<div className="lg:col-span-6">
<a className="inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 border-gradient before:rounded-2xl bg-white/5 text-zinc-200 hover:bg-white/10 transition font-sans" href="#contact" style={{'--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>
<svg className="w-4 h-4" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="1"></circle></g></svg>
            Ready to Start?
          </a>
<h1 className="mt-4 text-[44px] sm:text-6xl md:text-7xl leading-[1.05] text-zinc-100 font-bricolage font-semibold tracking-tighter" style={{}}>Let's Build Something Extraordinary</h1>
<div className="h-px bg-white/10 mt-6"></div>
<div className="mt-6">
<div className="flex items-center gap-3 flex-wrap">
<h3 className="text-2xl sm:text-3xl text-zinc-100 font-bricolage font-semibold tracking-tighter" style={{}}>Creative Development</h3>
<span className="inline-flex items-center rounded-2xl px-3 py-1 text-sm text-zinc-200 bg-white/5 border-gradient before:rounded-2xl font-sans" style={{'--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>Starting at $2,999</span>
</div>
<p className="text-zinc-400 text-sm sm:text-base mt-3 font-sans">Crafting digital experiences that captivate and convert your audience</p>
</div>
<div className="h-px bg-white/10 mt-6"></div>
<div className="mt-6">
<div className="flex items-center gap-3 flex-wrap">
<h3 className="text-2xl sm:text-3xl text-zinc-100 font-bricolage font-semibold tracking-tighter" style={{}}>Full-Stack Solutions</h3>
<span className="inline-flex items-center rounded-2xl px-3 py-1 text-sm text-zinc-200 bg-white/5 border-gradient before:rounded-2xl font-sans" style={{'--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>Starting at $5,999</span>
</div>
<p className="text-zinc-400 text-sm sm:text-base mt-3 font-sans">Complete digital solutions from strategy to deployment and beyond.</p>
</div>
<div className="mt-8 flex flex-wrap items-center gap-4">
<a className="inline-flex items-center justify-center h-14 px-6 rounded-2xl text-base font-medium text-white bg-white/5 border-gradient before:rounded-2xl hover:bg-white/10 transition shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] font-sans" href="#work" style={{'--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>View Our Work</a>
<a className="inline-flex items-center justify-center h-14 px-8 rounded-2xl text-base font-medium text-neutral-900 bg-gradient-to-b from-white to-neutral-300 hover:opacity-90 transition shadow-[0_12px_40px_rgba(0,0,0,0.35)] font-sans" href="#contact">Start Your Project</a>
</div>
</div>
<div className="lg:col-span-6">
<div className="relative mx-auto w-full max-w-[860px]" style={{filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.6))'}}>
<div className="rounded-3xl bg-neutral-900/60 border-gradient before:rounded-3xl p-3" style={{'--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>
<div className="relative overflow-hidden rounded-3xl bg-neutral-950 border border-white/10">
<div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
<span className="h-3 w-3 rounded-full bg-zinc-700"></span>
<span className="h-3 w-3 rounded-full bg-zinc-700/70"></span>
<span className="h-3 w-3 rounded-full bg-zinc-700/50"></span>
</div>
<div className="p-4 sm:p-6">
<div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
<img alt="Project preview 1" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e5607922-3e3a-4da8-958a-13f3bb19c07c_320w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/50"></div>
</div>
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
<img alt="Project preview 2" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c7939795-f326-4a4c-9541-6cd5ee24e793_320w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/50"></div>
</div>
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 md:row-span-2">
<img alt="Project preview 3" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/62af90a3-7459-4c4f-be9c-04149b391218_320w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
</div>
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
<img alt="Project preview 4" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5c3d7b58-631c-4dce-a85d-327c0dbb183b_320w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/50"></div>
</div>
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
<img alt="Project preview 5" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fb6b509f-d7d6-4c5a-ab4e-9cc3661e184b_320w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/50"></div>
</div>
</div>
</div>
<div className="pointer-events-none absolute -right-24 bottom-0 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>
<div className="pointer-events-none absolute -left-24 -top-24 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl px-6 lg:px-10 mt-14 sm:mt-20 mx-auto [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll" id="services">
<div className="border-gradient before:rounded-3xl overflow-hidden bg-white/5 rounded-3xl" style={{'--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>
<div className="flex items-end justify-between p-6 border-b border-white/10">
<h2 className="text-2xl sm:text-3xl text-white font-bricolage font-semibold tracking-tighter" style={{}}>Services</h2>
<div className="hidden sm:flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 text-xs font-medium tracking-tight text-white bg-white/10 hover:bg-white/20 border-gradient before:rounded-2xl" href="#" style={{'--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>
<svg className="w-3.5 h-3.5" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 12h8m-8-6h8m-8 12h8m-12 0h.01M4 12h.01M4 6h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<span className="font-sans">Services Deck</span>
</a>
</div>
</div>
<div className="p-6 sm:p-8 border-b border-white/10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
<div className="md:col-span-1">
<div className="text-3xl sm:text-4xl text-white/70 tabular-nums font-bricolage font-semibold tracking-tighter" style={{}}>1</div>
</div>
<div className="md:col-span-8">
<ul className="space-y-2">
<li className="flex items-start gap-2 text-sm text-neutral-300">
<svg className="w-3.5 h-3.5 mt-0.5 text-emerald-400" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m5 12l5 5L20 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<span className="font-sans">Logo Design</span>
</li>
<li className="flex items-start gap-2 text-sm text-neutral-300">
<svg className="w-3.5 h-3.5 mt-0.5 text-emerald-400" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m5 12l5 5L20 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<span className="font-sans">Typography &amp; Color Systems</span>
</li>
<li className="flex items-start gap-2 text-sm text-neutral-300">
<svg className="w-3.5 h-3.5 mt-0.5 text-emerald-400" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m5 12l5 5L20 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<span className="font-sans">Brand Guidelines &amp; Visual Systems</span>
</li>
</ul>
<div className="mt-4 flex items-center gap-3 overflow-x-auto pb-2">
<div className="aspect-[4/3] w-24 sm:w-28 rounded-2xl overflow-hidden border-gradient before:rounded-2xl flex-shrink-0">
<img alt="Brand stationery" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b870108f-3551-40b3-bb97-ae4fc783d1df_320w.jpg"/>
</div>
<div className="aspect-[4/3] w-24 sm:w-28 rounded-2xl overflow-hidden border-gradient before:rounded-2xl flex-shrink-0">
<img alt="Business cards" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4d5175fe-2aa3-4ef3-8a6f-44a752f57930_320w.jpg"/>
</div>
<div className="aspect-[4/3] w-24 sm:w-28 rounded-2xl overflow-hidden border-gradient before:rounded-2xl flex-shrink-0">
<img alt="Stationery mockups" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d210766-5c9f-4df0-873c-edb4557202b7_320w.jpg"/>
</div>
<div className="aspect-[4/3] w-24 sm:w-28 rounded-2xl overflow-hidden border-gradient before:rounded-2xl flex-shrink-0">
<img alt="Colorful brand" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/781b233e-9c54-40fc-8c11-186d4ce76914_320w.jpg"/>
</div>
</div>
</div>
<div className="md:col-span-3 md:text-right">
<h3 className="text-lg sm:text-xl tracking-tight font-semibold text-white font-sans">Brand Identity</h3>
<p className="text-xs text-neutral-400 mt-1 font-sans">Logos, visual systems, guidelines</p>
</div>
</div>
</div>
<div className="p-6 sm:p-8 border-b border-white/10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
<div className="md:col-span-1">
<div className="text-3xl sm:text-4xl text-white/70 tabular-nums font-bricolage font-semibold tracking-tighter" style={{}}>2</div>
</div>
<div className="md:col-span-8">
<ul className="space-y-2">
<li className="flex items-start gap-2 text-sm text-neutral-300">
<svg className="w-3.5 h-3.5 mt-0.5 text-emerald-400" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m5 12l5 5L20 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<span className="font-sans">Brand Positioning</span>
</li>
<li className="flex items-start gap-2 text-sm text-neutral-300">
<svg className="w-3.5 h-3.5 mt-0.5 text-emerald-400" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m5 12l5 5L20 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<span className="font-sans">Messaging &amp; Tone of Voice</span>
</li>
<li className="flex items-start gap-2 text-sm text-neutral-300">
<svg className="w-3.5 h-3.5 mt-0.5 text-emerald-400" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m5 12l5 5L20 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<span className="font-sans">Design Consultation &amp; Audit</span>
</li>
</ul>
<div className="mt-4 flex items-center gap-3">
<div className="aspect-[16/10] w-28 sm:w-32 rounded-2xl overflow-hidden border-gradient before:rounded-2xl">
<img alt="Workshop desk" className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7c7c0abe-b3bf-4f26-92a0-126405775d17_320w.jpg"/>
</div>
<div className="aspect-[16/10] w-28 sm:w-32 rounded-2xl overflow-hidden border-gradient before:rounded-2xl">
<img alt="Strategy notes" className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c79362c-952e-4a16-b043-e48fb1f55728_320w.jpg"/>
</div>
</div>
</div>
<div className="md:col-span-3 md:text-right">
<h3 className="text-lg sm:text-xl tracking-tight font-semibold text-white font-sans">Creative Strategy</h3>
<p className="text-xs text-neutral-400 mt-1 font-sans">Positioning, messaging, audits</p>
</div>
</div>
</div>
<div className="p-6 sm:p-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
<div className="md:col-span-1">
<div className="text-3xl sm:text-4xl text-white/70 tabular-nums font-bricolage font-semibold tracking-tighter" style={{}}>3</div>
</div>
<div className="md:col-span-8">
<ul className="space-y-2">
<li className="flex items-start gap-2 text-sm text-neutral-300">
<svg className="w-3.5 h-3.5 mt-0.5 text-emerald-400" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m5 12l5 5L20 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<span className="font-sans">Responsive Web Design</span>
</li>
<li className="flex items-start gap-2 text-sm text-neutral-300">
<svg className="w-3.5 h-3.5 mt-0.5 text-emerald-400" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m5 12l5 5L20 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<span className="font-sans">Design Systems &amp; UI Kits</span>
</li>
<li className="flex items-start gap-2 text-sm text-neutral-300">
<svg className="w-3.5 h-3.5 mt-0.5 text-emerald-400" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m5 12l5 5L20 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<span className="font-sans">High-fidelity Prototypes</span>
</li>
</ul>
<div className="mt-4 flex items-center gap-3">
<div className="aspect-[16/10] w-32 sm:w-40 rounded-2xl overflow-hidden border-gradient before:rounded-2xl">
<img alt="Designing interface" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/237ae1f5-edc0-48a4-bb60-1eb41e314e05_320w.jpg"/>
</div>
<div className="aspect-[16/10] w-32 sm:w-40 rounded-2xl overflow-hidden border-gradient before:rounded-2xl">
<img alt="Team collaborating" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79fd2860-1afb-406f-b9d8-56f13319c7c7_320w.jpg"/>
</div>
</div>
</div>
<div className="md:col-span-3 md:text-right">
<h3 className="text-lg sm:text-xl tracking-tight font-semibold text-white font-sans">Web Design</h3>
<p className="text-xs text-neutral-400 mt-1 font-sans">Interfaces, systems, prototypes</p>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 sm:p-8 border-t border-white/10">
<p className="text-sm text-neutral-300 font-sans">Need something tailored? Get a scoped proposal in 24 hours.</p>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 hover:bg-emerald-500 text-sm font-medium text-black tracking-tight bg-white/90 rounded-2xl px-4 py-2" href="#contact">
<svg className="w-4 h-4" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
<span className="font-sans">Book Intro Call</span>
</a>
<a className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium tracking-tight text-white bg-white/10 hover:bg-white/20 border-gradient before:rounded-2xl" href="#" style={{'--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>
<svg className="w-4 h-4" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4M10 9H8m8 4H8m8 4H8"></path></g></svg>
<span className="font-sans">Request Estimate</span>
</a>
</div>
</div>
</div>
</section>

<section className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll sm:py-24 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a4780cd9-2a3d-4bdc-9e5f-85a097b3a8bf_3840w.webp)] bg-cover mt-20 mb-20 pt-16 pb-16"><div className="absolute inset-0" data-container-bg="true"><div className="absolute inset-0 -z-10" id="particles-js">


<canvas className="particles-js-canvas-el" height="1608" style={{width: '100%', height: '100%'}} width="3014"></canvas></div></div>
<div className="mx-auto max-w-7xl px-6 lg:px-10">
<div className="mb-12 text-center">
<p className="text-xs uppercase text-neutral-500 tracking-widest mb-2 font-sans">Featured Reviews</p>
<h2 className="text-3xl sm:text-4xl text-white font-bricolage font-semibold tracking-tighter" style={{}}>Client Highlights</h2>
</div>
<div className="relative flex items-center justify-center py-12 sm:py-20 overflow-x-auto" style={{minHeight: '450px'}}>
<div className="container max-w-full flex justify-center items-center gap-6 px-4">
<div className="border-gradient before:rounded-3xl flex-shrink-0 w-[340px] h-[340px] rounded-3xl relative backdrop-blur" style={{background: 'linear-gradient(rgba(255, 255, 255, 0.1), transparent)', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 25px 25px', transform: 'rotate(-10deg)', '--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>
<div className="absolute inset-4 rounded-3xl bg-white text-neutral-900 shadow-2xl ring-1 ring-neutral-200 overflow-hidden">
<div className="p-6">
<div className="inline-flex items-center justify-center h-8 w-8 rounded-2xl bg-neutral-100 ring-1 ring-neutral-200 mb-4">
<svg className="h-4 w-4 text-neutral-700" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7.39 5.538C6.933 6.13 6 7.563 6 10c0 2 1 3 2 3c1.375 0 2-1 2-2s-.625-2-2-2c-.375 0-.687.07-.956.2M17.39 5.538C16.933 6.13 16 7.563 16 10c0 2 1 3 2 3c1.375 0 2-1 2-2s-.625-2-2-2c-.375 0-.687.07-.956.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<p className="text-sm leading-relaxed text-neutral-900 mb-4 font-sans">Working with Jin was transformative. The design elevated our brand and user experience to new heights. Their attention to detail is unmatched.</p>
<div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Alex Rivera" className="h-6 w-6 rounded-2xl object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3e3e1091-f8e8-4022-a02a-fa37a35c59a5_320w.jpg"/>
<div>
<div className="text-xs font-medium text-neutral-900 font-sans">Alex Rivera</div>
<div className="text-xs text-neutral-500 font-sans">CEO, GrowthLabs</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="text-amber-400" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z" fill="currentColor"></path></svg>
<span className="text-xs font-medium font-sans">5.0</span>
</div>
</div>
</div>
</div>
</div>
<div className="border-gradient before:rounded-3xl flex-shrink-0 w-[340px] h-[340px] rounded-3xl relative backdrop-blur" style={{background: 'linear-gradient(rgba(255, 255, 255, 0.08), transparent)', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 25px 25px', transform: 'rotate(-6deg)', '--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>
<div className="absolute inset-4 rounded-3xl bg-white/90 text-neutral-900 shadow-xl ring-1 ring-neutral-200 overflow-hidden" style={{'--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>
<div className="p-6">
<div className="inline-flex items-center justify-center h-8 w-8 rounded-2xl bg-neutral-100 ring-1 ring-neutral-200 mb-4">
<svg className="h-4 w-4 text-neutral-700" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7.39 5.538C6.933 6.13 6 7.563 6 10c0 2 1 3 2 3c1.375 0 2-1 2-2s-.625-2-2-2c-.375 0-.687.07-.956.2M17.39 5.538C16.933 6.13 16 7.563 16 10c0 2 1 3 2 3c1.375 0 2-1 2-2s-.625-2-2-2c-.375 0-.687.07-.956.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<p className="text-sm leading-relaxed text-neutral-900 mb-4 font-sans">Jin's expertise in both UX and visual design made our project seamless. They delivered beyond expectations and on time every milestone.</p>
<div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Nina Patel" className="h-6 w-6 rounded-2xl object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e7074207-4b47-49d2-b86b-6ca1abd5d849_320w.jpg"/>
<div>
<div className="text-xs font-medium text-neutral-900 font-sans">Nina Patel</div>
<div className="text-xs text-neutral-500 font-sans">Director, PixelCraft</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="text-amber-400" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z" fill="currentColor"></path></svg>
<span className="text-xs font-medium font-sans">5.0</span>
</div>
</div>
</div>
</div>
</div>
<div className="border-gradient before:rounded-3xl flex-shrink-0 w-[340px] h-[340px] rounded-3xl relative backdrop-blur" style={{background: 'linear-gradient(rgba(255, 255, 255, 0.06), transparent)', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 25px 25px', '--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>
<div className="absolute inset-4 rounded-3xl bg-white/80 text-neutral-900 shadow-lg ring-1 ring-neutral-200 overflow-hidden" style={{'--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>
<div className="p-6">
<div className="inline-flex items-center justify-center h-8 w-8 rounded-2xl bg-neutral-100 ring-1 ring-neutral-200 mb-4">
<svg className="h-4 w-4 text-neutral-700" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7.39 5.538C6.933 6.13 6 7.563 6 10c0 2 1 3 2 3c1.375 0 2-1 2-2s-.625-2-2-2c-.375 0-.687.07-.956.2M17.39 5.538C16.933 6.13 16 7.563 16 10c0 2 1 3 2 3c1.375 0 2-1 2-2s-.625-2-2-2c-.375 0-.687.07-.956.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<p className="text-sm leading-relaxed text-neutral-900 mb-4 font-sans">Exceptional designer with a strategic mindset. Jin helped us rethink our entire product experience from the ground up.</p>
<div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Marcus Webb" className="h-6 w-6 rounded-2xl object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/986db8ed-1c5d-42fb-8c1d-4b3716d2e317_320w.jpg"/>
<div className="">
<div className="text-xs font-medium text-neutral-900 font-sans">Marcus Webb</div>
<div className="text-xs text-neutral-500 font-sans">VP Product, Velocity</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="text-amber-400" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z" fill="currentColor"></path></svg>
<span className="text-xs font-medium font-sans">5.0</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-16 pb-16 sm:py-24 mx-auto max-w-7xl px-6 lg:px-10 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="mb-12">
<div className="text-center mb-12">
<div className="mb-6">
<div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-white">
<span className="font-sans">PROOF</span>
<span className="font-sans">(04)</span>
</div>
<div className="mt-2 h-px w-full bg-white/20"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-center">
<div className="lg:col-span-7">
<h3 className="text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[80px] leading-[0.9] font-semibold text-white tracking-tighter font-bricolage">What Clients Says.</h3>
</div>
<div className="lg:col-span-5">
<p className="sm:text-lg text-white/60 max-w-3xl mb-6 font-sans">What our clients say about working with us. Real feedback from real partnerships that drive exceptional results.</p>
<div className="flex justify-start">
<a className="inline-flex items-center gap-3 border-gradient before:rounded-full hover:shadow-2xl transition bg-white/5 rounded-full pt-2 pr-2 pb-2 pl-2 shadow" href="#" style={{'--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white">
<svg className="w-5 h-5 text-neutral-900" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m3 3l7.07 16.97l2.51-7.39l7.39-2.51zM13 13l6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</span>
<span className="px-3 text-sm font-medium text-white font-sans">Get Started</span>
</a>
</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-0 rounded-3xl overflow-hidden shadow-sm border-gradient before:rounded-3xl" style={{'--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>
<div className="relative overflow-hidden text-white bg-black pt-6 pr-6 pb-6 pl-6">
<div className="flex gap-2 mb-4 items-center">
<svg className="w-6 h-6 text-white" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.39 5.538C6.933 6.13 6 7.563 6 10c0 2 1 3 2 3c1.375 0 2-1 2-2s-.625-2-2-2c-.375 0-.687.07-.956.2M17.39 5.538C16.933 6.13 16 7.563 16 10c0 2 1 3 2 3c1.375 0 2-1 2-2s-.625-2-2-2c-.375 0-.687.07-.956.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<div className="flex items-center gap-1 mb-4 text-white">
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
</div>
<p className="text-base leading-relaxed mb-6 font-sans">Nebula transformed our brand identity beyond what we imagined. Professional, creative, and delivered on time. Our online presence has never looked better.</p>
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium font-sans">Emma Collins</div>
<div className="text-xs mt-1 text-white/70 font-sans">CEO, Powersurge</div>
</div>
<img alt="Emma Collins" className="w-8 h-8 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&amp;h=64&amp;fit=crop&amp;crop=faces"/>
</div>
</div>
<div className="relative overflow-hidden text-black bg-white pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-3 mb-4">
<img alt="Michael Brooks" className="w-6 h-6 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=64&amp;h=64&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="text-sm font-medium font-sans">Michael Brooks</div>
<div className="text-xs text-black/70 font-sans">CTO, Warpspeed</div>
</div>
</div>
<div className="flex gap-1 text-black mb-4 items-center">
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
</div>
<p className="leading-relaxed relative z-10 text-base font-sans">Working with Nebula was incredible. The sleek design resonates with customers and has greatly improved our user experience since launch.</p>
</div>
<div className="relative overflow-hidden text-white bg-black pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-2 mb-4">
<svg className="w-6 h-6 text-white" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.39 5.538C6.933 6.13 6 7.563 6 10c0 2 1 3 2 3c1.375 0 2-1 2-2s-.625-2-2-2c-.375 0-.687.07-.956.2M17.39 5.538C16.933 6.13 16 7.563 16 10c0 2 1 3 2 3c1.375 0 2-1 2-2s-.625-2-2-2c-.375 0-.687.07-.956.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<div className="flex items-center gap-1 mb-4 text-white">
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
</div>
<p className="text-base leading-relaxed mb-6 font-sans">From strategy to launch, Nebula was with us every step. Their creativity and expertise helped us stand out in a crowded market.</p>
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium font-sans">Emily Harris</div>
<div className="text-xs mt-1 text-white/70 font-sans">CEO, Boltshift</div>
</div>
<img alt="Emily Harris" className="w-8 h-8 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=64&amp;h=64&amp;fit=crop&amp;crop=faces"/>
</div>
</div>
<div className="lg:col-span-3 border-t border-white/10">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
<div className="text-white bg-black border-white/10 border-r pt-6 pr-6 pb-6 pl-6">
<div className="text-3xl sm:text-4xl mb-2 font-bricolage font-semibold tracking-tighter" style={{}}>4.6s</div>
<div className="text-xs text-white/70 font-sans">Average page load time across projects</div>
</div>
<div className="p-6 border-r bg-black text-white border-white/10">
<div className="text-3xl sm:text-4xl mb-2 font-bricolage font-semibold tracking-tighter" style={{}}>18+</div>
<div className="text-xs text-white/70 font-sans">Countries where our designs are used</div>
</div>
<div className="p-6 bg-black text-white">
<div className="text-3xl sm:text-4xl mb-2 font-bricolage font-semibold tracking-tighter" style={{}}>72%</div>
<div className="text-xs text-white/70 font-sans">Average conversion rate improvement</div>
</div>
</div>
</div>
</div>
</section>

<footer className="z-10 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6e3b7649-fe73-4230-9721-e8e268a9d238_3840w.webp)] bg-cover bg-center border-white/10 border-t mt-20 relative">
<div className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
<div className="overflow-hidden border-gradient before:rounded-3xl rounded-3xl relative" style={{'--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>
<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10"></div>
<div className="sm:px-10 lg:px-14 lg:py-16 pt-12 pr-6 pb-12 pl-6 relative backdrop-blur-lg">
<div className="flex flex-col lg:flex-row items-start justify-between gap-10">
<div className="max-w-md">
<a className="inline-flex items-center" href="#">
<span className="bg-center text-xl font-semibold tracking-tight w-[120px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/afe97397-fe5e-43e3-b857-b1da0066b2df_1600w.png)] bg-cover"></span>
</a>
<p className="mt-4 text-sm text-slate-300 leading-relaxed font-sans">Transform your inbox into a productivity powerhouse with AI-powered email management that saves you hours every week.</p>
<form className="mt-6 flex items-center gap-2">
<div className="flex-1">
<label className="sr-only font-sans" htmlFor="footer-email">Email</label>
<input className="w-full rounded-2xl bg-white/5 text-white placeholder-slate-400 px-4 py-3 text-sm border-gradient before:rounded-2xl focus:ring-2 focus:ring-lime-400/30 outline-none" id="footer-email" placeholder="Your email" required="" style={{'--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}} type="email"/>
</div>
<a className="inline-flex items-center justify-center gap-2 border-gradient before:rounded-2xl hover:text-white transition text-sm font-medium text-white/90 bg-white/5 rounded-2xl pt-3 pr-5 pb-3 pl-5" href="#" style={{'--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>Subscribe</a>
</form>
<p className="mt-2 text-xs text-slate-400 font-sans">Monthly updates. No spam.</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full lg:w-auto">
<div className="">
<p className="text-sm font-medium text-slate-200 tracking-tight font-sans">Product</p>
<ul className="mt-3 space-y-2 text-sm text-slate-400">
<li className=""><a className="hover:text-white transition font-sans" href="#features">Features</a></li>
<li><a className="hover:text-white transition font-sans" href="#how-it-works">How it works</a></li>
<li><a className="hover:text-white transition font-sans" href="#pricing">Pricing</a></li>
</ul>
</div>
<div className="">
<p className="text-sm font-medium text-slate-200 tracking-tight font-sans">Company</p>
<ul className="mt-3 space-y-2 text-sm text-slate-400">
<li><a className="hover:text-white transition font-sans" href="#">About</a></li>
<li className=""><a className="hover:text-white transition font-sans" href="#">Blog</a></li>
<li className=""><a className="hover:text-white transition font-sans" href="#">Careers</a></li>
</ul>
</div>
<div className="">
<p className="text-sm font-medium text-slate-200 tracking-tight font-sans">Legal</p>
<ul className="mt-3 space-y-2 text-sm text-slate-400">
<li><a className="hover:text-white transition font-sans" href="#">Privacy</a></li>
<li><a className="hover:text-white transition font-sans" href="#">Terms</a></li>
<li><a className="hover:text-white transition font-sans" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-500 font-sans">© 2024 Nebula. All rights reserved.</p>
<div className="flex items-center gap-2">
<a className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white/5 border-gradient before:rounded-2xl hover:bg-white/10 transition" href="#" style={{'--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>
<svg className="h-4 w-4 text-slate-300" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</a>
<a className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white/5 border-gradient before:rounded-2xl hover:bg-white/10 transition" href="#" style={{'--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>
<svg className="h-4 w-4 text-slate-300" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" fill="currentColor"></path></svg>
</a>
<a className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white/5 border-gradient before:rounded-2xl hover:bg-white/10 transition" href="#" style={{'--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>
<svg className="h-4 w-4 text-slate-300" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><circle cx="4" cy="4" fill="none" r="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</footer>

    </>
  );
}
