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
      

<div className="w-44 h-56 bg-black rounded-[40px] p-3 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl items-center justify-center">
<div className="absolute top-2 right-3 text-xs text-zinc-500 font-medium z-10">10:09</div>
<div className="relative w-28 h-28 flex items-center justify-center mt-2">

<svg className="w-full h-full -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="40" stroke="#27272a" strokeWidth="8"></circle>
<circle cx="50" cy="50" fill="none" r="30" stroke="#27272a" strokeWidth="8"></circle>
<circle cx="50" cy="50" fill="none" r="20" stroke="#27272a" strokeWidth="8"></circle>
<circle cx="50" cy="50" fill="none" r="40" stroke="#f43f5e" stroke-dasharray="250" stroke-dashoffset="60" strokeLinecap="round" strokeWidth="8"></circle>
<circle cx="50" cy="50" fill="none" r="30" stroke="#10b981" stroke-dasharray="188" stroke-dashoffset="40" strokeLinecap="round" strokeWidth="8"></circle>
<circle cx="50" cy="50" fill="none" r="20" stroke="#0ea5e9" stroke-dasharray="125" stroke-dashoffset="10" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<div className="absolute flex flex-col items-center">
<iconify-icon className="text-rose-500 text-sm" icon="solar:fire-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="mt-4 flex gap-3 text-xs font-medium">
<span className="text-rose-500">420</span>
<span className="text-emerald-500">32</span>
<span className="text-sky-500">8</span>
</div>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-4 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl justify-between">
<div className="flex justify-between items-start w-full">
<iconify-icon className="text-rose-500 text-2xl tracking-tight" icon="solar:heart-pulse-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-xs text-zinc-500 font-medium">10:09</div>
</div>
<div className="flex flex-col mb-2">
<div className="text-4xl tracking-tight font-semibold text-white leading-none mb-1">68</div>
<div className="text-xs text-rose-500 font-medium tracking-wide uppercase">Current BPM</div>
</div>
<div className="w-full bg-zinc-900 rounded-xl p-2 flex items-center justify-between">
<span className="text-xs text-zinc-400 font-medium">Resting</span>
<span className="text-sm font-semibold text-white">54</span>
</div>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-4 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl">
<div className="absolute top-2 right-3 text-xs text-zinc-500 font-medium z-10">10:09</div>
<div className="text-xs text-zinc-400 font-medium mb-2 uppercase tracking-wide">Today</div>
<div className="flex items-end h-20 gap-1 w-full mt-2">
<div className="w-full bg-rose-500/30 rounded-sm h-1/4"></div>
<div className="w-full bg-rose-500/50 rounded-sm h-2/4"></div>
<div className="w-full bg-rose-500 rounded-sm h-full"></div>
<div className="w-full bg-rose-500/80 rounded-sm h-3/4"></div>
<div className="w-full bg-rose-500/40 rounded-sm h-1/3"></div>
<div className="w-full bg-rose-500/60 rounded-sm h-2/3"></div>
<div className="w-full bg-rose-500/30 rounded-sm h-1/4"></div>
</div>
<div className="mt-auto flex justify-between text-xs font-medium text-zinc-500 border-t border-zinc-800 pt-2">
<span>Min 48</span>
<span>Max 142</span>
</div>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-4 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl justify-center items-center">
<div className="absolute top-2 right-3 text-xs text-zinc-500 font-medium z-10">10:09</div>
<iconify-icon className="text-emerald-500 text-3xl tracking-tight mb-2" icon="solar:walking-round-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-3xl tracking-tight font-semibold text-white">8,432</div>
<div className="text-xs text-emerald-500 font-medium uppercase tracking-wide mt-1 mb-4">Steps Today</div>
<div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[80%] rounded-full"></div>
</div>
<div className="text-xs text-zinc-500 mt-2 font-medium">Goal: 10k</div>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-3 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl">
<div className="absolute top-2 right-3 text-xs text-zinc-500 font-medium z-10 bg-black pl-2">10:09</div>
<div className="text-xs text-zinc-400 font-medium mb-3 pl-1 uppercase tracking-wide">Workouts</div>
<div className="flex flex-col gap-2 overflow-hidden h-full">
<div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-2 flex items-center gap-3 w-full">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
<iconify-icon className="text-lg" icon="solar:running-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm font-medium text-white">Run</span>
</div>
<div className="bg-zinc-900 rounded-2xl p-2 flex items-center gap-3 w-full">
<div className="w-8 h-8 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center shrink-0">
<iconify-icon className="text-lg" icon="solar:bicycle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-300">Cycle</span>
</div>
<div className="bg-zinc-900 rounded-2xl p-2 flex items-center gap-3 w-full">
<div className="w-8 h-8 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center shrink-0">
<iconify-icon className="text-lg" icon="solar:swimming-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-300">Swim</span>
</div>
</div>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-4 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl justify-between">
<div className="absolute top-2 right-3 text-xs text-zinc-500 font-medium z-10">10:09</div>
<div className="text-xs text-emerald-400 font-medium uppercase tracking-widest mt-2">Running</div>
<div className="flex flex-col items-center justify-center flex-1">
<div className="text-4xl tracking-tight font-semibold text-yellow-400 leading-none">24:15</div>
<div className="text-xs text-zinc-500 font-medium mt-1">TIME</div>
</div>
<div className="flex justify-between items-end border-t border-zinc-800 pt-3">
<div className="flex flex-col">
<span className="text-sm font-semibold text-white">5'42"</span>
<span className="text-xs text-zinc-500 font-medium">PACE</span>
</div>
<div className="flex flex-col items-end">
<span className="text-sm font-semibold text-rose-500">142</span>
<span className="text-xs text-zinc-500 font-medium">HR</span>
</div>
</div>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-4 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl justify-between">
<div className="absolute top-2 right-3 text-xs text-zinc-500 font-medium z-10">10:09</div>
<div className="flex flex-col gap-4 mt-6">
<div className="flex flex-col">
<span className="text-2xl tracking-tight font-semibold text-sky-400">4.2</span>
<span className="text-xs text-zinc-500 font-medium">DISTANCE (KM)</span>
</div>
<div className="flex flex-col">
<span className="text-2xl tracking-tight font-semibold text-rose-400">312</span>
<span className="text-xs text-zinc-500 font-medium">ACTIVE CAL</span>
</div>
<div className="flex flex-col">
<span className="text-2xl tracking-tight font-semibold text-emerald-400">12</span>
<span className="text-xs text-zinc-500 font-medium">ELEVATION (M)</span>
</div>
</div>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-4 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl justify-center items-center gap-6">
<div className="absolute top-2 right-3 text-xs text-zinc-500 font-medium z-10">10:09</div>
<div className="flex gap-4">
<div className="flex flex-col items-center gap-2">
<div className="w-14 h-14 bg-rose-500/20 rounded-full flex items-center justify-center border border-rose-500/50">
<iconify-icon className="text-rose-500 text-2xl tracking-tight" icon="solar:close-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-medium text-rose-500">End</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-14 h-14 bg-yellow-500/20 rounded-full flex items-center justify-center border border-yellow-500/50">
<iconify-icon className="text-yellow-500 text-2xl tracking-tight" icon="solar:pause-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-medium text-yellow-500">Pause</span>
</div>
</div>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-3 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl">
<div className="absolute top-2 right-3 text-xs text-zinc-900 font-semibold z-10 bg-white/80 px-1.5 rounded-full">10:09</div>
<div className="absolute inset-0 bg-zinc-800 z-0">

<svg className="w-full h-full opacity-30" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M10,90 Q30,50 50,70 T90,10" fill="none" stroke="#a1a1aa" strokeLinecap="round" strokeWidth="2"></path>
<path d="M10,90 Q30,50 50,70 T90,10" fill="none" stroke="#34d399" stroke-dasharray="150" stroke-dashoffset="20" strokeLinecap="round" strokeWidth="4"></path>
</svg>
</div>
<div className="relative z-10 mt-auto bg-black/80 backdrop-blur-md rounded-2xl p-3 border border-zinc-800">
<div className="text-xs text-emerald-400 font-medium mb-1">Workout Complete</div>
<div className="text-xl tracking-tight font-semibold text-white">Outdoor Run</div>
<div className="text-xs text-zinc-400 mt-1">4.2 KM • 24:15</div>
</div>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-4 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl justify-between">
<div className="flex justify-between items-start w-full">
<iconify-icon className="text-indigo-400 text-2xl tracking-tight" icon="solar:moon-sleep-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-xs text-zinc-500 font-medium">10:09</div>
</div>
<div className="flex flex-col">
<div className="text-3xl tracking-tight font-semibold text-white leading-none">7h 24m</div>
<div className="text-xs text-indigo-400 font-medium uppercase tracking-wide mt-1">Time Asleep</div>
</div>
<div className="w-full flex h-6 gap-0.5 mt-2 rounded-full overflow-hidden">
<div className="h-full bg-sky-500 w-1/4"></div>
<div className="h-full bg-indigo-600 w-2/4"></div>
<div className="h-full bg-purple-500 w-1/4"></div>
</div>
<div className="flex justify-between text-xs text-zinc-500 font-medium mt-1">
<span>Awake</span>
<span>Deep</span>
</div>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-4 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl">
<div className="absolute top-2 right-3 text-xs text-zinc-500 font-medium z-10">10:09</div>
<div className="text-xs text-zinc-400 font-medium mb-3 uppercase tracking-wide">Stages</div>
<div className="flex flex-col gap-3">
<div className="flex flex-col gap-1">
<div className="flex justify-between text-xs">
<span className="text-indigo-400 font-medium">Core</span>
<span className="text-white font-medium">4h 12m</span>
</div>
<div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden"><div className="h-full bg-indigo-500 w-[60%]"></div></div>
</div>
<div className="flex flex-col gap-1">
<div className="flex justify-between text-xs">
<span className="text-purple-400 font-medium">Deep</span>
<span className="text-white font-medium">1h 45m</span>
</div>
<div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden"><div className="h-full bg-purple-500 w-[30%]"></div></div>
</div>
<div className="flex flex-col gap-1">
<div className="flex justify-between text-xs">
<span className="text-sky-400 font-medium">REM</span>
<span className="text-white font-medium">1h 27m</span>
</div>
<div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden"><div className="h-full bg-sky-500 w-[20%]"></div></div>
</div>
</div>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-4 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl justify-center items-center">
<div className="absolute top-2 right-3 text-xs text-zinc-500 font-medium z-10">10:09</div>
<div className="relative flex items-center justify-center mb-2">
<div className="absolute w-20 h-20 rounded-full border-4 border-cyan-500/20"></div>
<div className="absolute w-20 h-20 rounded-full border-4 border-cyan-500 border-t-transparent animate-[spin_3s_linear_infinite]"></div>
<iconify-icon className="text-cyan-500 text-3xl tracking-tight" icon="solar:drop-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-4xl tracking-tight font-semibold text-white mt-2">98<span className="text-xl tracking-tight text-zinc-500">%</span></div>
<div className="text-xs text-cyan-500 font-medium uppercase tracking-wide mt-1">Blood Oxygen</div>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-4 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl justify-between">
<div className="absolute top-2 right-3 text-xs text-zinc-500 font-medium z-10">10:09</div>
<div className="text-xs text-rose-500 font-medium uppercase tracking-wide mt-1">ECG</div>
<div className="flex-1 w-full flex items-center justify-center relative">

<svg className="w-full h-16" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0,20 L20,20 L25,10 L30,35 L35,5 L40,20 L100,20" fill="none" stroke="#f43f5e" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="bg-zinc-900 rounded-xl p-2 w-full text-center">
<div className="text-sm font-semibold text-white">Sinus Rhythm</div>
<div className="text-xs text-zinc-400">68 BPM Avg</div>
</div>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-4 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl justify-between items-center text-center">
<div className="absolute top-2 right-3 text-xs text-zinc-500 font-medium z-10">10:09</div>
<iconify-icon className="text-sky-400 text-3xl tracking-tight mt-4" icon="solar:glass-water-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="flex flex-col">
<div className="text-3xl tracking-tight font-semibold text-white">1.2<span className="text-lg text-zinc-500 font-medium">L</span></div>
<div className="text-xs text-zinc-500 font-medium mt-1">OF 2.5L GOAL</div>
</div>
<button className="w-full bg-sky-500/20 text-sky-400 font-medium text-sm py-2 rounded-full border border-sky-500/30">
             + Add Glass
         </button>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-4 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl justify-between">
<div className="flex justify-between items-start w-full">
<iconify-icon className="text-rose-500 text-2xl tracking-tight" icon="solar:fire-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-xs text-zinc-500 font-medium">10:09</div>
</div>
<div className="flex flex-col">
<div className="text-4xl tracking-tight font-semibold text-rose-500 leading-none">420</div>
<div className="text-xs text-zinc-400 font-medium mt-1 uppercase tracking-wide">Active Calories</div>
</div>
<div className="w-full flex flex-col gap-1 border-t border-zinc-800 pt-3">
<div className="flex justify-between text-xs">
<span className="text-zinc-500 font-medium">Total</span>
<span className="text-white font-medium">1,240 kcal</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-zinc-500 font-medium">Goal</span>
<span className="text-white font-medium">600 kcal</span>
</div>
</div>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-4 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl">
<div className="absolute top-2 right-3 text-xs text-zinc-500 font-medium z-10">10:09</div>
<div className="text-xs text-sky-400 font-medium mb-1 uppercase tracking-wide mt-1">Stand Hours</div>
<div className="text-2xl tracking-tight font-semibold text-white mb-2">8<span className="text-lg text-zinc-500">/12</span></div>
<div className="flex-1 w-full flex items-end justify-between gap-[2px]">

<div className="w-full bg-sky-500 rounded-sm h-full"></div>
<div className="w-full bg-sky-500 rounded-sm h-full"></div>
<div className="w-full bg-zinc-800 rounded-sm h-1/4"></div>
<div className="w-full bg-sky-500 rounded-sm h-full"></div>
<div className="w-full bg-sky-500 rounded-sm h-full"></div>
<div className="w-full bg-zinc-800 rounded-sm h-1/4"></div>
<div className="w-full bg-sky-500 rounded-sm h-full"></div>
<div className="w-full bg-sky-500 rounded-sm h-full"></div>
<div className="w-full bg-sky-500 rounded-sm h-full"></div>
<div className="w-full bg-zinc-800 rounded-sm h-1/4"></div>
<div className="w-full bg-sky-500 rounded-sm h-full"></div>
<div className="w-full bg-zinc-800 rounded-sm h-1/4"></div>
</div>
<div className="flex justify-between text-[10px] text-zinc-600 font-medium mt-1">
<span>6AM</span>
<span>6PM</span>
</div>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-4 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl justify-center items-center text-center">
<div className="absolute top-2 right-3 text-xs text-zinc-500 font-medium z-10">10:09</div>
<iconify-icon className="text-emerald-400 text-4xl tracking-tight mb-4" icon="solar:lotus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-xl tracking-tight font-semibold text-white mb-1">Breathe</div>
<div className="text-xs text-zinc-400 mb-6">Take a moment</div>
<button className="w-full bg-emerald-500/20 text-emerald-400 font-medium text-sm py-2 rounded-full border border-emerald-500/30">
             Start 1 min
         </button>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-4 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl justify-center items-center">
<div className="absolute top-2 right-3 text-xs text-zinc-500 font-medium z-10">10:09</div>
<div className="relative flex items-center justify-center w-24 h-24 mb-4">
<div className="absolute w-16 h-16 bg-emerald-500/30 rounded-full mix-blend-screen animate-ping"></div>
<div className="absolute w-20 h-20 bg-emerald-400/20 rounded-full mix-blend-screen animate-pulse"></div>
<div className="absolute w-24 h-24 bg-emerald-300/10 rounded-full mix-blend-screen"></div>
</div>
<div className="text-lg font-semibold text-emerald-400 tracking-tight">Inhale...</div>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-4 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl justify-center items-center text-center bg-gradient-to-b from-rose-900/40 to-black">
<div className="absolute top-2 right-3 text-xs text-zinc-500 font-medium z-10">10:09</div>
<div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(244,63,94,0.5)]">
<iconify-icon className="text-white text-xl" icon="solar:cup-star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-lg tracking-tight font-semibold text-white leading-tight mb-1">Move Goal<br/>Reached!</div>
<div className="text-xs text-rose-400 font-medium">400 / 400 kcal</div>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-4 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl justify-center items-center text-center bg-gradient-to-b from-sky-900/40 to-black">
<div className="absolute top-2 right-3 text-xs text-zinc-500 font-medium z-10">10:09</div>
<iconify-icon className="text-sky-400 text-3xl tracking-tight mb-3" icon="solar:armchair-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-lg tracking-tight font-semibold text-white leading-tight mb-2">Time to<br/>stand!</div>
<div className="text-xs text-zinc-400">Stand up and move for 1 minute.</div>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-4 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl">
<div className="absolute top-2 right-3 text-xs text-zinc-500 font-medium z-10">10:09</div>
<div className="text-xs text-zinc-400 font-medium mb-1 uppercase tracking-wide">This Week</div>
<div className="text-xl tracking-tight font-semibold text-white mb-2">3,240 <span className="text-xs text-zinc-500 font-normal">kcal</span></div>
<div className="flex items-end justify-between h-20 gap-1 w-full border-b border-zinc-800 pb-1">

<div className="w-full bg-rose-500 rounded-sm h-[40%]"></div>
<div className="w-full bg-rose-500 rounded-sm h-[60%]"></div>
<div className="w-full bg-rose-500 rounded-sm h-[90%]"></div>
<div className="w-full bg-rose-500 rounded-sm h-[50%]"></div>
<div className="w-full bg-rose-500 rounded-sm h-[70%]"></div>
<div className="w-full bg-rose-500 rounded-sm h-[30%]"></div>
<div className="w-full bg-rose-500/50 rounded-sm h-[10%]"></div>
</div>
<div className="flex justify-between text-[10px] text-zinc-600 font-medium mt-1 uppercase">
<span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
</div>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-4 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl">
<div className="absolute top-2 right-3 text-xs text-zinc-500 font-medium z-10">10:09</div>
<div className="text-xs text-zinc-400 font-medium mb-3 uppercase tracking-wide">Sharing</div>
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs font-semibold tracking-tighter">ME</div>
<span className="text-sm font-medium text-white">420</span>
</div>
<iconify-icon className="text-yellow-500 text-lg" icon="solar:medal-star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex items-center justify-between opacity-70">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center text-xs font-semibold tracking-tighter">JD</div>
<span className="text-sm font-medium text-zinc-300">315</span>
</div>
</div>
<div className="flex items-center justify-between opacity-50">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center text-xs font-semibold tracking-tighter">AS</div>
<span className="text-sm font-medium text-zinc-300">290</span>
</div>
</div>
</div>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-4 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl items-center text-center">
<div className="absolute top-2 right-3 text-xs text-zinc-500 font-medium z-10">10:09</div>
<div className="w-14 h-14 bg-zinc-900 rounded-full flex items-center justify-center mb-2 mt-2 border border-zinc-800">
<span className="text-xl font-semibold tracking-tighter text-white">FT</span>
</div>
<div className="text-sm font-medium text-white mb-4">Fit Tracker</div>
<div className="flex justify-between w-full px-2 gap-4">
<div className="flex flex-col items-center">
<span className="text-lg font-semibold tracking-tight text-white">75</span>
<span className="text-[10px] text-zinc-500 uppercase font-medium">KG</span>
</div>
<div className="w-px h-8 bg-zinc-800"></div>
<div className="flex flex-col items-center">
<span className="text-lg font-semibold tracking-tight text-white">180</span>
<span className="text-[10px] text-zinc-500 uppercase font-medium">CM</span>
</div>
</div>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-4 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl justify-center items-center">
<div className="absolute top-2 right-3 text-xs text-zinc-500 font-medium z-10">10:09</div>
<div className="text-xs text-zinc-400 font-medium mb-1 uppercase tracking-wide">Move Goal</div>
<div className="text-3xl tracking-tight font-semibold text-rose-500 mb-6">450 <span className="text-sm text-zinc-500 font-medium">kcal</span></div>
<div className="w-full flex items-center gap-3">
<button className="w-8 h-8 rounded-full bg-zinc-900 text-zinc-400 flex items-center justify-center border border-zinc-800 shrink-0">
<iconify-icon icon="solar:minus-linear"></iconify-icon>
</button>
<div className="h-2 w-full bg-zinc-900 rounded-full relative">
<div className="absolute left-0 top-0 h-full bg-rose-500 w-[60%] rounded-full"></div>
<div className="absolute left-[60%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow border-2 border-rose-500 -ml-2"></div>
</div>
<button className="w-8 h-8 rounded-full bg-zinc-900 text-zinc-400 flex items-center justify-center border border-zinc-800 shrink-0">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</button>
</div>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-3 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl">
<div className="absolute top-2 right-3 text-xs text-zinc-500 font-medium z-10 bg-black pl-2">10:09</div>
<div className="text-xs text-zinc-400 font-medium mb-3 pl-1 uppercase tracking-wide mt-1">Settings</div>
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between bg-zinc-900/80 px-3 py-2.5 rounded-2xl">
<span className="text-xs font-medium text-white">Auto-Pause</span>
<div className="w-8 h-4.5 bg-emerald-500 rounded-full relative p-0.5 shadow-inner flex items-center">
<div className="w-3.5 h-3.5 bg-white rounded-full absolute right-0.5 shadow-sm"></div>
</div>
</div>
<div className="flex items-center justify-between bg-zinc-900/80 px-3 py-2.5 rounded-2xl">
<span className="text-xs font-medium text-white">Voice Guide</span>
<div className="w-8 h-4.5 bg-zinc-700 rounded-full relative p-0.5 shadow-inner flex items-center">
<div className="w-3.5 h-3.5 bg-white rounded-full absolute left-0.5 shadow-sm"></div>
</div>
</div>
<div className="flex items-center justify-between bg-zinc-900/80 px-3 py-2.5 rounded-2xl">
<span className="text-xs font-medium text-white">Haptics</span>
<div className="w-8 h-4.5 bg-emerald-500 rounded-full relative p-0.5 shadow-inner flex items-center">
<div className="w-3.5 h-3.5 bg-white rounded-full absolute right-0.5 shadow-sm"></div>
</div>
</div>
</div>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-4 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl justify-between items-center text-center">
<div className="absolute top-2 right-3 text-xs text-zinc-500 font-medium z-10">10:09</div>
<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-rose-500 rounded-xl mt-4 shadow-lg flex items-center justify-center opacity-80">
<iconify-icon className="text-white text-2xl" icon="solar:music-note-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col w-full">
<div className="text-sm font-semibold text-white truncate px-2">Midnight City</div>
<div className="text-xs text-zinc-400 truncate px-2">M83</div>
</div>
<div className="flex items-center justify-center gap-4 w-full">
<iconify-icon className="text-zinc-400 text-xl" icon="solar:skip-previous-bold"></iconify-icon>
<div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:pause-bold"></iconify-icon>
</div>
<iconify-icon className="text-white text-xl" icon="solar:skip-next-bold"></iconify-icon>
</div>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-0 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl">
<div className="absolute top-3 right-4 text-xs text-zinc-900 font-semibold z-10 bg-white/80 px-1.5 rounded-full">10:09</div>
<div className="w-full h-full bg-zinc-900 relative">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#a1a1aa 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>
<svg className="absolute inset-0 w-full h-full" viewbox="0 0 100 100">
<path d="M20,100 L40,60 L80,40 L90,10" fill="none" stroke="#3b82f6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
</svg>

<div className="absolute top-[40%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
</div>
<div className="absolute bottom-3 left-3 right-3 bg-black/90 backdrop-blur-md rounded-2xl p-2 border border-zinc-800 flex justify-between items-center">
<div className="flex flex-col">
<span className="text-xs font-semibold text-white">0.2 km</span>
<span className="text-[10px] text-zinc-400">Turn right</span>
</div>
<iconify-icon className="text-blue-500 text-lg" icon="solar:routing-2-linear"></iconify-icon>
</div>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-4 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl justify-center items-center text-center">
<div className="absolute top-2 right-3 text-xs text-zinc-500 font-medium z-10">10:09</div>

<div className="relative w-20 h-20 flex items-center justify-center mb-4">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
<div className="relative w-12 h-12 bg-black rounded-full flex items-center justify-center border border-zinc-800 z-10">
<iconify-icon className="text-white text-xl" icon="solar:microphone-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="text-sm font-medium text-white mb-1">Listening...</div>
<div className="text-xs text-zinc-400 italic">"Start an outdoor run"</div>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-4 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl justify-center items-center text-center bg-gradient-to-b from-orange-900/30 to-black">
<div className="absolute top-2 right-3 text-xs text-zinc-500 font-medium z-10">10:09</div>
<iconify-icon className="text-orange-400 text-3xl tracking-tight mb-3" icon="solar:pill-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-lg tracking-tight font-semibold text-white leading-tight mb-1">Vitamin D</div>
<div className="text-xs text-zinc-400 mb-4">1 Pill • 10:00 AM</div>
<button className="w-full bg-orange-500/20 text-orange-400 font-medium text-sm py-2 rounded-full border border-orange-500/30">
             Log as Taken
         </button>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-4 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl justify-center items-center">
<div className="absolute top-2 right-3 text-xs text-zinc-500 font-medium z-10">10:09</div>
<div className="text-xs text-zinc-400 font-medium mb-4 uppercase tracking-wide">Log Weight</div>
<div className="flex items-center justify-between w-full mb-6">
<button className="w-8 h-8 rounded-full bg-zinc-900 text-zinc-400 flex items-center justify-center border border-zinc-800">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="flex flex-col items-center">
<div className="text-3xl tracking-tight font-semibold text-white leading-none">75.4</div>
<span className="text-[10px] text-zinc-500 uppercase font-medium mt-1">KG</span>
</div>
<button className="w-8 h-8 rounded-full bg-zinc-900 text-zinc-400 flex items-center justify-center border border-zinc-800">
<iconify-icon icon="solar:alt-arrow-up-linear"></iconify-icon>
</button>
</div>
<button className="w-full bg-zinc-800 text-white font-medium text-sm py-2 rounded-full">
             Save
         </button>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-4 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl justify-between">
<div className="absolute top-2 right-3 text-xs text-zinc-500 font-medium z-10">10:09</div>
<div className="text-xs text-yellow-500 font-medium uppercase tracking-widest mt-2 flex items-center gap-1">
<iconify-icon icon="solar:bicycle-linear"></iconify-icon> Cycling
        </div>
<div className="flex flex-col items-center justify-center flex-1">
<div className="text-4xl tracking-tight font-semibold text-white leading-none">24.5</div>
<div className="text-xs text-zinc-500 font-medium mt-1">KM/H</div>
</div>
<div className="flex justify-between items-end border-t border-zinc-800 pt-3">
<div className="flex flex-col">
<span className="text-sm font-semibold text-white">12.4</span>
<span className="text-xs text-zinc-500 font-medium">KM</span>
</div>
<div className="flex flex-col items-end">
<span className="text-sm font-semibold text-rose-500">135</span>
<span className="text-xs text-zinc-500 font-medium">HR</span>
</div>
</div>
</div>

<div className="w-44 h-56 bg-black rounded-[40px] p-4 flex flex-col relative border-[5px] border-zinc-900 overflow-hidden shrink-0 shadow-2xl justify-center items-center text-center">
<div className="absolute top-2 right-3 text-xs text-zinc-500 font-medium z-10">10:09</div>
<iconify-icon className="text-yellow-500 text-4xl tracking-tight mb-2" icon="solar:battery-charge-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-2xl tracking-tight font-semibold text-white mb-1">15%</div>
<div className="text-xs text-zinc-400 mb-4 px-2">Battery low. Enable Power Saving for workout?</div>
<div className="flex w-full gap-2">
<button className="flex-1 bg-zinc-800 text-white font-medium text-xs py-2 rounded-xl">Skip</button>
<button className="flex-1 bg-yellow-500/20 text-yellow-500 border border-yellow-500/30 font-medium text-xs py-2 rounded-xl">Enable</button>
</div>
</div>

    </>
  );
}
