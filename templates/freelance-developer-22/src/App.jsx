import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Icon stroke width
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });

      // Theme: auto-detect + toggle
      const themeStorageKey = 'pref-theme';
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      const applyTheme = (mode) => {
        const root = document.documentElement;
        if (mode === 'dark') {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
        // refresh icons
        if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        // update chart colors
        if (window.updateSkillsChartColors) window.updateSkillsChartColors();
      };
      const saved = localStorage.getItem(themeStorageKey);
      applyTheme(saved ? saved : (prefersDark.matches ? 'dark' : 'light'));
      prefersDark.addEventListener('change', (e) => {
        if (!localStorage.getItem(themeStorageKey)) applyTheme(e.matches ? 'dark' : 'light');
      });
      document.getElementById('themeToggle').addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark');
        const next = isDark ? 'light' : 'dark';
        localStorage.setItem(themeStorageKey, next);
        applyTheme(next);
      });

      // Preloader
      window.addEventListener('load', () => {
        const p = document.getElementById('preloader');
        p.classList.add('opacity-0', 'transition', 'duration-500');
        setTimeout(() => p.remove(), 500);
      });

      // Smooth scroll offset for sticky nav
      document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener('click', (e) => {
          const href = a.getAttribute('href');
          if (href.length > 1) {
            const el = document.querySelector(href);
            if (el) {
              e.preventDefault();
              const y = el.getBoundingClientRect().top + window.scrollY - 80;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }
        });
      });

      // Reveal on scroll
      const revealEls = document.querySelectorAll('.reveal');
      revealEls.forEach((el) => el.classList.add('opacity-0', 'translate-y-6', 'transition', 'duration-700'));
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-6');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      revealEls.forEach((el) => io.observe(el));

      // Cursor
      const cursor = document.getElementById('cursor');
      const ring = document.getElementById('cursor-ring');
      const isTouch = matchMedia('(pointer: coarse)').matches;
      if (!isTouch) {
        document.addEventListener('mousemove', (e) => {
          cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
        document.addEventListener('mousedown', () => ring.classList.add('scale-75'));
        document.addEventListener('mouseup', () => ring.classList.remove('scale-75'));
      }

      // Testimonials slider
      let tIndex = 0;
      const slides = Array.from(document.querySelectorAll('.testimonial-slide'));
      const showSlide = (i) => {
        slides.forEach((s, idx) => s.style.opacity = idx === i ? 1 : 0);
      };
      showSlide(tIndex);
      document.getElementById('testPrev').addEventListener('click', () => {
        tIndex = (tIndex - 1 + slides.length) % slides.length;
        showSlide(tIndex);
      });
      document.getElementById('testNext').addEventListener('click', () => {
        tIndex = (tIndex + 1) % slides.length;
        showSlide(tIndex);
      });
      setInterval(() => {
        tIndex = (tIndex + 1) % slides.length;
        showSlide(tIndex);
      }, 5000);

      // Portfolio filter
      const filterBtns = document.querySelectorAll('.filter-btn');
      const cards = document.querySelectorAll('.project-card');
      let activeFilter = 'all';
      filterBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          activeFilter = btn.dataset.filter;
          filterBtns.forEach((b) => b.classList.remove('border-neutral-900', 'dark:border-white'));
          btn.classList.add('border-neutral-900', 'dark:border-white');
          cards.forEach((card) => {
            const categories = card.dataset.category.split(' ');
            const match = activeFilter === 'all' || categories.includes(activeFilter);
            card.parentElement.classList.toggle('hidden', !match);
          });
        });
      });
      // set initial active border
      filterBtns[0].classList.add('border-neutral-900', 'dark:border-white');

      // Portfolio modal
      const modal = document.getElementById('projectModal');
      const modalClose = document.getElementById('modalClose');
      const modalTitle = document.getElementById('modalTitle');
      const modalTools = document.getElementById('modalTools');
      const modalDesc = document.getElementById('modalDesc');
      const modalImg = document.getElementById('modalImg');
      const modalLink = document.getElementById('modalLink');

      cards.forEach((card) => {
        card.addEventListener('click', (e) => {
          e.preventDefault();
          modalTitle.textContent = card.dataset.title;
          modalTools.textContent = card.dataset.tools;
          modalDesc.textContent = card.dataset.desc;
          modalImg.src = card.dataset.img;
          modalLink.href = card.dataset.link;
          modal.classList.remove('hidden');
          modal.classList.add('flex');
        });
      });
      modalClose.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      });
      modal.addEventListener('click', (e) => {
        if (e.target === modal.firstElementChild) {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
        }
      });

      // Service tilt effect
      const tiltCards = document.querySelectorAll('.service-tilt');
      tiltCards.forEach((card) => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const rx = ((y - rect.height / 2) / rect.height) * -6;
          const ry = ((x - rect.width / 2) / rect.width) * 6;
          card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
          card.style.transition = 'transform 80ms ease-out';
        });
        card.addEventListener('mouseleave', () => {
          card.style.transform = '';
          card.style.transition = 'transform 300ms ease';
        });
      });

      // Chart.js Skills
      const ctx = document.getElementById('skillsChart').getContext('2d');
      const getChartColors = () => {
        const isDark = document.documentElement.classList.contains('dark');
        return {
          grid: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
          ticks: isDark ? '#E5E7EB' : '#111827',
          fill: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
          border: isDark ? '#FFFFFF' : '#111111'
        };
      };
      let skillsChart = null;
      const buildSkillsChart = () => {
        const colors = getChartColors();
        if (skillsChart) skillsChart.destroy();
        skillsChart = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: ['Framer', 'Shopify', 'WordPress', 'Figma', 'AI'],
            datasets: [{
              label: 'Proficiency',
              data: [92, 88, 80, 90, 85],
              backgroundColor: colors.fill,
              borderColor: colors.border,
              pointBackgroundColor: colors.border,
              pointBorderColor: colors.border,
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              r: {
                grid: { color: colors.grid },
                angleLines: { color: colors.grid },
                suggestedMin: 0,
                suggestedMax: 100,
                ticks: { display: false },
                pointLabels: { color: colors.ticks, font: { family: 'Inter', size: 11 } }
              }
            },
            plugins: { legend: { display: false } }
          }
        });
      };
      buildSkillsChart();
      window.updateSkillsChartColors = buildSkillsChart;

      // Footer year
      document.getElementById('year').textContent = new Date().getFullYear();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100" id="preloader">
<div className="flex flex-col items-center gap-5">
<div className="flex items-center justify-center">
<div className="relative">
<div className="h-16 w-16 rounded-full border border-neutral-300 dark:border-neutral-800 animate-spin [animation-duration:2.2s]"></div>
<div className="absolute inset-0 m-auto h-8 w-8 rounded-md border border-neutral-300 dark:border-neutral-800 rotate-45"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="font-[600] tracking-tight" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif, system-ui'}}>SAA</span>
</div>
</div>
</div>
<p className="text-sm opacity-70">Loading experience</p>
</div>
</div>

<div aria-hidden="true" className="pointer-events-none fixed z-[9998] hidden md:block" id="cursor">
<div className="h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-300/60 dark:border-neutral-700/60 backdrop-blur-sm transition-transform duration-150 ease-out" id="cursor-ring"></div>
</div>

<a className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] rounded px-3 py-2 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900" href="#home">Skip to content</a>

<header className="fixed top-0 inset-x-0 z-[1000]">
<div className="mx-auto max-w-7xl px-4">
<nav className="mt-4 flex items-center justify-between rounded-xl border border-neutral-200/60 bg-white/70 px-3 py-2.5 shadow-sm backdrop-blur-md dark:border-neutral-800/80 dark:bg-neutral-950/60">
<div className="flex items-center gap-6">
<a className="flex items-center gap-2 group" href="#home">
<div className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800">
<span className="text-sm font-[600] tracking-tight" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif, system-ui'}}>S</span>
</div>
<span className="text-sm font-[500] opacity-80 group-hover:opacity-100 transition-opacity" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif, system-ui'}}>Syed Aarish Ali</span>
</a>
<div className="hidden md:flex items-center gap-1">

<a className="relative px-3 py-2 text-sm font-[500] opacity-80 hover:opacity-100 transition" href="#about">
                About
                <span className="absolute left-3 -bottom-1 h-px w-0 bg-neutral-900 transition-all duration-200 group-hover:w-0 dark:bg-neutral-100"></span>
<span className="block h-px w-0 bg-neutral-900 transition-all duration-300 hover:w-full dark:bg-neutral-100"></span>
</a>
<a className="relative px-3 py-2 text-sm font-[500] opacity-80 hover:opacity-100 transition" href="#portfolio">
                Work
                <span className="block h-px w-0 bg-neutral-900 transition-all duration-300 hover:w-full dark:bg-neutral-100"></span>
</a>
<a className="relative px-3 py-2 text-sm font-[500] opacity-80 hover:opacity-100 transition" href="#services">
                Services
                <span className="block h-px w-0 bg-neutral-900 transition-all duration-300 hover:w-full dark:bg-neutral-100"></span>
</a>
<a className="relative px-3 py-2 text-sm font-[500] opacity-80 hover:opacity-100 transition" href="#blog">
                Blog
                <span className="block h-px w-0 bg-neutral-900 transition-all duration-300 hover:w-full dark:bg-neutral-100"></span>
</a>
<a className="relative px-3 py-2 text-sm font-[500] opacity-80 hover:opacity-100 transition" href="#contact">
                Contact
                <span className="block h-px w-0 bg-neutral-900 transition-all duration-300 hover:w-full dark:bg-neutral-100"></span>
</a>
</div>
</div>
<div className="flex items-center gap-2">
<button aria-label="Toggle theme" className="group inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm font-[500] hover:bg-neutral-50 hover:border-neutral-300 active:scale-[0.98] dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-850 dark:hover:border-neutral-700" id="themeToggle">
<i className="h-4 w-4 hidden dark:block" data-lucide="sun"></i>
<i className="h-4 w-4 block dark:hidden" data-lucide="moon"></i>
<span className="hidden sm:inline opacity-80 group-hover:opacity-100">Theme</span>
</button>
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-900 bg-neutral-900 px-3 py-2 text-sm font-[500] text-white hover:bg-neutral-800 hover:border-neutral-800 active:scale-[0.98] dark:border-white dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100" href="#contact">
<span>Hire Me</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</nav>
</div>
</header>
<main className="pt-28" id="home">

<section className="relative">

<div className="pointer-events-none absolute inset-0 overflow-hidden">

<div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-neutral-200/40 blur-3xl dark:bg-neutral-800/40"></div>

<div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block" style={{perspective: '1200px'}}>
<div className="relative h-64 w-64 animate-spin [animation-duration:16s] [transform-style:preserve-3d] opacity-40">

<div className="absolute inset-0 border border-neutral-300 dark:border-neutral-700 rounded-lg" style={{transform: 'translateZ(64px)'}}></div>
<div className="absolute inset-0 border border-neutral-300 dark:border-neutral-700 rounded-lg" style={{transform: 'translateZ(-64px)'}}></div>
<div className="absolute inset-0 border border-neutral-300 dark:border-neutral-700 rounded-lg" style={{transform: 'rotateY(90deg) translateZ(64px)'}}></div>
<div className="absolute inset-0 border border-neutral-300 dark:border-neutral-700 rounded-lg" style={{transform: 'rotateY(90deg) translateZ(-64px)'}}></div>
<div className="absolute inset-0 border border-neutral-300 dark:border-neutral-700 rounded-lg" style={{transform: 'rotateX(90deg) translateZ(64px)'}}></div>
<div className="absolute inset-0 border border-neutral-300 dark:border-neutral-700 rounded-lg" style={{transform: 'rotateX(90deg) translateZ(-64px)'}}></div>
</div>
</div>
</div>
<div className="relative mx-auto max-w-7xl px-4">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="col-span-7 space-y-8">
<p className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-[500] tracking-tight shadow-sm backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/70 w-auto">
<i className="h-3.5 w-3.5" data-lucide="sparkles"></i>
                16-year-old • 3+ years of experience
              </p>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-[600] tracking-tight" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif, system-ui'}}>
                I’m Syed Aarish Ali — Freelance Web Developer &amp; Graphic Designer.
              </h1>
<p className="max-w-2xl text-base sm:text-lg leading-relaxed opacity-80" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>
                Crafting interactive websites &amp; creative designs without code. I blend minimal aesthetics with futuristic interactions across Framer, Shopify, WordPress, Figma, and AI tools.
              </p>
<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-900 bg-neutral-900 px-5 py-3 text-sm font-[500] text-white hover:bg-neutral-800 hover:border-neutral-800 active:scale-[0.98] dark:border-white dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100" href="#portfolio">
                  View My Work
                  <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-5 py-3 text-sm font-[500] hover:bg-neutral-50 hover:border-neutral-300 active:scale-[0.98] dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-850" href="#contact">
                  Hire Me
                  <i className="h-4 w-4" data-lucide="send"></i>
</a>
</div>
<div className="flex flex-wrap gap-6 pt-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md border border-neutral-200 dark:border-neutral-800 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="code-2"></i>
</div>
<div>
<div className="text-sm font-[600]" style={{fontFamily: 'Space Grotesk'}}>No-Code • Shopify • Framer</div>
<div className="text-xs opacity-70">Fast, scalable, interactive</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md border border-neutral-200 dark:border-neutral-800 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="pen-tool"></i>
</div>
<div>
<div className="text-sm font-[600]" style={{fontFamily: 'Space Grotesk'}}>Branding • UI Kits</div>
<div className="text-xs opacity-70">Clean, bold, timeless</div>
</div>
</div>
</div>
</div>

<div className="col-span-5">
<div className="relative">
<div className="relative overflow-hidden rounded-2xl border border-neutral-200 shadow-sm dark:border-neutral-800">
<img alt="Monochrome abstract setup" className="h-80 w-full object-cover grayscale" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent dark:from-neutral-950/90"></div>
<div className="absolute bottom-0 w-full p-5">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-[600]" style={{fontFamily: 'Space Grotesk'}}>Interactive • Minimal • Future-ready</div>
<div className="text-xs opacity-70">Portfolio snapshots &amp; motion</div>
</div>
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-md border border-neutral-200 bg-white flex items-center justify-center dark:border-neutral-800 dark:bg-neutral-900">
<i className="h-4 w-4" data-lucide="mouse-pointer-2"></i>
</div>
<div className="h-9 w-9 rounded-md border border-neutral-200 bg-white flex items-center justify-center dark:border-neutral-800 dark:bg-neutral-900">
<i className="h-4 w-4" data-lucide="sparkles"></i>
</div>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute -left-6 -top-6 hidden sm:block">
<div className="rounded-lg border border-neutral-200 bg-white px-3 py-2 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="frame"></i>
<span className="text-xs font-[500]">Framer</span>
</div>
</div>
</div>
<div className="pointer-events-none absolute -right-6 top-10 hidden sm:block">
<div className="rounded-lg border border-neutral-200 bg-white px-3 py-2 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="shopping-bag"></i>
<span className="text-xs font-[500]">Shopify</span>
</div>
</div>
</div>
<div className="pointer-events-none absolute -right-8 -bottom-6 hidden sm:block">
<div className="rounded-lg border border-neutral-200 bg-white px-3 py-2 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="wand-2"></i>
<span className="text-xs font-[500]">AI Tools</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative mx-auto max-w-7xl px-4 py-24" id="about">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

<div className="space-y-10 reveal">
<div className="space-y-4">
<h2 className="text-3xl sm:text-4xl font-[600] tracking-tight" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif, system-ui'}}>About Me</h2>
<p className="text-base leading-relaxed opacity-80" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>
                I’m a 16-year-old freelance developer and designer with 3+ years of hands-on experience delivering high-performing, visually clean websites and striking brand systems. I specialize in no-code development (Framer, Shopify, WordPress), UI design (Figma), and AI-powered processes to accelerate quality.
              </p>
<div className="flex flex-wrap gap-2 pt-2">
<span className="rounded-md border border-neutral-200 px-3 py-1 text-xs font-[500] dark:border-neutral-800">Framer</span>
<span className="rounded-md border border-neutral-200 px-3 py-1 text-xs font-[500] dark:border-neutral-800">Shopify</span>
<span className="rounded-md border border-neutral-200 px-3 py-1 text-xs font-[500] dark:border-neutral-800">WordPress</span>
<span className="rounded-md border border-neutral-200 px-3 py-1 text-xs font-[500] dark:border-neutral-800">Figma</span>
<span className="rounded-md border border-neutral-200 px-3 py-1 text-xs font-[500] dark:border-neutral-800">AI Automation</span>
</div>
</div>

<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1 h-6 w-6 rounded-md border border-neutral-200 flex items-center justify-center dark:border-neutral-800">
<i className="h-3.5 w-3.5" data-lucide="flag"></i>
</div>
<div>
<div className="text-sm font-[600]" style={{fontFamily: 'Space Grotesk'}}>2022 — First client launch</div>
<p className="text-sm opacity-75">Delivered a minimal portfolio for a local creative with motion and CMS.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 h-6 w-6 rounded-md border border-neutral-200 flex items-center justify-center dark:border-neutral-800">
<i className="h-3.5 w-3.5" data-lucide="rocket"></i>
</div>
<div>
<div className="text-sm font-[600]" style={{fontFamily: 'Space Grotesk'}}>2023 — E‑commerce builds</div>
<p className="text-sm opacity-75">Scaled multiple Shopify storefronts with fast, clean templates and custom UX.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 h-6 w-6 rounded-md border border-neutral-200 flex items-center justify-center dark:border-neutral-800">
<i className="h-3.5 w-3.5" data-lucide="cpu"></i>
</div>
<div>
<div className="text-sm font-[600]" style={{fontFamily: 'Space Grotesk'}}>2024 — AI workflows</div>
<p className="text-sm opacity-75">Built AI-backed automations for faster content, QA, and assets at scale.</p>
</div>
</div>
</div>
</div>

<div className="space-y-10 reveal">

<div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
<div className="flex items-center justify-between">
<h3 className="text-xl font-[600] tracking-tight" style={{fontFamily: 'Space Grotesk'}}>Skills Snapshot</h3>
<div className="flex items-center gap-2 opacity-70 text-xs">
<i className="h-4 w-4" data-lucide="bar-chart-3"></i>
                  updated monthly
                </div>
</div>
<p className="mt-1 text-sm opacity-70">Proficiency across tools I use daily.</p>
<div className="mt-4">
<div className="relative">
<div className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
<div className="">
<canvas className="!h-56" id="skillsChart"></canvas>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
<div className="flex items-center justify-between">
<h3 className="text-xl font-[600] tracking-tight" style={{fontFamily: 'Space Grotesk'}}>What clients say</h3>
<div className="flex items-center gap-2">
<button aria-label="Previous testimonial" className="h-8 w-8 rounded-md border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 active:scale-95 dark:border-neutral-800 dark:hover:bg-neutral-900" id="testPrev">
<i className="h-4 w-4" data-lucide="chevron-left"></i>
</button>
<button aria-label="Next testimonial" className="h-8 w-8 rounded-md border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 active:scale-95 dark:border-neutral-800 dark:hover:bg-neutral-900" id="testNext">
<i className="h-4 w-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="mt-4 relative h-40 overflow-hidden">
<div className="testimonial-slide absolute inset-0 opacity-100 transition-opacity duration-400">
<div className="flex items-start gap-4">
<img alt="Client 1" className="h-12 w-12 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<div className="flex items-center gap-1">
<i className="h-4 w-4 animate-pulse" data-lucide="star"></i>
<i className="h-4 w-4 animate-pulse" data-lucide="star"></i>
<i className="h-4 w-4 animate-pulse" data-lucide="star"></i>
<i className="h-4 w-4 animate-pulse" data-lucide="star"></i>
<i className="h-4 w-4 animate-pulse" data-lucide="star"></i>
</div>
<p className="mt-2 text-sm opacity-80">“Syed delivered a beautiful, fast site in days. Clear communication and pixel-level detail.”</p>
<p className="mt-1 text-xs opacity-60">Amelia, Creative Director</p>
</div>
</div>
</div>
<div className="testimonial-slide absolute inset-0 opacity-0 transition-opacity duration-400">
<div className="flex items-start gap-4">
<img alt="Client 2" className="h-12 w-12 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<div className="flex items-center gap-1">
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
</div>
<p className="mt-2 text-sm opacity-80">“The Shopify migration was seamless. CTRs up, bounce down. Highly recommend.”</p>
<p className="mt-1 text-xs opacity-60">Marcus, E‑commerce Lead</p>
</div>
</div>
</div>
<div className="testimonial-slide absolute inset-0 opacity-0 transition-opacity duration-400">
<div className="flex items-start gap-4">
<img alt="Client 3" className="h-12 w-12 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<div className="flex items-center gap-1">
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
<i className="h-4 w-4" data-lucide="star"></i>
</div>
<p className="mt-2 text-sm opacity-80">“Smart use of AI sped up our design sprints without sacrificing quality.”</p>
<p className="mt-1 text-xs opacity-60">Priya, Product Manager</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative mx-auto max-w-7xl px-4 py-24" id="portfolio">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl font-[600] tracking-tight" style={{fontFamily: 'Space Grotesk'}}>Selected Work</h2>
<p className="mt-2 text-sm opacity-70">Web Development • Graphic Design • No-Code Projects • AI Integrations</p>
</div>
<div className="flex flex-wrap items-center gap-2">
<button className="filter-btn rounded-md border border-neutral-200 px-3 py-1.5 text-sm font-[500] hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900" data-filter="all">All</button>
<button className="filter-btn rounded-md border border-neutral-200 px-3 py-1.5 text-sm font-[500] hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900" data-filter="web">Web Development</button>
<button className="filter-btn rounded-md border border-neutral-200 px-3 py-1.5 text-sm font-[500] hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900" data-filter="design">Graphic Design</button>
<button className="filter-btn rounded-md border border-neutral-200 px-3 py-1.5 text-sm font-[500] hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900" data-filter="nocode">No‑Code</button>
<button className="filter-btn rounded-md border border-neutral-200 px-3 py-1.5 text-sm font-[500] hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900" data-filter="ai">AI</button>
</div>
</div>
<div className="mt-10 columns-1 md:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">

<article className="mb-5 break-inside-avoid reveal">
<a className="group block project-card" data-category="web nocode ai" data-desc="High-conversion landing with interactions, CMS, and AI-assisted content workflow." data-img="https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&amp;w=1400&amp;auto=format&amp;fit=crop" data-link="https://example.com" data-title="Interactive SaaS Landing" data-tools="Framer, Figma, AI Content" href="#">
<div className="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
<img alt="SaaS Landing" className="h-60 w-full object-cover transition duration-500 grayscale group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-neutral-950/90"></div>
<div className="absolute bottom-0 w-full p-5">
<div className="flex items-center justify-between">
<div>
<h3 className="text-base font-[600]" style={{fontFamily: 'Space Grotesk'}}>Interactive SaaS Landing</h3>
<p className="text-xs opacity-70">Framer • Figma • AI Content</p>
</div>
<div className="h-9 w-9 rounded-md border border-neutral-200 bg-white flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100 dark:border-neutral-800 dark:bg-neutral-900">
<i className="h-4 w-4" data-lucide="expand"></i>
</div>
</div>
</div>
</div>
</a>
</article>
<article className="mb-5 break-inside-avoid reveal">
<a className="group block project-card" data-category="web" data-desc="Conversion-focused redesign with modular sections and performance tuning." data-img="https://images.unsplash.com/photo-1526404805091-6bcd04f55bc3?q=80&amp;w=1400&amp;auto=format&amp;fit=crop" data-link="https://example.com" data-title="Shopify Store Revamp" data-tools="Shopify, Liquid, UX" href="#">
<div className="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
<img alt="Shopify Revamp" className="h-80 w-full object-cover transition duration-500 grayscale group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-neutral-950/90"></div>
<div className="absolute bottom-0 w-full p-5">
<div className="flex items-center justify-between">
<div>
<h3 className="text-base font-[600]" style={{fontFamily: 'Space Grotesk'}}>Shopify Store Revamp</h3>
<p className="text-xs opacity-70">Shopify • Liquid • UX</p>
</div>
<div className="h-9 w-9 rounded-md border border-neutral-200 bg-white flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100 dark:border-neutral-800 dark:bg-neutral-900">
<i className="h-4 w-4" data-lucide="expand"></i>
</div>
</div>
</div>
</div>
</a>
</article>
<article className="mb-5 break-inside-avoid reveal">
<a className="group block project-card" data-category="design" data-desc="A geometric identity with tight spacing, logo marks, and UI components." data-img="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&amp;w=1400&amp;auto=format&amp;fit=crop" data-link="https://example.com" data-title="Monochrome Brand Kit" data-tools="Figma, Logo, Typography" href="#">
<div className="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
<img alt="Brand Kit" className="h-64 w-full object-cover transition duration-500 grayscale group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-neutral-950/90"></div>
<div className="absolute bottom-0 w-full p-5">
<div className="flex items-center justify-between">
<div>
<h3 className="text-base font-[600]" style={{fontFamily: 'Space Grotesk'}}>Monochrome Brand Kit</h3>
<p className="text-xs opacity-70">Figma • Logos • UI</p>
</div>
<div className="h-9 w-9 rounded-md border border-neutral-200 bg-white flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100 dark:border-neutral-800 dark:bg-neutral-900">
<i className="h-4 w-4" data-lucide="expand"></i>
</div>
</div>
</div>
</div>
</a>
</article>
<article className="mb-5 break-inside-avoid reveal">
<a className="group block project-card" data-category="ai web" data-desc="Automated content generation &amp; QA integrated into a CMS workflow." data-img="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&amp;w=1400&amp;auto=format&amp;fit=crop" data-link="https://example.com" data-title="AI Content Pipeline" data-tools="APIs, Automation, CMS" href="#">
<div className="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
<img alt="AI Content" className="h-60 w-full object-cover transition duration-500 grayscale group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-neutral-950/90"></div>
<div className="absolute bottom-0 w-full p-5">
<div className="flex items-center justify-between">
<div>
<h3 className="text-base font-[600]" style={{fontFamily: 'Space Grotesk'}}>AI Content Pipeline</h3>
<p className="text-xs opacity-70">APIs • Automation • CMS</p>
</div>
<div className="h-9 w-9 rounded-md border border-neutral-200 bg-white flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100 dark:border-neutral-800 dark:bg-neutral-900">
<i className="h-4 w-4" data-lucide="expand"></i>
</div>
</div>
</div>
</div>
</a>
</article>
</div>

<div className="fixed inset-0 z-[1001] hidden items-center justify-center p-4" id="projectModal">
<div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
<div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg dark:border-neutral-800 dark:bg-neutral-950">
<div className="flex items-center justify-between border-b border-neutral-200 p-4 dark:border-neutral-800">
<div>
<h3 className="text-xl font-[600] tracking-tight" id="modalTitle" style={{fontFamily: 'Space Grotesk'}}>Title</h3>
<p className="text-xs opacity-70" id="modalTools">Tools</p>
</div>
<button aria-label="Close" className="h-9 w-9 rounded-md border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 active:scale-95 dark:border-neutral-800 dark:hover:bg-neutral-900" id="modalClose">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
<div className="p-4">
<div className="rounded-lg border border-neutral-200 overflow-hidden dark:border-neutral-800">
<img alt="Project" className="w-full h-56 object-cover grayscale" id="modalImg" src=""/>
</div>
<a className="mt-4 inline-flex items-center gap-2 text-sm font-[500] underline decoration-neutral-300 underline-offset-4 hover:opacity-80" href="#" id="modalLink" target="_blank">
                  Visit project
                  <i className="h-4 w-4" data-lucide="external-link"></i>
</a>
</div>
<div className="p-4">
<p className="text-sm leading-relaxed opacity-80" id="modalDesc">
                  Description
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative mx-auto max-w-7xl px-4 py-24" id="services">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl font-[600] tracking-tight" style={{fontFamily: 'Space Grotesk'}}>Services</h2>
<p className="mt-2 text-sm opacity-70">From idea to launch with smooth, modern workflows.</p>
</div>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="service-tilt group relative rounded-2xl border border-neutral-200 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 dark:border-neutral-800">
<div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" id="tiltGlow1"></div>
<div className="flex items-center justify-between">
<div className="h-10 w-10 rounded-md border border-neutral-200 flex items-center justify-center dark:border-neutral-800">
<i className="h-5 w-5" data-lucide="code-2"></i>
</div>
<i className="h-5 w-5 opacity-60" data-lucide="move-3d"></i>
</div>
<h3 className="mt-5 text-lg font-[600]" style={{fontFamily: 'Space Grotesk'}}>Website Development</h3>
<p className="mt-2 text-sm opacity-80">No-Code / Shopify / Framer builds with speed, SEO, and interactions.</p>
<ul className="mt-4 space-y-2 text-sm">
<li className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="check"></i> Landing pages, stores, portfolios</li>
<li className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="check"></i> CMS &amp; performance tuning</li>
</ul>
</div>

<div className="service-tilt group relative rounded-2xl border border-neutral-200 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 dark:border-neutral-800">
<div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" id="tiltGlow2"></div>
<div className="flex items-center justify-between">
<div className="h-10 w-10 rounded-md border border-neutral-200 flex items-center justify-center dark:border-neutral-800">
<i className="h-5 w-5" data-lucide="pen-tool"></i>
</div>
<i className="h-5 w-5 opacity-60" data-lucide="move-3d"></i>
</div>
<h3 className="mt-5 text-lg font-[600]" style={{fontFamily: 'Space Grotesk'}}>Graphic Design</h3>
<p className="mt-2 text-sm opacity-80">Logos, brand identity, and UI kits with crisp geometry and balance.</p>
<ul className="mt-4 space-y-2 text-sm">
<li className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="check"></i> Logo marks &amp; typography</li>
<li className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="check"></i> UI components &amp; kits</li>
</ul>
</div>

<div className="service-tilt group relative rounded-2xl border border-neutral-200 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 dark:border-neutral-800">
<div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" id="tiltGlow3"></div>
<div className="flex items-center justify-between">
<div className="h-10 w-10 rounded-md border border-neutral-200 flex items-center justify-center dark:border-neutral-800">
<i className="h-5 w-5" data-lucide="wand-2"></i>
</div>
<i className="h-5 w-5 opacity-60" data-lucide="move-3d"></i>
</div>
<h3 className="mt-5 text-lg font-[600]" style={{fontFamily: 'Space Grotesk'}}>AI &amp; Automation Support</h3>
<p className="mt-2 text-sm opacity-80">Integrations to speed research, content, analytics, and QA.</p>
<ul className="mt-4 space-y-2 text-sm">
<li className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="check"></i> Content pipelines &amp; QA</li>
<li className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="check"></i> CMS &amp; API hooks</li>
</ul>
</div>
</div>

<div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
<div className="text-xs font-[600] uppercase tracking-tight opacity-70">Starter</div>
<div className="mt-3 text-3xl font-[600] tracking-tight" style={{fontFamily: 'Space Grotesk'}}>$499</div>
<ul className="mt-4 space-y-2 text-sm">
<li className="flex gap-2"><i className="h-4 w-4" data-lucide="check"></i> 1-page site or logo</li>
<li className="flex gap-2"><i className="h-4 w-4" data-lucide="check"></i> Basic SEO</li>
<li className="flex gap-2"><i className="h-4 w-4" data-lucide="check"></i> 1 round of revisions</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center rounded-md border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm font-[500] text-white hover:bg-neutral-800 dark:border-white dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100" href="#contact">Choose</a>
</div>
<div className="relative rounded-2xl border border-neutral-900 p-6 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 dark:border-neutral-900">
<div className="absolute -top-3 right-4 rounded-full border border-neutral-700 bg-neutral-800 px-2 py-0.5 text-[10px] font-[600] tracking-tight dark:bg-neutral-100 dark:border-neutral-300">Popular</div>
<div className="text-xs font-[600] uppercase tracking-tight opacity-80">Growth</div>
<div className="mt-3 text-3xl font-[600] tracking-tight" style={{fontFamily: 'Space Grotesk'}}>$1299</div>
<ul className="mt-4 space-y-2 text-sm">
<li className="flex gap-2"><i className="h-4 w-4" data-lucide="check"></i> Multi-section site or brand kit</li>
<li className="flex gap-2"><i className="h-4 w-4" data-lucide="check"></i> CMS &amp; analytics</li>
<li className="flex gap-2"><i className="h-4 w-4" data-lucide="check"></i> 2 rounds of revisions</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center rounded-md border border-white bg-white px-4 py-2 text-sm font-[500] text-neutral-900 hover:bg-neutral-100 dark:border-neutral-900 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800" href="#contact">Choose</a>
</div>
<div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
<div className="text-xs font-[600] uppercase tracking-tight opacity-70">Scale</div>
<div className="mt-3 text-3xl font-[600] tracking-tight" style={{fontFamily: 'Space Grotesk'}}>$2499+</div>
<ul className="mt-4 space-y-2 text-sm">
<li className="flex gap-2"><i className="h-4 w-4" data-lucide="check"></i> E‑commerce or full brand system</li>
<li className="flex gap-2"><i className="h-4 w-4" data-lucide="check"></i> Custom interactions &amp; automations</li>
<li className="flex gap-2"><i className="h-4 w-4" data-lucide="check"></i> Priority support</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center rounded-md border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm font-[500] text-white hover:bg-neutral-800 dark:border-white dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100" href="#contact">Choose</a>
</div>
</div>

<div className="mt-16 rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
<h3 className="text-xl font-[600] tracking-tight" style={{fontFamily: 'Space Grotesk'}}>Process</h3>
<div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="reveal rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
<div className="h-8 w-8 rounded-md border border-neutral-200 flex items-center justify-center dark:border-neutral-800">
<i className="h-4 w-4" data-lucide="search"></i>
</div>
<div className="mt-3 text-sm font-[600]" style={{fontFamily: 'Space Grotesk'}}>Discovery</div>
<p className="text-sm opacity-75">Goals, scope, and content planning.
            </p></div>
<div className="reveal rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
<div className="h-8 w-8 rounded-md border border-neutral-200 flex items-center justify-center dark:border-neutral-800">
<i className="h-4 w-4" data-lucide="layout-dashboard"></i>
</div>
<div className="mt-3 text-sm font-[600]" style={{fontFamily: 'Space Grotesk'}}>Design</div>
<p className="text-sm opacity-75">Wireframes, UI, and motion exploration.</p>
</div>
<div className="reveal rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
<div className="h-8 w-8 rounded-md border border-neutral-200 flex items-center justify-center dark:border-neutral-800">
<i className="h-4 w-4" data-lucide="terminal"></i>
</div>
<div className="mt-3 text-sm font-[600]" style={{fontFamily: 'Space Grotesk'}}>Development</div>
<p className="text-sm opacity-75">No-code build, CMS, and QA.</p>
</div>
<div className="reveal rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
<div className="h-8 w-8 rounded-md border border-neutral-200 flex items-center justify-center dark:border-neutral-800">
<i className="h-4 w-4" data-lucide="rocket"></i>
</div>
<div className="mt-3 text-sm font-[600]" style={{fontFamily: 'Space Grotesk'}}>Launch</div>
<p className="text-sm opacity-75">Handoff, docs, and optimization.</p>
</div>
</div>
</div>
</section>

<section className="relative mx-auto max-w-7xl px-4 py-24" id="blog">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl font-[600] tracking-tight" style={{fontFamily: 'Space Grotesk'}}>Notes &amp; Tips</h2>
<p className="mt-2 text-sm opacity-70">Design, no-code, and AI insights.</p>
</div>
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-200 px-3 py-2 text-sm font-[500] hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900" href="#">
            View all
            <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<article className="reveal group rounded-2xl border border-neutral-200 overflow-hidden dark:border-neutral-800">
<div className="overflow-hidden">
<img alt="Post 1" className="h-44 w-full object-cover grayscale transition group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<h3 className="text-lg font-[600] tracking-tight" style={{fontFamily: 'Space Grotesk'}}>Design systems in no-code</h3>
<p className="mt-2 text-sm opacity-75">How to build scalable UI kits that translate to production.</p>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 text-sm font-[500] underline decoration-neutral-300 underline-offset-4 hover:opacity-80">
                  Read
                  <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
<div className="flex items-center gap-2 opacity-60">
<i className="h-4 w-4" data-lucide="share-2"></i>
</div>
</div>
</div>
</article>
<article className="reveal group rounded-2xl border border-neutral-200 overflow-hidden dark:border-neutral-800">
<div className="overflow-hidden">
<img alt="Post 2" className="h-44 w-full object-cover grayscale transition group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<h3 className="text-lg font-[600] tracking-tight" style={{fontFamily: 'Space Grotesk'}}>Speed without code</h3>
<p className="mt-2 text-sm opacity-75">Faster delivery with performance and accessibility in mind.</p>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 text-sm font-[500] underline decoration-neutral-300 underline-offset-4 hover:opacity-80">
                  Read
                  <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
<div className="flex items-center gap-2 opacity-60">
<i className="h-4 w-4" data-lucide="share-2"></i>
</div>
</div>
</div>
</article>
<article className="reveal group rounded-2xl border border-neutral-200 overflow-hidden dark:border-neutral-800">
<div className="overflow-hidden">
<img alt="Post 3" className="h-44 w-full object-cover grayscale transition group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<h3 className="text-lg font-[600] tracking-tight" style={{fontFamily: 'Space Grotesk'}}>Practical AI for creators</h3>
<p className="mt-2 text-sm opacity-75">Automations I use to ship faster and maintain quality.</p>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 text-sm font-[500] underline decoration-neutral-300 underline-offset-4 hover:opacity-80">
                  Read
                  <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
<div className="flex items-center gap-2 opacity-60">
<i className="h-4 w-4" data-lucide="share-2"></i>
</div>
</div>
</div>
</article>
</div>
</section>

<section className="relative mx-auto max-w-7xl px-4 py-24" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
<div className="space-y-6 reveal">
<h2 className="text-3xl sm:text-4xl font-[600] tracking-tight" style={{fontFamily: 'Space Grotesk'}}>Let’s Work Together.</h2>
<p className="text-sm opacity-75">Have a project in mind? Tell me more—timeline, goals, and any references.</p>
<div className="flex items-center gap-3">
<a aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900" href="https://www.linkedin.com" target="_blank">
<i className="h-5 w-5" data-lucide="linkedin"></i>
</a>
<a aria-label="Upwork" className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900" href="https://www.upwork.com" target="_blank">
<i className="h-5 w-5" data-lucide="briefcase"></i>
</a>
<a aria-label="Fiverr" className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900" href="https://www.fiverr.com" target="_blank">
<i className="h-5 w-5" data-lucide="link-2"></i>
</a>
</div>
</div>

<div className="reveal">
<form className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="relative">
<input className="peer w-full rounded-md border border-neutral-200 bg-transparent px-3 pt-5 pb-2 text-sm outline-none transition focus:border-neutral-900 dark:border-neutral-800 dark:focus:border-neutral-100" id="name" placeholder=" " required="" type="text"/>
<label className="pointer-events-none absolute left-3 top-2 text-xs opacity-70 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs" htmlFor="name">Your name</label>
</div>
<div className="relative">
<input className="peer w-full rounded-md border border-neutral-200 bg-transparent px-3 pt-5 pb-2 text-sm outline-none transition focus:border-neutral-900 dark:border-neutral-800 dark:focus:border-neutral-100" id="email" placeholder=" " required="" type="email"/>
<label className="pointer-events-none absolute left-3 top-2 text-xs opacity-70 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs" htmlFor="email">Email</label>
</div>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="relative">
<input className="peer w-full rounded-md border border-neutral-200 bg-transparent px-3 pt-5 pb-2 text-sm outline-none transition focus:border-neutral-900 dark:border-neutral-800 dark:focus:border-neutral-100" id="budget" placeholder=" " type="text"/>
<label className="pointer-events-none absolute left-3 top-2 text-xs opacity-70 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs" htmlFor="budget">Budget (optional)</label>
</div>
<div className="relative">
<input className="peer w-full rounded-md border border-neutral-200 bg-transparent px-3 pt-5 pb-2 text-sm outline-none transition focus:border-neutral-900 dark:border-neutral-800 dark:focus:border-neutral-100" id="timeline" placeholder=" " type="text"/>
<label className="pointer-events-none absolute left-3 top-2 text-xs opacity-70 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs" htmlFor="timeline">Timeline (optional)</label>
</div>
</div>
<div className="mt-4 relative">
<textarea className="peer w-full rounded-md border border-neutral-200 bg-transparent px-3 pt-5 pb-2 text-sm outline-none transition focus:border-neutral-900 dark:border-neutral-800 dark:focus:border-neutral-100" id="message" placeholder=" " required="" rows="5"></textarea>
<label className="pointer-events-none absolute left-3 top-2 text-xs opacity-70 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs" htmlFor="message">Tell me about your project</label>
</div>
<button className="mt-6 inline-flex items-center gap-2 rounded-md border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm font-[500] text-white hover:bg-neutral-800 active:scale-[0.98] dark:border-white dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100" type="submit">
                Send message
                <i className="h-4 w-4" data-lucide="send"></i>
</button>
</form>
</div>
</div>
</section>
</main>

<footer className="border-t border-neutral-200 py-10 dark:border-neutral-800">
<div className="mx-auto max-w-7xl px-4">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800">
<span className="text-sm font-[600] tracking-tight" style={{fontFamily: 'Space Grotesk'}}>S</span>
</div>
<span className="text-sm opacity-80">© <span id="year"></span> Syed Aarish Ali</span>
</div>
<div className="flex items-center gap-4 text-sm opacity-80">
<a className="hover:opacity-100" href="#home">Home</a>
<a className="hover:opacity-100" href="#about">About</a>
<a className="hover:opacity-100" href="#portfolio">Work</a>
<a className="hover:opacity-100" href="#services">Services</a>
<a className="hover:opacity-100" href="#blog">Blog</a>
<a className="hover:opacity-100" href="#contact">Contact</a>
</div>
</div>
</div>
</footer>


<style>
      /* Ensure Inter/Space Grotesk usage across */
      body { font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial; }
      h1,h2,h3,h4 { font-family: "Space Grotesk", Inter, ui-sans-serif, system-ui; }
    </style>

    </>
  );
}
