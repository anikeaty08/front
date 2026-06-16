import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Animate in sequence: nav, cards, hero
    window.addEventListener('DOMContentLoaded', () => {
      const steps = [
        { selector: '#nav-anim', delay: 0 },
        { selector: '#cards-anim', delay: 350 },
        { selector: '#hero-anim', delay: 700 },
      ];
      steps.forEach(({selector, delay}) => {
        setTimeout(() => {
          const el = document.querySelector(selector);
          if (el) {
            el.classList.add('animate-in');
            el.classList.remove('opacity-0', 'blur-md', 'translate-y-8');
          }
        }, delay);
      });

      // Card Tilt Effect
      function clamp(num, min, max) { return Math.max(min, Math.min(num, max)); }
      document.querySelectorAll('.card-tilt').forEach(card => {
        let initialTransform = card.style.transform;
        card.addEventListener('pointermove', e => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const maxTilt = 13;
          const tiltX = clamp(((y - centerY) / centerY) * maxTilt, -maxTilt, maxTilt);
          const tiltY = clamp(((x - centerX) / centerX) * -maxTilt, -maxTilt, maxTilt);
          card.style.transition = 'transform 0.12s cubic-bezier(.22,1,.36,1)';
          card.style.transform = `${initialTransform} scale(1.045) perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        });
        card.addEventListener('pointerleave', () => {
          card.style.transition = 'transform 0.35s cubic-bezier(.22,1,.36,1)';
          card.style.transform = initialTransform;
        });
        card.addEventListener('pointerenter', () => {
          card.style.transition = 'transform 0.18s cubic-bezier(.22,1,.36,1)';
        });
        card.addEventListener('focus', () => {
          card.style.transition = 'transform 0.15s cubic-bezier(.22,1,.36,1)';
          card.style.transform = `${initialTransform} scale(1.045)`;
        });
        card.addEventListener('blur', () => {
          card.style.transition = 'transform 0.35s cubic-bezier(.22,1,.36,1)';
          card.style.transform = initialTransform;
        });
      });
      if (window.lucide) lucide.createIcons();
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="w-full relative z-20 py-6 px-6 lg:px-12 flex items-center justify-between" id="nav-anim">
<div className="flex flex-1 items-center min-w-0">
<a className="flex items-center space-x-2 select-none" href="#">
<span className="text-lg font-semibold tracking-tight text-white ml-2">DesignCode</span>
</a>
</div>
<div className="flex flex-1 justify-center">
<ul className="hidden md:flex space-x-8 text-sm text-slate-200 font-medium">
<li><a className="hover:text-white transition" href="#">Courses</a></li>
<li><a className="hover:text-white transition" href="#">Community</a></li>
<li><a className="hover:text-white transition" href="#">Resources</a></li>
</ul>
</div>
<div className="flex flex-1 items-center justify-end space-x-4">
<a className="px-5 py-2 rounded-lg border border-slate-600 text-slate-100 bg-white/5 font-medium text-sm hover:bg-white/10 transition shadow-sm" href="#">Sign In</a>
<a className="px-5 py-2 rounded-lg font-medium text-sm text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 glow hover:brightness-110 transition shadow-lg" href="#">Get Started</a>
</div>
</nav>

<div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center z-0">
<div className="w-[900px] h-[450px] rounded-full bg-gradient-radial from-indigo-400/30 via-purple-500/10 to-transparent blur-3xl opacity-70"></div>
</div>

<main className="relative z-10 flex flex-col flex-1 pt-0 pb-20 items-center justify-center">
<div className="relative flex h-[400px] sm:h-[430px] mt-10 items-center justify-center" id="cards-anim">

<div className="pointer-events-none absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 w-[510px] h-[320px] sm:w-[570px] sm:h-[370px]">
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[180px] rounded-full bg-gradient-radial from-purple-400/40 via-indigo-500/20 to-transparent blur-2xl opacity-80"></div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-[180px] bg-gradient-to-b from-white/60 via-indigo-400/40 to-transparent blur-2xl opacity-50 rotate-[14deg]"></div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-[120px] bg-gradient-to-tr from-purple-400/60 via-white/20 to-transparent blur-2xl opacity-40 -rotate-[23deg]"></div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-[100px] bg-gradient-to-br from-indigo-300/40 via-white/10 to-transparent blur-2xl opacity-40 rotate-[28deg]"></div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[230px] ring-2 ring-indigo-400/20 rounded-2xl blur-md opacity-70"></div>
</div>

<div className="relative z-50 flex flex-row items-start justify-center w-full md:w-[1200px] md:flex-nowrap md:items-center md:justify-center md:h-[270px]">

<div className="relative z-10 card-tilt card-glass w-[380px] h-[240px] flex flex-col select-none overflow-hidden bg-[url(https://images.unsplash.com/photo-1579546929556-bf8352f5889c?w=1080&amp;q=80)] bg-cover border-0 rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-xl hidden md:flex translate-x-12" style={{transform: 'rotate(-20deg) translateX(48px)', zIndex: '10'}} tabindex="0">
<div className="flex mb-5 items-center justify-between">
<span className="text-xs uppercase font-medium tracking-wider text-white/90">Certificate</span>
<svg className="lucide lucide-award w-5 h-5 text-white/80" data-lucide="award"></svg>
</div>
<div className="flex items-center mt-0 mb-5 space-x-2">
<img alt="Jane Doe" className="w-8 h-8 rounded-full object-cover border border-white/50" src="https://randomuser.me/api/portraits/women/43.jpg"/>
<div>
<span className="block text-white text-base font-semibold tracking-tight">Jane Doe</span>
<span className="block text-xs text-white/80">UI Designer</span>
</div>
</div>
<div className="mt-0 mb-4">
<span className="block text-white text-lg font-semibold tracking-tight leading-tight">UI Design Basics</span>
</div>
<div className="flex flex-wrap gap-1 mt-0 mb-5">
<span className="bg-white/20 text-white/90 text-xs px-2 py-0.5 rounded font-medium">Figma</span>
<span className="bg-white/20 text-white/90 text-xs px-2 py-0.5 rounded font-medium">Wireframing</span>
<span className="bg-white/20 text-white/90 text-xs px-2 py-0.5 rounded font-medium">Prototyping</span>
</div>
<div className="flex items-center justify-between mt-0 mb-5">
<span className="text-xs text-white/80 flex items-center gap-1"><svg className="lucide lucide-clock w-3.5 h-3.5 inline-block text-white/70" data-lucide="clock"></svg>8h 30m</span>
<span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-xs text-white font-medium px-2 py-0.5 rounded-full shadow">Certified</span>
</div>
<div className="flex items-center justify-between mt-0">
<div className="flex items-center gap-2">
<svg className="lucide lucide-star w-4 h-4 text-yellow-300/90" data-lucide="star"></svg>
<span className="text-xs text-yellow-100 font-medium truncate">Level 2 - Specialist</span>
</div>
<div className="flex items-center gap-2 text-xs text-white/70">
<svg className="lucide lucide-calendar w-3.5 h-3.5 text-white/70" data-lucide="calendar"></svg>20 Mar 2024
            </div>
</div>
</div>

<div className="relative z-20 card-tilt card-glass w-[380px] h-[240px] flex flex-col select-none overflow-hidden bg-[url(https://images.unsplash.com/photo-1635776063043-ab23b4c226f6?w=1080&amp;q=80)] bg-cover border-0 rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-2xl mx-auto" style={{transform: 'rotate(-20deg)', zIndex: '20'}} tabindex="0">
<div className="flex items-center justify-between mb-5">
<span className="text-xs uppercase font-semibold tracking-wider text-white/90">Certificate</span>
<svg className="lucide lucide-code w-5 h-5 text-white/80" data-lucide="code"></svg>
</div>
<div className="flex items-center mt-0 mb-5 space-x-2">
<img alt="Jane Doe" className="w-9 h-9 rounded-full object-cover border border-white/50" src="https://randomuser.me/api/portraits/women/43.jpg"/>
<div>
<span className="block text-white text-lg font-semibold tracking-tight">Jane Doe</span>
<span className="block text-xs text-white/80">Frontend Developer</span>
</div>
</div>
<div className="mt-0 mb-4">
<span className="block text-white text-xl font-semibold tracking-tight leading-tight">Advanced JavaScript</span>
</div>
<div className="flex flex-wrap gap-1 mt-0 mb-5">
<span className="bg-white/20 text-white/90 text-xs px-2 py-0.5 rounded font-medium">ES6+</span>
<span className="bg-white/20 text-white/90 text-xs px-2 py-0.5 rounded font-medium">React</span>
<span className="bg-white/20 text-white/90 text-xs px-2 py-0.5 rounded font-medium">Async</span>
</div>
<div className="flex items-center justify-between mt-0 mb-5">
<span className="text-xs text-white/80 flex items-center gap-1"><svg className="lucide lucide-clock w-3.5 h-3.5 inline-block text-white/70" data-lucide="clock"></svg>12h 10m</span>
<span className="text-xs font-medium text-slate-950 bg-slate-50 rounded-full pt-0.5 pr-2 pb-0.5 pl-2 shadow">Distinction</span>
</div>
<div className="flex items-center justify-between mt-0">
<div className="flex items-center gap-2">
<svg className="lucide lucide-zap w-4 h-4 text-purple-200/90" data-lucide="zap"></svg>
<span className="text-xs text-purple-100 font-medium truncate">Level 3 - Expert</span>
</div>
<div className="flex items-center gap-2 text-xs text-white/70">
<svg className="lucide lucide-calendar w-3.5 h-3.5 text-white/70" data-lucide="calendar"></svg>5 Feb 2024
            </div>
</div>
</div>

<div className="relative card-tilt card-glass w-[380px] h-[240px] flex flex-col select-none overflow-hidden bg-[url(https://images.unsplash.com/photo-1614853316476-de00d14cb1fc?w=1080&amp;q=80)] bg-cover border-0 rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-lg hidden md:flex -translate-x-12" style={{transform: 'rotate(-20deg) translateX(-48px)', zIndex: '30'}} tabindex="0">
<div className="flex items-center justify-between mb-5">
<span className="text-xs uppercase font-medium tracking-wider text-white/90">Certificate</span>
<svg className="lucide lucide-palette w-5 h-5 text-white/80" data-lucide="palette"></svg>
</div>
<div className="flex mt-0 mb-5 space-x-2 items-center">
<img alt="Jane Doe" className="w-8 h-8 rounded-full object-cover border border-white/50" src="https://randomuser.me/api/portraits/women/43.jpg"/>
<div>
<span className="block text-white text-base font-semibold tracking-tight">Jane Doe</span>
<span className="block text-xs text-white/80">Creative Coder</span>
</div>
</div>
<div className="mt-0 mb-4">
<span className="block leading-tight text-lg font-semibold text-white tracking-tight">Creative Coding</span>
</div>
<div className="flex flex-wrap gap-1 mt-0 mb-5">
<span className="bg-white/20 text-white/90 text-xs px-2 py-0.5 rounded font-medium">Canvas</span>
<span className="bg-white/20 text-white/90 text-xs px-2 py-0.5 rounded font-medium">Generative Art</span>
<span className="bg-white/20 text-white/90 text-xs px-2 py-0.5 rounded font-medium">Animation</span>
</div>
<div className="flex items-center justify-between mt-0 mb-5">
<span className="text-xs text-white/80 flex items-center gap-1"><svg className="lucide lucide-clock w-3.5 h-3.5 inline-block text-white/70" data-lucide="clock"></svg>9h 55m</span>
<span className="bg-gradient-to-r from-purple-500 to-indigo-400 text-xs text-white font-medium px-2 py-0.5 rounded-full shadow">Certified</span>
</div>
<div className="flex items-center justify-between mt-0">
<div className="flex items-center gap-2">
<svg className="lucide lucide-brush w-4 h-4 text-purple-200" data-lucide="brush"></svg>
<span className="text-xs text-purple-100 font-medium truncate">Level 1 - Creator</span>
</div>
<div className="flex items-center gap-2 text-xs text-white/70">
<svg className="lucide lucide-calendar w-3.5 h-3.5 text-white/70" data-lucide="calendar"></svg>18 Jan 2024
            </div>
</div>
</div>

<div className="flex flex-col space-y-4 w-full md:hidden">
<div className="card-tilt card-glass w-full h-[220px] flex flex-col select-none overflow-hidden bg-[url(https://images.unsplash.com/photo-1635776063043-ab23b4c226f6?w=1080&amp;q=80)] bg-cover border-0 rounded-2xl p-5 shadow-xl">
<div className="flex items-center justify-between mb-3">
<span className="text-xs uppercase font-semibold tracking-wider text-white/90">Certificate</span>
<svg className="lucide lucide-code w-5 h-5 text-white/80" data-lucide="code"></svg>
</div>
<div className="flex items-center mb-4 space-x-2">
<img alt="Jane Doe" className="w-8 h-8 rounded-full object-cover border border-white/50" src="https://randomuser.me/api/portraits/women/43.jpg"/>
<div>
<span className="block text-white text-base font-semibold tracking-tight">Jane Doe</span>
<span className="block text-xs text-white/80">Frontend Developer</span>
</div>
</div>
<span className="block text-white text-lg font-semibold tracking-tight leading-tight mb-2">Advanced JavaScript</span>
<div className="flex flex-wrap gap-1 mb-3">
<span className="bg-white/20 text-white/90 text-xs px-2 py-0.5 rounded font-medium">ES6+</span>
<span className="bg-white/20 text-white/90 text-xs px-2 py-0.5 rounded font-medium">React</span>
<span className="bg-white/20 text-white/90 text-xs px-2 py-0.5 rounded font-medium">Async</span>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-white/80 flex items-center gap-1"><svg className="lucide lucide-clock w-3.5 h-3.5 inline-block text-white/70" data-lucide="clock"></svg>12h 10m</span>
<span className="text-xs font-medium text-slate-950 bg-slate-50 rounded-full pt-0.5 pr-2 pb-0.5 pl-2 shadow">Distinction</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative z-10 max-w-2xl sm:mt-12 md:mt-10 mt-14 mr-auto ml-auto pr-5 pl-5" id="hero-anim">
<h1 className="sm:text-4xl md:text-5xl text-4xl font-satoshi-semibold tracking-tight leading-tight text-white text-center mb-3 drop-shadow-lg">
        Level Up Your Design and Code Skills
      </h1>
<p className="text-lg text-slate-200/90 tracking-tight text-center mb-5">Learn design and code from world-class instructors. Earn real certificates, join a vibrant community, and transform your career.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">

<button className="shiny-cta focus:outline-none">
<span>Start Learning Now</span>
</button>
</div>
</div>
</main>


    </>
  );
}
