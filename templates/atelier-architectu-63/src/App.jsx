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



      document.addEventListener("DOMContentLoaded", (event) => {
          // Initialize Lenis for Smooth Scrolling
          const lenis = new Lenis({
              duration: 2.5,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
              orientation: 'vertical',
              gestureOrientation: 'vertical',
              smoothWheel: true,
              touchMultiplier: 2,
          });

          lenis.on('scroll', ScrollTrigger.update);

          gsap.ticker.add((time) => {
              lenis.raf(time * 1000);
          });

          gsap.ticker.lagSmoothing(0);

          // Register ScrollTrigger
          gsap.registerPlugin(ScrollTrigger);

          // Hero Animations
          const tl = gsap.timeline();

          tl.to(".hero-title", {
              y: "0%",
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              duration: 1.2,
              stagger: 0.15,
              ease: "power4.out",
              delay: 0.2
          })
          .to(".hero-subtitle", {
              opacity: 1,
              duration: 1,
              ease: "power2.out"
          }, "-=0.6")
          .to(".hero-scroll", {
              opacity: 1,
              duration: 1,
              ease: "power2.out"
          }, "-=0.8");

          // Section Headings Reveal Animation
          gsap.utils.toArray('.animate-heading').forEach(heading => {
              gsap.fromTo(heading,
                  {
                      y: 40,
                      opacity: 0,
                      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
                  },
                  {
                      y: 0,
                      opacity: 1,
                      clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
                      duration: 1.2,
                      ease: "power4.out",
                      scrollTrigger: {
                          trigger: heading,
                          start: "top 85%",
                          toggleActions: "play none none reverse"
                      }
                  }
              );
          });

          // Fade Up Elements on Scroll (for paragraphs, links, grids)
          gsap.utils.toArray('.fade-up').forEach(element => {
              gsap.fromTo(element,
                  { y: 40, opacity: 0 },
                  {
                      y: 0,
                      opacity: 1,
                      duration: 1,
                      ease: "power3.out",
                      scrollTrigger: {
                          trigger: element,
                          start: "top 85%",
                          toggleActions: "play none none reverse"
                      }
                  }
              );
          });

          // Parallax Images
          gsap.utils.toArray('.img-wrap').forEach(wrap => {
              const img = wrap.querySelector('.parallax-image');
              if(img) {
                  gsap.to(img, {
                      yPercent: 20,
                      ease: "none",
                      scrollTrigger: {
                          trigger: wrap,
                          start: "top bottom",
                          end: "bottom top",
                          scrub: true
                      }
                  });
              }
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
      

<nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white p-6 flex justify-between items-center">
<a className="font-medium text-lg tracking-tighter uppercase z-10" href="#">
        A t e l i e r
      </a>
<div className="hidden md:flex gap-8 text-sm font-medium tracking-tight z-10">
<a className="hover:opacity-60 transition-opacity duration-300" href="#philosophy">
          Philosophy
        </a>
<a className="hover:opacity-60 transition-opacity duration-300" href="#work">
          Selected Works
        </a>
<a className="hover:opacity-60 transition-opacity duration-300" href="#contact">
          Contact
        </a>
</div>
<button className="md:hidden z-10">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</nav>

<section className="relative h-screen flex flex-col justify-end p-6 md:p-12 pb-24 md:pb-32">
<div className="max-w-7xl mx-auto w-full">
<div className="overflow-hidden mb-4">
<h1 className="md:text-8xl lg:text-[10rem] leading-[0.9] hero-title clip-hidden text-5xl font-normal tracking-tighter opacity-0 translate-y-full" style={{clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%, 0% 100%)'}}>
            Shaping
          </h1>
</div>
<div className="overflow-hidden flex items-end justify-between w-full">
<h1 className="md:text-8xl lg:text-[10rem] leading-[0.9] hero-title clip-hidden text-5xl font-normal tracking-tighter translate-y-full" style={{clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%, 0% 100%)'}}>
            Space &amp; Light.
          </h1>
<div className="hidden md:flex flex-col items-end text-sm text-neutral-500 font-medium tracking-tight hero-subtitle opacity-0">
<span>Est. 2014</span>
<span>Oslo, Norway</span>
</div>
</div>
</div>
<div className="absolute bottom-6 md:bottom-12 right-6 md:right-12 hero-scroll opacity-0">
<div className="flex flex-col items-center gap-2">
<span className="text-xs uppercase tracking-tight font-medium text-neutral-500">
            Scroll
          </span>
<iconify-icon className="animate-bounce text-neutral-400" height="20" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
</section>

<section className="w-full h-[70vh] md:h-screen p-6 md:p-12 pt-0">
<div className="w-full h-full relative overflow-hidden bg-neutral-200 img-wrap">
<img alt="Minimalist Architecture" className="absolute inset-0 w-full h-full object-cover scale-110 parallax-image" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-7xl mx-auto" id="philosophy">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
<div className="md:col-span-4">
<h2 className="text-2xl font-medium tracking-tight mb-6 animate-heading opacity-0" style={{clipPath: 'polygon(0px 0%, 100% 0%, 100% 100%, 0% 100%)'}}>
            Our Philosophy
          </h2>
</div>
<div className="md:col-span-8 flex flex-col gap-8 fade-up gap-x-8 gap-y-8">
<p className="md:text-4xl leading-snug text-2xl font-normal text-neutral-800 tracking-tight">
            We believe in the reduction of noise. By stripping away the
            non-essential, we uncover the intrinsic beauty of raw materials,
            structural purity, and the interplay of natural light.
          </p>
<div className="w-full h-px bg-neutral-200 my-8"></div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm font-normal text-neutral-600">
<div className="flex flex-col gap-2">
<span className="text-neutral-900 font-medium tracking-tight">
                Materiality
              </span>
<p className="">
                Sourcing honest materials that age gracefully alongside the
                environment they inhabit.
              </p>
</div>
<div className="flex flex-col gap-2">
<span className="text-neutral-900 font-medium tracking-tight">
                Context
              </span>
<p className="">
                Designing structures that converse respectfully with their
                surrounding topography and culture.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-16">
<h2 className="text-4xl md:text-6xl font-normal tracking-tighter animate-heading opacity-0" style={{clipPath: 'polygon(0px 0%, 100% 0%, 100% 100%, 0% 100%)'}}>
            Selected
            <br/>
            Works
          </h2>
<a className="group flex items-center gap-2 text-sm font-medium tracking-tight text-neutral-900 pb-2 border-b border-transparent hover:border-neutral-900 transition-colors fade-up" href="#">
            View Archive
            <iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">

<div className="md:col-span-7 flex flex-col gap-4 group cursor-pointer fade-up">
<div className="aspect-[4/3] w-full overflow-hidden bg-neutral-100 relative img-wrap">
<img alt="Concrete Villa" className="absolute inset-0 w-full h-full object-cover scale-[1.15] parallax-image transition-transform duration-700 group-hover:scale-100" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=2939&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-xl font-medium tracking-tight text-neutral-900 animate-heading opacity-0" style={{clipPath: 'polygon(0px 0%, 100% 0%, 100% 100%, 0% 100%)'}}>
                  The Concrete House
                </h3>
<p className="text-sm text-neutral-500 font-normal mt-1">
                  Residential — 2023
                </p>
</div>
</div>
</div>

<div className="md:col-span-5 flex flex-col gap-4 group cursor-pointer fade-up md:mt-32">
<div className="aspect-[3/4] w-full overflow-hidden bg-neutral-100 relative img-wrap">
<img alt="Timber Pavilion" className="absolute inset-0 w-full h-full object-cover scale-[1.15] parallax-image transition-transform duration-700 group-hover:scale-100" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 animate-heading opacity-0" style={{clipPath: 'polygon(0px 100%, 100% 100%, 100% 100%, 0% 100%)'}}>
                  Forest Pavilion
                </h3>
<p className="text-sm text-neutral-500 font-normal mt-1">
                  Cultural — 2022
                </p>
</div>
</div>
</div>

<div className="md:col-span-12 flex flex-col gap-4 group cursor-pointer fade-up mt-12 md:mt-24">
<div className="aspect-[16/7] w-full overflow-hidden bg-neutral-100 relative img-wrap">
<img alt="Corporate Headquarters" className="absolute inset-0 w-full h-full object-cover scale-[1.15] parallax-image transition-transform duration-700 group-hover:scale-100" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 animate-heading opacity-0" style={{clipPath: 'polygon(0px 100%, 100% 100%, 100% 100%, 0% 100%)'}}>
                  Monolith HQ
                </h3>
<p className="text-sm text-neutral-500 font-normal mt-1">
                  Commercial — 2024
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#121212] text-[#F9F9F8] py-24 px-6 md:px-12 rounded-t-3xl md:rounded-t-[3rem]" id="contact">
<div className="max-w-7xl mx-auto flex flex-col gap-24">
<div className="flex flex-col md:flex-row justify-between items-end gap-12 border-b border-neutral-800 pb-16">
<h2 className="text-5xl md:text-7xl font-normal tracking-tighter leading-none animate-heading opacity-0" style={{clipPath: 'polygon(0px 100%, 100% 100%, 100% 100%, 0% 100%)'}}>
            Let's build
            <br/>
            tomorrow.
          </h2>
<a className="group flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full border border-neutral-700 hover:bg-[#F9F9F8] hover:text-[#121212] transition-colors duration-300 fade-up" href="mailto:hello@atelier.com">
<span className="text-sm font-medium tracking-tight">Contact</span>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm text-neutral-400 fade-up">
<div className="flex flex-col gap-4">
<div className="font-medium text-lg tracking-tighter uppercase text-[#F9F9F8]">
              A t e l i e r
            </div>
<p className="font-normal mt-2">
              Designing enduring spaces across the globe.
            </p>
</div>
<div className="flex flex-col gap-4">
<span className="text-[#F9F9F8] font-medium tracking-tight">
              Studio
            </span>
<a className="hover:text-white transition-colors" href="#">
              Storgata 14
            </a>
<a className="hover:text-white transition-colors" href="#">0184 Oslo</a>
<a className="hover:text-white transition-colors" href="#">Norway</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-[#F9F9F8] font-medium tracking-tight">
              Socials
            </span>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</div>
<div className="flex flex-col gap-4 md:items-end">
<span className="text-[#F9F9F8] font-medium tracking-tight">Legal</span>
<a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-white transition-colors" href="#">
              Terms of Service
            </a>
<p className="mt-4 text-xs tracking-tight">© 2024 Atelier</p>
</div>
</div>
</div>
</footer>


    </>
  );
}
