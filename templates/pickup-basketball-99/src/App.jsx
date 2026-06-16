import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border-t border-neutral-200 dark:border-neutral-800 pb-safe transition-colors duration-300">
<div className="flex justify-around items-center h-16 px-4">
<button className="flex flex-col items-center gap-1 text-orange-600 dark:text-orange-500">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Map</span>
</button>
<div className="relative -top-5 group">
<div className="absolute inset-0 bg-orange-500 rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
<div className="relative bg-gradient-to-b from-orange-500 to-orange-600 rounded-full p-3 shadow-lg shadow-orange-500/40 dark:shadow-orange-900/40 border-4 border-neutral-50 dark:border-neutral-950 flex items-center justify-center">
<div className="w-6 h-6 border-2 border-white rounded-full relative flex items-center justify-center overflow-hidden">
<div className="w-full h-px bg-white/50 absolute top-1/2 -rotate-45"></div>
<div className="w-full h-px bg-white/50 absolute top-1/2 rotate-45"></div>
</div>
</div>
</div>
<button className="flex flex-col items-center gap-1 text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Squads</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300">
<iconify-icon icon="solar:wallet-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Wallet</span>
</button>
</div>
</nav>

<aside className="hidden md:flex flex-col w-64 border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 h-screen p-6 transition-colors duration-300">
<div className="flex items-center gap-3 mb-10">

<div className="w-8 h-8 rounded-lg bg-orange-600 flex flex-col items-center justify-end relative overflow-hidden shadow-lg shadow-orange-600/20 dark:shadow-orange-900/20 group cursor-pointer">
<div className="w-4 h-full border-x border-t border-orange-300/40 bg-orange-700/30"></div>
<div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border border-orange-300/40"></div>
</div>
<span className="text-xl font-semibold tracking-tighter text-neutral-900 dark:text-white">SWISH</span>
</div>
<nav className="flex flex-col gap-1 flex-1 gap-x-1 gap-y-1">
<a className="flex items-center gap-3 px-3 py-2 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white rounded-lg transition-colors border border-neutral-200 dark:border-neutral-800" href="#">
<iconify-icon icon="solar:home-smile-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900/50 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Find Courts</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900/50 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Events</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900/50 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">My Squad</span>
</a>
<div className="pt-4 mt-4 border-t border-neutral-200 dark:border-neutral-800">
<span className="text-xs font-medium text-neutral-400 dark:text-neutral-500 px-3 uppercase tracking-wider">Following</span>
<div className="mt-3 flex flex-col gap-2">
<button className="flex items-center gap-3 px-3 py-1.5 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white group">
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
<span className="text-sm">Rucker Park</span>
<span className="ml-auto text-xs text-neutral-400 dark:text-neutral-600 group-hover:text-neutral-500">12 Live</span>
</button>
<button className="flex items-center gap-3 px-3 py-1.5 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white group">
<div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
<span className="text-sm">Venice Beach</span>
</button>
</div>
</div>
</nav>
<div className="flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-700 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-xs text-neutral-600 dark:text-white">JD</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-neutral-900 dark:text-white">Jason D.</span>
<span className="text-xs text-neutral-500">Pro Member</span>
</div>

<button className="ml-auto w-8 h-8 flex items-center justify-center rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all" onclick="document.documentElement.classList.toggle('dark')">
<iconify-icon className="hidden dark:block" icon="solar:sun-2-linear" width="20"></iconify-icon>
<iconify-icon className="block dark:hidden" icon="solar:moon-linear" width="20"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 overflow-y-auto scroll-smooth md:pb-0 dark:bg-neutral-950 transition-colors duration-300 bg-neutral-50 h-screen pb-20 relative">

<header className="sticky top-0 z-40 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 px-6 py-4 flex items-center justify-between transition-colors duration-300">
<div className="flex items-center gap-4">
<h1 className="text-lg font-medium text-neutral-900 dark:text-white tracking-tight">Dashboard</h1>
<div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-neutral-100 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-lg focus-within:border-neutral-400 dark:focus-within:border-neutral-700 focus-within:bg-white dark:focus-within:bg-neutral-900 transition-all w-64 group">
<iconify-icon className="text-neutral-400 dark:text-neutral-500 group-focus-within:text-neutral-900 dark:group-focus-within:text-white transition-colors" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-transparent border-none outline-none text-sm text-neutral-900 dark:text-white w-full placeholder:text-neutral-400 dark:placeholder:text-neutral-600" placeholder="Search players, courts..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">

<button className="md:hidden text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors" onclick="document.documentElement.classList.toggle('dark')">
<iconify-icon className="hidden dark:block" icon="solar:sun-2-linear" width="24"></iconify-icon>
<iconify-icon className="block dark:hidden" icon="solar:moon-linear" width="24"></iconify-icon>
</button>
<button className="relative text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
<iconify-icon icon="solar:bell-linear" width="24"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-orange-500 rounded-full border-2 border-white dark:border-neutral-950"></span>
</button>
<div className="md:hidden w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800"></div>
</div>
</header>
<div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

<div className="md:col-span-2 bg-white dark:bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 relative overflow-hidden group shadow-sm transition-colors duration-300">
<div className="absolute top-0 right-0 p-32 bg-orange-500/5 dark:bg-orange-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="flex flex-col justify-between h-full relative z-10">
<div className="">
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded border border-green-500/20 bg-green-500/5 text-green-600 dark:text-green-500 text-[10px] font-semibold uppercase tracking-wider">Active Status</span>
</div>
<h2 className="text-2xl md:text-3xl font-medium text-neutral-900 dark:text-white tracking-tight mb-2">Ready to play?</h2>
<p className="text-neutral-500 dark:text-neutral-400 text-sm max-w-md">Check in to your local court to notify nearby players. We'll verify your GPS location once.</p>
</div>
<div className="mt-6 flex flex-col sm:flex-row items-center gap-4 bg-neutral-50 dark:bg-neutral-800/30 border border-neutral-100 dark:border-neutral-700/50 p-2 rounded-xl backdrop-blur-sm">
<div className="flex-1 w-full px-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white dark:bg-neutral-700/50 border border-neutral-200 dark:border-transparent flex items-center justify-center text-neutral-400">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-neutral-500">Current Location</span>
<span className="text-sm font-medium text-neutral-900 dark:text-white">Central Park Courts, NY</span>
</div>
</div>
</div>

<button className="w-full sm:w-auto px-6 py-2.5 bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-600/20 dark:shadow-orange-900/20">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>
                                I'm Here
                            </button>
</div>
</div>
</div>

<div className="bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 flex flex-col justify-between shadow-sm transition-colors duration-300">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Wallet</span>
<button className="text-orange-600 dark:text-orange-500 hover:text-orange-500 dark:hover:text-orange-400">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</button>
</div>
<div className="">
<span className="text-3xl font-medium text-neutral-900 dark:text-white tracking-tight">$42.50</span>
<div className="flex items-center gap-2 mt-1 text-sm text-neutral-500">
<iconify-icon icon="solar:card-linear" width="16"></iconify-icon>
<span>**** 8824</span>
</div>
</div>
<div className="mt-6 pt-6 border-t border-neutral-100 dark:border-neutral-800">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Next Game</span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex flex-col items-center justify-center border border-neutral-200 dark:border-neutral-700">
<span className="text-[10px] text-neutral-500 dark:text-neutral-400 uppercase">Oct</span>
<span className="text-sm font-medium text-neutral-900 dark:text-white">24</span>
</div>
<div className="">
<h4 className="text-sm font-medium text-neutral-900 dark:text-white">3v3 Tournament</h4>
<p className="text-xs text-neutral-500">Indoor • 6:00 PM</p>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[500px]">

<div className="lg:col-span-2 bg-neutral-100 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 relative overflow-hidden flex flex-col transition-colors duration-300">

<div className="absolute top-4 left-4 z-10 flex gap-2">
<button className="px-3 py-1.5 bg-white/90 dark:bg-neutral-800/90 backdrop-blur border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-900 dark:text-white rounded-md shadow-sm">Indoor</button>
<button className="px-3 py-1.5 bg-white/50 dark:bg-neutral-950/50 backdrop-blur border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-500 dark:text-neutral-400 rounded-md hover:bg-white dark:hover:bg-neutral-800">Outdoor</button>
</div>

<div className="absolute inset-0 map-pattern opacity-30 dark:opacity-20 transition-opacity duration-300"></div>

<div className="absolute top-0 left-1/3 w-16 h-full bg-neutral-200/50 dark:bg-neutral-800/30 transform -skew-x-12 border-x border-neutral-300/30 dark:border-neutral-800/50 transition-colors duration-300"></div>

<div className="absolute top-1/2 left-0 w-full h-12 bg-neutral-200/50 dark:bg-neutral-800/30 transform -skew-y-6 border-y border-neutral-300/30 dark:border-neutral-800/50 transition-colors duration-300"></div>


<div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20">
<div className="absolute -inset-4 bg-orange-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative flex flex-col items-center">
<div className="px-2 py-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-md mb-2 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-200">
<span className="text-xs font-medium text-neutral-900 dark:text-white whitespace-nowrap">Rucker Park • 12 Active</span>
</div>
<div className="w-8 h-8 bg-orange-600 rounded-full border-2 border-white flex items-center justify-center shadow-lg text-white">
<iconify-icon icon="solar:basketball-linear" width="16"></iconify-icon>
</div>
<div className="w-2 h-2 bg-neutral-900 dark:bg-neutral-950 rotate-45 border-r border-b border-neutral-700 -mt-1 z-0"></div>
</div>
</div>

<div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10">
<div className="relative flex flex-col items-center">
<div className="w-6 h-6 bg-white dark:bg-neutral-700 rounded-full border-2 border-neutral-300 dark:border-neutral-400 flex items-center justify-center shadow-lg text-neutral-500 dark:text-neutral-300">
<iconify-icon icon="solar:basketball-linear" width="12"></iconify-icon>
</div>
</div>
</div>
<div className="absolute bottom-4 right-4 z-10 flex flex-col gap-2">
<button className="w-8 h-8 bg-white dark:bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-600 dark:text-white border border-neutral-200 dark:border-neutral-700 shadow-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors">
<iconify-icon icon="solar:gps-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="bg-white dark:bg-neutral-900/30 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-0 overflow-hidden flex flex-col transition-colors duration-300">
<div className="p-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
<h3 className="text-sm font-medium text-neutral-900 dark:text-white">Live Activity</h3>
<button className="text-xs text-orange-600 dark:text-orange-500 hover:text-orange-500 dark:hover:text-orange-400">View All</button>
</div>
<div className="overflow-y-auto flex-1 p-2 space-y-1">

<div className="p-3 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 rounded-xl transition-colors cursor-pointer group">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-500 group-hover:text-orange-600 dark:group-hover:text-orange-500 group-hover:border-orange-500/20 transition-all">
<iconify-icon icon="solar:gallery-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors">West 4th Street</h4>
<p className="text-xs text-neutral-500">Outdoor • 0.8mi</p>
</div>
</div>
<div className="flex items-center gap-1.5 px-2 py-1 bg-green-500/10 rounded-full border border-green-500/20">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-[10px] font-medium text-green-600 dark:text-green-500">8 Playing</span>
</div>
</div>
<div className="flex items-center gap-2 pl-13">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 border-white dark:border-neutral-900 bg-neutral-200 dark:bg-neutral-700 text-[8px] flex items-center justify-center text-neutral-600 dark:text-white">JP</div>
<div className="w-6 h-6 rounded-full border-2 border-white dark:border-neutral-900 bg-neutral-300 dark:bg-neutral-600 text-[8px] flex items-center justify-center text-neutral-700 dark:text-white">MK</div>
<div className="w-6 h-6 rounded-full border-2 border-white dark:border-neutral-900 bg-neutral-400 dark:bg-neutral-500 text-[8px] flex items-center justify-center text-white">+6</div>
</div>
<button className="ml-auto text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white px-2 py-1 rounded bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm">Follow</button>
</div>
</div>

<div className="p-3 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 rounded-xl transition-colors cursor-pointer group">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-500 group-hover:text-orange-600 dark:group-hover:text-orange-500 group-hover:border-orange-500/20 transition-all">
<iconify-icon icon="solar:gallery-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors">Downtown YMCA</h4>
<p className="text-xs text-neutral-500">Indoor • 1.2mi</p>
</div>
</div>
<div className="flex items-center gap-1.5 px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full border border-neutral-200 dark:border-neutral-700">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500"></span>
<span className="text-[10px] font-medium text-neutral-500 dark:text-neutral-400">Empty</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between mt-8 mb-4">
<h3 className="text-lg font-medium text-neutral-900 dark:text-white tracking-tight">Open Games</h3>
<button className="flex items-center gap-2 px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-sm font-medium rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-sm">
<iconify-icon icon="solar:add-circle-bold" width="18"></iconify-icon>
                    Organize Game
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-12">

<div className="group bg-white dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 rounded-xl p-5 transition-all hover:bg-neutral-50 dark:hover:bg-neutral-900/60 shadow-sm hover:shadow">
<div className="flex justify-between items-start mb-4">
<div className="flex flex-col">
<span className="text-xs font-medium text-orange-600 dark:text-orange-500 mb-1">COMPETITIVE</span>
<h4 className="text-base font-medium text-neutral-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors">Evening 5v5 Run</h4>
<p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">Lincoln Park Courts</p>
</div>
<div className="flex flex-col items-end">
<span className="text-sm font-medium text-neutral-900 dark:text-white">$10.00</span>
<span className="text-[10px] text-neutral-500">per person</span>
</div>
</div>
<div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400 mb-4">
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
<span>Today, 7:00 PM</span>
</div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:users-group-rounded-linear" width="14"></iconify-icon>
<span>7/10 Filled</span>
</div>
</div>
<div className="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-800">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white dark:border-neutral-900" src="https://i.pravatar.cc/100?img=33"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white dark:border-neutral-900" src="https://i.pravatar.cc/100?img=12"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white dark:border-neutral-900" src="https://i.pravatar.cc/100?img=59"/>
</div>
<button className="px-4 py-1.5 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-900 dark:hover:bg-white hover:text-white dark:hover:text-black text-neutral-900 dark:text-white rounded-md border border-neutral-200 dark:border-neutral-700 transition-colors">
                            Join Game
                        </button>
</div>
</div>

<div className="group bg-white dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 rounded-xl p-5 transition-all hover:bg-neutral-50 dark:hover:bg-neutral-900/60 shadow-sm hover:shadow">
<div className="flex justify-between items-start mb-4">
<div className="flex flex-col">
<span className="text-xs font-medium text-blue-500 dark:text-blue-400 mb-1">CASUAL</span>
<h4 className="text-base font-medium text-neutral-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">Sunday Morning Shootaround</h4>
<p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">Community Center (Indoor)</p>
</div>
<div className="flex flex-col items-end">
<span className="text-sm font-medium text-neutral-900 dark:text-white">Free</span>
</div>
</div>
<div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400 mb-4">
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
<span>Sun, 9:00 AM</span>
</div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:users-group-rounded-linear" width="14"></iconify-icon>
<span>Open</span>
</div>
</div>
<div className="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-800">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
<iconify-icon className="text-neutral-500" icon="solar:user-linear" width="12"></iconify-icon>
</div>
<span className="text-xs text-neutral-500">Hosted by Alex</span>
</div>
<button className="px-4 py-1.5 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-900 dark:hover:bg-white hover:text-white dark:hover:text-black text-neutral-900 dark:text-white rounded-md border border-neutral-200 dark:border-neutral-700 transition-colors">
                            RSVP
                        </button>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
