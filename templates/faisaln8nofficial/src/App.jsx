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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        // Module: /cards/collab.js (scoped to #card-collab)
              const root = document.querySelector('#card-collab');
              const shimmer = root.querySelector('#collab-shimmer > .absolute');
              let x = -96;
              function move() {
                x += 1.2;
                if (x > shimmer.parentElement.clientWidth + 96) x = -96;
                shimmer.style.transform = `translateX(${x}px)`;
                requestAnimationFrame(move);
              }
              requestAnimationFrame(move);

              // hover tilt
              root.addEventListener('mousemove', (e) => {
                const r = root.getBoundingClientRect();
                const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
                const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
                root.style.transform = `perspective(1000px) rotateX(${dy * -2}deg) rotateY(${dx * 2}deg)`;
              });
              root.addEventListener('mouseleave', () => {
                root.style.transform = '';
              });

              lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      


        // Module: /cards/automation.js (scoped to #card-automation)
              const root = document.querySelector('#card-automation');
              const list = root.querySelector('#member-list');
              const addBtn = root.querySelector('#add-member');

              function addMember() {
                const el = document.createElement('div');
                el.className = "flex items-center justify-between rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10";
                el.innerHTML = `
                  <div class="flex items-center gap-3">
                    <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=80&auto=format&fit=crop" class="h-7 w-7 rounded-full ring-1 ring-white/20" alt="member">
                    <div>
                      <p class="text-sm text-white/90">New Teammate</p>
                      <p class="text-[11px] text-white/50">Sales Ops</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 text-[11px] text-white/60">
                    <i data-lucide="sparkles" class="h-3.5 w-3.5"></i>
                    Auto‑assigned
                  </div>
                `;
                list.prepend(el);
                lucide.createIcons({ attrs: { 'stroke-width': 1.5 }, icons: lucide.icons });
                // subtle entrance
                el.animate([
                  { transform: 'translateY(-8px)', opacity: 0 },
                  { transform: 'translateY(0)', opacity: 1 }
                ], { duration: 220, easing: 'cubic-bezier(.2,.8,.2,1)' });
              }
              addBtn.addEventListener('click', addMember);

              lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      


        (function () {
          const cards = [
            { name: 'Sofia Alvarez', role: 'Growth Lead', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=1200&q=80&auto=format&fit=crop' },
            { name: 'Jackson Mitchel', role: 'AI Lead', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=1200&q=80&auto=format&fit=crop' },
            { name: 'John Doe', role: 'Product Head', img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=1200&q=80&auto=format&fit=crop' },
            { name: 'Armenia Sean', role: 'Social Media Head', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80&auto=format&fit=crop' },
            { name: 'Maya Patel', role: 'Design Lead', img: 'https://images.unsplash.com/photo-1541534401786-2077eed87a2d?w=1200&q=80&auto=format&fit=crop' },
            { name: 'Liam Becker', role: 'Platform Engineer', img: 'https://images.unsplash.com/photo-1544005316-04d7f94c1d27?w=1200&q=80&auto=format&fit=crop' }
          ];

          let currentIndex = 2;
          const prevBtn = document.getElementById('teamPrevBtn');
          const nextBtn = document.getElementById('teamNextBtn');
          const carouselCards = document.querySelectorAll('.carousel-card');

          function updateCarousel() {
            carouselCards.forEach((card, i) => {
              const relativePos = i - currentIndex;
              let transform = '';
              let opacity = 1;
              let filter = 'brightness(1)';
              let zIndex = 1;
              let ringClass = 'ring-1 ring-white/10';
              let shadow = '';

              if (relativePos === 0) {
                transform = 'translateX(0) scale(1) rotateY(0deg)';
                opacity = 1;
                zIndex = 10;
                ringClass = 'ring-2 ring-lime-300/40';
                shadow = '0 20px 60px rgba(163,230,53,0.3)';
              } else if (relativePos === -1) {
                transform = 'translateX(-180px) scale(0.9) rotateY(10deg)';
                opacity = 0.6;
                filter = 'brightness(0.75)';
                zIndex = 5;
              } else if (relativePos === 1) {
                transform = 'translateX(180px) scale(0.9) rotateY(-10deg)';
                opacity = 0.6;
                filter = 'brightness(0.75)';
                zIndex = 5;
              } else if (relativePos === -2) {
                transform = 'translateX(-360px) scale(0.85) rotateY(20deg)';
                opacity = 0.4;
                filter = 'brightness(0.6)';
                zIndex = 2;
              } else if (relativePos === 2) {
                transform = 'translateX(360px) scale(0.85) rotateY(-20deg)';
                opacity = 0.4;
                filter = 'brightness(0.6)';
                zIndex = 2;
              } else {
                transform = `translateX(${relativePos * 180}px) scale(0.75) rotateY(${-relativePos * 15}deg)`;
                opacity = 0;
                filter = 'brightness(0.5)';
                zIndex = 1;
              }

              card.style.transform = transform;
              card.style.opacity = opacity;
              card.style.filter = filter;
              card.style.zIndex = zIndex;
              card.style.boxShadow = shadow;
              card.className = `carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ${ringClass} ${relativePos === 0 ? 'bg-lime-400/10' : ''} transition-all duration-500`;
            });
          }

          if (prevBtn) {
            prevBtn.addEventListener('click', () => {
              currentIndex = (currentIndex - 1 + cards.length) % cards.length;
              updateCarousel();
            });
          }

          if (nextBtn) {
            nextBtn.addEventListener('click', () => {
              currentIndex = (currentIndex + 1) % cards.length;
              updateCarousel();
            });
          }

          updateCarousel();
        })();
      


    const slides = [{ key: 'docs', bullet: 'Real‑time briefs', accent: 'emerald', icon: 'users', pillText: 'Co‑create', tailText: 'product briefs', body: 'Draft clear briefs together with multiplayer editing. Structure work with headings, checklists, and callouts.', badges: [{ text: 'noa', color: 'emerald' , target: 'briefs' }, { text: 'leo', color: 'violet' , target: 'checklists' }] }, { key: 'comments', bullet: 'Threaded reviews', accent: 'amber', icon: 'message-square', pillText: 'Review in', tailText: 'context', body: 'Keep decisions attached to the work with inline threads. Mention teammates, resolve quickly, and move forward.', badges: [{ text: 'ivan', color: 'amber', target: 'threads' }, { text: 'sara', color: 'sky', target: 'Mention' }] }, { key: 'commands', bullet: 'Commands to tickets', accent: 'violet', icon: 'workflow', pillText: 'Turn notes into', tailText: 'tickets', body: 'Use quick commands to convert writing into scoped tickets with owners, labels, and estimates.', badges: [{ text: 'jin',  color: 'violet', target: 'tickets' }, { text: 'nora', color: 'emerald', target: 'owners' }] }]; const accents = { emerald: { pill: 'ring-emerald-500/60 bg-emerald-500/10 text-emerald-200', iconBox: 'bg-emerald-500/10 text-emerald-400', bar: 'bg-emerald-400', }, amber: { pill: 'ring-amber-500/60 bg-amber-500/10 text-amber-200', iconBox: 'bg-amber-500/10 text-amber-400', bar: 'bg-amber-400', }, violet: { pill: 'ring-violet-500/60 bg-violet-500/10 text-violet-200', iconBox: 'bg-violet-500/10 text-violet-400', bar: 'bg-violet-400', }, sky: { pill: 'ring-sky-500/60 bg-sky-500/10 text-sky-200', iconBox: 'bg-sky-500/10 text-sky-400', bar: 'bg-sky-400', } }; const highlightMap = { docs: ['briefs', 'checklists'], comments: ['threads', 'Mention'], commands: ['tickets', 'owners'] }; const root = document.querySelector('[data-component="feature-rotator"]') || document.querySelector('div'); const bulletList = document.getElementById('bulletList'); const iconBox = document.getElementById('iconBox'); const highlightPill = document.getElementById('highlightPill'); const highlightTail = document.getElementById('highlightTail'); const bodyCopy = document.getElementById('bodyCopy'); const badgesLayer = document.getElementById('badgesLayer'); function renderBullets(active) { bulletList.innerHTML = ''; slides.forEach((s, i) => { const isActive = i === active; const row = document.createElement('button'); row.type = 'button'; row.setAttribute('data-index', i); row.className = 'group w-full flex items-center gap-3 sm:gap-4'; row.innerHTML = `<span class="h-6 w-1 rounded-full ${isActive ? accents[slides[active].accent].bar : 'bg-neutral-700'} transition-colors"></span><span class="text-sm sm:text-base ${isActive ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-300'} font-medium">${s.bullet}</span>`; row.addEventListener('click', () => setActive(i, true)); bulletList.appendChild(row); }); } function setIcon(icon, accent) { iconBox.className = `w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${accents[accent].iconBox}`; iconBox.innerHTML = `<i data-lucide="${icon}" class="w-6 h-6"></i>`; lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }); } function setBadges() { badgesLayer.innerHTML = ''; } function colorMap(name, alpha = 1) { const colors = { emerald: `rgba(16,185,129,${alpha})`, violet: `rgba(139,92,246,${alpha})`, amber: `rgba(245,158,11,${alpha})`, sky: `rgba(14,165,233,${alpha})` }; return colors[name] || `rgba(16,185,129,${alpha})`; } function escapeRegExp(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); } function applyHighlights(text, slideKey, badges) { const tokens = (highlightMap[slideKey] || []).slice(); let result = text; tokens.forEach((token, idx) => { const b = badges[idx]; if (!b) return; const re = new RegExp(`\\b(${escapeRegExp(token)})\\b`, 'i'); const bg = colorMap(b.color, 0.18); const border = colorMap(b.color, 0.35); result = result.replace(re, (m) => { return `<span class="rounded-md px-1.5 -mx-0.5 ring-1" style="background:${bg}; box-shadow: inset 0 0 0 1px ${border};">${m}</span>`; }); }); return result; } let index = 0; let timer; function setActive(i, manual = false) { index = i % slides.length; if (index < 0) index = slides.length - 1; const s = slides[index]; renderBullets(index); setIcon(s.icon, s.accent); highlightPill.className = `inline-flex items-center rounded-md px-2.5 py-1.5 ring-1 text-base sm:text-lg ${accents[s.accent].pill}`; highlightPill.textContent = s.pillText; highlightTail.textContent = s.tailText; bodyCopy.innerHTML = applyHighlights(s.body, s.key, s.badges); setBadges(); if (manual) { clearInterval(timer); timer = startRotation(); } } function startRotation() { return setInterval(() => setActive((index + 1) % slides.length), 4500); } renderBullets(index); setActive(0); timer = startRotation(); root.addEventListener('mouseenter', () => clearInterval(timer)); root.addEventListener('mouseleave', () => { clearInterval(timer); timer = startRotation(); }); setTimeout(() => lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }), 100);
  


    (() => {
      const items = [
        {
          quote: "Moneo made budgeting feel effortless. I went from guessing my savings to watching them grow automatically.",
          name: "Sophie Tran",
          role: "Freelance Designer, Montreal",
          avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=128&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          quote: "The AI flagged duplicate subscriptions and saved our team over $600 in the first month.",
          name: "Marcus Hill",
          role: "Operations Lead, Toronto",
          avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=128&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          quote: "Clear cash-flow forecasts and weekly nudges keep me on track without thinking about it.",
          name: "Ana Morales",
          role: "Founder, Café Nube",
          avatar: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=128&auto=format&fit=crop&ixlib=rb-4.0.3"
        }
      ];

      const q = document.getElementById('t-quote');
      const name = document.getElementById('t-name');
      const role = document.getElementById('t-role');
      const avatar = document.getElementById('t-avatar');
      const prev = document.getElementById('t-prev');
      const next = document.getElementById('t-next');
      const dotsWrap = document.getElementById('t-dots');

      let i = 0, timer;

      function render(index) {
        const it = items[index];
        // simple fade
        q.style.opacity = 0; name.style.opacity = 0; role.style.opacity = 0; avatar.style.opacity = 0.5;
        setTimeout(() => {
          q.textContent = `“${it.quote}”`;
          name.textContent = it.name;
          role.textContent = it.role;
          avatar.src = it.avatar;
          q.style.opacity = 1; name.style.opacity = 1; role.style.opacity = 1; avatar.style.opacity = 1;
        }, 150);
        [...dotsWrap.children].forEach((d, idx) => {
          d.classList.toggle('bg-emerald-400', idx === index);
          d.classList.toggle('bg-white/20', idx !== index);
        });
      }

      function start() {
        stop();
        timer = setInterval(() => { i = (i + 1) % items.length; render(i); }, 6000);
      }
      function stop() { if (timer) clearInterval(timer); }

      // dots
      items.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = "h-2.5 w-2.5 rounded-full bg-white/20 ring-1 ring-white/10 transition";
        dot.setAttribute('aria-label', `Go to testimonial ${idx + 1}`);
        dot.addEventListener('click', () => { i = idx; render(i); start(); });
        dotsWrap.appendChild(dot);
      });

      prev.addEventListener('click', () => { i = (i - 1 + items.length) % items.length; render(i); start(); });
      next.addEventListener('click', () => { i = (i + 1) % items.length; render(i); start(); });

      render(i);
      start();

      // pause on hover (optional)
      dotsWrap.closest('section').addEventListener('mouseenter', stop);
      dotsWrap.closest('section').addEventListener('mouseleave', start);
    })();
  


    (function () {
      const el = document.getElementById('aura-growth-chart');
      if (!el) return;

      const ctx = el.getContext('2d');
      const gradient = ctx.createLinearGradient(0, 0, 0, el.height);
      gradient.addColorStop(0, 'rgba(139, 92, 246, 0.35)');
      gradient.addColorStop(1, 'rgba(139, 92, 246, 0.00)');

      const grid = 'rgba(148,163,184,0.15)';
      const label = 'rgba(226,232,240,0.8)';

      new Chart(el, {
        type: 'line',
        data: {
          labels: ['','10','20','30','40','50','60','Yesterday',''],
          datasets: [
            {
              label: 'Primary',
              data: [12,14,13,20,38,62,48,54,56],
              borderColor: '#7c3aed',
              backgroundColor: gradient,
              fill: true,
              borderWidth: 2.5,
              pointRadius: 0,
              tension: 0.35
            },
            {
              label: 'Secondary',
              data: [10,11,15,16,18,22,30,44,40],
              borderColor: 'rgba(255,255,255,0.85)',
              borderWidth: 2,
              pointRadius: 0,
              tension: 0.35
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              enabled: true,
              backgroundColor: 'rgba(17,24,39,0.95)',
              titleColor: '#fff',
              bodyColor: '#e5e7eb',
              displayColors: false,
              padding: 10
            }
          },
          scales: {
            x: {
              grid: { color: grid, drawBorder: false },
              ticks: { color: label, maxTicksLimit: 8 }
            },
            y: {
              grid: { color: grid, drawBorder: false },
              ticks: { color: label, maxTicksLimit: 6 }
            }
          }
        }
      });
    })();
  


        lucide.createIcons();
    
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
      

<nav bis_size='{"x":0,"y":0,"w":393,"h":65,"abs_x":500,"abs_y":90}' className="fixed bg-black/80 w-full z-50 border-white/5 border-b top-0 left-0 backdrop-blur-xl">
<div bis_size='{"x":0,"y":0,"w":393,"h":64,"abs_x":500,"abs_y":90}' className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div bis_size='{"x":24,"y":22,"w":95,"h":20,"abs_x":524,"abs_y":112}' className="flex items-center gap-3">
<div bis_size='{"x":24,"y":27,"w":10,"h":10,"abs_x":524,"abs_y":117}' className="flex h-2.5 w-2.5 relative">
<span bis_size='{"x":24,"y":27,"w":10,"h":10,"abs_x":524,"abs_y":117}' className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span bis_size='{"x":24,"y":27,"w":10,"h":10,"abs_x":524,"abs_y":117}' className="inline-flex h-2.5 w-2.5 bg-green-400 border-green-400 rounded-full relative"></span>
</div>
<span bis_size='{"x":46,"y":22,"w":73,"h":20,"abs_x":546,"abs_y":112}' className="text-sm font-medium text-neutral-200 tracking-tight" style={{}}>Online</span>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":500,"abs_y":90}' className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-500">
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":500,"abs_y":90}' className="hover:text-white transition-colors" href="#expertise">Expertise</a>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":500,"abs_y":90}' className="hover:text-white transition-colors" href="#work">Work</a>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":500,"abs_y":90}' className="hover:text-white transition-colors" href="#testimonials">Testimonials</a>
</div>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":500,"abs_y":90}' className="hidden md:inline-flex items-center justify-center hover:bg-white/15 transition-all text-xs font-medium text-white bg-white/10 border-white/5 border rounded-full pt-1.5 pr-4 pb-1.5 pl-4" href="https://wa.me/qr/L4CNWH6YAFYXN1">
                Book Consultation
            </a>
</div>
</nav>
<main bis_size='{"x":0,"y":0,"w":393,"h":6680,"abs_x":500,"abs_y":90}' className="">

<section bis_size='{"x":0,"y":0,"w":393,"h":1041,"abs_x":500,"abs_y":90}' className="md:pt-48 md:pb-32 overflow-hidden border-white/5 border-b pt-20 pr-6 pb-10 pl-6 relative">

<div bis_size='{"x":0,"y":0,"w":393,"h":1040,"abs_x":500,"abs_y":90}' className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>
<div bis_size='{"x":89,"y":-80,"w":384,"h":384,"abs_x":589,"abs_y":10}' className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div bis_size='{"x":24,"y":128,"w":345,"h":832,"abs_x":524,"abs_y":218}' className="grid z-10 max-w-7xl mr-auto ml-auto relative gap-x-16 items-center gap-y-8 lg:grid-cols-2">
<div bis_size='{"x":24,"y":128,"w":345,"h":337,"abs_x":524,"abs_y":218}' className="space-y-4">
<div bis_size='{"x":24,"y":128,"w":210,"h":26,"abs_x":524,"abs_y":218}' className="inline-flex gap-2 uppercase text-xs font-medium text-orange-400 tracking-wide bg-orange-500/5 border-orange-500/20 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5 gap-x-2 gap-y-2 items-center" style={{}}>Your Ai agent developer<span bis_size='{"x":216,"y":133,"w":7,"h":16,"abs_x":716,"abs_y":223}'>●</span></div>
<h1 bis_size='{"x":22,"y":186,"w":347,"h":120,"abs_x":522,"abs_y":276}' className="md:text-7xl lg:text-8xl leading-[1] -ml-0.5 text-6xl font-medium text-white tracking-tighter font-roboto">Faisal <br bis_size='{"x":168,"y":180,"w":0,"h":72,"abs_x":668,"abs_y":270}'/> <span bis_size='{"x":22,"y":240,"w":189,"h":72,"abs_x":522,"abs_y":330}' className="bg-clip-text text-transparent bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-orange-400 via-[#f15a09] to-orange-400">Ahmed</span></h1>
<p bis_size='{"x":24,"y":338,"w":345,"h":58,"abs_x":524,"abs_y":428}' className="md:text-xl leading-relaxed text-lg font-light text-neutral-400 tracking-tight max-w-lg">I Automate Your Repetitive Tasks So You Can Focus On Growth.</p>
<div bis_size='{"x":24,"y":429,"w":345,"h":36,"abs_x":524,"abs_y":519}' className="flex flex-wrap gap-6 pt-4 text-sm font-medium">
<a bis_size='{"x":24,"y":445,"w":84,"h":20,"abs_x":524,"abs_y":535}' className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group" href="mailto:hello@olamide.design">
<svg bis_size='{"x":24,"y":447,"w":16,"h":16,"abs_x":524,"abs_y":537}' className="lucide lucide-mail group-hover:text-orange-400 transition-colors w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(251, 146, 60)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span bis_size='{"x":48,"y":445,"w":60,"h":20,"abs_x":548,"abs_y":535}' className="group-hover:text-orange-400 transition-colors" onclick="window.location.href='/afolabisamuel230@gmail.com'" role="button">Email Me</span>
</a>
<a bis_size='{"x":132,"y":445,"w":80,"h":20,"abs_x":632,"abs_y":535}' className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group" href="#">
<svg bis_size='{"x":132,"y":447,"w":16,"h":16,"abs_x":632,"abs_y":537}' className="lucide lucide-linkedin group-hover:text-orange-400 transition-colors w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(251, 146, 60)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
<span bis_size='{"x":156,"y":445,"w":56,"h":20,"abs_x":656,"abs_y":535}' className="group-hover:text-orange-400 transition-colors cursor-pointer" onclick="window.location.href='https://www.linkedin.com/in/olamideafolabi23/';window.location.href='https://www.linkedin.com/in/faisal-ahmed-aa4a99395/'" role="button">LinkedIn</span>
</a>
<a bis_size='{"x":237,"y":445,"w":82,"h":20,"abs_x":737,"abs_y":535}' className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group" href="#">
<svg bis_size='{"x":237,"y":447,"w":16,"h":16,"abs_x":737,"abs_y":537}' className="lucide lucide-dribbble group-hover:text-orange-400 transition-colors w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="dribbble" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(251, 146, 60)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><path className="" d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path className="" d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
<span bis_size='{"x":261,"y":445,"w":58,"h":20,"abs_x":761,"abs_y":535}' className="group-hover:text-orange-400 transition-colors" onclick="window.location.href='https://www.behance.net/samuelafolabi5'" role="button">Behance</span>
</a>
</div>
</div>
<div bis_size='{"x":24,"y":529,"w":345,"h":431,"abs_x":524,"abs_y":619}' className="relative group perspective-1000">
<div bis_size='{"x":22,"y":527,"w":349,"h":435,"abs_x":522,"abs_y":617}' className="-inset-0.5 group-hover:opacity-60 transition duration-1000 bg-gradient-to-br from-white/10 to-transparent opacity-30 rounded-2xl absolute blur"></div>
<div bis_size='{"x":24,"y":529,"w":345,"h":431,"abs_x":524,"abs_y":619}' className="relative aspect-[4/5] w-full md:w-3/4 ml-auto overflow-hidden rounded-xl border border-white/10 bg-neutral-900/50">
<img alt="Olamide Afolabi Portrait" bis_size='{"x":16,"y":519,"w":360,"h":450,"abs_x":516,"abs_y":609}' className="hover:grayscale-0 transition-all duration-700 ease-in-out hover:scale-100 w-full h-full object-cover grayscale scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/93bf3a28-42ad-4eeb-a26b-628b678d30c4_1600w.png"/>
<div bis_size='{"x":25,"y":530,"w":343,"h":429,"abs_x":525,"abs_y":620}' className="absolute top-0 right-0 bottom-0 left-0">
<img alt="Olamide Afolabi Portrait" bis_size='{"x":16,"y":519,"w":360,"h":450,"abs_x":516,"abs_y":609}' className="hover:grayscale-0 hover:scale-100 transition-all duration-700 ease-in-out bg-center text-center w-full h-full object-cover grayscale-0 scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab9ef705-691a-49c3-b4cf-7bd0964ab28a_3840w.png"/>
<div bis_size='{"x":25,"y":530,"w":343,"h":429,"abs_x":525,"abs_y":620}' className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":1041,"w":393,"h":566,"abs_x":500,"abs_y":1131}' className="border-white/5 border-b pt-10 pr-6 pb-10 pl-6">
<div bis_size='{"x":24,"y":1137,"w":345,"h":373,"abs_x":524,"abs_y":1227}' className="max-w-7xl mx-auto">
<div bis_size='{"x":24,"y":1137,"w":345,"h":373,"abs_x":524,"abs_y":1227}' className="grid md:grid-cols-12 gap-12">
<div bis_size='{"x":24,"y":1137,"w":345,"h":36,"abs_x":524,"abs_y":1227}' className="md:col-span-4">
<h3 bis_size='{"x":24,"y":1137,"w":345,"h":20,"abs_x":524,"abs_y":1227}' className="text-neutral-200 font-medium text-sm tracking-tight mb-4 flex items-center gap-2">
<span bis_size='{"x":24,"y":1146,"w":16,"h":1,"abs_x":524,"abs_y":1236}' className="w-4 h-px bg-orange-500"></span> Why Hire Me?
                        </h3>
</div>
<div bis_size='{"x":24,"y":1221,"w":345,"h":289,"abs_x":524,"abs_y":1311}' className="md:col-span-8 space-y-10">
<div bis_size='{"x":24,"y":1221,"w":345,"h":165,"abs_x":524,"abs_y":1311}' className="">
<p bis_size='{"x":24,"y":1221,"w":345,"h":165,"abs_x":524,"abs_y":1311}' className="md:text-3xl lg:text-4xl leading-snug text-2xl font-light text-neutral-400 tracking-tight" style={{}}>I enjoy the process of creating something cool that doesn't only look dope but the message is also passed with <span bis_size='{"x":24,"y":1321,"w":295,"h":65,"abs_x":524,"abs_y":1411}' className="font-normal text-white border-orange-500/50 border-b pb-0.5">clarity and function</span>.</p>
</div>
<div bis_size='{"x":24,"y":1426,"w":345,"h":84,"abs_x":524,"abs_y":1516}' className="pl-6 border-l border-white/10">
<p bis_size='{"x":49,"y":1426,"w":320,"h":84,"abs_x":549,"abs_y":1516}' className="text-lg font-light italic text-neutral-500" style={{}}>"AI is not just aesthetics; it's a strategic framework for solving complex business problems."</p>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":1607,"w":393,"h":2146,"abs_x":500,"abs_y":1697}' className="md:px-10 md:pt-28 max-w-6xl mr-auto ml-auto pt-10 pr-6 pl-6">

<div bis_size='{"x":24,"y":1687,"w":345,"h":34,"abs_x":524,"abs_y":1777}' className="flex justify-center">
<div bis_size='{"x":111,"y":1687,"w":170,"h":34,"abs_x":611,"abs_y":1777}' className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur">
<svg bis_size='{"x":124,"y":1696,"w":16,"h":16,"abs_x":624,"abs_y":1786}' className="lucide lucide-bolt h-4 w-4 text-sky-300" data-lucide="bolt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><circle cx="12" cy="12" r="4"></circle></svg>
<span bis_size='{"x":148,"y":1694,"w":120,"h":20,"abs_x":648,"abs_y":1784}' className="text-sm text-sky-200/90">Feature Highlights</span>
</div>
</div>

<h1 bis_size='{"x":24,"y":1745,"w":345,"h":120,"abs_x":524,"abs_y":1835}' className="mt-6 text-center text-4xl md:text-6xl font-semibold tracking-tight text-white">
    Feature Highlights to Accelerate
    <span bis_size='{"x":24,"y":1825,"w":345,"h":40,"abs_x":524,"abs_y":1915}' className="block">Your Sales</span>
</h1>
<p bis_size='{"x":24,"y":1885,"w":345,"h":72,"abs_x":524,"abs_y":1975}' className="mx-auto mt-5 max-w-2xl text-center text-base md:text-lg text-white/70 font-normal">
    Tools to track, automate, and scale your pipeline—built to elevate performance and help teams close faster.
  </p>

<div bis_size='{"x":24,"y":2005,"w":345,"h":1748,"abs_x":524,"abs_y":2095}' className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">



<section bis_size='{"x":24,"y":2890,"w":345,"h":383,"abs_x":524,"abs_y":2980}' className="group relative overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 p-5 md:p-6" id="card-collab" style={{}}>
<div bis_size='{"x":24,"y":2890,"w":345,"h":383,"abs_x":524,"abs_y":2980}' className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent pointer-events-none">
</div>
<div bis_size='{"x":177,"y":3081,"w":288,"h":288,"abs_x":677,"abs_y":3171}' className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"></div>
<div bis_size='{"x":44,"y":2910,"w":305,"h":229,"abs_x":544,"abs_y":3000}' className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
<div bis_size='{"x":60,"y":2926,"w":273,"h":20,"abs_x":560,"abs_y":3016}' className="flex items-center gap-2 text-white/80 text-sm">
<svg bis_size='{"x":60,"y":2928,"w":16,"h":16,"abs_x":560,"abs_y":3018}' className="lucide lucide-boxes h-4 w-4 text-emerald-300" data-lucide="boxes" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path><path d="m7 16.5-4.74-2.85"></path><path d="m7 16.5 5-3"></path><path d="M7 16.5v5.17"></path><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path><path d="m17 16.5-5-3"></path><path d="m17 16.5 4.74-2.85"></path><path d="M17 16.5v5.17"></path><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path><path d="M12 8 7.26 5.15"></path><path d="m12 8 4.74-2.85"></path><path d="M12 13.5V8"></path></svg>
<span bis_size='{"x":84,"y":2926,"w":166,"h":20,"abs_x":584,"abs_y":3016}' className="font-medium">Connects with your tools</span>
</div>
<div bis_size='{"x":60,"y":2958,"w":273,"h":68,"abs_x":560,"abs_y":3048}' className="mt-3 grid grid-cols-4 gap-3">

<div bis_size='{"x":60,"y":2958,"w":59,"h":68,"abs_x":560,"abs_y":3048}' className="flex flex-col items-center gap-2 rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
<svg bis_size='{"x":79,"y":2970,"w":20,"h":20,"abs_x":579,"abs_y":3060}' className="lucide lucide-inbox h-5 w-5 text-white/80" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
<span bis_size='{"x":74,"y":2998,"w":30,"h":16,"abs_x":574,"abs_y":3088}' className="text-xs text-white/70">Email</span>
</div>
<div bis_size='{"x":131,"y":2958,"w":59,"h":68,"abs_x":631,"abs_y":3048}' className="flex flex-col items-center gap-2 rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
<svg bis_size='{"x":150,"y":2970,"w":20,"h":20,"abs_x":650,"abs_y":3060}' className="lucide lucide-message-square h-5 w-5 text-white/80" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span bis_size='{"x":147,"y":2998,"w":26,"h":16,"abs_x":647,"abs_y":3088}' className="text-xs text-white/70">Chat</span>
</div>
<div bis_size='{"x":202,"y":2958,"w":59,"h":68,"abs_x":702,"abs_y":3048}' className="flex flex-col items-center gap-2 rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
<svg bis_size='{"x":222,"y":2970,"w":20,"h":20,"abs_x":722,"abs_y":3060}' className="lucide lucide-calendar h-5 w-5 text-white/80" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span bis_size='{"x":206,"y":2998,"w":51,"h":16,"abs_x":706,"abs_y":3088}' className="text-xs text-white/70">Calendar</span>
</div>
<div bis_size='{"x":273,"y":2958,"w":59,"h":68,"abs_x":773,"abs_y":3048}' className="flex flex-col items-center gap-2 rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
<svg bis_size='{"x":293,"y":2970,"w":20,"h":20,"abs_x":793,"abs_y":3060}' className="lucide lucide-database h-5 w-5 text-white/80" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
<span bis_size='{"x":289,"y":2998,"w":27,"h":16,"abs_x":789,"abs_y":3088}' className="text-xs text-white/70">CRM</span>
</div>
</div>
<div bis_size='{"x":60,"y":3038,"w":273,"h":85,"abs_x":560,"abs_y":3128}' className="mt-3 overflow-hidden rounded-xl bg-white/[0.04] ring-1 ring-white/10">
<div bis_size='{"x":60,"y":3038,"w":273,"h":48,"abs_x":560,"abs_y":3128}' className="relative grid grid-cols-6 gap-2 p-3" id="collab-shimmer">
<div bis_size='{"x":72,"y":3050,"w":77,"h":8,"abs_x":572,"abs_y":3140}' className="h-2 rounded-full bg-white/10 col-span-2"></div>
<div bis_size='{"x":157,"y":3050,"w":120,"h":8,"abs_x":657,"abs_y":3140}' className="h-2 rounded-full bg-white/10 col-span-3"></div>
<div bis_size='{"x":286,"y":3050,"w":34,"h":8,"abs_x":786,"abs_y":3140}' className="h-2 rounded-full bg-white/10 col-span-1"></div>
<div bis_size='{"x":72,"y":3066,"w":163,"h":8,"abs_x":572,"abs_y":3156}' className="h-2 rounded-full bg-white/10 col-span-4"></div>
<div bis_size='{"x":243,"y":3066,"w":77,"h":8,"abs_x":743,"abs_y":3156}' className="h-2 rounded-full bg-white/10 col-span-2"></div>
<div bis_size='{"x":56,"y":3038,"w":96,"h":48,"abs_x":556,"abs_y":3128}' className="absolute inset-y-0 -left-1 w-24 bg-gradient-to-r from-transparent via-white/15 to-transparent">
</div>
</div>
<div bis_size='{"x":60,"y":3086,"w":273,"h":37,"abs_x":560,"abs_y":3176}' className="flex items-center gap-2 border-t border-white/10 px-3 py-2">
<img alt="avatar" bis_size='{"x":72,"y":3095,"w":20,"h":20,"abs_x":572,"abs_y":3185}' className="h-5 w-5 rounded-full ring-1 ring-white/20" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<img alt="avatar" bis_size='{"x":92,"y":3095,"w":20,"h":20,"abs_x":592,"abs_y":3185}' className="h-5 w-5 rounded-full ring-1 ring-white/20 -ml-2" src="https://images.unsplash.com/photo-1546539782-6fc531453083?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<img alt="avatar" bis_size='{"x":112,"y":3095,"w":20,"h":20,"abs_x":612,"abs_y":3185}' className="h-5 w-5 rounded-full ring-1 ring-white/20 -ml-2" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<span bis_size='{"x":144,"y":3097,"w":105,"h":16,"abs_x":644,"abs_y":3187}' className="ml-1 text-[11px] text-white/60">Synced across tools</span>
</div>
</div>
</div>
<h3 bis_size='{"x":44,"y":3159,"w":305,"h":28,"abs_x":544,"abs_y":3249}' className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">Seamless Collaboration</h3>
<p bis_size='{"x":44,"y":3193,"w":305,"h":60,"abs_x":544,"abs_y":3283}' className="mt-1.5 text-sm text-white/70">
        Keep your team aligned with integrations to email, chat, calendars, and your CRM—all in one place.
      </p>


</section>

<section bis_size='{"x":24,"y":3297,"w":345,"h":456,"abs_x":524,"abs_y":3387}' className="group relative overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 p-5 md:p-6" id="card-automation">
<div bis_size='{"x":24,"y":3297,"w":345,"h":456,"abs_x":524,"abs_y":3387}' className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-transparent pointer-events-none">
</div>
<div bis_size='{"x":-72,"y":3561,"w":288,"h":288,"abs_x":428,"abs_y":3651}' className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl"></div>
<div bis_size='{"x":44,"y":3317,"w":305,"h":302,"abs_x":544,"abs_y":3407}' className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
<div bis_size='{"x":60,"y":3333,"w":273,"h":24,"abs_x":560,"abs_y":3423}' className="flex items-center justify-between">
<div bis_size='{"x":60,"y":3336,"w":140,"h":20,"abs_x":560,"abs_y":3426}' className="flex items-center gap-2 text-white/80 text-sm">
<svg bis_size='{"x":60,"y":3338,"w":16,"h":16,"abs_x":560,"abs_y":3428}' className="lucide lucide-workflow h-4 w-4 text-fuchsia-300" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
<span bis_size='{"x":84,"y":3336,"w":116,"h":20,"abs_x":584,"abs_y":3426}' className="font-medium">Team Workspace</span>
</div>
<div bis_size='{"x":277,"y":3333,"w":55,"h":24,"abs_x":777,"abs_y":3423}' className="flex items-center gap-1.5">
<button bis_size='{"x":277,"y":3333,"w":55,"h":24,"abs_x":777,"abs_y":3423}' className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-[11px] text-white/80 ring-1 ring-white/10 hover:bg-white/10 transition" id="add-member">
<svg bis_size='{"x":285,"y":3339,"w":14,"h":14,"abs_x":785,"abs_y":3429}' className="lucide lucide-user-plus h-3.5 w-3.5" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
                    Add
                  </button>
</div>
</div>

<div bis_size='{"x":60,"y":3370,"w":273,"h":24,"abs_x":560,"abs_y":3460}' className="mt-3 flex items-center gap-2 text-xs">
<button bis_size='{"x":60,"y":3370,"w":69,"h":24,"abs_x":560,"abs_y":3460}' className="rounded-full bg-white/10 px-2 py-1 text-white/90 ring-1 ring-white/10">Members</button>
<button bis_size='{"x":137,"y":3370,"w":48,"h":24,"abs_x":637,"abs_y":3460}' className="rounded-full bg-transparent px-2 py-1 text-white/60 ring-1 ring-white/10">Tasks</button>
<button bis_size='{"x":194,"y":3370,"w":39,"h":24,"abs_x":694,"abs_y":3460}' className="rounded-full bg-transparent px-2 py-1 text-white/60 ring-1 ring-white/10">Hub</button>
</div>
<div bis_size='{"x":60,"y":3406,"w":273,"h":197,"abs_x":560,"abs_y":3496}' className="mt-3 space-y-2" id="member-list">
<div bis_size='{"x":60,"y":3406,"w":273,"h":60,"abs_x":560,"abs_y":3496}' className="flex items-center justify-between rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
<div bis_size='{"x":72,"y":3418,"w":141,"h":36,"abs_x":572,"abs_y":3508}' className="flex items-center gap-3">
<img alt="member" bis_size='{"x":72,"y":3422,"w":28,"h":28,"abs_x":572,"abs_y":3512}' className="h-7 w-7 rounded-full ring-1 ring-white/20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div bis_size='{"x":112,"y":3418,"w":101,"h":36,"abs_x":612,"abs_y":3508}'>
<p bis_size='{"x":112,"y":3418,"w":101,"h":20,"abs_x":612,"abs_y":3508}' className="text-sm text-white/90">Ava Morgan</p>
<p bis_size='{"x":112,"y":3438,"w":101,"h":16,"abs_x":612,"abs_y":3528}' className="text-[11px] text-white/50">Backend Developer</p>
</div>
</div>
<div bis_size='{"x":217,"y":3428,"w":103,"h":16,"abs_x":717,"abs_y":3518}' className="flex items-center gap-2 text-[11px] text-white/60">
<svg bis_size='{"x":217,"y":3429,"w":14,"h":14,"abs_x":717,"abs_y":3519}' className="lucide lucide-clock h-3.5 w-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
              Auto‑reminders
            </div>
</div>
<div bis_size='{"x":60,"y":3474,"w":273,"h":60,"abs_x":560,"abs_y":3564}' className="flex items-center justify-between rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
<div bis_size='{"x":72,"y":3486,"w":115,"h":36,"abs_x":572,"abs_y":3576}' className="flex items-center gap-3">
<img alt="member" bis_size='{"x":72,"y":3491,"w":28,"h":28,"abs_x":572,"abs_y":3581}' className="h-7 w-7 rounded-full ring-1 ring-white/20" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":112,"y":3486,"w":75,"h":36,"abs_x":612,"abs_y":3576}'>
<p bis_size='{"x":112,"y":3486,"w":75,"h":20,"abs_x":612,"abs_y":3576}' className="text-sm text-white/90">Ethan Reed</p>
<p bis_size='{"x":112,"y":3506,"w":75,"h":16,"abs_x":612,"abs_y":3596}' className="text-[11px] text-white/50">Project Lead</p>
</div>
</div>
<div bis_size='{"x":241,"y":3496,"w":79,"h":16,"abs_x":741,"abs_y":3586}' className="flex items-center gap-2 text-[11px] text-white/60">
<svg bis_size='{"x":241,"y":3498,"w":14,"h":14,"abs_x":741,"abs_y":3588}' className="lucide lucide-bell-ring h-3.5 w-3.5" data-lucide="bell-ring" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M22 8c0-2.3-.8-4.3-2-6"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path><path d="M4 2C2.8 3.7 2 5.7 2 8"></path></svg>
              Follow‑ups
            </div>
</div>
<div bis_size='{"x":60,"y":3543,"w":273,"h":60,"abs_x":560,"abs_y":3633}' className="flex items-center justify-between rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
<div bis_size='{"x":72,"y":3555,"w":99,"h":36,"abs_x":572,"abs_y":3645}' className="flex items-center gap-3">
<img alt="member" bis_size='{"x":72,"y":3559,"w":28,"h":28,"abs_x":572,"abs_y":3649}' className="h-7 w-7 rounded-full ring-1 ring-white/20" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":112,"y":3555,"w":59,"h":36,"abs_x":612,"abs_y":3645}'>
<p bis_size='{"x":112,"y":3555,"w":59,"h":20,"abs_x":612,"abs_y":3645}' className="text-sm text-white/90">Zoe Park</p>
<p bis_size='{"x":112,"y":3575,"w":59,"h":16,"abs_x":612,"abs_y":3665}' className="text-[11px] text-white/50">Sales Lead</p>
</div>
</div>
<div bis_size='{"x":248,"y":3565,"w":72,"h":16,"abs_x":748,"abs_y":3655}' className="flex items-center gap-2 text-[11px] text-white/60">
<svg bis_size='{"x":248,"y":3566,"w":14,"h":14,"abs_x":748,"abs_y":3656}' className="lucide lucide-bar-chart h-3.5 w-3.5" data-lucide="bar-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V9"></path><path d="M19 21V3"></path></svg>
              Reporting
            </div>
</div>
</div>
</div>
<h3 bis_size='{"x":44,"y":3639,"w":305,"h":28,"abs_x":544,"abs_y":3729}' className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">Automate Sales Workflows</h3>
<p bis_size='{"x":44,"y":3673,"w":305,"h":60,"abs_x":544,"abs_y":3763}' className="mt-1.5 text-sm text-white/70">
        Automate follow‑ups, reminders, and handoffs so your team can focus on building relationships and closing deals.
      </p>


</section>
</div>
</section>

<div bis_size='{"x":0,"y":3753,"w":393,"h":916,"abs_x":500,"abs_y":3843}' className="min-h-screen relative overflow-hidden text-neutral-200 antialiased font-sans" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  </style>


<div bis_size='{"x":0,"y":3753,"w":393,"h":916,"abs_x":500,"abs_y":3843}' className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_30%,rgba(120,119,198,0.15),transparent_60%)]"></div>
<section className="sm:py-24 grid-corners pt-10 pb-10 relative" id="why">
<div className="grid-corners-bottom"></div>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="animate-in mx-auto max-w-3xl text-center">
<span className="inline-flex items-center gap-1 rounded-full bg-lime-400/10 px-2 py-1 text-[11px] text-lime-300 ring-1 ring-lime-300/20 uppercase tracking-tight">
<svg className="lucide lucide-users h-3.5 w-3.5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
            Team
          </span>
<h2 className="sm:text-5xl text-4xl font-semibold tracking-tight mt-4 karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Meet</span>
<span className="karaoke-word">the</span>
<span className="karaoke-word">team</span>
<span className="karaoke-word">that</span>
<span className="karaoke-word">talks</span>
<span className="karaoke-word">to</span>
<span className="karaoke-word">AI</span>
<span className="karaoke-word">like</span>
<span className="karaoke-word">it's</span>
<span className="karaoke-word">a</span>
<span className="karaoke-word">pet</span>
<span className="karaoke-word"></span>
</h2>
<p className="mx-auto mt-3 max-w-2xl text-neutral-300 text-sm sm:text-base karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">The</span>
<span className="karaoke-word">humans</span>
<span className="karaoke-word">behind</span>
<span className="karaoke-word">the</span>
<span className="karaoke-word">models</span>
<span className="karaoke-word">builders,</span>
<span className="karaoke-word">dreamers,</span>
<span className="karaoke-word">and</span>
<span className="karaoke-word">delightful</span>
<span className="karaoke-word">nerds.</span>
<span className="karaoke-word"></span>
</p>
</div>
<div className="flex mt-16 relative items-center justify-center" style={{perspective: '1200px'}}>
<button aria-label="Previous" className="absolute left-4 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/50 ring-1 ring-white/10 hover:bg-white/5 transition" id="teamPrevBtn">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m15 18-6-6 6-6"></path>
</svg>
</button>
<div className="relative w-full max-w-md h-[500px] flex items-center justify-center">
<div className="flex transition-transform duration-500 ease-out absolute top-0 right-0 bottom-0 left-0 items-center justify-center" id="carouselTrack" style={{transformStyle: 'preserve-3d'}}>
<div className="carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-500" data-index="0" style={{transform: 'translateX(-360px) scale(0.85) rotateY(20deg)', opacity: '0.4', filter: 'brightness(0.6)', zIndex: '2'}}>
<img alt="Team member" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e22892ae-580d-4f98-b6c4-47cacdd0c9d3_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/20 mb-3">
<svg className="h-3 w-3 text-lime-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle className="" cx="9" cy="7" r="4"></circle>
<path className="" d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path className="" d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
<span className="text-white">Growth Lead</span>
</div>
<p className="text-xl font-semibold text-white tracking-tight">
        John Alvarez
      </p>
</div>
</div>
<div className="carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-500" data-index="1" style={{transform: 'translateX(-180px) scale(0.9) rotateY(10deg)', opacity: '0.6', filter: 'brightness(0.75)', zIndex: '5'}}>
<img alt="Team member" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/118fb7f9-cdd4-4a2a-89bd-3170e009a9a4_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/20 mb-3">
<svg className="h-3 w-3 text-lime-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 8V4H8"></path>
<rect className="" height="12" rx="2" width="16" x="4" y="8"></rect>
<path className="" d="M2 14h2"></path>
<path className="" d="M20 14h2"></path>
<path className="" d="M15 13v2"></path>
<path className="" d="M9 13v2"></path>
</svg>
<span className="text-white">AI Lead</span>
</div>
<p className="text-xl font-semibold tracking-tight text-white">
        Jackson Mitchel
      </p>
</div>
</div>
<div className="carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ring-2 ring-lime-300/40 bg-lime-400/10 transition-all duration-500" data-index="2" style={{transform: 'translateX(0px) scale(1) rotateY(0deg)', opacity: '1', zIndex: '10', boxShadow: 'rgba(163, 230, 53, 0.3) 0px 20px 60px', filter: 'brightness(1)'}}>
<img alt="Team member" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e1c1b8c-f44b-4a81-abaf-0241f388c8ff_800w.jpg"/>
<div className="bg-gradient-to-t from-black/85 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-6 right-6">
<div className="inline-flex items-center gap-1 rounded-full bg-lime-400 px-3 py-1.5 text-xs font-medium text-neutral-950">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 2v20M2 12h20"></path>
</svg>
        Featured
      </div>
</div>
<div className="absolute bottom-8 left-8 right-8">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs ring-1 ring-white/20 backdrop-blur-md mb-4">
<svg className="h-3 w-3 text-lime-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
<rect className="" height="14" rx="2" width="20" x="2" y="6"></rect>
</svg>
<span className="text-white">Product Head</span>
</div>
<p className="text-3xl font-bold text-white tracking-tight mb-1">
        Jenny Doe
      </p>
<p className="text-sm text-neutral-300 karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span className="karaoke-word"></span>
<span className="karaoke-word">Leading</span>
<span className="karaoke-word">product</span>
<span className="karaoke-word">vision</span>
<span className="karaoke-word">&amp;</span>
<span className="karaoke-word">strategy</span>
<span className="karaoke-word"></span>
</p>
</div>
</div>
<div className="carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-500" data-index="3" style={{transform: 'translateX(180px) scale(0.9) rotateY(-10deg)', opacity: '0.6', filter: 'brightness(0.75)', zIndex: '5'}}>
<img alt="Team member" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c1697f5-cb65-4307-a9e2-c0560b4e3a68_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/20 mb-3">
<svg className="h-3 w-3 text-lime-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z">
</path>
</svg>
<span className="text-white">Social Media Head</span>
</div>
<p className="text-xl font-semibold tracking-tight text-white">
        Armenia Sean
      </p>
</div>
</div>
<div className="carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-500" data-index="4" style={{transform: 'translateX(360px) scale(0.85) rotateY(-20deg)', opacity: '0.4', filter: 'brightness(0.6)', zIndex: '2'}}>
<img alt="Team member" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11c70762-35c0-4a1d-bdd9-40176c7ee60b_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/20 mb-3">
<svg className="h-3 w-3 text-lime-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
</path>
<polyline className="" points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
<polyline className="" points="7.5 19.79 7.5 14.6 3 12"></polyline>
<polyline className="" points="21 12 16.5 14.6 16.5 19.79"></polyline>
<polyline className="" points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
<line className="" x1="12" x2="12" y1="22.08" y2="12"></line>
</svg>
<span className="text-white">Design Lead</span>
</div>
<p className="text-xl font-semibold tracking-tight text-white">
        Maya Patel
      </p>
</div>
</div>
<div className="carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-500" data-index="5" style={{transform: 'translateX(540px) scale(0.75) rotateY(-45deg)', opacity: '0', filter: 'brightness(0.5)', zIndex: '1'}}>
<img alt="Team member" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/986db8ed-1c5d-42fb-8c1d-4b3716d2e317_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/20 mb-3">
<svg className="h-3 w-3 text-lime-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="18" rx="2" width="18" x="3" y="3"></rect>
<path className="" d="M9 3v18"></path>
<path className="" d="m16 15-3-3 3-3"></path>
</svg>
<span className="text-white">Platform Engineer</span>
</div>
<p className="text-xl font-semibold tracking-tight text-white">
        Liam Becker
      </p>
</div>
</div>
</div>
</div>
<button aria-label="Next" className="absolute right-4 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/50 ring-1 ring-white/10 hover:bg-white/5 transition" id="teamNextBtn">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>
</div>

</section>

</div>

<section className="sm:px-8 sm:mt-32 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mt-12 mr-auto ml-auto pr-6 pl-6">
<section className="overflow-hidden sm:mt-32 sm:pl-8 sm:pr-8 sm:pt-8 sm:pb-8 bg-gradient-to-br from-gray-500/10 via-gray-500/0 to-gray-500/10 max-w-7xl rounded-3xl ring-0 mt-24 pt-6 pr-6 pb-6 pl-6 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '24px'}}>

<span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/5"></span>
<div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-8 gap-x-8 gap-y-8">

<div className="">
<span className="inline-flex items-center gap-1 uppercase text-xs font-medium text-emerald-400 tracking-tight bg-emerald-950 ring-emerald-400/20 ring-1 rounded-full pt-1 pr-3 pb-1 pl-3">Testimonials</span>
<h2 className="sm:text-5xl lg:text-6xl text-4xl font-light text-white tracking-tight font-geist mt-6">
        Loved by teams who take budgets seriously
      </h2>
<p className="mt-6 text-base sm:text-lg dark:text-neutral-400">
        See how Moneo helps people cut waste, automate savings, and stay on plan with AI-driven insights.
      </p>

<div className="flex gap-3 mt-8 gap-x-3 gap-y-3 items-center">
<button aria-label="Previous testimonial" className="inline-flex border-neutral-700 hover:bg-neutral-800 transition bg-gradient-to-br w-11 h-11 rounded-full items-center justify-center from-white/10 to-white/0" id="t-prev" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}}>
<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m12 19-7-7 7-7"></path><path className="" d="M19 12H5"></path></svg>
</button>
<button aria-label="Next testimonial" className="inline-flex border-neutral-700 hover:bg-neutral-800 transition bg-gradient-to-br w-11 h-11 rounded-full items-center justify-center from-white/10 to-white/0" id="t-next" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}}>
<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="md:pl-4">
<figure className="sm:p-8 bg-gradient-to-br rounded-2xl ring-0 px-6 py-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur from-white/10 to-white/0" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px'}}>

<svg className="w-[34px] h-[34px] mb-4" data-icon-replaced="true" fill="currentColor" strokeWidth="2" style={{width: '34px', height: '34px', color: 'rgb(52, 211, 153)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M7.17 6.18C5.2 7.62 4 9.76 4 12.1c0 3.4 2.38 5.9 5.6 5.9 2.1 0 3.4-1.05 3.4-2.63 0-1.36-1.02-2.36-2.44-2.36-1 0-1.76.45-2.18 1.24.06-2.06 1.36-3.76 3.4-4.54V6c-1.3.05-2.92.4-4.65 1.18Zm10 0C15.2 7.62 14 9.76 14 12.1c0 3.4 2.38 5.9 5.6 5.9 2.1 0 3.4-1.05 3.4-2.63 0-1.36-1.02-2.36-2.44-2.36-1 0-1.76.45-2.18 1.24.06-2.06 1.36-3.76 3.4-4.54V6c-1.3.05-2.92.4-4.65 1.18Z"></path>
</svg>
<blockquote className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-light tracking-tight text-white" id="t-quote" style={{opacity: '1'}}>“The AI flagged duplicate subscriptions and saved our team over $600 in the first month.”</blockquote>
<figcaption className="mt-6 flex items-center gap-3">
<img alt="Avatar" className="w-10 h-10 object-cover rounded-full ring-1 ring-neutral-800" id="t-avatar" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{opacity: '1'}}/>
<div className="">
<div className="text-base font-semibold tracking-tight text-white" id="t-name" style={{opacity: '1'}}>Marcus Hill</div>
<div className="text-sm text-neutral-400" id="t-role" style={{opacity: '1'}}>Operations Lead, Toronto</div>
</div>
</figcaption>
</figure>
</div>
</div>


</section>



</section>

<section bis_size='{"x":0,"y":5961,"w":393,"h":510,"abs_x":500,"abs_y":6051}' className="sm:px-6 sm:mt-24 max-w-7xl mt-10 mr-auto mb-10 ml-auto pt-10 pr-4 pl-4" id="contact">
<div bis_size='{"x":16,"y":6001,"w":361,"h":470,"abs_x":516,"abs_y":6091}' className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 text-white p-6 sm:p-8">
<div bis_size='{"x":17,"y":6002,"w":359,"h":468,"abs_x":517,"abs_y":6092}' className="absolute inset-0 pointer-events-none">
<div bis_size='{"x":17,"y":6002,"w":359,"h":468,"abs_x":517,"abs_y":6092}' className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(255,255,255,0.07),transparent_60%)]"></div>
<div bis_size='{"x":17,"y":6002,"w":359,"h":468,"abs_x":517,"abs_y":6092}' className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_120%,rgba(255,255,255,0.06),transparent_60%)]"></div>
<div bis_size='{"x":17,"y":6002,"w":359,"h":468,"abs_x":517,"abs_y":6092}' className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15]"></div>
</div>
<div bis_size='{"x":41,"y":6026,"w":311,"h":420,"abs_x":541,"abs_y":6116}' className="relative">
<h2 bis_size='{"x":41,"y":6026,"w":311,"h":99,"abs_x":541,"abs_y":6116}' className="text-[14vw] sm:text-[10vw] lg:text-[7vw] leading-[0.9] font-semibold tracking-tight">
            Let’s build <span bis_size='{"x":41,"y":6066,"w":228,"h":67,"abs_x":541,"abs_y":6156}' className="text-white/70">together.</span>
</h2>
<div bis_size='{"x":41,"y":6157,"w":311,"h":248,"abs_x":541,"abs_y":6247}' className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 md:divide-x md:divide-white/10">
<div bis_size='{"x":41,"y":6157,"w":311,"h":58,"abs_x":541,"abs_y":6247}' className="">
<p bis_size='{"x":41,"y":6157,"w":311,"h":20,"abs_x":541,"abs_y":6247}' className="text-sm text-white/70">Email</p>
<a bis_size='{"x":41,"y":6185,"w":218,"h":28,"abs_x":541,"abs_y":6275}' className="mt-2 inline-flex items-center gap-3 text-xl sm:text-2xl font-medium tracking-tight" href="mailto:hello@jordan.design">
<svg bis_size='{"x":41,"y":6189,"w":20,"h":20,"abs_x":541,"abs_y":6279}' className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span bis_size='{"x":73,"y":6185,"w":186,"h":28,"abs_x":573,"abs_y":6275}' className="break-all">hello@jordan.design</span>
</a>
</div>
<div bis_size='{"x":41,"y":6239,"w":311,"h":74,"abs_x":541,"abs_y":6329}' className="md:pl-8">
<p bis_size='{"x":41,"y":6239,"w":311,"h":20,"abs_x":541,"abs_y":6329}' className="text-sm text-white/70">Schedule</p>
<a bis_size='{"x":41,"y":6267,"w":134,"h":46,"abs_x":541,"abs_y":6357}' className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight text-gray-900 bg-white hover:bg-white/90 border border-white/10 mt-2" href="#">
<svg bis_size='{"x":62,"y":6282,"w":16,"h":16,"abs_x":562,"abs_y":6372}' className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span bis_size='{"x":86,"y":6280,"w":68,"h":20,"abs_x":586,"abs_y":6370}'>Book a call</span>
</a>
</div>
<div bis_size='{"x":41,"y":6337,"w":311,"h":68,"abs_x":541,"abs_y":6427}' className="md:pl-8">
<p bis_size='{"x":41,"y":6337,"w":311,"h":20,"abs_x":541,"abs_y":6427}' className="text-sm text-white/70">Social</p>
<div bis_size='{"x":41,"y":6365,"w":311,"h":40,"abs_x":541,"abs_y":6455}' className="flex flex-wrap gap-3 mt-2">
<a bis_size='{"x":41,"y":6365,"w":40,"h":40,"abs_x":541,"abs_y":6455}' className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-900 border border-white/10 hover:bg-white/90" href="#">
<svg bis_size='{"x":53,"y":6377,"w":16,"h":16,"abs_x":553,"abs_y":6467}' className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a bis_size='{"x":93,"y":6365,"w":40,"h":40,"abs_x":593,"abs_y":6455}' className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-900 border border-white/10 hover:bg-white/90" href="#">
<svg bis_size='{"x":105,"y":6377,"w":16,"h":16,"abs_x":605,"abs_y":6467}' className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a bis_size='{"x":145,"y":6365,"w":40,"h":40,"abs_x":645,"abs_y":6455}' className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-900 border border-white/10 hover:bg-white/90" href="#">
<svg bis_size='{"x":157,"y":6377,"w":16,"h":16,"abs_x":657,"abs_y":6467}' className="lucide lucide-globe w-4 h-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</a>
<a bis_size='{"x":197,"y":6365,"w":40,"h":40,"abs_x":697,"abs_y":6455}' className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-900 border border-white/10 hover:bg-white/90" href="#">
<svg bis_size='{"x":209,"y":6377,"w":16,"h":16,"abs_x":709,"abs_y":6467}' className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>
<p bis_size='{"x":41,"y":6429,"w":311,"h":16,"abs_x":541,"abs_y":6519}' className="mt-6 text-center text-[11px] text-white/60">© <span bis_size='{"x":61,"y":6431,"w":26,"h":13,"abs_x":561,"abs_y":6521}' className="" id="year">2025</span> Jordan Lee — Available for freelance &amp; contracts</p>
</div>
</div>
</section>

<footer className="max-w-7xl mx-auto pb-12">
<div className="p-12 lg:p-16 border border-white/10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
<div className="lg:col-span-1">
<div className="flex items-center mb-6">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-neutral-800 ring-1 ring-white/10 mr-3">
<svg className="text-neutral-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="18" rx="2" width="18" x="3" y="3"></rect>
<path className="" d="M3 9h18"></path>
<path className="" d="M3 15h18"></path>
<path className="" d="M9 3v18"></path>
<path className="" d="M15 3v18"></path>
</svg>
</span>
<span className="text-xl font-semibold tracking-tight text-white">StackFoundry</span>
</div>
<p className="text-sm text-white/60 leading-relaxed mb-8">
          Experiment, explore, and choose your next tool stack. We help designers discover the best modern tools through hands-on trials and expert curation.
        </p>
<div className="flex items-center gap-4">
<a aria-label="Twitter" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 bg-white/[0.03]" href="#">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a aria-label="LinkedIn" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 bg-white/[0.03]" href="#">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect className="" height="12" width="4" x="2" y="9"></rect>
<circle className="" cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a aria-label="GitHub" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 bg-white/[0.03]" href="#">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path className="" d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
</div>
</div>
<div className="">
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide">Resources</h4>
<ul className="space-y-4">
<li className="">
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Design Kits</a>
</li>
<li>
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">AI Workflows</a>
</li>
<li className="">
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Tutorials</a>
</li>
<li>
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Guides</a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide">Content</h4>
<ul className="space-y-4">
<li>
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Articles</a>
</li>
<li>
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Episodes</a>
</li>
<li>
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Tool Reviews</a>
</li>
<li className="">
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Case Studies</a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide">Support</h4>
<ul className="space-y-4">
<li>
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Help Center</a>
</li>
<li>
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Contact Us</a>
</li>
<li>
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Bundle Support</a>
</li>
<li className="">
<a className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Terms &amp; Conditions</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-12 mb-12">
<div className="max-w-2xl mx-auto text-center">
<h4 className="text-lg font-medium text-white mb-4">Stay in the Loop</h4>
<p className="text-sm text-white/60 mb-6">Get notified about new tool bundles, exclusive deals, and design workflow insights.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<input className="flex-1 max-w-md px-4 py-3 rounded-xl text-sm text-white placeholder-white/40 border border-white/10 focus:border-fuchsia-500/30 focus:outline-none transition-all duration-300 bg-white/5" placeholder="Enter your email address" type="email"/>
<button className="px-8 py-3 rounded-xl text-sm font-medium text-neutral-900 bg-fuchsia-400 hover:bg-fuchsia-300 transition-all duration-300">Subscribe</button>
</div>
</div>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-wrap items-center gap-6 text-xs text-white/40">
<span>© 2024 StackFoundry. All rights reserved.</span>
<a className="hover:text-white/60 transition-colors duration-300" href="#">Privacy Policy</a>
<a className="hover:text-white/60 transition-colors duration-300" href="#">Terms of Service</a>
</div>
<div className="flex items-center gap-4 text-xs text-white/40">
<span className="flex items-center gap-2">
        Bundle Limited
        <svg className="text-fuchsia-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<path className="" d="m9 12 2 2 4-4"></path>
</svg>
</span>
<span className="flex items-center gap-2">
        Trusted Partners
        <svg className="text-emerald-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path className="" d="m9 12 2 2 4-4"></path>
</svg>
</span>
</div>
</div>
</footer>
</main>


    </>
  );
}
