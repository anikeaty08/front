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
            duration: 1.8, // Slower, softer scroll
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
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => { lenis.raf(time * 1000); });
        gsap.ticker.lagSmoothing(0);

        // --- Loader Animation (Gentle Reveal) ---
        const tlLoader = gsap.timeline();
        tlLoader.to('.loader', { 
            clipPath: 'circle(0% at 50% 50%)', 
            duration: 1.5, 
            ease: "power2.inOut",
            delay: 1 
        })
        .from('.hero-title span', { 
            y: 100, 
            opacity: 0, 
            duration: 1.5, 
            stagger: 0.1, 
            ease: "power3.out" 
        }, "-=0.5")
        .from('.orb', {
            opacity: 0,
            duration: 2,
            ease: "power1.inOut"
        }, "-=1.5");

        // --- Horizontal Scroll (Moments) ---
        let mm = gsap.matchMedia();
        
        mm.add("(min-width: 769px)", () => {
            const wrapper = document.querySelector(".horizontal-wrapper");
            function getScrollAmount() {
                let wrapperWidth = wrapper.scrollWidth;
                return -(wrapperWidth - window.innerWidth);
            }

            const tween = gsap.to(wrapper, {
                x: getScrollAmount,
                ease: "none",
                scrollTrigger: {
                    trigger: "#moments",
                    pin: true,
                    scrub: 1, // Softer scrub
                    invalidateOnRefresh: true,
                    end: () => "+=" + (wrapper.scrollWidth - window.innerWidth)
                }
            });
        });

        // --- Marquee (Seamless & Slow) ---
        gsap.to(".marquee-track", {
            xPercent: -50, 
            repeat: -1, 
            duration: 40, // Much slower
            ease: "linear"
        });

        // --- Menu Logic ---
        const menuBtn = document.querySelector('.menu-btn');
        const menuLabel = document.querySelector('.menu-text-label');
        const menuOverlay = document.querySelector('.menu-overlay');
        const menuLinks = document.querySelectorAll('.menu-link');
        let isMenuOpen = false;
        const menuTl = gsap.timeline({ paused: true });

        // Menu Overlay: Circular Reveal
        menuTl.to(menuOverlay, { autoAlpha: 1, clipPath: 'circle(150% at 100% 0%)', duration: 1, ease: 'power3.inOut' })
              .to('.menu-link span', { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" }, "-=0.6");

        menuBtn.addEventListener('click', () => {
            if(!isMenuOpen) { 
                menuTl.play(); 
                menuLabel.textContent = 'Close'; 
                gsap.to(menuBtn, { color: '#FF9F43', duration: 0.3 });
                lenis.stop(); 
            }
            else { 
                menuTl.reverse(); 
                menuLabel.textContent = 'Menu'; 
                gsap.to(menuBtn, { color: '#F1E0AC', duration: 0.3 });
                lenis.start(); 
            }
            isMenuOpen = !isMenuOpen;
        });

        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if(isMenuOpen) { menuBtn.click(); }
                setTimeout(() => {
                    const targetId = link.getAttribute('href');
                    lenis.scrollTo(targetId);
                }, 1000);
            });
        });

        // --- Reveal Animations (Softer) ---
        document.querySelectorAll('.reveal-text').forEach(text => {
            gsap.fromTo(text, 
                { opacity: 0, y: 20 }, 
                { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", scrollTrigger: { trigger: text, start: "top 90%" }}
            );
        });

        gsap.from('.footer-cta span', { 
            y: 50, 
            opacity: 0, 
            duration: 1.5, 
            stagger: 0.1, 
            ease: "power2.out",
            scrollTrigger: { trigger: 'footer', start: "top 70%" }
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
      

<div className="noise-overlay"></div>

<div className="loader fixed inset-0 z-[100] bg-[#0F1115] text-[#F1E0AC] flex items-center justify-center">
<div className="flex flex-col items-center gap-6">

<div className="w-4 h-4 bg-[#FF9F43] rounded-full shadow-[0_0_20px_#FF9F43] animate-pulse"></div>
<div className="text-sm font-medium tracking-[0.2em] uppercase text-opacity-80">Hello Emberly</div>
</div>
</div>

<nav className="fixed top-0 left-0 w-full px-6 md:px-12 py-8 flex justify-between items-center z-50 text-[#FDFCF6]">
<a className="text-lg font-medium tracking-wide flex items-center gap-2 hover:text-[#FF9F43] transition-colors" href="#">
<span className="w-2 h-2 bg-[#FF9F43] rounded-full shadow-[0_0_10px_#FF9F43]"></span>
            Hello Emberly
        </a>
<button className="menu-btn group flex items-center gap-3 uppercase text-xs font-medium tracking-widest cursor-pointer text-[#F1E0AC]/80 hover:text-[#FF9F43] transition-colors">
<span className="relative overflow-hidden">
<span className="block transition-transform duration-500 group-hover:-translate-y-full menu-text-label">Menu</span>
<span className="absolute top-0 left-0 translate-y-full transition-transform duration-500 group-hover:translate-y-0 text-[#FDFCF6]">Open</span>
</span>
<span className="iconify group-hover:rotate-90 transition-transform duration-500" data-icon="lucide:align-right" data-width="20" strokeWidth="1.5"></span>
</button>
</nav>

<div className="menu-overlay fixed inset-0 bg-gradient-to-b from-[#1F1914] to-[#0F1115] text-[#FDFCF6] z-40 flex flex-col justify-center items-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-[#FF9F43]/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center gap-6 md:gap-8">
<a className="menu-link text-[10vw] md:text-[5vw] leading-none font-medium tracking-tight hover:text-[#FF9F43] transition-colors opacity-90 hover:opacity-100" href="#hero"><span className="block translate-y-8 opacity-0 transition-all duration-700">Sanctuary</span></a>
<a className="menu-link text-[10vw] md:text-[5vw] leading-none font-medium tracking-tight hover:text-[#FF9F43] transition-colors opacity-90 hover:opacity-100" href="#about"><span className="block translate-y-8 opacity-0 transition-all duration-700">Philosophy</span></a>
<a className="menu-link text-[10vw] md:text-[5vw] leading-none font-medium tracking-tight hover:text-[#FF9F43] transition-colors opacity-90 hover:opacity-100" href="#moments"><span className="block translate-y-8 opacity-0 transition-all duration-700">Moments</span></a>
<a className="menu-link text-[10vw] md:text-[5vw] leading-none font-medium tracking-tight hover:text-[#FF9F43] transition-colors opacity-90 hover:opacity-100" href="#contact"><span className="block translate-y-8 opacity-0 transition-all duration-700">Connect</span></a>
</div>
</div>

<main id="smooth-wrapper">
<div id="smooth-content">

<section className="relative h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden bg-[#0F1115]" id="hero">

<div className="orb w-[60vw] h-[60vw] bg-[#FF9F43] top-[-10%] left-[-10%] blur-[120px] opacity-20"></div>
<div className="orb w-[40vw] h-[40vw] bg-[#6366f1] bottom-[-10%] right-[-10%] blur-[100px] opacity-10"></div>
<div className="orb w-[30vw] h-[30vw] bg-[#F1E0AC] top-[40%] left-[60%] blur-[90px] opacity-10"></div>
<div className="relative z-10 flex flex-col items-start gap-10 mt-12 max-w-5xl">
<h1 className="hero-title text-5xl md:text-7xl lg:text-[5.5vw] leading-[1.1] font-medium tracking-tight text-[#FDFCF6]">
<span className="hero-line block overflow-hidden">
<span className="block translate-y-full">You are never alone</span>
</span>
<span className="hero-line block overflow-hidden text-[#FF9F43]">
<span className="block translate-y-full">in a village.</span>
</span>
</h1>
<div className="w-full md:w-3/4 flex flex-col gap-8">
<p className="hero-line text-lg md:text-xl font-light text-[#FDFCF6]/80 leading-[1.6] overflow-hidden max-w-xl">
<span className="block translate-y-full">A gentle companion for connection, memory, and purpose. We bring the warmth of community back to daily life.</span>
</p>
<div className="hero-line overflow-hidden pt-2">

<a className="block translate-y-full inline-flex items-center gap-3 text-sm font-medium tracking-wide bg-[#FF9F43]/10 text-[#FF9F43] px-8 py-4 rounded-full border border-[#FF9F43]/30 hover:bg-[#FF9F43] hover:text-[#0F1115] transition-all duration-500 group shadow-[0_0_20px_rgba(255,159,67,0.1)] hover:shadow-[0_0_30px_rgba(255,159,67,0.3)]" href="#contact">
                                Begin a conversation
                                <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 py-32 md:py-48 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 bg-[#0F1115]" id="about">
<div className="relative flex flex-col justify-between">
<div className="about-sticky md:sticky md:top-32 h-fit">
<span className="block text-sm font-medium tracking-widest text-[#FF9F43] uppercase mb-6 flex items-center gap-2 opacity-80">
<span className="iconify" data-icon="lucide:heart" data-width="14"></span> Our Heart
                        </span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight text-[#FDFCF6]">
                            Dignity is found in<br/><span className="text-[#FF9F43] italic">connection.</span>
</h2>
</div>
</div>
<div className="flex flex-col gap-12 pt-8 md:pt-32">
<p className="reveal-text text-xl md:text-2xl leading-[1.6] text-[#FDFCF6]/80 font-light">
                        Technology often feels cold and distant. We believe it should feel like a hand on your shoulder or a warm light in the window.
                    </p>
<p className="reveal-text text-xl md:text-2xl leading-[1.6] text-[#FDFCF6]/80 font-light">
                        Emberly is not a medical device or a social network. She is a presence—listening to stories, reminding you of loved ones, and gently guiding you through the day.
                    </p>

<div className="reveal-image-wrapper mt-8 md:mt-16 h-[300px] md:h-[400px] rounded-2xl overflow-hidden relative group border border-white/5">
<div className="w-full h-full bg-gradient-to-br from-[#1A1A2E] via-[#2A1F1F] to-[#1A1A2E]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#FF9F43] blur-[80px] opacity-40 animate-pulse"></div>
</div>
</div>
</section>

<section className="relative py-24 bg-[#0F1115] text-[#FDFCF6] overflow-hidden border-t border-b border-white/5" id="moments">
<div className="px-6 md:px-12 mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
<div>
<span className="block text-sm font-medium tracking-widest text-[#FF9F43] uppercase mb-4 opacity-80">Daily Life</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#FDFCF6]">Moments of Connection</h2>
</div>
<div className="flex items-center gap-2 text-sm text-[#FDFCF6]/50 uppercase tracking-widest">
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
                        Scroll gently
                    </div>
</div>
<div className="horizontal-scroll-container w-full overflow-hidden">
<div className="horizontal-wrapper flex gap-6 md:gap-8 px-6 md:px-12 w-fit">

<div className="project-card w-[85vw] md:w-[35vw] flex-shrink-0 flex flex-col gap-6 group cursor-default">
<div className="w-full h-[50vh] overflow-hidden rounded-2xl border border-white/5 relative gradient-card-1 transition-transform duration-700 hover:scale-[1.02]">
<div className="absolute inset-0 bg-[#FF9F43]/5 group-hover:bg-[#FF9F43]/10 transition-colors duration-500"></div>
<div className="absolute bottom-8 left-8 p-4 bg-black/20 backdrop-blur-md rounded-xl border border-white/10">
<span className="iconify text-[#FF9F43]" data-icon="lucide:sun" data-width="24"></span>
</div>
</div>
<div className="flex flex-col gap-2 px-2">
<h3 className="text-2xl font-medium text-[#FDFCF6]">The Morning Greeting</h3>
<p className="text-base text-[#FDFCF6]/60 leading-[1.6]">Starting the day with purpose, a gentle check-in, and a familiar voice.</p>
</div>
</div>

<div className="project-card w-[85vw] md:w-[35vw] flex-shrink-0 flex flex-col gap-6 group cursor-default">
<div className="w-full h-[50vh] overflow-hidden rounded-2xl border border-white/5 relative gradient-card-2 transition-transform duration-700 hover:scale-[1.02]">
<div className="absolute inset-0 bg-[#FF9F43]/5 group-hover:bg-[#FF9F43]/10 transition-colors duration-500"></div>
<div className="absolute bottom-8 left-8 p-4 bg-black/20 backdrop-blur-md rounded-xl border border-white/10">
<span className="iconify text-[#FF9F43]" data-icon="lucide:book-open" data-width="24"></span>
</div>
</div>
<div className="flex flex-col gap-2 px-2">
<h3 className="text-2xl font-medium text-[#FDFCF6]">Memory Lane</h3>
<p className="text-base text-[#FDFCF6]/60 leading-[1.6]">Reviving cherished stories through photos and music, keeping identity strong.</p>
</div>
</div>

<div className="project-card w-[85vw] md:w-[35vw] flex-shrink-0 flex flex-col gap-6 group cursor-default">
<div className="w-full h-[50vh] overflow-hidden rounded-2xl border border-white/5 relative gradient-card-3 transition-transform duration-700 hover:scale-[1.02]">
<div className="absolute inset-0 bg-[#FF9F43]/5 group-hover:bg-[#FF9F43]/10 transition-colors duration-500"></div>
<div className="absolute bottom-8 left-8 p-4 bg-black/20 backdrop-blur-md rounded-xl border border-white/10">
<span className="iconify text-[#FF9F43]" data-icon="lucide:users" data-width="24"></span>
</div>
</div>
<div className="flex flex-col gap-2 px-2">
<h3 className="text-2xl font-medium text-[#FDFCF6]">Family Circle</h3>
<p className="text-base text-[#FDFCF6]/60 leading-[1.6]">Bridging the gap with family through simple, effortless voice messages.</p>
</div>
</div>

<div className="project-card w-[85vw] md:w-[35vw] flex-shrink-0 flex flex-col gap-6 group cursor-default">
<div className="w-full h-[50vh] overflow-hidden rounded-2xl border border-white/5 relative gradient-card-4 transition-transform duration-700 hover:scale-[1.02]">
<div className="absolute inset-0 bg-[#FF9F43]/5 group-hover:bg-[#FF9F43]/10 transition-colors duration-500"></div>
<div className="absolute bottom-8 left-8 p-4 bg-black/20 backdrop-blur-md rounded-xl border border-white/10">
<span className="iconify text-[#FF9F43]" data-icon="lucide:moon" data-width="24"></span>
</div>
</div>
<div className="flex flex-col gap-2 px-2">
<h3 className="text-2xl font-medium text-[#FDFCF6]">Evening Calm</h3>
<p className="text-base text-[#FDFCF6]/60 leading-[1.6]">Reducing anxiety at dusk with soothing rhythms and reassurance.</p>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 py-32 md:py-48 bg-[#0F1115] relative overflow-hidden" id="trust">

<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#1F1914] to-transparent opacity-30 pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto text-center mb-20">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#FDFCF6] mb-6">A Sanctuary, Not a System.</h2>
<p className="text-lg text-[#FDFCF6]/70 font-light">Emberly is built on trust. We understand that inviting technology into your life requires safety, clarity, and respect.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
<div className="flex flex-col gap-6 p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-500">
<div className="w-12 h-12 rounded-full bg-[#FF9F43]/20 flex items-center justify-center text-[#FF9F43]">
<span className="iconify" data-icon="lucide:lock" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-[#FDFCF6]">Private Village</h3>
<p className="text-base text-[#FDFCF6]/60 leading-[1.6]">
                            Your data never leaves the village. We do not sell information. Your memories are sacred and yours alone.
                        </p>
</div>
<div className="flex flex-col gap-6 p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-500">
<div className="w-12 h-12 rounded-full bg-[#FF9F43]/20 flex items-center justify-center text-[#FF9F43]">
<span className="iconify" data-icon="lucide:heart-handshake" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-[#FDFCF6]">Companion, Not Clinician</h3>
<p className="text-base text-[#FDFCF6]/60 leading-[1.6]">
                            Emberly supports emotional well-being but does not replace medical care. We focus on the heart, not the chart.
                        </p>
</div>
<div className="flex flex-col gap-6 p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-500">
<div className="w-12 h-12 rounded-full bg-[#FF9F43]/20 flex items-center justify-center text-[#FF9F43]">
<span className="iconify" data-icon="lucide:sparkles" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-[#FDFCF6]">Humanity First</h3>
<p className="text-base text-[#FDFCF6]/60 leading-[1.6]">
                            No algorithms chasing engagement. Just simple, quiet tools designed to bring peace and reduce loneliness.
                        </p>
</div>
</div>
</section>

<section className="marquee-section py-12 md:py-16 border-y border-white/5 overflow-hidden whitespace-nowrap bg-[#0F1115] flex select-none relative">
<div className="absolute inset-0 bg-gradient-to-r from-[#0F1115] via-transparent to-[#0F1115] z-10 pointer-events-none"></div>
<div className="marquee-track flex gap-0 text-[4vw] md:text-[3vw] font-light tracking-wide leading-none text-[#FDFCF6]/10">
<div className="flex shrink-0 items-center">
<span className="text-stroke transition-all duration-500 px-8">Connection</span>
<span className="w-2 h-2 rounded-full bg-[#FF9F43] opacity-50"></span>
<span className="text-stroke transition-all duration-500 px-8">Dignity</span>
<span className="w-2 h-2 rounded-full bg-[#FF9F43] opacity-50"></span>
<span className="text-stroke transition-all duration-500 px-8">Memory</span>
<span className="w-2 h-2 rounded-full bg-[#FF9F43] opacity-50"></span>
<span className="text-stroke transition-all duration-500 px-8">Warmth</span>
<span className="w-2 h-2 rounded-full bg-[#FF9F43] opacity-50"></span>
</div>
<div className="flex shrink-0 items-center">
<span className="text-stroke transition-all duration-500 px-8">Connection</span>
<span className="w-2 h-2 rounded-full bg-[#FF9F43] opacity-50"></span>
<span className="text-stroke transition-all duration-500 px-8">Dignity</span>
<span className="w-2 h-2 rounded-full bg-[#FF9F43] opacity-50"></span>
<span className="text-stroke transition-all duration-500 px-8">Memory</span>
<span className="w-2 h-2 rounded-full bg-[#FF9F43] opacity-50"></span>
<span className="text-stroke transition-all duration-500 px-8">Warmth</span>
<span className="w-2 h-2 rounded-full bg-[#FF9F43] opacity-50"></span>
</div>
</div>
</section>

<footer className="bg-gradient-to-b from-[#0F1115] to-[#161210] text-[#FDFCF6] px-6 md:px-12 pt-32 pb-12 relative z-10" id="contact">
<div className="footer-top mb-24 md:mb-32 text-center md:text-left">
<div className="text-sm font-medium tracking-widest text-[#FF9F43] uppercase mb-6 opacity-80">An Invitation</div>
<div className="footer-cta text-[6vw] leading-[1.1] font-medium tracking-tight text-[#FDFCF6]">
<span className="block">Would you like to</span>
<span className="block text-[#FF9F43]/90 italic">begin a conversation?</span>
</div>
<div className="mt-8">
<a className="inline-flex items-center gap-3 text-lg font-light text-[#FDFCF6] hover:text-[#FF9F43] transition-colors border-b border-white/20 pb-1" href="mailto:hello@emberly.com">
                            hello@emberly.com
                         </a>
</div>
</div>
<div className="footer-bottom flex flex-col md:flex-row justify-between items-center gap-6 text-xs uppercase tracking-widest text-[#FDFCF6]/40 font-medium border-t border-white/10 pt-12">
<div className="flex gap-6">
<span>© 2024 Hello Emberly</span>
<a className="hover:text-[#FDFCF6] transition-colors" href="#">Privacy</a>
</div>
<button className="flex items-center gap-2 hover:text-[#FF9F43] transition-colors group" onclick="window.lenis.scrollTo(0)">
                        Return to Light <span className="iconify group-hover:-translate-y-1 transition-transform duration-300 text-[#FF9F43]" data-icon="lucide:arrow-up" data-width="14"></span>
</button>
</div>
</footer>
</div>
</main>





    </>
  );
}
