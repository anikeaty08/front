import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: '#FFD700',
'brand-dark': '#E5C100',
background: '#000000',
surface: '#0a0a0a',
'surface-hover': '#111111',
border: '#262626',
'border-light': '#404040',
text: {
primary: '#ffffff',
secondary: '#a3a3a3',
tertiary: '#525252',
}
},
fontFamily: {
sans: ["Inter", "sans-serif"],
},
letterSpacing: {
tighter: '-0.05em',
widest: '0.1em',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons();

      // Mobile Menu
      const menuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const menuIcon = document.getElementById('menu-icon');
      const closeIcon = document.getElementById('close-icon');

      if(menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
          const isOpen = mobileMenu.classList.contains('menu-open');
          if (isOpen) {
            mobileMenu.classList.remove('menu-open');
            menuIcon.classList.remove('icon-hidden');
            closeIcon.classList.add('icon-hidden');
          } else {
            mobileMenu.classList.add('menu-open');
            menuIcon.classList.add('icon-hidden');
            closeIcon.classList.remove('icon-hidden');
          }
        });
        document.querySelectorAll('#mobile-menu a').forEach(link => {
          link.addEventListener('click', () => {
            mobileMenu.classList.remove('menu-open');
            menuIcon.classList.remove('icon-hidden');
            closeIcon.classList.add('icon-hidden');
          });
        });
      }

      // Animation Logic
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      }, { root: null, rootMargin: '0px', threshold: 0.1 });

      const selector = 'h1, section h2, section p, article, .group, #pricing > div > div, #about .grid > div, .fade-up';
      document.querySelectorAll(selector).forEach((el) => {
        // Apply animations to main content, excluding nav/footer for auto-logic
        if(!el.closest('nav') && !el.closest('#mobile-menu') && !el.closest('footer')) {
           // Prevent nested animations for paragraphs inside cards
           if(el.tagName === 'P' && (el.closest('article') || el.closest('.group'))) return;

           el.classList.add('fade-up');
           observer.observe(el);
        }
      });

      // Footer specific animations
      const footer = document.querySelector('footer');
      if(footer) {
         footer.querySelectorAll('h2, p, .flex, form').forEach(el => {
           el.classList.add('fade-up');
           observer.observe(el);
         });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 border-b border-border backdrop-blur-md">
<div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-8 h-8 bg-brand flex items-center justify-center">
<span className="font-bold text-black text-lg">M</span>
</div>
<span className="font-semibold text-xl tracking-tight text-white group-hover:text-brand transition-colors duration-200">
            MBDC Studio
          </span>
</a>

<div className="hidden md:flex items-center gap-10">
<a className="text-xs font-medium uppercase tracking-widest text-text-secondary hover:text-white transition-colors duration-200" href="#work">
            Selected Work
          </a>
<a className="text-xs font-medium uppercase tracking-widest text-text-secondary hover:text-white transition-colors duration-200" href="#services">
            Services
          </a>
<a className="text-xs font-medium uppercase tracking-widest text-text-secondary hover:text-white transition-colors duration-200" href="#pricing">
            Pricing
          </a>
<a className="text-xs font-medium uppercase tracking-widest text-text-secondary hover:text-white transition-colors duration-200" href="#about">
            About
          </a>
<a className="text-xs font-medium uppercase tracking-widest text-text-secondary hover:text-white transition-colors duration-200" href="#blog">
            Blog
          </a>
<a className="px-6 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-brand transition-colors duration-200" href="#contact">
            Start a Project
          </a>
</div>

<button className="md:hidden p-2 text-white hover:text-brand transition-colors" id="mobile-menu-btn">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu" id="menu-icon"></i>
<i className="w-6 h-6 stroke-[1.5] icon-hidden" data-lucide="x" id="close-icon"></i>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-black border-b border-border flex-col p-6 space-y-6 md:hidden shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto z-40" id="mobile-menu">
<a className="text-sm font-medium uppercase tracking-widest text-text-secondary hover:text-white" href="#work">
          Selected Work
        </a>
<a className="text-sm font-medium uppercase tracking-widest text-text-secondary hover:text-white" href="#services">
          Services
        </a>
<a className="text-sm font-medium uppercase tracking-widest text-text-secondary hover:text-white" href="#pricing">
          Pricing
        </a>
<a className="text-sm font-medium uppercase tracking-widest text-text-secondary hover:text-white" href="#about">
          About
        </a>
<a className="text-sm font-medium uppercase tracking-widest text-text-secondary hover:text-white" href="#blog">
          Blog
        </a>
<a className="block w-full text-center py-4 bg-brand text-black text-xs font-bold uppercase tracking-widest" href="#contact">
          Start a Project
        </a>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden bg-background border-b border-border">

<div className="absolute inset-0 bg-grid z-0 opacity-40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0 pointer-events-none"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/10 blur-[100px] rounded-full pointer-events-none z-0 mix-blend-screen animate-pulse"></div>
<div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 bg-white/5 backdrop-blur-md mb-10 hover:border-brand/50 transition-colors cursor-default group">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-brand opacity-75"></span>
<span className="relative inline-flex rounded-none h-2 w-2 bg-brand"></span>
</span>
<span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white group-hover:text-brand transition-colors">
            Accepting New Projects
          </span>
</div>

<h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 mb-10 leading-[0.9] select-none">
          WE CRAFT
          <br/>
<span className="text-white/30">DIGITAL IMPACT.</span>
</h1>
<p className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed font-light delay-100 fade-up">
          Jakarta-based creative studio specializing in high-performance UI
          design, modern web development, and motion graphics.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center fade-up delay-200">
<a className="inline-flex items-center justify-center px-10 py-4 bg-white text-black text-xs uppercase tracking-widest font-bold hover:bg-brand transition-colors duration-200 min-w-[180px]" href="#contact">
            Start a Project
          </a>
<a className="inline-flex items-center justify-center px-10 py-4 bg-transparent border border-white/20 text-white text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-black hover:border-white transition-all duration-200 min-w-[180px]" href="#work">
            View Portfolio
          </a>
</div>

</div>
<div className="absolute bottom-10 left-0 right-0 hidden md:flex justify-between px-10 text-[10px] text-text-secondary uppercase tracking-widest pointer-events-none z-20">
<span>Based in Jakarta</span>
<span className="animate-bounce">Scroll Down</span>
<span>Est. 2011</span>
</div>
</section>

<section className="py-24 border-y border-border bg-background" id="services">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
<div className="md:col-span-5">
<h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-4 lowercase leading-none">
              our
              <br/>
              expertise
            </h2>
</div>
<div className="md:col-span-7 flex items-end">
<p className="text-lg text-text-secondary font-light max-w-2xl leading-relaxed">
              Comprehensive digital solutions tailored to your business goals.
              We focus on clarity, structure, and precision execution.
            </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-border">

<div className="group p-10 border-r border-b border-border bg-surface hover:bg-surface-hover transition-colors duration-200">
<div className="mb-8 text-white group-hover:text-brand transition-colors duration-200">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="palette"></i>
</div>
<h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wide">
              UI Design
            </h3>
<p className="text-text-secondary leading-relaxed text-sm">
              Design systems and interfaces focused on clarity, usability, and
              business outcomes. Suitable for marketing websites and internal
              tools.
            </p>
</div>

<div className="group p-10 border-r border-b border-border bg-surface hover:bg-surface-hover transition-colors duration-200">
<div className="mb-8 text-white group-hover:text-brand transition-colors duration-200">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="globe"></i>
</div>
<h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wide">
              Web Development
            </h3>
<p className="text-text-secondary leading-relaxed text-sm">
              Custom-built websites using WordPress or equivalent CMS, optimized
              for performance, responsiveness, and long-term maintainability.
            </p>
</div>

<div className="group p-10 border-r border-b border-border bg-surface hover:bg-surface-hover transition-colors duration-200">
<div className="mb-8 text-white group-hover:text-brand transition-colors duration-200">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="layout-dashboard"></i>
</div>
<h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wide">
              Web App Development
            </h3>
<p className="text-text-secondary leading-relaxed text-sm">
              Design and development of browser-based applications such as
              dashboards, workflows, and systems requiring custom logic.
            </p>
</div>

<div className="group p-10 border-r border-b border-border bg-surface hover:bg-surface-hover transition-colors duration-200">
<div className="mb-8 text-white group-hover:text-brand transition-colors duration-200">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="play-circle"></i>
</div>
<h3 className="text-lg font-bold mb-4 text-white uppercase tracking-wide">
              HTML5 Animation
            </h3>
<p className="text-text-secondary leading-relaxed text-sm">
              High-performance animated banners for Google Display Network.
              Built for lightweight performance and precise timing.
            </p>
</div>
</div>

<div className="mt-20">
<div className="mb-8">
<h4 className="text-xs font-bold uppercase tracking-widest text-text-tertiary mb-2">
              Add-on Services
            </h4>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 border border-border">
<div className="flex gap-4 p-6 bg-background border-r border-border hover:bg-surface transition-colors duration-200 items-start">
<i className="w-5 h-5 text-text-secondary mt-1" data-lucide="server"></i>
<div>
<h5 className="text-xs font-bold text-white uppercase tracking-wide mb-1">
                  Web Hosting
                </h5>
<p className="text-xs text-text-secondary leading-relaxed">
                  Managed hosting optimized for your build.
                </p>
</div>
</div>
<div className="flex gap-4 p-6 bg-background border-r border-border hover:bg-surface transition-colors duration-200 items-start">
<i className="w-5 h-5 text-text-secondary mt-1" data-lucide="mail"></i>
<div>
<h5 className="text-xs font-bold text-white uppercase tracking-wide mb-1">
                  Email Setup
                </h5>
<p className="text-xs text-text-secondary leading-relaxed">
                  Professional email configuration.
                </p>
</div>
</div>
<div className="flex gap-4 p-6 bg-background hover:bg-surface transition-colors duration-200 items-start">
<i className="w-5 h-5 text-text-secondary mt-1" data-lucide="camera"></i>
<div>
<h5 className="text-xs font-bold text-white uppercase tracking-wide mb-1">
                  Photography
                </h5>
<p className="text-xs text-text-secondary leading-relaxed">
                  Corporate headshots and team photos.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-background" id="work">
<div className="max-w-[1440px] mx-auto px-6">
<div className="mb-16 border-b border-border pb-8">
<h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-4 lowercase">
            Selected Work
          </h2>
<p className="text-lg text-text-secondary font-light">
            Recent projects across corporate websites, web apps, and digital
            platforms.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

<article className="flex flex-col h-full group">
<div className="aspect-[4/3] bg-surface border border-border mb-6 overflow-hidden relative">
<img alt="Nova Finance" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand transition-colors">
              Nova Finance
            </h3>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-[10px] uppercase tracking-widest text-text-tertiary border border-border px-2 py-1">
                UI Design
              </span>
<span className="text-[10px] uppercase tracking-widest text-text-tertiary border border-border px-2 py-1">
                Dashboard
              </span>
</div>
<p className="text-sm text-text-secondary leading-relaxed">
              Redesigned a complex financial dashboard to improve data
              visibility and user retention.
            </p>
</article>

<article className="flex flex-col h-full group">
<div className="aspect-[4/3] bg-surface border border-border mb-6 overflow-hidden relative">
<img alt="Urban Living" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" src="https://images.unsplash.com/photo-1605711285791-0219e80e43a3?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand transition-colors">
              Urban Living
            </h3>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-[10px] uppercase tracking-widest text-text-tertiary border border-border px-2 py-1">
                Corporate Site
              </span>
<span className="text-[10px] uppercase tracking-widest text-text-tertiary border border-border px-2 py-1">
                WordPress
              </span>
</div>
<p className="text-sm text-text-secondary leading-relaxed">
              Developed a high-performance corporate website showcasing luxury
              properties.
            </p>
</article>

<article className="flex flex-col h-full group">
<div className="aspect-[4/3] bg-surface border border-border mb-6 overflow-hidden relative">
<img alt="Streamline Ops" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand transition-colors">
              Streamline Ops
            </h3>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-[10px] uppercase tracking-widest text-text-tertiary border border-border px-2 py-1">
                Internal Tool
              </span>
</div>
<p className="text-sm text-text-secondary leading-relaxed">
              Engineered a custom workflow management system to automate
              logistics.
            </p>
</article>

<article className="flex flex-col h-full group">
<div className="aspect-[4/3] bg-surface border border-border mb-6 overflow-hidden relative">
<img alt="Wanderlust" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand transition-colors">
              Wanderlust
            </h3>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-[10px] uppercase tracking-widest text-text-tertiary border border-border px-2 py-1">
                Web App
              </span>
</div>
<p className="text-sm text-text-secondary leading-relaxed">
              Built a progressive web application for seamless itinerary
              planning.
            </p>
</article>

<article className="flex flex-col h-full group">
<div className="aspect-[4/3] bg-surface border border-border mb-6 overflow-hidden relative">
<img alt="TechCorp" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" src="https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand transition-colors">
              TechCorp Global
            </h3>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-[10px] uppercase tracking-widest text-text-tertiary border border-border px-2 py-1">
                CMS
              </span>
</div>
<p className="text-sm text-text-secondary leading-relaxed">
              Revitalized digital presence with a headless CMS architecture.
            </p>
</article>

<article className="flex flex-col h-full group">
<div className="aspect-[4/3] bg-surface border border-border mb-6 overflow-hidden relative">
<img alt="AdFlow" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand transition-colors">
              AdFlow Media
            </h3>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-[10px] uppercase tracking-widest text-text-tertiary border border-border px-2 py-1">
                Banners
              </span>
</div>
<p className="text-sm text-text-secondary leading-relaxed">
              Produced a suite of lightweight animated display ads.
            </p>
</article>
</div>
<div className="mt-20 border-t border-border pt-8 text-center">
<p className="text-text-tertiary text-[10px] uppercase tracking-widest">
            A curated selection. Not all projects are shown.
          </p>
</div>
</div>
</section>

<section className="py-24 bg-surface border-t border-border" id="pricing">
<div className="max-w-[1440px] mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-4 lowercase">
            packages
          </h2>
<p className="text-lg text-text-secondary font-light">
            Simple, transparent pricing built for quality.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 border border-border bg-border gap-px">

<div className="bg-background p-10 flex flex-col h-full hover:bg-surface transition-colors duration-200">
<div className="mb-8">
<h3 className="text-xs font-bold uppercase tracking-widest text-white mb-2">
                Tier 1
              </h3>
<p className="text-xs text-text-tertiary mb-6 min-h-[2.5em]">
                One‑Page Landing Website.
              </p>
<div className="flex items-baseline gap-1">
<span className="text-[10px] font-medium text-text-tertiary uppercase">
                  IDR
                </span>
<span className="text-4xl font-bold text-white tracking-tighter">
                  5 mil
                </span>
</div>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-xs text-text-secondary">
<i className="w-4 h-4 text-brand" data-lucide="check"></i>
                1 Page Layout
              </li>
<li className="flex items-center gap-3 text-xs text-text-secondary">
<i className="w-4 h-4 text-brand" data-lucide="check"></i>
                Basic UI Design
              </li>
<li className="flex items-center gap-3 text-xs text-text-secondary">
<i className="w-4 h-4 text-brand" data-lucide="check"></i>
                WordPress / CMS
              </li>
<li className="flex items-center gap-3 text-xs text-text-secondary">
<i className="w-4 h-4 text-brand" data-lucide="check"></i>
                Mobile Responsive
              </li>
</ul>
<a className="w-full inline-flex items-center justify-center px-4 py-4 border border-border text-white text-xs font-bold uppercase tracking-widest hover:border-white hover:bg-white hover:text-black transition-all duration-200" href="#contact">
              Book Tier 1
            </a>
</div>

<div className="bg-surface-hover p-10 flex flex-col h-full border-border relative">
<div className="absolute top-0 left-0 w-full h-1 bg-brand"></div>
<div className="mb-8">
<h3 className="text-xs font-bold uppercase tracking-widest text-brand mb-2">
                Tier 2
              </h3>
<p className="text-xs text-text-tertiary mb-6 min-h-[2.5em]">
                Corporate Website (5 Pages).
              </p>
<div className="flex items-baseline gap-1">
<span className="text-[10px] font-medium text-text-tertiary uppercase">
                  IDR
                </span>
<span className="text-4xl font-bold text-white tracking-tighter">
                  20 mil
                </span>
</div>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-xs text-white">
<i className="w-4 h-4 text-brand" data-lucide="check"></i>
                Up to 5 pages
              </li>
<li className="flex items-center gap-3 text-xs text-white">
<i className="w-4 h-4 text-brand" data-lucide="check"></i>
                Custom UI design
              </li>
<li className="flex items-center gap-3 text-xs text-white">
<i className="w-4 h-4 text-brand" data-lucide="check"></i>
                WordPress CMS
              </li>
<li className="flex items-center gap-3 text-xs text-white">
<i className="w-4 h-4 text-brand" data-lucide="check"></i>
                Performance optimized
              </li>
</ul>
<a className="w-full inline-flex items-center justify-center px-4 py-4 bg-brand text-black text-xs font-bold uppercase tracking-widest hover:bg-white transition-all duration-200" href="#contact">
              Book Tier 2
            </a>
</div>

<div className="bg-background p-10 flex flex-col h-full hover:bg-surface transition-colors duration-200">
<div className="mb-8">
<h3 className="text-xs font-bold uppercase tracking-widest text-white mb-2">
                Tier 3
              </h3>
<p className="text-xs text-text-tertiary mb-6 min-h-[2.5em]">
                Custom Web App / Logic.
              </p>
<div className="flex items-baseline gap-1">
<span className="text-[10px] font-medium text-text-tertiary uppercase">
                  Starts
                </span>
<span className="text-4xl font-bold text-white tracking-tighter">
                  30 mil+
                </span>
</div>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-xs text-text-secondary">
<i className="w-4 h-4 text-brand" data-lucide="check"></i>
                Custom Scope
              </li>
<li className="flex items-center gap-3 text-xs text-text-secondary">
<i className="w-4 h-4 text-brand" data-lucide="check"></i>
                Advanced UI/UX
              </li>
<li className="flex items-center gap-3 text-xs text-text-secondary">
<i className="w-4 h-4 text-brand" data-lucide="check"></i>
                Web app capability
              </li>
<li className="flex items-center gap-3 text-xs text-text-secondary">
<i className="w-4 h-4 text-brand" data-lucide="check"></i>
                API Integrations
              </li>
</ul>
<a className="w-full inline-flex items-center justify-center px-4 py-4 border border-border text-white text-xs font-bold uppercase tracking-widest hover:border-white hover:bg-white hover:text-black transition-all duration-200" href="#contact">
              Discuss Scope
            </a>
</div>
</div>
<div className="mt-8 text-center">
<p className="text-text-tertiary text-[10px] uppercase tracking-widest">
            Pricing excludes: Copywriting, Paid Plugins, Advanced SEO.
          </p>
</div>
</div>
</section>

<section className="py-24 bg-background border-t border-border" id="about">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div>
<div className="inline-flex items-center gap-2 px-0 py-1 text-xs font-bold uppercase tracking-widest mb-8 text-brand">
<span className="block w-1.5 h-1.5 bg-brand"></span>
              Since 2011
            </div>
<h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-8 lowercase leading-none">
              more than just a
              <br/>
<span className="text-text-tertiary">software house.</span>
</h2>
<div className="space-y-6 text-text-secondary font-light text-lg">
<p>
                MBDC Studio operates under
                <strong className="text-white">PT MBDC Media</strong>
                , a digital company with deep roots in content, audience
                building, and product thinking.
              </p>
<p>
                We are the brains behind
                <span className="text-white border-b border-brand">
                  malesbanget.com
                </span>
                and
                <span className="text-white border-b border-brand">jalan2men</span>
                — established media properties that shaped our understanding of
                storytelling.
              </p>
</div>
</div>
<div>
<h3 className="text-xs font-bold uppercase tracking-widest text-text-tertiary mb-8">
              Leadership
            </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">

<div className="p-8 bg-surface hover:bg-surface-hover transition-colors duration-200">
<div className="w-16 h-16 bg-border mb-6 overflow-hidden">
<img alt="Aryo Sayogha" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-bold text-white mb-1">Aryo Sayogha</h4>
<p className="text-[10px] font-medium text-text-tertiary uppercase tracking-widest mb-4">
                  Director
                </p>
<p className="text-xs text-text-secondary leading-relaxed">
                  Oversees agency strategy, creative direction, and client
                  partnerships, ensuring every project aligns with business
                  goals.
                </p>
</div>

<div className="p-8 bg-surface hover:bg-surface-hover transition-colors duration-200">
<div className="w-16 h-16 bg-border mb-6 overflow-hidden">
<img alt="Guntur Rhaka" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-bold text-white mb-1">Guntur Rhaka</h4>
<p className="text-[10px] font-medium text-text-tertiary uppercase tracking-widest mb-4">
                  Lead Developer
                </p>
<p className="text-xs text-text-secondary leading-relaxed">
                  Specializes in full-stack architecture, performance
                  optimization, and building robust, scalable technical
                  foundations.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-background border-t border-border" id="blog">
<div className="max-w-[1440px] mx-auto px-6">
<div className="mb-16">
<h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-4 lowercase">
            insights &amp; thoughts
          </h2>
<p className="text-lg text-text-secondary font-light">
            Perspectives on technology, media, and the digital landscape.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 border-l border-t border-border bg-border gap-px">

<article className="p-10 bg-background hover:bg-surface transition-colors duration-200 flex flex-col items-start h-full group">
<div className="w-full aspect-video mb-8 bg-surface border border-border overflow-hidden relative">
<img alt="Headless CMS" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mb-6 flex items-center gap-2">
<span className="text-[10px] font-bold uppercase tracking-widest text-brand">
                Tech
              </span>
<span className="text-[10px] text-text-tertiary uppercase tracking-widest">
                Oct 24, 2023
              </span>
</div>
<h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-brand transition-colors">
              Why Headless CMS?
            </h3>
<p className="text-sm text-text-secondary leading-relaxed mb-8 flex-1">
              Moving away from traditional WordPress setups to decoupled
              architectures for better security and speed.
            </p>
<a className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-white hover:text-brand transition-colors" href="#">
              Read Article
              <i className="w-4 h-4 ml-2" data-lucide="arrow-up-right"></i>
</a>
</article>

<article className="p-10 bg-background hover:bg-surface transition-colors duration-200 flex flex-col items-start h-full group">
<div className="w-full aspect-video mb-8 bg-surface border border-border overflow-hidden relative">
<img alt="UX Design" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="mb-6 flex items-center gap-2">
<span className="text-[10px] font-bold uppercase tracking-widest text-brand">
                Business
              </span>
<span className="text-[10px] text-text-tertiary uppercase tracking-widest">
                Sep 12, 2023
              </span>
</div>
<h3 className="text-xl font-bold text-white mb-3 tracking-tight">
              The ROI of UX Design
            </h3>
<p className="text-sm text-text-secondary leading-relaxed mb-8 flex-1">
              How investing in user experience early in the product lifecycle
              reduces development costs significantly.
            </p>
<a className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-white hover:text-brand transition-colors" href="#">
              Read Article
              <i className="w-4 h-4 ml-2" data-lucide="arrow-up-right"></i>
</a>
</article>

<article className="p-10 bg-background hover:bg-surface transition-colors duration-200 flex flex-col items-start h-full group">
<div className="w-full aspect-video mb-8 bg-surface border border-border overflow-hidden relative">
<img alt="Studio Culture" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mb-6 flex items-center gap-2">
<span className="text-[10px] font-bold uppercase tracking-widest text-brand">
                Culture
              </span>
<span className="text-[10px] text-text-tertiary uppercase tracking-widest">
                Aug 05, 2023
              </span>
</div>
<h3 className="text-xl font-bold text-white mb-3 tracking-tight">
              From Media to Product
            </h3>
<p className="text-sm text-text-secondary leading-relaxed mb-8 flex-1">
              Lessons learned from running MalesBanget.com and applying audience
              knowledge to software products.
            </p>
<a className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-white hover:text-brand transition-colors" href="#">
              Read Article
              <i className="w-4 h-4 ml-2" data-lucide="arrow-up-right"></i>
</a>
</article>
</div>
</div>
</section>

<footer className="bg-surface pt-24 pb-12 border-t border-border" id="contact">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
<div>
<h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-white lowercase leading-[0.8]">
              let's
              <br/>
              build it.
            </h2>
<p className="text-text-secondary text-lg mb-12 max-w-md font-light">
              We help ambitious brands scale through design and technology. Drop
              us a line to discuss your next move.
            </p>
<div className="flex flex-col gap-6">
<a className="flex items-center gap-4 text-text-secondary hover:text-white transition-colors" href="mailto:hello@mbdcstudio.com">
<i className="w-5 h-5" data-lucide="mail"></i>
<span className="text-lg">hello@mbdcstudio.com</span>
</a>
<div className="flex items-center gap-4 text-text-secondary">
<i className="w-5 h-5" data-lucide="map-pin"></i>
<span className="text-lg">South Jakarta, Indonesia</span>
</div>
</div>
</div>

<div className="bg-background p-8 border border-border">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">
                    Name
                  </label>
<input className="w-full bg-surface border border-border px-4 py-3 text-white text-sm focus:outline-none focus:border-brand transition-colors placeholder-text-tertiary/50" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">
                    Email
                  </label>
<input className="w-full bg-surface border border-border px-4 py-3 text-white text-sm focus:outline-none focus:border-brand transition-colors placeholder-text-tertiary/50" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">
                  Project Type
                </label>
<div className="relative">
<select className="w-full bg-surface border border-border px-4 py-3 text-white text-sm focus:outline-none focus:border-brand transition-colors cursor-pointer pr-10">
<option>UI/UX Design</option>
<option>Web Development</option>
<option>Motion Graphics</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">
                  Message
                </label>
<textarea className="w-full bg-surface border border-border px-4 py-3 text-white text-sm focus:outline-none focus:border-brand transition-colors placeholder-text-tertiary/50" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-black text-xs font-bold uppercase tracking-widest py-4 hover:bg-brand transition-colors duration-200" type="button">
                Send Message
              </button>
</form>
</div>
</div>
<div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-brand flex items-center justify-center">
<span className="text-black text-xs font-bold">M</span>
</div>
<span className="font-bold text-sm text-white tracking-widest uppercase">
              MBDC Studio
            </span>
</div>
<p className="text-text-tertiary text-[10px] uppercase tracking-widest">
            © 2024 MBDC Studio.
          </p>
<div className="flex gap-6">
<a className="text-text-tertiary hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="text-text-tertiary hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="text-text-tertiary hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
