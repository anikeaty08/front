import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
  }, []);

  return (
    <>
      

<nav bis_size='{"x":0,"y":2939,"w":1920,"h":65,"abs_x":0,"abs_y":2982}' className="fixed bg-black/80 w-full z-50 border-white/5 border-b top-0 left-0 backdrop-blur-xl">
<div bis_size='{"x":320,"y":2939,"w":1280,"h":64,"abs_x":320,"abs_y":2982}' className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div bis_size='{"x":344,"y":2961,"w":62,"h":20,"abs_x":344,"abs_y":3004}' className="flex items-center gap-3">
<div bis_size='{"x":344,"y":2966,"w":10,"h":10,"abs_x":344,"abs_y":3009}' className="flex h-2.5 w-2.5 relative">
<span bis_size='{"x":344,"y":2966,"w":10,"h":10,"abs_x":344,"abs_y":3009}' className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span bis_size='{"x":344,"y":2966,"w":10,"h":10,"abs_x":344,"abs_y":3009}' className="inline-flex h-2.5 w-2.5 bg-green-400 border-green-400 rounded-full relative"></span>
</div>
<span bis_size='{"x":366,"y":2961,"w":40,"h":20,"abs_x":366,"abs_y":3004}' className="text-sm font-medium text-neutral-200 tracking-tight" style={{}}>Online</span>
</div>
<div bis_size='{"x":811,"y":2963,"w":220,"h":16,"abs_x":811,"abs_y":3006}' className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-500">
<a bis_size='{"x":811,"y":2963,"w":53,"h":16,"abs_x":811,"abs_y":3006}' className="hover:text-white transition-colors" href="#expertise">Expertise</a>
<a bis_size='{"x":897,"y":2963,"w":30,"h":16,"abs_x":897,"abs_y":3006}' className="hover:text-white transition-colors" href="#work">Work</a>
<a bis_size='{"x":959,"y":2963,"w":71,"h":16,"abs_x":959,"abs_y":3006}' className="hover:text-white transition-colors" href="/#testimonials">Testimonials</a>
</div>
<a bis_size='{"x":1437,"y":2956,"w":138,"h":30,"abs_x":1437,"abs_y":2999}' className="hidden items-center justify-center hover:bg-white/15 transition-all md:inline-flex text-xs font-medium text-orange-500 bg-stone-50/10 border-white/5 border rounded-full pt-1.5 pr-4 pb-1.5 pl-4" href="https://wa.me/qr/L4CNWH6YAFYXN1">
                Book Consultation
            </a>
</div>
</nav>
<main bis_size='{"x":0,"y":0,"w":1920,"h":4968,"abs_x":0,"abs_y":43}' className="">

<section bis_size='{"x":0,"y":0,"w":1920,"h":921,"abs_x":0,"abs_y":43}' className="md:pt-48 md:pb-32 overflow-hidden border-white/5 border-b pt-20 pr-6 pb-10 pl-6 relative">

<div bis_size='{"x":0,"y":0,"w":1920,"h":920,"abs_x":0,"abs_y":43}' className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>
<div bis_size='{"x":1616,"y":-80,"w":384,"h":384,"abs_x":1616,"abs_y":-37}' className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div bis_size='{"x":320,"y":192,"w":1280,"h":600,"abs_x":320,"abs_y":235}' className="grid lg:grid-cols-2 z-10 max-w-7xl mr-auto ml-auto relative gap-x-0 gap-y-8 items-center">
<div bis_size='{"x":320,"y":312,"w":640,"h":358,"abs_x":320,"abs_y":355}' className="space-y-4">
<div bis_size='{"x":320,"y":313,"w":210,"h":26,"abs_x":320,"abs_y":356}' className="inline-flex gap-2 uppercase text-xs font-medium text-orange-400 tracking-wide bg-orange-500/5 border-orange-500/20 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5 gap-x-2 gap-y-2 items-center" style={{}}>Your Ai agent developer<span bis_size='{"x":512,"y":318,"w":7,"h":16,"abs_x":512,"abs_y":361}'>●</span></div>
<h1 bis_size='{"x":318,"y":355,"w":642,"h":192,"abs_x":318,"abs_y":398}' className="md:text-7xl lg:text-8xl leading-[1] -ml-0.5 text-6xl font-medium text-white tracking-tighter font-roboto">Faisal <br bis_size='{"x":542,"y":346,"w":0,"h":112,"abs_x":542,"abs_y":389}'/> <span bis_size='{"x":318,"y":442,"w":282,"h":112,"abs_x":318,"abs_y":485}' className="bg-clip-text text-transparent bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-orange-400 via-[#f15a09] to-orange-400">Ahmed</span></h1>
<p bis_size='{"x":320,"y":563,"w":512,"h":56,"abs_x":320,"abs_y":606}' className="md:text-xl leading-relaxed text-lg font-light text-neutral-400 tracking-tight max-w-lg">I Automate Your Repetitive Tasks So You Can Focus On Growth.</p>
<div bis_size='{"x":320,"y":635,"w":640,"h":36,"abs_x":320,"abs_y":678}' className="flex flex-wrap gap-6 pt-4 text-sm font-medium">
<a bis_size='{"x":320,"y":651,"w":84,"h":20,"abs_x":320,"abs_y":694}' className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group" href="mailto:hello@olamide.design">
<svg bis_size='{"x":320,"y":653,"w":16,"h":16,"abs_x":320,"abs_y":696}' className="lucide lucide-mail group-hover:text-orange-400 transition-colors w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(251, 146, 60)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span bis_size='{"x":344,"y":651,"w":60,"h":20,"abs_x":344,"abs_y":694}' className="group-hover:text-orange-400 transition-colors" onclick="window.location.href='/afolabisamuel230@gmail.com'" role="button">Email Me</span>
</a>
<a bis_size='{"x":428,"y":651,"w":80,"h":20,"abs_x":428,"abs_y":694}' className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group" href="#">
<svg bis_size='{"x":428,"y":653,"w":16,"h":16,"abs_x":428,"abs_y":696}' className="lucide lucide-linkedin group-hover:text-orange-400 transition-colors w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(251, 146, 60)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
<span bis_size='{"x":452,"y":651,"w":56,"h":20,"abs_x":452,"abs_y":694}' className="group-hover:text-orange-400 transition-colors cursor-pointer" onclick="window.location.href='https://www.linkedin.com/in/olamideafolabi23/';window.location.href='https://www.linkedin.com/in/faisal-ahmed-aa4a99395/'" role="button">LinkedIn</span>
</a>
<a bis_size='{"x":533,"y":651,"w":82,"h":20,"abs_x":533,"abs_y":694}' className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group" href="#">
<svg bis_size='{"x":533,"y":653,"w":16,"h":16,"abs_x":533,"abs_y":696}' className="lucide lucide-dribbble group-hover:text-orange-400 transition-colors w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="dribbble" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(251, 146, 60)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
<span bis_size='{"x":557,"y":651,"w":58,"h":20,"abs_x":557,"abs_y":694}' className="group-hover:text-orange-400 transition-colors" onclick="window.location.href='https://www.behance.net/samuelafolabi5'" role="button">Behance</span>
</a>
</div>
</div>
<div bis_size='{"x":960,"y":192,"w":640,"h":600,"abs_x":960,"abs_y":235}' className="relative group perspective-1000">
<div bis_size='{"x":958,"y":190,"w":644,"h":604,"abs_x":958,"abs_y":233}' className="-inset-0.5 group-hover:opacity-60 transition duration-1000 bg-gradient-to-br from-white/10 to-transparent opacity-30 rounded-2xl absolute blur backdrop-blur-none"></div>
<div bis_size='{"x":1120,"y":192,"w":480,"h":600,"abs_x":1120,"abs_y":235}' className="relative aspect-[4/5] w-full md:w-3/4 ml-auto overflow-hidden rounded-xl border border-white/10 bg-neutral-900/50">
<img alt="Olamide Afolabi Portrait" bis_size='{"x":1109,"y":178,"w":501,"h":627,"abs_x":1109,"abs_y":221}' className="hover:grayscale-0 transition-all duration-700 ease-in-out hover:scale-100 w-full h-full object-cover grayscale scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/93bf3a28-42ad-4eeb-a26b-628b678d30c4_1600w.png"/>
<div bis_size='{"x":1121,"y":193,"w":478,"h":598,"abs_x":1121,"abs_y":236}' className="absolute top-0 right-0 bottom-0 left-0">
<img alt="Olamide Afolabi Portrait" bis_size='{"x":1109,"y":178,"w":501,"h":627,"abs_x":1109,"abs_y":221}' className="hover:grayscale-0 hover:scale-100 transition-all duration-700 ease-in-out bg-center text-center w-full h-full object-cover border-orange-500 border rounded ring-orange-500 ring-1 shadow-[rgba(50,_50,_93,_0.25)_0px_13px_27px_-5px,_rgba(0,_0,_0,_0.3)_0px_8px_16px_-8px] blur-none grayscale-0 invert-0 brightness-125 scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab9ef705-691a-49c3-b4cf-7bd0964ab28a_3840w.png" style={{maskImage: 'linear-gradient(220deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(220deg, transparent, black 0%, black 100%, transparent)'}}/><img alt="Olamide Afolabi Portrait" bis_size='{"x":1109,"y":776,"w":501,"h":627,"abs_x":1109,"abs_y":819}' className="hover:grayscale-0 hover:scale-100 transition-all duration-700 ease-in-out bg-center text-center w-full h-full object-cover shadow-[rgba(50,_50,_93,_0.25)_0px_13px_27px_-5px,_rgba(0,_0,_0,_0.3)_0px_8px_16px_-8px] blur-none grayscale-0 invert-0 brightness-125 scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab9ef705-691a-49c3-b4cf-7bd0964ab28a_3840w.png" style={{maskImage: 'linear-gradient(220deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(220deg, transparent, black 0%, black 100%, transparent)'}}/><img alt="Olamide Afolabi Portrait" bis_size='{"x":1109,"y":1374,"w":501,"h":627,"abs_x":1109,"abs_y":1417}' className="hover:grayscale-0 hover:scale-100 transition-all duration-700 ease-in-out bg-center text-center w-full h-full object-cover shadow-[rgba(50,_50,_93,_0.25)_0px_13px_27px_-5px,_rgba(0,_0,_0,_0.3)_0px_8px_16px_-8px] blur-none grayscale-0 invert-0 brightness-125 scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab9ef705-691a-49c3-b4cf-7bd0964ab28a_3840w.png" style={{maskImage: 'linear-gradient(220deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(220deg, transparent, black 0%, black 100%, transparent)'}}/>
<div bis_size='{"x":1121,"y":193,"w":478,"h":598,"abs_x":1121,"abs_y":236}' className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":921,"w":1920,"h":269,"abs_x":0,"abs_y":964}' className="border-white/5 border-b pt-10 pr-6 pb-10 pl-6">
<div bis_size='{"x":320,"y":961,"w":1280,"h":188,"abs_x":320,"abs_y":1004}' className="max-w-7xl mx-auto">
<div bis_size='{"x":320,"y":961,"w":1280,"h":188,"abs_x":320,"abs_y":1004}' className="grid md:grid-cols-12 gap-12">
<div bis_size='{"x":320,"y":961,"w":394,"h":188,"abs_x":320,"abs_y":1004}' className="md:col-span-4">
<h3 bis_size='{"x":320,"y":961,"w":394,"h":20,"abs_x":320,"abs_y":1004}' className="text-neutral-200 font-medium text-sm tracking-tight mb-4 flex items-center gap-2">
<span bis_size='{"x":320,"y":970,"w":16,"h":1,"abs_x":320,"abs_y":1013}' className="w-4 h-px bg-orange-500"></span> Why Hire Me?
                        </h3>
</div>
<div bis_size='{"x":762,"y":961,"w":837,"h":188,"abs_x":762,"abs_y":1004}' className="md:col-span-8 space-y-10">
<div bis_size='{"x":762,"y":961,"w":837,"h":120,"abs_x":762,"abs_y":1004}' className="">
<p bis_size='{"x":762,"y":961,"w":837,"h":120,"abs_x":762,"abs_y":1004}' className="md:text-3xl lg:text-4xl leading-snug text-2xl font-light text-neutral-400 tracking-tight" style={{}}>I enjoy the process of creating something cool that doesn't only look dope but the message is also passed with <span bis_size='{"x":963,"y":1039,"w":310,"h":46,"abs_x":963,"abs_y":1082}' className="font-normal text-white border-orange-500/50 border-b pb-0.5">clarity and function</span>.</p>
</div>
<div bis_size='{"x":762,"y":1121,"w":837,"h":28,"abs_x":762,"abs_y":1164}' className="pl-6 border-l border-white/10">
<p bis_size='{"x":787,"y":1121,"w":812,"h":28,"abs_x":787,"abs_y":1164}' className="text-lg font-light italic text-neutral-500" style={{}}>"AI is not just aesthetics; it's a strategic framework for solving complex business problems."</p>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":384,"y":1190,"w":1152,"h":862,"abs_x":384,"abs_y":1233}' className="md:px-10 md:pt-28 max-w-6xl mr-auto ml-auto pt-10 pr-6 pl-6">

<div bis_size='{"x":424,"y":1302,"w":1072,"h":34,"abs_x":424,"abs_y":1345}' className="flex justify-center">
<div bis_size='{"x":874,"y":1302,"w":170,"h":34,"abs_x":874,"abs_y":1345}' className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur">
<svg bis_size='{"x":887,"y":1311,"w":16,"h":16,"abs_x":887,"abs_y":1354}' className="lucide lucide-bolt text-amber-500 w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="bolt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><circle cx="12" cy="12" r="4"></circle></svg>
<span bis_size='{"x":911,"y":1309,"w":120,"h":20,"abs_x":911,"abs_y":1352}' className="text-sm text-amber-500/90">Feature Highlights</span>
</div>
</div>

<h1 bis_size='{"x":424,"y":1360,"w":1072,"h":120,"abs_x":424,"abs_y":1403}' className="mt-6 text-center text-4xl md:text-6xl font-semibold tracking-tight text-white">
    Feature Highlights to Accelerate
    <span bis_size='{"x":424,"y":1420,"w":1072,"h":60,"abs_x":424,"abs_y":1463}' className="block">Your Sales</span>
</h1>
<p bis_size='{"x":624,"y":1500,"w":672,"h":56,"abs_x":624,"abs_y":1543}' className="mx-auto mt-5 max-w-2xl text-center text-base md:text-lg text-white/70 font-normal">
    Tools to track, automate, and scale your pipeline—built to elevate performance and help teams close faster.
  </p>

<div bis_size='{"x":424,"y":1604,"w":1072,"h":448,"abs_x":424,"abs_y":1647}' className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">



<section bis_size='{"x":424,"y":1604,"w":520,"h":448,"abs_x":424,"abs_y":1647}' className="group relative overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 p-5 md:p-6" id="card-collab" style={{}}>
<div bis_size='{"x":424,"y":1604,"w":520,"h":448,"abs_x":424,"abs_y":1647}' className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent pointer-events-none">
</div>
<div bis_size='{"x":752,"y":1860,"w":288,"h":288,"abs_x":752,"abs_y":1903}' className="-right-24 -bottom-24 bg-emerald-500/10 w-72 h-72 rounded-full absolute blur-3xl"></div>
<div bis_size='{"x":448,"y":1628,"w":472,"h":229,"abs_x":448,"abs_y":1671}' className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
<div bis_size='{"x":464,"y":1644,"w":440,"h":20,"abs_x":464,"abs_y":1687}' className="flex items-center gap-2 text-white/80 text-sm">
<svg bis_size='{"x":464,"y":1646,"w":16,"h":16,"abs_x":464,"abs_y":1689}' className="lucide lucide-boxes h-4 w-4 text-emerald-300" data-lucide="boxes" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path><path d="m7 16.5-4.74-2.85"></path><path d="m7 16.5 5-3"></path><path d="M7 16.5v5.17"></path><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path><path d="m17 16.5-5-3"></path><path d="m17 16.5 4.74-2.85"></path><path d="M17 16.5v5.17"></path><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path><path d="M12 8 7.26 5.15"></path><path d="m12 8 4.74-2.85"></path><path d="M12 13.5V8"></path></svg>
<span bis_size='{"x":488,"y":1644,"w":166,"h":20,"abs_x":488,"abs_y":1687}' className="font-medium">Connects with your tools</span>
</div>
<div bis_size='{"x":464,"y":1676,"w":440,"h":68,"abs_x":464,"abs_y":1719}' className="mt-3 grid grid-cols-4 gap-3">

<div bis_size='{"x":464,"y":1676,"w":101,"h":68,"abs_x":464,"abs_y":1719}' className="flex flex-col items-center gap-2 rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
<svg bis_size='{"x":504,"y":1688,"w":20,"h":20,"abs_x":504,"abs_y":1731}' className="lucide lucide-inbox h-5 w-5 text-white/80" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
<span bis_size='{"x":499,"y":1716,"w":30,"h":16,"abs_x":499,"abs_y":1759}' className="text-xs text-white/70">Email</span>
</div>
<div bis_size='{"x":577,"y":1676,"w":101,"h":68,"abs_x":577,"abs_y":1719}' className="flex flex-col items-center gap-2 rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
<svg bis_size='{"x":617,"y":1688,"w":20,"h":20,"abs_x":617,"abs_y":1731}' className="lucide lucide-message-square h-5 w-5 text-white/80" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span bis_size='{"x":614,"y":1716,"w":26,"h":16,"abs_x":614,"abs_y":1759}' className="text-xs text-white/70">Chat</span>
</div>
<div bis_size='{"x":690,"y":1676,"w":101,"h":68,"abs_x":690,"abs_y":1719}' className="flex flex-col items-center gap-2 rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
<svg bis_size='{"x":730,"y":1688,"w":20,"h":20,"abs_x":730,"abs_y":1731}' className="lucide lucide-calendar h-5 w-5 text-white/80" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span bis_size='{"x":714,"y":1716,"w":51,"h":16,"abs_x":714,"abs_y":1759}' className="text-xs text-white/70">Calendar</span>
</div>
<div bis_size='{"x":803,"y":1676,"w":101,"h":68,"abs_x":803,"abs_y":1719}' className="flex flex-col items-center gap-2 rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
<svg bis_size='{"x":843,"y":1688,"w":20,"h":20,"abs_x":843,"abs_y":1731}' className="lucide lucide-database h-5 w-5 text-white/80" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
<span bis_size='{"x":839,"y":1716,"w":27,"h":16,"abs_x":839,"abs_y":1759}' className="text-xs text-white/70">CRM</span>
</div>
</div>
<div bis_size='{"x":464,"y":1756,"w":440,"h":85,"abs_x":464,"abs_y":1799}' className="mt-3 overflow-hidden rounded-xl bg-white/[0.04] ring-1 ring-white/10">
<div bis_size='{"x":464,"y":1756,"w":440,"h":48,"abs_x":464,"abs_y":1799}' className="relative grid grid-cols-6 gap-2 p-3" id="collab-shimmer">
<div bis_size='{"x":476,"y":1768,"w":133,"h":8,"abs_x":476,"abs_y":1811}' className="h-2 rounded-full bg-white/10 col-span-2"></div>
<div bis_size='{"x":617,"y":1768,"w":204,"h":8,"abs_x":617,"abs_y":1811}' className="h-2 rounded-full bg-white/10 col-span-3"></div>
<div bis_size='{"x":829,"y":1768,"w":62,"h":8,"abs_x":829,"abs_y":1811}' className="h-2 rounded-full bg-white/10 col-span-1"></div>
<div bis_size='{"x":476,"y":1784,"w":274,"h":8,"abs_x":476,"abs_y":1827}' className="h-2 rounded-full bg-white/10 col-span-4"></div>
<div bis_size='{"x":758,"y":1784,"w":133,"h":8,"abs_x":758,"abs_y":1827}' className="h-2 rounded-full bg-white/10 col-span-2"></div>
<div bis_size='{"x":460,"y":1756,"w":96,"h":48,"abs_x":460,"abs_y":1799}' className="absolute inset-y-0 -left-1 w-24 bg-gradient-to-r from-transparent via-white/15 to-transparent">
</div>
</div>
<div bis_size='{"x":464,"y":1804,"w":440,"h":37,"abs_x":464,"abs_y":1847}' className="flex items-center gap-2 border-t border-white/10 px-3 py-2">
<img alt="avatar" bis_size='{"x":476,"y":1813,"w":20,"h":20,"abs_x":476,"abs_y":1856}' className="h-5 w-5 rounded-full ring-1 ring-white/20" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<img alt="avatar" bis_size='{"x":496,"y":1813,"w":20,"h":20,"abs_x":496,"abs_y":1856}' className="h-5 w-5 rounded-full ring-1 ring-white/20 -ml-2" src="https://images.unsplash.com/photo-1546539782-6fc531453083?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<img alt="avatar" bis_size='{"x":516,"y":1813,"w":20,"h":20,"abs_x":516,"abs_y":1856}' className="h-5 w-5 rounded-full ring-1 ring-white/20 -ml-2" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<span bis_size='{"x":548,"y":1814,"w":105,"h":16,"abs_x":548,"abs_y":1857}' className="ml-1 text-[11px] text-white/60">Synced across tools</span>
</div>
</div>
</div>
<h3 bis_size='{"x":448,"y":1877,"w":472,"h":32,"abs_x":448,"abs_y":1920}' className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">Seamless Collaboration</h3>
<p bis_size='{"x":448,"y":1915,"w":472,"h":40,"abs_x":448,"abs_y":1958}' className="mt-1.5 text-sm text-white/70">
        Keep your team aligned with integrations to email, chat, calendars, and your CRM—all in one place.
      </p>


</section>

<section bis_size='{"x":976,"y":1604,"w":520,"h":448,"abs_x":976,"abs_y":1647}' className="group relative overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 p-5 md:p-6" id="card-automation">
<div bis_size='{"x":976,"y":1604,"w":520,"h":448,"abs_x":976,"abs_y":1647}' className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-transparent pointer-events-none">
</div>
<div bis_size='{"x":880,"y":1860,"w":288,"h":288,"abs_x":880,"abs_y":1903}' className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl"></div>
<div bis_size='{"x":1000,"y":1628,"w":472,"h":302,"abs_x":1000,"abs_y":1671}' className="bg-gradient-to-b from-white/5 to-white/[0.03] ring-white/10 ring-1 rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur">
<div bis_size='{"x":1016,"y":1644,"w":440,"h":24,"abs_x":1016,"abs_y":1687}' className="flex items-center justify-between">
<div bis_size='{"x":1016,"y":1646,"w":140,"h":20,"abs_x":1016,"abs_y":1689}' className="flex items-center gap-2 text-white/80 text-sm">
<svg bis_size='{"x":1016,"y":1648,"w":16,"h":16,"abs_x":1016,"abs_y":1691}' className="lucide lucide-workflow h-4 w-4 text-fuchsia-300" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
<span bis_size='{"x":1040,"y":1646,"w":116,"h":20,"abs_x":1040,"abs_y":1689}' className="font-medium">Team Workspace</span>
</div>
<div bis_size='{"x":1400,"y":1644,"w":55,"h":24,"abs_x":1400,"abs_y":1687}' className="flex items-center gap-1.5">
<button bis_size='{"x":1400,"y":1644,"w":55,"h":24,"abs_x":1400,"abs_y":1687}' className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-[11px] text-white/80 ring-1 ring-white/10 hover:bg-white/10 transition" id="add-member">
<svg bis_size='{"x":1408,"y":1649,"w":14,"h":14,"abs_x":1408,"abs_y":1692}' className="lucide lucide-user-plus h-3.5 w-3.5" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
                    Add
                  </button>
</div>
</div>

<div bis_size='{"x":1016,"y":1680,"w":440,"h":24,"abs_x":1016,"abs_y":1723}' className="mt-3 flex items-center gap-2 text-xs">
<button bis_size='{"x":1016,"y":1680,"w":69,"h":24,"abs_x":1016,"abs_y":1723}' className="rounded-full bg-white/10 px-2 py-1 text-white/90 ring-1 ring-white/10">Members</button>
<button bis_size='{"x":1093,"y":1680,"w":48,"h":24,"abs_x":1093,"abs_y":1723}' className="rounded-full bg-transparent px-2 py-1 text-white/60 ring-1 ring-white/10">Tasks</button>
<button bis_size='{"x":1150,"y":1680,"w":39,"h":24,"abs_x":1150,"abs_y":1723}' className="rounded-full bg-transparent px-2 py-1 text-white/60 ring-1 ring-white/10">Hub</button>
</div>
<div bis_size='{"x":1016,"y":1716,"w":440,"h":197,"abs_x":1016,"abs_y":1759}' className="mt-3 space-y-2" id="member-list">
<div bis_size='{"x":1016,"y":1716,"w":440,"h":60,"abs_x":1016,"abs_y":1759}' className="flex items-center justify-between rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
<div bis_size='{"x":1028,"y":1728,"w":141,"h":36,"abs_x":1028,"abs_y":1771}' className="flex items-center gap-3">
<img alt="member" bis_size='{"x":1028,"y":1732,"w":28,"h":28,"abs_x":1028,"abs_y":1775}' className="h-7 w-7 rounded-full ring-1 ring-white/20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div bis_size='{"x":1068,"y":1728,"w":101,"h":36,"abs_x":1068,"abs_y":1771}'>
<p bis_size='{"x":1068,"y":1728,"w":101,"h":20,"abs_x":1068,"abs_y":1771}' className="text-sm text-white/90">Ava Morgan</p>
<p bis_size='{"x":1068,"y":1748,"w":101,"h":16,"abs_x":1068,"abs_y":1791}' className="text-[11px] text-white/50">Backend Developer</p>
</div>
</div>
<div bis_size='{"x":1340,"y":1738,"w":103,"h":16,"abs_x":1340,"abs_y":1781}' className="flex items-center gap-2 text-[11px] text-white/60">
<svg bis_size='{"x":1340,"y":1739,"w":14,"h":14,"abs_x":1340,"abs_y":1782}' className="lucide lucide-clock h-3.5 w-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
              Auto‑reminders
            </div>
</div>
<div bis_size='{"x":1016,"y":1785,"w":440,"h":60,"abs_x":1016,"abs_y":1828}' className="flex items-center justify-between rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
<div bis_size='{"x":1028,"y":1797,"w":115,"h":36,"abs_x":1028,"abs_y":1840}' className="flex items-center gap-3">
<img alt="member" bis_size='{"x":1028,"y":1801,"w":28,"h":28,"abs_x":1028,"abs_y":1844}' className="h-7 w-7 rounded-full ring-1 ring-white/20" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":1068,"y":1797,"w":75,"h":36,"abs_x":1068,"abs_y":1840}'>
<p bis_size='{"x":1068,"y":1797,"w":75,"h":20,"abs_x":1068,"abs_y":1840}' className="text-sm text-white/90">Ethan Reed</p>
<p bis_size='{"x":1068,"y":1817,"w":75,"h":16,"abs_x":1068,"abs_y":1860}' className="text-[11px] text-white/50">Project Lead</p>
</div>
</div>
<div bis_size='{"x":1364,"y":1807,"w":79,"h":16,"abs_x":1364,"abs_y":1850}' className="flex items-center gap-2 text-[11px] text-white/60">
<svg bis_size='{"x":1364,"y":1808,"w":14,"h":14,"abs_x":1364,"abs_y":1851}' className="lucide lucide-bell-ring h-3.5 w-3.5" data-lucide="bell-ring" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M22 8c0-2.3-.8-4.3-2-6"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path><path d="M4 2C2.8 3.7 2 5.7 2 8"></path></svg>
              Follow‑ups
            </div>
</div>
<div bis_size='{"x":1016,"y":1853,"w":440,"h":60,"abs_x":1016,"abs_y":1896}' className="flex items-center justify-between rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
<div bis_size='{"x":1028,"y":1865,"w":99,"h":36,"abs_x":1028,"abs_y":1908}' className="flex items-center gap-3">
<img alt="member" bis_size='{"x":1028,"y":1869,"w":28,"h":28,"abs_x":1028,"abs_y":1912}' className="h-7 w-7 rounded-full ring-1 ring-white/20" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":1068,"y":1865,"w":59,"h":36,"abs_x":1068,"abs_y":1908}'>
<p bis_size='{"x":1068,"y":1865,"w":59,"h":20,"abs_x":1068,"abs_y":1908}' className="text-sm text-white/90">Zoe Park</p>
<p bis_size='{"x":1068,"y":1885,"w":59,"h":16,"abs_x":1068,"abs_y":1928}' className="text-[11px] text-white/50">Sales Lead</p>
</div>
</div>
<div bis_size='{"x":1371,"y":1875,"w":72,"h":16,"abs_x":1371,"abs_y":1918}' className="flex items-center gap-2 text-[11px] text-white/60">
<svg bis_size='{"x":1371,"y":1876,"w":14,"h":14,"abs_x":1371,"abs_y":1919}' className="lucide lucide-bar-chart h-3.5 w-3.5" data-lucide="bar-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V9"></path><path d="M19 21V3"></path></svg>
              Reporting
            </div>
</div>
</div>
</div>
<h3 bis_size='{"x":1000,"y":1950,"w":472,"h":32,"abs_x":1000,"abs_y":1993}' className="mt-5 text-xl md:text-2xl font-semibold tracking-tight">Automate Sales Workflows</h3>
<p bis_size='{"x":1000,"y":1988,"w":472,"h":40,"abs_x":1000,"abs_y":2031}' className="mt-1.5 text-sm text-white/70">
        Automate follow‑ups, reminders, and handoffs so your team can focus on building relationships and closing deals.
      </p>


</section>
</div>
</section>

<div bis_size='{"x":0,"y":2052,"w":1920,"h":1035,"abs_x":0,"abs_y":2095}' className="min-h-screen overflow-hidden antialiased text-neutral-200 relative" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  </style>


<div bis_size='{"x":0,"y":2052,"w":1920,"h":1035,"abs_x":0,"abs_y":2095}' className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_30%,rgba(120,119,198,0.15),transparent_60%)]"></div>
<section bis_size='{"x":0,"y":2052,"w":1920,"h":821,"abs_x":0,"abs_y":2095}' className="grid-corners pt-20 pb-1 relative" id="why">
<div bis_size='{"x":0,"y":2132,"w":1920,"h":0,"abs_x":0,"abs_y":2175}' className="grid-corners-bottom"></div>
<div bis_size='{"x":320,"y":2132,"w":1280,"h":737,"abs_x":320,"abs_y":2175}' className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div bis_size='{"x":576,"y":2132,"w":768,"h":173,"abs_x":576,"abs_y":2175}' className="animate-in text-center max-w-3xl mr-auto ml-auto">
<span bis_size='{"x":927,"y":2132,"w":64,"h":24,"abs_x":927,"abs_y":2175}' className="inline-flex items-center gap-1 text-[11px] uppercase text-amber-500 tracking-tight bg-lime-400/10 ring-lime-300/20 ring-1 rounded-full px-2 py-1">
<svg bis_size='{"x":935,"y":2137,"w":14,"h":14,"abs_x":935,"abs_y":2180}' className="lucide lucide-users h-3.5 w-3.5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
            Team
          </span>
<h2 bis_size='{"x":576,"y":2173,"w":768,"h":96,"abs_x":576,"abs_y":2216}' className="sm:text-5xl text-4xl font-semibold tracking-tight mt-4 karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span bis_size='{"x":596,"y":2168,"w":0,"h":58,"abs_x":596,"abs_y":2211}' className="karaoke-word"></span>
<span bis_size='{"x":596,"y":2168,"w":113,"h":58,"abs_x":596,"abs_y":2211}' className="karaoke-word">Meet</span>
<span bis_size='{"x":720,"y":2168,"w":71,"h":58,"abs_x":720,"abs_y":2211}' className="karaoke-word">the</span>
<span bis_size='{"x":802,"y":2168,"w":111,"h":58,"abs_x":802,"abs_y":2211}' className="karaoke-word">team</span>
<span bis_size='{"x":924,"y":2168,"w":86,"h":58,"abs_x":924,"abs_y":2211}' className="karaoke-word">that</span>
<span bis_size='{"x":1021,"y":2168,"w":105,"h":58,"abs_x":1021,"abs_y":2211}' className="karaoke-word">talks</span>
<span bis_size='{"x":1137,"y":2168,"w":43,"h":58,"abs_x":1137,"abs_y":2211}' className="karaoke-word">to</span>
<span bis_size='{"x":1191,"y":2168,"w":45,"h":58,"abs_x":1191,"abs_y":2211}' className="karaoke-word">AI</span>
<span bis_size='{"x":1248,"y":2168,"w":74,"h":58,"abs_x":1248,"abs_y":2211}' className="karaoke-word">like</span>
<span bis_size='{"x":866,"y":2216,"w":66,"h":58,"abs_x":866,"abs_y":2259}' className="karaoke-word">it's</span>
<span bis_size='{"x":944,"y":2216,"w":26,"h":58,"abs_x":944,"abs_y":2259}' className="karaoke-word">a</span>
<span bis_size='{"x":981,"y":2216,"w":71,"h":58,"abs_x":981,"abs_y":2259}' className="karaoke-word">pet</span>
<span bis_size='{"x":1053,"y":2216,"w":0,"h":58,"abs_x":1053,"abs_y":2259}' className="karaoke-word"></span>
</h2>
<p bis_size='{"x":624,"y":2281,"w":672,"h":24,"abs_x":624,"abs_y":2324}' className="mx-auto mt-3 max-w-2xl text-neutral-300 text-sm sm:text-base karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span bis_size='{"x":686,"y":2283,"w":0,"h":19,"abs_x":686,"abs_y":2326}' className="karaoke-word"></span>
<span bis_size='{"x":686,"y":2283,"w":29,"h":19,"abs_x":686,"abs_y":2326}' className="karaoke-word">The</span>
<span bis_size='{"x":719,"y":2283,"w":59,"h":19,"abs_x":719,"abs_y":2326}' className="karaoke-word">humans</span>
<span bis_size='{"x":784,"y":2283,"w":51,"h":19,"abs_x":784,"abs_y":2326}' className="karaoke-word">behind</span>
<span bis_size='{"x":840,"y":2283,"w":24,"h":19,"abs_x":840,"abs_y":2326}' className="karaoke-word">the</span>
<span bis_size='{"x":868,"y":2283,"w":55,"h":19,"abs_x":868,"abs_y":2326}' className="karaoke-word">models</span>
<span bis_size='{"x":928,"y":2283,"w":65,"h":19,"abs_x":928,"abs_y":2326}' className="karaoke-word">builders,</span>
<span bis_size='{"x":998,"y":2283,"w":76,"h":19,"abs_x":998,"abs_y":2326}' className="karaoke-word">dreamers,</span>
<span bis_size='{"x":1079,"y":2283,"w":28,"h":19,"abs_x":1079,"abs_y":2326}' className="karaoke-word">and</span>
<span bis_size='{"x":1111,"y":2283,"w":70,"h":19,"abs_x":1111,"abs_y":2326}' className="karaoke-word">delightful</span>
<span bis_size='{"x":1186,"y":2283,"w":47,"h":19,"abs_x":1186,"abs_y":2326}' className="karaoke-word">nerds.</span>
<span bis_size='{"x":1233,"y":2283,"w":0,"h":19,"abs_x":1233,"abs_y":2326}' className="karaoke-word"></span>
</p>
</div>
<div bis_size='{"x":352,"y":2369,"w":1216,"h":500,"abs_x":352,"abs_y":2412}' className="flex mt-16 relative items-center justify-center" style={{perspective: '1200px'}}>
<button aria-label="Previous" bis_size='{"x":368,"y":2595,"w":48,"h":48,"abs_x":368,"abs_y":2638}' className="absolute left-4 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/50 ring-1 ring-white/10 hover:bg-white/5 transition" id="teamPrevBtn">
<svg bis_size='{"x":382,"y":2609,"w":20,"h":20,"abs_x":382,"abs_y":2652}' className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":389,"y":2614,"w":5,"h":10,"abs_x":389,"abs_y":2657}' className="" d="m15 18-6-6 6-6"></path>
</svg>
</button>
<div bis_size='{"x":736,"y":2369,"w":448,"h":500,"abs_x":736,"abs_y":2412}' className="relative w-full max-w-md h-[500px] flex items-center justify-center">
<div bis_size='{"x":736,"y":2369,"w":448,"h":500,"abs_x":736,"abs_y":2412}' className="flex transition-transform duration-500 ease-out absolute top-0 right-0 bottom-0 left-0 items-center justify-center" id="carouselTrack" style={{transformStyle: 'preserve-3d'}}>
<div bis_size='{"x":448,"y":2414,"w":289,"h":409,"abs_x":448,"abs_y":2457}' className="carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-500" data-index="0" style={{transform: 'translateX(-360px) scale(0.85) rotateY(20deg)', opacity: '0.4', filter: 'brightness(0.6)', zIndex: '2'}}>
<img alt="Team member" bis_size='{"x":448,"y":2414,"w":289,"h":409,"abs_x":448,"abs_y":2457}' className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e22892ae-580d-4f98-b6c4-47cacdd0c9d3_800w.webp"/>
<div bis_size='{"x":448,"y":2414,"w":289,"h":409,"abs_x":448,"abs_y":2457}' className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div bis_size='{"x":472,"y":2735,"w":245,"h":65,"abs_x":472,"abs_y":2778}' className="absolute bottom-6 left-6 right-6">
<div bis_size='{"x":472,"y":2741,"w":109,"h":25,"abs_x":472,"abs_y":2784}' className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/20 mb-3">
<svg bis_size='{"x":484,"y":2749,"w":11,"h":11,"abs_x":484,"abs_y":2792}' className="h-3 w-3 text-lime-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":485,"y":2756,"w":6,"h":2,"abs_x":485,"abs_y":2799}' className="" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle bis_size='{"x":486,"y":2751,"w":3,"h":3,"abs_x":486,"abs_y":2794}' className="" cx="9" cy="7" r="4"></circle>
<path bis_size='{"x":493,"y":2756,"w":1,"h":2,"abs_x":493,"abs_y":2799}' className="" d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path bis_size='{"x":491,"y":2751,"w":1,"h":3,"abs_x":491,"abs_y":2794}' className="" d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
<span bis_size='{"x":503,"y":2744,"w":67,"h":16,"abs_x":503,"abs_y":2787}' className="text-white">Growth Lead</span>
</div>
<p bis_size='{"x":472,"y":2765,"w":245,"h":36,"abs_x":472,"abs_y":2808}' className="text-xl font-semibold text-white tracking-tight">
        John Alvarez
      </p>
</div>
</div>
<div bis_size='{"x":630,"y":2407,"w":292,"h":423,"abs_x":630,"abs_y":2450}' className="carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-500" data-index="1" style={{transform: 'translateX(-180px) scale(0.9) rotateY(10deg)', opacity: '0.6', filter: 'brightness(0.75)', zIndex: '5'}}>
<img alt="Team member" bis_size='{"x":630,"y":2407,"w":292,"h":423,"abs_x":630,"abs_y":2450}' className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/118fb7f9-cdd4-4a2a-89bd-3170e009a9a4_800w.webp"/>
<div bis_size='{"x":630,"y":2407,"w":292,"h":423,"abs_x":630,"abs_y":2450}' className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div bis_size='{"x":653,"y":2745,"w":248,"h":63,"abs_x":653,"abs_y":2788}' className="absolute bottom-6 left-6 right-6">
<div bis_size='{"x":653,"y":2748,"w":81,"h":23,"abs_x":653,"abs_y":2791}' className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/20 mb-3">
<svg bis_size='{"x":664,"y":2755,"w":11,"h":11,"abs_x":664,"abs_y":2798}' className="h-3 w-3 text-lime-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":668,"y":2757,"w":1,"h":1,"abs_x":668,"abs_y":2800}' className="" d="M12 8V4H8"></path>
<rect bis_size='{"x":666,"y":2758,"w":7,"h":5,"abs_x":666,"abs_y":2801}' className="" height="12" rx="2" width="16" x="4" y="8"></rect>
<path bis_size='{"x":665,"y":2761,"w":0,"h":0,"abs_x":665,"abs_y":2804}' className="" d="M2 14h2"></path>
<path bis_size='{"x":674,"y":2761,"w":0,"h":0,"abs_x":674,"abs_y":2804}' className="" d="M20 14h2"></path>
<path bis_size='{"x":671,"y":2761,"w":0,"h":0,"abs_x":671,"abs_y":2804}' className="" d="M15 13v2"></path>
<path bis_size='{"x":669,"y":2761,"w":0,"h":0,"abs_x":669,"abs_y":2804}' className="" d="M9 13v2"></path>
</svg>
<span bis_size='{"x":683,"y":2752,"w":40,"h":15,"abs_x":683,"abs_y":2795}' className="text-white">AI Lead</span>
</div>
<p bis_size='{"x":653,"y":2776,"w":248,"h":32,"abs_x":653,"abs_y":2819}' className="text-xl font-semibold tracking-tight text-white">
        Jackson Mitchel
      </p>
</div>
</div>
<div bis_size='{"x":800,"y":2389,"w":320,"h":460,"abs_x":800,"abs_y":2432}' className="carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ring-2 ring-lime-300/40 bg-lime-400/10 transition-all duration-500" data-index="2" style={{transform: 'translateX(0px) scale(1) rotateY(0deg)', opacity: '1', zIndex: '10', boxShadow: 'rgba(163, 230, 53, 0.3) 0px 20px 60px', filter: 'brightness(1)'}}>
<img alt="Team member" bis_size='{"x":800,"y":2389,"w":320,"h":460,"abs_x":800,"abs_y":2432}' className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e1c1b8c-f44b-4a81-abaf-0241f388c8ff_800w.jpg"/>
<div bis_size='{"x":800,"y":2389,"w":320,"h":460,"abs_x":800,"abs_y":2432}' className="bg-gradient-to-t from-black/85 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div bis_size='{"x":1005,"y":2413,"w":90,"h":28,"abs_x":1005,"abs_y":2456}' className="absolute top-6 right-6">
<div bis_size='{"x":1005,"y":2413,"w":90,"h":28,"abs_x":1005,"abs_y":2456}' className="inline-flex gap-1 text-xs font-medium text-neutral-950 bg-amber-500 rounded-full px-3 py-1.5 gap-x-1 gap-y-1 items-center">
<svg bis_size='{"x":1017,"y":2421,"w":12,"h":12,"abs_x":1017,"abs_y":2464}' className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":1018,"y":2422,"w":10,"h":10,"abs_x":1018,"abs_y":2465}' className="" d="M12 2v20M2 12h20"></path>
</svg>
        Featured
      </div>
</div>
<div bis_size='{"x":832,"y":2713,"w":256,"h":104,"abs_x":832,"abs_y":2756}' className="absolute bottom-8 left-8 right-8">
<div bis_size='{"x":832,"y":2713,"w":121,"h":28,"abs_x":832,"abs_y":2756}' className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs ring-1 ring-white/20 backdrop-blur-md mb-4">
<svg bis_size='{"x":844,"y":2721,"w":12,"h":12,"abs_x":844,"abs_y":2764}' className="text-amber-500 w-[12px] h-[12px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '12px', height: '12px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":848,"y":2722,"w":4,"h":9,"abs_x":848,"abs_y":2765}' className="" d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
<rect bis_size='{"x":845,"y":2724,"w":10,"h":7,"abs_x":845,"abs_y":2767}' className="" height="14" rx="2" width="20" x="2" y="6"></rect>
</svg>
<span bis_size='{"x":864,"y":2719,"w":77,"h":16,"abs_x":864,"abs_y":2762}' className="text-white">Product Head</span>
</div>
<p bis_size='{"x":832,"y":2757,"w":256,"h":36,"abs_x":832,"abs_y":2800}' className="text-3xl font-bold text-white tracking-tight mb-1">
        Jenny Doe
      </p>
<p bis_size='{"x":832,"y":2797,"w":256,"h":20,"abs_x":832,"abs_y":2840}' className="text-sm text-neutral-300 karaoke-container" data-karaoke-animated="true" data-karaoke-wrapped="true">
<span bis_size='{"x":832,"y":2799,"w":0,"h":17,"abs_x":832,"abs_y":2842}' className="karaoke-word"></span>
<span bis_size='{"x":832,"y":2799,"w":52,"h":17,"abs_x":832,"abs_y":2842}' className="karaoke-word">Leading</span>
<span bis_size='{"x":888,"y":2799,"w":51,"h":17,"abs_x":888,"abs_y":2842}' className="karaoke-word">product</span>
<span bis_size='{"x":944,"y":2799,"w":38,"h":17,"abs_x":944,"abs_y":2842}' className="karaoke-word">vision</span>
<span bis_size='{"x":986,"y":2799,"w":9,"h":17,"abs_x":986,"abs_y":2842}' className="karaoke-word">&amp;</span>
<span bis_size='{"x":999,"y":2799,"w":54,"h":17,"abs_x":999,"abs_y":2842}' className="karaoke-word">strategy</span>
<span bis_size='{"x":1053,"y":2799,"w":0,"h":17,"abs_x":1053,"abs_y":2842}' className="karaoke-word"></span>
</p>
</div>
</div>
<div bis_size='{"x":997,"y":2407,"w":292,"h":423,"abs_x":997,"abs_y":2450}' className="carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-500" data-index="3" style={{transform: 'translateX(180px) scale(0.9) rotateY(-10deg)', opacity: '0.6', filter: 'brightness(0.75)', zIndex: '5'}}>
<img alt="Team member" bis_size='{"x":997,"y":2407,"w":292,"h":423,"abs_x":997,"abs_y":2450}' className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c1697f5-cb65-4307-a9e2-c0560b4e3a68_800w.webp"/>
<div bis_size='{"x":997,"y":2407,"w":292,"h":423,"abs_x":997,"abs_y":2450}' className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div bis_size='{"x":1018,"y":2745,"w":248,"h":63,"abs_x":1018,"abs_y":2788}' className="absolute bottom-6 left-6 right-6">
<div bis_size='{"x":1018,"y":2745,"w":134,"h":24,"abs_x":1018,"abs_y":2788}' className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/20 mb-3">
<svg bis_size='{"x":1028,"y":2750,"w":10,"h":10,"abs_x":1028,"abs_y":2793}' className="h-3 w-3 text-lime-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":1029,"y":2751,"w":8,"h":8,"abs_x":1029,"abs_y":2794}' className="" d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z">
</path>
</svg>
<span bis_size='{"x":1046,"y":2749,"w":95,"h":16,"abs_x":1046,"abs_y":2792}' className="text-white">Social Media Head</span>
</div>
<p bis_size='{"x":1018,"y":2776,"w":248,"h":32,"abs_x":1018,"abs_y":2819}' className="text-xl font-semibold tracking-tight text-white">
        Armenia Sean
      </p>
</div>
</div>
<div bis_size='{"x":1182,"y":2414,"w":289,"h":409,"abs_x":1182,"abs_y":2457}' className="carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-500" data-index="4" style={{transform: 'translateX(360px) scale(0.85) rotateY(-20deg)', opacity: '0.4', filter: 'brightness(0.6)', zIndex: '2'}}>
<img alt="Team member" bis_size='{"x":1182,"y":2414,"w":289,"h":409,"abs_x":1182,"abs_y":2457}' className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11c70762-35c0-4a1d-bdd9-40176c7ee60b_800w.webp"/>
<div bis_size='{"x":1182,"y":2414,"w":289,"h":409,"abs_x":1182,"abs_y":2457}' className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div bis_size='{"x":1201,"y":2735,"w":245,"h":65,"abs_x":1201,"abs_y":2778}' className="absolute bottom-6 left-6 right-6">
<div bis_size='{"x":1201,"y":2735,"w":98,"h":24,"abs_x":1201,"abs_y":2778}' className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/20 mb-3">
<svg bis_size='{"x":1212,"y":2741,"w":10,"h":10,"abs_x":1212,"abs_y":2784}' className="h-3 w-3 text-lime-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":1213,"y":2742,"w":7,"h":8,"abs_x":1213,"abs_y":2785}' className="" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
</path>
<polyline bis_size='{"x":1215,"y":2743,"w":3,"h":1,"abs_x":1215,"abs_y":2786}' className="" points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
<polyline bis_size='{"x":1213,"y":2746,"w":1,"h":3,"abs_x":1213,"abs_y":2789}' className="" points="7.5 19.79 7.5 14.6 3 12"></polyline>
<polyline bis_size='{"x":1219,"y":2746,"w":1,"h":3,"abs_x":1219,"abs_y":2789}' className="" points="21 12 16.5 14.6 16.5 19.79"></polyline>
<polyline bis_size='{"x":1213,"y":2744,"w":7,"h":2,"abs_x":1213,"abs_y":2787}' className="" points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
<line bis_size='{"x":1217,"y":2746,"w":0,"h":4,"abs_x":1217,"abs_y":2789}' className="" x1="12" x2="12" y1="22.08" y2="12"></line>
</svg>
<span bis_size='{"x":1228,"y":2740,"w":61,"h":15,"abs_x":1228,"abs_y":2783}' className="text-white">Design Lead</span>
</div>
<p bis_size='{"x":1201,"y":2765,"w":245,"h":36,"abs_x":1201,"abs_y":2808}' className="text-xl font-semibold tracking-tight text-white">
        Maya Patel
      </p>
</div>
</div>
<div bis_size='{"x":1375,"y":2429,"w":273,"h":380,"abs_x":1375,"abs_y":2472}' className="carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-500" data-index="5" style={{transform: 'translateX(540px) scale(0.75) rotateY(-45deg)', opacity: '0', filter: 'brightness(0.5)', zIndex: '1'}}>
<img alt="Team member" bis_size='{"x":1375,"y":2429,"w":273,"h":380,"abs_x":1375,"abs_y":2472}' className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/986db8ed-1c5d-42fb-8c1d-4b3716d2e317_3840w.jpg"/>
<div bis_size='{"x":1375,"y":2429,"w":273,"h":380,"abs_x":1375,"abs_y":2472}' className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div bis_size='{"x":1393,"y":2718,"w":232,"h":69,"abs_x":1393,"abs_y":2761}' className="absolute bottom-6 left-6 right-6">
<div bis_size='{"x":1393,"y":2718,"w":114,"h":26,"abs_x":1393,"abs_y":2761}' className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/20 mb-3">
<svg bis_size='{"x":1401,"y":2723,"w":8,"h":9,"abs_x":1401,"abs_y":2766}' className="h-3 w-3 text-lime-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect bis_size='{"x":1403,"y":2724,"w":6,"h":6,"abs_x":1403,"abs_y":2767}' className="" height="18" rx="2" width="18" x="3" y="3"></rect>
<path bis_size='{"x":1405,"y":2724,"w":0,"h":6,"abs_x":1405,"abs_y":2767}' className="" d="M9 3v18"></path>
<path bis_size='{"x":1406,"y":2726,"w":1,"h":2,"abs_x":1406,"abs_y":2769}' className="" d="m16 15-3-3 3-3"></path>
</svg>
<span bis_size='{"x":1416,"y":2722,"w":80,"h":18,"abs_x":1416,"abs_y":2765}' className="text-white">Platform Engineer</span>
</div>
<p bis_size='{"x":1393,"y":2743,"w":232,"h":44,"abs_x":1393,"abs_y":2786}' className="text-xl font-semibold tracking-tight text-white">
        Liam Becker
      </p>
</div>
</div>
</div>
</div>
<button aria-label="Next" bis_size='{"x":1504,"y":2595,"w":48,"h":48,"abs_x":1504,"abs_y":2638}' className="absolute right-4 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/50 ring-1 ring-white/10 hover:bg-white/5 transition" id="teamNextBtn">
<svg bis_size='{"x":1518,"y":2609,"w":20,"h":20,"abs_x":1518,"abs_y":2652}' className="w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(229, 229, 229)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":1525,"y":2614,"w":5,"h":10,"abs_x":1525,"abs_y":2657}' className="" d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>
</div>

</section>

</div>

<section bis_size='{"x":320,"y":3215,"w":1280,"h":406,"abs_x":320,"abs_y":3258}' className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll sm:px-8 max-w-7xl mt-1 mr-auto mb-25 ml-auto pr-6 pl-6">
<section bis_size='{"x":352,"y":3215,"w":1216,"h":406,"abs_x":352,"abs_y":3258}' className="overflow-hidden sm:mt-32 sm:pl-8 sm:pr-8 sm:pt-8 sm:pb-8 bg-gradient-to-br from-gray-500/10 via-gray-500/0 to-gray-500/10 max-w-7xl rounded-3xl ring-0 mt-24 pt-6 pr-6 pb-8 pl-6 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '24px'}}>

<span aria-hidden="true" bis_size='{"x":352,"y":3215,"w":1216,"h":406,"abs_x":352,"abs_y":3258}' className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/5"></span>
<div bis_size='{"x":384,"y":3247,"w":1152,"h":342,"abs_x":384,"abs_y":3290}' className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-8 gap-x-8 gap-y-8">

<div bis_size='{"x":384,"y":3247,"w":544,"h":342,"abs_x":384,"abs_y":3290}' className="">
<span bis_size='{"x":384,"y":3247,"w":111,"h":26,"abs_x":384,"abs_y":3290}' className="inline-flex items-center gap-1 uppercase text-xs font-medium text-neutral-50 tracking-tight bg-orange-500 border-green-50 border ring-emerald-400/20 ring-2 rounded-full pt-1 pr-3 pb-1 pl-3">Testimonials</span>
<h2 bis_size='{"x":384,"y":3297,"w":544,"h":180,"abs_x":384,"abs_y":3340}' className="sm:text-5xl lg:text-6xl text-4xl font-light text-white tracking-tight font-geist mt-6">
          Loved by teams who take budgets seriously
        </h2>
<p bis_size='{"x":384,"y":3501,"w":544,"h":56,"abs_x":384,"abs_y":3544}' className="mt-6 text-base sm:text-lg dark:text-neutral-400">
          See how Moneo helps people cut waste, automate savings, and stay on plan with AI-driven insights.
        </p>

</div>

<div bis_size='{"x":992,"y":3247,"w":544,"h":342,"abs_x":992,"abs_y":3290}' className="md:pl-4">
<figure bis_size='{"x":1008,"y":3247,"w":528,"h":342,"abs_x":1008,"abs_y":3290}' className="sm:p-8 bg-gradient-to-br rounded-2xl ring-0 px-6 py-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur from-white/10 to-white/0" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', -BorderRadiusBefore: '16px'}}>

<svg bis_size='{"x":1040,"y":3279,"w":34,"h":34,"abs_x":1040,"abs_y":3322}' className="text-orange-500 w-[34px] h-[34px] mb-4" data-icon-replaced="true" fill="currentColor" strokeWidth="2" style={{width: '34px', height: '34px'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":1045,"y":3287,"w":26,"h":17,"abs_x":1045,"abs_y":3330}' className="" d="M7.17 6.18C5.2 7.62 4 9.76 4 12.1c0 3.4 2.38 5.9 5.6 5.9 2.1 0 3.4-1.05 3.4-2.63 0-1.36-1.02-2.36-2.44-2.36-1 0-1.76.45-2.18 1.24.06-2.06 1.36-3.76 3.4-4.54V6c-1.3.05-2.92.4-4.65 1.18Zm10 0C15.2 7.62 14 9.76 14 12.1c0 3.4 2.38 5.9 5.6 5.9 2.1 0 3.4-1.05 3.4-2.63 0-1.36-1.02-2.36-2.44-2.36-1 0-1.76.45-2.18 1.24.06-2.06 1.36-3.76 3.4-4.54V6c-1.3.05-2.92.4-4.65 1.18Z">
</path>
</svg>
<blockquote bis_size='{"x":1040,"y":3329,"w":464,"h":160,"abs_x":1040,"abs_y":3372}' className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-light tracking-tight text-white" id="t-quote" style={{opacity: '1'}}>
            “The AI flagged duplicate subscriptions and saved our team over $600 in the first month.”</blockquote>
<figcaption bis_size='{"x":1040,"y":3513,"w":464,"h":44,"abs_x":1040,"abs_y":3556}' className="mt-6 flex items-center gap-3">
<img alt="Avatar" bis_size='{"x":1040,"y":3515,"w":40,"h":40,"abs_x":1040,"abs_y":3558}' className="w-10 h-10 object-cover rounded-full ring-neutral-800 ring-1" id="t-avatar" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83a1ae5f-c842-4ee9-a912-505fc66a1ee0_320w.webp" style={{opacity: '1'}}/>
<div bis_size='{"x":1092,"y":3513,"w":168,"h":44,"abs_x":1092,"abs_y":3556}' className="">
<div bis_size='{"x":1092,"y":3513,"w":168,"h":24,"abs_x":1092,"abs_y":3556}' className="text-base font-semibold tracking-tight text-white" id="t-name" style={{opacity: '1'}}>
                Marcus Hill</div>
<div bis_size='{"x":1092,"y":3537,"w":168,"h":20,"abs_x":1092,"abs_y":3580}' className="text-sm text-neutral-400" id="t-role" style={{opacity: '1'}}>
                Operations Lead, Toronto</div>
</div>
</figcaption>
</figure>
</div>
</div>


</section>



</section>

<section bis_size='{"x":320,"y":3717,"w":1280,"h":448,"abs_x":320,"abs_y":3760}' className="sm:px-6 sm:mt-24 max-w-7xl mt-10 mr-auto mb-10 ml-auto pr-4 pl-4" id="contact">
<div bis_size='{"x":344,"y":3717,"w":1232,"h":448,"abs_x":344,"abs_y":3760}' className="overflow-hidden sm:p-8 text-white bg-neutral-950 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative">
<div bis_size='{"x":345,"y":3718,"w":1230,"h":446,"abs_x":345,"abs_y":3761}' className="absolute inset-0 pointer-events-none">
<div bis_size='{"x":345,"y":3718,"w":1230,"h":446,"abs_x":345,"abs_y":3761}' className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(255,255,255,0.07),transparent_60%)]"></div>
<div bis_size='{"x":345,"y":3718,"w":1230,"h":446,"abs_x":345,"abs_y":3761}' className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_120%,rgba(255,255,255,0.06),transparent_60%)]"></div>
<div bis_size='{"x":345,"y":3718,"w":1230,"h":446,"abs_x":345,"abs_y":3761}' className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15]"></div>
</div>
<div bis_size='{"x":377,"y":3750,"w":1166,"h":382,"abs_x":377,"abs_y":3793}' className="relative">
<h2 bis_size='{"x":377,"y":3750,"w":1166,"h":241,"abs_x":377,"abs_y":3793}' className="text-[14vw] sm:text-[10vw] lg:text-[7vw] leading-[0.9] font-semibold tracking-tight">
            Let’s build <span bis_size='{"x":377,"y":3849,"w":558,"h":162,"abs_x":377,"abs_y":3892}' className="text-white/70">together.</span>
</h2>
<div bis_size='{"x":377,"y":4023,"w":1166,"h":68,"abs_x":377,"abs_y":4066}' className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 md:divide-x md:divide-white/10">
<div bis_size='{"x":377,"y":4023,"w":367,"h":68,"abs_x":377,"abs_y":4066}' className="">
<p bis_size='{"x":377,"y":4023,"w":367,"h":20,"abs_x":377,"abs_y":4066}' className="text-sm text-white/70">Email</p>
<a bis_size='{"x":377,"y":4051,"w":256,"h":32,"abs_x":377,"abs_y":4094}' className="mt-2 inline-flex items-center gap-3 text-xl sm:text-2xl font-medium tracking-tight" href="mailto:hello@jordan.design">
<svg bis_size='{"x":377,"y":4057,"w":20,"h":20,"abs_x":377,"abs_y":4100}' className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span bis_size='{"x":409,"y":4051,"w":224,"h":32,"abs_x":409,"abs_y":4094}' className="break-all">hello@jordan.design</span>
</a>
</div>
<div bis_size='{"x":776,"y":4023,"w":367,"h":68,"abs_x":776,"abs_y":4066}' className="md:pl-8">
<p bis_size='{"x":809,"y":4023,"w":334,"h":20,"abs_x":809,"abs_y":4066}' className="text-sm text-white/70">Schedule</p>
<button bis_size='{"x":809,"y":4043,"w":120,"h":34,"abs_x":809,"abs_y":4086}' className="group relative inline-flex hover:shadow-[0_12px_20px_-6px_rgba(251,146,60,0.28)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-md pt-[1px] pr-[1px] pb-[1px] pl-[1px] shadow-[0_8px_16px_-4px_rgba(251,146,60,0.2)] items-center justify-center" style={{backgroundImage: 'linear-gradient(144deg,#FB923C, #EC4899 50%, #8B5CF6)'}} type="button">
<span bis_size='{"x":810,"y":4044,"w":118,"h":32,"abs_x":810,"abs_y":4087}' className="flex items-center justify-center gap-2 text-[14px] leading-none min-w-[80px] transition-colors duration-300 group-hover:bg-transparent font-medium bg-[#0b0f17] w-full h-full rounded-md pt-2 pr-4 pb-2 pl-4">
<svg bis_size='{"x":826,"y":4052,"w":16,"h":16,"abs_x":826,"abs_y":4095}' className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span bis_size='{"x":850,"y":4053,"w":62,"h":14,"abs_x":850,"abs_y":4096}' className="" style={{}}>Book Call</span>
</span>
</button>
</div>
<div bis_size='{"x":1175,"y":4023,"w":367,"h":68,"abs_x":1175,"abs_y":4066}' className="md:pl-8">
<p bis_size='{"x":1208,"y":4023,"w":334,"h":20,"abs_x":1208,"abs_y":4066}' className="text-sm text-white/70">Social</p>
<div bis_size='{"x":1208,"y":4051,"w":334,"h":40,"abs_x":1208,"abs_y":4094}' className="flex flex-wrap gap-3 mt-2">
<a bis_size='{"x":1208,"y":4051,"w":40,"h":40,"abs_x":1208,"abs_y":4094}' className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-900 border border-white/10 hover:bg-white/90" href="#">
<svg bis_size='{"x":1220,"y":4063,"w":16,"h":16,"abs_x":1220,"abs_y":4106}' className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a bis_size='{"x":1260,"y":4051,"w":40,"h":40,"abs_x":1260,"abs_y":4094}' className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-900 border border-white/10 hover:bg-white/90" href="#">
<svg bis_size='{"x":1272,"y":4063,"w":16,"h":16,"abs_x":1272,"abs_y":4106}' className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a bis_size='{"x":1312,"y":4051,"w":40,"h":40,"abs_x":1312,"abs_y":4094}' className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-900 border border-white/10 hover:bg-white/90" href="#">
<svg bis_size='{"x":1324,"y":4063,"w":16,"h":16,"abs_x":1324,"abs_y":4106}' className="lucide lucide-globe w-4 h-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</a>
<a bis_size='{"x":1364,"y":4051,"w":40,"h":40,"abs_x":1364,"abs_y":4094}' className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-900 border border-white/10 hover:bg-white/90" href="#">
<svg bis_size='{"x":1376,"y":4063,"w":16,"h":16,"abs_x":1376,"abs_y":4106}' className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>
<p bis_size='{"x":377,"y":4115,"w":1166,"h":16,"abs_x":377,"abs_y":4158}' className="mt-6 text-center text-[11px] text-white/60">© <span bis_size='{"x":824,"y":4117,"w":26,"h":13,"abs_x":824,"abs_y":4160}' className="" id="year">2025</span> Jordan Lee — Available for freelance &amp; contracts</p>
</div>
</div>
</section>

<footer bis_size='{"x":320,"y":4205,"w":1280,"h":762,"abs_x":320,"abs_y":4248}' className="max-w-7xl mx-auto pb-12">
<div bis_size='{"x":320,"y":4205,"w":1280,"h":666,"abs_x":320,"abs_y":4248}' className="lg:p-16 border-white/10 border rounded-3xl pt-12 pr-12 pb-12 pl-12 backdrop-blur-2xl">
<div bis_size='{"x":385,"y":4270,"w":1150,"h":241,"abs_x":385,"abs_y":4313}' className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
<div bis_size='{"x":385,"y":4270,"w":251,"h":241,"abs_x":385,"abs_y":4313}' className="lg:col-span-1">
<div bis_size='{"x":385,"y":4270,"w":251,"h":32,"abs_x":385,"abs_y":4313}' className="flex items-center mb-6">
<span bis_size='{"x":385,"y":4270,"w":32,"h":32,"abs_x":385,"abs_y":4313}' className="inline-flex items-center justify-center bg-amber-500 w-8 h-8 ring-white/10 ring-1 rounded-md mr-3">
<svg bis_size='{"x":393,"y":4278,"w":16,"h":16,"abs_x":393,"abs_y":4321}' className="lucide lucide-at-sign w-[16px] h-[16px] text-gray-950" data-icon-replaced="true" data-icon-set="lucide" data-lucide="at-sign" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"></path></svg>
</span>
<span bis_size='{"x":429,"y":4272,"w":123,"h":28,"abs_x":429,"abs_y":4315}' className="text-xl font-semibold text-white tracking-tight" style={{}}>Faisal Ahmed</span>
</div>
<p bis_size='{"x":385,"y":4326,"w":251,"h":113,"abs_x":385,"abs_y":4369}' className="text-sm text-white/60 leading-relaxed mb-8">
          Experiment, explore, and choose your next tool stack. We help designers discover the best modern tools through hands-on trials and expert curation.
        </p>
<div bis_size='{"x":385,"y":4472,"w":251,"h":40,"abs_x":385,"abs_y":4515}' className="flex items-center gap-4">
<a aria-label="Twitter" bis_size='{"x":385,"y":4472,"w":40,"h":40,"abs_x":385,"abs_y":4515}' className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 bg-white/[0.03]" href="#">
<svg bis_size='{"x":397,"y":4484,"w":16,"h":16,"abs_x":397,"abs_y":4527}' className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":398,"y":4486,"w":13,"h":11,"abs_x":398,"abs_y":4529}' className="" d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a aria-label="LinkedIn" bis_size='{"x":441,"y":4472,"w":40,"h":40,"abs_x":441,"abs_y":4515}' className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 bg-white/[0.03]" href="#">
<svg bis_size='{"x":453,"y":4484,"w":16,"h":16,"abs_x":453,"abs_y":4527}' className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":459,"y":4489,"w":8,"h":8,"abs_x":459,"abs_y":4532}' className="" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect bis_size='{"x":454,"y":4490,"w":2,"h":8,"abs_x":454,"abs_y":4533}' className="" height="12" width="4" x="2" y="9"></rect>
<circle bis_size='{"x":454,"y":4485,"w":2,"h":2,"abs_x":454,"abs_y":4528}' className="" cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a aria-label="GitHub" bis_size='{"x":497,"y":4472,"w":40,"h":40,"abs_x":497,"abs_y":4515}' className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 bg-white/[0.03]" href="#">
<svg bis_size='{"x":509,"y":4484,"w":16,"h":16,"abs_x":509,"abs_y":4527}' className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":511,"y":4485,"w":10,"h":13,"abs_x":511,"abs_y":4528}' className="" d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path bis_size='{"x":510,"y":4494,"w":4,"h":1,"abs_x":510,"abs_y":4537}' className="" d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
</div>
</div>
<div bis_size='{"x":684,"y":4270,"w":251,"h":241,"abs_x":684,"abs_y":4313}' className="">
<h4 bis_size='{"x":684,"y":4270,"w":251,"h":20,"abs_x":684,"abs_y":4313}' className="text-sm font-medium text-white mb-6 uppercase tracking-wide">Resources</h4>
<ul bis_size='{"x":684,"y":4314,"w":251,"h":144,"abs_x":684,"abs_y":4357}' className="space-y-4">
<li bis_size='{"x":684,"y":4314,"w":251,"h":24,"abs_x":684,"abs_y":4357}' className="">
<a bis_size='{"x":684,"y":4318,"w":74,"h":17,"abs_x":684,"abs_y":4361}' className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Design Kits</a>
</li>
<li bis_size='{"x":684,"y":4354,"w":251,"h":24,"abs_x":684,"abs_y":4397}' className="">
<a bis_size='{"x":684,"y":4358,"w":87,"h":17,"abs_x":684,"abs_y":4401}' className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">AI Workflows</a>
</li>
<li bis_size='{"x":684,"y":4394,"w":251,"h":24,"abs_x":684,"abs_y":4437}' className="">
<a bis_size='{"x":684,"y":4398,"w":56,"h":17,"abs_x":684,"abs_y":4441}' className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Tutorials</a>
</li>
<li bis_size='{"x":684,"y":4434,"w":251,"h":24,"abs_x":684,"abs_y":4477}' className="">
<a bis_size='{"x":684,"y":4438,"w":46,"h":17,"abs_x":684,"abs_y":4481}' className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Guides</a>
</li>
</ul>
</div>
<div bis_size='{"x":984,"y":4270,"w":251,"h":241,"abs_x":984,"abs_y":4313}' className="">
<h4 bis_size='{"x":984,"y":4270,"w":251,"h":20,"abs_x":984,"abs_y":4313}' className="text-sm font-medium text-white mb-6 uppercase tracking-wide">Content</h4>
<ul bis_size='{"x":984,"y":4314,"w":251,"h":144,"abs_x":984,"abs_y":4357}' className="space-y-4">
<li bis_size='{"x":984,"y":4314,"w":251,"h":24,"abs_x":984,"abs_y":4357}'>
<a bis_size='{"x":984,"y":4318,"w":50,"h":17,"abs_x":984,"abs_y":4361}' className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Articles</a>
</li>
<li bis_size='{"x":984,"y":4354,"w":251,"h":24,"abs_x":984,"abs_y":4397}' className="">
<a bis_size='{"x":984,"y":4358,"w":60,"h":17,"abs_x":984,"abs_y":4401}' className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Episodes</a>
</li>
<li bis_size='{"x":984,"y":4394,"w":251,"h":24,"abs_x":984,"abs_y":4437}' className="">
<a bis_size='{"x":984,"y":4398,"w":86,"h":17,"abs_x":984,"abs_y":4441}' className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Tool Reviews</a>
</li>
<li bis_size='{"x":984,"y":4434,"w":251,"h":24,"abs_x":984,"abs_y":4477}' className="">
<a bis_size='{"x":984,"y":4438,"w":86,"h":17,"abs_x":984,"abs_y":4481}' className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Case Studies</a>
</li>
</ul>
</div>
<div bis_size='{"x":1283,"y":4270,"w":251,"h":241,"abs_x":1283,"abs_y":4313}' className="">
<h4 bis_size='{"x":1283,"y":4270,"w":251,"h":20,"abs_x":1283,"abs_y":4313}' className="text-sm font-medium text-white mb-6 uppercase tracking-wide">Support</h4>
<ul bis_size='{"x":1283,"y":4314,"w":251,"h":144,"abs_x":1283,"abs_y":4357}' className="space-y-4">
<li bis_size='{"x":1283,"y":4314,"w":251,"h":24,"abs_x":1283,"abs_y":4357}' className="">
<a bis_size='{"x":1283,"y":4318,"w":79,"h":17,"abs_x":1283,"abs_y":4361}' className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Help Center</a>
</li>
<li bis_size='{"x":1283,"y":4354,"w":251,"h":24,"abs_x":1283,"abs_y":4397}' className="">
<a bis_size='{"x":1283,"y":4358,"w":73,"h":17,"abs_x":1283,"abs_y":4401}' className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Contact Us</a>
</li>
<li bis_size='{"x":1283,"y":4394,"w":251,"h":24,"abs_x":1283,"abs_y":4437}' className="">
<a bis_size='{"x":1283,"y":4398,"w":102,"h":17,"abs_x":1283,"abs_y":4441}' className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Bundle Support</a>
</li>
<li bis_size='{"x":1283,"y":4434,"w":251,"h":24,"abs_x":1283,"abs_y":4477}' className="">
<a bis_size='{"x":1283,"y":4438,"w":129,"h":17,"abs_x":1283,"abs_y":4481}' className="text-sm text-white/60 hover:text-white transition-colors duration-300" href="#">Terms &amp; Conditions</a>
</li>
</ul>
</div>
</div>
<div bis_size='{"x":385,"y":4576,"w":1150,"h":183,"abs_x":385,"abs_y":4619}' className="border-t border-white/10 pt-12 mb-12">
<div bis_size='{"x":624,"y":4625,"w":672,"h":134,"abs_x":624,"abs_y":4668}' className="max-w-2xl mx-auto text-center">
<h4 bis_size='{"x":624,"y":4625,"w":672,"h":28,"abs_x":624,"abs_y":4668}' className="text-lg font-medium text-white mb-4">Stay in the Loop</h4>
<p bis_size='{"x":624,"y":4669,"w":672,"h":20,"abs_x":624,"abs_y":4712}' className="text-sm text-white/60 mb-6">Get notified about new tool bundles, exclusive deals, and design workflow insights.</p>
<div bis_size='{"x":624,"y":4713,"w":672,"h":46,"abs_x":624,"abs_y":4756}' className="flex flex-col sm:flex-row gap-4 justify-center">
<input bis_size='{"x":662,"y":4713,"w":448,"h":46,"abs_x":662,"abs_y":4756}' className="flex-1 max-w-md px-4 py-3 rounded-xl text-sm text-white placeholder-white/40 border border-white/10 focus:border-fuchsia-500/30 focus:outline-none transition-all duration-300 bg-white/5" placeholder="Enter your email address" type="email"/>
<button bis_size='{"x":1126,"y":4713,"w":131,"h":46,"abs_x":1126,"abs_y":4756}' className="hover:bg-fuchsia-300 transition-all duration-300 text-sm font-medium text-neutral-900 bg-orange-500 rounded-xl px-8 py-3">Subscribe</button>
</div>
</div>
</div>
</div>
<div bis_size='{"x":320,"y":4872,"w":1280,"h":48,"abs_x":320,"abs_y":4915}' className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div bis_size='{"x":320,"y":4904,"w":463,"h":16,"abs_x":320,"abs_y":4947}' className="flex flex-wrap items-center gap-6 text-xs text-white/40">
<span bis_size='{"x":320,"y":4904,"w":239,"h":16,"abs_x":320,"abs_y":4947}'>© 2024 StackFoundry. All rights reserved.</span>
<a bis_size='{"x":583,"y":4904,"w":79,"h":16,"abs_x":583,"abs_y":4947}' className="hover:text-white/60 transition-colors duration-300" href="#">Privacy Policy</a>
<a bis_size='{"x":686,"y":4904,"w":96,"h":16,"abs_x":686,"abs_y":4947}' className="hover:text-white/60 transition-colors duration-300" href="#">Terms of Service</a>
</div>
<div bis_size='{"x":1365,"y":4904,"w":234,"h":16,"abs_x":1365,"abs_y":4947}' className="flex items-center gap-4 text-xs text-white/40">
<span bis_size='{"x":1365,"y":4904,"w":103,"h":16,"abs_x":1365,"abs_y":4947}' className="flex items-center gap-2">
        Bundle Limited
        <svg bis_size='{"x":1457,"y":4906,"w":12,"h":12,"abs_x":1457,"abs_y":4949}' className="text-fuchsia-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<circle bis_size='{"x":1458,"y":4907,"w":10,"h":10,"abs_x":1458,"abs_y":4950}' className="" cx="12" cy="12" r="10"></circle>
<path bis_size='{"x":1461,"y":4911,"w":3,"h":2,"abs_x":1461,"abs_y":4954}' className="" d="m9 12 2 2 4-4"></path>
</svg>
</span>
<span bis_size='{"x":1485,"y":4904,"w":114,"h":16,"abs_x":1485,"abs_y":4947}' className="flex items-center gap-2">
        Trusted Partners
        <svg bis_size='{"x":1588,"y":4906,"w":12,"h":12,"abs_x":1588,"abs_y":4949}' className="text-emerald-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":1590,"y":4907,"w":8,"h":10,"abs_x":1590,"abs_y":4950}' className="" d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path bis_size='{"x":1592,"y":4911,"w":3,"h":2,"abs_x":1592,"abs_y":4954}' className="" d="m9 12 2 2 4-4"></path>
</svg>
</span>
</div>
</div>
</footer>
</main>


    </>
  );
}
