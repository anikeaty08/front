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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Inter"', 'sans-serif'],
display: ['"Rock Salt"', 'cursive'],
mono: ['"Inter"', 'monospace'],
},
colors: {
bg: '#050505',
surface: '#0f0f0f',
accent: '#FF3D00',
secondary: '#888888',
},
cursor: {
none: 'none',
},
letterSpacing: {
tighter: '-0.04em',
tightest: '-0.08em',
},
animation: {
'blob': 'blob 15s infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
}
}
}
}
}



      // Clock
      function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { timeZone: 'Europe/Zurich', hour: 'numeric', minute: '2-digit' });
        const el = document.getElementById('nav-time');
        if(el) el.textContent = timeString;
      }
      setInterval(updateTime, 1000);
      updateTime();

      // Theme Toggle
      const toggleBtn = document.getElementById('theme-toggle');
      if(toggleBtn) {
        toggleBtn.addEventListener('click', () => {
          document.body.classList.toggle('light-mode');
        });
      }

      // Lenis Scroll
      const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: 'vertical',
          smooth: true,
      });

      function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
      
      lenis.stop();
      document.body.style.overflow = 'hidden';

      // GSAP setup
      gsap.registerPlugin(ScrollTrigger);
      let mm = gsap.matchMedia();

      function startIntro() {
        const introTl = gsap.timeline();
        introTl.to('#nav-pill', { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out' })
          .from('.project-wrapper', {
              y: 100,
              opacity: 0,
              rotate: 5,
              duration: 1.2,
              stagger: 0.15,
              ease: 'power3.out'
          }, '-=1.0');
      }

      // Loader
      const loaderCount = { val: 0 };
      const loaderText = document.getElementById('loader-count');
      const loaderStatus = document.getElementById('loader-status');
      
      const loaderTl = gsap.timeline({
        onComplete: () => {
          gsap.to('#loader', {
            yPercent: -100,
            duration: 1.2,
            ease: 'power4.inOut',
            onComplete: () => {
              lenis.start();
              document.body.style.overflow = 'auto';
              startIntro();
            }
          })
        }
      });

      loaderTl.to(loaderCount, {
        val: 100,
        duration: 2.0,
        ease: 'power2.inOut',
        onUpdate: () => {
          loaderText.textContent = Math.floor(loaderCount.val);
          if(loaderCount.val > 50) loaderStatus.textContent = "Developing...";
        }
      });
      gsap.fromTo("#loader-status", { opacity: 0.5 }, { opacity: 1, duration: 0.5, repeat: -1, yoyo: true });

      // Navbar Animation
      mm.add("(min-width: 768px)", () => {
          const scrollConfig = { trigger: "body", start: "top top", end: "150px top", scrub: true };
          gsap.to("#nav-pill", {
              scrollTrigger: scrollConfig,
              width: "600px", height: "44px",
              background: "linear-gradient(180deg, rgba(30, 30, 30, 0.8) 0%, rgba(10, 10, 10, 0.9) 100%)",
              backdropFilter: "blur(20px)", borderRadius: "9999px",
              marginTop: "12px", ease: "power2.inOut"
          });
          gsap.to(["#nav-menu-btn", "#nav-logo", "#nav-right-group"], {
              scrollTrigger: scrollConfig, scale: 0.85, ease: "power2.inOut"
          });
      });

      // Mobile Navbar
      mm.add("(max-width: 767px)", () => {
          gsap.to("#nav-pill", {
              scrollTrigger: { trigger: "body", start: "top top", end: "100px top", scrub: true },
              width: "92%", height: "48px",
              backgroundColor: "rgba(20, 20, 22, 0.9)",
              backdropFilter: "blur(20px)", marginTop: "8px", ease: "power2.out"
          });
      });

      // Menu Toggle
      let isMenuOpen = false;
      const menuBtn = document.getElementById('nav-menu-btn');
      const menuOverlay = document.getElementById('menu-overlay');
      const menuText = document.getElementById('menu-text');
      const menuDot = document.getElementById('menu-dot');

      menuBtn.addEventListener('click', toggleMenu);

      function toggleMenu() {
        if (!isMenuOpen) {
          isMenuOpen = true;
          menuOverlay.style.display = 'flex';
          menuText.textContent = 'Close';
          menuDot.style.backgroundColor = '#FF3D00';
          lenis.stop();
          gsap.to(menuOverlay, { opacity: 1, duration: 0.5 });
          gsap.fromTo('.menu-item', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.2 });
          gsap.to('.menu-info', { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.5 });
        } else {
          isMenuOpen = false;
          menuText.textContent = 'Menu';
          menuDot.style.backgroundColor = 'white';
          gsap.to(menuOverlay, { opacity: 0, duration: 0.5, onComplete: () => { menuOverlay.style.display = 'none'; lenis.start(); } });
        }
      }

      // Cursor
      const cursor = document.getElementById('cursor');
      const updateCursorTargets = () => {
          const links = document.querySelectorAll('.nav-link, a, button, .film-card');
          links.forEach(link => {
              link.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
              link.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
          });
      }

      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      if (!isTouch) {
          let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;
          document.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; });
          function animateCursor() {
              const dx = mouseX - cursorX;
              const dy = mouseY - cursorY;
              cursorX += dx * 0.15;
              cursorY += dy * 0.15;
              cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
              requestAnimationFrame(animateCursor);
          }
          animateCursor();
          updateCursorTargets();
      } else {
          cursor.style.display = 'none';
      }

      // MODAL LOGIC
      const projectsData = [
        {
          title: "Geekin' MV",
          subtitle: "Director's Cut • 2023",
          img: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=3270&auto=format&fit=crop",
          desc: "We aimed to visualize the auditory distortion through physical means. Instead of relying solely on post-production VFX, we constructed a rig of shattered mirrors and prisms attached to a motion-control arm. The 'Rock Salt' aesthetic of the typography in the video was physically written on acetate and scanned in, layering the digital with the analog.",
          credits: [
            { role: "Director", name: "Sarah Vae" },
            { role: "DoP", name: "Marcus Lin" },
            { role: "Editor", name: "Cut Masters" },
            { role: "Color", name: "Prism Labs" }
          ]
        },
        {
          title: "Chrome Hearts",
          subtitle: "Brand Campaign • 2024",
          img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop",
          desc: "A study in texture and grain. Shot on 16mm Kodak 500T, processed with a bleach bypass to retain a high-contrast, silver-rich look. The campaign focused on the tactile nature of the jewelry, juxtaposing cold metal against soft skin and rough concrete. Hand-written notes by the designer were overlaid to create a personal diary feel.",
          credits: [
            { role: "Director", name: "Alex Ray" },
            { role: "DoP", name: "Jane Doe" },
            { role: "Set Design", name: "Build It" },
            { role: "Sound", name: "Echo Space" }
          ]
        },
        {
          title: "Night Walk",
          subtitle: "Editorial • 2023",
          img: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2874&auto=format&fit=crop",
          desc: "Tokyo at midnight is a canvas of neon and shadow. Using the Sony Venice 2's dual ISO, we captured the city without supplemental lighting. The goal was to find the 'messy' within the organized chaos of the metropolis. The final edit moves to a erratic beat, mimicking the heartbeat of an insomniac wandering the streets.",
          credits: [
            { role: "Director", name: "K. Tanaka" },
            { role: "Photo", name: "Visuals By K" },
            { role: "Stylist", name: "Mode Noir" },
            { role: "Talent", name: "Yuki M." }
          ]
        }
      ];

      const modal = document.querySelector('#project-modal');
      const modalScroll = document.querySelector('#modal-scroll');
      const modalImg = document.querySelector('#modal-img');
      const modalTitle = document.querySelector('#modal-title');
      const modalSubtitle = document.querySelector('#modal-subtitle');
      const modalDesc = document.querySelector('#modal-desc');
      const modalCredits = document.querySelector('#modal-credits');
      const closeBtn = document.querySelector('#close-modal-btn');

      document.querySelectorAll('.project-wrapper').forEach((wrapper, index) => {
        wrapper.addEventListener('click', (e) => {
          e.preventDefault();
          openProject(index);
        });
      });

      closeBtn.addEventListener('click', closeProject);

      function openProject(index) {
        const data = projectsData[index];
        if(!data) return;

        // Populate Data
        modalImg.src = data.img;
        modalTitle.textContent = data.title;
        modalSubtitle.textContent = data.subtitle;
        modalDesc.textContent = data.desc;
        modalCredits.innerHTML = data.credits.map(c => `
          <div class="flex justify-between items-center py-4 border-b border-white/10 group hover:bg-white/5 transition-colors px-2">
            <span class="text-secondary text-xs uppercase tracking-widest font-sans">${c.role}</span>
            <span class="text-white font-display text-lg tracking-wide">${c.name}</span>
          </div>
        `).join('');

        // Stop main scroll
        lenis.stop();
        
        // Show Modal (Reset CSS)
        gsap.set(modal, { y: '100%' });
        modal.style.display = 'block'; // Change from flex to block for absolute children
        
        // Animate In
        gsap.to(modal, { y: '0%', duration: 0.8, ease: 'power3.inOut' });
        
        // Content Stagger
        gsap.fromTo([modalTitle, modalSubtitle, '#modal-content'], 
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 0.4, stagger: 0.1, ease: 'power3.out' }
        );
        
        // Reset scroll position
        modalScroll.scrollTop = 0;
      }

      function closeProject() {
        gsap.to(modal, {
          y: '100%',
          duration: 0.7,
          ease: 'power3.inOut',
          onComplete: () => {
            modal.style.display = 'none';
            lenis.start();
          }
        });
      }
    
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
      

<div className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center text-white" id="loader" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0%, -100%) translate(0px, -947px)'}}>
<div className="noise-overlay opacity-20"></div>
<div className="relative z-10 flex items-start overflow-hidden leading-none -rotate-2">
<span className="font-display text-[12vw] md:text-[8vw] tracking-tighter tabular-nums block text-[#FF3D00]" id="loader-count">100</span>
<span className="font-display text-[4vw] md:text-[3vw] tracking-tighter mt-[2vw] text-[#FF3D00]">%</span>
</div>
<div className="absolute bottom-12 left-0 w-full px-8 flex justify-between items-end text-xs font-sans font-medium uppercase tracking-widest text-white/50">
<div className="flex flex-col gap-1">
<span>Loading Assets</span>
<span id="loader-status" style={{opacity: '0.9568'}}>Developing...</span>
</div>
<div>
<span>Distortion ©2024</span>
</div>
</div>
</div><svg className="hidden">
<defs>
<filter id="warpFilter">
<feturbulence basefrequency="0.005" numoctaves="2" result="noise" seed="2" type="fractalNoise"></feturbulence>
<fedisplacementmap in="SourceGraphic" in2="noise" scale="100" xchannelselector="R" ychannelselector="G"></fedisplacementmap>
</filter>
</defs>
</svg>

<div className="fixed inset-0 overflow-hidden pointer-events-none z-0" style={{filter: 'url(#warpFilter)', transform: 'scale(1.1)'}}>
<div className="orb w-[50vw] h-[50vw] bg-[#FF3D00] top-[-20%] left-[-10%] opacity-[0.08] animate-blob rounded-full absolute filter blur-[100px]"></div>
<div className="orb w-[60vw] h-[60vw] bg-white bottom-[-10%] right-[-10%] opacity-[0.05] animate-blob rounded-full absolute filter blur-[100px]" style={{animationDelay: '-5s'}}></div>
</div>

<div className="custom-cursor" id="cursor" style={{transform: 'translate(0px, 0px) translate(-50%, -50%)'}}></div>

<header className="fixed top-0 left-0 w-full z-50 pointer-events-none flex justify-center pt-8 px-4 md:px-6">
<div className="pointer-events-auto opacity-0 translate-y-[-20px] w-full h-20 rounded-full flex items-center justify-between px-8 relative overflow-hidden group origin-top will-change-transform z-50" id="nav-pill" style={{background: 'rgba(255, 255, 255, 0.01)', backdropFilter: 'blur(0px)', border: '1px solid rgba(255, 255, 255, 0)', marginTop: '0px', borderRadius: '9999px', height: '80px', width: '1392px', translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>

<div className="flex items-center z-10 w-[160px] h-full">
<button className="nav-link text-white hover:text-white/80 text-[16px] font-sans font-medium transition-colors duration-300 origin-left whitespace-nowrap flex items-center gap-2 group-hover:text-[#FF3D00]" id="nav-menu-btn" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>
<div className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-[#FF3D00] transition-colors" id="menu-dot"></div>
<span className="translate-y-[1px]" id="menu-text">Menu</span>
</button>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 nav-link cursor-pointer h-full flex items-center justify-center">
<h1 className="antialiased origin-center whitespace-nowrap text-xl font-extrabold text-white tracking-tight font-display pt-2" id="nav-logo" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>
            DISTORTION
          </h1>
</div>

<div className="flex items-center justify-end gap-6 z-10 text-white w-[160px] h-full origin-right" id="nav-right-group" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>
<div className="hidden md:flex items-center gap-2 text-[14px] font-sans font-normal tracking-wide whitespace-nowrap" id="nav-meta">
<span>ZHR</span>
<span className="tabular-nums" id="nav-time">9:42 PM</span>
</div>
<div className="flex items-center gap-4 h-full" id="nav-icons">
<button className="nav-link hover:text-white/70 transition-colors duration-300 flex items-center justify-center p-1 rounded-full nav-icon-btn" id="theme-toggle">
<iconify-icon height="18" icon="lucide:moon" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<div className="fixed inset-0 z-40 bg-[#050505] hidden flex-col justify-center items-center overflow-hidden" id="menu-overlay">
<div className="absolute inset-0 opacity-20 pointer-events-none">
<div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-[#FF3D00] blur-[150px] rounded-full"></div>
</div>
<div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row w-full h-full pt-32 pb-12 relative z-10">
<nav className="flex-1 flex flex-col justify-center items-start gap-4 md:gap-6">
<a className="menu-item nav-link group block overflow-hidden" href="#" onclick="toggleMenu()">
<div className="menu-link-hover font-sans font-semibold text-[10vw] md:text-[5vw] leading-[1] tracking-tight text-white uppercase" data-text="Index">
<span>Index</span>
</div>
</a>
<a className="menu-item nav-link group block overflow-hidden" href="#" onclick="toggleMenu()">
<div className="menu-link-hover font-sans font-semibold text-[10vw] md:text-[5vw] leading-[1] tracking-tight text-white uppercase" data-text="Work">
<span>Work</span>
</div>
</a>
<a className="menu-item nav-link group block overflow-hidden" href="#" onclick="toggleMenu()">
<div className="menu-link-hover font-sans font-semibold text-[10vw] md:text-[5vw] leading-[1] tracking-tight text-white uppercase" data-text="Studio">
<span>Studio</span>
</div>
</a>
<a className="menu-item nav-link group block overflow-hidden" href="#" onclick="toggleMenu()">
<div className="menu-link-hover font-sans font-semibold text-[10vw] md:text-[5vw] leading-[1] tracking-tight text-white uppercase" data-text="Contact">
<span>Contact</span>
</div>
</a>
</nav>
<div className="md:w-1/3 flex flex-col justify-end items-start md:items-end gap-12 mt-12 md:mt-0">
<div className="flex flex-col gap-4 text-left md:text-right menu-info opacity-0 translate-y-4">
<span className="text-secondary text-xs uppercase tracking-widest font-sans font-medium">Socials</span>
<div className="flex flex-col gap-2 text-xl font-display text-white">
<a className="nav-link hover:text-[#FF3D00] transition-colors w-max md:ml-auto" href="#">Instagram</a>
<a className="nav-link hover:text-[#FF3D00] transition-colors w-max md:ml-auto" href="#">Twitter / X</a>
</div>
</div>
</div>
</div>
</div>

<main className="relative z-10 w-full flex flex-col items-center pb-32">
<div className="h-[30vh] md:h-[40vh] w-full relative flex flex-col items-center justify-center">
</div>

<div className="project-wrapper group relative w-full flex flex-col items-center mb-[15vh]" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<div className="relative w-[85vw] md:w-[60vw] p-4 bg-[#0a0a0a] film-card rounded-sm -rotate-2 hover:rotate-0 transition-transform duration-500 ease-out cursor-pointer nav-link">

<div className="relative w-full aspect-[16/9] overflow-hidden bg-[#111] mb-4 border border-white/5">
<div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img className="w-full h-full object-cover grayscale-[30%] contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute bottom-4 left-6 z-20 pointer-events-none mix-blend-difference">
<h2 className="font-display text-3xl md:text-5xl text-white transform -rotate-2 group-hover:scale-110 transition-transform duration-300 origin-bottom-left">Geekin' MV</h2>
</div>
</div>

<div className="flex justify-between items-end px-2 pb-1">
<div className="flex flex-col gap-1">
<span className="font-sans text-xs uppercase tracking-[0.2em] text-gray-400">Director's Cut</span>
<span className="font-sans text-[10px] text-gray-500">Sony Venice 2 • Anamorphic</span>
</div>
<div className="flex items-center gap-2">
<span className="font-display text-xl text-[#FF3D00]">01</span>
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" icon="lucide:arrow-up-right"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="project-wrapper group relative w-full flex flex-col items-center mb-[15vh]" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<div className="relative w-[85vw] md:w-[60vw] p-4 bg-[#0a0a0a] film-card rounded-sm rotate-1 hover:rotate-0 transition-transform duration-500 ease-out cursor-pointer nav-link">
<div className="relative w-full aspect-[16/9] overflow-hidden bg-[#111] mb-4 border border-white/5">
<div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img className="w-full h-full object-cover grayscale-[30%] contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&amp;w=2550&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-6 z-20 pointer-events-none mix-blend-difference">
<h2 className="font-display text-3xl md:text-5xl text-white transform rotate-1 group-hover:scale-110 transition-transform duration-300 origin-bottom-left">Chrome Hearts</h2>
</div>
</div>
<div className="flex justify-between items-end px-2 pb-1">
<div className="flex flex-col gap-1">
<span className="font-sans text-xs uppercase tracking-[0.2em] text-gray-400">Campaign</span>
<span className="font-sans text-[10px] text-gray-500">16mm Film • Kodak 500T</span>
</div>
<div className="flex items-center gap-2">
<span className="font-display text-xl text-[#FF3D00]">02</span>
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" icon="lucide:arrow-up-right"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="project-wrapper group relative w-full flex flex-col items-center mb-[15vh]" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<div className="relative w-[85vw] md:w-[60vw] p-4 bg-[#0a0a0a] film-card rounded-sm -rotate-1 hover:rotate-0 transition-transform duration-500 ease-out cursor-pointer nav-link">
<div className="relative w-full aspect-[16/9] overflow-hidden bg-[#111] mb-4 border border-white/5">
<div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img className="w-full h-full object-cover object-top grayscale-[30%] contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-6 z-20 pointer-events-none mix-blend-difference">
<h2 className="font-display text-3xl md:text-5xl text-white transform -rotate-1 group-hover:scale-110 transition-transform duration-300 origin-bottom-left">Night Walk</h2>
</div>
</div>
<div className="flex justify-between items-end px-2 pb-1">
<div className="flex flex-col gap-1">
<span className="font-sans text-xs uppercase tracking-[0.2em] text-gray-400">Editorial</span>
<span className="font-sans text-[10px] text-gray-500">Digital • Natural Light</span>
</div>
<div className="flex items-center gap-2">
<span className="font-display text-xl text-[#FF3D00]">03</span>
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" icon="lucide:arrow-up-right"></iconify-icon>
</div>
</div>
</div>
</div>
</main>

<footer className="relative z-10 w-full px-6 md:px-12 pb-12 pt-24 mt-0 border-t border-white/10">
<div className="flex flex-col gap-8 mb-32 items-center text-center">
<h2 className="font-display text-[7vw] leading-[1.2] text-white hover:text-white/50 transition-all duration-500 cursor-pointer nav-link rotate-2">
          We make<br/><span className="text-[#FF3D00]">Art.</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 text-xs tracking-widest uppercase font-sans border-t border-white/10 pt-8">
<div className="flex flex-col gap-4">
<span className="text-secondary">Contact</span>
<a className="text-white hover:text-[#FF3D00] transition-colors nav-link flex items-center gap-2 w-max font-semibold" href="mailto:contact@distortion.com">
            contact@distortion.com
          </a>
</div>
<div className="flex flex-col gap-4">
<span className="text-secondary">Socials</span>
<div className="flex flex-col gap-2 text-white">
<a className="hover:text-[#FF3D00] transition-colors nav-link w-max font-semibold" href="#">Instagram</a>
<a className="hover:text-[#FF3D00] transition-colors nav-link w-max font-semibold" href="#">Twitter / X</a>
</div>
</div>
<div className="flex flex-col gap-4">
<span className="text-secondary">Studio</span>
<span className="text-white font-semibold">Zurich, CH</span>
</div>
<div className="flex flex-col justify-end md:items-end gap-4">
<span className="text-secondary">© 2024 Distortion</span>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] w-full h-full bg-[#050505] translate-y-[100%] will-change-transform" id="project-modal">

<div className="fixed top-0 left-0 w-full p-6 md:p-8 flex justify-between z-[110] pointer-events-none">
<span className="text-white/50 font-display text-xl rotate-3 pointer-events-auto">Project View</span>
<button className="group flex items-center gap-2 text-white/70 hover:text-[#FF3D00] transition-colors cursor-pointer pointer-events-auto bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10" id="close-modal-btn">
<span className="uppercase tracking-widest text-xs font-sans font-semibold">Close</span>
<iconify-icon className="group-hover:rotate-90 transition-transform duration-300" icon="lucide:x" width="16"></iconify-icon>
</button>
</div>

<div className="absolute inset-0 w-full h-full overflow-y-auto overscroll-contain z-[105] bg-[#050505]" id="modal-scroll">

<div className="w-full h-[80vh] relative">
<img className="w-full h-full object-cover" id="modal-img" src=""/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90"></div>

<div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-12">
<div className="overflow-hidden">
<h1 className="font-display text-5xl md:text-8xl text-white transform -rotate-1 origin-bottom-left drop-shadow-2xl" id="modal-title"></h1>
</div>
<div className="mt-4 flex gap-4 items-center">
<span className="px-3 py-1 border border-white/30 rounded-full text-xs font-sans uppercase tracking-widest text-white/80 backdrop-blur-sm" id="modal-subtitle"></span>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 md:grid-cols-12 gap-16 text-white" id="modal-content">

<div className="md:col-span-7 flex flex-col gap-8">
<h3 className="font-display text-3xl text-[#FF3D00] -rotate-1">The Story</h3>
<p className="font-sans text-lg md:text-xl leading-relaxed text-gray-300 font-light" id="modal-desc"></p>

<div className="grid grid-cols-2 gap-4 mt-12 w-full">
<div className="aspect-[4/5] bg-[#111] rounded border border-white/10"></div>
<div className="aspect-[4/5] bg-[#111] rounded border border-white/10 mt-12"></div>
</div>
</div>

<div className="md:col-span-5 flex flex-col gap-8 sticky top-24 h-fit">
<h3 className="font-display text-3xl text-white rotate-1">Credits</h3>
<div className="flex flex-col border-t border-white/10" id="modal-credits">

</div>
<div className="mt-12 p-6 border border-white/10 rounded-lg bg-[#0a0a0a]">
<span className="font-display text-xl block mb-2 text-[#FF3D00]">Tech Specs</span>
<ul className="font-sans text-sm text-gray-400 space-y-2 font-mono">
<li>Camera: Sony Venice 2</li>
<li>Lens: Cookie S4/i</li>
<li>Grade: DaVinci Resolve</li>
<li>Output: 4K DCP</li>
</ul>
</div>
</div>
</div>

<div className="w-full py-32 flex justify-center border-t border-white/10 mt-12 bg-[#050505]">
<button className="group relative" onclick="closeProject()">
<span className="font-display text-4xl md:text-6xl text-white group-hover:text-[#FF3D00] transition-colors">Next Project</span>
<div className="h-1 w-0 bg-[#FF3D00] group-hover:w-full transition-all duration-300 mt-2"></div>
</button>
</div>
</div>
</div>



    </>
  );
}
