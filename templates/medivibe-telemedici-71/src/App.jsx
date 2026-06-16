import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons();

      // Custom Cursor Logic (Simple Follow)
      const cursor = document.getElementById('custom-cursor');
      
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      });

      // Scroll Reveal Observer
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Only animate once
          }
        });
      }, observerOptions);

      document.querySelectorAll('.reveal-element').forEach(el => {
        observer.observe(el);
      });

      // Medical Plexus Background Animation
      const canvas = document.getElementById('medical-bg');
      const ctx = canvas.getContext('2d');
      let width, height;
      let particles = [];
      
      let mouse = { x: -1000, y: -1000 };
      document.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      });

      function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
      window.addEventListener('resize', resize);
      resize();

      class Particle {
        constructor() {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.vx = (Math.random() - 0.5) * 0.5;
          this.vy = (Math.random() - 0.5) * 0.5;
          this.size = Math.random() * 2 + 1;
        }
        update() {
          this.x += this.vx;
          this.y += this.vy;
          
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx*dx + dy*dy);
          if (distance < 150) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (150 - distance) / 150;
            this.vx -= forceDirectionX * force * 0.05;
            this.vy -= forceDirectionY * force * 0.05;
          }

          if (this.x < 0 || this.x > width) this.vx *= -1;
          if (this.y < 0 || this.y > height) this.vy *= -1;
        }
        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(34, 211, 238, 0.5)'; // Cyan color
          ctx.fill();
        }
      }

      function initParticles() {
        particles = [];
        const particleCount = Math.min(window.innerWidth / 15, 100);
        for (let i = 0; i < particleCount; i++) {
          particles.push(new Particle());
        }
      }

      function animateParticles() {
        ctx.clearRect(0, 0, width, height);
        
        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw();
          
          for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(34, 211, 238, ${0.15 - distance/1000})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
        requestAnimationFrame(animateParticles);
      }

      initParticles();
      animateParticles();

      // Mobile Menu Logic
      const menuBtn = document.getElementById('mobile-menu-btn');
      const closeBtn = document.getElementById('mobile-menu-close');
      const menuIcon = document.getElementById('menu-icon');
      const closeIcon = document.getElementById('close-icon');
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileLinks = document.querySelectorAll('.mobile-link');

      function openMenu() {
        if (mobileMenu) {
          mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
          mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
          document.body.style.overflow = 'hidden';
          menuIcon.classList.add('opacity-0');
          closeIcon.classList.remove('opacity-0');
        }
      }

      function closeMenu() {
        if (mobileMenu) {
          mobileMenu.classList.add('opacity-0', 'pointer-events-none');
          mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
          document.body.style.overflow = '';
          menuIcon.classList.remove('opacity-0');
          closeIcon.classList.add('opacity-0');
        }
      }

      if (menuBtn) menuBtn.addEventListener('click', () => {
        if (mobileMenu.classList.contains('opacity-0')) {
          openMenu();
        } else {
          closeMenu();
        }
      });

      if (closeBtn) closeBtn.addEventListener('click', closeMenu);
      mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

      // Cookie Manager
      const cookieManager = {
          banner: document.getElementById('cookie-banner'),
          init: function() {
              if (!localStorage.getItem('medivibe_cookie_consent')) {
                  setTimeout(() => this.banner.classList.remove('translate-y-24', 'opacity-0'), 1000);
              }
          },
          acceptAll: function() {
              localStorage.setItem('medivibe_cookie_consent', 'true');
              this.hideBanner();
          },
          refuseAll: function() {
              localStorage.setItem('medivibe_cookie_consent', 'false');
              this.hideBanner();
          },
          hideBanner: function() {
              this.banner.classList.add('translate-y-24', 'opacity-0');
          },
          openSettings: function() { alert('Settings Modal Placeholder'); } 
      };
      window.addEventListener('DOMContentLoaded', () => cookieManager.init());
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="custom-cursor"></div>

<canvas className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-30" id="medical-bg"></canvas>

<header className="absolute top-0 left-0 w-full z-50 pointer-events-none">
<nav className="flex w-full max-w-[90rem] mx-auto px-8 py-8 items-center justify-between pointer-events-auto">
<a className="text-interactive hover:opacity-80 transition-opacity text-2xl font-bold tracking-tight text-white font-geist z-50 relative flex items-center gap-2" href="#">
<div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
          MediVibe.
        </a>

<div className="hidden md:flex gap-10 text-slate-400 gap-x-10 gap-y-10 items-center text-sm font-medium tracking-wide">
<a className="text-interactive hover:text-white transition-colors" href="#features">
            Features
          </a>
<a className="text-interactive hover:text-white transition-colors" href="#tech-stack">
            Tech Stack
          </a>
<a className="text-interactive hover:text-white transition-colors" href="#engine">
            AI Engine
          </a>
</div>

<a className="hidden hover:bg-white hover:text-black transition-all md:block text-sm font-semibold text-white border-white/20 border rounded-full pt-2 pr-6 pb-2 pl-6 backdrop-blur-sm bg-white/5 relative group overflow-hidden" href="https://example.com/product" target="_blank">
<span className="relative z-10 flex items-center gap-2">
            Launch App
            <svg className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
<div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent w-[200%] h-full animate-[shimmer_2s_infinite] -translate-x-full group-hover:animate-none"></div>
</a>

<button aria-label="Menu" className="md:hidden relative z-50 p-1 text-white" id="mobile-menu-btn">
<svg className="transition-opacity duration-300" fill="none" height="24" id="menu-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h16"></path>
<path d="M4 6h16"></path>
<path d="M4 18h16"></path>
</svg>
<svg className="transition-opacity duration-300 opacity-0 absolute top-1 left-1" fill="none" height="24" id="close-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</nav>
</header>
<main className="relative w-full flex flex-col">

<section className="flex flex-col overflow-hidden md:min-h-[100vh] md:pt-40 min-h-[90vh] w-full z-10 pt-32 relative items-center justify-start">

<div className="relative z-10 text-center px-4 mt-12 md:mt-16 pb-40 max-w-5xl mx-auto">
<div className="reveal-element inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-8 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
            Gemini 2.0 Flash Powered
          </div>
<h1 className="text-interactive text-[14vw] md:text-[7vw] leading-[0.9] reveal-element delay-100 tracking-tighter text-white font-semibold mb-6">
            MediVibe <br/>
<span className="font-instrument-serif italic font-light text-cyan-200/90 glow-text">Telemedicine.</span>
</h1>
<p className="text-interactive reveal-element delay-200 md:text-xl text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            A fully functional, real-time AI healthcare assistant that doesn't just "chat"—it sees, hears, and speaks like a real doctor using <span className="text-white font-medium">Multimodal AI</span>.
          </p>
<div className="reveal-element delay-300 flex flex-col md:flex-row gap-4 justify-center mt-10">
<a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-slate-950 transition-all duration-300 hover:bg-cyan-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 shadow-[0_0_20px_rgba(255,255,255,0.3)]" href="#features">
<span className="mr-2">Explore Features</span>
<svg className="group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="hill-curve flex w-full h-[35vh] z-20 absolute bottom-0 left-0 shadow-[0_-20px_60px_rgba(0,0,0,0.5)] justify-center items-start pt-12 md:pt-16">
<div className="flex items-center gap-6 opacity-60">
<div className="reveal-element delay-300 flex items-center gap-2">
<svg className="text-cyan-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M23 7l-7 5 7 5V7z"></path><rect height="14" rx="2" ry="2" width="15" x="1" y="5"></rect></svg>
<span className="text-xs font-mono text-slate-400">WebRTC Ready</span>
</div>
<div className="w-px h-4 bg-slate-800"></div>
<div className="reveal-element delay-300 flex items-center gap-2">
<svg className="text-purple-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
<span className="text-xs font-mono text-slate-400">Voice Latency &lt;500ms</span>
</div>
</div>
</div>
</section>

<section className="md:pb-32 -mt-1 bg-[#030712] z-20 pt-12 pb-20 relative overflow-hidden" id="intro">

<div className="absolute inset-0 pointer-events-none z-0">
<svg className="w-full h-full" preserveaspectratio="none">
<defs>
<lineargradient id="beamGradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="rgba(6,182,212,0)"></stop>
<stop offset="50%" stop-color="rgba(6,182,212,0.5)"></stop>
<stop offset="100%" stop-color="rgba(6,182,212,0)"></stop>
</lineargradient>
<mask id="maskPath">
<path className="beam-path" d="M50% 0 V 100%" stroke="white" strokeWidth="2"></path>
</mask>
</defs>
<line stroke="#1e293b" strokeWidth="1" x1="50%" x2="50%" y1="0" y2="100%"></line>
<rect fill="url(#beamGradient)" height="100%" mask="url(#maskPath)" opacity="0.4" width="100%" x="0" y="0"></rect>
</svg>
</div>
<div className="md:px-12 max-w-[90rem] mx-auto px-6 relative z-10">

<div className="max-w-4xl mx-auto text-center mb-32 scroll-mt-32" id="agency">
<h2 className="text-interactive reveal-element md:text-5xl leading-[1.15] text-3xl font-medium text-slate-200 tracking-tight">
              Bridge the gap between patients and immediate <span className="serif md:text-6xl text-4xl italic text-cyan-400 font-instrument-serif">medical triage.</span>
</h2>
<p className="text-interactive reveal-element delay-100 mt-8 text-lg text-slate-400 max-w-2xl mx-auto">
              MediVibe utilizes Live Video Streaming connected directly to Google Gemini 2.0, allowing the AI to visually analyze injuries, skin conditions, and symptoms in real-time.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-24 gap-x-12 gap-y-16 scroll-mt-32" id="features">

<article className="group cursor-pointer relative reveal-element delay-100">
<div className="hidden md:block absolute top-1/2 -right-12 w-12 h-px bg-slate-800"></div>
<div className="hidden md:block absolute top-1/2 -right-12 w-2 h-2 rounded-full bg-cyan-900 border border-cyan-500 z-10"></div>
<div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl bg-slate-900 mb-6 border border-slate-800 transition-all duration-300 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
<div className="absolute inset-0 bg-slate-900 group-hover:scale-105 transition-transform duration-700 ease-in-out">
<div className="w-full h-full flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(6,182,212,0.15),transparent_70%)]"></div>
<div className="w-32 h-32 rounded-full border border-cyan-500/30 flex items-center justify-center animate-pulse">
<div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-400/50 flex items-center justify-center">
<svg className="text-cyan-200" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
</div>
</div>
</div>
</div>
<div className="flex justify-between items-start border-t border-slate-800 pt-5 min-h-[5rem]">
<div className="">
<h3 className="text-interactive md:text-3xl leading-none text-2xl text-slate-100 mb-2 font-semibold tracking-tight group-hover:text-cyan-400 transition-colors">
                    Live Video Diagnosis
                  </h3>
<p className="text-interactive text-sm text-slate-400 leading-relaxed max-w-sm">
                    Users show wounds or symptoms via camera. AI analyzes frames instantly with zero latency via WebRTC.
                  </p>
</div>
<div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 ease-out">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-cyan-400 border border-slate-700">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</div>
</div>
</article>

<article className="group cursor-pointer md:mt-16 relative reveal-element delay-200">
<div className="hidden md:block absolute top-1/2 -left-12 w-12 h-px bg-slate-800"></div>
<div className="hidden md:block absolute top-1/2 -left-3 w-2 h-2 rounded-full bg-purple-900 border border-purple-500 z-10"></div>
<div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl bg-slate-900 mb-6 border border-slate-800 transition-all duration-300 group-hover:border-purple-500/50 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
<div className="absolute inset-0 bg-slate-900 group-hover:scale-105 transition-transform duration-700 ease-in-out">
<div className="w-full h-full flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(168,85,247,0.15),transparent_70%)]"></div>
<div className="flex items-center gap-1">
<div className="w-2 h-8 bg-purple-500/50 rounded-full animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-2 h-16 bg-purple-400/80 rounded-full animate-[pulse_1.2s_ease-in-out_infinite]"></div>
<div className="w-2 h-10 bg-purple-500/50 rounded-full animate-[pulse_0.8s_ease-in-out_infinite]"></div>
<div className="w-2 h-6 bg-purple-600/30 rounded-full animate-[pulse_1.5s_ease-in-out_infinite]"></div>
</div>
</div>
</div>
</div>
<div className="flex justify-between items-start border-t border-slate-800 pt-5 min-h-[5rem]">
<div className="">
<h3 className="text-interactive md:text-3xl leading-none text-2xl text-slate-100 mb-2 font-semibold tracking-tight group-hover:text-purple-400 transition-colors">
                    Real-Time Voice
                  </h3>
<p className="text-interactive text-sm text-slate-400 leading-relaxed max-w-sm">
                    "Walkie-Talkie" interaction. The AI speaks back with human-like latency for natural doctor-patient dialogue.
                  </p>
</div>
<div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 ease-out">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-purple-400 border border-slate-700">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</div>
</div>
</article>

<article className="group cursor-pointer relative reveal-element delay-100">
<div className="hidden md:block absolute top-1/2 -right-12 w-12 h-px bg-slate-800"></div>
<div className="hidden md:block absolute top-1/2 -right-12 w-2 h-2 rounded-full bg-green-900 border border-green-500 z-10"></div>
<div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl bg-slate-900 mb-6 border border-slate-800 transition-all duration-300 group-hover:border-green-500/50 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]">
<div className="absolute inset-0 bg-slate-900 group-hover:scale-105 transition-transform duration-700 ease-in-out">
<div className="w-full h-full flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(34,197,94,0.15),transparent_70%)]"></div>
<div className="relative w-40 h-40 opacity-80">
<svg className="absolute inset-0 text-green-500/20 w-full h-full" viewbox="0 0 100 100">
<path d="M20 50 L50 20 L80 50 L50 80 Z" fill="none" stroke="currentColor" vector-effect="non-scaling-stroke"></path>
<circle className="fill-green-400 animate-ping" cx="50" cy="50" r="5"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<svg className="text-green-400" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c0-3 2.5-5.5 5.5-5.5S23 9 23 12H12z"></path><path d="M12 12c0 3 2.5 5.5 5.5 5.5S23 15 23 12H12z"></path><path d="M12 12c-3 0-5.5-2.5-5.5-5.5S9 1 12 1v11z"></path><path d="M12 12c-3 0-5.5 2.5-5.5 5.5S9 23 12 23v-11z"></path></svg>
</div>
</div>
</div>
</div>
</div>
<div className="flex justify-between items-start border-t border-slate-800 pt-5 min-h-[5rem]">
<div className="">
<h3 className="text-interactive md:text-3xl leading-none text-2xl text-slate-100 mb-2 font-semibold tracking-tight group-hover:text-green-400 transition-colors">
                    Hybrid AI (RAG-Ready)
                  </h3>
<p className="text-interactive text-sm text-slate-400 leading-relaxed max-w-sm">
                    Designed to integrate verified medical protocols (PDFs/Textbooks) for accurate, hallucination-free advice.
                  </p>
</div>
<div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 ease-out">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-green-400 border border-slate-700">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</div>
</div>
</article>

<article className="group cursor-pointer md:mt-16 relative reveal-element delay-200">
<div className="hidden md:block absolute top-1/2 -left-12 w-12 h-px bg-slate-800"></div>
<div className="hidden md:block absolute top-1/2 -left-3 w-2 h-2 rounded-full bg-yellow-900 border border-yellow-500 z-10"></div>
<div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl bg-slate-900 mb-6 border border-slate-800 transition-all duration-300 group-hover:border-yellow-500/50 group-hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]">
<div className="absolute inset-0 bg-slate-900 group-hover:scale-105 transition-transform duration-700 ease-in-out">
<div className="w-full h-full flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(234,179,8,0.15),transparent_70%)]"></div>
<div className="w-24 h-24 rounded-2xl bg-slate-800/50 border border-yellow-500/30 flex items-center justify-center rotate-45">
<svg className="text-yellow-400 -rotate-45" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
</div>
</div>
<div className="flex justify-between items-start border-t border-slate-800 pt-5 min-h-[5rem]">
<div className="">
<h3 className="text-interactive md:text-3xl leading-none text-2xl text-slate-100 mb-2 font-semibold tracking-tight group-hover:text-yellow-400 transition-colors">
                    Privacy-First Design
                  </h3>
<p className="text-interactive text-sm text-slate-400 leading-relaxed max-w-sm">
                    No video stored. Smart bandwidth management (1 FPS stream) ensures it works on 4G rural networks.
                  </p>
</div>
<div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 ease-out">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-yellow-400 border border-slate-700">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</div>
</div>
</article>
</div>

<div className="mt-40 mb-20 scroll-mt-32 relative" id="tech-stack">

<div className="absolute left-[3px] top-0 bottom-0 w-0.5 bg-slate-800 md:hidden"></div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">

<div className="md:col-span-4 flex flex-col items-start reveal-element">
<h2 className="text-interactive md:text-5xl font-instrument-serif text-4xl italic text-slate-200 mb-8">
                  Tech Stack
                </h2>
<div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl w-full">
<p className="text-interactive text-slate-400 text-sm leading-relaxed mb-4">
                    Save 100+ hours of complex development time figuring out real-time audio buffering, echo cancellation, and video-to-token streaming.
                  </p>
<a className="inline-flex w-full justify-center items-center gap-2 bg-white text-slate-950 font-semibold py-3 px-4 rounded-lg hover:bg-slate-200 transition-colors" href="https://example.com/product" target="_blank">
                    Get Source Code
                  </a>
</div>
</div>

<div className="md:col-span-8 flex flex-col relative">

<div className="group py-8 border-b border-slate-800/50 cursor-pointer overflow-hidden transition-all duration-500 relative pl-4 md:pl-0 reveal-element delay-100">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors md:hidden"></div>
<div className="flex items-center justify-between mb-2">
<span className="text-interactive md:text-3xl text-2xl font-medium text-slate-500 group-hover:text-cyan-400 transition-colors duration-300">
                      Frontend Architecture
                    </span>
<div className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-800 group-hover:border-cyan-500 group-hover:bg-cyan-950/30 transition-all duration-300">
<svg className="text-slate-500 group-hover:text-cyan-400 group-hover:rotate-90 transition-all duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</div>
</div>
<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
<div className="overflow-hidden">
<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 max-w-2xl pt-4">
<p className="text-interactive leading-relaxed text-lg font-light text-slate-400">Built for speed and scalability using modern React patterns.</p>
<div className="flex flex-wrap gap-3 mt-4 text-xs font-bold text-white uppercase tracking-wider">
<span className="bg-slate-800 px-3 py-1 rounded">React (Vite)</span>
<span className="bg-slate-800 px-3 py-1 rounded">TypeScript</span>
<span className="bg-slate-800 px-3 py-1 rounded">Tailwind CSS</span>
</div>
</div>
</div>
</div>
</div>

<div className="group py-8 border-b border-slate-800/50 cursor-pointer overflow-hidden transition-all duration-500 relative pl-4 md:pl-0 reveal-element delay-200">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-purple-400 transition-colors md:hidden"></div>
<div className="flex items-center justify-between mb-2">
<span className="text-interactive md:text-3xl text-2xl font-medium text-slate-500 group-hover:text-purple-400 transition-colors duration-300">
                      AI Engine
                    </span>
<div className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-800 group-hover:border-purple-500 group-hover:bg-purple-950/30 transition-all duration-300">
<svg className="text-slate-500 group-hover:text-purple-400 group-hover:rotate-90 transition-all duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</div>
</div>
<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
<div className="overflow-hidden">
<div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 max-w-2xl">
<p className="text-interactive text-lg text-slate-400 leading-relaxed font-light">
                           Powered by Google's latest multimodal models for visual and auditory reasoning.
                        </p>
<div className="flex flex-wrap gap-3 mt-4 text-xs font-bold text-white uppercase tracking-wider">
<span className="bg-slate-800 px-3 py-1 rounded">Google GenAI SDK</span>
<span className="bg-slate-800 px-3 py-1 rounded">Gemini 2.0 Flash</span>
<span className="bg-slate-800 px-3 py-1 rounded">Multimodal</span>
</div>
</div>
</div>
</div>
</div>

<div className="group cursor-pointer overflow-hidden transition-all duration-500 border-slate-800/50 border-b pt-8 pb-8 relative pl-4 md:pl-0 reveal-element delay-300">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-green-400 transition-colors md:hidden"></div>
<div className="flex items-center justify-between mb-2">
<span className="text-interactive md:text-3xl text-2xl font-medium text-slate-500 group-hover:text-green-400 transition-colors duration-300">
                      Real-Time Streaming
                    </span>
<div className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-800 group-hover:border-green-500 group-hover:bg-green-950/30 transition-all duration-300">
<svg className="text-slate-500 group-hover:text-green-400 group-hover:rotate-90 transition-all duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</div>
</div>
<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
<div className="overflow-hidden">
<div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 max-w-2xl">
<p className="text-interactive leading-relaxed text-lg font-light text-slate-400">
                           Native browser capabilities optimized for low bandwidth and high performance.
                        </p>
<div className="flex flex-wrap gap-3 mt-4 text-xs font-bold text-white uppercase tracking-wider">
<span className="bg-slate-800 px-3 py-1 rounded">Web Audio API</span>
<span className="bg-slate-800 px-3 py-1 rounded">HTML5 Canvas</span>
<span className="bg-slate-800 px-3 py-1 rounded">WebRTC</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#030712] pb-6 px-4 md:px-6 relative z-30" id="contact">
<div className="w-full max-w-[90rem] mx-auto bg-slate-900 border border-slate-800 rounded-[2.5rem] md:rounded-[3.5rem] text-slate-300 py-20 px-6 md:px-20 relative overflow-hidden shadow-2xl flex flex-col items-center text-center reveal-element">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-900/20 rounded-full blur-3xl"></div>
<div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
</div>

<div className="flex justify-center mb-8 opacity-20 text-cyan-400 relative z-10">
<svg fill="currentColor" height="48" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M10 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h3v-3zm10 0h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h3v-3z"></path>
</svg>
</div>

<div className="max-w-4xl mx-auto mb-16 relative z-10">
<h2 className="text-interactive md:text-6xl leading-[1.1] text-4xl text-white tracking-tight font-instrument-serif mb-6">
              Ready to launch your telehealth startup?
            </h2>
<p className="text-interactive md:text-lg text-base text-slate-400 font-manrope max-w-2xl mx-auto">
              Get the turnkey foundation today. Save time on WebRTC and focus on patient care.
            </p>
<div className="mt-8">
<a className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg shadow-cyan-900/50 hover:shadow-cyan-500/50 hover:scale-105" href="https://example.com/product" target="_blank">
                 Launch App
                 <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="w-full h-px bg-white/5 mb-16 max-w-6xl mx-auto relative z-10"></div>

<div className="flex flex-col gap-10 w-full gap-x-10 gap-y-10 items-center justify-center relative z-10">

<div className="text-interactive flex items-center gap-3 text-cyan-400/60 uppercase tracking-[0.15em] text-xs font-bold font-manrope">
<div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></div>
<span>San Francisco, CA</span>
</div>

<nav className="flex flex-wrap justify-center gap-8 md:gap-16 text-slate-300 uppercase tracking-[0.15em] text-xs font-bold font-manrope">
<a className="text-interactive hover:text-white transition-colors" href="#features">
                Features
              </a>
<a className="text-interactive hover:text-white transition-colors" href="#tech-stack">
                Tech Stack
              </a>
<a className="text-interactive hover:text-white transition-colors" href="#pricing">
                Pricing
              </a>
<a className="text-interactive hover:text-white transition-colors" href="#contact">
                Contact
              </a>
</nav>

<div className="flex items-center gap-3 text-slate-600 text-xs mt-4">
<span className="font-geist font-bold text-xl text-white opacity-90">
                MediVibe.
              </span>
<span className="tracking-widest font-manrope text-[10px] mt-1">
                © 2025
              </span>
</div>
</div>
</div>
</section>
</main>

<div className="fixed inset-0 z-[60] bg-[#030712] flex flex-col items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300 md:hidden" id="mobile-menu">
<button aria-label="Close menu" className="absolute top-8 right-8 text-white p-2" id="mobile-menu-close">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
<nav className="flex flex-col items-center gap-8 text-3xl font-instrument-serif italic text-white">
<a className="mobile-link hover:text-cyan-400 transition-colors" href="#features">
          Features
        </a>
<a className="mobile-link hover:text-cyan-400 transition-colors" href="#tech-stack">
          Tech Stack
        </a>
<a className="mobile-link hover:text-cyan-400 transition-colors" href="#engine">
          AI Engine
        </a>
<a className="mobile-link mt-4 px-8 py-3 border border-white/20 rounded-full font-manrope not-italic text-lg hover:bg-white hover:text-black transition-all" href="https://example.com/product" target="_blank">
          Launch App
        </a>
</nav>
</div>

<div className="fixed bottom-8 right-4 md:bottom-8 md:right-8 z-50 max-w-sm w-[calc(100%-2rem)] bg-slate-900/90 backdrop-blur-md border border-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.5)] rounded-2xl p-6 transform transition-all duration-500 flex flex-col gap-4 translate-y-24 opacity-0" id="cookie-banner">
<div className="">
<div className="flex items-center gap-2 text-white font-semibold mb-2">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5 10 10 0 0 0-4 4 4 4 0 0 1-5-5"></path>
</svg>
<span>Privacy &amp; Cookies</span>
</div>
<p className="text-sm text-slate-400 leading-relaxed">
          We use cookies to analyze traffic and improve the AI diagnosis experience.
        </p>
</div>
<div className="flex flex-col gap-2">
<div className="flex gap-2 w-full">
<button className="flex-1 py-2.5 px-4 rounded-lg border border-slate-700 text-xs font-bold uppercase tracking-wider text-slate-400 hover:bg-slate-800 transition-colors" onclick="cookieManager.refuseAll()">
            Decline
          </button>
<button className="flex-1 uppercase hover:bg-cyan-600 transition-colors shadow-cyan-900/20 text-xs font-bold text-white tracking-wider bg-cyan-700 rounded-lg pt-2.5 pr-4 pb-2.5 pl-4 shadow-lg" onclick="cookieManager.acceptAll()">
            Accept
          </button>
</div>
<button className="w-full py-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest hover:text-slate-300 transition-colors underline decoration-slate-700 underline-offset-4" onclick="cookieManager.openSettings()">
          Cookie Settings
        </button>
</div>
</div>


    </>
  );
}
