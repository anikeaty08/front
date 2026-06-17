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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', () => {

          const isMobile = window.innerWidth <= 768;

          // Start entrance sequence immediately
          setTimeout(() => {
              initScrollReveals();
              triggerGlitch();
              // Fire typewriter precisely after a 1.2s delay from load
              setTimeout(typewriterEffect, 1200);
          }, 100);

          // 2. Glitch Effect
          function triggerGlitch() {
              const navName = document.getElementById('nav-name');
              navName.classList.add('glitch-active');
              setTimeout(() => {
                  navName.classList.remove('glitch-active');
              }, 800);
          }

          // 3. Typewriter Effect
          const typeText = "I deploy websites in 24–72 hours. Not because I rush — because I've built the system that makes speed the default.";
          const typeContainer = document.getElementById('typewriter-text');
          typeContainer.innerHTML = ''; // Start completely empty to prevent repeating
          let charIndex = 0;

          function typewriterEffect() {
              if (charIndex < typeText.length) {
                  typeContainer.innerHTML += typeText.charAt(charIndex);
                  charIndex++;
                  setTimeout(typewriterEffect, 3000 / typeText.length); // Total duration exactly 3s
              }
          }

          // 4. Smooth Scroll (Lenis)
          const lenis = new Lenis({
              duration: 1.2,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
              direction: 'vertical',
              gestureDirection: 'vertical',
              smooth: true,
              mouseMultiplier: 1,
              smoothTouch: false,
              touchMultiplier: 2,
              infinite: false,
          })

          function raf(time) {
              lenis.raf(time)
              requestAnimationFrame(raf)
          }
          requestAnimationFrame(raf)

          // 5. Scroll Reveals
          function initScrollReveals() {
              const observerOptions = {
                  root: null,
                  rootMargin: '0px',
                  threshold: 0.15
              };

              const observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                      if (entry.isIntersecting) {
                          entry.target.classList.add('active');
                          observer.unobserve(entry.target);
                      }
                  });
              }, observerOptions);

              document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

              // Staggered reveals for systems cards
              document.querySelectorAll('.reveal-slide').forEach((el) => {
                  observer.observe(el);
                  el.style.transform = 'translateX(40px)';
                  el.addEventListener('transitionend', function handler(e) {
                      if(e.propertyName === 'transform' && this.style.opacity == 1) {
                          this.style.transform = 'translateX(0)';
                          this.removeEventListener('transitionend', handler);
                      }
                  });
              });

              // Staggered reveals for thinking cards
              document.querySelectorAll('.reveal-card').forEach((el, index) => {
                  el.classList.add('reveal');
                  el.style.transitionDelay = `${index * 0.08}s`;
                  observer.observe(el);
              });
          }

          // 6. Navigation Blur on Scroll
          const navbar = document.getElementById('navbar');
          window.addEventListener('scroll', () => {
              if (window.scrollY > 50) {
                  navbar.style.background = 'rgba(8,8,8,0.92)';
                  navbar.style.backdropFilter = 'blur(16px)';
                  navbar.style.borderBottomColor = 'rgba(255,255,255,0.05)';
              } else {
                  navbar.style.background = 'transparent';
                  navbar.style.backdropFilter = 'none';
                  navbar.style.borderBottomColor = 'transparent';
              }
          });

          // Desktop Only Interactions
          if (!isMobile) {

              // 7. Custom Cursor
              const dot = document.getElementById('cursor-dot');
              const ring = document.getElementById('cursor-ring');
              let mouseX = window.innerWidth / 2;
              let mouseY = window.innerHeight / 2;
              let ringX = mouseX;
              let ringY = mouseY;

              window.addEventListener('mousemove', (e) => {
                  mouseX = e.clientX;
                  mouseY = e.clientY;

                  dot.style.left = `${mouseX}px`;
                  dot.style.top = `${mouseY}px`;
              });

              // Ring follow lag
              function renderCursor() {
                  ringX += (mouseX - ringX) * 0.12;
                  ringY += (mouseY - ringY) * 0.12;
                  ring.style.left = `${ringX}px`;
                  ring.style.top = `${ringY}px`;
                  requestAnimationFrame(renderCursor);
              }
              requestAnimationFrame(renderCursor);

              // Hover states
              document.querySelectorAll('a, button, .interactive-el').forEach(el => {
                  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
                  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
              });

              // 8. Magnetic Button Effect
              const magneticEl = document.querySelector('.magnetic-wrap');
              if(magneticEl) {
                  magneticEl.addEventListener('mousemove', function(e) {
                      const rect = this.getBoundingClientRect();
                      const h = rect.width / 2;
                      const w = rect.height / 2;
                      const x = e.clientX - rect.left - h;
                      const y = e.clientY - rect.top - w;

                      // Distance check (< 80px approx radius mapped to bounds)
                      const distance = Math.sqrt(x*x + y*y);
                      if(distance < 80) {
                          const shiftX = (x / h) * 8; // Max 8px shift
                          const shiftY = (y / w) * 8;
                          this.firstElementChild.style.transform = `translate(${shiftX}px, ${shiftY}px)`;
                      } else {
                          this.firstElementChild.style.transform = `translate(0px, 0px)`;
                      }
                  });
                  magneticEl.addEventListener('mouseleave', function() {
                      this.firstElementChild.style.transform = `translate(0px, 0px)`;
                      this.firstElementChild.style.transition = `transform 0.3s ease`;
                      setTimeout(() => this.firstElementChild.style.transition = '', 300);
                  });
              }

              // 9. Flashlight Effect on Thinking Section
              const flashlightSection = document.querySelector('.flashlight-container');
              if(flashlightSection) {
                  flashlightSection.addEventListener('mousemove', (e) => {
                      const rect = flashlightSection.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      flashlightSection.style.setProperty('--fx', `${x}px`);
                      flashlightSection.style.setProperty('--fy', `${y}px`);
                  });
              }
          } else {
              // Fix opacity for reveals on mobile if observer fails or to ensure visibility
              const style = document.createElement('style');
              style.innerHTML = `.reveal-slide { opacity: 1 !important; transform: translateX(0) !important; }`;
              document.head.appendChild(style);
          }

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
      

<div id="cursor-dot" style={{left: '502px', top: '239px'}}></div>
<div id="cursor-ring" style={{left: '502px', top: '239px'}}></div>

<nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent" id="navbar" style={{background: 'rgba(8, 8, 8, 0.92)', backdropFilter: 'blur(16px)', borderBottomColor: 'rgba(255, 255, 255, 0.05)'}}>
<div className="max-w-[1200px] mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
<div className="font-heading text-sm font-semibold tracking-[0.15em] text-[#F0F0F0]" id="nav-name">
          CHIRAG KHAIRE
        </div>
<a className="interactive-el hover:brightness-110 transition-all text-sm font-normal text-white font-body bg-blue-500 rounded-md pt-2.5 pr-5 pb-2.5 pl-5" href="/#contact">
          Let's work. →
        </a>
</div>
</nav>

<main className="" id="main-content">

<section className="relative pt-32 pb-20 md:py-[120px] px-6 md:px-12 max-w-[1200px] mx-auto min-h-screen flex items-center">

<div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[-1]" style={{background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,130,246,0.07) 0%, transparent 70%)'}}></div>
<div className="w-full grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 md:gap-8 items-center">

<div className="md:hidden w-full h-[280px] bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden">
<img alt="Chirag Khaire Portrait" className="object-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/24c512c9-5368-40f3-b90f-c83753438e50_1600w.jpg"/>
</div>

<div className="flex flex-col items-start z-10">
<span className="font-mono-custom text-xs tracking-[0.25em] text-blue-500 mb-6 reveal">
              DIGITAL INFRASTRUCTURE
            </span>
<h1 className="font-heading text-5xl md:text-8xl font-bold text-white leading-none tracking-tight mb-8 reveal" style={{animationDelay: '0.1s'}}>
              While you were planning,
              <br/>
              someone else went live.
            </h1>
<div className="min-h-[100px] md:min-h-[80px] reveal" style={{animationDelay: '0.2s'}}>
<p className="mobile-min-color leading-relaxed type-cursor text-lg text-[#888888] font-body" id="typewriter-text">I deploy websites in 24–72 hours. Not because I rush — because I've built the system that makes speed the default.</p>
</div>
<p className="font-mono-custom text-sm text-[#444444] mobile-min-color mt-8 reveal" style={{animationDelay: '0.3s'}}>
              Execution is the only strategy that compounds.
            </p>

<div className="mt-10 reveal interactive-el magnetic-wrap" style={{animationDelay: '0.4s'}}>
<a className="gradient-border-wrapper btn-hover-effect block w-fit" href="#contact">
<div className="gradient-border-inner flex pt-4 pr-8 pb-4 pl-8 items-center justify-center" onclick="window.location.href='https://wa.me/918097215778'" role="button">
<span className="text-base font-normal text-white font-body">
                    Let's work. →
                  </span>
</div>
</a>
</div>
<div className="mt-8 flex gap-6 reveal" style={{animationDelay: '0.5s'}}>
<a className="mobile-min-color hover:text-[#F0F0F0] transition-colors interactive-el text-sm text-[#555555] font-body" href="https://x.com/chiragkhairex">
                X (Twitter)
              </a>
<a className="mobile-min-color hover:text-[#F0F0F0] transition-colors interactive-el text-sm text-[#555555] font-body" href="https://www.linkedin.com/in/chiragkhaire/">
                LinkedIn
              </a>
</div>
</div>

<div className="hidden md:flex w-full h-[500px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.07)] rounded-2xl items-center justify-center reveal overflow-hidden" style={{animationDelay: '0.3s'}}>
<img alt="Chirag Khaire Portrait" className="object-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0df4fc84-6725-44ef-a13d-a95eb0257b36_800w.jpg?w=800&amp;q=80"/>
</div>
</div>
</section>
<div className="section-separator"></div>

<section className="py-20 md:py-[120px] px-6 md:px-12 max-w-[1200px] mx-auto flex flex-col items-center">
<div className="w-full text-center mb-12 reveal">
<span className="font-mono-custom text-xs tracking-[0.25em] text-blue-500 block mb-4">
            WHAT I DEPLOY
          </span>
<h2 className="font-heading text-4xl md:text-6xl font-semibold text-white tracking-tight">
            One offer.
            <br/>
            Delivered with precision.
          </h2>
</div>
<div className="w-full max-w-[700px] bg-[rgba(255,255,255,0.03)] rounded-2xl p-7 md:p-12 pulse-card hover:shadow-[0_0_60px_rgba(59,130,246,0.25),0_0_120px_rgba(59,130,246,0.08)] transition-shadow duration-500 border border-[rgba(59,130,246,0.25)] reveal">
<span className="font-mono-custom text-xs tracking-[0.2em] text-blue-500 block mb-6">
            RAPID WEBSITE DEPLOYMENT
          </span>
<h3 className="font-heading text-3xl font-semibold text-white tracking-tight mb-4">
            You don't have weeks.
            <br/>
            Neither do I.
          </h3>
<p className="font-body text-base font-extralight text-[#C0C0C0] leading-[1.85] mb-8">
            I take your idea — your offer, your positioning, your intent —
            <br className="hidden md:block"/>
            and deploy it as a website that works the moment it goes live.
            <br/>
<br/>
            No mood boards. No three-week timelines.
            <br className="hidden md:block"/>
            No revision loops that kill momentum.
            <br/>
<br/>
            I use Aura, AI systems, and a deployment process I've refined
            <br className="hidden md:block"/>
            to remove every unnecessary step between brief and live.
          </p>
<div className="border-l border-blue-500/40 pl-4 mb-8">
<ul className="font-body text-base text-[#BBBBBB] leading-[2.2] space-y-1">
<li className="">— Full single-page system, structured for conversion</li>
<li className="">— Copy written, placed, and calibrated</li>
<li className="">— Mobile-ready on delivery</li>
<li className="">— Live within 72 hours of brief</li>
</ul>
</div>
<div className="font-heading text-3xl font-bold text-white mb-6" style={{textShadow: '0 0 20px rgba(59,130,246,0.4)'}}>
            Starting from ₹3,000
          </div>
<a className="gradient-border-wrapper btn-hover-effect block w-fit interactive-el" href="#contact">
<div className="gradient-border-inner flex pt-4 pr-8 pb-4 pl-8 items-center justify-center" onclick="window.location.href='https://wa.me/918097215778'" role="button">
<span className="font-body text-base font-normal text-white">
                Let's work. →
              </span>
</div>
</a>
</div>
<p className="font-mono-custom text-xs text-[#333333] mobile-min-color text-center mt-6 reveal">
          "If your timeline is 'sometime next month' — this isn't for you."
        </p>
</section>
<div className="section-separator"></div>

<section className="py-20 md:py-[120px] max-w-[1200px] mx-auto overflow-hidden">
<div className="px-6 md:px-12 mb-12 reveal">
<span className="block text-xs text-blue-500 tracking-[0.25em] font-mono-custom mb-4">WEBSITES DEPLOYED</span>
<h2 className="md:text-6xl text-4xl font-semibold text-white tracking-tight font-heading">Every project enters as a problem. <br/> It leaves as a live website.</h2>
</div>
<div className="relative w-full">

<div className="flex overflow-x-auto snap-x-container gap-6 px-6 md:px-12 pb-8 pt-4">

<div className="snap-item flex-shrink-0 md:w-[500px] md:p-9 reveal-slide hover:border-blue-500/40 md:hover:shadow-[0_0_50px_rgba(59,130,246,0.2),0_0_100px_rgba(59,130,246,0.08)] md:shadow-none transition-all interactive-el duration-500 bg-[rgba(255,255,255,0.03)] w-[88vw] border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-[0_0_30px_rgba(59,130,246,0.12),0_0_60px_rgba(59,130,246,0.05)] backdrop-blur-md" onclick="window.location.href='https://highsequence-shop.aura.build'" role="button" style={{transform: 'translateX(40px)', opacity: '0'}}>
<span className="block text-xs text-blue-500 tracking-[0.2em] font-mono-custom mb-2">PROJECT: HIGH SEQUENCE</span>
<h3 className="text-2xl font-semibold text-white tracking-tight font-heading mb-6">TACTICAL FASHION BRAND</h3>
<div className="border-dashed flex bg-center bg-[rgba(255,255,255,0.02)] w-full h-[200px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/818342b2-6484-4a46-923e-3fa13be04193_800w.png?w=800&amp;q=80)] bg-cover border-white/10 border rounded-lg mb-6 items-center justify-center" onclick="window.location.href='https://highsequence-shop.aura.build'" role="button">
</div>
<div className="mb-4">
<span className="block text-xs text-blue-500 tracking-[0.2em] font-mono-custom mb-2">DESCRIPTION</span>
<p className="leading-relaxed text-base text-[#C0C0C0] font-body">HIGH SEQUENCE is a custom balaclava brand operating at the intersection of tactical aesthetics and editorial fashion. The site alternates between two visual worlds — deep black and full-bleed signal red — with HUD targeting language, coordinate metadata, and terminal command syntax running throughout. Every element reads as a functional UI component. Nothing decorative exists without purpose.</p>
</div>
</div>

<div className="snap-item flex-shrink-0 md:w-[500px] md:p-9 reveal-slide hover:border-blue-500/40 md:hover:shadow-[0_0_50px_rgba(59,130,246,0.2),0_0_100px_rgba(59,130,246,0.08)] md:shadow-none transition-all interactive-el duration-500 bg-[rgba(255,255,255,0.03)] w-[88vw] border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-[0_0_30px_rgba(59,130,246,0.12),0_0_60px_rgba(59,130,246,0.05)] backdrop-blur-md" onclick="window.location.href='https://chxrag-systemprofile.aura.build'" role="button" style={{transform: 'translateX(40px)', opacity: '0', transitionDelay: '0.15s'}}>
<span className="block text-xs text-blue-500 tracking-[0.2em] font-mono-custom mb-2">PROJECT:  ABOUT ME LANDING PAGE</span>
<h3 className="text-2xl font-semibold text-white tracking-tight font-heading mb-6">Digital Identity</h3>
<div className="border-dashed flex bg-center bg-[rgba(255,255,255,0.02)] w-full h-[200px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d656197-65d5-4861-b4dd-7171364c1699_800w.png?w=800&amp;q=80)] bg-cover border-white/10 border rounded-lg mb-6 items-center justify-center" onclick="window.location.href='https://chxrag-systemprofile.aura.build'" role="button">
</div>
<div className="mb-4">
<span className="block text-xs text-blue-500 tracking-[0.2em] font-mono-custom mb-2">DESCRIPTION</span>
<p className="leading-relaxed text-base text-[#C0C0C0] font-body">Designed and architected a personal profile landing page as a modular identity document — full glassmorphism UI, structured copywriting, and a component-level Aura.build brief covering visual tokens, animation specs, and section-by-section build logic.</p>
</div>
</div>

<div className="snap-item flex-shrink-0 md:w-[500px] md:p-9 reveal-slide hover:border-blue-500/40 md:hover:shadow-[0_0_50px_rgba(59,130,246,0.2),0_0_100px_rgba(59,130,246,0.08)] md:shadow-none transition-all interactive-el duration-500 bg-[rgba(255,255,255,0.03)] w-[88vw] border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-[0_0_30px_rgba(59,130,246,0.12),0_0_60px_rgba(59,130,246,0.05)] backdrop-blur-md" style={{transitionDelay: '0.15s'}}>
<span className="block text-xs text-blue-500 tracking-[0.2em] font-mono-custom mb-2">PROJECT: PERSONAL BRAND</span>
<h3 className="text-2xl font-semibold text-white tracking-tight font-heading mb-6">Digital Identity</h3>
<div className="border-dashed flex bg-center bg-[rgba(255,255,255,0.02)] w-full h-[200px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fd83cf18-c041-483f-8c59-a52a938f31d5_800w.png?w=800&amp;q=80)] bg-cover border-white/10 border rounded-lg mb-6 items-center justify-center">
</div>
<div className="mb-4">
<span className="block text-xs text-blue-500 tracking-[0.2em] font-mono-custom mb-2">DESCRIPTION</span>
<p className="leading-relaxed text-base text-[#C0C0C0] font-body">Designed and deployed a single-page perception engine for a digital systems builder. Built to filter visitors, signal authority, and convert only high-intent leads into clients. Executed in under 72 hours using Aura.build + AI systems.</p>
</div>
</div>

<div className="snap-item flex-shrink-0 md:w-[500px] md:p-9 reveal-slide hover:border-blue-500/40 md:hover:shadow-[0_0_50px_rgba(59,130,246,0.2),0_0_100px_rgba(59,130,246,0.08)] md:shadow-none transition-all interactive-el duration-500 cursor-pointer bg-[rgba(255,255,255,0.03)] w-[88vw] border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-[0_0_30px_rgba(59,130,246,0.12),0_0_60px_rgba(59,130,246,0.05)] backdrop-blur-md" onclick="window.location.href='https://anitas-sweethome-kitchen.aura.build'" role="button" style={{transitionDelay: '0.15s'}}>
<span className="block text-xs text-blue-500 tracking-[0.2em] font-mono-custom mb-2">PROJECT: BUSINESSLANDING PAGE</span>
<h3 className="text-2xl font-semibold text-white tracking-tight font-heading mb-6">Cloud Kitchen Landing Page</h3>
<div className="border-dashed flex bg-center bg-[rgba(255,255,255,0.02)] w-full h-[200px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2830dc99-7ef1-4b3e-94ee-b0e78ba60143_800w.png?w=800&amp;q=80)] bg-cover border-white/10 border rounded-lg mb-6 items-center justify-center cursor-pointer" onclick="window.location.href='https://anitas-sweethome-kitchen.aura.build'" role="button">
</div>
<div className="mb-4">
<span className="block text-xs text-blue-500 tracking-[0.2em] font-mono-custom mb-2">DESCRIPTION</span>
<p className="leading-relaxed text-base text-[#C0C0C0] font-body">A full landing page designed and deployed for a Mumbai-based home cloud kitchen specialising in festival dishes and health ladoos. Built on aura.build with a custom baby pink and sky blue palette, Quicksand + Nunito typography, WhatsApp-first ordering flow, and a festival calendar section tailored to the Indian festive calendar. Fully mobile optimised.</p>
</div>
</div>

<div className="snap-item flex-shrink-0 w-6 md:hidden"></div>
</div>
<div className="hidden md:block absolute bottom-0 right-12 text-right">
<span className="font-mono-custom text-xs text-[#444444]">
              SCROLL →
            </span>
</div>
</div>
</section>
<div className="section-separator"></div>

<section className="flashlight-container py-20 md:py-[120px] relative">
<div className="flashlight-bg hidden md:block z-0"></div>
<div className="relative z-10 px-6 md:px-12 max-w-[1200px] mx-auto">
<div className="mb-16 reveal">
<span className="font-mono-custom text-xs tracking-[0.25em] text-blue-500 block mb-4">
              THINKING
            </span>
<h2 className="font-heading text-4xl md:text-6xl font-semibold text-white tracking-tight">
              This is how I see it.
              <br/>
              Agree or don't —
              <br/>
              but you won't forget it.
            </h2>
</div>
<div className="flex flex-col gap-5">

<div className="bg-[rgba(255,255,255,0.02)] border border-white/5 rounded-xl p-6 md:p-9 hover:border-blue-500/25 md:hover:shadow-[0_0_30px_rgba(59,130,246,0.08)] shadow-[0_0_20px_rgba(59,130,246,0.06)] md:shadow-none transition-all duration-300 reveal-card grid grid-cols-1 md:grid-cols-[80px_1fr] items-start interactive-el" style={{transitionDelay: '0s'}}>
<div className="hidden md:block font-heading text-7xl font-bold text-white/5 mt-[-10px]">
                01
              </div>
<div className="">
<span className="md:hidden font-mono-custom text-sm text-blue-500 tracking-[0.15em] block mb-3">
                  01
                </span>
<h3 className="font-heading text-xl font-semibold text-white mb-4 tracking-tight">
                  — ON SPEED
                </h3>
<p className="font-body text-base font-normal text-[#C0C0C0] leading-[1.85]">
                  Speed is not about working fast.
                  <br/>
                  It's about having already solved
                  <br/>
                  the problems that slow everyone else down.
                  <br/>
<br/>
                  When I deliver a site in 72 hours,
                  <br/>
                  I'm not cutting corners.
                  <br/>
                  I'm operating from a system
                  <br/>
                  that removed the corners entirely.
                  <br/>
<br/>
                  Most builders spend the first week
                  <br/>
                  in back-and-forth. I spend it shipping.
                  <br/>
<br/>
                  That's not hustle. That's architecture.
                </p>
</div>
</div>

<div className="bg-[rgba(255,255,255,0.02)] border border-white/5 rounded-xl p-6 md:p-9 hover:border-blue-500/25 md:hover:shadow-[0_0_30px_rgba(59,130,246,0.08)] shadow-[0_0_20px_rgba(59,130,246,0.06)] md:shadow-none transition-all duration-300 reveal-card grid grid-cols-1 md:grid-cols-[80px_1fr] items-start interactive-el border-t md:border-t-0" style={{transitionDelay: '0.08s'}}>
<div className="hidden md:block font-heading text-7xl font-bold text-white/5 mt-[-10px]">
                02
              </div>
<div className="">
<span className="md:hidden font-mono-custom text-sm text-blue-500 tracking-[0.15em] block mb-3">
                  02
                </span>
<h3 className="font-heading text-xl font-semibold text-white mb-4 tracking-tight">
                  — ON WEBSITES
                </h3>
<p className="font-body text-base font-normal text-[#C0C0C0] leading-[1.85]">
                  A website is not a design project.
                  <br/>
                  It is a decision-making environment.
                  <br/>
<br/>
                  Every pixel, every line of copy,
                  <br/>
                  every second of load time
                  <br/>
                  is either moving your visitor
                  <br/>
                  toward a decision — or away from it.
                  <br/>
<br/>
                  Most websites move people away.
                  <br/>
                  Not because they're ugly.
                  <br/>
                  Because they're unclear.
                  <br/>
<br/>
                  Clarity converts. Everything else is decoration.
                </p>
</div>
</div>

<div className="bg-[rgba(255,255,255,0.02)] border border-white/5 rounded-xl p-6 md:p-9 hover:border-blue-500/25 md:hover:shadow-[0_0_30px_rgba(59,130,246,0.08)] shadow-[0_0_20px_rgba(59,130,246,0.06)] md:shadow-none transition-all duration-300 reveal-card grid grid-cols-1 md:grid-cols-[80px_1fr] items-start interactive-el border-t md:border-t-0" style={{transitionDelay: '0.16s'}}>
<div className="hidden md:block font-heading text-7xl font-bold text-white/5 mt-[-10px]">
                03
              </div>
<div className="">
<span className="md:hidden font-mono-custom text-sm text-blue-500 tracking-[0.15em] block mb-3">
                  03
                </span>
<h3 className="font-heading text-xl font-semibold text-white mb-4 tracking-tight">
                  — ON POSITIONING
                </h3>
<p className="font-body text-base font-normal text-[#C0C0C0] leading-[1.85]">
                  Nobody wakes up thinking:
                  <br/>
                  "I need a freelancer."
                  <br/>
<br/>
                  They wake up thinking:
                  <br/>
                  "I need this problem gone."
                  <br/>
<br/>
                  If your website reads like a service menu,
                  <br/>
                  you've already lost. You're competing on price.
                  <br/>
<br/>
                  But if your site makes the visitor feel
                  <br/>
                  like they've found the only person
                  <br/>
                  who actually understands their problem —
                  <br/>
                  you've won before the conversation starts.
                  <br/>
<br/>
                  That's positioning. Not what you offer.
                  <br/>
                  How they feel when they find you.
                </p>
</div>
</div>

<div className="bg-[rgba(255,255,255,0.02)] border border-white/5 rounded-xl p-6 md:p-9 hover:border-blue-500/25 md:hover:shadow-[0_0_30px_rgba(59,130,246,0.08)] shadow-[0_0_20px_rgba(59,130,246,0.06)] md:shadow-none transition-all duration-300 reveal-card grid grid-cols-1 md:grid-cols-[80px_1fr] items-start interactive-el border-t md:border-t-0" style={{transitionDelay: '0.24s'}}>
<div className="hidden md:block font-heading text-7xl font-bold text-white/5 mt-[-10px]">
                04
              </div>
<div className="">
<span className="md:hidden font-mono-custom text-sm text-blue-500 tracking-[0.15em] block mb-3">
                  04
                </span>
<h3 className="font-heading text-xl font-semibold text-white mb-4 tracking-tight">
                  — ON AI
                </h3>
<p className="font-body text-base font-normal text-[#C0C0C0] leading-[1.85]">
                  AI didn't level the playing field.
                  <br/>
                  It separated it further.
                  <br/>
<br/>
                  The builders using AI as a tool
                  <br/>
                  inside a clear system —
                  <br/>
                  they're moving faster than agencies
                  <br/>
                  with ten-person teams.
                  <br/>
<br/>
                  The builders using AI as a crutch —
                  <br/>
                  they're producing more average, faster.
                  <br/>
<br/>
                  I use AI to compress execution time.
                  <br/>
                  Not to replace thinking.
                  <br/>
                  The thinking is still mine.
                  <br/>
                  That's the part that matters.
                </p>
</div>
</div>

<div className="bg-[rgba(255,255,255,0.02)] border border-white/5 rounded-xl p-6 md:p-9 hover:border-blue-500/25 md:hover:shadow-[0_0_30px_rgba(59,130,246,0.08)] shadow-[0_0_20px_rgba(59,130,246,0.06)] md:shadow-none transition-all duration-300 reveal-card grid grid-cols-1 md:grid-cols-[80px_1fr] items-start interactive-el border-t md:border-t-0" style={{transitionDelay: '0.32s'}}>
<div className="hidden md:block font-heading text-7xl font-bold text-white/5 mt-[-10px]">
                05
              </div>
<div className="">
<span className="md:hidden font-mono-custom text-sm text-blue-500 tracking-[0.15em] block mb-3">
                  05
                </span>
<h3 className="font-heading text-xl font-semibold text-white mb-4 tracking-tight">
                  — ON CLIENTS
                </h3>
<p className="font-body text-base font-normal text-[#C0C0C0] leading-[1.85]">
                  The clients worth working with
                  <br/>
                  already know what they want.
                  <br/>
                  They're not looking for someone
                  <br/>
                  to explain the internet to them.
                  <br/>
<br/>
                  They're looking for someone
                  <br/>
                  who can take their vision
                  <br/>
                  and make it real — fast, clean, without friction.
                  <br/>
<br/>
                  Those clients don't haggle.
                  <br/>
                  They don't disappear after the brief.
                  <br/>
                  They move.
                  <br/>
<br/>
                  I built this site to find them.
                  <br/>
                  And to make sure everyone else
                  <br/>
                  self-selects out before reaching the contact page.
                </p>
</div>
</div>

<div className="bg-[rgba(255,255,255,0.02)] border border-white/5 rounded-xl p-6 md:p-9 hover:border-blue-500/25 md:hover:shadow-[0_0_30px_rgba(59,130,246,0.08)] shadow-[0_0_20px_rgba(59,130,246,0.06)] md:shadow-none transition-all duration-300 reveal-card grid grid-cols-1 md:grid-cols-[80px_1fr] items-start interactive-el border-t md:border-t-0" style={{transitionDelay: '0.4s'}}>
<div className="hidden md:block font-heading text-7xl font-bold text-white/5 mt-[-10px]">
                06
              </div>
<div className="">
<span className="md:hidden font-mono-custom text-sm text-blue-500 tracking-[0.15em] block mb-3">
                  06
                </span>
<h3 className="font-heading text-xl font-semibold text-white mb-4 tracking-tight">
                  — ON SYSTEMS
                </h3>
<p className="font-body text-base font-normal text-[#C0C0C0] leading-[1.85]">
                  A system is not a process.
                  <br/>
                  A process is a sequence of steps.
                  <br/>
                  A system is a sequence of steps
                  <br/>
                  that produces the same output
                  <br/>
                  regardless of who runs it or what day it is.
                  <br/>
<br/>
                  I build systems for websites.
                  <br/>
                  The same quality. The same speed.
                  <br/>
                  The same outcome — every time.
                  <br/>
<br/>
                  That's the difference between
                  <br/>
                  a builder and an operator.
                </p>
</div>
</div>

<div className="bg-[rgba(255,255,255,0.02)] border border-white/5 rounded-xl p-6 md:p-9 hover:border-blue-500/25 md:hover:shadow-[0_0_30px_rgba(59,130,246,0.08)] shadow-[0_0_20px_rgba(59,130,246,0.06)] md:shadow-none transition-all duration-300 reveal-card grid grid-cols-1 md:grid-cols-[80px_1fr] items-start interactive-el border-t md:border-t-0" style={{transitionDelay: '0.48s'}}>
<div className="hidden md:block font-heading text-7xl font-bold text-white/5 mt-[-10px]">
                07
              </div>
<div className="">
<span className="md:hidden font-mono-custom text-sm text-blue-500 tracking-[0.15em] block mb-3">
                  07
                </span>
<h3 className="font-heading text-xl font-semibold text-white mb-4 tracking-tight">
                  — ON THE LONG GAME
                </h3>
<p className="font-body text-base font-normal text-[#C0C0C0] leading-[1.85]">
                  I'm not building a portfolio.
                  <br/>
                  I'm not collecting gigs.
                  <br/>
                  I'm building infrastructure.
                  <br/>
<br/>
                  The websites I build today
                  <br/>
                  are proof of concept for the systems
                  <br/>
                  I'll be deploying in two years.
                  <br/>
<br/>
                  Every project is a data point.
                  <br/>
                  Every client is a case study.
                  <br/>
                  Every delivery is a demonstration
                  <br/>
                  of what I can compress, deploy,
                  <br/>
                  and make run without breaking.
                  <br/>
<br/>
                  I'm not here for quick money.
                  <br/>
                  I'm here to build something that compounds.
                </p>
</div>
</div>
</div>
</div>
</section>
<div className="section-separator"></div>

<section className="py-20 md:py-[120px] px-6 md:px-12 max-w-[1200px] mx-auto text-left md:text-center flex flex-col items-start md:items-center" id="contact">
<span className="font-mono-custom text-xs tracking-[0.25em] text-blue-500 block mb-6 reveal">
          INITIATE
        </span>
<h2 className="font-heading text-[38px] md:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-6 reveal">
          You've read this far.
          <br/>
          You already know if this is for you.
        </h2>
<p className="font-body text-base font-extralight text-[#BBBBBB] leading-[1.85] mb-12 max-w-2xl text-left md:text-center reveal">
          One message.
          <br className="md:hidden"/>
          Tell me what you're building and when you need it live.
          <br className="hidden md:block"/>
          I'll tell you exactly what I can deploy and how fast.
          <br/>
<br/>
          No forms. No discovery decks.
          <br className="hidden md:block"/>
          Just a direct line to someone who will actually execute.
        </p>
<div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full md:w-auto reveal">

<a className="gradient-border-wrapper btn-hover-effect block w-full md:w-auto interactive-el" href="https://wa.me/918097215778">
<div className="gradient-border-inner flex pt-[18px] pr-10 pb-[18px] pl-10 items-center justify-center" onclick="window.location.href='https://wa.me/918097215778'" role="button">
<span className="text-base font-semibold text-white font-body cursor-pointer" onclick="window.location.href='https://wa.me/918097215778'" role="button">
                WhatsApp →
              </span>
</div>
</a>

<a className="gradient-border-wrapper btn-hover-effect-outline block w-full md:w-auto interactive-el" href="mailto:chiragkhairex@gmail.com">
<div className="gradient-border-inner-outline flex pt-[18px] pr-10 pb-[18px] pl-10 items-center justify-center" onclick="window.location.href='/chiragkhairex@gmail.com'" role="button">
<span className="transition-colors text-base font-semibold text-blue-500 font-body cursor-pointer" onclick="window.location.href='/chiragkhairex@gmail.com'" role="button">
                Email →
              </span>
</div>
</a>
</div>
<p className="font-mono-custom text-xs text-[#555555] mobile-min-color text-center mt-7 w-full reveal">
          Fast decisions only.
          <br className="md:hidden"/>
          If you need a week to decide — the momentum is already gone.
        </p>
</section>

<footer className="flex flex-col border-white/5 border-t pt-16 pb-10 items-center">
<h4 className="font-heading text-base font-semibold tracking-[0.12em] text-white">
          CHIRAG KHAIRE
        </h4>
<p className="font-body text-sm text-[#888888] mobile-min-color mt-2">
          I build the infrastructure. You run it.
        </p>
<div className="flex gap-8 mt-6">
<a className="mobile-min-color hover:text-white transition-colors interactive-el text-sm text-[#666666] font-body" href="https://x.com/chiragkhairex">
            X (Twitter)
          </a>
<a className="mobile-min-color hover:text-white transition-colors interactive-el text-sm text-[#666666] font-body" href="https://www.linkedin.com/in/chiragkhaire/">
            LinkedIn
          </a>
</div>
<p className="mobile-min-color text-xs text-[#444444] font-mono-custom mt-10">©chiragkhairex</p>
</footer>
</main>


    </>
  );
}
