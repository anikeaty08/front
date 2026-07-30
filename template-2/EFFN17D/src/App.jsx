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
      {

document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  // Navigation logic
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.page-section');
  const pageTitle = document.getElementById('page-title');
  const pageDesc = document.getElementById('page-desc');
  const titles = {
    dashboard: "Referral Dashboard",
    rewards: "Rewards",
    analytics: "Analytics",
    referrers: "Referrers",
    leads: "Leads",
    settings: "Settings"
  };
  const descs = {
    dashboard: "For Business Owners • June 2024",
    rewards: "All rewards and payouts",
    analytics: "Referral and conversion analytics",
    referrers: "Manage your advocates",
    leads: "All referred leads",
    settings: "Account and program settings"
  };
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove('bg-white/10'));
      link.classList.add('bg-white/10');
      sections.forEach(sec => sec.classList.add('hidden'));
      const page = link.getAttribute('data-page');
      document.getElementById('page-' + page).classList.remove('hidden');
      pageTitle.textContent = titles[page];
      pageDesc.textContent = descs[page];
      lucide.createIcons();
    });
  });

  // Show dashboard by default
  document.querySelector('.nav-link[data-page="dashboard"]').click();

  // Mobile sidebar
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  function toggleMobileMenu() {
    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
  }
  mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  overlay.addEventListener('click', toggleMobileMenu);

  // Chart.js defaults
  Chart.defaults.color = 'rgba(255, 255, 255, 0.6)';
  Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.1)';
  // Dashboard charts
  new Chart(document.getElementById('referralChart').getContext('2d'), {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Referrals',
        data: [85, 120, 132, 150, 180, 205, 220, 210, 230, 250, 245, 270],
        borderColor: '#06b6d4',
        backgroundColor: 'rgba(6, 182, 212, 0.12)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#06b6d4',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4
      },
      {
        label: 'Target',
        data: [100, 110, 120, 140, 150, 160, 170, 180, 190, 200, 210, 220],
        borderColor: 'rgba(139, 92, 246, 0.40)',
        backgroundColor: 'transparent',
        borderDash: [5, 5],
        pointRadius: 0,
        tension: 0.2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true, position: 'top', labels: { usePointStyle: true, padding: 20 }
        }
      },
      scales: {
        y: { beginAtZero: false }
      }
    }
  });
  new Chart(document.getElementById('rewardChart').getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: ['Gift Cards', 'Cash', 'Discounts', 'Store Credit'],
      datasets: [{
        data: [40, 30, 20, 10],
        backgroundColor: ['#3b82f6', '#f59e0b', '#8b5cf6', '#10b981'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom', labels: { padding: 20, usePointStyle: true } }
      }
    }
  });
  new Chart(document.getElementById('channelChart').getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['Email', 'Social', 'SMS', 'Direct Link'],
      datasets: [{
        data: [320, 210, 95, 70],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(139, 92, 246, 0.8)'
        ],
        borderRadius: 6,
        barThickness: 32
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, ticks: { stepSize: 100 } }
      }
    }
  });
  // Analytics Page Charts
  new Chart(document.getElementById('analyticsReferrals').getContext('2d'), {
    type: 'line',
    data: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [{
        label: 'Referrals',
        data: [32, 44]}]}})})
}
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
      
<div className="flex h-full">

<button className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-800/80 backdrop-blur-lg rounded-lg border border-white/10" id="mobileMenuBtn">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</button>

<aside className="fixed lg:relative inset-y-0 left-0 z-40 w-64 transform -translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col gap-6 border-r border-white/10 bg-slate-900/50 backdrop-blur-lg p-6" id="sidebar">
<div className="flex items-center gap-3">
<div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg grid place-content-center">
<svg className="lucide lucide-users h-5 w-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="9" cy="7"></circle></svg>
</div>
<span className="text-lg font-semibold tracking-tight">Referly Admin</span>
</div>
<button className="flex items-center justify-between gap-3 text-sm font-medium bg-blue-600/20 hover:bg-blue-600/30 transition p-3 rounded-lg">
<span className="flex items-center gap-3">
<svg className="lucide lucide-share-2 h-4 w-4" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5"></circle><circle cx="6" cy="12"></circle><circle cx="18" cy="19"></circle><line></line><line></line></svg>
        New Referral
      </span>
<kbd className="text-xs text-white/60 hidden sm:block">⌘N</kbd>
</button>
<nav className="flex flex-col gap-1 text-sm" id="main-nav">
<a className="nav-link flex items-center gap-3 px-3 py-2 rounded-lg bg-white/10" data-page="dashboard" href="#">
<svg className="lucide lucide-layout-dashboard h-4 w-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7"></rect><rect height="5" rx="1" width="7"></rect><rect height="9" rx="1" width="7"></rect><rect height="5" rx="1" width="7"></rect></svg>
        Dashboard
      </a>
<a className="nav-link flex items-center gap-3 hover:bg-white/10 transition rounded-lg pt-2 pr-3 pb-2 pl-3" data-page="rewards" href="#">
<svg className="lucide lucide-gift h-4 w-4" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18"></rect><path></path><path></path><path></path></svg>
        Rewards
      </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition" data-page="analytics" href="#">
<svg className="lucide lucide-pie-chart h-4 w-4" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
        Analytics
      </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition" data-page="referrers" href="#">
<svg className="lucide lucide-user-check h-4 w-4" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><circle cx="9" cy="7"></circle></svg>
        Referrers
      </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition" data-page="leads" href="#">
<svg className="lucide lucide-user-plus h-4 w-4" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="9" cy="7"></circle><line></line><line></line></svg>
        Leads
      </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition" data-page="settings" href="#">
<svg className="lucide lucide-settings h-4 w-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
        Settings
      </a>
</nav>
<div className="mt-auto bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-4 rounded-xl">
<p className="text-sm leading-snug">
        Boost your business: <span className="font-semibold text-cyan-400">Double referral rewards</span> this month!
      </p>
<div className="flex items-center justify-between mt-4 text-sm">
<button className="hover:underline text-white/70">Learn More</button>
<button className="bg-white/10 hover:bg-white/20 transition px-3 py-1.5 rounded-md font-medium">Upgrade</button>
</div>
</div>
</aside>
<div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden hidden" id="overlay"></div>

<div className="flex-1 flex flex-col overflow-hidden">

<header className="flex items-center justify-between gap-4 px-4 lg:px-6 py-4 border-b border-white/10 bg-slate-900/30 backdrop-blur-lg">
<div className="flex items-center gap-4">
<div className="lg:hidden w-8"></div>
<div>
<h1 className="text-2xl font-semibold tracking-tight" id="page-title">Referral Dashboard</h1>
<p className="text-xs lg:text-sm text-white/60" id="page-desc">For Business Owners • June 2024</p>
</div>
</div>
<div className="flex items-center gap-3">
<button className="relative hidden sm:block">
<svg className="lucide lucide-bell h-5 w-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-cyan-500"></span>
</button>
<svg className="lucide lucide-help-circle h-5 w-5 hidden sm:block" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path></svg>
<div className="h-8 w-8 rounded-full bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&q=80')`}}></div>
</div>
</header>
<section className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-6">

<div className="page-section" id="page-dashboard">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-slate-900/40 backdrop-blur-lg border border-white/10 rounded-xl p-4">
<div className="flex items-center justify-between">
<div className="">
<p className="text-xs text-white/60">Total Referrals</p>
<p className="text-2xl font-semibold">1,250</p>
</div>
<div className="h-10 w-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-users h-5 w-5 text-blue-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="9" cy="7"></circle></svg>
</div>
</div>
</div>
<div className="bg-slate-900/40 backdrop-blur-lg border border-white/10 rounded-xl p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-white/60">Conversion Rate</p>
<p className="text-2xl font-semibold">19.7%</p>
</div>
<div className="h-10 w-10 bg-emerald-600/20 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-check-circle h-5 w-5 text-emerald-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>
</div>
<div className="bg-slate-900/40 backdrop-blur-lg border border-white/10 rounded-xl p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-white/60">Rewards Paid</p>
<p className="text-2xl font-semibold">$4,850</p>
</div>
<div className="h-10 w-10 bg-yellow-600/20 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-gift h-5 w-5 text-yellow-300" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18"></rect><path></path><path></path><path></path></svg>
</div>
</div>
</div>
<div className="bg-slate-900/40 backdrop-blur-lg border border-white/10 rounded-xl p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-white/60">Active Referrers</p>
<p className="text-2xl font-semibold">87</p>
</div>
<div className="h-10 w-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-user-check h-5 w-5 text-purple-400" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><circle cx="9" cy="7"></circle></svg>
</div>
</div>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-6 mt-6">
<div className="lg:col-span-2 bg-slate-900/40 backdrop-blur-lg border border-white/10 rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<h2 className="font-medium">Monthly Referral Trends</h2>
<div className="flex items-center gap-2">
<span className="text-xs text-emerald-400 flex items-center gap-1">
<svg className="lucide lucide-trending-up h-3 w-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
                  +8.2%
                </span>
<select className="text-xs bg-slate-800/50 border border-white/10 rounded px-2 py-1">
<option>2024</option>
<option>2023</option>
</select>
</div>
</div>
<div className="h-48">
<canvas id="referralChart"></canvas>
</div>
</div>
<div className="bg-slate-900/40 backdrop-blur-lg border border-white/10 rounded-xl p-6">
<h2 className="font-medium mb-4">Reward Distribution</h2>
<div className="h-48">
<canvas id="rewardChart"></canvas>
</div>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-6 mt-6">
<div className="bg-slate-900/40 backdrop-blur-lg border border-white/10 rounded-xl p-6">
<h2 className="font-medium mb-4">Referral Channels</h2>
<div className="h-48">
<canvas id="channelChart"></canvas>
</div>
</div>
<div className="lg:col-span-2 bg-slate-900/40 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden">
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="text-left text-white/60 border-b border-white/10">
<tr>
<th className="py-4 px-3 lg:px-5">Referrer</th>
<th className="py-4 px-3 lg:px-5 hidden sm:table-cell">Referrals</th>
<th className="py-4 px-3 lg:px-5 hidden md:table-cell">Conversion</th>
<th className="py-4 px-3 lg:px-5 hidden lg:table-cell">Total Rewards</th>
<th className="py-4 px-3 lg:px-5"></th>
</tr>
</thead>
<tbody>
<tr className="hover:bg-white/5 transition">
<td className="py-3 px-3 lg:px-5 flex items-center gap-2">
<img alt="" className="h-6 w-6 rounded-full" src="https://randomuser.me/api/portraits/men/86.jpg" />
<span className="truncate">Alex Webster</span>
</td>
<td className="py-3 px-3 lg:px-5 hidden sm:table-cell">152</td>
<td className="py-3 px-3 lg:px-5 hidden md:table-cell">
<span className="inline-flex items-center gap-1 text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">
<svg className="lucide lucide-arrow-up-right h-2 w-2" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
                        23.5%
                      </span>
</td>
<td className="py-3 px-3 lg:px-5 hidden lg:table-cell">$610</td>
<td className="py-3 px-3 lg:px-5 text-right"><svg className="lucide lucide-more-horizontal h-4 w-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><circle cx="19" cy="12"></circle><circle cx="5" cy="12"></circle></svg></td>
</tr>
<tr className="hover:bg-white/5 transition">
<td className="py-3 px-3 lg:px-5 flex items-center gap-2">
<img alt="" className="h-6 w-6 rounded-full" src="https://randomuser.me/api/portraits/women/65.jpg" />
<span className="truncate">Priya Patel</span>
</td>
<td className="py-3 px-3 lg:px-5 hidden sm:table-cell">136</td>
<td className="py-3 px-3 lg:px-5 hidden md:table-cell">
<span className="inline-flex items-center gap-1 text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full">
<svg className="lucide lucide-activity h-2 w-2" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                        19.4%
                      </span>
</td>
<td className="py-3 px-3 lg:px-5 hidden lg:table-cell">$540</td>
<td className="py-3 px-3 lg:px-5 text-right"><svg className="lucide lucide-more-horizontal h-4 w-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><circle cx="19" cy="12"></circle><circle cx="5" cy="12"></circle></svg></td>
</tr>
<tr className="hover:bg-white/5 transition">
<td className="py-3 px-3 lg:px-5 flex items-center gap-2">
<img alt="" className="h-6 w-6 rounded-full" src="https://randomuser.me/api/portraits/men/33.jpg" />
<span className="truncate">Tomás Ibáñez</span>
</td>
<td className="py-3 px-3 lg:px-5 hidden sm:table-cell">120</td>
<td className="py-3 px-3 lg:px-5 hidden md:table-cell">
<span className="inline-flex items-center gap-1 text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">
<svg className="lucide lucide-arrow-up-right h-2 w-2" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
                        21.2%
                      </span>
</td>
<td className="py-3 px-3 lg:px-5 hidden lg:table-cell">$480</td>
<td className="py-3 px-3 lg:px-5 text-right"><svg className="lucide lucide-more-horizontal h-4 w-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><circle cx="19" cy="12"></circle><circle cx="5" cy="12"></circle></svg></td>
</tr>
<tr className="hover:bg-white/5 transition">
<td className="py-3 px-3 lg:px-5 flex items-center gap-2">
<img alt="" className="h-6 w-6 rounded-full" src="https://randomuser.me/api/portraits/women/72.jpg" />
<span className="truncate">Jessica Lee</span>
</td>
<td className="py-3 px-3 lg:px-5 hidden sm:table-cell">97</td>
<td className="py-3 px-3 lg:px-5 hidden md:table-cell">
<span className="inline-flex items-center gap-1 text-xs bg-gray-500/20 text-gray-300 px-2 py-1 rounded-full">
<svg className="lucide lucide-activity h-2 w-2" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                        14.6%
                      </span>
</td>
<td className="py-3 px-3 lg:px-5 hidden lg:table-cell">$390</td>
<td className="py-3 px-3 lg:px-5 text-right"><svg className="lucide lucide-more-horizontal h-4 w-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><circle cx="19" cy="12"></circle><circle cx="5" cy="12"></circle></svg></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div className="bg-slate-900/40 backdrop-blur-lg border border-white/10 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-4 justify-between mt-6">
<div>
<h2 className="text-lg font-semibold tracking-tight mb-1">Grow Faster with Referrals</h2>
<p className="text-sm text-white/60">Share your unique referral link and reward your best advocates.</p>
</div>
<div className="flex items-center gap-2 w-full sm:w-auto">
<input className="bg-slate-800/80 border border-white/10 text-white/80 px-3 py-2 rounded-lg text-xs w-full sm:w-64 truncate font-mono" readOnly type="text" value="https://refer.ly/yourbiz123" />
<button className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg bg-blue-600/80 hover:bg-blue-700 transition text-white">
<svg className="lucide lucide-copy h-4 w-4" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14"></rect><path></path></svg>
              Copy
            </button>
</div>
</div>
</div>

<div className="page-section hidden" id="page-rewards">
<h2 className="text-xl font-semibold tracking-tight mb-4">Rewards</h2>
<div className="bg-slate-900/40 border border-white/10 rounded-xl p-6 flex flex-col gap-4">
<div>
<p className="font-medium">Referral Rewards Overview</p>
<p className="text-sm text-white/60">See all rewards paid out and pending for your referrers.</p>
</div>
<div className="overflow-x-auto mt-4">
<table className="min-w-full text-sm">
<thead className="text-left text-white/60 border-b border-white/10">
<tr>
<th className="py-3 px-4">Date</th>
<th className="py-3 px-4">Referrer</th>
<th className="py-3 px-4">Reward</th>
<th className="py-3 px-4">Status</th>
<th className="py-3 px-4 text-right">Amount</th>
</tr>
</thead>
<tbody>
<tr className="hover:bg-white/5 transition">
<td className="py-3 px-4">2024-06-08</td>
<td className="py-3 px-4 flex items-center gap-2">
<img alt="" className="h-6 w-6 rounded-full" src="https://randomuser.me/api/portraits/men/86.jpg" />
                    Alex Webster
                  </td>
<td className="py-3 px-4">Gift Card</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1 text-xs bg-emerald-600/20 text-emerald-400 px-2 py-1 rounded-full">
                      Paid
                    </span>
</td>
<td className="py-3 px-4 text-right">$50</td>
</tr>
<tr className="hover:bg-white/5 transition">
<td className="py-3 px-4">2024-06-07</td>
<td className="py-3 px-4 flex items-center gap-2">
<img alt="" className="h-6 w-6 rounded-full" src="https://randomuser.me/api/portraits/women/65.jpg" />
                    Priya Patel
                  </td>
<td className="py-3 px-4">Cash</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1 text-xs bg-yellow-600/20 text-yellow-300 px-2 py-1 rounded-full">
                      Pending
                    </span>
</td>
<td className="py-3 px-4 text-right">$40</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="page-section hidden" id="page-analytics">
<h2 className="text-xl font-semibold tracking-tight mb-4">Analytics</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-slate-900/40 border border-white/10 rounded-xl p-6">
<h3 className="font-medium mb-2">Weekly Referrals</h3>
<div className="h-40"><canvas id="analyticsReferrals"></canvas></div>
</div>
<div className="bg-slate-900/40 border border-white/10 rounded-xl p-6">
<h3 className="font-medium mb-2">Source Breakdown</h3>
<div className="h-40"><canvas id="analyticsSources"></canvas></div>
</div>
</div>
</div>

<div className="page-section hidden" id="page-referrers">
<h2 className="text-xl font-semibold tracking-tight mb-4">Referrers</h2>
<div className="bg-slate-900/40 border border-white/10 rounded-xl p-6">
<div className="flex justify-between items-center mb-4">
<div>
<p className="font-medium">All Referrers</p>
<p className="text-sm text-white/60">Manage your network of advocates.</p>
</div>
<button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600/80 hover:bg-blue-700 transition text-white">
<svg className="lucide lucide-user-plus h-4 w-4" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="9" cy="7"></circle><line></line><line></line></svg>
              Add Referrer
            </button>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="text-left text-white/60 border-b border-white/10">
<tr>
<th className="py-3 px-4">Name</th>
<th className="py-3 px-4">Email</th>
<th className="py-3 px-4">Referrals</th>
<th className="py-3 px-4">Rewards</th>
<th className="py-3 px-4">Joined</th>
</tr>
</thead>
<tbody>
<tr className="hover:bg-white/5 transition">
<td className="py-3 px-4 flex items-center gap-2">
<img alt="" className="h-6 w-6 rounded-full" src="https://randomuser.me/api/portraits/men/86.jpg" />
                    Alex Webster
                  </td>
<td className="py-3 px-4">alex@webster.com</td>
<td className="py-3 px-4">152</td>
<td className="py-3 px-4">$610</td>
<td className="py-3 px-4">2022-05-17</td>
</tr>
<tr className="hover:bg-white/5 transition">
<td className="py-3 px-4 flex items-center gap-2">
<img alt="" className="h-6 w-6 rounded-full" src="https://randomuser.me/api/portraits/women/65.jpg" />
                    Priya Patel
                  </td>
<td className="py-3 px-4">priya.patel@email.com</td>
<td className="py-3 px-4">136</td>
<td className="py-3 px-4">$540</td>
<td className="py-3 px-4">2022-09-30</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="page-section hidden" id="page-leads">
<h2 className="text-xl font-semibold tracking-tight mb-4">Leads</h2>
<div className="bg-slate-900/40 border border-white/10 rounded-xl p-6">
<div className="flex justify-between items-center mb-4">
<div>
<p className="font-medium">Referred Leads</p>
<p className="text-sm text-white/60">Track and manage all leads generated via referrals.</p>
</div>
<button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600/80 hover:bg-blue-700 transition text-white">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
              Add Lead
            </button>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="text-left text-white/60 border-b border-white/10">
<tr>
<th className="py-3 px-4">Name</th>
<th className="py-3 px-4">Email</th>
<th className="py-3 px-4">Status</th>
<th className="py-3 px-4">Referred By</th>
<th className="py-3 px-4">Date</th>
</tr>
</thead>
<tbody>
<tr className="hover:bg-white/5 transition">
<td className="py-3 px-4">Jane Doe</td>
<td className="py-3 px-4">jane.doe@email.com</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1 text-xs bg-emerald-600/20 text-emerald-400 px-2 py-1 rounded-full">
                      Converted
                    </span>
</td>
<td className="py-3 px-4">Alex Webster</td>
<td className="py-3 px-4">2024-06-02</td>
</tr>
<tr className="hover:bg-white/5 transition">
<td className="py-3 px-4">John Smith</td>
<td className="py-3 px-4">john.smith@email.com</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1 text-xs bg-yellow-600/20 text-yellow-300 px-2 py-1 rounded-full">
                      New
                    </span>
</td>
<td className="py-3 px-4">Priya Patel</td>
<td className="py-3 px-4">2024-06-05</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="page-section hidden" id="page-settings">
<h2 className="text-xl font-semibold tracking-tight mb-4">Settings</h2>
<div className="bg-slate-900/40 border border-white/10 rounded-xl p-6 max-w-xl">
<form className="space-y-6">
<div>
<label className="block text-sm font-medium mb-1" htmlFor="company">Company Name</label>
<input className="w-full px-3 py-2 bg-slate-800/80 border border-white/10 rounded-lg text-white" id="company" type="text" value="Your Business Inc." />
</div>
<div>
<label className="block text-sm font-medium mb-1" htmlFor="email">Contact Email</label>
<input className="w-full px-3 py-2 bg-slate-800/80 border border-white/10 rounded-lg text-white" id="email" type="email" value="contact@yourbiz.com" />
</div>
<div>
<label className="block text-sm font-medium mb-1" htmlFor="reward">Default Reward Amount</label>
<input className="w-full px-3 py-2 bg-slate-800/80 border border-white/10 rounded-lg text-white" id="reward" type="number" value="25" />
</div>
<div>
<label className="block text-sm font-medium mb-1">Referral Approval</label>
<div className="flex items-center gap-2">
<input className="peer sr-only" id="approval" type="checkbox" />
<div className="w-9 h-5 bg-slate-700 rounded-full peer-checked:bg-blue-600 transition relative cursor-pointer">
<span className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-4"></span>
</div>
<label className="text-sm" htmlFor="approval">Require manual approval for new referrals</label>
</div>
</div>
<button className="w-full flex justify-center items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/80 hover:bg-blue-700 transition text-white font-medium" type="submit">
<svg className="lucide lucide-save h-4 w-4" data-lucide="save" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
              Save Settings
            </button>
</form>
</div>
</div>
</section>
</div>
</div>

    </>
  );
}
