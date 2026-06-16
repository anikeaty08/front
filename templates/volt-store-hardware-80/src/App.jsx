import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
zinc: {
850: '#1f1f22',
925: '#121214',
}
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
      

<div className="w-full max-w-md bg-zinc-950 min-h-screen relative shadow-2xl border-x border-zinc-900 flex flex-col pb-24">

<header className="sticky top-0 z-30 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 px-5 py-4">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="2.5" data-width="18"></span>
</div>
<h1 className="text-lg font-semibold text-zinc-100 tracking-tight">VOLT<span className="text-zinc-600">.</span>STORE</h1>
</div>
<div className="flex items-center gap-3">
<button className="relative p-2 rounded-full hover:bg-zinc-900 transition-colors">
<span className="iconify text-zinc-400" data-icon="lucide:bell" data-strokeWidth="1.5" data-width="20"></span>
<span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full border-2 border-zinc-950"></span>
</button>
<button className="w-8 h-8 rounded-full bg-zinc-800 overflow-hidden ring-1 ring-white/10">
<img alt="User" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</button>
</div>
</div>

<div className="relative group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-blue-500 transition-colors">
<span className="iconify" data-icon="lucide:search" data-strokeWidth="1.5" data-width="18"></span>
</span>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl py-2.5 pl-10 pr-4 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all shadow-inner" placeholder="Search drills, wires, chips..." type="text"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300">
<span className="iconify" data-icon="lucide:sliders-horizontal" data-strokeWidth="1.5" data-width="16"></span>
</button>
</div>
</header>

<main className="flex-1 overflow-y-auto px-5 pt-4 space-y-8">

<div className="relative w-full h-40 rounded-2xl overflow-hidden group cursor-pointer">
<img alt="Workshop" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-zinc-900/80 to-transparent"></div>
<div className="absolute inset-0 p-5 flex flex-col justify-center items-start">
<span className="inline-block px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 text-xs font-medium border border-blue-500/30 mb-2">PRO DEALS</span>
<h2 className="text-xl font-medium text-white tracking-tight mb-1">Industrial Grade<br/>Power Tools</h2>
<p className="text-xs text-zinc-300 mb-3">Up to 40% off on Bosch &amp; Makita.</p>
<div className="flex items-center gap-1 text-xs font-medium text-white">
                        Shop Now <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="2" data-width="12"></span>
</div>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-zinc-200">Categories</h3>
<a className="text-xs text-blue-500 hover:text-blue-400" href="#">View all</a>
</div>
<div className="flex gap-4 overflow-x-auto hide-scroll pb-2 -mx-5 px-5">

<button className="flex flex-col items-center gap-2 min-w-[72px] group">
<div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800 group-hover:border-zinc-700 transition-all">
<span className="iconify text-zinc-400 group-hover:text-blue-400 transition-colors" data-icon="lucide:cpu" data-strokeWidth="1.5" data-width="24"></span>
</div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300">Electronics</span>
</button>

<button className="flex flex-col items-center gap-2 min-w-[72px] group">
<div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800 group-hover:border-zinc-700 transition-all">
<span className="iconify text-zinc-400 group-hover:text-orange-400 transition-colors" data-icon="lucide:hammer" data-strokeWidth="1.5" data-width="24"></span>
</div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300">Hardware</span>
</button>

<button className="flex flex-col items-center gap-2 min-w-[72px] group">
<div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800 group-hover:border-zinc-700 transition-all">
<span className="iconify text-zinc-400 group-hover:text-yellow-400 transition-colors" data-icon="lucide:lightbulb" data-strokeWidth="1.5" data-width="24"></span>
</div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300">Lighting</span>
</button>

<button className="flex flex-col items-center gap-2 min-w-[72px] group">
<div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800 group-hover:border-zinc-700 transition-all">
<span className="iconify text-zinc-400 group-hover:text-green-400 transition-colors" data-icon="lucide:cable" data-strokeWidth="1.5" data-width="24"></span>
</div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300">Cables</span>
</button>

<button className="flex flex-col items-center gap-2 min-w-[72px] group">
<div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800 group-hover:border-zinc-700 transition-all">
<span className="iconify text-zinc-400 group-hover:text-purple-400 transition-colors" data-icon="lucide:monitor-smartphone" data-strokeWidth="1.5" data-width="24"></span>
</div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300">Smart</span>
</button>
</div>
</div>

<div>
<h3 className="text-sm font-medium text-zinc-200 mb-4">Trending Now</h3>
<div className="grid grid-cols-2 gap-3">

<div className="group bg-zinc-925 border border-zinc-900 rounded-xl p-3 hover:border-zinc-700 transition-all duration-300">
<div className="relative aspect-square bg-zinc-900 rounded-lg mb-3 overflow-hidden">
<img alt="Drill" className="object-cover w-full h-full opacity-70 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute top-2 right-2 w-7 h-7 bg-black/40 backdrop-blur rounded-full flex items-center justify-center text-zinc-300 hover:text-red-400 hover:bg-black/60 transition-all">
<span className="iconify" data-icon="lucide:heart" data-strokeWidth="1.5" data-width="14"></span>
</button>
</div>
<div className="space-y-1">
<div className="flex justify-between items-start">
<h4 className="text-sm text-zinc-200 font-medium leading-tight">Cordless Drill 18V</h4>
</div>
<p className="text-xs text-zinc-500">Power Tools</p>
<div className="flex items-center justify-between mt-2 pt-1">
<span className="text-sm font-medium text-white">$129.99</span>
<button className="w-7 h-7 rounded-full bg-zinc-800 text-zinc-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:plus" data-strokeWidth="2" data-width="16"></span>
</button>
</div>
</div>
</div>

<div className="group bg-zinc-925 border border-zinc-900 rounded-xl p-3 hover:border-zinc-700 transition-all duration-300">
<div className="relative aspect-square bg-zinc-900 rounded-lg mb-3 overflow-hidden">
<img alt="Circuit" className="object-cover w-full h-full opacity-70 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-2 left-2 px-1.5 py-0.5 bg-blue-500/20 backdrop-blur border border-blue-500/20 rounded text-[10px] font-medium text-blue-300">NEW</div>
</div>
<div className="space-y-1">
<div className="flex justify-between items-start">
<h4 className="text-sm text-zinc-200 font-medium leading-tight">Arduino Uno R3</h4>
</div>
<p className="text-xs text-zinc-500">Microcontrollers</p>
<div className="flex items-center justify-between mt-2 pt-1">
<span className="text-sm font-medium text-white">$24.00</span>
<button className="w-7 h-7 rounded-full bg-zinc-800 text-zinc-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:plus" data-strokeWidth="2" data-width="16"></span>
</button>
</div>
</div>
</div>

<div className="group bg-zinc-925 border border-zinc-900 rounded-xl p-3 hover:border-zinc-700 transition-all duration-300">
<div className="relative aspect-square bg-zinc-900 rounded-lg mb-3 overflow-hidden">
<img alt="Soldering Iron" className="object-cover w-full h-full opacity-70 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="space-y-1">
<div className="flex justify-between items-start">
<h4 className="text-sm text-zinc-200 font-medium leading-tight">Soldering Kit</h4>
</div>
<p className="text-xs text-zinc-500">Workshop</p>
<div className="flex items-center justify-between mt-2 pt-1">
<span className="text-sm font-medium text-white">$45.50</span>
<button className="w-7 h-7 rounded-full bg-zinc-800 text-zinc-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:plus" data-strokeWidth="2" data-width="16"></span>
</button>
</div>
</div>
</div>

<div className="group bg-zinc-925 border border-zinc-900 rounded-xl p-3 hover:border-zinc-700 transition-all duration-300">
<div className="relative aspect-square bg-zinc-900 rounded-lg mb-3 overflow-hidden">
<img alt="GPU" className="object-cover w-full h-full opacity-70 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="space-y-1">
<div className="flex justify-between items-start">
<h4 className="text-sm text-zinc-200 font-medium leading-tight">RTX Graphics</h4>
</div>
<p className="text-xs text-zinc-500">Components</p>
<div className="flex items-center justify-between mt-2 pt-1">
<span className="text-sm font-medium text-white">$499.00</span>
<button className="w-7 h-7 rounded-full bg-zinc-800 text-zinc-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:plus" data-strokeWidth="2" data-width="16"></span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
<span className="iconify" data-icon="lucide:truck" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="flex-1">
<h4 className="text-sm font-medium text-zinc-200">Free Delivery</h4>
<p className="text-xs text-zinc-500">On all hardware orders over $500</p>
</div>
<span className="iconify text-zinc-600" data-icon="lucide:chevron-right" data-strokeWidth="1.5" data-width="16"></span>
</div>
</main>

<nav className="absolute bottom-0 w-full bg-zinc-950/90 backdrop-blur-xl border-t border-zinc-900 pb-safe pt-2">
<div className="grid grid-cols-4 h-16 items-center">
<a className="flex flex-col items-center gap-1 text-blue-500 group" href="#">
<span className="iconify" data-icon="lucide:home" data-strokeWidth="2" data-width="22"></span>
<span className="text-[10px] font-medium">Home</span>
</a>
<a className="flex flex-col items-center gap-1 text-zinc-500 hover:text-zinc-300 transition-colors group" href="#">
<span className="iconify" data-icon="lucide:grid" data-strokeWidth="1.5" data-width="22"></span>
<span className="text-[10px] font-medium">Catalog</span>
</a>
<a className="flex flex-col items-center gap-1 text-zinc-500 hover:text-zinc-300 transition-colors group" href="#">
<div className="relative">
<span className="iconify" data-icon="lucide:shopping-bag" data-strokeWidth="1.5" data-width="22"></span>
<span className="absolute -top-1 -right-1.5 w-3.5 h-3.5 bg-blue-600 rounded-full text-[9px] text-white flex items-center justify-center border border-zinc-950">2</span>
</div>
<span className="text-[10px] font-medium">Cart</span>
</a>
<a className="flex flex-col items-center gap-1 text-zinc-500 hover:text-zinc-300 transition-colors group" href="#">
<span className="iconify" data-icon="lucide:user" data-strokeWidth="1.5" data-width="22"></span>
<span className="text-[10px] font-medium">Account</span>
</a>
</div>

<div className="h-5 w-full"></div>
</nav>
</div>

    </>
  );
}
