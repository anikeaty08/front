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



    // Lucide icons setup
    document.addEventListener("DOMContentLoaded", () => {
      const { createIcons, Mail, CheckCircle2, Instagram, Twitter, Linkedin, Code2 } = lucide;
      createIcons({
        icons: { Mail, CheckCircle2, Instagram, Twitter, Linkedin, Code2 },
        attrs: { "stroke-width": 1.6 }
      });

      const mailIcon = document.getElementById("mail-icon");
      if (mailIcon) mailIcon.setAttribute("data-lucide", "mail");

      const checkIcon = document.getElementById("check-icon");
      if (checkIcon) checkIcon.setAttribute("data-lucide", "check-circle-2");

      const igIcon = document.getElementById("ig-icon");
      if (igIcon) igIcon.setAttribute("data-lucide", "instagram");

      const xIcon = document.getElementById("x-icon");
      if (xIcon) xIcon.setAttribute("data-lucide", "twitter");

      const liIcon = document.getElementById("li-icon");
      if (liIcon) liIcon.setAttribute("data-lucide", "linkedin");

      const jsIcon = document.getElementById("hero-js-icon");
      if (jsIcon) jsIcon.setAttribute("data-lucide", "code-2");

      createIcons();
    });

    // Waitlist handler
    function handleWaitlist(e) {
      e.preventDefault();
      const formCard = document.getElementById("waitlist-form");
      const successCard = document.getElementById("waitlist-success");
      if (!formCard || !successCard) return;

      formCard.classList.add("sent");
      setTimeout(() => {
        successCard.classList.add("active");
      }, 260);
    }

    // GSAP animations
    document.addEventListener("DOMContentLoaded", () => {
      if (typeof gsap === "undefined") return;
      gsap.registerPlugin(ScrollTrigger);

      // Hero text fade in
      const heroText = document.querySelector("[data-animate='hero-text']");
      if (heroText) {
        gsap.to(heroText, {
          opacity: 1,
          y: 0,
          duration: 1.15,
          ease: "power3.out",
          delay: 0.2
        });
      }

      // Feature lines
      gsap.utils.toArray("[data-animate='feature-line']").forEach((el, i) => {
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%"
          },
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: i * 0.12
        });
      });

      // How it works steps
      gsap.utils.toArray("[data-animate='how-step']").forEach((el, i) => {
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%"
          },
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: i * 0.08
        });
      });

      // Footer fade
      const footerFade = document.querySelector(".footer-fade");
      if (footerFade) {
        gsap.to(footerFade, {
          scrollTrigger: {
            trigger: footerFade,
            start: "top 90%"
          },
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out"
        });
      }

      // Parallax background
      const parallaxBg = document.querySelector(".parallax-bg");
      if (parallaxBg) {
        gsap.to(parallaxBg, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: true
          }
        });
      }
    });

    // Fake live rate animation
    document.addEventListener("DOMContentLoaded", () => {
      const rateEls = [
        { id: "rate-btc", base: 63102.31, variance: 32 },
        { id: "rate-eth", base: 3284.9, variance: 8 },
        { id: "how-rate-btc", base: 63102.31, variance: 42 }
      ];

      function formatCurrency(num) {
        return "$" + num.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      }

      function tick() {
        rateEls.forEach(item => {
          const el = document.getElementById(item.id);
          if (!el) return;
          const offset = (Math.sin(Date.now() / 2200 + item.base) * item.variance);
          const value = item.base + offset;
          el.textContent = formatCurrency(value);
        });
      }

      tick();
      setInterval(tick, 1800);
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
      
<div className="relative isolate overflow-hidden">

<div className="pointer-events-none fixed inset-0 -z-10 hero-orb parallax-bg opacity-70"></div>
<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -left-24 -top-24 w-56 h-56 rounded-full bg-sky-500/10 blur-3xl animate-micro-orbit"></div>
<div className="absolute right-12 top-40 w-72 h-72 rounded-full bg-blue-700/25 blur-3xl animate-micro-orbit" style={{animationDelay: '-8s'}}></div>
<div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[72rem] h-[72rem] bg-gradient-to-b from-sky-500/0 via-blue-700/10 to-sky-900/40 blur-3xl opacity-50"></div>
</div>

<header className="sticky top-0 z-30 border-b border-slate-800/70 bg-[#050509]/80 backdrop-blur-xl">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-4">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative flex h-8 w-8 items-center justify-center rounded-2xl ryze-r-orbit orb-shadow">
<img alt="Ryze R" className="absolute inset-0 h-full w-full rounded-2xl opacity-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span className="font-display text-lg font-semibold tracking-tight bg-gradient-to-tr from-sky-400 to-blue-500 bg-clip-text text-transparent">R</span>
</div>
<div className="flex flex-col leading-tight">
<span className="font-display text-sm font-semibold tracking-tight text-slate-50">Ryze</span>
<span className="text-[10px] font-medium text-slate-400 uppercase tracking-[0.16em]">Pay beyond borders</span>
</div>
</div>
<nav className="hidden items-center gap-8 text-xs font-medium text-slate-300/80 md:flex">
<a className="transition-colors hover:text-sky-200" href="#features">Product</a>
<a className="transition-colors hover:text-sky-200" href="#how-it-works">How it works</a>
<a className="transition-colors hover:text-sky-200" href="#waitlist">Waitlist</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden rounded-full border border-slate-700/70 px-3 py-1.5 text-xs font-medium text-slate-200/80 shadow-[0_0_0_1px_rgba(15,23,42,0.9)] backdrop-blur-sm transition hover:border-slate-500/80 hover:text-slate-50 md:inline-flex">
<span className="mr-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-slate-700/80">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]"></span>
</span>
              Status: pre-launch
            </button>

<div className="inline-block bg-transparent">
<style>
                @property --gradient-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
                @property --gradient-angle-offset { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
                @property --gradient-percent { syntax: "<percentage>"; initial-value: 20%; inherits: false; }
                @property --gradient-shine { syntax: "<color>"; initial-value: #38bdf8; inherits: false; }
                .shiny-cta {
                  --gradient-angle: 0deg;
                  --gradient-angle-offset: 0deg;
                  --gradient-percent: 20%;
                  --gradient-shine: #38bdf8;
                  --shadow-size: 2px;
                  position: relative;
                  overflow: hidden;
                  border-radius: 9999px;
                  padding: 0.7rem 1.5rem;
                  font-size: 0.78rem;
                  line-height: 1.1;
                  font-weight: 500;
                  color: #ffffff;
                  background:
                    linear-gradient(#020617, #020617) padding-box,
                    conic-gradient(
                      from calc(var(--gradient-angle) - var(--gradient-angle-offset)),
                      transparent 0%,
                      #1d4ed8 5%,
                      var(--gradient-shine) 15%,
                      #1d4ed8 30%,
                      transparent 40%,
                      transparent 100%
                    ) border-box;
                  border: 1px solid transparent;
                  box-shadow:
                    inset 0 0 0 1px #020617,
                    0 14px 45px rgba(37,99,235,0.72);
                  outline: none;
                  transition:
                    --gradient-angle-offset 800ms cubic-bezier(0.25, 1, 0.5, 1),
                    --gradient-percent 800ms cubic-bezier(0.25, 1, 0.5, 1),
                    --gradient-shine 800ms cubic-bezier(0.25, 1, 0.5, 1),
                    box-shadow 0.3s,
                    transform 0.25s cubic-bezier(0.19,1,0.22,1);
                  cursor: pointer;
                  isolation: isolate;
                  outline-offset: 4px;
                  font-family: "General Sans", system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif;
                  z-index: 0;
                  animation: border-spin 3s linear infinite;
                }
                @keyframes border-spin {
                  to { --gradient-angle: 360deg; }
                }
                .shiny-cta:active {
                  transform: translateY(1px) scale(0.99);
                }
                .shiny-cta::before {
                  content: '';
                  pointer-events: none;
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%);
                  z-index: 0;
                  --size: calc(100% - 6px);
                  --position: 2px;
                  --space: 4px;
                  width: var(--size);
                  height: var(--size);
                  background: radial-gradient(circle at var(--position) var(--position), white 0.5px, transparent 0) padding-box;
                  background-size: var(--space) var(--space);
                  background-repeat: space;
                  mask-image: conic-gradient(
                    from calc(var(--gradient-angle) + 45deg),
                    black,
                    transparent 10% 90%,
                    black
                  );
                  border-radius: inherit;
                  opacity: 0.25;
                  pointer-events: none;
                }
                .shiny-cta::after {
                  content: '';
                  pointer-events: none;
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%);
                  z-index: 1;
                  width: 100%;
                  aspect-ratio: 1;
                  background: linear-gradient(-50deg, transparent, #38bdf8, transparent);
                  mask-image: radial-gradient(circle at bottom, transparent 40%, black);
                  opacity: 0.7;
                  animation: shimmer 5s linear infinite;
                  animation-play-state: running;
                }
                .shiny-cta span {
                  position: relative;
                  z-index: 2;
                  display: inline-flex;
                  align-items: center;
                  gap: 0.4rem;
                }
                .shiny-cta span::before {
                  content: '';
                  pointer-events: none;
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%);
                  z-index: -1;
                  --size: calc(100% + 1rem);
                  width: var(--size);
                  height: var(--size);
                  box-shadow: inset 0 -0.6ex 2rem 4px #0ea5e9;
                  opacity: 0.35;
                  border-radius: inherit;
                  transition: opacity 800ms cubic-bezier(0.25, 1, 0.5, 1);
                  animation: breathe 5s linear infinite;
                }
                @keyframes shimmer {
                  to { transform: translate(-50%, -50%) rotate(360deg);}
                }
                @keyframes breathe {
                  0%, 100% { transform: translate(-50%, -50%) scale(1);}
                  50% { transform: translate(-50%, -50%) scale(1.1);}
                }
              </style>
<button className="shiny-cta text-[0.78rem] leading-none" onclick="document.getElementById('waitlist').scrollIntoView({behavior:'smooth'})">
<span>
<span>Join the waitlist</span>
</span>
</button>
</div>
</div>
</div>
</div>
</header>

<main>
<section className="relative overflow-hidden" id="hero">
<div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col gap-16 px-4 pb-20 pt-16 sm:px-6 lg:px-4 lg:flex-row lg:items-center lg:gap-12">

<div className="relative order-2 mt-6 flex flex-1 items-center justify-center lg:order-1 lg:mt-0">
<div className="relative h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] md:h-[360px] md:w-[360px]">
<div className="absolute inset-0 rounded-[32px] bg-slate-900/60 shadow-[0_30px_80px_rgba(15,23,42,1),0_0_0_1px_rgba(15,23,42,0.9)] blur-3xl"></div>

<div className="pointer-events-none absolute inset-6 rounded-[32px] bg-gradient-to-tr from-sky-500/10 via-blue-600/45 to-sky-400/10 animate-glow-pulse"></div>

<div className="relative flex h-full w-full items-center justify-center rounded-[40px] ryze-r-orbit animate-float-slow orb-shadow">
<div className="relative flex h-44 w-44 items-center justify-center rounded-[40px] bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900/70 shadow-[0_0_0_1px_rgba(148,163,184,0.2)]">

<div className="pointer-events-none absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.6),transparent_60%)] opacity-60 mix-blend-screen blur-xl"></div>
<div className="pointer-events-none absolute inset-0 rounded-[40px] bg-[conic-gradient(from_120deg_at_30%_0%,rgba(59,130,246,0.35),transparent_45%,transparent_60%,rgba(56,189,248,0.4),rgba(15,23,42,0.7))] mix-blend-screen opacity-80 blur-lg"></div>

<div className="relative h-28 w-28 sm:h-32 sm:w-32">
<img alt="Crypto coins" className="absolute inset-0 h-full w-full rounded-3xl object-cover opacity-10 mix-blend-overlay" src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-[2px] rounded-[26px] bg-gradient-to-br from-slate-950 via-slate-950/90 to-slate-900/80"></div>
<div className="relative flex h-full w-full items-center justify-center">
<span className="font-display text-7xl tracking-tight bg-gradient-to-tr from-sky-400 via-sky-500 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_45px_rgba(59,130,246,0.8)]">
                        R
                      </span>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-0">
<div className="floating-line absolute -left-12 top-1/3 h-px w-[140%] opacity-40 animate-line-flow"></div>
<div className="floating-line absolute -right-10 top-2/3 h-px w-[150%] opacity-30 animate-line-flow" style={{animationDelay: '-4s'}}></div>
</div>

<div className="pointer-events-none absolute inset-0">
<span className="particle-dot absolute left-6 top-7 h-1.5 w-1.5 rounded-full opacity-70 animate-micro-orbit"></span>
<span className="particle-dot absolute right-8 top-10 h-1 w-1 rounded-full opacity-60 animate-micro-orbit" style={{animationDelay: '-5s'}}></span>
<span className="particle-dot absolute left-10 bottom-9 h-1 w-1 rounded-full opacity-70 animate-micro-orbit" style={{animationDelay: '-10s'}}></span>
<span className="particle-dot absolute right-5 bottom-7 h-1.5 w-1.5 rounded-full opacity-70 animate-micro-orbit" style={{animationDelay: '-14s'}}></span>
</div>
</div>
</div>

<div className="relative order-1 flex-1 lg:order-2">
<div className="fade-up space-y-6" data-animate="hero-text">
<p className="inline-flex items-center rounded-full border border-slate-800/80 bg-slate-900/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-slate-300/80 shadow-[0_0_0_1px_rgba(15,23,42,1)]">
<span className="mr-1.5 h-1 w-1 rounded-full bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.9)]"></span>
                Pre-launch access
              </p>
<h1 className="font-display text-[2.4rem] sm:text-[2.8rem] md:text-[3.1rem] lg:text-[3.4rem] font-semibold tracking-tight text-slate-50">
                where <span className="gradient-text">crypto</span> meets<br className="hidden sm:block"/>
                real-world payments.
              </h1>
<p className="max-w-xl text-sm leading-relaxed text-slate-300">
                effortless. instant. borderless.<br className="hidden sm:block"/>
                Ryze is the ultra-fluid bridge between your digital assets and everyday spend — no delays, no friction, no limits.
              </p>
<div className="flex flex-wrap items-center gap-4">
<button className="btn-primary text-xs uppercase tracking-[0.16em]" onclick="document.getElementById('waitlist').scrollIntoView({behavior:'smooth'})">
                  Join the waitlist
                </button>
<div className="flex flex-col text-[11px] text-slate-300/90">
<span className="font-medium uppercase tracking-[0.16em] text-slate-400">Launching January 2026</span>
<span className="mt-1 flex items-center gap-2 text-[11px] text-slate-400">
<span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-slate-800/80">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_7px_rgba(56,189,248,0.9)]"></span>
</span>
                    Early access for first 5,000 signups
                  </span>
</div>
</div>
<div className="flex flex-wrap items-center gap-5 pt-3 text-[11px] text-slate-400">
<div className="flex items-center gap-2">
<span className="h-5 w-5 rounded-full bg-slate-800/80 flex items-center justify-center">
<svg className="h-3.5 w-3.5 text-sky-400" fill="none" id="hero-js-icon" stroke="currentColor" strokeWidth="1.6" viewbox="0 0 24 24"></svg>
</span>
<span>Secure by design</span>
</div>
<div className="flex items-center gap-2">
<span className="h-5 w-5 rounded-full bg-slate-800/80 flex items-center justify-center">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.9)]"></span>
</span>
<span>Live FX &amp; crypto rates</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-y border-slate-800/70 bg-[#050509]/80" id="features">
<div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 lg:px-4 lg:flex-row lg:py-24">
<div className="relative flex-1 space-y-8">
<div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-sky-500/15 blur-3xl"></div>
<h2 className="font-display text-[1.5rem] md:text-[1.7rem] font-semibold tracking-tight text-slate-50">
              hold, convert and spend — all in one tap.
            </h2>
<div className="space-y-6">
<div className="fade-up feature-highlight group" data-animate="feature-line">
<p className="text-[1.1rem] sm:text-[1.2rem] md:text-[1.25rem] font-medium lowercase text-slate-200">
<span>hold, convert and spend — </span>
<span className="gradient-text transition-colors duration-200" data-keyword="">all in one tap.</span>
</p>
<p className="mt-2 max-w-md text-xs leading-relaxed text-slate-400">
                  Instantly move between balances without ever leaving your wallet. Tap once, we handle the routing.
                </p>
</div>
<div className="fade-up feature-highlight group" data-animate="feature-line">
<p className="text-[1.1rem] sm:text-[1.2rem] md:text-[1.25rem] font-medium lowercase text-slate-200">
<span>crypto, fiat, apple pay — </span>
<span className="gradient-text transition-colors duration-200" data-keyword="">unified.</span>
</p>
<p className="mt-2 max-w-md text-xs leading-relaxed text-slate-400">
                  Connect your favorite wallets and cards. Use Apple Pay or Google Pay everywhere, funded by the assets you choose.
                </p>
</div>
<div className="fade-up feature-highlight group" data-animate="feature-line">
<p className="text-[1.1rem] sm:text-[1.2rem] md:text-[1.25rem] font-medium lowercase text-slate-200">
<span>no delays. no friction. </span>
<span className="gradient-text transition-colors duration-200" data-keyword="">no limits.</span>
</p>
<p className="mt-2 max-w-md text-xs leading-relaxed text-slate-400">
                  Live settlement engine with intelligent routing: you spend in seconds, we orchestrate everything behind the scenes.
                </p>
</div>
</div>
</div>

<div className="relative flex-1">
<div className="absolute right-20 -top-16 h-28 w-28 rounded-full bg-sky-500/20 blur-2xl"></div>
<div className="absolute left-0 top-16 h-24 w-24 rounded-full bg-blue-600/30 blur-3xl"></div>
<div className="relative mx-auto max-w-sm">

<div className="glass-panel relative z-10 mx-auto h-[440px] max-w-xs rotate-[-8deg] rounded-[34px] border border-slate-700/70 bg-slate-900/70 px-5 pt-5 pb-6 shadow-[0_28px_120px_rgba(15,23,42,0.9)]">
<div className="mb-5 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-500/90 to-blue-600/90 text-[0.8rem] font-semibold text-slate-50 shadow-[0_0_0_1px_rgba(15,23,42,0.8),0_0_35px_rgba(59,130,246,0.7)]">
                      R
                    </div>
<div className="flex flex-col leading-tight">
<span className="text-[10px] font-medium text-slate-100 tracking-tight">Ryze balance</span>
<span className="text-[9px] text-slate-400 uppercase tracking-[0.16em]">multi-wallet</span>
</div>
</div>
<span className="rounded-full bg-slate-900/80 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-emerald-300/90">
                    live
                  </span>
</div>
<div className="space-y-4">

<div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950/90 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.95)]">
<div className="absolute -right-2 -top-3 h-20 w-20 rounded-full bg-sky-500/30 blur-2xl"></div>
<div className="absolute left-[-18%] top-1/2 h-32 w-32 -translate-y-1/2 rounded-full border border-sky-500/20"></div>
<div className="absolute right-[-30%] top-1/3 h-32 w-32 rounded-full border border-blue-500/25"></div>
<div className="relative flex items-center justify-between">
<div>
<p className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">total value</p>
<p className="mt-1 font-display text-xl font-semibold tracking-tight text-slate-50">$18,420.15</p>
</div>
<div className="text-right">
<p className="text-[10px] font-medium text-emerald-400/90">+3.82% today</p>
<p className="mt-1 text-[10px] text-slate-400">across 4 wallets</p>
</div>
</div>
<div className="mt-4 flex items-center justify-between text-[10px] text-slate-300">
<div className="flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-800/80">
<span className="h-2.5 w-2.5 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.9)]"></span>
</span>
<span>BTC</span>
</div>
<span className="font-medium" id="rate-btc">$63,102.31</span>
<span className="text-emerald-400/85">+1.2%</span>
</div>
<div className="mt-2 flex items-center justify-between text-[10px] text-slate-300">
<div className="flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-800/80">
<span className="h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.9)]"></span>
</span>
<span>ETH</span>
</div>
<span className="font-medium" id="rate-eth">$3,284.90</span>
<span className="text-emerald-400/85">+0.8%</span>
</div>
</div>

<div className="relative overflow-hidden rounded-3xl bg-slate-950/90 p-3 shadow-[0_20px_60px_rgba(15,23,42,1)]">
<div className="absolute -left-8 -top-8 h-20 w-20 rounded-full bg-sky-500/25 blur-2xl"></div>
<div className="absolute -right-6 bottom-0 h-16 w-16 rounded-full bg-blue-600/25 blur-2xl"></div>
<div className="relative flex items-center justify-between">
<p className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">
                        convert
                      </p>
<span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[9px] text-slate-300">
                        crypto → fiat
                      </span>
</div>
<div className="mt-3 flex items-center justify-between rounded-2xl bg-slate-900/90 px-3 py-2.5 text-[11px]">
<div>
<p className="text-[10px] text-slate-400">From</p>
<p className="mt-1 font-medium text-slate-100">0.12 BTC</p>
</div>
<div className="flex items-center justify-center rounded-full bg-sky-500/10 px-2 py-1 text-[9px] text-sky-300">
                        live rate
                      </div>
<div className="text-right">
<p className="text-[10px] text-slate-400">To</p>
<p className="mt-1 font-medium text-slate-100">USD • $7,572</p>
</div>
</div>
<div className="mt-3 flex items-center justify-between text-[10px] text-slate-400">
<p>network fee <span className="text-slate-200 font-medium">$1.12</span></p>
<p>settlement <span className="text-emerald-400 font-medium">~4s</span></p>
</div>
</div>

<div className="relative mt-3 flex items-center justify-between rounded-2xl bg-gradient-to-r from-slate-950 via-slate-950 to-slate-900 px-3 py-2.5 text-[11px] shadow-[0_14px_45px_rgba(15,23,42,0.9)]">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800/90">
<span className="font-display text-[10px] font-semibold tracking-tight"></span>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-medium text-slate-200">Apple Pay</span>
<span className="text-[9px] text-slate-400">Connected via Ryze</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/20">
<span className="absolute h-7 w-7 animate-[ping_1.6s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-sky-500/40"></span>
<span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-sky-500 to-blue-500 text-[10px] font-medium">
                          TAP
                        </span>
</span>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute -right-4 top-12 hidden w-40 rotate-[10deg] sm:block">
<div className="glass-panel rounded-3xl px-3 py-3 text-[10px] text-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.9)]">
<p className="text-[9px] font-medium uppercase tracking-[0.18em] text-slate-400">instant notif</p>
<p className="mt-1 font-medium text-slate-200">Payment approved</p>
<p className="mt-1 text-[9px] text-slate-400">Paid with 60% BTC · 40% USDC</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-[#050509]/90" id="how-it-works">
<div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-4 lg:py-24">
<div className="flex flex-col gap-10 lg:flex-row lg:items-start">
<div className="flex-1 space-y-4">
<h2 className="font-display text-[1.5rem] md:text-[1.7rem] font-semibold tracking-tight text-slate-50">
                how it works — in three effortless moves.
              </h2>
<p className="max-w-md text-xs leading-relaxed text-slate-400">
                Built as a liquid layer between digital assets and traditional rails. Every tap orchestrates routing, conversion and settlement — invisibly.
              </p>
</div>
<div className="relative flex-1">
<div className="absolute -left-12 top-0 h-32 w-32 rounded-full bg-sky-500/20 blur-3xl"></div>
<div className="grid gap-5 md:grid-cols-3">

<div className="fade-up group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-950/90 via-slate-950/95 to-slate-900/95 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.95)]" data-animate="how-step">
<div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-sky-500/25 blur-2xl"></div>
<div className="mb-3 flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 text-[10px] font-medium text-sky-300">1</span>
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300">convert instantly</p>
</div>
<p className="text-[11px] text-slate-300">
                    Crypto → Fiat, Fiat → Crypto with <span className="gradient-text">live rates</span> streaming on-screen.
                  </p>
<div className="mt-3 space-y-1.5 rounded-xl bg-slate-950/90 p-2 text-[10px] text-slate-200">
<div className="flex items-center justify-between">
<span>BTC</span>
<span className="font-medium" id="how-rate-btc">$63,102.31</span>
</div>
<div className="flex items-center justify-between text-slate-400">
<span>FX spread</span>
<span className="text-emerald-400">0.18%</span>
</div>
</div>
<div className="mt-2 flex items-center justify-between text-[9px] text-slate-400">
<span>execution &lt; 5 seconds</span>
<span>smart routing</span>
</div>
</div>

<div className="fade-up group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-950/90 via-slate-950/95 to-slate-900/95 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.95)]" data-animate="how-step">
<div className="absolute -left-6 -top-6 h-16 w-16 rounded-full bg-blue-600/22 blur-2xl"></div>
<div className="mb-3 flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 text-[10px] font-medium text-sky-300">2</span>
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300">tap anywhere</p>
</div>
<p className="text-[11px] text-slate-300">
                    Your cards in <span className="gradient-text">Apple Pay</span> and Google Pay — funded by your assets.
                  </p>
<div className="mt-3 flex items-center gap-3 rounded-xl bg-slate-950/90 p-2 text-[10px] text-slate-200">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-slate-900 to-slate-800">
<span className="font-display text-base"></span>
</div>
<div className="flex-1">
<p className="text-[10px] font-medium text-slate-100">Ryze virtual card</p>
<p className="text-[9px] text-slate-400">tap to pay • dynamic spend routing</p>
</div>
</div>
<div className="mt-2 flex items-center justify-between text-[9px] text-slate-400">
<span>device motion secured</span>
<span>tokenized per use</span>
</div>
</div>

<div className="fade-up group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-950/90 via-slate-950/95 to-slate-900/95 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.95)]" data-animate="how-step">
<div className="absolute -right-8 bottom-0 h-20 w-20 rounded-full bg-sky-500/25 blur-2xl"></div>
<div className="mb-3 flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 text-[10px] font-medium text-sky-300">3</span>
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300">ryze.</p>
</div>
<p className="text-[11px] text-slate-300">
                    unified, fluid, borderless. One balance that adapts to how and where you pay.
                  </p>
<div className="mt-3 flex items-center justify-between rounded-xl bg-slate-950/90 p-3 text-[10px] text-slate-200">
<div className="flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-500 to-cyan-400 text-[11px] font-semibold text-slate-50 shadow-[0_0_0_1px_rgba(15,23,42,0.8),0_0_35px_rgba(56,189,248,0.7)]">
                        R
                      </div>
<span>Ryze balance</span>
</div>
<span className="text-emerald-400">synced in real-time</span>
</div>
<div className="mt-2 flex items-center justify-between text-[9px] text-slate-400">
<span>multi-chain vault</span>
<span>all in one experience</span>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 rounded-full border border-sky-500/30 shadow-[0_0_40px_rgba(56,189,248,0.4)]"></div>
<div className="absolute left-1/2 top-10 h-52 w-52 -translate-x-1/2 border border-sky-500/10 rounded-full"></div>
<span className="particle-dot absolute left-10 top-8 h-1.5 w-1.5 rounded-full opacity-60 animate-micro-orbit"></span>
<span className="particle-dot absolute right-12 top-16 h-1 w-1 rounded-full opacity-60 animate-micro-orbit" style={{animationDelay: '-7s'}}></span>
<span className="particle-dot absolute left-20 bottom-6 h-1.5 w-1.5 rounded-full opacity-60 animate-micro-orbit" style={{animationDelay: '-12s'}}></span>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-slate-800/70 bg-[#050509]" id="waitlist">
<div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-4 lg:py-24">
<div className="grid gap-10 lg:grid-cols-[1.1fr,1fr] lg:items-center">
<div className="space-y-5">
<h2 className="font-display text-[1.8rem] md:text-[2rem] font-semibold tracking-tight text-slate-50">
                the future of payments arrives <span className="gradient-text">january 2026.</span>
</h2>
<p className="max-w-md text-sm leading-relaxed text-slate-300">
                get early access — limited spots. be among the first to bridge your digital assets into everyday payments with a single tap.
              </p>
<div className="flex flex-wrap gap-4 text-[11px] text-slate-400">
<div className="flex items-center gap-2">
<span className="h-5 w-5 rounded-full bg-slate-900/80 flex items-center justify-center">
<span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.9)]"></span>
</span>
<span>No spam — only launch-critical updates</span>
</div>
<div className="flex items-center gap-2">
<span className="h-5 w-5 rounded-full bg-slate-900/80 flex items-center justify-center">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]"></span>
</span>
<span>Priority access to the first beta cohorts</span>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-500/25 blur-3xl"></div>
<div className="absolute -left-12 bottom-0 h-32 w-32 rounded-full bg-blue-600/25 blur-3xl"></div>
<div className="glass-panel waitlist-form relative z-10 rounded-3xl px-5 py-6 sm:px-6" id="waitlist-form">
<form className="space-y-4" onsubmit="handleWaitlist(event)">
<div>
<label className="block text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300" htmlFor="email">
                      email
                    </label>
<div className="mt-2 input-base flex items-center gap-2 px-3 py-1.5">
<svg className="h-4 w-4 text-slate-400" fill="none" id="mail-icon" stroke="currentColor" strokeWidth="1.6" viewbox="0 0 24 24"></svg>
<input autocomplete="email" className="w-full border-0 bg-transparent px-1 py-1 text-xs text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-0" id="email" name="email" placeholder="you@domain.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300" htmlFor="country">
                      country
                    </label>
<div className="mt-2 input-base flex items-center px-3 py-1.5">
<select className="w-full border-0 bg-transparent text-xs text-slate-50 focus:outline-none focus:ring-0" id="country" name="country" required="">
<option className="bg-slate-950 text-slate-400" value="">Select your country</option>
<option className="bg-slate-950 text-slate-100">United States</option>
<option className="bg-slate-950 text-slate-100">United Kingdom</option>
<option className="bg-slate-950 text-slate-100">European Union</option>
<option className="bg-slate-950 text-slate-100">Canada</option>
<option className="bg-slate-950 text-slate-100">Australia</option>
<option className="bg-slate-950 text-slate-100">Singapore</option>
<option className="bg-slate-950 text-slate-100">Hong Kong</option>
<option className="bg-slate-950 text-slate-100">Other</option>
</select>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<label className="relative inline-flex cursor-pointer items-center">
<input className="toggle-input peer sr-only" id="notify-toggle" type="checkbox"/>
<div className="toggle-track flex h-5 w-9 items-center rounded-full bg-slate-800 px-[3px]">
<div className="toggle-thumb h-3.5 w-3.5 rounded-full bg-slate-200 shadow-[0_0_0_1px_rgba(15,23,42,0.9)]"></div>
</div>
</label>
<span className="text-[11px] text-slate-300">
                        Notify me on <span className="gradient-text">launch day only</span>
</span>
</div>
</div>
<div className="pt-2">
<button className="btn-primary flex w-full items-center justify-center text-xs uppercase tracking-[0.18em]" type="submit">
                      Join the waitlist
                    </button>
</div>
<p className="text-[10px] leading-relaxed text-slate-400">
                    By joining, you agree to receive pre-launch product updates from Ryze. You can opt out at any time.
                  </p>
</form>
</div>

<div className="waitlist-success glass-panel absolute inset-0 z-20 flex flex-col items-center justify-center rounded-3xl px-6 py-8 text-center" id="waitlist-success">
<div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/90">
<div className="absolute inset-0 rounded-full bg-sky-500/25 blur-xl"></div>
<svg className="relative h-6 w-6 text-sky-400" fill="none" id="check-icon" stroke="currentColor" strokeWidth="1.8" viewbox="0 0 24 24"></svg>
</div>
<h3 className="font-display text-[1.2rem] font-semibold tracking-tight text-slate-50">
                  you’re in. welcome to ryze.
                </h3>
<p className="mt-2 text-xs leading-relaxed text-slate-300">
                  We’ve saved your spot. As we get closer to January 2026, you’ll receive curated updates and a private invite to the first wave.
                </p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="relative border-t border-slate-800/70 bg-[#050509]/95">
<div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-4">
<div className="footer-fade flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-3">
<div className="flex h-7 w-7 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 text-[0.8rem] font-semibold text-slate-50 shadow-[0_0_0_1px_rgba(15,23,42,0.9),0_0_35px_rgba(56,189,248,0.7)]">
              R
            </div>
<span className="font-display text-sm font-semibold tracking-tight text-slate-100">Ryze</span>
</div>
<div className="flex items-center gap-4 text-xs text-slate-400">
<button className="group inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 transition hover:border-sky-500/80 hover:text-sky-300">
<svg className="h-3.5 w-3.5" fill="none" id="ig-icon" stroke="currentColor" strokeWidth="1.6" viewbox="0 0 24 24"></svg>
</button>
<button className="group inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 transition hover:border-sky-500/80 hover:text-sky-300">
<svg className="h-3.5 w-3.5" fill="none" id="x-icon" stroke="currentColor" strokeWidth="1.6" viewbox="0 0 24 24"></svg>
</button>
<button className="group inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 transition hover:border-sky-500/80 hover:text-sky-300">
<svg className="h-3.5 w-3.5" fill="none" id="li-icon" stroke="currentColor" strokeWidth="1.6" viewbox="0 0 24 24"></svg>
</button>
</div>
<p className="text-[10px] text-slate-500">
            © 2025 RyzePay Limited — All rights reserved.
          </p>
</div>
</div>
</footer>
</div>


    </>
  );
}
