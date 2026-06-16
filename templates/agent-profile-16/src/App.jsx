import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="max-w-md mx-auto pt-8 px-4">

<header className="flex flex-col items-center text-center mb-8">
<div className="relative mb-5">
<div className="w-28 h-28 rounded-full p-[3px] bg-gradient-to-tr from-yellow-300 via-amber-400 to-yellow-500" style={{boxShadow: '0 0 30px -5px rgba(245, 158, 11, 0.4)'}}>
<div className="w-full h-full rounded-full border-[3px] border-white/60 overflow-hidden bg-slate-100/50">
<img alt="Marc-Antoine" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=marcantoine"/>
</div>
</div>
<div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-0.5 rounded-full border border-slate-700/50 shadow-sm whitespace-nowrap">
                    Lv. 4
                </div>
</div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Marc-Antoine</h1>
<div className="flex flex-col items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 text-xs font-medium border border-amber-500/20 shadow-sm backdrop-blur-sm">
<iconify-icon className="text-amber-500" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
                    Koli Gold Partner
                </span>
<span className="flex items-center gap-1 text-sm text-slate-600 font-medium mt-1">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
                    Akwa Central Hub
                </span>
</div>
</header>

<section className="bg-white/40 backdrop-blur-xl rounded-3xl p-6 shadow-sm border border-white/60 mb-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
<div className="relative z-10">
<div className="flex justify-between items-end mb-4">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-1">Current Tier</p>
<p className="text-lg font-semibold tracking-tight text-slate-900">Gold Partner</p>
</div>
<div className="text-right">
<p className="text-sm font-medium text-slate-900">88 <span className="text-slate-500">/ 100</span></p>
</div>
</div>
<div className="w-full bg-slate-300/40 rounded-full h-2.5 mb-4 shadow-inner overflow-hidden backdrop-blur-sm">
<div className="bg-gradient-to-r from-yellow-400 to-amber-500 h-full rounded-full relative" style={{width: '88%'}}>
<div className="absolute top-0 left-0 right-0 bottom-0 bg-white/20 rounded-full"></div>
</div>
</div>
<p className="text-sm text-slate-700 mb-5">
<span className="font-semibold text-slate-900">12 more deliveries</span> to reach Platinum.
                </p>
<div className="bg-gradient-to-br from-amber-500/10 to-orange-500/5 rounded-2xl p-3.5 flex gap-3.5 items-start border border-amber-500/20">
<div className="bg-white/60 backdrop-blur-md text-amber-600 rounded-xl p-2 shrink-0 shadow-sm border border-amber-100/50">
<iconify-icon icon="solar:gift-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Next Level Perk</p>
<p className="text-xs text-slate-700 mt-1 leading-relaxed">+2% Bonus Commission on all express and priority deliveries.</p>
</div>
</div>
</div>
</section>

<section className="mb-8">
<div className="flex items-center justify-between mb-4 px-1">
<h2 className="text-lg font-semibold tracking-tight text-slate-900">Achievements</h2>
<a className="text-xs font-medium text-slate-500" href="#">View All</a>
</div>
<div className="grid grid-cols-2 gap-3">

<div className="bg-white/40 backdrop-blur-xl rounded-[20px] p-4 shadow-sm border border-white/60 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center mb-3 ring-4 ring-blue-500/5">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900">Speed King</h3>
<p className="text-xs text-slate-600 mt-1.5 leading-snug">Avg. handover<br/>&lt; 2 mins</p>
</div>

<div className="bg-white/40 backdrop-blur-xl rounded-[20px] p-4 shadow-sm border border-white/60 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-3 ring-4 ring-emerald-500/5">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900">Trusted</h3>
<p className="text-xs text-slate-600 mt-1.5 leading-snug">500+ deliveries<br/>zero damage</p>
</div>

<div className="bg-white/40 backdrop-blur-xl rounded-[20px] p-4 shadow-sm border border-white/60 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-yellow-500/10 text-yellow-600 flex items-center justify-center mb-3 ring-4 ring-yellow-500/5">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900">5-Star</h3>
<p className="text-xs text-slate-600 mt-1.5 leading-snug">Consistent high<br/>ratings</p>
</div>

<div className="bg-white/40 backdrop-blur-xl rounded-[20px] p-4 shadow-sm border border-white/60 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-purple-500/10 text-purple-600 flex items-center justify-center mb-3 ring-4 ring-purple-500/5">
<iconify-icon icon="solar:calendar-date-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900">Veteran</h3>
<p className="text-xs text-slate-600 mt-1.5 leading-snug">Partner for<br/>&gt; 1 year</p>
</div>

<div className="bg-slate-300/20 backdrop-blur-xl rounded-[20px] p-4 border border-white/30 flex flex-col items-center text-center opacity-70 grayscale">
<div className="w-12 h-12 rounded-full bg-slate-300/50 text-slate-600 flex items-center justify-center mb-3">
<iconify-icon icon="solar:routing-2-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-800">Navigator</h3>
<p className="text-xs text-slate-600 mt-1.5 leading-snug">10k km<br/>driven</p>
</div>

<div className="bg-slate-300/20 backdrop-blur-xl rounded-[20px] p-4 border border-white/30 flex flex-col items-center text-center opacity-70 grayscale">
<div className="w-12 h-12 rounded-full bg-slate-300/50 text-slate-600 flex items-center justify-center mb-3">
<iconify-icon icon="solar:cup-star-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-800">Legend</h3>
<p className="text-xs text-slate-600 mt-1.5 leading-snug">Top 1%<br/>in city</p>
</div>
</div>
</section>

<section className="mb-8">
<h2 className="text-lg font-semibold tracking-tight text-slate-900 mb-4 px-1">Performance Overview</h2>
<div className="grid grid-cols-1 gap-4">

<div className="bg-white/40 backdrop-blur-xl rounded-[24px] p-5 shadow-sm border border-white/60 flex flex-col h-56 relative">
<div className="flex justify-between items-start mb-8 z-10">
<div>
<p className="text-sm font-medium text-slate-900">Monthly Deliveries</p>
<p className="text-xs text-emerald-600 font-medium mt-0.5 flex items-center gap-1">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
                                +14% growth
                            </p>
</div>
<span className="text-xs text-slate-600 font-medium bg-white/50 border border-white/60 px-2 py-1 rounded-md backdrop-blur-sm">YTD</span>
</div>
<div className="flex-1 flex items-end gap-3 justify-between mt-auto z-10 px-1 pb-1">
<div className="w-full bg-slate-300/50 rounded-t-md h-[30%] relative"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-600">Jan</span></div>
<div className="w-full bg-slate-300/50 rounded-t-md h-[45%] relative"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-600">Feb</span></div>
<div className="w-full bg-slate-300/50 rounded-t-md h-[35%] relative"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-600">Mar</span></div>
<div className="w-full bg-slate-300/50 rounded-t-md h-[65%] relative"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-600">Apr</span></div>
<div className="w-full bg-slate-800 rounded-t-md h-[85%] relative shadow-[0_0_15px_rgba(30,41,59,0.2)]"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-slate-900">May</span></div>
</div>
</div>

<div className="bg-white/40 backdrop-blur-xl rounded-[24px] p-5 shadow-sm border border-white/60 flex flex-col h-56 relative overflow-hidden">
<div className="z-10">
<p className="text-sm font-medium text-slate-900">Success Rate</p>
</div>
<div className="flex-1 flex flex-col items-center justify-center z-10 mt-2">
<div className="relative w-28 h-28">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 100 100">
<circle className="text-slate-300/50" cx="50" cy="50" fill="transparent" r="42" stroke="currentColor" strokeWidth="8"></circle>
<circle cx="50" cy="50" fill="transparent" r="42" stroke="url(#gradient)" stroke-dasharray="263.89" stroke-dashoffset="0.5" strokeLinecap="round" strokeWidth="8"></circle>
<defs>
<lineargradient id="gradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#10b981"></stop>
<stop offset="100%" stop-color="#34d399"></stop>
</lineargradient>
</defs>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center mt-0.5">
<span className="text-xl font-semibold tracking-tight text-slate-900">99.8%</span>
</div>
</div>
<p className="text-xs text-slate-600 mt-4 text-center font-medium">Out of 1,204 total deliveries</p>
</div>
</div>
</div>
</section>

<section>
<h2 className="sr-only">Account Settings</h2>
<div className="bg-white/40 backdrop-blur-xl rounded-[24px] shadow-sm border border-white/60 overflow-hidden">
<ul className="divide-y divide-slate-300/30">

<li>
<a className="flex items-center justify-between p-4 px-5" href="#">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-orange-500/10 text-orange-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Payout Methods</p>
<p className="text-xs text-slate-600 mt-0.5">Orange Money / MoMo</p>
</div>
</div>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</a>
</li>

<li>
<a className="flex items-center justify-between p-4 px-5" href="#">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:headphones-round-sound-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Support &amp; Help</p>
<p className="text-xs text-slate-600 mt-0.5">Direct chat with Admin</p>
</div>
</div>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</a>
</li>

<li>
<a className="flex items-center justify-between p-4 px-5" href="#">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-400/20 text-slate-700 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:global-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Language</p>
<p className="text-xs text-slate-600 mt-0.5">English (UK)</p>
</div>
</div>
<div className="flex items-center gap-2 text-slate-400">
<iconify-icon icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</div>
</a>
</li>

<li>
<button className="w-full flex items-center gap-4 p-4 px-5 text-left">
<div className="w-10 h-10 rounded-full bg-red-500/10 text-red-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:logout-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-red-600">Log out</span>
</button>
</li>
</ul>
</div>
</section>
</div>

    </>
  );
}
