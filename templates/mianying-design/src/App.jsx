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
          let isHovering = false;

          // Detect interaction only on card hover
          heroSection.addEventListener('mouseenter', () => isHovering = true);
          heroSection.addEventListener('mouseleave', () => isHovering = false);

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

              // Default calm state when not hovering
              let mouseFactorX = 0;
              let mouseFactorY = 0;

              // Only apply interactive forces if hovering over the card
              if (isHovering) {
                  const rect = canvas.getBoundingClientRect();
                  const mouseX = globalMouseX - rect.left;
                  const mouseY = globalMouseY - rect.top;

                  mouseFactorX = Math.max(-1, Math.min(1, (mouseX / width) * 2 - 1));
                  mouseFactorY = Math.max(0, Math.min(1, mouseY / height));
              }

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

                  const rotateX = ((y - centerY) / centerY) * -1.5;
                  const rotateY = ((x - centerX) / centerX) * 1.5;

                  // Parallax calculations
                  const parallaxX = (x - centerX) * 0.03;
                  const parallaxY = (y - centerY) * 0.03;

                  // Apply transforms
                  let scaleVal = 1.01;

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

      // 6. FLOATING NAV SCROLL ANIMATION (ELASTIC)
      (function() {
        const navContainer = document.getElementById('floating-nav');
        let lastScrollY = window.scrollY;
        let isScrollingTimeout;

        window.addEventListener('scroll', () => {
          const currentScrollY = window.scrollY;
          const delta = currentScrollY - lastScrollY;
          const isAtTop = currentScrollY < 50;

          // Clear timeout to maintain active state during scroll
          window.clearTimeout(isScrollingTimeout);

          if (isAtTop) {
            navContainer.classList.remove('is-scrolling-up', 'is-scrolling-down', 'nav-scrolled');
          } else {
            navContainer.classList.add('nav-scrolled');

            // Elastic stretch effect based on direction
            if (Math.abs(delta) > 4) {
                if (delta > 0) {
                    navContainer.classList.remove('is-scrolling-up');
                    navContainer.classList.add('is-scrolling-down');
                } else {
                    navContainer.classList.remove('is-scrolling-down');
                    navContainer.classList.add('is-scrolling-up');
                }
            }
          }

          lastScrollY = currentScrollY;

          // Snap back to original shape when scroll stops
          isScrollingTimeout = setTimeout(() => {
            navContainer.classList.remove('is-scrolling-up', 'is-scrolling-down');
          }, 150);

        }, { passive: true });
      })();
    


      (function(){const links=document.querySelectorAll('#floating-nav nav > a');const sections=['heroSection','work','about'];function update(){let current='heroSection';const scroll=window.scrollY;for(const id of sections){const el=document.getElementById(id);if(el&&scroll>=(el.offsetTop-window.innerHeight/2.5)){current=id}}if((window.innerHeight+scroll)>=document.body.offsetHeight-50){current='about'}links.forEach(link=>{const href=link.getAttribute('href');const linkId=href==='#'?'heroSection':href.substring(1);if(linkId===current){link.classList.remove('text-neutral-600');link.classList.add('bg-[#64906E]','text-white')}else{link.classList.add('text-neutral-600');link.classList.remove('bg-[#64906E]','text-white')}})}window.addEventListener('scroll',update,{passive:true});update()})();
    
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
        background: radial-gradient(circle, rgba(134, 239, 172, 0.15) 0%, transparent 65%);
        --blur: 60px;
        --duration: 20s; 
        --delay: 0s; 
        --move-x: 25vw; --move-y: 15vh;
    "></div>
<div className="bokeh" style="
        width: 60vw; height: 60vw;
        bottom: -20%; right: -20%;
        background: radial-gradient(circle, rgba(74, 222, 128, 0.10) 0%, transparent 70%);
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

<main className="grid grid-cols-1 gap-6 md:p-8 z-10 w-full max-w-[1500px] pt-4 pr-4 pb-24 pl-4 relative">

<div className="main-section tilt-card col-span-1 flex flex-col overflow-hidden group min-h-[500px] md:p-16 backdrop-saturate-200 hover:shadow-[0_25px_50px_-10px_rgba(0,0,0,0.15),inset_0_0_40px_rgba(255,255,255,0.8)] transition-all duration-500 bg-gradient-to-br from-white/60 via-white/40 to-white/20 border-white/60 border rounded-xl pt-10 pr-10 pb-10 pl-10 relative shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),inset_0_0_30px_rgba(255,255,255,0.7)] backdrop-blur-3xl justify-center" id="heroSection" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)', transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)', -MouseX: '0.6943279749079853%', -MouseY: '7.750444143011408%'}}>
<div className="pointer-events-none rounded-xl absolute top-0 right-0 bottom-0 left-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7),inset_0_0_20px_0_rgba(255,255,255,0.1)]"></div>
<div className="tech-corner corner-tl"></div>
<div className="tech-corner corner-tr"></div>
<div className="tech-corner corner-bl"></div>
<div className="tech-corner corner-br"></div>

<div className="absolute inset-x-0 bottom-0 h-[70%] z-0 pointer-events-none transform translate-z-[-20px]">
<canvas className="w-full h-full opacity-80" height="428" id="waveCanvas" width="1434"></canvas>
</div>

<div className="card-glare"></div>

<div className="relative z-10 max-w-5xl pointer-events-none pl-2 flex flex-col justify-center">
<div className="parallax-layer-3 animate-enter inline-flex w-fit gap-3 items-center mb-8 border border-[#64906E]/20 bg-white/60 backdrop-blur-md pl-4 pr-6 py-2 cursor-default shadow-[0_4px_20px_-4px_rgba(100,144,110,0.1)] rounded-full pointer-events-auto hover:scale-105 transition-transform duration-300 ring-1 ring-[#64906E]/10 hover:ring-[#64906E]/30 group/badge" style={{transform: 'translateZ(60px)', transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'}}>
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#64906E] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#64906E]"></span>
</span>
<span className="text-xs font-bold tracking-widest uppercase font-sans text-[#64906E] group-hover/badge:text-[#4A6E50] transition-colors">
              Based in San Francisco Bay Area
            </span>
<span className="w-px h-3 bg-[#64906E]/30"></span>
<span className="text-xs font-mono text-[#64906E]/80 font-semibold" id="localTime">03:34 PM</span>
</div>
<h1 className="parallax-layer-2 text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.95] font-sans mb-8 text-balance drop-shadow-sm text-neutral-600" style={{transform: 'translateZ(40px)', transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'}}>
<span className="block animate-enter delay-100">Hi, I'm Mianying.</span>
<span className="block animate-enter delay-200 mt-2">
<span className="bg-gradient-to-br from-[#64906E] to-[#8FA996] bg-clip-text text-transparent">A Product Designer</span>
</span>
</h1>
<p className="parallax-layer-1 animate-enter delay-300 leading-relaxed text-balance backdrop-blur-[2px] -ml-2 md:text-2xl pointer-events-auto text-lg font-normal text-neutral-700 max-w-4xl rounded-lg mb-12 pt-2 pr-2 pb-2 pl-2" style={{transform: 'translateZ(20px)', transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'}}>Product Designer Specializing in intelligent cloud platforms and design systems. Experience includes <a className="inline-block px-1 -mx-1 rounded-sm text-neutral-900 font-semibold border-b border-[#64906E]/30 hover:border-[#64906E] hover:text-[#64906E] transition-all duration-300 hover:scale-110 hover:bg-neutral-50 origin-bottom" href="#">
              Microsoft Azure
            </a> , <a className="inline-block px-1 -mx-1 rounded-sm text-neutral-900 font-semibold border-b border-[#64906E]/30 hover:border-[#64906E] hover:text-[#64906E] transition-all duration-300 hover:scale-110 hover:bg-neutral-50 origin-bottom" href="#">
              SAP Labs
            </a> , and <a className="inline-block px-1 -mx-1 rounded-sm text-neutral-900 font-semibold border-b border-[#64906E]/30 hover:border-[#64906E] hover:text-[#64906E] transition-all duration-300 hover:scale-110 hover:bg-neutral-50 origin-bottom" href="#">
              Siemens
            </a> .</p>
<div className="parallax-layer-1 animate-enter delay-400 flex flex-wrap gap-5 pointer-events-auto gap-x-5 gap-y-5 items-center" style={{transform: 'translateZ(20px)', transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'}}>
<a className="group/btn h-14 px-8 bg-[#0f172a] text-white text-base font-medium transition-all duration-300 hover:scale-[1.03] active:scale-95 flex items-center gap-3 hover:bg-[#020617] shadow-xl shadow-[#64906E]/10 cursor-pointer rounded-lg relative overflow-hidden ring-1 ring-white/10" href="#work">
<span className="relative z-10">Selected Projects</span>
<div className="absolute inset-0 bg-gradient-to-r from-[#64906E] to-[#4a6e50] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 ease-out"></div>
<svg className="opacity-70 duration-300 group-hover/btn:translate-y-1 relative z-10 w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="12" x2="12" y1="5" y2="19"></line>
<polyline points="19 12 12 19 5 12"></polyline>
</svg>
</a>
</div>
</div>
</div>

<div className="main-section col-span-1 md:p-8 overflow-visible [&amp;_.tech-corner]:!hidden backdrop-saturate-200 transition-all duration-500 hover:shadow-[0_25px_50px_-10px_rgba(0,0,0,0.15),inset_0_0_40px_rgba(255,255,255,0.8)] bg-gradient-to-br from-white/60 via-white/40 to-white/20 border-white/60 border rounded-xl pt-6 pr-6 pb-6 pl-6 relative shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),inset_0_0_30px_rgba(255,255,255,0.7)] backdrop-blur-3xl" id="work">

<div className="absolute inset-0 rounded-xl pointer-events-none shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7),inset_0_0_20px_0_rgba(255,255,255,0.1)]"></div>
<div className="grid grid-cols-1 md:grid-cols-3 z-10 relative gap-x-6 gap-y-6">

<div className="tilt-card group/card flex flex-col h-full cursor-pointer bg-white border border-neutral-100 rounded-2xl relative shadow-sm hover:shadow-2xl hover:shadow-neutral-900/5 transition-all duration-500 overflow-hidden p-2" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)', transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)', -MouseX: '87.43693047222175%', -MouseY: '89.75815701297381%'}}>
<div className="card-glare rounded-2xl"></div>

<div className="relative w-full aspect-[16/10] overflow-hidden rounded-lg bg-neutral-100 z-0 tilt-content" style={{transform: 'translateZ(10px)'}}>
<img alt="Fintech" className="object-top transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover/card:scale-105 opacity-95 group-hover/card:opacity-100 w-full h-full object-cover" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
<img alt="Azure Hover" className="absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]" loading="lazy" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
</div>

<div className="flex flex-col px-4 pt-5 pb-6 flex-1 tilt-content gap-4" style={{transform: 'translateZ(20px)'}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center">
<img alt="Microsoft" className="w-full h-full object-contain opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c5053a6b-f376-41fa-ba4c-952937b58256_800w.png"/>
</div>
</div>
<div className="w-6 h-6 flex items-center justify-center rounded-full bg-neutral-50 group-hover/card:bg-[#64906E] group-hover/card:text-white text-neutral-300 transition-all duration-300 transform group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</div>
</div>
<div className="">
<h3 className="text-xl font-bold text-neutral-900 tracking-tight leading-tight mb-2 group-hover/card:text-[#64906E] transition-colors">
                  Azure Machine Config
                </h3>
<p className="leading-relaxed line-clamp-2 font-normal text-neutral-500">
                  Unified Cloud Configuration Management Service for Windows
                  &amp; Linux systems.
                </p>
</div>

<div className="grid grid-cols-2 gap-4 py-3 border-y border-neutral-100/80">
<div className="flex flex-col gap-0.5">
<span className="text-[10px] uppercase font-medium text-neutral-400 tracking-wide" style={{}}>Deployment Efficiency</span>
<span className="text-sm font-semibold text-neutral-800" style={{}}>70%+ Boost</span>
</div>
<div className="flex flex-col gap-0.5 gap-x-0.5 gap-y-0.5">
<span className="text-[10px] uppercase font-medium text-neutral-400 tracking-wide" style={{}}>Market pilots</span>
<span className="text-sm font-semibold text-neutral-800" style={{}}>12+ Major Firms</span>
</div>
</div>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="inline-flex items-center transition-colors hover:bg-neutral-200 hover:text-neutral-900 text-xs font-medium text-neutral-600 bg-neutral-100 rounded-md pt-1 pr-2.5 pb-1 pl-2.5">Operational Efficiency</span>
<span className="inline-flex items-center transition-colors hover:bg-neutral-200 hover:text-neutral-900 text-xs font-medium text-neutral-600 bg-neutral-100 rounded-md pt-1 pr-2.5 pb-1 pl-2.5">DevOps</span>
<span className="inline-flex items-center transition-colors hover:bg-neutral-200 hover:text-neutral-900 text-xs font-medium text-neutral-600 bg-neutral-100 rounded-md pt-1 pr-2.5 pb-1 pl-2.5">Cloud Automation</span>
</div>
</div>
</div>

<div className="tilt-card group/card flex flex-col h-full cursor-pointer bg-white border border-neutral-100 rounded-2xl relative shadow-sm hover:shadow-2xl hover:shadow-neutral-900/5 transition-all duration-500 overflow-hidden p-2" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)', transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)', -MouseX: '95.3844819557175%', -MouseY: '81.44826798444161%'}}>
<div className="card-glare rounded-2xl"></div>
<div className="relative w-full aspect-[16/10] overflow-hidden rounded-lg bg-neutral-100 z-0 tilt-content" style={{transform: 'translateZ(10px)'}}>
<img alt="Security" className="object-cover object-top w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover/card:scale-105 opacity-95 group-hover/card:opacity-100" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
<img alt="Arc Hover" className="absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]" loading="lazy" src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="flex flex-col flex-1 tilt-content gap-4 pt-5 pr-4 pb-6 pl-4 gap-x-4 gap-y-4" style={{transform: 'translateZ(20px)'}}>
<div className="flex items-center justify-between">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<div className="w-8 h-8 flex items-center justify-center">
<img alt="Microsoft" className="w-full h-full object-contain opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c5053a6b-f376-41fa-ba4c-952937b58256_800w.png"/>
</div>
</div>
<div className="w-6 h-6 flex items-center justify-center rounded-full bg-neutral-50 group-hover/card:bg-[#64906E] group-hover/card:text-white text-neutral-300 transition-all duration-300 transform group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5">
<svg className="" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</div>
</div>
<div className="">
<h3 className="leading-tight group-hover/card:text-[#64906E] transition-colors text-xl font-bold text-neutral-900 tracking-tight mb-2" style={{}}>
                  Azure Arc Service Management
                </h3>
<p className="leading-relaxed line-clamp-2 font-normal text-neutral-500">
                  Microsoft Hybrid Cloud Operations &amp; Governance Service for
                  enterprise.
                </p>
</div>

<div className="grid grid-cols-2 gap-4 border-y border-neutral-100/80 pt-3 pb-3 gap-x-4 gap-y-4">
<div className="flex flex-col gap-0.5">
<span className="text-[10px] uppercase font-medium text-neutral-400 tracking-wide">Efficiency Boost</span>
<span className="text-sm font-semibold text-neutral-800">60%+ vs Traditional</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[10px] uppercase font-medium text-neutral-400 tracking-wide">New Service Adoption</span>
<span className="text-sm font-semibold text-neutral-800">12% Growth</span>
</div>
</div>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="inline-flex items-center transition-colors hover:bg-neutral-200 hover:text-neutral-900 text-xs font-medium text-neutral-600 bg-neutral-100 rounded-md pt-1 pr-2.5 pb-1 pl-2.5">Hybrid Cloud</span>
<span className="inline-flex items-center transition-colors hover:bg-neutral-200 hover:text-neutral-900 text-xs font-medium text-neutral-600 bg-neutral-100 rounded-md pt-1 pr-2.5 pb-1 pl-2.5">Service Ops</span>
<span className="inline-flex items-center transition-colors hover:bg-neutral-200 hover:text-neutral-900 text-xs font-medium text-neutral-600 bg-neutral-100 rounded-md pt-1 pr-2.5 pb-1 pl-2.5">Enterprise</span>
</div>
</div>
</div>

<div className="tilt-card group/card flex flex-col h-full cursor-pointer bg-white border border-neutral-100 rounded-2xl relative shadow-sm hover:shadow-2xl hover:shadow-neutral-900/5 transition-all duration-500 overflow-hidden p-2" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)', transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)', -MouseX: '94.41207731370311%', -MouseY: '85.51747255060963%'}}>
<div className="card-glare rounded-2xl"></div>
<div className="relative w-full aspect-[16/10] overflow-hidden rounded-lg bg-neutral-100 z-0 tilt-content" style={{transform: 'translateZ(10px)'}}>
<img alt="IoT" className="object-cover object-top w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover/card:scale-105 opacity-95 group-hover/card:opacity-100" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
<img alt="SAP Hover" className="absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]" loading="lazy" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="flex flex-col px-4 pt-5 pb-6 flex-1 tilt-content gap-4" style={{transform: 'translateZ(20px)'}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center">
<img alt="Microsoft" className="w-full h-full object-contain opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c5053a6b-f376-41fa-ba4c-952937b58256_800w.png"/>
</div>
</div>
<div className="w-6 h-6 flex items-center justify-center rounded-full bg-neutral-50 group-hover/card:bg-[#64906E] group-hover/card:text-white text-neutral-300 transition-all duration-300 transform group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</div>
</div>
<div className="">
<h3 className="leading-tight group-hover/card:text-[#64906E] transition-colors text-xl font-bold text-neutral-900 tracking-tight mb-2">Azure Resource Change Portal</h3>
<p className="leading-relaxed line-clamp-2 font-normal text-neutral-500">A centralized portal for visualizing resource change history and analyzing impact on system stability.</p>
</div>

<div className="grid grid-cols-2 gap-4 border-y border-neutral-100/80 pt-3 pb-3 gap-x-4 gap-y-4">
<div className="flex flex-col gap-0.5">
<span className="text-[10px] uppercase font-medium text-neutral-400 tracking-wide">Troubleshooting</span>
<span className="text-sm font-semibold text-neutral-800">70% Faster</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[10px] uppercase font-medium text-neutral-400 tracking-wide">Error Impact</span>
<span className="text-sm font-semibold text-neutral-800">-24% Reduced</span>
</div>
</div>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="inline-flex items-center transition-colors hover:bg-neutral-200 hover:text-neutral-900 text-xs font-medium text-neutral-600 bg-neutral-100 rounded-md pt-1 pr-2.5 pb-1 pl-2.5">Observability</span>
<span className="inline-flex items-center transition-colors hover:bg-neutral-200 hover:text-neutral-900 text-xs font-medium text-neutral-600 bg-neutral-100 rounded-md pt-1 pr-2.5 pb-1 pl-2.5">Root Cause Analysis</span>
<span className="inline-flex items-center transition-colors hover:bg-neutral-200 hover:text-neutral-900 text-xs font-medium text-neutral-600 bg-neutral-100 rounded-md pt-1 pr-2.5 pb-1 pl-2.5">DevOps</span>
</div>
</div>
</div>

<div className="tilt-card group/card flex flex-col cursor-pointer hover:shadow-2xl hover:shadow-neutral-900/5 transition-all duration-500 overflow-hidden bg-white h-full border-neutral-100 border rounded-2xl pt-2 pr-2 pb-2 pl-2 relative shadow-sm" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)', transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)', -MouseX: '87.23358521184788%', -MouseY: '61.75240351862463%'}}>
<div className="card-glare rounded-2xl"></div>
<div className="relative w-full aspect-[16/10] overflow-hidden rounded-lg bg-neutral-100 z-0 tilt-content" style={{transform: 'translateZ(10px)'}}>
<img alt="AI Interface" className="object-top transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover/card:scale-105 opacity-95 group-hover/card:opacity-100 w-full h-full object-cover" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
<img alt="Soca Hover" className="absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]" loading="lazy" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="flex flex-col px-4 pt-5 pb-6 flex-1 tilt-content gap-4" style={{transform: 'translateZ(20px)'}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex w-700 h-8 items-center justify-center">
<img alt="Microsoft" className="opacity-90 w-13 h-6 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14aaed47-9123-417a-9566-90c4aa17798f_320w.png"/>
</div>
</div>
<div className="w-6 h-6 flex items-center justify-center rounded-full bg-neutral-50 group-hover/card:bg-[#64906E] group-hover/card:text-white text-neutral-300 transition-all duration-300 transform group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5">
<svg className="" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline className="" points="7 7 17 7 17 17"></polyline>
</svg>
</div>
</div>
<div className="">
<h3 className="text-xl font-bold text-neutral-900 tracking-tight leading-tight mb-2 group-hover/card:text-[#64906E] transition-colors">
                  Soca Network
                </h3>
<p className="leading-relaxed line-clamp-2 font-normal text-neutral-500">A peer-to-peer social platform connecting job seekers with company insiders for direct referrals.</p>
</div>

<div className="grid grid-cols-2 gap-4 py-3 border-y border-neutral-100/80">
<div className="flex flex-col gap-0.5">
<span className="text-[10px] uppercase font-medium text-neutral-400 tracking-wide">
                    Growth
                  </span>
<span className="text-sm font-semibold text-neutral-800">2k+ in 2 Mos</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[10px] uppercase font-medium text-neutral-400 tracking-wide">Outcomes</span>
<span className="text-sm font-semibold text-neutral-800">70+ Referrals</span>
</div>
</div>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="inline-flex items-center px-2.5 py-1 text-xs font-medium text-neutral-600 bg-neutral-100 rounded-md transition-colors hover:bg-neutral-200 hover:text-neutral-900">
                  Python
                </span>
<span className="inline-flex items-center px-2.5 py-1 text-xs font-medium text-neutral-600 bg-neutral-100 rounded-md transition-colors hover:bg-neutral-200 hover:text-neutral-900">
                  Next.js
                </span>
<span className="inline-flex items-center px-2.5 py-1 text-xs font-medium text-neutral-600 bg-neutral-100 rounded-md transition-colors hover:bg-neutral-200 hover:text-neutral-900">
                  AI
                </span>
</div>
</div>
</div>
<div className="tilt-card group/card flex flex-col cursor-pointer hover:shadow-2xl hover:shadow-neutral-900/5 transition-all duration-500 overflow-hidden bg-white h-full border-neutral-100 border rounded-2xl pt-2 pr-2 pb-2 pl-2 relative shadow-sm" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)', transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)', -MouseX: '96.10688487038044%', -MouseY: '55.72665552589394%'}}>
<div className="card-glare rounded-2xl"></div>
<div className="relative w-full aspect-[16/10] overflow-hidden rounded-lg bg-neutral-100 z-0 tilt-content" style={{transform: 'translateZ(10px)'}}>
<img alt="EcoPulse" className="object-top transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover/card:scale-105 group-hover/card:opacity-100 opacity-95 w-full h-full object-cover" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
<img alt="Eco Hover" className="object-top group-hover/card:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] opacity-0 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" loading="lazy" src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
<div className="group-hover/card:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/10 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<div className="flex flex-col flex-1 tilt-content gap-4 pt-5 pr-4 pb-6 pl-4 gap-x-4 gap-y-4" style={{transform: 'translateZ(20px)'}}>
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-8 h-8 flex items-center justify-center">
<img alt="Microsoft" className="opacity-90 w-1000 h-7 max-w-md object-contain ml-7" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/74323c7b-eb30-4734-a657-f29bd60113e2_320w.png"/>
</div>
</div>
<div className="w-6 h-6 flex items-center justify-center rounded-full bg-neutral-50 group-hover/card:bg-[#64906E] group-hover/card:text-white text-neutral-300 transition-all duration-300 transform group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5">
<svg className="" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</div>
</div>
<div className="">
<h3 className="leading-tight group-hover/card:text-[#64906E] transition-colors text-xl font-bold text-neutral-900 tracking-tight mb-2">
                  SAP Fiori Design System
                </h3>
<p className="leading-relaxed line-clamp-2 font-normal text-neutral-500">Defining native components for Android and conversational UI patterns for AI assistants.</p>
</div>
<div className="grid grid-cols-2 gap-4 py-3 border-y border-neutral-100/80">
<div className="flex flex-col gap-0.5">
<span className="text-[10px] uppercase font-medium text-neutral-400 tracking-wide">Adoption</span>
<span className="text-sm font-semibold text-neutral-800">23+ Apps</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[10px] uppercase font-medium text-neutral-400 tracking-wide">Comps / Patterns</span>
<span className="text-sm font-semibold text-neutral-800">32 / 12</span>
</div>
</div>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="inline-flex items-center transition-colors hover:bg-neutral-200 hover:text-neutral-900 text-xs font-medium text-neutral-600 bg-neutral-100 rounded-md pt-1 pr-2.5 pb-1 pl-2.5">Design System</span>
<span className="inline-flex items-center transition-colors hover:bg-neutral-200 hover:text-neutral-900 text-xs font-medium text-neutral-600 bg-neutral-100 rounded-md pt-1 pr-2.5 pb-1 pl-2.5">Conversational UI</span>
<span className="inline-flex items-center transition-colors hover:bg-neutral-200 hover:text-neutral-900 text-xs font-medium text-neutral-600 bg-neutral-100 rounded-md pt-1 pr-2.5 pb-1 pl-2.5">Mobile Design</span>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 flex flex-col gap-x-6 gap-y-6" id="about">

<div className="main-section tilt-card md:px-8 md:pt-8 md:pb-4 flex flex-col overflow-hidden group/exp backdrop-saturate-200 hover:shadow-[0_25px_50px_-10px_rgba(0,0,0,0.15),inset_0_0_40px_rgba(255,255,255,0.8)] transition-all duration-500 bg-gradient-to-br from-white/60 via-white/40 to-white/20 h-fit border-white/60 border rounded-xl pt-6 pr-6 pb-3 pl-6 relative shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),inset_0_0_30px_rgba(255,255,255,0.7)] backdrop-blur-3xl" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)', transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)', -MouseX: '3.302657321404828%', -MouseY: '26.12157668504572%'}}>
<div className="absolute inset-0 rounded-xl pointer-events-none shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7),inset_0_0_20px_0_rgba(255,255,255,0.1)]"></div>
<div className="tech-corner corner-tl"></div>
<div className="tech-corner corner-tr"></div>
<div className="tech-corner corner-bl"></div>
<div className="tech-corner corner-br"></div>
<div className="card-glare"></div>
<div className="flex z-10 tilt-content mb-10 relative items-center justify-between" style={{transform: 'translateZ(2px)'}}>
<h2 className="md:text-2xl text-2xl font-bold text-neutral-900 tracking-tight">
              Experience
            </h2>
<a aria-label="Resume" className="hover:bg-neutral-100 hover:text-[#64906E] transition-colors text-neutral-400 rounded-full pt-2 pr-2 pb-2 pl-2" href="#">
<svg className="lucide lucide-download w-[26px] h-[26px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="download" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" style={{width: '26px', height: '26px', color: 'rgb(101, 146, 111)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</a>
</div>
<div className="flex flex-col z-10 pl-2 relative" style={{transform: 'none', position: 'relative', zIndex: '10'}}>
<div className="group/job relative pl-6 pb-0 border-l-2 border-neutral-100 hover:border-[#64906E] transition-colors duration-300">
<span className="absolute -left-[6px] top-3 h-2.5 w-2.5 rounded-full bg-[#64906E] ring-4 ring-white shadow-sm z-10 transition-all duration-300 group-hover/job:scale-125 group-hover/job:ring-[#64906E]/20">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#64906E] opacity-75"></span>
</span>
<div className="flex flex-col cursor-default py-0.5">
<div className="flex justify-between items-baseline mb-0.5">
<h3 className="group-hover/job:text-[#64906E] transition-colors text-lg font-bold text-neutral-900 tracking-tight">
                    Microsoft
                  </h3>
<span className="uppercase text-xs font-semibold text-neutral-500 tracking-wider rounded-md pt-0.5 pr-2 pb-0.5 pl-2">
                    2022-2025
                  </span>
</div>
<div className="text-sm font-semibold text-neutral-600">
                  Senior Product Designer
                </div>
<div className="grid grid-rows-[0fr] group-hover/job:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)]">
<div className="overflow-hidden px-6 -mx-6 pb-6">
<div className="group-hover/job:opacity-100 transition-opacity duration-200 opacity-0 pt-1 pb-1 flex flex-col gap-1">
<div className="group/subitem relative p-4 -mx-4 rounded-xl transition-all duration-300 cursor-default border border-transparent hover:bg-neutral-50 hover:shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05),inset_0_0_0_1px_rgba(0,0,0,0.02)] hover:ring-0 hover:z-20">
<span className="text-neutral-800 font-bold block mb-2 text-xs uppercase tracking-wide group-hover/subitem:text-[#64906E] transition-colors">
                          Azure Arc (Hybrid Cloud Management)
                        </span>
<div className="text-sm font-medium text-neutral-900 group-hover/subitem:text-black transition-colors">
<span className="block mb-1.5 pl-2 border-l-2 border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Centralized scattered services into Azure, reducing
                            daily management time by ~60%.
                          </span>
<span className="block mb-1.5 pl-2 border-l-2 border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Enabled concurrent multi-script execution, cutting
                            troubleshooting cycles by 30%.
                          </span>
<span className="block mb-1.5 pl-2 border-l-2 border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Automated the upgrade process, boosting patch
                            compliance to 70% and reducing manual effort by 85%.
                          </span>
<span className="block pl-2 border-l-2 border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Unified monitoring workflows, significantly
                            increasing user onboarding completion and service
                            bundle sales.
                          </span>
</div>
</div>
<div className="group/subitem relative p-4 -mx-4 rounded-xl transition-all duration-300 cursor-default border border-transparent hover:bg-neutral-50 hover:shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05),inset_0_0_0_1px_rgba(0,0,0,0.02)] hover:ring-0 hover:z-20">
<span className="text-neutral-800 font-bold block mb-2 text-xs uppercase tracking-wide group-hover/subitem:text-[#64906E] transition-colors">
                          Azure Governance (Compliance &amp; Safety)
                        </span>
<div className="text-sm font-medium text-neutral-900 group-hover/subitem:text-black transition-colors">
<span className="block mb-1.5 pl-2 border-l-2 border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Visualized resource history and enabled batch
                            actions, decreasing related support tickets by 30%.
                          </span>
<span className="block mb-1.5 pl-2 border-l-2 border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Implemented safe-delete and recovery with full audit
                            trails, increasing adoption by 20%.
                          </span>
<span className="block mb-1.5 pl-2 border-l-2 border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Deployed an internal AI assistant to 1,200+ Azure
                            engineers, streamlining daily Resource Manager
                            tasks.
                          </span>
<span className="block pl-2 border-l-2 border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Automated VM provisioning via policies, ensuring
                            seamless connection to monitoring and analytics
                            tools.
                          </span>
</div>
</div>
<div className="group/subitem relative p-4 -mx-4 rounded-xl transition-all duration-300 cursor-default border border-transparent hover:bg-neutral-50 hover:shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05),inset_0_0_0_1px_rgba(0,0,0,0.02)] hover:ring-0 hover:z-20">
<span className="text-neutral-800 font-bold block mb-2 text-xs uppercase tracking-wide group-hover/subitem:text-[#64906E] transition-colors">
                          Azure Deployment
                        </span>
<div className="text-sm font-medium text-neutral-900 group-hover/subitem:text-black transition-colors">
<span className="block mb-1.5 pl-2 border-l-2 border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Helps users quickly find which Azure services
                            support Terraform, improving development efficiency.
                          </span>
<span className="block pl-2 border-l-2 border-neutral-200 group-hover/subitem:border-[#64906E]/50">
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
<span className="uppercase text-xs font-semibold text-neutral-500 tracking-wider rounded-md px-2 py-0.5">
                    2020-22
                  </span>
</div>
<div className="text-sm font-semibold text-neutral-600">
                  Product Designer
                </div>
<div className="grid grid-rows-[0fr] group-hover/job:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)]">
<div className="overflow-hidden px-6 -mx-6 pb-6">
<div className="group-hover/job:opacity-100 transition-opacity duration-200 opacity-0 pt-1 pb-1 flex flex-col gap-1">
<div className="group/subitem relative p-4 -mx-4 rounded-xl transition-all duration-300 cursor-default border border-transparent hover:bg-neutral-50 hover:shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05),inset_0_0_0_1px_rgba(0,0,0,0.02)] hover:ring-0 hover:z-20">
<span className="text-neutral-800 font-bold block mb-2 text-xs uppercase tracking-wide group-hover/subitem:text-[#64906E] transition-colors">
                          UX Design Specialist (Conversational Design)
                        </span>
<div className="text-sm font-medium text-neutral-900 group-hover/subitem:text-black transition-colors">
<span className="block mb-1.5 pl-2 border-l-2 border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Partnering with the SAP Conversational AI team to
                            define the pure voice control and conversational
                            in-app navigation feature for the SAP business
                            product.
                          </span>
<span className="block mb-1.5 pl-2 border-l-2 border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Led the recreating and managing of the CXD design
                            system on Figma (Web/IOS), focusing on efficiency
                            and collaboration.
                          </span>
<span className="block mb-1.5 pl-2 border-l-2 border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Organized the component’s spec workshop to help the
                            team improve the consistency and readability of the
                            sixteen CXD component specs’ library.
                          </span>
<span className="block pl-2 border-l-2 border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Produced the four wireframes &amp; interactive
                            prototypes for the HR chatbot to show how users will
                            experience solutions.
                          </span>
</div>
</div>
<div className="group/subitem relative p-4 -mx-4 rounded-xl transition-all duration-300 cursor-default border border-transparent hover:bg-neutral-50 hover:shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05),inset_0_0_0_1px_rgba(0,0,0,0.02)] hover:ring-0 hover:z-20">
<span className="text-neutral-800 font-bold block mb-2 text-xs uppercase tracking-wide group-hover/subitem:text-[#64906E] transition-colors">
                          UX Design Specialist (Fiori Android Design System)
                        </span>
<div className="text-sm font-medium text-neutral-900 group-hover/subitem:text-black transition-colors">
<span className="block mb-1.5 pl-2 border-l-2 border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Designed and iterated the Fiori Android onboarding,
                            privacy notice, and AR annotation pattern.
                          </span>
<span className="block mb-1.5 pl-2 border-l-2 border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Partnered with UX writer and developer on the design
                            guideline and implementation for the Fiori Android
                            design system.
                          </span>
<span className="block mb-1.5 pl-2 border-l-2 border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Explored the Fiori Fundamental library's design for
                            helping developers build consistent Fiori apps in
                            any web-based technology (React, Angular, Vue).
                          </span>
<span className="block pl-2 border-l-2 border-neutral-200 group-hover/subitem:border-[#64906E]/50">
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
<span className="uppercase text-xs font-semibold text-neutral-500 tracking-wider rounded-md px-2 py-0.5">
                    2019-20
                  </span>
</div>
<div className="text-sm font-semibold text-neutral-600" style={{}}>
                  Lead Product Designer
                </div>
<div className="grid grid-rows-[0fr] group-hover/job:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)]">
<div className="overflow-hidden px-6 -mx-6 pb-6">
<div className="group-hover/job:opacity-100 transition-opacity duration-200 opacity-0 pt-1 pb-1 flex flex-col gap-2">
<div className="group/subitem relative p-4 -mx-4 rounded-xl transition-all duration-300 cursor-default border border-transparent hover:bg-neutral-50 hover:shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05),inset_0_0_0_1px_rgba(0,0,0,0.02)] hover:ring-0 hover:z-20">
<span className="text-neutral-800 font-bold block mb-2 text-xs uppercase tracking-wide group-hover/subitem:text-[#64906E] transition-colors">
                          Professional Community App
                        </span>
<div className="text-sm font-medium text-neutral-900 group-hover/subitem:text-black transition-colors">
<span className="block mb-1.5 pl-2 border-l-2 border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Collaborated with 2 designers to ship iOS and
                            Android apps from scratch, reaching over 4000 active
                            users within the first 6 months.
                          </span>
<span className="block mb-1.5 pl-2 border-l-2 border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Lead the design team delivered prototypes, 200+ UI
                            screens, and a structured design system with 60+
                            responsive components in Figma.
                          </span>
<span className="block pl-2 border-l-2 border-neutral-200 group-hover/subitem:border-[#64906E]/50">
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
<span className="uppercase text-xs font-semibold text-neutral-500 tracking-wider rounded-md px-2 py-0.5">
                    2018-19
                  </span>
</div>
<div className="text-sm font-semibold text-neutral-600" style={{}}>
                  Product Designer
                </div>
<div className="grid grid-rows-[0fr] group-hover/job:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)]">
<div className="overflow-hidden px-6 -mx-6 pb-6">
<div className="group-hover/job:opacity-100 transition-opacity duration-200 opacity-0 pt-1 pb-1 flex flex-col gap-1">
<div className="group/subitem relative p-4 -mx-4 rounded-xl transition-all duration-300 cursor-default border border-transparent hover:bg-neutral-50 hover:shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05),inset_0_0_0_1px_rgba(0,0,0,0.02)] hover:ring-0 hover:z-20">
<span className="block uppercase group-hover/subitem:text-[#64906E] transition-colors text-xs font-bold text-neutral-800 tracking-wide mb-2" style={{}}>
                          AI Product
                        </span>
<div className="text-sm font-medium text-neutral-900 group-hover/subitem:text-black transition-colors">
<span className="block mb-1.5 pl-2 border-l-2 border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Collaborated with cross-functional teams on three
                            enterprise projects.
                          </span>
<span className="block mb-1.5 pl-2 border-l-2 border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Designed Hi-fi prototype &amp; navigation flow for
                            data-dense web dashboards.
                          </span>
<span className="block mb-1.5 pl-2 border-l-2 border-neutral-200 group-hover/subitem:border-[#64906E]/50">
                            Advocated for, built &amp; shipped a component-based
                            design system.
                          </span>
<span className="block pl-2 border-l-2 border-neutral-200 group-hover/subitem:border-[#64906E]/50">
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

<div className="main-section flex flex-col group/stack transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] origin-center md:origin-bottom-right overflow-hidden backdrop-saturate-200 hover:shadow-[0_25px_50px_-10px_rgba(0,0,0,0.15),inset_0_0_40px_rgba(255,255,255,0.8)] hover:z-50 bg-gradient-to-br from-white/60 via-white/40 to-white/20 h-40 border-white/60 border rounded-xl relative shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),inset_0_0_30px_rgba(255,255,255,0.7)] backdrop-blur-3xl items-center justify-center">
<div className="absolute inset-0 rounded-xl pointer-events-none shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7),inset_0_0_20px_0_rgba(255,255,255,0.1)]"></div>
<div className="tech-corner corner-tl"></div>
<div className="tech-corner corner-tr"></div>
<div className="tech-corner corner-bl"></div>
<div className="tech-corner corner-br"></div>
<div className="card-glare"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center z-20 gap-4 pointer-events-none">
<span className="uppercase text-xs font-bold text-neutral-500 tracking-[0.2em]">
              Stack
            </span>
<div className="marquee-container w-full overflow-hidden">
<div className="marquee-content flex gap-8 w-max items-center opacity-60">
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Product Design
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  User Research
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Prototyping
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Design Systems
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Strategy
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Product Design
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  User Research
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Prototyping
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Design Systems
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Strategy
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Product Design
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  User Research
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Prototyping
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Design Systems
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Strategy
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Product Design
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  User Research
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Prototyping
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Design Systems
                </span>
<span className="text-neutral-300">•</span>
<span className="text-neutral-600 font-medium text-lg whitespace-nowrap">
                  Strategy
                </span>
<span className="text-neutral-300">•</span>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 pb-12 pt-12 text-center opacity-40 hover:opacity-100 transition-opacity duration-500">
<p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
          © 2024 Mianying. All Rights Reserved.
        </p>
</div>
</main>

<div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[9999] w-auto max-w-[90vw] pointer-events-none" id="floating-nav">
<nav className="pointer-events-auto flex gap-2 transform transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-white/95 to-white/90 border-[#64906E] border ring-white/40 ring-1 rounded-full pt-2 pr-2 pb-2 pl-2 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.05)] backdrop-blur-xl gap-x-2 gap-y-2 items-center">
<a className="hover:bg-[#64906E] hover:text-white transition-all duration-300 text-sm font-semibold rounded-full pt-2 pr-4 pb-2 pl-4" href="#">
          Home
        </a>
<a className="px-4 py-2 text-sm font-semibold hover:bg-[#64906E] hover:text-white rounded-full transition-all duration-300" href="#work">
          Work
        </a>
<a className="px-4 py-2 text-sm font-semibold hover:bg-[#64906E] hover:text-white rounded-full transition-all duration-300 text-neutral-600" href="#about">
          About
        </a>
<div className="w-px h-5 mx-1 bg-neutral-300"></div>
<div className="flex items-center gap-2">

<a className="group/social p-2.5 rounded-full hover:bg-[#64906E] hover:text-white border border-transparent transition-all duration-300" href="https://linkedin.com" target="_blank">
<svg className="transition-colors text-neutral-600 group-hover/social:text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect className="" height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>

<button className="group/social p-2.5 rounded-full hover:bg-[#64906E] hover:text-white border border-transparent transition-all duration-300" onclick="copyEmail()">
<svg className="transition-colors text-neutral-600 group-hover/social:text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="16" rx="2" width="20" x="2" y="4"></rect>
<path className="" d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
</button>
</div>
</nav>
</div>



    </>
  );
}
