import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 z-50 w-full border-b border-stone-200 bg-stone-50/80 px-6 py-4 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
<iconify-icon icon="lucide:leaf" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-stone-900">EcoTrack</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
<a className="transition-colors hover:text-emerald-600" href="#dashboard">Dashboard</a>
<a className="transition-colors hover:text-emerald-600" href="#tips">Actions</a>
<a className="transition-colors hover:text-emerald-600" href="#leaderboard">Community</a>
<a className="transition-colors hover:text-emerald-600" href="#about">About</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900">
                    Sign In
                </button>
<button className="rounded-full bg-stone-900 px-4 py-2 text-xs font-medium text-white shadow-sm transition-transform hover:scale-105 active:scale-95">
                    Start Tracking
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">

<div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-emerald-100/50 blur-3xl"></div>
<div className="absolute top-40 -left-20 h-[300px] w-[300px] rounded-full bg-orange-50/50 blur-3xl"></div>
<div className="mx-auto max-w-7xl px-6 relative z-10 text-center">
<div className="fade-in-up inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/60 px-3 py-1 text-xs font-medium text-stone-600 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                v2.0 Now Available
            </div>
<h1 className="fade-in-up delay-100 mt-6 text-4xl font-semibold tracking-tight text-stone-900 md:text-6xl lg:text-7xl">
                See Your Impact, <br/>
<span className="text-emerald-600">Make It Matter.</span>
</h1>
<p className="fade-in-up delay-200 mx-auto mt-6 max-w-xl text-lg text-stone-500 leading-relaxed">
                Track your daily carbon footprint, build sustainable habits, and join a global community striving for a greener future.
            </p>
<div className="fade-in-up delay-300 mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
<button className="flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-600/20 transition-all hover:bg-emerald-700 hover:shadow-xl">
                    Start Tracking
                    <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="flex items-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-medium text-stone-600 transition-colors hover:border-stone-300 hover:bg-stone-50">
                    View Demo
                </button>
</div>
</div>
</section>

<section className="py-16 bg-white border-y border-stone-100" id="dashboard">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-10 flex items-end justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-stone-900">Your Dashboard</h2>
<p className="mt-1 text-stone-500">Overview of your environmental impact this week.</p>
</div>

<div className="hidden sm:flex rounded-lg bg-stone-100 p-1">
<button className="rounded-md bg-white px-3 py-1.5 text-xs font-medium text-stone-900 shadow-sm">Daily</button>
<button className="rounded-md px-3 py-1.5 text-xs font-medium text-stone-500 hover:text-stone-900">Weekly</button>
<button className="rounded-md px-3 py-1.5 text-xs font-medium text-stone-500 hover:text-stone-900">Monthly</button>
</div>
</div>

<div className="grid grid-cols-1 gap-6 lg:grid-cols-12">

<div className="rounded-2xl border border-stone-200 bg-stone-50/50 p-6 lg:col-span-8">
<div className="flex items-center justify-between mb-6">
<div>
<p className="text-xs font-medium uppercase tracking-wider text-stone-500">Carbon Footprint</p>
<div className="flex items-baseline gap-2 mt-1">
<h3 className="text-3xl font-semibold text-stone-900">12.4 kg</h3>
<span className="text-xs font-medium text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded flex items-center gap-1">
<iconify-icon icon="lucide:trending-down" width="12"></iconify-icon> 8%
                                </span>
</div>
</div>
<div className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-stone-200 shadow-sm text-stone-400">
<iconify-icon icon="lucide:bar-chart-2" width="20"></iconify-icon>
</div>
</div>

<div className="flex h-48 items-end gap-3 sm:gap-6">

<div className="group relative flex w-full flex-col justify-end gap-2">
<div className="w-full rounded-t-lg bg-stone-200 transition-all hover:bg-emerald-400/50" style={{height: '45%'}}></div>
<span className="text-center text-[10px] text-stone-400">M</span>
</div>

<div className="group relative flex w-full flex-col justify-end gap-2">
<div className="w-full rounded-t-lg bg-stone-200 transition-all hover:bg-emerald-400/50" style={{height: '60%'}}></div>
<span className="text-center text-[10px] text-stone-400">T</span>
</div>

<div className="group relative flex w-full flex-col justify-end gap-2">
<div className="w-full rounded-t-lg bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all" style={{height: '35%'}}></div>
<span className="text-center text-[10px] font-medium text-stone-900">W</span>
</div>

<div className="group relative flex w-full flex-col justify-end gap-2">
<div className="w-full rounded-t-lg bg-stone-200 transition-all hover:bg-emerald-400/50" style={{height: '70%'}}></div>
<span className="text-center text-[10px] text-stone-400">T</span>
</div>

<div className="group relative flex w-full flex-col justify-end gap-2">
<div className="w-full rounded-t-lg bg-stone-200 transition-all hover:bg-emerald-400/50" style={{height: '55%'}}></div>
<span className="text-center text-[10px] text-stone-400">F</span>
</div>

<div className="group relative flex w-full flex-col justify-end gap-2">
<div className="w-full rounded-t-lg bg-stone-200 transition-all hover:bg-emerald-400/50" style={{height: '40%'}}></div>
<span className="text-center text-[10px] text-stone-400">S</span>
</div>

<div className="group relative flex w-full flex-col justify-end gap-2">
<div className="w-full rounded-t-lg bg-stone-200 transition-all hover:bg-emerald-400/50" style={{height: '30%'}}></div>
<span className="text-center text-[10px] text-stone-400">S</span>
</div>
</div>
</div>

<div className="space-y-4 lg:col-span-4">

<div className="group relative overflow-hidden rounded-xl border border-stone-200 bg-white p-4 transition-all hover:border-emerald-500/50 hover:shadow-sm">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
<iconify-icon icon="lucide:zap" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between text-xs font-medium">
<span className="text-stone-700">Energy</span>
<span className="text-stone-500">4.2 kWh</span>
</div>
<div className="mt-2 h-1.5 w-full rounded-full bg-stone-100">
<div className="h-1.5 w-[45%] rounded-full bg-amber-400"></div>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-stone-200 bg-white p-4 transition-all hover:border-emerald-500/50 hover:shadow-sm">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
<iconify-icon icon="lucide:car" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between text-xs font-medium">
<span className="text-stone-700">Transport</span>
<span className="text-stone-500">12 km</span>
</div>
<div className="mt-2 h-1.5 w-full rounded-full bg-stone-100">
<div className="h-1.5 w-[75%] rounded-full bg-blue-400"></div>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-stone-200 bg-white p-4 transition-all hover:border-emerald-500/50 hover:shadow-sm">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-50 text-rose-600">
<iconify-icon icon="lucide:trash-2" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between text-xs font-medium">
<span className="text-stone-700">Waste</span>
<span className="text-stone-500">0.8 kg</span>
</div>
<div className="mt-2 h-1.5 w-full rounded-full bg-stone-100">
<div className="h-1.5 w-[20%] rounded-full bg-rose-400"></div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-xl border border-stone-200 bg-emerald-900 p-6 text-white md:col-span-2 relative overflow-hidden">

<div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-800 opacity-50 blur-2xl"></div>
<div className="relative z-10 flex items-center justify-between">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center rounded-full bg-emerald-800/80 border border-emerald-700 px-2 py-0.5 text-[10px] font-medium text-emerald-100">
                                            Level 5
                                        </span>
<span className="text-xs text-emerald-200">Eco Warrior</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight">Keep it up, Alex!</h3>
<p className="text-sm text-emerald-200/80 mt-1">You've saved 24 trees this month.</p>
</div>
<div className="text-right">
<span className="block text-4xl font-bold tracking-tight">842</span>
<span className="text-xs text-emerald-300">Eco Points</span>
</div>
</div>
<div className="relative z-10 mt-6">
<div className="flex justify-between text-[10px] font-medium text-emerald-200 mb-1.5">
<span>Next Reward</span>
<span>842 / 1000</span>
</div>
<div className="h-2 w-full rounded-full bg-emerald-950">
<div className="h-2 w-[84%] rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
</div>
</div>
</div>

<div className="flex flex-col justify-between rounded-xl border border-stone-200 bg-white p-6">
<div>
<div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
<iconify-icon icon="lucide:trophy" width="16"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-stone-900">Daily Challenge</h4>
<p className="mt-1 text-xs text-stone-500">Meat-free Lunch</p>
</div>
<button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-stone-200 bg-stone-50 py-2 text-xs font-medium text-stone-600 transition-colors hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
                                Mark Complete
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-stone-50" id="tips">
<div className="mx-auto max-w-7xl px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900">Reduce Your Impact</h2>
<p className="mt-4 text-stone-500">Small actions lead to big changes. Here are personalized suggestions based on your activity.</p>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

<div className="group cursor-pointer rounded-2xl bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-600 group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors">
<iconify-icon icon="lucide:plug" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-stone-900">Unplug Electronics</h3>
<p className="mt-2 text-xs text-stone-500 leading-relaxed">Devices consume energy even when off. Save up to 10% on your bill.</p>
</div>

<div className="group cursor-pointer rounded-2xl bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-600 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
<iconify-icon icon="lucide:droplets" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-stone-900">Fix Leaky Faucets</h3>
<p className="mt-2 text-xs text-stone-500 leading-relaxed">A single drip can waste 3,000 gallons a year. Check your pipes.</p>
</div>

<div className="group cursor-pointer rounded-2xl bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-600 group-hover:bg-amber-100 group-hover:text-amber-600 transition-colors">
<iconify-icon icon="lucide:sun" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-stone-900">Switch to LED</h3>
<p className="mt-2 text-xs text-stone-500 leading-relaxed">LED bulbs use 75% less energy and last 25 times longer.</p>
</div>

<div className="group cursor-pointer rounded-2xl bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-600 group-hover:bg-purple-100 group-hover:text-purple-600 transition-colors">
<iconify-icon icon="lucide:shopping-bag" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-stone-900">Bring Own Bags</h3>
<p className="mt-2 text-xs text-stone-500 leading-relaxed">Reduce plastic waste by keeping reusable bags in your car or backpack.</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-t border-stone-200" id="leaderboard">
<div className="mx-auto max-w-5xl px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-stone-900">Community Impact</h2>
<p className="mt-1 text-stone-500">Compare your progress with friends and the global community.</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 text-xs font-medium bg-emerald-50 text-emerald-700 rounded-full">Friends</button>
<button className="px-4 py-2 text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors">Global</button>
</div>
</div>
<div className="rounded-xl border border-stone-200 overflow-hidden">
<table className="w-full text-left">
<thead className="bg-stone-50 text-xs uppercase tracking-wider text-stone-500">
<tr>
<th className="px-6 py-4 font-medium w-16">Rank</th>
<th className="px-6 py-4 font-medium">User</th>
<th className="px-6 py-4 font-medium hidden sm:table-cell">Reduction</th>
<th className="px-6 py-4 font-medium text-right">Points</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-100 bg-white text-sm">

<tr className="hover:bg-stone-50/50 transition-colors">
<td className="px-6 py-4">
<span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-100 text-xs font-bold text-yellow-700">1</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full bg-stone-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/>
<span className="font-medium text-stone-900">Sarah Jenkins</span>
<iconify-icon className="text-emerald-500" icon="lucide:medal" width="14"></iconify-icon>
</div>
</td>
<td className="px-6 py-4 text-stone-500 hidden sm:table-cell">-15% CO2</td>
<td className="px-6 py-4 text-right font-semibold text-stone-900">1,240</td>
</tr>

<tr className="bg-emerald-50/30 hover:bg-emerald-50/50 transition-colors">
<td className="px-6 py-4">
<span className="flex h-6 w-6 items-center justify-center rounded-full bg-stone-200 text-xs font-bold text-stone-600">2</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full bg-stone-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<span className="font-medium text-stone-900">You</span>
</div>
</td>
<td className="px-6 py-4 text-stone-500 hidden sm:table-cell">-12% CO2</td>
<td className="px-6 py-4 text-right font-semibold text-emerald-600">842</td>
</tr>

<tr className="hover:bg-stone-50/50 transition-colors">
<td className="px-6 py-4">
<span className="flex h-6 w-6 items-center justify-center rounded-full bg-stone-200 text-xs font-bold text-stone-600">3</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full bg-stone-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mike"/>
<span className="font-medium text-stone-900">Mike Chen</span>
</div>
</td>
<td className="px-6 py-4 text-stone-500 hidden sm:table-cell">-8% CO2</td>
<td className="px-6 py-4 text-right font-semibold text-stone-900">720</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-20 bg-stone-900 text-stone-300" id="about">
<div className="mx-auto max-w-4xl px-6 text-center">
<iconify-icon className="text-emerald-500 mb-6" icon="lucide:leaf" width="32"></iconify-icon>
<h2 className="text-3xl font-medium tracking-tight text-white mb-6">About EcoTrack</h2>
<p className="text-lg leading-relaxed text-stone-400 mb-8">
                We believe that collective change starts with individual awareness. EcoTrack was built to bridge the gap between technology and sustainability, providing you with the data you need to make greener choices every single day.
            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-sm">
<div>
<h4 className="text-white font-medium mb-2">Data Driven</h4>
<p className="text-stone-500">Accurate calculations based on global standards.</p>
</div>
<div>
<h4 className="text-white font-medium mb-2">Privacy First</h4>
<p className="text-stone-500">Your data is yours. We never sell your habits.</p>
</div>
<div>
<h4 className="text-white font-medium mb-2">Open Source</h4>
<p className="text-stone-500">Join our developer community on GitHub.</p>
</div>
</div>
</div>
</section>

<footer className="bg-stone-50 border-t border-stone-200 py-12">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="h-6 w-6 rounded bg-emerald-600 text-white flex items-center justify-center">
<iconify-icon icon="lucide:leaf" width="14"></iconify-icon>
</div>
<span className="font-bold tracking-tight text-stone-900">EcoTrack</span>
</div>
<p className="text-xs text-stone-500">Making sustainability simple for everyone.</p>
</div>
<div>
<h4 className="font-semibold text-stone-900 text-sm mb-3">Product</h4>
<ul className="space-y-2 text-xs text-stone-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Mobile App</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-900 text-sm mb-3">Company</h4>
<ul className="space-y-2 text-xs text-stone-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-900 text-sm mb-3">Stay Updated</h4>
<div className="flex gap-2">
<input className="w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-xs placeholder-stone-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="Enter your email" type="email"/>
<button className="rounded-md bg-stone-900 px-3 py-2 text-white hover:bg-stone-800">
<iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-400">© 2024 EcoTrack Inc. All rights reserved.</p>
<div className="flex gap-4 text-stone-400">
<a className="hover:text-emerald-600 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="hover:text-emerald-600 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="16"></iconify-icon></a>
<a className="hover:text-emerald-600 transition-colors" href="#"><iconify-icon icon="lucide:github" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
