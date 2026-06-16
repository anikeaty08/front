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
      

<input className="peer hidden" id="mobile-menu" type="checkbox"/>

<aside className="fixed inset-y-0 left-0 z-50 w-64 bg-black border-r border-zinc-900 transform -translate-x-full peer-checked:translate-x-0 md:translate-x-0 md:static md:flex md:flex-col transition-transform duration-300 ease-out">
<div className="h-16 flex items-center px-6 border-b border-zinc-900">
<span className="text-white font-medium tracking-tighter text-lg">ZARIFY.</span>
</div>
<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<div className="px-3 mb-2 text-xs font-medium uppercase tracking-wider text-zinc-600">Platform</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-zinc-900/50 text-zinc-100 hover:bg-zinc-900 transition-colors group" href="#">
<iconify-icon className="text-lg group-hover:text-white transition-colors" icon="solar:widget-2-linear" strokeWidth="1.5"></iconify-icon>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-900 text-zinc-400 hover:text-zinc-100 transition-colors group" href="#">
<iconify-icon className="text-lg group-hover:text-white transition-colors" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
<span>Inventory</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-900 text-zinc-400 hover:text-zinc-100 transition-colors group" href="#">
<iconify-icon className="text-lg group-hover:text-white transition-colors" icon="solar:bag-3-linear" strokeWidth="1.5"></iconify-icon>
<span>Shop Products</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-900 text-zinc-400 hover:text-zinc-100 transition-colors group" href="#">
<iconify-icon className="text-lg group-hover:text-white transition-colors" icon="solar:chart-2-linear" strokeWidth="1.5"></iconify-icon>
<span>Analytics</span>
</a>
<div className="px-3 mt-8 mb-2 text-xs font-medium uppercase tracking-wider text-zinc-600">Spaces</div>
<a className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-zinc-900 text-zinc-400 hover:text-zinc-100 transition-colors group" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:sofa-linear" strokeWidth="1.5"></iconify-icon>
<span>Living Room</span>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
</a>
<a className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-zinc-900 text-zinc-400 hover:text-zinc-100 transition-colors group" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:chef-hat-linear" strokeWidth="1.5"></iconify-icon>
<span>Kitchen</span>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
</a>
<a className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-zinc-900 text-zinc-400 hover:text-zinc-100 transition-colors group" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:bath-linear" strokeWidth="1.5"></iconify-icon>
<span>Utility</span>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
</a>
</nav>
<div className="p-4 border-t border-zinc-900">
<button className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-zinc-900 transition-colors text-left">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 flex items-center justify-center text-xs text-white font-medium">JS</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-white truncate">John Smith</p>
<p className="text-[10px] text-zinc-500 truncate">Admin</p>
</div>
<iconify-icon className="text-zinc-500 hover:text-white transition-colors" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</aside>

<label className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden hidden peer-checked:block transition-opacity" htmlFor="mobile-menu"></label>

<main className="flex-1 flex flex-col min-w-0 bg-black relative">

<header className="h-16 border-b border-zinc-900 flex items-center justify-between px-4 md:px-8 sticky top-0 z-30 bg-black/50 backdrop-blur-md">
<div className="flex items-center gap-4">
<label className="md:hidden p-2 text-zinc-400 hover:text-white cursor-pointer" htmlFor="mobile-menu">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</label>
<div className="hidden md:flex items-center text-xs text-zinc-500 gap-2">
<span className="hover:text-zinc-300 cursor-pointer transition-colors">Home</span>
<iconify-icon className="text-zinc-700" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-zinc-200">Dashboard</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="relative hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input className="bg-zinc-900/50 border border-zinc-800 rounded-full pl-9 pr-4 py-1.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-700 focus:bg-zinc-900 transition-all w-64" placeholder="Search products..." type="text"/>
</div>
<button className="relative p-2 text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-zinc-900">
<iconify-icon className="text-lg" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-black"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8">

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

<div className="lg:col-span-2 relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 md:p-8 flex flex-col justify-between group">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<h1 className="text-2xl md:text-3xl font-normal text-white tracking-tight mb-2">Good Evening, John.</h1>
<p className="text-zinc-500 max-w-md">Your home system is running optimally. 3 devices are currently active, and energy consumption is 12% lower than last week.</p>
</div>
<div className="relative z-10 mt-8 flex gap-3">
<button className="bg-white text-black px-4 py-2 rounded-lg text-xs font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Add Device
                        </button>
<button className="bg-zinc-800 text-white border border-zinc-700 px-4 py-2 rounded-lg text-xs font-medium hover:bg-zinc-700 transition-colors flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:scanner-linear" strokeWidth="1.5"></iconify-icon>
                            Scan Product
                        </button>
</div>
</div>

<div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Environment</p>
<h2 className="text-4xl font-light text-white mt-2 tracking-tight">72°</h2>
<p className="text-zinc-500 text-xs mt-1">Indoor Temperature</p>
</div>
<iconify-icon className="text-3xl text-zinc-400" icon="solar:cloud-sun-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="mt-6 space-y-4">
<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-400">Humidity</span>
<span className="text-zinc-200">45%</span>
</div>
<div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full w-[45%] bg-zinc-400 rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-400">Air Quality</span>
<span className="text-emerald-400">Good</span>
</div>
<div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full w-[85%] bg-emerald-500/70 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-normal text-white tracking-tight">Useful Products &amp; Controls</h3>
<div className="flex gap-2">
<button className="p-1.5 rounded-md hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors">
<iconify-icon className="text-lg" icon="solar:sort-horizontal-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="p-1.5 rounded-md hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors">
<iconify-icon className="text-lg" icon="solar:filter-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

<div className="group relative rounded-xl border border-zinc-800 bg-zinc-900/20 p-4 hover:border-zinc-700 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
<iconify-icon className="text-xl text-yellow-200/80" icon="solar:lightbulb-bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<label className="custom-checkbox cursor-pointer relative">
<input checked="" className="peer hidden" type="checkbox"/>
<div className="w-10 h-5 bg-zinc-800 rounded-full peer-checked:bg-white transition-colors relative">
<div className="absolute top-1 left-1 w-3 h-3 bg-zinc-500 rounded-full peer-checked:translate-x-5 peer-checked:bg-black transition-transform duration-300"></div>
</div>
</label>
</div>
<div>
<h4 className="text-zinc-200 font-medium mb-1">Philips Hue</h4>
<p className="text-xs text-zinc-500 mb-4">Living Room • On</p>
<div className="space-y-3">
<div className="flex items-center gap-2">
<iconify-icon className="text-xs text-zinc-500" icon="solar:sun-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer" max="100" min="0" type="range" value="75"/>
</div>
</div>
</div>
</div>

<div className="group relative rounded-xl border border-zinc-800 bg-zinc-900/20 p-4 hover:border-zinc-700 transition-all duration-300 flex flex-col">
<div className="absolute top-4 right-4 bg-zinc-800/80 text-white text-[10px] px-2 py-0.5 rounded border border-zinc-700">Low Stock</div>
<div className="flex-1 flex flex-col items-center justify-center py-4">

<div className="w-24 h-24 rounded-full bg-gradient-to-b from-zinc-800 to-transparent flex items-center justify-center mb-4 relative">
<div className="absolute inset-0 border border-zinc-700/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
<iconify-icon className="text-4xl text-zinc-500 group-hover:text-zinc-300 transition-colors" icon="solar:wind-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-zinc-200 font-medium">Dyson Purifier</h4>
<p className="text-xs text-zinc-500">$499.00</p>
</div>
<button className="w-full mt-2 border border-zinc-700 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
<iconify-icon className="text-sm" icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
                        Order Refill
                    </button>
</div>

<div className="group relative rounded-xl border border-zinc-800 bg-zinc-900/20 p-4 hover:border-zinc-700 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
<iconify-icon className="text-xl text-zinc-400" icon="solar:cup-hot-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">Ready</div>
</div>
<div>
<h4 className="text-zinc-200 font-medium mb-1">Barista Express</h4>
<p className="text-xs text-zinc-500 mb-4">Kitchen • Standby</p>
<button className="w-full bg-zinc-100 text-black text-xs py-2 rounded-lg font-medium hover:bg-zinc-200 transition-colors">
                            Start Brewing
                        </button>
</div>
</div>

<div className="group relative rounded-xl border border-zinc-800 bg-zinc-900/20 p-4 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60"></div>
<div className="relative z-10 flex justify-between items-start">
<span className="text-[10px] font-medium tracking-wider text-indigo-400 uppercase">Featured</span>
<button className="text-zinc-500 hover:text-white"><iconify-icon className="text-lg" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon></button>
</div>
<div className="relative z-10 mt-4 text-center">
<iconify-icon className="text-5xl text-zinc-600 mb-3 group-hover:text-zinc-400 transition-colors" icon="solar:music-note-slider-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-zinc-200 font-medium">Sonos Arc</h4>
<p className="text-xs text-zinc-500 line-clamp-2 mt-1">Premium soundbar with Dolby Atmos.</p>
</div>
<div className="relative z-10 mt-4 flex items-center justify-between">
<span className="text-white text-sm font-medium">$899</span>
<button className="bg-zinc-800 hover:bg-zinc-700 text-white w-8 h-8 rounded-lg flex items-center justify-center transition-colors">
<iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="mt-8">
<div className="flex items-center justify-between mb-4">
<h3 className="text-base font-normal text-white tracking-tight">Recent Activity</h3>
<a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">View All</a>
</div>
<div className="rounded-xl border border-zinc-800 bg-zinc-900/20 divide-y divide-zinc-800/50">
<div className="p-4 flex items-center justify-between hover:bg-zinc-900/30 transition-colors">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400">
<iconify-icon className="text-lg" icon="solar:bag-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm text-zinc-200">Restocked AA Batteries</p>
<p className="text-xs text-zinc-500">Inventory update</p>
</div>
</div>
<span className="text-xs text-zinc-600">2 min ago</span>
</div>
<div className="p-4 flex items-center justify-between hover:bg-zinc-900/30 transition-colors">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400">
<iconify-icon className="text-lg" icon="solar:washing-machine-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm text-zinc-200">Laundry Cycle Finished</p>
<p className="text-xs text-zinc-500">Utility Room</p>
</div>
</div>
<span className="text-xs text-zinc-600">1h ago</span>
</div>
<div className="p-4 flex items-center justify-between hover:bg-zinc-900/30 transition-colors">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400">
<iconify-icon className="text-lg" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm text-zinc-200">Motion Detected</p>
<p className="text-xs text-zinc-500">Front Door Camera</p>
</div>
</div>
<span className="text-xs text-zinc-600">3h ago</span>
</div>
</div>
</div>
<footer className="mt-12 mb-4 flex justify-between items-center text-[10px] text-zinc-600 border-t border-zinc-900 pt-6">
<p>© 2023 ZARIFY Inc.</p>
<div className="flex gap-4">
<a className="hover:text-zinc-400" href="#">Privacy</a>
<a className="hover:text-zinc-400" href="#">Terms</a>
<a className="hover:text-zinc-400" href="#">Support</a>
</div>
</footer>
</div>
</main>

    </>
  );
}
