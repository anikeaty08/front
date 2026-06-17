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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lenis for smooth scrolling
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
        })

        // Get scroll value for GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update)
        gsap.ticker.add((time)=>{ lenis.raf(time * 1000) })
        gsap.ticker.lagSmoothing(0)

        // Navigation Hide/Show on Scroll
        let lastScrollY = window.scrollY;
        const navbar = document.getElementById('navbar');
        
        lenis.on('scroll', (e) => {
            if (e.animatedScroll > 100) {
                if (e.animatedScroll > lastScrollY) {
                    navbar.style.transform = 'translateY(-100%)';
                } else {
                    navbar.style.transform = 'translateY(0)';
                }
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            lastScrollY = e.animatedScroll;
        });

        // GSAP Animations
        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            // General Reveal Animation (Fade Up)
            const revealElements = document.querySelectorAll(".gs-reveal");
            revealElements.forEach((el) => {
                gsap.fromTo(el, 
                    { y: 40, opacity: 0 },
                    { 
                        y: 0, 
                        opacity: 1, 
                        duration: 1.2, 
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

            // Parallax Images
            const parallaxImages = document.querySelectorAll(".parallax-img");
            parallaxImages.forEach((img) => {
                gsap.to(img, {
                    yPercent: 20,
                    ease: "none",
                    scrollTrigger: {
                        trigger: img.parentElement,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
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
      

<div className="pointer-events-none fixed inset-0 z-50 h-full w-full mix-blend-overlay opacity-20" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>

<nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 mix-blend-difference flex justify-between items-center transition-transform duration-500" id="navbar">
<a className="text-xl tracking-tighter font-medium uppercase" href="#">PRIME</a>
<div className="hidden md:flex gap-8 text-sm font-light tracking-wide text-white/70">
<a className="hover:text-white transition-colors duration-300" href="#">Work</a>
<a className="hover:text-white transition-colors duration-300" href="#">Studio</a>
<a className="hover:text-white transition-colors duration-300" href="#">Journal</a>
</div>
<button className="text-sm font-light tracking-wide border-b border-transparent hover:border-white transition-all duration-300">Contact</button>
</nav>

<section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
<div className="absolute inset-0 w-full h-full bg-[#0D0D0D]">
<img alt="Premium Interior" className="w-full h-full object-cover animate-slow-zoom opacity-60 mix-blend-luminosity" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/30 via-transparent to-[#0D0D0D]"></div>
<div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl gs-reveal">
<span className="text-[#C8A96A] text-xs uppercase tracking-[0.2em] mb-6 font-medium">Architecture &amp; Design</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.1] mb-8">
                Premium Interior &amp; <br className="hidden md:block"/> Exterior Solutions
            </h1>
<p className="text-sm md:text-base text-white/60 font-light max-w-md mx-auto mb-10 leading-relaxed">
                Crafting timeless spaces with meticulously curated materials. We blend minimal aesthetics with functional excellence.
            </p>
<a className="group flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-4 rounded-full text-sm font-medium hover:bg-white hover:text-[#0D0D0D] transition-all duration-500 backdrop-blur-sm" href="#products">
                Explore Products
                <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 gs-reveal">
<span className="text-xs uppercase tracking-widest font-light">Scroll</span>
<div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-white scale-y-0 origin-top animate-[scrollDown_2s_ease-in-out_infinite]" style={{@keyframes scrollDown { 0% { transform: 'scaleY(0)', transformOrigin: 'top', } 50% { transform: 'scaleY(1)', transformOrigin: 'top', } 51% { transform: 'scaleY(1)', transformOrigin: 'bottom', } 100% { transform: 'scaleY(0)', transformOrigin: 'bottom'}}></div>
</div>
</div>
</section>

<section className="relative w-full bg-[#0D0D0D] py-24 md:py-32" id="products">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start relative">

<div className="w-full md:w-5/12 sticky top-32 pb-12 md:pb-0 z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 gs-reveal">Elevate Your Space</h2>
<p className="text-sm text-white/50 font-light leading-relaxed max-w-sm gs-reveal">
                    Discover our collection of premium surfaces, structural enhancements, and bespoke architectural elements designed for the modern purist.
                </p>
</div>

<div className="w-full md:w-7/12 flex flex-col gap-24 mt-12 md:mt-0">

<div className="group relative w-full aspect-[4/3] md:aspect-[3/2] overflow-hidden rounded-sm gs-reveal">
<img alt="Flooring" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100" src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
<div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
<div>
<span className="text-xs text-[#C8A96A] tracking-widest uppercase mb-2 block">01</span>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight">Premium Flooring</h3>
</div>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#0D0D0D] transition-all duration-500 backdrop-blur-sm">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="group relative w-full aspect-[4/3] md:aspect-[3/2] overflow-hidden rounded-sm gs-reveal">
<img alt="Ceiling" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=2900&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
<div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
<div>
<span className="text-xs text-[#C8A96A] tracking-widest uppercase mb-2 block">02</span>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight">Architectural Ceilings</h3>
</div>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#0D0D0D] transition-all duration-500 backdrop-blur-sm">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="group relative w-full aspect-[4/3] md:aspect-[3/2] overflow-hidden rounded-sm gs-reveal">
<img alt="Elevation" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2831&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
<div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
<div>
<span className="text-xs text-[#C8A96A] tracking-widest uppercase mb-2 block">03</span>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight">Exterior Elevation</h3>
</div>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#0D0D0D] transition-all duration-500 backdrop-blur-sm">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#F5F5F5] text-[#0D0D0D] py-32 rounded-t-[2.5rem] relative z-20">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1 gs-reveal">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">The standard of <br/> structural luxury.</h2>
<p className="text-sm text-[#0D0D0D]/60 font-light leading-relaxed mb-12 max-w-md">
                    We source the finest materials globally, ensuring every project is grounded in durability and elevated by unparalleled aesthetics.
                </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="flex flex-col gap-3">
<iconify-icon className="text-2xl text-[#0D0D0D]/80" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-base font-medium tracking-tight">High Quality</h4>
<p className="text-xs text-[#0D0D0D]/60 font-light">Uncompromising standards in every material sourced.</p>
</div>
<div className="flex flex-col gap-3">
<iconify-icon className="text-2xl text-[#0D0D0D]/80" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-base font-medium tracking-tight">Unique Products</h4>
<p className="text-xs text-[#0D0D0D]/60 font-light">Exclusive collections unavailable elsewhere.</p>
</div>
<div className="flex flex-col gap-3">
<iconify-icon className="text-2xl text-[#0D0D0D]/80" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-base font-medium tracking-tight">Customer Focused</h4>
<p className="text-xs text-[#0D0D0D]/60 font-light">Tailored solutions for individual architectural needs.</p>
</div>
<div className="flex flex-col gap-3">
<iconify-icon className="text-2xl text-[#0D0D0D]/80" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-base font-medium tracking-tight">Expert Team</h4>
<p className="text-xs text-[#0D0D0D]/60 font-light">Decades of collective experience in spatial design.</p>
</div>
</div>
</div>
<div className="order-1 lg:order-2 w-full h-[60vh] lg:h-[80vh] overflow-hidden rounded-sm gs-reveal">
<img alt="Interior Detail" className="w-full h-full object-cover scale-110 parallax-img" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2853&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="w-full bg-[#0D0D0D] py-24 border-y border-white/5 overflow-hidden flex flex-col justify-center">
<div className="text-center mb-12 gs-reveal">
<span className="text-xs text-white/40 tracking-widest uppercase">Trusted by industry leaders</span>
</div>
<div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
<div className="flex items-center justify-center md:justify-start [&amp;_li]:mx-12 [&amp;_li]:max-w-none animate-marquee">
<ul className="flex items-center justify-center m-0 p-0 list-none text-2xl md:text-4xl font-medium tracking-tighter text-white/20 uppercase">
<li className="hover:text-white transition-colors duration-500 cursor-default">Lumina</li>
<li className="hover:text-white transition-colors duration-500 cursor-default">Aether</li>
<li className="hover:text-white transition-colors duration-500 cursor-default">Vanguard</li>
<li className="hover:text-white transition-colors duration-500 cursor-default">Novus</li>
<li className="hover:text-white transition-colors duration-500 cursor-default">Aura</li>
<li className="hover:text-white transition-colors duration-500 cursor-default">Zenith</li>
</ul>
<ul aria-hidden="true" className="flex items-center justify-center m-0 p-0 list-none text-2xl md:text-4xl font-medium tracking-tighter text-white/20 uppercase">
<li className="hover:text-white transition-colors duration-500 cursor-default">Lumina</li>
<li className="hover:text-white transition-colors duration-500 cursor-default">Aether</li>
<li className="hover:text-white transition-colors duration-500 cursor-default">Vanguard</li>
<li className="hover:text-white transition-colors duration-500 cursor-default">Novus</li>
<li className="hover:text-white transition-colors duration-500 cursor-default">Aura</li>
<li className="hover:text-white transition-colors duration-500 cursor-default">Zenith</li>
</ul>
</div>
</div>
</section>

<section className="relative w-full h-screen overflow-hidden">
<img alt="Showcase" className="absolute inset-0 w-full h-full object-cover parallax-img opacity-70 mix-blend-luminosity" src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#0D0D0D]/40"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 gs-reveal">
<h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6">Mastery in <br/> every detail.</h2>
<button className="text-sm font-light uppercase tracking-widest border-b border-white/40 pb-1 hover:border-white transition-colors duration-300">View Gallery</button>
</div>
</section>

<section className="w-full bg-[#0D0D0D] py-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-16 gs-reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight">Client Perspectives</h2>
</div>
<div className="w-full overflow-x-auto pb-12 pt-4 px-6 snap-x snap-mandatory flex gap-6 md:gap-8 hide-scrollbar gs-reveal">

<div className="snap-center shrink-0 w-[85vw] md:w-[400px] glass p-8 rounded-sm flex flex-col justify-between">
<div>
<div className="flex text-[#C8A96A] mb-6 gap-1">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-white/80 font-light leading-relaxed mb-8">
                        "Prime Impex transformed our commercial space entirely. The materials speak of luxury, and the attention to minimal details aligned perfectly with our studio's vision."
                    </p>
</div>
<div>
<p className="text-sm font-medium tracking-tight">Elena Rostova</p>
<p className="text-xs text-white/40 font-light">Lead Architect, Form Studio</p>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[400px] glass p-8 rounded-sm flex flex-col justify-between">
<div>
<div className="flex text-[#C8A96A] mb-6 gap-1">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-white/80 font-light leading-relaxed mb-8">
                        "The wall cladding solutions provided an unmatched textural depth to our recent residential project. Highly recommend for pure, unfiltered quality."
                    </p>
</div>
<div>
<p className="text-sm font-medium tracking-tight">Marcus Chen</p>
<p className="text-xs text-white/40 font-light">Founder, Chen Designs</p>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[400px] glass p-8 rounded-sm flex flex-col justify-between">
<div>
<div className="flex text-[#C8A96A] mb-6 gap-1">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-white/80 font-light leading-relaxed mb-8">
                        "An absolute pleasure to collaborate with. The curation of exterior elevation elements gave our building a distinct, commanding presence."
                    </p>
</div>
<div>
<p className="text-sm font-medium tracking-tight">Sarah Jenkins</p>
<p className="text-xs text-white/40 font-light">Development Director, Horizon</p>
</div>
</div>

<div className="shrink-0 w-6 md:w-12"></div>
</div>
</section>

<section className="w-full bg-[#0D0D0D] py-24 pb-48 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-16 gs-reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight">The Journal</h2>
<a className="text-xs font-light uppercase tracking-widest border-b border-white/40 pb-1 hover:border-white transition-colors duration-300 hidden md:block" href="#">Read All</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

<a className="group block gs-reveal" href="#">
<div className="w-full aspect-[4/5] overflow-hidden rounded-sm mb-6 bg-white/5">
<img alt="Minimalism" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=2938&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex gap-4 text-xs text-white/40 font-light mb-3">
<span>Design</span>
<span>•</span>
<span>Oct 12, 2023</span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 group-hover:text-[#C8A96A] transition-colors duration-300">The resurgence of brutalist interiors</h3>
<div className="w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500 ease-out"></div>
</a>

<a className="group block gs-reveal" href="#">
<div className="w-full aspect-[4/5] overflow-hidden rounded-sm mb-6 bg-white/5">
<img alt="Materials" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex gap-4 text-xs text-white/40 font-light mb-3">
<span>Materials</span>
<span>•</span>
<span>Nov 05, 2023</span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 group-hover:text-[#C8A96A] transition-colors duration-300">Choosing the right acoustic ceilings</h3>
<div className="w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500 ease-out"></div>
</a>

<a className="group block hidden lg:block gs-reveal" href="#">
<div className="w-full aspect-[4/5] overflow-hidden rounded-sm mb-6 bg-white/5">
<img alt="Space" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&amp;w=2835&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex gap-4 text-xs text-white/40 font-light mb-3">
<span>Architecture</span>
<span>•</span>
<span>Dec 01, 2023</span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 group-hover:text-[#C8A96A] transition-colors duration-300">Fluidity in modern exterior cladding</h3>
<div className="w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500 ease-out"></div>
</a>
</div>
</div>
</section>

<footer className="w-full bg-[#111111] text-white pt-32 pb-12 px-6 rounded-t-[2.5rem] mt-[-2rem] relative z-20 flex flex-col items-center">
<div className="w-full max-w-7xl mx-auto text-center mb-24 gs-reveal">
<span className="text-xs uppercase tracking-widest text-white/40 block mb-6">Got a project in mind?</span>
<h2 className="text-5xl md:text-8xl lg:text-[9rem] font-medium tracking-tighter hover:text-[#C8A96A] transition-colors duration-500 cursor-pointer">
                Let's Work <br className="hidden md:block"/> Together
            </h2>
</div>
<div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm font-light border-t border-white/10 pt-12">
<div className="col-span-1 md:col-span-2">
<a className="text-2xl tracking-tighter font-medium uppercase block mb-6" href="#">PRIME</a>
<p className="text-white/40 max-w-xs">Premium interior and exterior solutions for the modern built environment.</p>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-medium text-white mb-2">Socials</h4>
<a className="text-white/60 hover:text-white transition-colors" href="#">Instagram</a>
<a className="text-white/60 hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="text-white/60 hover:text-white transition-colors" href="#">Twitter (X)</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-medium text-white mb-2">Contact</h4>
<a className="text-white/60 hover:text-white transition-colors" href="mailto:hello@primeimpex.com">hello@primeimpex.com</a>
<p className="text-white/60">+1 (555) 000-0000</p>
<p className="text-white/60 mt-4">1200 Architecture Blvd,<br/>New York, NY 10001</p>
</div>
</div>
<div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-light mt-24">
<p>© 2024 Prime Impex. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>



    </>
  );
}
