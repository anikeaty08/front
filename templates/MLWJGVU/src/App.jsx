import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Chart.js - Engagement overview
    const ctx = document.getElementById('engagementChart');
    if (ctx && window.Chart) {
      const dpi = window.devicePixelRatio || 1;
      const canvas = ctx.getContext('2d');

      const gradient1 = canvas.createLinearGradient(0, 0, 0, ctx.height || 320 * dpi);
      gradient1.addColorStop(0, 'rgba(255,255,255,0.35)');
      gradient1.addColorStop(1, 'rgba(255,255,255,0.05)');

      const gradient2 = canvas.createLinearGradient(0, 0, 0, ctx.height || 320 * dpi);
      gradient2.addColorStop(0, 'rgba(244,114,182,0.45)'); // pink-400
      gradient2.addColorStop(1, 'rgba(244,114,182,0.08)');

      const labels = Array.from({ length: 12 }, (_, i) => `W${i + 1}`);
      const data = {
        labels,
        datasets: [
          {
            type: 'line',
            label: 'Sessions',
            data: [820, 910, 860, 980, 1120, 1040, 1210, 1180, 1260, 1330, 1290, 1410],
            borderColor: 'rgba(255,255,255,0.9)',
            backgroundColor: gradient1,
            fill: true,
            tension: 0.35,
            pointRadius: 0,
            borderWidth: 2
          },
          {
            type: 'line',
            label: 'Conversions',
            data: [72, 80, 77, 85, 96, 92, 103, 97, 110, 116, 112, 124],
            borderColor: 'rgba(244,114,182,0.9)',
            backgroundColor: gradient2,
            fill: false,
            tension: 0.35,
            pointRadius: 0,
            borderWidth: 2
          },
          {
            type: 'bar',
            label: 'Retention (%)',
            data: [41, 43, 42, 44, 46, 45, 47, 48, 49, 50, 49, 51],
            backgroundColor: 'rgba(59,130,246,0.25)',
            borderRadius: 6,
            maxBarThickness: 16,
            yAxisID: 'y1'
          }
        ]
      };

      new Chart(ctx, {
        data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: 'index', intersect: false },
          plugins: {
            legend: {
              labels: { color: 'rgba(243,244,246,0.85)', boxWidth: 10, usePointStyle: true },
              position: 'bottom'
            },
            tooltip: {
              backgroundColor: 'rgba(17,24,39,0.9)',
              borderColor: 'rgba(255,255,255,0.1)',
              borderWidth: 1,
              titleColor: '#fff',
              bodyColor: 'rgba(229,231,235,1)',
              padding: 10,
              displayColors: true
            }
          },
          scales: {
            x: {
              grid: { color: 'rgba(255,255,255,0.06)' },
              ticks: { color: 'rgba(209,213,219,0.8)', maxRotation: 0 }
            },
            y: {
              grid: { color: 'rgba(255,255,255,0.06)' },
              ticks: { color: 'rgba(209,213,219,0.8)' },
              beginAtZero: true
            },
            y1: {
              position: 'right',
              grid: { drawOnChartArea: false },
              ticks: { color: 'rgba(209,213,219,0.8)' },
              min: 0,
              max: 100
            }
          }
        }
      });
    }

    // FAQ accordion (progressive enhancement)
    (function () {
      const sections = document.querySelectorAll('section .max-w-3xl > button, section .max-w-3xl.border-t > button');
      sections.forEach((btn, idx) => {
        const panel = btn.parentElement.querySelector('[id^="faq-panel"]') || btn.nextElementSibling;
        const icon = btn.querySelector('svg');
        // Initialize ARIA
        const panelId = panel?.id || `faq-panel-${idx + 1}`;
        panel.id = panelId;
        btn.setAttribute('aria-controls', panelId);
        btn.setAttribute('aria-expanded', 'false');
        if (icon) icon.classList.add('transition-transform', 'duration-200');

        btn.addEventListener('click', () => {
          const isOpen = panel.classList.contains('hidden') === false;
          // Close all
          document.querySelectorAll('[id^="faq-panel-"]').forEach(p => {
            p.classList.add('hidden');
            const b = p.parentElement.querySelector('button');
            const i = b?.querySelector('svg');
            if (b) b.setAttribute('aria-expanded', 'false');
            if (i) i.classList.remove('rotate-180');
          });
          // Toggle current
          if (!isOpen) {
            panel.classList.remove('hidden');
            btn.setAttribute('aria-expanded', 'true');
            if (icon) icon.classList.add('rotate-180');
          } else {
            panel.classList.add('hidden');
            btn.setAttribute('aria-expanded', 'false');
            if (icon) icon.classList.remove('rotate-180');
          }
        });
      });
    })();

    // Respect reduced motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('[style*="animation"]').forEach(el => el.style.animation = 'none');
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d1bad9c9-6a46-44d0-b72f-f37f5e6228f5_3840w.jpg")'}}></div>
<header className="max-w-7xl flex ring-1 ring-white/10 bg-white/5 rounded-2xl mt-6 mr-auto mb-6 ml-auto pt-6 pr-6 pb-6 pl-6 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-3">
<div className="">
<div className="text-sm font-semibold tracking-tight font-geist text-gray-100">QuantaBase</div>
<div className="text-xs text-gray-400 font-geist">Realtime analytics console</div>
</div>
</div>
<div className="flex gap-3 items-center">
<button className="hidden sm:inline-flex hover:bg-white/80 transition-colors duration-150 gap-2 edit-mode text-sm font-semibold text-gray-900 bg-white/90 border-white/20 border rounded-full pt-2 pr-4 pb-2 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] items-center font-geist" style={{fontFamily: 'Inter, ui-sans-serif, system-ui'}}>
  
  New report
</button>
</div>
</header>
<main className="max-w-7xl mr-auto ml-auto pr-6 pl-6">

<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
<div className="ring-1 ring-white/15 bg-white/10 backdrop-blur-xl bg-cover rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-sm bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c9ea68df-7f4e-4ebe-a09a-0acd862bd8a8_800w.jpg)] bg-center" style={{animation: 'fadeUp .6s ease-out both', animationDelay: '.05s'}}>
<div className="flex items-center justify-between">
<div className="text-xs text-gray-400 font-geist">001</div>
<span className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-white/10 ring-1 ring-white/15 backdrop-blur">
<svg className="lucide lucide-sliders-horizontal text-gray-200" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '18px', height: '18px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line></svg>
</span>
</div>
<div className="mt-2 text-sm font-semibold tracking-tight text-gray-100 font-geist">Configure workspace</div>
<p className="mt-2 text-xs text-gray-300 font-geist">Invite teammates, set roles, and tailor permissions for each project.</p>
<div className="mt-4 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-white/70 rounded-full" style={{width: '62%'}}></div>
</div>
<div className="mt-1.5 text-[11px] text-gray-400 font-geist">Setup progress 62%</div>
</div>
<div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 shadow-sm ring-1 ring-white/15" style={{animation: 'fadeUp .6s ease-out both', animationDelay: '.12s'}}>
<div className="flex items-center justify-between">
<div className="text-xs text-gray-400 font-geist">002</div>
<span className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-white/10 ring-1 ring-white/15 backdrop-blur">
<svg className="lucide lucide-wallet text-gray-200" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '18px', height: '18px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</span>
</div>
<div className="mt-2 text-sm font-semibold tracking-tight font-geist text-gray-100">Track spend</div>
<p className="text-xs text-gray-300 mt-2 font-geist">Get alerts on overages and seasonality spikes to act early.</p>
<div className="mt-3 flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-[11px] ring-1 ring-red-500/20 text-red-300 bg-red-500/10 rounded-full pt-0.5 pr-2 pb-0.5 pl-2 font-geist">
<svg className="lucide lucide-trending-up" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg> +12.8%
          </span>
<span className="text-[11px] text-gray-400 font-geist">vs last month</span>
</div>
</div>
<div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 shadow-sm ring-1 ring-white/15" style={{animation: 'fadeUp .6s ease-out both', animationDelay: '.19s'}}>
<div className="flex items-center justify-between">
<div className="text-xs text-gray-400 font-geist">003</div>
<span className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-white/10 ring-1 ring-white/15 backdrop-blur">
<svg className="lucide lucide-target text-gray-200" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '18px', height: '18px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</span>
</div>
<div className="mt-2 text-sm font-semibold tracking-tight font-geist text-gray-100">Smart budgets</div>
<p className="mt-2 text-xs text-gray-300 font-geist">Allocate by ROI and automatically rebalance when trends shift.</p>
<div className="mt-3 flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-300 ring-1 ring-pink-500/20 font-geist">
<svg className="lucide lucide-flag" data-lucide="flag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" x2="4" y1="22" y2="15"></line></svg> 8 goals
          </span>
<span className="text-[11px] text-gray-400 font-geist">active</span>
</div>
</div>
<div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 shadow-sm ring-1 ring-white/15" style={{animation: 'fadeUp .6s ease-out both', animationDelay: '.26s'}}>
<div className="flex items-center justify-between">
<div className="text-xs text-gray-400 font-geist">004</div>
<span className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-white/10 ring-1 ring-white/15 backdrop-blur">
<svg className="lucide lucide-boxes text-gray-200" data-lucide="boxes" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '18px', height: '18px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path><path d="m7 16.5-4.74-2.85"></path><path d="m7 16.5 5-3"></path><path d="M7 16.5v5.17"></path><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path><path d="m17 16.5-5-3"></path><path d="m17 16.5 4.74-2.85"></path><path d="M17 16.5v5.17"></path><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path><path d="M12 8 7.26 5.15"></path><path d="m12 8 4.74-2.85"></path><path d="M12 13.5V8"></path></svg>
</span>
</div>
<div className="mt-2 text-sm font-semibold tracking-tight font-geist text-gray-100">Open components</div>
<p className="mt-2 text-xs text-gray-300 font-geist">Composable primitives with audits, changelogs, and strong docs.</p>
<div className="mt-3 flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-gray-200 ring-1 ring-white/15 backdrop-blur font-geist">
<svg className="lucide lucide-git-merge" data-lucide="git-merge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path></svg> 147 PRs
          </span>
<span className="text-[11px] text-gray-400 font-geist">last 90d</span>
</div>
</div>
</section>

<section className="grid md:grid-cols-2 gap-6 items-stretch bg-white/10 backdrop-blur-xl rounded-3xl shadow-sm p-6 md:p-8 ring-1 ring-white/15">

<div className="md:order-1" style={{animation: 'fadeIn .8s ease-out both', animationDelay: '.12s'}}>
<img alt="Dashboard abstract render" className="w-full h-full object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec79d014-d7ca-4526-b496-b6bb9ba0a50c_1600w.jpg" style={{aspectRatio: '4 / 3', display: 'block'}}/>
</div>

<div className="md:order-2 flex flex-col justify-center px-2 sm:px-6" style={{animation: 'slideIn .7s ease-out both', animationDelay: '.05s'}}>
<span className="inline-flex items-center gap-1 text-xs uppercase text-pink-300 tracking-tight mb-2 font-geist">
<svg className="lucide lucide-lock-keyhole" data-lucide="lock-keyhole" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '14px', height: '14px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="16" r="1"></circle><rect height="12" rx="2" width="18" x="3" y="10"></rect><path d="M7 10V7a5 5 0 0 1 10 0v3"></path></svg>
          Quanta Security
        </span>
<h1 className="text-4xl md:text-5xl tracking-tight leading-tight mb-4 font-space-grotesk font-semibold text-gray-100" style={{letterSpacing: '-0.01em'}}>
          Trust by design, privacy by default
        </h1>
<p className="text-gray-300 text-sm md:text-base mb-6 font-geist">
          QuantaBase is secure, transparent, and community-driven. Audit every change, export at any time, and stay in control of your data lifecycle.
        </p>
<div className="flex flex-wrap items-center gap-3 mb-4">
<button className="hover:bg-white/90 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] text-sm text-gray-900 bg-white/90 rounded-full pt-2 pr-4 pb-2 pl-4 font-geist">
            Get started
          </button>
<button className="px-3 py-2 rounded-full border border-white/15 text-sm text-gray-100 bg-white/10 hover:bg-white/20 backdrop-blur font-geist">
            Learn more
          </button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
<div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 flex items-start gap-3 ring-1 ring-white/15" style={{animation: 'fadeUp .7s ease-out both', animationDelay: '.18s'}}>
<span className="flex-none w-9 h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center backdrop-blur">
<svg className="lucide lucide-shield-check text-gray-200" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</span>
<div className="">
<div className="text-xs text-gray-400 mb-1 font-geist">Defense-in-depth</div>
<p className="text-sm text-gray-300 font-geist">Strong encryption, SSO/SAML, and granular API keys with rotation policies.</p>
</div>
</div>
<div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 flex items-start gap-3 ring-1 ring-white/15" style={{animation: 'fadeUp .7s ease-out both', animationDelay: '.24s'}}>
<span className="flex-none w-9 h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center backdrop-blur">
<svg className="lucide lucide-globe text-gray-200" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</span>
<div className="">
<div className="text-xs text-gray-400 mb-1 font-geist">Built in public</div>
<p className="text-sm text-gray-300 font-geist">Transparent roadmaps, open audits, and community-driven RFCs.</p>
</div>
</div>
</div>
</div>
</section>

<section className="grid lg:grid-cols-3 gap-6 mt-6">

<div className="lg:col-span-2 bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-7 shadow-sm ring-1 ring-white/15" style={{animation: 'fadeUp .7s ease-out both', animationDelay: '.1s'}}>
<div className="flex items-start justify-between gap-3">
<div className="">
<h2 className="text-lg md:text-xl font-semibold tracking-tight font-geist text-gray-100">Engagement overview</h2>
<p className="text-xs text-gray-400 mt-1 font-geist">Sessions, conversions, and retention by week</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg bg-white/10 border border-white/15 hover:bg-white/20 text-gray-100 backdrop-blur font-geist">
<svg className="lucide lucide-calendar" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
              Last 12 weeks
            </button>
<button className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg bg-white/10 border border-white/15 hover:bg-white/20 text-gray-100 backdrop-blur font-geist">
<svg className="lucide lucide-download" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
              Export
            </button>
</div>
</div>
<div className="mt-4 border-t border-white/10 pt-4">
<div className="relative h-[260px] md:h-[320px]">
<div className="absolute inset-0">
<div className="h-full w-full">
<div className="h-full w-full bg-white/5 rounded-xl">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">

<div className="h-full w-full">
<canvas className="" height="640" id="engagementChart" style={{display: 'block', boxSizing: 'border-box', height: '320px', width: '757px'}} width="1514"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:p-7 ring-1 ring-white/15 text-gray-100 bg-white/10 backdrop-blur-xl bg-cover rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-sm bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fa077b0f-a28c-4e66-9c85-7e26d5952d7b_1600w.jpg)]" style={{animation: '0.7s ease-out 0.18s 1 normal both running fadeUp', fontFamily: 'Inter, ui-sans-serif, system-ui'}}>
<div className="flex items-center justify-between">
<div className="">
<h3 className="text-lg font-medium tracking-tight text-gray-100 font-geist">Recent activity</h3>
<p className="text-xs text-gray-400 mt-1 font-geist">Events across projects</p>
</div>
<button className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg bg-white/10 border border-white/15 hover:bg-white/20 text-gray-100 backdrop-blur font-geist">
<svg className="lucide lucide-filter" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
            Filter
          </button>
</div>
<div className="mt-4 divide-y divide-white/10">

<div className="flex items-center gap-3 py-3">
<img alt="Aly avatar" className="h-9 w-9 rounded-lg object-cover ring-1 ring-white/15" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/bcaefeee-31cd-4c69-9a33-39ee0ad78c30_320w.jpg"/>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium truncate text-gray-100 font-geist">Aly K.</p>
<span className="text-[11px] text-gray-400 font-geist">2m ago</span>
</div>
<p className="text-xs text-gray-300 truncate font-geist">
                Published new dashboard "Northstar KPIs"
              </p>
</div>
<span className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-white/10 ring-1 ring-white/15 backdrop-blur">
<svg className="lucide lucide-layout-dashboard text-gray-200" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '18px', height: '18px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</span>
</div>

<div className="flex items-center gap-3 py-3">
<img alt="Jon avatar" className="h-9 w-9 rounded-lg object-cover ring-1 ring-white/15" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/76672c59-0193-4795-ba6b-96fe356d9cab_320w.jpg"/>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium truncate text-gray-100 font-geist">Jon S.</p>
<span className="text-[11px] text-gray-400 font-geist">18m ago</span>
</div>
<p className="text-xs text-gray-300 truncate font-geist">
                Rotated API key for project "Nova-Edge"
              </p>
</div>
<span className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-white/10 ring-1 ring-white/15 backdrop-blur">
<svg className="lucide lucide-key-round text-gray-200" data-lucide="key-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '18px', height: '18px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</span>
</div>

<div className="flex items-center gap-3 py-3">
<img alt="Mei avatar" className="h-9 w-9 rounded-lg object-cover ring-1 ring-white/15" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ad72c649-95c4-41ec-aaa0-dda91ae572f0_320w.jpg"/>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium truncate text-gray-100 font-geist">Mei W.</p>
<span className="text-[11px] text-gray-400 font-geist">1h ago</span>
</div>
<p className="text-xs text-gray-300 truncate font-geist">
                Added retention cohort for "Onboarding v3"
              </p>
</div>
<span className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-white/10 ring-1 ring-white/15 backdrop-blur">
<svg className="lucide lucide-users text-gray-200" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '18px', height: '18px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</span>
</div>

<div className="flex items-center gap-3 py-3">
<img alt="Priya avatar" className="h-9 w-9 rounded-lg object-cover ring-1 ring-white/15" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3868b0c2-14f2-40ec-a8dc-25b11f31285b_320w.jpg"/>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium truncate text-gray-100 font-geist">Priya D.</p>
<span className="text-[11px] text-gray-400 font-geist">3h ago</span>
</div>
<p className="text-xs text-gray-300 truncate font-geist">
                Synced 3 sources to warehouse "lakehouse-us"
              </p>
</div>
<span className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-white/10 ring-1 ring-white/15 backdrop-blur">
<svg className="lucide lucide-database text-gray-200" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '18px', height: '18px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<button className="text-xs text-gray-100 px-3 py-2 rounded-lg bg-white/10 border border-white/15 hover:bg-white/20 inline-flex items-center gap-1.5 backdrop-blur font-geist">
<svg className="lucide lucide-history text-gray-200" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
            View all
          </button>
<span className="text-[11px] text-gray-400 font-geist">Updated just now</span>
</div>
</div>
</section>
<section className="md:p-8 ring-1 ring-white/15 bg-white/10 backdrop-blur-xl bg-cover rounded-3xl mt-12 pt-6 pr-6 pb-6 pl-6 shadow-sm bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ee2039d9-2c6f-413c-8c82-3af8f83e3301_1600w.jpg)] bg-center" style={{animation: 'fadeUp .7s ease-out both', animationDelay: '.1s'}}>
<div className="text-center mb-8">
<h2 className="text-2xl md:text-4xl tracking-tight mb-3 text-white font-space-grotesk font-semibold">Choose your plan</h2>
<p className="text-gray-300 font-geist">Scale from prototype to enterprise with transparent pricing</p>
</div>
<div className="overflow-x-auto">
<table className="w-full">
<thead className="">
<tr className="border-b border-white/10">
<th className="text-left py-4 pr-6 text-sm font-medium text-gray-100 font-geist">Features</th>
<th className="text-center py-4 px-4 min-w-[120px]">
<div className="text-sm font-semibold text-gray-100 mb-1 font-geist">Starter</div>
<div className="text-xs text-gray-400 font-geist">Free</div>
</th>
<th className="text-center py-4 px-4 min-w-[120px] relative">
<div className="text-sm font-semibold text-gray-100 mb-1 font-geist">Pro</div>
<div className="text-xs text-gray-400 font-geist">$29/month</div>
</th>
<th className="text-center py-4 pl-4 min-w-[120px]">
<div className="text-sm font-semibold text-gray-100 mb-1 font-geist">Enterprise</div>
<div className="text-xs text-gray-400 font-geist">Custom</div>
</th>
</tr>
</thead>
<tbody className="divide-y divide-white/10">
<tr className="bg-white/10 backdrop-blur-lg">
<td className="py-3 pr-6 text-sm text-gray-300 font-geist">Data points per month</td>
<td className="text-center py-3 px-4 text-sm text-gray-400 font-geist">100K</td>
<td className="text-center py-3 px-4 text-sm text-gray-100 font-medium font-geist">10M</td>
<td className="text-sm text-gray-400 text-center pt-3 pb-3 pl-4 font-geist">Unlimited</td>
</tr>
<tr className="">
<td className="py-3 pr-6 text-sm text-gray-300 font-geist">Team members</td>
<td className="text-center py-3 px-4 text-sm text-gray-400 font-geist">3</td>
<td className="text-center py-3 px-4 text-sm text-gray-100 font-medium font-geist">25</td>
<td className="text-center py-3 pl-4 text-sm text-gray-400 font-geist">Unlimited</td>
</tr>
<tr className="bg-white/10 backdrop-blur-lg">
<td className="py-3 pr-6 text-sm text-gray-300 font-geist">Data retention</td>
<td className="text-center py-3 px-4 text-sm text-gray-400 font-geist">30 days</td>
<td className="text-center py-3 px-4 text-sm text-gray-100 font-medium font-geist">2 years</td>
<td className="text-sm text-gray-400 text-center pt-3 pb-3 pl-4 font-geist">Custom</td>
</tr>
<tr className="">
<td className="py-3 pr-6 text-sm text-gray-300 font-geist">API access</td>
<td className="text-center py-3 px-4">
<svg className="lucide lucide-check text-green-400 mx-auto" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path></svg>
</td>
<td className="text-center py-3 px-4">
<svg className="lucide lucide-check text-green-400 mx-auto" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path></svg>
</td>
<td className="text-center py-3 pl-4">
<svg className="lucide lucide-check text-green-400 mx-auto" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path></svg>
</td>
</tr>
<tr className="bg-white/10 backdrop-blur-lg">
<td className="py-3 pr-6 text-sm text-gray-300 font-geist">Advanced security</td>
<td className="text-center py-3 px-4">
<svg className="lucide lucide-x text-gray-500 mx-auto" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m18 6-12 12"></path><path d="m6 6 12 12"></path></svg>
</td>
<td className="text-center py-3 px-4">
<svg className="lucide lucide-check text-green-400 mx-auto" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path></svg>
</td>
<td className="text-center pt-3 pb-3 pl-4">
<svg className="lucide lucide-check text-green-400 mx-auto" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path></svg>
</td>
</tr>
<tr className="">
<td className="py-3 pr-6 text-sm text-gray-300 font-geist">Priority support</td>
<td className="text-center py-3 px-4">
<svg className="lucide lucide-x text-gray-500 mx-auto" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m18 6-12 12"></path><path d="m6 6 12 12"></path></svg>
</td>
<td className="text-center py-3 px-4">
<svg className="lucide lucide-x text-gray-500 mx-auto" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m18 6-12 12"></path><path d="m6 6 12 12"></path></svg>
</td>
<td className="text-center py-3 pl-4">
<svg className="lucide lucide-check text-green-400 mx-auto" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path></svg>
</td>
</tr>
</tbody>
</table>
</div>
<div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center">
<button className="hover:bg-white/20 text-sm text-gray-100 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur-lg bg-white/10 font-geist">Start Free</button>
<button className="hover:bg-white hover:text-gray-900 text-sm text-gray-900 bg-white rounded-full pt-2 pr-4 pb-2 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] font-geist">Upgrade to Pro</button>
<button className="hover:bg-white/20 text-sm text-gray-100 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur-lg bg-white/10 font-geist">Contact Sales</button>
</div>
</section>
<section className="md:p-8 ring-1 ring-white/15 bg-white/10 backdrop-blur-xl rounded-3xl mt-12 pt-6 pr-6 pb-6 pl-6 shadow-sm space-y-4" style={{animation: 'fadeUp .7s ease-out both', animationDelay: '.15s'}}>
<div className="text-center mb-8">
<h2 className="text-2xl md:text-4xl tracking-tight mb-3 font-space-grotesk font-semibold text-gray-100">Frequently asked questions</h2>
<p className="text-gray-300 font-geist">Everything you need to know about QuantaBase</p>
</div>
<div className="max-w-3xl mr-auto ml-auto"><button aria-controls="faq-panel-1" aria-expanded="false" className="w-full text-left p-4 flex items-center justify-between hover:bg-white/10 rounded-xl">
<span className="text-sm font-medium font-geist text-gray-100">How does QuantaBase ensure data privacy?</span>
<svg className="lucide lucide-chevron-down text-gray-400 transition-transform duration-200" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d=""></path></svg>
</button>
<div className="mt-2 hidden text-sm text-gray-300 leading-relaxed font-geist" id="faq-panel-1">
<p>We use end-to-end encryption in transit (TLS 1.3) and at rest (AES-256), strict RBAC with least-privilege defaults, and continuous audit logs for every action.</p>
<ul className="mt-2 list-disc pl-5 text-gray-400">
<li>SSO/SAML and hardware key support (WebAuthn)</li>
<li>Regional data residency options (EU/US)</li>
<li>Automated key rotation with fine-grained API scopes</li>
</ul>
</div>
</div>
<div className="max-w-3xl mr-auto ml-auto border-t border-white/10 pt-2">
<button aria-controls="faq-panel-2" aria-expanded="false" className="w-full text-left p-4 flex items-center justify-between hover:bg-white/10 rounded-xl">
<span className="text-sm font-medium font-geist text-gray-100">Can I self-host or export my data?</span>
<svg className="lucide lucide-chevron-down text-gray-400 transition-transform duration-200" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="mt-2 hidden text-sm text-gray-300 leading-relaxed font-geist" id="faq-panel-2">
<p>Yes. You can export your data at any time to S3, GCS, or Azure Blob, and we provide connectors for Snowflake, BigQuery, Redshift, and Postgres.</p>
<p className="mt-2">For customers needing full control, a self-hosted runner is available to keep data within your VPC while using our managed UI.</p>
</div>
</div>
<div className="max-w-3xl mr-auto ml-auto border-t border-white/10 pt-2">
<button aria-controls="faq-panel-3" aria-expanded="false" className="w-full text-left p-4 flex items-center justify-between hover:bg-white/10 rounded-xl">
<span className="text-sm font-medium font-geist text-gray-100">Which SDKs and integrations are supported?</span>
<svg className="lucide lucide-chevron-down text-gray-400 transition-transform duration-200" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="mt-2 hidden text-sm text-gray-300 leading-relaxed font-geist" id="faq-panel-3">
<p>We ship first-class SDKs for JavaScript/TypeScript, Python, and Go, plus server-side adapters for Node, Deno, and Rust.</p>
<ul className="mt-2 list-disc pl-5 text-gray-400">
<li>ETL/Reverse-ETL: Segment, RudderStack, Hightouch</li>
<li>Data: Snowflake, BigQuery, Redshift, Postgres, DuckDB</li>
<li>Analytics: dbt, Metabase, Power BI, Looker</li>
</ul>
</div>
</div>
<div className="max-w-3xl mr-auto ml-auto border-t border-white/10 pt-2">
<button aria-controls="faq-panel-4" aria-expanded="false" className="w-full text-left p-4 flex items-center justify-between hover:bg-white/10 rounded-xl">
<span className="text-sm font-medium font-geist text-gray-100">How is pricing calculated?</span>
<svg className="lucide lucide-chevron-down text-gray-400 transition-transform duration-200" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="mt-2 hidden text-sm text-gray-300 leading-relaxed font-geist" id="faq-panel-4">
<p>Plans scale with monthly data points, data retention, and seats. Overages are soft-thresholded — we’ll notify you well before any limits are reached.</p>
<p className="mt-2">Enterprise pricing includes volume discounts, custom terms, and annual billing.</p>
</div>
</div>
<div className="max-w-3xl mr-auto ml-auto border-t border-white/10 pt-2">
<button aria-controls="faq-panel-5" aria-expanded="false" className="w-full text-left p-4 flex items-center justify-between hover:bg-white/10 rounded-xl">
<span className="text-sm font-medium font-geist text-gray-100">What support and SLA options are available?</span>
<svg className="lucide lucide-chevron-down text-gray-400 transition-transform duration-200" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="mt-2 hidden text-sm text-gray-300 leading-relaxed font-geist" id="faq-panel-5">
<p>Pro includes email support during business hours. Enterprise adds a 99.9% uptime SLA, dedicated Slack channel, and 24/7 on-call escalation.</p>
</div>
</div>
</section>
<footer className="max-w-7xl mx-auto px-6 py-10 mt-12 border-t border-white/10">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div>
<div className="text-sm font-semibold-tight font-geist text-gray-100">QuantaBase</div>
<p className="text-xs text-gray-400 font-geist">© <span id="year">2025</span> All rights reserved.</p>
</div>
<nav className="flex flex-wrap gap-3 text-xs font-geist">
<a className="text-gray-300 hover:text-white transition-colors" href="#">Status</a>
<a className="text-gray-300 hover:text-white transition-colors" href="#">Docs</a>
<a className="text-gray-300 hover:text-white transition-colors" href="#">API</a>
<a className="text-gray-300 hover:text-white transition-colors" href="#">Changelog</a>
<a className="text-gray-300 hover:text-white transition-colors" href="#">Security</a>
<a className="text-gray-300 hover:text-white transition-colors" href="#">Privacy</a>
</nav>
</div>
</footer>
</main>


    </>
  );
}
