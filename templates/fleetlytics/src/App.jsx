import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



(() => {
try {
const saved = localStorage.getItem('fleetlytics-theme') || 'light';
if (saved === 'dark') document.documentElement.classList.add('dark');
} catch (e) {}
})();



      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();
      });

      const themeToggle = document.getElementById('themeToggle');
      if (themeToggle) {
        themeToggle.addEventListener('click', () => {
          const root = document.documentElement;
          const isDark = root.classList.toggle('dark');
          try { localStorage.setItem('fleetlytics-theme', isDark ? 'dark' : 'light'); } catch (e) {}
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full bg-gradient-to-r from-[#007BFF]/10 via-emerald-500/5 to-orange-500/10 dark:from-[#007BFF]/15 dark:via-emerald-500/10 dark:to-orange-500/15 border-b border-slate-200/70 dark:border-white/10">
<div className="flex gap-2 text-sm max-w-7xl mr-auto ml-auto pt-2 pr-6 pb-2 pl-6 items-center justify-center">
<span className="relative inline-flex items-center overflow-hidden rounded-md border border-slate-200/70 dark:border-white/10">
<span className="flex">
<span className="w-3 h-3 bg-white relative">
<span className="absolute inset-0 flex items-center justify-center">
<span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
</span>
</span>
<span className="bg-[#0038A8] w-3 h-3"></span>
<span className="bg-[#CE1126] w-3 h-3"></span>
</span>
</span>
<p className="dark:text-slate-300 text-slate-700" style={{}}>Built for Philippine fleets —trusted by growing operators and corporate teams nationwide.</p>
</div>
</div>

<header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-neutral-950/60 border-b border-slate-200/70 dark:border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-[#007BFF] shadow-md shadow-[#007BFF]/30 flex items-center justify-center">
<span className="font-semibold text-white tracking-tight" style={{fontFamily: 'Aileron, Inter', letterSpacing: '-0.02em'}}>F</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="hover:text-[#007BFF] dark:text-slate-300 dark:hover:text-[#7AB8FF] transition-colors text-slate-700" href="#features" style={{}}>Product</a>
<a className="hover:text-[#007BFF] dark:text-slate-300 dark:hover:text-[#7AB8FF] transition-colors text-slate-700" href="#pricing" style={{}}>Pricing</a>
<a className="text-slate-700 hover:text-[#007BFF] dark:text-slate-300 dark:hover:text-[#7AB8FF] transition-colors" href="#testimonials" style={{}}>Customers</a>
<a className="text-slate-700 hover:text-[#007BFF] dark:text-slate-300 dark:hover:text-[#7AB8FF] transition-colors" href="#faq" style={{}}>FAQ</a>
</nav>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md border border-slate-300/70 dark:border-white/10 bg-white dark:bg-neutral-900 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:border-[#007BFF]/50 hover:text-[#007BFF] dark:hover:text-[#7AB8FF] transition-colors" id="themeToggle">
<svg className="lucide lucide-moon-star w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="moon-star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(122, 184, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 5h4"></path><path d="M20 3v4"></path><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
<span className="hidden sm:inline" style={{}}>Theme</span>
</button>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-slate-300/70 dark:border-white/10 px-4 py-2 text-sm hover:border-[#007BFF]/50 hover:text-[#007BFF] dark:hover:text-[#7AB8FF] transition-colors" href="#demo" style={{}}>
<svg className="lucide lucide-play-circle w-4.5 h-4.5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
              Watch Demo
            </a>
<a className="inline-flex items-center gap-2 rounded-md bg-[#007BFF] hover:bg-[#0067d6] text-white px-4 py-2 text-sm shadow-md shadow-[#007BFF]/25 transition-colors" href="#signup" style={{}}>
<svg className="lucide lucide-arrow-right w-4.5 h-4.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              Start Free
            </a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-[#007BFF]/10 via-transparent to-transparent dark:from-[#007BFF]/20"></div>
<div className="absolute -top-24 right-[-10%] w-[520px] h-[520px] rounded-full bg-[#007BFF]/10 blur-3xl"></div>
<div className="absolute -bottom-24 left-[-10%] w-[520px] h-[520px] rounded-full bg-emerald-500/10 blur-3xl"></div>
</div>
<div className="md:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="">
<h1 className="md:text-5xl lg:text-[52px] text-4xl font-semibold tracking-tight" style={{fontFamily: 'Aileron, Inter', letterSpacing: '-0.03em'}}>#1 Fleet Management Platform in the Philippines</h1>
<p className="md:text-lg dark:text-slate-300 text-base text-slate-700 max-w-2xl mt-5" style={{}}>Manage Your Rentals Like a Pro. From motorcycles and hatchbacks to sedans, vans, SUVs, and MPVs—Fleetlytics gives Filipino fleet owners real-time booking, utilization analytics, and revenue tracking in one powerful platform.</p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-[#007BFF] hover:bg-[#0067d6] text-white px-5 py-3 text-sm shadow-lg shadow-[#007BFF]/25 transition-colors" href="#signup" style={{}}>
<svg className="lucide lucide-sparkles w-4.5 h-4.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                Start Managing Your Fleet Today
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300/70 dark:border-white/10 px-5 py-3 text-sm hover:border-[#007BFF]/50 hover:text-[#007BFF] dark:hover:text-[#7AB8FF] transition-colors" href="#demo" style={{}}>
<svg className="lucide lucide-video w-4.5 h-4.5" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
                Watch Demo
              </a>
</div>
<div className="mt-6 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
<span className="inline-flex items-center gap-1.5" style={{}}>
<svg className="lucide lucide-star w-3.5 h-3.5 text-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                4.9/5 rating
              </span>
<span className="inline-flex items-center gap-1.5" style={{}}>
<svg className="lucide lucide-building-2 w-3.5 h-3.5 text-[#007BFF]" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
                500+ Filipino businesses
              </span>
</div>
</div>
<div className="relative">
<div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl p-4 shadow-xl">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-sm font-medium" style={{}}>
<svg className="lucide lucide-calendar w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(0, 123, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                  Real-time Booking
                </div>
<div className="inline-flex items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-emerald-500/10 text-emerald-600" style={{}}><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Live</span>
</div>
</div>
<div className="mt-4 grid grid-cols-7 gap-2">

<div className="min-h-[64px] dark:border-white/10 dark:bg-neutral-900/60 bg-white/60 border-slate-200/70 border rounded-md"></div>
<div className="min-h-[64px] rounded-md border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60"></div>
<div className="min-h-[64px] rounded-md border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60"></div>
<div className="min-h-[64px] rounded-md border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60"></div>
<div className="min-h-[64px] rounded-md border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60"></div>
<div className="min-h-[64px] rounded-md border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60"></div>
<div className="min-h-[64px] rounded-md border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60"></div>
</div>
<div className="mt-4 grid grid-cols-3 gap-2">
<div className="rounded-md border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 px-3 py-2 text-xs inline-flex items-center gap-2" style={{}}>
<svg className="lucide lucide-route w-3.5 h-3.5" data-lucide="route" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
                  Cebu Delivery — PHP 4,500
                </div>
<div className="rounded-md border border-orange-500/30 bg-orange-500/10 text-orange-500 px-3 py-2 text-xs inline-flex items-center gap-2" style={{}}>
<svg className="lucide lucide-bus w-3.5 h-3.5" data-lucide="bus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 6v6"></path><path d="M15 6v6"></path><path d="M2 12h19.6"></path><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"></path><circle cx="7" cy="18" r="2"></circle><path d="M9 18h5"></path><circle cx="16" cy="18" r="2"></circle></svg>
                  BGC Shuttle — PHP 3,200
                </div>
<div className="rounded-md border border-[#007BFF]/30 bg-[#007BFF]/10 text-[#007BFF] px-3 py-2 text-xs inline-flex items-center gap-2" style={{}}>
<svg className="lucide lucide-truck w-3.5 h-3.5" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
                  Manila Linehaul — PHP 5,800
                </div>
</div>
<div className="text-[11px] dark:text-slate-400 text-slate-500 mt-3" style={{}}>Drag-and-drop scheduling with conflict prevention.</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="md:py-16 max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">
<div className="text-center max-w-3xl mx-auto">
<h2 className="md:text-3xl text-2xl font-semibold tracking-tight" style={{fontFamily: 'Aileron, Inter', letterSpacing: '-0.02em'}}>Everything You Need to Manage Your Fleet</h2>
<p className="dark:text-slate-400 text-slate-600 mt-2" style={{}}>Solve the 5 biggest pain points for PH fleet owners.</p>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
<div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 p-5 hover:border-[#007BFF]/40 transition-all">
<div className="inline-flex text-[#007BFF] bg-[#007BFF]/10 w-10 h-10 rounded-lg items-center justify-center">
<svg className="lucide lucide-calendar-range w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="calendar-range" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(0, 123, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M16 2v4"></path><path d="M3 10h18"></path><path d="M8 2v4"></path><path d="M17 14h-6"></path><path d="M13 18H7"></path><path d="M7 14h.01"></path><path d="M17 18h.01"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight mt-4" style={{fontFamily: 'Aileron, Inter'}}>Smart Calendar</h3>
<p className="dark:text-slate-400 text-sm text-slate-600 mt-2" style={{}}>Prevent double-bookings with clash detection and drag-and-drop scheduling.</p>
</div>
<div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 p-5 hover:border-[#007BFF]/40 transition-all">
<div className="inline-flex bg-[#FD740A]/10 w-10 h-10 rounded-lg items-center justify-center">
<svg className="lucide lucide-bell lucide-alarm-check w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="bell" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(253, 116, 10)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight" style={{fontFamily: 'Aileron, Inter'}}>Renewal Radar</h3>
<p className="dark:text-slate-400 text-sm text-slate-600 mt-2" style={{}}>Get automated reminders for LTO, insurance, and preventive maintenance.</p>
</div>
<div className="dark:border-white/10 dark:bg-neutral-900/60 hover:border-[#007BFF]/40 transition-all bg-white/70 border-slate-200/70 border rounded-2xl pt-5 pr-5 pb-5 pl-5">
<div className="inline-flex text-[#00D8A4] bg-[#00D8A4]/10 w-10 h-10 rounded-lg items-center justify-center">
<svg className="lucide lucide-receipt-text lucide-receipt w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="receipt-text" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(0, 216, 164)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M14 8H8"></path><path d="M16 12H8"></path><path d="M13 16H8"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight" style={{fontFamily: 'Aileron, Inter'}}>Invoicing</h3>
<p className="dark:text-slate-400 text-sm text-slate-600 mt-2" style={{}}>Issue receipts in PHP and track paid vs. unpaid in real time.</p>
</div>
<div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 p-5 hover:border-[#007BFF]/40 transition-all">
<div className="inline-flex text-[#007BFF] bg-[#FA4D4D]/10 w-10 h-10 rounded-lg items-center justify-center">
<svg className="lucide lucide-shield lucide-id-card w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="shield" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(250, 77, 77)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight mt-4" style={{fontFamily: 'Aileron, Inter'}}>KYC &amp; Damage Flow</h3>
<p className="dark:text-slate-400 text-sm text-slate-600 mt-2" style={{}}>Capture IDs and trip photos to reduce fraud, disputes, and losses.</p>
</div>
<div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 p-5 hover:border-[#007BFF]/40 transition-all">
<div className="inline-flex text-[#00D8A4] bg-emerald-500/10 w-10 h-10 rounded-lg items-center justify-center">
<svg className="lucide lucide-bar-chart-3 w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(0, 216, 164)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight" style={{fontFamily: 'Aileron, Inter'}}>Profit Snapshot</h3>
<p className="dark:text-slate-400 text-sm text-slate-600 mt-2" style={{}}>See true profit per vehicle — revenue minus fuel, amortization, and repairs.</p>
</div>
</div>
</div>
</section>

<section aria-label="Fleetlytics pricing" className="relative">
<div className="md:py-16 max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">
<div className="text-center max-w-2xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{fontFamily: 'Aileron, Inter'}}>Simple, Transparent Pricing</h2>
<p className="mt-2 text-slate-600 dark:text-slate-400" style={{}}>VAT included • No hidden fees • Cancel anytime</p>
</div>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="flex flex-col p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-neutral-900/70 backdrop-blur-md shadow-sm hover:shadow-md transition">
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: 'Aileron, Inter'}}>Starter</h3>
<div className="mt-3">
<div className="text-3xl font-semibold tracking-tight" style={{fontFamily: 'Aileron, Inter'}}>₱1,790</div>
<div className="text-xs text-slate-500 dark:text-slate-400" style={{}}>per month</div>
</div>
<ul className="mt-4 text-sm text-slate-700 dark:text-slate-300 space-y-2">
<li className="inline-flex items-center gap-2" style={{}}><svg className="lucide lucide-check w-4 h-4 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Up to 5 vehicles</li>
<li className="inline-flex items-center gap-2" style={{}}><svg className="lucide lucide-check w-4 h-4 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Smart Calendar &amp; clash prevention</li>
<li className="inline-flex items-center gap-2" style={{}}><svg className="lucide lucide-check w-4 h-4 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Renewal reminders (LTO, insurance, PMS)</li>
<li className="inline-flex items-center gap-2" style={{}}><svg className="lucide lucide-check w-4 h-4 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Basic invoicing &amp; receipts </li>
<li className="inline-flex items-center gap-2" style={{}}><svg className="lucide lucide-check w-4 h-4 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Email support</li>
</ul>
<div className="mt-6">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#007BFF] hover:bg-[#0067d6] text-white px-4 py-2 text-sm shadow-md shadow-[#007BFF]/25 transition-colors" href="#signup" style={{}}>
<svg className="lucide lucide-rocket w-4.5 h-4.5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                Start Free Trial
              </a>
</div>
</div>

<div className="relative rounded-2xl border-2 border-[#007BFF] bg-white/85 dark:bg-neutral-900/70 backdrop-blur-xl p-6 flex flex-col shadow-xl shadow-[#007BFF]/10">
<div className="absolute -top-3 right-4 inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#007BFF] text-white text-xs shadow" style={{}}>Most Popular</div>
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: 'Aileron, Inter'}}>Growth</h3>
<div className="mt-3">
<div className="text-3xl font-semibold tracking-tight" style={{fontFamily: 'Aileron, Inter'}}>₱5,950</div>
<div className="text-xs text-slate-500 dark:text-slate-400" style={{}}>per month</div>
</div>
<ul className="mt-4 text-sm text-slate-700 dark:text-slate-300 space-y-2">
<li className="inline-flex items-center gap-2" style={{}}><svg className="lucide lucide-check w-4 h-4 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Up to 25 vehicles</li>
<li className="inline-flex items-center gap-2" style={{}}><svg className="lucide lucide-check w-4 h-4 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Everything in Starter</li>
<li className="inline-flex items-center gap-2" style={{}}><svg className="lucide lucide-check w-4 h-4 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Advanced invoicing &amp; payment tracking</li>
<li className="inline-flex items-center gap-2" style={{}}><svg className="lucide lucide-check w-4 h-4 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Analytics &amp; utilization reports</li>
<li className="inline-flex items-center gap-2" style={{}}><svg className="lucide lucide-check w-4 h-4 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Priority PH-based support
</li>
</ul>
<div className="mt-6">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#007BFF] hover:bg-[#0067d6] text-white px-4 py-2 text-sm shadow-md shadow-[#007BFF]/25 transition-colors" href="#signup" style={{}}>
<svg className="lucide lucide-sparkles w-4.5 h-4.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                Start Free Trial
              </a>
</div>
</div>

<div className="flex flex-col p-6 rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/90 dark:bg-neutral-900/70 backdrop-blur-md shadow-sm hover:shadow-md transition">
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: 'Aileron, Inter'}}>Pro</h3>
<div className="mt-3">
<div className="text-3xl font-semibold tracking-tight" style={{fontFamily: 'Aileron, Inter'}}>₱14,000</div>
<div className="text-xs text-slate-500 dark:text-slate-400" style={{}}>per month</div>
</div>
<ul className="mt-4 text-sm text-slate-700 dark:text-slate-300 space-y-2">
<li className="inline-flex items-center gap-2" style={{}}><svg className="lucide lucide-check w-4 h-4 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Unlimited vehicles</li>
<li className="inline-flex items-center gap-2" style={{}}><svg className="lucide lucide-check w-4 h-4 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Everything in Growth</li>
<li className="inline-flex items-center gap-2" style={{}}><svg className="lucide lucide-check w-4 h-4 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Custom integrations &amp; API access</li>
<li className="inline-flex items-center gap-2" style={{}}><svg className="lucide lucide-check w-4 h-4 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Dedicated account manager</li>
<li className="inline-flex items-center gap-2" style={{}}><svg className="lucide lucide-check w-4 h-4 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 24/7 PH-based support</li>
</ul>
<div className="mt-6">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-slate-300/70 dark:border-white/10 px-4 py-2 text-sm hover:border-[#007BFF]/50 hover:text-[#007BFF] dark:hover:text-[#7AB8FF] transition-colors" href="#contact" style={{}}>
<svg className="lucide lucide-message-square w-4.5 h-4.5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
                Contact Sales
              </a>
</div>
</div>
</div>
<div className="mt-6 max-w-2xl mx-auto rounded-lg border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 p-4 text-center text-sm">
<p className="" style={{}}><span className="font-medium" style={{}}>Add-On:</span> +25 invoices for ₱190 / month (VAT included)</p>
</div>
</div>
</section>

<section aria-label="Fleetlytics testimonials" className="relative" id="testimonials">
<div className="md:py-16 max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">
<div className="text-center max-w-3xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{fontFamily: 'Aileron, Inter'}}>Trusted by Filipino Fleet Operators</h2>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="dark:border-white/10 dark:bg-neutral-900/70 hover:shadow-md transition bg-white/90 border-slate-200/70 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm backdrop-blur-md">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-[#007BFF]/15 text-[#007BFF] flex items-center justify-center font-medium tracking-tight" style={{fontFamily: 'Aileron, Inter', letterSpacing: '-0.02em'}}>MS</div>
<div className="">
<div className="font-medium" style={{}}>Maria Santos</div>
<div className="dark:text-slate-400 text-xs text-slate-500" style={{}}>DriveNow  – Quezon City</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-700 dark:text-slate-300" style={{}}>“Fleetlytics increased our truck utilization by 27% and cut scheduling time from hours to minutes.”</p>
</div>
<div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/80 dark:bg-neutral-900/60 backdrop-blur-xl p-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-emerald-500/15 text-emerald-600 flex items-center justify-center font-medium tracking-tight" style={{fontFamily: 'Aileron, Inter', letterSpacing: '-0.02em'}}>RC</div>
<div className="">
<div className="font-medium" style={{}}>Roberto Cruz</div>
<div className="dark:text-slate-400 text-xs text-slate-500" style={{}}>Visayas Car Rentals – Cebu</div>
</div>
</div>
<p className="dark:text-slate-300 text-sm text-slate-700 mt-4" style={{}}>“Managing 15 rentals—from motorcycles to SUVs—was a nightmare…”</p>
</div>
<div className="dark:border-white/10 dark:bg-neutral-900/60 bg-white/80 border-slate-200/70 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-orange-500/15 text-orange-500 flex items-center justify-center font-medium tracking-tight" style={{fontFamily: 'Aileron, Inter', letterSpacing: '-0.02em'}}>JR</div>
<div className="">
<div className="font-medium" style={{}}>Jennifer Reyes</div>
<div className="dark:text-slate-400 text-xs text-slate-500" style={{}}>Mindanao Rent A Car – Davao</div>
</div>
</div>
<p className="dark:text-slate-300 text-sm text-slate-700 mt-4" style={{}}>“We finally see true profitability per vehicle. Our monthly fleet profit is up by 12%.”</p>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="md:py-16 max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">
<div className="md:p-8 dark:border-white/10 dark:bg-neutral-900/70 hover:shadow-md transition bg-white/90 border-slate-200/70 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm backdrop-blur-md">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="">
<h2 className="text-2xl font-semibold tracking-tight" style={{fontFamily: 'Aileron, Inter'}}>Frequently Asked Questions</h2>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-400" style={{}}>Answers for Philippine fleets.</p>
<div className="mt-6 rounded-lg border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 p-4">
<div className="flex items-start gap-3">
<svg className="lucide lucide-gift lucide-badge-check w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="gift" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(0, 216, 164)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
<div className="">
<div className="font-medium" style={{}}>Is there a free trial?</div>
<p className="dark:text-slate-400 text-sm text-slate-600" style={{}}>Yes. All plans include a 14-day free trial with full access. No credit card required.</p>
</div>
</div>
</div>
<div className="mt-3 rounded-lg border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 p-4">
<div className="flex items-start gap-3">
<svg className="lucide lucide-philippine-peso lucide-percent w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="philippine-peso" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(0, 123, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 11H4"></path><path d="M20 7H4"></path><path d="M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7"></path></svg>
<div className="">
<div className="font-medium" style={{}}>Are prices VAT-inclusive?</div>
<p className="dark:text-slate-400 text-sm text-slate-600" style={{}}>Yes. All prices (₱1,790 / ₱5,950 / ₱14,000) are VAT-inclusive. No hidden fees.</p>
</div>
</div>
</div>
</div>
<div className="space-y-3">
<div className="dark:border-white/10 dark:bg-neutral-900/60 bg-white/70 border-slate-200/70 border rounded-lg pt-4 pr-4 pb-4 pl-4">
<div className="flex gap-3 items-start">
<svg className="lucide lucide-phone lucide-headphones w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="phone" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(253, 116, 10)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<div className="">
<div className="font-medium" style={{}}>Where is support located?</div>
<p className="dark:text-slate-400 text-sm text-slate-600" style={{}}>Our PH-based support team is available Monday – Saturday via chat, email, and phone.</p>
</div>
</div>
</div>
<div className="rounded-lg border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 p-4">
<div className="flex items-start gap-3">
<svg className="lucide lucide-receipt-text lucide-file-input lucide-file-text w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="receipt-text" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(250, 77, 77)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M14 8H8"></path><path d="M16 12H8"></path><path d="M13 16H8"></path></svg>
<div className="">
<div className="font-medium" style={{}}>Do you support PH billing?</div>
<p className="dark:text-slate-400 text-sm text-slate-600" style={{}}>Yes. Invoices are issued in PHP with VAT, surcharges, and withholding support. Exportable to your accounting tools.</p>
</div>
</div>
</div>
<div className="pt-2">
<a className="inline-flex items-center gap-2 hover:bg-[#0067d6] shadow-[#007BFF]/25 transition-colors text-sm text-white bg-[#007BFF] rounded-md pt-2 pr-4 pb-2 pl-4 shadow-md" href="#signup" style={{}}>Start Free Today — No credit card required<svg className="lucide lucide-arrow-right w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
</div>
</div>
</div>

<footer className="dark:border-white/10 md:pb-10 border-slate-200/70 border-t mt-10 pt-8 pb-24">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-[#007BFF] shadow-md shadow-[#007BFF]/30 flex items-center justify-center">
<span className="font-semibold text-white tracking-tight" style={{fontFamily: 'Aileron, Inter', letterSpacing: '-0.02em'}}>F</span>
</div>
<div className="text-sm text-slate-600 dark:text-slate-400" style={{}}>Fleetlytics — PH-first fleet management</div>
</div>
<p className="dark:text-slate-400 text-sm text-slate-600 mt-4" style={{}}>Calaguiman, Samal, Bataan, Philippines · 

(+63) 919 871 2467 · fleetlytics.ai@gmail.com</p>
</div>
<div className="">
<div className="text-sm font-medium" style={{}}>Company</div>
<ul className="mt-3 text-sm text-slate-600 dark:text-slate-400 space-y-2">
<li className=""><a className="hover:text-[#007BFF]" href="#features" style={{}}>Product</a></li>
<li className=""><a className="hover:text-[#007BFF]" href="#testimonials" style={{}}>Customers</a></li>
<li className=""><a className="hover:text-[#007BFF]" href="#pricing" style={{}}>Pricing</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium" style={{}}>Legal</div>
<ul className="mt-3 text-sm text-slate-600 dark:text-slate-400 space-y-2">
<li><a className="hover:text-[#007BFF]" href="#" style={{}}>Terms</a></li>
<li><a className="hover:text-[#007BFF]" href="#" style={{}}>Privacy</a></li>
<li><a className="hover:text-[#007BFF]" href="#" style={{}}>Service Status</a></li>
</ul>
</div>
</div>
<div className="mt-8 text-xs text-slate-500 dark:text-slate-400" style={{}}>© <span id="year" style={{}}>2025</span> Fleetlytics. Proudly built in the Philippines.</div>
</footer>
</div>
</section>

<div className="fixed inset-x-0 bottom-0 z-50">
<div className="max-w-7xl mx-auto px-6 pb-4">
<div className="rounded-xl border border-slate-200/70 dark:border-white/10 bg-white/95 dark:bg-neutral-900/80 backdrop-blur-xl shadow-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-[#007BFF]/10 text-[#007BFF] flex items-center justify-center">
<i className="w-4.5 h-4.5" data-lucide="steering-wheel"></i>
</div>
<p className="text-sm font-medium" style={{}}>Ready to simplify your fleet operations?</p>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-slate-500 dark:text-slate-400" style={{}}>No credit card required • VAT included</span>
<a className="inline-flex items-center gap-2 rounded-md bg-[#007BFF] hover:bg-[#0067d6] text-white px-4 py-2 text-sm shadow-md shadow-[#007BFF]/25 transition-colors" href="#signup" style={{}}>
<svg className="lucide lucide-arrow-right w-4.5 h-4.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              Start Free Trial
            </a>
</div>
</div>
</div>
</div>



    </>
  );
}
