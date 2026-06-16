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
      

<nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex-shrink-0 flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white">
<iconify-icon className="text-xl" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-semibold text-xl tracking-tighter text-white">VibesMeet</span>
</div>
<div className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Platform</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Events</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Sponsors</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center space-x-4">
<a className="text-sm font-medium text-slate-300 hover:text-white hidden sm:block" href="#">Log in</a>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-slate-900 bg-white border border-transparent rounded-full shadow-sm hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all" href="#">
                        Start building
                    </a>
</div>
</div>
</div>
</nav>
<main className="pt-16">

<section className="relative overflow-hidden pt-24 pb-32 sm:pt-32 sm:pb-40">
<div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
<div className="absolute top-0 right-0 -mr-48 -mt-48 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -ml-48 -mb-48 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300 mb-8">
<iconify-icon icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
<span>VibesMeet 2.0 is now live</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white max-w-4xl mx-auto leading-tight">
                    Turn Content Into <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Real Revenue</span>
</h1>
<p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal">
                    The all-in-one platform for creators to monetize audiences through premium content, hybrid events, and automated brand sponsorships.
                </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-900 bg-white border border-transparent rounded-full shadow-sm hover:bg-slate-200 transition-all w-full sm:w-auto gap-2" href="#">
                        Start for free
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-white/5 border border-white/10 rounded-full shadow-sm hover:bg-white/10 transition-all w-full sm:w-auto gap-2" href="#">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Watch demo
                    </a>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 border-y border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
<iconify-icon className="text-2xl" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
                            Dual revenue streams,<br/>one unified platform.
                        </h2>
<p className="text-base text-slate-400 mb-8 leading-relaxed">
                            Stop juggling Patreons, Eventbrites, and messy spreadsheets. VibesMeet seamlessly integrates your digital content monetization with physical and virtual event ticketing.
                        </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
<iconify-icon className="text-xs" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-white">Content Subscriptions</h3>
<p className="text-sm text-slate-400">Gated articles, videos, and community access.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 flex-shrink-0">
<iconify-icon className="text-xs" icon="solar:ticket-sale-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-white">Seamless Ticketing</h3>
<p className="text-sm text-slate-400">Sell tickets to meetups, workshops, or large conferences.</p>
</div>
</li>
</ul>
</div>

<div className="relative rounded-2xl bg-white/5 border border-white/10 p-6 shadow-none">
<div className="absolute top-4 left-4 right-4 flex justify-between items-center mb-6">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
</div>
<span className="text-xs font-medium text-slate-500">Creator Dashboard</span>
</div>
<div className="mt-8 space-y-4">
<div className="flex items-center justify-between p-4 bg-slate-900 rounded-xl border border-white/5 shadow-none">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:play-stream-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Premium Video Series</div>
<div className="text-xs text-slate-400">Content Subscriptions</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold text-white">$4,250</div>
<div className="text-xs text-emerald-400 flex items-center justify-end gap-1">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
                                        12%
                                    </div>
</div>
</div>
<div className="flex items-center justify-between p-4 bg-slate-900 rounded-xl border border-white/5 shadow-none">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-400">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">NYC Creator Meetup</div>
<div className="text-xs text-slate-400">Event Tickets</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold text-white">$8,900</div>
<div className="text-xs text-emerald-400 flex items-center justify-end gap-1">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
                                        24%
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-16">The Creator Economy Flywheel</h2>
<div className="relative max-w-2xl mx-auto h-[400px] flex items-center justify-center">

<svg className="absolute inset-0 w-full h-full pointer-events-none" viewbox="0 0 400 400">
<circle cx="200" cy="200" fill="none" r="140" stroke="rgba(255,255,255,0.1)" stroke-dasharray="8 8" strokeWidth="2"></circle>
<circle className="flow-line" cx="200" cy="200" fill="none" r="140" stroke="#818cf8" strokeWidth="2"></circle>
</svg>

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 border border-white/10 rounded-2xl p-4 shadow-none w-48 text-center z-10 hover:-translate-y-1 transition-transform">
<div className="w-10 h-10 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 mb-2">
<iconify-icon icon="solar:pen-new-round-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-white">1. Create Content</h4>
<p className="text-xs text-slate-400 mt-1">Build audience &amp; trust</p>
</div>

<div className="absolute bottom-[15%] right-0 translate-x-[20%] bg-slate-900 border border-white/10 rounded-2xl p-4 shadow-none w-48 text-center z-10 hover:-translate-y-1 transition-transform">
<div className="w-10 h-10 mx-auto rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-2">
<iconify-icon icon="solar:calendar-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-white">2. Host Events</h4>
<p className="text-xs text-slate-400 mt-1">Deepen connections</p>
</div>

<div className="absolute bottom-[15%] left-0 -translate-x-[20%] bg-slate-900 border border-white/10 rounded-2xl p-4 shadow-none w-48 text-center z-10 hover:-translate-y-1 transition-transform">
<div className="w-10 h-10 mx-auto rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-2">
<iconify-icon icon="solar:hand-shake-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-white">3. Attract Sponsors</h4>
<p className="text-xs text-slate-400 mt-1">Monetize the engagement</p>
</div>

<div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 shadow-none flex items-center justify-center text-white z-10 border border-white/10">
<iconify-icon className="text-3xl" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-4">Everything you need to monetize fans</h2>
<p className="text-base text-slate-400">Powerful tools designed to maximize your earning potential without the technical headache.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 mb-4 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon icon="solar:crown-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-white mb-2">Tiered Subscriptions</h3>
<p className="text-sm text-slate-400">Create multiple membership tiers with custom perks and exclusive content access.</p>
</div>

<div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 mb-4 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon icon="solar:cup-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-white mb-2">Tipping &amp; Donations</h3>
<p className="text-sm text-slate-400">Let fans support you directly with one-off tips during streams or on your profile.</p>
</div>

<div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 mb-4 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon icon="solar:shop-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-white mb-2">Digital Products</h3>
<p className="text-sm text-slate-400">Sell courses, ebooks, presets, or any digital file directly to your audience.</p>
</div>

<div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 mb-4 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon icon="solar:ticket-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-white mb-2">Advanced Ticketing</h3>
<p className="text-sm text-slate-400">QR codes, seat maps, early bird pricing, and discount codes for your events.</p>
</div>

<div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 mb-4 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon icon="solar:play-stream-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-white mb-2">Pay-Per-View Streams</h3>
<p className="text-sm text-slate-400">Host exclusive live streams that require a ticket or active subscription to view.</p>
</div>

<div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 mb-4 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-white mb-2">Audience CRM</h3>
<p className="text-sm text-slate-400">Own your data. Track who attends, who buys, and who tips the most.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 border-y border-white/10 text-white overflow-hidden relative">
<div className="absolute inset-0 opacity-10 pointer-events-none">
<svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="grid-pattern-dark" patternunits="userSpaceOnUse" width="40">
<path d="M0 40V0H40" fill="none" stroke="currentColor" strokeWidth="1"></path>
</pattern>
</defs>
<rect fill="url(#grid-pattern-dark)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">

<div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 shadow-none relative">
<div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
<div className="text-sm font-medium">Event Engine</div>
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs text-slate-400">Live Sales</span>
</div>
</div>
<div className="space-y-4">
<div className="bg-slate-900 rounded-xl p-4 flex justify-between items-center border border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center border border-white/5">
<iconify-icon className="text-slate-300" icon="solar:ticket-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium">General Admission</div>
<div className="text-xs text-slate-400">145/200 sold</div>
</div>
</div>
<div className="text-sm font-medium">$2,900</div>
</div>
<div className="bg-slate-900 rounded-xl p-4 flex justify-between items-center border border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
<iconify-icon className="text-indigo-400" icon="solar:star-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-indigo-100">VIP + Meet &amp; Greet</div>
<div className="text-xs text-indigo-300/70">50/50 sold out</div>
</div>
</div>
<div className="text-sm font-medium text-indigo-100">$5,000</div>
</div>
<div className="bg-slate-900 rounded-xl p-4 flex justify-between items-center border border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-violet-500/10 border border-violet-500/30 flex items-center justify-center">
<iconify-icon className="text-violet-400" icon="solar:monitor-camera-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-violet-100">Virtual Stream Pass</div>
<div className="text-xs text-violet-300/70">892 sold</div>
</div>
</div>
<div className="text-sm font-medium text-violet-100">$8,920</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
                            The ultimate event revenue engine.
                        </h2>
<p className="text-base text-slate-400 mb-8 leading-relaxed">
                            Maximize earnings with hybrid setups. Sell physical tickets to local superfans while broadcasting live to your global audience. Offer tiered VIP experiences seamlessly.
                        </p>
<div className="grid grid-cols-2 gap-6">
<div>
<div className="text-2xl font-semibold text-white mb-1">Hybrid Ready</div>
<p className="text-sm text-slate-400">Merge IRL and online audiences into one revenue stream.</p>
</div>
<div>
<div className="text-2xl font-semibold text-white mb-1">Instant Payouts</div>
<p className="text-sm text-slate-400">Funds hit your account within 48 hours of sale.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400 mb-4">
<iconify-icon icon="solar:hand-stars-linear" strokeWidth="1.5"></iconify-icon>
<span>Sponsorships</span>
</div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">Let brands come to you.</h2>
<p className="text-base text-slate-400">
                        Turn your aggregated audience data into a powerful media kit. VibesMeet matches you with sponsors looking for your exact demographic and handles the analytics automatically.
                    </p>
</div>

<div className="max-w-4xl mx-auto bg-slate-900 rounded-2xl shadow-none border border-white/10 overflow-hidden">

<div className="bg-slate-900/80 border-b border-white/10 px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-white flex items-center justify-center text-slate-900 font-semibold text-xs tracking-tighter">VM</div>
<span className="text-sm font-medium text-white">Brand Partner Portal</span>
</div>
<div className="flex items-center gap-4 text-sm">
<span className="text-slate-400">Campaign:</span>
<span className="font-medium text-white flex items-center gap-1">
                                Q3 Creator Summit <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</div>
</div>
<div className="p-6">

<div className="grid grid-cols-3 gap-4 mb-8">
<div className="p-4 rounded-xl border border-white/5 bg-slate-950/50">
<div className="text-xs text-slate-400 mb-1 flex items-center gap-1">
<iconify-icon icon="solar:eye-linear"></iconify-icon> Total Reach
                                </div>
<div className="text-xl font-semibold text-white">2.4M</div>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-slate-950/50">
<div className="text-xs text-slate-400 mb-1 flex items-center gap-1">
<iconify-icon icon="solar:cursor-square-linear"></iconify-icon> Engagement Rate
                                </div>
<div className="text-xl font-semibold text-white">8.2%</div>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-slate-950/50">
<div className="text-xs text-slate-400 mb-1 flex items-center gap-1">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon> Est. ROI
                                </div>
<div className="text-xl font-semibold text-emerald-400">3.4x</div>
</div>
</div>

<div className="mb-4 text-sm font-medium text-white">Audience Growth &amp; Engagement</div>
<div className="h-48 w-full flex items-end gap-2 sm:gap-4 pt-4 border-b border-white/10 relative">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="border-b border-white/5 w-full h-px"></div>
<div className="border-b border-white/5 w-full h-px"></div>
<div className="border-b border-white/5 w-full h-px"></div>
<div className="border-b border-white/5 w-full h-px"></div>
</div>

<div className="w-full bg-indigo-500/20 rounded-t-sm h-[30%] relative group hover:bg-indigo-500/40 transition-colors cursor-pointer">
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-xs font-medium py-1 px-2 rounded transition-opacity">12k</div>
</div>
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[45%] relative group hover:bg-indigo-500/40 transition-colors cursor-pointer"></div>
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[40%] relative group hover:bg-indigo-500/40 transition-colors cursor-pointer"></div>
<div className="w-full bg-indigo-500 rounded-t-sm h-[65%] relative group shadow-[0_0_15px_rgba(99,102,241,0.5)] cursor-pointer">

<div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center">
<iconify-icon className="text-indigo-400 text-sm" icon="solar:star-fall-linear"></iconify-icon>
</div>
</div>
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[85%] relative group hover:bg-indigo-500/40 transition-colors cursor-pointer"></div>
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[70%] relative group hover:bg-indigo-500/40 transition-colors cursor-pointer"></div>
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[90%] relative group hover:bg-indigo-500/40 transition-colors cursor-pointer"></div>
</div>
<div className="flex justify-between mt-2 text-xs text-slate-500 px-1">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 border-y border-white/10">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">The VibesMeet Stack</h2>
</div>
<div className="space-y-4">

<div className="p-6 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-6 relative overflow-hidden group">
<div className="absolute inset-y-0 left-0 w-1 bg-violet-400"></div>
<div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 shrink-0 border border-violet-500/20">
<iconify-icon className="text-xl" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-grow">
<h3 className="text-lg font-semibold text-white">Brand Layer</h3>
<p className="text-sm text-slate-400">Automated media kits, sponsorship matching, and campaign analytics.</p>
</div>
<div className="shrink-0">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 text-slate-200 border border-white/10">
                                High Margin
                            </span>
</div>
</div>

<div className="p-6 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-6 relative overflow-hidden">
<div className="absolute inset-y-0 left-0 w-1 bg-indigo-400"></div>
<div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 border border-indigo-500/20">
<iconify-icon className="text-xl" icon="solar:ticket-sale-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-grow">
<h3 className="text-lg font-semibold text-white">Experience Layer</h3>
<p className="text-sm text-slate-400">IRL ticketing, hybrid streaming, meet &amp; greets, and exclusive access passes.</p>
</div>
<div className="shrink-0">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 text-slate-200 border border-white/10">
                                Spike Revenue
                            </span>
</div>
</div>

<div className="p-6 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-6 relative overflow-hidden">
<div className="absolute inset-y-0 left-0 w-1 bg-slate-400"></div>
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-slate-300 shrink-0 border border-white/10">
<iconify-icon className="text-xl" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-grow">
<h3 className="text-lg font-semibold text-white">Foundation Layer</h3>
<p className="text-sm text-slate-400">Gated content, memberships, digital downloads, and community forums.</p>
</div>
<div className="shrink-0">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 text-slate-200 border border-white/10">
                                Recurring MRR
                            </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Join top creators worldwide</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
<div className="bg-slate-900 p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-slate-800 mb-4 border-2 border-slate-900 flex items-center justify-center text-slate-500 overflow-hidden">

<svg className="w-10 h-10" fill="currentColor" viewbox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
</div>
<h4 className="text-base font-semibold text-white">Alex Rivera</h4>
<p className="text-xs text-slate-400 mb-4">Tech Educator</p>
<div className="w-full border-t border-white/5 pt-4 flex justify-between items-center text-sm">
<span className="text-slate-400">Monthly</span>
<span className="font-medium text-white">$12.4k</span>
</div>
</div>
<div className="bg-slate-900 p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center relative -translate-y-4">
<div className="absolute -top-3 bg-indigo-500 text-white text-[10px] font-semibold px-2 py-1 rounded-full tracking-wider uppercase">Top Earner</div>
<div className="w-16 h-16 rounded-full bg-slate-800 mb-4 border-2 border-slate-900 flex items-center justify-center text-slate-500 overflow-hidden">
<svg className="w-10 h-10" fill="currentColor" viewbox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
</div>
<h4 className="text-base font-semibold text-white">Sarah Chen</h4>
<p className="text-xs text-slate-400 mb-4">Indie Musician</p>
<div className="w-full border-t border-white/5 pt-4 flex justify-between items-center text-sm">
<span className="text-slate-400">Event Sales</span>
<span className="font-medium text-white">$45.0k</span>
</div>
</div>
<div className="bg-slate-900 p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-slate-800 mb-4 border-2 border-slate-900 flex items-center justify-center text-slate-500 overflow-hidden">
<svg className="w-10 h-10" fill="currentColor" viewbox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
</div>
<h4 className="text-base font-semibold text-white">Marcus Johnson</h4>
<p className="text-xs text-slate-400 mb-4">Fitness Coach</p>
<div className="w-full border-t border-white/5 pt-4 flex justify-between items-center text-sm">
<span className="text-slate-400">Sponsorships</span>
<span className="font-medium text-white">$8.5k/mo</span>
</div>
</div>
</div>

<div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl mx-auto">
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent text-sm text-slate-400 hover:border-white/20 hover:text-white transition-all cursor-pointer">Podcasters</span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent text-sm text-slate-400 hover:border-white/20 hover:text-white transition-all cursor-pointer">Educators</span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent text-sm text-slate-400 hover:border-white/20 hover:text-white transition-all cursor-pointer">Musicians</span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent text-sm text-slate-400 hover:border-white/20 hover:text-white transition-all cursor-pointer">Writers</span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent text-sm text-slate-400 hover:border-white/20 hover:text-white transition-all cursor-pointer">Filmmakers</span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent text-sm text-slate-400 hover:border-white/20 hover:text-white transition-all cursor-pointer">Gamers</span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-transparent text-sm text-slate-400 hover:border-white/20 hover:text-white transition-all cursor-pointer">Community Leaders</span>
</div>
</div>
</section>

<section className="py-24 sm:py-32 relative overflow-hidden bg-slate-950 border-t border-white/10">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-indigo-500/20 to-violet-500/20 rounded-[100%] blur-3xl opacity-50 pointer-events-none"></div>
<div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
                    Ready to build your empire?
                </h2>
<p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
                    Join thousands of creators who are turning their passion into a scalable, sustainable business with VibesMeet.
                </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-grow px-4 py-3 rounded-full border border-white/10 bg-slate-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent placeholder:text-slate-500" placeholder="Enter your email" required="" type="email"/>
<button className="px-6 py-3 rounded-full bg-white text-slate-900 text-sm font-medium hover:bg-slate-200 transition-colors whitespace-nowrap" type="submit">
                        Get Started
                    </button>
</form>
<p className="text-xs text-slate-500 mt-4">Free 14-day trial. No credit card required.</p>
</div>
</section>
</main>

<footer className="bg-slate-950 border-t border-white/10 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-white flex items-center justify-center text-slate-900">
<iconify-icon className="text-sm" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tighter text-white">VibesMeet</span>
</div>
<div className="flex gap-6 text-sm text-slate-400">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
</div>
<div className="text-sm text-slate-500">
                © 2024 VibesMeet Inc.
            </div>
</div>
</footer>

    </>
  );
}
