import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Icons
      lucide.createIcons();

      // Elements
      const appShell = document.getElementById('appShell');
      const sidebar = document.getElementById('sidebar');
      const sidebarToggle = document.getElementById('sidebarToggle');
      const sidebarClose = document.getElementById('sidebarClose');
      const overlay = document.getElementById('sidebarOverlay');

      // Media query
      const mq = window.matchMedia('(min-width: 1024px)');

      // Desktop collapse state (persisted)
      let collapsedDesktop = localStorage.getItem('sidebarCollapsed') === '1';

      // Mobile open state (ephemeral)
      let mobileOpen = false;

      function applyDesktopCollapsed() {
        // Slide sidebar out on desktop and reclaim space
        if (collapsedDesktop) {
          appShell.classList.remove('lg:grid-cols-[260px_1fr]');
          appShell.classList.add('lg:grid-cols-1');
          sidebar.classList.add('lg:-translate-x-full');
          sidebarToggle?.setAttribute('aria-pressed', 'true');
          sidebarToggle?.setAttribute('aria-expanded', 'false');
        } else {
          appShell.classList.add('lg:grid-cols-[260px_1fr]');
          appShell.classList.remove('lg:grid-cols-1');
          sidebar.classList.remove('lg:-translate-x-full');
          sidebarToggle?.setAttribute('aria-pressed', 'false');
          sidebarToggle?.setAttribute('aria-expanded', 'true');
        }
      }

      function setMobileOpen(open) {
        mobileOpen = open;
        if (open) {
          sidebar.classList.remove('-translate-x-full');
          overlay.classList.remove('hidden');
          requestAnimationFrame(() => {
            overlay.classList.remove('opacity-0');
          });
          document.body.classList.add('overflow-hidden');
          sidebarToggle?.setAttribute('aria-expanded', 'true');
        } else {
          sidebar.classList.add('-translate-x-full');
          overlay.classList.add('opacity-0');
          setTimeout(() => overlay.classList.add('hidden'), 180);
          document.body.classList.remove('overflow-hidden');
          sidebarToggle?.setAttribute('aria-expanded', 'false');
        }
      }

      // Initialize
      function initSidebar() {
        if (mq.matches) {
          // Desktop
          setMobileOpen(false);
          applyDesktopCollapsed();
        } else {
          // Mobile: start closed
          setMobileOpen(false);
        }
      }
      initSidebar();

      // Toggle button
      sidebarToggle?.addEventListener('click', () => {
        if (mq.matches) {
          collapsedDesktop = !collapsedDesktop;
          localStorage.setItem('sidebarCollapsed', collapsedDesktop ? '1' : '0');
          applyDesktopCollapsed();
        } else {
          setMobileOpen(true);
        }
      });

      // Mobile close interactions
      sidebarClose?.addEventListener('click', () => setMobileOpen(false));
      overlay?.addEventListener('click', () => setMobileOpen(false));
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setMobileOpen(false);
      });

      // Respond to breakpoint changes
      mq.addEventListener('change', initSidebar);

      // Generated date
      const d = new Date();
      const fmt = d.toLocaleString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
      document.getElementById('genDate').textContent = fmt;

      // Print/Export
      document.getElementById('printBtn').addEventListener('click', () => window.print());

      // Animate on scroll (section/list reveal)
      const io = new IntersectionObserver((entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        }
      }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
      document.querySelectorAll('[data-animate]').forEach(el => io.observe(el));

      // Chart.js: Progress (cumulative)
      const ctx = document.getElementById('progressChart');
      const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 300);
      gradient.addColorStop(0, 'rgba(16, 185, 129, 0.25)');  // emerald-500
      gradient.addColorStop(1, 'rgba(16, 185, 129, 0.00)');

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Nov-W2', 'Nov-W4', 'Dec-W1', 'Dec-W2', 'Dec-W3', 'Dec-W4'],
          datasets: [
            {
              label: 'Planned',
              data: [0, 10, 25, 40, 65, 90],
              borderColor: 'rgba(34, 211, 238, 0.9)', // cyan-400
              borderDash: [6, 6],
              pointRadius: 0,
              tension: 0.36
            },
            {
              label: 'Actual',
              data: [0, 3, 7, 35, 52, 89],
              borderColor: 'rgba(16, 185, 129, 0.95)', // emerald-500
              backgroundColor: gradient,
              pointBackgroundColor: 'rgba(16,185,129,1)',
              pointBorderColor: 'rgba(16,185,129,1)',
              pointRadius: 3.5,
              pointHoverRadius: 5,
              fill: true,
              tension: 0.36
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            duration: 900,
            easing: 'easeOutQuart'
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(23,23,23,0.92)',
              borderColor: 'rgba(64,64,64,1)',
              borderWidth: 1,
              titleColor: '#fff',
              bodyColor: '#e5e5e5',
              padding: 10,
              displayColors: false
            }
          },
          scales: {
            x: {
              ticks: { color: 'rgba(163,163,163,1)', font: { size: 12, weight: '500' } },
              grid: { color: 'rgba(41,41,41,0.6)' }
            },
            y: {
              beginAtZero: true,
              suggestedMax: 100,
              ticks: {
                color: 'rgba(163,163,163,1)',
                callback: (v) => v + '%',
                font: { size: 12, weight: '500' }
              },
              grid: { color: 'rgba(41,41,41,0.6)' }
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
      

<div className="min-h-screen grid grid-cols-1 lg:grid-cols-[260px_1fr]" id="appShell">

<aside aria-label="Primary" aria-modal="true" className="flex flex-col border-r border-neutral-800 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 z-40 fixed inset-y-0 left-0 w-[260px] -translate-x-full lg:translate-x-0 lg:static" id="sidebar" role="dialog">
<div className="px-5 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-neutral-900 border border-neutral-800 grid place-items-center">
<i className="h-5 w-5 text-cyan-300" data-lucide="activity"></i>
</div>
<div className="flex flex-col">
<span className="text-[15px] font-semibold tracking-tight text-white">
                Project Console
              </span>
<span className="text-xs text-neutral-400">Reporting Suite</span>
</div>
</div>

<button aria-label="Close sidebar" className="lg:hidden inline-flex items-center justify-center h-8 w-8 rounded-md border border-neutral-800 bg-neutral-900/70 hover:bg-neutral-800 text-neutral-300 focus-ring" id="sidebarClose">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>
<nav className="mt-2 px-2 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-900 transition focus-ring" href="#">
<i className="h-4 w-4" data-lucide="home"></i>
<span className="text-sm font-medium">Home</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-900 transition focus-ring" href="#">
<i className="h-4 w-4" data-lucide="layout-dashboard"></i>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a aria-current="page" className="relative flex items-center gap-3 px-3 py-2 rounded-md bg-neutral-900 text-white border border-neutral-800 ring-1 ring-cyan-500/10" href="#">
<span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-0.5 bg-cyan-400/80 rounded-full"></span>
<i className="h-4 w-4 text-cyan-300" data-lucide="file-bar-chart"></i>
<span className="text-sm font-medium">Reporting</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-900 transition focus-ring" href="#">
<i className="h-4 w-4" data-lucide="clipboard-list"></i>
<span className="text-sm font-medium">Tasks</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-900 transition focus-ring" href="#">
<i className="h-4 w-4" data-lucide="folder"></i>
<span className="text-sm font-medium">Documents</span>
</a>
</nav>
<div className="mt-auto p-4">
<div className="p-3 rounded-lg border border-neutral-800 bg-neutral-900/40 card-hover">
<div className="flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-md object-cover" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="text-sm">
<div className="font-medium text-white">Solar Program</div>
<div className="text-xs text-neutral-400">Portfolio: Utility</div>
</div>
</div>
</div>
</div>
</aside>

<div aria-hidden="true" className="fixed inset-0 bg-neutral-950/60 backdrop-blur-sm lg:hidden hidden opacity-0" id="sidebarOverlay"></div>

<main className="flex flex-col">

<header className="sticky top-0 z-20 border-b border-neutral-800/80 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="h-14 flex items-center justify-between">
<div className="flex items-center gap-2 text-sm">
<button aria-expanded="false" aria-pressed="false" className="inline-flex items-center justify-center rounded-md border border-neutral-800 bg-neutral-900/70 hover:bg-neutral-800 text-neutral-300 h-8 w-8 transition focus-ring" id="sidebarToggle" title="Toggle sidebar">
<i className="h-4 w-4" data-lucide="panel-left"></i>
</button>
<a className="text-neutral-400 hover:text-neutral-200 transition focus-ring rounded" href="#">
<span className="hidden sm:inline">Home</span>
<span className="sm:hidden">H</span>
</a>
<i className="h-4 w-4 text-neutral-600" data-lucide="chevron-right"></i>
<span className="text-neutral-300">Reporting</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-neutral-200 px-3 py-2 text-sm font-medium border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800 transition focus-ring" id="printBtn">
<i className="h-4 w-4 text-neutral-300" data-lucide="download"></i>
<span>Export PDF</span>
</button>
<div className="hidden sm:block text-xs text-neutral-400">
                  Generated on
                  <span className="text-neutral-300" id="genDate"></span>
</div>
</div>
</div>

<div className="flex items-center gap-8 overflow-x-auto no-scrollbar">
<button aria-selected="true" className="relative py-3 text-sm font-medium text-white focus-ring rounded">
<span>Weekly Reports</span>
<span className="absolute -bottom-px left-0 right-0 h-0.5 bg-cyan-400/80 rounded-full"></span>
</button>
<button className="py-3 text-sm font-medium text-neutral-400 hover:text-neutral-200 transition focus-ring rounded">
                Monthly Reports
              </button>
<button className="py-3 text-sm font-medium text-neutral-400 hover:text-neutral-200 transition focus-ring rounded">
                Compliance
              </button>
<button className="py-3 text-sm font-medium text-neutral-400 hover:text-neutral-200 transition focus-ring rounded">
                Correspondence
              </button>
</div>
</div>
</header>

<section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 space-y-6">

<div data-animate="">
<h1 className="text-[22px] sm:text-2xl md:text-[28px] font-semibold tracking-tight text-white">
              Weekly Progress Report
            </h1>
<p className="text-sm text-neutral-400 mt-1">
              Procurement of 50 MW (AC) Solar Power — Week: Nov 03, 2025 to Nov
              07, 2025
            </p>
</div>

<div className="rounded-xl border border-neutral-800 bg-neutral-900/40 card-hover" data-animate="">
<div className="px-5 sm:px-6 py-4 flex items-center justify-between">
<h2 className="text-[18px] sm:text-lg font-semibold tracking-tight text-white">
                Executive Summary
              </h2>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-xs text-emerald-300/90">
<i className="h-3.5 w-3.5" data-lucide="circle-dot"></i>
                  On Track
                </span>
</div>
</div>
<div className="px-5 sm:px-6 pb-5">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-3 text-sm leading-6">
<p className="text-neutral-300">
                    Weekly Report: Procurement of 50 MW (AC) Solar Power under
                    Mukhyamantri Saur Krushi Vahini Yojana 2.0
                  </p>
<p className="text-neutral-300">
                    Project Progress: Across 1 active site, the average
                    completion rate is 9.1%. Leading site includes 33 KV PAPAL
                    SUB-STATION (S/S No 34030) at 9.1% completion.
                  </p>
<p className="text-neutral-300">
                    Risk Status: 3 active risks are being managed with
                    mitigation plans in place.
                  </p>
<p className="text-neutral-300">
                    Week Ahead: Task planning for the upcoming week is in
                    progress.
                  </p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
<div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-3">
<div className="text-xs text-neutral-400">Active Sites</div>
<div className="mt-1 text-[22px] font-semibold tracking-tight text-white">
                      1
                    </div>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-3">
<div className="text-xs text-neutral-400">Avg Completion</div>
<div className="mt-1 text-[22px] font-semibold tracking-tight text-white">
                      9.1%
                    </div>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-3">
<div className="text-xs text-neutral-400">Risks Active</div>
<div className="mt-1 text-[22px] font-semibold tracking-tight text-white">
                      3
                    </div>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-3">
<div className="text-xs text-neutral-400">Issues</div>
<div className="mt-1 text-[22px] font-semibold tracking-tight text-white">
                      0
                    </div>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-3">
<div className="text-xs text-neutral-400">Budget Used</div>
<div className="mt-1 text-[22px] font-semibold tracking-tight text-white">
                      18%
                    </div>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-3">
<div className="text-xs text-neutral-400">POs Released</div>
<div className="mt-1 text-[22px] font-semibold tracking-tight text-white">
                      5
                    </div>
</div>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 rounded-xl border border-neutral-800 bg-neutral-900/40 card-hover" data-animate="">
<div className="px-5 sm:px-6 pt-4">
<h3 className="text-[18px] font-semibold tracking-tight text-white">
                  Work Progress (Cumulative)
                </h3>
<p className="text-xs text-neutral-400 mt-1">
                  Planned vs Actual progress across reporting weeks
                </p>
<div className="mt-3 flex items-center gap-2">
<span className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-950/60 px-3 py-1.5 text-xs text-neutral-300">
<span className="h-1.5 w-4 rounded-full bg-cyan-400/80"></span>
                    Planned
                  </span>
<span className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-950/60 px-3 py-1.5 text-xs text-neutral-300">
<span className="h-1.5 w-4 rounded-full bg-emerald-400/80"></span>
                    Actual
                  </span>
</div>
</div>

<div className="px-5 sm:px-6 pb-5">
<div className="mt-4 rounded-lg border border-neutral-800 bg-gradient-to-b from-neutral-950/60 to-neutral-950/20">
<div className="h-[280px] md:h-[360px]">
<canvas id="progressChart"></canvas>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-neutral-800 bg-neutral-900/40 flex flex-col card-hover" data-animate="">
<div className="px-5 sm:px-6 pt-4">
<h3 className="text-[18px] font-semibold tracking-tight text-white">
                  Previous Weekly Reports
                </h3>
<p className="text-xs text-neutral-400 mt-1">
                  Quick access to earlier submissions
                </p>
</div>
<div className="px-5 sm:px-6 pb-6 grow flex items-center justify-center">
<div className="text-center">
<div className="mx-auto h-12 w-12 rounded-lg border border-neutral-800 bg-neutral-950/60 grid place-items-center mb-3">
<i className="h-6 w-6 text-neutral-400" data-lucide="file"></i>
</div>
<p className="text-sm text-neutral-400">
                    No weekly reports found
                  </p>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 rounded-xl border border-neutral-800 bg-neutral-900/40 card-hover" data-animate="">
<div className="px-5 sm:px-6 pt-4">
<h3 className="text-[18px] font-semibold tracking-tight text-white">
                  Risk Register
                </h3>
<p className="text-xs text-neutral-400 mt-1">
                  Active risks with current mitigation status
                </p>
</div>
<div className="px-5 sm:px-6 pb-5">
<ul className="mt-4 divide-y divide-neutral-800">
<li className="py-3 flex items-start gap-3" data-animate="" style={{transitionDelay: '.05s'}}>
<span className="mt-1 inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-300 text-[11px] px-2 py-0.5">
                      Medium
                    </span>
<div className="grow">
<div className="text-sm text-neutral-200">
                        Delay in transformer delivery for 33 KV SUB-STATION
                      </div>
<div className="text-xs text-neutral-400 mt-1">
                        Mitigation: Expedite vendor timelines; initiate
                        alternate supplier RFQ.
                      </div>
</div>
<span className="text-xs text-neutral-400">ETR: Dec W2</span>
</li>
<li className="py-3 flex items-start gap-3" data-animate="" style={{transitionDelay: '.12s'}}>
<span className="mt-1 inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 text-red-300 text-[11px] px-2 py-0.5">
                      High
                    </span>
<div className="grow">
<div className="text-sm text-neutral-200">
                        Right-of-Way approvals pending on feeder line
                      </div>
<div className="text-xs text-neutral-400 mt-1">
                        Mitigation: Weekly follow-ups with local authority;
                        prepare alternate routing plan.
                      </div>
</div>
<span className="text-xs text-neutral-400">ETR: Dec W3</span>
</li>
<li className="py-3 flex items-start gap-3" data-animate="" style={{transitionDelay: '.18s'}}>
<span className="mt-1 inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-300 text-[11px] px-2 py-0.5">
                      Low
                    </span>
<div className="grow">
<div className="text-sm text-neutral-200">
                        Weather interruptions
                      </div>
<div className="text-xs text-neutral-400 mt-1">
                        Mitigation: Adjust activity sequencing; buffer in
                        schedule.
                      </div>
</div>
<span className="text-xs text-neutral-400">ETR: Dec W1</span>
</li>
</ul>
</div>
</div>

<div className="rounded-xl border border-neutral-800 bg-neutral-900/40 card-hover" data-animate="">
<div className="px-5 sm:px-6 pt-4">
<h3 className="text-[18px] font-semibold tracking-tight text-white">
                  Week Highlights
                </h3>
<p className="text-xs text-neutral-400 mt-1">
                  Completed and upcoming actions
                </p>
</div>
<div className="px-5 sm:px-6 pb-5">
<div className="mt-4 space-y-3">
<div className="flex items-start gap-3" data-animate="" style={{transitionDelay: '.05s'}}>
<div className="h-7 w-7 rounded-md bg-emerald-500/10 border border-emerald-500/20 grid place-items-center">
<i className="h-4 w-4 text-emerald-300" data-lucide="check"></i>
</div>
<div className="text-sm">
<div className="text-neutral-200">
                        BoQ finalized for substation civil works
                      </div>
<div className="text-xs text-neutral-500 mt-0.5">
                        Cost baseline updated
                      </div>
</div>
</div>
<div className="flex items-start gap-3" data-animate="" style={{transitionDelay: '.12s'}}>
<div className="h-7 w-7 rounded-md bg-cyan-500/10 border border-cyan-500/20 grid place-items-center">
<i className="h-4 w-4 text-cyan-300" data-lucide="calendar"></i>
</div>
<div className="text-sm">
<div className="text-neutral-200">
                        Scheduled vendor factory acceptance test
                      </div>
<div className="text-xs text-neutral-500 mt-0.5">
                        Target: Dec W1
                      </div>
</div>
</div>
<div className="flex items-start gap-3" data-animate="" style={{transitionDelay: '.18s'}}>
<div className="h-7 w-7 rounded-md bg-amber-500/10 border border-amber-500/20 grid place-items-center">
<i className="h-4 w-4 text-amber-300" data-lucide="alert-triangle"></i>
</div>
<div className="text-sm">
<div className="text-neutral-200">
                        Logistics slot to be confirmed
                      </div>
<div className="text-xs text-neutral-500 mt-0.5">
                        Dependency on import clearance
                      </div>
</div>
</div>
</div>
<div className="mt-4 p-3 rounded-lg border border-neutral-800 bg-neutral-950/50" data-animate="" style={{transitionDelay: '.24s'}}>
<div className="flex items-center gap-2 text-xs text-neutral-400">
<i className="h-4 w-4" data-lucide="info"></i>
<span>
                      Next update is planned for Friday 5 PM local time.
                    </span>
</div>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-6">
<div className="rounded-xl border border-neutral-800 bg-neutral-900/40 lg:col-span-2 card-hover" data-animate="">
<div className="px-5 sm:px-6 pt-4">
<h3 className="text-[18px] font-semibold tracking-tight text-white">
                  Correspondence
                </h3>
<p className="text-xs text-neutral-400 mt-1">
                  Recent communications related to this week
                </p>
</div>
<div className="px-5 sm:px-6 pb-5">
<div className="mt-4 divide-y divide-neutral-800">
<div className="py-3 flex items-start gap-3" data-animate="" style={{transitionDelay: '.05s'}}>
<div className="h-8 w-8 rounded-md border border-neutral-800 bg-neutral-950/60 grid place-items-center">
<i className="h-4 w-4 text-neutral-300" data-lucide="mail"></i>
</div>
<div className="grow">
<div className="flex items-center justify-between">
<div className="text-sm text-neutral-200">
                          Vendor confirmation — inverter delivery slot
                        </div>
<span className="text-xs text-neutral-500">
                          Nov 06, 09:42
                        </span>
</div>
<div className="text-xs text-neutral-400 mt-1">
                        Awaiting acknowledgment of revised INCOTERMS.
                      </div>
</div>
</div>
<div className="py-3 flex items-start gap-3" data-animate="" style={{transitionDelay: '.12s'}}>
<div className="h-8 w-8 rounded-md border border-neutral-800 bg-neutral-950/60 grid place-items-center">
<i className="h-4 w-4 text-neutral-300" data-lucide="message-square"></i>
</div>
<div className="grow">
<div className="flex items-center justify-between">
<div className="text-sm text-neutral-200">
                          Client note — site access protocol update
                        </div>
<span className="text-xs text-neutral-500">
                          Nov 05, 16:10
                        </span>
</div>
<div className="text-xs text-neutral-400 mt-1">
                        Security badges required for all contractors effective
                        immediately.
                      </div>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-neutral-800 overflow-hidden card-hover" data-animate="">
<div className="relative h-full bg-neutral-900/40">
<img alt="" className="h-full w-full object-cover opacity-70" src="https://images.unsplash.com/photo-1533135091724-62cc5402aa20?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-4">
<div className="text-sm text-neutral-300">
                    Field photo — substation yard prep
                  </div>
<div className="text-xs text-neutral-500">Captured this week</div>
</div>
</div>
</div>
</div>

<footer className="pt-2 pb-6 text-xs text-neutral-500">
<div className="flex items-center justify-between">
<span>© 2025 Project Console</span>
<div className="flex items-center gap-4">
<a className="hover:text-neutral-300 focus-ring rounded" href="#">Privacy</a>
<a className="hover:text-neutral-300 focus-ring rounded" href="#">Terms</a>
</div>
</div>
</footer>
</section>
</main>
</div>


    </>
  );
}
