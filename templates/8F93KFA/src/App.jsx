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
      
      (function () {
        // Init lucide icons
        window.lucide?.createIcons({ attrs: { 'stroke-width': 1.5 } });

        // Mobile menu toggle
        const btn = document.getElementById('mobileMenuBtn');
        const menu = document.getElementById('mobileMenu');
        btn?.addEventListener('click', () => {
          menu?.classList.toggle('hidden');
        });

        // Fake form submit note
        window.fakeSubmit = function () {
          const note = document.getElementById('formNote');
          if (!note) return;
          note.textContent = 'Thanks! We’ll be in touch shortly.';
          note.classList.remove('text-slate-400');
          note.classList.add('text-emerald-400');
          setTimeout(() => {
            note.textContent = '';
            note.classList.remove('text-emerald-400');
            note.classList.add('text-slate-400');
          }, 3000);
        };

        // Footer year
        const yearEl = document.getElementById('year');
        if (yearEl) yearEl.textContent = new Date().getFullYear() + ' OrangeBench. All rights reserved.';

        // Staggered fade/slide/blur in on intersection
        const animated = document.querySelectorAll('[data-animate]');
        animated.forEach((el, i) => {
          el.style.transitionDelay = Math.min(i * 80, 600) + 'ms';
        });
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'translate-y-8', 'blur-sm');
                entry.target.classList.add('opacity-100', 'translate-y-0', 'blur-0');
                io.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.12 }
        );
        animated.forEach((el) => io.observe(el));

        // Chart (guarded; runs only if canvas is present)
        const chartEl = document.getElementById('opsChart');
        if (chartEl && window.Chart) {
          const ctx = chartEl.getContext('2d');
          const gradient = ctx.createLinearGradient(0, 0, 0, 240);
          gradient.addColorStop(0, 'rgba(99,102,241,.45)');
          gradient.addColorStop(1, 'rgba(99,102,241,0.02)');
          new Chart(ctx, {
            type: 'line',
            data: {
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              datasets: [
                {
                  label: 'Uptime %',
                  data: [99.1, 99.3, 99.7, 99.9, 99.95, 99.96, 99.98, 99.99],
                  borderColor: 'rgba(99,102,241,1)',
                  backgroundColor: gradient,
                  fill: true,
                  tension: 0.35,
                  borderWidth: 2,
                  pointRadius: 0
                },
                {
                  label: 'Cost idx',
                  data: [100, 98, 96, 95, 94, 93, 92, 90],
                  borderColor: 'rgba(16,185,129,0.9)',
                  backgroundColor: 'transparent',
                  tension: 0.35,
                  borderDash: [4, 4],
                  borderWidth: 2,
                  pointRadius: 0
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false } },
              scales: {
                x: {
                  grid: { color: 'rgba(255,255,255,0.05)' },
                  ticks: { color: 'rgba(203,213,225,0.8)', font: { family: 'Inter' } }
                },
                y: {
                  grid: { color: 'rgba(255,255,255,0.05)' },
                  ticks: { color: 'rgba(203,213,225,0.8)', font: { family: 'Inter' } }
                }
              }
            }
          });
        }
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
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/3dglassherobg-xhxFCKvVSQv5b7qPD9xIZ5yC" width="100%"></iframe></div></div>

<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" style={{}}></div>
<div className="absolute inset-0 w-full h-full bg-center bg-cover opacity-20 bg-fixed" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8f3c8090-9d8c-424b-b28b-784049d2b6c8_800w.jpg\')'}}></div>
<div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_50%_-10%,rgba(99,102,241,0.18),transparent)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_10%_20%,rgba(236,72,153,0.12),transparent)]"></div>
</div>

<header className="relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<a className="flex items-center space-x-2" href="#">
<span className="text-2xl font-medium tracking-tight">
<span className="text-slate-200" style={{}}>orange</span><span className="text-orange-400">bench</span>
</span>
</a>
<nav className="hidden md:flex space-x-8 items-center">
<a className="transition font-normal text-slate-300 hover:text-white" href="#" style={{}}>Home</a>
<a className="transition font-normal text-slate-300 hover:text-white" href="#about" style={{}}>About</a>
<a className="transition font-normal text-slate-300 hover:text-white" href="#services" style={{}}>Services</a>
<a className="transition font-normal text-slate-300 hover:text-white" href="#contact" style={{}}>Contact</a>
<a className="inline-flex items-center transition hover:bg-white/20 text-sm font-medium text-white bg-orange-500/10 rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur" href="#lead">
<svg className="lucide lucide-circle-arrow-left mr-2 w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="circle-arrow-left" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m12 8-4 4 4 4"></path><path d="M16 12H8"></path></svg>
              Get Started
            </a>
</nav>
<button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10" id="mobileMenuBtn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>

<div className="md:hidden hidden" id="mobileMenu">
<div className="px-4 pb-4 space-y-2">
<a className="block px-3 py-2 rounded-lg bg-white/5 text-slate-200" href="#" style={{}}>Home</a>
<a className="block px-3 py-2 rounded-lg bg-white/5 text-slate-200" href="#about" style={{}}>About</a>
<a className="block px-3 py-2 rounded-lg bg-white/5 text-slate-200" href="#services" style={{}}>Services</a>
<a className="block px-3 py-2 rounded-lg bg-white/5 text-slate-200" href="#contact" style={{}}>Contact</a>
</div>
</div>
</header>

<section className="relative sm:pt-20 pt-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
<div className="relative">
<div className="inline-flex items-center space-x-2 rounded-full border px-3 py-1 text-xs border-white/10 bg-white/5 text-slate-300 transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0 blur-0" data-animate="" style={{transitionDelay: '0ms'}}>
<svg className="lucide lucide-shield-check w-3.5 h-3.5 text-emerald-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-medium">ISO-aligned practices</span>
</div>
<h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-white transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0 blur-0" data-animate="" style={{transitionDelay: '80ms'}}>
            Reliable IT Solutions for Small &amp; Medium Businesses in Indianapolis
          </h1>
<p className="mt-5 text-base sm:text-lg leading-relaxed max-w-2xl text-slate-300 transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0 blur-0" data-animate="" style={{transitionDelay: '160ms'}}>
            Maximize uptime, reduce IT headaches, and empower your team with expert support and cloud solutions.
          </p>
<div className="mt-8 grid sm:grid-cols-3 gap-4">
<div className="flex items-center space-x-3 rounded-xl border px-4 py-3 bg-white/5 border-white/10 transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0 blur-0" data-animate="" style={{transitionDelay: '240ms'}}>
<svg className="lucide lucide-cloud w-5 h-5 text-sky-400" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
<span className="text-sm font-medium text-slate-200" style={{}}>Cloud-first</span>
</div>
<div className="flex items-center space-x-3 rounded-xl border px-4 py-3 bg-white/5 border-white/10 transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0 blur-0" data-animate="" style={{transitionDelay: '320ms'}}>
<svg className="lucide lucide-server w-5 h-5 text-indigo-400" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
<span className="text-sm font-medium text-slate-200" style={{}}>Managed Ops</span>
</div>
<div className="flex items-center space-x-3 rounded-xl border px-4 py-3 bg-white/5 border-white/10 transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0 blur-0" data-animate="" style={{transitionDelay: '400ms'}}>
<svg className="lucide lucide-lock w-5 h-5 text-emerald-400" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="text-sm font-medium text-slate-200" style={{}}>Zero-trust</span>
</div>
</div>
<div className="mt-10 flex items-center space-x-4">
<a className="inline-flex items-center transition hover:bg-slate-100 duration-700 ease-out will-change-transform opacity-100 text-sm font-medium text-slate-900 bg-orange-500 rounded-lg pt-3 pr-5 pb-3 pl-5 blur-0 translate-y-0" data-animate="" href="#lead" style={{transitionDelay: '480ms'}}>
<svg className="lucide lucide-flashlight w-4 h-4 mr-2" data-lucide="flashlight" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"></path><line x1="6" x2="18" y1="6" y2="6"></line><line x1="12" x2="12" y1="12" y2="12"></line></svg>
              Schedule Your Free Consultation
            </a>
<a className="inline-flex items-center text-sm text-slate-300 hover:text-white transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0 blur-0" data-animate="" href="#services" style={{transitionDelay: '560ms'}}>
<svg className="lucide lucide-play-circle w-4 h-4 mr-2" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
              Explore services
            </a>
</div>
</div>

<div className="relative">
<div className="aspect-[4/3] overflow-hidden border rounded-2xl border-white/10 transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0 blur-0" data-animate="" style={{transitionDelay: '600ms'}}>
<img alt="Small business team collaborating in an office" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2834e6e0-db44-4c9f-b6b1-0413fe287ad7_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-tr to-transparent from-slate-950/30 via-slate-900/0" style={{}}></div>
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-6 left-6 rounded-xl backdrop-blur border px-3 py-2 shadow-sm bg-white/10 border-white/10">
<div className="flex items-center space-x-2 text-slate-200" style={{}}>
<svg className="lucide lucide-cloud w-4 h-4 text-sky-400" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
<span className="text-xs">Cloud Sync</span>
</div>
</div>
<div className="absolute top-1/2 -translate-y-1/2 left-8 rounded-xl backdrop-blur border px-3 py-2 shadow-sm bg-white/10 border-white/10">
<div className="flex items-center space-x-2 text-slate-200" style={{}}>
<svg className="lucide lucide-network w-4 h-4 text-indigo-400" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
<span className="text-xs">Secure Network</span>
</div>
</div>
<div className="absolute bottom-8 right-8 rounded-xl backdrop-blur border px-3 py-2 shadow-sm bg-white/10 border-white/10">
<div className="flex items-center space-x-2 text-slate-200" style={{}}>
<svg className="lucide lucide-shield-check w-4 h-4 text-emerald-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs">Compliance</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-14">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="border rounded-2xl backdrop-blur bg-white/5 border-white/10 transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0 blur-0" data-animate="" style={{transitionDelay: '600ms'}}>
<div className="sm:px-10 sm:py-8 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#fe990b]/20 to-[#f9893e]/5 pt-6 pr-6 pb-6 pl-6 scale-100">
<p className="sm:text-sm text-xs text-slate-300 text-center mb-6" style={{}}>Trusted by modern teams</p>
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
<div className="flex items-center justify-center space-x-2 text-slate-300 transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0 blur-0" data-animate="" style={{transitionDelay: '600ms'}}>
<svg className="lucide lucide-cloud w-5 h-5 text-sky-400" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
<span className="font-medium">Nimbus</span>
</div>
<div className="flex items-center justify-center space-x-2 text-slate-300 transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0 blur-0" data-animate="" style={{transitionDelay: '600ms'}}>
<svg className="lucide lucide-server-cog w-5 h-5 text-indigo-400" data-lucide="server-cog" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10.852 14.772-.383.923"></path><path d="M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923"></path><path d="m13.148 9.228.383-.923"></path><path d="m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544"></path><path d="m14.772 10.852.923-.383"></path><path d="m14.772 13.148.923.383"></path><path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"></path><path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"></path><path d="M6 18h.01"></path><path d="M6 6h.01"></path><path d="m9.228 10.852-.923-.383"></path><path d="m9.228 13.148-.923.383"></path></svg>
<span className="font-medium">CoreGrid</span>
</div>
<div className="flex items-center justify-center space-x-2 text-slate-300 transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0 blur-0" data-animate="" style={{transitionDelay: '600ms'}}>
<svg className="lucide lucide-cable w-5 h-5 text-emerald-400" data-lucide="cable" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z"></path><path d="M17 21v-2"></path><path d="M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10"></path><path d="M21 21v-2"></path><path d="M3 5V3"></path><path d="M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z"></path><path d="M7 5V3"></path></svg>
<span className="font-medium">Linkly</span>
</div>
<div className="flex items-center justify-center space-x-2 text-slate-300 transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0 blur-0" data-animate="" style={{transitionDelay: '600ms'}}>
<svg className="lucide lucide-database w-5 h-5 text-rose-400" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
<span className="font-medium">Dataforge</span>
</div>
<div className="flex items-center justify-center space-x-2 text-slate-300 transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0 blur-0" data-animate="" style={{transitionDelay: '600ms'}}>
<svg className="lucide lucide-scan-line w-5 h-5 text-amber-300" data-lucide="scan-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path></svg>
<span className="font-medium">Shieldon</span>
</div>
<div className="flex space-x-2 items-center justify-center text-slate-300 transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0 blur-0" data-animate="" style={{transitionDelay: '600ms'}}>
<svg className="lucide lucide-life-buoy w-5 h-5 text-fuchsia-400" data-lucide="life-buoy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path><circle cx="12" cy="12" r="4"></circle></svg>
<span className="font-medium">AtlasOps</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative sm:py-24 pt-16 pb-16" id="about">
<div className="max-w-7xl sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 mr-auto ml-auto pr-4 pl-4 items-center">
<div className="relative">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-white transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0 blur-0" data-animate="" style={{transitionDelay: '600ms'}}>IT That Works for Your Business, Not Against It</h2>
<p className="mt-4 leading-relaxed text-slate-300 transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0 blur-0" data-animate="" style={{transitionDelay: '600ms'}}>
            Orange Bench provides tailored IT services designed to keep your systems running smoothly. From cloud solutions to 24/7 monitoring, we make sure technology supports your growth, not slows it down.
          </p>
<ul className="mt-6 space-y-3 text-slate-200" style={{}}>
<li className="flex items-start transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0 blur-0" data-animate="" style={{transitionDelay: '600ms'}}><svg className="lucide lucide-check-circle w-5 h-5 mr-2 mt-0.5 text-emerald-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Proactive monitoring to prevent downtime</li>
<li className="flex items-start transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0 blur-0" data-animate="" style={{transitionDelay: '600ms'}}><svg className="lucide lucide-check-circle w-5 h-5 mr-2 mt-0.5 text-emerald-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Cost-effective IT solutions tailored for SMBs</li>
<li className="flex items-start transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0 blur-0" data-animate="" style={{transitionDelay: '600ms'}}><svg className="lucide lucide-check-circle w-5 h-5 mr-2 mt-0.5 text-emerald-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> 24/7 support from certified professionals</li>
</ul>
<div className="mt-8 flex items-center space-x-4">
<a className="inline-flex items-center transition hover:bg-orange-400 duration-700 ease-out will-change-transform opacity-100 text-sm font-medium text-slate-900 bg-orange-500 rounded-lg pt-3 pr-5 pb-3 pl-5 blur-0 translate-y-0" data-animate="" href="#lead" style={{transitionDelay: '600ms'}}>
<svg className="lucide lucide-map w-4 h-4 mr-2" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
              Get Your Customized IT Plan
            </a>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0 blur-0" data-animate="" style={{transitionDelay: '600ms'}}>
<img alt="Team at work" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a00168df-f4f3-45b4-860f-696b31190dc8_1600w.jpg"/>
</div>
<div className="absolute -bottom-6 -left-6 hidden sm:block">
</div>
</div>
</div>
</section>

<section className="relative py-16 sm:py-24" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
<div className="">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0 blur-0" data-animate="" style={{transitionDelay: '600ms'}}>Our Expertise Covers Every Aspect of IT</h2>
<p className="mt-3 text-slate-300 transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0 blur-0" data-animate="" style={{transitionDelay: '600ms'}}>Whether you need cloud migration, network setup, or helpdesk support, Orange Bench has you covered. Our team ensures your IT environment is secure, efficient, and scalable.</p>
</div>
<a className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0 blur-0" data-animate="" href="#" style={{transitionDelay: '600ms'}}>
<svg className="lucide lucide-library w-4 h-4 mr-2" data-lucide="library" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6 4 14"></path><path d="M12 6v14"></path><path d="M8 8v12"></path><path d="M4 4v16"></path></svg>
            Learn More About Our Services
          </a>
</div>
<div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="sm:p-12 overflow-hidden bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] via-orange-500/30 from-amber-400/30 to-amber-400/30 border-white/10 border rounded-3xl px-1 py-1 transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0 blur-0" data-animate="" style={{transitionDelay: '600ms'}}>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 flex bg-sky-500/15 border-sky-500/20 border rounded-lg items-center justify-center" style={{}}>
<svg className="lucide lucide-cog w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="cog" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(211, 146, 54)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.27 7 3.34"></path><path d="m11 13.73-4 6.93"></path><path d="M12 22v-2"></path><path d="M12 2v2"></path><path d="M14 12h8"></path><path d="m17 20.66-1-1.73"></path><path d="m17 3.34-1 1.73"></path><path d="M2 12h2"></path><path d="m20.66 17-1.73-1"></path><path d="m20.66 7-1.73 1"></path><path d="m3.34 17 1.73-1"></path><path d="m3.34 7 1.73 1"></path><circle cx="12" cy="12" r="2"></circle><circle cx="12" cy="12" r="8"></circle></svg>
</div>
<h3 className="text-lg tracking-tight font-semibold">Cloud Services</h3>
</div>
<svg className="lucide lucide-arrow-up-right w-4 h-4 group-hover:text-white text-slate-400" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<p className="mt-3 text-sm text-slate-300" style={{}}>Move to secure, scalable cloud systems.</p>
</div>

<div className="sm:p-12 overflow-hidden bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] via-orange-500/30 from-amber-400/30 to-amber-400/30 border-white/10 border rounded-3xl pt-4 pr-4 pb-4 pl-4 transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0 blur-0" data-animate="" style={{transitionDelay: '600ms'}}>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 flex bg-indigo-500/15 border-indigo-500/20 border rounded-lg items-center justify-center" style={{}}>
<svg className="lucide lucide-badge-alert w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="badge-alert" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(211, 146, 54)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
</div>
<h3 className="text-lg tracking-tight font-semibold">Network &amp; Infrastructure</h3>
</div>
<svg className="lucide lucide-arrow-up-right w-4 h-4 group-hover:text-white text-slate-400" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<p className="text-sm mt-3 text-slate-300" style={{}}>Build a reliable and efficient IT backbone.</p>
</div>

<div className="sm:p-12 overflow-hidden bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] via-orange-500/30 from-amber-400/30 to-amber-400/30 border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 transition-all duration-700 ease-out will-change-transform opacity-100 translate-y-0 blur-0" data-animate="" style={{transitionDelay: '600ms'}}>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 flex bg-slate-900/15 border-emerald-500/20 border rounded-lg items-center justify-center">
<svg className="lucide lucide-eclipse w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="eclipse" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(211, 146, 54)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a7 7 0 1 0 10 10"></path></svg>
</div>
<h3 className="text-lg tracking-tight font-semibold">Helpdesk Support</h3>
</div>
<svg className="lucide lucide-arrow-up-right w-4 h-4 group-hover:text-white text-slate-400" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<p className="mt-3 text-sm text-slate-300" style={{}}>Rapid responses for your team when issues arise.</p>
</div>
</div>
</div>
</section>

<section className="relative py-16 sm:py-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
<div className="">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out will-change-transform" data-animate="" style={{transitionDelay: '600ms'}}>Trusted by Businesses Like Yours</h2>
<p className="mt-3 text-slate-300 opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out will-change-transform" data-animate="" style={{transitionDelay: '600ms'}}>See how we’ve helped local businesses streamline their IT, reduce downtime, and increase productivity. Our clients trust us for reliable, proactive solutions.</p>
</div>
<a className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out will-change-transform" data-animate="" href="#" style={{transitionDelay: '600ms'}}>
<svg className="lucide lucide-book-open-text w-4 h-4 mr-2" data-lucide="book-open-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M16 12h2"></path><path d="M16 8h2"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path><path d="M6 12h2"></path><path d="M6 8h2"></path></svg>
            Read More Success Stories
          </a>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">
<div className="sm:p-12 overflow-hidden bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] via-orange-500/30 from-amber-400/30 to-amber-400/30 border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out will-change-transform" data-animate="" style={{transitionDelay: '600ms'}}>
<svg className="lucide lucide-quote w-5 h-5 mb-3 text-slate-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="italic text-slate-200" style={{}}>“Orange Bench transformed our IT systems — we’ve never had fewer interruptions.”</p>
</div>
<div className="sm:p-12 overflow-hidden bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] via-orange-500/30 from-amber-400/30 to-amber-400/30 border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out will-change-transform" data-animate="" style={{transitionDelay: '600ms'}}>
<svg className="lucide lucide-quote w-5 h-5 mb-3 text-slate-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="italic text-slate-200" style={{}}>“Professional, responsive, and knowledgeable — the team really cares.”</p>
</div>
<div className="sm:p-12 overflow-hidden bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] via-orange-500/30 from-amber-400/30 to-amber-400/30 border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out will-change-transform" data-animate="" style={{transitionDelay: '600ms'}}>
<svg className="lucide lucide-quote w-5 h-5 mb-3 text-slate-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="italic text-slate-200" style={{}}>“Cloud migration was seamless. Highly recommend their services.”</p>
</div>
</div>
</div>
</section>


<section className="relative sm:py-24 pt-16 pb-16" id="lead">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="sm:p-12 overflow-hidden bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] via-orange-500/30 from-amber-400/30 to-amber-400/30 border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out will-change-transform" data-animate="" style={{transitionDelay: '600ms'}}>
<div className="grid lg:grid-cols-2 gap-10 items-start">
<div className="">
<div className="inline-flex items-center space-x-2 rounded-full border px-3 py-1 text-xs bg-white/5 border-white/10 text-slate-300 opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out will-change-transform" data-animate="" style={{transitionDelay: '600ms'}}>
<svg className="lucide lucide-rocket w-3.5 h-3.5 text-orange-400" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
<span className="font-medium">Kickoff in days</span>
</div>
<h3 className="mt-4 text-3xl sm:text-4xl tracking-tight font-semibold opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out will-change-transform" data-animate="" style={{transitionDelay: '600ms'}}>Take Control of Your IT Today</h3>
<p className="mt-3 text-slate-300 opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out will-change-transform" data-animate="" style={{transitionDelay: '600ms'}}>Book a free consultation and discover how Orange Bench can make technology work for your business.</p>
</div>
<div className="rounded-2xl backdrop-blur border p-6 sm:p-8 bg-white/5 border-white/10 opacity-0 translate-y-8 blur-sm transition-all duration-700 ease-out will-change-transform" data-animate="" style={{transitionDelay: '600ms'}}>
<form className="space-y-4" onsubmit="event.preventDefault(); fakeSubmit();">
<div className="grid sm:grid-cols-2 gap-4">
<div className="">
<label className="block text-xs mb-1 text-slate-300" style={{}}>Name*</label>
<input className="w-full placeholder-slate-400 border focus:border-white/20 rounded-lg px-3 py-2 outline-none bg-white/5 text-white border-white/10" placeholder="Your full name" required="" style={{}} type="text"/>
</div>
<div className="">
<label className="block text-xs mb-1 text-slate-300" style={{}}>Company</label>
<input className="w-full placeholder-slate-400 border focus:border-white/20 rounded-lg px-3 py-2 outline-none bg-white/5 text-white border-white/10" placeholder="Company name" style={{}} type="text"/>
</div>
</div>
<div className="">
<label className="block text-xs mb-1 text-slate-300" style={{}}>Email*</label>
<input className="w-full placeholder-slate-400 border focus:border-white/20 rounded-lg px-3 py-2 outline-none bg-white/5 text-white border-white/10" placeholder="you@company.com" required="" style={{}} type="email"/>
</div>
<div className="">
<label className="block text-xs mb-1 text-slate-300" style={{}}>IT Needs / Message</label>
<textarea className="w-full placeholder-slate-400 border focus:border-white/20 rounded-lg px-3 py-2 outline-none bg-white/5 text-white border-white/10" placeholder="Tell us about your goals, challenges, and timelines..." rows="4" style={{}}></textarea>
</div>
<button className="w-full inline-flex items-center justify-center rounded-lg px-4 py-2.5 font-medium transition bg-white text-slate-900 hover:bg-slate-100" style={{}}>
<svg className="lucide lucide-calendar-check w-4 h-4 mr-2" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
                  Book Your Free Consultation
                </button>
<p className="text-xs text-center text-slate-400" id="formNote" style={{}}></p>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="relative border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

<div className="flex flex-wrap gap-3 mb-8 items-center">
<span className="text-xs mr-2 text-slate-400" style={{}}>Certifications &amp; Local Partnerships:</span>
<span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs bg-white/5 border-white/10 text-slate-300" style={{}}>
<svg className="lucide lucide-shield-check w-3.5 h-3.5 text-emerald-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Microsoft Partner
          </span>
<span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs bg-white/5 border-white/10 text-slate-300" style={{}}>
<svg className="lucide lucide-badge-check w-3.5 h-3.5 text-sky-400" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg> CompTIA Security+
          </span>
<span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs bg-white/5 border-white/10 text-slate-300" style={{}}>
<svg className="lucide lucide-building-2 w-3.5 h-3.5 text-amber-300" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg> Indy Chamber
          </span>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="">
<div className="flex items-center space-x-2">
<span className="text-lg tracking-tight font-medium"><span className="text-slate-200" style={{}}>orange</span><span className="text-orange-400">bench</span></span>
</div>
<p className="mt-3 text-sm text-slate-400" style={{}}>Secure, reliable, and human IT for modern teams.</p>
</div>
<div className="">
<div className="text-sm font-medium mb-3">Company</div>
<ul className="space-y-2 text-sm text-slate-300" style={{}}>
<li><a className="hover:text-white" href="#about">About</a></li>
<li><a className="hover:text-white" href="#">Careers</a></li>
<li><a className="hover:text-white" href="#">Press</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium mb-3">Services</div>
<ul className="space-y-2 text-sm text-slate-300" style={{}}>
<li><a className="hover:text-white" href="#services">Cloud</a></li>
<li><a className="hover:text-white" href="#services">Security</a></li>
<li><a className="hover:text-white" href="#services">Support</a></li>
</ul>
</div>
<div id="contact">
<div className="text-sm font-medium mb-3">Contact</div>
<ul className="space-y-2 text-sm text-slate-300" style={{}}>
<li className="flex items-center"><svg className="lucide lucide-phone w-4 h-4 mr-2" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> (555) 555‑0199</li>
<li className="flex items-center"><svg className="lucide lucide-mail w-4 h-4 mr-2" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> hello@orangebench.io</li>
<li className="flex items-center"><svg className="lucide lucide-map-pin w-4 h-4 mr-2" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Indianapolis, IN</li>
</ul>
</div>
</div>
<div className="mt- flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500" style={{}}>
<p>© <span id="year">2025 OrangeBench. All rights reserved.</span></p>
<div className="flex items-center space-x-4 mt-2 sm:mt0">
<a className="hover:text-slate-300" href="#">Privacy</a>
<a className="hover:text-slate-300" href="#">Terms</a>
<a className="hover:text-slate-300" href="#">Status</a>
</div>
</div>
</div>
</footer>





    </>
  );
}
