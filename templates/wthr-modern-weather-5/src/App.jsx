import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function handleSearch(event) {
            event.preventDefault();
            const input = document.getElementById('search-input');
            const cityName = document.getElementById('city-name');
            const value = input.value.trim();
            
            if (value !== '') {
                // Formatting city name (capitalize each word)
                const formattedCity = value.replace(/\b\w/g, char => char.toUpperCase());
                
                // Add a small fade effect while updating
                cityName.style.opacity = '0';
                setTimeout(() => {
                    cityName.textContent = formattedCity;
                    cityName.style.opacity = '1';
                }, 150);
                
                input.value = '';
                input.blur();
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="w-full max-w-4xl bg-[#111111] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row relative">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[100px]"></div>
</div>

<div className="flex-1 p-8 md:border-r border-white/5 flex flex-col justify-between relative z-10 bg-gradient-to-b from-[#161616] to-transparent">

<header className="flex justify-between items-center mb-8">
<div className="font-medium tracking-tighter text-lg text-white">WTHR</div>
<form className="relative flex items-center group" id="search-form" onsubmit="handleSearch(event)">
<iconify-icon className="absolute left-3 text-white/40 group-focus-within:text-white/70 transition-colors" icon="solar:magnifer-linear" strokeWidth="1.5" width="16"></iconify-icon>
<input autocomplete="off" className="bg-white/5 border border-white/10 rounded-full py-2 pl-9 pr-4 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all duration-300 w-36 sm:w-48 focus:w-48 sm:focus:w-56" id="search-input" placeholder="Search city..." required="" type="text"/>
</form>
</header>

<div className="my-auto flex flex-col items-center md:items-start text-center md:text-left py-12">
<div className="flex items-center justify-center md:justify-start gap-4 mb-6">
<iconify-icon className="text-white drop-shadow-md" icon="solar:cloud-sun-linear" strokeWidth="1.5" width="64"></iconify-icon>
</div>
<h1 className="text-7xl sm:text-8xl font-medium tracking-tighter text-white mb-2 leading-none">68°</h1>
<h2 className="text-xl sm:text-2xl font-medium tracking-tight text-white/90 mb-1 transition-all duration-300" id="city-name">San Francisco, CA</h2>
<p className="text-sm text-white/50 flex items-center gap-2 justify-center md:justify-start">
<span>Partly Cloudy</span>
<span className="w-1 h-1 rounded-full bg-white/20"></span>
<span>H:72° L:54°</span>
</p>
</div>

<div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
<span className="text-xs text-white/50">Precipitation Alerts</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white/10 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-white/20 border border-white/10"></div>
</label>
</div>
</div>

<div className="flex-[1.2] p-8 flex flex-col gap-8 relative z-10 bg-[#0c0c0c]/50">

<section className="flex flex-col gap-4">
<div className="flex items-center justify-between">
<h3 className="text-xs font-medium text-white/40 uppercase tracking-widest">Today</h3>
<a className="text-xs text-white/40 hover:text-white/70 transition-colors flex items-center gap-1" href="#">
                        More <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="12"></iconify-icon>
</a>
</div>
<div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2 -mx-2 px-2">

<div className="flex flex-col items-center gap-3 min-w-[4rem] bg-white/10 border border-white/10 rounded-2xl py-4 transition-transform hover:-translate-y-1">
<span className="text-xs font-medium text-white">Now</span>
<iconify-icon className="text-white" icon="solar:cloud-sun-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-sm font-medium text-white">68°</span>
</div>
<div className="flex flex-col items-center gap-3 min-w-[4rem] bg-white/[0.02] border border-white/5 rounded-2xl py-4 transition-transform hover:-translate-y-1">
<span className="text-xs text-white/50">1 PM</span>
<iconify-icon className="text-white/70" icon="solar:sun-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-sm font-medium text-white/90">70°</span>
</div>
<div className="flex flex-col items-center gap-3 min-w-[4rem] bg-white/[0.02] border border-white/5 rounded-2xl py-4 transition-transform hover:-translate-y-1">
<span className="text-xs text-white/50">2 PM</span>
<iconify-icon className="text-white/70" icon="solar:sun-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-sm font-medium text-white/90">72°</span>
</div>
<div className="flex flex-col items-center gap-3 min-w-[4rem] bg-white/[0.02] border border-white/5 rounded-2xl py-4 transition-transform hover:-translate-y-1">
<span className="text-xs text-white/50">3 PM</span>
<iconify-icon className="text-white/70" icon="solar:cloud-sun-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-sm font-medium text-white/90">71°</span>
</div>
<div className="flex flex-col items-center gap-3 min-w-[4rem] bg-white/[0.02] border border-white/5 rounded-2xl py-4 transition-transform hover:-translate-y-1">
<span className="text-xs text-white/50">4 PM</span>
<iconify-icon className="text-white/70" icon="solar:clouds-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-sm font-medium text-white/90">69°</span>
</div>
<div className="flex flex-col items-center gap-3 min-w-[4rem] bg-white/[0.02] border border-white/5 rounded-2xl py-4 transition-transform hover:-translate-y-1">
<span className="text-xs text-white/50">5 PM</span>
<iconify-icon className="text-white/70" icon="solar:cloud-water-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-sm font-medium text-white/90">65°</span>
</div>
</div>
</section>

<section className="flex flex-col gap-4">
<h3 className="text-xs font-medium text-white/40 uppercase tracking-widest">Conditions</h3>
<div className="grid grid-cols-2 gap-3">
<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col gap-2 hover:bg-white/[0.04] transition-colors">
<div className="flex items-center gap-2 text-white/40">
<iconify-icon icon="solar:wind-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs">Wind</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-lg font-medium tracking-tight text-white">12</span>
<span className="text-xs text-white/40">mph</span>
</div>
</div>
<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col gap-2 hover:bg-white/[0.04] transition-colors">
<div className="flex items-center gap-2 text-white/40">
<iconify-icon icon="solar:drop-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs">Humidity</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-lg font-medium tracking-tight text-white">45</span>
<span className="text-xs text-white/40">%</span>
</div>
</div>
<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col gap-2 hover:bg-white/[0.04] transition-colors">
<div className="flex items-center gap-2 text-white/40">
<iconify-icon icon="solar:sun-fog-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs">UV Index</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-lg font-medium tracking-tight text-white">4</span>
<span className="text-xs text-white/40">Mod</span>
</div>
</div>
<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col gap-2 hover:bg-white/[0.04] transition-colors">
<div className="flex items-center gap-2 text-white/40">
<iconify-icon icon="solar:eye-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs">Visibility</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-lg font-medium tracking-tight text-white">10</span>
<span className="text-xs text-white/40">mi</span>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-4">
<h3 className="text-xs font-medium text-white/40 uppercase tracking-widest">5-Day Forecast</h3>
<div className="flex flex-col">

<div className="flex items-center justify-between py-3 border-b border-white/5 group">
<span className="text-sm font-medium text-white w-12">Today</span>
<div className="flex items-center gap-2 text-white/30 w-16">
<iconify-icon className="text-white/70" icon="solar:cloud-sun-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex items-center gap-3 flex-1 justify-end">
<span className="text-xs text-white/40 font-medium w-6 text-right">54°</span>
<div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden relative">
<div className="absolute inset-y-0 left-[20%] right-[10%] bg-gradient-to-r from-blue-500/40 to-white/40 rounded-full"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[60%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_4px_rgba(255,255,255,0.5)]"></div>
</div>
<span className="text-xs font-medium text-white w-6 text-left">72°</span>
</div>
</div>

<div className="flex items-center justify-between py-3 border-b border-white/5 group">
<span className="text-sm text-white/60 group-hover:text-white/80 transition-colors w-12">Tue</span>
<div className="flex items-center gap-2 text-white/30 w-16">
<iconify-icon className="text-white/50 group-hover:text-white/70 transition-colors" icon="solar:sun-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex items-center gap-3 flex-1 justify-end">
<span className="text-xs text-white/40 font-medium w-6 text-right">55°</span>
<div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden relative">
<div className="absolute inset-y-0 left-[25%] right-[20%] bg-gradient-to-r from-blue-400/30 to-orange-400/30 rounded-full"></div>
</div>
<span className="text-xs font-medium text-white/80 w-6 text-left">68°</span>
</div>
</div>

<div className="flex items-center justify-between py-3 border-b border-white/5 group">
<span className="text-sm text-white/60 group-hover:text-white/80 transition-colors w-12">Wed</span>
<div className="flex items-center gap-1 text-blue-400/60 w-16">
<iconify-icon icon="solar:cloud-water-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-[10px] font-medium">40%</span>
</div>
<div className="flex items-center gap-3 flex-1 justify-end">
<span className="text-xs text-white/40 font-medium w-6 text-right">52°</span>
<div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden relative">
<div className="absolute inset-y-0 left-[15%] right-[30%] bg-gradient-to-r from-blue-500/40 to-blue-300/30 rounded-full"></div>
</div>
<span className="text-xs font-medium text-white/80 w-6 text-left">65°</span>
</div>
</div>

<div className="flex items-center justify-between py-3 border-b border-white/5 group">
<span className="text-sm text-white/60 group-hover:text-white/80 transition-colors w-12">Thu</span>
<div className="flex items-center gap-2 text-white/30 w-16">
<iconify-icon className="text-white/50 group-hover:text-white/70 transition-colors" icon="solar:clouds-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex items-center gap-3 flex-1 justify-end">
<span className="text-xs text-white/40 font-medium w-6 text-right">50°</span>
<div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden relative">
<div className="absolute inset-y-0 left-[5%] right-[40%] bg-gradient-to-r from-blue-600/30 to-blue-400/30 rounded-full"></div>
</div>
<span className="text-xs font-medium text-white/80 w-6 text-left">62°</span>
</div>
</div>

<div className="flex items-center justify-between py-3 group">
<span className="text-sm text-white/60 group-hover:text-white/80 transition-colors w-12">Fri</span>
<div className="flex items-center gap-2 text-white/30 w-16">
<iconify-icon className="text-white/50 group-hover:text-white/70 transition-colors" icon="solar:cloud-sun-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex items-center gap-3 flex-1 justify-end">
<span className="text-xs text-white/40 font-medium w-6 text-right">51°</span>
<div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden relative">
<div className="absolute inset-y-0 left-[10%] right-[25%] bg-gradient-to-r from-blue-500/30 to-orange-400/30 rounded-full"></div>
</div>
<span className="text-xs font-medium text-white/80 w-6 text-left">66°</span>
</div>
</div>
</div>
</section>
</div>
</main>


    </>
  );
}
