import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


    const slides = [
      { 
        key: 'worlds', 
        bullet: 'Live world creation', 
        accent: 'blue', 
        icon: 'cpu', 
        pillText: 'Build', 
        tailText: 'infinite worlds', 
        body: 'Design custom worlds with advanced VR tools. Collaborate in real-time with squad members using voice commands and haptic feedback.', 
        badges: [
          { text: 'alex', color: 'blue', target: 'worlds' }, 
          { text: 'sam', color: 'violet', target: 'voice commands' }
        ] 
      }, 
      { 
        key: 'squad', 
        bullet: 'Squad coordination', 
        accent: 'emerald', 
        icon: 'users', 
        pillText: 'Coordinate', 
        tailText: 'your squad', 
        body: 'Sync strategies with team members across dimensions. Share tactical plans, assign roles, and execute missions seamlessly.', 
        badges: [
          { text: 'nova', color: 'emerald', target: 'strategies' }, 
          { text: 'kai', color: 'amber', target: 'roles' }
        ] 
      }, 
      { 
        key: 'missions', 
        bullet: 'Mission deployment', 
        accent: 'violet', 
        icon: 'rocket', 
        pillText: 'Deploy', 
        tailText: 'epic missions', 
        body: 'Launch complex multi-stage missions with custom objectives. Track progress, assign rewards, and celebrate victories together.', 
        badges: [
          { text: 'zara', color: 'violet', target: 'missions' }, 
          { text: 'rio', color: 'blue', target: 'objectives' }
        ] 
      }
    ];

    const accents = {
      blue: {
        pill: 'ring-blue-500/60 bg-blue-500/10 text-blue-200',
        iconBox: 'bg-blue-500/10 text-blue-400',
        bar: 'bg-blue-400',
      },
      emerald: {
        pill: 'ring-emerald-500/60 bg-emerald-500/10 text-emerald-200',
        iconBox: 'bg-emerald-500/10 text-emerald-400',
        bar: 'bg-emerald-400',
      },
      amber: {
        pill: 'ring-amber-500/60 bg-amber-500/10 text-amber-200',
        iconBox: 'bg-amber-500/10 text-amber-400',
        bar: 'bg-amber-400',
      },
      violet: {
        pill: 'ring-violet-500/60 bg-violet-500/10 text-violet-200',
        iconBox: 'bg-violet-500/10 text-violet-400',
        bar: 'bg-violet-400',
      }
    };

    const highlightMap = {
      worlds: ['worlds', 'voice commands'],
      squad: ['strategies', 'roles'],
      missions: ['missions', 'objectives']
    };

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
        row.className = 'group w-full flex items-center gap-3 sm:gap-4';
        row.innerHTML = `<span class="h-6 w-1 rounded-full ${isActive ? accents[slides[active].accent].bar : 'bg-neutral-700'} transition-colors"></span><span class="text-sm sm:text-base ${isActive ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-300'} font-medium">${s.bullet}</span>`;
        row.addEventListener('click', () => setActive(i, true));
        bulletList.appendChild(row);
      });
    }

    function setIcon(icon, accent) {
      iconBox.className = `w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${accents[accent].iconBox}`;
      iconBox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-lucide="${icon}" class="lucide lucide-${icon} w-6 h-6"></svg>`;
      if (typeof lucide !== 'undefined') {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }
    }

    function colorMap(name, alpha = 1) {
      const colors = {
        blue: `rgba(59,130,246,${alpha})`,
        emerald: `rgba(16,185,129,${alpha})`,
        violet: `rgba(139,92,246,${alpha})`,
        amber: `rgba(245,158,11,${alpha})`
      };
      return colors[name] || `rgba(59,130,246,${alpha})`;
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
        const re = new RegExp(`\\b(${escapeRegExp(token)})\\b`, 'i');
        const bg = colorMap(b.color, 0.18);
        const border = colorMap(b.color, 0.35);
        result = result.replace(re, (m) => {
          return `<span class="rounded-md px-1.5 -mx-0.5 ring-1" style="background:${bg}; box-shadow: inset 0 0 0 1px ${border};">${m}</span>`;
        });
      });
      return result;
    }

    let index = 0;
    let timer;

    function setActive(i, manual = false) {
      index = i % slides.length;
      if (index < 0) index = slides.length - 1;
      const s = slides[index];
      
      renderBullets(index);
      setIcon(s.icon, s.accent);
      
      highlightPill.className = `inline-flex items-center rounded-md px-2.5 py-1.5 ring-1 text-base sm:text-lg ${accents[s.accent].pill}`;
      highlightPill.textContent = s.pillText;
      highlightTail.textContent = s.tailText;
      bodyCopy.innerHTML = applyHighlights(s.body, s.key, s.badges);
      
      if (manual) {
        clearInterval(timer);
        timer = startRotation();
      }
    }

    function startRotation() {
      return setInterval(() => setActive((index + 1) % slides.length), 4500);
    }

    renderBullets(index);
    setActive(0);
    timer = startRotation();

    const section = document.getElementById('aura-emesxzzmo');
    section.addEventListener('mouseenter', () => clearInterval(timer));
    section.addEventListener('mouseleave', () => {
      clearInterval(timer);
      timer = startRotation();
    });

    setTimeout(() => {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }
    }, 100);
  


    (function () {
      function initPricing() {
        const root = document.getElementById('pricing');
        if (!root) return;

        const amountEl = root.querySelector('[data-amount]');
        const periodEl = root.querySelector('[data-period]');
        const deliveryKeyEl = root.querySelector('[data-delivery-key]');
        const deliveryValEl = root.querySelector('[data-delivery-val]');
        const btnProject = root.querySelector('[data-mode-button="project"]');
        const btnMonthly = root.querySelector('[data-mode-button="monthly"]');
        const upsellSwitch = root.querySelector('[data-upsell-switch]');
        const upsellKnob = root.querySelector('[data-upsell-knob]');

        const prices = { project: 24.99, monthly: 19.99 };
        const addon = 9.99;
        const state = { mode: 'project', upsell: false };

        function money(n) {
          return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });
        }

        function render() {
          const base = prices[state.mode];
          const total = base + (state.upsell ? addon : 0);
          amountEl.textContent = money(total);
          periodEl.textContent = state.mode === 'project' ? '/month' : '/month';
          deliveryKeyEl.textContent = state.mode === 'project' ? 'Billing' : 'Billing';
          deliveryValEl.textContent = state.mode === 'project' ? 'Monthly' : 'Annual';

          // Segmented control visuals
          btnProject.classList.toggle('bg-blue-500', state.mode === 'project');
          btnProject.classList.toggle('text-white', state.mode === 'project');
          btnProject.classList.toggle('text-white/80', state.mode !== 'project');

          btnMonthly.classList.toggle('bg-blue-500', state.mode === 'monthly');
          btnMonthly.classList.toggle('text-white', state.mode === 'monthly');
          btnMonthly.classList.toggle('text-white/80', state.mode !== 'monthly');

          // Upsell switch visuals
          upsellSwitch.setAttribute('aria-checked', state.upsell ? 'true' : 'false');
          upsellSwitch.classList.toggle('bg-blue-500', state.upsell);
          upsellSwitch.classList.toggle('bg-white/10', !state.upsell);
          upsellKnob.classList.toggle('translate-x-5', state.upsell);
          upsellKnob.classList.toggle('translate-x-0', !state.upsell);
        }

        btnProject.addEventListener('click', () => { state.mode = 'project'; render(); });
        btnMonthly.addEventListener('click', () => { state.mode = 'monthly'; render(); });
        upsellSwitch.addEventListener('click', () => { state.upsell = !state.upsell; render(); });

        render();
        if (window.lucide && typeof lucide.createIcons === 'function') lucide.createIcons();
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPricing, { once: true });
      } else {
        initPricing();
      }
    })();
  


    const slides = [{ key: 'docs', bullet: 'Real‑time briefs', accent: 'emerald', icon: 'users', pillText: 'Co‑create', tailText: 'product briefs', body: 'Draft clear briefs together with multiplayer editing. Structure work with headings, checklists, and callouts.', badges: [{ text: 'noa', color: 'emerald' , target: 'briefs' }, { text: 'leo', color: 'violet' , target: 'checklists' }] }, { key: 'comments', bullet: 'Threaded reviews', accent: 'amber', icon: 'message-square', pillText: 'Review in', tailText: 'context', body: 'Keep decisions attached to the work with inline threads. Mention teammates, resolve quickly, and move forward.', badges: [{ text: 'ivan', color: 'amber', target: 'threads' }, { text: 'sara', color: 'sky', target: 'Mention' }] }, { key: 'commands', bullet: 'Commands to tickets', accent: 'violet', icon: 'workflow', pillText: 'Turn notes into', tailText: 'tickets', body: 'Use quick commands to convert writing into scoped tickets with owners, labels, and estimates.', badges: [{ text: 'jin',  color: 'violet', target: 'tickets' }, { text: 'nora', color: 'emerald', target: 'owners' }] }]; const accents = { emerald: { pill: 'ring-emerald-500/60 bg-emerald-500/10 text-emerald-200', iconBox: 'bg-emerald-500/10 text-emerald-400', bar: 'bg-emerald-400', }, amber: { pill: 'ring-amber-500/60 bg-amber-500/10 text-amber-200', iconBox: 'bg-amber-500/10 text-amber-400', bar: 'bg-amber-400', }, violet: { pill: 'ring-violet-500/60 bg-violet-500/10 text-violet-200', iconBox: 'bg-violet-500/10 text-violet-400', bar: 'bg-violet-400', }, sky: { pill: 'ring-sky-500/60 bg-sky-500/10 text-sky-200', iconBox: 'bg-sky-500/10 text-sky-400', bar: 'bg-sky-400', } }; const highlightMap = { docs: ['briefs', 'checklists'], comments: ['threads', 'Mention'], commands: ['tickets', 'owners'] }; const root = document.querySelector('[data-component="feature-rotator"]') || document.querySelector('div'); const bulletList = document.getElementById('bulletList'); const iconBox = document.getElementById('iconBox'); const highlightPill = document.getElementById('highlightPill'); const highlightTail = document.getElementById('highlightTail'); const bodyCopy = document.getElementById('bodyCopy'); const badgesLayer = document.getElementById('badgesLayer'); function renderBullets(active) { bulletList.innerHTML = ''; slides.forEach((s, i) => { const isActive = i === active; const row = document.createElement('button'); row.type = 'button'; row.setAttribute('data-index', i); row.className = 'group w-full flex items-center gap-3 sm:gap-4'; row.innerHTML = `<span class="h-6 w-1 rounded-full ${isActive ? accents[slides[active].accent].bar : 'bg-neutral-700'} transition-colors"></span><span class="text-sm sm:text-base ${isActive ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-300'} font-medium">${s.bullet}</span>`; row.addEventListener('click', () => setActive(i, true)); bulletList.appendChild(row); }); } function setIcon(icon, accent) { iconBox.className = `w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${accents[accent].iconBox}`; iconBox.innerHTML = `<i data-lucide="${icon}" class="w-6 h-6"></i>`; lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }); } function setBadges() { badgesLayer.innerHTML = ''; } function colorMap(name, alpha = 1) { const colors = { emerald: `rgba(16,185,129,${alpha})`, violet: `rgba(139,92,246,${alpha})`, amber: `rgba(245,158,11,${alpha})`, sky: `rgba(14,165,233,${alpha})` }; return colors[name] || `rgba(16,185,129,${alpha})`; } function escapeRegExp(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); } function applyHighlights(text, slideKey, badges) { const tokens = (highlightMap[slideKey] || []).slice(); let result = text; tokens.forEach((token, idx) => { const b = badges[idx]; if (!b) return; const re = new RegExp(`\\b(${escapeRegExp(token)})\\b`, 'i'); const bg = colorMap(b.color, 0.18); const border = colorMap(b.color, 0.35); result = result.replace(re, (m) => { return `<span class="rounded-md px-1.5 -mx-0.5 ring-1" style="background:${bg}; box-shadow: inset 0 0 0 1px ${border};">${m}</span>`; }); }); return result; } let index = 0; let timer; function setActive(i, manual = false) { index = i % slides.length; if (index < 0) index = slides.length - 1; const s = slides[index]; renderBullets(index); setIcon(s.icon, s.accent); highlightPill.className = `inline-flex items-center rounded-md px-2.5 py-1.5 ring-1 text-base sm:text-lg ${accents[s.accent].pill}`; highlightPill.textContent = s.pillText; highlightTail.textContent = s.tailText; bodyCopy.innerHTML = applyHighlights(s.body, s.key, s.badges); setBadges(); if (manual) { clearInterval(timer); timer = startRotation(); } } function startRotation() { return setInterval(() => setActive((index + 1) % slides.length), 4500); } renderBullets(index); setActive(0); timer = startRotation(); root.addEventListener('mouseenter', () => clearInterval(timer)); root.addEventListener('mouseleave', () => { clearInterval(timer); timer = startRotation(); }); setTimeout(() => lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }), 100);
  


      // Icons
      lucide.createIcons();

      // Chart
      const ctx = document.getElementById('perfChart');
      if (ctx) {
        const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 120);
        gradient.addColorStop(0, 'rgba(99,102,241,0.2)');
        gradient.addColorStop(1, 'rgba(99,102,241,0.0)');

        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
            datasets: [{
              data: [45, 78, 62, 85, 94, 76, 89],
              borderColor: 'rgb(99,102,241)',
              backgroundColor: gradient,
              fill: true,
              tension: 0.35,
              pointRadius: 0,
              borderWidth: 2
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { enabled: true, mode: 'index', intersect: false } },
            scales: {
              x: { display: false, grid: { display: false } },
              y: { display: false, grid: { display: false } }
            }
          }
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="K7xzrAoejHe2lHXqTJzm"></div></div>

<div className="min-h-screen w-full">

<div className="pointer-events-none absolute inset-0">

<div className="absolute inset-0 opacity-10 bg-[size:56px_56px] [background-image:linear-gradient(to_right,rgba(99,102,241,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.15)_1px,transparent_1px)]"></div>

<div className="absolute -inset-x-16 -top-24 h-[520px] md:h-[640px] bg-[radial-gradient(120%_80%_at_50%_0%,rgba(99,102,241,0.08)_0%,rgba(56,189,248,0.06)_35%,transparent_70%)]"></div>
</div>

<div className="fixed top-0 left-0 right-0 z-50 bg-transparent pt-6 pr-6 pb-6 pl-6">
<div className="max-w-4xl mx-auto border border-white/10 rounded-3xl px-8 py-4" style={{background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)'}}>
<div className="flex items-center justify-between">
<div className="flex items-center">
<span className="text-lg font-semibold text-white tracking-tight font-manrope" style={{}}>Infinity</span>
</div>
<ul className="hidden md:flex items-center gap-1 text-sm font-medium text-white/60">
<li className="">
<a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-manrope" href="#" style={{}}>Worlds</a>
</li>
<li>
<a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-manrope" href="#" style={{}}>Gear</a>
</li>
<li className="">
<a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-manrope" href="#" style={{}}>Tournaments</a>
</li>
<li className="">
<a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-manrope" href="#" style={{}}>Players</a>
</li>
<li className="">
<a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-manrope" href="#" style={{}}>Support</a>
</li>
</ul>
<div className="flex items-center gap-3">
<button aria-label="Account" className="hover:bg-white/5 p-2 rounded-xl transition-all duration-300 border border-white/20 backdrop-blur-xl shadow-lg" style={{background: 'rgba(255, 255, 255, 0.1)'}}>
<svg className="w-4 h-4 stroke-[1.5] text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</button>
<button aria-label="Achievements" className="relative hover:bg-white/5 p-2 rounded-xl transition-all duration-300 border border-white/20 backdrop-blur-xl shadow-lg" style={{background: 'rgba(255, 255, 255, 0.1)'}}>
<svg className="w-4 h-4 stroke-[1.5] text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
<circle cx="12" cy="8" r="6"></circle>
</svg>
<span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center font-medium font-manrope" style={{}}>3</span>
</button>
</div>
</div>
</div>
</div>

<main className="relative z-10">
<div className="md:px-8 lg:px-12 md:py-24 mt-16 mb-16 pt-16 pr-6 pb-16 pl-6 items-center justify-center">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
<div className="order-2 lg:order-1">
<div className="p-8 lg:p-10 shadow-xl border rounded-3xl backdrop-blur-sm border-indigo-500/20 bg-gradient-to-br from-blue-500/10 to-purple-600/10 hover:border-indigo-400/40 transition-all duration-300">
<div className="flex items-center gap-3 mb-8">
<div className="flex items-center gap-0.5">
<svg className="stroke-[1.5] fill-amber-600 text-amber-600" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="w-3.5 h-3.5 stroke-[1.5] text-amber-600 fill-amber-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="w-3.5 h-3.5 stroke-[1.5] text-amber-600 fill-amber-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="w-3.5 h-3.5 stroke-[1.5] text-amber-600 fill-amber-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="w-3.5 h-3.5 stroke-[1.5] text-amber-600 fill-amber-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</div>
<span className="text-xs font-medium text-slate-500 font-manrope" style={{}}>4.9 • 2.4M active players</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-8 text-slate-100 font-montserrat font-light tracking-tighter" style={{}}>
            Enter infinite
            <span className="font-light text-neutral-50 tracking-tighter font-montserrat" style={{}}>realities.</span>
</h1>
<p className="text-lg leading-relaxed mb-12 text-zinc-400 font-manrope" style={{}}>
            Dive into immersive virtual worlds where anything is possible. Team up with friends, compete globally, and experience the future of gaming in full VR.
          </p>
<div className="flex flex-col sm:flex-row gap-4 mb-16">
<button className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-medium shadow-lg shadow-blue-500/25 transition-all duration-300 bg-blue-500 hover:bg-blue-400 text-white">
<span className="font-manrope" style={{}}>Join Now</span>
<svg className="w-4 h-4 stroke-[1.5] ml-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
</svg>
</button>
<button className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-medium border transition-all duration-300 hover:bg-white/5 text-slate-300 border-white/20 hover:border-blue-400/40">
<svg className="w-4 h-4 stroke-[1.5] mr-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="font-manrope" style={{}}>System Check</span>
</button>
</div>
<div className="grid grid-cols-3 gap-8">
<div className="text-center">
<div className="w-12 h-12 flex border rounded-2xl mr-auto mb-3 ml-auto items-center justify-center border-white/20 bg-white/10 backdrop-blur-xl shadow-lg">
<svg className="stroke-[1.5] text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
</svg>
</div>
<div className="text-xs font-medium text-blue-300 font-manrope" style={{}}>Cross-Platform</div>
</div>
<div className="text-center">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-white/20 bg-white/10 backdrop-blur-xl shadow-lg">
<svg className="stroke-[1.5] text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="m22 21-3-3m1-4a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"></path>
</svg>
</div>
<div className="text-xs font-medium text-blue-300 font-manrope" style={{}}>Find Players</div>
</div>
<div className="text-center">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-white/20 bg-white/10 backdrop-blur-xl shadow-lg">
<svg className="stroke-[1.5] text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18m-9-9v18"></path>
</svg>
</div>
<div className="text-xs font-medium text-blue-300 font-manrope" style={{}}>Live Events</div>
</div>
</div>
</div>
</div>
<div className="relative order-1 lg:order-2 group">
<div className="overflow-hidden border rounded-3xl shadow-2xl backdrop-blur-sm border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-purple-600/10 hover:border-blue-400/40 transition-all duration-300">
<div className="absolute top-8 left-8 flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium border z-10 backdrop-blur-sm border-emerald-500/20 bg-white/10 text-emerald-300">
<div className="w-2 h-2 rounded-full bg-green-600"></div>
<span className="font-manrope" style={{}}>2.1M Online</span>
</div>
<div className="h-[500px] lg:h-[650px] bg-gradient-to-br from-blue-600/20 to-purple-700/20 relative overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center opacity-30 transition-transform duration-500 group-hover:scale-110 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/474fd6a3-5f05-4898-9a40-ad545895afab_1600w.jpg)]" style={{}}></div>
<img alt="VR gaming setup" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0983da05-1681-4d02-aab6-89899847239b_800w.jpg?w=800&amp;q=80" style={{}}/>
</div>
<div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-6">
<div className="border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl border-white/20 bg-white/10 shadow-lg">
<div className="text-2xl text-slate-100 font-montserrat font-light tracking-tighter" style={{}}>50+</div>
<div className="text-sm mt-1 text-blue-300 font-manrope" style={{}}>Virtual Worlds</div>
</div>
<div className="rounded-2xl p-6 border backdrop-blur-xl border-white/20 bg-white/10 shadow-lg">
<div className="text-2xl text-slate-100 font-montserrat font-light tracking-tighter" style={{}}>24/7</div>
<div className="text-sm mt-1 text-blue-300 font-manrope" style={{}}>Global Servers</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto mb-20 ml-auto pr-4 pl-4">
<div className="text-center mb-20 fade-in" style={{opacity: '1', transform: 'translateY(0px)'}}>
<h2 className="text-4xl sm:text-5xl text-white mb-6 font-montserrat font-light tracking-tighter" style={{}}>
            Your reality, <span className="bg-clip-text font-light text-transparent tracking-tighter font-montserrat bg-neutral-50" style={{}}>amplified</span>
</h2>
<p className="text-xl text-zinc-400 max-w-2xl mx-auto font-manrope" style={{}}>
            Every feature is designed to push the boundaries of virtual reality. Explore infinite worlds, compete with friends, and experience gaming like never before.
        </p>
</div>
<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid group rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover-lift fade-in fade-in-delay-1 overflow-hidden mb-6" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="h-48 bg-gradient-to-br from-blue-600/20 to-purple-700/20 relative overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center opacity-30 transition-transform duration-500 group-hover:scale-110 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f879b8e1-cba6-476a-9fea-a4abd7ca2645_1600w.jpg)]" style={{}}></div>
<div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8c6432ef-00b5-476a-8307-a85a904d1d4f_1600w.jpg)] bg-cover" style={{}}></div>
<div className="absolute bottom-4 left-4">
<div className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
<svg className="h-6 w-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
</div>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight font-manrope" style={{}}>Immersive Worlds</h3>
<p className="text-zinc-400 leading-relaxed text-sm font-manrope" style={{}}>Explore breathtaking virtual environments with photorealistic graphics. From alien planets to medieval kingdoms, each world offers unique adventures and challenges.</p>
<div className="mt-4 flex items-center text-xs text-blue-300 font-manrope" style={{}}>
<svg className="mr-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                    50+ Worlds • Photorealistic Graphics
                </div>
</div>
</div>

<div className="break-inside-avoid group rounded-3xl bg-gradient-to-br from-emerald-500/10 to-cyan-600/10 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover-lift fade-in fade-in-delay-2 overflow-hidden mb-6" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="h-32 bg-gradient-to-br from-emerald-600/20 to-cyan-700/20 relative overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center opacity-30 transition-transform duration-500 group-hover:scale-110 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a0573e8d-a170-4eda-aba7-4f4fc78c43b7_800w.jpg)]" style={{}}></div>
<div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8d3cb9d4-adbe-41e5-a351-a4a6c22d6037_1600w.jpg)] bg-cover"></div>
<div className="absolute bottom-3 left-4">
<div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path></svg>
</div>
</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold text-white mb-3 tracking-tight font-manrope" style={{}}>Instant Matchmaking</h3>
<p className="text-zinc-400 text-sm leading-relaxed font-manrope" style={{}}>Jump into matches with players of your skill level in seconds. Advanced algorithms ensure balanced and competitive gameplay every time.</p>
<div className="mt-3 flex items-center text-xs text-emerald-300 font-manrope" style={{}}>
<svg className="mr-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="m22 21-3-3m1-4a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"></path></svg>
                    Smart Matching • Skill-Based • Global
                </div>
</div>
</div>

<div className="break-inside-avoid group rounded-3xl bg-gradient-to-br from-violet-500/10 to-pink-600/10 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300 hover-lift fade-in fade-in-delay-3 overflow-hidden mb-6" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="h-40 bg-gradient-to-br from-violet-600/20 to-pink-700/20 relative overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center opacity-30 transition-transform duration-500 group-hover:scale-110 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/90c7269b-467c-4ab1-b003-073d48f6ce28_800w.jpg)]" style={{}}></div>
<div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e1ed071a-62b8-4e8b-ae0e-a5f35fce1100_1600w.jpg)] bg-cover"></div>
<div className="absolute bottom-3 left-4">
<div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold text-white mb-3 tracking-tight font-manrope" style={{}}>Elite Tournaments</h3>
<p className="text-zinc-400 text-sm leading-relaxed font-manrope" style={{}}>Compete in daily tournaments and seasonal championships. Climb the leaderboards and win exclusive rewards and recognition.</p>
<div className="mt-3 flex items-center text-xs text-violet-300 font-manrope" style={{}}>
<svg className="mr-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
                    Competitive • Rewards • Rankings
                </div>
</div>
</div>

<div className="break-inside-avoid group rounded-3xl bg-gradient-to-br from-amber-500/10 to-orange-600/10 border border-amber-500/20 hover:border-amber-400/40 transition-all duration-300 hover-lift fade-in overflow-hidden mb-6" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="h-56 bg-gradient-to-br from-amber-600/20 to-orange-700/20 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 via-orange-500/20 to-red-600/30 transition-transform duration-500 group-hover:scale-110"></div>
<div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9e252043-172b-4024-8fe3-cc4b6691d1bf_1600w.jpg)] bg-cover"></div>
<div className="absolute bottom-3 left-4">
<div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v6l3-3-3-3z"></path><path d="m8 22 4-6-4-6"></path><path d="M2 12h6"></path><path d="M22 12h-6"></path><path d="M12 8v6l-3-3 3-3z"></path><path d="m16 2-4 6 4 6"></path></svg>
</div>
</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold text-white mb-3 tracking-tight font-manrope" style={{}}>Cutting-Edge Tech</h3>
<p className="text-zinc-400 text-sm leading-relaxed font-manrope" style={{}}>Experience true presence with haptic feedback, spatial audio, and eye tracking. Our proprietary engine delivers 120fps with ultra-low latency for seamless immersion.</p>
<div className="mt-3 flex items-center text-xs text-amber-300 font-manrope" style={{}}>
<svg className="mr-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v6l3-3-3-3z"></path><path d="m8 22 4-6-4-6"></path><path d="M2 12h6"></path><path d="M22 12h-6"></path></svg>
                    Haptic • 120fps • Ultra-Low Latency
                </div>
</div>
</div>

<div className="break-inside-avoid group rounded-3xl bg-gradient-to-br from-orange-500/10 to-red-600/10 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 hover-lift fade-in fade-in-delay-4 overflow-hidden mb-6" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="h-28 bg-gradient-to-br from-orange-600/20 to-red-700/20 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 via-red-500/20 to-pink-600/30 transition-transform duration-500 group-hover:scale-110"></div>
<div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/608f5480-5a5a-48f2-ba16-38b548c291c0_1600w.jpg)] bg-cover"></div>
<div className="absolute bottom-3 left-4">
<div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle className="" cx="9" cy="7" r="4"></circle><path d="m22 21-3-3m1-4a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"></path></svg>
</div>
</div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold text-white mb-2 tracking-tight font-manrope" style={{}}>Social Gaming Hub</h3>
<p className="text-zinc-400 text-sm leading-relaxed font-manrope" style={{}}>Build squads, join guilds, and create lasting friendships. Voice chat, gestures, and social spaces make connecting natural and fun.</p>
<div className="mt-3 flex items-center text-xs text-orange-300 font-manrope" style={{}}>
<svg className="mr-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="m22 21-3-3m1-4a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"></path></svg>
                    Guilds • Voice Chat • Social Spaces
                </div>
</div>
</div>

<div className="break-inside-avoid group rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover-lift fade-in fade-in-delay-5 overflow-hidden mb-6" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="h-36 bg-gradient-to-br from-cyan-600/20 to-blue-700/20 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-indigo-600/30 transition-transform duration-500 group-hover:scale-110"></div>
<div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fa601e6c-9023-400f-9160-7304f64e5ba1_1600w.jpg)] bg-cover"></div>
<div className="absolute bottom-3 left-4">
<div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
</div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold text-white mb-2 tracking-tight font-manrope" style={{}}>Cross-Platform Unity</h3>
<p className="text-zinc-400 text-sm leading-relaxed font-manrope" style={{}}>Play with anyone, anywhere. Seamless cross-platform support means your friends can join whether they're on PC, console, or mobile VR.</p>
<div className="mt-3 flex items-center text-xs text-cyan-300 font-manrope" style={{}}>
<svg className="mr-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="14" x="5" y="2"></rect><rect height="8" rx="2" width="4" x="9" y="2"></rect><path d="M7 12h10"></path></svg>
                    PC • Console • Mobile VR
                </div>
</div>
</div>
</div>
</div><div className="max-w-7xl sm:px-6 lg:px-8 mt-20 mr-auto ml-auto pr-4 pl-4">
<div className="fade-in text-center mb-20" style={{opacity: '1', transform: 'translateY(0px)'}}>
<h2 className="text-4xl sm:text-5xl text-white mb-6 font-montserrat font-light tracking-tighter" style={{}}>
        VR gaming, <span className="bg-clip-text font-light text-transparent tracking-tighter font-montserrat bg-neutral-50" style={{}}>redefined</span>
</h2>
<p className="text-xl text-zinc-400 max-w-2xl mx-auto font-manrope" style={{}}>
        Experience next-generation virtual reality gaming with immersive worlds, competitive tournaments, and cutting-edge technology designed for the ultimate VR experience.
    </p>
</div>
<div className="rounded-2xl ring-1 ring-white/10 overflow-hidden bg-white/5">
<div className="flex items-end justify-between p-6 border-b border-white/10">
<h2 className="text-2xl sm:text-3xl text-white font-montserrat font-light tracking-tighter" style={{}}>Platform Stats</h2>
<p className="hidden sm:block text-xs text-neutral-400 font-manrope" style={{}}>Performance, community, achievements</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12">

<div className="p-6 md:col-span-3 border-b md:border-b-0 md:border-r border-white/10">
<p className="text-sm text-neutral-400 font-manrope" style={{}}>Next-Gen VR Platform</p>
<p className="mt-1 text-lg font-medium tracking-tight text-white font-manrope" style={{}}>Astrolux Engine</p>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-400">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="font-manrope" style={{}}>Global Servers • 120fps • Ultra-Low Latency</span>
</div>
</div>

<div className="relative md:col-span-6 md:row-span-2 border-b md:border-b-0 md:border-r border-white/10">
<div className="relative aspect-[16/10] md:aspect-[9/10] lg:aspect-[16/10]">
<img alt="VR gaming experience with immersive virtual worlds" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/eb834c32-d0b9-48b8-9423-c3e1b39e4821_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent pointer-events-none"></div>

<div className="hidden md:block absolute inset-0 pointer-events-none">
<div className="absolute top-5 right-5 rounded-xl bg-black/45 ring-1 ring-white/10 backdrop-blur-sm p-4">
<div className="text-2xl lg:text-3xl text-white font-montserrat font-light tracking-tighter" style={{}}>50+</div>
<p className="text-[11px] text-neutral-300 mt-0.5 font-manrope" style={{}}>Virtual Worlds</p>
</div>
<div className="absolute bottom-5 left-5 rounded-xl bg-black/45 ring-1 ring-white/10 backdrop-blur-sm p-4">
<div className="text-2xl lg:text-3xl text-white font-montserrat font-light tracking-tighter" style={{}}>2.4M</div>
<p className="text-[11px] text-neutral-300 mt-0.5 font-manrope" style={{}}>Active Players</p>
</div>
<div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-xl bg-black/45 ring-1 ring-white/10 backdrop-blur-sm p-4">
<div className="text-2xl lg:text-3xl text-white font-montserrat font-light tracking-tighter" style={{}}>24/7</div>
<p className="text-[11px] text-neutral-300 mt-0.5 font-manrope" style={{}}>Global Servers</p>
</div>
</div>
</div>
</div>

<div className="p-6 md:col-span-3 border-b md:border-b-0">
<div className="text-3xl text-white font-montserrat font-light tracking-tighter" style={{}}>15K</div>
<p className="text-xs text-neutral-400 mt-1 font-manrope" style={{}}>Daily Tournaments</p>
</div>

<div className="p-6 md:col-span-3 border-t md:border-t border-white/10 md:border-r">
<p className="text-sm text-neutral-300 leading-relaxed font-manrope" style={{}}>
                    Built from the ground up for next-generation VR gaming. Experience photorealistic worlds, haptic feedback, and seamless cross-platform play with cutting-edge technology.
                </p>
<div className="mt-4 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-white bg-white/10 hover:bg-white/20 rounded-full px-3 py-1.5 ring-1 ring-white/10">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
<span className="font-manrope" style={{}}>Start Playing</span>
</div>
</div>

<div className="p-6 md:col-span-3 border-t border-white/10">
<div className="text-3xl text-white font-montserrat font-light tracking-tighter" style={{}}>100M+</div>
<p className="text-xs text-neutral-400 mt-1 font-manrope" style={{}}>Total Gameplay Hours</p>
</div>
</div>

<div className="md:hidden border-t border-white/10 grid grid-cols-3">
<div className="p-4 text-center border-r border-white/10">
<div className="text-xl font-semibold tracking-tight text-white font-manrope" style={{}}>50+</div>
<p className="text-[11px] text-neutral-400 mt-0.5 font-manrope" style={{}}>Worlds</p>
</div>
<div className="p-4 text-center border-r border-white/10">
<div className="text-xl font-semibold tracking-tight text-white font-manrope" style={{}}>2.4M</div>
<p className="text-[11px] text-neutral-400 mt-0.5 font-manrope" style={{}}>Players</p>
</div>
<div className="p-4 text-center">
<div className="text-xl font-semibold tracking-tight text-white font-manrope" style={{}}>24/7</div>
<p className="text-[11px] text-neutral-400 mt-0.5 font-manrope" style={{}}>Servers</p>
</div>
</div>
</div>
</div><div className="min-h-screen relative overflow-hidden text-neutral-200 antialiased font-sans" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  </style>


<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_30%,rgba(120,119,198,0.15),transparent_60%)]"></div>
<section className="max-w-7xl md:px-8 md:py-24 mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="">
<h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-montserrat font-light tracking-tighter" style={{}}>
        Build, explore, and dominate virtual realms
      </h1>
<div className="mt-10 space-y-5" id="bulletList"><button className="group w-full flex items-center gap-3 sm:gap-4" data-index="0" type="button"><span className="h-6 w-1 rounded-full bg-neutral-700 transition-colors"></span><span className="text-sm sm:text-base text-neutral-500 group-hover:text-neutral-300 font-medium">Live world creation</span></button><button className="group w-full flex items-center gap-3 sm:gap-4" data-index="1" type="button"><span className="h-6 w-1 rounded-full bg-emerald-400 transition-colors"></span><span className="text-sm sm:text-base text-white font-medium">Squad coordination</span></button><button className="group w-full flex items-center gap-3 sm:gap-4" data-index="2" type="button"><span className="h-6 w-1 rounded-full bg-neutral-700 transition-colors"></span><span className="text-sm sm:text-base text-neutral-500 group-hover:text-neutral-300 font-medium">Mission deployment</span></button></div>
</div>
<div className="relative">
<div className="relative rounded-2xl border border-neutral-800/80 bg-neutral-900/50 shadow-[0_10px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/5 backdrop-blur-md overflow-hidden">
<div className="h-12 flex items-center gap-2 px-4 border-b border-neutral-800/70 text-neutral-400 text-sm">
<svg className="lucide lucide-gamepad-2 w-4 h-4" data-lucide="gamepad-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>
<span className="truncate font-manrope" style={{}}>Astrolux Hub</span>
<span className="opacity-50 font-manrope" style={{}}>›</span>
<span className="truncate text-neutral-300 font-manrope" style={{}}>Galaxy Arena</span>
<span className="ml-auto flex items-center gap-1 opacity-60">
<svg className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</span>
</div>
<div className="relative px-6 md:px-8 py-8 md:py-10">
<div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-1 text-neutral-700">
<span className="w-1 h-1 rounded-full bg-current"></span>
<span className="w-1 h-1 rounded-full bg-current"></span>
<span className="w-1 h-1 rounded-full bg-current"></span>
</div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-emerald-500/10 text-emerald-400" id="iconBox"><svg className="lucide lucide-users w-6 h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg></div>
<div className="relative">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-100 flex flex-wrap items-center gap-3">
<span className="inline-flex items-center rounded-md px-2.5 py-1.5 ring-1 text-base sm:text-lg ring-emerald-500/60 bg-emerald-500/10 text-emerald-200" id="highlightPill" style={{}}>Coordinate</span>
<span className="font-montserrat font-light tracking-tighter" id="highlightTail" style={{}}>your squad</span>
</h2>
<div className="relative" id="badgesLayer"></div>
</div>
<p className="mt-5 text-neutral-400 leading-relaxed max-w-prose text-[17px] sm:text-lg font-manrope" id="bodyCopy" style={{}}>Sync <span className="rounded-md px-1.5 -mx-0.5 ring-1" style={{background: 'rgba(16,185,129,0.18)', boxShadow: 'inset 0 0 0 1px rgba(16,185,129,0.35)'}}>strategies</span> with team members across dimensions. Share tactical plans, assign <span className="rounded-md px-1.5 -mx-0.5 ring-1" style={{background: 'rgba(245,158,11,0.18)', boxShadow: 'inset 0 0 0 1px rgba(245,158,11,0.35)'}}>roles</span>, and execute missions seamlessly.</p>
<div className="mt-8 space-y-2">
<div className="h-3 rounded bg-neutral-800/70 w-2/3"></div>
<div className="h-3 rounded bg-neutral-800/70 w-5/6"></div>
<div className="h-3 rounded bg-neutral-800/70 w-1/2"></div>
</div>
<div className="mt-8 space-y-2 opacity-80">
<div className="h-3 rounded bg-neutral-800/70 w-11/12"></div>
<div className="h-3 rounded bg-neutral-800/70 w-2/3"></div>
<div className="h-3 rounded bg-neutral-800/70 w-3/4"></div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-950/80 to-transparent"></div>
</div>
</div>
</div>
</div>

</section><section className="max-w-7xl sm:px-6 sm:mt-20 mt-10 mr-auto mb-20 ml-auto pr-4 pl-4" id="pricing">
<div className="relative overflow-hidden rounded-[40px] border border-blue-500/20 bg-slate-950 text-white shadow-[0_8px_30px_rgba(59,130,246,0.15)]">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(59,130,246,0.08),transparent_60%)]">
</div>
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_120%,rgba(147,51,234,0.06),transparent_60%)]">
</div>
<div className="absolute inset-0 bg-[radial-gradient(#3b82f61a_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15]">
</div>
</div>
<div className="relative sm:p-8 my-0 pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-2 text-sm text-blue-300/80 font-sans">
<svg className="w-4 h-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<span className="font-manrope" style={{}}>Premium access</span>
</div>
<div className="mt-2 text-center">
<h2 className="text-[56px] sm:text-[80px] leading-none font-montserrat font-light tracking-tighter" style={{}}>Join VR.</h2>
<div className="mt-5 inline-flex items-center gap-1 rounded-full bg-white/10 p-1 ring-1 ring-blue-500/20">
<button className="text-sm tracking-tight rounded-full px-3 py-1.5 bg-blue-500 text-white font-manrope" data-mode-button="project" style={{}} type="button">Monthly</button>
<button className="text-sm tracking-tight rounded-full px-3 py-1.5 text-white/80 font-manrope" data-mode-button="monthly" style={{}} type="button">Annual</button>
</div>
</div>
<div className="mt-8 rounded-3xl bg-white/5 ring-1 ring-blue-500/20 p-4 sm:p-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch">

<div className="md:col-span-4">
<div className="h-full rounded-2xl bg-black/30 ring-1 ring-blue-500/20 p-5 flex flex-col justify-between">
<div className="">
<p className="text-base font-medium tracking-tight text-blue-200 font-manrope" style={{}}>Unlock exclusive worlds?</p>
<p className="mt-2 text-sm text-white/70 font-manrope" style={{}}>Access premium content and early beta releases.</p>
</div>
<div className="mt-8 flex items-center justify-between">
<div className="text-sm font-sans">
<span className="text-blue-300 font-manrope" style={{}}>+ $9.99</span>
</div>
<button aria-checked="false" className="inline-flex h-6 w-11 items-center rounded-full bg-white/10 ring-1 ring-blue-500/20 transition-colors duration-200" data-upsell-switch="" role="switch" type="button">
<span className="h-4 w-4 translate-x-0 rounded-full bg-blue-400 transition-transform duration-200" data-upsell-knob=""></span>
<span className="sr-only font-manrope" style={{}}>Toggle Premium Content add-on</span>
</button>
</div>
</div>
</div>

<div className="md:col-span-4">
<div className="h-full rounded-2xl bg-black/30 ring-1 ring-blue-500/20 p-5 flex flex-col">
<div className="flex-1">
<div className="flex items-end gap-2">
<div className="text-5xl sm:text-6xl lg:text-7xl tabular-nums text-blue-200 font-montserrat font-light tracking-tighter" data-amount="" style={{}}>$24.99</div>
<div className="pb-2 text-white/60 text-base font-manrope" data-period="" style={{}}>/month</div>
</div>
</div>
<div className="mt-8 pt-4 border-t border-blue-500/20 text-xs text-white/70 flex items-center justify-between font-sans">
<span className="font-manrope" data-delivery-key="" style={{}}>Billing</span>
<span className="font-manrope" data-delivery-val="" style={{}}>Monthly</span>
</div>
</div>
</div>

<div className="md:col-span-4">
<div className="h-full rounded-2xl bg-black/30 ring-1 ring-blue-500/20 p-5 flex flex-col">
<ul className="space-y-3">
<li className="flex items-start gap-2">
<svg className="w-5 h-5 text-blue-400 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm font-manrope" style={{}}>Unlimited world access</span>
</li>
<li className="flex items-start gap-2">
<svg className="w-5 h-5 text-blue-400 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm font-manrope" style={{}}>Priority matchmaking &amp; servers</span>
</li>
<li className="flex items-start gap-2">
<svg className="w-5 h-5 text-blue-400 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm font-manrope" style={{}}>Tournament entry &amp; rewards</span>
</li>
</ul>
<div className="mt-auto">
<a className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight text-white bg-blue-500 hover:bg-blue-400 transition-colors border border-blue-500/20 shadow-lg shadow-blue-500/25" href="#contact">
<span className="font-manrope" style={{}}>Start Playing</span>
<svg className="w-4 h-4" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>

<p className="mt-4 text-[11px] text-white/50 text-center font-manrope" style={{}}>Join millions of players worldwide. Cancel anytime, no hidden fees.</p>
</div>
</div>

</section><footer className="w-full bg-black border-white/10 border-t">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<a className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md" href="#overview">
<span className="text-lg font-semibold tracking-tight font-manrope" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial'}}>Infinity</span>
</a>
<p className="mt-3 text-sm text-gray-400 max-w-md font-manrope" style={{}}>
                        Where reality meets adventure. Experience infinite virtual worlds with cutting-edge VR technology.
                    </p>
</div>
<div className="">
<h4 className="text-sm font-medium text-white font-manrope" style={{}}>Platform</h4>
<ul className="mt-3 space-y-2 text-sm text-gray-400">
<li className=""><a className="hover:text-gray-200 transition-colors font-manrope" href="#worlds" style={{}}>Virtual Worlds</a></li>
<li className=""><a className="hover:text-gray-200 transition-colors font-manrope" href="#tournaments" style={{}}>Tournaments</a></li>
<li><a className="hover:text-gray-200 transition-colors font-manrope" href="#gear" style={{}}>VR Equipment</a></li>
<li><a className="hover:text-gray-200 transition-colors font-manrope" href="#players" style={{}}>Find Players</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium text-white font-manrope" style={{}}>Company</h4>
<ul className="mt-3 space-y-2 text-sm text-gray-400">
<li className=""><a className="hover:text-gray-200 transition-colors font-manrope" href="#pricing" style={{}}>Pricing</a></li>
<li className=""><a className="hover:text-gray-200 transition-colors font-manrope" href="#support" style={{}}>Support</a></li>
<li><a className="hover:text-gray-200 transition-colors font-manrope" href="#community" style={{}}>Community</a></li>
<li><a className="hover:text-gray-200 transition-colors font-manrope" href="#status" style={{}}>Server Status</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-500 font-manrope" style={{}}>
                    © <span className="font-manrope" id="year" style={{}}>2025</span> Astrolux VR. All rights reserved.
                </p>
<div className="flex items-center gap-4 text-xs text-gray-500">
<a className="hover:text-gray-300 transition-colors font-manrope" href="#terms" style={{}}>Terms of Service</a>
<a className="hover:text-gray-300 transition-colors font-manrope" href="#privacy" style={{}}>Privacy Policy</a>
<a className="inline-flex items-center gap-1 hover:text-gray-300 transition-colors font-manrope" href="#overview" style={{}}>
                        Back to top
                        <svg className="w-3.5 h-3.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 7-7 7 7"></path>
<path d="M12 19V5"></path>
</svg>
</a>
</div>
</div>
</div>
</footer>

</div>
</main>
</div>





    </>
  );
}
