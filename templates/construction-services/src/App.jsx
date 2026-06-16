import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag() {
dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-2M6V79H761");



        const tl = gsap.timeline();
        tl.to(".nav-item", { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }).from(".hero-reveal", { y: 100, opacity: 0, duration: 1.2, stagger: 0.1, ease: "power4.out" }, "-=0.8");

        const t = document.querySelectorAll(".glitch-target");
        let lX = 0,
          lY = 0,
          lT = 0;
        document.addEventListener("mousemove", (e) => {
          const now = Date.now(),
            dt = now - lT;
          if (dt > 30) {
            const dx = e.clientX - lX,
              dy = e.clientY - lY,
              s = Math.sqrt(dx * dx + dy * dy) / dt;
            if (s > 2.5) {
              t.forEach((el) => {
                if (!el.classList.contains("glitch-active")) {
                  el.classList.add("glitch-active");
                  setTimeout(() => el.classList.remove("glitch-active"), 250);
                }
              });
            }
            lX = e.clientX;
            lY = e.clientY;
            lT = now;
          }
        });
      


        (function () {
          const modal = document.getElementById("projectModal");
          const backdrop = document.getElementById("projectModalBackdrop");
          const closeBtn = document.getElementById("projectModalClose");
          const closeBtn2 = document.getElementById("modalSecondaryClose");
          const title = document.getElementById("modalTitle");
          const subtitle = document.getElementById("modalSubtitle");
          const image = document.getElementById("modalImage");

          const openModal = (data) => {
            title.textContent = data.title || "Project";
            subtitle.textContent = data.subtitle || "Details";
            image.src = data.image || "";
            image.alt = data.title ? data.title + " image" : "Project image";

            modal.classList.remove("hidden");
            document.body.classList.add("overflow-hidden");
          };

          const closeModal = () => {
            modal.classList.add("hidden");
            document.body.classList.remove("overflow-hidden");
          };

          document.querySelectorAll(".project-card").forEach((card) => {
            card.addEventListener("click", () => {
              openModal({
                title: card.getAttribute("data-project"),
                subtitle: card.getAttribute("data-subtitle"),
                image: card.getAttribute("data-image"),
              });
            });
          });

          backdrop.addEventListener("click", closeModal);
          closeBtn.addEventListener("click", closeModal);
          closeBtn2.addEventListener("click", closeModal);

          document.addEventListener("keydown", (e) => {
            if (!modal.classList.contains("hidden") && e.key === "Escape") closeModal();
          });
        })();
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="fixed z-50 transition-all duration-300 bg-black/80 backdrop-blur-md border-b border-white/10 top-0 right-0 left-0">
<div className="lg:px-8 flex w-full h-[72px] pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-10 lg:gap-12">
<a className="flex items-center gap-2.5 text-white hover:opacity-80 transition-opacity" href="#">
<div className="bg-white/10 p-1.5 rounded-lg border border-white/20 shadow-sm">
<svg className="lucide lucide-hexagon" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
</div>
<span className="font-semibold text-lg tracking-tight">IronGrid Build Co.</span>
</a>
<nav className="hidden lg:flex items-center gap-8">
<a className="hover:text-white transition-colors text-sm font-medium text-white/60" href="#services">Services</a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#process">Process</a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#why">Why Us</a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#projects">Projects</a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#safety">Safety</a>
</nav>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-6">
<button className="flex items-center gap-3 text-sm font-medium text-white/60 hover:text-white transition-colors bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-full">
<svg className="lucide lucide-search" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
<span>Search</span>
</button>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-white/60 hover:text-white transition-colors" href="#testimonials">Testimonials</a>
<a className="bg-white hover:bg-gray-200 text-black px-4 py-2 rounded-full text-sm font-semibold transition-colors shadow-sm whitespace-nowrap" href="#cta">Request a Bid</a>
</div>
</div>
</div>
</header>
<section className="overflow-hidden antialiased selection:bg-indigo-500 selection:text-white text-zinc-300 font-sans bg-black w-full h-screen relative">
<style>
        .font-serif {
          font-family: "Newsreader", serif;
        }
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
        }
        .glitch-target {
          will-change: transform, text-shadow;
          backface-visibility: hidden;
        }
        .glitch-active {
          animation: glitch-anim 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
        @keyframes glitch-anim {
          0% {
            transform: translate(0);
            text-shadow: none;
          }
          20% {
            transform: translate(-2px, 1px) skewX(-2deg);
            text-shadow: 2px 0 rgba(99, 102, 241, 0.3), -2px 0 rgba(255, 255, 255, 0.3);
          }
          40% {
            transform: translate(2px, -1px) skewX(2deg);
            text-shadow: -2px 0 rgba(99, 102, 241, 0.3), 2px 0 rgba(255, 255, 255, 0.3);
          }
          60% {
            transform: translate(-1px, 2px);
          }
          100% {
            transform: translate(0);
            text-shadow: none;
          }
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .btn-wrapper {
          position: relative;
          display: inline-block;
        }
        .btn {
          --border-radius: 9999px;
          --padding: 4px;
          --transition: 0.4s;
          --button-color: #000;
          --highlight-color-hue: 245deg;
          user-select: none;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--button-color);
          box-shadow: inset 0px 1px 1px rgba(255, 255, 255, 0.2), inset 0px 2px 2px rgba(255, 255, 255, 0.15), inset 0px 4px 4px rgba(255, 255, 255, 0.1),
            inset 0px 8px 8px rgba(255, 255, 255, 0.05), 0px -1px 1px rgba(0, 0, 0, 0.02), 0px -2px 2px rgba(0, 0, 0, 0.03);
          border: solid 1px rgba(255, 255, 255, 0.2);
          border-radius: var(--border-radius);
          cursor: pointer;
          transition: box-shadow var(--transition), border var(--transition), background-color var(--transition);
          padding: 1rem 2rem;
        }
        .btn::before {
          content: "";
          position: absolute;
          top: calc(0px - var(--padding));
          left: calc(0px - var(--padding));
          width: calc(100% + var(--padding) * 2);
          height: calc(100% + var(--padding) * 2);
          border-radius: calc(var(--border-radius) + var(--padding));
          pointer-events: none;
          background-image: linear-gradient(0deg, #0004, #000a);
          z-index: -1;
          transition: box-shadow var(--transition), filter var(--transition);
          box-shadow: 0 -8px 8px -6px #0000 inset, 0 -16px 16px -8px #00000000 inset, 1px 1px 1px #fff2, 2px 2px 2px #fff1, -1px -1px 1px #0002, -2px -2px 2px #0001;
        }
        .btn::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          background-image: linear-gradient(0deg, #fff, hsl(var(--highlight-color-hue), 100%, 70%), hsla(var(--highlight-color-hue), 100%, 70%, 50%), 8%, transparent);
          background-position: 0 0;
          opacity: 0;
          transition: opacity var(--transition), filter var(--transition);
        }
        .btn-letter {
          position: relative;
          display: inline-block;
          color: #ffffff90;
          font-family: "Inter", sans-serif;
          font-weight: 600;
          font-size: 0.875rem;
          letter-spacing: -0.025em;
          animation: letter-anim 2s ease-in-out infinite;
          transition: color var(--transition), text-shadow var(--transition), opacity var(--transition);
        }
        @keyframes letter-anim {
          50% {
            text-shadow: 0 0 3px #ffffff88;
            color: #fff;
          }
        }
        .btn-svg {
          flex-grow: 0;
          width: 18px;
          height: 18px;
          margin-left: 0.5rem;
          fill: none;
          stroke: #e8e8e8;
          stroke-width: 2;
          animation: flicker 2s linear infinite;
          animation-delay: 0.5s;
          filter: drop-shadow(0 0 2px #ffffff99);
          transition: stroke var(--transition), filter var(--transition), opacity var(--transition);
        }
        @keyframes flicker {
          50% {
            opacity: 0.3;
          }
        }
        .txt-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          height: 20px;
        }
        .txt-1 {
          display: flex;
          align-items: center;
          gap: 1px;
        }
        .btn:hover {
          border: solid 1px hsla(var(--highlight-color-hue), 100%, 80%, 0.4);
        }
        .btn:hover::before {
          box-shadow: 0 -8px 8px -6px #fffa inset, 0 -16px 16px -8px hsla(var(--highlight-color-hue), 100%, 70%, 0.3) inset, 1px 1px 1px #fff2, 2px 2px 2px #fff1, -1px -1px 1px #0002, -2px -2px 2px #0001;
        }
        .btn:hover::after {
          opacity: 1;
        }
        .btn:hover .btn-svg {
          stroke: #fff;
          filter: drop-shadow(0 0 3px hsl(var(--highlight-color-hue), 100%, 70%)) drop-shadow(0 -4px 6px #0009);
          animation: none;
        }
        .btn-letter:nth-child(1) {
          animation-delay: 0s;
        }
        .btn-letter:nth-child(2) {
          animation-delay: 0.05s;
        }
        .btn-letter:nth-child(3) {
          animation-delay: 0.1s;
        }
        .btn-letter:nth-child(4) {
          animation-delay: 0.15s;
        }
        .btn-letter:nth-child(5) {
          animation-delay: 0.2s;
        }
        .btn-letter:nth-child(6) {
          animation-delay: 0.25s;
        }
        .btn-letter:nth-child(7) {
          animation-delay: 0.3s;
        }
        .btn-letter:nth-child(8) {
          animation-delay: 0.35s;
        }
        .btn-letter:nth-child(9) {
          animation-delay: 0.4s;
        }
        .btn-letter:nth-child(10) {
          animation-delay: 0.45s;
        }
        .btn-letter:nth-child(11) {
          animation-delay: 0.5s;
        }
        .btn-letter:nth-child(12) {
          animation-delay: 0.55s;
        }
        .btn-letter:nth-child(13) {
          animation-delay: 0.6s;
        }
        .btn-letter:nth-child(14) {
          animation-delay: 0.65s;
        }
        .btn-letter:nth-child(15) {
          animation-delay: 0.7s;
        }
        .btn-letter:nth-child(16) {
          animation-delay: 0.75s;
        }
        .btn-letter:nth-child(17) {
          animation-delay: 0.8s;
        }
        .btn-letter:nth-child(18) {
          animation-delay: 0.85s;
        }
        .btn-letter:nth-child(19) {
          animation-delay: 0.9s;
        }
        .btn-letter:nth-child(20) {
          animation-delay: 0.95s;
        }
      </style>

<div className="absolute inset-0 z-0">

<div className="absolute inset-0">
<img alt="Construction site background" className="w-full h-full object-cover scale-110 blur-2xl opacity-45" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&amp;fit=crop&amp;w=2400&amp;q=80"/>
<div className="absolute inset-0 bg-black/40"></div>
</div>
<video autoplay="" className="w-full h-full object-cover opacity-70" loop="" muted="" playsinline="" preload="metadata">
<source src="https://elevenlabs.io/app/image-video?generationId=PEUeqjw49lYWRjOXkPi7" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-black/55"></div>
<div className="absolute inset-0 opacity-[0.22] mix-blend-screen pointer-events-none" style="
            background-image:
              linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px);
            background-size: 4rem 4rem;
          "></div>
<div className="absolute inset-0 opacity-[0.25] pointer-events-none" style={{background: 'radial-gradient(circle at 50% 20%, rgba(99,102,241,0.18), transparent 55%)'}}></div>
</div>
<div className="z-10 flex flex-col pointer-events-none h-full relative">
<header className="w-full px-6 py-6 flex justify-between items-center pointer-events-auto opacity-0 nav-item">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-black/50 backdrop-blur-md group-hover:border-indigo-500/50 transition-colors duration-300">
<iconify-icon className="text-indigo-400 text-xl transition-transform group-hover:rotate-90" icon="solar:widget-5-linear"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-white group-hover:text-indigo-400 transition-colors glitch-target"> IronGrid Build Co. </span>
</div>
<nav className="hidden md:flex items-center gap-1 glass-panel p-1 rounded-full">
<a className="px-5 py-2 rounded-full hover:bg-white/5 text-zinc-400 hover:text-white transition-colors text-xs font-medium uppercase tracking-wider" href="#services">Services</a>
<a className="px-5 py-2 rounded-full hover:bg-white/5 text-zinc-400 hover:text-white transition-colors text-xs font-medium uppercase tracking-wider" href="#process">Process</a>
<a className="px-5 py-2 rounded-full hover:bg-white/5 text-zinc-400 hover:text-white transition-colors text-xs font-medium uppercase tracking-wider" href="#projects">Projects</a>
</nav>
<a className="group flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full bg-black/20 backdrop-blur-sm hover:border-indigo-500/30 hover:bg-indigo-500/10 transition-all duration-300" href="#cta">
<span className="text-xs font-medium text-white group-hover:text-indigo-400">Request a Bid</span>
<iconify-icon className="text-indigo-400 group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</header>
<main className="flex-grow flex flex-col justify-center px-6 md:px-12 lg:px-24 pointer-events-none">
<div className="max-w-5xl space-y-8">
<div className="overflow-hidden">
<div className="hero-reveal flex items-center gap-3">
<span className="flex h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)]"></span>
<p className="text-xs md:text-sm uppercase tracking-[0.2em] text-indigo-400/80 font-medium font-mono">Built to Last. Engineered to Deliver.</p>
</div>
</div>
<div className="space-y-0">
<div className="overflow-hidden">
<h1 className="hero-reveal text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.95] text-white glitch-target mix-blend-difference">Built to Last.</h1>
</div>
<div className="overflow-hidden">
<h1 className="hero-reveal text-5xl md:text-7xl lg:text-8xl font-serif italic font-light tracking-tight leading-[0.95] text-indigo-200/90 glitch-target">Engineered to Deliver.</h1>
</div>
</div>
<div className="overflow-hidden max-w-xl">
<p className="hero-reveal text-sm md:text-lg text-zinc-300/90 leading-relaxed font-light">
                From commercial ground-up builds to precision residential construction, we deliver on time, on budget, without compromise.
                <span className="text-indigo-200/70 text-xs block mt-2 font-mono uppercase tracking-widest opacity-80">&gt; Request a bid to get started</span>
</p>
</div>
<div className="overflow-hidden pt-6">
<div className="hero-reveal flex flex-wrap pointer-events-auto pt-4 pr-1 pb-4 pl-1 gap-x-4 gap-y-4">
<div className="btn-wrapper">
<a aria-label="Request a Bid" className="btn" href="#cta">
<div className="txt-wrapper">
<div className="txt-1">
<span className="btn-letter">R</span><span className="btn-letter">e</span><span className="btn-letter">q</span><span className="btn-letter">u</span><span className="btn-letter">e</span><span className="btn-letter">s</span><span className="btn-letter">t</span>
<span className="btn-letter" style={{width: '4px'}}></span>
<span className="btn-letter">a</span>
<span className="btn-letter" style={{width: '4px'}}></span>
<span className="btn-letter">B</span><span className="btn-letter">i</span><span className="btn-letter">d</span>
</div>
</div>
<svg className="btn-svg" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</a>
</div>
<a className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(99,102,241,0.2)] h-[54px] rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center pointer-events-auto" href="#projects">
<span className="animate-[spin_4s_linear_infinite] transition-opacity duration-300 group-hover:opacity-100 opacity-0 absolute top-[-150%] left-[-150%] w-[400%] h-[400%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#6366f1_100%)]"></span>
<span className="absolute inset-0 rounded-full bg-white/10 transition-opacity duration-300 group-hover:opacity-0"></span>
<span className="flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-indigo-200 text-sm font-medium text-white tracking-tight bg-zinc-950 w-full h-full rounded-full pr-8 pl-8 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
<span className="relative z-10">View Projects</span>
<iconify-icon className="relative z-10 text-zinc-400 group-hover:text-indigo-200 transition-colors" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>
</a>
</div>
</div>
</div>
</main>
<footer className="pointer-events-auto nav-item flex justify-between items-end w-full px-6 pb-8 opacity-0">
<div className="flex flex-col gap-1">
<span className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold">Company</span>
<span className="text-xs font-mono text-indigo-200">IronGrid Build Co.</span>
</div>
<div className="hidden md:flex gap-4">
<iconify-icon className="text-zinc-400 hover:text-white transition-colors text-xl" icon="solar:phone-calling-linear"></iconify-icon>
<iconify-icon className="text-zinc-400 hover:text-white transition-colors text-xl" icon="solar:map-point-linear"></iconify-icon>
<iconify-icon className="text-zinc-400 hover:text-white transition-colors text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
</footer>
</div>
<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-[5] pointer-events-none"></div>


</section>
<div className="min-h-screen flex flex-col lg:flex-row lg:p-6 gap-6 lg:pt-24 pt-24 pr-4 pb-4 pl-4 gap-x-6 gap-y-6" id="services">
<div className="lg:w-5/12 flex flex-col lg:pl-10 lg:pr-12 w-full pt-10 pr-2 pb-10 pl-2 justify-center">
<div className="flex items-center space-x-3 mb-10">
<div className="border font-medium px-3 py-1 rounded-full text-sm tracking-tight flex items-center gap-2 bg-indigo-100 text-indigo-700 border-indigo-200">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-indigo-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
            Services
          </div>
</div>
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.1] mb-6">What We Build</h1>
<p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-lg">Every project begins with structural integrity and ends with long-term performance.</p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
<button className="group relative overflow-hidden rounded-full bg-white border border-gray-200 p-1 pr-6 transition-all hover:border-gray-300 hover:shadow-md">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 shadow-sm transition-transform group-hover:scale-105">
<iconify-icon className="text-gray-700 text-lg" icon="solar:document-text-linear"></iconify-icon>
</div>
<span className="font-medium text-gray-700 text-base">Request a Bid</span>
</div>
</button>
<button className="group relative overflow-hidden rounded-full p-1 pr-6 transition-all shadow-lg bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/20">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-transform group-hover:scale-105">
<iconify-icon className="text-white text-lg" icon="solar:gallery-linear"></iconify-icon>
</div>
<span className="font-medium text-white text-base">View Projects</span>
</div>
</button>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Services</h3>
<div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 w-full max-w-md">
<div className="grid grid-cols-1 gap-4">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center text-gray-700 font-semibold text-sm key-shadow select-none">01</div>
<span className="text-gray-600 font-medium text-sm">Commercial Development</span>
</div>
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center text-gray-700 font-semibold text-sm key-shadow select-none">02</div>
<span className="text-gray-600 font-medium text-sm">Industrial Facilities</span>
</div>
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center text-gray-700 font-semibold text-sm key-shadow select-none">03</div>
<span className="text-gray-600 font-medium text-sm">Residential Projects</span>
</div>
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center text-gray-700 font-semibold text-sm key-shadow select-none">04</div>
<span className="text-gray-600 font-medium text-sm">Structural Renovations</span>
</div>
</div>
</div>
</div>
</div>
<div className="lg:w-7/12 min-h-[500px] lg:min-h-full overflow-hidden w-full ring-black/5 ring-1 rounded-[32px] relative shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-800"></div>
<div className="absolute top-0 right-0 p-6 z-20 flex items-center gap-4">
<span className="text-white/60 text-xs font-medium tracking-wide uppercase">Active Projects</span>
<div className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
</div>
<div className="flex lg:p-12 z-10 overflow-hidden pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="aspect-[4/3] group overflow-hidden bg-[#0B0C0E] w-full h-full max-w-4xl max-h-[90%] ring-white/10 ring-1 rounded-2xl relative shadow-2xl">
<img alt="Construction site" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/10"></div>
<div className="flex absolute right-6 bottom-6 left-6 items-end justify-between pointer-events-none z-10">
<div className="bg-black/40 backdrop-blur-md border border-white/10 p-3 rounded-xl flex gap-4 text-white shadow-xl pointer-events-auto">
<div className="flex flex-col px-2">
<span className="text-[10px] uppercase opacity-70 font-semibold tracking-wider text-indigo-200">Timeline</span>
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)] animate-pulse"></span>
<span className="text-sm font-semibold">On Track</span>
</div>
</div>
<div className="w-px bg-white/10"></div>
<div className="flex flex-col px-2">
<span className="text-[10px] uppercase opacity-70 font-semibold tracking-wider text-indigo-200">Build Type</span>
<span className="text-sm font-semibold">Commercial</span>
</div>
</div>
<div className="flex flex-col gap-2 pointer-events-auto">
<div className="bg-black/40 backdrop-blur-md border border-white/10 p-2 rounded-lg text-white shadow-xl">
<div className="w-8 h-8 flex items-center justify-center rounded-md bg-white/5 hover:bg-white/10 transition-colors cursor-pointer text-indigo-200">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<section className="border-y overflow-hidden bg-[#0B0C0E] border-white/5 pt-24 pb-24 relative" id="process">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] blur-[120px] rounded-full pointer-events-none bg-indigo-600/10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl mb-20">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-6">Our 4-Step Build Framework</h2>
<p className="text-lg text-gray-400 leading-relaxed">Clear timelines. Transparent communication. No surprises.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="group relative flex flex-col h-full">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-indigo-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="pt-6 pb-8 pr-6">
<span className="block text-xs font-mono mb-4 text-indigo-400">01</span>
<h3 className="text-lg font-medium text-white mb-3">Discovery &amp; Feasibility</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-8">Scope, schedule, and budget validation with early risk identification.</p>
<div className="h-32 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-4 relative overflow-hidden group-hover:bg-white/10 transition-colors">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(124,58,237,0.1),transparent)]"></div>
<div className="w-10 h-10 rounded-lg bg-[#1E1E1E] flex items-center justify-center border border-white/10 shadow-lg z-10">
<iconify-icon className="text-indigo-300" icon="solar:clipboard-text-linear" width="20"></iconify-icon>
</div>
<div className="w-16 h-px bg-white/20 z-0"></div>
<div className="w-10 h-10 rounded-lg bg-[#1E1E1E] flex items-center justify-center border border-white/10 shadow-lg z-10">
<iconify-icon className="text-xl text-indigo-300" icon="solar:chart-square-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="group relative flex flex-col h-full">
<div className="absolute top-0 left-0 w-full h-px bg-white/10 transition-colors group-hover:bg-indigo-500/50"></div>
<div className="pt-6 pb-8 pr-6">
<span className="block text-xs font-mono text-gray-600 transition-colors mb-4 group-hover:text-indigo-400">02</span>
<h3 className="text-lg font-medium text-white mb-3">Architectural Alignment</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-8">We coordinate architects, engineers, and trades for smooth execution.</p>
<div className="h-32 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center px-6 gap-3 relative overflow-hidden group-hover:bg-white/10 transition-colors">
<div className="flex items-center justify-between">
<div className="h-2 w-12 bg-white/10 rounded-full"></div>
<div className="w-8 h-4 rounded-full relative bg-indigo-600">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
</div>
</div>
<div className="flex items-center justify-between opacity-50">
<div className="h-2 w-16 bg-white/10 rounded-full"></div>
<div className="w-8 h-4 bg-gray-600 rounded-full relative">
<div className="absolute left-0.5 top-0.5 w-3 h-3 bg-gray-300 rounded-full shadow-sm"></div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="h-2 w-10 bg-white/10 rounded-full"></div>
<div className="w-8 h-4 rounded-full relative bg-indigo-600">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
</div>
</div>
</div>
</div>
</div>
<div className="group relative flex flex-col h-full">
<div className="absolute top-0 left-0 w-full h-px bg-white/10 transition-colors group-hover:bg-indigo-500/50"></div>
<div className="pt-6 pb-8 pr-6">
<span className="block text-xs font-mono text-gray-600 transition-colors mb-4 group-hover:text-indigo-400">03</span>
<h3 className="text-lg font-medium text-white mb-3">Precision Construction</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-8">Field execution led by seasoned foremen, documented at every milestone.</p>
<div className="h-32 rounded-xl bg-gray-900 border border-white/10 relative overflow-hidden transition-colors group-hover:border-indigo-500/30">
<img alt="Construction work" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all shadow-xl group-hover:bg-indigo-500 group-hover:border-indigo-400">
<iconify-icon className="text-xl" icon="solar:hammer-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
<div className="group relative flex flex-col h-full">
<div className="absolute top-0 left-0 w-full h-px bg-white/10 transition-colors group-hover:bg-indigo-500/50"></div>
<div className="pt-6 pb-8 pr-6">
<span className="block text-xs font-mono text-gray-600 transition-colors mb-4 group-hover:text-indigo-400">04</span>
<h3 className="text-lg font-medium text-white mb-3">Final Inspection &amp; Handoff</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-8">Punch lists closed, documentation delivered, and a clean turnover.</p>
<div className="h-32 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden p-3 group-hover:bg-white/10 transition-colors">
<div className="h-full w-full rounded-lg border border-white/10 bg-black/20 flex items-center justify-center">
<div className="flex items-center gap-2 text-indigo-200">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Inspection Complete</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="border-y bg-white border-gray-100 pt-24 pb-24 relative overflow-hidden" id="why">
<div className="absolute inset-0 pointer-events-none opacity-[0.45]" style="
          background-image:
            linear-gradient(to right, rgba(17,24,39,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(17,24,39,0.05) 1px, transparent 1px);
          background-size: 4rem 4rem;
        "></div>
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(circle at 50% 0%, rgba(99,102,241,0.10), transparent 55%)'}}></div>
<div className="max-w-7xl mx-auto px-6 relative">

<div className="mb-16">
<div className="rounded-3xl overflow-hidden border border-gray-100 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] relative">
<div className="aspect-[16/7] sm:aspect-[16/6] bg-gray-900 relative">
<img alt="Construction site banner" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&amp;fit=crop&amp;w=2400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 via-gray-950/45 to-transparent"></div>
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(circle at 20% 40%, rgba(99,102,241,0.25), transparent 55%)'}}></div>
<div className="absolute inset-0 flex items-end sm:items-center">
<div className="px-6 sm:px-10 py-8 sm:py-0 max-w-3xl">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md px-3 py-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.6)]"></span>
<span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/80">Why Choose Us</span>
</div>
<h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.05]">
                    Built for disciplined delivery—<span className="text-indigo-200">from first pour to final closeout.</span>
</h2>
<p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed max-w-2xl">
                    Strong PM ownership, safety-first operations, and craftsmanship you can verify on site.
                  </p>
<div className="mt-6 flex flex-wrap gap-3">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1.5">
<iconify-icon className="text-indigo-200" icon="solar:shield-check-linear" width="18"></iconify-icon>
<span className="text-xs font-medium text-white/80">OSHA-aligned sites</span>
</div>
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1.5">
<iconify-icon className="text-indigo-200" icon="solar:calendar-linear" width="18"></iconify-icon>
<span className="text-xs font-medium text-white/80">Schedule discipline</span>
</div>
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1.5">
<iconify-icon className="text-indigo-200" icon="solar:document-text-linear" width="18"></iconify-icon>
<span className="text-xs font-medium text-white/80">Clean documentation</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-4">Why Choose Us</h2>
<p className="text-lg text-gray-500">Built on accountability, craftsmanship, and jobsite discipline.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="hover:shadow-lg transition-all group hover:border-indigo-100 hover:shadow-indigo-500/5 border-gray-100 rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-indigo-50">
<iconify-icon className="text-gray-600 text-2xl group-hover:text-indigo-600" icon="solar:calendar-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">25+ Years Experience</h3>
<p className="text-gray-500 text-sm leading-relaxed">Decades of field-proven delivery across commercial, industrial, and residential builds.</p>
</div>
<div className="hover:shadow-lg transition-all group hover:border-indigo-100 hover:shadow-indigo-500/5 border-gray-100 rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-indigo-50">
<iconify-icon className="text-gray-600 text-2xl group-hover:text-indigo-600" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Licensed &amp; Insured</h3>
<p className="text-gray-500 text-sm leading-relaxed">Fully compliant coverage and documented safety practices to protect your investment.</p>
</div>
<div className="hover:shadow-lg transition-all group hover:border-indigo-100 hover:shadow-indigo-500/5 border-gray-100 rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-indigo-50">
<iconify-icon className="text-gray-600 text-2xl group-hover:text-indigo-600" icon="solar:user-id-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Dedicated Project Managers</h3>
<p className="text-gray-500 text-sm leading-relaxed">One accountable point of contact for schedule, budget, and coordination.</p>
</div>
<div className="hover:shadow-lg transition-all group hover:border-indigo-100 hover:shadow-indigo-500/5 border-gray-100 rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-indigo-50">
<iconify-icon className="text-gray-600 text-2xl group-hover:text-indigo-600" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Zero Missed Deadlines</h3>
<p className="text-gray-500 text-sm leading-relaxed">Sequenced trades, daily tracking, and proactive mitigation keep builds moving.</p>
</div>
</div>
</div>
</section>
<section className="overflow-hidden bg-[#0B0C0E] border-white/5 border-b pt-24 pb-24 relative" id="projects">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-6">Featured Projects</h2>
<p className="text-lg text-gray-400 leading-relaxed">A selection of recent builds across commercial and industrial scopes.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<button className="project-card text-left group rounded-3xl overflow-hidden bg-white/5 border border-white/10 relative focus:outline-none focus:ring-2 focus:ring-indigo-500/60" data-image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&amp;fit=crop&amp;w=2000&amp;q=80" data-project="Commercial Shell Build" data-subtitle="Structural steel + envelope coordination" type="button">
<img alt="Commercial construction shell" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="p-6">
<div className="text-sm font-semibold text-white tracking-tight">Commercial Shell Build</div>
<div className="text-xs text-gray-400 mt-1">Structural steel + envelope coordination</div>
</div>
</button>
<button className="project-card text-left group rounded-3xl overflow-hidden bg-white/5 border border-white/10 relative focus:outline-none focus:ring-2 focus:ring-indigo-500/60" data-image="https://images.unsplash.com/photo-1581092919535-7146cce7f93a?auto=format&amp;fit=crop&amp;w=2000&amp;q=80" data-project="Industrial Retrofit" data-subtitle="Phased work to keep operations live" type="button">
<img alt="Industrial facility construction" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1581092919535-7146cce7f93a?auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="p-6">
<div className="text-sm font-semibold text-white tracking-tight">Industrial Retrofit</div>
<div className="text-xs text-gray-400 mt-1">Phased work to keep operations live</div>
</div>
</button>
<button className="project-card text-left group rounded-3xl overflow-hidden bg-white/5 border border-white/10 relative focus:outline-none focus:ring-2 focus:ring-indigo-500/60" data-image="https://images.unsplash.com/photo-1590642911601-7627a8c0c53a?auto=format&amp;fit=crop&amp;w=2000&amp;q=80" data-project="Concrete &amp; Foundations" data-subtitle="Surveyed layout, pours, and QA" type="button">
<img alt="Concrete foundation work" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1590642911601-7627a8c0c53a?auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="p-6">
<div className="text-sm font-semibold text-white tracking-tight">Concrete &amp; Foundations</div>
<div className="text-xs text-gray-400 mt-1">Surveyed layout, pours, and QA</div>
</div>
</button>
<button className="project-card text-left group rounded-3xl overflow-hidden bg-white/5 border border-white/10 relative sm:col-span-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/60" data-image="https://images.unsplash.com/photo-1523413455855-6a70f48f0f0f?auto=format&amp;fit=crop&amp;w=2000&amp;q=80" data-project="Steel Erection" data-subtitle="Lift plans, bolts, and tolerances" type="button">
<img alt="Steel erection crane work" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1523413455855-6a70f48f0f0f?auto=format&amp;fit=crop&amp;w=2400&amp;q=80"/>
<div className="p-6">
<div className="text-sm font-semibold text-white tracking-tight">Steel Erection</div>
<div className="text-xs text-gray-400 mt-1">Lift plans, bolts, and tolerances</div>
</div>
</button>
<button className="project-card text-left group rounded-3xl overflow-hidden bg-white/5 border border-white/10 relative focus:outline-none focus:ring-2 focus:ring-indigo-500/60" data-image="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&amp;fit=crop&amp;w=2000&amp;q=80" data-project="Interior Build-Out" data-subtitle="MEP rough-in, finishes, closeout" type="button">
<img alt="Interior construction" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="p-6">
<div className="text-sm font-semibold text-white tracking-tight">Interior Build-Out</div>
<div className="text-xs text-gray-400 mt-1">MEP rough-in, finishes, closeout</div>
</div>
</button>
</div>
</div>
<div className="fixed inset-0 z-[100] hidden" id="projectModal">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm" id="projectModalBackdrop"></div>
<div className="absolute inset-0 overflow-y-auto">
<div className="min-h-full flex items-end sm:items-center justify-center p-4">
<div className="w-full max-w-4xl rounded-3xl bg-[#0B0C0E] border border-white/10 shadow-2xl overflow-hidden relative">
<div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10">
<div className="min-w-0">
<div className="text-white font-semibold tracking-tight text-lg sm:text-xl" id="modalTitle">Project</div>
<div className="text-xs text-gray-400 mt-1" id="modalSubtitle">Details</div>
</div>
<button aria-label="Close" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white transition-colors" id="projectModalClose" type="button">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5">
<div className="lg:col-span-3 relative">
<div className="aspect-[16/10] bg-black">
<img alt="Project image" className="w-full h-full object-cover opacity-90" id="modalImage" src=""/>
</div>
<div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/55 via-transparent to-transparent"></div>
</div>
<div className="lg:col-span-2 p-5 sm:p-6">
<div className="rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5">
<div className="flex items-center justify-between">
<div className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Default Material</div>
<div className="text-[10px] text-indigo-200 font-mono uppercase tracking-widest">Inner Project Page</div>
</div>
<div className="mt-4 space-y-4">
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-200">
<iconify-icon icon="solar:layers-linear" width="20"></iconify-icon>
</div>
<div className="min-w-0">
<div className="text-sm font-semibold text-white tracking-tight">Scope</div>
<div className="text-xs text-gray-400 leading-relaxed mt-1">Structural, envelope, and trade coordination with documented milestones.</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-200">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div className="min-w-0">
<div className="text-sm font-semibold text-white tracking-tight">Schedule</div>
<div className="text-xs text-gray-400 leading-relaxed mt-1">Sequenced phases with QA checks and proactive constraint removal.</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-200">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div className="min-w-0">
<div className="text-sm font-semibold text-white tracking-tight">Safety</div>
<div className="text-xs text-gray-400 leading-relaxed mt-1">Daily briefings, site controls, and inspection-ready documentation.</div>
</div>
</div>
<div className="pt-2 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-5 py-2.5 shadow-lg shadow-indigo-500/20 transition-colors" href="#cta">
                          Request a Bid
                        </a>
<button className="inline-flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold px-5 py-2.5 transition-colors" id="modalSecondaryClose" type="button">
                          Back to Projects
                        </button>
</div>
</div>
</div>
<div className="mt-4 text-[10px] uppercase tracking-widest text-gray-500">
                    Tip: Press <span className="text-gray-300 font-mono">Esc</span> to close
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>

</section>
<section className="overflow-hidden bg-[#0B0C0E] border-white/5 border-b pt-24 pb-24 relative" id="safety">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] blur-[120px] rounded-full pointer-events-none bg-indigo-600/5"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-6">Safety &amp; Compliance</h2>
<p className="text-lg text-gray-400 leading-relaxed">We run OSHA-aligned sites with certified crews, documented daily safety practices, and clear accountability from foreman to PM.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="rounded-3xl bg-white/5 border border-white/10 p-8">
<div className="w-12 h-12 rounded-2xl bg-[#0B0C0E] border border-white/10 flex items-center justify-center mb-6 shadow-xl text-indigo-300">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">OSHA-Driven Practices</h3>
<p className="text-sm text-gray-400 leading-relaxed">Toolbox talks, hazard assessments, and jobsite controls baked into the schedule.</p>
</div>
<div className="rounded-3xl bg-white/5 border border-white/10 p-8">
<div className="w-12 h-12 rounded-2xl bg-[#0B0C0E] border border-white/10 flex items-center justify-center mb-6 shadow-xl text-indigo-300">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Certified Crews</h3>
<p className="text-sm text-gray-400 leading-relaxed">Qualified operators and trained personnel across structural, mechanical, and finish work.</p>
</div>
<div className="rounded-3xl bg-white/5 border border-white/10 p-8">
<div className="w-12 h-12 rounded-2xl bg-[#0B0C0E] border border-white/10 flex items-center justify-center mb-6 shadow-xl text-indigo-300">
<iconify-icon icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Documented Compliance</h3>
<p className="text-sm text-gray-400 leading-relaxed">Inspections, logs, and closeout documentation delivered clean and complete.</p>
</div>
</div>
</div>
</section>
<section className="bg-gray-50 pt-24 pb-24" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-12 text-center">Testimonials</h2>
<div className="columns-1 md:columns-3 space-y-6 gap-x-6 gap-y-6">
<div className="hover:shadow-lg transition-all group hover:border-indigo-100 hover:shadow-indigo-500/5 rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0), rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0))', -BorderRadiusBefore: '16px'}}>
<p className="text-gray-600 text-sm leading-relaxed mb-6">
              “IronGrid kept our schedule tight and our change orders clean. Communication was consistent, and the jobsite was managed professionally from day one.”
            </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs">RM</div>
<div>
<div className="text-sm font-medium text-gray-900">Renee M.</div>
<div className="text-xs text-gray-500">Commercial Owner Rep</div>
</div>
</div>
</div>
<div className="hover:shadow-lg transition-all group hover:border-indigo-100 hover:shadow-indigo-500/5 rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0), rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0))', -BorderRadiusBefore: '16px'}}>
<p className="text-gray-600 text-sm leading-relaxed mb-6">“Their foremen ran a safe site, and the workmanship is exactly what we were looking for—straight lines, tight tolerances, and a clean handoff.”</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">JL</div>
<div>
<div className="text-sm font-medium text-gray-900">Jordan L.</div>
<div className="text-xs text-gray-500">Facility Operations</div>
</div>
</div>
</div>
<div className="hover:shadow-lg transition-all group hover:border-indigo-100 hover:shadow-indigo-500/5 rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0), rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0))', -BorderRadiusBefore: '16px'}}>
<p className="text-gray-600 text-sm leading-relaxed mb-6">“Budget stayed disciplined, and the team stayed ahead of issues before they became delays. IronGrid is built for real delivery.”</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs">DS</div>
<div>
<div className="text-sm font-medium text-gray-900">Daniel S.</div>
<div className="text-xs text-gray-500">Residential Client</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-white border-gray-100 border-t pt-24 pb-24" id="cta">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-4">Ready to Break Ground?</h2>
<p className="text-lg text-gray-500 leading-relaxed mb-10">Tell us about your project scope and timeline — we’ll respond with next steps and a clear path forward.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-8 py-3 shadow-lg shadow-indigo-500/20 transition-colors" href="#">Schedule Consultation</a>
<a className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 ring-1 ring-inset ring-gray-200 hover:bg-gray-50 hover:ring-gray-300 text-sm font-semibold px-8 py-3 transition-all shadow-sm" href="#projects">View Projects</a>
</div>
</div>
</div>
</section>
<footer className="bg-white border-gray-200 border-t pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 bg-gray-900 rounded text-white flex items-center justify-center">
<iconify-icon icon="solar:box-minimalistic-linear" width="14"></iconify-icon>
</div>
<span className="font-semibold text-gray-900">IronGrid Build Co.</span>
</a>
<p className="text-sm text-gray-500 max-w-xs mb-6">Built to last. Engineered to deliver — commercial, industrial, and residential construction with disciplined execution.</p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="transition-colors hover:text-indigo-600" href="#why">Why Us</a></li>
<li><a className="transition-colors hover:text-indigo-600" href="#safety">Safety</a></li>
<li><a className="transition-colors hover:text-indigo-600" href="#testimonials">Testimonials</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-4 text-sm">Services</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="transition-colors hover:text-indigo-600" href="#services">Commercial</a></li>
<li><a className="transition-colors hover:text-indigo-600" href="#services">Industrial</a></li>
<li><a className="transition-colors hover:text-indigo-600" href="#services">Residential</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-4 text-sm">Get Started</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="transition-colors hover:text-indigo-600" href="#cta">Schedule Consultation</a></li>
<li><a className="transition-colors hover:text-indigo-600" href="#cta">Request a Bid</a></li>
<li><a className="transition-colors hover:text-indigo-600" href="#projects">View Projects</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-xs text-gray-400">© 2026 IronGrid Build Co. All rights reserved.</span>
<div className="flex gap-6 text-xs text-gray-400">
<a className="hover:text-gray-600" href="#">Privacy Policy</a>
<a className="hover:text-gray-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
