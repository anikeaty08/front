import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      (function() {
        const bg = document.getElementById('header-bg');
        const logo = document.getElementById('header-logo');
        const menuBtn = document.getElementById('header-menu');
        const nav = document.getElementById('header-nav');
        const mobileOverlay = document.getElementById('mobile-menu-overlay');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileOverlay.classList.remove('opacity-0', 'pointer-events-none');
                mobileOverlay.classList.add('opacity-100', 'pointer-events-auto');
                menuBtn.textContent = 'Close';
                logo.className = 'text-xl font-semibold tracking-tighter text-white transition-colors duration-300 relative z-20';
                menuBtn.className = 'md:hidden text-xs md:text-sm font-medium text-white hover:opacity-70 transition-colors duration-300 uppercase tracking-widest z-20 relative';
            } else {
                mobileOverlay.classList.add('opacity-0', 'pointer-events-none');
                mobileOverlay.classList.remove('opacity-100', 'pointer-events-auto');
                menuBtn.textContent = 'Menu';
                updateHeader();
            }
        }

        menuBtn.addEventListener('click', toggleMenu);
        mobileLinks.forEach(link => link.addEventListener('click', () => {
            if(isMenuOpen) toggleMenu();
        }));
        
        function updateHeader() {
            if (isMenuOpen) return;
            const scrolled = window.scrollY > 20;
            if (scrolled) {
                bg.className = 'absolute inset-0 w-full h-full -z-10 bg-white/80 backdrop-blur-md border-b border-neutral-200/50 shadow-sm transition-all duration-500';
                logo.className = 'text-xl font-semibold tracking-tighter text-neutral-900 transition-colors duration-300';
                menuBtn.className = 'md:hidden text-xs md:text-sm font-medium text-neutral-900 hover:opacity-70 transition-colors duration-300 uppercase tracking-widest z-10';
                if(nav) nav.className = 'hidden md:flex items-center gap-8 z-10 text-xs font-medium text-neutral-900 transition-colors duration-300 uppercase tracking-widest';
            } else {
                bg.className = 'absolute inset-0 w-full h-full -z-10 bg-white/5 backdrop-blur-md border-b border-white/10 transition-all duration-500';
                logo.className = 'text-xl font-semibold tracking-tighter text-white transition-colors duration-300';
                menuBtn.className = 'md:hidden text-xs md:text-sm font-medium text-white hover:opacity-70 transition-colors duration-300 uppercase tracking-widest z-10';
                if(nav) nav.className = 'hidden md:flex items-center gap-8 z-10 text-xs font-medium text-white transition-colors duration-300 uppercase tracking-widest';
            }
        }
        
        window.addEventListener('scroll', updateHeader);
        updateHeader();
      })();
    


      (function () {
        const container = document.querySelector('.karaoke-container');
        if (!container || container.dataset.processed) return;

        const wrapWords = (node) => {
          if (node.nodeType === 3) {
            const words = node.textContent.match(/\S+|\s+/g) || [];
            const fragment = document.createDocumentFragment();

            words.forEach((word) => {
              if (word.trim().length > 0) {
                const span = document.createElement('span');
                span.textContent = word;
                span.className = 'k-word';
                fragment.appendChild(span);
              } else {
                fragment.appendChild(document.createTextNode(word));
              }
            });

            node.replaceWith(fragment);
          } else if (node.nodeType === 1) {
            Array.from(node.childNodes).forEach(wrapWords);
          }
        };

        Array.from(container.childNodes).forEach(wrapWords);
        container.dataset.processed = 'true';

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const words = container.querySelectorAll('.k-word');

                words.forEach((word, index) => {
                  setTimeout(() => {
                    word.classList.add('active');
                  }, index * 40); // speed of the karaoke effect
                });

                observer.unobserve(container);
              }
            });
          },
          { threshold: 0.2 }
        );

        observer.observe(container);
      })();
    


        (function () {
          const section = document.getElementById("scrolly-section");
          if (!section) return;
    
          const contents = section.querySelectorAll(".scrolly-content");
          const images = section.querySelectorAll(".scrolly-image");
          const labelTitle = section.querySelector(".scrolly-label-title");
          const labelDesc = section.querySelector(".scrolly-label-desc");
    
          const labels = [
            { title: "Lumina Repair", desc: "Concentrate 5%" },
            { title: "Peptide Complex", desc: "Stability Index 98%" },
            { title: "Barrier Defense", desc: "Ceramide Boost" },
          ];
    
          function setStep(index) {
            contents.forEach((el, i) => {
              if (i === index) {
                el.classList.remove("opacity-0", "translate-y-8");
                el.classList.add("opacity-100", "translate-y-0");
              } else {
                el.classList.remove("opacity-100", "translate-y-0");
                el.classList.add("opacity-0", "translate-y-8");
              }
            });
    
            images.forEach((el, i) => {
              if (i === index) {
                el.classList.remove("opacity-0", "scale-105");
                el.classList.add("opacity-100", "scale-100");
              } else {
                el.classList.remove("opacity-100", "scale-100");
                el.classList.add("opacity-0", "scale-105");
              }
            });
    
            if (labelTitle && labelDesc) {
              if (labelTitle.innerText !== labels[index].title) {
                labelTitle.style.opacity = 0;
                labelDesc.style.opacity = 0;
                setTimeout(() => {
                  labelTitle.innerText = labels[index].title;
                  labelDesc.innerText = labels[index].desc;
                  labelTitle.style.opacity = 1;
                  labelDesc.style.opacity = 1;
                }, 300);
              }
            }
          }
    
          function updateScroll() {
            const isDesktop = window.innerWidth >= 1024; // lg breakpoint
    
            // On mobile/tablet: no scrolly logic, just show step 1
            if (!isDesktop) {
              setStep(0);
              return;
            }
    
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const scrollableDistance = rect.height - windowHeight;
    
            if (scrollableDistance <= 0) {
              setStep(0);
              return;
            }
    
            let progress = -rect.top / scrollableDistance;
            progress = Math.max(0, Math.min(1, progress));
    
            let activeIndex = 0;
            if (progress < 0.33) activeIndex = 0;
            else if (progress < 0.66) activeIndex = 1;
            else activeIndex = 2;
    
            setStep(activeIndex);
          }
    
          window.addEventListener("scroll", updateScroll);
          window.addEventListener("resize", updateScroll);
          updateScroll(); // Initial state
        })();
      

(function(){const s=document.getElementById('formula'),t=document.getElementById('formula-bg-text'),m=document.getElementById('formula-molecule-wrapper');if(!s||!t||!m)return;function p(){const r=s.getBoundingClientRect(),h=window.innerHeight;if(r.top<=h&&r.bottom>=0){const d=(h-r.top);t.style.transform=`translateY(${d*0.1}px)`;m.style.transform=`translateY(${d*-0.05}px)`}}window.addEventListener('scroll',p,{passive:true});p()})();


    (function () {
      // Grab the section that contains THIS script
      const script = document.currentScript;
      const section = script.closest('section');
      if (!section) return;

      const numberEl = section.querySelector('#animated-stat-number');
      const barEl = section.querySelector('#animated-stat-bar');
      if (!numberEl || !barEl) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            // Animate bar width
            setTimeout(() => {
              barEl.style.width = '100%';
            }, 100);

            // Animate number from 0.0 to 22.9
            const targetValue = 22.9;
            const duration = 1500;
            const startTime = performance.now();

            function updateNumber(currentTime) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const ease = 1 - Math.pow(1 - progress, 4);
              const current = progress === 1 ? targetValue : targetValue * ease;

              numberEl.textContent = current.toFixed(1);

              if (progress < 1) {
                requestAnimationFrame(updateNumber);
              }
            }

            requestAnimationFrame(updateNumber);

            // Only run once
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(section);
    })();
  


    (function () {
          const script = document.currentScript;
          const section = script.closest('section');
          if (!section) return;
    
          const tabs = section.querySelectorAll('.hero-tab');
          const panels = section.querySelectorAll('.hero-panel');
    
          const setActiveCategory = (cat) => {
            tabs.forEach((tab) => {
              tab.classList.toggle('is-active', tab.dataset.category === cat);
            });
    
            panels.forEach((panel) => {
              panel.classList.toggle('is-active', panel.dataset.categoryPanel === cat);
            });
          };
    
          tabs.forEach((tab) => {
            tab.addEventListener('click', () => {
              const cat = tab.dataset.category;
              setActiveCategory(cat);
            });
          });
    
          // Initial state
          setActiveCategory('skin');
        })();
  


      lucide.createIcons();
    

document.addEventListener('DOMContentLoaded',function(){const o=new IntersectionObserver(e=>{e.forEach(t=>{if(t.isIntersecting){t.target.classList.add('is-visible');o.unobserve(t.target)}})},{threshold:0.1,rootMargin:'0px 0px -50px 0px'});document.querySelectorAll('.reveal-on-scroll').forEach(e=>o.observe(e))})
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-9 bg-[#080808] border-b border-white/5 z-40 flex items-center justify-center transition-transform duration-300" id="promo-banner"><a className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity" href="#shop"><span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span></span><p className="text-[9px] md:text-[10px] font-medium tracking-[0.15em] text-neutral-400 uppercase">Black Friday Event <span className="hidden sm:inline mx-2 text-neutral-800">|</span> <span className="text-neutral-200">30% Off Sitewide</span> <span className="ml-2 text-orange-500 font-bold">CODE: AETHER30</span></p></a></div><header className="fixed left-0 w-full z-50 transition-all duration-300 px-6 py-4 md:px-12 md:py-6 flex justify-between items-center top-9" id="site-header">
<div className="absolute inset-0 w-full h-full -z-10 bg-white/80 backdrop-blur-md border-b border-neutral-200/50 shadow-sm transition-all duration-500" id="header-bg"></div>
<div className="flex items-center z-10">
<a className="text-xl font-semibold tracking-tighter text-neutral-900 transition-colors duration-300" href="#hero" id="header-logo">AE__</a>
</div>
<nav className="hidden md:flex items-center gap-8 z-10 text-xs font-medium text-neutral-900 transition-colors duration-300 uppercase tracking-widest" id="header-nav">
<a className="hover:opacity-60 transition-opacity" href="#about">About</a>
<a className="hover:opacity-60 transition-opacity" href="#scrolly-section">Science</a>
<a className="hover:opacity-60 transition-opacity" href="#formula">Formula</a>
<a className="hover:opacity-60 transition-opacity" href="#shop">Shop <span className="text-orange-500 text-[10px] align-top ml-0.5">●</span></a>
<a className="hover:opacity-60 transition-opacity" href="#reviews">Stories</a>
</nav><button className="md:hidden text-xs md:text-sm font-medium text-neutral-900 hover:opacity-70 transition-colors duration-300 uppercase tracking-widest z-10" id="header-menu" type="button">
      Menu
    </button>

<div className="fixed inset-0 bg-neutral-900/95 backdrop-blur-xl text-white flex flex-col items-center justify-center gap-8 opacity-0 pointer-events-none transition-all duration-500 z-[5]" id="mobile-menu-overlay">
<a className="mobile-link text-2xl font-light tracking-tight hover:text-neutral-400 transition-colors" href="#about">About</a>
<a className="mobile-link text-2xl font-light tracking-tight hover:text-neutral-400 transition-colors" href="#scrolly-section">Science</a>
<a className="mobile-link text-2xl font-light tracking-tight hover:text-neutral-400 transition-colors" href="#formula">Formula</a>
<a className="mobile-link text-2xl font-light tracking-tight hover:text-neutral-400 transition-colors" href="#shop">Shop <span className="text-orange-500 text-sm align-top ml-1">●</span></a>
<a className="mobile-link text-2xl font-light tracking-tight hover:text-neutral-400 transition-colors" href="#reviews">Stories</a>
</div></header>

<section className="relative w-full min-h-screen bg-[#121212] overflow-hidden text-white flex flex-col" id="hero">

<div className="absolute inset-0 z-0">
<img alt="Abstract silver liquid background" className="w-full h-full object-cover opacity-40 grayscale brightness-125" loading="lazy" src="https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&amp;w=2487&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-neutral-900/10 to-neutral-900/40"></div>
</div>


<div className="flex-grow z-10 w-full h-full relative">

<div className="absolute top-[15%] left-0 w-full text-center pointer-events-none select-none z-0">
<h1 className="hero-heading text-[21vw] leading-none font-semibold tracking-tighter text-white/80 mix-blend-overlay opacity-0">
        AETHER
      </h1>
</div>

<div className="hero-line absolute top-[42%] left-0 w-full h-[1px] bg-white/20 z-10 origin-center"></div>

<div className="hero-product z-20 md:w-80 lg:w-96 group cursor-pointer w-56 absolute top-[45%] left-1/2">
<div className="relative">
<img alt="Lumina Repair peptide serum standing on soft white fabric" className="grayscale-[10%] contrast-110 w-full h-auto z-10 relative drop-shadow-[0_30px_80px_rgba(0,0,0,0.6)]" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 w-full h-full border border-white/20 rounded-full scale-y-[0.3] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-white/50 to-transparent opacity-50"></div>
</div>
</div>

<div className="hero-left hidden md:block max-w-xs absolute top-[55%] left-8 md:left-16 opacity-0">
<p className="leading-relaxed uppercase text-xs font-medium text-neutral-200 tracking-widest">
        We believe that skincare is not just a routine; it's a journey towards
        confidence, vitality, and self-expression.
      </p>
</div>

<p className="md:hidden px-8 mt-auto mb-40 text-[11px] leading-relaxed text-neutral-200 uppercase tracking-widest">
      Skincare is a journey towards confidence, vitality, and self-expression.
    </p>

<div className="hero-card absolute bottom-6 left-4 right-4 md:bottom-12 md:right-16 md:left-auto z-30 w-auto md:w-full md:max-w-sm opacity-0">
<div className="glass-card rounded-lg p-6 md:p-8 text-white">
<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
<div className="">
<h3 className="text-lg font-medium tracking-tight">
              Lumina Repair
            </h3>
<p className="text-sm text-neutral-300 font-light mt-1">Complex 8% Peptide Serum <span className="text-orange-400 font-medium ml-2 text-[10px] uppercase tracking-wider">[30% OFF]</span></p>
</div>
<button className="border border-white/80 px-6 py-2 rounded-full text-xs font-medium hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap" type="button">Shop Sale</button>
</div>
<div className="w-full h-[1px] bg-gradient-to-r from-white/0 via-white/20 to-white/0 mb-4"></div>
<div className="flex justify-between items-center text-[10px] md:text-xs text-neutral-300 font-medium tracking-wide">
<span className="flex items-center gap-1.5">
<svg className="w-3.5 h-3.5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
            Sulfate free
          </span>
<span className="flex items-center gap-1.5">
<svg className="w-3.5 h-3.5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
            Paraben free
          </span>
<span className="flex items-center gap-1.5">
<svg className="w-3.5 h-3.5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
            Silicone free
          </span>
</div>
</div>
</div>
</div>
</section><div className="bg-neutral-950 border-y border-white/10 text-white relative z-20">
<div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
<div className="flex items-center gap-3">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
</span>
<p className="text-xs md:text-sm font-medium tracking-wide text-neutral-300">
<span className="text-white font-bold uppercase tracking-widest mr-2">Black Friday</span>
        Event is live. Enjoy 30% off sitewide.
      </p>
</div>
<div className="flex items-center gap-6">
<span className="hidden md:block text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Use Code: <span className="text-white">AETHER30</span></span>
<a className="text-[10px] font-bold uppercase tracking-widest border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300" href="#shop">
        Shop Access
      </a>
</div>
</div>
</div>
<style>
  /* Intro + float animations inspired by the Dribbble shot */

  .hero-heading {
    animation: heroHeadingIn 1s ease-out 0.1s forwards;
  }

  .hero-line {
    opacity: 0;
    transform: scaleX(0);
    animation: heroLineIn 0.9s ease-out 0.4s forwards;
  }

  .hero-product {
    opacity: 0;
    /* two animations: intro, then subtle float loop */
    animation:
      heroProductIn 1s cubic-bezier(0.22, 0.85, 0.25, 1) 0.2s forwards,
      heroProductFloat 6s ease-in-out 1.2s infinite;
    transform-origin: center center;
    will-change: transform;
  }

  .hero-card {
    animation: heroCardIn 0.9s ease-out 0.6s forwards;
  }

  .hero-left {
    animation: heroTextIn 0.8s ease-out 0.7s forwards;
  }

  @keyframes heroHeadingIn {
    from {
      opacity: 0;
      transform: translateY(40px) scale(1.08);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes heroLineIn {
    from {
      opacity: 0;
      transform: scaleX(0);
    }
    to {
      opacity: 1;
      transform: scaleX(1);
    }
  }

  @keyframes heroProductIn {
    from {
      opacity: 0;
      transform: translate(-50%, 20%) scale(0.9) rotate(-16deg);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1) rotate(-8deg);
    }
  }

  @keyframes heroProductFloat {
    0%,
    100% {
      transform: translate(-50%, -50%) scale(1) rotate(-8deg);
    }
    50% {
      transform: translate(-50%, -56%) scale(1.02) rotate(-6deg);
    }
  }

  @keyframes heroCardIn {
    from {
      opacity: 0;
      transform: translateY(40px) translateX(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0) translateX(0);
    }
  }

  @keyframes heroTextIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Optional: respect reduced motion preferences */
  @media (prefers-reduced-motion: reduce) {
    .hero-heading,
    .hero-line,
    .hero-product,
    .hero-card,
    .hero-left {
      animation: none !important;
      opacity: 1 !important;
      transform: none !important;
    }

    .hero-product {
      transform: translate(-50%, -50%) rotate(-8deg) !important;
    }
  }
  .glass-card {
  /* translucent white base with a subtle gradient */
  background: linear-gradient(
  135deg,
  rgba(255, 255, 255, 0.18),
  rgba(255, 255, 255, 0.04)
  );
  border: 1px solid rgba(255, 255, 255, 0.22);
  
  /* strong blur to sell the glass effect */
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  
  /* a bit of depth */
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.55);
  
  /* soft corners (your Tailwind rounded-lg still applies) */
  position: relative;
  }
  
  /* Light highlight edge on top for extra “glass” feeling */
  .glass-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border-top: 1px solid rgba(255, 255, 255, 0.45);
  border-left: 1px solid rgba(255, 255, 255, 0.25);
  opacity: 0.6;
  pointer-events: none;
  }
  
  /* Fallback if backdrop-filter isn't supported */
  @supports not ((backdrop-filter: blur(10px))) {
  .glass-card {
  background: rgba(20, 20, 20, 0.9);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.7);
  }
  }
</style>

<section className="md:px-12 bg-white pt-32 pr-6 pb-32 pl-6">
<div className="text-center max-w-5xl mr-auto ml-auto">
<style>
      .k-word {
        opacity: 0.2;
        transition: opacity 0.25s ease;
        display: inline-block;
      }
      .k-word.active {
        opacity: 1;
      }
    </style>
<span className="inline-block text-neutral-400 text-xs font-medium tracking-[0.2em] uppercase mb-8">
      [ The Collective ]
    </span>
<h2 className="karaoke-container text-2xl md:text-4xl leading-tight font-normal text-neutral-800 mb-10 tracking-tight">
      We are a collective of dermatologists and designers obsessed with clarity. Rejecting the noise of the industry,
      we engineer solutions that blend clinical precision with botanical purity to
      <span className="italic text-neutral-400 font-serif">nourish and transcend</span>.
    </h2>
<p className="text-xs text-neutral-400 uppercase tracking-widest mt-12">
      Welcome to the new standard
    </p>

</div>
</section>

<section --="" 300vh="" 
<div className="relative h-full w-full flex flex-col justify-center lg:order-1 bg-neutral-50 border-r border-neutral-200 z-10">

<div className="scrolly-content flex flex-col px-8 md:px-20 transition-all duration-700 ease-out absolute inset-0 justify-center" data-step="1">
<span className="text-neutral-500 text-xs font-medium mb-6 block">
              [ 01 ]
            </span>
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter mb-8 text-neutral-900">
              CellularRevival
            </h2>

<div className="flex gap-4 mb-10 opacity-60">
<div className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center">
<div className="w-8 h-8 bg-neutral-200 rounded-full blur-sm"></div>
</div>
<div className="w-8 h-8 mt-4 rounded-full border border-neutral-300"></div>
</div>
<p className="text-lg leading-relaxed text-neutral-600 max-w-md">
              Our proprietary delivery system ensures active ingredients penetrate
              the stratum corneum. From revitalizing dull textures to reinforcing
              the lipid barrier, we prioritize bioavailability above all else.
            </p>
</div>

<div className="scrolly-content absolute inset-0 flex flex-col justify-center px-8 md:px-20 transition-all duration-700 ease-out opacity-0 translate-y-8" data-step="2">
<span className="text-neutral-500 text-xs font-medium mb-6 block">
              [ 02 ]
            </span>
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter mb-8 text-neutral-900">
              MolecularStability
            </h2>

<div className="flex gap-4 mb-10 opacity-60">
<div className="w-12 h-12 rotate-45 border border-neutral-300 flex items-center justify-center">
<div className="w-8 h-8 bg-neutral-200 rounded-full blur-sm"></div>
</div>
<div className="w-8 h-8 mt-2 rotate-12 border border-neutral-300 bg-neutral-50"></div>
</div>
<p className="text-lg leading-relaxed text-neutral-600 max-w-md">
              Engineered peptides remain stable in formulation, delivering maximum
              potency upon contact. We utilize cold-process manufacturing to
              preserve ingredient integrity and effectiveness.
            </p>
</div>

<div className="scrolly-content absolute inset-0 flex flex-col justify-center px-8 md:px-20 transition-all duration-700 ease-out" data-step="3">
<span className="text-neutral-500 text-xs font-medium mb-6 block">
              [ 03 ]
            </span>
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter mb-8 text-neutral-900">
              BarrierDefense
            </h2>

<div className="flex gap-4 mb-10 opacity-60">
<div className="w-12 h-12 rounded-full border-2 border-dashed border-neutral-300 flex items-center justify-center">
<div className="w-6 h-6 bg-neutral-300 rounded-full"></div>
</div>
<div className="w-8 h-8 mt-4 rounded-full bg-neutral-100 border border-neutral-200"></div>
</div>
<p className="text-lg leading-relaxed text-neutral-600 max-w-md">
              Fortifies the lipid layer against environmental stressors. Our complex
              mimics natural skin ceramides to lock in moisture and deflect
              oxidative damage throughout the day.
            </p>
</div>
</div>


<div className="relative h-[420px] sm:h-[480px] lg:h-auto bg-neutral-200 overflow-hidden lg:order-2 group">

<img alt="Cellular Revival" className="scrolly-image absolute inset-0 w-full h-full object-cover object-center grayscale transition-all duration-1000" data-step="1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/93c27e75-f860-43c4-bb95-ac558fe1660c_1600w.jpg"/>

<img alt="Molecular Stability" className="scrolly-image absolute inset-0 w-full h-full object-cover object-center grayscale transition-all duration-1000 opacity-0 scale-105" data-step="2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b85630b8-d9da-484c-93f2-14796d42b80b_1600w.jpg"/>

<img alt="Barrier Defense" className="scrolly-image absolute inset-0 w-full h-full object-cover object-center grayscale transition-all duration-1000" data-step="3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec3d38bb-5ff0-41b0-b11c-e5b92c90bce5_1600w.jpg"/>

<div className="absolute bottom-10 left-10 bg-white/80 backdrop-blur-sm px-6 py-4 max-w-xs border border-white/50 transition-all duration-500 z-20">
<p className="scrolly-label-title text-xl font-medium tracking-tight text-neutral-900 transition-opacity duration-300" style={{opacity: '1'}}>Barrier Defense</p>
<p className="scrolly-label-desc text-sm text-neutral-500 mt-1 transition-opacity duration-300" style={{opacity: '1'}}>Ceramide Boost</p>
</div>
</div>
</div>

</section>

<section className="relative py-32 bg-white overflow-hidden border-b border-neutral-100" id="formula">

<div className="absolute top-0 left-0 w-full text-center pointer-events-none select-none">
<h2 className="text-[15vw] font-semibold tracking-tighter text-neutral-100 leading-none mt-10 reveal-on-scroll" id="formula-bg-text">
          Formula
        </h2>
</div>
<div className="relative z-10 max-w-6xl mx-auto px-6">

<div className="flex justify-center mb-20">
<div className="relative w-64 h-64 md:w-96 md:h-96 reveal-on-scroll reveal-delay-200" id="formula-molecule-wrapper">
<svg className="w-full h-full drop-shadow-2xl animate-molecule" fill="none" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">

<line stroke="#171717" strokeWidth="6" x1="60" x2="100" y1="100" y2="100"></line>
<line stroke="#171717" strokeWidth="6" x1="100" x2="140" y1="100" y2="70"></line>
<line stroke="#171717" strokeWidth="6" x1="100" x2="140" y1="100" y2="130"></line>

<circle className="" cx="60" cy="100" fill="#404040" r="18"></circle>
<circle cx="100" cy="100" fill="#171717" r="20"></circle>
<circle cx="140" cy="70" fill="#A3A3A3" r="16"></circle>
<circle cx="140" cy="130" fill="#A3A3A3" r="16"></circle>
</svg>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-8 border-t border-neutral-200 pt-12">

<div className="hidden md:contents text-xs font-medium text-neutral-400 uppercase tracking-widest mb-4">
<div>Ingredient</div>
<div className="">Structure</div>
<div className="">Function</div>
</div>

<div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-neutral-100 hover:bg-neutral-50 transition-colors group cursor-default reveal-on-scroll reveal-delay-100">
<div className="text-lg font-medium text-neutral-800">Alpha Lipoic</div>
<div className="text-base font-mono text-neutral-500 group-hover:text-black transition-colors">
              [C8H14O2S2]
            </div>
<div className="text-base text-neutral-600 reveal-on-scroll reveal-delay-200">
              Restores cellular energy and texture.
            </div>
</div>

<div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-neutral-100 hover:bg-neutral-50 transition-colors group cursor-default">
<div className="text-lg font-medium text-neutral-800">Niacinamide</div>
<div className="text-base font-mono text-neutral-500 group-hover:text-black transition-colors">
              [C6H6N2O]
            </div>
<div className="text-base text-neutral-600">
              Strengthens lipid barrier function.
            </div>
</div>

<div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-neutral-100 hover:bg-neutral-50 transition-colors group cursor-default reveal-on-scroll reveal-delay-300">
<div className="text-lg font-medium text-neutral-800">
              Hyaluronic Acid
            </div>
<div className="text-base font-mono text-neutral-500 group-hover:text-black transition-colors">
              [C14H21NO11]n
            </div>
<div className="text-base text-neutral-600">
              Deep hydration retention matrix.
            </div>
</div>
</div>
</div>
</section>

<section className="md:px-12 bg-white border-neutral-100 border-b pt-32 pr-6 pb-32 pl-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

<div className="lg:col-span-4">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-[1.1]">
        What makesit special
      </h2>

<div className="mt-8 lg:hidden text-xs font-semibold text-orange-600 uppercase tracking-widest">
        [ IN-VITRO STUDIES ]
      </div>
</div>

<div className="lg:col-span-8 flex flex-col justify-between h-full">
<div>

<div className="text-[12vw] lg:text-[10rem] font-medium leading-none text-neutral-100 select-none -ml-2 mb-6 flex">
<span id="animated-stat-number">0.0</span>%
        </div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-4">
          Revolutionary Patent Pending Blend
        </h3>
<p className="text-neutral-500 max-w-lg leading-relaxed text-sm mb-16">
          Our serum delivers a remarkable 22.9% increase in the tensile strength of hair fibers after just one wash,
          surpassing competitors' results.
        </p>
</div>

<div className="w-full relative">

<div className="absolute bottom-4 left-0 text-xs font-semibold text-orange-600 uppercase tracking-widest hidden lg:block">
          [ IN-VITRO STUDIES ]
        </div>

<div className="w-full max-w-xl ml-auto">

<div className="mb-8">
<div className="text-xs text-neutral-500 mb-2 font-medium">Usual Serum</div>
<div className="w-full bg-neutral-100 h-8 relative rounded-sm">

<div className="absolute right-0 top-[-4px] bottom-[-4px] border-r border-dashed border-neutral-300"></div>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-2">
<span className="text-xs text-neutral-900 font-medium">Minimalist Serum</span>
<span className="text-sm text-orange-600 font-semibold">+22.9%</span>
</div>

<div className="bg-orange-600 h-8 rounded-sm relative shadow-lg shadow-orange-600/20" id="animated-stat-bar" style={{width: '0%', transition: 'width 1.5s cubic-bezier(0.25, 1, 0.5, 1)'}}>

<div className="absolute right-0 top-[-4px] bottom-[-4px] border-r border-dashed border-neutral-900/20"></div>
</div>
</div>
</div>
</div>
</div>
</div>


</section>

<section className="md:px-12 bg-white border-neutral-100 border-b pt-32 pr-6 pb-32 pl-6" id="shop">
<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-20 max-w-7xl mr-auto ml-auto gap-x-12 gap-y-12">

<div className="lg:col-span-4 flex flex-col justify-between">
<div className="">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-[1.05] mb-10 reveal-on-scroll">
      Meet OurSkincare Heroes
    </h2>
</div>

<div className="text-sm mt-4 space-y-3 reveal-on-scroll reveal-delay-100">
<button className="hero-tab is-active" data-category="skin" type="button">
<span>Skin</span>
<span className="hero-tab-count">[24]</span>
</button>
<button className="hero-tab" data-category="hair" type="button">
<span className="">Hair</span>
<span className="hero-tab-count">[12]</span>
</button>
<button className="hero-tab" data-category="body" type="button">
<span className="">Body</span>
<span className="hero-tab-count">[16]</span>
</button>
<button className="hero-tab" data-category="all" type="button">
<span className="">All Products</span>
<span className="hero-tab-count">[52]</span>
</button>
</div>

<div className="hidden lg:flex mt-10">
<button className="inline-flex rounded-full border border-neutral-200 px-6 py-2 text-xs font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white transition self-start">
      Shop All
    </button>
</div>
</div>

<div className="lg:col-span-8">
<div className="space-y-0 reveal-on-scroll reveal-delay-200" id="hero-panels">

<div className="hero-panel is-active" data-category-panel="skin">
<div className="grid md:grid-cols-2 gap-10">

<article className="flex flex-col">
<div className="aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100">
<img alt="Maleic Bond Repair Complex" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/58e1f058-319e-4657-8ca7-21d868a1a1c3_800w.jpg"/>
</div>
<div className="flex justify-between items-start text-sm mt-4">
<div className="max-w-xs">
<p className="font-medium text-neutral-900">Radiant Renewal Serum
</p>
<p className="text-neutral-500">Brightening Vitamin Complex</p>
</div>
<span className="text-orange-600 font-semibold text-sm">$34</span>
</div>
</article>

<article className="flex flex-col">
<div className="aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100">
<img alt="Frizz Control Complex SPF 30" className="w-full h-full object-cover" src="https://images.pexels.com/photos/3738355/pexels-photo-3738355.jpeg"/>
</div>
<div className="flex justify-between items-start text-sm mt-4">
<div className="max-w-xs">
<p className="font-medium text-neutral-900">Advanced Dermal Repair Treatment</p>
<p className="text-neutral-500">Clinically Proven Anti-Aging Formula</p>
</div>
<span className="text-orange-600 font-semibold text-sm">$36</span>
</div>
</article>
</div>
</div>

<div className="hero-panel" data-category-panel="hair">
<div className="grid md:grid-cols-2 gap-10">
<article className="flex flex-col">
<div className="aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100">
<img alt="Strength Repair Shampoo" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c86bfd8-5307-4938-957d-e00e4067e795_800w.webp"/>
</div>
<div className="flex justify-between items-start text-sm mt-4">
<div className="max-w-xs">
<p className="text-neutral-900 font-medium">Strength Repair Shampoo</p>
<p className="text-neutral-500">Bond-Fortifying Cleanser</p>
</div>
<span className="text-orange-600 font-semibold text-sm">$28</span>
</div>
</article>
<article className="flex flex-col">
<div className="aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100">
<img alt="Gloss Renewal Mask" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bd1db224-b438-47b5-8cb4-6744fbdc7fa2_1600w.jpg"/>
</div>
<div className="flex justify-between items-start text-sm mt-4">
<div className="max-w-xs">
<p className="text-neutral-900 font-medium">Gloss Renewal Mask</p>
<p className="text-neutral-500">Weekly Treatment</p>
</div>
<span className="text-orange-600 font-semibold text-sm">$32</span>
</div>
</article>
</div>
</div>

<div className="hero-panel" data-category-panel="body">
<div className="grid md:grid-cols-2 gap-10">
<article className="flex flex-col">
<div className="aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100">
<img alt="Ceramide Body Lotion" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/430f9d5a-b59f-4387-b373-13fbdd1df442_1600w.jpg"/>
</div>
<div className="flex justify-between items-start text-sm mt-4">
<div className="max-w-xs">
<p className="text-neutral-900 font-medium">Ceramide Body Lotion</p>
<p className="text-neutral-500">Barrier Repair Complex</p>
</div>
<span className="text-orange-600 font-semibold text-sm">$29</span>
</div>
</article>
<article className="flex flex-col">
<div className="aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100">
<img alt="Overnight Renewal Oil" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2c76b5f6-8d40-4634-917d-37ba76b45f11_800w.webp"/>
</div>
<div className="flex justify-between items-start text-sm mt-4">
<div className="max-w-xs">
<p className="text-neutral-900 font-medium">Overnight Renewal Oil</p>
<p className="text-neutral-500">Brightening Body Elixir</p>
</div>
<span className="text-orange-600 font-semibold text-sm">$42</span>
</div>
</article>
</div>
</div>

<div className="hero-panel" data-category-panel="all">
<div className="grid md:grid-cols-2 gap-10">

<article className="flex flex-col">
<div className="aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100">
<img alt="Hero Set" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/799ee289-06e2-4ee9-8640-f53ea2089d12_1600w.jpg"/>
</div>
<div className="flex justify-between items-start text-sm mt-4">
<div className="max-w-xs">
<p className="text-neutral-900 font-medium">Complete Hero Set</p>
<p className="text-neutral-500">Skin + Hair + Body</p>
</div>
<span className="text-orange-600 font-semibold text-sm">$96</span>
</div>
</article>
<article className="flex flex-col">
<div className="aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100">
<img alt="Discovery Kit" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/78670b53-264c-400d-abb5-55eb688e95d0_1600w.jpg"/>
</div>
<div className="flex justify-between items-start text-sm mt-4">
<div className="max-w-xs">
<p className="text-neutral-900 font-medium">Discovery Kit</p>
<p className="text-neutral-500">Travel-size essentials</p>
</div>
<span className="text-orange-600 font-semibold text-sm">$49</span>
</div>
</article>
</div>
</div>
</div>
</div>
</div>

<style>
    .hero-tab {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      border: none;
      background: transparent;
      padding: 0;
      font-size: 0.9rem;
      color: #a3a3a3;
      cursor: pointer;
      transition: color 180ms ease;
    }

    .hero-tab-count {
      font-size: 0.75rem;
      color: #d4d4d4;
    }

    .hero-tab.is-active {
      color: #111827;
      font-weight: 500;
    }

    .hero-tab.is-active .hero-tab-count {
      color: #f97316;
      font-weight: 600;
    }

    .hero-tab:hover {
      color: #171717;
    }

    .hero-panel {
      display: none;
    }

    .hero-panel.is-active {
      display: block;
    }
  </style>


</section>

<section className="overflow-hidden bg-[#fafafa] pt-32 pb-40 relative" id="reviews">

<div className="absolute top-[10%] left-0 right-0 w-full text-center pointer-events-none select-none z-0">
<h2 className="text-[18vw] font-bold tracking-tighter text-neutral-100/80 leading-none reveal-on-scroll">
      Client Stories
    </h2>
</div>
<div className="md:px-12 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-end">

<div className="lg:col-span-4 flex flex-col h-full justify-start">
<div className="mt-4 mb-8 reveal-on-scroll reveal-delay-100">
<span className="text-xs font-semibold text-orange-600 uppercase tracking-widest mb-4 block">
              [ 20K HAPPY CLIENTS ]
            </span>
<p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
          Our products are not only scientifically proven but also customer-approved. See what our community has to say
          about their journey.
        </p>
</div>

</div>

<div className="lg:col-span-8 relative overflow-hidden" style={{maskImage: 'linear-gradient(90deg, transparent, black 35%, black 55%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 35%, black 55%, transparent)'}}>

<div className="testimonial-track flex snap-x snap-mandatory pb-4 gap-x-6 gap-y-6 reveal-on-scroll reveal-delay-300">

<div className="group testimonial-card min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm snap-center">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client Sarah" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/86f7f4a2-e44a-49da-9aa4-387df6392695_800w.webp"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-bold text-orange-600 uppercase tracking-wide">
              [4.9]
            </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
            "I'm amazed at how quickly my skin improved after using these products! My complexion looks brighter, feels
            smoother, and I've received so many compliments."
          </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<span className="text-xs font-bold text-neutral-900">Sarah H.</span>
<span className="text-[10px] text-neutral-400 uppercase">May 2024</span>
</div>
</div>

<div className="group testimonial-card min-w-[300px] md:min-w-[340px] snap-center bg-white border-neutral-100 border pt-4 pr-4 pb-4 pl-4 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client Jane" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/419c3346-033b-4638-a935-a2d88a49889c_800w.jpg"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-bold text-orange-600 uppercase tracking-wide">
              [5.0]
            </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
            "I've struggled with dry, sensitive skin for years, but since switching to these products, my skin feels
            hydrated, calm, and more balanced than ever."
          </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<span className="text-xs font-bold text-neutral-900">Jane D.</span>
<span className="text-[10px] text-neutral-400 uppercase">May 2024</span>
</div>
</div>

<div className="group testimonial-card min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm snap-center">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client Michael" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/68d6b8da-d1ca-48b1-a6ff-a76d865061f1_800w.jpg"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-bold text-orange-600 uppercase tracking-wide">
              [4.8]
            </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
            "The texture of the serum is incredible. It absorbs instantly without leaving any residue. My routine has
            never been this effective."
          </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<span className="text-xs font-bold text-neutral-900">Michael R.</span>
<span className="text-[10px] text-neutral-400 uppercase">Apr 2024</span>
</div>
</div>

<div className="group testimonial-card min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm snap-center">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client Lina" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://images.pexels.com/photos/3735654/pexels-photo-3735654.jpeg"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-bold text-orange-600 uppercase tracking-wide">
              [4.7]
            </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
            "I love how lightweight everything feels. My routine finally looks minimal but my results feel maximal."
          </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<span className="text-xs font-bold text-neutral-900">Lina R.</span>
<span className="text-[10px] text-neutral-400 uppercase">Mar 2024</span>
</div>
</div>

<div className="group testimonial-card min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm snap-center">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client Noah" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4a3559c6-d7dc-463f-9b25-ce7529387e3d_800w.webp"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-bold text-orange-600 uppercase tracking-wide">
              [5.0]
            </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
            "From the very first week I noticed a glow I hadn’t seen in years. It genuinely feels like my skin has been
            reset."
          </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<span className="text-xs font-bold text-neutral-900">Noah S.</span>
<span className="text-[10px] text-neutral-400 uppercase">Jan 2024</span>
</div>
</div>




<div className="group testimonial-card min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm snap-center">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client Sarah" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/86f7f4a2-e44a-49da-9aa4-387df6392695_800w.webp"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-bold text-orange-600 uppercase tracking-wide">
              [4.9]
            </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
            "I'm amazed at how quickly my skin improved after using these products! My complexion looks brighter, feels
            smoother, and I've received so many compliments."
          </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<span className="text-xs font-bold text-neutral-900">Sarah H.</span>
<span className="text-[10px] text-neutral-400 uppercase">May 2024</span>
</div>
</div>

<div className="group testimonial-card min-w-[300px] md:min-w-[340px] snap-center bg-white border-neutral-100 border pt-4 pr-4 pb-4 pl-4 shadow-sm">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client Jane" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/419c3346-033b-4638-a935-a2d88a49889c_800w.jpg"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-bold text-orange-600 uppercase tracking-wide">
              [5.0]
            </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
            "I've struggled with dry, sensitive skin for years, but since switching to these products, my skin feels
            hydrated, calm, and more balanced than ever."
          </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<span className="text-xs font-bold text-neutral-900">Jane D.</span>
<span className="text-[10px] text-neutral-400 uppercase">May 2024</span>
</div>
</div>

<div className="group testimonial-card min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm snap-center">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client Michael" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/68d6b8da-d1ca-48b1-a6ff-a76d865061f1_800w.jpg"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-bold text-orange-600 uppercase tracking-wide">
              [4.8]
            </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
            "The texture of the serum is incredible. It absorbs instantly without leaving any residue. My routine has
            never been this effective."
          </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<span className="text-xs font-bold text-neutral-900">Michael R.</span>
<span className="text-[10px] text-neutral-400 uppercase">Apr 2024</span>
</div>
</div>

<div className="group testimonial-card min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm snap-center">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client Lina" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:-translate-x-3" src="https://images.pexels.com/photos/3735654/pexels-photo-3735654.jpeg"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-bold text-orange-600 uppercase tracking-wide">
              [4.7]
            </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
            "I love how lightweight everything feels. My routine finally looks minimal but my results feel maximal."
          </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<span className="text-xs font-bold text-neutral-900">Lina R.</span>
<span className="text-[10px] text-neutral-400 uppercase">Mar 2024</span>
</div>
</div>

<div className="group testimonial-card min-w-[300px] md:min-w-[340px] bg-white p-4 border border-neutral-100 shadow-sm snap-center">
<div className="relative h-48 w-full mb-4 overflow-hidden bg-neutral-100">
<img alt="Client Noah" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:translate-x-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-bold text-orange-600 uppercase tracking-wide">
              [5.0]
            </div>
</div>
<p className="text-xs text-neutral-600 leading-relaxed mb-6 h-20 overflow-hidden">
            "From the very first week I noticed a glow I hadn’t seen in years. It genuinely feels like my skin has been
            reset."
          </p>
<div className="flex justify-between items-end border-t border-neutral-100 pt-4">
<span className="text-xs font-bold text-neutral-900">Noah S.</span>
<span className="text-[10px] text-neutral-400 uppercase">Jan 2024</span>
</div>
</div>
</div>
</div>
</div>
<style>
    .testimonial-track {
      width: min-content;
      animation: testimonial-scroll 35s linear infinite;
    }

    /* Pause on hover so users can read comfortably */
    .testimonial-track:hover {
      animation-play-state: paused;
    }

    @keyframes testimonial-scroll {
      from {
        transform: translateX(0);
      }

      to {
        transform: translateX(-50%);
      }
    }
  </style>
</section>

<section className="relative w-full h-[90vh] flex items-end pb-20 px-6 md:px-12 overflow-hidden bg-neutral-900">

<div className="absolute inset-0 z-0">
<img alt="Water Texture" className="w-full h-full object-cover opacity-60 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1699b755-2414-43b4-9e32-3b20e4e000d8_3840w.jpg" style={{}}/>
<div className="bg-gradient-to-t from-black via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-7xl z-10 mr-auto ml-auto relative gap-x-12 gap-y-12 items-start">

<div className="pb-10">
<h2 className="text-4xl md:text-6xl text-white font-medium tracking-tight mb-6 reveal-on-scroll">
      Scientifically ProvenResults.
    </h2>
<p className="text-lg text-neutral-300 mb-10 max-w-md leading-relaxed reveal-on-scroll reveal-delay-100">
      Unlock the potential of our formulations. Clinical trials show
      significant improvement in elasticity within 14 days.
    </p>
<button className="group border border-white/40 bg-neutral-100/20 backdrop-blur-md text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 reveal-on-scroll reveal-delay-200">
            Shop Collection
            <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="flex justify-end">
<div className="glass-card [--fx-filter:blur(10px)_liquid-glass(4.7,10)_saturate(1.25)_noise(0.5,1,0)] text-white w-full max-w-sm rounded-lg px-8 py-8 reveal-on-scroll reveal-delay-300">
<div className="text-[10px] uppercase tracking-widest text-neutral-400 mb-6">
        [ HYALURONIC MATRIX ]
      </div>

<div className="h-32 w-full mb-6 flex items-center justify-center opacity-80">
<svg className="" fill="none" height="100%" stroke="white" strokeWidth="1" viewbox="0 0 200 100" width="100%">
<path d="M20 50 L50 30 L80 50 L110 30 L140 50 L170 30" stroke-opacity="0.8"></path>
<circle cx="50" cy="30" fill="white" r="3"></circle>
<circle cx="110" cy="30" fill="white" r="3"></circle>
<text fill="white" fontFamily="sans-serif" fontSize="10" x="175" y="35">
            OH
          </text>
<text fill="white" fontFamily="sans-serif" fontSize="10" x="15" y="55">
            HO
          </text>
</svg>
</div>
<div className="text-5xl font-medium tracking-tight mb-2">40%</div>
<p className="text-sm text-neutral-300">
        Increase in skin hydration levels immediately after application.
      </p>
</div>
</div>

</div>
</section>

<footer className="overflow-hidden text-white bg-[#050505] border-neutral-800 border-t pt-24">

<div className="text-center w-full mb-20 pr-4 pl-4" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 55%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 55%, transparent)'}}>
<h1 className="text-[22vw] leading-[0.7] select-none font-bold text-[#141414] tracking-tighter mix-blend-screen scale-y-110 reveal-on-scroll">
                AETHER
            </h1>
</div>

<div className="border-t border-neutral-900 grid grid-cols-1 lg:grid-cols-2 reveal-on-scroll reveal-delay-100">

<div className="p-8 md:p-16 grid grid-cols-2 gap-12 border-r border-neutral-900">
<div className="flex flex-col gap-6">
<a className="text-xs font-medium text-neutral-500 uppercase tracking-widest hover:text-white transition-colors" href="#">About Us</a>
<a className="text-xs font-medium text-neutral-500 uppercase tracking-widest hover:text-white transition-colors" href="#">Shop</a>
<a className="text-xs font-medium text-neutral-500 uppercase tracking-widest hover:text-white transition-colors" href="#">Technology</a>
</div>
<div className="flex flex-col gap-6">
<a className="text-xs font-medium text-neutral-500 uppercase tracking-widest hover:text-white transition-colors" href="#">Contact Us</a>
<a className="text-xs font-medium text-neutral-500 uppercase tracking-widest hover:text-white transition-colors" href="#">Instagram</a>
<a className="text-xs font-medium text-neutral-500 uppercase tracking-widest hover:text-white transition-colors" href="#">Twitter/X</a>
<a className="text-xs font-medium text-neutral-500 uppercase tracking-widest hover:text-white transition-colors" href="#">Facebook</a>
</div>
</div>

<div className="lg:h-auto lg:border-t-0 flex overflow-hidden aether-bottles w-full h-48 border-neutral-900 border-t relative items-center justify-center">
<svg className="opacity-20 max-h-[160px] w-[756px] h-[160px]" preserveaspectratio="xMidYMid meet" strokeWidth="2" style={{width: '756px', height: '160px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 400 120">

<path d="M40 100 L50 30 L90 30 L100 100" fill="none" stroke="white" strokeWidth="1"></path>
<rect fill="none" height="10" stroke="white" strokeWidth="1" width="40" x="50" y="20"></rect>

<path d="M120 100 L130 10 L170 10 L180 100" fill="none" stroke="white" strokeWidth="1"></path>
<rect fill="none" height="5" stroke="white" strokeWidth="1" width="40" x="130" y="5"></rect>

<g className="dropper-bottle" transform="translate(200, 10)">

<defs>
<clippath id="dropper-clip">

<path d="M15 25
               Q15 20 20 20
               L40 20
               Q45 20 45 25
               L45 80
               Q45 90 30 90
               Q15 90 15 80
               Z"></path>
</clippath>
</defs>

<path d="M25 0 L25 10 L20 10 L20 20 L40 20 L40 10 L35 10 L35 0 Z" fill="none" stroke="white" strokeWidth="1"></path>

<path d="M15 25 Q15 20 20 20 L40 20 Q45 20 45 25 L45 80 Q45 90 30 90 Q15 90 15 80 Z" fill="none" stroke="white" strokeWidth="1"></path>

<g clipPath="url(#dropper-clip)">

<rect className="liquid-fill" fill="#7c4a30" height="30" opacity="0.6" width="30" x="15" y="60"></rect>

<path className="liquid-wave" d="M15 60
             Q22 55 30 57
             Q38 59 45 56
             L45 90
             L15 90 Z" fill="#7c4a30" opacity="0.9"></path>
</g>
</g>

<path d="M270 100 L280 20 L320 20 L330 100" fill="none" stroke="white" strokeWidth="1"></path>
<rect fill="none" height="10" stroke="white" strokeWidth="1" width="40" x="280" y="10"></rect>

<g transform="translate(350, 20)">
<rect fill="none" height="20" stroke="white" strokeWidth="1" width="10" x="25" y="0"></rect>
<path d="M15 25 Q15 20 20 20 L40 20 Q45 20 45 25 L45 70 Q45 80 30 80 Q15 80 15 70 Z" fill="none" stroke="white" strokeWidth="1"></path>
</g>
</svg>
</div>
<style>
  /* make transforms work nicely inside SVG */
  .aether-bottles .liquid-fill,
  .aether-bottles .liquid-wave {
    transform-box: fill-box;
    transform-origin: center bottom;
  }

  /* hover over the SVG area */
  .aether-bottles svg:hover .liquid-wave {
    animation: aether-wave 1.8s ease-in-out infinite;
  }

  .aether-bottles svg:hover .liquid-fill {
    animation: aether-fill 1.8s ease-in-out infinite;
  }

  @keyframes aether-wave {
    0%   { transform: translateX(0)    translateY(0); }
    25%  { transform: translateX(-3px) translateY(-2px); }
    50%  { transform: translateX(3px)  translateY(-1px); }
    75%  { transform: translateX(-2px) translateY(-3px); }
    100% { transform: translateX(0)    translateY(0); }
  }

  @keyframes aether-fill {
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-4px); }
    100% { transform: translateY(-2px); }
  }
</style>

<div className="border-t border-neutral-900 px-8 md:px-16 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-neutral-600 font-medium tracking-wide">
<div>
                2024 All rights reserved
            </div>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of use</a>
<a className="hover:text-white transition-colors" href="#">Cookies</a>
</div>
</div>
</div></footer>

<style>.reveal-on-scroll{opacity:0;transform:translateY(30px);filter:blur(8px);transition:all 1s cubic-bezier(0.2,0.8,0.2,1);will-change:opacity,transform,filter}.reveal-on-scroll.is-visible{opacity:1;transform:translateY(0);filter:blur(0)}.reveal-delay-100{transition-delay:0.1s}.reveal-delay-200{transition-delay:0.2s}.reveal-delay-300{transition-delay:0.3s}</style>
    </>
  );
}
