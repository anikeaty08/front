import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


    const slides = [{ key: 'docs', bullet: 'Real‑time briefs', accent: 'emerald', icon: 'users', pillText: 'Co‑create', tailText: 'product briefs', body: 'Draft clear briefs together with multiplayer editing. Structure work with headings, checklists, and callouts.', description: 'Collaborate on project briefs with your team in real-time. No more version conflicts or missed updates.', badges: [{ text: 'noa', color: 'emerald' , target: 'briefs' }, { text: 'leo', color: 'violet' , target: 'checklists' }] }, { key: 'comments', bullet: 'Threaded reviews', accent: 'amber', icon: 'message-square', pillText: 'Review in', tailText: 'context', body: 'Keep decisions attached to the work with inline threads. Mention teammates, resolve quickly, and move forward.', description: 'Keep feedback organized with contextual comment threads. Never lose track of important decisions.', badges: [{ text: 'ivan', color: 'amber', target: 'threads' }, { text: 'sara', color: 'sky', target: 'Mention' }] }, { key: 'commands', bullet: 'Commands to tickets', accent: 'violet', icon: 'workflow', pillText: 'Turn notes into', tailText: 'tickets', body: 'Use quick commands to convert writing into scoped tickets with owners, labels, and estimates.', description: 'Transform ideas into actionable tasks with smart command shortcuts. From thought to execution, instantly.', badges: [{ text: 'jin',  color: 'violet', target: 'tickets' }, { text: 'nora', color: 'emerald', target: 'owners' }] }]; const accents = { emerald: { pill: 'ring-emerald-500/60 bg-emerald-500/10 text-emerald-200', iconBox: 'bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20', bar: 'bg-emerald-400', }, amber: { pill: 'ring-amber-500/60 bg-amber-500/10 text-amber-200', iconBox: 'bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/20', bar: 'bg-amber-400', }, violet: { pill: 'ring-violet-500/60 bg-violet-500/10 text-violet-200', iconBox: 'bg-violet-500/10 text-violet-400 ring-1 ring-violet-500/20', bar: 'bg-violet-400', }, sky: { pill: 'ring-sky-500/60 bg-sky-500/10 text-sky-200', iconBox: 'bg-sky-500/10 text-sky-400 ring-1 ring-sky-500/20', bar: 'bg-sky-400', } }; const highlightMap = { docs: ['briefs', 'checklists'], comments: ['threads', 'Mention'], commands: ['tickets', 'owners'] }; const root = document.querySelector('[data-component="feature-rotator"]') || document.querySelector('div'); const bulletList = document.getElementById('bulletList'); const iconBox = document.getElementById('iconBox'); const highlightPill = document.getElementById('highlightPill'); const highlightTail = document.getElementById('highlightTail'); const bodyCopy = document.getElementById('bodyCopy'); const badgesLayer = document.getElementById('badgesLayer'); function renderBullets(active) { bulletList.innerHTML = ''; slides.forEach((s, i) => { const isActive = i === active; const row = document.createElement('button'); row.type = 'button'; row.setAttribute('data-index', i); row.className = 'group w-full flex items-start gap-4 text-left p-4 rounded-xl transition-all hover:bg-white/[0.02] border border-transparent hover:border-white/10'; row.innerHTML = `<div class="flex-shrink-0"><span class="h-8 w-1 rounded-full ${isActive ? accents[slides[active].accent].bar : 'bg-neutral-700 group-hover:bg-neutral-600'} transition-colors block"></span></div><div><span class="text-base sm:text-lg ${isActive ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-300'} font-semibold block mb-2">${s.bullet}</span><span class="text-sm ${isActive ? 'text-neutral-400' : 'text-neutral-500 group-hover:text-neutral-400'} leading-relaxed">${s.description}</span></div>`; row.addEventListener('click', () => setActive(i, true)); bulletList.appendChild(row); }); } function setIcon(icon, accent) { iconBox.className = `w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${accents[accent].iconBox}`; iconBox.innerHTML = `<i data-lucide="${icon}" class="w-7 h-7"></i>`; lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }); } function setBadges() { badgesLayer.innerHTML = ''; } function colorMap(name, alpha = 1) { const colors = { emerald: `rgba(16,185,129,${alpha})`, violet: `rgba(139,92,246,${alpha})`, amber: `rgba(245,158,11,${alpha})`, sky: `rgba(14,165,233,${alpha})` }; return colors[name] || `rgba(16,185,129,${alpha})`; } function escapeRegExp(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); } function applyHighlights(text, slideKey, badges) { const tokens = (highlightMap[slideKey] || []).slice(); let result = text; tokens.forEach((token, idx) => { const b = badges[idx]; if (!b) return; const re = new RegExp(`\\b(${escapeRegExp(token)})\\b`, 'i'); const bg = colorMap(b.color, 0.18); const border = colorMap(b.color, 0.35); result = result.replace(re, (m) => { return `<span class="rounded-md px-2 py-0.5 ring-1" style="background:${bg}; box-shadow: inset 0 0 0 1px ${border};">${m}</span>`; }); }); return result; } let index = 0; let timer; function setActive(i, manual = false) { index = i % slides.length; if (index < 0) index = slides.length - 1; const s = slides[index]; renderBullets(index); setIcon(s.icon, s.accent); highlightPill.className = `inline-flex items-center rounded-lg px-3 py-2 ring-1 text-lg ${accents[s.accent].pill}`; highlightPill.textContent = s.pillText; highlightTail.textContent = s.tailText; bodyCopy.innerHTML = applyHighlights(s.body, s.key, s.badges); setBadges(); if (manual) { clearInterval(timer); timer = startRotation(); } } function startRotation() { return setInterval(() => setActive((index + 1) % slides.length), 5000); } renderBullets(index); setActive(0); timer = startRotation(); root.addEventListener('mouseenter', () => clearInterval(timer)); root.addEventListener('mouseleave', () => { clearInterval(timer); timer = startRotation(); }); setTimeout(() => lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }), 100);
  


      // Icons
      lucide.createIcons();

      // Mobile menu toggle
      const menuBtn = document.getElementById('menuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      const navLinks = document.getElementById('navLinks');
      menuBtn?.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const isOpen = !mobileMenu.classList.contains('hidden');
        menuBtn.innerHTML = isOpen ? '<i data-lucide="x" class="h-5 w-5 text-white"></i>' : '<i data-lucide="menu" class="h-5 w-5 text-white"></i>';
        lucide.createIcons();
      });

      // Demo modal
      const openDemo = document.getElementById('openDemo');
      const demoModal = document.getElementById('demoModal');
      const closeDemo = document.getElementById('closeDemo');
      openDemo?.addEventListener('click', () => {
        demoModal.classList.remove('hidden');
      });
      closeDemo?.addEventListener('click', () => {
        demoModal.classList.add('hidden');
      });
      demoModal?.addEventListener('click', (e) => {
        if (e.target === demoModal) demoModal.classList.add('hidden');
      });

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="krvLrHX3sj3cg8BHywDj"></div>

<div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
<div className="absolute -top-16 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-600/40 via-sky-500/30 to-cyan-400/20 blur-3xl"></div>
<div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-fuchsia-600/30 via-purple-600/20 to-sky-500/20 blur-3xl"></div>
</div>

<header className="relative z-10">
<nav className="flex max-w-7xl md:px-6 mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 items-center justify-between">
<a className="flex items-center gap-3" href="#">
<svg aria-hidden="true" className="md:w-14 md:h-14 w-[36px] h-[36px]" strokeWidth="2" style={{width: '36px', height: '36px'}} viewbox="0 0 48 48">
<path className="" d="M24 10 L26 22 L38 24 L26 26 L24 38 L22 26 L10 24 L22 22 Z" fill="currentColor"></path>
</svg>
<span className="text-lg font-medium tracking-tight">Nebula</span>
</a>
<button className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 md:hidden" id="menuBtn">
<svg className="lucide lucide-menu h-5 w-5 text-white" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
<span className="sr-only">Open menu</span>
</button>
<div className="hidden items-center gap-8 md:flex" id="navLinks">
<a className="text-sm font-medium text-slate-300 hover:text-white" href="#">Platform</a>
<a className="text-sm font-medium text-slate-300 hover:text-white" href="#">Templates</a>
<a className="text-sm font-medium text-slate-300 hover:text-white" href="#">Docs</a>
<a className="text-sm font-medium text-slate-300 hover:text-white" href="#">Community</a>
<a className="text-sm font-medium text-slate-300 hover:text-white" href="#">Pricing</a>
<div className="hidden h-6 w-px bg-white/10 md:block"></div>
<a className="text-sm font-medium text-slate-300 hover:text-white" href="#">Log in</a>
<button className="group relative inline-flex cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] hover:text-white text-xs font-semibold text-white/70 tracking-tight rounded-full pt-[8px] pr-[16px] pb-[8px] pl-[16px] items-center justify-center" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)', background: 'radial-gradient(ellipse at bottom,rgba(71,81,92,1) 0%,rgba(0,0,0,1) 100%)'}}>
<span className="relative z-10 text-sm font-normal rounded-full">Sign Up</span>

<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 text-xs rounded-full" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
</div>
</nav>

<div className="mx-auto hidden max-w-7xl px-4 md:hidden" id="mobileMenu">
<div className="space-y-1 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur">
<a className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5" href="#">Platform</a>
<a className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5" href="#">Templates</a>
<a className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5" href="#">Docs</a>
<a className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5" href="#">Community</a>
<a className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5" href="#">Pricing</a>
<div className="my-2 h-px w-full bg-white/10"></div>
<div className="flex items-center gap-2">
<a className="flex-1 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-center text-sm font-medium text-slate-200 hover:bg-white/5" href="#">Log in</a>
<a className="flex-1 rounded-lg bg-white px-3 py-2 text-center text-sm font-medium text-black hover:bg-white/90" href="#">Sign up</a>
</div>
</div>
</div>
</header>

<section className="relative z-10">
<div className="mx-auto max-w-7xl px-4 pt-10 pb-8 md:px-6 md:pt-16">
<div className="mx-auto max-w-3xl text-center">
<p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
            
            New: Instant publish with atomic deploys
          </p>
<h1 className="sm:text-5xl md:text-7xl text-4xl font-semibold tracking-tight">
            Ship websites at lightspeed
          </h1>
<p className="mt-5 text-base md:text-lg text-slate-300">
            Nebula is a visual builder that lets you design, collaborate, and publish in one place. No code required—unless you want it.
          </p>
<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
<button className="button" type="button">
<div className="points_wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner">Try for free<svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg></span>
<style>
    .button {
      cursor: pointer;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      transition: all 0.25s ease;
      background: radial-gradient(65.28% 65.28% at 50% 100%,
          rgba(34, 211, 238, 0.8) 0%,
          rgba(34, 211, 238, 0) 100%),
        linear-gradient(0deg, #2563eb, #2563eb);
      border-radius: 0.75rem;
      border: none;
      outline: none;
      padding: 12px 18px;
      min-height: 48px;
      min-width: 102px;
    }
  
    .button::before,
    .button::after {
      content: "";
      position: absolute;
      transition: all 0.5s ease-in-out;
      z-index: 0;
    }
  
    .button::before {
      inset: 1px;
      background: linear-gradient(177.95deg,
          rgba(255, 255, 255, 0.19) 0%,
          rgba(255, 255, 255, 0) 100%);
      border-radius: calc(0.75rem - 1px);
    }
  
    .button::after {
      inset: 2px;
      background: radial-gradient(65.28% 65.28% at 50% 100%,
          rgba(34, 211, 238, 0.8) 0%,
          rgba(34, 211, 238, 0) 100%),
        linear-gradient(0deg, #2563eb, #2563eb);
      border-radius: calc(0.75rem - 2px);
    }
  
    .button:active {
      transform: scale(0.95);
    }
  
    .points_wrapper {
      overflow: hidden;
      width: 100%;
      height: 100%;
      pointer-events: none;
      position: absolute;
      z-index: 1;
    }
  
    .points_wrapper .point {
      bottom: -10px;
      position: absolute;
      animation: floating-points infinite ease-in-out;
      pointer-events: none;
      width: 2px;
      height: 2px;
      background-color: #fff;
      border-radius: 9999px;
    }
  
    @keyframes floating-points {
      0% {
        transform: translateY(0);
      }
  
      85% {
        opacity: 0;
      }
  
      100% {
        transform: translateY(-55px);
        opacity: 0;
      }
    }
  
    .points_wrapper .point:nth-child(1) {
      left: 10%;
      opacity: 1;
      animation-duration: 2.35s;
      animation-delay: 0.2s;
    }
  
    .points_wrapper .point:nth-child(2) {
      left: 30%;
      opacity: 0.7;
      animation-duration: 2.5s;
      animation-delay: 0.5s;
    }
  
    .points_wrapper .point:nth-child(3) {
      left: 25%;
      opacity: 0.8;
      animation-duration: 2.2s;
      animation-delay: 0.1s;
    }
  
    .points_wrapper .point:nth-child(4) {
      left: 44%;
      opacity: 0.6;
      animation-duration: 2.05s;
    }
  
    .points_wrapper .point:nth-child(5) {
      left: 50%;
      opacity: 1;
      animation-duration: 1.9s;
    }
  
    .points_wrapper .point:nth-child(6) {
      left: 75%;
      opacity: 0.5;
      animation-duration: 1.5s;
      animation-delay: 1.5s;
    }
  
    .points_wrapper .point:nth-child(7) {
      left: 88%;
      opacity: 0.9;
      animation-duration: 2.2s;
      animation-delay: 0.2s;
    }
  
    .points_wrapper .point:nth-child(8) {
      left: 58%;
      opacity: 0.8;
      animation-duration: 2.25s;
      animation-delay: 0.2s;
    }
  
    .points_wrapper .point:nth-child(9) {
      left: 98%;
      opacity: 0.6;
      animation-duration: 2.6s;
      animation-delay: 0.1s;
    }
  
    .points_wrapper .point:nth-child(10) {
      left: 65%;
      opacity: 1;
      animation-duration: 2.5s;
      animation-delay: 0.2s;
    }
  
    .inner {
      z-index: 2;
      gap: 6px;
      position: relative;
      width: 100%;
      color: white;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
      transition: color 0.2s ease-in-out;
    }
  
    .inner svg.icon {
      width: 18px;
      height: 18px;
      transition: transform 0.3s ease;
      stroke: white;
      fill: none;
    }
  
    .button:hover svg.icon {
      transform: translateX(2px);
    }
  
    .button:hover svg.icon path {
      animation: dash 0.8s linear forwards;
    }
  
    @keyframes dash {
      0% {
        stroke-dasharray: 0, 20;
        stroke-dashoffset: 0;
      }
  
      50% {
        stroke-dasharray: 10, 10;
        stroke-dashoffset: -5;
      }
  
      100% {
        stroke-dasharray: 20, 0;
        stroke-dashoffset: -10;
      }
    }
  </style>
</button>
<button className="group relative inline-flex items-center justify-center min-w-[120px] cursor-pointer rounded-xl px-[17px] py-[12px] text-white/70 tracking-tight font-semibold transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] hover:text-white" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)', background: 'radial-gradient(ellipse at bottom,rgba(71,81,92,1) 0%,rgba(0,0,0,1) 100%)'}}>
<span className="relative z-10 font-normal">Watch demo</span>

<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
</div>
<div className="mt-6 flex items-center justify-center gap-3 text-sm text-slate-400">
<div className="flex -space-x-2">
<img alt="" className="h-6 w-6 rounded-full ring-2 ring-black/60 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9c519027-8b76-493a-ae3c-8cf962ccdf04_320w.jpg"/>
<img alt="" className="h-6 w-6 rounded-full ring-2 ring-black/60 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8d3cb9d4-adbe-41e5-a351-a4a6c22d6037_800w.jpg" style={{}}/>
<img alt="" className="h-6 w-6 rounded-full ring-2 ring-black/60 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/69c45eba-968b-45e3-aff1-ebab9cb7b543_320w.jpg" style={{}}/>
</div>
<span className="">Trusted by modern teams of all sizes</span>
</div>
</div>
</div>

<div className="-mb-8 max-w-7xl md:px-6 mr-auto ml-auto pr-4 pl-4">
<div className="relative w-full overflow-hidden shadow-black/50 bg-gradient-to-b from-white/[0.04] to-white/[0.02] border-white/10 border rounded-2xl mr-auto ml-auto shadow-2xl backdrop-blur-xl">

<div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-red-500/80"></span>
<span className="h-3 w-3 rounded-full bg-yellow-400/80"></span>
<span className="h-3 w-3 rounded-full bg-green-500/80"></span>
<div className="ml-3 hidden items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300 sm:flex">
<svg className="lucide lucide-layout-panel-left h-3.5 w-3.5 text-slate-200" data-lucide="layout-panel-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect></svg>
                Nebula Studio — Project: Aurora
              </div>
</div>
<div className="flex items-center gap-2">
<button className="hidden rounded-md border border-white/10 bg-white/5 p-1.5 text-slate-200 hover:bg-white/10 sm:inline-flex"><svg className="lucide lucide-share-2 h-4 w-4" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg></button>
<button className="hidden rounded-md border border-white/10 bg-white/5 p-1.5 text-slate-200 hover:bg-white/10 sm:inline-flex"><svg className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg></button>
<button className="rounded-md bg-sky-500/90 px-3 py-1.5 text-xs font-medium text-white hover:bg-sky-500">Publish</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12">

<aside className="hidden md:block md:col-span-3 bg-black/30 border-white/10 border-r pt-3 pr-3 pb-3 pl-3">
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-slate-300">
<svg className="lucide lucide-panel-left h-3.5 w-3.5" data-lucide="panel-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 3v18"></path></svg>
                  Outline
                </div>
<button className="rounded-md border border-white/10 bg-white/5 p-1 text-slate-300 hover:bg-white/10">
<svg className="lucide lucide-search h-4 w-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
</div>
<div className="space-y-1 text-slate-300">
<div className="bg-white/5 rounded-lg pt-2 pr-2 pb-2 pl-2 space-y-3">
<div className="mb-1 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-laptop h-4 w-4 text-sky-400" data-lucide="laptop" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"></path><path d="M20.054 15.987H3.946"></path></svg>
<span className="text-xs font-medium">Desktop — 1200</span>
</div>
<span className="rounded-md bg-white/5 px-1.5 py-0.5 text-[10px] text-slate-400">Primary</span>
</div>
<ul className="space-y-1 pl-6 text-xs">
<li className="flex items-center gap-2 rounded-md bg-sky-500/10 px-2 py-1">
<svg className="lucide lucide-layers h-3.5 w-3.5 text-sky-400" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
                      Header
                    </li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5">
<svg className="lucide lucide-image h-3.5 w-3.5 text-purple-400" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
                      Hero
                    </li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5">
<svg className="lucide lucide-grid h-3.5 w-3.5 text-emerald-400" data-lucide="grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
                      Features
                    </li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5">
<svg className="lucide lucide-credit-card h-3.5 w-3.5 text-amber-400" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
                      Pricing
                    </li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5">
<svg className="lucide lucide-messages-square h-3.5 w-3.5 text-pink-400" data-lucide="messages-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path></svg>
                      Testimonials
                    </li>
</ul>
</div>
<div className="bg-white/5 rounded-lg pt-2 pr-2 pb-2 pl-2 space-y-3">
<div className="mb-1 flex items-center gap-2">
<svg className="lucide lucide-package h-4 w-4 text-indigo-400" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
<span className="text-xs font-medium">Assets</span>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="aspect-video overflow-hidden rounded-md bg-white/5">
<img alt="" className="h-full w-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0950426a-fd01-4dc5-a916-33b7c3a94646_320w.jpg" style={{}}/>
</div>
<div className="aspect-video overflow-hidden rounded-md bg-white/5">
<img alt="" className="h-full w-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/859fc099-059b-4ec4-b0f1-06e736a8bdf4_320w.jpg" style={{}}/>
</div>
<div className="aspect-video overflow-hidden rounded-md bg-white/5">
<img alt="" className="h-full w-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f17ac654-630a-4fb6-ae2e-e2c4a8fe9274_320w.jpg" style={{}}/>
</div>
</div>
</div>
</div>
</aside>

<main className="relative md:col-span-6 bg-black/20">
<div className="flex items-center gap-2 border-b border-white/10 px-3 py-2 text-xs text-slate-300">
<svg className="lucide lucide-monitor-smartphone h-4 w-4 text-sky-400" data-lucide="monitor-smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path><path d="M10 19v-3.96 3.15"></path><path d="M7 19h5"></path><rect height="10" rx="2" width="6" x="16" y="12"></rect></svg>
<span className="">Breakpoint</span>
<span className="rounded-md bg-white/5 px-1.5 py-0.5">Desktop</span>
<span className="text-slate-500">|</span>
<span>1200</span>
<div className="ml-auto flex items-center gap-1">
<button className="rounded-md border border-white/10 bg-white/5 p-1 hover:bg-white/10"><svg className="lucide lucide-undo-2 h-4 w-4" data-lucide="undo-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 14 4 9l5-5"></path><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path></svg></button>
<button className="rounded-md border border-white/10 bg-white/5 p-1 hover:bg-white/10"><svg className="lucide lucide-redo-2 h-4 w-4" data-lucide="redo-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 14 5-5-5-5"></path><path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"></path></svg></button>
</div>
</div>
<div className="sm:p-6 pt-4 pr-4 pb-4 pl-4">
<div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 ring-1 ring-white/10">
<img alt="" className="h-[360px] w-full object-cover sm:h-[460px]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9fb3eba2-d3b1-4a3c-9feb-29a0b47b70c6_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="max-w-xl rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur">
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">Orion Canvas</h3>
<p className="mt-1 text-sm text-slate-300">A limitless canvas with modern layout, motion, and type features—ready for production.</p>
<div className="mt-3 flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-1.5 text-xs font-medium text-black hover:bg-white/90">
<svg className="lucide lucide-wand-2 h-4 w-4" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
                          Auto layout
                        </button>
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:bg-white/10">
<svg className="lucide lucide-move h-4 w-4" data-lucide="move" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="m15 19-3 3-3-3"></path><path d="m19 9 3 3-3 3"></path><path d="M2 12h20"></path><path d="m5 9-3 3 3 3"></path><path d="m9 5 3-3 3 3"></path></svg>
                          Drag
                        </button>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute -bottom-6 right-4 hidden w-64 rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur lg:block">
<div className="rounded-lg border border-white/10 bg-black/50 p-2">
<div className="aspect-[9/16] overflow-hidden rounded-md">
<img alt="" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e080ec8d-304b-41cc-a8e7-c2b6efc8ab07_800w.jpg"/>
</div>
<div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-smartphone h-3 w-3" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg> Mobile 390</span>
<span className="rounded bg-white/5 px-1 py-0.5">Preview</span>
</div>
</div>
</div>
</div>
</main>

<aside className="hidden md:block md:col-span-3 border-l border-white/10 bg-black/30 p-3">
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-slate-300">
<svg className="lucide lucide-sliders-horizontal h-3.5 w-3.5" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line></svg>
                  Properties
                </div>
<button className="rounded-md border border-white/10 bg-white/5 p-1 text-slate-300 hover:bg-white/10">
<svg className="lucide lucide-more-horizontal h-4 w-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="space-y-3">
<div className="bg-white/5 rounded-lg pt-3 pr-3 pb-3 pl-3 space-y-3">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-slate-300">Position</span>
<span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-slate-400">Relative</span>
</div>
<div className="grid grid-cols-3 gap-2 text-[11px]">
<button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 hover:bg-white/10"><svg className="lucide lucide-align-start-vertical mr-1 inline h-3.5 w-3.5" data-lucide="align-start-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="2" width="9" x="6" y="14"></rect><rect height="6" rx="2" width="16" x="6" y="4"></rect><path d="M2 2v20"></path></svg>Top</button>
<button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 hover:bg-white/10"><svg className="lucide lucide-align-center-vertical mr-1 inline h-3.5 w-3.5" data-lucide="align-center-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"></path><path d="M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"></path><path d="M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"></path><path d="M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"></path></svg>Center</button>
<button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 hover:bg-white/10"><svg className="lucide lucide-align-end-vertical mr-1 inline h-3.5 w-3.5" data-lucide="align-end-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="2" width="16" x="2" y="4"></rect><rect height="6" rx="2" width="9" x="9" y="14"></rect><path d="M22 22V2"></path></svg>Bottom</button>
</div>
</div>
<div className="bg-white/5 rounded-lg pt-3 pr-3 pb-3 pl-3 space-y-3">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-slate-300 font-medium">Size</span>
<span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-slate-400">Auto</span>
</div>
<div className="grid grid-cols-2 gap-2 text-[11px]">
<div className="rounded-md border border-white/10 bg-black/40 px-2 py-1 text-slate-300 font-medium text-center">W: 1200</div>
<div className="rounded-md border border-white/10 bg-black/40 px-2 py-1 text-slate-300 font-medium text-center">H: Auto</div>
</div>
<div className="mt-2 grid grid-cols-4 gap-2 text-[11px]">
<button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 font-medium hover:bg-white/10 transition focus:ring-2 focus:ring-sky-500 focus:outline-none">Fill</button>
<button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 font-medium hover:bg-white/10 transition focus:ring-2 focus:ring-sky-500 focus:outline-none">Fit</button>
<button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 font-medium hover:bg-white/10 transition focus:ring-2 focus:ring-sky-500 focus:outline-none">Fixed
    </button><button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 font-medium hover:bg-white/10 transition focus:ring-2 focus:ring-sky-500 focus:outline-none">Min</button>
</div>
</div>
<div className="bg-white/5 rounded-lg pt-3 pr-3 pb-3 pl-3 space-y-3">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-slate-300">Effects</span>
<span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-slate-400">3</span>
</div>
<div className="space-y-2 text-[11px]">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 text-slate-300"><svg className="lucide lucide-droplet w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="droplet" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(56, 189, 248)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>Blur</span>
<span className="rounded bg-white/5 px-1.5 py-0.5 text-slate-400">8px</span>
</div>
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 text-slate-300"><svg className="lucide lucide-sun h-3.5 w-3.5 text-amber-400" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>Glow</span>
<span className="rounded bg-white/5 px-1.5 py-0.5 text-slate-400">20%</span>
</div>
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 text-slate-300"><svg className="lucide lucide-layers h-3.5 w-3.5 text-purple-400" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>Blend</span>
<span className="rounded bg-white/5 px-1.5 py-0.5 text-slate-400">Overlay</span>
</div>
</div>
</div>
</div>
</aside>
</div>
</div>
</div>
</section><div className="relative overflow-hidden antialiased z-10 text-neutral-200 bg-black" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  </style>


<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_30%,rgba(120,119,198,0.15),transparent_60%)]"></div>
<section className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32">
<div className="text-center mb-16 md:mb-20">
<p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
<svg className="lucide lucide-workflow h-4 w-4 text-emerald-400" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
        Powerful workflow features
      </p>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
        Everything you need to ship faster
      </h2>
<p className="text-lg text-slate-300 max-w-2xl mx-auto">
        From ideation to deployment, Nebula provides the tools your team needs to collaborate effectively and deliver exceptional results.
      </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
<div className="order-2 lg:order-1">
<h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-8">
          Build workflows that work for your team
        </h3>
<div className="space-y-6" id="bulletList"><button className="group w-full flex items-start gap-4 text-left p-4 rounded-xl transition-all hover:bg-white/[0.02] border border-transparent hover:border-white/10" data-index="0" type="button"><div className="flex-shrink-0"><span className="h-8 w-1 rounded-full bg-emerald-400 transition-colors block"></span></div><div><span className="text-base sm:text-lg text-white font-semibold block mb-2">Real‑time briefs</span><span className="text-sm text-neutral-400 leading-relaxed">Collaborate on project briefs with your team in real-time. No more version conflicts or missed updates.</span></div></button><button className="group w-full flex items-start gap-4 text-left p-4 rounded-xl transition-all hover:bg-white/[0.02] border border-transparent hover:border-white/10" data-index="1" type="button"><div className="flex-shrink-0"><span className="h-8 w-1 rounded-full bg-neutral-700 group-hover:bg-neutral-600 transition-colors block"></span></div><div><span className="text-base sm:text-lg text-neutral-500 group-hover:text-neutral-300 font-semibold block mb-2">Threaded reviews</span><span className="text-sm text-neutral-500 group-hover:text-neutral-400 leading-relaxed">Keep feedback organized with contextual comment threads. Never lose track of important decisions.</span></div></button><button className="group w-full flex items-start gap-4 text-left p-4 rounded-xl transition-all hover:bg-white/[0.02] border border-transparent hover:border-white/10" data-index="2" type="button"><div className="flex-shrink-0"><span className="h-8 w-1 rounded-full bg-neutral-700 group-hover:bg-neutral-600 transition-colors block"></span></div><div><span className="text-base sm:text-lg text-neutral-500 group-hover:text-neutral-300 font-semibold block mb-2">Commands to tickets</span><span className="text-sm text-neutral-500 group-hover:text-neutral-400 leading-relaxed">Transform ideas into actionable tasks with smart command shortcuts. From thought to execution, instantly.</span></div></button></div>
</div>
<div className="relative order-1 lg:order-2">
<div className="relative rounded-2xl border border-neutral-800/80 bg-neutral-900/50 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/5 backdrop-blur-md overflow-hidden">
<div className="h-14 flex items-center gap-3 px-6 border-b border-neutral-800/70 text-neutral-400">
<svg className="lucide lucide-file-text w-5 h-5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<div className="flex items-center gap-2 text-sm">
<span className="truncate font-medium">Nebula workspace</span>
<span className="opacity-50">›</span>
<span className="truncate text-neutral-300 font-medium">Product strategy</span>
</div>
<div className="ml-auto flex items-center gap-2 opacity-60">
<div className="flex -space-x-1">
<div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
<span className="text-[10px] font-medium text-emerald-300">N</span>
</div>
<div className="w-6 h-6 rounded-full bg-violet-500/20 border border-violet-500/40 flex items-center justify-center">
<span className="text-[10px] font-medium text-violet-300">L</span>
</div>
</div>
<svg className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>
</div>
<div className="relative px-8 py-10">
<div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 text-neutral-700">
<span className="w-1.5 h-1.5 rounded-full bg-current"></span>
<span className="w-1.5 h-1.5 rounded-full bg-current"></span>
<span className="w-1.5 h-1.5 rounded-full bg-current"></span>
</div>
<div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20" id="iconBox"><svg className="lucide lucide-users w-7 h-7" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg></div>
<div className="relative mb-6">
<h4 className="text-3xl font-semibold tracking-tight text-white flex flex-wrap items-center gap-3 mb-3">
<span className="inline-flex items-center rounded-lg px-3 py-2 ring-1 text-lg ring-emerald-500/60 bg-emerald-500/10 text-emerald-200" id="highlightPill">Co‑create</span>
<span className="" id="highlightTail">product briefs</span>
</h4>
<div className="relative" id="badgesLayer"></div>
</div>
<p className="text-neutral-400 leading-relaxed text-lg mb-8" id="bodyCopy">Draft clear <span className="rounded-md px-2 py-0.5 ring-1" style={{background: 'rgba(16,185,129,0.18)', boxShadow: 'inset 0 0 0 1px rgba(16,185,129,0.35)'}}>briefs</span> together with multiplayer editing. Structure work with headings, <span className="rounded-md px-2 py-0.5 ring-1" style={{background: 'rgba(139,92,246,0.18)', boxShadow: 'inset 0 0 0 1px rgba(139,92,246,0.35)'}}>checklists</span>, and callouts.</p>
<div className="space-y-3 mb-6">
<div className="h-2 rounded-full bg-neutral-800/70 w-4/5"></div>
<div className="h-2 rounded-full bg-neutral-800/70 w-full"></div>
<div className="h-2 rounded-full bg-neutral-800/70 w-3/5"></div>
</div>
<div className="space-y-3 opacity-60">
<div className="h-2 rounded-full bg-neutral-800/70 w-5/6"></div>
<div className="h-2 rounded-full bg-neutral-800/70 w-3/4"></div>
<div className="h-2 rounded-full bg-neutral-800/70 w-4/5"></div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-950/90 to-transparent"></div>
</div>
</div>
</div>
</div>
</section>

</div><div className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="border-white/10 border rounded-3xl p-12 lg:p-16" style={{background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)'}}>
<div className="text-center mb-16">
<p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
<svg className="h-4 w-4 text-sky-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"></path>
</svg>
          Flexible pricing plans
        </p>
<h3 className="text-3xl lg:text-4xl text-white tracking-tight mb-6 font-semibold">Choose your perfect plan</h3>
<p className="text-lg text-slate-300 max-w-3xl mx-auto">
          From solo creators to enterprise teams, Nebula scales with your needs. Start free and upgrade as you grow.
        </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="relative rounded-2xl border border-white/10 p-8" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<div className="mb-8">
<h4 className="text-xl font-semibold text-white mb-2">Starter</h4>
<p className="text-sm text-slate-400 mb-6">Perfect for individuals and small projects getting started with visual design.</p>
<div className="flex items-baseline gap-2">
<span className="text-4xl text-white font-semibold">Free</span>
<span className="text-sm text-slate-400">forever</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<svg className="text-sky-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="text-sm text-slate-300">3 active projects</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-sky-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="text-sm text-slate-300">Core design tools</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-sky-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="text-sm text-slate-300">Basic templates</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-sky-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="text-sm text-slate-300">Community support</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-sky-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="text-sm text-slate-300">Nebula subdomain</span>
</li>
</ul>
<button className="w-full py-4 px-6 rounded-xl text-sm font-medium text-white border border-white/20 hover:border-white/30 transition-all duration-300 hover:bg-white/5" style={{background: 'rgba(255, 255, 255, 0.03)'}}>Get Started Free</button>
</div>
<div className="relative rounded-2xl border border-sky-500/30 p-8" style={{background: 'rgba(14, 165, 233, 0.05)'}}>
<div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
<span className="px-4 py-1 text-xs font-medium text-white rounded-full border border-sky-500/30" style={{background: 'rgba(14, 165, 233, 0.15)'}}>Most Popular</span>
</div>
<div className="mb-8">
<h4 className="text-xl font-semibold text-white mb-2">Pro</h4>
<p className="text-sm text-slate-400 mb-6">Advanced features for professional designers and growing teams.</p>
<div className="flex items-baseline gap-2">
<span className="text-4xl text-white font-semibold">$12</span>
<span className="text-sm text-slate-400">per month</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<svg className="text-sky-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="text-sm text-slate-300">Unlimited projects</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-sky-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="text-sm text-slate-300">Advanced animations</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-sky-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="text-sm text-slate-300">Custom domains</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-sky-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="text-sm text-slate-300">Real-time collaboration</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-sky-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="text-sm text-slate-300">Priority support</span>
</li>
</ul>
<button className="w-full py-4 px-6 rounded-xl text-sm font-medium text-white border border-sky-500/30 hover:border-sky-500/50 transition-all duration-300" style={{background: 'rgba(14, 165, 233, 0.15)'}}>Start Pro Trial</button>
</div>
<div className="relative rounded-2xl border border-white/10 p-8" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<div className="mb-8">
<h4 className="text-xl font-semibold text-white mb-2">Enterprise</h4>
<p className="text-sm text-slate-400 mb-6">
              Powerful tools and dedicated support for large teams and organizations.
            </p>
<div className="flex items-baseline gap-2">
<span className="text-4xl text-white font-semibold">Custom</span>
<span className="text-sm text-slate-400">pricing</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<svg className="text-sky-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="text-sm text-slate-300">Unlimited everything</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-sky-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="text-sm text-slate-300">Advanced security &amp; SSO</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-sky-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="text-sm text-slate-300">White-label options</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-sky-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="text-sm text-slate-300">Dedicated account manager</span>
</li>
<li className="flex items-center gap-3">
<svg className="text-sky-400 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m9 12 2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="text-sm text-slate-300">Custom integrations</span>
</li>
</ul>
<button className="w-full py-4 px-6 rounded-xl text-sm font-medium text-white border border-white/20 hover:border-white/30 transition-all duration-300 hover:bg-white/5" style={{background: 'rgba(255, 255, 255, 0.03)'}}>Contact Sales</button>
</div>
</div>
<div className="text-center mt-16 pt-12 border-t border-white/10">
<p className="text-sm text-slate-400 mb-6">
          All plans include SSL certificates, global CDN, and 99.9% uptime guarantee. No setup fees or hidden costs.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium text-slate-200 border border-white/20 hover:border-white/30 transition-all duration-300 hover:bg-white/5" style={{background: 'rgba(255, 255, 255, 0.03)'}}>
<svg className="mr-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
            Schedule Demo
          </button>
<button className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium text-slate-300 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<svg className="mr-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
<polyline points="14,2 14,8 20,8"></polyline>
<line x1="16" x2="8" y1="13" y2="13"></line>
<line x1="16" x2="8" y1="17" y2="17"></line>
<polyline points="10,9 9,9 8,9"></polyline>
</svg>
            View Full Pricing
          </button>
</div>
</div>
</div>
</div>
</div>

<footer className="relative z-10">
<div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
<div className="mx-auto max-w-2xl">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Design together. Publish instantly.</h2>
<p className="mt-2 text-sm text-slate-400">Skip handoff. Nebula connects your ideas to production with one click deploys.</p>
<div className="mt-4 flex items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-medium text-black hover:bg-white/90" href="#">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                Get started
              </a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-medium text-slate-200 hover:bg-white/10" href="#">
<svg className="lucide lucide-book-open h-4 w-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
                Read docs
              </a>
</div>
</div>
</div>
<div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row">
<span>© <span id="year">2025</span> Nebula Labs</span>
<div className="flex items-center gap-4">
<a className="hover:text-slate-300" href="#">Terms</a>
<a className="hover:text-slate-300" href="#">Privacy</a>
<a className="hover:text-slate-300" href="#">Status</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
