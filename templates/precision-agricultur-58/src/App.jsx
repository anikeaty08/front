import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Activate lucide icons
      lucide.createIcons();

      // Mobile menu toggle
      const menuBtn = document.getElementById('menuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      let open = false;
      menuBtn?.addEventListener('click', () => {
        open = !open;
        mobileMenu.classList.toggle('hidden', !open);
        menuBtn.innerHTML = open ? '<i data-lucide="x" class="w-6 h-6"></i>' : '<i data-lucide="menu" class="w-6 h-6"></i>';
        lucide.createIcons();
      });

      // Footer year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Chart.js moisture line
      const ctx = document.getElementById('moistureChart');
      if (ctx) {
        const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 240);
        gradient.addColorStop(0, 'rgba(137, 157, 120, 0.35)');   // #899d78
        gradient.addColorStop(1, 'rgba(137, 157, 120, 0.02)');

        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
            datasets: [
              {
                label: 'VWC',
                data: [21, 22, 20, 24, 23, 22, 27],
                borderColor: '#899d78',
                backgroundColor: gradient,
                tension: 0.36,
                fill: true,
                pointRadius: 3,
                pointBackgroundColor: '#899d78',
                pointBorderWidth: 0
              },
              {
                label: 'Target',
                data: [24, 24, 24, 24, 24, 24, 24],
                borderColor: '#3e5b6d',
                borderDash: [6, 6],
                tension: 0.1,
                fill: false,
                pointRadius: 0
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: '#0f172a',
                titleColor: '#fff',
                bodyColor: '#fff',
                padding: 10,
                borderColor: 'rgba(255,255,255,0.08)',
                borderWidth: 1
              }
            },
            scales: {
              x: {
                grid: { display: false },
                ticks: { color: '#64748b', font: { size: 11 } }
              },
              y: {
                beginAtZero: true,
                suggestedMax: 30,
                ticks: { color: '#64748b', callback: (v) => v + '%' },
                grid: { color: 'rgba(2,6,23,0.06)' }
              }
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
      

<header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between h-16">
<a className="flex items-center gap-3" href="#">


<img alt="Ambio Agrosense logo" className="h-8 w-auto" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-700 hover:text-slate-900 transition" href="#">Solutions</a>
<a className="text-sm font-medium text-slate-700 hover:text-slate-900 transition" href="#">Platform</a>
<a className="text-sm font-medium text-slate-700 hover:text-slate-900 transition" href="#">Pricing</a>
<a className="text-sm font-medium text-slate-700 hover:text-slate-900 transition" href="#">Resources</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="text-sm font-medium text-slate-700 hover:text-slate-900" href="#">Sign in</a>
<a className="inline-flex items-center gap-2 rounded-lg bg-[#3e5b6d] px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#899d78]" href="#contact">
<i className="w-4 h-4" data-lucide="sparkles"></i>
              Request demo
            </a>
</div>
<button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#899d78]" id="menuBtn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>

<div className="hidden md:hidden pb-4" id="mobileMenu">
<div className="grid gap-2">
<a className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100" href="#">Solutions</a>
<a className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100" href="#">Platform</a>
<a className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100" href="#">Pricing</a>
<a className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100" href="#">Resources</a>
<div className="h-px bg-slate-200 my-2"></div>
<a className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100" href="#">Sign in</a>
<a className="rounded-md px-3 py-2 text-sm font-medium text-white bg-[#3e5b6d] hover:opacity-95" href="#contact">Request demo</a>
</div>
</div>
</div>
</header>

<section className="relative">

<div className="absolute inset-0">
<div className="absolute inset-0 bg-center bg-cover" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp'}}></div>
<div className="absolute inset-0 bg-slate-900/70"></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 py-28 md:py-36">
<div className="max-w-2xl">
<span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/20 backdrop-blur">
<i className="w-3.5 h-3.5" data-lucide="leaf"></i>
            Precision agriculture platform
          </span>
<h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Smarter fields. Stronger yields.
          </h1>
<p className="mt-4 text-base md:text-lg text-white/80">
            Real-time sensor data, satellite insights, and automation—unified to help farms reduce water, cut inputs, and maximize outcomes.
          </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#899d78] px-5 py-3 text-sm font-medium text-slate-900 shadow hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#899d78]" href="#get-started">
<i className="w-4 h-4" data-lucide="play"></i>
              Get started
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/20 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#899d78]" href="#platform">
<i className="w-4 h-4" data-lucide="scan-line"></i>
              Explore the platform
            </a>
</div>
</div>

<div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
<div className="rounded-xl bg-white/10 ring-1 ring-white/15 p-4 text-white/90">
<div className="text-2xl font-semibold tracking-tight">18%</div>
<div className="text-xs">Yield increase</div>
</div>
<div className="rounded-xl bg-white/10 ring-1 ring-white/15 p-4 text-white/90">
<div className="text-2xl font-semibold tracking-tight">-27%</div>
<div className="text-xs">Water usage</div>
</div>
<div className="rounded-xl bg-white/10 ring-1 ring-white/15 p-4 text-white/90">
<div className="text-2xl font-semibold tracking-tight">24/7</div>
<div className="text-xs">Sensor coverage</div>
</div>
<div className="rounded-xl bg-white/10 ring-1 ring-white/15 p-4 text-white/90">
<div className="text-2xl font-semibold tracking-tight">98.9%</div>
<div className="text-xs">Uptime</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-24" id="platform">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">From soil to sky—one unified view</h2>
<p className="mt-3 text-slate-600">
            Connect field sensors, weather, and satellite data to drive precise irrigation and nutrient decisions.
          </p>
</div>
<div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="rounded-2xl border border-slate-200 p-5 hover:shadow-sm transition">
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#3e5b6d]/10 text-[#3e5b6d]">
<i className="w-5 h-5" data-lucide="radar"></i>
</span>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Sensor intelligence</h3>
</div>
<p className="mt-3 text-sm text-slate-600">Continuous moisture, temp, and EC monitoring with anomaly alerts.</p>
</div>
<div className="rounded-2xl border border-slate-200 p-5 hover:shadow-sm transition">
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#899d78]/15 text-[#899d78]">
<i className="w-5 h-5" data-lucide="satellite"></i>
</span>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Satellite + weather</h3>
</div>
<p className="mt-3 text-sm text-slate-600">NDVI, EVI, and hyperlocal forecasts to anticipate stress early.</p>
</div>
<div className="rounded-2xl border border-slate-200 p-5 hover:shadow-sm transition">
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#3e5b6d]/10 text-[#3e5b6d]">
<i className="w-5 h-5" data-lucide="droplets"></i>
</span>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Irrigation automation</h3>
</div>
<p className="mt-3 text-sm text-slate-600">Closed-loop scheduling that saves water while protecting yield.</p>
</div>
<div className="rounded-2xl border border-slate-200 p-5 hover:shadow-sm transition">
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#899d78]/15 text-[#899d78]">
<i className="w-5 h-5" data-lucide="leaf"></i>
</span>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Sustainability KPIs</h3>
</div>
<p className="mt-3 text-sm text-slate-600">Track input efficiency, water intensity, and emissions per acre.</p>
</div>
</div>
</div>
</section>

<section className="py-8">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-6">
<div className="rounded-2xl border border-slate-200 overflow-hidden">
<div className="p-5 flex items-center justify-between">
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Field Moisture Trend</h3>
<p className="text-sm text-slate-600">7-day volumetric water content</p>
</div>
<span className="inline-flex items-center gap-2 rounded-full bg-[#3e5b6d]/10 text-[#3e5b6d] px-3 py-1 text-xs font-medium">
<i className="w-4 h-4" data-lucide="activity"></i>
              Live
            </span>
</div>
<div className="px-5 pb-5">

<div className="relative h-64">
<canvas className="absolute inset-0" id="moistureChart"></canvas>
</div>
</div>
<div className="px-5 pb-5 grid grid-cols-3 gap-4 text-sm">
<div className="rounded-lg bg-slate-50 p-3">
<div className="text-xs text-slate-500">Avg VWC</div>
<div className="mt-1 text-base font-semibold tracking-tight text-slate-900">22.8%</div>
</div>
<div className="rounded-lg bg-slate-50 p-3">
<div className="text-xs text-slate-500">Irrigations</div>
<div className="mt-1 text-base font-semibold tracking-tight text-slate-900">2 events</div>
</div>
<div className="rounded-lg bg-slate-50 p-3">
<div className="text-xs text-slate-500">Stress alerts</div>
<div className="mt-1 text-base font-semibold tracking-tight text-[#3e5b6d]">0 this week</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-200 overflow-hidden">
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Block overview</h3>
<p className="text-sm text-slate-600">Variability at a glance for faster scouting</p>
</div>
<div className="px-5 pb-5">
<div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200">
<img alt="Field overview aerial" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&amp;w=2100&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="px-5 pb-5 grid sm:grid-cols-3 gap-4">
<div className="flex items-center gap-3 rounded-lg bg-[#3e5b6d]/10 p-3 text-[#3e5b6d]">
<i className="w-5 h-5" data-lucide="thermometer-sun"></i>
<div>
<div className="text-xs">Temp</div>
<div className="text-sm font-semibold tracking-tight text-slate-900">28.6°C</div>
</div>
</div>
<div className="flex items-center gap-3 rounded-lg bg-[#899d78]/15 p-3 text-[#899d78]">
<i className="w-5 h-5" data-lucide="droplet"></i>
<div>
<div className="text-xs">Soil moisture</div>
<div className="text-sm font-semibold tracking-tight text-slate-900">23%</div>
</div>
</div>
<div className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
<i className="w-5 h-5 text-slate-500" data-lucide="wind"></i>
<div>
<div className="text-xs">Wind</div>
<div className="text-sm font-semibold tracking-tight text-slate-900">9 km/h</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-7xl mx-auto px-6">
<div className="rounded-3xl bg-gradient-to-tr from-[#3e5b6d] via-[#3e5b6d] to-[#899d78] p-8 md:p-12">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div>
<h3 className="text-3xl font-semibold tracking-tight text-white">Ready to grow smarter?</h3>
<p className="mt-2 text-white/80">Deploy in days. See impact in weeks.</p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:bg-white/95" href="#contact">
<i className="w-4 h-4" data-lucide="calendar"></i>
                  Book a walkthrough
                </a>
<a className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/20 hover:bg-white/15" href="#">
<i className="w-4 h-4" data-lucide="file-text"></i>
                  Download spec sheet
                </a>
</div>
</div>
<div className="bg-white/10 rounded-2xl ring-1 ring-white/20 p-6">
<div className="grid sm:grid-cols-3 gap-4">
<div className="text-white">
<div className="text-2xl font-semibold tracking-tight">-22%</div>
<div className="text-xs">Fertilizer per acre</div>
</div>
<div className="text-white">
<div className="text-2xl font-semibold tracking-tight">+14%</div>
<div className="text-xs">Net margin</div>
</div>
<div className="text-white">
<div className="text-2xl font-semibold tracking-tight">3x</div>
<div className="text-xs">Faster scouting</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200" id="contact">
<div className="max-w-7xl mx-auto px-6 py-10">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
<div>
<a className="flex items-center gap-3" href="#">
<img alt="Ambio Agrosense logo" className="h-7 w-auto" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</a>
<p className="mt-3 text-sm text-slate-600">Precision agriculture for resilient, data-driven farming.</p>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-slate-900">Product</h4>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-slate-600 hover:text-slate-900" href="#">Sensors</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#">Analytics</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-slate-900">Company</h4>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-slate-600 hover:text-slate-900" href="#">About</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#">Careers</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-slate-900">Get in touch</h4>
<ul className="mt-3 space-y-2 text-sm">
<li className="flex items-center gap-2 text-slate-600">
<i className="w-4 h-4 text-[#3e5b6d]" data-lucide="mail"></i>
                hello@ambioagrosense.com
              </li>
<li className="flex items-center gap-2 text-slate-600">
<i className="w-4 h-4 text-[#3e5b6d]" data-lucide="map-pin"></i>
                123 Harvest Rd, CA
              </li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-500">© <span id="year"></span> Ambio Agrosense. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-xs text-slate-500 hover:text-slate-700" href="#">Privacy</a>
<a className="text-xs text-slate-500 hover:text-slate-700" href="#">Terms</a>
<a className="text-xs text-slate-500 hover:text-slate-700" href="#">Security</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
