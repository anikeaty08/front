import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
850: '#1f1f22',
925: '#101012',
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex min-h-screen">

<aside className="hidden md:flex w-64 flex-col border-r border-zinc-900 bg-zinc-950 fixed h-full z-20">
<div className="p-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-medium shadow-[0_0_15px_rgba(99,102,241,0.5)]">
<span className="iconify" data-icon="lucide:zap" data-width="18" strokeWidth="1.5"></span>
</div>
<span className="text-lg font-medium tracking-tight">VORTEX</span>
</div>
</div>
<nav className="flex-1 px-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-zinc-900/50 rounded-lg border border-zinc-800 shadow-sm" href="#">
<span className="iconify text-zinc-100" data-icon="lucide:layout-dashboard" data-width="18" strokeWidth="1.5"></span>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 rounded-lg transition-colors" href="#">
<span className="iconify" data-icon="lucide:wallet" data-width="18" strokeWidth="1.5"></span>
                    Wallet
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 rounded-lg transition-colors" href="#">
<span className="iconify" data-icon="lucide:bar-chart-3" data-width="18" strokeWidth="1.5"></span>
                    Analytics
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 rounded-lg transition-colors" href="#">
<span className="iconify" data-icon="lucide:users" data-width="18" strokeWidth="1.5"></span>
                    Referrals
                </a>
</nav>
<div className="p-4 border-t border-zinc-900">
<div className="bg-zinc-900/40 rounded-xl p-4 border border-zinc-800/50">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-400">Daily Goal</span>
<span className="text-xs font-medium text-white">85%</span>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[85%] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.3)]"></div>
</div>
</div>
</div>
</aside>

<main className="flex-1 md:pl-64">

<header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-zinc-900 bg-zinc-950/80 px-6 backdrop-blur-xl">
<div className="flex items-center gap-4">
<h1 className="text-sm font-medium text-zinc-400">Overview</h1>
</div>
<div className="flex items-center gap-4">
<button className="relative rounded-full p-1.5 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100 transition-colors">
<span className="iconify" data-icon="lucide:bell" data-width="18" strokeWidth="1.5"></span>
<span className="absolute top-1 right-1.5 h-1.5 w-1.5 rounded-full bg-red-500 border border-zinc-950"></span>
</button>
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 border border-zinc-600/50 overflow-hidden">
<img alt="User" className="h-full w-full object-cover opacity-90 hover:opacity-100 transition-opacity" src="https://i.pravatar.cc/150?img=11"/>
</div>
</div>
</header>
<div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">

<section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-925 p-6 sm:p-8">
<div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl"></div>
<div className="relative z-10 flex flex-col justify-between h-full">
<div>
<p className="text-xs font-medium uppercase tracking-wider text-zinc-500">Total Earnings</p>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-4xl sm:text-5xl font-medium tracking-tight text-white">$12,450.90</span>
<span className="flex items-center text-sm font-medium text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded ml-2">
<span className="iconify mr-0.5" data-icon="lucide:arrow-up-right" data-width="14" strokeWidth="1.5"></span>
                                        12.5%
                                    </span>
</div>
<p className="mt-1 text-sm text-zinc-500">Available for withdrawal</p>
</div>
<div className="mt-8 flex gap-3">
<button className="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 transition-all shadow-[0_0_20px_rgba(79,70,229,0.2)] border border-indigo-500/20 active:scale-95">
<span className="iconify" data-icon="lucide:arrow-down-to-line" data-width="18" strokeWidth="1.5"></span>
                                    Withdraw
                                </button>
<button className="flex items-center justify-center gap-2 rounded-lg bg-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-100 hover:bg-zinc-700 transition-all border border-zinc-700 active:scale-95">
<span className="iconify" data-icon="lucide:history" data-width="18" strokeWidth="1.5"></span>
                                    History
                                </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 gap-4">
<div className="rounded-2xl border border-zinc-800 bg-zinc-925 p-5 flex items-center justify-between">
<div>
<p className="text-xs text-zinc-500 font-medium">Pending Tasks</p>
<p className="text-xl font-medium text-white mt-1">14</p>
</div>
<div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
<span className="iconify" data-icon="lucide:list-todo" data-width="20" strokeWidth="1.5"></span>
</div>
</div>
<div className="rounded-2xl border border-zinc-800 bg-zinc-925 p-5 flex items-center justify-between">
<div>
<p className="text-xs text-zinc-500 font-medium">Referral Bonus</p>
<p className="text-xl font-medium text-white mt-1">$340.00</p>
</div>
<div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
<span className="iconify" data-icon="lucide:users-2" data-width="20" strokeWidth="1.5"></span>
</div>
</div>

<div className="rounded-2xl border border-zinc-800 bg-zinc-925 p-5 flex items-center justify-between">
<span className="text-sm font-medium text-zinc-400">Auto-Staking</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-zinc-400 after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-900 peer-checked:after:bg-indigo-400 peer-checked:after:border-indigo-300"></div>
</label>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-medium text-white tracking-tight">Available Tasks</h2>
<a className="text-xs font-medium text-indigo-400 hover:text-indigo-300" href="#">View All</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group relative rounded-xl border border-zinc-800 bg-zinc-925 p-5 hover:border-zinc-700 transition-all hover:bg-zinc-900 cursor-pointer">
<div className="flex items-start justify-between mb-4">
<div className="h-10 w-10 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white shadow-lg shadow-pink-900/20">
<span className="iconify" data-icon="lucide:gamepad-2" data-width="20" strokeWidth="1.5"></span>
</div>
<span className="px-2 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-xs font-medium text-zinc-300 group-hover:bg-zinc-800/80">+$12.00</span>
</div>
<h3 className="text-sm font-medium text-zinc-100">Play CyberDrift</h3>
<p className="text-xs text-zinc-500 mt-1 line-clamp-2">Reach level 10 to unlock the reward immediately.</p>
<div className="mt-4 pt-4 border-t border-zinc-800/50 flex items-center justify-between">
<span className="text-xs text-zinc-500">Gaming</span>
<span className="iconify text-zinc-600 group-hover:text-indigo-400 transition-colors" data-icon="lucide:arrow-right" data-width="16" strokeWidth="1.5"></span>
</div>
</div>

<div className="group relative rounded-xl border border-zinc-800 bg-zinc-925 p-5 hover:border-zinc-700 transition-all hover:bg-zinc-900 cursor-pointer">
<div className="flex items-start justify-between mb-4">
<div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
<span className="iconify" data-icon="lucide:clipboard-list" data-width="20" strokeWidth="1.5"></span>
</div>
<span className="px-2 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-xs font-medium text-zinc-300 group-hover:bg-zinc-800/80">+$2.50</span>
</div>
<h3 className="text-sm font-medium text-zinc-100">Tech Survey</h3>
<p className="text-xs text-zinc-500 mt-1 line-clamp-2">Answer 10 questions about your developer tools.</p>
<div className="mt-4 pt-4 border-t border-zinc-800/50 flex items-center justify-between">
<span className="text-xs text-zinc-500">Survey</span>
<span className="iconify text-zinc-600 group-hover:text-indigo-400 transition-colors" data-icon="lucide:arrow-right" data-width="16" strokeWidth="1.5"></span>
</div>
</div>

<div className="group relative rounded-xl border border-zinc-800 bg-zinc-925 p-5 hover:border-zinc-700 transition-all hover:bg-zinc-900 cursor-pointer">
<div className="flex items-start justify-between mb-4">
<div className="h-10 w-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-emerald-900/20">
<span className="iconify" data-icon="lucide:monitor-play" data-width="20" strokeWidth="1.5"></span>
</div>
<span className="px-2 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-xs font-medium text-zinc-300 group-hover:bg-zinc-800/80">+$0.50</span>
</div>
<h3 className="text-sm font-medium text-zinc-100">Watch Ad</h3>
<p className="text-xs text-zinc-500 mt-1 line-clamp-2">Watch a 30 second sponsored video.</p>
<div className="mt-4 pt-4 border-t border-zinc-800/50 flex items-center justify-between">
<span className="text-xs text-zinc-500">Video</span>
<span className="iconify text-zinc-600 group-hover:text-indigo-400 transition-colors" data-icon="lucide:arrow-right" data-width="16" strokeWidth="1.5"></span>
</div>
</div>

<div className="group relative rounded-xl border border-zinc-800 bg-zinc-925 p-5 hover:border-zinc-700 transition-all hover:bg-zinc-900 cursor-pointer">
<div className="flex items-start justify-between mb-4">
<div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-900/20">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="20" strokeWidth="1.5"></span>
</div>
<span className="px-2 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-xs font-medium text-zinc-300 group-hover:bg-zinc-800/80">5% Back</span>
</div>
<h3 className="text-sm font-medium text-zinc-100">Shop Online</h3>
<p className="text-xs text-zinc-500 mt-1 line-clamp-2">Purchase from partner stores to earn cashback.</p>
<div className="mt-4 pt-4 border-t border-zinc-800/50 flex items-center justify-between">
<span className="text-xs text-zinc-500">Cashback</span>
<span className="iconify text-zinc-600 group-hover:text-indigo-400 transition-colors" data-icon="lucide:arrow-right" data-width="16" strokeWidth="1.5"></span>
</div>
</div>
</div>
</section>

<section className="rounded-2xl border border-zinc-800 bg-zinc-925 overflow-hidden">
<div className="px-6 py-4 border-b border-zinc-800 flex items-center justify-between">
<h2 className="text-sm font-medium text-white">Recent Transactions</h2>
<button className="p-1 rounded hover:bg-zinc-800 text-zinc-400">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16" strokeWidth="1.5"></span>
</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="bg-zinc-900/50 text-xs uppercase text-zinc-500">
<tr>
<th className="px-6 py-3 font-medium" scope="col">Activity</th>
<th className="px-6 py-3 font-medium" scope="col">Status</th>
<th className="px-6 py-3 font-medium" scope="col">Date</th>
<th className="px-6 py-3 font-medium text-right" scope="col">Amount</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800">
<tr className="group hover:bg-zinc-900/50 transition-colors">
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 border border-zinc-700">
<span className="iconify" data-icon="lucide:download" data-width="14" strokeWidth="1.5"></span>
</div>
<div>
<p className="font-medium text-zinc-200">Withdrawal to PayPal</p>
<p className="text-xs text-zinc-500">ID: #99281</p>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center rounded-full bg-amber-500/10 px-2 py-1 text-xs font-medium text-amber-500 ring-1 ring-inset ring-amber-500/20">Pending</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-zinc-500 text-xs">Oct 24, 2023</td>
<td className="px-6 py-4 whitespace-nowrap text-right font-medium text-zinc-200">-$450.00</td>
</tr>
<tr className="group hover:bg-zinc-900/50 transition-colors">
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 border border-zinc-700">
<span className="iconify" data-icon="lucide:gamepad-2" data-width="14" strokeWidth="1.5"></span>
</div>
<div>
<p className="font-medium text-zinc-200">Game Reward</p>
<p className="text-xs text-zinc-500">CyberDrift Lvl 5</p>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-500 ring-1 ring-inset ring-emerald-500/20">Completed</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-zinc-500 text-xs">Oct 23, 2023</td>
<td className="px-6 py-4 whitespace-nowrap text-right font-medium text-emerald-400">+$15.50</td>
</tr>
<tr className="group hover:bg-zinc-900/50 transition-colors">
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 border border-zinc-700">
<span className="iconify" data-icon="lucide:user-plus" data-width="14" strokeWidth="1.5"></span>
</div>
<div>
<p className="font-medium text-zinc-200">Referral Bonus</p>
<p className="text-xs text-zinc-500">User: alex_d</p>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-500 ring-1 ring-inset ring-emerald-500/20">Completed</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-zinc-500 text-xs">Oct 22, 2023</td>
<td className="px-6 py-4 whitespace-nowrap text-right font-medium text-emerald-400">+$5.00</td>
</tr>
</tbody>
</table>
</div>
</section>

<div className="rounded-2xl border border-zinc-800 bg-zinc-925 p-6">
<div className="flex justify-between items-end mb-4">
<div>
<h3 className="text-sm font-medium text-white">Investment Calculator</h3>
<p className="text-xs text-zinc-500 mt-1">Estimate your returns based on task activity.</p>
</div>
<span className="text-xl font-medium text-indigo-400">24 hrs</span>
</div>
<input className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer" max="100" min="1" type="range" value="24"/>
<div className="flex justify-between mt-2 text-xs text-zinc-500 font-medium">
<span>1 hr</span>
<span>100 hrs</span>
</div>
</div>
</div>
</main>

<nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-800 bg-zinc-950/90 backdrop-blur-xl pb-safe">
<div className="flex justify-around items-center h-16 px-2">
<a className="flex flex-col items-center justify-center w-full h-full space-y-1 text-indigo-500" href="#">
<span className="iconify" data-icon="lucide:home" data-width="20" strokeWidth="1.5"></span>
<span className="text-[10px] font-medium">Home</span>
</a>
<a className="flex flex-col items-center justify-center w-full h-full space-y-1 text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
<span className="iconify" data-icon="lucide:search" data-width="20" strokeWidth="1.5"></span>
<span className="text-[10px] font-medium">Earn</span>
</a>
<div className="relative -top-5">
<a className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)] border border-indigo-500/50" href="#">
<span className="iconify" data-icon="lucide:scan-line" data-width="22" strokeWidth="1.5"></span>
</a>
</div>
<a className="flex flex-col items-center justify-center w-full h-full space-y-1 text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
<span className="iconify" data-icon="lucide:wallet" data-width="20" strokeWidth="1.5"></span>
<span className="text-[10px] font-medium">Wallet</span>
</a>
<a className="flex flex-col items-center justify-center w-full h-full space-y-1 text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
<span className="iconify" data-icon="lucide:user" data-width="20" strokeWidth="1.5"></span>
<span className="text-[10px] font-medium">Profile</span>
</a>
</div>
</nav>
</div>

    </>
  );
}
