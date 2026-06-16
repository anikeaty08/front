import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
brand: {
navy: '#0A2463',
gold: '#D4AF37',
burgundy: '#800020',
cream: '#FFFDD0',
creamLight: '#FFFEF0',
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
      

<div className="md:hidden fixed w-full bg-white z-50 border-b border-slate-200 flex justify-between items-center px-4 py-3">
<div className="flex items-center gap-2 text-brand-navy">
<span className="tracking-tighter font-semibold text-lg">S.A STAR HOUSE</span>
</div>
<button className="text-slate-500 hover:text-brand-navy transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 h-full flex-shrink-0 z-20">

<div className="h-16 flex items-center px-6 border-b border-slate-100">
<div className="flex items-center gap-2 text-brand-navy">
<div className="w-6 h-6 bg-brand-navy rounded-sm flex items-center justify-center text-brand-gold">
<iconify-icon icon="solar:crown-star-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="tracking-tighter font-semibold text-sm">S.A STAR HOUSE</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<div className="px-3 mb-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Overview</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-slate-50 text-brand-navy ring-1 ring-slate-200/50" href="#">
<iconify-icon icon="solar:widget-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-500 hover:text-brand-navy hover:bg-slate-50 transition-all group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:bag-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Orders
                <span className="ml-auto bg-brand-gold/10 text-brand-gold text-xs py-0.5 px-2 rounded-full font-semibold">12</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-500 hover:text-brand-navy hover:bg-slate-50 transition-all group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:ruler-pen-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Measurements
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-500 hover:text-brand-navy hover:bg-slate-50 transition-all group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Staff Profile
            </a>
<div className="px-3 mt-8 mb-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Performance</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-500 hover:text-brand-navy hover:bg-slate-50 transition-all group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:chart-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Leaderboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-500 hover:text-brand-navy hover:bg-slate-50 transition-all group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:wallet-money-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Points &amp; History
            </a>
<div className="px-3 mt-8 mb-2 text-xs font-medium text-slate-400 uppercase tracking-wider">System</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-500 hover:text-brand-navy hover:bg-slate-50 transition-all group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:chat-round-line-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Support Chat
            </a>
</nav>

<div className="p-4 border-t border-slate-200">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center text-xs font-medium">JD</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate">John Doe</p>
<p className="text-xs text-brand-gold truncate">Platinum Salesman</p>
</div>
<button className="text-slate-400 hover:text-slate-600">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md z-10 flex items-center justify-between px-6 sticky top-0">
<div className="flex items-center gap-4">
<h1 className="text-base font-semibold text-slate-800 tracking-tight">Dashboard Overview</h1>
<span className="text-slate-300 text-sm">/</span>
<span className="text-sm text-slate-500">October 2023</span>
</div>
<div className="flex items-center gap-4">

<div className="hidden md:flex items-center bg-slate-50 border border-slate-200 rounded-md px-3 py-1.5 focus-within:ring-2 focus-within:ring-brand-navy/10 focus-within:border-brand-navy/30 transition-all">
<iconify-icon className="text-slate-400 mr-2" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="bg-transparent border-none outline-none text-sm text-slate-700 w-48 placeholder:text-slate-400" placeholder="Search orders (ORD-XXXX)..." type="text"/>
</div>

<button className="hidden md:flex items-center gap-2 text-xs font-medium text-brand-navy bg-brand-navy/5 hover:bg-brand-navy/10 px-3 py-1.5 rounded-md transition-colors border border-brand-navy/10">
<iconify-icon icon="solar:ticket-linear" width="14"></iconify-icon>
                    Generate Invite
                </button>

<button className="relative text-slate-400 hover:text-slate-600 transition-colors">
<div className="absolute top-0 right-0 w-2 h-2 bg-brand-burgundy rounded-full border-2 border-white"></div>
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8">

<section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

<div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Monthly Sales</p>
<h3 className="text-2xl font-semibold text-brand-navy tracking-tight mt-1">112,450 <span className="text-sm font-normal text-slate-400">/ 140k</span></h3>
</div>
<div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:tag-price-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>

<div className="relative w-full h-2 bg-slate-100 rounded-full overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-brand-navy w-[80%] rounded-full"></div>
</div>
<p className="text-xs text-slate-400 mt-3 flex items-center gap-1">
<iconify-icon className="text-green-500" icon="solar:graph-up-linear"></iconify-icon>
<span className="text-green-600 font-medium">+12%</span> vs last month
                    </p>
</div>

<div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Accumulated Bonus</p>
<h3 className="text-2xl font-semibold text-brand-gold tracking-tight mt-1">14,200 <span className="text-sm font-normal text-slate-400">/ 20k</span></h3>
</div>
<div className="w-8 h-8 rounded-full bg-yellow-50 text-brand-gold flex items-center justify-center">
<iconify-icon icon="solar:wad-of-money-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>

<div className="relative w-full h-2 bg-slate-100 rounded-full overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-brand-gold w-[71%] rounded-full shadow-[0_0_10px_rgba(212,175,55,0.4)]"></div>
</div>
<p className="text-xs text-slate-400 mt-3">
                        Projected: <span className="text-slate-700 font-medium">18,500</span> by month end
                    </p>
</div>

<div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Hate Meter</p>
<h3 className="text-2xl font-semibold text-brand-burgundy tracking-tight mt-1">5 <span className="text-sm font-normal text-slate-400">/ 50</span></h3>
</div>
<div className="w-8 h-8 rounded-full bg-red-50 text-brand-burgundy flex items-center justify-center">
<iconify-icon icon="solar:emoji-funny-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>

<div className="relative w-full h-2 bg-slate-100 rounded-full overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-brand-burgundy w-[10%] rounded-full transition-all duration-500"></div>
</div>
<p className="text-xs text-slate-400 mt-3 flex items-center gap-1">
<span className="text-brand-burgundy font-medium">Caution:</span> +1 dissatisfaction this week
                    </p>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

<div className="lg:col-span-2 space-y-6">
<div className="flex items-center justify-between">
<h2 className="text-lg font-semibold text-slate-800 tracking-tight">Active Orders</h2>
<button className="text-sm text-brand-navy hover:underline font-medium">View All</button>
</div>
<div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50/50 border-b border-slate-100">
<th className="py-3 px-4 text-xs font-medium text-slate-500 uppercase tracking-wider">Order ID</th>
<th className="py-3 px-4 text-xs font-medium text-slate-500 uppercase tracking-wider">Customer</th>
<th className="py-3 px-4 text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
<th className="py-3 px-4 text-xs font-medium text-slate-500 uppercase tracking-wider text-right">Value</th>
<th className="py-3 px-4 text-xs font-medium text-slate-500 uppercase tracking-wider text-center">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 text-sm">
<tr className="group hover:bg-slate-50 transition-colors">
<td className="py-3 px-4 font-mono text-slate-600">ORD-29381</td>
<td className="py-3 px-4 font-medium text-slate-800">Mr. Ahmed Khan</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                                Measurements Taken
                                            </span>
</td>
<td className="py-3 px-4 text-right text-slate-600">45,000</td>
<td className="py-3 px-4 text-center">
<button className="text-slate-400 hover:text-brand-navy transition-colors">
<iconify-icon icon="solar:pen-new-square-linear" width="18"></iconify-icon>
</button>
</td>
</tr>
<tr className="group hover:bg-slate-50 transition-colors">
<td className="py-3 px-4 font-mono text-slate-600">ORD-29382</td>
<td className="py-3 px-4 font-medium text-slate-800">Mr. Usman Ali</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-700 border border-orange-100">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                                                In Production
                                            </span>
</td>
<td className="py-3 px-4 text-right text-slate-600">82,000</td>
<td className="py-3 px-4 text-center">
<button className="text-slate-400 hover:text-brand-navy transition-colors">
<iconify-icon icon="solar:pen-new-square-linear" width="18"></iconify-icon>
</button>
</td>
</tr>
<tr className="group hover:bg-slate-50 transition-colors">
<td className="py-3 px-4 font-mono text-slate-600">ORD-29383</td>
<td className="py-3 px-4 font-medium text-slate-800">Mr. Bilal Sheikh</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                                Ready for Fitting
                                            </span>
</td>
<td className="py-3 px-4 text-right text-slate-600">32,500</td>
<td className="py-3 px-4 text-center">
<button className="text-slate-400 hover:text-brand-navy transition-colors">
<iconify-icon icon="solar:pen-new-square-linear" width="18"></iconify-icon>
</button>
</td>
</tr>
<tr className="group hover:bg-slate-50 transition-colors">
<td className="py-3 px-4 font-mono text-slate-600">ORD-29384</td>
<td className="py-3 px-4 font-medium text-slate-800">Mr. Haris Rauf</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                                                Pending
                                            </span>
</td>
<td className="py-3 px-4 text-right text-slate-600">12,000</td>
<td className="py-3 px-4 text-center">
<button className="text-slate-400 hover:text-brand-navy transition-colors">
<iconify-icon icon="solar:pen-new-square-linear" width="18"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-3 border-t border-slate-100 bg-slate-50 text-center">
<button className="text-xs font-medium text-brand-navy flex items-center justify-center gap-1 w-full py-1 hover:bg-white rounded-sm transition-all">
                                Load 5 more orders
                                <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-brand-navy rounded-lg p-6 text-white relative overflow-hidden shadow-lg">

<div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 rounded-full border-[16px] border-white/5"></div>
<div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-32 h-32 rounded-full border-[24px] border-white/5"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-white/60 uppercase tracking-widest">Current Rank</span>
<iconify-icon className="text-brand-gold" icon="solar:medal-star-linear" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-bold tracking-tight text-white mb-1">Platinum</h2>
<p className="text-xs text-white/70 mb-6">1,250 points to Gold</p>

<div className="space-y-2">
<div className="flex justify-between text-xs font-medium">
<span className="text-white/80">Platinum</span>
<span className="text-brand-gold">Gold</span>
</div>
<div className="h-1.5 bg-black/20 rounded-full overflow-hidden">
<div className="h-full bg-brand-gold w-[65%] rounded-full"></div>
</div>
<p className="text-[10px] text-white/50 text-right mt-1">Next reset: 3 Days</p>
</div>
</div>
</div>

<div className="bg-white rounded-lg border border-slate-200 shadow-sm">
<div className="p-4 border-b border-slate-100 flex items-center justify-between">
<h3 className="text-sm font-semibold text-slate-800">Top Performers</h3>
<select className="text-xs border-none bg-slate-50 rounded px-2 py-1 text-slate-500 focus:ring-0 cursor-pointer">
<option>Salesmen</option>
<option>Managers</option>
</select>
</div>
<div className="p-2">

<div className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-50 transition-colors cursor-pointer">
<div className="relative">
<img alt="AR" className="w-9 h-9 rounded-full object-cover" src="https://ui-avatars.com/api/?name=Ali+Raza&amp;background=D4AF37&amp;color=fff"/>
<div className="absolute -top-1 -right-1 bg-yellow-400 text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full text-white border border-white">1</div>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-800 truncate">Ali Raza</p>
<p className="text-xs text-slate-500">Hira Rank</p>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-brand-navy">4,250</p>
<p className="text-[10px] text-slate-400">pts</p>
</div>
</div>

<div className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-50 transition-colors cursor-pointer">
<div className="relative">
<img alt="JD" className="w-9 h-9 rounded-full object-cover" src="https://ui-avatars.com/api/?name=John+Doe&amp;background=0A2463&amp;color=fff"/>
<div className="absolute -top-1 -right-1 bg-slate-300 text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full text-white border border-white">2</div>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-800 truncate">John Doe</p>
<p className="text-xs text-slate-500">Platinum Rank</p>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-brand-navy">3,100</p>
<p className="text-[10px] text-slate-400">pts</p>
</div>
</div>

<div className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-50 transition-colors cursor-pointer">
<div className="relative">
<img alt="KS" className="w-9 h-9 rounded-full object-cover" src="https://ui-avatars.com/api/?name=Kamran+S&amp;background=800020&amp;color=fff"/>
<div className="absolute -top-1 -right-1 bg-orange-700 text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full text-white border border-white">3</div>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-800 truncate">Kamran S.</p>
<p className="text-xs text-slate-500">Bronze Rank</p>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-brand-navy">1,890</p>
<p className="text-[10px] text-slate-400">pts</p>
</div>
</div>
</div>
<div className="px-4 py-3 border-t border-slate-100 bg-slate-50/50 rounded-b-lg">
<a className="text-xs text-center block text-brand-navy hover:underline" href="#">View Full Leaderboard</a>
</div>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center bg-brand-navy/20 backdrop-blur-sm">

</div>
<footer className="mt-auto py-6 border-t border-slate-200">
<div className="flex justify-between items-center text-xs text-slate-400">
<p>© 2023 S.A Star House. Internal System v2.1</p>
<div className="flex gap-4">
<a className="hover:text-brand-navy" href="#">System Status</a>
<a className="hover:text-brand-navy" href="#">Help Center</a>
</div>
</div>
</footer>
</div>
</main>

    </>
  );
}
