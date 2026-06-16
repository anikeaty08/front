import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        (function() {
          const serviceItems = document.querySelectorAll('[data-service]');

          const observerOptions = {
            root: null,
            rootMargin: '-100px 0px -60% 0px',
            threshold: 0
          };

          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              const serviceId = entry.target.getAttribute('data-service');
              const details = document.querySelector(`[data-details="${serviceId}"]`);

              if (entry.isIntersecting) {
                details.style.maxHeight = '300px';
                details.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
              } else {
                details.style.maxHeight = '0';
                details.style.opacity = '0';
              }
            });
          }, observerOptions);

          serviceItems.forEach(item => observer.observe(item));
        })();
      


      lucide.createIcons();

      // Mobile Menu
      const menuBtn = document.getElementById('menuBtn');
      const closeMenuBtn = document.getElementById('closeMenuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      const menuOverlay = document.getElementById('menuOverlay');
      const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

      function openMenu() {
        mobileMenu.classList.add('open');
        menuOverlay.classList.remove('pointer-events-none');
        menuOverlay.classList.add('opacity-100');
        document.body.style.overflow = 'hidden';
      }

      function closeMenu() {
        mobileMenu.classList.remove('open');
        menuOverlay.classList.add('pointer-events-none');
        menuOverlay.classList.remove('opacity-100');
        document.body.style.overflow = '';
      }

      menuBtn.addEventListener('click', openMenu);
      closeMenuBtn.addEventListener('click', closeMenu);
      menuOverlay.addEventListener('click', closeMenu);

      mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
          closeMenu();
        });
      });

      // Reveal on scroll
      const revealElements = document.querySelectorAll('.reveal, .reveal-scale, .image-reveal');

      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      });

      revealElements.forEach(el => {
        revealObserver.observe(el);
      });

      // Smooth scroll
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });

      // Parallax effect
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-slow');

        parallaxElements.forEach(el => {
          const speed = 0.5;
          el.style.transform = `translateY(${scrolled * speed}px)`;
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="" id="wrapper">

<div className="gradient-blur">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
<style>
        .gradient-blur {
          position: fixed;
          z-index: 5;
          inset: 0 0 auto 0;
          height: 12%;
          pointer-events: none;
        }

        .gradient-blur>div,
        .gradient-blur::before,
        .gradient-blur::after {
          position: absolute;
          inset: 0;
        }

        .gradient-blur::before {
          content: "";
          z-index: 1;
          backdrop-filter: blur(0.5px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 1) 12.5%,
              rgba(0, 0, 0, 1) 25%,
              rgba(0, 0, 0, 0) 37.5%);
        }

        .gradient-blur>div:nth-of-type(1) {
          z-index: 2;
          backdrop-filter: blur(1px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 12.5%,
              rgba(0, 0, 0, 1) 25%,
              rgba(0, 0, 0, 1) 37.5%,
              rgba(0, 0, 0, 0) 50%);
        }

        .gradient-blur>div:nth-of-type(2) {
          z-index: 3;
          backdrop-filter: blur(2px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 25%,
              rgba(0, 0, 0, 1) 37.5%,
              rgba(0, 0, 0, 1) 50%,
              rgba(0, 0, 0, 0) 62.5%);
        }

        .gradient-blur>div:nth-of-type(3) {
          z-index: 4;
          backdrop-filter: blur(4px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 37.5%,
              rgba(0, 0, 0, 1) 50%,
              rgba(0, 0, 0, 1) 62.5%,
              rgba(0, 0, 0, 0) 75%);
        }

        .gradient-blur>div:nth-of-type(4) {
          z-index: 5;
          backdrop-filter: blur(8px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 50%,
              rgba(0, 0, 0, 1) 62.5%,
              rgba(0, 0, 0, 1) 75%,
              rgba(0, 0, 0, 0) 87.5%);
        }

        .gradient-blur>div:nth-of-type(5) {
          z-index: 6;
          backdrop-filter: blur(16px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 62.5%,
              rgba(0, 0, 0, 1) 75%,
              rgba(0, 0, 0, 1) 87.5%,
              rgba(0, 0, 0, 0) 100%);
        }

        .gradient-blur>div:nth-of-type(6) {
          z-index: 7;
          backdrop-filter: blur(32px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 75%,
              rgba(0, 0, 0, 1) 87.5%,
              rgba(0, 0, 0, 1) 100%);
        }

        .gradient-blur::after {
          content: "";
          z-index: 8;
          backdrop-filter: blur(64px);
          mask: linear-gradient(to top,
              rgba(0, 0, 0, 0) 87.5%,
              rgba(0, 0, 0, 1) 100%);
        }
      </style>
</div>

<nav className="fixed top-0 w-full z-50">
<div className="lg:px-12 max-w-[1600px] mr-auto ml-auto pt-6 pr-6 pb-6 pl-6">
<div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 lg:px-8 py-4 shadow-2xl shadow-black/20">
<div className="flex items-center justify-between">
<a className="text-2xl tracking-[0.2em] font-light text-white" href="#">
              NOIR
            </a>
<div className="hidden md:flex items-center gap-12 text-sm tracking-wider">
<a className="text-white hover:opacity-60 transition-opacity duration-300" href="#collection">
                COLLECTION
              </a>
<a className="text-white hover:opacity-60 transition-opacity duration-300" href="#philosophy">
                PHILOSOPHY
              </a>
<a className="text-white hover:opacity-60 transition-opacity duration-300" href="#atelier">
                ATELIER
              </a>
</div>
<button className="text-white hover:opacity-60 transition-opacity md:hidden" id="menuBtn">
<svg className="lucide lucide-menu w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path>
<path d="M4 12h16"></path>
<path d="M4 19h16"></path>
</svg>
</button>
</div>
</div>
</div>
</nav>

<div className="mobile-menu fixed top-0 right-0 h-full w-full sm:w-80 bg-zinc-950 z-[60] shadow-2xl" id="mobileMenu">
<div className="flex flex-col h-full">
<div className="flex items-center justify-between px-6 py-8 border-b border-white/10">
<span className="text-2xl tracking-[0.2em] font-light text-white">
            NOIR
          </span>
<button className="text-white hover:opacity-60 transition-opacity" id="closeMenuBtn">
<svg className="lucide lucide-x w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>
<div className="flex-1 px-6 py-12 flex flex-col gap-8">
<a className="text-2xl font-light tracking-wider text-white hover:opacity-60 transition-opacity mobile-menu-link" href="#collection">
            COLLECTION
          </a>
<a className="text-2xl font-light tracking-wider text-white hover:opacity-60 transition-opacity mobile-menu-link" href="#philosophy">
            PHILOSOPHY
          </a>
<a className="text-2xl font-light tracking-wider text-white hover:opacity-60 transition-opacity mobile-menu-link" href="#atelier">
            ATELIER
          </a>
</div>
<div className="px-6 py-8 border-t border-white/10">
<div className="flex items-center gap-6">
<a className="text-sm tracking-wider text-zinc-500 hover:text-white transition-colors" href="https://instagram.com">
              INSTAGRAM
            </a>
<a className="text-sm tracking-wider text-zinc-500 hover:text-white transition-colors" href="https://twitter.com">
              FACEBOOK
            </a>
<a className="text-sm tracking-wider text-zinc-500 hover:text-white transition-colors" href="https://facebook.com">
              TWITTER
            </a>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] opacity-0 pointer-events-none transition-opacity duration-300" id="menuOverlay"></div>

<section className="flex overflow-hidden h-screen relative items-center justify-center reveal active">
<div className="z-10 bg-gradient-to-b from-black/60 via-black/40 to-black absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute inset-0">
<img alt="Hero" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/30a171b9-41c8-48fe-8ea6-deec71d988ec_3840w.webp"/>
</div>
<div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
<div className="reveal mb-6 active">
<div className="inline-block border border-white/20 rounded-full px-6 py-2 backdrop-blur-sm">
<span className="text-xs tracking-[0.3em] text-white/90">
              SPRING SUMMER 2024
            </span>
</div>
</div>
<h1 className="reveal text-[56px] md:text-[96px] lg:text-[128px] font-light leading-[0.9] tracking-tight mb-8 font-serif active">
<span className="block">Refined</span>
<span className="block gradient-text py-4">Elegance</span>
</h1>
<p className="reveal text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed active">
          Where architectural precision meets timeless beauty
        </p>
<div className="reveal flex flex-col sm:flex-row items-center justify-center gap-6 active">
<button className="group overflow-hidden sm:w-auto text-sm font-medium text-black tracking-wider bg-white w-full pt-4 pr-8 pb-4 pl-8 relative" onclick="document.getElementById('collection').scrollIntoView({behavior:'smooth'})">
<span className="relative z-10 group-hover:text-white transition-colors duration-500">
              EXPLORE COLLECTION
            </span>
<div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
<span className="flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white absolute top-0 right-0 bottom-0 left-0 pointer-events-none">
              EXPLORE COLLECTION
            </span>
</button>
<div className="w-full sm:w-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-none">
<button className="flex hover:opacity-60 transition-opacity text-sm text-white tracking-wider w-full pt-2 pr-6 pb-2 pl-6 gap-x-3 gap-y-3 items-center justify-center" onclick="document.getElementById('videoModal').classList.remove('pointer-events-none', 'opacity-0'); document.body.style.overflow = 'hidden';">
<span className="">WATCH FILM</span>
<div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center">
<svg className="lucide lucide-play w-4 h-4 ml-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
</svg>
</div>
</button>
</div>
</div>
</div>
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
<div className="flex flex-col items-center gap-2 animate-bounce">
<span className="text-xs tracking-widest text-white/60">SCROLL</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
</section>

<section className="relative py-32 lg:py-48 px-6">
<div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-5 reveal">
<div className="border-l-2 border-white/20 pl-8">
<span className="text-xs tracking-[0.3em] text-zinc-500 mb-6 block">
                CRAFTSMANSHIP
              </span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight font-serif">
                Every stitch tells a story
              </h2>
<p className="text-lg text-zinc-400 leading-relaxed mb-8">
                In our Parisian atelier, master artisans dedicate hundreds of
                hours to each piece, employing techniques passed down through
                generations.
              </p>
<button className="text-sm tracking-wider border-b border-white pb-1 hover:border-white/40 transition-colors">
                DISCOVER OUR PROCESS
              </button>
</div>
</div>
<div className="lg:col-span-7 reveal-scale">
<div className="relative aspect-[4/5] overflow-hidden">
<img alt="Craftsmanship" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a865440d-8624-46d5-b8ea-dd1ba3f1cb65_3840w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 px-6" id="collection">
<div className="max-w-[1600px] mx-auto">
<div className="text-center mb-20 reveal">
<span className="text-xs tracking-[0.3em] text-zinc-500 mb-4 block">
            SPRING SUMMER 2024
          </span>
<h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight font-serif">
            The Collection
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-x-8 gap-y-8">

<div className="group reveal cursor-pointer collection-item" onclick="alert('Product details coming soon. Contact our atelier for inquiries.')">
<div className="aspect-[3/4] overflow-hidden bg-zinc-900 bg-cover mb-6 relative bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ac9ddeb6-2ed8-44c8-9abe-ac32c98633f1_3840w.webp)]">
<div className="image-reveal">
<img alt="Look 01" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 collection-item-img" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&amp;q=90"/>
</div>
<div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-xs tracking-wider text-black">
                  VIEW DETAILS
                </span>
</div>
<div className="collection-details absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
<h3 className="text-3xl font-light font-serif text-white mb-3">
                  Tailored Blazer
                </h3>
<p className="text-sm text-zinc-300 mb-2">Wool Cashmere Blend</p>
<p className="text-lg text-white font-light mb-4">€1,850</p>
<p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
                  Meticulously crafted with premium wool-cashmere blend.
                  Features hand-stitched lapels and custom horn buttons.
                </p>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<h3 className="text-xl font-light font-serif">Tailored Blazer</h3>
<span className="text-sm text-zinc-500">01</span>
</div>
<p className="text-sm text-zinc-500">Wool Cashmere Blend</p>
<p className="text-lg font-light">€1,850</p>
</div>
</div>

<div className="group reveal cursor-pointer collection-item" onclick="alert('Product details coming soon. Contact our atelier for inquiries.')">
<div className="aspect-[3/4] overflow-hidden bg-zinc-900 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b9dc1ae3-ddf0-49be-a144-8e85fe27bb27_1600w.jpg)] bg-cover mb-6 relative">
<div className="image-reveal">
<img alt="Look 02" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 collection-item-img" src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&amp;q=90"/>
</div>
<div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-xs tracking-wider text-black">
                  VIEW DETAILS
                </span>
</div>
<div className="collection-details absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
<h3 className="text-3xl font-light font-serif text-white mb-3">
                  Silk Dress
                </h3>
<p className="text-sm text-zinc-300 mb-2">Pure Silk</p>
<p className="text-lg text-white font-light mb-4">€2,200</p>
<p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
                  Elegant flowing silhouette in luxurious pure silk.
                  Hand-finished seams with concealed back closure.
                </p>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<h3 className="text-xl font-light font-serif">Silk Dress</h3>
<span className="text-sm text-zinc-500">02</span>
</div>
<p className="text-sm text-zinc-500">Pure Silk</p>
<p className="text-lg font-light">€2,200</p>
</div>
</div>

<div className="group reveal cursor-pointer collection-item" onclick="alert('Product details coming soon. Contact our atelier for inquiries.')">
<div className="aspect-[3/4] overflow-hidden bg-zinc-900 bg-cover mb-6 relative bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c9295085-0ea0-46d3-b93a-6d044ebc2dea_1600w.webp)] bg-center">
<div className="image-reveal">
<img alt="Look 03" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 collection-item-img" src="https://images.unsplash.com/photo-1558769132-cb1aea663c3f?w=800&amp;q=90"/>
</div>
<div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-xs tracking-wider text-black">
                  VIEW DETAILS
                </span>
</div>
<div className="collection-details absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
<h3 className="text-3xl font-light font-serif text-white mb-3">
                  Structured Coat
                </h3>
<p className="text-sm text-zinc-300 mb-2">Virgin Wool</p>
<p className="text-lg text-white font-light mb-4">€3,400</p>
<p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
                  Architectural design in virgin wool. Padded shoulders and full
                  canvas construction for lasting shape.
                </p>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<h3 className="text-xl font-light font-serif">Structured Coat</h3>
<span className="text-sm text-zinc-500">03</span>
</div>
<p className="text-sm text-zinc-500">Virgin Wool</p>
<p className="text-lg font-light">€3,400</p>
</div>
</div>

<div className="group reveal cursor-pointer collection-item" onclick="alert('Product details coming soon. Contact our atelier for inquiries.')">
<div className="aspect-[3/4] overflow-hidden bg-zinc-900 bg-cover mb-6 relative bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/91c257c8-be79-4317-a0ef-3572a47683f4_1600w.jpg)] bg-center">
<div className="image-reveal">
<img alt="Look 04" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 collection-item-img" src="https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=800&amp;q=90"/>
</div>
<div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-xs tracking-wider text-black">
                  VIEW DETAILS
                </span>
</div>
<div className="collection-details absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
<h3 className="text-3xl font-light font-serif text-white mb-3">
                  Evening Gown
                </h3>
<p className="text-sm text-zinc-300 mb-2">Chiffon Silk</p>
<p className="text-lg text-white font-light mb-4">€4,100</p>
<p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
                  Ethereal chiffon silk gown with delicate draping. Hand-rolled
                  edges and invisible zipper closure.
                </p>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<h3 className="text-xl font-light font-serif">Evening Gown</h3>
<span className="text-sm text-zinc-500">04</span>
</div>
<p className="text-sm text-zinc-500">Chiffon Silk</p>
<p className="text-lg font-light">€4,100</p>
</div>
</div>

<div className="group reveal cursor-pointer collection-item" onclick="alert('Product details coming soon. Contact our atelier for inquiries.')">
<div className="aspect-[3/4] overflow-hidden bg-zinc-900 bg-cover mb-6 relative bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6f3c86a4-80b4-4a49-b8e1-90d97dd42d93_1600w.jpg)] bg-center">
<div className="image-reveal">
<img alt="Look 05" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 collection-item-img" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&amp;q=90"/>
</div>
<div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-xs tracking-wider text-black">
                  VIEW DETAILS
                </span>
</div>
<div className="collection-details absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
<h3 className="text-3xl font-light font-serif text-white mb-3">
                  Trench Coat
                </h3>
<p className="text-sm text-zinc-300 mb-2">Cotton Gabardine</p>
<p className="text-lg text-white font-light mb-4">€2,650</p>
<p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
                  Classic trench in weatherproof cotton gabardine.
                  Double-breasted with adjustable belt and storm shield.
                </p>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<h3 className="text-xl font-light font-serif">Trench Coat</h3>
<span className="text-sm text-zinc-500">05</span>
</div>
<p className="text-sm text-zinc-500">Cotton Gabardine</p>
<p className="text-lg font-light">€2,650</p>
</div>
</div>

<div className="group reveal cursor-pointer collection-item" onclick="alert('Product details coming soon. Contact our atelier for inquiries.')">
<div className="aspect-[3/4] overflow-hidden bg-zinc-900 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f1c052b4-c100-46fc-8632-e901d967537c_1600w.webp)] bg-cover mb-6 relative">
<div className="image-reveal">
<img alt="Look 06" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 collection-item-img" src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&amp;q=90"/>
</div>
<div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-xs tracking-wider text-black">
                  VIEW DETAILS
                </span>
</div>
<div className="collection-details absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
<h3 className="text-3xl font-light font-serif text-white mb-3">
                  Wide Leg Trouser
                </h3>
<p className="text-sm text-zinc-300 mb-2">Italian Linen</p>
<p className="text-lg text-white font-light mb-4">€890</p>
<p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
                  Relaxed wide-leg silhouette in breathable Italian linen.
                  Pleated front with side pockets and zip fly.
                </p>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<h3 className="text-xl font-light font-serif">Wide Leg Trouser</h3>
<span className="text-sm text-zinc-500">06</span>
</div>
<p className="text-sm text-zinc-500">Italian Linen</p>
<p className="text-lg font-light">€890</p>
</div>
</div>
</div>
<div className="text-center mt-16 reveal">
<button className="border border-white/20 px-12 py-4 text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300">
            VIEW FULL COLLECTION
          </button>
</div>
</div>
</section>

<section className="lg:py-48 bg-zinc-900/50 pt-32 pr-6 pb-32 pl-6 relative" id="philosophy">
<div className="max-w-[1200px] mx-auto">
<div className="text-center mb-24 reveal">
<span className="text-xs tracking-[0.3em] text-zinc-500 mb-4 block">
            OUR ETHOS
          </span>
<h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight font-serif mb-8">
            Philosophy
          </h2>
<p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            NOIR is built on three pillars that guide every decision, every
            stitch, every creation that leaves our atelier.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="reveal text-center">
<div className="w-20 h-20 mx-auto mb-8 border border-white/20 rounded-full flex items-center justify-center">
<svg className="lucide lucide-scissors w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="6" r="3"></circle>
<path d="M8.12 8.12 12 12"></path>
<path d="M20 4 8.12 15.88"></path>
<circle cx="6" cy="18" r="3"></circle>
<path d="M14.8 14.8 20 20"></path>
</svg>
</div>
<h3 className="text-2xl font-light mb-4 font-serif">Craftsmanship</h3>
<p className="text-zinc-400 leading-relaxed">
              Each piece is meticulously handcrafted by master artisans using
              time-honored techniques refined over decades.
            </p>
</div>
<div className="reveal text-center">
<div className="w-20 h-20 mx-auto mb-8 border border-white/20 rounded-full flex items-center justify-center">
<svg className="lucide lucide-leaf w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
<path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
</svg>
</div>
<h3 className="text-2xl font-light mb-4 font-serif">Sustainability</h3>
<p className="text-zinc-400 leading-relaxed">
              We source only the finest sustainable materials and maintain
              ethical practices throughout our entire supply chain.
            </p>
</div>
<div className="reveal text-center">
<div className="w-20 h-20 mx-auto mb-8 border border-white/20 rounded-full flex items-center justify-center">
<svg className="lucide lucide-star w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</div>
<h3 className="text-2xl font-light mb-4 font-serif">Timelessness</h3>
<p className="text-zinc-400 leading-relaxed">
              Our designs transcend seasonal trends, focusing on enduring
              silhouettes that remain relevant for decades.
            </p>
</div>
</div>
</div>
</section>

<section className="relative h-screen reveal-scale">
<div className="absolute inset-0">
<img alt="Atelier" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=2000&amp;q=90"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
</div>
<div className="relative z-10 h-full flex items-end px-6 lg:px-12 pb-24">
<div className="max-w-2xl">
<span className="text-xs tracking-[0.3em] text-zinc-400 mb-4 block">
            PARIS, FRANCE
          </span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 font-serif">
            Visit Our Atelier
          </h2>
<p className="text-lg text-zinc-300 mb-8">
            Experience the world of NOIR firsthand in our Parisian studio.
            Schedule a private appointment for bespoke consultations.
          </p>
<button className="text-sm tracking-wider border-b border-white pb-1 hover:border-white/40 transition-colors">
            BOOK AN APPOINTMENT
          </button>
</div>
</div>
</section>

<section className="pt-32 pr-6 pb-32 pl-6 relative" id="atelier">
<div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
<div className="reveal lg:sticky lg:top-32">
<span className="text-xs tracking-[0.3em] text-zinc-500 mb-6 block">
              SERVICES
            </span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-12 leading-tight font-serif">
              Bespoke Excellence
            </h2>
<div className="space-y-8">
<div className="border-t border-white/10 pt-8 transition-all duration-500" data-service="01" style={{transform: 'translateX(0px)'}}>
<div className="flex items-start justify-between mb-4">
<h3 className="text-2xl font-light font-serif">
                    Private Consultations
                  </h3>
<span className="text-sm text-zinc-500">01</span>
</div>
<p className="text-zinc-400 leading-relaxed">
                  One-on-one sessions with our designers to create pieces
                  tailored exclusively to your vision and measurements.
                </p>
<div className="mt-4 overflow-hidden transition-all duration-500" data-details="01" style={{maxHeight: '0px', opacity: '0'}}>
<div className="pt-4 space-y-3 text-sm text-zinc-500">
<p>• Initial consultation and style assessment</p>
<p>• Detailed measurements and fitting sessions</p>
<p>• Fabric selection from our curated collection</p>
<p>• Design customization and personalization</p>
<p>• Multiple fittings throughout the creation process</p>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 transition-all duration-500" data-service="02" style={{transform: 'translateX(0px)'}}>
<div className="flex items-start justify-between mb-4">
<h3 className="text-2xl font-light font-serif">
                    Master Tailoring
                  </h3>
<span className="text-sm text-zinc-500">02</span>
</div>
<p className="text-zinc-400 leading-relaxed">
                  Expert alterations and modifications ensuring every garment
                  fits perfectly and maintains design integrity.
                </p>
<div className="mt-4 overflow-hidden transition-all duration-500" data-details="02" style={{maxHeight: '0px', opacity: '0'}}>
<div className="pt-4 space-y-3 text-sm text-zinc-500">
<p>• Precision alterations and adjustments</p>
<p>• Structural modifications and resizing</p>
<p>• Restoration of vintage and heritage pieces</p>
<p>• Quality repairs maintaining original craftsmanship</p>
<p>• Complimentary pressing and finishing</p>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 transition-all duration-500" data-service="03" style={{transform: 'translateX(0px)'}}>
<div className="flex items-start justify-between mb-4">
<h3 className="text-2xl font-light font-serif">
                    Wardrobe Curation
                  </h3>
<span className="text-sm text-zinc-500">03</span>
</div>
<p className="text-zinc-400 leading-relaxed">
                  Comprehensive styling services to build a timeless wardrobe
                  that reflects your personal aesthetic.
                </p>
<div className="mt-4 overflow-hidden transition-all duration-500" data-details="03" style={{maxHeight: '0px', opacity: '0'}}>
<div className="pt-4 space-y-3 text-sm text-zinc-500">
<p>• Personal style analysis and consultation</p>
<p>• Wardrobe audit and optimization</p>
<p>• Seasonal capsule collection planning</p>
<p>• Styling for special occasions and events</p>
<p>• Ongoing wardrobe management services</p>
</div>
</div>
</div>
</div>
</div>
<div className="reveal-scale grid grid-cols-2 gap-6">
<div className="aspect-[3/4] overflow-hidden">
<img alt="Service 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c11f646f-0ab7-4100-86e5-2b80a7784a4f_800w.webp"/>
</div>
<div className="aspect-[3/4] overflow-hidden mt-12">
<img alt="Service 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e87b51ca-8d91-41ef-b65f-4af836f689cd_800w.webp"/>
</div>
</div>
</div>
</div>

</section>

<section className="relative py-32 px-6 bg-zinc-900/50">
<div className="max-w-[1000px] mx-auto reveal">
<div className="text-center mb-16">
<span className="text-xs tracking-[0.3em] text-zinc-500 mb-4 block">
            GET IN TOUCH
          </span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight font-serif">
            Let's Create Together
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div className="space-y-8">
<div className="">
<h3 className="text-sm tracking-wider text-zinc-500 mb-4">
                VISIT US
              </h3>
<p className="text-lg leading-relaxed">
                28 Rue de Rivoli 75004 Paris, France
              </p>
</div>
<div className="">
<h3 className="text-sm tracking-wider text-zinc-500 mb-4">HOURS</h3>
<p className="text-lg leading-relaxed">
                Monday – Friday: 10:00 – 19:00 Saturday: 11:00 – 17:00 Sunday:
                By Appointment
              </p>
</div>
<div className="">
<h3 className="text-sm tracking-wider text-zinc-500 mb-4">CONTACT</h3>
<p className="text-lg leading-relaxed">
                atelier@noir.com +33 1 42 86 82 00
              </p>
</div>
</div>
<form className="space-y-6" onsubmit="event.preventDefault(); alert('Thank you for your message! We will contact you within 24 hours.'); this.reset();">
<div className="">
<input className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors text-lg" placeholder="Full Name" type="text"/>
</div>
<div>
<input className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors text-lg" placeholder="Email Address" type="email"/>
</div>
<div className="">
<textarea className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors text-lg resize-none" placeholder="Message" rows="4"></textarea>
</div>
<button className="w-full bg-white text-black py-4 text-sm tracking-wider font-medium hover:bg-zinc-200 transition-colors" type="submit">
              SEND MESSAGE
            </button>
</form>
</div>
</div>
</section>

<footer className="border-t border-white/10 py-12 px-6 reveal">
<div className="max-w-[1600px] mx-auto">
<div className="flex flex-col md:flex-row items-center justify-between gap-8">
<div className="text-2xl tracking-[0.2em] font-light">NOIR</div>
<div className="flex items-center gap-8">
<a className="text-sm tracking-wider text-zinc-500 hover:text-white transition-colors" href="https://instagram.com">
              INSTAGRAM
            </a>
<a className="text-sm tracking-wider text-zinc-500 hover:text-white transition-colors" href="https://twitter.com">
              FACEBOOK
            </a>
<a className="text-sm tracking-wider text-zinc-500 hover:text-white transition-colors" href="https://facebook.com">
              TWITTER
            </a>
</div>
<div className="text-sm text-zinc-500">© 2024 NOIR Atelier</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center pointer-events-none opacity-0 transition-opacity duration-500" id="videoModal" onclick="if(event.target === this) { this.classList.add('pointer-events-none', 'opacity-0'); document.body.style.overflow = ''; }">
<button className="absolute top-6 right-6 text-white hover:opacity-60 transition-opacity z-10" onclick="document.getElementById('videoModal').classList.add('pointer-events-none', 'opacity-0'); document.body.style.overflow = '';">
<svg className="lucide lucide-x" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
<div className="w-full max-w-6xl mx-6">
<div className="relative w-full" style={{paddingBottom: '56.25%'}}>
<iframe allow="autoplay; encrypted-media" allowfullscreen="" className="absolute inset-0 w-full h-full" frameborder="0" src="https://www.youtube.com/embed/6rNP8B-hdJU?autoplay=1"></iframe>
</div>
</div>
</div>
<div className="gradient-blur-bottom">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
<style>
      .gradient-blur-bottom{position:fixed;z-index:5;inset:auto 0 0 0;height:12%;pointer-events:none}.gradient-blur-bottom>div,.gradient-blur-bottom::before,.gradient-blur-bottom::after{position:absolute;inset:0}.gradient-blur-bottom::before{content:"";z-index:1;backdrop-filter:blur(0.5px);mask:linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 12.5%,rgba(0,0,0,1) 25%,rgba(0,0,0,0) 37.5%)}.gradient-blur-bottom>div:nth-of-type(1){z-index:2;backdrop-filter:blur(1px);mask:linear-gradient(to bottom,rgba(0,0,0,0) 12.5%,rgba(0,0,0,1) 25%,rgba(0,0,0,1) 37.5%,rgba(0,0,0,0) 50%)}.gradient-blur-bottom>div:nth-of-type(2){z-index:3;backdrop-filter:blur(2px);mask:linear-gradient(to bottom,rgba(0,0,0,0) 25%,rgba(0,0,0,1) 37.5%,rgba(0,0,0,1) 50%,rgba(0,0,0,0) 62.5%)}.gradient-blur-bottom>div:nth-of-type(3){z-index:4;backdrop-filter:blur(4px);mask:linear-gradient(to bottom,rgba(0,0,0,0) 37.5%,rgba(0,0,0,1) 50%,rgba(0,0,0,1) 62.5%,rgba(0,0,0,0) 75%)}.gradient-blur-bottom>div:nth-of-type(4){z-index:5;backdrop-filter:blur(8px);mask:linear-gradient(to bottom,rgba(0,0,0,0) 50%,rgba(0,0,0,1) 62.5%,rgba(0,0,0,1) 75%,rgba(0,0,0,0) 87.5%)}.gradient-blur-bottom>div:nth-of-type(5){z-index:6;backdrop-filter:blur(16px);mask:linear-gradient(to bottom,rgba(0,0,0,0) 62.5%,rgba(0,0,0,1) 75%,rgba(0,0,0,1) 87.5%,rgba(0,0,0,0) 100%)}.gradient-blur-bottom>div:nth-of-type(6){z-index:7;backdrop-filter:blur(32px);mask:linear-gradient(to bottom,rgba(0,0,0,0) 75%,rgba(0,0,0,1) 87.5%,rgba(0,0,0,1) 100%)}.gradient-blur-bottom::after{content:"";z-index:8;backdrop-filter:blur(64px);mask:linear-gradient(to bottom,rgba(0,0,0,0) 87.5%,rgba(0,0,0,1) 100%)}
    </style>

    </>
  );
}
