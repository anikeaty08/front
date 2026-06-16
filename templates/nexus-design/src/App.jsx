import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


  document.querySelectorAll('svg[data-orbit]').forEach(svg => {
    const val = Number(svg.getAttribute('value') || 0);           // 0..100
    const suffix = svg.getAttribute('data-suffix') || '';         // e.g. "%"
    const label = svg.getAttribute('data-label') || 'PERFORMANCE';

    const r = 78;                                                 // must match arc r
    const C = 2 * Math.PI * r;
    const arc = svg.querySelector('[data-arc]');
    arc.setAttribute('stroke-dasharray', C.toFixed(2));
    arc.setAttribute('stroke-dashoffset', C.toFixed(2));
    // animate
    requestAnimationFrame(() => {
      arc.style.transition = 'stroke-dashoffset 900ms cubic-bezier(.22,.9,.2,1)';
      arc.setAttribute('stroke-dashoffset', ((100 - val) / 100 * C).toFixed(2));
    });

    // cap position at arc end
    const cap = svg.querySelector('[data-cap]');
    const endAngle = -Math.PI / 2 + (val / 100) * 2 * Math.PI;   // starts at top
    const cx = 100 + r * Math.cos(endAngle);
    const cy = 100 + r * Math.sin(endAngle);
    cap.setAttribute('cx', cx.toFixed(2));
    cap.setAttribute('cy', cy.toFixed(2));

    // center number
    const valueSpan = svg.parentElement.querySelector('[data-value]');
    if (valueSpan) valueSpan.textContent = val + suffix;

    // radial label text (optional)
    svg.querySelectorAll('tspan[data-label]').forEach(n => n.textContent = label);
  });



    document.querySelectorAll('svg[data-orbit]').forEach(svg => {
      const val = Number(svg.getAttribute('value') || 0);
      const r = 78;
      const C = 2 * Math.PI * r;
      const arc = svg.querySelector('[data-arc]');
      arc.setAttribute('stroke-dasharray', C.toFixed(2));
      arc.setAttribute('stroke-dashoffset', C.toFixed(2));
      requestAnimationFrame(() => {
        arc.style.transition = 'stroke-dashoffset 900ms cubic-bezier(.22,.9,.2,1)';
        arc.setAttribute('stroke-dashoffset', ((100 - val) / 100 * C).toFixed(2));
      });

      const cap = svg.querySelector('[data-cap]');
      const endAngle = -Math.PI / 2 + (val / 100) * 2 * Math.PI;
      const cx = 100 + r * Math.cos(endAngle);
      const cy = 100 + r * Math.sin(endAngle);
      cap.setAttribute('cx', cx.toFixed(2));
      cap.setAttribute('cy', cy.toFixed(2));

      const valueSpan = svg.parentElement.querySelector('[data-value]');
      if (valueSpan) valueSpan.textContent = val;
    });
  


    (function() {
      const sections = [
        { heading: '[data-heading="1"]', text: '[data-text="1"]', panel: '[data-panel="1"]', section: '[data-section="1"]' },
        { heading: '[data-heading="2"]', text: '[data-text="2"]', panel: '[data-panel="2"]', section: '[data-section="2"]' },
        { heading: '[data-heading="3"]', text: '[data-text="3"]', panel: '[data-panel="3"]', section: '[data-section="3"]' }
      ];

      let currentIndex = 0;
      let ticking = false;

      function updateActiveSection() {
        sections.forEach((sec, idx) => {
          const panel = document.querySelector(sec.panel);
          const section = document.querySelector(sec.section);
          const heading = document.querySelector(sec.heading);
          const text = document.querySelector(sec.text);
          
          if (!panel || !section) return;
          
          const rect = panel.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const isActive = rect.top < windowHeight * 0.5 && rect.bottom > windowHeight * 0.5;
          
          if (isActive && idx !== currentIndex) {
            currentIndex = idx;
            
            sections.forEach((s, i) => {
              const sectionEl = document.querySelector(s.section);
              const headingEl = document.querySelector(s.heading);
              const textEl = document.querySelector(s.text);
              
              if (i === idx) {
                sectionEl.style.opacity = '1';
                if (headingEl) {
                  headingEl.classList.remove('text-white/60', 'text-white/80');
                  headingEl.classList.add('text-white');
                }
                if (textEl) {
                  textEl.classList.remove('text-white/60');
                  textEl.classList.add('text-white/90');
                }
              } else {
                sectionEl.style.opacity = '0.6';
                if (headingEl) {
                  headingEl.classList.remove('text-white');
                  headingEl.classList.add('text-white/60');
                }
                if (textEl) {
                  textEl.classList.remove('text-white/90');
                  textEl.classList.add('text-white/60');
                }
              }
            });
          }
        });
      }

      function onScroll() {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            updateActiveSection();
            ticking = false;
          });
          ticking = true;
        }
      }

      window.addEventListener('scroll', onScroll, { passive: true });
      updateActiveSection();
    })();
  


      // Mobile menu toggle
      const menuBtn = document.getElementById('menuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      
      if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
      }

      // Scroll animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-animate-delay') || 0;
            setTimeout(() => {
              entry.target.classList.add('animated');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
      });

      // Initialize Lucide icons
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-screen"><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="BqS5vTHVEpn6NiF0g8iJ"></div>

</div></div>

<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
<div className="w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] rounded-full bg-[rgba(60,130,255,0.15)] blur-[120px] sm:blur-[180px]"></div>
</div>

<div className="pointer-events-none absolute inset-0 opacity-25" style="
    --line: rgba(255,255,255,0.06);
    --vline: rgba(255,255,255,0.08);
    --gap: 260px;
    --thick: 1px;

    background-image:
      repeating-linear-gradient(
        45deg,
        var(--line) 0 var(--thick),
        transparent var(--thick) var(--gap)
      ),
      repeating-linear-gradient(
        135deg,
        var(--line) 0 var(--thick),
        transparent var(--thick) var(--gap)
      ),
      linear-gradient(
        to right,
        transparent calc(50% - var(--thick)/2),
        var(--vline)   calc(50% - var(--thick)/2) calc(50% + var(--thick)/2),
        transparent    calc(50% + var(--thick)/2)
      );

    background-size:
      100% 100%,
      100% 100%,
      var(--gap) 100%;
    background-position:
      center, center, center;
    background-repeat:
      no-repeat, no-repeat, repeat;
  ">
</div>

<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_35%,transparent_0%,transparent_55%,rgba(0,0,0,0.7)_100%)]"></div>

<header className="fixed z-50 animated bg-black/50 w-full border-[#ffffff]/10 border rounded-none backdrop-blur-md" data-animate="">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-2 sm:gap-3">
<span className="inline-grid place-items-center shadow-violet-700/30 hover:scale-105 transition-transform duration-300 cursor-pointer sm:w-12 sm:h-14 sm:pl-14 sm:pr-8 mix-blend-screen w-10 h-12 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b304cbec-471a-4817-b8b1-9d33a6c6b1cf_1600w.png)] max-w-sm bg-cover rounded-xl pr-8 pl-14 invert-0">
</span>
</div>
<nav className="hidden lg:flex items-center gap-6 lg:gap-8 text-sm text-white/70">
<a className="transition-colors duration-200 hover:text-white" href="/library">Library</a>
<a className="transition-colors duration-200 hover:text-white" href="/showcase">Showcase</a>
<a className="transition-colors duration-200 hover:text-white" href="/documentation">Documentation</a>
<a className="transition-colors duration-200 hover:text-white" href="/updates">Updates</a>
<a className="transition-colors duration-200 hover:text-white" href="/pricing">Pricing</a>
</nav>
<div className="hidden lg:flex items-center gap-3">
<a className="text-sm text-white/70 transition-colors duration-200 hover:text-white" href="#">Log in</a>
<button aria-label="Create Account" className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(255,255,255,0.05)] hover:shadow-[0_12px_20px_-6px_rgba(255,255,255,0.1)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-lg pt-[1px] pr-[1px] pb-[1px] pl-[1px] items-center justify-center" role="button" style={{backgroundImage: 'linear-gradient(144deg,rgba(255,255,255,0.3), rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.2))'}} type="button">
<span className="flex items-center justify-center gap-2 text-[15px] leading-none min-w-[120px] lg:min-w-[140px] transition-colors duration-300 group-hover:bg-black/50 font-medium bg-black/80 w-full h-full rounded-lg pt-2.5 pr-4 pb-2.5 pl-4 lg:pt-3 lg:pr-5 lg:pb-3 lg:pl-5">
<span className="">Try it free</span>
<svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>
<button className="lg:hidden inline-flex transition-all duration-200 hover:bg-white/10 hover:ring-white/20 ring-white/10 ring-1 text-sm text-white/80 bg-white/5 rounded-md pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-2 items-center" id="menuBtn">
<svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
<span className="hidden sm:inline">Menu</span>
</button>
</div>
<div className="lg:hidden border-t border-white/10 bg-black/80 backdrop-blur" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
<div className="grid gap-2">
<a className="rounded-md px-3 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-white transition-colors duration-200" href="/library">Library</a>
<a className="rounded-md px-3 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-white transition-colors duration-200" href="/showcase">Showcase</a>
<a className="rounded-md px-3 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-white transition-colors duration-200" href="/documentation">Documentation</a>
<a className="rounded-md px-3 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-white transition-colors duration-200" href="/updates">Updates</a>
<a className="rounded-md px-3 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-white transition-colors duration-200" href="/pricing">Pricing</a>
<div className="flex flex-col sm:flex-row gap-2 pt-3 border-t border-white/10 mt-2">
<a className="flex-1 rounded-md bg-white/5 px-4 py-2.5 text-center text-sm text-white/80 ring-1 ring-white/10 hover:bg-white/10 transition-colors duration-200" href="#">Log in</a>
<a className="flex-1 rounded-md bg-gradient-to-r from-indigo-500 to-fuchsia-600 px-4 py-2.5 text-center text-sm font-semibold tracking-tight text-white shadow-lg shadow-indigo-500/30 hover:scale-[1.02] transition-transform duration-200" href="#">Try it free</a>
</div>
</div>
</div>
</div>
</header>

<section className="z-0 sm:px-6 lg:px-8 sm:pt-32 max-w-7xl mr-auto ml-auto pt-32 pr-4 pl-4 relative">
<div className="sm:space-y-6 sm:ml-auto sm:mr-auto sm:mt-10 text-center max-w-3xl mt-10 mr-auto ml-auto space-y-4">
<div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 shadow-sm backdrop-blur hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer animated" data-animate="">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
      Fresh update released today
      <svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<h1 className="bg-clip-text xl:font-medium sm:text-5xl lg:text-6xl animated text-4xl font-bold text-transparent text-center bg-gradient-to-r from-white to-white/0 pr-2 pl-2" data-animate="" data-animate-delay="100">
  Design Systems That Scale With Your Vision
</h1>
<p className="mx-auto max-w-2xl text-sm sm:text-base lg:text-lg text-white/70 px-4 animated" data-animate="" data-animate-delay="200">
      Nexus Design empowers product teams to build elegant, accessible interfaces with a comprehensive library of 
      production-ready components and design tokens.
    </p>
<div className="flex flex-col sm:flex-row sm:gap-y-6 px-4 gap-x-3 gap-y-6 items-center justify-center" data-animate="" data-animate-delay="300">
<button className="flex hover:bg-white/15 transition duration-300 border-gradient before:rounded-lg font-medium text-white tracking-wide bg-white/5 border-white/5 border rounded-lg pt-2.5 pr-8 pb-2.5 pl-8 sm:pt-2 sm:pr-10 sm:pb-2 sm:pl-10 relative shadow-[inset_0_2px_8px_rgba(255,255,255,0.6),_inset_0_-2px_6px_rgba(255,255,255,0.1),_0_8px_24px_rgba(0,0,0,0.4)] backdrop-blur-xl gap-x-2 gap-y-2 items-center justify-center hover:scale-[1.02] text-sm sm:text-base w-full sm:w-auto">
  START FREE TRIAL
  <svg className="w-4 h-4" fill="none" stroke="white" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</div>

<div className="sm:mt-20 mt-8 mb-20 relative" data-animate="" data-animate-delay="400">
<div className="sm:rounded-2xl sm:pt-3 sm:pr-3 sm:pb-3 sm:pl-3 hover:border-white/20 transition-all duration-500 max-w-6xl border-white/10 border rounded-xl mr-auto ml-auto pt-3 pr-3 pb-3 pl-3 relative shadow-[0_10px_50px_-10px_rgba(0,0,0,0.6)] backdrop-blur-xl bg-white/5">
<div className="ring-inset sm:rounded-xl sm:pt-4 sm:pr-4 sm:pb-4 sm:pl-4 bg-white/5 ring-white/10 ring-1 rounded-lg pt-4 pr-4 pb-4 pl-4 backdrop-blur-xl">
<div className="mb-3 sm:mb-4 flex items-center justify-between">
<div className="flex items-center gap-1.5 sm:gap-2">
<span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-red-500/70 hover:bg-red-500 transition-colors duration-200 cursor-pointer"></span>
<span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-yellow-500/70 hover:bg-yellow-500 transition-colors duration-200 cursor-pointer"></span>
<span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-emerald-500/70 hover:bg-emerald-500 transition-colors duration-200 cursor-pointer"></span>
<span className="ml-2 sm:ml-3 text-xs sm:text-sm font-medium text-white/70">Dashboard</span>
</div>
<div className="flex items-center gap-1.5 sm:gap-2">
<div className="hidden sm:flex items-center gap-2 rounded-md bg-white/5 px-2 py-1 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-200 backdrop-blur-md">
<svg className="h-4 w-4 text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-32 bg-transparent text-xs text-white/70 placeholder:text-white/40 focus:outline-none sm:w-40 lg:w-56" placeholder="Search workspace"/>
</div>
<button className="rounded-md bg-white/5 p-1.5 sm:p-2 ring-1 ring-white/10 transition-all duration-200 hover:bg-white/10 hover:ring-white/20 backdrop-blur-md">
<svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
</button>
<img alt="avatar" className="ring-white/20 ring-1 w-6 h-6 sm:w-7 sm:h-7 object-cover rounded-full hover:ring-white/40 hover:scale-110 transition-all duration-300 cursor-pointer" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/986db8ed-1c5d-42fb-8c1d-4b3716d2e317_320w.jpg"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 pb-20 sm:pb-4">
<aside className="rounded-lg border border-white/10 bg-white/5 p-2.5 sm:p-3 backdrop-blur-xl hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300">
<div className="mb-2 text-xs font-medium text-white/60">Workspace</div>
<div className="grid gap-1.5 sm:gap-2 text-xs sm:text-sm">
<button className="group flex items-center justify-between rounded-md px-2 py-1.5 sm:py-2 text-white/80 transition-all duration-200 hover:bg-white/5 hover:text-white">
<span className="inline-flex items-center gap-1.5 sm:gap-2">
<svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 opacity-70 group-hover:opacity-100 transition-opacity duration-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg> Overview
                    </span>
<span className="rounded-full bg-white/5 px-1.5 py-0.5 text-[10px] text-white/60 ring-1 ring-white/10 group-hover:bg-white/10 group-hover:text-white/80 transition-all duration-200">12</span>
</button>
<button className="group flex items-center justify-between rounded-md px-2 py-1.5 sm:py-2 text-white/80 transition-all duration-200 hover:bg-white/5 hover:text-white">
<span className="inline-flex items-center gap-1.5 sm:gap-2">
<svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 opacity-70 group-hover:opacity-100 transition-opacity duration-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg> Designs
                    </span>
<span className="rounded-full bg-white/5 px-1.5 py-0.5 text-[10px] text-white/60 ring-1 ring-white/10 group-hover:bg-white/10 group-hover:text-white/80 transition-all duration-200">48</span>
</button>
<button className="group flex items-center justify-between rounded-md px-2 py-1.5 sm:py-2 text-white/80 transition-all duration-200 hover:bg-white/5 hover:text-white">
<span className="inline-flex items-center gap-1.5 sm:gap-2">
<svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 opacity-70 group-hover:opacity-100 transition-opacity duration-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg> Analytics
                    </span>
<span className="rounded-full bg-white/5 px-1.5 py-0.5 text-[10px] text-white/60 ring-1 ring-white/10 group-hover:bg-white/10 group-hover:text-white/80 transition-all duration-200">8</span>
</button>
<button className="group flex transition-all duration-200 hover:bg-white/5 hover:text-white text-white/80 rounded-md pt-1.5 pr-2 pb-1.5 pl-2 sm:pt-2 sm:pr-2 sm:pb-2 sm:pl-2 items-center justify-between">
<span className="inline-flex items-center gap-1.5 sm:gap-2">
<svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 opacity-70 group-hover:opacity-100 transition-opacity duration-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> Documents
                    </span>
<span className="rounded-full bg-white/5 px-1.5 py-0.5 text-[10px] text-white/60 ring-1 ring-white/10 group-hover:bg-white/10 group-hover:text-white/80 transition-all duration-200">24</span>
</button>
<button className="group flex transition-all duration-200 hover:bg-white/5 hover:text-white text-white/80 rounded-md pt-1.5 pr-2 pb-1.5 pl-2 sm:pt-2 sm:pr-2 sm:pb-2 sm:pl-2 items-center justify-between">
<span className="inline-flex items-center gap-1.5 sm:gap-2">
<svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 opacity-70 group-hover:opacity-100 transition-opacity duration-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> Preferences
                    </span>
<span className="rounded-full bg-white/5 px-1.5 py-0.5 text-[10px] text-white/60 ring-1 ring-white/10 group-hover:bg-white/10 group-hover:text-white/80 transition-all duration-200">3</span>
</button>
</div>
</aside>
<div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 sm:gap-4 gap-x-3 gap-y-3">
<div className="rounded-lg border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur-xl hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300">
<div className="mb-2 sm:mb-3 flex items-center justify-between">
<span className="text-xs font-medium text-white/60">Recent Activity</span>
<button className="rounded-md bg-white/5 px-2 py-1 text-[10px] sm:text-xs text-white/70 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition-all duration-200 backdrop-blur-md">View All</button>
</div>
<div className="grid gap-1.5 sm:gap-2">
<div className="flex items-center justify-between rounded-md bg-white/5 backdrop-blur-md px-2 py-1.5 sm:px-3 sm:py-2 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition-all duration-200 cursor-pointer">
<div className="text-xs sm:text-sm text-white/80">UI-3420</div>
<div className="text-[10px] sm:text-xs text-white/60">Design → Build</div>
<div className="text-[10px] sm:text-xs text-emerald-400">Done</div>
</div>
<div className="flex bg-white/5 backdrop-blur-md ring-white/10 ring-1 rounded-md px-2 py-1.5 sm:px-3 sm:py-2 items-center justify-between hover:bg-white/10 hover:ring-white/20 transition-all duration-200 cursor-pointer">
<div className="text-xs sm:text-sm text-white/80">FE-1892</div>
<div className="text-[10px] sm:text-xs text-white/60">Code → Review</div>
<div className="text-[10px] sm:text-xs text-yellow-300">Active</div>
</div>
<div className="flex bg-white/5 backdrop-blur-md ring-white/10 ring-1 rounded-md pt-1.5 pr-2 pb-1.5 pl-2 sm:pt-2 sm:pr-3 sm:pb-2 sm:pl-3 items-center justify-between hover:bg-white/10 hover:ring-white/20 transition-all duration-200 cursor-pointer">
<div className="text-xs sm:text-sm text-white/80">DS-5671</div>
<div className="text-[10px] sm:text-xs text-white/60">Test → Ship</div>
<div className="text-[10px] sm:text-xs text-yellow-300 xl:text-[#e663f8]">Review</div>
</div>
<div className="flex bg-white/5 backdrop-blur-md ring-white/10 ring-1 rounded-md pt-1.5 pr-2 pb-1.5 pl-2 sm:pt-2 sm:pr-3 sm:pb-2 sm:pl-3 items-center justify-between hover:bg-white/10 hover:ring-white/20 transition-all duration-200 cursor-pointer">
<div className="text-xs sm:text-sm text-white/80">PM-2845</div>
<div className="text-[10px] sm:text-xs text-white/60">Plan → Execute</div>
<div className="text-[10px] sm:text-xs text-yellow-300 xl:text-[#66a8ff]">Queue</div>
</div>
<div className="flex bg-white/5 backdrop-blur-md ring-white/10 ring-1 rounded-md pt-1.5 pr-2 pb-1.5 pl-2 sm:pt-2 sm:pr-3 sm:pb-2 sm:pl-3 items-center justify-between hover:bg-white/10 hover:ring-white/20 transition-all duration-200 cursor-pointer">
<div className="text-xs sm:text-sm text-white/80">BR-7123</div>
<div className="text-[10px] sm:text-xs text-white/60">Monitor → Fix</div>
<div className="text-[10px] sm:text-xs text-yellow-300 xl:text-[#6b40e2]">Open</div>
</div>
</div>
</div>
<div className="group overflow-hidden sm:p-4 ring-1 ring-white/10 hover:border-white/20 hover:from-white/[0.07] transition-all duration-300 bg-white/5 backdrop-blur-xl border-white/10 border rounded-lg pt-3 pr-3 pb-3 pl-3 relative">
<div className="mb-2 sm:mb-3 flex items-center justify-between">
<i className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white/60 group-hover:text-white/80 transition-colors duration-200" data-lucide="cube"></i>
<img alt="3D render" className="transition duration-700 hover:scale-[1.03] w-full h-full object-cover saturate-100 group-hover:saturate-[1.1]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ab0b3891-bc36-4e1f-8314-71ee4161dd3d_3840w.jpg?w=800&amp;q=80"/>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur-xl sm:col-span-2 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300">
<div className="mb-2 sm:mb-3 flex items-center justify-between">
<span className="text-xs font-medium text-white/60">Team Notes</span>
<button className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 text-[10px] sm:text-xs text-white/70 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition-all duration-200 backdrop-blur-md">
<svg className="h-3 w-3 sm:h-3.5 sm:w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                      Add Note
                    </button>
</div>
<div className="grid gap-2 gri:grid-cols-3">
<div className="rounded-md bg-white/5 backdrop-blur-md p-2.5 sm:p-3 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition-all duration-200 cursor-pointer">
<div className="text-xs sm:text-sm font-medium text-white/80">Color Refinements</div>
<p className="mt-1 text-[10px] sm:text-xs text-white/60">Review primary palette and update accent colors for better contrast ratios.</p>
</div>
<div className="rounded-md bg-white/5 backdrop-blur-md p-2.5 sm:p-3 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition-all duration-200 cursor-pointer">
<div className="text-xs sm:text-sm font-medium text-white/80">Motion Guidelines</div>
<p className="mt-1 text-[10px] sm:text-xs text-white/60">Document animation curves and duration standards for consistent feel.</p>
</div>
<div className="rounded-md bg-white/5 backdrop-blur-md p-2.5 sm:p-3 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition-all duration-200 cursor-pointer">
<div className="text-xs sm:text-sm font-medium text-white/80">Component Audit</div>
<p className="mt-1 text-[10px] sm:text-xs text-white/60">Validate all button variants meet accessibility and usage requirements.</p>
</div>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="pointer-events-auto -bottom-16 sm:bottom-0 left-0 sm:left-auto w-[calc(100%-2rem)] sm:w-[min(100%,340px)] sm:rounded-2xl sm:p-5 hover:border-white/20 hover:from-white/[0.12] transition-all duration-300 cursor-pointer text-white/90 bg-white/10 border-white/10 border ring-white/10 ring-1 rounded-lg absolute pt-4 pr-4 pb-4 pl-4 backdrop-blur-xl shadow-md" data-animate="" data-animate-delay="300">
<div className="flex items-start justify-between">
<div className="">
<div className="sm:text-sm text-xs font-medium tracking-tight">Interface Design Mastery</div>
<p className="mt-1 text-[10px] sm:text-xs text-white/70">
                Learn the core principles of building scalable design systems that empower product teams and delight users.
              </p>
</div>
<svg className="h-4 w-4 sm:h-5 sm:w-5 text-white/70 flex-shrink-0 ml-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<div className="flex mt-2 sm:mt-3 items-center justify-between flex-wrap gap-2">
<div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-md bg-white/5 backdrop-blur-md px-2 py-1 text-[10px] sm:text-[11px] text-white/70 ring-1 ring-white/10">
<svg className="h-3 w-3 sm:h-3.5 sm:w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
              8 lessons
            </div>
<button className="inline-flex shadow-indigo-500/30 transition-all duration-200 hover:scale-[1.02] hover:shadow-indigo-500/50 text-[10px] sm:text-xs font-semibold text-white tracking-tight border-[#ffffff]/5 border rounded-md pt-1.5 pr-2.5 pb-1.5 pl-2.5 sm:pt-1.5 sm:pr-3 sm:pb-1.5 sm:pl-3 backdrop-blur-lg gap-x-1.5 gap-y-1.5 items-center bg-white/5">
                  Start course
                  <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute -right-20 top-16 hidden sm:block">
<div className="relative flex items-center justify-center rounded-full bg-white/5 p-3 ring-1 ring-white/10 backdrop-blur">

<div className="size-28">
<div className="relative size-full">

<svg className="block size-full overflow-visible" data-label="PERFORMANCE" data-orbit="" value="98" viewbox="0 0 200 200">

<defs>

<filter height="200%" id="outerGlow" width="200%" x="-50%" y="-50%">
<fegaussianblur result="blur" stddeviation="6"></fegaussianblur>
<femerge>
<femergenode in="blur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>

<filter height="200%" id="innerShadow" width="200%" x="-50%" y="-50%">
<feoffset dx="0" dy="2"></feoffset>
<fegaussianblur result="blur" stddeviation="3"></fegaussianblur>
<fecomposite in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="inner"></fecomposite>
<fecolormatrix in="inner" type="matrix" values="
                0 0 0 0 0
                0 0 0 0 0
                0 0 0 0 0
                0 0 0 0.55 0"></fecolormatrix>
<fecomposite in="SourceGraphic"></fecomposite>
</filter>

<lineargradient id="arcGrad" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#C8D5FF"></stop>
<stop offset="40%" stop-color="#7FB2FF"></stop>
<stop offset="100%" stop-color="#3A83FF"></stop>
</lineargradient>

<lineargradient id="bevel" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="rgba(255,255,255,.45)"></stop>
<stop offset="100%" stop-color="rgba(255,255,255,.06)"></stop>
</lineargradient>

<path d="M100,100 m-94,0 a94,94 0 1,1 188,0 a94,94 0 1,1 -188,0" id="textCircleLarge"></path>
</defs>

<g filter="url(#innerShadow)">
<circle cx="100" cy="100" fill="rgba(10,14,20,0.9)" r="84"></circle>

<circle cx="100" cy="100" fill="none" r="84" stroke="url(#bevel)" strokeWidth="2"></circle>

<circle cx="100" cy="100" fill="none" r="94" stroke="rgba(255,255,255,.08)" strokeWidth="2"></circle>
</g>

<circle cx="100" cy="100" fill="none" r="92" stroke="rgba(190,200,220,.18)" stroke-dasharray="2 10" strokeWidth="2" transform="rotate(-90 100 100)"></circle>

<circle cx="100" cy="100" fill="none" r="78" stroke="rgba(255,255,255,.10)" strokeLinecap="round" strokeWidth="10" transform="rotate(-90 100 100)"></circle>

<circle cx="100" cy="100" data-arc="" fill="none" r="78" stroke="url(#arcGrad)" strokeLinecap="round" strokeWidth="10" style={{filter: 'url(#outerGlow)'}} transform="rotate(-90 100 100)"></circle>

<circle data-cap="" fill="#EAF1FF" opacity=".95" r="5"></circle>

<g style={{transformOrigin: '100px 100px', animation: 'orbitSpin 18s linear infinite'}}>
<text fill="rgba(220,230,255,.32)" fontSize="12" letter-spacing="2">
<textpath href="#textCircleLarge" startoffset="0%">
<tspan>• </tspan>
<tspan>PERFORMANCE</tspan>
<tspan> • </tspan>
<tspan>PERFORMANCE</tspan>
<tspan> • </tspan>
<tspan>PERFORMANCE</tspan>
<tspan> • </tspan>
<tspan>PERFORMANCE</tspan>
</textpath>
</text>
</g>
</svg>

<span className="absolute inset-0 grid place-items-center text-white text-4xl font-semibold" data-value="">98</span>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute -left-20 bottom-40 hidden sm:block">
<div className="relative flex items-center justify-center rounded-full bg-white/5 p-3 ring-1 ring-white/10 backdrop-blur">
<div className="size-24">
<div className="relative size-full">
<svg className="block size-full" data-label="PERFORMANCE" data-orbit="" data-suffix="%" value="50" viewbox="0 0 200 200">
<use href="#textCircle" style={{display: 'none'}}></use> 

<defs>
<filter height="200%" id="outerGlow2" width="200%" x="-50%" y="-50%">
<fegaussianblur result="blur" stddeviation="5"></fegaussianblur>
<femerge>
<femergenode in="blur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
<filter height="200%" id="innerShadow2" width="200%" x="-50%" y="-50%">
<feoffset dx="0" dy="2"></feoffset>
<fegaussianblur result="blur" stddeviation="2"></fegaussianblur>
<fecomposite in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="inner"></fecomposite>
<fecolormatrix in="inner" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0">
</fecolormatrix>
<fecomposite in="SourceGraphic"></fecomposite>
</filter>
<lineargradient id="arcGrad2" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#D8E3FF"></stop>
<stop offset="40%" stop-color="#93BDFF"></stop>
<stop offset="100%" stop-color="#4E8FFF"></stop>
</lineargradient>
<lineargradient id="bevel2" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="rgba(255,255,255,.5)"></stop>
<stop offset="100%" stop-color="rgba(255,255,255,.06)"></stop>
</lineargradient>
</defs>
<g filter="url(#innerShadow2)">
<circle cx="100" cy="100" fill="rgba(10,14,20,0.9)" r="84"></circle>
<circle cx="100" cy="100" fill="none" r="84" stroke="url(#bevel2)" strokeWidth="2"></circle>
<circle cx="100" cy="100" fill="none" r="94" stroke="rgba(255,255,255,.08)" strokeWidth="2"></circle>
</g>
<circle cx="100" cy="100" fill="none" r="92" stroke="rgba(190,200,220,.25)" stroke-dasharray="2 10" strokeWidth="2" transform="rotate(-90 100 100)"></circle>
<circle cx="100" cy="100" fill="none" r="78" stroke="rgba(255,255,255,.10)" strokeLinecap="round" strokeWidth="10" transform="rotate(-90 100 100)"></circle>
<circle cx="100" cy="100" data-arc="" fill="none" r="78" stroke="url(#arcGrad2)" strokeLinecap="round" strokeWidth="10" style={{filter: 'url(#outerGlow2)'}} transform="rotate(-90 100 100)"></circle>
<circle data-cap="" fill="#EAF1FF" opacity=".95" r="5"></circle>
</svg>
<span className="absolute inset-0 grid place-items-center text-white text-xl font-semibold" data-value="">50%</span>
</div>
</div>
</div>
</div>


<style>
  @keyframes orbitSpin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
</style>
</div></div></section>

<section className="sm:px-6 sm:mt-32 sm:pt-16 sm:pb-16 lg:px-8 lg:mt-60 bg-center max-w-7xl mt-32 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="relative overflow-visible">
<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute -left-32 top-0 h-[28rem] w-[32rem] rounded-full bg-white/10 blur-[140px] opacity-20"></div>
<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
<div className="w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] rounded-full bg-[rgba(60,130,255,0.15)] blur-[120px] sm:blur-[180px]"></div>
</div>
<div className="absolute -right-24 bottom-0 h-[22rem] w-[22rem] rounded-full bg-white/10 blur-[120px] opacity-10"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-y-10 gap-x-6 gap-y-8 items-start">
<div className="space-y-6 sm:space-y-8 lg:sticky lg:top-32">
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight sm:leading-none" data-animate="">
<span className="text-white xl:font-thin">Create</span>
<span className="xl:font-thin text-white/30"> stunning</span>
<span className="text-white/30 xl:font-thin">digital products with</span>
<span className="xl:font-thin text-white/30">tools you love</span>
</h1>
<div className="space-y-5 sm:space-y-7">
<div className="transition-opacity duration-500 cursor-pointer hover:opacity-100" data-animate="" data-animate-delay="100" data-section="1" style={{opacity: '0.6'}}>
<div className="text-sm font-medium transition-opacity duration-500" data-heading="1">Library</div>
<div className="mt-2 h-px w-20 sm:w-24 bg-white/10"></div>
<p className="mt-2 max-w-[46ch] text-xs sm:text-sm lg:text-base text-white/70 transition-opacity duration-500" data-text="1">
              A rich collection of adaptable components designed for flexibility and consistency, ensuring seamless integration across your entire product ecosystem.
            </p>
</div>
<div className="transition-opacity duration-500 opacity-60 cursor-pointer hover:opacity-100" data-animate="" data-animate-delay="200" data-section="2" style={{opacity: '0.6'}}>
<div className="text-sm font-medium transition-opacity duration-500" data-heading="2">Multiple visual styles</div>
<p className="mt-2 max-w-[46ch] text-xs sm:text-sm transition-opacity duration-500" data-text="2">
              Switch between glass, outline, and solid variants to match your brand identity and design vision.
            </p>
</div>
<div className="transition-opacity duration-500 opacity-60 cursor-pointer hover:opacity-100" data-animate="" data-animate-delay="300" data-section="3" style={{opacity: '1'}}>
<div className="text-sm font-medium transition-opacity duration-500" data-heading="3">Ready‑made templates</div>
<p className="mt-2 max-w-[46ch] text-xs sm:text-sm transition-opacity duration-500" data-text="3">
              Accelerate delivery with pre‑designed page layouts and sections that work beautifully right out of the box.
            </p>
</div>
</div>
<button className="inline-flex gap-2 hover:bg-white/15 transition-all duration-200 bg-white/10 border-white/20 border rounded-xl mt-8 sm:mt-10 pt-2.5 pr-5 pb-2.5 pl-5 sm:pt-3 sm:pr-6 sm:pb-3 sm:pl-6 backdrop-blur gap-x-2 gap-y-2 items-center hover:border-white/30 hover:scale-[1.02] text-sm sm:text-base" data-animate="" data-animate-delay="400">
          EXPLORE LIBRARY
          <svg className="size-3.5 sm:size-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
<div className="space-y-0">
<div className="min-h-[60vh] sm:min-h-[75vh] lg:min-h-[85vh] flex relative items-center" data-panel="1">

<div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 z-20" style={{animation: 'orbitFloat 6s ease-in-out infinite'}}>
<div className="relative flex items-center justify-center rounded-full bg-gradient-to-br from-white/10 to-white/5 p-4 ring-1 ring-white/20 backdrop-blur-xl shadow-2xl" style={{animation: 'orbitPulse 4s ease-in-out infinite'}}>
<div className="size-28">
<div className="relative size-full">
<svg className="block size-full overflow-visible" data-label="PERFORMANCE" data-orbit="" value="98" viewbox="0 0 200 200">
<defs>
<path d="M100,100 m-94,0 a94,94 0 1,1 188,0 a94,94 0 1,1 -188,0" id="textCircleLarge"></path>
</defs>
<g filter="url(#glassGlow)">
<circle cx="100" cy="100" fill="rgba(255,255,255,0.05)" r="84" stroke="rgba(255,255,255,0.2)" strokeWidth="1"></circle>
<circle cx="100" cy="100" fill="none" r="94" stroke="rgba(255,255,255,0.15)" strokeWidth="1"></circle>
</g>
<circle cx="100" cy="100" fill="none" r="92" stroke="rgba(255,255,255,0.1)" stroke-dasharray="2 10" strokeWidth="1" transform="rotate(-90 100 100)"></circle>
<circle cx="100" cy="100" fill="none" r="78" stroke="rgba(255,255,255,0.08)" strokeLinecap="round" strokeWidth="10" transform="rotate(-90 100 100)"></circle>
<circle cx="100" cy="100" data-arc="" fill="none" r="78" stroke="url(#glassGrad)" stroke-dasharray="490.09" stroke-dashoffset="490.09" strokeLinecap="round" strokeWidth="10" style={{filter: 'url(#glassGlow)', transition: 'stroke-dashoffset 900ms cubic-bezier(0.22, 0.9, 0.2, 1)'}} transform="rotate(-90 100 100)"></circle>
<circle cx="90.22" cy="22.62" data-cap="" fill="rgba(255,255,255,0.9)" opacity="0.95" r="6" style={{filter: 'url(#glassGlow)'}}></circle>
</svg>
<span className="absolute inset-0 grid place-items-center text-white text-4xl font-semibold drop-shadow-lg" data-value="">98</span>
</div>
</div>
<div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/5 to-transparent"></div>
<div className="absolute inset-2 rounded-full ring-1 ring-white/10"></div>
</div>
</div>
<style>
    @keyframes orbitFloat {
      0%, 100% { transform: translateY(-50%) translateX(-25%) translateZ(0); }
      50% { transform: translateY(-50%) translateX(-25%) translateY(-10px) translateZ(0); }
    }
    
    @keyframes orbitPulse {
      0%, 100% { box-shadow: 0 0 20px rgba(99,102,241,0.3), 0 0 40px rgba(255,255,255,0.1); }
      50% { box-shadow: 0 0 30px rgba(99,102,241,0.5), 0 0 60px rgba(255,255,255,0.2); }
    }
  </style>
<div className="transition-all duration-700 bg-gradient-to-b from-white/10 to-white/5 w-full border-white/10 border ring-white/10 ring-1 rounded-xl sm:rounded-2xl shadow-[0_10px_50px_-10px_rgba(0,0,0,0.6)] backdrop-blur hover:border-white/20 hover:shadow-[0_15px_60px_-15px_rgba(0,0,0,0.7)] relative z-10" data-animate="" data-content="1">
<div className="flex bg-black/30 border-white/10 rounded-t-xl sm:rounded-t-2xl border-b pt-3 pr-4 pb-3 pl-4 sm:pt-4 sm:pr-5 sm:pb-4 sm:pl-5 items-center justify-between flex-wrap gap-2">
<div className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/80">
<svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 opacity-80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
        Voyager
      </div>
<div className="hidden sm:flex gap-2">
<span className="rounded-md bg-white/5 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs text-white ring-1 ring-white/10 cursor-pointer hover:bg-white/10 hover:ring-white/20 transition-all duration-200">Trips</span>
<span className="rounded-md px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs text-white/70 ring-1 ring-white/10 cursor-pointer hover:bg-white/5 hover:text-white transition-all duration-200">Hotels</span>
<span className="rounded-md px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs text-white/70 ring-1 ring-white/10 cursor-pointer hover:bg-white/5 hover:text-white transition-all duration-200">Rentals</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 pt-4 pr-4 pb-4 pl-4 sm:pt-6 sm:pr-6 sm:pb-6 sm:pl-6 gap-x-3 gap-y-3 sm:gap-x-4 sm:gap-y-4">
<aside className="rounded-lg sm:rounded-xl border border-white/10 bg-white/5 p-4 sm:p-6 ring-1 ring-white/10 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300">
<div className="mb-4 sm:mb-5 flex items-center justify-between">
<span className="text-xs sm:text-sm font-medium text-white/70">Refine Search</span>
<button className="text-[10px] sm:text-xs text-white/60 hover:text-white transition-colors duration-200">Clear</button>
</div>
<div className="space-y-4 sm:space-y-5">
<div className="">
<div className="mb-2 sm:mb-3 text-xs sm:text-sm font-medium text-white/60">Sort by</div>
<div className="flex items-center justify-between rounded-lg bg-black/20 px-3 sm:px-4 py-2.5 sm:py-3 ring-1 ring-white/10 cursor-pointer hover:bg-black/30 hover:ring-white/20 transition-all duration-200">
<span className="text-xs sm:text-sm text-white/70">Duration</span>
<svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="">
<div className="mb-2 sm:mb-3 text-xs sm:text-sm font-medium text-white/60">Stops</div>
<div className="space-y-2">
<label className="flex items-center gap-2 sm:gap-3 rounded-lg bg-black/20 px-3 sm:px-4 py-2.5 sm:py-3 ring-1 ring-white/10 cursor-pointer hover:bg-black/30 hover:ring-white/20 transition-all duration-200">
<div className="bg-white/5 w-3.5 h-3.5 sm:w-4 sm:h-4 border-white/20 border rounded"></div>
<span className="text-xs sm:text-sm text-white/70">Direct flights only</span>
</label>
<label className="flex items-center gap-2 sm:gap-3 rounded-lg bg-black/20 px-3 sm:px-4 py-2.5 sm:py-3 ring-1 ring-white/10 cursor-pointer hover:bg-black/30 hover:ring-white/20 transition-all duration-200">
<div className="h-3.5 w-3.5 sm:h-4 sm:w-4 rounded border border-white/20 bg-white/5"></div>
<span className="text-xs sm:text-sm text-white/70">1 stop maximum</span>
</label>
</div>
</div>
<div className="">
<div className="mb-2 sm:mb-3 text-xs sm:text-sm font-medium text-white/60">Price Range</div>
<div className="rounded-lg bg-black/20 px-3 sm:px-4 py-2.5 sm:py-3 ring-1 ring-white/10 hover:bg-black/30 hover:ring-white/20 transition-all duration-200 cursor-pointer">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] sm:text-xs text-white/60">$0</span>
<span className="text-[10px] sm:text-xs text-white/60">$2000</span>
</div>
<div className="h-1 w-full rounded-full bg-white/10">
<div className="h-1 w-[60%] rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400"></div>
</div>
</div>
</div>
</div>
</aside>
<div className="space-y-4 sm:space-y-5">
<div className="ring-1 ring-white/10 bg-white/5 border-white/10 border rounded-lg sm:rounded-xl pt-4 pr-4 pb-4 pl-4 sm:pt-6 sm:pr-6 sm:pb-6 sm:pl-6 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300">
<div className="mb-4 sm:mb-5 flex flex-wrap items-center gap-2 text-xs text-white/70">
<span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-md bg-white/10 px-2.5 sm:px-3 py-1.5 ring-1 ring-white/10 cursor-pointer hover:bg-white/15 transition-all duration-200">
<span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-400"></span> Round trip
            </span>
<span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-md bg-white/5 px-2.5 sm:px-3 py-1.5 ring-1 ring-white/10 cursor-pointer hover:bg-white/10 transition-all duration-200">
<span className="text-white/60 text-[10px] sm:text-xs">2 passengers</span>
</span>
<span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-md bg-white/5 px-2.5 sm:px-3 py-1.5 ring-1 ring-white/10 cursor-pointer hover:bg-white/10 transition-all duration-200">
<span className="text-white/60 text-[10px] sm:text-xs">Economy</span>
</span>
</div>
<div className="mt-3 sm:mt-4 grid grid-cols-2 gap-3 sm:gap-4">
<div className="rounded-lg bg-black/20 p-3 sm:p-4 ring-1 ring-white/10 cursor-pointer hover:bg-black/30 hover:ring-white/20 transition-all duration-200">
<div className="text-[10px] sm:text-xs text-white/60 mb-1.5 sm:mb-2">Departure</div>
<div className="text-xs sm:text-sm text-white/90">Dec 15, 2024</div>
</div>
<div className="rounded-lg bg-black/20 p-3 sm:p-4 ring-1 ring-white/10 cursor-pointer hover:bg-black/30 hover:ring-white/20 transition-all duration-200">
<div className="text-[10px] sm:text-xs text-white/60 mb-1.5 sm:mb-2">Return</div>
<div className="text-xs sm:text-sm text-white/90">Dec 22, 2024</div>
</div>
</div>
<button className="w-full sm:w-auto inline-flex gap-2 hover:bg-white/15 transition-all duration-200 bg-white/10 border-white/20 border rounded-xl mt-6 sm:mt-10 pt-2.5 pr-6 pb-2.5 pl-6 sm:pt-3 sm:pr-10 sm:pb-3 sm:pl-10 backdrop-blur gap-x-2 gap-y-2 items-center justify-center hover:scale-[1.02] text-sm sm:text-base">
            Search Flights
          </button>
</div>
<div className="ring-1 ring-white/10 bg-white/5 border-white/10 border rounded-lg sm:rounded-xl pt-4 pr-4 pb-4 pl-4 sm:pt-5 sm:pr-5 sm:pb-5 sm:pl-5 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300">
<div className="mb-3 sm:mb-4 flex items-center justify-between">
<span className="text-xs sm:text-sm font-medium text-white/70">Quick Stats</span>
</div>
<div className="grid grid-cols-2 gap-2.5 sm:gap-3">
<div className="rounded-lg bg-black/20 p-3 sm:p-4 ring-1 ring-white/10 cursor-pointer hover:bg-black/30 hover:ring-white/20 hover:scale-[1.02] transition-all duration-200">
<div className="text-xl sm:text-2xl font-semibold text-white mb-0.5 sm:mb-1">8h 45m</div>
<div className="text-[10px] sm:text-xs text-white/60">Avg. Flight Time</div>
</div>
<div className="rounded-lg bg-black/20 p-3 sm:p-4 ring-1 ring-white/10 cursor-pointer hover:bg-black/30 hover:ring-white/20 hover:scale-[1.02] transition-all duration-200">
<div className="text-xl sm:text-2xl font-semibold text-emerald-400 mb-0.5 sm:mb-1">$842</div>
<div className="text-[10px] sm:text-xs text-white/60">Best Price</div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
<div className="min-h-[60vh] sm:min-h-[75vh] lg:min-h-screen flex relative items-center" data-panel="2">
<div className="w-full rounded-xl sm:rounded-2xl border-2 border-white/30 bg-gradient-to-b from-white/20 to-white/10 ring-2 ring-white/20 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.9)] backdrop-blur-xl p-8 sm:p-10 transition-all duration-700 hover:border-white/40 hover:shadow-[0_25px_80px_-20px_rgba(0,0,0,1)]" data-animate="" data-content="2">
<h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-6 sm:mb-8 drop-shadow-lg">Visual Style Variants</h3>
<div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
<div className="rounded-xl sm:rounded-2xl bg-white/15 backdrop-blur-xl p-6 sm:p-8 ring-2 ring-white/25 hover:bg-white/20 hover:ring-white/35 hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-lg">
<div className="text-sm sm:text-base font-semibold text-white mb-3 drop-shadow">Glass</div>
<div className="h-24 sm:h-28 rounded-xl bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-2xl ring-1 ring-white/20"></div>
</div>
<div className="rounded-xl sm:rounded-2xl border-3 border-white/40 bg-black/20 p-6 sm:p-8 hover:border-white/50 hover:bg-black/30 hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-lg">
<div className="text-sm sm:text-base font-semibold text-white mb-3 drop-shadow">Outline</div>
<div className="h-24 sm:h-28 rounded-xl border-3 border-white/50"></div>
</div>
<div className="rounded-xl sm:rounded-2xl bg-white p-6 sm:p-8 hover:bg-white hover:scale-[1.03] transition-all duration-300 cursor-pointer xs:col-span-2 sm:col-span-1 shadow-2xl ring-2 ring-white/30">
<div className="text-sm sm:text-base font-bold text-black mb-3">Solid</div>
<div className="h-24 sm:h-28 rounded-xl bg-indigo-600 shadow-lg shadow-indigo-500/50"></div>
</div>
</div>
</div>
</div>
<div className="min-h-[60vh] sm:min-h-[75vh] lg:min-h-screen flex relative items-center" data-panel="3">
<div className="transition-all duration-700 bg-gradient-to-b from-white/10 to-white/5 w-full border-white/10 border ring-white/10 ring-1 rounded-xl sm:rounded-2xl pt-6 pr-6 pb-6 pl-6 sm:pt-8 sm:pr-8 sm:pb-8 sm:pl-8 shadow-[0_10px_50px_-10px_rgba(0,0,0,0.6)] backdrop-blur hover:border-white/20 hover:shadow-[0_15px_60px_-15px_rgba(0,0,0,0.7)]" data-animate="" data-content="3">
<div className="flex items-start justify-between mb-4 sm:mb-6">
<div className="">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-2">Ready-Made Templates</h3>
<p className="text-xs sm:text-sm text-white/70 max-w-xl">Launch faster with professionally designed templates that adapt to your brand. Each template includes responsive layouts, accessibility features, and production-ready code.</p>
</div>
<div className="inline-flex ring-1 ring-white-500/30 max-w-fit rounded-full pt-1 pr-3 pb-1 pl-3 gap-x-1.5 gap-y-1.5 items-center">
<div className="h-1.5 w-1.5 rounded-full bg-white-400 animate-pulse"></div>
<span className="text-white-400 xl:px-4 text-xs font-small px-4">12 Templates</span>
</div>
</div>
<div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
<div className="group aspect-video bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ee938364-0ff1-4042-8d2d-824055b38b24_3840w.webp)] bg-cover ring-white/10 ring-1 rounded-lg pt-3 pr-3 pb-3 pl-3 sm:pt-4 sm:pr-4 sm:pb-4 sm:pl-4 hover:ring-white/20 hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden">
<div className="text-xs sm:text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-200 relative z-10">Dashboard</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<p className="text-xs text-white/90 mb-2">Analytics &amp; reporting interface with real-time data visualization</p>
<div className="flex gap-1.5 flex-wrap">
<span className="text-[9px] px-2 py-0.5 rounded-full bg-white/20 text-white/90">Charts</span>
<span className="text-[9px] px-2 py-0.5 rounded-full bg-white/20 text-white/90">Tables</span>
<span className="text-[9px] px-2 py-0.5 rounded-full bg-white/20 text-white/90">Metrics</span>
</div>
</div>
</div>
<div className="group aspect-video bg-gradient-to-br from-emerald-500/20 to-sky-500/20 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f826149d-7e8d-4b68-a4fd-cc16fb762142_3840w.jpg)] bg-cover ring-white/10 ring-1 rounded-lg pt-3 pr-3 pb-3 pl-3 sm:pt-4 sm:pr-4 sm:pb-4 sm:pl-4 hover:ring-white/20 hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden">
<div className="text-xs sm:text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-200 relative z-10">Landing Page</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<p className="text-xs text-white/90 mb-2">High-converting landing page with hero sections and CTAs</p>
<div className="flex gap-1.5 flex-wrap">
<span className="text-[9px] px-2 py-0.5 rounded-full bg-white/20 text-white/90">Hero</span>
<span className="text-[9px] px-2 py-0.5 rounded-full bg-white/20 text-white/90">Features</span>
<span className="text-[9px] px-2 py-0.5 rounded-full bg-white/20 text-white/90">CTA</span>
</div>
</div>
</div>
<div className="group aspect-video bg-gradient-to-br from-amber-500/20 to-rose-500/20 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/564dc5fb-0d4e-42cb-9136-c3b630185122_3840w.webp)] bg-cover ring-white/10 ring-1 rounded-lg pt-3 pr-3 pb-3 pl-3 sm:pt-4 sm:pr-4 sm:pb-4 sm:pl-4 hover:ring-white/20 hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden">
<div className="text-xs sm:text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-200 relative z-10">E-commerce</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<p className="text-xs text-white/90 mb-2">Complete store with product grids, cart, and checkout flow</p>
<div className="flex gap-1.5 flex-wrap">
<span className="text-[9px] px-2 py-0.5 rounded-full bg-white/20 text-white/90">Products</span>
<span className="text-[9px] px-2 py-0.5 rounded-full bg-white/20 text-white/90">Cart</span>
<span className="text-[9px] px-2 py-0.5 rounded-full bg-white/20 text-white/90">Checkout</span>
</div>
</div>
</div>
<div className="group aspect-video ring-1 ring-white/10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/78877756-9e45-410e-b630-78c3dfb8e94c_3840w.jpg)] bg-cover rounded-lg pt-3 pr-3 pb-3 pl-3 sm:pt-4 sm:pr-4 sm:pb-4 sm:pl-4 hover:ring-white/20 hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden">
<div className="text-xs sm:text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-200 relative z-10">Portfolio</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<p className="text-xs text-white/90 mb-2">Showcase your work with elegant project galleries and case studies</p>
<div className="flex gap-1.5 flex-wrap">
<span className="text-[9px] px-2 py-0.5 rounded-full bg-white/20 text-white/90">Gallery</span>
<span className="text-[9px] px-2 py-0.5 rounded-full bg-white/20 text-white/90">Projects</span>
<span className="text-[9px] px-2 py-0.5 rounded-full bg-white/20 text-white/90">Bio</span>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
<div className="rounded-lg bg-black/20 p-3 sm:p-4 ring-1 ring-white/10 hover:bg-black/30 hover:ring-white/20 transition-all duration-200">
<div className="flex items-center gap-2 mb-1.5">
<svg className="text-blue-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>
<span className="text-xs sm:text-sm font-medium text-white/90">Responsive</span>
</div>
<p className="text-[10px] sm:text-xs text-white/60">Mobile-first design that adapts perfectly to any screen size</p>
</div>
<div className="rounded-lg bg-black/20 p-3 sm:p-4 ring-1 ring-white/10 hover:bg-black/30 hover:ring-white/20 transition-all duration-200">
<div className="flex items-center gap-2 mb-1.5">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
<span className="text-xs sm:text-sm font-medium text-white/90">Production Ready</span>
</div>
<p className="text-[10px] sm:text-xs text-white/60">Clean, optimized code with best practices built-in</p>
</div>
<div className="rounded-lg bg-black/20 p-3 sm:p-4 ring-1 ring-white/10 hover:bg-black/30 hover:ring-white/20 transition-all duration-200">
<div className="flex items-center gap-2 mb-1.5">
<svg className="text-purple-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 6V2H8"></path><path d="m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"></path><path d="M2 12h2"></path><path d="M9 11v2"></path><path d="M15 11v2"></path><path d="M20 12h2"></path></svg>
<span className="text-xs sm:text-sm font-medium text-white/90">Accessible</span>
</div>
<p className="text-[10px] sm:text-xs text-white/60">WCAG compliant with full keyboard and screen reader support</p>
</div>
</div>
<div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white ring-1 ring-white/20 transition-all duration-200 hover:scale-[1.02] hover:ring-white/30">
                Browse All Templates
                <svg className="h-4 w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="px-4 sm:px-6 lg:px-8 max-w-7xl mt-24 sm:mt-32 mr-auto ml-auto pr-4 pl-4">
<div className="relative overflow-visible">
<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute left-1/2 top-0 h-[32rem] w-[36rem] -translate-x-1/2 rounded-full bg-white/10 blur-[140px] opacity-20"></div>
<div className="absolute -left-20 bottom-0 h-[20rem] w-[28rem] rounded-full bg-indigo-500/20 blur-[140px] opacity-30"></div>
<div className="absolute -right-24 top-1/3 h-[22rem] w-[22rem] rounded-full bg-fuchsia-500/20 blur-[120px] opacity-20"></div>
</div>
<div className="text-center mb-8 sm:mb-12" data-animate="">
<div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 shadow-sm backdrop-blur hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer">
<svg className="h-3.5 w-3.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
        Complete Design System
      </div>
<h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white/90 px-4">
        Everything you need to launch
      </h2>
<h3 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white px-4">world‑class products</h3>
<p className="mt-2 sm:mt-3 text-xs sm:text-sm lg:text-base text-white/60 max-w-2xl mx-auto px-4">From foundational elements to complex patterns—discover the building blocks that empower your creative process.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 auto-rows-[140px] sm:auto-rows-[180px] sm:gap-x-4 sm:gap-y-4 gap-x-3 gap-y-3">
<div className="group relative col-span-1 sm:col-span-2 lg:col-span-7 row-span-2 lg:row-span-2 rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent ring-1 ring-white/10 backdrop-blur p-4 sm:p-6 overflow-hidden hover:border-white/20 hover:shadow-[0_20px_70px_-20px_rgba(0,0,0,0.8)] transition-all duration-500 cursor-pointer" data-animate="" data-animate-delay="0">
<div className="z-10 flex flex-col h-full relative">
<div className="flex items-start justify-between mb-3 sm:mb-4">
<div className="inline-flex text-[9px] sm:text-[10px] font-medium text-white-300 bg-white-500/20 ring-white/20 ring-1 rounded-md mb-2 pt-1 pr-2 pb-1 pl-2 items-center">
             SYSTEMS
            </div>
<div className="flex items-center gap-1.5 sm:gap-2">
<div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-400 animate-pulse"></div>
<span className="text-[10px] sm:text-xs text-white/60">Live</span>
</div>
</div>
<h3 className="text-base sm:text-xl font-semibold tracking-tight text-white mb-1.5 sm:mb-2">Scalable Foundation</h3>
<p className="text-xs sm:text-sm text-white/70 mb-4 sm:mb-6 max-w-md">Build cohesive design systems with reusable components, unified tokens, and comprehensive guidelines that keep your entire organization in sync.</p>
<div className="mt-auto">
<div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-2 sm:p-3 backdrop-blur hover:bg-white/10 hover:ring-white/20 hover:scale-[1.02] transition-all duration-200 cursor-pointer">
<div className="text-lg sm:text-2xl font-semibold text-white mb-0.5 sm:mb-1">200+</div>
<div className="text-[9px] sm:text-xs text-white/60">Elements</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-2 sm:p-3 backdrop-blur hover:bg-white/10 hover:ring-white/20 hover:scale-[1.02] transition-all duration-200 cursor-pointer">
<div className="text-lg sm:text-2xl font-semibold text-white mb-0.5 sm:mb-1">64</div>
<div className="text-[9px] sm:text-xs text-white/60">Variables</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-2 sm:p-3 backdrop-blur hover:bg-white/10 hover:ring-white/20 hover:scale-[1.02] transition-all duration-200 cursor-pointer">
<div className="text-lg sm:text-2xl font-semibold text-white mb-0.5 sm:mb-1">15</div>
<div className="text-[9px] sm:text-xs text-white/60">Layouts</div>
</div>
</div>
<button className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg bg-white/10 hover:bg-white/15 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white ring-1 ring-white/20 transition-all duration-200 hover:scale-[1.02] hover:ring-white/30">
              View System
              <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
<div className="pointer-events-none absolute inset-0">
<div className="absolute right-0 bottom-0 h-48 sm:h-64 w-48 sm:w-64 rounded-full bg-indigo-500/10 blur-3xl group-hover:bg-indigo-500/20 transition-all duration-500"></div>
<div className="absolute left-0 top-0 h-24 sm:h-32 w-24 sm:w-32 rounded-full bg-fuchsia-500/10 blur-2xl group-hover:bg-fuchsia-500/20 transition-all duration-500"></div>
</div>
</div>
<div className="group relative col-span-1 sm:col-span-1 lg:col-span-5 row-span-1 lg:row-span-1 rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 ring-1 ring-white/10 backdrop-blur p-4 sm:p-5 overflow-hidden hover:border-white/20 hover:from-white/[0.12] transition-all duration-300 cursor-pointer" data-animate="" data-animate-delay="60">
<div className="flex items-start justify-between h-full">
<div className="flex-1">
<div className="inline-flex text-[9px] sm:text-[10px] font-medium text-white-300 bg-white-500/20 ring-white/20 ring-1 rounded-md mb-2 pt-1 pr-2 pb-1 pl-2 items-center">
              AVATARS
            </div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-white/90 mb-1.5 sm:mb-2">Identity System</h3>
<p className="text-[10px] sm:text-xs text-white/70 mb-2 sm:mb-3">Build engaging user profiles with flexible avatar components and presence indicators.</p>
<div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
<div className="flex -space-x-1.5 sm:-space-x-2">
<img alt="" className="w-6 h-6 sm:w-8 sm:h-8 object-cover ring-black/50 ring-2 rounded-full hover:scale-110 hover:z-10 transition-transform duration-200" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8e170226-595e-423d-bef3-9845ff2a7a36_3840w.jpg"/>
<img alt="" className="w-6 h-6 sm:w-8 sm:h-8 object-cover ring-black/50 ring-2 rounded-full hover:scale-110 hover:z-10 transition-transform duration-200" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d3da1789-0f7a-4fbc-b7b6-606f9b85b083_3840w.jpg"/>
<img alt="" className="ring-2 ring-black/50 w-6 h-6 sm:w-8 sm:h-8 object-cover rounded-full hover:scale-110 hover:z-10 transition-transform duration-200" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/68d0e141-c428-45cd-819a-d7123081d736_3840w.jpg"/>
<div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-white/10 ring-2 ring-black/50 flex items-center justify-center text-[10px] sm:text-xs text-white/70 hover:bg-white/20 hover:scale-110 transition-all duration-200 cursor-pointer">+8</div>
</div>
<span className="text-[10px] sm:text-xs text-white/60">Active users</span>
</div>
</div>
<div className="relative ml-2 sm:ml-3 shrink-0">
<div className="ring-1 ring-white/10 overflow-visible flex bg-gradient-to-br from-white/10 to-transparent w-16 h-16 sm:w-20 sm:h-20 rounded-full relative items-center justify-center hover:ring-white/20 hover:scale-110 transition-all duration-300 cursor-pointer">
<img alt="avatar" className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/986db8ed-1c5d-42fb-8c1d-4b3716d2e317_320w.jpg"/>
<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
<span className="absolute h-16 w-16 sm:h-20 sm:w-20 rounded-full ring-1 ring-white/20"></span>
<span className="absolute h-14 w-14 sm:h-16 sm:w-16 rounded-full ring-1 ring-white/10"></span>
</div>
<div className="absolute right-1 bottom-1 sm:right-1.5 sm:bottom-1.5 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-emerald-400 ring-2 ring-black/50"></div>
</div>
</div>
</div>
</div>
<div className="relative col-span-1 sm:col-span-1 lg:col-span-5 row-span-1 lg:row-span-1 rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 ring-1 ring-white/10 backdrop-blur p-4 sm:p-5 overflow-hidden hover:border-white/20 hover:from-white/[0.12] transition-all duration-300 cursor-pointer" data-animate="" data-animate-delay="120">
<div className="flex items-start justify-between mb-2 sm:mb-3">
<div className="">
<div className="inline-flex text-[9px] sm:text-[10px] font-medium text-white-300 bg-white-500/20 ring-white/20 ring-1 rounded-md mb-2 pt-1 pr-2 pb-1 pl-2 items-center">
              CONTROLS
            </div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-white/90">Interactive Elements</h3>
</div>
<svg className="text-white/40 h-4 w-4 sm:h-5 sm:w-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>
<div className="space-y-2 sm:space-y-3">
<div className="flex items-center justify-between rounded-lg bg-black/20 p-2 sm:p-2.5 ring-1 ring-white/10 hover:bg-black/30 hover:ring-white/20 transition-all duration-200 cursor-pointer">
<span className="text-[10px] sm:text-xs text-white/80">Theme</span>
<div className="relative h-4 w-8 sm:h-5 sm:w-10 rounded-full bg-indigo-500/80 ring-1 ring-indigo-400/30 hover:bg-indigo-500 transition-colors duration-200">
<span className="absolute right-0.5 top-0.5 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-white shadow-sm"></span>
</div>
</div>
<div className="flex items-center justify-between rounded-lg bg-black/20 p-2 sm:p-2.5 ring-1 ring-white/10 hover:bg-black/30 hover:ring-white/20 transition-all duration-200 cursor-pointer">
<span className="text-[10px] sm:text-xs text-white/80">Alerts</span>
<div className="relative h-4 w-8 sm:h-5 sm:w-10 rounded-full bg-white/10 ring-1 ring-white/10 hover:bg-white/15 transition-colors duration-200">
<span className="absolute left-0.5 top-0.5 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-white/40"></span>
</div>
</div>
<div className="rounded-lg bg-black/20 p-2 sm:p-2.5 ring-1 ring-white/10 hover:bg-black/30 hover:ring-white/20 transition-all duration-200 cursor-pointer">
<div className="flex items-center justify-between mb-1.5 sm:mb-2">
<span className="text-[10px] sm:text-xs text-white/80">Intensity</span>
<span className="text-[10px] sm:text-xs text-white/60">72%</span>
</div>
<div className="h-1 w-full rounded-full bg-white/10">
<div className="h-1 w-[72%] rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400"></div>
</div>
</div>
</div>
</div>
<div className="col-span-1 sm:col-span-1 lg:col-span-4 row-span-2 lg:row-span-2 overflow-hidden ring-white/10 ring-1 bg-gradient-to-br from-white/10 to-white/5 max-h-fit border-white/10 border rounded-xl sm:rounded-2xl pt-4 pr-4 pb-4 pl-4 sm:pt-5 sm:pr-5 sm:pb-5 sm:pl-5 relative backdrop-blur hover:border-white/20 hover:from-white/[0.12] transition-all duration-300 cursor-pointer" data-animate="" data-animate-delay="180">
<div className="flex flex-col h-full max-h-fit">
<div className="flex items-start justify-between mb-3 sm:mb-4">
<div className="">
<div className="inline-flex text-[9px] sm:text-[10px] font-medium text-white-300 bg-white-500/20 ring-white/20 ring-1 rounded-md mb-2 pt-1 pr-2 pb-1 pl-2 items-center">
                VISUALS
              </div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-white/90">Rich Media</h3>
<p className="text-[10px] sm:text-xs text-white/60 mt-0.5 sm:mt-1">Premium galleries with adaptive layouts</p>
</div>
</div>
<div className="grid grid-cols-3 gap-1.5 sm:gap-2">
<div className="aspect-square rounded-lg overflow-hidden ring-1 ring-white/10 hover:ring-white/20 hover:scale-[1.05] transition-all duration-300 cursor-pointer">
<img alt="thumb" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/07af7f1b-4e89-4d96-9376-19809e8d7798_320w.jpg"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden ring-1 ring-white/10 hover:ring-white/20 hover:scale-[1.05] transition-all duration-300 cursor-pointer">
<img alt="thumb" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8a936bc9-9869-496e-89c2-32bb97b4aea4_320w.jpg"/>
</div>
<div className="aspect-square ring-1 ring-white/10 flex bg-white/5 bg-cover rounded-lg blur-none items-center justify-center hover:ring-white/20 hover:scale-[1.05] hover:bg-white/10 transition-all duration-300 cursor-pointer bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b758b514-4dcf-4403-99ef-56e8a8ac1346_320w.jpg)] bg-center">
<span className="text-[10px] sm:text-xs text-white/70">+32</span>
</div>
</div>
</div>
</div>
<div className="col-span-1 sm:col-span-1 lg:col-span-4 row-span-1 lg:row-span-1 sm:rounded-2xl sm:p-5 hover:border-white/20 hover:from-white/[0.12] transition-all duration-300 cursor-pointer bg-gradient-to-b from-white/10 to-white/5 border-white/10 border ring-white/10 ring-1 rounded-xl pt-4 pr-4 pb-4 pl-4 relative backdrop-blur" data-animate="" data-animate-delay="240">
<div className="inline-flex text-[9px] sm:text-[10px] font-medium text-white-300 bg-white-500/20 ring-white/20 ring-1 rounded-md mb-2 pt-1 pr-2 pb-1 pl-2 items-center">
          DEVELOPER
        </div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-white/90 mb-1.5 sm:mb-2">Framework Ready</h3>
<p className="text-[10px] sm:text-xs text-white/70 mb-3 sm:mb-4">Production code with type safety and complete API documentation</p>
<div className="ring-white/10 ring-1 bg-black/80 border-white/10 border rounded-lg pt-2.5 pr-2.5 pb-2.5 pl-2.5 sm:pt-3 sm:pr-3 sm:pb-3 sm:pl-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-xl hover:bg-black/30 hover:ring-white/20 transition-all duration-200">
<div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
<div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-red-400"></div>
<div className="h-1.5 w-1.5 sm:h-2 sm:w-2 bg-yellow-400 rounded-full"></div>
<div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-400"></div>
<span className="text-[9px] sm:text-[10px] text-white/50 ml-auto">card.tsx</span>
</div>
<pre className="text-[9px] sm:text-[10px] text-white/70 leading-relaxed overflow-x-auto"><code className="block overflow-hidden" style={{height: '120px', position: 'relative'}}>
<style>
@keyframes verticalScroll {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}
</style>
<div style={{animation: 'verticalScroll 12s linear infinite'}}>
<div style={{paddingBottom: '1rem'}}>
<span className="text-purple-400">import</span> <span className="text-white/90">{ Card }</span> <span className="text-purple-400">from</span> <span className="text-emerald-400">'@nexus/ui'</span>

<span className="text-blue-400">export</span> <span className="text-purple-400">function</span> <span className="text-yellow-400">Profile</span><span>() {</span>
  <span className="text-purple-400">return</span> <span className="text-white/70">&lt;</span><span className="text-blue-400">Card</span><span className="text-white/70">&gt;</span><span>Welcome</span><span className="text-white/70">&lt;/</span><span className="text-blue-400">Card</span><span className="text-white/70">&gt;</span>
<span>}</span>
</div>
<div style={{paddingBottom: '1rem'}}>
<span className="text-purple-400">import</span> <span className="text-white/90">{ Button }</span> <span className="text-purple-400">from</span> <span className="text-emerald-400">'@nexus/ui'</span>

<span className="text-blue-400">export</span> <span className="text-purple-400">function</span> <span className="text-yellow-400">App</span><span>() {</span>
  <span className="text-purple-400">return</span> <span className="text-white/70">&lt;</span><span className="text-blue-400">Button</span><span className="text-white/70">&gt;</span><span>Click me</span><span className="text-white/70">&lt;/</span><span className="text-blue-400">Button</span><span className="text-white/70">&gt;</span>
<span>}</span>
</div>
</div>
</code></pre>
</div>
</div>
<div className="relative col-span-1 sm:col-span-1 lg:col-span-4 row-span-1 lg:row-span-1 rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 ring-1 ring-white/10 backdrop-blur p-4 sm:p-5 hover:border-white/20 hover:from-white/[0.12] transition-all duration-300 cursor-pointer" data-animate="" data-animate-delay="300">
<div className="flex items-start justify-between mb-3 sm:mb-4">
<div className="">
<div className="inline-flex text-[9px] sm:text-[10px] font-medium text-white-300 bg-white-500/20 ring-white/20 ring-1 rounded-md mb-2 pt-1 pr-2 pb-1 pl-2 items-center">
              SPEED
            </div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-white/90">Blazing Fast</h3>
</div>
<div className="flex items-center gap-1">
<div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/30 flex items-center justify-center hover:bg-emerald-500/30 hover:scale-110 transition-all duration-200">
<svg className="text-emerald-400 h-3 w-3 sm:h-3.5 sm:w-3.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-2 sm:gap-3">
<div className="rounded-lg bg-black/20 p-2.5 sm:p-3 ring-1 ring-white/10 hover:bg-black/30 hover:ring-white/20 hover:scale-[1.02] transition-all duration-200">
<div className="text-base sm:text-lg font-semibold text-emerald-400 mb-0.5">12KB</div>
<div className="text-[9px] sm:text-[10px] text-white/60">Core Size</div>
</div>
<div className="rounded-lg bg-black/20 p-2.5 sm:p-3 ring-1 ring-white/10 hover:bg-black/30 hover:ring-white/20 hover:scale-[1.02] transition-all duration-200">
<div className="text-base sm:text-lg font-semibold text-sky-400 mb-0.5">100/100</div>
<div className="text-[9px] sm:text-[10px] text-white/60">Performance</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 sm:mt-32 max-w-7xl mt-32 mr-auto ml-auto pr-4 pl-4">
<div className="relative space-y-10">
<div className="sm:mb-16 text-center mb-12" data-animate="">
<h2 className="sm:text-3xl lg:text-4xl text-2xl font-semibold tracking-tight pr-4 pl-4 mb-4 sm:mb-6">Trusted By Leading Teams</h2>
<p className="mt-4 sm:mt-6 text-xs sm:text-sm lg:text-base text-white/70 max-w-3xl mx-auto px-4">At Nexus Design, we're committed to delivering powerful tools that help product teams ship faster and build better. Here's what our community has to say.</p>
</div>
<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
<div className="w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] rounded-full bg-[rgba(60,130,255,0.15)] blur-[120px] sm:blur-[180px]"></div>
</div>
<div className="pointer-events-none absolute inset-0 -z-0 flex items-center justify-center">
<div className="absolute h-[32rem] w-[32rem] rounded-full bg-white/30 blur-[140px] opacity-10"></div>
<div className="absolute h-[28rem] w-[28rem] rounded-full ring-1 ring-white/30 opacity-5"></div>
<div className="absolute h-[24rem] w-[24rem] rounded-full ring-1 ring-white/30 opacity-10"></div>
<div className="absolute h-[20rem] w-[20rem] rounded-full ring-1 ring-white/30 opacity-15"></div>
<div className="absolute h-[16rem] w-[16rem] rounded-full ring-1 ring-white/30 opacity-20"></div>
<div className="absolute h-[12rem] w-[12rem] rounded-full ring-1 ring-white/30 opacity-25"></div>
<div className="absolute h-[8rem] w-[8rem] rounded-full ring-1 ring-white/30 opacity-30"></div>
<div className="absolute h-[4rem] w-[4rem] rounded-full ring-1 ring-white/30 opacity-35"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 relative mt-12 sm:mt-16">
<div className="group sm:rounded-2xl sm:p-8 hover:border-white/30 hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.1)] transition-all duration-300 bg-white/5 backdrop-blur-md border-white/20 border ring-white/20 ring-1 rounded-xl pt-6 pr-6 pb-6 pl-6" data-animate="" data-animate-delay="0">
<div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
<img alt="Testimonial" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-white/30 group-hover:ring-white/40 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8e170226-595e-423d-bef3-9845ff2a7a36_3840w.jpg"/>
<div className="flex-1">
<h4 className="text-sm sm:text-base font-semibold text-white/90">Sarah Chen</h4>
<p className="text-xs sm:text-sm text-white/60">Lead Designer @ TechFlow</p>
</div>
<div className="flex gap-0.5">
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xs sm:text-sm lg:text-base text-white/70 leading-relaxed">"Nexus Design has transformed how our team approaches UI development. The components are beautifully crafted and incredibly flexible. We've cut our design-to-production time by 60%."</p>
</div>
<div className="group rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 p-6 sm:p-8 ring-1 ring-white/20 hover:border-white/30 hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.1)] transition-all duration-300" data-animate="" data-animate-delay="100">
<div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
<img alt="Testimonial" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-white/30 group-hover:ring-white/40 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d3da1789-0f7a-4fbc-b7b6-606f9b85b083_3840w.jpg"/>
<div className="flex-1">
<h4 className="text-sm sm:text-base font-semibold text-white/90">Marcus Rodriguez</h4>
<p className="text-xs sm:text-sm text-white/60">CTO @ StartupLabs</p>
</div>
<div className="flex gap-0.5">
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xs sm:text-sm lg:text-base text-white/70 leading-relaxed">"The attention to detail is remarkable. From accessibility features to performance optimization, every component feels production-ready. This is what modern design systems should be."</p>
</div>
<div className="group rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 p-6 sm:p-8 ring-1 ring-white/20 hover:border-white/30 hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.1)] transition-all duration-300" data-animate="" data-animate-delay="200">
<div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
<img alt="Testimonial" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-white/30 group-hover:ring-white/40 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/68d0e141-c428-45cd-819a-d7123081d736_3840w.jpg"/>
<div className="flex-1">
<h4 className="text-sm sm:text-base font-semibold text-white/90">Emily Foster</h4>
<p className="text-xs sm:text-sm text-white/60">Product Manager @ CloudScale</p>
</div>
<div className="flex gap-0.5">
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xs sm:text-sm lg:text-base text-white/70 leading-relaxed">"Our team loves the consistency and polish. Documentation is clear, support is responsive, and the templates give us a massive head start on every project."</p>
</div>
<div className="group rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 p-6 sm:p-8 ring-1 ring-white/20 hover:border-white/30 hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.1)] transition-all duration-300" data-animate="" data-animate-delay="300">
<div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
<img alt="Testimonial" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-white/30 group-hover:ring-white/40 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/986db8ed-1c5d-42fb-8c1d-4b3716d2e317_320w.jpg"/>
<div className="flex-1">
<h4 className="text-sm sm:text-base font-semibold text-white/90">David Kim</h4>
<p className="sm:text-sm text-xs text-white/60">Senior Engineer @ DataViz</p>
</div>
<div className="flex gap-0.5">
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 text-amber-400" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<p className="text-xs sm:text-sm lg:text-base text-white/70 leading-relaxed">"TypeScript support is excellent, the component API is intuitive, and the bundle size is impressively small. This has become our go-to library for all new projects."</p>
</div>
</div>
</div>
</section>

<footer className="sm:px-6 sm:mt-32 sm:pb-16 lg:px-8 lg:pt-24 lg:mt-44 max-w-7xl bg-cover mt-32 mr-auto ml-auto pt-24 pr-4 pb-16 pl-4 relative bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e589ffb1-f57b-4065-8694-5d04e4676a8d_1600w.webp)]">
<div className="sm:rounded-3xl sm:p-12 lg:p-16 ring-1 ring-white/10 overflow-hidden bg-gradient-to-br from-white/10 via-white/5 to-transparent border-white/10 border rounded-2xl px-8 py-8 relative backdrop-blur" data-animate="">

<div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0" style={{height: '1px', background: 'linear-gradient(90deg, rgba(124,58,237,0) 0%, rgba(167,139,250,0.9) 50%, rgba(124,58,237,0) 100%)', borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px', opacity: '0.7', filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.35))'}}>
</div>
<div className="relative z-10 text-center max-w-3xl mx-auto">
<h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tight text-white mb-3 sm:mb-4">Ready to build something <span className="block bg-clip-text font-light text-transparent bg-neutral-50/60">Extraordinary?</span>
</h2>
<p className="text-sm sm:text-base lg:text-lg text-white/70 mb-6 sm:mb-8">Join thousands of teams creating exceptional digital experiences with Nexus Design.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white/15 hover:bg-white/20 border border-white/20 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-white backdrop-blur transition-all duration-200 hover:scale-[1.02] hover:border-white/30">
              Start Free Trial
              <svg className="h-4 w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-white/80 backdrop-blur transition-all duration-200 hover:text-white hover:border-white/20">
              View Documentation
            </button>
</div>
<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-white/60">
<span className="inline-flex items-center gap-1.5 sm:gap-2">
<svg className="h-4 w-4 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
              No credit card required
            </span>
<span className="inline-flex items-center gap-1.5 sm:gap-2">
<svg className="h-4 w-4 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
              14-day free trial
            </span>
<span className="inline-flex items-center gap-1.5 sm:gap-2">
<svg className="h-4 w-4 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Cancel anytime
            </span>
</div>
</div>
</div>
<div className="sm:mt-12 flex flex-col sm:flex-row gap-4 sm:text-sm text-xs text-white/50 border-white/10 border-t mt-12 pt-8 gap-x-4 gap-y-4 items-center justify-between">
<div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
<p className="">© 2024 Nexus Design. All rights reserved.</p>
<div className="hidden sm:flex items-center gap-2 text-[10px] text-white/40">
<span className="inline-flex items-center gap-1">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        10k+ users
      </span>
<span className="text-white/20">•</span>
<span className="inline-flex items-center gap-1">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        Made with care
      </span>
</div>
</div>
<div className="flex items-center gap-4 sm:gap-6">
<a className="hover:text-white transition-colors duration-200" href="#">Privacy</a>
<a className="hover:text-white transition-colors duration-200" href="#">Terms</a>
<a className="hover:text-white transition-colors duration-200" href="#">Contact</a>
<div className="flex items-center gap-3 ml-4">
<a aria-label="Twitter" className="hover:text-white transition-colors duration-200" href="https://twitter.com" rel="noopener noreferrer" target="_blank">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="GitHub" className="hover:text-white transition-colors duration-200" href="https://github.com" rel="noopener noreferrer" target="_blank">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a aria-label="LinkedIn" className="hover:text-white transition-colors duration-200" href="https://linkedin.com" rel="noopener noreferrer" target="_blank">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
