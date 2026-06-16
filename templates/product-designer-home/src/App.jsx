import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons();

      // 1. UPDATE TIME
      function updateTime() {
          const now = new Date();
          const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          const el = document.getElementById('localTime');
          if(el) el.textContent = timeString;
      }
      setInterval(updateTime, 1000);
      updateTime();

      // 2. COPY EMAIL TOAST
      function copyEmail() {
          navigator.clipboard.writeText('hello@portfolio.com');
          const toast = document.getElementById('toast');
          toast.classList.add('show');
          setTimeout(() => {
              toast.classList.remove('show');
          }, 3000);
      }

      // Global Mouse Tracking (Optimized)
      let globalMouseX = 0;
      let globalMouseY = 0;
      window.addEventListener('mousemove', (e) => {
          globalMouseX = e.clientX;
          globalMouseY = e.clientY;
      }, { passive: true });

      // 3. OPTIMIZED WAVE CANVAS WITH INTERSECTION OBSERVER
      (function() {
          const canvas = document.getElementById('waveCanvas');
          const heroSection = document.getElementById('heroSection');
          if (!canvas || !heroSection) return;

          const ctx = canvas.getContext('2d', { alpha: true });
          let width, height;
          let time = 0;
          let animationId;
          let isVisible = true;

          function resize() {
              const parent = canvas.parentElement;
              width = parent.offsetWidth;
              height = parent.offsetHeight;

              const dpr = window.devicePixelRatio || 1;
              canvas.width = width * dpr;
              canvas.height = height * dpr;
              ctx.scale(dpr, dpr);
          }

          function animate() {
              if (!isVisible) return; // Stop if not visible

              ctx.clearRect(0, 0, width, height);
              time += 0.015;

              const rect = canvas.getBoundingClientRect();
              // Simple check to ensure we don't calc if mouse is far
              const mouseX = globalMouseX - rect.left;
              const mouseY = globalMouseY - rect.top;

              const mouseFactorX = Math.max(-1, Math.min(1, (mouseX / width) * 2 - 1));
              const mouseFactorY = Math.max(0, Math.min(1, mouseY / height));

              const rows = 35;
              const stepX = 10;

              for (let r = 0; r < rows; r++) {
                  const yBase = height - (r * 14) - 10;
                  if (yBase < 0) continue;

                  const normalizedRow = r / rows;
                  const rowOpacity = Math.max(0, 1 - (normalizedRow * 1.1));

                  // Optimize: batch paths for same color could be faster, but per-row allows gradient feel
                  ctx.beginPath();
                  for (let x = 0; x < width; x += stepX) {
                      const freq = 0.01 + (mouseFactorX * 0.005);
                      const waveY = Math.sin(x * freq + time + (r * 0.3)) * (20 + (r * 1.5) + (mouseFactorY * 10))
                          + Math.cos(x * 0.015 - time * 0.5) * 8;

                      const y = yBase + waveY;
                      const size = 1.8 + Math.sin(x * 0.02 + time * 1.5) * 1.0;

                      ctx.moveTo(x + size, y);
                      ctx.arc(x, y, size, 0, Math.PI * 2);
                  }

                  if (r % 2 === 0) {
                      ctx.fillStyle = `rgba(36, 54, 41, ${rowOpacity * 0.5})`;
                  } else {
                      ctx.fillStyle = `rgba(100, 144, 110, ${rowOpacity * 0.45})`;
                  }
                  ctx.fill();
              }

              animationId = requestAnimationFrame(animate);
          }

          // Observer to pause animation when off-screen
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  isVisible = entry.isIntersecting;
                  if (isVisible) {
                      if(!animationId) animate();
                  } else {
                      cancelAnimationFrame(animationId);
                      animationId = null;
                  }
              });
          }, { threshold: 0 });

          observer.observe(heroSection);

          window.addEventListener('resize', resize, { passive: true });
          resize();
          animate();
      })();

      // 4. OPTIMIZED 3D TILT EFFECT
      const cards = document.querySelectorAll('.tilt-card');
      cards.forEach(card => {
          let isHovering = false;
          let animationFrameId = null;

          card.addEventListener('mouseenter', () => {
              isHovering = true;
              card.style.transition = 'transform 0.1s ease-out';
          });

          card.addEventListener('mousemove', (e) => {
              if (!isHovering) return;

              if (animationFrameId) cancelAnimationFrame(animationFrameId);

              animationFrameId = requestAnimationFrame(() => {
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;

                  card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
                  card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);

                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;

                  const rotateX = ((y - centerY) / centerY) * -3;
                  const rotateY = ((x - centerX) / centerX) * 3;

                  // Parallax calculations
                  const parallaxX = (x - centerX) * 0.05;
                  const parallaxY = (y - centerY) * 0.05;

                  // Apply transforms
                  const isStack = card.classList.contains('group/stack');
                  const isDesktop = window.innerWidth >= 768;
                  let scaleVal = 1.02;
                  if (isStack && isDesktop) scaleVal = 1.75;
                  else if (isStack) scaleVal = 1.05;

                  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scaleVal}, ${scaleVal}, ${scaleVal})`;

                  // Update Layers (batched)
                  const layers1 = card.getElementsByClassName('parallax-layer-1');
                  const layers2 = card.getElementsByClassName('parallax-layer-2');
                  const layers3 = card.getElementsByClassName('parallax-layer-3');

                  for(let l of layers1) l.style.transform = `translateZ(20px) translateX(${-parallaxX}px) translateY(${-parallaxY}px)`;
                  for(let l of layers2) l.style.transform = `translateZ(40px) translateX(${-parallaxX * 1.5}px) translateY(${-parallaxY * 1.5}px)`;
                  for(let l of layers3) l.style.transform = `translateZ(60px) translateX(${-parallaxX * 2}px) translateY(${-parallaxY * 2}px)`;
              });
          });

          card.addEventListener('mouseleave', () => {
              isHovering = false;
              if (animationFrameId) cancelAnimationFrame(animationFrameId);

              card.style.transition = 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)';
              card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';

              // Reset Layers
              const layers = card.querySelectorAll('[class*="parallax-layer-"]');
              layers.forEach(l => {
                  l.style.transition = 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)';
                  if(l.classList.contains('parallax-layer-1')) l.style.transform = 'translateZ(20px)';
                  if(l.classList.contains('parallax-layer-2')) l.style.transform = 'translateZ(40px)';
                  if(l.classList.contains('parallax-layer-3')) l.style.transform = 'translateZ(60px)';
              });
          });
      });

      // 5. THROTTLED SCROLL FOCUS LOGIC
      const mainSections = document.querySelectorAll('.main-section');
      let isScrolling = false;

      function handleScrollFocus() {
          if (!isScrolling) {
              requestAnimationFrame(() => {
                  const viewportCenter = window.innerHeight / 2;
                  let closestSection = null;
                  let minDistance = Infinity;

                  mainSections.forEach(section => {
                      const rect = section.getBoundingClientRect();
                      const sectionCenter = rect.top + (rect.height / 2);
                      const distance = Math.abs(viewportCenter - sectionCenter);

                      if (distance < minDistance) {
                          minDistance = distance;
                          closestSection = section;
                      }
                  });

                  mainSections.forEach(section => {
                      if (section === closestSection) {
                          if (!section.classList.contains('scroll-focus')) section.classList.add('scroll-focus');
                      } else {
                          if (section.classList.contains('scroll-focus')) section.classList.remove('scroll-focus');
                      }
                  });

                  isScrolling = false;
              });
              isScrolling = true;
          }
      }
      window.addEventListener('scroll', handleScrollFocus, { passive: true });
      // Run once on load
      handleScrollFocus();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bokeh-container">

<div className="bokeh" style="
        width: 50vw; height: 50vw;
        top: -10%; left: -10%;
        background: radial-gradient(circle, rgba(134, 239, 172, 0.25) 0%, transparent 65%);
        --blur: 60px;
        --duration: 20s; 
        --delay: 0s; 
        --move-x: 25vw; --move-y: 15vh;
    "></div>

<div className="bokeh" style="
        width: 60vw; height: 60vw;
        bottom: -20%; right: -20%;
        background: radial-gradient(circle, rgba(74, 222, 128, 0.15) 0%, transparent 70%);
        --blur: 70px;
        --duration: 25s; 
        --delay: -5s; 
        --move-x: -30vw; --move-y: -20vh;
    "></div>

<div className="bokeh" style="
        width: 40vw; height: 40vw;
        top: 30%; right: -15%;
        background: radial-gradient(circle, rgba(253, 224, 71, 0.15) 0%, transparent 60%);
        --blur: 50px;
        --duration: 22s; 
        --delay: -12s; 
        --move-x: -20vw; --move-y: 25vh;
    "></div>

<div className="bokeh" style="
        width: 45vw; height: 45vw;
        bottom: 5%; left: -15%;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, transparent 70%);
        --blur: 50px;
        --duration: 28s; 
        --delay: -8s; 
        --move-x: 25vw; --move-y: -10vh;
    "></div>

<div className="bokeh" style="
        width: 55vw; height: 55vw;
        top: -25%; right: 5%;
        background: radial-gradient(circle, rgba(254, 240, 138, 0.15) 0%, transparent 70%);
        --blur: 80px;
        --duration: 30s; 
        --delay: -2s; 
        --move-x: -15vw; --move-y: 15vh;
    "></div>
</div>
<div className="bg-grid"></div>
<div className="bg-noise"></div>
<div className="" id="toast">
<svg className="text-[#64906E]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline className="" points="20 6 9 17 4 12"></polyline>
</svg>
      Email copied
    </div>

<main className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:p-8 z-10 w-full max-w-[1500px] pt-4 pr-4 pb-24 pl-4 relative gap-x-6 gap-y-6">

<div className="main-section tilt-card bento-card col-span-1 lg:col-span-3 flex flex-col overflow-hidden group min-h-[500px] md:p-16 bg-white border-neutral-100 border rounded-xl pt-10 pr-10 pb-10 pl-10 relative shadow-lg justify-center scroll-focus" id="heroSection" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)', transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'}}>
<div className="tech-corner corner-tl"></div>
<div className="tech-corner corner-tr"></div>
<div className="tech-corner corner-bl"></div>
<div className="tech-corner corner-br"></div>

<div className="absolute inset-x-0 bottom-0 h-[70%] z-0 pointer-events-none transform translate-z-[-20px]">
<canvas className="w-full h-full opacity-80" height="423" id="waveCanvas" width="1434"></canvas>
<div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white via-white/80 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/40 to-transparent"></div>
</div>

<div className="card-glare"></div>

<div className="relative z-10 max-w-5xl pointer-events-none pl-2 flex flex-col justify-center">
<div className="parallax-layer-3 animate-enter inline-flex w-fit gap-3 items-center mb-8 border border-[#64906E]/20 bg-white/60 backdrop-blur-md pl-4 pr-6 py-2 cursor-default shadow-[0_4px_20px_-4px_rgba(100,144,110,0.1)] rounded-full pointer-events-auto hover:scale-105 transition-transform duration-300 ring-1 ring-[#64906E]/10 hover:ring-[#64906E]/30 group/badge" style={{transform: 'translateZ(60px)', transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'}}>
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#64906E] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#64906E]"></span>
</span>
<span className="text-xs font-bold tracking-widest uppercase font-sans text-[#64906E] group-hover/badge:text-[#4A6E50] transition-colors">
              Available
            </span>
<span className="w-px h-3 bg-[#64906E]/30"></span>
<span className="text-xs font-mono text-[#64906E]/80 font-semibold" id="localTime">
              05:55 PM
            </span>
</div>
<h1 className="parallax-layer-2 text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-neutral-900 leading-[0.95] font-sans mb-8 text-balance drop-shadow-sm" style={{transform: 'translateZ(40px)', transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'}}>
<span className="block animate-enter delay-100">
              Hello, This is Mianying
            </span>
<span className="block animate-enter delay-200 mt-2">
<span className="text-gradient-deep">A Product Designer</span>
</span>
</h1>
<p className="parallax-layer-1 animate-enter delay-300 text-neutral-700 text-lg md:text-xl font-normal leading-relaxed max-w-3xl mb-12 text-balance backdrop-blur-[2px] rounded-lg -ml-2 p-2 pointer-events-auto" style={{transform: 'translateZ(20px)', transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'}}>
            Worked on the Arc, Deployment and Governance at
            <a className="inline-block px-1 -mx-1 rounded-sm text-neutral-900 font-semibold border-b border-[#64906E]/30 hover:border-[#64906E] hover:text-[#64906E] transition-all duration-300 hover:scale-110 hover:bg-neutral-50 origin-bottom" href="#">
              Microsoft Azure
            </a>
            ,
            <a className="inline-block px-1 -mx-1 rounded-sm text-neutral-900 font-semibold border-b border-[#64906E]/30 hover:border-[#64906E] hover:text-[#64906E] transition-all duration-300 hover:scale-110 hover:bg-neutral-50 origin-bottom" href="#">
              SAP Labs
            </a>
            , career social app at
            <a className="inline-block px-1 -mx-1 rounded-sm text-neutral-900 font-semibold border-b border-[#64906E]/30 hover:border-[#64906E] hover:text-[#64906E] transition-all duration-300 hover:scale-110 hover:bg-neutral-50 origin-bottom" href="#">
              Soca
            </a>
            and
            <a className="inline-block px-1 -mx-1 rounded-sm text-neutral-900 font-semibold border-b border-[#64906E]/30 hover:border-[#64906E] hover:text-[#64906E] transition-all duration-300 hover:scale-110 hover:bg-neutral-50 origin-bottom" href="#">
              Siemens Healthineers
            </a>
            .
          </p>
<div className="parallax-layer-1 animate-enter delay-400 flex flex-wrap items-center gap-5 pointer-events-auto" style={{transform: 'translateZ(20px)', transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'}}>
<button className="group/btn h-14 px-8 bg-[#0f172a] text-white text-base font-medium transition-all duration-300 hover:scale-[1.03] active:scale-95 flex items-center gap-3 hover:bg-[#020617] shadow-xl shadow-[#64906E]/10 cursor-pointer rounded-lg relative overflow-hidden ring-1 ring-white/10" onclick="copyEmail()">
<span className="relative z-10">Start a Project</span>
<div className="absolute inset-0 bg-gradient-to-r from-[#64906E] to-[#4a6e50] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 ease-out"></div>
<svg className="opacity-70 duration-300 group-hover/btn:translate-x-1 relative z-10 w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</button>
</div>
</div>
</div>

<div className="main-section col-span-1 lg:col-span-2 md:p-8 overflow-visible [&amp;_.tech-corner]:!hidden rounded-xl pt-6 pr-6 pb-6 pl-6 relative backdrop-blur-3xl backdrop-saturate-200 bg-gradient-to-br from-white/60 via-white/40 to-white/20 border border-white/60 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),inset_0_0_30px_rgba(255,255,255,0.7)] transition-all duration-500 hover:shadow-[0_25px_50px_-10px_rgba(0,0,0,0.15),inset_0_0_40px_rgba(255,255,255,0.8)]" id="work">

<div className="absolute inset-0 rounded-xl pointer-events-none shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7),inset_0_0_20px_0_rgba(255,255,255,0.1)]"></div>
<div className="flex flex-col gap-3 mb-8 px-2 relative z-10">
<div className="flex gap-5 gap-x-5 gap-y-5 items-center">
<h2 className="md:text-3xl text-2xl font-bold text-neutral-900 tracking-tight" style={{}}>
              Selected Works
            </h2>
</div>
<p className="leading-relaxed text-lg font-normal text-stone-950/80 max-w-xl">
            High-fidelity interfaces focused on data density &amp; user
            autonomy.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">

<div className="tilt-card group/card flex flex-col h-full cursor-pointer overflow-hidden bg-white/80 border-neutral-200/50 border rounded-xl p-2 relative shadow-sm hover:bg-white/95 transition-colors duration-300" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)', transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'}}>
<div className="card-glare"></div>
<div className="tech-corner corner-tl"></div>
<div className="tech-corner corner-tr"></div>
<div className="relative w-full aspect-[16/11] overflow-hidden rounded-lg bg-neutral-100 ring-1 ring-black/5 z-0 tilt-content" style={{transform: 'translateZ(10px)'}}>
<img alt="Fintech" className="object-top transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover/card:scale-105 group-hover/card:opacity-100 opacity-[0.95] w-full h-full object-cover" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-2 px-3 pb-3 pt-4 flex-1 tilt-content" style={{transform: 'translateZ(20px)'}}>
<h3 className="text-lg font-semibold text-neutral-900 tracking-tight" style={{}}>
                Azure Machine Configuration
              </h3>
<p className="leading-relaxed text-balance text-base font-normal text-neutral-700 mb-4">
                Unified Cloud Configuration Management Service for Windows &amp;
                Linux.
              </p>
<div className="flex flex-wrap gap-2 pt-1 mt-auto">
<span className="px-2.5 py-1 text-[11px] font-medium text-neutral-600 bg-neutral-50/50 backdrop-blur-md border border-neutral-200/60 rounded-lg shadow-sm tracking-wide">
                  React
                </span>
<span className="px-2.5 py-1 text-[11px] font-medium text-neutral-600 bg-neutral-50/50 backdrop-blur-md border border-neutral-200/60 rounded-lg shadow-sm tracking-wide">
                  D3.js
                </span>
<span className="px-2.5 py-1 text-[11px] font-medium text-neutral-600 bg-neutral-50/50 backdrop-blur-md border border-neutral-200/60 rounded-lg shadow-sm tracking-wide">
                  Fintech
                </span>
</div>
</div>
</div>

<div className="tilt-card group/card relative flex flex-col h-full bg-white/80 border border-neutral-200/50 rounded-xl p-2 cursor-pointer overflow-hidden shadow-sm hover:bg-white/95 transition-colors duration-300" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)', transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'}}>
<div className="card-glare"></div>
<div className="tech-corner corner-tr"></div>
<div className="tech-corner corner-bl"></div>
<div className="relative w-full aspect-[16/11] overflow-hidden rounded-lg bg-neutral-100 ring-1 ring-black/5 z-0 tilt-content" style={{transform: 'translateZ(10px)'}}>
<img alt="Security" className="object-cover object-top w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover/card:scale-105 opacity-[0.95] group-hover/card:opacity-100" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-2 px-3 pb-3 pt-4 flex-1 tilt-content" style={{transform: 'translateZ(20px)'}}>
<h3 className="text-lg font-semibold text-neutral-900 tracking-tight" style={{}}>
                Azure Arc
              </h3>
<p className="leading-relaxed text-balance text-base font-normal text-neutral-700 mb-4" style={{}}>
                Microsoft Cloud Hybrid Cloud Operations &amp; Governance
                Service.
              </p>
<div className="flex flex-wrap gap-2 pt-1 mt-auto">
<span className="px-2.5 py-1 text-[11px] font-medium text-neutral-600 bg-neutral-50/50 backdrop-blur-md border border-neutral-200/60 rounded-lg shadow-sm tracking-wide">
                  Rust
                </span>
<span className="px-2.5 py-1 text-[11px] font-medium text-neutral-600 bg-neutral-50/50 backdrop-blur-md border border-neutral-200/60 rounded-lg shadow-sm tracking-wide">
                  WASM
                </span>
<span className="px-2.5 py-1 text-[11px] font-medium text-neutral-600 bg-neutral-50/50 backdrop-blur-md border border-neutral-200/60 rounded-lg shadow-sm tracking-wide">
                  Security
                </span>
</div>
</div>
</div>

<div className="tilt-card group/card relative flex flex-col h-full bg-white/80 border border-neutral-200/50 rounded-xl p-2 cursor-pointer overflow-hidden shadow-sm hover:bg-white/95 transition-colors duration-300" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)', transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'}}>
<div className="card-glare"></div>
<div className="tech-corner corner-tl"></div>
<div className="tech-corner corner-br"></div>
<div className="aspect-[16/11] overflow-hidden z-0 tilt-content bg-neutral-100 w-full ring-black/5 ring-1 rounded-lg relative" style={{transform: 'translateZ(10px)'}}>
<img alt="AI Interface" className="object-top transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover/card:scale-105 group-hover/card:opacity-100 opacity-[0.95] w-full h-full object-cover" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-2 px-3 pb-3 pt-4 flex-1 tilt-content" style={{transform: 'translateZ(20px)'}}>
<h3 className="text-lg font-semibold text-neutral-900 tracking-tight" style={{}}>
                Soca Network
              </h3>
<p className="leading-relaxed text-balance text-base font-normal text-neutral-700 mb-4">
                Bridging the Gap Between Talent and Company Insiders.
              </p>
<div className="flex flex-wrap gap-2 pt-1 mt-auto">
<span className="px-2.5 py-1 text-[11px] font-medium text-neutral-600 bg-neutral-50/50 backdrop-blur-md border border-neutral-200/60 rounded-lg shadow-sm tracking-wide">
                  Python
                </span>
<span className="px-2.5 py-1 text-[11px] font-medium text-neutral-600 bg-neutral-50/50 backdrop-blur-md border border-neutral-200/60 rounded-lg shadow-sm tracking-wide">
                  Next.js
                </span>
<span className="px-2.5 py-1 text-[11px] font-medium text-neutral-600 bg-neutral-50/50 backdrop-blur-md border border-neutral-200/60 rounded-lg shadow-sm tracking-wide">
                  AI
                </span>
</div>
</div>
</div>

<div className="tilt-card group/card relative flex flex-col h-full bg-white/80 border border-neutral-200/50 rounded-xl p-2 cursor-pointer overflow-hidden shadow-sm hover:bg-white/95 transition-colors duration-300" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)', transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'}}>
<div className="card-glare"></div>
<div className="tech-corner corner-tl"></div>
<div className="tech-corner corner-tr"></div>
<div className="relative w-full aspect-[16/11] overflow-hidden rounded-lg bg-neutral-100 ring-1 ring-black/5 z-0 tilt-content" style={{transform: 'translateZ(10px)'}}>
<img alt="IoT" className="object-cover object-top w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover/card:scale-105 opacity-[0.95] group-hover/card:opacity-100" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-2 flex-1 tilt-content pt-4 pr-3 pb-3 pl-3 gap-x-2 gap-y-2" style={{transform: 'translateZ(20px)'}}>
<h3 className="text-lg font-semibold text-neutral-900 tracking-tight">
                SAP Fiori Design System
              </h3>
<p className="leading-relaxed text-balance text-base font-normal text-neutral-700 mb-4" style={{}}>
                Design System for SAP Enterprise Applications
              </p>
<div className="flex flex-wrap gap-2 pt-1 mt-auto">
<span className="px-2.5 py-1 text-[11px] font-medium text-neutral-600 bg-neutral-50/50 backdrop-blur-md border border-neutral-200/60 rounded-lg shadow-sm tracking-wide">
                  IoT
                </span>
<span className="px-2.5 py-1 text-[11px] font-medium text-neutral-600 bg-neutral-50/50 backdrop-blur-md border border-neutral-200/60 rounded-lg shadow-sm tracking-wide">
                  Vue 3
                </span>
<span className="px-2.5 py-1 text-[11px] font-medium text-neutral-600 bg-neutral-50/50 backdrop-blur-md border border-neutral-200/60 rounded-lg shadow-sm tracking-wide">
                  Energy
                </span>
</div>
</div>
</div>

<div className="tilt-card group/card relative flex flex-col h-full bg-white/80 border border-neutral-200/50 rounded-xl p-2 cursor-pointer overflow-hidden shadow-sm hover:bg-white/95 transition-colors duration-300" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)', transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'}}>
<div className="card-glare"></div>
<div className="tech-corner corner-bl"></div>
<div className="tech-corner corner-tr"></div>
<div className="relative w-full aspect-[16/11] overflow-hidden rounded-lg bg-neutral-100 ring-1 ring-black/5 z-0 tilt-content" style={{transform: 'translateZ(10px)'}}>
<img alt="Prism UI" className="object-cover object-top w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover/card:scale-105 opacity-[0.95] group-hover/card:opacity-100" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-2 px-3 pb-3 pt-4 flex-1 tilt-content" style={{transform: 'translateZ(20px)'}}>
<h3 className="text-lg font-semibold text-neutral-900 tracking-tight" style={{}}>
                Azure Governance
              </h3>
<p className="leading-relaxed text-balance text-base font-normal text-neutral-700 mb-4">
                A dashboard that visualizes Azure resource changes for rapid
                root cause analysis
              </p>
<div className="flex flex-wrap gap-2 pt-1 mt-auto">
<span className="px-2.5 py-1 text-[11px] font-medium text-neutral-600 bg-neutral-50/50 backdrop-blur-md border border-neutral-200/60 rounded-lg shadow-sm tracking-wide">
                  Tokens
                </span>
<span className="px-2.5 py-1 text-[11px] font-medium text-neutral-600 bg-neutral-50/50 backdrop-blur-md border border-neutral-200/60 rounded-lg shadow-sm tracking-wide">
                  Storybook
                </span>
<span className="px-2.5 py-1 text-[11px] font-medium text-neutral-600 bg-neutral-50/50 backdrop-blur-md border border-neutral-200/60 rounded-lg shadow-sm tracking-wide">
                  Design Systems
                </span>
</div>
</div>
</div>

<div className="tilt-card group/card relative flex flex-col h-full bg-white/80 border border-neutral-200/50 rounded-xl p-2 cursor-pointer overflow-hidden shadow-sm hover:bg-white/95 transition-colors duration-300" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)', transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'}}>
<div className="card-glare"></div>
<div className="tech-corner corner-tl"></div>
<div className="tech-corner corner-br"></div>
<div className="relative w-full aspect-[16/11] overflow-hidden rounded-lg bg-neutral-100 ring-1 ring-black/5 z-0 tilt-content" style={{transform: 'translateZ(10px)'}}>
<img alt="Atlas Maps" className="object-cover object-top w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover/card:scale-105 opacity-[0.95] group-hover/card:opacity-100" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1549421263-6064833b071b?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-2 px-3 pb-3 pt-4 flex-1 tilt-content" style={{transform: 'translateZ(20px)'}}>
<h3 className="text-lg font-semibold text-neutral-900 tracking-tight" style={{}}>
                Azure Internal Tool
              </h3>
<p className="text-base font-normal text-neutral-700 leading-relaxed text-balance mb-4">
                Geospatial data visualization engine.
              </p>
<div className="flex flex-wrap gap-2 pt-1 mt-auto">
<span className="px-2.5 py-1 text-[11px] font-medium text-neutral-600 bg-neutral-50/50 backdrop-blur-md border border-neutral-200/60 rounded-lg shadow-sm tracking-wide">
                  WebGL
                </span>
<span className="px-2.5 py-1 text-[11px] font-medium text-neutral-600 bg-neutral-50/50 backdrop-blur-md border border-neutral-200/60 rounded-lg shadow-sm tracking-wide">
                  Mapbox
                </span>
<span className="px-2.5 py-1 text-[11px] font-medium text-neutral-600 bg-neutral-50/50 backdrop-blur-md border border-neutral-200/60 rounded-lg shadow-sm tracking-wide">
                  Data
                </span>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-1 flex flex-col gap-x-6 gap-y-6" id="about">

<div className="main-section tilt-card bento-card md:px-8 md:pt-8 md:pb-4 flex flex-col overflow-hidden group/exp hover:shadow-2xl hover:shadow-neutral-900/5 h-fit bg-white rounded-xl pt-6 pr-6 pb-3 pl-6 relative" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)', transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'}}>
<div className="tech-corner corner-tl"></div>
<div className="tech-corner corner-tr"></div>
<div className="tech-corner corner-bl"></div>
<div className="tech-corner corner-br"></div>
<div className="card-glare"></div>
<div className="flex items-center justify-between relative z-10 tilt-content mb-5" style={{transform: 'translateZ(20px)'}}>
<h2 className="md:text-3xl text-2xl font-bold text-neutral-900 tracking-tight">
              Experience
            </h2>
<a aria-label="Resume" className="hover:bg-neutral-100 hover:text-[#64906E] transition-colors text-neutral-400 rounded-full pt-2 pr-2 pb-2 pl-2" href="#">
<svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</a>
</div>
<div className="flex flex-col z-10 tilt-content pl-2 relative" style={{transform: 'translateZ(15px)'}}>
<div className="group/job relative pl-6 pb-0 border-l-2 border-neutral-100 hover:border-[#64906E] transition-colors duration-300">
<span className="absolute -left-[6px] top-3 h-2.5 w-2.5 rounded-full bg-[#64906E] ring-4 ring-white shadow-sm z-10 transition-all duration-300 group-hover/job:scale-125 group-hover/job:ring-[#64906E]/20">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#64906E] opacity-75"></span>
</span>
<div className="flex flex-col cursor-default py-0.5">
<div className="flex justify-between items-baseline mb-0.5">
<h3 className="group-hover/job:text-[#64906E] transition-colors text-lg font-bold text-neutral-900 tracking-tight">
                    Microsoft
                  </h3>
<span className="uppercase text-xs font-bold text-neutral-500 tracking-wider font-mono bg-neutral-100 rounded-md pt-0.5 pr-2 pb-0.5 pl-2">
                    2022-2025
                  </span>
</div>
<div className="text-sm font-semibold text-neutral-600">
                  Senior Product Designer
                </div>
<div className="grid grid-rows-[0fr] group-hover/job:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)]">
<div className="overflow-hidden px-6 -mx-6 pb-6">
<div className="group-hover/job:opacity-100 transition-opacity duration-200 opacity-0 pt-1 pb-1 flex flex-col gap-1">
<div className="group/subitem relative p-4 -mx-4 rounded-xl transition-all duration-300 cursor-default border border-transparent hover:bg-gradient-to-br hover:from-[#64906E]/10 hover:via-white/80 hover:to-white/40 hover:backdrop-blur-xl hover:shadow-[0_24px_48px_-12px_rgba(100,144,110,0.15),inset_0_1px_0_0_rgba(255,255,255,0.9),inset_0_0_20px_rgba(255,255,255,0.5)] hover:ring-1 hover:ring-[#64906E]/20 hover:scale-[1.02] hover:z-20">
<span className="text-neutral-700 font-bold block mb-2 text-xs uppercase tracking-wide group-hover/subitem:text-[#64906E] transition-colors">
                          Azure Arc (Hybrid Cloud Management)
                        </span>
<div className="text-sm font-normal text-neutral-600 group-hover/subitem:text-neutral-900 transition-colors">
<span className="block mb-1.5 pl-2 border-l border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Centralized scattered services into Azure, reducing
                            daily management time by ~60%.
                          </span>
<span className="block mb-1.5 pl-2 border-l border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Enabled concurrent multi-script execution, cutting
                            troubleshooting cycles by 30%.
                          </span>
<span className="block mb-1.5 pl-2 border-l border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Automated the upgrade process, boosting patch
                            compliance to 70% and reducing manual effort by 85%.
                          </span>
<span className="block pl-2 border-l border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Unified monitoring workflows, significantly
                            increasing user onboarding completion and service
                            bundle sales.
                          </span>
</div>
</div>
<div className="group/subitem relative p-4 -mx-4 rounded-xl transition-all duration-300 cursor-default border border-transparent hover:bg-gradient-to-br hover:from-[#64906E]/10 hover:via-white/80 hover:to-white/40 hover:backdrop-blur-xl hover:shadow-[0_24px_48px_-12px_rgba(100,144,110,0.15),inset_0_1px_0_0_rgba(255,255,255,0.9),inset_0_0_20px_rgba(255,255,255,0.5)] hover:ring-1 hover:ring-[#64906E]/20 hover:scale-[1.02] hover:z-20">
<span className="text-neutral-700 font-bold block mb-2 text-xs uppercase tracking-wide group-hover/subitem:text-[#64906E] transition-colors">
                          Azure Governance (Compliance &amp; Safety)
                        </span>
<div className="text-sm font-normal text-neutral-600 group-hover/subitem:text-neutral-900 transition-colors">
<span className="block mb-1.5 pl-2 border-l border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Visualized resource history and enabled batch
                            actions, decreasing related support tickets by 30%.
                          </span>
<span className="block mb-1.5 pl-2 border-l border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Implemented safe-delete and recovery with full audit
                            trails, increasing adoption by 20%.
                          </span>
<span className="block mb-1.5 pl-2 border-l border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Deployed an internal AI assistant to 1,200+ Azure
                            engineers, streamlining daily Resource Manager
                            tasks.
                          </span>
<span className="block pl-2 border-l border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Automated VM provisioning via policies, ensuring
                            seamless connection to monitoring and analytics
                            tools.
                          </span>
</div>
</div>
<div className="group/subitem relative p-4 -mx-4 rounded-xl transition-all duration-300 cursor-default border border-transparent hover:bg-gradient-to-br hover:from-[#64906E]/10 hover:via-white/80 hover:to-white/40 hover:backdrop-blur-xl hover:shadow-[0_24px_48px_-12px_rgba(100,144,110,0.15),inset_0_1px_0_0_rgba(255,255,255,0.9),inset_0_0_20px_rgba(255,255,255,0.5)] hover:ring-1 hover:ring-[#64906E]/20 hover:scale-[1.02] hover:z-20">
<span className="text-neutral-700 font-bold block mb-2 text-xs uppercase tracking-wide group-hover/subitem:text-[#64906E] transition-colors">
                          Azure Deployment
                        </span>
<div className="text-sm font-normal text-neutral-600 group-hover/subitem:text-neutral-900 transition-colors">
<span className="block mb-1.5 pl-2 border-l border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Helps users quickly find which Azure services
                            support Terraform, improving development efficiency.
                          </span>
<span className="block pl-2 border-l border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Allows users to export deployment setups as code
                            with one click, enabling automation and reuse across
                            teams.
                          </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="group/job relative pl-6 pb-0 border-l-2 border-neutral-100 hover:border-[#64906E] transition-colors duration-300">
<span className="absolute -left-[6px] top-3 h-2.5 w-2.5 rounded-full bg-neutral-300 ring-4 ring-white group-hover/job:bg-[#64906E] transition-all duration-300 z-10 group-hover/job:scale-125 group-hover/job:ring-[#64906E]/20"></span>
<div className="flex flex-col cursor-default py-0.5">
<div className="flex justify-between items-baseline mb-0.5">
<h3 className="group-hover/job:text-[#64906E] transition-colors text-lg font-bold text-neutral-900 tracking-tight">
                    SAP
                  </h3>
<span className="uppercase text-xs font-bold text-neutral-500 tracking-wider font-mono bg-neutral-100 rounded-md pt-0.5 pr-2 pb-0.5 pl-2">
                    2020-22
                  </span>
</div>
<div className="text-sm font-semibold text-neutral-600">
                  Product Designer
                </div>
<div className="grid grid-rows-[0fr] group-hover/job:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)]">
<div className="overflow-hidden px-6 -mx-6 pb-6">
<div className="group-hover/job:opacity-100 transition-opacity duration-200 opacity-0 pt-1 pb-1 flex flex-col gap-1">
<div className="group/subitem relative p-4 -mx-4 rounded-xl transition-all duration-300 cursor-default border border-transparent hover:bg-gradient-to-br hover:from-[#64906E]/10 hover:via-white/80 hover:to-white/40 hover:backdrop-blur-xl hover:shadow-[0_24px_48px_-12px_rgba(100,144,110,0.15),inset_0_1px_0_0_rgba(255,255,255,0.9),inset_0_0_20px_rgba(255,255,255,0.5)] hover:ring-1 hover:ring-[#64906E]/20 hover:scale-[1.02] hover:z-20">
<span className="text-neutral-700 font-bold block mb-2 text-xs uppercase tracking-wide group-hover/subitem:text-[#64906E] transition-colors">
                          UX Design Specialist (Conversational Design)
                        </span>
<div className="text-sm font-normal text-neutral-600 group-hover/subitem:text-neutral-900 transition-colors">
<span className="block mb-1.5 pl-2 border-l border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Partnering with the SAP Conversational AI team to
                            define the pure voice control and conversational
                            in-app navigation feature for the SAP business
                            product.
                          </span>
<span className="block mb-1.5 pl-2 border-l border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Led the recreating and managing of the CXD design
                            system on Figma (Web/IOS), focusing on efficiency
                            and collaboration.
                          </span>
<span className="block mb-1.5 pl-2 border-l border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Organized the component’s spec workshop to help the
                            team improve the consistency and readability of the
                            sixteen CXD component specs’ library.
                          </span>
<span className="block pl-2 border-l border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Produced the four wireframes &amp; interactive
                            prototypes for the HR chatbot to show how users will
                            experience solutions.
                          </span>
</div>
</div>
<div className="group/subitem relative p-4 -mx-4 rounded-xl transition-all duration-300 cursor-default border border-transparent hover:bg-gradient-to-br hover:from-[#64906E]/10 hover:via-white/80 hover:to-white/40 hover:backdrop-blur-xl hover:shadow-[0_24px_48px_-12px_rgba(100,144,110,0.15),inset_0_1px_0_0_rgba(255,255,255,0.9),inset_0_0_20px_rgba(255,255,255,0.5)] hover:ring-1 hover:ring-[#64906E]/20 hover:scale-[1.02] hover:z-20">
<span className="text-neutral-700 font-bold block mb-2 text-xs uppercase tracking-wide group-hover/subitem:text-[#64906E] transition-colors">
                          UX Design Specialist (Fiori Android Design System)
                        </span>
<div className="text-sm font-normal text-neutral-600 group-hover/subitem:text-neutral-900 transition-colors">
<span className="block mb-1.5 pl-2 border-l border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Designed and iterated the Fiori Android onboarding,
                            privacy notice, and AR annotation pattern.
                          </span>
<span className="block mb-1.5 pl-2 border-l border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Partnered with UX writer and developer on the design
                            guideline and implementation for the Fiori Android
                            design system.
                          </span>
<span className="block mb-1.5 pl-2 border-l border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Explored the Fiori Fundamental library's design for
                            helping developers build consistent Fiori apps in
                            any web-based technology (React, Angular, Vue).
                          </span>
<span className="block pl-2 border-l border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Contributed to UX illustration library and guideline
                            for SAP Fiori Design System.
                          </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="group/job relative pl-6 pb-0 border-l-2 border-neutral-100 hover:border-[#64906E] transition-colors duration-300">
<span className="absolute -left-[6px] top-3 h-2.5 w-2.5 rounded-full bg-neutral-300 ring-4 ring-white group-hover/job:bg-[#64906E] transition-all duration-300 z-10 group-hover/job:scale-125 group-hover/job:ring-[#64906E]/20"></span>
<div className="flex flex-col cursor-default py-0.5">
<div className="flex justify-between items-baseline mb-0.5">
<h3 className="group-hover/job:text-[#64906E] transition-colors text-lg font-bold text-neutral-900 tracking-tight">
                    Soca
                  </h3>
<span className="uppercase text-xs font-bold text-neutral-500 tracking-wider font-mono bg-neutral-100 rounded-md pt-0.5 pr-2 pb-0.5 pl-2">
                    2019-20
                  </span>
</div>
<div className="text-sm font-semibold text-neutral-600" style={{}}>
                  Lead Product Designer
                </div>
<div className="grid grid-rows-[0fr] group-hover/job:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)]">
<div className="overflow-hidden px-6 -mx-6 pb-6">
<div className="group-hover/job:opacity-100 transition-opacity duration-200 opacity-0 pt-1 pb-1 flex flex-col gap-2">
<div className="group/subitem relative p-4 -mx-4 rounded-xl transition-all duration-300 cursor-default border border-transparent hover:bg-gradient-to-br hover:from-[#64906E]/10 hover:via-white/80 hover:to-white/40 hover:backdrop-blur-xl hover:shadow-[0_24px_48px_-12px_rgba(100,144,110,0.15),inset_0_1px_0_0_rgba(255,255,255,0.9),inset_0_0_20px_rgba(255,255,255,0.5)] hover:ring-1 hover:ring-[#64906E]/20 hover:scale-[1.02] hover:z-20">
<span className="text-neutral-700 font-bold block mb-2 text-xs uppercase tracking-wide group-hover/subitem:text-[#64906E] transition-colors">
                          Professional Community App
                        </span>
<div className="text-sm font-normal text-neutral-600 group-hover/subitem:text-neutral-900 transition-colors">
<span className="block mb-1.5 pl-2 border-l border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Collaborated with 2 designers to ship iOS and
                            Android apps from scratch, reaching over 4000 active
                            users within the first 6 months.
                          </span>
<span className="block mb-1.5 pl-2 border-l border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Lead the design team delivered prototypes, 200+ UI
                            screens, and a structured design system with 60+
                            responsive components in Figma.
                          </span>
<span className="block pl-2 border-l border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Assist user research and conducted usability
                            testings twice to iterate design.
                          </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="group/job relative pl-6 pb-0 border-l-2 border-transparent transition-colors duration-300 hover:border-[#64906E]">
<div className="absolute -left-[2px] top-0 w-[2px] h-[34px] bg-neutral-100 group-hover/job:bg-[#64906E] transition-colors duration-300"></div>
<span className="absolute -left-[6px] top-3 h-2.5 w-2.5 rounded-full bg-neutral-300 ring-4 ring-white group-hover/job:bg-[#64906E] transition-all duration-300 z-10 group-hover/job:scale-125 group-hover/job:ring-[#64906E]/20"></span>
<div className="flex flex-col cursor-default py-0.5">
<div className="flex justify-between items-baseline mb-0.5">
<h3 className="group-hover/job:text-[#64906E] transition-colors text-lg font-bold text-neutral-900 tracking-tight">
                    Siemens Healthineers
                  </h3>
<span className="uppercase text-xs font-bold text-neutral-500 tracking-wider font-mono bg-neutral-100 rounded-md pt-0.5 pr-2 pb-0.5 pl-2">
                    2018-19
                  </span>
</div>
<div className="text-sm font-semibold text-neutral-600" style={{}}>
                  Product Designer
                </div>
<div className="grid grid-rows-[0fr] group-hover/job:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)]">
<div className="overflow-hidden px-6 -mx-6 pb-6">
<div className="group-hover/job:opacity-100 transition-opacity duration-200 opacity-0 pt-1 pb-1 flex flex-col gap-1">
<div className="group/subitem relative p-4 -mx-4 rounded-xl transition-all duration-300 cursor-default border border-transparent hover:bg-gradient-to-br hover:from-[#64906E]/10 hover:via-white/80 hover:to-white/40 hover:backdrop-blur-xl hover:shadow-[0_24px_48px_-12px_rgba(100,144,110,0.15),inset_0_1px_0_0_rgba(255,255,255,0.9),inset_0_0_20px_rgba(255,255,255,0.5)] hover:ring-1 hover:ring-[#64906E]/20 hover:scale-[1.02] hover:z-20">
<span className="block uppercase group-hover/subitem:text-[#64906E] transition-colors text-xs font-bold text-neutral-700 tracking-wide mb-2" style={{}}>
                          AI Product
                        </span>
<div className="text-sm font-normal text-neutral-600 group-hover/subitem:text-neutral-900 transition-colors">
<span className="block mb-1.5 pl-2 border-l border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Collaborated with cross-functional teams on three
                            enterprise projects.
                          </span>
<span className="block mb-1.5 pl-2 border-l border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Designed Hi-fi prototype &amp; navigation flow for
                            data-dense web dashboards.
                          </span>
<span className="block mb-1.5 pl-2 border-l border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Advocated for, built &amp; shipped a component-based
                            design system.
                          </span>
<span className="block pl-2 border-l border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Created a style guide for best practices in layout
                            &amp; typography.
                          </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="main-section tilt-card bento-card flex flex-col group/stack hover:scale-[1.05] md:hover:scale-[1.75] hover:shadow-[0_0_80px_rgba(0,0,0,0.15)] hover:z-50 transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] origin-center md:origin-bottom-right overflow-hidden bg-[#0f172a] h-40 rounded-xl relative items-center justify-center" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)', transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'}}>
<div className="tech-corner corner-tl" style={{borderColor: 'rgba(255,255,255,0.2)'}}></div>
<div className="tech-corner corner-tr" style={{borderColor: 'rgba(255,255,255,0.2)'}}></div>
<div className="tech-corner corner-bl" style={{borderColor: 'rgba(255,255,255,0.2)'}}></div>
<div className="tech-corner corner-br" style={{borderColor: 'rgba(255,255,255,0.2)'}}></div>
<div className="card-glare" style={{}}></div>

<div className="absolute inset-0 flex flex-col items-center justify-center z-20 gap-4 transition-all duration-500 group-hover/stack:opacity-0 group-hover/stack:scale-110 pointer-events-none">
<span className="uppercase text-xs font-bold text-white tracking-[0.2em]">
              Stack
            </span>
<div className="marquee-container w-full overflow-hidden">
<div className="marquee-content flex gap-8 w-max items-center opacity-40">
<span className="text-neutral-400 font-medium text-lg whitespace-nowrap">
                  Product Design
                </span>
<span className="text-neutral-700">•</span>
<span className="text-neutral-400 font-medium text-lg whitespace-nowrap">
                  User Research
                </span>
<span className="text-neutral-700">•</span>
<span className="text-neutral-400 font-medium text-lg whitespace-nowrap">
                  Prototyping
                </span>
<span className="text-neutral-700">•</span>
<span className="text-neutral-400 font-medium text-lg whitespace-nowrap">
                  Design Systems
                </span>
<span className="text-neutral-700">•</span>
<span className="text-neutral-400 font-medium text-lg whitespace-nowrap">
                  Strategy
                </span>
<span className="text-neutral-700">•</span>
<span className="text-neutral-400 font-medium text-lg whitespace-nowrap">
                  Product Design
                </span>
<span className="text-neutral-700">•</span>
<span className="text-neutral-400 font-medium text-lg whitespace-nowrap">
                  User Research
                </span>
<span className="text-neutral-700">•</span>
<span className="text-neutral-400 font-medium text-lg whitespace-nowrap">
                  Prototyping
                </span>
</div>
</div>
</div>

<div className="absolute inset-0 flex flex-col justify-center items-center h-full w-full z-10 opacity-0 group-hover/stack:opacity-100 transition-opacity duration-500 pointer-events-none gap-2 px-2">

<div className="marquee-container w-full overflow-hidden">
<div className="marquee-content flex gap-6 w-max items-center">
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  Figma
                </span>
<span className="text-neutral-700 text-[10px]">•</span>
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  ProtoPie
                </span>
<span className="text-neutral-700 text-[10px]">•</span>
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  Spline
                </span>
<span className="text-neutral-700 text-[10px]">•</span>
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  Rive
                </span>
<span className="text-neutral-700 text-[10px]">•</span>
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  Principle
                </span>
<span className="text-neutral-700 text-[10px]">•</span>
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  Adobe CC
                </span>
<span className="text-neutral-700 text-[10px]">•</span>
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  Figma
                </span>
<span className="text-neutral-700 text-[10px]">•</span>
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  ProtoPie
                </span>
<span className="text-neutral-700 text-[10px]">•</span>
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  Spline
                </span>
</div>
</div>

<div className="marquee-container w-full overflow-hidden">
<div className="marquee-content-reverse flex gap-6 w-max items-center">
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  Wireframing
                </span>
<span className="text-neutral-700 text-[10px]">•</span>
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  Info Architecture
                </span>
<span className="text-neutral-700 text-[10px]">•</span>
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  User Flows
                </span>
<span className="text-neutral-700 text-[10px]">•</span>
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  Interaction Design
                </span>
<span className="text-neutral-700 text-[10px]">•</span>
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  Usability Testing
                </span>
<span className="text-neutral-700 text-[10px]">•</span>
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  Wireframing
                </span>
<span className="text-neutral-700 text-[10px]">•</span>
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  Info Architecture
                </span>
<span className="text-neutral-700 text-[10px]">•</span>
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  User Flows
                </span>
</div>
</div>

<div className="marquee-container w-full overflow-hidden">
<div className="marquee-content flex gap-6 w-max items-center">
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  Design Strategy
                </span>
<span className="text-neutral-700 text-[10px]">•</span>
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  Workshops
                </span>
<span className="text-neutral-700 text-[10px]">•</span>
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  Design Ops
                </span>
<span className="text-neutral-700 text-[10px]">•</span>
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  Stakeholder Mgmt
                </span>
<span className="text-neutral-700 text-[10px]">•</span>
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  Accessibility
                </span>
<span className="text-neutral-700 text-[10px]">•</span>
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  Service Design
                </span>
<span className="text-neutral-700 text-[10px]">•</span>
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  Design Strategy
                </span>
<span className="text-neutral-700 text-[10px]">•</span>
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  Workshops
                </span>
</div>
</div>

<div className="marquee-container w-full overflow-hidden">
<div className="marquee-content-reverse flex gap-6 w-max items-center">
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  User Interviews
                </span>
<span className="text-neutral-700 text-[10px]">•</span>
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  Personas
                </span>
<span className="text-neutral-700 text-[10px]">•</span>
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  Competitive Audit
                </span>
<span className="text-neutral-700 text-[10px]">•</span>
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  Card Sorting
                </span>
<span className="text-neutral-700 text-[10px]">•</span>
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  A/B Testing
                </span>
<span className="text-neutral-700 text-[10px]">•</span>
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  User Interviews
                </span>
<span className="text-neutral-700 text-[10px]">•</span>
<span className="text-neutral-400 font-medium text-[10px] md:text-xs whitespace-nowrap hover:text-white transition-colors">
                  Personas
                </span>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-3 pb-12 pt-12 text-center opacity-40 hover:opacity-100 transition-opacity duration-500">
<p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
          © 2024 Mianying. All Rights Reserved.
        </p>
</div>
</main>

<div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[9999] w-auto max-w-[90vw] pointer-events-none">
<nav className="pointer-events-auto flex items-center gap-2 p-2 rounded-full backdrop-blur-2xl bg-[#171717]/50 border border-white/10 shadow-2xl ring-1 ring-white/5 transform transition-all duration-300 hover:-translate-y-1">
<a className="px-4 py-2 text-sm font-semibold text-neutral-200 hover:bg-[#64906E] hover:text-white rounded-full transition-all duration-300" href="#">
          Home
        </a>
<a className="px-4 py-2 text-sm font-semibold text-neutral-200 hover:bg-[#64906E] hover:text-white rounded-full transition-all duration-300" href="#work">
          Work
        </a>
<a className="px-4 py-2 text-sm font-semibold text-neutral-200 hover:bg-[#64906E] hover:text-white rounded-full transition-all duration-300" href="#about">
          About
        </a>
<div className="w-px h-5 bg-neutral-700 mx-1"></div>
<div className="flex items-center gap-2">

<a className="group/social p-2.5 rounded-full hover:bg-[#64906E] hover:text-white border border-transparent transition-all duration-300" href="https://linkedin.com" target="_blank">
<svg className="text-neutral-200 transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>

<button className="group/social p-2.5 rounded-full hover:bg-[#64906E] hover:text-white border border-transparent transition-all duration-300" onclick="copyEmail()">
<svg className="text-neutral-200 transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path className="" d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
</button>
</div>
</nav>
</div>


    </>
  );
}
