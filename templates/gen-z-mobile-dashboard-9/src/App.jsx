import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="w-full max-w-md bg-[#FDFDFD] relative shadow-2xl overflow-hidden min-h-screen">

<div className="absolute top-[-10%] left-[-20%] w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
<div className="absolute top-[-10%] right-[-20%] w-96 h-96 bg-lime-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
<div className="absolute bottom-[20%] left-[20%] w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>

<header className="relative px-6 pt-12 pb-6 flex justify-between items-center z-10">
<div>
<p className="text-sm font-medium text-slate-500 mb-0.5">Oct 24</p>
<h1 className="text-3xl font-semibold tracking-tight text-slate-900">Hi, Alex ✌️</h1>
</div>
<button className="relative p-3 rounded-full bg-white/50 border border-white hover:bg-white transition-colors group">
<div className="absolute top-3 right-3.5 w-2 h-2 bg-red-400 rounded-full border-2 border-white z-10"></div>
<iconify-icon className="text-2xl text-slate-700 group-hover:rotate-12 transition-transform" icon="solar:bell-bing-linear" strokeWidth="1.5"></iconify-icon>
</button>
</header>

<main className="relative px-5 pb-32 z-10 flex flex-col gap-5">

<div className="glass-panel rounded-3xl p-1 flex items-center shadow-sm">
<div className="p-3 pl-4">
<iconify-icon className="text-xl text-slate-400" icon="solar:magnifer-linear"></iconify-icon>
</div>
<input className="w-full bg-transparent border-none outline-none text-sm placeholder-slate-400 text-slate-700 h-10 pr-4" placeholder="Search content..." type="text"/>
</div>

<div className="grid grid-cols-2 gap-4">

<div className="col-span-2 rounded-[2rem] bg-slate-900 text-white p-6 relative overflow-hidden shadow-lg group">

<div className="bg-[conic-gradient(from_210deg,var(--tw-gradient-stops))] from-slate-400 via-slate-600 to-slate-400 opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute -right-10 -bottom-10 w-48 h-48 bg-lime-400 rounded-full blur-[80px] opacity-20"></div>
<div className="z-10 flex relative items-start justify-between">
<div>
<p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Total Reach</p>
<h2 className="text-4xl font-semibold tracking-tight">2.4M</h2>
<div className="flex items-center gap-1 mt-2 text-lime-400 bg-lime-400/10 w-max px-2 py-1 rounded-lg">
<iconify-icon className="text-sm" icon="solar:graph-up-linear"></iconify-icon>
<span className="text-xs font-medium">+12.5%</span>
</div>
</div>

<div className="w-16 h-16 rounded-full bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.9),_rgba(163,230,53,0.4),_rgba(20,20,20,0.8))] shadow-[0_10px_20px_rgba(0,0,0,0.3)] animate-float border border-white/10"></div>
</div>
<div className="relative z-10 mt-8 flex gap-3">
<button className="flex-1 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors border border-white/10 py-3 rounded-2xl text-xs font-medium flex justify-center items-center gap-2">
<iconify-icon className="text-lg" icon="solar:wallet-linear"></iconify-icon>
                            Withdraw
                        </button>
<button className="w-12 h-12 flex items-center justify-center bg-lime-400 text-slate-900 rounded-2xl hover:scale-105 transition-transform">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>

<div className="glass-panel rounded-[2rem] p-5 flex flex-col justify-between h-40 relative group hover:bg-white/80 transition-colors">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<iconify-icon className="text-slate-400 text-lg rotate-90" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<div className="">
<h3 className="text-2xl font-semibold tracking-tight text-slate-800">84k</h3>
<p className="text-xs text-slate-500 font-medium">New Followers</p>
</div>

<svg className="absolute bottom-5 right-5 w-16 h-8 text-purple-400 opacity-50" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 50 20">
<path className="" d="M0 15 Q 10 20 25 10 T 50 5" strokeLinecap="round"></path>
</svg>
</div>

<div className="flex flex-col overflow-hidden bg-lime-300 h-40 rounded-[2rem] px-5 py-5 relative justify-between">
<div className="absolute -top-10 -right-10 w-32 h-32 bg-lime-300 rounded-full blur-xl"></div>
<div className="relative z-10 flex justify-between items-center">
<span className="text-lime-900 font-semibold text-sm">Online</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-lime-200 checked:bg-white transition-all duration-300 left-0" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-lime-900/10 cursor-pointer" htmlFor="toggle"></label>
</div>
</div>
<div className="relative z-10">
<div className="leading-tight text-lg font-medium text-lime-950 tracking-tight bg-lime-300">
                            Available forcollabs
                        </div>
</div>
<button className="relative z-10 mt-2 w-8 h-8 rounded-full bg-lime-900/10 flex items-center justify-center text-lime-900 hover:bg-lime-900/20 transition-colors">
<iconify-icon className="text-base" icon="solar:settings-linear"></iconify-icon>
</button>
</div>

<div className="col-span-2 glass-panel rounded-[2rem] p-4 flex items-center gap-4 group">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 shadow-inner flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-white/20"></div>
<iconify-icon className="text-2xl text-white drop-shadow-md" icon="solar:music-note-slider-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-1">
<h4 className="text-slate-800 font-semibold text-sm truncate">Midnight City</h4>
<iconify-icon className="text-slate-400 hover:text-red-400 transition-colors cursor-pointer" icon="solar:heart-linear"></iconify-icon>
</div>
<p className="text-xs text-slate-500 mb-3 truncate">M83 • Hurry Up, We're Dreaming</p>

<div className="relative h-1 w-full bg-slate-200 rounded-full overflow-hidden">
<div className="absolute top-0 left-0 h-full w-1/3 bg-slate-800 rounded-full"></div>
</div>
</div>
<button className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
<iconify-icon className="text-lg ml-0.5" icon="solar:play-linear"></iconify-icon>
</button>
</div>

<div className="bg-white rounded-[2rem] p-5 border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-3 relative overflow-hidden">
<div className="w-full">
<div className="flex justify-between items-end mb-2">
<span className="text-xs font-medium text-slate-400">Disk Space</span>
<span className="text-sm font-semibold text-slate-800">72%</span>
</div>
<div className="w-full h-32 bg-slate-50 rounded-xl relative flex items-end justify-center overflow-hidden">
<div className="w-full h-[72%] bg-gradient-to-t from-purple-300 to-purple-200 rounded-b-xl animate-pulse"></div>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-3xl text-slate-400 mix-blend-multiply" icon="solar:cloud-storage-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-[2rem] p-0 overflow-hidden relative group cursor-pointer">
<img alt="Abstract" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-5 flex flex-col justify-end">
<p className="text-white/80 text-xs font-medium">Next Drop</p>
<h4 className="text-white font-semibold text-sm tracking-tight">Liquid Metal 3D</h4>
</div>
</div>
</div>
</main>

<nav className="absolute bottom-6 left-6 right-6 h-16 glass-nav rounded-[2rem] flex justify-around items-center px-2 shadow-[0_20px_40px_rgba(0,0,0,0.1)] z-50">
<a className="p-3 rounded-2xl bg-slate-900 text-white shadow-lg transition-transform hover:scale-105" href="#">
<iconify-icon className="text-xl" icon="solar:home-smile-linear"></iconify-icon>
</a>
<a className="p-3 rounded-2xl text-slate-400 hover:text-purple-500 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:pie-chart-2-linear"></iconify-icon>
</a>
<a className="p-3 rounded-2xl text-slate-400 hover:text-purple-500 transition-colors" href="#">
<iconify-icon className="text-2xl" icon="solar:add-circle-linear"></iconify-icon>
</a>
<a className="p-3 rounded-2xl text-slate-400 hover:text-purple-500 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:chat-round-linear"></iconify-icon>
</a>
<a className="p-3 rounded-2xl text-slate-400 hover:text-purple-500 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:user-circle-linear"></iconify-icon>
</a>
</nav>
</div>

    </>
  );
}
