import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Icons
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Chart.js - Ratings distribution
      const ctx = document.getElementById('ratingChart').getContext('2d');
      const ratingChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['5★','4★','3★','2★','1★'],
          datasets: [{
            label: 'Reviews',
            data: [152, 58, 18, 7, 3],
            backgroundColor: ['#fbbf24','#a78bfa','#60a5fa','#f472b6','#94a3b8'],
            borderWidth: 0,
            borderRadius: 6,
            barPercentage: 0.6,
            categoryPercentage: 0.6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(17,24,39,0.9)',
              borderColor: 'rgba(255,255,255,0.12)',
              borderWidth: 1,
              padding: 10,
              titleColor: '#e5e7eb',
              bodyColor: '#e5e7eb',
              displayColors: false
            }
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: { color: '#9ca3af', font: { size: 11 } }
            },
            y: {
              beginAtZero: true,
              grid: { color: 'rgba(255,255,255,0.08)' },
              ticks: { color: '#9ca3af', font: { size: 11 }, stepSize: 50, max: 160 }
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
      

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b bg-neutral-950/60 border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md flex items-center justify-center text-sm font-semibold tracking-tight bg-white text-neutral-900">TP</div>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm transition text-neutral-300 hover:text-white" href="#">Directory</a>
<a className="text-sm transition text-neutral-300 hover:text-white" href="#">Categories</a>
<a className="text-sm transition text-neutral-300 hover:text-white" href="#">Resources</a>
</div>
</div>
<div className="flex items-center gap-3 w-full md:w-auto">
<div className="flex-1 md:flex-none w-full md:w-80">
<label className="relative block">
<span className="sr-only">Search</span>
<span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
<svg className="lucide lucide-search h-4 w-4 text-neutral-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</span>
<input className="w-full border rounded-md py-2 pl-9 pr-3 text-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-indigo-500/60 bg-neutral-900/70 border-white/10 text-neutral-100" placeholder="Search tools, companies, episodes…" type="text"/>
</label>
</div>
<a className="hidden md:inline-flex items-center gap-2 active:bg-neutral-200 transition px-3.5 py-2 rounded-md text-sm font-medium bg-white text-neutral-900 hover:bg-neutral-100" href="#">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
              Submit
            </a>
<button className="inline-flex items-center justify-center size-9 rounded-md border transition border-white/10 hover:border-white/20 hover:bg-white/5">
<svg className="lucide lucide-menu h-4 w-4" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-8 pr-4 pl-4">
<div className="relative overflow-hidden rounded-2xl border border-white/10">
<div className="absolute inset-0">
<img alt="" className="h-full w-full object-cover opacity-60" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.2),transparent_35%)]"></div>
<div className="absolute inset-0 bg-neutral-950/40"></div>
</div>
<div className="relative p-6 sm:p-8 lg:p-10">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
<div className="flex items-start gap-5">
<div className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl flex items-center justify-center text-xl sm:text-2xl font-semibold tracking-tight ring-1 shadow-md bg-white text-neutral-900 ring-white/20">SQ</div>
<div className="">
<div className="flex items-center gap-3 flex-wrap">
<h1 className="text-2xl sm:text-3xl md:text-4xl tracking-tight font-semibold">SquadCast</h1>
<span className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs border-white/15 bg-white/5 text-neutral-200">
<svg className="lucide lucide-shield-check h-3.5 w-3.5 text-emerald-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                      Verified
                    </span>
</div>
<p className="mt-2 text-sm sm:text-base max-w-2xl text-neutral-300">Remote recording studio for podcasters and content teams. Capture crystal-clear audio and video, collaborate live, and publish faster.</p>
<div className="mt-3 flex items-center gap-4">
<div className="flex items-center gap-1">
<svg className="lucide lucide-star h-4 w-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star-half h-4 w-4 text-amber-400" data-lucide="star-half" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"></path></svg>
</div>
<span className="text-sm text-neutral-300">4.7 • 238 reviews</span>
<span className="inline-flex items-center gap-1 text-xs text-neutral-400">
<svg className="lucide lucide-users h-3.5 w-3.5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                      Popular in: Podcasting, Collaboration
                    </span>
</div>
<div className="mt-4 flex flex-wrap items-center gap-2">
<span className="px-2.5 py-1 rounded-md border text-xs bg-white/5 border-white/10 text-neutral-200">Remote Recording</span>
<span className="px-2.5 py-1 rounded-md border text-xs bg-white/5 border-white/10 text-neutral-200">Video + Audio</span>
<span className="px-2.5 py-1 rounded-md border text-xs bg-white/5 border-white/10 text-neutral-200">Cloud Backups</span>
<span className="px-2.5 py-1 rounded-md border text-xs bg-white/5 border-white/10 text-neutral-200">Team Workflows</span>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 active:bg-neutral-200 transition px-4 py-2.5 rounded-md text-sm font-medium ring-1 bg-white text-neutral-900 hover:bg-neutral-100 ring-black/5" href="https://squadcast.fm" rel="noopener" target="_blank">
<svg className="lucide lucide-globe h-4 w-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                  Visit Website
                </a>
<button className="inline-flex items-center gap-2 border transition px-3.5 py-2.5 rounded-md text-sm border-white/15 hover:border-white/25 hover:bg-white/5">
<svg className="lucide lucide-edit-3 h-4 w-4" data-lucide="edit-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 21h8"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg>
                  Write a Review
                </button>
<button className="inline-flex items-center gap-2 border transition px-3.5 py-2.5 rounded-md text-sm border-white/15 hover:border-white/25 hover:bg-white/5">
<svg className="lucide lucide-bookmark-plus h-4 w-4" data-lucide="bookmark-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path><line x1="12" x2="12" y1="7" y2="13"></line><line x1="15" x2="9" y1="10" y2="10"></line></svg>
                  Save
                </button>
</div>
</div>
<div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
<div className="rounded-lg border p-3 border-white/10 bg-white/5">
<p className="text-xs text-neutral-400">Founded</p>
<p className="text-sm font-medium mt-0.5">2017</p>
</div>
<div className="rounded-lg border p-3 border-white/10 bg-white/5">
<p className="text-xs text-neutral-400">HQ</p>
<p className="text-sm font-medium mt-0.5">Remote • US</p>
</div>
<div className="rounded-lg border p-3 border-white/10 bg-white/5">
<p className="text-xs text-neutral-400">Team Size</p>
<p className="text-sm font-medium mt-0.5">11–50</p>
</div>
<div className="rounded-lg border p-3 border-white/10 bg-white/5">
<p className="text-xs text-neutral-400">Pricing</p>
<p className="text-sm font-medium mt-0.5">From $20/mo</p>
</div>
<div className="rounded-lg border p-3 border-white/10 bg-white/5">
<p className="text-xs text-neutral-400">Free Trial</p>
<p className="text-sm font-medium mt-0.5">7 days</p>
</div>
<div className="rounded-lg border p-3 border-white/10 bg-white/5">
<p className="text-xs text-neutral-400">Record Quality</p>
<p className="text-sm font-medium mt-0.5">Up to 4K Video</p>
</div>
</div>
</div>
</div>
</div>
</section>

<main className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-10 pr-4 pb-10 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-8 space-y-8">

<section className="rounded-2xl border border-white/10 bg-neutral-950/40">
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold">Overview</h2>
<p className="mt-3 text-sm leading-6 text-neutral-300">
                SquadCast is a remote recording platform built for podcasters and content teams. Record studio-quality audio and video with separate tracks, automatic backups, and smooth guest workflows. With robust production controls, noise reduction, and seamless exports, creators can focus on storytelling while staying confident in the final result.
              </p>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="rounded-lg border p-4 border-white/10 bg-white/5">
<div className="flex items-center gap-2">
<svg className="lucide lucide-cpu h-4 w-4 text-indigo-400" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<p className="text-sm font-medium">Local + Cloud Redundancy</p>
</div>
<p className="text-xs mt-1.5 text-neutral-400">Lossless local capture with cloud syncing to prevent dropouts.</p>
</div>
<div className="rounded-lg border p-4 border-white/10 bg-white/5">
<div className="flex items-center gap-2">
<svg className="lucide lucide-video h-4 w-4 text-pink-400" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
<p className="text-sm font-medium">Separate Tracks</p>
</div>
<p className="text-xs mt-1.5 text-neutral-400">Individual audio/video tracks for precise editing and mixing.</p>
</div>
<div className="rounded-lg border p-4 border-white/10 bg-white/5">
<div className="flex items-center gap-2">
<svg className="lucide lucide-workflow h-4 w-4 text-emerald-400" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
<p className="text-sm font-medium">Team Workspaces</p>
</div>
<p className="text-xs mt-1.5 text-neutral-400">Roles, permissions, and projects for producers and hosts.</p>
</div>
<div className="rounded-lg border p-4 border-white/10 bg-white/5">
<div className="flex items-center gap-2">
<svg className="lucide lucide-download-cloud h-4 w-4 text-amber-400" data-lucide="download-cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8l-4-4"></path><path d="m12 21 4-4"></path><path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"></path></svg>
<p className="text-sm font-medium">Fast Exports</p>
</div>
<p className="text-xs mt-1.5 text-neutral-400">One-click exports to editors and libraries your team already uses.</p>
</div>
</div>
</div>
<div className="border-t px-6 sm:px-8 py-4 border-white/10 bg-neutral-950/40">
<div className="flex flex-wrap items-center gap-3">
<span className="text-xs text-neutral-400">Supported: Chrome, Edge, Safari • macOS, Windows</span>
<span className="h-4 w-px bg-white/10"></span>
<span className="text-xs text-neutral-400">Languages: EN</span>
<span className="h-4 w-px bg-white/10"></span>
<span className="text-xs text-neutral-400">Support: Email, Docs, Community</span>
</div>
</div>
</section>

<section className="rounded-2xl border p-6 sm:p-8 border-white/10 bg-neutral-950/40">
<div className="flex items-center justify-between">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold">Key Features</h2>
<a className="text-sm text-indigo-400 hover:text-indigo-300" href="#">View docs</a>
</div>
<div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-start gap-3 rounded-lg border p-4 border-white/10 bg-white/5">
<svg className="lucide lucide-mic-2 h-5 w-5 text-emerald-400" data-lucide="mic-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"></path><path d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"></path><circle cx="16" cy="7" r="5"></circle></svg>
<div>
<p className="text-sm font-medium">Lossless Audio</p>
<p className="text-xs mt-1 text-neutral-400">48kHz WAV, separate tracks, built-in echo cancellation.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg border p-4 border-white/10 bg-white/5">
<svg className="lucide lucide-highlighter h-5 w-5 text-indigo-400" data-lucide="highlighter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 11-6 6v3h9l3-3"></path><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"></path></svg>
<div>
<p className="text-sm font-medium">Markers &amp; Notes</p>
<p className="text-xs mt-1 text-neutral-400">Tag highlights live for faster edits later.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg border p-4 border-white/10 bg-white/5">
<svg className="lucide lucide-shield h-5 w-5 text-rose-400" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<div>
<p className="text-sm font-medium">Automatic Backups</p>
<p className="text-xs mt-1 text-neutral-400">Local first with instant cloud mirroring for peace of mind.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg border p-4 border-white/10 bg-white/5">
<svg className="lucide lucide-share-2 h-5 w-5 text-amber-400" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
<div>
<p className="text-sm font-medium">Guest Links</p>
<p className="text-xs mt-1 text-neutral-400">No installs for guests; green room and device checks included.</p>
</div>
</div>
</div>
</section>

<section className="rounded-2xl border p-6 sm:p-8 border-white/10 bg-neutral-950/40">
<div className="flex items-center justify-between">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold">Integrations</h2>
<a className="text-sm text-indigo-400 hover:text-indigo-300" href="#">See all</a>
</div>
<div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
<div className="group rounded-lg border p-4 transition border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md flex items-center justify-center text-xs font-semibold tracking-tight bg-white text-neutral-900">DS</div>
<p className="text-sm font-medium">Descript</p>
</div>
<p className="text-xs mt-1 text-neutral-400">Export sessions to projects.</p>
</div>
<div className="group rounded-lg border p-4 transition border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md flex items-center justify-center text-xs font-semibold tracking-tight bg-white text-neutral-900">ZP</div>
<p className="text-sm font-medium">Zapier</p>
</div>
<p className="text-xs mt-1 text-neutral-400">Automate handoffs and tasks.</p>
</div>
<div className="group rounded-lg border p-4 transition border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md flex items-center justify-center text-xs font-semibold tracking-tight bg-white text-neutral-900">SL</div>
<p className="text-sm font-medium">Slack</p>
</div>
<p className="text-xs mt-1 text-neutral-400">Notify team when exports finish.</p>
</div>
<div className="group rounded-lg border p-4 transition border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md flex items-center justify-center text-xs font-semibold tracking-tight bg-white text-neutral-900">DB</div>
<p className="text-sm font-medium">Dropbox</p>
</div>
<p className="text-xs mt-1 text-neutral-400">Sync assets to folders.</p>
</div>
<div className="group rounded-lg border p-4 transition border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md flex items-center justify-center text-xs font-semibold tracking-tight bg-white text-neutral-900">NT</div>
<p className="text-sm font-medium">Notion</p>
</div>
<p className="text-xs mt-1 text-neutral-400">Send show notes to docs.</p>
</div>
</div>
</section>

<section className="rounded-2xl border border-white/10 bg-neutral-950/40">
<div className="p-6 sm:p-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div>
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold">Reviews</h2>
<p className="text-sm mt-1 text-neutral-400">What creators and producers say</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 border transition px-3.5 py-2 rounded-md text-sm border-white/15 hover:border-white/25 hover:bg-white/5">
<svg className="lucide lucide-filter h-4 w-4" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
                    Filter
                  </button>
<button className="inline-flex items-center gap-2 active:bg-neutral-200 transition px-3.5 py-2 rounded-md text-sm font-medium bg-white text-neutral-900 hover:bg-neutral-100">
<svg className="lucide lucide-edit-3 h-4 w-4" data-lucide="edit-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 21h8"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg>
                    Write a Review
                  </button>
</div>
</div>

<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-lg border p-5 border-white/10 bg-white/5">
<div className="flex items-end gap-3">
<p className="text-4xl tracking-tight font-semibold">4.7</p>
<div className="flex items-center gap-1">
<svg className="lucide lucide-star h-4 w-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star-half h-4 w-4 text-amber-400" data-lucide="star-half" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"></path></svg>
</div>
</div>
<p className="text-xs mt-1 text-neutral-400">Based on 238 reviews</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="px-2 py-1 rounded-md border text-xs border-white/10 text-neutral-300 bg-white/5">Audio Quality</span>
<span className="px-2 py-1 rounded-md border text-xs border-white/10 text-neutral-300 bg-white/5">Ease of Use</span>
<span className="px-2 py-1 rounded-md border text-xs border-white/10 text-neutral-300 bg-white/5">Reliability</span>
</div>
</div>
<div className="md:col-span-2 rounded-lg border p-5 border-white/10 bg-white/5">
<h3 className="text-sm font-medium">Rating distribution</h3>
<p className="text-xs text-neutral-400">Last 12 months</p>
<div className="mt-3">
<div className="relative h-36 rounded-md border p-2 bg-neutral-900 border-white/10">
<div className="h-full w-full">
<canvas height="126" id="ratingChart" style={{display: 'block', boxSizing: 'border-box', height: '126px', width: '324px'}} width="324"></canvas>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 space-y-4">
<article className="rounded-lg border p-5 border-white/10 bg-white/5">
<div className="flex items-start justify-between gap-4">
<div className="flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">Aisha Khan</p>
<p className="text-xs text-neutral-400">Producer, Indie Pod Lab</p>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-star h-4 w-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<h4 className="text-sm font-medium mt-3">Rock-solid remote sessions with clean audio</h4>
<p className="text-sm mt-2 text-neutral-300">We’ve recorded 40+ interviews and haven’t lost a file. Guests connect easily and the separate tracks make edits painless.</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-xs text-neutral-400">Ease of Use</span>
<span className="text-xs text-neutral-400">Audio Quality</span>
<span className="text-xs text-neutral-400">Support</span>
</div>
</article>
<article className="rounded-lg border p-5 border-white/10 bg-white/5">
<div className="flex items-start justify-between gap-4">
<div className="flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">Marcus Lee</p>
<p className="text-xs text-neutral-400">Host, Design Signals</p>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-star h-4 w-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star-half h-4 w-4 text-amber-400" data-lucide="star-half" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"></path></svg>
</div>
</div>
<h4 className="text-sm font-medium mt-3">Great quality and workflow improvements</h4>
<p className="text-sm mt-2 text-neutral-300">Markers during recording are a lifesaver. I wish the mobile guest check was even simpler, but overall it’s excellent.</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-xs text-neutral-400">Workflow</span>
<span className="text-xs text-neutral-400">Reliability</span>
</div>
</article>
<div className="flex justify-center">
<button className="inline-flex items-center gap-2 border transition px-4 py-2.5 rounded-md text-sm border-white/15 hover:border-white/25 hover:bg-white/5">
<svg className="lucide lucide-chevrons-down h-4 w-4" data-lucide="chevrons-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 6 5 5 5-5"></path><path d="m7 13 5 5 5-5"></path></svg>
                    Load more
                  </button>
</div>
</div>
</div>
</section>

<section className="rounded-2xl border p-6 sm:p-8 border-white/10 bg-neutral-950/40">
<div className="flex items-center justify-between">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold">Plans &amp; Pricing</h2>
<a className="text-sm text-indigo-400 hover:text-indigo-300" href="#">Compare plans</a>
</div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-xl border p-5 border-white/10 bg-white/5">
<div className="flex items-center justify-between">
<p className="text-sm font-medium">Starter</p>
<span className="text-xs text-neutral-400">For new shows</span>
</div>
<p className="mt-3 text-2xl tracking-tight font-semibold">$20<span className="text-sm font-normal text-neutral-400">/mo</span></p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 2 hours / month</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 2 participants</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Separate audio tracks</li>
</ul>
<button className="mt-5 w-full inline-flex items-center justify-center gap-2 border transition px-3.5 py-2.5 rounded-md text-sm border-white/15 hover:border-white/25 hover:bg-white/5">Choose Starter</button>
</div>
<div className="rounded-xl border bg-gradient-to-b from-indigo-500/10 to-transparent p-5 ring-1 ring-inset border-indigo-400/30 ring-indigo-400/10">
<div className="flex items-center justify-between">
<p className="text-sm font-medium">Pro</p>
<span className="text-xs px-2 py-0.5 rounded bg-indigo-500/20 border text-indigo-300 border-indigo-400/30">Popular</span>
</div>
<p className="mt-3 text-2xl tracking-tight font-semibold">$40<span className="text-sm font-normal text-neutral-400">/mo</span></p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 10 hours / month</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 5 participants</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 4K video + separate tracks</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Priority support</li>
</ul>
<button className="mt-5 w-full inline-flex items-center justify-center gap-2 active:bg-neutral-200 transition px-3.5 py-2.5 rounded-md text-sm font-medium bg-white text-neutral-900 hover:bg-neutral-100">Choose Pro</button>
</div>
<div className="rounded-xl border p-5 border-white/10 bg-white/5">
<div className="flex items-center justify-between">
<p className="text-sm font-medium">Studio</p>
<span className="text-xs text-neutral-400">For teams</span>
</div>
<p className="mt-3 text-2xl tracking-tight font-semibold">Custom</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Unlimited sessions</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> SSO &amp; roles</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Dedicated CSM</li>
</ul>
<button className="mt-5 w-full inline-flex items-center justify-center gap-2 border transition px-3.5 py-2.5 rounded-md text-sm border-white/15 hover:border-white/25 hover:bg-white/5">Contact Sales</button>
</div>
</div>
</section>

<section className="rounded-2xl border p-6 sm:p-8 border-white/10 bg-neutral-950/40">
<div className="flex items-center justify-between">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold">Alternatives</h2>
<a className="text-sm text-indigo-400 hover:text-indigo-300" href="#">View all</a>
</div>
<div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="group flex items-center justify-between rounded-xl border p-4 transition border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md flex items-center justify-center text-xs font-semibold tracking-tight bg-white text-neutral-900">RV</div>
<div>
<p className="text-sm font-medium">Riverside</p>
<p className="text-xs text-neutral-400">Remote audio/video recording</p>
</div>
</div>
<svg className="lucide lucide-chevron-right h-4 w-4 group-hover:text-neutral-200 text-neutral-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<div className="group flex items-center justify-between rounded-xl border p-4 transition border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md flex items-center justify-center text-xs font-semibold tracking-tight bg-white text-neutral-900">ZC</div>
<div>
<p className="text-sm font-medium">Zencastr</p>
<p className="text-xs text-neutral-400">Multitrack remote audio</p>
</div>
</div>
<svg className="lucide lucide-chevron-right h-4 w-4 group-hover:text-neutral-200 text-neutral-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
</section>
</div>

<aside className="lg:col-span-4 space-y-8">

<section className="rounded-2xl border p-6 sm:p-8 border-white/10 bg-neutral-950/40">
<h3 className="text-lg tracking-tight font-semibold">Contact &amp; Links</h3>
<div className="mt-4 space-y-3">
<a className="flex items-center gap-2 text-sm text-neutral-200 hover:text-white" href="https://squadcast.fm" rel="noopener" target="_blank">
<svg className="lucide lucide-globe h-4 w-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                squadcast.fm
              </a>
<a className="flex items-center gap-2 text-sm text-neutral-200 hover:text-white" href="mailto:hello@squadcast.fm">
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                hello@squadcast.fm
              </a>
<div className="flex items-center gap-2 pt-2">
<a className="size-9 rounded-md border flex items-center justify-center transition border-white/10 hover:border-white/20 hover:bg-white/5" href="#">
<svg className="lucide lucide-twitter h-4 w-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="size-9 rounded-md border flex items-center justify-center transition border-white/10 hover:border-white/20 hover:bg-white/5" href="#">
<svg className="lucide lucide-linkedin h-4 w-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="size-9 rounded-md border flex items-center justify-center transition border-white/10 hover:border-white/20 hover:bg-white/5" href="#">
<svg className="lucide lucide-youtube h-4 w-4" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
</div>
</div>
<div className="mt-6 grid grid-cols-3 gap-2">
<img alt="" className="h-24 w-full object-cover rounded-lg border border-white/10" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-24 w-full object-cover rounded-lg border border-white/10" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-24 w-full object-cover rounded-lg border border-white/10" src="https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="rounded-2xl border p-6 sm:p-8 border-white/10 bg-neutral-950/40">
<h3 className="text-lg tracking-tight font-semibold">Resources</h3>
<div className="mt-4 space-y-3">
<a className="group flex items-center justify-between rounded-lg border p-4 transition border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10" href="#">
<div className="flex items-center gap-3">
<svg className="lucide lucide-book-open h-5 w-5 text-indigo-300" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
<div>
<p className="text-sm font-medium">Getting Started Guide</p>
<p className="text-xs text-neutral-400">Onboarding and first recording</p>
</div>
</div>
<svg className="lucide lucide-arrow-up-right h-4 w-4 group-hover:text-neutral-200 text-neutral-400" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="group flex items-center justify-between rounded-lg border p-4 transition border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10" href="#">
<div className="flex items-center gap-3">
<svg className="lucide lucide-file-code h-5 w-5 text-emerald-300" data-lucide="file-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12.5 8 15l2 2.5"></path><path d="m14 12.5 2 2.5-2 2.5"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"></path></svg>
<div>
<p className="text-sm font-medium">API &amp; Webhooks</p>
<p className="text-xs text-neutral-400">Automations and integrations</p>
</div>
</div>
<svg className="lucide lucide-arrow-up-right h-4 w-4 group-hover:text-neutral-200 text-neutral-400" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="group flex items-center justify-between rounded-lg border p-4 transition border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10" href="#">
<div className="flex items-center gap-3">
<svg className="lucide lucide-sparkles h-5 w-5 text-amber-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<div>
<p className="text-sm font-medium">Case Studies</p>
<p className="text-xs text-neutral-400">How teams ship better shows</p>
</div>
</div>
<svg className="lucide lucide-arrow-up-right h-4 w-4 group-hover:text-neutral-200 text-neutral-400" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</section>

<section className="rounded-2xl border p-6 sm:p-8 border-white/10 bg-neutral-950/40">
<div className="flex items-start gap-3">
<svg className="lucide lucide-badge-check h-5 w-5 text-emerald-400" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<div>
<h3 className="text-lg tracking-tight font-semibold">Is this your company?</h3>
<p className="text-sm mt-1 text-neutral-300">Claim the profile to update details, manage reviews, and add resources.</p>
<button className="mt-4 inline-flex items-center gap-2 border transition px-3.5 py-2.5 rounded-md text-sm border-white/15 hover:border-white/25 hover:bg-white/5">
<svg className="lucide lucide-key h-4 w-4" data-lucide="key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
                  Claim this profile
                </button>
</div>
</div>
</section>
</aside>
</div>
</main>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col sm:flex-row justify-between gap-4">
<p className="text-sm text-neutral-400">© <span id="year">2025</span> The Podosphere</p>
<div className="flex items-center gap-4">
<a className="text-sm text-neutral-400 hover:text-neutral-200" href="#">About</a>
<a className="text-sm text-neutral-400 hover:text-neutral-200" href="#">Submit</a>
<a className="text-sm text-neutral-400 hover:text-neutral-200" href="#">Privacy</a>
</div>
</div>
</div>
</footer>





    </>
  );
}
