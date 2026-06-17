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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            // Prevent Flash of Unstyled Content
            gsap.to("body", { opacity: 1, duration: 0.1 });

            // 1. Initialize Lenis (Smooth Scrolling)
            const lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                direction: 'vertical',
                gestureDirection: 'vertical',
                smooth: true,
                mouseMultiplier: 1,
                smoothTouch: false,
                touchMultiplier: 2,
                infinite: false,
            });

            // Synchronize ScrollTrigger with Lenis
            lenis.on('scroll', ScrollTrigger.update);
            gsap.ticker.add((time) => {
                lenis.raf(time * 1000);
            });
            gsap.ticker.lagSmoothing(0, 0);

            // 2. Preloader & Hero Intro Animation
            const tl = gsap.timeline();
            
            tl.to(".loader-bar", {
                width: "100%",
                duration: 1.5,
                ease: "power3.inOut"
            })
            .to(".loader", {
                yPercent: -100,
                duration: 1.2,
                ease: "power4.inOut"
            }, "+=0.2")
            .from(".hero-img", {
                scale: 1.2,
                filter: "brightness(0.3)",
                duration: 2,
                ease: "power3.out"
            }, "-=1.2")
            .fromTo(".hero-text span", 
                { yPercent: 100 },
                { yPercent: 0, duration: 1.2, ease: "power4.out" }, 
                "-=1.5"
            )
            .to(".hero-fade", {
                opacity: 1,
                y: -20,
                duration: 1,
                ease: "power3.out"
            }, "-=1");

            // 3. Text Reveal Animations (Split-animate)
            const splitElements = document.querySelectorAll(".split-animate");
            splitElements.forEach((el) => {
                const words = el.querySelectorAll(".word-inner");
                gsap.to(words, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%", // Triggers when the top of the element hits 85% of the viewport height
                        toggleActions: "play none none reverse"
                    },
                    y: "0%",
                    duration: 1,
                    stagger: 0.015,
                    ease: "power3.out"
                });
            });

            // 4. Card Stack Effect (Sticky overlap scaling)
            const cards = document.querySelectorAll(".card-item .card-inner");
            cards.forEach((card, i) => {
                if(i === cards.length - 1) return; // Skip the last card as it doesn't get covered
                
                gsap.to(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top top+=10%",
                        endTrigger: ".stack-container",
                        end: "bottom bottom",
                        scrub: true,
                    },
                    scale: 0.9 + (i * 0.02), // Progressively smaller scale down
                    filter: "brightness(0.5)", // Darken as it gets covered
                    ease: "none"
                });
            });
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
      

<div className="fixed inset-0 pointer-events-none z-[9000] opacity-5 noise-overlay" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=\\'0 0 200 200\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'noiseFilter\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.65\\' numOctaves=\\'3\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23noiseFilter)\\' opacity=\\'1\\'/%3E%3C/svg%3E\')'}}></div>


<div className="loader fixed inset-0 bg-black z-[10000] flex justify-center items-center text-white">
<div className="loader-text tracking-tight font-normal text-[5vw]" style={{fontFamily: '\'Syncopate\', sans-serif'}}>P&amp;Y CONSULTING</div>
<div className="loader-bar absolute bottom-0 left-0 h-1 bg-white w-0" style={{width: '100%'}}></div>
</div><nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference text-white">
<div className="font-normal text-2xl tracking-tight" style={{fontFamily: '\'Syncopate\', sans-serif'}}>P&amp;Y CONSULTING</div>
<div className="hidden md:flex gap-10 text-sm uppercase tracking-widest">
<a className="hover:text-[#2563eb] transition-colors" href="#home">Home</a>
<a className="hover:text-[#2563eb] transition-colors" href="#services">Services</a>
<a className="hover:text-[#2563eb] transition-colors" href="#projects">Projects</a>
<a className="hover:text-[#2563eb] transition-colors" href="#management">Management</a>
</div>
<div className="md:hidden text-sm tracking-widest uppercase">MENU</div>
</nav>

<div className="wrapper relative z-10 bg-[#E3E1DC] mb-[100vh] shadow-[0_50px_100px_rgba(0,0,0,0.5)]">

<section className="h-screen relative flex items-center justify-center overflow-hidden" id="home">
<img alt="Hero" className="hero-img w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 brightness-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7161665e-d0c1-47eb-8d19-ef86202a6aaa_3840w.jpg" style={{filter: 'brightness(0.75)'}}/>
<div className="relative z-10 text-center flex flex-col items-center w-full px-6">
<h1 className="text-[25vw] sm:text-[22vw] md:text-[18vw] leading-none hero-text overflow-hidden font-normal tracking-tight text-white/90" style={{fontFamily: '\'Syncopate\', sans-serif'}}>
<span className="block translate-y-full">P&amp;Y</span>
</h1>
<p className="uppercase hero-fade text-xs md:text-6xl leading-loose md:mt-10 bg-clip-text text-transparent font-normal tracking-[0.3em] text-center bg-gradient-to-br from-[#4c6894] to-[#000000]/50 opacity-0 max-w-full mt-6">P&amp;Y CONSULTING</p><p className="uppercase hero-fade text-xs md:text-sm tracking-[0.3em] md:tracking-[0.8em] opacity-0 mt-6 md:mt-10 font-light text-white/80 max-w-full text-center leading-loose">
                    Property development specialists from conception to completion
                </p>
</div>
</section>

<section className="py-32 px-6 md:px-20 grid lg:grid-cols-[1fr_1.2fr] gap-16 md:gap-24 max-w-[1600px] mx-auto bg-[#E3E1DC]">
<div className="flex flex-col">
<h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.1] split-animate tracking-tight uppercase font-normal" style={{fontFamily: '\'Syncopate\', sans-serif'}}><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">MODERN </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">&amp; </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">SPECIALIZED </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">TECHNIQUES. </span></span></h2>
<p className="mt-8 text-2xl md:text-3xl font-light text-gray-600 split-animate leading-relaxed max-w-xl"><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">Modern </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">and </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">specialized </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">project </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">management </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">techniques </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">to </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">oversee </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">the </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">planning, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">design, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">and </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">construction </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">of </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">a </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">project. </span></span></p>
</div>
<div className="text-xl md:text-2xl font-light leading-relaxed text-gray-800 lg:pt-4">
<p className="mb-8 split-animate"><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">Welcome </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">to </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">P&amp;Y </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">Consulting, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">a </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">leading </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">construction </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">company </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">dedicated </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">to </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">building </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">the </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">future </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">with </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">precision, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">quality, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">and </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">reliability. </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">We </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">specialize </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">in </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">delivering </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">exceptional </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">construction </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">projects, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">from </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">groundbreaking </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">developments </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">to </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">meticulously </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">managed </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">renovations. </span></span></p>
<p className="mb-12 split-animate text-xl md:text-2xl text-gray-600"><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">Our </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">portfolio </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">showcases </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">a </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">range </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">of </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">completed </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">projects </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">that </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">redefine </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">industry </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">standards, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">as </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">well </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">as </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">ongoing </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">ventures </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">that </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">reflect </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">our </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">commitment </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">to </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">innovation </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">and </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">sustainable </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">practices. </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">With </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">a </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">team </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">of </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">expert </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">architects, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">engineers, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">and </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">builders, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">we </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">bring </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">visions </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">to </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">life </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">through </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">a </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">seamless </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">blend </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">of </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">expertise </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">and </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">dedication, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">ensuring </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">that </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">each </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">project </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">stands </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">as </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">a </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">testament </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">to </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">our </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">high </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">standards </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">and </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">attention </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">to </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">detail. </span></span></p>
<div className="h-px w-full bg-black/10 my-12"></div>
<div className="flex flex-wrap gap-8 md:gap-16 text-sm md:text-base uppercase tracking-widest split-animate text-[#2563eb] font-normal"><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">COMING </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">SOON </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">— </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">CASA </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">RIAZ </span></span></div>
</div>
</section>

<section className="stack-section py-[10vh] bg-[#121212] text-[#E3E1DC] relative" id="services">
<div className="text-center mb-16 px-6 max-w-4xl mx-auto">
<div className="text-sm uppercase tracking-widest mb-4 opacity-50 font-light">
                    Development Managers Working For You
                </div>
<h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-8 font-normal" style={{fontFamily: '\'Syncopate\', sans-serif'}}>OUR SERVICES</h2>
<div className="space-y-6 max-w-3xl mx-auto">
<p className="text-xl md:text-2xl font-light text-gray-400 leading-relaxed split-animate"><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">We </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">offer </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">a </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">fully </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">integrated </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">suite </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">of </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">services </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">designed </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">to </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">take </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">you </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">from </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">initial </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">concept </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">discussions </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">to </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">the </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">moment </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">you </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">step </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">into </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">your </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">completed </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">home. </span></span></p>
<p className="text-xl md:text-2xl font-light text-gray-400 leading-relaxed split-animate"><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">Every </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">residence </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">we </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">deliver </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">is </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">entirely </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">bespoke. </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">No </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">two </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">projects </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">are </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">alike, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">and </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">our </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">approach </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">is </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">carefully </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">tailored </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">to </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">reflect </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">the </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">vision, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">lifestyle, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">and </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">expectations </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">of </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">each </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">client. </span></span></p>
<p className="text-xl md:text-2xl font-light text-gray-400 leading-relaxed split-animate"><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">Our </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">expertise </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">spans </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">architecture, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">construction, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">project </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">management, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">and </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">landscape </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">and </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">garden </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">design </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">— </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">brought </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">together </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">under </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">one </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">coordinated </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">structure. </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">From </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">early </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">design </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">development </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">and </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">planning </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">approvals </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">to </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">precision </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">construction, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">interior </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">detailing, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">and </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">curated </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">outdoor </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">environments, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">every </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">element </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">is </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">managed </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">with </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">clarity </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">and </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">control. </span></span></p>
<p className="text-xl md:text-2xl font-light text-gray-400 leading-relaxed split-animate"><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">With </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">deep </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">experience </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">across </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">multiple </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">construction </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">delivery </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">methods, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">we </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">structure </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">each </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">project </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">in </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">the </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">way </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">that </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">best </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">protects </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">your </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">time, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">investment, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">and </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">outcome. </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">Our </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">project </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">management </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">team </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">provides </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">disciplined </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">oversight </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">at </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">every </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">stage </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">— </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">ensuring </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">transparency, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">cost </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">control, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">and </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">uncompromising </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">quality. </span></span></p>
<p className="text-xl md:text-2xl font-light text-gray-400 leading-relaxed split-animate"><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">We </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">are </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">recognised </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">for </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">our </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">meticulous </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">attention </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">to </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">detail, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">refined </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">craftsmanship, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">and </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">exceptional </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">finishes. </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">The </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">result </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">is </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">more </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">than </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">a </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">completed </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">property </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">— </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">it </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">is </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">a </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">home </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">executed </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">to </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">the </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">highest </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">architectural </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">and </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">construction </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">standards, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">inside </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">and </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">out. </span></span></p>
</div>
<div className="flex flex-wrap justify-center gap-6 md:gap-10 uppercase text-sm text-white/70 tracking-widest mt-12 font-light">
<span>1. Construction</span>
<span className="text-[#2563eb] hidden md:block">•</span>
<span>2. Design &amp; Architecture</span>
<span className="text-[#2563eb] hidden md:block">•</span>
<span>3. Project Management</span>
<span className="text-[#2563eb] hidden md:block">•</span>
<span>4. Garden Design</span>
</div>
</div>
<div className="stack-container w-full max-w-[1400px] mx-auto relative pb-[10vh] mt-20">

<div className="card-item sticky top-[5vh] md:top-[10vh] h-[85vh] md:h-[80vh] w-full flex items-center justify-center mb-[5vh]">
<div className="card-inner w-[90%] h-full bg-[#1a1a1a] border border-white/10 relative overflow-hidden flex flex-col md:grid md:grid-cols-[1fr_1.2fr] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] group">
<div className="card-content p-6 sm:p-8 md:p-16 flex flex-col justify-between bg-[#1a1a1a] z-10 order-2 md:order-1 flex-1 md:h-full overflow-y-auto md:overflow-hidden">
<div>
<div className="text-5xl md:text-6xl mb-2 md:mb-4 text-[#dc2626]/80 tracking-tight font-normal" style={{fontFamily: '\'Syncopate\', sans-serif'}}>01</div>
<h3 className="uppercase text-3xl md:text-4xl font-normal tracking-tight">Construction</h3>
<p className="text-xs md:text-sm mt-2 md:mt-4 opacity-70 uppercase tracking-widest font-light">Taking control for you.</p>
</div>
<div className="text-gray-400 font-light text-base sm:text-lg md:text-xl leading-relaxed py-4 md:py-0">
                                We oversee the entire construction process, ensuring precision, quality, and strict adherence to timelines. From initial groundwork to final luxury finishes.
                            </div>
<button className="text-left uppercase tracking-widest text-xs md:text-sm border-b border-white/30 pb-2 w-max hover:text-white transition-colors font-light mt-auto">
                                View Details
                            </button>
</div>
<div className="card-img-wrap relative w-full h-[45%] md:h-full overflow-hidden order-1 md:order-2 shrink-0 bg-gray-900">
<img alt="Construction Management" className="card-img w-full h-full object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8ff7135b-dc45-4390-b410-11b5ec56cd55_1600w.jpg"/>
</div>
</div>
</div>

<div className="card-item sticky top-[5vh] md:top-[10vh] h-[85vh] md:h-[80vh] w-full flex items-center justify-center mb-[5vh]">
<div className="card-inner w-[90%] h-full bg-[#1a1a1a] border border-white/10 relative overflow-hidden flex flex-col md:grid md:grid-cols-[1fr_1.2fr] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] group">
<div className="card-content p-6 sm:p-8 md:p-16 flex flex-col justify-between bg-[#1a1a1a] z-10 order-2 md:order-1 flex-1 md:h-full overflow-y-auto md:overflow-hidden">
<div>
<div className="text-5xl md:text-6xl mb-2 md:mb-4 text-[#16a34a]/80 tracking-tight font-normal" style={{fontFamily: '\'Syncopate\', sans-serif'}}>02</div>
<h3 className="uppercase text-3xl md:text-4xl font-normal tracking-tight">Project Management</h3>
<p className="text-xs md:text-sm mt-2 md:mt-4 opacity-70 uppercase tracking-widest font-light">We help you find your dream property</p>
</div>
<div className="text-gray-400 font-light text-base sm:text-lg md:text-xl leading-relaxed py-4 md:py-0">
                                Navigating the real estate market to source the perfect plot or existing structure. Our extensive network ensures you get prime access to exclusive opportunities.
                            </div>
<button className="text-left uppercase tracking-widest text-xs md:text-sm border-b border-white/30 pb-2 w-max hover:text-white transition-colors font-light mt-auto">
                                View Details
                            </button>
</div>
<div className="card-img-wrap relative w-full h-[45%] md:h-full overflow-hidden order-1 md:order-2 shrink-0 bg-gray-900">
<img alt="Property Finders" className="card-img w-full h-full object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa475bed-0af1-4c02-b547-82169063f156_1600w.jpg"/>
</div>
</div>
</div>

<div className="card-item sticky top-[5vh] md:top-[10vh] h-[85vh] md:h-[80vh] w-full flex items-center justify-center mb-[5vh]">
<div className="card-inner w-[90%] h-full bg-[#1a1a1a] border border-white/10 relative overflow-hidden flex flex-col md:grid md:grid-cols-[1fr_1.2fr] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] group">
<div className="card-content p-6 sm:p-8 md:p-16 flex flex-col justify-between bg-[#1a1a1a] z-10 order-2 md:order-1 flex-1 md:h-full overflow-y-auto md:overflow-hidden">
<div>
<div className="text-5xl md:text-6xl mb-2 md:mb-4 text-[#2563eb]/80 tracking-tight font-normal" style={{fontFamily: '\'Syncopate\', sans-serif'}}>03</div>
<h3 className="uppercase text-3xl md:text-4xl font-normal tracking-tight">Garden Design</h3>
<p className="text-xs md:text-sm mt-2 md:mt-4 opacity-70 uppercase tracking-widest font-light">All over Mallorca</p>
</div>
<div className="text-gray-400 font-light text-base sm:text-lg md:text-xl leading-relaxed py-4 md:py-0">
                                Multiple developments completed in our portfolio across the island. We bring local expertise and island-wide logistical capabilities to every site.
                            </div>
<button className="text-left uppercase tracking-widest text-xs md:text-sm border-b border-white/30 pb-2 w-max hover:text-white transition-colors font-light mt-auto">
                                View Details
                            </button>
</div>
<div className="card-img-wrap relative w-full h-[45%] md:h-full overflow-hidden order-1 md:order-2 shrink-0 bg-gray-900">
<img alt="Large Coverage" className="card-img w-full h-full object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/833fc80d-d787-4e67-9689-da806e08f382_1600w.jpg"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-20 max-w-[1800px] mx-auto bg-[#E3E1DC]" id="projects">
<div className="mb-24">
<h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-normal" style={{fontFamily: '\'Syncopate\', sans-serif'}}>LATEST PROJECTS</h2>
<p className="mt-6 text-2xl font-light text-gray-600">A showcase of our recent transformations and developments.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">

<div className="group cursor-pointer">
<div className="overflow-hidden aspect-[4/3] mb-8 relative bg-gray-200">
<img alt="Country Villa" className="transition-transform duration-1000 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d5870ce-9a56-4f28-b9c2-801c98f7f3c2_1600w.jpg"/>
</div>
<h3 className="text-3xl font-normal tracking-tight mb-3">Country Villa</h3>
<p className="text-gray-600 font-light text-xl leading-relaxed">Impressive country estate in the wine region of Mallorca</p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden aspect-[4/3] mb-8 relative bg-gray-200">
<img alt="Modern Town House" className="transition-transform duration-1000 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/86c0a452-da61-4364-8f89-b72ff593c9fd_1600w.png"/>
</div>
<h3 className="text-3xl font-normal tracking-tight mb-3">Modern Town House</h3>
<p className="text-gray-600 font-light text-xl leading-relaxed">600m2 New build in the hills of Alaro. 5 Bed 8 bathroom.</p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden aspect-[4/3] mb-8 relative bg-gray-200">
<img alt="New build houses" className="transition-transform duration-1000 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2eafdb8c-3f9c-431e-be5d-c5acbc44010d_1600w.jpg"/>
</div>
<h3 className="text-3xl font-normal tracking-tight mb-3">New build houses</h3>
<p className="text-gray-600 font-light text-xl leading-relaxed">2 Impressive town houses under development.</p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden aspect-[4/3] mb-8 relative bg-gray-200">
<img alt="Son Antic" className="transition-transform duration-1000 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ac8c61a2-7a86-471c-b174-0168544ed736_1600w.jpg"/>
</div>
<h3 className="text-3xl font-normal tracking-tight mb-3">Son Antic — Santa Catalina</h3>
<p className="text-gray-600 font-light text-xl leading-relaxed">Remodelling an old town house in Palma into a modern yet rustic masterpiece. All new interior and up to date finishes.</p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden aspect-[4/3] mb-8 relative bg-gray-200">
<img alt="Country Villa" className="transition-transform duration-1000 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e520e9c2-3452-4aa4-b195-b38da8efe820_1600w.jpg"/>
</div>
<h3 className="text-3xl font-normal tracking-tight mb-3">Country Villa</h3>
<p className="text-gray-600 font-light text-xl leading-relaxed">Country Villa in the heart of the Tramontana Mountains</p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden aspect-[4/3] mb-8 relative bg-gray-200">
<img alt="Can Oreneta" className="transition-transform duration-1000 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7161665e-d0c1-47eb-8d19-ef86202a6aaa_1600w.jpg"/>
</div>
<h3 className="text-3xl font-normal tracking-tight mb-3">Can Oreneta — Alaró</h3>
<p className="text-gray-600 font-light text-xl leading-relaxed">Impressive town house distributed over 2 floors. Built to the highest quality, offering comfort of a modern spacious villa.</p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden aspect-[4/3] mb-8 relative bg-gray-200">
<img alt="1900 Town House" className="transition-transform duration-1000 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/72409d63-7ead-4161-a11d-dde37ef9d564_1600w.jpg"/>
</div>
<h3 className="text-3xl font-normal tracking-tight mb-3">1900 Town House</h3>
<p className="text-gray-600 font-light text-xl leading-relaxed">Remodeling an old town house in Alaro into a modern family-friendly home. All new interior and up to date finishes.</p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden aspect-[4/3] mb-8 relative bg-gray-200">
<img alt="Barbut Alaró" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c6b6980-54e4-4d8c-9ff6-e09b844d7b01_3840w.webp"/>
</div>
<h3 className="text-3xl font-normal tracking-tight mb-3">Barbut Alaró</h3>
<p className="text-gray-600 font-light text-xl leading-relaxed">A unique property in Alaró. Built to the highest quality, offering the comfort of a modern spacious villa in the heart of town.</p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden aspect-[4/3] mb-8 relative bg-gray-200">
<img alt="Modern Town House Renovation" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dccab47-16b0-4716-9e1a-b97f124e3031_1600w.webp"/>
</div>
<h3 className="text-3xl font-normal tracking-tight mb-3">Modern Town House Ext.</h3>
<p className="text-gray-600 font-light text-xl leading-relaxed">Complete renovation and extension adding a 3rd floor with a spectacular master bedroom, pool and terrace area.</p>
</div>
</div>
<div className="mt-24 text-center flex flex-col items-center">
<p className="text-xl text-gray-600 mb-8 font-light">For more information on our upcoming projects please feel free to contact us.</p>
<a className="inline-block uppercase tracking-widest text-base font-normal border-b border-black pb-2 hover:text-[#2563eb] hover:border-[#2563eb] transition-colors" href="#contact">
                    Get in touch
                </a>
</div>
</section>

<section className="py-32 px-6 md:px-20 max-w-[1400px] mx-auto bg-[#E3E1DC] border-t border-black/10" id="management">
<div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
<div className="sticky top-32">
<h2 className="text-3xl sm:text-4xl md:text-6xl tracking-tight mb-8 split-animate font-normal" style={{fontFamily: '\'Syncopate\', sans-serif'}}><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">PROJECT </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">MANAGEMENT </span></span></h2>
<p className="text-2xl font-light text-[#2563eb] split-animate leading-relaxed"><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">Providing </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">end-to-end </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">support </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">for </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">construction </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">projects. </span></span></p>
</div>
<div className="space-y-10 text-xl font-light text-gray-700 leading-relaxed pt-2">
<p className="split-animate text-2xl text-[#121212] font-normal"><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">We </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">represent </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">discerning </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">property </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">owners </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">and </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">investors, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">delivering </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">an </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">entirely </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">seamless </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">construction </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">and </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">renovation </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">experience </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">in </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">Mallorca. </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">Every </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">detail </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">is </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">managed </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">with </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">precision, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">discretion, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">and </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">uncompromising </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">standards. </span></span></p>
<p className="split-animate"><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">We </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">curate </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">a </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">select </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">portfolio </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">of </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">exceptional </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">construction </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">and </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">reform </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">opportunities </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">— </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">each </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">chosen </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">for </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">quality, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">positioning, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">and </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">long-term </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">value </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">across </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">prime </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">price </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">brackets. </span></span></p>
<p className="split-animate"><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">Our </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">project </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">management </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">team </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">serves </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">as </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">your </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">dedicated </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">representative, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">overseeing </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">every </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">phase </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">from </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">acquisition </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">through </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">development, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">construction, </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">and </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">bespoke </span></span><span className="word-wrap inline-block overflow-hidden align-top pb-[0.1em]"><span className="word-inner inline-block translate-y-[110%]">finishes. </span></span></p>
</div>
</div>
</section>
</div> 


<footer className="fixed bottom-0 left-0 w-full h-screen bg-[#121212] text-[#E3E1DC] z-0 flex flex-col justify-between pt-32 pb-8 px-6 md:px-20" id="contact">
<div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 h-full content-center">
<div className="flex flex-col justify-center">
<h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-[8vw] leading-[0.9] tracking-tight font-normal mb-8 uppercase" style={{fontFamily: '\'Syncopate\', sans-serif'}}>
                    LET'S<br/><span className="text-[#2563eb]">BUILD</span><br/>TOGETHER.
                </h2>
<a className="text-2xl md:text-4xl font-light border-b border-white/30 pb-3 w-max hover:text-[#2563eb] hover:border-[#2563eb] transition-colors mt-8" href="mailto:info@pyconsulting.com">
                    info@pyconsulting.com
                </a>
</div>
<div className="flex flex-col justify-center md:items-end space-y-12 lg:space-y-16 text-lg md:text-xl font-light text-gray-400">
<div className="md:text-right">
<h4 className="text-white uppercase tracking-widest text-sm mb-4 font-normal">Location</h4>
<p className="leading-relaxed">Palma de Mallorca,<br/>Balearic Islands, Spain</p>
</div>
<div className="md:text-right">
<h4 className="text-white uppercase tracking-widest text-sm mb-4 font-normal">Socials</h4>
<div className="flex md:justify-end gap-6">
<a className="hover:text-white transition-colors flex items-center gap-2 group" href="#">
<iconify-icon className="text-2xl group-hover:-rotate-12 transition-transform" icon="solar:camera-linear"></iconify-icon>
<span>Instagram</span>
</a>
<a className="hover:text-white transition-colors flex items-center gap-2 group" href="#">
<iconify-icon className="text-2xl group-hover:scale-110 transition-transform" icon="solar:user-circle-linear"></iconify-icon>
<span>LinkedIn</span>
</a>
</div>
</div>
<div className="md:text-right">
<h4 className="text-white uppercase tracking-widest text-sm mb-4 font-normal">Menu</h4>
<div className="flex flex-col md:items-end gap-2 text-base uppercase tracking-widest">
<a className="hover:text-white transition-colors" href="#home">Home</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#projects">Projects</a>
</div>
</div>
</div>
</div>
<div className="max-w-[1600px] w-full mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-500 uppercase tracking-widest font-light gap-4 mt-auto">
<p>© 2024 P&amp;Y Consulting. All Rights Reserved.</p>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>



    </>
  );
}
