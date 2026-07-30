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
      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


        // Rotator content
        const slides = [
          {
            key: 'stages',
            bullet: 'Pick your stage',
            accent: 'blue',
            icon: 'music-4',
            pillText: 'Choose',
            tailText: 'your stage',
            body: 'Browse a curated lineup and jump to the main stage or discover hidden gems in side rooms. Save favorites and get alerts before headline drops.',
            badges: [
              { text: 'ari', color: 'blue', target: 'stage' },
              { text: 'sol', color: 'violet', target: 'lineup' }
            ]
          },
          {
            key: 'crew',
            bullet: 'Find your crew',
            accent: 'emerald',
            icon: 'users',
            pillText: 'Sync',
            tailText: 'with your crew',
            body: 'Form private parties, share links, and meet at the rail. Proximity voice makes your crew sound close—even in a packed crowd.',
            badges: [
              { text: 'nova', color: 'emerald', target: 'crew' },
              { text: 'zed', color: 'amber', target: 'voice' }
            ]
          },
          {
            key: 'moments',
            bullet: 'Capture moments',
            accent: 'violet',
            icon: 'camera',
            pillText: 'Capture',
            tailText: 'unforgettable moments',
            body: 'Record highlight clips, tag friends, and auto‑generate after‑movies. Your best moments sync across devices for easy sharing.',
            badges: [
              { text: 'rio', color: 'violet', target: 'moments' },
              { text: 'kai', color: 'blue', target: 'clips' }
            ]
          }
        ];

        const accents = {
          blue: {
            pill: 'ring-blue-500/60 bg-blue-500/10 text-blue-200',
            iconBox: 'bg-blue-500/10 text-blue-400',
            bar: 'bg-blue-400'
          },
          emerald: {
            pill: 'ring-emerald-500/60 bg-emerald-500/10 text-emerald-200',
            iconBox: 'bg-emerald-500/10 text-emerald-400',
            bar: 'bg-emerald-400'
          },
          violet: {
            pill: 'ring-violet-500/60 bg-violet-500/10 text-violet-200',
            iconBox: 'bg-violet-500/10 text-violet-400',
            bar: 'bg-violet-400'
          },
          amber: {
            pill: 'ring-amber-500/60 bg-amber-500/10 text-amber-200',
            iconBox: 'bg-amber-500/10 text-amber-400',
            bar: 'bg-amber-400'
          }
        };

        const highlightMap = {
          stages: ['stage', 'lineup'],
          crew: ['crew', 'voice'],
          moments: ['moments', 'clips']
        };

        const bulletList = document.getElementById('bulletList');
        const iconBox = document.getElementById('iconBox');
        const highlightPill = document.getElementById('highlightPill');
        const highlightTail = document.getElementById('highlightTail');
        const bodyCopy = document.getElementById('bodyCopy');
        const rotatorRoot = document.getElementById('rotator');

        function renderBullets(active) {
          bulletList.innerHTML = '';
          slides.forEach((s, i) => {
            const isActive = i === active;
            const row = document.createElement('button');
            row.type = 'button';
            row.setAttribute('data-index', i);
            row.className = 'group w-full flex items-center gap-3 sm:gap-4';
            row.innerHTML = `
              <span class="h-6 w-1 rounded-full ${isActive ? accents[slides[active].accent].bar : 'bg-neutral-700'} transition-colors"></span>
              <span class="text-sm sm:text-base ${isActive ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-300'} font-medium" style="font-family: Inter;">${s.bullet}</span>
            `;
            row.addEventListener('click', () => setActive(i, true));
            bulletList.appendChild(row);
          });
        }

        function setIcon(icon, accent) {
          iconBox.className = `w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${accents[accent].iconBox}`;
          iconBox.innerHTML = `<i data-lucide="${icon}" class="w-6 h-6"></i>`;
          if (window.lucide && typeof lucide.createIcons === 'function') {
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

        rotatorRoot.addEventListener('mouseenter', () => clearInterval(timer));
        rotatorRoot.addEventListener('mouseleave', () => {
          clearInterval(timer);
          timer = startRotation();
        });
      


        (function () {
          function initPasses() {
            const root = document.getElementById('passes');
            if (!root) return;

            const amountEl = root.querySelector('[data-amount]');
            const periodEl = root.querySelector('[data-period]');
            const deliveryKeyEl = root.querySelector('[data-delivery-key]');
            const deliveryValEl = root.querySelector('[data-delivery-val]');
            const btnSingle = root.querySelector('[data-mode-button="single"]');
            const btnSeason = root.querySelector('[data-mode-button="season"]');
            const upsellSwitch = root.querySelector('[data-upsell-switch]');
            const upsellKnob = root.querySelector('[data-upsell-knob]');

            const prices = { single: 24, season: 79 };
            const addon = 12;
            const state = { mode: 'single', upsell: false };

            function money(n) {
              return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
            }

            function render() {
              const base = prices[state.mode];
              const total = base + (state.upsell ? addon : 0);
              amountEl.textContent = money(total);
              periodEl.textContent = state.mode === 'single' ? '/event' : '/season';
              deliveryKeyEl.textContent = 'Pass';
              deliveryValEl.textContent = state.mode === 'single' ? 'Single Event' : 'Season Pass';

              btnSingle.classList.toggle('bg-blue-500', state.mode === 'single');
              btnSingle.classList.toggle('text-white', state.mode === 'single');
              btnSingle.classList.toggle('text-white/80', state.mode !== 'single');

              btnSeason.classList.toggle('bg-blue-500', state.mode === 'season');
              btnSeason.classList.toggle('text-white', state.mode === 'season');
              btnSeason.classList.toggle('text-white/80', state.mode !== 'season');

              upsellSwitch.setAttribute('aria-checked', state.upsell ? 'true' : 'false');
              upsellSwitch.classList.toggle('bg-blue-500', state.upsell);
              upsellSwitch.classList.toggle('bg-white/10', !state.upsell);
              upsellKnob.classList.toggle('translate-x-5', state.upsell);
              upsellKnob.classList.toggle('translate-x-0', !state.upsell);
            }

            btnSingle.addEventListener('click', () => { state.mode = 'single'; render(); });
            btnSeason.addEventListener('click', () => { state.mode = 'season'; render(); });
            upsellSwitch.addEventListener('click', () => { state.upsell = !state.upsell; render(); });

            render();
            if (window.lucide && typeof lucide.createIcons === 'function') {
              lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
            }
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initPasses, { once: true });
          } else {
            initPasses();
          }
        })();
      


    // Icons
    if (window.lucide && typeof lucide.createIcons === 'function') {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }

    // Attendance chart
    (function () {
      const c = document.getElementById('attChart');
      if (!c) return;
      const ctx = c.getContext('2d');
      const gradient = ctx.createLinearGradient(0, 0, 0, 120);
      gradient.addColorStop(0, 'rgba(59,130,246,0.25)');
      gradient.addColorStop(1, 'rgba(59,130,246,0.00)');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
          datasets: [{
            data: [180, 220, 260, 240, 310, 390, 360],
            borderColor: 'rgb(59,130,246)',
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
    })();

    // Year
    (function () {
      const y = document.getElementById('year');
      if (y) y.textContent = new Date().getFullYear();
    })();
  
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
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="p7Ff6pfTrb5Gs59C7nLC"></div></div>

<div className="fixed top-0 w-full h-screen -z-10">
<div className="absolute inset-0 opacity-10 bg-[size:56px_56px] [background-image:linear-gradient(to_right,rgba(59,130,246,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(147,51,234,0.15)_1px,transparent_1px)]"></div>
<div className="absolute -inset-x-16 -top-24 h-[520px] md:h-[640px] bg-[radial-gradient(120%_80%_at_50%_0%,rgba(59,130,246,0.08)_0%,rgba(147,51,234,0.06)_35%,transparent_70%)]"></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 pt-6 pr-6 pb-6 pl-6">
<div className="max-w-4xl mx-auto border border-white/10 rounded-3xl px-8 py-4" style={{background: `linear-gradient(135deg, rgba(59,130,246,0.10) 0%, rgba(147,51,234,0.10) 100%)`, backdropFilter: `blur(40px)`, webkitBackdropFilter: `blur(40px)`}}>
<div className="flex items-center justify-between">
<div className="flex items-center">
<span className="text-lg font-semibold text-white tracking-tight" style={{fontFamily: `Inter`}}>Infinity Live</span>
</div>
<ul className="hidden md:flex items-center gap-1 text-sm font-medium text-white/70">
<li><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5" href="#" style={{fontFamily: `Inter`}}>Festivals</a></li>
<li className=""><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5" href="#" style={{fontFamily: `Inter`}}>Venues</a></li>
<li className=""><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5" href="#" style={{fontFamily: `Inter`}}>Artists</a></li>
<li className=""><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5" href="#" style={{fontFamily: `Inter`}}>Schedule</a></li>
<li className=""><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5" href="#" style={{fontFamily: `Inter`}}>Support</a></li>
</ul>
<div className="flex items-center gap-3">
<button aria-label="Account" className="hover:bg-white/5 p-2 rounded-xl transition-all duration-300 border border-white/20 backdrop-blur-xl shadow-lg" style={{background: `rgba(255,255,255,0.1)`}}>
<svg className="lucide lucide-user-round w-4 h-4 text-white/70" data-lucide="user-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg>
</button>
<button aria-label="Notifications" className="relative hover:bg-white/5 p-2 rounded-xl transition-all duration-300 border border-white/20 backdrop-blur-xl shadow-lg" style={{background: `rgba(255,255,255,0.1)`}}>
<svg className="lucide lucide-bell w-4 h-4 text-white/70" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 text-white text-[10px] rounded-full flex items-center justify-center font-medium" style={{fontFamily: `Inter`}}>3</span>
</button>
</div>
</div>
</div>
</header>
<main className="relative z-10">

<section className="md:px-8 lg:px-12 md:py-24 mt-16 mb-16 pt-16 pr-6 pb-16 pl-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

<div className="order-2 lg:order-1">
<div className="p-8 lg:p-10 shadow-xl border rounded-3xl backdrop-blur-sm border-indigo-500/20 bg-gradient-to-br from-blue-500/10 to-purple-600/10 hover:border-indigo-400/40 transition-all duration-300">
<h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6 text-slate-100 tracking-tight font-light" style={{fontFamily: `Inter`}}>
                Festivals without
                <span className="font-light text-neutral-50 tracking-tight" style={{fontFamily: `Inter`}}>borders.</span>
</h1>
<p className="text-lg leading-relaxed mb-10 text-zinc-400" style={{fontFamily: `Inter`}}>
                Step into virtual venues that feel alive. Roam stages, meet artists, and experience real-world events with spatial audio and immersive crowds—no travel required.
              </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<button className="relative inline-flex items-center justify-center px-8 py-4 rounded-full text-sm sm:text-base font-medium text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-[1.01] active:translate-y-px focus:outline-none focus:ring-2 focus:ring-blue-500" style={{fontFamily: `Inter`, isolation: `isolate`, background: `transparent`}}>
<span aria-hidden="true" className="absolute inset-0 rounded-full pointer-events-none animate-spin" style={{padding: `2px`, background: `conic-gradient(from 0deg, transparent 0%, #1d4ed8 5%, #8484ff 15%, #1d4ed8 30%, transparent 40%, transparent 100%)`, webkitMask: `linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)`, webkitMaskComposite: `xor`, mask: `linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)`, maskComposite: `exclude`, animationDuration: `2.5s`}}></span>
<span aria-hidden="true" className="absolute inset-[3px] rounded-full bg-black/80 ring-1 ring-white/10 pointer-events-none"></span>
<span aria-hidden="true" className="absolute inset-0 rounded-full pointer-events-none opacity-60 animate-spin" style={{background: `linear-gradient(-50deg, transparent, rgba(29,78,216,0.75), transparent)`, maskImage: `radial-gradient(circle at bottom, transparent 45%, black 65%)`, animationDuration: `4s`, animationDirection: `reverse`}}></span>
<span className="relative z-10">Enter a venue</span>
<svg className="lucide lucide-play w-4 h-4 ml-2 relative z-10" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
<button className="inline-flex transition-all duration-300 hover:bg-white/5 hover:border-blue-400/40 text-sm font-medium text-slate-300 border-white/20 border rounded-xl pt-4 pr-8 pb-4 pl-8 items-center justify-center" style={{fontFamily: `Inter`}}>
<svg className="lucide lucide-check-circle-2 w-4 h-4 mr-2" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                  Device check
                </button>
</div>
<div className="grid grid-cols-3 gap-6">
<div className="text-center">
<div className="w-12 h-12 flex border rounded-2xl mx-auto mb-3 items-center justify-center border-white/20 bg-white/10 backdrop-blur-xl shadow-lg">
<svg className="lucide lucide-smartphone w-5 h-5 text-white" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<div className="text-xs font-medium text-blue-300" style={{fontFamily: `Inter`}}>Cross‑Device</div>
</div>
<div className="text-center">
<div className="w-12 h-12 flex border rounded-2xl mx-auto mb-3 items-center justify-center border-white/20 bg-white/10 backdrop-blur-xl shadow-lg">
<svg className="lucide lucide-users w-5 h-5 text-white" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="text-xs font-medium text-blue-300" style={{fontFamily: `Inter`}}>Meet Friends</div>
</div>
<div className="text-center">
<div className="w-12 h-12 flex border rounded-2xl mx-auto mb-3 items-center justify-center border-white/20 bg-white/10 backdrop-blur-xl shadow-lg">
<svg className="lucide lucide-radio w-5 h-5 text-white" data-lucide="radio" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16.247 7.761a6 6 0 0 1 0 8.478"></path><path d="M19.075 4.933a10 10 0 0 1 0 14.134"></path><path d="M4.925 19.067a10 10 0 0 1 0-14.134"></path><path d="M7.753 16.239a6 6 0 0 1 0-8.478"></path><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<div className="text-xs font-medium text-blue-300" style={{fontFamily: `Inter`}}>Live Sets</div>
</div>
</div>
</div>
</div>

<div className="relative order-1 lg:order-2 group">
<div className="overflow-hidden border rounded-3xl shadow-2xl backdrop-blur-sm border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-purple-600/10 hover:border-blue-400/40 transition-all duration-300">
<div className="absolute top-8 left-8 flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium border z-10 backdrop-blur-sm border-emerald-500/20 bg-white/10 text-emerald-300" style={{fontFamily: `Inter`}}>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
                Live: Neon Dunes
              </div>
<div className="h-[500px] lg:h-[650px] bg-gradient-to-br from-blue-600/20 to-purple-700/20 relative overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center opacity-30 transition-transform duration-500 group-hover:scale-110 bg-[url(https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=2000&auto=format&fit=crop)]"></div>
<img alt="Virtual festival crowd and stage" className="w-full h-full transition-transform duration-500 group-hover:scale-110 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/009b1373-14ec-472b-af1a-2cd1e8f97116_1600w.jpg" />
</div>
<div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-6">
<div className="bg-white/10 border-white/20 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-lg backdrop-blur-xl group relative" id="" style={{fontFamily: `Inter`, perspective: `1000px`, padding: `20px`}}>
<div className="transition-all duration-500 w-full group-hover:[transform:rotate3d(0.5,1,0,30deg)] group-hover:[background-position:-100px_100px,_-100px_100px]" style={{paddingTop: `50px`, border: `3px solid rgb(255, 255, 255)`, transformStyle: `preserve-3d`, background: `linear-gradient(135deg,#0000 18.75%,#f3f3f3 0 31.25%,#0000 0), repeating-linear-gradient(45deg,#f3f3f3 -6.25% 6.25%,#ffffff 0 18.75%)`, backgroundSize: `60px 60px`, backgroundPosition: `0 0, 0 0`, backgroundColor: `#f0f0f0`, boxShadow: `rgba(142, 142, 142, 0.3) 0px 30px 30px -10px`}}>
<div className="absolute" style={{top: `30px`, right: `30px`, height: `60px`, width: `60px`, background: `white`, border: `1px solid rgb(7, 185, 255)`, padding: `10px`, transform: `translate3d(0px, 0px, 80px)`, boxShadow: `rgba(100, 100, 111, 0.2) 0px 17px 10px -10px`}}>
<span className="block text-center uppercase" style={{fontSize: `9px`, fontWeight: `700`, color: `rgb(4, 193, 250)`, letterSpacing: `0.04em`}}>Stages</span>
<span className="block text-center" style={{fontSize: `20px`, fontWeight: `800`, color: `rgb(4, 193, 250)`}}>120+</span>
</div>
<div className="bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-500 to-purple-500" style={{background: `rgba(4, 193, 250, 0.732)`, padding: `60px 25px 25px 25px`, transition: `all 0.5s ease-in-out`, transformStyle: `preserve-3d`}}>
<div className="tracking-tight" style={{display: `inline-block`, color: `white`, fontSize: `25px`, fontWeight: `800`, transform: `translate3d(0px, 0px, 50px)`}}>Global Stages</div>
<div className="" style={{marginTop: `10px`, fontSize: `12px`, fontWeight: `700`, color: `#f2f2f2`, transform: `translate3d(0px, 0px, 30px)`}}>Experience 120+ venues worldwide in real time.</div>
<div className="inline-flex items-center" style={{cursor: `pointer`, marginTop: `1rem`, fontWeight: `900`, fontSize: `9px`, textTransform: `uppercase`, color: `rgb(7, 185, 255)`, background: `white`, padding: `0.5rem 0.7rem`, transform: `translate3d(0px, 0px, 20px)`}}>See more</div>
</div>
</div>
</div>
<div className="border rounded-2xl p-6 backdrop-blur-xl border-white/20 bg-white/10 shadow-lg">
<div className="text-2xl text-slate-100 tracking-tight font-light" style={{fontFamily: `Inter`}}>24/7</div>
<div className="text-sm mt-1 text-blue-300" style={{fontFamily: `Inter`}}>Live & Replays</div>
</div>
</div>
</div>
</div>

</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 lg:px-8 mx-auto mb-20 pr-4 pl-4">
<div className="text-center mb-16">
<h2 className="text-4xl sm:text-5xl text-white mb-5 tracking-tight font-light" style={{fontFamily: `Inter`}}>
          Your event, <span className="text-neutral-50 tracking-tight font-light" style={{fontFamily: `Inter`}}>amplified</span>
</h2>
<p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto" style={{fontFamily: `Inter`}}>
          From massive main stages to intimate lounges—every feature is tuned for unforgettable virtual festival moments.
        </p>
</div>
<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid group rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 overflow-hidden mb-6">
<div className="h-48 relative overflow-hidden">
<div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110 bg-[url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop)] bg-cover bg-center opacity-90"></div>
<div className="absolute bottom-4 left-4">
<div className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
<svg className="lucide lucide-audio-lines w-6 h-6 text-white" data-lucide="audio-lines" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 10v3"></path><path d="M6 6v11"></path><path d="M10 3v18"></path><path d="M14 8v7"></path><path d="M18 5v13"></path><path d="M22 10v3"></path></svg>
</div>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight" style={{fontFamily: `Inter`}}>Immersive Stages</h3>
<p className="text-zinc-400 text-sm leading-relaxed" style={{fontFamily: `Inter`}}>Explore dynamic worlds with synchronized visuals, lasers, and pyrotechnics. Feel the bass with spatial audio and haptics.</p>
<div className="mt-4 flex items-center text-xs text-blue-300" style={{fontFamily: `Inter`}}>
<svg className="lucide lucide-globe w-4 h-4 mr-2" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
              120+ Stages • 3D Lightshows
            </div>
</div>
</div>

<div className="break-inside-avoid group rounded-3xl bg-gradient-to-br from-emerald-500/10 to-cyan-600/10 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 overflow-hidden mb-6">
<div className="h-32 relative overflow-hidden">
<div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110 bg-[url(https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2000&auto=format&fit=crop)] bg-cover bg-center opacity-90"></div>
<div className="absolute bottom-3 left-4">
<div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
<svg className="lucide lucide-handshake w-5 h-5 text-white" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
</div>
</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight" style={{fontFamily: `Inter`}}>Meet & Greets</h3>
<p className="text-zinc-400 text-sm leading-relaxed" style={{fontFamily: `Inter`}}>Join moderated Q&As, backstage cams, and signed digital mementos with your favorite artists.</p>
<div className="mt-3 flex items-center text-xs text-emerald-300" style={{fontFamily: `Inter`}}>
<svg className="lucide lucide-users w-4 h-4 mr-2" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
              VIP Rooms • Backstage Access
            </div>
</div>
</div>

<div className="break-inside-avoid group rounded-3xl bg-gradient-to-br from-violet-500/10 to-pink-600/10 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300 overflow-hidden mb-6">
<div className="h-40 relative overflow-hidden">
<div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110 bg-[url(https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2000&auto=format&fit=crop)] bg-cover bg-center opacity-90"></div>
<div className="absolute bottom-3 left-4">
<div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
<svg className="lucide lucide-wand-2 w-5 h-5 text-white" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
</div>
</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight" style={{fontFamily: `Inter`}}>Interactive Lightshows</h3>
<p className="text-zinc-400 text-sm leading-relaxed" style={{fontFamily: `Inter`}}>Vote on visuals, trigger crowd waves, and watch the stage react to the audience in real time.</p>
<div className="mt-3 flex items-center text-xs text-violet-300" style={{fontFamily: `Inter`}}>
<svg className="lucide lucide-sparkle w-4 h-4 mr-2" data-lucide="sparkle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
              Crowd‑reactive FX
            </div>
</div>
</div>

<div className="break-inside-avoid group rounded-3xl bg-gradient-to-br from-amber-500/10 to-orange-600/10 border border-amber-500/20 hover:border-amber-400/40 transition-all duration-300 overflow-hidden mb-6">
<div className="h-56 relative overflow-hidden">
<div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110 bg-[url(https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2000&auto=format&fit=crop)] bg-cover bg-center opacity-70"></div>
<div className="absolute bottom-3 left-4">
<div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
<svg className="lucide lucide-headphones w-5 h-5 text-white" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
</div>
</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight" style={{fontFamily: `Inter`}}>Spatial Audio</h3>
<p className="text-zinc-400 text-sm leading-relaxed" style={{fontFamily: `Inter`}}>Precision‑mapped soundscapes place you center‑stage. Move through the venue and hear the mix shift naturally.</p>
<div className="mt-3 flex items-center text-xs text-amber-300" style={{fontFamily: `Inter`}}>
<i className="w-4 h-4 mr-2" data-lucide="waveform"></i>
              3D Mix • Low Latency
            </div>
</div>
</div>

<div className="break-inside-avoid group rounded-3xl bg-gradient-to-br from-orange-500/10 to-red-600/10 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 overflow-hidden mb-6">
<div className="h-28 relative overflow-hidden">
<div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110 bg-[url(https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2000&auto=format&fit=crop)] bg-cover bg-center opacity-80"></div>
<div className="absolute bottom-3 left-4">
<div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
<svg className="lucide lucide-shopping-bag w-5 h-5 text-white" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</div>
</div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold text-white mb-2 tracking-tight" style={{fontFamily: `Inter`}}>Merch & Drops</h3>
<p className="text-zinc-400 text-sm leading-relaxed" style={{fontFamily: `Inter`}}>Limited merch, collectible posters, and exclusive after‑movie access—delivered digitally or shipped.</p>
<div className="mt-3 flex items-center text-xs text-orange-300" style={{fontFamily: `Inter`}}>
<svg className="lucide lucide-badge-dollar-sign w-4 h-4 mr-2" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
              Limited Editions • Verified
            </div>
</div>
</div>

<div className="break-inside-avoid group rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden mb-6">
<div className="h-36 relative overflow-hidden">
<div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110 bg-[url(https://images.unsplash.com/photo-1616531770192-d66e5fa8b3e5?q=80&w=2000&auto=format&fit=crop)] bg-cover bg-center opacity-70"></div>
<div className="absolute bottom-3 left-4">
<div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
<svg className="lucide lucide-monitor-smartphone w-5 h-5 text-white" data-lucide="monitor-smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path><path d="M10 19v-3.96 3.15"></path><path d="M7 19h5"></path><rect height="10" rx="2" width="6" x="16" y="12"></rect></svg>
</div>
</div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold text-white mb-2 tracking-tight" style={{fontFamily: `Inter`}}>Cross‑Device Unity</h3>
<p className="text-zinc-400 text-sm leading-relaxed" style={{fontFamily: `Inter`}}>Attend on VR, desktop, or mobile and stay in sync with friends—no matter the device.</p>
<div className="mt-3 flex items-center text-xs text-cyan-300" style={{fontFamily: `Inter`}}>
<svg className="lucide lucide-link-2 w-4 h-4 mr-2" data-lucide="link-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>
              VR • Desktop • Mobile
            </div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 lg:px-8 mx-auto pr-4 pl-4">
<div className="rounded-2xl ring-1 ring-white/10 overflow-hidden bg-white/5">
<div className="flex items-end justify-between p-6 border-b border-white/10">
<h2 className="text-2xl sm:text-3xl text-white tracking-tight font-light" style={{fontFamily: `Inter`}}>Platform Snapshot</h2>
<p className="hidden sm:block text-xs text-neutral-400" style={{fontFamily: `Inter`}}>Attendance, stages, artists</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12">

<div className="p-6 md:col-span-3 border-b md:border-b-0 md:border-r border-white/10">
<p className="text-sm text-neutral-400" style={{fontFamily: `Inter`}}>Live Events Engine</p>
<p className="mt-1 text-lg font-medium tracking-tight text-white" style={{fontFamily: `Inter`}}>Infinity Pulse</p>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-400" style={{fontFamily: `Inter`}}>
<svg className="lucide lucide-globe w-4 h-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
              Global Venues • 3D Audio • Ultra‑low Latency
            </div>
</div>

<div className="relative md:col-span-6 md:row-span-2 border-b md:border-b-0 md:border-r border-white/10">
<div className="relative aspect-[16/10] md:aspect-[9/10] lg:aspect-[16/10]">
<img alt="Immersive virtual festival stage" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2000&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent pointer-events-none"></div>

<div className="hidden md:block absolute inset-0 pointer-events-none">
<div className="absolute top-5 right-5 rounded-xl bg-black/45 ring-1 ring-white/10 backdrop-blur-sm p-4">
<div className="text-2xl lg:text-3xl text-white tracking-tight font-light" style={{fontFamily: `Inter`}}>2.1M</div>
<p className="text-[11px] text-neutral-300 mt-0.5" style={{fontFamily: `Inter`}}>Live Attendees</p>
</div>
<div className="absolute bottom-5 left-5 rounded-xl bg-black/45 ring-1 ring-white/10 backdrop-blur-sm p-4">
<div className="text-2xl lg:text-3xl text-white tracking-tight font-light" style={{fontFamily: `Inter`}}>480+</div>
<p className="text-[11px] text-neutral-300 mt-0.5" style={{fontFamily: `Inter`}}>Artists</p>
</div>
<div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-xl bg-black/45 ring-1 ring-white/10 backdrop-blur-sm p-4">
<div className="text-2xl lg:text-3xl text-white tracking-tight font-light" style={{fontFamily: `Inter`}}>120</div>
<p className="text-[11px] text-neutral-300 mt-0.5" style={{fontFamily: `Inter`}}>Stages</p>
</div>
</div>
</div>
</div>

<div className="p-6 md:col-span-3 border-b md:border-b-0">
<div className="text-3xl text-white tracking-tight font-light" style={{fontFamily: `Inter`}}>98.7%</div>
<p className="text-xs text-neutral-400 mt-1" style={{fontFamily: `Inter`}}>Positive Feedback</p>
</div>

<div className="p-6 md:col-span-3 border-t md:border-t border-white/10 md:border-r">
<p className="text-sm text-neutral-300 leading-relaxed" style={{fontFamily: `Inter`}}>
              Built for unforgettable shows. Photoreal venues, crowd choreography, and artist‑driven worlds—streamed smoothly anywhere.
            </p>
<div className="mt-4 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-white bg-white/10 hover:bg-white/20 rounded-full px-3 py-1.5 ring-1 ring-white/10" style={{fontFamily: `Inter`}}>
<svg className="lucide lucide-music-4 w-4 h-4" data-lucide="music-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><path d="m9 9 12-2"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
              Explore lineups
            </div>
</div>

<div className="p-6 md:col-span-3 border-t border-white/10">
<div className="">
<h3 className="text-sm text-white/90 tracking-tight mb-2 font-medium" style={{fontFamily: `Inter`}}>Attendance trend</h3>
<div className="rounded-xl ring-1 ring-white/10 bg-black/30 p-3">
<div className="" style={{height: `120px`}}>
<div className="relative h-full w-full">
<canvas className="absolute inset-0" height="240" id="attChart" style={{display: `block`, boxSizing: `border-box`, height: `120px`, width: `232px`}} width="464"></canvas>
</div>
</div>
</div>
<p className="text-[11px] text-neutral-400 mt-2" style={{fontFamily: `Inter`}}>Past 7 days (UTC)</p>
</div>
</div>
</div>

<div className="md:hidden border-t border-white/10 grid grid-cols-3">
<div className="p-4 text-center border-r border-white/10">
<div className="text-xl font-semibold tracking-tight text-white" style={{fontFamily: `Inter`}}>2.1M</div>
<p className="text-[11px] text-neutral-400 mt-0.5" style={{fontFamily: `Inter`}}>Attendees</p>
</div>
<div className="p-4 text-center border-r border-white/10">
<div className="text-xl font-semibold tracking-tight text-white" style={{fontFamily: `Inter`}}>480+</div>
<p className="text-[11px] text-neutral-400 mt-0.5" style={{fontFamily: `Inter`}}>Artists</p>
</div>
<div className="p-4 text-center">
<div className="text-xl font-semibold tracking-tight text-white" style={{fontFamily: `Inter`}}>120</div>
<p className="text-[11px] text-neutral-400 mt-0.5" style={{fontFamily: `Inter`}}>Stages</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl md:px-8 md:py-24 mx-auto pt-16 pr-6 pb-16 pl-6" id="rotator">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="">
<h2 className="text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight font-light" style={{fontFamily: `Inter`}}>
            Curate your perfect night
          </h2>
<div className="mt-10 space-y-5" id="bulletList"><button className="group w-full flex items-center gap-3 sm:gap-4" data-index="0" type="button">
<span className="h-6 w-1 rounded-full bg-neutral-700 transition-colors"></span>
<span className="text-sm sm:text-base text-neutral-500 group-hover:text-neutral-300 font-medium" style={{fontFamily: `Inter`}}>Pick your stage</span>
</button><button className="group w-full flex items-center gap-3 sm:gap-4" data-index="1" type="button">
<span className="h-6 w-1 rounded-full bg-emerald-400 transition-colors"></span>
<span className="text-sm sm:text-base text-white font-medium" style={{fontFamily: `Inter`}}>Find your crew</span>
</button><button className="group w-full flex items-center gap-3 sm:gap-4" data-index="2" type="button">
<span className="h-6 w-1 rounded-full bg-neutral-700 transition-colors"></span>
<span className="text-sm sm:text-base text-neutral-500 group-hover:text-neutral-300 font-medium" style={{fontFamily: `Inter`}}>Capture moments</span>
</button></div>
</div>
<div className="relative">
<div className="relative rounded-2xl border border-neutral-800/80 bg-neutral-900/50 shadow-[0_10px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/5 backdrop-blur-md overflow-hidden">
<div className="h-12 flex items-center gap-2 px-4 border-b border-neutral-800/70 text-neutral-400 text-sm" style={{fontFamily: `Inter`}}>
<svg className="lucide lucide-ticket w-4 h-4" data-lucide="ticket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
<span className="truncate">Infinity Live</span>
<span className="opacity-50">›</span>
<span className="truncate text-neutral-300">Event Control</span>
<span className="ml-auto flex items-center gap-1 opacity-60">
<svg className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</span>
</div>
<div className="relative px-6 md:px-8 py-8 md:py-10">
<div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-1 text-neutral-700">
<span className="w-1 h-1 rounded-full bg-current"></span>
<span className="w-1 h-1 rounded-full bg-current"></span>
<span className="w-1 h-1 rounded-full bg-current"></span>
</div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-emerald-500/10 text-emerald-400" id="iconBox"><svg className="lucide lucide-users w-6 h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg></div>
<div className="relative">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-100 flex flex-wrap items-center gap-3" style={{fontFamily: `Inter`}}>
<span className="inline-flex items-center rounded-md px-2.5 py-1.5 ring-1 text-base sm:text-lg ring-emerald-500/60 bg-emerald-500/10 text-emerald-200" id="highlightPill">Sync</span>
<span className="font-light tracking-tight" id="highlightTail" style={{fontFamily: `Inter`}}>with your crew</span>
</h3>
</div>
<p className="mt-5 text-neutral-400 leading-relaxed max-w-prose text-[17px] sm:text-lg" id="bodyCopy" style={{fontFamily: `Inter`}}>Form private parties, share links, and meet at the rail. Proximity <span className="rounded-md px-1.5 -mx-0.5 ring-1" style={{background: `rgba(245,158,11,0.18)`, boxShadow: `inset 0 0 0 1px rgba(245,158,11,0.35)`}}>voice</span> makes your <span className="rounded-md px-1.5 -mx-0.5 ring-1" style={{background: `rgba(16,185,129,0.18)`, boxShadow: `inset 0 0 0 1px rgba(16,185,129,0.35)`}}>crew</span> sound close—even in a packed crowd.</p>
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

</section>

<section className="max-w-7xl sm:px-6 sm:mt-16 mt-8 mx-auto mb-20 pr-4 pl-4" id="passes">
<div className="relative overflow-hidden rounded-[40px] border border-blue-500/20 bg-slate-950 text-white shadow-[0_8px_30px_rgba(59,130,246,0.15)]">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(59,130,246,0.08),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_120%,rgba(147,51,234,0.06),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(#3b82f61a_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15]"></div>
</div>
<div className="relative pt-6 pr-6 pb-6 pl-6 sm:p-8">
<div className="flex items-center gap-2 text-sm text-blue-300/80" style={{fontFamily: `Inter`}}>
<svg className="lucide lucide-ticket w-4 h-4" data-lucide="ticket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
            Passes
          </div>
<div className="mt-2 text-center">
<h2 className="text-[56px] sm:text-[80px] leading-none tracking-tight font-light" style={{fontFamily: `Inter`}}>Get in.</h2>
<div className="mt-5 inline-flex items-center gap-1 rounded-full bg-white/10 p-1 ring-1 ring-blue-500/20">
<button className="text-sm tracking-tight rounded-full px-3 py-1.5 bg-blue-500 text-white" data-mode-button="single" style={{fontFamily: `Inter`}} type="button">Single Event</button>
<button className="text-sm tracking-tight rounded-full px-3 py-1.5 text-white/80" data-mode-button="season" style={{fontFamily: `Inter`}} type="button">Season Pass</button>
</div>
</div>
<div className="mt-8 rounded-3xl bg-white/5 ring-1 ring-blue-500/20 p-4 sm:p-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch">

<div className="md:col-span-4">
<div className="h-full rounded-2xl bg-black/30 ring-1 ring-blue-500/20 p-5 flex flex-col justify-between">
<div>
<p className="text-base font-medium tracking-tight text-blue-200" style={{fontFamily: `Inter`}}>Add VIP Lounge?</p>
<p className="mt-2 text-sm text-white/70" style={{fontFamily: `Inter`}}>Exclusive rooms, meet & greets, priority queue.</p>
</div>
<div className="mt-8 flex items-center justify-between">
<div className="text-sm">
<span className="text-blue-300" style={{fontFamily: `Inter`}}>+ $12</span>
</div>
<button aria-checked="false" className="inline-flex h-6 w-11 items-center rounded-full bg-white/10 ring-1 ring-blue-500/20 transition-colors duration-200" data-upsell-switch="" role="switch" type="button">
<span className="h-4 w-4 translate-x-0 rounded-full bg-blue-400 transition-transform duration-200" data-upsell-knob=""></span>
<span className="sr-only">Toggle VIP add-on</span>
</button>
</div>
</div>
</div>

<div className="md:col-span-4">
<div className="h-full rounded-2xl bg-black/30 ring-1 ring-blue-500/20 p-5 flex flex-col">
<div className="flex-1">
<div className="flex items-end gap-2">
<div className="text-5xl sm:text-6xl lg:text-7xl tabular-nums text-blue-200 tracking-tight font-light" data-amount="" style={{fontFamily: `Inter`}}>$24</div>
<div className="pb-2 text-white/60 text-base" data-period="" style={{fontFamily: `Inter`}}>/event</div>
</div>
</div>
<div className="mt-8 pt-4 border-t border-blue-500/20 text-xs text-white/70 flex items-center justify-between">
<span data-delivery-key="" style={{fontFamily: `Inter`}}>Pass</span>
<span data-delivery-val="" style={{fontFamily: `Inter`}}>Single Event</span>
</div>
</div>
</div>

<div className="md:col-span-4">
<div className="h-full rounded-2xl bg-black/30 ring-1 ring-blue-500/20 p-5 flex flex-col">
<ul className="space-y-3">
<li className="flex items-start gap-2">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-blue-400 mt-0.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm" style={{fontFamily: `Inter`}}>All stages & replays</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-blue-400 mt-0.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm" style={{fontFamily: `Inter`}}>Spatial audio + crowd FX</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-blue-400 mt-0.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm" style={{fontFamily: `Inter`}}>Party rooms with friends</span>
</li>
</ul>
<div className="mt-auto">
<a className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight text-white bg-blue-500 hover:bg-blue-400 transition-colors border border-blue-500/20 shadow-lg shadow-blue-500/25" href="#" style={{fontFamily: `Inter`}}>
                      Get Pass
                      <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
<p className="mt-4 text-[11px] text-white/50 text-center" style={{fontFamily: `Inter`}}>Cancel anytime. Replays available for 30 days after each event.</p>
</div>
</div>

</section>
</main>

<footer className="w-full bg-black border-white/10 border-t">
<div className="max-w-7xl sm:px-6 lg:px-8 mx-auto pt-12 pr-4 pb-12 pl-4">
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<a className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md" href="#">
<span className="text-lg font-semibold tracking-tight" style={{fontFamily: `Inter`}}>Infinity Live</span>
</a>
<p className="mt-3 text-sm text-gray-400 max-w-md" style={{fontFamily: `Inter`}}>
            Experience music festivals and real‑world events in living, breathing virtual worlds—together, from anywhere.
          </p>
</div>
<div>
<h4 className="text-sm font-medium text-white" style={{fontFamily: `Inter`}}>Explore</h4>
<ul className="mt-3 space-y-2 text-sm text-gray-400">
<li><a className="hover:text-gray-200 transition-colors" href="#" style={{fontFamily: `Inter`}}>Festivals</a></li>
<li><a className="hover:text-gray-200 transition-colors" href="#" style={{fontFamily: `Inter`}}>Stages</a></li>
<li><a className="hover:text-gray-200 transition-colors" href="#" style={{fontFamily: `Inter`}}>Artists</a></li>
<li><a className="hover:text-gray-200 transition-colors" href="#" style={{fontFamily: `Inter`}}>Replays</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white" style={{fontFamily: `Inter`}}>Company</h4>
<ul className="mt-3 space-y-2 text-sm text-gray-400">
<li><a className="hover:text-gray-200 transition-colors" href="#passes" style={{fontFamily: `Inter`}}>Passes</a></li>
<li><a className="hover:text-gray-200 transition-colors" href="#" style={{fontFamily: `Inter`}}>Support</a></li>
<li><a className="hover:text-gray-200 transition-colors" href="#" style={{fontFamily: `Inter`}}>Community</a></li>
<li><a className="hover:text-gray-200 transition-colors" href="#" style={{fontFamily: `Inter`}}>Status</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-500" style={{fontFamily: `Inter`}}>
          © <span id="year">2025</span> Infinity Live. All rights reserved.
        </p>
<div className="flex items-center gap-4 text-xs text-gray-500">
<a className="hover:text-gray-300 transition-colors" href="#" style={{fontFamily: `Inter`}}>Terms</a>
<a className="hover:text-gray-300 transition-colors" href="#" style={{fontFamily: `Inter`}}>Privacy</a>
<a className="inline-flex items-center gap-1 hover:text-gray-300 transition-colors" href="#" style={{fontFamily: `Inter`}}>
            Back to top
            <svg className="lucide lucide-chevron-up w-3.5 h-3.5" data-lucide="chevron-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
