import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // --- 1. Ambient Particle Generation ---
      const particleContainer = document.getElementById('particles');
      const particleCount = 25; // Keep it low for performance

      for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement('div');
          particle.classList.add('particle');

          // Random positioning and sizing
          const size = Math.random() * 2 + 1; // 1px to 3px
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          particle.style.left = `${Math.random() * 100}vw`;

          // Random animation duration and delay
          const duration = Math.random() * 15 + 10; // 10s to 25s
          particle.style.setProperty('--duration', `${duration}s`);
          particle.style.animationDelay = `-${Math.random() * 20}s`;

          // Random opacity
          particle.style.setProperty('--opacity', Math.random() * 0.3 + 0.1);

          particleContainer.appendChild(particle);
      }

      // --- 2. Custom Cursor Logic ---
      const cursor = document.getElementById('magic-cursor');

      document.addEventListener('mousemove', (e) => {
          requestAnimationFrame(() => {
              cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
          });
      });

      // Add 'active' state to cursor on hoverable elements
      const hoverables = document.querySelectorAll('a, button, article');
      hoverables.forEach(el => {
          el.addEventListener('mouseenter', () => {
              cursor.querySelector('.cursor-dot').style.transform = 'scale(2)';
              cursor.querySelector('.cursor-glow').style.transform = 'translate(-50%, -50%) scale(1.5)';
              cursor.querySelector('.cursor-glow').style.background = 'radial-gradient(circle, rgba(212, 196, 168, 0.25) 0%, rgba(0,0,0,0) 70%)';
          });
          el.addEventListener('mouseleave', () => {
              cursor.querySelector('.cursor-dot').style.transform = 'scale(1)';
              cursor.querySelector('.cursor-glow').style.transform = 'translate(-50%, -50%) scale(1)';
              cursor.querySelector('.cursor-glow').style.background = 'radial-gradient(circle, rgba(212, 196, 168, 0.15) 0%, rgba(0,0,0,0) 70%)';
          });
      });

      // --- 3. Reveal on Scroll (Intersection Observer) ---
      const observerOptions = {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px"
      };

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  // Reveal Standard Elements
                  if (entry.target.classList.contains('reveal-hidden')) {
                      entry.target.classList.add('reveal-visible');
                  }

                  // Trace Lines
                  if (entry.target.id === 'about-line') {
                      entry.target.classList.add('active');
                  }

                  // Reveal Images
                  if (entry.target.querySelector('.blur-reveal')) {
                      entry.target.querySelector('.blur-reveal').classList.add('in-view');
                  }

                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      // Target all reveal elements
      document.querySelectorAll('.reveal-hidden').forEach(el => observer.observe(el));
      document.querySelectorAll('#about-line').forEach(el => observer.observe(el));
      document.querySelectorAll('article').forEach(el => observer.observe(el));
    


      // --- Magic Loading & Atmosphere ---
      window.addEventListener('load', () => {
          setTimeout(() => {
              document.getElementById('magic-loader').classList.add('fade-out');
          }, 1500);
      });

      const mCanvas = document.getElementById('magic-bg');
      const mCtx = mCanvas.getContext('2d');
      let mW, mH;

      function mResize() {
          mW = mCanvas.width = window.innerWidth;
          mH = mCanvas.height = window.innerHeight;
      }
      window.addEventListener('resize', mResize);
      mResize();

      // Energy Streams (Wand Trails)
      class MStream {
          constructor() {
              this.pts = [];
              this.cnt = 5;
              this.spd = Math.random() * 0.001 + 0.0005;
              this.off = Math.random() * 1000;
              for (let t = 0; t < this.cnt; t++) {
                  this.pts.push({ x: Math.random() * mW, y: mH - (mH / this.cnt) * t });
              }
          }
          update(t) {
              for (let s = 0; s < this.cnt; s++) {
                  this.pts[s].x += Math.sin(t * this.spd + s + this.off) * 1.5;
              }
          }
          draw(t) {
              t.beginPath();
              t.moveTo(this.pts[0].x, this.pts[0].y);
              for (let s = 1; s < this.pts.length - 1; s++) {
                  const e = (this.pts[s].x + this.pts[s + 1].x) / 2;
                  const i = (this.pts[s].y + this.pts[s + 1].y) / 2;
                  t.quadraticCurveTo(this.pts[s].x, this.pts[s].y, e, i);
              }
              // Abstract magic glow layer
              t.strokeStyle = 'rgba(212, 196, 168, 0.08)';
              t.lineWidth = 60;
              t.lineCap = 'round';
              t.filter = 'blur(40px)';
              t.stroke();
              t.filter = 'none';
              // Core light streak
              t.strokeStyle = 'rgba(255, 255, 255, 0.15)';
              t.lineWidth = 1;
              t.stroke();
          }
      }

      const mStreams = [new MStream(), new MStream(), new MStream()];

      // Animation Loop
      function mAnim(t) {
          mCtx.clearRect(0, 0, mW, mH);
          // Only animate complex streams on desktop for performance
          if (window.innerWidth > 768) {
              mStreams.forEach(s => { s.update(t); s.draw(mCtx); });
          } else {
              // Static minimal gradient fallback for mobile handled via CSS/simple draw
          }
          requestAnimationFrame(mAnim);
      }
      mAnim(0);

      // Intensity Control on Scroll
      window.addEventListener('scroll', () => {
          const scrollPercent = window.scrollY / window.innerHeight;
          mCanvas.style.opacity = Math.max(0.1, 0.6 - scrollPercent * 0.5);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050608] transition-opacity duration-1000" id="magic-loader">
<div className="relative w-32 h-32 mb-8 flex items-center justify-center">

<div className="absolute inset-0 rounded-full bg-[#d4c4a8] opacity-20 blur-2xl animate-pulse"></div>
<div className="absolute inset-0 border border-[#d4c4a8]/30 rounded-full animate-[spin_8s_linear_infinite]"></div>
<div className="absolute inset-4 border border-slate-600/30 rounded-full animate-[spin_5s_linear_infinite_reverse]"></div>
<div className="absolute w-2 h-2 bg-[#d4c4a8] rounded-full shadow-[0_0_30px_rgba(212,196,168,1)] animate-pulse"></div>
</div>
<span className="font-cinematic text-[#d4c4a8] tracking-[0.3em] text-xs uppercase animate-pulse">
        Entering the final chapter...
      </span>
</div>
<canvas className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-60 mix-blend-screen transition-opacity duration-700" id="magic-bg"></canvas>

<div id="magic-cursor">
<div className="cursor-dot"></div>
<div className="cursor-glow"></div>
</div>

<div className="particle-container" id="particles"></div>

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center mix-blend-difference pointer-events-none">
<div className="reveal-hidden pointer-events-auto">

<span className="text-sm tracking-tighter text-slate-200 font-medium opacity-80">
          AZHAR
        </span>
</div>
<div className="flex gap-8 pointer-events-auto reveal-hidden" style={{transitionDelay: '200ms'}}>
<a className="text-[10px] uppercase tracking-widest text-slate-500 hover:text-[#d4c4a8] transition-colors duration-500 group flex items-center gap-2" href="#work">
<span>Work</span>
<div className="w-1 h-1 rounded-full bg-[#d4c4a8] opacity-0 group-hover:opacity-100 transition-opacity"></div>
</a>
<a className="text-[10px] uppercase tracking-widest text-slate-500 hover:text-[#d4c4a8] transition-colors duration-500 group flex items-center gap-2" href="#about">
<span>About</span>
<div className="w-1 h-1 rounded-full bg-[#d4c4a8] opacity-0 group-hover:opacity-100 transition-opacity"></div>
</a>
</div>
</nav>

<header className="min-h-screen flex flex-col relative items-center justify-center px-6">

<div className="absolute inset-0 bg-gradient-to-b from-[#050608]/80 via-[#050608]/20 to-[#050608] z-0 pointer-events-none"></div>
<div className="relative z-10 text-center max-w-4xl space-y-8">
<div className="reveal-hidden" style={{transitionDelay: '300ms'}}>
<p className="text-xs uppercase text-slate-600 tracking-[0.3em] font-medium">
            Product Designer
          </p>
</div>
<h1 className="reveal-hidden font-cinematic text-6xl md:text-8xl lg:text-9xl tracking-tight text-slate-200 font-normal leading-none mix-blend-overlay opacity-90" style={{transitionDelay: '600ms'}}>
          AZHAR
        </h1>
<div className="reveal-hidden space-y-2" style={{transitionDelay: '900ms'}}>
<p className="font-cinematic text-xl md:text-2xl text-slate-400 italic font-light">
            Crafting silence in a noisy world.
          </p>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 reveal-hidden" style={{transitionDelay: '1500ms'}}>
<div className="w-px h-16 bg-gradient-to-b from-slate-800 via-slate-600 to-transparent opacity-50"></div>
</div>
</header>

<section className="py-32 md:py-48 px-6 md:px-12 max-w-screen-xl mx-auto relative" id="about">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">

<div className="hidden md:block md:col-span-1 h-full relative">
<div className="absolute left-0 top-0 bottom-0 w-px magic-line" id="about-line"></div>
</div>
<div className="md:col-span-11 space-y-12">
<div className="reveal-hidden">
<span className="text-xs text-[#d4c4a8] uppercase tracking-[0.2em] opacity-60">
              The Philosophy
            </span>
<h2 className="mt-6 font-cinematic text-3xl md:text-5xl text-slate-200 tracking-tight leading-snug">
              Design is not just visual.
              <br/>
<span className="text-slate-600">It is an act of clarity.</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/5 pt-12 reveal-hidden">
<p className="text-sm md:text-base font-light leading-loose text-slate-400">
              I operate in the stillness between the problem and the solution.
              My process is ancient in principle but modern in execution: strip
              away the decorative to reveal the essential.
            </p>
<p className="text-sm md:text-base font-light leading-loose text-slate-400">
              From complex fintech architectures to narrative-driven
              experiences, I build systems that feel inevitable. No noise. Just
              intent.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#060709] border-t border-white/5 relative overflow-hidden">

<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-900/20 to-transparent pointer-events-none"></div>
<div className="px-6 md:px-12 max-w-screen-xl mx-auto">
<div className="mb-20 reveal-hidden">
<span className="text-xs uppercase tracking-[0.2em] text-slate-600">
            Capabilities
          </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">

<div className="group bg-[#050608] p-10 hover:bg-[#08090b] transition-all duration-1000 relative overflow-hidden reveal-hidden cursor-none" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4c4a8]/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
<iconify-icon className="text-[#d4c4a8] opacity-40 group-hover:opacity-100 transition-opacity duration-700 mb-6" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
<h3 className="font-cinematic text-lg text-slate-200 mb-2">
              User Research
            </h3>
<p className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">
              Uncovering the unspoken needs behind the data.
            </p>
</div>

<div className="group bg-[#050608] p-10 hover:bg-[#08090b] transition-all duration-1000 relative overflow-hidden reveal-hidden cursor-none" style={{transitionDelay: '200ms'}}>
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4c4a8]/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
<iconify-icon className="text-[#d4c4a8] opacity-40 group-hover:opacity-100 transition-opacity duration-700 mb-6" icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
<h3 className="font-cinematic text-lg text-slate-200 mb-2">
              Design Systems
            </h3>
<p className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">
              Architecting scalable languages for digital products.
            </p>
</div>

<div className="group bg-[#050608] p-10 hover:bg-[#08090b] transition-all duration-1000 relative overflow-hidden reveal-hidden cursor-none" style={{transitionDelay: '300ms'}}>
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4c4a8]/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
<iconify-icon className="text-[#d4c4a8] opacity-40 group-hover:opacity-100 transition-opacity duration-700 mb-6" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
<h3 className="font-cinematic text-lg text-slate-200 mb-2">
              Interaction
            </h3>
<p className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">
              Choreographing motion that informs and delights.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-screen-xl mx-auto space-y-48" id="work">

<article className="group relative reveal-hidden">
<div className="flex flex-col md:flex-row gap-8 md:items-end justify-between mb-12 border-b border-white/5 pb-8">
<div>
<h3 className="font-cinematic text-4xl md:text-5xl text-slate-300 font-normal tracking-tight group-hover:text-[#d4c4a8] transition-colors duration-700">
              Obsidian Wealth
            </h3>
<p className="mt-4 text-xs text-slate-500 uppercase tracking-widest">
              Fintech Architecture
            </p>
</div>
<div className="text-right hidden md:block">
<span className="text-xs text-slate-600">2023</span>
</div>
</div>
<div className="w-full aspect-[16/9] bg-[#0c0d10] overflow-hidden relative cursor-none">

<div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 blur-reveal in-view opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-[1.5s] ease-out"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
<span className="font-cinematic text-2xl text-[#d4c4a8] italic tracking-wide">
              Enter the Archive
            </span>
</div>
</div>
</article>

<article className="group relative reveal-hidden">
<div className="flex flex-col md:flex-row gap-8 md:items-end justify-between mb-12 border-b border-white/5 pb-8">
<div>
<h3 className="font-cinematic text-4xl md:text-5xl text-slate-300 font-normal tracking-tight group-hover:text-[#d4c4a8] transition-colors duration-700">
              Lumina Data
            </h3>
<p className="mt-4 text-xs text-slate-500 uppercase tracking-widest">
              Analytics Dashboard
            </p>
</div>
<div className="text-right hidden md:block">
<span className="text-xs text-slate-600">2024</span>
</div>
</div>
<div className="w-full aspect-[16/9] bg-[#0c0d10] overflow-hidden relative cursor-none">
<div className="absolute inset-0 bg-gradient-to-bl from-[#15171e] to-[#0a0b0e] blur-reveal opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-[1.5s] ease-out"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
<span className="font-cinematic text-2xl text-[#d4c4a8] italic tracking-wide">
              Enter the Archive
            </span>
</div>
</div>
</article>
</section>

<section className="py-32 px-6 md:px-12 border-t border-white/5">
<div className="max-w-4xl mx-auto text-center reveal-hidden">
<h2 className="font-cinematic text-3xl text-slate-200 mb-12">
          The Full Chronicle
        </h2>
<div className="relative inline-block group cursor-none">
<div className="absolute -inset-1 bg-gradient-to-r from-[#d4c4a8]/0 via-[#d4c4a8]/20 to-[#d4c4a8]/0 rounded-sm blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
<a className="relative flex items-center justify-between gap-12 bg-[#08090b] border border-white/10 px-8 py-6 rounded-sm hover:border-[#d4c4a8]/30 transition-colors duration-500" href="#">
<div className="text-left">
<span className="block text-slate-200 font-medium tracking-wide">
                Download Resume
              </span>
<span className="text-[10px] text-slate-600 uppercase tracking-widest mt-1">
                PDF • 2.4MB
              </span>
</div>
<iconify-icon className="text-slate-400 group-hover:text-[#d4c4a8] transition-colors duration-500" icon="solar:download-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="py-32 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-800/20 to-transparent pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center justify-center text-center space-y-12 reveal-hidden">
<p className="text-xs text-[#d4c4a8] uppercase tracking-[0.2em] opacity-60">
          Completion
        </p>
<h2 className="font-cinematic text-4xl md:text-6xl text-slate-200 font-normal tracking-tight max-w-2xl leading-tight">
          If the work speaks to you,
          <br/>
<span className="text-slate-500 italic">let’s begin.</span>
</h2>
<a className="group relative px-10 py-5 overflow-hidden border border-white/10 rounded-sm transition-all duration-700 hover:border-[#d4c4a8]/40" href="mailto:hello@azhar.design">
<div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"></div>
<span className="relative z-10 text-xs uppercase tracking-[0.3em] text-slate-400 group-hover:text-[#d4c4a8] transition-colors duration-500">
            Initiate Contact
          </span>
</a>
<div className="pt-24 flex gap-12 text-[10px] text-slate-600 uppercase tracking-widest">
<a className="hover:text-slate-300 transition-colors duration-500" href="#">
            LinkedIn
          </a>
<a className="hover:text-slate-300 transition-colors duration-500" href="#">
            Behance
          </a>
<a className="hover:text-slate-300 transition-colors duration-500" href="#">
            Twitter
          </a>
</div>
<p className="text-[10px] text-slate-800 uppercase tracking-widest mt-12">
          © 2024 Azhar. All rights reserved.
        </p>
</div>
</footer>




    </>
  );
}
