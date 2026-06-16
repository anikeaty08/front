import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Tab functionality
      const tabButtons = document.querySelectorAll('.tab-btn');
      const tabPanels = document.querySelectorAll('.tab-panel');

      tabButtons.forEach(button => {
        button.addEventListener('click', () => {
          const target = button.dataset.tabTarget;
          
          // Update buttons
          tabButtons.forEach(btn => {
            btn.classList.remove('bg-white/10', 'border-gradient', 'border-gradient-xs', 'text-white');
            btn.classList.add('text-slate-400');
            btn.setAttribute('aria-selected', 'false');
          });
          
          button.classList.add('bg-white/10', 'border-gradient', 'border-gradient-xs', 'text-white');
          button.classList.remove('text-slate-400');
          button.setAttribute('aria-selected', 'true');
          
          // Update panels
          tabPanels.forEach(panel => {
            if (panel.dataset.tabPanel === target) {
              panel.classList.remove('hidden');
            } else {
              panel.classList.add('hidden');
            }
          });
        });
      });

      // Chart configuration
      const chartConfig = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: 12,
            cornerRadius: 8,
            titleColor: 'rgba(255, 255, 255, 0.9)',
            bodyColor: 'rgba(255, 255, 255, 0.7)',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            borderWidth: 1
          }
        },
        scales: {
          x: {
            grid: { 
              color: 'rgba(255, 255, 255, 0.05)',
              drawBorder: false
            },
            ticks: { 
              color: 'rgba(255, 255, 255, 0.4)',
              font: { size: 11 }
            }
          },
          y: {
            grid: { 
              color: 'rgba(255, 255, 255, 0.05)',
              drawBorder: false
            },
            ticks: { 
              color: 'rgba(255, 255, 255, 0.4)',
              font: { size: 11 }
            }
          }
        }
      };

      // Overview Chart
      const overviewCtx = document.getElementById('overviewChart').getContext('2d');
      new Chart(overviewCtx, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              label: 'Orders',
              data: [45, 52, 49, 60, 58, 54, 62],
              borderColor: 'rgba(255, 255, 255, 0.5)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderWidth: 2,
              tension: 0.4,
              fill: true
            },
            {
              label: 'Registrations',
              data: [120, 135, 128, 150, 145, 142, 158],
              borderColor: 'rgba(255, 255, 255, 0.3)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderWidth: 2,
              tension: 0.4,
              fill: true
            }
          ]
        },
        options: chartConfig
      });

      // Revenue Chart
      const revenueCtx = document.getElementById('revenueChart').getContext('2d');
      new Chart(revenueCtx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Revenue',
              data: [12400, 13200, 14800, 13900, 15200, 16100, 15800, 17200, 16900, 18400, 17800, 19200],
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              borderRadius: 6
            },
            {
              label: 'Refunds',
              data: [840, 920, 780, 650, 890, 720, 810, 760, 690, 820, 740, 680],
              backgroundColor: 'rgba(244, 63, 94, 0.5)',
              borderRadius: 6
            }
          ]
        },
        options: chartConfig
      });

      // Retention Chart
      const retentionCtx = document.getElementById('retentionChart').getContext('2d');
      new Chart(retentionCtx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Retention Rate',
              data: [72, 74, 76, 75, 78, 80, 79, 82, 81, 84, 83, 85],
              borderColor: 'rgba(255, 255, 255, 0.5)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderWidth: 2,
              tension: 0.4,
              fill: true,
              pointRadius: 4,
              pointBackgroundColor: 'rgba(255, 255, 255, 0.8)'
            }
          ]
        },
        options: {
          ...chartConfig,
          scales: {
            ...chartConfig.scales,
            y: {
              ...chartConfig.scales.y,
              min: 60,
              max: 90,
              ticks: {
                ...chartConfig.scales.y.ticks,
                callback: function(value) {
                  return value + '%';
                }
              }
            }
          }
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" id="aura-image" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5e9e49d0-8fca-4708-8206-ea34ad4af574_3840w.webp")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="max-w-[1600px] mx-auto p-3 w-full">
<div className="border-gradient rounded-3xl overflow-hidden bg-zinc-950">
<div className="grid grid-cols-12">

<aside className="col-span-12 md:col-span-3 xl:col-span-2 text-slate-200 bg-zinc-950 flex flex-col p-3">
<div className="border-gradient-inner rounded-2xl bg-zinc-950/50 backdrop-blur flex-1 flex flex-col">
<div className="flex-1">
<div className="flex items-center justify-between gap-3 p-4 md:p-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl flex items-center justify-center bg-gradient-to-r from-white/10 to-white/5">
<iconify-icon className="text-white" height="20" icon="solar:widget-bold-duotone" width="20"></iconify-icon>
</div>
<span className="hidden md:block text-base font-semibold tracking-tight text-white">Orbit</span>
</div>
<button className="hidden md:flex items-center gap-2 text-xs text-white/70 hover:text-white transition">
<iconify-icon height="16" icon="solar:bell-bold-duotone" width="16"></iconify-icon>
</button>
</div>
<nav className="px-3 md:px-4 space-y-1">
<a className="border-gradient border-gradient-sm flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 text-white" href="#">
<iconify-icon height="20" icon="solar:home-bold-duotone" width="20"></iconify-icon>
<span className="hidden md:inline text-sm font-medium">Home</span>
<span className="ml-auto hidden md:inline text-[10px] px-2 py-0.5 rounded-md bg-white/10 text-white ring-1 ring-white/20">Live</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 text-white/70 hover:text-white" href="#">
<iconify-icon height="20" icon="solar:chart-bold-duotone" width="20"></iconify-icon>
<span className="hidden md:inline text-sm">Metrics</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 text-white/70 hover:text-white" href="#">
<iconify-icon height="20" icon="solar:graph-bold-duotone" width="20"></iconify-icon>
<span className="hidden md:inline text-sm">Analytics</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 text-white/70 hover:text-white" href="#">
<iconify-icon height="20" icon="solar:users-group-rounded-bold-duotone" width="20"></iconify-icon>
<span className="hidden md:inline text-sm">Customer Service</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 text-white/70 hover:text-white" href="#">
<iconify-icon height="20" icon="solar:document-text-bold-duotone" width="20"></iconify-icon>
<span className="hidden md:inline text-sm">Reports</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 text-white/70 hover:text-white" href="#">
<iconify-icon height="20" icon="solar:card-bold-duotone" width="20"></iconify-icon>
<span className="hidden md:inline text-sm">Billing</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 text-white/70 hover:text-white" href="#">
<iconify-icon height="20" icon="solar:settings-bold-duotone" width="20"></iconify-icon>
<span className="hidden md:inline text-sm">Settings</span>
</a>
</nav>
</div>
<div className="border-t border-white/10"></div>
<div className="p-4 md:p-6">
<div className="flex items-center gap-3">
<img alt="Profile" className="h-9 w-9 rounded-full object-cover ring-2 ring-white/50" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_320w.jpg"/>
<div className="hidden md:flex flex-1 items-center justify-between">
<div>
<p className="text-sm font-medium text-white/90">Jane Wharton</p>
<p className="text-xs text-white/60">Product Manager</p>
</div>
</div>
</div>
<button className="hidden md:flex items-center gap-2 mt-4 text-xs text-white/60 hover:text-white transition">
<iconify-icon height="16" icon="solar:logout-2-bold-duotone" width="16"></iconify-icon> Log out
              </button>
</div>
</div>
</aside>

<main className="col-span-12 md:col-span-9 xl:col-span-10 bg-black">
<div className="p-3">
<div className="border-gradient-inner rounded-2xl bg-zinc-950/50 backdrop-blur">

<div className="px-4 sm:px-6 pt-5 sm:pt-6 pb-4 sm:pb-6 border-b border-white/5">
<div className="flex flex-col gap-3 sm:gap-4">
<div className="flex items-center gap-3 justify-between">
<div className="text-sm text-slate-400">
                        Hi! You have <span className="font-medium text-white">2</span> requests.
                        <a className="font-medium text-white hover:text-white/80" href="#">Check</a>
</div>
<div className="flex items-center gap-2">
<div className="hidden sm:flex items-center px-3 py-2 rounded-lg bg-white/5 border-gradient border-gradient-sm">
<iconify-icon className="text-slate-400" height="16" icon="solar:magnifer-bold-duotone" width="16"></iconify-icon>
<input className="ml-2 bg-transparent outline-none text-sm placeholder:text-slate-500 text-white w-48" placeholder="Search..."/>
</div>
<button className="inline-flex items-center justify-center h-9 w-9 rounded-lg border-gradient border-gradient-sm hover:bg-white/5">
<iconify-icon className="text-slate-400" height="16" icon="solar:bell-bold-duotone" width="16"></iconify-icon>
</button>
<button className="hidden sm:inline-flex items-center gap-2 h-9 px-3 rounded-lg text-white bg-white/10 hover:bg-white/15 transition">
<iconify-icon height="16" icon="solar:add-circle-bold-duotone" width="16"></iconify-icon>
<span className="text-sm font-medium">New</span>
</button>
</div>
</div>
<div className="flex items-end justify-between">
<div className="">
<h1 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Jane's Dashboard</h1>
<p className="text-xs sm:text-sm text-slate-500">ID: 5248931421</p>
</div>
<button className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-slate-300">
<iconify-icon height="16" icon="solar:calendar-bold-duotone" width="16"></iconify-icon>
                        Last 30 days
                      </button>
</div>
</div>
</div>

<section className="px-4 sm:px-6 py-5 sm:py-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">

<div className="border-gradient-inner rounded-2xl bg-zinc-900/50 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-full text-white flex items-center justify-center bg-gradient-to-r from-white/10 to-white/5">
<iconify-icon height="16" icon="solar:target-bold-duotone" width="16"></iconify-icon>
</span>
<div>
<p className="text-[11px] uppercase tracking-wider text-slate-500">Orders</p>
<p className="text-lg font-semibold tracking-tight tabular-nums text-white">362</p>
</div>
</div>
<span className="text-emerald-400 text-xs inline-flex items-center gap-1">
<iconify-icon height="14" icon="solar:arrow-right-up-bold-duotone" width="14"></iconify-icon> 4%
                        </span>
</div>
</div>

<div className="border-gradient-inner rounded-2xl bg-zinc-900/50 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-full text-white flex items-center justify-center bg-gradient-to-r from-white/10 to-white/5">
<iconify-icon height="16" icon="solar:user-plus-bold-duotone" width="16"></iconify-icon>
</span>
<div>
<p className="text-[11px] uppercase tracking-wider text-slate-500">Registrations</p>
<p className="text-lg font-semibold tracking-tight tabular-nums text-white">1056</p>
</div>
</div>
<span className="text-emerald-400 text-xs inline-flex items-center gap-1">
<iconify-icon height="14" icon="solar:arrow-right-up-bold-duotone" width="14"></iconify-icon> 12%
                        </span>
</div>
</div>

<div className="border-gradient-inner rounded-2xl bg-zinc-900/50 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-full text-white flex items-center justify-center bg-gradient-to-r from-white/10 to-white/5">
<iconify-icon height="16" icon="solar:chat-round-dots-bold-duotone" width="16"></iconify-icon>
</span>
<div>
<p className="text-[11px] uppercase tracking-wider text-slate-500">Tickets</p>
<p className="text-lg font-semibold tracking-tight tabular-nums text-white">89</p>
</div>
</div>
<span className="text-rose-400 text-xs inline-flex items-center gap-1">
<iconify-icon height="14" icon="solar:arrow-right-down-bold-duotone" width="14"></iconify-icon> 3%
                        </span>
</div>
</div>

<div className="border-gradient-inner rounded-2xl bg-zinc-900/50 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-full text-white flex items-center justify-center bg-gradient-to-r from-white/10 to-white/5">
<iconify-icon height="16" icon="solar:tag-price-bold-duotone" width="16"></iconify-icon>
</span>
<div>
<p className="text-[11px] uppercase tracking-wider text-slate-500">Conversion</p>
<p className="text-lg font-semibold tracking-tight tabular-nums text-white">9.496%</p>
</div>
</div>
<span className="text-emerald-400 text-xs inline-flex items-center gap-1">
<iconify-icon height="14" icon="solar:arrow-right-up-bold-duotone" width="14"></iconify-icon> 1.2%
                        </span>
</div>
</div>
</div>
</section>

<div className="sm:px-6 pr-4 pl-4">
<div className="flex flex-wrap items-center gap-2 justify-between">

<div className="flex items-center gap-1 rounded-xl bg-white/5 p-1 border-gradient border-gradient-sm">
<button aria-selected="true" className="tab-btn inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-lg text-sm font-medium text-white bg-white/10 border-gradient border-gradient-xs" data-tab-target="overview" role="tab">
<iconify-icon height="16" icon="solar:widget-4-bold-duotone" width="16"></iconify-icon>
<span>Overview</span>
</button>
<button aria-selected="false" className="tab-btn inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition" data-tab-target="revenue" role="tab">
<iconify-icon height="16" icon="solar:wallet-bold-duotone" width="16"></iconify-icon>
<span>Revenue</span>
</button>
<button aria-selected="false" className="tab-btn inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition" data-tab-target="retention" role="tab">
<iconify-icon height="16" icon="solar:user-check-bold-duotone" width="16"></iconify-icon>
<span className="">Retention</span>
</button>
</div>

<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-lg border-gradient border-gradient-sm hover:bg-white/5 text-slate-300">
<iconify-icon height="16" icon="solar:download-bold-duotone" width="16"></iconify-icon>
<span className="hidden sm:inline text-sm">Export</span>
</button>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-lg border-gradient border-gradient-sm hover:bg-white/5 text-slate-300">
<iconify-icon height="16" icon="solar:share-bold-duotone" width="16"></iconify-icon>
<span className="hidden sm:inline text-sm">Share</span>
</button>
</div>
</div>

<div className="mt-4 sm:mt-6">

<section aria-labelledby="overview" className="tab-panel grid grid-cols-12 gap-4 sm:gap-6" data-tab-panel="overview" role="tabpanel">

<div className="col-span-12 lg:col-span-8">
<div className="border-gradient-inner h-72 sm:h-80 rounded-2xl bg-zinc-900/50 p-4 sm:p-5">
<div className="flex items-center justify-between mb-3">
<div className="">
<h3 className="text-sm font-semibold text-white">Performance</h3>
<p className="text-xs text-slate-500">Weekly orders and registrations</p>
</div>
<div className="flex items-center gap-1">
<span className="inline-flex items-center gap-1 text-xs text-slate-400"><span className="h-2 w-2 rounded-full bg-white/50"></span> Orders</span>
<span className="inline-flex items-center gap-1 text-xs text-slate-400"><span className="h-2 w-2 rounded-full bg-white/30"></span> Registrations</span>
</div>
</div>
<div className="relative h-[calc(100%-2.75rem)]">
<canvas className="absolute inset-0" id="overviewChart"></canvas>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-4">
<div className="border-gradient-inner rounded-2xl bg-zinc-900/50 p-4 sm:p-5 space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold text-white">Highlights</h3>
<span className="text-[11px] px-2 py-0.5 rounded-md bg-emerald-400/10 text-emerald-400 ring-1 ring-emerald-400/20">+8.4% MoM</span>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-xl bg-white/5 border-gradient border-gradient-sm p-3">
<div className="text-[11px] uppercase tracking-wider text-slate-500">Avg. Order</div>
<div className="mt-1 text-lg font-semibold text-white">$64.20</div>
<div className="mt-1 text-xs text-emerald-400 inline-flex items-center gap-1">2.1%</div>
</div>
<div className="rounded-xl bg-white/5 border-gradient border-gradient-sm p-3">
<div className="text-[11px] uppercase tracking-wider text-slate-500">Bounce</div>
<div className="mt-1 text-lg font-semibold text-white">28.3%</div>
<div className="mt-1 text-xs text-rose-400 inline-flex items-center gap-1">0.6%</div>
</div>
</div>
<div>
<p className="text-xs font-medium text-slate-400 mb-2">Top channels</p>
<div className="space-y-2">
<div className="flex items-center gap-3">
<span className="h-2.5 w-2.5 rounded-full bg-white/50"></span>
<div className="flex-1">
<div className="flex items-center justify-between text-sm">
<span className="text-slate-300">Organic</span>
<span className="tabular-nums text-slate-400">48%</span>
</div>
<div className="mt-1 h-2 rounded-full bg-white/5">
<div className="h-2 rounded-full bg-white/50" style={{width: '48%'}}></div>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="h-2.5 w-2.5 rounded-full bg-white/40"></span>
<div className="flex-1">
<div className="flex items-center justify-between text-sm">
<span className="text-slate-300">Paid</span>
<span className="tabular-nums text-slate-400">32%</span>
</div>
<div className="mt-1 h-2 rounded-full bg-white/5">
<div className="h-2 rounded-full bg-white/40" style={{width: '32%'}}></div>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="h-2.5 w-2.5 rounded-full bg-white/30"></span>
<div className="flex-1">
<div className="flex items-center justify-between text-sm">
<span className="text-slate-300">Referral</span>
<span className="tabular-nums text-slate-400">20%</span>
</div>
<div className="mt-1 h-2 rounded-full bg-white/5">
<div className="h-2 rounded-full bg-white/30" style={{width: '20%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-12">
<div className="border-gradient-inner rounded-2xl bg-zinc-900/50 overflow-hidden">
<div className="px-4 sm:px-5 py-3 border-b border-white/5 flex items-center justify-between">
<div className="">
<h3 className="text-sm font-semibold text-white">Recent orders</h3>
<p className="text-xs text-slate-500">Latest 5 orders across channels</p>
</div>
<button className="inline-flex items-center gap-2 h-8 px-3 rounded-lg bg-white/10 hover:bg-white/15 text-white transition text-xs">
                               View all
                            </button>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="bg-white/5 text-slate-400">
<tr className="">
<th className="text-left font-medium px-4 sm:px-5 py-3">Customer</th>
<th className="text-left font-medium px-4 sm:px-5 py-3">Order ID</th>
<th className="text-left font-medium px-4 sm:px-5 py-3">Channel</th>
<th className="text-left font-medium px-4 sm:px-5 py-3">Total</th>
<th className="text-left font-medium px-4 sm:px-5 py-3">Status</th>
<th className="text-right font-medium px-4 sm:px-5 py-3">Date</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-white/5">
<td className="px-4 sm:px-5 py-3">
<div className="flex items-center gap-3">
<img alt="Customer avatar" className="h-8 w-8 rounded-full object-cover ring-2 ring-white/30" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3487391c-84ae-4ac0-b0c5-ab8a77cba264_320w.jpg"/>
<div>
<div className="font-medium text-white">Alex Johnson</div>
<div className="text-xs text-slate-500">alex@example.com</div>
</div>
</div>
</td>
<td className="px-4 sm:px-5 py-3 tabular-nums text-slate-300">#84239</td>
<td className="px-4 sm:px-5 py-3">
<span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md ring-1 bg-cyan-500/10 text-cyan-400 ring-cyan-400/20">
<span className="h-1.5 w-1.5 rounded-full bg-cyan-500"></span> Organic
                                    </span>
</td>
<td className="px-4 sm:px-5 py-3 font-semibold text-white">$128.40</td>
<td className="px-4 sm:px-5 py-3">
<span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-400/20">
                                       Paid
                                    </span>
</td>
<td className="px-4 sm:px-5 py-3 text-right text-slate-400">Oct 18</td>
</tr>
<tr className="hover:bg-white/5">
<td className="px-4 sm:px-5 py-3">
<div className="flex items-center gap-3">
<img alt="Customer avatar" className="h-8 w-8 rounded-full object-cover ring-2 ring-white/30" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f4e5e7c0-8aa2-4842-adfb-8c79e58459e4_320w.jpg"/>
<div>
<div className="font-medium text-white">Priya Singh</div>
<div className="text-xs text-slate-500">priya@example.com</div>
</div>
</div>
</td>
<td className="px-4 sm:px-5 py-3 tabular-nums text-slate-300">#84238</td>
<td className="px-4 sm:px-5 py-3">
<span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-400/20">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Paid
                                    </span>
</td>
<td className="px-4 sm:px-5 py-3 font-semibold text-white">$74.00</td>
<td className="px-4 sm:px-5 py-3">
<span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 ring-1 ring-amber-400/20">
                                       Pending
                                    </span>
</td>
<td className="px-4 sm:px-5 py-3 text-right text-slate-400">Oct 17</td>
</tr>
<tr className="hover:bg-white/5">
<td className="px-4 sm:px-5 py-3">
<div className="flex items-center gap-3">
<img alt="Customer avatar" className="h-8 w-8 rounded-full object-cover ring-2 ring-white/30" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4f30f4f2-b81c-4bf1-88c7-86b1dc41acd1_320w.jpg"/>
<div>
<div className="font-medium text-white">Marco Rossi</div>
<div className="text-xs text-slate-500">marco@example.com</div>
</div>
</div>
</td>
<td className="px-4 sm:px-5 py-3 tabular-nums text-slate-300">#84237</td>
<td className="px-4 sm:px-5 py-3">
<span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 ring-1 ring-amber-400/20">
<span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span> Referral
                                    </span>
</td>
<td className="px-4 sm:px-5 py-3 font-semibold text-white">$216.99</td>
<td className="px-4 sm:px-5 py-3">
<span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md bg-rose-500/10 text-rose-400 ring-1 ring-rose-400/20">
                                       Failed
                                    </span>
</td>
<td className="px-4 sm:px-5 py-3 text-right text-slate-400">Oct 15</td>
</tr>
<tr className="hover:bg-white/5">
<td className="px-4 sm:px-5 py-3">
<div className="flex items-center gap-3">
<img alt="Customer avatar" className="h-8 w-8 rounded-full object-cover ring-2 ring-white/30" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/46ceb0ec-b3fa-4f16-8a70-bbd217ee77a9_320w.jpg"/>
<div>
<div className="font-medium text-white">Chen Wei</div>
<div className="text-xs text-slate-500">chen@example.com</div>
</div>
</div>
</td>
<td className="px-4 sm:px-5 py-3 tabular-nums text-slate-300">#84236</td>
<td className="px-4 sm:px-5 py-3">
<span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-400/20">
<span className="h-1.5 w-1.5 rounded-full bg-cyan-500"></span> Social
                                    </span>
</td>
<td className="px-4 sm:px-5 py-3 font-semibold text-white">$59.50</td>
<td className="px-4 sm:px-5 py-3">
<span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-400/20">
                                       Paid
                                    </span>
</td>
<td className="px-4 sm:px-5 py-3 text-right text-slate-400">Oct 14</td>
</tr>
<tr className="hover:bg-white/5">
<td className="px-4 sm:px-5 py-3">
<div className="flex items-center gap-3">
<img alt="Customer avatar" className="h-8 w-8 rounded-full object-cover ring-2 ring-white/30" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_320w.jpg"/>
<div>
<div className="font-medium text-white">Sarah Lee</div>
<div className="text-xs text-slate-500">sarah@example.com</div>
</div>
</div>
</td>
<td className="px-4 sm:px-5 py-3 tabular-nums text-slate-300">#84235</td>
<td className="px-4 sm:px-5 py-3">
<span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md bg-fuchsia-500/10 text-fuchsia-400 ring-1 ring-fuchsia-400/20">
<span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500"></span> Email
                                    </span>
</td>
<td className="px-4 sm:px-5 py-3 font-semibold text-white">$92.00</td>
<td className="px-4 sm:px-5 py-3">
<span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-400/20">
                                       Paid
                                    </span>
</td>
<td className="px-4 sm:px-5 py-3 text-right text-slate-400">Oct 13</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<section aria-labelledby="revenue" className="tab-panel hidden grid grid-cols-12 gap-4 sm:gap-6" data-tab-panel="revenue" role="tabpanel">
<div className="col-span-12 xl:col-span-8">
<div className="border-gradient-inner h-72 sm:h-80 rounded-2xl bg-zinc-900/50 p-4 sm:p-5">
<div className="flex items-center justify-between mb-3">
<div>
<h3 className="text-sm font-semibold text-white">Revenue by month</h3>
<p className="text-xs text-slate-500">Gross revenue and refunds</p>
</div>
<div className="flex items-center gap-1">
<span className="inline-flex items-center gap-1 text-xs text-slate-400"><span className="h-2 w-2 rounded-full bg-white/50"></span> Revenue</span>
<span className="inline-flex items-center gap-1 text-xs text-slate-400"><span className="h-2 w-2 rounded-full bg-rose-500"></span> Refunds</span>
</div>
</div>
<div className="relative h-[calc(100%-2.75rem)]">
<canvas className="absolute inset-0" id="revenueChart"></canvas>
</div>
</div>
</div>
</section>

<section aria-labelledby="retention" className="tab-panel hidden grid grid-cols-12 gap-4 sm:gap-6" data-tab-panel="retention" role="tabpanel">
<div className="col-span-12">
<div className="border-gradient-inner h-72 sm:h-80 rounded-2xl bg-zinc-900/50 p-4 sm:p-5">
<div className="flex items-center justify-between mb-3">
<div>
<h3 className="text-sm font-semibold text-white">Customer retention</h3>
<p className="text-xs text-slate-500">Monthly retention rate</p>
</div>
</div>
<div className="relative h-[calc(100%-2.75rem)]">
<canvas className="absolute inset-0" id="retentionChart"></canvas>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</div>
</main>
</div>
</div>
</div>


    </>
  );
}
