import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Init icons
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons();

        // Update year
        const yearEl = document.getElementById('year');
        if (yearEl) yearEl.textContent = new Date().getFullYear();

        // Mobile nav toggle
        const menuBtn = document.getElementById('menuBtn');
        const mobileNav = document.getElementById('mobileNav');
        if (menuBtn && mobileNav) {
          menuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('hidden');
          });
        }

        // Testimonials scroller
        const scroller = document.getElementById('testScroller');
        const prev = document.getElementById('testPrev');
        const next = document.getElementById('testNext');
        const scrollByAmount = 380;
        if (prev && next && scroller) {
          prev.addEventListener('click', () => scroller.scrollBy({ left: -scrollByAmount, behavior: 'smooth' }));
          next.addEventListener('click', () => scroller.scrollBy({ left: scrollByAmount, behavior: 'smooth' }));
        }

        // Reveal on scroll
        const revealEls = document.querySelectorAll('.reveal');
        revealEls.forEach(el => {
          el.classList.add('opacity-0', 'translate-y-4', 'transition', 'duration-700', 'ease-out', 'will-change-transform');
        });
        const io = new IntersectionObserver((entries) => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              e.target.classList.remove('opacity-0', 'translate-y-4');
              io.unobserve(e.target);
            }
          });
        }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
        revealEls.forEach(el => io.observe(el));

        // Theme toggle with persistence and class swapping
        const themeToggle = document.getElementById('themeToggle');
        const knob = document.getElementById('toggleKnob');

        const swaps = [
          ['bg-neutral-950','bg-neutral-50'],
          ['bg-neutral-950/60','bg-white/60'],
          ['bg-neutral-900','bg-neutral-100'],
          ['bg-neutral-900/60','bg-white'],
          ['bg-neutral-800','bg-neutral-100'],
          ['text-neutral-200','text-neutral-900'],
          ['text-neutral-300','text-neutral-700'],
          ['text-neutral-400','text-neutral-600'],
          ['text-white','text-neutral-900'],
          ['bg-white/5','bg-black/5'],
          ['bg-white/10','bg-black/10'],
          ['border-white/10','border-black/10'],
          ['bg-indigo-500/10','bg-indigo-500/15'],
          ['bg-teal-500/10','bg-teal-500/15'],
          ['bg-fuchsia-500/10','bg-fuchsia-500/15']
        ];

        function swapTheme(toLight) {
          const all = document.querySelectorAll('[class]');
          swaps.forEach(([darkCls, lightCls]) => {
            all.forEach(node => {
              if (toLight && node.classList.contains(darkCls)) {
                node.classList.replace(darkCls, lightCls);
              } else if (!toLight && node.classList.contains(lightCls)) {
                node.classList.replace(lightCls, darkCls);
              }
            });
          });
          document.body.classList.toggle('bg-neutral-950', !toLight);
          document.body.classList.toggle('text-neutral-200', !toLight);
          document.body.classList.toggle('bg-neutral-50', toLight);
          document.body.classList.toggle('text-neutral-900', toLight);
          if (knob) knob.classList.toggle('translate-x-7', toLight);
          localStorage.setItem('ar-theme', toLight ? 'light' : 'dark');
        }

        // Apply saved theme
        const saved = localStorage.getItem('ar-theme');
        if (saved === 'light') swapTheme(true);

        // Toggle handler
        if (themeToggle) {
          themeToggle.addEventListener('click', () => {
            const nowLight = localStorage.getItem('ar-theme') !== 'light';
            swapTheme(nowLight);
          });
        }

        // Case study modals
        window.openCaseStudy = (id) => {
          const el = document.getElementById(id);
          if (!el);
          el.classList.remove('hidden');
          el.setAttribute('aria-hidden', 'false');
          document.body.classList.add('overflow-hidden');
        };
        window.closeCaseStudy = (id) => {
          const el = document.getElementById(id);
          if (!el) return;
          el.classList.add('hidden');
          el.setAttribute('aria-hidden', 'true');
          document.body.classList.remove('overflow-hidden');
        };

        // Close on ESC
        window.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            ['case1','case2','case3','case4','case5','case6'].forEach(id => {
              const el = document.getElementById(id);
              if (el && !el.classList.contains('hidden')) closeCaseStudy(id);
            });
          }
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative" id="app">

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl opacity-70 motion-safe:animate-pulse"></div>
<div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl opacity-70 motion-safe:animate-pulse"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[36rem] rounded-full bg-indigo-500/10 blur-3xl opacity-60 motion-safe:animate-pulse"></div>
</div>

<header className="sticky top-0 z-40 w-full backdrop-blur-lg bg-neutral-950/60 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="group inline-flex items-center gap-2" href="#home">
<div className="h-7 w-7 rounded-md bg-white text-neutral-900 flex items-center justify-center font-semibold tracking-tight group-hover:rotate-3 group-hover:scale-105 transition">
                AR
              </div>
<span className="sr-only">Home</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-300 hover:text-white transition" href="#home">Home</a>
<a className="text-sm font-medium text-neutral-300 hover:text-white transition" href="#about">About</a>
<a className="text-sm font-medium text-neutral-300 hover:text-white transition" href="#portfolio">Portfolio</a>
<a className="text-sm font-medium text-neutral-300 hover:text-white transition" href="#contact">Contact</a>
<a className="text-sm font-medium text-neutral-300 hover:text-white transition" href="#blog">Blog</a>
</nav>

<div className="flex items-center gap-2">

<button aria-label="Toggle theme" className="relative inline-flex h-9 w-16 items-center rounded-full bg-white/5 hover:bg-white/10 transition border border-white/10 group focus:outline-none focus:ring-2 focus:ring-teal-500/50" id="themeToggle">
<span className="absolute left-1 h-7 w-7 rounded-full bg-white text-neutral-900 grid place-items-center transition-transform" id="toggleKnob">
<i className="w-4 h-4" data-lucide="moon" strokeWidth="1.5"></i>
</span>
<div className="flex w-full justify-between px-2 text-neutral-400">
<i className="w-4 h-4" data-lucide="sun" strokeWidth="1.5"></i>
<i className="w-4 h-4" data-lucide="moon" strokeWidth="1.5"></i>
</div>
</button>

<button aria-label="Open menu" className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 hover:bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-500/50" id="menuBtn">
<i className="w-5 h-5 text-white" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden border-t border-white/10 bg-neutral-950/80 backdrop-blur-lg" id="mobileNav">
<div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-2">
<a className="py-2 text-sm font-medium text-neutral-300 hover:text-white" href="#home">Home</a>
<a className="py-2 text-sm font-medium text-neutral-300 hover:text-white" href="#about">About</a>
<a className="py-2 text-sm font-medium text-neutral-300 hover:text-white" href="#portfolio">Portfolio</a>
<a className="py-2 text-sm font-medium text-neutral-300 hover:text-white" href="#contact">Contact</a>
<a className="py-2 text-sm font-medium text-neutral-300 hover:text-white" href="#blog">Blog</a>
</div>
</div>
</header>

<section className="relative" id="home">
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-24 lg:pb-36">
<div className="grid lg:grid-cols-12 items-center gap-10">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300 mb-6">
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5 text-teal-400" data-lucide="sparkles" strokeWidth="1.5"></i>
                  Available for freelance
                </span>
</div>
<h1 className="font-[600] tracking-tight text-4xl sm:text-5xl lg:text-6xl text-white">
                Crafting bold brands and intuitive experiences
              </h1>
<p className="mt-5 text-neutral-300 text-base sm:text-lg leading-relaxed">
                I blend strategy, storytelling, and systems thinking to design products that feel effortless and look unforgettable.
              </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-teal-500 text-neutral-900 px-5 py-3 font-medium hover:bg-teal-400 transition focus:outline-none focus:ring-2 focus:ring-teal-500/50" href="#portfolio">
<i className="w-5 h-5" data-lucide="grid-3x3" strokeWidth="1.5"></i>
                  View Work
                </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-white/10 text-white px-5 py-3 font-medium hover:bg-white/15 transition border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-500/40" download="" href="/resume.pdf" id="resumeBtn">
<i className="w-5 h-5" data-lucide="download" strokeWidth="1.5"></i>
                  Resume
                </a>
</div>
<div className="mt-10 flex items-center gap-6 text-sm text-neutral-400">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-teal-400" data-lucide="award" strokeWidth="1.5"></i>
                  Awwwards, CSSDA, FWA
                </div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-teal-400" data-lucide="users" strokeWidth="1.5"></i>
                  50+ clients
                </div>
</div>
</div>

<div className="lg:col-span-5 relative">
<div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800">
<img alt="Creative desk setup" className="h-full w-full object-cover opacity-80 mix-blend-overlay" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{backgroundAttachment: 'fixed'}}/>
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-transparent to-fuchsia-500/10"></div>
</div>
</div>
<div className="absolute -bottom-6 -left-6 hidden sm:block">
<div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-300 shadow backdrop-blur">
<span className="font-medium text-white">Case Study:</span> Reimagined Fintech Onboarding
                </div>
</div>
</div>
</div>

<div className="mt-16 flex justify-center">
<a className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition" href="#about">
<i className="w-4 h-4" data-lucide="mouse-pointer-click" strokeWidth="1.5"></i>
              Scroll to explore
            </a>
</div>
</div>
<div className="border-t border-white/10"></div>
</section>

<section className="relative" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
<div className="grid lg:grid-cols-12 items-start gap-12">
<div className="lg:col-span-4">
<div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-white/5">
<img alt="Portrait" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 ring-1 ring-white/10"></div>
</div>
</div>
<div className="lg:col-span-8">
<h2 className="text-3xl sm:text-4xl font-[600] tracking-tight text-white">About</h2>
<p className="mt-4 text-neutral-300 leading-relaxed reveal">
                I’m Alex Rivera, a multidisciplinary designer focused on brand systems and product UI. Over the past 8 years, I’ve helped startups and global brands ship design that moves people and metrics.
              </p>
<div className="mt-8 grid sm:grid-cols-3 gap-4">
<div className="rounded-lg border border-white/10 bg-white/5 p-4 reveal">
<div className="flex items-center gap-2 text-neutral-300">
<i className="w-4 h-4 text-teal-400" data-lucide="pen-tool" strokeWidth="1.5"></i>
                    Brand &amp; Identity
                  </div>
<p className="mt-2 text-sm text-neutral-400">Naming, systems, guidelines, art direction.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4 reveal">
<div className="flex items-center gap-2 text-neutral-300">
<i className="w-4 h-4 text-teal-400" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
                    Product Design
                  </div>
<p className="mt-2 text-sm text-neutral-400">Web, mobile, design systems, prototyping.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4 reveal">
<div className="flex items-center gap-2 text-neutral-300">
<i className="w-4 h-4 text-teal-400" data-lucide="flashlight" strokeWidth="1.5"></i>
                    Strategy
                  </div>
<p className="mt-2 text-sm text-neutral-400">Workshops, research, analytics-backed UX.</p>
</div>
</div>

<div className="mt-8 flex flex-wrap gap-2 reveal">
<span className="px-3 py-1 text-sm rounded-full border border-teal-500/30 text-teal-300 bg-teal-500/10">Figma</span>
<span className="px-3 py-1 text-sm rounded-full border border-fuchsia-500/30 text-fuchsia-300 bg-fuchsia-500/10">After Effects</span>
<span className="px-3 py-1 text-sm rounded-full border border-indigo-500/30 text-indigo-300 bg-indigo-500/10">Webflow</span>
<span className="px-3 py-1 text-sm rounded-full border border-emerald-500/30 text-emerald-300 bg-emerald-500/10">Design Systems</span>
<span className="px-3 py-1 text-sm rounded-full border border-cyan-500/30 text-cyan-300 bg-cyan-500/10">Prototyping</span>
</div>
</div>
</div>
</div>
<div className="border-t border-white/10"></div>
</section>

<section className="relative" id="portfolio">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
<div className="flex items-end justify-between">
<div>
<h2 className="text-3xl sm:text-4xl font-[600] tracking-tight text-white">Selected Work</h2>
<p className="mt-2 text-neutral-400">A mix of product, brand, and motion explorations.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition" href="#">
<i className="w-4 h-4" data-lucide="filter" strokeWidth="1.5"></i>
              Filters
            </a>
</div>

<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition reveal">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Fintech UI" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent"></div>
</div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
<div className="absolute inset-0 bg-teal-500/5"></div>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<span>Product Design</span>
<span className="h-1 w-1 rounded-full bg-neutral-600"></span>
<span>Fintech</span>
</div>
<h3 className="mt-2 text-xl font-[600] tracking-tight text-white">Vault — Onboarding Revamp</h3>
<p className="mt-1 text-sm text-neutral-400">Reducing time-to-value by 43% with humanized flows.</p>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 text-sm text-teal-300 hover:text-teal-200 transition" onclick="openCaseStudy('case1')">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
                    Open Case Study
                  </button>
<div className="flex items-center gap-2 text-neutral-400">
<i className="w-4 h-4" data-lucide="heart" strokeWidth="1.5"></i>
                    1.2k
                  </div>
</div>
</div>
</article>

<article className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition reveal">
<div className="relative aspect-[3/4] overflow-hidden">
<img alt="Brand Identity" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]" src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent"></div>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<span>Brand</span>
<span className="h-1 w-1 rounded-full bg-neutral-600"></span>
<span>E-commerce</span>
</div>
<h3 className="mt-2 text-xl font-[600] tracking-tight text-white">Nova — Identity &amp; System</h3>
<p className="mt-1 text-sm text-neutral-400">A modular identity built for scale and motion.</p>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 text-sm text-teal-300 hover:text-teal-200 transition" onclick="openCaseStudy('case2')">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
                    Open Case Study
                  </button>
<div className="flex items-center gap-2 text-neutral-400">
<i className="w-4 h-4" data-lucide="heart" strokeWidth="1.5"></i>
                    980
                  </div>
</div>
</div>
</article>

<article className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition reveal">
<div className="relative aspect-[16/9] overflow-hidden">
<img alt="Motion Reel" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent"></div>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<span>Motion</span>
<span className="h-1 w-1 rounded-full bg-neutral-600"></span>
<span>Showreel</span>
</div>
<h3 className="mt-2 text-xl font-[600] tracking-tight text-white">Kinetic — 2025 Motion Reel</h3>
<p className="mt-1 text-sm text-neutral-400">A 60s cut exploring type, form, and light.</p>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 text-sm text-teal-300 hover:text-teal-200 transition" onclick="openCaseStudy('case3')">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
                    Open Case Study
                  </button>
<div className="flex items-center gap-2 text-neutral-400">
<i className="w-4 h-4" data-lucide="heart" strokeWidth="1.5"></i>
                    1.6k
                  </div>
</div>
</div>
</article>

<article className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition reveal">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="SaaS Dashboard" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent"></div>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<span>Product</span>
<span className="h-1 w-1 rounded-full bg-neutral-600"></span>
<span>SaaS</span>
</div>
<h3 className="mt-2 text-xl font-[600] tracking-tight text-white">Pulse — Analytics Platform</h3>
<p className="mt-1 text-sm text-neutral-400">Designing clarity for complex data models.</p>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 text-sm text-teal-300 hover:text-teal-200 transition" onclick="openCaseStudy('case4')">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
                    Open Case Study
                  </button>
<div className="flex items-center gap-2 text-neutral-400">
<i className="w-4 h-4" data-lucide="heart" strokeWidth="1.5"></i>
                    1.1k
                  </div>
</div>
</div>
</article>

<article className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition reveal">
<div className="relative aspect-[1/1] overflow-hidden">
<img alt="Packaging" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]" src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent"></div>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<span>Brand</span>
<span className="h-1 w-1 rounded-full bg-neutral-600"></span>
<span>Packaging</span>
</div>
<h3 className="mt-2 text-xl font-[600] tracking-tight text-white">Moss — Sustainable Packaging</h3>
<p className="mt-1 text-sm text-neutral-400">Low-ink, biodegradable materials, high impact.</p>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 text-sm text-teal-300 hover:text-teal-200 transition" onclick="openCaseStudy('case5')">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
                    Open Case Study
                  </button>
<div className="flex items-center gap-2 text-neutral-400">
<i className="w-4 h-4" data-lucide="heart" strokeWidth="1.5"></i>
                    720
                  </div>
</div>
</div>
</article>

<article className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition reveal">
<div className="relative aspect-[5/4] overflow-hidden">
<img alt="Dev Tools" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent"></div>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<span>Website</span>
<span className="h-1 w-1 rounded-full bg-neutral-600"></span>
<span>Dev Tools</span>
</div>
<h3 className="mt-2 text-xl font-[600] tracking-tight text-white">Atlas — Marketing Site</h3>
<p className="mt-1 text-sm text-neutral-400">Performance-first site with editorial motion.</p>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 text-sm text-teal-300 hover:text-teal-200 transition" onclick="openCaseStudy('case6')">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
                    Open Case Study
                  </button>
<div className="flex items-center gap-2 text-neutral-400">
<i className="w-4 h-4" data-lucide="heart" strokeWidth="1.5"></i>
                    840
                  </div>
</div>
</div>
</article>
</div>
</div>
<div className="border-t border-white/10"></div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
<div className="flex items-end justify-between">
<div>
<h2 className="text-3xl sm:text-4xl font-[600] tracking-tight text-white">Kind Words</h2>
<p className="mt-2 text-neutral-400">Thoughtful partnerships that ship.</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<button aria-label="Previous" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-white" id="testPrev">
<i className="w-5 h-5" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<button aria-label="Next" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-white" id="testNext">
<i className="w-5 h-5" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="mt-8 flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-px-4 pb-2" id="testScroller">

<figure className="min-w-[320px] max-w-[420px] snap-start rounded-xl border border-white/10 bg-white/5 p-6 reveal">
<div className="flex items-center gap-3">
<img alt="Client" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<figcaption>
<div className="text-white font-medium">Jamie Chen</div>
<div className="text-sm text-neutral-400">VP Product, Vortex</div>
</figcaption>
</div>
<blockquote className="mt-4 text-neutral-300 leading-relaxed">
                “Alex is a systems thinker with an artist’s eye. Our onboarding metrics jumped and our brand finally feels cohesive.”
              </blockquote>
<div className="mt-4 flex items-center gap-2 text-neutral-400">
<i className="w-4 h-4 text-teal-400" data-lucide="badge-check" strokeWidth="1.5"></i>
<span className="text-sm">Verified Partner</span>
</div>
</figure>
<figure className="min-w-[320px] max-w-[420px] snap-start rounded-xl border border-white/10 bg-white/5 p-6 reveal">
<div className="flex items-center gap-3">
<img alt="Client" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<figcaption>
<div className="text-white font-medium">Priya Patel</div>
<div className="text-sm text-neutral-400">Founder, Nova</div>
</figcaption>
</div>
<blockquote className="mt-4 text-neutral-300 leading-relaxed">
                “We scaled from seed to series A with a brand system that grew with us. Highly recommend.”
              </blockquote>
<div className="mt-4 flex items-center gap-2 text-neutral-400">
<i className="w-4 h-4 text-teal-400" data-lucide="badge-check" strokeWidth="1.5"></i>
<span className="text-sm">Verified Partner</span>
</div>
</figure>
<figure className="min-w-[320px] max-w-[420px] snap-start rounded-xl border border-white/10 bg-white/5 p-6 reveal">
<div className="flex items-center gap-3">
<img alt="Client" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<figcaption>
<div className="text-white font-medium">Liam O’Connor</div>
<div className="text-sm text-neutral-400">Creative Dir., Halo</div>
</figcaption>
</div>
<blockquote className="mt-4 text-neutral-300 leading-relaxed">
                “Fast, thoughtful, and pixel-perfect. Alex elevated our launch campaign across web and motion.”
              </blockquote>
<div className="mt-4 flex items-center gap-2 text-neutral-400">
<i className="w-4 h-4 text-teal-400" data-lucide="badge-check" strokeWidth="1.5"></i>
<span className="text-sm">Verified Partner</span>
</div>
</figure>
</div>
</div>
<div className="border-t border-white/10"></div>
</section>

<section className="relative" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
<div className="grid lg:grid-cols-12 gap-10">
<div className="lg:col-span-5">
<h2 className="text-3xl sm:text-4xl font-[600] tracking-tight text-white">Let’s build something memorable</h2>
<p className="mt-3 text-neutral-400">
                Tell me about your project, timeline, and goals. I’ll get back within 48 hours.
              </p>
<div className="mt-6 space-y-3">
<a className="group inline-flex items-center gap-2 text-neutral-300 hover:text-white transition" href="mailto:hello@alexrivera.studio">
<i className="w-5 h-5 text-teal-400" data-lucide="mail" strokeWidth="1.5"></i>
                  hello@alexrivera.studio
                </a>
<div className="flex items-center gap-3 mt-4">
<a aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 hover:bg-white/10 border border-white/10" href="#">
<i className="w-4.5 h-4.5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a aria-label="Dribbble" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 hover:bg-white/10 border border-white/10" href="#">
<i className="w-4.5 h-4.5" data-lucide="dribbble" strokeWidth="1.5"></i>
</a>
<a aria-label="Behance" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 hover:bg-white/10 border border-white/10" href="#">
<i className="w-4.5 h-4.5" data-lucide="behance" strokeWidth="1.5"></i>
</a>
<a aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 hover:bg-white/10 border border-white/10" href="#">
<i className="w-4.5 h-4.5" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="mt-8">
<a className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/15 border border-white/10 px-4 py-2 text-sm text-white transition focus:outline-none focus:ring-2 focus:ring-teal-500/40" download="" href="/resume.pdf">
<i className="w-4.5 h-4.5" data-lucide="file-down" strokeWidth="1.5"></i>
                  Download Resume
                </a>
</div>
</div>
<div className="lg:col-span-7">
<form className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur reveal" onsubmit="event.preventDefault();">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm text-neutral-300">Name</label>
<input className="mt-2 w-full rounded-md bg-neutral-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-teal-500/40" placeholder="Your name" type="text"/>
</div>
<div>
<label className="block text-sm text-neutral-300">Email</label>
<input className="mt-2 w-full rounded-md bg-neutral-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-teal-500/40" placeholder="you@domain.com" type="email"/>
</div>
</div>
<div className="mt-4">
<label className="block text-sm text-neutral-300">Subject</label>
<input className="mt-2 w-full rounded-md bg-neutral-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-teal-500/40" placeholder="Project inquiry" type="text"/>
</div>
<div className="mt-4">
<label className="block text-sm text-neutral-300">Message</label>
<textarea className="mt-2 w-full rounded-md bg-neutral-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-teal-500/40" placeholder="Tell me about your goals, timeline, and budget." rows="5"></textarea>
</div>
<div className="mt-6 flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-neutral-400">
<i className="w-4 h-4 text-teal-400" data-lucide="shield-check" strokeWidth="1.5"></i>
<span>No spam. Your info stays private.</span>
</div>
<button className="inline-flex items-center gap-2 rounded-md bg-teal-500 text-neutral-900 px-5 py-2.5 font-medium hover:bg-teal-400 transition focus:outline-none focus:ring-2 focus:ring-teal-500/50" type="submit">
<i className="w-4 h-4" data-lucide="send" strokeWidth="1.5"></i>
                    Send
                  </button>
</div>
</form>
</div>
</div>
</div>
<div className="border-t border-white/10"></div>
</section>

<section className="relative" id="blog">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
<div className="flex items-end justify-between">
<div>
<h2 className="text-3xl sm:text-4xl font-[600] tracking-tight text-white">Notes &amp; Articles</h2>
<p className="mt-2 text-neutral-400">Thoughts on design, systems, and craft.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition" href="#">
<i className="w-4 h-4" data-lucide="rss" strokeWidth="1.5"></i>
              Subscribe
            </a>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<article className="rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition reveal">
<div className="aspect-video bg-neutral-900">
<img alt="Article cover" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="p-5">
<div className="text-xs text-neutral-400">Design Systems</div>
<h3 className="mt-1 text-lg font-[600] tracking-tight text-white">Naming tokens that scale</h3>
<p className="mt-1 text-sm text-neutral-400">A pragmatic approach to semantic naming that won’t paint you into a corner.</p>
<a className="mt-3 inline-flex items-center gap-2 text-sm text-teal-300 hover:text-teal-200 transition" href="#">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
                  Read
                </a>
</div>
</article>
<article className="rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition reveal">
<div className="aspect-video bg-neutral-900">
<img alt="Article cover" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="text-xs text-neutral-400">Process</div>
<h3 className="mt-1 text-lg font-[600] tracking-tight text-white">The kickoff workshop I run</h3>
<p className="mt-1 text-sm text-neutral-400">How I align teams in 90 minutes and surface the right constraints early.</p>
<a className="mt-3 inline-flex items-center gap-2 text-sm text-teal-300 hover:text-teal-200 transition" href="#">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
                  Read
                </a>
</div>
</article>
<article className="rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition reveal">
<div className="aspect-video bg-neutral-900">
<img alt="Article cover" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="text-xs text-neutral-400">Motion</div>
<h3 className="mt-1 text-lg font-[600] tracking-tight text-white">Micro-interactions that matter</h3>
<p className="mt-1 text-sm text-neutral-400">Twelve patterns that communicate state without shouting.</p>
<a className="mt-3 inline-flex items-center gap-2 text-sm text-teal-300 hover:text-teal-200 transition" href="#">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
                  Read
                </a>
</div>
</article>
</div>
</div>
<div className="border-t border-white/10"></div>
</section>

<footer className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-md bg-white text-neutral-900 flex items-center justify-center font-semibold tracking-tight">AR</div>
<span className="text-sm text-neutral-400">© <span id="year"></span> Alex Rivera. All rights reserved.</span>
</div>
<div className="flex items-center gap-4 text-sm">
<a className="text-neutral-300 hover:text-white transition" href="#home">Home</a>
<a className="text-neutral-300 hover:text-white transition" href="#about">About</a>
<a className="text-neutral-300 hover:text-white transition" href="#portfolio">Work</a>
<a className="text-neutral-300 hover:text-white transition" href="#contact">Contact</a>
</div>
</div>
</div>
</footer>


<div className="fixed inset-0 z-50 hidden" id="case1">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onclick="closeCaseStudy('case1')"></div>
<div className="relative mx-auto mt-16 mb-8 max-w-5xl px-4">
<div className="rounded-xl border border-white/10 bg-neutral-950 shadow-xl overflow-hidden">
<div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
<h3 className="text-xl font-[600] tracking-tight text-white">Vault — Fintech Onboarding Revamp</h3>
<button aria-label="Close" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 hover:bg-white/10 border border-white/10" onclick="closeCaseStudy('case1')">
<i className="w-5 h-5" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<div className="px-5 py-5 space-y-5">
<div className="aspect-video rounded-lg overflow-hidden border border-white/10 bg-neutral-900">
<video className="w-full h-full object-cover" controls="" poster="https://images.unsplash.com/photo-1611162618071-b39a2ec2cfb3?q=80&amp;w=2070&amp;auto=format&amp;fit=crop">
<source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
</video>
</div>
<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2">
<h4 className="text-lg font-[600] tracking-tight text-white">Overview</h4>
<p className="mt-2 text-neutral-300 leading-relaxed">
                    We redesigned onboarding to reduce friction, clarify steps, and build trust using progressive disclosure and contextual education.
                  </p>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<img alt="Mock 1" className="rounded-lg border border-white/10" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<img alt="Mock 2" className="rounded-lg border border-white/10" src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<aside>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-sm text-neutral-400">Impact</div>
<ul className="mt-2 space-y-2 text-neutral-300 text-sm">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-teal-400" data-lucide="trending-up" strokeWidth="1.5"></i>
                        +43% completion
                      </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-teal-400" data-lucide="clock" strokeWidth="1.5"></i>
                        -28% time-to-KYC
                      </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-teal-400" data-lucide="smile" strokeWidth="1.5"></i>
                        CSAT 4.6 → 4.9
                      </li>
</ul>
<a className="mt-4 inline-flex items-center gap-2 rounded-md bg-teal-500 text-neutral-900 px-4 py-2 font-medium hover:bg-teal-400 transition" href="#">
<i className="w-4 h-4" data-lucide="external-link" strokeWidth="1.5"></i>
                      Live Preview
                    </a>
</div>
</aside>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="case2">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onclick="closeCaseStudy('case2')"></div>
<div className="relative mx-auto mt-16 mb-8 max-w-5xl px-4">
<div className="rounded-xl border border-white/10 bg-neutral-950 shadow-xl overflow-hidden">
<div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
<h3 className="text-xl font-[600] tracking-tight text-white">Nova — Identity &amp; System</h3>
<button aria-label="Close" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 hover:bg-white/10 border border-white/10" onclick="closeCaseStudy('case2')">
<i className="w-5 h-5" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<div className="px-5 py-5 space-y-5">
<div className="aspect-video rounded-lg overflow-hidden border border-white/10 bg-neutral-900">
<video className="w-full h-full object-cover" controls="" poster="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&amp;w=2070&amp;auto=format&amp;fit=crop">
<source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
</video>
</div>
<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2">
<h4 className="text-lg font-[600] tracking-tight text-white">Overview</h4>
<p className="mt-2 text-neutral-300 leading-relaxed">
                    A flexible brand language with motion-ready components and an accessible color system.
                  </p>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<img alt="Mock A" className="rounded-lg border border-white/10" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<img alt="Mock B" className="rounded-lg border border-white/10" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
</div>
<aside>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-sm text-neutral-400">Deliverables</div>
<ul className="mt-2 space-y-2 text-neutral-300 text-sm">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-teal-400" data-lucide="palette" strokeWidth="1.5"></i> Identity System</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-teal-400" data-lucide="book-open" strokeWidth="1.5"></i> Guidelines</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-teal-400" data-lucide="move" strokeWidth="1.5"></i> Motion Kit</li>
</ul>
<a className="mt-4 inline-flex items-center gap-2 rounded-md bg-teal-500 text-neutral-900 px-4 py-2 font-medium hover:bg-teal-400 transition" href="#">
<i className="w-4 h-4" data-lucide="external-link" strokeWidth="1.5"></i>
                      Live Preview
                    </a>
</div>
</aside>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="case3">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onclick="closeCaseStudy('case3')"></div>
<div className="relative mx-auto mt-16 mb-8 max-w-5xl px-4">
<div className="rounded-xl border border-white/10 bg-neutral-950 shadow-xl overflow-hidden">
<div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
<h3 className="text-xl font-[600] tracking-tighttext-white">Kinetic — 2025 Motion Reel</h3>
<button aria-label="Close" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 hover:bg-white/10 border border-white/10" onclick="closeCaseStudy('case3')">
<i className="w-5 h-5" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<div className="px-5 py-5 space-y-5">
<div className="aspect-video rounded-lg overflow-hidden border border-white/10 bg-neutral-900">
<video className="w-full h-full object-cover" controls="" poster="https://images.unsplash.com/photo-1541667201686-73a6b0a5c03c?q=80&amp;w=2069&amp;auto=format&amp;fit=crop">
<source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
</video>
</div>
<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2">
<h4 className="text-lg font-[600] tracking-tight text-white">Overview</h4>
<p className="mt-2 text-neutral-300 leading-relaxed">
                    A kinetic exploration of typography, light, and rhythm. Built to showcase a modular motion system with editorial pacing and tactile transitions.
                  </p>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<img alt="Storyboard frames" className="rounded-lg border border-white/10" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<img alt="Type &amp; motion study" className="rounded-lg border border-white/10" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<aside>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-sm text-neutral-400">Credits</div>
<ul className="mt-2 space-y-2 text-neutral-300 text-sm">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-teal-400" data-lucide="clapperboard" strokeWidth="1.5"></i> Direction: A. Rivera</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-teal-400" data-lucide="type" strokeWidth="1.5"></i> Type: Space Grotesk</li>
<li className="flex items-center gap-2">&lt; data-lucide="music-2" className="w-4 h-4 text-teal-400" strokeWidth="1.5"&gt; Sound: Luma Snd</li>
</ul>
<a className="mt-4 inline-flex items-center gap-2 rounded-md bg-teal-500 text-neutral-900 px-4 py-2 font-medium hover:bg-teal-400 transition" href="#">
<i className="w-4 h-4" data-lucide="external-link" strokeWidth="1.5"></i>
                      Watch Reel
                    </a>
</div>
</aside>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="case4">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onclick="closeCaseStudy('case4')"></div>
<div className="relative mx-auto mt-16 mb-8 max-w-5xl px-4">
<div className="-xl border border-white/10 bg-neutral-950 shadow-xl overflow-hidden">
<div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
<h3 className="text-xl font-[600] tracking-tight text-white">Pulse — Analytics Platform</h3>
<button aria-label="Close" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 hover:bg-white/10 border border-white/10" onclick="closeCaseStudy('case4')">
<i className="w-5 h-5" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<div className="px-5 py-5 space-y-5">
<div className="aspect-video rounded-lg overflow-hidden border border-white/10 bg-neutral-900">
<video className="w-full h-full object-cover" controls="" poster="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&amp;w=2070&amp;auto=format&amp;fit=crop">
<source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
</video>
</div>
<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2">
<h4 className="text-lg font-[600] tracking-tight text-white">Overview</h4>
<p className="mt-2 text-neutral-300 leading-relaxed">
                    Simplified complex event streams into a readable analytics layer. Designed dashboards to prioritize intent over noise with progressive drill-downs.
                  </p>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<img alt="Metrics overview" className="rounded-lg border border-white/10" src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<img alt="Segmentation" className="rounded-lg border border-white/10" src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<aside>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-sm text-neutral-400">Highlights</div>
<ul className="mt-2 space-y-2 text-neutral-300 text-sm">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-teal-400" data-lucide="gauge" strokeWidth="1.5"></i> 4x faster insights</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-teal-400" data-lucide="sparkle" strokeWidth="1.5"></i> Dark/light-ready UI kit</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-teal-400" data-lucide="pie-chart" strokeWidth="1.5"></i> Custom chart components</li>
</ul>
<a className="mt-4 inline-flex items-center gap-2 rounded-md bg-teal-500 text-neutral-900 px-4 py-2 font-medium hover:bg-teal-400 transition" href="#">
<i className="w-4 h-4" data-lucide="external-link" strokeWidth="1.5"></i>
                      Live Preview
                    </a>
</div>
</aside>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="case5">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onclick="closeCaseStudy('case5')"></div>
<div className="relative mx-auto mt-16 mb-8 max-w-5xl px-4">
<div className="rounded-xl border border-white/10 bg-neutral-950 shadow-xl overflow-hidden">
<div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
<h3 className="text-xl font-[600] tracking-tight text-white">Moss — Sustainable Packaging</h3>
<button aria-label="Close" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 hover:bg-white/10 border border-white/10" onclick="closeCaseStudy('case5')">
<i className="w-5 h-5" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<div className="px-5 py-5 space-y-5">
<div className="aspect-video rounded-lg overflow-hidden border border-white/10 bg-neutral-900">
<video className="w-full h-full object-cover" controls="" poster="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&amp;w=2069&amp;auto=format&amp;fit=crop">
<source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
</video>
</div>
<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2">
<h4 className="text-lg font-[600] tracking-tight text-white">Overview</h4>
<p className="mt-2 text-neutral-300 leading-relaxed">
                    Packaging system with biodegradable substrates and low-ink layouts. Balanced eco impact with shelf presence through tactile materials and bold type.
                  </p>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<img alt="Material studies" className="rounded-lg border border-white/10" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="Packaging mockups" className="rounded-lg border border-white/10" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
</div>
<aside>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-sm text-neutral-400">Sustainability</div>
<ul className="mt-2 space-y-2 text-neutral-300 text-sm">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-teal-400" data-lucide="leaf" strokeWidth="1.5"></i> Compostable stock</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-teal-400" data-lucide="droplets" strokeWidth="1.5"></i> Low-ink coverage</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-teal-400" data-lucide="recycle" strokeWidth="1.5"></i> FSC-certified vendors</li>
</ul>
<a className="mt-4 inline-flex items-center gap-2 rounded-md bg-teal-500 text-neutral-900 px-4 py-2 font-medium hover:bg-teal-400 transition" href="#">
<i className="w-4 h-4" data-lucide="external-link" strokeWidth="1.5"></i>
                      Brand Guide
                    </a>
</div>
</aside>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="case6">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onclick="closeCaseStudy('case6')"></div>
<div className="relative mx-auto mt-16 mb-8 max-w-5xl px-4">
<div className="rounded-xl border border-white/10 bg-neutral-950 shadow-xl overflow-hidden">
<div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
<h3 className="text-xl font-[600] tracking-tight text-white">Atlas — Marketing Site</h3>
<button aria-label="Close" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 hover:bg-white/10 border border-white/10" onclick="closeCaseStudy('case6')">
<i className="w-5 h-5" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<div className="px-5 py-5 space-y-5">
<div className="aspect-video rounded-lg overflow-hidden border border-white/10 bg-neutral-900">
<video className="w-full h-full object-cover" controls="" poster="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&amp;w=2071&amp;auto=format&amp;fit=crop">
<source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
</video>
</div>
<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2">
<h4 className="text-lg font-[600] tracking-tight text-white">Overview</h4>
<p className="mt-2 text-neutral-300 leading-relaxed">
                    A performance-first marketing site with editorial art direction, fluid typographic scale, and subtle interactions tuned for Core Web Vitals.
                  </p>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<img alt="Landing hero" className="rounded-lg border border-white/10" src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<img alt="Editorial layout" className="rounded-lg border border-white/10" src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<aside>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-sm text-neutral-400">Outcomes</div>
<ul className="mt-2 space-y-2 text-neutral-300 text-sm">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-teal-400" data-lucide="zap" strokeWidth="1.5"></i> 98 Lighthouse perf</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-teal-400" data-lucide="mouse-pointer-click" strokeWidth="1.5"></i> +36% CTR</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-teal-400" data-lucide="globe-2" strokeWidth="1.5"></i> i18n-ready</li>
</ul>
<a className="mt-4 inline-flex items-center gap-2 rounded-md bg-teal-500 text-neutral-900 px-4 py-2 font-medium hover:bg-teal-400 transition" href="#">
<i className="w-4 h-4" data-lucide="external-link" strokeWidth="1.5"></i>
                      Visit Site
                    </a>
</div>
</aside>
</div>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
