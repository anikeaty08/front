import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



{
"@context": "https://schema.org",
"@type": "Person",
"name": "Smit Patel",
"jobTitle": "Data Analyst / Data Engineer",
"url": "https://smit-patel.dev/",
"sameAs": [
"https://github.com/Smit-1103",
"https://www.linkedin.com/in/smit-patel-34848a210/"
],
"knowsAbout": ["SQL", "Python", "Power BI", "AWS", "ETL", "Data Warehousing"],
"worksFor": {
"@type": "Organization",
"name": "Independent / Open to opportunities"
},
"hasPart": [
{
"@type": "SoftwareSourceCode",
"name": "Recruitment Analytics Platform",
"programmingLanguage": ["Python", "SQL"],
"codeRepository": "https://github.com/S-1103"
},
{
"@type": "SoftwareSourceCode",
"name": "Reporting Automation Pipeline",
"programmingLanguage": ["Python"],
"codeRepository": "https://github.com/Smit-1103"
},
{
"@type": "SoftwareSourceCode",
"name": "License Optimization Analyzer",
"programmingLanguage": ["Python"],
"codeRepository": "https://github.com/Smit-1103"
}
]
}



      // Utilities
      const $ = (s, r = document) => r.querySelector(s);
      const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
      const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
      const lerp = (a, b, t) => a + (b - a) * t;

      // Year
      $('#year').textContent = new Date().getFullYear();

      // Icon init
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });

      // Theme toggle (fix: remove forced dark default)
      (function themeInit() {
        const saved = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialDark = saved ? saved === 'dark' : prefersDark;
        document.body.classList.toggle('dark', initialDark);
        applyThemeAccentMeta();
        updateThemeIcon(initialDark);

        const btn = $('#theme-toggle');
        btn?.addEventListener('click', () => {
          const nowDark = !document.body.classList.contains('dark');
          document.body.classList.toggle('dark', nowDark);
          localStorage.setItem('theme', nowDark ? 'dark' : 'light');
          updateThemeIcon(nowDark);
          applyThemeAccentMeta();
          // Repaint background for theme
          if (bg) { bg.theme = nowDark ? 'dark' : 'light'; }
        });

        function updateThemeIcon(isDark) {
          const icon = $('#theme-toggle i');
          icon?.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
          if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }

        function applyThemeAccentMeta() {
          const meta = document.getElementById('meta-theme-color');
          if (meta) meta.setAttribute('content', getComputedStyle(document.body).getPropertyValue('--accent').trim() || '#0ea5e9');
        }
      })();

      // Mobile menu
      (function mobileNav() {
        const btn = $('#menu-btn');
        const nav = $('#mobile-nav');
        if (!btn || !nav) return;
        btn.addEventListener('click', () => {
          const open = nav.classList.contains('hidden');
          nav.classList.toggle('hidden', !open);
          btn.setAttribute('aria-expanded', String(open));
          btn.querySelector('i')?.setAttribute('data-lucide', open ? 'x' : 'menu');
          if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        });
        $$('#mobile-nav a').forEach(a =>
          a.addEventListener('click', () => {
            nav.classList.add('hidden');
            btn.setAttribute('aria-expanded', 'false');
            btn.querySelector('i')?.setAttribute('data-lucide', 'menu');
            if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          })
        );
      })();

      // Smooth in-page scroll with header offset
      (function smoothAnchors() {
        const header = document.querySelector('header');
        function scrollToHash(hash) {
          const id = hash.replace('#', '');
          const target = document.getElementById(id);
          if (!target) return;
          const headerH = header ? header.getBoundingClientRect().height : 0;
          const y = target.getBoundingClientRect().top + window.scrollY - headerH - 8;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
        document.addEventListener('click', (e) => {
          const a = e.target.closest('a[href^="#"]');
          if (!a) return;
          const href = a.getAttribute('href') || '';
          if (href.length > 1) {
            e.preventDefault();
            scrollToHash(href);
            history.pushState(null, '', href);
          }
        });
        // On load with hash
        if (location.hash) setTimeout(() => scrollToHash(location.hash), 0);
      })();

      // Accent color from GitHub avatar (fallback to hash if blocked)
      (async function accentFromAvatar() {
        const fallback = hashToHsl('Smit-1103');
        let accent = fallback;
        try {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.src = 'https://github.com/Smit-1103.png';
          await img.decode();
          const c = document.createElement('canvas');
          c.width = img.naturalWidth; c.height = img.naturalHeight;
          const ctx = c.getContext('2d');
          ctx.drawImage(img, 0, 0);
          const data = ctx.getImageData(0, 0, c.width, c.height).data;
          let r=0,g=0,b=0,count=0,step=10;
          for (let i=0; i<data.length; i+=4*step) { r+=data[i]; g+=data[i+1]; b+=data[i+2]; count++; }
          r=Math.round(r/count); g=Math.round(g/count); b=Math.round(b/count);
          const hsl = rgbToHsl(r,g,b);
          accent = `hsl(${Math.round(hsl.h)}, ${Math.min(70, Math.max(45, Math.round(hsl.s*100)))}%, ${Math.min(58, Math.max(45, Math.round(hsl.l*100)))}%)`;
        } catch(e) { accent = fallback; }
        document.body.style.setProperty('--accent', accent);
        const meta = document.getElementById('meta-theme-color');
        if (meta) meta.setAttribute('content', accent);
      })();

      function hashToHsl(str){
        let h=0;
        for(let i=0;i<str.length;i++){ h = str.charCodeAt(i) + ((h<<5) - h); }
        h = Math.abs(h) % 360;
        return `hsl(${h}, 60%, 52%)`;
      }
      function rgbToHsl(r,g,b){
        r/=255; g/=255; b/=255;
        const max = Math.max(r,g,b), min = Math.min(r,g,b);
        let h, s, l = (max + min) / 2;
        if (max === min) { h = s = 0; } else {
          const d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
          }
          h /= 6;
        }
        return { h: h * 360, s, l };
      }

      // Reveal animations for main sections (lightweight, preserves layout)
      (function reveal() {
        const els = $$('section[data-animate]');
        const setInitial = (el) => {
          el.style.opacity = '0';
          el.style.transform = 'translateY(10px)';
          el.style.transition = 'opacity .6s cubic-bezier(.2,.7,.2,1), transform .6s cubic-bezier(.2,.7,.2,1)';
          el.style.willChange = 'opacity, transform';
        };
        const show = (el, delay = 0) => {
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, delay);
        };
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              show(entry.target);
              io.unobserve(entry.target);
            }
          });
        }, { threshold: 0.08, rootMargin: '0px 0px -10% 0px' });
        els.forEach((el, i) => { setInitial(el); io.observe(el); });
      })();

      // Particle background (responsive, parallax to cursor)
      const bg = (function particleBG(){
        const canvas = document.getElementById('bg-canvas');
        if (!canvas) return null;
        const ctx = canvas.getContext('2d');
        let dpr = Math.max(1, window.devicePixelRatio || 1);
        let w = 0, h = 0, particles = [], pointer = { x: null, y: null, vx: 0, vy: 0 }, theme = document.body.classList.contains('dark') ? 'dark' : 'light';
        const state = { linkDist: 120, count: 0, tick: 0 };

        function resize() {
          dpr = Math.max(1, window.devicePixelRatio || 1);
          w = canvas.clientWidth; h = canvas.clientHeight;
          canvas.width = Math.floor(w * dpr);
          canvas.height = Math.floor(h * dpr);
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          const density = 0.00012; // particles per pixel
          state.count = clamp(Math.floor(w * h * density), 80, 240);
          if (particles.length === 0) init();
        }

        function init() {
          particles = [];
          for (let i=0; i<state.count; i++) {
            particles.push({
              x: Math.random() * w,
              y: Math.random() * h,
              vx: (Math.random() - 0.5) * 0.4,
              vy: (Math.random() - 0.5) * 0.4,
              r: Math.random() * 1.6 + 0.4
            });
          }
        }

        function bgGradient() {
          if (theme === 'dark') {
            const g = ctx.createLinearGradient(0,0,0,h);
            g.addColorStop(0, '#0b1020');
            g.addColorStop(1, '#0a0a0a');
            return g;
          } else {
            const g = ctx.createLinearGradient(0,0,0,h);
            g.addColorStop(0, '#f7fafc');
            g.addColorStop(1, '#e8eef5');
            return g;
          }
        }

        function draw() {
          state.tick++;
          // Background
          ctx.fillStyle = bgGradient();
          ctx.fillRect(0,0,w,h);

          // Colors
          const accent = getComputedStyle(document.body).getPropertyValue('--accent').trim() || '#0ea5e9';
          const particleColor = theme === 'dark' ? accent : '#0b1725';
          const lineColor = theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(15,23,42,0.08)';

          // Update + draw particles
          for (let i=0; i<particles.length; i++) {
            const p = particles[i];
            // mild pointer parallax
            if (pointer.x !== null && pointer.y !== null) {
              const dx = p.x - pointer.x, dy = p.y - pointer.y;
              const dist2 = dx*dx + dy*dy;
              const pull = dist2 > 0 ? Math.min(0.12, 60 / dist2) : 0;
              p.vx -= dx * pull * 0.003;
              p.vy -= dy * pull * 0.003;
            }
            p.x += p.vx; p.y += p.vy;
            // friction and gentle drift
            p.vx *= 0.995; p.vy *= 0.995;
            p.vx += Math.cos((i + state.tick * 0.003)) * 0.002;
            p.vy += Math.sin((i + state.tick * 0.002)) * 0.002;

            // wrap around edges
            if (p.x < -10) p.x = w + 10;
            if (p.x > w + 10) p.x = -10;
            if (p.y < -10) p.y = h + 10;
            if (p.y > h + 10) p.y = -10;
          }

          // Lines between near neighbors
          ctx.strokeStyle = lineColor;
          for (let i=0; i<particles.length; i++) {
            for (let j=i+1; j<particles.length; j++) {
              const a = particles[i], b = particles[j];
              const dx = a.x - b.x, dy = a.y - b.y;
              const d = Math.hypot(dx, dy);
              if (d < state.linkDist) {
                ctx.globalAlpha = (1 - d / state.linkDist) * 0.6;
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.stroke();
              }
            }
          }
          ctx.globalAlpha = 1;

          // Particles
          ctx.fillStyle = particleColor;
          for (let i=0; i<particles.length; i++) {
            const p = particles[i];
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
          }

          requestAnimationFrame(draw);
        }

        function onPointer(e) {
          const x = 'clientX' in e ? e.clientX : (e.touches?.[0]?.clientX ?? 0);
          const y = 'clientY' in e ? e.clientY : (e.touches?.[0]?.clientY ?? 0);
          pointer.x = x; pointer.y = y;
        }

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', onPointer, { passive: true });
        window.addEventListener('touchmove', onPointer, { passive: true });

        resize(); init(); requestAnimationFrame(draw);
        return { set theme(v){ theme = v; } };
      })();

      // Custom cursor (dot + ring)
      (function cursor() {
        const dot = $('#cursor-dot');
        const ring = $('#cursor-ring');
        if (!dot || !ring) return;
        let x = window.innerWidth / 2, y = window.innerHeight / 2;
        let rx = x, ry = y; // ring smoothed
        let rSize = 34;
        const update = () => {
          rx = lerp(rx, x, 0.18);
          ry = lerp(ry, y, 0.18);
          ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
          dot.style.left = x + 'px'; dot.style.top = y + 'px';
          requestAnimationFrame(update);
        };
        update();

        window.addEventListener('mousemove', (e) => {
          x = e.clientX; y = e.clientY;
        }, { passive: true });

        // Hover states on interactive elements
        const interactors = 'a, button, [role="button"], input, textarea, select, summary, label';
        document.addEventListener('mouseover', (e) => {
          const t = e.target.closest(interactors);
          if (t) {
            ring.style.borderColor = 'var(--accent)';
            ring.style.backgroundColor = 'color-mix(in srgb, var(--accent) 10%, transparent)';
            rSize = 42; ring.style.width = rSize + 'px'; ring.style.height = rSize + 'px';
          }
        });
        document.addEventListener('mouseout', (e) => {
          const t = e.target.closest(interactors);
          if (t) {
            ring.style.borderColor = 'color-mix(in srgb, var(--accent) 60%, transparent)';
            ring.style.backgroundColor = 'transparent';
            rSize = 34; ring.style.width = rSize + 'px'; ring.style.height = rSize + 'px';
          }
        });

        // Hide cursor during scroll for performance
        let scrollTO;
        window.addEventListener('scroll', () => {
          ring.style.opacity = '.7'; dot.style.opacity = '.7';
          clearTimeout(scrollTO);
          scrollTO = setTimeout(() => { ring.style.opacity = '1'; dot.style.opacity = '.9'; }, 120);
        }, { passive: true });
      })();

      // README modal interactions
      (function readmeModal(){
        const open = $('#readme-btn'), modal = $('#readme-modal'), close = $('#readme-close');
        if (!open || !modal || !close) return;
        open.addEventListener('click', () => { modal.classList.remove('hidden'); modal.classList.add('flex'); });
        close.addEventListener('click', () => { modal.classList.add('hidden'); modal.classList.remove('flex'); });
        modal.addEventListener('click', (e) => { if (e.target === modal) { modal.classList.add('hidden'); modal.classList.remove('flex'); }});
      })();

      // Ensure external links (GitHub/LinkedIn) are not intercepted and work
      (function externalLinkSafety(){
        $$('a[target="_blank"]').forEach(a => {
          a.addEventListener('click', (e) => {
            // Allow default; no interception for smooth scroll
            e.stopPropagation();
          });
        });
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<a className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:top-3 focus:left-3 focus:px-3 focus:py-2 focus:rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-neutral-900 bg-neutral-800 text-neutral-100" href="#content">Skip to content</a>

<div className="relative isolate" id="app">

<div className="pointer-events-none fixed inset-0 -z-20">
<canvas className="w-full h-full block" id="bg-canvas"></canvas>
</div>

<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10" style="
          background:
            radial-gradient(1200px 600px at 80% -10%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 60%),
            radial-gradient(900px 500px at -10% 20%, color-mix(in srgb, var(--accent) 10%, transparent), transparent 70%),
            linear-gradient(180deg, rgba(0,0,0,.35), rgba(0,0,0,0));
          mask-image: radial-gradient(1200px 600px at 80% -10%, rgba(0,0,0,.55), transparent 70%),
                       radial-gradient(900px 500px at -10% 20%, rgba(0,0,0,.45), transparent 75%);
          mask-composite: exclude;
          opacity: .8;
        "></div>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/70 border-b border-neutral-800" role="banner">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between">
<a aria-label="Homepage" className="inline-flex items-center gap-2 rounded-md px-1 py-1 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900" href="#home">
<div className="text-lg font-semibold tracking-tight leading-none" style={{letterSpacing: '-0.02em'}}>
<span className="px-2 py-1 rounded-md ring-1 ring-neutral-800/80 bg-neutral-900/60 group-hover:bg-neutral-900 transition-colors">SP</span>
<span className="sr-only">Smit Patel</span>
</div>
</a>
<nav aria-label="Primary" className="hidden md:flex items-center gap-6 text-sm">
<a className="text-neutral-300 hover:text-neutral-100 transition-colors underline decoration-transparent underline-offset-4 hover:decoration-[var(--accent)]" href="#projects">Projects</a>
<a className="text-neutral-300 hover:text-neutral-100 transition-colors underline decoration-transparent underline-offset-4 hover:decoration-[var(--accent)]" href="#experience">Experience</a>
<a className="text-neutral-300 hover:text-neutral-100 transition-colors underline decoration-transparent underline-offset-4 hover:decoration-[var(--accent)]" href="#resume">Resume</a>
<a className="text-neutral-300 hover:text-neutral-100 transition-colors underline decoration-transparent underline-offset-4 hover:decoration-[var(--accent)]" href="#blog">Blog</a>
<a className="text-neutral-300 hover:text-neutral-100 transition-colors underline decoration-transparent underline-offset-4 hover:decoration-[var(--accent)]" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-1">
<a aria-label="GitHub profile" className="p-2 rounded-md hover:bg-neutral-900/60 ring-1 ring-transparent hover:ring-neutral-800/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900" href="https://github.com/Smit-1103" rel="noopener noreferrer" target="_blank">
<i className="w-5 h-5" data-lucide="github"></i>
</a>
<a aria-label="LinkedIn profile" className="p-2 rounded-md hover:bg-neutral-900/60 ring-1 ring-transparent hover:ring-neutral-800/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900" href="https://www.linkedin.com/in/smit-patel-34848a210/" rel="noopener noreferrer" target="_blank">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
<button aria-label="Toggle theme" className="ml-1 p-2 rounded-md hover:bg-neutral-900/60 ring-1 ring-transparent hover:ring-neutral-800/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900" id="theme-toggle" title="Toggle theme">
<i aria-hidden="true" className="w-5 h-5" data-lucide="moon"></i>
</button>
<button aria-controls="mobile-nav" aria-expanded="false" aria-label="Open menu" className="md:hidden ml-1 p-2 rounded-md hover:bg-neutral-900/60 ring-1 ring-transparent hover:ring-neutral-800/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900" id="menu-btn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
</div>

<div className="md:hidden hidden border-t border-neutral-800" id="mobile-nav">
<div className="px-4 pb-4 pt-2 space-y-1">
<a className="block px-3 py-2 rounded-md text-neutral-200 hover:bg-neutral-900/60 hover:text-white ring-1 ring-transparent hover:ring-neutral-800/80" href="#projects">Projects</a>
<a className="block px-3 py-2 rounded-md text-neutral-200 hover:bg-neutral-900/60 hover:text-white ring-1 ring-transparent hover:ring-neutral-800/80" href="#experience">Experience</a>
<a className="block px-3 py-2 rounded-md text-neutral-200 hover:bg-neutral-900/60 hover:text-white ring-1 ring-transparent hover:ring-neutral-800/80" href="#resume">Resume</a>
<a className="block px-3 py-2 rounded-md text-neutral-200 hover:bg-neutral-900/60 hover:text-white ring-1 ring-transparent hover:ring-neutral-800/80" href="#blog">Blog</a>
<a className="block px-3 py-2 rounded-md text-neutral-200 hover:bg-neutral-900/60 hover:text-white ring-1 ring-transparent hover:ring-neutral-800/80" href="#contact">Contact</a>
</div>
</div>
</header>
<main className="relative" id="content">

<section className="relative" data-animate="" id="home">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-16 sm:py-24 lg:py-28 grid lg:grid-cols-12 gap-8">
<div className="lg:col-span-7">
<p className="text-sm text-neutral-400 mb-3">Open to Data roles</p>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1]" style={{letterSpacing: '-0.02em'}}>
                  Smit Patel
                </h1>
<p className="mt-3 text-lg text-neutral-300">
                  Data Analyst / Data Engineer — SQL, Python, Power BI, AWS. I build reliable data
                  systems that speed up decisions and reduce cost.
                </p>
<div className="mt-7 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2 ring-1 ring-neutral-800 bg-neutral-900/60 hover:bg-neutral-900 text-neutral-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950" href="#projects">
<i className="w-4 h-4" data-lucide="rocket"></i>
                    View Projects
                  </a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2 ring-1 ring-[color:var(--accent)]/40 hover:ring-[color:var(--accent)] bg-[color:var(--accent)]/10 hover:bg-[color:var(--accent)]/15 text-[color:var(--accent)] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950" download="" href="/mnt/data/Full_time_Data.pdf">
<i className="w-4 h-4" data-lucide="download"></i>
                    Download Resume
                  </a>
</div>

<div aria-label="Key performance impact" className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3" role="list">
<div className="rounded-lg border border-neutral-800/80 bg-neutral-900/40 p-4 hover:-translate-y-0.5 transition-transform">
<p className="text-sm text-neutral-400">Reporting speed</p>
<p className="mt-1 text-2xl font-semibold tracking-tight">
                      40% faster
                    </p>
</div>
<div className="rounded-lg border border-neutral-800/80 bg-neutral-900/40 p-4 hover:-translate-y-0.5 transition-transform">
<p className="text-sm text-neutral-400">Licensing cost</p>
<p className="mt-1 text-2xl font-semibold tracking-tight">
                      $15k/yr saved
                    </p>
</div>
<div className="rounded-lg border border-neutral-800/80 bg-neutral-900/40 p-4 hover:-translate-y-0.5 transition-transform">
<p className="text-sm text-neutral-400">Coverage</p>
<p className="mt-1 text-2xl font-semibold tracking-tight">
                      20+ countries
                    </p>
</div>
</div>
</div>
<div className="lg:col-span-5">

<div className="rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-5">
<h2 className="text-xl font-semibold tracking-tight">Tech Stack</h2>
<div className="mt-4 space-y-4">
<div>
<p className="text-sm text-neutral-400 mb-2">Analytics &amp; BI</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-md border border-neutral-800/80 bg-neutral-900/60 text-sm">Power BI</span>
<span className="px-3 py-1 rounded-md border border-neutral-800/80 bg-neutral-900/60 text-sm">Excel</span>
</div>
</div>
<div>
<p className="text-sm text-neutral-400 mb-2">Programming</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-md border border-neutral-800/80 bg-neutral-900/60 text-sm">Python</span>
<span className="px-3 py-1 rounded-md border border-neutral-800/80 bg-neutral-900/60 text-sm">SQL</span>
<span className="px-3 py-1 rounded-md border border-neutral-800/80 bg-neutral-900/60 text-sm">Bash</span>
</div>
</div>
<div>
<p className="text-sm text-neutral-400 mb-2">Data</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-md border border-neutral-800/80 bg-neutral-900/60 text-sm">Pandas</span>
<span className="px-3 py-1 rounded-md border border-neutral-800/80 bg-neutral-900/60 text-sm">NumPy</span>
<span className="px-3 py-1 rounded-md border border-neutral-800/80 bg-neutral-900/60 text-sm">SQL Server</span>
</div>
</div>
<div>
<p className="text-sm text-neutral-400 mb-2">Platforms / ETL</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-md border border-neutral-800/80 bg-neutral-900/60 text-sm">AWS</span>
<span className="px-3 py-1 rounded-md border border-neutral-800/80 bg-neutral-900/60 text-sm">S3</span>
<span className="px-3 py-1 rounded-md border border-neutral-800/80 bg-neutral-900/60 text-sm">Glue</span>
<span className="px-3 py-1 rounded-md border border-neutral-800/80 bg-neutral-900/60 text-sm">Lambda</span>
</div>
</div>
</div>
<div className="mt-5 flex items-center gap-3">
<a className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-neutral-100 underline decoration-transparent underline-offset-4 hover:decoration-[var(--accent)]" href="https://github.com/Smit-1103/" rel="noopener noreferrer" target="_blank">
<i className="w-4 h-4" data-lucide="github"></i> GitHub
                    </a>
<a className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-neutral-100 underline decoration-transparent underline-offset-4 hover:decoration-[var(--accent)]" href="https://www.linkedin.com/in/smit-patel-34848a210/" rel="noopener noreferrer" target="_blank">
<i className="w-4 h-4" data-lucide="linkedin"></i> LinkedIn
                    </a>
</div>
</div>

<div className="mt-6 rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-5">
<h3 className="text-lg font-semibold tracking-tight">What I deliver</h3>
<div className="mt-3 grid sm:grid-cols-3 gap-3">
<div className="rounded-lg border border-neutral-800/80 p-4">
<p className="text-sm text-neutral-400">Impact</p>
<ul className="mt-2 text-sm text-neutral-200 space-y-1.5">
<li>Cut reporting cycles by 40% via automated pipelines.</li>
<li>Saved $15k/yr by consolidating BI licenses.</li>
</ul>
</div>
<div className="rounded-lg border border-neutral-800/80 p-4">
<p className="text-sm text-neutral-400">Systems</p>
<ul className="mt-2 text-sm text-neutral-200 space-y-1.5">
<li>Built resilient AWS data flows (S3, Glue, Lambda).</li>
<li>Modeled star schemas powering self-serve BI.</li>
</ul>
</div>
<div className="rounded-lg border border-neutral-800/80 p-4">
<p className="text-sm text-neutral-400">Analytics</p>
<ul className="mt-2 text-sm text-neutral-200 space-y-1.5">
<li>Multi-region talent analytics across 20+ countries.</li>
<li>Forecasting and KPI tracking in Power BI.</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20 border-t border-neutral-900" data-animate="" id="projects">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between gap-4">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Projects</h2>
<a className="text-sm text-neutral-300 hover:text-neutral-100 underline decoration-transparent underline-offset-4 hover:decoration-[var(--accent)]" href="https://github.com/Smit-1103" rel="noopener noreferrer" target="_blank">See all</a>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group rounded-xl border border-neutral-800/80 bg-neutral-900/40 hover:bg-neutral-900/60 transition-colors hover:-translate-y-0.5 motion-reduce:transform-none ring-1 ring-transparent hover:ring-neutral-700/80 p-5 flex flex-col">
<div className="aspect-[16/9] rounded-lg mb-4 overflow-hidden ring-1 ring-neutral-800/60">

<svg className="w-full h-full block" viewbox="0 0 800 450">
<defs>
<lineargradient id="g1" x1="0" x2="1" y1="0" y2="1">
<stop offset="0" stop-color="rgba(14,165,233,0.15)"></stop>
<stop offset="1" stop-color="rgba(14,165,233,0.05)"></stop>
</lineargradient>
</defs>
<rect fill="url(#g1)" height="450" width="800"></rect>
<g fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2">
<path d="M0,380 C200,320 400,430 800,340"></path>
<path d="M0,260 C250,220 450,300 800,240"></path>
<path d="M0,160 C180,130 420,200 800,160"></path>
</g>
<text fill="rgba(255,255,255,.9)" fontFamily="Inter, system-ui" fontSize="22" style={{fontWeight: '600', letterSpacing: '-0.02em'}} x="40" y="70">Recruitment Analytics Platform</text>
<text fill="rgba(255,255,255,.7)" fontFamily="Inter, system-ui" fontSize="14" x="40" y="102">Multi-region insights across 20+ countries</text>
</svg>
</div>
<h3 className="text-lg font-semibold tracking-tight">Recruitment Analytics Platform</h3>
<p className="mt-1 text-sm text-neutral-300">
                  Unified hiring funnel metrics across 20+ countries with automated refresh and governance.
                </p>
<div className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-300">
<span className="px-2 py-1 rounded-md border border-neutral-800/80">Python</span>
<span className="px-2 py-1 rounded-md border border-neutral-800/80">SQL</span>
<span className="px-2 py-1 rounded-md border border-neutral-800/80">Power BI</span>
<span className="px-2 py-1 rounded-md border border-neutral-800/80">AWS</span>
</div>
<div className="mt-4 flex items-center gap-3 text-sm">
<a className="inline-flex items-center gap-1 text-neutral-300 hover:text-neutral-100 underline decoration-transparent underline-offset-4 hover:decoration-[var(--accent)]" href="https://github.com/Smit-1103" rel="noopener noreferrer" target="_blank">
<i className="w-4 h-4" data-lucide="github"></i> Repo
                  </a>
<a className="inline-flex items-center gap-1 text-neutral-300 hover:text-neutral-100 underline decoration-transparent underline-offset-4 hover:decoration-[var(--accent)]" href="#">
<i className="w-4 h-4" data-lucide="link"></i> Live
                  </a>
</div>
</article>
<article className="group rounded-xl border border-neutral-800/80 bg-neutral-900/40 hover:bg-neutral-900/60 transition-colors hover:-translate-y-0.5 motion-reduce:transform-none ring-1 ring-transparent hover:ring-neutral-700/80 p-5 flex flex-col">
<div className="aspect-[16/9] rounded-lg mb-4 overflow-hidden ring-1 ring-neutral-800/60">
<svg className="w-full h-full block" viewbox="0 0 800 450">
<defs>
<lineargradient id="g2" x1="0" x2="1" y1="0" y2="1">
<stop offset="0" stop-color="rgba(14,165,233,0.15)"></stop>
<stop offset="1" stop-color="rgba(14,165,233,0.05)"></stop>
</lineargradient>
</defs>
<rect fill="url(#g2)" height="450" width="800"></rect>
<g fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2">
<path d="M0,420 C240,360 480,460 800,380"></path>
<path d="M0,300 C250,260 470,340 800,280"></path>
</g>
<text fill="rgba(255,255,255,.9)" fontFamily="Inter, system-ui" fontSize="22" style={{fontWeight: '600', letterSpacing: '-0.02em'}} x="40" y="70">Reporting Automation Pipeline</text>
<text fill="rgba(255,255,255,.7)" fontFamily="Inter, system-ui" fontSize="14" x="40" y="102">40% faster reporting cycles</text>
</svg>
</div>
<h3 className="text-lg font-semibold tracking-tight">Reporting Automation Pipeline</h3>
<p className="mt-1 text-sm text-neutral-300">
                  End-to-end ETL that reduced reporting cycles by 40% with validated datasets and audits.
                </p>
<div className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-300">
<span className="px-2 py-1 rounded-md border border-neutral-800/80">Python</span>
<span className="px-2 py-1 rounded-md border border-neutral-800/80">Pandas</span>
<span className="px-2 py-1 rounded-md border border-neutral-800/80">AWS Lambda</span>
<span className="px-2 py-1 rounded-md border border-neutral-800/80">S3</span>
</div>
<div className="mt-4 flex items-center gap-3 text-sm">
<a className="inline-flex items-center gap-1 text-neutral-300 hover:text-neutral-100 underline decoration-transparent underline-offset-4 hover:decoration-[var(--accent)]" href="https://github.com/Smit-1103" rel="noopener noreferrer" target="_blank">
<i className="w-4 h-4" data-lucide="github"></i> Repo
                  </a>
</div>
</article>
<article className="group rounded-xl border border-neutral-800/80 bg-neutral-900/40 hover:bg-neutral-900/60 transition-colors hover:-translate-y-0.5 motion-reduce:transform-none ring-1 ring-transparent hover:ring-neutral-700/80 p-5 flex flex-col">
<div className="aspect-[16/9] rounded-lg mb-4 overflow-hidden ring-1 ring-neutral-800/60">
<svg className="w-full h-full block" viewbox="0 0 800 450">
<defs>
<lineargradient id="g3" x1="0" x2="1" y1="0" y2="1">
<stop offset="0" stop-color="rgba(14,165,233,0.15)"></stop>
<stop offset="1" stop-color="rgba(14,165,233,0.05)"></stop>
</lineargradient>
</defs>
<rect fill="url(#g3)" height="450" width="800"></rect>
<g fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2">
<path d="M0,380 C200,360 400,320 800,340"></path>
<path d="M0,180 C200,180 400,180 800,180"></path>
</g>
<text fill="rgba(255,255,255,.9)" fontFamily="Inter, system-ui" fontSize="22" style={{fontWeight: '600', letterSpacing: '-0.02em'}} x="40" y="70">License Optimization Analyzer</text>
<text fill="rgba(255,255,255,.7)" fontFamily="Inter, system-ui" fontSize="14" x="40" y="102">$15k/yr savings</text>
</svg>
</div>
<h3 className="text-lg font-semibold tracking-tight">License Optimization Analyzer</h3>
<p className="mt-1 text-sm text-neutral-300">
                  Identified unused seats and right-sized BI licenses to save $15k annually.
                </p>
<div className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-300">
<span className="px-2 py-1 rounded-md border border-neutral-800/80">Python</span>
<span className="px-2 py-1 rounded-md border border-neutral-800/80">SQL</span>
<span className="px-2 py-1 rounded-md border border-neutral-800/80">Power BI Admin</span>
</div>
<div className="mt-4 flex items-center gap-3 text-sm">
<a className="inline-flex items-center gap-1 text-neutral-300 hover:text-neutral-100 underline decoration-transparent underline-offset-4 hover:decoration-[var(--accent)]" href="https://github.com/Smit-1103" rel="noopener noreferrer" target="_blank">
<i className="w-4 h-4" data-lucide="github"></i> Repo
                  </a>
</div>
</article>
<article className="group rounded-xl border border-neutral-800/80 bg-neutral-900/40 hover:bg-neutral-900/60 transition-colors hover:-translate-y-0.5 motion-reduce:transform-none ring-1 ring-transparent hover:ring-neutral-700/80 p-5 flex flex-col">
<div className="aspect-[16/9] rounded-lg mb-4 overflow-hidden ring-1 ring-neutral-800/60">
<svg className="w-full h-full block" viewbox="0 0 800 450">
<defs>
<lineargradient id="g4" x1="0" x2="1" y1="0" y2="1">
<stop offset="0" stop-color="rgba(14,165,233,0.15)"></stop>
<stop offset="1" stop-color="rgba(14,165,233,0.05)"></stop>
</lineargradient>
</defs>
<rect fill="url(#g4)" height="450" width="800"></rect>
<g fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2">
<path d="M0,420 C220,320 500,520 800,360"></path>
</g>
<text fill="rgba(255,255,255,.9)" fontFamily="Inter, system-ui" fontSize="22" style={{fontWeight: '600', letterSpacing: '-0.02em'}} x="40" y="70">Sales BI Dashboard</text>
<text fill="rgba(255,255,255,.7)" fontFamily="Inter, system-ui" fontSize="14" x="40" y="102">KPIs with drilldowns</text>
</svg>
</div>
<h3 className="text-lg font-semibold tracking-tight">Sales BI Dashboard</h3>
<p className="mt-1 text-sm text-neutral-300">
                  Cross-filtered revenue and pipeline KPIs with row-level security and drill-through.
                </p>
<div className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-300">
<span className="px-2 py-1 rounded-md border border-neutral-800/80">Power BI</span>
<span className="px-2 py-1 rounded-md border border-neutral-800/80">DAX</span>
<span className="px-2 py-1 rounded-md border border-neutral-800/80">SQL</span>
</div>
<div className="mt-4 flex items-center gap-3 text-sm">
<a className="inline-flex items-center gap-1 text-neutral-300 hover:text-neutral-100 underline decoration-transparent underline-offset-4 hover:decoration-[var(--accent)]" href="#">
<i className="w-4 h-4" data-lucide="link"></i> Demo
                  </a>
</div>
</article>
<article className="group rounded-xl border border-neutral-800/80 bg-neutral-900/40 hover:bg-neutral-900/60 transition-colors hover:-translate-y-0.5 motion-reduce:transform-none ring-1 ring-transparent hover:ring-neutral-700/80 p-5 flex flex-col">
<div className="aspect-[16/9] rounded-lg mb-4 overflow-hidden ring-1 ring-neutral-800/60">
<svg className="w-full h-full block" viewbox="0 0 800 450">
<defs>
<lineargradient id="g5" x1="0" x2="1" y1="0" y2="1">
<stop offset="0" stop-color="rgba(14,165,233,0.15)"></stop>
<stop offset="1" stop-color="rgba(14,165,233,0.05)"></stop>
</lineargradient>
</defs>
<rect fill="url(#g5)" height="450" width="800"></rect>
<g fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2">
<path d="M0,400 C220,380 500,280 800,300"></path>
<path d="M0,260 C200,220 500,200 800,240"></path>
</g>
<text fill="rgba(255,255,255,.9)" fontFamily="Inter, system-ui" fontSize="22" style={{fontWeight: '600', letterSpacing: '-0.02em'}} x="40" y="70">AWS Data Lake Ingestion</text>
<text fill="rgba(255,255,255,.7)" fontFamily="Inter, system-ui" fontSize="14" x="40" y="102">S3 + Glue + Lambda</text>
</svg>
</div>
<h3 className="text-lg font-semibold tracking-tight">AWS Data Lake Ingestion</h3>
<p className="mt-1 text-sm text-neutral-300">
                  Serverless ingestion framework with schema validation and partitioned storage.
                </p>
<div className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-300">
<span className="px-2 py-1 rounded-md border border-neutral-800/80">AWS</span>
<span className="px-2 py-1 rounded-md border border-neutral-800/80">Glue</span>
<span className="px-2 py-1 rounded-md border border-neutral-800/80">Lambda</span>
<span className="px-2 py-1 rounded-md border border-neutral-800/80">S3</span>
</div>
<div className="mt-4 flex items-center gap-3 text-sm">
<a className="inline-flex items-center gap-1 text-neutral-300 hover:text-neutral-100 underline decoration-transparent underline-offset-4 hover:decoration-[var(--accent)]" href="https://github.com/Smit-1103" rel="noopener noreferrer" target="_blank">
<i className="w-4 h-4" data-lucide="github"></i> Repo
                  </a>
</div>
</article>
<article className="group rounded-xl border border-neutral-800/80 bg-neutral-900/40 hover:bg-neutral-900/60 transition-colors hover:-translate-y-0.5 motion-reduce:transform-none ring-1 ring-transparent hover:ring-neutral-700/80 p-5 flex flex-col">
<div className="aspect-[16/9] rounded-lg mb-4 overflow-hidden ring-1 ring-neutral-800/60">
<svg className="w-full h-full block" viewbox="0 0 800 450">
<defs>
<lineargradient id="g6" x1="0" x2="1" y1="0" y2="1">
<stop offset="0" stop-color="rgba(14,165,233,0.15)"></stop>
<stop offset="1" stop-color="rgba(14,165,233,0.05)"></stop>
</lineargradient>
</defs>
<rect fill="url(#g6)" height="450" width="800"></rect>
<g fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2">
<path d="M0,420 C200,300 500,500 800,340"></path>
</g>
<text fill="rgba(255,255,255,.9)" fontFamily="Inter, system-ui" fontSize="22" style={{fontWeight: '600', letterSpacing: '-0.02em'}} x="40" y="70">Data Quality Monitor</text>
<text fill="rgba(255,255,255,.7)" fontFamily="Inter, system-ui" fontSize="14" x="40" y="102">SLAs + anomaly alerts</text>
</svg>
</div>
<h3 className="text-lg font-semibold tracking-tight">Data Quality Monitor</h3>
<p className="mt-1 text-sm text-neutral-300">
                  Lightweight SLA checks and anomaly alerts to keep BI datasets trustworthy.
                </p>
<div className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-300">
<span className="px-2 py-1 rounded-md border border-neutral-800/80">Python</span>
<span className="px-2 py-1 rounded-md border border-neutral-800/80">AWS Lambda</span>
<span className="px-2 py-1 rounded-md border border-neutral-800/80">CloudWatch</span>
</div>
<div className="mt-4 flex items-center gap-3 text-sm">
<a className="inline-flex items-center gap-1 text-neutral-300 hover:text-neutral-100 underline decoration-transparent underline-offset-4 hover:decoration-[var(--accent)]" href="https://github.com/Smit-1103" rel="noopener noreferrer" target="_blank">
<i className="w-4 h-4" data-lucide="github"></i> Repo
                  </a>
</div>
</article>
</div>
<p className="mt-6 text-sm text-neutral-400">
              Tags: analytics, bi, pipelines, aws, forecasting, governance
            </p>
</div>
</section>

<section className="py-14 sm:py-20 border-t border-neutral-900" data-animate="" id="experience">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Experience</h2>
<ol className="mt-8 relative">
<div aria-hidden="true" className="absolute left-3 sm:left-4 top-0 bottom-0 w-px bg-neutral-800"></div>
<li className="pl-10 sm:pl-12 relative">
<div aria-hidden="true" className="absolute left-0 top-1.5 sm:left-1.5 h-3.5 w-3.5 rounded-full bg-[color:var(--accent)] ring-4 ring-neutral-950"></div>
<div className="rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-5">
<div className="flex flex-wrap items-center justify-between gap-2">
<div>
<h3 className="text-lg font-semibold tracking-tight">
                        Data Analyst — Acme Talent
                      </h3>
<p className="text-sm text-neutral-400">
                        Jan 2023 – Present • Remote
                      </p>
</div>
<div className="text-sm text-neutral-300">
                      SQL, Python, Power BI, AWS
                    </div>
</div>
<ul className="mt-3 space-y-2 text-sm text-neutral-200">
<li>
                      • Reduced reporting cycle time by 40% by automating ETL and dashboard refreshes across 20+ regions.
                    </li>
<li>
                      • Built recruitment analytics with funnel conversion, time‑to‑hire, and cohort trends covering 20+ countries.
                    </li>
<li>
                      • Implemented data quality checks and alerts, cutting refresh failures by 60%.
                    </li>
</ul>
</div>
</li>
<li className="pl-10 sm:pl-12 relative mt-6">
<div aria-hidden="true" className="absolute left-0 top-1.5 sm:left-1.5 h-3.5 w-3.5 rounded-full bg-[color:var(--accent)] ring-4 ring-neutral-950"></div>
<div className="rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-5">
<div className="flex flex-wrap items-center justify-between gap-2">
<div>
<h3 className="text-lg font-semibold tracking-tight">
                        Data Engineer — Nimbus Analytics
                      </h3>
<p className="text-sm text-neutral-400">
                        Jun 2021 – Dec 2022 • Hybrid
                      </p>
</div>
<div className="text-sm text-neutral-300">
                      AWS, Python, SQL, Power BI
                    </div>
</div>
<ul className="mt-3 space-y-2 text-sm text-neutral-200">
<li>
                      • Consolidated BI tooling and rightsized licenses to save $15k per year.
                    </li>
<li>
                      • Developed serverless ingestion on AWS (S3, Glue, Lambda) with schema versioning and lineage.
                    </li>
<li>
                      • Modeled dimensional marts to enable self‑serve analytics and reduced ad‑hoc requests by 35%.
                    </li>
</ul>
</div>
</li>
</ol>
</div>
</section>

<section className="py-14 sm:py-20 border-t border-neutral-900 print:block" data-animate="" id="resume">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-wrap items-center justify-between gap-3">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Resume
              </h2>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-md px-3 py-2 ring-1 ring-[color:var(--accent)]/40 hover:ring-[color:var(--accent)] bg-[color:var(--accent)]/10 hover:bg-[color:var(--accent)]/15 text-[color:var(--accent)] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950" download="" href="/mnt/data/Full_time_Data.pdf">
<i className="w-4 h-4" data-lucide="download"></i>
                  Download PDF
                </a>
<button className="inline-flex items-center gap-2 rounded-md px-3 py-2 ring-1 ring-neutral-800/80 hover:bg-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950" onclick="window.print()">
<i className="w-4 h-4" data-lucide="printer"></i> Print
                </button>
</div>
</div>
<div className="mt-6 rounded-xl border border-neutral-800/80 bg-neutral-900/40 overflow-hidden">
<object className="w-full" data="/mnt/data/Full_time_Data.pdf#view=FitH" style={{height: 'min(90vh, 1000px)'}} type="application/pdf">
<div className="p-6 text-sm">
<p className="text-neutral-300">
                    PDF preview isn’t supported in this browser. You can
                    <a className="underline decoration-transparent underline-offset-4 hover:decoration-[var(--accent)] text-[color:var(--accent)]" href="/mnt/data/Full_time_Data.pdf" rel="noopener" target="_blank">open the resume in a new tab</a>
                    or download it.
                  </p>
</div>
</object>
</div>

<p className="mt-3 text-xs text-neutral-400 print:hidden">
              Tip: Use the Print button for an ATS-friendly PDF export (no background colors).
            </p>
</div>
</section>

<section className="py-14 sm:py-20 border-t border-neutral-900" data-animate="" id="blog">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between">
<h2 className="text-2xl sm:3xl font-semibold tracking-tight">
                Blog
              </h2>
<a className="text-sm text-neutral-300 hover:text-neutral-100 underline decoration-transparent underline-offset-4 hover:decoration-[var(--accent)]" href="#">RSS</a>
</div>
<div className="mt-6 grid md:grid-cols-3 gap-6">
<article className="rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-5 hover:-translate-y-0.5 transition-transform">
<h3 className="text-lg font-semibold tracking-tight">
                  Designing KPIs that drive recruiting outcomes
                </h3>
<p className="mt-2 text-sm text-neutral-300">
                  How to model funnel metrics, time‑to‑hire, and drop‑off points for clarity.
                </p>
<div className="mt-3 text-xs text-neutral-400">MDX • 6 min read</div>
</article>
<article className="rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-5 hover:-translate-y-0.5 transition-transform">
<h3 className="text-lg font-semibold tracking-tight">
                  Building a serverless ETL on AWS without headaches
                </h3>
<p className="mt-2 text-sm text-neutral-300">
                  Using S3, Glue, and Lambda to simplify ingestion and validation.
                </p>
<div className="mt-3 text-xs text-neutral-400">MDX • 8 min read</div>
</article>
<article className="rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-5 hover:-translate-y-0.5 transition-transform">
<h3 className="text-lg font-semibold tracking-tight">
                  From ad‑hoc to self‑serve: a BI enablement story
                </h3>
<p className="mt-2 text-sm text-neutral-300">
                  Dimensional models, RLS, and governance that reduced ad‑hoc by 35%.
                </p>
<div className="mt-3 text-xs text-neutral-400">MDX • 5 min read</div>
</article>
</div>
</div>
</section>

<section className="py-14 sm:py-20 border-t border-neutral-900" data-animate="" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Contact
              </h2>
<p className="mt-2 text-neutral-300">
                Recruiters and teams: reach out for a quick intro. I respond within 24h.
              </p>
</div>
<form className="mt-6 max-w-2xl rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-5" id="contact-form" novalidate="">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm text-neutral-300" htmlFor="name">Name</label>
<input autocomplete="name" className="mt-1 w-full rounded-md bg-neutral-950 border border-neutral-800/80 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950" id="name" name="name" placeholder="Your name" required="" type="text"/>
</div>
<div>
<label className="block text-sm text-neutral-300" htmlFor="email">Email</label>
<input autocomplete="email" className="mt-1 w-full rounded-md bg-neutral-950 border border-neutral-800/80 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950" id="email" name="email" placeholder="name@company.com" required="" type="email"/>
</div>
</div>
<div className="mt-4">
<label className="block text-sm text-neutral-300" htmlFor="message">Message</label>
<textarea className="mt-1 w-full rounded-md bg-neutral-950 border border-neutral-800/80 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950" id="message" name="message" placeholder="A short note about your role or project..." required="" rows="5"></textarea>
</div>

<input aria-hidden="true" autocomplete="off" className="hidden" id="company" name="company" tabindex="-1" type="text"/>
<div className="mt-4 flex items-center justify-between gap-3">
<p className="text-sm text-neutral-400" id="form-status"></p>
<button className="inline-flex items-center gap-2 rounded-md px-4 py-2 ring-1 ring-[color:var(--accent)]/40 hover:ring-[color:var(--accent)] bg-[color:var(--accent)]/10 hover:bg-[color:var(--accent)]/15 text-[color:var(--accent)] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950" type="submit">
<i className="w-4 h-4" data-lucide="send"></i>
                  Send
                </button>
</div>
</form>
</div>
</section>

<footer className="border-t border-neutral-900 py-10" role="contentinfo">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div>
<div className="text-lg font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>SP</div>
<p className="mt-1 text-sm text-neutral-400">
                  Data Analyst / Data Engineer — SQL, Python, Power BI, AWS
                </p>
</div>
<div className="flex items-center gap-3">
<a aria-label="GitHub" className="p-2 rounded-md hover:bg-neutral-900/60 ring-1 ring-transparent hover:ring-neutral-800/80" href="https://github.com/Smit-1103" rel="noopener noreferrer" target="_blank">
<i className="w-5 h-5" data-lucide="github"></i>
</a>
<a aria-label="LinkedIn" className="p-2 rounded-md hover:bg-neutral-900/60 ring-1 ring-transparent hover:ring-neutral-800/80" href="https://www.linkedin.com/in/smit-patel-34848a210/" rel="noopener noreferrer" target="_blank">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
<button className="inline-flex items-center gap-2 rounded-md px-3 py-2 ring-1 ring-neutral-800/80 hover:bg-neutral-900" id="readme-btn">
<i className="w-4 h-4" data-lucide="book-open"></i> README
                </button>
</div>
</div>
<p className="mt-6 text-xs text-neutral-500">
              © <span id="year"></span> Smit Patel. All rights reserved.
            </p>
</div>
</footer>
</main>

<div aria-labelledby="readme-title" aria-modal="true" className="fixed inset-0 z-50 hidden items-center justify-center p-4" id="readme-modal" role="dialog">
<div className="absolute inset-0 bg-black/60"></div>
<div className="relative max-w-3xl w-full rounded-xl border border-neutral-800/80 bg-neutral-950/95 backdrop-blur p-6">
<div className="flex items-start justify-between gap-4">
<h3 className="text-xl font-semibold tracking-tight" id="readme-title">
              README — Portfolio Starter
            </h3>
<button aria-label="Close README" className="p-2 rounded-md hover:bg-neutral-900 ring-1 ring-neutral-800/80" id="readme-close">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="mt-4 space-y-4 text-sm text-neutral-200">
<p>
              This starter mirrors your intended stack and IA. To turn this into a production app:
            </p>
<ol className="list-decimal pl-5 space-y-2">
<li>
                Scaffold the app:
                <pre className="mt-2 rounded-md p-3 bg-neutral-900 border border-neutral-800 text-xs text-neutral-200 overflow-auto" style={{fontFamily: '\'Source Code Pro\', ui-monospace, SFMono-Regular, Menlo, monospace'}}>npx create-next-app@latest smit-portfolio --ts
cd smit-portfolio
npm i -E tailwindcss postcss autoprefixer lucide-react @tailwindcss/typography next-seo plausible-tracker
npx tailwindcss init -p
                </pre>
</li>
<li>
                Pages: create routes — /, /projects, /experience, /resume, /blog, /contact.
              </li>
<li>
                Data: fetch pinned repos and recent commits from GitHub’s API using a token set in an env var:
                <pre className="mt-2 rounded-md p-3 bg-neutral-900 border border-neutral-800 text-xs text-neutral-200 overflow-auto" style={{fontFamily: '\'Source Code Pro\', ui-monospace, SFMono-Regular, Menlo, monospace'}}># .env.local
GITHUB_TOKEN=ghp_xxx
                </pre>
                Map repo topics to badges, and fallback to the static seeds used here.
              </li>
<li>
                Resume: serve /public/Full_time_Data.pdf and implement a print-friendly /resume route using print-only classes.
              </li>
<li>
                Analytics: add the Plausible script in _document and configure your domain.
              </li>
<li>
                SEO: add OpenGraph images, sitemap.xml, and robots.txt via next-sitemap. Include JSON‑LD for Person and Projects as shown.
              </li>
<li>
                Deploy: push to a repo and deploy. Enable image optimization and caching headers.
              </li>
</ol>
<p>
              Performance checklist: preconnect fonts, limit 3rd‑party scripts, avoid layout shifts, pre-size media, and lazy‑load below‑the‑fold content.
            </p>
</div>
</div>
</div>
</div>

<div id="cursor-dot" style={{position: 'fixed', inset: 'auto', width: '6px', height: '6px', borderRadius: '9999px', background: 'var(--accent)', pointerEvents: 'none', zIndex: '50', transform: 'translate(-50%, -50%)', mixBlend: 'screen', opacity: '.9'}}></div>
<div id="cursor-ring" style={{position: 'fixed', inset: 'auto', width: '34px', height: '34px', borderRadius: '9999px', border: '1.5px solid color-mix(in srgb, var(--accent) 60%, transparent)', pointerEvents: 'none', zIndex: '50', transform: 'translate(-50%, -50%)', transition: 'border-color .2s ease, background-color .2s ease', mixBlend: 'screen'}}></div>




    </>
  );
}
