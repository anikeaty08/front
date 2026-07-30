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



      // Lucide icons
      document.addEventListener('DOMContentLoaded', function () {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // Chart.js setup with soft green palette on light background
      const ctx = document.getElementById('visitsChart');
      const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 220);
      gradient.addColorStop(0, 'rgba(16, 185, 129, 0.25)'); // emerald-500-ish
      gradient.addColorStop(1, 'rgba(16, 185, 129, 0.03)');

      const gradient2 = ctx.getContext('2d').createLinearGradient(0, 0, 0, 220);
      gradient2.addColorStop(0, 'rgba(245, 158, 11, 0.25)'); // amber-500-ish
      gradient2.addColorStop(1, 'rgba(245, 158, 11, 0.03)');

      const labelsDay = Array.from({ length: 24 }, (_, i) => (i % 2 === 0 ? i + ':00' : ''));
      const visitsDay = [2,4,5,3,4,6,12,18,22,20,16,12,9,7,6,8,11,14,18,21,17,12,8,4];
      const speciesDay = [1,1,1,1,2,2,4,5,7,6,5,4,3,3,3,4,4,6,7,8,6,4,3,2];

      const dataWeekVisits = [12, 18, 16, 22, 28, 35, 30];
      const dataWeekSpecies = [8, 10, 9, 12, 15, 18, 17];
      const labelsWeek = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

      let chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labelsDay,
          datasets: [
            {
              label: 'Visits',
              data: visitsDay,
              borderColor: 'rgba(16, 185, 129, 1)',
              backgroundColor: gradient,
              fill: true,
              tension: 0.35,
              pointRadius: 0,
            },
            {
              label: 'Unique species',
              data: speciesDay,
              borderColor: 'rgba(245, 158, 11, 1)',
              backgroundColor: gradient2,
              fill: true,
              tension: 0.35,
              pointRadius: 0,
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: { color: 'rgba(17,24,39,0.06)' },
              ticks: { color: 'rgba(17,24,39,0.6)', maxTicksLimit: 12 }
            },
            y: {
              grid: { color: 'rgba(17,24,39,0.06)' },
              ticks: { color: 'rgba(17,24,39,0.6)', maxTicksLimit: 6 },
              beginAtZero: true
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(255,255,255,0.95)',
              titleColor: '#0f172a',
              bodyColor: '#111827',
              borderColor: 'rgba(17,24,39,0.12)',
              borderWidth: 1,
              padding: 10,
              displayColors: false
            }
          }
        }
      });

      // Chart range toggle
      const dayBtn = document.getElementById('chartRangeDay');
      const weekBtn = document.getElementById('chartRangeWeek');
      dayBtn.addEventListener('click', () => {
        dayBtn.className = 'text-xs rounded-md px-2 py-1 bg-emerald-100 text-emerald-700 ring-1 ring-inset ring-emerald-300';
        weekBtn.className = 'text-xs rounded-md px-2 py-1 bg-white text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 ring-1 ring-inset ring-neutral-200';
        chart.data.labels = labelsDay;
        chart.data.datasets[0].data = visitsDay;
        chart.data.datasets[1].data = speciesDay;
        chart.update();
        document.getElementById('peakHour').textContent = '7–8 AM';
        document.getElementById('uniqueSpecies').textContent = '18';
      });
      weekBtn.addEventListener('click', () => {
        weekBtn.className = 'text-xs rounded-md px-2 py-1 bg-emerald-100 text-emerald-700 ring-1 ring-inset ring-emerald-300';
        dayBtn.className = 'text-xs rounded-md px-2 py-1 bg-white text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 ring-1 ring-inset ring-neutral-200';
        chart.data.labels = labelsWeek;
        chart.data.datasets[0].data = dataWeekVisits;
        chart.data.datasets[1].data = dataWeekSpecies;
        chart.update();
        document.getElementById('peakHour').textContent = 'Saturday';
        document.getElementById('uniqueSpecies').textContent = '22';
      });

      // Pricing toggle
      const monthlyBtn = document.getElementById('toggleMonthly');
      const yearlyBtn = document.getElementById('toggleYearly');

      function setBilling(yearly) {
        const show = yearly ? 'yearly' : 'monthly';
        document.querySelectorAll('[data-price]').forEach(el => {
          const isMatch = el.getAttribute('data-price').includes(show);
          el.classList.toggle('hidden', !isMatch);
        });
        if (yearly) {
          yearlyBtn.className = 'px-3 py-1.5 text-sm rounded-md bg-emerald-100 text-emerald-700 ring-1 ring-inset ring-emerald-300';
          monthlyBtn.className = 'px-3 py-1.5 text-sm rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 ring-1 ring-inset ring-neutral-200';
        } else {
          monthlyBtn.className = 'px-3 py-1.5 text-sm rounded-md bg-emerald-100 text-emerald-700 ring-1 ring-inset ring-emerald-300';
          yearlyBtn.className = 'px-3 py-1.5 text-sm rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 ring-1 ring-inset ring-neutral-200';
        }
      }
      monthlyBtn.addEventListener('click', () => setBilling(false));
      yearlyBtn.addEventListener('click', () => setBilling(true));

      // Footer year
      document.getElementById('year').textContent = new Date().getFullYear();
    
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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-32 -left-32 h-[520px] w-[620px] rounded-full blur-2xl opacity-[0.10] bg-[radial-gradient(closest-side,rgba(16,185,129,0.20),transparent_70%)]"></div>
<div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full blur-2xl opacity-[0.08] bg-[radial-gradient(closest-side,rgba(132,204,22,0.20),transparent_70%)]"></div>
</div>

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="inline-flex items-center gap-2" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-neutral-100 ring-1 ring-inset ring-neutral-200">
<span className="text-neutral-900 text-sm tracking-tight font-sans" style={{}}>AV</span>
</div>
<span className="text-neutral-900 text-base tracking-tight font-sans" style={{}}>AviCam</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-sans" href="#features" style={{}}>Features</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-sans" href="#insights" style={{}}>Insights</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-sans" href="#pricing" style={{}}>Pricing</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-sans" href="#faq" style={{}}>FAQ</a>
</nav>
<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center gap-2 rounded-md bg-emerald-600 text-white px-3.5 py-2 text-sm hover:bg-emerald-700 active:bg-emerald-800 transition-colors ring-1 ring-transparent hover:ring-emerald-300 font-sans" href="#download" style={{}}>
<svg className="lucide lucide-download h-4 w-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
              Download
            </a>
<a className="inline-flex items-center gap-2 rounded-md bg-white px-3.5 py-2 text-sm text-neutral-900 hover:bg-neutral-50 transition-colors ring-1 ring-inset ring-neutral-200 font-sans" href="#waitlist" style={{}}>
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
              Join waitlist
            </a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 -z-10">
<div className="absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(1200px_420px_at_50%_-80px,rgba(16,185,129,0.12),transparent)]"></div>
<div className="absolute inset-x-0 bottom-0 h-[380px] bg-[radial-gradient(900px_360px_at_85%_120%,rgba(132,204,22,0.10),transparent)]"></div>
<img alt="" className="absolute inset-0 h-full w-full object-cover opacity-[0.08] pointer-events-none select-none" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
<div className="sm:px-6 lg:px-8 sm:pt-24 sm:pb-20 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-12 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
<div className="">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700 font-sans" style={{}}>
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              Live species ID
              <span className="text-neutral-400 font-sans" style={{}}>•</span>
              Private by design
            </div>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-900 font-instrument-serif font-normal" style={{}}>
              Turn your backyard into a live nature channel
            </h1>
<p className="mt-5 max-w-xl text-base text-neutral-600 font-sans" style={{}}>
              AviCam recognizes birds in real time, captures beautiful clips, and builds an activity log—right from a weatherproof smart feeder.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 text-white px-5 py-3 text-sm hover:bg-emerald-700 active:bg-emerald-800 transition-colors ring-1 ring-transparent hover:ring-emerald-300 font-sans" href="#waitlist" style={{}}>
<svg className="lucide lucide-sparkles h-5 w-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                Get early access
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm text-neutral-900 hover:bg-neutral-50 transition-colors ring-1 ring-inset ring-neutral-200 font-sans" href="#demo" style={{}}>
<svg className="lucide lucide-play-circle h-5 w-5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                Watch demo
              </a>
</div>
<div className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
<div className="-lg border border-neutral-200 bg-white p-4">
<div className="text-2xl tracking-tight text-neutral-900 font-instrument-serif font-normal" style={{}}>128</div>
<div className="text-xs text-neutral-500 font-sans" style={{}}>Species identified</div>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<div className="text-2xl tracking-tight text-neutral-900 font-instrument-serif font-normal" style={{}}>2.1k</div>
<div className="text-xs text-neutral-500 font-sans" style={{}}>Clips saved today</div>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<div className="text-2xl tracking-tight text-neutral-900 font-instrument-serif font-normal" style={{}}>~98%</div>
<div className="text-xs text-neutral-500 font-sans" style={{}}>Detection accuracy</div>
</div>
</div>
</div>
<div className="lg:pl-8">
<div className="relative">
<div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-emerald-500/10 via-lime-500/10 to-amber-500/10 blur-2xl"></div>
<div className="relative rounded-2xl border border-neutral-200 bg-white p-3 shadow-2xl">
<img alt="AviCam smart feeder" className="h-72 w-full rounded-xl object-cover sm:h-96" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="rounded-lg border border-neutral-200 bg-white p-3">
<div className="flex items-center gap-2 text-sm text-neutral-900 font-sans" style={{}}>
<svg className="lucide lucide-bird h-4 w-4" data-lucide="bird" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h.01"></path><path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"></path><path d="m20 7 2 .5-2 .5"></path><path d="M10 18v3"></path><path d="M14 17.75V21"></path><path d="M7 18a6 6 0 0 0 3.84-10.61"></path></svg>
                      Live detection
                    </div>
<div className="mt-2 flex flex-wrap gap-1.5">
<span className="inline-flex items-center gap-1 rounded-md bg-neutral-50 px-2 py-1 text-xs ring-1 ring-inset ring-neutral-200 font-sans" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        Northern Cardinal
                      </span>
<span className="inline-flex items-center gap-1 rounded-md bg-neutral-50 px-2 py-1 text-xs ring-1 ring-inset ring-neutral-200 font-sans" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-lime-400"></span>
                        Blue Jay
                      </span>
<span className="inline-flex items-center gap-1 rounded-md bg-neutral-50 px-2 py-1 text-xs ring-1 ring-inset ring-neutral-200 font-sans" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                        Goldfinch
                      </span>
</div>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-neutral-900 font-sans" style={{}}>
<svg className="lucide lucide-bell h-4 w-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
                        Smart alert
                      </div>
<span className="text-xs text-emerald-600 font-sans" style={{}}>Now</span>
</div>
<p className="mt-1 text-xs text-neutral-600 font-sans" style={{}}>
                      Cardinal detected. Clip saved to timeline and shared to your circle.
                    </p>
<div className="mt-2 rounded-md bg-neutral-50 p-2 ring-1 ring-inset ring-neutral-200">
<div className="flex items-center gap-2 text-xs text-neutral-600 font-sans" style={{}}>
<svg className="lucide lucide-video h-3.5 w-3.5" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
                        12s • 1080p • Auto-enhanced
                      </div>
</div>
</div>
</div>
<div className="mt-3 flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-3">
<div className="flex items-center gap-2 text-sm">
<svg className="lucide lucide-wifi h-4 w-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<span className="font-sans" style={{}}>Online</span>
</div>
<div className="flex items-center gap-2 text-sm">
<svg className="lucide lucide-battery-charging h-4 w-4" data-lucide="battery-charging" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 7-3 5h4l-3 5"></path><path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"></path><path d="M22 14v-4"></path><path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"></path></svg>
<span className="font-sans" style={{}}>94%</span>
</div>
<div className="flex items-center gap-2 text-sm">
<svg className="lucide lucide-server h-4 w-4" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
<span className="font-sans" style={{}}>Edge ML</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-20 border-neutral-200 border-t pt-16 pb-16">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="sm:text-4xl text-3xl font-normal text-neutral-900 tracking-tight font-instrument-serif" style={{}}>Everything you want from a smart feeder</h2>
<p className="mt-3 text-neutral-600 font-sans" style={{}}>Designed for reliability, privacy, and delight—indoors and out.</p>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="rounded-xl border border-neutral-200 bg-white p-5 hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-2">
<div className="rounded-md bg-neutral-100 p-2 ring-1 ring-inset ring-neutral-200">
<svg className="lucide lucide-bird h-5 w-5 text-neutral-800" data-lucide="bird" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h.01"></path><path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"></path><path d="m20 7 2 .5-2 .5"></path><path d="M10 18v3"></path><path d="M14 17.75V21"></path><path d="M7 18a6 6 0 0 0 3.84-10.61"></path></svg>
</div>
<h3 className="text-base text-neutral-900 tracking-tight font-sans" style={{}}>Real‑time ID</h3>
</div>
<p className="mt-2 text-sm text-neutral-600 font-sans" style={{}}>Identify 100+ species on-device in under 150ms with edge ML.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5 hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-2">
<div className="rounded-md bg-neutral-100 p-2 ring-1 ring-inset ring-neutral-200">
<svg className="lucide lucide-bell-ring h-5 w-5 text-neutral-800" data-lucide="bell-ring" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M22 8c0-2.3-.8-4.3-2-6"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path><path d="M4 2C2.8 3.7 2 5.7 2 8"></path></svg>
</div>
<h3 className="text-base text-neutral-900 tracking-tight font-sans" style={{}}>Smart alerts</h3>
</div>
<p className="mt-2 text-sm text-neutral-600 font-sans" style={{}}>Custom notifications for rare species, time windows, and motion zones.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5 hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-2">
<div className="rounded-md bg-neutral-100 p-2 ring-1 ring-inset ring-neutral-200">
<svg className="lucide lucide-shield-check h-5 w-5 text-neutral-800" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-base text-neutral-900 tracking-tight font-sans" style={{}}>Private by default</h3>
</div>
<p className="mt-2 text-sm text-neutral-600 font-sans" style={{}}>Clips stored locally with optional end‑to‑end encrypted cloud backup.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5 hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-2">
<div className="rounded-md bg-neutral-100 p-2 ring-1 ring-inset ring-neutral-200">
<svg className="lucide lucide-cloud h-5 w-5 text-neutral-800" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
</div>
<h3 className="text-base text-neutral-900 tracking-tight font-sans" style={{}}>Weatherproof</h3>
</div>
<p className="mt-2 text-sm text-neutral-600 font-sans" style={{}}>IP65 enclosure with heater and drainage keeps optics clear year‑round.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5 hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-2">
<div className="rounded-md bg-neutral-100 p-2 ring-1 ring-inset ring-neutral-200">
<i className="h-5 w-5 text-neutral-800" data-lucide="timeline"></i>
</div>
<h3 className="text-base text-neutral-900 tracking-tight font-sans" style={{}}>Beautiful timeline</h3>
</div>
<p className="mt-2 text-sm text-neutral-600 font-sans" style={{}}>Scroll a clean feed of moments, species badges, and shareable snippets.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5 hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-2">
<div className="rounded-md bg-neutral-100 p-2 ring-1 ring-inset ring-neutral-200">
<svg className="lucide lucide-share-2 h-5 w-5 text-neutral-800" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</div>
<h3 className="text-base text-neutral-900 tracking-tight font-sans" style={{}}>Circles</h3>
</div>
<p className="mt-2 text-sm text-neutral-600 font-sans" style={{}}>Share access with family and neighbors—control roles and permissions.</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-neutral-200" id="insights">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl tracking-tight text-neutral-900 font-instrument-serif font-normal" style={{}}>Know when your feeders are busiest</h2>
<p className="mt-3 text-neutral-600 font-sans" style={{}}>Hourly visits and species diversity help you optimize placement and feed type.</p>
</div>
<div className="mt-8 rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-neutral-600 font-sans" style={{}}>
<svg className="lucide lucide-chart-line h-4 w-4" data-lucide="chart-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
              Last 24 hours
            </div>
<div className="flex items-center gap-2">
<button className="text-xs rounded-md px-2 py-1 bg-emerald-100 text-emerald-700 ring-1 ring-inset ring-emerald-300 font-sans" id="chartRangeDay" style={{}}>Day</button>
<button className="text-xs rounded-md px-2 py-1 bg-white text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 ring-1 ring-inset ring-neutral-200 font-sans" id="chartRangeWeek" style={{}}>Week</button>
</div>
</div>
<div className="mt-4 rounded-lg border border-neutral-200 bg-white">
<div className="p-3">
<div className="relative h-64">
<canvas height="256" id="visitsChart" style={{display: `block`, boxSizing: `border-box`, height: `256px`, width: `1148px`}} width="1148"></canvas>
</div>
<div className="mt-2 flex items-center justify-between text-xs text-neutral-500">
<span className="font-sans" style={{}}>Visits per hour</span>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1 font-sans" style={{}}><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Total visits</span>
<span className="inline-flex items-center gap-1 font-sans" style={{}}><span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span> Unique species</span>
</div>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="rounded-lg border border-neutral-200 bg-white p-3">
<div className="text-sm text-neutral-600 font-sans" style={{}}>Peak hour</div>
<div className="text-lg tracking-tight text-neutral-900 font-sans" id="peakHour" style={{}}>7–8 AM</div>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-3">
<div className="text-sm text-neutral-600 font-sans" style={{}}>Unique species</div>
<div className="text-lg tracking-tight text-neutral-900 font-sans" id="uniqueSpecies" style={{}}>18</div>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-3">
<div className="text-sm text-neutral-600 font-sans" style={{}}>Avg. clip length</div>
<div className="text-lg tracking-tight text-neutral-900 font-sans" style={{}}>11s</div>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-3">
<div className="text-sm text-neutral-600 font-sans" style={{}}>Missed events</div>
<div className="text-lg tracking-tight text-neutral-900 font-sans" style={{}}>0.3%</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl tracking-tight text-neutral-900 font-instrument-serif font-normal" style={{}}>Loved by backyard naturalists</h2>
<p className="mt-3 text-neutral-600 font-sans" style={{}}>Join a growing community sharing daily sightings and tips.</p>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop" />
<div>
<div className="text-sm text-neutral-900 font-sans" style={{}}>Maya H.</div>
<div className="text-xs text-neutral-500 font-sans" style={{}}>@mayawatchesbirds</div>
</div>
</div>
<p className="mt-3 text-sm text-neutral-600 font-sans" style={{}}>Spotted a pileated woodpecker for the first time. The clip is crystal clear. Instant favorite gadget.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=150&auto=format&fit=crop" />
<div>
<div className="text-sm text-neutral-900 font-sans" style={{}}>Chris L.</div>
<div className="text-xs text-neutral-500 font-sans" style={{}}>Landscape ecologist</div>
</div>
</div>
<p className="mt-3 text-sm text-neutral-600 font-sans" style={{}}>The insights helped me tweak feeder placement. Morning activity up 42%.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=150&auto=format&fit=crop" />
<div>
<div className="text-sm text-neutral-900 font-sans" style={{}}>Rina P.</div>
<div className="text-xs text-neutral-500 font-sans" style={{}}>Community mod</div>
</div>
</div>
<p className="mt-3 text-sm text-neutral-600 font-sans" style={{}}>Family circle is perfect. Kids get notifications when “their” cardinal shows up.</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-neutral-200" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl tracking-tight text-neutral-900 font-instrument-serif font-normal" style={{}}>Simple, flexible pricing</h2>
<p className="mt-3 text-neutral-600 font-sans" style={{}}>Choose a plan that fits your backyard goals. Cancel anytime.</p>
</div>
<div className="mt-6 flex items-center gap-2">
<div className="text-sm text-neutral-500 font-sans" style={{}}>Billing:</div>
<div className="inline-flex rounded-lg border border-neutral-200 bg-white p-1">
<button className="px-3 py-1.5 text-sm rounded-md bg-emerald-100 text-emerald-700 ring-1 ring-inset ring-emerald-300 font-sans" id="toggleMonthly" style={{}}>Monthly</button>
<button className="px-3 py-1.5 text-sm rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 ring-1 ring-inset ring-neutral-200 font-sans" id="toggleYearly" style={{}}>Yearly</button>
</div>
<span className="text-xs text-emerald-700 hidden sm:inline-flex items-center gap-1 font-sans" style={{}}>
<svg className="lucide lucide-badge-percent h-3.5 w-3.5" data-lucide="badge-percent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m15 9-6 6"></path><path d="M9 9h.01"></path><path d="M15 15h.01"></path></svg>
            Save 20% on yearly
          </span>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-2xl border border-neutral-200 bg-white p-6 flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight text-neutral-900 font-sans" style={{}}>Starter</h3>
<span className="text-xs rounded-full bg-neutral-100 px-2 py-1 ring-1 ring-inset ring-neutral-200 font-sans" style={{}}>Best for trying</span>
</div>
<p className="mt-1 text-sm text-neutral-600 font-sans" style={{}}>Core features for a single feeder.</p>
<div className="mt-4">
<div className="flex items-end gap-1">
<span className="text-3xl tracking-tight text-neutral-900 font-instrument-serif font-normal" data-price="starter-monthly" style={{}}>$5</span>
<span className="text-3xl tracking-tight text-neutral-900 hidden font-instrument-serif font-normal" data-price="starter-yearly" style={{}}>$4</span>
<span className="mb-1 text-sm text-neutral-500 font-sans" style={{}}>/mo</span>
</div>
</div>
<ul className="mt-4 space-y-2 text-sm text-neutral-600">
<li className="inline-flex items-center gap-2 font-sans" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Real-time ID</li>
<li className="inline-flex items-center gap-2 font-sans" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Timeline & clips</li>
<li className="inline-flex items-center gap-2 font-sans" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 3 days history</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 text-white px-4 py-2.5 text-sm hover:bg-emerald-700 active:bg-emerald-800 transition-colors ring-1 ring-transparent hover:ring-emerald-300 font-sans" href="#waitlist" style={{}}>Start</a>
</div>

<div className="relative rounded-2xl border border-neutral-200 bg-white p-6 flex flex-col ring-1 ring-emerald-600/30">
<div className="absolute -top-2 right-6 rounded-full bg-emerald-100 px-2 py-1 text-[10px] text-emerald-700 ring-1 ring-inset ring-emerald-300 font-sans" style={{}}>Popular</div>
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight text-neutral-900 font-sans" style={{}}>Plus</h3>
<span className="text-xs rounded-full bg-neutral-100 px-2 py-1 ring-1 ring-inset ring-neutral-200 font-sans" style={{}}>Most users</span>
</div>
<p className="mt-1 text-sm text-neutral-600 font-sans" style={{}}>Advanced analytics for multiple feeders.</p>
<div className="mt-4">
<div className="flex items-end gap-1">
<span className="text-3xl tracking-tight text-neutral-900 font-instrument-serif font-normal" data-price="plus-monthly" style={{}}>$12</span>
<span className="text-3xl tracking-tight text-neutral-900 hidden font-instrument-serif font-normal" data-price="plus-yearly" style={{}}>$9</span>
<span className="mb-1 text-sm text-neutral-500 font-sans" style={{}}>/mo</span>
</div>
</div>
<ul className="mt-4 space-y-2 text-sm text-neutral-600">
<li className="inline-flex items-center gap-2 font-sans" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Everything in Starter</li>
<li className="inline-flex items-center gap-2 font-sans" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 30 days history</li>
<li className="inline-flex items-center gap-2 font-sans" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Multi-feeder dashboard</li>
<li className="inline-flex items-center gap-2 font-sans" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Species alerts</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 text-white px-4 py-2.5 text-sm hover:bg-emerald-700 active:bg-emerald-800 transition-colors ring-1 ring-transparent hover:ring-emerald-300 font-sans" href="#waitlist" style={{}}>Choose Plus</a>
</div>

<div className="rounded-2xl border border-neutral-200 bg-white p-6 flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight text-neutral-900 font-sans" style={{}}>Pro</h3>
<span className="text-xs rounded-full bg-neutral-100 px-2 py-1 ring-1 ring-inset ring-neutral-200 font-sans" style={{}}>For power users</span>
</div>
<p className="mt-1 text-sm text-neutral-600 font-sans" style={{}}>Research‑grade tools and collaboration.</p>
<div className="mt-4">
<div className="flex items-end gap-1">
<span className="text-3xl tracking-tight text-neutral-900 font-instrument-serif font-normal" data-price="pro-monthly" style={{}}>$24</span>
<span className="text-3xl tracking-tight text-neutral-900 hidden font-instrument-serif font-normal" data-price="pro-yearly" style={{}}>$19</span>
<span className="mb-1 text-sm text-neutral-500 font-sans" style={{}}>/mo</span>
</div>
</div>
<ul className="mt-4 space-y-2 text-sm text-neutral-600">
<li className="inline-flex items-center gap-2 font-sans" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 120 days history</li>
<li className="inline-flex items-center gap-2 font-sans" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Raw data export</li>
<li className="inline-flex items-center gap-2 font-sans" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Team circles</li>
<li className="inline-flex items-center gap-2 font-sans" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> API access</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 text-white px-4 py-2.5 text-sm hover:bg-emerald-700 active:bg-emerald-800 transition-colors ring-1 ring-transparent hover:ring-emerald-300 font-sans" href="#waitlist" style={{}}>Go Pro</a>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-neutral-200" id="waitlist">
<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl sm:text-4xl tracking-tight text-neutral-900 font-instrument-serif font-normal" style={{}}>Be first to feed</h2>
<p className="mt-3 text-neutral-600 font-sans" style={{}}>Join the waitlist for early access, launch perks, and field notes from our team.</p>
<form className="mx-auto mt-6 max-w-lg">
<div className="flex flex-col sm:flex-row gap-3">
<div className="relative flex-1">
<svg className="lucide lucide-mail pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<input className="w-full rounded-md bg-white pl-10 pr-3 py-3 text-sm text-neutral-900 placeholder:text-neutral-500 ring-1 ring-inset ring-neutral-200 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="you@backyard.com" required type="email" />
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 text-white px-5 py-3 text-sm hover:bg-emerald-700 active:bg-emerald-800 transition-colors ring-1 ring-transparent hover:ring-emerald-300 font-sans" style={{}} type="submit">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              Join waitlist
            </button>
</div>
<p className="mt-3 text-xs text-neutral-500 font-sans" style={{}}>We’ll never share your email. Unsubscribe anytime.</p>
</form>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-neutral-200" id="faq">
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl tracking-tight text-neutral-900 font-instrument-serif font-normal" style={{}}>Frequently asked</h2>
<div className="mt-6 divide-y divide-neutral-200 rounded-xl border border-neutral-200 bg-white">
<details className="group p-5">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm text-neutral-900 font-sans" style={{}}>
              How does species identification work?
              <svg className="lucide lucide-chevron-down h-4 w-4 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-neutral-600 font-sans" style={{}}>A compact model runs on-device, classifying frames and tracking movement. Images never leave your feeder unless you enable cloud backup.</p>
</details>
<details className="group p-5">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm text-neutral-900 font-sans" style={{}}>
              Is it weatherproof?
              <svg className="lucide lucide-chevron-down h-4 w-4 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-neutral-600 font-sans" style={{}}>Yes. IP65 enclosure, heated lens, and drainage channels keep optics clear in rain and snow.</p>
</details>
<details className="group p-5">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm text-neutral-900 font-sans" style={{}}>
              Will it work without internet?
              <svg className="lucide lucide-chevron-down h-4 w-4 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-neutral-600 font-sans" style={{}}>Core features run offline. Clips and analytics sync when connectivity returns.</p>
</details>
<details className="group p-5">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm text-neutral-900 font-sans" style={{}}>
              Can I share clips?
              <svg className="lucide lucide-chevron-down h-4 w-4 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-neutral-600 font-sans" style={{}}>Yes—create a circle and share automatically for selected species or time windows.</p>
</details>
</div>
</div>
</section>

<footer className="border-t border-neutral-200 py-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-neutral-100 ring-1 ring-inset ring-neutral-200">
<span className="text-neutral-900 text-sm tracking-tight font-sans" style={{}}>AV</span>
</div>
<div>
<div className="text-neutral-900 tracking-tight font-sans" style={{}}>AviCam</div>
<div className="text-xs text-neutral-500 font-sans" style={{}}>Observe more. Disturb less.</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
<a className="text-neutral-600 hover:text-neutral-900 transition-colors font-sans" href="#features" style={{}}>Features</a>
<a className="text-neutral-600 hover:text-neutral-900 transition-colors font-sans" href="#insights" style={{}}>Insights</a>
<a className="text-neutral-600 hover:text-neutral-900 transition-colors font-sans" href="#pricing" style={{}}>Pricing</a>
<a className="text-neutral-600 hover:text-neutral-900 transition-colors font-sans" href="#faq" style={{}}>FAQ</a>
<a className="text-neutral-600 hover:text-neutral-900 transition-colors font-sans" href="#" style={{}}>Privacy</a>
<a className="text-neutral-600 hover:text-neutral-900 transition-colors font-sans" href="#" style={{}}>Terms</a>
</div>
</div>
<div className="mt-6 text-xs text-neutral-500 font-sans" style={{}}>© <span className="font-sans" id="year" style={{}}>2025</span> AviCam Labs, Inc. All rights reserved.</div>
</div>
</footer>


    </>
  );
}
