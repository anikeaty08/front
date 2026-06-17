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



        gsap.registerPlugin(ScrollTrigger);

        // --- Smooth Scroll (Lenis) ---
        const lenis = new Lenis({
            duration: 2.0, 
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            smooth: true
        });
        window.lenis = lenis;

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // --- Fade In Elements ---
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, observerOptions);
        document.querySelectorAll('.fade-in-section').forEach(section => {
            observer.observe(section);
        });

        // --- Animations ---
        // Organic Ember Floating
        gsap.to('.ember-core', {
            y: -20,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Dashboard Entrance
        gsap.from('.glass-panel', {
            y: 30,
            opacity: 0,
            duration: 1.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.glass-panel',
                start: "top 85%"
            }
        });

        // --- UX Interactions ---

        // 1. Ember Pulse Interaction
        const speakBtn = document.getElementById('speak-btn');
        const emberCore = document.getElementById('main-ember');

        speakBtn.addEventListener('mouseenter', () => {
            emberCore.classList.add('intensified');
        });
        speakBtn.addEventListener('mouseleave', () => {
            emberCore.classList.remove('intensified');
        });

        // 2. Constellation Toggle Logic (Click instead of Hover)
        const stars = document.querySelectorAll('.star-marker');
        const mapArea = document.getElementById('constellation-map');

        stars.forEach(star => {
            star.addEventListener('click', (e) => {
                e.stopPropagation(); // Stop click from hitting document
                
                // If this star is already active, close it.
                if (star.classList.contains('active')) {
                    star.classList.remove('active');
                    return;
                }

                // Otherwise, close all others and open this one
                stars.forEach(s => s.classList.remove('active'));
                star.classList.add('active');
            });
        });

        // Click anywhere else to close stars
        document.addEventListener('click', () => {
            stars.forEach(s => s.classList.remove('active'));
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
      

<div className="gradient-bg">
<div className="orb-float orb-1"></div>
<div className="orb-float orb-2"></div>
<div className="orb-float orb-3"></div>
</div>

<nav className="fixed top-0 left-0 w-full px-6 md:px-12 py-8 flex justify-between items-center z-50">
<a className="text-2xl font-light tracking-wide text-[#E2E8F0] flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity" href="#">
<span className="w-2 h-2 rounded-full bg-[#FFBF00] animate-pulse"></span>
            Hello Emberly
        </a>

<a className="touch-target text-lg font-normal text-readable-muted hover:text-[#D4AF37] transition-colors duration-500 flex items-center gap-2 group" href="#">
            Rest for now
            <span className="iconify group-hover:text-[#D4AF37] transition-colors duration-500" data-icon="lucide:moon" data-width="20"></span>
</a>
</nav>

<main id="smooth-wrapper">
<div id="smooth-content">

<section className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden">

<div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex justify-center items-center mb-16">

<div className="ember-core w-32 h-32 md:w-48 md:h-48 rounded-full blur-md z-10" id="main-ember"></div>

<div className="ember-halo absolute inset-0 rounded-full border border-[#D4AF37]/20 scale-50"></div>
<div className="ember-halo absolute inset-0 rounded-full border border-[#D4AF37]/10 scale-75" style={{animationDelay: '1s'}}></div>
<div className="ember-halo absolute inset-0 rounded-full border border-[#D4AF37]/5 scale-90" style={{animationDelay: '2s'}}></div>
</div>
<div className="text-center max-w-2xl z-20 flex flex-col gap-10 items-center fade-in-section is-visible">
<h1 className="text-4xl md:text-5xl font-extralight tracking-tight text-[#E2E8F0] leading-tight">
                        Good evening. <br/>
<span className="text-[#D4AF37]">I am listening.</span>
</h1>

<p className="text-xl md:text-2xl font-normal text-readable-muted leading-loose">
                        There is no rush here. Share a memory, ask a question, or simply sit with me in the light.
                    </p>

<button className="touch-target group relative px-10 py-5 rounded-full glass-panel text-[#FFBF00] text-lg font-medium tracking-wide transition-all duration-700 hover:bg-[#D4AF37]/10 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]" id="speak-btn">
<span className="relative z-10 flex items-center gap-3">
                            Speak with Emberly
                            <span className="w-2 h-2 rounded-full bg-[#FFBF00] shadow-[0_0_10px_#FFBF00] group-hover:scale-125 transition-transform duration-500"></span>
</span>
</button>
</div>
</section>

<section className="min-h-screen relative py-24 md:py-32 px-6 md:px-12 flex flex-col items-center">
<div className="max-w-3xl text-center mb-24 fade-in-section">
<h2 className="text-3xl font-light text-[#E2E8F0] mb-6">Your Constellation</h2>
<p className="text-xl text-readable-muted">Each memory you share adds a light to your sky. Click a star to remember.</p>
</div>

<div className="relative w-full max-w-5xl aspect-[16/9] glass-panel rounded-3xl overflow-hidden fade-in-section" id="constellation-map">

<svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: '0'}}>
<line stroke="rgba(212, 175, 55, 0.2)" strokeWidth="1" x1="20%" x2="40%" y1="30%" y2="50%"></line>
<line stroke="rgba(212, 175, 55, 0.15)" strokeWidth="1" x1="40%" x2="70%" y1="50%" y2="40%"></line>
<line stroke="rgba(212, 175, 55, 0.1)" strokeWidth="1" x1="40%" x2="35%" y1="50%" y2="70%"></line>
</svg>


<div className="star-marker absolute top-[30%] left-[20%] touch-target cursor-pointer z-10">
<div className="star-dot w-3 h-3 bg-[#FFBF00] rounded-full shadow-[0_0_15px_#FFBF00] animate-pulse transition-transform duration-300"></div>
<div className="star-tooltip absolute top-8 left-1/2 -translate-x-1/2 w-64 p-6 glass-panel rounded-xl bg-[#0A1128]/90 z-20">
<p className="text-base font-normal text-[#E2E8F0]">The summer garden in 1964. You mentioned the smell of lavender.</p>
</div>
</div>

<div className="star-marker absolute top-[50%] left-[40%] touch-target cursor-pointer z-10">
<div className="star-dot w-4 h-4 bg-[#D4AF37] rounded-full shadow-[0_0_20px_#D4AF37] transition-transform duration-300"></div>
<div className="star-tooltip absolute top-8 left-1/2 -translate-x-1/2 w-64 p-6 glass-panel rounded-xl bg-[#0A1128]/90 z-20">
<p className="text-base font-normal text-[#E2E8F0]">Teaching Sarah to ride a bike. She fell once, but got right back up.</p>
</div>
</div>

<div className="star-marker absolute top-[40%] left-[70%] touch-target cursor-pointer z-10">
<div className="star-dot w-2 h-2 bg-[#FFBF00] rounded-full shadow-[0_0_10px_#FFBF00] opacity-80 transition-transform duration-300"></div>
<div className="star-tooltip absolute top-8 left-1/2 -translate-x-1/2 w-64 p-6 glass-panel rounded-xl bg-[#0A1128]/90 z-20">
<p className="text-base font-normal text-[#E2E8F0]">A quiet afternoon in the library.</p>
</div>
</div>

<div className="star-marker absolute top-[70%] left-[35%] touch-target cursor-pointer z-10">
<div className="star-dot w-2.5 h-2.5 bg-[#E2E8F0] rounded-full shadow-[0_0_10px_#E2E8F0] opacity-60 transition-transform duration-300"></div>
</div>
<div className="absolute bottom-8 right-8 text-sm text-[#D4AF37] font-medium tracking-widest uppercase opacity-80">
                       5 Memories Preserved
                   </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 w-full max-w-4xl fade-in-section">
<div className="glass-panel p-8 rounded-2xl flex flex-col gap-4 hover:bg-white/5 transition-colors duration-500">
<div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-2">
<span className="iconify" data-icon="lucide:heart-handshake" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-[#E2E8F0]">Emotional Resonance</h3>
<p className="text-lg font-normal text-readable-muted">You seemed happy talking about your travels today. Shall we revisit Italy tomorrow?</p>
</div>
<div className="glass-panel p-8 rounded-2xl flex flex-col gap-4 hover:bg-white/5 transition-colors duration-500">
<div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-2">
<span className="iconify" data-icon="lucide:sparkles" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-[#E2E8F0]">Cognitive Spark</h3>
<p className="text-lg font-normal text-readable-muted">We practiced 3 names from your family tree. Your recall is strengthening.</p>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-4xl mx-auto border-t border-white/5">
<div className="flex flex-col gap-12 fade-in-section">
<div className="flex flex-col md:flex-row gap-8 items-start">
<span className="text-[#D4AF37] text-2xl font-light">01</span>
<div>
<h3 className="text-2xl font-normal text-[#E2E8F0] mb-4">Dignity First</h3>
<p className="text-xl font-normal text-readable-muted">Technology should never feel childish. We designed Emberly to respect your life experience, using clarity instead of simplicity.</p>
</div>
</div>
<div className="flex flex-col md:flex-row gap-8 items-start">
<span className="text-[#D4AF37] text-2xl font-light">02</span>
<div>
<h3 className="text-2xl font-normal text-[#E2E8F0] mb-4">The Gentle Bridge</h3>
<p className="text-xl font-normal text-readable-muted">No sudden movements. No harsh alarms. Just a conversation that flows at your pace, like a chat by the fireside.</p>
</div>
</div>
</div>
</section>

<footer className="py-12 text-center text-[#E2E8F0]/40 font-normal text-base relative z-10">
<p className="mb-4">Designed for peace of mind.</p>
<div className="flex justify-center gap-8 text-sm tracking-widest uppercase text-[#D4AF37]/80">
<a className="touch-target hover:text-[#D4AF37] transition-colors" href="#">Privacy</a>
<a className="touch-target hover:text-[#D4AF37] transition-colors" href="#">Guide</a>
<a className="touch-target hover:text-[#D4AF37] transition-colors" href="#">Contact</a>
</div>
</footer>
</div>
</main>





    </>
  );
}
