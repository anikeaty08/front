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
bg: '#0a0a0a',
surface: '#141414',
text: '#f5f5f5',
muted: '#888888',
accent: '#f5f5f5',
stroke: '#1f1f1f',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Loader Logic
        const words = ["Design", "Create", "Inspire"];
        let wordIndex = 0;
        const wordEl = document.getElementById('loader-words');
        const counterEl = document.getElementById('loader-counter');
        const progressEl = document.getElementById('loader-progress');
        const loaderTag = document.getElementById('loader-tag');

        // Word Rotation
        const wordInterval = setInterval(() => {
            gsap.to(wordEl, {
                y: -20,
                opacity: 0,
                duration: 0.4,
                ease: "power2.inOut",
                onComplete: () => {
                    wordIndex = (wordIndex + 1) % words.length;
                    wordEl.textContent = words[wordIndex];
                    gsap.fromTo(wordEl, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 });
                }
            });
        }, 900);

        // Counter Logic
        let count = 0;
        const duration = 2700;
        const startTime = performance.now();

        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            count = Math.floor(progress * 100);
            counterEl.textContent = count.toString().padStart(3, '0');
            progressEl.style.transform = `scaleX(${progress})`;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                clearInterval(wordInterval);
                setTimeout(finishLoading, 400);
            }
        }

        // Entrance for loader elements
        gsap.to(loaderTag, { y: 0, opacity: 1, duration: 0.6, delay: 0.1, ease: "power2.out" });
        gsap.from(counterEl, { y: 20, opacity: 0, duration: 0.6, delay: 0.2 });
        requestAnimationFrame(updateCounter);

        function finishLoading() {
            const tl = gsap.timeline();
            tl.to("#loader", {
                opacity: 0,
                duration: 0.6,
                ease: "power2.inOut",
                onComplete: () => {
                    document.getElementById('loader').style.display = 'none';
                    startHeroAnimations();
                }
            });
            tl.to("#main-content", {
                opacity: 1,
                duration: 0.5
            }, "-=0.3");
        }

        // Hero Logic
        const roles = ["Creative", "Fullstack", "Founder", "Scholar"];
        let roleIndex = 0;
        const roleEl = document.getElementById('role-text');

        function startHeroAnimations() {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.fromTo(".name-reveal", 
                { opacity: 0, y: 50 }, 
                { opacity: 1, y: 0, duration: 1.2 }, 
                0.1
            );

            tl.fromTo(".blur-in", 
                { opacity: 0, filter: "blur(10px)", y: 20 }, 
                { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 }, 
                0.3
            );

            // Role rotation
            setInterval(() => {
                roleEl.classList.remove('animate-fade-in');
                void roleEl.offsetWidth; // trigger reflow
                roleIndex = (roleIndex + 1) % roles.length;
                roleEl.textContent = roles[roleIndex];
                roleEl.classList.add('animate-fade-in');
            }, 2000);
        }

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav div');
            if (window.scrollY > 100) {
                nav.classList.add('shadow-md', 'shadow-black/20');
            } else {
                nav.classList.remove('shadow-md', 'shadow-black/20');
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
      

<div className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-center items-center overflow-hidden" id="loader">
<div className="absolute top-8 left-8 md:top-12 md:left-12">
<span className="text-xs md:text-sm text-muted uppercase tracking-[0.3em] opacity-0" id="loader-tag">Portfolio</span>
</div>
<div className="relative h-24 overflow-hidden flex items-center justify-center">
<div className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text/80 text-center" id="loader-words">
                Design
            </div>
</div>
<div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
<span className="text-6xl md:text-8xl lg:text-9xl font-display text-text tabular-nums leading-none" id="loader-counter">000</span>
</div>
<div className="absolute bottom-0 left-0 w-full h-[3px] bg-stroke/50">
<div className="h-full w-full origin-left scale-x-0 progress-glow" id="loader-progress" style={{background: 'var(--blue-gradient)'}}></div>
</div>
</div>

<div className="opacity-0" id="main-content">

<nav className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4">
<div className="inline-flex items-center bg-surface/80 backdrop-blur-md border border-white/10 rounded-full px-2 py-2 gap-1 sm:gap-2">

<div className="logo-container relative w-9 h-9 p-[2px] rounded-full overflow-hidden cursor-pointer">
<div className="logo-ring absolute inset-0"></div>
<div className="relative w-full h-full bg-bg rounded-full flex items-center justify-center">
<span className="logo-text text-[13px] font-display italic tracking-tighter transition-transform duration-300">JA</span>
</div>
</div>
<div className="hidden md:block w-px h-5 bg-stroke mx-1"></div>
<a className="text-xs sm:text-sm text-text bg-stroke/50 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors" href="#">Home</a>
<a className="text-xs sm:text-sm text-muted hover:text-text hover:bg-stroke/50 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors" href="#">Work</a>
<a className="text-xs sm:text-sm text-muted hover:text-text hover:bg-stroke/50 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors" href="#">Resume</a>
<div className="w-px h-5 bg-stroke mx-1"></div>
<button className="gradient-border-hover relative text-xs sm:text-sm text-text rounded-full px-4 py-1.5 sm:py-2 transition-all">
<span className="relative z-10">Say hi ↗</span>
</button>
</div>
</nav>

<section className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden">

<div className="absolute inset-0 z-0">
<video autoplay="" className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop">
<source src="https://stream.mux.com/Gs3wZfrtz6ZfqZqQ02c02Z7lugV00FGZvRpcqFTel66r3g.m3u8" type="application/x-mpegURL"/>

<source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-flowing-blue-and-purple-gradient-background-video-41005-preview.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-black/20"></div>
<div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg to-transparent"></div>
</div>

<div className="relative z-10 max-w-4xl mx-auto pt-20">
<span className="blur-in block text-xs text-muted uppercase tracking-[0.3em] mb-8">Collection '26</span>
<h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text mb-6">
                    Michael Smith
                </h1>
<div className="blur-in h-8 md:h-10 mb-10 overflow-hidden">
<p className="text-lg md:text-xl lg:text-2xl text-muted">
                        A <span className="font-display italic text-text inline-block min-w-[120px]" id="role-text">Creative</span> lives in Chicago.
                    </p>
</div>
<p className="blur-in text-sm md:text-base text-muted leading-relaxed max-w-md mx-auto mb-12">
                    Designing seamless digital interactions by focusing on the unique nuances which bring systems to life.
                </p>
<div className="blur-in flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group relative px-7 py-3.5 bg-text text-bg text-sm rounded-full transition-transform hover:scale-105">
<div className="absolute inset-[-2px] bg-[var(--blue-gradient)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
<span className="relative font-medium group-hover:text-text transition-colors">See Works</span>
<div className="absolute inset-0 bg-bg rounded-full opacity-0 group-hover:opacity-100 -z-5"></div>
</button>
<button className="gradient-border-hover group relative px-7 py-3.5 bg-bg text-text text-sm rounded-full border-2 border-stroke">
<span className="relative z-10">Reach out...</span>
</button>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
<span className="text-xs text-muted uppercase tracking-[0.2em]">Scroll</span>
<div className="w-px h-10 bg-stroke relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1/2 bg-text animate-scroll-down"></div>
</div>
</div>
</section>
</div>


    </>
  );
}
