import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons();
      const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smooth: true });
      function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
      requestAnimationFrame(raf);
      gsap.registerPlugin(ScrollTrigger);

      const splitTextToScrub = (el) => {
          const text = el.innerText;
          el.innerHTML = text.split(' ').map(word => `<span class="scrub-word inline-block">${word}&nbsp;</span>`).join('');
      };

      const initAnimations = () => {
          // Loader
          const tl = gsap.timeline();
          tl.to('.loader-counter', { y: 0, duration: 1, ease: 'power4.out' })
            .to('.loader-progress', { width: '100%', duration: 1.2, ease: 'expo.inOut' }, 0)
            .to('.loader-counter', { y: '-100%', duration: 0.5, ease: 'power2.in' }, 1.5)
            .to('.loader', { clipPath: 'inset(0 0 100% 0)', duration: 0.8, ease: 'expo.inOut' }, 1.8)
            .to('.hero-title-l, .hero-title-r', { y: 0, duration: 1.4, ease: 'power3.out', stagger: 0.1 }, 2.0);

          // Hero Parallax
          gsap.to('.hero-title-l', { x: '-15%', ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
          gsap.to('.hero-title-r', { x: '15%', ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
          gsap.to('.hero-img', { scale: 1.2, y: '20%', ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });

          // Intro Scrub
          const introText = document.querySelector('.intro-scrub-text');
          if(introText) {
              splitTextToScrub(introText);
              gsap.to('.scrub-word', {
                  opacity: 1, color: '#000000', stagger: 0.05, ease: 'none',
                  scrollTrigger: { trigger: introText, start: 'top 80%', end: 'bottom 40%', scrub: true }
              });
          }

          // Card Stack Rotation
          const cards = gsap.utils.toArray('.card-item');
          cards.forEach((card, i) => {
              const inner = card.querySelector('.card-inner');
              const rot = (i % 2 === 0 ? 2 : -2) + (Math.random() * 2 - 1);
              if (i < cards.length - 1) {
                   gsap.to(inner, {
                      scale: 0.9, rotation: rot, y: -30, filter: 'blur(5px)', opacity: 0.6, ease: 'none',
                      scrollTrigger: { trigger: cards[i+1], start: 'top bottom', end: 'top 20%', scrub: true }
                  });
              }
          });

          // Horizontal Scroll Section
          const horizSection = document.querySelector('#horiz-scroll');
          if (horizSection) {
            const horizWrap = horizSection.querySelector('.horiz-wrap');
            gsap.to(horizWrap, {
              x: () => -(horizWrap.scrollWidth - window.innerWidth),
              ease: "none",
              scrollTrigger: {
                trigger: horizSection,
                start: "top top",
                end: () => `+=${horizWrap.scrollWidth - window.innerWidth}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true
              }
            });
          }

          // Parallax Grid
          const parallaxGrid = document.querySelector('#parallax-grid');
          if (parallaxGrid) {
            const cols = parallaxGrid.querySelectorAll('.parallax-col');
            cols.forEach((col, i) => {
              const speed = (i + 1) * 30;
              gsap.to(col, {
                y: -speed * 2,
                ease: "none",
                scrollTrigger: {
                  trigger: parallaxGrid,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true
                }
              });
            });
          }

          // Philosophy Reveal
          gsap.from('.wrapper > section:last-of-type h2', {
              scale: 0.9, opacity: 0, duration: 1.2, ease: 'power2.out',
              scrollTrigger: { trigger: '.wrapper > section:last-of-type', start: 'top 75%' }
          });
      };

      // Make visible and start
      document.body.style.opacity = 1;
      initAnimations();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise"></div>

<div className="loader fixed inset-0 z-[9999] bg-[#121212] text-[#EFEFEF] flex flex-col items-center justify-center" style={{clipPath: 'inset(0px 0px 100%)'}}>
<div className="overflow-hidden h-[1.4em] mb-6">
<div className="loader-counter display-font text-8xl md:text-9xl italic font-light tracking-tighter leading-none translate-y-full" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, -100%)'}}>
          100
        </div>
</div>
<div className="w-64 h-[1px] bg-white/10 overflow-hidden">
<div className="loader-progress w-0 h-full bg-[#EFEFEF]" style={{width: '100%'}}></div>
</div>
</div>

<nav className="fixed top-0 w-full px-6 py-6 md:px-12 md:py-8 flex justify-between items-center z-50 mix-blend-difference text-white mix-blend-exclusion">
<div className="display-font text-xl tracking-tight flex items-center gap-2">
        ALCHEMIC DESIGNS
      </div>
<div className="hidden md:flex gap-8 text-[11px] font-semibold tracking-[0.15em] uppercase opacity-80 body-font">
<a className="hover:opacity-100 transition-opacity" href="#">Interiors</a>
<a className="hover:opacity-100 transition-opacity" href="#">Studio</a>
<a className="hover:opacity-100 transition-opacity" href="#">Partners</a>
<a className="hover:opacity-100 transition-opacity" href="#">Inquire</a>
</div>
<button className="md:hidden group">
<svg className="lucide lucide-menu w-6 h-6 group-hover:scale-110 transition-transform" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</nav>

<div className="wrapper">

<section className="h-screen relative flex items-center justify-center overflow-hidden" id="hero">
<div className="absolute inset-0 w-full h-full hero-img-wrap will-change-transform">

<img alt="Hero Interior" className="brightness-[0.4] contrast-110 hero-img w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9d7e0acc-4fb0-4c2d-8723-4e6b00b174b6_3840w.webp" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 20%) scale(1.2, 1.2)'}}/>
</div>
<div className="relative z-10 w-full h-full flex flex-col justify-between pointer-events-none mix-blend-exclusion py-32 px-6 md:px-12">
<div className="overflow-hidden self-start">
<h1 className="display-font hero-text-huge hero-title-l translate-y-full block" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(-15%, 0px)'}}>
              ALCH
            </h1>
</div>
<div className="overflow-hidden self-end">
<h1 className="display-font hero-text-huge hero-title-r translate-y-full block italic pr-4 md:pr-12" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(15%, 0px)'}}>
              EMIC
            </h1>
</div>
</div>
<div className="absolute bottom-12 left-6 md:left-12 text-white mix-blend-exclusion flex flex-col gap-1 body-font">
<span className="text-[10px] uppercase tracking-[0.2em] font-semibold">
            Interior Design / Spatial Alchemy
          </span>
<span className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-80">
            Est. 2025
          </span>
</div>
</section>

<section className="py-32 px-6 md:px-20 max-w-[1600px] mx-auto bg-[var(--c-bg)] relative z-20">
<div className="grid lg:grid-cols-12 gap-12">
<div className="lg:col-span-4 hidden lg:flex flex-col justify-between border-t border-black/10 pt-4">
<span className="text-xs body-font font-medium text-gray-500 tracking-widest uppercase">
              01 — Philosophy
            </span>
</div>
<div className="lg:col-span-8 lg:col-start-5">
<h2 className="display-font text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-5xl intro-scrub-text text-black"><span className="scrub-word inline-block" style={{color: 'rgb(0, 0, 0)', opacity: '1'}}>Interior  design  is  not  merely  arrangement;  it  is  transmutation.  We  blend  atmosphere,  light,  and  texture  to  turn  base  spaces  into  golden  moments  of  stillness.                             </span></h2>
</div>
</div>
</section>

<section className="stack-section pb-32">
<div className="px-6 md:px-20 mb-20 flex justify-between items-end">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-black"></div>
<span className="text-xs font-semibold uppercase tracking-widest text-gray-500 body-font">
                Selected Spaces
              </span>
</div>
<h2 className="display-font text-4xl md:text-5xl tracking-tight">
              RECENT
              <br/>
<i className="font-light">TRANSFORMATIONS</i>
</h2>
</div>
<div className="hidden md:block">
<button className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-widest hover:opacity-60 transition-opacity body-font">
              View Archive
              <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="stack-container px-4 md:px-0">

<div className="card-item">
<div className="card-inner" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0.6', filter: 'blur(5px)', transform: 'translate(0px, -30px) rotate(1.80176deg) scale(0.9, 0.9)'}}>
<div className="card-content">
<div className="w-full">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-mono text-gray-400">01 / 03</span>
<span className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors cursor-pointer">
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-gray-800" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</div>
<h3 className="display-font text-3xl md:text-4xl tracking-tight mt-6">
                    OBSIDIAN PENTHOUSE
                  </h3>
<p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-3 body-font">
                    Manhattan, NY
                  </p>
</div>
<div className="space-y-6">
<p className="text-sm text-gray-600 leading-relaxed font-normal body-font">
                    A study in contrast. Dark oak paneling meets
                    floor-to-ceiling glass, framing the city skyline as living
                    art.
                  </p>
<div className="flex gap-2 body-font">
<span className="px-3 py-1 bg-gray-100 rounded text-[10px] uppercase tracking-wider font-semibold text-gray-600">
                      Residential
                    </span>
<span className="px-3 py-1 bg-gray-100 rounded text-[10px] uppercase tracking-wider font-semibold text-gray-600">
                      2023
                    </span>
</div>
</div>
</div>
<div className="card-img-wrap">

<img alt="Penthouse Interior" className="card-img" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0.6', filter: 'blur(5px)', transform: 'translate3d(0px, -30px, 0px) rotate(-2.585deg) scale(0.9, 0.9)'}}>
<div className="card-content">
<div className="w-full">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-mono text-gray-400">02 / 03</span>
<span className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors cursor-pointer">
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-gray-800" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</div>
<h3 className="display-font text-3xl md:text-4xl tracking-tight mt-6">
                    TRAVERTINE SPA
                  </h3>
<p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-3 body-font">
                    Kyoto, Japan
                  </p>
</div>
<div className="space-y-6">
<p className="text-sm text-gray-600 leading-relaxed font-normal body-font">
                    Minimalist wellness retreat carved from raw limestone. The
                    architecture disappears to prioritize silence.
                  </p>
<div className="flex gap-2 body-font">
<span className="px-3 py-1 bg-gray-100 rounded text-[10px] uppercase tracking-wider font-semibold text-gray-600">
                      Hospitality
                    </span>
<span className="px-3 py-1 bg-gray-100 rounded text-[10px] uppercase tracking-wider font-semibold text-gray-600">
                      2024
                    </span>
</div>
</div>
</div>
<div className="card-img-wrap">

<img alt="Spa Interior" className="card-img object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66ba04e3-a11d-4e47-bbf1-4983bcb1fd07_1600w.webp" style={{}}/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div className="w-full">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-mono text-gray-400">03 / 03</span>
<span className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors cursor-pointer">
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-gray-800" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</div>
<h3 className="display-font text-3xl md:text-4xl tracking-tight mt-6">
                    NORDIC VILLA
                  </h3>
<p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-3 body-font">
                    Stockholm, SE
                  </p>
</div>
<div className="space-y-6">
<p className="text-sm text-gray-600 leading-relaxed font-normal body-font">
                    A celebration of natural light. High ceilings and pale woods
                    create a canvas for sculptural furniture pieces.
                  </p>
<div className="flex gap-2 body-font">
<span className="px-3 py-1 bg-gray-100 rounded text-[10px] uppercase tracking-wider font-semibold text-gray-600">
                      Residential
                    </span>
<span className="px-3 py-1 bg-gray-100 rounded text-[10px] uppercase tracking-wider font-semibold text-gray-600">
                      2025
                    </span>
</div>
</div>
</div>
<div className="card-img-wrap">

<img alt="Villa Interior" className="card-img object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9fb022e7-0f9d-415e-9c70-a49df259743e_1600w.jpg" style={{}}/>
</div>
</div>
</div>
</div>
</section>

<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '950px', height: '2558px', padding: '0px 0px 1900px'}}>
<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '950px', height: '3538px', padding: '0px 0px 2880px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '950px', height: '3538px', padding: '0px 0px 2880px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '950px', height: '3538px', padding: '0px 0px 2880px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '-2880.43px 490px 3246.43px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '950px', height: '3538px', padding: '0px 0px 2880px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 490px 366px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '950px', height: '3538px', padding: '0px 0px 2880px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 490px 366px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '950px', height: '3538px', padding: '0px 0px 2880px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '-8640px 490px 9006px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '950px', height: '3538px', padding: '0px 0px 2880px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 490px 366px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '950px', height: '3538px', padding: '0px 0px 2880px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 490px 366px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '950px', height: '3538px', padding: '0px 0px 2880px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 490px 366px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '950px', height: '3538px', padding: '0px 0px 2880px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 490px 366px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '950px', height: '3538px', padding: '0px 0px 2880px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 490px 366px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '950px', height: '3538px', padding: '0px 0px 2880px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 490px 366px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '950px', height: '3538px', padding: '0px 0px 2880px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 490px 366px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '950px', height: '3538px', padding: '0px 0px 2880px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 490px 366px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '950px', height: '3538px', padding: '0px 0px 2880px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 490px 366px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '950px', height: '3538px', padding: '0px 0px 2880px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 490px 366px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '950px', height: '3538px', padding: '0px 0px 2880px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 490px 366px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '950px', height: '3538px', padding: '0px 0px 2880px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 490px 366px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '950px', height: '3538px', padding: '0px 0px 2880px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 490px 366px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '950px', height: '3538px', padding: '0px 0px 2880px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 490px 366px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '950px', height: '3538px', padding: '0px 0px 2880px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 490px 366px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '950px', height: '3538px', padding: '0px 0px 2880px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 490px 366px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '950px', height: '3538px', padding: '0px 0px 2880px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 490px 366px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '950px', height: '3538px', padding: '0px 0px 2880px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 490px 366px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '950px', height: '3538px', padding: '0px 0px 2880px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 490px 366px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '950px', height: '3538px', padding: '0px 0px 2880px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 490px 366px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '950px', height: '3538px', padding: '0px 0px 2880px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'block', margin: '0px', inset: '0px 490px 366px 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '950px', height: '3538px', padding: '0px 0px 2880px'}}><section className="relative h-screen overflow-hidden bg-[var(--c-bg)] border-t border-black/5" id="horiz-scroll" style={{translate: 'none', rotate: 'none', scale: 'none', inset: '0px auto auto 0px', margin: '0px', maxWidth: '950px', width: '950px', maxHeight: '658px', height: '658px', padding: '0px', transform: 'translate(0px, 11520px)', boxSizing: 'border-box', position: 'fixed'}}>
<div className="horiz-wrap flex h-full w-[300vw]" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(-2880px, 0px)'}}>

<div className="w-screen h-full flex flex-col justify-center px-6 md:px-20 border-r border-black/10">
<span className="text-xs body-font font-semibold text-gray-400 mb-4 tracking-widest uppercase">
                01 — Element
              </span>
<h2 className="display-font text-6xl md:text-8xl italic font-normal tracking-tight">
                Materiality
              </h2>
<p className="mt-8 max-w-md text-gray-600 text-lg leading-relaxed font-light body-font">
                We select materials not for how they look, but for how they age.
                Patina is the ultimate luxury in a disposable world.
              </p>
</div>

<div className="w-screen h-full flex flex-col justify-center px-6 md:px-20 border-r border-black/10 bg-[#E8E6E3]">
<span className="text-xs body-font font-semibold text-gray-400 mb-4 tracking-widest uppercase">
                02 — Element
              </span>
<h2 className="display-font text-6xl md:text-8xl italic font-normal tracking-tight">
                Illumination
              </h2>
<p className="mt-8 max-w-md text-gray-600 text-lg leading-relaxed font-light body-font">
                Light shapes the void. We treat shadow as a building material,
                sculpting volume through absence.
              </p>
</div>

<div className="w-screen h-full flex flex-col justify-center px-6 md:px-20 bg-white">
<span className="text-xs body-font font-semibold text-gray-400 mb-4 tracking-widest uppercase">
                03 — Element
              </span>
<h2 className="display-font text-6xl md:text-8xl italic font-normal tracking-tight">
                Curation
              </h2>
<p className="mt-8 max-w-md text-gray-600 text-lg leading-relaxed font-light body-font">
                Every object in a room must have a conversation with the others.
                We curate the dialogue between furniture and form.
              </p>
</div>
</div>
</section></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
</div>

<section className="py-32 px-6 md:px-20 max-w-[1600px] mx-auto bg-[var(--c-bg)] overflow-hidden" id="parallax-grid">
<div className="mb-24 flex justify-between items-end">
<h2 className="display-font text-4xl md:text-5xl tracking-tight">
            STUDIO
            <br/>
<i className="font-light text-gray-600">ATMOSPHERE</i>
</h2>
<p className="text-xs font-semibold text-gray-400 hidden md:block body-font tracking-widest">
            PROCESS / FABRIC / STONE
          </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 min-h-[120vh]">
<div className="parallax-col flex flex-col gap-4 md:gap-8 pt-20" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, -60px)'}}>
<img className="w-full aspect-[3/4] object-cover grayscale opacity-90 rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b06aa955-b6b1-4e6f-b981-73a9b99d4089_1600w.webp" style={{}}/>
<img className="w-full aspect-[4/5] object-cover grayscale opacity-90 rounded-sm" src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&amp;w=2592&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="parallax-col flex flex-col gap-4 md:gap-8" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, -120px)'}}>
<img className="w-full aspect-[3/4] object-cover grayscale opacity-90 rounded-sm" src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&amp;w=2574&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="p-8 border border-black/5 bg-white flex items-center justify-center text-center aspect-square">
<p className="display-font leading-relaxed text-xl italic text-gray-800" style={{}}>"We don't design rooms.We design the way you feel in them."</p>
</div>
<img className="w-full aspect-[4/3] object-cover grayscale opacity-90 rounded-sm" src="https://images.unsplash.com/photo-1512918580421-b2feee3b85a6?q=80&amp;w=2574&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="parallax-col flex flex-col gap-4 md:gap-8 pt-40 hidden md:flex" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, -180px)'}}>
<div className="aspect-[3/4] flex text-white bg-[#1a1a1a] w-full items-center justify-center">
<svg className="lucide lucide-armchair w-12 h-12 opacity-50" data-lucide="armchair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"></path><path d="M5 18v2"></path><path d="M19 18v2"></path></svg>
</div>
<img className="w-full aspect-[4/5] object-cover grayscale opacity-90 rounded-sm" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 bg-[#121212] border-y border-white/10 overflow-hidden text-white" id="partners">
<div className="px-6 md:px-20 mb-12">
<span className="text-xs font-semibold text-white/40 block tracking-widest body-font uppercase">
            Trusted Partners
          </span>
</div>
<div className="marquee-container">
<div className="marquee-track">

<div className="flex items-center">
<span className="mx-12 text-3xl md:text-5xl display-font font-medium italic opacity-30 hover:opacity-100 transition-opacity cursor-default">
                Cassina
              </span>
<span className="mx-12 text-3xl md:text-5xl font-sans font-bold uppercase tracking-tighter opacity-30 hover:opacity-100 transition-opacity cursor-default">
                B&amp;B Italia
              </span>
<span className="md:text-5xl uppercase hover:opacity-100 transition-opacity cursor-default text-3xl tracking-widest font-serif opacity-30 mr-12 ml-12">
                Poliform
              </span>
<span className="mx-12 text-3xl md:text-5xl display-font font-medium italic opacity-30 hover:opacity-100 transition-opacity cursor-default">
                Minotti
              </span>
<span className="mx-12 text-3xl md:text-5xl font-sans font-bold uppercase tracking-tighter opacity-30 hover:opacity-100 transition-opacity cursor-default">
                Vitra
              </span>
<span className="mx-12 text-3xl md:text-5xl font-serif uppercase tracking-widest opacity-30 hover:opacity-100 transition-opacity cursor-default">
                Molteni&amp;C
              </span>
<span className="mx-12 text-3xl md:text-5xl display-font font-medium italic opacity-30 hover:opacity-100 transition-opacity cursor-default">
                Artemide
              </span>
<span className="mx-12 text-3xl md:text-5xl font-sans font-bold uppercase tracking-tighter opacity-30 hover:opacity-100 transition-opacity cursor-default">
                Flos
              </span>
</div>

<div className="flex items-center">
<span className="mx-12 text-3xl md:text-5xl display-font font-medium italic opacity-30 hover:opacity-100 transition-opacity cursor-default">
                Cassina
              </span>
<span className="mx-12 text-3xl md:text-5xl font-sans font-bold uppercase tracking-tighter opacity-30 hover:opacity-100 transition-opacity cursor-default">
                B&amp;B Italia
              </span>
<span className="mx-12 text-3xl md:text-5xl font-serif uppercase tracking-widest opacity-30 hover:opacity-100 transition-opacity cursor-default">
                Poliform
              </span>
<span className="mx-12 text-3xl md:text-5xl display-font font-medium italic opacity-30 hover:opacity-100 transition-opacity cursor-default">
                Minotti
              </span>
<span className="mx-12 text-3xl md:text-5xl font-sans font-bold uppercase tracking-tighter opacity-30 hover:opacity-100 transition-opacity cursor-default">
                Vitra
              </span>
<span className="mx-12 text-3xl md:text-5xl font-serif uppercase tracking-widest opacity-30 hover:opacity-100 transition-opacity cursor-default">
                Molteni&amp;C
              </span>
<span className="mx-12 text-3xl md:text-5xl display-font font-medium italic opacity-30 hover:opacity-100 transition-opacity cursor-default">
                Artemide
              </span>
<span className="mx-12 text-3xl md:text-5xl font-sans font-bold uppercase tracking-tighter opacity-30 hover:opacity-100 transition-opacity cursor-default">
                Flos
              </span>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden bg-[#F8F8F8]">
<h2 className="display-font text-3xl md:text-5xl font-normal tracking-tight mb-8 relative z-10" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0', transform: 'scale(0.9, 0.9)'}}>
          We curate the
          <span className="italic text-gray-500">invisible.</span>
</h2>
<div className="max-w-lg text-gray-600 body-font font-light leading-relaxed relative z-10 text-lg">
          True luxury is not about adding more. It is about removing everything
          that is not essential to the soul of the room.
        </div>

<div className="absolute inset-0 z-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
</section>
</div>


<footer className="footer-sticky">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-20 pointer-events-none grayscale" src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-[#050505] via-[#050505]/95 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 text-center w-full max-w-4xl pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></div>
<span className="text-[10px] uppercase body-font font-semibold text-gray-300 tracking-widest" style={{}}>Booking SPRING 2026</span>
</div>
<a className="block group" href="mailto:design@alchemic.com">
<h2 className="display-font text-[11vw] leading-[0.8] font-medium tracking-tight text-white group-hover:text-gray-300 transition-colors duration-500 italic">
            ALCHEMIC
          </h2>
<div className="h-[1px] w-0 group-hover:w-full bg-white/50 mx-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] mt-4"></div>
</a>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 text-left border-t border-white/10 pt-12 body-font">
<div className="flex flex-col gap-4 gap-x-4 gap-y-4">
<span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">
              Socials
            </span>
<a className="text-xs text-gray-400 hover:text-white transition-colors" href="#">
              Instagram
            </a>
<a className="hover:text-white transition-colors text-xs text-gray-400" href="#" style={{}}></a>
<a className="hover:text-white transition-colors text-xs text-gray-400" href="#" style={{}}></a>
</div>
<div className="flex flex-col gap-4 gap-x-4 gap-y-4">
<span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">
              Studio
            </span>
<p className="text-xs text-gray-400" style={{}}>LONDON UK</p>
</div>
<div className="flex flex-col gap-4">
<span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
              Contact
            </span>
<a className="hover:text-white transition-colors text-xs text-gray-400" href="#" style={{}}>+44 7961851540</a><a className="hover:text-white transition-colors text-xs text-gray-400" href="#" style={{}}>info@alchemicdesigns.com</a>
</div>
<div className="flex flex-col justify-between">
<span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
              © 2025
            </span>
<div className="text-[10px] text-gray-600 uppercase tracking-widest font-semibold">
              Alchemic Designs
            </div>
</div>
</div>
</div>
</footer>


    </>
  );
}
