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



document.documentElement.classList.add('dark'); // no-op if already present



tailwind = { config: { darkMode: 'class' } };



(function () {
const style = document.createElement("style");
style.textContent = ".animate-on-scroll{animation-play-state:paused!important}.animate-on-scroll.animate{animation-play-state:running!important}";
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries)=>{
entries.forEach((e)=>{ if(e.isIntersecting){ e.target.classList.add("animate"); if(once) window.__inViewIO.unobserve(e.target); }});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = (sel=".animate-on-scroll") => {
document.querySelectorAll(sel).forEach(el => window.__inViewIO.observe(el));
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head||document.body).appendChild(i)}}();
    


    (function () {
      const el = document.getElementById('nexa-earnings');
      if (!el) return;

      if (window.Chart) {
        const existing = Chart.getChart(el);
        if (existing) existing.destroy();
      }

      const ctx = el.getContext('2d');
      const gradient = ctx.createLinearGradient(0, 0, 0, el.height || 240);
      gradient.addColorStop(0, 'rgba(16, 185, 129, 0.45)');
      gradient.addColorStop(1, 'rgba(16, 185, 129, 0.06)');

      const grid = 'rgba(255,255,255,0.06)';
      const label = 'rgba(255,255,255,0.65)';

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
          datasets: [{
            label: 'Net inflow',
            data: [8, 19, 14, 27, 35, 22, 18],
            backgroundColor: gradient,
            borderColor: '#10b981',
            borderWidth: 1,
            borderRadius: 8,
            barPercentage: 0.6,
            categoryPercentage: 0.7
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(17,24,39,0.95)',
              titleColor: '#fff',
              bodyColor: '#e5e7eb',
              displayColors: false,
              padding: 10
            }
          },
          scales: {
            x: { grid: { color: grid, drawBorder: false }, ticks: { color: label, font: { size: 11 } } },
            y: { grid: { color: grid, drawBorder: false }, ticks: { color: label, callback: v => '$' + v + 'k', maxTicksLimit: 5 } }
          }
        }
      });
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
  


            (function () {
            if (!window.Chart) return;
            const canvas = document.getElementById('radarChart');
            if (!canvas) return;

            // Destroy existing chart on this canvas if any
            const existing = Chart.getChart(canvas);
            if (existing) existing.destroy();

            const ctx = canvas.getContext('2d');
            const container = canvas.parentElement;
            const height = (container && container.clientHeight) ? container.clientHeight : 256;

            // Local colors
            const gridColor = 'rgba(255,255,255,0.08)';
            const labelColor = 'rgba(255,255,255,0.7)';

            // Green gradients that fit container height
            const gradientIncome = ctx.createLinearGradient(0, 0, 0, height);
            gradientIncome.addColorStop(0, 'rgba(16, 185, 129, 0.35)');  // emerald-500
            gradientIncome.addColorStop(1, 'rgba(16, 185, 129, 0.05)');

            const gradientOutcome = ctx.createLinearGradient(0, 0, 0, height);
            outcomeTop = 'rgba(163, 230, 53, 0.35)'; // lime-400
            gradientOutcome.addColorStop(0, outcomeTop);
            gradientOutcome.addColorStop(1, 'rgba(163, 230, 53, 0.05)');

            new Chart(ctx, {
              type: 'radar',
              data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                  {
                    label: 'Income',
                    data: [65, 45, 60, 30, 40, 55],
                    borderColor: 'rgba(16, 185, 129, 1)',
                    backgroundColor: gradientIncome,
                    pointBackgroundColor: 'rgba(16, 185, 129, 1)',
                    pointBorderColor: '#0b1020',
                    pointRadius: 3,
                    tension: 0.3
                  },
                  {
                    label: 'Expenses',
                    data: [50, 55, 70, 20, 35, 65],
                    borderColor: 'rgba(163, 230, 53, 1)',
                    backgroundColor: gradientOutcome,
                    pointBackgroundColor: 'rgba(163, 230, 53, 1)',
                    pointBorderColor: '#0b1020',
                    pointRadius: 3,
                    tension: 0.3
                  }
                ]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: false },
                  tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    borderColor: 'rgba(255,255,255,0.1)',
                    borderWidth: 1,
                    padding: 10,
                    titleColor: '#fff',
                    bodyColor: 'rgba(255,255,255,0.9)',
                    titleFont: { family: 'Inter', size: 12, weight: '600' },
                    bodyFont: { family: 'Inter', size: 12, weight: '500' }
                  }
                },
                scales: {
                  r: {
                    angleLines: { color: gridColor },
                    grid: { color: gridColor },
                    pointLabels: { color: labelColor, font: { family: 'Inter', size: 11 } },
                    ticks: { display: false, beginAtZero: true, max: 80 }
                  }
                }
              }
            });
          })();
          


          (function () {
          function init() {
            // Donut
            var donut = document.getElementById('aura-hero-donut');
            if (donut && window.Chart) {
              var existing = Chart.getChart(donut);
              if (existing) existing.destroy();
              new Chart(donut.getContext('2d'), {
                type: 'doughnut',
                data: {
                  labels: ['Funded', 'Over Budget', 'On Hold'],
                  datasets: [{
                    data: [2500, 1200, 498],
                    backgroundColor: ['#10b981', '#84cc16', '#283046'], /* emerald-500, lime-500 */
                    hoverBackgroundColor: ['#10b981', '#84cc16', '#283046'],
                    borderWidth: 0,
                    spacing: 3,
                    borderRadius: 8
                  }]
                },
                options: {
                  responsive: true,
                  maintainAspectRatio: false,
                  cutout: '72%',
                  rotation: -90 * (Math.PI / 180),
                  plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false }
                  }
                }
              });
            }

            // Bars
            var bars = document.getElementById('aura-hero-bars');
            if (bars && window.Chart) {
              var existingB = Chart.getChart(bars);
              if (existingB) existingB.destroy();
              new Chart(bars.getContext('2d'), {
                type: 'bar',
                data: {
                  labels: ['M','T','W','T','F','S','S'],
                  datasets: [
                    { label: 'This Week', data: [22, 60, 28, 48, 46, 52, 72], backgroundColor: '#10b981', borderRadius: 8, barPercentage: 0.55, categoryPercentage: 0.7 },
                    { label: 'Last Week', data: [14, 36, 24, 60, 40, 44, 46], backgroundColor: '#86efac', borderRadius: 8, barPercentage: 0.55, categoryPercentage: 0.7 }
                  ]
                },
                options: {
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: { legend: { display: false }, tooltip: { enabled: false } },
                  scales: {
                    x: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: 'rgba(255,255,255,0.75)', font: { size: 10 } } },
                    y: { min: 0, max: 80, grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: 'rgba(255,255,255,0.60)', font: { size: 10 } } }
                  }
                }
              });
            }
          }
          if (!window.Chart) {
            var s = document.createElement('script');
            s.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js';
            s.onload = init;
            document.head.appendChild(s);
          } else {
            init();
          }
        })();
        


    (function () {
      function makeCharts() {
        // Donut
        var donut = document.getElementById('aura-hero-donut');
        if (donut && window.Chart) {
          var ctx = donut.getContext('2d');
          new Chart(ctx, {
            type: 'doughnut',
            data: {
              labels: ['Paid', 'Overdue', 'Pending'],
              datasets: [{
                data: [2500, 1200, 498],
                backgroundColor: ['#8b5cf6', 'rgba(196,181,253,0.55)', 'rgba(30,41,59,0.85)'],
                borderWidth: 0,
                hoverOffset: 2
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              cutout: '68%',
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
              }
            }
          });
        }

        // Bars
        var bars = document.getElementById('aura-hero-bars');
        if (bars && window.Chart) {
          new Chart(bars, {
            type: 'bar',
            data: {
              labels: ['M','T','W','T','F','S','S'],
              datasets: [
                { data: [28,56,38,64,48,52,72], backgroundColor: '#8b5cf6', borderRadius: 8, barPercentage: 0.55, categoryPercentage: 0.7 },
                { data: [18,36,28,42,36,40,58], backgroundColor: '#6b7280', borderRadius: 8, barPercentage: 0.55, categoryPercentage: 0.7 }
              ]
            },
            options: {
              plugins: { legend: { display: false }, tooltip: { enabled: false } },
              scales: {
                x: { grid: { color: 'rgba(255,255,255,0.08)' }, ticks: { color: 'rgba(255,255,255,0.6)', font: { size: 10 } } },
                y: { grid: { color: 'rgba(255,255,255,0.08)' }, ticks: { display: false } }
              },
              responsive: true,
              maintainAspectRatio: false
            }
          });
        }
      }

      if (!window.Chart) {
        var s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js';
        s.onload = makeCharts;
        document.head.appendChild(s);
      } else {
        makeCharts();
      }
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
  


    (function () {
      const tabs = document.querySelectorAll('.billing-tab');
      const prices = document.querySelectorAll('.price');
      const units = document.querySelectorAll('.price-unit');
      const notes = document.querySelectorAll('.billing-note');

      function setBilling(mode) {
        tabs.forEach(btn => {
          const active = btn.dataset.billing === mode;
          btn.setAttribute('aria-pressed', active ? 'true' : 'false');
          btn.classList.toggle('bg-white/10', active);
          btn.classList.toggle('ring-1', active);
          btn.classList.toggle('ring-white/15', active);
          btn.classList.toggle('text-white/90', active);
          btn.classList.toggle('text-neutral-300', !active);
        });

        prices.forEach(el => el.textContent = el.dataset[mode]);
        units.forEach(el => el.textContent = el.dataset[mode]);
        notes.forEach(el => el.classList.toggle('hidden', mode !== 'annual'));
      }

      tabs.forEach(btn => btn.addEventListener('click', () => setBilling(btn.dataset.billing)));
      setBilling('monthly'); // default
    })();
  


  if (window.lucide) window.lucide.createIcons();
  
  document.getElementById('mobile-nav-toggle')?.addEventListener('click', () => {
    alert('Mobile menu would open here');
  });

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
      

<div className="aura-background-component absolute top-0 w-full h-screen -z-10 saturate-200" data-alpha-mask="22" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 22%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 22%, transparent)'}}>
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="0GgYfjJbH7HPIFyF1fSt"></div>

</div>

<header className="sticky supports-[backdrop-filter]:bg-neutral-950/60 border-neutral-800 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] z-50 border-b top-0 backdrop-blur">
<div className="mx-auto max-w-7xl px-6 sm:px-8">
<div className="h-16 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<span className="sm:text-lg text-base font-semibold tracking-tight font-geist">Moneo</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-400 hover:text-white transition-colors font-geist" href="#features">Features</a>
<a className="text-sm text-neutral-400 font-geist" href="#how-it-works">How
          It Works</a>
<a className="text-sm dark:text-neutral-400 dark:hover:text-white transition-colors font-geist" href="#pricing">Pricing</a>
<a className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-tight transition font-geist bg-emerald-600 text-white hover:bg-emerald-700" href="#">
          Get Started
          <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</nav>
<button className="md:hidden inline-flex items-center justify-center rounded-lg border border-neutral-800 w-10 h-10" id="mobile-nav-toggle">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</header>

<main className="sm:px-8 sm:mt-24 max-w-7xl mt-16 mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 gap-x-10 gap-y-10 items-center">

<div className="lg:col-span-5">
<h1 className="text-[clamp(2rem,6vw,4rem)] leading-[0.95] text-white [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] font-light tracking-tight font-geist">
        Take control of your finances</h1>
<p className="text-neutral-400 leading-8 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] text-lg font-geist mt-6">Moneo helps you track spending, set
        savings
        goals, and make smarter financial decisions with real-time insights and personalized recommendations.</p>
<form action="#" className="[animation:fadeSlideIn_0.8s_ease-out_0.4s_both] w-full max-w-2xl">
<label className="sr-only font-geist" htmlFor="moneo-email">Work email</label>
<div className="group flex flex-row ring-1 rounded-full p-2 relative shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl gap-3 items-center mt-6 bg-white/5 ring-white/15">
<span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full blur-md opacity-30 bg-white/5"></span>
<input autocomplete="email" className="flex-1 placeholder:text-white/60 outline-none text-base tracking-tight bg-transparent py-3 px-4 relative z-10 text-white/90" id="moneo-email" inputmode="email" placeholder="What's your work email?" required="" type="email"/>

<a className="hidden md:inline-flex items-center justify-center gap-2 select-none ring-1 rounded-full px-6 py-3 backdrop-blur-xl transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.4)] group relative overflow-hidden shrink-0 text-white/90 bg-white/5 hover:bg-white/10 ring-white/20 hover:ring-cyan-400/40" href="#" style={{boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.18), inset 0 -10px 25px rgba(0, 0, 0, 0.3), 0 8px 25px rgba(0,0,0,0.35)'}}>

<span aria-hidden="true" className="absolute inset-px rounded-full bg-gradient-to-b from-white/[0.18] via-white/[0.08] to-white/[0.05] pointer-events-none"></span>

<span aria-hidden="true" className="absolute left-1 right-1 top-1 h-1/2 rounded-full bg-gradient-to-b to-transparent pointer-events-none from-white/70"></span>

<span aria-hidden="true" className="absolute inset-0 rounded-full ring-2 group-hover:ring-cyan-400/40 blur-sm transition-all duration-500 ring-cyan-400/0"></span>

<span className="relative z-10 text-sm font-medium tracking-tight font-geist">Get Started</span>

<svg className="relative z-10 w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>

<a className="md:hidden relative inline-flex items-center justify-center select-none ring-1 rounded-full w-12 h-12 backdrop-blur-xl transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.4)] group overflow-hidden shrink-0 text-white/90 bg-white/5 hover:bg-white/10 ring-white/20 hover:ring-cyan-400/40" href="#" style={{boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.18), inset 0 -10px 25px rgba(0, 0, 0, 0.3), 0 8px 25px rgba(0,0,0,0.35)'}}>

<span aria-hidden="true" className="absolute inset-px rounded-full bg-gradient-to-b from-white/[0.18] via-white/[0.08] to-white/[0.05] pointer-events-none"></span>

<span aria-hidden="true" className="absolute left-1 right-1 top-1 h-1/2 rounded-full bg-gradient-to-b to-transparent pointer-events-none from-white/70"></span>

<span aria-hidden="true" className="absolute inset-0 rounded-full ring-2 group-hover:ring-cyan-400/40 blur-sm transition-all duration-500 ring-cyan-400/0"></span>

<svg className="relative z-10 w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</form>
<div className="flex [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] mt-10 gap-x-8 gap-y-8 items-center" style={{}}>
<div className="gap-x-8 gap-y-8">
<div className="text-2xl font-light text-white tracking-tight font-geist">50K+</div>
<div className="text-sm dark:text-neutral-400 font-geist text-neutral-600">Active users</div>
</div>
<div className="w-px bg-neutral-800 h-12"></div>
<div className="">
<div className="text-2xl font-light text-white tracking-tight font-geist">$2.4M</div>
<div className="text-sm dark:text-neutral-400 font-geist text-neutral-600">Money saved</div>
</div><div className="w-px bg-neutral-800 h-12"></div>
<div className="">
<div className="text-2xl font-light text-white tracking-tight font-geist">4.8★</div>
<div className="text-sm dark:text-neutral-400 font-geist text-neutral-600">User rating</div>
</div>
</div>
</div>

<div className="lg:col-span-7 grid [grid-template-areas:'stack'] place-items-center [animation:fadeSlideIn_0.8s_ease-out_0.6s_both] opacity-100">

<div className="relative w-[28rem] h-52 rounded-3xl transition-all duration-700 [grid-area:stack] hover:-translate-y-10 select-none backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]" style={{background: 'linear-gradient(135deg, rgba(16,185,129,0.45) 0%, rgba(5,150,105,0.35) 100%)'}}>
<div className="absolute inset-0 rounded-3xl ring-1 pointer-events-none ring-white/30"></div>
<div className="absolute inset-0 rounded-3xl pointer-events-none" style={{background: 'radial-gradient(80% 90% at 30% 20%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.08) 50%, transparent 80%)'}}>
</div>
<div className="relative h-full flex flex-col justify-between p-7">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="text-base font-semibold tracking-tight font-geist text-white/95">Moneo Card</span>
</div>
<svg className="opacity-80" height="24" viewbox="0 0 28 18" width="38">
<circle cx="10" cy="9" fill="rgba(255,255,255,0.5)" r="7"></circle>
<circle className="" cx="18" cy="9" fill="rgba(255,255,255,0.3)" r="7"></circle>
</svg>
</div>
<div className="">
<div className="text-2xl mb-5 font-geist font-light tracking-tight text-white" style={{}}>
              4521 •••• •••• 8934
            </div>
<div className="flex items-end justify-between">
<div className="">
<div className="text-[11px] uppercase tracking-wider font-geist text-white/60">Card Holder</div>
<div className="text-base font-medium font-geist text-white/95">Alex Rivera</div>
</div>
<div className="text-right">
<div className="text-[11px] uppercase tracking-wider font-geist text-white/60">Expires</div>
<div className="text-base font-medium font-geist text-white/95">12/28</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-[28rem] h-52 rounded-3xl transition-all duration-700 [grid-area:stack] translate-x-20 translate-y-12 hover:-translate-y-1 select-none backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]" style={{background: 'linear-gradient(135deg, rgba(34,211,238,0.45) 0%, rgba(6,182,212,0.35) 100%)'}}>
<div className="absolute inset-0 rounded-3xl ring-1 pointer-events-none ring-white/30"></div>
<div className="absolute inset-0 rounded-3xl pointer-events-none" style={{background: 'radial-gradient(85% 95% at 50% 30%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.06) 60%, transparent 85%)'}}>
</div>
<div className="relative h-full flex flex-col justify-between p-7">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="text-base font-semibold tracking-tight font-geist text-white/95">Moneo Pro</span>
</div>
<svg className="opacity-80" height="24" viewbox="0 0 28 18" width="38">
<circle cx="10" cy="9" fill="rgba(255,255,255,0.5)" r="7"></circle>
<circle cx="18" cy="9" fill="rgba(255,255,255,0.3)" r="7"></circle>
</svg>
</div>
<div className="">
<div className="text-2xl mb-5 font-geist font-light tracking-tight text-white" style={{}}>
              5249 •••• •••• 2761
            </div>
<div className="flex items-end justify-between">
<div className="">
<div className="text-[11px] uppercase tracking-wider font-geist text-white/60">Card Holder</div>
<div className="text-base font-medium font-geist text-white/95">Jordan Lee</div>
</div>
<div className="text-right">
<div className="text-[11px] uppercase tracking-wider font-geist text-white/60">Expires</div>
<div className="text-base font-medium font-geist text-white/95">08/29</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-[28rem] h-52 rounded-3xl transition-all duration-700 [grid-area:stack] translate-x-40 translate-y-24 hover:translate-y-12 select-none backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]" style={{background: 'linear-gradient(135deg, rgba(163,230,53,0.45) 0%, rgba(132,204,22,0.35) 100%)'}}>
<div className="absolute inset-0 rounded-3xl ring-1 pointer-events-none ring-white/30"></div>
<div className="absolute inset-0 rounded-3xl pointer-events-none" style={{background: 'radial-gradient(90% 100% at 70% 25%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.08) 55%, transparent 80%)'}}>
</div>
<div className="relative h-full flex flex-col justify-between p-7">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="text-base font-semibold tracking-tight font-geist text-white/95">Moneo Plus</span>
</div>
<svg className="opacity-80" height="24" viewbox="0 0 28 18" width="38">
<circle cx="10" cy="9" fill="rgba(255,255,255,0.5)" r="7"></circle>
<circle cx="18" cy="9" fill="rgba(255,255,255,0.3)" r="7"></circle>
</svg>
</div>
<div className="">
<div className="text-2xl mb-5 font-geist font-light tracking-tight text-white" style={{}}>
              6019 •••• •••• 4582
            </div>
<div className="flex items-end justify-between">
<div className="">
<div className="text-[11px] uppercase tracking-wider font-geist text-white/60">Card Holder</div>
<div className="text-base font-medium font-geist text-white/95">Taylor Chen</div>
</div>
<div className="text-right">
<div className="text-[11px] uppercase tracking-wider font-geist text-white/60">Expires</div>
<div className="text-base font-medium font-geist text-white/95">03/27</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="sm:px-8 sm:mt-32 [animation:fadeSlideIn_0.8s_ease-out_0.7s_both] max-w-7xl mt-32 mr-auto ml-auto px-4">
<div className="relative">
<div className="sm:p-6 border rounded-2xl ring-1 pt-4 pr-4 pb-4 pl-4 backdrop-blur-md bg-neutral-950/80 border-white/10 ring-white/5" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 0%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 0%, transparent)'}}>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<aside className="lg:col-span-3">
<div className="h-full rounded-xl border p-4 sm:p-5 ring-1 border-white/10 bg-neutral-900/90 ring-white/5">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight font-geist text-white">
<span className="text-sm font-semibold tracking-tight font-geist text-white">Moneo</span>
</div>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><path d="M2 10h20"></path></svg>
</span>
</div>
<div className="mt-5">
<div className="relative">
<svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m21 21-4.3-4.3"></path>
<circle cx="11" cy="11" r="8"></circle>
</svg>
<input className="w-full rounded-xl ring-1 pl-9 pr-3 py-2.5 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 bg-neutral-800/50 ring-white/10 text-white" placeholder="Search anything…"/>
</div>
</div>
<div className="mt-6">
<p className="text-xs text-neutral-500 mb-3 uppercase tracking-wide font-geist">Navigation</p>
<nav className="space-y-3">
<a className="flex items-center justify-between rounded-xl bg-white/[0.06] ring-1 px-3 py-3 text-sm ring-white/10 text-white" href="#">
<span className="inline-flex items-center gap-3 font-geist">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/10 ring-white/10">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</span>
                  Overview
                  </span>
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
</a>
<a className="flex items-center gap-3 rounded-xl ring-1 px-3 py-3 text-sm transition-colors font-geist hover:bg-white/5 ring-white/10 text-neutral-300" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 8a6 6 0 0 1-12 0"></path><path d="M6 8V5a6 6 0 1 1 12 0v3"></path><path d="M12 19h.01"></path></svg>
</span>
                  Notifications
                </a>
<a className="flex items-center gap-3 rounded-xl ring-1 px-3 py-3 text-sm transition-colors font-geist hover:bg-white/5 ring-white/10 text-neutral-300" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12A9 9 0 1 1 12 3"></path><path d="M3.6 15h10.8"></path><path d="M3.6 11H21"></path></svg>
</span>
                  AI Insights
                </a>
<a className="flex items-center gap-3 rounded-xl ring-1 px-3 py-3 text-sm transition-colors font-geist hover:bg-white/5 ring-white/10 text-neutral-300" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6H6"></path><path d="M6 12h12"></path><path d="M6 18h12"></path></svg>
</span>
                  Activity
                </a>
<a className="flex items-center gap-3 rounded-xl ring-1 px-3 py-3 text-sm transition-colors font-geist hover:bg-white/5 ring-white/10 text-neutral-300" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><path d="M2 10h20"></path></svg>
</span>
                  Cards
                </a>
</nav>
</div>
<div className="mt-8">
<p className="text-xs text-neutral-500 mb-3 uppercase tracking-wide font-geist">AI Assistant</p>
<div className="rounded-xl bg-white/[0.06] ring-1 p-3 flex items-center gap-3 ring-white/10">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 ring-1 text-emerald-300 ring-emerald-400/30">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><path d="M3 12h18"></path></svg>
</span>
<div className="text-sm">
<p className="tracking-tight font-medium font-geist text-white">Smart Budget</p>
<p className="text-xs font-geist text-neutral-400">AI-powered tracking</p>
</div>
</div>
</div>
</div>
</aside>

<main className="lg:col-span-9 space-y-6">

<div className="flex items-center justify-between overflow-x-auto">
<div className="flex gap-2 flex-nowrap pb-2 pr-3">
<button className="px-4 py-2 rounded-full bg-emerald-500/15 text-sm ring-1 tracking-tight font-geist whitespace-nowrap text-emerald-300 ring-emerald-400/30">Overview</button>
<button className="px-4 py-2 rounded-full text-sm ring-1 tracking-tight font-geist whitespace-nowrap hover:bg-white/5 text-neutral-300 ring-white/10">Wallet</button>
<button className="px-4 py-2 rounded-full text-sm ring-1 tracking-tight font-geist whitespace-nowrap hover:bg-white/5 text-neutral-300 ring-white/10">Transfers</button>
<button className="px-4 py-2 rounded-full text-sm ring-1 tracking-tight font-geist whitespace-nowrap hover:bg-white/5 text-neutral-300 ring-white/10">Reports</button>
<button className="px-4 py-2 rounded-full text-sm ring-1 tracking-tight font-geist whitespace-nowrap hover:bg-white/5 text-neutral-300 ring-white/10">Team</button>
<button className="px-4 py-2 rounded-full text-sm ring-1 tracking-tight font-geist whitespace-nowrap hover:bg-white/5 text-neutral-300 ring-white/10">Settings</button>
</div>
<div className="flex gap-3 items-center shrink-0 ml-3">
<img alt="User" className="w-9 h-9 object-cover ring-1 rounded-full ring-white/15" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f70140f-4f5d-4ce1-bec2-b36510d07e52_320w.webp"/>
</div>
</div>

<div className="grid grid-cols-1 gap-6 items-stretch lg:[grid-template-columns:minmax(0,_420px)_minmax(0,_1fr)]">

<div className="flex flex-col w-full h-full max-w-lg rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
<div className="flex items-start justify-between">
<div className="">
<div className="flex items-baseline gap-2">
<p className="text-3xl font-geist font-light tracking-tight text-white" style={{}}>$742,560</p>
<span className="text-xs rounded-full px-2 py-0.5 font-medium font-geist text-neutral-900 bg-emerald-400">+2.1%</span>
</div>
<p className="mt-1 text-xs font-geist text-neutral-400">Net inflow · last 7 days</p>
</div>
</div>
<div className="mt-6 grow">
<div className="relative h-48 sm:h-56 md:h-64">
<canvas className="w-full h-full" height="512" id="nexa-earnings" style={{display: 'block', boxSizing: 'border-box', height: '256px', width: '378px'}} width="756"></canvas>
</div>
</div>
</div>

<div className="h-full flex flex-col w-full rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
<div className="rounded-2xl p-5 ring-1 ring-white/10" style={{background: 'radial-gradient(120% 120% at 20% 0%, rgba(240, 240, 240, 0.12) 0%, rgba(163, 163, 163, 0.06) 35%, rgba(20, 20, 20, 0.45) 70%), linear-gradient(135deg, rgba(115, 115, 115, 0.15), rgba(163, 163, 163, 0.08))', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)'}}>
<div className="flex items-center justify-between">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><path d="M2 10h20"></path></svg>
</span>
<svg className="w-5 h-5 text-neutral-300/80" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 11V7a2 2 0 0 1 2-2h12"></path>
<path d="M20 13v4a2 2 0 0 1-2 2H6"></path>
<path d="M15 7h.01"></path>
</svg>
</div>
<div className="mt-6">
<div className="inline-flex items-center gap-2 text-white/90">
<svg className="w-5 h-5 text-neutral-200" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<path d="M2 12a10 10 0 0 1 20 0"></path>
</svg>
<p className="text-lg sm:text-xl font-semibold tracking-tight font-geist text-white">5312 9087 4421 1160</p>
</div>
<div className="mt-6 grid grid-cols-2 gap-4 text-white/90">
<div>
<p className="text-[11px] font-geist text-neutral-400">Valid Thru</p>
<p className="text-sm tracking-tight font-geist">09/30</p>
</div>
<div className="text-right">
<p className="text-[11px] font-geist text-neutral-400">CVC</p>
<p className="text-sm tracking-tight font-geist">• • • •</p>
</div>
</div>
</div>
</div>
<div className="mt-5 grid grid-cols-4 gap-3">
<div className="flex flex-col items-center gap-2">
<span className="h-12 w-12 inline-flex items-center justify-center rounded-xl bg-emerald-500/15 ring-1 ring-emerald-400/30">
<svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7 10 5 5 5-5"></path></svg>
</span>
<span className="text-xs font-geist text-neutral-400">Pay</span>
</div>
<div className="flex flex-col items-center gap-2">
<span className="h-12 w-12 inline-flex items-center justify-center rounded-xl ring-1 bg-white/5 ring-white/10">
<svg className="w-5 h-5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m17 14-5-5-5 5"></path></svg>
</span>
<span className="text-xs font-geist text-neutral-400">Request</span>
</div>
<div className="flex flex-col items-center gap-2">
<span className="h-12 w-12 inline-flex items-center justify-center rounded-xl ring-1 bg-white/5 ring-white/10">
<svg className="w-5 h-5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="12" rx="2" width="18" x="3" y="8"></rect></svg>
</span>
<span className="text-xs font-geist text-neutral-400">Invoice</span>
</div>
<div className="flex flex-col items-center gap-2">
<span className="h-12 w-12 inline-flex items-center justify-center rounded-xl ring-1 bg-white/5 ring-white/10">
<svg className="w-5 h-5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</span>
<span className="text-xs font-geist text-neutral-400">Tools</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
<div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
<div className="flex items-center justify-between">
<p className="text-sm font-geist text-neutral-400">Revenue</p>
</div>
<div className="mt-3 flex items-baseline class= font-geist" font-semibold="" sm:text-xl="" text-3xl="" text-white="" tracking-tight"="">$31,240.12<p className="text-3xl sm:text-xl font-semibold tracking-tight font-geist text-white"></p>
<span className="text-xs rounded-full px-2 py-0.5 font-medium font-geist text-neutral-900 bg-emerald-400">+4.2%</span>
</div>
<p className="mt-1 text-xs text-neutral-500 font-geist">vs. previous week</p>
</div>
<div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
<div className="flex items-center justify-between">
<p className="text-sm font-geist text-neutral-400">Operating Costs</p>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M18 6 6 18"></path></svg>
</span>
</div>
<div className="mt-3 flex items-baseline gap-2">
<p className="text-3xl sm:text-xl font-semibold tracking-tight font-geist text-white">$4,860.00</p>
<span className="text-xs rounded-full px-2 py-0.5 font-medium font-geist text-neutral-900 bg-emerald-400">-1.3%</span>
</div>
<p className="mt-1 text-xs text-neutral-500 font-geist">vs. previous week</p>
</div>
<div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
<div className="flex items-center justify-between">
<p className="text-sm font-geist text-neutral-400">Burn Rate</p>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
</span>
</div>
<div className="mt-3 flex items-baseline gap-2">
<p className="text-3xl sm:text-xl font-semibold tracking-tight font-geist text-white">$2,140.00</p>
<span className="text-xs rounded-full px-2 py-0.5 font-medium font-geist text-neutral-900 bg-emerald-400">-0.9%</span>
</div>
<p className="mt-1 text-xs text-neutral-500 font-geist">rolling 30 days</p>
</div>
<div className="rounded-2xl ring-1 p-5 border bg-neutral-900/95 ring-white/10 border-white/10">
<div className="flex items-center justify-between">
<p className="text-sm font-geist text-neutral-400">Cash Reserve</p>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><path d="M2 10h20"></path></svg>
</span>
</div>
<div className="mt-3 flex items-baseline gap-2">
<p className="text-3xl sm:text-xl font-semibold tracking-tight font-geist text-white">$3,980.55</p>
<span className="text-xs rounded-full px-2 py-0.5 font-medium font-geist text-neutral-900 bg-emerald-400">+1.7%</span>
</div>
<p className="mt-1 text-xs text-neutral-500 font-geist">month to date</p>
</div>
</div>
</main>
</div>
</div>
</div>



</section>

<section className="sm:px-8 sm:mt-32 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mt-32 mr-auto ml-auto pr-6 pl-6 animate">
<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 bg-gradient-to-br from-gray-500/10 via-gray-500/0 to-gray-500/10 rounded-3xl pt-8 pr-8 pb-8 pl-8 gap-x-y-12 gap-y-12 items-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '24px'}}>

<div className="lg:col-span-6">
<span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-300 tracking-tight font-geist bg-emerald-600/10 rounded-full ring-emerald-500/30 ring-1 pt-1.5 pr-4 pb-1.5 pl-4">SMART AI FEATURE</span>
<h2 className="sm:text-5xl lg:text-6xl text-4xl font-light text-white tracking-tight font-geist mt-6">Meet Your AI Budget Assistant</h2>
<p className="mt-6 text-lg leading-8 font-geist text-neutral-300">
        Plan smarter with predictive AI that tracks your spending, forecasts savings, and helps you make better
        financial decisions effortlessly.
      </p>
<ul className="mt-6 space-y-4">
<li className="flex items-center gap-3 text-base sm:text-lg font-geist text-neutral-300">
<svg className="shrink-0 text-emerald-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
          Predict Monthly Expenses
        </li>
<li className="flex items-center gap-3 text-base sm:text-lg font-geist text-neutral-300">
<svg className="shrink-0 text-emerald-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M20 6 9 17l-5-5"></path>
</svg>
          Optimize Saving Strategies
        </li>
</ul>
<div className="mt-8">
<a className="inline-flex items-center justify-center rounded-full px-6 sm:px-8 py-3.5 text-sm sm:text-base font-medium tracking-tight ring-1 font-geist text-white ring-emerald-400/30" href="#" style={{background: 'linear-gradient(135deg, rgb(16,185,129) 0%, rgb(5,150,105) 100%)'}}>
          Try It Now
        </a>
</div>
</div>

<div className="lg:col-span-6">
<div className="overflow-visible max-h-fit border rounded-2xl pt-4 pr-4 pb-8 pl-4 relative bg-black/40 border-white/10">
<h3 className="text-lg font-semibold tracking-tight mb-2 font-geist">AI Insights Dashboard</h3>
<p className="text-sm mb-4 font-geist text-gray-300">
          Visualize your expenses, track habits, and uncover patterns that help improve your financial health.
        </p>
<div className="relative rounded-xl border ring-1 overflow-hidden p-4 sm:p-6 bg-neutral-900/60 border-white/10 ring-white/5">

<div className="sm:left-36 sm:right-36 z-0 flex flex-col gap-2 pointer-events-none absolute top-0 right-28 bottom-0 left-28 items-stretch justify-center">
<div className="h-px bg-gradient-to-r from-transparent to-transparent relative overflow-hidden via-emerald-400/80">
<div className="absolute inset-0 bg-gradient-to-r h-full animate-pulse from-emerald-400 to-lime-400" style={{animation: 'flowLeft 2s ease-in-out infinite', transform: 'translateX(-100%)'}}></div>
</div>
<div className="h-px bg-gradient-to-r from-transparent to-transparent relative overflow-hidden via-emerald-400/60">
<div className="absolute inset-0 bg-gradient-to-r h-full from-emerald-400 to-lime-400" style={{animation: 'flowLeft 2s ease-in-out infinite 0.3s', transform: 'translateX(-100%)'}}></div>
</div>
<div className="h-px bg-gradient-to-r from-transparent to-transparent relative overflow-hidden via-emerald-400/40">
<div className="absolute inset-0 bg-gradient-to-r h-full from-emerald-400 to-lime-400" style={{animation: 'flowLeft 2s ease-in-out infinite 0.6s', transform: 'translateX(-100%)'}}></div>
</div>
</div>

<div className="z-10 flex relative items-center justify-between">

<div className="flex flex-col items-center gap-2">
<div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl border ring-1 backdrop-blur-sm overflow-hidden border-white/10 bg-neutral-900/70 ring-white/10">
<div className="absolute -left-4 top-2 w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-500/70 to-lime-500/40 blur-2xl">
</div>
<div className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-tr to-emerald-500/30 blur-xl from-lime-400/70">
</div>
<div className="absolute right-3 bottom-3 w-8 h-8 rounded-full bg-gradient-to-tr to-transparent blur-lg from-emerald-300/60">
</div>
<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7cb11911-53c5-45cc-a756-9dbe2010e635_320w.jpg)] bg-cover ring-1 rounded-xl ring-white/5">
</div>
</div>
<span className="text-xs font-geist text-neutral-300">AI Core</span>
</div>

<div className="sm:left-36 sm:right-36 z-0 flex flex-col gap-2 pointer-events-none absolute top-0 right-28 bottom-0 left-28 items-stretch justify-center">
<div className="h-px bg-gradient-to-r from-transparent to-transparent relative overflow-hidden via-emerald-400/80">
<div className="absolute inset-0 bg-gradient-to-r h-full animate-pulse from-emerald-400 to-lime-400" style={{animation: 'flowLeft 2s ease-in-out infinite', transform: 'translateX(-100%)'}}></div>
</div>
<div className="h-px bg-gradient-to-r from-transparent to-transparent relative overflow-hidden via-emerald-400/60">
<div className="absolute inset-0 bg-gradient-to-r h-full from-emerald-400 to-lime-400" style={{animation: 'flowLeft 2s ease-in-out infinite 0.3s', transform: 'translateX(-100%)'}}></div>
</div>
<div className="h-px bg-gradient-to-r from-transparent to-transparent relative overflow-hidden via-emerald-400/40">
<div className="absolute inset-0 bg-gradient-to-r h-full from-emerald-400 to-lime-400" style={{animation: 'flowLeft 2s ease-in-out infinite 0.6s', transform: 'translateX(-100%)'}}></div>
</div>
</div>

<div className="flex flex-col items-center gap-2">
<div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl border ring-1 backdrop-blur-sm overflow-hidden border-white/10 bg-neutral-900/70 ring-white/10">
<div className="absolute right-4 top-4 w-8 h-6 bg-gradient-to-br to-lime-500 from-emerald-400" style={{clipPath: 'polygon(0% 0%, 100% 0%, 70% 100%, 0% 100%)'}}></div>
<div className="absolute left-4 bottom-5 w-12 h-7 bg-gradient-to-br from-lime-500 to-emerald-500" style={{clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)'}}></div>
<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9f2ed82e-900a-4e17-843f-6340215c86a0_320w.jpg)] bg-cover ring-1 rounded-xl ring-white/5">
</div>
</div>
<span className="text-xs font-geist text-neutral-300">User Data</span>
</div>
<style>
              @keyframes flowLeft {
                0% {
                  transform: translateX(-100%);
                  opacity: 0;
                }

                50% {
                  opacity: 1;
                }

                100% {
                  transform: translateX(100%);
                  opacity: 0;
                }
              }
            </style>
</div>
</div>
</div>
</div>
</div>



</section><section className="sm:px-8 sm:mt-32 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mt-32 mr-auto ml-auto pr-6 pl-6 animate">
<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 bg-gradient-to-br from-gray-500/10 via-gray-500/0 to-gray-500/10 rounded-3xl pt-8 pr-8 pb-8 pl-8 gap-x-y-12 gap-y-12 items-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '24px'}}>

<div className="lg:col-span-6">
<div className="relative">

<section className="bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] border rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-xl shadow-black/20 from-slate-200/10 to-slate-800/0 border-white/10">
<div className="flex items-start justify-between">
<div className="">
<h2 className="text-[18px] tracking-tight font-semibold font-geist text-white">Monthly Cash Flow</h2>
<p className="text-xs font-geist text-white/60">AI-assisted overview</p>
</div>
</div>
<div className="mt-3 text-2xl font-geist font-light tracking-tight text-white" style={{}}>$2,895.89</div>
<div className="mt-6">
<div className="h-56 md:h-64">
<canvas className="w-full h-full" height="512" id="radarChart" style={{display: 'block', boxSizing: 'border-box', height: '256px', width: '455px'}} width="910"></canvas>
</div>
</div>
<div className="mt-4 flex items-center justify-between text-xs text-white/70">
<span className="inline-flex items-center gap-2 font-geist">
<span className="h-1.5 w-8 rounded-full bg-emerald-400"></span> Income
            <span className="font-geist text-white/40">6:47 AM</span>
</span>
<span className="inline-flex items-center gap-2 font-geist">
<span className="h-1.5 w-8 rounded-full bg-lime-400"></span> Expenses
            <span className="font-geist text-white/40">6:51 PM</span>
</span>
</div>

</section>


</div>

</div>

<div className="lg:col-span-6">
<span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-300 tracking-tight font-geist ring-emerald-500/40 ring-1 rounded-full pt-1.5 pr-4 pb-1.5 pl-4">AI BUDGET ASSISTANT</span>
<h2 className="sm:text-5xl lg:text-6xl text-4xl font-light tracking-tight font-geist mt-6 text-white">
        Plan, track, and optimize your
        <span className="block font-geist font-light tracking-tight" style={{}}>budget with AI</span>
</h2>
<p className="mt-6 text-lg leading-8 font-geist text-white/70">
        Get real-time insights, smart savings suggestions, and forecasts that help you stay on target—without
        spreadsheets. Connect your accounts and let the assistant do the heavy lifting.
      </p>
<div className="mt-8 grid grid-cols-2 gap-8">
<div className="">
<div className="text-4xl sm:text-5xl font-geist font-light tracking-tight text-emerald-400" style={{}}>2M+</div>
<div className="text-base mt-2 font-geist text-white/80">Budgets created</div>
</div>
<div className="">
<div className="text-4xl sm:text-5xl font-geist font-light tracking-tight text-emerald-400" style={{}}>500+</div>
<div className="text-base mt-2 font-geist text-white/80">Bank integrations</div>
</div>
</div>
</div>
</div>


</section><section className="sm:px-8 sm:mt-32 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mt-32 mr-auto ml-auto pr-6 pl-6 animate">
<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 bg-gradient-to-br from-gray-500/10 via-gray-500/0 to-gray-500/10 rounded-3xl pt-8 pr-8 pb-8 pl-8 gap-x-y-12 gap-y-12 items-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '24px'}}>

<div className="lg:col-span-6">
<span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-300 tracking-tight font-geist bg-emerald-600/10 ring-emerald-500/30 ring-1 rounded-full pt-1.5 pr-4 pb-1.5 pl-4">SMART CARDS</span>
<h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-geist font-light tracking-tight text-white">
      Spend smarter with
      <span className="block font-light tracking-tight font-geist">AI-powered cards</span>
</h2>
<p className="mt-6 text-lg leading-8 font-geist text-neutral-300">
      Create virtual cards with smart limits, real-time alerts, and auto-categorization. Keep control of
      subscriptions and day-to-day spending without the spreadsheets.
    </p>
<ul className="mt-6 space-y-4">
<li className="flex items-center gap-3 text-base sm:text-lg font-geist text-neutral-300">
<svg className="shrink-0 text-emerald-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
        Auto-categorize every purchase
      </li>
<li className="flex items-center gap-3 text-base sm:text-lg font-geist text-neutral-300">
<svg className="shrink-0 text-emerald-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
        Set limits, freeze, and get instant alerts
      </li>
</ul>
<div className="mt-8">
<a className="inline-flex items-center justify-center sm:px-8 sm:text-base text-sm font-medium tracking-tight font-geist ring-1 rounded-full pt-3.5 pr-6 pb-3.5 pl-6 text-white ring-emerald-400/30" href="#" style={{background: 'linear-gradient(135deg, rgb(16,185,129) 0%, rgb(5,150,105) 100%)'}}>
        Create a Smart Card
      </a>
</div>
</div>

<div className="lg:col-span-6">
<div className="w-full max-w-3xl relative grid lg:[grid-template-areas:'stack'] lg:place-items-center lg:aspect-[4/3] sm:aspect-auto">

<div className="w-full max-w-[340px] mx-auto mb-6 lg:mb-0 lg:absolute lg:left-6 lg:top-6 lg:w-[320px] lg:-translate-x-16 lg:-translate-y-16 rounded-3xl ring-1 shadow-2xl backdrop-blur-xl lg:[grid-area:stack] ring-white/15 text-white bg-white/10">
<div className="absolute inset-0 rounded-3xl pointer-events-none">
<div className="absolute inset-0 rounded-3xl" style={{background: 'radial-gradient(80% 90% at 70% 40%, rgba(255,255,255,.30) 0%, rgba(255,255,255,.10) 45%, rgba(0,0,0,.20) 65%, rgba(0,0,0,0) 78%)'}}>
</div>
<div className="absolute inset-0 rounded-3xl mix-blend-soft-light" style={{background: 'linear-gradient(135deg, rgba(184,141,255,.30), rgba(157,133,255,.20))'}}></div>
</div>
<div className="relative p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-medium font-geist bg-white/90 text-neutral-900">B</span>
<span className="text-sm font-medium tracking-tight font-geist text-white/90">Budgetly.</span>
</div>
<svg className="opacity-70" height="18" viewbox="0 0 28 18" width="28">
<circle cx="10" cy="9" fill="rgba(255,255,255,0.35)" r="7"></circle>
<circle cx="18" cy="9" fill="rgba(255,255,255,0.2)" r="7"></circle>
</svg>
</div>
<div className="mt-6">
<div className="text-xl sm:text-2xl font-geist font-light tracking-tight text-white/95">
              4521 9083 7610 <span className="font-geist font-light tracking-tight text-white/70">XXXX</span>
</div>
</div>
<div className="mt-6 flex items-end justify-between">
<div>
<div className="text-[11px] font-geist text-white/60">CARD HOLDER</div>
<div className="text-sm tracking-tight font-geist text-white/90">Eva Kim</div>
</div>
<div className="text-right">
<div className="text-[11px] font-geist text-white/60">VALID THRU</div>
<div className="text-sm tracking-tight font-geist text-white/90">09/27</div>
</div>
</div>
</div>
</div>

<div className="w-full max-w-[340px] mx-auto mb-6 lg:mb-0 lg:absolute lg:left-16 lg:top-20 lg:w-[380px] lg:-translate-y-2 lg:z-20 rounded-3xl ring-1 shadow-2xl backdrop-blur-xl lg:[grid-area:stack] ring-white/15 text-white bg-white/10">
<div className="absolute inset-0 rounded-3xl pointer-events-none">
<div className="absolute inset-0 rounded-3xl" style={{background: 'radial-gradient(85% 95% at 50% 48%, rgba(0,0,0,.45) 0%, rgba(0,0,0,.18) 35%, rgba(0,0,0,.08) 55%, rgba(0,0,0,0) 75%)'}}>
</div>
<div className="absolute inset-0 rounded-3xl mix-blend-soft-light" style={{background: 'linear-gradient(135deg, rgba(231,255,140,.35), rgba(183,255,158,.25))'}}></div>
</div>
<div className="relative p-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="opacity-80 w-[30px] h-[20px]" height="20" strokeWidth="2" style={{width: '30px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 28 18" width="30">
<circle cx="10" cy="9" fill="rgba(255,255,255,0.45)" r="7"></circle>
<circle cx="18" cy="9" fill="rgba(255,255,255,0.25)" r="7"></circle>
</svg>
<span className="text-sm font-medium tracking-tight font-geist text-white/95">Budgetly.</span>
</div>
<svg className="opacity-80 w-[30px] h-[20px]" height="20" strokeWidth="2" style={{width: '30px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 28 18" width="30">
<circle cx="10" cy="9" fill="rgba(255,255,255,0.45)" r="7"></circle>
<circle cx="18" cy="9" fill="rgba(255,255,255,0.25)" r="7"></circle>
</svg>
</div>
<div className="mt-7">
<div className="text-2xl sm:text-3xl font-geist font-light tracking-tight text-white">
              5249 3820 1145 <span className="font-geist font-light tracking-tight text-white/70">XXXX</span>
</div>
</div>
<div className="mt-7 flex items-end justify-between">
<div>
<div className="text-[11px] font-geist text-white/70">CARD HOLDER</div>
<div className="text-base tracking-tight font-geist text-white/95">Daniel Park</div>
</div>
<div className="text-right">
<div className="text-[11px] font-geist text-white/70">VALID THRU</div>
<div className="text-base tracking-tight font-geist text-white/95">03/29</div>
</div>
</div>
</div>
</div>

<div className="hidden lg:block lg:absolute lg:left-16 lg:top-20 lg:w-[380px] lg:h-[230px] lg:z-10 pointer-events-none rounded-3xl lg:[grid-area:stack]" style={{filter: 'blur(18px)', background: 'radial-gradient(50% 60% at 55% 50%, rgba(255,255,255,.35) 0%, rgba(255,255,255,.12) 40%, rgba(255,255,255,0) 70%)'}}>
</div>

<div className="w-full max-w-[340px] mx-auto lg:absolute lg:right-6 lg:bottom-2 lg:w-[330px] lg:-translate-x-6 lg:translate-y-12 rounded-3xl ring-1 shadow-2xl backdrop-blur-lg lg:[grid-area:stack] ring-white/10 text-white/85 bg-white/5">
<div className="absolute inset-0 rounded-3xl pointer-events-none">
<div className="absolute inset-0 rounded-3xl" style={{background: 'radial-gradient(90% 100% at 60% 45%, rgba(255,255,255,.10) 0%, rgba(255,255,255,.04) 40%, rgba(0,0,0,.25) 62%, rgba(0,0,0,0) 80%)'}}>
</div>
<div className="absolute inset-0 rounded-3xl mix-blend-multiply" style={{background: 'linear-gradient(135deg, rgba(15,23,42,.65), rgba(31,41,55,.55))'}}></div>
</div>
<div className="relative p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-medium font-geist bg-white/80 text-neutral-900">B</span>
<span className="text-sm font-medium tracking-tight font-geist text-white/90">Budgetly.</span>
</div>
<svg className="opacity-50" height="18" viewbox="0 0 28 18" width="28">
<circle cx="10" cy="9" fill="rgba(255,255,255,0.25)" r="7"></circle>
<circle cx="18" cy="9" fill="rgba(255,255,255,0.15)" r="7"></circle>
</svg>
</div>
<div className="mt-6">
<div className="text-xl sm:text-2xl font-geist font-light tracking-tight text-white/85">
              6019 7321 8550 <span className="font-geist font-light tracking-tight text-white/50">XXXX</span>
</div>
</div>
<div className="mt-6 flex items-end justify-between">
<div>
<div className="text-[11px] font-geist text-white/55">CARD HOLDER</div>
<div className="text-sm tracking-tight font-geist text-white/85">Lena Tran</div>
</div>
<div className="text-right">
<div className="text-[11px] font-geist text-white/55">VALID THRU</div>
<div className="text-sm tracking-tight font-geist text-white/85">11/26</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>



</section><section className="sm:px-8 sm:mt-32 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mt-32 mr-auto ml-auto pr-6 pl-6">
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
<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button aria-label="Next testimonial" className="inline-flex border-neutral-700 hover:bg-neutral-800 transition bg-gradient-to-br w-11 h-11 rounded-full items-center justify-center from-white/10 to-white/0" id="t-next" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}}>
<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
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
<img alt="Avatar" className="w-10 h-10 object-cover rounded-full ring-1 ring-neutral-800" id="t-avatar" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca687bcc-f3d6-4ed6-9efe-e0fd4cbe69a9_320w.webp" style={{opacity: '1'}}/>
<div className="">
<div className="text-base font-semibold tracking-tight text-white" id="t-name" style={{opacity: '1'}}>Marcus Hill</div>
<div className="text-sm text-neutral-400" id="t-role" style={{opacity: '1'}}>Operations Lead, Toronto</div>
</div>
</figcaption>
</figure>
</div>
</div>


</section>



</section><section className="sm:px-8 sm:mt-32 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mt-32 mr-auto ml-auto pr-6 pl-6 animate">
<div className="sm:pt-8 sm:pl-8 sm:pr-8 sm:pb-8 bg-gradient-to-br from-gray-500/10 via-gray-500/0 to-gray-500/10 rounded-3xl ring-0 pt-6 pr-8 pb-6 pl-8" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '24px'}}>
<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-10 gap-8">

<div className="lg:col-span-5">
<div className="space-y-8">
<div className="">
<span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-300 tracking-tight font-geist bg-emerald-600/10 ring-emerald-500/30 ring-1 rounded-full pt-1.5 pr-4 pb-1.5 pl-4">PRICING</span>
<h2 className="sm:text-5xl lg:text-6xl text-4xl font-light text-white tracking-tight font-geist mt-6">
              Simple, smart, transparent pricing
            </h2>
<p className="mt-6 text-base sm:text-lg dark:text-neutral-400 text-neutral-600">
              See how Moneo helps individuals and small businesses take control of their budgets, save smarter, and plan
              ahead with AI-driven insights.
            </p>
</div>
<div className="flex items-start gap-4">
<span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 bg-white/5 ring-white/10">
<svg className="w-5 h-5 text-neutral-200" fill="none" stroke="currentColor" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M7 13l3 3 7-7"></path></svg>
</span>
<div className="">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-white">Auto-categorization powered by AI</h3>
<p className="mt-1 text-sm text-neutral-400">Moneo learns your habits and classifies transactions with high accuracy — no more manual cleanup.</p>
</div>
</div>
<div className="flex items-start gap-4">
<span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 bg-white/5 ring-white/10">
<svg className="w-5 h-5 text-neutral-200" fill="none" stroke="currentColor" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><path d="M3 12h18"></path></svg>
</span>
<div className="">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-white">Smart budgets &amp; envelopes</h3>
<p className="mt-1 text-sm text-neutral-400">Create monthly or rolling budgets with drift protection, alerts, and envelope-style rules.</p>
</div>
</div>
<div className="flex items-start gap-4">
<span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 bg-white/5 ring-white/10">
<svg className="w-5 h-5 text-neutral-200" fill="none" stroke="currentColor" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5-6 5 6"></path></svg>
</span>
<div className="">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-white">Bank sync &amp; anomaly alerts</h3>
<p className="mt-1 text-sm text-neutral-400">Securely connect accounts, get real-time sync, and catch unusual spend before it snowballs.</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">

<div className="mb-4 flex items-center justify-center md:justify-end">
<div className="inline-flex rounded-full ring-1 p-1 ring-white/10 bg-white/5">
<button aria-pressed="true" className="billing-tab px-4 py-1.5 text-sm rounded-full ring-1 text-white/90 bg-white/10 ring-white/15" data-billing="monthly" type="button">Monthly</button>
<button aria-pressed="false" className="billing-tab px-4 py-1.5 text-sm rounded-full text-neutral-300 hover:text-white" data-billing="annual" type="button">Annual</button>
</div>
<span className="ml-3 hidden md:inline text-xs bg-emerald-500/10 ring-1 px-2.5 py-1 rounded-full text-emerald-300/80 ring-emerald-400/30">
            Save 20% annually
          </span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 [grid-auto-rows:1fr] gap-x-6 gap-y-6 items-stretch max-w-3xl mx-auto">

<div className="flex flex-col sm:p-6 h-full ring-1 rounded-2xl p-5 bg-neutral-900/80 ring-white/10">
<div className="flex items-start justify-between">
<p className="text-sm font-medium tracking-tight text-white">Starter</p>
</div>
<div className="mt-3">
<div className="flex gap-2 items-baseline">
<span className="price text-5xl font-light tracking-tight text-white" data-annual="$86" data-monthly="$9">$9</span>
<span className="price-unit text-sm text-neutral-400" data-annual="/ year" data-monthly="/ month">/ month</span>
</div>
<p className="mt-2 text-sm text-neutral-400">Perfect for individuals getting control of monthly spending.</p>
<p className="billing-note mt-1 text-xs text-neutral-500 hidden">Billed yearly</p>
</div>
<div className="mt-5 space-y-3">
<a className="w-full inline-flex items-center justify-center text-base font-medium tracking-tight rounded-full ring-1 py-3.5 px-6 transition-all duration-300 hover:brightness-110 text-white ring-emerald-400/30" href="#" style={{background: 'linear-gradient(135deg, rgb(16,185,129) 0%, rgb(5,150,105) 100%)'}}>Start free trial</a>
<button className="w-full inline-flex items-center justify-center text-base font-medium tracking-tight rounded-full ring-1 py-3.5 px-6 transition-all duration-300 text-neutral-200 ring-white/10 hover:bg-white/5">Compare features</button>
</div>
<div className="mt-6 pt-6 border-t border-white/10">
<p className="text-xs font-semibold tracking-tight text-neutral-300">INCLUDES</p>
<p className="mt-1 text-xs text-neutral-500">Everything you need to start</p>
<ul className="mt-4 space-y-3">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full ring-1 shrink-0 bg-white/5 text-neutral-200 ring-white/10">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 6 9 17l-5-5"></path></svg>
</span>
                  AI auto-categorization (single profile)
                </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full ring-1 shrink-0 bg-white/5 text-neutral-200 ring-white/10">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
                  2 bank connections, daily sync
                </li>
</ul>
</div>
</div>

<div className="flex flex-col h-full rounded-2xl ring-1 p-5 sm:p-6 ring-white/10 bg-neutral-900/80">
<div className="flex items-start justify-between">
<p className="text-sm font-medium tracking-tight text-white">Pro</p>
</div>
<div className="mt-3">
<div className="flex gap-2 items-baseline">
<span className="price text-5xl font-light tracking-tight text-white" data-annual="$278" data-monthly="$29">$29</span>
<span className="price-unit text-sm text-neutral-400" data-annual="/ year" data-monthly="/ month">/ month</span>
</div>
<p className="mt-2 text-sm text-neutral-400">For power users, couples, and small teams managing shared budgets.</p>
<p className="billing-note mt-1 text-xs text-neutral-500 hidden">Billed yearly</p>
</div>
<div className="mt-5 space-y-3">
<a className="w-full inline-flex items-center justify-center text-base font-medium tracking-tight rounded-full ring-1 py-3.5 px-6 transition-all duration-300 hover:brightness-110 text-white ring-emerald-400/30" href="#" style={{background: 'linear-gradient(135deg, rgb(16,185,129) 0%, rgb(5,150,105) 100%)'}}>Start free trial</a>
<button className="w-full inline-flex items-center justify-center text-base font-medium tracking-tight rounded-full ring-1 py-3.5 px-6 transition-all duration-300 text-neutral-200 ring-white/10 hover:bg-white/5">Compare features</button>
</div>
<div className="mt-6 pt-6 border-t border-white/10">
<p className="text-xs font-semibold tracking-tight text-neutral-300">EVERYTHING IN STARTER, PLUS</p>
<p className="mt-1 text-xs text-neutral-500">Advanced controls &amp; collaboration</p>
<ul className="mt-4 space-y-3">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full ring-1 shrink-0 bg-white/5 text-neutral-200 ring-white/10">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
                  Unlimited bank connections, hourly sync
                </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full ring-1 shrink-0 bg-white/5 text-neutral-200 ring-white/10">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
                  Shared budgets &amp; roles (Viewer/Editor)
                </li>
</ul>
</div>
</div>
</div>
</div> 
</div>
</div>


</section>

<footer className="sm:px-8 sm:py-20 max-w-7xl border-neutral-800 border-t mt-24 mr-auto ml-auto pt-14 pr-6 pb-14 pl-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div className="">
<span className="text-lg font-semibold tracking-tight text-white font-geist">Moneo</span>
<p className="mt-4 text-sm text-neutral-400 font-geist">Smart budget assistant for everyone.</p>
</div>
<div className="">
<h3 className="text-sm font-medium text-white font-geist mb-4">Product</h3>
<nav className="space-y-3">
<a className="block hover:text-white text-sm text-neutral-400 font-geist" href="#">Features</a>
<a className="block text-sm text-neutral-400 hover:text-white font-geist" href="#">Pricing</a>
<a className="block text-neutral-400 hover:text-white text-sm font-geist" href="#">Security</a>
</nav>
</div>
<div className="">
<h3 className="text-sm font-medium text-white mb-4 font-geist">Company</h3>
<nav className="space-y-3">
<a className="block text-sm text-neutral-400 hover:text-white font-geist" href="#">About</a>
<a className="block text-sm text-neutral-400 hover:text-white font-geist" href="#">Blog</a>
<a className="block text-sm text-neutral-400 hover:text-white font-geist" href="#">Careers</a>
</nav>
</div>
<div className="">
<h3 className="text-sm font-medium text-white mb-4 font-geist">Support</h3>
<nav className="space-y-3">
<a className="block text-sm text-neutral-400 hover:text-white font-geist" href="#">Help Center</a>
<a className="block text-sm text-neutral-400 hover:text-white font-geist" href="#">Contact</a>
<a className="block text-sm text-neutral-400 hover:text-white font-geist" href="#">Privacy</a>
</nav>
</div>
</div>
<div className="pt-8 border-t border-neutral-800">
<p className="text-sm text-neutral-400 font-geist">© 2025 Moneo. All rights reserved.</p>
</div>
</footer>



    </>
  );
}
