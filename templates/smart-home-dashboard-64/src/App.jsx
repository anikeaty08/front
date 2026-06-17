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
      

<nav className="hidden md:flex flex-col w-20 lg:w-72 h-full bg-[#f3f4f9] border-r border-[#e7e0ec] py-6 px-4 justify-between transition-all duration-300">
<div>

<div className="flex items-center gap-4 px-2 mb-10">
<div className="w-10 h-10 rounded-xl bg-[#6750a4] text-white flex items-center justify-center font-bold tracking-tight text-lg">
                    DM
                </div>
<span className="text-xl font-medium tracking-tight text-[#1c1b1f] hidden lg:block">Nexus</span>
</div>

<div className="flex flex-col gap-2">

<button className="flex items-center gap-4 px-4 py-4 lg:py-3 rounded-full bg-[#e8def8] text-[#1d192b] transition-colors group">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="font-medium text-sm hidden lg:block">Home</span>
</button>

<button className="flex items-center gap-4 px-4 py-4 lg:py-3 rounded-full hover:bg-[#e7e0ec] text-[#49454f] transition-colors group">
<iconify-icon icon="solar:devices-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="font-medium text-sm hidden lg:block">Devices</span>
</button>
<button className="flex items-center gap-4 px-4 py-4 lg:py-3 rounded-full hover:bg-[#e7e0ec] text-[#49454f] transition-colors group">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="font-medium text-sm hidden lg:block">Usage</span>
</button>
<button className="flex items-center gap-4 px-4 py-4 lg:py-3 rounded-full hover:bg-[#e7e0ec] text-[#49454f] transition-colors group">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="font-medium text-sm hidden lg:block">Settings</span>
</button>
</div>
</div>

<div className="mt-auto flex items-center gap-3 px-2 cursor-pointer hover:bg-[#e7e0ec] p-2 rounded-full transition-colors">
<div className="w-8 h-8 rounded-full bg-[#6750a4] text-white flex items-center justify-center text-xs font-medium">JD</div>
<div className="hidden lg:flex flex-col">
<span className="text-sm font-medium">John Doe</span>
<span className="text-xs text-[#49454f]">Admin</span>
</div>
</div>
</nav>

<main className="flex-1 h-full overflow-y-auto relative">

<header className="sticky top-0 z-20 bg-[#fdfcff]/90 backdrop-blur-sm px-6 py-4 flex items-center justify-between border-b border-[#e7e0ec]">
<div>
<h1 className="text-2xl font-normal tracking-tight text-[#1c1b1f]">Dashboard</h1>
<p className="text-sm text-[#49454f]">Good Morning, John</p>
</div>
<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-full hover:bg-[#f3f4f9] flex items-center justify-center text-[#49454f] transition-colors">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="md:hidden w-10 h-10 rounded-full hover:bg-[#f3f4f9] flex items-center justify-center text-[#49454f]">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</header>
<div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">

<section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-[#f3f4f9] rounded-[2rem] p-6 flex flex-col justify-between relative overflow-hidden group">
<div className="flex justify-between items-start z-10">
<div>
<span className="text-sm font-medium text-[#49454f] uppercase tracking-wide">Total Energy</span>
<h2 className="text-4xl font-normal tracking-tight mt-1 text-[#1c1b1f]">24.5 <span className="text-xl text-[#49454f]">kWh</span></h2>
</div>
<div className="bg-[#e8def8] text-[#1d192b] px-3 py-1 rounded-lg text-xs font-medium flex items-center gap-1">
<iconify-icon icon="solar:graph-up-linear" width="16"></iconify-icon>
                            -4% saved
                        </div>
</div>

<div className="mt-8 flex items-end justify-between h-32 gap-2 z-10">
<div className="w-full bg-[#d0bcff] rounded-t-lg h-[40%] hover:h-[45%] transition-all duration-300"></div>
<div className="w-full bg-[#d0bcff] rounded-t-lg h-[60%] hover:h-[65%] transition-all duration-300"></div>
<div className="w-full bg-[#d0bcff] rounded-t-lg h-[50%] hover:h-[55%] transition-all duration-300"></div>
<div className="w-full bg-[#d0bcff] rounded-t-lg h-[75%] hover:h-[80%] transition-all duration-300"></div>
<div className="w-full bg-[#6750a4] rounded-t-lg h-[85%] hover:h-[90%] transition-all duration-300 shadow-lg shadow-[#6750a4]/20"></div>
<div className="w-full bg-[#eaddff] rounded-t-lg h-[55%] hover:h-[60%] transition-all duration-300"></div>
<div className="w-full bg-[#eaddff] rounded-t-lg h-[45%] hover:h-[50%] transition-all duration-300"></div>
</div>
</div>

<div className="bg-[#6750a4] text-white rounded-[2rem] p-6 flex flex-col justify-between relative shadow-xl shadow-[#6750a4]/20">
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-white/80">Living Room</span>
<iconify-icon className="text-white/80" icon="solar:thermometer-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col items-center my-4">
<div className="text-6xl font-normal tracking-tighter">22°</div>
<div className="text-sm text-white/70 mt-1">Cooling...</div>
</div>
<div className="flex items-center justify-between bg-white/10 rounded-full p-1 backdrop-blur-md">
<button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
<iconify-icon icon="solar:minus-linear" width="20"></iconify-icon>
</button>
<span className="text-sm font-medium">Adjust</span>
<button className="w-10 h-10 rounded-full bg-white text-[#6750a4] hover:bg-[#eaddff] flex items-center justify-center transition-colors shadow-sm">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</section>

<h3 className="text-lg font-normal text-[#1c1b1f] mt-8 mb-4 px-2">Active Devices</h3>
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

<div className="bg-[#f3f4f9] rounded-[1.5rem] p-5 flex flex-col gap-4 border border-transparent hover:border-[#e7e0ec] transition-colors">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-full bg-[#eaddff] text-[#21005d] flex items-center justify-center">
<iconify-icon icon="solar:lightbulb-bolt-linear" width="24"></iconify-icon>
</div>

<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-[52px] h-8 bg-[#e7e0ec] border-2 border-[#79747e] peer-focus:outline-none rounded-full peer peer-checked:bg-[#6750a4] peer-checked:border-[#6750a4] transition-all after:content-[''] after:absolute after:top-[6px] after:left-[6px] after:bg-[#79747e] after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-[20px] peer-checked:after:bg-white peer-checked:after:w-6 peer-checked:after:h-6 peer-checked:after:top-[4px] peer-checked:after:left-[4px]"></div>
</label>
</div>
<div>
<h4 className="font-medium text-[#1c1b1f]">Studio Lights</h4>
<p className="text-xs text-[#49454f]">Philips Hue</p>
</div>
<div className="mt-auto pt-2">
<div className="flex justify-between text-xs text-[#49454f] mb-2 font-medium">
<span>Brightness</span>
<span>80%</span>
</div>
<input className="w-full" max="100" min="0" type="range" value="80"/>
</div>
</div>

<div className="bg-[#fff0f0] rounded-[1.5rem] p-5 flex flex-col gap-4 border border-transparent hover:border-[#ffdad6] transition-colors">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-full bg-[#ffdad6] text-[#410002] flex items-center justify-center">
<iconify-icon icon="solar:shield-warning-linear" width="24"></iconify-icon>
</div>

<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-[52px] h-8 bg-[#e7e0ec] border-2 border-[#79747e] peer-focus:outline-none rounded-full peer peer-checked:bg-[#b3261e] peer-checked:border-[#b3261e] transition-all after:content-[''] after:absolute after:top-[6px] after:left-[6px] after:bg-[#79747e] after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-[20px] peer-checked:after:bg-white peer-checked:after:w-6 peer-checked:after:h-6 peer-checked:after:top-[4px] peer-checked:after:left-[4px]"></div>
</label>
</div>
<div>
<h4 className="font-medium text-[#1c1b1f]">Main Entrance</h4>
<p className="text-xs text-[#49454f]">Disarmed</p>
</div>
<div className="mt-auto pt-2 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#b3261e]"></span>
<span className="text-xs text-[#49454f] font-medium">Last activity: 2m ago</span>
</div>
</div>

<div className="bg-[#f3f4f9] rounded-[1.5rem] p-5 flex flex-col gap-4 border border-transparent hover:border-[#e7e0ec] transition-colors">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-full bg-[#d0bcff] text-[#21005d] flex items-center justify-center">
<iconify-icon icon="solar:wi-fi-router-linear" width="24"></iconify-icon>
</div>
<button className="w-8 h-8 rounded-full hover:bg-[#e7e0ec] flex items-center justify-center text-[#49454f]">
<iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</div>
<div>
<h4 className="font-medium text-[#1c1b1f]">Wi-Fi Mesh</h4>
<p className="text-xs text-[#49454f] mt-1">12 Devices Connected</p>
</div>

<div className="mt-auto relative group">
<button className="w-full flex items-center justify-between bg-[#e7e0ec] hover:bg-[#d0d0d0] px-3 py-2 rounded-lg text-xs font-medium text-[#1c1b1f] transition-colors">
<span>Guest Network</span>
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="bg-[#21005d] text-[#eaddff] rounded-[1.5rem] p-5 flex flex-col gap-4 relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-[#6750a4] rounded-full blur-2xl -mr-8 -mt-8 opacity-50"></div>
<div className="flex justify-between items-start z-10">
<div className="w-10 h-10 rounded-full bg-[#eaddff]/10 flex items-center justify-center text-[#eaddff]">
<iconify-icon icon="solar:music-note-linear" width="24"></iconify-icon>
</div>
<iconify-icon className="animate-pulse" icon="solar:soundwave-linear" width="24"></iconify-icon>
</div>
<div className="z-10">
<h4 className="font-medium text-[#fdfcff]">Lo-Fi Beats</h4>
<p className="text-xs text-[#eaddff]/70">Bedroom Speaker</p>
</div>
<div className="mt-auto flex items-center justify-between gap-2 z-10">
<button className="text-[#eaddff] hover:text-white transition-colors">
<iconify-icon icon="solar:skip-previous-linear" width="24"></iconify-icon>
</button>
<button className="w-10 h-10 bg-[#eaddff] text-[#21005d] rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-md">
<iconify-icon icon="solar:pause-linear" width="20"></iconify-icon>
</button>
<button className="text-[#eaddff] hover:text-white transition-colors">
<iconify-icon icon="solar:skip-next-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="bg-white rounded-[1.5rem] p-6 border border-[#e7e0ec]">
<h3 className="text-lg font-normal text-[#1c1b1f] mb-4">System Preferences</h3>
<div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
<div className="flex flex-wrap gap-6">

<label className="flex items-center cursor-pointer group">
<div className="relative flex items-center justify-center w-5 h-5">
<input className="peer appearance-none w-5 h-5 border-2 border-[#49454f] rounded-sm checked:bg-[#6750a4] checked:border-[#6750a4] transition-all" type="checkbox"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<span className="ml-3 text-sm text-[#49454f] font-medium group-hover:text-[#1c1b1f]">Eco Mode</span>
</label>
<label className="flex items-center cursor-pointer group">
<div className="relative flex items-center justify-center w-5 h-5">
<input checked="" className="peer appearance-none w-5 h-5 border-2 border-[#49454f] rounded-sm checked:bg-[#6750a4] checked:border-[#6750a4] transition-all" type="checkbox"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<span className="ml-3 text-sm text-[#49454f] font-medium group-hover:text-[#1c1b1f]">Auto-Updates</span>
</label>
<label className="flex items-center cursor-pointer group">
<div className="relative flex items-center justify-center w-5 h-5">
<input className="peer appearance-none w-5 h-5 border-2 border-[#49454f] rounded-sm checked:bg-[#6750a4] checked:border-[#6750a4] transition-all" type="checkbox"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<span className="ml-3 text-sm text-[#49454f] font-medium group-hover:text-[#1c1b1f]">Notifications</span>
</label>
</div>

<button className="bg-[#6750a4] hover:bg-[#6750a4]/90 text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-lg shadow-[#6750a4]/20 transition-all active:scale-95 flex items-center gap-2">
<iconify-icon icon="solar:restart-linear" width="18"></iconify-icon>
                        Reboot Hub
                    </button>
</div>
</section>
</div>
</main>

    </>
  );
}
