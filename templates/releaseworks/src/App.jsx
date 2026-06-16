import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
colors: {
obsidian: '#1A1A1A',
'slate-deep': '#2C3E50',
ember: '#B8441A',
'gold-rule': '#C9A84C',
stone: '#7F8C8D',
parchment: '#F5F1EB',
},
fontFamily: {
display: ['"Bebas Neue"', 'sans-serif'],
heading: ['Montserrat', 'sans-serif'],
body: ['"Source Serif 4"', 'serif'],
},
transitionTimingFunction: {
'btn': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
}
},
},
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    document.addEventListener("DOMContentLoaded", () => {
      gsap.registerPlugin(ScrollTrigger);

      // --- NAVBAR STATE ---
      const navbar = document.getElementById('navbar');
      const navLinks = document.querySelectorAll('.nav-links a');
      const hero = document.getElementById('hero');

      window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight * 0.1) {
          navbar.classList.add('bg-obsidian/85', 'backdrop-blur-xl', 'border-gold-rule/15', 'shadow-[0_4px_24px_rgba(0,0,0,0.3)]');
          navLinks.forEach(l => {
            l.classList.remove('text-white/80');
            l.classList.add('text-stone');
          });
        } else {
          navbar.classList.remove('bg-obsidian/85', 'backdrop-blur-xl', 'border-gold-rule/15', 'shadow-[0_4px_24px_rgba(0,0,0,0.3)]');
          navLinks.forEach(l => {
            l.classList.add('text-white/80');
            l.classList.remove('text-stone');
          });
        }
      });

      // --- MOBILE MENU ---
      const menuBtn = document.getElementById('mobile-menu-btn');
      const closeBtn = document.getElementById('mobile-close-btn');
      const mobileMenu = document.getElementById('mobile-menu');

      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-5');
        mobileMenu.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
      });
      closeBtn.addEventListener('click', () => {
        mobileMenu.classList.add('opacity-0', 'pointer-events-none', '-translate-y-5');
        mobileMenu.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
      });
      document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('opacity-0', 'pointer-events-none', '-translate-y-5');
          mobileMenu.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
        });
      });

      // --- HERO ENTRANCE ---
      const heroTimeline = gsap.timeline();
      heroTimeline.to('.hero-el', {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.1
      });
      heroTimeline.to('.badge-el', {
        x: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power2.out"
      }, "-=0.4");

      // --- GENERAL ENTRANCES ---
      gsap.utils.toArray('.gsap-fade-up').forEach(el => {
        gsap.to(el, {
          scrollTrigger: { trigger: el, start: "top 85%" },
          y: 0, opacity: 1, duration: 0.9, ease: "power3.out"
        });
      });

      gsap.to('.prob-left', {
        scrollTrigger: { trigger: '.prob-left', start: "top 85%" },
        y: 0, opacity: 1, duration: 0.9, ease: "power3.out"
      });
      gsap.to('.prob-right', {
        scrollTrigger: { trigger: '.prob-left', start: "top 80%" },
        x: 0, opacity: 1, duration: 0.9, ease: "power3.out"
      });

      gsap.to('.f-card', {
        scrollTrigger: { trigger: '.feature-cards', start: "top 80%" },
        y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: "power3.out"
      });

      gsap.to('.res-card', {
        scrollTrigger: { trigger: '.res-card', start: "top 80%" },
        y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: "power3.out"
      });
      gsap.to('#res-anchor', {
        scrollTrigger: { trigger: '#res-anchor', start: "top 85%" },
        y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.2
      });

      const founderTl = gsap.timeline({ scrollTrigger: { trigger: '#about', start: "top 75%" }});
      founderTl.to('#founder-img', { x: 0, opacity: 1, duration: 0.9, ease: "power3.out" });
      founderTl.to('.founder-txt', { x: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out" }, "-=0.6");

      const bookTl = gsap.timeline({ scrollTrigger: { trigger: '#book-title', start: "top 80%" }});
      bookTl.fromTo('#book-title span', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.06, ease: "power3.out" });
      bookTl.to('.book-el', { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }, "-=0.2");

      gsap.to('.foot-col', {
        scrollTrigger: { trigger: '#footer', start: "top 90%" },
        y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out"
      });

      // --- CARD 1: MAP LOGIC ---
      const mapNodes = document.querySelectorAll('.map-node');
      const mapLines = document.getElementById('map-lines');
      const mapLabel = document.getElementById('map-label');
      let mapState = 0;
      
      setInterval(() => {
        mapState = (mapState + 1) % 3;
        if(mapState === 0) {
          mapNodes.forEach(n => {
            n.setAttribute('fill', '#B8441A');
            n.classList.add('pulse-dot');
            n.setAttribute('r', '4');
          });
          mapLines.setAttribute('opacity', '0');
          mapLines.style.strokeDashoffset = '100';
          mapLabel.textContent = 'RESTRICTION PATTERN IDENTIFIED';
          mapLabel.classList.replace('text-gold-rule', 'text-ember');
          mapLabel.classList.replace('text-stone', 'text-ember');
        } else if (mapState === 1) {
          mapLabel.textContent = 'STRUCTURAL RELEASE IN PROGRESS';
          mapLabel.classList.replace('text-ember', 'text-gold-rule');
          mapLines.setAttribute('opacity', '1');
          gsap.to(mapLines, { strokeDashoffset: 0, duration: 0.8 });
        } else {
          mapNodes.forEach(n => {
            n.setAttribute('fill', 'rgba(201,168,76,0.6)');
            n.classList.remove('pulse-dot');
            n.setAttribute('r', '2');
          });
          mapLabel.textContent = 'MOVEMENT SYSTEM RESTORED';
          mapLabel.classList.replace('text-gold-rule', 'text-stone');
          mapLines.setAttribute('opacity', '0.3');
        }
      }, 3500);

      // --- CARD 2: TYPEWRITER LOGIC ---
      const msgs = [
        "Week 1 — Initial assessment complete. Thoracic restriction pattern identified. Client reports baseline pain level 7/10...",
        "Week 3 — First structural release session. Client reports shoulder rotation improved. Standing taller. Pain 5/10...",
        "Week 5 — Movement repatterning underway. Client sleeping through the night for first time in 2 years...",
        "Week 8 — Milestone: full cervical rotation restored. Client returned to golf. Pain 2/10...",
        "Week 11 — Protocol nearing completion. Self-care practice established. Client reports confidence in own body returning...",
        "Week 13 — Program complete. Pain 0–1/10. Self-sufficient practice in place. Outcome: restored."
      ];
      let msgIdx = 0;
      let charIdx = 0;
      const twContainer = document.getElementById('typewriter-container');
      const twText = document.getElementById('typewriter-text');
      
      function typeChar() {
        if (charIdx < msgs[msgIdx].length) {
          twText.textContent += msgs[msgIdx].charAt(charIdx);
          charIdx++;
          setTimeout(typeChar, 28);
        } else {
          setTimeout(() => {
            gsap.to(twContainer, { opacity: 0, duration: 0.3, onComplete: () => {
              twText.textContent = "";
              msgIdx = (msgIdx + 1) % msgs.length;
              charIdx = 0;
              gsap.to(twContainer, { opacity: 1, duration: 0.3, onComplete: () => setTimeout(typeChar, 100) });
            }});
          }, 2200);
        }
      }
      setTimeout(typeChar, 1000); // start slightly delayed

      // --- CARD 3: PROTOCOL GRID LOGIC ---
      const gridCells = document.querySelectorAll('.grid-cell');
      const cursor = document.getElementById('grid-cursor');
      const savePill = document.getElementById('save-pill');
      const progBar = document.getElementById('prog-bar');
      const pIndices = [0, 2, 5]; // Mon, Wed, Sat
      
      function runGridCycle() {
        const tl = gsap.timeline();
        // Dim all
        tl.to(gridCells, { opacity: 0.6, duration: 0.3 }, 0);
        
        // Cursor enter
        tl.to(cursor, { opacity: 1, duration: 0.2 }, 0.3);
        
        // Move through P days
        pIndices.forEach((idx, i) => {
          const target = gridCells[idx];
          const rect = target.getBoundingClientRect();
          const parentRect = target.parentElement.getBoundingClientRect();
          const dx = (rect.left - parentRect.left) + 20; // approx center relative to grid
          
          tl.to(cursor, { x: dx, duration: 0.4, ease: "power2.inOut" }, 0.5 + (i * 0.6));
          tl.to(target.querySelector('div'), { scale: 1.1, duration: 0.15 }, 0.9 + (i * 0.6));
          tl.to(target.querySelector('.cell-pulse'), { opacity: 1, scale: 1.8, duration: 0.4, ease: "power2.out" }, 0.9 + (i * 0.6));
          tl.to(target.querySelector('.cell-pulse'), { opacity: 0, duration: 0.1 }, 1.3 + (i * 0.6));
          tl.to(target.querySelector('div'), { scale: 1, duration: 0.15 }, 1.3 + (i * 0.6));
        });

        // Pill action
        tl.to(cursor, { opacity: 0, duration: 0.2 }, 2.5);
        tl.to(savePill, { opacity: 1, backgroundColor: '#B8441A', text: "✓ SAVED", duration: 0.3 }, 3.0);
        
        // Reset opacity
        tl.to(gridCells, { opacity: 1, duration: 0.5, stagger: 0.05 }, 3.5);
        
        // Progress bar
        tl.to(progBar, { width: "54%", duration: 1.0, ease: "power2.out" }, 5.0);
        
        // Reset for loop
        tl.to(savePill, { opacity: 0, text: "SAVE PROTOCOL", duration: 0.2 }, 6.0);
        tl.to(progBar, { width: "0%", duration: 0 }, 6.0);
        tl.set(cursor, { x: 0 }, 6.0);
      }
      runGridCycle();
      setInterval(runGridCycle, 6200);

      // --- PHILOSOPHY SECTION LOGIC ---
      gsap.to('#philosophy-bg', {
        yPercent: 20,
        ease: "none",
        scrollTrigger: { trigger: "#philosophy-bg", start: "top bottom", end: "bottom top", scrub: 1 }
      });
      
      const p1Text = "Most approaches to pain focus on where it hurts — treating the symptom with the assumption that suppression equals resolution. Stretching the tight spot. Adjusting the misaligned joint. Medicating the inflamed tissue. Repeat.";
      const p1Container = document.getElementById('phil-statement-1');
      p1Text.split(' ').forEach(word => {
        let s = document.createElement('span');
        s.textContent = word;
        s.className = "inline-block opacity-0 translate-y-4";
        p1Container.appendChild(s);
      });
      
      const pTl = gsap.timeline({ scrollTrigger: { trigger: p1Container, start: "top 80%" }});
      pTl.to('#phil-statement-1 span', { y: 0, opacity: 0.7, duration: 0.5, stagger: 0.04, ease: "power2.out" });
      pTl.fromTo('#phil-statement-2', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "+=0.4");
      pTl.fromTo('#phil-system', { scale: 0.97 }, { scale: 1.04, duration: 0.9, ease: "power3.out" }, "-=0.3");
      pTl.to('#phil-system', { scale: 1, duration: 0.2 });
      pTl.to('#phil-quote', { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.2");

      // --- STICKY STACK LOGIC ---
      const stickyCards = gsap.utils.toArray('.sticky-card');
      
      stickyCards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          pin: true,
          pinSpacing: false,
          end: "+=100%"
        });

        if (i > 0) {
          gsap.to(stickyCards[i - 1], {
            scale: 0.92,
            filter: "blur(6px)",
            opacity: 0.4,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "top top",
              scrub: 0.5
            }
          });
        }
      });

      // --- SVG ANIMATIONS (Section 5) ---
      
      // Card 1: Web
      const wPaths = document.getElementById('web-paths');
      const wNodes = document.getElementById('web-nodes');
      // Generate some random connected nodes for the web
      const nodesData = [
        {x: 150, y: 30}, {x: 100, y: 80}, {x: 200, y: 80}, {x: 150, y: 130}, 
        {x: 80, y: 160}, {x: 220, y: 160}, {x: 120, y: 220}, {x: 180, y: 220},
        {x: 100, y: 290}, {x: 200, y: 290}, {x: 150, y: 340}
      ];
      nodesData.forEach(n => {
        wNodes.innerHTML += `<circle cx="${n.x}" cy="${n.y}" r="5" fill="#B8441A" opacity="0.8" class="web-n" />`;
      });
      let pathHtml = '';
      for(let i=0; i<nodesData.length-1; i++){
        pathHtml += `<path d="M${nodesData[i].x},${nodesData[i].y} Q${150},${(nodesData[i].y+nodesData[i+1].y)/2} ${nodesData[i+1].x},${nodesData[i+1].y}" class="web-p" />`;
      }
      wPaths.innerHTML = pathHtml;

      const webTl = gsap.timeline({ repeat: -1 });
      webTl.to('.web-p', { strokeDasharray: 200, strokeDashoffset: 200, duration: 0 }); // setup
      webTl.to('.web-p', { strokeDashoffset: 150, duration: 3, ease: "none" }); // tense
      webTl.to('.web-p', { strokeDashoffset: 0, duration: 1.5, ease: "power2.inOut" }); // release
      webTl.to('.web-n', { fill: "#C9A84C", opacity: 0.7, duration: 1, stagger: 0.1 }, "-=1"); // nodes restore
      webTl.to('.web-p', { opacity: 0.4, duration: 1 }, "-=1");
      webTl.to({}, { duration: 2 }); // hold
      webTl.to('.web-n', { fill: "#B8441A", opacity: 0.8, duration: 0.5 }); // reset
      webTl.to('.web-p', { opacity: 0.2, duration: 0.5 }, "-=0.5");

      // Card 2: ROM
      const romArc = document.getElementById('rom-arc');
      const romMarker = document.getElementById('rom-marker');
      const romDeg = document.getElementById('rom-deg');
      const romBone2 = document.getElementById('rom-bone2');

      const romTl = gsap.timeline({ repeat: -1 });
      romTl.to(romMarker, { opacity: 1, duration: 0 }); // setup
      romTl.to(romArc, { strokeDashoffset: 157 - (157 * 60/180), duration: 0 }); // 60 deg
      romTl.to(romBone2, { rotation: 10, transformOrigin: "150px 180px", duration: 0.1, yoyo: true, repeat: 15 }, 0); // strain
      romTl.to(romMarker, { opacity: 0, scale: 0.5, duration: 1, transformOrigin: "center" }, 1.5); // dissolve
      romTl.to(romArc, { strokeDashoffset: 157 - (157 * 160/180), duration: 2, ease: "power2.inOut" }, 1.5); // sweep
      romTl.to(romBone2, { rotation: 100, transformOrigin: "150px 180px", duration: 2, ease: "power2.inOut" }, 1.5); // bone move
      romTl.to(romArc, { filter: "drop-shadow(0 0 4px #C9A84C)", duration: 0.5 }, 3.5);
      romTl.to(romDeg, { opacity: 1, duration: 0.5 }, 3.5);
      romTl.to({}, { duration: 1.5 }); // hold
      romTl.to([romArc, romBone2, romDeg], { clearProps: "all", duration: 0 }); // reset

      // Card 3: EKG
      const ekgActive = document.getElementById('ekg-active');
      const ekgPath = document.getElementById('ekg-path');
      const ekgLen = ekgActive.getTotalLength();
      
      const ekgTl = gsap.timeline({ repeat: -1 });
      ekgTl.set(ekgActive, { strokeDasharray: ekgLen, strokeDashoffset: ekgLen });
      ekgTl.to(ekgActive, { strokeDashoffset: 0, duration: 2, ease: "power2.inOut" });
      ekgTl.to(ekgPath, { strokeOpacity: 0.15, duration: 0.5 }, "+=1.2");
      ekgTl.to(ekgActive, { filter: "drop-shadow(0 0 8px rgba(184,68,26,0.6))", duration: 0.5 }, "-=0.5");
      ekgTl.to({}, { duration: 1.5 }); // hold
      ekgTl.to([ekgActive, ekgPath], { clearProps: "all", duration: 0 });

    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed h-[4.5rem] transition-all duration-300 ease-in-out flex md:px-12 lg:px-16 text-white w-full z-50 border-transparent border-b pr-6 pl-6 top-0 items-center" id="navbar">
<div className="max-w-7xl mx-auto w-full flex items-center justify-between">
<a className="font-display text-xl tracking-[0.1em] text-white" href="/">RELEASE WORKS</a>
<div className="hidden md:flex items-center gap-8 font-heading font-normal text-sm nav-links transition-colors duration-300">
<a className="hover:text-white hover:-translate-y-[1px] transition-all duration-150" href="#method">The Method</a>
<a className="hover:text-white hover:-translate-y-[1px] transition-all duration-150" href="#results">Results</a>
<a className="hover:text-white hover:-translate-y-[1px] transition-all duration-150" href="#programs">Programs</a>
<a className="hover:text-white hover:-translate-y-[1px] transition-all duration-150" href="#about">About</a>
</div>
<div className="hidden md:block">
<button className="btn-primary px-5 py-2.5 text-sm">
<span className="btn-bg"></span>
<span className="btn-text">Book a Conversation</span>
</button>
</div>
<div className="flex items-center gap-4 md:hidden">
<button className="btn-primary px-3 py-2 text-sm">
<span className="btn-bg"></span>
<span className="btn-text">Book</span>
</button>
<button className="text-white hover:text-stone transition-colors" id="mobile-menu-btn">
<iconify-icon height="1.5rem" icon="solar:hamburger-menu-linear" width="1.5rem"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-obsidian/95 backdrop-blur-2xl z-[60] opacity-0 pointer-events-none transition-all duration-300 flex flex-col items-center justify-center -translate-y-5" id="mobile-menu">
<button className="absolute top-6 right-6 text-white p-2" id="mobile-close-btn">
<iconify-icon height="1.75rem" icon="solar:close-circle-linear" width="1.75rem"></iconify-icon>
</button>
<div className="flex flex-col items-center gap-8 font-display text-3xl text-white tracking-tight w-full px-12 text-center">
<a className="mobile-link w-full pb-6 border-b border-gold-rule/20" href="#method">THE METHOD</a>
<a className="mobile-link w-full pb-6 border-b border-gold-rule/20" href="#results">RESULTS</a>
<a className="mobile-link w-full pb-6 border-b border-gold-rule/20" href="#programs">PROGRAMS</a>
<a className="mobile-link w-full pb-6 border-b border-gold-rule/20" href="#about">ABOUT</a>
</div>
<div className="absolute bottom-10 flex flex-col items-center gap-2">
<p className="font-heading text-sm text-stone tracking-wide">801-557-3030</p>
</div>
</div>

<section className="relative w-full h-[100dvh] bg-obsidian flex flex-col justify-end pb-20 px-6 md:px-12 lg:px-16 overflow-hidden" id="hero">
<img alt="Strong mature man outdoors" className="absolute inset-0 w-full h-full object-cover z-0" loading="eager" src="https://assets.cdn.filesafe.space/NgO2tiqWVq0WMc5f7Usm/media/69d81530a4e6aa34cb59e656.webp"/>
<div className="absolute inset-0 bg-gradient-to-b from-obsidian/55 via-obsidian/75 to-obsidian/95 z-[1]"></div>
<div className="relative z-10 max-w-4xl w-full mx-auto md:ml-8 lg:ml-16">
<div className="hero-el opacity-0 translate-y-5 mb-3">
<span className="font-heading font-semibold text-[0.6875rem] text-ember tracking-[0.16em] uppercase">THE RELEASE WORKS METHOD OF HEALING™</span>
<span className="block w-10 h-px bg-gold-rule mt-2"></span>
</div>
<div className="mb-4">
<h1 className="text-white flex flex-col">
<span className="hero-el opacity-0 translate-y-5 font-heading font-semibold text-[clamp(1.1rem,2.5vw,1.5rem)] tracking-[0.04em] mb-1">Move Without Limits.</span>
<span className="hero-el opacity-0 translate-y-8 font-display text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.9] tracking-tight">HEAL WITHOUT COMPROMISE.</span>
</h1>
</div>
<p className="hero-el opacity-0 translate-y-5 font-body font-normal text-[clamp(1rem,2vw,1.2rem)] text-stone max-w-xl leading-relaxed mb-6">
        Most men accept pain and limitation as the price of getting older. It's not. Twenty years of protocol development, a trademarked method, and a clear path to restoration.
      </p>
<div className="hero-el opacity-0 translate-y-5 flex flex-row gap-6 items-center flex-wrap mb-10 w-full">
<button className="btn-primary px-8 py-4 text-sm w-full sm:w-auto">
<span className="btn-bg"></span>
<span className="btn-text">Book a Conversation</span>
</button>
<a className="hidden sm:inline-flex items-center gap-2 font-heading font-medium text-sm text-white/80 hover:text-white hover:-translate-y-[1px] transition-all duration-150" href="#method">
          See the Method <iconify-icon height="1rem" icon="solar:arrow-right-linear" width="1rem"></iconify-icon>
</a>
</div>
<div className="hero-badges hidden sm:flex flex-row gap-3 mb-8 overflow-x-auto hide-scrollbar">
<div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 font-heading font-normal text-xs text-white whitespace-nowrap opacity-0 -translate-x-2 badge-el">📍 Salt Lake · Davis · Utah · Summit Counties</div>
<div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 font-heading font-normal text-xs text-white whitespace-nowrap opacity-0 -translate-x-2 badge-el">Virtual Programs Available</div>
<div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 font-heading font-normal text-xs text-white whitespace-nowrap opacity-0 -translate-x-2 badge-el">100% Right Decision Guarantee</div>
</div>
<div className="hero-el opacity-0 translate-y-4 flex flex-row gap-10 flex-wrap items-center">
<div className="flex flex-col">
<span className="font-heading font-semibold text-[0.8125rem] text-white">20</span>
<span className="font-heading font-normal text-xs text-stone">Years Developing the Method</span>
</div>
<div className="w-px h-8 bg-gold-rule/40 hidden sm:block"></div>
<div className="flex flex-col">
<span className="font-heading font-semibold text-[0.8125rem] text-white tracking-tight uppercase">Trademarked</span>
<span className="font-heading font-normal text-xs text-stone">Method of Healing TMP</span>
</div>
<div className="w-px h-8 bg-gold-rule/40 hidden sm:block"></div>
<div className="flex flex-col">
<span className="font-heading font-semibold text-[0.8125rem] text-white tracking-tight uppercase">Salt Lake City</span>
<span className="font-heading font-normal text-xs text-stone">By Appointment Only</span>
</div>
</div>
</div>
</section>

<section className="w-full bg-parchment py-24 md:py-32 px-6 md:px-12 lg:px-16 text-obsidian">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[60%_40%] gap-16 items-start">
<div className="prob-left">
<div className="gsap-fade-up opacity-0 translate-y-10">
<span className="font-heading font-semibold text-[0.6875rem] text-ember tracking-[0.14em] uppercase">SOUND FAMILIAR?</span>
<h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] tracking-tight mt-3 text-obsidian">
            YOU'VE TRIED EVERYTHING.<br/>THE PAIN IS STILL THERE.
          </h2>
<div className="w-12 h-px bg-gold-rule my-6"></div>
</div>
<div className="gsap-fade-up opacity-0 translate-y-10 font-body font-normal text-[1.0625rem] text-slate-deep leading-relaxed max-w-xl space-y-6">
<p>Chiropractic. Physical therapy. Massage. Injections. Stretching. Ice baths. You've invested time, money, and hope into every approach that promised relief. Nothing has lasted.</p>
<p>That's not your failure. That's the failure of approaches that treat where it hurts without ever asking why it hurts. The restriction isn't in the muscle. It's in the fascia — the connective tissue that surrounds and connects everything in your body.</p>
<p className="font-body italic text-stone">Until you change that system, nothing holds. That's the gap the Release Works Method was built to close.</p>
</div>
</div>
<div className="prob-right bg-obsidian rounded-[2rem] p-8 md:p-10 opacity-0 translate-x-10">
<span className="block font-heading font-semibold text-[0.6875rem] text-gold-rule tracking-[0.14em] mb-6 uppercase">WHAT YOU'VE TRIED</span>
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-stone/50 mt-0.5 shrink-0" height="1rem" icon="solar:close-linear" width="1rem"></iconify-icon>
<span className="font-heading font-normal text-sm text-stone">Chiropractic adjustments that held for a week</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-stone/50 mt-0.5 shrink-0" height="1rem" icon="solar:close-linear" width="1rem"></iconify-icon>
<span className="font-heading font-normal text-sm text-stone">Physical therapy that strengthened around the problem</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-stone/50 mt-0.5 shrink-0" height="1rem" icon="solar:close-linear" width="1rem"></iconify-icon>
<span className="font-heading font-normal text-sm text-stone">Massage that felt good until the next morning</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-stone/50 mt-0.5 shrink-0" height="1rem" icon="solar:close-linear" width="1rem"></iconify-icon>
<span className="font-heading font-normal text-sm text-stone">Injections that masked it for 3 months</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-stone/50 mt-0.5 shrink-0" height="1rem" icon="solar:close-linear" width="1rem"></iconify-icon>
<span className="font-heading font-normal text-sm text-stone">Stretching routines that made it worse</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-stone/50 mt-0.5 shrink-0" height="1rem" icon="solar:close-linear" width="1rem"></iconify-icon>
<span className="font-heading font-normal text-sm text-stone">Ice, heat, rest — repeat</span>
</li>
</ul>
<div className="w-full h-px bg-gold-rule/20 my-6"></div>
<p className="font-heading font-medium text-sm text-white">The problem was never the approach. It was the target.</p>
</div>
</div>
</section>

<section className="w-full bg-obsidian py-24 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 max-w-3xl mx-auto gsap-fade-up opacity-0 translate-y-10">
<span className="font-heading font-semibold text-[0.6875rem] text-gold-rule tracking-[0.14em] uppercase">THE RELEASE WORKS METHOD</span>
<h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-none tracking-tight mt-3">
          THREE PILLARS.<br/>ONE COMPLETE SYSTEM.
        </h2>
<p className="font-body italic text-[1.0625rem] text-stone mt-4">
          Not a technique. Not a session type. A trademarked, personalized, progressive protocol with a defined beginning, a measurable middle, and a clear end.
        </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 feature-cards">

<div className="f-card bg-slate-deep rounded-[2rem] p-8 border border-gold-rule/10 overflow-hidden flex flex-col opacity-0 translate-y-12">
<div className="w-full h-[200px] relative flex flex-col items-center justify-center mb-6">
<svg className="overflow-visible" height="160" id="svg-map" viewbox="0 0 120 160" width="120">
<path d="M60 10 C 75 10, 75 30, 60 30 C 45 30, 45 10, 60 10 Z M 45 35 L 75 35 C 90 35, 95 50, 95 65 L 85 100 L 75 65 L 75 100 C 75 130, 65 160, 65 160 L 55 160 C 55 160, 45 130, 45 100 L 45 65 L 35 100 L 25 65 C 25 50, 30 35, 45 35 Z" fill="none" stroke="#7F8C8D" stroke-opacity="0.3" strokeWidth="1.5"></path>
<g id="map-nodes">
<circle className="map-node" cx="35" cy="50" r="4"></circle>
<circle className="map-node" cx="85" cy="50" r="4"></circle>
<circle className="map-node" cx="60" cy="40" r="4"></circle>
<circle className="map-node" cx="60" cy="90" r="4"></circle>
<circle className="map-node" cx="45" cy="110" r="4"></circle>
<circle className="map-node" cx="75" cy="110" r="4"></circle>
</g>
<g id="map-lines" opacity="0" stroke="#C9A84C" stroke-dasharray="100" stroke-dashoffset="100" strokeWidth="1.5">
<line x1="35" x2="60" y1="50" y2="40"></line>
<line x1="85" x2="60" y1="50" y2="40"></line>
<line x1="60" x2="60" y1="40" y2="90"></line>
<line x1="60" x2="45" y1="90" y2="110"></line>
<line x1="60" x2="75" y1="90" y2="110"></line>
</g>
</svg>
<span className="font-heading font-medium text-[0.625rem] tracking-[0.1em] text-ember mt-4 text-center h-4 transition-colors duration-300" id="map-label">RESTRICTION PATTERN IDENTIFIED</span>
</div>
<div className="w-full h-px bg-gold-rule/20 mb-4"></div>
<span className="font-heading font-semibold text-[0.6875rem] text-ember tracking-[0.14em] mb-2 uppercase">PILLAR 01 — STRUCTURAL RELEASE</span>
<h3 className="font-heading font-semibold text-lg text-white mb-3 tracking-tight">Undo What Decades of Compensation Built.</h3>
<p className="font-body text-base text-stone leading-relaxed">The myofascial system builds restrictions over years of injury, stress, and adaptation. We locate them. We release them. The body stops holding what it no longer needs to hold.</p>
</div>

<div className="f-card bg-slate-deep rounded-[2rem] p-8 border border-gold-rule/10 overflow-hidden flex flex-col opacity-0 translate-y-12">
<div className="w-full bg-black/30 rounded-[1rem] p-4 mt-2 mb-6 h-[200px] flex flex-col relative overflow-hidden">
<div className="flex items-center gap-2 mb-3">
<div className="w-1.5 h-1.5 rounded-full bg-ember pulse-dot"></div>
<span className="font-heading font-semibold text-[0.625rem] text-ember tracking-[0.16em]">LIVE PROGRESS</span>
</div>
<div className="font-heading font-normal text-[0.8125rem] text-white leading-[1.7] flex-1" id="typewriter-container">
<span id="typewriter-text">WWW</span><span className="text-ember typewriter-cursor font-bold">|</span>
</div>
</div>
<div className="w-full h-px bg-gold-rule/20 mb-4"></div>
<span className="font-heading font-semibold text-[0.6875rem] text-ember tracking-[0.14em] mb-2 uppercase">PILLAR 02 — MOVEMENT RESTORATION</span>
<h3 className="font-heading font-semibold text-lg text-white mb-3 tracking-tight">Relearn How Your Body Was Designed to Move.</h3>
<p className="font-body text-base text-stone leading-relaxed">Releasing restrictions creates possibility. Movement Restoration turns that into new patterns your body actually keeps.</p>
</div>

<div className="f-card bg-slate-deep rounded-[2rem] p-8 border border-gold-rule/10 overflow-hidden flex flex-col opacity-0 translate-y-12">
<div className="w-full bg-black/30 rounded-[1rem] p-5 mt-2 mb-6 h-[200px] flex flex-col justify-between relative">
<div>
<span className="block font-heading font-semibold text-[0.625rem] text-stone tracking-[0.1em] mb-1">YOUR PROTOCOL WEEK</span>
<span className="block font-heading font-semibold text-[0.6875rem] text-gold-rule tracking-[0.1em] mb-4">WEEK 7 OF 13</span>
<div className="grid grid-cols-7 gap-1 relative w-full mt-2" id="protocol-grid">

<div className="absolute w-[6px] h-[6px] bg-gold-rule rounded-full -left-3 top-5 opacity-0 transition-all duration-400 ease-in-out z-20" id="grid-cursor"></div>
<div className="flex flex-col items-center gap-1.5 z-10 grid-cell protocol">
<span className="font-heading text-[0.5625rem] text-stone tracking-wide">MON</span>
<div className="w-8 h-8 rounded-full border-2 border-ember bg-obsidian flex items-center justify-center font-heading text-xs font-semibold text-ember transition-all duration-150 relative">
<span className="z-10 cell-txt">P</span>
<div className="absolute inset-0 rounded-full border border-ember scale-100 opacity-0 cell-pulse"></div>
</div>
</div>
<div className="flex flex-col items-center gap-1.5 z-10 grid-cell self-care">
<span className="font-heading text-[0.5625rem] text-stone tracking-wide">TUE</span>
<div className="w-8 h-8 rounded-full border border-stone bg-obsidian flex items-center justify-center font-heading text-xs text-stone transition-all duration-150">S</div>
</div>
<div className="flex flex-col items-center gap-1.5 z-10 grid-cell protocol">
<span className="font-heading text-[0.5625rem] text-stone tracking-wide">WED</span>
<div className="w-8 h-8 rounded-full border-2 border-ember bg-obsidian flex items-center justify-center font-heading text-xs font-semibold text-ember transition-all duration-150 relative">
<span className="z-10 cell-txt">P</span>
<div className="absolute inset-0 rounded-full border border-ember scale-100 opacity-0 cell-pulse"></div>
</div>
</div>
<div className="flex flex-col items-center gap-1.5 z-10 grid-cell rest">
<span className="font-heading text-[0.5625rem] text-stone/40 tracking-wide">THU</span>
<div className="w-8 h-8 rounded-full border border-stone/20 bg-transparent flex items-center justify-center font-heading text-xs text-stone/40">·</div>
</div>
<div className="flex flex-col items-center gap-1.5 z-10 grid-cell self-care">
<span className="font-heading text-[0.5625rem] text-stone tracking-wide">FRI</span>
<div className="w-8 h-8 rounded-full border border-stone bg-obsidian flex items-center justify-center font-heading text-xs text-stone transition-all duration-150">S</div>
</div>
<div className="flex flex-col items-center gap-1.5 z-10 grid-cell protocol">
<span className="font-heading text-[0.5625rem] text-stone tracking-wide">SAT</span>
<div className="w-8 h-8 rounded-full border-2 border-ember bg-obsidian flex items-center justify-center font-heading text-xs font-semibold text-ember transition-all duration-150 relative">
<span className="z-10 cell-txt">P</span>
<div className="absolute inset-0 rounded-full border border-ember scale-100 opacity-0 cell-pulse"></div>
</div>
</div>
<div className="flex flex-col items-center gap-1.5 z-10 grid-cell rest">
<span className="font-heading text-[0.5625rem] text-stone/40 tracking-wide">SUN</span>
<div className="w-8 h-8 rounded-full border border-stone/20 bg-transparent flex items-center justify-center font-heading text-xs text-stone/40">·</div>
</div>
</div>
</div>
<div className="w-full mt-4 flex items-center justify-between">
<div className="bg-ember rounded-full px-3 py-1 font-heading font-medium text-[0.5625rem] text-white opacity-0 transition-colors duration-300" id="save-pill" style={{backgroundColor: 'rgb(184, 68, 26)'}}>SAVE PROTOCOL</div>
<div className="flex flex-col items-end gap-1 flex-1 ml-4">
<span className="font-heading text-[0.5625rem] text-stone tracking-wide">54% COMPLETE</span>
<div className="w-full h-1 bg-stone/20 rounded-full overflow-hidden">
<div className="h-full bg-ember w-0" id="prog-bar" style={{width: '0%'}}></div>
</div>
</div>
</div>
</div>
<div className="w-full h-px bg-gold-rule/20 mb-4"></div>
<span className="font-heading font-semibold text-[0.6875rem] text-ember tracking-[0.14em] mb-2 uppercase">PILLAR 03 — RESILIENT CONDITIONING</span>
<h3 className="font-heading font-semibold text-lg text-white mb-3 tracking-tight">Build the Strength That Keeps It Gone.</h3>
<p className="font-body text-base text-stone leading-relaxed">Floor work, natural movement, progressive conditioning protocols. You leave with a lifelong practice — not a dependency.</p>
</div>
</div>
</div>
</section>

<section className="relative w-full py-32 md:py-40 overflow-hidden bg-obsidian">
<img alt="Texture" className="absolute inset-0 w-full h-[150%] object-cover opacity-[0.06] z-0" id="philosophy-bg" loading="lazy" src="https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=1920&amp;q=60&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
<div className="w-16 h-px bg-gold-rule mb-12"></div>
<p className="font-body font-normal text-[clamp(1.1rem,2.5vw,1.5rem)] text-stone/70 leading-relaxed max-w-3xl flex flex-wrap gap-[0.3em]" id="phil-statement-1">

<span className="inline-block opacity-0 translate-y-4">Most</span><span className="inline-block opacity-0 translate-y-4">approaches</span><span className="inline-block opacity-0 translate-y-4">to</span><span className="inline-block opacity-0 translate-y-4">pain</span><span className="inline-block opacity-0 translate-y-4">focus</span><span className="inline-block opacity-0 translate-y-4">on</span><span className="inline-block opacity-0 translate-y-4">where</span><span className="inline-block opacity-0 translate-y-4">it</span><span className="inline-block opacity-0 translate-y-4">hurts</span><span className="inline-block opacity-0 translate-y-4">—</span><span className="inline-block opacity-0 translate-y-4">treating</span><span className="inline-block opacity-0 translate-y-4">the</span><span className="inline-block opacity-0 translate-y-4">symptom</span><span className="inline-block opacity-0 translate-y-4">with</span><span className="inline-block opacity-0 translate-y-4">the</span><span className="inline-block opacity-0 translate-y-4">assumption</span><span className="inline-block opacity-0 translate-y-4">that</span><span className="inline-block opacity-0 translate-y-4">suppression</span><span className="inline-block opacity-0 translate-y-4">equals</span><span className="inline-block opacity-0 translate-y-4">resolution.</span><span className="inline-block opacity-0 translate-y-4">Stretching</span><span className="inline-block opacity-0 translate-y-4">the</span><span className="inline-block opacity-0 translate-y-4">tight</span><span className="inline-block opacity-0 translate-y-4">spot.</span><span className="inline-block opacity-0 translate-y-4">Adjusting</span><span className="inline-block opacity-0 translate-y-4">the</span><span className="inline-block opacity-0 translate-y-4">misaligned</span><span className="inline-block opacity-0 translate-y-4">joint.</span><span className="inline-block opacity-0 translate-y-4">Medicating</span><span className="inline-block opacity-0 translate-y-4">the</span><span className="inline-block opacity-0 translate-y-4">inflamed</span><span className="inline-block opacity-0 translate-y-4">tissue.</span><span className="inline-block opacity-0 translate-y-4">Repeat.</span><span className="inline-block opacity-0 translate-y-4">Most</span><span className="inline-block opacity-0 translate-y-4">approaches</span><span className="inline-block opacity-0 translate-y-4">to</span><span className="inline-block opacity-0 translate-y-4">pain</span><span className="inline-block opacity-0 translate-y-4">focus</span><span className="inline-block opacity-0 translate-y-4">on</span><span className="inline-block opacity-0 translate-y-4">where</span><span className="inline-block opacity-0 translate-y-4">it</span><span className="inline-block opacity-0 translate-y-4">hurts</span><span className="inline-block opacity-0 translate-y-4">—</span><span className="inline-block opacity-0 translate-y-4">treating</span><span className="inline-block opacity-0 translate-y-4">the</span><span className="inline-block opacity-0 translate-y-4">symptom</span><span className="inline-block opacity-0 translate-y-4">with</span><span className="inline-block opacity-0 translate-y-4">the</span><span className="inline-block opacity-0 translate-y-4">assumption</span><span className="inline-block opacity-0 translate-y-4">that</span><span className="inline-block opacity-0 translate-y-4">suppression</span><span className="inline-block opacity-0 translate-y-4">equals</span><span className="inline-block opacity-0 translate-y-4">resolution.</span><span className="inline-block opacity-0 translate-y-4">Stretching</span><span className="inline-block opacity-0 translate-y-4">the</span><span className="inline-block opacity-0 translate-y-4">tight</span><span className="inline-block opacity-0 translate-y-4">spot.</span><span className="inline-block opacity-0 translate-y-4">Adjusting</span><span className="inline-block opacity-0 translate-y-4">the</span><span className="inline-block opacity-0 translate-y-4">misaligned</span><span className="inline-block opacity-0 translate-y-4">joint.</span><span className="inline-block opacity-0 translate-y-4">Medicating</span><span className="inline-block opacity-0 translate-y-4">the</span><span className="inline-block opacity-0 translate-y-4">inflamed</span><span className="inline-block opacity-0 translate-y-4">tissue.</span><span className="inline-block opacity-0 translate-y-4">Repeat.</span><span className="inline-block opacity-0 translate-y-4">Most</span><span className="inline-block opacity-0 translate-y-4">approaches</span><span className="inline-block opacity-0 translate-y-4">to</span><span className="inline-block opacity-0 translate-y-4">pain</span><span className="inline-block opacity-0 translate-y-4">focus</span><span className="inline-block opacity-0 translate-y-4">on</span><span className="inline-block opacity-0 translate-y-4">where</span><span className="inline-block opacity-0 translate-y-4">it</span><span className="inline-block opacity-0 translate-y-4">hurts</span><span className="inline-block opacity-0 translate-y-4">—</span><span className="inline-block opacity-0 translate-y-4">treating</span><span className="inline-block opacity-0 translate-y-4">the</span><span className="inline-block opacity-0 translate-y-4">symptom</span><span className="inline-block opacity-0 translate-y-4">with</span><span className="inline-block opacity-0 translate-y-4">the</span><span className="inline-block opacity-0 translate-y-4">assumption</span><span className="inline-block opacity-0 translate-y-4">that</span><span className="inline-block opacity-0 translate-y-4">suppression</span><span className="inline-block opacity-0 translate-y-4">equals</span><span className="inline-block opacity-0 translate-y-4">resolution.</span><span className="inline-block opacity-0 translate-y-4">Stretching</span><span className="inline-block opacity-0 translate-y-4">the</span><span className="inline-block opacity-0 translate-y-4">tight</span><span className="inline-block opacity-0 translate-y-4">spot.</span><span className="inline-block opacity-0 translate-y-4">Adjusting</span><span className="inline-block opacity-0 translate-y-4">the</span><span className="inline-block opacity-0 translate-y-4">misaligned</span><span className="inline-block opacity-0 translate-y-4">joint.</span><span className="inline-block opacity-0 translate-y-4">Medicating</span><span className="inline-block opacity-0 translate-y-4">the</span><span className="inline-block opacity-0 translate-y-4">inflamed</span><span className="inline-block opacity-0 translate-y-4">tissue.</span><span className="inline-block opacity-0 translate-y-4">Repeat.</span></p>
<h2 className="font-display text-[clamp(3rem,7vw,6.5rem)] text-white leading-[0.92] mt-10 tracking-tight flex flex-wrap gap-[0.2em]" id="phil-statement-2">
<span className="block">WE RESTORE</span>
<span className="block flex"><span>THE </span><span className="text-ember inline-block origin-left" id="phil-system">SYSTEM.</span></span>
</h2>
<div className="max-w-2xl mt-16 pl-6 border-l-[3px] border-gold-rule opacity-0 translate-y-5" id="phil-quote">
<p className="font-body italic text-[clamp(1.1rem,2.2vw,1.4rem)] text-white/80 leading-relaxed">
          "The spot that hurts is never the problem. The whole body is a connected system — and that's exactly where the answers have always been."
        </p>
<p className="font-heading font-semibold text-xs text-stone mt-4">— Michael Sudbury, Founder · Release Works</p>
</div>
</div>
</section>

<section className="w-full bg-parchment relative z-20 pb-20">
<div className="py-16 text-center max-w-4xl mx-auto px-6">
<span className="font-heading font-semibold text-[0.6875rem] text-ember tracking-[0.14em] uppercase">THE COMPLETE METHOD</span>
<h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-obsidian tracking-tight leading-none mt-3">THREE STEPS. IN ORDER. ALWAYS.</h2>
<p className="font-body italic text-[1.0625rem] text-stone mt-4 max-w-2xl mx-auto">The method is progressive by design. Each pillar builds on the last. You cannot skip ahead — and you won't want to.</p>
</div>

<div className="w-full relative" id="sticky-container">

<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '1', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1230px', height: '1269px', padding: '0px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '1', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1230px', height: '1269px', padding: '0px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '1', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1230px', height: '1269px', padding: '0px'}}><div className="sticky-card w-full h-[100dvh] flex items-center justify-center bg-obsidian relative z-[1] will-change-transform" style={{filter: 'none', inset: '0px auto auto 0px', margin: '0px', maxWidth: '1230px', width: '1230px', maxHeight: '1269px', height: '1269px', padding: '0px'}}>
<div className="max-w-7xl mx-auto px-8 md:px-16 w-full grid grid-cols-1 md:grid-cols-[45%_55%] gap-12 items-center">
<div className="flex justify-center order-2 md:order-1 h-[40vh] md:h-auto items-center">
<svg className="max-w-full h-auto" height="360" id="svg-web" viewbox="0 0 300 360" width="300">

<g fill="none" id="web-paths" opacity="0.2" stroke="#C9A84C" strokeWidth="1"><path className="web-p" d="M150,30 Q150,55 100,80" style={{strokeDashoffset: '0px', strokeDasharray: '200'}}></path><path className="web-p" d="M100,80 Q150,80 200,80" style={{strokeDashoffset: '0px', strokeDasharray: '200'}}></path><path className="web-p" d="M200,80 Q150,105 150,130" style={{strokeDashoffset: '0px', strokeDasharray: '200'}}></path><path className="web-p" d="M150,130 Q150,145 80,160" style={{strokeDashoffset: '0px', strokeDasharray: '200'}}></path><path className="web-p" d="M80,160 Q150,160 220,160" style={{strokeDashoffset: '0px', strokeDasharray: '200'}}></path><path className="web-p" d="M220,160 Q150,190 120,220" style={{strokeDashoffset: '0px', strokeDasharray: '200'}}></path><path className="web-p" d="M120,220 Q150,220 180,220" style={{strokeDashoffset: '0px', strokeDasharray: '200'}}></path><path className="web-p" d="M180,220 Q150,255 100,290" style={{strokeDashoffset: '0px', strokeDasharray: '200'}}></path><path className="web-p" d="M100,290 Q150,290 200,290" style={{strokeDashoffset: '0px', strokeDasharray: '200'}}></path><path className="web-p" d="M200,290 Q150,315 150,340" style={{strokeDashoffset: '0px', strokeDasharray: '200'}}></path></g>
<g id="web-nodes"><circle className="web-n" cx="150" cy="30" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="100" cy="80" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="200" cy="80" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="150" cy="130" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="80" cy="160" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="220" cy="160" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="120" cy="220" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="180" cy="220" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="100" cy="290" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="200" cy="290" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="150" cy="340" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="150" cy="30" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="100" cy="80" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="200" cy="80" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="150" cy="130" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="80" cy="160" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="220" cy="160" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="120" cy="220" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="180" cy="220" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="100" cy="290" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="200" cy="290" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="150" cy="340" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="150" cy="30" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="100" cy="80" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="200" cy="80" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="150" cy="130" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="80" cy="160" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="220" cy="160" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="120" cy="220" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="180" cy="220" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="100" cy="290" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 168, 76)'}}></circle><circle className="web-n" cx="200" cy="290" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(201, 167, 75)'}}></circle><circle className="web-n" cx="150" cy="340" fill="#B8441A" opacity="0.8" r="5" style={{fill: 'rgb(200, 164, 74)'}}></circle></g>
</svg>
</div>
<div className="order-1 md:order-2">
<span className="font-display text-[5rem] md:text-[5rem] text-gold-rule/30 leading-none block">01</span>
<div className="w-12 h-px bg-gold-rule my-4"></div>
<h3 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] text-white tracking-tight leading-[0.95]">STRUCTURAL RELEASE</h3>
<p className="font-body text-[1.0625rem] text-stone leading-relaxed max-w-md mt-6">Twenty years of protocol development identified what conventional care consistently misses: the myofascial system. The connective tissue that surrounds everything builds holding patterns over time.</p>
<p className="font-body text-[1.0625rem] text-stone leading-relaxed max-w-md mt-4">Structural Release works directly with this system. Not the symptom location. The structural pattern creating it.</p>
<div className="mt-8 pl-6 border-l-2 border-gold-rule/40">
<p className="font-body italic text-base text-stone">"I understood more about why I'd been in pain in the first 20 minutes than in 15 years of appointments." — Jeff, 57</p>
</div>
</div>
</div>
</div></div></div></div>

<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '2', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1230px', height: '1269px', padding: '0px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '2', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1230px', height: '1269px', padding: '0px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '2', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1230px', height: '1269px', padding: '0px'}}><div className="sticky-card w-full h-[100dvh] flex items-center justify-center bg-slate-deep relative z-[2] will-change-transform" style={{filter: 'none', inset: '0px auto auto 0px', margin: '0px', maxWidth: '1230px', width: '1230px', maxHeight: '1269px', height: '1269px', padding: '0px'}}>
<div className="max-w-7xl mx-auto px-8 md:px-16 w-full grid grid-cols-1 md:grid-cols-[45%_55%] gap-12 items-center">
<div className="flex justify-center order-2 md:order-1 flex-col items-center h-[40vh] md:h-auto">
<svg className="max-w-full h-auto" height="300" id="svg-rom" viewbox="0 0 300 300" width="300">

<rect fill="#7F8C8D" height="140" opacity="0.4" rx="15" width="30" x="135" y="50"></rect>

<g data-svg-origin="135 180" id="rom-bone2" style={{transformOrigin: '0px 0px'}} transform="matrix(0.96316,0.26893,-0.26893,0.96316,-45.95389,-568.79519)">
<rect fill="#7F8C8D" height="120" opacity="0.4" rx="15" width="30" x="135" y="180"></rect>
</g>

<circle cx="150" cy="180" fill="#1A1A1A" r="8"></circle>

<path d="M 150 80 A 100 100 0 0 1 250 180" data-svg-origin="150 80" fill="none" id="rom-arc" stroke="#C9A84C" stroke-dasharray="157" stroke-dashoffset="157" strokeLinecap="round" strokeWidth="3" style={{transformOrigin: '0px 0px', filter: 'drop-shadow(rgb(201, 168, 76) 0px 0px 4px)', strokeDashoffset: '100px'}}></path>

<circle cx="250" cy="180" data-svg-origin="250 180" fill="#B8441A" id="rom-marker" opacity="0" r="6" style={{transformOrigin: '0px 0px'}} transform="matrix(0.5,0,0,0.5,125,90)"></circle>
<text data-svg-origin="239.7265625 190" fill="#C9A84C" fontFamily="Montserrat" fontSize="10" id="rom-deg" opacity="0" style={{transformOrigin: '0px 0px'}} text-anchor="middle" x="250" y="200">160°</text>
</svg>
<span className="font-heading text-[0.625rem] text-gold-rule tracking-[0.1em] mt-4 uppercase">RANGE OF MOTION RESTORED</span>
</div>
<div className="order-1 md:order-2">
<span className="font-display text-[5rem] text-gold-rule/30 leading-none block">02</span>
<div className="w-12 h-px bg-gold-rule my-4"></div>
<h3 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] text-white tracking-tight leading-[0.95]">MOVEMENT RESTORATION</h3>
<p className="font-body text-[1.0625rem] text-stone leading-relaxed max-w-md mt-6">Releasing restrictions creates possibility. Movement Restoration converts that possibility into new patterns — habituated at the level of the nervous system, not just the muscle.</p>
<p className="font-body text-[1.0625rem] text-stone leading-relaxed max-w-md mt-4">The movement habits you've developed as compensation dissolve as the underlying restriction resolves. The body finds its own balance when you let it.</p>
<div className="mt-8 pl-6 border-l-2 border-gold-rule/40">
<p className="font-body italic text-base text-stone">"Standing taller. Moving differently. My wife noticed before I did." — Brent, 54</p>
</div>
</div>
</div>
</div></div></div></div>

<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '3', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1230px', height: '1269px', padding: '0px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '3', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1230px', height: '1269px', padding: '0px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '3', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1230px', height: '1269px', padding: '0px'}}><div className="sticky-card w-full h-[100dvh] flex items-center justify-center bg-obsidian relative z-[3] will-change-transform" style={{inset: '0px auto auto 0px', margin: '0px', maxWidth: '1230px', width: '1230px', maxHeight: '1269px', height: '1269px', padding: '0px'}}>
<div className="max-w-7xl mx-auto px-8 md:px-16 w-full grid grid-cols-1 md:grid-cols-[45%_55%] gap-12 items-center">
<div className="flex justify-center order-2 md:order-1 flex-col items-center h-[40vh] md:h-auto">
<svg className="max-w-full h-auto" height="140" id="svg-ekg" viewbox="0 0 320 140" width="320">
<path d="M0,70 L80,70 L85,20 L95,100 L105,70 L115,55 L125,70 L320,70" data-svg-origin="0 20" fill="none" id="ekg-path" stroke="#7F8C8D" strokeLinejoin="round" stroke-opacity="0.25" strokeWidth="1.5" style={{transformOrigin: '0px 0px', strokeOpacity: '0.15'}}></path>
<path d="M0,70 L80,70 L85,20 L95,100 L105,70 L115,55 L125,70 L320,70" data-svg-origin="0 20" fill="none" id="ekg-active" stroke="#B8441A" strokeLinejoin="round" strokeWidth="2.5" style={{transformOrigin: '0px 0px', filter: 'drop-shadow(rgba(184, 68, 26, 0.6) 0px 0px 8px)', strokeDashoffset: '0px', strokeDasharray: '473.55'}}></path>
</svg>
<span className="font-heading text-[0.625rem] text-stone tracking-[0.14em] mt-4 uppercase">VITAL — ACTIVE — SELF-SUFFICIENT</span>
</div>
<div className="order-1 md:order-2">
<span className="font-display text-[5rem] text-gold-rule/30 leading-none block">03</span>
<div className="w-12 h-px bg-gold-rule my-4"></div>
<h3 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] text-white tracking-tight leading-[0.95]">RESILIENT CONDITIONING</h3>
<p className="font-body text-[1.0625rem] text-stone leading-relaxed max-w-md mt-6">A body that has been restored needs to be rebuilt — on the foundation of its restoration. We replace the patterns that built up compensation with natural human movement.</p>
<p className="font-body text-[1.0625rem] text-stone leading-relaxed max-w-md mt-4">You leave with a self-care practice that works. Not an appointment dependency. A lifelong practice that belongs to you.</p>
<div className="mt-8 pl-6 border-l-2 border-gold-rule/40">
<p className="font-body italic text-base text-stone">"I haven't needed to come back for maintenance. I know what to do now. That's the whole point." — Jason, 48</p>
</div>
</div>
</div>
</div></div></div></div>
</div>
</section>

<section className="w-full bg-parchment py-24 md:py-32 px-6 md:px-12 lg:px-16 text-obsidian relative z-30" id="results">
<div className="max-w-4xl mx-auto mb-16 text-center">
<span className="font-heading font-semibold text-[0.6875rem] text-ember tracking-[0.14em] uppercase">REAL RESULTS</span>
<h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] tracking-tight leading-none mt-3">THE WORK SPEAKS FOR ITSELF.</h2>
</div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
<div className="res-card bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_2px_20px_rgba(26,26,26,0.07)] opacity-0 translate-y-12">
<div className="bg-ember/10 text-ember font-heading font-semibold text-[0.6875rem] rounded-full px-3 py-1 inline-flex mb-6 tracking-wide">Chronic Back Pain → Pain-Free</div>
<p className="font-body italic text-lg text-slate-deep leading-relaxed pl-5 border-l-[3px] border-gold-rule">
          "I've tried everything over 15 years. Chiro, PT, massage, injections. Nothing lasted more than a week. Three months in, I'm golfing pain-free and beating my son again."
        </p>
<p className="font-heading font-semibold text-xs text-stone mt-5 uppercase">— Brent, 54 · Golfer</p>
<div className="w-full h-px bg-gold-rule/30 mt-5 mb-4"></div>
<div className="flex items-center gap-3">
<iconify-icon className="text-ember" height="1rem" icon="solar:graph-up-linear" width="1rem"></iconify-icon>
<span className="font-heading font-medium text-[0.8125rem] text-obsidian">15 years chronic pain · Resolved in 13 weeks</span>
</div>
</div>
<div className="res-card bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_2px_20px_rgba(26,26,26,0.07)] opacity-0 translate-y-12">
<div className="bg-ember/10 text-ember font-heading font-semibold text-[0.6875rem] rounded-full px-3 py-1 inline-flex mb-6 tracking-wide">Sciatic Pain → Back in the Field</div>
<p className="font-body italic text-lg text-slate-deep leading-relaxed pl-5 border-l-[3px] border-gold-rule">
          "Sciatic pain had me questioning whether I could keep guiding. Michael's method got me back to hiking, climbing, and skiing. I understand my body now in a way I never did."
        </p>
<p className="font-heading font-semibold text-xs text-stone mt-5 uppercase">— Jason, 48 · Outdoor Guide</p>
<div className="w-full h-px bg-gold-rule/30 mt-5 mb-4"></div>
<div className="flex items-center gap-3">
<iconify-icon className="text-ember" height="1rem" icon="solar:graph-up-linear" width="1rem"></iconify-icon>
<span className="font-heading font-medium text-[0.8125rem] text-obsidian">Sciatic pain 4 years · Full return to activity</span>
</div>
</div>
<div className="res-card bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_2px_20px_rgba(26,26,26,0.07)] opacity-0 translate-y-12">
<div className="bg-ember/10 text-ember font-heading font-semibold text-[0.6875rem] rounded-full px-3 py-1 inline-flex mb-6 tracking-wide">Post-Surgical Chronic Pain → Restored</div>
<p className="font-body italic text-lg text-slate-deep leading-relaxed pl-5 border-l-[3px] border-gold-rule">
          "Five spinal surgeries and I was still in constant pain, still on medication. I'm sleeping through the night. Standing taller. I owe nothing to another surgery."
        </p>
<p className="font-heading font-semibold text-xs text-stone mt-5 uppercase">— Jeff, 57</p>
<div className="w-full h-px bg-gold-rule/30 mt-5 mb-4"></div>
<div className="flex items-center gap-3">
<iconify-icon className="text-ember" height="1rem" icon="solar:graph-up-linear" width="1rem"></iconify-icon>
<span className="font-heading font-medium text-[0.8125rem] text-obsidian">5 surgeries · Off pain medication · Restored function</span>
</div>
</div>
</div>
<div className="max-w-3xl mx-auto bg-obsidian rounded-[2rem] p-10 md:p-12 text-center opacity-0 translate-y-10" id="res-anchor">
<div className="w-12 h-px bg-gold-rule mx-auto mb-8"></div>
<p className="font-body italic text-[clamp(1.1rem,2.5vw,1.4rem)] text-white leading-relaxed">
        "I have never worked with anyone in the healing space who can do and teach what Michael can. Best health investment I've ever made."
      </p>
<p className="font-heading font-semibold text-[0.8125rem] text-gold-rule mt-6 uppercase">— Client Testimonial</p>
<button className="btn-primary px-6 py-3 mt-8">
<span className="btn-bg"></span>
<span className="btn-text">Read More Results →</span>
</button>
</div>
</section>

<section className="w-full bg-obsidian py-24 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 opacity-0 -translate-x-10" id="founder-img">
<img alt="Michael Sudbury, Founder" className="w-full aspect-[4/5] object-cover rounded-[2rem] border border-gold-rule/20" loading="lazy" src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&amp;q=80&amp;auto=format&amp;fit=crop"/>
</div>
<div className="order-1 md:order-2">
<span className="founder-txt block opacity-0 translate-x-8 font-heading font-semibold text-[0.6875rem] text-gold-rule tracking-[0.14em] uppercase">THE FOUNDER</span>
<h2 className="founder-txt opacity-0 translate-x-8 font-display text-[clamp(2rem,4vw,3.5rem)] text-white leading-[0.95] tracking-tight mt-3">
          20 YEARS.<br/>ONE QUESTION.<br/>WHY DOES PAIN PERSIST?
        </h2>
<div className="founder-txt opacity-0 translate-x-8 w-12 h-px bg-gold-rule my-6"></div>
<div className="space-y-4">
<p className="founder-txt opacity-0 translate-x-8 font-body text-[1.0625rem] text-stone leading-relaxed">Eight years of his own debilitating back pain. The full circuit: chiropractic, physical therapy, injections, surgery consultations. Each approach that promised resolution and delivered only management.</p>
<p className="founder-txt opacity-0 translate-x-8 font-body text-[1.0625rem] text-stone leading-relaxed">Michael Sudbury refused the narrative that his body was broken beyond repair. Deep study of the fascial system and human movement mechanics led to a different answer — and eventually to the Release Works Method of Healing TMP.</p>
<p className="founder-txt opacity-0 translate-x-8 font-body italic text-base text-stone mt-2">Twenty years of protocol development. A trademarked method. A practice built on outcomes, not appointments.</p>
</div>
<a className="founder-txt opacity-0 translate-x-8 inline-flex items-center gap-2 font-heading font-medium text-sm text-ember hover:-translate-y-[1px] transition-all mt-8" href="#about">
          Meet Michael in full <iconify-icon height="1rem" icon="solar:arrow-right-linear" width="1rem"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="w-full bg-obsidian py-32 md:py-40 px-6 relative overflow-hidden text-center">
<img alt="Texture" className="absolute inset-0 w-full h-[150%] object-cover opacity-[0.04] z-0" id="book-bg" loading="lazy" src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?w=1920&amp;q=60&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 max-w-3xl mx-auto">
<div className="w-16 h-px bg-gold-rule mx-auto mb-10"></div>
<h2 className="font-display text-[clamp(3rem,7vw,6rem)] text-white leading-[0.92] tracking-tight flex flex-wrap justify-center gap-x-[0.2em]" id="book-title">
<span>DO</span> <span>THE</span> <span>WORK.</span><br/>
<span>THE</span> <span>RESULTS</span><br/>
<span>ARE</span> <span>INEVITABLE.</span>
</h2>
<p className="font-body italic text-[clamp(1rem,2.2vw,1.2rem)] text-stone leading-relaxed max-w-xl mx-auto mt-8 opacity-0 translate-y-5 book-el">
        A 30-minute conversation. We understand your situation, answer your questions, and tell you honestly whether the Release Works Method is the right fit. No pressure. No obligation. Just clarity on whether there's a path forward.
      </p>
<div className="mt-10 opacity-0 translate-y-5 book-el">
<button className="btn-primary px-10 py-5 text-base shadow-[0_0_30px_rgba(184,68,26,0.2)] hover:shadow-[0_0_40px_rgba(184,68,26,0.4)]">
<span className="btn-bg"></span>
<span className="btn-text">Book a Conversation</span>
</button>
</div>
<div className="mt-6 flex flex-row items-center justify-center gap-6 md:gap-8 flex-wrap font-heading font-normal text-[0.8125rem] text-stone opacity-0 translate-y-5 book-el">
<span>✓ 30 Minutes</span>
<span>✓ No Obligation</span>
<span>✓ 100% Right Decision Guarantee</span>
</div>
</div>
</section>

<footer className="w-full bg-obsidian rounded-t-[4rem] pt-16 pb-12 px-6 md:px-12 lg:px-16 mt-[-4rem] relative z-40" id="footer">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[35%_20%_25%_20%] gap-12 foot-grid">

<div className="flex flex-col opacity-0 translate-y-5 foot-col">
<span className="font-display text-[1.75rem] text-white tracking-[0.08em]">RELEASE WORKS</span>
<div className="w-12 h-px bg-gold-rule my-4"></div>
<span className="font-body italic text-sm text-stone">Move Without Limits. Heal Without Compromise.</span>
<div className="mt-6 flex flex-col gap-2">
<div className="flex items-center gap-2 text-stone hover:text-white transition-colors cursor-pointer">
<iconify-icon className="text-ember" height="1rem" icon="solar:phone-linear" width="1rem"></iconify-icon>
<span className="font-heading text-[0.8125rem]">801-557-3030</span>
</div>
<div className="flex items-center gap-2 text-stone hover:text-white transition-colors cursor-pointer">
<iconify-icon className="text-ember" height="1rem" icon="solar:letter-linear" width="1rem"></iconify-icon>
<span className="font-heading text-[0.8125rem]">michael@myofascialreleaseofsaltlake.com</span>
</div>
<div className="flex items-center gap-2 text-stone">
<iconify-icon className="text-ember" height="1rem" icon="solar:map-point-linear" width="1rem"></iconify-icon>
<span className="font-heading text-[0.8125rem]">Salt Lake City, UT</span>
</div>
<div className="flex items-center gap-2 text-stone">
<iconify-icon className="text-ember" height="1rem" icon="solar:clock-circle-linear" width="1rem"></iconify-icon>
<span className="font-heading text-[0.8125rem]">Mon–Wed, 10 AM–6 PM</span>
</div>
</div>
<span className="font-heading text-[0.6875rem] text-stone/50 mt-6">© 2026 Release Works. All rights reserved.</span>
</div>

<div className="flex flex-col opacity-0 translate-y-5 foot-col">
<span className="font-heading font-semibold text-[0.625rem] text-gold-rule tracking-[0.16em] mb-4 uppercase">NAVIGATE</span>
<div className="flex flex-col gap-3 font-heading text-sm text-stone">
<a className="hover:text-white hover:-translate-y-[1px] transition-all w-fit" href="#method">The Method</a>
<a className="hover:text-white hover:-translate-y-[1px] transition-all w-fit" href="#results">Results</a>
<a className="hover:text-white hover:-translate-y-[1px] transition-all w-fit" href="#programs">Programs</a>
<a className="hover:text-white hover:-translate-y-[1px] transition-all w-fit" href="#about">About</a>
<a className="hover:text-white hover:-translate-y-[1px] transition-all w-fit" href="#contact">Contact</a>
</div>
</div>

<div className="flex flex-col opacity-0 translate-y-5 foot-col">
<span className="font-heading font-semibold text-[0.625rem] text-gold-rule tracking-[0.16em] mb-4 uppercase">CONDITIONS</span>
<div className="flex flex-col gap-3 font-heading text-sm text-stone">
<a className="hover:text-white hover:-translate-y-[1px] transition-all w-fit" href="#back">Back Pain</a>
<a className="hover:text-white hover:-translate-y-[1px] transition-all w-fit" href="#shoulder">Shoulder Pain</a>
<a className="hover:text-white hover:-translate-y-[1px] transition-all w-fit" href="#knee">Knee Pain</a>
<a className="hover:text-white hover:-translate-y-[1px] transition-all w-fit" href="#headaches">Headaches</a>
<a className="hover:text-white hover:-translate-y-[1px] transition-all w-fit" href="#frozen">Frozen Shoulder</a>
</div>
</div>

<div className="flex flex-col opacity-0 translate-y-5 foot-col">
<span className="font-heading font-semibold text-[0.625rem] text-gold-rule tracking-[0.16em] mb-4 uppercase">INFO</span>
<div className="flex flex-col gap-3 font-heading text-sm text-stone">
<a className="hover:text-white hover:-translate-y-[1px] transition-all w-fit" href="#privacy">Privacy Policy</a>
<a className="hover:text-white hover:-translate-y-[1px] transition-all w-fit" href="#terms">Terms of Service</a>
</div>
<div className="w-full h-px bg-gold-rule/20 my-4"></div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-ember pulse-dot"></div>
<span className="font-heading text-[0.6875rem] text-stone tracking-[0.1em] uppercase">PRACTICE ACTIVE · SALT LAKE CITY, UT</span>
</div>
</div>
</div>
<div className="w-full h-px bg-gold-rule/10 my-8 opacity-0 translate-y-5 foot-col"></div>
<div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 opacity-0 translate-y-5 foot-col">
<p className="font-body text-[0.6875rem] text-stone/50 max-w-lg text-center md:text-left">
          Release Works does not diagnose, treat, or prescribe. The Release Works Method of Healing TMP is a movement restoration practice. Consult your physician for medical advice.
        </p>
<span className="font-heading text-[0.625rem] text-stone/30 tracking-[0.1em] text-center md:text-right uppercase">
          20 YEARS · TRADEMARKED METHOD · SALT LAKE CITY
        </span>
</div>
</div>
</footer>



    </>
  );
}
