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
      lucide.createIcons({ attrs: { "stroke-width": 1.5 } });

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Chart.js: Earnings
      const ctx = document.getElementById('earningsChart').getContext('2d');
      const gradient = ctx.createLinearGradient(0, 0, 0, 160);
      gradient.addColorStop(0, 'rgba(144,208,64,0.35)');
      gradient.addColorStop(1, 'rgba(144,208,64,0.00)');

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [{
            label: 'Commission (€)',
            data: [120, 180, 220, 260, 240, 310, 355],
            borderColor: '#90D040',
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
          scales: {
            x: {
              grid: { color: 'rgba(255,255,255,0.05)' },
              ticks: { color: 'rgba(229,229,229,0.8)', font: { size: 11 } }
            },
            y: {
              grid: { color: 'rgba(255,255,255,0.05)' },
              ticks: { color: 'rgba(229,229,229,0.8)', font: { size: 11 } }
            }
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: 'rgba(17,17,17,0.9)',
              borderColor: 'rgba(255,255,255,0.08)',
              borderWidth: 1,
              titleColor: '#fff',
              bodyColor: '#d4d4d8',
              padding: 10,
              displayColors: false
            }
          }
        }
      });

      // Pricing toggle binding via peer simulation
      const toggle = document.getElementById('planToggle');
      const rootPricing = document.getElementById('pricing');
      function syncToggle() {
        if (toggle.checked) {
          rootPricing.classList.add('peer-checked');
        } else {
          rootPricing.classList.remove('peer-checked');
        }
      }
      toggle.addEventListener('change', syncToggle);
      syncToggle();
    
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
      

<div bis_size='{"x":0,"y":1287,"w":1312,"h":955,"abs_x":480,"abs_y":1330}' className="pointer-events-none fixed inset-0 z-0">
<div bis_size='{"x":386,"y":1159,"w":540,"h":540,"abs_x":866,"abs_y":1202}' className="absolute -top-32 left-1/2 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(144,208,64,0.12),transparent_60%)] blur-2xl"></div>
</div>

<header bis_size='{"x":0,"y":1287,"w":1312,"h":64,"abs_x":480,"abs_y":1330}' className="sticky top-0 z-50">
<div bis_size='{"x":16,"y":1287,"w":1280,"h":0,"abs_x":496,"abs_y":1330}' className="mx-auto max-w-7xl px-4">
<div bis_size='{"x":32,"y":1287,"w":1248,"h":0,"abs_x":512,"abs_y":1330}' className="mt-4"></div>
</div>
<div bis_size='{"x":16,"y":1287,"w":1280,"h":64,"abs_x":496,"abs_y":1330}' className="mx-auto max-w-7xl rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-white/5">
<div bis_size='{"x":33,"y":1300,"w":1246,"h":38,"abs_x":513,"abs_y":1343}' className="flex items-center justify-between">
<a bis_size='{"x":33,"y":1301,"w":241,"h":36,"abs_x":513,"abs_y":1344}' className="flex items-center gap-3 group" href="#">
<div bis_size='{"x":33,"y":1301,"w":36,"h":36,"abs_x":513,"abs_y":1344}' className="grid h-9 w-9 place-content-center ring-1 ring-white/10 transition-colors group-hover:bg-white/10 text-zinc-100 bg-white/5 rounded-md">
<span bis_size='{"x":45,"y":1307,"w":10,"h":24,"abs_x":525,"abs_y":1350}' className="text-base font-semibold tracking-tight">A</span>
</div>
<div bis_size='{"x":81,"y":1302,"w":193,"h":33,"abs_x":561,"abs_y":1345}' className="flex flex-col leading-tight">
<span bis_size='{"x":81,"y":1302,"w":193,"h":18,"abs_x":561,"abs_y":1345}' className="text-[15px] font-semibold tracking-tight text-zinc-100">AccountOps</span>
<span bis_size='{"x":81,"y":1320,"w":193,"h":15,"abs_x":561,"abs_y":1363}' className="text-[11px] font-medium text-zinc-400 tracking-tight">Workspaces for Accounting Teams</span>
</div>
</a>
<nav bis_size='{"x":459,"y":1309,"w":390,"h":20,"abs_x":939,"abs_y":1352}' className="hidden items-center gap-7 md:flex">
<a bis_size='{"x":459,"y":1309,"w":57,"h":20,"abs_x":939,"abs_y":1352}' className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#features">Features</a>
<a bis_size='{"x":545,"y":1309,"w":69,"h":20,"abs_x":1025,"abs_y":1352}' className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#use-cases">Use Cases</a>
<a bis_size='{"x":643,"y":1309,"w":45,"h":20,"abs_x":1123,"abs_y":1352}' className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#pricing">Pricing</a>
<a bis_size='{"x":717,"y":1309,"w":77,"h":20,"abs_x":1197,"abs_y":1352}' className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#compliance">Compliance</a>
<a bis_size='{"x":823,"y":1309,"w":27,"h":20,"abs_x":1303,"abs_y":1352}' className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>
<div bis_size='{"x":1036,"y":1300,"w":242,"h":38,"abs_x":1516,"abs_y":1343}' className="hidden items-center gap-3 md:flex">
<button bis_size='{"x":1036,"y":1300,"w":91,"h":38,"abs_x":1516,"abs_y":1343}' className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 transition-all hover:bg-white/10 hover:text-white focus:outline focus:outline-2 focus:outline-[var(--accent)]">
<svg bis_size='{"x":1053,"y":1311,"w":16,"h":16,"abs_x":1533,"abs_y":1354}' className="lucide lucide-help-circle h-4 w-4" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg> Docs
            </button>
<a bis_size='{"x":1139,"y":1301,"w":139,"h":36,"abs_x":1619,"abs_y":1344}' className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold tracking-tight text-black transition-all hover:opacity-90 focus:outline focus:outline-2 focus:outline-[var(--accent)]" href="#demo" style={{backgroundColor: 'var(--accent)'}}>
              Book a demo <svg bis_size='{"x":1247,"y":1311,"w":16,"h":16,"abs_x":1727,"abs_y":1354}' className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div bis_size='{"x":0,"y":1287,"w":0,"h":0,"abs_x":480,"abs_y":1330}' className="md:hidden flex items-center gap-2">
<button bis_size='{"x":0,"y":1287,"w":0,"h":0,"abs_x":480,"abs_y":1330}' className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-zinc-200 transition-all hover:bg-white/10 hover:text-white focus:outline focus:outline-2 focus:outline-[var(--accent)]">
<svg bis_size='{"x":0,"y":1287,"w":0,"h":0,"abs_x":480,"abs_y":1330}' className="lucide lucide-globe h-4 w-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</button>
<a bis_size='{"x":0,"y":1287,"w":0,"h":0,"abs_x":480,"abs_y":1330}' className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold tracking-tight text-black hover:opacity-90 focus:outline focus:outline-2 focus:outline-[var(--accent)]" href="#demo" style={{backgroundColor: 'var(--accent)'}}>
              Demo
            </a>
</div>
</div>
</div>
</header>

<section bis_size='{"x":16,"y":80,"w":1280,"h":807,"abs_x":496,"abs_y":123}' className="relative z-10 mx-auto max-w-7xl px-4 pt-16 sm:pt-20">
<div bis_size='{"x":32,"y":160,"w":1248,"h":601,"abs_x":512,"abs_y":203}' className="grid items-center gap-10 lg:grid-cols-2">
<div bis_size='{"x":32,"y":160,"w":604,"h":601,"abs_x":512,"abs_y":203}' className="space-y-7">
<div bis_size='{"x":32,"y":160,"w":235,"h":26,"abs_x":512,"abs_y":203}' className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
<svg bis_size='{"x":45,"y":165,"w":16,"h":16,"abs_x":525,"abs_y":208}' className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span bis_size='{"x":69,"y":165,"w":185,"h":16,"abs_x":549,"abs_y":208}' className="font-medium">V1 ready • V2 roadmap included</span>
</div>
<h1 bis_size='{"x":32,"y":215,"w":604,"h":300,"abs_x":512,"abs_y":258}' className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Collaborative accounting workspaces built for firms, managers, and clients
          </h1>
<p bis_size='{"x":32,"y":543,"w":604,"h":84,"abs_x":512,"abs_y":586}' className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Centralize tasks, folders, forms, OCR search, and secure messaging in one place. Automate billing and commissions, archive with audit trails, and stay compliant — from onboarding to payroll and beyond.
          </p>
<div bis_size='{"x":32,"y":655,"w":604,"h":46,"abs_x":512,"abs_y":698}' className="flex flex-col gap-3 sm:flex-row">
<a bis_size='{"x":32,"y":655,"w":238,"h":46,"abs_x":512,"abs_y":698}' className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold tracking-tight text-black shadow-sm ring-1 ring-black/10 transition-all hover:-translate-y-0.5 hover:opacity-90 focus:outline focus:outline-2 focus:outline-[var(--accent)]" href="#demo" style={{backgroundColor: 'var(--accent)'}}>
              Get started — Book a demo <svg bis_size='{"x":234,"y":670,"w":16,"h":16,"abs_x":714,"abs_y":713}' className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div bis_size='{"x":32,"y":729,"w":604,"h":32,"abs_x":512,"abs_y":772}' className="flex flex-wrap items-center gap-5 pt-3 text-sm text-zinc-400">
<div bis_size='{"x":32,"y":741,"w":104,"h":20,"abs_x":512,"abs_y":784}' className="inline-flex items-center gap-2">
<svg bis_size='{"x":32,"y":743,"w":16,"h":16,"abs_x":512,"abs_y":786}' className="lucide lucide-shield-check h-4 w-4 text-zinc-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
              GDPR-ready
            </div>
<div bis_size='{"x":156,"y":741,"w":101,"h":20,"abs_x":636,"abs_y":784}' className="inline-flex items-center gap-2">
<svg bis_size='{"x":156,"y":743,"w":16,"h":16,"abs_x":636,"abs_y":786}' className="lucide lucide-lock h-4 w-4 text-zinc-300" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              AVV signing
            </div>
<div bis_size='{"x":278,"y":741,"w":146,"h":20,"abs_x":758,"abs_y":784}' className="inline-flex items-center gap-2">
<svg bis_size='{"x":278,"y":743,"w":16,"h":16,"abs_x":758,"abs_y":786}' className="lucide lucide-languages h-4 w-4 text-zinc-300" data-lucide="languages" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>
              EN • DE • AR (RTL)
            </div>
<div bis_size='{"x":444,"y":741,"w":107,"h":20,"abs_x":924,"abs_y":784}' className="inline-flex items-center gap-2">
<svg bis_size='{"x":444,"y":743,"w":16,"h":16,"abs_x":924,"abs_y":786}' className="lucide lucide-search h-4 w-4 text-zinc-300" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
              OCR full‑text
            </div>
</div>
</div>

<div bis_size='{"x":676,"y":256,"w":604,"h":408,"abs_x":1156,"abs_y":299}' className="relative">
<div bis_size='{"x":676,"y":256,"w":604,"h":408,"abs_x":1156,"abs_y":299}' className="rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur">
<img alt="Product preview" bis_size='{"x":685,"y":265,"w":586,"h":390,"abs_x":1165,"abs_y":308}' className="h-full w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div bis_size='{"x":1168,"y":224,"w":144,"h":144,"abs_x":1648,"abs_y":267}' className="pointer-events-none absolute -right-8 -top-8 hidden h-36 w-36 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(144,208,64,0.18),transparent_60%)] blur-xl lg:block"></div>
</div>
</div>

<div bis_size='{"x":32,"y":801,"w":1248,"h":86,"abs_x":512,"abs_y":844}' className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
<div bis_size='{"x":32,"y":801,"w":300,"h":86,"abs_x":512,"abs_y":844}' className="rounded-lg border border-white/10 bg-white/5 p-4">
<div bis_size='{"x":49,"y":818,"w":266,"h":32,"abs_x":529,"abs_y":861}' className="text-2xl font-semibold tracking-tight text-white">6+</div>
<div bis_size='{"x":49,"y":850,"w":266,"h":20,"abs_x":529,"abs_y":893}' className="text-sm text-zinc-400">Core roles</div>
</div>
<div bis_size='{"x":348,"y":801,"w":300,"h":86,"abs_x":828,"abs_y":844}' className="rounded-lg border border-white/10 bg-white/5 p-4">
<div bis_size='{"x":365,"y":818,"w":266,"h":32,"abs_x":845,"abs_y":861}' className="text-2xl font-semibold tracking-tight text-white">10+</div>
<div bis_size='{"x":365,"y":850,"w":266,"h":20,"abs_x":845,"abs_y":893}' className="text-sm text-zinc-400">V1 features</div>
</div>
<div bis_size='{"x":664,"y":801,"w":300,"h":86,"abs_x":1144,"abs_y":844}' className="rounded-lg border border-white/10 bg-white/5 p-4">
<div bis_size='{"x":681,"y":818,"w":266,"h":32,"abs_x":1161,"abs_y":861}' className="text-2xl font-semibold tracking-tight text-white">2</div>
<div bis_size='{"x":681,"y":850,"w":266,"h":20,"abs_x":1161,"abs_y":893}' className="text-sm text-zinc-400">Billing modes</div>
</div>
<div bis_size='{"x":980,"y":801,"w":300,"h":86,"abs_x":1460,"abs_y":844}' className="rounded-lg border border-white/10 bg-white/5 p-4">
<div bis_size='{"x":997,"y":818,"w":266,"h":32,"abs_x":1477,"abs_y":861}' className="text-2xl font-semibold tracking-tight text-white">100%</div>
<div bis_size='{"x":997,"y":850,"w":266,"h":20,"abs_x":1477,"abs_y":893}' className="text-sm text-zinc-400">Audit logged</div>
</div>
</div>
</section>

<section bis_size='{"x":16,"y":935,"w":1280,"h":64,"abs_x":496,"abs_y":978}' className="mx-auto mt-12 max-w-7xl px-4">
<div bis_size='{"x":32,"y":935,"w":1248,"h":64,"abs_x":512,"abs_y":978}' className="rounded-xl border border-white/10 bg-white/5 p-4">
<div bis_size='{"x":49,"y":952,"w":1214,"h":30,"abs_x":529,"abs_y":995}' className="flex items-center gap-3">
<svg bis_size='{"x":49,"y":957,"w":17,"h":20,"abs_x":529,"abs_y":1000}' className="lucide lucide-circle-help h-5 w-5 text-zinc-300" data-lucide="circle-help" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<input bis_size='{"x":78,"y":957,"w":1081,"h":20,"abs_x":558,"abs_y":1000}' className="w-full bg-transparent text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none" placeholder="Use (?) to search for questions, forms, or help..."/>
<button bis_size='{"x":1172,"y":952,"w":90,"h":30,"abs_x":1652,"abs_y":995}' className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-200 transition-all hover:bg-white/10 hover:text-white focus:outline focus:outline-2 focus:outline-[var(--accent)]">
<svg bis_size='{"x":1185,"y":959,"w":16,"h":16,"abs_x":1665,"abs_y":1002}' className="lucide lucide-search h-4 w-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg> Search
          </button>
</div>
</div>
</section>

<section bis_size='{"x":16,"y":999,"w":1280,"h":954,"abs_x":496,"abs_y":1042}' className="max-w-7xl sm:py-20 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4" id="features">
<div bis_size='{"x":32,"y":1079,"w":1248,"h":72,"abs_x":512,"abs_y":1122}' className="mb-8 flex items-end justify-between">
<div bis_size='{"x":32,"y":1079,"w":743,"h":72,"abs_x":512,"abs_y":1122}'>
<h2 bis_size='{"x":32,"y":1079,"w":743,"h":40,"abs_x":512,"abs_y":1122}' className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Everything you need to run modern accounting</h2>
<p bis_size='{"x":32,"y":1127,"w":743,"h":24,"abs_x":512,"abs_y":1170}' className="mt-2 text-zinc-400">From onboarding to billing, tasks to archiving — built around secure workspaces and clear permissions.</p>
</div>
</div>
<div bis_size='{"x":32,"y":1183,"w":1248,"h":690,"abs_x":512,"abs_y":1226}' className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

<div bis_size='{"x":32,"y":1183,"w":405,"h":154,"abs_x":512,"abs_y":1226}' className="group rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
<div bis_size='{"x":53,"y":1204,"w":363,"h":28,"abs_x":533,"abs_y":1247}' className="flex items-center gap-3">
<svg bis_size='{"x":53,"y":1208,"w":20,"h":20,"abs_x":533,"abs_y":1251}' className="lucide lucide-clipboard-check h-5 w-5 text-zinc-200" data-lucide="clipboard-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
<h3 bis_size='{"x":85,"y":1204,"w":149,"h":28,"abs_x":565,"abs_y":1247}' className="text-lg font-semibold tracking-tight text-white">Onboarding &amp; AVV</h3>
</div>
<p bis_size='{"x":53,"y":1240,"w":363,"h":40,"abs_x":533,"abs_y":1283}' className="mt-2 text-sm text-zinc-400">Step‑by‑step setup with skip/support, booking, and required AVV signing before access.</p>
<div bis_size='{"x":53,"y":1292,"w":363,"h":24,"abs_x":533,"abs_y":1335}' className="mt-3 flex flex-wrap gap-2 text-xs">
<span bis_size='{"x":53,"y":1292,"w":185,"h":24,"abs_x":533,"abs_y":1335}' className="rounded-md bg-white/5 px-2 py-1 text-zinc-300 ring-1 ring-white/10">Email confirmation &amp; rate limit</span>
<span bis_size='{"x":246,"y":1292,"w":110,"h":24,"abs_x":726,"abs_y":1335}' className="rounded-md bg-white/5 px-2 py-1 text-zinc-300 ring-1 ring-white/10">Support booking</span>
</div>
</div>

<div bis_size='{"x":453,"y":1183,"w":405,"h":154,"abs_x":933,"abs_y":1226}' className="group rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
<div bis_size='{"x":474,"y":1204,"w":363,"h":28,"abs_x":954,"abs_y":1247}' className="flex items-center gap-3">
<svg bis_size='{"x":474,"y":1208,"w":20,"h":20,"abs_x":954,"abs_y":1251}' className="lucide lucide-users h-5 w-5 text-zinc-200" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<h3 bis_size='{"x":506,"y":1204,"w":162,"h":28,"abs_x":986,"abs_y":1247}' className="text-lg font-semibold tracking-tight text-white">Workspaces &amp; Roles</h3>
</div>
<p bis_size='{"x":474,"y":1240,"w":363,"h":40,"abs_x":954,"abs_y":1283}' className="mt-2 text-sm text-zinc-400">One workspace per client, with granular access for Accounting firm, Manager, Accountant, Client.</p>
<div bis_size='{"x":474,"y":1292,"w":363,"h":24,"abs_x":954,"abs_y":1335}' className="mt-3 flex flex-wrap gap-2 text-xs">
<span bis_size='{"x":474,"y":1292,"w":83,"h":24,"abs_x":954,"abs_y":1335}' className="rounded-md bg-white/5 px-2 py-1 text-zinc-300 ring-1 ring-white/10">Participants</span>
<span bis_size='{"x":565,"y":1292,"w":84,"h":24,"abs_x":1045,"abs_y":1335}' className="rounded-md bg-white/5 px-2 py-1 text-zinc-300 ring-1 ring-white/10">Permissions</span>
</div>
</div>

<div bis_size='{"x":874,"y":1183,"w":405,"h":154,"abs_x":1354,"abs_y":1226}' className="group rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
<div bis_size='{"x":895,"y":1204,"w":363,"h":28,"abs_x":1375,"abs_y":1247}' className="flex items-center gap-3">
<svg bis_size='{"x":895,"y":1208,"w":20,"h":20,"abs_x":1375,"abs_y":1251}' className="lucide lucide-folder-open h-5 w-5 text-zinc-200" data-lucide="folder-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"></path></svg>
<h3 bis_size='{"x":927,"y":1204,"w":145,"h":28,"abs_x":1407,"abs_y":1247}' className="text-lg font-semibold tracking-tight text-white">Folders &amp; Uploads</h3>
</div>
<p bis_size='{"x":895,"y":1240,"w":363,"h":40,"abs_x":1375,"abs_y":1283}' className="mt-2 text-sm text-zinc-400">Top‑level by firm, subfolders by all. Drag &amp; drop, camera scan, PDF‑only V1, statuses, and audit.</p>
<div bis_size='{"x":895,"y":1292,"w":363,"h":24,"abs_x":1375,"abs_y":1335}' className="mt-3 flex flex-wrap gap-2 text-xs">
<span bis_size='{"x":895,"y":1292,"w":155,"h":24,"abs_x":1375,"abs_y":1335}' className="rounded-md bg-white/5 px-2 py-1 text-zinc-300 ring-1 ring-white/10">Virus &amp; duplicate checks</span>
<span bis_size='{"x":1059,"y":1292,"w":130,"h":24,"abs_x":1539,"abs_y":1335}' className="rounded-md bg-white/5 px-2 py-1 text-zinc-300 ring-1 ring-white/10">Auto‑task on upload</span>
</div>
</div>

<div bis_size='{"x":32,"y":1353,"w":405,"h":118,"abs_x":512,"abs_y":1396}' className="group rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
<div bis_size='{"x":53,"y":1374,"w":363,"h":28,"abs_x":533,"abs_y":1417}' className="flex items-center gap-3">
<svg bis_size='{"x":53,"y":1378,"w":20,"h":20,"abs_x":533,"abs_y":1421}' className="lucide lucide-scan-search h-5 w-5 text-zinc-200" data-lucide="scan-search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="3"></circle><path d="m16 16-1.9-1.9"></path></svg>
<h3 bis_size='{"x":85,"y":1374,"w":105,"h":28,"abs_x":565,"abs_y":1417}' className="text-lg font-semibold tracking-tight text-white">OCR &amp; Filters</h3>
</div>
<p bis_size='{"x":53,"y":1410,"w":363,"h":40,"abs_x":533,"abs_y":1453}' className="mt-2 text-sm text-zinc-400">Full‑text OCR search with filters for date range, type, folder, and client number.</p>
</div>

<div bis_size='{"x":453,"y":1353,"w":405,"h":118,"abs_x":933,"abs_y":1396}' className="group rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
<div bis_size='{"x":474,"y":1374,"w":363,"h":28,"abs_x":954,"abs_y":1417}' className="flex items-center gap-3">
<svg bis_size='{"x":474,"y":1378,"w":20,"h":20,"abs_x":954,"abs_y":1421}' className="lucide lucide-kanban h-5 w-5 text-zinc-200" data-lucide="kanban" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 5v11"></path><path d="M12 5v6"></path><path d="M18 5v14"></path></svg>
<h3 bis_size='{"x":506,"y":1374,"w":141,"h":28,"abs_x":986,"abs_y":1417}' className="text-lg font-semibold tracking-tight text-white">Tasks &amp; Workflow</h3>
</div>
<p bis_size='{"x":474,"y":1410,"w":363,"h":40,"abs_x":954,"abs_y":1453}' className="mt-2 text-sm text-zinc-400">Kanban with drag &amp; drop, default case handlers, substitution rules, and notifications.</p>
</div>

<div bis_size='{"x":874,"y":1353,"w":405,"h":118,"abs_x":1354,"abs_y":1396}' className="group rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
<div bis_size='{"x":895,"y":1374,"w":363,"h":28,"abs_x":1375,"abs_y":1417}' className="flex items-center gap-3">
<svg bis_size='{"x":895,"y":1378,"w":20,"h":20,"abs_x":1375,"abs_y":1421}' className="lucide lucide-id-card h-5 w-5 text-zinc-200" data-lucide="id-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10h2"></path><path d="M16 14h2"></path><path d="M6.17 15a3 3 0 0 1 5.66 0"></path><circle cx="9" cy="11" r="2"></circle><rect height="14" rx="2" width="20" x="2" y="5"></rect></svg>
<h3 bis_size='{"x":927,"y":1374,"w":160,"h":28,"abs_x":1407,"abs_y":1417}' className="text-lg font-semibold tracking-tight text-white">Workers &amp; SV Portal</h3>
</div>
<p bis_size='{"x":895,"y":1410,"w":363,"h":40,"abs_x":1375,"abs_y":1453}' className="mt-2 text-sm text-zinc-400">Create, validate, manage workers. Submit Sofort SV Meldung and store confirmations.</p>
</div>

<div bis_size='{"x":32,"y":1487,"w":405,"h":118,"abs_x":512,"abs_y":1530}' className="group rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
<div bis_size='{"x":53,"y":1508,"w":363,"h":28,"abs_x":533,"abs_y":1551}' className="flex items-center gap-3">
<svg bis_size='{"x":53,"y":1512,"w":20,"h":20,"abs_x":533,"abs_y":1555}' className="lucide lucide-signature h-5 w-5 text-zinc-200" data-lucide="signature" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284"></path><path d="M3 21h18"></path></svg>
<h3 bis_size='{"x":85,"y":1508,"w":157,"h":28,"abs_x":565,"abs_y":1551}' className="text-lg font-semibold tracking-tight text-white">Forms &amp; Signatures</h3>
</div>
<p bis_size='{"x":53,"y":1544,"w":363,"h":40,"abs_x":533,"abs_y":1587}' className="mt-2 text-sm text-zinc-400">Conditional logic, auto‑fill, in‑app or external signatures, and PDF/CSV output to folders.</p>
</div>

<div bis_size='{"x":453,"y":1487,"w":405,"h":118,"abs_x":933,"abs_y":1530}' className="group rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
<div bis_size='{"x":474,"y":1508,"w":363,"h":28,"abs_x":954,"abs_y":1551}' className="flex items-center gap-3">
<svg bis_size='{"x":474,"y":1512,"w":20,"h":20,"abs_x":954,"abs_y":1555}' className="lucide lucide-calendar-check-2 h-5 w-5 text-zinc-200" data-lucide="calendar-check-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path><path d="M3 10h18"></path><path d="m16 20 2 2 4-4"></path></svg>
<h3 bis_size='{"x":506,"y":1508,"w":158,"h":28,"abs_x":986,"abs_y":1551}' className="text-lg font-semibold tracking-tight text-white">Book Appointments</h3>
</div>
<p bis_size='{"x":474,"y":1544,"w":363,"h":40,"abs_x":954,"abs_y":1587}' className="mt-2 text-sm text-zinc-400">Clients book times with accountants. Automatic email notifications and calendar holds.</p>
</div>

<div bis_size='{"x":874,"y":1487,"w":405,"h":118,"abs_x":1354,"abs_y":1530}' className="group rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
<div bis_size='{"x":895,"y":1508,"w":363,"h":28,"abs_x":1375,"abs_y":1551}' className="flex items-center gap-3">
<svg bis_size='{"x":895,"y":1512,"w":20,"h":20,"abs_x":1375,"abs_y":1555}' className="lucide lucide-receipt-euro h-5 w-5 text-zinc-200" data-lucide="receipt-euro" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M8 12h5"></path><path d="M16 9.5a4 4 0 1 0 0 5.2"></path></svg>
<h3 bis_size='{"x":927,"y":1508,"w":176,"h":28,"abs_x":1407,"abs_y":1551}' className="text-lg font-semibold tracking-tight text-white">Billing &amp; Commissions</h3>
</div>
<p bis_size='{"x":895,"y":1544,"w":363,"h":40,"abs_x":1375,"abs_y":1587}' className="mt-2 text-sm text-zinc-400">Mandants billed monthly/yearly; BUs earn 10% on base subscriptions with downloadable reports.</p>
</div>

<div bis_size='{"x":32,"y":1621,"w":405,"h":118,"abs_x":512,"abs_y":1664}' className="group rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
<div bis_size='{"x":53,"y":1642,"w":363,"h":28,"abs_x":533,"abs_y":1685}' className="flex items-center gap-3">
<svg bis_size='{"x":53,"y":1646,"w":20,"h":20,"abs_x":533,"abs_y":1689}' className="lucide lucide-archive-restore h-5 w-5 text-zinc-200" data-lucide="archive-restore" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="20" x="2" y="3"></rect><path d="M4 8v11a2 2 0 0 0 2 2h2"></path><path d="M20 8v11a2 2 0 0 1-2 2h-2"></path><path d="m9 15 3-3 3 3"></path><path d="M12 12v9"></path></svg>
<h3 bis_size='{"x":85,"y":1642,"w":157,"h":28,"abs_x":565,"abs_y":1685}' className="text-lg font-semibold tracking-tight text-white">Archiving &amp; Restore</h3>
</div>
<p bis_size='{"x":53,"y":1678,"w":363,"h":40,"abs_x":533,"abs_y":1721}' className="mt-2 text-sm text-zinc-400">Year‑end or manual archives with checksums, manifest, search, and one‑click restore.</p>
</div>

<div bis_size='{"x":453,"y":1621,"w":405,"h":118,"abs_x":933,"abs_y":1664}' className="group rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]" id="compliance">
<div bis_size='{"x":474,"y":1642,"w":363,"h":28,"abs_x":954,"abs_y":1685}' className="flex items-center gap-3">
<svg bis_size='{"x":474,"y":1646,"w":20,"h":20,"abs_x":954,"abs_y":1689}' className="lucide lucide-file-clock h-5 w-5 text-zinc-200" data-lucide="file-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"></path><path d="M8 14v2.2l1.6 1"></path><circle cx="8" cy="16" r="6"></circle></svg>
<h3 bis_size='{"x":506,"y":1642,"w":109,"h":28,"abs_x":986,"abs_y":1685}' className="text-lg font-semibold tracking-tight text-white">GDPR &amp; Audit</h3>
</div>
<p bis_size='{"x":474,"y":1678,"w":363,"h":40,"abs_x":954,"abs_y":1721}' className="mt-2 text-sm text-zinc-400">Consent history, data export, right to be forgotten, personal data access control, activity reports.</p>
</div>

<div bis_size='{"x":874,"y":1621,"w":405,"h":118,"abs_x":1354,"abs_y":1664}' className="group rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
<div bis_size='{"x":895,"y":1642,"w":363,"h":28,"abs_x":1375,"abs_y":1685}' className="flex items-center gap-3">
<svg bis_size='{"x":895,"y":1646,"w":20,"h":20,"abs_x":1375,"abs_y":1689}' className="lucide lucide-message-square h-5 w-5 text-zinc-200" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<h3 bis_size='{"x":927,"y":1642,"w":141,"h":28,"abs_x":1407,"abs_y":1685}' className="text-lg font-semibold tracking-tight text-white">Chat &amp; Templates</h3>
</div>
<p bis_size='{"x":895,"y":1678,"w":363,"h":40,"abs_x":1375,"abs_y":1721}' className="mt-2 text-sm text-zinc-400">One‑on‑one chat, file attachments, message templates (free or paid) with notifications.</p>
</div>

<div bis_size='{"x":32,"y":1755,"w":405,"h":118,"abs_x":512,"abs_y":1798}' className="group rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
<div bis_size='{"x":53,"y":1776,"w":363,"h":28,"abs_x":533,"abs_y":1819}' className="flex items-center gap-3">
<svg bis_size='{"x":53,"y":1780,"w":20,"h":20,"abs_x":533,"abs_y":1823}' className="lucide lucide-languages h-5 w-5 text-zinc-200" data-lucide="languages" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>
<h3 bis_size='{"x":85,"y":1776,"w":95,"h":28,"abs_x":565,"abs_y":1819}' className="text-lg font-semibold tracking-tight text-white">Localization</h3>
</div>
<p bis_size='{"x":53,"y":1812,"w":363,"h":40,"abs_x":533,"abs_y":1855}' className="mt-2 text-sm text-zinc-400">Interface in English, German, Arabic, with full RTL support and persisted language choice.</p>
</div>
</div>
</section>

<section bis_size='{"x":16,"y":1953,"w":1280,"h":64,"abs_x":496,"abs_y":1996}' className="mx-auto max-w-7xl px-4 pb-16" id="use-cases">
</section>

<section bis_size='{"x":16,"y":2017,"w":1280,"h":688,"abs_x":496,"abs_y":2060}' className="mx-auto max-w-7xl px-4 py-16 sm:py-20" id="pricing">
<div bis_size='{"x":32,"y":2097,"w":1248,"h":72,"abs_x":512,"abs_y":2140}' className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
<div bis_size='{"x":32,"y":2097,"w":862,"h":72,"abs_x":512,"abs_y":2140}' className="">
<h2 bis_size='{"x":32,"y":2097,"w":862,"h":40,"abs_x":512,"abs_y":2140}' className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Simple pricing for Mandants, clear commissions for firms</h2>
<p bis_size='{"x":32,"y":2145,"w":862,"h":24,"abs_x":512,"abs_y":2188}' className="mt-2 text-zinc-400">No BU license plans. Mandants pay; BUs earn monthly commissions.</p>
</div>

<div bis_size='{"x":1116,"y":2145,"w":163,"h":24,"abs_x":1596,"abs_y":2188}' className="flex items-center gap-3">
<span bis_size='{"x":1116,"y":2147,"w":52,"h":20,"abs_x":1596,"abs_y":2190}' className="text-sm text-zinc-400">Monthly</span>
<label bis_size='{"x":1180,"y":2145,"w":48,"h":24,"abs_x":1660,"abs_y":2188}' className="relative inline-flex cursor-pointer items-center">
<input bis_size='{"x":1179,"y":2156,"w":1,"h":1,"abs_x":1659,"abs_y":2199}' className="peer sr-only" id="planToggle" type="checkbox"/>
<div bis_size='{"x":1180,"y":2145,"w":48,"h":24,"abs_x":1660,"abs_y":2188}' className="h-6 w-12 rounded-full bg-white/10 ring-1 ring-white/10 transition-colors peer-checked:bg-[var(--accent)]/30"></div>
<div bis_size='{"x":1183,"y":2148,"w":18,"h":18,"abs_x":1663,"abs_y":2191}' className="absolute left-[3px] top-[3px] h-[18px] w-[18px] rounded-full bg-white transition-all peer-checked:translate-x-6"></div>
</label>
<span bis_size='{"x":1240,"y":2147,"w":39,"h":20,"abs_x":1720,"abs_y":2190}' className="text-sm text-zinc-400">Yearly</span>
</div>
</div>
<div bis_size='{"x":32,"y":2201,"w":1248,"h":342,"abs_x":512,"abs_y":2244}' className="grid gap-4 lg:grid-cols-2">

<div bis_size='{"x":32,"y":2201,"w":616,"h":342,"abs_x":512,"abs_y":2244}' className="rounded-xl border border-white/10 bg-white/5 p-6">
<div bis_size='{"x":57,"y":2226,"w":566,"h":52,"abs_x":537,"abs_y":2269}' className="flex items-center justify-between">
<div bis_size='{"x":57,"y":2226,"w":286,"h":52,"abs_x":537,"abs_y":2269}'>
<h3 bis_size='{"x":57,"y":2226,"w":286,"h":28,"abs_x":537,"abs_y":2269}' className="text-xl font-semibold tracking-tight text-white">Mandant</h3>
<p bis_size='{"x":57,"y":2258,"w":286,"h":20,"abs_x":537,"abs_y":2301}' className="mt-1 text-sm text-zinc-400">Billed on the 1st of each month. No free trial.</p>
</div>
<svg bis_size='{"x":603,"y":2242,"w":20,"h":20,"abs_x":1083,"abs_y":2285}' className="lucide lucide-credit-card h-5 w-5 text-zinc-300" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div bis_size='{"x":57,"y":2298,"w":566,"h":40,"abs_x":537,"abs_y":2341}' className="mt-5 flex items-baseline gap-2">
<div bis_size='{"x":57,"y":2298,"w":96,"h":40,"abs_x":537,"abs_y":2341}' className="text-4xl font-semibold tracking-tight text-white">
<span bis_size='{"x":57,"y":2296,"w":96,"h":42,"abs_x":537,"abs_y":2339}' className="peer-checked:hidden" id="priceMonthly">€9.90</span>
<span bis_size='{"x":0,"y":1287,"w":0,"h":0,"abs_x":480,"abs_y":1330}' className="hidden peer-checked:inline" id="priceYearly">€99</span>
</div>
<div bis_size='{"x":161,"y":2316,"w":45,"h":20,"abs_x":641,"abs_y":2359}' className="text-sm text-zinc-400">
<span bis_size='{"x":161,"y":2318,"w":45,"h":16,"abs_x":641,"abs_y":2361}' className="peer-checked:hidden">/month</span>
<span bis_size='{"x":0,"y":1287,"w":0,"h":0,"abs_x":480,"abs_y":1330}' className="hidden peer-checked:inline">/year</span>
</div>
</div>
<ul bis_size='{"x":57,"y":2354,"w":566,"h":104,"abs_x":537,"abs_y":2397}' className="mt-4 space-y-2 text-sm text-zinc-300">
<li bis_size='{"x":57,"y":2354,"w":566,"h":20,"abs_x":537,"abs_y":2397}' className="flex items-center gap-2"><svg bis_size='{"x":57,"y":2356,"w":16,"h":16,"abs_x":537,"abs_y":2399}' className="lucide lucide-check h-4 w-4 text-[var(--accent)]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Coworkers: €1 each / month</li>
<li bis_size='{"x":57,"y":2382,"w":566,"h":20,"abs_x":537,"abs_y":2425}' className="flex items-center gap-2"><svg bis_size='{"x":57,"y":2384,"w":16,"h":16,"abs_x":537,"abs_y":2427}' className="lucide lucide-check h-4 w-4 text-[var(--accent)]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Subusers (Worker role) free</li>
<li bis_size='{"x":57,"y":2410,"w":566,"h":20,"abs_x":537,"abs_y":2453}' className="flex items-center gap-2"><svg bis_size='{"x":57,"y":2412,"w":16,"h":16,"abs_x":537,"abs_y":2455}' className="lucide lucide-check h-4 w-4 text-[var(--accent)]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Paid templates &amp; extras charge per usage</li>
<li bis_size='{"x":57,"y":2438,"w":566,"h":20,"abs_x":537,"abs_y":2481}' className="flex items-center gap-2"><svg bis_size='{"x":57,"y":2440,"w":16,"h":16,"abs_x":537,"abs_y":2483}' className="lucide lucide-check h-4 w-4 text-[var(--accent)]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Invoices via email + cloud with audit</li>
</ul>
<div bis_size='{"x":57,"y":2482,"w":566,"h":36,"abs_x":537,"abs_y":2525}' className="mt-6 flex gap-3">
<a bis_size='{"x":57,"y":2482,"w":166,"h":36,"abs_x":537,"abs_y":2525}' className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold tracking-tight text-black hover:opacity-90 focus:outline focus:outline-2 focus:outline-[var(--accent)]" href="#demo" style={{backgroundColor: 'var(--accent)'}}>
              Start as Mandant <svg bis_size='{"x":191,"y":2492,"w":16,"h":16,"abs_x":671,"abs_y":2535}' className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div bis_size='{"x":664,"y":2201,"w":616,"h":342,"abs_x":1144,"abs_y":2244}' className="rounded-xl border border-white/10 bg-white/5 p-6">
<div bis_size='{"x":689,"y":2226,"w":566,"h":52,"abs_x":1169,"abs_y":2269}' className="flex items-center justify-between">
<div bis_size='{"x":689,"y":2226,"w":193,"h":52,"abs_x":1169,"abs_y":2269}' className="">
<h3 bis_size='{"x":689,"y":2226,"w":193,"h":28,"abs_x":1169,"abs_y":2269}' className="text-xl font-semibold tracking-tight text-white">Accounting Firm</h3>
<p bis_size='{"x":689,"y":2258,"w":193,"h":20,"abs_x":1169,"abs_y":2301}' className="text-sm text-zinc-400 mt-1">Free to use. Earn commission.</p>
</div>
<svg bis_size='{"x":1235,"y":2242,"w":20,"h":20,"abs_x":1715,"abs_y":2285}' className="lucide lucide-wallet h-5 w-5 text-zinc-300" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<div bis_size='{"x":689,"y":2298,"w":566,"h":40,"abs_x":1169,"abs_y":2341}' className="mt-5 flex items-baseline gap-2">
<div bis_size='{"x":689,"y":2298,"w":69,"h":40,"abs_x":1169,"abs_y":2341}' className="text-4xl font-semibold tracking-tight text-white">10%</div>
<div bis_size='{"x":766,"y":2316,"w":293,"h":20,"abs_x":1246,"abs_y":2359}' className="text-sm text-zinc-400">commission on each active Mandant base fee</div>
</div>
<ul bis_size='{"x":689,"y":2354,"w":566,"h":104,"abs_x":1169,"abs_y":2397}' className="mt-4 space-y-2 text-sm text-zinc-300">
<li bis_size='{"x":689,"y":2354,"w":566,"h":20,"abs_x":1169,"abs_y":2397}' className="flex items-center gap-2"><svg bis_size='{"x":689,"y":2356,"w":16,"h":16,"abs_x":1169,"abs_y":2399}' className="lucide lucide-check h-4 w-4 text-[var(--accent)]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Monthly commission dashboard</li>
<li bis_size='{"x":689,"y":2382,"w":566,"h":20,"abs_x":1169,"abs_y":2425}' className="flex items-center gap-2"><svg bis_size='{"x":689,"y":2384,"w":16,"h":16,"abs_x":1169,"abs_y":2427}' className="lucide lucide-check h-4 w-4 text-[var(--accent)]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Reports as PDF/CSV</li>
<li bis_size='{"x":689,"y":2410,"w":566,"h":20,"abs_x":1169,"abs_y":2453}' className="flex items-center gap-2"><svg bis_size='{"x":689,"y":2412,"w":16,"h":16,"abs_x":1169,"abs_y":2455}' className="lucide lucide-check h-4 w-4 text-[var(--accent)]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Payouts processed monthly</li>
<li bis_size='{"x":689,"y":2438,"w":566,"h":20,"abs_x":1169,"abs_y":2481}' className="flex items-center gap-2"><svg bis_size='{"x":689,"y":2440,"w":16,"h":16,"abs_x":1169,"abs_y":2483}' className="lucide lucide-check h-4 w-4 text-[var(--accent)]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Stripe payments: cards, SEPA, Apple Pay (region‑based)</li>
</ul>
<div bis_size='{"x":689,"y":2482,"w":566,"h":36,"abs_x":1169,"abs_y":2525}' className="mt-6 flex gap-3">
<a bis_size='{"x":689,"y":2482,"w":137,"h":36,"abs_x":1169,"abs_y":2525}' className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold tracking-tight text-black hover:opacity-90 focus:outline focus:outline-2 focus:outline-[var(--accent)]" href="#demo" style={{backgroundColor: 'var(--accent)'}}>
              Start as Firm <svg bis_size='{"x":794,"y":2492,"w":16,"h":16,"abs_x":1274,"abs_y":2535}' className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>

<div bis_size='{"x":32,"y":2567,"w":1248,"h":58,"abs_x":512,"abs_y":2610}' className="mx-auto mt-6 max-w-7xl">
<div bis_size='{"x":32,"y":2567,"w":1248,"h":58,"abs_x":512,"abs_y":2610}' className="rounded-lg border border-white/10 bg-white/5 p-4 text-xs text-zinc-400">
<div bis_size='{"x":49,"y":2584,"w":1214,"h":24,"abs_x":529,"abs_y":2627}' className="flex flex-wrap items-center gap-3">
<span bis_size='{"x":49,"y":2584,"w":256,"h":24,"abs_x":529,"abs_y":2627}' className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-1 ring-1 ring-white/10"><svg bis_size='{"x":57,"y":2589,"w":14,"h":14,"abs_x":537,"abs_y":2632}' className="lucide lucide-badge-check h-3.5 w-3.5" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg> Invoices retried on error and monitored</span>
<span bis_size='{"x":317,"y":2584,"w":198,"h":24,"abs_x":797,"abs_y":2627}' className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-1 ring-1 ring-white/10"><svg bis_size='{"x":325,"y":2589,"w":14,"h":14,"abs_x":805,"abs_y":2632}' className="lucide lucide-building-2 h-3.5 w-3.5" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg> Invoice correction supported</span>
<span bis_size='{"x":528,"y":2584,"w":236,"h":24,"abs_x":1008,"abs_y":2627}' className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-1 ring-1 ring-white/10"><svg bis_size='{"x":536,"y":2589,"w":14,"h":14,"abs_x":1016,"abs_y":2632}' className="lucide lucide-file-text h-3.5 w-3.5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> Legal invoice requirements covered</span>
</div>
</div>
</div>
</section>

<section bis_size='{"x":16,"y":2705,"w":1280,"h":368,"abs_x":496,"abs_y":2748}' className="mx-auto max-w-7xl px-4 pb-16">
<div bis_size='{"x":32,"y":2705,"w":1248,"h":304,"abs_x":512,"abs_y":2748}' className="grid gap-6 lg:grid-cols-2">
<div bis_size='{"x":32,"y":2705,"w":612,"h":304,"abs_x":512,"abs_y":2748}' className="rounded-xl border border-white/10 bg-white/5 p-6">
<div bis_size='{"x":57,"y":2730,"w":562,"h":28,"abs_x":537,"abs_y":2773}' className="flex items-center justify-between">
<h3 bis_size='{"x":57,"y":2730,"w":202,"h":28,"abs_x":537,"abs_y":2773}' className="text-xl font-semibold tracking-tight text-white">Your Clients &amp; Earnings</h3>
<svg bis_size='{"x":599,"y":2734,"w":20,"h":20,"abs_x":1079,"abs_y":2777}' className="lucide lucide-bar-chart-3 h-5 w-5 text-zinc-300" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<p bis_size='{"x":57,"y":2762,"w":562,"h":20,"abs_x":537,"abs_y":2805}' className="mt-1 text-sm text-zinc-400">Monitor monthly commissions at a glance.</p>
<div bis_size='{"x":57,"y":2798,"w":562,"h":186,"abs_x":537,"abs_y":2841}' className="mt-4 rounded-lg border border-white/10 bg-black/20 p-3">
<div bis_size='{"x":70,"y":2811,"w":536,"h":160,"abs_x":550,"abs_y":2854}'>
<canvas bis_size='{"x":70,"y":2811,"w":536,"h":160,"abs_x":550,"abs_y":2854}' className="h-40 w-full" height="320" id="earningsChart" style={{display: 'block', boxSizing: 'border-box', height: '160px', width: '536px'}} width="1072"></canvas>
</div>
</div>
</div>
<div bis_size='{"x":668,"y":2705,"w":612,"h":304,"abs_x":1148,"abs_y":2748}' className="rounded-xl border border-white/10 bg-white/5 p-6">
<div bis_size='{"x":693,"y":2730,"w":562,"h":28,"abs_x":1173,"abs_y":2773}' className="flex items-center justify-between">
<h3 bis_size='{"x":693,"y":2730,"w":158,"h":28,"abs_x":1173,"abs_y":2773}' className="text-xl font-semibold tracking-tight text-white">Security &amp; Privacy</h3>
<svg bis_size='{"x":1235,"y":2734,"w":20,"h":20,"abs_x":1715,"abs_y":2777}' className="lucide lucide-shield h-5 w-5 text-zinc-300" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<ul bis_size='{"x":693,"y":2770,"w":562,"h":116,"abs_x":1173,"abs_y":2813}' className="mt-3 space-y-3 text-sm text-zinc-300">
<li bis_size='{"x":693,"y":2770,"w":562,"h":20,"abs_x":1173,"abs_y":2813}' className="flex items-start gap-3"><svg bis_size='{"x":693,"y":2772,"w":16,"h":16,"abs_x":1173,"abs_y":2815}' className="lucide lucide-file-lock-2 mt-0.5 h-4 w-4 text-[var(--accent)]" data-lucide="file-lock-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><rect height="5" rx="1" width="8" x="2" y="13"></rect><path d="M8 13v-2a2 2 0 1 0-4 0v2"></path></svg> AVV signing required before workspace access</li>
<li bis_size='{"x":693,"y":2802,"w":562,"h":20,"abs_x":1173,"abs_y":2845}' className="flex items-start gap-3"><svg bis_size='{"x":693,"y":2804,"w":16,"h":16,"abs_x":1173,"abs_y":2847}' className="lucide lucide-clipboard-list mt-0.5 h-4 w-4 text-[var(--accent)]" data-lucide="clipboard-list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg> Complete audit log on actions and invoices</li>
<li bis_size='{"x":693,"y":2834,"w":562,"h":20,"abs_x":1173,"abs_y":2877}' className="flex items-start gap-3"><svg bis_size='{"x":693,"y":2836,"w":16,"h":16,"abs_x":1173,"abs_y":2879}' className="lucide lucide-user-round mt-0.5 h-4 w-4 text-[var(--accent)]" data-lucide="user-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg> Client‑centric data visibility and RTL localization</li>
<li bis_size='{"x":693,"y":2866,"w":562,"h":20,"abs_x":1173,"abs_y":2909}' className="flex items-start gap-3"><svg bis_size='{"x":693,"y":2868,"w":16,"h":16,"abs_x":1173,"abs_y":2911}' className="lucide lucide-database mt-0.5 h-4 w-4 text-[var(--accent)]" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg> Archiving with manifest and checksum verification</li>
</ul>
<div bis_size='{"x":693,"y":2906,"w":562,"h":36,"abs_x":1173,"abs_y":2949}' className="mt-5">
<a bis_size='{"x":693,"y":2906,"w":199,"h":36,"abs_x":1173,"abs_y":2949}' className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold tracking-tight text-black hover:opacity-90 focus:outline focus:outline-2 focus:outline-[var(--accent)]" href="#demo" style={{backgroundColor: 'var(--accent)'}}>
              See a live walkthrough <svg bis_size='{"x":860,"y":2916,"w":16,"h":16,"abs_x":1340,"abs_y":2959}' className="lucide lucide-video h-4 w-4" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
</a>
</div>
</div>
</div>
</section>

<section bis_size='{"x":16,"y":3073,"w":1280,"h":64,"abs_x":496,"abs_y":3116}' className="mx-auto max-w-7xl px-4 pb-16" id="demo">
</section>

<section bis_size='{"x":16,"y":3137,"w":1280,"h":389,"abs_x":496,"abs_y":3180}' className="mx-auto max-w-7xl px-4 pb-16" id="faq">
<div bis_size='{"x":32,"y":3137,"w":1248,"h":56,"abs_x":512,"abs_y":3180}' className="mb-6">
<h3 bis_size='{"x":32,"y":3137,"w":1248,"h":32,"abs_x":512,"abs_y":3180}' className="text-2xl font-semibold tracking-tight text-white">Frequently asked questions</h3>
<p bis_size='{"x":32,"y":3173,"w":1248,"h":20,"abs_x":512,"abs_y":3216}' className="mt-1 text-sm text-zinc-400">Everything from folders to archiving and GDPR.</p>
</div>
<div bis_size='{"x":32,"y":3217,"w":1248,"h":245,"abs_x":512,"abs_y":3260}' className="divide-y divide-white/10 rounded-xl border border-white/10 bg-white/5">
<details bis_size='{"x":33,"y":3218,"w":1246,"h":60,"abs_x":513,"abs_y":3261}' className="group p-5">
<summary bis_size='{"x":53,"y":3238,"w":1206,"h":20,"abs_x":533,"abs_y":3281}' className="flex cursor-pointer list-none items-center justify-between">
<span bis_size='{"x":53,"y":3238,"w":354,"h":20,"abs_x":533,"abs_y":3281}' className="text-sm font-medium text-zinc-200">Can clients create subfolders and upload documents?</span>
<svg bis_size='{"x":1243,"y":3240,"w":16,"h":16,"abs_x":1723,"abs_y":3283}' className="lucide lucide-chevron-down h-4 w-4 text-zinc-400 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div bis_size='{"x":0,"y":1287,"w":0,"h":0,"abs_x":480,"abs_y":1330}' className="mt-3 text-sm text-zinc-400">Yes. Clients can create subfolders and upload PDFs. All uploads are validated, stored, and create tasks with notifications.</div>
</details>
<details bis_size='{"x":33,"y":3278,"w":1246,"h":61,"abs_x":513,"abs_y":3321}' className="group p-5">
<summary bis_size='{"x":53,"y":3299,"w":1206,"h":20,"abs_x":533,"abs_y":3342}' className="flex cursor-pointer list-none items-center justify-between">
<span bis_size='{"x":53,"y":3299,"w":358,"h":20,"abs_x":533,"abs_y":3342}' className="text-sm font-medium text-zinc-200">How do paid templates and extras appear on invoices?</span>
<svg bis_size='{"x":1243,"y":3301,"w":16,"h":16,"abs_x":1723,"abs_y":3344}' className="lucide lucide-chevron-down h-4 w-4 text-zinc-400 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div bis_size='{"x":0,"y":1287,"w":0,"h":0,"abs_x":480,"abs_y":1330}' className="mt-3 text-sm text-zinc-400">When a Mandant selects a paid item, the price is confirmed and the charge is added to the next invoice automatically with an audit record.</div>
</details>
<details bis_size='{"x":33,"y":3339,"w":1246,"h":61,"abs_x":513,"abs_y":3382}' className="group p-5">
<summary bis_size='{"x":53,"y":3360,"w":1206,"h":20,"abs_x":533,"abs_y":3403}' className="flex cursor-pointer list-none items-center justify-between">
<span bis_size='{"x":53,"y":3360,"w":360,"h":20,"abs_x":533,"abs_y":3403}' className="text-sm font-medium text-zinc-200">Can we restore archived files back to working storage?</span>
<svg bis_size='{"x":1243,"y":3362,"w":16,"h":16,"abs_x":1723,"abs_y":3405}' className="lucide lucide-chevron-down h-4 w-4 text-zinc-400 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div bis_size='{"x":0,"y":1287,"w":0,"h":0,"abs_x":480,"abs_y":1330}' className="mt-3 text-sm text-zinc-400">Yes. Use Archive Search to find items and restore single files or bulk periods with checksum verification and audit logs.</div>
</details>
<details bis_size='{"x":33,"y":3400,"w":1246,"h":61,"abs_x":513,"abs_y":3443}' className="group p-5">
<summary bis_size='{"x":53,"y":3421,"w":1206,"h":20,"abs_x":533,"abs_y":3464}' className="flex cursor-pointer list-none items-center justify-between">
<span bis_size='{"x":53,"y":3421,"w":309,"h":20,"abs_x":533,"abs_y":3464}' className="text-sm font-medium text-zinc-200">Do you support Arabic and right‑to‑left layout?</span>
<svg bis_size='{"x":1243,"y":3423,"w":16,"h":16,"abs_x":1723,"abs_y":3466}' className="lucide lucide-chevron-down h-4 w-4 text-zinc-400 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div bis_size='{"x":0,"y":1287,"w":0,"h":0,"abs_x":480,"abs_y":1330}' className="mt-3 text-sm text-zinc-400">Yes, the interface supports EN/DE/AR with correct RTL rendering and automatic persistence across sessions.</div>
</details>
</div>
</section>

<footer bis_size='{"x":0,"y":3526,"w":1312,"h":294,"abs_x":480,"abs_y":3569}' className="border-t border-white/10">
<div bis_size='{"x":16,"y":3527,"w":1280,"h":293,"abs_x":496,"abs_y":3570}' className="mx-auto max-w-7xl px-4 py-10">
<div bis_size='{"x":32,"y":3567,"w":1248,"h":132,"abs_x":512,"abs_y":3610}' className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
<div bis_size='{"x":32,"y":3567,"w":288,"h":132,"abs_x":512,"abs_y":3610}' className="space-y-3">
<div bis_size='{"x":32,"y":3567,"w":288,"h":32,"abs_x":512,"abs_y":3610}' className="flex items-center gap-3">
<div bis_size='{"x":32,"y":3567,"w":32,"h":32,"abs_x":512,"abs_y":3610}' className="grid h-8 w-8 place-content-center rounded-md ring-1 ring-white/10 bg-white/5 text-zinc-100">
<span bis_size='{"x":43,"y":3573,"w":8,"h":19,"abs_x":523,"abs_y":3616}' className="text-[13px] font-semibold tracking-tight">A</span>
</div>
<span bis_size='{"x":76,"y":3573,"w":79,"h":20,"abs_x":556,"abs_y":3616}' className="text-sm font-semibold tracking-tight text-white">AccountOps</span>
</div>
<p bis_size='{"x":32,"y":3611,"w":288,"h":60,"abs_x":512,"abs_y":3654}' className="text-sm text-zinc-400">Secure workspaces for firms and clients to collaborate on the entire accounting lifecycle.</p>
<div bis_size='{"x":32,"y":3683,"w":288,"h":16,"abs_x":512,"abs_y":3726}' className="flex gap-3 text-zinc-400">
<svg bis_size='{"x":32,"y":3683,"w":16,"h":16,"abs_x":512,"abs_y":3726}' className="lucide lucide-twitter h-4 w-4 hover:text-white" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
<svg bis_size='{"x":60,"y":3683,"w":16,"h":16,"abs_x":540,"abs_y":3726}' className="lucide lucide-github h-4 w-4 hover:text-white" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
<svg bis_size='{"x":88,"y":3683,"w":16,"h":16,"abs_x":568,"abs_y":3726}' className="lucide lucide-linkedin h-4 w-4 hover:text-white" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</div>
</div>
<div bis_size='{"x":352,"y":3567,"w":288,"h":132,"abs_x":832,"abs_y":3610}' className="space-y-3">
<h4 bis_size='{"x":352,"y":3567,"w":288,"h":20,"abs_x":832,"abs_y":3610}' className="text-sm font-semibold tracking-tight text-white">Product</h4>
<ul bis_size='{"x":352,"y":3599,"w":288,"h":92,"abs_x":832,"abs_y":3642}' className="space-y-1 text-sm text-zinc-400">
<li bis_size='{"x":352,"y":3599,"w":288,"h":20,"abs_x":832,"abs_y":3642}'><a bis_size='{"x":352,"y":3600,"w":56,"h":16,"abs_x":832,"abs_y":3643}' className="hover:text-white" href="#features">Features</a></li>
<li bis_size='{"x":352,"y":3623,"w":288,"h":20,"abs_x":832,"abs_y":3666}'><a bis_size='{"x":352,"y":3624,"w":68,"h":16,"abs_x":832,"abs_y":3667}' className="hover:text-white" href="#use-cases">Use Cases</a></li>
<li bis_size='{"x":352,"y":3647,"w":288,"h":20,"abs_x":832,"abs_y":3690}'><a bis_size='{"x":352,"y":3648,"w":44,"h":16,"abs_x":832,"abs_y":3691}' className="hover:text-white" href="#pricing">Pricing</a></li>
<li bis_size='{"x":352,"y":3671,"w":288,"h":20,"abs_x":832,"abs_y":3714}'><a bis_size='{"x":352,"y":3672,"w":26,"h":16,"abs_x":832,"abs_y":3715}' className="hover:text-white" href="#faq">FAQ</a></li>
</ul>
</div>
<div bis_size='{"x":672,"y":3567,"w":288,"h":132,"abs_x":1152,"abs_y":3610}' className="space-y-3">
<h4 bis_size='{"x":672,"y":3567,"w":288,"h":20,"abs_x":1152,"abs_y":3610}' className="text-sm font-semibold tracking-tight text-white">Compliance</h4>
<ul bis_size='{"x":672,"y":3599,"w":288,"h":92,"abs_x":1152,"abs_y":3642}' className="space-y-1 text-sm text-zinc-400">
<li bis_size='{"x":672,"y":3599,"w":288,"h":20,"abs_x":1152,"abs_y":3642}'><a bis_size='{"x":672,"y":3600,"w":38,"h":16,"abs_x":1152,"abs_y":3643}' className="hover:text-white" href="#compliance">GDPR</a></li>
<li bis_size='{"x":672,"y":3623,"w":288,"h":20,"abs_x":1152,"abs_y":3666}'><a bis_size='{"x":672,"y":3624,"w":26,"h":16,"abs_x":1152,"abs_y":3667}' className="hover:text-white" href="#compliance">AVV</a></li>
<li bis_size='{"x":672,"y":3647,"w":288,"h":20,"abs_x":1152,"abs_y":3690}'><a bis_size='{"x":672,"y":3648,"w":68,"h":16,"abs_x":1152,"abs_y":3691}' className="hover:text-white" href="#compliance">Audit Logs</a></li>
<li bis_size='{"x":672,"y":3671,"w":288,"h":20,"abs_x":1152,"abs_y":3714}'><a bis_size='{"x":672,"y":3672,"w":93,"h":16,"abs_x":1152,"abs_y":3715}' className="hover:text-white" href="#compliance">Data Requests</a></li>
</ul>
</div>
<div bis_size='{"x":992,"y":3567,"w":288,"h":132,"abs_x":1472,"abs_y":3610}' className="space-y-3">
<h4 bis_size='{"x":992,"y":3567,"w":288,"h":20,"abs_x":1472,"abs_y":3610}' className="text-sm font-semibold tracking-tight text-white">Language</h4>
<div bis_size='{"x":992,"y":3599,"w":288,"h":30,"abs_x":1472,"abs_y":3642}' className="flex gap-2">
<button bis_size='{"x":992,"y":3599,"w":42,"h":30,"abs_x":1472,"abs_y":3642}' className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 transition hover:bg-white/10 focus:outline focus:outline-2 focus:outline-[var(--accent)]">EN</button>
<button bis_size='{"x":1042,"y":3599,"w":41,"h":30,"abs_x":1522,"abs_y":3642}' className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 transition hover:bg-white/10 focus:outline focus:outline-2 focus:outline-[var(--accent)]">DE</button>
<button bis_size='{"x":1091,"y":3599,"w":41,"h":30,"abs_x":1571,"abs_y":3642}' className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 transition hover:bg-white/10 focus:outline focus:outline-2 focus:outline-[var(--accent)]">AR</button>
</div>
<p bis_size='{"x":992,"y":3641,"w":288,"h":16,"abs_x":1472,"abs_y":3684}' className="text-xs text-zinc-500">Arabic displays in RTL.</p>
</div>
</div>
<div bis_size='{"x":32,"y":3739,"w":1248,"h":41,"abs_x":512,"abs_y":3782}' className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
<p bis_size='{"x":32,"y":3764,"w":229,"h":16,"abs_x":512,"abs_y":3807}' className="text-xs text-zinc-500">© <span bis_size='{"x":46,"y":3765,"w":29,"h":14,"abs_x":526,"abs_y":3808}' id="year">2025</span> AccountOps. All rights reserved.</p>
<div bis_size='{"x":1125,"y":3764,"w":154,"h":16,"abs_x":1605,"abs_y":3807}' className="flex items-center gap-4 text-xs text-zinc-500">
<a bis_size='{"x":1125,"y":3764,"w":41,"h":16,"abs_x":1605,"abs_y":3807}' className="hover:text-white" href="#">Privacy</a>
<a bis_size='{"x":1182,"y":3764,"w":34,"h":16,"abs_x":1662,"abs_y":3807}' className="hover:text-white" href="#">Terms</a>
<a bis_size='{"x":1233,"y":3764,"w":46,"h":16,"abs_x":1713,"abs_y":3807}' className="hover:text-white" href="#">Security</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
