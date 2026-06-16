import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.documentElement.classList.add('js');



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


      // Reveal body softly once loaded
        window.addEventListener('load', () => {
          document.body.classList.add('is-loaded');
        });

        document.addEventListener("DOMContentLoaded", () => {
          // --- Mobile Menu Logic (Existing) ---
          const mobileToggle = document.getElementById('mobile-menu-toggle');
          const mobileMenu = document.getElementById('mobile-menu');
          const tabletToggle = document.getElementById('tablet-menu-toggle');
          const tabletMenu = document.getElementById('desktop-tablet-menu');

          if (mobileToggle && mobileMenu) {
            mobileToggle.addEventListener('click', () => {
              const isOpen = !mobileMenu.classList.contains('hidden');
              mobileMenu.classList.toggle('hidden');
              mobileToggle.setAttribute('aria-expanded', String(!isOpen));
            });
          }

          if (tabletToggle && tabletMenu) {
            tabletToggle.addEventListener('click', () => {
              const isOpen = !tabletMenu.classList.contains('hidden');
              tabletMenu.classList.toggle('hidden');
              tabletToggle.setAttribute('aria-expanded', String(!isOpen));
            });
          }

          document.addEventListener('click', (e) => {
            if (tabletToggle && tabletMenu && !tabletToggle.contains(e.target) && !tabletMenu.contains(e.target)) {
              tabletMenu.classList.add('hidden');
              tabletToggle.setAttribute('aria-expanded', 'false');
            }
            if (mobileToggle && mobileMenu && !mobileToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
              mobileMenu.classList.add('hidden');
              mobileToggle.setAttribute('aria-expanded', 'false');
            }
          });

          // --- Premium GSAP Animation System ---
          gsap.registerPlugin(ScrollTrigger);
          const mm = gsap.matchMedia();

          mm.add("(prefers-reduced-motion: no-preference)", () => {
            const ease = "power3.out";
            const dur = 1.3;

            // 1. Navigation Anchor State
            const navInner = document.getElementById('main-nav-inner');
            gsap.from(navInner, { y: -24, opacity: 0, duration: 1.5, ease, delay: 0.1 });

            ScrollTrigger.create({
              start: "top -50",
              onUpdate: (self) => {
                if (self.direction === 1) {
                  navInner.classList.add('shadow-[0_15px_40px_rgba(25,20,16,0.08)]', 'py-1');
                  navInner.classList.replace('bg-[rgba(242,238,231,0.82)]', 'bg-[rgba(242,238,231,0.96)]');
                } else if (self.direction === -1 && self.scroll() < 50) {
                  navInner.classList.remove('shadow-[0_15px_40px_rgba(25,20,16,0.08)]', 'py-1');
                  navInner.classList.replace('bg-[rgba(242,238,231,0.96)]', 'bg-[rgba(242,238,231,0.82)]');
                }
              }
            });

            // 2. Hero Timeline (Orchestrated Load)
            const heroTl = gsap.timeline({ delay: 0.15, defaults: { ease, duration: dur } });
            heroTl.from(".hero-label", { opacity: 0, y: 15 }, 0)
                  .from(".hero-headline span.block", { opacity: 0, y: 25, stagger: 0.12 }, 0.1)
                  .from(".hero-copy", { opacity: 0, y: 20 }, 0.4)
                  .from(".hero-btn-group > *", { opacity: 0, y: 15, stagger: 0.1 }, 0.6)
                  .from(".hero-meta > div", { opacity: 0, y: 15, stagger: 0.1 }, 0.8)
                  .from(".hero-img-wrap", { scale: 1.05, opacity: 0, duration: 1.8, ease: "power2.out" }, 0.2)
                  .from(".hero-plaque", { opacity: 0, y: 20 }, 1.1)
                  .from(".hero-vol", { opacity: 0 }, 1.2);

            // 3. Subtle Image Parallax (Scrub)
            gsap.utils.toArray('[data-anim="parallax"]').forEach(img => {
              gsap.set(img, { scale: 1.1 }); // Pre-scale slightly to give room for parallax shift
              gsap.to(img, {
                yPercent: 10,
                ease: "none",
                scrollTrigger: {
                  trigger: img.parentElement,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true
                }
              });
            });

            // 4. Global Modular System
            const scrollConfig = (el) => ({ trigger: el, start: "top 88%" });

            // Reveal Up
            gsap.utils.toArray('[data-anim="up"]').forEach(el => {
              gsap.from(el, {
                scrollTrigger: scrollConfig(el),
                y: 30, opacity: 0, duration: dur, ease,
                delay: el.dataset.delay ? parseFloat(el.dataset.delay) : 0
              });
            });

            // Reveal Fade
            gsap.utils.toArray('[data-anim="fade"]').forEach(el => {
              gsap.from(el, {
                scrollTrigger: scrollConfig(el),
                opacity: 0, duration: dur, ease,
                delay: el.dataset.delay ? parseFloat(el.dataset.delay) : 0
              });
            });

            // Reveal Scale (For images/panels)
            gsap.utils.toArray('[data-anim="scale"]').forEach(el => {
              gsap.from(el, {
                scrollTrigger: scrollConfig(el),
                scale: 1.04, opacity: 0, duration: 1.6, ease: "power2.out",
                delay: el.dataset.delay ? parseFloat(el.dataset.delay) : 0
              });
            });

            // Elegant Stagger Groups
            gsap.utils.toArray('[data-anim="stagger"]').forEach(parent => {
              const children = parent.querySelectorAll('[data-anim-child]');
              if(children.length === 0) return;
              gsap.from(children, {
                scrollTrigger: scrollConfig(parent),
                y: 28, opacity: 0, duration: dur, ease, stagger: 0.12,
                delay: parent.dataset.delay ? parseFloat(parent.dataset.delay) : 0
              });
            });

          });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="JUFg0MwEcM3urKc9W7Vg"></div>

</div>
</div>

<header className="fixed top-4 inset-x-0 z-50 px-4 sm:px-5">
<div className="max-w-[1380px] mx-auto">
<div className="relative flex items-center justify-between h-[72px] px-1.5 sm:px-2.5 lg:px-3 rounded-full border border-[#d8d1c6]/75 bg-[rgba(242,238,231,0.82)] shadow-[0_10px_30px_rgba(25,20,16,0.06)]" id="main-nav-inner" style={{-FxFilter: 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>

<div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"></div>

<a className="flex items-center gap-2.5 shrink-0 group relative z-20 min-w-0" href="#">
<div className="h-11 w-11 rounded-full border border-[#cbc2b5] bg-white/70 flex items-center justify-center text-[11px] text-[#2F5D50] font-medium uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] font-geist tracking-tighter">
              RC
            </div>
<div className="flex flex-col leading-[0.9] pt-[1px] min-w-0">
<span className="text-[0.70rem] uppercase text-[#7c7368] whitespace-nowrap font-geist tracking-tighter">
                Custom Home
              </span>
<span className="text-[1.05rem] text-[#181512] font-serif italic whitespace-nowrap font-geist tracking-tighter">
                Builders
              </span>
</div>
</a>

<nav className="hidden xl:flex items-center gap-8 absolute left-[40%] -translate-x-1/2">
<a className="text-[11px] uppercase text-[#6c645a] hover:text-[#181512] transition-colors whitespace-nowrap font-geist tracking-tighter" href="#showcase">
              Projects
            </a>
<a className="text-[11px] uppercase text-[#6c645a] hover:text-[#181512] transition-colors whitespace-nowrap font-geist tracking-tighter" href="#philosophy">
              Philosophy
            </a>
<a className="text-[11px] uppercase text-[#6c645a] hover:text-[#181512] transition-colors whitespace-nowrap font-geist tracking-tighter" href="#methodology">
              Method
            </a>
<a className="text-[11px] uppercase text-[#6c645a] hover:text-[#181512] transition-colors whitespace-nowrap font-geist tracking-tighter" href="#contact">
              Contact
            </a>
</nav>

<div className="hidden md:flex xl:hidden items-center gap-8 absolute left-[40%] -translate-x-1/2 z-10">
<a className="inline-flex items-center h-10 text-[11px] uppercase text-[#6c645a] hover:text-[#181512] transition-colors whitespace-nowrap leading-none font-geist tracking-tighter" href="#showcase">
              Projects
            </a>
<div className="relative flex items-center h-10">
<button aria-controls="desktop-tablet-menu" aria-expanded="false" className="inline-flex items-center h-10 gap-2 text-[11px] uppercase tracking-[0.22em] text-[#6c645a] hover:text-[#181512] transition-colors font-sans whitespace-nowrap leading-none" id="tablet-menu-toggle">
<span className="leading-none font-geist tracking-tighter">Explore</span>
<svg className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>

<div className="hidden absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[240px] rounded-[24px] border border-[#d8d1c6]/80 bg-[rgba(242,238,231,0.96)] backdrop-blur-xl shadow-[0_20px_50px_rgba(25,20,16,0.10)] p-3" id="desktop-tablet-menu">
<div className="flex flex-col">
<a className="px-4 py-3 rounded-2xl text-[11px] uppercase text-[#181512] hover:bg-white/70 transition-colors font-geist tracking-tighter" href="#philosophy">
                    Philosophy
                  </a>
<a className="px-4 py-3 rounded-2xl text-[11px] uppercase text-[#181512] hover:bg-white/70 transition-colors font-geist tracking-tighter" href="#methodology">
                    Method
                  </a>
<a className="px-4 py-3 rounded-2xl text-[11px] uppercase text-[#181512] hover:bg-white/70 transition-colors font-geist tracking-tighter" href="#contact">
                    Contact
                  </a>
</div>
</div>
</div>
</div>

<div className="hidden md:flex items-center gap-3 shrink-0 relative z-20 pl-3">
<div className="hidden lg:flex items-center gap-2 text-[10px] uppercase text-[#7d756b] whitespace-nowrap font-geist tracking-tighter">
<span className="h-2 w-2 rounded-full bg-[#2F5D50]"></span>
              Custom Home Building
            </div>
<a className="inline-flex items-center justify-center h-[54px] px-6 rounded-full border border-[#1d1a17] bg-[#1d1a17] text-[#f5f1ea] hover:bg-[#2F5D50] hover:border-[#2F5D50] transition-all duration-300 text-[11px] uppercase whitespace-nowrap font-geist tracking-tighter" href="#contact">
              Start a Conversation
            </a>
</div>

<button aria-controls="mobile-menu" aria-expanded="false" aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-full border border-[#cbc2b5] bg-white/50 text-[#181512] hover:bg-white/80 transition-colors relative z-20" id="mobile-menu-toggle">
<svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7h16"></path>
<path d="M4 12h16"></path>
<path d="M4 17h16"></path>
</svg>
</button>
</div>

<div className="hidden md:hidden xl:hidden absolute left-1/2 -translate-x-1/2 mt-3 w-[260px] rounded-[28px] border border-[#d8d1c6]/80 bg-[rgba(242,238,231,0.94)] backdrop-blur-xl shadow-[0_20px_50px_rgba(25,20,16,0.10)] p-3" id="tablet-menu">
<div className="flex flex-col">
<a className="px-4 py-3 rounded-2xl text-[11px] uppercase text-[#181512] hover:bg-white/70 transition-colors font-geist tracking-tighter" href="#philosophy">
              Philosophy
            </a>
<a className="px-4 py-3 rounded-2xl text-[11px] uppercase text-[#181512] hover:bg-white/70 transition-colors font-geist tracking-tighter" href="#methodology">
              Method
            </a>
<a className="px-4 py-3 rounded-2xl text-[11px] uppercase text-[#181512] hover:bg-white/70 transition-colors font-geist tracking-tighter" href="#contact">
              Contact
            </a>
</div>
</div>

<div className="hidden md:hidden mt-3 rounded-[32px] border border-[#d8d1c6]/80 bg-[rgba(242,238,231,0.95)] backdrop-blur-xl shadow-[0_20px_50px_rgba(25,20,16,0.10)] p-4" id="mobile-menu">
<div className="flex flex-col gap-2">
<a className="px-4 py-3 rounded-2xl text-[11px] uppercase text-[#181512] hover:bg-white/70 transition-colors font-geist tracking-tighter" href="#showcase">
              Projects
            </a>
<a className="px-4 py-3 rounded-2xl text-[11px] uppercase text-[#181512] hover:bg-white/70 transition-colors font-geist tracking-tighter" href="#philosophy">
              Philosophy
            </a>
<a className="px-4 py-3 rounded-2xl text-[11px] uppercase text-[#181512] hover:bg-white/70 transition-colors font-geist tracking-tighter" href="#methodology">
              Method
            </a>
<a className="px-4 py-3 rounded-2xl text-[11px] uppercase text-[#181512] hover:bg-white/70 transition-colors font-geist tracking-tighter" href="#contact">
              Contact
            </a>
<div className="h-px bg-[#d8d1c6] my-2"></div>
<div className="px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#7d756b] font-sans">
<span className="inline-flex items-center gap-2 font-geist tracking-tighter">
<span className="h-2 w-2 rounded-full bg-[#2F5D50]"></span>
                Custom Home Building
              </span>
</div>
<a className="mt-1 inline-flex items-center justify-center h-12 px-5 rounded-full border border-[#1d1a17] bg-[#1d1a17] text-[#f5f1ea] hover:bg-[#2F5D50] hover:border-[#2F5D50] transition-all duration-300 text-[11px] uppercase font-geist tracking-tighter" href="#contact">
              Start a Conversation
            </a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden border-b border-[#d9d1c5] bg-[#f3efe8]" id="hero">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(47,93,80,0.09),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(24,21,18,0.05),transparent_28%)]"></div>
<div className="absolute inset-y-0 left-1/2 hidden lg:block w-px bg-[#d9d1c5]"></div>
</div>
<div className="relative max-w-[1380px] mx-auto grid lg:grid-cols-[1.05fr_0.95fr] min-h-[100svh]">

<div className="relative flex flex-col justify-between px-6 sm:px-8 lg:px-14 pt-36 sm:pt-40 lg:pt-44 pb-10 lg:pb-12 border-b lg:border-b-0 border-[#d9d1c5]">
<div className="mb-12 lg:mb-16 hero-label">
<div className="inline-flex items-center gap-3 text-[10px] sm:text-[11px] uppercase text-[#6f675f] font-geist tracking-tighter">
<span className="inline-block h-[6px] w-[6px] rounded-full bg-[#2F5D50]"></span>
              Southern California Home Builders
            </div>
</div>
<div className="max-w-[820px]">
<h1 className="font-serif text-[#181512] tracking-[-0.045em] leading-[0.88] text-[3.1rem] sm:text-[3.9rem] md:text-[4.5rem] lg:text-[5.1rem] xl:text-[5.7rem] hero-headline">
<span className="block font-jakarta font-medium">Homes built</span>
<span className="block text-[#2F5D50] font-jakarta font-medium">with precision,</span>
<span className="block font-jakarta font-medium">craftsmanship, and</span>
<span className="block font-jakarta font-medium">lasting quality.</span>
</h1>
<p className="mt-8 sm:mt-10 max-w-[34rem] text-[15px] sm:text-[17px] leading-8 text-[#5f5851] font-light hero-copy font-geist tracking-tighter">
              A premier custom home builder in Southern California creating
              residential spaces that feel elevated, highly functional, and
              deeply lived-in — where every detail, material, and finish is
              executed with precision from the ground up.
            </p>
<div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 hero-btn-group relative z-30">
<a className="inline-flex items-center justify-center gap-3 h-14 sm:h-12 px-8 rounded-full bg-[#1d1a17] text-[#f3efe8] border border-[#1d1a17] hover:bg-[#2F5D50] hover:border-[#2F5D50] duration-300 text-[12px] sm:text-[11px] uppercase shadow-md transition-colors font-geist tracking-tighter" href="#showcase" style={{opacity: '1'}}>
                View Custom Homes
                <iconify-icon className="text-lg" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 h-14 sm:h-12 px-6 rounded-full border border-[#d2c9bc] bg-white/80 text-[#181512] hover:bg-white transition-colors duration-300 text-[12px] sm:text-[11px] uppercase shadow-sm font-geist tracking-tighter" href="#contact">
                Start a Conversation
              </a>
</div>
</div>
<div className="mt-14 lg:mt-16 pt-6 border-t border-[#d9d1c5] grid grid-cols-1 sm:grid-cols-3 gap-6 hero-meta">
<div>
<p className="text-[10px] uppercase text-[#8a8178] mb-2 font-geist tracking-tighter">
                Location
              </p>
<p className="text-[13px] text-[#1f1b18] font-geist tracking-tighter">
                Newport Beach — Santa Monica — Pasadena
              </p>
</div>
<div>
<p className="text-[10px] uppercase text-[#8a8178] mb-2 font-geist tracking-tighter">
                Focus
              </p>
<p className="text-[13px] text-[#1f1b18] font-geist tracking-tighter">
                Custom Homes / Luxury Estates
              </p>
</div>
<div>
<p className="text-[10px] uppercase text-[#8a8178] mb-2 font-geist tracking-tighter">
                Established
              </p>
<p className="text-[13px] text-[#1f1b18] font-geist tracking-tighter">2014</p>
</div>
</div>
</div>

<div className="group relative min-h-[56vh] lg:min-h-full overflow-hidden hero-img-wrap">
<div className="absolute inset-0 overflow-hidden">
<img alt="Beautiful custom home exterior" className="w-full h-full object-cover grayscale-[18%] contrast-[1.03] brightness-[0.93] transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-[8%] group-hover:brightness-[0.97]" data-anim="parallax" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(18,15,13,0.22),rgba(18,15,13,0.03))] transition-opacity duration-500 group-hover:opacity-90"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.18),transparent_24%)] mix-blend-screen opacity-60 transition-opacity duration-500 group-hover:opacity-80"></div>
<div className="absolute inset-5 sm:inset-6 lg:inset-8 border border-[rgba(255,255,255,0.42)] transition-all duration-500 group-hover:border-[rgba(255,255,255,0.62)]"></div>
<div className="absolute left-5 right-5 bottom-5 sm:left-6 sm:right-auto sm:bottom-6 lg:left-8 lg:bottom-8 lg:max-w-[360px] hero-plaque">
<div className="border border-white/45 bg-[rgba(243,239,232,0.72)] backdrop-blur-md p-4 sm:p-5 shadow-[0_14px_40px_rgba(23,18,14,0.12)] transition-all duration-500 group-hover:bg-[rgba(243,239,232,0.84)] group-hover:border-white/65 group-hover:shadow-[0_20px_54px_rgba(23,18,14,0.18)]">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-[10px] uppercase text-[#7d7469] mb-2 transition-colors duration-300 group-hover:text-[#2F5D50] font-geist tracking-tighter">
                    Featured Build
                  </p>
<h3 className="text-[1.6rem] leading-[1] tracking-[-0.04em] text-[#181512] transition-colors duration-300 group-hover:text-[#1d2d28] font-jakarta font-medium">
                    Newport Beach Estate
                  </h3>
<p className="mt-3 text-[13px] leading-6 text-[#5f5851] font-light font-geist tracking-tighter">
                    A comprehensive residential build from the ground up,
                    designed around open living, premium finishes, and custom
                    architecture.
                  </p>
</div>
<div className="shrink-0 h-10 w-10 rounded-full border border-[#d1c8bb] bg-white/70 flex items-center justify-center text-[#2F5D50] transition-all duration-300 group-hover:bg-[#2F5D50] group-hover:border-[#2F5D50] group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
<iconify-icon className="text-lg" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="absolute top-5 right-5 sm:top-6 sm:right-6 lg:top-8 lg:right-8 hero-vol">
<div className="px-3 py-2 border border-white/35 bg-[rgba(24,21,18,0.18)] backdrop-blur-sm text-white transition-all duration-300 group-hover:bg-[rgba(24,21,18,0.28)] group-hover:border-white/50">
<p className="text-[10px] uppercase font-geist tracking-tighter">
                Vol. 01
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-b border-[#d9d1c5] bg-[#f5f1ea] overflow-hidden" id="philosophy">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(47,93,80,0.05),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(24,21,18,0.03),transparent_26%)]"></div>
</div>
<div className="relative max-w-[1380px] mx-auto grid lg:grid-cols-[0.34fr_1fr]">

<div className="border-b lg:border-b-0 lg:border-r border-[#d9d1c5] px-6 sm:px-8 lg:px-10 py-12 lg:py-16">
<div className="lg:sticky lg:top-32" data-anim="stagger">
<div className="inline-flex items-center gap-3 text-[10px] sm:text-[11px] uppercase text-[#6f675f] mb-8 font-geist tracking-tighter" data-anim-child="">
<span className="inline-block h-[6px] w-[6px] rounded-full bg-[#2F5D50]"></span>
              Our Approach
            </div>
<p className="max-w-[14rem] text-[13px] leading-7 text-[#7a7268] font-light font-geist tracking-tighter" data-anim-child="">
              A home building approach shaped by structural integrity, flawless
              execution, and materials designed to last.
            </p>
</div>
</div>

<div className="px-6 sm:px-8 lg:px-14 py-14 sm:py-16 lg:py-20">
<div className="max-w-[980px]">
<h2 className="text-[#181512] tracking-[-0.04em] leading-[1.04] text-[2.2rem] sm:text-[2.8rem] md:text-[3.4rem] lg:text-[4.2rem] font-jakarta font-medium" data-anim="up">
              We believe in building homes that
              <span className="text-[#2F5D50] font-jakarta font-medium">elevate</span>
              — crafting spaces from the ground up to reveal their true
              potential and functionality.
            </h2>
<div className="mt-10 lg:mt-12 grid md:grid-cols-[1fr_0.9fr] gap-10 lg:gap-14 items-start pt-8 border-t border-[#d9d1c5]">

<div className="space-y-6">
<div data-anim="stagger" data-delay="0.1">
<p className="mb-6 text-[15px] sm:text-[16px] leading-8 text-[#5f5851] font-light font-geist tracking-tighter" data-anim-child="">
                    Every custom build begins with a deep understanding of your
                    vision and the land. We build with care, ensuring that flow,
                    functionality, and aesthetic harmony create lasting value
                    rather than just a structure.
                  </p>
<p className="text-[15px] sm:text-[16px] leading-8 text-[#5f5851] font-light font-geist tracking-tighter" data-anim-child="">
                    The result is not just a constructed house, but a carefully
                    crafted home: spaces that feel deeply personal,
                    exceptionally built, and enduringly beautiful.
                  </p>
</div>
<div className="pt-4 grid sm:grid-cols-3 gap-5" data-anim="stagger" data-delay="0.2">
<div className="border-t border-[#d9d1c5] pt-4" data-anim-child="">
<p className="text-[10px] uppercase text-[#8a8178] mb-2 font-geist tracking-tighter">
                      01
                    </p>
<p className="text-[13px] leading-6 text-[#1f1b18] font-geist tracking-tighter">
                      Structural integrity
                    </p>
</div>
<div className="border-t border-[#d9d1c5] pt-4" data-anim-child="">
<p className="text-[10px] uppercase text-[#8a8178] mb-2 font-geist tracking-tighter">
                      02
                    </p>
<p className="text-[13px] leading-6 text-[#1f1b18] font-geist tracking-tighter">
                      Premium craftsmanship
                    </p>
</div>
<div className="border-t border-[#d9d1c5] pt-4" data-anim-child="">
<p className="text-[10px] uppercase text-[#8a8178] mb-2 font-geist tracking-tighter">
                      03
                    </p>
<p className="text-[13px] leading-6 text-[#1f1b18] font-geist tracking-tighter">
                      Seamless execution
                    </p>
</div>
</div>
</div>

<div className="group relative">
<div className="relative overflow-hidden bg-[#ebe5dc] min-h-[420px] lg:min-h-[500px]" data-anim="scale">
<img alt="Warm interior material palette" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-5 sm:inset-6 border border-[rgba(255,255,255,0.55)] transition-all duration-500 group-hover:border-[rgba(255,255,255,0.78)]"></div>
<div className="absolute left-5 right-5 bottom-5 sm:left-6 sm:right-6 sm:bottom-6" data-anim="up" data-delay="0.3">
<div className="border border-white/45 bg-[rgba(243,239,232,0.78)] backdrop-blur-md px-4 py-4 shadow-[0_14px_36px_rgba(23,18,14,0.10)] transition-all duration-500 group-hover:bg-[rgba(243,239,232,0.88)] group-hover:shadow-[0_18px_42px_rgba(23,18,14,0.14)]">
<p className="text-[10px] uppercase text-[#7d7469] mb-2 group-hover:text-[#2F5D50] transition-colors duration-300 font-geist tracking-tighter">
                        Material Study
                      </p>
<p className="text-[1.35rem] leading-[1.05] tracking-[-0.03em] text-[#181512] font-jakarta font-medium">
                        Custom millwork, natural stone, and seamless
                        integrations
                      </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#f3efe8] border-[#d9d1c5] border-b relative" id="showcase">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,93,80,0.05),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(24,21,18,0.03),transparent_24%)]"></div>
</div>
<div className="relative max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-14 py-16 sm:py-20 lg:py-24">
<div className="grid lg:grid-cols-[0.36fr_1fr] gap-10 lg:gap-16 items-end mb-12 lg:mb-14">
<div data-anim="stagger">
<div className="inline-flex items-center gap-3 text-[10px] sm:text-[11px] uppercase text-[#6f675f] mb-6 font-geist tracking-tighter" data-anim-child="">
<span className="inline-block h-[6px] w-[6px] rounded-full bg-[#2F5D50]"></span>
              Recent Builds
            </div>
<p className="max-w-[15rem] text-[13px] leading-7 text-[#7a7268] font-light font-geist tracking-tighter" data-anim-child="">
              A curated portfolio of custom homes shaped through flawless
              execution, premium materials, and architectural clarity.
            </p>
</div>
<div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6 xl:gap-10">
<h2 className="font-serif text-[#181512] tracking-[-0.04em] leading-[0.98] text-[2.5rem] sm:text-[3.2rem] md:text-[3.7rem] lg:text-[4rem] xl:text-[4.5rem] max-w-[14ch] xl:max-w-[15.5ch]" data-anim="stagger" data-delay="0.1">
<span className="block font-jakarta font-medium" data-anim-child="">Homes built</span>
<span className="block font-jakarta font-medium" data-anim-child="">
                to feel
                <span className="text-[#2F5D50] font-jakarta font-medium">luxurious</span>
                ,
              </span>
<span className="block font-jakarta font-medium" data-anim-child="">
<span className="text-[#2F5D50] font-jakarta font-medium">functional</span>
                , and
                <span className="text-[#2F5D50] font-jakarta font-medium">enduring</span>
                .
              </span>
</h2>
<a className="inline-flex items-center gap-2 text-[11px] uppercase text-[#6f675f] hover:text-[#181512] transition-colors whitespace-nowrap font-geist tracking-tighter" data-anim="fade" data-delay="0.3" href="#contact">
              Explore Recent Builds
              <iconify-icon className="text-base" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
<div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-10">

<a className="group relative block min-h-[380px] sm:min-h-[460px] lg:min-h-[560px] overflow-hidden bg-[#e9e2d8]" data-anim="scale" href="#contact">
<img alt="Mayfair Townhouse interior" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" data-anim="parallax" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(18,15,13,0.24),rgba(18,15,13,0.02)_42%,transparent)]"></div>
<div className="absolute inset-5 sm:inset-6 lg:inset-8 border border-[rgba(255,255,255,0.46)] transition-all duration-500 group-hover:border-[rgba(255,255,255,0.68)]"></div>
<div className="absolute top-5 right-5 sm:top-6 sm:right-6 lg:top-8 lg:right-8" data-anim="fade" data-delay="0.2">
<div className="px-3 py-2 border border-white/35 bg-[rgba(24,21,18,0.18)] backdrop-blur-sm text-white transition-all duration-300 group-hover:bg-[rgba(24,21,18,0.28)] group-hover:border-white/50">
<p className="text-[10px] uppercase font-geist tracking-tighter">
                  Build 01
                </p>
</div>
</div>
<div className="absolute left-5 right-5 bottom-5 sm:left-6 sm:right-6 sm:bottom-6 lg:left-8 lg:bottom-8 lg:max-w-[390px]" data-anim="up" data-delay="0.3">
<div className="border border-white/45 bg-[rgba(243,239,232,0.78)] backdrop-blur-md p-5 sm:p-6 shadow-[0_14px_40px_rgba(23,18,14,0.12)] transition-all duration-500 group-hover:bg-[rgba(243,239,232,0.88)] group-hover:border-white/65 group-hover:shadow-[0_20px_54px_rgba(23,18,14,0.18)]">
<div className="flex items-start justify-between gap-5">
<div>
<p className="text-[10px] uppercase text-[#7d7469] mb-2 transition-colors duration-300 group-hover:text-[#2F5D50] font-geist tracking-tighter">
                      Featured Project
                    </p>
<h3 className="text-[1.7rem] sm:text-[1.95rem] leading-[0.98] tracking-[-0.04em] text-[#181512] transition-colors duration-300 group-hover:text-[#1d2d28] font-jakarta font-medium">
                      Santa Monica Coastal
                    </h3>
<p className="mt-3 text-[14px] leading-7 text-[#5f5851] font-light max-w-[30ch] font-geist tracking-tighter">
                      A coastal residence built from the ground up, balancing
                      open-concept flow, seamless indoor-outdoor living, and a
                      bright material palette.
                    </p>
</div>
<div className="shrink-0 h-11 w-11 rounded-full border border-[#d1c8bb] bg-white/70 flex items-center justify-center text-[#2F5D50] transition-all duration-300 group-hover:bg-[#2F5D50] group-hover:border-[#2F5D50] group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
<iconify-icon className="text-lg" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</a>

<div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8 lg:gap-10" data-anim="stagger" data-delay="0.1">

<a className="group block" data-anim-child="" href="#contact">
<div className="relative overflow-hidden bg-[#e9e2d8] min-h-[300px] sm:min-h-[330px] lg:min-h-[270px]">
<img alt="Belgravia Apartment interior" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-4 sm:inset-5 border border-[rgba(255,255,255,0.44)] transition-all duration-500 group-hover:border-[rgba(255,255,255,0.64)]"></div>
</div>
<div className="pt-5 border-b border-[#d9d1c5] pb-6">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-[10px] uppercase text-[#8a8178] mb-2 font-geist tracking-tighter">
                      Build 02
                    </p>
<h3 className="text-[1.55rem] leading-[1] tracking-[-0.03em] text-[#181512] transition-colors duration-300 group-hover:text-[#2F5D50] font-jakarta font-medium">
                      Beverly Hills Modern
                    </h3>
<p className="mt-3 text-[14px] leading-7 text-[#5f5851] font-light max-w-[32ch] font-geist tracking-tighter">
                      Complete new construction featuring custom stonework,
                      smart home integration, and expansive living spaces
                      designed for entertaining.
                    </p>
</div>
<div className="mt-1 text-[#8a8178] transition-all duration-300 group-hover:text-[#2F5D50] group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
<iconify-icon className="text-lg" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</a>

<a className="group block" data-anim-child="" href="#contact">
<div className="relative overflow-hidden bg-[#e9e2d8] min-h-[300px] sm:min-h-[330px] lg:min-h-[270px]">
<img alt="Hampstead Sitting Room interior" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?w=1600&amp;q=80"/>
<div className="absolute inset-4 sm:inset-5 border border-[rgba(255,255,255,0.44)] transition-all duration-500 group-hover:border-[rgba(255,255,255,0.64)]"></div>
</div>
<div className="pt-5 border-b border-[#d9d1c5] pb-2">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-[10px] uppercase text-[#8a8178] mb-2 font-geist tracking-tighter">
                      Build 03
                    </p>
<h3 className="text-[1.55rem] leading-[1] tracking-[-0.03em] text-[#181512] transition-colors duration-300 group-hover:text-[#2F5D50] font-jakarta font-medium">
                      Pasadena Craftsman
                    </h3>
<p className="mt-3 text-[14px] leading-7 text-[#5f5851] font-light max-w-[32ch] font-geist tracking-tighter">
                      A ground-up modern craftsman, prioritizing both heritage
                      aesthetics and modern comfort with meticulous attention to
                      detail.
                    </p>
</div>
<div className="mt-1 text-[#8a8178] transition-all duration-300 group-hover:text-[#2F5D50] group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
<iconify-icon className="text-lg" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</a>
</div>
</div>
</div>
</section>

<section className="relative border-b border-[#d9d1c5] bg-[#f4f0e9] overflow-hidden" id="methodology">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(47,93,80,0.05),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(24,21,18,0.03),transparent_22%)]"></div>
</div>
<div className="relative max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-14 py-16 sm:py-20 lg:py-24">
<div className="grid lg:grid-cols-[0.34fr_1fr] gap-10 lg:gap-16 items-end mb-14 lg:mb-16">
<div data-anim="stagger">
<div className="inline-flex items-center gap-3 text-[10px] sm:text-[11px] uppercase text-[#6f675f] mb-6 font-geist tracking-tighter" data-anim-child="">
<span className="inline-block h-[6px] w-[6px] rounded-full bg-[#2F5D50]"></span>
              Our Process
            </div>
<p className="max-w-[15rem] text-[13px] leading-7 text-[#7a7268] font-light font-geist tracking-tighter" data-anim-child="">
              A refined framework for executing high-end custom home builds on
              time and on budget.
            </p>
</div>
<div>
<h2 className="font-serif text-[#181512] tracking-[-0.04em] leading-[0.94] text-[2.2rem] sm:text-[3rem] md:text-[3.7rem] lg:text-[4rem] xl:text-[4.5rem] max-w-[13ch] sm:max-w-[15ch] xl:max-w-[16ch]" data-anim="stagger" data-delay="0.1">
<span className="block font-jakarta font-medium" data-anim-child="">
                Three phases that guide every
                <span className="text-[#2F5D50] font-jakarta font-medium">custom</span>
</span>
<span className="block text-[#2F5D50] font-jakarta font-medium" data-anim-child="">
                build.
              </span>
</h2>
<p className="mt-6 max-w-[42rem] text-[15px] sm:text-[16px] leading-8 text-[#5f5851] font-light font-geist tracking-tighter" data-anim="up" data-delay="0.3">
              Our process is designed to bring clarity early — refining how a
              space flows, selecting premium materials, and managing
              construction with absolute precision.
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10" data-anim="stagger" data-delay="0.2">

<div className="group" data-anim-child="">
<div className="relative overflow-hidden bg-[#e9e2d8] min-h-[320px] sm:min-h-[360px] lg:min-h-[420px]">
<img alt="Spatial Strategy interior" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-4 sm:inset-5 border border-[rgba(255,255,255,0.48)] transition-all duration-500 group-hover:border-[rgba(255,255,255,0.68)]"></div>
<div className="absolute top-4 left-4 sm:top-5 sm:left-5">
<div className="h-11 w-11 rounded-full border border-white/45 bg-[rgba(243,239,232,0.72)] backdrop-blur-sm flex items-center justify-center text-[#2F5D50] shadow-[0_10px_24px_rgba(23,18,14,0.10)]">
<iconify-icon className="text-[20px]" icon="solar:ruler-cross-pen-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div className="pt-5 border-b border-[#d9d1c5] pb-6">
<p className="text-[10px] uppercase text-[#8a8178] mb-2 font-geist tracking-tighter">
                01 — Design &amp; Planning
              </p>
<h3 className="text-[1.55rem] leading-[1] tracking-[-0.03em] text-[#181512] mb-4 transition-colors duration-300 group-hover:text-[#2F5D50] font-jakarta font-medium">
                Laying the groundwork.
              </h3>
<p className="text-[14px] leading-7 text-[#5f5851] font-light font-geist tracking-tighter">
                We evaluate your lot, discuss your vision, and develop
                comprehensive architectural plans and permits to ensure a
                seamless build from the ground up.
              </p>
</div>
</div>

<div className="group" data-anim-child="">
<div className="relative overflow-hidden bg-[#e9e2d8] min-h-[320px] sm:min-h-[360px] lg:min-h-[420px]">
<img alt="Material Curation interior" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?w=800&amp;q=80"/>
<div className="absolute inset-4 sm:inset-5 border border-[rgba(255,255,255,0.48)] transition-all duration-500 group-hover:border-[rgba(255,255,255,0.68)]"></div>
<div className="absolute top-4 left-4 sm:top-5 sm:left-5">
<div className="h-11 w-11 rounded-full border border-white/45 bg-[rgba(243,239,232,0.72)] backdrop-blur-sm flex items-center justify-center text-[#2F5D50] shadow-[0_10px_24px_rgba(23,18,14,0.10)]">
<iconify-icon className="text-[20px]" icon="solar:palette-round-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div className="pt-5 border-b border-[#d9d1c5] pb-6">
<p className="text-[10px] uppercase text-[#8a8178] mb-2 font-geist tracking-tighter">
                02 — Selection &amp; Prep
              </p>
<h3 className="text-[1.55rem] leading-[1] tracking-[-0.03em] text-[#181512] mb-4 transition-colors duration-300 group-hover:text-[#2F5D50] font-jakarta font-medium">
                Sourcing the best.
              </h3>
<p className="text-[14px] leading-7 text-[#5f5851] font-light font-geist tracking-tighter">
                We help source premium materials—from imported stone to custom
                cabinetry—ensuring everything is ready before demolition begins.
              </p>
</div>
</div>

<div className="group" data-anim-child="">
<div className="relative overflow-hidden bg-[#e9e2d8] min-h-[320px] sm:min-h-[360px] lg:min-h-[420px]">
<img alt="Atmosphere Direction interior" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-4 sm:inset-5 border border-[rgba(255,255,255,0.48)] transition-all duration-500 group-hover:border-[rgba(255,255,255,0.68)]"></div>
<div className="absolute top-4 left-4 sm:top-5 sm:left-5">
<div className="h-11 w-11 rounded-full border border-white/45 bg-[rgba(243,239,232,0.72)] backdrop-blur-sm flex items-center justify-center text-[#2F5D50] shadow-[0_10px_24px_rgba(23,18,14,0.10)]">
<iconify-icon className="text-[20px]" icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div className="pt-5 border-b border-[#d9d1c5] pb-6">
<p className="text-[10px] uppercase text-[#8a8178] mb-2 font-geist tracking-tighter">
                03 — Construction &amp; Finish
              </p>
<h3 className="text-[1.55rem] leading-[1] tracking-[-0.03em] text-[#181512] mb-4 transition-colors duration-300 group-hover:text-[#2F5D50] font-jakarta font-medium">
                Executing with precision.
              </h3>
<p className="text-[14px] leading-7 text-[#5f5851] font-light font-geist tracking-tighter">
                Our dedicated crews handle foundation, framing, electrical,
                plumbing, and fine finishing, delivering a custom home that
                exceeds expectations.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden border-b border-[#d9d1c5] bg-[#f3efe8]" id="proof">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,93,80,0.05),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(24,21,18,0.03),transparent_22%)]"></div>
</div>
<div className="relative max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-14 py-16 sm:py-20 lg:py-24">
<div className="grid lg:grid-cols-[0.34fr_1fr] gap-10 lg:gap-16 items-end mb-14 lg:mb-16">
<div data-anim="stagger">
<div className="inline-flex items-center gap-3 text-[10px] sm:text-[11px] uppercase text-[#6f675f] mb-6 font-geist tracking-tighter" data-anim-child="">
<span className="inline-block h-[6px] w-[6px] rounded-full bg-[#2F5D50]"></span>
              Client Testimonial
            </div>
<p className="max-w-[15rem] text-[13px] leading-7 text-[#7a7268] font-light font-geist tracking-tighter" data-anim-child="">
              A quieter measure of success — how a home functions once it is
              lived in, not simply how it looks upon completion.
            </p>
</div>
<h2 className="font-serif text-[#181512] tracking-[-0.04em] leading-[0.98] text-[2.4rem] sm:text-[3rem] md:text-[3.7rem] lg:text-[4.3rem] max-w-[18ch] lg:max-w-[18ch]" data-anim="stagger" data-delay="0.1">
<span className="block font-jakarta font-medium" data-anim-child="">Built with precision,</span>
<span className="block font-jakarta font-medium" data-anim-child="">loved for how</span>
<span className="block text-[#2F5D50] font-jakarta font-medium" data-anim-child="">
              it lives.
            </span>
</h2>
</div>
<div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-10">

<div className="border border-[#d9d1c5] bg-[rgba(255,255,255,0.28)] backdrop-blur-sm p-6 sm:p-8 lg:p-10 flex flex-col" data-anim="up">
<div>
<div className="mb-8 flex items-center gap-3">
<span className="h-10 w-10 rounded-full border border-[#d5ccbf] bg-white/50 flex items-center justify-center text-[#2F5D50]">
<iconify-icon className="text-[18px]" icon="solar:chat-round-linear" strokeWidth="1.5"></iconify-icon>
</span>
<p className="text-[10px] uppercase text-[#7d7469] font-geist tracking-tighter">
                  Private Residential Commission
                </p>
</div>
<blockquote className="text-[#181512] tracking-[-0.03em] leading-[1.06] text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.2rem] max-w-[15ch] font-jakarta font-medium">
                “The build was executed flawlessly. The house feels completely
                bespoke, exceptionally constructed, and perfectly suited to our
                lifestyle.”
              </blockquote>
</div>
<div className="pt-8 mt-8 border-t border-[#d9d1c5] grid sm:grid-cols-[auto_1fr] gap-5 items-start">
<div className="h-14 w-14 rounded-full overflow-hidden bg-[#e7dfd4] border border-[#d5ccbf]">
<img alt="Client portrait" className="w-full h-full object-cover grayscale-[12%]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>
</div>
<div>
<p className="text-[13px] text-[#1f1b18] font-geist tracking-tighter">Elena Martin</p>
<p className="mt-1 text-[11px] uppercase text-[#8a8178] font-geist tracking-tighter">
                  Santa Monica Coastal — Southern California
                </p>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-6 pt-8 mt-8 border-t border-[#d9d1c5]">
<div>
<p className="text-[10px] uppercase text-[#8a8178] mb-2 font-geist tracking-tighter">
                  Quality Assurance
                </p>
<p className="text-[1.35rem] leading-[1.02] tracking-[-0.03em] text-[#181512] mb-3 font-jakarta font-medium">
                  Fully licensed, bonded, and insured for high-end residential
                  construction in California.
                </p>
<p className="text-[14px] leading-7 text-[#5f5851] font-light font-geist tracking-tighter">
                  Trusted by homeowners for complex structural updates and fine
                  finishes.
                </p>
</div>
<div>
<p className="text-[10px] uppercase text-[#8a8178] mb-2 font-geist tracking-tighter">
                  Transparency
                </p>
<p className="text-[1.35rem] leading-[1.02] tracking-[-0.03em] text-[#181512] mb-3 font-jakarta font-medium">
                  Clear communication and detailed timelines.
                </p>
<p className="text-[14px] leading-7 text-[#5f5851] font-light font-geist tracking-tighter">
                  Every phase is managed closely to ensure strict budget
                  adherence and exceptional quality.
                </p>
</div>
</div>
</div>

<div className="group relative overflow-hidden bg-[#e9e2d8] min-h-[320px] sm:min-h-[360px] lg:min-h-[420px]" data-anim="scale" data-delay="0.2">
<img alt="Interior detail" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?w=1600&amp;q=80"/>
<div className="absolute inset-4 sm:inset-5 border border-[rgba(255,255,255,0.48)] transition-all duration-500 group-hover:border-[rgba(255,255,255,0.68)]"></div>
<div className="absolute left-4 right-4 bottom-4 sm:left-5 sm:right-5 sm:bottom-5">
<div className="border border-white/45 bg-[rgba(243,239,232,0.78)] backdrop-blur-md px-4 py-4 shadow-[0_14px_36px_rgba(23,18,14,0.10)] transition-all duration-500 group-hover:bg-[rgba(243,239,232,0.88)]">
<p className="text-[10px] uppercase text-[#7d7469] mb-2 transition-colors duration-300 group-hover:text-[#2F5D50] font-geist tracking-tighter">
                  Enduring Value
                </p>
<p className="text-[1.3rem] leading-[1.05] tracking-[-0.03em] text-[#181512] font-jakarta font-medium">
                  Flawless finishes, structural soundness, and a home built to
                  last generations.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-[#f5f1ea]" id="contact">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(47,93,80,0.05),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(24,21,18,0.03),transparent_22%)]"></div>
</div>
<div className="relative max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-14 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-12">

<div className="border border-[#d9d1c5] bg-[rgba(255,255,255,0.28)] backdrop-blur-sm px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-16" data-anim="up">
<div className="grid lg:grid-cols-[0.34fr_1fr] gap-10 lg:gap-16 items-end">
<div data-anim="stagger" data-delay="0.1">
<div className="inline-flex items-center gap-3 text-[10px] sm:text-[11px] uppercase text-[#6f675f] mb-6 font-geist tracking-tighter" data-anim-child="">
<span className="inline-block h-[6px] w-[6px] rounded-full bg-[#2F5D50]"></span>
                Request an Estimate
              </div>
<p className="max-w-[15rem] text-[13px] leading-7 text-[#7a7268] font-light font-geist tracking-tighter" data-anim-child="">
                For custom homes, luxury estates, and spaces shaped with
                craftsmanship and structural clarity.
              </p>
</div>
<div>
<h2 className="lg:hidden font-serif text-[#181512] tracking-[-0.04em] leading-[0.95] text-[2rem] sm:text-[2.6rem] md:text-[3.7rem] max-w-[23ch]" data-anim="stagger" data-delay="0.2">
<span className="block font-jakarta font-medium" data-anim-child="">Let’s build a home</span>
<span className="block font-jakarta font-medium" data-anim-child="">
                  that
                  <span className="text-[#2F5D50] font-jakarta font-medium">elevates</span>
</span>
<span className="block font-jakarta font-medium" data-anim-child="">
                  your everyday life.
                </span>
</h2>
<h2 className="hidden lg:block font-serif text-[#181512] tracking-[-0.04em] leading-[0.98] text-[4.4rem] max-w-[23ch]" data-anim="stagger" data-delay="0.2">
<span className="block font-jakarta font-medium" data-anim-child="">Let’s build a home</span>
<span className="block font-jakarta font-medium" data-anim-child="">
                  that
                  <span className="text-[#2F5D50] font-jakarta font-medium">elevates</span>
</span>
<span className="block font-jakarta font-medium" data-anim-child="">
                  your everyday life.
                </span>
</h2>
<p className="mt-6 max-w-[40rem] text-[15px] sm:text-[16px] leading-8 text-[#5f5851] font-light font-geist tracking-tighter" data-anim="up" data-delay="0.4">
                Each build begins with an in-depth consultation—discussing your
                goals, timeline, and how we can bring your vision to life from
                the ground up.
              </p>
<div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 relative z-20" data-anim="none" data-delay="0.5">
<a className="inline-flex items-center justify-center gap-3 h-14 sm:h-12 px-8 rounded-full bg-[#1d1a17] text-[#f3efe8] border border-[#1d1a17] hover:bg-[#2F5D50] hover:border-[#2F5D50] transition-all duration-300 text-[12px] sm:text-[11px] uppercase shadow-md font-geist tracking-tighter" data-anim-child="" href="mailto:hello@socalremodeling.com">
                  Request an Estimate
                  <iconify-icon className="text-lg" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 h-14 sm:h-12 px-6 rounded-full border border-[#d2c9bc] bg-white text-[#181512] hover:bg-neutral-50 transition-all duration-300 text-[12px] sm:text-[11px] uppercase shadow-md font-geist tracking-tighter" data-anim-child="" href="#showcase">
                  View Recent Builds
                </a>
</div>
</div>
</div>
</div>

<div className="pt-8 sm:pt-10 lg:pt-12">
<div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] gap-8 lg:gap-10 border-t border-[#d9d1c5] pt-8" data-anim="stagger" data-delay="0.2">
<div data-anim-child="">
<a className="inline-flex items-center gap-3 mb-5 group" href="#">
<div className="h-10 w-10 rounded-full border border-[#cbc2b5] bg-white/60 flex items-center justify-center text-[11px] text-[#2F5D50] font-medium uppercase group-hover:bg-[#2F5D50] group-hover:text-white transition-colors duration-300 font-geist tracking-tighter">
                  RC
                </div>
<div className="flex flex-col leading-[0.9] pt-[1px]">
<span className="text-[0.70rem] uppercase text-[#7c7368] whitespace-nowrap font-geist tracking-tighter">
                    Custom Home
                  </span>
<span className="text-[1.05rem] text-[#181512] font-serif italic whitespace-nowrap font-geist tracking-tighter">
                    Builders
                  </span>
</div>
</a>
<p className="max-w-[18rem] text-[14px] leading-7 text-[#5f5851] font-light font-geist tracking-tighter">
                High-end custom home building in Southern California. Built with
                precision and care from the ground up.
              </p>
</div>
<div data-anim-child="">
<p className="text-[10px] uppercase text-[#8a8178] mb-4 font-geist tracking-tighter">
                Navigation
              </p>
<div className="flex flex-col gap-3">
<a className="text-[14px] text-[#1f1b18] hover:text-[#2F5D50] transition-colors font-geist tracking-tighter" href="#philosophy">
                  Philosophy
                </a>
<a className="text-[14px] text-[#1f1b18] hover:text-[#2F5D50] transition-colors font-geist tracking-tighter" href="#showcase">
                  Selected Works
                </a>
<a className="text-[14px] text-[#1f1b18] hover:text-[#2F5D50] transition-colors font-geist tracking-tighter" href="#methodology">
                  Methodology
                </a>
<a className="text-[14px] text-[#1f1b18] hover:text-[#2F5D50] transition-colors font-geist tracking-tighter" href="#proof">
                  Client Reflection
                </a>
</div>
</div>
<div data-anim-child="">
<p className="text-[10px] uppercase text-[#8a8178] mb-4 font-geist tracking-tighter">
                Contact
              </p>
<div className="flex flex-col gap-3 text-[14px] text-[#1f1b18] font-sans">
<a className="hover:text-[#2F5D50] transition-colors font-geist tracking-tighter" href="mailto:hello@socalremodeling.com">
                  hello@socalremodeling.com
                </a>
<span className="font-geist tracking-tighter">Los Angeles / Orange County</span>
<span className="font-geist tracking-tighter">Premium Home Remodeling</span>
</div>
</div>
<div data-anim-child="">
<p className="text-[10px] uppercase text-[#8a8178] mb-4 font-geist tracking-tighter">
                Elsewhere
              </p>
<div className="flex flex-col gap-3">
<a className="text-[14px] text-[#1f1b18] hover:text-[#2F5D50] transition-colors font-geist tracking-tighter" href="#">
                  Instagram
                </a>
<a className="text-[14px] text-[#1f1b18] hover:text-[#2F5D50] transition-colors font-geist tracking-tighter" href="#">
                  Pinterest
                </a>
<a className="text-[14px] text-[#1f1b18] hover:text-[#2F5D50] transition-colors font-geist tracking-tighter" href="#">
                  Request a Consultation
                </a>
</div>
</div>
</div>
<div className="mt-8 pt-5 border-t border-[#d9d1c5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" data-anim="none" data-delay="0.4">
<p className="text-[11px] uppercase text-[#6f675f] font-geist tracking-tighter">
              © 2026 Custom Home Builders
            </p>
<div className="flex items-center gap-4 sm:gap-6">
<a className="text-[11px] uppercase hover:text-[#2F5D50] transition-colors text-[#6f675f] font-geist tracking-tighter" href="#">
                Privacy
              </a>
<a className="text-[11px] uppercase hover:text-[#2F5D50] transition-colors text-[#6f675f] font-geist tracking-tighter" href="#">
                Terms
              </a>
</div>
</div>
</div>
</div>
</section>





    </>
  );
}
