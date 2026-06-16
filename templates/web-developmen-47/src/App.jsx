import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    (function () {
      const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Theme (dark default)
      const themeToggle = document.getElementById('themeToggle');
      const themeIcon = document.getElementById('themeIcon');
      const themeKnob = document.getElementById('themeKnob');

      function setTheme(mode) {
        if (mode === 'light') {
          document.body.className = "min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-slate-900/10 selection:text-slate-900";
          themeIcon.setAttribute('icon', 'solar:sun-linear');
          themeIcon.className = "text-slate-900";
          themeKnob.style.transform = "translateX(1.25rem)";
        } else {
          document.body.className = "min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-white/10 selection:text-white";
          themeIcon.setAttribute('icon', 'solar:moon-linear');
          themeIcon.className = "text-slate-100";
          themeKnob.style.transform = "translateX(0rem)";
        }
        localStorage.setItem('wc_theme', mode);
      }

      const saved = localStorage.getItem('wc_theme');
      setTheme(saved || 'dark');

      themeToggle?.addEventListener('click', () => {
        const current = localStorage.getItem('wc_theme') || 'dark';
        setTheme(current === 'dark' ? 'light' : 'dark');
      });

      // Mobile menu
      const mobileMenuBtn = document.getElementById('mobileMenuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      mobileMenuBtn?.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

      // Smooth anchor scrolling
      document.addEventListener('click', (e) => {
        const a = e.target.closest('a[href^="#"]');
        if (!a) return;
        const id = a.getAttribute('href');
        if (!id || id.length < 2) return;

        const el = document.querySelector(id);
        if (!el) return;

        e.preventDefault();
        mobileMenu?.classList.add('hidden');
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });

      // Reveal animations
      const reveals = Array.from(document.querySelectorAll('.reveal'));
      if (!prefersReduced) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          });
        }, { threshold: 0.12 });

        reveals.forEach((el) => io.observe(el));
        reveals.forEach((el) => {
          el.style.opacity = '0';
          el.style.transform = 'translateY(0.75rem)';
        });

        const tickReveal = () => {
          const visible = reveals.filter(el => el.classList.contains('is-visible') && !el.dataset.animated);
          visible.forEach((el, idx) => {
            el.dataset.animated = '1';
            gsap.to(el, { opacity: 1, y: 0, duration: 0.75, delay: Math.min(idx * 0.06, 0.18), ease: "power3.out" });
          });
          requestAnimationFrame(tickReveal);
        };
        tickReveal();
      } else {
        reveals.forEach((el) => { el.style.opacity = '1'; el.style.transform = 'none'; });
      }

      // Tilt interaction
      function attachTilt(el) {
        let raf = 0;
        const maxTilt = 10;

        function onMove(e) {
          const r = el.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width;
          const y = (e.clientY - r.top) / r.height;
          const rx = (0.5 - y) * maxTilt;
          const ry = (x - 0.5) * maxTilt;

          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(() => {
            el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-0.125rem)`;
          });
        }

        function onLeave() {
          cancelAnimationFrame(raf);
          el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0rem)`;
        }

        el.addEventListener('mousemove', onMove);
        el.addEventListener('mouseleave', onLeave);
      }

      document.querySelectorAll('[data-tilt], .tiltCard').forEach((el) => {
        el.style.transformStyle = 'preserve-3d';
        el.style.transition = 'transform 240ms ease, box-shadow 240ms ease, background-color 240ms ease';
        attachTilt(el);
      });

      // Service icon hover pulse
      document.querySelectorAll('.serviceCard').forEach((card) => {
        const icon = card.querySelector('.serviceIcon');
        if (!icon) return;

        card.addEventListener('mouseenter', () => {
          if (prefersReduced) return;
          gsap.fromTo(icon, { y: 0, rotate: 0 }, { y: -4, rotate: -2, duration: 0.35, ease: "power2.out" });
        });
        card.addEventListener('mouseleave', () => {
          if (prefersReduced) return;
          gsap.to(icon, { y: 0, rotate: 0, duration: 0.35, ease: "power2.out" });
        });
      });

      // Testimonials slider
      const track = document.getElementById('testimonialTrack');
      const tPrev = document.getElementById('tPrev');
      const tNext = document.getElementById('tNext');
      let tIndex = 0;

      function setTestimonial(i) {
        if (!track) return;
        const slides = track.children.length;
        tIndex = (i + slides) % slides;
        track.style.transform = `translateX(${-tIndex * 100}%)`;
      }

      tPrev?.addEventListener('click', () => setTestimonial(tIndex - 1));
      tNext?.addEventListener('click', () => setTestimonial(tIndex + 1));

      let tTimer = 0;
      function autoTestimonials() {
        if (prefersReduced) return;
        clearInterval(tTimer);
        tTimer = setInterval(() => setTestimonial(tIndex + 1), 5200);
      }
      autoTestimonials();
      track?.addEventListener('mouseenter', () => clearInterval(tTimer));
      track?.addEventListener('mouseleave', autoTestimonials);

      // Storage helpers
      function storeSubmission(key, payload) {
        const prev = JSON.parse(localStorage.getItem(key) || '[]');
        prev.unshift(payload);
        localStorage.setItem(key, JSON.stringify(prev.slice(0, 50)));
      }

      // Review system (render)
      const reviewForm = document.getElementById('reviewForm');
      const reviewList = document.getElementById('reviewList');
      const reviewEmpty = document.getElementById('reviewEmpty');
      const reviewStatus = document.getElementById('reviewStatus');
      const clearReviewsBtn = document.getElementById('clearReviewsBtn');

      function starIcons(n) {
        const count = Math.max(1, Math.min(5, Number(n) || 5));
        let html = '';
        for (let i = 0; i < 5; i++) {
          html += `<iconify-icon icon="solar:star-linear" width="16" style="stroke-width:1.5;" class="${i < count ? 'text-amber-300' : 'text-slate-500'}"></iconify-icon>`;
        }
        return html;
      }

      function escapeHtml(str) {
        return String(str || '')
          .replaceAll('&', '&amp;')
          .replaceAll('<', '&lt;')
          .replaceAll('>', '&gt;')
          .replaceAll('"', '&quot;')
          .replaceAll("'", '&#039;');
      }

      function renderReviews() {
        if (!reviewList) return;
        const items = JSON.parse(localStorage.getItem('wc_client_reviews') || '[]');
        reviewList.innerHTML = '';

        if (!items.length) {
          reviewEmpty?.classList.remove('hidden');
          return;
        }
        reviewEmpty?.classList.add('hidden');

        items.slice(0, 10).forEach((r) => {
          const name = escapeHtml(r.name);
          const business = escapeHtml(r.business);
          const review = escapeHtml(r.review);
          const rating = Number(r.rating) || 5;

          const card = document.createElement('div');
          card.className = "tiltCard rounded-2xl border border-white/10 bg-slate-950/30 p-4 shadow-sm";
          card.innerHTML = `
            <div class="flex items-start justify-between gap-4">
              <div>
                <div class="text-sm font-semibold tracking-tight text-white">${name}</div>
                <div class="mt-0.5 text-xs text-slate-300">${business} • Ahmedabad</div>
              </div>
              <div class="inline-flex items-center gap-1">${starIcons(rating)}</div>
            </div>
            <p class="mt-3 text-xs leading-relaxed text-slate-200">${review}</p>
          `;
          reviewList.appendChild(card);

          // re-attach tilt (new nodes)
          card.style.transformStyle = 'preserve-3d';
          card.style.transition = 'transform 240ms ease, box-shadow 240ms ease, background-color 240ms ease';
          attachTilt(card);
        });
      }

      reviewForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const fd = new FormData(reviewForm);
        const data = Object.fromEntries(fd.entries());
        storeSubmission('wc_client_reviews', { ...data, createdAt: new Date().toISOString() });
        reviewForm.reset();
        reviewStatus.textContent = "Review submitted successfully.";
        setTimeout(() => reviewStatus.textContent = "", 3500);
        renderReviews();
      });

      clearReviewsBtn?.addEventListener('click', () => {
        localStorage.removeItem('wc_client_reviews');
        renderReviews();
      });

      renderReviews();

      // Contact form (demo storage)
      const contactForm = document.getElementById('contactForm');
      const contactStatus = document.getElementById('contactStatus');
      contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const fd = new FormData(contactForm);
        const data = Object.fromEntries(fd.entries());
        storeSubmission('wc_contacts', { ...data, createdAt: new Date
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
<div className="absolute -top-40 left-1/2 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-teal-500/20 via-sky-500/15 to-indigo-500/15 blur-3xl"></div>
<div className="absolute -bottom-52 right-[-10rem] h-[40rem] w-[40rem] rounded-full bg-gradient-to-tr from-cyan-500/12 via-sky-500/10 to-indigo-500/12 blur-3xl"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.12),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.10),transparent_55%)]"></div>
<div className="absolute inset-0 opacity-[0.55] [background-image:linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:2.75rem_2.75rem]"></div>
</div>

<header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
<div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
<a className="group inline-flex items-center gap-3" href="#home">
<div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-sm">
<div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-tr from-teal-400/20 via-sky-400/15 to-indigo-400/15 opacity-0 blur-md transition group-hover:opacity-100"></div>

<img alt="WebCare logo" className="relative h-8 w-8 object-contain" onerror="this.style.display='none'; this.parentElement.querySelector('[data-fallback]').classList.remove('hidden');" src="assets/webcare-logo.png"/>
<span className="relative hidden text-sm font-semibold tracking-tight text-white" data-fallback="">WC</span>
</div>
<div className="leading-tight">
<div className="text-sm font-semibold tracking-tight text-white">WebCare</div>
<div className="text-xs text-slate-300">Web Development • Digital Solutions</div>
</div>
</a>
<nav className="hidden items-center gap-1 lg:flex">
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white" href="#about">About</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white" href="#services">Services</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white" href="#projects">Portfolio</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white" href="#team">Team</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white" href="#reviews">Testimonials</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white" href="#blog">Blog</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-2">

<button aria-label="Toggle theme" className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 shadow-sm hover:bg-white/10" id="themeToggle" type="button">
<span className="inline-flex h-5 w-5 items-center justify-center">
<iconify-icon className="text-slate-100" icon="solar:moon-linear" id="themeIcon" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</span>
<span className="hidden sm:inline">Theme</span>
<span className="relative inline-flex h-6 w-11 items-center rounded-full border border-white/10 bg-slate-950/40 px-1 shadow-sm">
<span className="h-4 w-4 rounded-full bg-white transition-transform" id="themeKnob"></span>
</span>
</button>
<a className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-teal-500 to-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm hover:opacity-95" href="#client">
<iconify-icon className="text-slate-950" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
          Start Your Project
        </a>
<button aria-label="Open menu" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 shadow-sm hover:bg-white/10 lg:hidden" id="mobileMenuBtn" type="button">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
</div>
</div>
<div className="hidden border-t border-white/10 bg-slate-950/60 backdrop-blur-xl lg:hidden" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
<div className="grid gap-1">
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white" href="#about">About</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white" href="#services">Services</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white" href="#projects">Portfolio</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white" href="#team">Team</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white" href="#reviews">Testimonials</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white" href="#blog">Blog</a>
<a className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white" href="#contact">Contact</a>
<a className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-tr from-teal-500 to-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm hover:opacity-95" href="#client">
<iconify-icon className="text-slate-950" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
            Start Your Project
          </a>
</div>
</div>
</div>
</header>
<main>

<section className="scroll-mt-24" id="home">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
<div className="grid items-center gap-10 lg:grid-cols-2">
<div className="reveal">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 shadow-sm backdrop-blur">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-teal-500 to-sky-500 text-slate-950">
<iconify-icon icon="solar:bolt-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</span>
              Modern design • Development • Digital solutions
            </div>
<h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              WebCare – We Build Powerful Websites
            </h1>
<p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base">
              WebCare provides modern website design, development, and digital solutions for businesses. From premium UI/UX to scalable web apps and ongoing optimization—we help you grow with confidence.
            </p>
<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm hover:bg-slate-100" href="#projects">
<iconify-icon className="text-slate-950" icon="solar:case-round-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                View Portfolio
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/10" href="#client">
<iconify-icon icon="solar:rocket-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                Submit Project Request
              </a>
</div>
<div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur">
<div className="text-sm font-semibold tracking-tight text-white">Premium UI</div>
<div className="mt-1 text-xs text-slate-300">Modern design</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur">
<div className="text-sm font-semibold tracking-tight text-white">Fast</div>
<div className="mt-1 text-xs text-slate-300">Perf-first</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur">
<div className="text-sm font-semibold tracking-tight text-white">Secure</div>
<div className="mt-1 text-xs text-slate-300">Best practices</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur">
<div className="text-sm font-semibold tracking-tight text-white">24/7</div>
<div className="mt-1 text-xs text-slate-300">Available</div>
</div>
</div>
</div>

<div className="reveal">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm backdrop-blur">
<div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-500/15 via-transparent to-sky-500/15"></div>
<div className="relative p-4 sm:p-6">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-teal-500 to-sky-500 text-slate-950 shadow-sm">
<iconify-icon icon="solar:code-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-white">Interactive Tech Field</div>
<div className="text-xs text-slate-300">Premium motion and depth</div>
</div>
</div>
<span className="rounded-full border border-white/10 bg-slate-950/30 px-3 py-1 text-xs font-medium text-slate-200 shadow-sm">
                    Live
                  </span>
</div>
<div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/30 shadow-sm">
<div className="relative aspect-[16/10]">
<canvas className="absolute inset-0 h-full w-full" id="hero3d"></canvas>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_55%)]"></div>
<div className="pointer-events-none absolute bottom-3 left-3 right-3 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
<div className="flex items-start justify-between gap-3">
<div>
<div className="text-xs font-semibold text-slate-200">Tip</div>
<div className="mt-1 text-xs text-slate-300">Move your cursor to steer the field. Tap to pulse.</div>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
<iconify-icon icon="solar:mouse-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                          Interactive
                        </div>
</div>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
<div className="tiltCard flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-3 text-xs text-slate-200 shadow-sm backdrop-blur">
<iconify-icon icon="solar:server-square-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    APIs
                  </div>
<div className="tiltCard flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-3 text-xs text-slate-200 shadow-sm backdrop-blur">
<iconify-icon icon="solar:smartphone-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Responsive
                  </div>
<div className="tiltCard flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-3 text-xs text-slate-200 shadow-sm backdrop-blur">
<iconify-icon icon="solar:lock-keyhole-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Security
                  </div>
<div className="tiltCard flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-3 text-xs text-slate-200 shadow-sm backdrop-blur">
<iconify-icon icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Growth
                  </div>
</div>
</div>
</div>
<div className="mt-4 grid gap-3 sm:grid-cols-2">
<div className="tiltCard rounded-3xl border border-white/10 bg-gradient-to-tr from-teal-500/15 via-white/5 to-sky-500/15 p-5 shadow-sm backdrop-blur">
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
<iconify-icon icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-white">Premium Visuals</div>
<div className="mt-1 text-xs text-slate-200">Subtle gradients with modern depth</div>
</div>
</div>
</div>
<div className="tiltCard rounded-3xl border border-white/10 bg-gradient-to-tr from-sky-500/15 via-white/5 to-indigo-500/15 p-5 shadow-sm backdrop-blur">
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
<iconify-icon icon="solar:bolt-circle-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-white">Smooth Motion</div>
<div className="mt-1 text-xs text-slate-200">Polished interactions across pages</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24" id="about">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
<div className="reveal grid gap-8 lg:grid-cols-12 lg:items-start">
<div className="lg:col-span-5">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">About WebCare</h2>
<p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
              WebCare provides modern website design, development, and digital solutions for businesses. We build clean, conversion-ready websites,
              scalable web applications, and strong digital experiences that help brands stand out and grow.
            </p>
<p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
              From UI/UX design and responsive development to performance optimization, maintenance, and integration support—our team delivers reliable
              results with a premium, tech-focused finish.
            </p>
<div className="mt-6 grid gap-3">
<div className="tiltCard rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur">
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-teal-500/20 to-sky-500/20 text-white">
<iconify-icon icon="solar:target-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-white">What we deliver</div>
<div className="mt-1 text-xs leading-relaxed text-slate-200">
                      Modern UI, responsive layouts, strong performance, and maintainable code—built for long-term growth.
                    </div>
</div>
</div>
</div>
<div className="tiltCard rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur">
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 text-white">
<iconify-icon icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-white">Support</div>
<div className="mt-1 text-xs leading-relaxed text-slate-200">
                      24/7 Available with ongoing maintenance options and fast iteration cycles.
                    </div>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur sm:p-8">
<div className="flex items-center justify-between gap-4">
<div>
<div className="text-sm font-semibold tracking-tight text-white">How we work</div>
<div className="mt-1 text-xs text-slate-300">Clear scope, modern build, smooth handoff</div>
</div>
<span className="hidden items-center gap-2 rounded-full border border-white/10 bg-slate-950/30 px-3 py-1 text-xs font-medium text-slate-200 shadow-sm sm:inline-flex">
<iconify-icon icon="solar:layers-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                  24/7 Available
                </span>
</div>
<div className="mt-6 grid gap-4 sm:grid-cols-2">
<div className="tiltCard rounded-2xl border border-white/10 bg-slate-950/30 p-5 shadow-sm">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
<iconify-icon icon="solar:palette-2-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</span>
<div className="text-sm font-semibold tracking-tight text-white">Modern UI/UX</div>
</div>
<p className="mt-2 text-xs leading-relaxed text-slate-200">
                    Clean, professional design with premium typography, spacing, and subtle gradients.
                  </p>
</div>
<div className="tiltCard rounded-2xl border border-white/10 bg-slate-950/30 p-5 shadow-sm">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
<iconify-icon icon="solar:code-square-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</span>
<div className="text-sm font-semibold tracking-tight text-white">Development</div>
</div>
<p className="mt-2 text-xs leading-relaxed text-slate-200">
                    Responsive, scalable builds for business websites, web apps, and e-commerce.
                  </p>
</div>
<div className="tiltCard rounded-2xl border border-white/10 bg-slate-950/30 p-5 shadow-sm">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
<iconify-icon icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</span>
<div className="text-sm font-semibold tracking-tight text-white">Optimization</div>
</div>
<p className="mt-2 text-xs leading-relaxed text-slate-200">
                    Performance and SEO-focused improvements to keep your site fast and discoverable.
                  </p>
</div>
<div className="tiltCard rounded-2xl border border-white/10 bg-slate-950/30 p-5 shadow-sm">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
<iconify-icon icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</span>
<div className="text-sm font-semibold tracking-tight text-white">Maintenance</div>
</div>
<p className="mt-2 text-xs leading-relaxed text-slate-200">
                    Ongoing updates, security checks, and feature support—24/7 Available.
                  </p>
</div>
</div>
<div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-tr from-teal-500/12 via-white/5 to-sky-500/12 p-5 shadow-sm">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
<iconify-icon icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-white">Need a quick estimate?</div>
<div className="text-xs text-slate-200">Send your requirements—we’ll respond quickly.</div>
</div>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-semibold text-slate-950 shadow-sm hover:bg-slate-100" href="#client">
                    Submit request
                    <iconify-icon className="text-slate-950" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24" id="services">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
<div className="reveal flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Our Services</h2>
<p className="mt-2 text-sm text-slate-200 sm:text-base">
              Websites, web apps, UI/UX, e-commerce, and ongoing optimization.
            </p>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 shadow-sm backdrop-blur">
<iconify-icon icon="solar:settings-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
            24/7 Available
          </div>
</div>
<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
<div className="serviceCard reveal group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md">
<div className="flex items-center gap-3">
<span className="serviceIcon inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-teal-500/25 to-sky-500/25 text-white shadow-sm">
<iconify-icon icon="solar:window-frame-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</span>
<div className="text-sm font-semibold tracking-tight text-white">Website Development</div>
</div>
<p className="mt-3 text-xs leading-relaxed text-slate-200">
              Modern business websites designed to convert and built for speed.
            </p>
</div>
<div className="serviceCard reveal group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md">
<div className="flex items-center gap-3">
<span className="serviceIcon inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-500/25 to-indigo-500/25 text-white shadow-sm">
<iconify-icon icon="solar:code-square-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</span>
<div className="text-sm font-semibold tracking-tight text-white">Web Application Development</div>
</div>
<p className="mt-3 text-xs leading-relaxed text-slate-200">
              Dashboards, admin panels, portals, integrations, and secure authentication.
            </p>
</div>
<div className="serviceCard reveal group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md">
<div className="flex items-center gap-3">
<span className="serviceIcon inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-teal-500/25 to-indigo-500/25 text-white shadow-sm">
<iconify-icon icon="solar:palette-2-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</span>
<div className="text-sm font-semibold tracking-tight text-white">UI/UX Design</div>
</div>
<p className="mt-3 text-xs leading-relaxed text-slate-200">
              Wireframes, prototypes, and clean design systems with premium detail.
            </p>
</div>
<div className="serviceCard reveal group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md">
<div className="flex items-center gap-3">
<span className="serviceIcon inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500/25 to-sky-500/25 text-white shadow-sm">
<iconify-icon icon="solar:cart-large-2-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</span>
<div className="text-sm font-semibold tracking-tight text-white">E-commerce Development</div>
</div>
<p className="mt-3 text-xs leading-relaxed text-slate-200">
              Product catalogs, payment integration, and smooth checkout flows.
            </p>
</div>
<div className="serviceCard reveal group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md">
<div className="flex items-center gap-3">
<span className="serviceIcon inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-teal-500/25 to-sky-500/25 text-white shadow-sm">
<iconify-icon icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</span>
<div className="text-sm font-semibold tracking-tight text-white">Optimization &amp; Maintenance</div>
</div>
<p className="mt-3 text-xs leading-relaxed text-slate-200">
              Speed improvements, SEO basics, updates, and ongoing site care—24/7 Available.
            </p>
</div>
<div className="serviceCard reveal group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md">
<div className="flex items-center gap-3">
<span className="serviceIcon inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-500/25 to-indigo-500/25 text-white shadow-sm">
<iconify-icon icon="solar:server-square-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</span>
<div className="text-sm font-semibold tracking-tight text-white">Digital Solutions</div>
</div>
<p className="mt-3 text-xs leading-relaxed text-slate-200">
              Integrations, analytics setup, and digital improvements for real growth.
            </p>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24" id="projects">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
<div className="reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Portfolio</h2>
<p className="mt-2 text-sm text-slate-200 sm:text-base">Modern project cards with smooth 3D hover depth.</p>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 shadow-sm backdrop-blur">
<iconify-icon icon="solar:case-round-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
            Selected work
          </div>
</div>
<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
<article className="projectCard3d reveal group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm backdrop-blur transition hover:shadow-md" data-tilt="">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Project preview" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent"></div>
<div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
<iconify-icon icon="solar:buildings-2-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                Business Website
              </div>
</div>
<div className="p-6">
<h3 className="text-base font-semibold tracking-tight text-white">Corporate Website</h3>
<p className="mt-1 text-xs leading-relaxed text-slate-200">Premium layout with strong messaging, performance, and clean navigation.</p>
<div className="mt-4">
<div className="text-xs font-semibold text-slate-200">Highlights</div>
<div className="mt-2 flex flex-wrap gap-2">
<span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-100">Responsive</span>
<span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-100">SEO</span>
<span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-100">Fast</span>
</div>
</div>
<div className="mt-5 flex items-center justify-between">
<a aria-label="Start project request" className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:opacity-80" href="#client">
                  Start similar
                  <iconify-icon icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
<span className="text-xs text-slate-300">Ahmedabad</span>
</div>
</div>
</article>
<article className="projectCard3d reveal group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm backdrop-blur transition hover:shadow-md" data-tilt="">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Project preview" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent"></div>
<div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
<iconify-icon icon="solar:cart-large-2-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                E-commerce
              </div>
</div>
<div className="p-6">
<h3 className="text-base font-semibold tracking-tight text-white">E-commerce Store</h3>
<p className="mt-1 text-xs leading-relaxed text-slate-200">Product pages, modern checkout, and conversion-focused UI patterns.</p>
<div className="mt-4">
<div className="text-xs font-semibold text-slate-200">Highlights</div>
<div className="mt-2 flex flex-wrap gap-2">
<span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-100">Payments</span>
<span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-100">Catalog</span>
<span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-100">Speed</span>
</div>
</div>
<div className="mt-5 flex items-center justify-between">
<a aria-label="Start project request" className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:opacity-80" href="#client">
                  Start similar
                  <iconify-icon icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
<span className="text-xs text-slate-300">Gujarat</span>
</div>
</div>
</article>
<article className="projectCard3d reveal group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm backdrop-blur transition hover:shadow-md" data-tilt="">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Project preview" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent"></div>
<div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
<iconify-icon icon="solar:widget-2-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                Web App
              </div>
</div>
<div className="p-6">
<h3 className="text-base font-semibold tracking-tight text-white">Business Dashboard</h3>
<p className="mt-1 text-xs leading-relaxed text-slate-200">Admin dashboard with clean UI, secure access, and reports.</p>
<div className="mt-4">
<div className="text-xs font-semibold text-slate-200">Highlights</div>
<div className="mt-2 flex flex-wrap gap-2">
<span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-100">Auth</span>
<span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-100">API</span>
<span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-100">Analytics</span>
</div>
</div>
<div className="mt-5 flex items-center justify-between">
<a aria-label="Start project request" className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:opacity-80" href="#client">
                  Start similar
                  <iconify-icon icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
<span className="text-xs text-slate-300">India</span>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="scroll-mt-24" id="team">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
<div className="reveal flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Our Team</h2>
<p className="mt-2 text-sm text-slate-200 sm:text-base">A focused team delivering modern UI, development, and digital growth.</p>
</div>
<div className="text-xs text-slate-300">Ahmedabad • 24/7 Available</div>
</div>
<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
<article className="profileCard3d reveal rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition hover:bg-white/10 hover:shadow-md" data-tilt="">
<div className="flex items-center gap-4">
<div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-tr from-teal-500/20 via-white/5 to-sky-500/20">
<img alt="Het Darji photo" className="h-full w-full object-cover" onerror="this.style.display='none';" src="https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-slate-200">Photo</div>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-white">Het Darji</div>
<div className="text-xs text-slate-300">Frontend Developer &amp; Backend Developer</div>
</div>
</div>
<p className="mt-4 text-xs leading-relaxed text-slate-200">Builds responsive UI and reliable backend systems with clean architecture.</p>
</article>
<article className="profileCard3d reveal rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition hover:bg-white/10 hover:shadow-md" data-tilt="">
<div className="flex items-center gap-4">
<div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-tr from-sky-500/20 via-white/5 to-indigo-500/20">
<img alt="Ved Prajapati photo" className="h-full w-full object-cover" onerror="this.style.display='none';" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-slate-200">Photo</div>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-white">Ved Prajapati</div>
<div className="text-xs text-slate-300">Web Designer</div>
</div>
</div>
<p className="mt-4 text-xs leading-relaxed text-slate-200">Designs clean interfaces with modern layout, typography, and interaction details.</p>
</article>
<article className="profileCard3d reveal rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition hover:bg-white/10 hover:shadow-md" data-tilt="">
<div className="flex items-center gap-4">
<div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-tr from-teal-500/20 via-white/5 to-indigo-500/20">
<img alt="Vraj Panchal photo" className="h-full w-full object-cover" onerror="this.style.display='none';" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-slate-200">Photo</div>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-white">Vraj Panchal</div>
<div className="text-xs text-slate-300">Digital Manager</div>
</div>
</div>
<p className="mt-4 text-xs leading-relaxed text-slate-200">Manages digital strategy, analytics, and growth improvements for businesses.</p>
</article>
</div>
</div>
</section>

<section className="scroll-mt-24" id="reviews">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
<div className="reveal flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Testimonials</h2>
<p className="mt-2 text-sm text-slate-200 sm:text-base">Reviews from Ahmedabad-based businesses.</p>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 shadow-sm backdrop-blur">
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
            Client satisfaction
          </div>
</div>
<div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-start">

<div className="reveal lg:col-span-6">
<div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm backdrop-blur">
<div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
<div className="text-sm font-semibold tracking-tight text-white">Featured reviews</div>
<div className="inline-flex items-center gap-2">
<button aria-label="Previous testimonial" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-slate-950/30 p-2 text-slate-200 hover:bg-white/10" id="tPrev" type="button">
<iconify-icon icon="solar:alt-arrow-left-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<button aria-label="Next testimonial" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-slate-950/30 p-2 text-slate-200 hover:bg-white/10" id="tNext" type="button">
<iconify-icon icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>
<div className="relative">
<div className="flex transition-transform duration-700 ease-out" id="testimonialTrack">
<figure className="w-full shrink-0 p-6">
<div className="flex items-center justify-between gap-3">
<div>
<div className="text-sm font-semibold tracking-tight text-white">Riya Shah</div>
<div className="text-xs text-slate-300">Boutique Store • Ahmedabad</div>
</div>
<div aria-label="5 star rating" className="inline-flex items-center gap-1 text-amber-300">
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
<blockquote className="mt-3 text-sm leading-relaxed text-slate-200">
                      “WebCare created a premium website for our store. The design looks modern and loads very fast. Great support anytime.”
                    </blockquote>
</figure>
<figure className="w-full shrink-0 p-6">
<div className="flex items-center justify-between gap-3">
<div>
<div className="text-sm font-semibold tracking-tight text-white">Aarav Patel</div>
<div className="text-xs text-slate-300">Consulting • Ahmedabad</div>
</div>
<div aria-label="5 star rating" className="inline-flex items-center gap-1 text-amber-300">
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
<blockquote className="mt-3 text-sm leading-relaxed text-slate-200">
                      “They understood our requirements clearly and delivered on time. The website looks premium and professional.”
                    </blockquote>
</figure>
<figure className="w-full shrink-0 p-6">
<div className="flex items-center justify-between gap-3">
<div>
<div className="text-sm font-semibold tracking-tight text-white">Neha Joshi</div>
<div className="text-xs text-slate-300">Restaurant • Ahmedabad</div>
</div>
<div aria-label="5 star rating" className="inline-flex items-center gap-1 text-amber-300">
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
<blockquote className="mt-3 text-sm leading-relaxed text-slate-200">
                      “Our new website is beautiful and simple to use. WebCare also helped with updates and quick changes anytime.”
                    </blockquote>
</figure>
</div>
<div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/80 to-transparent"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/80 to-transparent"></div>
</div>
</div>
</div>

<div className="reveal lg:col-span-6">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur sm:p-8">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-2xl font-semibold tracking-tight text-white">Client Reviews</h3>
<p className="mt-2 text-sm text-slate-200">Submit your review—this will appear below (stored on this device).</p>
</div>
<span className="hidden items-center gap-2 rounded-full border border-white/10 bg-slate-950/30 px-3 py-1 text-xs font-medium text-slate-200 shadow-sm sm:inline-flex">
<iconify-icon icon="solar:clipboard-check-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                  Live list
                </span>
</div>
<form autocomplete="on" className="mt-6 grid gap-4" id="reviewForm">
<div className="grid gap-4 sm:grid-cols-2">
<label className="grid gap-2">
<span className="text-xs font-semibold text-slate-200">Name</span>
<input className="h-11 rounded-2xl border border-white/10 bg-slate-950/30 px-4 text-sm text-white shadow-sm outline-none placeholder:text-slate-400 focus:border-white/25 focus:bg-slate-950/40" name="name" placeholder="Your name" required=""/>
</label>
<label className="grid gap-2">
<span className="text-xs font-semibold text-slate-200">Business type</span>
<input className="h-11 rounded-2xl border border-white/10 bg-slate-950/30 px-4 text-sm text-white shadow-sm outline-none placeholder:text-slate-400 focus:border-white/25 focus:bg-slate-950/40" name="business" placeholder="e.g., Shop, Restaurant, Agency" required=""/>
</label>
</div>
<label className="grid gap-2">
<span className="text-xs font-semibold text-slate-200">Rating</span>
<div className="relative">
<select className="h-11 w-full appearance-none rounded-2xl border border-white/10 bg-slate-950/30 px-4 pr-10 text-sm text-white shadow-sm outline-none focus:border-white/25 focus:bg-slate-950/40" name="rating">
<option selected="" value="5">5 Stars</option>
<option value="4">4 Stars</option>
<option value="3">3 Stars</option>
<option value="2">2 Stars</option>
<option value="1">1 Star</option>
</select>
<span className="pointer-events-none absolute inset-y-0 right-3 inline-flex items-center text-slate-300">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</span>
</div>
</label>
<label className="grid gap-2">
<span className="text-xs font-semibold text-slate-200">Review</span>
<textarea className="resize-none rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-white shadow-sm outline-none placeholder:text-slate-400 focus:border-white/25 focus:bg-slate-950/40" name="review" placeholder="Write your experience with WebCare..." required="" rows="4"></textarea>
</label>
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-tr from-teal-500 to-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm hover:opacity-95" type="submit">
<iconify-icon className="text-slate-950" icon="solar:star-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                    Submit review
                  </button>
<div aria-live="polite" className="text-xs text-slate-200" id="reviewStatus"></div>
</div>
</form>
<div className="mt-6">
<div className="flex items-center justify-between gap-4">
<div className="text-xs font-semibold text-slate-200">Latest client reviews</div>
<button className="text-xs font-semibold text-slate-200 hover:opacity-80" id="clearReviewsBtn" type="button">
                    Clear on this device
                  </button>
</div>
<div className="mt-3 grid gap-3" id="reviewList"></div>
<div className="mt-3 rounded-2xl border border-white/10 bg-slate-950/30 p-4 text-xs text-slate-300" id="reviewEmpty">
                  No submitted reviews yet. Be the first to add one.
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24" id="client">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
<div className="reveal grid gap-8 lg:grid-cols-12 lg:items-start">
<div className="lg:col-span-6">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Submit Project Request</h2>
<p className="mt-2 text-sm text-slate-200 sm:text-base">Send your requirements. On submit, we’ll open WhatsApp with a ready message.</p>
<div className="reveal mt-6 rounded-3xl border border-white/10 bg-gradient-to-tr from-teal-500/12 via-white/5 to-sky-500/12 p-6 shadow-sm backdrop-blur">
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
<iconify-icon icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</span>
<div className="flex-1">
<div className="text-sm font-semibold tracking-tight text-white">Contact (24/7 Available)</div>
<div className="mt-2 grid gap-2 text-xs text-slate-200">
<a className="inline-flex items-center gap-2 hover:opacity-80" href="tel:+919726303209">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span><span className="text-slate-300">Call:</span> 9726303209</span>
</a>
<a className="inline-flex items-center gap-2 hover:opacity-80" href="https://wa.me/919016097889" rel="noopener" target="_blank">
<iconify-icon icon="solar:chat-round-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span><span className="text-slate-300">WhatsApp:</span> 9016097889</span>
</a>
<a className="inline-flex items-center gap-2 hover:opacity-80" href="mailto:hellowebcare7@gmail.com">
<iconify-icon icon="solar:mailbox-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span><span className="text-slate-300">Email:</span> hellowebcare7@gmail.com</span>
</a>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-6">
<div className="reveal rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur sm:p-8">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-2xl font-semibold tracking-tight text-white">Project request form</h3>
<p className="mt-2 text-sm text-slate-200">Submit and continue on WhatsApp with the details.</p>
</div>
<span className="hidden items-center gap-2 rounded-full border border-white/10 bg-slate-950/30 px-3 py-1 text-xs font-medium text-slate-200 shadow-sm sm:inline-flex">
<iconify-icon icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                  WhatsApp
                </span>
</div>
<form autocomplete="on" className="mt-6 grid gap-4" id="requestForm">
<div className="grid gap-4 sm:grid-cols-2">
<label className="grid gap-2">
<span className="text-xs font-semibold text-slate-200">Name</span>
<input className="h-11 rounded-2xl border border-white/10 bg-slate-950/30 px-4 text-sm text-white shadow-sm outline-none placeholder:text-slate-400 focus:border-white/25 focus:bg-slate-950/40" name="name" placeholder="Your name" required=""/>
</label>
<label className="grid gap-2">
<span className="text-xs font-semibold text-slate-200">Mobile</span>
<input className="h-11 rounded-2xl border border-white/10 bg-slate-950/30 px-4 text-sm text-white shadow-sm outline-none placeholder:text-slate-400 focus:border-white/25 focus:bg-slate-950/40" inputmode="numeric" name="mobile" placeholder="Your number" required=""/>
</label>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<label className="grid gap-2">
<span className="text-xs font-semibold text-slate-200">Project type</span>
<div className="relative">
<select className="h-11 w-full appearance-none rounded-2xl border border-white/10 bg-slate-950/30 px-4 pr-10 text-sm text-white shadow-sm outline-none focus:border-white/25 focus:bg-slate-950/40" name="type">
<option>Website</option>
<option>Web Application</option>
<option>E-commerce</option>
<option>UI/UX Design</option>
<option>Optimization &amp; Maintenance</option>
</select>
<span className="pointer-events-none absolute inset-y-0 right-3 inline-flex items-center text-slate-300">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</span>
</div>
</label>
<label className="grid gap-2">
<span className="text-xs font-semibold text-slate-200">Budget range</span>
<div className="relative">
<select className="h-11 w-full appearance-none rounded-2xl border border-white/10 bg-slate-950/30 px-4 pr-10 text-sm text-white shadow-sm outline-none focus:border-white/25 focus:bg-slate-950/40" name="budget">
<option>Not sure yet</option>
<option>₹5k–₹15k</option>
<option>₹15k–₹40k</option>
<option>₹40k–₹1L</option>
<option>₹1L+</option>
</select>
<span className="pointer-events-none absolute inset-y-0 right-3 inline-flex items-center text-slate-300">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</span>
</div>
</label>
</div>
<label className="grid gap-2">
<span className="text-xs font-semibold text-slate-200">Project details</span>
<textarea className="resize-none rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-white shadow-sm outline-none placeholder:text-slate-400 focus:border-white/25 focus:bg-slate-950/40" name="details" placeholder="Key pages/features, timeline, references..." required="" rows="5"></textarea>
</label>
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-tr from-teal-500 to-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm hover:opacity-95" type="submit">
<iconify-icon className="text-slate-950" icon="solar:paper-plane-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                    Send on WhatsApp
                  </button>
<div aria-live="polite" className="text-xs text-slate-200" id="requestStatus"></div>
</div>
<div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4 text-xs text-slate-200 shadow-sm">
<div className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-slate-300" icon="solar:info-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<p>
                      On submit, WhatsApp will open with a prepared message to <span className="font-semibold text-white">9016097889</span>. If WhatsApp is not available, we will show a call option to <span className="font-semibold text-white">9726303209</span>.
                    </p>
</div>
</div>
</form>
</div>
<div className="reveal mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
<div className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
<iconify-icon icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-white">Working Hours</div>
<p className="mt-1 text-xs leading-relaxed text-slate-200">24/7 Available</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24" id="blog">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
<div className="reveal flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Blog</h2>
<p className="mt-2 text-sm text-slate-200 sm:text-base">Web development insights, UI tips, and digital growth ideas.</p>
</div>
<a className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/10" href="#contact">
            Get updates
            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
</div>
<div className="mt-8 grid gap-4 lg:grid-cols-3">
<article className="reveal group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md" data-tilt="">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Blog cover" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]" src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="p-6">
<div className="flex items-center justify-between">
<span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-100">Performance</span>
<span className="text-xs text-slate-300">6 min read</span>
</div>
<h3 className="mt-3 text-base font-semibold tracking-tight text-white">How to make your site feel instant</h3>
<p className="mt-2 text-xs leading-relaxed text-slate-200">Practical improvements: images, caching, scripts, and loading states.</p>
<a className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-white hover:opacity-80" href="#contact">
                Read more
                <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</article>
<article className="reveal group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md" data-tilt="">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Blog cover" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="p-6">
<div className="flex items-center justify-between">
<span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-100">Development</span>
<span className="text-xs text-slate-300">8 min read</span>
</div>
<h3 className="mt-3 text-base font-semibold tracking-tight text-white">Planning a business website the right way</h3>
<p className="mt-2 text-xs leading-relaxed text-slate-200">Pages, content, and structure that supports growth and trust.</p>
<a className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-white hover:opacity-80" href="#contact">
                Read more
                <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</article>
<article className="reveal group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md" data-tilt="">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Blog cover" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]" src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="p-6">
<div className="flex items-center justify-between">
<span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-100">UI/UX</span>
<span className="text-xs text-slate-300">5 min read</span>
</div>
<h3 className="mt-3 text-base font-semibold tracking-tight text-white">UI details that feel premium</h3>
<p className="mt-2 text-xs leading-relaxed text-slate-200">Spacing, contrast, motion, and consistency—small details that matter.</p>
<a className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-white hover:opacity-80" href="#contact">
                Read more
                <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</article>
</div>
</div>
</section>

<section className="scroll-mt-24" id="contact">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
<div className="reveal flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Contact</h2>
<p className="mt-2 text-sm text-slate-200 sm:text-base">Message us, chat on WhatsApp, or find us on the map.</p>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-200 shadow-sm hover:bg-emerald-500/15" href="https://wa.me/919016097889?text=Hi%20WebCare%2C%20I%27d%20like%20to%20start%20a%20project." id="whatsappBtn" rel="noopener" target="_blank">
<iconify-icon icon="solar:chat-round-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
            WhatsApp chat
          </a>
</div>
<div className="mt-8 grid gap-6 lg:grid-cols-12">
<div className="reveal lg:col-span-6">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur sm:p-8">
<h3 className="text-2xl font-semibold tracking-tight text-white">Send a message</h3>
<p className="mt-2 text-sm text-slate-200">We’re 24/7 Available.</p>
<form autocomplete="on" className="mt-6 grid gap-4" id="contactForm">
<label className="grid gap-2">
<span className="text-xs font-semibold text-slate-200">Name</span>
<input className="h-11 rounded-2xl border border-white/10 bg-slate-950/30 px-4 text-sm text-white shadow-sm outline-none placeholder:text-slate-400 focus:border-white/25 focus:bg-slate-950/40" name="name" placeholder="Your name" required=""/>
</label>
<label className="grid gap-2">
<span className="text-xs font-semibold text-slate-200">Email</span>
<input className="h-11 rounded-2xl border border-white/10 bg-slate-950/30 px-4 text-sm text-white shadow-sm outline-none placeholder:text-slate-400 focus:border-white/25 focus:bg-slate-950/40" name="email" placeholder="you@company.com" required="" type="email"/>
</label>
<label className="grid gap-2">
<span className="text-xs font-semibold text-slate-200">Message</span>
<textarea className="resize-none rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm text-white shadow-sm outline-none placeholder:text-slate-400 focus:border-white/25 focus:bg-slate-950/40" name="message" placeholder="How can we help?" required="" rows="6"></textarea>
</label>
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm hover:bg-slate-100" type="submit">
<iconify-icon className="text-slate-950" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                    Send
                  </button>
<div aria-live="polite" className="text-xs text-slate-200" id="contactStatus"></div>
</div>
</form>
</div>
<div className="reveal mt-6 grid gap-4 sm:grid-cols-2">
<div className="tiltCard rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</span>
<div>
<div className="text-xs font-semibold text-slate-200">Contact number</div>
<a className="mt-1 block text-sm font-semibold tracking-tight text-white hover:opacity-80" href="tel:+919726303209">9726303209</a>
</div>
</div>
</div>
<div className="tiltCard rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
<iconify-icon icon="solar:chat-round-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</span>
<div>
<div className="text-xs font-semibold text-slate-200">WhatsApp</div>
<a className="mt-1 block text-sm font-semibold tracking-tight text-white hover:opacity-80" href="https://wa.me/919016097889" rel="noopener" target="_blank">9016097889</a>
</div>
</div>
</div>
<div className="tiltCard rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
<iconify-icon icon="solar:mailbox-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</span>
<div>
<div className="text-xs font-semibold text-slate-200">Email</div>
<a className="mt-1 block text-sm font-semibold tracking-tight text-white hover:opacity-80" href="mailto:hellowebcare7@gmail.com">hellowebcare7@gmail.com</a>
</div>
</div>
</div>
<div className="tiltCard rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
<iconify-icon icon="solar:gallery-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</span>
<div>
<div className="text-xs font-semibold text-slate-200">Instagram</div>
<a className="mt-1 block text-sm font-semibold tracking-tight text-white hover:opacity-80" href="https://www.instagram.com/_webcare_?igsh=MWdldjFmem05dGozOQ==" rel="noopener" target="_blank">_webcare_</a>
</div>
</div>
</div>
</div>
</div>
<div className="reveal lg:col-span-6">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur sm:p-8">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-2xl font-semibold tracking-tight text-white">Location</h3>
<p className="mt-2 text-sm text-slate-200">Ahmedabad, New Ranip, Gujarat, India</p>
</div>
<span className="hidden items-center gap-2 rounded-full border border-white/10 bg-slate-950/30 px-3 py-1 text-xs font-medium text-slate-200 shadow-sm sm:inline-flex">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                  Map
                </span>
</div>
<div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/30 shadow-sm">
<iframe className="h-72 w-full sm:h-80" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=New%20Ranip%2C%20Ahmedabad%2C%20Gujarat%2C%20India&amp;output=embed" title="WebCare Location - New Ranip, Ahmedabad">
</iframe>
</div>
<div className="mt-6 grid gap-4 sm:grid-cols-2">
<div className="tiltCard rounded-2xl border border-white/10 bg-slate-950/30 p-5 shadow-sm">
<div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
<iconify-icon icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Working Hours
                  </div>
<div className="mt-2 text-sm font-semibold tracking-tight text-white">24/7 Available</div>
<div className="mt-1 text-xs text-slate-300">Quick support and response</div>
</div>
<div className="tiltCard rounded-2xl border border-white/10 bg-slate-950/30 p-5 shadow-sm">
<div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
<iconify-icon icon="solar:global-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Service area
                  </div>
<div className="mt-2 text-sm font-semibold tracking-tight text-white">India • Remote</div>
<div className="mt-1 text-xs text-slate-300">Serving businesses worldwide</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-slate-950/60">
<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
<div className="grid gap-8 lg:grid-cols-12">
<div className="lg:col-span-5">
<div className="inline-flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5">
<img alt="WebCare logo" className="h-8 w-8 object-contain" onerror="this.style.display='none'; this.parentElement.querySelector('[data-fallback-footer]').classList.remove('hidden');" src="assets/webcare-logo.png"/>
<span className="hidden text-sm font-semibold tracking-tight text-white" data-fallback-footer="">WC</span>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-white">WebCare</div>
<div className="text-xs text-slate-300">Modern websites, built with care.</div>
</div>
</div>
<p className="mt-4 max-w-md text-xs leading-relaxed text-slate-300">
              WebCare provides modern website design, development, and digital solutions for businesses with premium UI, performance, and 24/7 Available support.
            </p>
<div className="mt-5 grid gap-2 text-xs text-slate-300">
<div className="inline-flex items-center gap-2">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<a className="font-semibold text-slate-100 hover:opacity-80" href="tel:+919726303209">9726303209</a>
</div>
<div className="inline-flex items-center gap-2">
<iconify-icon icon="solar:chat-round-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<a className="font-semibold text-slate-100 hover:opacity-80" href="https://wa.me/919016097889" rel="noopener" target="_blank">9016097889</a>
</div>
<div className="inline-flex items-center gap-2">
<iconify-icon icon="solar:mailbox-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<a className="font-semibold text-slate-100 hover:opacity-80" href="mailto:hellowebcare7@gmail.com">hellowebcare7@gmail.com</a>
</div>
<div className="inline-flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-slate-200">Ahmedabad New Ranip</span>
</div>
<div className="inline-flex items-center gap-2">
<iconify-icon icon="solar:gallery-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<a className="font-semibold text-slate-100 hover:opacity-80" href="https://www.instagram.com/_webcare_?igsh=MWdldjFmem05dGozOQ==" rel="noopener" target="_blank">Instagram</a>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid gap-6 sm:grid-cols-3">
<div>
<div className="text-xs font-semibold text-slate-200">Quick links</div>
<div className="mt-3 grid gap-2">
<a className="text-sm font-medium text-slate-300 hover:text-white" href="#home">Home</a>
<a className="text-sm font-medium text-slate-300 hover:text-white" href="#about">About</a>
<a className="text-sm font-medium text-slate-300 hover:text-white" href="#services">Services</a>
<a className="text-sm font-medium text-slate-300 hover:text-white" href="#projects">Portfolio</a>
</div>
</div>
<div>
<div className="text-xs font-semibold text-slate-200">Company</div>
<div className="mt-3 grid gap-2">
<a className="text-sm font-medium text-slate-300 hover:text-white" href="#team">Team</a>
<a className="text-sm font-medium text-slate-300 hover:text-white" href="#reviews">Testimonials</a>
<a className="text-sm font-medium text-slate-300 hover:text-white" href="#blog">Blog</a>
<a className="text-sm font-medium text-slate-300 hover:text-white" href="#contact">Contact</a>
</div>
</div>
<div>
<div className="text-xs font-semibold text-slate-200">Contact</div>
<div className="mt-3 grid gap-2 text-sm text-slate-300">
<a className="font-medium hover:text-white" href="mailto:hellowebcare7@gmail.com">hellowebcare7@gmail.com</a>
<a className="font-medium hover:text-white" href="tel:+919726303209">9726303209</a>
<a className="font-medium hover:text-white" href="https://wa.me/919016097889" rel="noopener" target="_blank">WhatsApp</a>
<a className="font-medium hover:text-white" href="https://www.instagram.com/_webcare_?igsh=MWdldjFmem05dGozOQ==" rel="noopener" target="_blank">Instagram</a>
</div>
</div>
</div>
<div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5 text-xs text-slate-300 backdrop-blur">
<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
<div className="text-slate-300">Hosted by WebCare</div>
<div className="text-slate-400">© WebCare • 24/7 Available • Ahmedabad (New Ranip)</div>
</div>
</div>
</div>
</div>
</div>
</footer>
</main>

    </>
  );
}
