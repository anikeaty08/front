import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head||document.body).appendChild(i)}}();


      // Ensure all lucide icons use 1.5 stroke
      function mountIcons() {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        document.querySelectorAll('svg[data-lucide]').forEach(s => s.setAttribute('stroke-width','1.5'));
      }
      mountIcons();

      // Mobile menu toggle
      const menuBtn = document.getElementById('menuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      menuBtn?.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const isOpen = !mobileMenu.classList.contains('hidden');
        menuBtn.innerHTML = isOpen ? '<i data-lucide="x" class="h-5 w-5 text-white"></i>' : '<i data-lucide="menu" class="h-5 w-5 text-white"></i>';
        mountIcons();
      });

      // Demo modal
      const openDemo = document.getElementById('openDemo');
      const demoModal = document.getElementById('demoModal');
      const closeDemo = document.getElementById('closeDemo');
      openDemo?.addEventListener('click', () => demoModal?.classList.remove('hidden'));
      closeDemo?.addEventListener('click', () => demoModal?.classList.add('hidden'));
      demoModal?.addEventListener('click', (e) => { if (e.target === demoModal) demoModal.classList.add('hidden'); });

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Feature rotator (NeonPay)
      const slides = [
        { key: 'speed', bullet: '⚡ Lightning Transactions', accent: 'sky', icon: 'zap', pillText: 'Lightning', tailText: 'transactions', body: 'Fast, low‑cost payments across borders with on‑chain finality.', description: 'Move value globally in seconds with minimal fees and high reliability.', badges: [{ text: 'speed', color: 'sky', target: 'Fast' }, { text: 'low', color: 'emerald', target: 'low‑cost' }] },
        { key: 'secure', bullet: '🔒 Secure Wallets', accent: 'emerald', icon: 'lock', pillText: 'Secure', tailText: 'wallets', body: 'Military‑grade encryption with biometric login to protect your assets.', description: 'Defense‑grade security with biometric access and encrypted keys.', badges: [{ text: 'biometric', color: 'emerald', target: 'biometric' }, { text: 'encryption', color: 'violet', target: 'encryption' }] },
        { key: 'global', bullet: '🌐 Global Reach', accent: 'amber', icon: 'globe', pillText: 'Global', tailText: 'reach', body: 'Send, spend, and invest in 100+ currencies and tokens worldwide.', description: 'Access a borderless network supporting 100+ currencies and tokens.', badges: [{ text: '100+', color: 'amber', target: '100+' }, { text: 'tokens', color: 'sky', target: 'tokens' }] },
        { key: 'invest', bullet: '📈 Smart Investments', accent: 'violet', icon: 'line-chart', pillText: 'Smart', tailText: 'investments', body: 'Automated AI tools help build safer, diversified crypto portfolios.', description: 'Let AI assist with risk‑aware, automated portfolio strategies.', badges: [{ text: 'AI', color: 'violet', target: 'AI' }, { text: 'portfolios', color: 'emerald', target: 'portfolios' }] },
        { key: 'integrations', bullet: '🛠 Seamless Integrations', accent: 'emerald', icon: 'puzzle', pillText: 'Seamless', tailText: 'integrations', body: 'Connect with dApps, DeFi protocols, and NFT platforms with ease.', description: 'One wallet for dApps, DeFi, and NFTs—no friction, just connect.', badges: [{ text: 'dApps', color: 'sky', target: 'dApps' }, { text: 'DeFi', color: 'emerald', target: 'DeFi' }] }
      ];

      const accents = {
        emerald: { pill: 'ring-emerald-500/60 bg-emerald-500/10 text-emerald-200', iconBox: 'bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20', bar: 'bg-emerald-400' },
        amber:   { pill: 'ring-amber-500/60 bg-amber-500/10 text-amber-200',     iconBox: 'bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/20',     bar: 'bg-amber-400' },
        violet:  { pill: 'ring-violet-500/60 bg-violet-500/10 text-violet-200',   iconBox: 'bg-violet-500/10 text-violet-400 ring-1 ring-violet-500/20',   bar: 'bg-violet-400' },
        sky:     { pill: 'ring-sky-500/60 bg-sky-500/10 text-sky-200',            iconBox: 'bg-sky-500/10 text-sky-400 ring-1 ring-sky-500/20',            bar: 'bg-sky-400' }
      };

      const highlightMap = {
        speed: ['Fast', 'low‑cost'],
        secure: ['biometric', 'encryption'],
        global: ['100+', 'tokens'],
        invest: ['AI', 'portfolios'],
        integrations: ['dApps', 'DeFi']
      };

      const root = document.querySelector('[data-component="feature-rotator"]');
      const bulletList = document.getElementById('bulletList');
      const iconBox = document.getElementById('iconBox');
      const highlightPill = document.getElementById('highlightPill');
      const highlightTail = document.getElementById('highlightTail');
      const bodyCopy = document.getElementById('bodyCopy');
      const badgesLayer = document.getElementById('badgesLayer');

      function renderBullets(active) {
        bulletList.innerHTML = '';
        slides.forEach((s, i) => {
          const isActive = i === active;
          const row = document.createElement('button');
          row.type = 'button';
          row.setAttribute('data-index', i);
          row.className = 'group w-full flex items-start gap-4 text-left p-4 rounded-xl transition-all hover:bg-white/[0.02] border border-transparent hover:border-white/10';
          row.innerHTML = `
            <div class="flex-shrink-0"><span class="h-8 w-1 rounded-full ${isActive ? accents[slides[active].accent].bar : 'bg-neutral-700 group-hover:bg-neutral-600'} transition-colors block"></span></div>
            <div>
              <span class="text-base sm:text-lg ${isActive ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-300'} font-semibold block mb-2">${s.bullet}</span>
              <span class="text-sm ${isActive ? 'text-neutral-400' : 'text-neutral-500 group-hover:text-neutral-400'} leading-relaxed">${s.description}</span>
            </div>`;
          row.addEventListener('click', () => setActive(i, true));
          bulletList.appendChild(row);
        });
      }

      function setIcon(icon, accent) {
        iconBox.className = `w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${accents[accent].iconBox}`;
        iconBox.innerHTML = `<i data-lucide="${icon}" class="w-7 h-7"></i>`;
        mountIcons();
      }

      function colorMap(name, alpha = 1) {
        const colors = {
          emerald: `rgba(16,185,129,${alpha})`,
          violet: `rgba(139,92,246,${alpha})`,
          amber: `rgba(245,158,11,${alpha})`,
          sky: `rgba(14,165,233,${alpha})`
        };
        return colors[name] || `rgba(16,185,129,${alpha})`;
      }

      function escapeRegExp(s) {
        return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      }

      function applyHighlights(text, slideKey, badges) {
        const tokens = (highlightMap[slideKey] || []).slice();
        let result = text;
        tokens.forEach((token, idx) => {
          const b = badges[idx];
          if (!b) return;
          const re = new RegExp(`(${escapeRegExp(token)})`, 'i');
          const bg = colorMap(b.color, 0.18);
          const border = colorMap(b.color, 0.35);
          result = result.replace(re, (m) => `<span class="rounded-md px-2 py-0.5 ring-1" style="background:${bg}; box-shadow: inset 0 0 0 1px ${border};">${m}</span>`);
        });
        return result;
      }

      function setBadges() {
        badgesLayer.innerHTML = '';
      }

      let index = 0;
      let timer;

      function setActive(i, manual = false) {
        index = i % slides.length;
        if (index < 0) index = slides.length - 1;
        const s = slides[index];
        renderBullets(index);
        setIcon(s.icon, s.accent);
        highlightPill.className = `inline-flex items-center rounded-lg px-3 py-2 ring-1 text-lg ${accents[s.accent].pill}`;
        highlightPill.textContent = s.pillText;
        highlightTail.textContent = s.tailText;
        bodyCopy.innerHTML = applyHighlights(s.body, s.key, s.badges);
        setBadges();
        if (manual) {
          clearInterval(timer);
          timer = startRotation();
        }
      }

      function startRotation() {
        return setInterval(() => setActive((index + 1) % slides.length), 5000);
      }

      renderBullets(index);
      setActive(0);
      timer = startRotation();
      root?.addEventListener('mouseenter', () => clearInterval(timer));
      root?.addEventListener('mouseleave', () => { clearInterval(timer); timer = startRotation(); });
      setTimeout(mountIcons, 100);
    
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
<a className="flex items-center gap-3 group" href="#">
<div className="md:w-14 md:h-14 w-[36px] h-[36px] grid place-items-center rounded-xl ring-1 ring-white/10 bg-white/5 transition-colors group-hover:bg-white/[0.08]">
<svg aria-hidden="true" style={{width: '24px', height: '24px'}} viewbox="0 0 48 48">
<path d="M24 10 L26 22 L38 24 L26 26 L24 38 L22 26 L10 24 L22 22 Z" fill="currentColor"></path>
</svg>
</div>
<span className="text-lg font-medium tracking-tight">NeonPay</span>
</a>
<button className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 md:hidden hover:bg-white/10 transition" id="menuBtn">
<svg className="lucide lucide-menu h-5 w-5 text-white" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
<span className="sr-only">Open menu</span>
</button>
<div className="hidden items-center gap-8 md:flex" id="navLinks">
<a className="text-sm font-medium text-slate-300 hover:text-white transition" href="#features">Features</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition" href="#how">How it Works</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition" href="#community">Community</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition" href="#resources">Resources</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition" href="#membership">Membership</a>
<div className="hidden h-6 w-px bg-white/10 md:block"></div>
<a className="text-sm font-medium text-slate-300 hover:text-white transition" href="#">Log in</a>
<button className="group relative inline-flex cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.05] hover:text-white text-xs font-semibold text-white/70 tracking-tight rounded-full pt-[10px] pr-[16px] pb-[10px] pl-[16px] items-center justify-center" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)', background: 'radial-gradient(120% 140% at 50% 120%,rgba(2,132,199,0.35) 0%,rgba(0,0,0,0.9) 42%), rgba(15,23,42,0.3)'}}>
<span className="relative z-10 text-sm font-normal rounded-full">Create Wallet</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 rounded-full" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
</div>
</nav>

<div className="mx-auto hidden max-w-7xl px-4 md:hidden" id="mobileMenu">
<div className="space-y-1 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur">
<a className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5" href="#features">Features</a>
<a className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5" href="#how">How it Works</a>
<a className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5" href="#community">Community</a>
<a className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5" href="#resources">Resources</a>
<a className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5" href="#membership">Membership</a>
<div className="my-2 h-px w-full bg-white/10"></div>
<div className="flex items-center gap-2">
<a className="flex-1 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-center text-sm font-medium text-slate-200 hover:bg-white/5" href="#">Log in</a>
<a className="flex-1 rounded-lg bg-white px-3 py-2 text-center text-sm font-medium text-black hover:bg-white/90" href="#">Create Wallet</a>
</div>
</div>
</div>
</header>

<section className="relative z-10">
<div className="mx-auto max-w-7xl px-4 pt-10 pb-8 md:px-6 md:pt-16">
<div className="mx-auto max-w-3xl text-center">
<p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
<svg className="lucide lucide-zap h-3.5 w-3.5 text-indigo-300" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
            Now live: Biometric wallets + 100+ tokens
          </p>
<h1 className="sm:text-5xl md:text-7xl text-4xl font-semibold tracking-tight">
            Your Gateway to Tomorrow’s Finance.
          </h1>
<p className="mt-5 text-base md:text-lg text-slate-300">
            NeonPay is the next-gen Web3 platform that combines secure crypto wallets, lightning-fast transactions, and investment tools—all powered by the blockchain.
          </p>
<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-black transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-sky-500/50 hover:animate-pulse" href="#membership" style={{background: 'linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(226,232,240,1) 100%)', boxShadow: '0 10px 30px -10px rgba(56,189,248,0.3)'}}>
              Get Started
              <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<button className="group relative inline-flex items-center justify-center min-w-[140px] cursor-pointer rounded-xl px-[17px] py-[12px] text-white/80 tracking-tight font-semibold transition-all duration-[900ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.05] hover:text-white hover:ring-2 hover:ring-cyan-500/40" id="openDemo" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.12)', background: 'radial-gradient(120% 140% at 50% 120%,rgba(100,116,139,0.18) 0%,rgba(0,0,0,0.9) 42%), rgba(15,23,42,0.35)'}}>
<span className="relative z-10 font-normal inline-flex items-center gap-2">
<svg className="lucide lucide-play-circle h-4 w-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                Explore Features
              </span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[900ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
</div>
<div className="mt-6 flex items-center justify-center gap-3 text-sm text-slate-400">
<div className="flex -space-x-2">
<img alt="avatar-1" className="h-6 w-6 rounded-full ring-2 ring-black/60 object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=320&amp;auto=format&amp;fit=crop"/>
<img alt="avatar-2" className="h-6 w-6 rounded-full ring-2 ring-black/60 object-cover" src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&amp;w=320&amp;auto=format&amp;fit=crop"/>
<img alt="avatar-3" className="h-6 w-6 rounded-full ring-2 ring-black/60 object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=320&amp;auto=format&amp;fit=crop"/>
</div>
<span>Trusted by 500k+ users worldwide</span>
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
<svg className="lucide lucide-layout-panel-left h-3.5 w-3.5 text-slate-200" data-lucide="layout-panel-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect></svg>
                NeonPay — Wallet Overview
              </div>
</div>
<div className="flex items-center gap-2">
<button className="hidden rounded-md border border-white/10 bg-white/5 p-1.5 text-slate-200 hover:bg-white/10 sm:inline-flex"><svg className="lucide lucide-share-2 h-4 w-4" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg></button>
<button className="hidden rounded-md border border-white/10 bg-white/5 p-1.5 text-slate-200 hover:bg-white/10 sm:inline-flex"><svg className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg></button>
<button className="rounded-md bg-sky-500/90 px-3 py-1.5 text-xs font-medium text-white hover:bg-sky-500">Create Wallet</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12">

<aside className="hidden md:block md:col-span-3 bg-black/30 border-white/10 border-r pt-3 pr-3 pb-3 pl-3">
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-slate-300">
<svg className="lucide lucide-panel-left h-3.5 w-3.5" data-lucide="panel-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 3v18"></path></svg>
                  Outline
                </div>
<button className="rounded-md border border-white/10 bg-white/5 p-1 text-slate-300 hover:bg-white/10">
<svg className="lucide lucide-search h-4 w-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
</div>
<div className="space-y-1 text-slate-300">
<div className="bg-white/5 rounded-lg pt-2 pr-2 pb-2 pl-2 space-y-3">
<div className="mb-1 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-smartphone-charging h-4 w-4 text-sky-400" data-lucide="smartphone-charging" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12.667 8 10 12h4l-2.667 4"></path></svg>
<span className="text-xs font-medium">Web3 — Wallet</span>
</div>
<span className="rounded-md bg-white/5 px-1.5 py-0.5 text-[10px] text-slate-400">Primary</span>
</div>
<ul className="space-y-1 pl-6 text-xs">
<li className="flex items-center gap-2 rounded-md bg-sky-500/10 px-2 py-1">
<svg className="lucide lucide-shield h-3.5 w-3.5 text-sky-400" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                      Header
                    </li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5">
<svg className="lucide lucide-wallet h-3.5 w-3.5 text-purple-400" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
                      Wallet
                    </li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5">
<svg className="lucide lucide-send h-3.5 w-3.5 text-emerald-400" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                      Transfers
                    </li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5">
<svg className="lucide lucide-line-chart h-3.5 w-3.5 text-amber-400" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
                      Investments
                    </li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5">
<svg className="lucide lucide-life-buoy h-3.5 w-3.5 text-pink-400" data-lucide="life-buoy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path><circle cx="12" cy="12" r="4"></circle></svg>
                      Support
                    </li>
</ul>
</div>
<div className="bg-white/5 rounded-lg pt-2 pr-2 pb-2 pl-2 space-y-3">
<div className="mb-1 flex items-center gap-2">
<svg className="lucide lucide-package h-4 w-4 text-indigo-400" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
<span className="text-xs font-medium">Assets</span>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="aspect-video overflow-hidden rounded-md bg-white/5">
<img alt="asset-1" className="h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1554260570-9140bd0955c5?q=80&amp;w=640&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-video overflow-hidden rounded-md bg-white/5">
<img alt="asset-2" className="h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=640&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-video overflow-hidden rounded-md bg-white/5">
<img alt="asset-3" className="h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&amp;w=640&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</aside>

<main className="relative md:col-span-6 bg-black/20">
<div className="flex items-center gap-2 border-b border-white/10 px-3 py-2 text-xs text-slate-300">
<svg className="lucide lucide-monitor-smartphone h-4 w-4 text-sky-400" data-lucide="monitor-smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path><path d="M10 19v-3.96 3.15"></path><path d="M7 19h5"></path><rect height="10" rx="2" width="6" x="16" y="12"></rect></svg>
<span>View</span>
<span className="rounded-md bg-white/5 px-1.5 py-0.5">Dashboard</span>
<span className="text-slate-500">|</span>
<span>NeonPay</span>
<div className="ml-auto flex items-center gap-1">
<button className="rounded-md border border-white/10 bg-white/5 p-1 hover:bg-white/10"><svg className="lucide lucide-undo-2 h-4 w-4" data-lucide="undo-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 14 4 9l5-5"></path><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path></svg></button>
<button className="rounded-md border border-white/10 bg-white/5 p-1 hover:bg-white/10"><svg className="lucide lucide-redo-2 h-4 w-4" data-lucide="redo-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 14 5-5-5-5"></path><path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"></path></svg></button>
</div>
</div>
<div className="sm:p-6 pt-4 pr-4 pb-4 pl-4">
<div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 ring-1 ring-white/10">
<img alt="hero-canvas" className="h-[360px] w-full object-cover sm:h-[460px]" src="https://images.unsplash.com/photo-1554907984-15263bfd63d3?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="max-w-xl rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur">
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">NeonPay Dashboard</h3>
<p className="mt-1 text-sm text-slate-300">Secure wallets, lightning-fast transactions, and AI-powered insights—on-chain.</p>
<div className="mt-3 flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-1.5 text-xs font-medium text-black hover:bg-white/90">
<svg className="lucide lucide-wallet h-4 w-4" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
                          Create Wallet
                        </button>
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:bg-white/10">
<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                          Send
                        </button>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute -bottom-6 right-4 hidden w-64 rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur lg:block">
<div className="rounded-lg border border-white/10 bg-black/50 p-2">
<div className="aspect-[9/16] overflow-hidden rounded-md">
<img alt="mobile-preview" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-smartphone h-3 w-3" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg> Mobile 390</span>
<span className="rounded bg-white/5 px-1 py-0.5">Preview</span>
</div>
</div>
</div>
</div>
</main>

<aside className="hidden md:block md:col-span-3 border-l border-white/10 bg-black/30 p-3">
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-slate-300">
<svg className="lucide lucide-sliders-horizontal h-3.5 w-3.5" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line></svg>
                  Properties
                </div>
<button className="rounded-md border border-white/10 bg-white/5 p-1 text-slate-300 hover:bg-white/10">
<svg className="lucide lucide-more-horizontal h-4 w-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="space-y-3">
<div className="bg-white/5 rounded-lg pt-3 pr-3 pb-3 pl-3 space-y-3">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-slate-300">Security</span>
<span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-slate-400">Biometric</span>
</div>
<div className="grid grid-cols-3 gap-2 text-[11px]">
<button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 hover:bg-white/10 transition"><svg className="lucide lucide-shield mr-1 inline h-3.5 w-3.5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>2FA</button>
<button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 hover:bg-white/10 transition"><svg className="lucide lucide-fingerprint mr-1 inline h-3.5 w-3.5" data-lucide="fingerprint" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path><path d="M2 12a10 10 0 0 1 18-6"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path></svg>Biometric</button>
<button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 hover:bg-white/10 transition"><svg className="lucide lucide-key-round mr-1 inline h-3.5 w-3.5" data-lucide="key-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>Keys</button>
</div>
</div>
<div className="bg-white/5 rounded-lg pt-3 pr-3 pb-3 pl-3 space-y-3">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-slate-300 font-medium">Fees</span>
<span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-slate-400">Low</span>
</div>
<div className="grid grid-cols-2 gap-2 text-[11px]">
<div className="rounded-md border border-white/10 bg-black/40 px-2 py-1 text-slate-300 font-medium text-center">Tx: Low</div>
<div className="rounded-md border border-white/10 bg-black/40 px-2 py-1 text-slate-300 font-medium text-center">FX: Smart</div>
</div>
<div className="mt-2 grid grid-cols-4 gap-2 text-[11px]">
<button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 font-medium hover:bg-white/10 transition focus:ring-2 focus:ring-sky-500 focus:outline-none">Swap</button>
<button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 font-medium hover:bg-white/10 transition focus:ring-2 focus:ring-sky-500 focus:outline-none">Stake</button>
<button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 font-medium hover:bg-white/10 transition focus:ring-2 focus:ring-sky-500 focus:outline-none">Earn</button>
<button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 font-medium hover:bg-white/10 transition focus:ring-2 focus:ring-sky-500 focus:outline-none">Send</button>
</div>
</div>
<div className="bg-white/5 rounded-lg pt-3 pr-3 pb-3 pl-3 space-y-3">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-slate-300">Status</span>
<span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-slate-400">On-chain</span>
</div>
<div className="space-y-2 text-[11px]">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 text-slate-300"><svg className="lucide lucide-zap w-[14px] h-[14px] text-sky-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>Speed</span>
<span className="rounded bg-white/5 px-1.5 py-0.5 text-slate-400">Lightning</span>
</div>
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 text-slate-300"><svg className="lucide lucide-globe h-3.5 w-3.5 text-amber-400" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>Reach</span>
<span className="rounded bg-white/5 px-1.5 py-0.5 text-slate-400">100+</span>
</div>
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 text-slate-300"><svg className="lucide lucide-bot h-3.5 w-3.5 text-purple-400" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>AI</span>
<span className="rounded bg-white/5 px-1.5 py-0.5 text-slate-400">Smart</span>
</div>
</div>
</div>
</div>
</aside>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden z-10" id="about">
<div className="mx-auto max-w-7xl px-4 md:px-6 py-20">
<div className="text-center mb-12">
<p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
<svg className="lucide lucide-sparkles h-4 w-4 text-sky-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
            Where Finance Meets the Future.
          </p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">About NeonPay</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="inline-flex items-center gap-2 text-sm text-slate-300 mb-2">
<svg className="lucide lucide-flag h-4 w-4" data-lucide="flag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path></svg>
              Our Mission
            </div>
<p className="text-slate-300 text-sm">To make the future of finance simple, secure, and accessible for everyone.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="inline-flex items-center gap-2 text-sm text-slate-300 mb-2">
<svg className="lucide lucide-sun h-4 w-4" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
              Our Vision
            </div>
<p className="text-slate-300 text-sm">A world where money moves at the speed of light, ownership is transparent, and financial freedom is in everyone’s hands.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="inline-flex items-center gap-2 text-sm text-slate-300 mb-2">
<svg className="lucide lucide-rocket h-4 w-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
              Our Story
            </div>
<p className="text-slate-300 text-sm">Founded by innovators at the intersection of finance and blockchain, NeonPay is built to simplify Web3 adoption—bridging banking and DeFi so you can control your digital future.</p>
</div>
</div>
</div>
</section>

<div className="relative overflow-hidden antialiased z-10 text-neutral-200 bg-black" id="features" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_30%,rgba(120,119,198,0.15),transparent_60%)]"></div>
<section className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32" data-component="feature-rotator">
<div className="text-center mb-16 md:mb-20">
<p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
<svg className="lucide lucide-workflow h-4 w-4 text-emerald-400" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
            Why NeonPay?
          </p>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
            Fast, secure, and global—on transparent rails
          </h2>
<p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Lightning transactions, secure wallets, global reach, AI investments, and seamless integrations.
          </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
<div className="order-2 lg:order-1">
<h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-8">
              Built for speed, trust, and scale
            </h3>
<div className="space-y-6" id="bulletList"><button className="group w-full flex items-start gap-4 text-left p-4 rounded-xl transition-all hover:bg-white/[0.02] border border-transparent hover:border-white/10" data-index="0" type="button">
<div className="flex-shrink-0"><span className="h-8 w-1 rounded-full bg-sky-400 transition-colors block"></span></div>
<div className="">
<span className="text-base sm:text-lg text-white font-semibold block mb-2">⚡ Lightning Transactions</span>
<span className="text-sm text-neutral-400 leading-relaxed">Move value globally in seconds with minimal fees and high reliability.</span>
</div></button><button className="group w-full flex items-start gap-4 text-left p-4 rounded-xl transition-all hover:bg-white/[0.02] border border-transparent hover:border-white/10" data-index="1" type="button">
<div className="flex-shrink-0"><span className="h-8 w-1 rounded-full bg-neutral-700 group-hover:bg-neutral-600 transition-colors block"></span></div>
<div className="">
<span className="text-base sm:text-lg text-neutral-500 group-hover:text-neutral-300 font-semibold block mb-2">🔒 Secure Wallets</span>
<span className="text-sm text-neutral-500 group-hover:text-neutral-400 leading-relaxed">Defense‑grade security with biometric access and encrypted keys.</span>
</div></button><button className="group w-full flex items-start gap-4 text-left p-4 rounded-xl transition-all hover:bg-white/[0.02] border border-transparent hover:border-white/10" data-index="2" type="button">
<div className="flex-shrink-0"><span className="h-8 w-1 rounded-full bg-neutral-700 group-hover:bg-neutral-600 transition-colors block"></span></div>
<div>
<span className="text-base sm:text-lg text-neutral-500 group-hover:text-neutral-300 font-semibold block mb-2">🌐 Global Reach</span>
<span className="text-sm text-neutral-500 group-hover:text-neutral-400 leading-relaxed">Access a borderless network supporting 100+ currencies and tokens.</span>
</div></button><button className="group w-full flex items-start gap-4 text-left p-4 rounded-xl transition-all hover:bg-white/[0.02] border border-transparent hover:border-white/10" data-index="3" type="button">
<div className="flex-shrink-0"><span className="h-8 w-1 rounded-full bg-neutral-700 group-hover:bg-neutral-600 transition-colors block"></span></div>
<div>
<span className="text-base sm:text-lg text-neutral-500 group-hover:text-neutral-300 font-semibold block mb-2">📈 Smart Investments</span>
<span className="text-sm text-neutral-500 group-hover:text-neutral-400 leading-relaxed">Let AI assist with risk‑aware, automated portfolio strategies.</span>
</div></button><button className="group w-full flex items-start gap-4 text-left p-4 rounded-xl transition-all hover:bg-white/[0.02] border border-transparent hover:border-white/10" data-index="4" type="button">
<div className="flex-shrink-0"><span className="h-8 w-1 rounded-full bg-neutral-700 group-hover:bg-neutral-600 transition-colors block"></span></div>
<div>
<span className="text-base sm:text-lg text-neutral-500 group-hover:text-neutral-300 font-semibold block mb-2">🛠 Seamless Integrations</span>
<span className="text-sm text-neutral-500 group-hover:text-neutral-400 leading-relaxed">One wallet for dApps, DeFi, and NFTs—no friction, just connect.</span>
</div></button></div>
</div>
<div className="relative order-1 lg:order-2">
<div className="relative rounded-2xl border border-neutral-800/80 bg-neutral-900/50 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/5 backdrop-blur-md overflow-hidden">
<div className="h-14 flex items-center gap-3 px-6 border-b border-neutral-800/70 text-neutral-400">
<svg className="lucide lucide-file-text w-5 h-5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<div className="flex items-center gap-2 text-sm">
<span className="truncate font-medium">NeonPay workspace</span>
<span className="opacity-50">›</span>
<span className="truncate text-neutral-300 font-medium">Feature preview</span>
</div>
<div className="ml-auto flex items-center gap-2 opacity-60">
<div className="flex -space-x-1">
<div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
<span className="text-[10px] font-medium text-emerald-300">N</span>
</div>
<div className="w-6 h-6 rounded-full bg-violet-500/20 border border-violet-500/40 flex items-center justify-center">
<span className="text-[10px] font-medium text-violet-300">P</span>
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
<div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-sky-500/10 text-sky-400 ring-1 ring-sky-500/20" id="iconBox"><svg className="lucide lucide-zap w-7 h-7" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></div>
<div className="relative mb-6">
<h4 className="text-3xl font-semibold tracking-tight text-white flex flex-wrap items-center gap-3 mb-3">
<span className="inline-flex items-center rounded-lg px-3 py-2 ring-1 text-lg ring-sky-500/60 bg-sky-500/10 text-sky-200" id="highlightPill">Lightning</span>
<span id="highlightTail">transactions</span>
</h4>
<div className="relative" id="badgesLayer"></div>
</div>
<p className="text-neutral-400 leading-relaxed text-lg mb-8" id="bodyCopy"><span className="rounded-md px-2 py-0.5 ring-1" style={{background: 'rgba(14,165,233,0.18)', boxShadow: 'inset 0 0 0 1px rgba(14,165,233,0.35)'}}>Fast</span>, <span className="rounded-md px-2 py-0.5 ring-1" style={{background: 'rgba(16,185,129,0.18)', boxShadow: 'inset 0 0 0 1px rgba(16,185,129,0.35)'}}>low‑cost</span> payments across borders with on‑chain finality.</p>
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
</div>

<section className="relative z-10" id="how">
<div className="mx-auto max-w-7xl px-4 md:px-6 py-20">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">3 Steps to Start Your Web3 Journey</h2>
<p className="text-slate-300 mt-3">Simple onboarding, powerful possibilities.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="inline-flex items-center gap-2 text-sm text-slate-300 mb-2">
<svg className="lucide lucide-wallet h-4 w-4" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
              Create Your Wallet
            </div>
<p className="text-slate-300 text-sm">Sign up in seconds with your email or mobile.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="inline-flex items-center gap-2 text-sm text-slate-300 mb-2">
<svg className="lucide lucide-banknote h-4 w-4" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
              Add Funds
            </div>
<p className="text-slate-300 text-sm">Deposit fiat or crypto into your NeonPay account.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="inline-flex items-center gap-2 text-sm text-slate-300 mb-2">
<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
              Grow &amp; Transact
            </div>
<p className="text-slate-300 text-sm">Trade, invest, or make secure cross-border payments instantly.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10" id="community">
<div className="mx-auto max-w-7xl px-4 md:px-6 py-20">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Built for People. Backed by Trust.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="inline-flex items-center gap-2 text-sm text-slate-300 mb-2">
<svg className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
              500k+ users
            </div>
<p className="text-slate-300 text-sm">Worldwide and growing every day.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="inline-flex items-center gap-2 text-sm text-slate-300 mb-2">
<svg className="lucide lucide-scan-line h-4 w-4" data-lucide="scan-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path></svg>
              Transparent rails
            </div>
<p className="text-slate-300 text-sm">Transparent blockchain infrastructure.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="inline-flex items-center gap-2 text-sm text-slate-300 mb-2">
<svg className="lucide lucide-shield-check h-4 w-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
              Compliant
            </div>
<p className="text-slate-300 text-sm">Fully compliant with global finance standards.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="inline-flex items-center gap-2 text-sm text-slate-300 mb-2">
<svg className="lucide lucide-handshake h-4 w-4" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
              Trusted partners
            </div>
<p className="text-slate-300 text-sm">Backed by industry-leading partners.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10" id="resources">
<div className="mx-auto max-w-7xl px-4 md:px-6 py-20">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Stay Ahead of the Curve.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="inline-flex items-center gap-2 text-sm text-slate-300 mb-2">
<svg className="lucide lucide-book h-4 w-4" data-lucide="book" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path></svg>
              Guides
            </div>
<p className="text-slate-300 text-sm">Beginner’s guide to Web3 payments.</p>
</article>
<article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="inline-flex items-center gap-2 text-sm text-slate-300 mb-2">
<svg className="lucide lucide-rss h-4 w-4" data-lucide="rss" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
              News
            </div>
<p className="text-slate-300 text-sm">Latest trends in DeFi, NFTs, and crypto adoption.</p>
</article>
<article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="inline-flex items-center gap-2 text-sm text-slate-300 mb-2">
<svg className="lucide lucide-shield h-4 w-4" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
              Tips
            </div>
<p className="text-slate-300 text-sm">How to secure your wallet from phishing.</p>
</article>
<article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="inline-flex items-center gap-2 text-sm text-slate-300 mb-2">
<svg className="lucide lucide-case-upper h-4 w-4" data-lucide="case-upper" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 11h4.5a1 1 0 0 1 0 5h-4a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h3a1 1 0 0 1 0 5"></path><path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16"></path><path d="M3.304 13h6.392"></path></svg>
              Case Studies
            </div>
<p className="text-slate-300 text-sm">Real stories of users thriving with NeonPay.</p>
</article>
</div>
</div>
</section>

<div className="py-24 px-6" id="membership">
<div className="max-w-7xl mx-auto">
<div className="border-white/10 border rounded-3xl p-12 lg:p-16" style={{background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)'}}>
<div className="text-center mb-12">
<p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
<svg className="lucide lucide-sparkles h-4 w-4 text-sky-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              Membership
            </p>
<h3 className="text-3xl lg:text-4xl text-white tracking-tight mb-6 font-semibold">Finance Has Evolved. Have You?</h3>
<p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Don’t get left behind—step into the future with a platform designed for speed, security, and innovation.
            </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="rounded-2xl border border-white/10 p-6 bg-white/[0.02]">
<div className="inline-flex items-center gap-2 text-sm text-slate-300 mb-3">
<svg className="lucide lucide-check-circle2 h-4 w-4 text-sky-400" data-lucide="check-circle2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                Free to get started
              </div>
<p className="text-slate-400 text-sm">Create your wallet in seconds.</p>
</div>
<div className="rounded-2xl border border-white/10 p-6 bg-white/[0.02]">
<div className="inline-flex items-center gap-2 text-sm text-slate-300 mb-3">
<svg className="lucide lucide-globe h-4 w-4 text-sky-400" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                Instant global access
              </div>
<p className="text-slate-400 text-sm">Send, spend, and invest in 100+ currencies and tokens.</p>
</div>
<div className="rounded-2xl border border-white/10 p-6 bg-white/[0.02]">
<div className="inline-flex items-center gap-2 text-sm text-slate-300 mb-3">
<svg className="lucide lucide-headset h-4 w-4 text-sky-400" data-lucide="headset" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path><path d="M21 16v2a4 4 0 0 1-4 4h-5"></path></svg>
                24/7 support
              </div>
<p className="text-slate-400 text-sm">We’re here whenever you need us.</p>
</div>
<div className="rounded-2xl border border-white/10 p-6 bg-white/[0.02] lg:col-span-3">
<div className="inline-flex items-center gap-2 text-sm text-slate-300 mb-3">
<svg className="lucide lucide-cpu h-4 w-4 text-sky-400" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
                Future-proof finance
              </div>
<p className="text-slate-400 text-sm">Built on transparent, secure blockchain infrastructure.</p>
</div>
</div>
<div className="text-center mt-12">
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium text-black transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-sky-500/50" href="#" style={{background: 'linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(226,232,240,1) 100%)'}}>
<svg className="lucide lucide-wallet mr-2 h-4 w-4" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
                Create Your Wallet
              </a>
<a className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium text-slate-200 border border-white/20 hover:border-white/30 transition-all hover:bg-white/5" href="#" style={{background: 'rgba(255, 255, 255, 0.03)'}}>
<svg className="lucide lucide-download mr-2 h-4 w-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                Download the App
              </a>
</div>
</div>
</div>
</div>
</div>

<section className="relative z-10">
<div className="mx-auto max-w-7xl px-4 md:px-6 pb-16">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<h3 className="text-xl font-semibold tracking-tight mb-4">Microcopy</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="inline-flex items-center gap-2 text-slate-200 mb-1"><svg className="lucide lucide-wallet h-4 w-4" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>Empty State (Wallet)</div>
<p>“Your wallet is waiting for its first deposit—fuel your future ⚡.”</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="inline-flex items-center gap-2 text-slate-200 mb-1"><svg className="lucide lucide-check-circle h-4 w-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>Transaction Success</div>
<p>“Transaction complete! The future just got a little closer.”</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="inline-flex items-center gap-2 text-slate-200 mb-1"><svg className="lucide lucide-triangle-alert h-4 w-4" data-lucide="triangle-alert" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>Error Message</div>
<p>“Oops! Even the blockchain hiccups sometimes. Try again.”</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="inline-flex items-center gap-2 text-slate-200 mb-1"><svg className="lucide lucide-info h-4 w-4" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>Onboarding Tooltip</div>
<p>“Pro tip: Secure your seed phrase—it’s your key to everything.”</p>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10">
<div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
<div className="mx-auto max-w-2xl">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Where Finance Meets the Future.</h2>
<p className="mt-2 text-sm text-slate-400">NeonPay helps you send, spend, and invest across borders—instantly and securely.</p>
<div className="mt-4 flex items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-medium text-black hover:bg-white/90 transition" href="#membership">
<svg className="lucide lucide-wallet h-4 w-4" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
                Create Your Wallet
              </a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-medium text-slate-200 hover:bg-white/10 transition" href="#features">
<svg className="lucide lucide-scan-line h-4 w-4" data-lucide="scan-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path></svg>
                Explore Features
              </a>
</div>
</div>
</div>
<div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row">
<span>© <span id="year">2025</span> NeonPay</span>
<div className="flex items-center gap-4">
<a className="hover:text-slate-300 transition" href="#">Terms</a>
<a className="hover:text-slate-300 transition" href="#">Privacy</a>
<a className="hover:text-slate-300 transition" href="#">Status</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden items-center justify-center p-6" id="demoModal">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
<div className="relative w-full max-w-3xl rounded-2xl border border-white/10 bg-neutral-900/90 p-6 ring-1 ring-white/10">
<div className="flex items-center justify-between mb-4">
<div className="inline-flex items-center gap-2 text-sm text-slate-300">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
            NeonPay — Feature Tour
          </div>
<button className="rounded-md border border-white/10 bg-white/5 p-2 hover:bg-white/10" id="closeDemo">
<svg className="lucide lucide-x h-4 w-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-black/60">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="h-full w-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="NeonPay Demo"></iframe>
</div>
</div>
</div>




    </>
  );
}
