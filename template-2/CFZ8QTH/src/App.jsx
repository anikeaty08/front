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
      
    // Icons
    lucide.createIcons();

    // ===== Theme Switcher =====
    const themeToggle = document.getElementById('themeToggle');
    const root = document.documentElement;

    // Initial mode
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      root.classList.add('dark');
    }

    themeToggle.addEventListener('click', () => {
      root.classList.toggle('dark');
      localStorage.theme = root.classList.contains('dark') ? 'dark' : 'light';
      // Refresh icons so the right one is shown
      lucide.createIcons();
    });

    // ===== Chart.js =====
    const ctx = document.getElementById('statsChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Training Load',
          data: [40, 48, 52, 45, 60, 70],
          borderColor: '#6366F1',
          backgroundColor: 'rgba(99,102,241,0.1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: '#9CA3AF' }, grid: { color: 'rgba(0,0,0,0.05)' } },
          y: { ticks: { color: '#9CA3AF' }, grid: { color: 'rgba(0,0,0,0.05)' } }
        }
      }
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
      

<header className="sticky top-0 z-50 backdrop-blur lg:px-24 px-6">
<nav className="flex items-center justify-between py-4 border-b border-neutral-200 dark:border-neutral-800">
<a className="flex items-center gap-2" href="#">
<i className="w-6 h-6 text-indigo-600 dark:text-indigo-500" data-lucide="shield"></i>
<span className="text-lg font-semibold tracking-tight">SquadKeepers</span>
</a>
<ul className="hidden md:flex items-center gap-8 text-sm">
<li><a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#features">Features</a></li>
<li><a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#analytics">Analytics</a></li>
<li><a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#pricing">Pricing</a></li>
<li><a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#contact">Contact</a></li>
</ul>
<div className="flex items-center gap-3">

<button aria-label="Toggle theme" className="p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors" id="themeToggle">
<i className="w-5 h-5 hidden dark:inline" data-lucide="sun"></i>
<i className="w-5 h-5 inline dark:hidden" data-lucide="moon"></i>
</button>
<button className="hidden md:inline-flex items-center px-4 py-2 text-sm border border-neutral-300 dark:border-neutral-700 rounded-md hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-indigo-500 dark:hover:text-indigo-400 transition-all">
          Log In
        </button>
<button className="inline-flex items-center px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm text-sm font-medium rounded-md text-white">
          Get Started
        </button>
</div>
</nav>
</header>

<section className="relative overflow-hidden pt-24 pb-32 lg:px-24 px-6">
<div className="absolute inset-0 -z-10">
<img alt="Team huddle" className="w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/90 to-white dark:from-neutral-900/90 dark:via-neutral-950/90 dark:to-neutral-950"></div>
</div>
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6">
        Keep Your Squad in Sync
      </h1>
<p className="max-w-xl mx-auto text-neutral-600 dark:text-neutral-400 mb-10">
        One platform to manage rosters, schedules, and real-time performance analytics—built for modern teams and clubs.
      </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-md bg-indigo-600 hover:bg-indigo-500 transition-colors text-sm font-medium shadow text-white">
          Get Started
          <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="inline-flex items-center justify-center gap-2 px-7 py-3 border border-neutral-300 dark:border-neutral-700 rounded-md hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-indigo-500 dark:hover:text-indigo-400 transition-all text-sm font-medium">
<i className="w-4 h-4" data-lucide="play-circle"></i>
          Watch Demo
        </button>
</div>
</div>
</section>

<section className="lg:px-24 px-6 py-24 border-t border-neutral-200 dark:border-neutral-800" id="features">
<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Everything You Need</h2>
<p className="text-neutral-600 dark:text-neutral-400">
        From roster management to in-depth statistics, we streamline every aspect of team coordination.
      </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

<div className="group border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 hover:border-indigo-600 dark:hover:border-indigo-500 transition-colors">
<i className="w-8 h-8 text-indigo-600 dark:text-indigo-500 mb-4" data-lucide="users"></i>
<h3 className="text-lg font-medium mb-2">Roster Control</h3>
<p className="text-sm text-neutral-600 dark:text-neutral-400">Manage player profiles, positions, and availability in one intuitive dashboard.</p>
</div>
<div className="group border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 hover:border-indigo-600 dark:hover:border-indigo-500 transition-colors">
<i className="w-8 h-8 text-indigo-600 dark:text-indigo-500 mb-4" data-lucide="calendar"></i>
<h3 className="text-lg font-medium mb-2">Smart Scheduling</h3>
<p className="text-sm text-neutral-600 dark:text-neutral-400">Automated training and game schedules that sync with every device.</p>
</div>
<div className="group border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 hover:border-indigo-600 dark:hover:border-indigo-500 transition-colors">
<i className="w-8 h-8 text-indigo-600 dark:text-indigo-500 mb-4" data-lucide="activity"></i>
<h3 className="text-lg font-medium mb-2">Performance Metrics</h3>
<p className="text-sm text-neutral-600 dark:text-neutral-400">Track on-field stats and get actionable insights to improve strategy.</p>
</div>
<div className="group border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 hover:border-indigo-600 dark:hover:border-indigo-500 transition-colors">
<i className="w-8 h-8 text-indigo-600 dark:text-indigo-500 mb-4" data-lucide="clock"></i>
<h3 className="text-lg font-medium mb-2">Real-Time Updates</h3>
<p className="text-sm text-neutral-600 dark:text-neutral-400">Instant notifications for lineup changes, injuries, or tactical tweaks.</p>
</div>
<div className="group border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 hover:border-indigo-600 dark:hover:border-indigo-500 transition-colors">
<i className="w-8 h-8 text-indigo-600 dark:text-indigo-500 mb-4" data-lucide="file-text"></i>
<h3 className="text-lg font-medium mb-2">Match Reports</h3>
<p className="text-sm text-neutral-600 dark:text-neutral-400">Generate match summaries, heatmaps, and player ratings in seconds.</p>
</div>
<div className="group border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 hover:border-indigo-600 dark:hover:border-indigo-500 transition-colors">
<i className="w-8 h-8 text-indigo-600 dark:text-indigo-500 mb-4" data-lucide="cloud"></i>
<h3 className="text-lg font-medium mb-2">Secure Cloud</h3>
<p className="text-sm text-neutral-600 dark:text-neutral-400">All data encrypted and stored safely so nothing gets lost mid-season.</p>
</div>
</div>
</section>

<section className="lg:px-24 px-6 py-24 border-t border-neutral-200 dark:border-neutral-800" id="analytics">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Data-Driven Decisions</h2>
<p className="text-neutral-600 dark:text-neutral-400 mb-8">
          Visualize player workload, attendance, and performance trends in real time so coaches can focus on strategy, not spreadsheets.
        </p>
<ul className="space-y-4">
<li className="flex items-start gap-3"><i className="w-5 h-5 text-indigo-600 dark:text-indigo-500 mt-1" data-lucide="check-circle"></i><span>Automated data collection from wearables and apps.</span></li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-indigo-600 dark:text-indigo-500 mt-1" data-lucide="check-circle"></i><span>Custom dashboards for different staff members.</span></li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-indigo-600 dark:text-indigo-500 mt-1" data-lucide="check-circle"></i><span>Export insights straight to PDF or CSV.</span></li>
</ul>
</div>

<div className="relative">
<div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 bg-neutral-100/70 dark:bg-neutral-900/40">
<div className="relative w-full h-72">
<canvas id="statsChart"></canvas>
</div>
</div>
</div>
</div>
</section>

<section className="lg:px-24 px-6 py-24 border-t border-neutral-200 dark:border-neutral-800" id="pricing">
<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Simple Pricing</h2>
<p className="text-neutral-600 dark:text-neutral-400">No hidden fees. Upgrade or cancel anytime.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="flex flex-col border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8">
<h3 className="text-lg font-medium mb-4">Starter</h3>
<p className="text-4xl font-semibold tracking-tight mb-6">$29<span className="text-base font-normal text-neutral-600 dark:text-neutral-400">/mo</span></p>
<ul className="space-y-3 mb-8 text-sm">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-indigo-600 dark:text-indigo-500" data-lucide="check"></i> Up to 30 players</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-indigo-600 dark:text-indigo-500" data-lucide="check"></i> Basic analytics</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-indigo-600 dark:text-indigo-500" data-lucide="check"></i> Email support</li>
</ul>
<button className="mt-auto bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors rounded-md py-2.5 text-sm font-medium">
          Choose Plan
        </button>
</div>

<div className="flex flex-col border-2 border-indigo-600 dark:border-indigo-500 rounded-2xl p-8 shadow-lg relative overflow-hidden">
<div className="absolute -top-3 right-4 bg-indigo-600 dark:bg-indigo-500 px-3 py-1 rounded-full text-xs font-medium text-white">Popular</div>
<h3 className="text-lg font-medium mb-4">Pro Club</h3>
<p className="text-4xl font-semibold tracking-tight mb-6">$79<span className="text-base font-normal text-neutral-600 dark:text-neutral-400">/mo</span></p>
<ul className="space-y-3 mb-8 text-sm">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-indigo-600 dark:text-indigo-500" data-lucide="check"></i> Unlimited players</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-indigo-600 dark:text-indigo-500" data-lucide="check"></i> Advanced analytics</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-indigo-600 dark:text-indigo-500" data-lucide="check"></i> Priority support</li>
</ul>
<button className="mt-auto bg-indigo-600 hover:bg-indigo-500 transition-colors rounded-md py-2.5 text-sm font-medium text-white">
          Choose Plan
        </button>
</div>

<div className="flex flex-col border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8">
<h3 className="text-lg font-medium mb-4">Elite</h3>
<p className="text-4xl font-semibold tracking-tight mb-6">Custom</p>
<ul className="space-y-3 mb-8 text-sm">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-indigo-600 dark:text-indigo-500" data-lucide="check"></i> Dedicated account manager</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-indigo-600 dark:text-indigo-500" data-lucide="check"></i> On-site onboarding</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-indigo-600 dark:text-indigo-500" data-lucide="check"></i> Custom integrations</li>
</ul>
<button className="mt-auto bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors rounded-md py-2.5 text-sm font-medium">
          Contact Sales
        </button>
</div>
</div>
</section>

<section className="lg:px-24 px-6 py-24 border-t border-neutral-200 dark:border-neutral-800">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Power Up Your Season</h2>
<p className="text-neutral-600 dark:text-neutral-400 mb-10">Join thousands of coaches and managers already elevating their squads.</p>
<button className="inline-flex items-center gap-2 px-8 py-3 rounded-md bg-indigo-600 hover:bg-indigo-500 transition-colors text-sm font-medium shadow text-white">
        Start Free Trial
        <i className="w-4 h-4" data-lucide="rocket"></i>
</button>
</div>
</section>

<footer className="lg:px-24 px-6 py-16 border-t border-neutral-200 dark:border-neutral-800" id="contact">
<div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-16">
<div className="col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<i className="w-6 h-6 text-indigo-600 dark:text-indigo-500" data-lucide="shield"></i>
<span className="text-lg font-semibold tracking-tight">SquadKeepers</span>
</a>
<p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Level up your club with unified squad management tools built for performance and growth.
        </p>
</div>
<div>
<h4 className="text-sm font-medium mb-3">Product</h4>
<ul className="space-y-2 text-neutral-600 dark:text-neutral-400 text-sm">
<li><a className="hover:text-indigo-600 dark:hover:text-indigo-400" href="#features">Features</a></li>
<li><a className="hover:text-indigo-600 dark:hover:text-indigo-400" href="#analytics">Analytics</a></li>
<li><a className="hover:text-indigo-600 dark:hover:text-indigo-400" href="#pricing">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium mb-3">Company</h4>
<ul className="space-y-2 text-neutral-600 dark:text-neutral-400 text-sm">
<li><a className="hover:text-indigo-600 dark:hover:text-indigo-400" href="#">About Us</a></li>
<li><a className="hover:text-indigo-600 dark:hover:text-indigo-400" href="#">Careers</a></li>
<li><a className="hover:text-indigo-600 dark:hover:text-indigo-400" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-600">
<span>© 2024 SquadKeepers. All rights reserved.</span>
<div className="flex gap-4">
<a className="hover:text-neutral-700 dark:hover:text-neutral-400" href="#">Privacy</a>
<a className="hover:text-neutral-700 dark:hover:text-neutral-400" href="#">Terms</a>
<a className="hover:text-neutral-700 dark:hover:text-neutral-400" href="#">Status</a>
</div>
</div>
</footer>





    </>
  );
}
